#!/usr/bin/env node
const path = require("path");
const cac = require("cac");
const sao = require("sao");

const cli = cac();

cli
  // Simply omit the command name, just brackets
  .command("<dir>", "Create UI Application")
  .action((dir) => {
    const targetPath = path.resolve(dir);
    const generator = path.join(__dirname);
    console.log(`> Generating project in ${targetPath}`);
    sao({ generator: generator, outDir: targetPath }).run();
  });

cli.parse();
