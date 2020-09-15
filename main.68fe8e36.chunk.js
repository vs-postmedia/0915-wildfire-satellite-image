(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 62:
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(8);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(28);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/data/config.json
var config = __webpack_require__(62);

// EXTERNAL MODULE: ./src/css/normalize.css
var normalize = __webpack_require__(63);

// EXTERNAL MODULE: ./src/css/colors.css
var colors = __webpack_require__(64);

// EXTERNAL MODULE: ./src/css/fonts.css
var fonts = __webpack_require__(65);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(66);

// CONCATENATED MODULE: ./src/images/metro-08.jpg
/* harmony default export */ var metro_08 = (__webpack_require__.p + "assets/metro-08.ebf9cfa8.jpg");
// CONCATENATED MODULE: ./src/images/metro-09.jpg
/* harmony default export */ var metro_09 = (__webpack_require__.p + "assets/metro-09.86fea912.jpg");
// CONCATENATED MODULE: ./src/images/metro-10.jpg
/* harmony default export */ var metro_10 = (__webpack_require__.p + "assets/metro-10.9b281280.jpg");
// CONCATENATED MODULE: ./src/images/metro-11.jpg
/* harmony default export */ var metro_11 = (__webpack_require__.p + "assets/metro-11.86fea912.jpg");
// CONCATENATED MODULE: ./src/images/metro-12.jpg
/* harmony default export */ var metro_12 = (__webpack_require__.p + "assets/metro-12.1728638e.jpg");
// CONCATENATED MODULE: ./src/images/metro-13.jpg
/* harmony default export */ var metro_13 = (__webpack_require__.p + "assets/metro-13.7b7c2706.jpg");
// CONCATENATED MODULE: ./src/index.js





// JS
 // CSS




 // IMAGES







var src_images = [{
  el: 'metro-08',
  src: metro_08
}, {
  el: 'metro-09',
  src: metro_09
}, {
  el: 'metro-10',
  src: metro_10
}, {
  el: 'metro-11',
  src: metro_11
}, {
  el: 'metro-12',
  src: metro_12
}, {
  el: 'metro-13',
  src: metro_13
}];

var init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            addImages(src_images);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

function addImages(images) {
  images.forEach(function (img) {
    var image = new Image();
    image.src = img.src;
    var el = document.getElementById(img.el);
    el.appendChild(image);
  });
}

init();

/***/ })

},[[67,1,2]]]);