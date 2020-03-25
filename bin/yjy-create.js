#!/usr/bin/env node
const program = require('commander')

program.parse(process.argv)

console.log('create')
console.log(program.args)