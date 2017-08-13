#!/usr/bin/env node

'use strict';

const meow = require('meow');
const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const pkg = require('../lib/package');
const index = require('../lib/index');

const cli = meow(`
  USAGE: one-pager <org> <name>
`);

const org = cli.input[0];
const name = cli.input[1];
const folder = path.resolve(`./${name}`);

const exec = (command, cwd) => new Promise((resolve, reject) => {
  cp.exec(command, { cwd }, (err) => {
    if (err) return reject(err);
    resolve();
  });
});

Promise.resolve()
  .then(() => exec(`mkdir ${name}`), './')
  .then(() => exec('git init', folder))
  .then(() => exec(`git remote add origin git@github.com:${org}/${name}`, folder))
  .then(() => exec('mkdir -p src/components', folder))
  .then(() => exec('touch src/index.js', folder))
  .then(() => exec('touch src/components/app.js', folder))
  .then(() => exec('touch readme.md', folder))
  .then(() => exec(`cp ${__dirname}/../lib/eslintrc .eslintrc`, folder))
  .then(() => exec(`cp ${__dirname}/../lib/gitignore .gitignore`, folder))
  .then(() => fs.writeFileSync(path.join(folder, 'package.json'), pkg(org, name)))
  .then(() => fs.writeFileSync(path.join(folder, 'index.html'), index(name)))
  .then(() => exec('npm install', folder))
  .then(() => exec('git add .', folder))
  .then(() => exec('git commit -m "🌅"', folder))
  .catch((err) => console.error(err));
