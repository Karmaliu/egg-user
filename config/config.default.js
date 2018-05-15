'use strict';

module.exports = (appInfo) => {
	const config = (exports = {});

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1524886501410_3252';

	// add your config here
	config.middleware = [];
	//web安全csrf
	config.security = {
		csrf: {
			enable: false,
			ignoreJSON: true
		},
		// // 白名单
		// domainWhiteList: ['http://127.0.0.1:8000/']
	};
	config.cors = {
		enable: true,
		package: 'egg-cors',
	};
	config.mysql = {
		// 单数据库信息配置
		client: {
			// host
			host: '127.0.0.1',
			// 端口号
			port: '3306',
			// 用户名
			user: 'root',
			// 密码
			password: 'root',
			// 数据库名
			database: 'user'
		},
		// 是否加载到 app 上，默认开启
		app: true,
		// 是否加载到 agent 上，默认关闭
		agent: false
	};
	return config;
};


