/*!
 * Waves v0.7.6
 * http://fian.my.id/Waves
 *
 * Copyright 2014-2018 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */
!(function (t, e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define([], function () {
        return (t.Waves = e.call(t)), t.Waves;
      })
    : "object" == typeof exports
    ? (module.exports = e.call(t))
    : (t.Waves = e.call(t));
})("object" == typeof global ? global : this, function () {
  "use strict";
  var t = t || {},
    e = document.querySelectorAll.bind(document),
    n = Object.prototype.toString,
    o = "ontouchstart" in window;

  function a(t) {
    var e = typeof t;
    return "function" === e || ("object" === e && !!t);
  }

  function i(t) {
    var o,
      i = n.call(t);
    return "[object String]" === i
      ? e(t)
      : a(t) &&
        /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(i) &&
        t.hasOwnProperty("length")
      ? t
      : a((o = t)) && o.nodeType > 0
      ? [t]
      : [];
  }

  function r(t) {
    var e,
      n,
      o = {
        top: 0,
        left: 0,
      },
      a = t && t.ownerDocument;
    return (
      (e = a.documentElement),
      void 0 !== t.getBoundingClientRect && (o = t.getBoundingClientRect()),
      (n = (function (t) {
        return null !== (e = t) && e === e.window
          ? t
          : 9 === t.nodeType && t.defaultView;
        var e;
      })(a)),
      {
        top: o.top + n.pageYOffset - e.clientTop,
        left: o.left + n.pageXOffset - e.clientLeft,
      }
    );
  }

  function s(t) {
    var e = "";
    for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
    return e;
  }
  var u = {
      duration: 750,
      delay: 200,
      show: function (t, e, n) {
        if (2 === t.button) return !1;
        e = e || this;
        var o = document.createElement("div");
        (o.className = "waves-ripple waves-rippling"), e.appendChild(o);
        var a = r(e),
          i = 0,
          c = 0;
        "touches" in t && t.touches.length
          ? ((i = t.touches[0].pageY - a.top),
            (c = t.touches[0].pageX - a.left))
          : ((i = t.pageY - a.top), (c = t.pageX - a.left)),
          (c = c >= 0 ? c : 0),
          (i = i >= 0 ? i : 0);
        var l = "scale(" + (e.clientWidth / 100) * 3 + ")",
          d = "translate(0,0)";
        n && (d = "translate(" + n.x + "px, " + n.y + "px)"),
          o.setAttribute("data-hold", Date.now()),
          o.setAttribute("data-x", c),
          o.setAttribute("data-y", i),
          o.setAttribute("data-scale", l),
          o.setAttribute("data-translate", d);
        var f = {
          top: i + "px",
          left: c + "px",
        };
        o.classList.add("waves-notransition"),
          o.setAttribute("style", s(f)),
          o.classList.remove("waves-notransition"),
          (f["-webkit-transform"] = l + " " + d),
          (f["-moz-transform"] = l + " " + d),
          (f["-ms-transform"] = l + " " + d),
          (f["-o-transform"] = l + " " + d),
          (f.transform = l + " " + d),
          (f.opacity = "1");
        var v = "mousemove" === t.type ? 2500 : u.duration;
        (f["-webkit-transition-duration"] = v + "ms"),
          (f["-moz-transition-duration"] = v + "ms"),
          (f["-o-transition-duration"] = v + "ms"),
          (f["transition-duration"] = v + "ms"),
          o.setAttribute("style", s(f));
      },
      hide: function (t, e) {
        for (
          var n = (e = e || this).getElementsByClassName("waves-rippling"),
            a = 0,
            i = n.length;
          a < i;
          a++
        )
          l(t, e, n[a]);
        o &&
          (e.removeEventListener("touchend", u.hide),
          e.removeEventListener("touchcancel", u.hide)),
          e.removeEventListener("mouseup", u.hide),
          e.removeEventListener("mouseleave", u.hide);
      },
    },
    c = {
      input: function (t) {
        var e = t.parentNode;
        if (
          "i" !== e.tagName.toLowerCase() ||
          !e.classList.contains("waves-effect")
        ) {
          var n = document.createElement("i");
          (n.className = t.className + " waves-input-wrapper"),
            (t.className = "waves-button-input"),
            e.replaceChild(n, t),
            n.appendChild(t);
          var o = window.getComputedStyle(t, null),
            a = o.color,
            i = o.backgroundColor;
          n.setAttribute("style", "color:" + a + ";background:" + i),
            t.setAttribute("style", "background-color:rgba(0,0,0,0);");
        }
      },
      img: function (t) {
        var e = t.parentNode;
        if (
          "i" !== e.tagName.toLowerCase() ||
          !e.classList.contains("waves-effect")
        ) {
          var n = document.createElement("i");
          e.replaceChild(n, t), n.appendChild(t);
        }
      },
    };

  function l(t, e, n) {
    if (n) {
      n.classList.remove("waves-rippling");
      var o = n.getAttribute("data-x"),
        a = n.getAttribute("data-y"),
        i = n.getAttribute("data-scale"),
        r = n.getAttribute("data-translate"),
        c = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
      c < 0 && (c = 0), "mousemove" === t.type && (c = 150);
      var l = "mousemove" === t.type ? 2500 : u.duration;
      setTimeout(function () {
        var t = {
          top: a + "px",
          left: o + "px",
          opacity: "0",
          "-webkit-transition-duration": l + "ms",
          "-moz-transition-duration": l + "ms",
          "-o-transition-duration": l + "ms",
          "transition-duration": l + "ms",
          "-webkit-transform": i + " " + r,
          "-moz-transform": i + " " + r,
          "-ms-transform": i + " " + r,
          "-o-transform": i + " " + r,
          transform: i + " " + r,
        };
        n.setAttribute("style", s(t)),
          setTimeout(function () {
            try {
              e.removeChild(n);
            } catch (t) {
              return !1;
            }
          }, l);
      }, c);
    }
  }
  var d = {
    touches: 0,
    allowEvent: function (t) {
      var e = !0;
      return /^(mousedown|mousemove)$/.test(t.type) && d.touches && (e = !1), e;
    },
    registerEvent: function (t) {
      var e = t.type;
      "touchstart" === e
        ? (d.touches += 1)
        : /^(touchend|touchcancel)$/.test(e) &&
          setTimeout(function () {
            d.touches && (d.touches -= 1);
          }, 500);
    },
  };

  function f(t) {
    var e = (function (t) {
      if (!1 === d.allowEvent(t)) return null;
      for (var e = null, n = t.target || t.srcElement; n.parentElement; ) {
        if (
          !(n instanceof SVGElement) &&
          n.classList.contains("waves-effect")
        ) {
          e = n;
          break;
        }
        n = n.parentElement;
      }
      return e;
    })(t);
    if (null !== e) {
      if (
        e.disabled ||
        e.getAttribute("disabled") ||
        e.classList.contains("disabled")
      )
        return;
      if ((d.registerEvent(t), "touchstart" === t.type && u.delay)) {
        var n = !1,
          a = setTimeout(function () {
            (a = null), u.show(t, e);
          }, u.delay),
          i = function (o) {
            a && (clearTimeout(a), (a = null), u.show(t, e)),
              n || ((n = !0), u.hide(o, e)),
              s();
          },
          r = function (t) {
            a && (clearTimeout(a), (a = null)), i(t), s();
          };
        e.addEventListener("touchmove", r, !1),
          e.addEventListener("touchend", i, !1),
          e.addEventListener("touchcancel", i, !1);
        var s = function () {
          e.removeEventListener("touchmove", r),
            e.removeEventListener("touchend", i),
            e.removeEventListener("touchcancel", i);
        };
      } else
        u.show(t, e),
          o &&
            (e.addEventListener("touchend", u.hide, !1),
            e.addEventListener("touchcancel", u.hide, !1)),
          e.addEventListener("mouseup", u.hide, !1),
          e.addEventListener("mouseleave", u.hide, !1);
    }
  }
  (t.attach = function (t, e) {
    var o, a;
    (t = i(t)),
      "[object Array]" === n.call(e) && (e = e.join(" ")),
      (e = e ? " " + e : "");
    for (var r = 0, s = t.length; r < s; r++)
      (a = (o = t[r]).tagName.toLowerCase()),
        -1 !== ["input", "img"].indexOf(a) && (c[a](o), (o = o.parentElement)),
        -1 === o.className.indexOf("waves-effect") &&
          (o.className += " waves-effect" + e);
  }),
    (t.ripple = function (t, e) {
      var n = (t = i(t)).length;
      if (
        (((e = e || {}).wait = e.wait || 0),
        (e.position = e.position || null),
        n)
      )
        for (
          var o,
            a,
            s,
            c = {},
            l = 0,
            d = {
              type: "mousedown",
              button: 1,
            },
            f = function (t, e) {
              return function () {
                u.hide(t, e);
              };
            };
          l < n;
          l++
        )
          if (
            ((o = t[l]),
            (a = e.position || {
              x: o.clientWidth / 2,
              y: o.clientHeight / 2,
            }),
            (s = r(o)),
            (c.x = s.left + a.x),
            (c.y = s.top + a.y),
            (d.pageX = c.x),
            (d.pageY = c.y),
            u.show(d, o),
            e.wait >= 0 && null !== e.wait)
          ) {
            setTimeout(
              f(
                {
                  type: "mouseup",
                  button: 1,
                },
                o
              ),
              e.wait
            );
          }
    }),
    (t.calm = function (t) {
      for (
        var e = {
            type: "mouseup",
            button: 1,
          },
          n = 0,
          o = (t = i(t)).length;
        n < o;
        n++
      )
        u.hide(e, t[n]);
    }),
    (t.displayEffect = function (e) {
      console.error(
        "Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"
      ),
        t.init(e);
    }),
    t;
});
