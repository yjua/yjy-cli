#!/usr/bin/env node
const inquirer = require('inquirer')
const chalk = require('chalk')
const ora = require('ora')
const download = require('download-git-repo')
const program = require('commander')

const { initQuestion, templateObj } = require('./question.js')

/**
 * 初始化，询问
 */
async function init() {
  const { templateName, projectName } = await inquirer.prompt(initQuestion)
  if (!projectName) {
    console.log(chalk.red('\n 项目名称不可为空! \n '))
    program.help()
    return
  }
  const url = templateObj[templateName].url

  console.log(chalk.white('\n Start generating... \n'))
  // 出现加载图标
  const spinner = ora('Downloading...')
  spinner.start()
  download(
    url,
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

init()
