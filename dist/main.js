/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss':
      /*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js'
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  font-family: "Courier New", Courier, monospace;
}

#wrapper {
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  gap: 20px;
}

#nav {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
}

nav {
  align-items: center;
  grid-row: 1;
  top: 0;
  margin-top: 0;
  display: grid;
  width: 100vw;
  grid-template-columns: 20px 2fr 1fr 80px 20px;
  grid-template-rows: 1fr;
  background: rgba(255, 255, 255, 0);
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 20%, rgba(161, 255, 247, 0.226) 68%);
  gap: 10px;
  padding-left: 4rem;
  padding-right: 4rem;
}
nav input[type=search] {
  grid-column: 3;
  justify-self: flex-end;
  width: 200px;
  border: none;
  border-radius: 50px;
  padding: 1rem;
}
nav input[type=search]:focus {
  outline: none;
  box-shadow: 2px 2px 2px rgba(0, 195, 255, 0.308);
}
nav button {
  padding: 1rem;
  grid-column: 4;
  background-color: rgba(0, 195, 255, 0.774);
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border: none;
}

#city-name {
  grid-column: 2;
  font-size: 48px;
  color: white;
  text-shadow: rgba(123, 111, 252, 0.473) 2px 2px;
  font-weight: bold;
}

#today {
  display: grid;
  padding-left: 6rem;
  font-family: "Courier New", Courier, monospace;
  color: white;
  text-shadow: rgba(123, 111, 252, 0.473) 2px 2px;
  font-size: larger;
  gap: 10px;
}

#weather-overview {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: start;
  align-items: center;
}

#today-right {
  grid-column: 2;
}

#condition {
  font-size: 40px;
}

#temp {
  font-size: 65px;
  font-weight: bold;
  grid-row: 3;
}

#weather-icon {
  display: none;
  grid-row: 2;
  width: 100px;
  margin-left: -20px;
}

#weekly-forecast {
  grid-row: 4;
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  bottom: 0;
  padding: 1rem 1rem 8rem;
}

#date-element {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Courier New", Courier, monospace;
}

.sunny {
  background: rgb(255, 252, 165);
  background: linear-gradient(18deg, rgb(255, 252, 165) 15%, rgba(52, 221, 255, 0.671) 100%);
}

.rainy {
  background: rgb(128, 136, 178);
  background: linear-gradient(79deg, rgb(128, 136, 178) 0%, rgb(26, 77, 176) 58%, rgb(44, 23, 92) 100%);
  background: rgb(87, 106, 204);
  background: linear-gradient(78deg, rgb(87, 106, 204) 0%, rgb(51, 87, 222) 7%, rgb(31, 70, 189) 10%, rgb(45, 81, 187) 18%, rgb(24, 55, 134) 26%, rgb(34, 93, 226) 36%, rgb(49, 90, 178) 43%, rgb(19, 56, 134) 51%, rgb(38, 81, 164) 60%, rgb(28, 69, 172) 68%, rgb(82, 111, 195) 76%, rgb(51, 65, 138) 82%, rgb(77, 85, 231) 88%, rgb(23, 35, 152) 95%);
}

.cloudy {
  background: rgb(241, 176, 204);
  background: linear-gradient(90deg, rgba(241, 176, 204, 0.5) 20%, rgba(181, 216, 223, 0.4547991071) 72%, rgba(148, 188, 233, 0.397) 100%);
}

.snow {
  background: rgb(216, 249, 241);
  background: linear-gradient(90deg, rgb(216, 249, 241) 20%, rgb(211, 255, 243) 44%, rgb(255, 255, 255) 72%, rgb(212, 232, 255) 100%);
}

.night {
  background: rgb(123, 111, 252);
  background: linear-gradient(90deg, rgb(123, 111, 252) 20%, rgb(64, 58, 153) 44%, rgb(27, 22, 96) 68%);
}

.day {
  background-color: rgba(133, 211, 241, 0.4039215686);
}`,
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/_reset.scss',
              'webpack://./src/style.scss',
            ],
            names: [],
            mappings:
              'AAAA;;;CAAA;AAKA;;;;;;;;;;;;;EAaC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;ACAD;;ADEA,gDAAA;AACA;;EAEC,cAAA;ACCD;;ADCA;EACC,cAAA;ACED;;ADCA;EACC,gBAAA;ACED;;ADAA;EACC,YAAA;ACGD;;ADDA;;EAEC,WAAA;EACA,aAAA;ACID;;ADFA;EACC,yBAAA;EACA,iBAAA;ACKD;;AAnDA;EACI,8CAAA;AAsDJ;;AAlDA;EACI,aAAA;EACA,+BAAA;EACA,uBAAA;EACA,aAAA;EACA,YAAA;EACA,gBAAA;EACA,SAAA;AAqDJ;;AAjDA;EACC,aAAA;EACA,qCAAA;AAoDD;;AAjDC;EACG,mBAAA;EACA,WAAA;EACA,MAAA;EACA,aAAA;EACA,aAAA;EACA,YAAA;EACA,6CAAA;EACA,uBAAA;EACC,kCAAA;EACD,8FAAA;EACA,SAAA;EACA,kBAAA;EACA,mBAAA;AAoDJ;AAnDI;EACI,cAAA;EACA,sBAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;AAqDR;AAlDI;EACI,aAAA;EAEA,gDAAA;AAmDR;AAjDI;EACI,aAAA;EACA,cAAA;EACA,0CAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;AAmDR;;AA/CA;EACI,cAAA;EACA,eAAA;EACA,YAAA;EACA,+CAAA;EACA,iBAAA;AAkDJ;;AA9CA;EACI,aAAA;EACA,kBAAA;EACA,8CAAA;EACA,YAAA;EACA,+CAAA;EACA,iBAAA;EACA,SAAA;AAiDJ;;AA/CA;EACI,aAAA;EACA,0BAAA;EACA,2BAAA;EACA,sBAAA;EACA,mBAAA;AAkDJ;;AA/CA;EACI,cAAA;AAkDJ;;AAhDA;EACI,eAAA;AAmDJ;;AAhDA;EACI,eAAA;EACA,iBAAA;EAEA,WAAA;AAkDJ;;AA9CA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AAiDJ;;AA9CA;EACI,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,qBAAA;EACA,WAAA;EACA,qCAAA;EACA,SAAA;EACA,uBAAA;AAiDJ;;AA9CA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,8CAAA;AAiDJ;;AA9CA;EAGI,8BAAA;EACA,0FAAA;AA+CJ;;AA5CA;EACI,8BAAA;EACA,qGAAA;EACA,6BAAA;EACA,sVAAA;AA+CJ;;AA5CA;EACI,8BAAA;EACA,wIAAA;AA+CJ;;AA7CA;EACI,8BAAA;EACJ,mIAAA;AAgDA;;AA9CA;EAEA,8BAAA;EACA,qGAAA;AAgDA;;AA7CA;EACI,mDAAA;AAgDJ',
            sourcesContent: [
              "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",
              "@import './reset';\n* {\n    font-family:'Courier New', Courier, monospace;\n    \n    \n}\n#wrapper {\n    display: grid;\n    grid-template-rows: 1fr 5fr 1fr;\n    justify-content: center;\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n    gap: 20px;\n\n    \n}\n#nav {\n display: grid;\n grid-template-columns: repeat(3, 2fr);\n\n}\n nav {\n    align-items: center;\n    grid-row: 1;\n    top: 0;\n    margin-top: 0;\n    display: grid;\n    width: 100vw;\n    grid-template-columns: 20px 2fr 1fr 80px 20px;\n    grid-template-rows: 1fr;\n     background: rgba(255, 255, 255, 0);\n    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 20%, rgba(161, 255, 247, 0.226) 68%);;\n    gap: 10px;\n    padding-left: 4rem;\n    padding-right: 4rem;\n    input[type=\"search\"] {\n        grid-column: 3;\n        justify-self: flex-end;\n        width: 200px;\n        border: none;\n        border-radius: 50px;\n        padding: 1rem;\n\n    }\n    input[type=\"search\"]:focus {\n        outline:none;\n\n        box-shadow: 2px 2px 2px  rgba(0, 195, 255, 0.308);\n    }\n    button {\n        padding:1rem;\n        grid-column: 4;\n        background-color:  rgba(0, 195, 255, 0.774);\n        color: white;\n        font-weight: bold;\n        border-radius: 5px;\n        border: none;\n    }\n}\n\n#city-name {\n    grid-column: 2;\n    font-size: 48px;\n    color:white;\n    text-shadow: rgba(123, 111, 252, 0.473) 2px 2px;\n    font-weight: bold;\n\n}\n\n#today {\n    display: grid;\n    padding-left: 6rem;\n    font-family: 'Courier New', Courier, monospace;\n    color:white;\n    text-shadow: rgba(123, 111, 252, 0.473) 2px 2px;\n    font-size: larger;\n    gap: 10px;\n}\n#weather-overview {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    justify-content: start;\n    align-items: center;\n}\n\n#today-right {\n    grid-column: 2;\n}\n#condition {\n    font-size: 40px;\n\n}\n#temp {\n    font-size: 65px;\n    font-weight: bold;\n\n    grid-row: 3;\n    \n}\n\n#weather-icon {\n    display: none;\n    grid-row: 2;\n    width: 100px;\n    margin-left: -20px;\n}\n\n#weekly-forecast {\n    grid-row: 4;\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    justify-items: center;\n    width: 100%;\n    grid-template-columns: repeat(7, 1fr);\n    bottom: 0;\n    padding: 1rem 1rem 8rem;\n}\n\n#date-element {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.sunny   {\n    // background: rgb(255,252,165);\n    // background: radial-gradient(circle, rgba(255,252,165,1) 15%, rgb(34, 215, 252) 100%);\n    background: rgb(255,252,165);\n    background: linear-gradient(18deg, rgb(255, 252, 165) 15%, rgba(52, 221, 255, 0.671) 100%);\n}\n\n.rainy {\n    background: rgb(128,136,178);\n    background: linear-gradient(79deg, rgba(128,136,178,1) 0%, rgba(26,77,176,1) 58%, rgb(44, 23, 92) 100%);\n    background: rgb(87,106,204);\n    background: linear-gradient(78deg, rgba(87,106,204,1) 0%, rgba(51,87,222,1) 7%, rgba(31,70,189,1) 10%, rgba(45,81,187,1) 18%, rgba(24,55,134,1) 26%, rgba(34,93,226,1) 36%, rgba(49,90,178,1) 43%, rgba(19,56,134,1) 51%, rgba(38,81,164,1) 60%, rgb(28, 69, 172) 68%, rgba(82,111,195,1) 76%, rgba(51,65,138,1) 82%, rgb(77, 85, 231) 88%, rgba(23,35,152,1) 95%);\n}\n\n.cloudy {\n    background: rgb(241,176,204);\n    background: linear-gradient(90deg, rgba(241, 176, 204, 0.5) 20%, rgba(181,216,223,0.4547991071428571) 72%, rgba(148, 188, 233, 0.397) 100%);\n}\n.snow {\n    background: rgb(216,249,241);\nbackground: linear-gradient(90deg, rgba(216,249,241,1) 20%, rgba(211,255,243,1) 44%, rgba(255,255,255,1) 72%, rgba(212,232,255,1) 100%);\n}\n.night {\n    \nbackground: rgb(123,111,252);\nbackground: linear-gradient(90deg, rgba(123,111,252,1) 20%, rgba(64,58,153,1) 44%, rgba(27,22,96,1) 68%);\n}\n\n.day {\n    background-color: #85d3f167;\n}",
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        module.exports = function (cssWithMappingToString) {
          var list = [];

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map(function (item) {
              var content = '';
              var needLayer = typeof item[5] !== 'undefined';
              if (item[4]) {
                content += '@supports ('.concat(item[4], ') {');
              }
              if (item[2]) {
                content += '@media '.concat(item[2], ' {');
              }
              if (needLayer) {
                content += '@layer'.concat(
                  item[5].length > 0 ? ' '.concat(item[5]) : '',
                  ' {'
                );
              }
              content += cssWithMappingToString(item);
              if (needLayer) {
                content += '}';
              }
              if (item[2]) {
                content += '}';
              }
              if (item[4]) {
                content += '}';
              }
              return content;
            }).join('');
          };

          // import a list of modules into the list
          list.i = function i(modules, media, dedupe, supports, layer) {
            if (typeof modules === 'string') {
              modules = [[null, modules, undefined]];
            }
            var alreadyImportedModules = {};
            if (dedupe) {
              for (var k = 0; k < this.length; k++) {
                var id = this[k][0];
                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }
            for (var _k = 0; _k < modules.length; _k++) {
              var item = [].concat(modules[_k]);
              if (dedupe && alreadyImportedModules[item[0]]) {
                continue;
              }
              if (typeof layer !== 'undefined') {
                if (typeof item[5] === 'undefined') {
                  item[5] = layer;
                } else {
                  item[1] = '@layer'
                    .concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {')
                    .concat(item[1], '}');
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = '@media '
                    .concat(item[2], ' {')
                    .concat(item[1], '}');
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = ''.concat(supports);
                } else {
                  item[1] = '@supports ('
                    .concat(item[4], ') {')
                    .concat(item[1], '}');
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/sourceMaps.js':
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === 'function') {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                base64
              );
            var sourceMapping = '/*# '.concat(data, ' */');
            return [content].concat([sourceMapping]).join('\n');
          }
          return [content].join('\n');
        };

        /***/
      },

    /***/ './src/style.scss':
      /*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js'
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js'
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js'
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js'
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss'
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head'
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
              'default'
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ].locals
            : undefined;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        var stylesInDOM = [];
        function getIndexByIdentifier(identifier) {
          var result = -1;
          for (var i = 0; i < stylesInDOM.length; i++) {
            if (stylesInDOM[i].identifier === identifier) {
              result = i;
              break;
            }
          }
          return result;
        }
        function modulesToDom(list, options) {
          var idCountMap = {};
          var identifiers = [];
          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var count = idCountMap[id] || 0;
            var identifier = ''.concat(id, ' ').concat(count);
            idCountMap[id] = count + 1;
            var indexByIdentifier = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            };
            if (indexByIdentifier !== -1) {
              stylesInDOM[indexByIdentifier].references++;
              stylesInDOM[indexByIdentifier].updater(obj);
            } else {
              var updater = addElementStyle(obj, options);
              options.byIndex = i;
              stylesInDOM.splice(i, 0, {
                identifier: identifier,
                updater: updater,
                references: 1,
              });
            }
            identifiers.push(identifier);
          }
          return identifiers;
        }
        function addElementStyle(obj, options) {
          var api = options.domAPI(options);
          api.update(obj);
          var updater = function updater(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }
              api.update((obj = newObj));
            } else {
              api.remove();
            }
          };
          return updater;
        }
        module.exports = function (list, options) {
          options = options || {};
          list = list || [];
          var lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];
            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i];
              var index = getIndexByIdentifier(identifier);
              stylesInDOM[index].references--;
            }
            var newLastIdentifiers = modulesToDom(newList, options);
            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i];
              var _index = getIndexByIdentifier(_identifier);
              if (stylesInDOM[_index].references === 0) {
                stylesInDOM[_index].updater();
                stylesInDOM.splice(_index, 1);
              }
            }
            lastIdentifiers = newLastIdentifiers;
          };
        };

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === 'undefined') {
            var styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }
            memo[target] = styleTarget;
          }
          return memo[target];
        }

        /* istanbul ignore next  */
        function insertBySelector(insert, style) {
          var target = getTarget(insert);
          if (!target) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement('style');
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;
          if (nonce) {
            styleElement.setAttribute('nonce', nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function apply(styleElement, options, obj) {
          var css = '';
          if (obj.supports) {
            css += '@supports ('.concat(obj.supports, ') {');
          }
          if (obj.media) {
            css += '@media '.concat(obj.media, ' {');
          }
          var needLayer = typeof obj.layer !== 'undefined';
          if (needLayer) {
            css += '@layer'.concat(
              obj.layer.length > 0 ? ' '.concat(obj.layer) : '',
              ' {'
            );
          }
          css += obj.css;
          if (needLayer) {
            css += '}';
          }
          if (obj.media) {
            css += '}';
          }
          if (obj.supports) {
            css += '}';
          }
          var sourceMap = obj.sourceMap;
          if (sourceMap && typeof btoa !== 'undefined') {
            css +=
              '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                ' */'
              );
          }

          // For old IE
          /* istanbul ignore if  */
          options.styleTagTransform(css, styleElement, options.options);
        }
        function removeStyleElement(styleElement) {
          // istanbul ignore if
          if (styleElement.parentNode === null) {
            return false;
          }
          styleElement.parentNode.removeChild(styleElement);
        }

        /* istanbul ignore next  */
        function domAPI(options) {
          if (typeof document === 'undefined') {
            return {
              update: function update() {},
              remove: function remove() {},
            };
          }
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }
        module.exports = domAPI;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function styleTagTransform(css, styleElement) {
          if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css;
          } else {
            while (styleElement.firstChild) {
              styleElement.removeChild(styleElement.firstChild);
            }
            styleElement.appendChild(document.createTextNode(css));
          }
        }
        module.exports = styleTagTransform;

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./style.scss */ './src/style.scss');

    const get = (() => {
      const city = document.getElementById('city-name');
      const searchBar = document.getElementById('searchbar');
      const searchBtn = document.getElementById('search-btn');
      const weatherIcon = document.getElementById('weather-icon');
      const condition = document.getElementById('condition');
      const temp = document.getElementById('temp');
      const feelsLike = document.getElementById('feels-like');
      const humidity = document.getElementById('humidity');
      const chanceOfRain = document.getElementById('rain');
      const wind = document.getElementById('wind');
      const weeklyForecast = document.getElementById('weekly-forecast');
      const wrapper = document.getElementById('wrapper');

      return {
        city,
        searchBar,
        searchBtn,
        weatherIcon,
        condition,
        temp,
        humidity,
        chanceOfRain,
        wind,
        weeklyForecast,
        wrapper,
        feelsLike,
      };
    })();

    get.searchBtn.addEventListener('click', () => {
      getWeather();
      getForecast();
      render();
    });

    const getWeather = async () => {
      try {
        const location = get.searchBar.value;
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=5cc78e0155574313a84110056233005&q=${location}`
        );
        const JSON = await response.json();

        const weatherObj = {
          location: JSON.location.name,
          temp: JSON.current.temp_c,
          tempFeelsLike: JSON.current.feelslike_c,
          condition: JSON.current.condition.text,
          // condition: 'Rainy',
          humidity: JSON.current.humidity,
          wind: JSON.current.wind_mph,
          rain: JSON.current.precip_mm,
          isDay: JSON.current.is_day,
          conditionIcon: JSON.current.condition.icon,
        };
        console.log(JSON);
        return { weatherObj };
      } catch (error) {
        console.log(error, 'error');
        return error;
      }
    };

    const getForecast = async () => {
      if (get.weeklyForecast.hasChildNodes()) {
        const filteredWeekdays = Array.from(
          get.weeklyForecast.childNodes
        ).filter((node) => node.nodeType === node.ELEMENT_NODE);
        if (filteredWeekdays) {
          filteredWeekdays.forEach((child) =>
            get.weeklyForecast.removeChild(child)
          );
        }
      }

      try {
        const location = get.searchBar.value;
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=5cc78e0155574313a84110056233005&q=${location}&days=7`
        );
        const JSON = await response.json();
        console.log(JSON);
        const forecastObj = {
          forecastDays: JSON.forecast.forecastday,
        };
        return {
          forecastObj,
        };
      } catch (error) {
        console.log('error');
        return error;
      }
    };

    const render = async () => {
      const weather = await getWeather();
      const forecast = await getForecast();
      const forecastDays = await forecast.forecastObj.forecastDays;

      const setCity = (() =>
        (get.city.textContent = weather.weatherObj.location))();
      const setCondition = (() =>
        (get.condition.textContent = weather.weatherObj.condition))();
      const setHumidity = (() =>
        (get.humidity.textContent =
          'Humidity: ' + weather.weatherObj.humidity))();
      const setChanceOfRain = (() =>
        (get.chanceOfRain.textContent = weather.weatherObj.rain + ' mm'))();
      const setWind = (() =>
        (get.wind.textContent = weather.weatherObj.wind + ' m/ph'))();
      const setTemp = (() =>
        (get.temp.textContent = weather.weatherObj.temp + '°'))();
      const setIcon = (() =>
        (get.weatherIcon.src = `${weather.weatherObj.conditionIcon}`))();
      const feelsLike = () =>
        (get.feelsLike.textContent =
          'Feels like ' + weather.weatherObj.tempFeelsLike + '°');

      if (weather.weatherObj.isDay) {
        get.wrapper.classList = 'day';
      } else if (!weather.weatherObj.isDay) {
        get.wrapper.classList = 'night';
      }
      if (weather.weatherObj.condition == 'Sunny') {
        get.wrapper.classList.add('sunny');
      }
      if (
        weather.weatherObj.condition == 'Rainy' ||
        weather.weatherObj.condition == 'Light rain shower'
      ) {
        get.wrapper.classList.add('rainy');
      }
      if (
        weather.weatherObj.condition == 'Cloudy' ||
        weather.weatherObj.condition == 'Partly cloudy'
      ) {
        get.wrapper.classList.add('cloudy');
      }

      forecastDays.forEach((day) => {
        const date = new Date(day.date);
        const options = { weekday: 'long' };

        const dateEl = document.createElement('div');
        dateEl.id = 'date-element';
        dateEl.textContent = date.toLocaleDateString('en-EN', options);

        const weatherIcon = new Image();
        weatherIcon.src = day.day.condition.icon;

        const temp = document.createElement('div');
        temp.textContent =
          day.day.maxtemp_c + '°' + ' / ' + day.day.mintemp_c + '°';

        dateEl.appendChild(weatherIcon);
        dateEl.appendChild(temp);
        get.weeklyForecast.appendChild(dateEl);
      });
    };

    render();
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlIQUFpSCxLQUFLLGlCQUFpQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLFdBQVcsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxX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QTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLFMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4jd3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAxZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGdhcDogMjBweDtcbn1cblxuI25hdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDJmcik7XG59XG5cbm5hdiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtcm93OiAxO1xuICB0b3A6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDJmciAxZnIgODBweCAyMHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDIwJSwgcmdiYSgxNjEsIDI1NSwgMjQ3LCAwLjIyNikgNjglKTtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDRyZW07XG59XG5uYXYgaW5wdXRbdHlwZT1zZWFyY2hdIHtcbiAgZ3JpZC1jb2x1bW46IDM7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAxcmVtO1xufVxubmF2IGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMCwgMTk1LCAyNTUsIDAuMzA4KTtcbn1cbm5hdiBidXR0b24ge1xuICBwYWRkaW5nOiAxcmVtO1xuICBncmlkLWNvbHVtbjogNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxOTUsIDI1NSwgMC43NzQpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuI2NpdHktbmFtZSB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IHJnYmEoMTIzLCAxMTEsIDI1MiwgMC40NzMpIDJweCAycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jdG9kYXkge1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nLWxlZnQ6IDZyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogcmdiYSgxMjMsIDExMSwgMjUyLCAwLjQ3MykgMnB4IDJweDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGdhcDogMTBweDtcbn1cblxuI3dlYXRoZXItb3ZlcnZpZXcge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jdG9kYXktcmlnaHQge1xuICBncmlkLWNvbHVtbjogMjtcbn1cblxuI2NvbmRpdGlvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuI3RlbXAge1xuICBmb250LXNpemU6IDY1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBncmlkLXJvdzogMztcbn1cblxuI3dlYXRoZXItaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGdyaWQtcm93OiAyO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cblxuI3dlZWtseS1mb3JlY2FzdCB7XG4gIGdyaWQtcm93OiA0O1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAxcmVtIDFyZW0gOHJlbTtcbn1cblxuI2RhdGUtZWxlbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5zdW5ueSB7XG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1MiwgMTY1KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4ZGVnLCByZ2IoMjU1LCAyNTIsIDE2NSkgMTUlLCByZ2JhKDUyLCAyMjEsIDI1NSwgMC42NzEpIDEwMCUpO1xufVxuXG4ucmFpbnkge1xuICBiYWNrZ3JvdW5kOiByZ2IoMTI4LCAxMzYsIDE3OCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3OWRlZywgcmdiKDEyOCwgMTM2LCAxNzgpIDAlLCByZ2IoMjYsIDc3LCAxNzYpIDU4JSwgcmdiKDQ0LCAyMywgOTIpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiByZ2IoODcsIDEwNiwgMjA0KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc4ZGVnLCByZ2IoODcsIDEwNiwgMjA0KSAwJSwgcmdiKDUxLCA4NywgMjIyKSA3JSwgcmdiKDMxLCA3MCwgMTg5KSAxMCUsIHJnYig0NSwgODEsIDE4NykgMTglLCByZ2IoMjQsIDU1LCAxMzQpIDI2JSwgcmdiKDM0LCA5MywgMjI2KSAzNiUsIHJnYig0OSwgOTAsIDE3OCkgNDMlLCByZ2IoMTksIDU2LCAxMzQpIDUxJSwgcmdiKDM4LCA4MSwgMTY0KSA2MCUsIHJnYigyOCwgNjksIDE3MikgNjglLCByZ2IoODIsIDExMSwgMTk1KSA3NiUsIHJnYig1MSwgNjUsIDEzOCkgODIlLCByZ2IoNzcsIDg1LCAyMzEpIDg4JSwgcmdiKDIzLCAzNSwgMTUyKSA5NSUpO1xufVxuXG4uY2xvdWR5IHtcbiAgYmFja2dyb3VuZDogcmdiKDI0MSwgMTc2LCAyMDQpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjQxLCAxNzYsIDIwNCwgMC41KSAyMCUsIHJnYmEoMTgxLCAyMTYsIDIyMywgMC40NTQ3OTkxMDcxKSA3MiUsIHJnYmEoMTQ4LCAxODgsIDIzMywgMC4zOTcpIDEwMCUpO1xufVxuXG4uc25vdyB7XG4gIGJhY2tncm91bmQ6IHJnYigyMTYsIDI0OSwgMjQxKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMjE2LCAyNDksIDI0MSkgMjAlLCByZ2IoMjExLCAyNTUsIDI0MykgNDQlLCByZ2IoMjU1LCAyNTUsIDI1NSkgNzIlLCByZ2IoMjEyLCAyMzIsIDI1NSkgMTAwJSk7XG59XG5cbi5uaWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYigxMjMsIDExMSwgMjUyKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMTIzLCAxMTEsIDI1MikgMjAlLCByZ2IoNjQsIDU4LCAxNTMpIDQ0JSwgcmdiKDI3LCAyMiwgOTYpIDY4JSk7XG59XG5cbi5kYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMywgMjExLCAyNDEsIDAuNDAzOTIxNTY4Nik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7O0VBYUMsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0FEOztBREVBLGdEQUFBO0FBQ0E7O0VBRUMsY0FBQTtBQ0NEOztBRENBO0VBQ0MsY0FBQTtBQ0VEOztBRENBO0VBQ0MsZ0JBQUE7QUNFRDs7QURBQTtFQUNDLFlBQUE7QUNHRDs7QUREQTs7RUFFQyxXQUFBO0VBQ0EsYUFBQTtBQ0lEOztBREZBO0VBQ0MseUJBQUE7RUFDQSxpQkFBQTtBQ0tEOztBQW5EQTtFQUNJLDhDQUFBO0FBc0RKOztBQWxEQTtFQUNJLGFBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFxREo7O0FBakRBO0VBQ0MsYUFBQTtFQUNBLHFDQUFBO0FBb0REOztBQWpEQztFQUNHLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLHVCQUFBO0VBQ0Msa0NBQUE7RUFDRCw4RkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBb0RKO0FBbkRJO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFxRFI7QUFsREk7RUFDSSxhQUFBO0VBRUEsZ0RBQUE7QUFtRFI7QUFqREk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBbURSOztBQS9DQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsaUJBQUE7QUFrREo7O0FBOUNBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFpREo7O0FBL0NBO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBa0RKOztBQS9DQTtFQUNJLGNBQUE7QUFrREo7O0FBaERBO0VBQ0ksZUFBQTtBQW1ESjs7QUFoREE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxXQUFBO0FBa0RKOztBQTlDQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBaURKOztBQTlDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBaURKOztBQTlDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtBQWlESjs7QUE5Q0E7RUFHSSw4QkFBQTtFQUNBLDBGQUFBO0FBK0NKOztBQTVDQTtFQUNJLDhCQUFBO0VBQ0EscUdBQUE7RUFDQSw2QkFBQTtFQUNBLHNWQUFBO0FBK0NKOztBQTVDQTtFQUNJLDhCQUFBO0VBQ0Esd0lBQUE7QUErQ0o7O0FBN0NBO0VBQ0ksOEJBQUE7RUFDSixtSUFBQTtBQWdEQTs7QUE5Q0E7RUFFQSw4QkFBQTtFQUNBLHFHQUFBO0FBZ0RBOztBQTdDQTtFQUNJLG1EQUFBO0FBZ0RKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG5cXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCIsXCJAaW1wb3J0ICcuL3Jlc2V0JztcXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBcXG4gICAgXFxufVxcbiN3cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgICBcXG59XFxuI25hdiB7XFxuIGRpc3BsYXk6IGdyaWQ7XFxuIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDJmcik7XFxuXFxufVxcbiBuYXYge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgdG9wOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAyZnIgMWZyIDgwcHggMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMjAlLCByZ2JhKDE2MSwgMjU1LCAyNDcsIDAuMjI2KSA2OCUpOztcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XFxuICAgIGlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICB9XFxuICAgIGlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6bm9uZTtcXG5cXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4ICByZ2JhKDAsIDE5NSwgMjU1LCAwLjMwOCk7XFxuICAgIH1cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgICAgIGdyaWQtY29sdW1uOiA0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMCwgMTk1LCAyNTUsIDAuNzc0KTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxufVxcblxcbiNjaXR5LW5hbWUge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMTIzLCAxMTEsIDI1MiwgMC40NzMpIDJweCAycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbn1cXG5cXG4jdG9kYXkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDZyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogcmdiYSgxMjMsIDExMSwgMjUyLCAwLjQ3MykgMnB4IDJweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuI3dlYXRoZXItb3ZlcnZpZXcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdG9kYXktcmlnaHQge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG59XFxuI2NvbmRpdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG5cXG59XFxuI3RlbXAge1xcbiAgICBmb250LXNpemU6IDY1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICBncmlkLXJvdzogMztcXG4gICAgXFxufVxcblxcbiN3ZWF0aGVyLWljb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XFxufVxcblxcbiN3ZWVrbHktZm9yZWNhc3Qge1xcbiAgICBncmlkLXJvdzogNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDhyZW07XFxufVxcblxcbiNkYXRlLWVsZW1lbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLnN1bm55ICAge1xcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1MiwxNjUpO1xcbiAgICAvLyBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1NSwyNTIsMTY1LDEpIDE1JSwgcmdiKDM0LCAyMTUsIDI1MikgMTAwJSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjUyLDE2NSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxOGRlZywgcmdiKDI1NSwgMjUyLCAxNjUpIDE1JSwgcmdiYSg1MiwgMjIxLCAyNTUsIDAuNjcxKSAxMDAlKTtcXG59XFxuXFxuLnJhaW55IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDEyOCwxMzYsMTc4KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc5ZGVnLCByZ2JhKDEyOCwxMzYsMTc4LDEpIDAlLCByZ2JhKDI2LDc3LDE3NiwxKSA1OCUsIHJnYig0NCwgMjMsIDkyKSAxMDAlKTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDg3LDEwNiwyMDQpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNzhkZWcsIHJnYmEoODcsMTA2LDIwNCwxKSAwJSwgcmdiYSg1MSw4NywyMjIsMSkgNyUsIHJnYmEoMzEsNzAsMTg5LDEpIDEwJSwgcmdiYSg0NSw4MSwxODcsMSkgMTglLCByZ2JhKDI0LDU1LDEzNCwxKSAyNiUsIHJnYmEoMzQsOTMsMjI2LDEpIDM2JSwgcmdiYSg0OSw5MCwxNzgsMSkgNDMlLCByZ2JhKDE5LDU2LDEzNCwxKSA1MSUsIHJnYmEoMzgsODEsMTY0LDEpIDYwJSwgcmdiKDI4LCA2OSwgMTcyKSA2OCUsIHJnYmEoODIsMTExLDE5NSwxKSA3NiUsIHJnYmEoNTEsNjUsMTM4LDEpIDgyJSwgcmdiKDc3LCA4NSwgMjMxKSA4OCUsIHJnYmEoMjMsMzUsMTUyLDEpIDk1JSk7XFxufVxcblxcbi5jbG91ZHkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLDE3NiwyMDQpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjQxLCAxNzYsIDIwNCwgMC41KSAyMCUsIHJnYmEoMTgxLDIxNiwyMjMsMC40NTQ3OTkxMDcxNDI4NTcxKSA3MiUsIHJnYmEoMTQ4LCAxODgsIDIzMywgMC4zOTcpIDEwMCUpO1xcbn1cXG4uc25vdyB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMTYsMjQ5LDI0MSk7XFxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIxNiwyNDksMjQxLDEpIDIwJSwgcmdiYSgyMTEsMjU1LDI0MywxKSA0NCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgNzIlLCByZ2JhKDIxMiwyMzIsMjU1LDEpIDEwMCUpO1xcbn1cXG4ubmlnaHQge1xcbiAgICBcXG5iYWNrZ3JvdW5kOiByZ2IoMTIzLDExMSwyNTIpO1xcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMjMsMTExLDI1MiwxKSAyMCUsIHJnYmEoNjQsNTgsMTUzLDEpIDQ0JSwgcmdiYSgyNywyMiw5NiwxKSA2OCUpO1xcbn1cXG5cXG4uZGF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg1ZDNmMTY3O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgZ2V0ID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1uYW1lJyk7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaGJhcicpO1xuICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnRuJyk7XG4gICAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1pY29uJyk7XG4gICAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmRpdGlvbicpO1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpO1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVscy1saWtlJyk7XG4gICAgY29uc3QgaHVtaWRpdHkgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XG4gICAgY29uc3QgY2hhbmNlT2ZSYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhaW4nKTtcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQnKTtcbiAgICBjb25zdCB3ZWVrbHlGb3JlY2FzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrbHktZm9yZWNhc3QnKTtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNpdHksXG4gICAgICAgIHNlYXJjaEJhcixcbiAgICAgICAgc2VhcmNoQnRuLFxuICAgICAgICB3ZWF0aGVySWNvbixcbiAgICAgICAgY29uZGl0aW9uLFxuICAgICAgICB0ZW1wLFxuICAgICAgICBodW1pZGl0eSxcbiAgICAgICAgY2hhbmNlT2ZSYWluLFxuICAgICAgICB3aW5kLFxuICAgICAgICB3ZWVrbHlGb3JlY2FzdCxcbiAgICAgICAgd3JhcHBlcixcbiAgICAgICAgZmVlbHNMaWtlXG4gICAgfVxuXG59KSgpO1xuXG5cbiAgIGdldC5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICBnZXRXZWF0aGVyKCk7XG4gICAgZ2V0Rm9yZWNhc3QoKTtcbiAgICByZW5kZXIoKTtcbiAgIH0pXG5cbmNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGdldC5zZWFyY2hCYXIudmFsdWU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT01Y2M3OGUwMTU1NTc0MzEzYTg0MTEwMDU2MjMzMDA1JnE9JHtsb2NhdGlvbn1gKVxuICAgIGNvbnN0IEpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zdCB3ZWF0aGVyT2JqID0ge1xuICAgICAgICBsb2NhdGlvbjogSlNPTi5sb2NhdGlvbi5uYW1lLFxuICAgICAgICB0ZW1wOiBKU09OLmN1cnJlbnQudGVtcF9jLFxuICAgICAgICB0ZW1wRmVlbHNMaWtlOiBKU09OLmN1cnJlbnQuZmVlbHNsaWtlX2MsXG4gICAgICAgIGNvbmRpdGlvbjogSlNPTi5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAvLyBjb25kaXRpb246ICdSYWlueScsXG4gICAgICAgIGh1bWlkaXR5OiBKU09OLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgICAgIHdpbmQ6IEpTT04uY3VycmVudC53aW5kX21waCxcbiAgICAgICAgcmFpbjogSlNPTi5jdXJyZW50LnByZWNpcF9tbSxcbiAgICAgICAgaXNEYXk6IEpTT04uY3VycmVudC5pc19kYXksXG4gICAgICAgIGNvbmRpdGlvbkljb246IEpTT04uY3VycmVudC5jb25kaXRpb24uaWNvblxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhKU09OKVxuICAgIHJldHVybnsgd2VhdGhlck9ian07XG4gICAgfSBcbiAgICBjYXRjaChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgJ2Vycm9yJylcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbn1cblxuY29uc3QgZ2V0Rm9yZWNhc3QgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgaWYgKGdldC53ZWVrbHlGb3JlY2FzdC5oYXNDaGlsZE5vZGVzKCkpe1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRXZWVrZGF5cyA9IEFycmF5LmZyb20oZ2V0LndlZWtseUZvcmVjYXN0LmNoaWxkTm9kZXMpLmZpbHRlcihub2RlID0+IG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRUxFTUVOVF9OT0RFKTtcbiAgICAgICAgICAgIGlmKGZpbHRlcmVkV2Vla2RheXMpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZFdlZWtkYXlzLmZvckVhY2goY2hpbGQgPT4gXG4gICAgICAgICAgICAgICAgZ2V0LndlZWtseUZvcmVjYXN0LnJlbW92ZUNoaWxkKGNoaWxkKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuIFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZ2V0LnNlYXJjaEJhci52YWx1ZTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NWNjNzhlMDE1NTU3NDMxM2E4NDExMDA1NjIzMzAwNSZxPSR7bG9jYXRpb259JmRheXM9N2ApO1xuICAgICAgICBjb25zdCBKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OKVxuICAgICAgICBjb25zdCBmb3JlY2FzdE9iaiA9IHtcbiAgICAgICAgICAgIGZvcmVjYXN0RGF5czogSlNPTi5mb3JlY2FzdC5mb3JlY2FzdGRheVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb3JlY2FzdE9ialxuICAgICAgICB9XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxuICAgICAgIHJldHVybiBlcnJvclxuICAgIH1cbn1cblxuXG5jb25zdCByZW5kZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGdldFdlYXRoZXIoKTtcbiAgICBjb25zdCBmb3JlY2FzdCA9IGF3YWl0IGdldEZvcmVjYXN0KCk7XG4gICAgY29uc3QgZm9yZWNhc3REYXlzID0gIGF3YWl0IGZvcmVjYXN0LmZvcmVjYXN0T2JqLmZvcmVjYXN0RGF5cztcblxuICAgIGNvbnN0IHNldENpdHkgPSAoKCkgPT4gZ2V0LmNpdHkudGV4dENvbnRlbnQgPSB3ZWF0aGVyLndlYXRoZXJPYmoubG9jYXRpb24pKCk7XG4gICAgY29uc3Qgc2V0Q29uZGl0aW9uID0gKCgpID0+IGdldC5jb25kaXRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyLndlYXRoZXJPYmouY29uZGl0aW9uKSgpO1xuICAgIGNvbnN0IHNldEh1bWlkaXR5ID0gKCgpID0+IGdldC5odW1pZGl0eS50ZXh0Q29udGVudCA9ICdIdW1pZGl0eTogJyArIFxuICAgIHdlYXRoZXIud2VhdGhlck9iai5odW1pZGl0eSkoKTtcbiAgICBjb25zdCBzZXRDaGFuY2VPZlJhaW4gPSAoKCk9PiBnZXQuY2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID0gd2VhdGhlci53ZWF0aGVyT2JqLnJhaW4gKyAnIG1tJykoKTtcbiAgICBjb25zdCBzZXRXaW5kID0gKCgpPT4gZ2V0LndpbmQudGV4dENvbnRlbnQgPSB3ZWF0aGVyLndlYXRoZXJPYmoud2luZCArICcgbS9waCcpKCk7XG4gICAgY29uc3Qgc2V0VGVtcCA9ICgoKSA9PiBnZXQudGVtcC50ZXh0Q29udGVudCA9IHdlYXRoZXIud2VhdGhlck9iai50ZW1wICsgJ8KwJykoKTtcbiAgICBjb25zdCBzZXRJY29uID0gKCgpPT4gZ2V0LndlYXRoZXJJY29uLnNyYyA9IGAke3dlYXRoZXIud2VhdGhlck9iai5jb25kaXRpb25JY29ufWApKCk7XG4gICAgY29uc3QgZmVlbHNMaWtlID0gKCgpID0+IGdldC5mZWVsc0xpa2UudGV4dENvbnRlbnQgPSAnRmVlbHMgbGlrZSAnICsgd2VhdGhlci53ZWF0aGVyT2JqLnRlbXBGZWVsc0xpa2UgKyAnwrAnKVxuICAgXG4gICAgICAgIGlmICh3ZWF0aGVyLndlYXRoZXJPYmouaXNEYXkpIHtcbiAgICAgICAgICAgIGdldC53cmFwcGVyLmNsYXNzTGlzdCA9ICdkYXknO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF3ZWF0aGVyLndlYXRoZXJPYmouaXNEYXkpIHtcbiAgICAgICAgICAgIGdldC53cmFwcGVyLmNsYXNzTGlzdCA9ICduaWdodCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdlYXRoZXIud2VhdGhlck9iai5jb25kaXRpb24gPT0gJ1N1bm55Jykge1xuICAgICAgICAgICAgZ2V0LndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc3VubnknKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2VhdGhlci53ZWF0aGVyT2JqLmNvbmRpdGlvbiA9PSAnUmFpbnknIHx8IHdlYXRoZXIud2VhdGhlck9iai5jb25kaXRpb24gPT0gJ0xpZ2h0IHJhaW4gc2hvd2VyJykge1xuICAgICAgICAgICAgZ2V0LndyYXBwZXIuY2xhc3NMaXN0LmFkZCgncmFpbnknKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2VhdGhlci53ZWF0aGVyT2JqLmNvbmRpdGlvbiA9PSAnQ2xvdWR5JyB8fCB3ZWF0aGVyLndlYXRoZXJPYmouY29uZGl0aW9uID09ICdQYXJ0bHkgY2xvdWR5Jykge1xuICAgICAgICAgICAgZ2V0LndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2xvdWR5Jyk7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBmb3JlY2FzdERheXMuZm9yRWFjaChkYXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRheS5kYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IHdlZWtkYXk6ICdsb25nJ307XG4gICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkYXRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRhdGVFbC5pZCA9ICdkYXRlLWVsZW1lbnQnO1xuICAgICAgICAgICAgZGF0ZUVsLnRleHRDb250ZW50ID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLUVOJywgb3B0aW9ucyk7XG4gICAgICAgXG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVySWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgd2VhdGhlckljb24uc3JjID0gZGF5LmRheS5jb25kaXRpb24uaWNvbjtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBkYXkuZGF5Lm1heHRlbXBfYyArJ8KwJyArICcgLyAnICsgZGF5LmRheS5taW50ZW1wX2MgKyAnwrAnO1xuICAgICBcbiAgICAgICAgICAgICAgICBkYXRlRWwuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pXG4gICAgICAgICAgICAgICAgZGF0ZUVsLmFwcGVuZENoaWxkKHRlbXApXG4gICAgICAgICAgICAgICAgZ2V0LndlZWtseUZvcmVjYXN0LmFwcGVuZENoaWxkKGRhdGVFbCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbn07XG5cbnJlbmRlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
