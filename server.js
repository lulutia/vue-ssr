const Vue = require('vue');
const server = require('express')();
const renderer = require('vue-server-renderer').createRenderer({
	template: require('fs').readFileSync('./index.template.html', 'utf-8')
});
const createApp = require('./app');

server.get('*', (req, res) => {
	const context = {
		url: req.url
	}

	const outerContext = {
		title: 'happy'
	}
	const app = createApp(context);
	renderer.renderToString(app, outerContext, (err, html) => {
		if (err) {
			res.status(500).end('Internal Server Error');
			return;
		}

		res.end(html)
	})
})

server.listen(3000, function (error) {
  if (error) throw error
  console.log('Server is running at localhost:5000')
})