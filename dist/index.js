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



var components = {};

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
    },
    easing: {
      type: Function,
      required: false,
      default: __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.linear
    }
  },
  data: function data() {
    return {
      onShowLock: false,
      loading: true,
      cachedPos: {}
    };
  },

  methods: {
    cachePosition: function cachePosition() {
      this.cachedPos = this.getPosition();
    },
    getPosition: function getPosition() {
      var addOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var node = this.$el.firstChild;
      var rect = node.getBoundingClientRect();
      var computedStyle = getComputedStyle(node);
      var marginTop = parseInt(computedStyle.marginTop, 10);
      var marginLeft = parseInt(computedStyle.marginLeft, 10);
      return {
        top: rect.top - marginTop + (addOffset ? 1 : 0) * (window.pageYOffset || document.documentElement.scrollTop) + 'px',
        left: rect.left - marginLeft + 'px',
        width: rect.width + 'px',
        height: rect.height + 'px',
        margin: computedStyle.margin,
        padding: computedStyle.padding,
        borderRadius: computedStyle.borderRadius,
        position: 'absolute'
      };
    },
    animate: function animate(prevPosition, el) {
      var _this = this;

      var clone = el.firstChild.cloneNode(true);
      Object.assign(clone.style, prevPosition);
      document.body.appendChild(clone);

      var opts = {
        duration: this.duration,
        easing: this.easing,
        done: function done() {
          __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.show(_this.$el.firstChild);
          document.body.removeChild(clone);
          _this.$emit('animation-end');
        }
      };

      __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.hide(clone);
      __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.hide(this.$el.firstChild);
      __WEBPACK_IMPORTED_MODULE_0_ramjet___default.a.transform(clone, this.$el.firstChild, opts);
    },
    onHide: function onHide() {
      components[this.id] = {
        id: this.id,
        el: this.$el,
        prevPosition: this.cachedPos
      };
    },
    onShow: function onShow() {
      var self = this;
      if (this.onShowLock) return;
      this.onShowLock = true;

      if (components[this.id]) {
        var _components$id = components[this.id],
            prevPosition = _components$id.prevPosition,
            el = _components$id.el;

        components[this.id] = false;
        this.animate(prevPosition, el);
      } else {
        this.loading = false;
      }
    }
  },
  mounted: function mounted() {
    this.onShow();
    this.cachePosition();
  },
  beforeDestroy: function beforeDestroy() {
    this.onHide();
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



var plugin = {
  install: function install(Vue) {
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

/***/ })
/******/ ]);
});