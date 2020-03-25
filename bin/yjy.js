#!/usr/bin/env node

// 入口文件
const program = require('commander')
program.version('1.0.0')
.usage('<command> [programs]')
// .usage('<template-name> [project-name]')


program.command('init', '创建新项目')
	.command('create', '创建模板')

program.parse(process.argv)

// console.log(program.args)