const superb = require("superb");

module.exports = {
  prompts: [
    {
      name: "name",
      message: `What's the name of your new project`,
    },
    {
      name: "description",
      message: "How would your describe your UI project",
    },
    {
      name: "framework",
      message: "What framework would you like to use?",
      type: "list",
      choices: ["react", "vue"],
    },
  ],
  actions: function () {
    if (this._answers.framework === "react") {
      return [
        {
          type: "add",
          files: "**",
        },
        {
          type: "move",
          patterns: {
            "_package.react.json": "package.json",
            "_webpack.react.config.js": "webpack.config.js",
            react_src: "src",
          },
        },
        {
          type: "remove",
          files: "_*.json",
        },
      ];
    }
    return [
      {
        type: "add",
        files: "**",
      },
      {
        type: "move",
        patterns: {
          "_package.vue.json": "package.json",
          "_webpack.vue.config.js": "webpack.config.js",
          vue_src: "src",
        },
      },
      {
        type: "remove",
        files: ["_*.json", "_*.config.js", "*_src"],
      },
    ];
  },
  async completed() {
    this.gitInit();
    await this.npmInstall();
  },
};
