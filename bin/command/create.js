#!/usr/bin/env node
/* eslint-disable no-undef */
// 创建一个新的模板
const program = require('commander')

program.parse(process.argv)

console.log('create')
console.log(program.args)
