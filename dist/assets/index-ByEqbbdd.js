(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === 'childList')
        for (const c of s.addedNodes)
          c.tagName === 'LINK' && c.rel === 'modulepreload' && i(c);
  }).observe(document, {childList: !0, subtree: !0});
  function r(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = r(o);
    fetch(o.href, s);
  }
})();
function Vv(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, 'default')
    ? a.default
    : a;
}
var Af = {exports: {}},
  fa = {},
  Uf = {exports: {}},
  He = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jm;
function Hv() {
  if (Jm) return He;
  Jm = 1;
  var a = Symbol.for('react.element'),
    n = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    i = Symbol.for('react.strict_mode'),
    o = Symbol.for('react.profiler'),
    s = Symbol.for('react.provider'),
    c = Symbol.for('react.context'),
    f = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
    g = Symbol.for('react.lazy'),
    x = Symbol.iterator;
  function v(M) {
    return M === null || typeof M != 'object'
      ? null
      : ((M = (x && M[x]) || M['@@iterator']),
        typeof M == 'function' ? M : null);
  }
  var y = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    w = {};
  function C(M, K, xe) {
    (this.props = M),
      (this.context = K),
      (this.refs = w),
      (this.updater = xe || y);
  }
  (C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (M, K) {
      if (typeof M != 'object' && typeof M != 'function' && M != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, M, K, 'setState');
    }),
    (C.prototype.forceUpdate = function (M) {
      this.updater.enqueueForceUpdate(this, M, 'forceUpdate');
    });
  function P() {}
  P.prototype = C.prototype;
  function z(M, K, xe) {
    (this.props = M),
      (this.context = K),
      (this.refs = w),
      (this.updater = xe || y);
  }
  var I = (z.prototype = new P());
  (I.constructor = z), S(I, C.prototype), (I.isPureReactComponent = !0);
  var F = Array.isArray,
    k = Object.prototype.hasOwnProperty,
    $ = {current: null},
    U = {key: !0, ref: !0, __self: !0, __source: !0};
  function H(M, K, xe) {
    var he,
      ke = {},
      Ne = null,
      Me = null;
    if (K != null)
      for (he in (K.ref !== void 0 && (Me = K.ref),
      K.key !== void 0 && (Ne = '' + K.key),
      K))
        k.call(K, he) && !U.hasOwnProperty(he) && (ke[he] = K[he]);
    var Oe = arguments.length - 2;
    if (Oe === 1) ke.children = xe;
    else if (1 < Oe) {
      for (var Ee = Array(Oe), rt = 0; rt < Oe; rt++)
        Ee[rt] = arguments[rt + 2];
      ke.children = Ee;
    }
    if (M && M.defaultProps)
      for (he in ((Oe = M.defaultProps), Oe))
        ke[he] === void 0 && (ke[he] = Oe[he]);
    return {
      $$typeof: a,
      type: M,
      key: Ne,
      ref: Me,
      props: ke,
      _owner: $.current,
    };
  }
  function X(M, K) {
    return {
      $$typeof: a,
      type: M.type,
      key: K,
      ref: M.ref,
      props: M.props,
      _owner: M._owner,
    };
  }
  function G(M) {
    return typeof M == 'object' && M !== null && M.$$typeof === a;
  }
  function me(M) {
    var K = {'=': '=0', ':': '=2'};
    return (
      '$' +
      M.replace(/[=:]/g, function (xe) {
        return K[xe];
      })
    );
  }
  var le = /\/+/g;
  function Se(M, K) {
    return typeof M == 'object' && M !== null && M.key != null
      ? me('' + M.key)
      : K.toString(36);
  }
  function Pe(M, K, xe, he, ke) {
    var Ne = typeof M;
    (Ne === 'undefined' || Ne === 'boolean') && (M = null);
    var Me = !1;
    if (M === null) Me = !0;
    else
      switch (Ne) {
        case 'string':
        case 'number':
          Me = !0;
          break;
        case 'object':
          switch (M.$$typeof) {
            case a:
            case n:
              Me = !0;
          }
      }
    if (Me)
      return (
        (Me = M),
        (ke = ke(Me)),
        (M = he === '' ? '.' + Se(Me, 0) : he),
        F(ke)
          ? ((xe = ''),
            M != null && (xe = M.replace(le, '$&/') + '/'),
            Pe(ke, K, xe, '', function (rt) {
              return rt;
            }))
          : ke != null &&
            (G(ke) &&
              (ke = X(
                ke,
                xe +
                  (!ke.key || (Me && Me.key === ke.key)
                    ? ''
                    : ('' + ke.key).replace(le, '$&/') + '/') +
                  M
              )),
            K.push(ke)),
        1
      );
    if (((Me = 0), (he = he === '' ? '.' : he + ':'), F(M)))
      for (var Oe = 0; Oe < M.length; Oe++) {
        Ne = M[Oe];
        var Ee = he + Se(Ne, Oe);
        Me += Pe(Ne, K, xe, Ee, ke);
      }
    else if (((Ee = v(M)), typeof Ee == 'function'))
      for (M = Ee.call(M), Oe = 0; !(Ne = M.next()).done; )
        (Ne = Ne.value),
          (Ee = he + Se(Ne, Oe++)),
          (Me += Pe(Ne, K, xe, Ee, ke));
    else if (Ne === 'object')
      throw (
        ((K = String(M)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (K === '[object Object]'
              ? 'object with keys {' + Object.keys(M).join(', ') + '}'
              : K) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    return Me;
  }
  function ge(M, K, xe) {
    if (M == null) return M;
    var he = [],
      ke = 0;
    return (
      Pe(M, he, '', '', function (Ne) {
        return K.call(xe, Ne, ke++);
      }),
      he
    );
  }
  function Te(M) {
    if (M._status === -1) {
      var K = M._result;
      (K = K()),
        K.then(
          function (xe) {
            (M._status === 0 || M._status === -1) &&
              ((M._status = 1), (M._result = xe));
          },
          function (xe) {
            (M._status === 0 || M._status === -1) &&
              ((M._status = 2), (M._result = xe));
          }
        ),
        M._status === -1 && ((M._status = 0), (M._result = K));
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var ue = {current: null},
    J = {transition: null},
    ae = {
      ReactCurrentDispatcher: ue,
      ReactCurrentBatchConfig: J,
      ReactCurrentOwner: $,
    };
  function T() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (He.Children = {
      map: ge,
      forEach: function (M, K, xe) {
        ge(
          M,
          function () {
            K.apply(this, arguments);
          },
          xe
        );
      },
      count: function (M) {
        var K = 0;
        return (
          ge(M, function () {
            K++;
          }),
          K
        );
      },
      toArray: function (M) {
        return (
          ge(M, function (K) {
            return K;
          }) || []
        );
      },
      only: function (M) {
        if (!G(M))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return M;
      },
    }),
    (He.Component = C),
    (He.Fragment = r),
    (He.Profiler = o),
    (He.PureComponent = z),
    (He.StrictMode = i),
    (He.Suspense = h),
    (He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae),
    (He.act = T),
    (He.cloneElement = function (M, K, xe) {
      if (M == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            M +
            '.'
        );
      var he = S({}, M.props),
        ke = M.key,
        Ne = M.ref,
        Me = M._owner;
      if (K != null) {
        if (
          (K.ref !== void 0 && ((Ne = K.ref), (Me = $.current)),
          K.key !== void 0 && (ke = '' + K.key),
          M.type && M.type.defaultProps)
        )
          var Oe = M.type.defaultProps;
        for (Ee in K)
          k.call(K, Ee) &&
            !U.hasOwnProperty(Ee) &&
            (he[Ee] = K[Ee] === void 0 && Oe !== void 0 ? Oe[Ee] : K[Ee]);
      }
      var Ee = arguments.length - 2;
      if (Ee === 1) he.children = xe;
      else if (1 < Ee) {
        Oe = Array(Ee);
        for (var rt = 0; rt < Ee; rt++) Oe[rt] = arguments[rt + 2];
        he.children = Oe;
      }
      return {
        $$typeof: a,
        type: M.type,
        key: ke,
        ref: Ne,
        props: he,
        _owner: Me,
      };
    }),
    (He.createContext = function (M) {
      return (
        (M = {
          $$typeof: c,
          _currentValue: M,
          _currentValue2: M,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (M.Provider = {$$typeof: s, _context: M}),
        (M.Consumer = M)
      );
    }),
    (He.createElement = H),
    (He.createFactory = function (M) {
      var K = H.bind(null, M);
      return (K.type = M), K;
    }),
    (He.createRef = function () {
      return {current: null};
    }),
    (He.forwardRef = function (M) {
      return {$$typeof: f, render: M};
    }),
    (He.isValidElement = G),
    (He.lazy = function (M) {
      return {$$typeof: g, _payload: {_status: -1, _result: M}, _init: Te};
    }),
    (He.memo = function (M, K) {
      return {$$typeof: m, type: M, compare: K === void 0 ? null : K};
    }),
    (He.startTransition = function (M) {
      var K = J.transition;
      J.transition = {};
      try {
        M();
      } finally {
        J.transition = K;
      }
    }),
    (He.unstable_act = T),
    (He.useCallback = function (M, K) {
      return ue.current.useCallback(M, K);
    }),
    (He.useContext = function (M) {
      return ue.current.useContext(M);
    }),
    (He.useDebugValue = function () {}),
    (He.useDeferredValue = function (M) {
      return ue.current.useDeferredValue(M);
    }),
    (He.useEffect = function (M, K) {
      return ue.current.useEffect(M, K);
    }),
    (He.useId = function () {
      return ue.current.useId();
    }),
    (He.useImperativeHandle = function (M, K, xe) {
      return ue.current.useImperativeHandle(M, K, xe);
    }),
    (He.useInsertionEffect = function (M, K) {
      return ue.current.useInsertionEffect(M, K);
    }),
    (He.useLayoutEffect = function (M, K) {
      return ue.current.useLayoutEffect(M, K);
    }),
    (He.useMemo = function (M, K) {
      return ue.current.useMemo(M, K);
    }),
    (He.useReducer = function (M, K, xe) {
      return ue.current.useReducer(M, K, xe);
    }),
    (He.useRef = function (M) {
      return ue.current.useRef(M);
    }),
    (He.useState = function (M) {
      return ue.current.useState(M);
    }),
    (He.useSyncExternalStore = function (M, K, xe) {
      return ue.current.useSyncExternalStore(M, K, xe);
    }),
    (He.useTransition = function () {
      return ue.current.useTransition();
    }),
    (He.version = '18.3.1'),
    He
  );
}
var Zm;
function Vd() {
  return Zm || ((Zm = 1), (Uf.exports = Hv())), Uf.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eg;
function Wv() {
  if (eg) return fa;
  eg = 1;
  var a = Vd(),
    n = Symbol.for('react.element'),
    r = Symbol.for('react.fragment'),
    i = Object.prototype.hasOwnProperty,
    o = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    s = {key: !0, ref: !0, __self: !0, __source: !0};
  function c(f, h, m) {
    var g,
      x = {},
      v = null,
      y = null;
    m !== void 0 && (v = '' + m),
      h.key !== void 0 && (v = '' + h.key),
      h.ref !== void 0 && (y = h.ref);
    for (g in h) i.call(h, g) && !s.hasOwnProperty(g) && (x[g] = h[g]);
    if (f && f.defaultProps)
      for (g in ((h = f.defaultProps), h)) x[g] === void 0 && (x[g] = h[g]);
    return {$$typeof: n, type: f, key: v, ref: y, props: x, _owner: o.current};
  }
  return (fa.Fragment = r), (fa.jsx = c), (fa.jsxs = c), fa;
}
var tg;
function Yv() {
  return tg || ((tg = 1), (Af.exports = Wv())), Af.exports;
}
var O = Yv(),
  Y = Vd();
const Ki = Vv(Y);
var iu = {},
  bf = {exports: {}},
  Qn = {},
  $f = {exports: {}},
  Bf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ng;
function Xv() {
  return (
    ng ||
      ((ng = 1),
      (function (a) {
        function n(J, ae) {
          var T = J.length;
          J.push(ae);
          e: for (; 0 < T; ) {
            var M = (T - 1) >>> 1,
              K = J[M];
            if (0 < o(K, ae)) (J[M] = ae), (J[T] = K), (T = M);
            else break e;
          }
        }
        function r(J) {
          return J.length === 0 ? null : J[0];
        }
        function i(J) {
          if (J.length === 0) return null;
          var ae = J[0],
            T = J.pop();
          if (T !== ae) {
            J[0] = T;
            e: for (var M = 0, K = J.length, xe = K >>> 1; M < xe; ) {
              var he = 2 * (M + 1) - 1,
                ke = J[he],
                Ne = he + 1,
                Me = J[Ne];
              if (0 > o(ke, T))
                Ne < K && 0 > o(Me, ke)
                  ? ((J[M] = Me), (J[Ne] = T), (M = Ne))
                  : ((J[M] = ke), (J[he] = T), (M = he));
              else if (Ne < K && 0 > o(Me, T))
                (J[M] = Me), (J[Ne] = T), (M = Ne);
              else break e;
            }
          }
          return ae;
        }
        function o(J, ae) {
          var T = J.sortIndex - ae.sortIndex;
          return T !== 0 ? T : J.id - ae.id;
        }
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var s = performance;
          a.unstable_now = function () {
            return s.now();
          };
        } else {
          var c = Date,
            f = c.now();
          a.unstable_now = function () {
            return c.now() - f;
          };
        }
        var h = [],
          m = [],
          g = 1,
          x = null,
          v = 3,
          y = !1,
          S = !1,
          w = !1,
          C = typeof setTimeout == 'function' ? setTimeout : null,
          P = typeof clearTimeout == 'function' ? clearTimeout : null,
          z = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function I(J) {
          for (var ae = r(m); ae !== null; ) {
            if (ae.callback === null) i(m);
            else if (ae.startTime <= J)
              i(m), (ae.sortIndex = ae.expirationTime), n(h, ae);
            else break;
            ae = r(m);
          }
        }
        function F(J) {
          if (((w = !1), I(J), !S))
            if (r(h) !== null) (S = !0), Te(k);
            else {
              var ae = r(m);
              ae !== null && ue(F, ae.startTime - J);
            }
        }
        function k(J, ae) {
          (S = !1), w && ((w = !1), P(H), (H = -1)), (y = !0);
          var T = v;
          try {
            for (
              I(ae), x = r(h);
              x !== null && (!(x.expirationTime > ae) || (J && !me()));

            ) {
              var M = x.callback;
              if (typeof M == 'function') {
                (x.callback = null), (v = x.priorityLevel);
                var K = M(x.expirationTime <= ae);
                (ae = a.unstable_now()),
                  typeof K == 'function'
                    ? (x.callback = K)
                    : x === r(h) && i(h),
                  I(ae);
              } else i(h);
              x = r(h);
            }
            if (x !== null) var xe = !0;
            else {
              var he = r(m);
              he !== null && ue(F, he.startTime - ae), (xe = !1);
            }
            return xe;
          } finally {
            (x = null), (v = T), (y = !1);
          }
        }
        var $ = !1,
          U = null,
          H = -1,
          X = 5,
          G = -1;
        function me() {
          return !(a.unstable_now() - G < X);
        }
        function le() {
          if (U !== null) {
            var J = a.unstable_now();
            G = J;
            var ae = !0;
            try {
              ae = U(!0, J);
            } finally {
              ae ? Se() : (($ = !1), (U = null));
            }
          } else $ = !1;
        }
        var Se;
        if (typeof z == 'function')
          Se = function () {
            z(le);
          };
        else if (typeof MessageChannel < 'u') {
          var Pe = new MessageChannel(),
            ge = Pe.port2;
          (Pe.port1.onmessage = le),
            (Se = function () {
              ge.postMessage(null);
            });
        } else
          Se = function () {
            C(le, 0);
          };
        function Te(J) {
          (U = J), $ || (($ = !0), Se());
        }
        function ue(J, ae) {
          H = C(function () {
            J(a.unstable_now());
          }, ae);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (J) {
            J.callback = null;
          }),
          (a.unstable_continueExecution = function () {
            S || y || ((S = !0), Te(k));
          }),
          (a.unstable_forceFrameRate = function (J) {
            0 > J || 125 < J
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (X = 0 < J ? Math.floor(1e3 / J) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return v;
          }),
          (a.unstable_getFirstCallbackNode = function () {
            return r(h);
          }),
          (a.unstable_next = function (J) {
            switch (v) {
              case 1:
              case 2:
              case 3:
                var ae = 3;
                break;
              default:
                ae = v;
            }
            var T = v;
            v = ae;
            try {
              return J();
            } finally {
              v = T;
            }
          }),
          (a.unstable_pauseExecution = function () {}),
          (a.unstable_requestPaint = function () {}),
          (a.unstable_runWithPriority = function (J, ae) {
            switch (J) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                J = 3;
            }
            var T = v;
            v = J;
            try {
              return ae();
            } finally {
              v = T;
            }
          }),
          (a.unstable_scheduleCallback = function (J, ae, T) {
            var M = a.unstable_now();
            switch (
              (typeof T == 'object' && T !== null
                ? ((T = T.delay),
                  (T = typeof T == 'number' && 0 < T ? M + T : M))
                : (T = M),
              J)
            ) {
              case 1:
                var K = -1;
                break;
              case 2:
                K = 250;
                break;
              case 5:
                K = 1073741823;
                break;
              case 4:
                K = 1e4;
                break;
              default:
                K = 5e3;
            }
            return (
              (K = T + K),
              (J = {
                id: g++,
                callback: ae,
                priorityLevel: J,
                startTime: T,
                expirationTime: K,
                sortIndex: -1,
              }),
              T > M
                ? ((J.sortIndex = T),
                  n(m, J),
                  r(h) === null &&
                    J === r(m) &&
                    (w ? (P(H), (H = -1)) : (w = !0), ue(F, T - M)))
                : ((J.sortIndex = K), n(h, J), S || y || ((S = !0), Te(k))),
              J
            );
          }),
          (a.unstable_shouldYield = me),
          (a.unstable_wrapCallback = function (J) {
            var ae = v;
            return function () {
              var T = v;
              v = ae;
              try {
                return J.apply(this, arguments);
              } finally {
                v = T;
              }
            };
          });
      })(Bf)),
    Bf
  );
}
var rg;
function Qv() {
  return rg || ((rg = 1), ($f.exports = Xv())), $f.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ig;
function Kv() {
  if (ig) return Qn;
  ig = 1;
  var a = Vd(),
    n = Qv();
  function r(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        l = 1;
      l < arguments.length;
      l++
    )
      t += '&args[]=' + encodeURIComponent(arguments[l]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var i = new Set(),
    o = {};
  function s(e, t) {
    c(e, t), c(e + 'Capture', t);
  }
  function c(e, t) {
    for (o[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
  }
  var f = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    h = Object.prototype.hasOwnProperty,
    m =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    x = {};
  function v(e) {
    return h.call(x, e)
      ? !0
      : h.call(g, e)
        ? !1
        : m.test(e)
          ? (x[e] = !0)
          : ((g[e] = !0), !1);
  }
  function y(e, t, l, u) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return u
          ? !1
          : l !== null
            ? !l.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function S(e, t, l, u) {
    if (t === null || typeof t > 'u' || y(e, t, l, u)) return !0;
    if (u) return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function w(e, t, l, u, d, p, _) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = u),
      (this.attributeNamespace = d),
      (this.mustUseProperty = l),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = p),
      (this.removeEmptyString = _);
  }
  var C = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      C[e] = new w(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      C[t] = new w(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
      function (e) {
        C[e] = new w(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }
    ),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      C[e] = new w(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        C[e] = new w(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      C[e] = new w(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      C[e] = new w(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      C[e] = new w(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      C[e] = new w(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var P = /[\-:]([a-z])/g;
  function z(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(P, z);
      C[t] = new w(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(P, z);
        C[t] = new w(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(P, z);
      C[t] = new w(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      C[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (C.xlinkHref = new w(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      C[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function I(e, t, l, u) {
    var d = C.hasOwnProperty(t) ? C[t] : null;
    (d !== null
      ? d.type !== 0
      : u ||
        !(2 < t.length) ||
        (t[0] !== 'o' && t[0] !== 'O') ||
        (t[1] !== 'n' && t[1] !== 'N')) &&
      (S(t, l, d, u) && (l = null),
      u || d === null
        ? v(t) &&
          (l === null ? e.removeAttribute(t) : e.setAttribute(t, '' + l))
        : d.mustUseProperty
          ? (e[d.propertyName] = l === null ? (d.type === 3 ? !1 : '') : l)
          : ((t = d.attributeName),
            (u = d.attributeNamespace),
            l === null
              ? e.removeAttribute(t)
              : ((d = d.type),
                (l = d === 3 || (d === 4 && l === !0) ? '' : '' + l),
                u ? e.setAttributeNS(u, t, l) : e.setAttribute(t, l))));
  }
  var F = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    k = Symbol.for('react.element'),
    $ = Symbol.for('react.portal'),
    U = Symbol.for('react.fragment'),
    H = Symbol.for('react.strict_mode'),
    X = Symbol.for('react.profiler'),
    G = Symbol.for('react.provider'),
    me = Symbol.for('react.context'),
    le = Symbol.for('react.forward_ref'),
    Se = Symbol.for('react.suspense'),
    Pe = Symbol.for('react.suspense_list'),
    ge = Symbol.for('react.memo'),
    Te = Symbol.for('react.lazy'),
    ue = Symbol.for('react.offscreen'),
    J = Symbol.iterator;
  function ae(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (J && e[J]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var T = Object.assign,
    M;
  function K(e) {
    if (M === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        M = (t && t[1]) || '';
      }
    return (
      `
` +
      M +
      e
    );
  }
  var xe = !1;
  function he(e, t) {
    if (!e || xe) return '';
    xe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (B) {
            var u = B;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (B) {
            u = B;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (B) {
          u = B;
        }
        e();
      }
    } catch (B) {
      if (B && u && typeof B.stack == 'string') {
        for (
          var d = B.stack.split(`
`),
            p = u.stack.split(`
`),
            _ = d.length - 1,
            E = p.length - 1;
          1 <= _ && 0 <= E && d[_] !== p[E];

        )
          E--;
        for (; 1 <= _ && 0 <= E; _--, E--)
          if (d[_] !== p[E]) {
            if (_ !== 1 || E !== 1)
              do
                if ((_--, E--, 0 > E || d[_] !== p[E])) {
                  var N =
                    `
` + d[_].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      N.includes('<anonymous>') &&
                      (N = N.replace('<anonymous>', e.displayName)),
                    N
                  );
                }
              while (1 <= _ && 0 <= E);
            break;
          }
      }
    } finally {
      (xe = !1), (Error.prepareStackTrace = l);
    }
    return (e = e ? e.displayName || e.name : '') ? K(e) : '';
  }
  function ke(e) {
    switch (e.tag) {
      case 5:
        return K(e.type);
      case 16:
        return K('Lazy');
      case 13:
        return K('Suspense');
      case 19:
        return K('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = he(e.type, !1)), e;
      case 11:
        return (e = he(e.type.render, !1)), e;
      case 1:
        return (e = he(e.type, !0)), e;
      default:
        return '';
    }
  }
  function Ne(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case U:
        return 'Fragment';
      case $:
        return 'Portal';
      case X:
        return 'Profiler';
      case H:
        return 'StrictMode';
      case Se:
        return 'Suspense';
      case Pe:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case me:
          return (e.displayName || 'Context') + '.Consumer';
        case G:
          return (e._context.displayName || 'Context') + '.Provider';
        case le:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case ge:
          return (
            (t = e.displayName || null), t !== null ? t : Ne(e.type) || 'Memo'
          );
        case Te:
          (t = e._payload), (e = e._init);
          try {
            return Ne(e(t));
          } catch {}
      }
    return null;
  }
  function Me(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return Ne(t);
      case 8:
        return t === H ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function Oe(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Ee(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function rt(e) {
    var t = Ee(e) ? 'checked' : 'value',
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      u = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof l < 'u' &&
      typeof l.get == 'function' &&
      typeof l.set == 'function'
    ) {
      var d = l.get,
        p = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return d.call(this);
          },
          set: function (_) {
            (u = '' + _), p.call(this, _);
          },
        }),
        Object.defineProperty(e, t, {enumerable: l.enumerable}),
        {
          getValue: function () {
            return u;
          },
          setValue: function (_) {
            u = '' + _;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function yt(e) {
    e._valueTracker || (e._valueTracker = rt(e));
  }
  function At(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      u = '';
    return (
      e && (u = Ee(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = u),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function ze(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ot(e, t) {
    var l = t.checked;
    return T({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: l ?? e._wrapperState.initialChecked,
    });
  }
  function Ut(e, t) {
    var l = t.defaultValue == null ? '' : t.defaultValue,
      u = t.checked != null ? t.checked : t.defaultChecked;
    (l = Oe(t.value != null ? t.value : l)),
      (e._wrapperState = {
        initialChecked: u,
        initialValue: l,
        controlled:
          t.type === 'checkbox' || t.type === 'radio'
            ? t.checked != null
            : t.value != null,
      });
  }
  function bt(e, t) {
    (t = t.checked), t != null && I(e, 'checked', t, !1);
  }
  function W(e, t) {
    bt(e, t);
    var l = Oe(t.value),
      u = t.type;
    if (l != null)
      u === 'number'
        ? ((l === 0 && e.value === '') || e.value != l) && (e.value = '' + l)
        : e.value !== '' + l && (e.value = '' + l);
    else if (u === 'submit' || u === 'reset') {
      e.removeAttribute('value');
      return;
    }
    t.hasOwnProperty('value')
      ? wn(e, t.type, l)
      : t.hasOwnProperty('defaultValue') && wn(e, t.type, Oe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Qt(e, t, l) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var u = t.type;
      if (
        !(
          (u !== 'submit' && u !== 'reset') ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = '' + e._wrapperState.initialValue),
        l || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (l = e.name),
      l !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      l !== '' && (e.name = l);
  }
  function wn(e, t, l) {
    (t !== 'number' || ze(e.ownerDocument) !== e) &&
      (l == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + l && (e.defaultValue = '' + l));
  }
  var cn = Array.isArray;
  function Xe(e, t, l, u) {
    if (((e = e.options), t)) {
      t = {};
      for (var d = 0; d < l.length; d++) t['$' + l[d]] = !0;
      for (l = 0; l < e.length; l++)
        (d = t.hasOwnProperty('$' + e[l].value)),
          e[l].selected !== d && (e[l].selected = d),
          d && u && (e[l].defaultSelected = !0);
    } else {
      for (l = '' + Oe(l), t = null, d = 0; d < e.length; d++) {
        if (e[d].value === l) {
          (e[d].selected = !0), u && (e[d].defaultSelected = !0);
          return;
        }
        t !== null || e[d].disabled || (t = e[d]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function $t(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
    return T({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Fn(e, t) {
    var l = t.value;
    if (l == null) {
      if (((l = t.children), (t = t.defaultValue), l != null)) {
        if (t != null) throw Error(r(92));
        if (cn(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        t = l;
      }
      t == null && (t = ''), (l = t);
    }
    e._wrapperState = {initialValue: Oe(l)};
  }
  function In(e, t) {
    var l = Oe(t.value),
      u = Oe(t.defaultValue);
    l != null &&
      ((l = '' + l),
      l !== e.value && (e.value = l),
      t.defaultValue == null && e.defaultValue !== l && (e.defaultValue = l)),
      u != null && (e.defaultValue = '' + u);
  }
  function et(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== '' &&
      t !== null &&
      (e.value = t);
  }
  function Pt(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function lt(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Pt(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Lt,
    nn = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, l, u, d) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, l, u, d);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
        e.innerHTML = t;
      else {
        for (
          Lt = Lt || document.createElement('div'),
            Lt.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Lt.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function pt(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var An = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    ft = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(An).forEach(function (e) {
    ft.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (An[t] = An[e]);
    });
  });
  function Hr(e, t, l) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : l || typeof t != 'number' || t === 0 || (An.hasOwnProperty(e) && An[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Un(e, t) {
    e = e.style;
    for (var l in t)
      if (t.hasOwnProperty(l)) {
        var u = l.indexOf('--') === 0,
          d = Hr(l, t[l], u);
        l === 'float' && (l = 'cssFloat'), u ? e.setProperty(l, d) : (e[l] = d);
      }
  }
  var Nr = T(
    {menuitem: !0},
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Sn(e, t) {
    if (t) {
      if (Nr[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(r(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(r(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(r(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(r(62));
    }
  }
  function kn(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var En = null;
  function Ae(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var bn = null,
    Ot = null,
    Rt = null;
  function Bt(e) {
    if ((e = Go(e))) {
      if (typeof bn != 'function') throw Error(r(280));
      var t = e.stateNode;
      t && ((t = vs(t)), bn(e.stateNode, e.type, t));
    }
  }
  function Cn(e) {
    Ot ? (Rt ? Rt.push(e) : (Rt = [e])) : (Ot = e);
  }
  function Mr() {
    if (Ot) {
      var e = Ot,
        t = Rt;
      if (((Rt = Ot = null), Bt(e), t)) for (e = 0; e < t.length; e++) Bt(t[e]);
    }
  }
  function $n(e, t) {
    return e(t);
  }
  function D() {}
  var R = !1;
  function j(e, t, l) {
    if (R) return e(t, l);
    R = !0;
    try {
      return $n(e, t, l);
    } finally {
      (R = !1), (Ot !== null || Rt !== null) && (D(), Mr());
    }
  }
  function Q(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var u = vs(l);
    if (u === null) return null;
    l = u[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (u = !u.disabled) ||
          ((e = e.type),
          (u = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !u);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != 'function') throw Error(r(231, t, typeof l));
    return l;
  }
  var V = !1;
  if (f)
    try {
      var ee = {};
      Object.defineProperty(ee, 'passive', {
        get: function () {
          V = !0;
        },
      }),
        window.addEventListener('test', ee, ee),
        window.removeEventListener('test', ee, ee);
    } catch {
      V = !1;
    }
  function re(e, t, l, u, d, p, _, E, N) {
    var B = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(l, B);
    } catch (ne) {
      this.onError(ne);
    }
  }
  var Z = !1,
    se = null,
    q = !1,
    fe = null,
    Ce = {
      onError: function (e) {
        (Z = !0), (se = e);
      },
    };
  function Le(e, t, l, u, d, p, _, E, N) {
    (Z = !1), (se = null), re.apply(Ce, arguments);
  }
  function Ie(e, t, l, u, d, p, _, E, N) {
    if ((Le.apply(this, arguments), Z)) {
      if (Z) {
        var B = se;
        (Z = !1), (se = null);
      } else throw Error(r(198));
      q || ((q = !0), (fe = B));
    }
  }
  function we(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (l = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function $e(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Fe(e) {
    if (we(e) !== e) throw Error(r(188));
  }
  function Et(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = we(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var l = e, u = t; ; ) {
      var d = l.return;
      if (d === null) break;
      var p = d.alternate;
      if (p === null) {
        if (((u = d.return), u !== null)) {
          l = u;
          continue;
        }
        break;
      }
      if (d.child === p.child) {
        for (p = d.child; p; ) {
          if (p === l) return Fe(d), e;
          if (p === u) return Fe(d), t;
          p = p.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== u.return) (l = d), (u = p);
      else {
        for (var _ = !1, E = d.child; E; ) {
          if (E === l) {
            (_ = !0), (l = d), (u = p);
            break;
          }
          if (E === u) {
            (_ = !0), (u = d), (l = p);
            break;
          }
          E = E.sibling;
        }
        if (!_) {
          for (E = p.child; E; ) {
            if (E === l) {
              (_ = !0), (l = p), (u = d);
              break;
            }
            if (E === u) {
              (_ = !0), (u = p), (l = d);
              break;
            }
            E = E.sibling;
          }
          if (!_) throw Error(r(189));
        }
      }
      if (l.alternate !== u) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? e : t;
  }
  function Vt(e) {
    return (e = Et(e)), e !== null ? tt(e) : null;
  }
  function tt(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = tt(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ze = n.unstable_scheduleCallback,
    _t = n.unstable_cancelCallback,
    Tn = n.unstable_shouldYield,
    Bn = n.unstable_requestPaint,
    Ue = n.unstable_now,
    st = n.unstable_getCurrentPriorityLevel,
    be = n.unstable_ImmediatePriority,
    vt = n.unstable_UserBlockingPriority,
    yr = n.unstable_NormalPriority,
    tr = n.unstable_LowPriority,
    Ge = n.unstable_IdlePriority,
    rn = null,
    Kt = null;
  function oi(e) {
    if (Kt && typeof Kt.onCommitFiberRoot == 'function')
      try {
        Kt.onCommitFiberRoot(rn, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Lr = Math.clz32 ? Math.clz32 : s_,
    o_ = Math.log,
    a_ = Math.LN2;
  function s_(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((o_(e) / a_) | 0)) | 0;
  }
  var ts = 64,
    ns = 4194304;
  function Lo(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function rs(e, t) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0,
      d = e.suspendedLanes,
      p = e.pingedLanes,
      _ = l & 268435455;
    if (_ !== 0) {
      var E = _ & ~d;
      E !== 0 ? (u = Lo(E)) : ((p &= _), p !== 0 && (u = Lo(p)));
    } else (_ = l & ~d), _ !== 0 ? (u = Lo(_)) : p !== 0 && (u = Lo(p));
    if (u === 0) return 0;
    if (
      t !== 0 &&
      t !== u &&
      !(t & d) &&
      ((d = u & -u), (p = t & -t), d >= p || (d === 16 && (p & 4194240) !== 0))
    )
      return t;
    if ((u & 4 && (u |= l & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= u; 0 < t; )
        (l = 31 - Lr(t)), (d = 1 << l), (u |= e[l]), (t &= ~d);
    return u;
  }
  function u_(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function c_(e, t) {
    for (
      var l = e.suspendedLanes,
        u = e.pingedLanes,
        d = e.expirationTimes,
        p = e.pendingLanes;
      0 < p;

    ) {
      var _ = 31 - Lr(p),
        E = 1 << _,
        N = d[_];
      N === -1
        ? (!(E & l) || E & u) && (d[_] = u_(E, t))
        : N <= t && (e.expiredLanes |= E),
        (p &= ~E);
    }
  }
  function ic(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Dh() {
    var e = ts;
    return (ts <<= 1), !(ts & 4194240) && (ts = 64), e;
  }
  function lc(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Oo(e, t, l) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Lr(t)),
      (e[t] = l);
  }
  function f_(e, t) {
    var l = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var u = e.eventTimes;
    for (e = e.expirationTimes; 0 < l; ) {
      var d = 31 - Lr(l),
        p = 1 << d;
      (t[d] = 0), (u[d] = -1), (e[d] = -1), (l &= ~p);
    }
  }
  function oc(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var u = 31 - Lr(l),
        d = 1 << u;
      (d & t) | (e[u] & t) && (e[u] |= t), (l &= ~d);
    }
  }
  var it = 0;
  function Nh(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Mh,
    ac,
    Lh,
    Oh,
    jh,
    sc = !1,
    is = [],
    Si = null,
    ki = null,
    Ei = null,
    jo = new Map(),
    zo = new Map(),
    Ci = [],
    d_ =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function zh(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Si = null;
        break;
      case 'dragenter':
      case 'dragleave':
        ki = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Ei = null;
        break;
      case 'pointerover':
      case 'pointerout':
        jo.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        zo.delete(t.pointerId);
    }
  }
  function Fo(e, t, l, u, d, p) {
    return e === null || e.nativeEvent !== p
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: u,
          nativeEvent: p,
          targetContainers: [d],
        }),
        t !== null && ((t = Go(t)), t !== null && ac(t)),
        e)
      : ((e.eventSystemFlags |= u),
        (t = e.targetContainers),
        d !== null && t.indexOf(d) === -1 && t.push(d),
        e);
  }
  function h_(e, t, l, u, d) {
    switch (t) {
      case 'focusin':
        return (Si = Fo(Si, e, t, l, u, d)), !0;
      case 'dragenter':
        return (ki = Fo(ki, e, t, l, u, d)), !0;
      case 'mouseover':
        return (Ei = Fo(Ei, e, t, l, u, d)), !0;
      case 'pointerover':
        var p = d.pointerId;
        return jo.set(p, Fo(jo.get(p) || null, e, t, l, u, d)), !0;
      case 'gotpointercapture':
        return (
          (p = d.pointerId), zo.set(p, Fo(zo.get(p) || null, e, t, l, u, d)), !0
        );
    }
    return !1;
  }
  function Fh(e) {
    var t = ol(e.target);
    if (t !== null) {
      var l = we(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = $e(l)), t !== null)) {
            (e.blockedOn = t),
              jh(e.priority, function () {
                Lh(l);
              });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ls(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = cc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var u = new l.constructor(l.type, l);
        (En = u), l.target.dispatchEvent(u), (En = null);
      } else return (t = Go(l)), t !== null && ac(t), (e.blockedOn = l), !1;
      t.shift();
    }
    return !0;
  }
  function Ih(e, t, l) {
    ls(e) && l.delete(t);
  }
  function p_() {
    (sc = !1),
      Si !== null && ls(Si) && (Si = null),
      ki !== null && ls(ki) && (ki = null),
      Ei !== null && ls(Ei) && (Ei = null),
      jo.forEach(Ih),
      zo.forEach(Ih);
  }
  function Io(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      sc ||
        ((sc = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, p_)));
  }
  function Ao(e) {
    function t(d) {
      return Io(d, e);
    }
    if (0 < is.length) {
      Io(is[0], e);
      for (var l = 1; l < is.length; l++) {
        var u = is[l];
        u.blockedOn === e && (u.blockedOn = null);
      }
    }
    for (
      Si !== null && Io(Si, e),
        ki !== null && Io(ki, e),
        Ei !== null && Io(Ei, e),
        jo.forEach(t),
        zo.forEach(t),
        l = 0;
      l < Ci.length;
      l++
    )
      (u = Ci[l]), u.blockedOn === e && (u.blockedOn = null);
    for (; 0 < Ci.length && ((l = Ci[0]), l.blockedOn === null); )
      Fh(l), l.blockedOn === null && Ci.shift();
  }
  var $l = F.ReactCurrentBatchConfig,
    os = !0;
  function m_(e, t, l, u) {
    var d = it,
      p = $l.transition;
    $l.transition = null;
    try {
      (it = 1), uc(e, t, l, u);
    } finally {
      (it = d), ($l.transition = p);
    }
  }
  function g_(e, t, l, u) {
    var d = it,
      p = $l.transition;
    $l.transition = null;
    try {
      (it = 4), uc(e, t, l, u);
    } finally {
      (it = d), ($l.transition = p);
    }
  }
  function uc(e, t, l, u) {
    if (os) {
      var d = cc(e, t, l, u);
      if (d === null) Pc(e, t, u, as, l), zh(e, u);
      else if (h_(d, e, t, l, u)) u.stopPropagation();
      else if ((zh(e, u), t & 4 && -1 < d_.indexOf(e))) {
        for (; d !== null; ) {
          var p = Go(d);
          if (
            (p !== null && Mh(p),
            (p = cc(e, t, l, u)),
            p === null && Pc(e, t, u, as, l),
            p === d)
          )
            break;
          d = p;
        }
        d !== null && u.stopPropagation();
      } else Pc(e, t, u, null, l);
    }
  }
  var as = null;
  function cc(e, t, l, u) {
    if (((as = null), (e = Ae(u)), (e = ol(e)), e !== null))
      if (((t = we(e)), t === null)) e = null;
      else if (((l = t.tag), l === 13)) {
        if (((e = $e(t)), e !== null)) return e;
        e = null;
      } else if (l === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (as = e), null;
  }
  function Ah(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (st()) {
          case be:
            return 1;
          case vt:
            return 4;
          case yr:
          case tr:
            return 16;
          case Ge:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ti = null,
    fc = null,
    ss = null;
  function Uh() {
    if (ss) return ss;
    var e,
      t = fc,
      l = t.length,
      u,
      d = 'value' in Ti ? Ti.value : Ti.textContent,
      p = d.length;
    for (e = 0; e < l && t[e] === d[e]; e++);
    var _ = l - e;
    for (u = 1; u <= _ && t[l - u] === d[p - u]; u++);
    return (ss = d.slice(e, 1 < u ? 1 - u : void 0));
  }
  function us(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function cs() {
    return !0;
  }
  function bh() {
    return !1;
  }
  function nr(e) {
    function t(l, u, d, p, _) {
      (this._reactName = l),
        (this._targetInst = d),
        (this.type = u),
        (this.nativeEvent = p),
        (this.target = _),
        (this.currentTarget = null);
      for (var E in e)
        e.hasOwnProperty(E) && ((l = e[E]), (this[E] = l ? l(p) : p[E]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? cs
          : bh),
        (this.isPropagationStopped = bh),
        this
      );
    }
    return (
      T(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = cs));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = cs));
        },
        persist: function () {},
        isPersistent: cs,
      }),
      t
    );
  }
  var Bl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    dc = nr(Bl),
    Uo = T({}, Bl, {view: 0, detail: 0}),
    y_ = nr(Uo),
    hc,
    pc,
    bo,
    fs = T({}, Uo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: gc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== bo &&
              (bo && e.type === 'mousemove'
                ? ((hc = e.screenX - bo.screenX), (pc = e.screenY - bo.screenY))
                : (pc = hc = 0),
              (bo = e)),
            hc);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : pc;
      },
    }),
    $h = nr(fs),
    __ = T({}, fs, {dataTransfer: 0}),
    v_ = nr(__),
    x_ = T({}, Uo, {relatedTarget: 0}),
    mc = nr(x_),
    w_ = T({}, Bl, {animationName: 0, elapsedTime: 0, pseudoElement: 0}),
    S_ = nr(w_),
    k_ = T({}, Bl, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    E_ = nr(k_),
    C_ = T({}, Bl, {data: 0}),
    Bh = nr(C_),
    T_ = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    P_ = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    R_ = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function D_(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = R_[e])
        ? !!t[e]
        : !1;
  }
  function gc() {
    return D_;
  }
  var N_ = T({}, Uo, {
      key: function (e) {
        if (e.key) {
          var t = T_[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = us(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? P_[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: gc,
      charCode: function (e) {
        return e.type === 'keypress' ? us(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? us(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    M_ = nr(N_),
    L_ = T({}, fs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Vh = nr(L_),
    O_ = T({}, Uo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: gc,
    }),
    j_ = nr(O_),
    z_ = T({}, Bl, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}),
    F_ = nr(z_),
    I_ = T({}, fs, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    A_ = nr(I_),
    U_ = [9, 13, 27, 32],
    yc = f && 'CompositionEvent' in window,
    $o = null;
  f && 'documentMode' in document && ($o = document.documentMode);
  var b_ = f && 'TextEvent' in window && !$o,
    Hh = f && (!yc || ($o && 8 < $o && 11 >= $o)),
    Wh = ' ',
    Yh = !1;
  function Xh(e, t) {
    switch (e) {
      case 'keyup':
        return U_.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Qh(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var Vl = !1;
  function $_(e, t) {
    switch (e) {
      case 'compositionend':
        return Qh(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Yh = !0), Wh);
      case 'textInput':
        return (e = t.data), e === Wh && Yh ? null : e;
      default:
        return null;
    }
  }
  function B_(e, t) {
    if (Vl)
      return e === 'compositionend' || (!yc && Xh(e, t))
        ? ((e = Uh()), (ss = fc = Ti = null), (Vl = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Hh && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var V_ = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Kh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!V_[e.type] : t === 'textarea';
  }
  function Gh(e, t, l, u) {
    Cn(u),
      (t = gs(t, 'onChange')),
      0 < t.length &&
        ((l = new dc('onChange', 'change', null, l, u)),
        e.push({event: l, listeners: t}));
  }
  var Bo = null,
    Vo = null;
  function H_(e) {
    pp(e, 0);
  }
  function ds(e) {
    var t = Ql(e);
    if (At(t)) return e;
  }
  function W_(e, t) {
    if (e === 'change') return t;
  }
  var qh = !1;
  if (f) {
    var _c;
    if (f) {
      var vc = 'oninput' in document;
      if (!vc) {
        var Jh = document.createElement('div');
        Jh.setAttribute('oninput', 'return;'),
          (vc = typeof Jh.oninput == 'function');
      }
      _c = vc;
    } else _c = !1;
    qh = _c && (!document.documentMode || 9 < document.documentMode);
  }
  function Zh() {
    Bo && (Bo.detachEvent('onpropertychange', ep), (Vo = Bo = null));
  }
  function ep(e) {
    if (e.propertyName === 'value' && ds(Vo)) {
      var t = [];
      Gh(t, Vo, e, Ae(e)), j(H_, t);
    }
  }
  function Y_(e, t, l) {
    e === 'focusin'
      ? (Zh(), (Bo = t), (Vo = l), Bo.attachEvent('onpropertychange', ep))
      : e === 'focusout' && Zh();
  }
  function X_(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return ds(Vo);
  }
  function Q_(e, t) {
    if (e === 'click') return ds(t);
  }
  function K_(e, t) {
    if (e === 'input' || e === 'change') return ds(t);
  }
  function G_(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Or = typeof Object.is == 'function' ? Object.is : G_;
  function Ho(e, t) {
    if (Or(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      u = Object.keys(t);
    if (l.length !== u.length) return !1;
    for (u = 0; u < l.length; u++) {
      var d = l[u];
      if (!h.call(t, d) || !Or(e[d], t[d])) return !1;
    }
    return !0;
  }
  function tp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function np(e, t) {
    var l = tp(e);
    e = 0;
    for (var u; l; ) {
      if (l.nodeType === 3) {
        if (((u = e + l.textContent.length), e <= t && u >= t))
          return {node: l, offset: t - e};
        e = u;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = tp(l);
    }
  }
  function rp(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? rp(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ip() {
    for (var e = window, t = ze(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = ze(e.document);
    }
    return t;
  }
  function xc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function q_(e) {
    var t = ip(),
      l = e.focusedElem,
      u = e.selectionRange;
    if (
      t !== l &&
      l &&
      l.ownerDocument &&
      rp(l.ownerDocument.documentElement, l)
    ) {
      if (u !== null && xc(l)) {
        if (
          ((t = u.start),
          (e = u.end),
          e === void 0 && (e = t),
          'selectionStart' in l)
        )
          (l.selectionStart = t),
            (l.selectionEnd = Math.min(e, l.value.length));
        else if (
          ((e = ((t = l.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var d = l.textContent.length,
            p = Math.min(u.start, d);
          (u = u.end === void 0 ? p : Math.min(u.end, d)),
            !e.extend && p > u && ((d = u), (u = p), (p = d)),
            (d = np(l, p));
          var _ = np(l, u);
          d &&
            _ &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== d.node ||
              e.anchorOffset !== d.offset ||
              e.focusNode !== _.node ||
              e.focusOffset !== _.offset) &&
            ((t = t.createRange()),
            t.setStart(d.node, d.offset),
            e.removeAllRanges(),
            p > u
              ? (e.addRange(t), e.extend(_.node, _.offset))
              : (t.setEnd(_.node, _.offset), e.addRange(t)));
        }
      }
      for (t = [], e = l; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({element: e, left: e.scrollLeft, top: e.scrollTop});
      for (typeof l.focus == 'function' && l.focus(), l = 0; l < t.length; l++)
        (e = t[l]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var J_ = f && 'documentMode' in document && 11 >= document.documentMode,
    Hl = null,
    wc = null,
    Wo = null,
    Sc = !1;
  function lp(e, t, l) {
    var u =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Sc ||
      Hl == null ||
      Hl !== ze(u) ||
      ((u = Hl),
      'selectionStart' in u && xc(u)
        ? (u = {start: u.selectionStart, end: u.selectionEnd})
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Wo && Ho(Wo, u)) ||
        ((Wo = u),
        (u = gs(wc, 'onSelect')),
        0 < u.length &&
          ((t = new dc('onSelect', 'select', null, t, l)),
          e.push({event: t, listeners: u}),
          (t.target = Hl))));
  }
  function hs(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l['Webkit' + e] = 'webkit' + t),
      (l['Moz' + e] = 'moz' + t),
      l
    );
  }
  var Wl = {
      animationend: hs('Animation', 'AnimationEnd'),
      animationiteration: hs('Animation', 'AnimationIteration'),
      animationstart: hs('Animation', 'AnimationStart'),
      transitionend: hs('Transition', 'TransitionEnd'),
    },
    kc = {},
    op = {};
  f &&
    ((op = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Wl.animationend.animation,
      delete Wl.animationiteration.animation,
      delete Wl.animationstart.animation),
    'TransitionEvent' in window || delete Wl.transitionend.transition);
  function ps(e) {
    if (kc[e]) return kc[e];
    if (!Wl[e]) return e;
    var t = Wl[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in op) return (kc[e] = t[l]);
    return e;
  }
  var ap = ps('animationend'),
    sp = ps('animationiteration'),
    up = ps('animationstart'),
    cp = ps('transitionend'),
    fp = new Map(),
    dp =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Pi(e, t) {
    fp.set(e, t), s(t, [e]);
  }
  for (var Ec = 0; Ec < dp.length; Ec++) {
    var Cc = dp[Ec],
      Z_ = Cc.toLowerCase(),
      ev = Cc[0].toUpperCase() + Cc.slice(1);
    Pi(Z_, 'on' + ev);
  }
  Pi(ap, 'onAnimationEnd'),
    Pi(sp, 'onAnimationIteration'),
    Pi(up, 'onAnimationStart'),
    Pi('dblclick', 'onDoubleClick'),
    Pi('focusin', 'onFocus'),
    Pi('focusout', 'onBlur'),
    Pi(cp, 'onTransitionEnd'),
    c('onMouseEnter', ['mouseout', 'mouseover']),
    c('onMouseLeave', ['mouseout', 'mouseover']),
    c('onPointerEnter', ['pointerout', 'pointerover']),
    c('onPointerLeave', ['pointerout', 'pointerover']),
    s(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    s(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    s('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    s(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    s(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    s(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    );
  var Yo =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    tv = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(Yo)
    );
  function hp(e, t, l) {
    var u = e.type || 'unknown-event';
    (e.currentTarget = l), Ie(u, t, void 0, e), (e.currentTarget = null);
  }
  function pp(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var u = e[l],
        d = u.event;
      u = u.listeners;
      e: {
        var p = void 0;
        if (t)
          for (var _ = u.length - 1; 0 <= _; _--) {
            var E = u[_],
              N = E.instance,
              B = E.currentTarget;
            if (((E = E.listener), N !== p && d.isPropagationStopped()))
              break e;
            hp(d, E, B), (p = N);
          }
        else
          for (_ = 0; _ < u.length; _++) {
            if (
              ((E = u[_]),
              (N = E.instance),
              (B = E.currentTarget),
              (E = E.listener),
              N !== p && d.isPropagationStopped())
            )
              break e;
            hp(d, E, B), (p = N);
          }
      }
    }
    if (q) throw ((e = fe), (q = !1), (fe = null), e);
  }
  function dt(e, t) {
    var l = t[Oc];
    l === void 0 && (l = t[Oc] = new Set());
    var u = e + '__bubble';
    l.has(u) || (mp(t, e, 2, !1), l.add(u));
  }
  function Tc(e, t, l) {
    var u = 0;
    t && (u |= 4), mp(l, e, u, t);
  }
  var ms = '_reactListening' + Math.random().toString(36).slice(2);
  function Xo(e) {
    if (!e[ms]) {
      (e[ms] = !0),
        i.forEach(function (l) {
          l !== 'selectionchange' && (tv.has(l) || Tc(l, !1, e), Tc(l, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ms] || ((t[ms] = !0), Tc('selectionchange', !1, t));
    }
  }
  function mp(e, t, l, u) {
    switch (Ah(t)) {
      case 1:
        var d = m_;
        break;
      case 4:
        d = g_;
        break;
      default:
        d = uc;
    }
    (l = d.bind(null, t, l, e)),
      (d = void 0),
      !V ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (d = !0),
      u
        ? d !== void 0
          ? e.addEventListener(t, l, {capture: !0, passive: d})
          : e.addEventListener(t, l, !0)
        : d !== void 0
          ? e.addEventListener(t, l, {passive: d})
          : e.addEventListener(t, l, !1);
  }
  function Pc(e, t, l, u, d) {
    var p = u;
    if (!(t & 1) && !(t & 2) && u !== null)
      e: for (;;) {
        if (u === null) return;
        var _ = u.tag;
        if (_ === 3 || _ === 4) {
          var E = u.stateNode.containerInfo;
          if (E === d || (E.nodeType === 8 && E.parentNode === d)) break;
          if (_ === 4)
            for (_ = u.return; _ !== null; ) {
              var N = _.tag;
              if (
                (N === 3 || N === 4) &&
                ((N = _.stateNode.containerInfo),
                N === d || (N.nodeType === 8 && N.parentNode === d))
              )
                return;
              _ = _.return;
            }
          for (; E !== null; ) {
            if (((_ = ol(E)), _ === null)) return;
            if (((N = _.tag), N === 5 || N === 6)) {
              u = p = _;
              continue e;
            }
            E = E.parentNode;
          }
        }
        u = u.return;
      }
    j(function () {
      var B = p,
        ne = Ae(l),
        ie = [];
      e: {
        var te = fp.get(e);
        if (te !== void 0) {
          var ce = dc,
            ye = e;
          switch (e) {
            case 'keypress':
              if (us(l) === 0) break e;
            case 'keydown':
            case 'keyup':
              ce = M_;
              break;
            case 'focusin':
              (ye = 'focus'), (ce = mc);
              break;
            case 'focusout':
              (ye = 'blur'), (ce = mc);
              break;
            case 'beforeblur':
            case 'afterblur':
              ce = mc;
              break;
            case 'click':
              if (l.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              ce = $h;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              ce = v_;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              ce = j_;
              break;
            case ap:
            case sp:
            case up:
              ce = S_;
              break;
            case cp:
              ce = F_;
              break;
            case 'scroll':
              ce = y_;
              break;
            case 'wheel':
              ce = A_;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              ce = E_;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              ce = Vh;
          }
          var _e = (t & 4) !== 0,
            Dt = !_e && e === 'scroll',
            A = _e ? (te !== null ? te + 'Capture' : null) : te;
          _e = [];
          for (var L = B, b; L !== null; ) {
            b = L;
            var oe = b.stateNode;
            if (
              (b.tag === 5 &&
                oe !== null &&
                ((b = oe),
                A !== null &&
                  ((oe = Q(L, A)), oe != null && _e.push(Qo(L, oe, b)))),
              Dt)
            )
              break;
            L = L.return;
          }
          0 < _e.length &&
            ((te = new ce(te, ye, null, l, ne)),
            ie.push({event: te, listeners: _e}));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((te = e === 'mouseover' || e === 'pointerover'),
            (ce = e === 'mouseout' || e === 'pointerout'),
            te &&
              l !== En &&
              (ye = l.relatedTarget || l.fromElement) &&
              (ol(ye) || ye[ai]))
          )
            break e;
          if (
            (ce || te) &&
            ((te =
              ne.window === ne
                ? ne
                : (te = ne.ownerDocument)
                  ? te.defaultView || te.parentWindow
                  : window),
            ce
              ? ((ye = l.relatedTarget || l.toElement),
                (ce = B),
                (ye = ye ? ol(ye) : null),
                ye !== null &&
                  ((Dt = we(ye)),
                  ye !== Dt || (ye.tag !== 5 && ye.tag !== 6)) &&
                  (ye = null))
              : ((ce = null), (ye = B)),
            ce !== ye)
          ) {
            if (
              ((_e = $h),
              (oe = 'onMouseLeave'),
              (A = 'onMouseEnter'),
              (L = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((_e = Vh),
                (oe = 'onPointerLeave'),
                (A = 'onPointerEnter'),
                (L = 'pointer')),
              (Dt = ce == null ? te : Ql(ce)),
              (b = ye == null ? te : Ql(ye)),
              (te = new _e(oe, L + 'leave', ce, l, ne)),
              (te.target = Dt),
              (te.relatedTarget = b),
              (oe = null),
              ol(ne) === B &&
                ((_e = new _e(A, L + 'enter', ye, l, ne)),
                (_e.target = b),
                (_e.relatedTarget = Dt),
                (oe = _e)),
              (Dt = oe),
              ce && ye)
            )
              t: {
                for (_e = ce, A = ye, L = 0, b = _e; b; b = Yl(b)) L++;
                for (b = 0, oe = A; oe; oe = Yl(oe)) b++;
                for (; 0 < L - b; ) (_e = Yl(_e)), L--;
                for (; 0 < b - L; ) (A = Yl(A)), b--;
                for (; L--; ) {
                  if (_e === A || (A !== null && _e === A.alternate)) break t;
                  (_e = Yl(_e)), (A = Yl(A));
                }
                _e = null;
              }
            else _e = null;
            ce !== null && gp(ie, te, ce, _e, !1),
              ye !== null && Dt !== null && gp(ie, Dt, ye, _e, !0);
          }
        }
        e: {
          if (
            ((te = B ? Ql(B) : window),
            (ce = te.nodeName && te.nodeName.toLowerCase()),
            ce === 'select' || (ce === 'input' && te.type === 'file'))
          )
            var ve = W_;
          else if (Kh(te))
            if (qh) ve = K_;
            else {
              ve = X_;
              var Re = Y_;
            }
          else
            (ce = te.nodeName) &&
              ce.toLowerCase() === 'input' &&
              (te.type === 'checkbox' || te.type === 'radio') &&
              (ve = Q_);
          if (ve && (ve = ve(e, B))) {
            Gh(ie, ve, l, ne);
            break e;
          }
          Re && Re(e, te, B),
            e === 'focusout' &&
              (Re = te._wrapperState) &&
              Re.controlled &&
              te.type === 'number' &&
              wn(te, 'number', te.value);
        }
        switch (((Re = B ? Ql(B) : window), e)) {
          case 'focusin':
            (Kh(Re) || Re.contentEditable === 'true') &&
              ((Hl = Re), (wc = B), (Wo = null));
            break;
          case 'focusout':
            Wo = wc = Hl = null;
            break;
          case 'mousedown':
            Sc = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Sc = !1), lp(ie, l, ne);
            break;
          case 'selectionchange':
            if (J_) break;
          case 'keydown':
          case 'keyup':
            lp(ie, l, ne);
        }
        var De;
        if (yc)
          e: {
            switch (e) {
              case 'compositionstart':
                var je = 'onCompositionStart';
                break e;
              case 'compositionend':
                je = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                je = 'onCompositionUpdate';
                break e;
            }
            je = void 0;
          }
        else
          Vl
            ? Xh(e, l) && (je = 'onCompositionEnd')
            : e === 'keydown' &&
              l.keyCode === 229 &&
              (je = 'onCompositionStart');
        je &&
          (Hh &&
            l.locale !== 'ko' &&
            (Vl || je !== 'onCompositionStart'
              ? je === 'onCompositionEnd' && Vl && (De = Uh())
              : ((Ti = ne),
                (fc = 'value' in Ti ? Ti.value : Ti.textContent),
                (Vl = !0))),
          (Re = gs(B, je)),
          0 < Re.length &&
            ((je = new Bh(je, e, null, l, ne)),
            ie.push({event: je, listeners: Re}),
            De
              ? (je.data = De)
              : ((De = Qh(l)), De !== null && (je.data = De)))),
          (De = b_ ? $_(e, l) : B_(e, l)) &&
            ((B = gs(B, 'onBeforeInput')),
            0 < B.length &&
              ((ne = new Bh('onBeforeInput', 'beforeinput', null, l, ne)),
              ie.push({event: ne, listeners: B}),
              (ne.data = De)));
      }
      pp(ie, t);
    });
  }
  function Qo(e, t, l) {
    return {instance: e, listener: t, currentTarget: l};
  }
  function gs(e, t) {
    for (var l = t + 'Capture', u = []; e !== null; ) {
      var d = e,
        p = d.stateNode;
      d.tag === 5 &&
        p !== null &&
        ((d = p),
        (p = Q(e, l)),
        p != null && u.unshift(Qo(e, p, d)),
        (p = Q(e, t)),
        p != null && u.push(Qo(e, p, d))),
        (e = e.return);
    }
    return u;
  }
  function Yl(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function gp(e, t, l, u, d) {
    for (var p = t._reactName, _ = []; l !== null && l !== u; ) {
      var E = l,
        N = E.alternate,
        B = E.stateNode;
      if (N !== null && N === u) break;
      E.tag === 5 &&
        B !== null &&
        ((E = B),
        d
          ? ((N = Q(l, p)), N != null && _.unshift(Qo(l, N, E)))
          : d || ((N = Q(l, p)), N != null && _.push(Qo(l, N, E)))),
        (l = l.return);
    }
    _.length !== 0 && e.push({event: t, listeners: _});
  }
  var nv = /\r\n?/g,
    rv = /\u0000|\uFFFD/g;
  function yp(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        nv,
        `
`
      )
      .replace(rv, '');
  }
  function ys(e, t, l) {
    if (((t = yp(t)), yp(e) !== t && l)) throw Error(r(425));
  }
  function _s() {}
  var Rc = null,
    Dc = null;
  function Nc(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Mc = typeof setTimeout == 'function' ? setTimeout : void 0,
    iv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    _p = typeof Promise == 'function' ? Promise : void 0,
    lv =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof _p < 'u'
          ? function (e) {
              return _p.resolve(null).then(e).catch(ov);
            }
          : Mc;
  function ov(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Lc(e, t) {
    var l = t,
      u = 0;
    do {
      var d = l.nextSibling;
      if ((e.removeChild(l), d && d.nodeType === 8))
        if (((l = d.data), l === '/$')) {
          if (u === 0) {
            e.removeChild(d), Ao(t);
            return;
          }
          u--;
        } else (l !== '$' && l !== '$?' && l !== '$!') || u++;
      l = d;
    } while (l);
    Ao(t);
  }
  function Ri(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function vp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === '$' || l === '$!' || l === '$?') {
          if (t === 0) return e;
          t--;
        } else l === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Xl = Math.random().toString(36).slice(2),
    Wr = '__reactFiber$' + Xl,
    Ko = '__reactProps$' + Xl,
    ai = '__reactContainer$' + Xl,
    Oc = '__reactEvents$' + Xl,
    av = '__reactListeners$' + Xl,
    sv = '__reactHandles$' + Xl;
  function ol(e) {
    var t = e[Wr];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[ai] || l[Wr])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = vp(e); e !== null; ) {
            if ((l = e[Wr])) return l;
            e = vp(e);
          }
        return t;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function Go(e) {
    return (
      (e = e[Wr] || e[ai]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Ql(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(r(33));
  }
  function vs(e) {
    return e[Ko] || null;
  }
  var jc = [],
    Kl = -1;
  function Di(e) {
    return {current: e};
  }
  function ht(e) {
    0 > Kl || ((e.current = jc[Kl]), (jc[Kl] = null), Kl--);
  }
  function ut(e, t) {
    Kl++, (jc[Kl] = e.current), (e.current = t);
  }
  var Ni = {},
    fn = Di(Ni),
    Vn = Di(!1),
    al = Ni;
  function Gl(e, t) {
    var l = e.type.contextTypes;
    if (!l) return Ni;
    var u = e.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
      return u.__reactInternalMemoizedMaskedChildContext;
    var d = {},
      p;
    for (p in l) d[p] = t[p];
    return (
      u &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = d)),
      d
    );
  }
  function Hn(e) {
    return (e = e.childContextTypes), e != null;
  }
  function xs() {
    ht(Vn), ht(fn);
  }
  function xp(e, t, l) {
    if (fn.current !== Ni) throw Error(r(168));
    ut(fn, t), ut(Vn, l);
  }
  function wp(e, t, l) {
    var u = e.stateNode;
    if (((t = t.childContextTypes), typeof u.getChildContext != 'function'))
      return l;
    u = u.getChildContext();
    for (var d in u) if (!(d in t)) throw Error(r(108, Me(e) || 'Unknown', d));
    return T({}, l, u);
  }
  function ws(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ni),
      (al = fn.current),
      ut(fn, e),
      ut(Vn, Vn.current),
      !0
    );
  }
  function Sp(e, t, l) {
    var u = e.stateNode;
    if (!u) throw Error(r(169));
    l
      ? ((e = wp(e, t, al)),
        (u.__reactInternalMemoizedMergedChildContext = e),
        ht(Vn),
        ht(fn),
        ut(fn, e))
      : ht(Vn),
      ut(Vn, l);
  }
  var si = null,
    Ss = !1,
    zc = !1;
  function kp(e) {
    si === null ? (si = [e]) : si.push(e);
  }
  function uv(e) {
    (Ss = !0), kp(e);
  }
  function Mi() {
    if (!zc && si !== null) {
      zc = !0;
      var e = 0,
        t = it;
      try {
        var l = si;
        for (it = 1; e < l.length; e++) {
          var u = l[e];
          do u = u(!0);
          while (u !== null);
        }
        (si = null), (Ss = !1);
      } catch (d) {
        throw (si !== null && (si = si.slice(e + 1)), Ze(be, Mi), d);
      } finally {
        (it = t), (zc = !1);
      }
    }
    return null;
  }
  var ql = [],
    Jl = 0,
    ks = null,
    Es = 0,
    _r = [],
    vr = 0,
    sl = null,
    ui = 1,
    ci = '';
  function ul(e, t) {
    (ql[Jl++] = Es), (ql[Jl++] = ks), (ks = e), (Es = t);
  }
  function Ep(e, t, l) {
    (_r[vr++] = ui), (_r[vr++] = ci), (_r[vr++] = sl), (sl = e);
    var u = ui;
    e = ci;
    var d = 32 - Lr(u) - 1;
    (u &= ~(1 << d)), (l += 1);
    var p = 32 - Lr(t) + d;
    if (30 < p) {
      var _ = d - (d % 5);
      (p = (u & ((1 << _) - 1)).toString(32)),
        (u >>= _),
        (d -= _),
        (ui = (1 << (32 - Lr(t) + d)) | (l << d) | u),
        (ci = p + e);
    } else (ui = (1 << p) | (l << d) | u), (ci = e);
  }
  function Fc(e) {
    e.return !== null && (ul(e, 1), Ep(e, 1, 0));
  }
  function Ic(e) {
    for (; e === ks; )
      (ks = ql[--Jl]), (ql[Jl] = null), (Es = ql[--Jl]), (ql[Jl] = null);
    for (; e === sl; )
      (sl = _r[--vr]),
        (_r[vr] = null),
        (ci = _r[--vr]),
        (_r[vr] = null),
        (ui = _r[--vr]),
        (_r[vr] = null);
  }
  var rr = null,
    ir = null,
    mt = !1,
    jr = null;
  function Cp(e, t) {
    var l = kr(5, null, null, 0);
    (l.elementType = 'DELETED'),
      (l.stateNode = t),
      (l.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [l]), (e.flags |= 16)) : t.push(l);
  }
  function Tp(e, t) {
    switch (e.tag) {
      case 5:
        var l = e.type;
        return (
          (t =
            t.nodeType !== 1 || l.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (rr = e), (ir = Ri(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (rr = e), (ir = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((l = sl !== null ? {id: ui, overflow: ci} : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: l,
                retryLane: 1073741824,
              }),
              (l = kr(18, null, null, 0)),
              (l.stateNode = t),
              (l.return = e),
              (e.child = l),
              (rr = e),
              (ir = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ac(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Uc(e) {
    if (mt) {
      var t = ir;
      if (t) {
        var l = t;
        if (!Tp(e, t)) {
          if (Ac(e)) throw Error(r(418));
          t = Ri(l.nextSibling);
          var u = rr;
          t && Tp(e, t)
            ? Cp(u, l)
            : ((e.flags = (e.flags & -4097) | 2), (mt = !1), (rr = e));
        }
      } else {
        if (Ac(e)) throw Error(r(418));
        (e.flags = (e.flags & -4097) | 2), (mt = !1), (rr = e);
      }
    }
  }
  function Pp(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    rr = e;
  }
  function Cs(e) {
    if (e !== rr) return !1;
    if (!mt) return Pp(e), (mt = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== 'head' && t !== 'body' && !Nc(e.type, e.memoizedProps))),
      t && (t = ir))
    ) {
      if (Ac(e)) throw (Rp(), Error(r(418)));
      for (; t; ) Cp(e, t), (t = Ri(t.nextSibling));
    }
    if ((Pp(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var l = e.data;
            if (l === '/$') {
              if (t === 0) {
                ir = Ri(e.nextSibling);
                break e;
              }
              t--;
            } else (l !== '$' && l !== '$!' && l !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        ir = null;
      }
    } else ir = rr ? Ri(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Rp() {
    for (var e = ir; e; ) e = Ri(e.nextSibling);
  }
  function Zl() {
    (ir = rr = null), (mt = !1);
  }
  function bc(e) {
    jr === null ? (jr = [e]) : jr.push(e);
  }
  var cv = F.ReactCurrentBatchConfig;
  function qo(e, t, l) {
    if (
      ((e = l.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (l._owner) {
        if (((l = l._owner), l)) {
          if (l.tag !== 1) throw Error(r(309));
          var u = l.stateNode;
        }
        if (!u) throw Error(r(147, e));
        var d = u,
          p = '' + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === p
          ? t.ref
          : ((t = function (_) {
              var E = d.refs;
              _ === null ? delete E[p] : (E[p] = _);
            }),
            (t._stringRef = p),
            t);
      }
      if (typeof e != 'string') throw Error(r(284));
      if (!l._owner) throw Error(r(290, e));
    }
    return e;
  }
  function Ts(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        r(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e
        )
      ))
    );
  }
  function Dp(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Np(e) {
    function t(A, L) {
      if (e) {
        var b = A.deletions;
        b === null ? ((A.deletions = [L]), (A.flags |= 16)) : b.push(L);
      }
    }
    function l(A, L) {
      if (!e) return null;
      for (; L !== null; ) t(A, L), (L = L.sibling);
      return null;
    }
    function u(A, L) {
      for (A = new Map(); L !== null; )
        L.key !== null ? A.set(L.key, L) : A.set(L.index, L), (L = L.sibling);
      return A;
    }
    function d(A, L) {
      return (A = Ui(A, L)), (A.index = 0), (A.sibling = null), A;
    }
    function p(A, L, b) {
      return (
        (A.index = b),
        e
          ? ((b = A.alternate),
            b !== null
              ? ((b = b.index), b < L ? ((A.flags |= 2), L) : b)
              : ((A.flags |= 2), L))
          : ((A.flags |= 1048576), L)
      );
    }
    function _(A) {
      return e && A.alternate === null && (A.flags |= 2), A;
    }
    function E(A, L, b, oe) {
      return L === null || L.tag !== 6
        ? ((L = Lf(b, A.mode, oe)), (L.return = A), L)
        : ((L = d(L, b)), (L.return = A), L);
    }
    function N(A, L, b, oe) {
      var ve = b.type;
      return ve === U
        ? ne(A, L, b.props.children, oe, b.key)
        : L !== null &&
            (L.elementType === ve ||
              (typeof ve == 'object' &&
                ve !== null &&
                ve.$$typeof === Te &&
                Dp(ve) === L.type))
          ? ((oe = d(L, b.props)), (oe.ref = qo(A, L, b)), (oe.return = A), oe)
          : ((oe = Gs(b.type, b.key, b.props, null, A.mode, oe)),
            (oe.ref = qo(A, L, b)),
            (oe.return = A),
            oe);
    }
    function B(A, L, b, oe) {
      return L === null ||
        L.tag !== 4 ||
        L.stateNode.containerInfo !== b.containerInfo ||
        L.stateNode.implementation !== b.implementation
        ? ((L = Of(b, A.mode, oe)), (L.return = A), L)
        : ((L = d(L, b.children || [])), (L.return = A), L);
    }
    function ne(A, L, b, oe, ve) {
      return L === null || L.tag !== 7
        ? ((L = yl(b, A.mode, oe, ve)), (L.return = A), L)
        : ((L = d(L, b)), (L.return = A), L);
    }
    function ie(A, L, b) {
      if ((typeof L == 'string' && L !== '') || typeof L == 'number')
        return (L = Lf('' + L, A.mode, b)), (L.return = A), L;
      if (typeof L == 'object' && L !== null) {
        switch (L.$$typeof) {
          case k:
            return (
              (b = Gs(L.type, L.key, L.props, null, A.mode, b)),
              (b.ref = qo(A, null, L)),
              (b.return = A),
              b
            );
          case $:
            return (L = Of(L, A.mode, b)), (L.return = A), L;
          case Te:
            var oe = L._init;
            return ie(A, oe(L._payload), b);
        }
        if (cn(L) || ae(L))
          return (L = yl(L, A.mode, b, null)), (L.return = A), L;
        Ts(A, L);
      }
      return null;
    }
    function te(A, L, b, oe) {
      var ve = L !== null ? L.key : null;
      if ((typeof b == 'string' && b !== '') || typeof b == 'number')
        return ve !== null ? null : E(A, L, '' + b, oe);
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case k:
            return b.key === ve ? N(A, L, b, oe) : null;
          case $:
            return b.key === ve ? B(A, L, b, oe) : null;
          case Te:
            return (ve = b._init), te(A, L, ve(b._payload), oe);
        }
        if (cn(b) || ae(b)) return ve !== null ? null : ne(A, L, b, oe, null);
        Ts(A, b);
      }
      return null;
    }
    function ce(A, L, b, oe, ve) {
      if ((typeof oe == 'string' && oe !== '') || typeof oe == 'number')
        return (A = A.get(b) || null), E(L, A, '' + oe, ve);
      if (typeof oe == 'object' && oe !== null) {
        switch (oe.$$typeof) {
          case k:
            return (
              (A = A.get(oe.key === null ? b : oe.key) || null), N(L, A, oe, ve)
            );
          case $:
            return (
              (A = A.get(oe.key === null ? b : oe.key) || null), B(L, A, oe, ve)
            );
          case Te:
            var Re = oe._init;
            return ce(A, L, b, Re(oe._payload), ve);
        }
        if (cn(oe) || ae(oe))
          return (A = A.get(b) || null), ne(L, A, oe, ve, null);
        Ts(L, oe);
      }
      return null;
    }
    function ye(A, L, b, oe) {
      for (
        var ve = null, Re = null, De = L, je = (L = 0), Jt = null;
        De !== null && je < b.length;
        je++
      ) {
        De.index > je ? ((Jt = De), (De = null)) : (Jt = De.sibling);
        var Je = te(A, De, b[je], oe);
        if (Je === null) {
          De === null && (De = Jt);
          break;
        }
        e && De && Je.alternate === null && t(A, De),
          (L = p(Je, L, je)),
          Re === null ? (ve = Je) : (Re.sibling = Je),
          (Re = Je),
          (De = Jt);
      }
      if (je === b.length) return l(A, De), mt && ul(A, je), ve;
      if (De === null) {
        for (; je < b.length; je++)
          (De = ie(A, b[je], oe)),
            De !== null &&
              ((L = p(De, L, je)),
              Re === null ? (ve = De) : (Re.sibling = De),
              (Re = De));
        return mt && ul(A, je), ve;
      }
      for (De = u(A, De); je < b.length; je++)
        (Jt = ce(De, A, je, b[je], oe)),
          Jt !== null &&
            (e &&
              Jt.alternate !== null &&
              De.delete(Jt.key === null ? je : Jt.key),
            (L = p(Jt, L, je)),
            Re === null ? (ve = Jt) : (Re.sibling = Jt),
            (Re = Jt));
      return (
        e &&
          De.forEach(function (bi) {
            return t(A, bi);
          }),
        mt && ul(A, je),
        ve
      );
    }
    function _e(A, L, b, oe) {
      var ve = ae(b);
      if (typeof ve != 'function') throw Error(r(150));
      if (((b = ve.call(b)), b == null)) throw Error(r(151));
      for (
        var Re = (ve = null), De = L, je = (L = 0), Jt = null, Je = b.next();
        De !== null && !Je.done;
        je++, Je = b.next()
      ) {
        De.index > je ? ((Jt = De), (De = null)) : (Jt = De.sibling);
        var bi = te(A, De, Je.value, oe);
        if (bi === null) {
          De === null && (De = Jt);
          break;
        }
        e && De && bi.alternate === null && t(A, De),
          (L = p(bi, L, je)),
          Re === null ? (ve = bi) : (Re.sibling = bi),
          (Re = bi),
          (De = Jt);
      }
      if (Je.done) return l(A, De), mt && ul(A, je), ve;
      if (De === null) {
        for (; !Je.done; je++, Je = b.next())
          (Je = ie(A, Je.value, oe)),
            Je !== null &&
              ((L = p(Je, L, je)),
              Re === null ? (ve = Je) : (Re.sibling = Je),
              (Re = Je));
        return mt && ul(A, je), ve;
      }
      for (De = u(A, De); !Je.done; je++, Je = b.next())
        (Je = ce(De, A, je, Je.value, oe)),
          Je !== null &&
            (e &&
              Je.alternate !== null &&
              De.delete(Je.key === null ? je : Je.key),
            (L = p(Je, L, je)),
            Re === null ? (ve = Je) : (Re.sibling = Je),
            (Re = Je));
      return (
        e &&
          De.forEach(function (Bv) {
            return t(A, Bv);
          }),
        mt && ul(A, je),
        ve
      );
    }
    function Dt(A, L, b, oe) {
      if (
        (typeof b == 'object' &&
          b !== null &&
          b.type === U &&
          b.key === null &&
          (b = b.props.children),
        typeof b == 'object' && b !== null)
      ) {
        switch (b.$$typeof) {
          case k:
            e: {
              for (var ve = b.key, Re = L; Re !== null; ) {
                if (Re.key === ve) {
                  if (((ve = b.type), ve === U)) {
                    if (Re.tag === 7) {
                      l(A, Re.sibling),
                        (L = d(Re, b.props.children)),
                        (L.return = A),
                        (A = L);
                      break e;
                    }
                  } else if (
                    Re.elementType === ve ||
                    (typeof ve == 'object' &&
                      ve !== null &&
                      ve.$$typeof === Te &&
                      Dp(ve) === Re.type)
                  ) {
                    l(A, Re.sibling),
                      (L = d(Re, b.props)),
                      (L.ref = qo(A, Re, b)),
                      (L.return = A),
                      (A = L);
                    break e;
                  }
                  l(A, Re);
                  break;
                } else t(A, Re);
                Re = Re.sibling;
              }
              b.type === U
                ? ((L = yl(b.props.children, A.mode, oe, b.key)),
                  (L.return = A),
                  (A = L))
                : ((oe = Gs(b.type, b.key, b.props, null, A.mode, oe)),
                  (oe.ref = qo(A, L, b)),
                  (oe.return = A),
                  (A = oe));
            }
            return _(A);
          case $:
            e: {
              for (Re = b.key; L !== null; ) {
                if (L.key === Re)
                  if (
                    L.tag === 4 &&
                    L.stateNode.containerInfo === b.containerInfo &&
                    L.stateNode.implementation === b.implementation
                  ) {
                    l(A, L.sibling),
                      (L = d(L, b.children || [])),
                      (L.return = A),
                      (A = L);
                    break e;
                  } else {
                    l(A, L);
                    break;
                  }
                else t(A, L);
                L = L.sibling;
              }
              (L = Of(b, A.mode, oe)), (L.return = A), (A = L);
            }
            return _(A);
          case Te:
            return (Re = b._init), Dt(A, L, Re(b._payload), oe);
        }
        if (cn(b)) return ye(A, L, b, oe);
        if (ae(b)) return _e(A, L, b, oe);
        Ts(A, b);
      }
      return (typeof b == 'string' && b !== '') || typeof b == 'number'
        ? ((b = '' + b),
          L !== null && L.tag === 6
            ? (l(A, L.sibling), (L = d(L, b)), (L.return = A), (A = L))
            : (l(A, L), (L = Lf(b, A.mode, oe)), (L.return = A), (A = L)),
          _(A))
        : l(A, L);
    }
    return Dt;
  }
  var eo = Np(!0),
    Mp = Np(!1),
    Ps = Di(null),
    Rs = null,
    to = null,
    $c = null;
  function Bc() {
    $c = to = Rs = null;
  }
  function Vc(e) {
    var t = Ps.current;
    ht(Ps), (e._currentValue = t);
  }
  function Hc(e, t, l) {
    for (; e !== null; ) {
      var u = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function no(e, t) {
    (Rs = e),
      ($c = to = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Wn = !0), (e.firstContext = null));
  }
  function xr(e) {
    var t = e._currentValue;
    if ($c !== e)
      if (((e = {context: e, memoizedValue: t, next: null}), to === null)) {
        if (Rs === null) throw Error(r(308));
        (to = e), (Rs.dependencies = {lanes: 0, firstContext: e});
      } else to = to.next = e;
    return t;
  }
  var cl = null;
  function Wc(e) {
    cl === null ? (cl = [e]) : cl.push(e);
  }
  function Lp(e, t, l, u) {
    var d = t.interleaved;
    return (
      d === null ? ((l.next = l), Wc(t)) : ((l.next = d.next), (d.next = l)),
      (t.interleaved = l),
      fi(e, u)
    );
  }
  function fi(e, t) {
    e.lanes |= t;
    var l = e.alternate;
    for (l !== null && (l.lanes |= t), l = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (l = e.alternate),
        l !== null && (l.childLanes |= t),
        (l = e),
        (e = e.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var Li = !1;
  function Yc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {pending: null, interleaved: null, lanes: 0},
      effects: null,
    };
  }
  function Op(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function di(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Oi(e, t, l) {
    var u = e.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), qe & 2)) {
      var d = u.pending;
      return (
        d === null ? (t.next = t) : ((t.next = d.next), (d.next = t)),
        (u.pending = t),
        fi(e, l)
      );
    }
    return (
      (d = u.interleaved),
      d === null ? ((t.next = t), Wc(u)) : ((t.next = d.next), (d.next = t)),
      (u.interleaved = t),
      fi(e, l)
    );
  }
  function Ds(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194240) !== 0))
    ) {
      var u = t.lanes;
      (u &= e.pendingLanes), (l |= u), (t.lanes = l), oc(e, l);
    }
  }
  function jp(e, t) {
    var l = e.updateQueue,
      u = e.alternate;
    if (u !== null && ((u = u.updateQueue), l === u)) {
      var d = null,
        p = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var _ = {
            eventTime: l.eventTime,
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: l.callback,
            next: null,
          };
          p === null ? (d = p = _) : (p = p.next = _), (l = l.next);
        } while (l !== null);
        p === null ? (d = p = t) : (p = p.next = t);
      } else d = p = t;
      (l = {
        baseState: u.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: p,
        shared: u.shared,
        effects: u.effects,
      }),
        (e.updateQueue = l);
      return;
    }
    (e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t);
  }
  function Ns(e, t, l, u) {
    var d = e.updateQueue;
    Li = !1;
    var p = d.firstBaseUpdate,
      _ = d.lastBaseUpdate,
      E = d.shared.pending;
    if (E !== null) {
      d.shared.pending = null;
      var N = E,
        B = N.next;
      (N.next = null), _ === null ? (p = B) : (_.next = B), (_ = N);
      var ne = e.alternate;
      ne !== null &&
        ((ne = ne.updateQueue),
        (E = ne.lastBaseUpdate),
        E !== _ &&
          (E === null ? (ne.firstBaseUpdate = B) : (E.next = B),
          (ne.lastBaseUpdate = N)));
    }
    if (p !== null) {
      var ie = d.baseState;
      (_ = 0), (ne = B = N = null), (E = p);
      do {
        var te = E.lane,
          ce = E.eventTime;
        if ((u & te) === te) {
          ne !== null &&
            (ne = ne.next =
              {
                eventTime: ce,
                lane: 0,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null,
              });
          e: {
            var ye = e,
              _e = E;
            switch (((te = t), (ce = l), _e.tag)) {
              case 1:
                if (((ye = _e.payload), typeof ye == 'function')) {
                  ie = ye.call(ce, ie, te);
                  break e;
                }
                ie = ye;
                break e;
              case 3:
                ye.flags = (ye.flags & -65537) | 128;
              case 0:
                if (
                  ((ye = _e.payload),
                  (te = typeof ye == 'function' ? ye.call(ce, ie, te) : ye),
                  te == null)
                )
                  break e;
                ie = T({}, ie, te);
                break e;
              case 2:
                Li = !0;
            }
          }
          E.callback !== null &&
            E.lane !== 0 &&
            ((e.flags |= 64),
            (te = d.effects),
            te === null ? (d.effects = [E]) : te.push(E));
        } else
          (ce = {
            eventTime: ce,
            lane: te,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null,
          }),
            ne === null ? ((B = ne = ce), (N = ie)) : (ne = ne.next = ce),
            (_ |= te);
        if (((E = E.next), E === null)) {
          if (((E = d.shared.pending), E === null)) break;
          (te = E),
            (E = te.next),
            (te.next = null),
            (d.lastBaseUpdate = te),
            (d.shared.pending = null);
        }
      } while (!0);
      if (
        (ne === null && (N = ie),
        (d.baseState = N),
        (d.firstBaseUpdate = B),
        (d.lastBaseUpdate = ne),
        (t = d.shared.interleaved),
        t !== null)
      ) {
        d = t;
        do (_ |= d.lane), (d = d.next);
        while (d !== t);
      } else p === null && (d.shared.lanes = 0);
      (hl |= _), (e.lanes = _), (e.memoizedState = ie);
    }
  }
  function zp(e, t, l) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var u = e[t],
          d = u.callback;
        if (d !== null) {
          if (((u.callback = null), (u = l), typeof d != 'function'))
            throw Error(r(191, d));
          d.call(u);
        }
      }
  }
  var Jo = {},
    Yr = Di(Jo),
    Zo = Di(Jo),
    ea = Di(Jo);
  function fl(e) {
    if (e === Jo) throw Error(r(174));
    return e;
  }
  function Xc(e, t) {
    switch ((ut(ea, t), ut(Zo, e), ut(Yr, Jo), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : lt(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = lt(t, e));
    }
    ht(Yr), ut(Yr, t);
  }
  function ro() {
    ht(Yr), ht(Zo), ht(ea);
  }
  function Fp(e) {
    fl(ea.current);
    var t = fl(Yr.current),
      l = lt(t, e.type);
    t !== l && (ut(Zo, e), ut(Yr, l));
  }
  function Qc(e) {
    Zo.current === e && (ht(Yr), ht(Zo));
  }
  var xt = Di(0);
  function Ms(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === '$?' || l.data === '$!')
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Kc = [];
  function Gc() {
    for (var e = 0; e < Kc.length; e++)
      Kc[e]._workInProgressVersionPrimary = null;
    Kc.length = 0;
  }
  var Ls = F.ReactCurrentDispatcher,
    qc = F.ReactCurrentBatchConfig,
    dl = 0,
    wt = null,
    Ht = null,
    Gt = null,
    Os = !1,
    ta = !1,
    na = 0,
    fv = 0;
  function dn() {
    throw Error(r(321));
  }
  function Jc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Or(e[l], t[l])) return !1;
    return !0;
  }
  function Zc(e, t, l, u, d, p) {
    if (
      ((dl = p),
      (wt = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ls.current = e === null || e.memoizedState === null ? mv : gv),
      (e = l(u, d)),
      ta)
    ) {
      p = 0;
      do {
        if (((ta = !1), (na = 0), 25 <= p)) throw Error(r(301));
        (p += 1),
          (Gt = Ht = null),
          (t.updateQueue = null),
          (Ls.current = yv),
          (e = l(u, d));
      } while (ta);
    }
    if (
      ((Ls.current = Fs),
      (t = Ht !== null && Ht.next !== null),
      (dl = 0),
      (Gt = Ht = wt = null),
      (Os = !1),
      t)
    )
      throw Error(r(300));
    return e;
  }
  function ef() {
    var e = na !== 0;
    return (na = 0), e;
  }
  function Xr() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Gt === null ? (wt.memoizedState = Gt = e) : (Gt = Gt.next = e), Gt;
  }
  function wr() {
    if (Ht === null) {
      var e = wt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ht.next;
    var t = Gt === null ? wt.memoizedState : Gt.next;
    if (t !== null) (Gt = t), (Ht = e);
    else {
      if (e === null) throw Error(r(310));
      (Ht = e),
        (e = {
          memoizedState: Ht.memoizedState,
          baseState: Ht.baseState,
          baseQueue: Ht.baseQueue,
          queue: Ht.queue,
          next: null,
        }),
        Gt === null ? (wt.memoizedState = Gt = e) : (Gt = Gt.next = e);
    }
    return Gt;
  }
  function ra(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function tf(e) {
    var t = wr(),
      l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = e;
    var u = Ht,
      d = u.baseQueue,
      p = l.pending;
    if (p !== null) {
      if (d !== null) {
        var _ = d.next;
        (d.next = p.next), (p.next = _);
      }
      (u.baseQueue = d = p), (l.pending = null);
    }
    if (d !== null) {
      (p = d.next), (u = u.baseState);
      var E = (_ = null),
        N = null,
        B = p;
      do {
        var ne = B.lane;
        if ((dl & ne) === ne)
          N !== null &&
            (N = N.next =
              {
                lane: 0,
                action: B.action,
                hasEagerState: B.hasEagerState,
                eagerState: B.eagerState,
                next: null,
              }),
            (u = B.hasEagerState ? B.eagerState : e(u, B.action));
        else {
          var ie = {
            lane: ne,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null,
          };
          N === null ? ((E = N = ie), (_ = u)) : (N = N.next = ie),
            (wt.lanes |= ne),
            (hl |= ne);
        }
        B = B.next;
      } while (B !== null && B !== p);
      N === null ? (_ = u) : (N.next = E),
        Or(u, t.memoizedState) || (Wn = !0),
        (t.memoizedState = u),
        (t.baseState = _),
        (t.baseQueue = N),
        (l.lastRenderedState = u);
    }
    if (((e = l.interleaved), e !== null)) {
      d = e;
      do (p = d.lane), (wt.lanes |= p), (hl |= p), (d = d.next);
      while (d !== e);
    } else d === null && (l.lanes = 0);
    return [t.memoizedState, l.dispatch];
  }
  function nf(e) {
    var t = wr(),
      l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = e;
    var u = l.dispatch,
      d = l.pending,
      p = t.memoizedState;
    if (d !== null) {
      l.pending = null;
      var _ = (d = d.next);
      do (p = e(p, _.action)), (_ = _.next);
      while (_ !== d);
      Or(p, t.memoizedState) || (Wn = !0),
        (t.memoizedState = p),
        t.baseQueue === null && (t.baseState = p),
        (l.lastRenderedState = p);
    }
    return [p, u];
  }
  function Ip() {}
  function Ap(e, t) {
    var l = wt,
      u = wr(),
      d = t(),
      p = !Or(u.memoizedState, d);
    if (
      (p && ((u.memoizedState = d), (Wn = !0)),
      (u = u.queue),
      rf($p.bind(null, l, u, e), [e]),
      u.getSnapshot !== t || p || (Gt !== null && Gt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        ia(9, bp.bind(null, l, u, d, t), void 0, null),
        qt === null)
      )
        throw Error(r(349));
      dl & 30 || Up(l, t, d);
    }
    return d;
  }
  function Up(e, t, l) {
    (e.flags |= 16384),
      (e = {getSnapshot: t, value: l}),
      (t = wt.updateQueue),
      t === null
        ? ((t = {lastEffect: null, stores: null}),
          (wt.updateQueue = t),
          (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
  }
  function bp(e, t, l, u) {
    (t.value = l), (t.getSnapshot = u), Bp(t) && Vp(e);
  }
  function $p(e, t, l) {
    return l(function () {
      Bp(t) && Vp(e);
    });
  }
  function Bp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Or(e, l);
    } catch {
      return !0;
    }
  }
  function Vp(e) {
    var t = fi(e, 1);
    t !== null && Ar(t, e, 1, -1);
  }
  function Hp(e) {
    var t = Xr();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ra,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = pv.bind(null, wt, e)),
      [t.memoizedState, e]
    );
  }
  function ia(e, t, l, u) {
    return (
      (e = {tag: e, create: t, destroy: l, deps: u, next: null}),
      (t = wt.updateQueue),
      t === null
        ? ((t = {lastEffect: null, stores: null}),
          (wt.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((l = t.lastEffect),
          l === null
            ? (t.lastEffect = e.next = e)
            : ((u = l.next), (l.next = e), (e.next = u), (t.lastEffect = e))),
      e
    );
  }
  function Wp() {
    return wr().memoizedState;
  }
  function js(e, t, l, u) {
    var d = Xr();
    (wt.flags |= e),
      (d.memoizedState = ia(1 | t, l, void 0, u === void 0 ? null : u));
  }
  function zs(e, t, l, u) {
    var d = wr();
    u = u === void 0 ? null : u;
    var p = void 0;
    if (Ht !== null) {
      var _ = Ht.memoizedState;
      if (((p = _.destroy), u !== null && Jc(u, _.deps))) {
        d.memoizedState = ia(t, l, p, u);
        return;
      }
    }
    (wt.flags |= e), (d.memoizedState = ia(1 | t, l, p, u));
  }
  function Yp(e, t) {
    return js(8390656, 8, e, t);
  }
  function rf(e, t) {
    return zs(2048, 8, e, t);
  }
  function Xp(e, t) {
    return zs(4, 2, e, t);
  }
  function Qp(e, t) {
    return zs(4, 4, e, t);
  }
  function Kp(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Gp(e, t, l) {
    return (
      (l = l != null ? l.concat([e]) : null), zs(4, 4, Kp.bind(null, t, e), l)
    );
  }
  function lf() {}
  function qp(e, t) {
    var l = wr();
    t = t === void 0 ? null : t;
    var u = l.memoizedState;
    return u !== null && t !== null && Jc(t, u[1])
      ? u[0]
      : ((l.memoizedState = [e, t]), e);
  }
  function Jp(e, t) {
    var l = wr();
    t = t === void 0 ? null : t;
    var u = l.memoizedState;
    return u !== null && t !== null && Jc(t, u[1])
      ? u[0]
      : ((e = e()), (l.memoizedState = [e, t]), e);
  }
  function Zp(e, t, l) {
    return dl & 21
      ? (Or(l, t) ||
          ((l = Dh()), (wt.lanes |= l), (hl |= l), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Wn = !0)), (e.memoizedState = l));
  }
  function dv(e, t) {
    var l = it;
    (it = l !== 0 && 4 > l ? l : 4), e(!0);
    var u = qc.transition;
    qc.transition = {};
    try {
      e(!1), t();
    } finally {
      (it = l), (qc.transition = u);
    }
  }
  function em() {
    return wr().memoizedState;
  }
  function hv(e, t, l) {
    var u = Ii(e);
    if (
      ((l = {
        lane: u,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      tm(e))
    )
      nm(t, l);
    else if (((l = Lp(e, t, l, u)), l !== null)) {
      var d = Rn();
      Ar(l, e, u, d), rm(l, t, u);
    }
  }
  function pv(e, t, l) {
    var u = Ii(e),
      d = {lane: u, action: l, hasEagerState: !1, eagerState: null, next: null};
    if (tm(e)) nm(t, d);
    else {
      var p = e.alternate;
      if (
        e.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = t.lastRenderedReducer), p !== null)
      )
        try {
          var _ = t.lastRenderedState,
            E = p(_, l);
          if (((d.hasEagerState = !0), (d.eagerState = E), Or(E, _))) {
            var N = t.interleaved;
            N === null
              ? ((d.next = d), Wc(t))
              : ((d.next = N.next), (N.next = d)),
              (t.interleaved = d);
            return;
          }
        } catch {
        } finally {
        }
      (l = Lp(e, t, d, u)),
        l !== null && ((d = Rn()), Ar(l, e, u, d), rm(l, t, u));
    }
  }
  function tm(e) {
    var t = e.alternate;
    return e === wt || (t !== null && t === wt);
  }
  function nm(e, t) {
    ta = Os = !0;
    var l = e.pending;
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t);
  }
  function rm(e, t, l) {
    if (l & 4194240) {
      var u = t.lanes;
      (u &= e.pendingLanes), (l |= u), (t.lanes = l), oc(e, l);
    }
  }
  var Fs = {
      readContext: xr,
      useCallback: dn,
      useContext: dn,
      useEffect: dn,
      useImperativeHandle: dn,
      useInsertionEffect: dn,
      useLayoutEffect: dn,
      useMemo: dn,
      useReducer: dn,
      useRef: dn,
      useState: dn,
      useDebugValue: dn,
      useDeferredValue: dn,
      useTransition: dn,
      useMutableSource: dn,
      useSyncExternalStore: dn,
      useId: dn,
      unstable_isNewReconciler: !1,
    },
    mv = {
      readContext: xr,
      useCallback: function (e, t) {
        return (Xr().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: xr,
      useEffect: Yp,
      useImperativeHandle: function (e, t, l) {
        return (
          (l = l != null ? l.concat([e]) : null),
          js(4194308, 4, Kp.bind(null, t, e), l)
        );
      },
      useLayoutEffect: function (e, t) {
        return js(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return js(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = Xr();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (l.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, l) {
        var u = Xr();
        return (
          (t = l !== void 0 ? l(t) : t),
          (u.memoizedState = u.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (u.queue = e),
          (e = e.dispatch = hv.bind(null, wt, e)),
          [u.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Xr();
        return (e = {current: e}), (t.memoizedState = e);
      },
      useState: Hp,
      useDebugValue: lf,
      useDeferredValue: function (e) {
        return (Xr().memoizedState = e);
      },
      useTransition: function () {
        var e = Hp(!1),
          t = e[0];
        return (e = dv.bind(null, e[1])), (Xr().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, l) {
        var u = wt,
          d = Xr();
        if (mt) {
          if (l === void 0) throw Error(r(407));
          l = l();
        } else {
          if (((l = t()), qt === null)) throw Error(r(349));
          dl & 30 || Up(u, t, l);
        }
        d.memoizedState = l;
        var p = {value: l, getSnapshot: t};
        return (
          (d.queue = p),
          Yp($p.bind(null, u, p, e), [e]),
          (u.flags |= 2048),
          ia(9, bp.bind(null, u, p, l, t), void 0, null),
          l
        );
      },
      useId: function () {
        var e = Xr(),
          t = qt.identifierPrefix;
        if (mt) {
          var l = ci,
            u = ui;
          (l = (u & ~(1 << (32 - Lr(u) - 1))).toString(32) + l),
            (t = ':' + t + 'R' + l),
            (l = na++),
            0 < l && (t += 'H' + l.toString(32)),
            (t += ':');
        } else (l = fv++), (t = ':' + t + 'r' + l.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    gv = {
      readContext: xr,
      useCallback: qp,
      useContext: xr,
      useEffect: rf,
      useImperativeHandle: Gp,
      useInsertionEffect: Xp,
      useLayoutEffect: Qp,
      useMemo: Jp,
      useReducer: tf,
      useRef: Wp,
      useState: function () {
        return tf(ra);
      },
      useDebugValue: lf,
      useDeferredValue: function (e) {
        var t = wr();
        return Zp(t, Ht.memoizedState, e);
      },
      useTransition: function () {
        var e = tf(ra)[0],
          t = wr().memoizedState;
        return [e, t];
      },
      useMutableSource: Ip,
      useSyncExternalStore: Ap,
      useId: em,
      unstable_isNewReconciler: !1,
    },
    yv = {
      readContext: xr,
      useCallback: qp,
      useContext: xr,
      useEffect: rf,
      useImperativeHandle: Gp,
      useInsertionEffect: Xp,
      useLayoutEffect: Qp,
      useMemo: Jp,
      useReducer: nf,
      useRef: Wp,
      useState: function () {
        return nf(ra);
      },
      useDebugValue: lf,
      useDeferredValue: function (e) {
        var t = wr();
        return Ht === null ? (t.memoizedState = e) : Zp(t, Ht.memoizedState, e);
      },
      useTransition: function () {
        var e = nf(ra)[0],
          t = wr().memoizedState;
        return [e, t];
      },
      useMutableSource: Ip,
      useSyncExternalStore: Ap,
      useId: em,
      unstable_isNewReconciler: !1,
    };
  function zr(e, t) {
    if (e && e.defaultProps) {
      (t = T({}, t)), (e = e.defaultProps);
      for (var l in e) t[l] === void 0 && (t[l] = e[l]);
      return t;
    }
    return t;
  }
  function of(e, t, l, u) {
    (t = e.memoizedState),
      (l = l(u, t)),
      (l = l == null ? t : T({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Is = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? we(e) === e : !1;
    },
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var u = Rn(),
        d = Ii(e),
        p = di(u, d);
      (p.payload = t),
        l != null && (p.callback = l),
        (t = Oi(e, p, d)),
        t !== null && (Ar(t, e, d, u), Ds(t, e, d));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var u = Rn(),
        d = Ii(e),
        p = di(u, d);
      (p.tag = 1),
        (p.payload = t),
        l != null && (p.callback = l),
        (t = Oi(e, p, d)),
        t !== null && (Ar(t, e, d, u), Ds(t, e, d));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = Rn(),
        u = Ii(e),
        d = di(l, u);
      (d.tag = 2),
        t != null && (d.callback = t),
        (t = Oi(e, d, u)),
        t !== null && (Ar(t, e, u, l), Ds(t, e, u));
    },
  };
  function im(e, t, l, u, d, p, _) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(u, p, _)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ho(l, u) || !Ho(d, p)
          : !0
    );
  }
  function lm(e, t, l) {
    var u = !1,
      d = Ni,
      p = t.contextType;
    return (
      typeof p == 'object' && p !== null
        ? (p = xr(p))
        : ((d = Hn(t) ? al : fn.current),
          (u = t.contextTypes),
          (p = (u = u != null) ? Gl(e, d) : Ni)),
      (t = new t(l, p)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Is),
      (e.stateNode = t),
      (t._reactInternals = e),
      u &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = d),
        (e.__reactInternalMemoizedMaskedChildContext = p)),
      t
    );
  }
  function om(e, t, l, u) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(l, u),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(l, u),
      t.state !== e && Is.enqueueReplaceState(t, t.state, null);
  }
  function af(e, t, l, u) {
    var d = e.stateNode;
    (d.props = l), (d.state = e.memoizedState), (d.refs = {}), Yc(e);
    var p = t.contextType;
    typeof p == 'object' && p !== null
      ? (d.context = xr(p))
      : ((p = Hn(t) ? al : fn.current), (d.context = Gl(e, p))),
      (d.state = e.memoizedState),
      (p = t.getDerivedStateFromProps),
      typeof p == 'function' && (of(e, t, p, l), (d.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof d.getSnapshotBeforeUpdate == 'function' ||
        (typeof d.UNSAFE_componentWillMount != 'function' &&
          typeof d.componentWillMount != 'function') ||
        ((t = d.state),
        typeof d.componentWillMount == 'function' && d.componentWillMount(),
        typeof d.UNSAFE_componentWillMount == 'function' &&
          d.UNSAFE_componentWillMount(),
        t !== d.state && Is.enqueueReplaceState(d, d.state, null),
        Ns(e, l, d, u),
        (d.state = e.memoizedState)),
      typeof d.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function io(e, t) {
    try {
      var l = '',
        u = t;
      do (l += ke(u)), (u = u.return);
      while (u);
      var d = l;
    } catch (p) {
      d =
        `
Error generating stack: ` +
        p.message +
        `
` +
        p.stack;
    }
    return {value: e, source: t, stack: d, digest: null};
  }
  function sf(e, t, l) {
    return {value: e, source: null, stack: l ?? null, digest: t ?? null};
  }
  function uf(e, t) {
    try {
      console.error(t.value);
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  var _v = typeof WeakMap == 'function' ? WeakMap : Map;
  function am(e, t, l) {
    (l = di(-1, l)), (l.tag = 3), (l.payload = {element: null});
    var u = t.value;
    return (
      (l.callback = function () {
        Hs || ((Hs = !0), (Ef = u)), uf(e, t);
      }),
      l
    );
  }
  function sm(e, t, l) {
    (l = di(-1, l)), (l.tag = 3);
    var u = e.type.getDerivedStateFromError;
    if (typeof u == 'function') {
      var d = t.value;
      (l.payload = function () {
        return u(d);
      }),
        (l.callback = function () {
          uf(e, t);
        });
    }
    var p = e.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == 'function' &&
        (l.callback = function () {
          uf(e, t),
            typeof u != 'function' &&
              (zi === null ? (zi = new Set([this])) : zi.add(this));
          var _ = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: _ !== null ? _ : '',
          });
        }),
      l
    );
  }
  function um(e, t, l) {
    var u = e.pingCache;
    if (u === null) {
      u = e.pingCache = new _v();
      var d = new Set();
      u.set(t, d);
    } else (d = u.get(t)), d === void 0 && ((d = new Set()), u.set(t, d));
    d.has(l) || (d.add(l), (e = Lv.bind(null, e, t, l)), t.then(e, e));
  }
  function cm(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function fm(e, t, l, u, d) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = d), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (l.flags |= 131072),
            (l.flags &= -52805),
            l.tag === 1 &&
              (l.alternate === null
                ? (l.tag = 17)
                : ((t = di(-1, 1)), (t.tag = 2), Oi(l, t, 1))),
            (l.lanes |= 1)),
        e);
  }
  var vv = F.ReactCurrentOwner,
    Wn = !1;
  function Pn(e, t, l, u) {
    t.child = e === null ? Mp(t, null, l, u) : eo(t, e.child, l, u);
  }
  function dm(e, t, l, u, d) {
    l = l.render;
    var p = t.ref;
    return (
      no(t, d),
      (u = Zc(e, t, l, u, p, d)),
      (l = ef()),
      e !== null && !Wn
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~d),
          hi(e, t, d))
        : (mt && l && Fc(t), (t.flags |= 1), Pn(e, t, u, d), t.child)
    );
  }
  function hm(e, t, l, u, d) {
    if (e === null) {
      var p = l.type;
      return typeof p == 'function' &&
        !Mf(p) &&
        p.defaultProps === void 0 &&
        l.compare === null &&
        l.defaultProps === void 0
        ? ((t.tag = 15), (t.type = p), pm(e, t, p, u, d))
        : ((e = Gs(l.type, null, u, t, t.mode, d)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((p = e.child), !(e.lanes & d))) {
      var _ = p.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Ho), l(_, u) && e.ref === t.ref)
      )
        return hi(e, t, d);
    }
    return (
      (t.flags |= 1),
      (e = Ui(p, u)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function pm(e, t, l, u, d) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (Ho(p, u) && e.ref === t.ref)
        if (((Wn = !1), (t.pendingProps = u = p), (e.lanes & d) !== 0))
          e.flags & 131072 && (Wn = !0);
        else return (t.lanes = e.lanes), hi(e, t, d);
    }
    return cf(e, t, l, u, d);
  }
  function mm(e, t, l) {
    var u = t.pendingProps,
      d = u.children,
      p = e !== null ? e.memoizedState : null;
    if (u.mode === 'hidden')
      if (!(t.mode & 1))
        (t.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}),
          ut(oo, lr),
          (lr |= l);
      else {
        if (!(l & 1073741824))
          return (
            (e = p !== null ? p.baseLanes | l : l),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ut(oo, lr),
            (lr |= e),
            null
          );
        (t.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}),
          (u = p !== null ? p.baseLanes : l),
          ut(oo, lr),
          (lr |= u);
      }
    else
      p !== null ? ((u = p.baseLanes | l), (t.memoizedState = null)) : (u = l),
        ut(oo, lr),
        (lr |= u);
    return Pn(e, t, d, l), t.child;
  }
  function gm(e, t) {
    var l = t.ref;
    ((e === null && l !== null) || (e !== null && e.ref !== l)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function cf(e, t, l, u, d) {
    var p = Hn(l) ? al : fn.current;
    return (
      (p = Gl(t, p)),
      no(t, d),
      (l = Zc(e, t, l, u, p, d)),
      (u = ef()),
      e !== null && !Wn
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~d),
          hi(e, t, d))
        : (mt && u && Fc(t), (t.flags |= 1), Pn(e, t, l, d), t.child)
    );
  }
  function ym(e, t, l, u, d) {
    if (Hn(l)) {
      var p = !0;
      ws(t);
    } else p = !1;
    if ((no(t, d), t.stateNode === null))
      Us(e, t), lm(t, l, u), af(t, l, u, d), (u = !0);
    else if (e === null) {
      var _ = t.stateNode,
        E = t.memoizedProps;
      _.props = E;
      var N = _.context,
        B = l.contextType;
      typeof B == 'object' && B !== null
        ? (B = xr(B))
        : ((B = Hn(l) ? al : fn.current), (B = Gl(t, B)));
      var ne = l.getDerivedStateFromProps,
        ie =
          typeof ne == 'function' ||
          typeof _.getSnapshotBeforeUpdate == 'function';
      ie ||
        (typeof _.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof _.componentWillReceiveProps != 'function') ||
        ((E !== u || N !== B) && om(t, _, u, B)),
        (Li = !1);
      var te = t.memoizedState;
      (_.state = te),
        Ns(t, u, _, d),
        (N = t.memoizedState),
        E !== u || te !== N || Vn.current || Li
          ? (typeof ne == 'function' &&
              (of(t, l, ne, u), (N = t.memoizedState)),
            (E = Li || im(t, l, E, u, te, N, B))
              ? (ie ||
                  (typeof _.UNSAFE_componentWillMount != 'function' &&
                    typeof _.componentWillMount != 'function') ||
                  (typeof _.componentWillMount == 'function' &&
                    _.componentWillMount(),
                  typeof _.UNSAFE_componentWillMount == 'function' &&
                    _.UNSAFE_componentWillMount()),
                typeof _.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof _.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = N)),
            (_.props = u),
            (_.state = N),
            (_.context = B),
            (u = E))
          : (typeof _.componentDidMount == 'function' && (t.flags |= 4194308),
            (u = !1));
    } else {
      (_ = t.stateNode),
        Op(e, t),
        (E = t.memoizedProps),
        (B = t.type === t.elementType ? E : zr(t.type, E)),
        (_.props = B),
        (ie = t.pendingProps),
        (te = _.context),
        (N = l.contextType),
        typeof N == 'object' && N !== null
          ? (N = xr(N))
          : ((N = Hn(l) ? al : fn.current), (N = Gl(t, N)));
      var ce = l.getDerivedStateFromProps;
      (ne =
        typeof ce == 'function' ||
        typeof _.getSnapshotBeforeUpdate == 'function') ||
        (typeof _.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof _.componentWillReceiveProps != 'function') ||
        ((E !== ie || te !== N) && om(t, _, u, N)),
        (Li = !1),
        (te = t.memoizedState),
        (_.state = te),
        Ns(t, u, _, d);
      var ye = t.memoizedState;
      E !== ie || te !== ye || Vn.current || Li
        ? (typeof ce == 'function' && (of(t, l, ce, u), (ye = t.memoizedState)),
          (B = Li || im(t, l, B, u, te, ye, N) || !1)
            ? (ne ||
                (typeof _.UNSAFE_componentWillUpdate != 'function' &&
                  typeof _.componentWillUpdate != 'function') ||
                (typeof _.componentWillUpdate == 'function' &&
                  _.componentWillUpdate(u, ye, N),
                typeof _.UNSAFE_componentWillUpdate == 'function' &&
                  _.UNSAFE_componentWillUpdate(u, ye, N)),
              typeof _.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof _.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof _.componentDidUpdate != 'function' ||
                (E === e.memoizedProps && te === e.memoizedState) ||
                (t.flags |= 4),
              typeof _.getSnapshotBeforeUpdate != 'function' ||
                (E === e.memoizedProps && te === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = ye)),
          (_.props = u),
          (_.state = ye),
          (_.context = N),
          (u = B))
        : (typeof _.componentDidUpdate != 'function' ||
            (E === e.memoizedProps && te === e.memoizedState) ||
            (t.flags |= 4),
          typeof _.getSnapshotBeforeUpdate != 'function' ||
            (E === e.memoizedProps && te === e.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return ff(e, t, l, u, p, d);
  }
  function ff(e, t, l, u, d, p) {
    gm(e, t);
    var _ = (t.flags & 128) !== 0;
    if (!u && !_) return d && Sp(t, l, !1), hi(e, t, p);
    (u = t.stateNode), (vv.current = t);
    var E =
      _ && typeof l.getDerivedStateFromError != 'function' ? null : u.render();
    return (
      (t.flags |= 1),
      e !== null && _
        ? ((t.child = eo(t, e.child, null, p)), (t.child = eo(t, null, E, p)))
        : Pn(e, t, E, p),
      (t.memoizedState = u.state),
      d && Sp(t, l, !0),
      t.child
    );
  }
  function _m(e) {
    var t = e.stateNode;
    t.pendingContext
      ? xp(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && xp(e, t.context, !1),
      Xc(e, t.containerInfo);
  }
  function vm(e, t, l, u, d) {
    return Zl(), bc(d), (t.flags |= 256), Pn(e, t, l, u), t.child;
  }
  var df = {dehydrated: null, treeContext: null, retryLane: 0};
  function hf(e) {
    return {baseLanes: e, cachePool: null, transitions: null};
  }
  function xm(e, t, l) {
    var u = t.pendingProps,
      d = xt.current,
      p = !1,
      _ = (t.flags & 128) !== 0,
      E;
    if (
      ((E = _) ||
        (E = e !== null && e.memoizedState === null ? !1 : (d & 2) !== 0),
      E
        ? ((p = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (d |= 1),
      ut(xt, d & 1),
      e === null)
    )
      return (
        Uc(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((_ = u.children),
            (e = u.fallback),
            p
              ? ((u = t.mode),
                (p = t.child),
                (_ = {mode: 'hidden', children: _}),
                !(u & 1) && p !== null
                  ? ((p.childLanes = 0), (p.pendingProps = _))
                  : (p = qs(_, u, 0, null)),
                (e = yl(e, u, l, null)),
                (p.return = t),
                (e.return = t),
                (p.sibling = e),
                (t.child = p),
                (t.child.memoizedState = hf(l)),
                (t.memoizedState = df),
                e)
              : pf(t, _))
      );
    if (((d = e.memoizedState), d !== null && ((E = d.dehydrated), E !== null)))
      return xv(e, t, _, u, E, d, l);
    if (p) {
      (p = u.fallback), (_ = t.mode), (d = e.child), (E = d.sibling);
      var N = {mode: 'hidden', children: u.children};
      return (
        !(_ & 1) && t.child !== d
          ? ((u = t.child),
            (u.childLanes = 0),
            (u.pendingProps = N),
            (t.deletions = null))
          : ((u = Ui(d, N)), (u.subtreeFlags = d.subtreeFlags & 14680064)),
        E !== null ? (p = Ui(E, p)) : ((p = yl(p, _, l, null)), (p.flags |= 2)),
        (p.return = t),
        (u.return = t),
        (u.sibling = p),
        (t.child = u),
        (u = p),
        (p = t.child),
        (_ = e.child.memoizedState),
        (_ =
          _ === null
            ? hf(l)
            : {
                baseLanes: _.baseLanes | l,
                cachePool: null,
                transitions: _.transitions,
              }),
        (p.memoizedState = _),
        (p.childLanes = e.childLanes & ~l),
        (t.memoizedState = df),
        u
      );
    }
    return (
      (p = e.child),
      (e = p.sibling),
      (u = Ui(p, {mode: 'visible', children: u.children})),
      !(t.mode & 1) && (u.lanes = l),
      (u.return = t),
      (u.sibling = null),
      e !== null &&
        ((l = t.deletions),
        l === null ? ((t.deletions = [e]), (t.flags |= 16)) : l.push(e)),
      (t.child = u),
      (t.memoizedState = null),
      u
    );
  }
  function pf(e, t) {
    return (
      (t = qs({mode: 'visible', children: t}, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function As(e, t, l, u) {
    return (
      u !== null && bc(u),
      eo(t, e.child, null, l),
      (e = pf(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function xv(e, t, l, u, d, p, _) {
    if (l)
      return t.flags & 256
        ? ((t.flags &= -257), (u = sf(Error(r(422)))), As(e, t, _, u))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((p = u.fallback),
            (d = t.mode),
            (u = qs({mode: 'visible', children: u.children}, d, 0, null)),
            (p = yl(p, d, _, null)),
            (p.flags |= 2),
            (u.return = t),
            (p.return = t),
            (u.sibling = p),
            (t.child = u),
            t.mode & 1 && eo(t, e.child, null, _),
            (t.child.memoizedState = hf(_)),
            (t.memoizedState = df),
            p);
    if (!(t.mode & 1)) return As(e, t, _, null);
    if (d.data === '$!') {
      if (((u = d.nextSibling && d.nextSibling.dataset), u)) var E = u.dgst;
      return (
        (u = E), (p = Error(r(419))), (u = sf(p, u, void 0)), As(e, t, _, u)
      );
    }
    if (((E = (_ & e.childLanes) !== 0), Wn || E)) {
      if (((u = qt), u !== null)) {
        switch (_ & -_) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        (d = d & (u.suspendedLanes | _) ? 0 : d),
          d !== 0 &&
            d !== p.retryLane &&
            ((p.retryLane = d), fi(e, d), Ar(u, e, d, -1));
      }
      return Nf(), (u = sf(Error(r(421)))), As(e, t, _, u);
    }
    return d.data === '$?'
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Ov.bind(null, e)),
        (d._reactRetry = t),
        null)
      : ((e = p.treeContext),
        (ir = Ri(d.nextSibling)),
        (rr = t),
        (mt = !0),
        (jr = null),
        e !== null &&
          ((_r[vr++] = ui),
          (_r[vr++] = ci),
          (_r[vr++] = sl),
          (ui = e.id),
          (ci = e.overflow),
          (sl = t)),
        (t = pf(t, u.children)),
        (t.flags |= 4096),
        t);
  }
  function wm(e, t, l) {
    e.lanes |= t;
    var u = e.alternate;
    u !== null && (u.lanes |= t), Hc(e.return, t, l);
  }
  function mf(e, t, l, u, d) {
    var p = e.memoizedState;
    p === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: l,
          tailMode: d,
        })
      : ((p.isBackwards = t),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = u),
        (p.tail = l),
        (p.tailMode = d));
  }
  function Sm(e, t, l) {
    var u = t.pendingProps,
      d = u.revealOrder,
      p = u.tail;
    if ((Pn(e, t, u.children, l), (u = xt.current), u & 2))
      (u = (u & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && wm(e, l, t);
          else if (e.tag === 19) wm(e, l, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      u &= 1;
    }
    if ((ut(xt, u), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (d) {
        case 'forwards':
          for (l = t.child, d = null; l !== null; )
            (e = l.alternate),
              e !== null && Ms(e) === null && (d = l),
              (l = l.sibling);
          (l = d),
            l === null
              ? ((d = t.child), (t.child = null))
              : ((d = l.sibling), (l.sibling = null)),
            mf(t, !1, d, l, p);
          break;
        case 'backwards':
          for (l = null, d = t.child, t.child = null; d !== null; ) {
            if (((e = d.alternate), e !== null && Ms(e) === null)) {
              t.child = d;
              break;
            }
            (e = d.sibling), (d.sibling = l), (l = d), (d = e);
          }
          mf(t, !0, l, null, p);
          break;
        case 'together':
          mf(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Us(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function hi(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (hl |= t.lanes),
      !(l & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        e = t.child, l = Ui(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (l = l.sibling = Ui(e, e.pendingProps)),
          (l.return = t);
      l.sibling = null;
    }
    return t.child;
  }
  function wv(e, t, l) {
    switch (t.tag) {
      case 3:
        _m(t), Zl();
        break;
      case 5:
        Fp(t);
        break;
      case 1:
        Hn(t.type) && ws(t);
        break;
      case 4:
        Xc(t, t.stateNode.containerInfo);
        break;
      case 10:
        var u = t.type._context,
          d = t.memoizedProps.value;
        ut(Ps, u._currentValue), (u._currentValue = d);
        break;
      case 13:
        if (((u = t.memoizedState), u !== null))
          return u.dehydrated !== null
            ? (ut(xt, xt.current & 1), (t.flags |= 128), null)
            : l & t.child.childLanes
              ? xm(e, t, l)
              : (ut(xt, xt.current & 1),
                (e = hi(e, t, l)),
                e !== null ? e.sibling : null);
        ut(xt, xt.current & 1);
        break;
      case 19:
        if (((u = (l & t.childLanes) !== 0), e.flags & 128)) {
          if (u) return Sm(e, t, l);
          t.flags |= 128;
        }
        if (
          ((d = t.memoizedState),
          d !== null &&
            ((d.rendering = null), (d.tail = null), (d.lastEffect = null)),
          ut(xt, xt.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), mm(e, t, l);
    }
    return hi(e, t, l);
  }
  var km, gf, Em, Cm;
  (km = function (e, t) {
    for (var l = t.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) e.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        (l.child.return = l), (l = l.child);
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return;
        l = l.return;
      }
      (l.sibling.return = l.return), (l = l.sibling);
    }
  }),
    (gf = function () {}),
    (Em = function (e, t, l, u) {
      var d = e.memoizedProps;
      if (d !== u) {
        (e = t.stateNode), fl(Yr.current);
        var p = null;
        switch (l) {
          case 'input':
            (d = ot(e, d)), (u = ot(e, u)), (p = []);
            break;
          case 'select':
            (d = T({}, d, {value: void 0})),
              (u = T({}, u, {value: void 0})),
              (p = []);
            break;
          case 'textarea':
            (d = $t(e, d)), (u = $t(e, u)), (p = []);
            break;
          default:
            typeof d.onClick != 'function' &&
              typeof u.onClick == 'function' &&
              (e.onclick = _s);
        }
        Sn(l, u);
        var _;
        l = null;
        for (B in d)
          if (!u.hasOwnProperty(B) && d.hasOwnProperty(B) && d[B] != null)
            if (B === 'style') {
              var E = d[B];
              for (_ in E) E.hasOwnProperty(_) && (l || (l = {}), (l[_] = ''));
            } else
              B !== 'dangerouslySetInnerHTML' &&
                B !== 'children' &&
                B !== 'suppressContentEditableWarning' &&
                B !== 'suppressHydrationWarning' &&
                B !== 'autoFocus' &&
                (o.hasOwnProperty(B)
                  ? p || (p = [])
                  : (p = p || []).push(B, null));
        for (B in u) {
          var N = u[B];
          if (
            ((E = d != null ? d[B] : void 0),
            u.hasOwnProperty(B) && N !== E && (N != null || E != null))
          )
            if (B === 'style')
              if (E) {
                for (_ in E)
                  !E.hasOwnProperty(_) ||
                    (N && N.hasOwnProperty(_)) ||
                    (l || (l = {}), (l[_] = ''));
                for (_ in N)
                  N.hasOwnProperty(_) &&
                    E[_] !== N[_] &&
                    (l || (l = {}), (l[_] = N[_]));
              } else l || (p || (p = []), p.push(B, l)), (l = N);
            else
              B === 'dangerouslySetInnerHTML'
                ? ((N = N ? N.__html : void 0),
                  (E = E ? E.__html : void 0),
                  N != null && E !== N && (p = p || []).push(B, N))
                : B === 'children'
                  ? (typeof N != 'string' && typeof N != 'number') ||
                    (p = p || []).push(B, '' + N)
                  : B !== 'suppressContentEditableWarning' &&
                    B !== 'suppressHydrationWarning' &&
                    (o.hasOwnProperty(B)
                      ? (N != null && B === 'onScroll' && dt('scroll', e),
                        p || E === N || (p = []))
                      : (p = p || []).push(B, N));
        }
        l && (p = p || []).push('style', l);
        var B = p;
        (t.updateQueue = B) && (t.flags |= 4);
      }
    }),
    (Cm = function (e, t, l, u) {
      l !== u && (t.flags |= 4);
    });
  function la(e, t) {
    if (!mt)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), (t = t.sibling);
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case 'collapsed':
          l = e.tail;
          for (var u = null; l !== null; )
            l.alternate !== null && (u = l), (l = l.sibling);
          u === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function hn(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      u = 0;
    if (t)
      for (var d = e.child; d !== null; )
        (l |= d.lanes | d.childLanes),
          (u |= d.subtreeFlags & 14680064),
          (u |= d.flags & 14680064),
          (d.return = e),
          (d = d.sibling);
    else
      for (d = e.child; d !== null; )
        (l |= d.lanes | d.childLanes),
          (u |= d.subtreeFlags),
          (u |= d.flags),
          (d.return = e),
          (d = d.sibling);
    return (e.subtreeFlags |= u), (e.childLanes = l), t;
  }
  function Sv(e, t, l) {
    var u = t.pendingProps;
    switch ((Ic(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return hn(t), null;
      case 1:
        return Hn(t.type) && xs(), hn(t), null;
      case 3:
        return (
          (u = t.stateNode),
          ro(),
          ht(Vn),
          ht(fn),
          Gc(),
          u.pendingContext &&
            ((u.context = u.pendingContext), (u.pendingContext = null)),
          (e === null || e.child === null) &&
            (Cs(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), jr !== null && (Pf(jr), (jr = null)))),
          gf(e, t),
          hn(t),
          null
        );
      case 5:
        Qc(t);
        var d = fl(ea.current);
        if (((l = t.type), e !== null && t.stateNode != null))
          Em(e, t, l, u, d),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(r(166));
            return hn(t), null;
          }
          if (((e = fl(Yr.current)), Cs(t))) {
            (u = t.stateNode), (l = t.type);
            var p = t.memoizedProps;
            switch (((u[Wr] = t), (u[Ko] = p), (e = (t.mode & 1) !== 0), l)) {
              case 'dialog':
                dt('cancel', u), dt('close', u);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                dt('load', u);
                break;
              case 'video':
              case 'audio':
                for (d = 0; d < Yo.length; d++) dt(Yo[d], u);
                break;
              case 'source':
                dt('error', u);
                break;
              case 'img':
              case 'image':
              case 'link':
                dt('error', u), dt('load', u);
                break;
              case 'details':
                dt('toggle', u);
                break;
              case 'input':
                Ut(u, p), dt('invalid', u);
                break;
              case 'select':
                (u._wrapperState = {wasMultiple: !!p.multiple}),
                  dt('invalid', u);
                break;
              case 'textarea':
                Fn(u, p), dt('invalid', u);
            }
            Sn(l, p), (d = null);
            for (var _ in p)
              if (p.hasOwnProperty(_)) {
                var E = p[_];
                _ === 'children'
                  ? typeof E == 'string'
                    ? u.textContent !== E &&
                      (p.suppressHydrationWarning !== !0 &&
                        ys(u.textContent, E, e),
                      (d = ['children', E]))
                    : typeof E == 'number' &&
                      u.textContent !== '' + E &&
                      (p.suppressHydrationWarning !== !0 &&
                        ys(u.textContent, E, e),
                      (d = ['children', '' + E]))
                  : o.hasOwnProperty(_) &&
                    E != null &&
                    _ === 'onScroll' &&
                    dt('scroll', u);
              }
            switch (l) {
              case 'input':
                yt(u), Qt(u, p, !0);
                break;
              case 'textarea':
                yt(u), et(u);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof p.onClick == 'function' && (u.onclick = _s);
            }
            (u = d), (t.updateQueue = u), u !== null && (t.flags |= 4);
          } else {
            (_ = d.nodeType === 9 ? d : d.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Pt(l)),
              e === 'http://www.w3.org/1999/xhtml'
                ? l === 'script'
                  ? ((e = _.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof u.is == 'string'
                    ? (e = _.createElement(l, {is: u.is}))
                    : ((e = _.createElement(l)),
                      l === 'select' &&
                        ((_ = e),
                        u.multiple
                          ? (_.multiple = !0)
                          : u.size && (_.size = u.size)))
                : (e = _.createElementNS(e, l)),
              (e[Wr] = t),
              (e[Ko] = u),
              km(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((_ = kn(l, u)), l)) {
                case 'dialog':
                  dt('cancel', e), dt('close', e), (d = u);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  dt('load', e), (d = u);
                  break;
                case 'video':
                case 'audio':
                  for (d = 0; d < Yo.length; d++) dt(Yo[d], e);
                  d = u;
                  break;
                case 'source':
                  dt('error', e), (d = u);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  dt('error', e), dt('load', e), (d = u);
                  break;
                case 'details':
                  dt('toggle', e), (d = u);
                  break;
                case 'input':
                  Ut(e, u), (d = ot(e, u)), dt('invalid', e);
                  break;
                case 'option':
                  d = u;
                  break;
                case 'select':
                  (e._wrapperState = {wasMultiple: !!u.multiple}),
                    (d = T({}, u, {value: void 0})),
                    dt('invalid', e);
                  break;
                case 'textarea':
                  Fn(e, u), (d = $t(e, u)), dt('invalid', e);
                  break;
                default:
                  d = u;
              }
              Sn(l, d), (E = d);
              for (p in E)
                if (E.hasOwnProperty(p)) {
                  var N = E[p];
                  p === 'style'
                    ? Un(e, N)
                    : p === 'dangerouslySetInnerHTML'
                      ? ((N = N ? N.__html : void 0), N != null && nn(e, N))
                      : p === 'children'
                        ? typeof N == 'string'
                          ? (l !== 'textarea' || N !== '') && pt(e, N)
                          : typeof N == 'number' && pt(e, '' + N)
                        : p !== 'suppressContentEditableWarning' &&
                          p !== 'suppressHydrationWarning' &&
                          p !== 'autoFocus' &&
                          (o.hasOwnProperty(p)
                            ? N != null && p === 'onScroll' && dt('scroll', e)
                            : N != null && I(e, p, N, _));
                }
              switch (l) {
                case 'input':
                  yt(e), Qt(e, u, !1);
                  break;
                case 'textarea':
                  yt(e), et(e);
                  break;
                case 'option':
                  u.value != null && e.setAttribute('value', '' + Oe(u.value));
                  break;
                case 'select':
                  (e.multiple = !!u.multiple),
                    (p = u.value),
                    p != null
                      ? Xe(e, !!u.multiple, p, !1)
                      : u.defaultValue != null &&
                        Xe(e, !!u.multiple, u.defaultValue, !0);
                  break;
                default:
                  typeof d.onClick == 'function' && (e.onclick = _s);
              }
              switch (l) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  u = !!u.autoFocus;
                  break e;
                case 'img':
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return hn(t), null;
      case 6:
        if (e && t.stateNode != null) Cm(e, t, e.memoizedProps, u);
        else {
          if (typeof u != 'string' && t.stateNode === null) throw Error(r(166));
          if (((l = fl(ea.current)), fl(Yr.current), Cs(t))) {
            if (
              ((u = t.stateNode),
              (l = t.memoizedProps),
              (u[Wr] = t),
              (p = u.nodeValue !== l) && ((e = rr), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ys(u.nodeValue, l, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ys(u.nodeValue, l, (e.mode & 1) !== 0);
              }
            p && (t.flags |= 4);
          } else
            (u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u)),
              (u[Wr] = t),
              (t.stateNode = u);
        }
        return hn(t), null;
      case 13:
        if (
          (ht(xt),
          (u = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (mt && ir !== null && t.mode & 1 && !(t.flags & 128))
            Rp(), Zl(), (t.flags |= 98560), (p = !1);
          else if (((p = Cs(t)), u !== null && u.dehydrated !== null)) {
            if (e === null) {
              if (!p) throw Error(r(318));
              if (
                ((p = t.memoizedState),
                (p = p !== null ? p.dehydrated : null),
                !p)
              )
                throw Error(r(317));
              p[Wr] = t;
            } else
              Zl(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            hn(t), (p = !1);
          } else jr !== null && (Pf(jr), (jr = null)), (p = !0);
          if (!p) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = l), t)
          : ((u = u !== null),
            u !== (e !== null && e.memoizedState !== null) &&
              u &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || xt.current & 1 ? Wt === 0 && (Wt = 3) : Nf())),
            t.updateQueue !== null && (t.flags |= 4),
            hn(t),
            null);
      case 4:
        return (
          ro(),
          gf(e, t),
          e === null && Xo(t.stateNode.containerInfo),
          hn(t),
          null
        );
      case 10:
        return Vc(t.type._context), hn(t), null;
      case 17:
        return Hn(t.type) && xs(), hn(t), null;
      case 19:
        if ((ht(xt), (p = t.memoizedState), p === null)) return hn(t), null;
        if (((u = (t.flags & 128) !== 0), (_ = p.rendering), _ === null))
          if (u) la(p, !1);
          else {
            if (Wt !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((_ = Ms(e)), _ !== null)) {
                  for (
                    t.flags |= 128,
                      la(p, !1),
                      u = _.updateQueue,
                      u !== null && ((t.updateQueue = u), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      u = l,
                      l = t.child;
                    l !== null;

                  )
                    (p = l),
                      (e = u),
                      (p.flags &= 14680066),
                      (_ = p.alternate),
                      _ === null
                        ? ((p.childLanes = 0),
                          (p.lanes = e),
                          (p.child = null),
                          (p.subtreeFlags = 0),
                          (p.memoizedProps = null),
                          (p.memoizedState = null),
                          (p.updateQueue = null),
                          (p.dependencies = null),
                          (p.stateNode = null))
                        : ((p.childLanes = _.childLanes),
                          (p.lanes = _.lanes),
                          (p.child = _.child),
                          (p.subtreeFlags = 0),
                          (p.deletions = null),
                          (p.memoizedProps = _.memoizedProps),
                          (p.memoizedState = _.memoizedState),
                          (p.updateQueue = _.updateQueue),
                          (p.type = _.type),
                          (e = _.dependencies),
                          (p.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (l = l.sibling);
                  return ut(xt, (xt.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            p.tail !== null &&
              Ue() > ao &&
              ((t.flags |= 128), (u = !0), la(p, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = Ms(_)), e !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = e.updateQueue),
                l !== null && ((t.updateQueue = l), (t.flags |= 4)),
                la(p, !0),
                p.tail === null &&
                  p.tailMode === 'hidden' &&
                  !_.alternate &&
                  !mt)
              )
                return hn(t), null;
            } else
              2 * Ue() - p.renderingStartTime > ao &&
                l !== 1073741824 &&
                ((t.flags |= 128), (u = !0), la(p, !1), (t.lanes = 4194304));
          p.isBackwards
            ? ((_.sibling = t.child), (t.child = _))
            : ((l = p.last),
              l !== null ? (l.sibling = _) : (t.child = _),
              (p.last = _));
        }
        return p.tail !== null
          ? ((t = p.tail),
            (p.rendering = t),
            (p.tail = t.sibling),
            (p.renderingStartTime = Ue()),
            (t.sibling = null),
            (l = xt.current),
            ut(xt, u ? (l & 1) | 2 : l & 1),
            t)
          : (hn(t), null);
      case 22:
      case 23:
        return (
          Df(),
          (u = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== u && (t.flags |= 8192),
          u && t.mode & 1
            ? lr & 1073741824 &&
              (hn(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : hn(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function kv(e, t) {
    switch ((Ic(t), t.tag)) {
      case 1:
        return (
          Hn(t.type) && xs(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          ro(),
          ht(Vn),
          ht(fn),
          Gc(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Qc(t), null;
      case 13:
        if (
          (ht(xt), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          Zl();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ht(xt), null;
      case 4:
        return ro(), null;
      case 10:
        return Vc(t.type._context), null;
      case 22:
      case 23:
        return Df(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var bs = !1,
    pn = !1,
    Ev = typeof WeakSet == 'function' ? WeakSet : Set,
    de = null;
  function lo(e, t) {
    var l = e.ref;
    if (l !== null)
      if (typeof l == 'function')
        try {
          l(null);
        } catch (u) {
          Ct(e, t, u);
        }
      else l.current = null;
  }
  function yf(e, t, l) {
    try {
      l();
    } catch (u) {
      Ct(e, t, u);
    }
  }
  var Tm = !1;
  function Cv(e, t) {
    if (((Rc = os), (e = ip()), xc(e))) {
      if ('selectionStart' in e)
        var l = {start: e.selectionStart, end: e.selectionEnd};
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var u = l.getSelection && l.getSelection();
          if (u && u.rangeCount !== 0) {
            l = u.anchorNode;
            var d = u.anchorOffset,
              p = u.focusNode;
            u = u.focusOffset;
            try {
              l.nodeType, p.nodeType;
            } catch {
              l = null;
              break e;
            }
            var _ = 0,
              E = -1,
              N = -1,
              B = 0,
              ne = 0,
              ie = e,
              te = null;
            t: for (;;) {
              for (
                var ce;
                ie !== l || (d !== 0 && ie.nodeType !== 3) || (E = _ + d),
                  ie !== p || (u !== 0 && ie.nodeType !== 3) || (N = _ + u),
                  ie.nodeType === 3 && (_ += ie.nodeValue.length),
                  (ce = ie.firstChild) !== null;

              )
                (te = ie), (ie = ce);
              for (;;) {
                if (ie === e) break t;
                if (
                  (te === l && ++B === d && (E = _),
                  te === p && ++ne === u && (N = _),
                  (ce = ie.nextSibling) !== null)
                )
                  break;
                (ie = te), (te = ie.parentNode);
              }
              ie = ce;
            }
            l = E === -1 || N === -1 ? null : {start: E, end: N};
          } else l = null;
        }
      l = l || {start: 0, end: 0};
    } else l = null;
    for (
      Dc = {focusedElem: e, selectionRange: l}, os = !1, de = t;
      de !== null;

    )
      if (
        ((t = de), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (de = e);
      else
        for (; de !== null; ) {
          t = de;
          try {
            var ye = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ye !== null) {
                    var _e = ye.memoizedProps,
                      Dt = ye.memoizedState,
                      A = t.stateNode,
                      L = A.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? _e : zr(t.type, _e),
                        Dt
                      );
                    A.__reactInternalSnapshotBeforeUpdate = L;
                  }
                  break;
                case 3:
                  var b = t.stateNode.containerInfo;
                  b.nodeType === 1
                    ? (b.textContent = '')
                    : b.nodeType === 9 &&
                      b.documentElement &&
                      b.removeChild(b.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(r(163));
              }
          } catch (oe) {
            Ct(t, t.return, oe);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (de = e);
            break;
          }
          de = t.return;
        }
    return (ye = Tm), (Tm = !1), ye;
  }
  function oa(e, t, l) {
    var u = t.updateQueue;
    if (((u = u !== null ? u.lastEffect : null), u !== null)) {
      var d = (u = u.next);
      do {
        if ((d.tag & e) === e) {
          var p = d.destroy;
          (d.destroy = void 0), p !== void 0 && yf(t, l, p);
        }
        d = d.next;
      } while (d !== u);
    }
  }
  function $s(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var l = (t = t.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.create;
          l.destroy = u();
        }
        l = l.next;
      } while (l !== t);
    }
  }
  function _f(e) {
    var t = e.ref;
    if (t !== null) {
      var l = e.stateNode;
      switch (e.tag) {
        case 5:
          e = l;
          break;
        default:
          e = l;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function Pm(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Pm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Wr],
          delete t[Ko],
          delete t[Oc],
          delete t[av],
          delete t[sv])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Rm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Dm(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Rm(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function vf(e, t, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      (e = e.stateNode),
        t
          ? l.nodeType === 8
            ? l.parentNode.insertBefore(e, t)
            : l.insertBefore(e, t)
          : (l.nodeType === 8
              ? ((t = l.parentNode), t.insertBefore(e, l))
              : ((t = l), t.appendChild(e)),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = _s));
    else if (u !== 4 && ((e = e.child), e !== null))
      for (vf(e, t, l), e = e.sibling; e !== null; )
        vf(e, t, l), (e = e.sibling);
  }
  function xf(e, t, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (u !== 4 && ((e = e.child), e !== null))
      for (xf(e, t, l), e = e.sibling; e !== null; )
        xf(e, t, l), (e = e.sibling);
  }
  var ln = null,
    Fr = !1;
  function ji(e, t, l) {
    for (l = l.child; l !== null; ) Nm(e, t, l), (l = l.sibling);
  }
  function Nm(e, t, l) {
    if (Kt && typeof Kt.onCommitFiberUnmount == 'function')
      try {
        Kt.onCommitFiberUnmount(rn, l);
      } catch {}
    switch (l.tag) {
      case 5:
        pn || lo(l, t);
      case 6:
        var u = ln,
          d = Fr;
        (ln = null),
          ji(e, t, l),
          (ln = u),
          (Fr = d),
          ln !== null &&
            (Fr
              ? ((e = ln),
                (l = l.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(l)
                  : e.removeChild(l))
              : ln.removeChild(l.stateNode));
        break;
      case 18:
        ln !== null &&
          (Fr
            ? ((e = ln),
              (l = l.stateNode),
              e.nodeType === 8
                ? Lc(e.parentNode, l)
                : e.nodeType === 1 && Lc(e, l),
              Ao(e))
            : Lc(ln, l.stateNode));
        break;
      case 4:
        (u = ln),
          (d = Fr),
          (ln = l.stateNode.containerInfo),
          (Fr = !0),
          ji(e, t, l),
          (ln = u),
          (Fr = d);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !pn &&
          ((u = l.updateQueue), u !== null && ((u = u.lastEffect), u !== null))
        ) {
          d = u = u.next;
          do {
            var p = d,
              _ = p.destroy;
            (p = p.tag),
              _ !== void 0 && (p & 2 || p & 4) && yf(l, t, _),
              (d = d.next);
          } while (d !== u);
        }
        ji(e, t, l);
        break;
      case 1:
        if (
          !pn &&
          (lo(l, t),
          (u = l.stateNode),
          typeof u.componentWillUnmount == 'function')
        )
          try {
            (u.props = l.memoizedProps),
              (u.state = l.memoizedState),
              u.componentWillUnmount();
          } catch (E) {
            Ct(l, t, E);
          }
        ji(e, t, l);
        break;
      case 21:
        ji(e, t, l);
        break;
      case 22:
        l.mode & 1
          ? ((pn = (u = pn) || l.memoizedState !== null), ji(e, t, l), (pn = u))
          : ji(e, t, l);
        break;
      default:
        ji(e, t, l);
    }
  }
  function Mm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var l = e.stateNode;
      l === null && (l = e.stateNode = new Ev()),
        t.forEach(function (u) {
          var d = jv.bind(null, e, u);
          l.has(u) || (l.add(u), u.then(d, d));
        });
    }
  }
  function Ir(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var u = 0; u < l.length; u++) {
        var d = l[u];
        try {
          var p = e,
            _ = t,
            E = _;
          e: for (; E !== null; ) {
            switch (E.tag) {
              case 5:
                (ln = E.stateNode), (Fr = !1);
                break e;
              case 3:
                (ln = E.stateNode.containerInfo), (Fr = !0);
                break e;
              case 4:
                (ln = E.stateNode.containerInfo), (Fr = !0);
                break e;
            }
            E = E.return;
          }
          if (ln === null) throw Error(r(160));
          Nm(p, _, d), (ln = null), (Fr = !1);
          var N = d.alternate;
          N !== null && (N.return = null), (d.return = null);
        } catch (B) {
          Ct(d, t, B);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Lm(t, e), (t = t.sibling);
  }
  function Lm(e, t) {
    var l = e.alternate,
      u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ir(t, e), Qr(e), u & 4)) {
          try {
            oa(3, e, e.return), $s(3, e);
          } catch (_e) {
            Ct(e, e.return, _e);
          }
          try {
            oa(5, e, e.return);
          } catch (_e) {
            Ct(e, e.return, _e);
          }
        }
        break;
      case 1:
        Ir(t, e), Qr(e), u & 512 && l !== null && lo(l, l.return);
        break;
      case 5:
        if (
          (Ir(t, e),
          Qr(e),
          u & 512 && l !== null && lo(l, l.return),
          e.flags & 32)
        ) {
          var d = e.stateNode;
          try {
            pt(d, '');
          } catch (_e) {
            Ct(e, e.return, _e);
          }
        }
        if (u & 4 && ((d = e.stateNode), d != null)) {
          var p = e.memoizedProps,
            _ = l !== null ? l.memoizedProps : p,
            E = e.type,
            N = e.updateQueue;
          if (((e.updateQueue = null), N !== null))
            try {
              E === 'input' && p.type === 'radio' && p.name != null && bt(d, p),
                kn(E, _);
              var B = kn(E, p);
              for (_ = 0; _ < N.length; _ += 2) {
                var ne = N[_],
                  ie = N[_ + 1];
                ne === 'style'
                  ? Un(d, ie)
                  : ne === 'dangerouslySetInnerHTML'
                    ? nn(d, ie)
                    : ne === 'children'
                      ? pt(d, ie)
                      : I(d, ne, ie, B);
              }
              switch (E) {
                case 'input':
                  W(d, p);
                  break;
                case 'textarea':
                  In(d, p);
                  break;
                case 'select':
                  var te = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!p.multiple;
                  var ce = p.value;
                  ce != null
                    ? Xe(d, !!p.multiple, ce, !1)
                    : te !== !!p.multiple &&
                      (p.defaultValue != null
                        ? Xe(d, !!p.multiple, p.defaultValue, !0)
                        : Xe(d, !!p.multiple, p.multiple ? [] : '', !1));
              }
              d[Ko] = p;
            } catch (_e) {
              Ct(e, e.return, _e);
            }
        }
        break;
      case 6:
        if ((Ir(t, e), Qr(e), u & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          (d = e.stateNode), (p = e.memoizedProps);
          try {
            d.nodeValue = p;
          } catch (_e) {
            Ct(e, e.return, _e);
          }
        }
        break;
      case 3:
        if (
          (Ir(t, e), Qr(e), u & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ao(t.containerInfo);
          } catch (_e) {
            Ct(e, e.return, _e);
          }
        break;
      case 4:
        Ir(t, e), Qr(e);
        break;
      case 13:
        Ir(t, e),
          Qr(e),
          (d = e.child),
          d.flags & 8192 &&
            ((p = d.memoizedState !== null),
            (d.stateNode.isHidden = p),
            !p ||
              (d.alternate !== null && d.alternate.memoizedState !== null) ||
              (kf = Ue())),
          u & 4 && Mm(e);
        break;
      case 22:
        if (
          ((ne = l !== null && l.memoizedState !== null),
          e.mode & 1 ? ((pn = (B = pn) || ne), Ir(t, e), (pn = B)) : Ir(t, e),
          Qr(e),
          u & 8192)
        ) {
          if (
            ((B = e.memoizedState !== null),
            (e.stateNode.isHidden = B) && !ne && e.mode & 1)
          )
            for (de = e, ne = e.child; ne !== null; ) {
              for (ie = de = ne; de !== null; ) {
                switch (((te = de), (ce = te.child), te.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    oa(4, te, te.return);
                    break;
                  case 1:
                    lo(te, te.return);
                    var ye = te.stateNode;
                    if (typeof ye.componentWillUnmount == 'function') {
                      (u = te), (l = te.return);
                      try {
                        (t = u),
                          (ye.props = t.memoizedProps),
                          (ye.state = t.memoizedState),
                          ye.componentWillUnmount();
                      } catch (_e) {
                        Ct(u, l, _e);
                      }
                    }
                    break;
                  case 5:
                    lo(te, te.return);
                    break;
                  case 22:
                    if (te.memoizedState !== null) {
                      zm(ie);
                      continue;
                    }
                }
                ce !== null ? ((ce.return = te), (de = ce)) : zm(ie);
              }
              ne = ne.sibling;
            }
          e: for (ne = null, ie = e; ; ) {
            if (ie.tag === 5) {
              if (ne === null) {
                ne = ie;
                try {
                  (d = ie.stateNode),
                    B
                      ? ((p = d.style),
                        typeof p.setProperty == 'function'
                          ? p.setProperty('display', 'none', 'important')
                          : (p.display = 'none'))
                      : ((E = ie.stateNode),
                        (N = ie.memoizedProps.style),
                        (_ =
                          N != null && N.hasOwnProperty('display')
                            ? N.display
                            : null),
                        (E.style.display = Hr('display', _)));
                } catch (_e) {
                  Ct(e, e.return, _e);
                }
              }
            } else if (ie.tag === 6) {
              if (ne === null)
                try {
                  ie.stateNode.nodeValue = B ? '' : ie.memoizedProps;
                } catch (_e) {
                  Ct(e, e.return, _e);
                }
            } else if (
              ((ie.tag !== 22 && ie.tag !== 23) ||
                ie.memoizedState === null ||
                ie === e) &&
              ie.child !== null
            ) {
              (ie.child.return = ie), (ie = ie.child);
              continue;
            }
            if (ie === e) break e;
            for (; ie.sibling === null; ) {
              if (ie.return === null || ie.return === e) break e;
              ne === ie && (ne = null), (ie = ie.return);
            }
            ne === ie && (ne = null),
              (ie.sibling.return = ie.return),
              (ie = ie.sibling);
          }
        }
        break;
      case 19:
        Ir(t, e), Qr(e), u & 4 && Mm(e);
        break;
      case 21:
        break;
      default:
        Ir(t, e), Qr(e);
    }
  }
  function Qr(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var l = e.return; l !== null; ) {
            if (Rm(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(r(160));
        }
        switch (u.tag) {
          case 5:
            var d = u.stateNode;
            u.flags & 32 && (pt(d, ''), (u.flags &= -33));
            var p = Dm(e);
            xf(e, p, d);
            break;
          case 3:
          case 4:
            var _ = u.stateNode.containerInfo,
              E = Dm(e);
            vf(e, E, _);
            break;
          default:
            throw Error(r(161));
        }
      } catch (N) {
        Ct(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Tv(e, t, l) {
    (de = e), Om(e);
  }
  function Om(e, t, l) {
    for (var u = (e.mode & 1) !== 0; de !== null; ) {
      var d = de,
        p = d.child;
      if (d.tag === 22 && u) {
        var _ = d.memoizedState !== null || bs;
        if (!_) {
          var E = d.alternate,
            N = (E !== null && E.memoizedState !== null) || pn;
          E = bs;
          var B = pn;
          if (((bs = _), (pn = N) && !B))
            for (de = d; de !== null; )
              (_ = de),
                (N = _.child),
                _.tag === 22 && _.memoizedState !== null
                  ? Fm(d)
                  : N !== null
                    ? ((N.return = _), (de = N))
                    : Fm(d);
          for (; p !== null; ) (de = p), Om(p), (p = p.sibling);
          (de = d), (bs = E), (pn = B);
        }
        jm(e);
      } else
        d.subtreeFlags & 8772 && p !== null
          ? ((p.return = d), (de = p))
          : jm(e);
    }
  }
  function jm(e) {
    for (; de !== null; ) {
      var t = de;
      if (t.flags & 8772) {
        var l = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                pn || $s(5, t);
                break;
              case 1:
                var u = t.stateNode;
                if (t.flags & 4 && !pn)
                  if (l === null) u.componentDidMount();
                  else {
                    var d =
                      t.elementType === t.type
                        ? l.memoizedProps
                        : zr(t.type, l.memoizedProps);
                    u.componentDidUpdate(
                      d,
                      l.memoizedState,
                      u.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var p = t.updateQueue;
                p !== null && zp(t, p, u);
                break;
              case 3:
                var _ = t.updateQueue;
                if (_ !== null) {
                  if (((l = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        l = t.child.stateNode;
                        break;
                      case 1:
                        l = t.child.stateNode;
                    }
                  zp(t, _, l);
                }
                break;
              case 5:
                var E = t.stateNode;
                if (l === null && t.flags & 4) {
                  l = E;
                  var N = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      N.autoFocus && l.focus();
                      break;
                    case 'img':
                      N.src && (l.src = N.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var B = t.alternate;
                  if (B !== null) {
                    var ne = B.memoizedState;
                    if (ne !== null) {
                      var ie = ne.dehydrated;
                      ie !== null && Ao(ie);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(r(163));
            }
          pn || (t.flags & 512 && _f(t));
        } catch (te) {
          Ct(t, t.return, te);
        }
      }
      if (t === e) {
        de = null;
        break;
      }
      if (((l = t.sibling), l !== null)) {
        (l.return = t.return), (de = l);
        break;
      }
      de = t.return;
    }
  }
  function zm(e) {
    for (; de !== null; ) {
      var t = de;
      if (t === e) {
        de = null;
        break;
      }
      var l = t.sibling;
      if (l !== null) {
        (l.return = t.return), (de = l);
        break;
      }
      de = t.return;
    }
  }
  function Fm(e) {
    for (; de !== null; ) {
      var t = de;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var l = t.return;
            try {
              $s(4, t);
            } catch (N) {
              Ct(t, l, N);
            }
            break;
          case 1:
            var u = t.stateNode;
            if (typeof u.componentDidMount == 'function') {
              var d = t.return;
              try {
                u.componentDidMount();
              } catch (N) {
                Ct(t, d, N);
              }
            }
            var p = t.return;
            try {
              _f(t);
            } catch (N) {
              Ct(t, p, N);
            }
            break;
          case 5:
            var _ = t.return;
            try {
              _f(t);
            } catch (N) {
              Ct(t, _, N);
            }
        }
      } catch (N) {
        Ct(t, t.return, N);
      }
      if (t === e) {
        de = null;
        break;
      }
      var E = t.sibling;
      if (E !== null) {
        (E.return = t.return), (de = E);
        break;
      }
      de = t.return;
    }
  }
  var Pv = Math.ceil,
    Bs = F.ReactCurrentDispatcher,
    wf = F.ReactCurrentOwner,
    Sr = F.ReactCurrentBatchConfig,
    qe = 0,
    qt = null,
    jt = null,
    on = 0,
    lr = 0,
    oo = Di(0),
    Wt = 0,
    aa = null,
    hl = 0,
    Vs = 0,
    Sf = 0,
    sa = null,
    Yn = null,
    kf = 0,
    ao = 1 / 0,
    pi = null,
    Hs = !1,
    Ef = null,
    zi = null,
    Ws = !1,
    Fi = null,
    Ys = 0,
    ua = 0,
    Cf = null,
    Xs = -1,
    Qs = 0;
  function Rn() {
    return qe & 6 ? Ue() : Xs !== -1 ? Xs : (Xs = Ue());
  }
  function Ii(e) {
    return e.mode & 1
      ? qe & 2 && on !== 0
        ? on & -on
        : cv.transition !== null
          ? (Qs === 0 && (Qs = Dh()), Qs)
          : ((e = it),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Ah(e.type))),
            e)
      : 1;
  }
  function Ar(e, t, l, u) {
    if (50 < ua) throw ((ua = 0), (Cf = null), Error(r(185)));
    Oo(e, l, u),
      (!(qe & 2) || e !== qt) &&
        (e === qt && (!(qe & 2) && (Vs |= l), Wt === 4 && Ai(e, on)),
        Xn(e, u),
        l === 1 &&
          qe === 0 &&
          !(t.mode & 1) &&
          ((ao = Ue() + 500), Ss && Mi()));
  }
  function Xn(e, t) {
    var l = e.callbackNode;
    c_(e, t);
    var u = rs(e, e === qt ? on : 0);
    if (u === 0)
      l !== null && _t(l), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = u & -u), e.callbackPriority !== t)) {
      if ((l != null && _t(l), t === 1))
        e.tag === 0 ? uv(Am.bind(null, e)) : kp(Am.bind(null, e)),
          lv(function () {
            !(qe & 6) && Mi();
          }),
          (l = null);
      else {
        switch (Nh(u)) {
          case 1:
            l = be;
            break;
          case 4:
            l = vt;
            break;
          case 16:
            l = yr;
            break;
          case 536870912:
            l = Ge;
            break;
          default:
            l = yr;
        }
        l = Ym(l, Im.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = l);
    }
  }
  function Im(e, t) {
    if (((Xs = -1), (Qs = 0), qe & 6)) throw Error(r(327));
    var l = e.callbackNode;
    if (so() && e.callbackNode !== l) return null;
    var u = rs(e, e === qt ? on : 0);
    if (u === 0) return null;
    if (u & 30 || u & e.expiredLanes || t) t = Ks(e, u);
    else {
      t = u;
      var d = qe;
      qe |= 2;
      var p = bm();
      (qt !== e || on !== t) && ((pi = null), (ao = Ue() + 500), ml(e, t));
      do
        try {
          Nv();
          break;
        } catch (E) {
          Um(e, E);
        }
      while (!0);
      Bc(),
        (Bs.current = p),
        (qe = d),
        jt !== null ? (t = 0) : ((qt = null), (on = 0), (t = Wt));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((d = ic(e)), d !== 0 && ((u = d), (t = Tf(e, d)))),
        t === 1)
      )
        throw ((l = aa), ml(e, 0), Ai(e, u), Xn(e, Ue()), l);
      if (t === 6) Ai(e, u);
      else {
        if (
          ((d = e.current.alternate),
          !(u & 30) &&
            !Rv(d) &&
            ((t = Ks(e, u)),
            t === 2 && ((p = ic(e)), p !== 0 && ((u = p), (t = Tf(e, p)))),
            t === 1))
        )
          throw ((l = aa), ml(e, 0), Ai(e, u), Xn(e, Ue()), l);
        switch (((e.finishedWork = d), (e.finishedLanes = u), t)) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            gl(e, Yn, pi);
            break;
          case 3:
            if (
              (Ai(e, u),
              (u & 130023424) === u && ((t = kf + 500 - Ue()), 10 < t))
            ) {
              if (rs(e, 0) !== 0) break;
              if (((d = e.suspendedLanes), (d & u) !== u)) {
                Rn(), (e.pingedLanes |= e.suspendedLanes & d);
                break;
              }
              e.timeoutHandle = Mc(gl.bind(null, e, Yn, pi), t);
              break;
            }
            gl(e, Yn, pi);
            break;
          case 4:
            if ((Ai(e, u), (u & 4194240) === u)) break;
            for (t = e.eventTimes, d = -1; 0 < u; ) {
              var _ = 31 - Lr(u);
              (p = 1 << _), (_ = t[_]), _ > d && (d = _), (u &= ~p);
            }
            if (
              ((u = d),
              (u = Ue() - u),
              (u =
                (120 > u
                  ? 120
                  : 480 > u
                    ? 480
                    : 1080 > u
                      ? 1080
                      : 1920 > u
                        ? 1920
                        : 3e3 > u
                          ? 3e3
                          : 4320 > u
                            ? 4320
                            : 1960 * Pv(u / 1960)) - u),
              10 < u)
            ) {
              e.timeoutHandle = Mc(gl.bind(null, e, Yn, pi), u);
              break;
            }
            gl(e, Yn, pi);
            break;
          case 5:
            gl(e, Yn, pi);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return Xn(e, Ue()), e.callbackNode === l ? Im.bind(null, e) : null;
  }
  function Tf(e, t) {
    var l = sa;
    return (
      e.current.memoizedState.isDehydrated && (ml(e, t).flags |= 256),
      (e = Ks(e, t)),
      e !== 2 && ((t = Yn), (Yn = l), t !== null && Pf(t)),
      e
    );
  }
  function Pf(e) {
    Yn === null ? (Yn = e) : Yn.push.apply(Yn, e);
  }
  function Rv(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var l = t.updateQueue;
        if (l !== null && ((l = l.stores), l !== null))
          for (var u = 0; u < l.length; u++) {
            var d = l[u],
              p = d.getSnapshot;
            d = d.value;
            try {
              if (!Or(p(), d)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        (l.return = t), (t = l);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Ai(e, t) {
    for (
      t &= ~Sf,
        t &= ~Vs,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var l = 31 - Lr(t),
        u = 1 << l;
      (e[l] = -1), (t &= ~u);
    }
  }
  function Am(e) {
    if (qe & 6) throw Error(r(327));
    so();
    var t = rs(e, 0);
    if (!(t & 1)) return Xn(e, Ue()), null;
    var l = Ks(e, t);
    if (e.tag !== 0 && l === 2) {
      var u = ic(e);
      u !== 0 && ((t = u), (l = Tf(e, u)));
    }
    if (l === 1) throw ((l = aa), ml(e, 0), Ai(e, t), Xn(e, Ue()), l);
    if (l === 6) throw Error(r(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      gl(e, Yn, pi),
      Xn(e, Ue()),
      null
    );
  }
  function Rf(e, t) {
    var l = qe;
    qe |= 1;
    try {
      return e(t);
    } finally {
      (qe = l), qe === 0 && ((ao = Ue() + 500), Ss && Mi());
    }
  }
  function pl(e) {
    Fi !== null && Fi.tag === 0 && !(qe & 6) && so();
    var t = qe;
    qe |= 1;
    var l = Sr.transition,
      u = it;
    try {
      if (((Sr.transition = null), (it = 1), e)) return e();
    } finally {
      (it = u), (Sr.transition = l), (qe = t), !(qe & 6) && Mi();
    }
  }
  function Df() {
    (lr = oo.current), ht(oo);
  }
  function ml(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var l = e.timeoutHandle;
    if ((l !== -1 && ((e.timeoutHandle = -1), iv(l)), jt !== null))
      for (l = jt.return; l !== null; ) {
        var u = l;
        switch ((Ic(u), u.tag)) {
          case 1:
            (u = u.type.childContextTypes), u != null && xs();
            break;
          case 3:
            ro(), ht(Vn), ht(fn), Gc();
            break;
          case 5:
            Qc(u);
            break;
          case 4:
            ro();
            break;
          case 13:
            ht(xt);
            break;
          case 19:
            ht(xt);
            break;
          case 10:
            Vc(u.type._context);
            break;
          case 22:
          case 23:
            Df();
        }
        l = l.return;
      }
    if (
      ((qt = e),
      (jt = e = Ui(e.current, null)),
      (on = lr = t),
      (Wt = 0),
      (aa = null),
      (Sf = Vs = hl = 0),
      (Yn = sa = null),
      cl !== null)
    ) {
      for (t = 0; t < cl.length; t++)
        if (((l = cl[t]), (u = l.interleaved), u !== null)) {
          l.interleaved = null;
          var d = u.next,
            p = l.pending;
          if (p !== null) {
            var _ = p.next;
            (p.next = d), (u.next = _);
          }
          l.pending = u;
        }
      cl = null;
    }
    return e;
  }
  function Um(e, t) {
    do {
      var l = jt;
      try {
        if ((Bc(), (Ls.current = Fs), Os)) {
          for (var u = wt.memoizedState; u !== null; ) {
            var d = u.queue;
            d !== null && (d.pending = null), (u = u.next);
          }
          Os = !1;
        }
        if (
          ((dl = 0),
          (Gt = Ht = wt = null),
          (ta = !1),
          (na = 0),
          (wf.current = null),
          l === null || l.return === null)
        ) {
          (Wt = 1), (aa = t), (jt = null);
          break;
        }
        e: {
          var p = e,
            _ = l.return,
            E = l,
            N = t;
          if (
            ((t = on),
            (E.flags |= 32768),
            N !== null && typeof N == 'object' && typeof N.then == 'function')
          ) {
            var B = N,
              ne = E,
              ie = ne.tag;
            if (!(ne.mode & 1) && (ie === 0 || ie === 11 || ie === 15)) {
              var te = ne.alternate;
              te
                ? ((ne.updateQueue = te.updateQueue),
                  (ne.memoizedState = te.memoizedState),
                  (ne.lanes = te.lanes))
                : ((ne.updateQueue = null), (ne.memoizedState = null));
            }
            var ce = cm(_);
            if (ce !== null) {
              (ce.flags &= -257),
                fm(ce, _, E, p, t),
                ce.mode & 1 && um(p, B, t),
                (t = ce),
                (N = B);
              var ye = t.updateQueue;
              if (ye === null) {
                var _e = new Set();
                _e.add(N), (t.updateQueue = _e);
              } else ye.add(N);
              break e;
            } else {
              if (!(t & 1)) {
                um(p, B, t), Nf();
                break e;
              }
              N = Error(r(426));
            }
          } else if (mt && E.mode & 1) {
            var Dt = cm(_);
            if (Dt !== null) {
              !(Dt.flags & 65536) && (Dt.flags |= 256),
                fm(Dt, _, E, p, t),
                bc(io(N, E));
              break e;
            }
          }
          (p = N = io(N, E)),
            Wt !== 4 && (Wt = 2),
            sa === null ? (sa = [p]) : sa.push(p),
            (p = _);
          do {
            switch (p.tag) {
              case 3:
                (p.flags |= 65536), (t &= -t), (p.lanes |= t);
                var A = am(p, N, t);
                jp(p, A);
                break e;
              case 1:
                E = N;
                var L = p.type,
                  b = p.stateNode;
                if (
                  !(p.flags & 128) &&
                  (typeof L.getDerivedStateFromError == 'function' ||
                    (b !== null &&
                      typeof b.componentDidCatch == 'function' &&
                      (zi === null || !zi.has(b))))
                ) {
                  (p.flags |= 65536), (t &= -t), (p.lanes |= t);
                  var oe = sm(p, E, t);
                  jp(p, oe);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Bm(l);
      } catch (ve) {
        (t = ve), jt === l && l !== null && (jt = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function bm() {
    var e = Bs.current;
    return (Bs.current = Fs), e === null ? Fs : e;
  }
  function Nf() {
    (Wt === 0 || Wt === 3 || Wt === 2) && (Wt = 4),
      qt === null || (!(hl & 268435455) && !(Vs & 268435455)) || Ai(qt, on);
  }
  function Ks(e, t) {
    var l = qe;
    qe |= 2;
    var u = bm();
    (qt !== e || on !== t) && ((pi = null), ml(e, t));
    do
      try {
        Dv();
        break;
      } catch (d) {
        Um(e, d);
      }
    while (!0);
    if ((Bc(), (qe = l), (Bs.current = u), jt !== null)) throw Error(r(261));
    return (qt = null), (on = 0), Wt;
  }
  function Dv() {
    for (; jt !== null; ) $m(jt);
  }
  function Nv() {
    for (; jt !== null && !Tn(); ) $m(jt);
  }
  function $m(e) {
    var t = Wm(e.alternate, e, lr);
    (e.memoizedProps = e.pendingProps),
      t === null ? Bm(e) : (jt = t),
      (wf.current = null);
  }
  function Bm(e) {
    var t = e;
    do {
      var l = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((l = kv(l, t)), l !== null)) {
          (l.flags &= 32767), (jt = l);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Wt = 6), (jt = null);
          return;
        }
      } else if (((l = Sv(l, t, lr)), l !== null)) {
        jt = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        jt = t;
        return;
      }
      jt = t = e;
    } while (t !== null);
    Wt === 0 && (Wt = 5);
  }
  function gl(e, t, l) {
    var u = it,
      d = Sr.transition;
    try {
      (Sr.transition = null), (it = 1), Mv(e, t, l, u);
    } finally {
      (Sr.transition = d), (it = u);
    }
    return null;
  }
  function Mv(e, t, l, u) {
    do so();
    while (Fi !== null);
    if (qe & 6) throw Error(r(327));
    l = e.finishedWork;
    var d = e.finishedLanes;
    if (l === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), l === e.current))
      throw Error(r(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var p = l.lanes | l.childLanes;
    if (
      (f_(e, p),
      e === qt && ((jt = qt = null), (on = 0)),
      (!(l.subtreeFlags & 2064) && !(l.flags & 2064)) ||
        Ws ||
        ((Ws = !0),
        Ym(yr, function () {
          return so(), null;
        })),
      (p = (l.flags & 15990) !== 0),
      l.subtreeFlags & 15990 || p)
    ) {
      (p = Sr.transition), (Sr.transition = null);
      var _ = it;
      it = 1;
      var E = qe;
      (qe |= 4),
        (wf.current = null),
        Cv(e, l),
        Lm(l, e),
        q_(Dc),
        (os = !!Rc),
        (Dc = Rc = null),
        (e.current = l),
        Tv(l),
        Bn(),
        (qe = E),
        (it = _),
        (Sr.transition = p);
    } else e.current = l;
    if (
      (Ws && ((Ws = !1), (Fi = e), (Ys = d)),
      (p = e.pendingLanes),
      p === 0 && (zi = null),
      oi(l.stateNode),
      Xn(e, Ue()),
      t !== null)
    )
      for (u = e.onRecoverableError, l = 0; l < t.length; l++)
        (d = t[l]), u(d.value, {componentStack: d.stack, digest: d.digest});
    if (Hs) throw ((Hs = !1), (e = Ef), (Ef = null), e);
    return (
      Ys & 1 && e.tag !== 0 && so(),
      (p = e.pendingLanes),
      p & 1 ? (e === Cf ? ua++ : ((ua = 0), (Cf = e))) : (ua = 0),
      Mi(),
      null
    );
  }
  function so() {
    if (Fi !== null) {
      var e = Nh(Ys),
        t = Sr.transition,
        l = it;
      try {
        if (((Sr.transition = null), (it = 16 > e ? 16 : e), Fi === null))
          var u = !1;
        else {
          if (((e = Fi), (Fi = null), (Ys = 0), qe & 6)) throw Error(r(331));
          var d = qe;
          for (qe |= 4, de = e.current; de !== null; ) {
            var p = de,
              _ = p.child;
            if (de.flags & 16) {
              var E = p.deletions;
              if (E !== null) {
                for (var N = 0; N < E.length; N++) {
                  var B = E[N];
                  for (de = B; de !== null; ) {
                    var ne = de;
                    switch (ne.tag) {
                      case 0:
                      case 11:
                      case 15:
                        oa(8, ne, p);
                    }
                    var ie = ne.child;
                    if (ie !== null) (ie.return = ne), (de = ie);
                    else
                      for (; de !== null; ) {
                        ne = de;
                        var te = ne.sibling,
                          ce = ne.return;
                        if ((Pm(ne), ne === B)) {
                          de = null;
                          break;
                        }
                        if (te !== null) {
                          (te.return = ce), (de = te);
                          break;
                        }
                        de = ce;
                      }
                  }
                }
                var ye = p.alternate;
                if (ye !== null) {
                  var _e = ye.child;
                  if (_e !== null) {
                    ye.child = null;
                    do {
                      var Dt = _e.sibling;
                      (_e.sibling = null), (_e = Dt);
                    } while (_e !== null);
                  }
                }
                de = p;
              }
            }
            if (p.subtreeFlags & 2064 && _ !== null) (_.return = p), (de = _);
            else
              e: for (; de !== null; ) {
                if (((p = de), p.flags & 2048))
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      oa(9, p, p.return);
                  }
                var A = p.sibling;
                if (A !== null) {
                  (A.return = p.return), (de = A);
                  break e;
                }
                de = p.return;
              }
          }
          var L = e.current;
          for (de = L; de !== null; ) {
            _ = de;
            var b = _.child;
            if (_.subtreeFlags & 2064 && b !== null) (b.return = _), (de = b);
            else
              e: for (_ = L; de !== null; ) {
                if (((E = de), E.flags & 2048))
                  try {
                    switch (E.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $s(9, E);
                    }
                  } catch (ve) {
                    Ct(E, E.return, ve);
                  }
                if (E === _) {
                  de = null;
                  break e;
                }
                var oe = E.sibling;
                if (oe !== null) {
                  (oe.return = E.return), (de = oe);
                  break e;
                }
                de = E.return;
              }
          }
          if (
            ((qe = d),
            Mi(),
            Kt && typeof Kt.onPostCommitFiberRoot == 'function')
          )
            try {
              Kt.onPostCommitFiberRoot(rn, e);
            } catch {}
          u = !0;
        }
        return u;
      } finally {
        (it = l), (Sr.transition = t);
      }
    }
    return !1;
  }
  function Vm(e, t, l) {
    (t = io(l, t)),
      (t = am(e, t, 1)),
      (e = Oi(e, t, 1)),
      (t = Rn()),
      e !== null && (Oo(e, 1, t), Xn(e, t));
  }
  function Ct(e, t, l) {
    if (e.tag === 3) Vm(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Vm(t, e, l);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof u.componentDidCatch == 'function' &&
              (zi === null || !zi.has(u)))
          ) {
            (e = io(l, e)),
              (e = sm(t, e, 1)),
              (t = Oi(t, e, 1)),
              (e = Rn()),
              t !== null && (Oo(t, 1, e), Xn(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Lv(e, t, l) {
    var u = e.pingCache;
    u !== null && u.delete(t),
      (t = Rn()),
      (e.pingedLanes |= e.suspendedLanes & l),
      qt === e &&
        (on & l) === l &&
        (Wt === 4 || (Wt === 3 && (on & 130023424) === on && 500 > Ue() - kf)
          ? ml(e, 0)
          : (Sf |= l)),
      Xn(e, t);
  }
  function Hm(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = ns), (ns <<= 1), !(ns & 130023424) && (ns = 4194304))
        : (t = 1));
    var l = Rn();
    (e = fi(e, t)), e !== null && (Oo(e, t, l), Xn(e, l));
  }
  function Ov(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), Hm(e, l);
  }
  function jv(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var u = e.stateNode,
          d = e.memoizedState;
        d !== null && (l = d.retryLane);
        break;
      case 19:
        u = e.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    u !== null && u.delete(t), Hm(e, l);
  }
  var Wm;
  Wm = function (e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Vn.current) Wn = !0;
      else {
        if (!(e.lanes & l) && !(t.flags & 128)) return (Wn = !1), wv(e, t, l);
        Wn = !!(e.flags & 131072);
      }
    else (Wn = !1), mt && t.flags & 1048576 && Ep(t, Es, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var u = t.type;
        Us(e, t), (e = t.pendingProps);
        var d = Gl(t, fn.current);
        no(t, l), (d = Zc(null, t, u, e, d, l));
        var p = ef();
        return (
          (t.flags |= 1),
          typeof d == 'object' &&
          d !== null &&
          typeof d.render == 'function' &&
          d.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Hn(u) ? ((p = !0), ws(t)) : (p = !1),
              (t.memoizedState =
                d.state !== null && d.state !== void 0 ? d.state : null),
              Yc(t),
              (d.updater = Is),
              (t.stateNode = d),
              (d._reactInternals = t),
              af(t, u, e, l),
              (t = ff(null, t, u, !0, p, l)))
            : ((t.tag = 0), mt && p && Fc(t), Pn(null, t, d, l), (t = t.child)),
          t
        );
      case 16:
        u = t.elementType;
        e: {
          switch (
            (Us(e, t),
            (e = t.pendingProps),
            (d = u._init),
            (u = d(u._payload)),
            (t.type = u),
            (d = t.tag = Fv(u)),
            (e = zr(u, e)),
            d)
          ) {
            case 0:
              t = cf(null, t, u, e, l);
              break e;
            case 1:
              t = ym(null, t, u, e, l);
              break e;
            case 11:
              t = dm(null, t, u, e, l);
              break e;
            case 14:
              t = hm(null, t, u, zr(u.type, e), l);
              break e;
          }
          throw Error(r(306, u, ''));
        }
        return t;
      case 0:
        return (
          (u = t.type),
          (d = t.pendingProps),
          (d = t.elementType === u ? d : zr(u, d)),
          cf(e, t, u, d, l)
        );
      case 1:
        return (
          (u = t.type),
          (d = t.pendingProps),
          (d = t.elementType === u ? d : zr(u, d)),
          ym(e, t, u, d, l)
        );
      case 3:
        e: {
          if ((_m(t), e === null)) throw Error(r(387));
          (u = t.pendingProps),
            (p = t.memoizedState),
            (d = p.element),
            Op(e, t),
            Ns(t, u, null, l);
          var _ = t.memoizedState;
          if (((u = _.element), p.isDehydrated))
            if (
              ((p = {
                element: u,
                isDehydrated: !1,
                cache: _.cache,
                pendingSuspenseBoundaries: _.pendingSuspenseBoundaries,
                transitions: _.transitions,
              }),
              (t.updateQueue.baseState = p),
              (t.memoizedState = p),
              t.flags & 256)
            ) {
              (d = io(Error(r(423)), t)), (t = vm(e, t, u, l, d));
              break e;
            } else if (u !== d) {
              (d = io(Error(r(424)), t)), (t = vm(e, t, u, l, d));
              break e;
            } else
              for (
                ir = Ri(t.stateNode.containerInfo.firstChild),
                  rr = t,
                  mt = !0,
                  jr = null,
                  l = Mp(t, null, u, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
          else {
            if ((Zl(), u === d)) {
              t = hi(e, t, l);
              break e;
            }
            Pn(e, t, u, l);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Fp(t),
          e === null && Uc(t),
          (u = t.type),
          (d = t.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (_ = d.children),
          Nc(u, d) ? (_ = null) : p !== null && Nc(u, p) && (t.flags |= 32),
          gm(e, t),
          Pn(e, t, _, l),
          t.child
        );
      case 6:
        return e === null && Uc(t), null;
      case 13:
        return xm(e, t, l);
      case 4:
        return (
          Xc(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          e === null ? (t.child = eo(t, null, u, l)) : Pn(e, t, u, l),
          t.child
        );
      case 11:
        return (
          (u = t.type),
          (d = t.pendingProps),
          (d = t.elementType === u ? d : zr(u, d)),
          dm(e, t, u, d, l)
        );
      case 7:
        return Pn(e, t, t.pendingProps, l), t.child;
      case 8:
        return Pn(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return Pn(e, t, t.pendingProps.children, l), t.child;
      case 10:
        e: {
          if (
            ((u = t.type._context),
            (d = t.pendingProps),
            (p = t.memoizedProps),
            (_ = d.value),
            ut(Ps, u._currentValue),
            (u._currentValue = _),
            p !== null)
          )
            if (Or(p.value, _)) {
              if (p.children === d.children && !Vn.current) {
                t = hi(e, t, l);
                break e;
              }
            } else
              for (p = t.child, p !== null && (p.return = t); p !== null; ) {
                var E = p.dependencies;
                if (E !== null) {
                  _ = p.child;
                  for (var N = E.firstContext; N !== null; ) {
                    if (N.context === u) {
                      if (p.tag === 1) {
                        (N = di(-1, l & -l)), (N.tag = 2);
                        var B = p.updateQueue;
                        if (B !== null) {
                          B = B.shared;
                          var ne = B.pending;
                          ne === null
                            ? (N.next = N)
                            : ((N.next = ne.next), (ne.next = N)),
                            (B.pending = N);
                        }
                      }
                      (p.lanes |= l),
                        (N = p.alternate),
                        N !== null && (N.lanes |= l),
                        Hc(p.return, l, t),
                        (E.lanes |= l);
                      break;
                    }
                    N = N.next;
                  }
                } else if (p.tag === 10) _ = p.type === t.type ? null : p.child;
                else if (p.tag === 18) {
                  if (((_ = p.return), _ === null)) throw Error(r(341));
                  (_.lanes |= l),
                    (E = _.alternate),
                    E !== null && (E.lanes |= l),
                    Hc(_, l, t),
                    (_ = p.sibling);
                } else _ = p.child;
                if (_ !== null) _.return = p;
                else
                  for (_ = p; _ !== null; ) {
                    if (_ === t) {
                      _ = null;
                      break;
                    }
                    if (((p = _.sibling), p !== null)) {
                      (p.return = _.return), (_ = p);
                      break;
                    }
                    _ = _.return;
                  }
                p = _;
              }
          Pn(e, t, d.children, l), (t = t.child);
        }
        return t;
      case 9:
        return (
          (d = t.type),
          (u = t.pendingProps.children),
          no(t, l),
          (d = xr(d)),
          (u = u(d)),
          (t.flags |= 1),
          Pn(e, t, u, l),
          t.child
        );
      case 14:
        return (
          (u = t.type),
          (d = zr(u, t.pendingProps)),
          (d = zr(u.type, d)),
          hm(e, t, u, d, l)
        );
      case 15:
        return pm(e, t, t.type, t.pendingProps, l);
      case 17:
        return (
          (u = t.type),
          (d = t.pendingProps),
          (d = t.elementType === u ? d : zr(u, d)),
          Us(e, t),
          (t.tag = 1),
          Hn(u) ? ((e = !0), ws(t)) : (e = !1),
          no(t, l),
          lm(t, u, d),
          af(t, u, d, l),
          ff(null, t, u, !0, e, l)
        );
      case 19:
        return Sm(e, t, l);
      case 22:
        return mm(e, t, l);
    }
    throw Error(r(156, t.tag));
  };
  function Ym(e, t) {
    return Ze(e, t);
  }
  function zv(e, t, l, u) {
    (this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function kr(e, t, l, u) {
    return new zv(e, t, l, u);
  }
  function Mf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Fv(e) {
    if (typeof e == 'function') return Mf(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === le)) return 11;
      if (e === ge) return 14;
    }
    return 2;
  }
  function Ui(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = kr(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 14680064),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : {lanes: t.lanes, firstContext: t.firstContext}),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      l
    );
  }
  function Gs(e, t, l, u, d, p) {
    var _ = 2;
    if (((u = e), typeof e == 'function')) Mf(e) && (_ = 1);
    else if (typeof e == 'string') _ = 5;
    else
      e: switch (e) {
        case U:
          return yl(l.children, d, p, t);
        case H:
          (_ = 8), (d |= 8);
          break;
        case X:
          return (
            (e = kr(12, l, t, d | 2)), (e.elementType = X), (e.lanes = p), e
          );
        case Se:
          return (e = kr(13, l, t, d)), (e.elementType = Se), (e.lanes = p), e;
        case Pe:
          return (e = kr(19, l, t, d)), (e.elementType = Pe), (e.lanes = p), e;
        case ue:
          return qs(l, d, p, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case G:
                _ = 10;
                break e;
              case me:
                _ = 9;
                break e;
              case le:
                _ = 11;
                break e;
              case ge:
                _ = 14;
                break e;
              case Te:
                (_ = 16), (u = null);
                break e;
            }
          throw Error(r(130, e == null ? e : typeof e, ''));
      }
    return (
      (t = kr(_, l, t, d)), (t.elementType = e), (t.type = u), (t.lanes = p), t
    );
  }
  function yl(e, t, l, u) {
    return (e = kr(7, e, u, t)), (e.lanes = l), e;
  }
  function qs(e, t, l, u) {
    return (
      (e = kr(22, e, u, t)),
      (e.elementType = ue),
      (e.lanes = l),
      (e.stateNode = {isHidden: !1}),
      e
    );
  }
  function Lf(e, t, l) {
    return (e = kr(6, e, null, t)), (e.lanes = l), e;
  }
  function Of(e, t, l) {
    return (
      (t = kr(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Iv(e, t, l, u, d) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = lc(0)),
      (this.expirationTimes = lc(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = lc(0)),
      (this.identifierPrefix = u),
      (this.onRecoverableError = d),
      (this.mutableSourceEagerHydrationData = null);
  }
  function jf(e, t, l, u, d, p, _, E, N) {
    return (
      (e = new Iv(e, t, l, E, N)),
      t === 1 ? ((t = 1), p === !0 && (t |= 8)) : (t = 0),
      (p = kr(3, null, null, t)),
      (e.current = p),
      (p.stateNode = e),
      (p.memoizedState = {
        element: u,
        isDehydrated: l,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Yc(p),
      e
    );
  }
  function Av(e, t, l) {
    var u =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: $,
      key: u == null ? null : '' + u,
      children: e,
      containerInfo: t,
      implementation: l,
    };
  }
  function Xm(e) {
    if (!e) return Ni;
    e = e._reactInternals;
    e: {
      if (we(e) !== e || e.tag !== 1) throw Error(r(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Hn(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(r(171));
    }
    if (e.tag === 1) {
      var l = e.type;
      if (Hn(l)) return wp(e, l, t);
    }
    return t;
  }
  function Qm(e, t, l, u, d, p, _, E, N) {
    return (
      (e = jf(l, u, !0, e, d, p, _, E, N)),
      (e.context = Xm(null)),
      (l = e.current),
      (u = Rn()),
      (d = Ii(l)),
      (p = di(u, d)),
      (p.callback = t ?? null),
      Oi(l, p, d),
      (e.current.lanes = d),
      Oo(e, d, u),
      Xn(e, u),
      e
    );
  }
  function Js(e, t, l, u) {
    var d = t.current,
      p = Rn(),
      _ = Ii(d);
    return (
      (l = Xm(l)),
      t.context === null ? (t.context = l) : (t.pendingContext = l),
      (t = di(p, _)),
      (t.payload = {element: e}),
      (u = u === void 0 ? null : u),
      u !== null && (t.callback = u),
      (e = Oi(d, t, _)),
      e !== null && (Ar(e, d, _, p), Ds(e, d, _)),
      _
    );
  }
  function Zs(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Km(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function zf(e, t) {
    Km(e, t), (e = e.alternate) && Km(e, t);
  }
  var Gm =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ff(e) {
    this._internalRoot = e;
  }
  (eu.prototype.render = Ff.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      Js(e, t, null, null);
    }),
    (eu.prototype.unmount = Ff.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          pl(function () {
            Js(null, e, null, null);
          }),
            (t[ai] = null);
        }
      });
  function eu(e) {
    this._internalRoot = e;
  }
  eu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Oh();
      e = {blockedOn: null, target: e, priority: t};
      for (var l = 0; l < Ci.length && t !== 0 && t < Ci[l].priority; l++);
      Ci.splice(l, 0, e), l === 0 && Fh(e);
    }
  };
  function If(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function tu(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function qm() {}
  function Uv(e, t, l, u, d) {
    if (d) {
      if (typeof u == 'function') {
        var p = u;
        u = function () {
          var B = Zs(_);
          p.call(B);
        };
      }
      var _ = Qm(t, u, e, 0, null, !1, !1, '', qm);
      return (
        (e._reactRootContainer = _),
        (e[ai] = _.current),
        Xo(e.nodeType === 8 ? e.parentNode : e),
        pl(),
        _
      );
    }
    for (; (d = e.lastChild); ) e.removeChild(d);
    if (typeof u == 'function') {
      var E = u;
      u = function () {
        var B = Zs(N);
        E.call(B);
      };
    }
    var N = jf(e, 0, !1, null, null, !1, !1, '', qm);
    return (
      (e._reactRootContainer = N),
      (e[ai] = N.current),
      Xo(e.nodeType === 8 ? e.parentNode : e),
      pl(function () {
        Js(t, N, l, u);
      }),
      N
    );
  }
  function nu(e, t, l, u, d) {
    var p = l._reactRootContainer;
    if (p) {
      var _ = p;
      if (typeof d == 'function') {
        var E = d;
        d = function () {
          var N = Zs(_);
          E.call(N);
        };
      }
      Js(t, _, e, d);
    } else _ = Uv(l, t, e, d, u);
    return Zs(_);
  }
  (Mh = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var l = Lo(t.pendingLanes);
          l !== 0 &&
            (oc(t, l | 1), Xn(t, Ue()), !(qe & 6) && ((ao = Ue() + 500), Mi()));
        }
        break;
      case 13:
        pl(function () {
          var u = fi(e, 1);
          if (u !== null) {
            var d = Rn();
            Ar(u, e, 1, d);
          }
        }),
          zf(e, 1);
    }
  }),
    (ac = function (e) {
      if (e.tag === 13) {
        var t = fi(e, 134217728);
        if (t !== null) {
          var l = Rn();
          Ar(t, e, 134217728, l);
        }
        zf(e, 134217728);
      }
    }),
    (Lh = function (e) {
      if (e.tag === 13) {
        var t = Ii(e),
          l = fi(e, t);
        if (l !== null) {
          var u = Rn();
          Ar(l, e, t, u);
        }
        zf(e, t);
      }
    }),
    (Oh = function () {
      return it;
    }),
    (jh = function (e, t) {
      var l = it;
      try {
        return (it = e), t();
      } finally {
        it = l;
      }
    }),
    (bn = function (e, t, l) {
      switch (t) {
        case 'input':
          if ((W(e, l), (t = l.name), l.type === 'radio' && t != null)) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var u = l[t];
              if (u !== e && u.form === e.form) {
                var d = vs(u);
                if (!d) throw Error(r(90));
                At(u), W(u, d);
              }
            }
          }
          break;
        case 'textarea':
          In(e, l);
          break;
        case 'select':
          (t = l.value), t != null && Xe(e, !!l.multiple, t, !1);
      }
    }),
    ($n = Rf),
    (D = pl);
  var bv = {usingClientEntryPoint: !1, Events: [Go, Ql, vs, Cn, Mr, Rf]},
    ca = {
      findFiberByHostInstance: ol,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    $v = {
      bundleType: ca.bundleType,
      version: ca.version,
      rendererPackageName: ca.rendererPackageName,
      rendererConfig: ca.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: F.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Vt(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: ca.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ru.isDisabled && ru.supportsFiber)
      try {
        (rn = ru.inject($v)), (Kt = ru);
      } catch {}
  }
  return (
    (Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bv),
    (Qn.createPortal = function (e, t) {
      var l =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!If(t)) throw Error(r(200));
      return Av(e, t, null, l);
    }),
    (Qn.createRoot = function (e, t) {
      if (!If(e)) throw Error(r(299));
      var l = !1,
        u = '',
        d = Gm;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (d = t.onRecoverableError)),
        (t = jf(e, 1, !1, null, null, l, !1, u, d)),
        (e[ai] = t.current),
        Xo(e.nodeType === 8 ? e.parentNode : e),
        new Ff(t)
      );
    }),
    (Qn.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(r(188))
          : ((e = Object.keys(e).join(',')), Error(r(268, e)));
      return (e = Vt(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Qn.flushSync = function (e) {
      return pl(e);
    }),
    (Qn.hydrate = function (e, t, l) {
      if (!tu(t)) throw Error(r(200));
      return nu(null, e, t, !0, l);
    }),
    (Qn.hydrateRoot = function (e, t, l) {
      if (!If(e)) throw Error(r(405));
      var u = (l != null && l.hydratedSources) || null,
        d = !1,
        p = '',
        _ = Gm;
      if (
        (l != null &&
          (l.unstable_strictMode === !0 && (d = !0),
          l.identifierPrefix !== void 0 && (p = l.identifierPrefix),
          l.onRecoverableError !== void 0 && (_ = l.onRecoverableError)),
        (t = Qm(t, null, e, 1, l ?? null, d, !1, p, _)),
        (e[ai] = t.current),
        Xo(e),
        u)
      )
        for (e = 0; e < u.length; e++)
          (l = u[e]),
            (d = l._getVersion),
            (d = d(l._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [l, d])
              : t.mutableSourceEagerHydrationData.push(l, d);
      return new eu(t);
    }),
    (Qn.render = function (e, t, l) {
      if (!tu(t)) throw Error(r(200));
      return nu(null, e, t, !1, l);
    }),
    (Qn.unmountComponentAtNode = function (e) {
      if (!tu(e)) throw Error(r(40));
      return e._reactRootContainer
        ? (pl(function () {
            nu(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[ai] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Qn.unstable_batchedUpdates = Rf),
    (Qn.unstable_renderSubtreeIntoContainer = function (e, t, l, u) {
      if (!tu(l)) throw Error(r(200));
      if (e == null || e._reactInternals === void 0) throw Error(r(38));
      return nu(e, t, l, !1, u);
    }),
    (Qn.version = '18.3.1-next-f1338f8080-20240426'),
    Qn
  );
}
var lg;
function m0() {
  if (lg) return bf.exports;
  lg = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (n) {
        console.error(n);
      }
  }
  return a(), (bf.exports = Kv()), bf.exports;
}
var og;
function Gv() {
  if (og) return iu;
  og = 1;
  var a = m0();
  return (iu.createRoot = a.createRoot), (iu.hydrateRoot = a.hydrateRoot), iu;
}
var qv = Gv(),
  da = {},
  ag;
function Jv() {
  if (ag) return da;
  (ag = 1),
    Object.defineProperty(da, '__esModule', {value: !0}),
    (da.parse = c),
    (da.serialize = m);
  const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    n = /^[\u0021-\u003A\u003C-\u007E]*$/,
    r =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
    o = Object.prototype.toString,
    s = (() => {
      const v = function () {};
      return (v.prototype = Object.create(null)), v;
    })();
  function c(v, y) {
    const S = new s(),
      w = v.length;
    if (w < 2) return S;
    const C = (y == null ? void 0 : y.decode) || g;
    let P = 0;
    do {
      const z = v.indexOf('=', P);
      if (z === -1) break;
      const I = v.indexOf(';', P),
        F = I === -1 ? w : I;
      if (z > F) {
        P = v.lastIndexOf(';', z - 1) + 1;
        continue;
      }
      const k = f(v, P, z),
        $ = h(v, z, k),
        U = v.slice(k, $);
      if (S[U] === void 0) {
        let H = f(v, z + 1, F),
          X = h(v, F, H);
        const G = C(v.slice(H, X));
        S[U] = G;
      }
      P = F + 1;
    } while (P < w);
    return S;
  }
  function f(v, y, S) {
    do {
      const w = v.charCodeAt(y);
      if (w !== 32 && w !== 9) return y;
    } while (++y < S);
    return S;
  }
  function h(v, y, S) {
    for (; y > S; ) {
      const w = v.charCodeAt(--y);
      if (w !== 32 && w !== 9) return y + 1;
    }
    return S;
  }
  function m(v, y, S) {
    const w = (S == null ? void 0 : S.encode) || encodeURIComponent;
    if (!a.test(v)) throw new TypeError(`argument name is invalid: ${v}`);
    const C = w(y);
    if (!n.test(C)) throw new TypeError(`argument val is invalid: ${y}`);
    let P = v + '=' + C;
    if (!S) return P;
    if (S.maxAge !== void 0) {
      if (!Number.isInteger(S.maxAge))
        throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);
      P += '; Max-Age=' + S.maxAge;
    }
    if (S.domain) {
      if (!r.test(S.domain))
        throw new TypeError(`option domain is invalid: ${S.domain}`);
      P += '; Domain=' + S.domain;
    }
    if (S.path) {
      if (!i.test(S.path))
        throw new TypeError(`option path is invalid: ${S.path}`);
      P += '; Path=' + S.path;
    }
    if (S.expires) {
      if (!x(S.expires) || !Number.isFinite(S.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${S.expires}`);
      P += '; Expires=' + S.expires.toUTCString();
    }
    if (
      (S.httpOnly && (P += '; HttpOnly'),
      S.secure && (P += '; Secure'),
      S.partitioned && (P += '; Partitioned'),
      S.priority)
    )
      switch (
        typeof S.priority == 'string' ? S.priority.toLowerCase() : void 0
      ) {
        case 'low':
          P += '; Priority=Low';
          break;
        case 'medium':
          P += '; Priority=Medium';
          break;
        case 'high':
          P += '; Priority=High';
          break;
        default:
          throw new TypeError(`option priority is invalid: ${S.priority}`);
      }
    if (S.sameSite)
      switch (
        typeof S.sameSite == 'string' ? S.sameSite.toLowerCase() : S.sameSite
      ) {
        case !0:
        case 'strict':
          P += '; SameSite=Strict';
          break;
        case 'lax':
          P += '; SameSite=Lax';
          break;
        case 'none':
          P += '; SameSite=None';
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${S.sameSite}`);
      }
    return P;
  }
  function g(v) {
    if (v.indexOf('%') === -1) return v;
    try {
      return decodeURIComponent(v);
    } catch {
      return v;
    }
  }
  function x(v) {
    return o.call(v) === '[object Date]';
  }
  return da;
}
Jv();
/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var sg = 'popstate';
function Zv(a = {}) {
  function n(i, o) {
    let {pathname: s, search: c, hash: f} = i.location;
    return Ua(
      '',
      {pathname: s, search: c, hash: f},
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    );
  }
  function r(i, o) {
    return typeof o == 'string' ? o : el(o);
  }
  return t1(n, r, null, a);
}
function Qe(a, n) {
  if (a === !1 || a === null || typeof a > 'u') throw new Error(n);
}
function sn(a, n) {
  if (!a) {
    typeof console < 'u' && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function e1() {
  return Math.random().toString(36).substring(2, 10);
}
function ug(a, n) {
  return {usr: a.state, key: a.key, idx: n};
}
function Ua(a, n, r = null, i) {
  return {
    pathname: typeof a == 'string' ? a : a.pathname,
    search: '',
    hash: '',
    ...(typeof n == 'string' ? il(n) : n),
    state: r,
    key: (n && n.key) || i || e1(),
  };
}
function el({pathname: a = '/', search: n = '', hash: r = ''}) {
  return (
    n && n !== '?' && (a += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (a += r.charAt(0) === '#' ? r : '#' + r),
    a
  );
}
function il(a) {
  let n = {};
  if (a) {
    let r = a.indexOf('#');
    r >= 0 && ((n.hash = a.substring(r)), (a = a.substring(0, r)));
    let i = a.indexOf('?');
    i >= 0 && ((n.search = a.substring(i)), (a = a.substring(0, i))),
      a && (n.pathname = a);
  }
  return n;
}
function t1(a, n, r, i = {}) {
  let {window: o = document.defaultView, v5Compat: s = !1} = i,
    c = o.history,
    f = 'POP',
    h = null,
    m = g();
  m == null && ((m = 0), c.replaceState({...c.state, idx: m}, ''));
  function g() {
    return (c.state || {idx: null}).idx;
  }
  function x() {
    f = 'POP';
    let C = g(),
      P = C == null ? null : C - m;
    (m = C), h && h({action: f, location: w.location, delta: P});
  }
  function v(C, P) {
    f = 'PUSH';
    let z = Ua(w.location, C, P);
    m = g() + 1;
    let I = ug(z, m),
      F = w.createHref(z);
    try {
      c.pushState(I, '', F);
    } catch (k) {
      if (k instanceof DOMException && k.name === 'DataCloneError') throw k;
      o.location.assign(F);
    }
    s && h && h({action: f, location: w.location, delta: 1});
  }
  function y(C, P) {
    f = 'REPLACE';
    let z = Ua(w.location, C, P);
    m = g();
    let I = ug(z, m),
      F = w.createHref(z);
    c.replaceState(I, '', F),
      s && h && h({action: f, location: w.location, delta: 0});
  }
  function S(C) {
    let P = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      z = typeof C == 'string' ? C : el(C);
    return (
      (z = z.replace(/ $/, '%20')),
      Qe(
        P,
        `No window.location.(origin|href) available to create URL for href: ${z}`
      ),
      new URL(z, P)
    );
  }
  let w = {
    get action() {
      return f;
    },
    get location() {
      return a(o, c);
    },
    listen(C) {
      if (h) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(sg, x),
        (h = C),
        () => {
          o.removeEventListener(sg, x), (h = null);
        }
      );
    },
    createHref(C) {
      return n(o, C);
    },
    createURL: S,
    encodeLocation(C) {
      let P = S(C);
      return {pathname: P.pathname, search: P.search, hash: P.hash};
    },
    push: v,
    replace: y,
    go(C) {
      return c.go(C);
    },
  };
  return w;
}
var n1 = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function r1(a) {
  return a.index === !0;
}
function Ou(a, n, r = [], i = {}) {
  return a.map((o, s) => {
    let c = [...r, String(s)],
      f = typeof o.id == 'string' ? o.id : c.join('-');
    if (
      (Qe(
        o.index !== !0 || !o.children,
        'Cannot specify children on an index route'
      ),
      Qe(
        !i[f],
        `Found a route id collision on id "${f}".  Route id's must be globally unique within Data Router usages`
      ),
      r1(o))
    ) {
      let h = {...o, ...n(o), id: f};
      return (i[f] = h), h;
    } else {
      let h = {...o, ...n(o), id: f, children: void 0};
      return (
        (i[f] = h), o.children && (h.children = Ou(o.children, n, c, i)), h
      );
    }
  });
}
function Vi(a, n, r = '/') {
  return wu(a, n, r, !1);
}
function wu(a, n, r, i) {
  let o = typeof n == 'string' ? il(n) : n,
    s = Br(o.pathname || '/', r);
  if (s == null) return null;
  let c = g0(a);
  l1(c);
  let f = null;
  for (let h = 0; f == null && h < c.length; ++h) {
    let m = g1(s);
    f = p1(c[h], m, i);
  }
  return f;
}
function i1(a, n) {
  let {route: r, pathname: i, params: o} = a;
  return {id: r.id, pathname: i, params: o, data: n[r.id], handle: r.handle};
}
function g0(a, n = [], r = [], i = '') {
  let o = (s, c, f) => {
    let h = {
      relativePath: f === void 0 ? s.path || '' : f,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: c,
      route: s,
    };
    h.relativePath.startsWith('/') &&
      (Qe(
        h.relativePath.startsWith(i),
        `Absolute route path "${h.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (h.relativePath = h.relativePath.slice(i.length)));
    let m = ei([i, h.relativePath]),
      g = r.concat(h);
    s.children &&
      s.children.length > 0 &&
      (Qe(
        s.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      g0(s.children, n, g, m)),
      !(s.path == null && !s.index) &&
        n.push({path: m, score: d1(m, s.index), routesMeta: g});
  };
  return (
    a.forEach((s, c) => {
      var f;
      if (s.path === '' || !((f = s.path) != null && f.includes('?'))) o(s, c);
      else for (let h of y0(s.path)) o(s, c, h);
    }),
    n
  );
}
function y0(a) {
  let n = a.split('/');
  if (n.length === 0) return [];
  let [r, ...i] = n,
    o = r.endsWith('?'),
    s = r.replace(/\?$/, '');
  if (i.length === 0) return o ? [s, ''] : [s];
  let c = y0(i.join('/')),
    f = [];
  return (
    f.push(...c.map((h) => (h === '' ? s : [s, h].join('/')))),
    o && f.push(...c),
    f.map((h) => (a.startsWith('/') && h === '' ? '/' : h))
  );
}
function l1(a) {
  a.sort((n, r) =>
    n.score !== r.score
      ? r.score - n.score
      : h1(
          n.routesMeta.map((i) => i.childrenIndex),
          r.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
var o1 = /^:[\w-]+$/,
  a1 = 3,
  s1 = 2,
  u1 = 1,
  c1 = 10,
  f1 = -2,
  cg = (a) => a === '*';
function d1(a, n) {
  let r = a.split('/'),
    i = r.length;
  return (
    r.some(cg) && (i += f1),
    n && (i += s1),
    r
      .filter((o) => !cg(o))
      .reduce((o, s) => o + (o1.test(s) ? a1 : s === '' ? u1 : c1), i)
  );
}
function h1(a, n) {
  return a.length === n.length && a.slice(0, -1).every((i, o) => i === n[o])
    ? a[a.length - 1] - n[n.length - 1]
    : 0;
}
function p1(a, n, r = !1) {
  let {routesMeta: i} = a,
    o = {},
    s = '/',
    c = [];
  for (let f = 0; f < i.length; ++f) {
    let h = i[f],
      m = f === i.length - 1,
      g = s === '/' ? n : n.slice(s.length) || '/',
      x = ju({path: h.relativePath, caseSensitive: h.caseSensitive, end: m}, g),
      v = h.route;
    if (
      (!x &&
        m &&
        r &&
        !i[i.length - 1].route.index &&
        (x = ju(
          {path: h.relativePath, caseSensitive: h.caseSensitive, end: !1},
          g
        )),
      !x)
    )
      return null;
    Object.assign(o, x.params),
      c.push({
        params: o,
        pathname: ei([s, x.pathname]),
        pathnameBase: v1(ei([s, x.pathnameBase])),
        route: v,
      }),
      x.pathnameBase !== '/' && (s = ei([s, x.pathnameBase]));
  }
  return c;
}
function ju(a, n) {
  typeof a == 'string' && (a = {path: a, caseSensitive: !1, end: !0});
  let [r, i] = m1(a.path, a.caseSensitive, a.end),
    o = n.match(r);
  if (!o) return null;
  let s = o[0],
    c = s.replace(/(.)\/+$/, '$1'),
    f = o.slice(1);
  return {
    params: i.reduce((m, {paramName: g, isOptional: x}, v) => {
      if (g === '*') {
        let S = f[v] || '';
        c = s.slice(0, s.length - S.length).replace(/(.)\/+$/, '$1');
      }
      const y = f[v];
      return (
        x && !y ? (m[g] = void 0) : (m[g] = (y || '').replace(/%2F/g, '/')), m
      );
    }, {}),
    pathname: s,
    pathnameBase: c,
    pattern: a,
  };
}
function m1(a, n = !1, r = !0) {
  sn(
    a === '*' || !a.endsWith('*') || a.endsWith('/*'),
    `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, '/*')}".`
  );
  let i = [],
    o =
      '^' +
      a
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (c, f, h) => (
            i.push({paramName: f, isOptional: h != null}),
            h ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    a.endsWith('*')
      ? (i.push({paramName: '*'}),
        (o += a === '*' || a === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
        ? (o += '\\/*$')
        : a !== '' && a !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, n ? void 0 : 'i'), i]
  );
}
function g1(a) {
  try {
    return a
      .split('/')
      .map((n) => decodeURIComponent(n).replace(/\//g, '%2F'))
      .join('/');
  } catch (n) {
    return (
      sn(
        !1,
        `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`
      ),
      a
    );
  }
}
function Br(a, n) {
  if (n === '/') return a;
  if (!a.toLowerCase().startsWith(n.toLowerCase())) return null;
  let r = n.endsWith('/') ? n.length - 1 : n.length,
    i = a.charAt(r);
  return i && i !== '/' ? null : a.slice(r) || '/';
}
function y1(a, n = '/') {
  let {
    pathname: r,
    search: i = '',
    hash: o = '',
  } = typeof a == 'string' ? il(a) : a;
  return {
    pathname: r ? (r.startsWith('/') ? r : _1(r, n)) : n,
    search: x1(i),
    hash: w1(o),
  };
}
function _1(a, n) {
  let r = n.replace(/\/+$/, '').split('/');
  return (
    a.split('/').forEach((o) => {
      o === '..' ? r.length > 1 && r.pop() : o !== '.' && r.push(o);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function Vf(a, n, r, i) {
  return `Cannot include a '${a}' character in a manually specified \`to.${n}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function _0(a) {
  return a.filter(
    (n, r) => r === 0 || (n.route.path && n.route.path.length > 0)
  );
}
function Hd(a) {
  let n = _0(a);
  return n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase));
}
function Wd(a, n, r, i = !1) {
  let o;
  typeof a == 'string'
    ? (o = il(a))
    : ((o = {...a}),
      Qe(
        !o.pathname || !o.pathname.includes('?'),
        Vf('?', 'pathname', 'search', o)
      ),
      Qe(
        !o.pathname || !o.pathname.includes('#'),
        Vf('#', 'pathname', 'hash', o)
      ),
      Qe(!o.search || !o.search.includes('#'), Vf('#', 'search', 'hash', o)));
  let s = a === '' || o.pathname === '',
    c = s ? '/' : o.pathname,
    f;
  if (c == null) f = r;
  else {
    let x = n.length - 1;
    if (!i && c.startsWith('..')) {
      let v = c.split('/');
      for (; v[0] === '..'; ) v.shift(), (x -= 1);
      o.pathname = v.join('/');
    }
    f = x >= 0 ? n[x] : '/';
  }
  let h = y1(o, f),
    m = c && c !== '/' && c.endsWith('/'),
    g = (s || c === '.') && r.endsWith('/');
  return !h.pathname.endsWith('/') && (m || g) && (h.pathname += '/'), h;
}
var ei = (a) => a.join('/').replace(/\/\/+/g, '/'),
  v1 = (a) => a.replace(/\/+$/, '').replace(/^\/*/, '/'),
  x1 = (a) => (!a || a === '?' ? '' : a.startsWith('?') ? a : '?' + a),
  w1 = (a) => (!a || a === '#' ? '' : a.startsWith('#') ? a : '#' + a),
  zu = class {
    constructor(a, n, r, i = !1) {
      (this.status = a),
        (this.statusText = n || ''),
        (this.internal = i),
        r instanceof Error
          ? ((this.data = r.toString()), (this.error = r))
          : (this.data = r);
    }
  };
function Gu(a) {
  return (
    a != null &&
    typeof a.status == 'number' &&
    typeof a.statusText == 'string' &&
    typeof a.internal == 'boolean' &&
    'data' in a
  );
}
var v0 = ['POST', 'PUT', 'PATCH', 'DELETE'],
  S1 = new Set(v0),
  k1 = ['GET', ...v0],
  E1 = new Set(k1),
  C1 = new Set([301, 302, 303, 307, 308]),
  T1 = new Set([307, 308]),
  Hf = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  P1 = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ha = {state: 'unblocked', proceed: void 0, reset: void 0, location: void 0},
  Yd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  R1 = (a) => ({hasErrorBoundary: !!a.hasErrorBoundary}),
  x0 = 'remix-router-transitions',
  w0 = Symbol('ResetLoaderData');
function D1(a) {
  const n = a.window ? a.window : typeof window < 'u' ? window : void 0,
    r =
      typeof n < 'u' &&
      typeof n.document < 'u' &&
      typeof n.document.createElement < 'u';
  Qe(
    a.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let i = a.mapRouteProperties || R1,
    o = {},
    s = Ou(a.routes, i, void 0, o),
    c,
    f = a.basename || '/',
    h = a.dataStrategy || j1,
    m = a.patchRoutesOnNavigation,
    g = {...a.future},
    x = null,
    v = new Set(),
    y = null,
    S = null,
    w = null,
    C = a.hydrationData != null,
    P = Vi(s, a.history.location, f),
    z = null;
  if (P == null && !m) {
    let D = Cr(404, {pathname: a.history.location.pathname}),
      {matches: R, route: j} = wg(s);
    (P = R), (z = {[j.id]: D});
  }
  P &&
    !a.hydrationData &&
    Bt(P, s, a.history.location.pathname).active &&
    (P = null);
  let I;
  if (P)
    if (P.some((D) => D.route.lazy)) I = !1;
    else if (!P.some((D) => D.route.loader)) I = !0;
    else {
      let D = a.hydrationData ? a.hydrationData.loaderData : null,
        R = a.hydrationData ? a.hydrationData.errors : null;
      if (R) {
        let j = P.findIndex((Q) => R[Q.route.id] !== void 0);
        I = P.slice(0, j + 1).every((Q) => !md(Q.route, D, R));
      } else I = P.every((j) => !md(j.route, D, R));
    }
  else {
    (I = !1), (P = []);
    let D = Bt(null, s, a.history.location.pathname);
    D.active && D.matches && (P = D.matches);
  }
  let F,
    k = {
      historyAction: a.history.action,
      location: a.history.location,
      matches: P,
      initialized: I,
      navigation: Hf,
      restoreScrollPosition: a.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (a.hydrationData && a.hydrationData.loaderData) || {},
      actionData: (a.hydrationData && a.hydrationData.actionData) || null,
      errors: (a.hydrationData && a.hydrationData.errors) || z,
      fetchers: new Map(),
      blockers: new Map(),
    },
    $ = 'POP',
    U = !1,
    H,
    X = !1,
    G = new Map(),
    me = null,
    le = !1,
    Se = !1,
    Pe = new Set(),
    ge = new Map(),
    Te = 0,
    ue = -1,
    J = new Map(),
    ae = new Set(),
    T = new Map(),
    M = new Map(),
    K = new Set(),
    xe = new Map(),
    he,
    ke = null;
  function Ne() {
    if (
      ((x = a.history.listen(({action: D, location: R, delta: j}) => {
        if (he) {
          he(), (he = void 0);
          return;
        }
        sn(
          xe.size === 0 || j != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let Q = kn({
          currentLocation: k.location,
          nextLocation: R,
          historyAction: D,
        });
        if (Q && j != null) {
          let V = new Promise((ee) => {
            he = ee;
          });
          a.history.go(j * -1),
            Sn(Q, {
              state: 'blocked',
              location: R,
              proceed() {
                Sn(Q, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: R,
                }),
                  V.then(() => a.history.go(j));
              },
              reset() {
                let ee = new Map(k.blockers);
                ee.set(Q, ha), Ee({blockers: ee});
              },
            });
          return;
        }
        return ze(D, R);
      })),
      r)
    ) {
      W1(n, G);
      let D = () => Y1(n, G);
      n.addEventListener('pagehide', D),
        (me = () => n.removeEventListener('pagehide', D));
    }
    return k.initialized || ze('POP', k.location, {initialHydration: !0}), F;
  }
  function Me() {
    x && x(),
      me && me(),
      v.clear(),
      H && H.abort(),
      k.fetchers.forEach((D, R) => Lt(R)),
      k.blockers.forEach((D, R) => Nr(R));
  }
  function Oe(D) {
    return v.add(D), () => v.delete(D);
  }
  function Ee(D, R = {}) {
    k = {...k, ...D};
    let j = [],
      Q = [];
    k.fetchers.forEach((V, ee) => {
      V.state === 'idle' && (K.has(ee) ? j.push(ee) : Q.push(ee));
    }),
      K.forEach((V) => {
        !k.fetchers.has(V) && !ge.has(V) && j.push(V);
      }),
      [...v].forEach((V) =>
        V(k, {
          deletedFetchers: j,
          viewTransitionOpts: R.viewTransitionOpts,
          flushSync: R.flushSync === !0,
        })
      ),
      j.forEach((V) => Lt(V)),
      Q.forEach((V) => k.fetchers.delete(V));
  }
  function rt(D, R, {flushSync: j} = {}) {
    var q, fe;
    let Q =
        k.actionData != null &&
        k.navigation.formMethod != null &&
        br(k.navigation.formMethod) &&
        k.navigation.state === 'loading' &&
        ((q = D.state) == null ? void 0 : q._isRedirect) !== !0,
      V;
    R.actionData
      ? Object.keys(R.actionData).length > 0
        ? (V = R.actionData)
        : (V = null)
      : Q
        ? (V = k.actionData)
        : (V = null);
    let ee = R.loaderData
        ? vg(k.loaderData, R.loaderData, R.matches || [], R.errors)
        : k.loaderData,
      re = k.blockers;
    re.size > 0 && ((re = new Map(re)), re.forEach((Ce, Le) => re.set(Le, ha)));
    let Z =
      U === !0 ||
      (k.navigation.formMethod != null &&
        br(k.navigation.formMethod) &&
        ((fe = D.state) == null ? void 0 : fe._isRedirect) !== !0);
    c && ((s = c), (c = void 0)),
      le ||
        $ === 'POP' ||
        ($ === 'PUSH'
          ? a.history.push(D, D.state)
          : $ === 'REPLACE' && a.history.replace(D, D.state));
    let se;
    if ($ === 'POP') {
      let Ce = G.get(k.location.pathname);
      Ce && Ce.has(D.pathname)
        ? (se = {currentLocation: k.location, nextLocation: D})
        : G.has(D.pathname) &&
          (se = {currentLocation: D, nextLocation: k.location});
    } else if (X) {
      let Ce = G.get(k.location.pathname);
      Ce
        ? Ce.add(D.pathname)
        : ((Ce = new Set([D.pathname])), G.set(k.location.pathname, Ce)),
        (se = {currentLocation: k.location, nextLocation: D});
    }
    Ee(
      {
        ...R,
        actionData: V,
        loaderData: ee,
        historyAction: $,
        location: D,
        initialized: !0,
        navigation: Hf,
        revalidation: 'idle',
        restoreScrollPosition: Rt(D, R.matches || k.matches),
        preventScrollReset: Z,
        blockers: re,
      },
      {viewTransitionOpts: se, flushSync: j === !0}
    ),
      ($ = 'POP'),
      (U = !1),
      (X = !1),
      (le = !1),
      (Se = !1),
      ke == null || ke.resolve(),
      (ke = null);
  }
  async function yt(D, R) {
    if (typeof D == 'number') {
      a.history.go(D);
      return;
    }
    let j = pd(
        k.location,
        k.matches,
        f,
        D,
        R == null ? void 0 : R.fromRouteId,
        R == null ? void 0 : R.relative
      ),
      {path: Q, submission: V, error: ee} = fg(!1, j, R),
      re = k.location,
      Z = Ua(k.location, Q, R && R.state);
    Z = {...Z, ...a.history.encodeLocation(Z)};
    let se = R && R.replace != null ? R.replace : void 0,
      q = 'PUSH';
    se === !0
      ? (q = 'REPLACE')
      : se === !1 ||
        (V != null &&
          br(V.formMethod) &&
          V.formAction === k.location.pathname + k.location.search &&
          (q = 'REPLACE'));
    let fe =
        R && 'preventScrollReset' in R ? R.preventScrollReset === !0 : void 0,
      Ce = (R && R.flushSync) === !0,
      Le = kn({currentLocation: re, nextLocation: Z, historyAction: q});
    if (Le) {
      Sn(Le, {
        state: 'blocked',
        location: Z,
        proceed() {
          Sn(Le, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: Z,
          }),
            yt(D, R);
        },
        reset() {
          let Ie = new Map(k.blockers);
          Ie.set(Le, ha), Ee({blockers: Ie});
        },
      });
      return;
    }
    await ze(q, Z, {
      submission: V,
      pendingError: ee,
      preventScrollReset: fe,
      replace: R && R.replace,
      enableViewTransition: R && R.viewTransition,
      flushSync: Ce,
    });
  }
  function At() {
    ke || (ke = X1()), In(), Ee({revalidation: 'loading'});
    let D = ke.promise;
    return k.navigation.state === 'submitting'
      ? D
      : k.navigation.state === 'idle'
        ? (ze(k.historyAction, k.location, {
            startUninterruptedRevalidation: !0,
          }),
          D)
        : (ze($ || k.historyAction, k.navigation.location, {
            overrideNavigation: k.navigation,
            enableViewTransition: X === !0,
          }),
          D);
  }
  async function ze(D, R, j) {
    H && H.abort(),
      (H = null),
      ($ = D),
      (le = (j && j.startUninterruptedRevalidation) === !0),
      Ot(k.location, k.matches),
      (U = (j && j.preventScrollReset) === !0),
      (X = (j && j.enableViewTransition) === !0);
    let Q = c || s,
      V = j && j.overrideNavigation,
      ee = Vi(Q, R, f),
      re = (j && j.flushSync) === !0,
      Z = Bt(ee, Q, R.pathname);
    if ((Z.active && Z.matches && (ee = Z.matches), !ee)) {
      let {error: we, notFoundMatches: $e, route: Fe} = En(R.pathname);
      rt(
        R,
        {matches: $e, loaderData: {}, errors: {[Fe.id]: we}},
        {flushSync: re}
      );
      return;
    }
    if (
      k.initialized &&
      !Se &&
      b1(k.location, R) &&
      !(j && j.submission && br(j.submission.formMethod))
    ) {
      rt(R, {matches: ee}, {flushSync: re});
      return;
    }
    H = new AbortController();
    let se = uo(a.history, R, H.signal, j && j.submission),
      q;
    if (j && j.pendingError)
      q = [kl(ee).route.id, {type: 'error', error: j.pendingError}];
    else if (j && j.submission && br(j.submission.formMethod)) {
      let we = await ot(se, R, j.submission, ee, Z.active, {
        replace: j.replace,
        flushSync: re,
      });
      if (we.shortCircuited) return;
      if (we.pendingActionResult) {
        let [$e, Fe] = we.pendingActionResult;
        if (sr(Fe) && Gu(Fe.error) && Fe.error.status === 404) {
          (H = null),
            rt(R, {
              matches: we.matches,
              loaderData: {},
              errors: {[$e]: Fe.error},
            });
          return;
        }
      }
      (ee = we.matches || ee),
        (q = we.pendingActionResult),
        (V = Wf(R, j.submission)),
        (re = !1),
        (Z.active = !1),
        (se = uo(a.history, se.url, se.signal));
    }
    let {
      shortCircuited: fe,
      matches: Ce,
      loaderData: Le,
      errors: Ie,
    } = await Ut(
      se,
      R,
      ee,
      Z.active,
      V,
      j && j.submission,
      j && j.fetcherSubmission,
      j && j.replace,
      j && j.initialHydration === !0,
      re,
      q
    );
    fe ||
      ((H = null),
      rt(R, {matches: Ce || ee, ...xg(q), loaderData: Le, errors: Ie}));
  }
  async function ot(D, R, j, Q, V, ee = {}) {
    In();
    let re = V1(R, j);
    if ((Ee({navigation: re}, {flushSync: ee.flushSync === !0}), V)) {
      let q = await Cn(Q, R.pathname, D.signal);
      if (q.type === 'aborted') return {shortCircuited: !0};
      if (q.type === 'error') {
        let fe = kl(q.partialMatches).route.id;
        return {
          matches: q.partialMatches,
          pendingActionResult: [fe, {type: 'error', error: q.error}],
        };
      } else if (q.matches) Q = q.matches;
      else {
        let {notFoundMatches: fe, error: Ce, route: Le} = En(R.pathname);
        return {
          matches: fe,
          pendingActionResult: [Le.id, {type: 'error', error: Ce}],
        };
      }
    }
    let Z,
      se = va(Q, R);
    if (!se.route.action && !se.route.lazy)
      Z = {
        type: 'error',
        error: Cr(405, {
          method: D.method,
          pathname: R.pathname,
          routeId: se.route.id,
        }),
      };
    else if (
      ((Z = (await $t('action', k, D, [se], Q, null))[se.route.id]),
      D.signal.aborted)
    )
      return {shortCircuited: !0};
    if (El(Z)) {
      let q;
      return (
        ee && ee.replace != null
          ? (q = ee.replace)
          : (q =
              gg(Z.response.headers.get('Location'), new URL(D.url), f) ===
              k.location.pathname + k.location.search),
        await Xe(D, Z, !0, {submission: j, replace: q}),
        {shortCircuited: !0}
      );
    }
    if (sr(Z)) {
      let q = kl(Q, se.route.id);
      return (
        (ee && ee.replace) !== !0 && ($ = 'PUSH'),
        {matches: Q, pendingActionResult: [q.route.id, Z]}
      );
    }
    return {matches: Q, pendingActionResult: [se.route.id, Z]};
  }
  async function Ut(D, R, j, Q, V, ee, re, Z, se, q, fe) {
    let Ce = V || Wf(R, ee),
      Le = ee || re || kg(Ce),
      Ie = !le && !se;
    if (Q) {
      if (Ie) {
        let vt = bt(fe);
        Ee(
          {navigation: Ce, ...(vt !== void 0 ? {actionData: vt} : {})},
          {flushSync: q}
        );
      }
      let be = await Cn(j, R.pathname, D.signal);
      if (be.type === 'aborted') return {shortCircuited: !0};
      if (be.type === 'error') {
        let vt = kl(be.partialMatches).route.id;
        return {
          matches: be.partialMatches,
          loaderData: {},
          errors: {[vt]: be.error},
        };
      } else if (be.matches) j = be.matches;
      else {
        let {error: vt, notFoundMatches: yr, route: tr} = En(R.pathname);
        return {matches: yr, loaderData: {}, errors: {[tr.id]: vt}};
      }
    }
    let we = c || s,
      [$e, Fe] = hg(
        a.history,
        k,
        j,
        Le,
        R,
        se === !0,
        Se,
        Pe,
        K,
        T,
        ae,
        we,
        f,
        fe
      );
    if (((ue = ++Te), $e.length === 0 && Fe.length === 0)) {
      let be = ft();
      return (
        rt(
          R,
          {
            matches: j,
            loaderData: {},
            errors: fe && sr(fe[1]) ? {[fe[0]]: fe[1].error} : null,
            ...xg(fe),
            ...(be ? {fetchers: new Map(k.fetchers)} : {}),
          },
          {flushSync: q}
        ),
        {shortCircuited: !0}
      );
    }
    if (Ie) {
      let be = {};
      if (!Q) {
        be.navigation = Ce;
        let vt = bt(fe);
        vt !== void 0 && (be.actionData = vt);
      }
      Fe.length > 0 && (be.fetchers = W(Fe)), Ee(be, {flushSync: q});
    }
    Fe.forEach((be) => {
      pt(be.key), be.controller && ge.set(be.key, be.controller);
    });
    let Et = () => Fe.forEach((be) => pt(be.key));
    H && H.signal.addEventListener('abort', Et);
    let {loaderResults: Vt, fetcherResults: tt} = await Fn(k, j, $e, Fe, D);
    if (D.signal.aborted) return {shortCircuited: !0};
    H && H.signal.removeEventListener('abort', Et),
      Fe.forEach((be) => ge.delete(be.key));
    let Ze = lu(Vt);
    if (Ze)
      return await Xe(D, Ze.result, !0, {replace: Z}), {shortCircuited: !0};
    if (((Ze = lu(tt)), Ze))
      return (
        ae.add(Ze.key),
        await Xe(D, Ze.result, !0, {replace: Z}),
        {shortCircuited: !0}
      );
    let {loaderData: _t, errors: Tn} = _g(k, j, Vt, fe, Fe, tt);
    se && k.errors && (Tn = {...k.errors, ...Tn});
    let Bn = ft(),
      Ue = Hr(ue),
      st = Bn || Ue || Fe.length > 0;
    return {
      matches: j,
      loaderData: _t,
      errors: Tn,
      ...(st ? {fetchers: new Map(k.fetchers)} : {}),
    };
  }
  function bt(D) {
    if (D && !sr(D[1])) return {[D[0]]: D[1].data};
    if (k.actionData)
      return Object.keys(k.actionData).length === 0 ? null : k.actionData;
  }
  function W(D) {
    return (
      D.forEach((R) => {
        let j = k.fetchers.get(R.key),
          Q = pa(void 0, j ? j.data : void 0);
        k.fetchers.set(R.key, Q);
      }),
      new Map(k.fetchers)
    );
  }
  async function Qt(D, R, j, Q) {
    pt(D);
    let V = (Q && Q.flushSync) === !0,
      ee = c || s,
      re = pd(k.location, k.matches, f, j, R, Q == null ? void 0 : Q.relative),
      Z = Vi(ee, re, f),
      se = Bt(Z, ee, re);
    if ((se.active && se.matches && (Z = se.matches), !Z)) {
      Pt(D, R, Cr(404, {pathname: re}), {flushSync: V});
      return;
    }
    let {path: q, submission: fe, error: Ce} = fg(!0, re, Q);
    if (Ce) {
      Pt(D, R, Ce, {flushSync: V});
      return;
    }
    let Le = va(Z, q),
      Ie = (Q && Q.preventScrollReset) === !0;
    if (fe && br(fe.formMethod)) {
      await wn(D, R, q, Le, Z, se.active, V, Ie, fe);
      return;
    }
    T.set(D, {routeId: R, path: q}),
      await cn(D, R, q, Le, Z, se.active, V, Ie, fe);
  }
  async function wn(D, R, j, Q, V, ee, re, Z, se) {
    In(), T.delete(D);
    function q(Ge) {
      if (!Ge.route.action && !Ge.route.lazy) {
        let rn = Cr(405, {method: se.formMethod, pathname: j, routeId: R});
        return Pt(D, R, rn, {flushSync: re}), !0;
      }
      return !1;
    }
    if (!ee && q(Q)) return;
    let fe = k.fetchers.get(D);
    et(D, H1(se, fe), {flushSync: re});
    let Ce = new AbortController(),
      Le = uo(a.history, j, Ce.signal, se);
    if (ee) {
      let Ge = await Cn(V, j, Le.signal);
      if (Ge.type === 'aborted') return;
      if (Ge.type === 'error') {
        Pt(D, R, Ge.error, {flushSync: re});
        return;
      } else if (Ge.matches) {
        if (((V = Ge.matches), (Q = va(V, j)), q(Q))) return;
      } else {
        Pt(D, R, Cr(404, {pathname: j}), {flushSync: re});
        return;
      }
    }
    ge.set(D, Ce);
    let Ie = Te,
      $e = (await $t('action', k, Le, [Q], V, D))[Q.route.id];
    if (Le.signal.aborted) {
      ge.get(D) === Ce && ge.delete(D);
      return;
    }
    if (K.has(D)) {
      if (El($e) || sr($e)) {
        et(D, $i(void 0));
        return;
      }
    } else {
      if (El($e))
        if ((ge.delete(D), ue > Ie)) {
          et(D, $i(void 0));
          return;
        } else
          return (
            ae.add(D),
            et(D, pa(se)),
            Xe(Le, $e, !1, {fetcherSubmission: se, preventScrollReset: Z})
          );
      if (sr($e)) {
        Pt(D, R, $e.error);
        return;
      }
    }
    let Fe = k.navigation.location || k.location,
      Et = uo(a.history, Fe, Ce.signal),
      Vt = c || s,
      tt =
        k.navigation.state !== 'idle'
          ? Vi(Vt, k.navigation.location, f)
          : k.matches;
    Qe(tt, "Didn't find any matches after fetcher action");
    let Ze = ++Te;
    J.set(D, Ze);
    let _t = pa(se, $e.data);
    k.fetchers.set(D, _t);
    let [Tn, Bn] = hg(a.history, k, tt, se, Fe, !1, Se, Pe, K, T, ae, Vt, f, [
      Q.route.id,
      $e,
    ]);
    Bn.filter((Ge) => Ge.key !== D).forEach((Ge) => {
      let rn = Ge.key,
        Kt = k.fetchers.get(rn),
        oi = pa(void 0, Kt ? Kt.data : void 0);
      k.fetchers.set(rn, oi),
        pt(rn),
        Ge.controller && ge.set(rn, Ge.controller);
    }),
      Ee({fetchers: new Map(k.fetchers)});
    let Ue = () => Bn.forEach((Ge) => pt(Ge.key));
    Ce.signal.addEventListener('abort', Ue);
    let {loaderResults: st, fetcherResults: be} = await Fn(k, tt, Tn, Bn, Et);
    if (Ce.signal.aborted) return;
    Ce.signal.removeEventListener('abort', Ue),
      J.delete(D),
      ge.delete(D),
      Bn.forEach((Ge) => ge.delete(Ge.key));
    let vt = lu(st);
    if (vt) return Xe(Et, vt.result, !1, {preventScrollReset: Z});
    if (((vt = lu(be)), vt))
      return ae.add(vt.key), Xe(Et, vt.result, !1, {preventScrollReset: Z});
    let {loaderData: yr, errors: tr} = _g(k, tt, st, void 0, Bn, be);
    if (k.fetchers.has(D)) {
      let Ge = $i($e.data);
      k.fetchers.set(D, Ge);
    }
    Hr(Ze),
      k.navigation.state === 'loading' && Ze > ue
        ? (Qe($, 'Expected pending action'),
          H && H.abort(),
          rt(k.navigation.location, {
            matches: tt,
            loaderData: yr,
            errors: tr,
            fetchers: new Map(k.fetchers),
          }))
        : (Ee({
            errors: tr,
            loaderData: vg(k.loaderData, yr, tt, tr),
            fetchers: new Map(k.fetchers),
          }),
          (Se = !1));
  }
  async function cn(D, R, j, Q, V, ee, re, Z, se) {
    let q = k.fetchers.get(D);
    et(D, pa(se, q ? q.data : void 0), {flushSync: re});
    let fe = new AbortController(),
      Ce = uo(a.history, j, fe.signal);
    if (ee) {
      let $e = await Cn(V, j, Ce.signal);
      if ($e.type === 'aborted') return;
      if ($e.type === 'error') {
        Pt(D, R, $e.error, {flushSync: re});
        return;
      } else if ($e.matches) (V = $e.matches), (Q = va(V, j));
      else {
        Pt(D, R, Cr(404, {pathname: j}), {flushSync: re});
        return;
      }
    }
    ge.set(D, fe);
    let Le = Te,
      we = (await $t('loader', k, Ce, [Q], V, D))[Q.route.id];
    if ((ge.get(D) === fe && ge.delete(D), !Ce.signal.aborted)) {
      if (K.has(D)) {
        et(D, $i(void 0));
        return;
      }
      if (El(we))
        if (ue > Le) {
          et(D, $i(void 0));
          return;
        } else {
          ae.add(D), await Xe(Ce, we, !1, {preventScrollReset: Z});
          return;
        }
      if (sr(we)) {
        Pt(D, R, we.error);
        return;
      }
      et(D, $i(we.data));
    }
  }
  async function Xe(
    D,
    R,
    j,
    {
      submission: Q,
      fetcherSubmission: V,
      preventScrollReset: ee,
      replace: re,
    } = {}
  ) {
    R.response.headers.has('X-Remix-Revalidate') && (Se = !0);
    let Z = R.response.headers.get('Location');
    Qe(Z, 'Expected a Location header on the redirect Response'),
      (Z = gg(Z, new URL(D.url), f));
    let se = Ua(k.location, Z, {_isRedirect: !0});
    if (r) {
      let we = !1;
      if (R.response.headers.has('X-Remix-Reload-Document')) we = !0;
      else if (Yd.test(Z)) {
        const $e = a.history.createURL(Z);
        we = $e.origin !== n.location.origin || Br($e.pathname, f) == null;
      }
      if (we) {
        re ? n.location.replace(Z) : n.location.assign(Z);
        return;
      }
    }
    H = null;
    let q =
        re === !0 || R.response.headers.has('X-Remix-Replace')
          ? 'REPLACE'
          : 'PUSH',
      {formMethod: fe, formAction: Ce, formEncType: Le} = k.navigation;
    !Q && !V && fe && Ce && Le && (Q = kg(k.navigation));
    let Ie = Q || V;
    if (T1.has(R.response.status) && Ie && br(Ie.formMethod))
      await ze(q, se, {
        submission: {...Ie, formAction: Z},
        preventScrollReset: ee || U,
        enableViewTransition: j ? X : void 0,
      });
    else {
      let we = Wf(se, Q);
      await ze(q, se, {
        overrideNavigation: we,
        fetcherSubmission: V,
        preventScrollReset: ee || U,
        enableViewTransition: j ? X : void 0,
      });
    }
  }
  async function $t(D, R, j, Q, V, ee) {
    let re,
      Z = {};
    try {
      re = await z1(h, D, R, j, Q, V, ee, o, i);
    } catch (se) {
      return (
        Q.forEach((q) => {
          Z[q.route.id] = {type: 'error', error: se};
        }),
        Z
      );
    }
    for (let [se, q] of Object.entries(re))
      if ($1(q)) {
        let fe = q.result;
        Z[se] = {type: 'redirect', response: A1(fe, j, se, V, f)};
      } else Z[se] = await I1(q);
    return Z;
  }
  async function Fn(D, R, j, Q, V) {
    let ee = $t('loader', D, V, j, R, null),
      re = Promise.all(
        Q.map(async (q) => {
          if (q.matches && q.match && q.controller) {
            let Ce = (
              await $t(
                'loader',
                D,
                uo(a.history, q.path, q.controller.signal),
                [q.match],
                q.matches,
                q.key
              )
            )[q.match.route.id];
            return {[q.key]: Ce};
          } else
            return Promise.resolve({
              [q.key]: {type: 'error', error: Cr(404, {pathname: q.path})},
            });
        })
      ),
      Z = await ee,
      se = (await re).reduce((q, fe) => Object.assign(q, fe), {});
    return {loaderResults: Z, fetcherResults: se};
  }
  function In() {
    (Se = !0),
      T.forEach((D, R) => {
        ge.has(R) && Pe.add(R), pt(R);
      });
  }
  function et(D, R, j = {}) {
    k.fetchers.set(D, R),
      Ee(
        {fetchers: new Map(k.fetchers)},
        {flushSync: (j && j.flushSync) === !0}
      );
  }
  function Pt(D, R, j, Q = {}) {
    let V = kl(k.matches, R);
    Lt(D),
      Ee(
        {errors: {[V.route.id]: j}, fetchers: new Map(k.fetchers)},
        {flushSync: (Q && Q.flushSync) === !0}
      );
  }
  function lt(D) {
    return (
      M.set(D, (M.get(D) || 0) + 1),
      K.has(D) && K.delete(D),
      k.fetchers.get(D) || P1
    );
  }
  function Lt(D) {
    let R = k.fetchers.get(D);
    ge.has(D) && !(R && R.state === 'loading' && J.has(D)) && pt(D),
      T.delete(D),
      J.delete(D),
      ae.delete(D),
      K.delete(D),
      Pe.delete(D),
      k.fetchers.delete(D);
  }
  function nn(D) {
    let R = (M.get(D) || 0) - 1;
    R <= 0 ? (M.delete(D), K.add(D)) : M.set(D, R),
      Ee({fetchers: new Map(k.fetchers)});
  }
  function pt(D) {
    let R = ge.get(D);
    R && (R.abort(), ge.delete(D));
  }
  function An(D) {
    for (let R of D) {
      let j = lt(R),
        Q = $i(j.data);
      k.fetchers.set(R, Q);
    }
  }
  function ft() {
    let D = [],
      R = !1;
    for (let j of ae) {
      let Q = k.fetchers.get(j);
      Qe(Q, `Expected fetcher: ${j}`),
        Q.state === 'loading' && (ae.delete(j), D.push(j), (R = !0));
    }
    return An(D), R;
  }
  function Hr(D) {
    let R = [];
    for (let [j, Q] of J)
      if (Q < D) {
        let V = k.fetchers.get(j);
        Qe(V, `Expected fetcher: ${j}`),
          V.state === 'loading' && (pt(j), J.delete(j), R.push(j));
      }
    return An(R), R.length > 0;
  }
  function Un(D, R) {
    let j = k.blockers.get(D) || ha;
    return xe.get(D) !== R && xe.set(D, R), j;
  }
  function Nr(D) {
    k.blockers.delete(D), xe.delete(D);
  }
  function Sn(D, R) {
    let j = k.blockers.get(D) || ha;
    Qe(
      (j.state === 'unblocked' && R.state === 'blocked') ||
        (j.state === 'blocked' && R.state === 'blocked') ||
        (j.state === 'blocked' && R.state === 'proceeding') ||
        (j.state === 'blocked' && R.state === 'unblocked') ||
        (j.state === 'proceeding' && R.state === 'unblocked'),
      `Invalid blocker state transition: ${j.state} -> ${R.state}`
    );
    let Q = new Map(k.blockers);
    Q.set(D, R), Ee({blockers: Q});
  }
  function kn({currentLocation: D, nextLocation: R, historyAction: j}) {
    if (xe.size === 0) return;
    xe.size > 1 && sn(!1, 'A router only supports one blocker at a time');
    let Q = Array.from(xe.entries()),
      [V, ee] = Q[Q.length - 1],
      re = k.blockers.get(V);
    if (
      !(re && re.state === 'proceeding') &&
      ee({currentLocation: D, nextLocation: R, historyAction: j})
    )
      return V;
  }
  function En(D) {
    let R = Cr(404, {pathname: D}),
      j = c || s,
      {matches: Q, route: V} = wg(j);
    return {notFoundMatches: Q, route: V, error: R};
  }
  function Ae(D, R, j) {
    if (((y = D), (w = R), (S = j || null), !C && k.navigation === Hf)) {
      C = !0;
      let Q = Rt(k.location, k.matches);
      Q != null && Ee({restoreScrollPosition: Q});
    }
    return () => {
      (y = null), (w = null), (S = null);
    };
  }
  function bn(D, R) {
    return (
      (S &&
        S(
          D,
          R.map((Q) => i1(Q, k.loaderData))
        )) ||
      D.key
    );
  }
  function Ot(D, R) {
    if (y && w) {
      let j = bn(D, R);
      y[j] = w();
    }
  }
  function Rt(D, R) {
    if (y) {
      let j = bn(D, R),
        Q = y[j];
      if (typeof Q == 'number') return Q;
    }
    return null;
  }
  function Bt(D, R, j) {
    if (m)
      if (D) {
        if (Object.keys(D[0].params).length > 0)
          return {active: !0, matches: wu(R, j, f, !0)};
      } else return {active: !0, matches: wu(R, j, f, !0) || []};
    return {active: !1, matches: null};
  }
  async function Cn(D, R, j) {
    if (!m) return {type: 'success', matches: D};
    let Q = D;
    for (;;) {
      let V = c == null,
        ee = c || s,
        re = o;
      try {
        await m({
          path: R,
          matches: Q,
          patch: (q, fe) => {
            j.aborted || mg(q, fe, ee, re, i);
          },
        });
      } catch (q) {
        return {type: 'error', error: q, partialMatches: Q};
      } finally {
        V && !j.aborted && (s = [...s]);
      }
      if (j.aborted) return {type: 'aborted'};
      let Z = Vi(ee, R, f);
      if (Z) return {type: 'success', matches: Z};
      let se = wu(ee, R, f, !0);
      if (
        !se ||
        (Q.length === se.length &&
          Q.every((q, fe) => q.route.id === se[fe].route.id))
      )
        return {type: 'success', matches: null};
      Q = se;
    }
  }
  function Mr(D) {
    (o = {}), (c = Ou(D, i, void 0, o));
  }
  function $n(D, R) {
    let j = c == null;
    mg(D, R, c || s, o, i), j && ((s = [...s]), Ee({}));
  }
  return (
    (F = {
      get basename() {
        return f;
      },
      get future() {
        return g;
      },
      get state() {
        return k;
      },
      get routes() {
        return s;
      },
      get window() {
        return n;
      },
      initialize: Ne,
      subscribe: Oe,
      enableScrollRestoration: Ae,
      navigate: yt,
      fetch: Qt,
      revalidate: At,
      createHref: (D) => a.history.createHref(D),
      encodeLocation: (D) => a.history.encodeLocation(D),
      getFetcher: lt,
      deleteFetcher: nn,
      dispose: Me,
      getBlocker: Un,
      deleteBlocker: Nr,
      patchRoutes: $n,
      _internalFetchControllers: ge,
      _internalSetRoutes: Mr,
    }),
    F
  );
}
function N1(a) {
  return (
    a != null &&
    (('formData' in a && a.formData != null) ||
      ('body' in a && a.body !== void 0))
  );
}
function pd(a, n, r, i, o, s) {
  let c, f;
  if (o) {
    c = [];
    for (let m of n)
      if ((c.push(m), m.route.id === o)) {
        f = m;
        break;
      }
  } else (c = n), (f = n[n.length - 1]);
  let h = Wd(i || '.', Hd(c), Br(a.pathname, r) || a.pathname, s === 'path');
  if (
    (i == null && ((h.search = a.search), (h.hash = a.hash)),
    (i == null || i === '' || i === '.') && f)
  ) {
    let m = Xd(h.search);
    if (f.route.index && !m)
      h.search = h.search ? h.search.replace(/^\?/, '?index&') : '?index';
    else if (!f.route.index && m) {
      let g = new URLSearchParams(h.search),
        x = g.getAll('index');
      g.delete('index'),
        x.filter((y) => y).forEach((y) => g.append('index', y));
      let v = g.toString();
      h.search = v ? `?${v}` : '';
    }
  }
  return (
    r !== '/' && (h.pathname = h.pathname === '/' ? r : ei([r, h.pathname])),
    el(h)
  );
}
function fg(a, n, r) {
  if (!r || !N1(r)) return {path: n};
  if (r.formMethod && !B1(r.formMethod))
    return {path: n, error: Cr(405, {method: r.formMethod})};
  let i = () => ({path: n, error: Cr(400, {type: 'invalid-body'})}),
    s = (r.formMethod || 'get').toUpperCase(),
    c = k0(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!br(s)) return i();
      let x =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce(
                (v, [y, S]) => `${v}${y}=${S}
`,
                ''
              )
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: s,
          formAction: c,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: x,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!br(s)) return i();
      try {
        let x = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: s,
            formAction: c,
            formEncType: r.formEncType,
            formData: void 0,
            json: x,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  Qe(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let f, h;
  if (r.formData) (f = gd(r.formData)), (h = r.formData);
  else if (r.body instanceof FormData) (f = gd(r.body)), (h = r.body);
  else if (r.body instanceof URLSearchParams) (f = r.body), (h = yg(f));
  else if (r.body == null) (f = new URLSearchParams()), (h = new FormData());
  else
    try {
      (f = new URLSearchParams(r.body)), (h = yg(f));
    } catch {
      return i();
    }
  let m = {
    formMethod: s,
    formAction: c,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: h,
    json: void 0,
    text: void 0,
  };
  if (br(m.formMethod)) return {path: n, submission: m};
  let g = il(n);
  return (
    a && g.search && Xd(g.search) && f.append('index', ''),
    (g.search = `?${f}`),
    {path: el(g), submission: m}
  );
}
function dg(a, n, r = !1) {
  let i = a.findIndex((o) => o.route.id === n);
  return i >= 0 ? a.slice(0, r ? i + 1 : i) : a;
}
function hg(a, n, r, i, o, s, c, f, h, m, g, x, v, y) {
  let S = y ? (sr(y[1]) ? y[1].error : y[1].data) : void 0,
    w = a.createURL(n.location),
    C = a.createURL(o),
    P = r;
  s && n.errors
    ? (P = dg(r, Object.keys(n.errors)[0], !0))
    : y && sr(y[1]) && (P = dg(r, y[0]));
  let z = y ? y[1].statusCode : void 0,
    I = z && z >= 400,
    F = P.filter(($, U) => {
      let {route: H} = $;
      if (H.lazy) return !0;
      if (H.loader == null) return !1;
      if (s) return md(H, n.loaderData, n.errors);
      if (M1(n.loaderData, n.matches[U], $)) return !0;
      let X = n.matches[U],
        G = $;
      return pg($, {
        currentUrl: w,
        currentParams: X.params,
        nextUrl: C,
        nextParams: G.params,
        ...i,
        actionResult: S,
        actionStatus: z,
        defaultShouldRevalidate: I
          ? !1
          : c ||
            w.pathname + w.search === C.pathname + C.search ||
            w.search !== C.search ||
            L1(X, G),
      });
    }),
    k = [];
  return (
    m.forEach(($, U) => {
      if (s || !r.some((le) => le.route.id === $.routeId) || h.has(U)) return;
      let H = Vi(x, $.path, v);
      if (!H) {
        k.push({
          key: U,
          routeId: $.routeId,
          path: $.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let X = n.fetchers.get(U),
        G = va(H, $.path),
        me = !1;
      g.has(U)
        ? (me = !1)
        : f.has(U)
          ? (f.delete(U), (me = !0))
          : X && X.state !== 'idle' && X.data === void 0
            ? (me = c)
            : (me = pg(G, {
                currentUrl: w,
                currentParams: n.matches[n.matches.length - 1].params,
                nextUrl: C,
                nextParams: r[r.length - 1].params,
                ...i,
                actionResult: S,
                actionStatus: z,
                defaultShouldRevalidate: I ? !1 : c,
              })),
        me &&
          k.push({
            key: U,
            routeId: $.routeId,
            path: $.path,
            matches: H,
            match: G,
            controller: new AbortController(),
          });
    }),
    [F, k]
  );
}
function md(a, n, r) {
  if (a.lazy) return !0;
  if (!a.loader) return !1;
  let i = n != null && n[a.id] !== void 0,
    o = r != null && r[a.id] !== void 0;
  return !i && o
    ? !1
    : typeof a.loader == 'function' && a.loader.hydrate === !0
      ? !0
      : !i && !o;
}
function M1(a, n, r) {
  let i = !n || r.route.id !== n.route.id,
    o = !a.hasOwnProperty(r.route.id);
  return i || o;
}
function L1(a, n) {
  let r = a.route.path;
  return (
    a.pathname !== n.pathname ||
    (r != null && r.endsWith('*') && a.params['*'] !== n.params['*'])
  );
}
function pg(a, n) {
  if (a.route.shouldRevalidate) {
    let r = a.route.shouldRevalidate(n);
    if (typeof r == 'boolean') return r;
  }
  return n.defaultShouldRevalidate;
}
function mg(a, n, r, i, o) {
  let s;
  if (a) {
    let h = i[a];
    Qe(h, `No route found to patch children into: routeId = ${a}`),
      h.children || (h.children = []),
      (s = h.children);
  } else s = r;
  let c = n.filter((h) => !s.some((m) => S0(h, m))),
    f = Ou(
      c,
      o,
      [a || '_', 'patch', String((s == null ? void 0 : s.length) || '0')],
      i
    );
  s.push(...f);
}
function S0(a, n) {
  return 'id' in a && 'id' in n && a.id === n.id
    ? !0
    : a.index === n.index &&
        a.path === n.path &&
        a.caseSensitive === n.caseSensitive
      ? (!a.children || a.children.length === 0) &&
        (!n.children || n.children.length === 0)
        ? !0
        : a.children.every((r, i) => {
            var o;
            return (o = n.children) == null ? void 0 : o.some((s) => S0(r, s));
          })
      : !1;
}
async function O1(a, n, r) {
  if (!a.lazy) return;
  let i = await a.lazy();
  if (!a.lazy) return;
  let o = r[a.id];
  Qe(o, 'No route found in manifest');
  let s = {};
  for (let c in i) {
    let h = o[c] !== void 0 && c !== 'hasErrorBoundary';
    sn(
      !h,
      `Route "${o.id}" has a static property "${c}" defined but its lazy function is also returning a value for this property. The lazy route property "${c}" will be ignored.`
    ),
      !h && !n1.has(c) && (s[c] = i[c]);
  }
  Object.assign(o, s), Object.assign(o, {...n(o), lazy: void 0});
}
async function j1({matches: a}) {
  let n = a.filter((i) => i.shouldLoad);
  return (await Promise.all(n.map((i) => i.resolve()))).reduce(
    (i, o, s) => Object.assign(i, {[n[s].route.id]: o}),
    {}
  );
}
async function z1(a, n, r, i, o, s, c, f, h, m) {
  let g = s.map((y) => (y.route.lazy ? O1(y.route, h, f) : void 0)),
    x = s.map((y, S) => {
      let w = g[S],
        C = o.some((z) => z.route.id === y.route.id);
      return {
        ...y,
        shouldLoad: C,
        resolve: async (z) => (
          z &&
            i.method === 'GET' &&
            (y.route.lazy || y.route.loader) &&
            (C = !0),
          C
            ? F1(n, i, y, w, z, m)
            : Promise.resolve({type: 'data', result: void 0})
        ),
      };
    }),
    v = await a({
      matches: x,
      request: i,
      params: s[0].params,
      fetcherKey: c,
      context: m,
    });
  try {
    await Promise.all(g);
  } catch {}
  return v;
}
async function F1(a, n, r, i, o, s) {
  let c,
    f,
    h = (m) => {
      let g,
        x = new Promise((S, w) => (g = w));
      (f = () => g()), n.signal.addEventListener('abort', f);
      let v = (S) =>
          typeof m != 'function'
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${a}" [routeId: ${r.route.id}]`
                )
              )
            : m(
                {request: n, params: r.params, context: s},
                ...(S !== void 0 ? [S] : [])
              ),
        y = (async () => {
          try {
            return {type: 'data', result: await (o ? o((w) => v(w)) : v())};
          } catch (S) {
            return {type: 'error', result: S};
          }
        })();
      return Promise.race([y, x]);
    };
  try {
    let m = r.route[a];
    if (i)
      if (m) {
        let g,
          [x] = await Promise.all([
            h(m).catch((v) => {
              g = v;
            }),
            i,
          ]);
        if (g !== void 0) throw g;
        c = x;
      } else if ((await i, (m = r.route[a]), m)) c = await h(m);
      else if (a === 'action') {
        let g = new URL(n.url),
          x = g.pathname + g.search;
        throw Cr(405, {method: n.method, pathname: x, routeId: r.route.id});
      } else return {type: 'data', result: void 0};
    else if (m) c = await h(m);
    else {
      let g = new URL(n.url),
        x = g.pathname + g.search;
      throw Cr(404, {pathname: x});
    }
  } catch (m) {
    return {type: 'error', result: m};
  } finally {
    f && n.signal.removeEventListener('abort', f);
  }
  return c;
}
async function I1(a) {
  var i, o, s, c;
  let {result: n, type: r} = a;
  if (E0(n)) {
    let f;
    try {
      let h = n.headers.get('Content-Type');
      h && /\bapplication\/json\b/.test(h)
        ? n.body == null
          ? (f = null)
          : (f = await n.json())
        : (f = await n.text());
    } catch (h) {
      return {type: 'error', error: h};
    }
    return r === 'error'
      ? {
          type: 'error',
          error: new zu(n.status, n.statusText, f),
          statusCode: n.status,
          headers: n.headers,
        }
      : {type: 'data', data: f, statusCode: n.status, headers: n.headers};
  }
  if (r === 'error') {
    if (Sg(n)) {
      if (n.data instanceof Error)
        return {
          type: 'error',
          error: n.data,
          statusCode: (i = n.init) == null ? void 0 : i.status,
        };
      n = new zu(
        ((o = n.init) == null ? void 0 : o.status) || 500,
        void 0,
        n.data
      );
    }
    return {type: 'error', error: n, statusCode: Gu(n) ? n.status : void 0};
  }
  return Sg(n)
    ? {
        type: 'data',
        data: n.data,
        statusCode: (s = n.init) == null ? void 0 : s.status,
        headers:
          (c = n.init) != null && c.headers
            ? new Headers(n.init.headers)
            : void 0,
      }
    : {type: 'data', data: n};
}
function A1(a, n, r, i, o) {
  let s = a.headers.get('Location');
  if (
    (Qe(
      s,
      'Redirects returned/thrown from loaders/actions must have a Location header'
    ),
    !Yd.test(s))
  ) {
    let c = i.slice(0, i.findIndex((f) => f.route.id === r) + 1);
    (s = pd(new URL(n.url), c, o, s)), a.headers.set('Location', s);
  }
  return a;
}
function gg(a, n, r) {
  if (Yd.test(a)) {
    let i = a,
      o = i.startsWith('//') ? new URL(n.protocol + i) : new URL(i),
      s = Br(o.pathname, r) != null;
    if (o.origin === n.origin && s) return o.pathname + o.search + o.hash;
  }
  return a;
}
function uo(a, n, r, i) {
  let o = a.createURL(k0(n)).toString(),
    s = {signal: r};
  if (i && br(i.formMethod)) {
    let {formMethod: c, formEncType: f} = i;
    (s.method = c.toUpperCase()),
      f === 'application/json'
        ? ((s.headers = new Headers({'Content-Type': f})),
          (s.body = JSON.stringify(i.json)))
        : f === 'text/plain'
          ? (s.body = i.text)
          : f === 'application/x-www-form-urlencoded' && i.formData
            ? (s.body = gd(i.formData))
            : (s.body = i.formData);
  }
  return new Request(o, s);
}
function gd(a) {
  let n = new URLSearchParams();
  for (let [r, i] of a.entries())
    n.append(r, typeof i == 'string' ? i : i.name);
  return n;
}
function yg(a) {
  let n = new FormData();
  for (let [r, i] of a.entries()) n.append(r, i);
  return n;
}
function U1(a, n, r, i = !1, o = !1) {
  let s = {},
    c = null,
    f,
    h = !1,
    m = {},
    g = r && sr(r[1]) ? r[1].error : void 0;
  return (
    a.forEach((x) => {
      if (!(x.route.id in n)) return;
      let v = x.route.id,
        y = n[v];
      if (
        (Qe(!El(y), 'Cannot handle redirect results in processLoaderData'),
        sr(y))
      ) {
        let S = y.error;
        if ((g !== void 0 && ((S = g), (g = void 0)), (c = c || {}), o))
          c[v] = S;
        else {
          let w = kl(a, v);
          c[w.route.id] == null && (c[w.route.id] = S);
        }
        i || (s[v] = w0),
          h || ((h = !0), (f = Gu(y.error) ? y.error.status : 500)),
          y.headers && (m[v] = y.headers);
      } else
        (s[v] = y.data),
          y.statusCode && y.statusCode !== 200 && !h && (f = y.statusCode),
          y.headers && (m[v] = y.headers);
    }),
    g !== void 0 && r && ((c = {[r[0]]: g}), (s[r[0]] = void 0)),
    {loaderData: s, errors: c, statusCode: f || 200, loaderHeaders: m}
  );
}
function _g(a, n, r, i, o, s) {
  let {loaderData: c, errors: f} = U1(n, r, i);
  return (
    o.forEach((h) => {
      let {key: m, match: g, controller: x} = h,
        v = s[m];
      if (
        (Qe(v, 'Did not find corresponding fetcher result'),
        !(x && x.signal.aborted))
      )
        if (sr(v)) {
          let y = kl(a.matches, g == null ? void 0 : g.route.id);
          (f && f[y.route.id]) || (f = {...f, [y.route.id]: v.error}),
            a.fetchers.delete(m);
        } else if (El(v)) Qe(!1, 'Unhandled fetcher revalidation redirect');
        else {
          let y = $i(v.data);
          a.fetchers.set(m, y);
        }
    }),
    {loaderData: c, errors: f}
  );
}
function vg(a, n, r, i) {
  let o = Object.entries(n)
    .filter(([, s]) => s !== w0)
    .reduce((s, [c, f]) => ((s[c] = f), s), {});
  for (let s of r) {
    let c = s.route.id;
    if (
      (!n.hasOwnProperty(c) &&
        a.hasOwnProperty(c) &&
        s.route.loader &&
        (o[c] = a[c]),
      i && i.hasOwnProperty(c))
    )
      break;
  }
  return o;
}
function xg(a) {
  return a
    ? sr(a[1])
      ? {actionData: {}}
      : {actionData: {[a[0]]: a[1].data}}
    : {};
}
function kl(a, n) {
  return (
    (n ? a.slice(0, a.findIndex((i) => i.route.id === n) + 1) : [...a])
      .reverse()
      .find((i) => i.route.hasErrorBoundary === !0) || a[0]
  );
}
function wg(a) {
  let n =
    a.length === 1
      ? a[0]
      : a.find((r) => r.index || !r.path || r.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{params: {}, pathname: '', pathnameBase: '', route: n}],
    route: n,
  };
}
function Cr(a, {pathname: n, routeId: r, method: i, type: o, message: s} = {}) {
  let c = 'Unknown Server Error',
    f = 'Unknown @remix-run/router error';
  return (
    a === 400
      ? ((c = 'Bad Request'),
        i && n && r
          ? (f = `You made a ${i} request to "${n}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`)
          : o === 'invalid-body' && (f = 'Unable to encode submission body'))
      : a === 403
        ? ((c = 'Forbidden'), (f = `Route "${r}" does not match URL "${n}"`))
        : a === 404
          ? ((c = 'Not Found'), (f = `No route matches URL "${n}"`))
          : a === 405 &&
            ((c = 'Method Not Allowed'),
            i && n && r
              ? (f = `You made a ${i.toUpperCase()} request to "${n}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`)
              : i && (f = `Invalid request method "${i.toUpperCase()}"`)),
    new zu(a || 500, c, new Error(f), !0)
  );
}
function lu(a) {
  let n = Object.entries(a);
  for (let r = n.length - 1; r >= 0; r--) {
    let [i, o] = n[r];
    if (El(o)) return {key: i, result: o};
  }
}
function k0(a) {
  let n = typeof a == 'string' ? il(a) : a;
  return el({...n, hash: ''});
}
function b1(a, n) {
  return a.pathname !== n.pathname || a.search !== n.search
    ? !1
    : a.hash === ''
      ? n.hash !== ''
      : a.hash === n.hash
        ? !0
        : n.hash !== '';
}
function $1(a) {
  return E0(a.result) && C1.has(a.result.status);
}
function sr(a) {
  return a.type === 'error';
}
function El(a) {
  return (a && a.type) === 'redirect';
}
function Sg(a) {
  return (
    typeof a == 'object' &&
    a != null &&
    'type' in a &&
    'data' in a &&
    'init' in a &&
    a.type === 'DataWithResponseInit'
  );
}
function E0(a) {
  return (
    a != null &&
    typeof a.status == 'number' &&
    typeof a.statusText == 'string' &&
    typeof a.headers == 'object' &&
    typeof a.body < 'u'
  );
}
function B1(a) {
  return E1.has(a.toUpperCase());
}
function br(a) {
  return S1.has(a.toUpperCase());
}
function Xd(a) {
  return new URLSearchParams(a).getAll('index').some((n) => n === '');
}
function va(a, n) {
  let r = typeof n == 'string' ? il(n).search : n.search;
  if (a[a.length - 1].route.index && Xd(r || '')) return a[a.length - 1];
  let i = _0(a);
  return i[i.length - 1];
}
function kg(a) {
  let {
    formMethod: n,
    formAction: r,
    formEncType: i,
    text: o,
    formData: s,
    json: c,
  } = a;
  if (!(!n || !r || !i)) {
    if (o != null)
      return {
        formMethod: n,
        formAction: r,
        formEncType: i,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (s != null)
      return {
        formMethod: n,
        formAction: r,
        formEncType: i,
        formData: s,
        json: void 0,
        text: void 0,
      };
    if (c !== void 0)
      return {
        formMethod: n,
        formAction: r,
        formEncType: i,
        formData: void 0,
        json: c,
        text: void 0,
      };
  }
}
function Wf(a, n) {
  return n
    ? {
        state: 'loading',
        location: a,
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text,
      }
    : {
        state: 'loading',
        location: a,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function V1(a, n) {
  return {
    state: 'submitting',
    location: a,
    formMethod: n.formMethod,
    formAction: n.formAction,
    formEncType: n.formEncType,
    formData: n.formData,
    json: n.json,
    text: n.text,
  };
}
function pa(a, n) {
  return a
    ? {
        state: 'loading',
        formMethod: a.formMethod,
        formAction: a.formAction,
        formEncType: a.formEncType,
        formData: a.formData,
        json: a.json,
        text: a.text,
        data: n,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: n,
      };
}
function H1(a, n) {
  return {
    state: 'submitting',
    formMethod: a.formMethod,
    formAction: a.formAction,
    formEncType: a.formEncType,
    formData: a.formData,
    json: a.json,
    text: a.text,
    data: n ? n.data : void 0,
  };
}
function $i(a) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: a,
  };
}
function W1(a, n) {
  try {
    let r = a.sessionStorage.getItem(x0);
    if (r) {
      let i = JSON.parse(r);
      for (let [o, s] of Object.entries(i || {}))
        s && Array.isArray(s) && n.set(o, new Set(s || []));
    }
  } catch {}
}
function Y1(a, n) {
  if (n.size > 0) {
    let r = {};
    for (let [i, o] of n) r[i] = [...o];
    try {
      a.sessionStorage.setItem(x0, JSON.stringify(r));
    } catch (i) {
      sn(
        !1,
        `Failed to save applied view transitions in sessionStorage (${i}).`
      );
    }
  }
}
function X1() {
  let a,
    n,
    r = new Promise((i, o) => {
      (a = async (s) => {
        i(s);
        try {
          await r;
        } catch {}
      }),
        (n = async (s) => {
          o(s);
          try {
            await r;
          } catch {}
        });
    });
  return {promise: r, resolve: a, reject: n};
}
var Al = Y.createContext(null);
Al.displayName = 'DataRouter';
var Ga = Y.createContext(null);
Ga.displayName = 'DataRouterState';
var Qd = Y.createContext({isTransitioning: !1});
Qd.displayName = 'ViewTransition';
var C0 = Y.createContext(new Map());
C0.displayName = 'Fetchers';
var Q1 = Y.createContext(null);
Q1.displayName = 'Await';
var li = Y.createContext(null);
li.displayName = 'Navigation';
var qu = Y.createContext(null);
qu.displayName = 'Location';
var Vr = Y.createContext({outlet: null, matches: [], isDataRoute: !1});
Vr.displayName = 'Route';
var Kd = Y.createContext(null);
Kd.displayName = 'RouteError';
function K1(a, {relative: n} = {}) {
  Qe(
    qa(),
    'useHref() may be used only in the context of a <Router> component.'
  );
  let {basename: r, navigator: i} = Y.useContext(li),
    {hash: o, pathname: s, search: c} = Ja(a, {relative: n}),
    f = s;
  return (
    r !== '/' && (f = s === '/' ? r : ei([r, s])),
    i.createHref({pathname: f, search: c, hash: o})
  );
}
function qa() {
  return Y.useContext(qu) != null;
}
function Ul() {
  return (
    Qe(
      qa(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    Y.useContext(qu).location
  );
}
var T0 =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function P0(a) {
  Y.useContext(li).static || Y.useLayoutEffect(a);
}
function Gd() {
  let {isDataRoute: a} = Y.useContext(Vr);
  return a ? cx() : G1();
}
function G1() {
  Qe(
    qa(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let a = Y.useContext(Al),
    {basename: n, navigator: r} = Y.useContext(li),
    {matches: i} = Y.useContext(Vr),
    {pathname: o} = Ul(),
    s = JSON.stringify(Hd(i)),
    c = Y.useRef(!1);
  return (
    P0(() => {
      c.current = !0;
    }),
    Y.useCallback(
      (h, m = {}) => {
        if ((sn(c.current, T0), !c.current)) return;
        if (typeof h == 'number') {
          r.go(h);
          return;
        }
        let g = Wd(h, JSON.parse(s), o, m.relative === 'path');
        a == null &&
          n !== '/' &&
          (g.pathname = g.pathname === '/' ? n : ei([n, g.pathname])),
          (m.replace ? r.replace : r.push)(g, m.state, m);
      },
      [n, r, s, o, a]
    )
  );
}
var q1 = Y.createContext(null);
function J1(a) {
  let n = Y.useContext(Vr).outlet;
  return n && Y.createElement(q1.Provider, {value: a}, n);
}
function qd() {
  let {matches: a} = Y.useContext(Vr),
    n = a[a.length - 1];
  return n ? n.params : {};
}
function Ja(a, {relative: n} = {}) {
  let {matches: r} = Y.useContext(Vr),
    {pathname: i} = Ul(),
    o = JSON.stringify(Hd(r));
  return Y.useMemo(() => Wd(a, JSON.parse(o), i, n === 'path'), [a, o, i, n]);
}
function Z1(a, n, r, i) {
  Qe(
    qa(),
    'useRoutes() may be used only in the context of a <Router> component.'
  );
  let {navigator: o} = Y.useContext(li),
    {matches: s} = Y.useContext(Vr),
    c = s[s.length - 1],
    f = c ? c.params : {},
    h = c ? c.pathname : '/',
    m = c ? c.pathnameBase : '/',
    g = c && c.route;
  {
    let P = (g && g.path) || '';
    R0(
      h,
      !g || P.endsWith('*') || P.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P === '/' ? '*' : `${P}/*`}">.`
    );
  }
  let x = Ul(),
    v;
  v = x;
  let y = v.pathname || '/',
    S = y;
  if (m !== '/') {
    let P = m.replace(/^\//, '').split('/');
    S = '/' + y.replace(/^\//, '').split('/').slice(P.length).join('/');
  }
  let w = Vi(a, {pathname: S});
  return (
    sn(
      g || w != null,
      `No routes matched location "${v.pathname}${v.search}${v.hash}" `
    ),
    sn(
      w == null ||
        w[w.length - 1].route.element !== void 0 ||
        w[w.length - 1].route.Component !== void 0 ||
        w[w.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    ix(
      w &&
        w.map((P) =>
          Object.assign({}, P, {
            params: Object.assign({}, f, P.params),
            pathname: ei([
              m,
              o.encodeLocation
                ? o.encodeLocation(P.pathname).pathname
                : P.pathname,
            ]),
            pathnameBase:
              P.pathnameBase === '/'
                ? m
                : ei([
                    m,
                    o.encodeLocation
                      ? o.encodeLocation(P.pathnameBase).pathname
                      : P.pathnameBase,
                  ]),
          })
        ),
      s,
      r,
      i
    )
  );
}
function ex() {
  let a = ux(),
    n = Gu(a)
      ? `${a.status} ${a.statusText}`
      : a instanceof Error
        ? a.message
        : JSON.stringify(a),
    r = a instanceof Error ? a.stack : null,
    i = 'rgba(200,200,200, 0.5)',
    o = {padding: '0.5rem', backgroundColor: i},
    s = {padding: '2px 4px', backgroundColor: i},
    c = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', a),
    (c = Y.createElement(
      Y.Fragment,
      null,
      Y.createElement('p', null, '💿 Hey developer 👋'),
      Y.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        Y.createElement('code', {style: s}, 'ErrorBoundary'),
        ' or',
        ' ',
        Y.createElement('code', {style: s}, 'errorElement'),
        ' prop on your route.'
      )
    )),
    Y.createElement(
      Y.Fragment,
      null,
      Y.createElement('h2', null, 'Unexpected Application Error!'),
      Y.createElement('h3', {style: {fontStyle: 'italic'}}, n),
      r ? Y.createElement('pre', {style: o}, r) : null,
      c
    )
  );
}
var tx = Y.createElement(ex, null),
  nx = class extends Y.Component {
    constructor(a) {
      super(a),
        (this.state = {
          location: a.location,
          revalidation: a.revalidation,
          error: a.error,
        });
    }
    static getDerivedStateFromError(a) {
      return {error: a};
    }
    static getDerivedStateFromProps(a, n) {
      return n.location !== a.location ||
        (n.revalidation !== 'idle' && a.revalidation === 'idle')
        ? {error: a.error, location: a.location, revalidation: a.revalidation}
        : {
            error: a.error !== void 0 ? a.error : n.error,
            location: n.location,
            revalidation: a.revalidation || n.revalidation,
          };
    }
    componentDidCatch(a, n) {
      console.error(
        'React Router caught the following error during render',
        a,
        n
      );
    }
    render() {
      return this.state.error !== void 0
        ? Y.createElement(
            Vr.Provider,
            {value: this.props.routeContext},
            Y.createElement(Kd.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function rx({routeContext: a, match: n, children: r}) {
  let i = Y.useContext(Al);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    Y.createElement(Vr.Provider, {value: a}, r)
  );
}
function ix(a, n = [], r = null, i = null) {
  if (a == null) {
    if (!r) return null;
    if (r.errors) a = r.matches;
    else if (n.length === 0 && !r.initialized && r.matches.length > 0)
      a = r.matches;
    else return null;
  }
  let o = a,
    s = r == null ? void 0 : r.errors;
  if (s != null) {
    let h = o.findIndex(
      (m) => m.route.id && (s == null ? void 0 : s[m.route.id]) !== void 0
    );
    Qe(
      h >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(s).join(',')}`
    ),
      (o = o.slice(0, Math.min(o.length, h + 1)));
  }
  let c = !1,
    f = -1;
  if (r)
    for (let h = 0; h < o.length; h++) {
      let m = o[h];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (f = h),
        m.route.id)
      ) {
        let {loaderData: g, errors: x} = r,
          v =
            m.route.loader &&
            !g.hasOwnProperty(m.route.id) &&
            (!x || x[m.route.id] === void 0);
        if (m.route.lazy || v) {
          (c = !0), f >= 0 ? (o = o.slice(0, f + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((h, m, g) => {
    let x,
      v = !1,
      y = null,
      S = null;
    r &&
      ((x = s && m.route.id ? s[m.route.id] : void 0),
      (y = m.route.errorElement || tx),
      c &&
        (f < 0 && g === 0
          ? (R0(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (v = !0),
            (S = null))
          : f === g &&
            ((v = !0), (S = m.route.hydrateFallbackElement || null))));
    let w = n.concat(o.slice(0, g + 1)),
      C = () => {
        let P;
        return (
          x
            ? (P = y)
            : v
              ? (P = S)
              : m.route.Component
                ? (P = Y.createElement(m.route.Component, null))
                : m.route.element
                  ? (P = m.route.element)
                  : (P = h),
          Y.createElement(rx, {
            match: m,
            routeContext: {outlet: h, matches: w, isDataRoute: r != null},
            children: P,
          })
        );
      };
    return r && (m.route.ErrorBoundary || m.route.errorElement || g === 0)
      ? Y.createElement(nx, {
          location: r.location,
          revalidation: r.revalidation,
          component: y,
          error: x,
          children: C(),
          routeContext: {outlet: null, matches: w, isDataRoute: !0},
        })
      : C();
  }, null);
}
function Jd(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function lx(a) {
  let n = Y.useContext(Al);
  return Qe(n, Jd(a)), n;
}
function ox(a) {
  let n = Y.useContext(Ga);
  return Qe(n, Jd(a)), n;
}
function ax(a) {
  let n = Y.useContext(Vr);
  return Qe(n, Jd(a)), n;
}
function Zd(a) {
  let n = ax(a),
    r = n.matches[n.matches.length - 1];
  return (
    Qe(
      r.route.id,
      `${a} can only be used on routes that contain a unique "id"`
    ),
    r.route.id
  );
}
function sx() {
  return Zd('useRouteId');
}
function ux() {
  var i;
  let a = Y.useContext(Kd),
    n = ox('useRouteError'),
    r = Zd('useRouteError');
  return a !== void 0 ? a : (i = n.errors) == null ? void 0 : i[r];
}
function cx() {
  let {router: a} = lx('useNavigate'),
    n = Zd('useNavigate'),
    r = Y.useRef(!1);
  return (
    P0(() => {
      r.current = !0;
    }),
    Y.useCallback(
      async (o, s = {}) => {
        sn(r.current, T0),
          r.current &&
            (typeof o == 'number'
              ? a.navigate(o)
              : await a.navigate(o, {fromRouteId: n, ...s}));
      },
      [a, n]
    )
  );
}
var Eg = {};
function R0(a, n, r) {
  !n && !Eg[a] && ((Eg[a] = !0), sn(!1, r));
}
var Cg = {};
function Tg(a, n) {
  !a && !Cg[n] && ((Cg[n] = !0), console.warn(n));
}
function fx(a) {
  let n = {
    hasErrorBoundary:
      a.hasErrorBoundary || a.ErrorBoundary != null || a.errorElement != null,
  };
  return (
    a.Component &&
      (a.element &&
        sn(
          !1,
          'You should not include both `Component` and `element` on your route - `Component` will be used.'
        ),
      Object.assign(n, {
        element: Y.createElement(a.Component),
        Component: void 0,
      })),
    a.HydrateFallback &&
      (a.hydrateFallbackElement &&
        sn(
          !1,
          'You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.'
        ),
      Object.assign(n, {
        hydrateFallbackElement: Y.createElement(a.HydrateFallback),
        HydrateFallback: void 0,
      })),
    a.ErrorBoundary &&
      (a.errorElement &&
        sn(
          !1,
          'You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.'
        ),
      Object.assign(n, {
        errorElement: Y.createElement(a.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    n
  );
}
var dx = class {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((a, n) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), a(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
};
function hx({router: a, flushSync: n}) {
  let [r, i] = Y.useState(a.state),
    [o, s] = Y.useState(),
    [c, f] = Y.useState({isTransitioning: !1}),
    [h, m] = Y.useState(),
    [g, x] = Y.useState(),
    [v, y] = Y.useState(),
    S = Y.useRef(new Map()),
    w = Y.useCallback(
      (I, {deletedFetchers: F, flushSync: k, viewTransitionOpts: $}) => {
        I.fetchers.forEach((H, X) => {
          H.data !== void 0 && S.current.set(X, H.data);
        }),
          F.forEach((H) => S.current.delete(H)),
          Tg(
            k === !1 || n != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
        let U =
          a.window != null &&
          a.window.document != null &&
          typeof a.window.document.startViewTransition == 'function';
        if (
          (Tg(
            $ == null || U,
            'You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.'
          ),
          !$ || !U)
        ) {
          n && k ? n(() => i(I)) : Y.startTransition(() => i(I));
          return;
        }
        if (n && k) {
          n(() => {
            g && (h && h.resolve(), g.skipTransition()),
              f({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: $.currentLocation,
                nextLocation: $.nextLocation,
              });
          });
          let H = a.window.document.startViewTransition(() => {
            n(() => i(I));
          });
          H.finished.finally(() => {
            n(() => {
              m(void 0), x(void 0), s(void 0), f({isTransitioning: !1});
            });
          }),
            n(() => x(H));
          return;
        }
        g
          ? (h && h.resolve(),
            g.skipTransition(),
            y({
              state: I,
              currentLocation: $.currentLocation,
              nextLocation: $.nextLocation,
            }))
          : (s(I),
            f({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: $.currentLocation,
              nextLocation: $.nextLocation,
            }));
      },
      [a.window, n, g, h]
    );
  Y.useLayoutEffect(() => a.subscribe(w), [a, w]),
    Y.useEffect(() => {
      c.isTransitioning && !c.flushSync && m(new dx());
    }, [c]),
    Y.useEffect(() => {
      if (h && o && a.window) {
        let I = o,
          F = h.promise,
          k = a.window.document.startViewTransition(async () => {
            Y.startTransition(() => i(I)), await F;
          });
        k.finished.finally(() => {
          m(void 0), x(void 0), s(void 0), f({isTransitioning: !1});
        }),
          x(k);
      }
    }, [o, h, a.window]),
    Y.useEffect(() => {
      h && o && r.location.key === o.location.key && h.resolve();
    }, [h, g, r.location, o]),
    Y.useEffect(() => {
      !c.isTransitioning &&
        v &&
        (s(v.state),
        f({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: v.currentLocation,
          nextLocation: v.nextLocation,
        }),
        y(void 0));
    }, [c.isTransitioning, v]);
  let C = Y.useMemo(
      () => ({
        createHref: a.createHref,
        encodeLocation: a.encodeLocation,
        go: (I) => a.navigate(I),
        push: (I, F, k) =>
          a.navigate(I, {
            state: F,
            preventScrollReset: k == null ? void 0 : k.preventScrollReset,
          }),
        replace: (I, F, k) =>
          a.navigate(I, {
            replace: !0,
            state: F,
            preventScrollReset: k == null ? void 0 : k.preventScrollReset,
          }),
      }),
      [a]
    ),
    P = a.basename || '/',
    z = Y.useMemo(
      () => ({router: a, navigator: C, static: !1, basename: P}),
      [a, C, P]
    );
  return Y.createElement(
    Y.Fragment,
    null,
    Y.createElement(
      Al.Provider,
      {value: z},
      Y.createElement(
        Ga.Provider,
        {value: r},
        Y.createElement(
          C0.Provider,
          {value: S.current},
          Y.createElement(
            Qd.Provider,
            {value: c},
            Y.createElement(
              gx,
              {
                basename: P,
                location: r.location,
                navigationType: r.historyAction,
                navigator: C,
              },
              Y.createElement(px, {
                routes: a.routes,
                future: a.future,
                state: r,
              })
            )
          )
        )
      )
    ),
    null
  );
}
var px = Y.memo(mx);
function mx({routes: a, future: n, state: r}) {
  return Z1(a, void 0, r, n);
}
function eh(a) {
  return J1(a.context);
}
function gx({
  basename: a = '/',
  children: n = null,
  location: r,
  navigationType: i = 'POP',
  navigator: o,
  static: s = !1,
}) {
  Qe(
    !qa(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let c = a.replace(/^\/*/, '/'),
    f = Y.useMemo(
      () => ({basename: c, navigator: o, static: s, future: {}}),
      [c, o, s]
    );
  typeof r == 'string' && (r = il(r));
  let {
      pathname: h = '/',
      search: m = '',
      hash: g = '',
      state: x = null,
      key: v = 'default',
    } = r,
    y = Y.useMemo(() => {
      let S = Br(h, c);
      return S == null
        ? null
        : {
            location: {pathname: S, search: m, hash: g, state: x, key: v},
            navigationType: i,
          };
    }, [c, h, m, g, x, v, i]);
  return (
    sn(
      y != null,
      `<Router basename="${c}"> is not able to match the URL "${h}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    y == null
      ? null
      : Y.createElement(
          li.Provider,
          {value: f},
          Y.createElement(qu.Provider, {children: n, value: y})
        )
  );
}
var Su = 'get',
  ku = 'application/x-www-form-urlencoded';
function Ju(a) {
  return a != null && typeof a.tagName == 'string';
}
function yx(a) {
  return Ju(a) && a.tagName.toLowerCase() === 'button';
}
function _x(a) {
  return Ju(a) && a.tagName.toLowerCase() === 'form';
}
function vx(a) {
  return Ju(a) && a.tagName.toLowerCase() === 'input';
}
function xx(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function wx(a, n) {
  return a.button === 0 && (!n || n === '_self') && !xx(a);
}
var ou = null;
function Sx() {
  if (ou === null)
    try {
      new FormData(document.createElement('form'), 0), (ou = !1);
    } catch {
      ou = !0;
    }
  return ou;
}
var kx = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Yf(a) {
  return a != null && !kx.has(a)
    ? (sn(
        !1,
        `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ku}"`
      ),
      null)
    : a;
}
function Ex(a, n) {
  let r, i, o, s, c;
  if (_x(a)) {
    let f = a.getAttribute('action');
    (i = f ? Br(f, n) : null),
      (r = a.getAttribute('method') || Su),
      (o = Yf(a.getAttribute('enctype')) || ku),
      (s = new FormData(a));
  } else if (yx(a) || (vx(a) && (a.type === 'submit' || a.type === 'image'))) {
    let f = a.form;
    if (f == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let h = a.getAttribute('formaction') || f.getAttribute('action');
    if (
      ((i = h ? Br(h, n) : null),
      (r = a.getAttribute('formmethod') || f.getAttribute('method') || Su),
      (o =
        Yf(a.getAttribute('formenctype')) ||
        Yf(f.getAttribute('enctype')) ||
        ku),
      (s = new FormData(f, a)),
      !Sx())
    ) {
      let {name: m, type: g, value: x} = a;
      if (g === 'image') {
        let v = m ? `${m}.` : '';
        s.append(`${v}x`, '0'), s.append(`${v}y`, '0');
      } else m && s.append(m, x);
    }
  } else {
    if (Ju(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (r = Su), (i = null), (o = ku), (c = a);
  }
  return (
    s && o === 'text/plain' && ((c = s), (s = void 0)),
    {action: i, method: r.toLowerCase(), encType: o, formData: s, body: c}
  );
}
function th(a, n) {
  if (a === !1 || a === null || typeof a > 'u') throw new Error(n);
}
async function Cx(a, n) {
  if (a.id in n) return n[a.id];
  try {
    let r = await import(a.module);
    return (n[a.id] = r), r;
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${a.module}\`, reloading page...`
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Tx(a) {
  return a == null
    ? !1
    : a.href == null
      ? a.rel === 'preload' &&
        typeof a.imageSrcSet == 'string' &&
        typeof a.imageSizes == 'string'
      : typeof a.rel == 'string' && typeof a.href == 'string';
}
async function Px(a, n, r) {
  let i = await Promise.all(
    a.map(async (o) => {
      let s = n.routes[o.route.id];
      if (s) {
        let c = await Cx(s, r);
        return c.links ? c.links() : [];
      }
      return [];
    })
  );
  return Mx(
    i
      .flat(1)
      .filter(Tx)
      .filter((o) => o.rel === 'stylesheet' || o.rel === 'preload')
      .map((o) =>
        o.rel === 'stylesheet'
          ? {...o, rel: 'prefetch', as: 'style'}
          : {...o, rel: 'prefetch'}
      )
  );
}
function Pg(a, n, r, i, o, s) {
  let c = (h, m) => (r[m] ? h.route.id !== r[m].route.id : !0),
    f = (h, m) => {
      var g;
      return (
        r[m].pathname !== h.pathname ||
        (((g = r[m].route.path) == null ? void 0 : g.endsWith('*')) &&
          r[m].params['*'] !== h.params['*'])
      );
    };
  return s === 'assets'
    ? n.filter((h, m) => c(h, m) || f(h, m))
    : s === 'data'
      ? n.filter((h, m) => {
          var x;
          let g = i.routes[h.route.id];
          if (!g || !g.hasLoader) return !1;
          if (c(h, m) || f(h, m)) return !0;
          if (h.route.shouldRevalidate) {
            let v = h.route.shouldRevalidate({
              currentUrl: new URL(
                o.pathname + o.search + o.hash,
                window.origin
              ),
              currentParams: ((x = r[0]) == null ? void 0 : x.params) || {},
              nextUrl: new URL(a, window.origin),
              nextParams: h.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof v == 'boolean') return v;
          }
          return !0;
        })
      : [];
}
function Rx(a, n) {
  return Dx(
    a
      .map((r) => {
        let i = n.routes[r.route.id];
        if (!i) return [];
        let o = [i.module];
        return i.imports && (o = o.concat(i.imports)), o;
      })
      .flat(1)
  );
}
function Dx(a) {
  return [...new Set(a)];
}
function Nx(a) {
  let n = {},
    r = Object.keys(a).sort();
  for (let i of r) n[i] = a[i];
  return n;
}
function Mx(a, n) {
  let r = new Set();
  return (
    new Set(n),
    a.reduce((i, o) => {
      let s = JSON.stringify(Nx(o));
      return r.has(s) || (r.add(s), i.push({key: s, link: o})), i;
    }, [])
  );
}
function Lx(a) {
  let n =
    typeof a == 'string'
      ? new URL(
          a,
          typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
        )
      : a;
  return (
    n.pathname === '/'
      ? (n.pathname = '_root.data')
      : (n.pathname = `${n.pathname.replace(/\/$/, '')}.data`),
    n
  );
}
function Ox() {
  let a = Y.useContext(Al);
  return (
    th(
      a,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    a
  );
}
function jx() {
  let a = Y.useContext(Ga);
  return (
    th(
      a,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    a
  );
}
var nh = Y.createContext(void 0);
nh.displayName = 'FrameworkContext';
function D0() {
  let a = Y.useContext(nh);
  return (
    th(a, 'You must render this element inside a <HydratedRouter> element'), a
  );
}
function zx(a, n) {
  let r = Y.useContext(nh),
    [i, o] = Y.useState(!1),
    [s, c] = Y.useState(!1),
    {
      onFocus: f,
      onBlur: h,
      onMouseEnter: m,
      onMouseLeave: g,
      onTouchStart: x,
    } = n,
    v = Y.useRef(null);
  Y.useEffect(() => {
    if ((a === 'render' && c(!0), a === 'viewport')) {
      let w = (P) => {
          P.forEach((z) => {
            c(z.isIntersecting);
          });
        },
        C = new IntersectionObserver(w, {threshold: 0.5});
      return (
        v.current && C.observe(v.current),
        () => {
          C.disconnect();
        }
      );
    }
  }, [a]),
    Y.useEffect(() => {
      if (i) {
        let w = setTimeout(() => {
          c(!0);
        }, 100);
        return () => {
          clearTimeout(w);
        };
      }
    }, [i]);
  let y = () => {
      o(!0);
    },
    S = () => {
      o(!1), c(!1);
    };
  return r
    ? a !== 'intent'
      ? [s, v, {}]
      : [
          s,
          v,
          {
            onFocus: ma(f, y),
            onBlur: ma(h, S),
            onMouseEnter: ma(m, y),
            onMouseLeave: ma(g, S),
            onTouchStart: ma(x, y),
          },
        ]
    : [!1, v, {}];
}
function ma(a, n) {
  return (r) => {
    a && a(r), r.defaultPrevented || n(r);
  };
}
function Fx({page: a, ...n}) {
  let {router: r} = Ox(),
    i = Y.useMemo(() => Vi(r.routes, a, r.basename), [r.routes, a, r.basename]);
  return i ? Y.createElement(Ax, {page: a, matches: i, ...n}) : null;
}
function Ix(a) {
  let {manifest: n, routeModules: r} = D0(),
    [i, o] = Y.useState([]);
  return (
    Y.useEffect(() => {
      let s = !1;
      return (
        Px(a, n, r).then((c) => {
          s || o(c);
        }),
        () => {
          s = !0;
        }
      );
    }, [a, n, r]),
    i
  );
}
function Ax({page: a, matches: n, ...r}) {
  let i = Ul(),
    {manifest: o, routeModules: s} = D0(),
    {loaderData: c, matches: f} = jx(),
    h = Y.useMemo(() => Pg(a, n, f, o, i, 'data'), [a, n, f, o, i]),
    m = Y.useMemo(() => Pg(a, n, f, o, i, 'assets'), [a, n, f, o, i]),
    g = Y.useMemo(() => {
      if (a === i.pathname + i.search + i.hash) return [];
      let y = new Set(),
        S = !1;
      if (
        (n.forEach((C) => {
          var z;
          let P = o.routes[C.route.id];
          !P ||
            !P.hasLoader ||
            ((!h.some((I) => I.route.id === C.route.id) &&
              C.route.id in c &&
              (z = s[C.route.id]) != null &&
              z.shouldRevalidate) ||
            P.hasClientLoader
              ? (S = !0)
              : y.add(C.route.id));
        }),
        y.size === 0)
      )
        return [];
      let w = Lx(a);
      return (
        S &&
          y.size > 0 &&
          w.searchParams.set(
            '_routes',
            n
              .filter((C) => y.has(C.route.id))
              .map((C) => C.route.id)
              .join(',')
          ),
        [w.pathname + w.search]
      );
    }, [c, i, o, h, n, a, s]),
    x = Y.useMemo(() => Rx(m, o), [m, o]),
    v = Ix(m);
  return Y.createElement(
    Y.Fragment,
    null,
    g.map((y) =>
      Y.createElement('link', {
        key: y,
        rel: 'prefetch',
        as: 'fetch',
        href: y,
        ...r,
      })
    ),
    x.map((y) =>
      Y.createElement('link', {key: y, rel: 'modulepreload', href: y, ...r})
    ),
    v.map(({key: y, link: S}) => Y.createElement('link', {key: y, ...S}))
  );
}
function Ux(...a) {
  return (n) => {
    a.forEach((r) => {
      typeof r == 'function' ? r(n) : r != null && (r.current = n);
    });
  };
}
var N0 =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  N0 && (window.__reactRouterVersion = '7.1.3');
} catch {}
function bx(a, n) {
  return D1({
    basename: n == null ? void 0 : n.basename,
    future: n == null ? void 0 : n.future,
    history: Zv({window: n == null ? void 0 : n.window}),
    hydrationData: $x(),
    routes: a,
    mapRouteProperties: fx,
    dataStrategy: n == null ? void 0 : n.dataStrategy,
    patchRoutesOnNavigation: n == null ? void 0 : n.patchRoutesOnNavigation,
    window: n == null ? void 0 : n.window,
  }).initialize();
}
function $x() {
  let a = window == null ? void 0 : window.__staticRouterHydrationData;
  return a && a.errors && (a = {...a, errors: Bx(a.errors)}), a;
}
function Bx(a) {
  if (!a) return null;
  let n = Object.entries(a),
    r = {};
  for (let [i, o] of n)
    if (o && o.__type === 'RouteErrorResponse')
      r[i] = new zu(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === 'Error') {
      if (o.__subType) {
        let s = window[o.__subType];
        if (typeof s == 'function')
          try {
            let c = new s(o.message);
            (c.stack = ''), (r[i] = c);
          } catch {}
      }
      if (r[i] == null) {
        let s = new Error(o.message);
        (s.stack = ''), (r[i] = s);
      }
    } else r[i] = o;
  return r;
}
var M0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Zu = Y.forwardRef(function (
    {
      onClick: n,
      discover: r = 'render',
      prefetch: i = 'none',
      relative: o,
      reloadDocument: s,
      replace: c,
      state: f,
      target: h,
      to: m,
      preventScrollReset: g,
      viewTransition: x,
      ...v
    },
    y
  ) {
    let {basename: S} = Y.useContext(li),
      w = typeof m == 'string' && M0.test(m),
      C,
      P = !1;
    if (typeof m == 'string' && w && ((C = m), N0))
      try {
        let X = new URL(window.location.href),
          G = m.startsWith('//') ? new URL(X.protocol + m) : new URL(m),
          me = Br(G.pathname, S);
        G.origin === X.origin && me != null
          ? (m = me + G.search + G.hash)
          : (P = !0);
      } catch {
        sn(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let z = K1(m, {relative: o}),
      [I, F, k] = zx(i, v),
      $ = Wx(m, {
        replace: c,
        state: f,
        target: h,
        preventScrollReset: g,
        relative: o,
        viewTransition: x,
      });
    function U(X) {
      n && n(X), X.defaultPrevented || $(X);
    }
    let H = Y.createElement('a', {
      ...v,
      ...k,
      href: C || z,
      onClick: P || s ? n : U,
      ref: Ux(y, F),
      target: h,
      'data-discover': !w && r === 'render' ? 'true' : void 0,
    });
    return I && !w
      ? Y.createElement(Y.Fragment, null, H, Y.createElement(Fx, {page: z}))
      : H;
  });
Zu.displayName = 'Link';
var L0 = Y.forwardRef(function (
  {
    'aria-current': n = 'page',
    caseSensitive: r = !1,
    className: i = '',
    end: o = !1,
    style: s,
    to: c,
    viewTransition: f,
    children: h,
    ...m
  },
  g
) {
  let x = Ja(c, {relative: m.relative}),
    v = Ul(),
    y = Y.useContext(Ga),
    {navigator: S, basename: w} = Y.useContext(li),
    C = y != null && Gx(x) && f === !0,
    P = S.encodeLocation ? S.encodeLocation(x).pathname : x.pathname,
    z = v.pathname,
    I =
      y && y.navigation && y.navigation.location
        ? y.navigation.location.pathname
        : null;
  r ||
    ((z = z.toLowerCase()),
    (I = I ? I.toLowerCase() : null),
    (P = P.toLowerCase())),
    I && w && (I = Br(I, w) || I);
  const F = P !== '/' && P.endsWith('/') ? P.length - 1 : P.length;
  let k = z === P || (!o && z.startsWith(P) && z.charAt(F) === '/'),
    $ =
      I != null &&
      (I === P || (!o && I.startsWith(P) && I.charAt(P.length) === '/')),
    U = {isActive: k, isPending: $, isTransitioning: C},
    H = k ? n : void 0,
    X;
  typeof i == 'function'
    ? (X = i(U))
    : (X = [
        i,
        k ? 'active' : null,
        $ ? 'pending' : null,
        C ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let G = typeof s == 'function' ? s(U) : s;
  return Y.createElement(
    Zu,
    {
      ...m,
      'aria-current': H,
      className: X,
      ref: g,
      style: G,
      to: c,
      viewTransition: f,
    },
    typeof h == 'function' ? h(U) : h
  );
});
L0.displayName = 'NavLink';
var Vx = Y.forwardRef(
  (
    {
      discover: a = 'render',
      fetcherKey: n,
      navigate: r,
      reloadDocument: i,
      replace: o,
      state: s,
      method: c = Su,
      action: f,
      onSubmit: h,
      relative: m,
      preventScrollReset: g,
      viewTransition: x,
      ...v
    },
    y
  ) => {
    let S = Qx(),
      w = Kx(f, {relative: m}),
      C = c.toLowerCase() === 'get' ? 'get' : 'post',
      P = typeof f == 'string' && M0.test(f),
      z = (I) => {
        if ((h && h(I), I.defaultPrevented)) return;
        I.preventDefault();
        let F = I.nativeEvent.submitter,
          k = (F == null ? void 0 : F.getAttribute('formmethod')) || c;
        S(F || I.currentTarget, {
          fetcherKey: n,
          method: k,
          navigate: r,
          replace: o,
          state: s,
          relative: m,
          preventScrollReset: g,
          viewTransition: x,
        });
      };
    return Y.createElement('form', {
      ref: y,
      method: C,
      action: w,
      onSubmit: i ? h : z,
      ...v,
      'data-discover': !P && a === 'render' ? 'true' : void 0,
    });
  }
);
Vx.displayName = 'Form';
function Hx(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function O0(a) {
  let n = Y.useContext(Al);
  return Qe(n, Hx(a)), n;
}
function Wx(
  a,
  {
    target: n,
    replace: r,
    state: i,
    preventScrollReset: o,
    relative: s,
    viewTransition: c,
  } = {}
) {
  let f = Gd(),
    h = Ul(),
    m = Ja(a, {relative: s});
  return Y.useCallback(
    (g) => {
      if (wx(g, n)) {
        g.preventDefault();
        let x = r !== void 0 ? r : el(h) === el(m);
        f(a, {
          replace: x,
          state: i,
          preventScrollReset: o,
          relative: s,
          viewTransition: c,
        });
      }
    },
    [h, f, m, r, i, n, a, o, s, c]
  );
}
var Yx = 0,
  Xx = () => `__${String(++Yx)}__`;
function Qx() {
  let {router: a} = O0('useSubmit'),
    {basename: n} = Y.useContext(li),
    r = sx();
  return Y.useCallback(
    async (i, o = {}) => {
      let {action: s, method: c, encType: f, formData: h, body: m} = Ex(i, n);
      if (o.navigate === !1) {
        let g = o.fetcherKey || Xx();
        await a.fetch(g, r, o.action || s, {
          preventScrollReset: o.preventScrollReset,
          formData: h,
          body: m,
          formMethod: o.method || c,
          formEncType: o.encType || f,
          flushSync: o.flushSync,
        });
      } else
        await a.navigate(o.action || s, {
          preventScrollReset: o.preventScrollReset,
          formData: h,
          body: m,
          formMethod: o.method || c,
          formEncType: o.encType || f,
          replace: o.replace,
          state: o.state,
          fromRouteId: r,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [a, n, r]
  );
}
function Kx(a, {relative: n} = {}) {
  let {basename: r} = Y.useContext(li),
    i = Y.useContext(Vr);
  Qe(i, 'useFormAction must be used inside a RouteContext');
  let [o] = i.matches.slice(-1),
    s = {...Ja(a || '.', {relative: n})},
    c = Ul();
  if (a == null) {
    s.search = c.search;
    let f = new URLSearchParams(s.search),
      h = f.getAll('index');
    if (h.some((g) => g === '')) {
      f.delete('index'),
        h.filter((x) => x).forEach((x) => f.append('index', x));
      let g = f.toString();
      s.search = g ? `?${g}` : '';
    }
  }
  return (
    (!a || a === '.') &&
      o.route.index &&
      (s.search = s.search ? s.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (s.pathname = s.pathname === '/' ? r : ei([r, s.pathname])),
    el(s)
  );
}
function Gx(a, n = {}) {
  let r = Y.useContext(Qd);
  Qe(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let {basename: i} = O0('useViewTransitionState'),
    o = Ja(a, {relative: n.relative});
  if (!r.isTransitioning) return !1;
  let s = Br(r.currentLocation.pathname, i) || r.currentLocation.pathname,
    c = Br(r.nextLocation.pathname, i) || r.nextLocation.pathname;
  return ju(o.pathname, c) != null || ju(o.pathname, s) != null;
}
new TextEncoder();
var qx = m0();
/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Jx(a) {
  return Y.createElement(hx, {flushSync: qx.flushSync, ...a});
}
function mi(a) {
  if (a === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return a;
}
function j0(a, n) {
  (a.prototype = Object.create(n.prototype)),
    (a.prototype.constructor = a),
    (a.__proto__ = n);
}
/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var pr = {
    autoSleep: 120,
    force3D: 'auto',
    nullTargetWarn: 1,
    units: {lineHeight: ''},
  },
  Co = {duration: 0.5, overwrite: !1, delay: 0},
  rh,
  un,
  gt,
  ti = 1e8,
  vn = 1 / ti,
  yd = Math.PI * 2,
  Zx = yd / 4,
  ew = 0,
  z0 = Math.sqrt,
  tw = Math.cos,
  nw = Math.sin,
  tn = function (n) {
    return typeof n == 'string';
  },
  Tt = function (n) {
    return typeof n == 'function';
  },
  xi = function (n) {
    return typeof n == 'number';
  },
  ih = function (n) {
    return typeof n > 'u';
  },
  ii = function (n) {
    return typeof n == 'object';
  },
  Gn = function (n) {
    return n !== !1;
  },
  lh = function () {
    return typeof window < 'u';
  },
  au = function (n) {
    return Tt(n) || tn(n);
  },
  F0 =
    (typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
  xn = Array.isArray,
  _d = /(?:-?\.?\d|\.)+/gi,
  I0 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  go = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Xf = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  A0 = /[+-]=-?[.\d]+/,
  U0 = /[^,'"\[\]\s]+/gi,
  rw = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  St,
  Kr,
  vd,
  oh,
  mr = {},
  Fu = {},
  b0,
  $0 = function (n) {
    return (Fu = To(n, mr)) && er;
  },
  ah = function (n, r) {
    return console.warn(
      'Invalid property',
      n,
      'set to',
      r,
      'Missing plugin? gsap.registerPlugin()'
    );
  },
  ba = function (n, r) {
    return !r && console.warn(n);
  },
  B0 = function (n, r) {
    return (n && (mr[n] = r) && Fu && (Fu[n] = r)) || mr;
  },
  $a = function () {
    return 0;
  },
  iw = {suppressEvents: !0, isStart: !0, kill: !1},
  Eu = {suppressEvents: !0, kill: !1},
  lw = {suppressEvents: !0},
  sh = {},
  Gi = [],
  xd = {},
  V0,
  ur = {},
  Qf = {},
  Rg = 30,
  Cu = [],
  uh = '',
  ch = function (n) {
    var r = n[0],
      i,
      o;
    if ((ii(r) || Tt(r) || (n = [n]), !(i = (r._gsap || {}).harness))) {
      for (o = Cu.length; o-- && !Cu[o].targetTest(r); );
      i = Cu[o];
    }
    for (o = n.length; o--; )
      (n[o] && (n[o]._gsap || (n[o]._gsap = new hy(n[o], i)))) ||
        n.splice(o, 1);
    return n;
  },
  Pl = function (n) {
    return n._gsap || ch(Rr(n))[0]._gsap;
  },
  H0 = function (n, r, i) {
    return (i = n[r]) && Tt(i)
      ? n[r]()
      : (ih(i) && n.getAttribute && n.getAttribute(r)) || i;
  },
  qn = function (n, r) {
    return (n = n.split(',')).forEach(r) || n;
  },
  Nt = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  It = function (n) {
    return Math.round(n * 1e7) / 1e7 || 0;
  },
  vo = function (n, r) {
    var i = r.charAt(0),
      o = parseFloat(r.substr(2));
    return (
      (n = parseFloat(n)),
      i === '+' ? n + o : i === '-' ? n - o : i === '*' ? n * o : n / o
    );
  },
  ow = function (n, r) {
    for (var i = r.length, o = 0; n.indexOf(r[o]) < 0 && ++o < i; );
    return o < i;
  },
  Iu = function () {
    var n = Gi.length,
      r = Gi.slice(0),
      i,
      o;
    for (xd = {}, Gi.length = 0, i = 0; i < n; i++)
      (o = r[i]),
        o && o._lazy && (o.render(o._lazy[0], o._lazy[1], !0)._lazy = 0);
  },
  W0 = function (n, r, i, o) {
    Gi.length && !un && Iu(),
      n.render(r, i, un && r < 0 && (n._initted || n._startAt)),
      Gi.length && !un && Iu();
  },
  Y0 = function (n) {
    var r = parseFloat(n);
    return (r || r === 0) && (n + '').match(U0).length < 2
      ? r
      : tn(n)
        ? n.trim()
        : n;
  },
  X0 = function (n) {
    return n;
  },
  gr = function (n, r) {
    for (var i in r) i in n || (n[i] = r[i]);
    return n;
  },
  aw = function (n) {
    return function (r, i) {
      for (var o in i)
        o in r || (o === 'duration' && n) || o === 'ease' || (r[o] = i[o]);
    };
  },
  To = function (n, r) {
    for (var i in r) n[i] = r[i];
    return n;
  },
  Dg = function a(n, r) {
    for (var i in r)
      i !== '__proto__' &&
        i !== 'constructor' &&
        i !== 'prototype' &&
        (n[i] = ii(r[i]) ? a(n[i] || (n[i] = {}), r[i]) : r[i]);
    return n;
  },
  Au = function (n, r) {
    var i = {},
      o;
    for (o in n) o in r || (i[o] = n[o]);
    return i;
  },
  Pa = function (n) {
    var r = n.parent || St,
      i = n.keyframes ? aw(xn(n.keyframes)) : gr;
    if (Gn(n.inherit))
      for (; r; ) i(n, r.vars.defaults), (r = r.parent || r._dp);
    return n;
  },
  sw = function (n, r) {
    for (var i = n.length, o = i === r.length; o && i-- && n[i] === r[i]; );
    return i < 0;
  },
  Q0 = function (n, r, i, o, s) {
    var c = n[o],
      f;
    if (s) for (f = r[s]; c && c[s] > f; ) c = c._prev;
    return (
      c ? ((r._next = c._next), (c._next = r)) : ((r._next = n[i]), (n[i] = r)),
      r._next ? (r._next._prev = r) : (n[o] = r),
      (r._prev = c),
      (r.parent = r._dp = n),
      r
    );
  },
  ec = function (n, r, i, o) {
    i === void 0 && (i = '_first'), o === void 0 && (o = '_last');
    var s = r._prev,
      c = r._next;
    s ? (s._next = c) : n[i] === r && (n[i] = c),
      c ? (c._prev = s) : n[o] === r && (n[o] = s),
      (r._next = r._prev = r.parent = null);
  },
  tl = function (n, r) {
    n.parent &&
      (!r || n.parent.autoRemoveChildren) &&
      n.parent.remove &&
      n.parent.remove(n),
      (n._act = 0);
  },
  Rl = function (n, r) {
    if (n && (!r || r._end > n._dur || r._start < 0))
      for (var i = n; i; ) (i._dirty = 1), (i = i.parent);
    return n;
  },
  uw = function (n) {
    for (var r = n.parent; r && r.parent; )
      (r._dirty = 1), r.totalDuration(), (r = r.parent);
    return n;
  },
  wd = function (n, r, i, o) {
    return (
      n._startAt &&
      (un
        ? n._startAt.revert(Eu)
        : (n.vars.immediateRender && !n.vars.autoRevert) ||
          n._startAt.render(r, !0, o))
    );
  },
  cw = function a(n) {
    return !n || (n._ts && a(n.parent));
  },
  Ng = function (n) {
    return n._repeat ? Po(n._tTime, (n = n.duration() + n._rDelay)) * n : 0;
  },
  Po = function (n, r) {
    var i = Math.floor((n = It(n / r)));
    return n && i === n ? i - 1 : i;
  },
  Uu = function (n, r) {
    return (
      (n - r._start) * r._ts +
      (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    );
  },
  tc = function (n) {
    return (n._end = It(
      n._start + (n._tDur / Math.abs(n._ts || n._rts || vn) || 0)
    ));
  },
  nc = function (n, r) {
    var i = n._dp;
    return (
      i &&
        i.smoothChildTiming &&
        n._ts &&
        ((n._start = It(
          i._time -
            (n._ts > 0
              ? r / n._ts
              : ((n._dirty ? n.totalDuration() : n._tDur) - r) / -n._ts)
        )),
        tc(n),
        i._dirty || Rl(i, n)),
      n
    );
  },
  K0 = function (n, r) {
    var i;
    if (
      ((r._time ||
        (!r._dur && r._initted) ||
        (r._start < n._time && (r._dur || !r.add))) &&
        ((i = Uu(n.rawTime(), r)),
        (!r._dur || Za(0, r.totalDuration(), i) - r._tTime > vn) &&
          r.render(i, !0)),
      Rl(n, r)._dp && n._initted && n._time >= n._dur && n._ts)
    ) {
      if (n._dur < n.duration())
        for (i = n; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      n._zTime = -1e-8;
    }
  },
  qr = function (n, r, i, o) {
    return (
      r.parent && tl(r),
      (r._start = It(
        (xi(i) ? i : i || n !== St ? Er(n, i, r) : n._time) + r._delay
      )),
      (r._end = It(
        r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)
      )),
      Q0(n, r, '_first', '_last', n._sort ? '_start' : 0),
      Sd(r) || (n._recent = r),
      o || K0(n, r),
      n._ts < 0 && nc(n, n._tTime),
      n
    );
  },
  G0 = function (n, r) {
    return (
      (mr.ScrollTrigger || ah('scrollTrigger', r)) &&
      mr.ScrollTrigger.create(r, n)
    );
  },
  q0 = function (n, r, i, o, s) {
    if ((dh(n, r, s), !n._initted)) return 1;
    if (
      !i &&
      n._pt &&
      !un &&
      ((n._dur && n.vars.lazy !== !1) || (!n._dur && n.vars.lazy)) &&
      V0 !== fr.frame
    )
      return Gi.push(n), (n._lazy = [s, o]), 1;
  },
  fw = function a(n) {
    var r = n.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || a(r));
  },
  Sd = function (n) {
    var r = n.data;
    return r === 'isFromStart' || r === 'isStart';
  },
  dw = function (n, r, i, o) {
    var s = n.ratio,
      c =
        r < 0 ||
        (!r &&
          ((!n._start && fw(n) && !(!n._initted && Sd(n))) ||
            ((n._ts < 0 || n._dp._ts < 0) && !Sd(n))))
          ? 0
          : 1,
      f = n._rDelay,
      h = 0,
      m,
      g,
      x;
    if (
      (f &&
        n._repeat &&
        ((h = Za(0, n._tDur, r)),
        (g = Po(h, f)),
        n._yoyo && g & 1 && (c = 1 - c),
        g !== Po(n._tTime, f) &&
          ((s = 1 - c), n.vars.repeatRefresh && n._initted && n.invalidate())),
      c !== s || un || o || n._zTime === vn || (!r && n._zTime))
    ) {
      if (!n._initted && q0(n, r, o, i, h)) return;
      for (
        x = n._zTime,
          n._zTime = r || (i ? vn : 0),
          i || (i = r && !x),
          n.ratio = c,
          n._from && (c = 1 - c),
          n._time = 0,
          n._tTime = h,
          m = n._pt;
        m;

      )
        m.r(c, m.d), (m = m._next);
      r < 0 && wd(n, r, i, !0),
        n._onUpdate && !i && hr(n, 'onUpdate'),
        h && n._repeat && !i && n.parent && hr(n, 'onRepeat'),
        (r >= n._tDur || r < 0) &&
          n.ratio === c &&
          (c && tl(n, 1),
          !i &&
            !un &&
            (hr(n, c ? 'onComplete' : 'onReverseComplete', !0),
            n._prom && n._prom()));
    } else n._zTime || (n._zTime = r);
  },
  hw = function (n, r, i) {
    var o;
    if (i > r)
      for (o = n._first; o && o._start <= i; ) {
        if (o.data === 'isPause' && o._start > r) return o;
        o = o._next;
      }
    else
      for (o = n._last; o && o._start >= i; ) {
        if (o.data === 'isPause' && o._start < r) return o;
        o = o._prev;
      }
  },
  Ro = function (n, r, i, o) {
    var s = n._repeat,
      c = It(r) || 0,
      f = n._tTime / n._tDur;
    return (
      f && !o && (n._time *= c / n._dur),
      (n._dur = c),
      (n._tDur = s ? (s < 0 ? 1e10 : It(c * (s + 1) + n._rDelay * s)) : c),
      f > 0 && !o && nc(n, (n._tTime = n._tDur * f)),
      n.parent && tc(n),
      i || Rl(n.parent, n),
      n
    );
  },
  Mg = function (n) {
    return n instanceof jn ? Rl(n) : Ro(n, n._dur);
  },
  pw = {_start: 0, endTime: $a, totalDuration: $a},
  Er = function a(n, r, i) {
    var o = n.labels,
      s = n._recent || pw,
      c = n.duration() >= ti ? s.endTime(!1) : n._dur,
      f,
      h,
      m;
    return tn(r) && (isNaN(r) || r in o)
      ? ((h = r.charAt(0)),
        (m = r.substr(-1) === '%'),
        (f = r.indexOf('=')),
        h === '<' || h === '>'
          ? (f >= 0 && (r = r.replace(/=/, '')),
            (h === '<' ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(r.substr(1)) || 0) *
                (m ? (f < 0 ? s : i).totalDuration() / 100 : 1))
          : f < 0
            ? (r in o || (o[r] = c), o[r])
            : ((h = parseFloat(r.charAt(f - 1) + r.substr(f + 1))),
              m && i && (h = (h / 100) * (xn(i) ? i[0] : i).totalDuration()),
              f > 1 ? a(n, r.substr(0, f - 1), i) + h : c + h))
      : r == null
        ? c
        : +r;
  },
  Ra = function (n, r, i) {
    var o = xi(r[1]),
      s = (o ? 2 : 1) + (n < 2 ? 0 : 1),
      c = r[s],
      f,
      h;
    if ((o && (c.duration = r[1]), (c.parent = i), n)) {
      for (f = c, h = i; h && !('immediateRender' in f); )
        (f = h.vars.defaults || {}), (h = Gn(h.vars.inherit) && h.parent);
      (c.immediateRender = Gn(f.immediateRender)),
        n < 2 ? (c.runBackwards = 1) : (c.startAt = r[s - 1]);
    }
    return new Ft(r[0], c, r[s + 1]);
  },
  ll = function (n, r) {
    return n || n === 0 ? r(n) : r;
  },
  Za = function (n, r, i) {
    return i < n ? n : i > r ? r : i;
  },
  yn = function (n, r) {
    return !tn(n) || !(r = rw.exec(n)) ? '' : r[1];
  },
  mw = function (n, r, i) {
    return ll(i, function (o) {
      return Za(n, r, o);
    });
  },
  kd = [].slice,
  J0 = function (n, r) {
    return (
      n &&
      ii(n) &&
      'length' in n &&
      ((!r && !n.length) || (n.length - 1 in n && ii(n[0]))) &&
      !n.nodeType &&
      n !== Kr
    );
  },
  gw = function (n, r, i) {
    return (
      i === void 0 && (i = []),
      n.forEach(function (o) {
        var s;
        return (tn(o) && !r) || J0(o, 1)
          ? (s = i).push.apply(s, Rr(o))
          : i.push(o);
      }) || i
    );
  },
  Rr = function (n, r, i) {
    return gt && !r && gt.selector
      ? gt.selector(n)
      : tn(n) && !i && (vd || !Do())
        ? kd.call((r || oh).querySelectorAll(n), 0)
        : xn(n)
          ? gw(n, i)
          : J0(n)
            ? kd.call(n, 0)
            : n
              ? [n]
              : [];
  },
  Ed = function (n) {
    return (
      (n = Rr(n)[0] || ba('Invalid scope') || {}),
      function (r) {
        var i = n.current || n.nativeElement || n;
        return Rr(
          r,
          i.querySelectorAll
            ? i
            : i === n
              ? ba('Invalid scope') || oh.createElement('div')
              : n
        );
      }
    );
  },
  Z0 = function (n) {
    return n.sort(function () {
      return 0.5 - Math.random();
    });
  },
  ey = function (n) {
    if (Tt(n)) return n;
    var r = ii(n) ? n : {each: n},
      i = Dl(r.ease),
      o = r.from || 0,
      s = parseFloat(r.base) || 0,
      c = {},
      f = o > 0 && o < 1,
      h = isNaN(o) || f,
      m = r.axis,
      g = o,
      x = o;
    return (
      tn(o)
        ? (g = x = {center: 0.5, edges: 0.5, end: 1}[o] || 0)
        : !f && h && ((g = o[0]), (x = o[1])),
      function (v, y, S) {
        var w = (S || r).length,
          C = c[w],
          P,
          z,
          I,
          F,
          k,
          $,
          U,
          H,
          X;
        if (!C) {
          if (((X = r.grid === 'auto' ? 0 : (r.grid || [1, ti])[1]), !X)) {
            for (
              U = -1e8;
              U < (U = S[X++].getBoundingClientRect().left) && X < w;

            );
            X < w && X--;
          }
          for (
            C = c[w] = [],
              P = h ? Math.min(X, w) * g - 0.5 : o % X,
              z = X === ti ? 0 : h ? (w * x) / X - 0.5 : (o / X) | 0,
              U = 0,
              H = ti,
              $ = 0;
            $ < w;
            $++
          )
            (I = ($ % X) - P),
              (F = z - (($ / X) | 0)),
              (C[$] = k = m ? Math.abs(m === 'y' ? F : I) : z0(I * I + F * F)),
              k > U && (U = k),
              k < H && (H = k);
          o === 'random' && Z0(C),
            (C.max = U - H),
            (C.min = H),
            (C.v = w =
              (parseFloat(r.amount) ||
                parseFloat(r.each) *
                  (X > w
                    ? w - 1
                    : m
                      ? m === 'y'
                        ? w / X
                        : X
                      : Math.max(X, w / X)) ||
                0) * (o === 'edges' ? -1 : 1)),
            (C.b = w < 0 ? s - w : s),
            (C.u = yn(r.amount || r.each) || 0),
            (i = i && w < 0 ? cy(i) : i);
        }
        return (
          (w = (C[v] - C.min) / C.max || 0),
          It(C.b + (i ? i(w) : w) * C.v) + C.u
        );
      }
    );
  },
  Cd = function (n) {
    var r = Math.pow(10, ((n + '').split('.')[1] || '').length);
    return function (i) {
      var o = It(Math.round(parseFloat(i) / n) * n * r);
      return (o - (o % 1)) / r + (xi(i) ? 0 : yn(i));
    };
  },
  ty = function (n, r) {
    var i = xn(n),
      o,
      s;
    return (
      !i &&
        ii(n) &&
        ((o = i = n.radius || ti),
        n.values
          ? ((n = Rr(n.values)), (s = !xi(n[0])) && (o *= o))
          : (n = Cd(n.increment))),
      ll(
        r,
        i
          ? Tt(n)
            ? function (c) {
                return (s = n(c)), Math.abs(s - c) <= o ? s : c;
              }
            : function (c) {
                for (
                  var f = parseFloat(s ? c.x : c),
                    h = parseFloat(s ? c.y : 0),
                    m = ti,
                    g = 0,
                    x = n.length,
                    v,
                    y;
                  x--;

                )
                  s
                    ? ((v = n[x].x - f), (y = n[x].y - h), (v = v * v + y * y))
                    : (v = Math.abs(n[x] - f)),
                    v < m && ((m = v), (g = x));
                return (
                  (g = !o || m <= o ? n[g] : c),
                  s || g === c || xi(c) ? g : g + yn(c)
                );
              }
          : Cd(n)
      )
    );
  },
  ny = function (n, r, i, o) {
    return ll(xn(n) ? !r : i === !0 ? !!(i = 0) : !o, function () {
      return xn(n)
        ? n[~~(Math.random() * n.length)]
        : (i = i || 1e-5) &&
            (o = i < 1 ? Math.pow(10, (i + '').length - 2) : 1) &&
            Math.floor(
              Math.round((n - i / 2 + Math.random() * (r - n + i * 0.99)) / i) *
                i *
                o
            ) / o;
    });
  },
  yw = function () {
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return function (o) {
      return r.reduce(function (s, c) {
        return c(s);
      }, o);
    };
  },
  _w = function (n, r) {
    return function (i) {
      return n(parseFloat(i)) + (r || yn(i));
    };
  },
  vw = function (n, r, i) {
    return iy(n, r, 0, 1, i);
  },
  ry = function (n, r, i) {
    return ll(i, function (o) {
      return n[~~r(o)];
    });
  },
  xw = function a(n, r, i) {
    var o = r - n;
    return xn(n)
      ? ry(n, a(0, n.length), r)
      : ll(i, function (s) {
          return ((o + ((s - n) % o)) % o) + n;
        });
  },
  ww = function a(n, r, i) {
    var o = r - n,
      s = o * 2;
    return xn(n)
      ? ry(n, a(0, n.length - 1), r)
      : ll(i, function (c) {
          return (c = (s + ((c - n) % s)) % s || 0), n + (c > o ? s - c : c);
        });
  },
  Ba = function (n) {
    for (var r = 0, i = '', o, s, c, f; ~(o = n.indexOf('random(', r)); )
      (c = n.indexOf(')', o)),
        (f = n.charAt(o + 7) === '['),
        (s = n.substr(o + 7, c - o - 7).match(f ? U0 : _d)),
        (i +=
          n.substr(r, o - r) + ny(f ? s : +s[0], f ? 0 : +s[1], +s[2] || 1e-5)),
        (r = c + 1);
    return i + n.substr(r, n.length - r);
  },
  iy = function (n, r, i, o, s) {
    var c = r - n,
      f = o - i;
    return ll(s, function (h) {
      return i + (((h - n) / c) * f || 0);
    });
  },
  Sw = function a(n, r, i, o) {
    var s = isNaN(n + r)
      ? 0
      : function (y) {
          return (1 - y) * n + y * r;
        };
    if (!s) {
      var c = tn(n),
        f = {},
        h,
        m,
        g,
        x,
        v;
      if ((i === !0 && (o = 1) && (i = null), c)) (n = {p: n}), (r = {p: r});
      else if (xn(n) && !xn(r)) {
        for (g = [], x = n.length, v = x - 2, m = 1; m < x; m++)
          g.push(a(n[m - 1], n[m]));
        x--,
          (s = function (S) {
            S *= x;
            var w = Math.min(v, ~~S);
            return g[w](S - w);
          }),
          (i = r);
      } else o || (n = To(xn(n) ? [] : {}, n));
      if (!g) {
        for (h in r) fh.call(f, n, h, 'get', r[h]);
        s = function (S) {
          return mh(S, f) || (c ? n.p : n);
        };
      }
    }
    return ll(i, s);
  },
  Lg = function (n, r, i) {
    var o = n.labels,
      s = ti,
      c,
      f,
      h;
    for (c in o)
      (f = o[c] - r),
        f < 0 == !!i && f && s > (f = Math.abs(f)) && ((h = c), (s = f));
    return h;
  },
  hr = function (n, r, i) {
    var o = n.vars,
      s = o[r],
      c = gt,
      f = n._ctx,
      h,
      m,
      g;
    if (s)
      return (
        (h = o[r + 'Params']),
        (m = o.callbackScope || n),
        i && Gi.length && Iu(),
        f && (gt = f),
        (g = h ? s.apply(m, h) : s.call(m)),
        (gt = c),
        g
      );
  },
  xa = function (n) {
    return (
      tl(n),
      n.scrollTrigger && n.scrollTrigger.kill(!!un),
      n.progress() < 1 && hr(n, 'onInterrupt'),
      n
    );
  },
  yo,
  ly = [],
  oy = function (n) {
    if (n)
      if (((n = (!n.name && n.default) || n), lh() || n.headless)) {
        var r = n.name,
          i = Tt(n),
          o =
            r && !i && n.init
              ? function () {
                  this._props = [];
                }
              : n,
          s = {
            init: $a,
            render: mh,
            add: fh,
            kill: Aw,
            modifier: Iw,
            rawVars: 0,
          },
          c = {targetTest: 0, get: 0, getSetter: ph, aliases: {}, register: 0};
        if ((Do(), n !== o)) {
          if (ur[r]) return;
          gr(o, gr(Au(n, s), c)),
            To(o.prototype, To(s, Au(n, c))),
            (ur[(o.prop = r)] = o),
            n.targetTest && (Cu.push(o), (sh[r] = 1)),
            (r =
              (r === 'css' ? 'CSS' : r.charAt(0).toUpperCase() + r.substr(1)) +
              'Plugin');
        }
        B0(r, o), n.register && n.register(er, o, Jn);
      } else ly.push(n);
  },
  at = 255,
  wa = {
    aqua: [0, at, at],
    lime: [0, at, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, at],
    navy: [0, 0, 128],
    white: [at, at, at],
    olive: [128, 128, 0],
    yellow: [at, at, 0],
    orange: [at, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [at, 0, 0],
    pink: [at, 192, 203],
    cyan: [0, at, at],
    transparent: [at, at, at, 0],
  },
  Kf = function (n, r, i) {
    return (
      (n += n < 0 ? 1 : n > 1 ? -1 : 0),
      ((n * 6 < 1
        ? r + (i - r) * n * 6
        : n < 0.5
          ? i
          : n * 3 < 2
            ? r + (i - r) * (2 / 3 - n) * 6
            : r) *
        at +
        0.5) |
        0
    );
  },
  ay = function (n, r, i) {
    var o = n ? (xi(n) ? [n >> 16, (n >> 8) & at, n & at] : 0) : wa.black,
      s,
      c,
      f,
      h,
      m,
      g,
      x,
      v,
      y,
      S;
    if (!o) {
      if ((n.substr(-1) === ',' && (n = n.substr(0, n.length - 1)), wa[n]))
        o = wa[n];
      else if (n.charAt(0) === '#') {
        if (
          (n.length < 6 &&
            ((s = n.charAt(1)),
            (c = n.charAt(2)),
            (f = n.charAt(3)),
            (n =
              '#' +
              s +
              s +
              c +
              c +
              f +
              f +
              (n.length === 5 ? n.charAt(4) + n.charAt(4) : ''))),
          n.length === 9)
        )
          return (
            (o = parseInt(n.substr(1, 6), 16)),
            [o >> 16, (o >> 8) & at, o & at, parseInt(n.substr(7), 16) / 255]
          );
        (n = parseInt(n.substr(1), 16)), (o = [n >> 16, (n >> 8) & at, n & at]);
      } else if (n.substr(0, 3) === 'hsl') {
        if (((o = S = n.match(_d)), !r))
          (h = (+o[0] % 360) / 360),
            (m = +o[1] / 100),
            (g = +o[2] / 100),
            (c = g <= 0.5 ? g * (m + 1) : g + m - g * m),
            (s = g * 2 - c),
            o.length > 3 && (o[3] *= 1),
            (o[0] = Kf(h + 1 / 3, s, c)),
            (o[1] = Kf(h, s, c)),
            (o[2] = Kf(h - 1 / 3, s, c));
        else if (~n.indexOf('='))
          return (o = n.match(I0)), i && o.length < 4 && (o[3] = 1), o;
      } else o = n.match(_d) || wa.transparent;
      o = o.map(Number);
    }
    return (
      r &&
        !S &&
        ((s = o[0] / at),
        (c = o[1] / at),
        (f = o[2] / at),
        (x = Math.max(s, c, f)),
        (v = Math.min(s, c, f)),
        (g = (x + v) / 2),
        x === v
          ? (h = m = 0)
          : ((y = x - v),
            (m = g > 0.5 ? y / (2 - x - v) : y / (x + v)),
            (h =
              x === s
                ? (c - f) / y + (c < f ? 6 : 0)
                : x === c
                  ? (f - s) / y + 2
                  : (s - c) / y + 4),
            (h *= 60)),
        (o[0] = ~~(h + 0.5)),
        (o[1] = ~~(m * 100 + 0.5)),
        (o[2] = ~~(g * 100 + 0.5))),
      i && o.length < 4 && (o[3] = 1),
      o
    );
  },
  sy = function (n) {
    var r = [],
      i = [],
      o = -1;
    return (
      n.split(qi).forEach(function (s) {
        var c = s.match(go) || [];
        r.push.apply(r, c), i.push((o += c.length + 1));
      }),
      (r.c = i),
      r
    );
  },
  Og = function (n, r, i) {
    var o = '',
      s = (n + o).match(qi),
      c = r ? 'hsla(' : 'rgba(',
      f = 0,
      h,
      m,
      g,
      x;
    if (!s) return n;
    if (
      ((s = s.map(function (v) {
        return (
          (v = ay(v, r, 1)) &&
          c +
            (r ? v[0] + ',' + v[1] + '%,' + v[2] + '%,' + v[3] : v.join(',')) +
            ')'
        );
      })),
      i && ((g = sy(n)), (h = i.c), h.join(o) !== g.c.join(o)))
    )
      for (m = n.replace(qi, '1').split(go), x = m.length - 1; f < x; f++)
        o +=
          m[f] +
          (~h.indexOf(f)
            ? s.shift() || c + '0,0,0,0)'
            : (g.length ? g : s.length ? s : i).shift());
    if (!m)
      for (m = n.split(qi), x = m.length - 1; f < x; f++) o += m[f] + s[f];
    return o + m[x];
  },
  qi = (function () {
    var a =
        '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
      n;
    for (n in wa) a += '|' + n + '\\b';
    return new RegExp(a + ')', 'gi');
  })(),
  kw = /hsl[a]?\(/,
  uy = function (n) {
    var r = n.join(' '),
      i;
    if (((qi.lastIndex = 0), qi.test(r)))
      return (
        (i = kw.test(r)),
        (n[1] = Og(n[1], i)),
        (n[0] = Og(n[0], i, sy(n[1]))),
        !0
      );
  },
  Va,
  fr = (function () {
    var a = Date.now,
      n = 500,
      r = 33,
      i = a(),
      o = i,
      s = 1e3 / 240,
      c = s,
      f = [],
      h,
      m,
      g,
      x,
      v,
      y,
      S = function w(C) {
        var P = a() - o,
          z = C === !0,
          I,
          F,
          k,
          $;
        if (
          ((P > n || P < 0) && (i += P - r),
          (o += P),
          (k = o - i),
          (I = k - c),
          (I > 0 || z) &&
            (($ = ++x.frame),
            (v = k - x.time * 1e3),
            (x.time = k = k / 1e3),
            (c += I + (I >= s ? 4 : s - I)),
            (F = 1)),
          z || (h = m(w)),
          F)
        )
          for (y = 0; y < f.length; y++) f[y](k, v, $, C);
      };
    return (
      (x = {
        time: 0,
        frame: 0,
        tick: function () {
          S(!0);
        },
        deltaRatio: function (C) {
          return v / (1e3 / (C || 60));
        },
        wake: function () {
          b0 &&
            (!vd &&
              lh() &&
              ((Kr = vd = window),
              (oh = Kr.document || {}),
              (mr.gsap = er),
              (Kr.gsapVersions || (Kr.gsapVersions = [])).push(er.version),
              $0(Fu || Kr.GreenSockGlobals || (!Kr.gsap && Kr) || {}),
              ly.forEach(oy)),
            (g = typeof requestAnimationFrame < 'u' && requestAnimationFrame),
            h && x.sleep(),
            (m =
              g ||
              function (C) {
                return setTimeout(C, (c - x.time * 1e3 + 1) | 0);
              }),
            (Va = 1),
            S(2));
        },
        sleep: function () {
          (g ? cancelAnimationFrame : clearTimeout)(h), (Va = 0), (m = $a);
        },
        lagSmoothing: function (C, P) {
          (n = C || 1 / 0), (r = Math.min(P || 33, n));
        },
        fps: function (C) {
          (s = 1e3 / (C || 240)), (c = x.time * 1e3 + s);
        },
        add: function (C, P, z) {
          var I = P
            ? function (F, k, $, U) {
                C(F, k, $, U), x.remove(I);
              }
            : C;
          return x.remove(C), f[z ? 'unshift' : 'push'](I), Do(), I;
        },
        remove: function (C, P) {
          ~(P = f.indexOf(C)) && f.splice(P, 1) && y >= P && y--;
        },
        _listeners: f,
      }),
      x
    );
  })(),
  Do = function () {
    return !Va && fr.wake();
  },
  Ke = {},
  Ew = /^[\d.\-M][\d.\-,\s]/,
  Cw = /["']/g,
  Tw = function (n) {
    for (
      var r = {},
        i = n.substr(1, n.length - 3).split(':'),
        o = i[0],
        s = 1,
        c = i.length,
        f,
        h,
        m;
      s < c;
      s++
    )
      (h = i[s]),
        (f = s !== c - 1 ? h.lastIndexOf(',') : h.length),
        (m = h.substr(0, f)),
        (r[o] = isNaN(m) ? m.replace(Cw, '').trim() : +m),
        (o = h.substr(f + 1).trim());
    return r;
  },
  Pw = function (n) {
    var r = n.indexOf('(') + 1,
      i = n.indexOf(')'),
      o = n.indexOf('(', r);
    return n.substring(r, ~o && o < i ? n.indexOf(')', i + 1) : i);
  },
  Rw = function (n) {
    var r = (n + '').split('('),
      i = Ke[r[0]];
    return i && r.length > 1 && i.config
      ? i.config.apply(
          null,
          ~n.indexOf('{') ? [Tw(r[1])] : Pw(n).split(',').map(Y0)
        )
      : Ke._CE && Ew.test(n)
        ? Ke._CE('', n)
        : i;
  },
  cy = function (n) {
    return function (r) {
      return 1 - n(1 - r);
    };
  },
  fy = function a(n, r) {
    for (var i = n._first, o; i; )
      i instanceof jn
        ? a(i, r)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== r &&
          (i.timeline
            ? a(i.timeline, r)
            : ((o = i._ease),
              (i._ease = i._yEase),
              (i._yEase = o),
              (i._yoyo = r))),
        (i = i._next);
  },
  Dl = function (n, r) {
    return (n && (Tt(n) ? n : Ke[n] || Rw(n))) || r;
  },
  bl = function (n, r, i, o) {
    i === void 0 &&
      (i = function (h) {
        return 1 - r(1 - h);
      }),
      o === void 0 &&
        (o = function (h) {
          return h < 0.5 ? r(h * 2) / 2 : 1 - r((1 - h) * 2) / 2;
        });
    var s = {easeIn: r, easeOut: i, easeInOut: o},
      c;
    return (
      qn(n, function (f) {
        (Ke[f] = mr[f] = s), (Ke[(c = f.toLowerCase())] = i);
        for (var h in s)
          Ke[
            c + (h === 'easeIn' ? '.in' : h === 'easeOut' ? '.out' : '.inOut')
          ] = Ke[f + '.' + h] = s[h];
      }),
      s
    );
  },
  dy = function (n) {
    return function (r) {
      return r < 0.5 ? (1 - n(1 - r * 2)) / 2 : 0.5 + n((r - 0.5) * 2) / 2;
    };
  },
  Gf = function a(n, r, i) {
    var o = r >= 1 ? r : 1,
      s = (i || (n ? 0.3 : 0.45)) / (r < 1 ? r : 1),
      c = (s / yd) * (Math.asin(1 / o) || 0),
      f = function (g) {
        return g === 1 ? 1 : o * Math.pow(2, -10 * g) * nw((g - c) * s) + 1;
      },
      h =
        n === 'out'
          ? f
          : n === 'in'
            ? function (m) {
                return 1 - f(1 - m);
              }
            : dy(f);
    return (
      (s = yd / s),
      (h.config = function (m, g) {
        return a(n, m, g);
      }),
      h
    );
  },
  qf = function a(n, r) {
    r === void 0 && (r = 1.70158);
    var i = function (c) {
        return c ? --c * c * ((r + 1) * c + r) + 1 : 0;
      },
      o =
        n === 'out'
          ? i
          : n === 'in'
            ? function (s) {
                return 1 - i(1 - s);
              }
            : dy(i);
    return (
      (o.config = function (s) {
        return a(n, s);
      }),
      o
    );
  };
qn('Linear,Quad,Cubic,Quart,Quint,Strong', function (a, n) {
  var r = n < 5 ? n + 1 : n;
  bl(
    a + ',Power' + (r - 1),
    n
      ? function (i) {
          return Math.pow(i, r);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, r);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, r) / 2
        : 1 - Math.pow((1 - i) * 2, r) / 2;
    }
  );
});
Ke.Linear.easeNone = Ke.none = Ke.Linear.easeIn;
bl('Elastic', Gf('in'), Gf('out'), Gf());
(function (a, n) {
  var r = 1 / n,
    i = 2 * r,
    o = 2.5 * r,
    s = function (f) {
      return f < r
        ? a * f * f
        : f < i
          ? a * Math.pow(f - 1.5 / n, 2) + 0.75
          : f < o
            ? a * (f -= 2.25 / n) * f + 0.9375
            : a * Math.pow(f - 2.625 / n, 2) + 0.984375;
    };
  bl(
    'Bounce',
    function (c) {
      return 1 - s(1 - c);
    },
    s
  );
})(7.5625, 2.75);
bl('Expo', function (a) {
  return Math.pow(2, 10 * (a - 1)) * a + a * a * a * a * a * a * (1 - a);
});
bl('Circ', function (a) {
  return -(z0(1 - a * a) - 1);
});
bl('Sine', function (a) {
  return a === 1 ? 1 : -tw(a * Zx) + 1;
});
bl('Back', qf('in'), qf('out'), qf());
Ke.SteppedEase =
  Ke.steps =
  mr.SteppedEase =
    {
      config: function (n, r) {
        n === void 0 && (n = 1);
        var i = 1 / n,
          o = n + (r ? 0 : 1),
          s = r ? 1 : 0,
          c = 1 - vn;
        return function (f) {
          return (((o * Za(0, c, f)) | 0) + s) * i;
        };
      },
    };
Co.ease = Ke['quad.out'];
qn(
  'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
  function (a) {
    return (uh += a + ',' + a + 'Params,');
  }
);
var hy = function (n, r) {
    (this.id = ew++),
      (n._gsap = this),
      (this.target = n),
      (this.harness = r),
      (this.get = r ? r.get : H0),
      (this.set = r ? r.getSetter : ph);
  },
  Ha = (function () {
    function a(r) {
      (this.vars = r),
        (this._delay = +r.delay || 0),
        (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) &&
          ((this._rDelay = r.repeatDelay || 0),
          (this._yoyo = !!r.yoyo || !!r.yoyoEase)),
        (this._ts = 1),
        Ro(this, +r.duration, 1, 1),
        (this.data = r.data),
        gt && ((this._ctx = gt), gt.data.push(this)),
        Va || fr.wake();
    }
    var n = a.prototype;
    return (
      (n.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (n.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (n.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            Ro(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (n.totalTime = function (i, o) {
        if ((Do(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (nc(this, i), !s._dp || s.parent || K0(s, this); s && s.parent; )
            s.parent._time !==
              s._start +
                (s._ts >= 0
                  ? s._tTime / s._ts
                  : (s.totalDuration() - s._tTime) / -s._ts) &&
              s.totalTime(s._tTime, !0),
              (s = s.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            qr(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !o) ||
            (this._initted && Math.abs(this._zTime) === vn) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), W0(this, i, o)),
          this
        );
      }),
      (n.time = function (i, o) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + Ng(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              o
            )
          : this._time;
      }),
      (n.totalProgress = function (i, o) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, o)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (n.progress = function (i, o) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                Ng(this),
              o
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (n.iteration = function (i, o) {
        var s = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * s, o)
          : this._repeat
            ? Po(this._tTime, s) + 1
            : 1;
      }),
      (n.timeScale = function (i, o) {
        if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === i) return this;
        var s =
          this.parent && this._ts ? Uu(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -1e-8 ? 0 : this._rts),
          this.totalTime(Za(-Math.abs(this._delay), this._tDur, s), o !== !1),
          tc(this),
          uw(this)
        );
      }),
      (n.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Do(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== vn &&
                      (this._tTime -= vn)
                  ))),
            this)
          : this._ps;
      }),
      (n.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var o = this.parent || this._dp;
          return (
            o && (o._sort || !this.parent) && qr(o, this, i - this._delay), this
          );
        }
        return this._start;
      }),
      (n.endTime = function (i) {
        return (
          this._start +
          (Gn(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (n.rawTime = function (i) {
        var o = this.parent || this._dp;
        return o
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? Uu(o.rawTime(i), this)
              : this._tTime
          : this._tTime;
      }),
      (n.revert = function (i) {
        i === void 0 && (i = lw);
        var o = un;
        return (
          (un = i),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== 'nested' && i.kill !== !1 && this.kill(),
          (un = o),
          this
        );
      }),
      (n.globalTime = function (i) {
        for (var o = this, s = arguments.length ? i : o.rawTime(); o; )
          (s = o._start + s / (Math.abs(o._ts) || 1)), (o = o._dp);
        return !this.parent && this._sat ? this._sat.globalTime(i) : s;
      }),
      (n.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), Mg(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (n.repeatDelay = function (i) {
        if (arguments.length) {
          var o = this._time;
          return (this._rDelay = i), Mg(this), o ? this.time(o) : this;
        }
        return this._rDelay;
      }),
      (n.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (n.seek = function (i, o) {
        return this.totalTime(Er(this, i), Gn(o));
      }),
      (n.restart = function (i, o) {
        return (
          this.play().totalTime(i ? -this._delay : 0, Gn(o)),
          this._dur || (this._zTime = -1e-8),
          this
        );
      }),
      (n.play = function (i, o) {
        return i != null && this.seek(i, o), this.reversed(!1).paused(!1);
      }),
      (n.reverse = function (i, o) {
        return (
          i != null && this.seek(i || this.totalDuration(), o),
          this.reversed(!0).paused(!1)
        );
      }),
      (n.pause = function (i, o) {
        return i != null && this.seek(i, o), this.paused(!0);
      }),
      (n.resume = function () {
        return this.paused(!1);
      }),
      (n.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -1e-8 : 0)),
            this)
          : this._rts < 0;
      }),
      (n.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
      }),
      (n.isActive = function () {
        var i = this.parent || this._dp,
          o = this._start,
          s;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (s = i.rawTime(!0)) >= o &&
            s < this.endTime(!0) - vn)
        );
      }),
      (n.eventCallback = function (i, o, s) {
        var c = this.vars;
        return arguments.length > 1
          ? (o
              ? ((c[i] = o),
                s && (c[i + 'Params'] = s),
                i === 'onUpdate' && (this._onUpdate = o))
              : delete c[i],
            this)
          : c[i];
      }),
      (n.then = function (i) {
        var o = this;
        return new Promise(function (s) {
          var c = Tt(i) ? i : X0,
            f = function () {
              var m = o.then;
              (o.then = null),
                Tt(c) && (c = c(o)) && (c.then || c === o) && (o.then = m),
                s(c),
                (o.then = m);
            };
          (o._initted && o.totalProgress() === 1 && o._ts >= 0) ||
          (!o._tTime && o._ts < 0)
            ? f()
            : (o._prom = f);
        });
      }),
      (n.kill = function () {
        xa(this);
      }),
      a
    );
  })();
gr(Ha.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var jn = (function (a) {
  j0(n, a);
  function n(i, o) {
    var s;
    return (
      i === void 0 && (i = {}),
      (s = a.call(this, i) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!i.smoothChildTiming),
      (s.autoRemoveChildren = !!i.autoRemoveChildren),
      (s._sort = Gn(i.sortChildren)),
      St && qr(i.parent || St, mi(s), o),
      i.reversed && s.reverse(),
      i.paused && s.paused(!0),
      i.scrollTrigger && G0(mi(s), i.scrollTrigger),
      s
    );
  }
  var r = n.prototype;
  return (
    (r.to = function (o, s, c) {
      return Ra(0, arguments, this), this;
    }),
    (r.from = function (o, s, c) {
      return Ra(1, arguments, this), this;
    }),
    (r.fromTo = function (o, s, c, f) {
      return Ra(2, arguments, this), this;
    }),
    (r.set = function (o, s, c) {
      return (
        (s.duration = 0),
        (s.parent = this),
        Pa(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new Ft(o, s, Er(this, c), 1),
        this
      );
    }),
    (r.call = function (o, s, c) {
      return qr(this, Ft.delayedCall(0, o, s), c);
    }),
    (r.staggerTo = function (o, s, c, f, h, m, g) {
      return (
        (c.duration = s),
        (c.stagger = c.stagger || f),
        (c.onComplete = m),
        (c.onCompleteParams = g),
        (c.parent = this),
        new Ft(o, c, Er(this, h)),
        this
      );
    }),
    (r.staggerFrom = function (o, s, c, f, h, m, g) {
      return (
        (c.runBackwards = 1),
        (Pa(c).immediateRender = Gn(c.immediateRender)),
        this.staggerTo(o, s, c, f, h, m, g)
      );
    }),
    (r.staggerFromTo = function (o, s, c, f, h, m, g, x) {
      return (
        (f.startAt = c),
        (Pa(f).immediateRender = Gn(f.immediateRender)),
        this.staggerTo(o, s, f, h, m, g, x)
      );
    }),
    (r.render = function (o, s, c) {
      var f = this._time,
        h = this._dirty ? this.totalDuration() : this._tDur,
        m = this._dur,
        g = o <= 0 ? 0 : It(o),
        x = this._zTime < 0 != o < 0 && (this._initted || !m),
        v,
        y,
        S,
        w,
        C,
        P,
        z,
        I,
        F,
        k,
        $,
        U;
      if (
        (this !== St && g > h && o >= 0 && (g = h), g !== this._tTime || c || x)
      ) {
        if (
          (f !== this._time &&
            m &&
            ((g += this._time - f), (o += this._time - f)),
          (v = g),
          (F = this._start),
          (I = this._ts),
          (P = !I),
          x && (m || (f = this._zTime), (o || !s) && (this._zTime = o)),
          this._repeat)
        ) {
          if (
            (($ = this._yoyo),
            (C = m + this._rDelay),
            this._repeat < -1 && o < 0)
          )
            return this.totalTime(C * 100 + o, s, c);
          if (
            ((v = It(g % C)),
            g === h
              ? ((w = this._repeat), (v = m))
              : ((k = It(g / C)),
                (w = ~~k),
                w && w === k && ((v = m), w--),
                v > m && (v = m)),
            (k = Po(this._tTime, C)),
            !f &&
              this._tTime &&
              k !== w &&
              this._tTime - k * C - this._dur <= 0 &&
              (k = w),
            $ && w & 1 && ((v = m - v), (U = 1)),
            w !== k && !this._lock)
          ) {
            var H = $ && k & 1,
              X = H === ($ && w & 1);
            if (
              (w < k && (H = !H),
              (f = H ? 0 : g % m ? m : g),
              (this._lock = 1),
              (this.render(f || (U ? 0 : It(w * C)), s, !m)._lock = 0),
              (this._tTime = g),
              !s && this.parent && hr(this, 'onRepeat'),
              this.vars.repeatRefresh && !U && (this.invalidate()._lock = 1),
              (f && f !== this._time) ||
                P !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((m = this._dur),
              (h = this._tDur),
              X &&
                ((this._lock = 2),
                (f = H ? m : -1e-4),
                this.render(f, !0),
                this.vars.repeatRefresh && !U && this.invalidate()),
              (this._lock = 0),
              !this._ts && !P)
            )
              return this;
            fy(this, U);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((z = hw(this, It(f), It(v))), z && (g -= v - (v = z._start))),
          (this._tTime = g),
          (this._time = v),
          (this._act = !I),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = o),
            (f = 0)),
          !f && v && !s && !w && (hr(this, 'onStart'), this._tTime !== g))
        )
          return this;
        if (v >= f && o >= 0)
          for (y = this._first; y; ) {
            if (
              ((S = y._next), (y._act || v >= y._start) && y._ts && z !== y)
            ) {
              if (y.parent !== this) return this.render(o, s, c);
              if (
                (y.render(
                  y._ts > 0
                    ? (v - y._start) * y._ts
                    : (y._dirty ? y.totalDuration() : y._tDur) +
                        (v - y._start) * y._ts,
                  s,
                  c
                ),
                v !== this._time || (!this._ts && !P))
              ) {
                (z = 0), S && (g += this._zTime = -1e-8);
                break;
              }
            }
            y = S;
          }
        else {
          y = this._last;
          for (var G = o < 0 ? o : v; y; ) {
            if (((S = y._prev), (y._act || G <= y._end) && y._ts && z !== y)) {
              if (y.parent !== this) return this.render(o, s, c);
              if (
                (y.render(
                  y._ts > 0
                    ? (G - y._start) * y._ts
                    : (y._dirty ? y.totalDuration() : y._tDur) +
                        (G - y._start) * y._ts,
                  s,
                  c || (un && (y._initted || y._startAt))
                ),
                v !== this._time || (!this._ts && !P))
              ) {
                (z = 0), S && (g += this._zTime = G ? -1e-8 : vn);
                break;
              }
            }
            y = S;
          }
        }
        if (
          z &&
          !s &&
          (this.pause(),
          (z.render(v >= f ? 0 : -1e-8)._zTime = v >= f ? 1 : -1),
          this._ts)
        )
          return (this._start = F), tc(this), this.render(o, s, c);
        this._onUpdate && !s && hr(this, 'onUpdate', !0),
          ((g === h && this._tTime >= this.totalDuration()) || (!g && f)) &&
            (F === this._start || Math.abs(I) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((o || !m) &&
                ((g === h && this._ts > 0) || (!g && this._ts < 0)) &&
                tl(this, 1),
              !s &&
                !(o < 0 && !f) &&
                (g || f || !h) &&
                (hr(
                  this,
                  g === h && o >= 0 ? 'onComplete' : 'onReverseComplete',
                  !0
                ),
                this._prom &&
                  !(g < h && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (r.add = function (o, s) {
      var c = this;
      if ((xi(s) || (s = Er(this, s, o)), !(o instanceof Ha))) {
        if (xn(o))
          return (
            o.forEach(function (f) {
              return c.add(f, s);
            }),
            this
          );
        if (tn(o)) return this.addLabel(o, s);
        if (Tt(o)) o = Ft.delayedCall(0, o);
        else return this;
      }
      return this !== o ? qr(this, o, s) : this;
    }),
    (r.getChildren = function (o, s, c, f) {
      o === void 0 && (o = !0),
        s === void 0 && (s = !0),
        c === void 0 && (c = !0),
        f === void 0 && (f = -1e8);
      for (var h = [], m = this._first; m; )
        m._start >= f &&
          (m instanceof Ft
            ? s && h.push(m)
            : (c && h.push(m), o && h.push.apply(h, m.getChildren(!0, s, c)))),
          (m = m._next);
      return h;
    }),
    (r.getById = function (o) {
      for (var s = this.getChildren(1, 1, 1), c = s.length; c--; )
        if (s[c].vars.id === o) return s[c];
    }),
    (r.remove = function (o) {
      return tn(o)
        ? this.removeLabel(o)
        : Tt(o)
          ? this.killTweensOf(o)
          : (o.parent === this && ec(this, o),
            o === this._recent && (this._recent = this._last),
            Rl(this));
    }),
    (r.totalTime = function (o, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = It(
              fr.time -
                (this._ts > 0
                  ? o / this._ts
                  : (this.totalDuration() - o) / -this._ts)
            )),
          a.prototype.totalTime.call(this, o, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (r.addLabel = function (o, s) {
      return (this.labels[o] = Er(this, s)), this;
    }),
    (r.removeLabel = function (o) {
      return delete this.labels[o], this;
    }),
    (r.addPause = function (o, s, c) {
      var f = Ft.delayedCall(0, s || $a, c);
      return (
        (f.data = 'isPause'), (this._hasPause = 1), qr(this, f, Er(this, o))
      );
    }),
    (r.removePause = function (o) {
      var s = this._first;
      for (o = Er(this, o); s; )
        s._start === o && s.data === 'isPause' && tl(s), (s = s._next);
    }),
    (r.killTweensOf = function (o, s, c) {
      for (var f = this.getTweensOf(o, c), h = f.length; h--; )
        Hi !== f[h] && f[h].kill(o, s);
      return this;
    }),
    (r.getTweensOf = function (o, s) {
      for (var c = [], f = Rr(o), h = this._first, m = xi(s), g; h; )
        h instanceof Ft
          ? ow(h._targets, f) &&
            (m
              ? (!Hi || (h._initted && h._ts)) &&
                h.globalTime(0) <= s &&
                h.globalTime(h.totalDuration()) > s
              : !s || h.isActive()) &&
            c.push(h)
          : (g = h.getTweensOf(f, s)).length && c.push.apply(c, g),
          (h = h._next);
      return c;
    }),
    (r.tweenTo = function (o, s) {
      s = s || {};
      var c = this,
        f = Er(c, o),
        h = s,
        m = h.startAt,
        g = h.onStart,
        x = h.onStartParams,
        v = h.immediateRender,
        y,
        S = Ft.to(
          c,
          gr(
            {
              ease: s.ease || 'none',
              lazy: !1,
              immediateRender: !1,
              time: f,
              overwrite: 'auto',
              duration:
                s.duration ||
                Math.abs(
                  (f - (m && 'time' in m ? m.time : c._time)) / c.timeScale()
                ) ||
                vn,
              onStart: function () {
                if ((c.pause(), !y)) {
                  var C =
                    s.duration ||
                    Math.abs(
                      (f - (m && 'time' in m ? m.time : c._time)) /
                        c.timeScale()
                    );
                  S._dur !== C && Ro(S, C, 0, 1).render(S._time, !0, !0),
                    (y = 1);
                }
                g && g.apply(S, x || []);
              },
            },
            s
          )
        );
      return v ? S.render(0) : S;
    }),
    (r.tweenFromTo = function (o, s, c) {
      return this.tweenTo(s, gr({startAt: {time: Er(this, o)}}, c));
    }),
    (r.recent = function () {
      return this._recent;
    }),
    (r.nextLabel = function (o) {
      return o === void 0 && (o = this._time), Lg(this, Er(this, o));
    }),
    (r.previousLabel = function (o) {
      return o === void 0 && (o = this._time), Lg(this, Er(this, o), 1);
    }),
    (r.currentLabel = function (o) {
      return arguments.length
        ? this.seek(o, !0)
        : this.previousLabel(this._time + vn);
    }),
    (r.shiftChildren = function (o, s, c) {
      c === void 0 && (c = 0);
      for (var f = this._first, h = this.labels, m; f; )
        f._start >= c && ((f._start += o), (f._end += o)), (f = f._next);
      if (s) for (m in h) h[m] >= c && (h[m] += o);
      return Rl(this);
    }),
    (r.invalidate = function (o) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(o), (s = s._next);
      return a.prototype.invalidate.call(this, o);
    }),
    (r.clear = function (o) {
      o === void 0 && (o = !0);
      for (var s = this._first, c; s; ) (c = s._next), this.remove(s), (s = c);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        o && (this.labels = {}),
        Rl(this)
      );
    }),
    (r.totalDuration = function (o) {
      var s = 0,
        c = this,
        f = c._last,
        h = ti,
        m,
        g,
        x;
      if (arguments.length)
        return c.timeScale(
          (c._repeat < 0 ? c.duration() : c.totalDuration()) /
            (c.reversed() ? -o : o)
        );
      if (c._dirty) {
        for (x = c.parent; f; )
          (m = f._prev),
            f._dirty && f.totalDuration(),
            (g = f._start),
            g > h && c._sort && f._ts && !c._lock
              ? ((c._lock = 1), (qr(c, f, g - f._delay, 1)._lock = 0))
              : (h = g),
            g < 0 &&
              f._ts &&
              ((s -= g),
              ((!x && !c._dp) || (x && x.smoothChildTiming)) &&
                ((c._start += g / c._ts), (c._time -= g), (c._tTime -= g)),
              c.shiftChildren(-g, !1, -1 / 0),
              (h = 0)),
            f._end > s && f._ts && (s = f._end),
            (f = m);
        Ro(c, c === St && c._time > s ? c._time : s, 1, 1), (c._dirty = 0);
      }
      return c._tDur;
    }),
    (n.updateRoot = function (o) {
      if ((St._ts && (W0(St, Uu(o, St)), (V0 = fr.frame)), fr.frame >= Rg)) {
        Rg += pr.autoSleep || 120;
        var s = St._first;
        if ((!s || !s._ts) && pr.autoSleep && fr._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || fr.sleep();
        }
      }
    }),
    n
  );
})(Ha);
gr(jn.prototype, {_lock: 0, _hasPause: 0, _forcing: 0});
var Dw = function (n, r, i, o, s, c, f) {
    var h = new Jn(this._pt, n, r, 0, 1, vy, null, s),
      m = 0,
      g = 0,
      x,
      v,
      y,
      S,
      w,
      C,
      P,
      z;
    for (
      h.b = i,
        h.e = o,
        i += '',
        o += '',
        (P = ~o.indexOf('random(')) && (o = Ba(o)),
        c && ((z = [i, o]), c(z, n, r), (i = z[0]), (o = z[1])),
        v = i.match(Xf) || [];
      (x = Xf.exec(o));

    )
      (S = x[0]),
        (w = o.substring(m, x.index)),
        y ? (y = (y + 1) % 5) : w.substr(-5) === 'rgba(' && (y = 1),
        S !== v[g++] &&
          ((C = parseFloat(v[g - 1]) || 0),
          (h._pt = {
            _next: h._pt,
            p: w || g === 1 ? w : ',',
            s: C,
            c: S.charAt(1) === '=' ? vo(C, S) - C : parseFloat(S) - C,
            m: y && y < 4 ? Math.round : 0,
          }),
          (m = Xf.lastIndex));
    return (
      (h.c = m < o.length ? o.substring(m, o.length) : ''),
      (h.fp = f),
      (A0.test(o) || P) && (h.e = 0),
      (this._pt = h),
      h
    );
  },
  fh = function (n, r, i, o, s, c, f, h, m, g) {
    Tt(o) && (o = o(s || 0, n, c));
    var x = n[r],
      v =
        i !== 'get'
          ? i
          : Tt(x)
            ? m
              ? n[
                  r.indexOf('set') || !Tt(n['get' + r.substr(3)])
                    ? r
                    : 'get' + r.substr(3)
                ](m)
              : n[r]()
            : x,
      y = Tt(x) ? (m ? jw : yy) : hh,
      S;
    if (
      (tn(o) &&
        (~o.indexOf('random(') && (o = Ba(o)),
        o.charAt(1) === '=' &&
          ((S = vo(v, o) + (yn(v) || 0)), (S || S === 0) && (o = S))),
      !g || v !== o || Td)
    )
      return !isNaN(v * o) && o !== ''
        ? ((S = new Jn(
            this._pt,
            n,
            r,
            +v || 0,
            o - (v || 0),
            typeof x == 'boolean' ? Fw : _y,
            0,
            y
          )),
          m && (S.fp = m),
          f && S.modifier(f, this, n),
          (this._pt = S))
        : (!x && !(r in n) && ah(r, o),
          Dw.call(this, n, r, v, o, y, h || pr.stringFilter, m));
  },
  Nw = function (n, r, i, o, s) {
    if (
      (Tt(n) && (n = Da(n, s, r, i, o)),
      !ii(n) || (n.style && n.nodeType) || xn(n) || F0(n))
    )
      return tn(n) ? Da(n, s, r, i, o) : n;
    var c = {},
      f;
    for (f in n) c[f] = Da(n[f], s, r, i, o);
    return c;
  },
  py = function (n, r, i, o, s, c) {
    var f, h, m, g;
    if (
      ur[n] &&
      (f = new ur[n]()).init(
        s,
        f.rawVars ? r[n] : Nw(r[n], o, s, c, i),
        i,
        o,
        c
      ) !== !1 &&
      ((i._pt = h = new Jn(i._pt, s, n, 0, 1, f.render, f, 0, f.priority)),
      i !== yo)
    )
      for (m = i._ptLookup[i._targets.indexOf(s)], g = f._props.length; g--; )
        m[f._props[g]] = h;
    return f;
  },
  Hi,
  Td,
  dh = function a(n, r, i) {
    var o = n.vars,
      s = o.ease,
      c = o.startAt,
      f = o.immediateRender,
      h = o.lazy,
      m = o.onUpdate,
      g = o.runBackwards,
      x = o.yoyoEase,
      v = o.keyframes,
      y = o.autoRevert,
      S = n._dur,
      w = n._startAt,
      C = n._targets,
      P = n.parent,
      z = P && P.data === 'nested' ? P.vars.targets : C,
      I = n._overwrite === 'auto' && !rh,
      F = n.timeline,
      k,
      $,
      U,
      H,
      X,
      G,
      me,
      le,
      Se,
      Pe,
      ge,
      Te,
      ue;
    if (
      (F && (!v || !s) && (s = 'none'),
      (n._ease = Dl(s, Co.ease)),
      (n._yEase = x ? cy(Dl(x === !0 ? s : x, Co.ease)) : 0),
      x &&
        n._yoyo &&
        !n._repeat &&
        ((x = n._yEase), (n._yEase = n._ease), (n._ease = x)),
      (n._from = !F && !!o.runBackwards),
      !F || (v && !o.stagger))
    ) {
      if (
        ((le = C[0] ? Pl(C[0]).harness : 0),
        (Te = le && o[le.prop]),
        (k = Au(o, sh)),
        w &&
          (w._zTime < 0 && w.progress(1),
          r < 0 && g && f && !y ? w.render(-1, !0) : w.revert(g && S ? Eu : iw),
          (w._lazy = 0)),
        c)
      ) {
        if (
          (tl(
            (n._startAt = Ft.set(
              C,
              gr(
                {
                  data: 'isStart',
                  overwrite: !1,
                  parent: P,
                  immediateRender: !0,
                  lazy: !w && Gn(h),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    m &&
                    function () {
                      return hr(n, 'onUpdate');
                    },
                  stagger: 0,
                },
                c
              )
            ))
          ),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          r < 0 && (un || (!f && !y)) && n._startAt.revert(Eu),
          f && S && r <= 0 && i <= 0)
        ) {
          r && (n._zTime = r);
          return;
        }
      } else if (g && S && !w) {
        if (
          (r && (f = !1),
          (U = gr(
            {
              overwrite: !1,
              data: 'isFromStart',
              lazy: f && !w && Gn(h),
              immediateRender: f,
              stagger: 0,
              parent: P,
            },
            k
          )),
          Te && (U[le.prop] = Te),
          tl((n._startAt = Ft.set(C, U))),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          r < 0 && (un ? n._startAt.revert(Eu) : n._startAt.render(-1, !0)),
          (n._zTime = r),
          !f)
        )
          a(n._startAt, vn, vn);
        else if (!r) return;
      }
      for (
        n._pt = n._ptCache = 0, h = (S && Gn(h)) || (h && !S), $ = 0;
        $ < C.length;
        $++
      ) {
        if (
          ((X = C[$]),
          (me = X._gsap || ch(C)[$]._gsap),
          (n._ptLookup[$] = Pe = {}),
          xd[me.id] && Gi.length && Iu(),
          (ge = z === C ? $ : z.indexOf(X)),
          le &&
            (Se = new le()).init(X, Te || k, n, ge, z) !== !1 &&
            ((n._pt = H =
              new Jn(n._pt, X, Se.name, 0, 1, Se.render, Se, 0, Se.priority)),
            Se._props.forEach(function (J) {
              Pe[J] = H;
            }),
            Se.priority && (G = 1)),
          !le || Te)
        )
          for (U in k)
            ur[U] && (Se = py(U, k, n, ge, X, z))
              ? Se.priority && (G = 1)
              : (Pe[U] = H =
                  fh.call(n, X, U, 'get', k[U], ge, z, 0, o.stringFilter));
        n._op && n._op[$] && n.kill(X, n._op[$]),
          I &&
            n._pt &&
            ((Hi = n),
            St.killTweensOf(X, Pe, n.globalTime(r)),
            (ue = !n.parent),
            (Hi = 0)),
          n._pt && h && (xd[me.id] = 1);
      }
      G && xy(n), n._onInit && n._onInit(n);
    }
    (n._onUpdate = m),
      (n._initted = (!n._op || n._pt) && !ue),
      v && r <= 0 && F.render(ti, !0, !0);
  },
  Mw = function (n, r, i, o, s, c, f, h) {
    var m = ((n._pt && n._ptCache) || (n._ptCache = {}))[r],
      g,
      x,
      v,
      y;
    if (!m)
      for (
        m = n._ptCache[r] = [], v = n._ptLookup, y = n._targets.length;
        y--;

      ) {
        if (((g = v[y][r]), g && g.d && g.d._pt))
          for (g = g.d._pt; g && g.p !== r && g.fp !== r; ) g = g._next;
        if (!g)
          return (
            (Td = 1),
            (n.vars[r] = '+=0'),
            dh(n, f),
            (Td = 0),
            h ? ba(r + ' not eligible for reset') : 1
          );
        m.push(g);
      }
    for (y = m.length; y--; )
      (x = m[y]),
        (g = x._pt || x),
        (g.s = (o || o === 0) && !s ? o : g.s + (o || 0) + c * g.c),
        (g.c = i - g.s),
        x.e && (x.e = Nt(i) + yn(x.e)),
        x.b && (x.b = g.s + yn(x.b));
  },
  Lw = function (n, r) {
    var i = n[0] ? Pl(n[0]).harness : 0,
      o = i && i.aliases,
      s,
      c,
      f,
      h;
    if (!o) return r;
    s = To({}, r);
    for (c in o)
      if (c in s) for (h = o[c].split(','), f = h.length; f--; ) s[h[f]] = s[c];
    return s;
  },
  Ow = function (n, r, i, o) {
    var s = r.ease || o || 'power1.inOut',
      c,
      f;
    if (xn(r))
      (f = i[n] || (i[n] = [])),
        r.forEach(function (h, m) {
          return f.push({t: (m / (r.length - 1)) * 100, v: h, e: s});
        });
    else
      for (c in r)
        (f = i[c] || (i[c] = [])),
          c === 'ease' || f.push({t: parseFloat(n), v: r[c], e: s});
  },
  Da = function (n, r, i, o, s) {
    return Tt(n)
      ? n.call(r, i, o, s)
      : tn(n) && ~n.indexOf('random(')
        ? Ba(n)
        : n;
  },
  my = uh + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
  gy = {};
qn(my + ',id,stagger,delay,duration,paused,scrollTrigger', function (a) {
  return (gy[a] = 1);
});
var Ft = (function (a) {
  j0(n, a);
  function n(i, o, s, c) {
    var f;
    typeof o == 'number' && ((s.duration = o), (o = s), (s = null)),
      (f = a.call(this, c ? o : Pa(o)) || this);
    var h = f.vars,
      m = h.duration,
      g = h.delay,
      x = h.immediateRender,
      v = h.stagger,
      y = h.overwrite,
      S = h.keyframes,
      w = h.defaults,
      C = h.scrollTrigger,
      P = h.yoyoEase,
      z = o.parent || St,
      I = (xn(i) || F0(i) ? xi(i[0]) : 'length' in o) ? [i] : Rr(i),
      F,
      k,
      $,
      U,
      H,
      X,
      G,
      me;
    if (
      ((f._targets = I.length
        ? ch(I)
        : ba(
            'GSAP target ' + i + ' not found. https://gsap.com',
            !pr.nullTargetWarn
          ) || []),
      (f._ptLookup = []),
      (f._overwrite = y),
      S || v || au(m) || au(g))
    ) {
      if (
        ((o = f.vars),
        (F = f.timeline =
          new jn({
            data: 'nested',
            defaults: w || {},
            targets: z && z.data === 'nested' ? z.vars.targets : I,
          })),
        F.kill(),
        (F.parent = F._dp = mi(f)),
        (F._start = 0),
        v || au(m) || au(g))
      ) {
        if (((U = I.length), (G = v && ey(v)), ii(v)))
          for (H in v) ~my.indexOf(H) && (me || (me = {}), (me[H] = v[H]));
        for (k = 0; k < U; k++)
          ($ = Au(o, gy)),
            ($.stagger = 0),
            P && ($.yoyoEase = P),
            me && To($, me),
            (X = I[k]),
            ($.duration = +Da(m, mi(f), k, X, I)),
            ($.delay = (+Da(g, mi(f), k, X, I) || 0) - f._delay),
            !v &&
              U === 1 &&
              $.delay &&
              ((f._delay = g = $.delay), (f._start += g), ($.delay = 0)),
            F.to(X, $, G ? G(k, X, I) : 0),
            (F._ease = Ke.none);
        F.duration() ? (m = g = 0) : (f.timeline = 0);
      } else if (S) {
        Pa(gr(F.vars.defaults, {ease: 'none'})),
          (F._ease = Dl(S.ease || o.ease || 'none'));
        var le = 0,
          Se,
          Pe,
          ge;
        if (xn(S))
          S.forEach(function (Te) {
            return F.to(I, Te, '>');
          }),
            F.duration();
        else {
          $ = {};
          for (H in S)
            H === 'ease' || H === 'easeEach' || Ow(H, S[H], $, S.easeEach);
          for (H in $)
            for (
              Se = $[H].sort(function (Te, ue) {
                return Te.t - ue.t;
              }),
                le = 0,
                k = 0;
              k < Se.length;
              k++
            )
              (Pe = Se[k]),
                (ge = {
                  ease: Pe.e,
                  duration: ((Pe.t - (k ? Se[k - 1].t : 0)) / 100) * m,
                }),
                (ge[H] = Pe.v),
                F.to(I, ge, le),
                (le += ge.duration);
          F.duration() < m && F.to({}, {duration: m - F.duration()});
        }
      }
      m || f.duration((m = F.duration()));
    } else f.timeline = 0;
    return (
      y === !0 && !rh && ((Hi = mi(f)), St.killTweensOf(I), (Hi = 0)),
      qr(z, mi(f), s),
      o.reversed && f.reverse(),
      o.paused && f.paused(!0),
      (x ||
        (!m &&
          !S &&
          f._start === It(z._time) &&
          Gn(x) &&
          cw(mi(f)) &&
          z.data !== 'nested')) &&
        ((f._tTime = -1e-8), f.render(Math.max(0, -g) || 0)),
      C && G0(mi(f), C),
      f
    );
  }
  var r = n.prototype;
  return (
    (r.render = function (o, s, c) {
      var f = this._time,
        h = this._tDur,
        m = this._dur,
        g = o < 0,
        x = o > h - vn && !g ? h : o < vn ? 0 : o,
        v,
        y,
        S,
        w,
        C,
        P,
        z,
        I,
        F;
      if (!m) dw(this, o, s, c);
      else if (
        x !== this._tTime ||
        !o ||
        c ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== g) ||
        this._lazy
      ) {
        if (((v = x), (I = this.timeline), this._repeat)) {
          if (((w = m + this._rDelay), this._repeat < -1 && g))
            return this.totalTime(w * 100 + o, s, c);
          if (
            ((v = It(x % w)),
            x === h
              ? ((S = this._repeat), (v = m))
              : ((C = It(x / w)),
                (S = ~~C),
                S && S === C ? ((v = m), S--) : v > m && (v = m)),
            (P = this._yoyo && S & 1),
            P && ((F = this._yEase), (v = m - v)),
            (C = Po(this._tTime, w)),
            v === f && !c && this._initted && S === C)
          )
            return (this._tTime = x), this;
          S !== C &&
            (I && this._yEase && fy(I, P),
            this.vars.repeatRefresh &&
              !P &&
              !this._lock &&
              v !== w &&
              this._initted &&
              ((this._lock = c = 1),
              (this.render(It(w * S), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (q0(this, g ? o : v, c, s, x)) return (this._tTime = 0), this;
          if (f !== this._time && !(c && this.vars.repeatRefresh && S !== C))
            return this;
          if (m !== this._dur) return this.render(o, s, c);
        }
        if (
          ((this._tTime = x),
          (this._time = v),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = z = (F || this._ease)(v / m)),
          this._from && (this.ratio = z = 1 - z),
          v && !f && !s && !S && (hr(this, 'onStart'), this._tTime !== x))
        )
          return this;
        for (y = this._pt; y; ) y.r(z, y.d), (y = y._next);
        (I && I.render(o < 0 ? o : I._dur * I._ease(v / this._dur), s, c)) ||
          (this._startAt && (this._zTime = o)),
          this._onUpdate &&
            !s &&
            (g && wd(this, o, s, c), hr(this, 'onUpdate')),
          this._repeat &&
            S !== C &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            hr(this, 'onRepeat'),
          (x === this._tDur || !x) &&
            this._tTime === x &&
            (g && !this._onUpdate && wd(this, o, !0, !0),
            (o || !m) &&
              ((x === this._tDur && this._ts > 0) || (!x && this._ts < 0)) &&
              tl(this, 1),
            !s &&
              !(g && !f) &&
              (x || f || P) &&
              (hr(this, x === h ? 'onComplete' : 'onReverseComplete', !0),
              this._prom && !(x < h && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (r.targets = function () {
      return this._targets;
    }),
    (r.invalidate = function (o) {
      return (
        (!o || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(o),
        a.prototype.invalidate.call(this, o)
      );
    }),
    (r.resetTo = function (o, s, c, f, h) {
      Va || fr.wake(), this._ts || this.play();
      var m = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        g;
      return (
        this._initted || dh(this, m),
        (g = this._ease(m / this._dur)),
        Mw(this, o, s, c, f, g, m, h)
          ? this.resetTo(o, s, c, f, 1)
          : (nc(this, 0),
            this.parent ||
              Q0(
                this._dp,
                this,
                '_first',
                '_last',
                this._dp._sort ? '_start' : 0
              ),
            this.render(0))
      );
    }),
    (r.kill = function (o, s) {
      if ((s === void 0 && (s = 'all'), !o && (!s || s === 'all')))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? xa(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!un),
          this
        );
      if (this.timeline) {
        var c = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(o, s, Hi && Hi.vars.overwrite !== !0)
            ._first || xa(this),
          this.parent &&
            c !== this.timeline.totalDuration() &&
            Ro(this, (this._dur * this.timeline._tDur) / c, 0, 1),
          this
        );
      }
      var f = this._targets,
        h = o ? Rr(o) : f,
        m = this._ptLookup,
        g = this._pt,
        x,
        v,
        y,
        S,
        w,
        C,
        P;
      if ((!s || s === 'all') && sw(f, h))
        return s === 'all' && (this._pt = 0), xa(this);
      for (
        x = this._op = this._op || [],
          s !== 'all' &&
            (tn(s) &&
              ((w = {}),
              qn(s, function (z) {
                return (w[z] = 1);
              }),
              (s = w)),
            (s = Lw(f, s))),
          P = f.length;
        P--;

      )
        if (~h.indexOf(f[P])) {
          (v = m[P]),
            s === 'all'
              ? ((x[P] = s), (S = v), (y = {}))
              : ((y = x[P] = x[P] || {}), (S = s));
          for (w in S)
            (C = v && v[w]),
              C &&
                ((!('kill' in C.d) || C.d.kill(w) === !0) && ec(this, C, '_pt'),
                delete v[w]),
              y !== 'all' && (y[w] = 1);
        }
      return this._initted && !this._pt && g && xa(this), this;
    }),
    (n.to = function (o, s) {
      return new n(o, s, arguments[2]);
    }),
    (n.from = function (o, s) {
      return Ra(1, arguments);
    }),
    (n.delayedCall = function (o, s, c, f) {
      return new n(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: o,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: c,
        onReverseCompleteParams: c,
        callbackScope: f,
      });
    }),
    (n.fromTo = function (o, s, c) {
      return Ra(2, arguments);
    }),
    (n.set = function (o, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new n(o, s);
    }),
    (n.killTweensOf = function (o, s, c) {
      return St.killTweensOf(o, s, c);
    }),
    n
  );
})(Ha);
gr(Ft.prototype, {_targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0});
qn('staggerTo,staggerFrom,staggerFromTo', function (a) {
  Ft[a] = function () {
    var n = new jn(),
      r = kd.call(arguments, 0);
    return r.splice(a === 'staggerFromTo' ? 5 : 4, 0, 0), n[a].apply(n, r);
  };
});
var hh = function (n, r, i) {
    return (n[r] = i);
  },
  yy = function (n, r, i) {
    return n[r](i);
  },
  jw = function (n, r, i, o) {
    return n[r](o.fp, i);
  },
  zw = function (n, r, i) {
    return n.setAttribute(r, i);
  },
  ph = function (n, r) {
    return Tt(n[r]) ? yy : ih(n[r]) && n.setAttribute ? zw : hh;
  },
  _y = function (n, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * n) * 1e6) / 1e6, r);
  },
  Fw = function (n, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * n), r);
  },
  vy = function (n, r) {
    var i = r._pt,
      o = '';
    if (!n && r.b) o = r.b;
    else if (n === 1 && r.e) o = r.e;
    else {
      for (; i; )
        (o =
          i.p +
          (i.m ? i.m(i.s + i.c * n) : Math.round((i.s + i.c * n) * 1e4) / 1e4) +
          o),
          (i = i._next);
      o += r.c;
    }
    r.set(r.t, r.p, o, r);
  },
  mh = function (n, r) {
    for (var i = r._pt; i; ) i.r(n, i.d), (i = i._next);
  },
  Iw = function (n, r, i, o) {
    for (var s = this._pt, c; s; )
      (c = s._next), s.p === o && s.modifier(n, r, i), (s = c);
  },
  Aw = function (n) {
    for (var r = this._pt, i, o; r; )
      (o = r._next),
        (r.p === n && !r.op) || r.op === n
          ? ec(this, r, '_pt')
          : r.dep || (i = 1),
        (r = o);
    return !i;
  },
  Uw = function (n, r, i, o) {
    o.mSet(n, r, o.m.call(o.tween, i, o.mt), o);
  },
  xy = function (n) {
    for (var r = n._pt, i, o, s, c; r; ) {
      for (i = r._next, o = s; o && o.pr > r.pr; ) o = o._next;
      (r._prev = o ? o._prev : c) ? (r._prev._next = r) : (s = r),
        (r._next = o) ? (o._prev = r) : (c = r),
        (r = i);
    }
    n._pt = s;
  },
  Jn = (function () {
    function a(r, i, o, s, c, f, h, m, g) {
      (this.t = i),
        (this.s = s),
        (this.c = c),
        (this.p = o),
        (this.r = f || _y),
        (this.d = h || this),
        (this.set = m || hh),
        (this.pr = g || 0),
        (this._next = r),
        r && (r._prev = this);
    }
    var n = a.prototype;
    return (
      (n.modifier = function (i, o, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = Uw),
          (this.m = i),
          (this.mt = s),
          (this.tween = o);
      }),
      a
    );
  })();
qn(
  uh +
    'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
  function (a) {
    return (sh[a] = 1);
  }
);
mr.TweenMax = mr.TweenLite = Ft;
mr.TimelineLite = mr.TimelineMax = jn;
St = new jn({
  sortChildren: !1,
  defaults: Co,
  autoRemoveChildren: !0,
  id: 'root',
  smoothChildTiming: !0,
});
pr.stringFilter = uy;
var Nl = [],
  Tu = {},
  bw = [],
  jg = 0,
  $w = 0,
  Jf = function (n) {
    return (Tu[n] || bw).map(function (r) {
      return r();
    });
  },
  Pd = function () {
    var n = Date.now(),
      r = [];
    n - jg > 2 &&
      (Jf('matchMediaInit'),
      Nl.forEach(function (i) {
        var o = i.queries,
          s = i.conditions,
          c,
          f,
          h,
          m;
        for (f in o)
          (c = Kr.matchMedia(o[f]).matches),
            c && (h = 1),
            c !== s[f] && ((s[f] = c), (m = 1));
        m && (i.revert(), h && r.push(i));
      }),
      Jf('matchMediaRevert'),
      r.forEach(function (i) {
        return i.onMatch(i, function (o) {
          return i.add(null, o);
        });
      }),
      (jg = n),
      Jf('matchMedia'));
  },
  wy = (function () {
    function a(r, i) {
      (this.selector = i && Ed(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = $w++),
        r && this.add(r);
    }
    var n = a.prototype;
    return (
      (n.add = function (i, o, s) {
        Tt(i) && ((s = o), (o = i), (i = Tt));
        var c = this,
          f = function () {
            var m = gt,
              g = c.selector,
              x;
            return (
              m && m !== c && m.data.push(c),
              s && (c.selector = Ed(s)),
              (gt = c),
              (x = o.apply(c, arguments)),
              Tt(x) && c._r.push(x),
              (gt = m),
              (c.selector = g),
              (c.isReverted = !1),
              x
            );
          };
        return (
          (c.last = f),
          i === Tt
            ? f(c, function (h) {
                return c.add(null, h);
              })
            : i
              ? (c[i] = f)
              : f
        );
      }),
      (n.ignore = function (i) {
        var o = gt;
        (gt = null), i(this), (gt = o);
      }),
      (n.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (o) {
            return o instanceof a
              ? i.push.apply(i, o.getTweens())
              : o instanceof Ft &&
                  !(o.parent && o.parent.data === 'nested') &&
                  i.push(o);
          }),
          i
        );
      }),
      (n.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (n.kill = function (i, o) {
        var s = this;
        if (
          (i
            ? (function () {
                for (var f = s.getTweens(), h = s.data.length, m; h--; )
                  (m = s.data[h]),
                    m.data === 'isFlip' &&
                      (m.revert(),
                      m.getChildren(!0, !0, !1).forEach(function (g) {
                        return f.splice(f.indexOf(g), 1);
                      }));
                for (
                  f
                    .map(function (g) {
                      return {
                        g:
                          g._dur ||
                          g._delay ||
                          (g._sat && !g._sat.vars.immediateRender)
                            ? g.globalTime(0)
                            : -1 / 0,
                        t: g,
                      };
                    })
                    .sort(function (g, x) {
                      return x.g - g.g || -1 / 0;
                    })
                    .forEach(function (g) {
                      return g.t.revert(i);
                    }),
                    h = s.data.length;
                  h--;

                )
                  (m = s.data[h]),
                    m instanceof jn
                      ? m.data !== 'nested' &&
                        (m.scrollTrigger && m.scrollTrigger.revert(), m.kill())
                      : !(m instanceof Ft) && m.revert && m.revert(i);
                s._r.forEach(function (g) {
                  return g(i, s);
                }),
                  (s.isReverted = !0);
              })()
            : this.data.forEach(function (f) {
                return f.kill && f.kill();
              }),
          this.clear(),
          o)
        )
          for (var c = Nl.length; c--; )
            Nl[c].id === this.id && Nl.splice(c, 1);
      }),
      (n.revert = function (i) {
        this.kill(i || {});
      }),
      a
    );
  })(),
  Bw = (function () {
    function a(r) {
      (this.contexts = []), (this.scope = r), gt && gt.data.push(this);
    }
    var n = a.prototype;
    return (
      (n.add = function (i, o, s) {
        ii(i) || (i = {matches: i});
        var c = new wy(0, s || this.scope),
          f = (c.conditions = {}),
          h,
          m,
          g;
        gt && !c.selector && (c.selector = gt.selector),
          this.contexts.push(c),
          (o = c.add('onMatch', o)),
          (c.queries = i);
        for (m in i)
          m === 'all'
            ? (g = 1)
            : ((h = Kr.matchMedia(i[m])),
              h &&
                (Nl.indexOf(c) < 0 && Nl.push(c),
                (f[m] = h.matches) && (g = 1),
                h.addListener
                  ? h.addListener(Pd)
                  : h.addEventListener('change', Pd)));
        return (
          g &&
            o(c, function (x) {
              return c.add(null, x);
            }),
          this
        );
      }),
      (n.revert = function (i) {
        this.kill(i || {});
      }),
      (n.kill = function (i) {
        this.contexts.forEach(function (o) {
          return o.kill(i, !0);
        });
      }),
      a
    );
  })(),
  bu = {
    registerPlugin: function () {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      r.forEach(function (o) {
        return oy(o);
      });
    },
    timeline: function (n) {
      return new jn(n);
    },
    getTweensOf: function (n, r) {
      return St.getTweensOf(n, r);
    },
    getProperty: function (n, r, i, o) {
      tn(n) && (n = Rr(n)[0]);
      var s = Pl(n || {}).get,
        c = i ? X0 : Y0;
      return (
        i === 'native' && (i = ''),
        n &&
          (r
            ? c(((ur[r] && ur[r].get) || s)(n, r, i, o))
            : function (f, h, m) {
                return c(((ur[f] && ur[f].get) || s)(n, f, h, m));
              })
      );
    },
    quickSetter: function (n, r, i) {
      if (((n = Rr(n)), n.length > 1)) {
        var o = n.map(function (g) {
            return er.quickSetter(g, r, i);
          }),
          s = o.length;
        return function (g) {
          for (var x = s; x--; ) o[x](g);
        };
      }
      n = n[0] || {};
      var c = ur[r],
        f = Pl(n),
        h = (f.harness && (f.harness.aliases || {})[r]) || r,
        m = c
          ? function (g) {
              var x = new c();
              (yo._pt = 0),
                x.init(n, i ? g + i : g, yo, 0, [n]),
                x.render(1, x),
                yo._pt && mh(1, yo);
            }
          : f.set(n, h);
      return c
        ? m
        : function (g) {
            return m(n, h, i ? g + i : g, f, 1);
          };
    },
    quickTo: function (n, r, i) {
      var o,
        s = er.to(
          n,
          gr(
            ((o = {}), (o[r] = '+=0.1'), (o.paused = !0), (o.stagger = 0), o),
            i || {}
          )
        ),
        c = function (h, m, g) {
          return s.resetTo(r, h, m, g);
        };
      return (c.tween = s), c;
    },
    isTweening: function (n) {
      return St.getTweensOf(n, !0).length > 0;
    },
    defaults: function (n) {
      return n && n.ease && (n.ease = Dl(n.ease, Co.ease)), Dg(Co, n || {});
    },
    config: function (n) {
      return Dg(pr, n || {});
    },
    registerEffect: function (n) {
      var r = n.name,
        i = n.effect,
        o = n.plugins,
        s = n.defaults,
        c = n.extendTimeline;
      (o || '').split(',').forEach(function (f) {
        return (
          f && !ur[f] && !mr[f] && ba(r + ' effect requires ' + f + ' plugin.')
        );
      }),
        (Qf[r] = function (f, h, m) {
          return i(Rr(f), gr(h || {}, s), m);
        }),
        c &&
          (jn.prototype[r] = function (f, h, m) {
            return this.add(Qf[r](f, ii(h) ? h : (m = h) && {}, this), m);
          });
    },
    registerEase: function (n, r) {
      Ke[n] = Dl(r);
    },
    parseEase: function (n, r) {
      return arguments.length ? Dl(n, r) : Ke;
    },
    getById: function (n) {
      return St.getById(n);
    },
    exportRoot: function (n, r) {
      n === void 0 && (n = {});
      var i = new jn(n),
        o,
        s;
      for (
        i.smoothChildTiming = Gn(n.smoothChildTiming),
          St.remove(i),
          i._dp = 0,
          i._time = i._tTime = St._time,
          o = St._first;
        o;

      )
        (s = o._next),
          (r ||
            !(
              !o._dur &&
              o instanceof Ft &&
              o.vars.onComplete === o._targets[0]
            )) &&
            qr(i, o, o._start - o._delay),
          (o = s);
      return qr(St, i, 0), i;
    },
    context: function (n, r) {
      return n ? new wy(n, r) : gt;
    },
    matchMedia: function (n) {
      return new Bw(n);
    },
    matchMediaRefresh: function () {
      return (
        Nl.forEach(function (n) {
          var r = n.conditions,
            i,
            o;
          for (o in r) r[o] && ((r[o] = !1), (i = 1));
          i && n.revert();
        }) || Pd()
      );
    },
    addEventListener: function (n, r) {
      var i = Tu[n] || (Tu[n] = []);
      ~i.indexOf(r) || i.push(r);
    },
    removeEventListener: function (n, r) {
      var i = Tu[n],
        o = i && i.indexOf(r);
      o >= 0 && i.splice(o, 1);
    },
    utils: {
      wrap: xw,
      wrapYoyo: ww,
      distribute: ey,
      random: ny,
      snap: ty,
      normalize: vw,
      getUnit: yn,
      clamp: mw,
      splitColor: ay,
      toArray: Rr,
      selector: Ed,
      mapRange: iy,
      pipe: yw,
      unitize: _w,
      interpolate: Sw,
      shuffle: Z0,
    },
    install: $0,
    effects: Qf,
    ticker: fr,
    updateRoot: jn.updateRoot,
    plugins: ur,
    globalTimeline: St,
    core: {
      PropTween: Jn,
      globals: B0,
      Tween: Ft,
      Timeline: jn,
      Animation: Ha,
      getCache: Pl,
      _removeLinkedListItem: ec,
      reverting: function () {
        return un;
      },
      context: function (n) {
        return n && gt && (gt.data.push(n), (n._ctx = gt)), gt;
      },
      suppressOverwrites: function (n) {
        return (rh = n);
      },
    },
  };
qn('to,from,fromTo,delayedCall,set,killTweensOf', function (a) {
  return (bu[a] = Ft[a]);
});
fr.add(jn.updateRoot);
yo = bu.to({}, {duration: 0});
var Vw = function (n, r) {
    for (var i = n._pt; i && i.p !== r && i.op !== r && i.fp !== r; )
      i = i._next;
    return i;
  },
  Hw = function (n, r) {
    var i = n._targets,
      o,
      s,
      c;
    for (o in r)
      for (s = i.length; s--; )
        (c = n._ptLookup[s][o]),
          c &&
            (c = c.d) &&
            (c._pt && (c = Vw(c, o)),
            c && c.modifier && c.modifier(r[o], n, i[s], o));
  },
  Zf = function (n, r) {
    return {
      name: n,
      rawVars: 1,
      init: function (o, s, c) {
        c._onInit = function (f) {
          var h, m;
          if (
            (tn(s) &&
              ((h = {}),
              qn(s, function (g) {
                return (h[g] = 1);
              }),
              (s = h)),
            r)
          ) {
            h = {};
            for (m in s) h[m] = r(s[m]);
            s = h;
          }
          Hw(f, s);
        };
      },
    };
  },
  er =
    bu.registerPlugin(
      {
        name: 'attr',
        init: function (n, r, i, o, s) {
          var c, f, h;
          this.tween = i;
          for (c in r)
            (h = n.getAttribute(c) || ''),
              (f = this.add(
                n,
                'setAttribute',
                (h || 0) + '',
                r[c],
                o,
                s,
                0,
                0,
                c
              )),
              (f.op = c),
              (f.b = h),
              this._props.push(c);
        },
        render: function (n, r) {
          for (var i = r._pt; i; )
            un ? i.set(i.t, i.p, i.b, i) : i.r(n, i.d), (i = i._next);
        },
      },
      {
        name: 'endArray',
        init: function (n, r) {
          for (var i = r.length; i--; )
            this.add(n, i, n[i] || 0, r[i], 0, 0, 0, 0, 0, 1);
        },
      },
      Zf('roundProps', Cd),
      Zf('modifiers'),
      Zf('snap', ty)
    ) || bu;
Ft.version = jn.version = er.version = '3.12.7';
b0 = 1;
lh() && Do();
Ke.Power0;
Ke.Power1;
Ke.Power2;
Ke.Power3;
Ke.Power4;
Ke.Linear;
Ke.Quad;
Ke.Cubic;
Ke.Quart;
Ke.Quint;
Ke.Strong;
Ke.Elastic;
Ke.Back;
Ke.SteppedEase;
Ke.Bounce;
Ke.Sine;
Ke.Expo;
Ke.Circ;
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var zg,
  Wi,
  xo,
  gh,
  Cl,
  Fg,
  yh,
  Ww = function () {
    return typeof window < 'u';
  },
  wi = {},
  xl = 180 / Math.PI,
  wo = Math.PI / 180,
  co = Math.atan2,
  Ig = 1e8,
  _h = /([A-Z])/g,
  Yw = /(left|right|width|margin|padding|x)/i,
  Xw = /[\s,\(]\S/,
  Jr = {
    autoAlpha: 'opacity,visibility',
    scale: 'scaleX,scaleY',
    alpha: 'opacity',
  },
  Rd = function (n, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u, r);
  },
  Qw = function (n, r) {
    return r.set(
      r.t,
      r.p,
      n === 1 ? r.e : Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u,
      r
    );
  },
  Kw = function (n, r) {
    return r.set(
      r.t,
      r.p,
      n ? Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u : r.b,
      r
    );
  },
  Gw = function (n, r) {
    var i = r.s + r.c * n;
    r.set(r.t, r.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + r.u, r);
  },
  Sy = function (n, r) {
    return r.set(r.t, r.p, n ? r.e : r.b, r);
  },
  ky = function (n, r) {
    return r.set(r.t, r.p, n !== 1 ? r.b : r.e, r);
  },
  qw = function (n, r, i) {
    return (n.style[r] = i);
  },
  Jw = function (n, r, i) {
    return n.style.setProperty(r, i);
  },
  Zw = function (n, r, i) {
    return (n._gsap[r] = i);
  },
  eS = function (n, r, i) {
    return (n._gsap.scaleX = n._gsap.scaleY = i);
  },
  tS = function (n, r, i, o, s) {
    var c = n._gsap;
    (c.scaleX = c.scaleY = i), c.renderTransform(s, c);
  },
  nS = function (n, r, i, o, s) {
    var c = n._gsap;
    (c[r] = i), c.renderTransform(s, c);
  },
  kt = 'transform',
  Zn = kt + 'Origin',
  rS = function a(n, r) {
    var i = this,
      o = this.target,
      s = o.style,
      c = o._gsap;
    if (n in wi && s) {
      if (((this.tfm = this.tfm || {}), n !== 'transform'))
        (n = Jr[n] || n),
          ~n.indexOf(',')
            ? n.split(',').forEach(function (f) {
                return (i.tfm[f] = gi(o, f));
              })
            : (this.tfm[n] = c.x ? c[n] : gi(o, n)),
          n === Zn && (this.tfm.zOrigin = c.zOrigin);
      else
        return Jr.transform.split(',').forEach(function (f) {
          return a.call(i, f, r);
        });
      if (this.props.indexOf(kt) >= 0) return;
      c.svg &&
        ((this.svgo = o.getAttribute('data-svg-origin')),
        this.props.push(Zn, r, '')),
        (n = kt);
    }
    (s || r) && this.props.push(n, r, s[n]);
  },
  Ey = function (n) {
    n.translate &&
      (n.removeProperty('translate'),
      n.removeProperty('scale'),
      n.removeProperty('rotate'));
  },
  iS = function () {
    var n = this.props,
      r = this.target,
      i = r.style,
      o = r._gsap,
      s,
      c;
    for (s = 0; s < n.length; s += 3)
      n[s + 1]
        ? n[s + 1] === 2
          ? r[n[s]](n[s + 2])
          : (r[n[s]] = n[s + 2])
        : n[s + 2]
          ? (i[n[s]] = n[s + 2])
          : i.removeProperty(
              n[s].substr(0, 2) === '--'
                ? n[s]
                : n[s].replace(_h, '-$1').toLowerCase()
            );
    if (this.tfm) {
      for (c in this.tfm) o[c] = this.tfm[c];
      o.svg &&
        (o.renderTransform(),
        r.setAttribute('data-svg-origin', this.svgo || '')),
        (s = yh()),
        (!s || !s.isStart) &&
          !i[kt] &&
          (Ey(i),
          o.zOrigin &&
            i[Zn] &&
            ((i[Zn] += ' ' + o.zOrigin + 'px'),
            (o.zOrigin = 0),
            o.renderTransform()),
          (o.uncache = 1));
    }
  },
  Cy = function (n, r) {
    var i = {target: n, props: [], revert: iS, save: rS};
    return (
      n._gsap || er.core.getCache(n),
      r &&
        n.style &&
        n.nodeType &&
        r.split(',').forEach(function (o) {
          return i.save(o);
        }),
      i
    );
  },
  Ty,
  Dd = function (n, r) {
    var i = Wi.createElementNS
      ? Wi.createElementNS(
          (r || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
          n
        )
      : Wi.createElement(n);
    return i && i.style ? i : Wi.createElement(n);
  },
  ni = function a(n, r, i) {
    var o = getComputedStyle(n);
    return (
      o[r] ||
      o.getPropertyValue(r.replace(_h, '-$1').toLowerCase()) ||
      o.getPropertyValue(r) ||
      (!i && a(n, No(r) || r, 1)) ||
      ''
    );
  },
  Ag = 'O,Moz,ms,Ms,Webkit'.split(','),
  No = function (n, r, i) {
    var o = r || Cl,
      s = o.style,
      c = 5;
    if (n in s && !i) return n;
    for (
      n = n.charAt(0).toUpperCase() + n.substr(1);
      c-- && !(Ag[c] + n in s);

    );
    return c < 0 ? null : (c === 3 ? 'ms' : c >= 0 ? Ag[c] : '') + n;
  },
  Nd = function () {
    Ww() &&
      window.document &&
      ((zg = window),
      (Wi = zg.document),
      (xo = Wi.documentElement),
      (Cl = Dd('div') || {style: {}}),
      Dd('div'),
      (kt = No(kt)),
      (Zn = kt + 'Origin'),
      (Cl.style.cssText =
        'border-width:0;line-height:0;position:absolute;padding:0'),
      (Ty = !!No('perspective')),
      (yh = er.core.reverting),
      (gh = 1));
  },
  Ug = function (n) {
    var r = n.ownerSVGElement,
      i = Dd(
        'svg',
        (r && r.getAttribute('xmlns')) || 'http://www.w3.org/2000/svg'
      ),
      o = n.cloneNode(!0),
      s;
    (o.style.display = 'block'), i.appendChild(o), xo.appendChild(i);
    try {
      s = o.getBBox();
    } catch {}
    return i.removeChild(o), xo.removeChild(i), s;
  },
  bg = function (n, r) {
    for (var i = r.length; i--; )
      if (n.hasAttribute(r[i])) return n.getAttribute(r[i]);
  },
  Py = function (n) {
    var r, i;
    try {
      r = n.getBBox();
    } catch {
      (r = Ug(n)), (i = 1);
    }
    return (
      (r && (r.width || r.height)) || i || (r = Ug(n)),
      r && !r.width && !r.x && !r.y
        ? {
            x: +bg(n, ['x', 'cx', 'x1']) || 0,
            y: +bg(n, ['y', 'cy', 'y1']) || 0,
            width: 0,
            height: 0,
          }
        : r
    );
  },
  Ry = function (n) {
    return !!(n.getCTM && (!n.parentNode || n.ownerSVGElement) && Py(n));
  },
  jl = function (n, r) {
    if (r) {
      var i = n.style,
        o;
      r in wi && r !== Zn && (r = kt),
        i.removeProperty
          ? ((o = r.substr(0, 2)),
            (o === 'ms' || r.substr(0, 6) === 'webkit') && (r = '-' + r),
            i.removeProperty(
              o === '--' ? r : r.replace(_h, '-$1').toLowerCase()
            ))
          : i.removeAttribute(r);
    }
  },
  Yi = function (n, r, i, o, s, c) {
    var f = new Jn(n._pt, r, i, 0, 1, c ? ky : Sy);
    return (n._pt = f), (f.b = o), (f.e = s), n._props.push(i), f;
  },
  $g = {deg: 1, rad: 1, turn: 1},
  lS = {grid: 1, flex: 1},
  nl = function a(n, r, i, o) {
    var s = parseFloat(i) || 0,
      c = (i + '').trim().substr((s + '').length) || 'px',
      f = Cl.style,
      h = Yw.test(r),
      m = n.tagName.toLowerCase() === 'svg',
      g = (m ? 'client' : 'offset') + (h ? 'Width' : 'Height'),
      x = 100,
      v = o === 'px',
      y = o === '%',
      S,
      w,
      C,
      P;
    if (o === c || !s || $g[o] || $g[c]) return s;
    if (
      (c !== 'px' && !v && (s = a(n, r, i, 'px')),
      (P = n.getCTM && Ry(n)),
      (y || c === '%') && (wi[r] || ~r.indexOf('adius')))
    )
      return (
        (S = P ? n.getBBox()[h ? 'width' : 'height'] : n[g]),
        Nt(y ? (s / S) * x : (s / 100) * S)
      );
    if (
      ((f[h ? 'width' : 'height'] = x + (v ? c : o)),
      (w =
        (o !== 'rem' && ~r.indexOf('adius')) ||
        (o === 'em' && n.appendChild && !m)
          ? n
          : n.parentNode),
      P && (w = (n.ownerSVGElement || {}).parentNode),
      (!w || w === Wi || !w.appendChild) && (w = Wi.body),
      (C = w._gsap),
      C && y && C.width && h && C.time === fr.time && !C.uncache)
    )
      return Nt((s / C.width) * x);
    if (y && (r === 'height' || r === 'width')) {
      var z = n.style[r];
      (n.style[r] = x + o), (S = n[g]), z ? (n.style[r] = z) : jl(n, r);
    } else
      (y || c === '%') &&
        !lS[ni(w, 'display')] &&
        (f.position = ni(n, 'position')),
        w === n && (f.position = 'static'),
        w.appendChild(Cl),
        (S = Cl[g]),
        w.removeChild(Cl),
        (f.position = 'absolute');
    return (
      h && y && ((C = Pl(w)), (C.time = fr.time), (C.width = w[g])),
      Nt(v ? (S * s) / x : S && s ? (x / S) * s : 0)
    );
  },
  gi = function (n, r, i, o) {
    var s;
    return (
      gh || Nd(),
      r in Jr &&
        r !== 'transform' &&
        ((r = Jr[r]), ~r.indexOf(',') && (r = r.split(',')[0])),
      wi[r] && r !== 'transform'
        ? ((s = Ya(n, o)),
          (s =
            r !== 'transformOrigin'
              ? s[r]
              : s.svg
                ? s.origin
                : Bu(ni(n, Zn)) + ' ' + s.zOrigin + 'px'))
        : ((s = n.style[r]),
          (!s || s === 'auto' || o || ~(s + '').indexOf('calc(')) &&
            (s =
              ($u[r] && $u[r](n, r, i)) ||
              ni(n, r) ||
              H0(n, r) ||
              (r === 'opacity' ? 1 : 0))),
      i && !~(s + '').trim().indexOf(' ') ? nl(n, r, s, i) + i : s
    );
  },
  oS = function (n, r, i, o) {
    if (!i || i === 'none') {
      var s = No(r, n, 1),
        c = s && ni(n, s, 1);
      c && c !== i
        ? ((r = s), (i = c))
        : r === 'borderColor' && (i = ni(n, 'borderTopColor'));
    }
    var f = new Jn(this._pt, n.style, r, 0, 1, vy),
      h = 0,
      m = 0,
      g,
      x,
      v,
      y,
      S,
      w,
      C,
      P,
      z,
      I,
      F,
      k;
    if (
      ((f.b = i),
      (f.e = o),
      (i += ''),
      (o += ''),
      o === 'auto' &&
        ((w = n.style[r]),
        (n.style[r] = o),
        (o = ni(n, r) || o),
        w ? (n.style[r] = w) : jl(n, r)),
      (g = [i, o]),
      uy(g),
      (i = g[0]),
      (o = g[1]),
      (v = i.match(go) || []),
      (k = o.match(go) || []),
      k.length)
    ) {
      for (; (x = go.exec(o)); )
        (C = x[0]),
          (z = o.substring(h, x.index)),
          S
            ? (S = (S + 1) % 5)
            : (z.substr(-5) === 'rgba(' || z.substr(-5) === 'hsla(') && (S = 1),
          C !== (w = v[m++] || '') &&
            ((y = parseFloat(w) || 0),
            (F = w.substr((y + '').length)),
            C.charAt(1) === '=' && (C = vo(y, C) + F),
            (P = parseFloat(C)),
            (I = C.substr((P + '').length)),
            (h = go.lastIndex - I.length),
            I ||
              ((I = I || pr.units[r] || F),
              h === o.length && ((o += I), (f.e += I))),
            F !== I && (y = nl(n, r, w, I) || 0),
            (f._pt = {
              _next: f._pt,
              p: z || m === 1 ? z : ',',
              s: y,
              c: P - y,
              m: (S && S < 4) || r === 'zIndex' ? Math.round : 0,
            }));
      f.c = h < o.length ? o.substring(h, o.length) : '';
    } else f.r = r === 'display' && o === 'none' ? ky : Sy;
    return A0.test(o) && (f.e = 0), (this._pt = f), f;
  },
  Bg = {top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%'},
  aS = function (n) {
    var r = n.split(' '),
      i = r[0],
      o = r[1] || '50%';
    return (
      (i === 'top' || i === 'bottom' || o === 'left' || o === 'right') &&
        ((n = i), (i = o), (o = n)),
      (r[0] = Bg[i] || i),
      (r[1] = Bg[o] || o),
      r.join(' ')
    );
  },
  sS = function (n, r) {
    if (r.tween && r.tween._time === r.tween._dur) {
      var i = r.t,
        o = i.style,
        s = r.u,
        c = i._gsap,
        f,
        h,
        m;
      if (s === 'all' || s === !0) (o.cssText = ''), (h = 1);
      else
        for (s = s.split(','), m = s.length; --m > -1; )
          (f = s[m]),
            wi[f] && ((h = 1), (f = f === 'transformOrigin' ? Zn : kt)),
            jl(i, f);
      h &&
        (jl(i, kt),
        c &&
          (c.svg && i.removeAttribute('transform'),
          (o.scale = o.rotate = o.translate = 'none'),
          Ya(i, 1),
          (c.uncache = 1),
          Ey(o)));
    }
  },
  $u = {
    clearProps: function (n, r, i, o, s) {
      if (s.data !== 'isFromStart') {
        var c = (n._pt = new Jn(n._pt, r, i, 0, 0, sS));
        return (c.u = o), (c.pr = -10), (c.tween = s), n._props.push(i), 1;
      }
    },
  },
  Wa = [1, 0, 0, 1, 0, 0],
  Dy = {},
  Ny = function (n) {
    return n === 'matrix(1, 0, 0, 1, 0, 0)' || n === 'none' || !n;
  },
  Vg = function (n) {
    var r = ni(n, kt);
    return Ny(r) ? Wa : r.substr(7).match(I0).map(Nt);
  },
  vh = function (n, r) {
    var i = n._gsap || Pl(n),
      o = n.style,
      s = Vg(n),
      c,
      f,
      h,
      m;
    return i.svg && n.getAttribute('transform')
      ? ((h = n.transform.baseVal.consolidate().matrix),
        (s = [h.a, h.b, h.c, h.d, h.e, h.f]),
        s.join(',') === '1,0,0,1,0,0' ? Wa : s)
      : (s === Wa &&
          !n.offsetParent &&
          n !== xo &&
          !i.svg &&
          ((h = o.display),
          (o.display = 'block'),
          (c = n.parentNode),
          (!c || (!n.offsetParent && !n.getBoundingClientRect().width)) &&
            ((m = 1), (f = n.nextElementSibling), xo.appendChild(n)),
          (s = Vg(n)),
          h ? (o.display = h) : jl(n, 'display'),
          m &&
            (f
              ? c.insertBefore(n, f)
              : c
                ? c.appendChild(n)
                : xo.removeChild(n))),
        r && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  Md = function (n, r, i, o, s, c) {
    var f = n._gsap,
      h = s || vh(n, !0),
      m = f.xOrigin || 0,
      g = f.yOrigin || 0,
      x = f.xOffset || 0,
      v = f.yOffset || 0,
      y = h[0],
      S = h[1],
      w = h[2],
      C = h[3],
      P = h[4],
      z = h[5],
      I = r.split(' '),
      F = parseFloat(I[0]) || 0,
      k = parseFloat(I[1]) || 0,
      $,
      U,
      H,
      X;
    i
      ? h !== Wa &&
        (U = y * C - S * w) &&
        ((H = F * (C / U) + k * (-w / U) + (w * z - C * P) / U),
        (X = F * (-S / U) + k * (y / U) - (y * z - S * P) / U),
        (F = H),
        (k = X))
      : (($ = Py(n)),
        (F = $.x + (~I[0].indexOf('%') ? (F / 100) * $.width : F)),
        (k = $.y + (~(I[1] || I[0]).indexOf('%') ? (k / 100) * $.height : k))),
      o || (o !== !1 && f.smooth)
        ? ((P = F - m),
          (z = k - g),
          (f.xOffset = x + (P * y + z * w) - P),
          (f.yOffset = v + (P * S + z * C) - z))
        : (f.xOffset = f.yOffset = 0),
      (f.xOrigin = F),
      (f.yOrigin = k),
      (f.smooth = !!o),
      (f.origin = r),
      (f.originIsAbsolute = !!i),
      (n.style[Zn] = '0px 0px'),
      c &&
        (Yi(c, f, 'xOrigin', m, F),
        Yi(c, f, 'yOrigin', g, k),
        Yi(c, f, 'xOffset', x, f.xOffset),
        Yi(c, f, 'yOffset', v, f.yOffset)),
      n.setAttribute('data-svg-origin', F + ' ' + k);
  },
  Ya = function (n, r) {
    var i = n._gsap || new hy(n);
    if ('x' in i && !r && !i.uncache) return i;
    var o = n.style,
      s = i.scaleX < 0,
      c = 'px',
      f = 'deg',
      h = getComputedStyle(n),
      m = ni(n, Zn) || '0',
      g,
      x,
      v,
      y,
      S,
      w,
      C,
      P,
      z,
      I,
      F,
      k,
      $,
      U,
      H,
      X,
      G,
      me,
      le,
      Se,
      Pe,
      ge,
      Te,
      ue,
      J,
      ae,
      T,
      M,
      K,
      xe,
      he,
      ke;
    return (
      (g = x = v = w = C = P = z = I = F = 0),
      (y = S = 1),
      (i.svg = !!(n.getCTM && Ry(n))),
      h.translate &&
        ((h.translate !== 'none' ||
          h.scale !== 'none' ||
          h.rotate !== 'none') &&
          (o[kt] =
            (h.translate !== 'none'
              ? 'translate3d(' +
                (h.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
                ') '
              : '') +
            (h.rotate !== 'none' ? 'rotate(' + h.rotate + ') ' : '') +
            (h.scale !== 'none'
              ? 'scale(' + h.scale.split(' ').join(',') + ') '
              : '') +
            (h[kt] !== 'none' ? h[kt] : '')),
        (o.scale = o.rotate = o.translate = 'none')),
      (U = vh(n, i.svg)),
      i.svg &&
        (i.uncache
          ? ((J = n.getBBox()),
            (m = i.xOrigin - J.x + 'px ' + (i.yOrigin - J.y) + 'px'),
            (ue = ''))
          : (ue = !r && n.getAttribute('data-svg-origin')),
        Md(n, ue || m, !!ue || i.originIsAbsolute, i.smooth !== !1, U)),
      (k = i.xOrigin || 0),
      ($ = i.yOrigin || 0),
      U !== Wa &&
        ((me = U[0]),
        (le = U[1]),
        (Se = U[2]),
        (Pe = U[3]),
        (g = ge = U[4]),
        (x = Te = U[5]),
        U.length === 6
          ? ((y = Math.sqrt(me * me + le * le)),
            (S = Math.sqrt(Pe * Pe + Se * Se)),
            (w = me || le ? co(le, me) * xl : 0),
            (z = Se || Pe ? co(Se, Pe) * xl + w : 0),
            z && (S *= Math.abs(Math.cos(z * wo))),
            i.svg &&
              ((g -= k - (k * me + $ * Se)), (x -= $ - (k * le + $ * Pe))))
          : ((ke = U[6]),
            (xe = U[7]),
            (T = U[8]),
            (M = U[9]),
            (K = U[10]),
            (he = U[11]),
            (g = U[12]),
            (x = U[13]),
            (v = U[14]),
            (H = co(ke, K)),
            (C = H * xl),
            H &&
              ((X = Math.cos(-H)),
              (G = Math.sin(-H)),
              (ue = ge * X + T * G),
              (J = Te * X + M * G),
              (ae = ke * X + K * G),
              (T = ge * -G + T * X),
              (M = Te * -G + M * X),
              (K = ke * -G + K * X),
              (he = xe * -G + he * X),
              (ge = ue),
              (Te = J),
              (ke = ae)),
            (H = co(-Se, K)),
            (P = H * xl),
            H &&
              ((X = Math.cos(-H)),
              (G = Math.sin(-H)),
              (ue = me * X - T * G),
              (J = le * X - M * G),
              (ae = Se * X - K * G),
              (he = Pe * G + he * X),
              (me = ue),
              (le = J),
              (Se = ae)),
            (H = co(le, me)),
            (w = H * xl),
            H &&
              ((X = Math.cos(H)),
              (G = Math.sin(H)),
              (ue = me * X + le * G),
              (J = ge * X + Te * G),
              (le = le * X - me * G),
              (Te = Te * X - ge * G),
              (me = ue),
              (ge = J)),
            C &&
              Math.abs(C) + Math.abs(w) > 359.9 &&
              ((C = w = 0), (P = 180 - P)),
            (y = Nt(Math.sqrt(me * me + le * le + Se * Se))),
            (S = Nt(Math.sqrt(Te * Te + ke * ke))),
            (H = co(ge, Te)),
            (z = Math.abs(H) > 2e-4 ? H * xl : 0),
            (F = he ? 1 / (he < 0 ? -he : he) : 0)),
        i.svg &&
          ((ue = n.getAttribute('transform')),
          (i.forceCSS = n.setAttribute('transform', '') || !Ny(ni(n, kt))),
          ue && n.setAttribute('transform', ue))),
      Math.abs(z) > 90 &&
        Math.abs(z) < 270 &&
        (s
          ? ((y *= -1), (z += w <= 0 ? 180 : -180), (w += w <= 0 ? 180 : -180))
          : ((S *= -1), (z += z <= 0 ? 180 : -180))),
      (r = r || i.uncache),
      (i.x =
        g -
        ((i.xPercent =
          g &&
          ((!r && i.xPercent) ||
            (Math.round(n.offsetWidth / 2) === Math.round(-g) ? -50 : 0)))
          ? (n.offsetWidth * i.xPercent) / 100
          : 0) +
        c),
      (i.y =
        x -
        ((i.yPercent =
          x &&
          ((!r && i.yPercent) ||
            (Math.round(n.offsetHeight / 2) === Math.round(-x) ? -50 : 0)))
          ? (n.offsetHeight * i.yPercent) / 100
          : 0) +
        c),
      (i.z = v + c),
      (i.scaleX = Nt(y)),
      (i.scaleY = Nt(S)),
      (i.rotation = Nt(w) + f),
      (i.rotationX = Nt(C) + f),
      (i.rotationY = Nt(P) + f),
      (i.skewX = z + f),
      (i.skewY = I + f),
      (i.transformPerspective = F + c),
      (i.zOrigin = parseFloat(m.split(' ')[2]) || (!r && i.zOrigin) || 0) &&
        (o[Zn] = Bu(m)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = pr.force3D),
      (i.renderTransform = i.svg ? cS : Ty ? My : uS),
      (i.uncache = 0),
      i
    );
  },
  Bu = function (n) {
    return (n = n.split(' '))[0] + ' ' + n[1];
  },
  ed = function (n, r, i) {
    var o = yn(r);
    return Nt(parseFloat(r) + parseFloat(nl(n, 'x', i + 'px', o))) + o;
  },
  uS = function (n, r) {
    (r.z = '0px'),
      (r.rotationY = r.rotationX = '0deg'),
      (r.force3D = 0),
      My(n, r);
  },
  _l = '0deg',
  ga = '0px',
  vl = ') ',
  My = function (n, r) {
    var i = r || this,
      o = i.xPercent,
      s = i.yPercent,
      c = i.x,
      f = i.y,
      h = i.z,
      m = i.rotation,
      g = i.rotationY,
      x = i.rotationX,
      v = i.skewX,
      y = i.skewY,
      S = i.scaleX,
      w = i.scaleY,
      C = i.transformPerspective,
      P = i.force3D,
      z = i.target,
      I = i.zOrigin,
      F = '',
      k = (P === 'auto' && n && n !== 1) || P === !0;
    if (I && (x !== _l || g !== _l)) {
      var $ = parseFloat(g) * wo,
        U = Math.sin($),
        H = Math.cos($),
        X;
      ($ = parseFloat(x) * wo),
        (X = Math.cos($)),
        (c = ed(z, c, U * X * -I)),
        (f = ed(z, f, -Math.sin($) * -I)),
        (h = ed(z, h, H * X * -I + I));
    }
    C !== ga && (F += 'perspective(' + C + vl),
      (o || s) && (F += 'translate(' + o + '%, ' + s + '%) '),
      (k || c !== ga || f !== ga || h !== ga) &&
        (F +=
          h !== ga || k
            ? 'translate3d(' + c + ', ' + f + ', ' + h + ') '
            : 'translate(' + c + ', ' + f + vl),
      m !== _l && (F += 'rotate(' + m + vl),
      g !== _l && (F += 'rotateY(' + g + vl),
      x !== _l && (F += 'rotateX(' + x + vl),
      (v !== _l || y !== _l) && (F += 'skew(' + v + ', ' + y + vl),
      (S !== 1 || w !== 1) && (F += 'scale(' + S + ', ' + w + vl),
      (z.style[kt] = F || 'translate(0, 0)');
  },
  cS = function (n, r) {
    var i = r || this,
      o = i.xPercent,
      s = i.yPercent,
      c = i.x,
      f = i.y,
      h = i.rotation,
      m = i.skewX,
      g = i.skewY,
      x = i.scaleX,
      v = i.scaleY,
      y = i.target,
      S = i.xOrigin,
      w = i.yOrigin,
      C = i.xOffset,
      P = i.yOffset,
      z = i.forceCSS,
      I = parseFloat(c),
      F = parseFloat(f),
      k,
      $,
      U,
      H,
      X;
    (h = parseFloat(h)),
      (m = parseFloat(m)),
      (g = parseFloat(g)),
      g && ((g = parseFloat(g)), (m += g), (h += g)),
      h || m
        ? ((h *= wo),
          (m *= wo),
          (k = Math.cos(h) * x),
          ($ = Math.sin(h) * x),
          (U = Math.sin(h - m) * -v),
          (H = Math.cos(h - m) * v),
          m &&
            ((g *= wo),
            (X = Math.tan(m - g)),
            (X = Math.sqrt(1 + X * X)),
            (U *= X),
            (H *= X),
            g &&
              ((X = Math.tan(g)),
              (X = Math.sqrt(1 + X * X)),
              (k *= X),
              ($ *= X))),
          (k = Nt(k)),
          ($ = Nt($)),
          (U = Nt(U)),
          (H = Nt(H)))
        : ((k = x), (H = v), ($ = U = 0)),
      ((I && !~(c + '').indexOf('px')) || (F && !~(f + '').indexOf('px'))) &&
        ((I = nl(y, 'x', c, 'px')), (F = nl(y, 'y', f, 'px'))),
      (S || w || C || P) &&
        ((I = Nt(I + S - (S * k + w * U) + C)),
        (F = Nt(F + w - (S * $ + w * H) + P))),
      (o || s) &&
        ((X = y.getBBox()),
        (I = Nt(I + (o / 100) * X.width)),
        (F = Nt(F + (s / 100) * X.height))),
      (X =
        'matrix(' + k + ',' + $ + ',' + U + ',' + H + ',' + I + ',' + F + ')'),
      y.setAttribute('transform', X),
      z && (y.style[kt] = X);
  },
  fS = function (n, r, i, o, s) {
    var c = 360,
      f = tn(s),
      h = parseFloat(s) * (f && ~s.indexOf('rad') ? xl : 1),
      m = h - o,
      g = o + m + 'deg',
      x,
      v;
    return (
      f &&
        ((x = s.split('_')[1]),
        x === 'short' &&
          ((m %= c), m !== m % (c / 2) && (m += m < 0 ? c : -360)),
        x === 'cw' && m < 0
          ? (m = ((m + c * Ig) % c) - ~~(m / c) * c)
          : x === 'ccw' && m > 0 && (m = ((m - c * Ig) % c) - ~~(m / c) * c)),
      (n._pt = v = new Jn(n._pt, r, i, o, m, Qw)),
      (v.e = g),
      (v.u = 'deg'),
      n._props.push(i),
      v
    );
  },
  Hg = function (n, r) {
    for (var i in r) n[i] = r[i];
    return n;
  },
  dS = function (n, r, i) {
    var o = Hg({}, i._gsap),
      s = 'perspective,force3D,transformOrigin,svgOrigin',
      c = i.style,
      f,
      h,
      m,
      g,
      x,
      v,
      y,
      S;
    o.svg
      ? ((m = i.getAttribute('transform')),
        i.setAttribute('transform', ''),
        (c[kt] = r),
        (f = Ya(i, 1)),
        jl(i, kt),
        i.setAttribute('transform', m))
      : ((m = getComputedStyle(i)[kt]),
        (c[kt] = r),
        (f = Ya(i, 1)),
        (c[kt] = m));
    for (h in wi)
      (m = o[h]),
        (g = f[h]),
        m !== g &&
          s.indexOf(h) < 0 &&
          ((y = yn(m)),
          (S = yn(g)),
          (x = y !== S ? nl(i, h, m, S) : parseFloat(m)),
          (v = parseFloat(g)),
          (n._pt = new Jn(n._pt, f, h, x, v - x, Rd)),
          (n._pt.u = S || 0),
          n._props.push(h));
    Hg(f, o);
  };
qn('padding,margin,Width,Radius', function (a, n) {
  var r = 'Top',
    i = 'Right',
    o = 'Bottom',
    s = 'Left',
    c = (n < 3 ? [r, i, o, s] : [r + s, r + i, o + i, o + s]).map(function (f) {
      return n < 2 ? a + f : 'border' + f + a;
    });
  $u[n > 1 ? 'border' + a : a] = function (f, h, m, g, x) {
    var v, y;
    if (arguments.length < 4)
      return (
        (v = c.map(function (S) {
          return gi(f, S, m);
        })),
        (y = v.join(' ')),
        y.split(v[0]).length === 5 ? v[0] : y
      );
    (v = (g + '').split(' ')),
      (y = {}),
      c.forEach(function (S, w) {
        return (y[S] = v[w] = v[w] || v[((w - 1) / 2) | 0]);
      }),
      f.init(h, y, x);
  };
});
var Ly = {
  name: 'css',
  register: Nd,
  targetTest: function (n) {
    return n.style && n.nodeType;
  },
  init: function (n, r, i, o, s) {
    var c = this._props,
      f = n.style,
      h = i.vars.startAt,
      m,
      g,
      x,
      v,
      y,
      S,
      w,
      C,
      P,
      z,
      I,
      F,
      k,
      $,
      U,
      H;
    gh || Nd(),
      (this.styles = this.styles || Cy(n)),
      (H = this.styles.props),
      (this.tween = i);
    for (w in r)
      if (w !== 'autoRound' && ((g = r[w]), !(ur[w] && py(w, r, i, o, n, s)))) {
        if (
          ((y = typeof g),
          (S = $u[w]),
          y === 'function' && ((g = g.call(i, o, n, s)), (y = typeof g)),
          y === 'string' && ~g.indexOf('random(') && (g = Ba(g)),
          S)
        )
          S(this, n, w, g, i) && (U = 1);
        else if (w.substr(0, 2) === '--')
          (m = (getComputedStyle(n).getPropertyValue(w) + '').trim()),
            (g += ''),
            (qi.lastIndex = 0),
            qi.test(m) || ((C = yn(m)), (P = yn(g))),
            P ? C !== P && (m = nl(n, w, m, P) + P) : C && (g += C),
            this.add(f, 'setProperty', m, g, o, s, 0, 0, w),
            c.push(w),
            H.push(w, 0, f[w]);
        else if (y !== 'undefined') {
          if (
            (h && w in h
              ? ((m = typeof h[w] == 'function' ? h[w].call(i, o, n, s) : h[w]),
                tn(m) && ~m.indexOf('random(') && (m = Ba(m)),
                yn(m + '') ||
                  m === 'auto' ||
                  (m += pr.units[w] || yn(gi(n, w)) || ''),
                (m + '').charAt(1) === '=' && (m = gi(n, w)))
              : (m = gi(n, w)),
            (v = parseFloat(m)),
            (z = y === 'string' && g.charAt(1) === '=' && g.substr(0, 2)),
            z && (g = g.substr(2)),
            (x = parseFloat(g)),
            w in Jr &&
              (w === 'autoAlpha' &&
                (v === 1 && gi(n, 'visibility') === 'hidden' && x && (v = 0),
                H.push('visibility', 0, f.visibility),
                Yi(
                  this,
                  f,
                  'visibility',
                  v ? 'inherit' : 'hidden',
                  x ? 'inherit' : 'hidden',
                  !x
                )),
              w !== 'scale' &&
                w !== 'transform' &&
                ((w = Jr[w]), ~w.indexOf(',') && (w = w.split(',')[0]))),
            (I = w in wi),
            I)
          ) {
            if (
              (this.styles.save(w),
              F ||
                ((k = n._gsap),
                (k.renderTransform && !r.parseTransform) ||
                  Ya(n, r.parseTransform),
                ($ = r.smoothOrigin !== !1 && k.smooth),
                (F = this._pt =
                  new Jn(this._pt, f, kt, 0, 1, k.renderTransform, k, 0, -1)),
                (F.dep = 1)),
              w === 'scale')
            )
              (this._pt = new Jn(
                this._pt,
                k,
                'scaleY',
                k.scaleY,
                (z ? vo(k.scaleY, z + x) : x) - k.scaleY || 0,
                Rd
              )),
                (this._pt.u = 0),
                c.push('scaleY', w),
                (w += 'X');
            else if (w === 'transformOrigin') {
              H.push(Zn, 0, f[Zn]),
                (g = aS(g)),
                k.svg
                  ? Md(n, g, 0, $, 0, this)
                  : ((P = parseFloat(g.split(' ')[2]) || 0),
                    P !== k.zOrigin && Yi(this, k, 'zOrigin', k.zOrigin, P),
                    Yi(this, f, w, Bu(m), Bu(g)));
              continue;
            } else if (w === 'svgOrigin') {
              Md(n, g, 1, $, 0, this);
              continue;
            } else if (w in Dy) {
              fS(this, k, w, v, z ? vo(v, z + g) : g);
              continue;
            } else if (w === 'smoothOrigin') {
              Yi(this, k, 'smooth', k.smooth, g);
              continue;
            } else if (w === 'force3D') {
              k[w] = g;
              continue;
            } else if (w === 'transform') {
              dS(this, g, n);
              continue;
            }
          } else w in f || (w = No(w) || w);
          if (I || ((x || x === 0) && (v || v === 0) && !Xw.test(g) && w in f))
            (C = (m + '').substr((v + '').length)),
              x || (x = 0),
              (P = yn(g) || (w in pr.units ? pr.units[w] : C)),
              C !== P && (v = nl(n, w, m, P)),
              (this._pt = new Jn(
                this._pt,
                I ? k : f,
                w,
                v,
                (z ? vo(v, z + x) : x) - v,
                !I && (P === 'px' || w === 'zIndex') && r.autoRound !== !1
                  ? Gw
                  : Rd
              )),
              (this._pt.u = P || 0),
              C !== P && P !== '%' && ((this._pt.b = m), (this._pt.r = Kw));
          else if (w in f) oS.call(this, n, w, m, z ? z + g : g);
          else if (w in n) this.add(n, w, m || n[w], z ? z + g : g, o, s);
          else if (w !== 'parseTransform') {
            ah(w, g);
            continue;
          }
          I ||
            (w in f
              ? H.push(w, 0, f[w])
              : typeof n[w] == 'function'
                ? H.push(w, 2, n[w]())
                : H.push(w, 1, m || n[w])),
            c.push(w);
        }
      }
    U && xy(this);
  },
  render: function (n, r) {
    if (r.tween._time || !yh())
      for (var i = r._pt; i; ) i.r(n, i.d), (i = i._next);
    else r.styles.revert();
  },
  get: gi,
  aliases: Jr,
  getSetter: function (n, r, i) {
    var o = Jr[r];
    return (
      o && o.indexOf(',') < 0 && (r = o),
      r in wi && r !== Zn && (n._gsap.x || gi(n, 'x'))
        ? i && Fg === i
          ? r === 'scale'
            ? eS
            : Zw
          : (Fg = i || {}) && (r === 'scale' ? tS : nS)
        : n.style && !ih(n.style[r])
          ? qw
          : ~r.indexOf('-')
            ? Jw
            : ph(n, r)
    );
  },
  core: {_removeProperty: jl, _getMatrix: vh},
};
er.utils.checkPrefix = No;
er.core.getStyleSaver = Cy;
(function (a, n, r, i) {
  var o = qn(a + ',' + n + ',' + r, function (s) {
    wi[s] = 1;
  });
  qn(n, function (s) {
    (pr.units[s] = 'deg'), (Dy[s] = 1);
  }),
    (Jr[o[13]] = a + ',' + n),
    qn(i, function (s) {
      var c = s.split(':');
      Jr[c[1]] = o[c[0]];
    });
})(
  'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
  'rotation,rotationX,rotationY,skewX,skewY',
  'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
  '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY'
);
qn(
  'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
  function (a) {
    pr.units[a] = 'px';
  }
);
er.registerPlugin(Ly);
var Xa = er.registerPlugin(Ly) || er;
Xa.core.Tween;
function hS(a, n) {
  for (var r = 0; r < n.length; r++) {
    var i = n[r];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(a, i.key, i);
  }
}
function pS(a, n, r) {
  return hS(a.prototype, n), a;
}
/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var an,
  Pu,
  dr,
  Xi,
  Qi,
  So,
  Oy,
  wl,
  Na,
  jy,
  _i,
  Ur,
  zy,
  Fy = function () {
    return (
      an ||
      (typeof window < 'u' && (an = window.gsap) && an.registerPlugin && an)
    );
  },
  Iy = 1,
  _o = [],
  Ye = [],
  ri = [],
  Ma = Date.now,
  Ld = function (n, r) {
    return r;
  },
  mS = function () {
    var n = Na.core,
      r = n.bridge || {},
      i = n._scrollers,
      o = n._proxies;
    i.push.apply(i, Ye),
      o.push.apply(o, ri),
      (Ye = i),
      (ri = o),
      (Ld = function (c, f) {
        return r[c](f);
      });
  },
  Ji = function (n, r) {
    return ~ri.indexOf(n) && ri[ri.indexOf(n) + 1][r];
  },
  La = function (n) {
    return !!~jy.indexOf(n);
  },
  Nn = function (n, r, i, o, s) {
    return n.addEventListener(r, i, {passive: o !== !1, capture: !!s});
  },
  Dn = function (n, r, i, o) {
    return n.removeEventListener(r, i, !!o);
  },
  su = 'scrollLeft',
  uu = 'scrollTop',
  Od = function () {
    return (_i && _i.isPressed) || Ye.cache++;
  },
  Vu = function (n, r) {
    var i = function o(s) {
      if (s || s === 0) {
        Iy && (dr.history.scrollRestoration = 'manual');
        var c = _i && _i.isPressed;
        (s = o.v = Math.round(s) || (_i && _i.iOS ? 1 : 0)),
          n(s),
          (o.cacheID = Ye.cache),
          c && Ld('ss', s);
      } else
        (r || Ye.cache !== o.cacheID || Ld('ref')) &&
          ((o.cacheID = Ye.cache), (o.v = n()));
      return o.v + o.offset;
    };
    return (i.offset = 0), n && i;
  },
  zn = {
    s: su,
    p: 'left',
    p2: 'Left',
    os: 'right',
    os2: 'Right',
    d: 'width',
    d2: 'Width',
    a: 'x',
    sc: Vu(function (a) {
      return arguments.length
        ? dr.scrollTo(a, Xt.sc())
        : dr.pageXOffset || Xi[su] || Qi[su] || So[su] || 0;
    }),
  },
  Xt = {
    s: uu,
    p: 'top',
    p2: 'Top',
    os: 'bottom',
    os2: 'Bottom',
    d: 'height',
    d2: 'Height',
    a: 'y',
    op: zn,
    sc: Vu(function (a) {
      return arguments.length
        ? dr.scrollTo(zn.sc(), a)
        : dr.pageYOffset || Xi[uu] || Qi[uu] || So[uu] || 0;
    }),
  },
  Kn = function (n, r) {
    return (
      ((r && r._ctx && r._ctx.selector) || an.utils.toArray)(n)[0] ||
      (typeof n == 'string' && an.config().nullTargetWarn !== !1
        ? console.warn('Element not found:', n)
        : null)
    );
  },
  rl = function (n, r) {
    var i = r.s,
      o = r.sc;
    La(n) && (n = Xi.scrollingElement || Qi);
    var s = Ye.indexOf(n),
      c = o === Xt.sc ? 1 : 2;
    !~s && (s = Ye.push(n) - 1), Ye[s + c] || Nn(n, 'scroll', Od);
    var f = Ye[s + c],
      h =
        f ||
        (Ye[s + c] =
          Vu(Ji(n, i), !0) ||
          (La(n)
            ? o
            : Vu(function (m) {
                return arguments.length ? (n[i] = m) : n[i];
              })));
    return (
      (h.target = n),
      f || (h.smooth = an.getProperty(n, 'scrollBehavior') === 'smooth'),
      h
    );
  },
  jd = function (n, r, i) {
    var o = n,
      s = n,
      c = Ma(),
      f = c,
      h = r || 50,
      m = Math.max(500, h * 3),
      g = function (S, w) {
        var C = Ma();
        w || C - c > h
          ? ((s = o), (o = S), (f = c), (c = C))
          : i
            ? (o += S)
            : (o = s + ((S - s) / (C - f)) * (c - f));
      },
      x = function () {
        (s = o = i ? 0 : o), (f = c = 0);
      },
      v = function (S) {
        var w = f,
          C = s,
          P = Ma();
        return (
          (S || S === 0) && S !== o && g(S),
          c === f || P - f > m
            ? 0
            : ((o + (i ? C : -C)) / ((i ? P : c) - w)) * 1e3
        );
      };
    return {update: g, reset: x, getVelocity: v};
  },
  ya = function (n, r) {
    return (
      r && !n._gsapAllow && n.preventDefault(),
      n.changedTouches ? n.changedTouches[0] : n
    );
  },
  Wg = function (n) {
    var r = Math.max.apply(Math, n),
      i = Math.min.apply(Math, n);
    return Math.abs(r) >= Math.abs(i) ? r : i;
  },
  Ay = function () {
    (Na = an.core.globals().ScrollTrigger), Na && Na.core && mS();
  },
  Uy = function (n) {
    return (
      (an = n || Fy()),
      !Pu &&
        an &&
        typeof document < 'u' &&
        document.body &&
        ((dr = window),
        (Xi = document),
        (Qi = Xi.documentElement),
        (So = Xi.body),
        (jy = [dr, Xi, Qi, So]),
        an.utils.clamp,
        (zy = an.core.context || function () {}),
        (wl = 'onpointerenter' in So ? 'pointer' : 'mouse'),
        (Oy = Mt.isTouch =
          dr.matchMedia &&
          dr.matchMedia('(hover: none), (pointer: coarse)').matches
            ? 1
            : 'ontouchstart' in dr ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (Ur = Mt.eventTypes =
          (
            'ontouchstart' in Qi
              ? 'touchstart,touchmove,touchcancel,touchend'
              : 'onpointerdown' in Qi
                ? 'pointerdown,pointermove,pointercancel,pointerup'
                : 'mousedown,mousemove,mouseup,mouseup'
          ).split(',')),
        setTimeout(function () {
          return (Iy = 0);
        }, 500),
        Ay(),
        (Pu = 1)),
      Pu
    );
  };
zn.op = Xt;
Ye.cache = 0;
var Mt = (function () {
  function a(r) {
    this.init(r);
  }
  var n = a.prototype;
  return (
    (n.init = function (i) {
      Pu || Uy(an) || console.warn('Please gsap.registerPlugin(Observer)'),
        Na || Ay();
      var o = i.tolerance,
        s = i.dragMinimum,
        c = i.type,
        f = i.target,
        h = i.lineHeight,
        m = i.debounce,
        g = i.preventDefault,
        x = i.onStop,
        v = i.onStopDelay,
        y = i.ignore,
        S = i.wheelSpeed,
        w = i.event,
        C = i.onDragStart,
        P = i.onDragEnd,
        z = i.onDrag,
        I = i.onPress,
        F = i.onRelease,
        k = i.onRight,
        $ = i.onLeft,
        U = i.onUp,
        H = i.onDown,
        X = i.onChangeX,
        G = i.onChangeY,
        me = i.onChange,
        le = i.onToggleX,
        Se = i.onToggleY,
        Pe = i.onHover,
        ge = i.onHoverEnd,
        Te = i.onMove,
        ue = i.ignoreCheck,
        J = i.isNormalizer,
        ae = i.onGestureStart,
        T = i.onGestureEnd,
        M = i.onWheel,
        K = i.onEnable,
        xe = i.onDisable,
        he = i.onClick,
        ke = i.scrollSpeed,
        Ne = i.capture,
        Me = i.allowClicks,
        Oe = i.lockAxis,
        Ee = i.onLockAxis;
      (this.target = f = Kn(f) || Qi),
        (this.vars = i),
        y && (y = an.utils.toArray(y)),
        (o = o || 1e-9),
        (s = s || 0),
        (S = S || 1),
        (ke = ke || 1),
        (c = c || 'wheel,touch,pointer'),
        (m = m !== !1),
        h || (h = parseFloat(dr.getComputedStyle(So).lineHeight) || 22);
      var rt,
        yt,
        At,
        ze,
        ot,
        Ut,
        bt,
        W = this,
        Qt = 0,
        wn = 0,
        cn = i.passive || (!g && i.passive !== !1),
        Xe = rl(f, zn),
        $t = rl(f, Xt),
        Fn = Xe(),
        In = $t(),
        et =
          ~c.indexOf('touch') &&
          !~c.indexOf('pointer') &&
          Ur[0] === 'pointerdown',
        Pt = La(f),
        lt = f.ownerDocument || Xi,
        Lt = [0, 0, 0],
        nn = [0, 0, 0],
        pt = 0,
        An = function () {
          return (pt = Ma());
        },
        ft = function (j, Q) {
          return (
            ((W.event = j) && y && ~y.indexOf(j.target)) ||
            (Q && et && j.pointerType !== 'touch') ||
            (ue && ue(j, Q))
          );
        },
        Hr = function () {
          W._vx.reset(), W._vy.reset(), yt.pause(), x && x(W);
        },
        Un = function () {
          var j = (W.deltaX = Wg(Lt)),
            Q = (W.deltaY = Wg(nn)),
            V = Math.abs(j) >= o,
            ee = Math.abs(Q) >= o;
          me && (V || ee) && me(W, j, Q, Lt, nn),
            V &&
              (k && W.deltaX > 0 && k(W),
              $ && W.deltaX < 0 && $(W),
              X && X(W),
              le && W.deltaX < 0 != Qt < 0 && le(W),
              (Qt = W.deltaX),
              (Lt[0] = Lt[1] = Lt[2] = 0)),
            ee &&
              (H && W.deltaY > 0 && H(W),
              U && W.deltaY < 0 && U(W),
              G && G(W),
              Se && W.deltaY < 0 != wn < 0 && Se(W),
              (wn = W.deltaY),
              (nn[0] = nn[1] = nn[2] = 0)),
            (ze || At) &&
              (Te && Te(W),
              At && (C && At === 1 && C(W), z && z(W), (At = 0)),
              (ze = !1)),
            Ut && !(Ut = !1) && Ee && Ee(W),
            ot && (M(W), (ot = !1)),
            (rt = 0);
        },
        Nr = function (j, Q, V) {
          (Lt[V] += j),
            (nn[V] += Q),
            W._vx.update(j),
            W._vy.update(Q),
            m ? rt || (rt = requestAnimationFrame(Un)) : Un();
        },
        Sn = function (j, Q) {
          Oe &&
            !bt &&
            ((W.axis = bt = Math.abs(j) > Math.abs(Q) ? 'x' : 'y'), (Ut = !0)),
            bt !== 'y' && ((Lt[2] += j), W._vx.update(j, !0)),
            bt !== 'x' && ((nn[2] += Q), W._vy.update(Q, !0)),
            m ? rt || (rt = requestAnimationFrame(Un)) : Un();
        },
        kn = function (j) {
          if (!ft(j, 1)) {
            j = ya(j, g);
            var Q = j.clientX,
              V = j.clientY,
              ee = Q - W.x,
              re = V - W.y,
              Z = W.isDragging;
            (W.x = Q),
              (W.y = V),
              (Z ||
                ((ee || re) &&
                  (Math.abs(W.startX - Q) >= s ||
                    Math.abs(W.startY - V) >= s))) &&
                ((At = Z ? 2 : 1), Z || (W.isDragging = !0), Sn(ee, re));
          }
        },
        En = (W.onPress = function (R) {
          ft(R, 1) ||
            (R && R.button) ||
            ((W.axis = bt = null),
            yt.pause(),
            (W.isPressed = !0),
            (R = ya(R)),
            (Qt = wn = 0),
            (W.startX = W.x = R.clientX),
            (W.startY = W.y = R.clientY),
            W._vx.reset(),
            W._vy.reset(),
            Nn(J ? f : lt, Ur[1], kn, cn, !0),
            (W.deltaX = W.deltaY = 0),
            I && I(W));
        }),
        Ae = (W.onRelease = function (R) {
          if (!ft(R, 1)) {
            Dn(J ? f : lt, Ur[1], kn, !0);
            var j = !isNaN(W.y - W.startY),
              Q = W.isDragging,
              V =
                Q &&
                (Math.abs(W.x - W.startX) > 3 || Math.abs(W.y - W.startY) > 3),
              ee = ya(R);
            !V &&
              j &&
              (W._vx.reset(),
              W._vy.reset(),
              g &&
                Me &&
                an.delayedCall(0.08, function () {
                  if (Ma() - pt > 300 && !R.defaultPrevented) {
                    if (R.target.click) R.target.click();
                    else if (lt.createEvent) {
                      var re = lt.createEvent('MouseEvents');
                      re.initMouseEvent(
                        'click',
                        !0,
                        !0,
                        dr,
                        1,
                        ee.screenX,
                        ee.screenY,
                        ee.clientX,
                        ee.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        R.target.dispatchEvent(re);
                    }
                  }
                })),
              (W.isDragging = W.isGesturing = W.isPressed = !1),
              x && Q && !J && yt.restart(!0),
              At && Un(),
              P && Q && P(W),
              F && F(W, V);
          }
        }),
        bn = function (j) {
          return (
            j.touches &&
            j.touches.length > 1 &&
            (W.isGesturing = !0) &&
            ae(j, W.isDragging)
          );
        },
        Ot = function () {
          return (W.isGesturing = !1) || T(W);
        },
        Rt = function (j) {
          if (!ft(j)) {
            var Q = Xe(),
              V = $t();
            Nr((Q - Fn) * ke, (V - In) * ke, 1),
              (Fn = Q),
              (In = V),
              x && yt.restart(!0);
          }
        },
        Bt = function (j) {
          if (!ft(j)) {
            (j = ya(j, g)), M && (ot = !0);
            var Q =
              (j.deltaMode === 1 ? h : j.deltaMode === 2 ? dr.innerHeight : 1) *
              S;
            Nr(j.deltaX * Q, j.deltaY * Q, 0), x && !J && yt.restart(!0);
          }
        },
        Cn = function (j) {
          if (!ft(j)) {
            var Q = j.clientX,
              V = j.clientY,
              ee = Q - W.x,
              re = V - W.y;
            (W.x = Q),
              (W.y = V),
              (ze = !0),
              x && yt.restart(!0),
              (ee || re) && Sn(ee, re);
          }
        },
        Mr = function (j) {
          (W.event = j), Pe(W);
        },
        $n = function (j) {
          (W.event = j), ge(W);
        },
        D = function (j) {
          return ft(j) || (ya(j, g) && he(W));
        };
      (yt = W._dc = an.delayedCall(v || 0.25, Hr).pause()),
        (W.deltaX = W.deltaY = 0),
        (W._vx = jd(0, 50, !0)),
        (W._vy = jd(0, 50, !0)),
        (W.scrollX = Xe),
        (W.scrollY = $t),
        (W.isDragging = W.isGesturing = W.isPressed = !1),
        zy(this),
        (W.enable = function (R) {
          return (
            W.isEnabled ||
              (Nn(Pt ? lt : f, 'scroll', Od),
              c.indexOf('scroll') >= 0 && Nn(Pt ? lt : f, 'scroll', Rt, cn, Ne),
              c.indexOf('wheel') >= 0 && Nn(f, 'wheel', Bt, cn, Ne),
              ((c.indexOf('touch') >= 0 && Oy) || c.indexOf('pointer') >= 0) &&
                (Nn(f, Ur[0], En, cn, Ne),
                Nn(lt, Ur[2], Ae),
                Nn(lt, Ur[3], Ae),
                Me && Nn(f, 'click', An, !0, !0),
                he && Nn(f, 'click', D),
                ae && Nn(lt, 'gesturestart', bn),
                T && Nn(lt, 'gestureend', Ot),
                Pe && Nn(f, wl + 'enter', Mr),
                ge && Nn(f, wl + 'leave', $n),
                Te && Nn(f, wl + 'move', Cn)),
              (W.isEnabled = !0),
              (W.isDragging = W.isGesturing = W.isPressed = ze = At = !1),
              W._vx.reset(),
              W._vy.reset(),
              (Fn = Xe()),
              (In = $t()),
              R && R.type && En(R),
              K && K(W)),
            W
          );
        }),
        (W.disable = function () {
          W.isEnabled &&
            (_o.filter(function (R) {
              return R !== W && La(R.target);
            }).length || Dn(Pt ? lt : f, 'scroll', Od),
            W.isPressed &&
              (W._vx.reset(), W._vy.reset(), Dn(J ? f : lt, Ur[1], kn, !0)),
            Dn(Pt ? lt : f, 'scroll', Rt, Ne),
            Dn(f, 'wheel', Bt, Ne),
            Dn(f, Ur[0], En, Ne),
            Dn(lt, Ur[2], Ae),
            Dn(lt, Ur[3], Ae),
            Dn(f, 'click', An, !0),
            Dn(f, 'click', D),
            Dn(lt, 'gesturestart', bn),
            Dn(lt, 'gestureend', Ot),
            Dn(f, wl + 'enter', Mr),
            Dn(f, wl + 'leave', $n),
            Dn(f, wl + 'move', Cn),
            (W.isEnabled = W.isPressed = W.isDragging = !1),
            xe && xe(W));
        }),
        (W.kill = W.revert =
          function () {
            W.disable();
            var R = _o.indexOf(W);
            R >= 0 && _o.splice(R, 1), _i === W && (_i = 0);
          }),
        _o.push(W),
        J && La(f) && (_i = W),
        W.enable(w);
    }),
    pS(a, [
      {
        key: 'velocityX',
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: 'velocityY',
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    a
  );
})();
Mt.version = '3.12.7';
Mt.create = function (a) {
  return new Mt(a);
};
Mt.register = Uy;
Mt.getAll = function () {
  return _o.slice();
};
Mt.getById = function (a) {
  return _o.filter(function (n) {
    return n.vars.id === a;
  })[0];
};
Fy() && an.registerPlugin(Mt);
/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var pe,
  po,
  We,
  ct,
  cr,
  nt,
  xh,
  Hu,
  Qa,
  Oa,
  Sa,
  cu,
  mn,
  rc,
  zd,
  Ln,
  Yg,
  Xg,
  mo,
  by,
  td,
  $y,
  Mn,
  Fd,
  By,
  Vy,
  Bi,
  Id,
  wh,
  ko,
  Sh,
  Wu,
  Ad,
  nd,
  fu = 1,
  gn = Date.now,
  rd = gn(),
  Dr = 0,
  ka = 0,
  Qg = function (n, r, i) {
    var o = ar(n) && (n.substr(0, 6) === 'clamp(' || n.indexOf('max') > -1);
    return (i['_' + r + 'Clamp'] = o), o ? n.substr(6, n.length - 7) : n;
  },
  Kg = function (n, r) {
    return r && (!ar(n) || n.substr(0, 6) !== 'clamp(')
      ? 'clamp(' + n + ')'
      : n;
  },
  gS = function a() {
    return ka && requestAnimationFrame(a);
  },
  Gg = function () {
    return (rc = 1);
  },
  qg = function () {
    return (rc = 0);
  },
  Gr = function (n) {
    return n;
  },
  Ea = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  Hy = function () {
    return typeof window < 'u';
  },
  Wy = function () {
    return pe || (Hy() && (pe = window.gsap) && pe.registerPlugin && pe);
  },
  zl = function (n) {
    return !!~xh.indexOf(n);
  },
  Yy = function (n) {
    return (
      (n === 'Height' ? Sh : We['inner' + n]) ||
      cr['client' + n] ||
      nt['client' + n]
    );
  },
  Xy = function (n) {
    return (
      Ji(n, 'getBoundingClientRect') ||
      (zl(n)
        ? function () {
            return (Lu.width = We.innerWidth), (Lu.height = Sh), Lu;
          }
        : function () {
            return yi(n);
          })
    );
  },
  yS = function (n, r, i) {
    var o = i.d,
      s = i.d2,
      c = i.a;
    return (c = Ji(n, 'getBoundingClientRect'))
      ? function () {
          return c()[o];
        }
      : function () {
          return (r ? Yy(s) : n['client' + s]) || 0;
        };
  },
  _S = function (n, r) {
    return !r || ~ri.indexOf(n)
      ? Xy(n)
      : function () {
          return Lu;
        };
  },
  Zr = function (n, r) {
    var i = r.s,
      o = r.d2,
      s = r.d,
      c = r.a;
    return Math.max(
      0,
      (i = 'scroll' + o) && (c = Ji(n, i))
        ? c() - Xy(n)()[s]
        : zl(n)
          ? (cr[i] || nt[i]) - Yy(o)
          : n[i] - n['offset' + o]
    );
  },
  du = function (n, r) {
    for (var i = 0; i < mo.length; i += 3)
      (!r || ~r.indexOf(mo[i + 1])) && n(mo[i], mo[i + 1], mo[i + 2]);
  },
  ar = function (n) {
    return typeof n == 'string';
  },
  _n = function (n) {
    return typeof n == 'function';
  },
  Ca = function (n) {
    return typeof n == 'number';
  },
  Sl = function (n) {
    return typeof n == 'object';
  },
  _a = function (n, r, i) {
    return n && n.progress(r ? 0 : 1) && i && n.pause();
  },
  id = function (n, r) {
    if (n.enabled) {
      var i = n._ctx
        ? n._ctx.add(function () {
            return r(n);
          })
        : r(n);
      i && i.totalTime && (n.callbackAnimation = i);
    }
  },
  fo = Math.abs,
  Qy = 'left',
  Ky = 'top',
  kh = 'right',
  Eh = 'bottom',
  Ml = 'width',
  Ll = 'height',
  ja = 'Right',
  za = 'Left',
  Fa = 'Top',
  Ia = 'Bottom',
  zt = 'padding',
  Tr = 'margin',
  Mo = 'Width',
  Ch = 'Height',
  Yt = 'px',
  Pr = function (n) {
    return We.getComputedStyle(n);
  },
  vS = function (n) {
    var r = Pr(n).position;
    n.style.position = r === 'absolute' || r === 'fixed' ? r : 'relative';
  },
  Jg = function (n, r) {
    for (var i in r) i in n || (n[i] = r[i]);
    return n;
  },
  yi = function (n, r) {
    var i =
        r &&
        Pr(n)[zd] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
        pe
          .to(n, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      o = n.getBoundingClientRect();
    return i && i.progress(0).kill(), o;
  },
  Yu = function (n, r) {
    var i = r.d2;
    return n['offset' + i] || n['client' + i] || 0;
  },
  Gy = function (n) {
    var r = [],
      i = n.labels,
      o = n.duration(),
      s;
    for (s in i) r.push(i[s] / o);
    return r;
  },
  xS = function (n) {
    return function (r) {
      return pe.utils.snap(Gy(n), r);
    };
  },
  Th = function (n) {
    var r = pe.utils.snap(n),
      i =
        Array.isArray(n) &&
        n.slice(0).sort(function (o, s) {
          return o - s;
        });
    return i
      ? function (o, s, c) {
          c === void 0 && (c = 0.001);
          var f;
          if (!s) return r(o);
          if (s > 0) {
            for (o -= c, f = 0; f < i.length; f++) if (i[f] >= o) return i[f];
            return i[f - 1];
          } else for (f = i.length, o += c; f--; ) if (i[f] <= o) return i[f];
          return i[0];
        }
      : function (o, s, c) {
          c === void 0 && (c = 0.001);
          var f = r(o);
          return !s || Math.abs(f - o) < c || f - o < 0 == s < 0
            ? f
            : r(s < 0 ? o - n : o + n);
        };
  },
  wS = function (n) {
    return function (r, i) {
      return Th(Gy(n))(r, i.direction);
    };
  },
  hu = function (n, r, i, o) {
    return i.split(',').forEach(function (s) {
      return n(r, s, o);
    });
  },
  en = function (n, r, i, o, s) {
    return n.addEventListener(r, i, {passive: !o, capture: !!s});
  },
  Zt = function (n, r, i, o) {
    return n.removeEventListener(r, i, !!o);
  },
  pu = function (n, r, i) {
    (i = i && i.wheelHandler), i && (n(r, 'wheel', i), n(r, 'touchmove', i));
  },
  Zg = {
    startColor: 'green',
    endColor: 'red',
    indent: 0,
    fontSize: '16px',
    fontWeight: 'normal',
  },
  mu = {toggleActions: 'play', anticipatePin: 0},
  Xu = {top: 0, left: 0, center: 0.5, bottom: 1, right: 1},
  Ru = function (n, r) {
    if (ar(n)) {
      var i = n.indexOf('='),
        o = ~i ? +(n.charAt(i - 1) + 1) * parseFloat(n.substr(i + 1)) : 0;
      ~i && (n.indexOf('%') > i && (o *= r / 100), (n = n.substr(0, i - 1))),
        (n =
          o +
          (n in Xu
            ? Xu[n] * r
            : ~n.indexOf('%')
              ? (parseFloat(n) * r) / 100
              : parseFloat(n) || 0));
    }
    return n;
  },
  gu = function (n, r, i, o, s, c, f, h) {
    var m = s.startColor,
      g = s.endColor,
      x = s.fontSize,
      v = s.indent,
      y = s.fontWeight,
      S = ct.createElement('div'),
      w = zl(i) || Ji(i, 'pinType') === 'fixed',
      C = n.indexOf('scroller') !== -1,
      P = w ? nt : i,
      z = n.indexOf('start') !== -1,
      I = z ? m : g,
      F =
        'border-color:' +
        I +
        ';font-size:' +
        x +
        ';color:' +
        I +
        ';font-weight:' +
        y +
        ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
    return (
      (F += 'position:' + ((C || h) && w ? 'fixed;' : 'absolute;')),
      (C || h || !w) &&
        (F += (o === Xt ? kh : Eh) + ':' + (c + parseFloat(v)) + 'px;'),
      f &&
        (F +=
          'box-sizing:border-box;text-align:left;width:' +
          f.offsetWidth +
          'px;'),
      (S._isStart = z),
      S.setAttribute('class', 'gsap-marker-' + n + (r ? ' marker-' + r : '')),
      (S.style.cssText = F),
      (S.innerText = r || r === 0 ? n + '-' + r : n),
      P.children[0] ? P.insertBefore(S, P.children[0]) : P.appendChild(S),
      (S._offset = S['offset' + o.op.d2]),
      Du(S, 0, o, z),
      S
    );
  },
  Du = function (n, r, i, o) {
    var s = {display: 'block'},
      c = i[o ? 'os2' : 'p2'],
      f = i[o ? 'p2' : 'os2'];
    (n._isFlipped = o),
      (s[i.a + 'Percent'] = o ? -100 : 0),
      (s[i.a] = o ? '1px' : 0),
      (s['border' + c + Mo] = 1),
      (s['border' + f + Mo] = 0),
      (s[i.p] = r + 'px'),
      pe.set(n, s);
  },
  Ve = [],
  Ud = {},
  Ka,
  e0 = function () {
    return gn() - Dr > 34 && (Ka || (Ka = requestAnimationFrame(vi)));
  },
  ho = function () {
    (!Mn || !Mn.isPressed || Mn.startX > nt.clientWidth) &&
      (Ye.cache++,
      Mn ? Ka || (Ka = requestAnimationFrame(vi)) : vi(),
      Dr || Il('scrollStart'),
      (Dr = gn()));
  },
  ld = function () {
    (Vy = We.innerWidth), (By = We.innerHeight);
  },
  Ta = function (n) {
    Ye.cache++,
      (n === !0 ||
        (!mn &&
          !$y &&
          !ct.fullscreenElement &&
          !ct.webkitFullscreenElement &&
          (!Fd ||
            Vy !== We.innerWidth ||
            Math.abs(We.innerHeight - By) > We.innerHeight * 0.25))) &&
        Hu.restart(!0);
  },
  Fl = {},
  SS = [],
  qy = function a() {
    return Zt(Be, 'scrollEnd', a) || Tl(!0);
  },
  Il = function (n) {
    return (
      (Fl[n] &&
        Fl[n].map(function (r) {
          return r();
        })) ||
      SS
    );
  },
  or = [],
  Jy = function (n) {
    for (var r = 0; r < or.length; r += 5)
      (!n || (or[r + 4] && or[r + 4].query === n)) &&
        ((or[r].style.cssText = or[r + 1]),
        or[r].getBBox && or[r].setAttribute('transform', or[r + 2] || ''),
        (or[r + 3].uncache = 1));
  },
  Ph = function (n, r) {
    var i;
    for (Ln = 0; Ln < Ve.length; Ln++)
      (i = Ve[Ln]),
        i && (!r || i._ctx === r) && (n ? i.kill(1) : i.revert(!0, !0));
    (Wu = !0), r && Jy(r), r || Il('revert');
  },
  Zy = function (n, r) {
    Ye.cache++,
      (r || !On) &&
        Ye.forEach(function (i) {
          return _n(i) && i.cacheID++ && (i.rec = 0);
        }),
      ar(n) && (We.history.scrollRestoration = wh = n);
  },
  On,
  Ol = 0,
  t0,
  kS = function () {
    if (t0 !== Ol) {
      var n = (t0 = Ol);
      requestAnimationFrame(function () {
        return n === Ol && Tl(!0);
      });
    }
  },
  e_ = function () {
    nt.appendChild(ko),
      (Sh = (!Mn && ko.offsetHeight) || We.innerHeight),
      nt.removeChild(ko);
  },
  n0 = function (n) {
    return Qa(
      '.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end'
    ).forEach(function (r) {
      return (r.style.display = n ? 'none' : 'block');
    });
  },
  Tl = function (n, r) {
    if (
      ((cr = ct.documentElement),
      (nt = ct.body),
      (xh = [We, ct, cr, nt]),
      Dr && !n && !Wu)
    ) {
      en(Be, 'scrollEnd', qy);
      return;
    }
    e_(),
      (On = Be.isRefreshing = !0),
      Ye.forEach(function (o) {
        return _n(o) && ++o.cacheID && (o.rec = o());
      });
    var i = Il('refreshInit');
    by && Be.sort(),
      r || Ph(),
      Ye.forEach(function (o) {
        _n(o) && (o.smooth && (o.target.style.scrollBehavior = 'auto'), o(0));
      }),
      Ve.slice(0).forEach(function (o) {
        return o.refresh();
      }),
      (Wu = !1),
      Ve.forEach(function (o) {
        if (o._subPinOffset && o.pin) {
          var s = o.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
            c = o.pin[s];
          o.revert(!0, 1), o.adjustPinSpacing(o.pin[s] - c), o.refresh();
        }
      }),
      (Ad = 1),
      n0(!0),
      Ve.forEach(function (o) {
        var s = Zr(o.scroller, o._dir),
          c = o.vars.end === 'max' || (o._endClamp && o.end > s),
          f = o._startClamp && o.start >= s;
        (c || f) &&
          o.setPositions(
            f ? s - 1 : o.start,
            c ? Math.max(f ? s : o.start + 1, s) : o.end,
            !0
          );
      }),
      n0(!1),
      (Ad = 0),
      i.forEach(function (o) {
        return o && o.render && o.render(-1);
      }),
      Ye.forEach(function (o) {
        _n(o) &&
          (o.smooth &&
            requestAnimationFrame(function () {
              return (o.target.style.scrollBehavior = 'smooth');
            }),
          o.rec && o(o.rec));
      }),
      Zy(wh, 1),
      Hu.pause(),
      Ol++,
      (On = 2),
      vi(2),
      Ve.forEach(function (o) {
        return _n(o.vars.onRefresh) && o.vars.onRefresh(o);
      }),
      (On = Be.isRefreshing = !1),
      Il('refresh');
  },
  bd = 0,
  Nu = 1,
  Aa,
  vi = function (n) {
    if (n === 2 || (!On && !Wu)) {
      (Be.isUpdating = !0), Aa && Aa.update(0);
      var r = Ve.length,
        i = gn(),
        o = i - rd >= 50,
        s = r && Ve[0].scroll();
      if (
        ((Nu = bd > s ? -1 : 1),
        On || (bd = s),
        o &&
          (Dr && !rc && i - Dr > 200 && ((Dr = 0), Il('scrollEnd')),
          (Sa = rd),
          (rd = i)),
        Nu < 0)
      ) {
        for (Ln = r; Ln-- > 0; ) Ve[Ln] && Ve[Ln].update(0, o);
        Nu = 1;
      } else for (Ln = 0; Ln < r; Ln++) Ve[Ln] && Ve[Ln].update(0, o);
      Be.isUpdating = !1;
    }
    Ka = 0;
  },
  $d = [
    Qy,
    Ky,
    Eh,
    kh,
    Tr + Ia,
    Tr + ja,
    Tr + Fa,
    Tr + za,
    'display',
    'flexShrink',
    'float',
    'zIndex',
    'gridColumnStart',
    'gridColumnEnd',
    'gridRowStart',
    'gridRowEnd',
    'gridArea',
    'justifySelf',
    'alignSelf',
    'placeSelf',
    'order',
  ],
  Mu = $d.concat([
    Ml,
    Ll,
    'boxSizing',
    'max' + Mo,
    'max' + Ch,
    'position',
    Tr,
    zt,
    zt + Fa,
    zt + ja,
    zt + Ia,
    zt + za,
  ]),
  ES = function (n, r, i) {
    Eo(i);
    var o = n._gsap;
    if (o.spacerIsNative) Eo(o.spacerState);
    else if (n._gsap.swappedIn) {
      var s = r.parentNode;
      s && (s.insertBefore(n, r), s.removeChild(r));
    }
    n._gsap.swappedIn = !1;
  },
  od = function (n, r, i, o) {
    if (!n._gsap.swappedIn) {
      for (var s = $d.length, c = r.style, f = n.style, h; s--; )
        (h = $d[s]), (c[h] = i[h]);
      (c.position = i.position === 'absolute' ? 'absolute' : 'relative'),
        i.display === 'inline' && (c.display = 'inline-block'),
        (f[Eh] = f[kh] = 'auto'),
        (c.flexBasis = i.flexBasis || 'auto'),
        (c.overflow = 'visible'),
        (c.boxSizing = 'border-box'),
        (c[Ml] = Yu(n, zn) + Yt),
        (c[Ll] = Yu(n, Xt) + Yt),
        (c[zt] = f[Tr] = f[Ky] = f[Qy] = '0'),
        Eo(o),
        (f[Ml] = f['max' + Mo] = i[Ml]),
        (f[Ll] = f['max' + Ch] = i[Ll]),
        (f[zt] = i[zt]),
        n.parentNode !== r &&
          (n.parentNode.insertBefore(r, n), r.appendChild(n)),
        (n._gsap.swappedIn = !0);
    }
  },
  CS = /([A-Z])/g,
  Eo = function (n) {
    if (n) {
      var r = n.t.style,
        i = n.length,
        o = 0,
        s,
        c;
      for ((n.t._gsap || pe.core.getCache(n.t)).uncache = 1; o < i; o += 2)
        (c = n[o + 1]),
          (s = n[o]),
          c
            ? (r[s] = c)
            : r[s] && r.removeProperty(s.replace(CS, '-$1').toLowerCase());
    }
  },
  yu = function (n) {
    for (var r = Mu.length, i = n.style, o = [], s = 0; s < r; s++)
      o.push(Mu[s], i[Mu[s]]);
    return (o.t = n), o;
  },
  TS = function (n, r, i) {
    for (var o = [], s = n.length, c = i ? 8 : 0, f; c < s; c += 2)
      (f = n[c]), o.push(f, f in r ? r[f] : n[c + 1]);
    return (o.t = n.t), o;
  },
  Lu = {left: 0, top: 0},
  r0 = function (n, r, i, o, s, c, f, h, m, g, x, v, y, S) {
    _n(n) && (n = n(h)),
      ar(n) &&
        n.substr(0, 3) === 'max' &&
        (n = v + (n.charAt(4) === '=' ? Ru('0' + n.substr(3), i) : 0));
    var w = y ? y.time() : 0,
      C,
      P,
      z;
    if ((y && y.seek(0), isNaN(n) || (n = +n), Ca(n)))
      y &&
        (n = pe.utils.mapRange(
          y.scrollTrigger.start,
          y.scrollTrigger.end,
          0,
          v,
          n
        )),
        f && Du(f, i, o, !0);
    else {
      _n(r) && (r = r(h));
      var I = (n || '0').split(' '),
        F,
        k,
        $,
        U;
      (z = Kn(r, h) || nt),
        (F = yi(z) || {}),
        (!F || (!F.left && !F.top)) &&
          Pr(z).display === 'none' &&
          ((U = z.style.display),
          (z.style.display = 'block'),
          (F = yi(z)),
          U ? (z.style.display = U) : z.style.removeProperty('display')),
        (k = Ru(I[0], F[o.d])),
        ($ = Ru(I[1] || '0', i)),
        (n = F[o.p] - m[o.p] - g + k + s - $),
        f && Du(f, $, o, i - $ < 20 || (f._isStart && $ > 20)),
        (i -= i - $);
    }
    if ((S && ((h[S] = n || -0.001), n < 0 && (n = 0)), c)) {
      var H = n + i,
        X = c._isStart;
      (C = 'scroll' + o.d2),
        Du(
          c,
          H,
          o,
          (X && H > 20) ||
            (!X && (x ? Math.max(nt[C], cr[C]) : c.parentNode[C]) <= H + 1)
        ),
        x &&
          ((m = yi(f)),
          x && (c.style[o.op.p] = m[o.op.p] - o.op.m - c._offset + Yt));
    }
    return (
      y &&
        z &&
        ((C = yi(z)),
        y.seek(v),
        (P = yi(z)),
        (y._caScrollDist = C[o.p] - P[o.p]),
        (n = (n / y._caScrollDist) * v)),
      y && y.seek(w),
      y ? n : Math.round(n)
    );
  },
  PS = /(webkit|moz|length|cssText|inset)/i,
  i0 = function (n, r, i, o) {
    if (n.parentNode !== r) {
      var s = n.style,
        c,
        f;
      if (r === nt) {
        (n._stOrig = s.cssText), (f = Pr(n));
        for (c in f)
          !+c &&
            !PS.test(c) &&
            f[c] &&
            typeof s[c] == 'string' &&
            c !== '0' &&
            (s[c] = f[c]);
        (s.top = i), (s.left = o);
      } else s.cssText = n._stOrig;
      (pe.core.getCache(n).uncache = 1), r.appendChild(n);
    }
  },
  t_ = function (n, r, i) {
    var o = r,
      s = o;
    return function (c) {
      var f = Math.round(n());
      return (
        f !== o &&
          f !== s &&
          Math.abs(f - o) > 3 &&
          Math.abs(f - s) > 3 &&
          ((c = f), i && i()),
        (s = o),
        (o = Math.round(c)),
        o
      );
    };
  },
  _u = function (n, r, i) {
    var o = {};
    (o[r.p] = '+=' + i), pe.set(n, o);
  },
  l0 = function (n, r) {
    var i = rl(n, r),
      o = '_scroll' + r.p2,
      s = function c(f, h, m, g, x) {
        var v = c.tween,
          y = h.onComplete,
          S = {};
        m = m || i();
        var w = t_(i, m, function () {
          v.kill(), (c.tween = 0);
        });
        return (
          (x = (g && x) || 0),
          (g = g || f - m),
          v && v.kill(),
          (h[o] = f),
          (h.inherit = !1),
          (h.modifiers = S),
          (S[o] = function () {
            return w(m + g * v.ratio + x * v.ratio * v.ratio);
          }),
          (h.onUpdate = function () {
            Ye.cache++, c.tween && vi();
          }),
          (h.onComplete = function () {
            (c.tween = 0), y && y.call(v);
          }),
          (v = c.tween = pe.to(n, h)),
          v
        );
      };
    return (
      (n[o] = i),
      (i.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      en(n, 'wheel', i.wheelHandler),
      Be.isTouch && en(n, 'touchmove', i.wheelHandler),
      s
    );
  },
  Be = (function () {
    function a(r, i) {
      po ||
        a.register(pe) ||
        console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
        Id(this),
        this.init(r, i);
    }
    var n = a.prototype;
    return (
      (n.init = function (i, o) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !ka)
        ) {
          this.update = this.refresh = this.kill = Gr;
          return;
        }
        i = Jg(ar(i) || Ca(i) || i.nodeType ? {trigger: i} : i, mu);
        var s = i,
          c = s.onUpdate,
          f = s.toggleClass,
          h = s.id,
          m = s.onToggle,
          g = s.onRefresh,
          x = s.scrub,
          v = s.trigger,
          y = s.pin,
          S = s.pinSpacing,
          w = s.invalidateOnRefresh,
          C = s.anticipatePin,
          P = s.onScrubComplete,
          z = s.onSnapComplete,
          I = s.once,
          F = s.snap,
          k = s.pinReparent,
          $ = s.pinSpacer,
          U = s.containerAnimation,
          H = s.fastScrollEnd,
          X = s.preventOverlaps,
          G =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? zn
              : Xt,
          me = !x && x !== 0,
          le = Kn(i.scroller || We),
          Se = pe.core.getCache(le),
          Pe = zl(le),
          ge =
            ('pinType' in i
              ? i.pinType
              : Ji(le, 'pinType') || (Pe && 'fixed')) === 'fixed',
          Te = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          ue = me && i.toggleActions.split(' '),
          J = 'markers' in i ? i.markers : mu.markers,
          ae = Pe ? 0 : parseFloat(Pr(le)['border' + G.p2 + Mo]) || 0,
          T = this,
          M =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(T);
            },
          K = yS(le, Pe, G),
          xe = _S(le, Pe),
          he = 0,
          ke = 0,
          Ne = 0,
          Me = rl(le, G),
          Oe,
          Ee,
          rt,
          yt,
          At,
          ze,
          ot,
          Ut,
          bt,
          W,
          Qt,
          wn,
          cn,
          Xe,
          $t,
          Fn,
          In,
          et,
          Pt,
          lt,
          Lt,
          nn,
          pt,
          An,
          ft,
          Hr,
          Un,
          Nr,
          Sn,
          kn,
          En,
          Ae,
          bn,
          Ot,
          Rt,
          Bt,
          Cn,
          Mr,
          $n;
        if (
          ((T._startClamp = T._endClamp = !1),
          (T._dir = G),
          (C *= 45),
          (T.scroller = le),
          (T.scroll = U ? U.time.bind(U) : Me),
          (yt = Me()),
          (T.vars = i),
          (o = o || i.animation),
          'refreshPriority' in i &&
            ((by = 1), i.refreshPriority === -9999 && (Aa = T)),
          (Se.tweenScroll = Se.tweenScroll || {
            top: l0(le, Xt),
            left: l0(le, zn),
          }),
          (T.tweenTo = Oe = Se.tweenScroll[G.p]),
          (T.scrubDuration = function (V) {
            (bn = Ca(V) && V),
              bn
                ? Ae
                  ? Ae.duration(V)
                  : (Ae = pe.to(o, {
                      ease: 'expo',
                      totalProgress: '+=0',
                      inherit: !1,
                      duration: bn,
                      paused: !0,
                      onComplete: function () {
                        return P && P(T);
                      },
                    }))
                : (Ae && Ae.progress(1).kill(), (Ae = 0));
          }),
          o &&
            ((o.vars.lazy = !1),
            (o._initted && !T.isReverted) ||
              (o.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                o.duration() &&
                o.render(0, !0, !0)),
            (T.animation = o.pause()),
            (o.scrollTrigger = T),
            T.scrubDuration(x),
            (kn = 0),
            h || (h = o.vars.id)),
          F &&
            ((!Sl(F) || F.push) && (F = {snapTo: F}),
            'scrollBehavior' in nt.style &&
              pe.set(Pe ? [nt, cr] : le, {scrollBehavior: 'auto'}),
            Ye.forEach(function (V) {
              return (
                _n(V) &&
                V.target === (Pe ? ct.scrollingElement || cr : le) &&
                (V.smooth = !1)
              );
            }),
            (rt = _n(F.snapTo)
              ? F.snapTo
              : F.snapTo === 'labels'
                ? xS(o)
                : F.snapTo === 'labelsDirectional'
                  ? wS(o)
                  : F.directional !== !1
                    ? function (V, ee) {
                        return Th(F.snapTo)(
                          V,
                          gn() - ke < 500 ? 0 : ee.direction
                        );
                      }
                    : pe.utils.snap(F.snapTo)),
            (Ot = F.duration || {min: 0.1, max: 2}),
            (Ot = Sl(Ot) ? Oa(Ot.min, Ot.max) : Oa(Ot, Ot)),
            (Rt = pe
              .delayedCall(F.delay || bn / 2 || 0.1, function () {
                var V = Me(),
                  ee = gn() - ke < 500,
                  re = Oe.tween;
                if (
                  (ee || Math.abs(T.getVelocity()) < 10) &&
                  !re &&
                  !rc &&
                  he !== V
                ) {
                  var Z = (V - ze) / Xe,
                    se = o && !me ? o.totalProgress() : Z,
                    q = ee ? 0 : ((se - En) / (gn() - Sa)) * 1e3 || 0,
                    fe = pe.utils.clamp(-Z, 1 - Z, (fo(q / 2) * q) / 0.185),
                    Ce = Z + (F.inertia === !1 ? 0 : fe),
                    Le,
                    Ie,
                    we = F,
                    $e = we.onStart,
                    Fe = we.onInterrupt,
                    Et = we.onComplete;
                  if (
                    ((Le = rt(Ce, T)),
                    Ca(Le) || (Le = Ce),
                    (Ie = Math.max(0, Math.round(ze + Le * Xe))),
                    V <= ot && V >= ze && Ie !== V)
                  ) {
                    if (re && !re._initted && re.data <= fo(Ie - V)) return;
                    F.inertia === !1 && (fe = Le - Z),
                      Oe(
                        Ie,
                        {
                          duration: Ot(
                            fo(
                              (Math.max(fo(Ce - se), fo(Le - se)) * 0.185) /
                                q /
                                0.05 || 0
                            )
                          ),
                          ease: F.ease || 'power3',
                          data: fo(Ie - V),
                          onInterrupt: function () {
                            return Rt.restart(!0) && Fe && Fe(T);
                          },
                          onComplete: function () {
                            T.update(),
                              (he = Me()),
                              o &&
                                !me &&
                                (Ae
                                  ? Ae.resetTo(
                                      'totalProgress',
                                      Le,
                                      o._tTime / o._tDur
                                    )
                                  : o.progress(Le)),
                              (kn = En =
                                o && !me ? o.totalProgress() : T.progress),
                              z && z(T),
                              Et && Et(T);
                          },
                        },
                        V,
                        fe * Xe,
                        Ie - V - fe * Xe
                      ),
                      $e && $e(T, Oe.tween);
                  }
                } else T.isActive && he !== V && Rt.restart(!0);
              })
              .pause())),
          h && (Ud[h] = T),
          (v = T.trigger = Kn(v || (y !== !0 && y))),
          ($n = v && v._gsap && v._gsap.stRevert),
          $n && ($n = $n(T)),
          (y = y === !0 ? v : Kn(y)),
          ar(f) && (f = {targets: v, className: f}),
          y &&
            (S === !1 ||
              S === Tr ||
              (S =
                !S &&
                y.parentNode &&
                y.parentNode.style &&
                Pr(y.parentNode).display === 'flex'
                  ? !1
                  : zt),
            (T.pin = y),
            (Ee = pe.core.getCache(y)),
            Ee.spacer
              ? ($t = Ee.pinState)
              : ($ &&
                  (($ = Kn($)),
                  $ && !$.nodeType && ($ = $.current || $.nativeElement),
                  (Ee.spacerIsNative = !!$),
                  $ && (Ee.spacerState = yu($))),
                (Ee.spacer = et = $ || ct.createElement('div')),
                et.classList.add('pin-spacer'),
                h && et.classList.add('pin-spacer-' + h),
                (Ee.pinState = $t = yu(y))),
            i.force3D !== !1 && pe.set(y, {force3D: !0}),
            (T.spacer = et = Ee.spacer),
            (Sn = Pr(y)),
            (An = Sn[S + G.os2]),
            (lt = pe.getProperty(y)),
            (Lt = pe.quickSetter(y, G.a, Yt)),
            od(y, et, Sn),
            (In = yu(y))),
          J)
        ) {
          (wn = Sl(J) ? Jg(J, Zg) : Zg),
            (W = gu('scroller-start', h, le, G, wn, 0)),
            (Qt = gu('scroller-end', h, le, G, wn, 0, W)),
            (Pt = W['offset' + G.op.d2]);
          var D = Kn(Ji(le, 'content') || le);
          (Ut = this.markerStart = gu('start', h, D, G, wn, Pt, 0, U)),
            (bt = this.markerEnd = gu('end', h, D, G, wn, Pt, 0, U)),
            U && (Mr = pe.quickSetter([Ut, bt], G.a, Yt)),
            !ge &&
              !(ri.length && Ji(le, 'fixedMarkers') === !0) &&
              (vS(Pe ? nt : le),
              pe.set([W, Qt], {force3D: !0}),
              (Hr = pe.quickSetter(W, G.a, Yt)),
              (Nr = pe.quickSetter(Qt, G.a, Yt)));
        }
        if (U) {
          var R = U.vars.onUpdate,
            j = U.vars.onUpdateParams;
          U.eventCallback('onUpdate', function () {
            T.update(0, 0, 1), R && R.apply(U, j || []);
          });
        }
        if (
          ((T.previous = function () {
            return Ve[Ve.indexOf(T) - 1];
          }),
          (T.next = function () {
            return Ve[Ve.indexOf(T) + 1];
          }),
          (T.revert = function (V, ee) {
            if (!ee) return T.kill(!0);
            var re = V !== !1 || !T.enabled,
              Z = mn;
            re !== T.isReverted &&
              (re &&
                ((Bt = Math.max(Me(), T.scroll.rec || 0)),
                (Ne = T.progress),
                (Cn = o && o.progress())),
              Ut &&
                [Ut, bt, W, Qt].forEach(function (se) {
                  return (se.style.display = re ? 'none' : 'block');
                }),
              re && ((mn = T), T.update(re)),
              y &&
                (!k || !T.isActive) &&
                (re ? ES(y, et, $t) : od(y, et, Pr(y), ft)),
              re || T.update(re),
              (mn = Z),
              (T.isReverted = re));
          }),
          (T.refresh = function (V, ee, re, Z) {
            if (!((mn || !T.enabled) && !ee)) {
              if (y && V && Dr) {
                en(a, 'scrollEnd', qy);
                return;
              }
              !On && M && M(T),
                (mn = T),
                Oe.tween && !re && (Oe.tween.kill(), (Oe.tween = 0)),
                Ae && Ae.pause(),
                w && o && o.revert({kill: !1}).invalidate(),
                T.isReverted || T.revert(!0, !0),
                (T._subPinOffset = !1);
              var se = K(),
                q = xe(),
                fe = U ? U.duration() : Zr(le, G),
                Ce = Xe <= 0.01,
                Le = 0,
                Ie = Z || 0,
                we = Sl(re) ? re.end : i.end,
                $e = i.endTrigger || v,
                Fe = Sl(re)
                  ? re.start
                  : i.start || (i.start === 0 || !v ? 0 : y ? '0 0' : '0 100%'),
                Et = (T.pinnedContainer =
                  i.pinnedContainer && Kn(i.pinnedContainer, T)),
                Vt = (v && Math.max(0, Ve.indexOf(T))) || 0,
                tt = Vt,
                Ze,
                _t,
                Tn,
                Bn,
                Ue,
                st,
                be,
                vt,
                yr,
                tr,
                Ge,
                rn,
                Kt;
              for (
                J &&
                Sl(re) &&
                ((rn = pe.getProperty(W, G.p)), (Kt = pe.getProperty(Qt, G.p)));
                tt-- > 0;

              )
                (st = Ve[tt]),
                  st.end || st.refresh(0, 1) || (mn = T),
                  (be = st.pin),
                  be &&
                    (be === v || be === y || be === Et) &&
                    !st.isReverted &&
                    (tr || (tr = []), tr.unshift(st), st.revert(!0, !0)),
                  st !== Ve[tt] && (Vt--, tt--);
              for (
                _n(Fe) && (Fe = Fe(T)),
                  Fe = Qg(Fe, 'start', T),
                  ze =
                    r0(
                      Fe,
                      v,
                      se,
                      G,
                      Me(),
                      Ut,
                      W,
                      T,
                      q,
                      ae,
                      ge,
                      fe,
                      U,
                      T._startClamp && '_startClamp'
                    ) || (y ? -0.001 : 0),
                  _n(we) && (we = we(T)),
                  ar(we) &&
                    !we.indexOf('+=') &&
                    (~we.indexOf(' ')
                      ? (we = (ar(Fe) ? Fe.split(' ')[0] : '') + we)
                      : ((Le = Ru(we.substr(2), se)),
                        (we = ar(Fe)
                          ? Fe
                          : (U
                              ? pe.utils.mapRange(
                                  0,
                                  U.duration(),
                                  U.scrollTrigger.start,
                                  U.scrollTrigger.end,
                                  ze
                                )
                              : ze) + Le),
                        ($e = v))),
                  we = Qg(we, 'end', T),
                  ot =
                    Math.max(
                      ze,
                      r0(
                        we || ($e ? '100% 0' : fe),
                        $e,
                        se,
                        G,
                        Me() + Le,
                        bt,
                        Qt,
                        T,
                        q,
                        ae,
                        ge,
                        fe,
                        U,
                        T._endClamp && '_endClamp'
                      )
                    ) || -0.001,
                  Le = 0,
                  tt = Vt;
                tt--;

              )
                (st = Ve[tt]),
                  (be = st.pin),
                  be &&
                    st.start - st._pinPush <= ze &&
                    !U &&
                    st.end > 0 &&
                    ((Ze =
                      st.end -
                      (T._startClamp ? Math.max(0, st.start) : st.start)),
                    ((be === v && st.start - st._pinPush < ze) || be === Et) &&
                      isNaN(Fe) &&
                      (Le += Ze * (1 - st.progress)),
                    be === y && (Ie += Ze));
              if (
                ((ze += Le),
                (ot += Le),
                T._startClamp && (T._startClamp += Le),
                T._endClamp &&
                  !On &&
                  ((T._endClamp = ot || -0.001),
                  (ot = Math.min(ot, Zr(le, G)))),
                (Xe = ot - ze || ((ze -= 0.01) && 0.001)),
                Ce &&
                  (Ne = pe.utils.clamp(0, 1, pe.utils.normalize(ze, ot, Bt))),
                (T._pinPush = Ie),
                Ut &&
                  Le &&
                  ((Ze = {}),
                  (Ze[G.a] = '+=' + Le),
                  Et && (Ze[G.p] = '-=' + Me()),
                  pe.set([Ut, bt], Ze)),
                y && !(Ad && T.end >= Zr(le, G)))
              )
                (Ze = Pr(y)),
                  (Bn = G === Xt),
                  (Tn = Me()),
                  (nn = parseFloat(lt(G.a)) + Ie),
                  !fe &&
                    ot > 1 &&
                    ((Ge = (Pe ? ct.scrollingElement || cr : le).style),
                    (Ge = {
                      style: Ge,
                      value: Ge['overflow' + G.a.toUpperCase()],
                    }),
                    Pe &&
                      Pr(nt)['overflow' + G.a.toUpperCase()] !== 'scroll' &&
                      (Ge.style['overflow' + G.a.toUpperCase()] = 'scroll')),
                  od(y, et, Ze),
                  (In = yu(y)),
                  (_t = yi(y, !0)),
                  (vt = ge && rl(le, Bn ? zn : Xt)()),
                  S
                    ? ((ft = [S + G.os2, Xe + Ie + Yt]),
                      (ft.t = et),
                      (tt = S === zt ? Yu(y, G) + Xe + Ie : 0),
                      tt &&
                        (ft.push(G.d, tt + Yt),
                        et.style.flexBasis !== 'auto' &&
                          (et.style.flexBasis = tt + Yt)),
                      Eo(ft),
                      Et &&
                        Ve.forEach(function (oi) {
                          oi.pin === Et &&
                            oi.vars.pinSpacing !== !1 &&
                            (oi._subPinOffset = !0);
                        }),
                      ge && Me(Bt))
                    : ((tt = Yu(y, G)),
                      tt &&
                        et.style.flexBasis !== 'auto' &&
                        (et.style.flexBasis = tt + Yt)),
                  ge &&
                    ((Ue = {
                      top: _t.top + (Bn ? Tn - ze : vt) + Yt,
                      left: _t.left + (Bn ? vt : Tn - ze) + Yt,
                      boxSizing: 'border-box',
                      position: 'fixed',
                    }),
                    (Ue[Ml] = Ue['max' + Mo] = Math.ceil(_t.width) + Yt),
                    (Ue[Ll] = Ue['max' + Ch] = Math.ceil(_t.height) + Yt),
                    (Ue[Tr] =
                      Ue[Tr + Fa] =
                      Ue[Tr + ja] =
                      Ue[Tr + Ia] =
                      Ue[Tr + za] =
                        '0'),
                    (Ue[zt] = Ze[zt]),
                    (Ue[zt + Fa] = Ze[zt + Fa]),
                    (Ue[zt + ja] = Ze[zt + ja]),
                    (Ue[zt + Ia] = Ze[zt + Ia]),
                    (Ue[zt + za] = Ze[zt + za]),
                    (Fn = TS($t, Ue, k)),
                    On && Me(0)),
                  o
                    ? ((yr = o._initted),
                      td(1),
                      o.render(o.duration(), !0, !0),
                      (pt = lt(G.a) - nn + Xe + Ie),
                      (Un = Math.abs(Xe - pt) > 1),
                      ge && Un && Fn.splice(Fn.length - 2, 2),
                      o.render(0, !0, !0),
                      yr || o.invalidate(!0),
                      o.parent || o.totalTime(o.totalTime()),
                      td(0))
                    : (pt = Xe),
                  Ge &&
                    (Ge.value
                      ? (Ge.style['overflow' + G.a.toUpperCase()] = Ge.value)
                      : Ge.style.removeProperty('overflow-' + G.a));
              else if (v && Me() && !U)
                for (_t = v.parentNode; _t && _t !== nt; )
                  _t._pinOffset &&
                    ((ze -= _t._pinOffset), (ot -= _t._pinOffset)),
                    (_t = _t.parentNode);
              tr &&
                tr.forEach(function (oi) {
                  return oi.revert(!1, !0);
                }),
                (T.start = ze),
                (T.end = ot),
                (yt = At = On ? Bt : Me()),
                !U && !On && (yt < Bt && Me(Bt), (T.scroll.rec = 0)),
                T.revert(!1, !0),
                (ke = gn()),
                Rt && ((he = -1), Rt.restart(!0)),
                (mn = 0),
                o &&
                  me &&
                  (o._initted || Cn) &&
                  o.progress() !== Cn &&
                  o.progress(Cn || 0, !0).render(o.time(), !0, !0),
                (Ce || Ne !== T.progress || U || w || (o && !o._initted)) &&
                  (o &&
                    !me &&
                    o.totalProgress(
                      U && ze < -0.001 && !Ne
                        ? pe.utils.normalize(ze, ot, 0)
                        : Ne,
                      !0
                    ),
                  (T.progress = Ce || (yt - ze) / Xe === Ne ? 0 : Ne)),
                y && S && (et._pinOffset = Math.round(T.progress * pt)),
                Ae && Ae.invalidate(),
                isNaN(rn) ||
                  ((rn -= pe.getProperty(W, G.p)),
                  (Kt -= pe.getProperty(Qt, G.p)),
                  _u(W, G, rn),
                  _u(Ut, G, rn - (Z || 0)),
                  _u(Qt, G, Kt),
                  _u(bt, G, Kt - (Z || 0))),
                Ce && !On && T.update(),
                g && !On && !cn && ((cn = !0), g(T), (cn = !1));
            }
          }),
          (T.getVelocity = function () {
            return ((Me() - At) / (gn() - Sa)) * 1e3 || 0;
          }),
          (T.endAnimation = function () {
            _a(T.callbackAnimation),
              o &&
                (Ae
                  ? Ae.progress(1)
                  : o.paused()
                    ? me || _a(o, T.direction < 0, 1)
                    : _a(o, o.reversed()));
          }),
          (T.labelToScroll = function (V) {
            return (
              (o &&
                o.labels &&
                (ze || T.refresh() || ze) +
                  (o.labels[V] / o.duration()) * Xe) ||
              0
            );
          }),
          (T.getTrailing = function (V) {
            var ee = Ve.indexOf(T),
              re =
                T.direction > 0 ? Ve.slice(0, ee).reverse() : Ve.slice(ee + 1);
            return (
              ar(V)
                ? re.filter(function (Z) {
                    return Z.vars.preventOverlaps === V;
                  })
                : re
            ).filter(function (Z) {
              return T.direction > 0 ? Z.end <= ze : Z.start >= ot;
            });
          }),
          (T.update = function (V, ee, re) {
            if (!(U && !re && !V)) {
              var Z = On === !0 ? Bt : T.scroll(),
                se = V ? 0 : (Z - ze) / Xe,
                q = se < 0 ? 0 : se > 1 ? 1 : se || 0,
                fe = T.progress,
                Ce,
                Le,
                Ie,
                we,
                $e,
                Fe,
                Et,
                Vt;
              if (
                (ee &&
                  ((At = yt),
                  (yt = U ? Me() : Z),
                  F && ((En = kn), (kn = o && !me ? o.totalProgress() : q))),
                C &&
                  y &&
                  !mn &&
                  !fu &&
                  Dr &&
                  (!q && ze < Z + ((Z - At) / (gn() - Sa)) * C
                    ? (q = 1e-4)
                    : q === 1 &&
                      ot > Z + ((Z - At) / (gn() - Sa)) * C &&
                      (q = 0.9999)),
                q !== fe && T.enabled)
              ) {
                if (
                  ((Ce = T.isActive = !!q && q < 1),
                  (Le = !!fe && fe < 1),
                  (Fe = Ce !== Le),
                  ($e = Fe || !!q != !!fe),
                  (T.direction = q > fe ? 1 : -1),
                  (T.progress = q),
                  $e &&
                    !mn &&
                    ((Ie = q && !fe ? 0 : q === 1 ? 1 : fe === 1 ? 2 : 3),
                    me &&
                      ((we =
                        (!Fe && ue[Ie + 1] !== 'none' && ue[Ie + 1]) || ue[Ie]),
                      (Vt =
                        o &&
                        (we === 'complete' || we === 'reset' || we in o)))),
                  X &&
                    (Fe || Vt) &&
                    (Vt || x || !o) &&
                    (_n(X)
                      ? X(T)
                      : T.getTrailing(X).forEach(function (Tn) {
                          return Tn.endAnimation();
                        })),
                  me ||
                    (Ae && !mn && !fu
                      ? (Ae._dp._time - Ae._start !== Ae._time &&
                          Ae.render(Ae._dp._time - Ae._start),
                        Ae.resetTo
                          ? Ae.resetTo('totalProgress', q, o._tTime / o._tDur)
                          : ((Ae.vars.totalProgress = q),
                            Ae.invalidate().restart()))
                      : o && o.totalProgress(q, !!(mn && (ke || V)))),
                  y)
                ) {
                  if ((V && S && (et.style[S + G.os2] = An), !ge))
                    Lt(Ea(nn + pt * q));
                  else if ($e) {
                    if (
                      ((Et = !V && q > fe && ot + 1 > Z && Z + 1 >= Zr(le, G)),
                      k)
                    )
                      if (!V && (Ce || Et)) {
                        var tt = yi(y, !0),
                          Ze = Z - ze;
                        i0(
                          y,
                          nt,
                          tt.top + (G === Xt ? Ze : 0) + Yt,
                          tt.left + (G === Xt ? 0 : Ze) + Yt
                        );
                      } else i0(y, et);
                    Eo(Ce || Et ? Fn : In),
                      (Un && q < 1 && Ce) || Lt(nn + (q === 1 && !Et ? pt : 0));
                  }
                }
                F && !Oe.tween && !mn && !fu && Rt.restart(!0),
                  f &&
                    (Fe || (I && q && (q < 1 || !nd))) &&
                    Qa(f.targets).forEach(function (Tn) {
                      return Tn.classList[Ce || I ? 'add' : 'remove'](
                        f.className
                      );
                    }),
                  c && !me && !V && c(T),
                  $e && !mn
                    ? (me &&
                        (Vt &&
                          (we === 'complete'
                            ? o.pause().totalProgress(1)
                            : we === 'reset'
                              ? o.restart(!0).pause()
                              : we === 'restart'
                                ? o.restart(!0)
                                : o[we]()),
                        c && c(T)),
                      (Fe || !nd) &&
                        (m && Fe && id(T, m),
                        Te[Ie] && id(T, Te[Ie]),
                        I && (q === 1 ? T.kill(!1, 1) : (Te[Ie] = 0)),
                        Fe ||
                          ((Ie = q === 1 ? 1 : 3), Te[Ie] && id(T, Te[Ie]))),
                      H &&
                        !Ce &&
                        Math.abs(T.getVelocity()) > (Ca(H) ? H : 2500) &&
                        (_a(T.callbackAnimation),
                        Ae
                          ? Ae.progress(1)
                          : _a(o, we === 'reverse' ? 1 : !q, 1)))
                    : me && c && !mn && c(T);
              }
              if (Nr) {
                var _t = U ? (Z / U.duration()) * (U._caScrollDist || 0) : Z;
                Hr(_t + (W._isFlipped ? 1 : 0)), Nr(_t);
              }
              Mr && Mr((-Z / U.duration()) * (U._caScrollDist || 0));
            }
          }),
          (T.enable = function (V, ee) {
            T.enabled ||
              ((T.enabled = !0),
              en(le, 'resize', Ta),
              Pe || en(le, 'scroll', ho),
              M && en(a, 'refreshInit', M),
              V !== !1 && ((T.progress = Ne = 0), (yt = At = he = Me())),
              ee !== !1 && T.refresh());
          }),
          (T.getTween = function (V) {
            return V && Oe ? Oe.tween : Ae;
          }),
          (T.setPositions = function (V, ee, re, Z) {
            if (U) {
              var se = U.scrollTrigger,
                q = U.duration(),
                fe = se.end - se.start;
              (V = se.start + (fe * V) / q), (ee = se.start + (fe * ee) / q);
            }
            T.refresh(
              !1,
              !1,
              {
                start: Kg(V, re && !!T._startClamp),
                end: Kg(ee, re && !!T._endClamp),
              },
              Z
            ),
              T.update();
          }),
          (T.adjustPinSpacing = function (V) {
            if (ft && V) {
              var ee = ft.indexOf(G.d) + 1;
              (ft[ee] = parseFloat(ft[ee]) + V + Yt),
                (ft[1] = parseFloat(ft[1]) + V + Yt),
                Eo(ft);
            }
          }),
          (T.disable = function (V, ee) {
            if (
              T.enabled &&
              (V !== !1 && T.revert(!0, !0),
              (T.enabled = T.isActive = !1),
              ee || (Ae && Ae.pause()),
              (Bt = 0),
              Ee && (Ee.uncache = 1),
              M && Zt(a, 'refreshInit', M),
              Rt && (Rt.pause(), Oe.tween && Oe.tween.kill() && (Oe.tween = 0)),
              !Pe)
            ) {
              for (var re = Ve.length; re--; )
                if (Ve[re].scroller === le && Ve[re] !== T) return;
              Zt(le, 'resize', Ta), Pe || Zt(le, 'scroll', ho);
            }
          }),
          (T.kill = function (V, ee) {
            T.disable(V, ee), Ae && !ee && Ae.kill(), h && delete Ud[h];
            var re = Ve.indexOf(T);
            re >= 0 && Ve.splice(re, 1),
              re === Ln && Nu > 0 && Ln--,
              (re = 0),
              Ve.forEach(function (Z) {
                return Z.scroller === T.scroller && (re = 1);
              }),
              re || On || (T.scroll.rec = 0),
              o &&
                ((o.scrollTrigger = null),
                V && o.revert({kill: !1}),
                ee || o.kill()),
              Ut &&
                [Ut, bt, W, Qt].forEach(function (Z) {
                  return Z.parentNode && Z.parentNode.removeChild(Z);
                }),
              Aa === T && (Aa = 0),
              y &&
                (Ee && (Ee.uncache = 1),
                (re = 0),
                Ve.forEach(function (Z) {
                  return Z.pin === y && re++;
                }),
                re || (Ee.spacer = 0)),
              i.onKill && i.onKill(T);
          }),
          Ve.push(T),
          T.enable(!1, !1),
          $n && $n(T),
          o && o.add && !Xe)
        ) {
          var Q = T.update;
          (T.update = function () {
            (T.update = Q), Ye.cache++, ze || ot || T.refresh();
          }),
            pe.delayedCall(0.01, T.update),
            (Xe = 0.01),
            (ze = ot = 0);
        } else T.refresh();
        y && kS();
      }),
      (a.register = function (i) {
        return (
          po ||
            ((pe = i || Wy()),
            Hy() && window.document && a.enable(),
            (po = ka)),
          po
        );
      }),
      (a.defaults = function (i) {
        if (i) for (var o in i) mu[o] = i[o];
        return mu;
      }),
      (a.disable = function (i, o) {
        (ka = 0),
          Ve.forEach(function (c) {
            return c[o ? 'kill' : 'disable'](i);
          }),
          Zt(We, 'wheel', ho),
          Zt(ct, 'scroll', ho),
          clearInterval(cu),
          Zt(ct, 'touchcancel', Gr),
          Zt(nt, 'touchstart', Gr),
          hu(Zt, ct, 'pointerdown,touchstart,mousedown', Gg),
          hu(Zt, ct, 'pointerup,touchend,mouseup', qg),
          Hu.kill(),
          du(Zt);
        for (var s = 0; s < Ye.length; s += 3)
          pu(Zt, Ye[s], Ye[s + 1]), pu(Zt, Ye[s], Ye[s + 2]);
      }),
      (a.enable = function () {
        if (
          ((We = window),
          (ct = document),
          (cr = ct.documentElement),
          (nt = ct.body),
          pe &&
            ((Qa = pe.utils.toArray),
            (Oa = pe.utils.clamp),
            (Id = pe.core.context || Gr),
            (td = pe.core.suppressOverwrites || Gr),
            (wh = We.history.scrollRestoration || 'auto'),
            (bd = We.pageYOffset || 0),
            pe.core.globals('ScrollTrigger', a),
            nt))
        ) {
          (ka = 1),
            (ko = document.createElement('div')),
            (ko.style.height = '100vh'),
            (ko.style.position = 'absolute'),
            e_(),
            gS(),
            Mt.register(pe),
            (a.isTouch = Mt.isTouch),
            (Bi =
              Mt.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Fd = Mt.isTouch === 1),
            en(We, 'wheel', ho),
            (xh = [We, ct, cr, nt]),
            pe.matchMedia
              ? ((a.matchMedia = function (m) {
                  var g = pe.matchMedia(),
                    x;
                  for (x in m) g.add(x, m[x]);
                  return g;
                }),
                pe.addEventListener('matchMediaInit', function () {
                  return Ph();
                }),
                pe.addEventListener('matchMediaRevert', function () {
                  return Jy();
                }),
                pe.addEventListener('matchMedia', function () {
                  Tl(0, 1), Il('matchMedia');
                }),
                pe.matchMedia().add('(orientation: portrait)', function () {
                  return ld(), ld;
                }))
              : console.warn('Requires GSAP 3.11.0 or later'),
            ld(),
            en(ct, 'scroll', ho);
          var i = nt.hasAttribute('style'),
            o = nt.style,
            s = o.borderTopStyle,
            c = pe.core.Animation.prototype,
            f,
            h;
          for (
            c.revert ||
              Object.defineProperty(c, 'revert', {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              o.borderTopStyle = 'solid',
              f = yi(nt),
              Xt.m = Math.round(f.top + Xt.sc()) || 0,
              zn.m = Math.round(f.left + zn.sc()) || 0,
              s ? (o.borderTopStyle = s) : o.removeProperty('border-top-style'),
              i || (nt.setAttribute('style', ''), nt.removeAttribute('style')),
              cu = setInterval(e0, 250),
              pe.delayedCall(0.5, function () {
                return (fu = 0);
              }),
              en(ct, 'touchcancel', Gr),
              en(nt, 'touchstart', Gr),
              hu(en, ct, 'pointerdown,touchstart,mousedown', Gg),
              hu(en, ct, 'pointerup,touchend,mouseup', qg),
              zd = pe.utils.checkPrefix('transform'),
              Mu.push(zd),
              po = gn(),
              Hu = pe.delayedCall(0.2, Tl).pause(),
              mo = [
                ct,
                'visibilitychange',
                function () {
                  var m = We.innerWidth,
                    g = We.innerHeight;
                  ct.hidden
                    ? ((Yg = m), (Xg = g))
                    : (Yg !== m || Xg !== g) && Ta();
                },
                ct,
                'DOMContentLoaded',
                Tl,
                We,
                'load',
                Tl,
                We,
                'resize',
                Ta,
              ],
              du(en),
              Ve.forEach(function (m) {
                return m.enable(0, 1);
              }),
              h = 0;
            h < Ye.length;
            h += 3
          )
            pu(Zt, Ye[h], Ye[h + 1]), pu(Zt, Ye[h], Ye[h + 2]);
        }
      }),
      (a.config = function (i) {
        'limitCallbacks' in i && (nd = !!i.limitCallbacks);
        var o = i.syncInterval;
        (o && clearInterval(cu)) || ((cu = o) && setInterval(e0, o)),
          'ignoreMobileResize' in i &&
            (Fd = a.isTouch === 1 && i.ignoreMobileResize),
          'autoRefreshEvents' in i &&
            (du(Zt) || du(en, i.autoRefreshEvents || 'none'),
            ($y = (i.autoRefreshEvents + '').indexOf('resize') === -1));
      }),
      (a.scrollerProxy = function (i, o) {
        var s = Kn(i),
          c = Ye.indexOf(s),
          f = zl(s);
        ~c && Ye.splice(c, f ? 6 : 2),
          o && (f ? ri.unshift(We, o, nt, o, cr, o) : ri.unshift(s, o));
      }),
      (a.clearMatchMedia = function (i) {
        Ve.forEach(function (o) {
          return o._ctx && o._ctx.query === i && o._ctx.kill(!0, !0);
        });
      }),
      (a.isInViewport = function (i, o, s) {
        var c = (ar(i) ? Kn(i) : i).getBoundingClientRect(),
          f = c[s ? Ml : Ll] * o || 0;
        return s
          ? c.right - f > 0 && c.left + f < We.innerWidth
          : c.bottom - f > 0 && c.top + f < We.innerHeight;
      }),
      (a.positionInViewport = function (i, o, s) {
        ar(i) && (i = Kn(i));
        var c = i.getBoundingClientRect(),
          f = c[s ? Ml : Ll],
          h =
            o == null
              ? f / 2
              : o in Xu
                ? Xu[o] * f
                : ~o.indexOf('%')
                  ? (parseFloat(o) * f) / 100
                  : parseFloat(o) || 0;
        return s ? (c.left + h) / We.innerWidth : (c.top + h) / We.innerHeight;
      }),
      (a.killAll = function (i) {
        if (
          (Ve.slice(0).forEach(function (s) {
            return s.vars.id !== 'ScrollSmoother' && s.kill();
          }),
          i !== !0)
        ) {
          var o = Fl.killAll || [];
          (Fl = {}),
            o.forEach(function (s) {
              return s();
            });
        }
      }),
      a
    );
  })();
Be.version = '3.12.7';
Be.saveStyles = function (a) {
  return a
    ? Qa(a).forEach(function (n) {
        if (n && n.style) {
          var r = or.indexOf(n);
          r >= 0 && or.splice(r, 5),
            or.push(
              n,
              n.style.cssText,
              n.getBBox && n.getAttribute('transform'),
              pe.core.getCache(n),
              Id()
            );
        }
      })
    : or;
};
Be.revert = function (a, n) {
  return Ph(!a, n);
};
Be.create = function (a, n) {
  return new Be(a, n);
};
Be.refresh = function (a) {
  return a ? Ta(!0) : (po || Be.register()) && Tl(!0);
};
Be.update = function (a) {
  return ++Ye.cache && vi(a === !0 ? 2 : 0);
};
Be.clearScrollMemory = Zy;
Be.maxScroll = function (a, n) {
  return Zr(a, n ? zn : Xt);
};
Be.getScrollFunc = function (a, n) {
  return rl(Kn(a), n ? zn : Xt);
};
Be.getById = function (a) {
  return Ud[a];
};
Be.getAll = function () {
  return Ve.filter(function (a) {
    return a.vars.id !== 'ScrollSmoother';
  });
};
Be.isScrolling = function () {
  return !!Dr;
};
Be.snapDirectional = Th;
Be.addEventListener = function (a, n) {
  var r = Fl[a] || (Fl[a] = []);
  ~r.indexOf(n) || r.push(n);
};
Be.removeEventListener = function (a, n) {
  var r = Fl[a],
    i = r && r.indexOf(n);
  i >= 0 && r.splice(i, 1);
};
Be.batch = function (a, n) {
  var r = [],
    i = {},
    o = n.interval || 0.016,
    s = n.batchMax || 1e9,
    c = function (m, g) {
      var x = [],
        v = [],
        y = pe
          .delayedCall(o, function () {
            g(x, v), (x = []), (v = []);
          })
          .pause();
      return function (S) {
        x.length || y.restart(!0),
          x.push(S.trigger),
          v.push(S),
          s <= x.length && y.progress(1);
      };
    },
    f;
  for (f in n)
    i[f] =
      f.substr(0, 2) === 'on' && _n(n[f]) && f !== 'onRefreshInit'
        ? c(f, n[f])
        : n[f];
  return (
    _n(s) &&
      ((s = s()),
      en(Be, 'refresh', function () {
        return (s = n.batchMax());
      })),
    Qa(a).forEach(function (h) {
      var m = {};
      for (f in i) m[f] = i[f];
      (m.trigger = h), r.push(Be.create(m));
    }),
    r
  );
};
var o0 = function (n, r, i, o) {
    return (
      r > o ? n(o) : r < 0 && n(0),
      i > o ? (o - r) / (i - r) : i < 0 ? r / (r - i) : 1
    );
  },
  ad = function a(n, r) {
    r === !0
      ? n.style.removeProperty('touch-action')
      : (n.style.touchAction =
          r === !0
            ? 'auto'
            : r
              ? 'pan-' + r + (Mt.isTouch ? ' pinch-zoom' : '')
              : 'none'),
      n === cr && a(nt, r);
  },
  vu = {auto: 1, scroll: 1},
  RS = function (n) {
    var r = n.event,
      i = n.target,
      o = n.axis,
      s = (r.changedTouches ? r.changedTouches[0] : r).target,
      c = s._gsap || pe.core.getCache(s),
      f = gn(),
      h;
    if (!c._isScrollT || f - c._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== nt &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(vu[(h = Pr(s)).overflowY] || vu[h.overflowX]));

      )
        s = s.parentNode;
      (c._isScroll =
        s &&
        s !== i &&
        !zl(s) &&
        (vu[(h = Pr(s)).overflowY] || vu[h.overflowX])),
        (c._isScrollT = f);
    }
    (c._isScroll || o === 'x') && (r.stopPropagation(), (r._gsapAllow = !0));
  },
  n_ = function (n, r, i, o) {
    return Mt.create({
      target: n,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: r,
      onWheel: (o = o && RS),
      onPress: o,
      onDrag: o,
      onScroll: o,
      onEnable: function () {
        return i && en(ct, Mt.eventTypes[0], s0, !1, !0);
      },
      onDisable: function () {
        return Zt(ct, Mt.eventTypes[0], s0, !0);
      },
    });
  },
  DS = /(input|label|select|textarea)/i,
  a0,
  s0 = function (n) {
    var r = DS.test(n.target.tagName);
    (r || a0) && ((n._gsapAllow = !0), (a0 = r));
  },
  NS = function (n) {
    Sl(n) || (n = {}),
      (n.preventDefault = n.isNormalizer = n.allowClicks = !0),
      n.type || (n.type = 'wheel,touch'),
      (n.debounce = !!n.debounce),
      (n.id = n.id || 'normalizer');
    var r = n,
      i = r.normalizeScrollX,
      o = r.momentum,
      s = r.allowNestedScroll,
      c = r.onRelease,
      f,
      h,
      m = Kn(n.target) || cr,
      g = pe.core.globals().ScrollSmoother,
      x = g && g.get(),
      v =
        Bi &&
        ((n.content && Kn(n.content)) ||
          (x && n.content !== !1 && !x.smooth() && x.content())),
      y = rl(m, Xt),
      S = rl(m, zn),
      w = 1,
      C =
        (Mt.isTouch && We.visualViewport
          ? We.visualViewport.scale * We.visualViewport.width
          : We.outerWidth) / We.innerWidth,
      P = 0,
      z = _n(o)
        ? function () {
            return o(f);
          }
        : function () {
            return o || 2.8;
          },
      I,
      F,
      k = n_(m, n.type, !0, s),
      $ = function () {
        return (F = !1);
      },
      U = Gr,
      H = Gr,
      X = function () {
        (h = Zr(m, Xt)),
          (H = Oa(Bi ? 1 : 0, h)),
          i && (U = Oa(0, Zr(m, zn))),
          (I = Ol);
      },
      G = function () {
        (v._gsap.y = Ea(parseFloat(v._gsap.y) + y.offset) + 'px'),
          (v.style.transform =
            'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
            parseFloat(v._gsap.y) +
            ', 0, 1)'),
          (y.offset = y.cacheID = 0);
      },
      me = function () {
        if (F) {
          requestAnimationFrame($);
          var J = Ea(f.deltaY / 2),
            ae = H(y.v - J);
          if (v && ae !== y.v + y.offset) {
            y.offset = ae - y.v;
            var T = Ea((parseFloat(v && v._gsap.y) || 0) - y.offset);
            (v.style.transform =
              'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
              T +
              ', 0, 1)'),
              (v._gsap.y = T + 'px'),
              (y.cacheID = Ye.cache),
              vi();
          }
          return !0;
        }
        y.offset && G(), (F = !0);
      },
      le,
      Se,
      Pe,
      ge,
      Te = function () {
        X(),
          le.isActive() &&
            le.vars.scrollY > h &&
            (y() > h ? le.progress(1) && y(h) : le.resetTo('scrollY', h));
      };
    return (
      v && pe.set(v, {y: '+=0'}),
      (n.ignoreCheck = function (ue) {
        return (
          (Bi && ue.type === 'touchmove' && me()) ||
          (w > 1.05 && ue.type !== 'touchstart') ||
          f.isGesturing ||
          (ue.touches && ue.touches.length > 1)
        );
      }),
      (n.onPress = function () {
        F = !1;
        var ue = w;
        (w = Ea(((We.visualViewport && We.visualViewport.scale) || 1) / C)),
          le.pause(),
          ue !== w && ad(m, w > 1.01 ? !0 : i ? !1 : 'x'),
          (Se = S()),
          (Pe = y()),
          X(),
          (I = Ol);
      }),
      (n.onRelease = n.onGestureStart =
        function (ue, J) {
          if ((y.offset && G(), !J)) ge.restart(!0);
          else {
            Ye.cache++;
            var ae = z(),
              T,
              M;
            i &&
              ((T = S()),
              (M = T + (ae * 0.05 * -ue.velocityX) / 0.227),
              (ae *= o0(S, T, M, Zr(m, zn))),
              (le.vars.scrollX = U(M))),
              (T = y()),
              (M = T + (ae * 0.05 * -ue.velocityY) / 0.227),
              (ae *= o0(y, T, M, Zr(m, Xt))),
              (le.vars.scrollY = H(M)),
              le.invalidate().duration(ae).play(0.01),
              ((Bi && le.vars.scrollY >= h) || T >= h - 1) &&
                pe.to({}, {onUpdate: Te, duration: ae});
          }
          c && c(ue);
        }),
      (n.onWheel = function () {
        le._ts && le.pause(), gn() - P > 1e3 && ((I = 0), (P = gn()));
      }),
      (n.onChange = function (ue, J, ae, T, M) {
        if (
          (Ol !== I && X(),
          J && i && S(U(T[2] === J ? Se + (ue.startX - ue.x) : S() + J - T[1])),
          ae)
        ) {
          y.offset && G();
          var K = M[2] === ae,
            xe = K ? Pe + ue.startY - ue.y : y() + ae - M[1],
            he = H(xe);
          K && xe !== he && (Pe += he - xe), y(he);
        }
        (ae || J) && vi();
      }),
      (n.onEnable = function () {
        ad(m, i ? !1 : 'x'),
          Be.addEventListener('refresh', Te),
          en(We, 'resize', Te),
          y.smooth &&
            ((y.target.style.scrollBehavior = 'auto'),
            (y.smooth = S.smooth = !1)),
          k.enable();
      }),
      (n.onDisable = function () {
        ad(m, !0),
          Zt(We, 'resize', Te),
          Be.removeEventListener('refresh', Te),
          k.kill();
      }),
      (n.lockAxis = n.lockAxis !== !1),
      (f = new Mt(n)),
      (f.iOS = Bi),
      Bi && !y() && y(1),
      Bi && pe.ticker.add(Gr),
      (ge = f._dc),
      (le = pe.to(f, {
        ease: 'power4',
        paused: !0,
        inherit: !1,
        scrollX: i ? '+=0.1' : '+=0',
        scrollY: '+=0.1',
        modifiers: {
          scrollY: t_(y, y(), function () {
            return le.pause();
          }),
        },
        onUpdate: vi,
        onComplete: ge.vars.onComplete,
      })),
      f
    );
  };
Be.sort = function (a) {
  if (_n(a)) return Ve.sort(a);
  var n = We.pageYOffset || 0;
  return (
    Be.getAll().forEach(function (r) {
      return (r._sortY = r.trigger
        ? n + r.trigger.getBoundingClientRect().top
        : r.start + We.innerHeight);
    }),
    Ve.sort(
      a ||
        function (r, i) {
          return (
            (r.vars.refreshPriority || 0) * -1e6 +
            (r.vars.containerAnimation ? 1e6 : r._sortY) -
            ((i.vars.containerAnimation ? 1e6 : i._sortY) +
              (i.vars.refreshPriority || 0) * -1e6)
          );
        }
    )
  );
};
Be.observe = function (a) {
  return new Mt(a);
};
Be.normalizeScroll = function (a) {
  if (typeof a > 'u') return Mn;
  if (a === !0 && Mn) return Mn.enable();
  if (a === !1) {
    Mn && Mn.kill(), (Mn = a);
    return;
  }
  var n = a instanceof Mt ? a : NS(a);
  return Mn && Mn.target === n.target && Mn.kill(), zl(n.target) && (Mn = n), n;
};
Be.core = {
  _getVelocityProp: jd,
  _inputObserver: n_,
  _scrollers: Ye,
  _proxies: ri,
  bridge: {
    ss: function () {
      Dr || Il('scrollStart'), (Dr = gn());
    },
    ref: function () {
      return mn;
    },
  },
};
Wy() && pe.registerPlugin(Be);
Xa.registerPlugin(Be);
const MS = () => {
    const [a, n] = Y.useState(!0);
    return (
      Y.useEffect(() => {
        let r = window.scrollY;
        return (
          Be.create({
            start: 'top+=10 top',
            onUpdate: (i) => {
              const o = i.scroll();
              o > r ? n(!1) : n(!0), (r = o);
            },
          }),
          () => Be.killAll()
        );
      }, []),
      a
    );
  },
  LS = [
    {label: '기업 소개', link: '/company/profile'},
    {label: '사업 개요', link: '/business'},
    {label: '언론 보도', link: '/company/news'},
    {label: '카탈로그', link: '/company/catalogs'},
  ],
  OS = () => {
    const a = MS();
    return O.jsx('header', {
      className: `fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${a ? 'translate-y-0' : '-translate-y-full'}`,
      children: O.jsxs('div', {
        className: 'mx-10 py-2 flex justify-between items-center',
        children: [
          O.jsx('h1', {
            className: 'text-xl font-bold',
            children: O.jsx(Zu, {
              to: '/',
              children: O.jsx('img', {
                src: '/img/logo.png',
                alt: '(주)비젼라이프 홈페이지 로고',
                className: 'max-w-30',
              }),
            }),
          }),
          O.jsxs('nav', {
            className: 'flex',
            children: [
              O.jsx('h2', {
                className: 'hidden',
                children: '네비게이션 메인 메뉴',
              }),
              O.jsxs('div', {
                className:
                  'container mx-auto flex justify-between items-center p-4',
                children: [
                  O.jsx('ul', {
                    className: 'hidden md:flex space-x-6 gap-10',
                    children: LS.map((n, r) =>
                      O.jsx(
                        'li',
                        {
                          className:
                            'mx-0 text-xl hover:text-black cursor-pointer',
                          children: O.jsx(L0, {to: n.link, children: n.label}),
                        },
                        r
                      )
                    ),
                  }),
                  O.jsx('button', {
                    className:
                      'lg:hidden md:hidden text-black focus:outline-none',
                    children: '☰',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  jS = () =>
    O.jsx('footer', {
      className: 'p-4',
      children: O.jsx('section', {
        className: 'mx-auto text-center',
        children: O.jsx('small', {
          children: 'Copyright ⓒ visionlife. All Rights Reserved.',
        }),
      }),
    });
function zS() {
  return O.jsxs('div', {
    className: 'w-full h-full',
    children: [O.jsx(OS, {}), O.jsx(eh, {}), O.jsx(jS, {})],
  });
}
const $r = ({
    children: a,
    title: n,
    className: r,
    titleClassName: i = 'text-6xl',
    titlePadding: o = 'p-18',
  }) =>
    O.jsxs('section', {
      className: `w-full h-screen ${r}`,
      children: [
        O.jsx('h2', {
          className: `w-full ${o} text-center font-extrabold ${i}`,
          children: n,
        }),
        a,
      ],
    }),
  es = ({title: a, children: n}) =>
    O.jsxs('main', {
      className: 'mt-[calc(4rem+10px)] w-full min-h-screen flex flex-col',
      children: [O.jsx('h1', {className: 'hidden', children: a}), n],
    }),
  FS = '' + new URL('../img/home/p2.jpg', import.meta.url).href,
  IS = () =>
    O.jsx('section', {
      className: 'h-screen',
      children: O.jsxs('figure', {
        className: 'relative w-full h-full',
        children: [
          O.jsx('img', {
            className: 'w-full h-full object-cover',
            src: FS,
            alt: 'Vision Image',
          }),
          O.jsxs('figcaption', {
            className:
              'absolute inset-0 flex flex-col justify-center items-center text-white text-7xl font-bold bg-black/50',
            children: ['Vision !! ', O.jsx('br', {}), ' Dreams Come True !!'],
          }),
        ],
      }),
    });
var r_ = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  u0 = Ki.createContext && Ki.createContext(r_),
  AS = ['attr', 'size', 'title'];
function US(a, n) {
  if (a == null) return {};
  var r = bS(a, n),
    i,
    o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(a);
    for (o = 0; o < s.length; o++)
      (i = s[o]),
        !(n.indexOf(i) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(a, i) &&
          (r[i] = a[i]);
  }
  return r;
}
function bS(a, n) {
  if (a == null) return {};
  var r = {};
  for (var i in a)
    if (Object.prototype.hasOwnProperty.call(a, i)) {
      if (n.indexOf(i) >= 0) continue;
      r[i] = a[i];
    }
  return r;
}
function Qu() {
  return (
    (Qu = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (a[i] = r[i]);
          }
          return a;
        }),
    Qu.apply(this, arguments)
  );
}
function c0(a, n) {
  var r = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(a);
    n &&
      (i = i.filter(function (o) {
        return Object.getOwnPropertyDescriptor(a, o).enumerable;
      })),
      r.push.apply(r, i);
  }
  return r;
}
function Ku(a) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? c0(Object(r), !0).forEach(function (i) {
          $S(a, i, r[i]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r))
        : c0(Object(r)).forEach(function (i) {
            Object.defineProperty(a, i, Object.getOwnPropertyDescriptor(r, i));
          });
  }
  return a;
}
function $S(a, n, r) {
  return (
    (n = BS(n)),
    n in a
      ? Object.defineProperty(a, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (a[n] = r),
    a
  );
}
function BS(a) {
  var n = VS(a, 'string');
  return typeof n == 'symbol' ? n : n + '';
}
function VS(a, n) {
  if (typeof a != 'object' || !a) return a;
  var r = a[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(a, n || 'default');
    if (typeof i != 'object') return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (n === 'string' ? String : Number)(a);
}
function i_(a) {
  return (
    a &&
    a.map((n, r) => Ki.createElement(n.tag, Ku({key: r}, n.attr), i_(n.child)))
  );
}
function Rh(a) {
  return (n) =>
    Ki.createElement(HS, Qu({attr: Ku({}, a.attr)}, n), i_(a.child));
}
function HS(a) {
  var n = (r) => {
    var {attr: i, size: o, title: s} = a,
      c = US(a, AS),
      f = o || r.size || '1em',
      h;
    return (
      r.className && (h = r.className),
      a.className && (h = (h ? h + ' ' : '') + a.className),
      Ki.createElement(
        'svg',
        Qu(
          {stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0'},
          r.attr,
          i,
          c,
          {
            className: h,
            style: Ku(Ku({color: a.color || r.color}, r.style), a.style),
            height: f,
            width: f,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        s && Ki.createElement('title', null, s),
        a.children
      )
    );
  };
  return u0 !== void 0
    ? Ki.createElement(u0.Consumer, null, (r) => n(r))
    : n(r_);
}
function WS(a) {
  return Rh({
    tag: 'svg',
    attr: {viewBox: '0 0 24 24'},
    child: [
      {tag: 'path', attr: {fill: 'none', d: 'M0 0h24v24H0z'}, child: []},
      {
        tag: 'path',
        attr: {
          d: 'M6.05 8.05a7.001 7.001 0 0 0-.02 9.88c1.47-3.4 4.09-6.24 7.36-7.93A15.952 15.952 0 0 0 8 19.32c2.6 1.23 5.8.78 7.95-1.37C19.43 14.47 20 4 20 4S9.53 4.57 6.05 8.05z',
        },
        child: [],
      },
    ],
  })(a);
}
function YS(a) {
  return Rh({
    tag: 'svg',
    attr: {viewBox: '0 0 512 512'},
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z',
        },
        child: [],
      },
    ],
  })(a);
}
function XS(a) {
  return Rh({
    tag: 'svg',
    attr: {viewBox: '0 0 640 512'},
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z',
        },
        child: [],
      },
    ],
  })(a);
}
const sd = ({title: a}) => {
    const n =
        {
          '친환경 기술': O.jsx(WS, {className: 'text-green-500 text-3xl'}),
          '경제력 상승': O.jsx(YS, {className: 'text-blue-500 text-3xl'}),
          '함께사는 사회': O.jsx(XS, {className: 'text-orange-500 text-3xl'}),
        }[a] || null,
      r =
        {
          '친환경 기술': 'bg-green-100',
          '경제력 상승': 'bg-blue-100',
          '함께사는 사회': 'bg-orange-100',
        }[a] || 'bg-gray-200';
    return O.jsxs('li', {
      className: `w-40 h-40 flex flex-col items-center justify-center space-y-2 rounded-full shadow-md ${r}`,
      children: [
        n,
        O.jsx('span', {className: 'text-lg font-semibold', children: a}),
      ],
    });
  },
  l_ = () =>
    O.jsxs(O.Fragment, {
      children: [
        O.jsxs('p', {
          className: 'text-center text-lg',
          children: [
            '열악한 환경에 처한 나라나 개발이 필요한 도상국들의 경제활동에 도움을 주는',
            O.jsx('br', {}),
            '친환경 기술의 보급을 통하여 균형적인 경제력으로',
          ],
        }),
        O.jsxs('p', {
          className: 'my-10 text-center text-lg',
          children: [
            '더불어 함께 행복한 인간 삶을 누릴수 있도록',
            O.jsx('br', {}),
            '공헌하는데 그 사명이 있는 회사입니다.',
          ],
        }),
        O.jsxs('ul', {
          className: 'mx-20 flex justify-between gap-5',
          children: [
            O.jsx(sd, {title: '친환경 기술'}),
            O.jsx(sd, {title: '경제력 상승'}),
            O.jsx(sd, {title: '함께사는 사회'}),
          ],
        }),
      ],
    }),
  QS = () =>
    O.jsxs(es, {
      title: '서비스 페이지 본문',
      children: [
        O.jsx(IS, {}),
        O.jsx($r, {
          title: 'ABOUT COMPANY',
          children: O.jsxs('article', {
            className: 'mt-40',
            children: [
              O.jsx('h3', {
                className: 'p-10 text-center text-3xl font-semibold',
                children: 'ECO FRIENDLY',
              }),
              O.jsx('h4', {
                className: 'mt-10 text-center text-2xl font-semibold',
                children:
                  '미래와 더불어 글로벌 시대를 선도하고 주도하는 비젼라이프 홀딩스',
              }),
              O.jsxs('p', {
                className:
                  'mt-5 text-center text-gray-600 text-lg leading-relaxed',
                children: [
                  '세계 유일의 무폐수 나일론 디지털 나염을 상용화에 성공한 회사로써',
                  O.jsx('br', {}),
                  '전사지를 사용하지 않고 잉크를 4색(C, M, Y, K)만으로 실사를 구현하는',
                  O.jsx('br', {}),
                  '기술을 보유한 친환경 녹색산업혁명의 회사입니다.',
                ],
              }),
            ],
          }),
        }),
        O.jsx($r, {
          title: 'Vision Life We Do',
          className: 'flex flex-col justify-center items-center',
          children: O.jsx(l_, {}),
        }),
        O.jsxs($r, {
          title: 'Contact Us',
          children: [
            O.jsx('p', {className: 'text-center', children: 'Text'}),
            O.jsx('div', {className: 'h-[500px] m-20 border-2'}),
          ],
        }),
      ],
    }),
  KS = [
    {
      id: '1',
      type: 'ISSUE',
      imageUrl: '/img/news/news-image1.jpg',
      title:
        '비전라이프홀딩스, 무폐수 에코잉크 개발 본격화... 친환경 나염산업 발전기대,',
      content: `주식회사 비전라이프홀딩스(회장 최무현)가 22일 DTP(Digital Textile Printing) 방식을 활용한 친환경 무폐수 에코잉크를 개발했다고 밝혔다.비전라이프홀딩스는 15년간 친환경 나염산업 발전을 위해 지속적으로 연구를 이어왔으며, 염색과정에서 발생하는 대기오염과 오폐수 문제를 해결할 수 있는 나염시스템을 제시하고 있다. 지속 가능한 ESG 환경개선 나염기술은 국내외 나염 섬유염색 기업들의 많은 관심을 받고 있다.
비전라이프홀딩스의 차세대 친환경 무폐수 에코잉크는 나염산업의 오랜 숙원인 나일론 섬유에 직접 인쇄가 가능하며, 기존 나염 염색 공정에서 발생하는 대량의 폐수 문제를 근본적으로 해결한다. 이를 통해 수질 환경 오염을 줄일 수 있으며, 복잡한 섬유염색 공정을 단일화된 염색 공정으로 대체할 수 있게 되어 인력 절감, 시간 단축, 비용 절감의 효과를 가져오는 기반을 마련했다.

비전라이프홀딩스는 현재 중국의 DTP 기계 제조업체와 협력하여 기계 전시장을 운영하고 있으며, 다양한 원단에 맞는 샘플링 작업을 진행 중이다. 또한, 친환경 무폐수 에코잉크 기반의 고속출력 시스템과 범용 에코잉크에 대한 국제특허 출원을 진행하고 있다.

비전라이프홀딩스 최무현 회장은 “친환경 무폐수 에코잉크 대량 생산 및 이를 기반으로 한 나염시스템 양산설비를 구축하고 있으며, 현재 해외업체에서 주목하고 있는 상황이다. 향후 해외사업 성장을 위하여 체계적인 영업망 구축에 최선을 다할 것이다” 고 전하면서, “올해 1,000톤(600억) 이상 수출을 목표로 임직원 모두 최선을 다하고 있다”고 강조했다.`,
      author: '박준식',
      publishedDate: '2025-01-22 13:39',
      views: 0,
    },
    {
      id: '2',
      type: 'ISSUE',
      imageUrl: '/img/news/news-image2.jpg',
      title: '비젼라이프홀딩스, 친환경 무폐수 에코잉크 개발',
      content: `[공감신문] 박문선 기자=비젼라이프홀딩스(회장 최무현)는 오늘 22일, DTP(Digital Textile Printing) 방식을 활용한 친환경 무폐수 에코잉크를 개발했다고 밝혔다.

출처 : 공감신문(https://www.gokorea.kr)비젼라이프홀딩스는 15년간 친환경 나염산업 발전을 위해 연구를 지속하며, 염색과정에서 발생하는 대기오염 및 오폐수 문제를 해결하기 위한 나염시스템을 제시하고 있다. 이 기술은 지속 가능한 ESG 환경개선에 기여하고 있다.

이번에 개발된 친환경 무폐수 에코잉크는 나염산업에서 오랜 과제로 여겨졌던 나일론 섬유에 직접 인쇄가 가능하도록 설계되었다. 이를 통해 염색 공정에서 발생하는 대량의 폐수를 줄이고, 복잡한 공정을 단일화하여 인력과 시간, 비용을 절감할 수 있는 기반을 마련했다.

비젼라이프홀딩스는 현재 중국의 DTP 기계 제조업체와 협력해 기계 전시장을 운영 중이며, 다양한 원단에 대한 샘플링 작업을 진행하고 있다. 

최무현 비젼라이프홀딩스 회장은 “올해 1,000톤(600억) 이상의 수출을 목표로 하며, 대량 생산과 양산설비 구축에 전력을 다하고 있다”고 밝혔다.

이어 “해외사업 성장을 위해 체계적인 영업망을 구축할 계획”이라며 해외시장 확장을 위한 포부를 전했다.

출처 : 공감신문(https://www.gokorea.kr)`,
      author: '박문선',
      publishedDate: '2025.01.22 11:27',
      views: 0,
    },
    {
      id: '3',
      type: 'ISSUE',
      imageUrl: '/img/news/news-image3.jpg',
      title:
        '비젼라이프홀딩스, 친환경 무폐수 에코잉크로 나염산업 새로운 기술 선보여',
      content: `| 내외경제TV=유현정 기자 | 비젼라이프홀딩스가 친환경 나염산업의 새로운 기술을 선보였다.

회사는 디지털 텍스타일 프린팅(DTP) 기술을 기반으로 한 무폐수 에코잉크 개발을 완료했다고 발표하며, 나염 공정에서 발생하는 환경 문제를 해결할 지속 가능한 대안을 제시했다.

이번 기술은 기존 염색 공정에서 발생하는 대량의 폐수 문제를 근본적으로 해결하며, 나일론 섬유를 포함한 다양한 소재에 직접 인쇄가 가능하다.

이를 통해 수질 오염을 줄이는 동시에, 복잡한 염색 공정을 단순화해 인력과 시간, 비용을 모두 절감할 수 있는 획기적인 해결책을 선보였다.

비젼라이프홀딩스는 15년간 지속적인 연구와 개발을 통해 친환경 나염 기술의 상용화를 목표로 노력해왔다.

출처 : 내외경제TV(https://www.nbntv.co.kr)중국 DTP 기계 제조 상장사와 협력하여 자체 프린터기를 개발하고, 항저우 샤오싱에 전시장을 운영하며 다양한 원단에 적합한 샘플링 작업을 진행하고 있다.

회사는 친환경 무폐수 에코잉크를 활용한 고속 출력 시스템 및 범용 에코잉크 기술에 대해 국제 특허 출원을 진행하며 글로벌 시장 진출에 속도를 내고 있다고 전했다.

비젼라이프홀딩스 최무현 회장은 “이번 기술은 환경 보호와 생산 효율성을 동시에 달성할 수 있는 혁신적인 해결책”이라 전했다.

출처 : 내외경제TV(https://www.nbntv.co.kr)`,
      author: '유현정',
      publishedDate: '2025.01.22 11:05',
      views: 0,
    },
  ],
  GS = JSON.parse(
    `[{"id":"4","type":"ISSUE","title":"비젼라이프홀딩스, 무폐수 에코잉크 개발 발표","content":"[핸드메이커 김제민 기자] 비젼라이프홀딩스(회장 최무현)가 1월 22일 DTP(Digital Textile Printing) 방식을 활용한 친환경 무폐수 에코잉크 개발을 발표했다.\\n\\n비젼라이프홀딩스는 지난 15년간 지속 가능한 나염산업 발전을 목표로 연구를 이어왔다. 염색과정에서 발생하는 대기오염과 오폐수 문제를 해결할 수 있는나염시스템을 제시했다.\\n\\n이번에 개발된 친환경 무폐수 에코잉크는 나일론 섬유에 직접 인쇄가 가능하고, 기존 공정에서 발생하는 폐수 문제를 근본적으로 해결한다. 비젼라이프홀딩스는 이를 통해 수질 오염을 줄이고 복잡한 공정을 단일화하여 시간과 비용, 인력을 절감하는 데 기여한다.\\n\\n현재 비젼라이프홀딩스는 중국의 DTP 기계 제조업체와 협력해 전시장을 운영하며, 다양한 원단 샘플링 작업을 진행하고 있다. 또한 고속출력 시스템과 범용 에코잉크를 기반으로 한 국제특허를 출원했다.\\n\\n비젼라이프홀딩스 최무현 회장은 “친환경 에코잉크를 기반으로 한 나염시스템 양산설비를 구축하고 있으며, 해외 시장으로부터 선주문이 이어지고 있다”고 말했다. 또한, 그는 “올해 1,000톤(600억) 이상 수출을 목표로 삼고 있으며, 체계적인 영업망을 통해 해외사업 성장에 박차를 가할 것”이라고 강조했다.","author":"김제민","publishedDate":"2025.01.22 11:46","imageUrl":"/img/news/news-image4.jpg","views":0},{"id":"5","type":"ISSUE","title":"[이슈테크] 비젼라이프홀딩스 친환경 잉크 기술, 한국경제TV 외 유수 언론 보도","content":"데일리연합 (SNSJTV. 타임즈M) 곽중휘 기자 | 한국경제TV 등 주요 언론에서 비젼라이프홀딩스의 차세대 친환경 무폐수 에코잉크 기술이 소개되며 섬유 산업의 판도를 바꿀 기술로 평가받고 있다. DTP(Digital Textile Printing) 방식을 활용한 이 기술은 환경 문제 해결과 생산 효율성이라는 두 가지 과제를 동시에 해결하며 글로벌 시장에서 새로운 기준을 제시하고 있다.\\n \\n\\n섬유 염색 공정에서 발생하는 폐수 문제는 환경에 큰 영향을 미쳐 오랫동안 지적받아왔다. 그러나 비젼라이프홀딩스가 개발한 에코잉크 기술은 염색 과정에서 발생하는 폐수를 원천적으로 차단, 환경 오염 문제를 해결한다.\\n \\n\\n이 기술은 나일론 등 다양한 섬유에 적용 가능하며 복잡했던 기존 염색 공정을 단순화해 비용과 인력 절감을 기대할 수 있다. 또한, 프린팅 과정에서도 환경 부담을 최소화하는 혁신적인 접근으로 국내외 섬유 업계의 큰 관심을 받고 있다.비젼라이프홀딩스는 중국, 방글라데시, 인도네시아 등 글로벌 섬유 산업 중심지에서 주목받으며, 항저우 샤오싱에 위치한 기계 전시장에서 다양한 샘플 작업을 진행 중이다. 이는 기술의 상업적 활용 가능성을 확인하려는 해외 기업들의 관심으로 이어지고 있다.\\n \\n\\n최무현 비젼라이프홀딩스 회장은 \\"이미 여러 해외 주요 업체들로부터 선주문을 받고 있다\\"며 \\"올해 1,000톤 이상 수출 목표를 달성하기 위해 최선을 다하고 있다\\"고 밝혔다.\\n \\n\\n업계 전문가들은 비젼라이프홀딩스의 친환경 무폐수 에코잉크 기술이 단순히 섬유 염색 시장뿐만 아니라 디지털 프린팅 시장에도 새로운 비즈니스 기회를 창출할 것으로 내다보고 있다. 환경 보호와 비용 효율성을 모두 실현할 수 있는 기술은 글로벌 경쟁력을 강화할 수 있는 주요 요소로 평가받고 있다.\\n \\n\\n비젼라이프홀딩스는 국제 특허 출원을 통해 기술 보호를 강화하고, 전 세계 섬유 시장으로의 기술 확산을 추진하며 지속 가능한 산업 생태계 구축에 기여할 방침이다.","author":"곽중희","publishedDate":"2025.01.22 16:26:19","imageUrl":"/img/news/news-image5.jpg","views":0},{"id":"7","type":"ISSUE","title":"[팟캐스트/ENG] 염색시장의 판을 바꾼다! \\"폐수가 안나오는 잉크가 있다고?\\" 비젼라이프홀딩스 '에코잉크' 주목 / Revolutionizing Dyeing: VisionLife ’s Zero-Waste Eco Ink / 에코잉크 잉크추천 친환경잉크 디지털프린팅 한국경제TV 유수언론보도","content":"비젼라이프홀딩스, 폐수 없는 친환경 잉크 개발... 한국경제TV 등 유수 언론 보도 유수언론보도 나염산업 판도 바꿀 기술 개발 에코잉크 비젼라이프홀딩스\\n15년 연구 끝에 탄생한 에코잉크... 해외 러브콜 이어져 \\" ESG 시대에도 적합\\"... 환경 보호에 제격 No Water, No Waste: Eco-Friendly Ink Redefines Textile Dyeing\\"\\"From Innovation to Global Impact: VisionLife’s Ink Leads the Green Revolution\\"\\"Saving Water, Saving Time: The Future of Sustainable Dyeing is Here\\"데일리연합 (SNSJTV. 타임즈M) 이슈보도팀 | 한국경제TV 등 주요 언론 매체에서 보도된 비젼라이프홀딩스의 DTP(Digital Textile Printing) 방식을 이용한 차세대 친환경 무폐수 에코잉크 기술이 국내외 섬유 산업의 판도를 바꿀 기술로 평가받고 있다.\\n\\n \\n\\n특히 환경 문제 해결과 생산 효율성 향상이라는 두 가지 측면에서 글로벌 섬유 및 염색 시장의 새로운 기준을 제시할 것으로 기대된다.\\n\\n \\n전 세계 섬유 염색 공정에서 발생하는 폐수 문제는 오랜 기간 환경문제로 지적돼 왔다. 염색 공정 중 대량의 폐수가 발생해 수질 오염을 일으키는 상황에서, 비젼라이프홀딩스가 개발한 무폐수 에코잉크 기술은 근본적으로 폐수 발생을 차단한다.이 기술은 나일론을 포함한 다양한 섬유에 적용 가능하며, 기존의 복잡한 염색 공정을 단일화함으로써 인력과 비용 절감 효과까지 기대된다. 특히 프린팅 과정에서도 환경 부담을 줄이는 기술이라는 점에서 국내외 섬유 업계의 뜨거운 관심을 받고 있다.\\n\\n \\n비젼라이프홀딩스는 현재 중국, 방글라데시, 인도네시아 등 주요 섬유 산업의 중심지에서 지속적으로 주목받고 있다. 항저우 샤오싱에서 운영 중인 기계 전시장에서는 다양한 샘플 작업이 이루어지고 있으며, 이 기술의 상업적 활용 가능성을 확인하려는 해외 기업들의 관심이 이어지고 있다.\\n 최무현 비젼라이프홀딩스 회장은 \\"해외 주요 업체들로부터 선주문이 이어지고 있다\\"며 \\"올해 1,000톤 이상의 수출 목표 달성을 위해 박차를 가하고 있다\\"고 밝혔다.\\n\\n \\n관련 업계에서는 비젼라이프홀딩스의 친환경 무폐수 에코잉크 기술이 단순히 섬유 염색 시장뿐 아니라 디지털 프린팅 시장에도 새로운 비즈니스 기회를 창출할 것으로 보고 있다. 환경 문제와 비용 효율성을 동시에 해결할 수 있는 기술은 글로벌 섬유 산업에서 높은 경쟁력을 갖출 것으로 예상된다.\\n \\n\\n비젼라이프홀딩스는 향후 국제 특허 출원과 함께 전 세계 주요 섬유 시장에 기술 보급을 확대하며, 지속 가능한 산업 생태계를 구축하는 데 기여할 계획이다.","author":"곽중희","publishedDate":"2025.01.22 18:10:09","imageUrl":"/img/news/news-image7.jpg","views":0},{"id":"8","type":"ISSUE","title":"[팟캐스트/ENG] Vision Life Holdings on Korea Economic TV: Transforming Textile Markets / 한국경제TV외 유수언론보도 친환경 나염산업 판도 바꿀 기술 개발 비젼라이프홀딩스","content":"TSN KOREA 스포팅뉴스 (The Sporting News Korea) 최민준 기자 | Vision Life Holdings’ next-generation eco-friendly zero-waste “Eco Ink” technology, utilizing Digital Textile Printing (DTP), is being recognized by major media outlets such as Korea Economic TV as a game-changing innovation for the global textile industry.\\n \\n\\nThis groundbreaking technology is expected to set a new standard in the global textile and dyeing markets by addressing two critical issues: solving environmental problems and improving production efficiency.\\n \\n\\nThe issue of wastewater generated in the global textile dyeing process has long been a significant environmental concern. The conventional dyeing process produces large amounts of wastewater, leading to water pollution. Vision Life Holdings’ zero-waste Eco Ink technology fundamentally prevents wastewater generation.\\n \\n\\nThis technology is applicable to a variety of fabrics, including nylon, and simplifies the complex dyeing process into a single-step procedure. This not only reduces manpower requirements but also lowers production costs. Furthermore, the printing process itself is designed to minimize environmental impact, drawing significant attention from both domestic and international textile industries.\\n \\n\\nVision Life Holdings is currently gaining attention in major textile industry hubs such as China, Bangladesh, and Indonesia. In Hangzhou, Shaoxing, the company operates a machinery showroom where various sample works are being conducted. Overseas companies are showing keen interest in exploring the commercial viability of this technology.\\n \\n\\nChairman Choi Moo-Hyun of Vision Life Holdings stated, “We are receiving pre-orders from major overseas companies and are accelerating efforts to achieve this year’s export goal of over 1,000 tons.”\\n \\n\\nIndustry experts anticipate that Vision Life Holdings’ eco-friendly zero-waste Eco Ink technology will not only revolutionize the textile dyeing market but also create new business opportunities in the digital printing market. By addressing both environmental issues and cost efficiency, this technology is expected to establish strong competitiveness in the global textile industry.\\n \\n\\nLooking ahead, Vision Life Holdings plans to file for international patents and expand the dissemination of its technology to major global textile markets, contributing to the establishment of a sustainable industrial ecosystem.","author":"최민준","publishedDate":"2025.01.23 10:59:25","imageUrl":"/img/news/news-image4.jpg","views":0},{"id":"9","type":"ISSUE","title":"[이슈테크] 비젼라이프홀딩스 친환경 잉크 기술, 한국경제TV 외 유수 언론 보도","content":"데일리연합 (SNSJTV. 타임즈M) 곽중휘 기자 | 한국경제TV 등 주요 언론에서 비젼라이프홀딩스의 차세대 친환경 무폐수 에코잉크 기술이 소개되며 섬유 산업의 판도를 바꿀 기술로 평가받고 있다. DTP(Digital Textile Printing) 방식을 활용한 이 기술은 환경 문제 해결과 생산 효율성이라는 두 가지 과제를 동시에 해결하며 글로벌 시장에서 새로운 기준을 제시하고 있다.\\n \\n\\n섬유 염색 공정에서 발생하는 폐수 문제는 환경에 큰 영향을 미쳐 오랫동안 지적받아왔다. 그러나 비젼라이프홀딩스가 개발한 에코잉크 기술은 염색 과정에서 발생하는 폐수를 원천적으로 차단, 환경 오염 문제를 해결한다.\\n \\n\\n이 기술은 나일론 등 다양한 섬유에 적용 가능하며 복잡했던 기존 염색 공정을 단순화해 비용과 인력 절감을 기대할 수 있다. 또한, 프린팅 과정에서도 환경 부담을 최소화하는 혁신적인 접근으로 국내외 섬유 업계의 큰 관심을 받고 있다.비젼라이프홀딩스는 중국, 방글라데시, 인도네시아 등 글로벌 섬유 산업 중심지에서 주목받으며, 항저우 샤오싱에 위치한 기계 전시장에서 다양한 샘플 작업을 진행 중이다. 이는 기술의 상업적 활용 가능성을 확인하려는 해외 기업들의 관심으로 이어지고 있다.\\n \\n\\n최무현 비젼라이프홀딩스 회장은 \\"이미 여러 해외 주요 업체들로부터 선주문을 받고 있다\\"며 \\"올해 1,000톤 이상 수출 목표를 달성하기 위해 최선을 다하고 있다\\"고 밝혔다.\\n \\n\\n업계 전문가들은 비젼라이프홀딩스의 친환경 무폐수 에코잉크 기술이 단순히 섬유 염색 시장뿐만 아니라 디지털 프린팅 시장에도 새로운 비즈니스 기회를 창출할 것으로 내다보고 있다. 환경 보호와 비용 효율성을 모두 실현할 수 있는 기술은 글로벌 경쟁력을 강화할 수 있는 주요 요소로 평가받고 있다.\\n \\n\\n비젼라이프홀딩스는 국제 특허 출원을 통해 기술 보호를 강화하고, 전 세계 섬유 시장으로의 기술 확산을 추진하며 지속 가능한 산업 생태계 구축에 기여할 방침이다.","author":"곽중희","publishedDate":"2025.01.22 16:26:19","imageUrl":"/img/news/news-image9.jpg","views":0},{"id":"10","type":"ISSUE","title":"[이슈] 한국경제TV 소개된 비젼라이프홀딩스... 염색·디지털 프린팅 시장 판도 바꾼다","content":"TSN KOREA 스포팅뉴스 (The Sporting News Korea) 최민준 기자 | 한국경제TV 등 주요 언론 매체에서 보도된 비젼라이프홀딩스의 DTP(Digital Textile Printing) 방식을 이용한 차세대 친환경 무폐수 에코잉크 기술이 국내외 섬유 산업의 판도를 바꿀 기술로 평가받고 있다.\\n\\n \\n\\n특히 환경 문제 해결과 생산 효율성 향상이라는 두 가지 측면에서 글로벌 섬유 및 염색 시장의 새로운 기준을 제시할 것으로 기대된다.\\n\\n \\n전 세계 섬유 염색 공정에서 발생하는 폐수 문제는 오랜 기간 환경문제로 지적돼 왔다. 염색 공정 중 대량의 폐수가 발생해 수질 오염을 일으키는 상황에서, 비젼라이프홀딩스가 개발한 무폐수 에코잉크 기술은 근본적으로 폐수 발생을 차단한다.\\n \\n\\n이 기술은 나일론을 포함한 다양한 섬유에 적용 가능하며, 기존의 복잡한 염색 공정을 단일화함으로써 인력과 비용 절감 효과까지 기대된다. 특히 프린팅 과정에서도 환경 부담을 줄이는 기술이라는 점에서 국내외 섬유 업계의 뜨거운 관심을 받고 있다.\\n\\n \\n비젼라이프홀딩스는 현재 중국, 방글라데시, 인도네시아 등 주요 섬유 산업의 중심지에서 지속적으로 주목받고 있다. 항저우 샤오싱에서 운영 중인 기계 전시장에서는 다양한 샘플 작업이 이루어지고 있으며, 이 기술의 상업적 활용 가능성을 확인하려는 해외 기업들의 관심이 이어지고 있다.최무현 비젼라이프홀딩스 회장은 \\"해외 주요 업체들로부터 선주문이 이어지고 있다\\"며 \\"올해 1,000톤 이상의 수출 목표 달성을 위해 박차를 가하고 있다\\"고 밝혔다.\\n\\n \\n관련 업계에서는 비젼라이프홀딩스의 친환경 무폐수 에코잉크 기술이 단순히 섬유 염색 시장뿐 아니라 디지털 프린팅 시장에도 새로운 비즈니스 기회를 창출할 것으로 보고 있다. 환경 문제와 비용 효율성을 동시에 해결할 수 있는 기술은 글로벌 섬유 산업에서 높은 경쟁력을 갖출 것으로 예상된다.\\n \\n\\n비젼라이프홀딩스는 향후 국제 특허 출원과 함께 전 세계 주요 섬유 시장에 기술 보급을 확대하며, 지속 가능한 산업 생태계를 구축하는 데 기여할 계획이다.","author":"최민준","publishedDate":"2025.01.22 15:20:14","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"11","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"12","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"13","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"14","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"15","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"16","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"17","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"18","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"19","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"20","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"21","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"22","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"23","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"24","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"25","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"26","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"27","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"28","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0},{"id":"29","type":"ISSUE","title":"더미네이터","content":"더미네이터 기사 내용입니다.","author":"더미네이터","publishedDate":"2025-01-22","imageUrl":"/img/news/news-image10.jpg","views":0}]`
  ),
  Zi = {news: KS, newsList: GS},
  qS = (a, n) => (a.length > n ? a.slice(0, n) + '...' : a),
  JS = () => {
    const a = Gd(),
      n = Zi == null ? void 0 : Zi.news;
    return n.length === 0
      ? O.jsx('div', {
          className: 'text-center text-xl font-semibold text-gray-600',
          children: 'No news available',
        })
      : O.jsxs('section', {
          className: 'max-w-screen-xl mx-auto px-4 py-6',
          children: [
            O.jsx('hr', {className: 'mb-6 border-gray-300'}),
            O.jsx('div', {
              className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
              children: n.map((r) =>
                O.jsxs(
                  'div',
                  {
                    className:
                      'flex flex-col cursor-pointer hover:opacity-80 transition duration-300',
                    onClick: () => a(`/company/news/${r.id}`),
                    children: [
                      O.jsx('img', {
                        src:
                          r.imageUrl || `/img/news/default-image-${r.id}.jpg`,
                        alt: r.title,
                        className: 'w-full h-70 object-cover mb-4',
                      }),
                      O.jsxs('div', {
                        className: 'flex flex-col flex-grow',
                        children: [
                          O.jsx('h3', {
                            className:
                              'text-lg font-semibold text-gray-800 mb-2',
                            children: r.title,
                          }),
                          O.jsx('p', {
                            className: 'text-gray-600 text-sm mb-4 flex-grow',
                            children: qS(r.content, 130),
                          }),
                        ],
                      }),
                    ],
                  },
                  r.id
                )
              ),
            }),
            O.jsx('hr', {className: 'mt-6 border-gray-300'}),
          ],
        });
  },
  ZS = ({currentPage: a, totalPages: n, onPageChange: r}) =>
    n <= 1
      ? null
      : O.jsxs('div', {
          className: 'flex justify-center mt-6 space-x-8',
          children: [
            O.jsx('button', {
              className: `px-8 text-lg ${a === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:underline'}`,
              onClick: () => a > 1 && r(a - 1),
              disabled: a === 1,
              children: '<',
            }),
            Array.from({length: n}, (i, o) => {
              const s = o + 1;
              return O.jsx(
                'button',
                {
                  className: `px-6 text-lg transition-colors ${a === s ? 'font-bold !text-green-500' : 'text-gray-700 hover:text-green-500'}`,
                  onClick: () => r(s),
                  children: s,
                },
                s
              );
            }),
            O.jsx('button', {
              className: `px-8 text-lg ${a === n ? 'opacity-50 cursor-not-allowed' : 'hover:underline'}`,
              onClick: () => a < n && r(a + 1),
              disabled: a === n,
              children: '>',
            }),
          ],
        }),
  f0 = (a, n) => (a.length > n ? a.slice(0, n) + '...' : a),
  e2 = () => {
    const a = Gd(),
      n = (Zi == null ? void 0 : Zi.newsList) ?? [],
      r = 5,
      [i, o] = Y.useState(1),
      s = Math.ceil(n.length / r),
      c = (i - 1) * r,
      f = n.slice(c, c + r);
    return n.length === 0
      ? O.jsx('div', {
          className: 'text-center text-xl font-semibold text-gray-600',
          children: 'No news available',
        })
      : O.jsxs('section', {
          className: 'max-w-screen-lg mx-auto px-4 py-6 space-y-6',
          children: [
            f.map((h, m) =>
              O.jsxs(
                Ki.Fragment,
                {
                  children: [
                    O.jsxs('article', {
                      className:
                        'flex items-start gap-6 cursor-pointer hover:opacity-80 transition duration-300',
                      onClick: () => a(`/company/news/${h.id}`),
                      children: [
                        O.jsx('div', {
                          className: 'w-48 h-36 flex-shrink-0',
                          children: O.jsx('img', {
                            src:
                              h.imageUrl ||
                              `/img/news/default-image-${h.id}.jpg`,
                            alt: h.title,
                            className: 'w-full h-full object-cover',
                          }),
                        }),
                        O.jsxs('div', {
                          className: 'flex flex-col space-y-2',
                          children: [
                            O.jsxs('div', {
                              className: 'flex items-center space-x-2',
                              children: [
                                O.jsx('span', {
                                  className:
                                    'bg-gray-200 text-gray-700 text-sm font-semibold px-2 py-1 rounded-md',
                                  children: h.type,
                                }),
                                O.jsx('h3', {
                                  className: 'text-lg font-bold text-gray-800',
                                  children: f0(h.title, 50),
                                }),
                              ],
                            }),
                            O.jsx('p', {
                              className:
                                'text-sm text-gray-600 leading-relaxed',
                              children: f0(h.content, 150),
                            }),
                            O.jsxs('p', {
                              className: 'text-xs text-gray-500',
                              children: [
                                O.jsx('span', {children: h.author}),
                                ' |',
                                ' ',
                                O.jsx('span', {
                                  children: new Date(
                                    h.publishedDate
                                  ).toLocaleDateString(),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    m < f.length - 1 &&
                      O.jsx('hr', {className: 'my-4 border-gray-300'}),
                  ],
                },
                h.id
              )
            ),
            O.jsx(ZS, {currentPage: i, totalPages: s, onPageChange: o}),
          ],
        });
  },
  t2 = () => {
    const {id: a} = qd();
    return O.jsx(es, {
      title: '뉴스 페이지 본문',
      children: O.jsxs('div', {
        className: 'mx-20',
        children: [
          O.jsx('h1', {
            className:
              'text-4xl font-bold text-gray-900 mb-20 mt-20 text-center w-full',
            children: '언론 보도',
          }),
          a && O.jsx(eh, {}),
          !a && O.jsxs(O.Fragment, {children: [O.jsx(JS, {}), O.jsx(e2, {})]}),
        ],
      }),
    });
  },
  n2 = '미래와 더불어 글로벌 시대를 선도하고 주도하는 (주)비젼라이프홀딩스',
  r2 = [
    '(주)비젼라이프홀딩스는 세계유일의 무폐수 나일론 디지털 나염을 상용화에 성공한 회사로써 전사지를 사용하지 않고 또한 잉크를 4색(C.M.Y.K) 만으로 실사를 구현하는 기술을 보유한 친환경 녹색산업혁명의 회사입니다.',
    '기존의 디지털 나염은 전사지라는 매개체를 사용함으로써 열처리 과정에서의 미스프린팅(MISPRINT)의 단점과 원가상승 요인의 불리함이 존재하였습니다.',
    '또한 생산속도와 결과물의 견뢰도 편차가 심하고 폴리계열을 제외한 재질에는 상용화의 부재가 산업 및 상업계의 숙제였으나 이 모든 문제를 해결하는 당사의 기술은 가히 산업혁명에 견줄만 한 것입니다.',
    '미래와 더불어 글로벌 시대를 선도하고 주도하는 (주)비젼라이프홀딩스는 계속된 연관분야의 연구개발을 통해 국위를 선양하고 환경을 보호하는 기업으로 여러분의 관심과 사랑으로 함께할 것입니다.',
  ],
  d0 = {title: n2, content: r2},
  i2 = [
    {
      id: 1,
      year: '2012',
      event:
        '무폐수 디지털 고속 염색시스템(HTEX)보다 가성비가 우수한 UTEX 시스템을 개발 투자',
    },
    {
      id: 2,
      year: '2013',
      event:
        '초고속 출력 장치 중국 특허 취득. 출원 2009년(한국 특허 취득 근거)',
    },
    {
      id: 3,
      year: '2015',
      event: '(주)비전라이프홀딩스 설립 및 UTEX 사업 개시.',
    },
    {
      id: 4,
      year: '2016~2018',
      event:
        '중국 강소성 섬유연구원, 국가공정실험실 견뢰도 테스트 및 친환경 업무 진행.',
    },
    {
      id: 5,
      year: '2019~2021',
      event: '코로나 시기 UTEX 기술 파생화(피염물 분류별) 진행 및 개발.',
    },
    {
      id: 6,
      year: '2022',
      event: '화섬용(나일론) 잉크 완성 및 세라믹 토너 완성.',
    },
    {
      id: 7,
      year: '2023',
      event: '중국 나일론 잉크 테스트 및 기성 프린터 호환 사업 진행.',
    },
    {
      id: 8,
      year: '2024',
      event:
        '비전라이프 자체 프린터 개발 제작 완성 및 RIP 개발 완성. 자체 RIP 공급으로 기성 프린터 호환 잉크 공급 솔루션 완료. 해상도 프로파일 및 매뉴얼 작업 진행.',
    },
    {
      id: 9,
      year: '2025',
      event: '중국, 인도네시아, 방글라데시, 남미, 업무 개시',
    },
  ];
Xa.registerPlugin(Be);
const l2 = () => {
    const a = Y.useRef(null);
    return (
      Y.useEffect(() => {
        Xa.utils.toArray('.history_item').forEach((r, i) => {
          Xa.fromTo(
            r,
            {opacity: 0, x: i % 2 === 0 ? -100 : 100},
            {
              opacity: 1,
              x: 0,
              duration: 1.2,
              scrollTrigger: {
                trigger: r,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }, []),
      O.jsxs('section', {
        ref: a,
        className: 'w-full min-h-screen max-w-7xl mx-auto',
        children: [
          O.jsx('h2', {
            className: 'text-3xl font-bold text-center mb-10',
            children: '기업 연혁',
          }),
          O.jsx('ul', {
            className: 'flex flex-col space-y-12',
            children: i2.map((n, r) =>
              O.jsxs(
                'li',
                {
                  className: 'history_item flex items-center',
                  children: [
                    O.jsx('div', {
                      className: `w-1/4 text-right pr-5 text-gray-600 font-semibold ${r % 2 === 0 ? 'order-1' : 'order-2'}`,
                      children: n.year,
                    }),
                    O.jsxs('div', {
                      className: `w-3/4 bg-gray-100 p-5 rounded-lg shadow-lg ${r % 2 === 0 ? 'order-2' : 'order-1'}`,
                      children: ['                  ', n.event],
                    }),
                  ],
                },
                n.id
              )
            ),
          }),
        ],
      })
    );
  },
  o2 = () =>
    O.jsx(es, {
      title: '서비스 페이지 본문',
      children: O.jsxs('div', {
        className: 'mx-20',
        children: [
          O.jsx('h3', {className: 'hidden', children: '회사 소개'}),
          O.jsxs('section', {
            className: 'w-full h-screen max-w-7xl mx-auto',
            children: [
              O.jsxs('div', {
                className: 'mt-16 relative',
                children: [
                  O.jsxs('div', {
                    className:
                      'w-1/2 h-full p-10 bg-[#5c504b] text-white absolute right-0',
                    children: [
                      O.jsxs('p', {
                        className: 'mb-3 text-2xl font-bold text-white',
                        children: [
                          '(주)비젼라이프홀딩스는',
                          O.jsx('br', {}),
                          '친환경 녹색 산업혁명의',
                          O.jsx('br', {}),
                          '회사입니다.',
                        ],
                      }),
                      O.jsxs('p', {
                        className: 'text-md',
                        children: [
                          '세계유일의 무폐수 나일론 디지털 나염을 상용화에',
                          O.jsx('br', {}),
                          '성공한 회사로써 전사지를 사용하지 않고 또한',
                          O.jsx('br', {}),
                          '잉크를 4색(C.M.Y.K) 만으로 실사를 구현하는',
                          O.jsx('br', {}),
                          '기술을 보유한 친환경 녹색산업혁명의 회사입니다.',
                        ],
                      }),
                    ],
                  }),
                  O.jsx('img', {
                    className: 'w-full max-h-[350px] pt-12 ',
                    src: '/img/home/p2.jpg',
                    alt: '기업 소개 페이지 히어로 이미지',
                  }),
                ],
              }),
              O.jsxs('article', {
                className: 'mt-10',
                children: [
                  O.jsx('h2', {
                    className: 'mb-2 text-xl font-bold',
                    children: d0.title,
                  }),
                  d0.content.map((a, n) => O.jsx('p', {children: a}, n)),
                ],
              }),
            ],
          }),
          O.jsx($r, {
            title: '(주)비젼 라이프 홀딩스의 비젼은',
            className: 'flex flex-col items-center justify-center',
            titleClassName: 'text-2xl',
            children: O.jsx(l_, {}),
          }),
          O.jsx(l2, {}),
        ],
      }),
    }),
  Bd = ({width: a, height: n, isCircle: r}) => {
    const i = r ? 'rounded-full' : 'rounded';
    return O.jsx('div', {
      className: `${a} ${n} ${i} border-2 flex justify-center items-center`,
      children: 'Image Box',
    });
  },
  h0 = ({href: a, title: n}) =>
    O.jsx('div', {
      className:
        'w-[300px] h-[350px] rounded-lg bg-white shadow-md overflow-hidden',
      children: O.jsx(Zu, {
        to: a,
        children: O.jsxs('div', {
          className: 'w-full h-full p-6 flex flex-col justify-between',
          children: [
            O.jsx('h3', {className: 'text-xl font-bold', children: n}),
            O.jsx('p', {children: '소개'}),
            O.jsx('div', {
              className: 'flex justify-center items-center h-[220px] w-full',
              children: O.jsx(Bd, {
                width: 'w-full',
                height: 'h-full',
                isCircle: !1,
              }),
            }),
          ],
        }),
      }),
    }),
  a2 = () => {
    const n = qd().slug === void 0;
    return O.jsx(es, {
      title: '사업개요 페이지 본문',
      children: O.jsxs('div', {
        className: 'mx-20',
        children: [
          n &&
            O.jsx($r, {
              title: '비젼라이프의 사업을 소개합니다.',
              className: 'flex flex-col justify-center items-center gap-20',
              titleClassName: 'max-w-xl text-4xl leading-tight',
              titlePadding: 'p-0',
              children: O.jsxs('div', {
                className: 'w-full max-w-4xl px-10 flex justify-between',
                children: [
                  O.jsx(h0, {
                    href: '/business/overview/introduction',
                    title: 'Overview',
                  }),
                  O.jsx(h0, {href: '/business/utex/details', title: 'Utex'}),
                ],
              }),
            }),
          O.jsx(eh, {}),
        ],
      }),
    });
  },
  s2 = () =>
    O.jsx(es, {
      title: '카탈로그 페이지 본문',
      children: O.jsx('div', {className: 'mx-20'}),
    }),
  u2 = () => {
    const {id: a} = qd(),
      n =
        Zi.news.find((r) => r.id === a) || Zi.newsList.find((r) => r.id === a);
    return (
      Y.useEffect(() => {
        window.scrollTo(0, 0);
      }, []),
      n
        ? O.jsxs('section', {
            className: 'max-w-screen-lg mx-auto px-6 py-12',
            children: [
              ' ',
              O.jsx('h1', {
                className: 'text-4xl font-bold text-gray-900 mb-8',
                children: n.title,
              }),
              O.jsxs('div', {
                className: 'text-gray-500 text-sm mb-6',
                children: [
                  O.jsx('span', {children: n.author}),
                  ' |',
                  O.jsx('span', {
                    className: 'ml-2',
                    children: new Date(n.publishedDate).toLocaleDateString(),
                  }),
                ],
              }),
              O.jsx('hr', {className: 'border-b-2 border-gray-300 mb-10'}),
              O.jsx('img', {
                src: n.imageUrl,
                alt: n.title,
                className: 'w-full h-100 object-cover mt-8 mb-10',
              }),
              O.jsx('article', {
                className:
                  'text-gray-700 text-lg leading-relaxed whitespace-pre-line mt-10',
                children: n.content,
              }),
              O.jsx('hr', {className: 'mt-12 border-b-2 border-gray-300'}),
            ],
          })
        : O.jsx('div', {
            className:
              'flex items-center justify-center h-screen text-gray-600 text-xl',
            children: '해당 뉴스를 찾을 수 없습니다.',
          })
    );
  },
  c2 =
    '녹색 미래를 위한 비젼라이프의 에코 잉크 친환경 무 폐수 날염을 소개합니다',
  f2 =
    '주식회사 비젼라이프홀딩스는 전 세계 섬유 염색(나염) 시장의 혁신을 주도하는 기업으로, 제4차 산업혁명의 흐름에 맞춰 친환경, 스마트, 디지털 기술을 결합한 무폐수 디지털 나염 고속 출력 시스템(UTEX)을 제공합니다. 당사의 UTEX 시스템 및 전용 잉크는 섬유 염색 공정의 혁신을 이끌며, 원가 절감과 효율성을 극대화하는 차세대 기술을 제공합니다.',
  d2 = [
    '전사지 없이 직접 프린팅',
    '선처리 및 후처리 공정 불필요',
    '나염 원단에 직접 인쇄하여 실사 구현',
    '친환경적이며 경제적인 생산 방식',
  ],
  h2 = [
    '재질의 종류와 관계없이 단일 잉크로 나염 가능',
    '공정 단축을 통해 생산 비용 절감 및 작업 시간 단축',
    '초고속 염색 기술을 활용한 대량 생산 지원',
    '디지털 디자인을 직접 프린팅하여 다품종 소량 생산 가능',
  ],
  xu = {title: c2, description: f2, features: d2, benefits: h2},
  p0 = ({data: a}) =>
    O.jsx('ul', {
      className:
        'w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-300',
      children: a.map((n, r) =>
        O.jsx(
          'li',
          {
            className: 'text-[1rem] leading-8',
            children: O.jsx('p', {children: n}),
          },
          r
        )
      ),
    }),
  p2 = () =>
    O.jsxs($r, {
      title: xu.title,
      className: 'grid place-items-center',
      titleClassName: 'max-w-xl pt-16 text-4xl leading-tight',
      titlePadding: 'p-0',
      children: [
        O.jsx('div', {
          className: 'max-w-2xl',
          children: O.jsx('article', {
            className: 'w-full text-[1rem] leading-8',
            children: O.jsx('p', {children: xu.description}),
          }),
        }),
        O.jsx(p0, {data: xu.features}),
        O.jsx(p0, {data: xu.benefits}),
      ],
    }),
  m2 = 'utex_overview',
  g2 = 'overview',
  y2 = '제품 개요',
  _2 = [
    {
      id: 'utex_desc_1',
      type: 'description',
      content:
        'UTEX 무폐수 섬유 염색 시스템은 기존 염색 공정에서 발생하는 복합적인 문제점을 해결하며, 초고속 염색 속도와 낮은 비용으로 뛰어난 경제성을 제공합니다.',
    },
    {
      id: 'utex_desc_2',
      type: 'description',
      content:
        '전처리 및 후처리 과정이 필요하지 않아 생산 공정을 간소화하며, 다양한 산업 분야에 적용할 수 있는 확장성을 갖춘 혁신적인 솔루션입니다.',
    },
    {
      id: 'utex_desc_3',
      type: 'description',
      content:
        '친환경 공정을 적용하여 폐수를 발생시키지 않으며, 높은 품질의 염색 결과를 보장합니다.',
    },
    {
      id: 'utex_desc_4',
      type: 'description',
      content:
        '염색 불량을 최소화하여 재고 부담을 줄이고, 트렌드 변화에 빠르게 대응할 수 있습니다.',
    },
  ],
  ud = {id: m2, category: g2, title: y2, items: _2},
  v2 = 'utex_features',
  x2 = 'feature',
  w2 = 'UTEX 특장점',
  S2 = [
    {
      id: 'utex_feature_1',
      type: 'feature',
      title: '전사지 불필요',
      content:
        '기존 공정에서 높은 비용을 차지하는 전사지를 사용하지 않아 생산 원가를 절감할 수 있습니다.',
    },
    {
      id: 'utex_feature_2',
      type: 'feature',
      title: '초고속 염색',
      content: '시간당 최대 출력 속도를 통해 대량 생산이 가능합니다.',
    },
    {
      id: 'utex_feature_3',
      type: 'feature',
      title: '선처리 및 후처리 공정 불필요',
      content:
        '독자적인 잉크 제조 기술을 바탕으로 원단 표면에 직접 잉크를 분사하여 흡착되므로 추가적인 가공 없이 즉시 염색이 가능합니다.',
    },
    {
      id: 'utex_feature_4',
      type: 'feature',
      title: '다양한 원단 대응',
      content:
        '일반적인 디지털 프린팅(DTP) 방식으로 염색이 어려운 나일론까지 염색 가능하며, 견뢰도 4.0 이상의 품질을 보장합니다.',
    },
  ],
  cd = {id: v2, category: x2, title: w2, items: S2},
  k2 = 'utex_ink',
  E2 = 'ink',
  C2 = '잉크',
  T2 = [
    {
      id: 'utex_ink_1',
      type: 'ink',
      title: '단일 잉크 시스템',
      content:
        '하나의 잉크로 다양한 원단의 염색이 가능하며, 실사 품질을 유지합니다.',
    },
    {
      id: 'utex_ink_2',
      type: 'ink',
      title: '친환경 기술',
      content:
        '공정 과정에서 오폐수가 발생하지 않으며, 친환경 기준을 충족하는 잉크를 사용합니다.',
    },
    {
      id: 'utex_ink_3',
      type: 'ink',
      title: '4색 잉크 시스템',
      content:
        'C, M, Y, K 4색 잉크를 통해 모든 색상을 구현할 수 있으며, 자연스러운 그라데이션 표현이 가능합니다.',
    },
  ],
  fd = {id: k2, category: E2, title: C2, items: T2},
  P2 = 'utex_comparison',
  R2 = 'comparison',
  D2 = '섬유 염색 공정 비교',
  N2 = [
    {
      id: 'utex_comparison_1',
      type: 'comparison',
      title: '전·후처리 공정이 필요하며 염색 과정에서 폐수가 발생합니다.',
      steps: [
        {id: 'utex_step_1', content: '전처리(원단코팅)'},
        {id: 'utex_step_2', content: '프린팅'},
        {id: 'utex_step_3', content: '후처리(증열 · 수세)'},
      ],
    },
    {
      id: 'utex_comparison_2',
      type: 'comparison',
      title: '전·후처리 공정이 필요 없으며, 폐수가 전혀 발생하지 않습니다.',
      steps: [{id: 'utex_step_4', content: '출력과 동시에 염색 완료'}],
    },
  ],
  dd = {id: P2, category: R2, title: D2, items: N2},
  M2 = 'utex_performance',
  L2 = 'performance',
  O2 = '속도 및 경제성',
  j2 = [
    {
      id: 'utex_performance_1',
      type: 'performance',
      content: '염색 속도 기준: 220 yd²/h',
    },
    {
      id: 'utex_performance_2',
      type: 'performance',
      content:
        '핵심 부품(출력 헤드)을 제외한 나머지 부품을 조립하여 기계를 제작하며, 필요 시 튜닝 작업을 별도로 진행합니다.',
    },
    {
      id: 'utex_performance_3',
      type: 'performance',
      content:
        '세계적으로 가장 큰 시장 점유율을 차지하는 중국의 나염 생산 공장을 현지화하여 설립할 계획입니다.',
    },
    {
      id: 'utex_performance_4',
      type: 'performance',
      content:
        '1대당 기계 제작 및 튜닝 비용은 약 8억 5천만 원 (VAT 별도)이며, 다수의 중국 수출 계약(MOU)을 체결한 상태입니다.',
    },
    {
      id: 'utex_performance_summary',
      type: 'performance',
      content:
        '유텍스는 친환경 섬유 염색 시장에서 선·후처리 공정 없이 단일 공정으로 염색을 완료하는 혁신적인 솔루션으로 자리 잡을 것입니다.',
    },
  ],
  hd = {id: M2, category: L2, title: O2, items: j2},
  z2 = () =>
    O.jsxs(O.Fragment, {
      children: [
        O.jsx('section', {
          className:
            'w-full h-screen flex flex-col justify-center items-center',
          children: O.jsx('h2', {
            className:
              'max-w-[330px] w-full p-0 text-center font-extrabold text-4xl leading-tight',
            children: '비젼라이프의 특허 기기 유텍스를 소개합니다.',
          }),
        }),
        O.jsx(
          $r,
          {
            title: ud.title,
            className: 'flex flex-col justify-center items-center',
            titleClassName: 'max-w-[330px] text-4xl leading-tight',
            titlePadding: 'p-0',
            children: O.jsx('div', {
              className: 'space-y-4 w-full max-w-4xl',
              children: ud.items.map((a) =>
                O.jsx(
                  'div',
                  {
                    children: O.jsx('p', {
                      className: 'text-gray-600',
                      children: a.content,
                    }),
                  },
                  a.id
                )
              ),
            }),
          },
          ud.id
        ),
        O.jsx(
          $r,
          {
            title: cd.title,
            className: 'flex flex-col justify-center items-center',
            titleClassName: 'max-w-[330px] text-4xl leading-tight',
            titlePadding: 'p-0',
            children: O.jsx('div', {
              className: 'space-y-4 w-full max-w-4xl',
              children: cd.items.map((a) =>
                O.jsxs(
                  'div',
                  {
                    children: [
                      O.jsx('h3', {
                        className: 'text-xl font-semibold',
                        children: a.title,
                      }),
                      O.jsx('p', {
                        className: 'text-gray-600',
                        children: a.content,
                      }),
                    ],
                  },
                  a.id
                )
              ),
            }),
          },
          cd.id
        ),
        O.jsx(
          $r,
          {
            title: fd.title,
            className: 'flex flex-col justify-center items-center',
            titleClassName: 'max-w-[330px] text-4xl leading-tight',
            titlePadding: 'p-0',
            children: O.jsx('ul', {
              className:
                'max-w-4xl w-full px-6 flex justify-between items-center',
              children: fd.items.map((a) =>
                O.jsxs(
                  'li',
                  {
                    className: 'text-center',
                    children: [
                      O.jsx(Bd, {
                        width: 'w-[140px]',
                        height: 'h-[140px]',
                        isCircle: !0,
                      }),
                      O.jsx('h3', {
                        className: 'text-lg font-bold',
                        children: a.title,
                      }),
                      O.jsx('p', {
                        className: 'text-gray-600',
                        children: a.content,
                      }),
                    ],
                  },
                  a.id
                )
              ),
            }),
          },
          fd.id
        ),
        O.jsx(
          $r,
          {
            title: dd.title,
            className: 'flex flex-col justify-center items-center',
            titleClassName: 'max-w-[330px] text-4xl leading-tight',
            titlePadding: 'p-0',
            children: O.jsx('div', {
              className: 'space-y-8',
              children: dd.items.map((a) =>
                O.jsxs(
                  'div',
                  {
                    className: 'text-center',
                    children: [
                      O.jsx('h3', {
                        className: 'text-xl font-semibold',
                        children: a.title,
                      }),
                      O.jsx('ul', {
                        className: 'flex justify-center items-center space-x-6',
                        children: a.steps.map((n) =>
                          O.jsxs(
                            'li',
                            {
                              className: 'flex flex-col items-center',
                              children: [
                                O.jsx(Bd, {
                                  width: 'w-[140px]',
                                  height: 'h-[140px]',
                                  isCircle: !0,
                                }),
                                O.jsx('p', {
                                  className: 'text-gray-600',
                                  children: n.content,
                                }),
                              ],
                            },
                            n.id
                          )
                        ),
                      }),
                    ],
                  },
                  a.id
                )
              ),
            }),
          },
          dd.id
        ),
        O.jsx(
          $r,
          {
            title: hd.title,
            className: 'flex flex-col justify-center items-center',
            titleClassName: 'max-w-[330px] text-4xl leading-tight',
            titlePadding: 'p-0',
            children: O.jsx('div', {
              className: 'space-y-4 w-full max-w-4xl',
              children: hd.items.map((a) =>
                O.jsx(
                  'div',
                  {
                    children: O.jsx('p', {
                      className: 'text-gray-600',
                      children: a.content,
                    }),
                  },
                  a.id
                )
              ),
            }),
          },
          hd.id
        ),
      ],
    }),
  F2 = bx([
    {
      path: '/',
      Component: zS,
      children: [
        {path: '/', Component: QS},
        {
          path: '/company/news',
          Component: t2,
          children: [{path: ':id', Component: u2}],
        },
        {path: '/company/profile', Component: o2},
        {
          path: '/business',
          Component: a2,
          children: [
            {path: 'overview/:slug', Component: p2},
            {path: 'utex/:slug', Component: z2},
          ],
        },
        {path: '/company/catalogs', Component: s2},
      ],
    },
  ]);
qv.createRoot(document.getElementById('root')).render(
  O.jsx(Y.StrictMode, {children: O.jsx(Jx, {router: F2})})
);
