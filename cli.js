#!/usr/bin/env node
const path = require("path");
const cac = require("cac");
const sao = require("sao");
const update = require("update-notifier");
const pkg = require("./package");

const cli = cac();

cli
  // Simply omit the command name, just brackets
  .command("<dir>", "Create UI Application")
  .action((dir, options) => {
    const targetPath = path.resolve(dir);
    console.log(`> Generating project in ${targetPath}`);
    const generator = path.join(__dirname);
    sao({ generator: generator, outDir: targetPath }).run();
  });

cli.parse();
