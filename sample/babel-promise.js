/*
{
	"presets": [
		[
			"@babel/preset-env",
			{
				"modules": false,
				"debug": true,
				"targets": {
					"browsers": ["> 0.25%", "last 2 versions", "not dead", "ie >= 11"]
				},
				"useBuiltIns": "usage",
				"corejs": {
					"version": 3,
					"proposals": true
				}
			}
		]
	],
	"plugins": [
		[
			"@babel/plugin-transform-runtime",
			{
				"absoluteRuntime": false,
				"helpers": true,
				"regenerator": true
			}
		],
		["@babel/plugin-syntax-dynamic-import"],
		["@babel/plugin-proposal-class-properties"],
		["@babel/plugin-proposal-private-methods"],
		[
			"babel-plugin-root-import",
			{
				"rootPathSuffix": "./src",
				"rootPathPrefix": "@"
			}
		]
	]
}

*/

/* harmony import */ const core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__ =
	__webpack_require__(/*! core-js/modules/es.promise.js */ "5s+n");
/* harmony import */ const core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10___default =
	/* #__PURE__*/ __webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__);

const p = new Promise(() => {});

/*
All: 102KB
vendor/vue.js: 63.8KB
vendor/core-js: 34.91KB
src.js: 2.13KB
runtime.js: 1.15KB
*/
