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
				"regenerator": true,
				"corejs": {
					"version": 3,
					"proposals": true
				}
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


/***/ "Yvyk":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/promise.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

  module.exports = __webpack_require__(/*! core-js-pure/features/promise */ "mEwK");


  /* harmony import */ var _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/promise */ "Yvyk");
  /* harmony import */ var _babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_9__);
  
  var p = new (_babel_runtime_corejs3_core_js_promise__WEBPACK_IMPORTED_MODULE_9___default())(function () {});
  console.log(p);


  /*
  All: 111.07KB
  vendor/vue.js: 63.8KB
  vendor/core-js-pure.js: 43.71KB
  src.js: 2.34KB
  runtime.js: 1.22KB
  */