// 创建Vue实例
const Vue = require('vue');

module.exports = function createApp(context) {
	return new Vue({
		data: {
			url: context.url
		},
		template: '<div>the visit url is: {{url}}</div>'
	})
}
