(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-overdrive"] = factory(require("vue"));
	else
		root["vue-overdrive"] = factory(root["vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramjet__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramjet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramjet__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();


var components = {};
var readyToAnimate = false;

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'overdrive',
  props: {
    id: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h) {
    return h(this.tag, this.$slots.default);
  },

  watch: {
    '$route': {
      handler: function handler(to, from) {
        if (to && from) {
          readyToAnimate = true;
        }
      },

      immediate: true
    }
  },
  methods: {
    animateForward: function animateForward(a, b) {
      __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.hide(b.$el);
      __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.transform(a.$el, b.$el, {
        duration: 250,
        easing: __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.easeIn,
        done: function done() {
          __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.show(b.$el);
        }
      });
    },
    animateBackward: function animateBackward(a, b) {
      __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.hide(b.$el);
      __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.transform(b.$el, a.$el, {
        duration: 250,
        easing: __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.easeIn,
        done: function done() {
          this.onChildRoute = false;
        }
      });
    }
  },
  mounted: function mounted() {
    components[this.id] ? components[this.id].push(this) : components[this.id] = [this];

    if (components[this.id].length === 2) {
      var _components$id = _slicedToArray(components[this.id], 2),
          a = _components$id[0],
          b = _components$id[1];

      if (!readyToAnimate) return;
      this.animateForward(a, b);
    }
  },
  destroyed: function destroyed() {
    var _components$id2 = _slicedToArray(components[this.id], 2),
        a = _components$id2[0],
        b = _components$id2[1];

    this.animateBackward(a, b);
    components[this.id].pop();
  }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Overdrive_vue__ = __webpack_require__(3);



var plugin = {
  install: function install(Vue, options) {
    Vue.component('Overdrive', __WEBPACK_IMPORTED_MODULE_1__Overdrive_vue__["a" /* default */]);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (plugin);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Overdrive_vue__ = __webpack_require__(0);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(10);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(4)
}
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bcd14ae6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Overdrive_vue__["a" /* default */],
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/Overdrive.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bcd14ae6", Component.options)
  } else {
    hotAPI.reload("data-v-bcd14ae6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("15570730", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bcd14ae6\",\"scoped\":true,\"sourceMap\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Overdrive.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bcd14ae6\",\"scoped\":true,\"sourceMap\":false}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Overdrive.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\ndiv[data-v-bcd14ae6] {\n  display: inline-block;\n}\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__listToStyles__);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = __WEBPACK_IMPORTED_MODULE_0__listToStyles___default()(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = __WEBPACK_IMPORTED_MODULE_0__listToStyles___default()(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
            ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.ramjet = factory();
})(this, function () {
            'use strict';

            var babelHelpers = {};

            babelHelpers.classCallCheck = function (instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                                    throw new TypeError("Cannot call a class as a function");
                        }
            };

            babelHelpers;

            // for the sake of Safari, may it burn in hell
            var BLACKLIST = ['length', 'parentRule'];

            var styleKeys = undefined;

            if (typeof CSS2Properties !== 'undefined') {
                        // why hello Firefox
                        styleKeys = Object.keys(CSS2Properties.prototype);
            } else {
                        styleKeys = Object.keys(document.createElement('div').style).filter(function (k) {
                                    return !~BLACKLIST.indexOf(k);
                        });
            }

            var styleKeys$1 = styleKeys;

            var svgns = 'http://www.w3.org/2000/svg';
            var svg = undefined;
            try {
                        svg = document.createElementNS(svgns, 'svg');

                        svg.style.position = 'fixed';
                        svg.style.top = svg.style.left = '0';
                        svg.style.width = svg.style.height = '100%';
                        svg.style.overflow = 'visible';
                        svg.style.pointerEvents = 'none';
                        svg.setAttribute('class', 'mogrify-svg');
            } catch (e) {
                        console.log("The current browser doesn't support SVG");
            }

            var appendedSvg = false;

            function appendSvg() {
                        document.body.appendChild(svg);
                        appendedSvg = true;
            }

            function cloneNode(node, depth, overrideClone) {
                        var clone = overrideClone ? overrideClone(node, depth) : node.cloneNode();

                        if (typeof clone === "undefined") {
                                    return;
                        }

                        var style = undefined;
                        var len = undefined;
                        var i = undefined;
                        var clonedNode = undefined;

                        if (node.nodeType === 1) {
                                    style = window.getComputedStyle(node);

                                    styleKeys$1.forEach(function (prop) {
                                                clone.style[prop] = style[prop];
                                    });

                                    len = node.childNodes.length;
                                    for (i = 0; i < len; i += 1) {
                                                clonedNode = cloneNode(node.childNodes[i], depth + 1, overrideClone);
                                                if (clonedNode) {
                                                            clone.appendChild(clonedNode);
                                                }
                                    }
                        }

                        return clone;
            }

            function wrapNode(node, destinationIsFixed, overrideClone, appendToBody) {
                        var isSvg = node.namespaceURI === svgns;

                        var _node$getBoundingClie = node.getBoundingClientRect();

                        var left = _node$getBoundingClie.left;
                        var right = _node$getBoundingClie.right;
                        var top = _node$getBoundingClie.top;
                        var bottom = _node$getBoundingClie.bottom;

                        var style = window.getComputedStyle(node);
                        var clone = cloneNode(node, 0, overrideClone);

                        var wrapper = {
                                    node: node, clone: clone, isSvg: isSvg,
                                    cx: (left + right) / 2,
                                    cy: (top + bottom) / 2,
                                    width: right - left,
                                    height: bottom - top,
                                    transform: null,
                                    borderRadius: null
                        };

                        if (isSvg) {
                                    var ctm = node.getScreenCTM();
                                    wrapper.transform = 'matrix(' + [ctm.a, ctm.b, ctm.c, ctm.d, ctm.e, ctm.f].join(',') + ')';
                                    wrapper.borderRadius = [0, 0, 0, 0];

                                    svg.appendChild(clone);
                        } else {

                                    if (destinationIsFixed) {
                                                // position relative to the viewport
                                                clone.style.position = 'fixed';
                                                clone.style.top = top - parseInt(style.marginTop, 10) + 'px';
                                                clone.style.left = left - parseInt(style.marginLeft, 10) + 'px';
                                    } else {
                                                var offsetParent = node.offsetParent;

                                                if (offsetParent === null || offsetParent === document.body || appendToBody) {
                                                            // parent is fixed, or I want to append the node to the body
                                                            // position relative to the document
                                                            var docElem = document.documentElement;
                                                            clone.style.position = 'absolute';
                                                            clone.style.top = top + window.pageYOffset - docElem.clientTop - parseInt(style.marginTop, 10) + 'px';
                                                            clone.style.left = left + window.pageXOffset - docElem.clientLeft - parseInt(style.marginLeft, 10) + 'px';
                                                } else {
                                                            //position relative to the parent
                                                            var offsetParentStyle = window.getComputedStyle(offsetParent);
                                                            var offsetParentBcr = offsetParent.getBoundingClientRect();

                                                            clone.style.position = 'absolute';
                                                            clone.style.top = top - parseInt(style.marginTop, 10) - (offsetParentBcr.top - parseInt(offsetParentStyle.marginTop, 10)) + 'px';
                                                            clone.style.left = left - parseInt(style.marginLeft, 10) - (offsetParentBcr.left - parseInt(offsetParentStyle.marginLeft, 10)) + 'px';
                                                }
                                    }

                                    wrapper.transform = ''; // TODO...?
                                    wrapper.borderRadius = [parseFloat(style.borderTopLeftRadius), parseFloat(style.borderTopRightRadius), parseFloat(style.borderBottomRightRadius), parseFloat(style.borderBottomLeftRadius)];

                                    if (appendToBody) {
                                                document.body.appendChild(clone);
                                    } else {
                                                node.parentNode.appendChild(clone);
                                    }
                        }

                        return wrapper;
            }

            function hideNode(node) {
                        node.__ramjetOriginalTransition__ = node.style.transition;
                        node.style.transition = '';

                        node.style.opacity = 0;
            }

            function showNode(node) {
                        node.style.transition = '';
                        node.style.opacity = 1;

                        if (node.__ramjetOriginalTransition__) {
                                    setTimeout(function () {
                                                node.style.transition = node.__ramjetOriginalTransition__;
                                    });
                        }
            }

            function isNodeFixed(node) {
                        while (node !== null) {
                                    if (window.getComputedStyle(node).position === "fixed") {
                                                return true;
                                    }
                                    node = node.namespaceURI === svgns ? node.parentNode : node.offsetParent;
                        }
                        return false;
            }

            function getTransform(isSvg, cx, cy, dx, dy, dsx, dsy, t, t_scale) {
                        var transform = isSvg ? "translate(" + cx + " " + cy + ") scale(" + (1 + t_scale * dsx) + " " + (1 + t_scale * dsy) + ") translate(" + -cx + " " + -cy + ") translate(" + t * dx + " " + t * dy + ")" : "translate(" + t * dx + "px," + t * dy + "px) scale(" + (1 + t_scale * dsx) + "," + (1 + t_scale * dsy) + ")";

                        return transform;
            }

            function getBorderRadius(a, b, dsx, dsy, t) {
                        var sx = 1 + t * dsx;
                        var sy = 1 + t * dsy;

                        return a.map(function (from, i) {
                                    var to = b[i];

                                    var rx = (from + t * (to - from)) / sx;
                                    var ry = (from + t * (to - from)) / sy;

                                    return rx + "px " + ry + "px";
                        });
            }

            function linear(pos) {
                        return pos;
            }

            function easeIn(pos) {
                        return Math.pow(pos, 3);
            }

            function easeOut(pos) {
                        return Math.pow(pos - 1, 3) + 1;
            }

            function easeInOut(pos) {
                        if ((pos /= 0.5) < 1) {
                                    return 0.5 * Math.pow(pos, 3);
                        }

                        return 0.5 * (Math.pow(pos - 2, 3) + 2);
            }

            var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
                        return setTimeout(fn, 16);
            };

            var TimerTransformer = function TimerTransformer(from, to, options) {
                        babelHelpers.classCallCheck(this, TimerTransformer);

                        var dx = to.cx - from.cx;
                        var dy = to.cy - from.cy;

                        var dsxf = to.width / from.width - 1;
                        var dsyf = to.height / from.height - 1;

                        var dsxt = from.width / to.width - 1;
                        var dsyt = from.height / to.height - 1;

                        var startTime = Date.now();
                        var duration = options.duration || 400;
                        var easing = options.easing || linear;
                        var easingScale = options.easingScale || easing;

                        function tick() {
                                    var timeNow = Date.now();
                                    var elapsed = timeNow - startTime;

                                    if (elapsed > duration) {
                                                from.clone.parentNode.removeChild(from.clone);
                                                to.clone.parentNode.removeChild(to.clone);

                                                if (options.done) {
                                                            options.done();
                                                }

                                                return;
                                    }

                                    var t = easing(elapsed / duration);
                                    var t_scale = easingScale(elapsed / duration);

                                    // opacity
                                    from.clone.style.opacity = 1 - t;
                                    to.clone.style.opacity = t;

                                    // border radius
                                    var fromBorderRadius = getBorderRadius(from.borderRadius, to.borderRadius, dsxf, dsyf, t);
                                    var toBorderRadius = getBorderRadius(to.borderRadius, from.borderRadius, dsxt, dsyt, 1 - t);

                                    applyBorderRadius(from.clone, fromBorderRadius);
                                    applyBorderRadius(to.clone, toBorderRadius);

                                    var cx = from.cx + dx * t;
                                    var cy = from.cy + dy * t;

                                    var fromTransform = getTransform(from.isSvg, cx, cy, dx, dy, dsxf, dsyf, t, t_scale) + ' ' + from.transform;
                                    var toTransform = getTransform(to.isSvg, cx, cy, -dx, -dy, dsxt, dsyt, 1 - t, 1 - t_scale) + ' ' + to.transform;

                                    if (from.isSvg) {
                                                from.clone.setAttribute('transform', fromTransform);
                                    } else {
                                                from.clone.style.transform = from.clone.style.webkitTransform = from.clone.style.msTransform = fromTransform;
                                    }

                                    if (to.isSvg) {
                                                to.clone.setAttribute('transform', toTransform);
                                    } else {
                                                to.clone.style.transform = to.clone.style.webkitTransform = to.clone.style.msTransform = toTransform;
                                    }

                                    rAF(tick);
                        }

                        tick();
            };

            function applyBorderRadius(node, borderRadius) {
                        node.style.borderTopLeftRadius = borderRadius[0];
                        node.style.borderTopRightRadius = borderRadius[1];
                        node.style.borderBottomRightRadius = borderRadius[2];
                        node.style.borderBottomLeftRadius = borderRadius[3];
            }

            var div = document.createElement('div');

            var keyframesSupported = true;
            var TRANSFORM = undefined;
            var KEYFRAMES = undefined;
            var ANIMATION_DIRECTION = undefined;
            var ANIMATION_DURATION = undefined;
            var ANIMATION_ITERATION_COUNT = undefined;
            var ANIMATION_NAME = undefined;
            var ANIMATION_TIMING_FUNCTION = undefined;
            var ANIMATION_END = undefined;

            // We have to browser-sniff for IE11, because it was apparently written
            // by a barrel of stoned monkeys - http://jsfiddle.net/rich_harris/oquLu2qL/

            // http://stackoverflow.com/questions/17907445/how-to-detect-ie11
            var isIe11 = !window.ActiveXObject && 'ActiveXObject' in window;

            if (!isIe11 && ('transform' in div.style || 'webkitTransform' in div.style) && ('animation' in div.style || 'webkitAnimation' in div.style)) {
                        keyframesSupported = true;

                        TRANSFORM = 'transform' in div.style ? 'transform' : '-webkit-transform';

                        if ('animation' in div.style) {
                                    KEYFRAMES = '@keyframes';

                                    ANIMATION_DIRECTION = 'animationDirection';
                                    ANIMATION_DURATION = 'animationDuration';
                                    ANIMATION_ITERATION_COUNT = 'animationIterationCount';
                                    ANIMATION_NAME = 'animationName';
                                    ANIMATION_TIMING_FUNCTION = 'animationTimingFunction';

                                    ANIMATION_END = 'animationend';
                        } else {
                                    KEYFRAMES = '@-webkit-keyframes';

                                    ANIMATION_DIRECTION = 'webkitAnimationDirection';
                                    ANIMATION_DURATION = 'webkitAnimationDuration';
                                    ANIMATION_ITERATION_COUNT = 'webkitAnimationIterationCount';
                                    ANIMATION_NAME = 'webkitAnimationName';
                                    ANIMATION_TIMING_FUNCTION = 'webkitAnimationTimingFunction';

                                    ANIMATION_END = 'webkitAnimationEnd';
                        }
            } else {
                        keyframesSupported = false;
            }

            var KeyframeTransformer = function KeyframeTransformer(from, to, options) {
                        babelHelpers.classCallCheck(this, KeyframeTransformer);

                        var _getKeyframes = getKeyframes(from, to, options);

                        var fromKeyframes = _getKeyframes.fromKeyframes;
                        var toKeyframes = _getKeyframes.toKeyframes;

                        var fromId = '_' + ~~(Math.random() * 1000000);
                        var toId = '_' + ~~(Math.random() * 1000000);

                        var css = KEYFRAMES + ' ' + fromId + ' { ' + fromKeyframes + ' } ' + KEYFRAMES + ' ' + toId + ' { ' + toKeyframes + ' }';
                        var dispose = addCss(css);

                        from.clone.style[ANIMATION_DIRECTION] = 'alternate';
                        from.clone.style[ANIMATION_DURATION] = options.duration / 1000 + 's';
                        from.clone.style[ANIMATION_ITERATION_COUNT] = 1;
                        from.clone.style[ANIMATION_NAME] = fromId;
                        from.clone.style[ANIMATION_TIMING_FUNCTION] = 'linear';

                        to.clone.style[ANIMATION_DIRECTION] = 'alternate';
                        to.clone.style[ANIMATION_DURATION] = options.duration / 1000 + 's';
                        to.clone.style[ANIMATION_ITERATION_COUNT] = 1;
                        to.clone.style[ANIMATION_NAME] = toId;
                        to.clone.style[ANIMATION_TIMING_FUNCTION] = 'linear';

                        var fromDone = undefined;
                        var toDone = undefined;

                        function done() {
                                    if (fromDone && toDone) {
                                                from.clone.parentNode.removeChild(from.clone);
                                                to.clone.parentNode.removeChild(to.clone);

                                                if (options.done) options.done();

                                                dispose();
                                    }
                        }

                        from.clone.addEventListener(ANIMATION_END, function () {
                                    fromDone = true;
                                    done();
                        });

                        to.clone.addEventListener(ANIMATION_END, function () {
                                    toDone = true;
                                    done();
                        });
            };

            function addCss(css) {
                        var styleElement = document.createElement('style');
                        styleElement.type = 'text/css';

                        var head = document.getElementsByTagName('head')[0];

                        // Internet Exploder won't let you use styleSheet.innerHTML - we have to
                        // use styleSheet.cssText instead
                        var styleSheet = styleElement.styleSheet;

                        if (styleSheet) {
                                    styleSheet.cssText = css;
                        } else {
                                    styleElement.innerHTML = css;
                        }

                        head.appendChild(styleElement);

                        return function () {
                                    return head.removeChild(styleElement);
                        };
            }

            function getKeyframes(from, to, options) {
                        var dx = to.cx - from.cx;
                        var dy = to.cy - from.cy;

                        var dsxf = to.width / from.width - 1;
                        var dsyf = to.height / from.height - 1;

                        var dsxt = from.width / to.width - 1;
                        var dsyt = from.height / to.height - 1;

                        var easing = options.easing || linear;
                        var easingScale = options.easingScale || easing;

                        var numFrames = options.duration / 50; // one keyframe per 50ms is probably enough... this may prove not to be the case though

                        var fromKeyframes = [];
                        var toKeyframes = [];
                        var i;

                        function addKeyframes(pc, t, t_scale) {
                                    var cx = from.cx + dx * t;
                                    var cy = from.cy + dy * t;

                                    var fromBorderRadius = getBorderRadius(from.borderRadius, to.borderRadius, dsxf, dsyf, t);
                                    var toBorderRadius = getBorderRadius(to.borderRadius, from.borderRadius, dsxt, dsyt, 1 - t);

                                    var fromTransform = getTransform(false, cx, cy, dx, dy, dsxf, dsyf, t, t_scale) + ' ' + from.transform;
                                    var toTransform = getTransform(false, cx, cy, -dx, -dy, dsxt, dsyt, 1 - t, 1 - t_scale) + ' ' + to.transform;

                                    fromKeyframes.push('\n\t\t\t' + pc + '% {\n\t\t\t\topacity: ' + (1 - t) + ';\n\t\t\t\tborder-top-left-radius: ' + fromBorderRadius[0] + ';\n\t\t\t\tborder-top-right-radius: ' + fromBorderRadius[1] + ';\n\t\t\t\tborder-bottom-right-radius: ' + fromBorderRadius[2] + ';\n\t\t\t\tborder-bottom-left-radius: ' + fromBorderRadius[3] + ';\n\t\t\t\t' + TRANSFORM + ': ' + fromTransform + ';\n\t\t\t}');

                                    toKeyframes.push('\n\t\t\t' + pc + '% {\n\t\t\t\topacity: ' + t + ';\n\t\t\t\tborder-top-left-radius: ' + toBorderRadius[0] + ';\n\t\t\t\tborder-top-right-radius: ' + toBorderRadius[1] + ';\n\t\t\t\tborder-bottom-right-radius: ' + toBorderRadius[2] + ';\n\t\t\t\tborder-bottom-left-radius: ' + toBorderRadius[3] + ';\n\t\t\t\t' + TRANSFORM + ': ' + toTransform + ';\n\t\t\t}');
                        }

                        for (i = 0; i < numFrames; i += 1) {
                                    var pc = 100 * (i / numFrames);
                                    var t = easing(i / numFrames);
                                    var t_scale = easingScale(i / numFrames);

                                    addKeyframes(pc, t, t_scale);
                        }

                        addKeyframes(100, 1, 1);

                        fromKeyframes = fromKeyframes.join('\n');
                        toKeyframes = toKeyframes.join('\n');

                        return { fromKeyframes: fromKeyframes, toKeyframes: toKeyframes };
            }

            var ramjet = {
                        transform: function transform(fromNode, toNode) {
                                    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                                    if (typeof options === 'function') {
                                                options = { done: options };
                                    }

                                    if (!('duration' in options)) {
                                                options.duration = 400;
                                    }

                                    var appendToBody = !!options.appendToBody;
                                    var destinationIsFixed = isNodeFixed(toNode);
                                    var from = wrapNode(fromNode, destinationIsFixed, options.overrideClone, appendToBody);
                                    var to = wrapNode(toNode, destinationIsFixed, options.overrideClone, appendToBody);

                                    if (from.isSvg || to.isSvg && !appendedSvg) {
                                                appendSvg();
                                    }

                                    if (!keyframesSupported || options.useTimer || from.isSvg || to.isSvg) {
                                                return new TimerTransformer(from, to, options);
                                    } else {
                                                return new KeyframeTransformer(from, to, options);
                                    }
                        },
                        hide: function hide() {
                                    for (var _len = arguments.length, nodes = Array(_len), _key = 0; _key < _len; _key++) {
                                                nodes[_key] = arguments[_key];
                                    }

                                    nodes.forEach(hideNode);
                        },
                        show: function show() {
                                    for (var _len2 = arguments.length, nodes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                                                nodes[_key2] = arguments[_key2];
                                    }

                                    nodes.forEach(showNode);
                        },

                        // expose some basic easing functions
                        linear: linear, easeIn: easeIn, easeOut: easeOut, easeInOut: easeInOut
            };

            return ramjet;
});
//# sourceMappingURL=ramjet.umd.js.map

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
});