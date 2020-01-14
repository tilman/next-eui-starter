(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icon.tokens-tokenStruct-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/tokens/tokenStruct.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/tokens/tokenStruct.js ***!
  \***********************************************************************************/
/*! exports provided: icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconTokenStruct = function EuiIconTokenStruct(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    d: "M4.336 4.667h2.667v2.666H4.336V4.667zm0 4h2.667v2.666H4.336V8.667zm4-4h2.667v2.666H8.336V4.667zm0 4h2.667v2.666H8.336V8.667zM3.003 3.333v9.334h9.333V3.333H3.003zm0-1.333h9.333c.737 0 1.334.597 1.334 1.333v9.334c0 .736-.597 1.333-1.334 1.333H3.003a1.333 1.333 0 01-1.333-1.333V3.333C1.67 2.597 2.267 2 3.003 2z"
  }));
};

var icon = EuiIconTokenStruct;
EuiIconTokenStruct.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconTokenStruct"
};

/***/ })

}]);
//# sourceMappingURL=icon.tokens-tokenStruct-js.js.map