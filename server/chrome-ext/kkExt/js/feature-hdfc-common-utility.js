(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("base"), require("core"), require("ui"), require("feature-hdfc-navigation"), require("feature-hdfc-cryptojs"));
	else if(typeof define === 'function' && define.amd)
		define("feature-hdfc-common-utility", ["base", "core", "ui", "feature-hdfc-navigation", "feature-hdfc-cryptojs"], factory);
	else if(typeof exports === 'object')
		exports["feature-hdfc-common-utility"] = factory(require("base"), require("core"), require("ui"), require("feature-hdfc-navigation"), require("feature-hdfc-cryptojs"));
	else
		root["feature-hdfc-common-utility"] = factory(root["base"], root["core"], root["ui"], root["feature-hdfc-navigation"], root["feature-hdfc-cryptojs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_84__, __WEBPACK_EXTERNAL_MODULE_103__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(98);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_84__;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, module, __webpack_require__(4), __webpack_require__(5), __webpack_require__(6), __webpack_require__(99), __webpack_require__(84), __webpack_require__(100), __webpack_require__(101), __webpack_require__(102), __webpack_require__(104), __webpack_require__(105), __webpack_require__(106), __webpack_require__(109), __webpack_require__(110)], __WEBPACK_AMD_DEFINE_RESULT__ = function (e, i, r, t, c, a) {
	  "use strict";
	  r.name = "feature-hdfc-common-utility", __webpack_require__(99);var n = __webpack_require__(84);n.async = !0;var o = [c.name, a.name, n.name];function s(e, i) {
	    e.$watch(function () {
	      return i.getTop();
	    }, function (e, i) {
	      e !== i && (e ? gadgets.pubsub.publish("enableDisableBackButton", { enable: 0 }) : gadgets.pubsub.publish("enableDisableBackButton", { enable: 1 }));
	    });
	  }s.$inject = ["$rootScope", "$uibModalStack"], r.exports = t.createModule(r.name, o).directive(__webpack_require__(100)).filter(__webpack_require__(101)).service(__webpack_require__(102)).service(__webpack_require__(104)).service(__webpack_require__(105)).service(__webpack_require__(106)).service(__webpack_require__(109)).service(__webpack_require__(110)).run(s);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

	"use strict";

	!function (e, t, r) {
	  "use strict";
	  function n(e) {
	    return N(e) ? e : Object.keys(e).map(function (t) {
	      return e[t];
	    });
	  }function u(e) {
	    return null === e;
	  }function i(e, t) {
	    return -1 == Object.keys(e).map(function (n) {
	      return t[n] !== r && t[n] == e[n];
	    }).indexOf(!1);
	  }function a(e, t) {
	    function r(e, t, r) {
	      for (var n = 0; t + n <= e.length;) {
	        if (e.charAt(t + n) == r) return n;n++;
	      }return -1;
	    }for (var n = 0, u = 0; u <= t.length; u++) {
	      var i = r(e, n, t.charAt(u));if (-1 == i) return !1;n += i + 1;
	    }return !0;
	  }function o(e, t, r) {
	    var n = 0;return e.filter(function (e) {
	      var u = $(r) ? n < t && r(e) : n < t;return n = u ? n + 1 : n, u;
	    });
	  }function f(e, t) {
	    return Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
	  }function s(e) {
	    return e && e.$evalAsync && e.$watch;
	  }function l() {
	    return function (e, t) {
	      return e > t;
	    };
	  }function c() {
	    return function (e, t) {
	      return e >= t;
	    };
	  }function m() {
	    return function (e, t) {
	      return e < t;
	    };
	  }function d() {
	    return function (e, t) {
	      return e <= t;
	    };
	  }function p() {
	    return function (e, t) {
	      return e == t;
	    };
	  }function h() {
	    return function (e, t) {
	      return e != t;
	    };
	  }function b() {
	    return function (e, t) {
	      return e === t;
	    };
	  }function v() {
	    return function (e, t) {
	      return e !== t;
	    };
	  }function g(e) {
	    return function (t, r) {
	      return t = B(t) ? n(t) : t, !(!N(t) || O(r)) && t.some(function (t) {
	        return E(r) && B(t) || x(r) ? e(r)(t) : t === r;
	      });
	    };
	  }function y(e) {
	    return function (t, r) {
	      if (t = B(t) ? n(t) : t, !N(t)) return t;var u = [],
	          i = e(r);return O(r) ? t.filter(function (e, t, r) {
	        return r.indexOf(e) === t;
	      }) : t.filter(function (e) {
	        var t = i(e);return !function (e, t) {
	          return !O(t) && e.some(function (e) {
	            return A(e, t);
	          });
	        }(u, t) && (u.push(t), !0);
	      });
	    };
	  }function w() {
	    return function (e) {
	      return E(e) ? e.split(" ").map(function (e) {
	        return e.charAt(0).toUpperCase() + e.substring(1);
	      }).join(" ") : e;
	    };
	  }var $ = t.isDefined,
	      O = t.isUndefined,
	      x = t.isFunction,
	      E = t.isString,
	      M = t.isNumber,
	      B = t.isObject,
	      N = t.isArray,
	      z = t.forEach,
	      F = t.extend,
	      j = t.copy,
	      A = t.equals;String.prototype.contains || (String.prototype.contains = function () {
	    return -1 !== String.prototype.indexOf.apply(this, arguments);
	  }), t.module("a8m.angular", []).filter("isUndefined", function () {
	    return function (e) {
	      return t.isUndefined(e);
	    };
	  }).filter("isDefined", function () {
	    return function (e) {
	      return t.isDefined(e);
	    };
	  }).filter("isFunction", function () {
	    return function (e) {
	      return t.isFunction(e);
	    };
	  }).filter("isString", function () {
	    return function (e) {
	      return t.isString(e);
	    };
	  }).filter("isNumber", function () {
	    return function (e) {
	      return t.isNumber(e);
	    };
	  }).filter("isArray", function () {
	    return function (e) {
	      return t.isArray(e);
	    };
	  }).filter("isObject", function () {
	    return function (e) {
	      return t.isObject(e);
	    };
	  }).filter("isEqual", function () {
	    return function (e, r) {
	      return t.equals(e, r);
	    };
	  }), t.module("a8m.conditions", []).filter({ isGreaterThan: l, ">": l, isGreaterThanOrEqualTo: c, ">=": c, isLessThan: m, "<": m, isLessThanOrEqualTo: d, "<=": d, isEqualTo: p, "==": p, isNotEqualTo: h, "!=": h, isIdenticalTo: b, "===": b, isNotIdenticalTo: v, "!==": v }), t.module("a8m.is-null", []).filter("isNull", function () {
	    return function (e) {
	      return u(e);
	    };
	  }), t.module("a8m.after-where", []).filter("afterWhere", function () {
	    return function (e, t) {
	      if (e = B(e) ? n(e) : e, !N(e) || O(t)) return e;var r = e.map(function (e) {
	        return i(t, e);
	      }).indexOf(!0);return e.slice(-1 === r ? 0 : r);
	    };
	  }), t.module("a8m.after", []).filter("after", function () {
	    return function (e, t) {
	      return e = B(e) ? n(e) : e, N(e) ? e.slice(t) : e;
	    };
	  }), t.module("a8m.before-where", []).filter("beforeWhere", function () {
	    return function (e, t) {
	      if (e = B(e) ? n(e) : e, !N(e) || O(t)) return e;var r = e.map(function (e) {
	        return i(t, e);
	      }).indexOf(!0);return e.slice(0, -1 === r ? e.length : ++r);
	    };
	  }), t.module("a8m.before", []).filter("before", function () {
	    return function (e, t) {
	      return e = B(e) ? n(e) : e, N(e) ? e.slice(0, t ? --t : t) : e;
	    };
	  }), t.module("a8m.chunk-by", ["a8m.filter-watcher"]).filter("chunkBy", ["filterWatcher", function (e) {
	    return function (t, r, n) {
	      return e.isMemoized("chunkBy", arguments) || e.memoize("chunkBy", arguments, this, function (e, t, r) {
	        return N(e) ? e.map(function (e, n, u) {
	          return n *= t, e = u.slice(n, n + t), !O(r) && e.length < t ? e.concat(function (e, t) {
	            for (var r = []; e--;) {
	              r[e] = t;
	            }return r;
	          }(t - e.length, r)) : e;
	        }).slice(0, Math.ceil(e.length / t)) : e;
	      }(t, r, n));
	    };
	  }]), t.module("a8m.concat", []).filter("concat", [function () {
	    return function (e, t) {
	      if (O(t)) return e;if (N(e)) return B(t) ? e.concat(n(t)) : e.concat(t);if (B(e)) {
	        var r = n(e);return B(t) ? r.concat(n(t)) : r.concat(t);
	      }return e;
	    };
	  }]), t.module("a8m.contains", []).filter({ contains: ["$parse", g], some: ["$parse", g] }), t.module("a8m.count-by", []).filter("countBy", ["$parse", function (e) {
	    return function (t, r) {
	      var u,
	          i = {},
	          a = e(r);return t = B(t) ? n(t) : t, !N(t) || O(r) ? t : (t.forEach(function (e) {
	        u = a(e), i[u] || (i[u] = 0), i[u]++;
	      }), i);
	    };
	  }]), t.module("a8m.defaults", []).filter("defaults", ["$parse", function (e) {
	    return function (t, r) {
	      if (t = B(t) ? n(t) : t, !N(t) || !B(r)) return t;var u = function e(t, r, n) {
	        return r = r || [], Object.keys(t).forEach(function (u) {
	          if (B(t[u]) && !N(t[u])) {
	            var i = n ? n + "." + u : n;e(t[u], r, i || u);
	          } else {
	            var a = n ? n + "." + u : u;r.push(a);
	          }
	        }), r;
	      }(r);return t.forEach(function (t) {
	        u.forEach(function (n) {
	          var u = e(n),
	              i = u.assign;O(u(t)) && i(t, u(r));
	        });
	      }), t;
	    };
	  }]), t.module("a8m.every", []).filter("every", ["$parse", function (e) {
	    return function (t, r) {
	      return t = B(t) ? n(t) : t, !(N(t) && !O(r)) || t.every(function (t) {
	        return B(t) || x(r) ? e(r)(t) : t === r;
	      });
	    };
	  }]), t.module("a8m.filter-by", []).filter("filterBy", ["$parse", function (e) {
	    return function (t, u, i, a) {
	      var o;return i = E(i) || M(i) ? String(i).toLowerCase() : r, t = B(t) ? n(t) : t, !N(t) || O(i) ? t : t.filter(function (t) {
	        return u.some(function (r) {
	          if (~r.indexOf("+")) {
	            var n = r.replace(/\s+/g, "").split("+");o = n.map(function (r) {
	              return e(r)(t);
	            }).join(" ");
	          } else o = e(r)(t);return !(!E(o) && !M(o)) && (o = String(o).toLowerCase(), a ? o === i : o.contains(i));
	        });
	      });
	    };
	  }]), t.module("a8m.first", []).filter("first", ["$parse", function (e) {
	    return function (t) {
	      var u, i, a;return t = B(t) ? n(t) : t, N(t) ? (a = Array.prototype.slice.call(arguments, 1), u = M(a[0]) ? a[0] : 1, i = M(a[0]) ? M(a[1]) ? r : a[1] : a[0], a.length ? o(t, u, i ? e(i) : i) : t[0]) : t;
	    };
	  }]), t.module("a8m.flatten", []).filter("flatten", function () {
	    return function (e, t) {
	      return t = t || !1, e = B(e) ? n(e) : e, N(e) ? t ? [].concat.apply([], e) : function e(t, r) {
	        return (r = r || 0) >= t.length ? t : N(t[r]) ? e(t.slice(0, r).concat(t[r], t.slice(r + 1)), r) : e(t, r + 1);
	      }(e, 0) : e;
	    };
	  }), t.module("a8m.fuzzy-by", []).filter("fuzzyBy", ["$parse", function (e) {
	    return function (t, r, u, i) {
	      var o,
	          f,
	          s = i || !1;return t = B(t) ? n(t) : t, !N(t) || O(r) || O(u) ? t : (f = e(r), t.filter(function (e) {
	        return o = f(e), !!E(o) && (o = s ? o : o.toLowerCase(), u = s ? u : u.toLowerCase(), !1 !== a(o, u));
	      }));
	    };
	  }]), t.module("a8m.fuzzy", []).filter("fuzzy", function () {
	    return function (e, t, r) {
	      var u = r || !1;return e = B(e) ? n(e) : e, !N(e) || O(t) ? e : (t = u ? t : t.toLowerCase(), e.filter(function (e) {
	        return E(e) ? !1 !== a(e = u ? e : e.toLowerCase(), t) : !!B(e) && function (e, t) {
	          var r, n;return 0 < Object.keys(e).filter(function (i) {
	            return r = e[i], !!n || !!E(r) && (r = u ? r : r.toLowerCase(), n = !1 !== a(r, t));
	          }).length;
	        }(e, t);
	      }));
	    };
	  }), t.module("a8m.group-by", ["a8m.filter-watcher"]).filter("groupBy", ["$parse", "filterWatcher", function (e, t) {
	    return function (r, n) {
	      return !B(r) || O(n) ? r : t.isMemoized("groupBy", arguments) || t.memoize("groupBy", arguments, this, function (e, t) {
	        var r,
	            n = {};return z(e, function (e) {
	          r = t(e), n[r] || (n[r] = []), n[r].push(e);
	        }), n;
	      }(r, e(n)));
	    };
	  }]), t.module("a8m.is-empty", []).filter("isEmpty", function () {
	    return function (e) {
	      return B(e) ? !n(e).length : !e.length;
	    };
	  }), t.module("a8m.join", []).filter("join", function () {
	    return function (e, t) {
	      return O(e) || !N(e) ? e : (O(t) && (t = " "), e.join(t));
	    };
	  }), t.module("a8m.last", []).filter("last", ["$parse", function (e) {
	    return function (t) {
	      var u,
	          i,
	          a,
	          f = j(t);return f = B(f) ? n(f) : f, N(f) ? (a = Array.prototype.slice.call(arguments, 1), u = M(a[0]) ? a[0] : 1, i = M(a[0]) ? M(a[1]) ? r : a[1] : a[0], a.length ? o(f.reverse(), u, i ? e(i) : i).reverse() : f[f.length - 1]) : f;
	    };
	  }]), t.module("a8m.map", []).filter("map", ["$parse", function (e) {
	    return function (t, r) {
	      return t = B(t) ? n(t) : t, !N(t) || O(r) ? t : t.map(function (t) {
	        return e(r)(t);
	      });
	    };
	  }]), t.module("a8m.omit", []).filter("omit", ["$parse", function (e) {
	    return function (t, r) {
	      return t = B(t) ? n(t) : t, !N(t) || O(r) ? t : t.filter(function (t) {
	        return !e(r)(t);
	      });
	    };
	  }]), t.module("a8m.pick", []).filter("pick", ["$parse", function (e) {
	    return function (t, r) {
	      return t = B(t) ? n(t) : t, !N(t) || O(r) ? t : t.filter(function (t) {
	        return e(r)(t);
	      });
	    };
	  }]), t.module("a8m.range", []).filter("range", function () {
	    return function (e, t, r, n, u) {
	      r = r || 0, n = n || 1;for (var i = 0; i < parseInt(t); i++) {
	        var a = r + i * n;e.push(x(u) ? u(a) : a);
	      }return e;
	    };
	  }), t.module("a8m.remove-with", []).filter("removeWith", function () {
	    return function (e, t) {
	      return O(t) ? e : (e = B(e) ? n(e) : e).filter(function (e) {
	        return !i(t, e);
	      });
	    };
	  }), t.module("a8m.remove", []).filter("remove", function () {
	    return function (e) {
	      e = B(e) ? n(e) : e;var t = Array.prototype.slice.call(arguments, 1);return N(e) ? e.filter(function (e) {
	        return !t.some(function (t) {
	          return A(t, e);
	        });
	      }) : e;
	    };
	  }), t.module("a8m.reverse", []).filter("reverse", [function () {
	    return function (e) {
	      return e = B(e) ? n(e) : e, E(e) ? e.split("").reverse().join("") : N(e) ? e.slice().reverse() : e;
	    };
	  }]), t.module("a8m.search-field", []).filter("searchField", ["$parse", function (e) {
	    return function (t) {
	      var r;t = B(t) ? n(t) : t;var u = Array.prototype.slice.call(arguments, 1);return N(t) && u.length ? t.map(function (t) {
	        return r = u.map(function (r) {
	          return e(r)(t);
	        }).join(" "), F(t, { searchField: r });
	      }) : t;
	    };
	  }]), t.module("a8m.to-array", []).filter("toArray", function () {
	    return function (e, t) {
	      return B(e) ? t ? Object.keys(e).map(function (t) {
	        return F(e[t], { $key: t });
	      }) : n(e) : e;
	    };
	  }), t.module("a8m.unique", []).filter({ unique: ["$parse", y], uniq: ["$parse", y] }), t.module("a8m.where", []).filter("where", function () {
	    return function (e, t) {
	      return O(t) ? e : (e = B(e) ? n(e) : e).filter(function (e) {
	        return i(t, e);
	      });
	    };
	  }), t.module("a8m.xor", []).filter("xor", ["$parse", function (e) {
	    return function (t, r, u) {
	      function i(t, r) {
	        var n = e(u);return r.some(function (e) {
	          return u ? A(n(e), n(t)) : A(e, t);
	        });
	      }return u = u || !1, t = B(t) ? n(t) : t, r = B(r) ? n(r) : r, N(t) && N(r) ? t.concat(r).filter(function (e) {
	        return !(i(e, t) && i(e, r));
	      }) : t;
	    };
	  }]), t.module("a8m.math.abs", []).filter("abs", function () {
	    return function (e) {
	      return Math.abs(e);
	    };
	  }), t.module("a8m.math.byteFmt", []).filter("byteFmt", function () {
	    var e = [{ str: "B", val: 1024 }];return ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"].forEach(function (t, r) {
	      e.push({ str: t, val: 1024 * e[r].val });
	    }), function (t, r) {
	      if (M(r) && isFinite(r) && r % 1 == 0 && r >= 0 && M(t) && isFinite(t)) {
	        for (var n = 0; n < e.length - 1 && t >= e[n].val;) {
	          n++;
	        }return f(t /= n > 0 ? e[n - 1].val : 1, r) + " " + e[n].str;
	      }return "NaN";
	    };
	  }), t.module("a8m.math.degrees", []).filter("degrees", function () {
	    return function (e, t) {
	      if (M(t) && isFinite(t) && t % 1 == 0 && t >= 0 && M(e) && isFinite(e)) {
	        var r = 180 * e / Math.PI;return Math.round(r * Math.pow(10, t)) / Math.pow(10, t);
	      }return "NaN";
	    };
	  }), t.module("a8m.math.kbFmt", []).filter("kbFmt", function () {
	    var e = [{ str: "KB", val: 1024 }];return ["MB", "GB", "TB", "PB", "EB", "ZB", "YB"].forEach(function (t, r) {
	      e.push({ str: t, val: 1024 * e[r].val });
	    }), function (t, r) {
	      if (M(r) && isFinite(r) && r % 1 == 0 && r >= 0 && M(t) && isFinite(t)) {
	        for (var n = 0; n < e.length - 1 && t >= e[n].val;) {
	          n++;
	        }return f(t /= n > 0 ? e[n - 1].val : 1, r) + " " + e[n].str;
	      }return "NaN";
	    };
	  }), t.module("a8m.math.max", []).filter("max", ["$parse", function (e) {
	    function t(t, r) {
	      var n = t.map(function (t) {
	        return e(r)(t);
	      });return n.indexOf(Math.max.apply(Math, n));
	    }return function (e, r) {
	      return N(e) ? O(r) ? Math.max.apply(Math, e) : e[t(e, r)] : e;
	    };
	  }]), t.module("a8m.math.min", []).filter("min", ["$parse", function (e) {
	    function t(t, r) {
	      var n = t.map(function (t) {
	        return e(r)(t);
	      });return n.indexOf(Math.min.apply(Math, n));
	    }return function (e, r) {
	      return N(e) ? O(r) ? Math.min.apply(Math, e) : e[t(e, r)] : e;
	    };
	  }]), t.module("a8m.math.percent", []).filter("percent", function () {
	    return function (e, t, r) {
	      var n = E(e) ? Number(e) : e;return t = t || 100, r = r || !1, !M(n) || isNaN(n) ? e : r ? Math.round(n / t * 100) : n / t * 100;
	    };
	  }), t.module("a8m.math.radians", []).filter("radians", function () {
	    return function (e, t) {
	      if (M(t) && isFinite(t) && t % 1 == 0 && t >= 0 && M(e) && isFinite(e)) {
	        var r = 3.14159265359 * e / 180;return Math.round(r * Math.pow(10, t)) / Math.pow(10, t);
	      }return "NaN";
	    };
	  }), t.module("a8m.math.radix", []).filter("radix", function () {
	    return function (e, t) {
	      return M(e) && /^[2-9]$|^[1-2]\d$|^3[0-6]$/.test(t) ? e.toString(t).toUpperCase() : e;
	    };
	  }), t.module("a8m.math.shortFmt", []).filter("shortFmt", function () {
	    return function (e, t) {
	      return M(t) && isFinite(t) && t % 1 == 0 && t >= 0 && M(e) && isFinite(e) ? e < 1e3 ? "" + e : e < 1e6 ? f(e / 1e3, t) + " K" : e < 1e9 ? f(e / 1e6, t) + " M" : f(e / 1e9, t) + " B" : "NaN";
	    };
	  }), t.module("a8m.math.sum", []).filter("sum", function () {
	    return function (e, t) {
	      return N(e) ? e.reduce(function (e, t) {
	        return e + t;
	      }, t || 0) : e;
	    };
	  }), t.module("a8m.ends-with", []).filter("endsWith", function () {
	    return function (e, t, r) {
	      var n,
	          u = r || !1;return !E(e) || O(t) ? e : (n = (e = u ? e : e.toLowerCase()).length - t.length, -1 !== e.indexOf(u ? t : t.toLowerCase(), n));
	    };
	  }), t.module("a8m.latinize", []).filter("latinize", [function () {
	    for (var e = [{ base: "A", letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ" }, { base: "AA", letters: "Ꜳ" }, { base: "AE", letters: "ÆǼǢ" }, { base: "AO", letters: "Ꜵ" }, { base: "AU", letters: "Ꜷ" }, { base: "AV", letters: "ꜸꜺ" }, { base: "AY", letters: "Ꜽ" }, { base: "B", letters: "BⒷＢḂḄḆɃƂƁ" }, { base: "C", letters: "CⒸＣĆĈĊČÇḈƇȻꜾ" }, { base: "D", letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ" }, { base: "DZ", letters: "ǱǄ" }, { base: "Dz", letters: "ǲǅ" }, { base: "E", letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ" }, { base: "F", letters: "FⒻＦḞƑꝻ" }, { base: "G", letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ" }, { base: "H", letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ" }, { base: "I", letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ" }, { base: "J", letters: "JⒿＪĴɈ" }, { base: "K", letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ" }, { base: "L", letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ" }, { base: "LJ", letters: "Ǉ" }, { base: "Lj", letters: "ǈ" }, { base: "M", letters: "MⓂＭḾṀṂⱮƜ" }, { base: "N", letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ" }, { base: "NJ", letters: "Ǌ" }, { base: "Nj", letters: "ǋ" }, { base: "O", letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ" }, { base: "OI", letters: "Ƣ" }, { base: "OO", letters: "Ꝏ" }, { base: "OU", letters: "Ȣ" }, { base: "OE", letters: "Œ" }, { base: "oe", letters: "œ" }, { base: "P", letters: "PⓅＰṔṖƤⱣꝐꝒꝔ" }, { base: "Q", letters: "QⓆＱꝖꝘɊ" }, { base: "R", letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ" }, { base: "S", letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ" }, { base: "T", letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ" }, { base: "TZ", letters: "Ꜩ" }, { base: "U", letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ" }, { base: "V", letters: "VⓋＶṼṾƲꝞɅ" }, { base: "VY", letters: "Ꝡ" }, { base: "W", letters: "WⓌＷẀẂŴẆẄẈⱲ" }, { base: "X", letters: "XⓍＸẊẌ" }, { base: "Y", letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ" }, { base: "Z", letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ" }, { base: "a", letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ" }, { base: "aa", letters: "ꜳ" }, { base: "ae", letters: "æǽǣ" }, { base: "ao", letters: "ꜵ" }, { base: "au", letters: "ꜷ" }, { base: "av", letters: "ꜹꜻ" }, { base: "ay", letters: "ꜽ" }, { base: "b", letters: "bⓑｂḃḅḇƀƃɓ" }, { base: "c", letters: "cⓒｃćĉċčçḉƈȼꜿↄ" }, { base: "d", letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ" }, { base: "dz", letters: "ǳǆ" }, { base: "e", letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ" }, { base: "f", letters: "fⓕｆḟƒꝼ" }, { base: "g", letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ" }, { base: "h", letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ" }, { base: "hv", letters: "ƕ" }, { base: "i", letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı" }, { base: "j", letters: "jⓙｊĵǰɉ" }, { base: "k", letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ" }, { base: "l", letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ" }, { base: "lj", letters: "ǉ" }, { base: "m", letters: "mⓜｍḿṁṃɱɯ" }, { base: "n", letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ" }, { base: "nj", letters: "ǌ" }, { base: "o", letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ" }, { base: "oi", letters: "ƣ" }, { base: "ou", letters: "ȣ" }, { base: "oo", letters: "ꝏ" }, { base: "p", letters: "pⓟｐṕṗƥᵽꝑꝓꝕ" }, { base: "q", letters: "qⓠｑɋꝗꝙ" }, { base: "r", letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ" }, { base: "s", letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ" }, { base: "t", letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ" }, { base: "tz", letters: "ꜩ" }, { base: "u", letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ" }, { base: "v", letters: "vⓥｖṽṿʋꝟʌ" }, { base: "vy", letters: "ꝡ" }, { base: "w", letters: "wⓦｗẁẃŵẇẅẘẉⱳ" }, { base: "x", letters: "xⓧｘẋẍ" }, { base: "y", letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ" }, { base: "z", letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ" }], t = {}, r = 0; r < e.length; r++) {
	      for (var n = e[r].letters.split(""), u = 0; u < n.length; u++) {
	        t[n[u]] = e[r].base;
	      }
	    }return function (e) {
	      return E(e) ? function (e) {
	        return e.replace(/[^\u0000-\u007E]/g, function (e) {
	          return t[e] || e;
	        });
	      }(e) : e;
	    };
	  }]), t.module("a8m.ltrim", []).filter("ltrim", function () {
	    return function (e, t) {
	      var r = t || "\\s";return E(e) ? e.replace(new RegExp("^" + r + "+"), "") : e;
	    };
	  }), t.module("a8m.match", []).filter("match", function () {
	    return function (e, t, r) {
	      var n = new RegExp(t, r);return E(e) ? e.match(n) : null;
	    };
	  }), t.module("a8m.phoneUS", []).filter("phoneUS", function () {
	    return function (e) {
	      return "(" + (e += "").slice(0, 3) + ") " + e.slice(3, 6) + "-" + e.slice(6);
	    };
	  }), t.module("a8m.repeat", []).filter("repeat", [function () {
	    return function (e, t, r) {
	      var n = ~~t;return E(e) && n ? function e(t, r, n) {
	        return r ? t + n + e(t, --r, n) : t;
	      }(e, --t, r || "") : e;
	    };
	  }]), t.module("a8m.rtrim", []).filter("rtrim", function () {
	    return function (e, t) {
	      var r = t || "\\s";return E(e) ? e.replace(new RegExp(r + "+$"), "") : e;
	    };
	  }), t.module("a8m.slugify", []).filter("slugify", [function () {
	    return function (e, t) {
	      var r = O(t) ? "-" : t;return E(e) ? e.toLowerCase().replace(/\s+/g, r) : e;
	    };
	  }]), t.module("a8m.split", []).filter("split", function () {
	    return function (e, t, r) {
	      var n, i, a, o;return O(e) || !E(e) ? null : (O(t) && (t = ""), isNaN(r) && (r = 0), n = new RegExp(function (e) {
	        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	      }(t), "g"), u(i = e.match(n)) || r >= i.length ? [e] : 0 === r ? e.split(t) : (o = (a = e.split(t)).splice(0, r + 1), a.unshift(o.join(t)), a));
	    };
	  }), t.module("a8m.starts-with", []).filter("startsWith", function () {
	    return function (e, t, r) {
	      var n = r || !1;return !E(e) || O(t) ? e : !(e = n ? e : e.toLowerCase()).indexOf(n ? t : t.toLowerCase());
	    };
	  }), t.module("a8m.stringular", []).filter("stringular", function () {
	    return function (e) {
	      var t = Array.prototype.slice.call(arguments, 1);return e.replace(/{(\d+)}/g, function (e, r) {
	        return O(t[r]) ? e : t[r];
	      });
	    };
	  }), t.module("a8m.strip-tags", []).filter("stripTags", function () {
	    return function (e) {
	      return E(e) ? e.replace(/<\S[^><]*>/g, "") : e;
	    };
	  }), t.module("a8m.test", []).filter("test", function () {
	    return function (e, t, r) {
	      var n = new RegExp(t, r);return E(e) ? n.test(e) : e;
	    };
	  }), t.module("a8m.trim", []).filter("trim", function () {
	    return function (e, t) {
	      var r = t || "\\s";return E(e) ? e.replace(new RegExp("^" + r + "+|" + r + "+$", "g"), "") : e;
	    };
	  }), t.module("a8m.truncate", []).filter("truncate", function () {
	    return function (e, t, r, n) {
	      return t = O(t) ? e.length : t, n = n || !1, r = r || "", !E(e) || e.length <= t ? e : e.substring(0, n ? -1 === e.indexOf(" ", t) ? e.length : e.indexOf(" ", t) : t) + r;
	    };
	  }), t.module("a8m.ucfirst", []).filter({ ucfirst: w, titleize: w }), t.module("a8m.uri-component-encode", []).filter("uriComponentEncode", ["$window", function (e) {
	    return function (t) {
	      return E(t) ? e.encodeURIComponent(t) : t;
	    };
	  }]), t.module("a8m.uri-encode", []).filter("uriEncode", ["$window", function (e) {
	    return function (t) {
	      return E(t) ? e.encodeURI(t) : t;
	    };
	  }]), t.module("a8m.wrap", []).filter("wrap", function () {
	    return function (e, t, r) {
	      return E(e) && $(t) ? [t, e, r || t].join("") : e;
	    };
	  }), t.module("a8m.filter-watcher", []).provider("filterWatcher", function () {
	    this.$get = ["$window", "$rootScope", function (e, t) {
	      function r(t, r) {
	        return [t, JSON.stringify(r, function () {
	          var t = [];return function (r, n) {
	            if (B(n) && !u(n)) {
	              if (~t.indexOf(n)) return "[Circular]";t.push(n);
	            }return e == n ? "$WINDOW" : e.document == n ? "$DOCUMENT" : s(n) ? "$SCOPE" : n;
	          };
	        }())].join("#").replace(/"/g, "");
	      }function n(e) {
	        var t = e.targetScope.$id;z(f[t], function (e) {
	          delete o[e];
	        }), delete f[t];
	      }function i() {
	        l(function () {
	          t.$$phase || (o = {});
	        }, 2e3);
	      }function a(e, t) {
	        var r = e.$id;return O(f[r]) && (e.$on("$destroy", n), f[r] = []), f[r].push(t);
	      }var o = {},
	          f = {},
	          l = e.setTimeout;return { isMemoized: function isMemoized(e, t) {
	          var n = r(e, t);return o[n];
	        }, memoize: function memoize(e, t, n, u) {
	          var f = r(e, t);return o[f] = u, s(n) ? a(n, f) : i(), u;
	        } };
	    }];
	  }), t.module("angular.filter", ["a8m.ucfirst", "a8m.uri-encode", "a8m.uri-component-encode", "a8m.slugify", "a8m.latinize", "a8m.strip-tags", "a8m.stringular", "a8m.truncate", "a8m.starts-with", "a8m.ends-with", "a8m.wrap", "a8m.trim", "a8m.ltrim", "a8m.rtrim", "a8m.repeat", "a8m.test", "a8m.match", "a8m.split", "a8m.phoneUS", "a8m.to-array", "a8m.concat", "a8m.contains", "a8m.unique", "a8m.is-empty", "a8m.after", "a8m.after-where", "a8m.before", "a8m.before-where", "a8m.defaults", "a8m.where", "a8m.reverse", "a8m.remove", "a8m.remove-with", "a8m.group-by", "a8m.count-by", "a8m.chunk-by", "a8m.search-field", "a8m.fuzzy-by", "a8m.fuzzy", "a8m.omit", "a8m.pick", "a8m.every", "a8m.filter-by", "a8m.xor", "a8m.map", "a8m.first", "a8m.last", "a8m.flatten", "a8m.join", "a8m.range", "a8m.math.max", "a8m.math.min", "a8m.math.abs", "a8m.math.percent", "a8m.math.radix", "a8m.math.sum", "a8m.math.degrees", "a8m.math.radians", "a8m.math.byteFmt", "a8m.math.kbFmt", "a8m.math.shortFmt", "a8m.angular", "a8m.conditions", "a8m.is-null", "a8m.filter-watcher"]);
	}(window, window.angular);

/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (e, t, n) {
	  function a(e) {
	    return { restrict: "A", link: function link(e, t, n) {
	        var a, i, l, c;if (gadgets.pubsub.subscribe("NBGlobalPublish", function (e) {
	          a = e.gapPref, i = e.zinePref, l = e.onlyZineLogin;
	        }), a || i) {
	          var _r = function _r(e, t) {
	            var n, a, i;5 != e[0] && 6 != e[0] || "" !== t.value && (-1 !== e.indexOf("sendData") ? m(e[1] + "Input" + g(e[2]) + "Click", t.value) : -1 !== e.indexOf("encryptedData") && t.value.length > 4 ? m(e[1] + "Input" + g(e[2]) + "Click", (n = t.value, a = n.replace(/\s/g, ""), i = a.length, Array(i - 4 + 1).join("*") + a.slice(i - 4, a.length))) : -1 !== e.indexOf("encryptedData") && t.value.length <= 4 ? m(e[1] + "Input" + g(e[2]) + "Click", Array(t.value.length + 1).join("*")) : m(e[1] + "Input" + g(e[2]) + "Click"), u(e[1], "inputBlur", e[2]));
	          };

	          var u = function u(e, t, n) {
	            a && e && (e = e.replace("$", ""), console.log("GAP Events----- Event Category: " + e + ", Event Action: " + t + ", Event Label: " + n), "undefined" != typeof ga && ga("send", "event", e, t, n));
	          };

	          var p = function p(e, t) {
	            a && (e = e.replace("$", ""), console.log("GAP VPV Events----- Page URL: " + t + ", Title: " + e), "undefined" != typeof ga && ga("send", { hitType: "pageview", page: "VPV/li/" + t, title: e }));
	          };

	          var g = function g(e) {
	            return e.charAt(0).toUpperCase() + e.slice(1);
	          };

	          var d = function d(e, t) {
	            4 == e.length ? m(e[1] + t + g(e[2]) + "Click", e[3]) : m(e[1] + t + g(e[2]) + "Click");
	          };

	          var m = function m(e, t) {
	            var n, a;i && (n = "string" != typeof t ? JSON.stringify(t) : t, l ? e.includes("$") && (e = e.replace("$", ""), console.log("Zineone----- Event Name: " + e + ", Event Data: " + n), "undefined" != typeof ZineOne && ZineOne.pushEvent(e, { payload: n })) : (a = (a = e.replace("$", "")).replace(/[\s-!_%@#$^*()+=;:"'|\\\/?{}\[\],. ]/g, ""), console.log("Zineone----- Event Name:" + a + ", Event Data:" + n), "undefined" != typeof ZineOne && ZineOne.pushEvent(a, { payload: n })));
	          };

	          var s, o;e.$watchCollection(n.nbIntgEvents, function (e) {
	            s = e;
	          }), t.on("click", function (e) {
	            if (1 == (o = s[0])) u(s[1], "buttonClick", s[2]), 4 == s.length ? m(s[1] + g(s[2]) + "Click", s[3]) : m(s[1] + g(s[2]) + "Click");else if (2 == o) u(s[1], "radioButtonClick", s[2]), d(s, "Radio");else if (3 == o) u(s[1], "accordionClick", s[2]), d(s, "Accordion");else if (4 == o) u(s[1], "checkboxClick", s[2]), d(s, "Checkbox");else if (11 == o) {
	              p(s[1], s[2]);var t = s[2].split("/");4 == s.length ? m(s[1] + g(t[t.length - 1]) + "Click", s[3]) : m(s[1] + g(t[t.length - 1]) + "Click");
	            }
	          }), t.on("blur", "input", function (e) {
	            _r(s, this);
	          }), t.on("blur", function (e) {
	            _r(s, this);
	          }), gadgets.pubsub.subscribe("nbGap", function (e) {
	            if (0 == e.count) {
	              var t;if (e.VPV) "ack" == e.type ? (!function (e, t, n) {
	                a && (e = e.replace("$", ""), console.log("GAP VPV Events----- Page URL: " + t + ", Title: " + e + ", Data: " + JSON.stringify(n)), "undefined" != typeof ga && ga("send", { hitType: "pageview", page: "VPV/li/" + t, title: e, data: n }));
	              }(e.title, e.page, e.data), m(e.title.replace(/\s/g, "") + "Ack", e.data)) : "form" == e.type ? (p(e.title, e.page), t = e.page.split("/"), m(e.title + g(t[t.length - 1]) + "Click", e.data)) : (p(e.title, e.page), t = e.page.split("/"), m(e.title + t[t.length - 1] + "Click", t[t.length - 1])), e.count++;e.eventCategory && (u(e.eventCategory.replace(/\s/g, ""), e.eventAction.replace(/\s/g, ""), e.eventLabel.replace(/\s/g, "")), c = e.data ? e.data : { name: e.eventLabel }, m(e.eventCategory.replace(/\s/g, "") + g(e.eventLabel.replace(/\s/g, "")) + "Click", c), e.count++);
	            }
	          }), gadgets.pubsub.subscribe("nbZineone", function (e) {
	            0 == e.count && e.dataItems && (m(e.eventName, e.dataItems), e.count++);
	          });
	        }
	      } };
	  }a.$inject = ["$timeout"];function i(e, t) {
	    return { restrict: "A", link: function link(n, a, i) {
	        var l,
	            c,
	            s,
	            o = !isNaN(i.longPressDuration) && parseInt(i.longPressDuration) || 600,
	            r = !i.preventOnscrolling || "true" === i.preventOnscrolling,
	            u = 15;function p(a) {
	          var r = e(i.onLongPress);(a.originalEvent || a).touches && (c = (a.originalEvent || a).touches[0].screenY, s = (a.originalEvent || a).touches[0].screenX), t.cancel(l), n.longPressSent = !1, l = t(function () {
	            n.longPressSent = !0, n.$apply(function () {
	              r(n, { $event: a });
	            });
	          }, o);
	        }function g(a) {
	          var c = e(i.onTouchEnd);t.cancel(l), i.onTouchEnd && n.$apply(function () {
	            c(n, { $event: a });
	          });
	        }a.bind("touchstart", p), a.bind("touchend", g), a.bind("mousedown", p), a.bind("mouseup", g), a.bind("click", function (e) {
	          !n.longPressSent || i.preventClick && "true" !== i.preventClick || (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation());
	        }), a.bind("pointerdown", p), a.bind("pointerup", g), r && a.bind("touchmove", function (e) {
	          var n = (e.originalEvent || e).touches[0].screenY,
	              a = (e.originalEvent || e).touches[0].screenX;(void 0 !== c && void 0 !== s && Math.abs(n - c) > u || Math.abs(a - s) > u) && t.cancel(l);
	        });
	      } };
	  }i.$inject = ["$parse", "$timeout"];function l(e, t) {
	    var n, a, i, l, c, s, o, r, u, p;return { link: function link(e, t, g) {
	        e.$watch("value", function () {
	          e.value = parseFloat(e.value), e.currcode = e.currencycode, e.noOfDecimals = null != e.fractioncount ? parseInt(e.fractioncount).toString() : "2", void 0 !== e.currencysymbol && "" !== e.currencysymbol && null != e.currencysymbol ? e.currSymbol = e.currencysymbol : void 0 !== e.currcode ? e.currSymbol = e.currcode : e.currSymbol = "", void 0 !== e.value && ("INR" == e.currcode || "" == e.currcode || void 0 === e.currcode || "INR" == e.currSymbol || "₹" == e.currSymbol ? (n = e.value.toString().split("."), n[0].replace(/-/g, "") > 1e8 ? (e.showInfoIcon = !0, a = e.value.toString().split("."), i = a[0].substring(a[0].length - 3), "" !== (l = a[0].substring(0, a[0].length - 3)) && "-" !== l && (i = "," + i), e.integerPartDisplay = l.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + i, e.decimalPartDisplay = parseFloat(e.value).toFixed(e.noOfDecimals).toString().split(".")[1], c = n[0].slice(0, -7), u = n[0].substr(n[0].length - 7), p = u.slice(0, -5), o = c.substring(c.length - 3), "" !== (r = c.substring(0, c.length - 3)) && "-" !== r && (o = "," + o), e.integerPart = r.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + o, e.decimalPart = p, e.decimalType = " Cr", e.finalRupeeVal = e.currSymbol + " " + e.integerPartDisplay + "." + e.decimalPartDisplay + e.decimalType, e.finalRupeeValue = e.currSymbol + " " + e.integerPartDisplay + "." + e.decimalPartDisplay) : (e.showInfoIcon = !1, o = n[0].substring(n[0].length - 3), "" !== (r = n[0].substring(0, n[0].length - 3)) && "-" !== r && (o = "," + o), e.integerPart = r.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + o, e.decimalType = "", e.decimalPart = parseFloat(e.value).toFixed(e.noOfDecimals).toString().split(".")[1], e.finalRupeeVal = e.currSymbol + " " + e.integerPart + e.decimalPart)) : (e.showInfoIcon = !0, a = e.value.toString().split("."), i = a[0].substring(a[0].length - 3), "" !== (l = a[0].substring(0, a[0].length - 3)) && "-" !== l && (i = "," + i), e.integerPartDisplay = l.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + i, e.decimalPartDisplay = parseFloat(e.value).toFixed(e.noOfDecimals).toString().split(".")[1], n = e.value.toString().split("."), n[0].replace(/-/g, "") > 1e8 ? (c = n[0].slice(0, -7), u = n[0].substr(n[0].length - 7), p = u.slice(0, -5), o = c.substring(c.length - 3), "" !== (r = c.substring(0, c.length - 3)) && "-" !== r && (o = "," + o), e.integerPart = r.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + o, e.decimalPart = p, e.decimalType = " B", e.finalRupeeVal = e.currSymbol + " " + e.integerPartDisplay + "." + e.decimalPartDisplay + e.decimalType, e.finalRupeeValue = e.currSymbol + " " + e.integerPartDisplay + "." + e.decimalPartDisplay) : (e.showInfoIcon = !1, n = e.value.toString().split("."), s = n[0].substring(n[0].length - 3), "" !== (r = n[0].substring(0, n[0].length - 3)) && "-" !== r && (s = "," + s), e.integerPart = r.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + s, e.decimalPart = parseFloat(e.value).toFixed(e.noOfDecimals).toString().split(".")[1], e.finalRupeeVal = e.currSymbol + " " + e.integerPart + e.decimalPart)));
	        });
	      }, scope: { currency: "=", value: "=", currencycode: "=", currencysymbol: "=", fractioncount: "=", constant: "@", integer: "@", fraction: "@", iconinfo: "=" }, restrict: "EA", template: '<span ng-style={{currency}}>{{currSymbol}} </span><span ng-style={{integer}}>{{integerPart}}</span><span ng-style={{fraction}}>.{{decimalPart}}</span><span class="decimal-type" ng-style={{currency}}>{{decimalType}}</span><p  ng-style={{iconinfo}} ng-show="showInfoIcon" class="info-tool-tip" role="img" aria-label="success-exclamation" tabindex="0" uib-popover="{{finalRupeeValue}}" popover-trigger="focus"></p>', controller: ["$scope", function (e) {
	        void 0 !== e.value && (e.currcode = e.currencycode, e.noOfDecimals = null != e.fractioncount ? parseInt(e.fractioncount).toString() : "2", void 0 !== e.currencysymbol && "" !== e.currencysymbol && null != e.currencysymbol ? e.currSymbol = e.currencysymbol : void 0 !== e.currcode ? e.currSymbol = e.currcode : e.currSymbol = "", "INR" == e.currcode || "" == e.currcode || void 0 === e.currcode || "INR" == e.currSymbol || "₹" == e.currSymbol ? (n = e.value.toString().split("."), n[0].replace(/-/g, "") > 1e8 ? (e.showInfoIcon = !0, a = e.value.toString().split("."), i = a[0].substring(a[0].length - 3), "" !== (l = a[0].substring(0, a[0].length - 3)) && "-" !== l && (i = "," + i), e.integerPartDisplay = l.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + i, e.decimalPartDisplay = parseFloat(e.value).toFixed(e.noOfDecimals).toString().split(".")[1], c = n[0].slice(0, -7), u = n[0].substr(n[0].length - 7), p = u.slice(0, -5), o = c.substring(c.length - 3), "" !== (r = c.substring(0, c.length - 3)) && "-" !== r && (o = "," + o), e.integerPart = r.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + o, e.decimalPart = p, e.decimalType = " Cr", e.finalRupeeVal = e.currSymbol + " " + e.integerPartDisplay + "." + e.decimalPartDisplay + e.decimalType, e.finalRupeeValue = e.currSymbol + " " + e.integerPartDisplay + "." + e.decimalPartDisplay) : (e.showInfoIcon = !1, o = n[0].substring(n[0].length - 3), "" !== (r = n[0].substring(0, n[0].length - 3)) && "-" !== r && (o = "," + o), e.integerPart = r.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + o, e.decimalPart = parseFloat(e.value).toFixed(e.noOfDecimals).toString().split(".")[1], e.finalRupeeVal = e.currSymbol + " " + e.integerPart + e.decimalPart)) : (e.showInfoIcon = !0, a = e.value.toString().split("."), i = a[0].substring(a[0].length - 3), "" !== (l = a[0].substring(0, a[0].length - 3)) && "-" !== l && (i = "," + i), e.integerPartDisplay = l.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + i, e.decimalPartDisplay = parseFloat(e.value).toFixed(e.noOfDecimals).toString().split(".")[1], n = e.value.toString().split("."), n[0].replace(/-/g, "") > 1e8 ? (c = n[0].slice(0, -7), u = n[0].substr(n[0].length - 7), p = u.slice(0, -5), o = c.substring(c.length - 3), "" !== (r = c.substring(0, c.length - 3)) && "-" !== r && (o = "," + o), e.integerPart = r.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + o, e.decimalPart = p, e.decimalType = " Bn", e.finalRupeeVal = e.currSymbol + " " + e.integerPartDisplay + "." + e.decimalPartDisplay + e.decimalType, e.finalRupeeValue = e.currSymbol + " " + e.integerPartDisplay + "." + e.decimalPartDisplay) : (e.showInfoIcon = !1, n = e.value.toString().split("."), s = n[0].substring(n[0].length - 3), "" !== (r = n[0].substring(0, n[0].length - 3)) && "-" !== r && (s = "," + s), e.integerPart = r.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + s, e.decimalPart = parseFloat(e.value).toFixed(e.noOfDecimals).toString().split(".")[1], e.finalRupeeVal = e.currSymbol + " " + e.integerPart + e.decimalPart)));
	      }] };
	  }function c(e) {
	    return { restrict: "E", scope: { listInfo: "=info", casaInfo: "=casa" }, templateUrl: "undefined" != typeof cxp ? "static/features/%5BBBHOST%5D/feature-hdfc-components/templates/list.html" : e.root + "/static/features/%5BBBHOST%5D/feature-hdfc-components/templates/list.html" };
	  }function s(e) {
	    return { link: function link(t, n, a, i) {
	        var l,
	            c = a.classname,
	            s = document.getElementsByClassName(c),
	            o = 0;e(function () {
	          for (l = 0; l < s.length; l++) {
	            var e = s[l].offsetHeight;e > o && (o = e);
	          }for (l = 0; l < s.length; l++) {
	            angular.element(s[l]).css("height", o + "px");
	          }
	        });
	      } };
	  }l.$inject = ["lpPortal", "$uibModal"], c.$inject = ["lpPortal"], s.$inject = ["$timeout"];function o(e) {
	    return { restrict: "E", scope: { status: "=" }, template: '<section ng-if="!status" class="loader-relative"><div class="loader clearfix"><img ng-src="' + (e.root + "/static/features/%5BBBHOST%5D/feature-hdfc-common-utility/assets/hdfc-loading.gif") + '" alt="hdfc-loader" /></div></section>' };
	  }function r(e) {
	    return { restrict: "E", template: '<p class="back-icon"><span class="icon chevron goBack" ></span><a href="" class="goBack">Back</a></p>', link: function link(t, n, a) {
	        n.on("click", ".goBack", function (t) {
	          e.back();
	        });
	      } };
	  }o.$inject = ["lpPortal"], r.$inject = ["NavigationService"], t.nbIntgEvents = a, t.customLoader = o, t.customHighchart = function () {
	    return { restrict: "E", scope: { chartConfig: "=config", chartId: "@" }, link: function link(e, t) {
	        t[0].innerHTML = "<div></div>", t[0].children[0].setAttribute("id", e.chartId);
	      } };
	  }, t.dbTimestamp = function () {
	    return { restrict: "E", scope: { offlineTime: "=offlineTime" }, template: '<div class="panel-row"><div class="clearfix"><div class="image-text fl"><p class="success success-exclamation" title="success" role="img" aria-label="success"></p></div><div class="image-text"><p class="text-left f12">You are currently offline.</p><p class="text-left">Last updated <span>{{offlineTime}}</span> ago. Go online to refresh.</p></div></div></div>' };
	  }, t.overviewNavigate = function () {
	    return { restrict: "A", link: function link(e, t, n) {
	        t.on("click", function () {
	          window.cxp && cxp.mobile.plugins.DeviceInfo.getDeviceInfo(function (e) {
	            var t = !1;"true" == n.refresh && (t = !0), gadgets.pubsub.publish("toPhoneOverview", { refresh: t });
	          });
	        });
	      } };
	  }, t.numberSpace = function () {
	    return { link: function link(e, t, n) {
	        t.on("keyup", function (e) {
	          var n = t.val(),
	              a = (n = n.replace(/[^\d]/g, "")).length;if (14 == a) {
	            var i = n.slice(0, 4) + " " + n.slice(4, 10) + " " + n.slice(10, 14);e.target.value = i;
	          } else a <= 16 && 14 != a && (e.target.value = e.target.value.replace(/[^\d]/g, "").replace(/(.{4})/g, "$1 ").trim());
	        });
	      } };
	  }, t.limitTo = function () {
	    return { restrict: "A", link: function link(e, t, n) {
	        var a,
	            i = parseInt(n.limitTo);t.on("input", function (e) {
	          if (t.val().toString().length > i) return a ? t.val(a) : t.val(t.val().toString().substring(0, i)), !1;a = t.val();
	        });
	      } };
	  }, t.numberDirective = function () {
	    return { scope: { ngModel: "=" }, link: function link(e, t, n, a) {
	        var i;t.on("keypress", function (e) {
	          var t = e.which ? e.which : e.keyCode;return 0 !== t && 229 !== t || (t = this.value.charCodeAt(this.value.length - 1)), !(t > 31 && (t < 48 || t > 57) && 46 !== t) && !(46 == t && !n.allowDecimal);
	        }), t.on("input", function () {
	          var a = t.val().split("."),
	              l = a[0],
	              c = a[1] || "";if (l.length == parseInt(n.maxLength) + 1 || c.length == parseInt(n.allowDecimal) + 1 || a.length > 2) return e.$apply(function () {
	            t.val(i), e.ngModel = parseFloat(i);
	          }), !1;i = t.val();
	        });
	      } };
	  }, t.alphaNumeric = function () {
	    return { scope: { ngModel: "=" }, link: function link(e, t, n, a) {
	        t.on("keypress", function (e) {
	          var t = e.which ? e.which : e.keyCode;return 0 !== t && 229 !== t || (t = this.value.charCodeAt(this.value.length - 1)), !(t < 48 || t > 57 && t < 65 || t > 90 && t < 97 || t > 122) || 32 === t;
	        });
	      } };
	  }, t.decimalCasingList = function () {
	    return { link: function link(e, t, n) {
	        e.$watch("value", function () {
	          if (e.value = parseFloat(e.value), void 0 !== e.value) {
	            $(".currency").closest("div").width() < 200 && (angular.element(".curr").css({ "font-size": "21px", "padding-left": "2px" }), angular.element(".decicurr").css("font-size", "10px"), angular.element(".rupeecurr").css("font-size", "21px"));var t = e.value.toString().split("."),
	                a = t[0].substring(t[0].length - 3),
	                i = t[0].substring(0, t[0].length - 3);"" !== i && (a = "," + a), e.integerPart = i.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + a;var l = n.decimals || "2";e.decimalPart = parseFloat(e.value).toFixed(l).toString().split(".")[1];
	          }
	        });
	      }, scope: { currency: "=", value: "=", constant: "@", integer: "@" }, restrict: "EA", template: '<span class="rupeecurr">&#8377</span><span class="curr" ng-style={{integer}}>{{integerPart}}</span><span class="decicurr">.{{decimalPart}}</span>', controller: ["$scope", function (e) {
	        if (void 0 !== e.value) {
	          $(".currency").closest("div").width() < 200 && (angular.element(".curr").css({ "font-size": "21px", "padding-left": "2px" }), angular.element(".decicurr").css("font-size", "10px"), angular.element(".rupeecurr").css("font-size", "21px"));var t = e.value.toString().split("."),
	              n = t[0].substring(t[0].length - 3),
	              a = t[0].substring(0, t[0].length - 3);"" !== a && (n = "," + n), e.integerPart = a.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + n, e.decimalPart = parseFloat(e.value).toFixed("2").toString().split(".")[1];
	        }
	      }] };
	  }, t.alphaSpace = function () {
	    return { link: function link(e, t, n) {
	        t.on("input change", function (e) {
	          var n = t.val();n = n.replace(/[^0-9a-zA-Z]+$/, ""), e.target.value = n;
	        });
	      } };
	  }, t.capitalize = function () {
	    return { require: "ngModel", link: function link(e, t, n, a) {
	        var i = function i(e) {
	          null == e && (e = "");var t = e.toUpperCase();return t !== e && (a.$setViewValue(t), a.$render()), t;
	        };a.$parsers.push(i), i(e[n.ngModel]);
	      } };
	  }, t.noSpecialChar = function () {
	    return { require: "ngModel", restrict: "A", link: function link(e, t, n, a) {
	        a.$parsers.push(function (e) {
	          if (null == e) return "";var t = e.replace(/[^\w\s]/gi, "");return t != e && (a.$setViewValue(t), a.$render()), t;
	        });
	      } };
	  }, t.onLongPress = i, t.decimalCasing = l, t.listDirective = c, t.equalHeight = s, t.hdfcAction = function () {
	    return { restrict: "E", scope: { actions: "=", gap: "=" }, controller: ["$scope", "DeviceService", function (e, t) {
	        var n = sessionStorage.getItem("actionData") || "5";e.itemLimit = n, e.moreActions = e.actions.slice(), e.lessActions = e.moreActions.splice(0, e.itemLimit), e.showVal = "More", e.showValItem = "moreActions", e.showMoreLess = function () {
	          angular.element(".more-action").hasClass("collapsed") ? (e.showVal = "Less", e.showValItem = "lessActions", angular.element(".more-action .panel-cols .glyphicon").addClass("glyphicon-menu-up"), angular.element(".more-action .panel-cols .glyphicon").removeClass("glyphicon-menu-down")) : (e.showVal = "More", e.showValItem = "moreActions", angular.element(".more-action .panel-cols .glyphicon").addClass("glyphicon-menu-down"), angular.element(".more-action .panel-cols .glyphicon").removeClass("glyphicon-menu-up"));
	        }, e.callGap = function (e, t) {
	          var n = { count: 0, eventCategory: t, eventAction: "actionPanelClick", eventLabel: e };gadgets.pubsub.publish("nbGap", n);
	        }, e.mobileResolution = !1, screen.width < 786 && (e.mobileResolution = !0);
	      }], link: function link(e, t, n) {
	        e.$watch(function () {
	          return e.actions;
	        }, function (t) {
	          e.moreActions = e.actions.slice(), e.lessActions = e.moreActions.splice(0, e.itemLimit), e.showVal = "More", angular.element(".more-action").hasClass("collapsed") || angular.element(".panel-footer.more-action").addClass("collapsed"), angular.element(".more-action .panel-cols .glyphicon").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down"), e.transName = e.gap;
	        }, !0);
	      }, template: '<section class="panel-card hdfc-action clearfix" ng-if="actions.length>0 && !mobileResolution"><div class="panel-grey"><p class="h4">Actions</p></div><div class="panel-white clearfix action-tab" ng-class="{\'padding-bottom-zero\': actions.length > itemLimit}"><div class="space-list"><div class="less-list-items" ng-class="{\'padding-bottom-action\': actions.length > itemLimit}"><div class="panel-row" ng-class="{\'staticActionItemHover\' : actionItem.isStaticItem}" ng-repeat="actionItem in lessActions" ng-click="actionItem.callBack();callGap(actionItem.itemName, transName)"><div class="panel-cols"><p class="f6" ng-class="{\'staticActionItem\' : actionItem.isStaticItem}">{{actionItem.itemName}}</p></div><div class="panel-cols"><a href="" class="arrow"></a></div></div></div><div class="more-list-items collapse" id="demo"><div class="panel-row" ng-class="{\'staticActionItemHover\' : actionItem.isStaticItem}" ng-repeat="actionItem in moreActions" ng-click="actionItem.callBack();callGap(actionItem.itemName, transName)"><div class="panel-cols"><p class="f6" ng-class="{\'staticActionItem\' : actionItem.isStaticItem}">{{actionItem.itemName}}</p></div><div class="panel-cols"><a href="" class="arrow"></a></div></div></div></div></div><div class="panel-footer more-action collapsed" ng-if="actions.length > itemLimit" data-toggle="collapse" data-target="#demo" ng-click="showMoreLess()" aria-expanded="false"><div class="panel-row"><div class="panel-cols"><p class="f6 text-right" ng-click="callGap(showValItem, transName)">{{showVal}} Actions</p></div><div class="panel-cols"><a href="" class="glyphicon glyphicon-menu-down"></a></div></div></div></section><section class="panel-group hdfc-action-small" id="accordion" ng-if="actions.length>0 &&  mobileResolution"><div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title f9"><a class="accordion-toggle" aria-expanded="true">Actions<span class="arrow-up"></span></a></h4></div><div id="collapseOne" class="panel-collapse collapse in" aria-expanded="true" style=""><div class="panel-body simple-accordion"><section class="panel-card hdfc-action clearfix" ng-if="actions.length>0"><div class="panel-white clearfix action-tab" ng-class="{\'padding-bottom-zero\': actions.length > itemLimit}"><div class="space-list"><div class="less-list-items" ng-class="{\'padding-bottom-action\': actions.length > itemLimit}"><div class="panel-row" ng-class="{\'staticActionItemHover\' : actionItem.isStaticItem}" ng-repeat="actionItem in lessActions" ng-click="actionItem.callBack();callGap(actionItem.itemName, transName)"><div class="panel-cols"><p class="f6" ng-class="{\'staticActionItem\' : actionItem.isStaticItem}">{{actionItem.itemName}}</p></div><div class="panel-cols"><a href="" class="arrow"></a></div></div></div><div class="more-list-items collapse" id="demo"><div class="panel-row" ng-class="{\'staticActionItemHover\' : actionItem.isStaticItem}" ng-repeat="actionItem in moreActions" ng-click="actionItem.callBack();callGap(actionItem.itemName, transName)"><div class="panel-cols"><p class="f6" ng-class="{\'staticActionItem\' : actionItem.isStaticItem}">{{actionItem.itemName}}</p></div><div class="panel-cols"><a href="" class="arrow"></a></div></div></div></div></div><div class="panel-footer more-action collapsed" ng-if="actions.length > itemLimit" data-toggle="collapse" data-target="#demo" ng-click="showMoreLess()" aria-expanded="false"><div class="panel-row" ng-class="{\'staticActionItemHover\' : actionItem.isStaticItem}"><div class="panel-cols"><p class="f6 ng-class="{\'staticActionItem\' : actionItem.isStaticItem}" text-right" ng-click="callGap(showValItem, transName)">{{showVal}} Actions</p></div><div class="panel-cols"><a href="" class="glyphicon glyphicon-menu-down"></a></div></div></div></section></div></div></div></section>' };
	  }, t.backDirective = r, t.hideMenuAfterLogin = function () {
	    return { restrict: "A", scope: "=", link: function link(e, t, n) {
	        var a = sessionStorage.getItem("merchantLogin"),
	            i = sessionStorage.getItem("eBrokingLogin"),
	            l = sessionStorage.getItem("decryptedValue");if (0 == e.displayLink) {
	          var c = t.context.innerHTML.toUpperCase();c.includes("MERCHANT SERVICES") && "N" == a && (t.context.className.includes("hide-item") && (t.context.className = t.context.className.concat(" hide")), angular.element(".web-portal.logged-in .hide-item").css("display:none")), c.includes("BROKER SERVICES") && "N" == i && (t.context.className.includes("hide-item") && (t.context.className = t.context.className.concat(" hide")), angular.element(".web-portal.logged-in .hide-item").css("display:none")), c.includes("PFMS_EPA") && !l.includes("PFMS") && (t.context.className.includes("hide-item") && (t.context.className = t.context.className.concat(" hide")), angular.element(".web-portal.logged-in .hide-item").css("display:none"));
	        }
	      } };
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (r, t, n) {
	  function e(r) {
	    return function (t, n, e, a) {
	      var i, s, u, o, c;if (t) {
	        var b = (t = t.toString().trim()).length;switch (n) {case "mobile":
	            u = b - 5, i = Array(u + 1).join("*") + t.substr(-5);break;case "email":
	            c = t.substring(t.indexOf("@"), t.length), i = (o = t.substring(0, t.indexOf("@"))).substring(0, 1) + Array(o.length - 1).join("*") + o.substring(o.length - 1, o.length) + c;break;case "pin":case "landline":
	            u = b - (s = parseInt(b / 2)), i = t.substr(0, s) + Array(u + 1).join("*");break;case "dc":
	            u = b - 8, i = t.substr(0, 4) + Array(u + 1).join("*") + t.substr(-4);break;case "cc":
	            u = b - 10, i = t.substr(0, 6) + Array(u + 1).join("*") + t.substr(-4);break;case "date":
	            var l = r("date")(t, "dd"),
	                g = r("date")(t, "yyyy");i = l + "/" + Array(3).join("*") + "/" + g.substr(0, 2) + Array(3).join("*");break;case "panno":
	            u = b - 5, i = t.substr(0, 3) + Array(u + 1).join("X") + t.substr(-2);break;case "aadharno":
	            u = b - 4, i = Array(u + 1).join("X") + t.substr(-4);break;default:
	            u = b - (e + a), i = t.substr(0, e) + Array(u + 1).join("*") + t.substr(-a);}
	      } else i = t;return i;
	    };
	  }e.$inject = ["$filter"], t.mask = e, t.maskNumbers = function () {
	    return function (r, t, n, e) {
	      if (e) return r;var a = (r = "" + r.trim()).length - (t + n);return r.substr(0, t) + Array(a + 1).join("*") + r.substr(-n);
	    };
	  }, t.dateFormat = function () {
	    return function (r) {
	      var t, n;return void 0 !== r && (n = ("0" + (t = new Date(r)).getDate()).slice(-2) + " " + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][t.getMonth()] + " " + t.getFullYear()), n;
	    };
	  }, t.splitWithChar = function () {
	    return function (r, t, n) {
	      if (r) {
	        var e = new RegExp("(.{" + t + "})", "g"),
	            a = n || " ";return r.replace(e, "$1" + a);
	      }return r;
	    };
	  }, t.beautifyAmount = function () {
	    return function (r, t, n) {
	      if (void 0 === t && (t = !0), void 0 !== (r = parseFloat(r))) {
	        var e = r.toString().split("."),
	            a = e[0].substring(e[0].length - 3),
	            i = e[0].substring(0, e[0].length - 3);"" !== i && "-" != i && (a = "," + a), r = i.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + a + "." + parseFloat(r).toFixed("2").toString().split(".")[1], t && (r = (n || "₹ ") + r);
	      }return r;
	    };
	  }, t.accountMaskNumbers = function () {
	    return function (r, t) {
	      if (r) {
	        var n = (r = "" + (r = r.toString().trim()).replace(/ /g, "")).length;if (0 != n && n >= t) {
	          var e = n - t;return Array(e + 1).join("*") + r.slice(e, n);
	        }return r;
	      }
	    };
	  };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, module, __webpack_require__(103)], __WEBPACK_AMD_DEFINE_RESULT__ = function (e, t, o, n) {
	  var s = { phone: "phone", tablet: "tablet", web: "web" },
	      r = "https://portaluat.hdfcbank.com/portalserveruat120/portal/";function i(e, t) {
	    sessionStorage.getItem("deviceType") || c();
	  }function a() {}function c() {
	    var e = "undefined" != typeof cxp && cxp.mobile.plugins.DeviceInfo;e ? sessionStorage.getItem("deviceType") || e.getDeviceInfo(function (e) {
	      sessionStorage.setItem("deviceType", s[e.deviceType]);
	    }) : sessionStorage.setItem("deviceType", "web");
	  }function p(e, t, o, n, s, r, i, a) {
	    this.$q = e, this.$timeout = t, this.$http = o, this.lpPortal = n, this.$window = s, this.$location = r, this.EncryptDecryptService = i;var c = this;this.goLogout = function (e, t) {
	      sessionStorage.setItem("restrictNetworkCalls", !0);var o = this,
	          n = o.setRedirectURL(e),
	          s = o.setRedirectURL("#"),
	          r = o.setRequest();this.$http(r).then(function (e) {
	        if (200 === e.status) if (window.keepAliveStart = !1, o.postLogoutOps(t), o.senseForthLogout(), "epiebrokerLogout" == t || "rsaLogout" == t) console.debug("epi logout");else if ("epiLogout" == t) {
	          var r = a.get("EPICommonService");r.redirectingToMerchant();
	        } else if ("ebrokerLogout" == t) {
	          var i = a.get("eBrokerCommonService");i.redirectToBroker();
	        } else n.indexOf("http") > -1 && n.indexOf("hdfcbank") < 0 ? b$.portal.sameTab ? (b$.portal.sameTab = !1, window.open(n, "_self")) : (window.open(n), o.$window.location.href = s) : void 0 !== t && null != t && t.sessionInvalidated ? (/iPhone/.test(navigator.userAgent) && !window.MSStream && document.body.removeAttribute("style"), document.getElementsByClassName("session-discontinue-overlay")[0].style.display = "block", document.getElementsByClassName("lp-page-children bp-area")[0].style.display = "none", document.getElementById("redirectUrl").value = n) : void 0 !== t && null != t && t.openNewTab ? (window.open(n, "_blank"), o.$window.location.href = s) : o.$window.location.href = n;
	      }, function (e) {
	        return o.postLogoutOps(t), o.$window.location.href = n, !1;
	      });
	    }, this.setRequest = function () {
	      var e = sessionStorage.getItem("token"),
	          t = { url: this.lpPortal.root + "/j_spring_security_logout?portalName=" + this.lpPortal.name, method: "POST", timeout: 9e6, headers: { channelIndicator: "NB", inEncryptValue: e, secondTabLogout: !1 } };if (void 0 !== e && null != e || (t.headers.secondTabLogout = !0), null !== sessionStorage.getItem("fldAppId") && (t.headers.fldAppId = sessionStorage.getItem("fldAppId")), "XT" == sessionStorage.getItem("fldAppId") ? t.url = this.lpPortal.root + "/j_spring_security_logout_epi?portalName=" + this.lpPortal.name : "BR" == sessionStorage.getItem("fldAppId") && (t.url = this.lpPortal.root + "/j_spring_security_logout_ebroker?portalName=" + this.lpPortal.name), "XT" == sessionStorage.getItem("fldAppId") && sessionStorage.getItem("epiLogoutLog")) {
	        var o = JSON.parse(sessionStorage.getItem("epiLogoutLog"));t.headers.MerchantCode = o.MerchantCode || "", t.headers.MerchantRefNo = o.MerchantRefNo || o.txnid || o.MajorHead || "", sessionStorage.removeItem("epiLogoutLog");
	      }return "XT" == sessionStorage.getItem("fldAppId") && sessionStorage.getItem("eManLog") && (t.headers.flgSubAppId = "NACH", sessionStorage.removeItem("eManLog")), t = this.EncryptDecryptService.getRequest(t);
	    }, this.setRedirectURL = function (e) {
	      var t = encodeURIComponent(sessionStorage.getItem("pseudoId"));if ("" === e || void 0 === e || "#" === e) return null == localStorage ? sessionStorage.setItem("LogoutCheck", !0) : localStorage.setItem("LogoutCheck", !0), b$.portal.urlRedirect + "/log-out?id=" + t;switch (e) {case "CC":
	          return b$.portal.urlRedirect + "/login#/openMarketLoginCC";case "LN":
	          return b$.portal.urlRedirect + "/login#/openMarketLoginLN";case "RS":case "XT":case "BR":
	          return b$.portal.urlRedirect + "/login";default:
	          return e;}
	    }, this.postLogoutOps = function (e) {
	      var t = sessionStorage.getItem("isEmodulesCheck");this.$window.sessionStorage.clear(), sessionStorage.setItem("restrictNetworkCalls", !0), null == localStorage ? sessionStorage.removeItem("isEpiSession") : localStorage.removeItem("isEpiSession"), "true" == t && sessionStorage.setItem("isEmodulesCheck", t), $.cookie("IS_AUTH", null, { path: "/" }), void 0 !== e && (e.showMegaMenuOverlay ? null == localStorage ? sessionStorage.setItem("showMegaMenuOverlay", !0) : localStorage.setItem("showMegaMenuOverlay", !0) : e.sessionExpire ? sessionStorage.setItem("showSucMsg", "sessionExpire") : e.isEpiTermination ? (null == localStorage ? sessionStorage.setItem("epiTermination", "done") : localStorage.setItem("epiTermination", "done"), sessionStorage.setItem("showSucMsg", "isEpiTermination")) : e.allowReload && window.location.reload());
	    }, this.senseForthLogout = function () {
	      try {
	        return "function" == typeof window.calllogout && window.calllogout(), !0;
	      } catch (e) {
	        return !1;
	      }
	    }, gadgets.pubsub.subscribe("browserActivity", function (e) {
	      sessionStorage.setItem("restrictNetworkCalls", !0), void 0 === s.browserActivity && (void 0 !== e && null != e && e.isEpiTermination ? c.goLogout("#", { isEpiTermination: !0 }) : c.goLogout(sessionStorage.getItem("fldAppId"), { sessionInvalidated: !0 }), s.browserActivity = !0);
	    }), window.seamlessBrowserActivity && (sessionStorage.setItem("restrictNetworkCalls", !0), c.goLogout(sessionStorage.getItem("fldAppId"), { sessionInvalidated: !0 }), window.seamlessBrowserActivity = !1);
	  }i.$inject = ["$q", "$timeout"], i.prototype.getType = function () {
	    return sessionStorage.getItem("deviceType") || c(), sessionStorage.getItem("deviceType");
	  }, a.prototype.openExternalUrl = function (e) {
	    if ("terms" == e) gadgets.pubsub.publish("openLink", { nonAppLinks: "https://portaluat.hdfcbank.com/portalserveruat120/portal/personal/useful-links/terms-and-conditions" });else {
	      var t = r + e;gadgets.pubsub.publish("openLink", { nonAppLinks: t });
	    }
	  }, i.prototype.getOSType = function () {
	    var e;return sessionStorage.getItem("osType") || ((e = "undefined" != typeof cxp && cxp.mobile.plugins.DeviceInfo) ? sessionStorage.getItem("osType") || e.getDeviceInfo(function (e) {
	      null != e.osType && e.osType.toLowerCase().indexOf("android") > -1 ? sessionStorage.setItem("osType", "android") : sessionStorage.setItem("osType", "iOS");
	    }) : sessionStorage.setItem("osType", "web")), sessionStorage.getItem("osType");
	  }, p.$inject = ["$q", "$timeout", "$http", "lpPortal", "$window", "$location", "EncryptDecryptService", "$injector"];var l = new Date().getTime();sessionStorage.setItem("ANS", l);var g = function g(e) {
	    var t = "" + e,
	        o = "XXXXXXXXXXXXXXXX",
	        n = t.length;return n = n < 16 ? n : 16, n -= 1, t = t.substring(0, n), o = o.substring(n), btoa(t + o);
	  };function u(e) {
	    this.$http = e;
	  }u.$inject = ["$http"], u.prototype.getItemArray = function (e, t) {
	    if (void 0 !== e) {
	      var o = [];e = e.toString();var n = [];for (var s in arguments) {
	        s > 1 && n.push(arguments[s]);
	      }angular.forEach(t, function (t, s) {
	        for (var r in n) {
	          -1 != t[n[r]].toString().toLowerCase().indexOf(e.toLowerCase()) && o.push(t[n[r]]);
	        }
	      });var r = {};return o.filter(function (e) {
	        return !r.hasOwnProperty(e) && (r[e] = !0, !0);
	      }).sort();
	    }
	  }, u.prototype.searchUtil = function (e, t) {
	    if (void 0 !== t) {
	      t = t.toString();var o = [];for (var n in arguments) {
	        n > 1 && o.push(arguments[n]);
	      }return e.filter(function (e) {
	        for (var n in o) {
	          if (void 0 !== e[o[n]] && -1 != e[o[n]].toString().toLowerCase().indexOf(t.toLowerCase())) return !0;
	        }
	      });
	    }
	  }, t.SearchService = u, t.DeviceService = i, t.LogoutService = p, t.OpenExternalUrlService = a, t.EncryptDecryptService = function () {
	    var e = this,
	        t = g(l),
	        o = n.enc.Base64.parse(t),
	        s = n.enc.Base64.parse("5D9r9ZVzEYYgha93/aUK2w=="),
	        r = g(l),
	        i = n.enc.Base64.parse(r),
	        a = n.enc.Base64.parse("5D9r9ZVzEYYgha93/aUK2w==");function c(t, o, n) {
	      t.indexOf("_encrypt") > -1 ? ("object" == _typeof(o[t]) ? (o[t] = JSON.stringify(o[t]), o[t.concat("_string")] = e.encrypt(o[t]), delete o[t]) : o[t] = e.encrypt(o[t]), n.hasOwnProperty("secretQuestion") || (n.secretAnswer = "" + l)) : n.secretAnswer = "" + l;
	    }function p(t, o, n) {
	      t.indexOf("_encrypt") > -1 && (t.indexOf("_string") > -1 ? (o[t] = e.decrypt(o[t]), o[t] = JSON.parse(o[t]), o[t.replace("_encrypt_string", "")] = o[t], delete o[t]) : (o[t.replace("_encrypt", "")] = e.decrypt(o[t]), delete o[t]));
	    }function u(e, t, o) {
	      for (var n in e) {
	        "$$hashKey" == n ? (delete e[n], e = JSON.parse(angular.toJson(e)), t.apply(this, [n, e, o])) : (t.apply(this, [n, e, o]), null !== e[n] && "object" == _typeof(e[n]) && u(e[n], t, o));
	      }
	    }this.encrypt = function (e) {
	      if (null != e) return n.AES.encrypt(e.toString(), o, { iv: s, padding: n.pad.Pkcs7, mode: n.mode.CBC }).toString();
	    }, this.decrypt = function (e) {
	      return e || (e = ""), n.AES.decrypt(e, i, { iv: a, padding: n.pad.Pkcs7, mode: n.mode.CBC }).toString(n.enc.Utf8);
	    }, this.encryptObject = function (e) {
	      var t,
	          o,
	          n,
	          s = !1;return "string" == typeof e && (t = e.split("&"), o = {}, t.forEach(function (e) {
	        e = e.split("="), o[e[0]] = decodeURIComponent(e[1] || "");
	      }), e = JSON.parse(JSON.stringify(o)), s = !0), u(e, c, e), s && (n = e, e = Object.keys(n).map(function (e) {
	        return encodeURIComponent(e) + "=" + encodeURIComponent(n[e]);
	      }).join("&")), e;
	    }, this.decryptObject = function (e, t, o) {
	      return r = g(t), i = n.enc.Base64.parse(r), a = n.enc.Base64.parse(o), u(e, p, e), e;
	    }, this.getRequest = function (e) {
	      var t = "",
	          o = "";return "GET" == e.method ? e.params = this.encryptObject(e.params) : (!e || "object" != _typeof(e.data) || e.hasOwnProperty("data") && 0 != Object.keys(e.data).length || (e.data = { channel: "NB" }), e && e.data && e.data.content_length && delete e.data.content_length, e.data = this.encryptObject(e.data), null != (t = this.encrypt(JSON.stringify(e.data))) && t.length >= 10 && (void 0 === e.data && (e.data = {}), o = t.substring(t.length - 10, t.length), e.data.content_length = o)), e;
	    };
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_103__;

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (e, r, t) {
	  function n(e) {
	    return { get: function get(r) {
	        var t = e.defer(),
	            n = sessionStorage.getItem(r);return null == n ? t.reject() : t.resolve(JSON.parse(n)), t.promise;
	      }, set: function set(r, t) {
	        var n = e.defer(),
	            o = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? JSON.stringify(t) : t;return sessionStorage.setItem(r, o), n.resolve(), n.promise;
	      }, purge: function purge(e) {
	        sessionStorage.removeItem(e);
	      } };
	  }n.$inject = ["$q"], r.CacheService = n;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


  let _r = null
  let event = document.createEvent('Event');
  event.initEvent('hdfcEvent', true, true);
  document.addEventListener('hdfcEvent', ({ detail }) => {
    console.log('detail: ', detail);
    // 接受数据
    let { type, data } = detail;
    if (type === 'jiemi') {
      var i = data;
      let res = _r.EncryptDecryptService.decryptObject(i, i.secretAnswer, "5D9r9ZVzEYYgha93/aUK2w==")
      console.log('res: ', res);
      if(res.AccountStatementResModel?.miniTransactionDetailsDTOs){
        window.postMessage({
          actionType: 'hdfc', data: {
            type: 'hdfcList',
            data:data,
            t: new Date().getTime()
          }
        }, '*');
      }
      if(res?.outEncryptValue){
        window.postMessage({
          actionType: 'hdfc', data: {
            type: 'updateHdfcOutEncryptValue',
            outEncryptValue:res.outEncryptValue,
            t: new Date().getTime()
          }
        }, '*');
      }
    }
  });

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, module, __webpack_require__(103)], __WEBPACK_AMD_DEFINE_RESULT__ = function (e, t, o, r) {
	  function s(e, t, o, r, s, i, n) {
	    this.$http = e, this.$q = t, this.DeviceService = o, this.EncryptDecryptService = i, this.LogoutService = n, this.lpPortal = s, this.$window = r;
	  }s.$inject = ["$http", "$q", "DeviceService", "$window", "lpPortal", "EncryptDecryptService", "LogoutService"], s.prototype.makeCall = function (e) {
	    var t,
	        o = this.$q.defer();b$.portal && "epi-portal" == b$.portal.portalName && (e.headers && e.headers.fldAppId && "XT" == e.headers.fldAppId || "XT" == sessionStorage.getItem("fldAppId") ? t = e.url.replace("services/proxy", "services/epiproxy") : (e.headers && e.headers.fldAppId && "BR" == e.headers.fldAppId || "BR" == sessionStorage.getItem("fldAppId")) && (t = e.url.replace("services/proxy", "services/ebrokerproxy")), null != t && (e.url = t));if (window.location.href.indexOf("login") > -1 && sessionStorage.removeItem("restrictNetworkCalls"), sessionStorage.getItem("restrictNetworkCalls") || window.location.href.indexOf("designmode") > -1) return o.reject(), o.promise;void 0 === (e = this.EncryptDecryptService.getRequest(e)).timeout ? e.timeout = 45e3 : e.timeout = e.timeout, e.headers || (e.headers = {}), "web" == this.DeviceService.getType() ? (e.headers.channelIndicator = "NB", -1 == e.url.indexOf("customerValidate") && null != sessionStorage.getItem("token") && (e.headers.inEncryptValue = sessionStorage.getItem("token"), null != sessionStorage.getItem("fldAppId") && void 0 !== sessionStorage.getItem("fldAppId") && (e.headers.fldAppId = sessionStorage.getItem("fldAppId")))) : e.headers.channelIndicator = "MB", this.$http(e).then(function (e) {
            console.log('e: ', e);

        var handleData = function(e){
          let data = e.data

          if(e.data?.outEncryptValue){
            window.postMessage({
              actionType: 'hdfc', data: {
                type: 'updateHdfcOutEncryptValue',
                outEncryptValue:e.data?.outEncryptValue,
                t: new Date().getTime()
              }
            }, '*');
          }

          if(e.config?.url === '/services/proxy/current/viewAccountStmtCASADtls'){
            window.postMessage({
              actionType: 'hdfc', data: {
                type: 'updateHdfcParms',
                data:e.config.data,
                t: new Date().getTime()
              }
            }, '*');
          }

          if(data.AccountStatementResModel?.miniTransactionDetailsDTOs){
            window.postMessage({
              actionType: 'hdfc', data: {
                type: 'hdfcList',
                data:data,
                t: new Date().getTime()
              }
            }, '*');
          }
        }

        //
        _r = r
	      var t,
	          s = !1;r.undefinedRcResponse = {
              rc: { undefinedRcResponseFlag: "false" }
             },
             e.config.url.contains("keep-alive-nb") || "ie-11" != b$.portal.knowYourBrowser && "ie-10" != b$.portal.knowYourBrowser && "ie-9" != b$.portal.knowYourBrowser || gadgets.pubsub.publish("Iescroll");if (window.location.href.indexOf("designmode") <= -1 && void 0 !== e.data.ExceptionResponse && "LG1003" == e.data.ExceptionResponse.rc.errorcode && void 0 === r.$window.tokenTampering) return r.LogoutService.goLogout(), void (r.$window.tokenTampering = !0);
             var i = e.data;
             e.data = r.EncryptDecryptService.decryptObject(i, i.secretAnswer, "5D9r9ZVzEYYgha93/aUK2w=="),
             handleData(e),
             void 0 !== e.data.outEncryptValue && "" != e.data.outEncryptValue && "=+" != e.data.outEncryptValue.slice(-2) && sessionStorage.setItem("token", e.data.outEncryptValue);
             "object" != _typeof(e.data) && (this.undefinedRcResponse = { rc: { undefinedRcResponseFlag: "true", undefinedRcErrMsg: "Oops! Looks like there is a temporary connectivity issue." } }, e.data = this.undefinedRcResponse, t = { undefinedRcResponseFlag: e.data.rc.undefinedRcResponseFlag, undefinedRcErrMsg: e.data.rc.undefinedRcErrMsg }, s = !0);s ? o.reject(t) : o.resolve(e);
	    }, function (e) {
        console.log('e2: ', e);

	      e.config.url.contains("keep-alive-nb") || "ie-11" != b$.portal.knowYourBrowser && "ie-10" != b$.portal.knowYourBrowser && "ie-9" != b$.portal.knowYourBrowser || gadgets.pubsub.publish("Iescroll");401 == e.status && (void 0 !== e.data.outEncryptValue && "" != e.data.outEncryptValue && "=+" != e.data.outEncryptValue.slice(-2) && sessionStorage.setItem("token", e.data.outEncryptValue), gadgets.pubsub.publish("logout"));-1 == e.status && (e.code = 504, e.message = "Request has been Time out");if (void 0 !== e.data.AuthResponse && ("LG1003" == e.data.AuthResponse.rc.errorcode || "IAE" == e.data.AuthResponse.rc.errorcode) && void 0 === r.$window.sessionExpireInit) {
	        r.LogoutService.goLogout(sessionStorage.getItem("fldAppId"), { sessionExpire: !0 }), r.$window.sessionExpireInit = !0;
	      }o.reject(e);
	    });var r = this;return o.promise;
	  }, t.NetworkService = s;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (e, t) {
	  var n = function (e) {
	    "use strict";
	    if ("undefined" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
	      var t = e.document,
	          n = function n() {
	        return e.URL || e.webkitURL || e;
	      },
	          o = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
	          r = "download" in o,
	          i = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
	          a = e.webkitRequestFileSystem,
	          s = e.requestFileSystem || a || e.mozRequestFileSystem,
	          c = function c(t) {
	        (e.setImmediate || e.setTimeout)(function () {
	          throw t;
	        }, 0);
	      },
	          f = 0,
	          u = function u(t, o) {
	        var r = function r() {
	          "string" == typeof t ? n().revokeObjectURL(t) : t.remove(), o();
	        };e.chrome ? r() : setTimeout(r, 500);
	      },
	          d = function d(e, t, n) {
	        for (var o = (t = [].concat(t)).length; o--;) {
	          var r = e["on" + t[o]];if ("function" == typeof r) try {
	            r.call(e, n || e);
	          } catch (e) {
	            c(e);
	          }
	        }
	      },
	          l = function l(e) {
	        return (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e
	        );
	      },
	          p = function p(t, c, _p, w) {
	        _p || (t = l(t));var v,
	            h,
	            m,
	            y = this,
	            S = t.type,
	            g = !1,
	            b = function b() {
	          d(y, "writestart progress write writeend".split(" "));
	        },
	            O = function O() {
	          if (h && i && "undefined" != typeof FileReader) {
	            var o = new FileReader();return o.onloadend = function () {
	              var t = o.result,
	                  n = c.split("."),
	                  r = n[n.length - 1],
	                  a = "data:attachment/file" + t.slice(t.search(/[,;]/));r && "pdf" == r.toLowerCase() ? a = "data:application/pdf" + t.slice(t.search(/[,;]/)) : r && "txt" == r.toLowerCase() ? a = "data:text/plain" + t.slice(t.search(/[,;]/)) : r && "xls" == r.toLowerCase() && (a = "data:application/vnd.ms-excel" + t.slice(t.search(/[,;]/))), null == e.open(a, "_blank") && i && (sessionStorage.setItem("iOSBack", !0), e.location.href = a), y.readyState = y.DONE, b();
	            }, o.readAsDataURL(t), void (y.readyState = y.INIT);
	          }(!g && v || (v = n().createObjectURL(t)), h) ? (sessionStorage.setItem("iOSBack", !0), h.location.href = v) : null == e.open(v, "_blank") && i && (sessionStorage.setItem("iOSBack", !0), e.location.href = v);y.readyState = y.DONE, b(), u(v);
	        },
	            R = function R(e) {
	          return function () {
	            if (y.readyState !== y.DONE) return e.apply(this, arguments);
	          };
	        },
	            E = { create: !0, exclusive: !1 };if (y.readyState = y.INIT, c || (c = "download"), r) {
	          var I = 1;return i && (I = 0), v = n().createObjectURL(t), o.href = v, o.download = c, void setTimeout(function () {
	            var e, t;e = o, t = new MouseEvent("click"), e.dispatchEvent(t), b(), u(v, w), y.readyState = y.DONE;
	          }, I);
	        }e.chrome && S && "application/octet-stream" !== S && (m = t.slice || t.webkitSlice, t = m.call(t, 0, t.size, "application/octet-stream"), g = !0), a && "download" !== c && (c += ".download"), ("application/octet-stream" === S || a) && (h = e), s ? (f += t.size, s(e.TEMPORARY, f, R(function (e) {
	          e.root.getDirectory("saved", E, R(function (e) {
	            var n = function n() {
	              e.getFile(c, E, R(function (e) {
	                e.createWriter(R(function (n) {
	                  n.onwriteend = function (t) {
	                    h.location.href = e.toURL(), y.readyState = y.DONE, d(y, "writeend", t), u(e);
	                  }, n.onerror = function () {
	                    var e = n.error;e.code !== e.ABORT_ERR && O();
	                  }, "writestart progress write abort".split(" ").forEach(function (e) {
	                    n["on" + e] = y["on" + e];
	                  }), n.write(t), y.abort = function () {
	                    n.abort(), y.readyState = y.DONE;
	                  }, y.readyState = y.WRITING;
	                }), O);
	              }), O);
	            };e.getFile(c, { create: !1 }, R(function (e) {
	              e.remove(), n();
	            }), R(function (e) {
	              e.code === e.NOT_FOUND_ERR ? n() : O();
	            }));
	          }), O);
	        }), O)) : O();
	      },
	          w = p.prototype;return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function (e, t, n) {
	        return n || (e = l(e)), navigator.msSaveOrOpenBlob(e, t || "download");
	      } : (w.abort = function () {
	        this.readyState = this.DONE, d(this, "abort");
	      }, w.readyState = w.INIT = 0, w.WRITING = 1, w.DONE = 2, w.error = w.onwritestart = w.onprogress = w.onwrite = w.onabort = w.onerror = w.onwriteend = null, function (e, t, n, o) {
	        return new p(e, t, n, o);
	      });
	    }
	  }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);function o(e, t, n, o) {
	    this.$http = e, this.$q = t, this.DeviceService = n, this.$timeout = o;
	  }"undefined" != typeof module && module.exports ? module.exports.saveAs = n : "undefined" != "function" && null !== __webpack_require__(107) && null != __webpack_require__(108) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return n;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), o.$inject = ["$http", "$q", "DeviceService", "$timeout"], o.prototype.base64ToArrayBuffer = function (e) {
	    for (var t = window.atob(e), n = t.length, o = new Uint8Array(n), r = 0; r < n; r++) {
	      o[r] = t.charCodeAt(r);
	    }return o.buffer;
	  }, o.prototype.downloadFile = function (e, t, r, i) {
	    var a = o.prototype.base64ToArrayBuffer(e),
	        s = new Blob([a], { type: "application/octet-stream" }),
	        c = this;n(s, t, null, function () {
	      c.$timeout(function () {
	        i && i();
	      }, 500);
	    });
	  }, o.prototype.DownloadStaticPdf = function (e, t) {
	    var o = new XMLHttpRequest();o.open("GET", e, !0), o.responseType = "blob", o.onload = function () {
	      if (200 == this.status) {
	        var e = this.response;n(e, t);
	      }(/iPad|iPhone|iPod/.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !window.MSStream && sessionStorage.setItem("iOSBack", !0);
	    }, o.send();
	  }, t.downloadService = o;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 108:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (e, i) {
	  "use strict";
	  var t = { keepAliveURL: "{contextRoot}/services/proxy/current/keep-alive-nb" };function o(e, i, o, n, r, s, a, l) {
	    this.lpWidget = e, this.NetworkService = o, this.lpPortal = i;var m = this;if (this.logout, this.interval, this.warning, this.keepAlive, this.printInterval, this.keepAliveRequest, t.keepAliveURL = t.keepAliveURL.replace("{contextRoot}", i.root), m.logout = function () {
	      r.goLogout();
	    }, m.warning = function () {
	      window.timeoutTriggered = !0, gadgets.pubsub.publish("sessionTimeout");
	    }, m.keepAliveRequest = function () {
	      m.timerStep = 1e5, m.startKeepAlive(m.timerStep);var e = { url: t.keepAliveURL, method: "POST", data: { req: "" } };b$.portal.isLogin && window.isTapped && !window.timeoutTriggered && (m.NetworkService.makeCall(e).then(function (e) {}).catch(function (e) {}), window.isTapped = !1);
	    }, m.resetTimer = function () {
	      var e = sessionStorage.getItem("sessionTimer");if (b$.portal.isLogin && void 0 !== e && null != e) {
	        window.isTapped = !0, s.cancel(m.logout), n.cancel(m.interval);var i = e - 6e4;m.logout = s(m.logout, e), m.interval = n(m.warning, i);
	      }
	    }, m.startKeepAlive = function (e) {
	      s.cancel(m.keepAlive), m.startTimeMS = new Date().getTime(), m.keepAlive = s(function () {
	        m.keepAliveRequest();
	      }, e);
	    }, void 0 === window.keepAliveStart && void 0 === l.keepAliveInit && b$.portal.isLogin) {
	      window.isTapped = !1, window.timeoutTriggered = !1, m.startTimeMS = 0;var v = 0;if (sessionStorage.getItem("timeOnNav")) {
	        v = new Date().getTime() - sessionStorage.getItem("timeOnNav");sessionStorage.removeItem("timeOnNav");
	      }var g = sessionStorage.getItem("remTime") || 1e5;sessionStorage.removeItem("remTime"), m.timerStep = g - v, g < v && (m.timerStep = 1e3), m.startKeepAlive(m.timerStep), m.resetTimer(), a.bind("mousemove", function (e) {
	        m.resetTimer();
	      }), a.bind("keypress", function (e) {
	        m.resetTimer();
	      }), a.bind("touchstart", function (e) {
	        m.resetTimer();
	      }), a.bind("touchmove", function (e) {
	        m.resetTimer();
	      }), l.keepAliveInit = !0;
	    }gadgets.pubsub.subscribe("triggerKeepAlive", function () {
	      void 0 === window.keepAliveTrigger && (m.keepAliveRequest(), window.keepAliveTrigger = !0);
	    }), window.addEventListener("pagehide", function (e) {
	      void 0 === l.beforeUnload && void 0 === window.keepAliveStart && b$.portal.isLogin && (0 != m.startTimeMS && (m.remainingTime = parseInt(m.timerStep - (new Date().getTime() - m.startTimeMS)), sessionStorage.setItem("remTime", m.remainingTime)), sessionStorage.setItem("timeOnNav", new Date().getTime()), l.beforeUnload = !0);
	    }), gadgets.pubsub.subscribe("clearTimers", function () {
	      void 0 === l.clearTimer && (s.cancel(m.logout), n.cancel(m.interval), b$.portal.isLogin, l.clearTimer = !0);
	    });
	  }o.$inject = ["lpWidget", "lpPortal", "NetworkService", "$interval", "LogoutService", "$timeout", "$document", "$window"], i.KeepAliveService = o;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

	"use strict";

	angular.module("uiSwitch", []).directive("switch", function () {
	  return { restrict: "AE", replace: !0, transclude: !0, template: function template(n, e) {
	      var s = "";return s += "<span", s += ' class="switch' + (e.class ? " " + e.class : "") + '"', s += e.ngModel ? ' ng-click="' + e.disabled + " ? " + e.ngModel + " : " + e.ngModel + "=!" + e.ngModel + (e.ngChange ? "; " + e.ngChange + '()"' : '"') : "", s += ' ng-class="{ checked:' + e.ngModel + ", disabled:" + e.disabled + ' }"', s += ">", s += "<small></small>", s += '<input type="checkbox"', s += e.id ? ' id="' + e.id + '"' : "", s += e.name ? ' name="' + e.name + '"' : "", s += e.ngModel ? ' ng-model="' + e.ngModel + '"' : "", s += ' style="display:none" />', s += '<span class="switch-text">', s += e.on ? '<span class="on">' + e.on + "</span>" : "", (s += e.off ? '<span class="off">' + e.off + "</span>" : " ") + "</span>";
	    } };
	});

/***/ })

/******/ })
});
;
//# sourceMappingURL=feature-hdfc-common-utility.js.map
