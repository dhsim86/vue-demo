module.exports = {
	root: true,
	env: {
		browser: true
	},
	extends: [
		"plugin:vue/essential",
		"plugin:promise/recommended",
		"plugin:import/recommended",
		"naver"
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@babel/eslint-parser",
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["vue"],
	rules: {
		"vue/multi-word-component-names": "off",
		"comma-dangle": ["error", "never"],
		"array-element-newline": "off"
	}
};
