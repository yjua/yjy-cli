const inquirer = require('inquirer')
module.exports = [
  {
    type: 'rawlist',
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
      },
      new inquirer.Separator('-----------'),
      {
        name: '退出',
        value: 'exit',
        type: 'confirm'
      }
    ]
  }, {
    name: 'projectName',
    message: '请输入项目名称(文件名称不能已存在)：',
    when(answer) {
      return answer.templateName !== 'exit'
    }
  }, {
    type: 'confirm',
    name: 'exit',
    message: '是否要退出？'
  }
]

