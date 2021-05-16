
const inquirer = require('inquirer') // npm i inquirer -D
const chalk = require('chalk')
const ora = require('ora')
const download = require('download-git-repo')
const program = require('commander')

const templateObj = require('./templateUrl')
/**
 * 初始化，询问
 */
async function init(templateType, appName) {
  const { templateName } = await inquirer.prompt([{
    type: 'list',
    name: 'templateName',
    message: '请选择要创建的模板：',
    choices: [
      {
        name: 'vue-admin原始管理后台',
        value: 'vue-admin',
        message: '该模板是原始开源模板'
      },
      {
        name: '改造后管理后台',
        value: 'admin'
      }, {
        name: '多页面',
        value: 'multi'
      }, {
        name: '退出',
        value: 'exit'
      }
    ]
  }])

  if (!templateName) {
    console.log(chalk.red('\n 项目名称不可为空! \n '))
    program.help()
    return
  }

  const url = templateObj[templateName].url
  if (templateName === 'exit' || !url) {
    console.log('exit')
    return
  }

  console.log(chalk.white('\n Start generating... \n'))
  // 出现加载图标
  const spinner = ora('Downloading...')
  spinner.start()
  download(
    url,
    appName,
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
      console.log(`\n   ${chalk.green.bold(`cd ${appName}`)} `)
      console.log(`\n   ${chalk.green.bold('npm install')} \n`)
    }
  )
}

module.exports = (...args) => {
  return init(...args)
}
