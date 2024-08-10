function zp(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const l = Object.getOwnPropertyDescriptor(r, o);
                    l && Object.defineProperty(e, o, l.get ? l : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const l of o)
            if (l.type === "childList")
                for (const i of l.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const l = {};
        return o.integrity && (l.integrity = o.integrity), o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? l.credentials = "include" : o.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const l = n(o);
        fetch(o.href, l)
    }
})();

function sc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var uc = {
        exports: {}
    },
    vl = {},
    ac = {
        exports: {}
    },
    L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar = Symbol.for("react.element"),
    Lp = Symbol.for("react.portal"),
    Mp = Symbol.for("react.fragment"),
    Ap = Symbol.for("react.strict_mode"),
    $p = Symbol.for("react.profiler"),
    Dp = Symbol.for("react.provider"),
    Fp = Symbol.for("react.context"),
    Vp = Symbol.for("react.forward_ref"),
    Up = Symbol.for("react.suspense"),
    bp = Symbol.for("react.memo"),
    Wp = Symbol.for("react.lazy"),
    Au = Symbol.iterator;

function Hp(e) {
    return e === null || typeof e != "object" ? null : (e = Au && e[Au] || e["@@iterator"], typeof e == "function" ? e : null)
}
var cc = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    dc = Object.assign,
    fc = {};

function Fn(e, t, n) {
    this.props = e, this.context = t, this.refs = fc, this.updater = n || cc
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Fn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function pc() {}
pc.prototype = Fn.prototype;

function zs(e, t, n) {
    this.props = e, this.context = t, this.refs = fc, this.updater = n || cc
}
var Ls = zs.prototype = new pc;
Ls.constructor = zs;
dc(Ls, Fn.prototype);
Ls.isPureReactComponent = !0;
var $u = Array.isArray,
    mc = Object.prototype.hasOwnProperty,
    Ms = {
        current: null
    },
    hc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function vc(e, t, n) {
    var r, o = {},
        l = null,
        i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t) mc.call(t, r) && !hc.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) o.children = n;
    else if (1 < s) {
        for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
        o.children = u
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
    return {
        $$typeof: Ar,
        type: e,
        key: l,
        ref: i,
        props: o,
        _owner: Ms.current
    }
}

function Bp(e, t) {
    return {
        $$typeof: Ar,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function As(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ar
}

function Gp(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Du = /\/+/g;

function Ql(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Gp("" + e.key) : t.toString(36)
}

function ko(e, t, n, r, o) {
    var l = typeof e;
    (l === "undefined" || l === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else switch (l) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Ar:
                case Lp:
                    i = !0
            }
    }
    if (i) return i = e, o = o(i), e = r === "" ? "." + Ql(i, 0) : r, $u(o) ? (n = "", e != null && (n = e.replace(Du, "$&/") + "/"), ko(o, t, n, "", function(a) {
        return a
    })) : o != null && (As(o) && (o = Bp(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Du, "$&/") + "/") + e)), t.push(o)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", $u(e))
        for (var s = 0; s < e.length; s++) {
            l = e[s];
            var u = r + Ql(l, s);
            i += ko(l, t, n, u, o)
        } else if (u = Hp(e), typeof u == "function")
            for (e = u.call(e), s = 0; !(l = e.next()).done;) l = l.value, u = r + Ql(l, s++), i += ko(l, t, n, u, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function Zr(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return ko(e, r, "", "", function(l) {
        return t.call(n, l, o++)
    }), r
}

function Kp(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var me = {
        current: null
    },
    Co = {
        transition: null
    },
    Qp = {
        ReactCurrentDispatcher: me,
        ReactCurrentBatchConfig: Co,
        ReactCurrentOwner: Ms
    };

function gc() {
    throw Error("act(...) is not supported in production builds of React.")
}
L.Children = {
    map: Zr,
    forEach: function(e, t, n) {
        Zr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Zr(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Zr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!As(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
L.Component = Fn;
L.Fragment = Mp;
L.Profiler = $p;
L.PureComponent = zs;
L.StrictMode = Ap;
L.Suspense = Up;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qp;
L.act = gc;
L.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = dc({}, e.props),
        o = e.key,
        l = e.ref,
        i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (l = t.ref, i = Ms.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
        for (u in t) mc.call(t, u) && !hc.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        s = Array(u);
        for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
        r.children = s
    }
    return {
        $$typeof: Ar,
        type: e.type,
        key: o,
        ref: l,
        props: r,
        _owner: i
    }
};
L.createContext = function(e) {
    return e = {
        $$typeof: Fp,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Dp,
        _context: e
    }, e.Consumer = e
};
L.createElement = vc;
L.createFactory = function(e) {
    var t = vc.bind(null, e);
    return t.type = e, t
};
L.createRef = function() {
    return {
        current: null
    }
};
L.forwardRef = function(e) {
    return {
        $$typeof: Vp,
        render: e
    }
};
L.isValidElement = As;
L.lazy = function(e) {
    return {
        $$typeof: Wp,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Kp
    }
};
L.memo = function(e, t) {
    return {
        $$typeof: bp,
        type: e,
        compare: t === void 0 ? null : t
    }
};
L.startTransition = function(e) {
    var t = Co.transition;
    Co.transition = {};
    try {
        e()
    } finally {
        Co.transition = t
    }
};
L.unstable_act = gc;
L.useCallback = function(e, t) {
    return me.current.useCallback(e, t)
};
L.useContext = function(e) {
    return me.current.useContext(e)
};
L.useDebugValue = function() {};
L.useDeferredValue = function(e) {
    return me.current.useDeferredValue(e)
};
L.useEffect = function(e, t) {
    return me.current.useEffect(e, t)
};
L.useId = function() {
    return me.current.useId()
};
L.useImperativeHandle = function(e, t, n) {
    return me.current.useImperativeHandle(e, t, n)
};
L.useInsertionEffect = function(e, t) {
    return me.current.useInsertionEffect(e, t)
};
L.useLayoutEffect = function(e, t) {
    return me.current.useLayoutEffect(e, t)
};
L.useMemo = function(e, t) {
    return me.current.useMemo(e, t)
};
L.useReducer = function(e, t, n) {
    return me.current.useReducer(e, t, n)
};
L.useRef = function(e) {
    return me.current.useRef(e)
};
L.useState = function(e) {
    return me.current.useState(e)
};
L.useSyncExternalStore = function(e, t, n) {
    return me.current.useSyncExternalStore(e, t, n)
};
L.useTransition = function() {
    return me.current.useTransition()
};
L.version = "18.3.1";
ac.exports = L;
var x = ac.exports;
const Ye = sc(x),
    Yp = zp({
        __proto__: null,
        default: Ye
    }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xp = x,
    Jp = Symbol.for("react.element"),
    Zp = Symbol.for("react.fragment"),
    qp = Object.prototype.hasOwnProperty,
    em = Xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    tm = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function yc(e, t, n) {
    var r, o = {},
        l = null,
        i = null;
    n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) qp.call(t, r) && !tm.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Jp,
        type: e,
        key: l,
        ref: i,
        props: o,
        _owner: em.current
    }
}
vl.Fragment = Zp;
vl.jsx = yc;
vl.jsxs = yc;
uc.exports = vl;
var v = uc.exports,
    Ni = {},
    wc = {
        exports: {}
    },
    Ie = {},
    xc = {
        exports: {}
    },
    Sc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, R) {
        var O = N.length;
        N.push(R);
        e: for (; 0 < O;) {
            var F = O - 1 >>> 1,
                B = N[F];
            if (0 < o(B, R)) N[F] = R, N[O] = B, O = F;
            else break e
        }
    }

    function n(N) {
        return N.length === 0 ? null : N[0]
    }

    function r(N) {
        if (N.length === 0) return null;
        var R = N[0],
            O = N.pop();
        if (O !== R) {
            N[0] = O;
            e: for (var F = 0, B = N.length, Xr = B >>> 1; F < Xr;) {
                var Vt = 2 * (F + 1) - 1,
                    Kl = N[Vt],
                    Ut = Vt + 1,
                    Jr = N[Ut];
                if (0 > o(Kl, O)) Ut < B && 0 > o(Jr, Kl) ? (N[F] = Jr, N[Ut] = O, F = Ut) : (N[F] = Kl, N[Vt] = O, F = Vt);
                else if (Ut < B && 0 > o(Jr, O)) N[F] = Jr, N[Ut] = O, F = Ut;
                else break e
            }
        }
        return R
    }

    function o(N, R) {
        var O = N.sortIndex - R.sortIndex;
        return O !== 0 ? O : N.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        e.unstable_now = function() {
            return l.now()
        }
    } else {
        var i = Date,
            s = i.now();
        e.unstable_now = function() {
            return i.now() - s
        }
    }
    var u = [],
        a = [],
        d = 1,
        m = null,
        p = 3,
        g = !1,
        w = !1,
        y = !1,
        S = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function h(N) {
        for (var R = n(a); R !== null;) {
            if (R.callback === null) r(a);
            else if (R.startTime <= N) r(a), R.sortIndex = R.expirationTime, t(u, R);
            else break;
            R = n(a)
        }
    }

    function _(N) {
        if (y = !1, h(N), !w)
            if (n(u) !== null) w = !0, ie(k);
            else {
                var R = n(a);
                R !== null && an(_, R.startTime - N)
            }
    }

    function k(N, R) {
        w = !1, y && (y = !1, f(C), C = -1), g = !0;
        var O = p;
        try {
            for (h(R), m = n(u); m !== null && (!(m.expirationTime > R) || N && !Z());) {
                var F = m.callback;
                if (typeof F == "function") {
                    m.callback = null, p = m.priorityLevel;
                    var B = F(m.expirationTime <= R);
                    R = e.unstable_now(), typeof B == "function" ? m.callback = B : m === n(u) && r(u), h(R)
                } else r(u);
                m = n(u)
            }
            if (m !== null) var Xr = !0;
            else {
                var Vt = n(a);
                Vt !== null && an(_, Vt.startTime - R), Xr = !1
            }
            return Xr
        } finally {
            m = null, p = O, g = !1
        }
    }
    var I = !1,
        T = null,
        C = -1,
        D = 5,
        j = -1;

    function Z() {
        return !(e.unstable_now() - j < D)
    }

    function A() {
        if (T !== null) {
            var N = e.unstable_now();
            j = N;
            var R = !0;
            try {
                R = T(!0, N)
            } finally {
                R ? Ge() : (I = !1, T = null)
            }
        } else I = !1
    }
    var Ge;
    if (typeof c == "function") Ge = function() {
        c(A)
    };
    else if (typeof MessageChannel < "u") {
        var mt = new MessageChannel,
            un = mt.port2;
        mt.port1.onmessage = A, Ge = function() {
            un.postMessage(null)
        }
    } else Ge = function() {
        S(A, 0)
    };

    function ie(N) {
        T = N, I || (I = !0, Ge())
    }

    function an(N, R) {
        C = S(function() {
            N(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
        N.callback = null
    }, e.unstable_continueExecution = function() {
        w || g || (w = !0, ie(k))
    }, e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < N ? Math.floor(1e3 / N) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return p
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(N) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var R = 3;
                break;
            default:
                R = p
        }
        var O = p;
        p = R;
        try {
            return N()
        } finally {
            p = O
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(N, R) {
        switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                N = 3
        }
        var O = p;
        p = N;
        try {
            return R()
        } finally {
            p = O
        }
    }, e.unstable_scheduleCallback = function(N, R, O) {
        var F = e.unstable_now();
        switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? F + O : F) : O = F, N) {
            case 1:
                var B = -1;
                break;
            case 2:
                B = 250;
                break;
            case 5:
                B = 1073741823;
                break;
            case 4:
                B = 1e4;
                break;
            default:
                B = 5e3
        }
        return B = O + B, N = {
            id: d++,
            callback: R,
            priorityLevel: N,
            startTime: O,
            expirationTime: B,
            sortIndex: -1
        }, O > F ? (N.sortIndex = O, t(a, N), n(u) === null && N === n(a) && (y ? (f(C), C = -1) : y = !0, an(_, O - F))) : (N.sortIndex = B, t(u, N), w || g || (w = !0, ie(k))), N
    }, e.unstable_shouldYield = Z, e.unstable_wrapCallback = function(N) {
        var R = p;
        return function() {
            var O = p;
            p = R;
            try {
                return N.apply(this, arguments)
            } finally {
                p = O
            }
        }
    }
})(Sc);
xc.exports = Sc;
var nm = xc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rm = x,
    Ne = nm;

function E(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var _c = new Set,
    mr = {};

function on(e, t) {
    In(e, t), In(e + "Capture", t)
}

function In(e, t) {
    for (mr[e] = t, e = 0; e < t.length; e++) _c.add(t[e])
}
var st = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Pi = Object.prototype.hasOwnProperty,
    om = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Fu = {},
    Vu = {};

function lm(e) {
    return Pi.call(Vu, e) ? !0 : Pi.call(Fu, e) ? !1 : om.test(e) ? Vu[e] = !0 : (Fu[e] = !0, !1)
}

function im(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function sm(e, t, n, r) {
    if (t === null || typeof t > "u" || im(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function he(e, t, n, r, o, l, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    le[e] = new he(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    le[t] = new he(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    le[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    le[e] = new he(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    le[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    le[e] = new he(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    le[e] = new he(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    le[e] = new he(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    le[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var $s = /[\-:]([a-z])/g;

function Ds(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace($s, Ds);
    le[t] = new he(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace($s, Ds);
    le[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace($s, Ds);
    le[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    le[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
le.xlinkHref = new he("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    le[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Fs(e, t, n, r) {
    var o = le.hasOwnProperty(t) ? le[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (sm(t, n, o, r) && (n = null), r || o === null ? lm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var pt = rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    qr = Symbol.for("react.element"),
    dn = Symbol.for("react.portal"),
    fn = Symbol.for("react.fragment"),
    Vs = Symbol.for("react.strict_mode"),
    Ti = Symbol.for("react.profiler"),
    Ec = Symbol.for("react.provider"),
    kc = Symbol.for("react.context"),
    Us = Symbol.for("react.forward_ref"),
    Ii = Symbol.for("react.suspense"),
    Ri = Symbol.for("react.suspense_list"),
    bs = Symbol.for("react.memo"),
    yt = Symbol.for("react.lazy"),
    Cc = Symbol.for("react.offscreen"),
    Uu = Symbol.iterator;

function Wn(e) {
    return e === null || typeof e != "object" ? null : (e = Uu && e[Uu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Q = Object.assign,
    Yl;

function qn(e) {
    if (Yl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Yl = t && t[1] || ""
    }
    return `
` + Yl + e
}
var Xl = !1;

function Jl(e, t) {
    if (!e || Xl) return "";
    Xl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (a) {
                    var r = a
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (a) {
                    r = a
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (a) {
                r = a
            }
            e()
        }
    } catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (var o = a.stack.split(`
`), l = r.stack.split(`
`), i = o.length - 1, s = l.length - 1; 1 <= i && 0 <= s && o[i] !== l[s];) s--;
            for (; 1 <= i && 0 <= s; i--, s--)
                if (o[i] !== l[s]) {
                    if (i !== 1 || s !== 1)
                        do
                            if (i--, s--, 0 > s || o[i] !== l[s]) {
                                var u = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            }
                    while (1 <= i && 0 <= s);
                    break
                }
        }
    } finally {
        Xl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? qn(e) : ""
}

function um(e) {
    switch (e.tag) {
        case 5:
            return qn(e.type);
        case 16:
            return qn("Lazy");
        case 13:
            return qn("Suspense");
        case 19:
            return qn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Jl(e.type, !1), e;
        case 11:
            return e = Jl(e.type.render, !1), e;
        case 1:
            return e = Jl(e.type, !0), e;
        default:
            return ""
    }
}

function ji(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case fn:
            return "Fragment";
        case dn:
            return "Portal";
        case Ti:
            return "Profiler";
        case Vs:
            return "StrictMode";
        case Ii:
            return "Suspense";
        case Ri:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case kc:
            return (e.displayName || "Context") + ".Consumer";
        case Ec:
            return (e._context.displayName || "Context") + ".Provider";
        case Us:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case bs:
            return t = e.displayName || null, t !== null ? t : ji(e.type) || "Memo";
        case yt:
            t = e._payload, e = e._init;
            try {
                return ji(e(t))
            } catch {}
    }
    return null
}

function am(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ji(t);
        case 8:
            return t === Vs ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function zt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Nc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function cm(e) {
    var t = Nc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            l = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(i) {
                r = "" + i, l.call(this, i)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function eo(e) {
    e._valueTracker || (e._valueTracker = cm(e))
}

function Pc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Nc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Vo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Oi(e, t) {
    var n = t.checked;
    return Q({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function bu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = zt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Tc(e, t) {
    t = t.checked, t != null && Fs(e, "checked", t, !1)
}

function zi(e, t) {
    Tc(e, t);
    var n = zt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Li(e, t.type, n) : t.hasOwnProperty("defaultValue") && Li(e, t.type, zt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Wu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Li(e, t, n) {
    (t !== "number" || Vo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var er = Array.isArray;

function En(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + zt(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function Mi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
    return Q({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Hu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(E(92));
            if (er(n)) {
                if (1 < n.length) throw Error(E(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: zt(n)
    }
}

function Ic(e, t) {
    var n = zt(t.value),
        r = zt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Bu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Rc(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Ai(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Rc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var to, jc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (to = to || document.createElement("div"), to.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = to.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function hr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var lr = {
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
        strokeWidth: !0
    },
    dm = ["Webkit", "ms", "Moz", "O"];
Object.keys(lr).forEach(function(e) {
    dm.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), lr[t] = lr[e]
    })
});

function Oc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || lr.hasOwnProperty(e) && lr[e] ? ("" + t).trim() : t + "px"
}

function zc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Oc(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var fm = Q({
    menuitem: !0
}, {
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
    wbr: !0
});

function $i(e, t) {
    if (t) {
        if (fm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(E(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(E(62))
    }
}

function Di(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Fi = null;

function Ws(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Vi = null,
    kn = null,
    Cn = null;

function Gu(e) {
    if (e = Fr(e)) {
        if (typeof Vi != "function") throw Error(E(280));
        var t = e.stateNode;
        t && (t = Sl(t), Vi(e.stateNode, e.type, t))
    }
}

function Lc(e) {
    kn ? Cn ? Cn.push(e) : Cn = [e] : kn = e
}

function Mc() {
    if (kn) {
        var e = kn,
            t = Cn;
        if (Cn = kn = null, Gu(e), t)
            for (e = 0; e < t.length; e++) Gu(t[e])
    }
}

function Ac(e, t) {
    return e(t)
}

function $c() {}
var Zl = !1;

function Dc(e, t, n) {
    if (Zl) return e(t, n);
    Zl = !0;
    try {
        return Ac(e, t, n)
    } finally {
        Zl = !1, (kn !== null || Cn !== null) && ($c(), Mc())
    }
}

function vr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Sl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(E(231, t, typeof n));
    return n
}
var Ui = !1;
if (st) try {
    var Hn = {};
    Object.defineProperty(Hn, "passive", {
        get: function() {
            Ui = !0
        }
    }), window.addEventListener("test", Hn, Hn), window.removeEventListener("test", Hn, Hn)
} catch {
    Ui = !1
}

function pm(e, t, n, r, o, l, i, s, u) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a)
    } catch (d) {
        this.onError(d)
    }
}
var ir = !1,
    Uo = null,
    bo = !1,
    bi = null,
    mm = {
        onError: function(e) {
            ir = !0, Uo = e
        }
    };

function hm(e, t, n, r, o, l, i, s, u) {
    ir = !1, Uo = null, pm.apply(mm, arguments)
}

function vm(e, t, n, r, o, l, i, s, u) {
    if (hm.apply(this, arguments), ir) {
        if (ir) {
            var a = Uo;
            ir = !1, Uo = null
        } else throw Error(E(198));
        bo || (bo = !0, bi = a)
    }
}

function ln(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Fc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Ku(e) {
    if (ln(e) !== e) throw Error(E(188))
}

function gm(e) {
    var t = e.alternate;
    if (!t) {
        if (t = ln(e), t === null) throw Error(E(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var l = o.alternate;
        if (l === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === l.child) {
            for (l = o.child; l;) {
                if (l === n) return Ku(o), e;
                if (l === r) return Ku(o), t;
                l = l.sibling
            }
            throw Error(E(188))
        }
        if (n.return !== r.return) n = o, r = l;
        else {
            for (var i = !1, s = o.child; s;) {
                if (s === n) {
                    i = !0, n = o, r = l;
                    break
                }
                if (s === r) {
                    i = !0, r = o, n = l;
                    break
                }
                s = s.sibling
            }
            if (!i) {
                for (s = l.child; s;) {
                    if (s === n) {
                        i = !0, n = l, r = o;
                        break
                    }
                    if (s === r) {
                        i = !0, r = l, n = o;
                        break
                    }
                    s = s.sibling
                }
                if (!i) throw Error(E(189))
            }
        }
        if (n.alternate !== r) throw Error(E(190))
    }
    if (n.tag !== 3) throw Error(E(188));
    return n.stateNode.current === n ? e : t
}

function Vc(e) {
    return e = gm(e), e !== null ? Uc(e) : null
}

function Uc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Uc(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var bc = Ne.unstable_scheduleCallback,
    Qu = Ne.unstable_cancelCallback,
    ym = Ne.unstable_shouldYield,
    wm = Ne.unstable_requestPaint,
    X = Ne.unstable_now,
    xm = Ne.unstable_getCurrentPriorityLevel,
    Hs = Ne.unstable_ImmediatePriority,
    Wc = Ne.unstable_UserBlockingPriority,
    Wo = Ne.unstable_NormalPriority,
    Sm = Ne.unstable_LowPriority,
    Hc = Ne.unstable_IdlePriority,
    gl = null,
    Je = null;

function _m(e) {
    if (Je && typeof Je.onCommitFiberRoot == "function") try {
        Je.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var be = Math.clz32 ? Math.clz32 : Cm,
    Em = Math.log,
    km = Math.LN2;

function Cm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Em(e) / km | 0) | 0
}
var no = 64,
    ro = 4194304;

function tr(e) {
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
            return e
    }
}

function Ho(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        l = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var s = i & ~o;
        s !== 0 ? r = tr(s) : (l &= i, l !== 0 && (r = tr(l)))
    } else i = n & ~o, i !== 0 ? r = tr(i) : l !== 0 && (r = tr(l));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - be(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function Nm(e, t) {
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
            return -1
    }
}

function Pm(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
        var i = 31 - be(l),
            s = 1 << i,
            u = o[i];
        u === -1 ? (!(s & n) || s & r) && (o[i] = Nm(s, t)) : u <= t && (e.expiredLanes |= s), l &= ~s
    }
}

function Wi(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Bc() {
    var e = no;
    return no <<= 1, !(no & 4194240) && (no = 64), e
}

function ql(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function $r(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - be(t), e[t] = n
}

function Tm(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - be(n),
            l = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l
    }
}

function Bs(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - be(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var $ = 0;

function Gc(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Kc, Gs, Qc, Yc, Xc, Hi = !1,
    oo = [],
    Ct = null,
    Nt = null,
    Pt = null,
    gr = new Map,
    yr = new Map,
    xt = [],
    Im = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Yu(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Ct = null;
            break;
        case "dragenter":
        case "dragleave":
            Nt = null;
            break;
        case "mouseover":
        case "mouseout":
            Pt = null;
            break;
        case "pointerover":
        case "pointerout":
            gr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            yr.delete(t.pointerId)
    }
}

function Bn(e, t, n, r, o, l) {
    return e === null || e.nativeEvent !== l ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o]
    }, t !== null && (t = Fr(t), t !== null && Gs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function Rm(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return Ct = Bn(Ct, e, t, n, r, o), !0;
        case "dragenter":
            return Nt = Bn(Nt, e, t, n, r, o), !0;
        case "mouseover":
            return Pt = Bn(Pt, e, t, n, r, o), !0;
        case "pointerover":
            var l = o.pointerId;
            return gr.set(l, Bn(gr.get(l) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return l = o.pointerId, yr.set(l, Bn(yr.get(l) || null, e, t, n, r, o)), !0
    }
    return !1
}

function Jc(e) {
    var t = Bt(e.target);
    if (t !== null) {
        var n = ln(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Fc(n), t !== null) {
                    e.blockedOn = t, Xc(e.priority, function() {
                        Qc(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function No(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Bi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Fi = r, n.target.dispatchEvent(r), Fi = null
        } else return t = Fr(n), t !== null && Gs(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Xu(e, t, n) {
    No(e) && n.delete(t)
}

function jm() {
    Hi = !1, Ct !== null && No(Ct) && (Ct = null), Nt !== null && No(Nt) && (Nt = null), Pt !== null && No(Pt) && (Pt = null), gr.forEach(Xu), yr.forEach(Xu)
}

function Gn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Hi || (Hi = !0, Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, jm)))
}

function wr(e) {
    function t(o) {
        return Gn(o, e)
    }
    if (0 < oo.length) {
        Gn(oo[0], e);
        for (var n = 1; n < oo.length; n++) {
            var r = oo[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ct !== null && Gn(Ct, e), Nt !== null && Gn(Nt, e), Pt !== null && Gn(Pt, e), gr.forEach(t), yr.forEach(t), n = 0; n < xt.length; n++) r = xt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < xt.length && (n = xt[0], n.blockedOn === null);) Jc(n), n.blockedOn === null && xt.shift()
}
var Nn = pt.ReactCurrentBatchConfig,
    Bo = !0;

function Om(e, t, n, r) {
    var o = $,
        l = Nn.transition;
    Nn.transition = null;
    try {
        $ = 1, Ks(e, t, n, r)
    } finally {
        $ = o, Nn.transition = l
    }
}

function zm(e, t, n, r) {
    var o = $,
        l = Nn.transition;
    Nn.transition = null;
    try {
        $ = 4, Ks(e, t, n, r)
    } finally {
        $ = o, Nn.transition = l
    }
}

function Ks(e, t, n, r) {
    if (Bo) {
        var o = Bi(e, t, n, r);
        if (o === null) ai(e, t, r, Go, n), Yu(e, r);
        else if (Rm(o, e, t, n, r)) r.stopPropagation();
        else if (Yu(e, r), t & 4 && -1 < Im.indexOf(e)) {
            for (; o !== null;) {
                var l = Fr(o);
                if (l !== null && Kc(l), l = Bi(e, t, n, r), l === null && ai(e, t, r, Go, n), l === o) break;
                o = l
            }
            o !== null && r.stopPropagation()
        } else ai(e, t, r, null, n)
    }
}
var Go = null;

function Bi(e, t, n, r) {
    if (Go = null, e = Ws(r), e = Bt(e), e !== null)
        if (t = ln(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Fc(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Go = e, null
}

function Zc(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (xm()) {
                case Hs:
                    return 1;
                case Wc:
                    return 4;
                case Wo:
                case Sm:
                    return 16;
                case Hc:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Et = null,
    Qs = null,
    Po = null;

function qc() {
    if (Po) return Po;
    var e, t = Qs,
        n = t.length,
        r, o = "value" in Et ? Et.value : Et.textContent,
        l = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
    return Po = o.slice(e, 1 < r ? 1 - r : void 0)
}

function To(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function lo() {
    return !0
}

function Ju() {
    return !1
}

function Re(e) {
    function t(n, r, o, l, i) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
        for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
        return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? lo : Ju, this.isPropagationStopped = Ju, this
    }
    return Q(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = lo)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = lo)
        },
        persist: function() {},
        isPersistent: lo
    }), t
}
var Vn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Ys = Re(Vn),
    Dr = Q({}, Vn, {
        view: 0,
        detail: 0
    }),
    Lm = Re(Dr),
    ei, ti, Kn, yl = Q({}, Dr, {
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
        getModifierState: Xs,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Kn && (Kn && e.type === "mousemove" ? (ei = e.screenX - Kn.screenX, ti = e.screenY - Kn.screenY) : ti = ei = 0, Kn = e), ei)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : ti
        }
    }),
    Zu = Re(yl),
    Mm = Q({}, yl, {
        dataTransfer: 0
    }),
    Am = Re(Mm),
    $m = Q({}, Dr, {
        relatedTarget: 0
    }),
    ni = Re($m),
    Dm = Q({}, Vn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Fm = Re(Dm),
    Vm = Q({}, Vn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Um = Re(Vm),
    bm = Q({}, Vn, {
        data: 0
    }),
    qu = Re(bm),
    Wm = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Hm = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Bm = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Gm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Bm[e]) ? !!t[e] : !1
}

function Xs() {
    return Gm
}
var Km = Q({}, Dr, {
        key: function(e) {
            if (e.key) {
                var t = Wm[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = To(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hm[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Xs,
        charCode: function(e) {
            return e.type === "keypress" ? To(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? To(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Qm = Re(Km),
    Ym = Q({}, yl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    ea = Re(Ym),
    Xm = Q({}, Dr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Xs
    }),
    Jm = Re(Xm),
    Zm = Q({}, Vn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    qm = Re(Zm),
    eh = Q({}, yl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    th = Re(eh),
    nh = [9, 13, 27, 32],
    Js = st && "CompositionEvent" in window,
    sr = null;
st && "documentMode" in document && (sr = document.documentMode);
var rh = st && "TextEvent" in window && !sr,
    ed = st && (!Js || sr && 8 < sr && 11 >= sr),
    ta = " ",
    na = !1;

function td(e, t) {
    switch (e) {
        case "keyup":
            return nh.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function nd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var pn = !1;

function oh(e, t) {
    switch (e) {
        case "compositionend":
            return nd(t);
        case "keypress":
            return t.which !== 32 ? null : (na = !0, ta);
        case "textInput":
            return e = t.data, e === ta && na ? null : e;
        default:
            return null
    }
}

function lh(e, t) {
    if (pn) return e === "compositionend" || !Js && td(e, t) ? (e = qc(), Po = Qs = Et = null, pn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return ed && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var ih = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
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
    week: !0
};

function ra(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ih[e.type] : t === "textarea"
}

function rd(e, t, n, r) {
    Lc(r), t = Ko(t, "onChange"), 0 < t.length && (n = new Ys("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var ur = null,
    xr = null;

function sh(e) {
    md(e, 0)
}

function wl(e) {
    var t = vn(e);
    if (Pc(t)) return e
}

function uh(e, t) {
    if (e === "change") return t
}
var od = !1;
if (st) {
    var ri;
    if (st) {
        var oi = "oninput" in document;
        if (!oi) {
            var oa = document.createElement("div");
            oa.setAttribute("oninput", "return;"), oi = typeof oa.oninput == "function"
        }
        ri = oi
    } else ri = !1;
    od = ri && (!document.documentMode || 9 < document.documentMode)
}

function la() {
    ur && (ur.detachEvent("onpropertychange", ld), xr = ur = null)
}

function ld(e) {
    if (e.propertyName === "value" && wl(xr)) {
        var t = [];
        rd(t, xr, e, Ws(e)), Dc(sh, t)
    }
}

function ah(e, t, n) {
    e === "focusin" ? (la(), ur = t, xr = n, ur.attachEvent("onpropertychange", ld)) : e === "focusout" && la()
}

function ch(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return wl(xr)
}

function dh(e, t) {
    if (e === "click") return wl(t)
}

function fh(e, t) {
    if (e === "input" || e === "change") return wl(t)
}

function ph(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var He = typeof Object.is == "function" ? Object.is : ph;

function Sr(e, t) {
    if (He(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Pi.call(t, o) || !He(e[o], t[o])) return !1
    }
    return !0
}

function ia(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function sa(e, t) {
    var n = ia(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = ia(n)
    }
}

function id(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? id(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function sd() {
    for (var e = window, t = Vo(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Vo(e.document)
    }
    return t
}

function Zs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function mh(e) {
    var t = sd(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && id(n.ownerDocument.documentElement, n)) {
        if (r !== null && Zs(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    l = Math.min(r.start, o);
                r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = sa(n, l);
                var i = sa(n, r);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var hh = st && "documentMode" in document && 11 >= document.documentMode,
    mn = null,
    Gi = null,
    ar = null,
    Ki = !1;

function ua(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ki || mn == null || mn !== Vo(r) || (r = mn, "selectionStart" in r && Zs(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), ar && Sr(ar, r) || (ar = r, r = Ko(Gi, "onSelect"), 0 < r.length && (t = new Ys("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = mn)))
}

function io(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var hn = {
        animationend: io("Animation", "AnimationEnd"),
        animationiteration: io("Animation", "AnimationIteration"),
        animationstart: io("Animation", "AnimationStart"),
        transitionend: io("Transition", "TransitionEnd")
    },
    li = {},
    ud = {};
st && (ud = document.createElement("div").style, "AnimationEvent" in window || (delete hn.animationend.animation, delete hn.animationiteration.animation, delete hn.animationstart.animation), "TransitionEvent" in window || delete hn.transitionend.transition);

function xl(e) {
    if (li[e]) return li[e];
    if (!hn[e]) return e;
    var t = hn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in ud) return li[e] = t[n];
    return e
}
var ad = xl("animationend"),
    cd = xl("animationiteration"),
    dd = xl("animationstart"),
    fd = xl("transitionend"),
    pd = new Map,
    aa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function At(e, t) {
    pd.set(e, t), on(t, [e])
}
for (var ii = 0; ii < aa.length; ii++) {
    var si = aa[ii],
        vh = si.toLowerCase(),
        gh = si[0].toUpperCase() + si.slice(1);
    At(vh, "on" + gh)
}
At(ad, "onAnimationEnd");
At(cd, "onAnimationIteration");
At(dd, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(fd, "onTransitionEnd");
In("onMouseEnter", ["mouseout", "mouseover"]);
In("onMouseLeave", ["mouseout", "mouseover"]);
In("onPointerEnter", ["pointerout", "pointerover"]);
In("onPointerLeave", ["pointerout", "pointerover"]);
on("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
on("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
on("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
on("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
on("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
on("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    yh = new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));

function ca(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, vm(r, t, void 0, e), e.currentTarget = null
}

function md(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var l = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var s = r[i],
                        u = s.instance,
                        a = s.currentTarget;
                    if (s = s.listener, u !== l && o.isPropagationStopped()) break e;
                    ca(o, s, a), l = u
                } else
                    for (i = 0; i < r.length; i++) {
                        if (s = r[i], u = s.instance, a = s.currentTarget, s = s.listener, u !== l && o.isPropagationStopped()) break e;
                        ca(o, s, a), l = u
                    }
        }
    }
    if (bo) throw e = bi, bo = !1, bi = null, e
}

function b(e, t) {
    var n = t[Zi];
    n === void 0 && (n = t[Zi] = new Set);
    var r = e + "__bubble";
    n.has(r) || (hd(t, e, 2, !1), n.add(r))
}

function ui(e, t, n) {
    var r = 0;
    t && (r |= 4), hd(n, e, r, t)
}
var so = "_reactListening" + Math.random().toString(36).slice(2);

function _r(e) {
    if (!e[so]) {
        e[so] = !0, _c.forEach(function(n) {
            n !== "selectionchange" && (yh.has(n) || ui(n, !1, e), ui(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[so] || (t[so] = !0, ui("selectionchange", !1, t))
    }
}

function hd(e, t, n, r) {
    switch (Zc(t)) {
        case 1:
            var o = Om;
            break;
        case 4:
            o = zm;
            break;
        default:
            o = Ks
    }
    n = o.bind(null, t, n, e), o = void 0, !Ui || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function ai(e, t, n, r, o) {
    var l = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var s = r.stateNode.containerInfo;
            if (s === o || s.nodeType === 8 && s.parentNode === o) break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var u = i.tag;
                    if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o)) return;
                    i = i.return
                }
            for (; s !== null;) {
                if (i = Bt(s), i === null) return;
                if (u = i.tag, u === 5 || u === 6) {
                    r = l = i;
                    continue e
                }
                s = s.parentNode
            }
        }
        r = r.return
    }
    Dc(function() {
        var a = l,
            d = Ws(n),
            m = [];
        e: {
            var p = pd.get(e);
            if (p !== void 0) {
                var g = Ys,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (To(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        g = Qm;
                        break;
                    case "focusin":
                        w = "focus", g = ni;
                        break;
                    case "focusout":
                        w = "blur", g = ni;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = ni;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = Zu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = Am;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = Jm;
                        break;
                    case ad:
                    case cd:
                    case dd:
                        g = Fm;
                        break;
                    case fd:
                        g = qm;
                        break;
                    case "scroll":
                        g = Lm;
                        break;
                    case "wheel":
                        g = th;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = Um;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = ea
                }
                var y = (t & 4) !== 0,
                    S = !y && e === "scroll",
                    f = y ? p !== null ? p + "Capture" : null : p;
                y = [];
                for (var c = a, h; c !== null;) {
                    h = c;
                    var _ = h.stateNode;
                    if (h.tag === 5 && _ !== null && (h = _, f !== null && (_ = vr(c, f), _ != null && y.push(Er(c, _, h)))), S) break;
                    c = c.return
                }
                0 < y.length && (p = new g(p, w, null, n, d), m.push({
                    event: p,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== Fi && (w = n.relatedTarget || n.fromElement) && (Bt(w) || w[ut])) break e;
                if ((g || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = a, w = w ? Bt(w) : null, w !== null && (S = ln(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = a), g !== w)) {
                    if (y = Zu, _ = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = ea, _ = "onPointerLeave", f = "onPointerEnter", c = "pointer"), S = g == null ? p : vn(g), h = w == null ? p : vn(w), p = new y(_, c + "leave", g, n, d), p.target = S, p.relatedTarget = h, _ = null, Bt(d) === a && (y = new y(f, c + "enter", w, n, d), y.target = h, y.relatedTarget = S, _ = y), S = _, g && w) t: {
                        for (y = g, f = w, c = 0, h = y; h; h = cn(h)) c++;
                        for (h = 0, _ = f; _; _ = cn(_)) h++;
                        for (; 0 < c - h;) y = cn(y),
                        c--;
                        for (; 0 < h - c;) f = cn(f),
                        h--;
                        for (; c--;) {
                            if (y === f || f !== null && y === f.alternate) break t;
                            y = cn(y), f = cn(f)
                        }
                        y = null
                    }
                    else y = null;
                    g !== null && da(m, p, g, y, !1), w !== null && S !== null && da(m, S, w, y, !0)
                }
            }
            e: {
                if (p = a ? vn(a) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var k = uh;
                else if (ra(p))
                    if (od) k = fh;
                    else {
                        k = ch;
                        var I = ah
                    }
                else(g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (k = dh);
                if (k && (k = k(e, a))) {
                    rd(m, k, n, d);
                    break e
                }
                I && I(e, p, a),
                e === "focusout" && (I = p._wrapperState) && I.controlled && p.type === "number" && Li(p, "number", p.value)
            }
            switch (I = a ? vn(a) : window, e) {
                case "focusin":
                    (ra(I) || I.contentEditable === "true") && (mn = I, Gi = a, ar = null);
                    break;
                case "focusout":
                    ar = Gi = mn = null;
                    break;
                case "mousedown":
                    Ki = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ki = !1, ua(m, n, d);
                    break;
                case "selectionchange":
                    if (hh) break;
                case "keydown":
                case "keyup":
                    ua(m, n, d)
            }
            var T;
            if (Js) e: {
                switch (e) {
                    case "compositionstart":
                        var C = "onCompositionStart";
                        break e;
                    case "compositionend":
                        C = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        C = "onCompositionUpdate";
                        break e
                }
                C = void 0
            }
            else pn ? td(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");C && (ed && n.locale !== "ko" && (pn || C !== "onCompositionStart" ? C === "onCompositionEnd" && pn && (T = qc()) : (Et = d, Qs = "value" in Et ? Et.value : Et.textContent, pn = !0)), I = Ko(a, C), 0 < I.length && (C = new qu(C, e, null, n, d), m.push({
                event: C,
                listeners: I
            }), T ? C.data = T : (T = nd(n), T !== null && (C.data = T)))),
            (T = rh ? oh(e, n) : lh(e, n)) && (a = Ko(a, "onBeforeInput"), 0 < a.length && (d = new qu("onBeforeInput", "beforeinput", null, n, d), m.push({
                event: d,
                listeners: a
            }), d.data = T))
        }
        md(m, t)
    })
}

function Er(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Ko(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            l = o.stateNode;
        o.tag === 5 && l !== null && (o = l, l = vr(e, n), l != null && r.unshift(Er(e, l, o)), l = vr(e, t), l != null && r.push(Er(e, l, o))), e = e.return
    }
    return r
}

function cn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function da(e, t, n, r, o) {
    for (var l = t._reactName, i = []; n !== null && n !== r;) {
        var s = n,
            u = s.alternate,
            a = s.stateNode;
        if (u !== null && u === r) break;
        s.tag === 5 && a !== null && (s = a, o ? (u = vr(n, l), u != null && i.unshift(Er(n, u, s))) : o || (u = vr(n, l), u != null && i.push(Er(n, u, s)))), n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var wh = /\r\n?/g,
    xh = /\u0000|\uFFFD/g;

function fa(e) {
    return (typeof e == "string" ? e : "" + e).replace(wh, `
`).replace(xh, "")
}

function uo(e, t, n) {
    if (t = fa(t), fa(e) !== t && n) throw Error(E(425))
}

function Qo() {}
var Qi = null,
    Yi = null;

function Xi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ji = typeof setTimeout == "function" ? setTimeout : void 0,
    Sh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    pa = typeof Promise == "function" ? Promise : void 0,
    _h = typeof queueMicrotask == "function" ? queueMicrotask : typeof pa < "u" ? function(e) {
        return pa.resolve(null).then(e).catch(Eh)
    } : Ji;

function Eh(e) {
    setTimeout(function() {
        throw e
    })
}

function ci(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), wr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    wr(t)
}

function Tt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function ma(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Un = Math.random().toString(36).slice(2),
    Xe = "__reactFiber$" + Un,
    kr = "__reactProps$" + Un,
    ut = "__reactContainer$" + Un,
    Zi = "__reactEvents$" + Un,
    kh = "__reactListeners$" + Un,
    Ch = "__reactHandles$" + Un;

function Bt(e) {
    var t = e[Xe];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[ut] || n[Xe]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = ma(e); e !== null;) {
                    if (n = e[Xe]) return n;
                    e = ma(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Fr(e) {
    return e = e[Xe] || e[ut], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function vn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(E(33))
}

function Sl(e) {
    return e[kr] || null
}
var qi = [],
    gn = -1;

function $t(e) {
    return {
        current: e
    }
}

function W(e) {
    0 > gn || (e.current = qi[gn], qi[gn] = null, gn--)
}

function V(e, t) {
    gn++, qi[gn] = e.current, e.current = t
}
var Lt = {},
    ce = $t(Lt),
    ye = $t(!1),
    Jt = Lt;

function Rn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Lt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        l;
    for (l in n) o[l] = t[l];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function we(e) {
    return e = e.childContextTypes, e != null
}

function Yo() {
    W(ye), W(ce)
}

function ha(e, t, n) {
    if (ce.current !== Lt) throw Error(E(168));
    V(ce, t), V(ye, n)
}

function vd(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(E(108, am(e) || "Unknown", o));
    return Q({}, n, r)
}

function Xo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Lt, Jt = ce.current, V(ce, e), V(ye, ye.current), !0
}

function va(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(E(169));
    n ? (e = vd(e, t, Jt), r.__reactInternalMemoizedMergedChildContext = e, W(ye), W(ce), V(ce, e)) : W(ye), V(ye, n)
}
var nt = null,
    _l = !1,
    di = !1;

function gd(e) {
    nt === null ? nt = [e] : nt.push(e)
}

function Nh(e) {
    _l = !0, gd(e)
}

function Dt() {
    if (!di && nt !== null) {
        di = !0;
        var e = 0,
            t = $;
        try {
            var n = nt;
            for ($ = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            nt = null, _l = !1
        } catch (o) {
            throw nt !== null && (nt = nt.slice(e + 1)), bc(Hs, Dt), o
        } finally {
            $ = t, di = !1
        }
    }
    return null
}
var yn = [],
    wn = 0,
    Jo = null,
    Zo = 0,
    je = [],
    Oe = 0,
    Zt = null,
    rt = 1,
    ot = "";

function bt(e, t) {
    yn[wn++] = Zo, yn[wn++] = Jo, Jo = e, Zo = t
}

function yd(e, t, n) {
    je[Oe++] = rt, je[Oe++] = ot, je[Oe++] = Zt, Zt = e;
    var r = rt;
    e = ot;
    var o = 32 - be(r) - 1;
    r &= ~(1 << o), n += 1;
    var l = 32 - be(t) + o;
    if (30 < l) {
        var i = o - o % 5;
        l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, rt = 1 << 32 - be(t) + o | n << o | r, ot = l + e
    } else rt = 1 << l | n << o | r, ot = e
}

function qs(e) {
    e.return !== null && (bt(e, 1), yd(e, 1, 0))
}

function eu(e) {
    for (; e === Jo;) Jo = yn[--wn], yn[wn] = null, Zo = yn[--wn], yn[wn] = null;
    for (; e === Zt;) Zt = je[--Oe], je[Oe] = null, ot = je[--Oe], je[Oe] = null, rt = je[--Oe], je[Oe] = null
}
var Ce = null,
    Ee = null,
    H = !1,
    Ve = null;

function wd(e, t) {
    var n = ze(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ga(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ce = e, Ee = Tt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ce = e, Ee = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zt !== null ? {
                id: rt,
                overflow: ot
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ce = e, Ee = null, !0) : !1;
        default:
            return !1
    }
}

function es(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function ts(e) {
    if (H) {
        var t = Ee;
        if (t) {
            var n = t;
            if (!ga(e, t)) {
                if (es(e)) throw Error(E(418));
                t = Tt(n.nextSibling);
                var r = Ce;
                t && ga(e, t) ? wd(r, n) : (e.flags = e.flags & -4097 | 2, H = !1, Ce = e)
            }
        } else {
            if (es(e)) throw Error(E(418));
            e.flags = e.flags & -4097 | 2, H = !1, Ce = e
        }
    }
}

function ya(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ce = e
}

function ao(e) {
    if (e !== Ce) return !1;
    if (!H) return ya(e), H = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Xi(e.type, e.memoizedProps)), t && (t = Ee)) {
        if (es(e)) throw xd(), Error(E(418));
        for (; t;) wd(e, t), t = Tt(t.nextSibling)
    }
    if (ya(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ee = Tt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ee = null
        }
    } else Ee = Ce ? Tt(e.stateNode.nextSibling) : null;
    return !0
}

function xd() {
    for (var e = Ee; e;) e = Tt(e.nextSibling)
}

function jn() {
    Ee = Ce = null, H = !1
}

function tu(e) {
    Ve === null ? Ve = [e] : Ve.push(e)
}
var Ph = pt.ReactCurrentBatchConfig;

function Qn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(E(309));
                var r = n.stateNode
            }
            if (!r) throw Error(E(147, e));
            var o = r,
                l = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
                var s = o.refs;
                i === null ? delete s[l] : s[l] = i
            }, t._stringRef = l, t)
        }
        if (typeof e != "string") throw Error(E(284));
        if (!n._owner) throw Error(E(290, e))
    }
    return e
}

function co(e, t) {
    throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function wa(e) {
    var t = e._init;
    return t(e._payload)
}

function Sd(e) {
    function t(f, c) {
        if (e) {
            var h = f.deletions;
            h === null ? (f.deletions = [c], f.flags |= 16) : h.push(c)
        }
    }

    function n(f, c) {
        if (!e) return null;
        for (; c !== null;) t(f, c), c = c.sibling;
        return null
    }

    function r(f, c) {
        for (f = new Map; c !== null;) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
        return f
    }

    function o(f, c) {
        return f = Ot(f, c), f.index = 0, f.sibling = null, f
    }

    function l(f, c, h) {
        return f.index = h, e ? (h = f.alternate, h !== null ? (h = h.index, h < c ? (f.flags |= 2, c) : h) : (f.flags |= 2, c)) : (f.flags |= 1048576, c)
    }

    function i(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }

    function s(f, c, h, _) {
        return c === null || c.tag !== 6 ? (c = yi(h, f.mode, _), c.return = f, c) : (c = o(c, h), c.return = f, c)
    }

    function u(f, c, h, _) {
        var k = h.type;
        return k === fn ? d(f, c, h.props.children, _, h.key) : c !== null && (c.elementType === k || typeof k == "object" && k !== null && k.$$typeof === yt && wa(k) === c.type) ? (_ = o(c, h.props), _.ref = Qn(f, c, h), _.return = f, _) : (_ = Mo(h.type, h.key, h.props, null, f.mode, _), _.ref = Qn(f, c, h), _.return = f, _)
    }

    function a(f, c, h, _) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = wi(h, f.mode, _), c.return = f, c) : (c = o(c, h.children || []), c.return = f, c)
    }

    function d(f, c, h, _, k) {
        return c === null || c.tag !== 7 ? (c = Xt(h, f.mode, _, k), c.return = f, c) : (c = o(c, h), c.return = f, c)
    }

    function m(f, c, h) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = yi("" + c, f.mode, h), c.return = f, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case qr:
                    return h = Mo(c.type, c.key, c.props, null, f.mode, h), h.ref = Qn(f, null, c), h.return = f, h;
                case dn:
                    return c = wi(c, f.mode, h), c.return = f, c;
                case yt:
                    var _ = c._init;
                    return m(f, _(c._payload), h)
            }
            if (er(c) || Wn(c)) return c = Xt(c, f.mode, h, null), c.return = f, c;
            co(f, c)
        }
        return null
    }

    function p(f, c, h, _) {
        var k = c !== null ? c.key : null;
        if (typeof h == "string" && h !== "" || typeof h == "number") return k !== null ? null : s(f, c, "" + h, _);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case qr:
                    return h.key === k ? u(f, c, h, _) : null;
                case dn:
                    return h.key === k ? a(f, c, h, _) : null;
                case yt:
                    return k = h._init, p(f, c, k(h._payload), _)
            }
            if (er(h) || Wn(h)) return k !== null ? null : d(f, c, h, _, null);
            co(f, h)
        }
        return null
    }

    function g(f, c, h, _, k) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number") return f = f.get(h) || null, s(c, f, "" + _, k);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
                case qr:
                    return f = f.get(_.key === null ? h : _.key) || null, u(c, f, _, k);
                case dn:
                    return f = f.get(_.key === null ? h : _.key) || null, a(c, f, _, k);
                case yt:
                    var I = _._init;
                    return g(f, c, h, I(_._payload), k)
            }
            if (er(_) || Wn(_)) return f = f.get(h) || null, d(c, f, _, k, null);
            co(c, _)
        }
        return null
    }

    function w(f, c, h, _) {
        for (var k = null, I = null, T = c, C = c = 0, D = null; T !== null && C < h.length; C++) {
            T.index > C ? (D = T, T = null) : D = T.sibling;
            var j = p(f, T, h[C], _);
            if (j === null) {
                T === null && (T = D);
                break
            }
            e && T && j.alternate === null && t(f, T), c = l(j, c, C), I === null ? k = j : I.sibling = j, I = j, T = D
        }
        if (C === h.length) return n(f, T), H && bt(f, C), k;
        if (T === null) {
            for (; C < h.length; C++) T = m(f, h[C], _), T !== null && (c = l(T, c, C), I === null ? k = T : I.sibling = T, I = T);
            return H && bt(f, C), k
        }
        for (T = r(f, T); C < h.length; C++) D = g(T, f, C, h[C], _), D !== null && (e && D.alternate !== null && T.delete(D.key === null ? C : D.key), c = l(D, c, C), I === null ? k = D : I.sibling = D, I = D);
        return e && T.forEach(function(Z) {
            return t(f, Z)
        }), H && bt(f, C), k
    }

    function y(f, c, h, _) {
        var k = Wn(h);
        if (typeof k != "function") throw Error(E(150));
        if (h = k.call(h), h == null) throw Error(E(151));
        for (var I = k = null, T = c, C = c = 0, D = null, j = h.next(); T !== null && !j.done; C++, j = h.next()) {
            T.index > C ? (D = T, T = null) : D = T.sibling;
            var Z = p(f, T, j.value, _);
            if (Z === null) {
                T === null && (T = D);
                break
            }
            e && T && Z.alternate === null && t(f, T), c = l(Z, c, C), I === null ? k = Z : I.sibling = Z, I = Z, T = D
        }
        if (j.done) return n(f, T), H && bt(f, C), k;
        if (T === null) {
            for (; !j.done; C++, j = h.next()) j = m(f, j.value, _), j !== null && (c = l(j, c, C), I === null ? k = j : I.sibling = j, I = j);
            return H && bt(f, C), k
        }
        for (T = r(f, T); !j.done; C++, j = h.next()) j = g(T, f, C, j.value, _), j !== null && (e && j.alternate !== null && T.delete(j.key === null ? C : j.key), c = l(j, c, C), I === null ? k = j : I.sibling = j, I = j);
        return e && T.forEach(function(A) {
            return t(f, A)
        }), H && bt(f, C), k
    }

    function S(f, c, h, _) {
        if (typeof h == "object" && h !== null && h.type === fn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case qr:
                    e: {
                        for (var k = h.key, I = c; I !== null;) {
                            if (I.key === k) {
                                if (k = h.type, k === fn) {
                                    if (I.tag === 7) {
                                        n(f, I.sibling), c = o(I, h.props.children), c.return = f, f = c;
                                        break e
                                    }
                                } else if (I.elementType === k || typeof k == "object" && k !== null && k.$$typeof === yt && wa(k) === I.type) {
                                    n(f, I.sibling), c = o(I, h.props), c.ref = Qn(f, I, h), c.return = f, f = c;
                                    break e
                                }
                                n(f, I);
                                break
                            } else t(f, I);
                            I = I.sibling
                        }
                        h.type === fn ? (c = Xt(h.props.children, f.mode, _, h.key), c.return = f, f = c) : (_ = Mo(h.type, h.key, h.props, null, f.mode, _), _.ref = Qn(f, c, h), _.return = f, f = _)
                    }
                    return i(f);
                case dn:
                    e: {
                        for (I = h.key; c !== null;) {
                            if (c.key === I)
                                if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                                    n(f, c.sibling), c = o(c, h.children || []), c.return = f, f = c;
                                    break e
                                } else {
                                    n(f, c);
                                    break
                                }
                            else t(f, c);
                            c = c.sibling
                        }
                        c = wi(h, f.mode, _),
                        c.return = f,
                        f = c
                    }
                    return i(f);
                case yt:
                    return I = h._init, S(f, c, I(h._payload), _)
            }
            if (er(h)) return w(f, c, h, _);
            if (Wn(h)) return y(f, c, h, _);
            co(f, h)
        }
        return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(f, c.sibling), c = o(c, h), c.return = f, f = c) : (n(f, c), c = yi(h, f.mode, _), c.return = f, f = c), i(f)) : n(f, c)
    }
    return S
}
var On = Sd(!0),
    _d = Sd(!1),
    qo = $t(null),
    el = null,
    xn = null,
    nu = null;

function ru() {
    nu = xn = el = null
}

function ou(e) {
    var t = qo.current;
    W(qo), e._currentValue = t
}

function ns(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Pn(e, t) {
    el = e, nu = xn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ge = !0), e.firstContext = null)
}

function Me(e) {
    var t = e._currentValue;
    if (nu !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, xn === null) {
            if (el === null) throw Error(E(308));
            xn = e, el.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else xn = xn.next = e;
    return t
}
var Gt = null;

function lu(e) {
    Gt === null ? Gt = [e] : Gt.push(e)
}

function Ed(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, lu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, at(e, r)
}

function at(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var wt = !1;

function iu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function kd(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function lt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function It(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, M & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, at(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, lu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, at(e, n)
}

function Io(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Bs(e, n)
    }
}

function xa(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            l = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                l === null ? o = l = i : l = l.next = i, n = n.next
            } while (n !== null);
            l === null ? o = l = t : l = l.next = t
        } else o = l = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: l,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function tl(e, t, n, r) {
    var o = e.updateQueue;
    wt = !1;
    var l = o.firstBaseUpdate,
        i = o.lastBaseUpdate,
        s = o.shared.pending;
    if (s !== null) {
        o.shared.pending = null;
        var u = s,
            a = u.next;
        u.next = null, i === null ? l = a : i.next = a, i = u;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, s = d.lastBaseUpdate, s !== i && (s === null ? d.firstBaseUpdate = a : s.next = a, d.lastBaseUpdate = u))
    }
    if (l !== null) {
        var m = o.baseState;
        i = 0, d = a = u = null, s = l;
        do {
            var p = s.lane,
                g = s.eventTime;
            if ((r & p) === p) {
                d !== null && (d = d.next = {
                    eventTime: g,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var w = e,
                        y = s;
                    switch (p = t, g = n, y.tag) {
                        case 1:
                            if (w = y.payload, typeof w == "function") {
                                m = w.call(g, m, p);
                                break e
                            }
                            m = w;
                            break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = y.payload, p = typeof w == "function" ? w.call(g, m, p) : w, p == null) break e;
                            m = Q({}, m, p);
                            break e;
                        case 2:
                            wt = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [s] : p.push(s))
            } else g = {
                eventTime: g,
                lane: p,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
            }, d === null ? (a = d = g, u = m) : d = d.next = g, i |= p;
            if (s = s.next, s === null) {
                if (s = o.shared.pending, s === null) break;
                p = s, s = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null
            }
        } while (!0);
        if (d === null && (u = m), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
            o = t;
            do i |= o.lane, o = o.next; while (o !== t)
        } else l === null && (o.shared.lanes = 0);
        en |= i, e.lanes = i, e.memoizedState = m
    }
}

function Sa(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(E(191, o));
                o.call(r)
            }
        }
}
var Vr = {},
    Ze = $t(Vr),
    Cr = $t(Vr),
    Nr = $t(Vr);

function Kt(e) {
    if (e === Vr) throw Error(E(174));
    return e
}

function su(e, t) {
    switch (V(Nr, t), V(Cr, e), V(Ze, Vr), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ai(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ai(t, e)
    }
    W(Ze), V(Ze, t)
}

function zn() {
    W(Ze), W(Cr), W(Nr)
}

function Cd(e) {
    Kt(Nr.current);
    var t = Kt(Ze.current),
        n = Ai(t, e.type);
    t !== n && (V(Cr, e), V(Ze, n))
}

function uu(e) {
    Cr.current === e && (W(Ze), W(Cr))
}
var G = $t(0);

function nl(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var fi = [];

function au() {
    for (var e = 0; e < fi.length; e++) fi[e]._workInProgressVersionPrimary = null;
    fi.length = 0
}
var Ro = pt.ReactCurrentDispatcher,
    pi = pt.ReactCurrentBatchConfig,
    qt = 0,
    K = null,
    q = null,
    te = null,
    rl = !1,
    cr = !1,
    Pr = 0,
    Th = 0;

function se() {
    throw Error(E(321))
}

function cu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!He(e[n], t[n])) return !1;
    return !0
}

function du(e, t, n, r, o, l) {
    if (qt = l, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ro.current = e === null || e.memoizedState === null ? Oh : zh, e = n(r, o), cr) {
        l = 0;
        do {
            if (cr = !1, Pr = 0, 25 <= l) throw Error(E(301));
            l += 1, te = q = null, t.updateQueue = null, Ro.current = Lh, e = n(r, o)
        } while (cr)
    }
    if (Ro.current = ol, t = q !== null && q.next !== null, qt = 0, te = q = K = null, rl = !1, t) throw Error(E(300));
    return e
}

function fu() {
    var e = Pr !== 0;
    return Pr = 0, e
}

function Qe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return te === null ? K.memoizedState = te = e : te = te.next = e, te
}

function Ae() {
    if (q === null) {
        var e = K.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = q.next;
    var t = te === null ? K.memoizedState : te.next;
    if (t !== null) te = t, q = e;
    else {
        if (e === null) throw Error(E(310));
        q = e, e = {
            memoizedState: q.memoizedState,
            baseState: q.baseState,
            baseQueue: q.baseQueue,
            queue: q.queue,
            next: null
        }, te === null ? K.memoizedState = te = e : te = te.next = e
    }
    return te
}

function Tr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function mi(e) {
    var t = Ae(),
        n = t.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = q,
        o = r.baseQueue,
        l = n.pending;
    if (l !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = l.next, l.next = i
        }
        r.baseQueue = o = l, n.pending = null
    }
    if (o !== null) {
        l = o.next, r = r.baseState;
        var s = i = null,
            u = null,
            a = l;
        do {
            var d = a.lane;
            if ((qt & d) === d) u !== null && (u = u.next = {
                lane: 0,
                action: a.action,
                hasEagerState: a.hasEagerState,
                eagerState: a.eagerState,
                next: null
            }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
            else {
                var m = {
                    lane: d,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                };
                u === null ? (s = u = m, i = r) : u = u.next = m, K.lanes |= d, en |= d
            }
            a = a.next
        } while (a !== null && a !== l);
        u === null ? i = r : u.next = s, He(r, t.memoizedState) || (ge = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do l = o.lane, K.lanes |= l, en |= l, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function hi(e) {
    var t = Ae(),
        n = t.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        l = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var i = o = o.next;
        do l = e(l, i.action), i = i.next; while (i !== o);
        He(l, t.memoizedState) || (ge = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l
    }
    return [l, r]
}

function Nd() {}

function Pd(e, t) {
    var n = K,
        r = Ae(),
        o = t(),
        l = !He(r.memoizedState, o);
    if (l && (r.memoizedState = o, ge = !0), r = r.queue, pu(Rd.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || te !== null && te.memoizedState.tag & 1) {
        if (n.flags |= 2048, Ir(9, Id.bind(null, n, r, o, t), void 0, null), ne === null) throw Error(E(349));
        qt & 30 || Td(n, t, o)
    }
    return o
}

function Td(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = K.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Id(e, t, n, r) {
    t.value = n, t.getSnapshot = r, jd(t) && Od(e)
}

function Rd(e, t, n) {
    return n(function() {
        jd(t) && Od(e)
    })
}

function jd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !He(e, n)
    } catch {
        return !0
    }
}

function Od(e) {
    var t = at(e, 1);
    t !== null && We(t, e, 1, -1)
}

function _a(e) {
    var t = Qe();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = jh.bind(null, K, e), [t.memoizedState, e]
}

function Ir(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = K.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function zd() {
    return Ae().memoizedState
}

function jo(e, t, n, r) {
    var o = Qe();
    K.flags |= e, o.memoizedState = Ir(1 | t, n, void 0, r === void 0 ? null : r)
}

function El(e, t, n, r) {
    var o = Ae();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (q !== null) {
        var i = q.memoizedState;
        if (l = i.destroy, r !== null && cu(r, i.deps)) {
            o.memoizedState = Ir(t, n, l, r);
            return
        }
    }
    K.flags |= e, o.memoizedState = Ir(1 | t, n, l, r)
}

function Ea(e, t) {
    return jo(8390656, 8, e, t)
}

function pu(e, t) {
    return El(2048, 8, e, t)
}

function Ld(e, t) {
    return El(4, 2, e, t)
}

function Md(e, t) {
    return El(4, 4, e, t)
}

function Ad(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function $d(e, t, n) {
    return n = n != null ? n.concat([e]) : null, El(4, 4, Ad.bind(null, t, e), n)
}

function mu() {}

function Dd(e, t) {
    var n = Ae();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && cu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Fd(e, t) {
    var n = Ae();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && cu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Vd(e, t, n) {
    return qt & 21 ? (He(n, t) || (n = Bc(), K.lanes |= n, en |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ge = !0), e.memoizedState = n)
}

function Ih(e, t) {
    var n = $;
    $ = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = pi.transition;
    pi.transition = {};
    try {
        e(!1), t()
    } finally {
        $ = n, pi.transition = r
    }
}

function Ud() {
    return Ae().memoizedState
}

function Rh(e, t, n) {
    var r = jt(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, bd(e)) Wd(t, n);
    else if (n = Ed(e, t, n, r), n !== null) {
        var o = pe();
        We(n, e, r, o), Hd(n, t, r)
    }
}

function jh(e, t, n) {
    var r = jt(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (bd(e)) Wd(t, o);
    else {
        var l = e.alternate;
        if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
            var i = t.lastRenderedState,
                s = l(i, n);
            if (o.hasEagerState = !0, o.eagerState = s, He(s, i)) {
                var u = t.interleaved;
                u === null ? (o.next = o, lu(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = Ed(e, t, o, r), n !== null && (o = pe(), We(n, e, r, o), Hd(n, t, r))
    }
}

function bd(e) {
    var t = e.alternate;
    return e === K || t !== null && t === K
}

function Wd(e, t) {
    cr = rl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Hd(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Bs(e, n)
    }
}
var ol = {
        readContext: Me,
        useCallback: se,
        useContext: se,
        useEffect: se,
        useImperativeHandle: se,
        useInsertionEffect: se,
        useLayoutEffect: se,
        useMemo: se,
        useReducer: se,
        useRef: se,
        useState: se,
        useDebugValue: se,
        useDeferredValue: se,
        useTransition: se,
        useMutableSource: se,
        useSyncExternalStore: se,
        useId: se,
        unstable_isNewReconciler: !1
    },
    Oh = {
        readContext: Me,
        useCallback: function(e, t) {
            return Qe().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Me,
        useEffect: Ea,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, jo(4194308, 4, Ad.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return jo(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return jo(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Qe();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Qe();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Rh.bind(null, K, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Qe();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: _a,
        useDebugValue: mu,
        useDeferredValue: function(e) {
            return Qe().memoizedState = e
        },
        useTransition: function() {
            var e = _a(!1),
                t = e[0];
            return e = Ih.bind(null, e[1]), Qe().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = K,
                o = Qe();
            if (H) {
                if (n === void 0) throw Error(E(407));
                n = n()
            } else {
                if (n = t(), ne === null) throw Error(E(349));
                qt & 30 || Td(r, t, n)
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, Ea(Rd.bind(null, r, l, e), [e]), r.flags |= 2048, Ir(9, Id.bind(null, r, l, n, t), void 0, null), n
        },
        useId: function() {
            var e = Qe(),
                t = ne.identifierPrefix;
            if (H) {
                var n = ot,
                    r = rt;
                n = (r & ~(1 << 32 - be(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Pr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Th++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    zh = {
        readContext: Me,
        useCallback: Dd,
        useContext: Me,
        useEffect: pu,
        useImperativeHandle: $d,
        useInsertionEffect: Ld,
        useLayoutEffect: Md,
        useMemo: Fd,
        useReducer: mi,
        useRef: zd,
        useState: function() {
            return mi(Tr)
        },
        useDebugValue: mu,
        useDeferredValue: function(e) {
            var t = Ae();
            return Vd(t, q.memoizedState, e)
        },
        useTransition: function() {
            var e = mi(Tr)[0],
                t = Ae().memoizedState;
            return [e, t]
        },
        useMutableSource: Nd,
        useSyncExternalStore: Pd,
        useId: Ud,
        unstable_isNewReconciler: !1
    },
    Lh = {
        readContext: Me,
        useCallback: Dd,
        useContext: Me,
        useEffect: pu,
        useImperativeHandle: $d,
        useInsertionEffect: Ld,
        useLayoutEffect: Md,
        useMemo: Fd,
        useReducer: hi,
        useRef: zd,
        useState: function() {
            return hi(Tr)
        },
        useDebugValue: mu,
        useDeferredValue: function(e) {
            var t = Ae();
            return q === null ? t.memoizedState = e : Vd(t, q.memoizedState, e)
        },
        useTransition: function() {
            var e = hi(Tr)[0],
                t = Ae().memoizedState;
            return [e, t]
        },
        useMutableSource: Nd,
        useSyncExternalStore: Pd,
        useId: Ud,
        unstable_isNewReconciler: !1
    };

function De(e, t) {
    if (e && e.defaultProps) {
        t = Q({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function rs(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var kl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? ln(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = pe(),
            o = jt(e),
            l = lt(r, o);
        l.payload = t, n != null && (l.callback = n), t = It(e, l, o), t !== null && (We(t, e, o, r), Io(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = pe(),
            o = jt(e),
            l = lt(r, o);
        l.tag = 1, l.payload = t, n != null && (l.callback = n), t = It(e, l, o), t !== null && (We(t, e, o, r), Io(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = pe(),
            r = jt(e),
            o = lt(n, r);
        o.tag = 2, t != null && (o.callback = t), t = It(e, o, r), t !== null && (We(t, e, r, n), Io(t, e, r))
    }
};

function ka(e, t, n, r, o, l, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Sr(n, r) || !Sr(o, l) : !0
}

function Bd(e, t, n) {
    var r = !1,
        o = Lt,
        l = t.contextType;
    return typeof l == "object" && l !== null ? l = Me(l) : (o = we(t) ? Jt : ce.current, r = t.contextTypes, l = (r = r != null) ? Rn(e, o) : Lt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = kl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t
}

function Ca(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && kl.enqueueReplaceState(t, t.state, null)
}

function os(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, iu(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? o.context = Me(l) : (l = we(t) ? Jt : ce.current, o.context = Rn(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (rs(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && kl.enqueueReplaceState(o, o.state, null), tl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function Ln(e, t) {
    try {
        var n = "",
            r = t;
        do n += um(r), r = r.return; while (r);
        var o = n
    } catch (l) {
        o = `
Error generating stack: ` + l.message + `
` + l.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function vi(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function ls(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Mh = typeof WeakMap == "function" ? WeakMap : Map;

function Gd(e, t, n) {
    n = lt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        il || (il = !0, hs = r), ls(e, t)
    }, n
}

function Kd(e, t, n) {
    n = lt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            ls(e, t)
        }
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
        ls(e, t), typeof r != "function" && (Rt === null ? Rt = new Set([this]) : Rt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }), n
}

function Na(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Mh;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = Yh.bind(null, e, t, n), t.then(e, e))
}

function Pa(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Ta(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = lt(-1, 1), t.tag = 2, It(n, t, 1))), n.lanes |= 1), e)
}
var Ah = pt.ReactCurrentOwner,
    ge = !1;

function fe(e, t, n, r) {
    t.child = e === null ? _d(t, null, n, r) : On(t, e.child, n, r)
}

function Ia(e, t, n, r, o) {
    n = n.render;
    var l = t.ref;
    return Pn(t, o), r = du(e, t, n, r, l, o), n = fu(), e !== null && !ge ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ct(e, t, o)) : (H && n && qs(t), t.flags |= 1, fe(e, t, r, o), t.child)
}

function Ra(e, t, n, r, o) {
    if (e === null) {
        var l = n.type;
        return typeof l == "function" && !_u(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Qd(e, t, l, r, o)) : (e = Mo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (l = e.child, !(e.lanes & o)) {
        var i = l.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Sr, n(i, r) && e.ref === t.ref) return ct(e, t, o)
    }
    return t.flags |= 1, e = Ot(l, r), e.ref = t.ref, e.return = t, t.child = e
}

function Qd(e, t, n, r, o) {
    if (e !== null) {
        var l = e.memoizedProps;
        if (Sr(l, r) && e.ref === t.ref)
            if (ge = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (ge = !0);
            else return t.lanes = e.lanes, ct(e, t, o)
    }
    return is(e, t, n, r, o)
}

function Yd(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, V(_n, _e), _e |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, V(_n, _e), _e |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, V(_n, _e), _e |= r
        }
    else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, V(_n, _e), _e |= r;
    return fe(e, t, o, n), t.child
}

function Xd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function is(e, t, n, r, o) {
    var l = we(n) ? Jt : ce.current;
    return l = Rn(t, l), Pn(t, o), n = du(e, t, n, r, l, o), r = fu(), e !== null && !ge ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ct(e, t, o)) : (H && r && qs(t), t.flags |= 1, fe(e, t, n, o), t.child)
}

function ja(e, t, n, r, o) {
    if (we(n)) {
        var l = !0;
        Xo(t)
    } else l = !1;
    if (Pn(t, o), t.stateNode === null) Oo(e, t), Bd(t, n, r), os(t, n, r, o), r = !0;
    else if (e === null) {
        var i = t.stateNode,
            s = t.memoizedProps;
        i.props = s;
        var u = i.context,
            a = n.contextType;
        typeof a == "object" && a !== null ? a = Me(a) : (a = we(n) ? Jt : ce.current, a = Rn(t, a));
        var d = n.getDerivedStateFromProps,
            m = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || u !== a) && Ca(t, i, r, a), wt = !1;
        var p = t.memoizedState;
        i.state = p, tl(t, r, i, o), u = t.memoizedState, s !== r || p !== u || ye.current || wt ? (typeof d == "function" && (rs(t, n, d, r), u = t.memoizedState), (s = wt || ka(t, n, s, r, p, u, a)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = a, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, kd(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : De(t.type, s), i.props = a, m = t.pendingProps, p = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = Me(u) : (u = we(n) ? Jt : ce.current, u = Rn(t, u));
        var g = n.getDerivedStateFromProps;
        (d = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== m || p !== u) && Ca(t, i, r, u), wt = !1, p = t.memoizedState, i.state = p, tl(t, r, i, o);
        var w = t.memoizedState;
        s !== m || p !== w || ye.current || wt ? (typeof g == "function" && (rs(t, n, g, r), w = t.memoizedState), (a = wt || ka(t, n, a, r, p, w, u) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = u, r = a) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return ss(e, t, n, r, l, o)
}

function ss(e, t, n, r, o, l) {
    Xd(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return o && va(t, n, !1), ct(e, t, l);
    r = t.stateNode, Ah.current = t;
    var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = On(t, e.child, null, l), t.child = On(t, null, s, l)) : fe(e, t, s, l), t.memoizedState = r.state, o && va(t, n, !0), t.child
}

function Jd(e) {
    var t = e.stateNode;
    t.pendingContext ? ha(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ha(e, t.context, !1), su(e, t.containerInfo)
}

function Oa(e, t, n, r, o) {
    return jn(), tu(o), t.flags |= 256, fe(e, t, n, r), t.child
}
var us = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function as(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Zd(e, t, n) {
    var r = t.pendingProps,
        o = G.current,
        l = !1,
        i = (t.flags & 128) !== 0,
        s;
    if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), V(G, o & 1), e === null) return ts(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Pl(i, r, 0, null), e = Xt(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = as(n), t.memoizedState = us, e) : hu(t, i));
    if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return $h(e, t, i, r, s, o, n);
    if (l) {
        l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Ot(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = Ot(s, l) : (l = Xt(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? as(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = us, r
    }
    return l = e.child, e = l.sibling, r = Ot(l, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function hu(e, t) {
    return t = Pl({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function fo(e, t, n, r) {
    return r !== null && tu(r), On(t, e.child, null, n), e = hu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function $h(e, t, n, r, o, l, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = vi(Error(E(422))), fo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Pl({
        mode: "visible",
        children: r.children
    }, o, 0, null), l = Xt(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && On(t, e.child, null, i), t.child.memoizedState = as(i), t.memoizedState = us, l);
    if (!(t.mode & 1)) return fo(e, t, i, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
        return r = s, l = Error(E(419)), r = vi(l, r, void 0), fo(e, t, i, r)
    }
    if (s = (i & e.childLanes) !== 0, ge || s) {
        if (r = ne, r !== null) {
            switch (i & -i) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
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
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, at(e, o), We(r, e, o, -1))
        }
        return Su(), r = vi(Error(E(421))), fo(e, t, i, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Xh.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Ee = Tt(o.nextSibling), Ce = t, H = !0, Ve = null, e !== null && (je[Oe++] = rt, je[Oe++] = ot, je[Oe++] = Zt, rt = e.id, ot = e.overflow, Zt = t), t = hu(t, r.children), t.flags |= 4096, t)
}

function za(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ns(e.return, t, n)
}

function gi(e, t, n, r, o) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o)
}

function qd(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        l = r.tail;
    if (fe(e, t, r.children, n), r = G.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && za(e, n, t);
            else if (e.tag === 19) za(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (V(G, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && nl(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), gi(t, !1, o, n, l);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && nl(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            gi(t, !0, n, null, l);
            break;
        case "together":
            gi(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Oo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function ct(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), en |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(E(153));
    if (t.child !== null) {
        for (e = t.child, n = Ot(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Ot(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Dh(e, t, n) {
    switch (t.tag) {
        case 3:
            Jd(t), jn();
            break;
        case 5:
            Cd(t);
            break;
        case 1:
            we(t.type) && Xo(t);
            break;
        case 4:
            su(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            V(qo, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (V(G, G.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Zd(e, t, n) : (V(G, G.current & 1), e = ct(e, t, n), e !== null ? e.sibling : null);
            V(G, G.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return qd(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), V(G, G.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Yd(e, t, n)
    }
    return ct(e, t, n)
}
var ef, cs, tf, nf;
ef = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
cs = function() {};
tf = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, Kt(Ze.current);
        var l = null;
        switch (n) {
            case "input":
                o = Oi(e, o), r = Oi(e, r), l = [];
                break;
            case "select":
                o = Q({}, o, {
                    value: void 0
                }), r = Q({}, r, {
                    value: void 0
                }), l = [];
                break;
            case "textarea":
                o = Mi(e, o), r = Mi(e, r), l = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qo)
        }
        $i(n, r);
        var i;
        n = null;
        for (a in o)
            if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
                if (a === "style") {
                    var s = o[a];
                    for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (mr.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
        for (a in r) {
            var u = r[a];
            if (s = o != null ? o[a] : void 0, r.hasOwnProperty(a) && u !== s && (u != null || s != null))
                if (a === "style")
                    if (s) {
                        for (i in s) !s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                        for (i in u) u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}), n[i] = u[i])
                    } else n || (l || (l = []), l.push(a, n)), n = u;
            else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (l = l || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (l = l || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (mr.hasOwnProperty(a) ? (u != null && a === "onScroll" && b("scroll", e), l || s === u || (l = [])) : (l = l || []).push(a, u))
        }
        n && (l = l || []).push("style", n);
        var a = l;
        (t.updateQueue = a) && (t.flags |= 4)
    }
};
nf = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Yn(e, t) {
    if (!H) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Fh(e, t, n) {
    var r = t.pendingProps;
    switch (eu(t), t.tag) {
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
            return ue(t), null;
        case 1:
            return we(t.type) && Yo(), ue(t), null;
        case 3:
            return r = t.stateNode, zn(), W(ye), W(ce), au(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ao(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ve !== null && (ys(Ve), Ve = null))), cs(e, t), ue(t), null;
        case 5:
            uu(t);
            var o = Kt(Nr.current);
            if (n = t.type, e !== null && t.stateNode != null) tf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(E(166));
                    return ue(t), null
                }
                if (e = Kt(Ze.current), ao(t)) {
                    r = t.stateNode, n = t.type;
                    var l = t.memoizedProps;
                    switch (r[Xe] = t, r[kr] = l, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            b("cancel", r), b("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            b("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < nr.length; o++) b(nr[o], r);
                            break;
                        case "source":
                            b("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            b("error", r), b("load", r);
                            break;
                        case "details":
                            b("toggle", r);
                            break;
                        case "input":
                            bu(r, l), b("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!l.multiple
                            }, b("invalid", r);
                            break;
                        case "textarea":
                            Hu(r, l), b("invalid", r)
                    }
                    $i(n, l), o = null;
                    for (var i in l)
                        if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && uo(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && uo(r.textContent, s, e), o = ["children", "" + s]) : mr.hasOwnProperty(i) && s != null && i === "onScroll" && b("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            eo(r), Wu(r, l, !0);
                            break;
                        case "textarea":
                            eo(r), Bu(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof l.onClick == "function" && (r.onclick = Qo)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Rc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Xe] = t, e[kr] = r, ef(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = Di(n, r), n) {
                            case "dialog":
                                b("cancel", e), b("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                b("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < nr.length; o++) b(nr[o], e);
                                o = r;
                                break;
                            case "source":
                                b("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                b("error", e), b("load", e), o = r;
                                break;
                            case "details":
                                b("toggle", e), o = r;
                                break;
                            case "input":
                                bu(e, r), o = Oi(e, r), b("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = Q({}, r, {
                                    value: void 0
                                }), b("invalid", e);
                                break;
                            case "textarea":
                                Hu(e, r), o = Mi(e, r), b("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        $i(n, o),
                        s = o;
                        for (l in s)
                            if (s.hasOwnProperty(l)) {
                                var u = s[l];
                                l === "style" ? zc(e, u) : l === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && jc(e, u)) : l === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && hr(e, u) : typeof u == "number" && hr(e, "" + u) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (mr.hasOwnProperty(l) ? u != null && l === "onScroll" && b("scroll", e) : u != null && Fs(e, l, u, i))
                            }
                        switch (n) {
                            case "input":
                                eo(e), Wu(e, r, !1);
                                break;
                            case "textarea":
                                eo(e), Bu(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + zt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, l = r.value, l != null ? En(e, !!r.multiple, l, !1) : r.defaultValue != null && En(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = Qo)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return ue(t), null;
        case 6:
            if (e && t.stateNode != null) nf(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
                if (n = Kt(Nr.current), Kt(Ze.current), ao(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Xe] = t, (l = r.nodeValue !== n) && (e = Ce, e !== null)) switch (e.tag) {
                        case 3:
                            uo(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && uo(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    l && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Xe] = t, t.stateNode = r
            }
            return ue(t), null;
        case 13:
            if (W(G), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (H && Ee !== null && t.mode & 1 && !(t.flags & 128)) xd(), jn(), t.flags |= 98560, l = !1;
                else if (l = ao(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!l) throw Error(E(318));
                        if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(E(317));
                        l[Xe] = t
                    } else jn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    ue(t), l = !1
                } else Ve !== null && (ys(Ve), Ve = null), l = !0;
                if (!l) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || G.current & 1 ? ee === 0 && (ee = 3) : Su())), t.updateQueue !== null && (t.flags |= 4), ue(t), null);
        case 4:
            return zn(), cs(e, t), e === null && _r(t.stateNode.containerInfo), ue(t), null;
        case 10:
            return ou(t.type._context), ue(t), null;
        case 17:
            return we(t.type) && Yo(), ue(t), null;
        case 19:
            if (W(G), l = t.memoizedState, l === null) return ue(t), null;
            if (r = (t.flags & 128) !== 0, i = l.rendering, i === null)
                if (r) Yn(l, !1);
                else {
                    if (ee !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (i = nl(e), i !== null) {
                                for (t.flags |= 128, Yn(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return V(G, G.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    l.tail !== null && X() > Mn && (t.flags |= 128, r = !0, Yn(l, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = nl(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Yn(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !H) return ue(t), null
                    } else 2 * X() - l.renderingStartTime > Mn && n !== 1073741824 && (t.flags |= 128, r = !0, Yn(l, !1), t.lanes = 4194304);
                l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i)
            }
            return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = X(), t.sibling = null, n = G.current, V(G, r ? n & 1 | 2 : n & 1), t) : (ue(t), null);
        case 22:
        case 23:
            return xu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? _e & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ue(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(E(156, t.tag))
}

function Vh(e, t) {
    switch (eu(t), t.tag) {
        case 1:
            return we(t.type) && Yo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return zn(), W(ye), W(ce), au(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return uu(t), null;
        case 13:
            if (W(G), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(E(340));
                jn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return W(G), null;
        case 4:
            return zn(), null;
        case 10:
            return ou(t.type._context), null;
        case 22:
        case 23:
            return xu(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var po = !1,
    ae = !1,
    Uh = typeof WeakSet == "function" ? WeakSet : Set,
    P = null;

function Sn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            Y(e, t, r)
        } else n.current = null
}

function ds(e, t, n) {
    try {
        n()
    } catch (r) {
        Y(e, t, r)
    }
}
var La = !1;

function bh(e, t) {
    if (Qi = Bo, e = sd(), Zs(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    l = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, l.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0,
                    s = -1,
                    u = -1,
                    a = 0,
                    d = 0,
                    m = e,
                    p = null;
                t: for (;;) {
                    for (var g; m !== n || o !== 0 && m.nodeType !== 3 || (s = i + o), m !== l || r !== 0 && m.nodeType !== 3 || (u = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (g = m.firstChild) !== null;) p = m, m = g;
                    for (;;) {
                        if (m === e) break t;
                        if (p === n && ++a === o && (s = i), p === l && ++d === r && (u = i), (g = m.nextSibling) !== null) break;
                        m = p, p = m.parentNode
                    }
                    m = g
                }
                n = s === -1 || u === -1 ? null : {
                    start: s,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Yi = {
            focusedElem: e,
            selectionRange: n
        }, Bo = !1, P = t; P !== null;)
        if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
        else
            for (; P !== null;) {
                t = P;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var y = w.memoizedProps,
                                    S = w.memoizedState,
                                    f = t.stateNode,
                                    c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : De(t.type, y), S);
                                f.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var h = t.stateNode.containerInfo;
                            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(E(163))
                    }
                } catch (_) {
                    Y(t, t.return, _)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, P = e;
                    break
                }
                P = t.return
            }
    return w = La, La = !1, w
}

function dr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var l = o.destroy;
                o.destroy = void 0, l !== void 0 && ds(t, n, l)
            }
            o = o.next
        } while (o !== r)
    }
}

function Cl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function fs(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function rf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, rf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Xe], delete t[kr], delete t[Zi], delete t[kh], delete t[Ch])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function of (e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Ma(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || of (e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function ps(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Qo));
    else if (r !== 4 && (e = e.child, e !== null))
        for (ps(e, t, n), e = e.sibling; e !== null;) ps(e, t, n), e = e.sibling
}

function ms(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (ms(e, t, n), e = e.sibling; e !== null;) ms(e, t, n), e = e.sibling
}
var re = null,
    Fe = !1;

function ht(e, t, n) {
    for (n = n.child; n !== null;) lf(e, t, n), n = n.sibling
}

function lf(e, t, n) {
    if (Je && typeof Je.onCommitFiberUnmount == "function") try {
        Je.onCommitFiberUnmount(gl, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ae || Sn(n, t);
        case 6:
            var r = re,
                o = Fe;
            re = null, ht(e, t, n), re = r, Fe = o, re !== null && (Fe ? (e = re, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : re.removeChild(n.stateNode));
            break;
        case 18:
            re !== null && (Fe ? (e = re, n = n.stateNode, e.nodeType === 8 ? ci(e.parentNode, n) : e.nodeType === 1 && ci(e, n), wr(e)) : ci(re, n.stateNode));
            break;
        case 4:
            r = re, o = Fe, re = n.stateNode.containerInfo, Fe = !0, ht(e, t, n), re = r, Fe = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ae && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var l = o,
                        i = l.destroy;
                    l = l.tag, i !== void 0 && (l & 2 || l & 4) && ds(n, t, i), o = o.next
                } while (o !== r)
            }
            ht(e, t, n);
            break;
        case 1:
            if (!ae && (Sn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (s) {
                Y(n, t, s)
            }
            ht(e, t, n);
            break;
        case 21:
            ht(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ae = (r = ae) || n.memoizedState !== null, ht(e, t, n), ae = r) : ht(e, t, n);
            break;
        default:
            ht(e, t, n)
    }
}

function Aa(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Uh), t.forEach(function(r) {
            var o = Jh.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function $e(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var l = e,
                    i = t,
                    s = i;
                e: for (; s !== null;) {
                    switch (s.tag) {
                        case 5:
                            re = s.stateNode, Fe = !1;
                            break e;
                        case 3:
                            re = s.stateNode.containerInfo, Fe = !0;
                            break e;
                        case 4:
                            re = s.stateNode.containerInfo, Fe = !0;
                            break e
                    }
                    s = s.return
                }
                if (re === null) throw Error(E(160));
                lf(l, i, o), re = null, Fe = !1;
                var u = o.alternate;
                u !== null && (u.return = null), o.return = null
            } catch (a) {
                Y(o, t, a)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) sf(t, e), t = t.sibling
}

function sf(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ($e(t, e), Ke(e), r & 4) {
                try {
                    dr(3, e, e.return), Cl(3, e)
                } catch (y) {
                    Y(e, e.return, y)
                }
                try {
                    dr(5, e, e.return)
                } catch (y) {
                    Y(e, e.return, y)
                }
            }
            break;
        case 1:
            $e(t, e), Ke(e), r & 512 && n !== null && Sn(n, n.return);
            break;
        case 5:
            if ($e(t, e), Ke(e), r & 512 && n !== null && Sn(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    hr(o, "")
                } catch (y) {
                    Y(e, e.return, y)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var l = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : l,
                    s = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    s === "input" && l.type === "radio" && l.name != null && Tc(o, l), Di(s, i);
                    var a = Di(s, l);
                    for (i = 0; i < u.length; i += 2) {
                        var d = u[i],
                            m = u[i + 1];
                        d === "style" ? zc(o, m) : d === "dangerouslySetInnerHTML" ? jc(o, m) : d === "children" ? hr(o, m) : Fs(o, d, m, a)
                    }
                    switch (s) {
                        case "input":
                            zi(o, l);
                            break;
                        case "textarea":
                            Ic(o, l);
                            break;
                        case "select":
                            var p = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!l.multiple;
                            var g = l.value;
                            g != null ? En(o, !!l.multiple, g, !1) : p !== !!l.multiple && (l.defaultValue != null ? En(o, !!l.multiple, l.defaultValue, !0) : En(o, !!l.multiple, l.multiple ? [] : "", !1))
                    }
                    o[kr] = l
                } catch (y) {
                    Y(e, e.return, y)
                }
            }
            break;
        case 6:
            if ($e(t, e), Ke(e), r & 4) {
                if (e.stateNode === null) throw Error(E(162));
                o = e.stateNode, l = e.memoizedProps;
                try {
                    o.nodeValue = l
                } catch (y) {
                    Y(e, e.return, y)
                }
            }
            break;
        case 3:
            if ($e(t, e), Ke(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                wr(t.containerInfo)
            } catch (y) {
                Y(e, e.return, y)
            }
            break;
        case 4:
            $e(t, e), Ke(e);
            break;
        case 13:
            $e(t, e), Ke(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (yu = X())), r & 4 && Aa(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (ae = (a = ae) || d, $e(t, e), ae = a) : $e(t, e), Ke(e), r & 8192) {
                if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !d && e.mode & 1)
                    for (P = e, d = e.child; d !== null;) {
                        for (m = P = d; P !== null;) {
                            switch (p = P, g = p.child, p.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    dr(4, p, p.return);
                                    break;
                                case 1:
                                    Sn(p, p.return);
                                    var w = p.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        r = p, n = p.return;
                                        try {
                                            t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                                        } catch (y) {
                                            Y(r, n, y)
                                        }
                                    }
                                    break;
                                case 5:
                                    Sn(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        Da(m);
                                        continue
                                    }
                            }
                            g !== null ? (g.return = p, P = g) : Da(m)
                        }
                        d = d.sibling
                    }
                e: for (d = null, m = e;;) {
                    if (m.tag === 5) {
                        if (d === null) {
                            d = m;
                            try {
                                o = m.stateNode, a ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = m.stateNode, u = m.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = Oc("display", i))
                            } catch (y) {
                                Y(e, e.return, y)
                            }
                        }
                    } else if (m.tag === 6) {
                        if (d === null) try {
                            m.stateNode.nodeValue = a ? "" : m.memoizedProps
                        } catch (y) {
                            Y(e, e.return, y)
                        }
                    } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                        m.child.return = m, m = m.child;
                        continue
                    }
                    if (m === e) break e;
                    for (; m.sibling === null;) {
                        if (m.return === null || m.return === e) break e;
                        d === m && (d = null), m = m.return
                    }
                    d === m && (d = null), m.sibling.return = m.return, m = m.sibling
                }
            }
            break;
        case 19:
            $e(t, e), Ke(e), r & 4 && Aa(e);
            break;
        case 21:
            break;
        default:
            $e(t, e), Ke(e)
    }
}

function Ke(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if ( of (n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(E(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (hr(o, ""), r.flags &= -33);
                    var l = Ma(e);
                    ms(e, l, o);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        s = Ma(e);
                    ps(e, s, i);
                    break;
                default:
                    throw Error(E(161))
            }
        }
        catch (u) {
            Y(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Wh(e, t, n) {
    P = e, uf(e)
}

function uf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; P !== null;) {
        var o = P,
            l = o.child;
        if (o.tag === 22 && r) {
            var i = o.memoizedState !== null || po;
            if (!i) {
                var s = o.alternate,
                    u = s !== null && s.memoizedState !== null || ae;
                s = po;
                var a = ae;
                if (po = i, (ae = u) && !a)
                    for (P = o; P !== null;) i = P, u = i.child, i.tag === 22 && i.memoizedState !== null ? Fa(o) : u !== null ? (u.return = i, P = u) : Fa(o);
                for (; l !== null;) P = l, uf(l), l = l.sibling;
                P = o, po = s, ae = a
            }
            $a(e)
        } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, P = l) : $a(e)
    }
}

function $a(e) {
    for (; P !== null;) {
        var t = P;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ae || Cl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ae)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : De(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var l = t.updateQueue;
                        l !== null && Sa(t, l, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Sa(t, i, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
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
                            var a = t.alternate;
                            if (a !== null) {
                                var d = a.memoizedState;
                                if (d !== null) {
                                    var m = d.dehydrated;
                                    m !== null && wr(m)
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
                        throw Error(E(163))
                }
                ae || t.flags & 512 && fs(t)
            } catch (p) {
                Y(t, t.return, p)
            }
        }
        if (t === e) {
            P = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, P = n;
            break
        }
        P = t.return
    }
}

function Da(e) {
    for (; P !== null;) {
        var t = P;
        if (t === e) {
            P = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, P = n;
            break
        }
        P = t.return
    }
}

function Fa(e) {
    for (; P !== null;) {
        var t = P;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Cl(4, t)
                    } catch (u) {
                        Y(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            Y(t, o, u)
                        }
                    }
                    var l = t.return;
                    try {
                        fs(t)
                    } catch (u) {
                        Y(t, l, u)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        fs(t)
                    } catch (u) {
                        Y(t, i, u)
                    }
            }
        } catch (u) {
            Y(t, t.return, u)
        }
        if (t === e) {
            P = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return, P = s;
            break
        }
        P = t.return
    }
}
var Hh = Math.ceil,
    ll = pt.ReactCurrentDispatcher,
    vu = pt.ReactCurrentOwner,
    Le = pt.ReactCurrentBatchConfig,
    M = 0,
    ne = null,
    J = null,
    oe = 0,
    _e = 0,
    _n = $t(0),
    ee = 0,
    Rr = null,
    en = 0,
    Nl = 0,
    gu = 0,
    fr = null,
    ve = null,
    yu = 0,
    Mn = 1 / 0,
    tt = null,
    il = !1,
    hs = null,
    Rt = null,
    mo = !1,
    kt = null,
    sl = 0,
    pr = 0,
    vs = null,
    zo = -1,
    Lo = 0;

function pe() {
    return M & 6 ? X() : zo !== -1 ? zo : zo = X()
}

function jt(e) {
    return e.mode & 1 ? M & 2 && oe !== 0 ? oe & -oe : Ph.transition !== null ? (Lo === 0 && (Lo = Bc()), Lo) : (e = $, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Zc(e.type)), e) : 1
}

function We(e, t, n, r) {
    if (50 < pr) throw pr = 0, vs = null, Error(E(185));
    $r(e, n, r), (!(M & 2) || e !== ne) && (e === ne && (!(M & 2) && (Nl |= n), ee === 4 && St(e, oe)), xe(e, r), n === 1 && M === 0 && !(t.mode & 1) && (Mn = X() + 500, _l && Dt()))
}

function xe(e, t) {
    var n = e.callbackNode;
    Pm(e, t);
    var r = Ho(e, e === ne ? oe : 0);
    if (r === 0) n !== null && Qu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Qu(n), t === 1) e.tag === 0 ? Nh(Va.bind(null, e)) : gd(Va.bind(null, e)), _h(function() {
            !(M & 6) && Dt()
        }), n = null;
        else {
            switch (Gc(r)) {
                case 1:
                    n = Hs;
                    break;
                case 4:
                    n = Wc;
                    break;
                case 16:
                    n = Wo;
                    break;
                case 536870912:
                    n = Hc;
                    break;
                default:
                    n = Wo
            }
            n = vf(n, af.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function af(e, t) {
    if (zo = -1, Lo = 0, M & 6) throw Error(E(327));
    var n = e.callbackNode;
    if (Tn() && e.callbackNode !== n) return null;
    var r = Ho(e, e === ne ? oe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ul(e, r);
    else {
        t = r;
        var o = M;
        M |= 2;
        var l = df();
        (ne !== e || oe !== t) && (tt = null, Mn = X() + 500, Yt(e, t));
        do try {
            Kh();
            break
        } catch (s) {
            cf(e, s)
        }
        while (!0);
        ru(), ll.current = l, M = o, J !== null ? t = 0 : (ne = null, oe = 0, t = ee)
    }
    if (t !== 0) {
        if (t === 2 && (o = Wi(e), o !== 0 && (r = o, t = gs(e, o))), t === 1) throw n = Rr, Yt(e, 0), St(e, r), xe(e, X()), n;
        if (t === 6) St(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !Bh(o) && (t = ul(e, r), t === 2 && (l = Wi(e), l !== 0 && (r = l, t = gs(e, l))), t === 1)) throw n = Rr, Yt(e, 0), St(e, r), xe(e, X()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(E(345));
                case 2:
                    Wt(e, ve, tt);
                    break;
                case 3:
                    if (St(e, r), (r & 130023424) === r && (t = yu + 500 - X(), 10 < t)) {
                        if (Ho(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            pe(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = Ji(Wt.bind(null, e, ve, tt), t);
                        break
                    }
                    Wt(e, ve, tt);
                    break;
                case 4:
                    if (St(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var i = 31 - be(r);
                        l = 1 << i, i = t[i], i > o && (o = i), r &= ~l
                    }
                    if (r = o, r = X() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Hh(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Ji(Wt.bind(null, e, ve, tt), r);
                        break
                    }
                    Wt(e, ve, tt);
                    break;
                case 5:
                    Wt(e, ve, tt);
                    break;
                default:
                    throw Error(E(329))
            }
        }
    }
    return xe(e, X()), e.callbackNode === n ? af.bind(null, e) : null
}

function gs(e, t) {
    var n = fr;
    return e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256), e = ul(e, t), e !== 2 && (t = ve, ve = n, t !== null && ys(t)), e
}

function ys(e) {
    ve === null ? ve = e : ve.push.apply(ve, e)
}

function Bh(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        l = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!He(l(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function St(e, t) {
    for (t &= ~gu, t &= ~Nl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - be(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Va(e) {
    if (M & 6) throw Error(E(327));
    Tn();
    var t = Ho(e, 0);
    if (!(t & 1)) return xe(e, X()), null;
    var n = ul(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Wi(e);
        r !== 0 && (t = r, n = gs(e, r))
    }
    if (n === 1) throw n = Rr, Yt(e, 0), St(e, t), xe(e, X()), n;
    if (n === 6) throw Error(E(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Wt(e, ve, tt), xe(e, X()), null
}

function wu(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n, M === 0 && (Mn = X() + 500, _l && Dt())
    }
}

function tn(e) {
    kt !== null && kt.tag === 0 && !(M & 6) && Tn();
    var t = M;
    M |= 1;
    var n = Le.transition,
        r = $;
    try {
        if (Le.transition = null, $ = 1, e) return e()
    } finally {
        $ = r, Le.transition = n, M = t, !(M & 6) && Dt()
    }
}

function xu() {
    _e = _n.current, W(_n)
}

function Yt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Sh(n)), J !== null)
        for (n = J.return; n !== null;) {
            var r = n;
            switch (eu(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Yo();
                    break;
                case 3:
                    zn(), W(ye), W(ce), au();
                    break;
                case 5:
                    uu(r);
                    break;
                case 4:
                    zn();
                    break;
                case 13:
                    W(G);
                    break;
                case 19:
                    W(G);
                    break;
                case 10:
                    ou(r.type._context);
                    break;
                case 22:
                case 23:
                    xu()
            }
            n = n.return
        }
    if (ne = e, J = e = Ot(e.current, null), oe = _e = t, ee = 0, Rr = null, gu = Nl = en = 0, ve = fr = null, Gt !== null) {
        for (t = 0; t < Gt.length; t++)
            if (n = Gt[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    l = n.pending;
                if (l !== null) {
                    var i = l.next;
                    l.next = o, r.next = i
                }
                n.pending = r
            }
        Gt = null
    }
    return e
}

function cf(e, t) {
    do {
        var n = J;
        try {
            if (ru(), Ro.current = ol, rl) {
                for (var r = K.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                rl = !1
            }
            if (qt = 0, te = q = K = null, cr = !1, Pr = 0, vu.current = null, n === null || n.return === null) {
                ee = 1, Rr = t, J = null;
                break
            }
            e: {
                var l = e,
                    i = n.return,
                    s = n,
                    u = t;
                if (t = oe, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var a = u,
                        d = s,
                        m = d.tag;
                    if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var p = d.alternate;
                        p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var g = Pa(i);
                    if (g !== null) {
                        g.flags &= -257, Ta(g, i, s, l, t), g.mode & 1 && Na(l, a, t), t = g, u = a;
                        var w = t.updateQueue;
                        if (w === null) {
                            var y = new Set;
                            y.add(u), t.updateQueue = y
                        } else w.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Na(l, a, t), Su();
                            break e
                        }
                        u = Error(E(426))
                    }
                } else if (H && s.mode & 1) {
                    var S = Pa(i);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256), Ta(S, i, s, l, t), tu(Ln(u, s));
                        break e
                    }
                }
                l = u = Ln(u, s),
                ee !== 4 && (ee = 2),
                fr === null ? fr = [l] : fr.push(l),
                l = i;do {
                    switch (l.tag) {
                        case 3:
                            l.flags |= 65536, t &= -t, l.lanes |= t;
                            var f = Gd(l, u, t);
                            xa(l, f);
                            break e;
                        case 1:
                            s = u;
                            var c = l.type,
                                h = l.stateNode;
                            if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Rt === null || !Rt.has(h)))) {
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var _ = Kd(l, s, t);
                                xa(l, _);
                                break e
                            }
                    }
                    l = l.return
                } while (l !== null)
            }
            pf(n)
        } catch (k) {
            t = k, J === n && n !== null && (J = n = n.return);
            continue
        }
        break
    } while (!0)
}

function df() {
    var e = ll.current;
    return ll.current = ol, e === null ? ol : e
}

function Su() {
    (ee === 0 || ee === 3 || ee === 2) && (ee = 4), ne === null || !(en & 268435455) && !(Nl & 268435455) || St(ne, oe)
}

function ul(e, t) {
    var n = M;
    M |= 2;
    var r = df();
    (ne !== e || oe !== t) && (tt = null, Yt(e, t));
    do try {
        Gh();
        break
    } catch (o) {
        cf(e, o)
    }
    while (!0);
    if (ru(), M = n, ll.current = r, J !== null) throw Error(E(261));
    return ne = null, oe = 0, ee
}

function Gh() {
    for (; J !== null;) ff(J)
}

function Kh() {
    for (; J !== null && !ym();) ff(J)
}

function ff(e) {
    var t = hf(e.alternate, e, _e);
    e.memoizedProps = e.pendingProps, t === null ? pf(e) : J = t, vu.current = null
}

function pf(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Vh(n, t), n !== null) {
                n.flags &= 32767, J = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                ee = 6, J = null;
                return
            }
        } else if (n = Fh(n, t, _e), n !== null) {
            J = n;
            return
        }
        if (t = t.sibling, t !== null) {
            J = t;
            return
        }
        J = t = e
    } while (t !== null);
    ee === 0 && (ee = 5)
}

function Wt(e, t, n) {
    var r = $,
        o = Le.transition;
    try {
        Le.transition = null, $ = 1, Qh(e, t, n, r)
    } finally {
        Le.transition = o, $ = r
    }
    return null
}

function Qh(e, t, n, r) {
    do Tn(); while (kt !== null);
    if (M & 6) throw Error(E(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (Tm(e, l), e === ne && (J = ne = null, oe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || mo || (mo = !0, vf(Wo, function() {
            return Tn(), null
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
        l = Le.transition, Le.transition = null;
        var i = $;
        $ = 1;
        var s = M;
        M |= 4, vu.current = null, bh(e, n), sf(n, e), mh(Yi), Bo = !!Qi, Yi = Qi = null, e.current = n, Wh(n), wm(), M = s, $ = i, Le.transition = l
    } else e.current = n;
    if (mo && (mo = !1, kt = e, sl = o), l = e.pendingLanes, l === 0 && (Rt = null), _m(n.stateNode), xe(e, X()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (il) throw il = !1, e = hs, hs = null, e;
    return sl & 1 && e.tag !== 0 && Tn(), l = e.pendingLanes, l & 1 ? e === vs ? pr++ : (pr = 0, vs = e) : pr = 0, Dt(), null
}

function Tn() {
    if (kt !== null) {
        var e = Gc(sl),
            t = Le.transition,
            n = $;
        try {
            if (Le.transition = null, $ = 16 > e ? 16 : e, kt === null) var r = !1;
            else {
                if (e = kt, kt = null, sl = 0, M & 6) throw Error(E(331));
                var o = M;
                for (M |= 4, P = e.current; P !== null;) {
                    var l = P,
                        i = l.child;
                    if (P.flags & 16) {
                        var s = l.deletions;
                        if (s !== null) {
                            for (var u = 0; u < s.length; u++) {
                                var a = s[u];
                                for (P = a; P !== null;) {
                                    var d = P;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            dr(8, d, l)
                                    }
                                    var m = d.child;
                                    if (m !== null) m.return = d, P = m;
                                    else
                                        for (; P !== null;) {
                                            d = P;
                                            var p = d.sibling,
                                                g = d.return;
                                            if (rf(d), d === a) {
                                                P = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = g, P = p;
                                                break
                                            }
                                            P = g
                                        }
                                }
                            }
                            var w = l.alternate;
                            if (w !== null) {
                                var y = w.child;
                                if (y !== null) {
                                    w.child = null;
                                    do {
                                        var S = y.sibling;
                                        y.sibling = null, y = S
                                    } while (y !== null)
                                }
                            }
                            P = l
                        }
                    }
                    if (l.subtreeFlags & 2064 && i !== null) i.return = l, P = i;
                    else e: for (; P !== null;) {
                        if (l = P, l.flags & 2048) switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                                dr(9, l, l.return)
                        }
                        var f = l.sibling;
                        if (f !== null) {
                            f.return = l.return, P = f;
                            break e
                        }
                        P = l.return
                    }
                }
                var c = e.current;
                for (P = c; P !== null;) {
                    i = P;
                    var h = i.child;
                    if (i.subtreeFlags & 2064 && h !== null) h.return = i, P = h;
                    else e: for (i = c; P !== null;) {
                        if (s = P, s.flags & 2048) try {
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Cl(9, s)
                            }
                        } catch (k) {
                            Y(s, s.return, k)
                        }
                        if (s === i) {
                            P = null;
                            break e
                        }
                        var _ = s.sibling;
                        if (_ !== null) {
                            _.return = s.return, P = _;
                            break e
                        }
                        P = s.return
                    }
                }
                if (M = o, Dt(), Je && typeof Je.onPostCommitFiberRoot == "function") try {
                    Je.onPostCommitFiberRoot(gl, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            $ = n, Le.transition = t
        }
    }
    return !1
}

function Ua(e, t, n) {
    t = Ln(n, t), t = Gd(e, t, 1), e = It(e, t, 1), t = pe(), e !== null && ($r(e, 1, t), xe(e, t))
}

function Y(e, t, n) {
    if (e.tag === 3) Ua(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Ua(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Rt === null || !Rt.has(r))) {
                    e = Ln(n, e), e = Kd(t, e, 1), t = It(t, e, 1), e = pe(), t !== null && ($r(t, 1, e), xe(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Yh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = pe(), e.pingedLanes |= e.suspendedLanes & n, ne === e && (oe & n) === n && (ee === 4 || ee === 3 && (oe & 130023424) === oe && 500 > X() - yu ? Yt(e, 0) : gu |= n), xe(e, t)
}

function mf(e, t) {
    t === 0 && (e.mode & 1 ? (t = ro, ro <<= 1, !(ro & 130023424) && (ro = 4194304)) : t = 1);
    var n = pe();
    e = at(e, t), e !== null && ($r(e, t, n), xe(e, n))
}

function Xh(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), mf(e, n)
}

function Jh(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(E(314))
    }
    r !== null && r.delete(t), mf(e, n)
}
var hf;
hf = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ye.current) ge = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return ge = !1, Dh(e, t, n);
            ge = !!(e.flags & 131072)
        }
    else ge = !1, H && t.flags & 1048576 && yd(t, Zo, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Oo(e, t), e = t.pendingProps;
            var o = Rn(t, ce.current);
            Pn(t, n), o = du(null, t, r, e, o, n);
            var l = fu();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, we(r) ? (l = !0, Xo(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, iu(t), o.updater = kl, t.stateNode = o, o._reactInternals = t, os(t, r, e, n), t = ss(null, t, r, !0, l, n)) : (t.tag = 0, H && l && qs(t), fe(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Oo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = qh(r), e = De(r, e), o) {
                    case 0:
                        t = is(null, t, r, e, n);
                        break e;
                    case 1:
                        t = ja(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ia(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Ra(null, t, r, De(r.type, e), n);
                        break e
                }
                throw Error(E(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : De(r, o), is(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : De(r, o), ja(e, t, r, o, n);
        case 3:
            e: {
                if (Jd(t), e === null) throw Error(E(387));r = t.pendingProps,
                l = t.memoizedState,
                o = l.element,
                kd(e, t),
                tl(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, l.isDehydrated)
                    if (l = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions
                        }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = Ln(Error(E(423)), t), t = Oa(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                    o = Ln(Error(E(424)), t), t = Oa(e, t, r, n, o);
                    break e
                } else
                    for (Ee = Tt(t.stateNode.containerInfo.firstChild), Ce = t, H = !0, Ve = null, n = _d(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (jn(), r === o) {
                        t = ct(e, t, n);
                        break e
                    }
                    fe(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Cd(t), e === null && ts(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Xi(r, o) ? i = null : l !== null && Xi(r, l) && (t.flags |= 32), Xd(e, t), fe(e, t, i, n), t.child;
        case 6:
            return e === null && ts(t), null;
        case 13:
            return Zd(e, t, n);
        case 4:
            return su(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = On(t, null, r, n) : fe(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : De(r, o), Ia(e, t, r, o, n);
        case 7:
            return fe(e, t, t.pendingProps, n), t.child;
        case 8:
            return fe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return fe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, V(qo, r._currentValue), r._currentValue = i, l !== null)
                    if (He(l.value, i)) {
                        if (l.children === o.children && !ye.current) {
                            t = ct(e, t, n);
                            break e
                        }
                    } else
                        for (l = t.child, l !== null && (l.return = t); l !== null;) {
                            var s = l.dependencies;
                            if (s !== null) {
                                i = l.child;
                                for (var u = s.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (l.tag === 1) {
                                            u = lt(-1, n & -n), u.tag = 2;
                                            var a = l.updateQueue;
                                            if (a !== null) {
                                                a = a.shared;
                                                var d = a.pending;
                                                d === null ? u.next = u : (u.next = d.next, d.next = u), a.pending = u
                                            }
                                        }
                                        l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), ns(l.return, n, t), s.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                            else if (l.tag === 18) {
                                if (i = l.return, i === null) throw Error(E(341));
                                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), ns(i, n, t), i = l.sibling
                            } else i = l.child;
                            if (i !== null) i.return = l;
                            else
                                for (i = l; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (l = i.sibling, l !== null) {
                                        l.return = i.return, i = l;
                                        break
                                    }
                                    i = i.return
                                }
                            l = i
                        }
                fe(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, Pn(t, n), o = Me(o), r = r(o), t.flags |= 1, fe(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = De(r, t.pendingProps), o = De(r.type, o), Ra(e, t, r, o, n);
        case 15:
            return Qd(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : De(r, o), Oo(e, t), t.tag = 1, we(r) ? (e = !0, Xo(t)) : e = !1, Pn(t, n), Bd(t, r, o), os(t, r, o, n), ss(null, t, r, !0, e, n);
        case 19:
            return qd(e, t, n);
        case 22:
            return Yd(e, t, n)
    }
    throw Error(E(156, t.tag))
};

function vf(e, t) {
    return bc(e, t)
}

function Zh(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function ze(e, t, n, r) {
    return new Zh(e, t, n, r)
}

function _u(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function qh(e) {
    if (typeof e == "function") return _u(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Us) return 11;
        if (e === bs) return 14
    }
    return 2
}

function Ot(e, t) {
    var n = e.alternate;
    return n === null ? (n = ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Mo(e, t, n, r, o, l) {
    var i = 2;
    if (r = e, typeof e == "function") _u(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
        case fn:
            return Xt(n.children, o, l, t);
        case Vs:
            i = 8, o |= 8;
            break;
        case Ti:
            return e = ze(12, n, t, o | 2), e.elementType = Ti, e.lanes = l, e;
        case Ii:
            return e = ze(13, n, t, o), e.elementType = Ii, e.lanes = l, e;
        case Ri:
            return e = ze(19, n, t, o), e.elementType = Ri, e.lanes = l, e;
        case Cc:
            return Pl(n, o, l, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Ec:
                    i = 10;
                    break e;
                case kc:
                    i = 9;
                    break e;
                case Us:
                    i = 11;
                    break e;
                case bs:
                    i = 14;
                    break e;
                case yt:
                    i = 16, r = null;
                    break e
            }
            throw Error(E(130, e == null ? e : typeof e, ""))
    }
    return t = ze(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t
}

function Xt(e, t, n, r) {
    return e = ze(7, e, r, t), e.lanes = n, e
}

function Pl(e, t, n, r) {
    return e = ze(22, e, r, t), e.elementType = Cc, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function yi(e, t, n) {
    return e = ze(6, e, null, t), e.lanes = n, e
}

function wi(e, t, n) {
    return t = ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function ev(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ql(0), this.expirationTimes = ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ql(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function Eu(e, t, n, r, o, l, i, s, u) {
    return e = new ev(e, t, n, s, u), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = ze(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, iu(l), e
}

function tv(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: dn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function gf(e) {
    if (!e) return Lt;
    e = e._reactInternals;
    e: {
        if (ln(e) !== e || e.tag !== 1) throw Error(E(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (we(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(E(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (we(n)) return vd(e, n, t)
    }
    return t
}

function yf(e, t, n, r, o, l, i, s, u) {
    return e = Eu(n, r, !0, e, o, l, i, s, u), e.context = gf(null), n = e.current, r = pe(), o = jt(n), l = lt(r, o), l.callback = t ? ? null, It(n, l, o), e.current.lanes = o, $r(e, o, r), xe(e, r), e
}

function Tl(e, t, n, r) {
    var o = t.current,
        l = pe(),
        i = jt(o);
    return n = gf(n), t.context === null ? t.context = n : t.pendingContext = n, t = lt(l, i), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = It(o, t, i), e !== null && (We(e, o, i, l), Io(e, o, i)), i
}

function al(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function ba(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function ku(e, t) {
    ba(e, t), (e = e.alternate) && ba(e, t)
}

function nv() {
    return null
}
var wf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Cu(e) {
    this._internalRoot = e
}
Il.prototype.render = Cu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(E(409));
    Tl(e, t, null, null)
};
Il.prototype.unmount = Cu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        tn(function() {
            Tl(null, e, null, null)
        }), t[ut] = null
    }
};

function Il(e) {
    this._internalRoot = e
}
Il.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Yc();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < xt.length && t !== 0 && t < xt[n].priority; n++);
        xt.splice(n, 0, e), n === 0 && Jc(e)
    }
};

function Nu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Rl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Wa() {}

function rv(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var l = r;
            r = function() {
                var a = al(i);
                l.call(a)
            }
        }
        var i = yf(t, r, e, 0, null, !1, !1, "", Wa);
        return e._reactRootContainer = i, e[ut] = i.current, _r(e.nodeType === 8 ? e.parentNode : e), tn(), i
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var a = al(u);
            s.call(a)
        }
    }
    var u = Eu(e, 0, !1, null, null, !1, !1, "", Wa);
    return e._reactRootContainer = u, e[ut] = u.current, _r(e.nodeType === 8 ? e.parentNode : e), tn(function() {
        Tl(t, u, n, r)
    }), u
}

function jl(e, t, n, r, o) {
    var l = n._reactRootContainer;
    if (l) {
        var i = l;
        if (typeof o == "function") {
            var s = o;
            o = function() {
                var u = al(i);
                s.call(u)
            }
        }
        Tl(t, i, e, o)
    } else i = rv(n, t, e, o, r);
    return al(i)
}
Kc = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = tr(t.pendingLanes);
                n !== 0 && (Bs(t, n | 1), xe(t, X()), !(M & 6) && (Mn = X() + 500, Dt()))
            }
            break;
        case 13:
            tn(function() {
                var r = at(e, 1);
                if (r !== null) {
                    var o = pe();
                    We(r, e, 1, o)
                }
            }), ku(e, 1)
    }
};
Gs = function(e) {
    if (e.tag === 13) {
        var t = at(e, 134217728);
        if (t !== null) {
            var n = pe();
            We(t, e, 134217728, n)
        }
        ku(e, 134217728)
    }
};
Qc = function(e) {
    if (e.tag === 13) {
        var t = jt(e),
            n = at(e, t);
        if (n !== null) {
            var r = pe();
            We(n, e, t, r)
        }
        ku(e, t)
    }
};
Yc = function() {
    return $
};
Xc = function(e, t) {
    var n = $;
    try {
        return $ = e, t()
    } finally {
        $ = n
    }
};
Vi = function(e, t, n) {
    switch (t) {
        case "input":
            if (zi(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Sl(r);
                        if (!o) throw Error(E(90));
                        Pc(r), zi(r, o)
                    }
                }
            }
            break;
        case "textarea":
            Ic(e, n);
            break;
        case "select":
            t = n.value, t != null && En(e, !!n.multiple, t, !1)
    }
};
Ac = wu;
$c = tn;
var ov = {
        usingClientEntryPoint: !1,
        Events: [Fr, vn, Sl, Lc, Mc, wu]
    },
    Xn = {
        findFiberByHostInstance: Bt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    lv = {
        bundleType: Xn.bundleType,
        version: Xn.version,
        rendererPackageName: Xn.rendererPackageName,
        rendererConfig: Xn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: pt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Vc(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Xn.findFiberByHostInstance || nv,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ho.isDisabled && ho.supportsFiber) try {
        gl = ho.inject(lv), Je = ho
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ov;
Ie.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Nu(t)) throw Error(E(200));
    return tv(e, t, null, n)
};
Ie.createRoot = function(e, t) {
    if (!Nu(e)) throw Error(E(299));
    var n = !1,
        r = "",
        o = wf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Eu(e, 1, !1, null, null, n, !1, r, o), e[ut] = t.current, _r(e.nodeType === 8 ? e.parentNode : e), new Cu(t)
};
Ie.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
    return e = Vc(t), e = e === null ? null : e.stateNode, e
};
Ie.flushSync = function(e) {
    return tn(e)
};
Ie.hydrate = function(e, t, n) {
    if (!Rl(t)) throw Error(E(200));
    return jl(null, e, t, !0, n)
};
Ie.hydrateRoot = function(e, t, n) {
    if (!Nu(e)) throw Error(E(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        l = "",
        i = wf;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = yf(t, null, e, 1, n ? ? null, o, !1, l, i), e[ut] = t.current, _r(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Il(t)
};
Ie.render = function(e, t, n) {
    if (!Rl(t)) throw Error(E(200));
    return jl(null, e, t, !1, n)
};
Ie.unmountComponentAtNode = function(e) {
    if (!Rl(e)) throw Error(E(40));
    return e._reactRootContainer ? (tn(function() {
        jl(null, null, e, !1, function() {
            e._reactRootContainer = null, e[ut] = null
        })
    }), !0) : !1
};
Ie.unstable_batchedUpdates = wu;
Ie.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Rl(n)) throw Error(E(200));
    if (e == null || e._reactInternals === void 0) throw Error(E(38));
    return jl(e, t, n, !1, r)
};
Ie.version = "18.3.1-next-f1338f8080-20240426";

function xf() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xf)
    } catch (e) {
        console.error(e)
    }
}
xf(), wc.exports = Ie;
var Sf = wc.exports,
    Ha = Sf;
Ni.createRoot = Ha.createRoot, Ni.hydrateRoot = Ha.hydrateRoot;
let iv = {
        data: ""
    },
    sv = e => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
        innerHTML: " ",
        id: "_goober"
    })).firstChild : e || iv,
    uv = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    av = /\/\*[^]*?\*\/|  +/g,
    Ba = /\n+/g,
    _t = (e, t) => {
        let n = "",
            r = "",
            o = "";
        for (let l in e) {
            let i = e[l];
            l[0] == "@" ? l[1] == "i" ? n = l + " " + i + ";" : r += l[1] == "f" ? _t(i, l) : l + "{" + _t(i, l[1] == "k" ? "" : t) + "}" : typeof i == "object" ? r += _t(i, t ? t.replace(/([^,])+/g, s => l.replace(/(^:.*)|([^,])+/g, u => /&/.test(u) ? u.replace(/&/g, s) : s ? s + " " + u : u)) : l) : i != null && (l = /^--/.test(l) ? l : l.replace(/[A-Z]/g, "-$&").toLowerCase(), o += _t.p ? _t.p(l, i) : l + ":" + i + ";")
        }
        return n + (t && o ? t + "{" + o + "}" : o) + r
    },
    qe = {},
    _f = e => {
        if (typeof e == "object") {
            let t = "";
            for (let n in e) t += n + _f(e[n]);
            return t
        }
        return e
    },
    cv = (e, t, n, r, o) => {
        let l = _f(e),
            i = qe[l] || (qe[l] = (u => {
                let a = 0,
                    d = 11;
                for (; a < u.length;) d = 101 * d + u.charCodeAt(a++) >>> 0;
                return "go" + d
            })(l));
        if (!qe[i]) {
            let u = l !== e ? e : (a => {
                let d, m, p = [{}];
                for (; d = uv.exec(a.replace(av, ""));) d[4] ? p.shift() : d[3] ? (m = d[3].replace(Ba, " ").trim(), p.unshift(p[0][m] = p[0][m] || {})) : p[0][d[1]] = d[2].replace(Ba, " ").trim();
                return p[0]
            })(e);
            qe[i] = _t(o ? {
                ["@keyframes " + i]: u
            } : u, n ? "" : "." + i)
        }
        let s = n && qe.g ? qe.g : null;
        return n && (qe.g = qe[i]), ((u, a, d, m) => {
            m ? a.data = a.data.replace(m, u) : a.data.indexOf(u) === -1 && (a.data = d ? u + a.data : a.data + u)
        })(qe[i], t, r, s), i
    },
    dv = (e, t, n) => e.reduce((r, o, l) => {
        let i = t[l];
        if (i && i.call) {
            let s = i(n),
                u = s && s.props && s.props.className || /^go/.test(s) && s;
            i = u ? "." + u : s && typeof s == "object" ? s.props ? "" : _t(s, "") : s === !1 ? "" : s
        }
        return r + o + (i ? ? "")
    }, "");

function Ol(e) {
    let t = this || {},
        n = e.call ? e(t.p) : e;
    return cv(n.unshift ? n.raw ? dv(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {}) : n, sv(t.target), t.g, t.o, t.k)
}
let Ef, ws, xs;
Ol.bind({
    g: 1
});
let dt = Ol.bind({
    k: 1
});

function fv(e, t, n, r) {
    _t.p = t, Ef = e, ws = n, xs = r
}

function Ft(e, t) {
    let n = this || {};
    return function() {
        let r = arguments;

        function o(l, i) {
            let s = Object.assign({}, l),
                u = s.className || o.className;
            n.p = Object.assign({
                theme: ws && ws()
            }, s), n.o = / *go\d+/.test(u), s.className = Ol.apply(n, r) + (u ? " " + u : "");
            let a = e;
            return e[0] && (a = s.as || e, delete s.as), xs && a[0] && xs(s), Ef(a, s)
        }
        return o
    }
}
var pv = e => typeof e == "function",
    cl = (e, t) => pv(e) ? e(t) : e,
    mv = (() => {
        let e = 0;
        return () => (++e).toString()
    })(),
    kf = (() => {
        let e;
        return () => {
            if (e === void 0 && typeof window < "u") {
                let t = matchMedia("(prefers-reduced-motion: reduce)");
                e = !t || t.matches
            }
            return e
        }
    })(),
    hv = 20,
    Ao = new Map,
    vv = 1e3,
    Ga = e => {
        if (Ao.has(e)) return;
        let t = setTimeout(() => {
            Ao.delete(e), sn({
                type: 4,
                toastId: e
            })
        }, vv);
        Ao.set(e, t)
    },
    gv = e => {
        let t = Ao.get(e);
        t && clearTimeout(t)
    },
    Ss = (e, t) => {
        switch (t.type) {
            case 0:
                return { ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, hv)
                };
            case 1:
                return t.toast.id && gv(t.toast.id), { ...e,
                    toasts: e.toasts.map(l => l.id === t.toast.id ? { ...l,
                        ...t.toast
                    } : l)
                };
            case 2:
                let {
                    toast: n
                } = t;
                return e.toasts.find(l => l.id === n.id) ? Ss(e, {
                    type: 1,
                    toast: n
                }) : Ss(e, {
                    type: 0,
                    toast: n
                });
            case 3:
                let {
                    toastId: r
                } = t;
                return r ? Ga(r) : e.toasts.forEach(l => {
                    Ga(l.id)
                }), { ...e,
                    toasts: e.toasts.map(l => l.id === r || r === void 0 ? { ...l,
                        visible: !1
                    } : l)
                };
            case 4:
                return t.toastId === void 0 ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts.filter(l => l.id !== t.toastId)
                };
            case 5:
                return { ...e,
                    pausedAt: t.time
                };
            case 6:
                let o = t.time - (e.pausedAt || 0);
                return { ...e,
                    pausedAt: void 0,
                    toasts: e.toasts.map(l => ({ ...l,
                        pauseDuration: l.pauseDuration + o
                    }))
                }
        }
    },
    $o = [],
    Do = {
        toasts: [],
        pausedAt: void 0
    },
    sn = e => {
        Do = Ss(Do, e), $o.forEach(t => {
            t(Do)
        })
    },
    yv = {
        blank: 4e3,
        error: 4e3,
        success: 2e3,
        loading: 1 / 0,
        custom: 4e3
    },
    wv = (e = {}) => {
        let [t, n] = x.useState(Do);
        x.useEffect(() => ($o.push(n), () => {
            let o = $o.indexOf(n);
            o > -1 && $o.splice(o, 1)
        }), [t]);
        let r = t.toasts.map(o => {
            var l, i;
            return { ...e,
                ...e[o.type],
                ...o,
                duration: o.duration || ((l = e[o.type]) == null ? void 0 : l.duration) || (e == null ? void 0 : e.duration) || yv[o.type],
                style: { ...e.style,
                    ...(i = e[o.type]) == null ? void 0 : i.style,
                    ...o.style
                }
            }
        });
        return { ...t,
            toasts: r
        }
    },
    xv = (e, t = "blank", n) => ({
        createdAt: Date.now(),
        visible: !0,
        type: t,
        ariaProps: {
            role: "status",
            "aria-live": "polite"
        },
        message: e,
        pauseDuration: 0,
        ...n,
        id: (n == null ? void 0 : n.id) || mv()
    }),
    Ur = e => (t, n) => {
        let r = xv(t, e, n);
        return sn({
            type: 2,
            toast: r
        }), r.id
    },
    ke = (e, t) => Ur("blank")(e, t);
ke.error = Ur("error");
ke.success = Ur("success");
ke.loading = Ur("loading");
ke.custom = Ur("custom");
ke.dismiss = e => {
    sn({
        type: 3,
        toastId: e
    })
};
ke.remove = e => sn({
    type: 4,
    toastId: e
});
ke.promise = (e, t, n) => {
    let r = ke.loading(t.loading, { ...n,
        ...n == null ? void 0 : n.loading
    });
    return e.then(o => (ke.success(cl(t.success, o), {
        id: r,
        ...n,
        ...n == null ? void 0 : n.success
    }), o)).catch(o => {
        ke.error(cl(t.error, o), {
            id: r,
            ...n,
            ...n == null ? void 0 : n.error
        })
    }), e
};
var Sv = (e, t) => {
        sn({
            type: 1,
            toast: {
                id: e,
                height: t
            }
        })
    },
    _v = () => {
        sn({
            type: 5,
            time: Date.now()
        })
    },
    Ev = e => {
        let {
            toasts: t,
            pausedAt: n
        } = wv(e);
        x.useEffect(() => {
            if (n) return;
            let l = Date.now(),
                i = t.map(s => {
                    if (s.duration === 1 / 0) return;
                    let u = (s.duration || 0) + s.pauseDuration - (l - s.createdAt);
                    if (u < 0) {
                        s.visible && ke.dismiss(s.id);
                        return
                    }
                    return setTimeout(() => ke.dismiss(s.id), u)
                });
            return () => {
                i.forEach(s => s && clearTimeout(s))
            }
        }, [t, n]);
        let r = x.useCallback(() => {
                n && sn({
                    type: 6,
                    time: Date.now()
                })
            }, [n]),
            o = x.useCallback((l, i) => {
                let {
                    reverseOrder: s = !1,
                    gutter: u = 8,
                    defaultPosition: a
                } = i || {}, d = t.filter(g => (g.position || a) === (l.position || a) && g.height), m = d.findIndex(g => g.id === l.id), p = d.filter((g, w) => w < m && g.visible).length;
                return d.filter(g => g.visible).slice(...s ? [p + 1] : [0, p]).reduce((g, w) => g + (w.height || 0) + u, 0)
            }, [t]);
        return {
            toasts: t,
            handlers: {
                updateHeight: Sv,
                startPause: _v,
                endPause: r,
                calculateOffset: o
            }
        }
    },
    kv = dt `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
    Cv = dt `
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
    Nv = dt `
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
    Pv = Ft("div")
`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${kv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Cv} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Nv} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, Tv = dt `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, Iv = Ft("div")
`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Tv} 1s linear infinite;
`, Rv = dt `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, jv = dt `
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, Ov = Ft("div")
`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Rv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${jv} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, zv = Ft("div")
`
  position: absolute;
`, Lv = Ft("div")
`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Mv = dt `
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Av = Ft("div")
`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Mv} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, $v = ({
    toast: e
}) => {
    let {
        icon: t,
        type: n,
        iconTheme: r
    } = e;
    return t !== void 0 ? typeof t == "string" ? x.createElement(Av, null, t) : t : n === "blank" ? null : x.createElement(Lv, null, x.createElement(Iv, { ...r
    }), n !== "loading" && x.createElement(zv, null, n === "error" ? x.createElement(Pv, { ...r
    }) : x.createElement(Ov, { ...r
    })))
}, Dv = e => `
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, Fv = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`, Vv = "0%{opacity:0;} 100%{opacity:1;}", Uv = "0%{opacity:1;} 100%{opacity:0;}", bv = Ft("div")
`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, Wv = Ft("div")
`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Hv = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
        [r, o] = kf() ? [Vv, Uv] : [Dv(n), Fv(n)];
    return {
        animation: t ? `${dt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${dt(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    }
}, Bv = x.memo(({
    toast: e,
    position: t,
    style: n,
    children: r
}) => {
    let o = e.height ? Hv(e.position || t || "top-center", e.visible) : {
            opacity: 0
        },
        l = x.createElement($v, {
            toast: e
        }),
        i = x.createElement(Wv, { ...e.ariaProps
        }, cl(e.message, e));
    return x.createElement(bv, {
        className: e.className,
        style: { ...o,
            ...n,
            ...e.style
        }
    }, typeof r == "function" ? r({
        icon: l,
        message: i
    }) : x.createElement(x.Fragment, null, l, i))
});
fv(x.createElement);
var Gv = ({
        id: e,
        className: t,
        style: n,
        onHeightUpdate: r,
        children: o
    }) => {
        let l = x.useCallback(i => {
            if (i) {
                let s = () => {
                    let u = i.getBoundingClientRect().height;
                    r(e, u)
                };
                s(), new MutationObserver(s).observe(i, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                })
            }
        }, [e, r]);
        return x.createElement("div", {
            ref: l,
            className: t,
            style: n
        }, o)
    },
    Kv = (e, t) => {
        let n = e.includes("top"),
            r = n ? {
                top: 0
            } : {
                bottom: 0
            },
            o = e.includes("center") ? {
                justifyContent: "center"
            } : e.includes("right") ? {
                justifyContent: "flex-end"
            } : {};
        return {
            left: 0,
            right: 0,
            display: "flex",
            position: "absolute",
            transition: kf() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
            transform: `translateY(${t*(n?1:-1)}px)`,
            ...r,
            ...o
        }
    },
    Qv = Ol `
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
    vo = 16,
    Yv = ({
        reverseOrder: e,
        position: t = "top-center",
        toastOptions: n,
        gutter: r,
        children: o,
        containerStyle: l,
        containerClassName: i
    }) => {
        let {
            toasts: s,
            handlers: u
        } = Ev(n);
        return x.createElement("div", {
            style: {
                position: "fixed",
                zIndex: 9999,
                top: vo,
                left: vo,
                right: vo,
                bottom: vo,
                pointerEvents: "none",
                ...l
            },
            className: i,
            onMouseEnter: u.startPause,
            onMouseLeave: u.endPause
        }, s.map(a => {
            let d = a.position || t,
                m = u.calculateOffset(a, {
                    reverseOrder: e,
                    gutter: r,
                    defaultPosition: t
                }),
                p = Kv(d, m);
            return x.createElement(Gv, {
                id: a.id,
                key: a.id,
                onHeightUpdate: u.updateHeight,
                className: a.visible ? Qv : "",
                style: p
            }, a.type === "custom" ? cl(a.message, a) : o ? o(a) : x.createElement(Bv, {
                toast: a,
                position: d
            }))
        }))
    },
    Mt = ke,
    Xv = "@vercel/analytics",
    Jv = "1.3.1",
    Zv = () => {
        window.va || (window.va = function(...t) {
            (window.vaq = window.vaq || []).push(t)
        })
    };

function Cf() {
    return typeof window < "u"
}

function Nf() {
    try {
        const e = "production"
    } catch {}
    return "production"
}

function qv(e = "auto") {
    if (e === "auto") {
        window.vam = Nf();
        return
    }
    window.vam = e
}

function eg() {
    return (Cf() ? window.vam : Nf()) || "production"
}

function xi() {
    return eg() === "development"
}
var tg = "https://va.vercel-scripts.com/v1/script.debug.js",
    ng = "/_vercel/insights/script.js";

function rg(e = {
    debug: !0
}) {
    var t;
    if (!Cf()) return;
    qv(e.mode), Zv(), e.beforeSend && ((t = window.va) == null || t.call(window, "beforeSend", e.beforeSend));
    const n = e.scriptSrc || (xi() ? tg : ng);
    if (document.head.querySelector(`script[src*="${n}"]`)) return;
    const r = document.createElement("script");
    r.src = n, r.defer = !0, r.dataset.sdkn = Xv + (e.framework ? `/${e.framework}` : ""), r.dataset.sdkv = Jv, e.disableAutoTrack && (r.dataset.disableAutoTrack = "1"), e.endpoint && (r.dataset.endpoint = e.endpoint), e.dsn && (r.dataset.dsn = e.dsn), r.onerror = () => {
        const o = xi() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${o}`)
    }, xi() && e.debug === !1 && (r.dataset.debug = "false"), document.head.appendChild(r)
}

function og({
    route: e,
    path: t
}) {
    var n;
    (n = window.va) == null || n.call(window, "pageview", {
        route: e,
        path: t
    })
}

function lg(e) {
    return x.useEffect(() => {
        rg({
            framework: e.framework || "react",
            ...e.route !== void 0 && {
                disableAutoTrack: !0
            },
            ...e
        })
    }, []), x.useEffect(() => {
        e.route && e.path && og({
            route: e.route,
            path: e.path
        })
    }, [e.route, e.path]), null
}

function it(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function br(e, t = []) {
    let n = [];

    function r(l, i) {
        const s = x.createContext(i),
            u = n.length;
        n = [...n, i];

        function a(m) {
            const {
                scope: p,
                children: g,
                ...w
            } = m, y = (p == null ? void 0 : p[e][u]) || s, S = x.useMemo(() => w, Object.values(w));
            return v.jsx(y.Provider, {
                value: S,
                children: g
            })
        }

        function d(m, p) {
            const g = (p == null ? void 0 : p[e][u]) || s,
                w = x.useContext(g);
            if (w) return w;
            if (i !== void 0) return i;
            throw new Error(`\`${m}\` must be used within \`${l}\``)
        }
        return a.displayName = l + "Provider", [a, d]
    }
    const o = () => {
        const l = n.map(i => x.createContext(i));
        return function(s) {
            const u = (s == null ? void 0 : s[e]) || l;
            return x.useMemo(() => ({
                [`__scope${e}`]: { ...s,
                    [e]: u
                }
            }), [s, u])
        }
    };
    return o.scopeName = e, [r, ig(o, ...t)]
}

function ig(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(l) {
            const i = r.reduce((s, {
                useScope: u,
                scopeName: a
            }) => {
                const m = u(l)[`__scope${a}`];
                return { ...s,
                    ...m
                }
            }, {});
            return x.useMemo(() => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    };
    return n.scopeName = t.scopeName, n
}

function sg(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function Pf(...e) {
    return t => e.forEach(n => sg(n, t))
}

function dl(...e) {
    return x.useCallback(Pf(...e), e)
}
var jr = x.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e, o = x.Children.toArray(n), l = o.find(ag);
    if (l) {
        const i = l.props.children,
            s = o.map(u => u === l ? x.Children.count(i) > 1 ? x.Children.only(null) : x.isValidElement(i) ? i.props.children : null : u);
        return v.jsx(_s, { ...r,
            ref: t,
            children: x.isValidElement(i) ? x.cloneElement(i, void 0, s) : null
        })
    }
    return v.jsx(_s, { ...r,
        ref: t,
        children: n
    })
});
jr.displayName = "Slot";
var _s = x.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e;
    if (x.isValidElement(n)) {
        const o = dg(n);
        return x.cloneElement(n, { ...cg(r, n.props),
            ref: t ? Pf(t, o) : o
        })
    }
    return x.Children.count(n) > 1 ? x.Children.only(null) : null
});
_s.displayName = "SlotClone";
var ug = ({
    children: e
}) => v.jsx(v.Fragment, {
    children: e
});

function ag(e) {
    return x.isValidElement(e) && e.type === ug
}

function cg(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            l = t[r];
        /^on[A-Z]/.test(r) ? o && l ? n[r] = (...s) => {
            l(...s), o(...s)
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...l
        } : r === "className" && (n[r] = [o, l].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function dg(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function fg(e) {
    const t = e + "CollectionProvider",
        [n, r] = br(t),
        [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        i = g => {
            const {
                scope: w,
                children: y
            } = g, S = Ye.useRef(null), f = Ye.useRef(new Map).current;
            return v.jsx(o, {
                scope: w,
                itemMap: f,
                collectionRef: S,
                children: y
            })
        };
    i.displayName = t;
    const s = e + "CollectionSlot",
        u = Ye.forwardRef((g, w) => {
            const {
                scope: y,
                children: S
            } = g, f = l(s, y), c = dl(w, f.collectionRef);
            return v.jsx(jr, {
                ref: c,
                children: S
            })
        });
    u.displayName = s;
    const a = e + "CollectionItemSlot",
        d = "data-radix-collection-item",
        m = Ye.forwardRef((g, w) => {
            const {
                scope: y,
                children: S,
                ...f
            } = g, c = Ye.useRef(null), h = dl(w, c), _ = l(a, y);
            return Ye.useEffect(() => (_.itemMap.set(c, {
                ref: c,
                ...f
            }), () => void _.itemMap.delete(c))), v.jsx(jr, {
                [d]: "",
                ref: h,
                children: S
            })
        });
    m.displayName = a;

    function p(g) {
        const w = l(e + "CollectionConsumer", g);
        return Ye.useCallback(() => {
            const S = w.collectionRef.current;
            if (!S) return [];
            const f = Array.from(S.querySelectorAll(`[${d}]`));
            return Array.from(w.itemMap.values()).sort((_, k) => f.indexOf(_.ref.current) - f.indexOf(k.ref.current))
        }, [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: i,
        Slot: u,
        ItemSlot: m
    }, p, r]
}
var Or = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
    pg = Yp.useId || (() => {}),
    mg = 0;

function Tf(e) {
    const [t, n] = x.useState(pg());
    return Or(() => {
        e || n(r => r ? ? String(mg++))
    }, [e]), e || (t ? `radix-${t}` : "")
}
var hg = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    Be = hg.reduce((e, t) => {
        const n = x.forwardRef((r, o) => {
            const {
                asChild: l,
                ...i
            } = r, s = l ? jr : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), v.jsx(s, { ...i,
                ref: o
            })
        });
        return n.displayName = `Primitive.${t}`, { ...e,
            [t]: n
        }
    }, {});

function zl(e) {
    const t = x.useRef(e);
    return x.useEffect(() => {
        t.current = e
    }), x.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function If({
    prop: e,
    defaultProp: t,
    onChange: n = () => {}
}) {
    const [r, o] = vg({
        defaultProp: t,
        onChange: n
    }), l = e !== void 0, i = l ? e : r, s = zl(n), u = x.useCallback(a => {
        if (l) {
            const m = typeof a == "function" ? a(e) : a;
            m !== e && s(m)
        } else o(a)
    }, [l, e, o, s]);
    return [i, u]
}

function vg({
    defaultProp: e,
    onChange: t
}) {
    const n = x.useState(e),
        [r] = n,
        o = x.useRef(r),
        l = zl(t);
    return x.useEffect(() => {
        o.current !== r && (l(r), o.current = r)
    }, [r, o, l]), n
}
var gg = x.createContext(void 0);

function Rf(e) {
    const t = x.useContext(gg);
    return e || t || "ltr"
}
var Si = "rovingFocusGroup.onEntryFocus",
    yg = {
        bubbles: !1,
        cancelable: !0
    },
    Ll = "RovingFocusGroup",
    [Es, jf, wg] = fg(Ll),
    [xg, Of] = br(Ll, [wg]),
    [Sg, _g] = xg(Ll),
    zf = x.forwardRef((e, t) => v.jsx(Es.Provider, {
        scope: e.__scopeRovingFocusGroup,
        children: v.jsx(Es.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: v.jsx(Eg, { ...e,
                ref: t
            })
        })
    }));
zf.displayName = Ll;
var Eg = x.forwardRef((e, t) => {
        const {
            __scopeRovingFocusGroup: n,
            orientation: r,
            loop: o = !1,
            dir: l,
            currentTabStopId: i,
            defaultCurrentTabStopId: s,
            onCurrentTabStopIdChange: u,
            onEntryFocus: a,
            preventScrollOnEntryFocus: d = !1,
            ...m
        } = e, p = x.useRef(null), g = dl(t, p), w = Rf(l), [y = null, S] = If({
            prop: i,
            defaultProp: s,
            onChange: u
        }), [f, c] = x.useState(!1), h = zl(a), _ = jf(n), k = x.useRef(!1), [I, T] = x.useState(0);
        return x.useEffect(() => {
            const C = p.current;
            if (C) return C.addEventListener(Si, h), () => C.removeEventListener(Si, h)
        }, [h]), v.jsx(Sg, {
            scope: n,
            orientation: r,
            dir: w,
            loop: o,
            currentTabStopId: y,
            onItemFocus: x.useCallback(C => S(C), [S]),
            onItemShiftTab: x.useCallback(() => c(!0), []),
            onFocusableItemAdd: x.useCallback(() => T(C => C + 1), []),
            onFocusableItemRemove: x.useCallback(() => T(C => C - 1), []),
            children: v.jsx(Be.div, {
                tabIndex: f || I === 0 ? -1 : 0,
                "data-orientation": r,
                ...m,
                ref: g,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: it(e.onMouseDown, () => {
                    k.current = !0
                }),
                onFocus: it(e.onFocus, C => {
                    const D = !k.current;
                    if (C.target === C.currentTarget && D && !f) {
                        const j = new CustomEvent(Si, yg);
                        if (C.currentTarget.dispatchEvent(j), !j.defaultPrevented) {
                            const Z = _().filter(ie => ie.focusable),
                                A = Z.find(ie => ie.active),
                                Ge = Z.find(ie => ie.id === y),
                                un = [A, Ge, ...Z].filter(Boolean).map(ie => ie.ref.current);
                            Af(un, d)
                        }
                    }
                    k.current = !1
                }),
                onBlur: it(e.onBlur, () => c(!1))
            })
        })
    }),
    Lf = "RovingFocusGroupItem",
    Mf = x.forwardRef((e, t) => {
        const {
            __scopeRovingFocusGroup: n,
            focusable: r = !0,
            active: o = !1,
            tabStopId: l,
            ...i
        } = e, s = Tf(), u = l || s, a = _g(Lf, n), d = a.currentTabStopId === u, m = jf(n), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: g
        } = a;
        return x.useEffect(() => {
            if (r) return p(), () => g()
        }, [r, p, g]), v.jsx(Es.ItemSlot, {
            scope: n,
            id: u,
            focusable: r,
            active: o,
            children: v.jsx(Be.span, {
                tabIndex: d ? 0 : -1,
                "data-orientation": a.orientation,
                ...i,
                ref: t,
                onMouseDown: it(e.onMouseDown, w => {
                    r ? a.onItemFocus(u) : w.preventDefault()
                }),
                onFocus: it(e.onFocus, () => a.onItemFocus(u)),
                onKeyDown: it(e.onKeyDown, w => {
                    if (w.key === "Tab" && w.shiftKey) {
                        a.onItemShiftTab();
                        return
                    }
                    if (w.target !== w.currentTarget) return;
                    const y = Ng(w, a.orientation, a.dir);
                    if (y !== void 0) {
                        if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
                        w.preventDefault();
                        let f = m().filter(c => c.focusable).map(c => c.ref.current);
                        if (y === "last") f.reverse();
                        else if (y === "prev" || y === "next") {
                            y === "prev" && f.reverse();
                            const c = f.indexOf(w.currentTarget);
                            f = a.loop ? Pg(f, c + 1) : f.slice(c + 1)
                        }
                        setTimeout(() => Af(f))
                    }
                })
            })
        })
    });
Mf.displayName = Lf;
var kg = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};

function Cg(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}

function Ng(e, t, n) {
    const r = Cg(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return kg[r]
}

function Af(e, t = !1) {
    const n = document.activeElement;
    for (const r of e)
        if (r === n || (r.focus({
                preventScroll: t
            }), document.activeElement !== n)) return
}

function Pg(e, t) {
    return e.map((n, r) => e[(t + r) % e.length])
}
var Tg = zf,
    Ig = Mf;

function Rg(e, t) {
    return x.useReducer((n, r) => t[n][r] ? ? n, e)
}
var $f = e => {
    const {
        present: t,
        children: n
    } = e, r = jg(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : x.Children.only(n), l = dl(r.ref, Og(o));
    return typeof n == "function" || r.isPresent ? x.cloneElement(o, {
        ref: l
    }) : null
};
$f.displayName = "Presence";

function jg(e) {
    const [t, n] = x.useState(), r = x.useRef({}), o = x.useRef(e), l = x.useRef("none"), i = e ? "mounted" : "unmounted", [s, u] = Rg(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return x.useEffect(() => {
        const a = go(r.current);
        l.current = s === "mounted" ? a : "none"
    }, [s]), Or(() => {
        const a = r.current,
            d = o.current;
        if (d !== e) {
            const p = l.current,
                g = go(a);
            e ? u("MOUNT") : g === "none" || (a == null ? void 0 : a.display) === "none" ? u("UNMOUNT") : u(d && p !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, u]), Or(() => {
        if (t) {
            const a = m => {
                    const g = go(r.current).includes(m.animationName);
                    m.target === t && g && Sf.flushSync(() => u("ANIMATION_END"))
                },
                d = m => {
                    m.target === t && (l.current = go(r.current))
                };
            return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", a), t.addEventListener("animationend", a), () => {
                t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", a), t.removeEventListener("animationend", a)
            }
        } else u("ANIMATION_END")
    }, [t, u]), {
        isPresent: ["mounted", "unmountSuspended"].includes(s),
        ref: x.useCallback(a => {
            a && (r.current = getComputedStyle(a)), n(a)
        }, [])
    }
}

function go(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function Og(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Pu = "Tabs",
    [zg, H0] = br(Pu, [Of]),
    Df = Of(),
    [Lg, Tu] = zg(Pu),
    Ff = x.forwardRef((e, t) => {
        const {
            __scopeTabs: n,
            value: r,
            onValueChange: o,
            defaultValue: l,
            orientation: i = "horizontal",
            dir: s,
            activationMode: u = "automatic",
            ...a
        } = e, d = Rf(s), [m, p] = If({
            prop: r,
            onChange: o,
            defaultProp: l
        });
        return v.jsx(Lg, {
            scope: n,
            baseId: Tf(),
            value: m,
            onValueChange: p,
            orientation: i,
            dir: d,
            activationMode: u,
            children: v.jsx(Be.div, {
                dir: d,
                "data-orientation": i,
                ...a,
                ref: t
            })
        })
    });
Ff.displayName = Pu;
var Vf = "TabsList",
    Uf = x.forwardRef((e, t) => {
        const {
            __scopeTabs: n,
            loop: r = !0,
            ...o
        } = e, l = Tu(Vf, n), i = Df(n);
        return v.jsx(Tg, {
            asChild: !0,
            ...i,
            orientation: l.orientation,
            dir: l.dir,
            loop: r,
            children: v.jsx(Be.div, {
                role: "tablist",
                "aria-orientation": l.orientation,
                ...o,
                ref: t
            })
        })
    });
Uf.displayName = Vf;
var bf = "TabsTrigger",
    Wf = x.forwardRef((e, t) => {
        const {
            __scopeTabs: n,
            value: r,
            disabled: o = !1,
            ...l
        } = e, i = Tu(bf, n), s = Df(n), u = Gf(i.baseId, r), a = Kf(i.baseId, r), d = r === i.value;
        return v.jsx(Ig, {
            asChild: !0,
            ...s,
            focusable: !o,
            active: d,
            children: v.jsx(Be.button, {
                type: "button",
                role: "tab",
                "aria-selected": d,
                "aria-controls": a,
                "data-state": d ? "active" : "inactive",
                "data-disabled": o ? "" : void 0,
                disabled: o,
                id: u,
                ...l,
                ref: t,
                onMouseDown: it(e.onMouseDown, m => {
                    !o && m.button === 0 && m.ctrlKey === !1 ? i.onValueChange(r) : m.preventDefault()
                }),
                onKeyDown: it(e.onKeyDown, m => {
                    [" ", "Enter"].includes(m.key) && i.onValueChange(r)
                }),
                onFocus: it(e.onFocus, () => {
                    const m = i.activationMode !== "manual";
                    !d && !o && m && i.onValueChange(r)
                })
            })
        })
    });
Wf.displayName = bf;
var Hf = "TabsContent",
    Bf = x.forwardRef((e, t) => {
        const {
            __scopeTabs: n,
            value: r,
            forceMount: o,
            children: l,
            ...i
        } = e, s = Tu(Hf, n), u = Gf(s.baseId, r), a = Kf(s.baseId, r), d = r === s.value, m = x.useRef(d);
        return x.useEffect(() => {
            const p = requestAnimationFrame(() => m.current = !1);
            return () => cancelAnimationFrame(p)
        }, []), v.jsx($f, {
            present: o || d,
            children: ({
                present: p
            }) => v.jsx(Be.div, {
                "data-state": d ? "active" : "inactive",
                "data-orientation": s.orientation,
                role: "tabpanel",
                "aria-labelledby": u,
                hidden: !p,
                id: a,
                tabIndex: 0,
                ...i,
                ref: t,
                style: { ...e.style,
                    animationDuration: m.current ? "0s" : void 0
                },
                children: p && l
            })
        })
    });
Bf.displayName = Hf;

function Gf(e, t) {
    return `${e}-trigger-${t}`
}

function Kf(e, t) {
    return `${e}-content-${t}`
}
var Mg = Ff,
    Qf = Uf,
    Yf = Wf,
    Xf = Bf;

function Jf(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = Jf(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function Ag() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = Jf(e)) && (r && (r += " "), r += t);
    return r
}
const Iu = "-";

function $g(e) {
    const t = Fg(e),
        {
            conflictingClassGroups: n,
            conflictingClassGroupModifiers: r
        } = e;

    function o(i) {
        const s = i.split(Iu);
        return s[0] === "" && s.length !== 1 && s.shift(), Zf(s, t) || Dg(i)
    }

    function l(i, s) {
        const u = n[i] || [];
        return s && r[i] ? [...u, ...r[i]] : u
    }
    return {
        getClassGroupId: o,
        getConflictingClassGroupIds: l
    }
}

function Zf(e, t) {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
        r = t.nextPart.get(n),
        o = r ? Zf(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const l = e.join(Iu);
    return (i = t.validators.find(({
        validator: s
    }) => s(l))) == null ? void 0 : i.classGroupId
}
const Ka = /^\[(.+)\]$/;

function Dg(e) {
    if (Ka.test(e)) {
        const t = Ka.exec(e)[1],
            n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n) return "arbitrary.." + n
    }
}

function Fg(e) {
    const {
        theme: t,
        prefix: n
    } = e, r = {
        nextPart: new Map,
        validators: []
    };
    return Ug(Object.entries(e.classGroups), n).forEach(([l, i]) => {
        ks(i, r, l, t)
    }), r
}

function ks(e, t, n, r) {
    e.forEach(o => {
        if (typeof o == "string") {
            const l = o === "" ? t : Qa(t, o);
            l.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (Vg(o)) {
                ks(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach(([l, i]) => {
            ks(i, Qa(t, l), n, r)
        })
    })
}

function Qa(e, t) {
    let n = e;
    return t.split(Iu).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }), n = n.nextPart.get(r)
    }), n
}

function Vg(e) {
    return e.isThemeGetter
}

function Ug(e, t) {
    return t ? e.map(([n, r]) => {
        const o = r.map(l => typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([i, s]) => [t + i, s])) : l);
        return [n, o]
    }) : e
}

function bg(e) {
    if (e < 1) return {
        get: () => {},
        set: () => {}
    };
    let t = 0,
        n = new Map,
        r = new Map;

    function o(l, i) {
        n.set(l, i), t++, t > e && (t = 0, r = n, n = new Map)
    }
    return {
        get(l) {
            let i = n.get(l);
            if (i !== void 0) return i;
            if ((i = r.get(l)) !== void 0) return o(l, i), i
        },
        set(l, i) {
            n.has(l) ? n.set(l, i) : o(l, i)
        }
    }
}
const qf = "!";

function Wg(e) {
    const {
        separator: t,
        experimentalParseClassName: n
    } = e, r = t.length === 1, o = t[0], l = t.length;

    function i(s) {
        const u = [];
        let a = 0,
            d = 0,
            m;
        for (let S = 0; S < s.length; S++) {
            let f = s[S];
            if (a === 0) {
                if (f === o && (r || s.slice(S, S + l) === t)) {
                    u.push(s.slice(d, S)), d = S + l;
                    continue
                }
                if (f === "/") {
                    m = S;
                    continue
                }
            }
            f === "[" ? a++ : f === "]" && a--
        }
        const p = u.length === 0 ? s : s.substring(d),
            g = p.startsWith(qf),
            w = g ? p.substring(1) : p,
            y = m && m > d ? m - d : void 0;
        return {
            modifiers: u,
            hasImportantModifier: g,
            baseClassName: w,
            maybePostfixModifierPosition: y
        }
    }
    return n ? function(u) {
        return n({
            className: u,
            parseClassName: i
        })
    } : i
}

function Hg(e) {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
    }), t.push(...n.sort()), t
}

function Bg(e) {
    return {
        cache: bg(e.cacheSize),
        parseClassName: Wg(e),
        ...$g(e)
    }
}
const Gg = /\s+/;

function Kg(e, t) {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o
    } = t, l = new Set;
    return e.trim().split(Gg).map(i => {
        const {
            modifiers: s,
            hasImportantModifier: u,
            baseClassName: a,
            maybePostfixModifierPosition: d
        } = n(i);
        let m = !!d,
            p = r(m ? a.substring(0, d) : a);
        if (!p) {
            if (!m) return {
                isTailwindClass: !1,
                originalClassName: i
            };
            if (p = r(a), !p) return {
                isTailwindClass: !1,
                originalClassName: i
            };
            m = !1
        }
        const g = Hg(s).join(":");
        return {
            isTailwindClass: !0,
            modifierId: u ? g + qf : g,
            classGroupId: p,
            originalClassName: i,
            hasPostfixModifier: m
        }
    }).reverse().filter(i => {
        if (!i.isTailwindClass) return !0;
        const {
            modifierId: s,
            classGroupId: u,
            hasPostfixModifier: a
        } = i, d = s + u;
        return l.has(d) ? !1 : (l.add(d), o(u, a).forEach(m => l.add(s + m)), !0)
    }).reverse().map(i => i.originalClassName).join(" ")
}

function Qg() {
    let e = 0,
        t, n, r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = ep(t)) && (r && (r += " "), r += n);
    return r
}

function ep(e) {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = ep(e[r])) && (n && (n += " "), n += t);
    return n
}

function Yg(e, ...t) {
    let n, r, o, l = i;

    function i(u) {
        const a = t.reduce((d, m) => m(d), e());
        return n = Bg(a), r = n.cache.get, o = n.cache.set, l = s, s(u)
    }

    function s(u) {
        const a = r(u);
        if (a) return a;
        const d = Kg(u, n);
        return o(u, d), d
    }
    return function() {
        return l(Qg.apply(null, arguments))
    }
}

function U(e) {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0, t
}
const tp = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    Xg = /^\d+\/\d+$/,
    Jg = new Set(["px", "full", "screen"]),
    Zg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    qg = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    ey = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    ty = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    ny = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

function et(e) {
    return Qt(e) || Jg.has(e) || Xg.test(e)
}

function vt(e) {
    return bn(e, "length", cy)
}

function Qt(e) {
    return !!e && !Number.isNaN(Number(e))
}

function yo(e) {
    return bn(e, "number", Qt)
}

function Jn(e) {
    return !!e && Number.isInteger(Number(e))
}

function ry(e) {
    return e.endsWith("%") && Qt(e.slice(0, -1))
}

function z(e) {
    return tp.test(e)
}

function gt(e) {
    return Zg.test(e)
}
const oy = new Set(["length", "size", "percentage"]);

function ly(e) {
    return bn(e, oy, np)
}

function iy(e) {
    return bn(e, "position", np)
}
const sy = new Set(["image", "url"]);

function uy(e) {
    return bn(e, sy, fy)
}

function ay(e) {
    return bn(e, "", dy)
}

function Zn() {
    return !0
}

function bn(e, t, n) {
    const r = tp.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}

function cy(e) {
    return qg.test(e) && !ey.test(e)
}

function np() {
    return !1
}

function dy(e) {
    return ty.test(e)
}

function fy(e) {
    return ny.test(e)
}

function py() {
    const e = U("colors"),
        t = U("spacing"),
        n = U("blur"),
        r = U("brightness"),
        o = U("borderColor"),
        l = U("borderRadius"),
        i = U("borderSpacing"),
        s = U("borderWidth"),
        u = U("contrast"),
        a = U("grayscale"),
        d = U("hueRotate"),
        m = U("invert"),
        p = U("gap"),
        g = U("gradientColorStops"),
        w = U("gradientColorStopPositions"),
        y = U("inset"),
        S = U("margin"),
        f = U("opacity"),
        c = U("padding"),
        h = U("saturate"),
        _ = U("scale"),
        k = U("sepia"),
        I = U("skew"),
        T = U("space"),
        C = U("translate"),
        D = () => ["auto", "contain", "none"],
        j = () => ["auto", "hidden", "clip", "visible", "scroll"],
        Z = () => ["auto", z, t],
        A = () => [z, t],
        Ge = () => ["", et, vt],
        mt = () => ["auto", Qt, z],
        un = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
        ie = () => ["solid", "dashed", "dotted", "double", "none"],
        an = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
        N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
        R = () => ["", "0", z],
        O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
        F = () => [Qt, yo],
        B = () => [Qt, z];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Zn],
            spacing: [et, vt],
            blur: ["none", "", gt, z],
            brightness: F(),
            borderColor: [e],
            borderRadius: ["none", "", "full", gt, z],
            borderSpacing: A(),
            borderWidth: Ge(),
            contrast: F(),
            grayscale: R(),
            hueRotate: B(),
            invert: R(),
            gap: A(),
            gradientColorStops: [e],
            gradientColorStopPositions: [ry, vt],
            inset: Z(),
            margin: Z(),
            opacity: F(),
            padding: A(),
            saturate: F(),
            scale: F(),
            sepia: R(),
            skew: B(),
            space: A(),
            translate: A()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", z]
            }],
            container: ["container"],
            columns: [{
                columns: [gt]
            }],
            "break-after": [{
                "break-after": O()
            }],
            "break-before": [{
                "break-before": O()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...un(), z]
            }],
            overflow: [{
                overflow: j()
            }],
            "overflow-x": [{
                "overflow-x": j()
            }],
            "overflow-y": [{
                "overflow-y": j()
            }],
            overscroll: [{
                overscroll: D()
            }],
            "overscroll-x": [{
                "overscroll-x": D()
            }],
            "overscroll-y": [{
                "overscroll-y": D()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [y]
            }],
            "inset-x": [{
                "inset-x": [y]
            }],
            "inset-y": [{
                "inset-y": [y]
            }],
            start: [{
                start: [y]
            }],
            end: [{
                end: [y]
            }],
            top: [{
                top: [y]
            }],
            right: [{
                right: [y]
            }],
            bottom: [{
                bottom: [y]
            }],
            left: [{
                left: [y]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Jn, z]
            }],
            basis: [{
                basis: Z()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", z]
            }],
            grow: [{
                grow: R()
            }],
            shrink: [{
                shrink: R()
            }],
            order: [{
                order: ["first", "last", "none", Jn, z]
            }],
            "grid-cols": [{
                "grid-cols": [Zn]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Jn, z]
                }, z]
            }],
            "col-start": [{
                "col-start": mt()
            }],
            "col-end": [{
                "col-end": mt()
            }],
            "grid-rows": [{
                "grid-rows": [Zn]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Jn, z]
                }, z]
            }],
            "row-start": [{
                "row-start": mt()
            }],
            "row-end": [{
                "row-end": mt()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", z]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", z]
            }],
            gap: [{
                gap: [p]
            }],
            "gap-x": [{
                "gap-x": [p]
            }],
            "gap-y": [{
                "gap-y": [p]
            }],
            "justify-content": [{
                justify: ["normal", ...N()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...N(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...N(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [c]
            }],
            px: [{
                px: [c]
            }],
            py: [{
                py: [c]
            }],
            ps: [{
                ps: [c]
            }],
            pe: [{
                pe: [c]
            }],
            pt: [{
                pt: [c]
            }],
            pr: [{
                pr: [c]
            }],
            pb: [{
                pb: [c]
            }],
            pl: [{
                pl: [c]
            }],
            m: [{
                m: [S]
            }],
            mx: [{
                mx: [S]
            }],
            my: [{
                my: [S]
            }],
            ms: [{
                ms: [S]
            }],
            me: [{
                me: [S]
            }],
            mt: [{
                mt: [S]
            }],
            mr: [{
                mr: [S]
            }],
            mb: [{
                mb: [S]
            }],
            ml: [{
                ml: [S]
            }],
            "space-x": [{
                "space-x": [T]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [T]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", z, t]
            }],
            "min-w": [{
                "min-w": [z, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [z, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [gt]
                }, gt]
            }],
            h: [{
                h: [z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [z, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", gt, vt]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", yo]
            }],
            "font-family": [{
                font: [Zn]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", z]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Qt, yo]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", et, z]
            }],
            "list-image": [{
                "list-image": ["none", z]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", z]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [f]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [f]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...ie(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", et, vt]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", et, z]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: A()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", z]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", z]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [f]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...un(), iy]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", ly]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, uy]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [w]
            }],
            "gradient-via-pos": [{
                via: [w]
            }],
            "gradient-to-pos": [{
                to: [w]
            }],
            "gradient-from": [{
                from: [g]
            }],
            "gradient-via": [{
                via: [g]
            }],
            "gradient-to": [{
                to: [g]
            }],
            rounded: [{
                rounded: [l]
            }],
            "rounded-s": [{
                "rounded-s": [l]
            }],
            "rounded-e": [{
                "rounded-e": [l]
            }],
            "rounded-t": [{
                "rounded-t": [l]
            }],
            "rounded-r": [{
                "rounded-r": [l]
            }],
            "rounded-b": [{
                "rounded-b": [l]
            }],
            "rounded-l": [{
                "rounded-l": [l]
            }],
            "rounded-ss": [{
                "rounded-ss": [l]
            }],
            "rounded-se": [{
                "rounded-se": [l]
            }],
            "rounded-ee": [{
                "rounded-ee": [l]
            }],
            "rounded-es": [{
                "rounded-es": [l]
            }],
            "rounded-tl": [{
                "rounded-tl": [l]
            }],
            "rounded-tr": [{
                "rounded-tr": [l]
            }],
            "rounded-br": [{
                "rounded-br": [l]
            }],
            "rounded-bl": [{
                "rounded-bl": [l]
            }],
            "border-w": [{
                border: [s]
            }],
            "border-w-x": [{
                "border-x": [s]
            }],
            "border-w-y": [{
                "border-y": [s]
            }],
            "border-w-s": [{
                "border-s": [s]
            }],
            "border-w-e": [{
                "border-e": [s]
            }],
            "border-w-t": [{
                "border-t": [s]
            }],
            "border-w-r": [{
                "border-r": [s]
            }],
            "border-w-b": [{
                "border-b": [s]
            }],
            "border-w-l": [{
                "border-l": [s]
            }],
            "border-opacity": [{
                "border-opacity": [f]
            }],
            "border-style": [{
                border: [...ie(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [s]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [s]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [f]
            }],
            "divide-style": [{
                divide: ie()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...ie()]
            }],
            "outline-offset": [{
                "outline-offset": [et, z]
            }],
            "outline-w": [{
                outline: [et, vt]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: Ge()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [f]
            }],
            "ring-offset-w": [{
                "ring-offset": [et, vt]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", gt, ay]
            }],
            "shadow-color": [{
                shadow: [Zn]
            }],
            opacity: [{
                opacity: [f]
            }],
            "mix-blend": [{
                "mix-blend": [...an(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": an()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [u]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", gt, z]
            }],
            grayscale: [{
                grayscale: [a]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [m]
            }],
            saturate: [{
                saturate: [h]
            }],
            sepia: [{
                sepia: [k]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [u]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [a]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [m]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [f]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [h]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [k]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", z]
            }],
            duration: [{
                duration: B()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", z]
            }],
            delay: [{
                delay: B()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", z]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [_]
            }],
            "scale-x": [{
                "scale-x": [_]
            }],
            "scale-y": [{
                "scale-y": [_]
            }],
            rotate: [{
                rotate: [Jn, z]
            }],
            "translate-x": [{
                "translate-x": [C]
            }],
            "translate-y": [{
                "translate-y": [C]
            }],
            "skew-x": [{
                "skew-x": [I]
            }],
            "skew-y": [{
                "skew-y": [I]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", z]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", z]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": A()
            }],
            "scroll-mx": [{
                "scroll-mx": A()
            }],
            "scroll-my": [{
                "scroll-my": A()
            }],
            "scroll-ms": [{
                "scroll-ms": A()
            }],
            "scroll-me": [{
                "scroll-me": A()
            }],
            "scroll-mt": [{
                "scroll-mt": A()
            }],
            "scroll-mr": [{
                "scroll-mr": A()
            }],
            "scroll-mb": [{
                "scroll-mb": A()
            }],
            "scroll-ml": [{
                "scroll-ml": A()
            }],
            "scroll-p": [{
                "scroll-p": A()
            }],
            "scroll-px": [{
                "scroll-px": A()
            }],
            "scroll-py": [{
                "scroll-py": A()
            }],
            "scroll-ps": [{
                "scroll-ps": A()
            }],
            "scroll-pe": [{
                "scroll-pe": A()
            }],
            "scroll-pt": [{
                "scroll-pt": A()
            }],
            "scroll-pr": [{
                "scroll-pr": A()
            }],
            "scroll-pb": [{
                "scroll-pb": A()
            }],
            "scroll-pl": [{
                "scroll-pl": A()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", z]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [et, vt, yo]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
const my = Yg(py);

function de(...e) {
    return my(Ag(e))
}
const hy = Mg,
    rp = x.forwardRef(({
        className: e,
        ...t
    }, n) => v.jsx(Qf, {
        ref: n,
        className: de("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", e),
        ...t
    }));
rp.displayName = Qf.displayName;
const rr = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx(Yf, {
    ref: n,
    className: de("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", e),
    ...t
}));
rr.displayName = Yf.displayName;
const or = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx(Xf, {
    ref: n,
    className: de("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
    ...t
}));
or.displayName = Xf.displayName;
var Ru = "Avatar",
    [vy, B0] = br(Ru),
    [gy, op] = vy(Ru),
    lp = x.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            ...r
        } = e, [o, l] = x.useState("idle");
        return v.jsx(gy, {
            scope: n,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: l,
            children: v.jsx(Be.span, { ...r,
                ref: t
            })
        })
    });
lp.displayName = Ru;
var ip = "AvatarImage",
    sp = x.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            src: r,
            onLoadingStatusChange: o = () => {},
            ...l
        } = e, i = op(ip, n), s = yy(r), u = zl(a => {
            o(a), i.onImageLoadingStatusChange(a)
        });
        return Or(() => {
            s !== "idle" && u(s)
        }, [s, u]), s === "loaded" ? v.jsx(Be.img, { ...l,
            ref: t,
            src: r
        }) : null
    });
sp.displayName = ip;
var up = "AvatarFallback",
    ap = x.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            delayMs: r,
            ...o
        } = e, l = op(up, n), [i, s] = x.useState(r === void 0);
        return x.useEffect(() => {
            if (r !== void 0) {
                const u = window.setTimeout(() => s(!0), r);
                return () => window.clearTimeout(u)
            }
        }, [r]), i && l.imageLoadingStatus !== "loaded" ? v.jsx(Be.span, { ...o,
            ref: t
        }) : null
    });
ap.displayName = up;

function yy(e) {
    const [t, n] = x.useState("idle");
    return Or(() => {
        if (!e) {
            n("error");
            return
        }
        let r = !0;
        const o = new window.Image,
            l = i => () => {
                r && n(i)
            };
        return n("loading"), o.onload = l("loaded"), o.onerror = l("error"), o.src = e, () => {
            r = !1
        }
    }, [e]), t
}
var cp = lp,
    dp = sp,
    fp = ap;
const pp = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx(cp, {
    ref: n,
    className: de("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
    ...t
}));
pp.displayName = cp.displayName;
const mp = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx(dp, {
    ref: n,
    className: de("aspect-square h-full w-full", e),
    ...t
}));
mp.displayName = dp.displayName;
const hp = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx(fp, {
    ref: n,
    className: de("flex h-full w-full items-center justify-center rounded-full bg-muted", e),
    ...t
}));
hp.displayName = fp.displayName;
const Se = window.Telegram.WebApp.initDataUnsafe.user;

function wy() {
    return v.jsxs("div", {
        className: "flex justify-between items-center py-2 px-4 border-b",
        children: [v.jsxs("div", {
            className: "flex items-center gap-2",
            children: [v.jsx("a", {
                href: "https://t.me/hamster_kombat_Bot/start?startapp=kentId541625404",
                target: "_blank",
                rel: "noopener noreferrer",
                children: v.jsx("div", {
                    className: "tg-logo play"
                })
            }), v.jsxs("p", {
                children: ["version: ", "0.0.1"]
            })]
        }), v.jsxs("div", {
            className: "flex items-center gap-2",
            children: [v.jsxs(pp, {
                children: [v.jsx(mp, {
                    src: "/favicon.webp"
                }), v.jsx(hp, {
                    children: "CN"
                })]
            }), v.jsxs("div", {
                children: [v.jsxs("p", {
                    children: [(Se == null ? void 0 : Se.first_name) ? ? "Nikname", " ", (Se == null ? void 0 : Se.last_name) ? ? ""]
                }), v.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: Se != null && Se.username ? `@${Se.username}` : (Se == null ? void 0 : Se.id) ? ? "@username"
                })]
            })]
        })]
    })
}
/**
 * @license lucide-react v0.418.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xy = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    vp = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.418.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Sy = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.418.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _y = x.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: l,
    iconNode: i,
    ...s
}, u) => x.createElement("svg", {
    ref: u,
    ...Sy,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: vp("lucide", o),
    ...s
}, [...i.map(([a, d]) => x.createElement(a, d)), ...Array.isArray(l) ? l : [l]]));
/**
 * @license lucide-react v0.418.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ju = (e, t) => {
    const n = x.forwardRef(({
        className: r,
        ...o
    }, l) => x.createElement(_y, {
        ref: l,
        iconNode: t,
        className: vp(`lucide-${xy(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.418.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ml = ju("ClipboardCheck", [
    ["rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1",
        key: "tgr4d6"
    }],
    ["path", {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
        key: "116196"
    }],
    ["path", {
        d: "m9 14 2 2 4-4",
        key: "df797q"
    }]
]);
/**
 * @license lucide-react v0.418.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = ju("Copy", [
    ["rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
    }],
    ["path", {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
    }]
]);
/**
 * @license lucide-react v0.418.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $l = ju("WandSparkles", [
        ["path", {
            d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
            key: "ul74o6"
        }],
        ["path", {
            d: "m14 7 3 3",
            key: "1r5n42"
        }],
        ["path", {
            d: "M5 6v4",
            key: "ilb8ba"
        }],
        ["path", {
            d: "M19 14v4",
            key: "blhpug"
        }],
        ["path", {
            d: "M10 2v2",
            key: "7u0qdc"
        }],
        ["path", {
            d: "M7 8H3",
            key: "zfb6yr"
        }],
        ["path", {
            d: "M21 16h-4",
            key: "1cnmox"
        }],
        ["path", {
            d: "M11 3H9",
            key: "1obp7u"
        }]
    ]),
    Wr = x.forwardRef(({
        className: e,
        ...t
    }, n) => v.jsx("div", {
        ref: n,
        className: de("rounded-lg border bg-card text-card-foreground shadow-sm", e),
        ...t
    }));
Wr.displayName = "Card";
const Hr = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx("div", {
    ref: n,
    className: de("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
Hr.displayName = "CardHeader";
const Br = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx("h3", {
    ref: n,
    className: de("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
Br.displayName = "CardTitle";
const Gr = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx("p", {
    ref: n,
    className: de("text-sm text-muted-foreground", e),
    ...t
}));
Gr.displayName = "CardDescription";
const Kr = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx("div", {
    ref: n,
    className: de("p-6 pt-0", e),
    ...t
}));
Kr.displayName = "CardContent";
const Qr = x.forwardRef(({
    className: e,
    ...t
}, n) => v.jsx("div", {
    ref: n,
    className: de("flex items-center p-6 pt-0", e),
    ...t
}));
Qr.displayName = "CardFooter";

function gp(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (n = gp(e[t])) && (r && (r += " "), r += n);
        else
            for (t in e) e[t] && (r && (r += " "), r += t);
    return r
}

function Ey() {
    for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = gp(e)) && (r && (r += " "), r += t);
    return r
}
const Ya = e => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e,
    Xa = Ey,
    ky = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null) return Xa(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: o,
            defaultVariants: l
        } = t, i = Object.keys(o).map(a => {
            const d = n == null ? void 0 : n[a],
                m = l == null ? void 0 : l[a];
            if (d === null) return null;
            const p = Ya(d) || Ya(m);
            return o[a][p]
        }), s = n && Object.entries(n).reduce((a, d) => {
            let [m, p] = d;
            return p === void 0 || (a[m] = p), a
        }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((a, d) => {
            let {
                class: m,
                className: p,
                ...g
            } = d;
            return Object.entries(g).every(w => {
                let [y, S] = w;
                return Array.isArray(S) ? S.includes({ ...l,
                    ...s
                }[y]) : { ...l,
                    ...s
                }[y] === S
            }) ? [...a, m, p] : a
        }, []);
        return Xa(e, i, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    },
    Cy = ky("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    ft = x.forwardRef(({
        className: e,
        variant: t,
        size: n,
        asChild: r = !1,
        ...o
    }, l) => {
        const i = r ? jr : "button";
        return v.jsx(i, {
            className: de(Cy({
                variant: t,
                size: n,
                className: e
            })),
            ref: l,
            ...o
        })
    });
ft.displayName = "Button";
var Ou = "Progress",
    zu = 100,
    [Ny, G0] = br(Ou),
    [Py, Ty] = Ny(Ou),
    yp = x.forwardRef((e, t) => {
        const {
            __scopeProgress: n,
            value: r = null,
            max: o,
            getValueLabel: l = Iy,
            ...i
        } = e;
        (o || o === 0) && !Ja(o) && console.error(Ry(`${o}`, "Progress"));
        const s = Ja(o) ? o : zu;
        r !== null && !Za(r, s) && console.error(jy(`${r}`, "Progress"));
        const u = Za(r, s) ? r : null,
            a = fl(u) ? l(u, s) : void 0;
        return v.jsx(Py, {
            scope: n,
            value: u,
            max: s,
            children: v.jsx(Be.div, {
                "aria-valuemax": s,
                "aria-valuemin": 0,
                "aria-valuenow": fl(u) ? u : void 0,
                "aria-valuetext": a,
                role: "progressbar",
                "data-state": Sp(u, s),
                "data-value": u ? ? void 0,
                "data-max": s,
                ...i,
                ref: t
            })
        })
    });
yp.displayName = Ou;
var wp = "ProgressIndicator",
    xp = x.forwardRef((e, t) => {
        const {
            __scopeProgress: n,
            ...r
        } = e, o = Ty(wp, n);
        return v.jsx(Be.div, {
            "data-state": Sp(o.value, o.max),
            "data-value": o.value ? ? void 0,
            "data-max": o.max,
            ...r,
            ref: t
        })
    });
xp.displayName = wp;

function Iy(e, t) {
    return `${Math.round(e/t*100)}%`
}

function Sp(e, t) {
    return e == null ? "indeterminate" : e === t ? "complete" : "loading"
}

function fl(e) {
    return typeof e == "number"
}

function Ja(e) {
    return fl(e) && !isNaN(e) && e > 0
}

function Za(e, t) {
    return fl(e) && !isNaN(e) && e <= t && e >= 0
}

function Ry(e, t) {
    return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${zu}\`.`
}

function jy(e, t) {
    return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${zu} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`
}
var _p = yp,
    Oy = xp;
const Yr = x.forwardRef(({
    className: e,
    value: t,
    ...n
}, r) => v.jsx(_p, {
    ref: r,
    className: de("relative h-4 w-full overflow-hidden rounded-full bg-secondary"),
    ...n,
    children: v.jsx(Oy, {
        className: de("h-full w-full flex-1 bg-primary transition-all", e),
        style: {
            transform: `translateX(-${100-(t||0)}%)`
        }
    })
}));
Yr.displayName = _p.displayName;

function zy({
    className: e,
    ...t
}) {
    return v.jsx("div", {
        className: de({
            "animate-pulse": t.animation
        }, "rounded-md bg-muted", e),
        ...t
    })
}

function Dl({
    animation: e
}) {
    return v.jsx("div", {
        className: "flex gap-1",
        children: [...Array(5)].map((t, n) => v.jsx(zy, {
            animation: e,
            className: "h-8 w-[42px]"
        }, n))
    })
}

function Fl({
    code: e
}) {
    const t = e.split("-");
    return v.jsx("div", {
        className: "flex justify-between flex-1 gap-1",
        children: t.map((n, r) => v.jsx("p", {
            className: "flex justify-center items-center bg-slate-400 text-white text-xs rounded-md h-8 px-2",
            children: n
        }, r))
    })
}

function Vl() {
    const [e, t] = x.useState(null);
    async function n(r) {
        if (!(navigator != null && navigator.clipboard)) return console.warn("clipboard not supported"), !1;
        try {
            return await navigator.clipboard.writeText(r), t(r), !0
        } catch (o) {
            return console.warn("copy failed", o), t(null), !1
        }
    }
    return {
        copiedText: e,
        copy: n
    }
}
class Ul {
    constructor(t, n) {
        this.appToken = t, this.promoId = n
    }
    sleep(t) {
        return t += Math.random() / 3 + 1, new Promise(n => setTimeout(n, t))
    }
    generateClientId() {
        const t = Date.now(),
            n = Array.from({
                length: 19
            }, () => Math.floor(Math.random() * 10)).join("");
        return `${t}-${n}`
    }
    async login(t) {
        const n = await fetch("https://api.gamepromo.io/promo/login-client", {
                headers: {
                    "content-type": "application/json; charset=utf-8",
                    Host: "api.gamepromo.io"
                },
                method: "POST",
                body: JSON.stringify({
                    appToken: this.appToken,
                    clientId: t,
                    clientOrigin: "deviceid"
                })
            }),
            {
                clientToken: r
            } = await n.json();
        return r
    }
    async check(t) {
        const n = await fetch("https://api.gamepromo.io/promo/register-event", {
                headers: {
                    "content-type": "application/json; charset=utf-8",
                    Host: "api.gamepromo.io",
                    Authorization: `Bearer ${t}`
                },
                method: "POST",
                body: JSON.stringify({
                    promoId: this.promoId,
                    eventId: crypto.randomUUID(),
                    eventOrigin: "undefined"
                })
            }),
            {
                hasCode: r
            } = await n.json();
        return r
    }
    async createCode(t) {
        const n = await fetch("https://api.gamepromo.io/promo/create-code", {
                headers: {
                    "content-type": "application/json; charset=utf-8",
                    Host: "api.gamepromo.io",
                    Authorization: `Bearer ${t}`
                },
                method: "POST",
                body: JSON.stringify({
                    promoId: this.promoId
                })
            }),
            {
                promoCode: r
            } = await n.json();
        return r
    }
    async generate() {
        const t = this.generateClientId(),
            n = await this.login(t);
        let r = null;
        for (; !r;) await this.sleep(2e4), r = await this.check(n);
        return await this.createCode(n)
    }
}
var Ep = {
        exports: {}
    },
    kp = {},
    Cp = {
        exports: {}
    },
    Np = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var An = x;

function Ly(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var My = typeof Object.is == "function" ? Object.is : Ly,
    Ay = An.useState,
    $y = An.useEffect,
    Dy = An.useLayoutEffect,
    Fy = An.useDebugValue;

function Vy(e, t) {
    var n = t(),
        r = Ay({
            inst: {
                value: n,
                getSnapshot: t
            }
        }),
        o = r[0].inst,
        l = r[1];
    return Dy(function() {
        o.value = n, o.getSnapshot = t, _i(o) && l({
            inst: o
        })
    }, [e, n, t]), $y(function() {
        return _i(o) && l({
            inst: o
        }), e(function() {
            _i(o) && l({
                inst: o
            })
        })
    }, [e]), Fy(n), n
}

function _i(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !My(e, n)
    } catch {
        return !0
    }
}

function Uy(e, t) {
    return t()
}
var by = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Uy : Vy;
Np.useSyncExternalStore = An.useSyncExternalStore !== void 0 ? An.useSyncExternalStore : by;
Cp.exports = Np;
var Wy = Cp.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bl = x,
    Hy = Wy;

function By(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Gy = typeof Object.is == "function" ? Object.is : By,
    Ky = Hy.useSyncExternalStore,
    Qy = bl.useRef,
    Yy = bl.useEffect,
    Xy = bl.useMemo,
    Jy = bl.useDebugValue;
kp.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
    var l = Qy(null);
    if (l.current === null) {
        var i = {
            hasValue: !1,
            value: null
        };
        l.current = i
    } else i = l.current;
    l = Xy(function() {
        function u(g) {
            if (!a) {
                if (a = !0, d = g, g = r(g), o !== void 0 && i.hasValue) {
                    var w = i.value;
                    if (o(w, g)) return m = w
                }
                return m = g
            }
            if (w = m, Gy(d, g)) return w;
            var y = r(g);
            return o !== void 0 && o(w, y) ? w : (d = g, m = y)
        }
        var a = !1,
            d, m, p = n === void 0 ? null : n;
        return [function() {
            return u(t())
        }, p === null ? void 0 : function() {
            return u(p())
        }]
    }, [t, n, r, o]);
    var s = Ky(e, l[0], l[1]);
    return Yy(function() {
        i.hasValue = !0, i.value = s
    }, [s]), Jy(s), s
};
Ep.exports = kp;
var Zy = Ep.exports;
const qy = sc(Zy);
var e0 = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_APP_VERSION: "0.0.1",
    VITE_LOCAL_STORAGE_KEY: "your-domain-or-you-want.react.v0.0.1",
    VITE_VERCEL_BRANCH_URL: "hamster-tools-git-main-ysenpis-projects.vercel.app",
    VITE_VERCEL_ENV: "production",
    VITE_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "ysenpi",
    VITE_VERCEL_GIT_COMMIT_AUTHOR_NAME: "ysenpi",
    VITE_VERCEL_GIT_COMMIT_MESSAGE: "Update main.jsx",
    VITE_VERCEL_GIT_COMMIT_REF: "main",
    VITE_VERCEL_GIT_COMMIT_SHA: "b764c787c7ce0bc9f57b0ffd4c99c925a27a660f",
    VITE_VERCEL_GIT_PREVIOUS_SHA: "",
    VITE_VERCEL_GIT_PROVIDER: "github",
    VITE_VERCEL_GIT_PULL_REQUEST_ID: "",
    VITE_VERCEL_GIT_REPO_ID: "839927216",
    VITE_VERCEL_GIT_REPO_OWNER: "ysenpi",
    VITE_VERCEL_GIT_REPO_SLUG: "hamster-tools",
    VITE_VERCEL_PROJECT_PRODUCTION_URL: "hamster-tools-flame.vercel.app",
    VITE_VERCEL_URL: "hamster-tools-df6qajk5u-ysenpis-projects.vercel.app"
};
const qa = e => {
        let t;
        const n = new Set,
            r = (d, m) => {
                const p = typeof d == "function" ? d(t) : d;
                if (!Object.is(p, t)) {
                    const g = t;
                    t = m ? ? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p), n.forEach(w => w(t, g))
                }
            },
            o = () => t,
            u = {
                setState: r,
                getState: o,
                getInitialState: () => a,
                subscribe: d => (n.add(d), () => n.delete(d)),
                destroy: () => {
                    (e0 ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear()
                }
            },
            a = t = e(r, o, u);
        return u
    },
    t0 = e => e ? qa(e) : qa,
    {
        useDebugValue: n0
    } = Ye,
    {
        useSyncExternalStoreWithSelector: r0
    } = qy,
    o0 = e => e;

function l0(e, t = o0, n) {
    const r = r0(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
    return n0(r), r
}
const ec = (e, t) => {
        const n = t0(e),
            r = (o, l = t) => l0(n, o, l);
        return Object.assign(r, n), r
    },
    i0 = (e, t) => e ? ec(e, t) : ec;

function s0(e, t) {
    if (Object.is(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    if (e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return !1;
        for (const [r, o] of e)
            if (!Object.is(o, t.get(r))) return !1;
        return !0
    }
    if (e instanceof Set && t instanceof Set) {
        if (e.size !== t.size) return !1;
        for (const r of e)
            if (!t.has(r)) return !1;
        return !0
    }
    const n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (const r of n)
        if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r])) return !1;
    return !0
}
var Fo = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_APP_VERSION: "0.0.1",
    VITE_LOCAL_STORAGE_KEY: "your-domain-or-you-want.react.v0.0.1",
    VITE_VERCEL_BRANCH_URL: "hamster-tools-git-main-ysenpis-projects.vercel.app",
    VITE_VERCEL_ENV: "production",
    VITE_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "ysenpi",
    VITE_VERCEL_GIT_COMMIT_AUTHOR_NAME: "ysenpi",
    VITE_VERCEL_GIT_COMMIT_MESSAGE: "Update main.jsx",
    VITE_VERCEL_GIT_COMMIT_REF: "main",
    VITE_VERCEL_GIT_COMMIT_SHA: "b764c787c7ce0bc9f57b0ffd4c99c925a27a660f",
    VITE_VERCEL_GIT_PREVIOUS_SHA: "",
    VITE_VERCEL_GIT_PROVIDER: "github",
    VITE_VERCEL_GIT_PULL_REQUEST_ID: "",
    VITE_VERCEL_GIT_REPO_ID: "839927216",
    VITE_VERCEL_GIT_REPO_OWNER: "ysenpi",
    VITE_VERCEL_GIT_REPO_SLUG: "hamster-tools",
    VITE_VERCEL_PROJECT_PRODUCTION_URL: "hamster-tools-flame.vercel.app",
    VITE_VERCEL_URL: "hamster-tools-df6qajk5u-ysenpis-projects.vercel.app"
};
const Cs = new Map,
    wo = e => {
        const t = Cs.get(e);
        return t ? Object.fromEntries(Object.entries(t.stores).map(([n, r]) => [n, r.getState()])) : {}
    },
    u0 = (e, t, n) => {
        if (e === void 0) return {
            type: "untracked",
            connection: t.connect(n)
        };
        const r = Cs.get(n.name);
        if (r) return {
            type: "tracked",
            store: e,
            ...r
        };
        const o = {
            connection: t.connect(n),
            stores: {}
        };
        return Cs.set(n.name, o), {
            type: "tracked",
            store: e,
            ...o
        }
    },
    a0 = (e, t = {}) => (n, r, o) => {
        const {
            enabled: l,
            anonymousActionType: i,
            store: s,
            ...u
        } = t;
        let a;
        try {
            a = (l ? ? (Fo ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__
        } catch {}
        if (!a) return (Fo ? "production" : void 0) !== "production" && l && console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"), e(n, r, o);
        const {
            connection: d,
            ...m
        } = u0(s, a, u);
        let p = !0;
        o.setState = (y, S, f) => {
            const c = n(y, S);
            if (!p) return c;
            const h = f === void 0 ? {
                type: i || "anonymous"
            } : typeof f == "string" ? {
                type: f
            } : f;
            return s === void 0 ? (d == null || d.send(h, r()), c) : (d == null || d.send({ ...h,
                type: `${s}/${h.type}`
            }, { ...wo(u.name),
                [s]: o.getState()
            }), c)
        };
        const g = (...y) => {
                const S = p;
                p = !1, n(...y), p = S
            },
            w = e(o.setState, r, o);
        if (m.type === "untracked" ? d == null || d.init(w) : (m.stores[m.store] = o, d == null || d.init(Object.fromEntries(Object.entries(m.stores).map(([y, S]) => [y, y === m.store ? w : S.getState()])))), o.dispatchFromDevtools && typeof o.dispatch == "function") {
            let y = !1;
            const S = o.dispatch;
            o.dispatch = (...f) => {
                (Fo ? "production" : void 0) !== "production" && f[0].type === "__setState" && !y && (console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'), y = !0), S(...f)
            }
        }
        return d.subscribe(y => {
            var S;
            switch (y.type) {
                case "ACTION":
                    if (typeof y.payload != "string") {
                        console.error("[zustand devtools middleware] Unsupported action format");
                        return
                    }
                    return Ei(y.payload, f => {
                        if (f.type === "__setState") {
                            if (s === void 0) {
                                g(f.state);
                                return
                            }
                            Object.keys(f.state).length !== 1 && console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
                            const c = f.state[s];
                            if (c == null) return;
                            JSON.stringify(o.getState()) !== JSON.stringify(c) && g(c);
                            return
                        }
                        o.dispatchFromDevtools && typeof o.dispatch == "function" && o.dispatch(f)
                    });
                case "DISPATCH":
                    switch (y.payload.type) {
                        case "RESET":
                            return g(w), s === void 0 ? d == null ? void 0 : d.init(o.getState()) : d == null ? void 0 : d.init(wo(u.name));
                        case "COMMIT":
                            if (s === void 0) {
                                d == null || d.init(o.getState());
                                return
                            }
                            return d == null ? void 0 : d.init(wo(u.name));
                        case "ROLLBACK":
                            return Ei(y.state, f => {
                                if (s === void 0) {
                                    g(f), d == null || d.init(o.getState());
                                    return
                                }
                                g(f[s]), d == null || d.init(wo(u.name))
                            });
                        case "JUMP_TO_STATE":
                        case "JUMP_TO_ACTION":
                            return Ei(y.state, f => {
                                if (s === void 0) {
                                    g(f);
                                    return
                                }
                                JSON.stringify(o.getState()) !== JSON.stringify(f[s]) && g(f[s])
                            });
                        case "IMPORT_STATE":
                            {
                                const {
                                    nextLiftedState: f
                                } = y.payload,
                                c = (S = f.computedStates.slice(-1)[0]) == null ? void 0 : S.state;
                                if (!c) return;g(s === void 0 ? c : c[s]),
                                d == null || d.send(null, f);
                                return
                            }
                        case "PAUSE_RECORDING":
                            return p = !p
                    }
                    return
            }
        }), w
    },
    c0 = a0,
    Ei = (e, t) => {
        let n;
        try {
            n = JSON.parse(e)
        } catch (r) {
            console.error("[zustand devtools middleware] Could not parse the received json", r)
        }
        n !== void 0 && t(n)
    };

function d0(e, t) {
    let n;
    try {
        n = e()
    } catch {
        return
    }
    return {
        getItem: o => {
            var l;
            const i = u => u === null ? null : JSON.parse(u, void 0),
                s = (l = n.getItem(o)) != null ? l : null;
            return s instanceof Promise ? s.then(i) : i(s)
        },
        setItem: (o, l) => n.setItem(o, JSON.stringify(l, void 0)),
        removeItem: o => n.removeItem(o)
    }
}
const zr = e => t => {
        try {
            const n = e(t);
            return n instanceof Promise ? n : {
                then(r) {
                    return zr(r)(n)
                },
                catch (r) {
                    return this
                }
            }
        } catch (n) {
            return {
                then(r) {
                    return this
                },
                catch (r) {
                    return zr(r)(n)
                }
            }
        }
    },
    f0 = (e, t) => (n, r, o) => {
        let l = {
                getStorage: () => localStorage,
                serialize: JSON.stringify,
                deserialize: JSON.parse,
                partialize: S => S,
                version: 0,
                merge: (S, f) => ({ ...f,
                    ...S
                }),
                ...t
            },
            i = !1;
        const s = new Set,
            u = new Set;
        let a;
        try {
            a = l.getStorage()
        } catch {}
        if (!a) return e((...S) => {
            console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`), n(...S)
        }, r, o);
        const d = zr(l.serialize),
            m = () => {
                const S = l.partialize({ ...r()
                });
                let f;
                const c = d({
                    state: S,
                    version: l.version
                }).then(h => a.setItem(l.name, h)).catch(h => {
                    f = h
                });
                if (f) throw f;
                return c
            },
            p = o.setState;
        o.setState = (S, f) => {
            p(S, f), m()
        };
        const g = e((...S) => {
            n(...S), m()
        }, r, o);
        let w;
        const y = () => {
            var S;
            if (!a) return;
            i = !1, s.forEach(c => c(r()));
            const f = ((S = l.onRehydrateStorage) == null ? void 0 : S.call(l, r())) || void 0;
            return zr(a.getItem.bind(a))(l.name).then(c => {
                if (c) return l.deserialize(c)
            }).then(c => {
                if (c)
                    if (typeof c.version == "number" && c.version !== l.version) {
                        if (l.migrate) return l.migrate(c.state, c.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    } else return c.state
            }).then(c => {
                var h;
                return w = l.merge(c, (h = r()) != null ? h : g), n(w, !0), m()
            }).then(() => {
                f == null || f(w, void 0), i = !0, u.forEach(c => c(w))
            }).catch(c => {
                f == null || f(void 0, c)
            })
        };
        return o.persist = {
            setOptions: S => {
                l = { ...l,
                    ...S
                }, S.getStorage && (a = S.getStorage())
            },
            clearStorage: () => {
                a == null || a.removeItem(l.name)
            },
            getOptions: () => l,
            rehydrate: () => y(),
            hasHydrated: () => i,
            onHydrate: S => (s.add(S), () => {
                s.delete(S)
            }),
            onFinishHydration: S => (u.add(S), () => {
                u.delete(S)
            })
        }, y(), w || g
    },
    p0 = (e, t) => (n, r, o) => {
        let l = {
                storage: d0(() => localStorage),
                partialize: y => y,
                version: 0,
                merge: (y, S) => ({ ...S,
                    ...y
                }),
                ...t
            },
            i = !1;
        const s = new Set,
            u = new Set;
        let a = l.storage;
        if (!a) return e((...y) => {
            console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`), n(...y)
        }, r, o);
        const d = () => {
                const y = l.partialize({ ...r()
                });
                return a.setItem(l.name, {
                    state: y,
                    version: l.version
                })
            },
            m = o.setState;
        o.setState = (y, S) => {
            m(y, S), d()
        };
        const p = e((...y) => {
            n(...y), d()
        }, r, o);
        o.getInitialState = () => p;
        let g;
        const w = () => {
            var y, S;
            if (!a) return;
            i = !1, s.forEach(c => {
                var h;
                return c((h = r()) != null ? h : p)
            });
            const f = ((S = l.onRehydrateStorage) == null ? void 0 : S.call(l, (y = r()) != null ? y : p)) || void 0;
            return zr(a.getItem.bind(a))(l.name).then(c => {
                if (c)
                    if (typeof c.version == "number" && c.version !== l.version) {
                        if (l.migrate) return l.migrate(c.state, c.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    } else return c.state
            }).then(c => {
                var h;
                return g = l.merge(c, (h = r()) != null ? h : p), n(g, !0), d()
            }).then(() => {
                f == null || f(g, void 0), g = r(), i = !0, u.forEach(c => c(g))
            }).catch(c => {
                f == null || f(void 0, c)
            })
        };
        return o.persist = {
            setOptions: y => {
                l = { ...l,
                    ...y
                }, y.storage && (a = y.storage)
            },
            clearStorage: () => {
                a == null || a.removeItem(l.name)
            },
            getOptions: () => l,
            rehydrate: () => w(),
            hasHydrated: () => i,
            onHydrate: y => (s.add(y), () => {
                s.delete(y)
            }),
            onFinishHydration: y => (u.add(y), () => {
                u.delete(y)
            })
        }, l.skipHydration || w(), g || p
    },
    m0 = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ((Fo ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), f0(e, t)) : p0(e, t),
    h0 = m0;
var Pp = Symbol.for("immer-nothing"),
    tc = Symbol.for("immer-draftable"),
    Pe = Symbol.for("immer-state");

function Ue(e, ...t) {
    throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
}
var $n = Object.getPrototypeOf;

function Dn(e) {
    return !!e && !!e[Pe]
}

function nn(e) {
    var t;
    return e ? Tp(e) || Array.isArray(e) || !!e[tc] || !!((t = e.constructor) != null && t[tc]) || Hl(e) || Bl(e) : !1
}
var v0 = Object.prototype.constructor.toString();

function Tp(e) {
    if (!e || typeof e != "object") return !1;
    const t = $n(e);
    if (t === null) return !0;
    const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === v0
}

function pl(e, t) {
    Wl(e) === 0 ? Reflect.ownKeys(e).forEach(n => {
        t(n, e[n], e)
    }) : e.forEach((n, r) => t(r, n, e))
}

function Wl(e) {
    const t = e[Pe];
    return t ? t.type_ : Array.isArray(e) ? 1 : Hl(e) ? 2 : Bl(e) ? 3 : 0
}

function Ns(e, t) {
    return Wl(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function Ip(e, t, n) {
    const r = Wl(e);
    r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n
}

function g0(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}

function Hl(e) {
    return e instanceof Map
}

function Bl(e) {
    return e instanceof Set
}

function Ht(e) {
    return e.copy_ || e.base_
}

function Ps(e, t) {
    if (Hl(e)) return new Map(e);
    if (Bl(e)) return new Set(e);
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    const n = Tp(e);
    if (t === !0 || t === "class_only" && !n) {
        const r = Object.getOwnPropertyDescriptors(e);
        delete r[Pe];
        let o = Reflect.ownKeys(r);
        for (let l = 0; l < o.length; l++) {
            const i = o[l],
                s = r[i];
            s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[i] = {
                configurable: !0,
                writable: !0,
                enumerable: s.enumerable,
                value: e[i]
            })
        }
        return Object.create($n(e), r)
    } else {
        const r = $n(e);
        if (r !== null && n) return { ...e
        };
        const o = Object.create(r);
        return Object.assign(o, e)
    }
}

function Lu(e, t = !1) {
    return Gl(e) || Dn(e) || !nn(e) || (Wl(e) > 1 && (e.set = e.add = e.clear = e.delete = y0), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Lu(r, !0))), e
}

function y0() {
    Ue(2)
}

function Gl(e) {
    return Object.isFrozen(e)
}
var w0 = {};

function rn(e) {
    const t = w0[e];
    return t || Ue(0, e), t
}
var Lr;

function Rp() {
    return Lr
}

function x0(e, t) {
    return {
        drafts_: [],
        parent_: e,
        immer_: t,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0
    }
}

function nc(e, t) {
    t && (rn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
}

function Ts(e) {
    Is(e), e.drafts_.forEach(S0), e.drafts_ = null
}

function Is(e) {
    e === Lr && (Lr = e.parent_)
}

function rc(e) {
    return Lr = x0(Lr, e)
}

function S0(e) {
    const t = e[Pe];
    t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0
}

function oc(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    const n = t.drafts_[0];
    return e !== void 0 && e !== n ? (n[Pe].modified_ && (Ts(t), Ue(4)), nn(e) && (e = ml(t, e), t.parent_ || hl(t, e)), t.patches_ && rn("Patches").generateReplacementPatches_(n[Pe].base_, e, t.patches_, t.inversePatches_)) : e = ml(t, n, []), Ts(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Pp ? e : void 0
}

function ml(e, t, n) {
    if (Gl(t)) return t;
    const r = t[Pe];
    if (!r) return pl(t, (o, l) => lc(e, r, t, o, l, n)), t;
    if (r.scope_ !== e) return t;
    if (!r.modified_) return hl(e, r.base_, !0), r.base_;
    if (!r.finalized_) {
        r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
        const o = r.copy_;
        let l = o,
            i = !1;
        r.type_ === 3 && (l = new Set(o), o.clear(), i = !0), pl(l, (s, u) => lc(e, r, o, s, u, n, i)), hl(e, o, !1), n && e.patches_ && rn("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_)
    }
    return r.copy_
}

function lc(e, t, n, r, o, l, i) {
    if (Dn(o)) {
        const s = l && t && t.type_ !== 3 && !Ns(t.assigned_, r) ? l.concat(r) : void 0,
            u = ml(e, o, s);
        if (Ip(n, r, u), Dn(u)) e.canAutoFreeze_ = !1;
        else return
    } else i && n.add(o);
    if (nn(o) && !Gl(o)) {
        if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
        ml(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && hl(e, o)
    }
}

function hl(e, t, n = !1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Lu(t, n)
}

function _0(e, t) {
    const n = Array.isArray(e),
        r = {
            type_: n ? 1 : 0,
            scope_: t ? t.scope_ : Rp(),
            modified_: !1,
            finalized_: !1,
            assigned_: {},
            parent_: t,
            base_: e,
            draft_: null,
            copy_: null,
            revoke_: null,
            isManual_: !1
        };
    let o = r,
        l = Mu;
    n && (o = [r], l = Mr);
    const {
        revoke: i,
        proxy: s
    } = Proxy.revocable(o, l);
    return r.draft_ = s, r.revoke_ = i, s
}
var Mu = {
        get(e, t) {
            if (t === Pe) return e;
            const n = Ht(e);
            if (!Ns(n, t)) return E0(e, n, t);
            const r = n[t];
            return e.finalized_ || !nn(r) ? r : r === ki(e.base_, t) ? (Ci(e), e.copy_[t] = js(r, e)) : r
        },
        has(e, t) {
            return t in Ht(e)
        },
        ownKeys(e) {
            return Reflect.ownKeys(Ht(e))
        },
        set(e, t, n) {
            const r = jp(Ht(e), t);
            if (r != null && r.set) return r.set.call(e.draft_, n), !0;
            if (!e.modified_) {
                const o = ki(Ht(e), t),
                    l = o == null ? void 0 : o[Pe];
                if (l && l.base_ === n) return e.copy_[t] = n, e.assigned_[t] = !1, !0;
                if (g0(n, o) && (n !== void 0 || Ns(e.base_, t))) return !0;
                Ci(e), Rs(e)
            }
            return e.copy_[t] === n && (n !== void 0 || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0
        },
        deleteProperty(e, t) {
            return ki(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Ci(e), Rs(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0
        },
        getOwnPropertyDescriptor(e, t) {
            const n = Ht(e),
                r = Reflect.getOwnPropertyDescriptor(n, t);
            return r && {
                writable: !0,
                configurable: e.type_ !== 1 || t !== "length",
                enumerable: r.enumerable,
                value: n[t]
            }
        },
        defineProperty() {
            Ue(11)
        },
        getPrototypeOf(e) {
            return $n(e.base_)
        },
        setPrototypeOf() {
            Ue(12)
        }
    },
    Mr = {};
pl(Mu, (e, t) => {
    Mr[e] = function() {
        return arguments[0] = arguments[0][0], t.apply(this, arguments)
    }
});
Mr.deleteProperty = function(e, t) {
    return Mr.set.call(this, e, t, void 0)
};
Mr.set = function(e, t, n) {
    return Mu.set.call(this, e[0], t, n, e[0])
};

function ki(e, t) {
    const n = e[Pe];
    return (n ? Ht(n) : e)[t]
}

function E0(e, t, n) {
    var o;
    const r = jp(t, n);
    return r ? "value" in r ? r.value : (o = r.get) == null ? void 0 : o.call(e.draft_) : void 0
}

function jp(e, t) {
    if (!(t in e)) return;
    let n = $n(e);
    for (; n;) {
        const r = Object.getOwnPropertyDescriptor(n, t);
        if (r) return r;
        n = $n(n)
    }
}

function Rs(e) {
    e.modified_ || (e.modified_ = !0, e.parent_ && Rs(e.parent_))
}

function Ci(e) {
    e.copy_ || (e.copy_ = Ps(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
var k0 = class {
    constructor(e) {
        this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
            if (typeof t == "function" && typeof n != "function") {
                const l = n;
                n = t;
                const i = this;
                return function(u = l, ...a) {
                    return i.produce(u, d => n.call(this, d, ...a))
                }
            }
            typeof n != "function" && Ue(6), r !== void 0 && typeof r != "function" && Ue(7);
            let o;
            if (nn(t)) {
                const l = rc(this),
                    i = js(t, void 0);
                let s = !0;
                try {
                    o = n(i), s = !1
                } finally {
                    s ? Ts(l) : Is(l)
                }
                return nc(l, r), oc(o, l)
            } else if (!t || typeof t != "object") {
                if (o = n(t), o === void 0 && (o = t), o === Pp && (o = void 0), this.autoFreeze_ && Lu(o, !0), r) {
                    const l = [],
                        i = [];
                    rn("Patches").generateReplacementPatches_(t, o, l, i), r(l, i)
                }
                return o
            } else Ue(1, t)
        }, this.produceWithPatches = (t, n) => {
            if (typeof t == "function") return (i, ...s) => this.produceWithPatches(i, u => t(u, ...s));
            let r, o;
            return [this.produce(t, n, (i, s) => {
                r = i, o = s
            }), r, o]
        }, typeof(e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof(e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
    }
    createDraft(e) {
        nn(e) || Ue(8), Dn(e) && (e = C0(e));
        const t = rc(this),
            n = js(e, void 0);
        return n[Pe].isManual_ = !0, Is(t), n
    }
    finishDraft(e, t) {
        const n = e && e[Pe];
        (!n || !n.isManual_) && Ue(9);
        const {
            scope_: r
        } = n;
        return nc(r, t), oc(void 0, r)
    }
    setAutoFreeze(e) {
        this.autoFreeze_ = e
    }
    setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e
    }
    applyPatches(e, t) {
        let n;
        for (n = t.length - 1; n >= 0; n--) {
            const o = t[n];
            if (o.path.length === 0 && o.op === "replace") {
                e = o.value;
                break
            }
        }
        n > -1 && (t = t.slice(n + 1));
        const r = rn("Patches").applyPatches_;
        return Dn(e) ? r(e, t) : this.produce(e, o => r(o, t))
    }
};

function js(e, t) {
    const n = Hl(e) ? rn("MapSet").proxyMap_(e, t) : Bl(e) ? rn("MapSet").proxySet_(e, t) : _0(e, t);
    return (t ? t.scope_ : Rp()).drafts_.push(n), n
}

function C0(e) {
    return Dn(e) || Ue(10, e), Op(e)
}

function Op(e) {
    if (!nn(e) || Gl(e)) return e;
    const t = e[Pe];
    let n;
    if (t) {
        if (!t.modified_) return t.base_;
        t.finalized_ = !0, n = Ps(e, t.scope_.immer_.useStrictShallowCopy_)
    } else n = Ps(e, !0);
    return pl(n, (r, o) => {
        Ip(n, r, Op(o))
    }), t && (t.finalized_ = !1), n
}
var Te = new k0,
    N0 = Te.produce;
Te.produceWithPatches.bind(Te);
Te.setAutoFreeze.bind(Te);
Te.setUseStrictShallowCopy.bind(Te);
Te.applyPatches.bind(Te);
Te.createDraft.bind(Te);
Te.finishDraft.bind(Te);
const P0 = e => (t, n, r) => (r.setState = (o, l, ...i) => {
        const s = typeof o == "function" ? N0(o) : o;
        return t(s, l, ...i)
    }, e(r.setState, n, r)),
    T0 = P0,
    ic = "game",
    I0 = {
        status: "idle"
    },
    Os = i0(c0(h0(T0(e => ({ ...I0,
        setStatus(t) {
            e(n => {
                n.status = t
            })
        }
    })), {
        name: `your-domain-or-you-want.react.v0.0.1:${ic}`,
        partialize: e => Object.fromEntries(Object.entries(e).filter(([t]) => !["status"].includes(t)))
    }), {
        name: "Zustand Store",
        store: ic
    }), s0),
    R0 = "d28721be-fd2d-4b45-869e-9f253b554e50",
    j0 = "43e35910-c168-4634-ad4f-52fd764a843f",
    xo = new Ul(R0, j0);

function O0() {
    const [e, t] = x.useState([null, null, null, null]), n = Os(a => a.status), r = Os(a => a.setStatus), [o, l] = x.useState(0), {
        copy: i
    } = Vl();
    x.useEffect(() => {
        if (n !== "wait") return;
        const a = setInterval(() => {
            l(d => d < 100 ? d + 1 : (clearInterval(a), 100))
        }, 1e3);
        return () => clearInterval(a)
    }, [n]);

    function s(a) {
        i(a), Mt(v.jsxs("div", {
            className: "flex justify-center items-center",
            children: [v.jsx(Ml, {
                size: 16,
                className: "mr-2"
            }), " ", v.jsx("span", {
                children: "Copied!"
            })]
        }))
    }
    async function u() {
        try {
            t([null, null, null, null]), r("wait"), l(0);
            const a = await Promise.all([xo.generate(), xo.generate(), xo.generate(), xo.generate()]);
            t(a), r("done"), l(100)
        } catch (a) {
            console.log("Error:", a), Mt("Error"), t([null, null, null, null]), r("idle"), l(0)
        }
    }
    return v.jsxs(Wr, {
        children: [v.jsxs(Hr, {
            children: [v.jsx(Br, {
                children: "Bike Ride 3D"
            }), v.jsxs(Gr, {
                children: ["click ", v.jsx("b", {
                    children: "Generate"
                }), " to use"]
            })]
        }), v.jsx(Kr, {
            children: v.jsxs("ul", {
                className: "space-y-2",
                children: [e.map((a, d) => v.jsxs("li", {
                    className: "flex justify-between items-center gap-4",
                    children: [a ? v.jsx(Fl, {
                        code: a
                    }) : v.jsx(Dl, {
                        animation: n === "wait"
                    }), v.jsx(ft, {
                        variant: "outline",
                        size: "sm",
                        onClick: () => s(a),
                        disabled: !a,
                        children: v.jsx(Al, {
                            size: 12
                        })
                    })]
                }, d)), v.jsxs("p", {
                    className: "text-center font-medium mt-4",
                    children: [o, "%"]
                }), v.jsx(Yr, {
                    value: o,
                    className: "progressbar"
                })]
            })
        }), v.jsx(Qr, {
            children: v.jsxs(ft, {
                onClick: u,
                disabled: n === "wait",
                children: [v.jsx($l, {
                    size: 16,
                    className: "mr-2"
                }), "Generate"]
            })
        })]
    })
}
const z0 = "74ee0b5b-775e-4bee-974f-63e7f4d5bacb",
    L0 = "fe693b26-b342-4159-8808-15e3ff7f8767",
    So = new Ul(z0, L0);

function M0() {
    const [e, t] = x.useState([null, null, null, null]), [n, r] = x.useState("idle"), [o, l] = x.useState(0), {
        copy: i
    } = Vl();
    x.useEffect(() => {
        if (n !== "wait") return;
        const a = setInterval(() => {
            l(d => d < 100 ? d + 1 : (clearInterval(a), 100))
        }, 1e3);
        return () => clearInterval(a)
    }, [n]);

    function s(a) {
        i(a), Mt(v.jsxs("div", {
            className: "flex justify-center items-center",
            children: [v.jsx(Ml, {
                size: 16,
                className: "mr-2"
            }), " ", v.jsx("span", {
                children: "Copied!"
            })]
        }))
    }
    async function u() {
        try {
            t([null, null, null, null]), r("wait"), l(0);
            const a = await Promise.all([So.generate(), So.generate(), So.generate(), So.generate()]);
            t(a), r("done"), l(100)
        } catch (a) {
            console.log("Error:", a), Mt("Error"), t([null, null, null, null]), r("idle"), l(0)
        }
    }
    return v.jsxs(Wr, {
        children: [v.jsxs(Hr, {
            children: [v.jsx(Br, {
                children: "My Clone Army"
            }), v.jsxs(Gr, {
                children: ["click ", v.jsx("b", {
                    children: "Generate"
                }), " to use"]
            })]
        }), v.jsx(Kr, {
            children: v.jsxs("ul", {
                className: "space-y-2",
                children: [e.map((a, d) => v.jsxs("li", {
                    className: "flex justify-between items-center gap-4",
                    children: [a ? v.jsx(Fl, {
                        code: a
                    }) : v.jsx(Dl, {
                        animation: n === "wait"
                    }), v.jsx(ft, {
                        variant: "outline",
                        size: "sm",
                        onClick: () => s(a),
                        disabled: !a,
                        children: v.jsx(Al, {
                            size: 12
                        })
                    })]
                }, d)), v.jsxs("p", {
                    className: "text-center font-medium mt-4",
                    children: [o, "%"]
                }), v.jsx(Yr, {
                    value: o,
                    className: "progressbar"
                })]
            })
        }), v.jsx(Qr, {
            children: v.jsxs(ft, {
                onClick: u,
                disabled: n === "wait",
                children: [v.jsx($l, {
                    size: 16,
                    className: "mr-2"
                }), "Generate"]
            })
        })]
    })
}
const A0 = "d1690a07-3780-4068-810f-9b5bbf2931b2",
    $0 = "b4170868-cef0-424f-8eb9-be0622e8e8e3",
    _o = new Ul(A0, $0);

function D0() {
    const [e, t] = x.useState([null, null, null, null]), [n, r] = x.useState("idle"), [o, l] = x.useState(0), {
        copy: i
    } = Vl();
    x.useEffect(() => {
        if (n !== "wait") return;
        const a = setInterval(() => {
            l(d => d < 100 ? d + 1 : (clearInterval(a), 100))
        }, 1e3);
        return () => clearInterval(a)
    }, [n]);

    function s(a) {
        i(a), Mt(v.jsxs("div", {
            className: "flex justify-center items-center",
            children: [v.jsx(Ml, {
                size: 16,
                className: "mr-2"
            }), " ", v.jsx("span", {
                children: "Copied!"
            })]
        }))
    }
    async function u() {
        try {
            t([null, null, null, null]), r("wait"), l(0);
            const a = await Promise.all([_o.generate(), _o.generate(), _o.generate(), _o.generate()]);
            t(a), r("done"), l(100)
        } catch (a) {
            console.log("Error:", a), Mt("Error"), t([null, null, null, null]), r("idle"), l(0)
        }
    }
    return v.jsxs(Wr, {
        children: [v.jsxs(Hr, {
            children: [v.jsx(Br, {
                children: "Chain Cube 2048"
            }), v.jsxs(Gr, {
                children: ["click ", v.jsx("b", {
                    children: "Generate"
                }), " to use"]
            })]
        }), v.jsx(Kr, {
            children: v.jsxs("ul", {
                className: "space-y-2",
                children: [e.map((a, d) => v.jsxs("li", {
                    className: "flex justify-between items-center gap-4",
                    children: [a ? v.jsx(Fl, {
                        code: a
                    }) : v.jsx(Dl, {
                        animation: n === "wait"
                    }), v.jsx(ft, {
                        variant: "outline",
                        size: "sm",
                        onClick: () => s(a),
                        disabled: !a,
                        children: v.jsx(Al, {
                            size: 12
                        })
                    })]
                }, d)), v.jsxs("p", {
                    className: "text-center font-medium mt-4",
                    children: [o, "%"]
                }), v.jsx(Yr, {
                    value: o,
                    className: "progressbar"
                })]
            })
        }), v.jsx(Qr, {
            children: v.jsxs(ft, {
                onClick: u,
                disabled: n === "wait",
                children: [v.jsx($l, {
                    size: 16,
                    className: "mr-2"
                }), "Generate"]
            })
        })]
    })
}
const F0 = "82647f43-3f87-402d-88dd-09a90025313f",
    V0 = "c4480ac7-e178-4973-8061-9ed5b2e17954",
    Eo = new Ul(F0, V0);

function U0() {
    const [e, t] = x.useState([null, null, null, null]), [n, r] = x.useState("idle"), [o, l] = x.useState(0), {
        copy: i
    } = Vl();
    x.useEffect(() => {
        if (n !== "wait") return;
        const a = setInterval(() => {
            l(d => d < 100 ? d + 1 : (clearInterval(a), 100))
        }, 1e3);
        return () => clearInterval(a)
    }, [n]);

    function s(a) {
        i(a), Mt(v.jsxs("div", {
            className: "flex justify-center items-center",
            children: [v.jsx(Ml, {
                size: 16,
                className: "mr-2"
            }), " ", v.jsx("span", {
                children: "Copied!"
            })]
        }))
    }
    async function u() {
        try {
            t([null, null, null, null]), r("wait"), l(0);
            const a = await Promise.all([Eo.generate(), Eo.generate(), Eo.generate(), Eo.generate()]);
            t(a), r("done"), l(100)
        } catch (a) {
            console.log("Error:", a), Mt("Error"), t([null, null, null, null]), r("idle"), l(0)
        }
    }
    return v.jsxs(Wr, {
        children: [v.jsxs(Hr, {
            children: [v.jsx(Br, {
                children: "Train Miner"
            }), v.jsxs(Gr, {
                children: ["click ", v.jsx("b", {
                    children: "Generate"
                }), " to use"]
            })]
        }), v.jsx(Kr, {
            children: v.jsxs("ul", {
                className: "space-y-2",
                children: [e.map((a, d) => v.jsxs("li", {
                    className: "flex justify-between items-center gap-4",
                    children: [a ? v.jsx(Fl, {
                        code: a
                    }) : v.jsx(Dl, {
                        animation: n === "wait"
                    }), v.jsx(ft, {
                        variant: "outline",
                        size: "sm",
                        onClick: () => s(a),
                        disabled: !a,
                        children: v.jsx(Al, {
                            size: 12
                        })
                    })]
                }, d)), v.jsxs("p", {
                    className: "text-center font-medium mt-4",
                    children: [o, "%"]
                }), v.jsx(Yr, {
                    value: o,
                    className: "progressbar"
                })]
            })
        }), v.jsx(Qr, {
            children: v.jsxs(ft, {
                onClick: u,
                disabled: n === "wait",
                children: [v.jsx($l, {
                    size: 16,
                    className: "mr-2"
                }), "Generate"]
            })
        })]
    })
}
const b0 = window.Telegram.WebApp;

function W0() {
    const e = Os(t => t.status);
    return x.useEffect(() => {
        b0.ready()
    }, []), v.jsxs(v.Fragment, {
        children: [v.jsx(wy, {}), v.jsxs("div", {
            className: "container",
            children: [v.jsxs(hy, {
                defaultValue: "bike",
                children: [v.jsxs(rp, {
                    children: [v.jsx(rr, {
                        value: "bike",
                        className: "font-bold text-foreground-muted",
                        disabled: e === "wait",
                        children: "Bike"
                    }), v.jsx(rr, {
                        value: "clone",
                        className: "font-bold text-foreground-muted",
                        disabled: e === "wait",
                        children: "Clone"
                    }), v.jsx(rr, {
                        value: "cube",
                        className: "font-bold text-foreground-muted",
                        disabled: e === "wait",
                        children: "Cube"
                    }), v.jsx(rr, {
                        value: "train",
                        className: "font-bold text-foreground-muted",
                        disabled: e === "wait",
                        children: "Train"
                    })]
                }), v.jsx(or, {
                    value: "bike",
                    children: v.jsx(O0, {})
                }), v.jsx(or, {
                    value: "clone",
                    children: v.jsx(M0, {})
                }), v.jsx(or, {
                    value: "cube",
                    children: v.jsx(D0, {})
                }), v.jsx(or, {
                    value: "train",
                    children: v.jsx(U0, {})
                })]
            }), v.jsx(Yv, {}), v.jsx(lg, {})]
        })]
    })
}
Ni.createRoot(document.getElementById("root")).render(v.jsx(Ye.StrictMode, {
    children: v.jsx(W0, {})
}));