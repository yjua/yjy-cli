module.exports.initQuestion = [
    {
        type: 'list',
        name: 'templateName',
        message: '请选择要创建的模板：',
        choices:[
            {
                name:'管理后台',
                value:'admin'
            },{
                name:'多页面',
                value:'multi'
            }
        ]
    },{
        name: 'projectName',
        message: '请输入项目名称：',
    }
]

module.exports.templateObj = {
    admin:{
        url:'https://code.aliyun.com:hlmy/spa_admin.git'
    },
    multi:{
        url:''
    }

}