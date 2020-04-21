const CopyPlugin = require('copy-webpack-plugin');
//TODO evaluate
const __XBLOCK_INIT_FUNCTION__ = "TestXBlock";
const __XBLOCK_INIT_JS_FILE__ = "test.js";
module.exports = {
	configureWebpack: {
		plugins:[
			new CopyPlugin([
				{ from: 'public/vue.js', to: "vue.js" },
				{ from: 'public/init.js', to: `${__XBLOCK_INIT_JS_FILE__}` }
			])
		],
	}
};
