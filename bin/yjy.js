#!/usr/bin/env node
/* eslint-disable no-undef */

// 入口文件
const program = require('commander')
program.version('1.0.0')
  .usage('<command> [programs]')
// .usage('<template-name> [project-name]')

program.command('init', '创建新项目', { executableFile: './command/init.js' })
  .command('create', '创建模板', { executableFile: './command/create.js' })

program.parse(process.argv)
