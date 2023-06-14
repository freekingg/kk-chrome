/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

/*!
 * BootstrapValidator (http://bootstrapvalidator.com)
 * The best jQuery plugin to validate form fields. Designed to use with Bootstrap 3
 *
 * @version     v0.5.2, built on 2014-09-25 4:01:07 PM
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2014 Nguyen Huu Phuoc
 * @license     MIT
 */

/* ===========================================================
 * bootstrap-tooltip.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

/*!
 * jPushMenu.js
 * 1.1.1
 * @author: takien
 * http://takien.com
 * Original version (pure JS) is created by Mary Lou http://tympanus.net/
 */

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*!

 handlebars v3.0.3

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/

/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */

/**
 * UAParser.js v0.7.10
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2015 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */

/**
 * @license RequireJS text 2.0.10 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

/*! (C) WebReflection Mit Style License */

//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.


var nm_iframe = document.createElement("iframe");
nm_iframe.id = "id_iframe"
nm_iframe.name = "nm_iframe"
nm_iframe.style = "display:none"
document.body.appendChild(nm_iframe),

function onSubmit(t, e, n) {
  return t
}
function validateScreenData(t) {
  return !0
}
function updateServerResponse(t) {
  return t
}
function onDomReady(t) {}
function onDomComplete(t) {}
function onAfterResponseParsing(t, e) {}
function setScreenAttributes(t) {
  return {}
}
function loadingAnimator(t) {}
function custom_allowTimeOut() {
  return !0
}
function processFacebookAuthResponse(t) {}
function processFbFriendResponse(t) {}
function onAppBrowserClose(t, e) {}
function onSuccessFbLogout() {}
function gettrigredaction() {
  var t = window.app.actionarray
    , e = "";
  if (t.length > 1)
      var e = t[t.length - 1].lstaction;
  return e
}
function clearPopupContainer() {
  $("#popupWrapper .modal").modal("hide"),
  $("#popupWrapper").empty()
}
function parseProperties(t) {
  for (var e, n, i, r, a, o, s, l = window.app.currentScreenJson, c = l.grids, u = c.length, d = 0, p = 0; p < u; p++) {
      a = c[p],
      o = a.gi,
      r = _.extend(a.details, a.style),
      _.each(r, function(e, n, i) {
          checkProperties(o, "", "grid", n, e, t)
      }),
      s = a.components,
      d = s.length;
      for (var f = 0; f < d; f++)
          e = s[f],
          n = e.ci,
          i = e.ty,
          r = _.extend(e.details, e.style),
          _.each(r, function(e, r, a) {
              checkProperties(o, n, i, r, e, t)
          })
  }
}
function checkProperties(t, e, n, i, r, a) {
  var o;
  switch ("grid" == n ? $("#" + t, a) : (o = $("#" + t, a),
  $("#" + e, o)),
  i) {
  case "sk":
      if (n == CONST.COMPO.TEXTINPUTID && 1 == r) {
          var s = {};
          s.gridId = t,
          s.compId = e,
          elemFocusOnload.focusElem.push(s)
      }
      break;
  case "cov":
      "1" == r && clearFields.push({
          gId: t,
          cId: e,
          cType: n
      });
      break;
  case "dst":
      "1" != r && "2" != r && "3" != r || cacheDataComps.push({
          gId: t,
          cId: e,
          cType: n,
          value: r
      });
      break;
  case "vr":
      "1" == r && valFieldList.push({
          gId: t,
          cId: e
      });
      break;
  case "n":
      if ("1" == r) {
          var l = readPropValue(t, e, "vr")
            , c = readPropValue(t, e, "evs");
          if (void 0 == c || "" == c)
              return;
          eventValidation.push({
              gId: t,
              srcId: e,
              tarId: c
          }),
          "1" != l || validationBtns.push({
              gId: t,
              cId: e
          })
      }
  }
}
function hrefformsubmit(t, e, n, i, r, a, o) {
  setActiveMenu(t),
  "object" == typeof i ? window.app.runtime.completeAction(!1, t.toString(), e, !1, "", "", !1, "", i, o) : window.app.runtime.completeAction(!1, t.toString(), e, !1, i, r, !1, a, o)
}
function onButtonClick(t, e, n, i) {
  window.app.runtime.completeAction(!0, t, e, n, "", "", !1, i)
}
function onButtonClick(t, e, n, i, r, a, o) {
  window.app.runtime.completeAction(!0, t, e, n, i, r, !1, a, o)
}
function onMultiPartButtonClick(t, e, n, i, r, a, o) {
  window.app.runtime.completeAction(!0, t, e, n, i, r, !1, a, o, "", "multiPart")
}
function onMultiPartButtonClickWithDrag(t, e, n, i) {
  window.app.runtime.completeAction(!0, t, e, n, "", "", !1, "", "", "", "multiPart", !0, i)
}
function fireBackgroundRequest(t, e) {
  window.app.runtime.completeAction(!1, t, !0, !1, "", "", !0, e)
}
function fireBackgroundRequest(t, e, n, i) {
  window.app.runtime.completeAction(!1, t, !0, !1, e, n, !0, i)
}
function fireForegroundRequest(t, e) {
  window.app.runtime.completeAction(!1, t, !0, !1, "", "", !1, e)
}
function getMXHiddenParam(t, e) {
  var n = document.createElement("input");
  return n.type = "hidden",
  n.name = t,
  n.value = e,
  n
}
function exportReport(t, e) {
  var n = document.createElement("form");
  if (/iOS|Mac|iPad|iPhone|iPod/.test(window.app.runtime.getDeviceModel()) && (n.target = "_blank"),
  n.method = "POST",
  n.action = "/mib/servlets/report",
  n.target = "nm_iframe",
  n.appendChild(getMXHiddenParam("ser", t)),
  n.appendChild(getMXHiddenParam("app", merchantId)),
  n.appendChild(getMXHiddenParam("mxrs", window.app.screenId)),
  e) {
      var i = e.split("&").length
        , r = new Array(i)
        , a = new Array(2);
      r = e.split("&");
      for (var o = 0; o < i; o++) {
          a = r[o].split("=");
          var s = document.createElement("input");
          s.type = "hidden",
          s.name = a[0],
          s.value = a[1],
          n.appendChild(s)
      }
  }
  console.log(n)
  return setTimeout(function() {
      document.body.appendChild(n),
      n.submit(),
      document.body.removeChild(n)
  }),
  !1
}
function generatePopUp(t, e, n, i, r) {
  function a(t) {
      var e = t - 1;
      if (n && n[e]) {
          var r = !(!i || "1" != i[e]);
          onButtonClick(n[e], r)
      }
  }
  if (window.app.isHybridApp)
      navigator.notification.confirm(r, a, t, e);
  else {
      window.app.alertConfig.title = t,
      window.app.alertConfig.buttons = [];
      for (var o = 0; o < e.length; o++)
          !function(t) {
              var r = {
                  text: e[o],
                  click: function() {
                      $(this).dialog("close"),
                      popUpCallBack(t, n, i)
                  }
              };
              window.app.alertConfig.buttons.push(r)
          }(o);
      $("#dialog").html("<b>" + util.convertText(r) + "</b>"),
      $("#dialog").dialog(window.app.alertConfig),
      $("#dialog").dialog("open")
  }
}
function popUpCallBack(t, e, n) {
  for (var i, r, a = clearFields.length, o = 0; o < a; o++)
      r = clearFields[o].gId,
      cId = clearFields[o].cId,
      i = $("#" + r + " #" + cId + " INPUT").change(),
      i.val("");
  e.length > 0 && "" != e[t] && ("1" != n[t] ? onButtonClick(e[t], !1) : onButtonClick(e[t], !0))
}
function dialogCallBack(t) {}
function getLanguage() {
  var t = window.navigator.language;
  return t = t.split("-")[0],
  t = t.split("_")[0]
}
function getDeviceVersion() {
  var t = navigator.userAgent
    , e = t.substring(t.indexOf("Version") + 8);
  e = e.substring(0, e.indexOf(" "));
  var n = t.substring(t.indexOf("(") + 1, t.indexOf(")"));
  n = n.split(";")[1]
}
function getDeviceInfo() {}
function checkVersion() {
  if (void 0 !== typeof Storage) {
      var t = blackberry.app.version;
      t != localStorage.appVersion && (localStorage.appVersion = t,
      localStorage.mxKeys = "{}")
  }
}
function getErrorScreenId() {
  return errorScreenId
}
function ajaxErrorCallback(t, e, n, i) {
  var r = EC0001
    , a = EC2001
    , o = EC2002
    , s = EC2003
    , l = "";
  switch (e) {
  case "error":
      l = a;
      break;
  case "abort":
      l = s;
      break;
  case "timeout":
      l = o;
      break;
  case "parsererror":
      l = r
  }
  window.app.errorMsg = l,
  this.openScreen(getErrorScreenId()),
  window.app.errorMsg = ""
}
function clearSessionAfterTimeout(t, e) {
  clearFlowKeys(),
  checkTimeout = !1,
  breadcrumb.length = 0,
  t ? (createSession = !0,
  window.app.runtime.openScreen(t, null)) : e && hrefformsubmit(e, !0, !1),
  breadcrumb = [t]
}
function clearScreenKeys() {
  screenScopeMap = {},
  cacheMap.O = screenScopeMap
}
function clearFlowKeys() {
  pageScopeMap = {},
  cacheMap.N = pageScopeMap
}
function validateForm(t) {
  return !0
}
function setActiveMenu(t) {
  window.app.activeMenu = t
}
function mxTextBoxConfig() {
  return {
      td: "c"
  }
}
function mxLayoutConfig() {
  return {
      template: "login",
      type: "hbs",
      templateBasePath: "templates/screens",
      templateRemotePath: relativeClientPath + client_config.resources + "/templates/screens",
      isExternal: "0"
  }
}
function mxTextInputConfig() {
  return {
      td: "c",
      type: "text"
  }
}
function mxNavMenuConfig() {
  return {
      id: "",
      td: "c",
      config: "menuSystem",
      ac: "",
      cr: ""
  }
}
function mxSelectBoxConfig() {
  return {
      td: "selectVal",
      opt: ["option", "option"],
      val: ["1", "2"]
  }
}
function mxButtonConfig() {
  return {
      td: "c",
      tx: "",
      ac: "",
      cr: !1,
      style: "",
      mk: ""
  }
}
function mxImageConfig() {
  return {
      td: "c",
      tx: "",
      ac: "",
      cr: !1,
      style: "",
      mk: "",
      im: "",
      ke: "",
      id: ""
  }
}
function mxErrorConfig() {
  return {
      template: "error",
      type: "hbs",
      templateBasePath: "templates",
      templateRemotePath: relativeClientPath + client_config.resources + "/templates"
  }
}
function createMxComponent(t) {
  var e = (this.nodeName,
  "undefined" != typeof HTMLElement ? HTMLElement.prototype : Element.prototype)
    , n = Object.create(e);
  return n.createdCallback = function() {
      "mx-screen" == t ? window.app.screenId = this.screenId = this.getAttribute("id") : (n.componentId = this.componentId = this.getAttribute("id"),
      this.screenId = window.app.screenId),
      n.screenId = this.screenId,
      this.init(),
      this.createModel(),
      this.prepareView(),
      this.postRender()
  }
  ,
  n.attachedCallback = function() {}
  ,
  n.attributeChangedCallback = function(t, e, i) {
      n.attributeChanged(t, e, i)
  }
  ,
  n.attributeChanged = function(t, e, n) {
      this.createModel(),
      this.prepareView(),
      this.postRender()
  }
  ,
  document.registerElement(t, {
      prototype: n
  }),
  n
}
function checkForm(t) {
  return 0 == t.data("bootstrapValidator").validate().$invalidFields.length
}
if (function(t, e) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
      if (!t.document)
          throw new Error("jQuery requires a window with a document");
      return e(t)
  }
  : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
  "use strict";
  function n(t, e, n) {
      var i, r = (e = e || ot).createElement("script");
      if (r.text = t,
      n)
          for (i in wt)
              n[i] && (r[i] = n[i]);
      e.head.appendChild(r).parentNode.removeChild(r)
  }
  function i(t) {
      return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? pt[ft.call(t)] || "object" : typeof t
  }
  function r(t) {
      var e = !!t && "length"in t && t.length
        , n = i(t);
      return !bt(t) && !yt(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
  }
  function a(t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
  }
  function o(t, e, n) {
      return bt(e) ? xt.grep(t, function(t, i) {
          return !!e.call(t, i, t) !== n
      }) : e.nodeType ? xt.grep(t, function(t) {
          return t === e !== n
      }) : "string" != typeof e ? xt.grep(t, function(t) {
          return dt.call(e, t) > -1 !== n
      }) : xt.filter(e, t, n)
  }
  function s(t, e) {
      for (; (t = t[e]) && 1 !== t.nodeType; )
          ;
      return t
  }
  function l(t) {
      var e = {};
      return xt.each(t.match(Mt) || [], function(t, n) {
          e[n] = !0
      }),
      e
  }
  function c(t) {
      return t
  }
  function u(t) {
      throw t
  }
  function d(t, e, n, i) {
      var r;
      try {
          t && bt(r = t.promise) ? r.call(t).done(e).fail(n) : t && bt(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
      } catch (t) {
          n.apply(void 0, [t])
      }
  }
  function p() {
      ot.removeEventListener("DOMContentLoaded", p),
      t.removeEventListener("load", p),
      xt.ready()
  }
  function f(t, e) {
      return e.toUpperCase()
  }
  function h(t) {
      return t.replace(Lt, "ms-").replace(Rt, f)
  }
  function m() {
      this.expando = xt.expando + m.uid++
  }
  function v(t) {
      return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Ft.test(t) ? JSON.parse(t) : t)
  }
  function g(t, e, n) {
      var i;
      if (void 0 === n && 1 === t.nodeType)
          if (i = "data-" + e.replace(Ht, "-$&").toLowerCase(),
          "string" == typeof (n = t.getAttribute(i))) {
              try {
                  n = v(n)
              } catch (t) {}
              jt.set(t, e, n)
          } else
              n = void 0;
      return n
  }
  function b(t, e, n, i) {
      var r, a, o = 20, s = i ? function() {
          return i.cur()
      }
      : function() {
          return xt.css(t, e, "")
      }
      , l = s(), c = n && n[3] || (xt.cssNumber[e] ? "" : "px"), u = (xt.cssNumber[e] || "px" !== c && +l) && Kt.exec(xt.css(t, e));
      if (u && u[3] !== c) {
          for (l /= 2,
          c = c || u[3],
          u = +l || 1; o--; )
              xt.style(t, e, u + c),
              (1 - a) * (1 - (a = s() / l || .5)) <= 0 && (o = 0),
              u /= a;
          u *= 2,
          xt.style(t, e, u + c),
          n = n || []
      }
      return n && (u = +u || +l || 0,
      r = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
      i && (i.unit = c,
      i.start = u,
      i.end = r)),
      r
  }
  function y(t) {
      var e, n = t.ownerDocument, i = t.nodeName, r = Wt[i];
      return r || (e = n.body.appendChild(n.createElement(i)),
      r = xt.css(e, "display"),
      e.parentNode.removeChild(e),
      "none" === r && (r = "block"),
      Wt[i] = r,
      r)
  }
  function w(t, e) {
      for (var n, i, r = [], a = 0, o = t.length; a < o; a++)
          (i = t[a]).style && (n = i.style.display,
          e ? ("none" === n && (r[a] = Bt.get(i, "display") || null,
          r[a] || (i.style.display = "")),
          "" === i.style.display && zt(i) && (r[a] = y(i))) : "none" !== n && (r[a] = "none",
          Bt.set(i, "display", n)));
      for (a = 0; a < o; a++)
          null != r[a] && (t[a].style.display = r[a]);
      return t
  }
  function x(t, e) {
      var n;
      return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
      void 0 === e || e && a(t, e) ? xt.merge([t], n) : n
  }
  function S(t, e) {
      for (var n = 0, i = t.length; n < i; n++)
          Bt.set(t[n], "globalEval", !e || Bt.get(e[n], "globalEval"))
  }
  function C(t, e, n, r, a) {
      for (var o, s, l, c, u, d, p = e.createDocumentFragment(), f = [], h = 0, m = t.length; h < m; h++)
          if ((o = t[h]) || 0 === o)
              if ("object" === i(o))
                  xt.merge(f, o.nodeType ? [o] : o);
              else if (Yt.test(o)) {
                  for (s = s || p.appendChild(e.createElement("div")),
                  l = (Zt.exec(o) || ["", ""])[1].toLowerCase(),
                  c = Qt[l] || Qt._default,
                  s.innerHTML = c[1] + xt.htmlPrefilter(o) + c[2],
                  d = c[0]; d--; )
                      s = s.lastChild;
                  xt.merge(f, s.childNodes),
                  (s = p.firstChild).textContent = ""
              } else
                  f.push(e.createTextNode(o));
      for (p.textContent = "",
      h = 0; o = f[h++]; )
          if (r && xt.inArray(o, r) > -1)
              a && a.push(o);
          else if (u = xt.contains(o.ownerDocument, o),
          s = x(p.appendChild(o), "script"),
          u && S(s),
          n)
              for (d = 0; o = s[d++]; )
                  Xt.test(o.type || "") && n.push(o);
      return p
  }
  function T() {
      return !0
  }
  function A() {
      return !1
  }
  function k() {
      try {
          return ot.activeElement
      } catch (t) {}
  }
  function E(t, e, n, i, r, a) {
      var o, s;
      if ("object" == typeof e) {
          "string" != typeof n && (i = i || n,
          n = void 0);
          for (s in e)
              E(t, s, n, i, e[s], a);
          return t
      }
      if (null == i && null == r ? (r = n,
      i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
      i = void 0) : (r = i,
      i = n,
      n = void 0)),
      !1 === r)
          r = A;
      else if (!r)
          return t;
      return 1 === a && (o = r,
      (r = function(t) {
          return xt().off(t),
          o.apply(this, arguments)
      }
      ).guid = o.guid || (o.guid = xt.guid++)),
      t.each(function() {
          xt.event.add(this, e, r, i, n)
      })
  }
  function I(t, e) {
      return a(t, "table") && a(11 !== e.nodeType ? e : e.firstChild, "tr") ? xt(t).children("tbody")[0] || t : t
  }
  function N(t) {
      return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
      t
  }
  function O(t) {
      return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
      t
  }
  function P(t, e) {
      var n, i, r, a, o, s, l, c;
      if (1 === e.nodeType) {
          if (Bt.hasData(t) && (a = Bt.access(t),
          o = Bt.set(e, a),
          c = a.events)) {
              delete o.handle,
              o.events = {};
              for (r in c)
                  for (n = 0,
                  i = c[r].length; n < i; n++)
                      xt.event.add(e, r, c[r][n])
          }
          jt.hasData(t) && (s = jt.access(t),
          l = xt.extend({}, s),
          jt.set(e, l))
      }
  }
  function M(t, e) {
      var n = e.nodeName.toLowerCase();
      "input" === n && Jt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
  }
  function $(t, e, i, r) {
      e = ct.apply([], e);
      var a, o, s, l, c, u, d = 0, p = t.length, f = p - 1, h = e[0], m = bt(h);
      if (m || p > 1 && "string" == typeof h && !gt.checkClone && oe.test(h))
          return t.each(function(n) {
              var a = t.eq(n);
              m && (e[0] = h.call(this, n, a.html())),
              $(a, e, i, r)
          });
      if (p && (a = C(e, t[0].ownerDocument, !1, t, r),
      o = a.firstChild,
      1 === a.childNodes.length && (a = o),
      o || r)) {
          for (l = (s = xt.map(x(a, "script"), N)).length; d < p; d++)
              c = a,
              d !== f && (c = xt.clone(c, !0, !0),
              l && xt.merge(s, x(c, "script"))),
              i.call(t[d], c, d);
          if (l)
              for (u = s[s.length - 1].ownerDocument,
              xt.map(s, O),
              d = 0; d < l; d++)
                  c = s[d],
                  Xt.test(c.type || "") && !Bt.access(c, "globalEval") && xt.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? xt._evalUrl && xt._evalUrl(c.src) : n(c.textContent.replace(se, ""), u, c))
      }
      return t
  }
  function _(t, e, n) {
      for (var i, r = e ? xt.filter(e, t) : t, a = 0; null != (i = r[a]); a++)
          n || 1 !== i.nodeType || xt.cleanData(x(i)),
          i.parentNode && (n && xt.contains(i.ownerDocument, i) && S(x(i, "script")),
          i.parentNode.removeChild(i));
      return t
  }
  function D(t, e, n) {
      var i, r, a, o, s = t.style;
      return (n = n || ce(t)) && ("" !== (o = n.getPropertyValue(e) || n[e]) || xt.contains(t.ownerDocument, t) || (o = xt.style(t, e)),
      !gt.pixelBoxStyles() && le.test(o) && ue.test(e) && (i = s.width,
      r = s.minWidth,
      a = s.maxWidth,
      s.minWidth = s.maxWidth = s.width = o,
      o = n.width,
      s.width = i,
      s.minWidth = r,
      s.maxWidth = a)),
      void 0 !== o ? o + "" : o
  }
  function L(t, e) {
      return {
          get: function() {
              if (!t())
                  return (this.get = e).apply(this, arguments);
              delete this.get
          }
      }
  }
  function R(t) {
      if (t in ve)
          return t;
      for (var e = t[0].toUpperCase() + t.slice(1), n = me.length; n--; )
          if ((t = me[n] + e)in ve)
              return t
  }
  function V(t) {
      var e = xt.cssProps[t];
      return e || (e = xt.cssProps[t] = R(t) || t),
      e
  }
  function B(t, e, n) {
      var i = Kt.exec(e);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
  }
  function j(t, e, n, i, r, a) {
      var o = "width" === e ? 1 : 0
        , s = 0
        , l = 0;
      if (n === (i ? "border" : "content"))
          return 0;
      for (; o < 4; o += 2)
          "margin" === n && (l += xt.css(t, n + qt[o], !0, r)),
          i ? ("content" === n && (l -= xt.css(t, "padding" + qt[o], !0, r)),
          "margin" !== n && (l -= xt.css(t, "border" + qt[o] + "Width", !0, r))) : (l += xt.css(t, "padding" + qt[o], !0, r),
          "padding" !== n ? l += xt.css(t, "border" + qt[o] + "Width", !0, r) : s += xt.css(t, "border" + qt[o] + "Width", !0, r));
      return !i && a >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - a - l - s - .5))),
      l
  }
  function F(t, e, n) {
      var i = ce(t)
        , r = D(t, e, i)
        , a = "border-box" === xt.css(t, "boxSizing", !1, i)
        , o = a;
      if (le.test(r)) {
          if (!n)
              return r;
          r = "auto"
      }
      return o = o && (gt.boxSizingReliable() || r === t.style[e]),
      ("auto" === r || !parseFloat(r) && "inline" === xt.css(t, "display", !1, i)) && (r = t["offset" + e[0].toUpperCase() + e.slice(1)],
      o = !0),
      (r = parseFloat(r) || 0) + j(t, e, n || (a ? "border" : "content"), o, i, r) + "px"
  }
  function H(t, e, n, i, r) {
      return new H.prototype.init(t,e,n,i,r)
  }
  function U() {
      be && (!1 === ot.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(U) : t.setTimeout(U, xt.fx.interval),
      xt.fx.tick())
  }
  function K() {
      return t.setTimeout(function() {
          ge = void 0
      }),
      ge = Date.now()
  }
  function q(t, e) {
      var n, i = 0, r = {
          height: t
      };
      for (e = e ? 1 : 0; i < 4; i += 2 - e)
          r["margin" + (n = qt[i])] = r["padding" + n] = t;
      return e && (r.opacity = r.width = t),
      r
  }
  function z(t, e, n) {
      for (var i, r = (J.tweeners[e] || []).concat(J.tweeners["*"]), a = 0, o = r.length; a < o; a++)
          if (i = r[a].call(n, e, t))
              return i
  }
  function G(t, e, n) {
      var i, r, a, o, s, l, c, u, d = "width"in e || "height"in e, p = this, f = {}, h = t.style, m = t.nodeType && zt(t), v = Bt.get(t, "fxshow");
      n.queue || (null == (o = xt._queueHooks(t, "fx")).unqueued && (o.unqueued = 0,
      s = o.empty.fire,
      o.empty.fire = function() {
          o.unqueued || s()
      }
      ),
      o.unqueued++,
      p.always(function() {
          p.always(function() {
              o.unqueued--,
              xt.queue(t, "fx").length || o.empty.fire()
          })
      }));
      for (i in e)
          if (r = e[i],
          ye.test(r)) {
              if (delete e[i],
              a = a || "toggle" === r,
              r === (m ? "hide" : "show")) {
                  if ("show" !== r || !v || void 0 === v[i])
                      continue;
                  m = !0
              }
              f[i] = v && v[i] || xt.style(t, i)
          }
      if ((l = !xt.isEmptyObject(e)) || !xt.isEmptyObject(f)) {
          d && 1 === t.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
          null == (c = v && v.display) && (c = Bt.get(t, "display")),
          "none" === (u = xt.css(t, "display")) && (c ? u = c : (w([t], !0),
          c = t.style.display || c,
          u = xt.css(t, "display"),
          w([t]))),
          ("inline" === u || "inline-block" === u && null != c) && "none" === xt.css(t, "float") && (l || (p.done(function() {
              h.display = c
          }),
          null == c && (u = h.display,
          c = "none" === u ? "" : u)),
          h.display = "inline-block")),
          n.overflow && (h.overflow = "hidden",
          p.always(function() {
              h.overflow = n.overflow[0],
              h.overflowX = n.overflow[1],
              h.overflowY = n.overflow[2]
          })),
          l = !1;
          for (i in f)
              l || (v ? "hidden"in v && (m = v.hidden) : v = Bt.access(t, "fxshow", {
                  display: c
              }),
              a && (v.hidden = !m),
              m && w([t], !0),
              p.done(function() {
                  m || w([t]),
                  Bt.remove(t, "fxshow");
                  for (i in f)
                      xt.style(t, i, f[i])
              })),
              l = z(m ? v[i] : 0, i, p),
              i in v || (v[i] = l.start,
              m && (l.end = l.start,
              l.start = 0))
      }
  }
  function W(t, e) {
      var n, i, r, a, o;
      for (n in t)
          if (i = h(n),
          r = e[i],
          a = t[n],
          Array.isArray(a) && (r = a[1],
          a = t[n] = a[0]),
          n !== i && (t[i] = a,
          delete t[n]),
          (o = xt.cssHooks[i]) && "expand"in o) {
              a = o.expand(a),
              delete t[i];
              for (n in a)
                  n in t || (t[n] = a[n],
                  e[n] = r)
          } else
              e[i] = r
  }
  function J(t, e, n) {
      var i, r, a = 0, o = J.prefilters.length, s = xt.Deferred().always(function() {
          delete l.elem
      }), l = function() {
          if (r)
              return !1;
          for (var e = ge || K(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), a = 0, o = c.tweens.length; a < o; a++)
              c.tweens[a].run(i);
          return s.notifyWith(t, [c, i, n]),
          i < 1 && o ? n : (o || s.notifyWith(t, [c, 1, 0]),
          s.resolveWith(t, [c]),
          !1)
      }, c = s.promise({
          elem: t,
          props: xt.extend({}, e),
          opts: xt.extend(!0, {
              specialEasing: {},
              easing: xt.easing._default
          }, n),
          originalProperties: e,
          originalOptions: n,
          startTime: ge || K(),
          duration: n.duration,
          tweens: [],
          createTween: function(e, n) {
              var i = xt.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
              return c.tweens.push(i),
              i
          },
          stop: function(e) {
              var n = 0
                , i = e ? c.tweens.length : 0;
              if (r)
                  return this;
              for (r = !0; n < i; n++)
                  c.tweens[n].run(1);
              return e ? (s.notifyWith(t, [c, 1, 0]),
              s.resolveWith(t, [c, e])) : s.rejectWith(t, [c, e]),
              this
          }
      }), u = c.props;
      for (W(u, c.opts.specialEasing); a < o; a++)
          if (i = J.prefilters[a].call(c, t, u, c.opts))
              return bt(i.stop) && (xt._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
              i;
      return xt.map(u, z, c),
      bt(c.opts.start) && c.opts.start.call(t, c),
      c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
      xt.fx.timer(xt.extend(l, {
          elem: t,
          anim: c,
          queue: c.opts.queue
      })),
      c
  }
  function Z(t) {
      return (t.match(Mt) || []).join(" ")
  }
  function X(t) {
      return t.getAttribute && t.getAttribute("class") || ""
  }
  function Q(t) {
      return Array.isArray(t) ? t : "string" == typeof t ? t.match(Mt) || [] : []
  }
  function Y(t, e, n, r) {
      var a;
      if (Array.isArray(e))
          xt.each(e, function(e, i) {
              n || Pe.test(t) ? r(t, i) : Y(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
          });
      else if (n || "object" !== i(e))
          r(t, e);
      else
          for (a in e)
              Y(t + "[" + a + "]", e[a], n, r)
  }
  function tt(t) {
      return function(e, n) {
          "string" != typeof e && (n = e,
          e = "*");
          var i, r = 0, a = e.toLowerCase().match(Mt) || [];
          if (bt(n))
              for (; i = a[r++]; )
                  "+" === i[0] ? (i = i.slice(1) || "*",
                  (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
      }
  }
  function et(t, e, n, i) {
      function r(s) {
          var l;
          return a[s] = !0,
          xt.each(t[s] || [], function(t, s) {
              var c = s(e, n, i);
              return "string" != typeof c || o || a[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c),
              r(c),
              !1)
          }),
          l
      }
      var a = {}
        , o = t === Ue;
      return r(e.dataTypes[0]) || !a["*"] && r("*")
  }
  function nt(t, e) {
      var n, i, r = xt.ajaxSettings.flatOptions || {};
      for (n in e)
          void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
      return i && xt.extend(!0, t, i),
      t
  }
  function it(t, e, n) {
      for (var i, r, a, o, s = t.contents, l = t.dataTypes; "*" === l[0]; )
          l.shift(),
          void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
      if (i)
          for (r in s)
              if (s[r] && s[r].test(i)) {
                  l.unshift(r);
                  break
              }
      if (l[0]in n)
          a = l[0];
      else {
          for (r in n) {
              if (!l[0] || t.converters[r + " " + l[0]]) {
                  a = r;
                  break
              }
              o || (o = r)
          }
          a = a || o
      }
      if (a)
          return a !== l[0] && l.unshift(a),
          n[a]
  }
  function rt(t, e, n, i) {
      var r, a, o, s, l, c = {}, u = t.dataTypes.slice();
      if (u[1])
          for (o in t.converters)
              c[o.toLowerCase()] = t.converters[o];
      for (a = u.shift(); a; )
          if (t.responseFields[a] && (n[t.responseFields[a]] = e),
          !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
          l = a,
          a = u.shift())
              if ("*" === a)
                  a = l;
              else if ("*" !== l && l !== a) {
                  if (!(o = c[l + " " + a] || c["* " + a]))
                      for (r in c)
                          if ((s = r.split(" "))[1] === a && (o = c[l + " " + s[0]] || c["* " + s[0]])) {
                              !0 === o ? o = c[r] : !0 !== c[r] && (a = s[0],
                              u.unshift(s[1]));
                              break
                          }
                  if (!0 !== o)
                      if (o && t.throws)
                          e = o(e);
                      else
                          try {
                              e = o(e)
                          } catch (t) {
                              return {
                                  state: "parsererror",
                                  error: o ? t : "No conversion from " + l + " to " + a
                              }
                          }
              }
      return {
          state: "success",
          data: e
      }
  }
  var at = []
    , ot = t.document
    , st = Object.getPrototypeOf
    , lt = at.slice
    , ct = at.concat
    , ut = at.push
    , dt = at.indexOf
    , pt = {}
    , ft = pt.toString
    , ht = pt.hasOwnProperty
    , mt = ht.toString
    , vt = mt.call(Object)
    , gt = {}
    , bt = function(t) {
      return "function" == typeof t && "number" != typeof t.nodeType
  }
    , yt = function(t) {
      return null != t && t === t.window
  }
    , wt = {
      type: !0,
      src: !0,
      noModule: !0
  }
    , xt = function(t, e) {
      return new xt.fn.init(t,e)
  }
    , St = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  xt.fn = xt.prototype = {
      jquery: "3.3.1",
      constructor: xt,
      length: 0,
      toArray: function() {
          return lt.call(this)
      },
      get: function(t) {
          return null == t ? lt.call(this) : t < 0 ? this[t + this.length] : this[t]
      },
      pushStack: function(t) {
          var e = xt.merge(this.constructor(), t);
          return e.prevObject = this,
          e
      },
      each: function(t) {
          return xt.each(this, t)
      },
      map: function(t) {
          return this.pushStack(xt.map(this, function(e, n) {
              return t.call(e, n, e)
          }))
      },
      slice: function() {
          return this.pushStack(lt.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(t) {
          var e = this.length
            , n = +t + (t < 0 ? e : 0);
          return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor()
      },
      push: ut,
      sort: at.sort,
      splice: at.splice
  },
  xt.extend = xt.fn.extend = function() {
      var t, e, n, i, r, a, o = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
      for ("boolean" == typeof o && (c = o,
      o = arguments[s] || {},
      s++),
      "object" == typeof o || bt(o) || (o = {}),
      s === l && (o = this,
      s--); s < l; s++)
          if (null != (t = arguments[s]))
              for (e in t)
                  n = o[e],
                  o !== (i = t[e]) && (c && i && (xt.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1,
                  a = n && Array.isArray(n) ? n : []) : a = n && xt.isPlainObject(n) ? n : {},
                  o[e] = xt.extend(c, a, i)) : void 0 !== i && (o[e] = i));
      return o
  }
  ,
  xt.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(t) {
          throw new Error(t)
      },
      noop: function() {},
      isPlainObject: function(t) {
          var e, n;
          return !(!t || "[object Object]" !== ft.call(t) || (e = st(t)) && ("function" != typeof (n = ht.call(e, "constructor") && e.constructor) || mt.call(n) !== vt))
      },
      isEmptyObject: function(t) {
          var e;
          for (e in t)
              return !1;
          return !0
      },
      globalEval: function(t) {
          n(t)
      },
      each: function(t, e) {
          var n, i = 0;
          if (r(t))
              for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++)
                  ;
          else
              for (i in t)
                  if (!1 === e.call(t[i], i, t[i]))
                      break;
          return t
      },
      trim: function(t) {
          return null == t ? "" : (t + "").replace(St, "")
      },
      makeArray: function(t, e) {
          var n = e || [];
          return null != t && (r(Object(t)) ? xt.merge(n, "string" == typeof t ? [t] : t) : ut.call(n, t)),
          n
      },
      inArray: function(t, e, n) {
          return null == e ? -1 : dt.call(e, t, n)
      },
      merge: function(t, e) {
          for (var n = +e.length, i = 0, r = t.length; i < n; i++)
              t[r++] = e[i];
          return t.length = r,
          t
      },
      grep: function(t, e, n) {
          for (var i = [], r = 0, a = t.length, o = !n; r < a; r++)
              !e(t[r], r) !== o && i.push(t[r]);
          return i
      },
      map: function(t, e, n) {
          var i, a, o = 0, s = [];
          if (r(t))
              for (i = t.length; o < i; o++)
                  null != (a = e(t[o], o, n)) && s.push(a);
          else
              for (o in t)
                  null != (a = e(t[o], o, n)) && s.push(a);
          return ct.apply([], s)
      },
      guid: 1,
      support: gt
  }),
  "function" == typeof Symbol && (xt.fn[Symbol.iterator] = at[Symbol.iterator]),
  xt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
      pt["[object " + e + "]"] = e.toLowerCase()
  });
  var Ct = function(t) {
      function e(t, e, n, i) {
          var r, a, o, s, l, u, p, f = e && e.ownerDocument, h = e ? e.nodeType : 9;
          if (n = n || [],
          "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h)
              return n;
          if (!i && ((e ? e.ownerDocument || e : B) !== P && O(e),
          e = e || P,
          $)) {
              if (11 !== h && (l = mt.exec(t)))
                  if (r = l[1]) {
                      if (9 === h) {
                          if (!(o = e.getElementById(r)))
                              return n;
                          if (o.id === r)
                              return n.push(o),
                              n
                      } else if (f && (o = f.getElementById(r)) && R(e, o) && o.id === r)
                          return n.push(o),
                          n
                  } else {
                      if (l[2])
                          return Z.apply(n, e.getElementsByTagName(t)),
                          n;
                      if ((r = l[3]) && w.getElementsByClassName && e.getElementsByClassName)
                          return Z.apply(n, e.getElementsByClassName(r)),
                          n
                  }
              if (w.qsa && !K[t + " "] && (!_ || !_.test(t))) {
                  if (1 !== h)
                      f = e,
                      p = t;
                  else if ("object" !== e.nodeName.toLowerCase()) {
                      for ((s = e.getAttribute("id")) ? s = s.replace(yt, wt) : e.setAttribute("id", s = V),
                      a = (u = T(t)).length; a--; )
                          u[a] = "#" + s + " " + d(u[a]);
                      p = u.join(","),
                      f = vt.test(t) && c(e.parentNode) || e
                  }
                  if (p)
                      try {
                          return Z.apply(n, f.querySelectorAll(p)),
                          n
                      } catch (t) {} finally {
                          s === V && e.removeAttribute("id")
                      }
              }
          }
          return k(t.replace(at, "$1"), e, n, i)
      }
      function n() {
          function t(n, i) {
              return e.push(n + " ") > x.cacheLength && delete t[e.shift()],
              t[n + " "] = i
          }
          var e = [];
          return t
      }
      function i(t) {
          return t[V] = !0,
          t
      }
      function r(t) {
          var e = P.createElement("fieldset");
          try {
              return !!t(e)
          } catch (t) {
              return !1
          } finally {
              e.parentNode && e.parentNode.removeChild(e),
              e = null
          }
      }
      function a(t, e) {
          for (var n = t.split("|"), i = n.length; i--; )
              x.attrHandle[n[i]] = e
      }
      function o(t, e) {
          var n = e && t
            , i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
          if (i)
              return i;
          if (n)
              for (; n = n.nextSibling; )
                  if (n === e)
                      return -1;
          return t ? 1 : -1
      }
      function s(t) {
          return function(e) {
              return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && St(e) === t : e.disabled === t : "label"in e && e.disabled === t
          }
      }
      function l(t) {
          return i(function(e) {
              return e = +e,
              i(function(n, i) {
                  for (var r, a = t([], n.length, e), o = a.length; o--; )
                      n[r = a[o]] && (n[r] = !(i[r] = n[r]))
              })
          })
      }
      function c(t) {
          return t && void 0 !== t.getElementsByTagName && t
      }
      function u() {}
      function d(t) {
          for (var e = 0, n = t.length, i = ""; e < n; e++)
              i += t[e].value;
          return i
      }
      function p(t, e, n) {
          var i = e.dir
            , r = e.next
            , a = r || i
            , o = n && "parentNode" === a
            , s = F++;
          return e.first ? function(e, n, r) {
              for (; e = e[i]; )
                  if (1 === e.nodeType || o)
                      return t(e, n, r);
              return !1
          }
          : function(e, n, l) {
              var c, u, d, p = [j, s];
              if (l) {
                  for (; e = e[i]; )
                      if ((1 === e.nodeType || o) && t(e, n, l))
                          return !0
              } else
                  for (; e = e[i]; )
                      if (1 === e.nodeType || o)
                          if (d = e[V] || (e[V] = {}),
                          u = d[e.uniqueID] || (d[e.uniqueID] = {}),
                          r && r === e.nodeName.toLowerCase())
                              e = e[i] || e;
                          else {
                              if ((c = u[a]) && c[0] === j && c[1] === s)
                                  return p[2] = c[2];
                              if (u[a] = p,
                              p[2] = t(e, n, l))
                                  return !0
                          }
              return !1
          }
      }
      function f(t) {
          return t.length > 1 ? function(e, n, i) {
              for (var r = t.length; r--; )
                  if (!t[r](e, n, i))
                      return !1;
              return !0
          }
          : t[0]
      }
      function h(t, n, i) {
          for (var r = 0, a = n.length; r < a; r++)
              e(t, n[r], i);
          return i
      }
      function m(t, e, n, i, r) {
          for (var a, o = [], s = 0, l = t.length, c = null != e; s < l; s++)
              (a = t[s]) && (n && !n(a, i, r) || (o.push(a),
              c && e.push(s)));
          return o
      }
      function v(t, e, n, r, a, o) {
          return r && !r[V] && (r = v(r)),
          a && !a[V] && (a = v(a, o)),
          i(function(i, o, s, l) {
              var c, u, d, p = [], f = [], v = o.length, g = i || h(e || "*", s.nodeType ? [s] : s, []), b = !t || !i && e ? g : m(g, p, t, s, l), y = n ? a || (i ? t : v || r) ? [] : o : b;
              if (n && n(b, y, s, l),
              r)
                  for (c = m(y, f),
                  r(c, [], s, l),
                  u = c.length; u--; )
                      (d = c[u]) && (y[f[u]] = !(b[f[u]] = d));
              if (i) {
                  if (a || t) {
                      if (a) {
                          for (c = [],
                          u = y.length; u--; )
                              (d = y[u]) && c.push(b[u] = d);
                          a(null, y = [], c, l)
                      }
                      for (u = y.length; u--; )
                          (d = y[u]) && (c = a ? Q(i, d) : p[u]) > -1 && (i[c] = !(o[c] = d))
                  }
              } else
                  y = m(y === o ? y.splice(v, y.length) : y),
                  a ? a(null, o, y, l) : Z.apply(o, y)
          })
      }
      function g(t) {
          for (var e, n, i, r = t.length, a = x.relative[t[0].type], o = a || x.relative[" "], s = a ? 1 : 0, l = p(function(t) {
              return t === e
          }, o, !0), c = p(function(t) {
              return Q(e, t) > -1
          }, o, !0), u = [function(t, n, i) {
              var r = !a && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
              return e = null,
              r
          }
          ]; s < r; s++)
              if (n = x.relative[t[s].type])
                  u = [p(f(u), n)];
              else {
                  if ((n = x.filter[t[s].type].apply(null, t[s].matches))[V]) {
                      for (i = ++s; i < r && !x.relative[t[i].type]; i++)
                          ;
                      return v(s > 1 && f(u), s > 1 && d(t.slice(0, s - 1).concat({
                          value: " " === t[s - 2].type ? "*" : ""
                      })).replace(at, "$1"), n, s < i && g(t.slice(s, i)), i < r && g(t = t.slice(i)), i < r && d(t))
                  }
                  u.push(n)
              }
          return f(u)
      }
      function b(t, n) {
          var r = n.length > 0
            , a = t.length > 0
            , o = function(i, o, s, l, c) {
              var u, d, p, f = 0, h = "0", v = i && [], g = [], b = E, y = i || a && x.find.TAG("*", c), w = j += null == b ? 1 : Math.random() || .1, S = y.length;
              for (c && (E = o === P || o || c); h !== S && null != (u = y[h]); h++) {
                  if (a && u) {
                      for (d = 0,
                      o || u.ownerDocument === P || (O(u),
                      s = !$); p = t[d++]; )
                          if (p(u, o || P, s)) {
                              l.push(u);
                              break
                          }
                      c && (j = w)
                  }
                  r && ((u = !p && u) && f--,
                  i && v.push(u))
              }
              if (f += h,
              r && h !== f) {
                  for (d = 0; p = n[d++]; )
                      p(v, g, o, s);
                  if (i) {
                      if (f > 0)
                          for (; h--; )
                              v[h] || g[h] || (g[h] = W.call(l));
                      g = m(g)
                  }
                  Z.apply(l, g),
                  c && !i && g.length > 0 && f + n.length > 1 && e.uniqueSort(l)
              }
              return c && (j = w,
              E = b),
              v
          };
          return r ? i(o) : o
      }
      var y, w, x, S, C, T, A, k, E, I, N, O, P, M, $, _, D, L, R, V = "sizzle" + 1 * new Date, B = t.document, j = 0, F = 0, H = n(), U = n(), K = n(), q = function(t, e) {
          return t === e && (N = !0),
          0
      }, z = {}.hasOwnProperty, G = [], W = G.pop, J = G.push, Z = G.push, X = G.slice, Q = function(t, e) {
          for (var n = 0, i = t.length; n < i; n++)
              if (t[n] === e)
                  return n;
          return -1
      }, Y = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]", it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)", rt = new RegExp(tt + "+","g"), at = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$","g"), ot = new RegExp("^" + tt + "*," + tt + "*"), st = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"), lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]","g"), ct = new RegExp(it), ut = new RegExp("^" + et + "$"), dt = {
          ID: new RegExp("^#(" + et + ")"),
          CLASS: new RegExp("^\\.(" + et + ")"),
          TAG: new RegExp("^(" + et + "|[*])"),
          ATTR: new RegExp("^" + nt),
          PSEUDO: new RegExp("^" + it),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)","i"),
          bool: new RegExp("^(?:" + Y + ")$","i"),
          needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)","i")
      }, pt = /^(?:input|select|textarea|button)$/i, ft = /^h\d$/i, ht = /^[^{]+\{\s*\[native \w/, mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, vt = /[+~]/, gt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)","ig"), bt = function(t, e, n) {
          var i = "0x" + e - 65536;
          return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      }, yt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, wt = function(t, e) {
          return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
      }, xt = function() {
          O()
      }, St = p(function(t) {
          return !0 === t.disabled && ("form"in t || "label"in t)
      }, {
          dir: "parentNode",
          next: "legend"
      });
      try {
          Z.apply(G = X.call(B.childNodes), B.childNodes),
          G[B.childNodes.length].nodeType
      } catch (t) {
          Z = {
              apply: G.length ? function(t, e) {
                  J.apply(t, X.call(e))
              }
              : function(t, e) {
                  for (var n = t.length, i = 0; t[n++] = e[i++]; )
                      ;
                  t.length = n - 1
              }
          }
      }
      w = e.support = {},
      C = e.isXML = function(t) {
          var e = t && (t.ownerDocument || t).documentElement;
          return !!e && "HTML" !== e.nodeName
      }
      ,
      O = e.setDocument = function(t) {
          var e, n, i = t ? t.ownerDocument || t : B;
          return i !== P && 9 === i.nodeType && i.documentElement ? (P = i,
          M = P.documentElement,
          $ = !C(P),
          B !== P && (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xt, !1) : n.attachEvent && n.attachEvent("onunload", xt)),
          w.attributes = r(function(t) {
              return t.className = "i",
              !t.getAttribute("className")
          }),
          w.getElementsByTagName = r(function(t) {
              return t.appendChild(P.createComment("")),
              !t.getElementsByTagName("*").length
          }),
          w.getElementsByClassName = ht.test(P.getElementsByClassName),
          w.getById = r(function(t) {
              return M.appendChild(t).id = V,
              !P.getElementsByName || !P.getElementsByName(V).length
          }),
          w.getById ? (x.filter.ID = function(t) {
              var e = t.replace(gt, bt);
              return function(t) {
                  return t.getAttribute("id") === e
              }
          }
          ,
          x.find.ID = function(t, e) {
              if (void 0 !== e.getElementById && $) {
                  var n = e.getElementById(t);
                  return n ? [n] : []
              }
          }
          ) : (x.filter.ID = function(t) {
              var e = t.replace(gt, bt);
              return function(t) {
                  var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                  return n && n.value === e
              }
          }
          ,
          x.find.ID = function(t, e) {
              if (void 0 !== e.getElementById && $) {
                  var n, i, r, a = e.getElementById(t);
                  if (a) {
                      if ((n = a.getAttributeNode("id")) && n.value === t)
                          return [a];
                      for (r = e.getElementsByName(t),
                      i = 0; a = r[i++]; )
                          if ((n = a.getAttributeNode("id")) && n.value === t)
                              return [a]
                  }
                  return []
              }
          }
          ),
          x.find.TAG = w.getElementsByTagName ? function(t, e) {
              return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
          }
          : function(t, e) {
              var n, i = [], r = 0, a = e.getElementsByTagName(t);
              if ("*" === t) {
                  for (; n = a[r++]; )
                      1 === n.nodeType && i.push(n);
                  return i
              }
              return a
          }
          ,
          x.find.CLASS = w.getElementsByClassName && function(t, e) {
              if (void 0 !== e.getElementsByClassName && $)
                  return e.getElementsByClassName(t)
          }
          ,
          D = [],
          _ = [],
          (w.qsa = ht.test(P.querySelectorAll)) && (r(function(t) {
              M.appendChild(t).innerHTML = "<a id='" + V + "'></a><select id='" + V + "-\r\\' msallowcapture=''><option selected=''></option></select>",
              t.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=" + tt + "*(?:''|\"\")"),
              t.querySelectorAll("[selected]").length || _.push("\\[" + tt + "*(?:value|" + Y + ")"),
              t.querySelectorAll("[id~=" + V + "-]").length || _.push("~="),
              t.querySelectorAll(":checked").length || _.push(":checked"),
              t.querySelectorAll("a#" + V + "+*").length || _.push(".#.+[+~]")
          }),
          r(function(t) {
              t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var e = P.createElement("input");
              e.setAttribute("type", "hidden"),
              t.appendChild(e).setAttribute("name", "D"),
              t.querySelectorAll("[name=d]").length && _.push("name" + tt + "*[*^$|!~]?="),
              2 !== t.querySelectorAll(":enabled").length && _.push(":enabled", ":disabled"),
              M.appendChild(t).disabled = !0,
              2 !== t.querySelectorAll(":disabled").length && _.push(":enabled", ":disabled"),
              t.querySelectorAll("*,:x"),
              _.push(",.*:")
          })),
          (w.matchesSelector = ht.test(L = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && r(function(t) {
              w.disconnectedMatch = L.call(t, "*"),
              L.call(t, "[s!='']:x"),
              D.push("!=", it)
          }),
          _ = _.length && new RegExp(_.join("|")),
          D = D.length && new RegExp(D.join("|")),
          e = ht.test(M.compareDocumentPosition),
          R = e || ht.test(M.contains) ? function(t, e) {
              var n = 9 === t.nodeType ? t.documentElement : t
                , i = e && e.parentNode;
              return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
          }
          : function(t, e) {
              if (e)
                  for (; e = e.parentNode; )
                      if (e === t)
                          return !0;
              return !1
          }
          ,
          q = e ? function(t, e) {
              if (t === e)
                  return N = !0,
                  0;
              var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
              return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === P || t.ownerDocument === B && R(B, t) ? -1 : e === P || e.ownerDocument === B && R(B, e) ? 1 : I ? Q(I, t) - Q(I, e) : 0 : 4 & n ? -1 : 1)
          }
          : function(t, e) {
              if (t === e)
                  return N = !0,
                  0;
              var n, i = 0, r = t.parentNode, a = e.parentNode, s = [t], l = [e];
              if (!r || !a)
                  return t === P ? -1 : e === P ? 1 : r ? -1 : a ? 1 : I ? Q(I, t) - Q(I, e) : 0;
              if (r === a)
                  return o(t, e);
              for (n = t; n = n.parentNode; )
                  s.unshift(n);
              for (n = e; n = n.parentNode; )
                  l.unshift(n);
              for (; s[i] === l[i]; )
                  i++;
              return i ? o(s[i], l[i]) : s[i] === B ? -1 : l[i] === B ? 1 : 0
          }
          ,
          P) : P
      }
      ,
      e.matches = function(t, n) {
          return e(t, null, null, n)
      }
      ,
      e.matchesSelector = function(t, n) {
          if ((t.ownerDocument || t) !== P && O(t),
          n = n.replace(lt, "='$1']"),
          w.matchesSelector && $ && !K[n + " "] && (!D || !D.test(n)) && (!_ || !_.test(n)))
              try {
                  var i = L.call(t, n);
                  if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                      return i
              } catch (t) {}
          return e(n, P, null, [t]).length > 0
      }
      ,
      e.contains = function(t, e) {
          return (t.ownerDocument || t) !== P && O(t),
          R(t, e)
      }
      ,
      e.attr = function(t, e) {
          (t.ownerDocument || t) !== P && O(t);
          var n = x.attrHandle[e.toLowerCase()]
            , i = n && z.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !$) : void 0;
          return void 0 !== i ? i : w.attributes || !$ ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
      }
      ,
      e.escape = function(t) {
          return (t + "").replace(yt, wt)
      }
      ,
      e.error = function(t) {
          throw new Error("Syntax error, unrecognized expression: " + t)
      }
      ,
      e.uniqueSort = function(t) {
          var e, n = [], i = 0, r = 0;
          if (N = !w.detectDuplicates,
          I = !w.sortStable && t.slice(0),
          t.sort(q),
          N) {
              for (; e = t[r++]; )
                  e === t[r] && (i = n.push(r));
              for (; i--; )
                  t.splice(n[i], 1)
          }
          return I = null,
          t
      }
      ,
      S = e.getText = function(t) {
          var e, n = "", i = 0, r = t.nodeType;
          if (r) {
              if (1 === r || 9 === r || 11 === r) {
                  if ("string" == typeof t.textContent)
                      return t.textContent;
                  for (t = t.firstChild; t; t = t.nextSibling)
                      n += S(t)
              } else if (3 === r || 4 === r)
                  return t.nodeValue
          } else
              for (; e = t[i++]; )
                  n += S(e);
          return n
      }
      ,
      (x = e.selectors = {
          cacheLength: 50,
          createPseudo: i,
          match: dt,
          attrHandle: {},
          find: {},
          relative: {
              ">": {
                  dir: "parentNode",
                  first: !0
              },
              " ": {
                  dir: "parentNode"
              },
              "+": {
                  dir: "previousSibling",
                  first: !0
              },
              "~": {
                  dir: "previousSibling"
              }
          },
          preFilter: {
              ATTR: function(t) {
                  return t[1] = t[1].replace(gt, bt),
                  t[3] = (t[3] || t[4] || t[5] || "").replace(gt, bt),
                  "~=" === t[2] && (t[3] = " " + t[3] + " "),
                  t.slice(0, 4)
              },
              CHILD: function(t) {
                  return t[1] = t[1].toLowerCase(),
                  "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                  t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                  t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                  t
              },
              PSEUDO: function(t) {
                  var e, n = !t[6] && t[2];
                  return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                  t[2] = n.slice(0, e)),
                  t.slice(0, 3))
              }
          },
          filter: {
              TAG: function(t) {
                  var e = t.replace(gt, bt).toLowerCase();
                  return "*" === t ? function() {
                      return !0
                  }
                  : function(t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e
                  }
              },
              CLASS: function(t) {
                  var e = H[t + " "];
                  return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && H(t, function(t) {
                      return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                  })
              },
              ATTR: function(t, n, i) {
                  return function(r) {
                      var a = e.attr(r, t);
                      return null == a ? "!=" === n : !n || (a += "",
                      "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(rt, " ") + " ").indexOf(i) > -1 : "|=" === n && (a === i || a.slice(0, i.length + 1) === i + "-"))
                  }
              },
              CHILD: function(t, e, n, i, r) {
                  var a = "nth" !== t.slice(0, 3)
                    , o = "last" !== t.slice(-4)
                    , s = "of-type" === e;
                  return 1 === i && 0 === r ? function(t) {
                      return !!t.parentNode
                  }
                  : function(e, n, l) {
                      var c, u, d, p, f, h, m = a !== o ? "nextSibling" : "previousSibling", v = e.parentNode, g = s && e.nodeName.toLowerCase(), b = !l && !s, y = !1;
                      if (v) {
                          if (a) {
                              for (; m; ) {
                                  for (p = e; p = p[m]; )
                                      if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType)
                                          return !1;
                                  h = m = "only" === t && !h && "nextSibling"
                              }
                              return !0
                          }
                          if (h = [o ? v.firstChild : v.lastChild],
                          o && b) {
                              for (y = (f = (c = (u = (d = (p = v)[V] || (p[V] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === j && c[1]) && c[2],
                              p = f && v.childNodes[f]; p = ++f && p && p[m] || (y = f = 0) || h.pop(); )
                                  if (1 === p.nodeType && ++y && p === e) {
                                      u[t] = [j, f, y];
                                      break
                                  }
                          } else if (b && (y = f = (c = (u = (d = (p = e)[V] || (p[V] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === j && c[1]),
                          !1 === y)
                              for (; (p = ++f && p && p[m] || (y = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++y || (b && ((u = (d = p[V] || (p[V] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] = [j, y]),
                              p !== e)); )
                                  ;
                          return (y -= r) === i || y % i == 0 && y / i >= 0
                      }
                  }
              },
              PSEUDO: function(t, n) {
                  var r, a = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                  return a[V] ? a(n) : a.length > 1 ? (r = [t, t, "", n],
                  x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                      for (var i, r = a(t, n), o = r.length; o--; )
                          t[i = Q(t, r[o])] = !(e[i] = r[o])
                  }) : function(t) {
                      return a(t, 0, r)
                  }
                  ) : a
              }
          },
          pseudos: {
              not: i(function(t) {
                  var e = []
                    , n = []
                    , r = A(t.replace(at, "$1"));
                  return r[V] ? i(function(t, e, n, i) {
                      for (var a, o = r(t, null, i, []), s = t.length; s--; )
                          (a = o[s]) && (t[s] = !(e[s] = a))
                  }) : function(t, i, a) {
                      return e[0] = t,
                      r(e, null, a, n),
                      e[0] = null,
                      !n.pop()
                  }
              }),
              has: i(function(t) {
                  return function(n) {
                      return e(t, n).length > 0
                  }
              }),
              contains: i(function(t) {
                  return t = t.replace(gt, bt),
                  function(e) {
                      return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                  }
              }),
              lang: i(function(t) {
                  return ut.test(t || "") || e.error("unsupported lang: " + t),
                  t = t.replace(gt, bt).toLowerCase(),
                  function(e) {
                      var n;
                      do {
                          if (n = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                              return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                      } while ((e = e.parentNode) && 1 === e.nodeType);
                      return !1
                  }
              }),
              target: function(e) {
                  var n = t.location && t.location.hash;
                  return n && n.slice(1) === e.id
              },
              root: function(t) {
                  return t === M
              },
              focus: function(t) {
                  return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
              },
              enabled: s(!1),
              disabled: s(!0),
              checked: function(t) {
                  var e = t.nodeName.toLowerCase();
                  return "input" === e && !!t.checked || "option" === e && !!t.selected
              },
              selected: function(t) {
                  return t.parentNode && t.parentNode.selectedIndex,
                  !0 === t.selected
              },
              empty: function(t) {
                  for (t = t.firstChild; t; t = t.nextSibling)
                      if (t.nodeType < 6)
                          return !1;
                  return !0
              },
              parent: function(t) {
                  return !x.pseudos.empty(t)
              },
              header: function(t) {
                  return ft.test(t.nodeName)
              },
              input: function(t) {
                  return pt.test(t.nodeName)
              },
              button: function(t) {
                  var e = t.nodeName.toLowerCase();
                  return "input" === e && "button" === t.type || "button" === e
              },
              text: function(t) {
                  var e;
                  return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
              },
              first: l(function() {
                  return [0]
              }),
              last: l(function(t, e) {
                  return [e - 1]
              }),
              eq: l(function(t, e, n) {
                  return [n < 0 ? n + e : n]
              }),
              even: l(function(t, e) {
                  for (var n = 0; n < e; n += 2)
                      t.push(n);
                  return t
              }),
              odd: l(function(t, e) {
                  for (var n = 1; n < e; n += 2)
                      t.push(n);
                  return t
              }),
              lt: l(function(t, e, n) {
                  for (var i = n < 0 ? n + e : n; --i >= 0; )
                      t.push(i);
                  return t
              }),
              gt: l(function(t, e, n) {
                  for (var i = n < 0 ? n + e : n; ++i < e; )
                      t.push(i);
                  return t
              })
          }
      }).pseudos.nth = x.pseudos.eq;
      for (y in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
      })
          x.pseudos[y] = function(t) {
              return function(e) {
                  return "input" === e.nodeName.toLowerCase() && e.type === t
              }
          }(y);
      for (y in {
          submit: !0,
          reset: !0
      })
          x.pseudos[y] = function(t) {
              return function(e) {
                  var n = e.nodeName.toLowerCase();
                  return ("input" === n || "button" === n) && e.type === t
              }
          }(y);
      return u.prototype = x.filters = x.pseudos,
      x.setFilters = new u,
      T = e.tokenize = function(t, n) {
          var i, r, a, o, s, l, c, u = U[t + " "];
          if (u)
              return n ? 0 : u.slice(0);
          for (s = t,
          l = [],
          c = x.preFilter; s; ) {
              i && !(r = ot.exec(s)) || (r && (s = s.slice(r[0].length) || s),
              l.push(a = [])),
              i = !1,
              (r = st.exec(s)) && (i = r.shift(),
              a.push({
                  value: i,
                  type: r[0].replace(at, " ")
              }),
              s = s.slice(i.length));
              for (o in x.filter)
                  !(r = dt[o].exec(s)) || c[o] && !(r = c[o](r)) || (i = r.shift(),
                  a.push({
                      value: i,
                      type: o,
                      matches: r
                  }),
                  s = s.slice(i.length));
              if (!i)
                  break
          }
          return n ? s.length : s ? e.error(t) : U(t, l).slice(0)
      }
      ,
      A = e.compile = function(t, e) {
          var n, i = [], r = [], a = K[t + " "];
          if (!a) {
              for (e || (e = T(t)),
              n = e.length; n--; )
                  (a = g(e[n]))[V] ? i.push(a) : r.push(a);
              (a = K(t, b(r, i))).selector = t
          }
          return a
      }
      ,
      k = e.select = function(t, e, n, i) {
          var r, a, o, s, l, u = "function" == typeof t && t, p = !i && T(t = u.selector || t);
          if (n = n || [],
          1 === p.length) {
              if ((a = p[0] = p[0].slice(0)).length > 2 && "ID" === (o = a[0]).type && 9 === e.nodeType && $ && x.relative[a[1].type]) {
                  if (!(e = (x.find.ID(o.matches[0].replace(gt, bt), e) || [])[0]))
                      return n;
                  u && (e = e.parentNode),
                  t = t.slice(a.shift().value.length)
              }
              for (r = dt.needsContext.test(t) ? 0 : a.length; r-- && (o = a[r],
              !x.relative[s = o.type]); )
                  if ((l = x.find[s]) && (i = l(o.matches[0].replace(gt, bt), vt.test(a[0].type) && c(e.parentNode) || e))) {
                      if (a.splice(r, 1),
                      !(t = i.length && d(a)))
                          return Z.apply(n, i),
                          n;
                      break
                  }
          }
          return (u || A(t, p))(i, e, !$, n, !e || vt.test(t) && c(e.parentNode) || e),
          n
      }
      ,
      w.sortStable = V.split("").sort(q).join("") === V,
      w.detectDuplicates = !!N,
      O(),
      w.sortDetached = r(function(t) {
          return 1 & t.compareDocumentPosition(P.createElement("fieldset"))
      }),
      r(function(t) {
          return t.innerHTML = "<a href='#'></a>",
          "#" === t.firstChild.getAttribute("href")
      }) || a("type|href|height|width", function(t, e, n) {
          if (!n)
              return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
      }),
      w.attributes && r(function(t) {
          return t.innerHTML = "<input/>",
          t.firstChild.setAttribute("value", ""),
          "" === t.firstChild.getAttribute("value")
      }) || a("value", function(t, e, n) {
          if (!n && "input" === t.nodeName.toLowerCase())
              return t.defaultValue
      }),
      r(function(t) {
          return null == t.getAttribute("disabled")
      }) || a(Y, function(t, e, n) {
          var i;
          if (!n)
              return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
      }),
      e
  }(t);
  xt.find = Ct,
  xt.expr = Ct.selectors,
  xt.expr[":"] = xt.expr.pseudos,
  xt.uniqueSort = xt.unique = Ct.uniqueSort,
  xt.text = Ct.getText,
  xt.isXMLDoc = Ct.isXML,
  xt.contains = Ct.contains,
  xt.escapeSelector = Ct.escape;
  var Tt = function(t, e, n) {
      for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
          if (1 === t.nodeType) {
              if (r && xt(t).is(n))
                  break;
              i.push(t)
          }
      return i
  }
    , At = function(t, e) {
      for (var n = []; t; t = t.nextSibling)
          1 === t.nodeType && t !== e && n.push(t);
      return n
  }
    , kt = xt.expr.match.needsContext
    , Et = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  xt.filter = function(t, e, n) {
      var i = e[0];
      return n && (t = ":not(" + t + ")"),
      1 === e.length && 1 === i.nodeType ? xt.find.matchesSelector(i, t) ? [i] : [] : xt.find.matches(t, xt.grep(e, function(t) {
          return 1 === t.nodeType
      }))
  }
  ,
  xt.fn.extend({
      find: function(t) {
          var e, n, i = this.length, r = this;
          if ("string" != typeof t)
              return this.pushStack(xt(t).filter(function() {
                  for (e = 0; e < i; e++)
                      if (xt.contains(r[e], this))
                          return !0
              }));
          for (n = this.pushStack([]),
          e = 0; e < i; e++)
              xt.find(t, r[e], n);
          return i > 1 ? xt.uniqueSort(n) : n
      },
      filter: function(t) {
          return this.pushStack(o(this, t || [], !1))
      },
      not: function(t) {
          return this.pushStack(o(this, t || [], !0))
      },
      is: function(t) {
          return !!o(this, "string" == typeof t && kt.test(t) ? xt(t) : t || [], !1).length
      }
  });
  var It, Nt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (xt.fn.init = function(t, e, n) {
      var i, r;
      if (!t)
          return this;
      if (n = n || It,
      "string" == typeof t) {
          if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Nt.exec(t)) || !i[1] && e)
              return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
          if (i[1]) {
              if (e = e instanceof xt ? e[0] : e,
              xt.merge(this, xt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : ot, !0)),
              Et.test(i[1]) && xt.isPlainObject(e))
                  for (i in e)
                      bt(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
              return this
          }
          return (r = ot.getElementById(i[2])) && (this[0] = r,
          this.length = 1),
          this
      }
      return t.nodeType ? (this[0] = t,
      this.length = 1,
      this) : bt(t) ? void 0 !== n.ready ? n.ready(t) : t(xt) : xt.makeArray(t, this)
  }
  ).prototype = xt.fn,
  It = xt(ot);
  var Ot = /^(?:parents|prev(?:Until|All))/
    , Pt = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
  };
  xt.fn.extend({
      has: function(t) {
          var e = xt(t, this)
            , n = e.length;
          return this.filter(function() {
              for (var t = 0; t < n; t++)
                  if (xt.contains(this, e[t]))
                      return !0
          })
      },
      closest: function(t, e) {
          var n, i = 0, r = this.length, a = [], o = "string" != typeof t && xt(t);
          if (!kt.test(t))
              for (; i < r; i++)
                  for (n = this[i]; n && n !== e; n = n.parentNode)
                      if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && xt.find.matchesSelector(n, t))) {
                          a.push(n);
                          break
                      }
          return this.pushStack(a.length > 1 ? xt.uniqueSort(a) : a)
      },
      index: function(t) {
          return t ? "string" == typeof t ? dt.call(xt(t), this[0]) : dt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(t, e) {
          return this.pushStack(xt.uniqueSort(xt.merge(this.get(), xt(t, e))))
      },
      addBack: function(t) {
          return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }
  }),
  xt.each({
      parent: function(t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null
      },
      parents: function(t) {
          return Tt(t, "parentNode")
      },
      parentsUntil: function(t, e, n) {
          return Tt(t, "parentNode", n)
      },
      next: function(t) {
          return s(t, "nextSibling")
      },
      prev: function(t) {
          return s(t, "previousSibling")
      },
      nextAll: function(t) {
          return Tt(t, "nextSibling")
      },
      prevAll: function(t) {
          return Tt(t, "previousSibling")
      },
      nextUntil: function(t, e, n) {
          return Tt(t, "nextSibling", n)
      },
      prevUntil: function(t, e, n) {
          return Tt(t, "previousSibling", n)
      },
      siblings: function(t) {
          return At((t.parentNode || {}).firstChild, t)
      },
      children: function(t) {
          return At(t.firstChild)
      },
      contents: function(t) {
          return a(t, "iframe") ? t.contentDocument : (a(t, "template") && (t = t.content || t),
          xt.merge([], t.childNodes))
      }
  }, function(t, e) {
      xt.fn[t] = function(n, i) {
          var r = xt.map(this, e, n);
          return "Until" !== t.slice(-5) && (i = n),
          i && "string" == typeof i && (r = xt.filter(i, r)),
          this.length > 1 && (Pt[t] || xt.uniqueSort(r),
          Ot.test(t) && r.reverse()),
          this.pushStack(r)
      }
  });
  var Mt = /[^\x20\t\r\n\f]+/g;
  xt.Callbacks = function(t) {
      t = "string" == typeof t ? l(t) : xt.extend({}, t);
      var e, n, r, a, o = [], s = [], c = -1, u = function() {
          for (a = a || t.once,
          r = e = !0; s.length; c = -1)
              for (n = s.shift(); ++c < o.length; )
                  !1 === o[c].apply(n[0], n[1]) && t.stopOnFalse && (c = o.length,
                  n = !1);
          t.memory || (n = !1),
          e = !1,
          a && (o = n ? [] : "")
      }, d = {
          add: function() {
              return o && (n && !e && (c = o.length - 1,
              s.push(n)),
              function e(n) {
                  xt.each(n, function(n, r) {
                      bt(r) ? t.unique && d.has(r) || o.push(r) : r && r.length && "string" !== i(r) && e(r)
                  })
              }(arguments),
              n && !e && u()),
              this
          },
          remove: function() {
              return xt.each(arguments, function(t, e) {
                  for (var n; (n = xt.inArray(e, o, n)) > -1; )
                      o.splice(n, 1),
                      n <= c && c--
              }),
              this
          },
          has: function(t) {
              return t ? xt.inArray(t, o) > -1 : o.length > 0
          },
          empty: function() {
              return o && (o = []),
              this
          },
          disable: function() {
              return a = s = [],
              o = n = "",
              this
          },
          disabled: function() {
              return !o
          },
          lock: function() {
              return a = s = [],
              n || e || (o = n = ""),
              this
          },
          locked: function() {
              return !!a
          },
          fireWith: function(t, n) {
              return a || (n = [t, (n = n || []).slice ? n.slice() : n],
              s.push(n),
              e || u()),
              this
          },
          fire: function() {
              return d.fireWith(this, arguments),
              this
          },
          fired: function() {
              return !!r
          }
      };
      return d
  }
  ,
  xt.extend({
      Deferred: function(e) {
          var n = [["notify", "progress", xt.Callbacks("memory"), xt.Callbacks("memory"), 2], ["resolve", "done", xt.Callbacks("once memory"), xt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", xt.Callbacks("once memory"), xt.Callbacks("once memory"), 1, "rejected"]]
            , i = "pending"
            , r = {
              state: function() {
                  return i
              },
              always: function() {
                  return a.done(arguments).fail(arguments),
                  this
              },
              catch: function(t) {
                  return r.then(null, t)
              },
              pipe: function() {
                  var t = arguments;
                  return xt.Deferred(function(e) {
                      xt.each(n, function(n, i) {
                          var r = bt(t[i[4]]) && t[i[4]];
                          a[i[1]](function() {
                              var t = r && r.apply(this, arguments);
                              t && bt(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
                          })
                      }),
                      t = null
                  }).promise()
              },
              then: function(e, i, r) {
                  function a(e, n, i, r) {
                      return function() {
                          var s = this
                            , l = arguments
                            , d = function() {
                              var t, d;
                              if (!(e < o)) {
                                  if ((t = i.apply(s, l)) === n.promise())
                                      throw new TypeError("Thenable self-resolution");
                                  d = t && ("object" == typeof t || "function" == typeof t) && t.then,
                                  bt(d) ? r ? d.call(t, a(o, n, c, r), a(o, n, u, r)) : (o++,
                                  d.call(t, a(o, n, c, r), a(o, n, u, r), a(o, n, c, n.notifyWith))) : (i !== c && (s = void 0,
                                  l = [t]),
                                  (r || n.resolveWith)(s, l))
                              }
                          }
                            , p = r ? d : function() {
                              try {
                                  d()
                              } catch (t) {
                                  xt.Deferred.exceptionHook && xt.Deferred.exceptionHook(t, p.stackTrace),
                                  e + 1 >= o && (i !== u && (s = void 0,
                                  l = [t]),
                                  n.rejectWith(s, l))
                              }
                          }
                          ;
                          e ? p() : (xt.Deferred.getStackHook && (p.stackTrace = xt.Deferred.getStackHook()),
                          t.setTimeout(p))
                      }
                  }
                  var o = 0;
                  return xt.Deferred(function(t) {
                      n[0][3].add(a(0, t, bt(r) ? r : c, t.notifyWith)),
                      n[1][3].add(a(0, t, bt(e) ? e : c)),
                      n[2][3].add(a(0, t, bt(i) ? i : u))
                  }).promise()
              },
              promise: function(t) {
                  return null != t ? xt.extend(t, r) : r
              }
          }
            , a = {};
          return xt.each(n, function(t, e) {
              var o = e[2]
                , s = e[5];
              r[e[1]] = o.add,
              s && o.add(function() {
                  i = s
              }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock),
              o.add(e[3].fire),
              a[e[0]] = function() {
                  return a[e[0] + "With"](this === a ? void 0 : this, arguments),
                  this
              }
              ,
              a[e[0] + "With"] = o.fireWith
          }),
          r.promise(a),
          e && e.call(a, a),
          a
      },
      when: function(t) {
          var e = arguments.length
            , n = e
            , i = Array(n)
            , r = lt.call(arguments)
            , a = xt.Deferred()
            , o = function(t) {
              return function(n) {
                  i[t] = this,
                  r[t] = arguments.length > 1 ? lt.call(arguments) : n,
                  --e || a.resolveWith(i, r)
              }
          };
          if (e <= 1 && (d(t, a.done(o(n)).resolve, a.reject, !e),
          "pending" === a.state() || bt(r[n] && r[n].then)))
              return a.then();
          for (; n--; )
              d(r[n], o(n), a.reject);
          return a.promise()
      }
  });
  var $t = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  xt.Deferred.exceptionHook = function(e, n) {
      t.console && t.console.warn && e && $t.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
  }
  ,
  xt.readyException = function(e) {
      t.setTimeout(function() {
          throw e
      })
  }
  ;
  var _t = xt.Deferred();
  xt.fn.ready = function(t) {
      return _t.then(t).catch(function(t) {
          xt.readyException(t)
      }),
      this
  }
  ,
  xt.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(t) {
          (!0 === t ? --xt.readyWait : xt.isReady) || (xt.isReady = !0,
          !0 !== t && --xt.readyWait > 0 || _t.resolveWith(ot, [xt]))
      }
  }),
  xt.ready.then = _t.then,
  "complete" === ot.readyState || "loading" !== ot.readyState && !ot.documentElement.doScroll ? t.setTimeout(xt.ready) : (ot.addEventListener("DOMContentLoaded", p),
  t.addEventListener("load", p));
  var Dt = function(t, e, n, r, a, o, s) {
      var l = 0
        , c = t.length
        , u = null == n;
      if ("object" === i(n)) {
          a = !0;
          for (l in n)
              Dt(t, e, l, n[l], !0, o, s)
      } else if (void 0 !== r && (a = !0,
      bt(r) || (s = !0),
      u && (s ? (e.call(t, r),
      e = null) : (u = e,
      e = function(t, e, n) {
          return u.call(xt(t), n)
      }
      )),
      e))
          for (; l < c; l++)
              e(t[l], n, s ? r : r.call(t[l], l, e(t[l], n)));
      return a ? t : u ? e.call(t) : c ? e(t[0], n) : o
  }
    , Lt = /^-ms-/
    , Rt = /-([a-z])/g
    , Vt = function(t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
  };
  m.uid = 1,
  m.prototype = {
      cache: function(t) {
          var e = t[this.expando];
          return e || (e = {},
          Vt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
              value: e,
              configurable: !0
          }))),
          e
      },
      set: function(t, e, n) {
          var i, r = this.cache(t);
          if ("string" == typeof e)
              r[h(e)] = n;
          else
              for (i in e)
                  r[h(i)] = e[i];
          return r
      },
      get: function(t, e) {
          return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][h(e)]
      },
      access: function(t, e, n) {
          return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n),
          void 0 !== n ? n : e)
      },
      remove: function(t, e) {
          var n, i = t[this.expando];
          if (void 0 !== i) {
              if (void 0 !== e) {
                  n = (e = Array.isArray(e) ? e.map(h) : (e = h(e))in i ? [e] : e.match(Mt) || []).length;
                  for (; n--; )
                      delete i[e[n]]
              }
              (void 0 === e || xt.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
          }
      },
      hasData: function(t) {
          var e = t[this.expando];
          return void 0 !== e && !xt.isEmptyObject(e)
      }
  };
  var Bt = new m
    , jt = new m
    , Ft = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
    , Ht = /[A-Z]/g;
  xt.extend({
      hasData: function(t) {
          return jt.hasData(t) || Bt.hasData(t)
      },
      data: function(t, e, n) {
          return jt.access(t, e, n)
      },
      removeData: function(t, e) {
          jt.remove(t, e)
      },
      _data: function(t, e, n) {
          return Bt.access(t, e, n)
      },
      _removeData: function(t, e) {
          Bt.remove(t, e)
      }
  }),
  xt.fn.extend({
      data: function(t, e) {
          var n, i, r, a = this[0], o = a && a.attributes;
          if (void 0 === t) {
              if (this.length && (r = jt.get(a),
              1 === a.nodeType && !Bt.get(a, "hasDataAttrs"))) {
                  for (n = o.length; n--; )
                      o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = h(i.slice(5)),
                      g(a, i, r[i]));
                  Bt.set(a, "hasDataAttrs", !0)
              }
              return r
          }
          return "object" == typeof t ? this.each(function() {
              jt.set(this, t)
          }) : Dt(this, function(e) {
              var n;
              if (a && void 0 === e) {
                  if (void 0 !== (n = jt.get(a, t)))
                      return n;
                  if (void 0 !== (n = g(a, t)))
                      return n
              } else
                  this.each(function() {
                      jt.set(this, t, e)
                  })
          }, null, e, arguments.length > 1, null, !0)
      },
      removeData: function(t) {
          return this.each(function() {
              jt.remove(this, t)
          })
      }
  }),
  xt.extend({
      queue: function(t, e, n) {
          var i;
          if (t)
              return e = (e || "fx") + "queue",
              i = Bt.get(t, e),
              n && (!i || Array.isArray(n) ? i = Bt.access(t, e, xt.makeArray(n)) : i.push(n)),
              i || []
      },
      dequeue: function(t, e) {
          e = e || "fx";
          var n = xt.queue(t, e)
            , i = n.length
            , r = n.shift()
            , a = xt._queueHooks(t, e)
            , o = function() {
              xt.dequeue(t, e)
          };
          "inprogress" === r && (r = n.shift(),
          i--),
          r && ("fx" === e && n.unshift("inprogress"),
          delete a.stop,
          r.call(t, o, a)),
          !i && a && a.empty.fire()
      },
      _queueHooks: function(t, e) {
          var n = e + "queueHooks";
          return Bt.get(t, n) || Bt.access(t, n, {
              empty: xt.Callbacks("once memory").add(function() {
                  Bt.remove(t, [e + "queue", n])
              })
          })
      }
  }),
  xt.fn.extend({
      queue: function(t, e) {
          var n = 2;
          return "string" != typeof t && (e = t,
          t = "fx",
          n--),
          arguments.length < n ? xt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
              var n = xt.queue(this, t, e);
              xt._queueHooks(this, t),
              "fx" === t && "inprogress" !== n[0] && xt.dequeue(this, t)
          })
      },
      dequeue: function(t) {
          return this.each(function() {
              xt.dequeue(this, t)
          })
      },
      clearQueue: function(t) {
          return this.queue(t || "fx", [])
      },
      promise: function(t, e) {
          var n, i = 1, r = xt.Deferred(), a = this, o = this.length, s = function() {
              --i || r.resolveWith(a, [a])
          };
          for ("string" != typeof t && (e = t,
          t = void 0),
          t = t || "fx"; o--; )
              (n = Bt.get(a[o], t + "queueHooks")) && n.empty && (i++,
              n.empty.add(s));
          return s(),
          r.promise(e)
      }
  });
  var Ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
    , Kt = new RegExp("^(?:([+-])=|)(" + Ut + ")([a-z%]*)$","i")
    , qt = ["Top", "Right", "Bottom", "Left"]
    , zt = function(t, e) {
      return "none" === (t = e || t).style.display || "" === t.style.display && xt.contains(t.ownerDocument, t) && "none" === xt.css(t, "display")
  }
    , Gt = function(t, e, n, i) {
      var r, a, o = {};
      for (a in e)
          o[a] = t.style[a],
          t.style[a] = e[a];
      r = n.apply(t, i || []);
      for (a in e)
          t.style[a] = o[a];
      return r
  }
    , Wt = {};
  xt.fn.extend({
      show: function() {
          return w(this, !0)
      },
      hide: function() {
          return w(this)
      },
      toggle: function(t) {
          return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
              zt(this) ? xt(this).show() : xt(this).hide()
          })
      }
  });
  var Jt = /^(?:checkbox|radio)$/i
    , Zt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
    , Xt = /^$|^module$|\/(?:java|ecma)script/i
    , Qt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
  };
  Qt.optgroup = Qt.option,
  Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead,
  Qt.th = Qt.td;
  var Yt = /<|&#?\w+;/;
  !function() {
      var t = ot.createDocumentFragment().appendChild(ot.createElement("div"))
        , e = ot.createElement("input");
      e.setAttribute("type", "radio"),
      e.setAttribute("checked", "checked"),
      e.setAttribute("name", "t"),
      t.appendChild(e),
      gt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
      t.innerHTML = "<textarea>x</textarea>",
      gt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
  }();
  var te = ot.documentElement
    , ee = /^key/
    , ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
    , ie = /^([^.]*)(?:\.(.+)|)/;
  xt.event = {
      global: {},
      add: function(t, e, n, i, r) {
          var a, o, s, l, c, u, d, p, f, h, m, v = Bt.get(t);
          if (v)
              for (n.handler && (n = (a = n).handler,
              r = a.selector),
              r && xt.find.matchesSelector(te, r),
              n.guid || (n.guid = xt.guid++),
              (l = v.events) || (l = v.events = {}),
              (o = v.handle) || (o = v.handle = function(e) {
                  return void 0 !== xt && xt.event.triggered !== e.type ? xt.event.dispatch.apply(t, arguments) : void 0
              }
              ),
              c = (e = (e || "").match(Mt) || [""]).length; c--; )
                  f = m = (s = ie.exec(e[c]) || [])[1],
                  h = (s[2] || "").split(".").sort(),
                  f && (d = xt.event.special[f] || {},
                  f = (r ? d.delegateType : d.bindType) || f,
                  d = xt.event.special[f] || {},
                  u = xt.extend({
                      type: f,
                      origType: m,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && xt.expr.match.needsContext.test(r),
                      namespace: h.join(".")
                  }, a),
                  (p = l[f]) || ((p = l[f] = []).delegateCount = 0,
                  d.setup && !1 !== d.setup.call(t, i, h, o) || t.addEventListener && t.addEventListener(f, o)),
                  d.add && (d.add.call(t, u),
                  u.handler.guid || (u.handler.guid = n.guid)),
                  r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                  xt.event.global[f] = !0)
      },
      remove: function(t, e, n, i, r) {
          var a, o, s, l, c, u, d, p, f, h, m, v = Bt.hasData(t) && Bt.get(t);
          if (v && (l = v.events)) {
              for (c = (e = (e || "").match(Mt) || [""]).length; c--; )
                  if (s = ie.exec(e[c]) || [],
                  f = m = s[1],
                  h = (s[2] || "").split(".").sort(),
                  f) {
                      for (d = xt.event.special[f] || {},
                      p = l[f = (i ? d.delegateType : d.bindType) || f] || [],
                      s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                      o = a = p.length; a--; )
                          u = p[a],
                          !r && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(a, 1),
                          u.selector && p.delegateCount--,
                          d.remove && d.remove.call(t, u));
                      o && !p.length && (d.teardown && !1 !== d.teardown.call(t, h, v.handle) || xt.removeEvent(t, f, v.handle),
                      delete l[f])
                  } else
                      for (f in l)
                          xt.event.remove(t, f + e[c], n, i, !0);
              xt.isEmptyObject(l) && Bt.remove(t, "handle events")
          }
      },
      dispatch: function(t) {
          var e, n, i, r, a, o, s = xt.event.fix(t), l = new Array(arguments.length), c = (Bt.get(this, "events") || {})[s.type] || [], u = xt.event.special[s.type] || {};
          for (l[0] = s,
          e = 1; e < arguments.length; e++)
              l[e] = arguments[e];
          if (s.delegateTarget = this,
          !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
              for (o = xt.event.handlers.call(this, s, c),
              e = 0; (r = o[e++]) && !s.isPropagationStopped(); )
                  for (s.currentTarget = r.elem,
                  n = 0; (a = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                      s.rnamespace && !s.rnamespace.test(a.namespace) || (s.handleObj = a,
                      s.data = a.data,
                      void 0 !== (i = ((xt.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(),
                      s.stopPropagation()));
              return u.postDispatch && u.postDispatch.call(this, s),
              s.result
          }
      },
      handlers: function(t, e) {
          var n, i, r, a, o, s = [], l = e.delegateCount, c = t.target;
          if (l && c.nodeType && !("click" === t.type && t.button >= 1))
              for (; c !== this; c = c.parentNode || this)
                  if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                      for (a = [],
                      o = {},
                      n = 0; n < l; n++)
                          void 0 === o[r = (i = e[n]).selector + " "] && (o[r] = i.needsContext ? xt(r, this).index(c) > -1 : xt.find(r, this, null, [c]).length),
                          o[r] && a.push(i);
                      a.length && s.push({
                          elem: c,
                          handlers: a
                      })
                  }
          return c = this,
          l < e.length && s.push({
              elem: c,
              handlers: e.slice(l)
          }),
          s
      },
      addProp: function(t, e) {
          Object.defineProperty(xt.Event.prototype, t, {
              enumerable: !0,
              configurable: !0,
              get: bt(e) ? function() {
                  if (this.originalEvent)
                      return e(this.originalEvent)
              }
              : function() {
                  if (this.originalEvent)
                      return this.originalEvent[t]
              }
              ,
              set: function(e) {
                  Object.defineProperty(this, t, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: e
                  })
              }
          })
      },
      fix: function(t) {
          return t[xt.expando] ? t : new xt.Event(t)
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  if (this !== k() && this.focus)
                      return this.focus(),
                      !1
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  if (this === k() && this.blur)
                      return this.blur(),
                      !1
              },
              delegateType: "focusout"
          },
          click: {
              trigger: function() {
                  if ("checkbox" === this.type && this.click && a(this, "input"))
                      return this.click(),
                      !1
              },
              _default: function(t) {
                  return a(t.target, "a")
              }
          },
          beforeunload: {
              postDispatch: function(t) {
                  void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
              }
          }
      }
  },
  xt.removeEvent = function(t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n)
  }
  ,
  xt.Event = function(t, e) {
      if (!(this instanceof xt.Event))
          return new xt.Event(t,e);
      t && t.type ? (this.originalEvent = t,
      this.type = t.type,
      this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? T : A,
      this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
      this.currentTarget = t.currentTarget,
      this.relatedTarget = t.relatedTarget) : this.type = t,
      e && xt.extend(this, e),
      this.timeStamp = t && t.timeStamp || Date.now(),
      this[xt.expando] = !0
  }
  ,
  xt.Event.prototype = {
      constructor: xt.Event,
      isDefaultPrevented: A,
      isPropagationStopped: A,
      isImmediatePropagationStopped: A,
      isSimulated: !1,
      preventDefault: function() {
          var t = this.originalEvent;
          this.isDefaultPrevented = T,
          t && !this.isSimulated && t.preventDefault()
      },
      stopPropagation: function() {
          var t = this.originalEvent;
          this.isPropagationStopped = T,
          t && !this.isSimulated && t.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var t = this.originalEvent;
          this.isImmediatePropagationStopped = T,
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation()
      }
  },
  xt.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(t) {
          var e = t.button;
          return null == t.which && ee.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && ne.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
      }
  }, xt.event.addProp),
  xt.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(t, e) {
      xt.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function(t) {
              var n, i = this, r = t.relatedTarget, a = t.handleObj;
              return r && (r === i || xt.contains(i, r)) || (t.type = a.origType,
              n = a.handler.apply(this, arguments),
              t.type = e),
              n
          }
      }
  }),
  xt.fn.extend({
      on: function(t, e, n, i) {
          return E(this, t, e, n, i)
      },
      one: function(t, e, n, i) {
          return E(this, t, e, n, i, 1)
      },
      off: function(t, e, n) {
          var i, r;
          if (t && t.preventDefault && t.handleObj)
              return i = t.handleObj,
              xt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
              this;
          if ("object" == typeof t) {
              for (r in t)
                  this.off(r, e, t[r]);
              return this
          }
          return !1 !== e && "function" != typeof e || (n = e,
          e = void 0),
          !1 === n && (n = A),
          this.each(function() {
              xt.event.remove(this, t, n, e)
          })
      }
  });
  var re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
    , ae = /<script|<style|<link/i
    , oe = /checked\s*(?:[^=]|=\s*.checked.)/i
    , se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  xt.extend({
      htmlPrefilter: function(t) {
          return t.replace(re, "<$1></$2>")
      },
      clone: function(t, e, n) {
          var i, r, a, o, s = t.cloneNode(!0), l = xt.contains(t.ownerDocument, t);
          if (!(gt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || xt.isXMLDoc(t)))
              for (o = x(s),
              i = 0,
              r = (a = x(t)).length; i < r; i++)
                  M(a[i], o[i]);
          if (e)
              if (n)
                  for (a = a || x(t),
                  o = o || x(s),
                  i = 0,
                  r = a.length; i < r; i++)
                      P(a[i], o[i]);
              else
                  P(t, s);
          return (o = x(s, "script")).length > 0 && S(o, !l && x(t, "script")),
          s
      },
      cleanData: function(t) {
          for (var e, n, i, r = xt.event.special, a = 0; void 0 !== (n = t[a]); a++)
              if (Vt(n)) {
                  if (e = n[Bt.expando]) {
                      if (e.events)
                          for (i in e.events)
                              r[i] ? xt.event.remove(n, i) : xt.removeEvent(n, i, e.handle);
                      n[Bt.expando] = void 0
                  }
                  n[jt.expando] && (n[jt.expando] = void 0)
              }
      }
  }),
  xt.fn.extend({
      detach: function(t) {
          return _(this, t, !0)
      },
      remove: function(t) {
          return _(this, t)
      },
      text: function(t) {
          return Dt(this, function(t) {
              return void 0 === t ? xt.text(this) : this.empty().each(function() {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
              })
          }, null, t, arguments.length)
      },
      append: function() {
          return $(this, arguments, function(t) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || I(this, t).appendChild(t)
          })
      },
      prepend: function() {
          return $(this, arguments, function(t) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var e = I(this, t);
                  e.insertBefore(t, e.firstChild)
              }
          })
      },
      before: function() {
          return $(this, arguments, function(t) {
              this.parentNode && this.parentNode.insertBefore(t, this)
          })
      },
      after: function() {
          return $(this, arguments, function(t) {
              this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
          })
      },
      empty: function() {
          for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType && (xt.cleanData(x(t, !1)),
              t.textContent = "");
          return this
      },
      clone: function(t, e) {
          return t = null != t && t,
          e = null == e ? t : e,
          this.map(function() {
              return xt.clone(this, t, e)
          })
      },
      html: function(t) {
          return Dt(this, function(t) {
              var e = this[0] || {}
                , n = 0
                , i = this.length;
              if (void 0 === t && 1 === e.nodeType)
                  return e.innerHTML;
              if ("string" == typeof t && !ae.test(t) && !Qt[(Zt.exec(t) || ["", ""])[1].toLowerCase()]) {
                  t = xt.htmlPrefilter(t);
                  try {
                      for (; n < i; n++)
                          1 === (e = this[n] || {}).nodeType && (xt.cleanData(x(e, !1)),
                          e.innerHTML = t);
                      e = 0
                  } catch (t) {}
              }
              e && this.empty().append(t)
          }, null, t, arguments.length)
      },
      replaceWith: function() {
          var t = [];
          return $(this, arguments, function(e) {
              var n = this.parentNode;
              xt.inArray(this, t) < 0 && (xt.cleanData(x(this)),
              n && n.replaceChild(e, this))
          }, t)
      }
  }),
  xt.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(t, e) {
      xt.fn[t] = function(t) {
          for (var n, i = [], r = xt(t), a = r.length - 1, o = 0; o <= a; o++)
              n = o === a ? this : this.clone(!0),
              xt(r[o])[e](n),
              ut.apply(i, n.get());
          return this.pushStack(i)
      }
  });
  var le = new RegExp("^(" + Ut + ")(?!px)[a-z%]+$","i")
    , ce = function(e) {
      var n = e.ownerDocument.defaultView;
      return n && n.opener || (n = t),
      n.getComputedStyle(e)
  }
    , ue = new RegExp(qt.join("|"),"i");
  !function() {
      function e() {
          if (c) {
              l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
              c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
              te.appendChild(l).appendChild(c);
              var e = t.getComputedStyle(c);
              i = "1%" !== e.top,
              s = 12 === n(e.marginLeft),
              c.style.right = "60%",
              o = 36 === n(e.right),
              r = 36 === n(e.width),
              c.style.position = "absolute",
              a = 36 === c.offsetWidth || "absolute",
              te.removeChild(l),
              c = null
          }
      }
      function n(t) {
          return Math.round(parseFloat(t))
      }
      var i, r, a, o, s, l = ot.createElement("div"), c = ot.createElement("div");
      c.style && (c.style.backgroundClip = "content-box",
      c.cloneNode(!0).style.backgroundClip = "",
      gt.clearCloneStyle = "content-box" === c.style.backgroundClip,
      xt.extend(gt, {
          boxSizingReliable: function() {
              return e(),
              r
          },
          pixelBoxStyles: function() {
              return e(),
              o
          },
          pixelPosition: function() {
              return e(),
              i
          },
          reliableMarginLeft: function() {
              return e(),
              s
          },
          scrollboxSize: function() {
              return e(),
              a
          }
      }))
  }();
  var de = /^(none|table(?!-c[ea]).+)/
    , pe = /^--/
    , fe = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
  }
    , he = {
      letterSpacing: "0",
      fontWeight: "400"
  }
    , me = ["Webkit", "Moz", "ms"]
    , ve = ot.createElement("div").style;
  xt.extend({
      cssHooks: {
          opacity: {
              get: function(t, e) {
                  if (e) {
                      var n = D(t, "opacity");
                      return "" === n ? "1" : n
                  }
              }
          }
      },
      cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {},
      style: function(t, e, n, i) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
              var r, a, o, s = h(e), l = pe.test(e), c = t.style;
              if (l || (e = V(s)),
              o = xt.cssHooks[e] || xt.cssHooks[s],
              void 0 === n)
                  return o && "get"in o && void 0 !== (r = o.get(t, !1, i)) ? r : c[e];
              "string" == (a = typeof n) && (r = Kt.exec(n)) && r[1] && (n = b(t, e, r),
              a = "number"),
              null != n && n === n && ("number" === a && (n += r && r[3] || (xt.cssNumber[s] ? "" : "px")),
              gt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"),
              o && "set"in o && void 0 === (n = o.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
          }
      },
      css: function(t, e, n, i) {
          var r, a, o, s = h(e);
          return pe.test(e) || (e = V(s)),
          (o = xt.cssHooks[e] || xt.cssHooks[s]) && "get"in o && (r = o.get(t, !0, n)),
          void 0 === r && (r = D(t, e, i)),
          "normal" === r && e in he && (r = he[e]),
          "" === n || n ? (a = parseFloat(r),
          !0 === n || isFinite(a) ? a || 0 : r) : r
      }
  }),
  xt.each(["height", "width"], function(t, e) {
      xt.cssHooks[e] = {
          get: function(t, n, i) {
              if (n)
                  return !de.test(xt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? F(t, e, i) : Gt(t, fe, function() {
                      return F(t, e, i)
                  })
          },
          set: function(t, n, i) {
              var r, a = ce(t), o = "border-box" === xt.css(t, "boxSizing", !1, a), s = i && j(t, e, i, o, a);
              return o && gt.scrollboxSize() === a.position && (s -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(a[e]) - j(t, e, "border", !1, a) - .5)),
              s && (r = Kt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n,
              n = xt.css(t, e)),
              B(t, n, s)
          }
      }
  }),
  xt.cssHooks.marginLeft = L(gt.reliableMarginLeft, function(t, e) {
      if (e)
          return (parseFloat(D(t, "marginLeft")) || t.getBoundingClientRect().left - Gt(t, {
              marginLeft: 0
          }, function() {
              return t.getBoundingClientRect().left
          })) + "px"
  }),
  xt.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(t, e) {
      xt.cssHooks[t + e] = {
          expand: function(n) {
              for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                  r[t + qt[i] + e] = a[i] || a[i - 2] || a[0];
              return r
          }
      },
      "margin" !== t && (xt.cssHooks[t + e].set = B)
  }),
  xt.fn.extend({
      css: function(t, e) {
          return Dt(this, function(t, e, n) {
              var i, r, a = {}, o = 0;
              if (Array.isArray(e)) {
                  for (i = ce(t),
                  r = e.length; o < r; o++)
                      a[e[o]] = xt.css(t, e[o], !1, i);
                  return a
              }
              return void 0 !== n ? xt.style(t, e, n) : xt.css(t, e)
          }, t, e, arguments.length > 1)
      }
  }),
  xt.Tween = H,
  H.prototype = {
      constructor: H,
      init: function(t, e, n, i, r, a) {
          this.elem = t,
          this.prop = n,
          this.easing = r || xt.easing._default,
          this.options = e,
          this.start = this.now = this.cur(),
          this.end = i,
          this.unit = a || (xt.cssNumber[n] ? "" : "px")
      },
      cur: function() {
          var t = H.propHooks[this.prop];
          return t && t.get ? t.get(this) : H.propHooks._default.get(this)
      },
      run: function(t) {
          var e, n = H.propHooks[this.prop];
          return this.options.duration ? this.pos = e = xt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
          this.now = (this.end - this.start) * e + this.start,
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : H.propHooks._default.set(this),
          this
      }
  },
  H.prototype.init.prototype = H.prototype,
  H.propHooks = {
      _default: {
          get: function(t) {
              var e;
              return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = xt.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
          },
          set: function(t) {
              xt.fx.step[t.prop] ? xt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[xt.cssProps[t.prop]] && !xt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : xt.style(t.elem, t.prop, t.now + t.unit)
          }
      }
  },
  H.propHooks.scrollTop = H.propHooks.scrollLeft = {
      set: function(t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
      }
  },
  xt.easing = {
      linear: function(t) {
          return t
      },
      swing: function(t) {
          return .5 - Math.cos(t * Math.PI) / 2
      },
      _default: "swing"
  },
  xt.fx = H.prototype.init,
  xt.fx.step = {};
  var ge, be, ye = /^(?:toggle|show|hide)$/, we = /queueHooks$/;
  xt.Animation = xt.extend(J, {
      tweeners: {
          "*": [function(t, e) {
              var n = this.createTween(t, e);
              return b(n.elem, t, Kt.exec(e), n),
              n
          }
          ]
      },
      tweener: function(t, e) {
          bt(t) ? (e = t,
          t = ["*"]) : t = t.match(Mt);
          for (var n, i = 0, r = t.length; i < r; i++)
              n = t[i],
              J.tweeners[n] = J.tweeners[n] || [],
              J.tweeners[n].unshift(e)
      },
      prefilters: [G],
      prefilter: function(t, e) {
          e ? J.prefilters.unshift(t) : J.prefilters.push(t)
      }
  }),
  xt.speed = function(t, e, n) {
      var i = t && "object" == typeof t ? xt.extend({}, t) : {
          complete: n || !n && e || bt(t) && t,
          duration: t,
          easing: n && e || e && !bt(e) && e
      };
      return xt.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in xt.fx.speeds ? i.duration = xt.fx.speeds[i.duration] : i.duration = xt.fx.speeds._default),
      null != i.queue && !0 !== i.queue || (i.queue = "fx"),
      i.old = i.complete,
      i.complete = function() {
          bt(i.old) && i.old.call(this),
          i.queue && xt.dequeue(this, i.queue)
      }
      ,
      i
  }
  ,
  xt.fn.extend({
      fadeTo: function(t, e, n, i) {
          return this.filter(zt).css("opacity", 0).show().end().animate({
              opacity: e
          }, t, n, i)
      },
      animate: function(t, e, n, i) {
          var r = xt.isEmptyObject(t)
            , a = xt.speed(e, n, i)
            , o = function() {
              var e = J(this, xt.extend({}, t), a);
              (r || Bt.get(this, "finish")) && e.stop(!0)
          };
          return o.finish = o,
          r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
      },
      stop: function(t, e, n) {
          var i = function(t) {
              var e = t.stop;
              delete t.stop,
              e(n)
          };
          return "string" != typeof t && (n = e,
          e = t,
          t = void 0),
          e && !1 !== t && this.queue(t || "fx", []),
          this.each(function() {
              var e = !0
                , r = null != t && t + "queueHooks"
                , a = xt.timers
                , o = Bt.get(this);
              if (r)
                  o[r] && o[r].stop && i(o[r]);
              else
                  for (r in o)
                      o[r] && o[r].stop && we.test(r) && i(o[r]);
              for (r = a.length; r--; )
                  a[r].elem !== this || null != t && a[r].queue !== t || (a[r].anim.stop(n),
                  e = !1,
                  a.splice(r, 1));
              !e && n || xt.dequeue(this, t)
          })
      },
      finish: function(t) {
          return !1 !== t && (t = t || "fx"),
          this.each(function() {
              var e, n = Bt.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], a = xt.timers, o = i ? i.length : 0;
              for (n.finish = !0,
              xt.queue(this, t, []),
              r && r.stop && r.stop.call(this, !0),
              e = a.length; e--; )
                  a[e].elem === this && a[e].queue === t && (a[e].anim.stop(!0),
                  a.splice(e, 1));
              for (e = 0; e < o; e++)
                  i[e] && i[e].finish && i[e].finish.call(this);
              delete n.finish
          })
      }
  }),
  xt.each(["toggle", "show", "hide"], function(t, e) {
      var n = xt.fn[e];
      xt.fn[e] = function(t, i, r) {
          return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(q(e, !0), t, i, r)
      }
  }),
  xt.each({
      slideDown: q("show"),
      slideUp: q("hide"),
      slideToggle: q("toggle"),
      fadeIn: {
          opacity: "show"
      },
      fadeOut: {
          opacity: "hide"
      },
      fadeToggle: {
          opacity: "toggle"
      }
  }, function(t, e) {
      xt.fn[t] = function(t, n, i) {
          return this.animate(e, t, n, i)
      }
  }),
  xt.timers = [],
  xt.fx.tick = function() {
      var t, e = 0, n = xt.timers;
      for (ge = Date.now(); e < n.length; e++)
          (t = n[e])() || n[e] !== t || n.splice(e--, 1);
      n.length || xt.fx.stop(),
      ge = void 0
  }
  ,
  xt.fx.timer = function(t) {
      xt.timers.push(t),
      xt.fx.start()
  }
  ,
  xt.fx.interval = 13,
  xt.fx.start = function() {
      be || (be = !0,
      U())
  }
  ,
  xt.fx.stop = function() {
      be = null
  }
  ,
  xt.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
  },
  xt.fn.delay = function(e, n) {
      return e = xt.fx ? xt.fx.speeds[e] || e : e,
      n = n || "fx",
      this.queue(n, function(n, i) {
          var r = t.setTimeout(n, e);
          i.stop = function() {
              t.clearTimeout(r)
          }
      })
  }
  ,
  function() {
      var t = ot.createElement("input")
        , e = ot.createElement("select").appendChild(ot.createElement("option"));
      t.type = "checkbox",
      gt.checkOn = "" !== t.value,
      gt.optSelected = e.selected,
      (t = ot.createElement("input")).value = "t",
      t.type = "radio",
      gt.radioValue = "t" === t.value
  }();
  var xe, Se = xt.expr.attrHandle;
  xt.fn.extend({
      attr: function(t, e) {
          return Dt(this, xt.attr, t, e, arguments.length > 1)
      },
      removeAttr: function(t) {
          return this.each(function() {
              xt.removeAttr(this, t)
          })
      }
  }),
  xt.extend({
      attr: function(t, e, n) {
          var i, r, a = t.nodeType;
          if (3 !== a && 8 !== a && 2 !== a)
              return void 0 === t.getAttribute ? xt.prop(t, e, n) : (1 === a && xt.isXMLDoc(t) || (r = xt.attrHooks[e.toLowerCase()] || (xt.expr.match.bool.test(e) ? xe : void 0)),
              void 0 !== n ? null === n ? void xt.removeAttr(t, e) : r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""),
              n) : r && "get"in r && null !== (i = r.get(t, e)) ? i : null == (i = xt.find.attr(t, e)) ? void 0 : i)
      },
      attrHooks: {
          type: {
              set: function(t, e) {
                  if (!gt.radioValue && "radio" === e && a(t, "input")) {
                      var n = t.value;
                      return t.setAttribute("type", e),
                      n && (t.value = n),
                      e
                  }
              }
          }
      },
      removeAttr: function(t, e) {
          var n, i = 0, r = e && e.match(Mt);
          if (r && 1 === t.nodeType)
              for (; n = r[i++]; )
                  t.removeAttribute(n)
      }
  }),
  xe = {
      set: function(t, e, n) {
          return !1 === e ? xt.removeAttr(t, n) : t.setAttribute(n, n),
          n
      }
  },
  xt.each(xt.expr.match.bool.source.match(/\w+/g), function(t, e) {
      var n = Se[e] || xt.find.attr;
      Se[e] = function(t, e, i) {
          var r, a, o = e.toLowerCase();
          return i || (a = Se[o],
          Se[o] = r,
          r = null != n(t, e, i) ? o : null,
          Se[o] = a),
          r
      }
  });
  var Ce = /^(?:input|select|textarea|button)$/i
    , Te = /^(?:a|area)$/i;
  xt.fn.extend({
      prop: function(t, e) {
          return Dt(this, xt.prop, t, e, arguments.length > 1)
      },
      removeProp: function(t) {
          return this.each(function() {
              delete this[xt.propFix[t] || t]
          })
      }
  }),
  xt.extend({
      prop: function(t, e, n) {
          var i, r, a = t.nodeType;
          if (3 !== a && 8 !== a && 2 !== a)
              return 1 === a && xt.isXMLDoc(t) || (e = xt.propFix[e] || e,
              r = xt.propHooks[e]),
              void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]
      },
      propHooks: {
          tabIndex: {
              get: function(t) {
                  var e = xt.find.attr(t, "tabindex");
                  return e ? parseInt(e, 10) : Ce.test(t.nodeName) || Te.test(t.nodeName) && t.href ? 0 : -1
              }
          }
      },
      propFix: {
          for: "htmlFor",
          class: "className"
      }
  }),
  gt.optSelected || (xt.propHooks.selected = {
      get: function(t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex,
          null
      },
      set: function(t) {
          var e = t.parentNode;
          e && (e.selectedIndex,
          e.parentNode && e.parentNode.selectedIndex)
      }
  }),
  xt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      xt.propFix[this.toLowerCase()] = this
  }),
  xt.fn.extend({
      addClass: function(t) {
          var e, n, i, r, a, o, s, l = 0;
          if (bt(t))
              return this.each(function(e) {
                  xt(this).addClass(t.call(this, e, X(this)))
              });
          if ((e = Q(t)).length)
              for (; n = this[l++]; )
                  if (r = X(n),
                  i = 1 === n.nodeType && " " + Z(r) + " ") {
                      for (o = 0; a = e[o++]; )
                          i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                      r !== (s = Z(i)) && n.setAttribute("class", s)
                  }
          return this
      },
      removeClass: function(t) {
          var e, n, i, r, a, o, s, l = 0;
          if (bt(t))
              return this.each(function(e) {
                  xt(this).removeClass(t.call(this, e, X(this)))
              });
          if (!arguments.length)
              return this.attr("class", "");
          if ((e = Q(t)).length)
              for (; n = this[l++]; )
                  if (r = X(n),
                  i = 1 === n.nodeType && " " + Z(r) + " ") {
                      for (o = 0; a = e[o++]; )
                          for (; i.indexOf(" " + a + " ") > -1; )
                              i = i.replace(" " + a + " ", " ");
                      r !== (s = Z(i)) && n.setAttribute("class", s)
                  }
          return this
      },
      toggleClass: function(t, e) {
          var n = typeof t
            , i = "string" === n || Array.isArray(t);
          return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : bt(t) ? this.each(function(n) {
              xt(this).toggleClass(t.call(this, n, X(this), e), e)
          }) : this.each(function() {
              var e, r, a, o;
              if (i)
                  for (r = 0,
                  a = xt(this),
                  o = Q(t); e = o[r++]; )
                      a.hasClass(e) ? a.removeClass(e) : a.addClass(e);
              else
                  void 0 !== t && "boolean" !== n || ((e = X(this)) && Bt.set(this, "__className__", e),
                  this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Bt.get(this, "__className__") || ""))
          })
      },
      hasClass: function(t) {
          var e, n, i = 0;
          for (e = " " + t + " "; n = this[i++]; )
              if (1 === n.nodeType && (" " + Z(X(n)) + " ").indexOf(e) > -1)
                  return !0;
          return !1
      }
  });
  var Ae = /\r/g;
  xt.fn.extend({
      val: function(t) {
          var e, n, i, r = this[0];
          return arguments.length ? (i = bt(t),
          this.each(function(n) {
              var r;
              1 === this.nodeType && (null == (r = i ? t.call(this, n, xt(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = xt.map(r, function(t) {
                  return null == t ? "" : t + ""
              })),
              (e = xt.valHooks[this.type] || xt.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
          })) : r ? (e = xt.valHooks[r.type] || xt.valHooks[r.nodeName.toLowerCase()]) && "get"in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(Ae, "") : null == n ? "" : n : void 0
      }
  }),
  xt.extend({
      valHooks: {
          option: {
              get: function(t) {
                  var e = xt.find.attr(t, "value");
                  return null != e ? e : Z(xt.text(t))
              }
          },
          select: {
              get: function(t) {
                  var e, n, i, r = t.options, o = t.selectedIndex, s = "select-one" === t.type, l = s ? null : [], c = s ? o + 1 : r.length;
                  for (i = o < 0 ? c : s ? o : 0; i < c; i++)
                      if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !a(n.parentNode, "optgroup"))) {
                          if (e = xt(n).val(),
                          s)
                              return e;
                          l.push(e)
                      }
                  return l
              },
              set: function(t, e) {
                  for (var n, i, r = t.options, a = xt.makeArray(e), o = r.length; o--; )
                      ((i = r[o]).selected = xt.inArray(xt.valHooks.option.get(i), a) > -1) && (n = !0);
                  return n || (t.selectedIndex = -1),
                  a
              }
          }
      }
  }),
  xt.each(["radio", "checkbox"], function() {
      xt.valHooks[this] = {
          set: function(t, e) {
              if (Array.isArray(e))
                  return t.checked = xt.inArray(xt(t).val(), e) > -1
          }
      },
      gt.checkOn || (xt.valHooks[this].get = function(t) {
          return null === t.getAttribute("value") ? "on" : t.value
      }
      )
  }),
  gt.focusin = "onfocusin"in t;
  var ke = /^(?:focusinfocus|focusoutblur)$/
    , Ee = function(t) {
      t.stopPropagation()
  };
  xt.extend(xt.event, {
      trigger: function(e, n, i, r) {
          var a, o, s, l, c, u, d, p, f = [i || ot], h = ht.call(e, "type") ? e.type : e, m = ht.call(e, "namespace") ? e.namespace.split(".") : [];
          if (o = p = s = i = i || ot,
          3 !== i.nodeType && 8 !== i.nodeType && !ke.test(h + xt.event.triggered) && (h.indexOf(".") > -1 && (h = (m = h.split(".")).shift(),
          m.sort()),
          c = h.indexOf(":") < 0 && "on" + h,
          e = e[xt.expando] ? e : new xt.Event(h,"object" == typeof e && e),
          e.isTrigger = r ? 2 : 3,
          e.namespace = m.join("."),
          e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
          e.result = void 0,
          e.target || (e.target = i),
          n = null == n ? [e] : xt.makeArray(n, [e]),
          d = xt.event.special[h] || {},
          r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
              if (!r && !d.noBubble && !yt(i)) {
                  for (l = d.delegateType || h,
                  ke.test(l + h) || (o = o.parentNode); o; o = o.parentNode)
                      f.push(o),
                      s = o;
                  s === (i.ownerDocument || ot) && f.push(s.defaultView || s.parentWindow || t)
              }
              for (a = 0; (o = f[a++]) && !e.isPropagationStopped(); )
                  p = o,
                  e.type = a > 1 ? l : d.bindType || h,
                  (u = (Bt.get(o, "events") || {})[e.type] && Bt.get(o, "handle")) && u.apply(o, n),
                  (u = c && o[c]) && u.apply && Vt(o) && (e.result = u.apply(o, n),
                  !1 === e.result && e.preventDefault());
              return e.type = h,
              r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !Vt(i) || c && bt(i[h]) && !yt(i) && ((s = i[c]) && (i[c] = null),
              xt.event.triggered = h,
              e.isPropagationStopped() && p.addEventListener(h, Ee),
              i[h](),
              e.isPropagationStopped() && p.removeEventListener(h, Ee),
              xt.event.triggered = void 0,
              s && (i[c] = s)),
              e.result
          }
      },
      simulate: function(t, e, n) {
          var i = xt.extend(new xt.Event, n, {
              type: t,
              isSimulated: !0
          });
          xt.event.trigger(i, null, e)
      }
  }),
  xt.fn.extend({
      trigger: function(t, e) {
          return this.each(function() {
              xt.event.trigger(t, e, this)
          })
      },
      triggerHandler: function(t, e) {
          var n = this[0];
          if (n)
              return xt.event.trigger(t, e, n, !0)
      }
  }),
  gt.focusin || xt.each({
      focus: "focusin",
      blur: "focusout"
  }, function(t, e) {
      var n = function(t) {
          xt.event.simulate(e, t.target, xt.event.fix(t))
      };
      xt.event.special[e] = {
          setup: function() {
              var i = this.ownerDocument || this
                , r = Bt.access(i, e);
              r || i.addEventListener(t, n, !0),
              Bt.access(i, e, (r || 0) + 1)
          },
          teardown: function() {
              var i = this.ownerDocument || this
                , r = Bt.access(i, e) - 1;
              r ? Bt.access(i, e, r) : (i.removeEventListener(t, n, !0),
              Bt.remove(i, e))
          }
      }
  });
  var Ie = t.location
    , Ne = Date.now()
    , Oe = /\?/;
  xt.parseXML = function(e) {
      var n;
      if (!e || "string" != typeof e)
          return null;
      try {
          n = (new t.DOMParser).parseFromString(e, "text/xml")
      } catch (t) {
          n = void 0
      }
      return n && !n.getElementsByTagName("parsererror").length || xt.error("Invalid XML: " + e),
      n
  }
  ;
  var Pe = /\[\]$/
    , Me = /\r?\n/g
    , $e = /^(?:submit|button|image|reset|file)$/i
    , _e = /^(?:input|select|textarea|keygen)/i;
  xt.param = function(t, e) {
      var n, i = [], r = function(t, e) {
          var n = bt(e) ? e() : e;
          i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
      };
      if (Array.isArray(t) || t.jquery && !xt.isPlainObject(t))
          xt.each(t, function() {
              r(this.name, this.value)
          });
      else
          for (n in t)
              Y(n, t[n], e, r);
      return i.join("&")
  }
  ,
  xt.fn.extend({
      serialize: function() {
          return xt.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var t = xt.prop(this, "elements");
              return t ? xt.makeArray(t) : this
          }).filter(function() {
              var t = this.type;
              return this.name && !xt(this).is(":disabled") && _e.test(this.nodeName) && !$e.test(t) && (this.checked || !Jt.test(t))
          }).map(function(t, e) {
              var n = xt(this).val();
              return null == n ? null : Array.isArray(n) ? xt.map(n, function(t) {
                  return {
                      name: e.name,
                      value: t.replace(Me, "\r\n")
                  }
              }) : {
                  name: e.name,
                  value: n.replace(Me, "\r\n")
              }
          }).get()
      }
  });
  var De = /%20/g
    , Le = /#.*$/
    , Re = /([?&])_=[^&]*/
    , Ve = /^(.*?):[ \t]*([^\r\n]*)$/gm
    , Be = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
    , je = /^(?:GET|HEAD)$/
    , Fe = /^\/\//
    , He = {}
    , Ue = {}
    , Ke = "*/".concat("*")
    , qe = ot.createElement("a");
  qe.href = Ie.href,
  xt.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: Ie.href,
          type: "GET",
          isLocal: Be.test(Ie.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": Ke,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": xt.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(t, e) {
          return e ? nt(nt(t, xt.ajaxSettings), e) : nt(xt.ajaxSettings, t)
      },
      ajaxPrefilter: tt(He),
      ajaxTransport: tt(Ue),
      ajax: function(e, n) {
          function i(e, n, i, s) {
              var c, p, f, w, x, S = n;
              u || (u = !0,
              l && t.clearTimeout(l),
              r = void 0,
              o = s || "",
              C.readyState = e > 0 ? 4 : 0,
              c = e >= 200 && e < 300 || 304 === e,
              i && (w = it(h, C, i)),
              w = rt(h, w, C, c),
              c ? (h.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (xt.lastModified[a] = x),
              (x = C.getResponseHeader("etag")) && (xt.etag[a] = x)),
              204 === e || "HEAD" === h.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = w.state,
              p = w.data,
              c = !(f = w.error))) : (f = S,
              !e && S || (S = "error",
              e < 0 && (e = 0))),
              C.status = e,
              C.statusText = (n || S) + "",
              c ? g.resolveWith(m, [p, S, C]) : g.rejectWith(m, [C, S, f]),
              C.statusCode(y),
              y = void 0,
              d && v.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? p : f]),
              b.fireWith(m, [C, S]),
              d && (v.trigger("ajaxComplete", [C, h]),
              --xt.active || xt.event.trigger("ajaxStop")))
          }
          "object" == typeof e && (n = e,
          e = void 0),
          n = n || {};
          var r, a, o, s, l, c, u, d, p, f, h = xt.ajaxSetup({}, n), m = h.context || h, v = h.context && (m.nodeType || m.jquery) ? xt(m) : xt.event, g = xt.Deferred(), b = xt.Callbacks("once memory"), y = h.statusCode || {}, w = {}, x = {}, S = "canceled", C = {
              readyState: 0,
              getResponseHeader: function(t) {
                  var e;
                  if (u) {
                      if (!s)
                          for (s = {}; e = Ve.exec(o); )
                              s[e[1].toLowerCase()] = e[2];
                      e = s[t.toLowerCase()]
                  }
                  return null == e ? null : e
              },
              getAllResponseHeaders: function() {
                  return u ? o : null
              },
              setRequestHeader: function(t, e) {
                  return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t,
                  w[t] = e),
                  this
              },
              overrideMimeType: function(t) {
                  return null == u && (h.mimeType = t),
                  this
              },
              statusCode: function(t) {
                  var e;
                  if (t)
                      if (u)
                          C.always(t[C.status]);
                      else
                          for (e in t)
                              y[e] = [y[e], t[e]];
                  return this
              },
              abort: function(t) {
                  var e = t || S;
                  return r && r.abort(e),
                  i(0, e),
                  this
              }
          };
          if (g.promise(C),
          h.url = ((e || h.url || Ie.href) + "").replace(Fe, Ie.protocol + "//"),
          h.type = n.method || n.type || h.method || h.type,
          h.dataTypes = (h.dataType || "*").toLowerCase().match(Mt) || [""],
          null == h.crossDomain) {
              c = ot.createElement("a");
              try {
                  c.href = h.url,
                  c.href = c.href,
                  h.crossDomain = qe.protocol + "//" + qe.host != c.protocol + "//" + c.host
              } catch (t) {
                  h.crossDomain = !0
              }
          }
          if (h.data && h.processData && "string" != typeof h.data && (h.data = xt.param(h.data, h.traditional)),
          et(He, h, n, C),
          u)
              return C;
          (d = xt.event && h.global) && 0 == xt.active++ && xt.event.trigger("ajaxStart"),
          h.type = h.type.toUpperCase(),
          h.hasContent = !je.test(h.type),
          a = h.url.replace(Le, ""),
          h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(De, "+")) : (f = h.url.slice(a.length),
          h.data && (h.processData || "string" == typeof h.data) && (a += (Oe.test(a) ? "&" : "?") + h.data,
          delete h.data),
          !1 === h.cache && (a = a.replace(Re, "$1"),
          f = (Oe.test(a) ? "&" : "?") + "_=" + Ne++ + f),
          h.url = a + f),
          h.ifModified && (xt.lastModified[a] && C.setRequestHeader("If-Modified-Since", xt.lastModified[a]),
          xt.etag[a] && C.setRequestHeader("If-None-Match", xt.etag[a])),
          (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType),
          C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ke + "; q=0.01" : "") : h.accepts["*"]);
          for (p in h.headers)
              C.setRequestHeader(p, h.headers[p]);
          if (h.beforeSend && (!1 === h.beforeSend.call(m, C, h) || u))
              return C.abort();
          if (S = "abort",
          b.add(h.complete),
          C.done(h.success),
          C.fail(h.error),
          r = et(Ue, h, n, C)) {
              if (C.readyState = 1,
              d && v.trigger("ajaxSend", [C, h]),
              u)
                  return C;
              h.async && h.timeout > 0 && (l = t.setTimeout(function() {
                  C.abort("timeout")
              }, h.timeout));
              try {
                  u = !1,
                  r.send(w, i)
              } catch (t) {
                  if (u)
                      throw t;
                  i(-1, t)
              }
          } else
              i(-1, "No Transport");
          return C
      },
      getJSON: function(t, e, n) {
          return xt.get(t, e, n, "json")
      },
      getScript: function(t, e) {
          return xt.get(t, void 0, e, "script")
      }
  }),
  xt.each(["get", "post"], function(t, e) {
      xt[e] = function(t, n, i, r) {
          return bt(n) && (r = r || i,
          i = n,
          n = void 0),
          xt.ajax(xt.extend({
              url: t,
              type: e,
              dataType: r,
              data: n,
              success: i
          }, xt.isPlainObject(t) && t))
      }
  }),
  xt._evalUrl = function(t) {
      return xt.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0
      })
  }
  ,
  xt.fn.extend({
      wrapAll: function(t) {
          var e;
          return this[0] && (bt(t) && (t = t.call(this[0])),
          e = xt(t, this[0].ownerDocument).eq(0).clone(!0),
          this[0].parentNode && e.insertBefore(this[0]),
          e.map(function() {
              for (var t = this; t.firstElementChild; )
                  t = t.firstElementChild;
              return t
          }).append(this)),
          this
      },
      wrapInner: function(t) {
          return bt(t) ? this.each(function(e) {
              xt(this).wrapInner(t.call(this, e))
          }) : this.each(function() {
              var e = xt(this)
                , n = e.contents();
              n.length ? n.wrapAll(t) : e.append(t)
          })
      },
      wrap: function(t) {
          var e = bt(t);
          return this.each(function(n) {
              xt(this).wrapAll(e ? t.call(this, n) : t)
          })
      },
      unwrap: function(t) {
          return this.parent(t).not("body").each(function() {
              xt(this).replaceWith(this.childNodes)
          }),
          this
      }
  }),
  xt.expr.pseudos.hidden = function(t) {
      return !xt.expr.pseudos.visible(t)
  }
  ,
  xt.expr.pseudos.visible = function(t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
  }
  ,
  xt.ajaxSettings.xhr = function() {
      try {
          return new t.XMLHttpRequest
      } catch (t) {}
  }
  ;
  var ze = {
      0: 200,
      1223: 204
  }
    , Ge = xt.ajaxSettings.xhr();
  gt.cors = !!Ge && "withCredentials"in Ge,
  gt.ajax = Ge = !!Ge,
  xt.ajaxTransport(function(e) {
      var n, i;
      if (gt.cors || Ge && !e.crossDomain)
          return {
              send: function(r, a) {
                  var o, s = e.xhr();
                  if (s.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                      for (o in e.xhrFields)
                          s[o] = e.xhrFields[o];
                  e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                  e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                  for (o in r)
                      s.setRequestHeader(o, r[o]);
                  n = function(t) {
                      return function() {
                          n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                          "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(ze[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                              binary: s.response
                          } : {
                              text: s.responseText
                          }, s.getAllResponseHeaders()))
                      }
                  }
                  ,
                  s.onload = n(),
                  i = s.onerror = s.ontimeout = n("error"),
                  void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                      4 === s.readyState && t.setTimeout(function() {
                          n && i()
                      })
                  }
                  ,
                  n = n("abort");
                  try {
                      s.send(e.hasContent && e.data || null)
                  } catch (t) {
                      if (n)
                          throw t
                  }
              },
              abort: function() {
                  n && n()
              }
          }
  }),
  xt.ajaxPrefilter(function(t) {
      t.crossDomain && (t.contents.script = !1)
  }),
  xt.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /\b(?:java|ecma)script\b/
      },
      converters: {
          "text script": function(t) {
              return xt.globalEval(t),
              t
          }
      }
  }),
  xt.ajaxPrefilter("script", function(t) {
      void 0 === t.cache && (t.cache = !1),
      t.crossDomain && (t.type = "GET")
  }),
  xt.ajaxTransport("script", function(t) {
      if (t.crossDomain) {
          var e, n;
          return {
              send: function(i, r) {
                  e = xt("<script>").prop({
                      charset: t.scriptCharset,
                      src: t.url
                  }).on("load error", n = function(t) {
                      e.remove(),
                      n = null,
                      t && r("error" === t.type ? 404 : 200, t.type)
                  }
                  ),
                  ot.head.appendChild(e[0])
              },
              abort: function() {
                  n && n()
              }
          }
      }
  });
  var We = []
    , Je = /(=)\?(?=&|$)|\?\?/;
  xt.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var t = We.pop() || xt.expando + "_" + Ne++;
          return this[t] = !0,
          t
      }
  }),
  xt.ajaxPrefilter("json jsonp", function(e, n, i) {
      var r, a, o, s = !1 !== e.jsonp && (Je.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Je.test(e.data) && "data");
      if (s || "jsonp" === e.dataTypes[0])
          return r = e.jsonpCallback = bt(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
          s ? e[s] = e[s].replace(Je, "$1" + r) : !1 !== e.jsonp && (e.url += (Oe.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          e.converters["script json"] = function() {
              return o || xt.error(r + " was not called"),
              o[0]
          }
          ,
          e.dataTypes[0] = "json",
          a = t[r],
          t[r] = function() {
              o = arguments
          }
          ,
          i.always(function() {
              void 0 === a ? xt(t).removeProp(r) : t[r] = a,
              e[r] && (e.jsonpCallback = n.jsonpCallback,
              We.push(r)),
              o && bt(a) && a(o[0]),
              o = a = void 0
          }),
          "script"
  }),
  gt.createHTMLDocument = function() {
      var t = ot.implementation.createHTMLDocument("").body;
      return t.innerHTML = "<form></form><form></form>",
      2 === t.childNodes.length
  }(),
  xt.parseHTML = function(t, e, n) {
      if ("string" != typeof t)
          return [];
      "boolean" == typeof e && (n = e,
      e = !1);
      var i, r, a;
      return e || (gt.createHTMLDocument ? ((i = (e = ot.implementation.createHTMLDocument("")).createElement("base")).href = ot.location.href,
      e.head.appendChild(i)) : e = ot),
      r = Et.exec(t),
      a = !n && [],
      r ? [e.createElement(r[1])] : (r = C([t], e, a),
      a && a.length && xt(a).remove(),
      xt.merge([], r.childNodes))
  }
  ,
  xt.fn.load = function(t, e, n) {
      var i, r, a, o = this, s = t.indexOf(" ");
      return s > -1 && (i = Z(t.slice(s)),
      t = t.slice(0, s)),
      bt(e) ? (n = e,
      e = void 0) : e && "object" == typeof e && (r = "POST"),
      o.length > 0 && xt.ajax({
          url: t,
          type: r || "GET",
          dataType: "html",
          data: e
      }).done(function(t) {
          a = arguments,
          o.html(i ? xt("<div>").append(xt.parseHTML(t)).find(i) : t)
      }).always(n && function(t, e) {
          o.each(function() {
              n.apply(this, a || [t.responseText, e, t])
          })
      }
      ),
      this
  }
  ,
  xt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
      xt.fn[e] = function(t) {
          return this.on(e, t)
      }
  }),
  xt.expr.pseudos.animated = function(t) {
      return xt.grep(xt.timers, function(e) {
          return t === e.elem
      }).length
  }
  ,
  xt.offset = {
      setOffset: function(t, e, n) {
          var i, r, a, o, s, l, c = xt.css(t, "position"), u = xt(t), d = {};
          "static" === c && (t.style.position = "relative"),
          s = u.offset(),
          a = xt.css(t, "top"),
          l = xt.css(t, "left"),
          ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1 ? (o = (i = u.position()).top,
          r = i.left) : (o = parseFloat(a) || 0,
          r = parseFloat(l) || 0),
          bt(e) && (e = e.call(t, n, xt.extend({}, s))),
          null != e.top && (d.top = e.top - s.top + o),
          null != e.left && (d.left = e.left - s.left + r),
          "using"in e ? e.using.call(t, d) : u.css(d)
      }
  },
  xt.fn.extend({
      offset: function(t) {
          if (arguments.length)
              return void 0 === t ? this : this.each(function(e) {
                  xt.offset.setOffset(this, t, e)
              });
          var e, n, i = this[0];
          return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(),
          n = i.ownerDocument.defaultView,
          {
              top: e.top + n.pageYOffset,
              left: e.left + n.pageXOffset
          }) : {
              top: 0,
              left: 0
          } : void 0
      },
      position: function() {
          if (this[0]) {
              var t, e, n, i = this[0], r = {
                  top: 0,
                  left: 0
              };
              if ("fixed" === xt.css(i, "position"))
                  e = i.getBoundingClientRect();
              else {
                  for (e = this.offset(),
                  n = i.ownerDocument,
                  t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === xt.css(t, "position"); )
                      t = t.parentNode;
                  t && t !== i && 1 === t.nodeType && ((r = xt(t).offset()).top += xt.css(t, "borderTopWidth", !0),
                  r.left += xt.css(t, "borderLeftWidth", !0))
              }
              return {
                  top: e.top - r.top - xt.css(i, "marginTop", !0),
                  left: e.left - r.left - xt.css(i, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              for (var t = this.offsetParent; t && "static" === xt.css(t, "position"); )
                  t = t.offsetParent;
              return t || te
          })
      }
  }),
  xt.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(t, e) {
      var n = "pageYOffset" === e;
      xt.fn[t] = function(i) {
          return Dt(this, function(t, i, r) {
              var a;
              if (yt(t) ? a = t : 9 === t.nodeType && (a = t.defaultView),
              void 0 === r)
                  return a ? a[e] : t[i];
              a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : t[i] = r
          }, t, i, arguments.length)
      }
  }),
  xt.each(["top", "left"], function(t, e) {
      xt.cssHooks[e] = L(gt.pixelPosition, function(t, n) {
          if (n)
              return n = D(t, e),
              le.test(n) ? xt(t).position()[e] + "px" : n
      })
  }),
  xt.each({
      Height: "height",
      Width: "width"
  }, function(t, e) {
      xt.each({
          padding: "inner" + t,
          content: e,
          "": "outer" + t
      }, function(n, i) {
          xt.fn[i] = function(r, a) {
              var o = arguments.length && (n || "boolean" != typeof r)
                , s = n || (!0 === r || !0 === a ? "margin" : "border");
              return Dt(this, function(e, n, r) {
                  var a;
                  return yt(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (a = e.documentElement,
                  Math.max(e.body["scroll" + t], a["scroll" + t], e.body["offset" + t], a["offset" + t], a["client" + t])) : void 0 === r ? xt.css(e, n, s) : xt.style(e, n, r, s)
              }, e, o ? r : void 0, o)
          }
      })
  }),
  xt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
      xt.fn[e] = function(t, n) {
          return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
      }
  }),
  xt.fn.extend({
      hover: function(t, e) {
          return this.mouseenter(t).mouseleave(e || t)
      }
  }),
  xt.fn.extend({
      bind: function(t, e, n) {
          return this.on(t, null, e, n)
      },
      unbind: function(t, e) {
          return this.off(t, null, e)
      },
      delegate: function(t, e, n, i) {
          return this.on(e, t, n, i)
      },
      undelegate: function(t, e, n) {
          return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
      }
  }),
  xt.proxy = function(t, e) {
      var n, i, r;
      if ("string" == typeof e && (n = t[e],
      e = t,
      t = n),
      bt(t))
          return i = lt.call(arguments, 2),
          r = function() {
              return t.apply(e || this, i.concat(lt.call(arguments)))
          }
          ,
          r.guid = t.guid = t.guid || xt.guid++,
          r
  }
  ,
  xt.holdReady = function(t) {
      t ? xt.readyWait++ : xt.ready(!0)
  }
  ,
  xt.isArray = Array.isArray,
  xt.parseJSON = JSON.parse,
  xt.nodeName = a,
  xt.isFunction = bt,
  xt.isWindow = yt,
  xt.camelCase = h,
  xt.type = i,
  xt.now = Date.now,
  xt.isNumeric = function(t) {
      var e = xt.type(t);
      return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
  }
  ,
  "function" == typeof define && define.amd && define("jquery", [], function() {
      return xt
  });
  var Ze = t.jQuery
    , Xe = t.$;
  return xt.noConflict = function(e) {
      return t.$ === xt && (t.$ = Xe),
      e && t.jQuery === xt && (t.jQuery = Ze),
      xt
  }
  ,
  e || (t.jQuery = t.$ = xt),
  xt
}),
"undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
if (+function(t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)
      throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery),
function(t) {
  "use strict";
  function e() {
      var t = document.createElement("bootstrap")
        , e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
      };
      for (var n in e)
          if (void 0 !== t.style[n])
              return {
                  end: e[n]
              };
      return !1
  }
  t.fn.emulateTransitionEnd = function(e) {
      var n = !1
        , i = this;
      t(this).one("bsTransitionEnd", function() {
          n = !0
      });
      var r = function() {
          n || t(i).trigger(t.support.transition.end)
      };
      return setTimeout(r, e),
      this
  }
  ,
  t(function() {
      t.support.transition = e(),
      t.support.transition && (t.event.special.bsTransitionEnd = {
          bindType: t.support.transition.end,
          delegateType: t.support.transition.end,
          handle: function(e) {
              return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
          }
      })
  })
}(jQuery),
function(t) {
  "use strict";
  function e(e) {
      return this.each(function() {
          var n = t(this)
            , r = n.data("bs.alert");
          r || n.data("bs.alert", r = new i(this)),
          "string" == typeof e && r[e].call(n)
      })
  }
  var n = '[data-dismiss="alert"]'
    , i = function(e) {
      t(e).on("click", n, this.close)
  };
  i.VERSION = "3.3.5",
  i.TRANSITION_DURATION = 150,
  i.prototype.close = function(e) {
      function n() {
          o.detach().trigger("closed.bs.alert").remove()
      }
      var r = t(this)
        , a = r.attr("data-target");
      a || (a = r.attr("href"),
      a = a && a.replace(/.*(?=#[^\s]*$)/, ""));
      var o = t(a);
      e && e.preventDefault(),
      o.length || (o = r.closest(".alert")),
      o.trigger(e = t.Event("close.bs.alert")),
      e.isDefaultPrevented() || (o.removeClass("in"),
      t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
  }
  ;
  var r = t.fn.alert;
  t.fn.alert = e,
  t.fn.alert.Constructor = i,
  t.fn.alert.noConflict = function() {
      return t.fn.alert = r,
      this
  }
  ,
  t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
function(t) {
  "use strict";
  function e(e) {
      return this.each(function() {
          var i = t(this)
            , r = i.data("bs.button")
            , a = "object" == typeof e && e;
          r || i.data("bs.button", r = new n(this,a)),
          "toggle" == e ? r.toggle() : e && r.setState(e)
      })
  }
  var n = function(e, i) {
      this.$element = t(e),
      this.options = t.extend({}, n.DEFAULTS, i),
      this.isLoading = !1
  };
  n.VERSION = "3.3.5",
  n.DEFAULTS = {
      loadingText: "loading..."
  },
  n.prototype.setState = function(e) {
      var n = "disabled"
        , i = this.$element
        , r = i.is("input") ? "val" : "html"
        , a = i.data();
      e += "Text",
      null == a.resetText && i.data("resetText", i[r]()),
      setTimeout(t.proxy(function() {
          i[r](null == a[e] ? this.options[e] : a[e]),
          "loadingText" == e ? (this.isLoading = !0,
          i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1,
          i.removeClass(n).removeAttr(n))
      }, this), 0)
  }
  ,
  n.prototype.toggle = function() {
      var t = !0
        , e = this.$element.closest('[data-toggle="buttons"]');
      if (e.length) {
          var n = this.$element.find("input");
          "radio" == n.prop("type") ? (n.prop("checked") && (t = !1),
          e.find(".active").removeClass("active"),
          this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1),
          this.$element.toggleClass("active")),
          n.prop("checked", this.$element.hasClass("active")),
          t && n.trigger("change")
      } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
          this.$element.toggleClass("active")
  }
  ;
  var i = t.fn.button;
  t.fn.button = e,
  t.fn.button.Constructor = n,
  t.fn.button.noConflict = function() {
      return t.fn.button = i,
      this
  }
  ,
  t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
      var i = t(n.target);
      i.hasClass("btn") || (i = i.closest(".btn")),
      e.call(i, "toggle"),
      t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
      t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
  })
}(jQuery),
function(t) {
  "use strict";
  function e(e) {
      return this.each(function() {
          var i = t(this)
            , r = i.data("bs.carousel")
            , a = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e)
            , o = "string" == typeof e ? e : a.slide;
          r || i.data("bs.carousel", r = new n(this,a)),
          "number" == typeof e ? r.to(e) : o ? r[o]() : a.interval && r.pause().cycle()
      })
  }
  var n = function(e, n) {
      this.$element = t(e),
      this.$indicators = this.$element.find(".carousel-indicators"),
      this.options = n,
      this.paused = null,
      this.sliding = null,
      this.interval = null,
      this.$active = null,
      this.$items = null,
      this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
      "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
  };
  n.VERSION = "3.3.5",
  n.TRANSITION_DURATION = 600,
  n.DEFAULTS = {
      interval: 5e3,
      pause: "hover",
      wrap: !0,
      keyboard: !0
  },
  n.prototype.keydown = function(t) {
      if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
          case 37:
              this.prev();
              break;
          case 39:
              this.next();
              break;
          default:
              return
          }
          t.preventDefault()
      }
  }
  ,
  n.prototype.cycle = function(e) {
      return e || (this.paused = !1),
      this.interval && clearInterval(this.interval),
      this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
      this
  }
  ,
  n.prototype.getItemIndex = function(t) {
      return this.$items = t.parent().children(".item"),
      this.$items.index(t || this.$active)
  }
  ,
  n.prototype.getItemForDirection = function(t, e) {
      var n = this.getItemIndex(e);
      if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap)
          return e;
      var i = "prev" == t ? -1 : 1
        , r = (n + i) % this.$items.length;
      return this.$items.eq(r)
  }
  ,
  n.prototype.to = function(t) {
      var e = this
        , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
      return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
          e.to(t)
      }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
  }
  ,
  n.prototype.pause = function(e) {
      return e || (this.paused = !0),
      this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end),
      this.cycle(!0)),
      this.interval = clearInterval(this.interval),
      this
  }
  ,
  n.prototype.next = function() {
      return this.sliding ? void 0 : this.slide("next")
  }
  ,
  n.prototype.prev = function() {
      return this.sliding ? void 0 : this.slide("prev")
  }
  ,
  n.prototype.slide = function(e, i) {
      var r = this.$element.find(".item.active")
        , a = i || this.getItemForDirection(e, r)
        , o = this.interval
        , s = "next" == e ? "left" : "right"
        , l = this;
      if (a.hasClass("active"))
          return this.sliding = !1;
      var c = a[0]
        , u = t.Event("slide.bs.carousel", {
          relatedTarget: c,
          direction: s
      });
      if (this.$element.trigger(u),
      !u.isDefaultPrevented()) {
          if (this.sliding = !0,
          o && this.pause(),
          this.$indicators.length) {
              this.$indicators.find(".active").removeClass("active");
              var d = t(this.$indicators.children()[this.getItemIndex(a)]);
              d && d.addClass("active")
          }
          var p = t.Event("slid.bs.carousel", {
              relatedTarget: c,
              direction: s
          });
          return t.support.transition && this.$element.hasClass("slide") ? (a.addClass(e),
          a[0].offsetWidth,
          r.addClass(s),
          a.addClass(s),
          r.one("bsTransitionEnd", function() {
              a.removeClass([e, s].join(" ")).addClass("active"),
              r.removeClass(["active", s].join(" ")),
              l.sliding = !1,
              setTimeout(function() {
                  l.$element.trigger(p)
              }, 0)
          }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"),
          a.addClass("active"),
          this.sliding = !1,
          this.$element.trigger(p)),
          o && this.cycle(),
          this
      }
  }
  ;
  var i = t.fn.carousel;
  t.fn.carousel = e,
  t.fn.carousel.Constructor = n,
  t.fn.carousel.noConflict = function() {
      return t.fn.carousel = i,
      this
  }
  ;
  var r = function(n) {
      var i, r = t(this), a = t(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
      if (a.hasClass("carousel")) {
          var o = t.extend({}, a.data(), r.data())
            , s = r.attr("data-slide-to");
          s && (o.interval = !1),
          e.call(a, o),
          s && a.data("bs.carousel").to(s),
          n.preventDefault()
      }
  };
  t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r),
  t(window).on("load", function() {
      t('[data-ride="carousel"]').each(function() {
          var n = t(this);
          e.call(n, n.data())
      })
  })
}(jQuery),
function(t) {
  "use strict";
  function e(e) {
      var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
      return t(i)
  }
  function n(e) {
      return this.each(function() {
          var n = t(this)
            , r = n.data("bs.collapse")
            , a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
          !r && a.toggle && /show|hide/.test(e) && (a.toggle = !1),
          r || n.data("bs.collapse", r = new i(this,a)),
          "string" == typeof e && r[e]()
      })
  }
  var i = function(e, n) {
      this.$element = t(e),
      this.options = t.extend({}, i.DEFAULTS, n),
      this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
      this.transitioning = null,
      this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
      this.options.toggle && this.toggle()
  };
  i.VERSION = "3.3.5",
  i.TRANSITION_DURATION = 350,
  i.DEFAULTS = {
      toggle: !0
  },
  i.prototype.dimension = function() {
      return this.$element.hasClass("width") ? "width" : "height"
  }
  ,
  i.prototype.show = function() {
      if (!this.transitioning && !this.$element.hasClass("in")) {
          var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
          if (!(r && r.length && (e = r.data("bs.collapse")) && e.transitioning)) {
              var a = t.Event("show.bs.collapse");
              if (this.$element.trigger(a),
              !a.isDefaultPrevented()) {
                  r && r.length && (n.call(r, "hide"),
                  e || r.data("bs.collapse", null));
                  var o = this.dimension();
                  this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0),
                  this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                  this.transitioning = 1;
                  var s = function() {
                      this.$element.removeClass("collapsing").addClass("collapse in")[o](""),
                      this.transitioning = 0,
                      this.$element.trigger("shown.bs.collapse")
                  };
                  if (!t.support.transition)
                      return s.call(this);
                  var l = t.camelCase(["scroll", o].join("-"));
                  this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[o](this.$element[0][l])
              }
          }
      }
  }
  ,
  i.prototype.hide = function() {
      if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse");
          if (this.$element.trigger(e),
          !e.isDefaultPrevented()) {
              var n = this.dimension();
              this.$element[n](this.$element[n]())[0].offsetHeight,
              this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              this.transitioning = 1;
              var r = function() {
                  this.transitioning = 0,
                  this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
              };
              return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
          }
      }
  }
  ,
  i.prototype.toggle = function() {
      this[this.$element.hasClass("in") ? "hide" : "show"]()
  }
  ,
  i.prototype.getParent = function() {
      return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
          var r = t(i);
          this.addAriaAndCollapsedClass(e(r), r)
      }, this)).end()
  }
  ,
  i.prototype.addAriaAndCollapsedClass = function(t, e) {
      var n = t.hasClass("in");
      t.attr("aria-expanded", n),
      e.toggleClass("collapsed", !n).attr("aria-expanded", n)
  }
  ;
  var r = t.fn.collapse;
  t.fn.collapse = n,
  t.fn.collapse.Constructor = i,
  t.fn.collapse.noConflict = function() {
      return t.fn.collapse = r,
      this
  }
  ,
  t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
      var r = t(this);
      r.attr("data-target") || i.preventDefault();
      var a = e(r)
        , o = a.data("bs.collapse")
        , s = o ? "toggle" : r.data();
      n.call(a, s)
  })
}(jQuery),
function(t) {
  "use strict";
  function e(e) {
      var n = e.attr("data-target");
      n || (n = e.attr("href"),
      n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
      var i = n && t(n);
      return i && i.length ? i : e.parent()
  }
  function n(n) {
      n && 3 === n.which || (t(r).remove(),
      t(a).each(function() {
          var i = t(this)
            , r = e(i)
            , a = {
              relatedTarget: this
          };
          r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(r[0], n.target) || (r.trigger(n = t.Event("hide.bs.dropdown", a)),
          n.isDefaultPrevented() || (i.attr("aria-expanded", "false"),
          r.removeClass("open").trigger("hidden.bs.dropdown", a))))
      }))
  }
  function i(e) {
      return this.each(function() {
          var n = t(this)
            , i = n.data("bs.dropdown");
          i || n.data("bs.dropdown", i = new o(this)),
          "string" == typeof e && i[e].call(n)
      })
  }
  var r = ".dropdown-backdrop"
    , a = '[data-toggle="dropdown"]'
    , o = function(e) {
      t(e).on("click.bs.dropdown", this.toggle)
  };
  o.VERSION = "3.3.5",
  o.prototype.toggle = function(i) {
      var r = t(this);
      if (!r.is(".disabled, :disabled")) {
          var a = e(r)
            , o = a.hasClass("open");
          if (n(),
          !o) {
              "ontouchstart"in document.documentElement && !a.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
              var s = {
                  relatedTarget: this
              };
              if (a.trigger(i = t.Event("show.bs.dropdown", s)),
              i.isDefaultPrevented())
                  return;
              r.trigger("focus").attr("aria-expanded", "true"),
              a.toggleClass("open").trigger("shown.bs.dropdown", s)
          }
          return !1
      }
  }
  ,
  o.prototype.keydown = function(n) {
      if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
          var i = t(this);
          if (n.preventDefault(),
          n.stopPropagation(),
          !i.is(".disabled, :disabled")) {
              var r = e(i)
                , o = r.hasClass("open");
              if (!o && 27 != n.which || o && 27 == n.which)
                  return 27 == n.which && r.find(a).trigger("focus"),
                  i.trigger("click");
              var s = r.find(".dropdown-menu li:not(.disabled):visible a");
              if (s.length) {
                  var l = s.index(n.target);
                  38 == n.which && l > 0 && l--,
                  40 == n.which && l < s.length - 1 && l++,
                  ~l || (l = 0),
                  s.eq(l).trigger("focus")
              }
          }
      }
  }
  ;
  var s = t.fn.dropdown;
  t.fn.dropdown = i,
  t.fn.dropdown.Constructor = o,
  t.fn.dropdown.noConflict = function() {
      return t.fn.dropdown = s,
      this
  }
  ,
  t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
      t.stopPropagation()
  }).on("click.bs.dropdown.data-api", a, o.prototype.toggle).on("keydown.bs.dropdown.data-api", a, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery),
function(t) {
  "use strict";
  function e(e, i) {
      return this.each(function() {
          var r = t(this)
            , a = r.data("bs.modal")
            , o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
          a || r.data("bs.modal", a = new n(this,o)),
          "string" == typeof e ? a[e](i) : o.show && a.show(i)
      })
  }
  var n = function(e, n) {
      this.options = n,
      this.$body = t(document.body),
      this.$element = t(e),
      this.$dialog = this.$element.find(".modal-dialog"),
      this.$backdrop = null,
      this.isShown = null,
      this.originalBodyPad = null,
      this.scrollbarWidth = 0,
      this.ignoreBackdropClick = !1,
      this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
          this.$element.trigger("loaded.bs.modal")
      }, this))
  };
  n.VERSION = "3.3.5",
  n.TRANSITION_DURATION = 300,
  n.BACKDROP_TRANSITION_DURATION = 150,
  n.DEFAULTS = {
      backdrop: !0,
      keyboard: !0,
      show: !0
  },
  n.prototype.toggle = function(t) {
      return this.isShown ? this.hide() : this.show(t)
  }
  ,
  n.prototype.show = function(e) {
      var i = this
        , r = t.Event("show.bs.modal", {
          relatedTarget: e
      });
      this.$element.trigger(r),
      this.isShown || r.isDefaultPrevented() || (this.isShown = !0,
      this.checkScrollbar(),
      this.setScrollbar(),
      this.$body.addClass("modal-open"),
      this.escape(),
      this.resize(),
      this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
      this.$dialog.on("mousedown.dismiss.bs.modal", function() {
          i.$element.one("mouseup.dismiss.bs.modal", function(e) {
              t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
          })
      }),
      this.backdrop(function() {
          var r = t.support.transition && i.$element.hasClass("fade");
          i.$element.parent().length || i.$element.appendTo(i.$body),
          i.$element.show().scrollTop(0),
          i.adjustDialog(),
          r && i.$element[0].offsetWidth,
          i.$element.addClass("in"),
          i.enforceFocus();
          var a = t.Event("shown.bs.modal", {
              relatedTarget: e
          });
          r ? i.$dialog.one("bsTransitionEnd", function() {
              i.$element.trigger("focus").trigger(a)
          }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(a)
      }))
  }
  ,
  n.prototype.hide = function(e) {
      e && e.preventDefault(),
      e = t.Event("hide.bs.modal"),
      this.$element.trigger(e),
      this.isShown && !e.isDefaultPrevented() && (this.isShown = !1,
      this.escape(),
      this.resize(),
      t(document).off("focusin.bs.modal"),
      this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
      this.$dialog.off("mousedown.dismiss.bs.modal"),
      t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
  }
  ,
  n.prototype.enforceFocus = function() {
      t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
          this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
      }, this))
  }
  ,
  n.prototype.escape = function() {
      this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
          27 == t.which && this.hide()
      }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }
  ,
  n.prototype.resize = function() {
      this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
  }
  ,
  n.prototype.hideModal = function() {
      var t = this;
      this.$element.hide(),
      this.backdrop(function() {
          t.$body.removeClass("modal-open"),
          t.resetAdjustments(),
          t.resetScrollbar(),
          t.$element.trigger("hidden.bs.modal")
      })
  }
  ,
  n.prototype.removeBackdrop = function() {
      this.$backdrop && this.$backdrop.remove(),
      this.$backdrop = null
  }
  ,
  n.prototype.backdrop = function(e) {
      var i = this
        , r = this.$element.hasClass("fade") ? "fade" : "";
      if (this.isShown && this.options.backdrop) {
          var a = t.support.transition && r;
          if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body),
          this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
              return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
          }, this)),
          a && this.$backdrop[0].offsetWidth,
          this.$backdrop.addClass("in"),
          !e)
              return;
          a ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
      } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var o = function() {
              i.removeBackdrop(),
              e && e()
          };
          t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : o()
      } else
          e && e()
  }
  ,
  n.prototype.handleUpdate = function() {
      this.adjustDialog()
  }
  ,
  n.prototype.adjustDialog = function() {
      var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
      this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
      })
  }
  ,
  n.prototype.resetAdjustments = function() {
      this.$element.css({
          paddingLeft: "",
          paddingRight: ""
      })
  }
  ,
  n.prototype.checkScrollbar = function() {
      var t = window.innerWidth;
      if (!t) {
          var e = document.documentElement.getBoundingClientRect();
          t = e.right - Math.abs(e.left)
      }
      this.bodyIsOverflowing = document.body.clientWidth < t,
      this.scrollbarWidth = this.measureScrollbar()
  }
  ,
  n.prototype.setScrollbar = function() {
      var t = parseInt(this.$body.css("padding-right") || 0, 10);
      this.originalBodyPad = document.body.style.paddingRight || "",
      this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
  }
  ,
  n.prototype.resetScrollbar = function() {
      this.$body.css("padding-right", this.originalBodyPad)
  }
  ,
  n.prototype.measureScrollbar = function() {
      var t = document.createElement("div");
      t.className = "modal-scrollbar-measure",
      this.$body.append(t);
      var e = t.offsetWidth - t.clientWidth;
      return this.$body[0].removeChild(t),
      e
  }
  ;
  var i = t.fn.modal;
  t.fn.modal = e,
  t.fn.modal.Constructor = n,
  t.fn.modal.noConflict = function() {
      return t.fn.modal = i,
      this
  }
  ,
  t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
      var i = t(this)
        , r = i.attr("href")
        , a = t(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, ""))
        , o = a.data("bs.modal") ? "toggle" : t.extend({
          remote: !/#/.test(r) && r
      }, a.data(), i.data());
      i.is("a") && n.preventDefault(),
      a.one("show.bs.modal", function(t) {
          t.isDefaultPrevented() || a.one("hidden.bs.modal", function() {
              i.is(":visible") && i.trigger("focus")
          })
      }),
      e.call(a, o, this)
  })
}(jQuery),
function(t) {
  "use strict";
  function e(e) {
      return this.each(function() {
          var i = t(this)
            , r = i.data("bs.tooltip")
            , a = "object" == typeof e && e;
          (r || !/destroy|hide/.test(e)) && (r || i.data("bs.tooltip", r = new n(this,a)),
          "string" == typeof e && r[e]())
      })
  }
  var n = function(t, e) {
      this.type = null,
      this.options = null,
      this.enabled = null,
      this.timeout = null,
      this.hoverState = null,
      this.$element = null,
      this.inState = null,
      this.init("tooltip", t, e)
  };
  n.VERSION = "3.3.5",
  n.TRANSITION_DURATION = 150,
  n.DEFAULTS = {
      animation: !0,
      placement: "top",
      selector: !1,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      container: !1,
      viewport: {
          selector: "body",
          padding: 0
      }
  },
  n.prototype.init = function(e, n, i) {
      if (this.enabled = !0,
      this.type = e,
      this.$element = t(n),
      this.options = this.getOptions(i),
      this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
      this.inState = {
          click: !1,
          hover: !1,
          focus: !1
      },
      this.$element[0]instanceof document.constructor && !this.options.selector)
          throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
      for (var r = this.options.trigger.split(" "), a = r.length; a--; ) {
          var o = r[a];
          if ("click" == o)
              this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
          else if ("manual" != o) {
              var s = "hover" == o ? "mouseenter" : "focusin"
                , l = "hover" == o ? "mouseleave" : "focusout";
              this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
              this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
          }
      }
      this.options.selector ? this._options = t.extend({}, this.options, {
          trigger: "manual",
          selector: ""
      }) : this.fixTitle()
  }
  ,
  n.prototype.getDefaults = function() {
      return n.DEFAULTS
  }
  ,
  n.prototype.getOptions = function(e) {
      return e = t.extend({}, this.getDefaults(), this.$element.data(), e),
      e.delay && "number" == typeof e.delay && (e.delay = {
          show: e.delay,
          hide: e.delay
      }),
      e
  }
  ,
  n.prototype.getDelegateOptions = function() {
      var e = {}
        , n = this.getDefaults();
      return this._options && t.each(this._options, function(t, i) {
          n[t] != i && (e[t] = i)
      }),
      e
  }
  ,
  n.prototype.enter = function(e) {
      var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
      return n || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
      t(e.currentTarget).data("bs." + this.type, n)),
      e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0),
      n.tip().hasClass("in") || "in" == n.hoverState ? void (n.hoverState = "in") : (clearTimeout(n.timeout),
      n.hoverState = "in",
      n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function() {
          "in" == n.hoverState && n.show()
      }, n.options.delay.show)) : n.show())
  }
  ,
  n.prototype.isInStateTrue = function() {
      for (var t in this.inState)
          if (this.inState[t])
              return !0;
      return !1
  }
  ,
  n.prototype.leave = function(e) {
      var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
      return n || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
      t(e.currentTarget).data("bs." + this.type, n)),
      e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1),
      n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout),
      n.hoverState = "out",
      n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function() {
          "out" == n.hoverState && n.hide()
      }, n.options.delay.hide)) : n.hide())
  }
  ,
  n.prototype.show = function() {
      var e = t.Event("show.bs." + this.type);
      if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);
          var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
          if (e.isDefaultPrevented() || !i)
              return;
          var r = this
            , a = this.tip()
            , o = this.getUID(this.type);
          this.setContent(),
          a.attr("id", o),
          this.$element.attr("aria-describedby", o),
          this.options.animation && a.addClass("fade");
          var s = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement
            , l = /\s?auto?\s?/i
            , c = l.test(s);
          c && (s = s.replace(l, "") || "top"),
          a.detach().css({
              top: 0,
              left: 0,
              display: "block"
          }).addClass(s).data("bs." + this.type, this),
          this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element),
          this.$element.trigger("inserted.bs." + this.type);
          var u = this.getPosition()
            , d = a[0].offsetWidth
            , p = a[0].offsetHeight;
          if (c) {
              var f = s
                , h = this.getPosition(this.$viewport);
              s = "bottom" == s && u.bottom + p > h.bottom ? "top" : "top" == s && u.top - p < h.top ? "bottom" : "right" == s && u.right + d > h.width ? "left" : "left" == s && u.left - d < h.left ? "right" : s,
              a.removeClass(f).addClass(s)
          }
          var m = this.getCalculatedOffset(s, u, d, p);
          this.applyPlacement(m, s);
          var v = function() {
              var t = r.hoverState;
              r.$element.trigger("shown.bs." + r.type),
              r.hoverState = null,
              "out" == t && r.leave(r)
          };
          t.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
      }
  }
  ,
  n.prototype.applyPlacement = function(e, n) {
      var i = this.tip()
        , r = i[0].offsetWidth
        , a = i[0].offsetHeight
        , o = parseInt(i.css("margin-top"), 10)
        , s = parseInt(i.css("margin-left"), 10);
      isNaN(o) && (o = 0),
      isNaN(s) && (s = 0),
      e.top += o,
      e.left += s,
      t.offset.setOffset(i[0], t.extend({
          using: function(t) {
              i.css({
                  top: Math.round(t.top),
                  left: Math.round(t.left)
              })
          }
      }, e), 0),
      i.addClass("in");
      var l = i[0].offsetWidth
        , c = i[0].offsetHeight;
      "top" == n && c != a && (e.top = e.top + a - c);
      var u = this.getViewportAdjustedDelta(n, e, l, c);
      u.left ? e.left += u.left : e.top += u.top;
      var d = /top|bottom/.test(n)
        , p = d ? 2 * u.left - r + l : 2 * u.top - a + c
        , f = d ? "offsetWidth" : "offsetHeight";
      i.offset(e),
      this.replaceArrow(p, i[0][f], d)
  }
  ,
  n.prototype.replaceArrow = function(t, e, n) {
      this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
  }
  ,
  n.prototype.setContent = function() {
      var t = this.tip()
        , e = this.getTitle();
      t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
      t.removeClass("fade in top bottom left right")
  }
  ,
  n.prototype.hide = function(e) {
      function i() {
          "in" != r.hoverState && a.detach(),
          r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type),
          e && e()
      }
      var r = this
        , a = t(this.$tip)
        , o = t.Event("hide.bs." + this.type);
      return this.$element.trigger(o),
      o.isDefaultPrevented() ? void 0 : (a.removeClass("in"),
      t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(),
      this.hoverState = null,
      this)
  }
  ,
  n.prototype.fixTitle = function() {
      var t = this.$element;
      (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
  }
  ,
  n.prototype.hasContent = function() {
      return this.getTitle()
  }
  ,
  n.prototype.getPosition = function(e) {
      e = e || this.$element;
      var n = e[0]
        , i = "BODY" == n.tagName
        , r = n.getBoundingClientRect();
      null == r.width && (r = t.extend({}, r, {
          width: r.right - r.left,
          height: r.bottom - r.top
      }));
      var a = i ? {
          top: 0,
          left: 0
      } : e.offset()
        , o = {
          scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
      }
        , s = i ? {
          width: t(window).width(),
          height: t(window).height()
      } : null;
      return t.extend({}, r, o, s, a)
  }
  ,
  n.prototype.getCalculatedOffset = function(t, e, n, i) {
      return "bottom" == t ? {
          top: e.top + e.height,
          left: e.left + e.width / 2 - n / 2
      } : "top" == t ? {
          top: e.top - i,
          left: e.left + e.width / 2 - n / 2
      } : "left" == t ? {
          top: e.top + e.height / 2 - i / 2,
          left: e.left - n
      } : {
          top: e.top + e.height / 2 - i / 2,
          left: e.left + e.width
      }
  }
  ,
  n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
      var r = {
          top: 0,
          left: 0
      };
      if (!this.$viewport)
          return r;
      var a = this.options.viewport && this.options.viewport.padding || 0
        , o = this.getPosition(this.$viewport);
      if (/right|left/.test(t)) {
          var s = e.top - a - o.scroll
            , l = e.top + a - o.scroll + i;
          s < o.top ? r.top = o.top - s : l > o.top + o.height && (r.top = o.top + o.height - l)
      } else {
          var c = e.left - a
            , u = e.left + a + n;
          c < o.left ? r.left = o.left - c : u > o.right && (r.left = o.left + o.width - u)
      }
      return r
  }
  ,
  n.prototype.getTitle = function() {
      var t = this.$element
        , e = this.options;
      return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
  }
  ,
  n.prototype.getUID = function(t) {
      do {
          t += ~~(1e6 * Math.random())
      } while (document.getElementById(t));
      return t
  }
  ,
  n.prototype.tip = function() {
      if (!this.$tip && (this.$tip = t(this.options.template),
      1 != this.$tip.length))
          throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
      return this.$tip
  }
  ,
  n.prototype.arrow = function() {
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }
  ,
  n.prototype.enable = function() {
      this.enabled = !0
  }
  ,
  n.prototype.disable = function() {
      this.enabled = !1
  }
  ,
  n.prototype.toggleEnabled = function() {
      this.enabled = !this.enabled
  }
  ,
  n.prototype.toggle = function(e) {
      var n = this;
      e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
      t(e.currentTarget).data("bs." + this.type, n))),
      e ? (n.inState.click = !n.inState.click,
      n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
  }
  ,
  n.prototype.destroy = function() {
      var t = this;
      clearTimeout(this.timeout),
      this.hide(function() {
          t.$element.off("." + t.type).removeData("bs." + t.type),
          t.$tip && t.$tip.detach(),
          t.$tip = null,
          t.$arrow = null,
          t.$viewport = null
      })
  }
  ;
  var i = t.fn.tooltip;
  t.fn.tooltip = e,
  t.fn.tooltip.Constructor = n,
  t.fn.tooltip.noConflict = function() {
      return t.fn.tooltip = i,
      this
  }
}(jQuery),
function(t) {
  "use strict";
  function e(e) {
      return this.each(function() {
          var i = t(this)
            , r = i.data("bs.popover")
            , a = "object" == typeof e && e;
          (r || !/destroy|hide/.test(e)) && (r || i.data("bs.popover", r = new n(this,a)),
          "string" == typeof e && r[e]())
      })
  }
  var n = function(t, e) {
      this.init("popover", t, e)
  };
  if (!t.fn.tooltip)
      throw new Error("Popover requires tooltip.js");
  n.VERSION = "3.3.5",
  n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }),
  n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype),
  n.prototype.constructor = n,
  n.prototype.getDefaults = function() {
      return n.DEFAULTS
  }
  ,
  n.prototype.setContent = function() {
      var t = this.tip()
        , e = this.getTitle()
        , n = this.getContent();
      t.find(".popover-title")[this.options.html ? "html" : "text"](e),
      t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n),
      t.removeClass("fade top bottom left right in"),
      t.find(".popover-title").html() || t.find(".popover-title").hide()
  }
  ,
  n.prototype.hasContent = function() {
      return this.getTitle() || this.getContent()
  }
  ,
  n.prototype.getContent = function() {
      var t = this.$element
        , e = this.options;
      return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
  }
  ,
  n.prototype.arrow = function() {
      return this.$arrow = this.$arrow || this.tip().find(".arrow")
  }
  ;
  var i = t.fn.popover;
  t.fn.popover = e,
  t.fn.popover.Constructor = n,
  t.fn.popover.noConflict = function() {
      return t.fn.popover = i,
      this
  }
}(jQuery),
function(t) {
  "use strict";
  function e(n, i) {
      this.$body = t(document.body),
      this.$scrollElement = t(t(n).is(document.body) ? window : n),
      this.options = t.extend({}, e.DEFAULTS, i),
      this.selector = (this.options.target || "") + " .nav li > a",
      this.offsets = [],
      this.targets = [],
      this.activeTarget = null,
      this.scrollHeight = 0,
      this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
      this.refresh(),
      this.process()
  }
  function n(n) {
      return this.each(function() {
          var i = t(this)
            , r = i.data("bs.scrollspy")
            , a = "object" == typeof n && n;
          r || i.data("bs.scrollspy", r = new e(this,a)),
          "string" == typeof n && r[n]()
      })
  }
  e.VERSION = "3.3.5",
  e.DEFAULTS = {
      offset: 10
  },
  e.prototype.getScrollHeight = function() {
      return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }
  ,
  e.prototype.refresh = function() {
      var e = this
        , n = "offset"
        , i = 0;
      this.offsets = [],
      this.targets = [],
      this.scrollHeight = this.getScrollHeight(),
      t.isWindow(this.$scrollElement[0]) || (n = "position",
      i = this.$scrollElement.scrollTop()),
      this.$body.find(this.selector).map(function() {
          var e = t(this)
            , r = e.data("target") || e.attr("href")
            , a = /^#./.test(r) && t(r);
          return a && a.length && a.is(":visible") && [[a[n]().top + i, r]] || null
      }).sort(function(t, e) {
          return t[0] - e[0]
      }).each(function() {
          e.offsets.push(this[0]),
          e.targets.push(this[1])
      })
  }
  ,
  e.prototype.process = function() {
      var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), r = this.offsets, a = this.targets, o = this.activeTarget;
      if (this.scrollHeight != n && this.refresh(),
      e >= i)
          return o != (t = a[a.length - 1]) && this.activate(t);
      if (o && e < r[0])
          return this.activeTarget = null,
          this.clear();
      for (t = r.length; t--; )
          o != a[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(a[t])
  }
  ,
  e.prototype.activate = function(e) {
      this.activeTarget = e,
      this.clear();
      var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
        , i = t(n).parents("li").addClass("active");
      i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
      i.trigger("activate.bs.scrollspy")
  }
  ,
  e.prototype.clear = function() {
      t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  }
  ;
  var i = t.fn.scrollspy;
  t.fn.scrollspy = n,
  t.fn.scrollspy.Constructor = e,
  t.fn.scrollspy.noConflict = function() {
      return t.fn.scrollspy = i,
      this
  }
  ,
  t(window).on("load.bs.scrollspy.data-api", function() {
      t('[data-spy="scroll"]').each(function() {
          var e = t(this);
          n.call(e, e.data())
      })
  })
}(jQuery),
function(t) {
  "use strict";
  function e(e) {
      return this.each(function() {
          var i = t(this)
            , r = i.data("bs.tab");
          r || i.data("bs.tab", r = new n(this)),
          "string" == typeof e && r[e]()
      })
  }
  var n = function(e) {
      this.element = t(e)
  };
  n.VERSION = "3.3.5",
  n.TRANSITION_DURATION = 150,
  n.prototype.show = function() {
      var e = this.element
        , n = e.closest("ul:not(.dropdown-menu)")
        , i = e.data("target");
      if (i || (i = e.attr("href"),
      i = i && i.replace(/.*(?=#[^\s]*$)/, "")),
      !e.parent("li").hasClass("active")) {
          var r = n.find(".active:last a")
            , a = t.Event("hide.bs.tab", {
              relatedTarget: e[0]
          })
            , o = t.Event("show.bs.tab", {
              relatedTarget: r[0]
          });
          if (r.trigger(a),
          e.trigger(o),
          !o.isDefaultPrevented() && !a.isDefaultPrevented()) {
              var s = t(i);
              this.activate(e.closest("li"), n),
              this.activate(s, s.parent(), function() {
                  r.trigger({
                      type: "hidden.bs.tab",
                      relatedTarget: e[0]
                  }),
                  e.trigger({
                      type: "shown.bs.tab",
                      relatedTarget: r[0]
                  })
              })
          }
      }
  }
  ,
  n.prototype.activate = function(e, i, r) {
      function a() {
          o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
          e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
          s ? (e[0].offsetWidth,
          e.addClass("in")) : e.removeClass("fade"),
          e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
          r && r()
      }
      var o = i.find("> .active")
        , s = r && t.support.transition && (o.length && o.hasClass("fade") || !!i.find("> .fade").length);
      o.length && s ? o.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a(),
      o.removeClass("in")
  }
  ;
  var i = t.fn.tab;
  t.fn.tab = e,
  t.fn.tab.Constructor = n,
  t.fn.tab.noConflict = function() {
      return t.fn.tab = i,
      this
  }
  ;
  var r = function(n) {
      n.preventDefault(),
      e.call(t(this), "show")
  };
  t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery),
function(t) {
  "use strict";
  function e(e) {
      return this.each(function() {
          var i = t(this)
            , r = i.data("bs.affix")
            , a = "object" == typeof e && e;
          r || i.data("bs.affix", r = new n(this,a)),
          "string" == typeof e && r[e]()
      })
  }
  var n = function(e, i) {
      this.options = t.extend({}, n.DEFAULTS, i),
      this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
      this.$element = t(e),
      this.affixed = null,
      this.unpin = null,
      this.pinnedOffset = null,
      this.checkPosition()
  };
  n.VERSION = "3.3.5",
  n.RESET = "affix affix-top affix-bottom",
  n.DEFAULTS = {
      offset: 0,
      target: window
  },
  n.prototype.getState = function(t, e, n, i) {
      var r = this.$target.scrollTop()
        , a = this.$element.offset()
        , o = this.$target.height();
      if (null != n && "top" == this.affixed)
          return n > r && "top";
      if ("bottom" == this.affixed)
          return null != n ? !(r + this.unpin <= a.top) && "bottom" : !(t - i >= r + o) && "bottom";
      var s = null == this.affixed
        , l = s ? r : a.top
        , c = s ? o : e;
      return null != n && n >= r ? "top" : null != i && l + c >= t - i && "bottom"
  }
  ,
  n.prototype.getPinnedOffset = function() {
      if (this.pinnedOffset)
          return this.pinnedOffset;
      this.$element.removeClass(n.RESET).addClass("affix");
      var t = this.$target.scrollTop()
        , e = this.$element.offset();
      return this.pinnedOffset = e.top - t
  }
  ,
  n.prototype.checkPositionWithEventLoop = function() {
      setTimeout(t.proxy(this.checkPosition, this), 1)
  }
  ,
  n.prototype.checkPosition = function() {
      if (this.$element.is(":visible")) {
          var e = this.$element.height()
            , i = this.options.offset
            , r = i.top
            , a = i.bottom
            , o = Math.max(t(document).height(), t(document.body).height());
          "object" != typeof i && (a = r = i),
          "function" == typeof r && (r = i.top(this.$element)),
          "function" == typeof a && (a = i.bottom(this.$element));
          var s = this.getState(o, e, r, a);
          if (this.affixed != s) {
              null != this.unpin && this.$element.css("top", "");
              var l = "affix" + (s ? "-" + s : "")
                , c = t.Event(l + ".bs.affix");
              if (this.$element.trigger(c),
              c.isDefaultPrevented())
                  return;
              this.affixed = s,
              this.unpin = "bottom" == s ? this.getPinnedOffset() : null,
              this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
          }
          "bottom" == s && this.$element.offset({
              top: o - e - a
          })
      }
  }
  ;
  var i = t.fn.affix;
  t.fn.affix = e,
  t.fn.affix.Constructor = n,
  t.fn.affix.noConflict = function() {
      return t.fn.affix = i,
      this
  }
  ,
  t(window).on("load", function() {
      t('[data-spy="affix"]').each(function() {
          var n = t(this)
            , i = n.data();
          i.offset = i.offset || {},
          null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
          null != i.offsetTop && (i.offset.top = i.offsetTop),
          e.call(n, i)
      })
  })
}(jQuery),
define("bootstrap", ["jquery"], function() {}),
"undefined" == typeof jQuery)
  throw new Error("BootstrapValidator's JavaScript requires jQuery");
!function(t) {
  var e = function(e, n) {
      this.$form = t(e),
      this.options = t.extend({}, t.fn.bootstrapValidator.DEFAULT_OPTIONS, n),
      this.$invalidFields = t([]),
      this.$submitButton = null,
      this.$hiddenButton = null,
      this.STATUS_NOT_VALIDATED = "NOT_VALIDATED",
      this.STATUS_VALIDATING = "VALIDATING",
      this.STATUS_INVALID = "INVALID",
      this.STATUS_VALID = "VALID";
      var i = function() {
          for (var t = 3, e = document.createElement("div"), n = e.all || []; e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><br><![endif]--\x3e",
          n[0]; )
              ;
          return t > 4 ? t : !t
      }()
        , r = document.createElement("div");
      this._changeEvent = 9 !== i && "oninput"in r ? "input" : "keyup",
      this._submitIfValid = null,
      this._cacheFields = {},
      this._init()
  };
  e.prototype = {
      constructor: e,
      _init: function() {
          var e = this
            , n = {
              container: this.$form.attr("data-bv-container"),
              events: {
                  formInit: this.$form.attr("data-bv-events-form-init"),
                  formError: this.$form.attr("data-bv-events-form-error"),
                  formSuccess: this.$form.attr("data-bv-events-form-success"),
                  fieldAdded: this.$form.attr("data-bv-events-field-added"),
                  fieldRemoved: this.$form.attr("data-bv-events-field-removed"),
                  fieldInit: this.$form.attr("data-bv-events-field-init"),
                  fieldError: this.$form.attr("data-bv-events-field-error"),
                  fieldSuccess: this.$form.attr("data-bv-events-field-success"),
                  fieldStatus: this.$form.attr("data-bv-events-field-status"),
                  validatorError: this.$form.attr("data-bv-events-validator-error"),
                  validatorSuccess: this.$form.attr("data-bv-events-validator-success")
              },
              excluded: this.$form.attr("data-bv-excluded"),
              feedbackIcons: {
                  valid: this.$form.attr("data-bv-feedbackicons-valid"),
                  invalid: this.$form.attr("data-bv-feedbackicons-invalid"),
                  validating: this.$form.attr("data-bv-feedbackicons-validating")
              },
              group: this.$form.attr("data-bv-group"),
              live: this.$form.attr("data-bv-live"),
              message: this.$form.attr("data-bv-message"),
              onError: this.$form.attr("data-bv-onerror"),
              onSuccess: this.$form.attr("data-bv-onsuccess"),
              submitButtons: this.$form.attr("data-bv-submitbuttons"),
              threshold: this.$form.attr("data-bv-threshold"),
              trigger: this.$form.attr("data-bv-trigger"),
              verbose: this.$form.attr("data-bv-verbose"),
              fields: {}
          };
          this.$form.attr("novalidate", "novalidate").addClass(this.options.elementClass).on("submit.bv", function(t) {
              t.preventDefault(),
              e.validate()
          }).on("click.bv", this.options.submitButtons, function() {
              e.$submitButton = t(this),
              e._submitIfValid = !0
          }).find("[name], [data-bv-field]").each(function() {
              var i = t(this)
                , r = i.attr("name") || i.attr("data-bv-field")
                , a = e._parseOptions(i);
              a && (i.attr("data-bv-field", r),
              n.fields[r] = t.extend({}, a, n.fields[r]))
          }),
          this.options = t.extend(!0, this.options, n),
          this.$hiddenButton = t("<button/>").attr("type", "submit").prependTo(this.$form).addClass("bv-hidden-submit").css({
              display: "none",
              width: 0,
              height: 0
          }),
          this.$form.on("click.bv", '[type="submit"]', function(n) {
              if (!n.isDefaultPrevented()) {
                  var i = t(n.target)
                    , r = i.is('[type="submit"]') ? i.eq(0) : i.parent('[type="submit"]').eq(0);
                  !e.options.submitButtons || r.is(e.options.submitButtons) || r.is(e.$hiddenButton) || e.$form.off("submit.bv").submit()
              }
          });
          for (var i in this.options.fields)
              this._initField(i);
          this.$form.trigger(t.Event(this.options.events.formInit), {
              bv: this,
              options: this.options
          }),
          this.options.onSuccess && this.$form.on(this.options.events.formSuccess, function(n) {
              t.fn.bootstrapValidator.helpers.call(e.options.onSuccess, [n])
          }),
          this.options.onError && this.$form.on(this.options.events.formError, function(n) {
              t.fn.bootstrapValidator.helpers.call(e.options.onError, [n])
          })
      },
      _parseOptions: function(e) {
          var n, i, r, a, o, s, l, c = e.attr("name") || e.attr("data-bv-field"), u = {};
          for (i in t.fn.bootstrapValidator.validators)
              if (n = t.fn.bootstrapValidator.validators[i],
              r = e.attr("data-bv-" + i.toLowerCase()) + "",
              (l = "function" == typeof n.enableByHtml5 ? n.enableByHtml5(e) : null) && "false" !== r || !0 !== l && ("" === r || "true" === r)) {
                  n.html5Attributes = t.extend({}, {
                      message: "message",
                      onerror: "onError",
                      onsuccess: "onSuccess"
                  }, n.html5Attributes),
                  u[i] = t.extend({}, !0 === l ? {} : l, u[i]);
                  for (s in n.html5Attributes)
                      a = n.html5Attributes[s],
                      (o = e.attr("data-bv-" + i.toLowerCase() + "-" + s)) && ("true" === o ? o = !0 : "false" === o && (o = !1),
                      u[i][a] = o)
              }
          var d = {
              container: e.attr("data-bv-container"),
              excluded: e.attr("data-bv-excluded"),
              feedbackIcons: e.attr("data-bv-feedbackicons"),
              group: e.attr("data-bv-group"),
              message: e.attr("data-bv-message"),
              onError: e.attr("data-bv-onerror"),
              onStatus: e.attr("data-bv-onstatus"),
              onSuccess: e.attr("data-bv-onsuccess"),
              selector: e.attr("data-bv-selector"),
              threshold: e.attr("data-bv-threshold"),
              trigger: e.attr("data-bv-trigger"),
              verbose: e.attr("data-bv-verbose"),
              validators: u
          }
            , p = t.isEmptyObject(d);
          return !t.isEmptyObject(u) || !p && this.options.fields && this.options.fields[c] ? (d.validators = u,
          d) : null
      },
      _initField: function(e) {
          var n = t([]);
          switch (typeof e) {
          case "object":
              n = e,
              e = e.attr("data-bv-field");
              break;
          case "string":
              n = this.getFieldElements(e),
              n.attr("data-bv-field", e)
          }
          if (0 !== n.length && null !== this.options.fields[e] && null !== this.options.fields[e].validators) {
              var i;
              for (i in this.options.fields[e].validators)
                  t.fn.bootstrapValidator.validators[i] || delete this.options.fields[e].validators[i];
              null === this.options.fields[e].enabled && (this.options.fields[e].enabled = !0);
              for (var r = this, a = n.length, o = n.attr("type"), s = 1 === a || "radio" === o || "checkbox" === o, l = "radio" === o || "checkbox" === o || "file" === o || "SELECT" === n.eq(0).get(0).tagName ? "change" : this._changeEvent, c = (this.options.fields[e].trigger || this.options.trigger || l).split(" "), u = t.map(c, function(t) {
                  return t + ".update.bv"
              }).join(" "), d = 0; a > d; d++) {
                  var p = n.eq(d)
                    , f = this.options.fields[e].group || this.options.group
                    , h = p.parents(f)
                    , m = "function" == typeof (this.options.fields[e].container || this.options.container) ? (this.options.fields[e].container || this.options.container).call(this, p, this) : this.options.fields[e].container || this.options.container
                    , v = m && "tooltip" !== m && "popover" !== m ? t(m) : this._getMessageContainer(p, f);
                  m && "tooltip" !== m && "popover" !== m && v.addClass("has-error"),
                  v.find('.help-block[data-bv-validator][data-bv-for="' + e + '"]').remove(),
                  h.find('i[data-bv-icon-for="' + e + '"]').remove(),
                  p.off(u).on(u, function() {
                      r.updateStatus(t(this), r.STATUS_NOT_VALIDATED)
                  }),
                  p.data("bv.messages", v);
                  for (i in this.options.fields[e].validators)
                      p.data("bv.result." + i, this.STATUS_NOT_VALIDATED),
                      s && d !== a - 1 || t("<small/>").css("display", "none").addClass("help-block").attr("data-bv-validator", i).attr("data-bv-for", e).attr("data-bv-result", this.STATUS_NOT_VALIDATED).html(this._getMessage(e, i)).appendTo(v),
                      "function" == typeof t.fn.bootstrapValidator.validators[i].init && t.fn.bootstrapValidator.validators[i].init(this, p, this.options.fields[e].validators[i]);
                  if (!1 !== this.options.fields[e].feedbackIcons && "false" !== this.options.fields[e].feedbackIcons && this.options.feedbackIcons && this.options.feedbackIcons.validating && this.options.feedbackIcons.invalid && this.options.feedbackIcons.valid && (!s || d === a - 1)) {
                      h.addClass("has-feedback");
                      var g = t("<i/>").css("display", "none").addClass("form-control-feedback").attr("data-bv-icon-for", e).insertAfter(p);
                      if ("checkbox" === o || "radio" === o) {
                          var b = p.parent();
                          b.hasClass(o) ? g.insertAfter(b) : b.parent().hasClass(o) && g.insertAfter(b.parent())
                      }
                      0 === h.find("label").length && g.addClass("bv-no-label"),
                      0 !== h.find(".input-group").length && g.addClass("bv-icon-input-group").insertAfter(h.find(".input-group").eq(0)),
                      m && p.off("focus.bv").on("focus.bv", function() {
                          switch (m) {
                          case "tooltip":
                              g.tooltip("show");
                              break;
                          case "popover":
                              g.popover("show")
                          }
                      }).off("blur.bv").on("blur.bv", function() {
                          switch (m) {
                          case "tooltip":
                              g.tooltip("hide");
                              break;
                          case "popover":
                              g.popover("hide")
                          }
                      })
                  }
              }
              switch (n.on(this.options.events.fieldSuccess, function(e, n) {
                  var i = r.getOptions(n.field, null, "onSuccess");
                  i && t.fn.bootstrapValidator.helpers.call(i, [e, n])
              }).on(this.options.events.fieldError, function(e, n) {
                  var i = r.getOptions(n.field, null, "onError");
                  i && t.fn.bootstrapValidator.helpers.call(i, [e, n])
              }).on(this.options.events.fieldStatus, function(e, n) {
                  var i = r.getOptions(n.field, null, "onStatus");
                  i && t.fn.bootstrapValidator.helpers.call(i, [e, n])
              }).on(this.options.events.validatorError, function(e, n) {
                  var i = r.getOptions(n.field, n.validator, "onError");
                  i && t.fn.bootstrapValidator.helpers.call(i, [e, n])
              }).on(this.options.events.validatorSuccess, function(e, n) {
                  var i = r.getOptions(n.field, n.validator, "onSuccess");
                  i && t.fn.bootstrapValidator.helpers.call(i, [e, n])
              }),
              u = t.map(c, function(t) {
                  return t + ".live.bv"
              }).join(" "),
              this.options.live) {
              case "submitted":
                  break;
              case "disabled":
                  n.off(u);
                  break;
              case "enabled":
              default:
                  n.off(u).on(u, function() {
                      r._exceedThreshold(t(this)) && r.validateField(t(this))
                  })
              }
              n.trigger(t.Event(this.options.events.fieldInit), {
                  bv: this,
                  field: e,
                  element: n
              })
          }
      },
      _getMessage: function(e, n) {
          if (!(this.options.fields[e] && t.fn.bootstrapValidator.validators[n] && this.options.fields[e].validators && this.options.fields[e].validators[n]))
              return "";
          var i = this.options.fields[e].validators[n];
          switch (!0) {
          case !!i.message:
              return i.message;
          case !!this.options.fields[e].message:
              return this.options.fields[e].message;
          case !!t.fn.bootstrapValidator.i18n[n]:
              return t.fn.bootstrapValidator.i18n[n].default;
          default:
              return this.options.message
          }
      },
      _getMessageContainer: function(t, e) {
          var n = t.parent();
          if (n.is(e))
              return n;
          var i = n.attr("class");
          if (!i)
              return this._getMessageContainer(n, e);
          i = i.split(" ");
          for (var r = i.length, a = 0; r > a; a++)
              if (/^col-(xs|sm|md|lg)-\d+$/.test(i[a]) || /^col-(xs|sm|md|lg)-offset-\d+$/.test(i[a]))
                  return n;
          return this._getMessageContainer(n, e)
      },
      _submit: function() {
          var e = this.isValid()
            , n = e ? this.options.events.formSuccess : this.options.events.formError
            , i = t.Event(n);
          this.$form.trigger(i),
          this.$submitButton && (e ? this._onSuccess(i) : this._onError(i))
      },
      _isExcluded: function(e) {
          var n = e.attr("data-bv-excluded")
            , i = e.attr("data-bv-field") || e.attr("name");
          switch (!0) {
          case !!i && this.options.fields && this.options.fields[i] && ("true" === this.options.fields[i].excluded || !0 === this.options.fields[i].excluded):
          case "true" === n:
          case "" === n:
              return !0;
          case !!i && this.options.fields && this.options.fields[i] && ("false" === this.options.fields[i].excluded || !1 === this.options.fields[i].excluded):
          case "false" === n:
              return !1;
          default:
              if (this.options.excluded) {
                  "string" == typeof this.options.excluded && (this.options.excluded = t.map(this.options.excluded.split(","), function(e) {
                      return t.trim(e)
                  }));
                  for (var r = this.options.excluded.length, a = 0; r > a; a++)
                      if ("string" == typeof this.options.excluded[a] && e.is(this.options.excluded[a]) || "function" == typeof this.options.excluded[a] && !0 === this.options.excluded[a].call(this, e, this))
                          return !0
              }
              return !1
          }
      },
      _exceedThreshold: function(e) {
          var n = e.attr("data-bv-field")
            , i = this.options.fields[n].threshold || this.options.threshold;
          return !i || (-1 !== t.inArray(e.attr("type"), ["button", "checkbox", "file", "hidden", "image", "radio", "reset", "submit"]) || e.val().length >= i)
      },
      _onError: function(e) {
          if (!e.isDefaultPrevented()) {
              if ("submitted" === this.options.live) {
                  this.options.live = "enabled";
                  var n = this;
                  for (var i in this.options.fields)
                      !function(e) {
                          var r = n.getFieldElements(e);
                          if (r.length) {
                              var a = t(r[0]).attr("type")
                                , o = "radio" === a || "checkbox" === a || "file" === a || "SELECT" === t(r[0]).get(0).tagName ? "change" : n._changeEvent
                                , s = n.options.fields[i].trigger || n.options.trigger || o
                                , l = t.map(s.split(" "), function(t) {
                                  return t + ".live.bv"
                              }).join(" ");
                              r.off(l).on(l, function() {
                                  n._exceedThreshold(t(this)) && n.validateField(t(this))
                              })
                          }
                      }(i)
              }
              var r = this.$invalidFields.eq(0);
              if (r) {
                  var a, o = r.parents(".tab-pane");
                  o && (a = o.attr("id")) && t('a[href="#' + a + '"][data-toggle="tab"]').tab("show"),
                  r.focus()
              }
          }
      },
      _onSuccess: function(t) {
          t.isDefaultPrevented() || this.disableSubmitButtons(!0).defaultSubmit()
      },
      _onFieldValidated: function(e, n) {
          var i = e.attr("data-bv-field")
            , r = this.options.fields[i].validators
            , a = {}
            , o = 0
            , s = {
              bv: this,
              field: i,
              element: e,
              validator: n,
              result: e.data("bv.response." + n)
          };
          if (n)
              switch (e.data("bv.result." + n)) {
              case this.STATUS_INVALID:
                  e.trigger(t.Event(this.options.events.validatorError), s);
                  break;
              case this.STATUS_VALID:
                  e.trigger(t.Event(this.options.events.validatorSuccess), s)
              }
          a[this.STATUS_NOT_VALIDATED] = 0,
          a[this.STATUS_VALIDATING] = 0,
          a[this.STATUS_INVALID] = 0,
          a[this.STATUS_VALID] = 0;
          for (var l in r)
              if (!1 !== r[l].enabled) {
                  o++;
                  var c = e.data("bv.result." + l);
                  c && a[c]++
              }
          a[this.STATUS_VALID] === o ? (this.$invalidFields = this.$invalidFields.not(e),
          e.trigger(t.Event(this.options.events.fieldSuccess), s)) : 0 === a[this.STATUS_NOT_VALIDATED] && 0 === a[this.STATUS_VALIDATING] && a[this.STATUS_INVALID] > 0 && (this.$invalidFields = this.$invalidFields.add(e),
          e.trigger(t.Event(this.options.events.fieldError), s))
      },
      getFieldElements: function(e) {
          return this._cacheFields[e] || (this._cacheFields[e] = this.options.fields[e] && this.options.fields[e].selector ? t(this.options.fields[e].selector) : this.$form.find('[name="' + e + '"]')),
          this._cacheFields[e]
      },
      getOptions: function(t, e, n) {
          if (!t)
              return this.options;
          if ("object" == typeof t && (t = t.attr("data-bv-field")),
          !this.options.fields[t])
              return null;
          var i = this.options.fields[t];
          return e ? i.validators && i.validators[e] ? n ? i.validators[e][n] : i.validators[e] : null : n ? i[n] : i
      },
      disableSubmitButtons: function(t) {
          return t ? "disabled" !== this.options.live && this.$form.find(this.options.submitButtons).attr("disabled", "disabled") : this.$form.find(this.options.submitButtons).removeAttr("disabled"),
          this
      },
      validate: function() {
          if (!this.options.fields)
              return this;
          this.disableSubmitButtons(!0);
          for (var t in this.options.fields)
              this.validateField(t);
          return this._submit(),
          this
      },
      validateField: function(e) {
          var n = t([]);
          switch (typeof e) {
          case "object":
              n = e,
              e = e.attr("data-bv-field");
              break;
          case "string":
              n = this.getFieldElements(e)
          }
          if (0 === n.length || this.options.fields[e] && !1 === this.options.fields[e].enabled)
              return this;
          for (var i, r, a = this, o = n.attr("type"), s = "radio" === o || "checkbox" === o ? 1 : n.length, l = "radio" === o || "checkbox" === o, c = this.options.fields[e].validators, u = "true" === this.options.fields[e].verbose || !0 === this.options.fields[e].verbose || "true" === this.options.verbose || !0 === this.options.verbose, d = 0; s > d; d++) {
              var p = n.eq(d);
              if (!this._isExcluded(p)) {
                  var f = !1;
                  for (i in c) {
                      if (p.data("bv.dfs." + i) && p.data("bv.dfs." + i).reject(),
                      f)
                          break;
                      var h = p.data("bv.result." + i);
                      if (h !== this.STATUS_VALID && h !== this.STATUS_INVALID)
                          if (!1 !== c[i].enabled) {
                              if (p.data("bv.result." + i, this.STATUS_VALIDATING),
                              "object" == typeof (r = t.fn.bootstrapValidator.validators[i].validate(this, p, c[i])) && r.resolve)
                                  this.updateStatus(l ? e : p, this.STATUS_VALIDATING, i),
                                  p.data("bv.dfs." + i, r),
                                  r.done(function(t, e, n) {
                                      t.removeData("bv.dfs." + e).data("bv.response." + e, n),
                                      n.message && a.updateMessage(t, e, n.message),
                                      a.updateStatus(l ? t.attr("data-bv-field") : t, n.valid ? a.STATUS_VALID : a.STATUS_INVALID, e),
                                      n.valid && !0 === a._submitIfValid ? a._submit() : n.valid || u || (f = !0)
                                  });
                              else if ("object" == typeof r && void 0 !== r.valid && void 0 !== r.message) {
                                  if (p.data("bv.response." + i, r),
                                  this.updateMessage(l ? e : p, i, r.message),
                                  this.updateStatus(l ? e : p, r.valid ? this.STATUS_VALID : this.STATUS_INVALID, i),
                                  !r.valid && !u)
                                      break
                              } else if ("boolean" == typeof r && (p.data("bv.response." + i, r),
                              this.updateStatus(l ? e : p, r ? this.STATUS_VALID : this.STATUS_INVALID, i),
                              !r && !u))
                                  break
                          } else
                              this.updateStatus(l ? e : p, this.STATUS_VALID, i);
                      else
                          this._onFieldValidated(p, i)
                  }
              }
          }
          return this
      },
      updateMessage: function(e, n, i) {
          var r = t([]);
          switch (typeof e) {
          case "object":
              r = e,
              e = e.attr("data-bv-field");
              break;
          case "string":
              r = this.getFieldElements(e)
          }
          r.each(function() {
              t(this).data("bv.messages").find('.help-block[data-bv-validator="' + n + '"][data-bv-for="' + e + '"]').html(i)
          })
      },
      updateStatus: function(e, n, i) {
          var r = t([]);
          switch (typeof e) {
          case "object":
              r = e,
              e = e.attr("data-bv-field");
              break;
          case "string":
              r = this.getFieldElements(e)
          }
          n === this.STATUS_NOT_VALIDATED && (this._submitIfValid = !1);
          for (var a = this, o = r.attr("type"), s = this.options.fields[e].group || this.options.group, l = "radio" === o || "checkbox" === o ? 1 : r.length, c = 0; l > c; c++) {
              var u = r.eq(c);
              if (!this._isExcluded(u)) {
                  var d = u.parents(s)
                    , p = u.data("bv.messages")
                    , f = p.find('.help-block[data-bv-validator][data-bv-for="' + e + '"]')
                    , h = i ? f.filter('[data-bv-validator="' + i + '"]') : f
                    , m = d.find('.form-control-feedback[data-bv-icon-for="' + e + '"]')
                    , v = "function" == typeof (this.options.fields[e].container || this.options.container) ? (this.options.fields[e].container || this.options.container).call(this, u, this) : this.options.fields[e].container || this.options.container
                    , g = null;
                  if (i)
                      u.data("bv.result." + i, n);
                  else
                      for (var b in this.options.fields[e].validators)
                          u.data("bv.result." + b, n);
                  h.attr("data-bv-result", n);
                  var y, w, x = u.parents(".tab-pane");
                  switch (x && (y = x.attr("id")) && (w = t('a[href="#' + y + '"][data-toggle="tab"]').parent()),
                  n) {
                  case this.STATUS_VALIDATING:
                      g = null,
                      this.disableSubmitButtons(!0),
                      d.removeClass("has-success").removeClass("has-error"),
                      m && m.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).addClass(this.options.feedbackIcons.validating).show(),
                      w && w.removeClass("bv-tab-success").removeClass("bv-tab-error");
                      break;
                  case this.STATUS_INVALID:
                      g = !1,
                      this.disableSubmitButtons(!0),
                      d.removeClass("has-success").addClass("has-error"),
                      m && m.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.validating).addClass(this.options.feedbackIcons.invalid).show(),
                      w && w.removeClass("bv-tab-success").addClass("bv-tab-error");
                      break;
                  case this.STATUS_VALID:
                      g = 0 === f.filter('[data-bv-result="' + this.STATUS_NOT_VALIDATED + '"]').length ? f.filter('[data-bv-result="' + this.STATUS_VALID + '"]').length === f.length : null,
                      null !== g && (this.disableSubmitButtons(this.$submitButton ? !this.isValid() : !g),
                      m && m.removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).removeClass(this.options.feedbackIcons.valid).addClass(g ? this.options.feedbackIcons.valid : this.options.feedbackIcons.invalid).show()),
                      d.removeClass("has-error has-success").addClass(this.isValidContainer(d) ? "has-success" : "has-error"),
                      w && w.removeClass("bv-tab-success").removeClass("bv-tab-error").addClass(this.isValidContainer(x) ? "bv-tab-success" : "bv-tab-error");
                      break;
                  case this.STATUS_NOT_VALIDATED:
                  default:
                      g = null,
                      this.disableSubmitButtons(!1),
                      d.removeClass("has-success").removeClass("has-error"),
                      m && m.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).hide(),
                      w && w.removeClass("bv-tab-success").removeClass("bv-tab-error")
                  }
                  switch (!0) {
                  case m && "tooltip" === v:
                      !1 === g ? m.css("cursor", "pointer").tooltip("destroy").tooltip({
                          container: "body",
                          html: !0,
                          placement: "top",
                          title: f.filter('[data-bv-result="' + a.STATUS_INVALID + '"]').eq(0).html()
                      }) : m.tooltip("hide");
                      break;
                  case m && "popover" === v:
                      !1 === g ? m.css("cursor", "pointer").popover("destroy").popover({
                          container: "body",
                          content: f.filter('[data-bv-result="' + a.STATUS_INVALID + '"]').eq(0).html(),
                          html: !0,
                          placement: "top",
                          trigger: "hover click"
                      }) : m.popover("hide");
                      break;
                  default:
                      n === this.STATUS_INVALID ? h.show() : h.hide()
                  }
                  u.trigger(t.Event(this.options.events.fieldStatus), {
                      bv: this,
                      field: e,
                      element: u,
                      status: n
                  }),
                  this._onFieldValidated(u, i)
              }
          }
          return this
      },
      isValid: function() {
          for (var t in this.options.fields)
              if (!this.isValidField(t))
                  return !1;
          return !0
      },
      isValidField: function(e) {
          var n = t([]);
          switch (typeof e) {
          case "object":
              n = e,
              e = e.attr("data-bv-field");
              break;
          case "string":
              n = this.getFieldElements(e)
          }
          if (0 === n.length || null === this.options.fields[e] || !1 === this.options.fields[e].enabled)
              return !0;
          for (var i, r, a = n.attr("type"), o = "radio" === a || "checkbox" === a ? 1 : n.length, s = 0; o > s; s++)
              if (i = n.eq(s),
              !this._isExcluded(i))
                  for (r in this.options.fields[e].validators)
                      if (!1 !== this.options.fields[e].validators[r].enabled && i.data("bv.result." + r) !== this.STATUS_VALID)
                          return !1;
          return !0
      },
      isValidContainer: function(e) {
          var n = this
            , i = {}
            , r = "string" == typeof e ? t(e) : e;
          if (0 === r.length)
              return !0;
          r.find("[data-bv-field]").each(function() {
              var e = t(this)
                , r = e.attr("data-bv-field");
              n._isExcluded(e) || i[r] || (i[r] = e)
          });
          for (var a in i) {
              if (i[a].data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + a + '"]').filter('[data-bv-result="' + this.STATUS_INVALID + '"]').length > 0)
                  return !1
          }
          return !0
      },
      defaultSubmit: function() {
          this.$submitButton && t("<input/>").attr("type", "hidden").attr("data-bv-submit-hidden", "").attr("name", this.$submitButton.attr("name")).val(this.$submitButton.val()).appendTo(this.$form),
          this.$form.off("submit.bv").submit()
      },
      getInvalidFields: function() {
          return this.$invalidFields
      },
      getSubmitButton: function() {
          return this.$submitButton
      },
      getMessages: function(e, n) {
          var i = this
            , r = []
            , a = t([]);
          switch (!0) {
          case e && "object" == typeof e:
              a = e;
              break;
          case e && "string" == typeof e:
              var o = this.getFieldElements(e);
              if (o.length > 0) {
                  var s = o.attr("type");
                  a = "radio" === s || "checkbox" === s ? o.eq(0) : o
              }
              break;
          default:
              a = this.$invalidFields
          }
          var l = n ? '[data-bv-validator="' + n + '"]' : "";
          return a.each(function() {
              r = r.concat(t(this).data("bv.messages").find('.help-block[data-bv-for="' + t(this).attr("data-bv-field") + '"][data-bv-result="' + i.STATUS_INVALID + '"]' + l).map(function() {
                  var e = t(this).attr("data-bv-validator")
                    , n = t(this).attr("data-bv-for");
                  return !1 === i.options.fields[n].validators[e].enabled ? "" : t(this).html()
              }).get())
          }),
          r
      },
      updateOption: function(t, e, n, i) {
          return "object" == typeof t && (t = t.attr("data-bv-field")),
          this.options.fields[t] && this.options.fields[t].validators[e] && (this.options.fields[t].validators[e][n] = i,
          this.updateStatus(t, this.STATUS_NOT_VALIDATED, e)),
          this
      },
      addField: function(e, n) {
          var i = t([]);
          switch (typeof e) {
          case "object":
              i = e,
              e = e.attr("data-bv-field") || e.attr("name");
              break;
          case "string":
              delete this._cacheFields[e],
              i = this.getFieldElements(e)
          }
          i.attr("data-bv-field", e);
          for (var r = i.attr("type"), a = "radio" === r || "checkbox" === r ? 1 : i.length, o = 0; a > o; o++) {
              var s = i.eq(o)
                , l = this._parseOptions(s);
              l = null === l ? n : t.extend(!0, n, l),
              this.options.fields[e] = t.extend(!0, this.options.fields[e], l),
              this._cacheFields[e] = this._cacheFields[e] ? this._cacheFields[e].add(s) : s,
              this._initField("checkbox" === r || "radio" === r ? e : s)
          }
          return this.disableSubmitButtons(!1),
          this.$form.trigger(t.Event(this.options.events.fieldAdded), {
              field: e,
              element: i,
              options: this.options.fields[e]
          }),
          this
      },
      removeField: function(e) {
          var n = t([]);
          switch (typeof e) {
          case "object":
              n = e,
              e = e.attr("data-bv-field") || e.attr("name"),
              n.attr("data-bv-field", e);
              break;
          case "string":
              n = this.getFieldElements(e)
          }
          if (0 === n.length)
              return this;
          for (var i = n.attr("type"), r = "radio" === i || "checkbox" === i ? 1 : n.length, a = 0; r > a; a++) {
              var o = n.eq(a);
              this.$invalidFields = this.$invalidFields.not(o),
              this._cacheFields[e] = this._cacheFields[e].not(o)
          }
          return this._cacheFields[e] && 0 !== this._cacheFields[e].length || delete this.options.fields[e],
          ("checkbox" === i || "radio" === i) && this._initField(e),
          this.disableSubmitButtons(!1),
          this.$form.trigger(t.Event(this.options.events.fieldRemoved), {
              field: e,
              element: n
          }),
          this
      },
      resetField: function(e, n) {
          var i = t([]);
          switch (typeof e) {
          case "object":
              i = e,
              e = e.attr("data-bv-field");
              break;
          case "string":
              i = this.getFieldElements(e)
          }
          var r = i.length;
          if (this.options.fields[e])
              for (var a = 0; r > a; a++)
                  for (var o in this.options.fields[e].validators)
                      i.eq(a).removeData("bv.dfs." + o);
          if (this.updateStatus(e, this.STATUS_NOT_VALIDATED),
          n) {
              var s = i.attr("type");
              "radio" === s || "checkbox" === s ? i.removeAttr("checked").removeAttr("selected") : i.val("")
          }
          return this
      },
      resetForm: function(e) {
          for (var n in this.options.fields)
              this.resetField(n, e);
          return this.$invalidFields = t([]),
          this.$submitButton = null,
          this.disableSubmitButtons(!1),
          this
      },
      revalidateField: function(t) {
          return this.updateStatus(t, this.STATUS_NOT_VALIDATED).validateField(t),
          this
      },
      enableFieldValidators: function(t, e, n) {
          var i = this.options.fields[t].validators;
          if (n && i && i[n] && i[n].enabled !== e)
              this.options.fields[t].validators[n].enabled = e,
              this.updateStatus(t, this.STATUS_NOT_VALIDATED, n);
          else if (!n && this.options.fields[t].enabled !== e) {
              this.options.fields[t].enabled = e;
              for (var r in i)
                  this.enableFieldValidators(t, e, r)
          }
          return this
      },
      getDynamicOption: function(e, n) {
          var i = "string" == typeof e ? this.getFieldElements(e) : e
            , r = i.val();
          if ("function" == typeof n)
              return t.fn.bootstrapValidator.helpers.call(n, [r, this, i]);
          if ("string" == typeof n) {
              var a = this.getFieldElements(n);
              return a.length ? a.val() : t.fn.bootstrapValidator.helpers.call(n, [r, this, i]) || n
          }
          return null
      },
      destroy: function() {
          var e, n, i, r, a, o;
          for (e in this.options.fields) {
              n = this.getFieldElements(e),
              o = this.options.fields[e].group || this.options.group;
              for (var s = 0; s < n.length; s++) {
                  if (i = n.eq(s),
                  i.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + e + '"]').remove().end().end().removeData("bv.messages").parents(o).removeClass("has-feedback has-error has-success").end().off(".bv").removeAttr("data-bv-field"),
                  a = i.parents(o).find('i[data-bv-icon-for="' + e + '"]')) {
                      switch ("function" == typeof (this.options.fields[e].container || this.options.container) ? (this.options.fields[e].container || this.options.container).call(this, i, this) : this.options.fields[e].container || this.options.container) {
                      case "tooltip":
                          a.tooltip("destroy").remove();
                          break;
                      case "popover":
                          a.popover("destroy").remove();
                          break;
                      default:
                          a.remove()
                      }
                  }
                  for (r in this.options.fields[e].validators)
                      i.data("bv.dfs." + r) && i.data("bv.dfs." + r).reject(),
                      i.removeData("bv.result." + r).removeData("bv.response." + r).removeData("bv.dfs." + r),
                      "function" == typeof t.fn.bootstrapValidator.validators[r].destroy && t.fn.bootstrapValidator.validators[r].destroy(this, i, this.options.fields[e].validators[r])
              }
          }
          this.disableSubmitButtons(!1),
          this.$hiddenButton.remove(),
          this.$form.removeClass(this.options.elementClass).off(".bv").removeData("bootstrapValidator").find("[data-bv-submit-hidden]").remove().end().find('[type="submit"]').off("click.bv")
      }
  },
  t.fn.bootstrapValidator = function(n) {
      var i = arguments;
      return this.each(function() {
          var r = t(this)
            , a = r.data("bootstrapValidator")
            , o = "object" == typeof n && n;
          a || (a = new e(this,o),
          r.data("bootstrapValidator", a)),
          "string" == typeof n && a[n].apply(a, Array.prototype.slice.call(i, 1))
      })
  }
  ,
  t.fn.bootstrapValidator.DEFAULT_OPTIONS = {
      elementClass: "bv-form",
      message: "This value is not valid",
      group: ".form-group",
      container: null,
      threshold: null,
      excluded: [":disabled", ":hidden", ":not(:visible)"],
      feedbackIcons: {
          valid: null,
          invalid: null,
          validating: null
      },
      submitButtons: '[type="submit"]',
      live: "enabled",
      fields: null,
      events: {
          formInit: "init.form.bv",
          formError: "error.form.bv",
          formSuccess: "success.form.bv",
          fieldAdded: "added.field.bv",
          fieldRemoved: "removed.field.bv",
          fieldInit: "init.field.bv",
          fieldError: "error.field.bv",
          fieldSuccess: "success.field.bv",
          fieldStatus: "status.field.bv",
          validatorError: "error.validator.bv",
          validatorSuccess: "success.validator.bv"
      },
      verbose: !0
  },
  t.fn.bootstrapValidator.validators = {},
  t.fn.bootstrapValidator.i18n = {},
  t.fn.bootstrapValidator.Constructor = e,
  t.fn.bootstrapValidator.helpers = {
      call: function(t, e) {
          if ("function" == typeof t)
              return t.apply(this, e);
          if ("string" == typeof t) {
              "()" === t.substring(t.length - 2) && (t = t.substring(0, t.length - 2));
              for (var n = t.split("."), i = n.pop(), r = window, a = 0; a < n.length; a++)
                  r = r[n[a]];
              return void 0 === r[i] ? null : r[i].apply(this, e)
          }
      },
      format: function(e, n) {
          t.isArray(n) || (n = [n]);
          for (var i in n)
              e = e.replace("%s", n[i]);
          return e
      },
      date: function(t, e, n, i) {
          if (isNaN(t) || isNaN(e) || isNaN(n))
              return !1;
          if (n.length > 2 || e.length > 2 || t.length > 4)
              return !1;
          if (n = parseInt(n, 10),
          e = parseInt(e, 10),
          1e3 > (t = parseInt(t, 10)) || t > 9999 || 0 >= e || e > 12)
              return !1;
          var r = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          if ((t % 400 == 0 || t % 100 != 0 && t % 4 == 0) && (r[1] = 29),
          0 >= n || n > r[e - 1])
              return !1;
          if (!0 === i) {
              var a = new Date
                , o = a.getFullYear()
                , s = a.getMonth()
                , l = a.getDate();
              return o > t || t === o && s > e - 1 || t === o && e - 1 === s && l > n
          }
          return !0
      },
      luhn: function(t) {
          for (var e = t.length, n = 0, i = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]], r = 0; e--; )
              r += i[n][parseInt(t.charAt(e), 10)],
              n ^= 1;
          return r % 10 == 0 && r > 0
      },
      mod11And10: function(t) {
          for (var e = 5, n = t.length, i = 0; n > i; i++)
              e = (2 * (e || 10) % 11 + parseInt(t.charAt(i), 10)) % 10;
          return 1 === e
      },
      mod37And36: function(t, e) {
          e = e || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          for (var n = e.length, i = t.length, r = Math.floor(n / 2), a = 0; i > a; a++)
              r = (2 * (r || n) % (n + 1) + e.indexOf(t.charAt(a))) % n;
          return 1 === r
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.base64 = t.extend(t.fn.bootstrapValidator.i18n.base64 || {}, {
      default: "Please enter a valid base 64 encoded"
  }),
  t.fn.bootstrapValidator.validators.base64 = {
      validate: function(t, e) {
          var n = e.val();
          return "" === n || /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(n)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.between = t.extend(t.fn.bootstrapValidator.i18n.between || {}, {
      default: "Please enter a value between %s and %s",
      notInclusive: "Please enter a value between %s and %s strictly"
  }),
  t.fn.bootstrapValidator.validators.between = {
      html5Attributes: {
          message: "message",
          min: "min",
          max: "max",
          inclusive: "inclusive"
      },
      enableByHtml5: function(t) {
          return "range" === t.attr("type") && {
              min: t.attr("min"),
              max: t.attr("max")
          }
      },
      validate: function(e, n, i) {
          var r = n.val();
          if ("" === r)
              return !0;
          if (!t.isNumeric(r))
              return !1;
          var a = t.isNumeric(i.min) ? i.min : e.getDynamicOption(n, i.min)
            , o = t.isNumeric(i.max) ? i.max : e.getDynamicOption(n, i.max);
          return r = parseFloat(r),
          !0 === i.inclusive || void 0 === i.inclusive ? {
              valid: r >= a && o >= r,
              message: t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.between.default, [a, o])
          } : {
              valid: r > a && o > r,
              message: t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.between.notInclusive, [a, o])
          }
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.validators.blank = {
      validate: function() {
          return !0
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.callback = t.extend(t.fn.bootstrapValidator.i18n.callback || {}, {
      default: "Please enter a valid value"
  }),
  t.fn.bootstrapValidator.validators.callback = {
      html5Attributes: {
          message: "message",
          callback: "callback"
      },
      validate: function(e, n, i) {
          var r = n.val()
            , a = new t.Deferred
            , o = {
              valid: !0
          };
          if (i.callback) {
              var s = t.fn.bootstrapValidator.helpers.call(i.callback, [r, e, n]);
              o = "boolean" == typeof s ? {
                  valid: s
              } : s
          }
          return a.resolve(n, "callback", o),
          a
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.choice = t.extend(t.fn.bootstrapValidator.i18n.choice || {}, {
      default: "Please enter a valid value",
      less: "Please choose %s options at minimum",
      more: "Please choose %s options at maximum",
      between: "Please choose %s - %s options"
  }),
  t.fn.bootstrapValidator.validators.choice = {
      html5Attributes: {
          message: "message",
          min: "min",
          max: "max"
      },
      validate: function(e, n, i) {
          var r = n.is("select") ? e.getFieldElements(n.attr("data-bv-field")).find("option").filter(":selected").length : e.getFieldElements(n.attr("data-bv-field")).filter(":checked").length
            , a = i.min ? t.isNumeric(i.min) ? i.min : e.getDynamicOption(n, i.min) : null
            , o = i.max ? t.isNumeric(i.max) ? i.max : e.getDynamicOption(n, i.max) : null
            , s = !0
            , l = i.message || t.fn.bootstrapValidator.i18n.choice.default;
          switch ((a && r < parseInt(a, 10) || o && r > parseInt(o, 10)) && (s = !1),
          !0) {
          case !!a && !!o:
              l = t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.choice.between, [parseInt(a, 10), parseInt(o, 10)]);
              break;
          case !!a:
              l = t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.choice.less, parseInt(a, 10));
              break;
          case !!o:
              l = t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.choice.more, parseInt(o, 10))
          }
          return {
              valid: s,
              message: l
          }
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.creditCard = t.extend(t.fn.bootstrapValidator.i18n.creditCard || {}, {
      default: "Please enter a valid credit card number"
  }),
  t.fn.bootstrapValidator.validators.creditCard = {
      validate: function(e, n) {
          var i = n.val();
          if ("" === i)
              return !0;
          if (/[^0-9-\s]+/.test(i))
              return !1;
          if (i = i.replace(/\D/g, ""),
          !t.fn.bootstrapValidator.helpers.luhn(i))
              return !1;
          var r, a, o = {
              AMERICAN_EXPRESS: {
                  length: [15],
                  prefix: ["34", "37"]
              },
              DINERS_CLUB: {
                  length: [14],
                  prefix: ["300", "301", "302", "303", "304", "305", "36"]
              },
              DINERS_CLUB_US: {
                  length: [16],
                  prefix: ["54", "55"]
              },
              DISCOVER: {
                  length: [16],
                  prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"]
              },
              JCB: {
                  length: [16],
                  prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"]
              },
              LASER: {
                  length: [16, 17, 18, 19],
                  prefix: ["6304", "6706", "6771", "6709"]
              },
              MAESTRO: {
                  length: [12, 13, 14, 15, 16, 17, 18, 19],
                  prefix: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"]
              },
              MASTERCARD: {
                  length: [16],
                  prefix: ["51", "52", "53", "54", "55"]
              },
              SOLO: {
                  length: [16, 18, 19],
                  prefix: ["6334", "6767"]
              },
              UNIONPAY: {
                  length: [16, 17, 18, 19],
                  prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"]
              },
              VISA: {
                  length: [16],
                  prefix: ["4"]
              }
          };
          for (r in o)
              for (a in o[r].prefix)
                  if (i.substr(0, o[r].prefix[a].length) === o[r].prefix[a] && -1 !== t.inArray(i.length, o[r].length))
                      return !0;
          return !1
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.cusip = t.extend(t.fn.bootstrapValidator.i18n.cusip || {}, {
      default: "Please enter a valid CUSIP number"
  }),
  t.fn.bootstrapValidator.validators.cusip = {
      validate: function(e, n) {
          var i = n.val();
          if ("" === i)
              return !0;
          if (i = i.toUpperCase(),
          !/^[0-9A-Z]{9}$/.test(i))
              return !1;
          for (var r = t.map(i.split(""), function(t) {
              var e = t.charCodeAt(0);
              return e >= "A".charCodeAt(0) && e <= "Z".charCodeAt(0) ? e - "A".charCodeAt(0) + 10 : t
          }), a = r.length, o = 0, s = 0; a - 1 > s; s++) {
              var l = parseInt(r[s], 10);
              s % 2 != 0 && (l *= 2),
              l > 9 && (l -= 9),
              o += l
          }
          return (o = (10 - o % 10) % 10) === r[a - 1]
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.cvv = t.extend(t.fn.bootstrapValidator.i18n.cvv || {}, {
      default: "Please enter a valid CVV number"
  }),
  t.fn.bootstrapValidator.validators.cvv = {
      html5Attributes: {
          message: "message",
          ccfield: "creditCardField"
      },
      validate: function(e, n, i) {
          var r = n.val();
          if ("" === r)
              return !0;
          if (!/^[0-9]{3,4}$/.test(r))
              return !1;
          if (!i.creditCardField)
              return !0;
          var a = e.getFieldElements(i.creditCardField).val();
          if ("" === a)
              return !0;
          a = a.replace(/\D/g, "");
          var o, s, l = {
              AMERICAN_EXPRESS: {
                  length: [15],
                  prefix: ["34", "37"]
              },
              DINERS_CLUB: {
                  length: [14],
                  prefix: ["300", "301", "302", "303", "304", "305", "36"]
              },
              DINERS_CLUB_US: {
                  length: [16],
                  prefix: ["54", "55"]
              },
              DISCOVER: {
                  length: [16],
                  prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"]
              },
              JCB: {
                  length: [16],
                  prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"]
              },
              LASER: {
                  length: [16, 17, 18, 19],
                  prefix: ["6304", "6706", "6771", "6709"]
              },
              MAESTRO: {
                  length: [12, 13, 14, 15, 16, 17, 18, 19],
                  prefix: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"]
              },
              MASTERCARD: {
                  length: [16],
                  prefix: ["51", "52", "53", "54", "55"]
              },
              SOLO: {
                  length: [16, 18, 19],
                  prefix: ["6334", "6767"]
              },
              UNIONPAY: {
                  length: [16, 17, 18, 19],
                  prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"]
              },
              VISA: {
                  length: [16],
                  prefix: ["4"]
              }
          }, c = null;
          for (o in l)
              for (s in l[o].prefix)
                  if (a.substr(0, l[o].prefix[s].length) === l[o].prefix[s] && -1 !== t.inArray(a.length, l[o].length)) {
                      c = o;
                      break
                  }
          return null !== c && ("AMERICAN_EXPRESS" === c ? 4 === r.length : 3 === r.length)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.date = t.extend(t.fn.bootstrapValidator.i18n.date || {}, {
      default: "Please enter a valid date"
  }),
  t.fn.bootstrapValidator.validators.date = {
      html5Attributes: {
          message: "message",
          format: "format",
          separator: "separator"
      },
      validate: function(e, n, i) {
          var r = n.val();
          if ("" === r)
              return !0;
          i.format = i.format || "MM/DD/YYYY",
          "date" === n.attr("type") && (i.format = "YYYY-MM-DD");
          var a = i.format.split(" ")
            , o = a[0]
            , s = a.length > 1 ? a[1] : null
            , l = a.length > 2 ? a[2] : null
            , c = r.split(" ")
            , u = c[0]
            , d = c.length > 1 ? c[1] : null;
          if (a.length !== c.length)
              return !1;
          var p = i.separator;
          if (p || (p = -1 !== u.indexOf("/") ? "/" : -1 !== u.indexOf("-") ? "-" : null),
          null === p || -1 === u.indexOf(p))
              return !1;
          if (u = u.split(p),
          o = o.split(p),
          u.length !== o.length)
              return !1;
          var f = u[t.inArray("YYYY", o)]
            , h = u[t.inArray("MM", o)]
            , m = u[t.inArray("DD", o)];
          if (!f || !h || !m || 4 !== f.length)
              return !1;
          var v = null
            , g = null
            , b = null;
          if (s) {
              if (s = s.split(":"),
              d = d.split(":"),
              s.length !== d.length)
                  return !1;
              if (g = d.length > 0 ? d[0] : null,
              v = d.length > 1 ? d[1] : null,
              b = d.length > 2 ? d[2] : null) {
                  if (isNaN(b) || b.length > 2)
                      return !1;
                  if (0 > (b = parseInt(b, 10)) || b > 60)
                      return !1
              }
              if (g) {
                  if (isNaN(g) || g.length > 2)
                      return !1;
                  if (0 > (g = parseInt(g, 10)) || g >= 24 || l && g > 12)
                      return !1
              }
              if (v) {
                  if (isNaN(v) || v.length > 2)
                      return !1;
                  if (0 > (v = parseInt(v, 10)) || v > 59)
                      return !1
              }
          }
          return t.fn.bootstrapValidator.helpers.date(f, h, m)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.different = t.extend(t.fn.bootstrapValidator.i18n.different || {}, {
      default: "Please enter a different value"
  }),
  t.fn.bootstrapValidator.validators.different = {
      html5Attributes: {
          message: "message",
          field: "field"
      },
      validate: function(t, e, n) {
          var i = e.val();
          if ("" === i)
              return !0;
          for (var r = n.field.split(","), a = !0, o = 0; o < r.length; o++) {
              var s = t.getFieldElements(r[o]);
              if (null != s && 0 !== s.length) {
                  var l = s.val();
                  i === l ? a = !1 : "" !== l && t.updateStatus(s, t.STATUS_VALID, "different")
              }
          }
          return a
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.digits = t.extend(t.fn.bootstrapValidator.i18n.digits || {}, {
      default: "Please enter only digits"
  }),
  t.fn.bootstrapValidator.validators.digits = {
      validate: function(t, e) {
          var n = e.val();
          return "" === n || /^\d+$/.test(n)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.ean = t.extend(t.fn.bootstrapValidator.i18n.ean || {}, {
      default: "Please enter a valid EAN number"
  }),
  t.fn.bootstrapValidator.validators.ean = {
      validate: function(t, e) {
          var n = e.val();
          if ("" === n)
              return !0;
          if (!/^(\d{8}|\d{12}|\d{13})$/.test(n))
              return !1;
          for (var i = n.length, r = 0, a = 8 === i ? [3, 1] : [1, 3], o = 0; i - 1 > o; o++)
              r += parseInt(n.charAt(o), 10) * a[o % 2];
          return (r = (10 - r % 10) % 10) + "" === n.charAt(i - 1)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.emailAddress = t.extend(t.fn.bootstrapValidator.i18n.emailAddress || {}, {
      default: "Please enter a valid email address"
  }),
  t.fn.bootstrapValidator.validators.emailAddress = {
      html5Attributes: {
          message: "message",
          multiple: "multiple",
          separator: "separator"
      },
      enableByHtml5: function(t) {
          return "email" === t.attr("type")
      },
      validate: function(t, e, n) {
          var i = e.val();
          if ("" === i)
              return !0;
          var r = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
          if (!0 === n.multiple || "true" === n.multiple) {
              for (var a = n.separator || /[,;]/, o = this._splitEmailAddresses(i, a), s = 0; s < o.length; s++)
                  if (!r.test(o[s]))
                      return !1;
              return !0
          }
          return r.test(i)
      },
      _splitEmailAddresses: function(t, e) {
          for (var n = t.split(/"/), i = n.length, r = [], a = "", o = 0; i > o; o++)
              if (o % 2 == 0) {
                  var s = n[o].split(e)
                    , l = s.length;
                  if (1 === l)
                      a += s[0];
                  else {
                      r.push(a + s[0]);
                      for (var c = 1; l - 1 > c; c++)
                          r.push(s[c]);
                      a = s[l - 1]
                  }
              } else
                  a += '"' + n[o],
                  i - 1 > o && (a += '"');
          return r.push(a),
          r
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.file = t.extend(t.fn.bootstrapValidator.i18n.file || {}, {
      default: "Please choose a valid file"
  }),
  t.fn.bootstrapValidator.validators.file = {
      html5Attributes: {
          extension: "extension",
          maxsize: "maxSize",
          minsize: "minSize",
          message: "message",
          type: "type"
      },
      validate: function(e, n, i) {
          var r = n.val();
          if ("" === r)
              return !0;
          var a, o = i.extension ? i.extension.toLowerCase().split(",") : null, s = i.type ? i.type.toLowerCase().split(",") : null;
          if (window.File && window.FileList && window.FileReader)
              for (var l = n.get(0).files, c = l.length, u = 0; c > u; u++) {
                  if (i.minSize && l[u].size < parseInt(i.minSize, 10))
                      return !1;
                  if (i.maxSize && l[u].size > parseInt(i.maxSize, 10))
                      return !1;
                  if (a = l[u].name.substr(l[u].name.lastIndexOf(".") + 1),
                  o && -1 === t.inArray(a.toLowerCase(), o))
                      return !1;
                  if (l[u].type && s && -1 === t.inArray(l[u].type.toLowerCase(), s))
                      return !1
              }
          else if (a = r.substr(r.lastIndexOf(".") + 1),
          o && -1 === t.inArray(a.toLowerCase(), o))
              return !1;
          return !0
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.greaterThan = t.extend(t.fn.bootstrapValidator.i18n.greaterThan || {}, {
      default: "Please enter a value greater than or equal to %s",
      notInclusive: "Please enter a value greater than %s"
  }),
  t.fn.bootstrapValidator.validators.greaterThan = {
      html5Attributes: {
          message: "message",
          value: "value",
          inclusive: "inclusive"
      },
      enableByHtml5: function(t) {
          var e = t.attr("type")
            , n = t.attr("min");
          return !(!n || "date" === e) && {
              value: n
          }
      },
      validate: function(e, n, i) {
          var r = n.val();
          if ("" === r)
              return !0;
          if (!t.isNumeric(r))
              return !1;
          var a = t.isNumeric(i.value) ? i.value : e.getDynamicOption(n, i.value);
          return r = parseFloat(r),
          !0 === i.inclusive || void 0 === i.inclusive ? {
              valid: r >= a,
              message: t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.greaterThan.default, a)
          } : {
              valid: r > a,
              message: t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.greaterThan.notInclusive, a)
          }
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.grid = t.extend(t.fn.bootstrapValidator.i18n.grid || {}, {
      default: "Please enter a valid GRId number"
  }),
  t.fn.bootstrapValidator.validators.grid = {
      validate: function(e, n) {
          var i = n.val();
          return "" === i || (i = i.toUpperCase(),
          !!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(i) && (i = i.replace(/\s/g, "").replace(/-/g, ""),
          "GRID:" === i.substr(0, 5) && (i = i.substr(5)),
          t.fn.bootstrapValidator.helpers.mod37And36(i)))
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.hex = t.extend(t.fn.bootstrapValidator.i18n.hex || {}, {
      default: "Please enter a valid hexadecimal number"
  }),
  t.fn.bootstrapValidator.validators.hex = {
      validate: function(t, e) {
          var n = e.val();
          return "" === n || /^[0-9a-fA-F]+$/.test(n)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.hexColor = t.extend(t.fn.bootstrapValidator.i18n.hexColor || {}, {
      default: "Please enter a valid hex color"
  }),
  t.fn.bootstrapValidator.validators.hexColor = {
      enableByHtml5: function(t) {
          return "color" === t.attr("type")
      },
      validate: function(t, e) {
          var n = e.val();
          return "" === n || /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.iban = t.extend(t.fn.bootstrapValidator.i18n.iban || {}, {
      default: "Please enter a valid IBAN number",
      countryNotSupported: "The country code %s is not supported",
      country: "Please enter a valid IBAN number in %s",
      countries: {
          AD: "Andorra",
          AE: "United Arab Emirates",
          AL: "Albania",
          AO: "Angola",
          AT: "Austria",
          AZ: "Azerbaijan",
          BA: "Bosnia and Herzegovina",
          BE: "Belgium",
          BF: "Burkina Faso",
          BG: "Bulgaria",
          BH: "Bahrain",
          BI: "Burundi",
          BJ: "Benin",
          BR: "Brazil",
          CH: "Switzerland",
          CI: "Ivory Coast",
          CM: "Cameroon",
          CR: "Costa Rica",
          CV: "Cape Verde",
          CY: "Cyprus",
          CZ: "Czech Republic",
          DE: "Germany",
          DK: "Denmark",
          DO: "Dominica",
          DZ: "Algeria",
          EE: "Estonia",
          ES: "Spain",
          FI: "Finland",
          FO: "Faroe Islands",
          FR: "France",
          GB: "United Kingdom",
          GE: "Georgia",
          GI: "Gibraltar",
          GL: "Greenland",
          GR: "Greece",
          GT: "Guatemala",
          HR: "Croatia",
          HU: "Hungary",
          IE: "Ireland",
          IL: "Israel",
          IR: "Iran",
          IS: "Iceland",
          IT: "Italy",
          JO: "Jordan",
          KW: "Kuwait",
          KZ: "Kazakhstan",
          LB: "Lebanon",
          LI: "Liechtenstein",
          LT: "Lithuania",
          LU: "Luxembourg",
          LV: "Latvia",
          MC: "Monaco",
          MD: "Moldova",
          ME: "Montenegro",
          MG: "Madagascar",
          MK: "Macedonia",
          ML: "Mali",
          MR: "Mauritania",
          MT: "Malta",
          MU: "Mauritius",
          MZ: "Mozambique",
          NL: "Netherlands",
          NO: "Norway",
          PK: "Pakistan",
          PL: "Poland",
          PS: "Palestine",
          PT: "Portugal",
          QA: "Qatar",
          RO: "Romania",
          RS: "Serbia",
          SA: "Saudi Arabia",
          SE: "Sweden",
          SI: "Slovenia",
          SK: "Slovakia",
          SM: "San Marino",
          SN: "Senegal",
          TN: "Tunisia",
          TR: "Turkey",
          VG: "Virgin Islands, British"
      }
  }),
  t.fn.bootstrapValidator.validators.iban = {
      html5Attributes: {
          message: "message",
          country: "country"
      },
      REGEX: {
          AD: "AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",
          AE: "AE[0-9]{2}[0-9]{3}[0-9]{16}",
          AL: "AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",
          AO: "AO[0-9]{2}[0-9]{21}",
          AT: "AT[0-9]{2}[0-9]{5}[0-9]{11}",
          AZ: "AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",
          BA: "BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",
          BE: "BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",
          BF: "BF[0-9]{2}[0-9]{23}",
          BG: "BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",
          BH: "BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",
          BI: "BI[0-9]{2}[0-9]{12}",
          BJ: "BJ[0-9]{2}[A-Z]{1}[0-9]{23}",
          BR: "BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",
          CH: "CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
          CI: "CI[0-9]{2}[A-Z]{1}[0-9]{23}",
          CM: "CM[0-9]{2}[0-9]{23}",
          CR: "CR[0-9]{2}[0-9]{3}[0-9]{14}",
          CV: "CV[0-9]{2}[0-9]{21}",
          CY: "CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",
          CZ: "CZ[0-9]{2}[0-9]{20}",
          DE: "DE[0-9]{2}[0-9]{8}[0-9]{10}",
          DK: "DK[0-9]{2}[0-9]{14}",
          DO: "DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",
          DZ: "DZ[0-9]{2}[0-9]{20}",
          EE: "EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",
          ES: "ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",
          FI: "FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",
          FO: "FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
          FR: "FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
          GB: "GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
          GE: "GE[0-9]{2}[A-Z]{2}[0-9]{16}",
          GI: "GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",
          GL: "GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
          GR: "GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",
          GT: "GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",
          HR: "HR[0-9]{2}[0-9]{7}[0-9]{10}",
          HU: "HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",
          IE: "IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
          IL: "IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",
          IR: "IR[0-9]{2}[0-9]{22}",
          IS: "IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",
          IT: "IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
          JO: "JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",
          KW: "KW[0-9]{2}[A-Z]{4}[0-9]{22}",
          KZ: "KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
          LB: "LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",
          LI: "LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
          LT: "LT[0-9]{2}[0-9]{5}[0-9]{11}",
          LU: "LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
          LV: "LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",
          MC: "MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
          MD: "MD[0-9]{2}[A-Z0-9]{20}",
          ME: "ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
          MG: "MG[0-9]{2}[0-9]{23}",
          MK: "MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",
          ML: "ML[0-9]{2}[A-Z]{1}[0-9]{23}",
          MR: "MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",
          MT: "MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",
          MU: "MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",
          MZ: "MZ[0-9]{2}[0-9]{21}",
          NL: "NL[0-9]{2}[A-Z]{4}[0-9]{10}",
          NO: "NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",
          PK: "PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
          PL: "PL[0-9]{2}[0-9]{8}[0-9]{16}",
          PS: "PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
          PT: "PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",
          QA: "QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
          RO: "RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
          RS: "RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
          SA: "SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",
          SE: "SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",
          SI: "SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",
          SK: "SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",
          SM: "SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
          SN: "SN[0-9]{2}[A-Z]{1}[0-9]{23}",
          TN: "TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
          TR: "TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",
          VG: "VG[0-9]{2}[A-Z]{4}[0-9]{16}"
      },
      validate: function(e, n, i) {
          var r = n.val();
          if ("" === r)
              return !0;
          r = r.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
          var a = i.country;
          if (a ? "string" == typeof a && this.REGEX[a] || (a = e.getDynamicOption(n, a)) : a = r.substr(0, 2),
          !this.REGEX[a])
              return {
                  valid: !1,
                  message: t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.iban.countryNotSupported, a)
              };
          if (!new RegExp("^" + this.REGEX[a] + "$").test(r))
              return {
                  valid: !1,
                  message: t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.iban.country, t.fn.bootstrapValidator.i18n.iban.countries[a])
              };
          r = r.substr(4) + r.substr(0, 4),
          r = t.map(r.split(""), function(t) {
              var e = t.charCodeAt(0);
              return e >= "A".charCodeAt(0) && e <= "Z".charCodeAt(0) ? e - "A".charCodeAt(0) + 10 : t
          }),
          r = r.join("");
          for (var o = parseInt(r.substr(0, 1), 10), s = r.length, l = 1; s > l; ++l)
              o = (10 * o + parseInt(r.substr(l, 1), 10)) % 97;
          return {
              valid: 1 === o,
              message: t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.iban.country, t.fn.bootstrapValidator.i18n.iban.countries[a])
          }
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.id = t.extend(t.fn.bootstrapValidator.i18n.id || {}, {
      default: "Please enter a valid identification number",
      countryNotSupported: "The country code %s is not supported",
      country: "Please enter a valid identification number in %s",
      countries: {
          BA: "Bosnia and Herzegovina",
          BG: "Bulgaria",
          BR: "Brazil",
          CH: "Switzerland",
          CL: "Chile",
          CN: "China",
          CZ: "Czech Republic",
          DK: "Denmark",
          EE: "Estonia",
          ES: "Spain",
          FI: "Finland",
          HR: "Croatia",
          IE: "Ireland",
          IS: "Iceland",
          LT: "Lithuania",
          LV: "Latvia",
          ME: "Montenegro",
          MK: "Macedonia",
          NL: "Netherlands",
          RO: "Romania",
          RS: "Serbia",
          SE: "Sweden",
          SI: "Slovenia",
          SK: "Slovakia",
          SM: "San Marino",
          TH: "Thailand",
          ZA: "South Africa"
      }
  }),
  t.fn.bootstrapValidator.validators.id = {
      html5Attributes: {
          message: "message",
          country: "country"
      },
      COUNTRY_CODES: ["BA", "BG", "BR", "CH", "CL", "CN", "CZ", "DK", "EE", "ES", "FI", "HR", "IE", "IS", "LT", "LV", "ME", "MK", "NL", "RO", "RS", "SE", "SI", "SK", "SM", "TH", "ZA"],
      validate: function(e, n, i) {
          var r = n.val();
          if ("" === r)
              return !0;
          var a = i.country;
          return a ? ("string" != typeof a || -1 === t.inArray(a.toUpperCase(), this.COUNTRY_CODES)) && (a = e.getDynamicOption(n, a)) : a = r.substr(0, 2),
          -1 === t.inArray(a, this.COUNTRY_CODES) ? {
              valid: !1,
              message: t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.id.countryNotSupported, a)
          } : !!this[["_", a.toLowerCase()].join("")](r) || {
              valid: !1,
              message: t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.id.country, t.fn.bootstrapValidator.i18n.id.countries[a.toUpperCase()])
          }
      },
      _validateJMBG: function(t, e) {
          if (!/^\d{13}$/.test(t))
              return !1;
          var n = parseInt(t.substr(0, 2), 10)
            , i = parseInt(t.substr(2, 2), 10)
            , r = (parseInt(t.substr(4, 3), 10),
          parseInt(t.substr(7, 2), 10))
            , a = parseInt(t.substr(12, 1), 10);
          if (n > 31 || i > 12)
              return !1;
          for (var o = 0, s = 0; 6 > s; s++)
              o += (7 - s) * (parseInt(t.charAt(s), 10) + parseInt(t.charAt(s + 6), 10));
          if (o = 11 - o % 11,
          (10 === o || 11 === o) && (o = 0),
          o !== a)
              return !1;
          switch (e.toUpperCase()) {
          case "BA":
              return r >= 10 && 19 >= r;
          case "MK":
              return r >= 41 && 49 >= r;
          case "ME":
              return r >= 20 && 29 >= r;
          case "RS":
              return r >= 70 && 99 >= r;
          case "SI":
              return r >= 50 && 59 >= r;
          default:
              return !0
          }
      },
      _ba: function(t) {
          return this._validateJMBG(t, "BA")
      },
      _mk: function(t) {
          return this._validateJMBG(t, "MK")
      },
      _me: function(t) {
          return this._validateJMBG(t, "ME")
      },
      _rs: function(t) {
          return this._validateJMBG(t, "RS")
      },
      _si: function(t) {
          return this._validateJMBG(t, "SI")
      },
      _bg: function(e) {
          if (!/^\d{10}$/.test(e) && !/^\d{6}\s\d{3}\s\d{1}$/.test(e))
              return !1;
          e = e.replace(/\s/g, "");
          var n = parseInt(e.substr(0, 2), 10) + 1900
            , i = parseInt(e.substr(2, 2), 10)
            , r = parseInt(e.substr(4, 2), 10);
          if (i > 40 ? (n += 100,
          i -= 40) : i > 20 && (n -= 100,
          i -= 20),
          !t.fn.bootstrapValidator.helpers.date(n, i, r))
              return !1;
          for (var a = 0, o = [2, 4, 8, 5, 10, 9, 7, 3, 6], s = 0; 9 > s; s++)
              a += parseInt(e.charAt(s), 10) * o[s];
          return (a = a % 11 % 10) + "" === e.substr(9, 1)
      },
      _br: function(t) {
          if (/^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(t))
              return !1;
          if (!/^\d{11}$/.test(t) && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(t))
              return !1;
          t = t.replace(/\./g, "").replace(/-/g, "");
          for (var e = 0, n = 0; 9 > n; n++)
              e += (10 - n) * parseInt(t.charAt(n), 10);
          if (e = 11 - e % 11,
          (10 === e || 11 === e) && (e = 0),
          e + "" !== t.charAt(9))
              return !1;
          var i = 0;
          for (n = 0; 10 > n; n++)
              i += (11 - n) * parseInt(t.charAt(n), 10);
          return i = 11 - i % 11,
          (10 === i || 11 === i) && (i = 0),
          i + "" === t.charAt(10)
      },
      _ch: function(t) {
          if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(t))
              return !1;
          t = t.replace(/\D/g, "").substr(3);
          for (var e = t.length, n = 0, i = 8 === e ? [3, 1] : [1, 3], r = 0; e - 1 > r; r++)
              n += parseInt(t.charAt(r), 10) * i[r % 2];
          return (n = 10 - n % 10) + "" === t.charAt(e - 1)
      },
      _cl: function(t) {
          if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(t))
              return !1;
          for (t = t.replace(/\-/g, ""); t.length < 9; )
              t = "0" + t;
          for (var e = 0, n = [3, 2, 7, 6, 5, 4, 3, 2], i = 0; 8 > i; i++)
              e += parseInt(t.charAt(i), 10) * n[i];
          return e = 11 - e % 11,
          11 === e ? e = 0 : 10 === e && (e = "K"),
          e + "" === t.charAt(8).toUpperCase()
      },
      _cn: function(e) {
          if (e = e.trim(),
          !/^\d{15}$/.test(e) && !/^\d{17}[\dXx]{1}$/.test(e))
              return !1;
          var n = {
              11: {
                  0: [0],
                  1: [[0, 9], [11, 17]],
                  2: [0, 28, 29]
              },
              12: {
                  0: [0],
                  1: [[0, 16]],
                  2: [0, 21, 23, 25]
              },
              13: {
                  0: [0],
                  1: [[0, 5], 7, 8, 21, [23, 33], [81, 85]],
                  2: [[0, 5], [7, 9], [23, 25], 27, 29, 30, 81, 83],
                  3: [[0, 4], [21, 24]],
                  4: [[0, 4], 6, 21, [23, 35], 81],
                  5: [[0, 3], [21, 35], 81, 82],
                  6: [[0, 4], [21, 38], [81, 84]],
                  7: [[0, 3], 5, 6, [21, 33]],
                  8: [[0, 4], [21, 28]],
                  9: [[0, 3], [21, 30], [81, 84]],
                  10: [[0, 3], [22, 26], 28, 81, 82],
                  11: [[0, 2], [21, 28], 81, 82]
              },
              14: {
                  0: [0],
                  1: [0, 1, [5, 10], [21, 23], 81],
                  2: [[0, 3], 11, 12, [21, 27]],
                  3: [[0, 3], 11, 21, 22],
                  4: [[0, 2], 11, 21, [23, 31], 81],
                  5: [[0, 2], 21, 22, 24, 25, 81],
                  6: [[0, 3], [21, 24]],
                  7: [[0, 2], [21, 29], 81],
                  8: [[0, 2], [21, 30], 81, 82],
                  9: [[0, 2], [21, 32], 81],
                  10: [[0, 2], [21, 34], 81, 82],
                  11: [[0, 2], [21, 30], 81, 82],
                  23: [[0, 3], 22, 23, [25, 30], 32, 33]
              },
              15: {
                  0: [0],
                  1: [[0, 5], [21, 25]],
                  2: [[0, 7], [21, 23]],
                  3: [[0, 4]],
                  4: [[0, 4], [21, 26], [28, 30]],
                  5: [[0, 2], [21, 26], 81],
                  6: [[0, 2], [21, 27]],
                  7: [[0, 3], [21, 27], [81, 85]],
                  8: [[0, 2], [21, 26]],
                  9: [[0, 2], [21, 29], 81],
                  22: [[0, 2], [21, 24]],
                  25: [[0, 2], [22, 31]],
                  26: [[0, 2], [24, 27], [29, 32], 34],
                  28: [0, 1, [22, 27]],
                  29: [0, [21, 23]]
              },
              21: {
                  0: [0],
                  1: [[0, 6], [11, 14], [22, 24], 81],
                  2: [[0, 4], [11, 13], 24, [81, 83]],
                  3: [[0, 4], 11, 21, 23, 81],
                  4: [[0, 4], 11, [21, 23]],
                  5: [[0, 5], 21, 22],
                  6: [[0, 4], 24, 81, 82],
                  7: [[0, 3], 11, 26, 27, 81, 82],
                  8: [[0, 4], 11, 81, 82],
                  9: [[0, 5], 11, 21, 22],
                  10: [[0, 5], 11, 21, 81],
                  11: [[0, 3], 21, 22],
                  12: [[0, 2], 4, 21, 23, 24, 81, 82],
                  13: [[0, 3], 21, 22, 24, 81, 82],
                  14: [[0, 4], 21, 22, 81]
              },
              22: {
                  0: [0],
                  1: [[0, 6], 12, 22, [81, 83]],
                  2: [[0, 4], 11, 21, [81, 84]],
                  3: [[0, 3], 22, 23, 81, 82],
                  4: [[0, 3], 21, 22],
                  5: [[0, 3], 21, 23, 24, 81, 82],
                  6: [[0, 2], 4, 5, [21, 23], 25, 81],
                  7: [[0, 2], [21, 24], 81],
                  8: [[0, 2], 21, 22, 81, 82],
                  24: [[0, 6], 24, 26]
              },
              23: {
                  0: [0],
                  1: [[0, 12], 21, [23, 29], [81, 84]],
                  2: [[0, 8], 21, [23, 25], 27, [29, 31], 81],
                  3: [[0, 7], 21, 81, 82],
                  4: [[0, 7], 21, 22],
                  5: [[0, 3], 5, 6, [21, 24]],
                  6: [[0, 6], [21, 24]],
                  7: [[0, 16], 22, 81],
                  8: [[0, 5], 11, 22, 26, 28, 33, 81, 82],
                  9: [[0, 4], 21],
                  10: [[0, 5], 24, 25, 81, [83, 85]],
                  11: [[0, 2], 21, 23, 24, 81, 82],
                  12: [[0, 2], [21, 26], [81, 83]],
                  27: [[0, 4], [21, 23]]
              },
              31: {
                  0: [0],
                  1: [0, 1, [3, 10], [12, 20]],
                  2: [0, 30]
              },
              32: {
                  0: [0],
                  1: [[0, 7], 11, [13, 18], 24, 25],
                  2: [[0, 6], 11, 81, 82],
                  3: [[0, 5], 11, 12, [21, 24], 81, 82],
                  4: [[0, 2], 4, 5, 11, 12, 81, 82],
                  5: [[0, 9], [81, 85]],
                  6: [[0, 2], 11, 12, 21, 23, [81, 84]],
                  7: [0, 1, 3, 5, 6, [21, 24]],
                  8: [[0, 4], 11, 26, [29, 31]],
                  9: [[0, 3], [21, 25], 28, 81, 82],
                  10: [[0, 3], 11, 12, 23, 81, 84, 88],
                  11: [[0, 2], 11, 12, [81, 83]],
                  12: [[0, 4], [81, 84]],
                  13: [[0, 2], 11, [21, 24]]
              },
              33: {
                  0: [0],
                  1: [[0, 6], [8, 10], 22, 27, 82, 83, 85],
                  2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]],
                  3: [[0, 4], 22, 24, [26, 29], 81, 82],
                  4: [[0, 2], 11, 21, 24, [81, 83]],
                  5: [[0, 3], [21, 23]],
                  6: [[0, 2], 21, 24, [81, 83]],
                  7: [[0, 3], 23, 26, 27, [81, 84]],
                  8: [[0, 3], 22, 24, 25, 81],
                  9: [[0, 3], 21, 22],
                  10: [[0, 4], [21, 24], 81, 82],
                  11: [[0, 2], [21, 27], 81]
              },
              34: {
                  0: [0],
                  1: [[0, 4], 11, [21, 24], 81],
                  2: [[0, 4], 7, 8, [21, 23], 25],
                  3: [[0, 4], 11, [21, 23]],
                  4: [[0, 6], 21],
                  5: [[0, 4], 6, [21, 23]],
                  6: [[0, 4], 21],
                  7: [[0, 3], 11, 21],
                  8: [[0, 3], 11, [22, 28], 81],
                  10: [[0, 4], [21, 24]],
                  11: [[0, 3], 22, [24, 26], 81, 82],
                  12: [[0, 4], 21, 22, 25, 26, 82],
                  13: [[0, 2], [21, 24]],
                  14: [[0, 2], [21, 24]],
                  15: [[0, 3], [21, 25]],
                  16: [[0, 2], [21, 23]],
                  17: [[0, 2], [21, 23]],
                  18: [[0, 2], [21, 25], 81]
              },
              35: {
                  0: [0],
                  1: [[0, 5], 11, [21, 25], 28, 81, 82],
                  2: [[0, 6], [11, 13]],
                  3: [[0, 5], 22],
                  4: [[0, 3], 21, [23, 30], 81],
                  5: [[0, 5], 21, [24, 27], [81, 83]],
                  6: [[0, 3], [22, 29], 81],
                  7: [[0, 2], [21, 25], [81, 84]],
                  8: [[0, 2], [21, 25], 81],
                  9: [[0, 2], [21, 26], 81, 82]
              },
              36: {
                  0: [0],
                  1: [[0, 5], 11, [21, 24]],
                  2: [[0, 3], 22, 81],
                  3: [[0, 2], 13, [21, 23]],
                  4: [[0, 3], 21, [23, 30], 81, 82],
                  5: [[0, 2], 21],
                  6: [[0, 2], 22, 81],
                  7: [[0, 2], [21, 35], 81, 82],
                  8: [[0, 3], [21, 30], 81],
                  9: [[0, 2], [21, 26], [81, 83]],
                  10: [[0, 2], [21, 30]],
                  11: [[0, 2], [21, 30], 81]
              },
              37: {
                  0: [0],
                  1: [[0, 5], 12, 13, [24, 26], 81],
                  2: [[0, 3], 5, [11, 14], [81, 85]],
                  3: [[0, 6], [21, 23]],
                  4: [[0, 6], 81],
                  5: [[0, 3], [21, 23]],
                  6: [[0, 2], [11, 13], 34, [81, 87]],
                  7: [[0, 5], 24, 25, [81, 86]],
                  8: [[0, 2], 11, [26, 32], [81, 83]],
                  9: [[0, 3], 11, 21, 23, 82, 83],
                  10: [[0, 2], [81, 83]],
                  11: [[0, 3], 21, 22],
                  12: [[0, 3]],
                  13: [[0, 2], 11, 12, [21, 29]],
                  14: [[0, 2], [21, 28], 81, 82],
                  15: [[0, 2], [21, 26], 81],
                  16: [[0, 2], [21, 26]],
                  17: [[0, 2], [21, 28]]
              },
              41: {
                  0: [0],
                  1: [[0, 6], 8, 22, [81, 85]],
                  2: [[0, 5], 11, [21, 25]],
                  3: [[0, 7], 11, [22, 29], 81],
                  4: [[0, 4], 11, [21, 23], 25, 81, 82],
                  5: [[0, 3], 5, 6, 22, 23, 26, 27, 81],
                  6: [[0, 3], 11, 21, 22],
                  7: [[0, 4], 11, 21, [24, 28], 81, 82],
                  8: [[0, 4], 11, [21, 23], 25, [81, 83]],
                  9: [[0, 2], 22, 23, [26, 28]],
                  10: [[0, 2], [23, 25], 81, 82],
                  11: [[0, 4], [21, 23]],
                  12: [[0, 2], 21, 22, 24, 81, 82],
                  13: [[0, 3], [21, 30], 81],
                  14: [[0, 3], [21, 26], 81],
                  15: [[0, 3], [21, 28]],
                  16: [[0, 2], [21, 28], 81],
                  17: [[0, 2], [21, 29]],
                  90: [0, 1]
              },
              42: {
                  0: [0],
                  1: [[0, 7], [11, 17]],
                  2: [[0, 5], 22, 81],
                  3: [[0, 3], [21, 25], 81],
                  5: [[0, 6], [25, 29], [81, 83]],
                  6: [[0, 2], 6, 7, [24, 26], [82, 84]],
                  7: [[0, 4]],
                  8: [[0, 2], 4, 21, 22, 81],
                  9: [[0, 2], [21, 23], 81, 82, 84],
                  10: [[0, 3], [22, 24], 81, 83, 87],
                  11: [[0, 2], [21, 27], 81, 82],
                  12: [[0, 2], [21, 24], 81],
                  13: [[0, 3], 21, 81],
                  28: [[0, 2], 22, 23, [25, 28]],
                  90: [0, [4, 6], 21]
              },
              43: {
                  0: [0],
                  1: [[0, 5], 11, 12, 21, 22, 24, 81],
                  2: [[0, 4], 11, 21, [23, 25], 81],
                  3: [[0, 2], 4, 21, 81, 82],
                  4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82],
                  5: [[0, 3], 11, [21, 25], [27, 29], 81],
                  6: [[0, 3], 11, 21, 23, 24, 26, 81, 82],
                  7: [[0, 3], [21, 26], 81],
                  8: [[0, 2], 11, 21, 22],
                  9: [[0, 3], [21, 23], 81],
                  10: [[0, 3], [21, 28], 81],
                  11: [[0, 3], [21, 29]],
                  12: [[0, 2], [21, 30], 81],
                  13: [[0, 2], 21, 22, 81, 82],
                  31: [0, 1, [22, 27], 30]
              },
              44: {
                  0: [0],
                  1: [[0, 7], [11, 16], 83, 84],
                  2: [[0, 5], 21, 22, 24, 29, 32, 33, 81, 82],
                  3: [0, 1, [3, 8]],
                  4: [[0, 4]],
                  5: [0, 1, [6, 15], 23, 82, 83],
                  6: [0, 1, [4, 8]],
                  7: [0, 1, [3, 5], 81, [83, 85]],
                  8: [[0, 4], 11, 23, 25, [81, 83]],
                  9: [[0, 3], 23, [81, 83]],
                  12: [[0, 3], [23, 26], 83, 84],
                  13: [[0, 3], [22, 24], 81],
                  14: [[0, 2], [21, 24], 26, 27, 81],
                  15: [[0, 2], 21, 23, 81],
                  16: [[0, 2], [21, 25]],
                  17: [[0, 2], 21, 23, 81],
                  18: [[0, 3], 21, 23, [25, 27], 81, 82],
                  19: [0],
                  20: [0],
                  51: [[0, 3], 21, 22],
                  52: [[0, 3], 21, 22, 24, 81],
                  53: [[0, 2], [21, 23], 81]
              },
              45: {
                  0: [0],
                  1: [[0, 9], [21, 27]],
                  2: [[0, 5], [21, 26]],
                  3: [[0, 5], 11, 12, [21, 32]],
                  4: [0, 1, [3, 6], 11, [21, 23], 81],
                  5: [[0, 3], 12, 21],
                  6: [[0, 3], 21, 81],
                  7: [[0, 3], 21, 22],
                  8: [[0, 4], 21, 81],
                  9: [[0, 3], [21, 24], 81],
                  10: [[0, 2], [21, 31]],
                  11: [[0, 2], [21, 23]],
                  12: [[0, 2], [21, 29], 81],
                  13: [[0, 2], [21, 24], 81],
                  14: [[0, 2], [21, 25], 81]
              },
              46: {
                  0: [0],
                  1: [0, 1, [5, 8]],
                  2: [0, 1],
                  3: [0, [21, 23]],
                  90: [[0, 3], [5, 7], [21, 39]]
              },
              50: {
                  0: [0],
                  1: [[0, 19]],
                  2: [0, [22, 38], [40, 43]],
                  3: [0, [81, 84]]
              },
              51: {
                  0: [0],
                  1: [0, 1, [4, 8], [12, 15], [21, 24], 29, 31, 32, [81, 84]],
                  3: [[0, 4], 11, 21, 22],
                  4: [[0, 3], 11, 21, 22],
                  5: [[0, 4], 21, 22, 24, 25],
                  6: [0, 1, 3, 23, 26, [81, 83]],
                  7: [0, 1, 3, 4, [22, 27], 81],
                  8: [[0, 2], 11, 12, [21, 24]],
                  9: [[0, 4], [21, 23]],
                  10: [[0, 2], 11, 24, 25, 28],
                  11: [[0, 2], [11, 13], 23, 24, 26, 29, 32, 33, 81],
                  13: [[0, 4], [21, 25], 81],
                  14: [[0, 2], [21, 25]],
                  15: [[0, 3], [21, 29]],
                  16: [[0, 3], [21, 23], 81],
                  17: [[0, 3], [21, 25], 81],
                  18: [[0, 3], [21, 27]],
                  19: [[0, 3], [21, 23]],
                  20: [[0, 2], 21, 22, 81],
                  32: [0, [21, 33]],
                  33: [0, [21, 38]],
                  34: [0, 1, [22, 37]]
              },
              52: {
                  0: [0],
                  1: [[0, 3], [11, 15], [21, 23], 81],
                  2: [0, 1, 3, 21, 22],
                  3: [[0, 3], [21, 30], 81, 82],
                  4: [[0, 2], [21, 25]],
                  5: [[0, 2], [21, 27]],
                  6: [[0, 3], [21, 28]],
                  22: [0, 1, [22, 30]],
                  23: [0, 1, [22, 28]],
                  24: [0, 1, [22, 28]],
                  26: [0, 1, [22, 36]],
                  27: [[0, 2], 22, 23, [25, 32]]
              },
              53: {
                  0: [0],
                  1: [[0, 3], [11, 14], 21, 22, [24, 29], 81],
                  3: [[0, 2], [21, 26], 28, 81],
                  4: [[0, 2], [21, 28]],
                  5: [[0, 2], [21, 24]],
                  6: [[0, 2], [21, 30]],
                  7: [[0, 2], [21, 24]],
                  8: [[0, 2], [21, 29]],
                  9: [[0, 2], [21, 27]],
                  23: [0, 1, [22, 29], 31],
                  25: [[0, 4], [22, 32]],
                  26: [0, 1, [21, 28]],
                  27: [0, 1, [22, 30]],
                  28: [0, 1, 22, 23],
                  29: [0, 1, [22, 32]],
                  31: [0, 2, 3, [22, 24]],
                  34: [0, [21, 23]],
                  33: [0, 21, [23, 25]],
                  35: [0, [21, 28]]
              },
              54: {
                  0: [0],
                  1: [[0, 2], [21, 27]],
                  21: [0, [21, 29], 32, 33],
                  22: [0, [21, 29], [31, 33]],
                  23: [0, 1, [22, 38]],
                  24: [0, [21, 31]],
                  25: [0, [21, 27]],
                  26: [0, [21, 27]]
              },
              61: {
                  0: [0],
                  1: [[0, 4], [11, 16], 22, [24, 26]],
                  2: [[0, 4], 22],
                  3: [[0, 4], [21, 24], [26, 31]],
                  4: [[0, 4], [22, 31], 81],
                  5: [[0, 2], [21, 28], 81, 82],
                  6: [[0, 2], [21, 32]],
                  7: [[0, 2], [21, 30]],
                  8: [[0, 2], [21, 31]],
                  9: [[0, 2], [21, 29]],
                  10: [[0, 2], [21, 26]]
              },
              62: {
                  0: [0],
                  1: [[0, 5], 11, [21, 23]],
                  2: [0, 1],
                  3: [[0, 2], 21],
                  4: [[0, 3], [21, 23]],
                  5: [[0, 3], [21, 25]],
                  6: [[0, 2], [21, 23]],
                  7: [[0, 2], [21, 25]],
                  8: [[0, 2], [21, 26]],
                  9: [[0, 2], [21, 24], 81, 82],
                  10: [[0, 2], [21, 27]],
                  11: [[0, 2], [21, 26]],
                  12: [[0, 2], [21, 28]],
                  24: [0, 21, [24, 29]],
                  26: [0, 21, [23, 30]],
                  29: [0, 1, [21, 27]],
                  30: [0, 1, [21, 27]]
              },
              63: {
                  0: [0],
                  1: [[0, 5], [21, 23]],
                  2: [0, 2, [21, 25]],
                  21: [0, [21, 23], [26, 28]],
                  22: [0, [21, 24]],
                  23: [0, [21, 24]],
                  25: [0, [21, 25]],
                  26: [0, [21, 26]],
                  27: [0, 1, [21, 26]],
                  28: [[0, 2], [21, 23]]
              },
              64: {
                  0: [0],
                  1: [0, 1, [4, 6], 21, 22, 81],
                  2: [[0, 3], 5, [21, 23]],
                  3: [[0, 3], [21, 24], 81],
                  4: [[0, 2], [21, 25]],
                  5: [[0, 2], 21, 22]
              },
              65: {
                  0: [0],
                  1: [[0, 9], 21],
                  2: [[0, 5]],
                  21: [0, 1, 22, 23],
                  22: [0, 1, 22, 23],
                  23: [[0, 3], [23, 25], 27, 28],
                  28: [0, 1, [22, 29]],
                  29: [0, 1, [22, 29]],
                  30: [0, 1, [22, 24]],
                  31: [0, 1, [21, 31]],
                  32: [0, 1, [21, 27]],
                  40: [0, 2, 3, [21, 28]],
                  42: [[0, 2], 21, [23, 26]],
                  43: [0, 1, [21, 26]],
                  90: [[0, 4]],
                  27: [[0, 2], 22, 23]
              },
              71: {
                  0: [0]
              },
              81: {
                  0: [0]
              },
              82: {
                  0: [0]
              }
          }
            , i = parseInt(e.substr(0, 2), 10)
            , r = parseInt(e.substr(2, 2), 10)
            , a = parseInt(e.substr(4, 2), 10);
          if (!n[i] || !n[i][r])
              return !1;
          for (var o = !1, s = n[i][r], l = 0; l < s.length; l++)
              if (t.isArray(s[l]) && s[l][0] <= a && a <= s[l][1] || !t.isArray(s[l]) && a === s[l]) {
                  o = !0;
                  break
              }
          if (!o)
              return !1;
          var c;
          c = 18 === e.length ? e.substr(6, 8) : "19" + e.substr(6, 6);
          var u = parseInt(c.substr(0, 4), 10)
            , d = parseInt(c.substr(4, 2), 10)
            , p = parseInt(c.substr(6, 2), 10);
          if (!t.fn.bootstrapValidator.helpers.date(u, d, p))
              return !1;
          if (18 === e.length) {
              var f = 0
                , h = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
              for (l = 0; 17 > l; l++)
                  f += parseInt(e.charAt(l), 10) * h[l];
              f = (12 - f % 11) % 11;
              return ("X" !== e.charAt(17).toUpperCase() ? parseInt(e.charAt(17), 10) : 10) === f
          }
          return !0
      },
      _cz: function(e) {
          if (!/^\d{9,10}$/.test(e))
              return !1;
          var n = 1900 + parseInt(e.substr(0, 2), 10)
            , i = parseInt(e.substr(2, 2), 10) % 50 % 20
            , r = parseInt(e.substr(4, 2), 10);
          if (9 === e.length) {
              if (n >= 1980 && (n -= 100),
              n > 1953)
                  return !1
          } else
              1954 > n && (n += 100);
          if (!t.fn.bootstrapValidator.helpers.date(n, i, r))
              return !1;
          if (10 === e.length) {
              var a = parseInt(e.substr(0, 9), 10) % 11;
              return 1985 > n && (a %= 10),
              a + "" === e.substr(9, 1)
          }
          return !0
      },
      _dk: function(e) {
          if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(e))
              return !1;
          e = e.replace(/-/g, "");
          var n = parseInt(e.substr(0, 2), 10)
            , i = parseInt(e.substr(2, 2), 10)
            , r = parseInt(e.substr(4, 2), 10);
          switch (!0) {
          case -1 !== "5678".indexOf(e.charAt(6)) && r >= 58:
              r += 1800;
              break;
          case -1 !== "0123".indexOf(e.charAt(6)):
          case -1 !== "49".indexOf(e.charAt(6)) && r >= 37:
              r += 1900;
              break;
          default:
              r += 2e3
          }
          return t.fn.bootstrapValidator.helpers.date(r, i, n)
      },
      _ee: function(t) {
          return this._lt(t)
      },
      _es: function(t) {
          if (!/^[0-9A-Z]{8}[-]{0,1}[0-9A-Z]$/.test(t) && !/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-Z]$/.test(t))
              return !1;
          t = t.replace(/-/g, "");
          var e = "XYZ".indexOf(t.charAt(0));
          -1 !== e && (t = e + t.substr(1) + "");
          var n = parseInt(t.substr(0, 8), 10);
          return (n = "TRWAGMYFPDXBNJZSQVHLCKE"[n % 23]) === t.substr(8, 1)
      },
      _fi: function(e) {
          if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(e))
              return !1;
          var n = parseInt(e.substr(0, 2), 10)
            , i = parseInt(e.substr(2, 2), 10)
            , r = parseInt(e.substr(4, 2), 10);
          if (r = {
              "+": 1800,
              "-": 1900,
              A: 2e3
          }[e.charAt(6)] + r,
          !t.fn.bootstrapValidator.helpers.date(r, i, n))
              return !1;
          if (2 > parseInt(e.substr(7, 3), 10))
              return !1;
          var a = e.substr(0, 6) + e.substr(7, 3) + "";
          return a = parseInt(a, 10),
          "0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(a % 31) === e.charAt(10)
      },
      _hr: function(e) {
          return !!/^[0-9]{11}$/.test(e) && t.fn.bootstrapValidator.helpers.mod11And10(e)
      },
      _ie: function(t) {
          if (!/^\d{7}[A-W][AHWTX]?$/.test(t))
              return !1;
          var e = function(t) {
              for (; t.length < 7; )
                  t = "0" + t;
              for (var e = "WABCDEFGHIJKLMNOPQRSTUV", n = 0, i = 0; 7 > i; i++)
                  n += parseInt(t.charAt(i), 10) * (8 - i);
              return n += 9 * e.indexOf(t.substr(7)),
              e[n % 23]
          };
          return 9 !== t.length || "A" !== t.charAt(8) && "H" !== t.charAt(8) ? t.charAt(7) === e(t.substr(0, 7)) : t.charAt(7) === e(t.substr(0, 7) + t.substr(8) + "")
      },
      _is: function(e) {
          if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(e))
              return !1;
          e = e.replace(/-/g, "");
          var n = parseInt(e.substr(0, 2), 10)
            , i = parseInt(e.substr(2, 2), 10)
            , r = parseInt(e.substr(4, 2), 10)
            , a = parseInt(e.charAt(9), 10);
          if (r = 9 === a ? 1900 + r : 100 * (20 + a) + r,
          !t.fn.bootstrapValidator.helpers.date(r, i, n, !0))
              return !1;
          for (var o = 0, s = [3, 2, 7, 6, 5, 4, 3, 2], l = 0; 8 > l; l++)
              o += parseInt(e.charAt(l), 10) * s[l];
          return (o = 11 - o % 11) + "" === e.charAt(8)
      },
      _lt: function(e) {
          if (!/^[0-9]{11}$/.test(e))
              return !1;
          var n = parseInt(e.charAt(0), 10)
            , i = parseInt(e.substr(1, 2), 10)
            , r = parseInt(e.substr(3, 2), 10)
            , a = parseInt(e.substr(5, 2), 10);
          if (i = 100 * (n % 2 == 0 ? 17 + n / 2 : 17 + (n + 1) / 2) + i,
          !t.fn.bootstrapValidator.helpers.date(i, r, a, !0))
              return !1;
          for (var o = 0, s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1], l = 0; 10 > l; l++)
              o += parseInt(e.charAt(l), 10) * s[l];
          if (10 !== (o %= 11))
              return o + "" === e.charAt(10);
          for (o = 0,
          s = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3],
          l = 0; 10 > l; l++)
              o += parseInt(e.charAt(l), 10) * s[l];
          return o %= 11,
          10 === o && (o = 0),
          o + "" === e.charAt(10)
      },
      _lv: function(e) {
          if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(e))
              return !1;
          e = e.replace(/\D/g, "");
          var n = parseInt(e.substr(0, 2), 10)
            , i = parseInt(e.substr(2, 2), 10)
            , r = parseInt(e.substr(4, 2), 10);
          if (r = r + 1800 + 100 * parseInt(e.charAt(6), 10),
          !t.fn.bootstrapValidator.helpers.date(r, i, n, !0))
              return !1;
          for (var a = 0, o = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], s = 0; 10 > s; s++)
              a += parseInt(e.charAt(s), 10) * o[s];
          return (a = (a + 1) % 11 % 10) + "" === e.charAt(10)
      },
      _nl: function(t) {
          for (; t.length < 9; )
              t = "0" + t;
          if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(t))
              return !1;
          if (t = t.replace(/\./g, ""),
          0 === parseInt(t, 10))
              return !1;
          for (var e = 0, n = t.length, i = 0; n - 1 > i; i++)
              e += (9 - i) * parseInt(t.charAt(i), 10);
          return e %= 11,
          10 === e && (e = 0),
          e + "" === t.charAt(n - 1)
      },
      _ro: function(e) {
          if (!/^[0-9]{13}$/.test(e))
              return !1;
          var n = parseInt(e.charAt(0), 10);
          if (0 === n || 7 === n || 8 === n)
              return !1;
          var i = parseInt(e.substr(1, 2), 10)
            , r = parseInt(e.substr(3, 2), 10)
            , a = parseInt(e.substr(5, 2), 10)
            , o = {
              1: 1900,
              2: 1900,
              3: 1800,
              4: 1800,
              5: 2e3,
              6: 2e3
          };
          if (a > 31 && r > 12)
              return !1;
          if (9 !== n && (i = o[n + ""] + i,
          !t.fn.bootstrapValidator.helpers.date(i, r, a)))
              return !1;
          for (var s = 0, l = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], c = e.length, u = 0; c - 1 > u; u++)
              s += parseInt(e.charAt(u), 10) * l[u];
          return s %= 11,
          10 === s && (s = 1),
          s + "" === e.charAt(c - 1)
      },
      _se: function(e) {
          if (!/^[0-9]{10}$/.test(e) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(e))
              return !1;
          e = e.replace(/[^0-9]/g, "");
          var n = parseInt(e.substr(0, 2), 10) + 1900
            , i = parseInt(e.substr(2, 2), 10)
            , r = parseInt(e.substr(4, 2), 10);
          return !!t.fn.bootstrapValidator.helpers.date(n, i, r) && t.fn.bootstrapValidator.helpers.luhn(e)
      },
      _sk: function(t) {
          return this._cz(t)
      },
      _sm: function(t) {
          return /^\d{5}$/.test(t)
      },
      _th: function(t) {
          if (13 !== t.length)
              return !1;
          for (var e = 0, n = 0; 12 > n; n++)
              e += parseInt(t.charAt(n), 10) * (13 - n);
          return (11 - e % 11) % 10 === parseInt(t.charAt(12), 10)
      },
      _za: function(e) {
          if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(e))
              return !1;
          var n = parseInt(e.substr(0, 2), 10)
            , i = (new Date).getFullYear() % 100
            , r = parseInt(e.substr(2, 2), 10)
            , a = parseInt(e.substr(4, 2), 10);
          return n = n >= i ? n + 1900 : n + 2e3,
          !!t.fn.bootstrapValidator.helpers.date(n, r, a) && t.fn.bootstrapValidator.helpers.luhn(e)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.identical = t.extend(t.fn.bootstrapValidator.i18n.identical || {}, {
      default: "Please enter the same value"
  }),
  t.fn.bootstrapValidator.validators.identical = {
      html5Attributes: {
          message: "message",
          field: "field"
      },
      validate: function(t, e, n) {
          var i = e.val();
          if ("" === i)
              return !0;
          var r = t.getFieldElements(n.field);
          return null === r || 0 === r.length || i === r.val() && (t.updateStatus(n.field, t.STATUS_VALID, "identical"),
          !0)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.imei = t.extend(t.fn.bootstrapValidator.i18n.imei || {}, {
      default: "Please enter a valid IMEI number"
  }),
  t.fn.bootstrapValidator.validators.imei = {
      validate: function(e, n) {
          var i = n.val();
          if ("" === i)
              return !0;
          switch (!0) {
          case /^\d{15}$/.test(i):
          case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(i):
          case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(i):
              return i = i.replace(/[^0-9]/g, ""),
              t.fn.bootstrapValidator.helpers.luhn(i);
          case /^\d{14}$/.test(i):
          case /^\d{16}$/.test(i):
          case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(i):
          case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(i):
              return !0;
          default:
              return !1
          }
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.imo = t.extend(t.fn.bootstrapValidator.i18n.imo || {}, {
      default: "Please enter a valid IMO number"
  }),
  t.fn.bootstrapValidator.validators.imo = {
      validate: function(t, e) {
          var n = e.val();
          if ("" === n)
              return !0;
          if (!/^IMO \d{7}$/i.test(n))
              return !1;
          for (var i = 0, r = n.replace(/^.*(\d{7})$/, "$1"), a = 6; a >= 1; a--)
              i += r.slice(6 - a, -a) * (a + 1);
          return i % 10 === parseInt(r.charAt(6), 10)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.integer = t.extend(t.fn.bootstrapValidator.i18n.integer || {}, {
      default: "Please enter a valid number"
  }),
  t.fn.bootstrapValidator.validators.integer = {
      enableByHtml5: function(t) {
          return "number" === t.attr("type") && (void 0 === t.attr("step") || t.attr("step") % 1 == 0)
      },
      validate: function(t, e) {
          if (this.enableByHtml5(e) && e.get(0).validity && !0 === e.get(0).validity.badInput)
              return !1;
          var n = e.val();
          return "" === n || /^(?:-?(?:0|[1-9][0-9]*))$/.test(n)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.ip = t.extend(t.fn.bootstrapValidator.i18n.ip || {}, {
      default: "Please enter a valid IP address",
      ipv4: "Please enter a valid IPv4 address",
      ipv6: "Please enter a valid IPv6 address"
  }),
  t.fn.bootstrapValidator.validators.ip = {
      html5Attributes: {
          message: "message",
          ipv4: "ipv4",
          ipv6: "ipv6"
      },
      validate: function(e, n, i) {
          var r = n.val();
          if ("" === r)
              return !0;
          i = t.extend({}, {
              ipv4: !0,
              ipv6: !0
          }, i);
          var a, o = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, s = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/, l = !1;
          switch (!0) {
          case i.ipv4 && !i.ipv6:
              l = o.test(r),
              a = i.message || t.fn.bootstrapValidator.i18n.ip.ipv4;
              break;
          case !i.ipv4 && i.ipv6:
              l = s.test(r),
              a = i.message || t.fn.bootstrapValidator.i18n.ip.ipv6;
              break;
          case i.ipv4 && i.ipv6:
          default:
              l = o.test(r) || s.test(r),
              a = i.message || t.fn.bootstrapValidator.i18n.ip.default
          }
          return {
              valid: l,
              message: a
          }
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.isbn = t.extend(t.fn.bootstrapValidator.i18n.isbn || {}, {
      default: "Please enter a valid ISBN number"
  }),
  t.fn.bootstrapValidator.validators.isbn = {
      validate: function(t, e) {
          var n = e.val();
          if ("" === n)
              return !0;
          var i;
          switch (!0) {
          case /^\d{9}[\dX]$/.test(n):
          case 13 === n.length && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(n):
          case 13 === n.length && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(n):
              i = "ISBN10";
              break;
          case /^(978|979)\d{9}[\dX]$/.test(n):
          case 17 === n.length && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(n):
          case 17 === n.length && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(n):
              i = "ISBN13";
              break;
          default:
              return !1
          }
          n = n.replace(/[^0-9X]/gi, "");
          var r, a, o = n.split(""), s = o.length, l = 0;
          switch (i) {
          case "ISBN10":
              for (l = 0,
              r = 0; s - 1 > r; r++)
                  l += parseInt(o[r], 10) * (10 - r);
              return a = 11 - l % 11,
              11 === a ? a = 0 : 10 === a && (a = "X"),
              a + "" === o[s - 1];
          case "ISBN13":
              for (l = 0,
              r = 0; s - 1 > r; r++)
                  l += r % 2 == 0 ? parseInt(o[r], 10) : 3 * parseInt(o[r], 10);
              return a = 10 - l % 10,
              10 === a && (a = "0"),
              a + "" === o[s - 1];
          default:
              return !1
          }
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.isin = t.extend(t.fn.bootstrapValidator.i18n.isin || {}, {
      default: "Please enter a valid ISIN number"
  }),
  t.fn.bootstrapValidator.validators.isin = {
      COUNTRY_CODES: "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",
      validate: function(t, e) {
          var n = e.val();
          if ("" === n)
              return !0;
          if (n = n.toUpperCase(),
          !new RegExp("^(" + this.COUNTRY_CODES + ")[0-9A-Z]{10}$").test(n))
              return !1;
          for (var i = "", r = n.length, a = 0; r - 1 > a; a++) {
              var o = n.charCodeAt(a);
              i += o > 57 ? (o - 55).toString() : n.charAt(a)
          }
          var s = ""
            , l = i.length
            , c = l % 2 != 0 ? 0 : 1;
          for (a = 0; l > a; a++)
              s += parseInt(i[a], 10) * (a % 2 === c ? 2 : 1) + "";
          var u = 0;
          for (a = 0; a < s.length; a++)
              u += parseInt(s.charAt(a), 10);
          return (u = (10 - u % 10) % 10) + "" === n.charAt(r - 1)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.ismn = t.extend(t.fn.bootstrapValidator.i18n.ismn || {}, {
      default: "Please enter a valid ISMN number"
  }),
  t.fn.bootstrapValidator.validators.ismn = {
      validate: function(t, e) {
          var n = e.val();
          if ("" === n)
              return !0;
          var i;
          switch (!0) {
          case /^M\d{9}$/.test(n):
          case /^M-\d{4}-\d{4}-\d{1}$/.test(n):
          case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(n):
              i = "ISMN10";
              break;
          case /^9790\d{9}$/.test(n):
          case /^979-0-\d{4}-\d{4}-\d{1}$/.test(n):
          case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(n):
              i = "ISMN13";
              break;
          default:
              return !1
          }
          "ISMN10" === i && (n = "9790" + n.substr(1)),
          n = n.replace(/[^0-9]/gi, "");
          for (var r = n.length, a = 0, o = [1, 3], s = 0; r - 1 > s; s++)
              a += parseInt(n.charAt(s), 10) * o[s % 2];
          return (a = 10 - a % 10) + "" === n.charAt(r - 1)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.issn = t.extend(t.fn.bootstrapValidator.i18n.issn || {}, {
      default: "Please enter a valid ISSN number"
  }),
  t.fn.bootstrapValidator.validators.issn = {
      validate: function(t, e) {
          var n = e.val();
          if ("" === n)
              return !0;
          if (!/^\d{4}\-\d{3}[\dX]$/.test(n))
              return !1;
          n = n.replace(/[^0-9X]/gi, "");
          var i = n.split("")
            , r = i.length
            , a = 0;
          "X" === i[7] && (i[7] = 10);
          for (var o = 0; r > o; o++)
              a += parseInt(i[o], 10) * (8 - o);
          return a % 11 == 0
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.lessThan = t.extend(t.fn.bootstrapValidator.i18n.lessThan || {}, {
      default: "Please enter a value less than or equal to %s",
      notInclusive: "Please enter a value less than %s"
  }),
  t.fn.bootstrapValidator.validators.lessThan = {
      html5Attributes: {
          message: "message",
          value: "value",
          inclusive: "inclusive"
      },
      enableByHtml5: function(t) {
          var e = t.attr("type")
            , n = t.attr("max");
          return !(!n || "date" === e) && {
              value: n
          }
      },
      validate: function(e, n, i) {
          var r = n.val();
          if ("" === r)
              return !0;
          if (!t.isNumeric(r))
              return !1;
          var a = t.isNumeric(i.value) ? i.value : e.getDynamicOption(n, i.value);
          return r = parseFloat(r),
          !0 === i.inclusive || void 0 === i.inclusive ? {
              valid: a >= r,
              message: t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.lessThan.default, a)
          } : {
              valid: a > r,
              message: t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.lessThan.notInclusive, a)
          }
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.mac = t.extend(t.fn.bootstrapValidator.i18n.mac || {}, {
      default: "Please enter a valid MAC address"
  }),
  t.fn.bootstrapValidator.validators.mac = {
      validate: function(t, e) {
          var n = e.val();
          return "" === n || /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(n)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.meid = t.extend(t.fn.bootstrapValidator.i18n.meid || {}, {
      default: "Please enter a valid MEID number"
  }),
  t.fn.bootstrapValidator.validators.meid = {
      validate: function(e, n) {
          var i = n.val();
          if ("" === i)
              return !0;
          switch (!0) {
          case /^[0-9A-F]{15}$/i.test(i):
          case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(i):
          case /^\d{19}$/.test(i):
          case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(i):
              var r = i.charAt(i.length - 1);
              if (i = i.replace(/[- ]/g, ""),
              i.match(/^\d*$/i))
                  return t.fn.bootstrapValidator.helpers.luhn(i);
              i = i.slice(0, -1);
              for (var a = "", o = 1; 13 >= o; o += 2)
                  a += (2 * parseInt(i.charAt(o), 16)).toString(16);
              var s = 0;
              for (o = 0; o < a.length; o++)
                  s += parseInt(a.charAt(o), 16);
              return s % 10 == 0 ? "0" === r : r === (2 * (10 * Math.floor((s + 10) / 10) - s)).toString(16);
          case /^[0-9A-F]{14}$/i.test(i):
          case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(i):
          case /^\d{18}$/.test(i):
          case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(i):
              return !0;
          default:
              return !1
          }
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.notEmpty = t.extend(t.fn.bootstrapValidator.i18n.notEmpty || {}, {
      default: "Please enter a value"
  }),
  t.fn.bootstrapValidator.validators.notEmpty = {
      enableByHtml5: function(t) {
          var e = t.attr("required") + "";
          return "required" === e || "true" === e
      },
      validate: function(e, n) {
          var i = n.attr("type");
          return "radio" === i || "checkbox" === i ? e.getFieldElements(n.attr("data-bv-field")).filter(":checked").length > 0 : !("number" !== i || !n.get(0).validity || !0 !== n.get(0).validity.badInput) || "" !== t.trim(n.val())
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.numeric = t.extend(t.fn.bootstrapValidator.i18n.numeric || {}, {
      default: "Please enter a valid float number"
  }),
  t.fn.bootstrapValidator.validators.numeric = {
      html5Attributes: {
          message: "message",
          separator: "separator"
      },
      enableByHtml5: function(t) {
          return "number" === t.attr("type") && void 0 !== t.attr("step") && t.attr("step") % 1 != 0
      },
      validate: function(t, e, n) {
          if (this.enableByHtml5(e) && e.get(0).validity && !0 === e.get(0).validity.badInput)
              return !1;
          var i = e.val();
          if ("" === i)
              return !0;
          var r = n.separator || ".";
          return "." !== r && (i = i.replace(r, ".")),
          !isNaN(parseFloat(i)) && isFinite(i)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.phone = t.extend(t.fn.bootstrapValidator.i18n.phone || {}, {
      default: "Please enter a valid phone number",
      countryNotSupported: "The country code %s is not supported",
      country: "Please enter a valid phone number in %s",
      countries: {
          BR: "Brazil",
          CN: "China",
          CZ: "Czech Republic",
          DK: "Denmark",
          ES: "Spain",
          FR: "France",
          GB: "United Kingdom",
          MA: "Morocco",
          PK: "Pakistan",
          RO: "Romania",
          RU: "Russia",
          SK: "Slovakia",
          TH: "Thailand",
          US: "USA",
          VE: "Venezuela"
      }
  }),
  t.fn.bootstrapValidator.validators.phone = {
      html5Attributes: {
          message: "message",
          country: "country"
      },
      COUNTRY_CODES: ["BR", "CN", "CZ", "DK", "ES", "FR", "GB", "MA", "PK", "RO", "RU", "SK", "TH", "US", "VE"],
      validate: function(e, n, i) {
          var r = n.val();
          if ("" === r)
              return !0;
          var a = i.country;
          if (("string" != typeof a || -1 === t.inArray(a, this.COUNTRY_CODES)) && (a = e.getDynamicOption(n, a)),
          !a || -1 === t.inArray(a.toUpperCase(), this.COUNTRY_CODES))
              return {
                  valid: !1,
                  message: t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.phone.countryNotSupported, a)
              };
          var o = !0;
          switch (a.toUpperCase()) {
          case "BR":
              r = t.trim(r),
              o = /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(r);
              break;
          case "CN":
              r = t.trim(r),
              o = /^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(r);
              break;
          case "CZ":
              o = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(r);
              break;
          case "DK":
              r = t.trim(r),
              o = /^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(r);
              break;
          case "ES":
              r = t.trim(r),
              o = /^(?:(?:(?:\+|00)34\D?))?(?:9|6)(?:\d\D?){8}$/.test(r);
              break;
          case "FR":
              r = t.trim(r),
              o = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(r);
              break;
          case "GB":
              r = t.trim(r),
              o = /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(r);
              break;
          case "MA":
              r = t.trim(r),
              o = /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(r);
              break;
          case "PK":
              r = t.trim(r),
              o = /^0?3[0-9]{2}[0-9]{7}$/.test(r);
              break;
          case "RO":
              o = /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g.test(r);
              break;
          case "RU":
              o = /^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g.test(r);
              break;
          case "SK":
              o = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(r);
              break;
          case "TH":
              o = /^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(r);
              break;
          case "VE":
              r = t.trim(r),
              o = /^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(r);
              break;
          case "US":
          default:
              r = r.replace(/\D/g, ""),
              o = /^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(r) && 10 === r.length
          }
          return {
              valid: o,
              message: t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.phone.country, t.fn.bootstrapValidator.i18n.phone.countries[a])
          }
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.regexp = t.extend(t.fn.bootstrapValidator.i18n.regexp || {}, {
      default: "Please enter a value matching the pattern"
  }),
  t.fn.bootstrapValidator.validators.regexp = {
      html5Attributes: {
          message: "message",
          regexp: "regexp"
      },
      enableByHtml5: function(t) {
          var e = t.attr("pattern");
          return !!e && {
              regexp: e
          }
      },
      validate: function(t, e, n) {
          var i = e.val();
          return "" === i || ("string" == typeof n.regexp ? new RegExp(n.regexp) : n.regexp).test(i)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.remote = t.extend(t.fn.bootstrapValidator.i18n.remote || {}, {
      default: "Please enter a valid value"
  }),
  t.fn.bootstrapValidator.validators.remote = {
      html5Attributes: {
          message: "message",
          name: "name",
          type: "type",
          url: "url",
          delay: "delay"
      },
      destroy: function(t, e) {
          e.data("bv.remote.timer") && (clearTimeout(e.data("bv.remote.timer")),
          e.removeData("bv.remote.timer"))
      },
      validate: function(e, n, i) {
          function r() {
              var e = t.ajax({
                  type: u,
                  headers: d,
                  url: c,
                  dataType: "json",
                  data: l
              });
              return e.then(function(t) {
                  t.valid = !0 === t.valid || "true" === t.valid,
                  o.resolve(n, "remote", t)
              }),
              o.fail(function() {
                  e.abort()
              }),
              o
          }
          var a = n.val()
            , o = new t.Deferred;
          if ("" === a)
              return o.resolve(n, "remote", {
                  valid: !0
              }),
              o;
          var s = n.attr("data-bv-field")
            , l = i.data || {}
            , c = i.url
            , u = i.type || "GET"
            , d = i.headers || {};
          return "function" == typeof l && (l = l.call(this, e)),
          "function" == typeof c && (c = c.call(this, e)),
          l[i.name || s] = a,
          i.delay ? (n.data("bv.remote.timer") && clearTimeout(n.data("bv.remote.timer")),
          n.data("bv.remote.timer", setTimeout(r, i.delay)),
          o) : r()
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.rtn = t.extend(t.fn.bootstrapValidator.i18n.rtn || {}, {
      default: "Please enter a valid RTN number"
  }),
  t.fn.bootstrapValidator.validators.rtn = {
      validate: function(t, e) {
          var n = e.val();
          if ("" === n)
              return !0;
          if (!/^\d{9}$/.test(n))
              return !1;
          for (var i = 0, r = 0; r < n.length; r += 3)
              i += 3 * parseInt(n.charAt(r), 10) + 7 * parseInt(n.charAt(r + 1), 10) + parseInt(n.charAt(r + 2), 10);
          return 0 !== i && i % 10 == 0
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.sedol = t.extend(t.fn.bootstrapValidator.i18n.sedol || {}, {
      default: "Please enter a valid SEDOL number"
  }),
  t.fn.bootstrapValidator.validators.sedol = {
      validate: function(t, e) {
          var n = e.val();
          if ("" === n)
              return !0;
          if (n = n.toUpperCase(),
          !/^[0-9A-Z]{7}$/.test(n))
              return !1;
          for (var i = 0, r = [1, 3, 1, 7, 3, 9, 1], a = n.length, o = 0; a - 1 > o; o++)
              i += r[o] * parseInt(n.charAt(o), 36);
          return (i = (10 - i % 10) % 10) + "" === n.charAt(a - 1)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.siren = t.extend(t.fn.bootstrapValidator.i18n.siren || {}, {
      default: "Please enter a valid SIREN number"
  }),
  t.fn.bootstrapValidator.validators.siren = {
      validate: function(e, n) {
          var i = n.val();
          return "" === i || !!/^\d{9}$/.test(i) && t.fn.bootstrapValidator.helpers.luhn(i)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.siret = t.extend(t.fn.bootstrapValidator.i18n.siret || {}, {
      default: "Please enter a valid SIRET number"
  }),
  t.fn.bootstrapValidator.validators.siret = {
      validate: function(t, e) {
          var n = e.val();
          if ("" === n)
              return !0;
          for (var i, r = 0, a = n.length, o = 0; a > o; o++)
              i = parseInt(n.charAt(o), 10),
              o % 2 == 0 && (i *= 2) > 9 && (i -= 9),
              r += i;
          return r % 10 == 0
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.step = t.extend(t.fn.bootstrapValidator.i18n.step || {}, {
      default: "Please enter a valid step of %s"
  }),
  t.fn.bootstrapValidator.validators.step = {
      html5Attributes: {
          message: "message",
          base: "baseValue",
          step: "step"
      },
      validate: function(e, n, i) {
          var r = n.val();
          if ("" === r)
              return !0;
          if (i = t.extend({}, {
              baseValue: 0,
              step: 1
          }, i),
          r = parseFloat(r),
          !t.isNumeric(r))
              return !1;
          var a = function(t, e) {
              var n = Math.pow(10, e);
              t *= n;
              var i = t > 0 | -(0 > t);
              return t % 1 == .5 * i ? (Math.floor(t) + (i > 0)) / n : Math.round(t) / n
          }
            , o = function(t, e) {
              if (0 === e)
                  return 1;
              var n = (t + "").split(".")
                , i = (e + "").split(".")
                , r = (1 === n.length ? 0 : n[1].length) + (1 === i.length ? 0 : i[1].length);
              return a(t - e * Math.floor(t / e), r)
          }(r - i.baseValue, i.step);
          return {
              valid: 0 === o || o === i.step,
              message: t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.step.default, [i.step])
          }
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.stringCase = t.extend(t.fn.bootstrapValidator.i18n.stringCase || {}, {
      default: "Please enter only lowercase characters",
      upper: "Please enter only uppercase characters"
  }),
  t.fn.bootstrapValidator.validators.stringCase = {
      html5Attributes: {
          message: "message",
          case: "case"
      },
      validate: function(e, n, i) {
          var r = n.val();
          if ("" === r)
              return !0;
          var a = (i.case || "lower").toLowerCase();
          return {
              valid: "upper" === a ? r === r.toUpperCase() : r === r.toLowerCase(),
              message: i.message || ("upper" === a ? t.fn.bootstrapValidator.i18n.stringCase.upper : t.fn.bootstrapValidator.i18n.stringCase.default)
          }
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.stringLength = t.extend(t.fn.bootstrapValidator.i18n.stringLength || {}, {
      default: "Please enter a value with valid length",
      less: "Please enter less than %s characters",
      more: "Please enter more than %s characters",
      between: "Please enter value between %s and %s characters long"
  }),
  t.fn.bootstrapValidator.validators.stringLength = {
      html5Attributes: {
          message: "message",
          min: "min",
          max: "max"
      },
      enableByHtml5: function(e) {
          var n = {}
            , i = e.attr("maxlength")
            , r = e.attr("minlength");
          return i && (n.max = parseInt(i, 10)),
          r && (n.min = parseInt(r, 10)),
          !t.isEmptyObject(n) && n
      },
      validate: function(e, n, i) {
          var r = n.val();
          if ("" === r)
              return !0;
          var a = t.isNumeric(i.min) ? i.min : e.getDynamicOption(n, i.min)
            , o = t.isNumeric(i.max) ? i.max : e.getDynamicOption(n, i.max)
            , s = r.length
            , l = !0
            , c = i.message || t.fn.bootstrapValidator.i18n.stringLength.default;
          switch ((a && s < parseInt(a, 10) || o && s > parseInt(o, 10)) && (l = !1),
          !0) {
          case !!a && !!o:
              c = t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.stringLength.between, [parseInt(a, 10), parseInt(o, 10)]);
              break;
          case !!a:
              c = t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.stringLength.more, parseInt(a, 10));
              break;
          case !!o:
              c = t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.stringLength.less, parseInt(o, 10))
          }
          return {
              valid: l,
              message: c
          }
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.uri = t.extend(t.fn.bootstrapValidator.i18n.uri || {}, {
      default: "Please enter a valid URI"
  }),
  t.fn.bootstrapValidator.validators.uri = {
      html5Attributes: {
          message: "message",
          allowlocal: "allowLocal",
          protocol: "protocol"
      },
      enableByHtml5: function(t) {
          return "url" === t.attr("type")
      },
      validate: function(t, e, n) {
          var i = e.val();
          if ("" === i)
              return !0;
          var r = !0 === n.allowLocal || "true" === n.allowLocal
            , a = (n.protocol || "http, https, ftp").split(",").join("|").replace(/\s/g, "");
          return new RegExp("^(?:(?:" + a + ")://)(?:\\S+(?::\\S*)?@)?(?:" + (r ? "" : "(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") + "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + (r ? "?" : "") + ")(?::\\d{2,5})?(?:/[^\\s]*)?$","i").test(i)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.uuid = t.extend(t.fn.bootstrapValidator.i18n.uuid || {}, {
      default: "Please enter a valid UUID number",
      version: "Please enter a valid UUID version %s number"
  }),
  t.fn.bootstrapValidator.validators.uuid = {
      html5Attributes: {
          message: "message",
          version: "version"
      },
      validate: function(e, n, i) {
          var r = n.val();
          if ("" === r)
              return !0;
          var a = {
              3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
              4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
              5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
              all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
          }
            , o = i.version ? i.version + "" : "all";
          return {
              valid: null === a[o] || a[o].test(r),
              message: i.version ? t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.uuid.version, i.version) : i.message || t.fn.bootstrapValidator.i18n.uuid.default
          }
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.vat = t.extend(t.fn.bootstrapValidator.i18n.vat || {}, {
      default: "Please enter a valid VAT number",
      countryNotSupported: "The country code %s is not supported",
      country: "Please enter a valid VAT number in %s",
      countries: {
          AT: "Austria",
          BE: "Belgium",
          BG: "Bulgaria",
          BR: "Brazil",
          CH: "Switzerland",
          CY: "Cyprus",
          CZ: "Czech Republic",
          DE: "Germany",
          DK: "Denmark",
          EE: "Estonia",
          ES: "Spain",
          FI: "Finland",
          FR: "France",
          GB: "United Kingdom",
          GR: "Greek",
          EL: "Greek",
          HU: "Hungary",
          HR: "Croatia",
          IE: "Ireland",
          IS: "Iceland",
          IT: "Italy",
          LT: "Lithuania",
          LU: "Luxembourg",
          LV: "Latvia",
          MT: "Malta",
          NL: "Netherlands",
          NO: "Norway",
          PL: "Poland",
          PT: "Portugal",
          RO: "Romania",
          RU: "Russia",
          RS: "Serbia",
          SE: "Sweden",
          SI: "Slovenia",
          SK: "Slovakia",
          VE: "Venezuela",
          ZA: "South Africa"
      }
  }),
  t.fn.bootstrapValidator.validators.vat = {
      html5Attributes: {
          message: "message",
          country: "country"
      },
      COUNTRY_CODES: ["AT", "BE", "BG", "BR", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "RS", "SE", "SK", "SI", "VE", "ZA"],
      validate: function(e, n, i) {
          var r = n.val();
          if ("" === r)
              return !0;
          var a = i.country;
          return a ? ("string" != typeof a || -1 === t.inArray(a.toUpperCase(), this.COUNTRY_CODES)) && (a = e.getDynamicOption(n, a)) : a = r.substr(0, 2),
          -1 === t.inArray(a, this.COUNTRY_CODES) ? {
              valid: !1,
              message: t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.vat.countryNotSupported, a)
          } : !!this[["_", a.toLowerCase()].join("")](r) || {
              valid: !1,
              message: t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.vat.country, t.fn.bootstrapValidator.i18n.vat.countries[a.toUpperCase()])
          }
      },
      _at: function(t) {
          if (/^ATU[0-9]{8}$/.test(t) && (t = t.substr(2)),
          !/^U[0-9]{8}$/.test(t))
              return !1;
          t = t.substr(1);
          for (var e = 0, n = [1, 2, 1, 2, 1, 2, 1], i = 0, r = 0; 7 > r; r++)
              i = parseInt(t.charAt(r), 10) * n[r],
              i > 9 && (i = Math.floor(i / 10) + i % 10),
              e += i;
          return e = 10 - (e + 4) % 10,
          10 === e && (e = 0),
          e + "" === t.substr(7, 1)
      },
      _be: function(t) {
          return /^BE[0]{0,1}[0-9]{9}$/.test(t) && (t = t.substr(2)),
          !!/^[0]{0,1}[0-9]{9}$/.test(t) && (9 === t.length && (t = "0" + t),
          "0" !== t.substr(1, 1) && (parseInt(t.substr(0, 8), 10) + parseInt(t.substr(8, 2), 10)) % 97 == 0)
      },
      _bg: function(e) {
          if (/^BG[0-9]{9,10}$/.test(e) && (e = e.substr(2)),
          !/^[0-9]{9,10}$/.test(e))
              return !1;
          var n = 0
            , i = 0;
          if (9 === e.length) {
              for (i = 0; 8 > i; i++)
                  n += parseInt(e.charAt(i), 10) * (i + 1);
              if (10 === (n %= 11))
                  for (n = 0,
                  i = 0; 8 > i; i++)
                      n += parseInt(e.charAt(i), 10) * (i + 3);
              return (n %= 10) + "" === e.substr(8)
          }
          if (10 === e.length) {
              return function(e) {
                  var n = parseInt(e.substr(0, 2), 10) + 1900
                    , i = parseInt(e.substr(2, 2), 10)
                    , r = parseInt(e.substr(4, 2), 10);
                  if (i > 40 ? (n += 100,
                  i -= 40) : i > 20 && (n -= 100,
                  i -= 20),
                  !t.fn.bootstrapValidator.helpers.date(n, i, r))
                      return !1;
                  for (var a = 0, o = [2, 4, 8, 5, 10, 9, 7, 3, 6], s = 0; 9 > s; s++)
                      a += parseInt(e.charAt(s), 10) * o[s];
                  return (a = a % 11 % 10) + "" === e.substr(9, 1)
              }(e) || function(t) {
                  for (var e = 0, n = [21, 19, 17, 13, 11, 9, 7, 3, 1], i = 0; 9 > i; i++)
                      e += parseInt(t.charAt(i), 10) * n[i];
                  return (e %= 10) + "" === t.substr(9, 1)
              }(e) || function(t) {
                  for (var e = 0, n = [4, 3, 2, 7, 6, 5, 4, 3, 2], i = 0; 9 > i; i++)
                      e += parseInt(t.charAt(i), 10) * n[i];
                  return 10 !== (e = 11 - e % 11) && (11 === e && (e = 0),
                  e + "" === t.substr(9, 1))
              }(e)
          }
          return !1
      },
      _br: function(t) {
          if ("" === t)
              return !0;
          var e = t.replace(/[^\d]+/g, "");
          if ("" === e || 14 !== e.length)
              return !1;
          if ("00000000000000" === e || "11111111111111" === e || "22222222222222" === e || "33333333333333" === e || "44444444444444" === e || "55555555555555" === e || "66666666666666" === e || "77777777777777" === e || "88888888888888" === e || "99999999999999" === e)
              return !1;
          for (var n = e.length - 2, i = e.substring(0, n), r = e.substring(n), a = 0, o = n - 7, s = n; s >= 1; s--)
              a += parseInt(i.charAt(n - s), 10) * o--,
              2 > o && (o = 9);
          var l = 2 > a % 11 ? 0 : 11 - a % 11;
          if (l !== parseInt(r.charAt(0), 10))
              return !1;
          for (n += 1,
          i = e.substring(0, n),
          a = 0,
          o = n - 7,
          s = n; s >= 1; s--)
              a += parseInt(i.charAt(n - s), 10) * o--,
              2 > o && (o = 9);
          return (l = 2 > a % 11 ? 0 : 11 - a % 11) === parseInt(r.charAt(1), 10)
      },
      _ch: function(t) {
          if (/^CHE[0-9]{9}(MWST)?$/.test(t) && (t = t.substr(2)),
          !/^E[0-9]{9}(MWST)?$/.test(t))
              return !1;
          t = t.substr(1);
          for (var e = 0, n = [5, 4, 3, 2, 7, 6, 5, 4], i = 0; 8 > i; i++)
              e += parseInt(t.charAt(i), 10) * n[i];
          return 10 !== (e = 11 - e % 11) && (11 === e && (e = 0),
          e + "" === t.substr(8, 1))
      },
      _cy: function(t) {
          if (/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t) && (t = t.substr(2)),
          !/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t))
              return !1;
          if ("12" === t.substr(0, 2))
              return !1;
          for (var e = 0, n = {
              0: 1,
              1: 0,
              2: 5,
              3: 7,
              4: 9,
              5: 13,
              6: 15,
              7: 17,
              8: 19,
              9: 21
          }, i = 0; 8 > i; i++) {
              var r = parseInt(t.charAt(i), 10);
              i % 2 == 0 && (r = n[r + ""]),
              e += r
          }
          return (e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[e % 26]) + "" === t.substr(8, 1)
      },
      _cz: function(e) {
          if (/^CZ[0-9]{8,10}$/.test(e) && (e = e.substr(2)),
          !/^[0-9]{8,10}$/.test(e))
              return !1;
          var n = 0
            , i = 0;
          if (8 === e.length) {
              if (e.charAt(0) + "" == "9")
                  return !1;
              for (n = 0,
              i = 0; 7 > i; i++)
                  n += parseInt(e.charAt(i), 10) * (8 - i);
              return n = 11 - n % 11,
              10 === n && (n = 0),
              11 === n && (n = 1),
              n + "" === e.substr(7, 1)
          }
          if (9 === e.length && e.charAt(0) + "" == "6") {
              for (n = 0,
              i = 0; 7 > i; i++)
                  n += parseInt(e.charAt(i + 1), 10) * (8 - i);
              return n = 11 - n % 11,
              10 === n && (n = 0),
              11 === n && (n = 1),
              (n = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][n - 1]) + "" === e.substr(8, 1)
          }
          if (9 === e.length || 10 === e.length) {
              var r = 1900 + parseInt(e.substr(0, 2), 10)
                , a = parseInt(e.substr(2, 2), 10) % 50 % 20
                , o = parseInt(e.substr(4, 2), 10);
              if (9 === e.length) {
                  if (r >= 1980 && (r -= 100),
                  r > 1953)
                      return !1
              } else
                  1954 > r && (r += 100);
              if (!t.fn.bootstrapValidator.helpers.date(r, a, o))
                  return !1;
              if (10 === e.length) {
                  var s = parseInt(e.substr(0, 9), 10) % 11;
                  return 1985 > r && (s %= 10),
                  s + "" === e.substr(9, 1)
              }
              return !0
          }
          return !1
      },
      _de: function(e) {
          return /^DE[0-9]{9}$/.test(e) && (e = e.substr(2)),
          !!/^[0-9]{9}$/.test(e) && t.fn.bootstrapValidator.helpers.mod11And10(e)
      },
      _dk: function(t) {
          if (/^DK[0-9]{8}$/.test(t) && (t = t.substr(2)),
          !/^[0-9]{8}$/.test(t))
              return !1;
          for (var e = 0, n = [2, 7, 6, 5, 4, 3, 2, 1], i = 0; 8 > i; i++)
              e += parseInt(t.charAt(i), 10) * n[i];
          return e % 11 == 0
      },
      _ee: function(t) {
          if (/^EE[0-9]{9}$/.test(t) && (t = t.substr(2)),
          !/^[0-9]{9}$/.test(t))
              return !1;
          for (var e = 0, n = [3, 7, 1, 3, 7, 1, 3, 7, 1], i = 0; 9 > i; i++)
              e += parseInt(t.charAt(i), 10) * n[i];
          return e % 10 == 0
      },
      _es: function(t) {
          if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t) && (t = t.substr(2)),
          !/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t))
              return !1;
          var e = t.charAt(0);
          return /^[0-9]$/.test(e) ? function(t) {
              var e = parseInt(t.substr(0, 8), 10);
              return (e = "TRWAGMYFPDXBNJZSQVHLCKE"[e % 23]) + "" === t.substr(8, 1)
          }(t) : /^[XYZ]$/.test(e) ? function(t) {
              var e = ["XYZ".indexOf(t.charAt(0)), t.substr(1)].join("");
              return e = parseInt(e, 10),
              (e = "TRWAGMYFPDXBNJZSQVHLCKE"[e % 23]) + "" === t.substr(8, 1)
          }(t) : function(t) {
              var e, n = t.charAt(0);
              if (-1 !== "KLM".indexOf(n))
                  return e = parseInt(t.substr(1, 8), 10),
                  (e = "TRWAGMYFPDXBNJZSQVHLCKE"[e % 23]) + "" === t.substr(8, 1);
              if (-1 !== "ABCDEFGHJNPQRSUVW".indexOf(n)) {
                  for (var i = 0, r = [2, 1, 2, 1, 2, 1, 2], a = 0, o = 0; 7 > o; o++)
                      a = parseInt(t.charAt(o + 1), 10) * r[o],
                      a > 9 && (a = Math.floor(a / 10) + a % 10),
                      i += a;
                  return (i = 10 - i % 10) + "" === t.substr(8, 1) || "JABCDEFGHI"[i] === t.substr(8, 1)
              }
              return !1
          }(t)
      },
      _fi: function(t) {
          if (/^FI[0-9]{8}$/.test(t) && (t = t.substr(2)),
          !/^[0-9]{8}$/.test(t))
              return !1;
          for (var e = 0, n = [7, 9, 10, 5, 8, 4, 2, 1], i = 0; 8 > i; i++)
              e += parseInt(t.charAt(i), 10) * n[i];
          return e % 11 == 0
      },
      _fr: function(e) {
          if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(e) && (e = e.substr(2)),
          !/^[0-9A-Z]{2}[0-9]{9}$/.test(e))
              return !1;
          if (!t.fn.bootstrapValidator.helpers.luhn(e.substr(2)))
              return !1;
          if (/^[0-9]{2}$/.test(e.substr(0, 2)))
              return e.substr(0, 2) === parseInt(e.substr(2) + "12", 10) % 97 + "";
          var n, i = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";
          return n = /^[0-9]{1}$/.test(e.charAt(0)) ? 24 * i.indexOf(e.charAt(0)) + i.indexOf(e.charAt(1)) - 10 : 34 * i.indexOf(e.charAt(0)) + i.indexOf(e.charAt(1)) - 100,
          (parseInt(e.substr(2), 10) + 1 + Math.floor(n / 11)) % 11 == n % 11
      },
      _gb: function(t) {
          if ((/^GB[0-9]{9}$/.test(t) || /^GB[0-9]{12}$/.test(t) || /^GBGD[0-9]{3}$/.test(t) || /^GBHA[0-9]{3}$/.test(t) || /^GB(GD|HA)8888[0-9]{5}$/.test(t)) && (t = t.substr(2)),
          !(/^[0-9]{9}$/.test(t) || /^[0-9]{12}$/.test(t) || /^GD[0-9]{3}$/.test(t) || /^HA[0-9]{3}$/.test(t) || /^(GD|HA)8888[0-9]{5}$/.test(t)))
              return !1;
          var e = t.length;
          if (5 === e) {
              var n = t.substr(0, 2)
                , i = parseInt(t.substr(2), 10);
              return "GD" === n && 500 > i || "HA" === n && i >= 500
          }
          if (11 === e && ("GD8888" === t.substr(0, 6) || "HA8888" === t.substr(0, 6)))
              return !("GD" === t.substr(0, 2) && parseInt(t.substr(6, 3), 10) >= 500 || "HA" === t.substr(0, 2) && parseInt(t.substr(6, 3), 10) < 500) && parseInt(t.substr(6, 3), 10) % 97 === parseInt(t.substr(9, 2), 10);
          if (9 === e || 12 === e) {
              for (var r = 0, a = [8, 7, 6, 5, 4, 3, 2, 10, 1], o = 0; 9 > o; o++)
                  r += parseInt(t.charAt(o), 10) * a[o];
              return r %= 97,
              parseInt(t.substr(0, 3), 10) >= 100 ? 0 === r || 42 === r || 55 === r : 0 === r
          }
          return !0
      },
      _gr: function(t) {
          if (/^(GR|EL)[0-9]{9}$/.test(t) && (t = t.substr(2)),
          !/^[0-9]{9}$/.test(t))
              return !1;
          8 === t.length && (t = "0" + t);
          for (var e = 0, n = [256, 128, 64, 32, 16, 8, 4, 2], i = 0; 8 > i; i++)
              e += parseInt(t.charAt(i), 10) * n[i];
          return (e = e % 11 % 10) + "" === t.substr(8, 1)
      },
      _el: function(t) {
          return this._gr(t)
      },
      _hu: function(t) {
          if (/^HU[0-9]{8}$/.test(t) && (t = t.substr(2)),
          !/^[0-9]{8}$/.test(t))
              return !1;
          for (var e = 0, n = [9, 7, 3, 1, 9, 7, 3, 1], i = 0; 8 > i; i++)
              e += parseInt(t.charAt(i), 10) * n[i];
          return e % 10 == 0
      },
      _hr: function(e) {
          return /^HR[0-9]{11}$/.test(e) && (e = e.substr(2)),
          !!/^[0-9]{11}$/.test(e) && t.fn.bootstrapValidator.helpers.mod11And10(e)
      },
      _ie: function(t) {
          if (/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t) && (t = t.substr(2)),
          !/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t))
              return !1;
          var e = function(t) {
              for (; t.length < 7; )
                  t = "0" + t;
              for (var e = "WABCDEFGHIJKLMNOPQRSTUV", n = 0, i = 0; 7 > i; i++)
                  n += parseInt(t.charAt(i), 10) * (8 - i);
              return n += 9 * e.indexOf(t.substr(7)),
              e[n % 23]
          };
          return /^[0-9]+$/.test(t.substr(0, 7)) ? t.charAt(7) === e(t.substr(0, 7) + t.substr(8) + "") : -1 === "ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(t.charAt(1)) || t.charAt(7) === e(t.substr(2, 5) + t.substr(0, 1) + "")
      },
      _is: function(t) {
          return /^IS[0-9]{5,6}$/.test(t) && (t = t.substr(2)),
          /^[0-9]{5,6}$/.test(t)
      },
      _it: function(e) {
          if (/^IT[0-9]{11}$/.test(e) && (e = e.substr(2)),
          !/^[0-9]{11}$/.test(e))
              return !1;
          if (0 === parseInt(e.substr(0, 7), 10))
              return !1;
          var n = parseInt(e.substr(7, 3), 10);
          return !(1 > n || n > 201 && 999 !== n && 888 !== n) && t.fn.bootstrapValidator.helpers.luhn(e)
      },
      _lt: function(t) {
          if (/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t) && (t = t.substr(2)),
          !/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t))
              return !1;
          var e, n = t.length, i = 0;
          for (e = 0; n - 1 > e; e++)
              i += parseInt(t.charAt(e), 10) * (1 + e % 9);
          var r = i % 11;
          if (10 === r)
              for (i = 0,
              e = 0; n - 1 > e; e++)
                  i += parseInt(t.charAt(e), 10) * (1 + (e + 2) % 9);
          return (r = r % 11 % 10) + "" === t.charAt(n - 1)
      },
      _lu: function(t) {
          return /^LU[0-9]{8}$/.test(t) && (t = t.substr(2)),
          !!/^[0-9]{8}$/.test(t) && parseInt(t.substr(0, 6), 10) % 89 + "" === t.substr(6, 2)
      },
      _lv: function(e) {
          if (/^LV[0-9]{11}$/.test(e) && (e = e.substr(2)),
          !/^[0-9]{11}$/.test(e))
              return !1;
          var n, i = parseInt(e.charAt(0), 10), r = 0, a = [], o = e.length;
          if (i > 3) {
              for (r = 0,
              a = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1],
              n = 0; o > n; n++)
                  r += parseInt(e.charAt(n), 10) * a[n];
              return 3 === (r %= 11)
          }
          var s = parseInt(e.substr(0, 2), 10)
            , l = parseInt(e.substr(2, 2), 10)
            , c = parseInt(e.substr(4, 2), 10);
          if (c = c + 1800 + 100 * parseInt(e.charAt(6), 10),
          !t.fn.bootstrapValidator.helpers.date(c, l, s))
              return !1;
          for (r = 0,
          a = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9],
          n = 0; o - 1 > n; n++)
              r += parseInt(e.charAt(n), 10) * a[n];
          return (r = (r + 1) % 11 % 10) + "" === e.charAt(o - 1)
      },
      _mt: function(t) {
          if (/^MT[0-9]{8}$/.test(t) && (t = t.substr(2)),
          !/^[0-9]{8}$/.test(t))
              return !1;
          for (var e = 0, n = [3, 4, 6, 7, 8, 9, 10, 1], i = 0; 8 > i; i++)
              e += parseInt(t.charAt(i), 10) * n[i];
          return e % 37 == 0
      },
      _nl: function(t) {
          if (/^NL[0-9]{9}B[0-9]{2}$/.test(t) && (t = t.substr(2)),
          !/^[0-9]{9}B[0-9]{2}$/.test(t))
              return !1;
          for (var e = 0, n = [9, 8, 7, 6, 5, 4, 3, 2], i = 0; 8 > i; i++)
              e += parseInt(t.charAt(i), 10) * n[i];
          return e %= 11,
          e > 9 && (e = 0),
          e + "" === t.substr(8, 1)
      },
      _no: function(t) {
          if (/^NO[0-9]{9}$/.test(t) && (t = t.substr(2)),
          !/^[0-9]{9}$/.test(t))
              return !1;
          for (var e = 0, n = [3, 2, 7, 6, 5, 4, 3, 2], i = 0; 8 > i; i++)
              e += parseInt(t.charAt(i), 10) * n[i];
          return e = 11 - e % 11,
          11 === e && (e = 0),
          e + "" === t.substr(8, 1)
      },
      _pl: function(t) {
          if (/^PL[0-9]{10}$/.test(t) && (t = t.substr(2)),
          !/^[0-9]{10}$/.test(t))
              return !1;
          for (var e = 0, n = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], i = 0; 10 > i; i++)
              e += parseInt(t.charAt(i), 10) * n[i];
          return e % 11 == 0
      },
      _pt: function(t) {
          if (/^PT[0-9]{9}$/.test(t) && (t = t.substr(2)),
          !/^[0-9]{9}$/.test(t))
              return !1;
          for (var e = 0, n = [9, 8, 7, 6, 5, 4, 3, 2], i = 0; 8 > i; i++)
              e += parseInt(t.charAt(i), 10) * n[i];
          return e = 11 - e % 11,
          e > 9 && (e = 0),
          e + "" === t.substr(8, 1)
      },
      _ro: function(t) {
          if (/^RO[1-9][0-9]{1,9}$/.test(t) && (t = t.substr(2)),
          !/^[1-9][0-9]{1,9}$/.test(t))
              return !1;
          for (var e = t.length, n = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - e), i = 0, r = 0; e - 1 > r; r++)
              i += parseInt(t.charAt(r), 10) * n[r];
          return (i = 10 * i % 11 % 10) + "" === t.substr(e - 1, 1)
      },
      _ru: function(t) {
          if (/^RU([0-9]{10}|[0-9]{12})$/.test(t) && (t = t.substr(2)),
          !/^([0-9]{10}|[0-9]{12})$/.test(t))
              return !1;
          var e = 0;
          if (10 === t.length) {
              var n = 0
                , i = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
              for (e = 0; 10 > e; e++)
                  n += parseInt(t.charAt(e), 10) * i[e];
              return n %= 11,
              n > 9 && (n %= 10),
              n + "" === t.substr(9, 1)
          }
          if (12 === t.length) {
              var r = 0
                , a = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0]
                , o = 0
                , s = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
              for (e = 0; 11 > e; e++)
                  r += parseInt(t.charAt(e), 10) * a[e],
                  o += parseInt(t.charAt(e), 10) * s[e];
              return r %= 11,
              r > 9 && (r %= 10),
              o %= 11,
              o > 9 && (o %= 10),
              r + "" === t.substr(10, 1) && o + "" === t.substr(11, 1)
          }
          return !1
      },
      _rs: function(t) {
          if (/^RS[0-9]{9}$/.test(t) && (t = t.substr(2)),
          !/^[0-9]{9}$/.test(t))
              return !1;
          for (var e = 10, n = 0, i = 0; 8 > i; i++)
              n = (parseInt(t.charAt(i), 10) + e) % 10,
              0 === n && (n = 10),
              e = 2 * n % 11;
          return (e + parseInt(t.substr(8, 1), 10)) % 10 == 1
      },
      _se: function(e) {
          return /^SE[0-9]{10}01$/.test(e) && (e = e.substr(2)),
          !!/^[0-9]{10}01$/.test(e) && (e = e.substr(0, 10),
          t.fn.bootstrapValidator.helpers.luhn(e))
      },
      _si: function(t) {
          if (/^SI[0-9]{8}$/.test(t) && (t = t.substr(2)),
          !/^[0-9]{8}$/.test(t))
              return !1;
          for (var e = 0, n = [8, 7, 6, 5, 4, 3, 2], i = 0; 7 > i; i++)
              e += parseInt(t.charAt(i), 10) * n[i];
          return e = 11 - e % 11,
          10 === e && (e = 0),
          e + "" === t.substr(7, 1)
      },
      _sk: function(t) {
          return /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) && (t = t.substr(2)),
          !!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) && parseInt(t, 10) % 11 == 0
      },
      _ve: function(t) {
          if (/^VE[VEJPG][0-9]{9}$/.test(t) && (t = t.substr(2)),
          !/^[VEJPG][0-9]{9}$/.test(t))
              return !1;
          for (var e = {
              V: 4,
              E: 8,
              J: 12,
              P: 16,
              G: 20
          }, n = e[t.charAt(0)], i = [3, 2, 7, 6, 5, 4, 3, 2], r = 0; 8 > r; r++)
              n += parseInt(t.charAt(r + 1), 10) * i[r];
          return n = 11 - n % 11,
          (11 === n || 10 === n) && (n = 0),
          n + "" === t.substr(9, 1)
      },
      _za: function(t) {
          return /^ZA4[0-9]{9}$/.test(t) && (t = t.substr(2)),
          /^4[0-9]{9}$/.test(t)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.vin = t.extend(t.fn.bootstrapValidator.i18n.vin || {}, {
      default: "Please enter a valid VIN number"
  }),
  t.fn.bootstrapValidator.validators.vin = {
      validate: function(t, e) {
          var n = e.val();
          if ("" === n)
              return !0;
          if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(n))
              return !1;
          n = n.toUpperCase();
          for (var i = {
              A: 1,
              B: 2,
              C: 3,
              D: 4,
              E: 5,
              F: 6,
              G: 7,
              H: 8,
              J: 1,
              K: 2,
              L: 3,
              M: 4,
              N: 5,
              P: 7,
              R: 9,
              S: 2,
              T: 3,
              U: 4,
              V: 5,
              W: 6,
              X: 7,
              Y: 8,
              Z: 9,
              1: 1,
              2: 2,
              3: 3,
              4: 4,
              5: 5,
              6: 6,
              7: 7,
              8: 8,
              9: 9,
              0: 0
          }, r = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2], a = 0, o = n.length, s = 0; o > s; s++)
              a += i[n.charAt(s) + ""] * r[s];
          var l = a % 11;
          return 10 === l && (l = "X"),
          l + "" === n.charAt(8)
      }
  }
}(window.jQuery),
function(t) {
  t.fn.bootstrapValidator.i18n.zipCode = t.extend(t.fn.bootstrapValidator.i18n.zipCode || {}, {
      default: "Please enter a valid postal code",
      countryNotSupported: "The country code %s is not supported",
      country: "Please enter a valid postal code in %s",
      countries: {
          BR: "Brazil",
          CA: "Canada",
          CZ: "Czech Republic",
          DK: "Denmark",
          GB: "United Kingdom",
          IT: "Italy",
          MA: "Morocco",
          NL: "Netherlands",
          RO: "Romania",
          RU: "Russia",
          SE: "Sweden",
          SG: "Singapore",
          SK: "Slovakia",
          US: "USA"
      }
  }),
  t.fn.bootstrapValidator.validators.zipCode = {
      html5Attributes: {
          message: "message",
          country: "country"
      },
      COUNTRY_CODES: ["BR", "CA", "CZ", "DK", "GB", "IT", "MA", "NL", "RO", "RU", "SE", "SG", "SK", "US"],
      validate: function(e, n, i) {
          var r = n.val();
          if ("" === r || !i.country)
              return !0;
          var a = i.country;
          if (("string" != typeof a || -1 === t.inArray(a, this.COUNTRY_CODES)) && (a = e.getDynamicOption(n, a)),
          !a || -1 === t.inArray(a.toUpperCase(), this.COUNTRY_CODES))
              return {
                  valid: !1,
                  message: t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.zipCode.countryNotSupported, a)
              };
          var o = !1;
          switch (a = a.toUpperCase()) {
          case "BR":
              o = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(r);
              break;
          case "CA":
              o = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(r);
              break;
          case "CZ":
              o = /^(\d{3})([ ]?)(\d{2})$/.test(r);
              break;
          case "DK":
              o = /^(DK(-|\s)?)?\d{4}$/i.test(r);
              break;
          case "GB":
              o = this._gb(r);
              break;
          case "IT":
              o = /^(I-|IT-)?\d{5}$/i.test(r);
              break;
          case "MA":
              o = /^[1-9][0-9]{4}$/i.test(r);
              break;
          case "NL":
              o = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(r);
              break;
          case "RO":
              o = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(r);
              break;
          case "RU":
              o = /^[0-9]{6}$/i.test(r);
              break;
          case "SE":
              o = /^(S-)?\d{3}\s?\d{2}$/i.test(r);
              break;
          case "SG":
              o = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(r);
              break;
          case "SK":
              o = /^(\d{3})([ ]?)(\d{2})$/.test(r);
              break;
          case "US":
          default:
              o = /^\d{4,5}([\-]?\d{4})?$/.test(r)
          }
          return {
              valid: o,
              message: t.fn.bootstrapValidator.helpers.format(i.message || t.fn.bootstrapValidator.i18n.zipCode.country, t.fn.bootstrapValidator.i18n.zipCode.countries[a])
          }
      },
      _gb: function(t) {
          for (var e = "[ABCDEFGHIJKLMNOPRSTUWYZ]", n = "[ABCDEFGHKLMNOPQRSTUVWXY]", i = "[ABDEFGHJLNPQRSTUWXYZ]", r = [new RegExp("^(" + e + "{1}" + n + "?[0-9]{1,2})(\\s*)([0-9]{1}" + i + "{2})$","i"), new RegExp("^(" + e + "{1}[0-9]{1}[ABCDEFGHJKPMNRSTUVWXY]{1})(\\s*)([0-9]{1}" + i + "{2})$","i"), new RegExp("^(" + e + "{1}" + n + "{1}?[0-9]{1}[ABEHMNPRVWXY]{1})(\\s*)([0-9]{1}" + i + "{2})$","i"), new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$","i"), /^(GIR)(\s*)(0AA)$/i, /^(BFPO)(\s*)([0-9]{1,4})$/i, /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, /^([A-Z]{4})(\s*)(1ZZ)$/i, /^(AI-2640)$/i], a = 0; a < r.length; a++)
              if (r[a].test(t))
                  return !0;
          return !1
      }
  }
}(window.jQuery),
define("bootstrapValidator", function() {}),
function(t) {
  "use strict";
  var e = function(t, e) {
      this.init("tooltip", t, e)
  };
  e.prototype = {
      constructor: e,
      init: function(e, n, i) {
          var r, a;
          this.type = e,
          this.$element = t(n),
          this.options = this.getOptions(i),
          this.enabled = !0,
          "click" == this.options.trigger ? this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)) : "manual" != this.options.trigger && (r = "hover" == this.options.trigger ? "mouseenter" : "focus",
          a = "hover" == this.options.trigger ? "mouseleave" : "blur",
          this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
          this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.leave, this))),
          this.options.selector ? this._options = t.extend({}, this.options, {
              trigger: "manual",
              selector: ""
          }) : this.fixTitle()
      },
      getOptions: function(e) {
          return e = t.extend({}, t.fn[this.type].defaults, e, this.$element.data()),
          e.delay && "number" == typeof e.delay && (e.delay = {
              show: e.delay,
              hide: e.delay
          }),
          e
      },
      enter: function(e) {
          var n = t(e.currentTarget)[this.type](this._options).data(this.type);
          if (!n.options.delay || !n.options.delay.show)
              return n.show();
          clearTimeout(this.timeout),
          n.hoverState = "in",
          this.timeout = setTimeout(function() {
              "in" == n.hoverState && n.show()
          }, n.options.delay.show)
      },
      leave: function(e) {
          var n = t(e.currentTarget)[this.type](this._options).data(this.type);
          if (this.timeout && clearTimeout(this.timeout),
          !n.options.delay || !n.options.delay.hide)
              return n.hide();
          n.hoverState = "out",
          this.timeout = setTimeout(function() {
              "out" == n.hoverState && n.hide()
          }, n.options.delay.hide)
      },
      show: function() {
          var t, e, n, i, r, a, o;
          if (this.hasContent() && this.enabled) {
              switch (t = this.tip(),
              this.setContent(),
              this.options.animation && t.addClass("fade"),
              a = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement,
              e = /in/.test(a),
              t.detach().css({
                  top: 0,
                  left: 0,
                  display: "block"
              }).insertAfter(this.$element),
              n = this.getPosition(e),
              i = t[0].offsetWidth,
              r = t[0].offsetHeight,
              e ? a.split(" ")[1] : a) {
              case "bottom":
                  o = {
                      top: n.top + n.height,
                      left: n.left + n.width / 2 - i / 2
                  };
                  break;
              case "top":
                  o = {
                      top: n.top - r,
                      left: n.left + n.width / 2 - i / 2
                  };
                  break;
              case "left":
                  o = {
                      top: n.top + n.height / 2 - r / 2,
                      left: n.left - i
                  };
                  break;
              case "right":
                  o = {
                      top: n.top + n.height / 2 - r / 2,
                      left: n.left + n.width
                  }
              }
              t.offset(o).addClass(a).addClass("in")
          }
      },
      setContent: function() {
          var t = this.tip()
            , e = this.getTitle();
          t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right")
      },
      hide: function() {
          var e = this.tip();
          return e.removeClass("in"),
          t.support.transition && this.$tip.hasClass("fade") ? function() {
              var n = setTimeout(function() {
                  e.off(t.support.transition.end).detach()
              }, 500);
              e.one(t.support.transition.end, function() {
                  clearTimeout(n),
                  e.detach()
              })
          }() : e.detach(),
          this
      },
      fixTitle: function() {
          var t = this.$element;
          (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").removeAttr("title")
      },
      hasContent: function() {
          return this.getTitle()
      },
      getPosition: function(e) {
          return t.extend({}, e ? {
              top: 0,
              left: 0
          } : this.$element.offset(), {
              width: this.$element[0].offsetWidth,
              height: this.$element[0].offsetHeight
          })
      },
      getTitle: function() {
          var t = this.$element
            , e = this.options;
          return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
      },
      tip: function() {
          return this.$tip = this.$tip || t(this.options.template)
      },
      validate: function() {
          this.$element[0].parentNode || (this.hide(),
          this.$element = null,
          this.options = null)
      },
      enable: function() {
          this.enabled = !0
      },
      disable: function() {
          this.enabled = !1
      },
      toggleEnabled: function() {
          this.enabled = !this.enabled
      },
      toggle: function(e) {
          var n = t(e.currentTarget)[this.type](this._options).data(this.type);
          n[n.tip().hasClass("in") ? "hide" : "show"]()
      },
      destroy: function() {
          this.hide().$element.off("." + this.type).removeData(this.type)
      }
  };
  var n = t.fn.tooltip;
  t.fn.tooltip = function(n) {
      return this.each(function() {
          var i = t(this)
            , r = i.data("tooltip")
            , a = "object" == typeof n && n;
          r || i.data("tooltip", r = new e(this,a)),
          "string" == typeof n && r[n]()
      })
  }
  ,
  t.fn.tooltip.Constructor = e,
  t.fn.tooltip.defaults = {
      animation: !0,
      placement: "top",
      selector: !1,
      template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover",
      title: "",
      delay: 0,
      html: !1
  },
  t.fn.tooltip.noConflict = function() {
      return t.fn.tooltip = n,
      this
  }
}(window.jQuery),
define("tooltip", function() {}),
function(t) {
  t.fn.jPushMenu = function(e) {
      var n = t.extend({}, t.fn.jPushMenu.defaultOptions, e);
      t("body").addClass(n.bodyClass),
      t(this).addClass("jPushMenuBtn"),
      t(this).click(function() {
          var e = ""
            , i = "";
          return t(this).is("." + n.showLeftClass) ? (e = ".cbp-spmenu-left",
          i = "toright") : t(this).is("." + n.showRightClass) ? (e = ".cbp-spmenu-right",
          i = "toleft") : t(this).is("." + n.showTopClass) ? e = ".cbp-spmenu-top" : t(this).is("." + n.showBottomClass) && (e = ".cbp-spmenu-bottom"),
          t(this).toggleClass(n.activeClass),
          t(e).toggleClass(n.menuOpenClass),
          t(this).is("." + n.pushBodyClass) && t("body").toggleClass("cbp-spmenu-push-" + i),
          t(".jPushMenuBtn").not(t(this)).toggleClass("disabled"),
          !1
      });
      var i = {
          close: function(e) {
              t(".jPushMenuBtn,body,.cbp-spmenu").removeClass("disabled active cbp-spmenu-open cbp-spmenu-push-toleft cbp-spmenu-push-toright")
          }
      };
      n.closeOnClickInside && (t(document).click(function() {
          i.close()
      }),
      t(".cbp-spmenu,.toggle-menu").click(function(t) {
          t.stopPropagation()
      })),
      n.closeOnClickOutside && (t(document).click(function() {
          i.close()
      }),
      t(".cbp-spmenu,.toggle-menu").click(function(t) {
          t.stopPropagation()
      })),
      n.closeOnClickLink && t(".cbp-spmenu a").on("click", function() {
          i.close()
      })
  }
  ,
  t.fn.jPushMenu.defaultOptions = {
      bodyClass: "cbp-spmenu-push",
      activeClass: "menu-active",
      showLeftClass: "menu-left",
      showRightClass: "menu-right",
      showTopClass: "menu-top",
      showBottomClass: "menu-bottom",
      menuOpenClass: "cbp-spmenu-open",
      pushBodyClass: "push-body",
      closeOnClickOutside: !0,
      closeOnClickInside: !0,
      closeOnClickLink: !0
  }
}(jQuery),
define("jPushMenu", function() {}),
function(t) {
  t.fn.sidebar = function(e) {
      var n = this;
      if (t(".dropdown", n).on("click", function() {
          var e = t(this).index();
          window.app.menuIndex = e
      }),
      t(".dropdown-toggle").on("click", function(e) {
          e.preventDefault(),
          window.app.isSubMenu = !0,
          0 == t(this).parent().children("ul").length && (window.app.menuIndex = t(this).parent().index() + ":0",
          window.app.subMenuSelected = t(this).parent(),
          window.app.isSubMenu = !1)
      }),
      t(".dropdown-menu li", n).on("click", function(e) {
          var n = t(this).index()
            , i = t(this).closest(".open")
            , r = i.index();
          window.app.menuIndex = r + ":" + n,
          e.stopPropagation()
      }),
      window.app.menuIndex) {
          var i = window.app.menuIndex.split(":")
            , r = i[0]
            , a = i[1]
            , o = t(".navbar-nav .dropdown:eq(" + r + ")", n);
          if (0 != t("ul", o).length) {
              var s = t("li:eq(" + a + ")", o);
              if (0 != t(".leftNav", n).length)
                  window.app.isSubMenu ? t(o).addClass("open active") : (t(o).removeClass("open"),
                  t(window.app.subMenuSelected).addClass("active"));
              else {
                  t(window).width() >= 767 ? t(o).removeClass("open ").addClass("active") : t(o).addClass("open active")
              }
              t(s).addClass("active")
          } else
              t(o).addClass("active")
      }
      t("#slidemenu").hasClass("leftNav") && t(".leftNav  .dropdown").on({
          "shown.bs.dropdown": function() {
              this.closable = !1
          },
          click: function() {
              this.closable = !0
          },
          "hide.bs.dropdown": function() {
              return null == this.closable && (this.closable = !1),
              this.closable
          }
      }),
      t("#slidemenu > ul.nav.navbar-nav.dnl-nav .dropdown-menu li a").on("click", function(e) {
          e.preventDefault(),
          t("#slidemenu > ul.nav.navbar-nav.dnl-nav li.dropdown").removeClass("open"),
          t(this).parent().parent().parent().addClass("open")
      }),
      t("#slidemenu .dropdown-toggle").on("click", function(e) {
          t(this).parent().hasClass("open active") ? t(this).parent().removeClass("open") : (t("#slidemenu > ul.nav.navbar-nav.dnl-nav li.dropdown").removeClass("open active"),
          t(this).parent().addClass("open active"))
      })
  }
}(jQuery),
define("sidebar", function() {}),
function(t) {
  function e(t) {
      return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
  }
  function n(t, e) {
      (i(t, e) ? a : r)(t, e)
  }
  var i, r, a;
  "classList"in document.documentElement ? (i = function(t, e) {
      return t.classList.contains(e)
  }
  ,
  r = function(t, e) {
      t.classList.add(e)
  }
  ,
  a = function(t, e) {
      t.classList.remove(e)
  }
  ) : (i = function(t, n) {
      return e(n).test(t.className)
  }
  ,
  r = function(t, e) {
      i(t, e) || (t.className = t.className + " " + e)
  }
  ,
  a = function(t, n) {
      t.className = t.className.replace(e(n), " ")
  }
  );
  var o = {
      hasClass: i,
      addClass: r,
      removeClass: a,
      toggleClass: n,
      has: i,
      add: r,
      remove: a,
      toggle: n
  };
  "function" == typeof define && define.amd ? define("classie", [], function() {
      return o
  }) : t.classie = o
}("object" == typeof window ? window : this),
function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("handlebars", e) : "object" == typeof exports ? exports.Handlebars = e() : t.Handlebars = e()
}(this, function() {
  return window.Handlebars = function(t) {
      function e(i) {
          if (n[i])
              return n[i].exports;
          var r = n[i] = {
              exports: {},
              id: i,
              loaded: !1
          };
          return t[i].call(r.exports, r, r.exports, e),
          r.loaded = !0,
          r.exports
      }
      var n = {};
      return e.m = t,
      e.c = n,
      e.p = "",
      e(0)
  }([function(t, e, n) {
      "use strict";
      function i() {
          var t = g();
          return t.compile = function(e, n) {
              return u.compile(e, n, t)
          }
          ,
          t.precompile = function(e, n) {
              return u.precompile(e, n, t)
          }
          ,
          t.AST = l.default,
          t.Compiler = u.Compiler,
          t.JavaScriptCompiler = p.default,
          t.Parser = c.parser,
          t.parse = c.parse,
          t
      }
      var r = n(8).default;
      e.__esModule = !0;
      var a = n(1)
        , o = r(a)
        , s = n(2)
        , l = r(s)
        , c = n(3)
        , u = n(4)
        , d = n(5)
        , p = r(d)
        , f = n(6)
        , h = r(f)
        , m = n(7)
        , v = r(m)
        , g = o.default.create
        , b = i();
      b.create = i,
      v.default(b),
      b.Visitor = h.default,
      b.default = b,
      e.default = b,
      t.exports = e.default
  }
  , function(t, e, n) {
      "use strict";
      function i() {
          var t = new s.HandlebarsEnvironment;
          return f.extend(t, s),
          t.SafeString = c.default,
          t.Exception = d.default,
          t.Utils = f,
          t.escapeExpression = f.escapeExpression,
          t.VM = m,
          t.template = function(e) {
              return m.template(e, t)
          }
          ,
          t
      }
      var r = n(9).default
        , a = n(8).default;
      e.__esModule = !0;
      var o = n(10)
        , s = r(o)
        , l = n(11)
        , c = a(l)
        , u = n(12)
        , d = a(u)
        , p = n(13)
        , f = r(p)
        , h = n(14)
        , m = r(h)
        , v = n(7)
        , g = a(v)
        , b = i();
      b.create = i,
      g.default(b),
      b.default = b,
      e.default = b,
      t.exports = e.default
  }
  , function(t, e, n) {
      "use strict";
      e.__esModule = !0;
      var i = {
          Program: function(t, e, n, i) {
              this.loc = i,
              this.type = "Program",
              this.body = t,
              this.blockParams = e,
              this.strip = n
          },
          MustacheStatement: function(t, e, n, i, r, a) {
              this.loc = a,
              this.type = "MustacheStatement",
              this.path = t,
              this.params = e || [],
              this.hash = n,
              this.escaped = i,
              this.strip = r
          },
          BlockStatement: function(t, e, n, i, r, a, o, s, l) {
              this.loc = l,
              this.type = "BlockStatement",
              this.path = t,
              this.params = e || [],
              this.hash = n,
              this.program = i,
              this.inverse = r,
              this.openStrip = a,
              this.inverseStrip = o,
              this.closeStrip = s
          },
          PartialStatement: function(t, e, n, i, r) {
              this.loc = r,
              this.type = "PartialStatement",
              this.name = t,
              this.params = e || [],
              this.hash = n,
              this.indent = "",
              this.strip = i
          },
          ContentStatement: function(t, e) {
              this.loc = e,
              this.type = "ContentStatement",
              this.original = this.value = t
          },
          CommentStatement: function(t, e, n) {
              this.loc = n,
              this.type = "CommentStatement",
              this.value = t,
              this.strip = e
          },
          SubExpression: function(t, e, n, i) {
              this.loc = i,
              this.type = "SubExpression",
              this.path = t,
              this.params = e || [],
              this.hash = n
          },
          PathExpression: function(t, e, n, i, r) {
              this.loc = r,
              this.type = "PathExpression",
              this.data = t,
              this.original = i,
              this.parts = n,
              this.depth = e
          },
          StringLiteral: function(t, e) {
              this.loc = e,
              this.type = "StringLiteral",
              this.original = this.value = t
          },
          NumberLiteral: function(t, e) {
              this.loc = e,
              this.type = "NumberLiteral",
              this.original = this.value = Number(t)
          },
          BooleanLiteral: function(t, e) {
              this.loc = e,
              this.type = "BooleanLiteral",
              this.original = this.value = "true" === t
          },
          UndefinedLiteral: function(t) {
              this.loc = t,
              this.type = "UndefinedLiteral",
              this.original = this.value = void 0
          },
          NullLiteral: function(t) {
              this.loc = t,
              this.type = "NullLiteral",
              this.original = this.value = null
          },
          Hash: function(t, e) {
              this.loc = e,
              this.type = "Hash",
              this.pairs = t
          },
          HashPair: function(t, e, n) {
              this.loc = n,
              this.type = "HashPair",
              this.key = t,
              this.value = e
          },
          helpers: {
              helperExpression: function(t) {
                  return !("SubExpression" !== t.type && !t.params.length && !t.hash)
              },
              scopedId: function(t) {
                  return /^\.|this\b/.test(t.original)
              },
              simpleId: function(t) {
                  return 1 === t.parts.length && !i.helpers.scopedId(t) && !t.depth
              }
          }
      };
      e.default = i,
      t.exports = e.default
  }
  , function(t, e, n) {
      "use strict";
      function i(t, e) {
          return "Program" === t.type ? t : (s.default.yy = m,
          m.locInfo = function(t) {
              return new m.SourceLocation(e && e.srcName,t)
          }
          ,
          (new d.default).accept(s.default.parse(t)))
      }
      var r = n(8).default
        , a = n(9).default;
      e.__esModule = !0,
      e.parse = i;
      var o = n(15)
        , s = r(o)
        , l = n(2)
        , c = r(l)
        , u = n(16)
        , d = r(u)
        , p = n(17)
        , f = a(p)
        , h = n(13);
      e.parser = s.default;
      var m = {};
      h.extend(m, f, c.default)
  }
  , function(t, e, n) {
      "use strict";
      function i() {}
      function r(t, e, n) {
          if (null == t || "string" != typeof t && "Program" !== t.type)
              throw new u.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + t);
          e = e || {},
          "data"in e || (e.data = !0),
          e.compat && (e.useDepths = !0);
          var i = n.parse(t, e)
            , r = (new n.Compiler).compile(i, e);
          return (new n.JavaScriptCompiler).compile(r, e)
      }
      function a(t, e, n) {
          function i() {
              var e = n.parse(t, a)
                , i = (new n.Compiler).compile(e, a)
                , r = (new n.JavaScriptCompiler).compile(i, a, void 0, !0);
              return n.template(r)
          }
          function r(t, e) {
              return o || (o = i()),
              o.call(this, t, e)
          }
          var a = void 0 === arguments[1] ? {} : arguments[1];
          if (null == t || "string" != typeof t && "Program" !== t.type)
              throw new u.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + t);
          "data"in a || (a.data = !0),
          a.compat && (a.useDepths = !0);
          var o = void 0;
          return r._setup = function(t) {
              return o || (o = i()),
              o._setup(t)
          }
          ,
          r._child = function(t, e, n, r) {
              return o || (o = i()),
              o._child(t, e, n, r)
          }
          ,
          r
      }
      function o(t, e) {
          if (t === e)
              return !0;
          if (d.isArray(t) && d.isArray(e) && t.length === e.length) {
              for (var n = 0; n < t.length; n++)
                  if (!o(t[n], e[n]))
                      return !1;
              return !0
          }
      }
      function s(t) {
          if (!t.path.parts) {
              var e = t.path;
              t.path = new f.default.PathExpression(!1,0,[e.original + ""],e.original + "",e.loc)
          }
      }
      var l = n(8).default;
      e.__esModule = !0,
      e.Compiler = i,
      e.precompile = r,
      e.compile = a;
      var c = n(12)
        , u = l(c)
        , d = n(13)
        , p = n(2)
        , f = l(p)
        , h = [].slice;
      i.prototype = {
          compiler: i,
          equals: function(t) {
              var e = this.opcodes.length;
              if (t.opcodes.length !== e)
                  return !1;
              for (var n = 0; n < e; n++) {
                  var i = this.opcodes[n]
                    , r = t.opcodes[n];
                  if (i.opcode !== r.opcode || !o(i.args, r.args))
                      return !1
              }
              e = this.children.length;
              for (var n = 0; n < e; n++)
                  if (!this.children[n].equals(t.children[n]))
                      return !1;
              return !0
          },
          guid: 0,
          compile: function(t, e) {
              this.sourceNode = [],
              this.opcodes = [],
              this.children = [],
              this.options = e,
              this.stringParams = e.stringParams,
              this.trackIds = e.trackIds,
              e.blockParams = e.blockParams || [];
              var n = e.knownHelpers;
              if (e.knownHelpers = {
                  helperMissing: !0,
                  blockHelperMissing: !0,
                  each: !0,
                  if: !0,
                  unless: !0,
                  with: !0,
                  log: !0,
                  lookup: !0
              },
              n)
                  for (var i in n)
                      i in n && (e.knownHelpers[i] = n[i]);
              return this.accept(t)
          },
          compileProgram: function(t) {
              var e = new this.compiler
                , n = e.compile(t, this.options)
                , i = this.guid++;
              return this.usePartial = this.usePartial || n.usePartial,
              this.children[i] = n,
              this.useDepths = this.useDepths || n.useDepths,
              i
          },
          accept: function(t) {
              this.sourceNode.unshift(t);
              var e = this[t.type](t);
              return this.sourceNode.shift(),
              e
          },
          Program: function(t) {
              this.options.blockParams.unshift(t.blockParams);
              for (var e = t.body, n = e.length, i = 0; i < n; i++)
                  this.accept(e[i]);
              return this.options.blockParams.shift(),
              this.isSimple = 1 === n,
              this.blockParams = t.blockParams ? t.blockParams.length : 0,
              this
          },
          BlockStatement: function(t) {
              s(t);
              var e = t.program
                , n = t.inverse;
              e = e && this.compileProgram(e),
              n = n && this.compileProgram(n);
              var i = this.classifySexpr(t);
              "helper" === i ? this.helperSexpr(t, e, n) : "simple" === i ? (this.simpleSexpr(t),
              this.opcode("pushProgram", e),
              this.opcode("pushProgram", n),
              this.opcode("emptyHash"),
              this.opcode("blockValue", t.path.original)) : (this.ambiguousSexpr(t, e, n),
              this.opcode("pushProgram", e),
              this.opcode("pushProgram", n),
              this.opcode("emptyHash"),
              this.opcode("ambiguousBlockValue")),
              this.opcode("append")
          },
          PartialStatement: function(t) {
              this.usePartial = !0;
              var e = t.params;
              if (e.length > 1)
                  throw new u.default("Unsupported number of partial arguments: " + e.length,t);
              e.length || e.push({
                  type: "PathExpression",
                  parts: [],
                  depth: 0
              });
              var n = t.name.original
                , i = "SubExpression" === t.name.type;
              i && this.accept(t.name),
              this.setupFullMustacheParams(t, void 0, void 0, !0);
              var r = t.indent || "";
              this.options.preventIndent && r && (this.opcode("appendContent", r),
              r = ""),
              this.opcode("invokePartial", i, n, r),
              this.opcode("append")
          },
          MustacheStatement: function(t) {
              this.SubExpression(t),
              t.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
          },
          ContentStatement: function(t) {
              t.value && this.opcode("appendContent", t.value)
          },
          CommentStatement: function() {},
          SubExpression: function(t) {
              s(t);
              var e = this.classifySexpr(t);
              "simple" === e ? this.simpleSexpr(t) : "helper" === e ? this.helperSexpr(t) : this.ambiguousSexpr(t)
          },
          ambiguousSexpr: function(t, e, n) {
              var i = t.path
                , r = i.parts[0]
                , a = null != e || null != n;
              this.opcode("getContext", i.depth),
              this.opcode("pushProgram", e),
              this.opcode("pushProgram", n),
              this.accept(i),
              this.opcode("invokeAmbiguous", r, a)
          },
          simpleSexpr: function(t) {
              this.accept(t.path),
              this.opcode("resolvePossibleLambda")
          },
          helperSexpr: function(t, e, n) {
              var i = this.setupFullMustacheParams(t, e, n)
                , r = t.path
                , a = r.parts[0];
              if (this.options.knownHelpers[a])
                  this.opcode("invokeKnownHelper", i.length, a);
              else {
                  if (this.options.knownHelpersOnly)
                      throw new u.default("You specified knownHelpersOnly, but used the unknown helper " + a,t);
                  r.falsy = !0,
                  this.accept(r),
                  this.opcode("invokeHelper", i.length, r.original, f.default.helpers.simpleId(r))
              }
          },
          PathExpression: function(t) {
              this.addDepth(t.depth),
              this.opcode("getContext", t.depth);
              var e = t.parts[0]
                , n = f.default.helpers.scopedId(t)
                , i = !t.depth && !n && this.blockParamIndex(e);
              i ? this.opcode("lookupBlockParam", i, t.parts) : e ? t.data ? (this.options.data = !0,
              this.opcode("lookupData", t.depth, t.parts)) : this.opcode("lookupOnContext", t.parts, t.falsy, n) : this.opcode("pushContext")
          },
          StringLiteral: function(t) {
              this.opcode("pushString", t.value)
          },
          NumberLiteral: function(t) {
              this.opcode("pushLiteral", t.value)
          },
          BooleanLiteral: function(t) {
              this.opcode("pushLiteral", t.value)
          },
          UndefinedLiteral: function() {
              this.opcode("pushLiteral", "undefined")
          },
          NullLiteral: function() {
              this.opcode("pushLiteral", "null")
          },
          Hash: function(t) {
              var e = t.pairs
                , n = 0
                , i = e.length;
              for (this.opcode("pushHash"); n < i; n++)
                  this.pushParam(e[n].value);
              for (; n--; )
                  this.opcode("assignToHash", e[n].key);
              this.opcode("popHash")
          },
          opcode: function(t) {
              this.opcodes.push({
                  opcode: t,
                  args: h.call(arguments, 1),
                  loc: this.sourceNode[0].loc
              })
          },
          addDepth: function(t) {
              t && (this.useDepths = !0)
          },
          classifySexpr: function(t) {
              var e = f.default.helpers.simpleId(t.path)
                , n = e && !!this.blockParamIndex(t.path.parts[0])
                , i = !n && f.default.helpers.helperExpression(t)
                , r = !n && (i || e);
              if (r && !i) {
                  var a = t.path.parts[0]
                    , o = this.options;
                  o.knownHelpers[a] ? i = !0 : o.knownHelpersOnly && (r = !1)
              }
              return i ? "helper" : r ? "ambiguous" : "simple"
          },
          pushParams: function(t) {
              for (var e = 0, n = t.length; e < n; e++)
                  this.pushParam(t[e])
          },
          pushParam: function(t) {
              var e = null != t.value ? t.value : t.original || "";
              if (this.stringParams)
                  e.replace && (e = e.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")),
                  t.depth && this.addDepth(t.depth),
                  this.opcode("getContext", t.depth || 0),
                  this.opcode("pushStringParam", e, t.type),
                  "SubExpression" === t.type && this.accept(t);
              else {
                  if (this.trackIds) {
                      var n = void 0;
                      if (!t.parts || f.default.helpers.scopedId(t) || t.depth || (n = this.blockParamIndex(t.parts[0])),
                      n) {
                          var i = t.parts.slice(1).join(".");
                          this.opcode("pushId", "BlockParam", n, i)
                      } else
                          e = t.original || e,
                          e.replace && (e = e.replace(/^\.\//g, "").replace(/^\.$/g, "")),
                          this.opcode("pushId", t.type, e)
                  }
                  this.accept(t)
              }
          },
          setupFullMustacheParams: function(t, e, n, i) {
              var r = t.params;
              return this.pushParams(r),
              this.opcode("pushProgram", e),
              this.opcode("pushProgram", n),
              t.hash ? this.accept(t.hash) : this.opcode("emptyHash", i),
              r
          },
          blockParamIndex: function(t) {
              for (var e = 0, n = this.options.blockParams.length; e < n; e++) {
                  var i = this.options.blockParams[e]
                    , r = i && d.indexOf(i, t);
                  if (i && r >= 0)
                      return [e, r]
              }
          }
      }
  }
  , function(t, e, n) {
      "use strict";
      function i(t) {
          this.value = t
      }
      function r() {}
      function a(t, e, n, i) {
          var r = e.popStack()
            , a = 0
            , o = n.length;
          for (t && o--; a < o; a++)
              r = e.nameLookup(r, n[a], i);
          return t ? [e.aliasable("this.strict"), "(", r, ", ", e.quotedString(n[a]), ")"] : r
      }
      var o = n(8).default;
      e.__esModule = !0;
      var s = n(10)
        , l = n(12)
        , c = o(l)
        , u = n(13)
        , d = n(18)
        , p = o(d);
      r.prototype = {
          nameLookup: function(t, e) {
              return r.isValidJavaScriptVariableName(e) ? [t, ".", e] : [t, "['", e, "']"]
          },
          depthedLookup: function(t) {
              return [this.aliasable("this.lookup"), '(depths, "', t, '")']
          },
          compilerInfo: function() {
              var t = s.COMPILER_REVISION;
              return [t, s.REVISION_CHANGES[t]]
          },
          appendToBuffer: function(t, e, n) {
              return u.isArray(t) || (t = [t]),
              t = this.source.wrap(t, e),
              this.environment.isSimple ? ["return ", t, ";"] : n ? ["buffer += ", t, ";"] : (t.appendToBuffer = !0,
              t)
          },
          initializeBuffer: function() {
              return this.quotedString("")
          },
          compile: function(t, e, n, i) {
              this.environment = t,
              this.options = e,
              this.stringParams = this.options.stringParams,
              this.trackIds = this.options.trackIds,
              this.precompile = !i,
              this.name = this.environment.name,
              this.isChild = !!n,
              this.context = n || {
                  programs: [],
                  environments: []
              },
              this.preamble(),
              this.stackSlot = 0,
              this.stackVars = [],
              this.aliases = {},
              this.registers = {
                  list: []
              },
              this.hashes = [],
              this.compileStack = [],
              this.inlineStack = [],
              this.blockParams = [],
              this.compileChildren(t, e),
              this.useDepths = this.useDepths || t.useDepths || this.options.compat,
              this.useBlockParams = this.useBlockParams || t.useBlockParams;
              var r = t.opcodes
                , a = void 0
                , o = void 0
                , s = void 0
                , l = void 0;
              for (s = 0,
              l = r.length; s < l; s++)
                  a = r[s],
                  this.source.currentLocation = a.loc,
                  o = o || a.loc,
                  this[a.opcode].apply(this, a.args);
              if (this.source.currentLocation = o,
              this.pushSource(""),
              this.stackSlot || this.inlineStack.length || this.compileStack.length)
                  throw new c.default("Compile completed with content left on stack");
              var u = this.createFunctionContext(i);
              if (this.isChild)
                  return u;
              var d = {
                  compiler: this.compilerInfo(),
                  main: u
              }
                , p = this.context.programs;
              for (s = 0,
              l = p.length; s < l; s++)
                  p[s] && (d[s] = p[s]);
              return this.environment.usePartial && (d.usePartial = !0),
              this.options.data && (d.useData = !0),
              this.useDepths && (d.useDepths = !0),
              this.useBlockParams && (d.useBlockParams = !0),
              this.options.compat && (d.compat = !0),
              i ? d.compilerOptions = this.options : (d.compiler = JSON.stringify(d.compiler),
              this.source.currentLocation = {
                  start: {
                      line: 1,
                      column: 0
                  }
              },
              d = this.objectLiteral(d),
              e.srcName ? (d = d.toStringWithSourceMap({
                  file: e.destName
              }),
              d.map = d.map && d.map.toString()) : d = d.toString()),
              d
          },
          preamble: function() {
              this.lastContext = 0,
              this.source = new p.default(this.options.srcName)
          },
          createFunctionContext: function(t) {
              var e = ""
                , n = this.stackVars.concat(this.registers.list);
              n.length > 0 && (e += ", " + n.join(", "));
              var i = 0;
              for (var r in this.aliases) {
                  var a = this.aliases[r];
                  this.aliases.hasOwnProperty(r) && a.children && a.referenceCount > 1 && (e += ", alias" + ++i + "=" + r,
                  a.children[0] = "alias" + i)
              }
              var o = ["depth0", "helpers", "partials", "data"];
              (this.useBlockParams || this.useDepths) && o.push("blockParams"),
              this.useDepths && o.push("depths");
              var s = this.mergeSource(e);
              return t ? (o.push(s),
              Function.apply(this, o)) : this.source.wrap(["function(", o.join(","), ") {\n  ", s, "}"])
          },
          mergeSource: function(t) {
              var e = this.environment.isSimple
                , n = !this.forceBuffer
                , i = void 0
                , r = void 0
                , a = void 0
                , o = void 0;
              return this.source.each(function(t) {
                  t.appendToBuffer ? (a ? t.prepend("  + ") : a = t,
                  o = t) : (a && (r ? a.prepend("buffer += ") : i = !0,
                  o.add(";"),
                  a = o = void 0),
                  r = !0,
                  e || (n = !1))
              }),
              n ? a ? (a.prepend("return "),
              o.add(";")) : r || this.source.push('return "";') : (t += ", buffer = " + (i ? "" : this.initializeBuffer()),
              a ? (a.prepend("return buffer + "),
              o.add(";")) : this.source.push("return buffer;")),
              t && this.source.prepend("var " + t.substring(2) + (i ? "" : ";\n")),
              this.source.merge()
          },
          blockValue: function(t) {
              var e = this.aliasable("helpers.blockHelperMissing")
                , n = [this.contextName(0)];
              this.setupHelperArgs(t, 0, n);
              var i = this.popStack();
              n.splice(1, 0, i),
              this.push(this.source.functionCall(e, "call", n))
          },
          ambiguousBlockValue: function() {
              var t = this.aliasable("helpers.blockHelperMissing")
                , e = [this.contextName(0)];
              this.setupHelperArgs("", 0, e, !0),
              this.flushInline();
              var n = this.topStack();
              e.splice(1, 0, n),
              this.pushSource(["if (!", this.lastHelper, ") { ", n, " = ", this.source.functionCall(t, "call", e), "}"])
          },
          appendContent: function(t) {
              this.pendingContent ? t = this.pendingContent + t : this.pendingLocation = this.source.currentLocation,
              this.pendingContent = t
          },
          append: function() {
              if (this.isInline())
                  this.replaceStack(function(t) {
                      return [" != null ? ", t, ' : ""']
                  }),
                  this.pushSource(this.appendToBuffer(this.popStack()));
              else {
                  var t = this.popStack();
                  this.pushSource(["if (", t, " != null) { ", this.appendToBuffer(t, void 0, !0), " }"]),
                  this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"])
              }
          },
          appendEscaped: function() {
              this.pushSource(this.appendToBuffer([this.aliasable("this.escapeExpression"), "(", this.popStack(), ")"]))
          },
          getContext: function(t) {
              this.lastContext = t
          },
          pushContext: function() {
              this.pushStackLiteral(this.contextName(this.lastContext))
          },
          lookupOnContext: function(t, e, n) {
              var i = 0;
              n || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(t[i++])),
              this.resolvePath("context", t, i, e)
          },
          lookupBlockParam: function(t, e) {
              this.useBlockParams = !0,
              this.push(["blockParams[", t[0], "][", t[1], "]"]),
              this.resolvePath("context", e, 1)
          },
          lookupData: function(t, e) {
              t ? this.pushStackLiteral("this.data(data, " + t + ")") : this.pushStackLiteral("data"),
              this.resolvePath("data", e, 0, !0)
          },
          resolvePath: function(t, e, n, i) {
              var r = this;
              if (this.options.strict || this.options.assumeObjects)
                  return void this.push(a(this.options.strict, this, e, t));
              for (var o = e.length; n < o; n++)
                  this.replaceStack(function(a) {
                      var o = r.nameLookup(a, e[n], t);
                      return i ? [" && ", o] : [" != null ? ", o, " : ", a]
                  })
          },
          resolvePossibleLambda: function() {
              this.push([this.aliasable("this.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"])
          },
          pushStringParam: function(t, e) {
              this.pushContext(),
              this.pushString(e),
              "SubExpression" !== e && ("string" == typeof t ? this.pushString(t) : this.pushStackLiteral(t))
          },
          emptyHash: function(t) {
              this.trackIds && this.push("{}"),
              this.stringParams && (this.push("{}"),
              this.push("{}")),
              this.pushStackLiteral(t ? "undefined" : "{}")
          },
          pushHash: function() {
              this.hash && this.hashes.push(this.hash),
              this.hash = {
                  values: [],
                  types: [],
                  contexts: [],
                  ids: []
              }
          },
          popHash: function() {
              var t = this.hash;
              this.hash = this.hashes.pop(),
              this.trackIds && this.push(this.objectLiteral(t.ids)),
              this.stringParams && (this.push(this.objectLiteral(t.contexts)),
              this.push(this.objectLiteral(t.types))),
              this.push(this.objectLiteral(t.values))
          },
          pushString: function(t) {
              this.pushStackLiteral(this.quotedString(t))
          },
          pushLiteral: function(t) {
              this.pushStackLiteral(t)
          },
          pushProgram: function(t) {
              null != t ? this.pushStackLiteral(this.programExpression(t)) : this.pushStackLiteral(null)
          },
          invokeHelper: function(t, e, n) {
              var i = this.popStack()
                , r = this.setupHelper(t, e)
                , a = n ? [r.name, " || "] : ""
                , o = ["("].concat(a, i);
              this.options.strict || o.push(" || ", this.aliasable("helpers.helperMissing")),
              o.push(")"),
              this.push(this.source.functionCall(o, "call", r.callParams))
          },
          invokeKnownHelper: function(t, e) {
              var n = this.setupHelper(t, e);
              this.push(this.source.functionCall(n.name, "call", n.callParams))
          },
          invokeAmbiguous: function(t, e) {
              this.useRegister("helper");
              var n = this.popStack();
              this.emptyHash();
              var i = this.setupHelper(0, t, e)
                , r = this.lastHelper = this.nameLookup("helpers", t, "helper")
                , a = ["(", "(helper = ", r, " || ", n, ")"];
              this.options.strict || (a[0] = "(helper = ",
              a.push(" != null ? helper : ", this.aliasable("helpers.helperMissing"))),
              this.push(["(", a, i.paramsInit ? ["),(", i.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", i.callParams), " : helper))"])
          },
          invokePartial: function(t, e, n) {
              var i = []
                , r = this.setupParams(e, 1, i, !1);
              t && (e = this.popStack(),
              delete r.name),
              n && (r.indent = JSON.stringify(n)),
              r.helpers = "helpers",
              r.partials = "partials",
              t ? i.unshift(e) : i.unshift(this.nameLookup("partials", e, "partial")),
              this.options.compat && (r.depths = "depths"),
              r = this.objectLiteral(r),
              i.push(r),
              this.push(this.source.functionCall("this.invokePartial", "", i))
          },
          assignToHash: function(t) {
              var e = this.popStack()
                , n = void 0
                , i = void 0
                , r = void 0;
              this.trackIds && (r = this.popStack()),
              this.stringParams && (i = this.popStack(),
              n = this.popStack());
              var a = this.hash;
              n && (a.contexts[t] = n),
              i && (a.types[t] = i),
              r && (a.ids[t] = r),
              a.values[t] = e
          },
          pushId: function(t, e, n) {
              "BlockParam" === t ? this.pushStackLiteral("blockParams[" + e[0] + "].path[" + e[1] + "]" + (n ? " + " + JSON.stringify("." + n) : "")) : "PathExpression" === t ? this.pushString(e) : "SubExpression" === t ? this.pushStackLiteral("true") : this.pushStackLiteral("null")
          },
          compiler: r,
          compileChildren: function(t, e) {
              for (var n = t.children, i = void 0, r = void 0, a = 0, o = n.length; a < o; a++) {
                  i = n[a],
                  r = new this.compiler;
                  var s = this.matchExistingProgram(i);
                  null == s ? (this.context.programs.push(""),
                  s = this.context.programs.length,
                  i.index = s,
                  i.name = "program" + s,
                  this.context.programs[s] = r.compile(i, e, this.context, !this.precompile),
                  this.context.environments[s] = i,
                  this.useDepths = this.useDepths || r.useDepths,
                  this.useBlockParams = this.useBlockParams || r.useBlockParams) : (i.index = s,
                  i.name = "program" + s,
                  this.useDepths = this.useDepths || i.useDepths,
                  this.useBlockParams = this.useBlockParams || i.useBlockParams)
              }
          },
          matchExistingProgram: function(t) {
              for (var e = 0, n = this.context.environments.length; e < n; e++) {
                  var i = this.context.environments[e];
                  if (i && i.equals(t))
                      return e
              }
          },
          programExpression: function(t) {
              var e = this.environment.children[t]
                , n = [e.index, "data", e.blockParams];
              return (this.useBlockParams || this.useDepths) && n.push("blockParams"),
              this.useDepths && n.push("depths"),
              "this.program(" + n.join(", ") + ")"
          },
          useRegister: function(t) {
              this.registers[t] || (this.registers[t] = !0,
              this.registers.list.push(t))
          },
          push: function(t) {
              return t instanceof i || (t = this.source.wrap(t)),
              this.inlineStack.push(t),
              t
          },
          pushStackLiteral: function(t) {
              this.push(new i(t))
          },
          pushSource: function(t) {
              this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)),
              this.pendingContent = void 0),
              t && this.source.push(t)
          },
          replaceStack: function(t) {
              var e = ["("]
                , n = void 0
                , r = void 0
                , a = void 0;
              if (!this.isInline())
                  throw new c.default("replaceStack on non-inline");
              var o = this.popStack(!0);
              if (o instanceof i)
                  n = [o.value],
                  e = ["(", n],
                  a = !0;
              else {
                  r = !0;
                  var s = this.incrStack();
                  e = ["((", this.push(s), " = ", o, ")"],
                  n = this.topStack()
              }
              var l = t.call(this, n);
              a || this.popStack(),
              r && this.stackSlot--,
              this.push(e.concat(l, ")"))
          },
          incrStack: function() {
              return this.stackSlot++,
              this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot),
              this.topStackName()
          },
          topStackName: function() {
              return "stack" + this.stackSlot
          },
          flushInline: function() {
              var t = this.inlineStack;
              this.inlineStack = [];
              for (var e = 0, n = t.length; e < n; e++) {
                  var r = t[e];
                  if (r instanceof i)
                      this.compileStack.push(r);
                  else {
                      var a = this.incrStack();
                      this.pushSource([a, " = ", r, ";"]),
                      this.compileStack.push(a)
                  }
              }
          },
          isInline: function() {
              return this.inlineStack.length
          },
          popStack: function(t) {
              var e = this.isInline()
                , n = (e ? this.inlineStack : this.compileStack).pop();
              if (!t && n instanceof i)
                  return n.value;
              if (!e) {
                  if (!this.stackSlot)
                      throw new c.default("Invalid stack pop");
                  this.stackSlot--
              }
              return n
          },
          topStack: function() {
              var t = this.isInline() ? this.inlineStack : this.compileStack
                , e = t[t.length - 1];
              return e instanceof i ? e.value : e
          },
          contextName: function(t) {
              return this.useDepths && t ? "depths[" + t + "]" : "depth" + t
          },
          quotedString: function(t) {
              return this.source.quotedString(t)
          },
          objectLiteral: function(t) {
              return this.source.objectLiteral(t)
          },
          aliasable: function(t) {
              var e = this.aliases[t];
              return e ? (e.referenceCount++,
              e) : (e = this.aliases[t] = this.source.wrap(t),
              e.aliasable = !0,
              e.referenceCount = 1,
              e)
          },
          setupHelper: function(t, e, n) {
              var i = [];
              return {
                  params: i,
                  paramsInit: this.setupHelperArgs(e, t, i, n),
                  name: this.nameLookup("helpers", e, "helper"),
                  callParams: [this.contextName(0)].concat(i)
              }
          },
          setupParams: function(t, e, n) {
              var i = {}
                , r = []
                , a = []
                , o = []
                , s = void 0;
              i.name = this.quotedString(t),
              i.hash = this.popStack(),
              this.trackIds && (i.hashIds = this.popStack()),
              this.stringParams && (i.hashTypes = this.popStack(),
              i.hashContexts = this.popStack());
              var l = this.popStack()
                , c = this.popStack();
              (c || l) && (i.fn = c || "this.noop",
              i.inverse = l || "this.noop");
              for (var u = e; u--; )
                  s = this.popStack(),
                  n[u] = s,
                  this.trackIds && (o[u] = this.popStack()),
                  this.stringParams && (a[u] = this.popStack(),
                  r[u] = this.popStack());
              return this.trackIds && (i.ids = this.source.generateArray(o)),
              this.stringParams && (i.types = this.source.generateArray(a),
              i.contexts = this.source.generateArray(r)),
              this.options.data && (i.data = "data"),
              this.useBlockParams && (i.blockParams = "blockParams"),
              i
          },
          setupHelperArgs: function(t, e, n, i) {
              var r = this.setupParams(t, e, n, !0);
              return r = this.objectLiteral(r),
              i ? (this.useRegister("options"),
              n.push("options"),
              ["options=", r]) : (n.push(r),
              "")
          }
      },
      function() {
          for (var t = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), e = r.RESERVED_WORDS = {}, n = 0, i = t.length; n < i; n++)
              e[t[n]] = !0
      }(),
      r.isValidJavaScriptVariableName = function(t) {
          return !r.RESERVED_WORDS[t] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)
      }
      ,
      e.default = r,
      t.exports = e.default
  }
  , function(t, e, n) {
      "use strict";
      function i() {
          this.parents = []
      }
      var r = n(8).default;
      e.__esModule = !0;
      var a = n(12)
        , o = r(a)
        , s = n(2)
        , l = r(s);
      i.prototype = {
          constructor: i,
          mutating: !1,
          acceptKey: function(t, e) {
              var n = this.accept(t[e]);
              if (this.mutating) {
                  if (n && (!n.type || !l.default[n.type]))
                      throw new o.default('Unexpected node type "' + n.type + '" found when accepting ' + e + " on " + t.type);
                  t[e] = n
              }
          },
          acceptRequired: function(t, e) {
              if (this.acceptKey(t, e),
              !t[e])
                  throw new o.default(t.type + " requires " + e)
          },
          acceptArray: function(t) {
              for (var e = 0, n = t.length; e < n; e++)
                  this.acceptKey(t, e),
                  t[e] || (t.splice(e, 1),
                  e--,
                  n--)
          },
          accept: function(t) {
              if (t) {
                  this.current && this.parents.unshift(this.current),
                  this.current = t;
                  var e = this[t.type](t);
                  return this.current = this.parents.shift(),
                  !this.mutating || e ? e : !1 !== e ? t : void 0
              }
          },
          Program: function(t) {
              this.acceptArray(t.body)
          },
          MustacheStatement: function(t) {
              this.acceptRequired(t, "path"),
              this.acceptArray(t.params),
              this.acceptKey(t, "hash")
          },
          BlockStatement: function(t) {
              this.acceptRequired(t, "path"),
              this.acceptArray(t.params),
              this.acceptKey(t, "hash"),
              this.acceptKey(t, "program"),
              this.acceptKey(t, "inverse")
          },
          PartialStatement: function(t) {
              this.acceptRequired(t, "name"),
              this.acceptArray(t.params),
              this.acceptKey(t, "hash")
          },
          ContentStatement: function() {},
          CommentStatement: function() {},
          SubExpression: function(t) {
              this.acceptRequired(t, "path"),
              this.acceptArray(t.params),
              this.acceptKey(t, "hash")
          },
          PathExpression: function() {},
          StringLiteral: function() {},
          NumberLiteral: function() {},
          BooleanLiteral: function() {},
          UndefinedLiteral: function() {},
          NullLiteral: function() {},
          Hash: function(t) {
              this.acceptArray(t.pairs)
          },
          HashPair: function(t) {
              this.acceptRequired(t, "value")
          }
      },
      e.default = i,
      t.exports = e.default
  }
  , function(t, e, n) {
      (function(n) {
          "use strict";
          e.__esModule = !0,
          e.default = function(t) {
              var e = void 0 !== n ? n : window
                , i = e.Handlebars;
              t.noConflict = function() {
                  e.Handlebars === t && (e.Handlebars = i)
              }
          }
          ,
          t.exports = e.default
      }
      ).call(e, function() {
          return this
      }())
  }
  , function(t, e, n) {
      "use strict";
      e.default = function(t) {
          return t && t.__esModule ? t : {
              default: t
          }
      }
      ,
      e.__esModule = !0
  }
  , function(t, e, n) {
      "use strict";
      e.default = function(t) {
          if (t && t.__esModule)
              return t;
          var e = {};
          if ("object" == typeof t && null !== t)
              for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e.default = t,
          e
      }
      ,
      e.__esModule = !0
  }
  , function(t, e, n) {
      "use strict";
      function i(t, e) {
          this.helpers = t || {},
          this.partials = e || {},
          r(this)
      }
      function r(t) {
          t.registerHelper("helperMissing", function() {
              if (1 !== arguments.length)
                  throw new d.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
          }),
          t.registerHelper("blockHelperMissing", function(e, n) {
              var i = n.inverse
                , r = n.fn;
              if (!0 === e)
                  return r(this);
              if (!1 === e || null == e)
                  return i(this);
              if (f(e))
                  return e.length > 0 ? (n.ids && (n.ids = [n.name]),
                  t.helpers.each(e, n)) : i(this);
              if (n.data && n.ids) {
                  var o = a(n.data);
                  o.contextPath = c.appendContextPath(n.data.contextPath, n.name),
                  n = {
                      data: o
                  }
              }
              return r(e, n)
          }),
          t.registerHelper("each", function(t, e) {
              function n(e, n, r) {
                  l && (l.key = e,
                  l.index = n,
                  l.first = 0 === n,
                  l.last = !!r,
                  u && (l.contextPath = u + e)),
                  s += i(t[e], {
                      data: l,
                      blockParams: c.blockParams([t[e], e], [u + e, null])
                  })
              }
              if (!e)
                  throw new d.default("Must pass iterator to #each");
              var i = e.fn
                , r = e.inverse
                , o = 0
                , s = ""
                , l = void 0
                , u = void 0;
              if (e.data && e.ids && (u = c.appendContextPath(e.data.contextPath, e.ids[0]) + "."),
              h(t) && (t = t.call(this)),
              e.data && (l = a(e.data)),
              t && "object" == typeof t)
                  if (f(t))
                      for (var p = t.length; o < p; o++)
                          n(o, o, o === t.length - 1);
                  else {
                      var m = void 0;
                      for (var v in t)
                          t.hasOwnProperty(v) && (m && n(m, o - 1),
                          m = v,
                          o++);
                      m && n(m, o - 1, !0)
                  }
              return 0 === o && (s = r(this)),
              s
          }),
          t.registerHelper("if", function(t, e) {
              return h(t) && (t = t.call(this)),
              !e.hash.includeZero && !t || c.isEmpty(t) ? e.inverse(this) : e.fn(this)
          }),
          t.registerHelper("unless", function(e, n) {
              return t.helpers.if.call(this, e, {
                  fn: n.inverse,
                  inverse: n.fn,
                  hash: n.hash
              })
          }),
          t.registerHelper("with", function(t, e) {
              h(t) && (t = t.call(this));
              var n = e.fn;
              if (c.isEmpty(t))
                  return e.inverse(this);
              if (e.data && e.ids) {
                  var i = a(e.data);
                  i.contextPath = c.appendContextPath(e.data.contextPath, e.ids[0]),
                  e = {
                      data: i
                  }
              }
              return n(t, e)
          }),
          t.registerHelper("log", function(e, n) {
              var i = n.data && null != n.data.level ? parseInt(n.data.level, 10) : 1;
              t.log(i, e)
          }),
          t.registerHelper("lookup", function(t, e) {
              return t && t[e]
          })
      }
      function a(t) {
          var e = c.extend({}, t);
          return e._parent = t,
          e
      }
      var o = n(9).default
        , s = n(8).default;
      e.__esModule = !0,
      e.HandlebarsEnvironment = i,
      e.createFrame = a;
      var l = n(13)
        , c = o(l)
        , u = n(12)
        , d = s(u);
      e.VERSION = "3.0.1";
      e.COMPILER_REVISION = 6;
      var p = {
          1: "<= 1.0.rc.2",
          2: "== 1.0.0-rc.3",
          3: "== 1.0.0-rc.4",
          4: "== 1.x.x",
          5: "== 2.0.0-alpha.x",
          6: ">= 2.0.0-beta.1"
      };
      e.REVISION_CHANGES = p;
      var f = c.isArray
        , h = c.isFunction
        , m = c.toString;
      i.prototype = {
          constructor: i,
          logger: v,
          log: g,
          registerHelper: function(t, e) {
              if ("[object Object]" === m.call(t)) {
                  if (e)
                      throw new d.default("Arg not supported with multiple helpers");
                  c.extend(this.helpers, t)
              } else
                  this.helpers[t] = e
          },
          unregisterHelper: function(t) {
              delete this.helpers[t]
          },
          registerPartial: function(t, e) {
              if ("[object Object]" === m.call(t))
                  c.extend(this.partials, t);
              else {
                  if (void 0 === e)
                      throw new d.default("Attempting to register a partial as undefined");
                  this.partials[t] = e
              }
          },
          unregisterPartial: function(t) {
              delete this.partials[t]
          }
      };
      var v = {
          methodMap: {
              0: "debug",
              1: "info",
              2: "warn",
              3: "error"
          },
          DEBUG: 0,
          INFO: 1,
          WARN: 2,
          ERROR: 3,
          level: 1,
          log: function(t, e) {
              if ("undefined" != typeof console && v.level <= t) {
                  var n = v.methodMap[t];
                  (console[n] || console.log).call(console, e)
              }
          }
      };
      e.logger = v;
      var g = v.log;
      e.log = g
  }
  , function(t, e, n) {
      "use strict";
      function i(t) {
          this.string = t
      }
      e.__esModule = !0,
      i.prototype.toString = i.prototype.toHTML = function() {
          return "" + this.string
      }
      ,
      e.default = i,
      t.exports = e.default
  }
  , function(t, e, n) {
      "use strict";
      function i(t, e) {
          var n = e && e.loc
            , a = void 0
            , o = void 0;
          n && (a = n.start.line,
          o = n.start.column,
          t += " - " + a + ":" + o);
          for (var s = Error.prototype.constructor.call(this, t), l = 0; l < r.length; l++)
              this[r[l]] = s[r[l]];
          Error.captureStackTrace && Error.captureStackTrace(this, i),
          n && (this.lineNumber = a,
          this.column = o)
      }
      e.__esModule = !0;
      var r = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
      i.prototype = new Error,
      e.default = i,
      t.exports = e.default
  }
  , function(t, e, n) {
      "use strict";
      function i(t) {
          return u[t]
      }
      function r(t) {
          for (var e = 1; e < arguments.length; e++)
              for (var n in arguments[e])
                  Object.prototype.hasOwnProperty.call(arguments[e], n) && (t[n] = arguments[e][n]);
          return t
      }
      function a(t, e) {
          for (var n = 0, i = t.length; n < i; n++)
              if (t[n] === e)
                  return n;
          return -1
      }
      function o(t) {
          if ("string" != typeof t) {
              if (t && t.toHTML)
                  return t.toHTML();
              if (null == t)
                  return "";
              if (!t)
                  return t + "";
              t = "" + t
          }
          return p.test(t) ? t.replace(d, i) : t
      }
      function s(t) {
          return !t && 0 !== t || !(!m(t) || 0 !== t.length)
      }
      function l(t, e) {
          return t.path = e,
          t
      }
      function c(t, e) {
          return (t ? t + "." : "") + e
      }
      e.__esModule = !0,
      e.extend = r,
      e.indexOf = a,
      e.escapeExpression = o,
      e.isEmpty = s,
      e.blockParams = l,
      e.appendContextPath = c;
      var u = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;"
      }
        , d = /[&<>"'`]/g
        , p = /[&<>"'`]/
        , f = Object.prototype.toString;
      e.toString = f;
      var h = function(t) {
          return "function" == typeof t
      };
      h(/x/) && (e.isFunction = h = function(t) {
          return "function" == typeof t && "[object Function]" === f.call(t)
      }
      );
      var h;
      e.isFunction = h;
      var m = Array.isArray || function(t) {
          return !(!t || "object" != typeof t) && "[object Array]" === f.call(t)
      }
      ;
      e.isArray = m
  }
  , function(t, e, n) {
      "use strict";
      function i(t) {
          var e = t && t[0] || 1
            , n = v.COMPILER_REVISION;
          if (e !== n) {
              if (e < n) {
                  var i = v.REVISION_CHANGES[n]
                    , r = v.REVISION_CHANGES[e];
                  throw new m.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + r + ").")
              }
              throw new m.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").")
          }
      }
      function r(t, e) {
          function n(n, i, r) {
              r.hash && (i = f.extend({}, i, r.hash)),
              n = e.VM.resolvePartial.call(this, n, i, r);
              var a = e.VM.invokePartial.call(this, n, i, r);
              if (null == a && e.compile && (r.partials[r.name] = e.compile(n, t.compilerOptions, e),
              a = r.partials[r.name](i, r)),
              null != a) {
                  if (r.indent) {
                      for (var o = a.split("\n"), s = 0, l = o.length; s < l && (o[s] || s + 1 !== l); s++)
                          o[s] = r.indent + o[s];
                      a = o.join("\n")
                  }
                  return a
              }
              throw new m.default("The partial " + r.name + " could not be compiled when running in runtime-only mode")
          }
          function i(e) {
              var n = void 0 === arguments[1] ? {} : arguments[1]
                , a = n.data;
              i._setup(n),
              !n.partial && t.useData && (a = c(e, a));
              var o = void 0
                , s = t.useBlockParams ? [] : void 0;
              return t.useDepths && (o = n.depths ? [e].concat(n.depths) : [e]),
              t.main.call(r, e, r.helpers, r.partials, a, s, o)
          }
          if (!e)
              throw new m.default("No environment passed to template");
          if (!t || !t.main)
              throw new m.default("Unknown template object: " + typeof t);
          e.VM.checkRevision(t.compiler);
          var r = {
              strict: function(t, e) {
                  if (!(e in t))
                      throw new m.default('"' + e + '" not defined in ' + t);
                  return t[e]
              },
              lookup: function(t, e) {
                  for (var n = t.length, i = 0; i < n; i++)
                      if (t[i] && null != t[i][e])
                          return t[i][e]
              },
              lambda: function(t, e) {
                  return "function" == typeof t ? t.call(e) : t
              },
              escapeExpression: f.escapeExpression,
              invokePartial: n,
              fn: function(e) {
                  return t[e]
              },
              programs: [],
              program: function(t, e, n, i, r) {
                  var o = this.programs[t]
                    , s = this.fn(t);
                  return e || r || i || n ? o = a(this, t, s, e, n, i, r) : o || (o = this.programs[t] = a(this, t, s)),
                  o
              },
              data: function(t, e) {
                  for (; t && e--; )
                      t = t._parent;
                  return t
              },
              merge: function(t, e) {
                  var n = t || e;
                  return t && e && t !== e && (n = f.extend({}, e, t)),
                  n
              },
              noop: e.VM.noop,
              compilerInfo: t.compiler
          };
          return i.isTop = !0,
          i._setup = function(n) {
              n.partial ? (r.helpers = n.helpers,
              r.partials = n.partials) : (r.helpers = r.merge(n.helpers, e.helpers),
              t.usePartial && (r.partials = r.merge(n.partials, e.partials)))
          }
          ,
          i._child = function(e, n, i, o) {
              if (t.useBlockParams && !i)
                  throw new m.default("must pass block params");
              if (t.useDepths && !o)
                  throw new m.default("must pass parent depths");
              return a(r, e, t[e], n, 0, i, o)
          }
          ,
          i
      }
      function a(t, e, n, i, r, a, o) {
          function s(e) {
              var r = void 0 === arguments[1] ? {} : arguments[1];
              return n.call(t, e, t.helpers, t.partials, r.data || i, a && [r.blockParams].concat(a), o && [e].concat(o))
          }
          return s.program = e,
          s.depth = o ? o.length : 0,
          s.blockParams = r || 0,
          s
      }
      function o(t, e, n) {
          return t ? t.call || n.name || (n.name = t,
          t = n.partials[t]) : t = n.partials[n.name],
          t
      }
      function s(t, e, n) {
          if (n.partial = !0,
          void 0 === t)
              throw new m.default("The partial " + n.name + " could not be found");
          if (t instanceof Function)
              return t(e, n)
      }
      function l() {
          return ""
      }
      function c(t, e) {
          return e && "root"in e || (e = e ? v.createFrame(e) : {},
          e.root = t),
          e
      }
      var u = n(9).default
        , d = n(8).default;
      e.__esModule = !0,
      e.checkRevision = i,
      e.template = r,
      e.wrapProgram = a,
      e.resolvePartial = o,
      e.invokePartial = s,
      e.noop = l;
      var p = n(13)
        , f = u(p)
        , h = n(12)
        , m = d(h)
        , v = n(10)
  }
  , function(t, e, n) {
      "use strict";
      e.__esModule = !0;
      var i = function() {
          function t() {
              this.yy = {}
          }
          var e = {
              trace: function() {},
              yy: {},
              symbols_: {
                  error: 2,
                  root: 3,
                  program: 4,
                  EOF: 5,
                  program_repetition0: 6,
                  statement: 7,
                  mustache: 8,
                  block: 9,
                  rawBlock: 10,
                  partial: 11,
                  content: 12,
                  COMMENT: 13,
                  CONTENT: 14,
                  openRawBlock: 15,
                  END_RAW_BLOCK: 16,
                  OPEN_RAW_BLOCK: 17,
                  helperName: 18,
                  openRawBlock_repetition0: 19,
                  openRawBlock_option0: 20,
                  CLOSE_RAW_BLOCK: 21,
                  openBlock: 22,
                  block_option0: 23,
                  closeBlock: 24,
                  openInverse: 25,
                  block_option1: 26,
                  OPEN_BLOCK: 27,
                  openBlock_repetition0: 28,
                  openBlock_option0: 29,
                  openBlock_option1: 30,
                  CLOSE: 31,
                  OPEN_INVERSE: 32,
                  openInverse_repetition0: 33,
                  openInverse_option0: 34,
                  openInverse_option1: 35,
                  openInverseChain: 36,
                  OPEN_INVERSE_CHAIN: 37,
                  openInverseChain_repetition0: 38,
                  openInverseChain_option0: 39,
                  openInverseChain_option1: 40,
                  inverseAndProgram: 41,
                  INVERSE: 42,
                  inverseChain: 43,
                  inverseChain_option0: 44,
                  OPEN_ENDBLOCK: 45,
                  OPEN: 46,
                  mustache_repetition0: 47,
                  mustache_option0: 48,
                  OPEN_UNESCAPED: 49,
                  mustache_repetition1: 50,
                  mustache_option1: 51,
                  CLOSE_UNESCAPED: 52,
                  OPEN_PARTIAL: 53,
                  partialName: 54,
                  partial_repetition0: 55,
                  partial_option0: 56,
                  param: 57,
                  sexpr: 58,
                  OPEN_SEXPR: 59,
                  sexpr_repetition0: 60,
                  sexpr_option0: 61,
                  CLOSE_SEXPR: 62,
                  hash: 63,
                  hash_repetition_plus0: 64,
                  hashSegment: 65,
                  ID: 66,
                  EQUALS: 67,
                  blockParams: 68,
                  OPEN_BLOCK_PARAMS: 69,
                  blockParams_repetition_plus0: 70,
                  CLOSE_BLOCK_PARAMS: 71,
                  path: 72,
                  dataName: 73,
                  STRING: 74,
                  NUMBER: 75,
                  BOOLEAN: 76,
                  UNDEFINED: 77,
                  NULL: 78,
                  DATA: 79,
                  pathSegments: 80,
                  SEP: 81,
                  $accept: 0,
                  $end: 1
              },
              terminals_: {
                  2: "error",
                  5: "EOF",
                  13: "COMMENT",
                  14: "CONTENT",
                  16: "END_RAW_BLOCK",
                  17: "OPEN_RAW_BLOCK",
                  21: "CLOSE_RAW_BLOCK",
                  27: "OPEN_BLOCK",
                  31: "CLOSE",
                  32: "OPEN_INVERSE",
                  37: "OPEN_INVERSE_CHAIN",
                  42: "INVERSE",
                  45: "OPEN_ENDBLOCK",
                  46: "OPEN",
                  49: "OPEN_UNESCAPED",
                  52: "CLOSE_UNESCAPED",
                  53: "OPEN_PARTIAL",
                  59: "OPEN_SEXPR",
                  62: "CLOSE_SEXPR",
                  66: "ID",
                  67: "EQUALS",
                  69: "OPEN_BLOCK_PARAMS",
                  71: "CLOSE_BLOCK_PARAMS",
                  74: "STRING",
                  75: "NUMBER",
                  76: "BOOLEAN",
                  77: "UNDEFINED",
                  78: "NULL",
                  79: "DATA",
                  81: "SEP"
              },
              productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [12, 1], [10, 3], [15, 5], [9, 4], [9, 4], [22, 6], [25, 6], [36, 6], [41, 2], [43, 3], [43, 1], [24, 3], [8, 5], [8, 5], [11, 5], [57, 1], [57, 1], [58, 5], [63, 1], [65, 3], [68, 3], [18, 1], [18, 1], [18, 1], [18, 1], [18, 1], [18, 1], [18, 1], [54, 1], [54, 1], [73, 2], [72, 1], [80, 3], [80, 1], [6, 0], [6, 2], [19, 0], [19, 2], [20, 0], [20, 1], [23, 0], [23, 1], [26, 0], [26, 1], [28, 0], [28, 2], [29, 0], [29, 1], [30, 0], [30, 1], [33, 0], [33, 2], [34, 0], [34, 1], [35, 0], [35, 1], [38, 0], [38, 2], [39, 0], [39, 1], [40, 0], [40, 1], [44, 0], [44, 1], [47, 0], [47, 2], [48, 0], [48, 1], [50, 0], [50, 2], [51, 0], [51, 1], [55, 0], [55, 2], [56, 0], [56, 1], [60, 0], [60, 2], [61, 0], [61, 1], [64, 1], [64, 2], [70, 1], [70, 2]],
              performAction: function(t, e, n, i, r, a, o) {
                  var s = a.length - 1;
                  switch (r) {
                  case 1:
                      return a[s - 1];
                  case 2:
                      this.$ = new i.Program(a[s],null,{},i.locInfo(this._$));
                      break;
                  case 3:
                  case 4:
                  case 5:
                  case 6:
                  case 7:
                      this.$ = a[s];
                      break;
                  case 8:
                      this.$ = new i.CommentStatement(i.stripComment(a[s]),i.stripFlags(a[s], a[s]),i.locInfo(this._$));
                      break;
                  case 9:
                      this.$ = new i.ContentStatement(a[s],i.locInfo(this._$));
                      break;
                  case 10:
                      this.$ = i.prepareRawBlock(a[s - 2], a[s - 1], a[s], this._$);
                      break;
                  case 11:
                      this.$ = {
                          path: a[s - 3],
                          params: a[s - 2],
                          hash: a[s - 1]
                      };
                      break;
                  case 12:
                      this.$ = i.prepareBlock(a[s - 3], a[s - 2], a[s - 1], a[s], !1, this._$);
                      break;
                  case 13:
                      this.$ = i.prepareBlock(a[s - 3], a[s - 2], a[s - 1], a[s], !0, this._$);
                      break;
                  case 14:
                  case 15:
                  case 16:
                      this.$ = {
                          path: a[s - 4],
                          params: a[s - 3],
                          hash: a[s - 2],
                          blockParams: a[s - 1],
                          strip: i.stripFlags(a[s - 5], a[s])
                      };
                      break;
                  case 17:
                      this.$ = {
                          strip: i.stripFlags(a[s - 1], a[s - 1]),
                          program: a[s]
                      };
                      break;
                  case 18:
                      var l = i.prepareBlock(a[s - 2], a[s - 1], a[s], a[s], !1, this._$)
                        , c = new i.Program([l],null,{},i.locInfo(this._$));
                      c.chained = !0,
                      this.$ = {
                          strip: a[s - 2].strip,
                          program: c,
                          chain: !0
                      };
                      break;
                  case 19:
                      this.$ = a[s];
                      break;
                  case 20:
                      this.$ = {
                          path: a[s - 1],
                          strip: i.stripFlags(a[s - 2], a[s])
                      };
                      break;
                  case 21:
                  case 22:
                      this.$ = i.prepareMustache(a[s - 3], a[s - 2], a[s - 1], a[s - 4], i.stripFlags(a[s - 4], a[s]), this._$);
                      break;
                  case 23:
                      this.$ = new i.PartialStatement(a[s - 3],a[s - 2],a[s - 1],i.stripFlags(a[s - 4], a[s]),i.locInfo(this._$));
                      break;
                  case 24:
                  case 25:
                      this.$ = a[s];
                      break;
                  case 26:
                      this.$ = new i.SubExpression(a[s - 3],a[s - 2],a[s - 1],i.locInfo(this._$));
                      break;
                  case 27:
                      this.$ = new i.Hash(a[s],i.locInfo(this._$));
                      break;
                  case 28:
                      this.$ = new i.HashPair(i.id(a[s - 2]),a[s],i.locInfo(this._$));
                      break;
                  case 29:
                      this.$ = i.id(a[s - 1]);
                      break;
                  case 30:
                  case 31:
                      this.$ = a[s];
                      break;
                  case 32:
                      this.$ = new i.StringLiteral(a[s],i.locInfo(this._$));
                      break;
                  case 33:
                      this.$ = new i.NumberLiteral(a[s],i.locInfo(this._$));
                      break;
                  case 34:
                      this.$ = new i.BooleanLiteral(a[s],i.locInfo(this._$));
                      break;
                  case 35:
                      this.$ = new i.UndefinedLiteral(i.locInfo(this._$));
                      break;
                  case 36:
                      this.$ = new i.NullLiteral(i.locInfo(this._$));
                      break;
                  case 37:
                  case 38:
                      this.$ = a[s];
                      break;
                  case 39:
                      this.$ = i.preparePath(!0, a[s], this._$);
                      break;
                  case 40:
                      this.$ = i.preparePath(!1, a[s], this._$);
                      break;
                  case 41:
                      a[s - 2].push({
                          part: i.id(a[s]),
                          original: a[s],
                          separator: a[s - 1]
                      }),
                      this.$ = a[s - 2];
                      break;
                  case 42:
                      this.$ = [{
                          part: i.id(a[s]),
                          original: a[s]
                      }];
                      break;
                  case 43:
                      this.$ = [];
                      break;
                  case 44:
                      a[s - 1].push(a[s]);
                      break;
                  case 45:
                      this.$ = [];
                      break;
                  case 46:
                      a[s - 1].push(a[s]);
                      break;
                  case 53:
                      this.$ = [];
                      break;
                  case 54:
                      a[s - 1].push(a[s]);
                      break;
                  case 59:
                      this.$ = [];
                      break;
                  case 60:
                      a[s - 1].push(a[s]);
                      break;
                  case 65:
                      this.$ = [];
                      break;
                  case 66:
                      a[s - 1].push(a[s]);
                      break;
                  case 73:
                      this.$ = [];
                      break;
                  case 74:
                      a[s - 1].push(a[s]);
                      break;
                  case 77:
                      this.$ = [];
                      break;
                  case 78:
                      a[s - 1].push(a[s]);
                      break;
                  case 81:
                      this.$ = [];
                      break;
                  case 82:
                      a[s - 1].push(a[s]);
                      break;
                  case 85:
                      this.$ = [];
                      break;
                  case 86:
                      a[s - 1].push(a[s]);
                      break;
                  case 89:
                      this.$ = [a[s]];
                      break;
                  case 90:
                      a[s - 1].push(a[s]);
                      break;
                  case 91:
                      this.$ = [a[s]];
                      break;
                  case 92:
                      a[s - 1].push(a[s])
                  }
              },
              table: [{
                  3: 1,
                  4: 2,
                  5: [2, 43],
                  6: 3,
                  13: [2, 43],
                  14: [2, 43],
                  17: [2, 43],
                  27: [2, 43],
                  32: [2, 43],
                  46: [2, 43],
                  49: [2, 43],
                  53: [2, 43]
              }, {
                  1: [3]
              }, {
                  5: [1, 4]
              }, {
                  5: [2, 2],
                  7: 5,
                  8: 6,
                  9: 7,
                  10: 8,
                  11: 9,
                  12: 10,
                  13: [1, 11],
                  14: [1, 18],
                  15: 16,
                  17: [1, 21],
                  22: 14,
                  25: 15,
                  27: [1, 19],
                  32: [1, 20],
                  37: [2, 2],
                  42: [2, 2],
                  45: [2, 2],
                  46: [1, 12],
                  49: [1, 13],
                  53: [1, 17]
              }, {
                  1: [2, 1]
              }, {
                  5: [2, 44],
                  13: [2, 44],
                  14: [2, 44],
                  17: [2, 44],
                  27: [2, 44],
                  32: [2, 44],
                  37: [2, 44],
                  42: [2, 44],
                  45: [2, 44],
                  46: [2, 44],
                  49: [2, 44],
                  53: [2, 44]
              }, {
                  5: [2, 3],
                  13: [2, 3],
                  14: [2, 3],
                  17: [2, 3],
                  27: [2, 3],
                  32: [2, 3],
                  37: [2, 3],
                  42: [2, 3],
                  45: [2, 3],
                  46: [2, 3],
                  49: [2, 3],
                  53: [2, 3]
              }, {
                  5: [2, 4],
                  13: [2, 4],
                  14: [2, 4],
                  17: [2, 4],
                  27: [2, 4],
                  32: [2, 4],
                  37: [2, 4],
                  42: [2, 4],
                  45: [2, 4],
                  46: [2, 4],
                  49: [2, 4],
                  53: [2, 4]
              }, {
                  5: [2, 5],
                  13: [2, 5],
                  14: [2, 5],
                  17: [2, 5],
                  27: [2, 5],
                  32: [2, 5],
                  37: [2, 5],
                  42: [2, 5],
                  45: [2, 5],
                  46: [2, 5],
                  49: [2, 5],
                  53: [2, 5]
              }, {
                  5: [2, 6],
                  13: [2, 6],
                  14: [2, 6],
                  17: [2, 6],
                  27: [2, 6],
                  32: [2, 6],
                  37: [2, 6],
                  42: [2, 6],
                  45: [2, 6],
                  46: [2, 6],
                  49: [2, 6],
                  53: [2, 6]
              }, {
                  5: [2, 7],
                  13: [2, 7],
                  14: [2, 7],
                  17: [2, 7],
                  27: [2, 7],
                  32: [2, 7],
                  37: [2, 7],
                  42: [2, 7],
                  45: [2, 7],
                  46: [2, 7],
                  49: [2, 7],
                  53: [2, 7]
              }, {
                  5: [2, 8],
                  13: [2, 8],
                  14: [2, 8],
                  17: [2, 8],
                  27: [2, 8],
                  32: [2, 8],
                  37: [2, 8],
                  42: [2, 8],
                  45: [2, 8],
                  46: [2, 8],
                  49: [2, 8],
                  53: [2, 8]
              }, {
                  18: 22,
                  66: [1, 32],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  18: 33,
                  66: [1, 32],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  4: 34,
                  6: 3,
                  13: [2, 43],
                  14: [2, 43],
                  17: [2, 43],
                  27: [2, 43],
                  32: [2, 43],
                  37: [2, 43],
                  42: [2, 43],
                  45: [2, 43],
                  46: [2, 43],
                  49: [2, 43],
                  53: [2, 43]
              }, {
                  4: 35,
                  6: 3,
                  13: [2, 43],
                  14: [2, 43],
                  17: [2, 43],
                  27: [2, 43],
                  32: [2, 43],
                  42: [2, 43],
                  45: [2, 43],
                  46: [2, 43],
                  49: [2, 43],
                  53: [2, 43]
              }, {
                  12: 36,
                  14: [1, 18]
              }, {
                  18: 38,
                  54: 37,
                  58: 39,
                  59: [1, 40],
                  66: [1, 32],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  5: [2, 9],
                  13: [2, 9],
                  14: [2, 9],
                  16: [2, 9],
                  17: [2, 9],
                  27: [2, 9],
                  32: [2, 9],
                  37: [2, 9],
                  42: [2, 9],
                  45: [2, 9],
                  46: [2, 9],
                  49: [2, 9],
                  53: [2, 9]
              }, {
                  18: 41,
                  66: [1, 32],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  18: 42,
                  66: [1, 32],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  18: 43,
                  66: [1, 32],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  31: [2, 73],
                  47: 44,
                  59: [2, 73],
                  66: [2, 73],
                  74: [2, 73],
                  75: [2, 73],
                  76: [2, 73],
                  77: [2, 73],
                  78: [2, 73],
                  79: [2, 73]
              }, {
                  21: [2, 30],
                  31: [2, 30],
                  52: [2, 30],
                  59: [2, 30],
                  62: [2, 30],
                  66: [2, 30],
                  69: [2, 30],
                  74: [2, 30],
                  75: [2, 30],
                  76: [2, 30],
                  77: [2, 30],
                  78: [2, 30],
                  79: [2, 30]
              }, {
                  21: [2, 31],
                  31: [2, 31],
                  52: [2, 31],
                  59: [2, 31],
                  62: [2, 31],
                  66: [2, 31],
                  69: [2, 31],
                  74: [2, 31],
                  75: [2, 31],
                  76: [2, 31],
                  77: [2, 31],
                  78: [2, 31],
                  79: [2, 31]
              }, {
                  21: [2, 32],
                  31: [2, 32],
                  52: [2, 32],
                  59: [2, 32],
                  62: [2, 32],
                  66: [2, 32],
                  69: [2, 32],
                  74: [2, 32],
                  75: [2, 32],
                  76: [2, 32],
                  77: [2, 32],
                  78: [2, 32],
                  79: [2, 32]
              }, {
                  21: [2, 33],
                  31: [2, 33],
                  52: [2, 33],
                  59: [2, 33],
                  62: [2, 33],
                  66: [2, 33],
                  69: [2, 33],
                  74: [2, 33],
                  75: [2, 33],
                  76: [2, 33],
                  77: [2, 33],
                  78: [2, 33],
                  79: [2, 33]
              }, {
                  21: [2, 34],
                  31: [2, 34],
                  52: [2, 34],
                  59: [2, 34],
                  62: [2, 34],
                  66: [2, 34],
                  69: [2, 34],
                  74: [2, 34],
                  75: [2, 34],
                  76: [2, 34],
                  77: [2, 34],
                  78: [2, 34],
                  79: [2, 34]
              }, {
                  21: [2, 35],
                  31: [2, 35],
                  52: [2, 35],
                  59: [2, 35],
                  62: [2, 35],
                  66: [2, 35],
                  69: [2, 35],
                  74: [2, 35],
                  75: [2, 35],
                  76: [2, 35],
                  77: [2, 35],
                  78: [2, 35],
                  79: [2, 35]
              }, {
                  21: [2, 36],
                  31: [2, 36],
                  52: [2, 36],
                  59: [2, 36],
                  62: [2, 36],
                  66: [2, 36],
                  69: [2, 36],
                  74: [2, 36],
                  75: [2, 36],
                  76: [2, 36],
                  77: [2, 36],
                  78: [2, 36],
                  79: [2, 36]
              }, {
                  21: [2, 40],
                  31: [2, 40],
                  52: [2, 40],
                  59: [2, 40],
                  62: [2, 40],
                  66: [2, 40],
                  69: [2, 40],
                  74: [2, 40],
                  75: [2, 40],
                  76: [2, 40],
                  77: [2, 40],
                  78: [2, 40],
                  79: [2, 40],
                  81: [1, 45]
              }, {
                  66: [1, 32],
                  80: 46
              }, {
                  21: [2, 42],
                  31: [2, 42],
                  52: [2, 42],
                  59: [2, 42],
                  62: [2, 42],
                  66: [2, 42],
                  69: [2, 42],
                  74: [2, 42],
                  75: [2, 42],
                  76: [2, 42],
                  77: [2, 42],
                  78: [2, 42],
                  79: [2, 42],
                  81: [2, 42]
              }, {
                  50: 47,
                  52: [2, 77],
                  59: [2, 77],
                  66: [2, 77],
                  74: [2, 77],
                  75: [2, 77],
                  76: [2, 77],
                  77: [2, 77],
                  78: [2, 77],
                  79: [2, 77]
              }, {
                  23: 48,
                  36: 50,
                  37: [1, 52],
                  41: 51,
                  42: [1, 53],
                  43: 49,
                  45: [2, 49]
              }, {
                  26: 54,
                  41: 55,
                  42: [1, 53],
                  45: [2, 51]
              }, {
                  16: [1, 56]
              }, {
                  31: [2, 81],
                  55: 57,
                  59: [2, 81],
                  66: [2, 81],
                  74: [2, 81],
                  75: [2, 81],
                  76: [2, 81],
                  77: [2, 81],
                  78: [2, 81],
                  79: [2, 81]
              }, {
                  31: [2, 37],
                  59: [2, 37],
                  66: [2, 37],
                  74: [2, 37],
                  75: [2, 37],
                  76: [2, 37],
                  77: [2, 37],
                  78: [2, 37],
                  79: [2, 37]
              }, {
                  31: [2, 38],
                  59: [2, 38],
                  66: [2, 38],
                  74: [2, 38],
                  75: [2, 38],
                  76: [2, 38],
                  77: [2, 38],
                  78: [2, 38],
                  79: [2, 38]
              }, {
                  18: 58,
                  66: [1, 32],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  28: 59,
                  31: [2, 53],
                  59: [2, 53],
                  66: [2, 53],
                  69: [2, 53],
                  74: [2, 53],
                  75: [2, 53],
                  76: [2, 53],
                  77: [2, 53],
                  78: [2, 53],
                  79: [2, 53]
              }, {
                  31: [2, 59],
                  33: 60,
                  59: [2, 59],
                  66: [2, 59],
                  69: [2, 59],
                  74: [2, 59],
                  75: [2, 59],
                  76: [2, 59],
                  77: [2, 59],
                  78: [2, 59],
                  79: [2, 59]
              }, {
                  19: 61,
                  21: [2, 45],
                  59: [2, 45],
                  66: [2, 45],
                  74: [2, 45],
                  75: [2, 45],
                  76: [2, 45],
                  77: [2, 45],
                  78: [2, 45],
                  79: [2, 45]
              }, {
                  18: 65,
                  31: [2, 75],
                  48: 62,
                  57: 63,
                  58: 66,
                  59: [1, 40],
                  63: 64,
                  64: 67,
                  65: 68,
                  66: [1, 69],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  66: [1, 70]
              }, {
                  21: [2, 39],
                  31: [2, 39],
                  52: [2, 39],
                  59: [2, 39],
                  62: [2, 39],
                  66: [2, 39],
                  69: [2, 39],
                  74: [2, 39],
                  75: [2, 39],
                  76: [2, 39],
                  77: [2, 39],
                  78: [2, 39],
                  79: [2, 39],
                  81: [1, 45]
              }, {
                  18: 65,
                  51: 71,
                  52: [2, 79],
                  57: 72,
                  58: 66,
                  59: [1, 40],
                  63: 73,
                  64: 67,
                  65: 68,
                  66: [1, 69],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  24: 74,
                  45: [1, 75]
              }, {
                  45: [2, 50]
              }, {
                  4: 76,
                  6: 3,
                  13: [2, 43],
                  14: [2, 43],
                  17: [2, 43],
                  27: [2, 43],
                  32: [2, 43],
                  37: [2, 43],
                  42: [2, 43],
                  45: [2, 43],
                  46: [2, 43],
                  49: [2, 43],
                  53: [2, 43]
              }, {
                  45: [2, 19]
              }, {
                  18: 77,
                  66: [1, 32],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  4: 78,
                  6: 3,
                  13: [2, 43],
                  14: [2, 43],
                  17: [2, 43],
                  27: [2, 43],
                  32: [2, 43],
                  45: [2, 43],
                  46: [2, 43],
                  49: [2, 43],
                  53: [2, 43]
              }, {
                  24: 79,
                  45: [1, 75]
              }, {
                  45: [2, 52]
              }, {
                  5: [2, 10],
                  13: [2, 10],
                  14: [2, 10],
                  17: [2, 10],
                  27: [2, 10],
                  32: [2, 10],
                  37: [2, 10],
                  42: [2, 10],
                  45: [2, 10],
                  46: [2, 10],
                  49: [2, 10],
                  53: [2, 10]
              }, {
                  18: 65,
                  31: [2, 83],
                  56: 80,
                  57: 81,
                  58: 66,
                  59: [1, 40],
                  63: 82,
                  64: 67,
                  65: 68,
                  66: [1, 69],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  59: [2, 85],
                  60: 83,
                  62: [2, 85],
                  66: [2, 85],
                  74: [2, 85],
                  75: [2, 85],
                  76: [2, 85],
                  77: [2, 85],
                  78: [2, 85],
                  79: [2, 85]
              }, {
                  18: 65,
                  29: 84,
                  31: [2, 55],
                  57: 85,
                  58: 66,
                  59: [1, 40],
                  63: 86,
                  64: 67,
                  65: 68,
                  66: [1, 69],
                  69: [2, 55],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  18: 65,
                  31: [2, 61],
                  34: 87,
                  57: 88,
                  58: 66,
                  59: [1, 40],
                  63: 89,
                  64: 67,
                  65: 68,
                  66: [1, 69],
                  69: [2, 61],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  18: 65,
                  20: 90,
                  21: [2, 47],
                  57: 91,
                  58: 66,
                  59: [1, 40],
                  63: 92,
                  64: 67,
                  65: 68,
                  66: [1, 69],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  31: [1, 93]
              }, {
                  31: [2, 74],
                  59: [2, 74],
                  66: [2, 74],
                  74: [2, 74],
                  75: [2, 74],
                  76: [2, 74],
                  77: [2, 74],
                  78: [2, 74],
                  79: [2, 74]
              }, {
                  31: [2, 76]
              }, {
                  21: [2, 24],
                  31: [2, 24],
                  52: [2, 24],
                  59: [2, 24],
                  62: [2, 24],
                  66: [2, 24],
                  69: [2, 24],
                  74: [2, 24],
                  75: [2, 24],
                  76: [2, 24],
                  77: [2, 24],
                  78: [2, 24],
                  79: [2, 24]
              }, {
                  21: [2, 25],
                  31: [2, 25],
                  52: [2, 25],
                  59: [2, 25],
                  62: [2, 25],
                  66: [2, 25],
                  69: [2, 25],
                  74: [2, 25],
                  75: [2, 25],
                  76: [2, 25],
                  77: [2, 25],
                  78: [2, 25],
                  79: [2, 25]
              }, {
                  21: [2, 27],
                  31: [2, 27],
                  52: [2, 27],
                  62: [2, 27],
                  65: 94,
                  66: [1, 95],
                  69: [2, 27]
              }, {
                  21: [2, 89],
                  31: [2, 89],
                  52: [2, 89],
                  62: [2, 89],
                  66: [2, 89],
                  69: [2, 89]
              }, {
                  21: [2, 42],
                  31: [2, 42],
                  52: [2, 42],
                  59: [2, 42],
                  62: [2, 42],
                  66: [2, 42],
                  67: [1, 96],
                  69: [2, 42],
                  74: [2, 42],
                  75: [2, 42],
                  76: [2, 42],
                  77: [2, 42],
                  78: [2, 42],
                  79: [2, 42],
                  81: [2, 42]
              }, {
                  21: [2, 41],
                  31: [2, 41],
                  52: [2, 41],
                  59: [2, 41],
                  62: [2, 41],
                  66: [2, 41],
                  69: [2, 41],
                  74: [2, 41],
                  75: [2, 41],
                  76: [2, 41],
                  77: [2, 41],
                  78: [2, 41],
                  79: [2, 41],
                  81: [2, 41]
              }, {
                  52: [1, 97]
              }, {
                  52: [2, 78],
                  59: [2, 78],
                  66: [2, 78],
                  74: [2, 78],
                  75: [2, 78],
                  76: [2, 78],
                  77: [2, 78],
                  78: [2, 78],
                  79: [2, 78]
              }, {
                  52: [2, 80]
              }, {
                  5: [2, 12],
                  13: [2, 12],
                  14: [2, 12],
                  17: [2, 12],
                  27: [2, 12],
                  32: [2, 12],
                  37: [2, 12],
                  42: [2, 12],
                  45: [2, 12],
                  46: [2, 12],
                  49: [2, 12],
                  53: [2, 12]
              }, {
                  18: 98,
                  66: [1, 32],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  36: 50,
                  37: [1, 52],
                  41: 51,
                  42: [1, 53],
                  43: 100,
                  44: 99,
                  45: [2, 71]
              }, {
                  31: [2, 65],
                  38: 101,
                  59: [2, 65],
                  66: [2, 65],
                  69: [2, 65],
                  74: [2, 65],
                  75: [2, 65],
                  76: [2, 65],
                  77: [2, 65],
                  78: [2, 65],
                  79: [2, 65]
              }, {
                  45: [2, 17]
              }, {
                  5: [2, 13],
                  13: [2, 13],
                  14: [2, 13],
                  17: [2, 13],
                  27: [2, 13],
                  32: [2, 13],
                  37: [2, 13],
                  42: [2, 13],
                  45: [2, 13],
                  46: [2, 13],
                  49: [2, 13],
                  53: [2, 13]
              }, {
                  31: [1, 102]
              }, {
                  31: [2, 82],
                  59: [2, 82],
                  66: [2, 82],
                  74: [2, 82],
                  75: [2, 82],
                  76: [2, 82],
                  77: [2, 82],
                  78: [2, 82],
                  79: [2, 82]
              }, {
                  31: [2, 84]
              }, {
                  18: 65,
                  57: 104,
                  58: 66,
                  59: [1, 40],
                  61: 103,
                  62: [2, 87],
                  63: 105,
                  64: 67,
                  65: 68,
                  66: [1, 69],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  30: 106,
                  31: [2, 57],
                  68: 107,
                  69: [1, 108]
              }, {
                  31: [2, 54],
                  59: [2, 54],
                  66: [2, 54],
                  69: [2, 54],
                  74: [2, 54],
                  75: [2, 54],
                  76: [2, 54],
                  77: [2, 54],
                  78: [2, 54],
                  79: [2, 54]
              }, {
                  31: [2, 56],
                  69: [2, 56]
              }, {
                  31: [2, 63],
                  35: 109,
                  68: 110,
                  69: [1, 108]
              }, {
                  31: [2, 60],
                  59: [2, 60],
                  66: [2, 60],
                  69: [2, 60],
                  74: [2, 60],
                  75: [2, 60],
                  76: [2, 60],
                  77: [2, 60],
                  78: [2, 60],
                  79: [2, 60]
              }, {
                  31: [2, 62],
                  69: [2, 62]
              }, {
                  21: [1, 111]
              }, {
                  21: [2, 46],
                  59: [2, 46],
                  66: [2, 46],
                  74: [2, 46],
                  75: [2, 46],
                  76: [2, 46],
                  77: [2, 46],
                  78: [2, 46],
                  79: [2, 46]
              }, {
                  21: [2, 48]
              }, {
                  5: [2, 21],
                  13: [2, 21],
                  14: [2, 21],
                  17: [2, 21],
                  27: [2, 21],
                  32: [2, 21],
                  37: [2, 21],
                  42: [2, 21],
                  45: [2, 21],
                  46: [2, 21],
                  49: [2, 21],
                  53: [2, 21]
              }, {
                  21: [2, 90],
                  31: [2, 90],
                  52: [2, 90],
                  62: [2, 90],
                  66: [2, 90],
                  69: [2, 90]
              }, {
                  67: [1, 96]
              }, {
                  18: 65,
                  57: 112,
                  58: 66,
                  59: [1, 40],
                  66: [1, 32],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  5: [2, 22],
                  13: [2, 22],
                  14: [2, 22],
                  17: [2, 22],
                  27: [2, 22],
                  32: [2, 22],
                  37: [2, 22],
                  42: [2, 22],
                  45: [2, 22],
                  46: [2, 22],
                  49: [2, 22],
                  53: [2, 22]
              }, {
                  31: [1, 113]
              }, {
                  45: [2, 18]
              }, {
                  45: [2, 72]
              }, {
                  18: 65,
                  31: [2, 67],
                  39: 114,
                  57: 115,
                  58: 66,
                  59: [1, 40],
                  63: 116,
                  64: 67,
                  65: 68,
                  66: [1, 69],
                  69: [2, 67],
                  72: 23,
                  73: 24,
                  74: [1, 25],
                  75: [1, 26],
                  76: [1, 27],
                  77: [1, 28],
                  78: [1, 29],
                  79: [1, 31],
                  80: 30
              }, {
                  5: [2, 23],
                  13: [2, 23],
                  14: [2, 23],
                  17: [2, 23],
                  27: [2, 23],
                  32: [2, 23],
                  37: [2, 23],
                  42: [2, 23],
                  45: [2, 23],
                  46: [2, 23],
                  49: [2, 23],
                  53: [2, 23]
              }, {
                  62: [1, 117]
              }, {
                  59: [2, 86],
                  62: [2, 86],
                  66: [2, 86],
                  74: [2, 86],
                  75: [2, 86],
                  76: [2, 86],
                  77: [2, 86],
                  78: [2, 86],
                  79: [2, 86]
              }, {
                  62: [2, 88]
              }, {
                  31: [1, 118]
              }, {
                  31: [2, 58]
              }, {
                  66: [1, 120],
                  70: 119
              }, {
                  31: [1, 121]
              }, {
                  31: [2, 64]
              }, {
                  14: [2, 11]
              }, {
                  21: [2, 28],
                  31: [2, 28],
                  52: [2, 28],
                  62: [2, 28],
                  66: [2, 28],
                  69: [2, 28]
              }, {
                  5: [2, 20],
                  13: [2, 20],
                  14: [2, 20],
                  17: [2, 20],
                  27: [2, 20],
                  32: [2, 20],
                  37: [2, 20],
                  42: [2, 20],
                  45: [2, 20],
                  46: [2, 20],
                  49: [2, 20],
                  53: [2, 20]
              }, {
                  31: [2, 69],
                  40: 122,
                  68: 123,
                  69: [1, 108]
              }, {
                  31: [2, 66],
                  59: [2, 66],
                  66: [2, 66],
                  69: [2, 66],
                  74: [2, 66],
                  75: [2, 66],
                  76: [2, 66],
                  77: [2, 66],
                  78: [2, 66],
                  79: [2, 66]
              }, {
                  31: [2, 68],
                  69: [2, 68]
              }, {
                  21: [2, 26],
                  31: [2, 26],
                  52: [2, 26],
                  59: [2, 26],
                  62: [2, 26],
                  66: [2, 26],
                  69: [2, 26],
                  74: [2, 26],
                  75: [2, 26],
                  76: [2, 26],
                  77: [2, 26],
                  78: [2, 26],
                  79: [2, 26]
              }, {
                  13: [2, 14],
                  14: [2, 14],
                  17: [2, 14],
                  27: [2, 14],
                  32: [2, 14],
                  37: [2, 14],
                  42: [2, 14],
                  45: [2, 14],
                  46: [2, 14],
                  49: [2, 14],
                  53: [2, 14]
              }, {
                  66: [1, 125],
                  71: [1, 124]
              }, {
                  66: [2, 91],
                  71: [2, 91]
              }, {
                  13: [2, 15],
                  14: [2, 15],
                  17: [2, 15],
                  27: [2, 15],
                  32: [2, 15],
                  42: [2, 15],
                  45: [2, 15],
                  46: [2, 15],
                  49: [2, 15],
                  53: [2, 15]
              }, {
                  31: [1, 126]
              }, {
                  31: [2, 70]
              }, {
                  31: [2, 29]
              }, {
                  66: [2, 92],
                  71: [2, 92]
              }, {
                  13: [2, 16],
                  14: [2, 16],
                  17: [2, 16],
                  27: [2, 16],
                  32: [2, 16],
                  37: [2, 16],
                  42: [2, 16],
                  45: [2, 16],
                  46: [2, 16],
                  49: [2, 16],
                  53: [2, 16]
              }],
              defaultActions: {
                  4: [2, 1],
                  49: [2, 50],
                  51: [2, 19],
                  55: [2, 52],
                  64: [2, 76],
                  73: [2, 80],
                  78: [2, 17],
                  82: [2, 84],
                  92: [2, 48],
                  99: [2, 18],
                  100: [2, 72],
                  105: [2, 88],
                  107: [2, 58],
                  110: [2, 64],
                  111: [2, 11],
                  123: [2, 70],
                  124: [2, 29]
              },
              parseError: function(t, e) {
                  throw new Error(t)
              },
              parse: function(t) {
                  var e = this
                    , n = [0]
                    , i = [null]
                    , r = []
                    , a = this.table
                    , o = ""
                    , s = 0
                    , l = 0
                    , c = 0;
                  this.lexer.setInput(t),
                  this.lexer.yy = this.yy,
                  this.yy.lexer = this.lexer,
                  this.yy.parser = this,
                  void 0 === this.lexer.yylloc && (this.lexer.yylloc = {});
                  var u = this.lexer.yylloc;
                  r.push(u);
                  var d = this.lexer.options && this.lexer.options.ranges;
                  "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                  for (var p, f, h, m, v, g, b, y, w, x = {}; ; ) {
                      if (h = n[n.length - 1],
                      this.defaultActions[h] ? m = this.defaultActions[h] : (null !== p && void 0 !== p || (p = function() {
                          var t;
                          return t = e.lexer.lex() || 1,
                          "number" != typeof t && (t = e.symbols_[t] || t),
                          t
                      }()),
                      m = a[h] && a[h][p]),
                      void 0 === m || !m.length || !m[0]) {
                          var S = "";
                          if (!c) {
                              w = [];
                              for (g in a[h])
                                  this.terminals_[g] && g > 2 && w.push("'" + this.terminals_[g] + "'");
                              S = this.lexer.showPosition ? "Parse error on line " + (s + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + w.join(", ") + ", got '" + (this.terminals_[p] || p) + "'" : "Parse error on line " + (s + 1) + ": Unexpected " + (1 == p ? "end of input" : "'" + (this.terminals_[p] || p) + "'"),
                              this.parseError(S, {
                                  text: this.lexer.match,
                                  token: this.terminals_[p] || p,
                                  line: this.lexer.yylineno,
                                  loc: u,
                                  expected: w
                              })
                          }
                      }
                      if (m[0]instanceof Array && m.length > 1)
                          throw new Error("Parse Error: multiple actions possible at state: " + h + ", token: " + p);
                      switch (m[0]) {
                      case 1:
                          n.push(p),
                          i.push(this.lexer.yytext),
                          r.push(this.lexer.yylloc),
                          n.push(m[1]),
                          p = null,
                          f ? (p = f,
                          f = null) : (l = this.lexer.yyleng,
                          o = this.lexer.yytext,
                          s = this.lexer.yylineno,
                          u = this.lexer.yylloc,
                          c > 0 && c--);
                          break;
                      case 2:
                          if (b = this.productions_[m[1]][1],
                          x.$ = i[i.length - b],
                          x._$ = {
                              first_line: r[r.length - (b || 1)].first_line,
                              last_line: r[r.length - 1].last_line,
                              first_column: r[r.length - (b || 1)].first_column,
                              last_column: r[r.length - 1].last_column
                          },
                          d && (x._$.range = [r[r.length - (b || 1)].range[0], r[r.length - 1].range[1]]),
                          void 0 !== (v = this.performAction.call(x, o, l, s, this.yy, m[1], i, r)))
                              return v;
                          b && (n = n.slice(0, -1 * b * 2),
                          i = i.slice(0, -1 * b),
                          r = r.slice(0, -1 * b)),
                          n.push(this.productions_[m[1]][0]),
                          i.push(x.$),
                          r.push(x._$),
                          y = a[n[n.length - 2]][n[n.length - 1]],
                          n.push(y);
                          break;
                      case 3:
                          return !0
                      }
                  }
                  return !0
              }
          }
            , n = function() {
              var t = {
                  EOF: 1,
                  parseError: function(t, e) {
                      if (!this.yy.parser)
                          throw new Error(t);
                      this.yy.parser.parseError(t, e)
                  },
                  setInput: function(t) {
                      return this._input = t,
                      this._more = this._less = this.done = !1,
                      this.yylineno = this.yyleng = 0,
                      this.yytext = this.matched = this.match = "",
                      this.conditionStack = ["INITIAL"],
                      this.yylloc = {
                          first_line: 1,
                          first_column: 0,
                          last_line: 1,
                          last_column: 0
                      },
                      this.options.ranges && (this.yylloc.range = [0, 0]),
                      this.offset = 0,
                      this
                  },
                  input: function() {
                      var t = this._input[0];
                      return this.yytext += t,
                      this.yyleng++,
                      this.offset++,
                      this.match += t,
                      this.matched += t,
                      t.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++,
                      this.yylloc.last_line++) : this.yylloc.last_column++,
                      this.options.ranges && this.yylloc.range[1]++,
                      this._input = this._input.slice(1),
                      t
                  },
                  unput: function(t) {
                      var e = t.length
                        , n = t.split(/(?:\r\n?|\n)/g);
                      this._input = t + this._input,
                      this.yytext = this.yytext.substr(0, this.yytext.length - e - 1),
                      this.offset -= e;
                      var i = this.match.split(/(?:\r\n?|\n)/g);
                      this.match = this.match.substr(0, this.match.length - 1),
                      this.matched = this.matched.substr(0, this.matched.length - 1),
                      n.length - 1 && (this.yylineno -= n.length - 1);
                      var r = this.yylloc.range;
                      return this.yylloc = {
                          first_line: this.yylloc.first_line,
                          last_line: this.yylineno + 1,
                          first_column: this.yylloc.first_column,
                          last_column: n ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length : this.yylloc.first_column - e
                      },
                      this.options.ranges && (this.yylloc.range = [r[0], r[0] + this.yyleng - e]),
                      this
                  },
                  more: function() {
                      return this._more = !0,
                      this
                  },
                  less: function(t) {
                      this.unput(this.match.slice(t))
                  },
                  pastInput: function() {
                      var t = this.matched.substr(0, this.matched.length - this.match.length);
                      return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "")
                  },
                  upcomingInput: function() {
                      var t = this.match;
                      return t.length < 20 && (t += this._input.substr(0, 20 - t.length)),
                      (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "")
                  },
                  showPosition: function() {
                      var t = this.pastInput()
                        , e = new Array(t.length + 1).join("-");
                      return t + this.upcomingInput() + "\n" + e + "^"
                  },
                  next: function() {
                      if (this.done)
                          return this.EOF;
                      this._input || (this.done = !0);
                      var t, e, n, i, r;
                      this._more || (this.yytext = "",
                      this.match = "");
                      for (var a = this._currentRules(), o = 0; o < a.length && (!(n = this._input.match(this.rules[a[o]])) || e && !(n[0].length > e[0].length) || (e = n,
                      i = o,
                      this.options.flex)); o++)
                          ;
                      return e ? (r = e[0].match(/(?:\r\n?|\n).*/g),
                      r && (this.yylineno += r.length),
                      this.yylloc = {
                          first_line: this.yylloc.last_line,
                          last_line: this.yylineno + 1,
                          first_column: this.yylloc.last_column,
                          last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
                      },
                      this.yytext += e[0],
                      this.match += e[0],
                      this.matches = e,
                      this.yyleng = this.yytext.length,
                      this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]),
                      this._more = !1,
                      this._input = this._input.slice(e[0].length),
                      this.matched += e[0],
                      t = this.performAction.call(this, this.yy, this, a[i], this.conditionStack[this.conditionStack.length - 1]),
                      this.done && this._input && (this.done = !1),
                      t || void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                          text: "",
                          token: null,
                          line: this.yylineno
                      })
                  },
                  lex: function() {
                      var t = this.next();
                      return void 0 !== t ? t : this.lex()
                  },
                  begin: function(t) {
                      this.conditionStack.push(t)
                  },
                  popState: function() {
                      return this.conditionStack.pop()
                  },
                  _currentRules: function() {
                      return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                  },
                  topState: function() {
                      return this.conditionStack[this.conditionStack.length - 2]
                  },
                  pushState: function(t) {
                      this.begin(t)
                  }
              };
              return t.options = {},
              t.performAction = function(t, e, n, i) {
                  function r(t, n) {
                      return e.yytext = e.yytext.substr(t, e.yyleng - n)
                  }
                  switch (n) {
                  case 0:
                      if ("\\\\" === e.yytext.slice(-2) ? (r(0, 1),
                      this.begin("mu")) : "\\" === e.yytext.slice(-1) ? (r(0, 1),
                      this.begin("emu")) : this.begin("mu"),
                      e.yytext)
                          return 14;
                      break;
                  case 1:
                      return 14;
                  case 2:
                      return this.popState(),
                      14;
                  case 3:
                      return e.yytext = e.yytext.substr(5, e.yyleng - 9),
                      this.popState(),
                      16;
                  case 4:
                      return 14;
                  case 5:
                      return this.popState(),
                      13;
                  case 6:
                      return 59;
                  case 7:
                      return 62;
                  case 8:
                      return 17;
                  case 9:
                      return this.popState(),
                      this.begin("raw"),
                      21;
                  case 10:
                      return 53;
                  case 11:
                      return 27;
                  case 12:
                      return 45;
                  case 13:
                  case 14:
                      return this.popState(),
                      42;
                  case 15:
                      return 32;
                  case 16:
                      return 37;
                  case 17:
                      return 49;
                  case 18:
                      return 46;
                  case 19:
                      this.unput(e.yytext),
                      this.popState(),
                      this.begin("com");
                      break;
                  case 20:
                      return this.popState(),
                      13;
                  case 21:
                      return 46;
                  case 22:
                      return 67;
                  case 23:
                  case 24:
                      return 66;
                  case 25:
                      return 81;
                  case 26:
                      break;
                  case 27:
                      return this.popState(),
                      52;
                  case 28:
                      return this.popState(),
                      31;
                  case 29:
                      return e.yytext = r(1, 2).replace(/\\"/g, '"'),
                      74;
                  case 30:
                      return e.yytext = r(1, 2).replace(/\\'/g, "'"),
                      74;
                  case 31:
                      return 79;
                  case 32:
                  case 33:
                      return 76;
                  case 34:
                      return 77;
                  case 35:
                      return 78;
                  case 36:
                      return 75;
                  case 37:
                      return 69;
                  case 38:
                      return 71;
                  case 39:
                  case 40:
                      return 66;
                  case 41:
                      return "INVALID";
                  case 42:
                      return 5
                  }
              }
              ,
              t.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/],
              t.conditions = {
                  mu: {
                      rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
                      inclusive: !1
                  },
                  emu: {
                      rules: [2],
                      inclusive: !1
                  },
                  com: {
                      rules: [5],
                      inclusive: !1
                  },
                  raw: {
                      rules: [3, 4],
                      inclusive: !1
                  },
                  INITIAL: {
                      rules: [0, 1, 42],
                      inclusive: !0
                  }
              },
              t
          }();
          return e.lexer = n,
          t.prototype = e,
          e.Parser = t,
          new t
      }();
      e.default = i,
      t.exports = e.default
  }
  , function(t, e, n) {
      "use strict";
      function i() {}
      function r(t, e, n) {
          void 0 === e && (e = t.length);
          var i = t[e - 1]
            , r = t[e - 2];
          return i ? "ContentStatement" === i.type ? (r || !n ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(i.original) : void 0 : n
      }
      function a(t, e, n) {
          void 0 === e && (e = -1);
          var i = t[e + 1]
            , r = t[e + 2];
          return i ? "ContentStatement" === i.type ? (r || !n ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(i.original) : void 0 : n
      }
      function o(t, e, n) {
          var i = t[null == e ? 0 : e + 1];
          if (i && "ContentStatement" === i.type && (n || !i.rightStripped)) {
              var r = i.value;
              i.value = i.value.replace(n ? /^\s+/ : /^[ \t]*\r?\n?/, ""),
              i.rightStripped = i.value !== r
          }
      }
      function s(t, e, n) {
          var i = t[null == e ? t.length - 1 : e - 1];
          if (i && "ContentStatement" === i.type && (n || !i.leftStripped)) {
              var r = i.value;
              return i.value = i.value.replace(n ? /\s+$/ : /[ \t]+$/, ""),
              i.leftStripped = i.value !== r,
              i.leftStripped
          }
      }
      var l = n(8).default;
      e.__esModule = !0;
      var c = n(6)
        , u = l(c);
      i.prototype = new u.default,
      i.prototype.Program = function(t) {
          var e = !this.isRootSeen;
          this.isRootSeen = !0;
          for (var n = t.body, i = 0, l = n.length; i < l; i++) {
              var c = n[i]
                , u = this.accept(c);
              if (u) {
                  var d = r(n, i, e)
                    , p = a(n, i, e)
                    , f = u.openStandalone && d
                    , h = u.closeStandalone && p
                    , m = u.inlineStandalone && d && p;
                  u.close && o(n, i, !0),
                  u.open && s(n, i, !0),
                  m && (o(n, i),
                  s(n, i) && "PartialStatement" === c.type && (c.indent = /([ \t]+$)/.exec(n[i - 1].original)[1])),
                  f && (o((c.program || c.inverse).body),
                  s(n, i)),
                  h && (o(n, i),
                  s((c.inverse || c.program).body))
              }
          }
          return t
      }
      ,
      i.prototype.BlockStatement = function(t) {
          this.accept(t.program),
          this.accept(t.inverse);
          var e = t.program || t.inverse
            , n = t.program && t.inverse
            , i = n
            , l = n;
          if (n && n.chained)
              for (i = n.body[0].program; l.chained; )
                  l = l.body[l.body.length - 1].program;
          var c = {
              open: t.openStrip.open,
              close: t.closeStrip.close,
              openStandalone: a(e.body),
              closeStandalone: r((i || e).body)
          };
          if (t.openStrip.close && o(e.body, null, !0),
          n) {
              var u = t.inverseStrip;
              u.open && s(e.body, null, !0),
              u.close && o(i.body, null, !0),
              t.closeStrip.open && s(l.body, null, !0),
              r(e.body) && a(i.body) && (s(e.body),
              o(i.body))
          } else
              t.closeStrip.open && s(e.body, null, !0);
          return c
      }
      ,
      i.prototype.MustacheStatement = function(t) {
          return t.strip
      }
      ,
      i.prototype.PartialStatement = i.prototype.CommentStatement = function(t) {
          var e = t.strip || {};
          return {
              inlineStandalone: !0,
              open: e.open,
              close: e.close
          }
      }
      ,
      e.default = i,
      t.exports = e.default
  }
  , function(t, e, n) {
      "use strict";
      function i(t, e) {
          this.source = t,
          this.start = {
              line: e.first_line,
              column: e.first_column
          },
          this.end = {
              line: e.last_line,
              column: e.last_column
          }
      }
      function r(t) {
          return /^\[.*\]$/.test(t) ? t.substr(1, t.length - 2) : t
      }
      function a(t, e) {
          return {
              open: "~" === t.charAt(2),
              close: "~" === e.charAt(e.length - 3)
          }
      }
      function o(t) {
          return t.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "")
      }
      function s(t, e, n) {
          n = this.locInfo(n);
          for (var i = t ? "@" : "", r = [], a = 0, o = "", s = 0, l = e.length; s < l; s++) {
              var c = e[s].part
                , u = e[s].original !== c;
              if (i += (e[s].separator || "") + c,
              u || ".." !== c && "." !== c && "this" !== c)
                  r.push(c);
              else {
                  if (r.length > 0)
                      throw new f.default("Invalid path: " + i,{
                          loc: n
                      });
                  ".." === c && (a++,
                  o += "../")
              }
          }
          return new this.PathExpression(t,a,r,i,n)
      }
      function l(t, e, n, i, r, a) {
          var o = i.charAt(3) || i.charAt(2)
            , s = "{" !== o && "&" !== o;
          return new this.MustacheStatement(t,e,n,s,r,this.locInfo(a))
      }
      function c(t, e, n, i) {
          if (t.path.original !== n) {
              var r = {
                  loc: t.path.loc
              };
              throw new f.default(t.path.original + " doesn't match " + n,r)
          }
          i = this.locInfo(i);
          var a = new this.Program([e],null,{},i);
          return new this.BlockStatement(t.path,t.params,t.hash,a,void 0,{},{},{},i)
      }
      function u(t, e, n, i, r, a) {
          if (i && i.path && t.path.original !== i.path.original) {
              var o = {
                  loc: t.path.loc
              };
              throw new f.default(t.path.original + " doesn't match " + i.path.original,o)
          }
          e.blockParams = t.blockParams;
          var s = void 0
            , l = void 0;
          return n && (n.chain && (n.program.body[0].closeStrip = i.strip),
          l = n.strip,
          s = n.program),
          r && (r = s,
          s = e,
          e = r),
          new this.BlockStatement(t.path,t.params,t.hash,e,s,t.strip,l,i && i.strip,this.locInfo(a))
      }
      var d = n(8).default;
      e.__esModule = !0,
      e.SourceLocation = i,
      e.id = r,
      e.stripFlags = a,
      e.stripComment = o,
      e.preparePath = s,
      e.prepareMustache = l,
      e.prepareRawBlock = c,
      e.prepareBlock = u;
      var p = n(12)
        , f = d(p)
  }
  , function(t, e, n) {
      "use strict";
      function i(t, e, n) {
          if (a.isArray(t)) {
              for (var i = [], r = 0, o = t.length; r < o; r++)
                  i.push(e.wrap(t[r], n));
              return i
          }
          return "boolean" == typeof t || "number" == typeof t ? t + "" : t
      }
      function r(t) {
          this.srcFile = t,
          this.source = []
      }
      e.__esModule = !0;
      var a = n(13)
        , o = void 0;
      try {} catch (t) {}
      o || (o = function(t, e, n, i) {
          this.src = "",
          i && this.add(i)
      }
      ,
      o.prototype = {
          add: function(t) {
              a.isArray(t) && (t = t.join("")),
              this.src += t
          },
          prepend: function(t) {
              a.isArray(t) && (t = t.join("")),
              this.src = t + this.src
          },
          toStringWithSourceMap: function() {
              return {
                  code: this.toString()
              }
          },
          toString: function() {
              return this.src
          }
      }),
      r.prototype = {
          prepend: function(t, e) {
              this.source.unshift(this.wrap(t, e))
          },
          push: function(t, e) {
              this.source.push(this.wrap(t, e))
          },
          merge: function() {
              var t = this.empty();
              return this.each(function(e) {
                  t.add(["  ", e, "\n"])
              }),
              t
          },
          each: function(t) {
              for (var e = 0, n = this.source.length; e < n; e++)
                  t(this.source[e])
          },
          empty: function() {
              var t = void 0 === arguments[0] ? this.currentLocation || {
                  start: {}
              } : arguments[0];
              return new o(t.start.line,t.start.column,this.srcFile)
          },
          wrap: function(t) {
              var e = void 0 === arguments[1] ? this.currentLocation || {
                  start: {}
              } : arguments[1];
              return t instanceof o ? t : (t = i(t, this, e),
              new o(e.start.line,e.start.column,this.srcFile,t))
          },
          functionCall: function(t, e, n) {
              return n = this.generateList(n),
              this.wrap([t, e ? "." + e + "(" : "(", n, ")"])
          },
          quotedString: function(t) {
              return '"' + (t + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
          },
          objectLiteral: function(t) {
              var e = [];
              for (var n in t)
                  if (t.hasOwnProperty(n)) {
                      var r = i(t[n], this);
                      "undefined" !== r && e.push([this.quotedString(n), ":", r])
                  }
              var a = this.generateList(e);
              return a.prepend("{"),
              a.add("}"),
              a
          },
          generateList: function(t, e) {
              for (var n = this.empty(e), r = 0, a = t.length; r < a; r++)
                  r && n.add(","),
                  n.add(i(t[r], this, e));
              return n
          },
          generateArray: function(t, e) {
              var n = this.generateList(t, e);
              return n.prepend("["),
              n.add("]"),
              n
          }
      },
      e.default = r,
      t.exports = e.default
  }
  ])
}),
window.Modernizr = function(t, e, n) {
  function i(t) {
      v.cssText = t
  }
  function r(t, e) {
      return i(w.join(t + ";") + (e || ""))
  }
  function a(t, e) {
      return typeof t === e
  }
  function o(t, e) {
      return !!~("" + t).indexOf(e)
  }
  function s(t, e) {
      for (var i in t) {
          var r = t[i];
          if (!o(r, "-") && v[r] !== n)
              return "pfx" != e || r
      }
      return !1
  }
  function l(t, e, i) {
      for (var r in t) {
          var o = e[t[r]];
          if (o !== n)
              return !1 === i ? t[r] : a(o, "function") ? o.bind(i || e) : o
      }
      return !1
  }
  function c(t, e, n) {
      var i = t.charAt(0).toUpperCase() + t.slice(1)
        , r = (t + " " + S.join(i + " ") + i).split(" ");
      return a(e, "string") || a(e, "undefined") ? s(r, e) : (r = (t + " " + C.join(i + " ") + i).split(" "),
      l(r, e, n))
  }
  var u, d, p = {}, f = e.documentElement, h = "modernizr", m = e.createElement(h), v = m.style, g = e.createElement("input"), b = ":)", y = {}.toString, w = " -webkit- -moz- -o- -ms- ".split(" "), x = "Webkit Moz O ms", S = x.split(" "), C = x.toLowerCase().split(" "), T = {
      svg: "http://www.w3.org/2000/svg"
  }, A = {}, k = {}, E = {}, I = [], N = I.slice, O = function(t, n, i, r) {
      var a, o, s, l, c = e.createElement("div"), u = e.body, d = u || e.createElement("body");
      if (parseInt(i, 10))
          for (; i--; )
              s = e.createElement("div"),
              s.id = r ? r[i] : h + (i + 1),
              c.appendChild(s);
      return a = ["&#173;", '<style id="s', h, '">', t, "</style>"].join(""),
      c.id = h,
      (u ? c : d).innerHTML += a,
      d.appendChild(c),
      u || (d.style.background = "",
      d.style.overflow = "hidden",
      l = f.style.overflow,
      f.style.overflow = "hidden",
      f.appendChild(d)),
      o = n(c, t),
      u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d),
      f.style.overflow = l),
      !!o
  }, P = function() {
      function t(t, r) {
          r = r || e.createElement(i[t] || "div"),
          t = "on" + t;
          var o = t in r;
          return o || (r.setAttribute || (r = e.createElement("div")),
          r.setAttribute && r.removeAttribute && (r.setAttribute(t, ""),
          o = a(r[t], "function"),
          a(r[t], "undefined") || (r[t] = n),
          r.removeAttribute(t))),
          r = null,
          o
      }
      var i = {
          select: "input",
          change: "input",
          submit: "form",
          reset: "form",
          error: "img",
          load: "img",
          abort: "img"
      };
      return t
  }(), M = {}.hasOwnProperty;
  d = a(M, "undefined") || a(M.call, "undefined") ? function(t, e) {
      return e in t && a(t.constructor.prototype[e], "undefined")
  }
  : function(t, e) {
      return M.call(t, e)
  }
  ,
  Function.prototype.bind || (Function.prototype.bind = function(t) {
      var e = this;
      if ("function" != typeof e)
          throw new TypeError;
      var n = N.call(arguments, 1)
        , i = function() {
          if (this instanceof i) {
              var r = function() {};
              r.prototype = e.prototype;
              var a = new r
                , o = e.apply(a, n.concat(N.call(arguments)));
              return Object(o) === o ? o : a
          }
          return e.apply(t, n.concat(N.call(arguments)))
      };
      return i
  }
  ),
  A.flexbox = function() {
      return c("flexWrap")
  }
  ,
  A.flexboxlegacy = function() {
      return c("boxDirection")
  }
  ,
  A.canvas = function() {
      var t = e.createElement("canvas");
      return !!t.getContext && !!t.getContext("2d")
  }
  ,
  A.canvastext = function() {
      return !!p.canvas && !!a(e.createElement("canvas").getContext("2d").fillText, "function")
  }
  ,
  A.webgl = function() {
      return !!t.WebGLRenderingContext
  }
  ,
  A.touch = function() {
      var n;
      return "ontouchstart"in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : O(["@media (", w.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
          n = 9 === t.offsetTop
      }),
      n
  }
  ,
  A.geolocation = function() {
      return "geolocation"in navigator
  }
  ,
  A.postmessage = function() {
      return !!t.postMessage
  }
  ,
  A.websqldatabase = function() {
      return !!t.openDatabase
  }
  ,
  A.indexedDB = function() {
      return !!c("indexedDB", t)
  }
  ,
  A.hashchange = function() {
      return P("hashchange", t) && (e.documentMode === n || e.documentMode > 7)
  }
  ,
  A.history = function() {
      return !!t.history && !!history.pushState
  }
  ,
  A.draganddrop = function() {
      var t = e.createElement("div");
      return "draggable"in t || "ondragstart"in t && "ondrop"in t
  }
  ,
  A.websockets = function() {
      return "WebSocket"in t || "MozWebSocket"in t
  }
  ,
  A.rgba = function() {
      return i("background-color:rgba(150,255,150,.5)"),
      o(v.backgroundColor, "rgba")
  }
  ,
  A.hsla = function() {
      return i("background-color:hsla(120,40%,100%,.5)"),
      o(v.backgroundColor, "rgba") || o(v.backgroundColor, "hsla")
  }
  ,
  A.multiplebgs = function() {
      return i("background:url(https://),url(https://),red url(https://)"),
      /(url\s*\(.*?){3}/.test(v.background)
  }
  ,
  A.backgroundsize = function() {
      return c("backgroundSize")
  }
  ,
  A.borderimage = function() {
      return c("borderImage")
  }
  ,
  A.borderradius = function() {
      return c("borderRadius")
  }
  ,
  A.boxshadow = function() {
      return c("boxShadow")
  }
  ,
  A.textshadow = function() {
      return "" === e.createElement("div").style.textShadow
  }
  ,
  A.opacity = function() {
      return r("opacity:.55"),
      /^0.55$/.test(v.opacity)
  }
  ,
  A.cssanimations = function() {
      return c("animationName")
  }
  ,
  A.csscolumns = function() {
      return c("columnCount")
  }
  ,
  A.cssgradients = function() {
      var t = "background-image:";
      return i((t + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + t) + w.join("linear-gradient(left top,#9f9, white);" + t)).slice(0, -t.length)),
      o(v.backgroundImage, "gradient")
  }
  ,
  A.cssreflections = function() {
      return c("boxReflect")
  }
  ,
  A.csstransforms = function() {
      return !!c("transform")
  }
  ,
  A.csstransforms3d = function() {
      var t = !!c("perspective");
      return t && "webkitPerspective"in f.style && O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, n) {
          t = 9 === e.offsetLeft && 3 === e.offsetHeight
      }),
      t
  }
  ,
  A.csstransitions = function() {
      return c("transition")
  }
  ,
  A.fontface = function() {
      var t;
      return O('@font-face {font-family:"font";src:url("https://")}', function(n, i) {
          var r = e.getElementById("smodernizr")
            , a = r.sheet || r.styleSheet
            , o = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "";
          t = /src/i.test(o) && 0 === o.indexOf(i.split(" ")[0])
      }),
      t
  }
  ,
  A.generatedcontent = function() {
      var t;
      return O(["#", h, "{font:0/0 a}#", h, ':after{content:"', b, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
          t = e.offsetHeight >= 3
      }),
      t
  }
  ,
  A.video = function() {
      var t = e.createElement("video")
        , n = !1;
      try {
          (n = !!t.canPlayType) && (n = new Boolean(n),
          n.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
          n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
          n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
      } catch (t) {}
      return n
  }
  ,
  A.audio = function() {
      var t = e.createElement("audio")
        , n = !1;
      try {
          (n = !!t.canPlayType) && (n = new Boolean(n),
          n.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
          n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
          n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
          n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
      } catch (t) {}
      return n
  }
  ,
  A.localstorage = function() {
      try {
          return localStorage.setItem(h, h),
          localStorage.removeItem(h),
          !0
      } catch (t) {
          return !1
      }
  }
  ,
  A.sessionstorage = function() {
      try {
          return sessionStorage.setItem(h, h),
          sessionStorage.removeItem(h),
          !0
      } catch (t) {
          return !1
      }
  }
  ,
  A.webworkers = function() {
      return !!t.Worker
  }
  ,
  A.applicationcache = function() {
      return !!t.applicationCache
  }
  ,
  A.svg = function() {
      return !!e.createElementNS && !!e.createElementNS(T.svg, "svg").createSVGRect
  }
  ,
  A.inlinesvg = function() {
      var t = e.createElement("div");
      return t.innerHTML = "<svg/>",
      (t.firstChild && t.firstChild.namespaceURI) == T.svg
  }
  ,
  A.smil = function() {
      return !!e.createElementNS && /SVGAnimate/.test(y.call(e.createElementNS(T.svg, "animate")))
  }
  ,
  A.svgclippaths = function() {
      return !!e.createElementNS && /SVGClipPath/.test(y.call(e.createElementNS(T.svg, "clipPath")))
  }
  ;
  for (var $ in A)
      d(A, $) && (u = $.toLowerCase(),
      p[u] = A[$](),
      I.push((p[u] ? "" : "no-") + u));
  return p.input || function() {
      p.input = function(n) {
          for (var i = 0, r = n.length; i < r; i++)
              E[n[i]] = n[i]in g;
          return E.list && (E.list = !!e.createElement("datalist") && !!t.HTMLDataListElement),
          E
      }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
      p.inputtypes = function(t) {
          for (var i, r, a, o = 0, s = t.length; o < s; o++)
              g.setAttribute("type", r = t[o]),
              i = "text" !== g.type,
              i && (g.value = b,
              g.style.cssText = "position:absolute;visibility:hidden;",
              /^range$/.test(r) && g.style.WebkitAppearance !== n ? (f.appendChild(g),
              a = e.defaultView,
              i = a.getComputedStyle && "textfield" !== a.getComputedStyle(g, null).WebkitAppearance && 0 !== g.offsetHeight,
              f.removeChild(g)) : /^(search|tel)$/.test(r) || (i = /^(url|email)$/.test(r) ? g.checkValidity && !1 === g.checkValidity() : g.value != b)),
              k[t[o]] = !!i;
          return k
      }("search tel url email datetime date month week time datetime-local number range color".split(" "))
  }(),
  p.addTest = function(t, e) {
      if ("object" == typeof t)
          for (var i in t)
              d(t, i) && p.addTest(i, t[i]);
      else {
          if (t = t.toLowerCase(),
          p[t] !== n)
              return p;
          e = "function" == typeof e ? e() : e,
          f.className += " " + (e ? "" : "no-") + t,
          p[t] = e
      }
      return p
  }
  ,
  i(""),
  m = g = null,
  function(t, e) {
      function n(t, e) {
          var n = t.createElement("p")
            , i = t.getElementsByTagName("head")[0] || t.documentElement;
          return n.innerHTML = "x<style>" + e + "</style>",
          i.insertBefore(n.lastChild, i.firstChild)
      }
      function i() {
          var t = g.elements;
          return "string" == typeof t ? t.split(" ") : t
      }
      function r(t) {
          var e = v[t[h]];
          return e || (e = {},
          m++,
          t[h] = m,
          v[m] = e),
          e
      }
      function a(t, n, i) {
          if (n || (n = e),
          u)
              return n.createElement(t);
          i || (i = r(n));
          var a;
          return a = i.cache[t] ? i.cache[t].cloneNode() : f.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t),
          !a.canHaveChildren || p.test(t) || a.tagUrn ? a : i.frag.appendChild(a)
      }
      function o(t, n) {
          if (t || (t = e),
          u)
              return t.createDocumentFragment();
          n = n || r(t);
          for (var a = n.frag.cloneNode(), o = 0, s = i(), l = s.length; o < l; o++)
              a.createElement(s[o]);
          return a
      }
      function s(t, e) {
          e.cache || (e.cache = {},
          e.createElem = t.createElement,
          e.createFrag = t.createDocumentFragment,
          e.frag = e.createFrag()),
          t.createElement = function(n) {
              return g.shivMethods ? a(n, t, e) : e.createElem(n)
          }
          ,
          t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(t) {
              return e.createElem(t),
              e.frag.createElement(t),
              'c("' + t + '")'
          }) + ");return n}")(g, e.frag)
      }
      function l(t) {
          t || (t = e);
          var i = r(t);
          return g.shivCSS && !c && !i.hasCSS && (i.hasCSS = !!n(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
          u || s(t, i),
          t
      }
      var c, u, d = t.html5 || {}, p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, h = "_html5shiv", m = 0, v = {};
      !function() {
          try {
              var t = e.createElement("a");
              t.innerHTML = "<xyz></xyz>",
              c = "hidden"in t,
              u = 1 == t.childNodes.length || function() {
                  e.createElement("a");
                  var t = e.createDocumentFragment();
                  return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
              }()
          } catch (t) {
              c = !0,
              u = !0
          }
      }();
      var g = {
          elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
          version: "3.7.0",
          shivCSS: !1 !== d.shivCSS,
          supportsUnknownElements: u,
          shivMethods: !1 !== d.shivMethods,
          type: "default",
          shivDocument: l,
          createElement: a,
          createDocumentFragment: o
      };
      t.html5 = g,
      l(e)
  }(this, e),
  p._version = "2.8.2",
  p._prefixes = w,
  p._domPrefixes = C,
  p._cssomPrefixes = S,
  p.hasEvent = P,
  p.testProp = function(t) {
      return s([t])
  }
  ,
  p.testAllProps = c,
  p.testStyles = O,
  f.className = f.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + I.join(" "),
  p
}(this, this.document),
function(t, e, n) {
  function i(t) {
      return "[object Function]" == v.call(t)
  }
  function r(t) {
      return "string" == typeof t
  }
  function a() {}
  function o(t) {
      return !t || "loaded" == t || "complete" == t || "uninitialized" == t
  }
  function s() {
      var t = g.shift();
      b = 1,
      t ? t.t ? h(function() {
          ("c" == t.t ? p.injectCss : p.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
      }, 0) : (t(),
      s()) : b = 0
  }
  function l(t, n, i, r, a, l, c) {
      function u(e) {
          if (!f && o(d.readyState) && (y.r = f = 1,
          !b && s(),
          d.onload = d.onreadystatechange = null,
          e)) {
              "img" != t && h(function() {
                  x.removeChild(d)
              }, 50);
              for (var i in k[n])
                  k[n].hasOwnProperty(i) && k[n][i].onload()
          }
      }
      var c = c || p.errorTimeout
        , d = e.createElement(t)
        , f = 0
        , v = 0
        , y = {
          t: i,
          s: n,
          e: a,
          a: l,
          x: c
      };
      1 === k[n] && (v = 1,
      k[n] = []),
      "object" == t ? d.data = n : (d.src = n,
      d.type = t),
      d.width = d.height = "0",
      d.onerror = d.onload = d.onreadystatechange = function() {
          u.call(this, v)
      }
      ,
      g.splice(r, 0, y),
      "img" != t && (v || 2 === k[n] ? (x.insertBefore(d, w ? null : m),
      h(u, c)) : k[n].push(d))
  }
  function c(t, e, n, i, a) {
      return b = 0,
      e = e || "j",
      r(t) ? l("c" == e ? C : S, t, e, this.i++, n, i, a) : (g.splice(this.i++, 0, t),
      1 == g.length && s()),
      this
  }
  function u() {
      var t = p;
      return t.loader = {
          load: c,
          i: 0
      },
      t
  }
  var d, p, f = e.documentElement, h = t.setTimeout, m = e.getElementsByTagName("script")[0], v = {}.toString, g = [], b = 0, y = "MozAppearance"in f.style, w = y && !!e.createRange().compareNode, x = w ? f : m.parentNode, f = t.opera && "[object Opera]" == v.call(t.opera), f = !!e.attachEvent && !f, S = y ? "object" : f ? "script" : "img", C = f ? "script" : S, T = Array.isArray || function(t) {
      return "[object Array]" == v.call(t)
  }
  , A = [], k = {}, E = {
      timeout: function(t, e) {
          return e.length && (t.timeout = e[0]),
          t
      }
  };
  p = function(t) {
      function e(t) {
          var e, n, i, t = t.split("!"), r = A.length, a = t.pop(), o = t.length, a = {
              url: a,
              origUrl: a,
              prefixes: t
          };
          for (n = 0; n < o; n++)
              i = t[n].split("="),
              (e = E[i.shift()]) && (a = e(a, i));
          for (n = 0; n < r; n++)
              a = A[n](a);
          return a
      }
      function o(t, r, a, o, s) {
          var l = e(t)
            , c = l.autoCallback;
          l.url.split(".").pop().split("?").shift(),
          l.bypass || (r && (r = i(r) ? r : r[t] || r[o] || r[t.split("/").pop().split("?")[0]]),
          l.instead ? l.instead(t, r, a, o, s) : (k[l.url] ? l.noexec = !0 : k[l.url] = 1,
          a.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout),
          (i(r) || i(c)) && a.load(function() {
              u(),
              r && r(l.origUrl, s, o),
              c && c(l.origUrl, s, o),
              k[l.url] = 2
          })))
      }
      function s(t, e) {
          function n(t, n) {
              if (t) {
                  if (r(t))
                      n || (d = function() {
                          var t = [].slice.call(arguments);
                          p.apply(this, t),
                          f()
                      }
                      ),
                      o(t, d, e, 0, c);
                  else if (Object(t) === t)
                      for (l in s = function() {
                          var e, n = 0;
                          for (e in t)
                              t.hasOwnProperty(e) && n++;
                          return n
                      }(),
                      t)
                          t.hasOwnProperty(l) && (!n && !--s && (i(d) ? d = function() {
                              var t = [].slice.call(arguments);
                              p.apply(this, t),
                              f()
                          }
                          : d[l] = function(t) {
                              return function() {
                                  var e = [].slice.call(arguments);
                                  t && t.apply(this, e),
                                  f()
                              }
                          }(p[l])),
                          o(t[l], d, e, l, c))
              } else
                  !n && f()
          }
          var s, l, c = !!t.test, u = t.load || t.both, d = t.callback || a, p = d, f = t.complete || a;
          n(c ? t.yep : t.nope, !!u),
          u && n(u)
      }
      var l, c, d = this.yepnope.loader;
      if (r(t))
          o(t, 0, d, 0);
      else if (T(t))
          for (l = 0; l < t.length; l++)
              c = t[l],
              r(c) ? o(c, 0, d, 0) : T(c) ? p(c) : Object(c) === c && s(c, d);
      else
          Object(t) === t && s(t, d)
  }
  ,
  p.addPrefix = function(t, e) {
      E[t] = e
  }
  ,
  p.addFilter = function(t) {
      A.push(t)
  }
  ,
  p.errorTimeout = 1e4,
  null == e.readyState && e.addEventListener && (e.readyState = "loading",
  e.addEventListener("DOMContentLoaded", d = function() {
      e.removeEventListener("DOMContentLoaded", d, 0),
      e.readyState = "complete"
  }
  , 0)),
  t.yepnope = u(),
  t.yepnope.executeStack = s,
  t.yepnope.injectJs = function(t, n, i, r, l, c) {
      var u, d, f = e.createElement("script"), r = r || p.errorTimeout;
      f.src = t;
      for (d in i)
          f.setAttribute(d, i[d]);
      n = c ? s : n || a,
      f.onreadystatechange = f.onload = function() {
          !u && o(f.readyState) && (u = 1,
          n(),
          f.onload = f.onreadystatechange = null)
      }
      ,
      h(function() {
          u || (u = 1,
          n(1))
      }, r),
      l ? f.onload() : m.parentNode.insertBefore(f, m)
  }
  ,
  t.yepnope.injectCss = function(t, n, i, r, o, l) {
      var c, r = e.createElement("link"), n = l ? s : n || a;
      r.href = t,
      r.rel = "stylesheet",
      r.type = "text/css";
      for (c in i)
          r.setAttribute(c, i[c]);
      o || (m.parentNode.insertBefore(r, m),
      h(n, 0))
  }
}(this, document),
Modernizr.load = function() {
  yepnope.apply(window, [].slice.call(arguments, 0))
}
,
define("modernizr", function() {}),
function(t, e) {
  "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define("spin", e) : t.Spinner = e()
}(this, function() {
  "use strict";
  function t(t, e) {
      var n, i = document.createElement(t || "div");
      for (n in e)
          i[n] = e[n];
      return i
  }
  function e(t) {
      for (var e = 1, n = arguments.length; e < n; e++)
          t.appendChild(arguments[e]);
      return t
  }
  function n(t, e, n, i) {
      var r = ["opacity", e, ~~(100 * t), n, i].join("-")
        , a = .01 + n / i * 100
        , o = Math.max(1 - (1 - t) / e * (100 - a), t)
        , s = l.substring(0, l.indexOf("Animation")).toLowerCase()
        , u = s && "-" + s + "-" || "";
      return d[r] || (c.insertRule("@" + u + "keyframes " + r + "{0%{opacity:" + o + "}" + a + "%{opacity:" + t + "}" + (a + .01) + "%{opacity:1}" + (a + e) % 100 + "%{opacity:" + t + "}100%{opacity:" + o + "}}", c.cssRules.length),
      d[r] = 1),
      r
  }
  function i(t, e) {
      var n, i, r = t.style;
      for (e = e.charAt(0).toUpperCase() + e.slice(1),
      i = 0; i < u.length; i++)
          if (n = u[i] + e,
          void 0 !== r[n])
              return n;
      if (void 0 !== r[e])
          return e
  }
  function r(t, e) {
      for (var n in e)
          t.style[i(t, n) || n] = e[n];
      return t
  }
  function a(t) {
      for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
              void 0 === t[i] && (t[i] = n[i])
      }
      return t
  }
  function o(t, e) {
      return "string" == typeof t ? t : t[e % t.length]
  }
  function s(t) {
      this.opts = a(t || {}, s.defaults, p)
  }
  var l, c, u = ["webkit", "Moz", "ms", "O"], d = {}, p = {
      lines: 12,
      length: 7,
      width: 5,
      radius: 10,
      scale: 1,
      rotate: 0,
      corners: 1,
      color: "#000",
      direction: 1,
      speed: 1,
      trail: 100,
      opacity: .25,
      fps: 20,
      zIndex: 2e9,
      className: "spinner",
      top: "50%",
      left: "50%",
      position: "absolute"
  };
  if (s.defaults = {},
  a(s.prototype, {
      spin: function(e) {
          this.stop();
          var n = this
            , i = n.opts
            , a = n.el = r(t(0, {
              className: i.className
          }), {
              position: i.position,
              width: 0,
              zIndex: i.zIndex
          });
          if (r(a, {
              left: i.left,
              top: i.top
          }),
          e && e.insertBefore(a, e.firstChild || null),
          a.setAttribute("role", "progressbar"),
          n.lines(a, n.opts),
          !l) {
              var o, s = 0, c = (i.lines - 1) * (1 - i.direction) / 2, u = i.fps, d = u / i.speed, p = (1 - i.opacity) / (d * i.trail / 100), f = d / i.lines;
              !function t() {
                  s++;
                  for (var e = 0; e < i.lines; e++)
                      o = Math.max(1 - (s + (i.lines - e) * f) % d * p, i.opacity),
                      n.opacity(a, e * i.direction + c, o, i);
                  n.timeout = n.el && setTimeout(t, ~~(1e3 / u))
              }()
          }
          return n
      },
      stop: function() {
          var t = this.el;
          return t && (clearTimeout(this.timeout),
          t.parentNode && t.parentNode.removeChild(t),
          this.el = void 0),
          this
      },
      lines: function(i, a) {
          function s(e, n) {
              return r(t(), {
                  position: "absolute",
                  width: a.scale * (a.length + a.width) + "px",
                  height: a.scale * a.width + "px",
                  background: e,
                  boxShadow: n,
                  transformOrigin: "left",
                  transform: "rotate(" + ~~(360 / a.lines * u + a.rotate) + "deg) translate(" + a.scale * a.radius + "px,0)",
                  borderRadius: (a.corners * a.scale * a.width >> 1) + "px"
              })
          }
          for (var c, u = 0, d = (a.lines - 1) * (1 - a.direction) / 2; u < a.lines; u++)
              c = r(t(), {
                  position: "absolute",
                  top: 1 + ~(a.scale * a.width / 2) + "px",
                  transform: a.hwaccel ? "translate3d(0,0,0)" : "",
                  opacity: a.opacity,
                  animation: l && n(a.opacity, a.trail, d + u * a.direction, a.lines) + " " + 1 / a.speed + "s linear infinite"
              }),
              a.shadow && e(c, r(s("#000", "0 0 4px #000"), {
                  top: "2px"
              })),
              e(i, e(c, s(o(a.color, u), "0 0 1px rgba(0,0,0,.1)")));
          return i
      },
      opacity: function(t, e, n) {
          e < t.childNodes.length && (t.childNodes[e].style.opacity = n)
      }
  }),
  "undefined" != typeof document) {
      c = function() {
          var n = t("style", {
              type: "text/css"
          });
          return e(document.getElementsByTagName("head")[0], n),
          n.sheet || n.styleSheet
      }();
      var f = r(t("group"), {
          behavior: "url(#default#VML)"
      });
      !i(f, "transform") && f.adj ? function() {
          function n(e, n) {
              return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', n)
          }
          c.addRule(".spin-vml", "behavior:url(#default#VML)"),
          s.prototype.lines = function(t, i) {
              function a() {
                  return r(n("group", {
                      coordsize: u + " " + u,
                      coordorigin: -c + " " + -c
                  }), {
                      width: u,
                      height: u
                  })
              }
              function s(t, s, l) {
                  e(p, e(r(a(), {
                      rotation: 360 / i.lines * t + "deg",
                      left: ~~s
                  }), e(r(n("roundrect", {
                      arcsize: i.corners
                  }), {
                      width: c,
                      height: i.scale * i.width,
                      left: i.scale * i.radius,
                      top: -i.scale * i.width >> 1,
                      filter: l
                  }), n("fill", {
                      color: o(i.color, t),
                      opacity: i.opacity
                  }), n("stroke", {
                      opacity: 0
                  }))))
              }
              var l, c = i.scale * (i.length + i.width), u = 2 * i.scale * c, d = -(i.width + i.length) * i.scale * 2 + "px", p = r(a(), {
                  position: "absolute",
                  top: d,
                  left: d
              });
              if (i.shadow)
                  for (l = 1; l <= i.lines; l++)
                      s(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
              for (l = 1; l <= i.lines; l++)
                  s(l);
              return e(t, p)
          }
          ,
          s.prototype.opacity = function(t, e, n, i) {
              var r = t.firstChild;
              i = i.shadow && i.lines || 0,
              r && e + i < r.childNodes.length && (r = r.childNodes[e + i],
              r = r && r.firstChild,
              (r = r && r.firstChild) && (r.opacity = n))
          }
      }() : l = i(f, "animation")
  }
  return s
}),
function(t, e) {
  "use strict";
  var n = "model"
    , i = "name"
    , r = "type"
    , a = "vendor"
    , o = "version"
    , s = "mobile"
    , l = "tablet"
    , c = {
      extend: function(t, e) {
          var n = {};
          for (var i in t)
              e[i] && e[i].length % 2 == 0 ? n[i] = e[i].concat(t[i]) : n[i] = t[i];
          return n
      },
      has: function(t, e) {
          return "string" == typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase())
      },
      lowerize: function(t) {
          return t.toLowerCase()
      },
      major: function(t) {
          return "string" == typeof t ? t.split(".")[0] : void 0
      }
  }
    , u = {
      rgx: function() {
          for (var t, e, n, i, r, a, o, s = 0, l = arguments; s < l.length && !a; ) {
              var c = l[s]
                , u = l[s + 1];
              if (void 0 === t) {
                  t = {};
                  for (i in u)
                      u.hasOwnProperty(i) && (r = u[i],
                      "object" == typeof r ? t[r[0]] = void 0 : t[r] = void 0)
              }
              for (e = n = 0; e < c.length && !a; )
                  if (a = c[e++].exec(this.getUA()))
                      for (i = 0; i < u.length; i++)
                          o = a[++n],
                          r = u[i],
                          "object" == typeof r && r.length > 0 ? 2 == r.length ? "function" == typeof r[1] ? t[r[0]] = r[1].call(this, o) : t[r[0]] = r[1] : 3 == r.length ? "function" != typeof r[1] || r[1].exec && r[1].test ? t[r[0]] = o ? o.replace(r[1], r[2]) : void 0 : t[r[0]] = o ? r[1].call(this, o, r[2]) : void 0 : 4 == r.length && (t[r[0]] = o ? r[3].call(this, o.replace(r[1], r[2])) : void 0) : t[r] = o || void 0;
              s += 2
          }
          return t
      },
      str: function(t, e) {
          for (var n in e)
              if ("object" == typeof e[n] && e[n].length > 0) {
                  for (var i = 0; i < e[n].length; i++)
                      if (c.has(e[n][i], t))
                          return "?" === n ? void 0 : n
              } else if (c.has(e[n], t))
                  return "?" === n ? void 0 : n;
          return t
      }
  }
    , d = {
      browser: {
          oldsafari: {
              version: {
                  "1.0": "/8",
                  1.2: "/1",
                  1.3: "/3",
                  "2.0": "/412",
                  "2.0.2": "/416",
                  "2.0.3": "/417",
                  "2.0.4": "/419",
                  "?": "/"
              }
          }
      },
      device: {
          amazon: {
              model: {
                  "Fire Phone": ["SD", "KF"]
              }
          },
          sprint: {
              model: {
                  "Evo Shift 4G": "7373KT"
              },
              vendor: {
                  HTC: "APA",
                  Sprint: "Sprint"
              }
          }
      },
      os: {
          windows: {
              version: {
                  ME: "4.90",
                  "NT 3.11": "NT3.51",
                  "NT 4.0": "NT4.0",
                  2000: "NT 5.0",
                  XP: ["NT 5.1", "NT 5.2"],
                  Vista: "NT 6.0",
                  7: "NT 6.1",
                  8: "NT 6.2",
                  8.1: "NT 6.3",
                  10: ["NT 6.4", "NT 10.0"],
                  RT: "ARM"
              }
          }
      }
  }
    , p = {
      browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [i, o], [/(OPiOS)[\/\s]+([\w\.]+)/i], [[i, "Opera Mini"], o], [/\s(opr)\/([\w\.]+)/i], [[i, "Opera"], o], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i], [i, o], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[i, "IE"], o], [/(edge)\/((\d+)?[\w\.]+)/i], [i, o], [/(yabrowser)\/([\w\.]+)/i], [[i, "Yandex"], o], [/(comodo_dragon)\/([\w\.]+)/i], [[i, /_/g, " "], o], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i], [i, o], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i], [[i, "UCBrowser"], o], [/(dolfin)\/([\w\.]+)/i], [[i, "Dolphin"], o], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[i, "Chrome"], o], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], [o, [i, "MIUI Browser"]], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], [o, [i, "Android Browser"]], [/FBAV\/([\w\.]+);/i], [o, [i, "Facebook"]], [/fxios\/([\w\.-]+)/i], [o, [i, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [o, [i, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [o, i], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [i, [o, u.str, d.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [i, o], [/(navigator|netscape)\/([\w\.-]+)/i], [[i, "Netscape"], o], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [i, o]],
      cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", c.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", c.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", c.lowerize]]],
      device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [n, a, [r, l]], [/applecoremedia\/[\w\.]+ \((ipad)/], [n, [a, "Apple"], [r, l]], [/(apple\s{0,1}tv)/i], [[n, "Apple TV"], [a, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [a, n, [r, l]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [n, [a, "Amazon"], [r, l]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[n, u.str, d.device.amazon.model], [a, "Amazon"], [r, s]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [n, a, [r, s]], [/\((ip[honed|\s\w*]+);/i], [n, [a, "Apple"], [r, s]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [a, n, [r, s]], [/\(bb10;\s(\w+)/i], [n, [a, "BlackBerry"], [r, s]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i], [n, [a, "Asus"], [r, l]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[a, "Sony"], [n, "Xperia Tablet"], [r, l]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[a, "Sony"], [n, "Xperia Phone"], [r, s]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [a, n, [r, "console"]], [/android.+;\s(shield)\sbuild/i], [n, [a, "Nvidia"], [r, "console"]], [/(playstation\s[34portablevi]+)/i], [n, [a, "Sony"], [r, "console"]], [/(sprint\s(\w+))/i], [[a, u.str, d.device.sprint.vendor], [n, u.str, d.device.sprint.model], [r, s]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [a, n, [r, l]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [a, [n, /_/g, " "], [r, s]], [/(nexus\s9)/i], [n, [a, "HTC"], [r, l]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [n, [a, "Microsoft"], [r, "console"]], [/(kin\.[onetw]{3})/i], [[n, /\./g, " "], [a, "Microsoft"], [r, s]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i], [n, [a, "Motorola"], [r, s]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [n, [a, "Motorola"], [r, l]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[a, "Samsung"], n, [r, l]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[a, "Samsung"], n, [r, s]], [/(samsung);smarttv/i], [a, n, [r, "smarttv"]], [/\(dtv[\);].+(aquos)/i], [n, [a, "Sharp"], [r, "smarttv"]], [/sie-(\w+)*/i], [n, [a, "Siemens"], [r, s]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[a, "Nokia"], n, [r, s]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [n, [a, "Acer"], [r, l]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[a, "LG"], n, [r, l]], [/(lg) netcast\.tv/i], [a, n, [r, "smarttv"]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [n, [a, "LG"], [r, s]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [n, [a, "Lenovo"], [r, l]], [/linux;.+((jolla));/i], [a, n, [r, s]], [/((pebble))app\/[\d\.]+\s/i], [a, n, [r, "wearable"]], [/android.+;\s(glass)\s\d/i], [n, [a, "Google"], [r, "wearable"]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i], [[n, /_/g, " "], [a, "Xiaomi"], [r, s]], [/\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i], [[r, c.lowerize], a, n]],
      engine: [[/windows.+\sedge\/([\w\.]+)/i], [o, [i, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [i, o], [/rv\:([\w\.]+).*(gecko)/i], [o, i]],
      os: [[/microsoft\s(windows)\s(vista|xp)/i], [i, o], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [i, [o, u.str, d.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[i, "Windows"], [o, u.str, d.os.windows.version]], [/\((bb)(10);/i], [[i, "BlackBerry"], o], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [i, o], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[i, "Symbian"], o], [/\((series40);/i], [i], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[i, "Firefox OS"], o], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [i, o], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[i, "Chromium OS"], o], [/(sunos)\s?([\w\.]+\d)*/i], [[i, "Solaris"], o], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [i, o], [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i], [[i, "iOS"], [o, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[i, "Mac OS"], [o, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [i, o]]
  }
    , f = function(e, n) {
      if (!(this instanceof f))
          return new f(e,n).getResult();
      var i = e || (t && t.navigator && t.navigator.userAgent ? t.navigator.userAgent : "")
        , r = n ? c.extend(p, n) : p;
      return this.getBrowser = function() {
          var t = u.rgx.apply(this, r.browser);
          return t.major = c.major(t.version),
          t
      }
      ,
      this.getCPU = function() {
          return u.rgx.apply(this, r.cpu)
      }
      ,
      this.getDevice = function() {
          return u.rgx.apply(this, r.device)
      }
      ,
      this.getEngine = function() {
          return u.rgx.apply(this, r.engine)
      }
      ,
      this.getOS = function() {
          return u.rgx.apply(this, r.os)
      }
      ,
      this.getResult = function() {
          return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
          }
      }
      ,
      this.getUA = function() {
          return i
      }
      ,
      this.setUA = function(t) {
          return i = t,
          this
      }
      ,
      this
  };
  f.VERSION = "0.7.10",
  f.BROWSER = {
      NAME: i,
      MAJOR: "major",
      VERSION: o
  },
  f.CPU = {
      ARCHITECTURE: "architecture"
  },
  f.DEVICE = {
      MODEL: n,
      VENDOR: a,
      TYPE: r,
      CONSOLE: "console",
      MOBILE: s,
      SMARTTV: "smarttv",
      TABLET: l,
      WEARABLE: "wearable",
      EMBEDDED: "embedded"
  },
  f.ENGINE = {
      NAME: i,
      VERSION: o
  },
  f.OS = {
      NAME: i,
      VERSION: o
  },
  "object" == typeof exports ? ("object" != typeof module && module.exports && (exports = module.exports = f),
  exports.UAParser = f) : "function" == typeof define && define.amd ? define("ua-parser-js", [], function() {
      return f
  }) : t.UAParser = f;
  var h = t.jQuery || t.Zepto;
  if (void 0 !== h) {
      var m = new f;
      h.ua = m.getResult(),
      h.ua.get = function() {
          return m.getUA()
      }
      ,
      h.ua.set = function(t) {
          m.setUA(t);
          var e = m.getResult();
          for (var n in e)
              h.ua[n] = e[n]
      }
  }
}("object" == typeof window ? window : this),
define("text", ["module"], function(t) {
  "use strict";
  var e, n, i, r, a, o = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], s = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, l = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, c = "undefined" != typeof location && location.href, u = c && location.protocol && location.protocol.replace(/\:/, ""), d = c && location.hostname, p = c && (location.port || void 0), f = {}, h = t.config && t.config() || {};
  return e = {
      version: "2.0.10",
      strip: function(t) {
          if (t) {
              t = t.replace(s, "");
              var e = t.match(l);
              e && (t = e[1])
          } else
              t = "";
          return t
      },
      jsEscape: function(t) {
          return t.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
      },
      createXhr: h.createXhr || function() {
          var t, e, n;
          if ("undefined" != typeof XMLHttpRequest)
              return new XMLHttpRequest;
          if ("undefined" != typeof ActiveXObject)
              for (e = 0; e < 3; e += 1) {
                  n = o[e];
                  try {
                      t = new ActiveXObject(n)
                  } catch (t) {}
                  if (t) {
                      o = [n];
                      break
                  }
              }
          return t
      }
      ,
      parseName: function(t) {
          var e, n, i, r = !1, a = t.indexOf("."), o = 0 === t.indexOf("./") || 0 === t.indexOf("../");
          return -1 !== a && (!o || a > 1) ? (e = t.substring(0, a),
          n = t.substring(a + 1, t.length)) : e = t,
          i = n || e,
          a = i.indexOf("!"),
          -1 !== a && (r = "strip" === i.substring(a + 1),
          i = i.substring(0, a),
          n ? n = i : e = i),
          {
              moduleName: e,
              ext: n,
              strip: r
          }
      },
      xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
      useXhr: function(t, n, i, r) {
          var a, o, s, l = e.xdRegExp.exec(t);
          return !l || (a = l[2],
          o = l[3],
          o = o.split(":"),
          s = o[1],
          o = o[0],
          !(a && a !== n || o && o.toLowerCase() !== i.toLowerCase() || (s || o) && s !== r))
      },
      finishLoad: function(t, n, i, r) {
          i = n ? e.strip(i) : i,
          h.isBuild && (f[t] = i),
          r(i)
      },
      load: function(t, n, i, r) {
          if (r.isBuild && !r.inlineText)
              return void i();
          h.isBuild = r.isBuild;
          var a = e.parseName(t)
            , o = a.moduleName + (a.ext ? "." + a.ext : "")
            , s = n.toUrl(o)
            , l = h.useXhr || e.useXhr;
          if (0 === s.indexOf("empty:"))
              return void i();
          !c || l(s, u, d, p) ? e.get(s, function(n) {
              e.finishLoad(t, a.strip, n, i)
          }, function(t) {
              i.error && i.error(t)
          }) : n([o], function(t) {
              e.finishLoad(a.moduleName + "." + a.ext, a.strip, t, i)
          })
      },
      write: function(t, n, i, r) {
          if (f.hasOwnProperty(n)) {
              var a = e.jsEscape(f[n]);
              i.asModule(t + "!" + n, "define(function () { return '" + a + "';});\n")
          }
      },
      writeFile: function(t, n, i, r, a) {
          var o = e.parseName(n)
            , s = o.ext ? "." + o.ext : ""
            , l = o.moduleName + s
            , c = i.toUrl(o.moduleName + s) + ".js";
          e.load(l, i, function(n) {
              var i = function(t) {
                  return r(c, t)
              };
              i.asModule = function(t, e) {
                  return r.asModule(t, c, e)
              }
              ,
              e.write(t, l, i, a)
          }, a)
      }
  },
  "node" === h.env || !h.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] ? (n = require.nodeRequire("fs"),
  e.get = function(t, e, i) {
      try {
          var r = n.readFileSync(t, "utf8");
          0 === r.indexOf("\ufeff") && (r = r.substring(1)),
          e(r)
      } catch (t) {
          i(t)
      }
  }
  ) : "xhr" === h.env || !h.env && e.createXhr() ? e.get = function(t, n, i, r) {
      var a, o = e.createXhr();
      if (o.open("GET", t, !0),
      r)
          for (a in r)
              r.hasOwnProperty(a) && o.setRequestHeader(a.toLowerCase(), r[a]);
      h.onXhr && h.onXhr(o, t),
      o.onreadystatechange = function(e) {
          var r, a;
          4 === o.readyState && (r = o.status,
          r > 399 && r < 600 ? (a = new Error(t + " HTTP status: " + r),
          a.xhr = o,
          i(a)) : n(o.responseText),
          h.onXhrComplete && h.onXhrComplete(o, t))
      }
      ,
      o.send(null)
  }
  : "rhino" === h.env || !h.env && "undefined" != typeof Packages && "undefined" != typeof java ? e.get = function(t, e) {
      var n, i, r = new java.io.File(t), a = java.lang.System.getProperty("line.separator"), o = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(r),"utf-8")), s = "";
      try {
          for (n = new java.lang.StringBuffer,
          i = o.readLine(),
          i && i.length() && 65279 === i.charAt(0) && (i = i.substring(1)),
          null !== i && n.append(i); null !== (i = o.readLine()); )
              n.append(a),
              n.append(i);
          s = String(n.toString())
      } finally {
          o.close()
      }
      e(s)
  }
  : ("xpconnect" === h.env || !h.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (i = Components.classes,
  r = Components.interfaces,
  Components.utils.import("resource://gre/modules/FileUtils.jsm"),
  a = "@mozilla.org/windows-registry-key;1"in i,
  e.get = function(t, e) {
      var n, o, s, l = {};
      a && (t = t.replace(/\//g, "\\")),
      s = new FileUtils.File(t);
      try {
          n = i["@mozilla.org/network/file-input-stream;1"].createInstance(r.nsIFileInputStream),
          n.init(s, 1, 0, !1),
          o = i["@mozilla.org/intl/converter-input-stream;1"].createInstance(r.nsIConverterInputStream),
          o.init(n, "utf-8", n.available(), r.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),
          o.readString(n.available(), l),
          o.close(),
          n.close(),
          e(l.value)
      } catch (t) {
          throw new Error((s && s.path || "") + ": " + t)
      }
  }
  ),
  e
}),
define("text!popupTmpl", [], function() {
  return '<div class="modal" id="{{id}}" data-backdrop="static" data-keyboard="false">\r\n <div class="modal-dialog">\r\n    <div class="modal-content">\r\n    \t{{#if title}}\t\r\n      <div class="modal-header">\r\n       \x3c!--  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> --\x3e\r\n        <h4 class="modal-title">{{title}}</h4>\r\n      </div>\r\n      {{/if}}\r\n      {{#if message}}\r\n      <div class="modal-body">\r\n        <p>{{message}}</p>\r\n      </div>\r\n      {{/if}}\r\n      {{#if buttons}}\r\n      <div class="modal-footer">\r\n      \t{{#each buttons}}\r\n        <button type="button" class="btn btn-default" data-dismiss="modal">{{label}}</button>       \r\n        {{/each}}\r\n      </div>\r\n      {{/if}}\r\n    </div>\r\n  </div>\r\n</div>'
}),
define("text!vkTmpl", [], function() {
  return '<div id="vktemplate">\r\n<div class ="findKboard keyboardContainer alphaNumKey" id="alphaNum" style="display: none;">\r\n<ul id="keyboard" class="findKboard findKboard vkeyboard" >\r\n<li class="findKboard symbol">`</li>\r\n<li class="findKboard symbol number">1</li>\r\n<li class="findKboard symbol number">2</li>\r\n<li class="findKboard symbol number">3</li>\r\n<li class="findKboard symbol number">4</li>\r\n<li class="findKboard symbol number">5</li>\r\n<li class="findKboard symbol number">6</li>\r\n<li class="findKboard symbol number">7</li>\r\n<li class="findKboard symbol number">8</li>\r\n<li class="findKboard symbol number">9</li>\r\n<li class="findKboard symbol number">0</li>\r\n<li class="findKboard symbol">-</li>\r\n<li class="findKboard symbol">=</li>\r\n<li class="findKboard letter">q</li>\r\n<li class="findKboard letter">w</li>\r\n<li class="findKboard letter">e</li>\r\n<li class="findKboard letter">r</li>\r\n<li class="findKboard letter">t</li>\r\n<li class="findKboard letter">y</li>\r\n<li class="findKboard letter">u</li>\r\n<li class="findKboard letter">i</li>\r\n<li class="findKboard letter">o</li>\r\n<li class="findKboard letter">p</li>\r\n<li class="findKboard letter">a</li>\r\n<li class="findKboard letter">s</li>\r\n<li class="findKboard letter">d</li>\r\n<li class="findKboard letter">f</li>\r\n<li class="findKboard letter">g</li>\r\n<li class="findKboard letter">h</li>\r\n<li class="findKboard letter">j</li>\r\n<li class="findKboard letter">k</li>\r\n<li class="findKboard letter">l</li>\r\n<li class="findKboard letter">z</li>\r\n<li class="findKboard letter">x</li>\r\n<li class="findKboard letter">c</li>\r\n<li class="findKboard letter">v</li>\r\n<li class="findKboard letter">b</li>\r\n<li class="findKboard letter">n</li>\r\n<li class="findKboard letter">m</li>\r\n<li class="findKboard symbol ">[</li>\r\n<li class="findKboard symbol ">]</li>\r\n<li class="findKboard symbol lastitem ">\\</li>\r\n<li class="findKboard symbol">:</li>\r\n<li class="findKboard symbol">&quot;</li>\r\n<li class="findKboard symbol">;</li>\r\n<li class="findKboard symbol">\'</li>\r\n<li class="findKboard symbol">&lt;</li>\r\n<li class="findKboard symbol">&gt;</li>\r\n<li class="findKboard symbol">?</li>\r\n<li class="findKboard symbol">,</li>\r\n<li class="findKboard symbol">.</li>\r\n<li class="findKboard symbol">/</li>\r\n<li class="findKboard symbol">~</li>\r\n<li class="findKboard symbol">!</li>\r\n<li class="findKboard symbol">@</li>\r\n<li class="findKboard symbol">#</li>\r\n<li class="findKboard symbol">$</li>\r\n<li class="findKboard symbol">%</li>\r\n<li class="findKboard symbol">^</li>\r\n<li class="findKboard symbol">&amp;</li>\r\n<li class="findKboard symbol">*</li>\r\n<li class="findKboard symbol">(</li>\r\n<li class="findKboard symbol">)</li>\r\n<li class="findKboard symbol">_</li>\r\n<li class="findKboard symbol">+</li>\r\n<li class="findKboard symbol">{</li>\r\n<li class="findKboard symbol">}</li>\r\n<li class="findKboard symbol">|</li>\r\n<li class="findKboard alphaNumeric  toggle"><span class="findKboard numeric">123</span><span class="findKboard alpha ">ABC</span></li>\r\n<li class="findKboard capslock ">Caps</li>\r\n<li class="findKboard left-shift fa fa-arrow-up "></li>  \r\n<li class="findKboard space lastitem ">Space</li>\r\n<li class="findKboard delete lastitem"><img src="images/backspace.png" class="findKboard"></li>\r\n<li class="findKboard done">Done</li>\r\n</ul>\r\n</div>\r\n<div class="findKboard keyboardContainer liptoTopani pinPadKey" id="pinPad" style="display: none">\r\n<ul id="keyboard" class="findKboard findKboard vkeyboard">\r\n<li class="findKboard symbol number">1</li>\r\n<li class="findKboard symbol number">2</li>\r\n<li class="findKboard symbol number">3</li>\r\n<li class="findKboard symbol number">4</li>\r\n<li class="findKboard symbol number">5</li>\r\n<li class="findKboard symbol number">6</li>\r\n<li class="findKboard symbol number">7</li>\r\n<li class="findKboard symbol number">8</li>\r\n<li class="findKboard symbol number">9</li>\r\n<li class="findKboard symbol number">0</li>\r\n<li class="findKboard delete lastitem"><img src="images/backspace.png" class="findKboard">\r\n<li class="findKboard done">Done</li>\r\n</ul>\r\n</div>\r\n</div>\r\n</div>\t\t\t '
}),
define("util", ["handlebars", "text!popupTmpl", "text!vkTmpl"], function(t, e, n) {
  return {
      getCookie: function(t) {
          for (var e = t + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
              for (var r = n[i]; " " == r.charAt(0); )
                  r = r.substring(1);
              if (0 == r.indexOf(e))
                  return r.substring(e.length, r.length)
          }
          return ""
      },
      getFiredaction: function() {
          return window.app.actionarray
      },
      lastcmpActiontrigred: function() {
          var t = window.app.compTriglastaction;
          if (t.length > 1)
              var e = t[t.length - 1];
          return e
      },
      getCurscrid: function() {
          return window.curScrId
      },
      setCookie: function(t, e) {
          document.cookie = t + "=" + e
      },
      createPropertyMap: function(t) {
          if (t)
              for (var e = t.compDet, n = 0; n < e.length; n++)
                  for (var i = e[n].pdet, r = 0; r < i.length; r++) {
                      var a, o = i[r].key, s = o.slice(0, 1), l = o.slice(-1), c = i[r].val;
                      a = "C" == s || "R" == s ? o.slice(1, o.length) : o.slice(1, o.length - 1),
                      this.setPropertyInMap(s, a, l, c)
                  }
      },
      setPropertyInMap: function(t, e, n, i) {
          switch (t) {
          case "M":
              applicationScopeMap[e] || (applicationScopeMap[e] = {}),
              applicationScopeMap[e][n] = i;
              break;
          case "N":
              pageScopeMap[e] || (pageScopeMap[e] = {}),
              pageScopeMap[e][n] = i;
              break;
          case "O":
              screenScopeMap[e] || (screenScopeMap[e] = {}),
              screenScopeMap[e][n] = i;
              break;
          case "C":
              this.setCookie(e, i);
              break;
          case "R":
              this.setPersistentValue(e, i)
          }
      },
      getdynamicValuesJson: function(t, e, n) {
          var i, r = {};
          if (-1 != _.keys(screenScopeMap).indexOf(t) ? i = screenScopeMap[t] : -1 != _.keys(pageScopeMap).indexOf(t) ? i = pageScopeMap[t] : -1 != _.keys(applicationScopeMap).indexOf(t) && (i = applicationScopeMap[t]),
          void 0 != i)
              if (n)
                  r = i[0][0];
              else
                  for (var a in i) {
                      var o = e.getProperty(a);
                      r[o] = i[a]
                  }
          return r
      },
      loadFiles: function(t, e, n, i) {
          $.ajaxSetup({
              async: n,
              cache: !0
          }),
          $.ajax({
              url: t,
              type: "GET",
              dataType: e,
              success: function(t) {
                  i(t)
              }
          })
      },
      getMasterKeyValue: function(t) {
          var e = this.getMasterKeyPropDetail(t);
          return e && e.length > 1 ? e : e && 1 == e.length ? e[0] : ""
      },
      getMasterKeyPropDetail: function(t) {
          var e = t.substring(1)
            , n = t.substring(0, 1);
          if ("R" == n)
              return this.getPersistentValue(e);
          var i = cacheMap[n];
          return (i ? i[e] : cacheMap.M[t]) || ""
      },
      getPersistentValue: function(t) {
          var e = JSON.parse(localStorage.getItem("persistentStorage"));
          return e && e[t] ? e[t] : ""
      },
      renderTemplate: function(e, n, i) {
          return t.compile(e)(n)
      },
      validator: function(t) {
          var e = t.form
            , n = t.fields
            , i = {
              valid: "glyphicon glyphicon-ok",
              invalid: "glyphicon glyphicon-remove",
              validating: "glyphicon glyphicon-refresh"
          }
            , r = {};
          r.feedbackIcons = i,
          r.fields = {};
          for (var a = 0; a < n.length; a++) {
              var o = n[a].fieldId;
              r.fields[o] = {},
              r.fields[o].group = n[a].group;
              var s = n[a].validations;
              r.fields[o].validators = {};
              for (var l = 0; l < s.length; l++) {
                  var c = s[l].type
                    , u = s[l].message
                    , d = s[l].fieldId
                    , p = s[l].format
                    , f = s[l].regexp;
                  r.fields[o].validators[c] = {},
                  r.fields[o].validators[c].message = u,
                  r.fields[o].validators[c].field = d,
                  r.fields[o].validators[c].format = p,
                  null != f && (r.fields[o].validators.regexp = f)
              }
          }
          e.bootstrapValidator(r).on("success.field.bv", function(t, e) {
              e.bv.getInvalidFields().length > 0 && e.bv.disableSubmitButtons(!0)
          })
      },
      loadCss: function(t, e) {
          var n = document.createElement("link");
          n.type = "text/css",
          n.rel = "stylesheet",
          n.href = t,
          n.setAttribute("data-css", e),
          document.getElementsByTagName("head")[0].appendChild(n)
      },
      getRandomNumber: function() {
          var t = new Date;
          return "" + t.getMinutes() + t.getSeconds() + t.getMilliseconds() + Math.floor(1e3 * Math.random() + 1)
      },
      setTemplateCount: function(t) {
          var e = $("mx-layout", t)
            , n = e.length
            , i = $("mx-error", t)
            , r = i.length;
          window.app.templateCount = window.app.templateCount + n + r
      },
      loadTemplate: function(t, e) {
          var n = this;
          require(["text!../" + e], function(e) {
              var i = t.render(e);
              t.$el.html(i),
              t.postRender(),
              window.app.templateLoadCount++,
              n.setTemplateCount(t.$el),
              n.loadJS()
          }, function(t) {
              window.app.templateLoadCount++,
              n.loadJS()
          })
      },
      loadJS: function() {
          window.app.templateLoadCount == window.app.templateCount && (window.app.templateLoadCount = window.app.templateCount = 0,
          $("body").trigger("loadJS"))
      },
      updateMiddlewareUrl: function(t) {
          if (realmMode && "M" == realmMode && serverActionUrl) {
              var e = ""
                , n = "";
              e = "O" == t ? "/ofa" : "S" == t ? "/sfa" : "/public",
              -1 != serverActionUrl.indexOf("/ofa") ? n = "/ofa" : -1 != serverActionUrl.indexOf("/sfa") ? n = "/sfa" : -1 != serverActionUrl.indexOf("/public") && (n = "/public"),
              serverActionUrl = serverActionUrl.replace("mib" + n, "mib" + e)
          }
      },
      loadVKeyboard: function() {
          var t = this.renderTemplate(n)
            , e = $(t);
          $("#popupWrapper").after($(e))
      },
      keypadOperate: function() {
          var t, e, n, i, r, a = !1, o = "", s = "", l = !1, c = window.app.pinPad;
          $("body").on("click blur", "#fields .password", function() {
              i = $(this).attr("name"),
              r = $(this).attr("formid"),
              t = $(this),
              n = $(this),
              e = $("#hidden-password-" + i + "-" + $(this).attr("data-id")),
              isShuffle = $(this).attr("shuffle"),
              "" == t.val() ? (o = "",
              s = "") : s = e.val()
          }),
          $(".inputfield input").focus(function() {
              if ($(window).outerWidth() >= 768) {
                  var t = $(this).offset().left
                    , e = $(this).offset().top + 65;
                  if (c && "false" != c) {
                      var n = $(this).outerWidth() - $("#pinPad").outerWidth()
                        , i = n / 2;
                      t = $(this).offset().left + i
                  }
                  $(".keyboardContainer").css({
                      left: t,
                      top: e,
                      transform: "none"
                  })
              } else {
                  var r = $(this).offset().top;
                  $(".keyboardContainer").css("top", r + 65 + "px")
              }
              "false" == window.app.pinPad ? $("#alphaNum").show().addClass("liptoTopani") : $("#pinPad").show().addClass("liptoTopani")
          }),
          $("#keyboard li").click(function() {
              function t(t, e) {
                  $("#" + t).bootstrapValidator("revalidateField", e)
              }
              var c = $(this)
                , u = "";
              if (c.hasClass("toggle"))
                  return !1;
              if (c.hasClass("delete")) {
                  var d = e.val()
                    , p = n.val();
                  return e.val(d.substr(0, d.length - 1)),
                  n.val(p.substr(0, p.length - 1)),
                  o = o.substr(0, d.length - 1),
                  s = s.substr(0, d.length - 1),
                  t(r, i),
                  !1
              }
              if (c.hasClass("left-shift") || c.hasClass("right-shift"))
                  return $(".letter").toggleClass("uppercase"),
                  a = !0 !== a,
                  l = !1,
                  !1;
              if (c.hasClass("letter") && (u = c.text()),
              c.hasClass("capslock"))
                  return $(".letter").toggleClass("uppercase"),
                  l = !0,
                  !1;
              if (c.hasClass("done"))
                  return $(".keyboardContainer").hide(),
                  $(".password").blur(),
                  !1;
              if (c.hasClass("symbol") && (u = $(c).html()),
              c.hasClass("space") && (u = " "),
              c.hasClass("tab") && (u = "\t"),
              c.hasClass("return") && (u = "\n"),
              c.hasClass("uppercase") && (u = u.toUpperCase()),
              !0 === a && (!1 === l && $(".letter").toggleClass("uppercase"),
              a = !1),
              o += u,
              s += "*",
              e.val(o),
              n.val(s),
              t(r, i),
              "true" == isShuffle) {
                  var f = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
                  f.sort(function() {
                      return .5 - Math.random()
                  });
                  for (var h = 0; h < f.length; h++)
                      $("ul .findKboard.letter")[h].innerHTML = f[h];
                  var m = ["~", "!", "@", "#", "$", ";", "&percnt;", "&quot;", "&apos;", "+", "^", "&", "*", "(", ")", "-", "`", "_", "=", "{", "}", "|", ":", "&lt;", "&gt;", "?", "[", "]", ".", "/", "&bsol;", ",", "7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
                  m.sort(function() {
                      return .5 - Math.random()
                  });
                  for (var h = 0; h < m.length; h++)
                      $("ul .findKboard.symbol")[h].innerHTML = m[h]
              }
          }),
          $(".alphaNumeric .numeric").click(function() {
              $(".letter, .capslock, .numeric, .left-shift").hide(),
              $(".alpha,  .symbol ").show()
          }),
          $(".alphaNumeric .alpha").click(function() {
              $(".symbol, .alpha").hide(),
              $(".numeric, .capslock, .letter, .left-shift").show()
          })
      },
      generateMxPopup: function(t) {
          for (var n = this.renderTemplate(e, t), i = $(n), r = $(".modal-footer button", i), a = t.buttons, o = 0; o < a.length; o++) {
              var s = a[o].callback;
              s && "function" == typeof s && $(r[o]).on("click", s)
          }
          $("#popupWrapper").html(i)
      },
      showMxPopup: function(t) {
          $("#popupWrapper #" + t).modal("show")
      },
      hideMxPopup: function(t) {
          $("#popupWrapper #" + t).modal("hide")
      },
      setSessionData: function(t, e) {
          var n = [];
          $.isArray(e) ? n = e : n[0] = e;
          var i = t.substring(0, 1)
            , r = t.substring(1, t.length);
          if ("" != r && "R" != i)
              if (cacheMap[i])
                  cacheMap[i][r] = n;
              else if ("C" == i) {
                  var a = $.isArray(e) ? e[0] : e;
                  document.cookie = a
              } else
                  cacheMap.M[t] = n;
          else
              "R" == i && Modernizr.localstorage && this.setPersistentValue(r, n)
      },
      deleteKey: function(t, e) {
          if ("R" == e)
              deletePersistentKey(t);
          else {
              var n = cacheMap[e];
              n && delete n[t]
          }
      },
      setPersistentValue: function(t, e) {
          var n = JSON.parse(localStorage.getItem("persistentStorage"));
          n[t] = e,
          localStorage.setItem("persistentStorage", JSON.stringify(n))
      },
      deletePersistentKey: function(t) {
          var e = JSON.parse(localStorage.getItem("persistentStorage"));
          delete e[t],
          localStorage.setItem("persistentStorage", JSON.stringify(e))
      },
      setDataWithScope: function(t, e, n) {
          var i = [];
          if ($.isArray(n) ? i = n : i[0] = n,
          "R" == t && Modernizr.localstorage)
              setPersistentValue(e, i);
          else if (cacheMap[t])
              cacheMap[t][e] = i;
          else if ("C" == t) {
              var r = $.isArray(n) ? n[0] : n;
              document.cookie = r
          }
      },
      getDataWithScope: function(t, e) {
          var n;
          if ("R" == t)
              n = getPersistentValue(e);
          else {
              var i = cacheMap[t];
              i && (n = i[e])
          }
          return n && n.length > 1 ? n : n && 1 == n.length ? n[0] : ""
      },
      ismobiledevice: function() {
          var t = !1;
          return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (t = !0),
          t
      },
      loadTemplateMessages: function() {
          var t = "/mib/mxtemplate.json?app=" + merchantId + "&lang=" + window.app.choosenLang;
          $.ajax({
              url: t,
              success: function(t) {
                  window.app.message_config = t
              },
              async: !1
          })
      },
      getLangauage: function() {
          return window.app.choosenLang
      },
      setLanguage: function(t) {
          var e;
          if (void 0 != t)
              e = t;
          else {
              var n = location.href;
              name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
              var i = new RegExp("[\\?&]lang=([^&#]*)")
                , r = i.exec(n);
              e = null == r ? null : r[1]
          }
          window.app.choosenLang = e || window.app.choosenLang
      },
      getCurrentLocation: function() {
          function t(t) {
              var e = t.coords.latitude + ":" + t.coords.longitude;
              window.app.CURLATLONG = e
          }
          function e(e) {
              switch (e.code) {
              case e.PERMISSION_DENIED:
                  "User denied the request for Geolocation.";
                  break;
              case e.POSITION_UNAVAILABLE:
                  "Location information is unavailable.";
                  break;
              case e.TIMEOUT:
                  navigator.geolocation.getCurrentPosition(t, n, {
                      maximumAge: 0,
                      timeout: 2e4,
                      enableHighAccuracy: !0
                  });
                  break;
              case e.UNKNOWN_ERROR:
                  "An unknown error occurred."
              }
          }
          function n(t) {
              switch (t.code) {
              case t.PERMISSION_DENIED:
                  "User denied the request for Geolocation.";
                  break;
              case t.POSITION_UNAVAILABLE:
                  "Location information is unavailable.";
                  break;
              case t.TIMEOUT:
                  "The request to get user location timed out.";
                  break;
              case t.UNKNOWN_ERROR:
                  "An unknown error occurred."
              }
          }
          function i() {
              navigator.geolocation && navigator.geolocation.getCurrentPosition(t, e, {
                  maximumAge: 0,
                  timeout: 1e4,
                  enableHighAccuracy: !0
              })
          }
          "1" == mobeix_config.sendLocation && void 0 == window.app.LocationOnInitCount ? (i(),
          window.app.LocationOnInitCount = 1) : "2" == mobeix_config.sendLocation && i()
      },
      replaceAll: function(t, e, n) {
          if (!t)
              return t;
          for (; -1 !== t.indexOf(e); )
              t = t.replace(e, n);
          return t
      },
      convertText: function(t) {
          return t = this.replaceAll(t, "\\\\@", "<br/>"),
          this.replaceAll(t, "\\@", "<br/>")
      }
  }
}),
window.app = {
  screenId: "",
  isHybridApp: !1,
  debugMode: !1,
  indicator: $("<div>"),
  templateCount: 0,
  templateLoadCount: 0,
  showMenu: !1,
  menuIndex: "",
  mxir: "",
  facebookOptions: {
      clientId: "",
      clientSecret: "",
      redirectUri: "",
      websiteUri: "",
      authCode: "",
      permissions: [],
      isPostAction: !1,
      postMessageObj: {},
      fbActionRequired: !1
  },
  childWindow: null,
  choosenLang: "en"
},
screenScopeMap = {},
pageScopeMap = {},
applicationScopeMap = {},
hiddenDataMap = {},
sessionStorageMap = {},
cacheMap = {
  M: applicationScopeMap,
  N: pageScopeMap,
  O: screenScopeMap,
  S: sessionStorageMap,
  H: hiddenDataMap
};
var mask, curScreen, curScrJson, createSession = !0, CONST = {}, latitude = null, longitude = null, serverActionUrl = "", mxvalidate, mxbb10style = "", mxScrDet = "", pageToken = "", isReload = !1, CLEARSESSION = "J", SESSIONCREATED = "SJ", SESSIONTIMEOUT = "SSTATUS", PAGETOKEN = "Mxpgt", MXREALM = "MXREALM", MXTHEME = "THPA", MXLANG = "MXLANG", breadcrumb = [], valFieldList = [], eventValidation = [], validationBtns = [], cacheDataComps = [], clearFields = [], mode = "webworks", lang = "en", isPush = !0, scrWidth = 0, scrHeight = 0, gotCode = !1, scanTimeout = null, showResumeToast = !1, deviceType = "z10", mximageLoad, scrWidth = $(window).outerWidth(), scrHeight = $(window).outerHeight(), mobeix_config = null, loadLocalConfig = !1, actualScreen, checkTimeout = !1, timeOut = 0, timeOutDuration, timeOutScreenId, reqTimeOutDuration, initServiceId = "", mobileMessages = "", skipFDelete = !1, skipFDeleteScr = "", STY_TEXT_SIZE = "txsz", STY_PARENT_GRIDID = "ggn", elemFocusOnload = {
  focusElem: []
}, EC0001 = "Sorry Error in proccessing your request,please try after some time.", EC0002 = "Sorry Error in proccessing your request,please try after some time.", EC0003 = "Sorry Error in proccessing your request,please try after some time.", EC1001 = "Sorry Error in proccessing your request,please try after some time.", EC2001 = "Sorry Error in proccessing your request, please check the internet connectivity on your device.", EC2002 = "Sorry Error in proccessing your request,please try after some time.", EC2003 = "Sorry Error in proccessing your request,please try after some time.";
CONST.PROP = {},
CONST.COMPO = {},
CONST.ACTION = {},
CONST.PROP.TEXT = "txt",
CONST.PROP.VALUE = "value",
CONST.PROP.IMAGE = "image",
CONST.PROP.MARKCHECKED = "checked",
CONST.PROP.ACTION = "action",
CONST.PROP.COMREQ = "cr",
CONST.PROP.URL = "iurl",
CONST.PROP.ADDINFO = "additionalinfo",
CONST.PROP.KTEXT = "ktxt",
CONST.PROP.VALREQ = "vr",
CONST.PROP.DSTYID = "dsid",
CONST.PROP.STARTDATE = "sd",
CONST.PROP.ENDDATE = "ed",
CONST.PROP.DEFAULTDATE = "dd",
CONST.PROP.DSSTYID = "dssid",
CONST.PROP.ACTIONTYPE = "bb10a",
CONST.PROP.ACTIONOVERFLOW = "bb10ao",
CONST.PROP.DEFAULTSELECTION = "idx",
CONST.PROP.DEVICEACTION = "dac",
CONST.PROP.EXITAPP = "exapp",
CONST.PROP.NAME = "name",
CONST.PROP.LABEL = "label",
CONST.PROP.DEFAULTINDEX = "defaultIndex",
CONST.PROP.REPEATCOUNT = "repcount",
CONST.PROP.GROWTYPE = "gridrowtype",
CONST.PROP.MIDDLETEXT = "middletext",
CONST.PROP.DEVICEBACKKEY = "devicebackkey",
CONST.PROP.HKEYDATA = "ke",
CONST.PROP.IMAGEMAPPINGINFO = "imp",
CONST.PROP.LATLON = "ml",
CONST.PROP.DSECSTYID = "psi",
CONST.PROP.DISPLAYROUTE = "isd",
CONST.PROP.FOCUSIMAGE = "fgi",
CONST.PROP.DISPLAYCONTACTNAME = "wsn",
CONST.PROP.HEADERTEXT = "htx",
CONST.PROP.CONTACTTYPE = "cty",
CONST.PROP.DISPLAYCONTACTNAME = "wsn",
CONST.PROP.HEADERTEXT = "htx",
CONST.PROP.CONTACTTYPE = "cty",
CONST.PROP.PLACEHOLDERTEXT = "itx",
CONST.PROP.CHARTJSONDATA = "tx",
CONST.PROP.CHARTTYPE = "cty",
CONST.PROP.SHOWLEGEND = "sl",
CONST.PROP.LEGENDPOSITION = "lp",
CONST.COMPO.TEXTBOX = "textbox",
CONST.COMPO.IMAGE = "image",
CONST.COMPO.BBBUTTON = "bbbutton",
CONST.COMPO.BUTTON = "button",
CONST.COMPO.RADIOBUTTON = "radiobutton",
CONST.COMPO.LIST = "list",
CONST.COMPO.COVERFLOW = "coverflow",
CONST.COMPO.LISTIMG = "listimage",
CONST.COMPO.LISTIMGTXT = "listimagetext",
CONST.COMPO.COMBOBOX = "combobox",
CONST.COMPO.COMBOBOXID = "cb",
CONST.COMPO.CHECKBOX = "checkbox",
CONST.COMPO.NAVBAR = "navbar",
CONST.COMPO.GRIDREPEAT = "gridrepeater",
CONST.COMPO.OPTIONMENU = "opmenu",
CONST.COMPO.OPTIONMENUID = "opm",
CONST.COMPO.MAP = "map",
CONST.COMPO.SEGMENTCONTROL = "segmentcontrol",
CONST.COMPO.FLIPSWITCH = "flipswitch",
CONST.COMPO.TEXTINPUT = "textinput",
CONST.COMPO.TEXTINPUTID = "ti",
CONST.COMPO.CALENDER = "calender",
CONST.COMPO.WEBVIEW = "webview",
CONST.COMPO.WEBVIEWID = "wv",
CONST.ACTION.OPENURL = "mxurl",
CONST.ACTION.ALERT_CALL = "mxusralertcall",
CONST.ACTION.EXT_API = "mxapi",
CONST.ACTION.MXCORD = "mxcord",
CONST.ACTION.SEL_LANG = "mxlang",
CONST.ACTION.TRIGGER_ACTIONSHEET = "mxactionsheet",
CONST.ACTION.EMAIL = "mxemail",
CONST.ACTION.SEND_MSG = "mxsms",
CONST.ACTION.SEL_THEME = "mxchth",
CONST.ACTION.TRIGGER_CALL = "mxcall",
CONST.ACTION.SET_SESSION = "mxsesn",
CONST.ACTION.SHOW_MOREDATA = "mxsh",
CONST.ACTION.BACK = "mxback",
CONST.ACTION.OPEN_THIRDPARTY_APP = "mxexapp",
CONST.ACTION.TRIGGER_BACKGRND_REQST = "mxbcrq",
CONST.ACTION.POPUP = "mxpop",
CONST.ACTION.NATIVE_ALERT = "mxalertpop",
CONST.ACTION.EXIT_ACTION = "-1",
CONST.ACTION.GEOCODING = "mxgeocode",
CONST.ACTION.FACEBOOK = "mxfacebook",
CONST.ACTION.TWITTER = "mxtwitter",
CONST.ACTION.EXIT = "mxexit",
CONST.ACTION.CLOSEPOPUP = "mxclosepop",
CONST.ACTION.ANIMATEGESTURE = "mxanimategesture",
CONST.ACTION.FORCEUPGRADE = "mxforceupgrade",
CONST.ACTION.MXPHONEBOOK = "mxphonebook",
CONST.ACTION.MXSLIDE_RIGHT = "mxslide_right",
CONST.ACTION.MXSLIDE_LEFT = "mxslide_left",
CONST.ACTION.MXSLIDE = "mxslide",
CONST.ACTION.MXCAMERA = "mxcamera",
CONST.ACTION.MXGALLERY = "mxgallery",
CONST.ACTION.MXCUSTOMGALLERY = "mxcustomgallery",
define("globals", function() {}),
define("api", ["util"], function(t) {
  return {
      currentScreenid: function() {
          return t.getCurscrid()
      },
      lastFiredaction: function() {
          return t.getFiredaction()
      },
      cmplastFiredaction: function() {
          return t.lastcmpActiontrigred()
      },
      renderTemplate: function(e, n, i) {
          return t.renderTemplate(e, n, i)
      },
      getKeyData: function(e) {
          return t.getdynamicValuesJson(e, this, !0)
      },
      validator: function(e) {
          t.validator(e)
      },
      changeTheme: function(e) {
          t.changeTheme(e)
      },
      changeLanguage: function(e) {
          t.setLanguage(e),
          t.loadTemplateMessages()
      },
      setMemoryKey: function(t) {},
      beforeAppLaunch: function() {
          beforeAppLaunch()
      },
      setPropertyInMap: function(e, n, i, r) {
          t.setPropertyInMap(e, n, i, r)
      },
      onSubmit: function(t, e, n) {
          return onSubmit(t, e, n)
      },
      validateScreenData: function(t) {
          return validateScreenData(t)
      },
      getSessionData: function(e) {
          return t.getMasterKeyValue(e)
      },
      setSessionData: function(e, n) {
          t.setSessionData(e, n)
      },
      deleteSessionData: function(e) {
          t.deleteKey(e.substring(1), e.substring(0, 1))
      },
      updateServerResponse: function(t) {
          return updateServerResponse(t)
      },
      onAfterResponseParsing: function(t, e) {
          onAfterResponseParsing(t, e)
      },
      performAction: function(t, e, n, i, r, a, o) {
          window.app.runtime.completeAction(t, e, n, i, r, a, o)
      },
      onDomReady: function(t) {
          onDomReady(t)
      },
      onDomComplete: function(t) {
          onDomComplete(t)
      },
      setScreenAttributes: function(t) {
          return setScreenAttributes(t)
      },
      loadingAnimator: function(t) {
          loadingAnimator(t)
      },
      processFacebookAuthResponse: function(t) {
          processFacebookAuthResponse(t)
      },
      processFbFriendResponse: function(t) {
          processFbFriendResponse(t)
      },
      onAppBrowserClose: function(t, e) {
          onAppBrowserClose(t, e)
      },
      onSuccessFbLogout: function() {
          onSuccessFbLogout()
      },
      showPopup: function(e) {
          t.generateMxPopup(e),
          t.showMxPopup(e.id)
      },
      hidePopup: function(e) {
          t.hideMxPopup(e)
      },
      initVirtualKeypad: function() {
          t.keypadOperate()
      },
      getApplicationData: function(e) {
          return t.getDataWithScope("M", e)
      },
      setApplicationData: function(e, n) {
          t.setDataWithScope("M", e, n)
      },
      deleteApplicationData: function(e) {
          t.deleteKey(e, "M")
      },
      getFlowScopeData: function(e) {
          return t.getDataWithScope("N", e)
      },
      setFlowScopeData: function(e, n) {
          t.setDataWithScope("N", e, n)
      },
      deleteFlowScopeData: function(e) {
          t.deleteKey(e, "N")
      },
      getScreenScopeData: function(e) {
          return t.getDataWithScope("O", e)
      },
      setScreenScopeData: function(e, n) {
          t.setDataWithScope("O", e, n)
      },
      deleteScreenScopeData: function(e) {
          t.deleteKey(e, "O")
      }
  }
}),
define("mainTmpl", ["handlebars"], function(t) {
  t = t.default;
  var e = t.template;
  return (t.templates = t.templates || {})["main.hbs"] = e({
      1: function(t, e, n, i) {
          var r;
          return " " + this.escapeExpression((r = null != (r = e.animateNavBarEffect || (null != t ? t.animateNavBarEffect : t)) ? r : e.helperMissing,
          "function" == typeof r ? r.call(t, {
              name: "animateNavBarEffect",
              hash: {},
              data: i
          }) : r)) + "  "
      },
      3: function(t, e, n, i) {
          var r, a = e.helperMissing, o = "function", s = this.escapeExpression;
          return '\t  \t<mx-segment data-role="header">\r\n<mx-header data-type="' + s((r = null != (r = e.headerType || (null != t ? t.headerType : t)) ? r : a,
          typeof r === o ? r.call(t, {
              name: "headerType",
              hash: {},
              data: i
          }) : r)) + '" data-menu-key="' + s((r = null != (r = e.menuKey || (null != t ? t.menuKey : t)) ? r : a,
          typeof r === o ? r.call(t, {
              name: "menuKey",
              hash: {},
              data: i
          }) : r)) + '" data-welcome-text-key="' + s((r = null != (r = e.welcomeTextKey || (null != t ? t.welcomeTextKey : t)) ? r : a,
          typeof r === o ? r.call(t, {
              name: "welcomeTextKey",
              hash: {},
              data: i
          }) : r)) + '"></mx-header>  \t\r\n</mx-segment>\r\n'
      },
      5: function(t, e, n, i) {
          var r;
          return " " + (null != (r = e.if.call(t, null != t ? t.isMenuScreen : t, {
              name: "if",
              hash: {},
              fn: this.program(6, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + " "
      },
      6: function(t, e, n, i) {
          var r, a, o, s = ' class="';
          return a = null != (a = e.isDefaultNavBar || (null != t ? t.isDefaultNavBar : t)) ? a : e.helperMissing,
          o = {
              name: "isDefaultNavBar",
              hash: {},
              fn: this.noop,
              inverse: this.program(7, i, 0),
              data: i
          },
          r = "function" == typeof a ? a.call(t, o) : a,
          e.isDefaultNavBar || (r = e.blockHelperMissing.call(t, r, o)),
          null != r && (s += r),
          s + "  content-wrap dnl-visible wrapper " + (null != (r = e.if.call(t, null != t ? t.leftMenu : t, {
              name: "if",
              hash: {},
              fn: this.program(9, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + '" data-effect="dnl-push"  ' + (null != (r = e.if.call(t, null != t ? t.leftMenu : t, {
              name: "if",
              hash: {},
              fn: this.program(11, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + " "
      },
      7: function() {
          return " mx-pusher"
      },
      9: function() {
          return " slide-active "
      },
      11: function() {
          return "  "
      },
      13: function() {
          return '<mx-segment id="" data-name="" data-role="footer">\r\n<mx-footer></mx-footer>\r\n</mx-segment>\r\n'
      },
      compiler: [6, ">= 2.0.0-beta.1"],
      main: function(t, e, n, i) {
          var r, a, o, s = e.helperMissing, l = "function", c = this.escapeExpression, u = '<mx-screen id="' + c((a = null != (a = e.scrID || (null != t ? t.scrID : t)) ? a : s,
          typeof a === l ? a.call(t, {
              name: "scrID",
              hash: {},
              data: i
          }) : a)) + '" class ="';
          return a = null != (a = e.isDefaultNavBar || (null != t ? t.isDefaultNavBar : t)) ? a : s,
          o = {
              name: "isDefaultNavBar",
              hash: {},
              fn: this.noop,
              inverse: this.program(1, i, 0),
              data: i
          },
          r = typeof a === l ? a.call(t, o) : a,
          e.isDefaultNavBar || (r = e.blockHelperMissing.call(t, r, o)),
          null != r && (u += r),
          u + " " + c((a = null != (a = e.flexilayouteffect || (null != t ? t.flexilayouteffect : t)) ? a : s,
          typeof a === l ? a.call(t, {
              name: "flexilayouteffect",
              hash: {},
              data: i
          }) : a)) + '"  > \t\r\n\r\n' + (null != (r = e.unless.call(t, null != t ? t.customHeader : t, {
              name: "unless",
              hash: {},
              fn: this.program(3, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + '\r\n<mx-segment id="loginMain" data-name="login" data-role="mainContent">\r\n<mx-layout data-template="content" \r\n' + (null != (r = e.if.call(t, null != t ? t.showMenu : t, {
              name: "if",
              hash: {},
              fn: this.program(5, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + "></mx-layout>\r\n</mx-segment> \r\n\r\n\r\n" + (null != (r = e.unless.call(t, null != t ? t.customFooter : t, {
              name: "unless",
              hash: {},
              fn: this.program(13, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + "\r\n</mx-screen>"
      },
      useData: !0
  })
}),
define("runtime", ["jquery", "util", "projectConfig", "globals", "api", "handlebars", "mainTmpl", "text!loadConfig", "spin", "ua-parser-js", "classie"], function(t, e, n, i, r, a, o, s, l, c, u) {
  breadcrumb = [],
  valFieldList = [],
  eventValidation = [],
  validationBtns = [],
  cacheDataComps = [],
  clearFields = [],
  timeOut = 0;
  var d = {
      openScreen: function(i, r) {
          var a = this;
          window.app.templateCount = window.app.templateLoadCount = 0,
          this.onScreenResponse(i, r),
          e.createPropertyMap(r);
          var s = window.app.loadConfigJson
            , l = s.CustomHeader || !1
            , c = s.CustomFooter || !1
            , u = void 0 != s.Menu && s.Menu.leftMenu
            , d = void 0 != s.Menu ? s.Menu.excludedScreens : []
            , p = !_.contains(d, i)
            , f = s.Menu.leftMenu
            , h = !f || void 0 == s.Menu.navBar || s.Menu.navBar.defaultNavBar
            , m = ""
            , v = "1"
            , g = !1
            , b = ""
            , y = ""
            , w = !!(Modernizr.csstransforms && Modernizr.csstransforms3d && Modernizr.cssanimations && Modernizr.csstransitions)
            , x = void 0 != s.Layout && s.Layout.fixed
            , S = x ? " container" : "";
          f && !h && w && (m = s.Menu.navBar.navBarEffects,
          m = "" == m ? "mx-container mx-effect-1" : "mx-container " + m),
          r && void 0 != s.Menu && (_.findWhere(r.compDet, {
              cid: "IBMENU"
          }) ? window.app.showMenu = !0 : _.findWhere(r.compDet, {
              cid: "J"
          }) && (window.app.showMenu = !1)),
          window.app.showMenu && (v = "2",
          g = !0,
          b = "IBMENU",
          y = "IBWELCOME");
          var C = {
              customHeader: l,
              customFooter: c,
              headerType: v,
              showMenu: g,
              isMenuScreen: p,
              leftMenu: u,
              scrID: i,
              menuKey: b,
              isDefaultNavBar: h,
              welcomeTextKey: y,
              animateNavBarEffect: m,
              flexilayouteffect: S
          }
            , T = o(C)
            , A = document.createElement("div");
          A.id = "screenWrapper",
          A.innerHTML = T,
          A.style.display = "none",
          t("body").append(A);
          var k = t("mx-layout[data-template=content]", A);
          window.onerror = function() {
              t(A).remove()
          }
          ,
          this.loadScreenSpecificCSS(i),
          n.initialize(i),
          t("body").on("loadJS", function() {
              t("body").off("loadJS"),
              require(["common"], function(n) {
                  n.initialize(i, k);
                  var o = i;
                  config.paths[o] ? require([o], function(e) {
                      e.initialize(k),
                      a.loadScreen(A),
                      t("#initloader").length > 0 && t("#initloader").remove(),
                      n.execScripts(),
                      e.execScripts && e.execScripts(),
                      r && a.showPopup(r)
                  }) : (a.loadScreen(A),
                  n.execScripts()),
                  "0" != mobeix_config.sendLocation && e.getCurrentLocation()
              })
          }),
          e.setTemplateCount(A),
          e.loadJS(),
          t("body").removeClass("cbp-spmenu-push-toright").addClass("cbp-spmenu")
      },
      loadScreen: function(e) {
          window.scrollTo(0, 0),
          !(void 0 == window.app.loadConfigJson.Layout || !window.app.loadConfigJson.Layout.fixed) && window.app.loadConfigJson.Layout.fixed && t("#fixedHeader").removeClass("hide");
          var n = t("body>mx-screen");
          n.length > 0 ? n.replaceWith(e.children) : t("body").append(e.children),
          t(".custom-navbar").length > 0 && t(".custom-navbar").sidebar(),
          this.loader(!1),
          t(e).remove(),
          this.startTimer(firstTimeOutDuration, secondTimeOutDuration, timeOutWaitDuration, timeOutScreenId, logoutServiceId),
          t(document).ready(function() {
              t(".containerNav").append(t('<div id="navbar-height-col"></div>'));
              !!(Modernizr.csstransforms && Modernizr.csstransforms3d && Modernizr.cssanimations && Modernizr.csstransitions) && t("mx-layout").hasClass("mx-pusher") && function() {
                  function e(t, n) {
                      return t !== document && (!!u.has(t, n) || t.parentNode && e(t.parentNode, n))
                  }
                  function n() {
                      var t = !1;
                      return function(e) {
                          (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
                      }(navigator.userAgent || navigator.vendor || window.opera),
                      t
                  }
                  !function() {
                      var i = t(".mx-container").attr("id")
                        , r = document.getElementById(i)
                        , a = Array.prototype.slice.call(document.querySelectorAll("#slide-nav .navbtn"))
                        , o = n() ? "touchstart" : "click"
                        , s = function() {
                          window.app.loadConfigJson.Contentscroll.scroll && t("html").addClass("contentscroll"),
                          u.remove(r, "mx-menu-open")
                      }
                        , l = function(t) {
                          e(t.target, "mx-menu") || (s(),
                          document.removeEventListener(o, l))
                      };
                      a.forEach(function(e, n) {
                          var a = e.getAttribute("data-effect");
                          e.addEventListener(o, function(e) {
                              e.stopPropagation(),
                              e.preventDefault(),
                              0 == t("#" + i).hasClass("mx-menu-open") ? (u.add(r, a),
                              window.app.loadConfigJson.Contentscroll.scroll && t("html").removeClass("contentscroll"),
                              u.add(r, "mx-menu-open")) : (u.remove(r, "mx-menu-open"),
                              window.app.loadConfigJson.Contentscroll.scroll && t("html").addClass("contentscroll")),
                              document.addEventListener(o, l)
                          })
                      })
                  }()
              }(),
              t("#slide-nav").on("click", ".navbar-toggle", function(e) {
                  if (window.app.loadConfigJson.Menu.navBar.defaultNavBar || !window.app.loadConfigJson.Menu.navBar.leftMenu && !window.app.loadConfigJson.Menu.navBar.defaultNavBar) {
                      var n = t(this).hasClass("slide-active");
                      t("#slidemenu").stop().animate({
                          left: n ? "-100%" : "0px"
                      }),
                      t("#navbar-height-col").stop().animate({
                          left: n ? "-250px" : "0px"
                      }),
                      t(window).width() < 767 ? t(".content-wrap").stop().animate({
                          left: n ? "0px" : "250px"
                      }) : t(".content-wrap").stop().animate({
                          marginLeft: n ? "0px" : "250px"
                      }),
                      t(".containerNav .navbar-header").stop().animate({
                          left: n ? "0px" : "250px"
                      }),
                      t(this).toggleClass("slide-active", !n),
                      t("#slidemenu").toggleClass("slide-active"),
                      t(".content-wrap, .navbar, body, .navbar-header").toggleClass("slide-active")
                  }
              }),
              t(".leftNav").next().css("left", "0px");
              t(window).on("resize", function() {
                  t(window).width() > 767 && t(".navbar-toggle").is(":hidden") && t("#slidemenu, .content-wrap, body, .navbar, .navbar-header").removeClass("slide-active")
              })
          })
      },
      init: function() {
          mobeix_config = propXml = client_config,
          server = client_config.MobeixMiddlewareURL,
          serverActionUrl = "/mib/mxmib.do",
          merchantId = client_config.merchantID,
          sMerchantId = client_config.merchantID,
          initScreenId = client_config.InitScreenId,
          errorScreenId = "152",
          firstTimeOutDuration = 1e3 * client_config.FirstTimeOutDuration,
          secondTimeOutDuration = 1e3 * client_config.SecondTimeOutDuration,
          timeOutWaitDuration = 1e3 * client_config.TimeOutWaitDuration || 6e4,
          timeOutScreenId = client_config.TimeOutScreenId,
          logoutServiceId = client_config.LogoutServiceId,
          initServiceId = client_config.InitServiceId,
          appDefaultThemeID = client_config.AppDefaultThemeID,
          reqTimeOutDuration = "",
          window.app.choosenLang = client_config.Languages ? client_config.Languages.lang : "EN",
          realmMode = client_config.RealmMode,
          scrWidth = t(window).outerWidth(),
          scrHeight = t(window).outerHeight();
          var n = JSON.parse(s);
          window.app.loadConfigJson = n;
          var i = n.Loader
            , r = i.custom
            , a = i.type;
          if (r || "spinner" == a && loadSpinner(!1, l),
          "object" == typeof window.localStorage)
              try {
                  localStorage.setItem("lstestd", 1),
                  localStorage.removeItem("lstestd")
              } catch (t) {
                  this.mxLocalStorage()
              }
          else
              this.mxLocalStorage();
          if ("" != localStorage.getItem("persistentStorage") && void 0 != localStorage.getItem("persistentStorage") || localStorage.setItem("persistentStorage", "{}"),
          n.Menu) {
              n.Menu.leftMenu ? t("html").addClass("leftNav1") : t("html").addClass("topNav1")
          }
          e.updateMiddlewareUrl();
          var o = e.getCookie("MXTHEME");
          appDefaultThemeID && !o && document.documentElement.classList.add(appDefaultThemeID),
          e.setLanguage(),
          e.loadTemplateMessages(),
          this.loadCommonCSS(),
          this.loadTheme(),
          this.registerHelpers(),
          "" != initServiceId ? onButtonClick(initServiceId, !0) : this.openScreen(initScreenId)
      },
      mxLocalStorage: function() {
          var t, e = {};
          window.Storage && window.localStorage ? t = window.Storage.prototype : (window.localStorage = {},
          t = window.localStorage),
          window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""));
          var n = function(e, n) {
              var i = null == e ? null : t.getItem(e)
                , r = location.href.substr(location.origin.length)
                , a = document.createEvent("StorageEvent");
              a.initStorageEvent("storage", !1, !1, e, i, n, r, null),
              window.dispatchEvent(a)
          };
          t.key = function(t) {
              var n = Object.keys(e)[t];
              return "string" == typeof n ? n : null
          }
          ,
          t.getItem = function(t) {
              return "string" == typeof e[t] ? e[t] : null
          }
          ,
          t.setItem = function(t, i) {
              n(t, i),
              e[t] = String(i)
          }
          ,
          t.removeItem = function(t) {
              n(t, null),
              delete e[t]
          }
          ,
          t.clear = function() {
              n(null, null),
              e = {}
          }
      },
      onScreenResponse: function(t, e) {
          if (valFieldList.length = 0,
          eventValidation.length = 0,
          validationBtns.length = 0,
          cacheDataComps.length = 0,
          clearFields.length = 0,
          elemFocusOnload = {
              focusElem: []
          },
          clearPopupContainer(),
          isPush) {
              if ("1" != window.app.multiScreenMode) {
                  for (var n = breadcrumb.length, i = 0; i < n; i++)
                      if (breadcrumb[i] == t) {
                          breadcrumb.length = i;
                          break
                      }
                  breadcrumb.push(t)
              }
          } else
              isPush = !0;
          curScrId = t,
          this.showPopup(e),
          e && (window.app.responseJSON = e,
          this.loader(!0),
          clearScreenKeys()),
          this.setSessionFlags(e)
      },
      setSessionFlags: function(t) {
          var n;
          if (void 0 != t && null != t)
              for (var i = t.compDet, r = i.length, a = 0; a < r; a++)
                  if (n = i[a].mkey,
                  i[a].pdet && n)
                      if (0 == n.indexOf(CLEARSESSION))
                          this.clearSession();
                      else if (0 == n.indexOf(SESSIONCREATED))
                          createSession = !1;
                      else if (0 == n.indexOf(SESSIONTIMEOUT))
                          checkTimeout = !0;
                      else if (n == PAGETOKEN)
                          pageToken = i[a].pdet[0].val[0];
                      else if (n == MXREALM) {
                          var o = i[a].pdet[0].val[0];
                          e.updateMiddlewareUrl(o)
                      } else if (n == MXTHEME) {
                          var s = _.findWhere(i[a].pdet, {
                              key: MXTHEME
                          });
                          if (s) {
                              _.contains(document.documentElement.classList, appDefaultThemeID) && document.documentElement.classList.remove(appDefaultThemeID);
                              var l = s.val[0];
                              this.loadTheme(l)
                          }
                      } else if (n == MXLANG) {
                          var c = i[a].pdet[0].val[0];
                          void 0 != c && c != window.app.choosenLang && (e.setLanguage(c),
                          e.loadTemplateMessages())
                      }
      },
      completeAction: function(n, i, a, o, s, l, c, u, d, p, f, h, m, v, g) {
          var b = app.screenId;
          require.defined(b) && requirejs.undef(b);
          var y = {
              isFormSubmit: n,
              action: i,
              isComReq: a,
              isValReq: o,
              cId: s,
              value: l,
              isBackgroundRequest: c,
              src: u,
              secKey: g
          };
          if (n = y.isFormSubmit,
          i = y.action,
          a = y.isComReq,
          o = y.isValReq,
          s = y.cId,
          l = y.value,
          c = y.isBackgroundRequest,
          u = y.src,
          "" != u) {
              var w = t(u);
              0 != w.length && 0 == w.closest("#popupWrapper").length && (window.app.lastClickedItem = w)
          }
          if ("-2" != i && "-3" != i && "-5" != i) {
              var x = {}
                , S = mweb.getActionType(i);
              "mxapi" == S && (i = i + "_" + s);
              if (mweb.performAction(i, S))
                  return void this.clearTimer();
              var C = "nonScreen";
              if (window.app.actionarray = i,
              isNaN(i) || (C = "screen"),
              "screen" != C) {
                  if (o && !validateForm(i))
                      return !1;
                  var T, A = "";
                  T = serverActionUrl;
                  var k = e.getRandomNumber()
                    , E = "mxmib" + k;
                  T = T.replace("mxmib", E),
                  createSession ? (x.mxinit = !0,
                  x.mxshet = scrHeight,
                  x.mxswid = scrWidth,
                  x.mxmd = this.getDeviceModel,
                  x.mxbr = this.getDeviceBrand,
                  rKey = e.getMasterKeyValue("Rpn"),
                  rKey && (x.mxpn = rKey),
                  rKey = e.getMasterKeyValue("Rai"),
                  rKey && (x.mxai = rKey),
                  "1" == mobeix_config.sendLocation && (x.mxlatlong = window.app.CURLATLONG,
                  window.app.locationsentInit = void 0 != window.app.CURLATLONG)) : "1" == mobeix_config.sendLocation && 0 == window.app.locationsentInit && (window.app.locationsentInit = !0,
                  x.mxlatlong = window.app.CURLATLONG),
                  x.mxsi = i,
                  "2" == mobeix_config.sendLocation && (x.mxlatlong = window.app.CURLATLONG),
                  x = t.extend(mweb.getDefaultParameter(), x);
                  var I = "";
                  n && (I = this.createQueryParameters());
                  "" != s && "" != l && (x[s] = l),
                  void 0 !== v && null !== v && (x[v] = g),
                  p && !t.isEmptyObject(p) && _.extend(x, p);
                  var A = jQuery.param(x);
                  n && (A = "" + A,
                  "" != I && (A = I + "&" + A)),
                  A = r.onSubmit(A, i, s);
                  var N;
                  void 0 != f && "" != f && (N = void 0 != m ? this.createMultiPartQueryParamDrag(A, m) : this.createMultiPartQueryParam(A));
                  var O = A;
                  if (this.clearTimer(),
                  h = void 0 == h || "" == h || h,
                  0 == window.app.debugMode) {
                      var P = {};
                      P.isBackgroundRequest = c,
                      P.server = server,
                      P.serverpath = T,
                      P.callback = d,
                      P.formParaForCache = O,
                      P.async = h,
                      "" == f || void 0 == f ? (P.formPara = A,
                      this.callAjax(P)) : (P.formPara = N,
                      this.callMultiPartAjax(P))
                  }
              } else
                  "screen" == C && (window.app.scrs = [],
                  window.app.indicator.show(),
                  this.openScreen(i, null))
          }
      },
      invokeCallBack: function(t, e, n) {
          var i = n.getResponseHeader("MXCBF");
          null != i && "" != i && (callback = r.getApplicationData(i),
          r.deleteApplicationData(i),
          "" != callback && "function" == typeof callback && callback(t, e, n))
      },
      setCallBackHeader: function(t, n) {
          if (void 0 != n && "function" == typeof n) {
              var i = e.getRandomNumber();
              r.setApplicationData(i, n),
              t.setRequestHeader("MXCBF", i)
          }
      },
      callAjax: function(n) {
          var i, a, o, s;
          i = n.isBackgroundRequest,
          a = n.server,
          o = n.serverpath,
          s = n.formPara,
          callback = n.callback,
          formParaForCache = n.formParaForCache;
          var l = !0;
          if (void 0 != n.async && 0 == n.async && (l = !1),
          i) {
              formParaForCache.split("&").indexOf("mxsi=SESA") > 0 ? window.app.SESA = !1 : window.app.SESA = !0
          } else
              t("#initloader").length > 0 && t("#initloader").remove(),
              this.loader(!0);
          t.ajax({
              cache: !1,
              url: a + o,
              type: "POST",
              timeout: reqTimeOutDuration,
              dataType: "json",
              async: l,
              beforeSend: function(t) {
                  window.app.runtime.setCallBackHeader(t, callback)
              },
              data: s,
              success: function(t, n, a) {
                  if (i) {
                      t = r.updateServerResponse(t);
                      var o = t.scrId;
                      e.createPropertyMap(t),
                      window.app.runtime.setSessionFlags(t),
                      window.app.SESA && window.app.runtime.startTimer(firstTimeOutDuration, secondTimeOutDuration, timeOutWaitDuration, timeOutScreenId, logoutServiceId),
                      r.onAfterResponseParsing(o, t),
                      window.app.runtime.invokeCallBack(t, n, a)
                  } else
                      window.app.runtime.onServiceSuccessResponse(t, formParaForCache, n, a),
                      window.app.runtime.invokeCallBack(t, n, a)
              },
              error: function(t, e) {
                  i || window.app.runtime.openScreen(getErrorScreenId(), null, formParaForCache),
                  window.app.runtime.invokeCallBack("", e, t)
              },
              complete: function(t, e) {}
          })
      },
      callMultiPartAjax: function(n) {
          var i, r, a, o;
          i = n.isBackgroundRequest,
          r = n.server,
          a = n.serverpath,
          o = n.formPara,
          callback = n.callback,
          formParaForCache = n.formParaForCache,
          i || this.loader(!0);
          var s = !0;
          void 0 != n.async && 0 == n.async && (s = !1),
          t.ajax({
              cache: !1,
              url: r + a,
              contentType: !1,
              processData: !1,
              type: "POST",
              dataType: "json",
              timeout: reqTimeOutDuration,
              async: s,
              beforeSend: function(t) {
                  window.app.runtime.setCallBackHeader(t, callback)
              },
              data: o,
              success: function(t, n, r) {
                  i ? (e.createPropertyMap(t),
                  window.app.runtime.setSessionFlags(t),
                  window.app.runtime.startTimer(firstTimeOutDuration, secondTimeOutDuration, timeOutWaitDuration, timeOutScreenId, logoutServiceId),
                  window.app.runtime.invokeCallBack(t, n, r)) : (window.app.runtime.onServiceSuccessResponse(t, formParaForCache, n, r),
                  window.app.runtime.invokeCallBack(t, n, r))
              },
              error: function(t, e) {
                  i || window.app.runtime.openScreen(getErrorScreenId(), null, formParaForCache),
                  window.app.runtime.invokeCallBack("", e, t)
              },
              complete: function(t, e) {}
          })
      },
      createMultiPartQueryParam: function(e) {
          var n = new FormData
            , i = 0
            , r = e.slice().split("&")
            , a = {};
          r.forEach(function(t) {
              t = t.split("="),
              a[t[0]] = t[1] || ""
          });
          var o = JSON.parse(JSON.stringify(a));
          for (k in o)
              n.append(k, o[k]);
          var s = t("input[type=file]");
          return t.each(s, function(t, e) {
              for (var r = s[i].files, a = 0; a < r.length; a++)
                  n.append(e.name, r[a]);
              i++
          }),
          n
      },
      createMultiPartQueryParamDrag: function(t, e) {
          var n = t.slice().split("&")
            , i = {};
          n.forEach(function(t) {
              t = t.split("="),
              i[t[0]] = t[1] || ""
          });
          var r = JSON.parse(JSON.stringify(i));
          for (k in r)
              e.append(k, r[k]);
          return e
      },
      createQueryParameters: function() {
          var e = ""
            , n = curScreen;
          e = t("INPUT[type!=checkbox][type!=radio][type!=submit][type!=file],SELECT,TEXTAREA", n).serialize();
          var i = t("INPUT[type=checkbox]", n)
            , r = t("INPUT[type=radio]", n)
            , a = t("DIV[data-bb-type=toggle]", n)
            , o = []
            , s = []
            , l = []
            , c = [];
          i.each(function() {
              s.push(t(this).attr("name"))
          }),
          r.each(function() {
              l.push(t(this).attr("name"))
          }),
          a.each(function() {
              c.push(t(this).attr("name"))
          }),
          s = s.distinct(),
          o = o.distinct(),
          l = l.distinct(),
          c = c.distinct();
          var u, d, p = s.length, f = o.length, h = l.length, m = (c.length,
          ""), v = [];
          flsw = [];
          for (var g = 0; g < h; g++) {
              u = l[g],
              m = "";
              var b, y, w;
              r.each(function() {
                  (b = t(this).attr("name")) == u && t(this).is(":checked") && (y = t(this).attr("data-mxradiokeys"),
                  void 0 != y ? (w = y.split("`"),
                  e = e + "&" + b + "0=" + w[0] + "&" + b + "1=" + w[1] + "&" + b + "2=" + w[2]) : e = e + "&" + b + "0=" + t(this).attr("data-index") + "&" + b + "1=" + t(this).text() + "&" + b + "2=" + t(this).val())
              })
          }
          for (var g = 0; g < p; g++)
              u = s[g],
              m = "",
              v.length = 0,
              i.each(function() {
                  t(this).attr("name") == u && t(this).is(":checked") && v.push(t(this).val())
              }),
              "" != (m = v.join("@")) && (m = u + "=" + m,
              e = e + "&" + m);
          for (var g = 0; g < f; g++) {
              d = c[g],
              m = "";
              var b = {};
              flsw.length = 0,
              a.each(function() {
                  t(this).attr("name") == d && flsw.push(t(this).attr("value"))
              }),
              m = flsw.join("@"),
              "" != m && (m = d + "=" + m,
              e = e + "&" + m)
          }
          return e
      },
      showPopup: function(e) {
          if (void 0 != e && null != e && void 0 != e.compDet) {
              for (var n, i, a = !1, o = e.compDet.length, s = 0; s < o; s++)
                  if (i = e.compDet[s].cid,
                  n = e.compDet[s].mkey,
                  void 0 == n && (n = e.compDet[s].pdet[0].key,
                  n = "ERROR_POPUP" == n ? "P" : n),
                  "P" == n) {
                      for (var l, c = "Information", u = "", d = "", p = [], f = [], h = [], m = 0, v = "", g = e.compDet[s].pdet, m = g.length, b = 0; b < m; b++)
                          v = g[b].key,
                          l = v.substring(v.length - 1),
                          l = parseInt(l) - 1,
                          "P" == v ? c = g[b].val[0] : "MPST" == v ? u = g[b].val[0] : 0 == v.indexOf("MPBT") ? "MPBT1" == v ? p[0] = g[b].val[0] : "MPBT2" == v ? p[1] = g[b].val[0] : "MPBT1CR" == v ? f[0] = g[b].val[0] : "MPBT2CR" == v && (f[1] = g[b].val[0]) : 0 == v.indexOf("MPACT") ? h[l] = g[b].val[0] : "MSTYLE" == v && (d = g[b].val[0]);
                      "" == u && (u = c,
                      c = "Information"),
                      r.loadingAnimator("hide");
                      var y = t("mx-error#" + i);
                      _.isEmpty(d) && "" == d && (d = t(y).attr("data-style")),
                      t("#infoText").attr("class", "alert alert-" + d + " fade in");
                      var w = y.data("error-target")
                        , x = y.data("timeout")
                        , S = t(w, y);
                      S.html(u),
                      y.show(),
                      void 0 != x && null != x && t("#mxclose") && t("#ERROR_POPUP").delay(x).fadeOut("slow", function() {
                          t("#ERROR_POPUP").hide()
                      }),
                      a = !0
                  } else
                      n == PAGETOKEN && (pageToken = e.compDet[s].pdet[0].val[0]);
              return a
          }
      },
      onServiceSuccessResponse: function(t, n, i, r) {
          window.app.scrs = [];
          var a = t.scrId
            , o = !0;
          a == window.app.screenId && (e.createPropertyMap(t),
          this.showPopup(t) && (this.startTimer(firstTimeOutDuration, secondTimeOutDuration, timeOutWaitDuration, timeOutScreenId, logoutServiceId),
          o = !1),
          this.loader(!1),
          window.app.indicator.hide()),
          o && this.openScreen(a, t, n)
      },
      loadScreenSpecificCSS: function(n) {
          var i = window.app.loadConfigJson.css.screens;
          if (!_.isEmpty(i)) {
              var r = breadcrumb[breadcrumb.length - 2];
              if (r)
                  for (var a = i[r] ? i[r] : [], o = a.length, s = 0; s < o; s++)
                      t("link[data-css=" + a[s] + "]").remove();
              for (var l = i[n] ? i[n] : [], c = l.length, u = 0; u < c; u++)
                  e.loadCss(config.paths[l[u]] + ".css", l[u])
          }
      },
      loadCommonCSS: function() {
          var t = window.app.loadConfigJson.css.common;
          if (!_.isEmpty(t))
              for (var n = t, i = n.length, r = 0; r < i; r++)
                  e.loadCss(config.paths[n[r]] + ".css", n[r])
      },
      registerHelpers: function() {
          a.registerHelper("i18n", function(t) {
              var n = t ? t.hash.key : ""
                , i = t ? t.hash.keypath : ""
                , r = t ? t.hash.defaultval : ""
                , o = t ? t.hash.defaultpath : ""
                , s = t ? t.data.index : "";
              if (n && window.app.message_config[n])
                  return new a.SafeString(e.convertText(window.app.message_config[n]));
              if (i) {
                  for (var l = i.split("."), c = t.data, n = c.root, u = c, d = 0, p = l.length; d < p; d++) {
                      u = u && u._parent ? u._parent : "";
                      var f = u && void 0 != u.index ? u.index : "";
                      n = d == p - 1 ? _.isArray(n) ? n[s][l[d]] : n[l[d]] : "" !== f ? n[l[d]][f] : n[l[d]]
                  }
                  if (n && window.app.message_config[n])
                      return new a.SafeString(e.convertText(window.app.message_config[n]))
              }
              if (r)
                  return r;
              if (o) {
                  for (var h = o.split("."), c = t.data, m = c.root, u = c, d = 0, v = h.length; d < v; d++) {
                      u = u && u._parent ? u._parent : "";
                      var f = u && void 0 != u.index ? u.index : "";
                      m = d == v - 1 ? _.isArray(m) ? m[s][h[d]] : m[h[d]] : "" !== f ? m[h[d]][f] : m[h[d]]
                  }
                  if (m)
                      return m
              }
          }),
          a.registerHelper("mx-dyn", function(t) {
              var n = t ? t.hash.key : ""
                , i = t ? t.hash.keypath : "";
              if (n) {
                  var r = e.getdynamicValuesJson(n, this, !0);
                  if (!_.isEmpty(r)) {
                      var a = r;
                      if (i)
                          for (var o = i.split("."), s = 0, l = o.length; s < l; s++)
                              a = _.isArray(a) ? a[0][o[s]] : a[o[s]];
                      return a
                  }
              }
          }),
          a.registerHelper("ifvalue", function(t, e) {
              return t == e.hash.equals ? e.fn(this) : e.inverse(this)
          })
      },
      startTimer: function(t, n, i, r, a) {
          var o = this;
          checkTimeout && t && (r || a) && window.app.screenId != r && 0 == createSession && custom_allowTimeOut() && ("1" == window.app.loadConfigJson.Timeoutpop.type ? (o.clearTimer(),
          timeOut = setTimeout(function() {
              function t() {
                  fireBackgroundRequest("SESA"),
                  n ? (o.clearTimer(),
                  timeOut = setTimeout(function() {
                      var t = {
                          id: "stoPopupModal",
                          title: e.convertText(void 0 != window.app.message_config.sestimeouttitle ? window.app.message_config.sestimeouttitle : "Session Timeout"),
                          message: e.convertText(void 0 != window.app.message_config.sestimeoutmesg ? window.app.message_config.sestimeoutmesg : "You are reaching the maximum idle session duration timeout! Please save your data, Logout and Login again."),
                          buttons: [{
                              label: e.convertText(void 0 != window.app.message_config.ok ? window.app.message_config.ok : "OK"),
                              callback: s
                          }]
                      };
                      e.generateMxPopup(t),
                      e.showMxPopup("stoPopupModal"),
                      s()
                  }, n)) : s()
              }
              function s() {
                  o.clearTimer(),
                  timeOut = setTimeout(function() {
                      clearSessionAfterTimeout(r, a)
                  }, i)
              }
              function l() {
                  clearSessionAfterTimeout(r, a)
              }
              var c = {
                  id: "ftoPopupModal",
                  title: e.convertText(void 0 != window.app.message_config.sestimeouttitle ? window.app.message_config.sestimeouttitle : "Session Timeout"),
                  message: e.convertText(void 0 != window.app.message_config.sessionidlemesg ? window.app.message_config.sessionidlemesg : "You are reaching the maximum idle session duration timeout!"),
                  buttons: [{
                      label: e.convertText(void 0 != window.app.message_config.proceed ? window.app.message_config.proceed : "Proceed"),
                      callback: t
                  }, {
                      label: e.convertText(void 0 != window.app.message_config.cancel ? window.app.message_config.cancel : "Cancel"),
                      callback: l
                  }]
              };
              e.generateMxPopup(c),
              e.showMxPopup("ftoPopupModal"),
              s()
          }, t)) : (o.clearTimer(),
          timeOut = setTimeout(function() {
              function t() {
                  clearSessionAfterTimeout(r, a)
              }
              var n = {
                  id: "ftoPopupModal",
                  title: e.convertText(void 0 != window.app.message_config.sestimeouttitle ? window.app.message_config.sestimeouttitle : "Session Timeout"),
                  message: e.convertText(void 0 != window.app.message_config.sessionidlemesg ? window.app.message_config.sessionidlemesg : "You are reaching the maximum idle session duration timeout!"),
                  buttons: [{
                      label: e.convertText(void 0 != window.app.message_config.ok ? window.app.message_config.ok : "OK"),
                      callback: t
                  }]
              };
              e.generateMxPopup(n),
              e.showMxPopup("ftoPopupModal")
          }, t)))
      },
      clearTimer: function() {
          clearTimeout(timeOut)
      },
      clearSession: function() {
          clearFlowKeys(),
          window.app.menuIndex = "",
          checkTimeout = !1,
          createSession = !0,
          breadcrumb.length = 0,
          breadcrumb = [initScreenId, window.app.screenId],
          this.clearTimer(),
          e.updateMiddlewareUrl()
      },
      loader: function(t) {
          var e = window.app.loadConfigJson.Loader
            , n = e.custom
            , i = e.type;
          n ? loadCustomAnimation(t) : "spinner" == i ? loadSpinner(t) : loadAnimator(t)
      },
      loadTheme: function(t) {
          if (t) {
              var n = e.getCookie("MXTHEME");
              n && document.documentElement.classList.remove(n),
              document.documentElement.classList.add(t),
              e.setCookie("MXTHEME", t)
          } else {
              var n = e.getCookie("MXTHEME");
              n && !_.contains(document.documentElement.classList, n) && document.documentElement.classList.add(n)
          }
      },
      getDeviceBrand: function() {
          var t = new c
            , e = navigator.userAgent;
          t.setUA(e);
          var n = t.getResult()
            , i = "";
          return void 0 != n.device.vendor && (i += n.device.vendor),
          void 0 != n.device.type && ("" != i && (i += " "),
          i += n.device.type),
          void 0 == n.device.vendor && void 0 == n.device.model && void 0 == n.device.type && (i = ""),
          i
      },
      getDeviceModel: function() {
          var t = ""
            , e = new c
            , n = navigator.userAgent;
          e.setUA(n);
          var i = e.getResult();
          return void 0 != i.os.name && (t += i.os.name),
          void 0 != i.os.version && ("" != t && (t += " "),
          t += i.os.version),
          void 0 != i.browser.name && ("" != t && (t += " "),
          t += i.browser.name),
          void 0 != i.browser.version && ("" != t && (t += " "),
          t += i.browser.version),
          t
      }
  };
  return window.app.runtime = d,
  d
});
var loadSpinner = function(t, e) {
  if (e) {
      var n = $("#indicator")
        , i = {
          lines: 12,
          length: 7,
          width: 5,
          radius: 10,
          scale: .6,
          rotate: 0,
          corners: 1,
          color: "#cccc",
          direction: 1,
          speed: 1,
          trail: 100,
          opacity: .25,
          className: "spinner"
      }
        , r = new e(i).spin(n.get(0));
      n.data("spinner", r)
  }
  t ? $("#indicator").show() : $("#indicator").hide()
}
, loadAnimator = function(t) {
  if (t || void 0 === t) {
      $(".loader-backdrop").remove();
      var e = $('<div class="loader fade"><div></div><div></div><div></div><div></div></div>')
        , n = $('<div class="loader-backdrop-sm fade"></div>')
        , i = $('<div class="loader-backdrop fade"></div>')
        , r = $('<div class="loader-text fade"></div>');
      return $("body").append(e),
      $("body").append(i),
      $("body").append(n),
      $("body").append(r),
      e.show(),
      n.show(),
      i.show(),
      r.show(),
      setTimeout(function() {
          e.addClass("in"),
          n.addClass("in"),
          i.addClass("in"),
          r.addClass("in")
      }, 10),
      !0
  }
  return $(".loader").removeClass("in"),
  $(".loader-backdrop-sm").removeClass("in"),
  $(".loader-backdrop").removeClass("in"),
  $(".loader-text").removeClass("in"),
  setTimeout(function() {
      $(".loader").remove(),
      $(".loader-backdrop-sm").remove(),
      $(".loader-backdrop").remove(),
      $(".loader-text").remove()
  }, 150),
  !1
}
, loadCustomAnimation = function(t) {
  if (t || void 0 === t) {
      $(".loader-backdrop").remove();
      var e = $('<div class="customloader fade"><div>')
        , n = $('<div class="loader-backdrop fade"></div>');
      return $("body").append(e),
      $("body").append(n),
      e.show(),
      n.show(),
      setTimeout(function() {
          e.addClass("in"),
          n.addClass("in")
      }, 10),
      !0
  }
  return $(".customloader").removeClass("in"),
  $(".loader-backdrop").removeClass("in"),
  setTimeout(function() {
      $(".customloader").remove(),
      $(".loader-backdrop").remove()
  }, 150),
  !1
};
define("commonUtility", ["jquery"], function(t) {
  function e(t, e, n) {
      if (!t)
          return t;
      for (; -1 !== t.indexOf(e); )
          t = t.replace(e, n);
      return t
  }
  Array.prototype.distinct = function() {
      for (var t = [], e = 0; e < this.length; e += 1)
          t.contains(this[e]) || t.push(this[e]);
      return t
  }
  ,
  Array.prototype.contains = function(t) {
      for (var e in this)
          if (this[e] === t)
              return !0;
      return !1
  }
  ,
  String.prototype.mxtrim = function() {
      return this.replace(/^\s+|\s+$/, "")
  }
  ,
  t.fn.getBgImage = function(e) {
      if (0 != t(this).length) {
          var n = t(this).css("background-image").replace("url", "").replace("(", "").replace(")", "").replace('"', "").replace('"', "")
            , i = t("<img />");
          i.hide(),
          i.bind("load", function() {
              e.apply(t(this)),
              t(this).remove()
          }).error(function() {
              t(this).remove()
          }),
          t("body").append(i),
          i.attr("src", n)
      }
  }
  ,
  t.fn.getAttributes = function() {
      var e = [];
      return this.length && t.each(this[0].attributes, function(t, n) {
          e.push({
              attrName: n.name,
              attrValue: n.value
          })
      }),
      e
  }
  ,
  t.paramLatin = function(n) {
      var i = [];
      return t.each(n, function(t, n) {
          i[i.length] = e(escape(n.name), "+", "%2B") + "=" + e(escape(n.value), "+", "%2B")
      }),
      i.join("&")
  }
  ,
  t.fn.serializeLatin = function() {
      return t.paramLatin(this.serializeArray())
  }
  ,
  Array.prototype.unique = function() {
      for (var t = [], e = 0; e < this.length; e++)
          -1 == t.indexOf(this[e]) && t.push(this[e]);
      return t
  }
  ,
  t.fn.removeStClasses = function() {
      for (var e, n = t(this), i = n.get(0).classList, r = i.length, a = 0; a < r; a++)
          e = i[a],
          0 == e.indexOf("st") && (n.removeClass(e),
          r--,
          a--);
      return n
  }
}),
function(t, e, n, i) {
  "use strict";
  function r(t, e) {
      for (var n = 0, i = t.length; n < i; n++)
          p(t[n], e)
  }
  function a(t) {
      for (var e, n = 0, i = t.length; n < i; n++)
          e = t[n],
          d(e, T[s(e)])
  }
  function o(t) {
      return function(e) {
          O.call(F, e) && (p(e, t),
          r(e.querySelectorAll(A), t))
      }
  }
  function s(t) {
      var e = t.getAttribute("is");
      return E.call(C, e ? e.toUpperCase() : t.nodeName)
  }
  function l(t) {
      var e = t.currentTarget
        , n = t.attrChange
        , i = t.prevValue
        , r = t.newValue;
      e.attributeChangedCallback && "style" !== t.attrName && e.attributeChangedCallback(t.attrName, n === t.ADDITION ? null : i, n === t.REMOVAL ? null : r)
  }
  function c(t) {
      var e = o(t);
      return function(t) {
          e(t.target)
      }
  }
  function u(t, e) {
      var n = this;
      U.call(n, t, e),
      f.call(n, {
          target: n
      })
  }
  function d(t, e) {
      V(t, e),
      v ? v.observe(t, q) : (W && (t.setAttribute = u,
      t[g] = m(t),
      t.addEventListener(w, f)),
      t.addEventListener(y, l)),
      t.createdCallback && (t.created = !0,
      t.createdCallback(),
      t.created = !1)
  }
  function p(t, e) {
      var n, i = s(t), r = "attached", a = "detached";
      -1 < i && (B(t, T[i]),
      i = 0,
      e !== r || t[r] ? e === a && !t[a] && (t[r] = !1,
      t[a] = !0,
      i = 1) : (t[a] = !1,
      t[r] = !0,
      i = 1),
      i && (n = t[e + "Callback"]) && n.call(t))
  }
  if (!(i in e)) {
      var f, h, m, v, g = "__" + i + (1e5 * Math.random() >> 0), b = "extends", y = "DOMAttrModified", w = "DOMSubtreeModified", x = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/, S = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"], C = [], T = [], A = "", k = e.documentElement, E = C.indexOf || function(t) {
          for (var e = this.length; e-- && this[e] !== t; )
              ;
          return e
      }
      , I = n.prototype, N = I.hasOwnProperty, O = I.isPrototypeOf, P = n.defineProperty, M = n.getOwnPropertyDescriptor, $ = n.getOwnPropertyNames, _ = n.getPrototypeOf, D = n.setPrototypeOf, L = !!n.__proto__, R = n.create || function t(e) {
          return e ? (t.prototype = e,
          new t) : this
      }
      , V = D || (L ? function(t, e) {
          return t.__proto__ = e,
          t
      }
      : $ && M ? function() {
          function t(t, e) {
              for (var n, i = $(e), r = 0, a = i.length; r < a; r++)
                  n = i[r],
                  N.call(t, n) || P(t, n, M(e, n))
          }
          return function(e, n) {
              do {
                  t(e, n)
              } while (n = _(n));
              return e
          }
      }() : function(t, e) {
          for (var n in e)
              t[n] = e[n];
          return t
      }
      ), B = D || L ? function(t, e) {
          O.call(e, t) || d(t, e)
      }
      : function(t, e) {
          t[g] || (t[g] = n(!0),
          d(t, e))
      }
      , j = t.MutationObserver || t.WebKitMutationObserver, F = (t.HTMLElement || t.Element || t.Node).prototype, H = F.cloneNode, U = F.setAttribute, K = e.createElement, q = j && {
          attributes: !0,
          characterData: !0,
          attributeOldValue: !0
      }, z = j || function(t) {
          W = !1,
          k.removeEventListener(y, z)
      }
      , G = !1, W = !0;
      j || (k.addEventListener(y, z),
      k.setAttribute(g, 1),
      k.removeAttribute(g),
      W && (f = function(t) {
          var e, n, i, r = this;
          if (r === t.target) {
              e = r[g],
              r[g] = n = m(r);
              for (i in n) {
                  if (!(i in e))
                      return h(0, r, i, e[i], n[i], "ADDITION");
                  if (n[i] !== e[i])
                      return h(1, r, i, e[i], n[i], "MODIFICATION")
              }
              for (i in e)
                  if (!(i in n))
                      return h(2, r, i, e[i], n[i], "REMOVAL")
          }
      }
      ,
      h = function(t, e, n, i, r, a) {
          var o = {
              attrChange: t,
              currentTarget: e,
              attrName: n,
              prevValue: i,
              newValue: r
          };
          o[a] = t,
          l(o)
      }
      ,
      m = function(t) {
          for (var e, n, i = {}, r = t.attributes, a = 0, o = r.length; a < o; a++)
              e = r[a],
              "setAttribute" !== (n = e.name) && (i[n] = e.value);
          return i
      }
      )),
      e[i] = function(t, n) {
          if (i = t.toUpperCase(),
          G || (G = !0,
          j ? (v = function(t, e) {
              function n(t, e) {
                  for (var n = 0, i = t.length; n < i; e(t[n++]))
                      ;
              }
              return new j(function(i) {
                  for (var r, a, o = 0, s = i.length; o < s; o++)
                      r = i[o],
                      "childList" === r.type ? (n(r.addedNodes, t),
                      n(r.removedNodes, e)) : (a = r.target,
                      a.attributeChangedCallback && "style" !== r.attributeName && a.attributeChangedCallback(r.attributeName, r.oldValue, a.getAttribute(r.attributeName)))
              }
              )
          }(o("attached"), o("detached")),
          v.observe(e, {
              childList: !0,
              subtree: !0
          })) : (e.addEventListener("DOMNodeInserted", c("attached")),
          e.addEventListener("DOMNodeRemoved", c("detached"))),
          e.createElement = function(t, n) {
              var i, r = K.apply(e, arguments);
              return n && r.setAttribute("is", t = n.toLowerCase()),
              i = E.call(C, t.toUpperCase()),
              -1 < i && d(r, T[i]),
              r
          }
          ,
          F.cloneNode = function(t) {
              var e = H.call(this, !!t)
                , n = s(e);
              return -1 < n && d(e, T[n]),
              t && a(e.querySelectorAll(A)),
              e
          }
          ),
          -1 < E.call(C, i))
              throw new Error("A " + t + " type is already registered");
          if (!x.test(i) || -1 < E.call(S, i))
              throw new Error("The type " + t + " is invalid");
          var i, l = function() {
              return e.createElement(f, p && i)
          }, u = n || I, p = N.call(u, b), f = p ? n[b] : i, h = C.push(i) - 1;
          return A = A.concat(A.length ? "," : "", p ? f + '[is="' + t.toLowerCase() + '"]' : f),
          l.prototype = T[h] = N.call(u, "prototype") ? u.prototype : R(F),
          r(e.querySelectorAll(A), "attached"),
          l
      }
  }
}(window, document, Object, "registerElement"),
define("registerElement", function() {}),
define("mxCompConfig", function() {}),
define("componentUtils", function() {}),
define("mxScreen", ["api", "componentUtils"], function(t) {
  var e = createMxComponent("mx-screen");
  e.init = function() {
      var e = $(this).data()
        , n = {}
        , i = $(this).attr("id")
        , r = e.bgservice;
      n.id = i,
      n.bgservice = r;
      for (var a = t.setScreenAttributes(i), o = _.keys(a), s = 0; s < o.length; s++)
          n[o[s]] = a[o[s]];
      this.config = n
  }
  ,
  e.createModel = function() {}
  ,
  e.prepareView = function() {}
  ,
  e.postRender = function() {
      var t = this.config;
      if (void 0 != t || null != t)
          var e = t.bgservice;
      e && fireBackgroundRequest(e)
  }
  ,
  e.getProperty = function(t) {}
}),
define("mxSegment", ["componentUtils"], function() {
  var t = createMxComponent("mx-segment");
  t.init = function() {
      var t = $(this).data();
      t.role
  }
  ,
  t.createModel = function() {}
  ,
  t.prepareView = function() {}
  ,
  t.postRender = function() {}
  ,
  t.getProperty = function(t) {}
}),
function() {
  var t = this
    , e = t._
    , n = {}
    , i = Array.prototype
    , r = Object.prototype
    , a = Function.prototype
    , o = i.push
    , s = i.slice
    , l = i.concat
    , c = r.toString
    , u = r.hasOwnProperty
    , d = i.forEach
    , p = i.map
    , f = i.reduce
    , h = i.reduceRight
    , m = i.filter
    , v = i.every
    , g = i.some
    , b = i.indexOf
    , y = i.lastIndexOf
    , w = Array.isArray
    , x = Object.keys
    , S = a.bind
    , C = function(t) {
      return t instanceof C ? t : this instanceof C ? void (this._wrapped = t) : new C(t)
  };
  "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C),
  exports._ = C) : t._ = C,
  C.VERSION = "1.6.0";
  var T = C.each = C.forEach = function(t, e, i) {
      if (null == t)
          return t;
      if (d && t.forEach === d)
          t.forEach(e, i);
      else if (t.length === +t.length) {
          for (var r = 0, a = t.length; a > r; r++)
              if (e.call(i, t[r], r, t) === n)
                  return
      } else
          for (var o = C.keys(t), r = 0, a = o.length; a > r; r++)
              if (e.call(i, t[o[r]], o[r], t) === n)
                  return;
      return t
  }
  ;
  C.map = C.collect = function(t, e, n) {
      var i = [];
      return null == t ? i : p && t.map === p ? t.map(e, n) : (T(t, function(t, r, a) {
          i.push(e.call(n, t, r, a))
      }),
      i)
  }
  ;
  var A = "Reduce of empty array with no initial value";
  C.reduce = C.foldl = C.inject = function(t, e, n, i) {
      var r = arguments.length > 2;
      if (null == t && (t = []),
      f && t.reduce === f)
          return i && (e = C.bind(e, i)),
          r ? t.reduce(e, n) : t.reduce(e);
      if (T(t, function(t, a, o) {
          r ? n = e.call(i, n, t, a, o) : (n = t,
          r = !0)
      }),
      !r)
          throw new TypeError(A);
      return n
  }
  ,
  C.reduceRight = C.foldr = function(t, e, n, i) {
      var r = arguments.length > 2;
      if (null == t && (t = []),
      h && t.reduceRight === h)
          return i && (e = C.bind(e, i)),
          r ? t.reduceRight(e, n) : t.reduceRight(e);
      var a = t.length;
      if (a !== +a) {
          var o = C.keys(t);
          a = o.length
      }
      if (T(t, function(s, l, c) {
          l = o ? o[--a] : --a,
          r ? n = e.call(i, n, t[l], l, c) : (n = t[l],
          r = !0)
      }),
      !r)
          throw new TypeError(A);
      return n
  }
  ,
  C.find = C.detect = function(t, e, n) {
      var i;
      return k(t, function(t, r, a) {
          return e.call(n, t, r, a) ? (i = t,
          !0) : void 0
      }),
      i
  }
  ,
  C.filter = C.select = function(t, e, n) {
      var i = [];
      return null == t ? i : m && t.filter === m ? t.filter(e, n) : (T(t, function(t, r, a) {
          e.call(n, t, r, a) && i.push(t)
      }),
      i)
  }
  ,
  C.reject = function(t, e, n) {
      return C.filter(t, function(t, i, r) {
          return !e.call(n, t, i, r)
      }, n)
  }
  ,
  C.every = C.all = function(t, e, i) {
      e || (e = C.identity);
      var r = !0;
      return null == t ? r : v && t.every === v ? t.every(e, i) : (T(t, function(t, a, o) {
          return (r = r && e.call(i, t, a, o)) ? void 0 : n
      }),
      !!r)
  }
  ;
  var k = C.some = C.any = function(t, e, i) {
      e || (e = C.identity);
      var r = !1;
      return null == t ? r : g && t.some === g ? t.some(e, i) : (T(t, function(t, a, o) {
          return r || (r = e.call(i, t, a, o)) ? n : void 0
      }),
      !!r)
  }
  ;
  C.contains = C.include = function(t, e) {
      return null != t && (b && t.indexOf === b ? -1 != t.indexOf(e) : k(t, function(t) {
          return t === e
      }))
  }
  ,
  C.invoke = function(t, e) {
      var n = s.call(arguments, 2)
        , i = C.isFunction(e);
      return C.map(t, function(t) {
          return (i ? e : t[e]).apply(t, n)
      })
  }
  ,
  C.pluck = function(t, e) {
      return C.map(t, C.property(e))
  }
  ,
  C.where = function(t, e) {
      return C.filter(t, C.matches(e))
  }
  ,
  C.findWhere = function(t, e) {
      return C.find(t, C.matches(e))
  }
  ,
  C.max = function(t, e, n) {
      if (!e && C.isArray(t) && t[0] === +t[0] && t.length < 65535)
          return Math.max.apply(Math, t);
      var i = -1 / 0
        , r = -1 / 0;
      return T(t, function(t, a, o) {
          var s = e ? e.call(n, t, a, o) : t;
          s > r && (i = t,
          r = s)
      }),
      i
  }
  ,
  C.min = function(t, e, n) {
      if (!e && C.isArray(t) && t[0] === +t[0] && t.length < 65535)
          return Math.min.apply(Math, t);
      var i = 1 / 0
        , r = 1 / 0;
      return T(t, function(t, a, o) {
          var s = e ? e.call(n, t, a, o) : t;
          r > s && (i = t,
          r = s)
      }),
      i
  }
  ,
  C.shuffle = function(t) {
      var e, n = 0, i = [];
      return T(t, function(t) {
          e = C.random(n++),
          i[n - 1] = i[e],
          i[e] = t
      }),
      i
  }
  ,
  C.sample = function(t, e, n) {
      return null == e || n ? (t.length !== +t.length && (t = C.values(t)),
      t[C.random(t.length - 1)]) : C.shuffle(t).slice(0, Math.max(0, e))
  }
  ;
  var E = function(t) {
      return null == t ? C.identity : C.isFunction(t) ? t : C.property(t)
  };
  C.sortBy = function(t, e, n) {
      return e = E(e),
      C.pluck(C.map(t, function(t, i, r) {
          return {
              value: t,
              index: i,
              criteria: e.call(n, t, i, r)
          }
      }).sort(function(t, e) {
          var n = t.criteria
            , i = e.criteria;
          if (n !== i) {
              if (n > i || void 0 === n)
                  return 1;
              if (i > n || void 0 === i)
                  return -1
          }
          return t.index - e.index
      }), "value")
  }
  ;
  var I = function(t) {
      return function(e, n, i) {
          var r = {};
          return n = E(n),
          T(e, function(a, o) {
              var s = n.call(i, a, o, e);
              t(r, s, a)
          }),
          r
      }
  };
  C.groupBy = I(function(t, e, n) {
      C.has(t, e) ? t[e].push(n) : t[e] = [n]
  }),
  C.indexBy = I(function(t, e, n) {
      t[e] = n
  }),
  C.countBy = I(function(t, e) {
      C.has(t, e) ? t[e]++ : t[e] = 1
  }),
  C.sortedIndex = function(t, e, n, i) {
      n = E(n);
      for (var r = n.call(i, e), a = 0, o = t.length; o > a; ) {
          var s = a + o >>> 1;
          n.call(i, t[s]) < r ? a = s + 1 : o = s
      }
      return a
  }
  ,
  C.toArray = function(t) {
      return t ? C.isArray(t) ? s.call(t) : t.length === +t.length ? C.map(t, C.identity) : C.values(t) : []
  }
  ,
  C.size = function(t) {
      return null == t ? 0 : t.length === +t.length ? t.length : C.keys(t).length
  }
  ,
  C.first = C.head = C.take = function(t, e, n) {
      return null == t ? void 0 : null == e || n ? t[0] : 0 > e ? [] : s.call(t, 0, e)
  }
  ,
  C.initial = function(t, e, n) {
      return s.call(t, 0, t.length - (null == e || n ? 1 : e))
  }
  ,
  C.last = function(t, e, n) {
      return null == t ? void 0 : null == e || n ? t[t.length - 1] : s.call(t, Math.max(t.length - e, 0))
  }
  ,
  C.rest = C.tail = C.drop = function(t, e, n) {
      return s.call(t, null == e || n ? 1 : e)
  }
  ,
  C.compact = function(t) {
      return C.filter(t, C.identity)
  }
  ;
  var N = function(t, e, n) {
      return e && C.every(t, C.isArray) ? l.apply(n, t) : (T(t, function(t) {
          C.isArray(t) || C.isArguments(t) ? e ? o.apply(n, t) : N(t, e, n) : n.push(t)
      }),
      n)
  };
  C.flatten = function(t, e) {
      return N(t, e, [])
  }
  ,
  C.without = function(t) {
      return C.difference(t, s.call(arguments, 1))
  }
  ,
  C.partition = function(t, e) {
      var n = []
        , i = [];
      return T(t, function(t) {
          (e(t) ? n : i).push(t)
      }),
      [n, i]
  }
  ,
  C.uniq = C.unique = function(t, e, n, i) {
      C.isFunction(e) && (i = n,
      n = e,
      e = !1);
      var r = n ? C.map(t, n, i) : t
        , a = []
        , o = [];
      return T(r, function(n, i) {
          (e ? i && o[o.length - 1] === n : C.contains(o, n)) || (o.push(n),
          a.push(t[i]))
      }),
      a
  }
  ,
  C.union = function() {
      return C.uniq(C.flatten(arguments, !0))
  }
  ,
  C.intersection = function(t) {
      var e = s.call(arguments, 1);
      return C.filter(C.uniq(t), function(t) {
          return C.every(e, function(e) {
              return C.contains(e, t)
          })
      })
  }
  ,
  C.difference = function(t) {
      var e = l.apply(i, s.call(arguments, 1));
      return C.filter(t, function(t) {
          return !C.contains(e, t)
      })
  }
  ,
  C.zip = function() {
      for (var t = C.max(C.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++)
          e[n] = C.pluck(arguments, "" + n);
      return e
  }
  ,
  C.object = function(t, e) {
      if (null == t)
          return {};
      for (var n = {}, i = 0, r = t.length; r > i; i++)
          e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
      return n
  }
  ,
  C.indexOf = function(t, e, n) {
      if (null == t)
          return -1;
      var i = 0
        , r = t.length;
      if (n) {
          if ("number" != typeof n)
              return i = C.sortedIndex(t, e),
              t[i] === e ? i : -1;
          i = 0 > n ? Math.max(0, r + n) : n
      }
      if (b && t.indexOf === b)
          return t.indexOf(e, n);
      for (; r > i; i++)
          if (t[i] === e)
              return i;
      return -1
  }
  ,
  C.lastIndexOf = function(t, e, n) {
      if (null == t)
          return -1;
      var i = null != n;
      if (y && t.lastIndexOf === y)
          return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
      for (var r = i ? n : t.length; r--; )
          if (t[r] === e)
              return r;
      return -1
  }
  ,
  C.range = function(t, e, n) {
      arguments.length <= 1 && (e = t || 0,
      t = 0),
      n = arguments[2] || 1;
      for (var i = Math.max(Math.ceil((e - t) / n), 0), r = 0, a = new Array(i); i > r; )
          a[r++] = t,
          t += n;
      return a
  }
  ;
  var O = function() {};
  C.bind = function(t, e) {
      var n, i;
      if (S && t.bind === S)
          return S.apply(t, s.call(arguments, 1));
      if (!C.isFunction(t))
          throw new TypeError;
      return n = s.call(arguments, 2),
      i = function() {
          if (!(this instanceof i))
              return t.apply(e, n.concat(s.call(arguments)));
          O.prototype = t.prototype;
          var r = new O;
          O.prototype = null;
          var a = t.apply(r, n.concat(s.call(arguments)));
          return Object(a) === a ? a : r
      }
  }
  ,
  C.partial = function(t) {
      var e = s.call(arguments, 1);
      return function() {
          for (var n = 0, i = e.slice(), r = 0, a = i.length; a > r; r++)
              i[r] === C && (i[r] = arguments[n++]);
          for (; n < arguments.length; )
              i.push(arguments[n++]);
          return t.apply(this, i)
      }
  }
  ,
  C.bindAll = function(t) {
      var e = s.call(arguments, 1);
      if (0 === e.length)
          throw new Error("bindAll must be passed function names");
      return T(e, function(e) {
          t[e] = C.bind(t[e], t)
      }),
      t
  }
  ,
  C.memoize = function(t, e) {
      var n = {};
      return e || (e = C.identity),
      function() {
          var i = e.apply(this, arguments);
          return C.has(n, i) ? n[i] : n[i] = t.apply(this, arguments)
      }
  }
  ,
  C.delay = function(t, e) {
      var n = s.call(arguments, 2);
      return setTimeout(function() {
          return t.apply(null, n)
      }, e)
  }
  ,
  C.defer = function(t) {
      return C.delay.apply(C, [t, 1].concat(s.call(arguments, 1)))
  }
  ,
  C.throttle = function(t, e, n) {
      var i, r, a, o = null, s = 0;
      n || (n = {});
      var l = function() {
          s = !1 === n.leading ? 0 : C.now(),
          o = null,
          a = t.apply(i, r),
          i = r = null
      };
      return function() {
          var c = C.now();
          s || !1 !== n.leading || (s = c);
          var u = e - (c - s);
          return i = this,
          r = arguments,
          0 >= u ? (clearTimeout(o),
          o = null,
          s = c,
          a = t.apply(i, r),
          i = r = null) : o || !1 === n.trailing || (o = setTimeout(l, u)),
          a
      }
  }
  ,
  C.debounce = function(t, e, n) {
      var i, r, a, o, s, l = function() {
          var c = C.now() - o;
          e > c ? i = setTimeout(l, e - c) : (i = null,
          n || (s = t.apply(a, r),
          a = r = null))
      };
      return function() {
          a = this,
          r = arguments,
          o = C.now();
          var c = n && !i;
          return i || (i = setTimeout(l, e)),
          c && (s = t.apply(a, r),
          a = r = null),
          s
      }
  }
  ,
  C.once = function(t) {
      var e, n = !1;
      return function() {
          return n ? e : (n = !0,
          e = t.apply(this, arguments),
          t = null,
          e)
      }
  }
  ,
  C.wrap = function(t, e) {
      return C.partial(e, t)
  }
  ,
  C.compose = function() {
      var t = arguments;
      return function() {
          for (var e = arguments, n = t.length - 1; n >= 0; n--)
              e = [t[n].apply(this, e)];
          return e[0]
      }
  }
  ,
  C.after = function(t, e) {
      return function() {
          return --t < 1 ? e.apply(this, arguments) : void 0
      }
  }
  ,
  C.keys = function(t) {
      if (!C.isObject(t))
          return [];
      if (x)
          return x(t);
      var e = [];
      for (var n in t)
          C.has(t, n) && e.push(n);
      return e
  }
  ,
  C.values = function(t) {
      for (var e = C.keys(t), n = e.length, i = new Array(n), r = 0; n > r; r++)
          i[r] = t[e[r]];
      return i
  }
  ,
  C.pairs = function(t) {
      for (var e = C.keys(t), n = e.length, i = new Array(n), r = 0; n > r; r++)
          i[r] = [e[r], t[e[r]]];
      return i
  }
  ,
  C.invert = function(t) {
      for (var e = {}, n = C.keys(t), i = 0, r = n.length; r > i; i++)
          e[t[n[i]]] = n[i];
      return e
  }
  ,
  C.functions = C.methods = function(t) {
      var e = [];
      for (var n in t)
          C.isFunction(t[n]) && e.push(n);
      return e.sort()
  }
  ,
  C.extend = function(t) {
      return T(s.call(arguments, 1), function(e) {
          if (e)
              for (var n in e)
                  t[n] = e[n]
      }),
      t
  }
  ,
  C.pick = function(t) {
      var e = {}
        , n = l.apply(i, s.call(arguments, 1));
      return T(n, function(n) {
          n in t && (e[n] = t[n])
      }),
      e
  }
  ,
  C.omit = function(t) {
      var e = {}
        , n = l.apply(i, s.call(arguments, 1));
      for (var r in t)
          C.contains(n, r) || (e[r] = t[r]);
      return e
  }
  ,
  C.defaults = function(t) {
      return T(s.call(arguments, 1), function(e) {
          if (e)
              for (var n in e)
                  void 0 === t[n] && (t[n] = e[n])
      }),
      t
  }
  ,
  C.clone = function(t) {
      return C.isObject(t) ? C.isArray(t) ? t.slice() : C.extend({}, t) : t
  }
  ,
  C.tap = function(t, e) {
      return e(t),
      t
  }
  ;
  var P = function(t, e, n, i) {
      if (t === e)
          return 0 !== t || 1 / t == 1 / e;
      if (null == t || null == e)
          return t === e;
      t instanceof C && (t = t._wrapped),
      e instanceof C && (e = e._wrapped);
      var r = c.call(t);
      if (r != c.call(e))
          return !1;
      switch (r) {
      case "[object String]":
          return t == String(e);
      case "[object Number]":
          return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
      case "[object Date]":
      case "[object Boolean]":
          return +t == +e;
      case "[object RegExp]":
          return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
      }
      if ("object" != typeof t || "object" != typeof e)
          return !1;
      for (var a = n.length; a--; )
          if (n[a] == t)
              return i[a] == e;
      var o = t.constructor
        , s = e.constructor;
      if (o !== s && !(C.isFunction(o) && o instanceof o && C.isFunction(s) && s instanceof s) && "constructor"in t && "constructor"in e)
          return !1;
      n.push(t),
      i.push(e);
      var l = 0
        , u = !0;
      if ("[object Array]" == r) {
          if (l = t.length,
          u = l == e.length)
              for (; l-- && (u = P(t[l], e[l], n, i)); )
                  ;
      } else {
          for (var d in t)
              if (C.has(t, d) && (l++,
              !(u = C.has(e, d) && P(t[d], e[d], n, i))))
                  break;
          if (u) {
              for (d in e)
                  if (C.has(e, d) && !l--)
                      break;
              u = !l
          }
      }
      return n.pop(),
      i.pop(),
      u
  };
  C.isEqual = function(t, e) {
      return P(t, e, [], [])
  }
  ,
  C.isEmpty = function(t) {
      if (null == t)
          return !0;
      if (C.isArray(t) || C.isString(t))
          return 0 === t.length;
      for (var e in t)
          if (C.has(t, e))
              return !1;
      return !0
  }
  ,
  C.isElement = function(t) {
      return !(!t || 1 !== t.nodeType)
  }
  ,
  C.isArray = w || function(t) {
      return "[object Array]" == c.call(t)
  }
  ,
  C.isObject = function(t) {
      return t === Object(t)
  }
  ,
  T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
      C["is" + t] = function(e) {
          return c.call(e) == "[object " + t + "]"
      }
  }),
  C.isArguments(arguments) || (C.isArguments = function(t) {
      return !(!t || !C.has(t, "callee"))
  }
  ),
  "function" != typeof /./ && (C.isFunction = function(t) {
      return "function" == typeof t
  }
  ),
  C.isFinite = function(t) {
      return isFinite(t) && !isNaN(parseFloat(t))
  }
  ,
  C.isNaN = function(t) {
      return C.isNumber(t) && t != +t
  }
  ,
  C.isBoolean = function(t) {
      return !0 === t || !1 === t || "[object Boolean]" == c.call(t)
  }
  ,
  C.isNull = function(t) {
      return null === t
  }
  ,
  C.isUndefined = function(t) {
      return void 0 === t
  }
  ,
  C.has = function(t, e) {
      return u.call(t, e)
  }
  ,
  C.noConflict = function() {
      return t._ = e,
      this
  }
  ,
  C.identity = function(t) {
      return t
  }
  ,
  C.constant = function(t) {
      return function() {
          return t
      }
  }
  ,
  C.property = function(t) {
      return function(e) {
          return e[t]
      }
  }
  ,
  C.matches = function(t) {
      return function(e) {
          if (e === t)
              return !0;
          for (var n in t)
              if (t[n] !== e[n])
                  return !1;
          return !0
      }
  }
  ,
  C.times = function(t, e, n) {
      for (var i = Array(Math.max(0, t)), r = 0; t > r; r++)
          i[r] = e.call(n, r);
      return i
  }
  ,
  C.random = function(t, e) {
      return null == e && (e = t,
      t = 0),
      t + Math.floor(Math.random() * (e - t + 1))
  }
  ,
  C.now = Date.now || function() {
      return (new Date).getTime()
  }
  ;
  var M = {
      escape: {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;"
      }
  };
  M.unescape = C.invert(M.escape);
  var $ = {
      escape: new RegExp("[" + C.keys(M.escape).join("") + "]","g"),
      unescape: new RegExp("(" + C.keys(M.unescape).join("|") + ")","g")
  };
  C.each(["escape", "unescape"], function(t) {
      C[t] = function(e) {
          return null == e ? "" : ("" + e).replace($[t], function(e) {
              return M[t][e]
          })
      }
  }),
  C.result = function(t, e) {
      if (null != t) {
          var n = t[e];
          return C.isFunction(n) ? n.call(t) : n
      }
  }
  ,
  C.mixin = function(t) {
      T(C.functions(t), function(e) {
          var n = C[e] = t[e];
          C.prototype[e] = function() {
              var t = [this._wrapped];
              return o.apply(t, arguments),
              V.call(this, n.apply(C, t))
          }
      })
  }
  ;
  var _ = 0;
  C.uniqueId = function(t) {
      var e = ++_ + "";
      return t ? t + e : e
  }
  ,
  C.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
  };
  var D = /(.)^/
    , L = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\t": "t",
      "\u2028": "u2028",
      "\u2029": "u2029"
  }
    , R = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  C.template = function(t, e, n) {
      var i;
      n = C.defaults({}, n, C.templateSettings);
      var r = new RegExp([(n.escape || D).source, (n.interpolate || D).source, (n.evaluate || D).source].join("|") + "|$","g")
        , a = 0
        , o = "__p+='";
      t.replace(r, function(e, n, i, r, s) {
          return o += t.slice(a, s).replace(R, function(t) {
              return "\\" + L[t]
          }),
          n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"),
          i && (o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"),
          r && (o += "';\n" + r + "\n__p+='"),
          a = s + e.length,
          e
      }),
      o += "';\n",
      n.variable || (o = "with(obj||{}){\n" + o + "}\n"),
      o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
      try {
          i = new Function(n.variable || "obj","_",o)
      } catch (t) {
          throw t.source = o,
          t
      }
      if (e)
          return i(e, C);
      var s = function(t) {
          return i.call(this, t, C)
      };
      return s.source = "function(" + (n.variable || "obj") + "){\n" + o + "}",
      s
  }
  ,
  C.chain = function(t) {
      return C(t).chain()
  }
  ;
  var V = function(t) {
      return this._chain ? C(t).chain() : t
  };
  C.mixin(C),
  T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
      var e = i[t];
      C.prototype[t] = function() {
          var n = this._wrapped;
          return e.apply(n, arguments),
          "shift" != t && "splice" != t || 0 !== n.length || delete n[0],
          V.call(this, n)
      }
  }),
  T(["concat", "join", "slice"], function(t) {
      var e = i[t];
      C.prototype[t] = function() {
          return V.call(this, e.apply(this._wrapped, arguments))
      }
  }),
  C.extend(C.prototype, {
      chain: function() {
          return this._chain = !0,
          this
      },
      value: function() {
          return this._wrapped
      }
  }),
  "function" == typeof define && define.amd && define("underscore", [], function() {
      return C
  })
}
.call(this),
function(t) {
  var e = /([^&=]+)=?([^&]*)/g
    , n = /\+/g
    , i = function(t) {
      return decodeURIComponent(t.replace(n, " "))
  };
  t.parseParams = function(t) {
      for (var n, r = {}; n = e.exec(t); ) {
          var a = i(n[1])
            , o = i(n[2]);
          "[]" === a.substring(a.length - 2) ? (a = a.substring(0, a.length - 2),
          (r[a] || (r[a] = [])).push(o)) : r[a] = o
      }
      return r
  }
}(jQuery),
define("parseParams", ["jquery"], function() {}),
function(t, e) {
  if ("function" == typeof define && define.amd)
      define("backbone", ["underscore", "jquery", "exports"], function(n, i, r) {
          t.Backbone = e(t, r, n, i)
      });
  else if ("undefined" != typeof exports) {
      var n = require("underscore");
      e(t, exports, n)
  } else
      t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
}(this, function(t, e, n, i) {
  var r = t.Backbone
    , a = []
    , o = a.slice;
  e.VERSION = "1.1.2",
  e.$ = i,
  e.noConflict = function() {
      return t.Backbone = r,
      this
  }
  ,
  e.emulateHTTP = !1,
  e.emulateJSON = !1;
  var s = e.Events = {
      on: function(t, e, n) {
          return c(this, "on", t, [e, n]) && e ? (this._events || (this._events = {}),
          (this._events[t] || (this._events[t] = [])).push({
              callback: e,
              context: n,
              ctx: n || this
          }),
          this) : this
      },
      once: function(t, e, i) {
          if (!c(this, "once", t, [e, i]) || !e)
              return this;
          var r = this
            , a = n.once(function() {
              r.off(t, a),
              e.apply(this, arguments)
          });
          return a._callback = e,
          this.on(t, a, i)
      },
      off: function(t, e, i) {
          var r, a, o, s, l, u, d, p;
          if (!this._events || !c(this, "off", t, [e, i]))
              return this;
          if (!t && !e && !i)
              return this._events = void 0,
              this;
          for (s = t ? [t] : n.keys(this._events),
          l = 0,
          u = s.length; l < u; l++)
              if (t = s[l],
              o = this._events[t]) {
                  if (this._events[t] = r = [],
                  e || i)
                      for (d = 0,
                      p = o.length; d < p; d++)
                          a = o[d],
                          (e && e !== a.callback && e !== a.callback._callback || i && i !== a.context) && r.push(a);
                  r.length || delete this._events[t]
              }
          return this
      },
      trigger: function(t) {
          if (!this._events)
              return this;
          var e = o.call(arguments, 1);
          if (!c(this, "trigger", t, e))
              return this;
          var n = this._events[t]
            , i = this._events.all;
          return n && u(n, e),
          i && u(i, arguments),
          this
      },
      stopListening: function(t, e, i) {
          var r = this._listeningTo;
          if (!r)
              return this;
          var a = !e && !i;
          i || "object" != typeof e || (i = this),
          t && ((r = {})[t._listenId] = t);
          for (var o in r)
              t = r[o],
              t.off(e, i, this),
              (a || n.isEmpty(t._events)) && delete this._listeningTo[o];
          return this
      }
  }
    , l = /\s+/
    , c = function(t, e, n, i) {
      if (!n)
          return !0;
      if ("object" == typeof n) {
          for (var r in n)
              t[e].apply(t, [r, n[r]].concat(i));
          return !1
      }
      if (l.test(n)) {
          for (var a = n.split(l), o = 0, s = a.length; o < s; o++)
              t[e].apply(t, [a[o]].concat(i));
          return !1
      }
      return !0
  }
    , u = function(t, e) {
      var n, i = -1, r = t.length, a = e[0], o = e[1], s = e[2];
      switch (e.length) {
      case 0:
          for (; ++i < r; )
              (n = t[i]).callback.call(n.ctx);
          return;
      case 1:
          for (; ++i < r; )
              (n = t[i]).callback.call(n.ctx, a);
          return;
      case 2:
          for (; ++i < r; )
              (n = t[i]).callback.call(n.ctx, a, o);
          return;
      case 3:
          for (; ++i < r; )
              (n = t[i]).callback.call(n.ctx, a, o, s);
          return;
      default:
          for (; ++i < r; )
              (n = t[i]).callback.apply(n.ctx, e);
          return
      }
  }
    , d = {
      listenTo: "on",
      listenToOnce: "once"
  };
  n.each(d, function(t, e) {
      s[e] = function(e, i, r) {
          return (this._listeningTo || (this._listeningTo = {}))[e._listenId || (e._listenId = n.uniqueId("l"))] = e,
          r || "object" != typeof i || (r = this),
          e[t](i, r, this),
          this
      }
  }),
  s.bind = s.on,
  s.unbind = s.off,
  n.extend(e, s);
  var p = e.Model = function(t, e) {
      var i = t || {};
      e || (e = {}),
      this.cid = n.uniqueId("c"),
      this.attributes = {},
      e.collection && (this.collection = e.collection),
      e.parse && (i = this.parse(i, e) || {}),
      i = n.defaults({}, i, n.result(this, "defaults")),
      this.set(i, e),
      this.changed = {},
      this.initialize.apply(this, arguments)
  }
  ;
  n.extend(p.prototype, s, {
      changed: null,
      validationError: null,
      idAttribute: "id",
      initialize: function() {},
      toJSON: function(t) {
          return n.clone(this.attributes)
      },
      sync: function() {
          return e.sync.apply(this, arguments)
      },
      get: function(t) {
          return this.attributes[t]
      },
      escape: function(t) {
          return n.escape(this.get(t))
      },
      has: function(t) {
          return null != this.get(t)
      },
      set: function(t, e, i) {
          var r, a, o, s, l, c, u, d;
          if (null == t)
              return this;
          if ("object" == typeof t ? (a = t,
          i = e) : (a = {})[t] = e,
          i || (i = {}),
          !this._validate(a, i))
              return !1;
          o = i.unset,
          l = i.silent,
          s = [],
          c = this._changing,
          this._changing = !0,
          c || (this._previousAttributes = n.clone(this.attributes),
          this.changed = {}),
          d = this.attributes,
          u = this._previousAttributes,
          this.idAttribute in a && (this.id = a[this.idAttribute]);
          for (r in a)
              e = a[r],
              n.isEqual(d[r], e) || s.push(r),
              n.isEqual(u[r], e) ? delete this.changed[r] : this.changed[r] = e,
              o ? delete d[r] : d[r] = e;
          if (!l) {
              s.length && (this._pending = i);
              for (var p = 0, f = s.length; p < f; p++)
                  this.trigger("change:" + s[p], this, d[s[p]], i)
          }
          if (c)
              return this;
          if (!l)
              for (; this._pending; )
                  i = this._pending,
                  this._pending = !1,
                  this.trigger("change", this, i);
          return this._pending = !1,
          this._changing = !1,
          this
      },
      unset: function(t, e) {
          return this.set(t, void 0, n.extend({}, e, {
              unset: !0
          }))
      },
      clear: function(t) {
          var e = {};
          for (var i in this.attributes)
              e[i] = void 0;
          return this.set(e, n.extend({}, t, {
              unset: !0
          }))
      },
      hasChanged: function(t) {
          return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t)
      },
      changedAttributes: function(t) {
          if (!t)
              return !!this.hasChanged() && n.clone(this.changed);
          var e, i = !1, r = this._changing ? this._previousAttributes : this.attributes;
          for (var a in t)
              n.isEqual(r[a], e = t[a]) || ((i || (i = {}))[a] = e);
          return i
      },
      previous: function(t) {
          return null != t && this._previousAttributes ? this._previousAttributes[t] : null
      },
      previousAttributes: function() {
          return n.clone(this._previousAttributes)
      },
      fetch: function(t) {
          t = t ? n.clone(t) : {},
          void 0 === t.parse && (t.parse = !0);
          var e = this
            , i = t.success;
          return t.success = function(n) {
              if (!e.set(e.parse(n, t), t))
                  return !1;
              i && i(e, n, t),
              e.trigger("sync", e, n, t)
          }
          ,
          R(this, t),
          this.sync("read", this, t)
      },
      save: function(t, e, i) {
          var r, a, o, s = this.attributes;
          if (null == t || "object" == typeof t ? (r = t,
          i = e) : (r = {})[t] = e,
          i = n.extend({
              validate: !0
          }, i),
          r && !i.wait) {
              if (!this.set(r, i))
                  return !1
          } else if (!this._validate(r, i))
              return !1;
          r && i.wait && (this.attributes = n.extend({}, s, r)),
          void 0 === i.parse && (i.parse = !0);
          var l = this
            , c = i.success;
          return i.success = function(t) {
              l.attributes = s;
              var e = l.parse(t, i);
              if (i.wait && (e = n.extend(r || {}, e)),
              n.isObject(e) && !l.set(e, i))
                  return !1;
              c && c(l, t, i),
              l.trigger("sync", l, t, i)
          }
          ,
          R(this, i),
          a = this.isNew() ? "create" : i.patch ? "patch" : "update",
          "patch" === a && (i.attrs = r),
          o = this.sync(a, this, i),
          r && i.wait && (this.attributes = s),
          o
      },
      destroy: function(t) {
          t = t ? n.clone(t) : {};
          var e = this
            , i = t.success
            , r = function() {
              e.trigger("destroy", e, e.collection, t)
          };
          if (t.success = function(n) {
              (t.wait || e.isNew()) && r(),
              i && i(e, n, t),
              e.isNew() || e.trigger("sync", e, n, t)
          }
          ,
          this.isNew())
              return t.success(),
              !1;
          R(this, t);
          var a = this.sync("delete", this, t);
          return t.wait || r(),
          a
      },
      url: function() {
          var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || L();
          return this.isNew() ? t : t.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
      },
      parse: function(t, e) {
          return t
      },
      clone: function() {
          return new this.constructor(this.attributes)
      },
      isNew: function() {
          return !this.has(this.idAttribute)
      },
      isValid: function(t) {
          return this._validate({}, n.extend(t || {}, {
              validate: !0
          }))
      },
      _validate: function(t, e) {
          if (!e.validate || !this.validate)
              return !0;
          t = n.extend({}, this.attributes, t);
          var i = this.validationError = this.validate(t, e) || null;
          return !i || (this.trigger("invalid", this, i, n.extend(e, {
              validationError: i
          })),
          !1)
      }
  });
  var f = ["keys", "values", "pairs", "invert", "pick", "omit"];
  n.each(f, function(t) {
      p.prototype[t] = function() {
          var e = o.call(arguments);
          return e.unshift(this.attributes),
          n[t].apply(n, e)
      }
  });
  var h = e.Collection = function(t, e) {
      e || (e = {}),
      e.model && (this.model = e.model),
      void 0 !== e.comparator && (this.comparator = e.comparator),
      this._reset(),
      this.initialize.apply(this, arguments),
      t && this.reset(t, n.extend({
          silent: !0
      }, e))
  }
    , m = {
      add: !0,
      remove: !0,
      merge: !0
  }
    , v = {
      add: !0,
      remove: !1
  };
  n.extend(h.prototype, s, {
      model: p,
      initialize: function() {},
      toJSON: function(t) {
          return this.map(function(e) {
              return e.toJSON(t)
          })
      },
      sync: function() {
          return e.sync.apply(this, arguments)
      },
      add: function(t, e) {
          return this.set(t, n.extend({
              merge: !1
          }, e, v))
      },
      remove: function(t, e) {
          var i = !n.isArray(t);
          t = i ? [t] : n.clone(t),
          e || (e = {});
          var r, a, o, s;
          for (r = 0,
          a = t.length; r < a; r++)
              (s = t[r] = this.get(t[r])) && (delete this._byId[s.id],
              delete this._byId[s.cid],
              o = this.indexOf(s),
              this.models.splice(o, 1),
              this.length--,
              e.silent || (e.index = o,
              s.trigger("remove", s, this, e)),
              this._removeReference(s, e));
          return i ? t[0] : t
      },
      set: function(t, e) {
          e = n.defaults({}, e, m),
          e.parse && (t = this.parse(t, e));
          var i = !n.isArray(t);
          t = i ? t ? [t] : [] : n.clone(t);
          var r, a, o, s, l, c, u, d = e.at, f = this.model, h = this.comparator && null == d && !1 !== e.sort, v = n.isString(this.comparator) ? this.comparator : null, g = [], b = [], y = {}, w = e.add, x = e.merge, S = e.remove, C = !(h || !w || !S) && [];
          for (r = 0,
          a = t.length; r < a; r++) {
              if (l = t[r] || {},
              o = l instanceof p ? s = l : l[f.prototype.idAttribute || "id"],
              c = this.get(o))
                  S && (y[c.cid] = !0),
                  x && (l = l === s ? s.attributes : l,
                  e.parse && (l = c.parse(l, e)),
                  c.set(l, e),
                  h && !u && c.hasChanged(v) && (u = !0)),
                  t[r] = c;
              else if (w) {
                  if (!(s = t[r] = this._prepareModel(l, e)))
                      continue;
                  g.push(s),
                  this._addReference(s, e)
              }
              s = c || s,
              !C || !s.isNew() && y[s.id] || C.push(s),
              y[s.id] = !0
          }
          if (S) {
              for (r = 0,
              a = this.length; r < a; ++r)
                  y[(s = this.models[r]).cid] || b.push(s);
              b.length && this.remove(b, e)
          }
          if (g.length || C && C.length)
              if (h && (u = !0),
              this.length += g.length,
              null != d)
                  for (r = 0,
                  a = g.length; r < a; r++)
                      this.models.splice(d + r, 0, g[r]);
              else {
                  C && (this.models.length = 0);
                  var T = C || g;
                  for (r = 0,
                  a = T.length; r < a; r++)
                      this.models.push(T[r])
              }
          if (u && this.sort({
              silent: !0
          }),
          !e.silent) {
              for (r = 0,
              a = g.length; r < a; r++)
                  (s = g[r]).trigger("add", s, this, e);
              (u || C && C.length) && this.trigger("sort", this, e)
          }
          return i ? t[0] : t
      },
      reset: function(t, e) {
          e || (e = {});
          for (var i = 0, r = this.models.length; i < r; i++)
              this._removeReference(this.models[i], e);
          return e.previousModels = this.models,
          this._reset(),
          t = this.add(t, n.extend({
              silent: !0
          }, e)),
          e.silent || this.trigger("reset", this, e),
          t
      },
      push: function(t, e) {
          return this.add(t, n.extend({
              at: this.length
          }, e))
      },
      pop: function(t) {
          var e = this.at(this.length - 1);
          return this.remove(e, t),
          e
      },
      unshift: function(t, e) {
          return this.add(t, n.extend({
              at: 0
          }, e))
      },
      shift: function(t) {
          var e = this.at(0);
          return this.remove(e, t),
          e
      },
      slice: function() {
          return o.apply(this.models, arguments)
      },
      get: function(t) {
          if (null != t)
              return this._byId[t] || this._byId[t.id] || this._byId[t.cid]
      },
      at: function(t) {
          return this.models[t]
      },
      where: function(t, e) {
          return n.isEmpty(t) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
              for (var n in t)
                  if (t[n] !== e.get(n))
                      return !1;
              return !0
          })
      },
      findWhere: function(t) {
          return this.where(t, !0)
      },
      sort: function(t) {
          if (!this.comparator)
              throw new Error("Cannot sort a set without a comparator");
          return t || (t = {}),
          n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)),
          t.silent || this.trigger("sort", this, t),
          this
      },
      pluck: function(t) {
          return n.invoke(this.models, "get", t)
      },
      fetch: function(t) {
          t = t ? n.clone(t) : {},
          void 0 === t.parse && (t.parse = !0);
          var e = t.success
            , i = this;
          return t.success = function(n) {
              var r = t.reset ? "reset" : "set";
              i[r](n, t),
              e && e(i, n, t),
              i.trigger("sync", i, n, t)
          }
          ,
          R(this, t),
          this.sync("read", this, t)
      },
      create: function(t, e) {
          if (e = e ? n.clone(e) : {},
          !(t = this._prepareModel(t, e)))
              return !1;
          e.wait || this.add(t, e);
          var i = this
            , r = e.success;
          return e.success = function(t, n) {
              e.wait && i.add(t, e),
              r && r(t, n, e)
          }
          ,
          t.save(null, e),
          t
      },
      parse: function(t, e) {
          return t
      },
      clone: function() {
          return new this.constructor(this.models)
      },
      _reset: function() {
          this.length = 0,
          this.models = [],
          this._byId = {}
      },
      _prepareModel: function(t, e) {
          if (t instanceof p)
              return t;
          e = e ? n.clone(e) : {},
          e.collection = this;
          var i = new this.model(t,e);
          return i.validationError ? (this.trigger("invalid", this, i.validationError, e),
          !1) : i
      },
      _addReference: function(t, e) {
          this._byId[t.cid] = t,
          null != t.id && (this._byId[t.id] = t),
          t.collection || (t.collection = this),
          t.on("all", this._onModelEvent, this)
      },
      _removeReference: function(t, e) {
          this === t.collection && delete t.collection,
          t.off("all", this._onModelEvent, this)
      },
      _onModelEvent: function(t, e, n, i) {
          ("add" !== t && "remove" !== t || n === this) && ("destroy" === t && this.remove(e, i),
          e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)],
          null != e.id && (this._byId[e.id] = e)),
          this.trigger.apply(this, arguments))
      }
  });
  var g = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
  n.each(g, function(t) {
      h.prototype[t] = function() {
          var e = o.call(arguments);
          return e.unshift(this.models),
          n[t].apply(n, e)
      }
  });
  var b = ["groupBy", "countBy", "sortBy", "indexBy"];
  n.each(b, function(t) {
      h.prototype[t] = function(e, i) {
          var r = n.isFunction(e) ? e : function(t) {
              return t.get(e)
          }
          ;
          return n[t](this.models, r, i)
      }
  });
  var y = e.View = function(t) {
      this.cid = n.uniqueId("view"),
      t || (t = {}),
      n.extend(this, n.pick(t, x)),
      this._ensureElement(),
      this.initialize.apply(this, arguments),
      this.delegateEvents()
  }
    , w = /^(\S+)\s*(.*)$/
    , x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
  n.extend(y.prototype, s, {
      tagName: "div",
      $: function(t) {
          return this.$el.find(t)
      },
      initialize: function() {},
      render: function() {
          return this
      },
      remove: function() {
          return this.$el.remove(),
          this.stopListening(),
          this
      },
      setElement: function(t, n) {
          return this.$el && this.undelegateEvents(),
          this.$el = t instanceof e.$ ? t : e.$(t),
          this.el = this.$el[0],
          !1 !== n && this.delegateEvents(),
          this
      },
      delegateEvents: function(t) {
          if (!t && !(t = n.result(this, "events")))
              return this;
          this.undelegateEvents();
          for (var e in t) {
              var i = t[e];
              if (n.isFunction(i) || (i = this[t[e]]),
              i) {
                  var r = e.match(w)
                    , a = r[1]
                    , o = r[2];
                  i = n.bind(i, this),
                  a += ".delegateEvents" + this.cid,
                  "" === o ? this.$el.on(a, i) : this.$el.on(a, o, i)
              }
          }
          return this
      },
      undelegateEvents: function() {
          return this.$el.off(".delegateEvents" + this.cid),
          this
      },
      _ensureElement: function() {
          if (this.el)
              this.setElement(n.result(this, "el"), !1);
          else {
              var t = n.extend({}, n.result(this, "attributes"));
              this.id && (t.id = n.result(this, "id")),
              this.className && (t.class = n.result(this, "className"));
              var i = e.$("<" + n.result(this, "tagName") + ">").attr(t);
              this.setElement(i, !1)
          }
      }
  }),
  e.sync = function(t, i, r) {
      var a = C[t];
      n.defaults(r || (r = {}), {
          emulateHTTP: e.emulateHTTP,
          emulateJSON: e.emulateJSON
      });
      var o = {
          type: a,
          dataType: "json"
      };
      if (r.url || (o.url = n.result(i, "url") || L()),
      null != r.data || !i || "create" !== t && "update" !== t && "patch" !== t || (o.contentType = "application/json",
      o.data = JSON.stringify(r.attrs || i.toJSON(r))),
      r.emulateJSON && (o.contentType = "application/x-www-form-urlencoded",
      o.data = o.data ? {
          model: o.data
      } : {}),
      r.emulateHTTP && ("PUT" === a || "DELETE" === a || "PATCH" === a)) {
          o.type = "POST",
          r.emulateJSON && (o.data._method = a);
          var s = r.beforeSend;
          r.beforeSend = function(t) {
              if (t.setRequestHeader("X-HTTP-Method-Override", a),
              s)
                  return s.apply(this, arguments)
          }
      }
      "GET" === o.type || r.emulateJSON || (o.processData = !1),
      "PATCH" === o.type && S && (o.xhr = function() {
          return new ActiveXObject("Microsoft.XMLHTTP")
      }
      );
      var l = r.xhr = e.ajax(n.extend(o, r));
      return i.trigger("request", i, l, r),
      l
  }
  ;
  var S = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent)
    , C = {
      create: "POST",
      update: "PUT",
      patch: "PATCH",
      delete: "DELETE",
      read: "GET"
  };
  e.ajax = function() {
      return e.$.ajax.apply(e.$, arguments)
  }
  ;
  var T = e.Router = function(t) {
      t || (t = {}),
      t.routes && (this.routes = t.routes),
      this._bindRoutes(),
      this.initialize.apply(this, arguments)
  }
    , A = /\((.*?)\)/g
    , k = /(\(\?)?:\w+/g
    , E = /\*\w+/g
    , I = /[\-{}\[\]+?.,\\\^$|#\s]/g;
  n.extend(T.prototype, s, {
      initialize: function() {},
      route: function(t, i, r) {
          n.isRegExp(t) || (t = this._routeToRegExp(t)),
          n.isFunction(i) && (r = i,
          i = ""),
          r || (r = this[i]);
          var a = this;
          return e.history.route(t, function(n) {
              var o = a._extractParameters(t, n);
              a.execute(r, o),
              a.trigger.apply(a, ["route:" + i].concat(o)),
              a.trigger("route", i, o),
              e.history.trigger("route", a, i, o)
          }),
          this
      },
      execute: function(t, e) {
          t && t.apply(this, e)
      },
      navigate: function(t, n) {
          return e.history.navigate(t, n),
          this
      },
      _bindRoutes: function() {
          if (this.routes) {
              this.routes = n.result(this, "routes");
              for (var t, e = n.keys(this.routes); null != (t = e.pop()); )
                  this.route(t, this.routes[t])
          }
      },
      _routeToRegExp: function(t) {
          return t = t.replace(I, "\\$&").replace(A, "(?:$1)?").replace(k, function(t, e) {
              return e ? t : "([^/?]+)"
          }).replace(E, "([^?]*?)"),
          new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
      },
      _extractParameters: function(t, e) {
          var i = t.exec(e).slice(1);
          return n.map(i, function(t, e) {
              return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null
          })
      }
  });
  var N = e.History = function() {
      this.handlers = [],
      n.bindAll(this, "checkUrl"),
      "undefined" != typeof window && (this.location = window.location,
      this.history = window.history)
  }
    , O = /^[#\/]|\s+$/g
    , P = /^\/+|\/+$/g
    , M = /msie [\w.]+/
    , $ = /\/$/
    , _ = /#.*$/;
  N.started = !1,
  n.extend(N.prototype, s, {
      interval: 50,
      atRoot: function() {
          return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
      },
      getHash: function(t) {
          var e = (t || this).location.href.match(/#(.*)$/);
          return e ? e[1] : ""
      },
      getFragment: function(t, e) {
          if (null == t)
              if (this._hasPushState || !this._wantsHashChange || e) {
                  t = decodeURI(this.location.pathname + this.location.search);
                  var n = this.root.replace($, "");
                  t.indexOf(n) || (t = t.slice(n.length))
              } else
                  t = this.getHash();
          return t.replace(O, "")
      },
      start: function(t) {
          if (N.started)
              throw new Error("Backbone.history has already been started");
          N.started = !0,
          this.options = n.extend({
              root: "/"
          }, this.options, t),
          this.root = this.options.root,
          this._wantsHashChange = !1 !== this.options.hashChange,
          this._wantsPushState = !!this.options.pushState,
          this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
          var i = this.getFragment()
            , r = document.documentMode
            , a = M.exec(navigator.userAgent.toLowerCase()) && (!r || r <= 7);
          if (this.root = ("/" + this.root + "/").replace(P, "/"),
          a && this._wantsHashChange) {
              var o = e.$('<iframe src="javascript:0" tabindex="-1">');
              this.iframe = o.hide().appendTo("body")[0].contentWindow,
              this.navigate(i)
          }
          this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !a ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
          this.fragment = i;
          var s = this.location;
          if (this._wantsHashChange && this._wantsPushState) {
              if (!this._hasPushState && !this.atRoot())
                  return this.fragment = this.getFragment(null, !0),
                  this.location.replace(this.root + "#" + this.fragment),
                  !0;
              this._hasPushState && this.atRoot() && s.hash && (this.fragment = this.getHash().replace(O, ""),
              this.history.replaceState({}, document.title, this.root + this.fragment))
          }
          if (!this.options.silent)
              return this.loadUrl()
      },
      stop: function() {
          e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
          this._checkUrlInterval && clearInterval(this._checkUrlInterval),
          N.started = !1
      },
      route: function(t, e) {
          this.handlers.unshift({
              route: t,
              callback: e
          })
      },
      checkUrl: function(t) {
          var e = this.getFragment();
          if (e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))),
          e === this.fragment)
              return !1;
          this.iframe && this.navigate(e),
          this.loadUrl()
      },
      loadUrl: function(t) {
          return t = this.fragment = this.getFragment(t),
          n.any(this.handlers, function(e) {
              if (e.route.test(t))
                  return e.callback(t),
                  !0
          })
      },
      navigate: function(t, e) {
          if (!N.started)
              return !1;
          e && !0 !== e || (e = {
              trigger: !!e
          });
          var n = this.root + (t = this.getFragment(t || ""));
          if (t = t.replace(_, ""),
          this.fragment !== t) {
              if (this.fragment = t,
              "" === t && "/" !== n && (n = n.slice(0, -1)),
              this._hasPushState)
                  this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
              else {
                  if (!this._wantsHashChange)
                      return this.location.assign(n);
                  this._updateHash(this.location, t, e.replace),
                  this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(),
                  this._updateHash(this.iframe.location, t, e.replace))
              }
              return e.trigger ? this.loadUrl(t) : void 0
          }
      },
      _updateHash: function(t, e, n) {
          if (n) {
              var i = t.href.replace(/(javascript:|#).*$/, "");
              t.replace(i + "#" + e)
          } else
              t.hash = "#" + e
      }
  }),
  e.history = new N;
  var D = function(t, e) {
      var i, r = this;
      i = t && n.has(t, "constructor") ? t.constructor : function() {
          return r.apply(this, arguments)
      }
      ,
      n.extend(i, r, e);
      var a = function() {
          this.constructor = i
      };
      return a.prototype = r.prototype,
      i.prototype = new a,
      t && n.extend(i.prototype, t),
      i.__super__ = r.prototype,
      i
  };
  p.extend = h.extend = T.extend = y.extend = N.extend = D;
  var L = function() {
      throw new Error('A "url" property or function must be specified')
  }
    , R = function(t, e) {
      var n = e.error;
      e.error = function(i) {
          n && n(t, i, e),
          t.trigger("error", t, i, e)
      }
  };
  return e
}),
define("mxLayoutModel", ["backbone"], function(t) {
  return t.Model.extend({
      initialize: function(t, e) {}
  })
}),
define("mxLayoutView", ["backbone", "handlebars", "util"], function(t, e, n) {
  return t.View.extend({
      initialize: function(t, e) {
          this.prepareTemplate(this.model)
      },
      prepareTemplate: function(t) {
          var e = this.preparePath(t);
          this.loadTemplate(e)
      },
      preparePath: function(t) {
          var e = t.get("template")
            , n = t.get("type")
            , i = t.get("screenId")
            , r = t.get("templateBasePath")
            , a = t.get("templateRemotePath")
            , o = t.get("isexternal");
          return ("1" == o ? r + "/" + i : a + "/" + i) + "/" + e + "." + n
      },
      loadTemplate: function(t) {
          n.loadTemplate(this, t)
      },
      render: function(t) {
          var i;
          window.app.screenId && (i = n.getdynamicValuesJson(window.app.screenId + "_RESPONSE", this, !0));
          var r = {
              preLgImg: client_config.preLgImg,
              pstLgImg: client_config.pstLgImg,
              merchantID: client_config.merchantID,
              data: i
          };
          return e.compile(t)(r)
      },
      postRender: function() {
          this.$el;
          $("[data-input-type=date]").each(function() {
              var t = $(this);
              t.datepicker({
                  format: "mm/dd/yyyy"
              }),
              t.datepicker("setDate", new Date),
              t.datepicker("autoclose", !0),
              t.datepicker("update"),
              t.on("change focusout", function() {
                  $(this).datepicker("hide")
              })
          })
      }
  })
}),
define("mxLayout", ["mxLayoutModel", "mxLayoutView"], function(t, e) {
  var n = createMxComponent("mx-layout");
  n.init = function() {
      that = this;
      var t = $(this).data()
        , e = t.template
        , n = t.type || "hbs"
        , i = t.screen || window.app.screenId
        , r = t.isexternal
        , a = mxLayoutConfig();
      a.type = n,
      a.template = e,
      a.screenId = i,
      a.isexternal = r,
      this.config = a
  }
  ,
  n.createModel = function() {
      this.model = new t(this.config)
  }
  ,
  n.prepareView = function() {
      this.el = $(this),
      this.view = new e({
          model: this.model,
          el: this.el
      })
  }
  ,
  n.postRender = function() {}
  ,
  n.attributeChanged = function(t, e, n) {}
}),
define("mxTextBoxModel", ["backbone"], function(t) {
  return t.Model.extend({
      initialize: function(t, e) {}
  })
}),
define("mxTextBoxTmpl", ["handlebars"], function(t) {
  t = t.default;
  var e = t.template;
  return (t.templates = t.templates || {})["mxTextBox.hbs"] = e({
      1: function() {
          return '<span class="text-red">*</span>\r\n'
      },
      compiler: [6, ">= 2.0.0-beta.1"],
      main: function(t, e, n, i) {
          var r, a, o = e.helperMissing, s = "function", l = this.escapeExpression;
          return '<div name="' + l((a = null != (a = e.ci || (null != t ? t.ci : t)) ? a : o,
          typeof a === s ? a.call(t, {
              name: "ci",
              hash: {},
              data: i
          }) : a)) + '">\r\n' + l((a = null != (a = e.tx || (null != t ? t.tx : t)) ? a : o,
          typeof a === s ? a.call(t, {
              name: "tx",
              hash: {},
              data: i
          }) : a)) + "\r\n\r\n" + (null != (r = e.unless.call(t, null != t ? t.mandatory : t, {
              name: "unless",
              hash: {},
              fn: this.program(1, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + "\r\n</div>"
      },
      useData: !0
  })
}),
define("mxTextBoxView", ["backbone", "util", "mxTextBoxTmpl"], function(t, e, n) {
  return t.View.extend({
      initialize: function(t, e) {},
      render: function(t) {
          var e = t.componentId
            , i = this.model.get("index")
            , r = _.isArray(this.model.get("tx")) ? this.model.get("tx")[i] : this.model.get("tx")
            , a = this.model.get("mandatory");
          return n({
              tx: r,
              ci: e,
              mandatory: "1" != a
          })
      }
  })
}),
define("mxTextBox", ["mxTextBoxModel", "mxTextBoxView", "util"], function(t, e, n) {
  var i = createMxComponent("mx-textbox");
  i.init = function() {
      var t = $(this).data()
        , e = t.type || "c"
        , i = t.key || this.screenId + "_" + this.componentId
        , r = t.index || "0"
        , a = $(this).text()
        , o = mxTextBoxConfig();
      if (o.td = e,
      o.mk = i,
      o.index = r,
      o.tx = a,
      "s" == o.td) {
          var s = n.getdynamicValuesJson(i, this);
          for (var l in s)
              o[l] = s[l],
              "tx" != l || s[l] && 0 != s[l].length || (o.tx = a)
      }
      this.config = o
  }
  ,
  i.createModel = function() {
      this.model = new t(this.config)
  }
  ,
  i.prepareView = function() {
      this.view = new e({
          model: this.model
      }),
      this.renderedHtml = this.view.render(this)
  }
  ,
  i.postRender = function() {
      this.innerHTML = this.renderedHtml
  }
  ,
  i.attributeChanged = function(t, e, n) {
      this.config.index = n,
      this.createModel(),
      this.prepareView(),
      this.postRender()
  }
  ,
  i.getProperty = function(t) {
      switch (t) {
      case "0":
          return "tx";
      case "1":
          return "styleId";
      default:
          console.log(" Error : Unknown Property ")
      }
  }
}),
define("mxTextInputModel", ["backbone"], function(t) {
  return t.Model.extend({
      initialize: function(t, e) {}
  })
}),
define("mxTextInputTmpl", ["handlebars"], function(t) {
  t = t.default;
  var e = t.template;
  return (t.templates = t.templates || {})["mxTextInput.hbs"] = e({
      1: function(t, e, n, i) {
          var r, a = e.helperMissing, o = "function", s = this.escapeExpression;
          return "\r\n\t<div class='input-group date' id=\"mxti_" + s((r = null != (r = e.ci || (null != t ? t.ci : t)) ? r : a,
          typeof r === o ? r.call(t, {
              name: "ci",
              hash: {},
              data: i
          }) : r)) + '" data-input-type="' + s((r = null != (r = e.type || (null != t ? t.type : t)) ? r : a,
          typeof r === o ? r.call(t, {
              name: "type",
              hash: {},
              data: i
          }) : r)) + '">\r\n\t<span class="input-group-addon">\r\n<span class="glyphicon glyphicon-calendar"></span>\r\n\t</span>\r\n\t<input type=\'text\' class="form-control" name ="' + s((r = null != (r = e.ci || (null != t ? t.ci : t)) ? r : a,
          typeof r === o ? r.call(t, {
              name: "ci",
              hash: {},
              data: i
          }) : r)) + '" data-date-format="YYYY/MM/DD"/>\r\n\t\r\n</div>\r\n\t</div>\r\n\r\n'
      },
      3: function(t, e, n, i, r, a) {
          var o;
          return "\r\n" + (null != (o = e.if.call(t, null != t ? t.virtualkeypad : t, {
              name: "if",
              hash: {},
              fn: this.program(4, i, 0, r, a),
              inverse: this.program(7, i, 0, r, a),
              data: i
          })) ? o : "") + "\r\n\r\n"
      },
      4: function(t, e, n, i, r, a) {
          var o, s;
          return '\r\n\t <div id="vkcontainer">\r\n<div id ="fields" class="vkeypadContainer" data-test="' + this.escapeExpression((s = null != (s = e.noofinputs || (null != t ? t.noofinputs : t)) ? s : e.helperMissing,
          "function" == typeof s ? s.call(t, {
              name: "noofinputs",
              hash: {},
              data: i
          }) : s)) + '"> \r\n' + (null != (o = e.each.call(t, null != t ? t.noofrep : t, {
              name: "each",
              hash: {},
              fn: this.program(5, i, 0, r, a),
              inverse: this.noop,
              data: i
          })) ? o : "") + "\r\n</div>\r\n\r\n\t\r\n"
      },
      5: function(t, e, n, i, r, a) {
          var o, s = this.lambda, l = this.escapeExpression, c = e.helperMissing, u = "function";
          return '\t<div class="inputfield">\r\n\t<input type="' + l(s(null != a[1] ? a[1].type : a[1], t)) + '" readonlyname="' + l(s(null != a[1] ? a[1].ci : a[1], t)) + '" formid="' + l(s(null != a[1] ? a[1].revalidateFromId : a[1], t)) + '" \r\n\t data-required="' + l(s(null != a[1] ? a[1].datarequired : a[1], t)) + '" placeholder="' + l(s(null != a[1] ? a[1].placeholdertxt : a[1], t)) + '" \r\n\tid="view-pass-' + l((o = null != (o = e.index || i && i.index) ? o : c,
          typeof o === u ? o.call(t, {
              name: "index",
              hash: {},
              data: i
          }) : o)) + '" maxlength="' + l(s(null != a[1] ? a[1].maxlngth : a[1], t)) + '" minlength="' + l(s(null != a[1] ? a[1].minlngth : a[1], t)) + '" class="password ' + l(s(null != a[1] ? a[1].clas : a[1], t)) + ' " data-ui-pass="password-' + l((o = null != (o = e.index || i && i.index) ? o : c,
          typeof o === u ? o.call(t, {
              name: "index",
              hash: {},
              data: i
          }) : o)) + '" data-id="' + l((o = null != (o = e.index || i && i.index) ? o : c,
          typeof o === u ? o.call(t, {
              name: "index",
              hash: {},
              data: i
          }) : o)) + '" shuffle="' + l(s(null != a[1] ? a[1].keyPadShuffle : a[1], t)) + '">\r\n\r\n\t<input type="text" readonly name="' + l(s(null != a[1] ? a[1].hiddenname : a[1], t)) + '" id="hidden-password-' + l(s(null != a[1] ? a[1].ci : a[1], t)) + "-" + l((o = null != (o = e.index || i && i.index) ? o : c,
          typeof o === u ? o.call(t, {
              name: "index",
              hash: {},
              data: i
          }) : o)) + '" style="display:none;">\r\n\r\n</div>\t\r\n'
      },
      7: function(t, e, n, i) {
          var r, a, o = e.helperMissing, s = "function", l = this.escapeExpression;
          return '\r\n<input type="' + l((a = null != (a = e.type || (null != t ? t.type : t)) ? a : o,
          typeof a === s ? a.call(t, {
              name: "type",
              hash: {},
              data: i
          }) : a)) + '" id="mxti_' + l((a = null != (a = e.ci || (null != t ? t.ci : t)) ? a : o,
          typeof a === s ? a.call(t, {
              name: "ci",
              hash: {},
              data: i
          }) : a)) + '" name="' + l((a = null != (a = e.ci || (null != t ? t.ci : t)) ? a : o,
          typeof a === s ? a.call(t, {
              name: "ci",
              hash: {},
              data: i
          }) : a)) + '"\r\n' + (null != (r = e.if.call(t, null != t ? t.clas : t, {
              name: "if",
              hash: {},
              fn: this.program(8, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + " \r\n" + (null != (r = e.if.call(t, null != t ? t.val : t, {
              name: "if",
              hash: {},
              fn: this.program(10, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + "\r\n" + (null != (r = e.if.call(t, null != t ? t.title : t, {
              name: "if",
              hash: {},
              fn: this.program(12, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + "\r\n" + (null != (r = e.if.call(t, null != t ? t.place : t, {
              name: "if",
              hash: {},
              fn: this.program(14, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + '\r\nrel="tooltip" />\r\n\r\n'
      },
      8: function(t, e, n, i) {
          var r;
          return ' class="' + this.escapeExpression((r = null != (r = e.clas || (null != t ? t.clas : t)) ? r : e.helperMissing,
          "function" == typeof r ? r.call(t, {
              name: "clas",
              hash: {},
              data: i
          }) : r)) + '" '
      },
      10: function(t, e, n, i) {
          var r;
          return 'value="' + this.escapeExpression((r = null != (r = e.val || (null != t ? t.val : t)) ? r : e.helperMissing,
          "function" == typeof r ? r.call(t, {
              name: "val",
              hash: {},
              data: i
          }) : r)) + '"'
      },
      12: function(t, e, n, i) {
          var r;
          return 'data-original-title="' + this.escapeExpression((r = null != (r = e.title || (null != t ? t.title : t)) ? r : e.helperMissing,
          "function" == typeof r ? r.call(t, {
              name: "title",
              hash: {},
              data: i
          }) : r)) + '"'
      },
      14: function(t, e, n, i) {
          var r;
          return 'data-placement="' + this.escapeExpression((r = null != (r = e.place || (null != t ? t.place : t)) ? r : e.helperMissing,
          "function" == typeof r ? r.call(t, {
              name: "place",
              hash: {},
              data: i
          }) : r)) + '"'
      },
      compiler: [6, ">= 2.0.0-beta.1"],
      main: function(t, e, n, i, r, a) {
          var o;
          return null != (o = e.if.call(t, null != t ? t.dateType : t, {
              name: "if",
              hash: {},
              fn: this.program(1, i, 0, r, a),
              inverse: this.program(3, i, 0, r, a),
              data: i
          })) ? o : ""
      },
      useData: !0,
      useDepths: !0
  })
}),
define("mxTextInputView", ["backbone", "mxTextInputTmpl"], function(t, e) {
  return t.View.extend({
      initialize: function(t, e) {},
      render: function(t) {
          var n, i = t.componentId, r = this.model.get("index"), a = this.model.get("type"), o = this.model.get("clas"), s = this.model.get("val"), l = this.model.get("place"), c = this.model.get("title"), u = this.model.get("pinpad"), d = this.model.get("fileds"), p = this.model.get("keyboard"), f = this.model.get("required"), h = this.model.get("placeholdertxt"), m = this.model.get("minlength"), v = this.model.get("maxlength"), g = this.model.get("hiddenname"), b = this.model.get("fromId"), y = this.model.get("keypadshuffle");
          n = _.isArray(this.model.get("tx")) ? this.model.get("tx")[r] : this.model.get("tx");
          for (var w = [], x = 0; x < d; x++)
              w.push(x);
          var S = {
              tx: n,
              ci: i,
              type: a,
              clas: o,
              val: s,
              place: l,
              title: c,
              noofinputs: d,
              noofrep: w,
              datarequired: f,
              placeholdertxt: h,
              minlngth: m,
              maxlngth: v,
              hiddenname: g,
              revalidateFromId: b,
              keyPadShuffle: y
          };
          return "date" == a || "dateTime" == a ? S.dateType = !0 : "virtualkeypad" == p && (S.virtualkeypad = !0,
          window.app.pinPad = u,
          S.pinpad = "true"),
          e(S)
      }
  })
}),
define("mxTextInput", ["mxTextInputModel", "mxTextInputView", "util"], function(t, e, n) {
  var i = createMxComponent("mx-textinput");
  i.init = function() {
      var t = $(this).data()
        , e = t.mode || "c"
        , i = t.key || this.screenId + "_" + this.componentId
        , r = t.index || "0"
        , a = t.type
        , o = mxTextInputConfig();
      if (o.td = e,
      o.mk = i,
      o.index = r,
      o.type = a || "text",
      o.title = t.title || "",
      o.clas = t.class || "",
      o.place = t.placement || "right",
      o.val = t.val || "",
      o.fileds = t.fileds || "1",
      o.pinpad = t.pinpad || "false",
      o.keyboard = t.keyboardtype || "",
      o.required = t.required || "false",
      o.placeholdertxt = t.placeholder || "",
      o.maxlength = t.maxlength || "",
      o.minlength = t.minlength || "",
      o.hiddenname = t.hiddenname || "",
      o.fromId = t.validateid || "",
      o.keypadshuffle = t.shuffle || "false",
      "s" == o.td) {
          var s = n.getdynamicValuesJson(i, this);
          for (var l in s)
              o[l] = s[l]
      }
      "virtualkeypad" == o.keyboard && 0 == $("#vktemplate").length ? n.loadVKeyboard() : ($(".findKboard.letter, .alphaNumeric .numeric, .capslock, .left-shift, .space, .delete").show(),
      $(".alphaNumeric .alpha").hide()),
      this.config = o
  }
  ,
  i.createModel = function() {
      this.model = new t(this.config)
  }
  ,
  i.prepareView = function() {
      this.view = new e({
          model: this.model
      }),
      this.renderedHtml = this.view.render(this)
  }
  ,
  i.postRender = function() {
      this.innerHTML = this.renderedHtml;
      var t = this.model.get("type")
        , e = this.componentId
        , n = this.model.get("keyboard");
      if ("date" == t || "dateTime" == t) {
          var i = $("#mxti_" + e);
          i.datepicker(),
          i.datepicker("setDate", new Date),
          i.datepicker("autoclose", !0),
          i.datepicker("update")
      } else
          "virtualkeypad" == n && ($("body").on("click touchend", function(t) {
              $(t.target).hasClass("findKboard") || $(t.target).hasClass("password") || ($(window).outerWidth() >= 768 ? $(".keyboardContainer, .pinPad").removeAttr("style").hide() : $(".keyboardContainer, .pinPad").hide(),
              $(".password").blur())
          }),
          $("#alphaNum .symbol").hide())
  }
  ,
  i.getProperty = function(t) {
      switch (t) {
      case "0":
          return "tx";
      case "1":
          return "dsid"
      }
  }
}),
define("mxNavMenuModel", ["backbone"], function(t) {
  return t.Model.extend({
      initialize: function(t, e) {}
  })
}),
define("mxNavMenuTmpl", ["handlebars"], function(t) {
  t = t.default;
  var e = t.template;
  return t.templates = t.templates || {},
  t.partials["mxNavMenu.hbs"] = e({
      1: function() {
          return " slide-active "
      },
      3: function() {
          return " top-nav-bar"
      },
      5: function(t, e, n, i) {
          var r;
          return '\t<div id="slidemenu" ' + (null != (r = e.if.call(t, null != t ? t.leftMenu : t, {
              name: "if",
              hash: {},
              fn: this.program(6, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + ">\r\n"
      },
      6: function() {
          return 'class="slide-active leftNav" \r\n\tstyle="left:0px"'
      },
      8: function(t, e, n, i) {
          var r;
          return '\r\n<div id="slidemenu" ' + (null != (r = e.if.call(t, null != t ? t.leftMenu : t, {
              name: "if",
              hash: {},
              fn: this.program(9, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + "> \r\n"
      },
      9: function(t, e, n, i) {
          var r;
          return 'class="slide-active leftNav' + this.escapeExpression((r = null != (r = e.animateNavBarEffect || (null != t ? t.animateNavBarEffect : t)) ? r : e.helperMissing,
          "function" == typeof r ? r.call(t, {
              name: "animateNavBarEffect",
              hash: {},
              data: i
          }) : r)) + '" style="left:0px"'
      },
      11: function(t, e, n, i) {
          var r;
          return null != (r = this.invokePartial(n.menuTmpl, t, {
              name: "menuTmpl",
              data: i,
              indent: "\t",
              helpers: e,
              partials: n
          })) ? r : ""
      },
      compiler: [6, ">= 2.0.0-beta.1"],
      main: function(t, e, n, i) {
          var r, a = this.escapeExpression;
          return '\r\n<aside>\r\n\r\n\t<div class="navbar custom-navbar' + (null != (r = e.if.call(t, null != t ? t.leftMenu : t, {
              name: "if",
              hash: {},
              fn: this.program(1, i, 0),
              inverse: this.program(3, i, 0),
              data: i
          })) ? r : "") + '" role="navigation">\r\n <div class="containerNav">\r\n \t \r\n' + (null != (r = e.if.call(t, null != t ? t.isDefaultNavBar : t, {
              name: "if",
              hash: {},
              fn: this.program(5, i, 0),
              inverse: this.program(8, i, 0),
              data: i
          })) ? r : "") + '<ul class="profileWrapper">\r\n\t<li class="dropdown user user-menu">\r\n <a href="#" class="dropdown-toggle" data-toggle="dropdown">\r\n<i class="glyphicon glyphicon-user"></i>\r\n<span> \r\n <mx-textbox id="IBWELCOME" data-type="s" data-key="IBWELCOME" ></mx-textbox> \r\n<i class="caret"></i>\r\n</span>\r\n<span class="lastTrans">\r\n<mx-textbox id="IBLOGIN" data-type="s" data-key="IBLOGIN" ></mx-textbox>\r\n</span>\r\n </a>\r\n\r\n <ul class="dropdown-menu">\r\n<li role="presentation"><a role="menuitem" tabindex="-1" href="#" onclick="hrefformsubmit(\'104\', false, true)">' + a(e.i18n.call(t, {
              name: "i18n",
              hash: {
                  key: "chngpwd"
              },
              data: i
          })) + '</a></li>\r\n\r\n<li role="presentation" class="divider"></li>\r\n<li role="presentation"><a role="menuitem" tabindex="-1" href="#" onclick="hrefformsubmit(\'LGOUT\',true,false)">' + a(e.i18n.call(t, {
              name: "i18n",
              hash: {
                  key: "logout"
              },
              data: i
          })) + '</a></li>\r\n </ul>\r\n\r\n </li>\r\n\t</ul>\r\n\t<ul class="nav navbar-nav dnl-nav">\r\n' + (null != (r = e.each.call(t, null != t ? t.menu : t, {
              name: "each",
              hash: {},
              fn: this.program(11, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + "\t</ul>\r\n</div>\r\n\t</div>\r\n\r\n\t\r\n\r\n</div>\r\n\t</nav>\r\n</aside>\r\n\r\n\r\n"
      },
      usePartial: !0,
      useData: !0
  })
}),
define("mxMenuTmpl", ["handlebars"], function(t) {
  t = t.default;
  var e = t.template;
  return t.templates = t.templates || {},
  t.partials["mxMenu.hbs"] = e({
      1: function(t, e, n, i) {
          var r, a, o = e.helperMissing, s = "function", l = this.escapeExpression;
          return '\r\n \r\n<li class="dropdown">\r\n<a data-toggle="dropdown" class="dropdown-toggle" onclick="' + l((a = null != (a = e.actionString || (null != t ? t.actionString : t)) ? a : o,
          typeof a === s ? a.call(t, {
              name: "actionString",
              hash: {},
              data: i
          }) : a)) + '">\r\n<span class="nav-icon ' + l((a = null != (a = e.iconName || (null != t ? t.iconName : t)) ? a : o,
          typeof a === s ? a.call(t, {
              name: "iconName",
              hash: {},
              data: i
          }) : a)) + '"></span> \r\n <span class="nav-text">' + l(e.i18n.call(t, {
              name: "i18n",
              hash: {
                  defaultpath: "menu.titleName",
                  keypath: "menu.titleI18N"
              },
              data: i
          })) + " </span>\r\n" + (null != (r = e.if.call(t, null != t ? t.isSub : t, {
              name: "if",
              hash: {},
              fn: this.program(2, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + " \r\n\r\n</a>\r\n\r\n" + (null != (r = e.if.call(t, null != t ? t.isSub : t, {
              name: "if",
              hash: {},
              fn: this.program(4, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + "\r\n</li>\r\n \r\n\r\n"
      },
      2: function() {
          return ' <span class="fa fa-angle-down nav-ddIcon"></span>\r\n'
      },
      4: function(t, e, n, i) {
          var r;
          return ' <ul class="dropdown-menu">\r\n\r\n' + (null != (r = e.each.call(t, null != t ? t.subTitle : t, {
              name: "each",
              hash: {},
              fn: this.program(5, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + "\r\n</ul>\r\n"
      },
      5: function(t, e, n, i) {
          var r;
          return null != (r = this.invokePartial(n.subMenuTmpl, t, {
              name: "subMenuTmpl",
              data: i,
              indent: "",
              helpers: e,
              partials: n
          })) ? r : ""
      },
      7: function(t, e, n, i) {
          var r, a, o = e.helperMissing, s = "function", l = this.escapeExpression;
          return '\r\n \r\n<li class="dropdown ">\r\n<a data-toggle="dropdown" class="dropdown-toggle" onclick="' + l((a = null != (a = e.actionString || (null != t ? t.actionString : t)) ? a : o,
          typeof a === s ? a.call(t, {
              name: "actionString",
              hash: {},
              data: i
          }) : a)) + '">\r\n<span class="nav-icon ' + l((a = null != (a = e.iconName || (null != t ? t.iconName : t)) ? a : o,
          typeof a === s ? a.call(t, {
              name: "iconName",
              hash: {},
              data: i
          }) : a)) + '"></span>\r\n <span class="nav-text"> ' + l(e.i18n.call(t, {
              name: "i18n",
              hash: {
                  defaultpath: "menu.titleName",
                  keypath: "menu.titleI18N"
              },
              data: i
          })) + "</span>\r\n \r\n" + (null != (r = e.if.call(t, null != t ? t.isSub : t, {
              name: "if",
              hash: {},
              fn: this.program(8, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + "</a>\r\n\r\n" + (null != (r = e.if.call(t, null != t ? t.isSub : t, {
              name: "if",
              hash: {},
              fn: this.program(4, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + "\r\n</li>\r\n\r\n\r\n"
      },
      8: function() {
          return '\r\n <span class="fa fa-angle-down nav-ddIcon"></span>\r\n'
      },
      compiler: [6, ">= 2.0.0-beta.1"],
      main: function(t, e, n, i) {
          var r;
          return null != (r = e.if.call(t, null != t ? t.leftMenu : t, {
              name: "if",
              hash: {},
              fn: this.program(1, i, 0),
              inverse: this.program(7, i, 0),
              data: i
          })) ? r : ""
      },
      usePartial: !0,
      useData: !0
  })
}),
define("mxSubMenuTmpl", ["handlebars"], function(t) {
  t = t.default;
  var e = t.template;
  return t.templates = t.templates || {},
  t.partials["mxSubMenu.hbs"] = e({
      1: function(t, e, n, i) {
          var r;
          return "\r\n\t\t<li>\r\n\t\t<a " + (null != (r = e.if.call(t, null != t ? t.actionString : t, {
              name: "if",
              hash: {},
              fn: this.program(2, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + " > \t\t\r\n\t\t" + this.escapeExpression(e.i18n.call(t, {
              name: "i18n",
              hash: {
                  defaultpath: "menu.subTitle.titleName",
                  keypath: "menu.subTitle.titleI18N"
              },
              data: i
          })) + " \r\n\t\t\r\n\t\t</a>\r\n\t</li>\r\n\r\n"
      },
      2: function(t, e, n, i) {
          var r;
          return ' onclick="' + this.escapeExpression((r = null != (r = e.actionString || (null != t ? t.actionString : t)) ? r : e.helperMissing,
          "function" == typeof r ? r.call(t, {
              name: "actionString",
              hash: {},
              data: i
          }) : r)) + '" '
      },
      4: function(t, e, n, i) {
          var r;
          return "\r\n\t<li>\r\n\t\t<a " + (null != (r = e.if.call(t, null != t ? t.actionString : t, {
              name: "if",
              hash: {},
              fn: this.program(2, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + " >\r\n\t\t  " + this.escapeExpression(e.i18n.call(t, {
              name: "i18n",
              hash: {
                  defaultpath: "menu.subTitle.titleName",
                  keypath: "menu.subTitle.titleI18N"
              },
              data: i
          })) + "\r\n\r\n\t\t</a>\r\n\t</li>\r\n\r\n"
      },
      compiler: [6, ">= 2.0.0-beta.1"],
      main: function(t, e, n, i) {
          var r;
          return null != (r = e.if.call(t, null != t ? t.leftMenu : t, {
              name: "if",
              hash: {},
              fn: this.program(1, i, 0),
              inverse: this.program(4, i, 0),
              data: i
          })) ? r : ""
      },
      useData: !0
  })
}),
define("mxNavMenuView", ["backbone", "util", "handlebars", "mxNavMenuTmpl", "mxMenuTmpl", "mxSubMenuTmpl"], function(t, e, n, i, r, a) {
  return t.View.extend({
      initialize: function(t, e) {},
      render: function(t) {
          var o = !!window.app.loadConfigJson.Menu && window.app.loadConfigJson.Menu.leftMenu;
          o = !!e.ismobiledevice() || o;
          var s = void 0 == window.app.loadConfigJson.Menu.navBar || window.app.loadConfigJson.Menu.navBar.defaultNavBar
            , l = ""
            , c = !!(Modernizr.csstransforms && Modernizr.csstransforms3d && Modernizr.cssanimations && Modernizr.csstransitions);
          !s && c && (l = window.app.loadConfigJson.Menu.navBar.navBarEffects,
          l = "" == l ? "mx-menu mx-effect-1" : "mx-menu " + l);
          for (var u, d, p, f, h, m, v = this.model.get("topMenu"), g = this.model.get("id"), b = {
              leftMenu: o,
              menu: v,
              isDefaultNavBar: s,
              animateNavBarEffect: l
          }, y = v.length, w = 0, x = "", S = 0; S < y; S++) {
              u = v[S],
              d = u.subTitle,
              w = d.length,
              u.isSub = w > 0,
              f = u.action,
              h = !!isNaN(f),
              m = u.titleKey,
              x = "",
              "icon_" + u.titleKey.toLowerCase(),
              u.isSub || (x = "hrefformsubmit( '" + f + "', " + h + ", false, '" + g + "', '" + m + "')"),
              u.actionString = x,
              u.iconName = u.titleImage ? u.titleImage : "glyphicon glyphicon-folder-close",
              u.titleI18N = "menu_" + u.titleKey.toLowerCase();
              for (var C = 0; C < w; C++)
                  p = d[C],
                  f = p.action,
                  h = p.cr,
                  m = p.titleKey,
                  x = "",
                  f && (h = !0,
                  x = "hrefformsubmit( '" + f + "', " + h + ", false, '" + g + "', '" + m + "')"),
                  p.actionString = x,
                  p.titleI18N = "menu_" + p.titleKey.toLowerCase()
          }
          return n.registerPartial("menuTmpl", r),
          n.registerPartial("subMenuTmpl", a),
          i(b)
      }
  })
}),
define("mxNavMenu", ["util", "mxNavMenuModel", "mxNavMenuView", "componentUtils"], function(t, e, n) {
  var i = createMxComponent("mx-navmenu");
  i.init = function() {
      var e = $(this).data()
        , n = $(this).attr("id")
        , r = e.type || "c"
        , a = e.key
        , o = mxNavMenuConfig();
      o.mk = a,
      o.td = r,
      o.config = e.config || "menuSystem",
      o.id = n;
      var s = o.config
        , l = client_config.MobeixMiddlewareURL + "/" + client_config.resources
        , c = "config/" + s + ".json";
      if (l && (c = l + "/" + c),
      "s" == o.td) {
          var u = t.getdynamicValuesJson(a, this);
          1 != _.isEmpty(u) ? (o.topMenu = u.Menu[0],
          this.menuConfig = o) : (this.menuConfig = i.loadMenuFromConfig(c),
          o.topMenu = {},
          this.menuConfig = o)
      } else {
          var d = i.loadMenuFromConfig(c);
          o.topMenu = {},
          this.menuConfig = d
      }
  }
  ,
  i.createModel = function() {
      this.model = new e(this.menuConfig)
  }
  ,
  i.prepareView = function() {
      this.view = new n({
          model: this.model
      }),
      this.renderedHtml = this.view.render()
  }
  ,
  i.postRender = function() {
      this.innerHTML = this.renderedHtml,
      this.process()
  }
  ,
  i.getProperty = function(t) {
      switch (t) {
      case "0":
          return "Menu";
      default:
          console.log(" Error : Unknown Property ")
      }
  }
  ,
  i.attributeChanged = function(t, e, n) {}
  ,
  i.process = function() {
      $(this).find(".toggle-menu").jPushMenu({
          closeOnClickLink: !1,
          closeOnClickOutside: !1,
          closeOnClickInside: !1
      }),
      $(this).find(".dropdown-toggle").dropdown()
  }
  ,
  i.loadMenuFromConfig = function(e) {
      var n;
      return t.loadFiles(e, "text", !1, function(t) {
          n = JSON.parse(t)
      }),
      n
  }
}),
define("mxErrorModel", ["backbone"], function(t) {
  return t.Model.extend({
      initialize: function(t, e) {}
  })
}),
define("mxErrorView", ["util", "backbone", "handlebars"], function(t, e, n) {
  return e.View.extend({
      initialize: function(t, e) {
          this.prepareTemplate(this.model)
      },
      prepareTemplate: function(t) {
          var e = this.preparePath(t);
          this.loadTemplate(e)
      },
      preparePath: function(t) {
          var e = t.get("template")
            , n = t.get("type")
            , i = t.get("screenId")
            , r = t.get("templateRemotePath");
          return (i ? r + "/screens/" + i : r + "/generic") + "/" + e + "." + n
      },
      loadTemplate: function(e) {
          t.loadTemplate(this, e)
      },
      render: function(t) {
          var e = {
              style: this.model.attributes.style,
              text: this.model.attributes.text
          };
          return n.compile(t)(e)
      },
      postRender: function() {
          _.isEmpty(this.model.attributes.text) && $(this.$el).hide()
      }
  })
}),
define("mxError", ["mxErrorModel", "mxErrorView"], function(t, e) {
  var n = createMxComponent("mx-error");
  n.init = function() {
      var t = $(this).data()
        , e = t.screen
        , n = t.template
        , i = t.type || "hbs"
        , r = t.style
        , a = t.text
        , o = mxErrorConfig();
      o.screenId = e,
      o.template = n || o.template,
      o.type = i,
      o.style = r || "info",
      o.text = a,
      this.config = o
  }
  ,
  n.createModel = function() {
      this.model = new t(this.config)
  }
  ,
  n.prepareView = function() {
      this.el = $(this),
      this.view = new e({
          model: this.model,
          el: this.el
      })
  }
  ,
  n.postRender = function() {}
  ,
  n.attributeChanged = function(t, e, n) {
      this.createModel(),
      this.prepareView(),
      this.postRender()
  }
}),
define("mxHeaderModel", ["backbone"], function(t) {
  return t.Model.extend({
      initialize: function(t, e) {}
  })
}),
define("mxHeaderTmpl", ["handlebars"], function(t) {
  t = t.default;
  var e = t.template;
  return t.templates = t.templates || {},
  t.partials["mxHeader.hbs"] = e({
      1: function(t, e, n, i) {
          var r, a, o = e.helperMissing, s = "function", l = this.escapeExpression;
          return '\t<header class="header header-md navbar navbar-fixed-top-xs box-shadow innerPageHeader">\r\n\t<div class="navbar-header aside-md dk">\r\n  <a href="#" class="navbar-brand"><img src="/mib/servlets/mibimg?app=' + l((a = null != (a = e.merchantID || (null != t ? t.merchantID : t)) ? a : o,
          typeof a === s ? a.call(t, {
              name: "merchantID",
              hash: {},
              data: i
          }) : a)) + "&src=" + l((a = null != (a = e.bankLogo || (null != t ? t.bankLogo : t)) ? a : o,
          typeof a === s ? a.call(t, {
              name: "bankLogo",
              hash: {},
              data: i
          }) : a)) + '.png"></a>\r\n  <a class="navbtn visible-xs" data-toggle="dropdown" href="#logoutdropdown"> <i class="glyphicon glyphicon-cog"></i></a>\r\n</div>\r\n<ul class="nav navbar-nav navbar-right  hidden-xs nav-user user" id="logoutdropdown">\r\n' + (null != (r = e.if.call(t, null != t ? t.loginlang : t, {
              name: "if",
              hash: {},
              fn: this.program(2, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + (null != (r = e.each.call(t, null != t ? t.headersubmenu : t, {
              name: "each",
              hash: {},
              fn: this.program(5, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + "</ul>\r\n\t</header>\r\n"
      },
      2: function(t, e, n, i) {
          var r, a = this.escapeExpression;
          return '<li class="dropdown help">\r\n <a href="#" class="dropdown-toggle" data-toggle="dropdown">\r\n <i class="' + a(this.lambda(null != (r = null != t ? t.langhead : t) ? r.langImage : r, t)) + '"></i>&nbsp;&nbsp;' + a(e.i18n.call(t, {
              name: "i18n",
              hash: {
                  defaultpath: "langhead.langTitle",
                  keypath: "langhead.langtitlekey"
              },
              data: i
          })) + '\r\n </a>\r\n <ul class="dropdown-menu animated bg-white on animated fadeInLeft m-t-xs">\r\n' + (null != (r = e.each.call(t, null != t ? t.language : t, {
              name: "each",
              hash: {},
              fn: this.program(3, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + " </ul>\r\n  \t</li> \t\r\n"
      },
      3: function(t, e, n, i) {
          var r, a = e.helperMissing, o = "function", s = this.escapeExpression;
          return '<li> \r\n <a  class="ajax-modal-open-icon ' + s((r = null != (r = e.active || (null != t ? t.active : t)) ? r : a,
          typeof r === o ? r.call(t, {
              name: "active",
              hash: {},
              data: i
          }) : r)) + '" href="javascript:void(0)" value="' + s((r = null != (r = e.langCode || (null != t ? t.langCode : t)) ? r : a,
          typeof r === o ? r.call(t, {
              name: "langCode",
              hash: {},
              data: i
          }) : r)) + '" onclick="changeLang(this);">' + s((r = null != (r = e.langDesc || (null != t ? t.langDesc : t)) ? r : a,
          typeof r === o ? r.call(t, {
              name: "langDesc",
              hash: {},
              data: i
          }) : r)) + "</a>\r\n</li>\r\n"
      },
      5: function(t, e, n, i) {
          var r;
          return null != (r = this.invokePartial(n.optionsTmpl, t, {
              name: "optionsTmpl",
              data: i,
              indent: "",
              helpers: e,
              partials: n
          })) ? r : ""
      },
      7: function(t, e, n, i) {
          var r, a, o, s = e.helperMissing, l = "function", c = this.escapeExpression, u = '\t<header class="header header-md navbar navbar-fixed-top-xs box-shadow innerPageHeader ' + (null != (r = e.if.call(t, null != t ? t.leftMenu : t, {
              name: "if",
              hash: {},
              fn: this.program(8, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + '">\r\n\t<div class="navbar-header aside-md dk">\r\n\t<div  id="slide-nav">\r\n <a class="navbtn visible-xs  dnl-btn-toggle navbar-toggle" data-toggle="class:nav-off-screen" ';
          return a = null != (a = e.isdefaultnavbar || (null != t ? t.isdefaultnavbar : t)) ? a : s,
          o = {
              name: "isdefaultnavbar",
              hash: {},
              fn: this.noop,
              inverse: this.program(10, i, 0),
              data: i
          },
          r = typeof a === l ? a.call(t, o) : a,
          e.isdefaultnavbar || (r = e.blockHelperMissing.call(t, r, o)),
          null != r && (u += r),
          u + ' data-target="#nav">\r\n\t<i class="glyphicon glyphicon-menu-hamburger"></i>\r\n </a>\r\n</div>\r\n  <a href="#" class="navbar-brand"><img src="/mib/servlets/mibimg?app=' + c((a = null != (a = e.merchantID || (null != t ? t.merchantID : t)) ? a : s,
          typeof a === l ? a.call(t, {
              name: "merchantID",
              hash: {},
              data: i
          }) : a)) + "&src=" + c((a = null != (a = e.bankLogo || (null != t ? t.bankLogo : t)) ? a : s,
          typeof a === l ? a.call(t, {
              name: "bankLogo",
              hash: {},
              data: i
          }) : a)) + '.png"></a>\r\n  <a class="navbtn visible-xs" data-toggle="dropdown" href="#logoutdropdown"><i class="glyphicon glyphicon-cog"></i></a>\r\n</div>\r\n\r\n<ul class="nav navbar-nav navbar-right  hidden-xs nav-user user " id="logoutdropdown">\t\r\n' + (null != (r = e.each.call(t, null != t ? t.headersubmenu : t, {
              name: "each",
              hash: {},
              fn: this.program(5, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + "</ul>\r\n\t</header>\r\n" + (null != (r = e.if.call(t, null != t ? t.isMenuScreen : t, {
              name: "if",
              hash: {},
              fn: this.program(12, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "")
      },
      8: function() {
          return " slide-active "
      },
      10: function(t, e, n, i) {
          var r;
          return 'data-effect="' + this.escapeExpression((r = null != (r = e.animateNavBarEffect || (null != t ? t.animateNavBarEffect : t)) ? r : e.helperMissing,
          "function" == typeof r ? r.call(t, {
              name: "animateNavBarEffect",
              hash: {},
              data: i
          }) : r)) + '" '
      },
      12: function(t, e, n, i) {
          var r;
          return '<mx-navmenu id="menuList" data-config="menuSystem" data-type="s"  data-key="' + this.escapeExpression((r = null != (r = e.menuKey || (null != t ? t.menuKey : t)) ? r : e.helperMissing,
          "function" == typeof r ? r.call(t, {
              name: "menuKey",
              hash: {},
              data: i
          }) : r)) + '" ></mx-navmenu>\t\r\n'
      },
      compiler: [6, ">= 2.0.0-beta.1"],
      main: function(t, e, n, i) {
          var r;
          return null != (r = e.if.call(t, null != t ? t.loginHeader : t, {
              name: "if",
              hash: {},
              fn: this.program(1, i, 0),
              inverse: this.program(7, i, 0),
              data: i
          })) ? r : ""
      },
      usePartial: !0,
      useData: !0
  })
}),
define("mxHeaderOptionsTmpl", ["handlebars"], function(t) {
  t = t.default;
  var e = t.template;
  return t.templates = t.templates || {},
  t.partials["mxHeaderOptions.hbs"] = e({
      1: function(t, e, n, i) {
          var r, a, o, s = e.helperMissing, l = "function", c = this.escapeExpression, u = '  <li class="dropdown help">\r\n <a href="#" class="dropdown-toggle" data-toggle="dropdown">\r\n <i class="' + c((a = null != (a = e.titleImage || (null != t ? t.titleImage : t)) ? a : s,
          typeof a === l ? a.call(t, {
              name: "titleImage",
              hash: {},
              data: i
          }) : a)) + ' "></i>&nbsp;&nbsp; ' + c(e.i18n.call(t, {
              name: "i18n",
              hash: {
                  defaultpath: "headersubmenu.titleName",
                  keypath: "headersubmenu.titleKey"
              },
              data: i
          })) + '\r\n </a>\r\n <ul class="dropdown-menu animated bg-white on animated fadeInLeft m-t-xs">\r\n';
          return a = null != (a = e.subTitle || (null != t ? t.subTitle : t)) ? a : s,
          o = {
              name: "subTitle",
              hash: {},
              fn: this.program(2, i, 0),
              inverse: this.noop,
              data: i
          },
          r = typeof a === l ? a.call(t, o) : a,
          e.subTitle || (r = e.blockHelperMissing.call(t, r, o)),
          null != r && (u += r),
          u + " </ul>\r\n  </li>\r\n"
      },
      2: function(t, e, n, i) {
          var r, a = this.escapeExpression;
          return ' <li> <a href="javascript:void(0)" onclick="hrefformsubmit(\'' + a((r = null != (r = e.action || (null != t ? t.action : t)) ? r : e.helperMissing,
          "function" == typeof r ? r.call(t, {
              name: "action",
              hash: {},
              data: i
          }) : r)) + '\',true,false)"  class="ajax-modal-open-icon">' + a(e.i18n.call(t, {
              name: "i18n",
              hash: {
                  defaultpath: "headersubmenu.subTitle.titleName",
                  keypath: "headersubmenu.subTitle.titleKey"
              },
              data: i
          })) + "</a> </li>\r\n"
      },
      4: function(t, e, n, i) {
          var r, a = e.helperMissing, o = "function", s = this.escapeExpression;
          return '  <li class="dropdown">\r\n <a href="javascript:void(0)" onclick="hrefformsubmit(\'' + s((r = null != (r = e.action || (null != t ? t.action : t)) ? r : a,
          typeof r === o ? r.call(t, {
              name: "action",
              hash: {},
              data: i
          }) : r)) + '\',true,false)"> <i class="' + s((r = null != (r = e.titleImage || (null != t ? t.titleImage : t)) ? r : a,
          typeof r === o ? r.call(t, {
              name: "titleImage",
              hash: {},
              data: i
          }) : r)) + '"></i>&nbsp;&nbsp; ' + s(e.i18n.call(t, {
              name: "i18n",
              hash: {
                  defaultpath: "headersubmenu.titleName",
                  keypath: "headersubmenu.titleKey"
              },
              data: i
          })) + "</a>\r\n  </li>\r\n"
      },
      compiler: [6, ">= 2.0.0-beta.1"],
      main: function(t, e, n, i) {
          var r;
          return null != (r = e.if.call(t, null != t ? t.subTitle : t, {
              name: "if",
              hash: {},
              fn: this.program(1, i, 0),
              inverse: this.program(4, i, 0),
              data: i
          })) ? r : ""
      },
      useData: !0
  })
}),
define("mxHeaderView", ["util", "backbone", "mxHeaderTmpl", "mxHeaderOptionsTmpl"], function(t, e, n, i) {
  return e.View.extend({
      initialize: function(t, e) {},
      render: function(e) {
          var r = !!window.app.loadConfigJson.Menu && window.app.loadConfigJson.Menu.leftMenu
            , a = window.app.loadConfigJson.Menu ? window.app.loadConfigJson.Menu.excludedScreens : []
            , o = !_.contains(a, window.app.screenId)
            , s = this.model.get("type")
            , l = this.model.get("menu")
            , c = this.model.get("welcomeTextKey")
            , u = "1" == s
            , d = window.app.screenId == initScreenId;
          r = !!t.ismobiledevice() || r;
          var p = ""
            , f = void 0 == window.app.loadConfigJson.Menu.navBar || window.app.loadConfigJson.Menu.navBar.defaultNavBar;
          f || (p = window.app.loadConfigJson.Menu.navBar.navBarEffects);
          var h = [];
          if (d) {
              var m = client_config.Languages;
              if (m) {
                  var v = m.languages
                    , g = m.lang
                    , b = v.length;
                  if (b > 1)
                      for (var y = 0; y < b; y++) {
                          var w = {
                              langCode: v[y].lang,
                              langDesc: v[y].ldesc ? v[y].ldesc : v[y].desc,
                              active: g == v[y].lang ? "active" : ""
                          };
                          h.push(w)
                      }
                  else
                      d = !1
              }
          }
          var x;
          x = u ? window.app.loadConfigJson.header : window.app.loadConfigJson.plheader;
          var S = window.app.loadConfigJson.mxlang
            , C = {
              loginHeader: u,
              menuKey: l,
              isMenuScreen: o,
              leftMenu: r,
              welcomeTextKey: c,
              bankLogo: client_config.logoName ? client_config.logoName : "logo",
              homeLogo: client_config.logoName ? client_config.logoName : "logo",
              bankName: client_config.bankName ? client_config.bankName : "",
              language: h,
              langhead: S,
              loginlang: d,
              merchantID: client_config.merchantID,
              isDefaultNavBar: f,
              animateNavBarEffect: p,
              headersubmenu: x
          };
          return Handlebars.registerPartial("optionsTmpl", i),
          n(C)
      }
  })
}),
define("mxHeader", ["mxHeaderModel", "mxHeaderView"], function(t, e) {
  var n = createMxComponent("mx-header");
  n.init = function() {
      var t, e, n = $(this).data("type");
      n = "1" == n ? "1" : "2",
      2 == n && (t = $(this).data("menu-key"),
      e = $(this).data("welcome-text-key")),
      this.config = {
          type: n,
          menu: t,
          welcomeTextKey: e
      }
  }
  ,
  n.createModel = function() {
      this.model = new t(this.config)
  }
  ,
  n.prepareView = function() {
      this.view = new e({
          model: this.model
      }),
      this.renderedHtml = this.view.render(this)
  }
  ,
  n.postRender = function() {
      this.innerHTML = this.renderedHtml
  }
  ,
  n.attributeChanged = function(t, e, n) {
      this.createModel(),
      this.prepareView(),
      this.postRender()
  }
}),
define("mxFooterModel", ["backbone"], function(t) {
  return t.Model.extend({
      initialize: function(t, e) {}
  })
}),
define("mxFooterTmpl", ["handlebars"], function(t) {
  t = t.default;
  var e = t.template;
  return (t.templates = t.templates || {})["mxFooter.hbs"] = e({
      1: function(t, e, n, i) {
          var r;
          return " " + (null != (r = e.if.call(t, null != t ? t.isMenuScreen : t, {
              name: "if",
              hash: {},
              fn: this.program(2, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + " "
      },
      2: function(t, e, n, i) {
          var r;
          return (null != (r = e.if.call(t, null != t ? t.leftMenu : t, {
              name: "if",
              hash: {},
              fn: this.program(3, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + " "
      },
      3: function() {
          return ' class="content-wrap dnl-visible" data-effect="dnl-push" '
      },
      5: function(t, e, n, i) {
          var r, a = this.escapeExpression;
          return ' <a href="javascript:void(0)" onclick="hrefformsubmit(\'' + a((r = null != (r = e.action || (null != t ? t.action : t)) ? r : e.helperMissing,
          "function" == typeof r ? r.call(t, {
              name: "action",
              hash: {},
              data: i
          }) : r)) + "',true,false)\">\r\n " + a(e.i18n.call(t, {
              name: "i18n",
              hash: {
                  defaultpath: "footerLinks.titleName",
                  keypath: "footerLinks.titleKey"
              },
              data: i
          })) + " </a> \r\n"
      },
      compiler: [6, ">= 2.0.0-beta.1"],
      main: function(t, e, n, i) {
          var r, a, o, s = "<footer " + (null != (r = e.unless.call(t, null != t ? t.customFooter : t, {
              name: "unless",
              hash: {},
              fn: this.program(1, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + '>\r\n\t<div class="footerContainer">\r\n<div class="row"> \r\n <div class="col-md-6 col-sm-6 col-xs-12 text-left">' + this.escapeExpression(e.i18n.call(t, {
              name: "i18n",
              hash: {
                  key: "footertext"
              },
              data: i
          })) + '</div>\r\n <div class="col-md-6 col-sm-6 col-xs-12 text-right footernav">\r\n';
          return a = null != (a = e.footerLinks || (null != t ? t.footerLinks : t)) ? a : e.helperMissing,
          o = {
              name: "footerLinks",
              hash: {},
              fn: this.program(5, i, 0),
              inverse: this.noop,
              data: i
          },
          r = "function" == typeof a ? a.call(t, o) : a,
          e.footerLinks || (r = e.blockHelperMissing.call(t, r, o)),
          null != r && (s += r),
          s + " </div>\r\n</div>\r\n\t</div>\r\n</footer>"
      },
      useData: !0
  })
}),
define("mxFooterView", ["util", "backbone", "mxFooterTmpl"], function(t, e, n) {
  return e.View.extend({
      initialize: function(t, e) {},
      render: function(e) {
          var i = window.app.loadConfigJson.CustomFooter || !1
            , r = !!window.app.loadConfigJson.Menu && window.app.loadConfigJson.Menu.leftMenu
            , a = window.app.loadConfigJson.Menu ? window.app.loadConfigJson.Menu.excludedScreens : []
            , o = !_.contains(a, window.app.screenId);
          t.getdynamicValuesJson("MIB_RULES", this, !0);
          r = !!t.ismobiledevice() || r;
          var s = window.app.loadConfigJson.footer
            , l = {
              customFooter: i,
              isMenuScreen: o,
              leftMenu: r,
              footerLabel: client_config.footerText ? client_config.footerText : "",
              footerLinks: s
          };
          return n(l)
      }
  })
}),
define("mxFooter", ["mxFooterModel", "mxFooterView"], function(t, e) {
  var n = createMxComponent("mx-footer");
  n.init = function() {
      this.config = {}
  }
  ,
  n.createModel = function() {
      this.model = new t(this.config)
  }
  ,
  n.prepareView = function() {
      this.view = new e({
          model: this.model
      }),
      this.renderedHtml = this.view.render(this)
  }
  ,
  n.postRender = function() {
      this.innerHTML = this.renderedHtml
  }
  ,
  n.attributeChanged = function(t, e, n) {
      this.createModel(),
      this.prepareView(),
      this.postRender()
  }
}),
define("mxImageModel", ["backbone"], function(t) {
  return t.Model.extend({
      initialize: function(t, e) {}
  })
}),
define("mxImageTmpl", ["handlebars"], function(t) {
  t = t.default;
  var e = t.template;
  return (t.templates = t.templates || {})["mxImage.hbs"] = e({
      1: function(t, e, n, i) {
          var r, a;
          return a = null != (a = e.actionString || (null != t ? t.actionString : t)) ? a : e.helperMissing,
          '<a href="javascript:void(0)" ' + (null != (r = "function" == typeof a ? a.call(t, {
              name: "actionString",
              hash: {},
              data: i
          }) : a) ? r : "") + ">\r\n"
      },
      3: function(t, e, n, i) {
          var r;
          return "\t<span>" + this.escapeExpression((r = null != (r = e.tx || (null != t ? t.tx : t)) ? r : e.helperMissing,
          "function" == typeof r ? r.call(t, {
              name: "tx",
              hash: {},
              data: i
          }) : r)) + "</span>\r\n"
      },
      5: function() {
          return "</a>\r\n"
      },
      compiler: [6, ">= 2.0.0-beta.1"],
      main: function(t, e, n, i) {
          var r, a, o = e.helperMissing, s = "function", l = this.escapeExpression;
          return (null != (r = e.if.call(t, null != t ? t.actionString : t, {
              name: "if",
              hash: {},
              fn: this.program(1, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + '\t<img src="/mib/servlets/mibimg?app=' + l((a = null != (a = e.merchantId || (null != t ? t.merchantId : t)) ? a : o,
          typeof a === s ? a.call(t, {
              name: "merchantId",
              hash: {},
              data: i
          }) : a)) + "&mxir=" + l((a = null != (a = e.mxir || (null != t ? t.mxir : t)) ? a : o,
          typeof a === s ? a.call(t, {
              name: "mxir",
              hash: {},
              data: i
          }) : a)) + "&src=" + l((a = null != (a = e.im || (null != t ? t.im : t)) ? a : o,
          typeof a === s ? a.call(t, {
              name: "im",
              hash: {},
              data: i
          }) : a)) + '.png">\r\n' + (null != (r = e.if.call(t, null != t ? t.tx : t, {
              name: "if",
              hash: {},
              fn: this.program(3, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "") + (null != (r = e.if.call(t, null != t ? t.actionString : t, {
              name: "if",
              hash: {},
              fn: this.program(5, i, 0),
              inverse: this.noop,
              data: i
          })) ? r : "")
      },
      useData: !0
  })
}),
define("mxImageView", ["backbone", "util", "mxImageTmpl"], function(t, e, n) {
  return t.View.extend({
      initialize: function(t, e) {},
      render: function(t) {
          var e = this.model.toJSON()
            , i = (this.model.get("id"),
          e.ac)
            , r = "";
          if ("" != i) {
              var a = e.cr
                , o = e.ke;
              r = "onclick=hrefformsubmit('" + i + "'," + a + ",false,'" + e.id + "','" + o + "')"
          }
          return e.imagePath = relativeClientPath + merchantId + "/images/" + e.im + ".png",
          e.actionString = r,
          e.merchantId = merchantId,
          e.mxir = window.app.mxir,
          n(e)
      }
  })
}),
define("mxImage", ["mxImageModel", "mxImageView", "util"], function(t, e, n) {
  var i = createMxComponent("mx-image");
  i.init = function() {
      var t = $(this).data()
        , e = t.type || "c"
        , i = t.key || this.screenId + "_" + this.componentId
        , r = t.stylename || ""
        , a = t.action || ""
        , o = !!isNaN(a)
        , s = $(this).text()
        , l = t.image || ""
        , c = t.value || ""
        , u = t.validate || 0
        , d = mxImageConfig();
      if (d.td = e,
      d.mk = i,
      d.tx = s,
      d.ac = a,
      d.cr = o,
      d.style = r,
      d.im = l,
      d.ke = c,
      d.id = this.componentId,
      d.vr = u,
      "s" == d.td) {
          var p = n.getdynamicValuesJson(i, this);
          for (var f in p)
              d[f] = p[f]
      }
      this.config = d
  }
  ,
  i.createModel = function() {
      this.model = new t(this.config)
  }
  ,
  i.prepareView = function() {
      this.view = new e({
          model: this.model
      }),
      this.renderedHtml = this.view.render(this)
  }
  ,
  i.postRender = function() {
      $(this).replaceWith(this.renderedHtml)
  }
  ,
  i.attributeChanged = function(t, e, n) {
      this.createModel(),
      this.prepareView(),
      this.postRender()
  }
  ,
  i.getProperty = function(t) {
      switch (t) {
      case "0":
          return "im";
      case "1":
          return "ac";
      case "2":
          return "cr";
      case "3":
          return "vr";
      case "4":
          return "style";
      case "5":
          return "ke";
      default:
          console.log(" Error : Unknown Property ")
      }
  }
}),
define("mxcomp", ["registerElement", "mxCompConfig", "mxScreen", "mxSegment", "mxLayout", "mxTextBox", "mxTextInput", "mxNavMenu", "mxError", "mxHeader", "mxFooter", "mxImage"], function() {});
var mweb = function() {
  var t = {};
  return t.getImageResolution = function() {
      var t = window.innerWidth > 0 ? window.innerWidth : screen.width
        , e = "basic";
      return t <= 240 ? e = "small" : t <= 320 ? e = "basic" : t <= 480 ? e = "medium" : t <= 640 ? e = "large" : t > 640 && (e = "xlarge"),
      window.app.mxir = e,
      e
  }
  ,
  t.getDefaultParameter = function() {
      var t = {};
      return t.mxmi = merchantId,
      t.mxsmi = sMerchantId,
      t.mxln = window.app.choosenLang,
      t.mxrs = window.app.screenId,
      t.Mxpgt = pageToken,
      t.mxir = this.getImageResolution(),
      t
  }
  ,
  t.cacheKey = function(t, e, n) {
      if ("M" == n)
          if (void 0 !== typeof Storage) {
              void 0 == sessionStorage.memoryKeys && (sessionStorage.memoryKeys = "{}");
              var i = JSON.parse(sessionStorage.memoryKeys);
              i[e] = t,
              sessionStorage.memoryKeys = JSON.stringify(i)
          } else
              showAlert("Session Storage is not supported");
      else if ("N" == n)
          if (void 0 !== typeof Storage) {
              void 0 == sessionStorage.flowKeys && (sessionStorage.flowKeys = "{}");
              var i = JSON.parse(sessionStorage.flowKeys);
              i[e] = t,
              sessionStorage.flowKeys = JSON.stringify(i)
          } else
              showAlert("Session Storage is not supported");
      else if ("O" == n)
          ;
      else if ("R" == n)
          if (void 0 !== typeof Storage) {
              void 0 == localStorage.mxKeys && (localStorage.mxKeys = "{}");
              var i = JSON.parse(localStorage.mxKeys);
              i[e] = t,
              localStorage.mxKeys = JSON.stringify(i)
          } else
              showAlert("Local Storage is not supported")
  }
  ,
  t.getCachedKey = function(t) {
      if (void 0 !== typeof Storage) {
          if (void 0 != sessionStorage.flowKeys) {
              var e = JSON.parse(sessionStorage.flowKeys);
              if (void 0 != e && e[t])
                  return e[t]
          }
          return void 0 != sessionStorage.memoryKeys && void 0 != (e = JSON.parse(sessionStorage.memoryKeys)) && e[t] ? e[t] : null
      }
      return null
  }
  ,
  t.getCachedFlowKey = function(t) {
      if (void 0 !== typeof Storage) {
          if (void 0 != sessionStorage.flowKeys) {
              var e = JSON.parse(sessionStorage.flowKeys);
              if (void 0 != e && e[t])
                  return e[t]
          }
          return null
      }
      return null
  }
  ,
  t.getCachedRKey = function(t) {
      if (void 0 !== typeof Storage) {
          if (void 0 != localStorage.mxKeys) {
              var e = JSON.parse(localStorage.mxKeys);
              if (void 0 != e && e[t])
                  return e[t][0].val[0]
          }
          return ""
      }
      return ""
  }
  ,
  t.deleteKeys = function() {
      var e, n = $(".deleteKeys", curScreen), i = [], r = !1;
      n.length > 0 && (r = 1 == n.attr("data-mxprimarycache"),
      r && t.deleteFlowKeys(),
      i = n.attr("data-mxkeys").split("`"),
      $.each(i, function(n, i) {
          "" != i && (e = i.substring(0, 1),
          i = i.substring(1),
          "M" == e ? t.deleteMemoryKey(i) : "N" == e && t.deleteFlowKey(i))
      }))
  }
  ,
  t.deleteFlowKeys = function() {
      if (void 0 !== typeof Storage && void 0 != sessionStorage.flowKeys && "{}" != sessionStorage.flowKeys) {
          var t = JSON.parse(sessionStorage.flowKeys);
          if (void 0 != t) {
              for (var e in t)
                  -1 != e.indexOf(curScrId + "_") && 0 == e.indexOf(curScrId + "_") || delete t[e];
              sessionStorage.flowKeys = JSON.stringify(t)
          }
      }
  }
  ,
  t.deleteFlowKey = function(t) {
      if (void 0 !== typeof Storage && void 0 != sessionStorage.flowKeys && "{}" != sessionStorage.flowKeys) {
          var e = JSON.parse(sessionStorage.flowKeys);
          void 0 != e && e[t] && (delete e[t],
          sessionStorage.flowKeys = JSON.stringify(e))
      }
  }
  ,
  t.deleteMemoryKey = function(t) {
      if (void 0 !== typeof Storage && void 0 != sessionStorage.memoryKeys && "{}" != sessionStorage.memoryKeys) {
          var e = JSON.parse(sessionStorage.memoryKeys);
          void 0 != e && e[t] && (delete e[t],
          sessionStorage.memoryKeys = JSON.stringify(e))
      }
  }
  ,
  t.getActionType = function(t) {
      return -1 != t.indexOf("_") && (t = t.substring(0, t.indexOf("_"))),
      t
  }
  ,
  t.performAction = function(t, e) {}
  ,
  t.getCachePositionOfComponent = function(t) {
      var e = "0";
      switch (t) {
      case CONST.COMPO.COMBOBOXID:
      case CONST.COMPO.COVERFLOW:
          e = "7";
          break;
      case CONST.COMPO.CHECKBOX:
      case CONST.COMPO.RADIOBUTTON:
          e = "1";
          break;
      default:
          e = "0"
      }
      return e
  }
  ,
  t.cacheScreen = function(t) {
      var e = t.scrId;
      if (void 0 !== typeof Storage) {
          void 0 == sessionStorage.scrDetail && (sessionStorage.scrDetail = "{}");
          var n = JSON.parse(sessionStorage.scrDetail);
          n[e] = "object" == typeof t ? JSON.stringify(t) : t,
          sessionStorage.scrDetail = JSON.stringify(n)
      } else
          showAlert("Session Storage is not supported")
  }
  ,
  t.getCachedScreen = function(t) {
      if (void 0 !== typeof Storage) {
          if (void 0 != sessionStorage.scrDetail) {
              var e = JSON.parse(sessionStorage.scrDetail);
              return e[t] ? JSON.parse(e[t]) : null
          }
          return null
      }
      showAlert("Session Storage is not supported")
  }
  ,
  t.setScreenHistory = function(t, e) {
      if (void 0 !== typeof Storage) {
          void 0 == sessionStorage.screenHistory && (sessionStorage.screenHistory = "{}");
          var n = JSON.parse(sessionStorage.screenHistory);
          n[t] = e,
          sessionStorage.screenHistory = JSON.stringify(n)
      }
  }
  ,
  t.getScreenHistory = function(t) {
      if (void 0 !== typeof Storage) {
          if (void 0 != sessionStorage.screenHistory) {
              var e = JSON.parse(sessionStorage.screenHistory);
              return e[t] ? e[t] : null
          }
          return null
      }
  }
  ,
  t.clearSession = function() {
      void 0 !== typeof Storage && (sessionStorage.removeItem("scrDetail"),
      sessionStorage.removeItem("memoryKeys"),
      sessionStorage.removeItem("flowKeys"))
  }
  ,
  t
}();
define("main", function() {}),
$("body").addClass("cbp-spmenu-push"),
$(window).resize(function() {
  $(this).width() <= 991 ? $("[rel=tooltip]").each(function() {
      $(this).attr("data-placement", "bottom"),
      $(this).data("placement", "bottom")
  }) : $("[rel=tooltip]").each(function() {
      $(this).data("data-placement", "right"),
      $(this).data("placement", "right")
  }),
  $("[rel=tooltip]").tooltip("destroy"),
  $("[rel=tooltip]").tooltip()
}),
define("appScripts", function() {});
var config = {
  waitSeconds: 0,
  paths: {
      registerElement: "../libs/registerElement/registerElement",
      jquery: "../libs/jquery/jquery",
      parseParams: "../libs/jquery/jquery.parseParams",
      modernizr: "../libs/modernizr/modernizr",
      handlebars: "../libs/handlebars/handlebars",
      underscore: "../libs/underscore/underscore",
      backbone: "../libs/backbone/backbone",
      text: "../libs/require/text",
      bootstrap: "../libs/bootstrap/dist/js/bootstrap.min",
      bootstrapValidator: "../libs/bootstrap/dist/js/bootstrapValidator.min",
      bootstrapPopover: "../libs/bootstrap/bootstrap-popover",
      tooltip: "../libs/bootstrap/bootstrap-tooltip",
      jPushMenu: "../libs/jPushMenu/jPushMenu",
      sidebar: "../libs/sidebar/sidebar",
      classie: "../libs/classie/classie",
      spin: "../libs/spin/spin",
      "ua-parser-js": "../libs/uaparser/ua-parser",
      api: "../api/api",
      css: "../libs/require/css",
      mainCSS: "../css/main",
      runtime: "./runtime",
      util: "./util",
      globals: "./globals",
      main: "./main",
      appScripts: "./appScripts",
      commonUtility: "./commonUtility",
      development: "empty:",
      mxcomp: "../mxcomp/mxcomp",
      mxCompConfig: "../mxcomp/mxCompConfig",
      componentUtils: "../mxcomp/componentUtils",
      mxScreen: "../mxcomp/mxScreen/mxScreen",
      mxSegment: "../mxcomp/mxSegment/mxSegment",
      mxRepeater: "../mxcomp/mxRepeater/mxRepeater",
      mxLayout: "../mxcomp/mxLayout/mxLayout",
      mxLayoutModel: "../mxcomp/mxLayout/mxLayoutModel",
      mxLayoutView: "../mxcomp/mxLayout/mxLayoutView",
      mxNavMenu: "../mxcomp/mxNavMenu/mxNavMenu",
      mxNavMenuModel: "../mxcomp/mxNavMenu/mxNavMenuModel",
      mxNavMenuView: "../mxcomp/mxNavMenu/mxNavMenuView",
      mxNavMenuTmpl: "../procompiledTmpl/mxNavMenuTmpl",
      mxSubMenuTmpl: "../procompiledTmpl/mxSubMenuTmpl",
      mxMenuTmpl: "../procompiledTmpl/mxMenuTmpl",
      mxHeader: "../mxcomp/mxHeader/mxHeader",
      mxHeaderModel: "../mxcomp/mxHeader/mxHeaderModel",
      mxHeaderView: "../mxcomp/mxHeader/mxHeaderView",
      mxHeaderTmpl: "../procompiledTmpl/mxHeaderTmpl",
      mxHeaderOptionsTmpl: "../procompiledTmpl/mxHeaderOptionsTmpl",
      mxFooter: "../mxcomp/mxFooter/mxFooter",
      mxFooterModel: "../mxcomp/mxFooter/mxFooterModel",
      mxFooterView: "../mxcomp/mxFooter/mxFooterView",
      mxFooterTmpl: "../procompiledTmpl/mxFooterTmpl",
      mxTextBox: "../mxcomp/mxTextBox/mxTextBox",
      mxTextBoxModel: "../mxcomp/mxTextBox/mxTextBoxModel",
      mxTextBoxView: "../mxcomp/mxTextBox/mxTextBoxView",
      mxTextBoxTmpl: "../procompiledTmpl/mxTextBoxTmpl",
      mxTextInput: "../mxcomp/mxTextInput/mxTextInput",
      mxTextInputModel: "../mxcomp/mxTextInput/mxTextInputModel",
      mxTextInputView: "../mxcomp/mxTextInput/mxTextInputView",
      mxTextInputTmpl: "../procompiledTmpl/mxTextInputTmpl",
      mxError: "../mxcomp/mxError/mxError",
      mxErrorModel: "../mxcomp/mxError/mxErrorModel",
      mxErrorView: "../mxcomp/mxError/mxErrorView",
      mainTmpl: "../procompiledTmpl/mainTmpl",
      popupTmpl: "../mibTemplates/popup.hbs",
      vkTmpl: "../mibTemplates/virtualkeypad.hbs",
      mxImage: "../mxcomp/mxImage/mxImage",
      mxImageModel: "../mxcomp/mxImage/mxImageModel",
      mxImageView: "../mxcomp/mxImage/mxImageView",
      mxImageTmpl: "../procompiledTmpl/mxImageTmpl"
  },
  shim: {
      jQuery: {
          exports: "$"
      },
      parseParams: {
          deps: ["jquery"]
      },
      underscore: {
          exports: "_"
      },
      backbone: {
          deps: ["underscore", "jquery", "parseParams"],
          exports: "Backbone"
      },
      bootstrap: {
          deps: ["jquery"]
      },
      bootstrapValidator: {
          deps: ["bootstrap"]
      },
      bootstrapPopover: {
          deps: ["bootstrap"]
      },
      tooltip: {
          deps: ["bootstrap"]
      },
      jPushMenu: {
          deps: ["bootstrap"]
      },
      sidebar: {
          deps: ["jquery"]
      },
      classie: {
          deps: ["jquery"]
      },
      appScripts: {
          deps: ["jquery"]
      },
      mxRepeater: {
          deps: ["componentUtils"]
      },
      runtime: {
          deps: ["development"]
      },
      handlebars: {
          exports: "Handlebars"
      }
  },
  config: {
      text: {
          useXhr: function(t, e, n, i) {
              return !0
          }
      }
  }
}
, relativeClientPath = "";
"cordova"in window ? (window.app.isHybridApp = !0,
relativeClientPath = "") : (window.app.isHybridApp = !1,
relativeClientPath = "../"),
window.app.mxmode = "mobile",
767 <= $(window).width() && (window.app.mxmode = "desktop"),
client_config && (config.paths.projectConfig = [relativeClientPath + "../" + client_config.resources + "/js/projectConfig"],
config.paths.customValidation = [relativeClientPath + "../" + client_config.resources + "/templates/customValidation"],
config.paths.common = [relativeClientPath + "../" + client_config.resources + "/js/common"],
config.paths.loadConfig = [relativeClientPath + "../" + client_config.resources + "/config/loadConfig.json"]),
require.config(config),
define("mib", ["bootstrap", "bootstrapValidator", "tooltip", "jPushMenu", "sidebar", "classie", "handlebars", "modernizr", "projectConfig", "spin", "ua-parser-js"], function() {
  require(["util", "runtime", "commonUtility", "registerElement", "mxcomp", "main", "globals", "customValidation", "appScripts"], function(t, e) {
      var n = {
          initialize: function() {
              window.app.isHybridApp && "iOS" == device.platform && (StatusBar.overlaysWebView(!1),
              StatusBar.styleDefault()),
              e.init()
          }
      };
      return n.initialize(),
      n
  })
});
