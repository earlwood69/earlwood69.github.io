webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Noticia.js":
/*!*******************************!*\
  !*** ./components/Noticia.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Earl-PC\\Desktop\\ReactApp\\Udemy-ReactJs\\Create-React-App\\bitcoinapp\\components\\Noticia.js";


var Noticia = function Noticia(props) {
  var _props$noticia = props.noticia,
      urlToImage = _props$noticia.urlToImage,
      url = _props$noticia.url,
      title = _props$noticia.title,
      description = _props$noticia.description,
      source = _props$noticia.source;
  var imagen;

  if (urlToImage !== '') {
    imagen = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: urlToImage,
      alt: title,
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  } else {
    imagen = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-center my-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Imagen no Disponible");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, imagen)));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticia);

/***/ })

})
//# sourceMappingURL=index.js.c8b12931c88cd3824ac9.hot-update.js.map