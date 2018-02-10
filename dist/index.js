(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-overdrive"] = factory(require("vue"));
	else
		root["vue-overdrive"] = factory(root["vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramjet__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramjet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramjet__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



var getPosition = function getPosition(node) {
  var rect = node.getBoundingClientRect();
  var computedStyle = getComputedStyle(node);
  var marginTop = parseInt(computedStyle.marginTop, 10);
  var marginLeft = parseInt(computedStyle.marginLeft, 10);
  return {
    top: rect.top - marginTop + (window.pageYOffset || document.documentElement.scrollTop) + 'px',
    left: rect.left - marginLeft + 'px',
    width: rect.width + 'px',
    height: rect.height + 'px',
    margin: computedStyle.margin,
    padding: computedStyle.padding,
    position: 'absolute'
  };
};

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'overdrive',
  props: {
    id: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: false,
      default: 'div'
    },
    duration: {
      type: Number,
      required: false,
      default: 250
    }
  },
  computed: {
    comps: function comps() {
      return this.$odStore.state.components[this.id];
    }
  },
  watch: {
    comps: {
      handler: function handler(nv, ov) {
        var self = this;
        if (!nv && !ov) return;
        this.$nextTick(function () {
          var _nv = _slicedToArray(nv, 2),
              a = _nv[0],
              b = _nv[1];

          var clone = a.el.cloneNode(true);
          Object.assign(clone.style, a.prevPosition);
          document.body.appendChild(clone);
          __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.hide(b.el);
          __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.hide(clone);
          __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.transform(clone, b.el, {
            duration: self.duration,
            easing: __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.easeIn,
            done: function done() {
              __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.show(b.el);
              document.body.removeChild(clone);
              self.$odStore.dispatch('REMOVE_COMPONENT', { id: self.id });
            }
          });
        });
      },

      immediate: true
    }
  },
  mounted: function mounted() {
    var el = this.$slots.default[0].elm;
    this.$odStore.dispatch('ADD_COMPONENT', {
      id: this.id,
      el: el,
      prevPosition: getPosition(el)
    });
  },
  render: function render(h) {
    return h(this.tag, this.$slots.default);
  }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Overdrive_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(6);



__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */].Store({
  state: {
    components: {}
  },
  actions: {
    ADD_COMPONENT: function ADD_COMPONENT(_ref, _ref2) {
      var commit = _ref.commit;
      var id = _ref2.id,
          el = _ref2.el,
          prevPosition = _ref2.prevPosition;

      commit('addComponent', { id: id, el: el, prevPosition: prevPosition });
    },
    REMOVE_COMPONENT: function REMOVE_COMPONENT(_ref3, _ref4) {
      var commit = _ref3.commit;
      var id = _ref4.id;

      commit('removeComponent', { id: id });
    }
  },
  mutations: {
    addComponent: function addComponent(state, _ref5) {
      var id = _ref5.id,
          el = _ref5.el,
          prevPosition = _ref5.prevPosition;

      if (state.components[id]) {
        state.components[id].push({
          id: id, el: el, prevPosition: prevPosition
        });
      } else {
        state.components[id] = [{ id: id, el: el, prevPosition: prevPosition }];
      }
    },
    removeComponent: function removeComponent(state, _ref6) {
      var id = _ref6.id;

      state.components[id].shift();
    }
  }
});

var plugin = {
  install: function install(Vue) {
    Vue.prototype.$odStore = store;
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__Overdrive_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__Overdrive_vue__["a" /* default */]);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (plugin);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Overdrive_vue__ = __webpack_require__(0);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(4);
var disposed = false
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
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
/* 3 */
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
/* 4 */
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


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export Store */
/* unused harmony export install */
/* unused harmony export mapState */
/* unused harmony export mapMutations */
/* unused harmony export mapGetters */
/* unused harmony export mapActions */
/* unused harmony export createNamespacedHelpers */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ? options.store() : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {
    return;
  }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {
    return fn(obj[key], key);
  });
}

function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {
    throw new Error("[vuex] " + msg);
  }
}

var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors$1);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  if (process.env.NODE_ENV !== 'production') {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) {
    return;
  }

  parent.removeChild(key);
};

function update(path, targetModule, newModule) {
  if (process.env.NODE_ENV !== 'production') {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, " + 'manual reload is needed');
        }
        return;
      }
      update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
    }
  }
}

var functionAssert = {
  assert: function assert(value) {
    return typeof value === 'function';
  },
  expected: 'function'
};

var objectAssert = {
  assert: function assert(value) {
    return typeof value === 'function' || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.handler === 'function';
  },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {
      return;
    }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

  var state = options.state;if (state === void 0) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {
    return plugin(this$1);
  });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors.state.set = function (v) {
  if (process.env.NODE_ENV !== 'production') {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) {
    return sub(mutation, this$1.state);
  });

  if (process.env.NODE_ENV !== 'production' && options && options.silent) {
    console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. " + 'Use the filter functionality in the vue-devtools');
  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  this._actionSubscribers.forEach(function (sub) {
    return sub(action, this$1.state);
  });

  return entry.length > 1 ? Promise.all(entry.map(function (handler) {
    return handler(payload);
  })) : entry[0](payload);
};

Store.prototype.subscribe = function subscribe(fn) {
  return genericSubscribe(fn, this._subscribers);
};

Store.prototype.subscribeAction = function subscribeAction(fn) {
  return genericSubscribe(fn, this._actionSubscribers);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {
    return getter(this$1.state, this$1.getters);
  }, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {
    path = [path];
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {
    path = [path];
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors);

function genericSubscribe(fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () {
      return fn(store);
    };
    Object.defineProperty(store.getters, key, {
      get: function get() {
        return store._vm[key];
      },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {
      return oldVm.$destroy();
    });
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (process.env.NODE_ENV !== 'production' && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (process.env.NODE_ENV !== 'production' && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ? function () {
        return store.getters;
      } : function () {
        return makeLocalGetters(store, namespace);
      }
    },
    state: {
      get: function get() {
        return getNestedState(store.state, path);
      }
    }
  });

  return local;
}

function makeLocalGetters(store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) {
      return;
    }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function get() {
        return store.getters[type];
      },
      enumerable: true
    });
  });

  return gettersProxy;
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (process.env.NODE_ENV !== 'production') {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {
    return this._data.$$state;
  }, function () {
    if (process.env.NODE_ENV !== 'production') {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.length ? path.reduce(function (state, key) {
    return state[key];
  }, state) : state;
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof type === 'string', "Expects string as the type, but found " + (typeof type === 'undefined' ? 'undefined' : _typeof(type)) + ".");
  }

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[vuex] already installed. Vue.use(Vuex) should be called only once.');
    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ? val.call(this, state, getters) : state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ? val.apply(this, [commit].concat(args)) : commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if (process.env.NODE_ENV !== 'production' && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

var createNamespacedHelpers = function createNamespacedHelpers(namespace) {
  return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace)
  };
};

function normalizeMap(map) {
  return Array.isArray(map) ? map.map(function (key) {
    return { key: key, val: key };
  }) : Object.keys(map).map(function (key) {
    return { key: key, val: map[key] };
  });
}

function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (process.env.NODE_ENV !== 'production' && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["a"] = (index_esm);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ })
/******/ ]);
});