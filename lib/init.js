#!/usr/bin/env node
const inquirer = require('inquirer')
const chalk = require('chalk')
const ora = require('ora')
const download = require('download-git-repo')
const program = require('commander')

const question = require('../bin/source/question.js')
const repo = require('../bin/source/repo.js')

/**
 * 初始化，询问
 */
async function init(template, projectName) {
  const res = await inquirer.prompt(question)
  const { templateName } = res
  // 退出
  if (templateName === 'exit') {
    return
  }

  if (repo[templateName].url === '') {
    console.log(chalk.red('\n 该项目暂无下载地址! \n'))
    return
  }

  if (!projectName) {
    console.log(chalk.red('\n 项目名称不可为空! \n '))
    program.help()
    return
  }

  console.log(chalk.white('\n Start generating... \n'))
  // 加载图标
  const spinner = ora('Downloading...')
  spinner.start()
  // 下载
  download(
    repo[templateName].url,
    projectName,
    { clone: true },
    err => {
      if (err) {
        spinner.fail()
        console.log(chalk.red(`Generation failed. ${err}`))
        return
      }
      // 结束加载图标
      spinner.succeed()

      console.log(chalk.green('\n Generation completed!'))
      console.log('\n To get started')
      console.log(`\n   ${chalk.green.bold(`cd ${projectName}`)} `)
      console.log(`\n   ${chalk.green.bold('npm install')} \n`)
    }
  )
}

module.exports = (...args) => {
  return init(...args)
}
