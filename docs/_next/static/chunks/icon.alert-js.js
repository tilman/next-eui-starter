(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icon.alert-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/alert.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/alert.js ***!
  \**********************************************************************/
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



var EuiIconAlert = function EuiIconAlert(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    d: "M7.59 10.059L7.35 5.18h1.3L8.4 10.06h-.81zm.394 1.901a.61.61 0 01-.448-.186.606.606 0 01-.186-.444c0-.174.062-.323.186-.446a.614.614 0 01.448-.184c.169 0 .315.06.44.182.124.122.186.27.186.448a.6.6 0 01-.189.446.607.607 0 01-.437.184zM2 14a1 1 0 01-.878-1.479l6-11a1 1 0 011.756 0l6 11A1 1 0 0114 14H2zm0-1h12L8 2 2 13z"
  }));
};

var icon = EuiIconAlert;
EuiIconAlert.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconAlert"
};

/***/ })

}]);
//# sourceMappingURL=icon.alert-js.js.map