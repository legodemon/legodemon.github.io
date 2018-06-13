#!/usr/bin/env node

const exec = require('child_process').exec;

exec(`git log -S"${process.argv[2]}" --oneline`, (err, stdout, stderr) => {
  const commits = stdout.split('\n');
  commits.splice(-1,1);
  process.stdout.write(`${commits.pop()}\n`)
});