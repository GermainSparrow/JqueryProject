/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/javascripts/login.js":
/*!*************************************!*\
  !*** ./public/javascripts/login.js ***!
  \*************************************/
/***/ (() => {

eval("$('button').on('click', function () {\r\n    let accountNumber = $('.account input').val();\r\n    let password = $('.password input').val()\r\n    if (accountNumber && password) {\r\n        $.ajax({\r\n            type: 'post',\r\n            url: 'http://127.0.0.1:3000/user/login',\r\n            data: { accountNumber: accountNumber, password: password },\r\n            success: function (data) {\r\n                console.log(data);\r\n                \r\n                if (data) {\r\n                    alert('登录成功');\r\n                    localStorage.studentId = data\r\n                    location.href = `http://127.0.0.1:3000/html/index2.html?id:${data}`\r\n                }\r\n                else {\r\n                    alert('账号或密码输入有误');\r\n                    $('.account input').val('');\r\n                    $('.password input').val('')\r\n                }\r\n            }\r\n        })\r\n    }\r\n    else {\r\n        alert('输入有误')\r\n    }\r\n})\n\n//# sourceURL=webpack://studenttestsystem/./public/javascripts/login.js?");

/***/ }),

/***/ "./public/mainJs/login.js":
/*!********************************!*\
  !*** ./public/mainJs/login.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _javascripts_login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../javascripts/login.js */ \"./public/javascripts/login.js\");\n/* harmony import */ var _javascripts_login_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_javascripts_login_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _stylesheets_login_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stylesheets/login.css */ \"./public/stylesheets/login.css\");\n/* harmony import */ var _stylesheets_login_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_login_css__WEBPACK_IMPORTED_MODULE_1__);\n//引入js文件\r\n\r\n//引入css文件\r\n\r\n\r\n\n\n//# sourceURL=webpack://studenttestsystem/./public/mainJs/login.js?");

/***/ }),

/***/ "./public/stylesheets/login.css":
/*!**************************************!*\
  !*** ./public/stylesheets/login.css ***!
  \**************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> body {\\n|   /* background-image: url('../images/login.png'); */\\n|   background-size: 1366px 700px;\");\n\n//# sourceURL=webpack://studenttestsystem/./public/stylesheets/login.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/mainJs/login.js");
/******/ 	
/******/ })()
;