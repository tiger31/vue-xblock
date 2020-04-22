const CopyPlugin = require('copy-webpack-plugin');
//TODO evaluate
const __XBLOCK_INIT_FUNCTION__ = "TestXBlock";
const __XBLOCK_INIT_JS_FILE__ = "test.js";
module.exports = {
	/*
	 * It should work, but does not split functionality in chunks
	chainWebpack: config => {
		config.optimization.delete('splitChunks')
	},
	*/
	configureWebpack: {
		output: {
			jsonpFunction: 'jsonpFunction',
		},
		plugins:[
			new CopyPlugin([
				{ from: 'node_modules/vue/dist/vue.runtime.min.js', to: "vue.js" },
				{ from: 'public/init.js', to: `${__XBLOCK_INIT_JS_FILE__}` }
			])
		],
	}
};
