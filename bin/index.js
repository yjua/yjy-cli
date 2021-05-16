#!/usr/bin/env node

// 入口文件
const program = require('commander')
const chalk = require('chalk')
program.version('1.0.0')
  .usage('<command> [programs]')
// .usage('<template-name> [project-name]')

program
  .command('init <template-name> <app-name>')
  .description('选择初始化一个模板')
  .action((template, name) => {
    const args = process.argv.slice(3)

    if (args.length > 2) {
      console.log(chalk.yellow('\n Info: 你输入的参数超过两个，前两个参数将会被使用，其他参数将会被丢弃'))
    }
    if (template !== 'Vue') {
      console.log(chalk.red('\n Info: 模板名称请暂时只支持Vue'))
      return
    }
    require('../lib/init')(template, name)
  })

program.parse(process.argv)
