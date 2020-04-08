module.exports.initQuestion = [
	{
		type: "list",
		name: "templateName",
		message: "请选择要创建的模板：",
		choices:[
			{
				name:"vue-admin原始管理后台",
				value:"vue-admin",
				message: "该模板是原始开源模板"
			},
			{
				name:"改造后管理后台",
				value:"admin"
			},{
				name:"多页面",
				value:"multi"
			},{
				name:"退出",
				value:"exit"
			}
		]
	},{
		name: "projectName",
		message: "请输入项目名称(文件名称不能已存在)：",
	}
];

module.exports.templateObj = {
	"vue-admin":{
		url:"https://github.com:PanJiaChen/vue-admin-template"
	},
	admin:{
		url:"direct:https://code.aliyun.com/hlmy/spa_admin.git"
		// url:'https://github.com:kevva/download'
		// url:'https://github.com:hui-fly/myTest'
	},
	multi:{
		url:""
	},
	"exit":{
        
	}

};