(function(M, Y, t) {
    'use strict';

    function T(b) {
        return function() {
            var a = arguments[0],
                c;
            c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.3.8/" + (b ? b + "/" : "") + a;
            for (a = 1; a < arguments.length; a++) {
                c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";
                var d = encodeURIComponent,
                    e;
                e = arguments[a];
                e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                c += d(e)
            }
            return Error(c)
        }
    }

    function Ta(b) {
        if (null == b || Ua(b)) return !1;
        var a = b.length;
        return b.nodeType ===
            na && a ? !0 : F(b) || x(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
    }

    function s(b, a, c) {
        var d, e;
        if (b)
            if (G(b))
                for (d in b) "prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b);
            else if (x(b) || Ta(b)) {
            var f = "object" !== typeof b;
            d = 0;
            for (e = b.length; d < e; d++)(f || d in b) && a.call(c, b[d], d, b)
        } else if (b.forEach && b.forEach !== s) b.forEach(a, c, b);
        else
            for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d, b);
        return b
    }

    function Ed(b, a, c) {
        for (var d = Object.keys(b).sort(), e = 0; e < d.length; e++) a.call(c,
            b[d[e]], d[e]);
        return d
    }

    function kc(b) {
        return function(a, c) {
            b(c, a)
        }
    }

    function Fd() {
        return ++nb
    }

    function lc(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }

    function z(b) {
        for (var a = b.$$hashKey, c = 1, d = arguments.length; c < d; c++) {
            var e = arguments[c];
            if (e)
                for (var f = Object.keys(e), g = 0, h = f.length; g < h; g++) {
                    var l = f[g];
                    b[l] = e[l]
                }
        }
        lc(b, a);
        return b
    }

    function ba(b) {
        return parseInt(b, 10)
    }

    function C() {}

    function oa(b) {
        return b
    }

    function da(b) {
        return function() {
            return b
        }
    }

    function D(b) {
        return "undefined" === typeof b
    }

    function y(b) {
        return "undefined" !==
            typeof b
    }

    function H(b) {
        return null !== b && "object" === typeof b
    }

    function F(b) {
        return "string" === typeof b
    }

    function V(b) {
        return "number" === typeof b
    }

    function pa(b) {
        return "[object Date]" === Da.call(b)
    }

    function G(b) {
        return "function" === typeof b
    }

    function ob(b) {
        return "[object RegExp]" === Da.call(b)
    }

    function Ua(b) {
        return b && b.window === b
    }

    function Va(b) {
        return b && b.$evalAsync && b.$watch
    }

    function Wa(b) {
        return "boolean" === typeof b
    }

    function mc(b) {
        return !(!b || !(b.nodeName || b.prop && b.attr && b.find))
    }

    function Gd(b) {
        var a = {};
        b = b.split(",");
        var c;
        for (c = 0; c < b.length; c++) a[b[c]] = !0;
        return a
    }

    function ua(b) {
        return Q(b.nodeName || b[0] && b[0].nodeName)
    }

    function Xa(b, a) {
        var c = b.indexOf(a);
        0 <= c && b.splice(c, 1);
        return a
    }

    function Ea(b, a, c, d) {
        if (Ua(b) || Va(b)) throw Ka("cpws");
        if (a) {
            if (b === a) throw Ka("cpi");
            c = c || [];
            d = d || [];
            if (H(b)) {
                var e = c.indexOf(b);
                if (-1 !== e) return d[e];
                c.push(b);
                d.push(a)
            }
            if (x(b))
                for (var f = a.length = 0; f < b.length; f++) e = Ea(b[f], null, c, d), H(b[f]) && (c.push(b[f]), d.push(e)), a.push(e);
            else {
                var g = a.$$hashKey;
                x(a) ? a.length =
                    0 : s(a, function(b, c) {
                        delete a[c]
                    });
                for (f in b) b.hasOwnProperty(f) && (e = Ea(b[f], null, c, d), H(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);
                lc(a, g)
            }
        } else if (a = b) x(b) ? a = Ea(b, [], c, d) : pa(b) ? a = new Date(b.getTime()) : ob(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : H(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Ea(b, e, c, d));
        return a
    }

    function qa(b, a) {
        if (x(b)) {
            a = a || [];
            for (var c = 0, d = b.length; c < d; c++) a[c] = b[c]
        } else if (H(b))
            for (c in a = a || {}, b)
                if ("$" !== c.charAt(0) || "$" !== c.charAt(1)) a[c] =
                    b[c];
        return a || b
    }

    function fa(b, a) {
        if (b === a) return !0;
        if (null === b || null === a) return !1;
        if (b !== b && a !== a) return !0;
        var c = typeof b,
            d;
        if (c == typeof a && "object" == c)
            if (x(b)) {
                if (!x(a)) return !1;
                if ((c = b.length) == a.length) {
                    for (d = 0; d < c; d++)
                        if (!fa(b[d], a[d])) return !1;
                    return !0
                }
            } else {
                if (pa(b)) return pa(a) ? fa(b.getTime(), a.getTime()) : !1;
                if (ob(b) && ob(a)) return b.toString() == a.toString();
                if (Va(b) || Va(a) || Ua(b) || Ua(a) || x(a)) return !1;
                c = {};
                for (d in b)
                    if ("$" !== d.charAt(0) && !G(b[d])) {
                        if (!fa(b[d], a[d])) return !1;
                        c[d] = !0
                    }
                for (d in a)
                    if (!c.hasOwnProperty(d) &&
                        "$" !== d.charAt(0) && a[d] !== t && !G(a[d])) return !1;
                return !0
            }
        return !1
    }

    function Ya(b, a, c) {
        return b.concat(Za.call(a, c))
    }

    function nc(b, a) {
        var c = 2 < arguments.length ? Za.call(arguments, 2) : [];
        return !G(a) || a instanceof RegExp ? a : c.length ? function() {
            return arguments.length ? a.apply(b, Ya(c, arguments, 0)) : a.apply(b, c)
        } : function() {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        }
    }

    function Hd(b, a) {
        var c = a;
        "string" === typeof b && "$" === b.charAt(0) && "$" === b.charAt(1) ? c = t : Ua(a) ? c = "$WINDOW" : a && Y === a ? c = "$DOCUMENT" : Va(a) &&
            (c = "$SCOPE");
        return c
    }

    function $a(b, a) {
        if ("undefined" === typeof b) return t;
        V(a) || (a = a ? 2 : null);
        return JSON.stringify(b, Hd, a)
    }

    function oc(b) {
        return F(b) ? JSON.parse(b) : b
    }

    function va(b) {
        b = B(b).clone();
        try {
            b.empty()
        } catch (a) {}
        var c = B("<div>").append(b).html();
        try {
            return b[0].nodeType === pb ? Q(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + Q(b)
            })
        } catch (d) {
            return Q(c)
        }
    }

    function pc(b) {
        try {
            return decodeURIComponent(b)
        } catch (a) {}
    }

    function qc(b) {
        var a = {},
            c, d;
        s((b || "").split("&"), function(b) {
            b &&
                (c = b.replace(/\+/g, "%20").split("="), d = pc(c[0]), y(d) && (b = y(c[1]) ? pc(c[1]) : !0, rc.call(a, d) ? x(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
        });
        return a
    }

    function Nb(b) {
        var a = [];
        s(b, function(b, d) {
            x(b) ? s(b, function(b) {
                a.push(Fa(d, !0) + (!0 === b ? "" : "=" + Fa(b, !0)))
            }) : a.push(Fa(d, !0) + (!0 === b ? "" : "=" + Fa(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function qb(b) {
        return Fa(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Fa(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi,
            ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+")
    }

    function Id(b, a) {
        var c, d, e = rb.length;
        b = B(b);
        for (d = 0; d < e; ++d)
            if (c = rb[d] + a, F(c = b.attr(c))) return c;
        return null
    }

    function Jd(b, a) {
        var c, d, e = {};
        s(rb, function(a) {
            a += "app";
            !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a))
        });
        s(rb, function(a) {
            a += "app";
            var e;
            !c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a))
        });
        c && (e.strictDi = null !== Id(c, "strict-di"), a(c, d ? [d] : [], e))
    }

    function sc(b,
        a, c) {
        H(c) || (c = {});
        c = z({
            strictDi: !1
        }, c);
        var d = function() {
                b = B(b);
                if (b.injector()) {
                    var d = b[0] === Y ? "document" : va(b);
                    throw Ka("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
                }
                a = a || [];
                a.unshift(["$provide", function(a) {
                    a.value("$rootElement", b)
                }]);
                c.debugInfoEnabled && a.push(["$compileProvider", function(a) {
                    a.debugInfoEnabled(!0)
                }]);
                a.unshift("ng");
                d = Ob(a, c.strictDi);
                d.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                    a.$apply(function() {
                        b.data("$injector", d);
                        c(b)(a)
                    })
                }]);
                return d
            },
            e = /^NG_ENABLE_DEBUG_INFO!/,
            f = /^NG_DEFER_BOOTSTRAP!/;
        M && e.test(M.name) && (c.debugInfoEnabled = !0, M.name = M.name.replace(e, ""));
        if (M && !f.test(M.name)) return d();
        M.name = M.name.replace(f, "");
        ga.resumeBootstrap = function(b) {
            s(b, function(b) {
                a.push(b)
            });
            d()
        }
    }

    function Kd() {
        M.name = "NG_ENABLE_DEBUG_INFO!" + M.name;
        M.location.reload()
    }

    function Ld(b) {
        b = ga.element(b).injector();
        if (!b) throw Ka("test");
        return b.get("$$testability")
    }

    function tc(b, a) {
        a = a || "_";
        return b.replace(Md, function(b, d) {
            return (d ? a : "") + b.toLowerCase()
        })
    }

    function Nd() {
        var b;
        uc || ((ra = M.jQuery) && ra.fn.on ? (B = ra, z(ra.fn, {
            scope: La.scope,
            isolateScope: La.isolateScope,
            controller: La.controller,
            injector: La.injector,
            inheritedData: La.inheritedData
        }), b = ra.cleanData, ra.cleanData = function(a) {
            var c;
            if (Pb) Pb = !1;
            else
                for (var d = 0, e; null != (e = a[d]); d++)(c = ra._data(e, "events")) && c.$destroy && ra(e).triggerHandler("$destroy");
            b(a)
        }) : B = R, ga.element = B, uc = !0)
    }

    function Qb(b, a, c) {
        if (!b) throw Ka("areq", a || "?", c || "required");
        return b
    }

    function sb(b, a, c) {
        c && x(b) && (b = b[b.length - 1]);
        Qb(G(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function Ma(b, a) {
        if ("hasOwnProperty" === b) throw Ka("badname", a);
    }

    function vc(b, a, c) {
        if (!a) return b;
        a = a.split(".");
        for (var d, e = b, f = a.length, g = 0; g < f; g++) d = a[g], b && (b = (e = b)[d]);
        return !c && G(b) ? nc(e, b) : b
    }

    function tb(b) {
        var a = b[0];
        b = b[b.length - 1];
        var c = [a];
        do {
            a = a.nextSibling;
            if (!a) break;
            c.push(a)
        } while (a !== b);
        return B(c)
    }

    function ha() {
        return Object.create(null)
    }

    function Od(b) {
        function a(a, b, c) {
            return a[b] ||
                (a[b] = c())
        }
        var c = T("$injector"),
            d = T("ng");
        b = a(b, "angular", Object);
        b.$$minErr = b.$$minErr || T;
        return a(b, "module", function() {
            var b = {};
            return function(f, g, h) {
                if ("hasOwnProperty" === f) throw d("badname", "module");
                g && b.hasOwnProperty(f) && (b[f] = null);
                return a(b, f, function() {
                    function a(c, d, e, f) {
                        f || (f = b);
                        return function() {
                            f[e || "push"]([c, d, arguments]);
                            return u
                        }
                    }
                    if (!g) throw c("nomod", f);
                    var b = [],
                        d = [],
                        e = [],
                        q = a("$injector", "invoke", "push", d),
                        u = {
                            _invokeQueue: b,
                            _configBlocks: d,
                            _runBlocks: e,
                            requires: g,
                            name: f,
                            provider: a("$provide",
                                "provider"),
                            factory: a("$provide", "factory"),
                            service: a("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide", "constant", "unshift"),
                            animation: a("$animateProvider", "register"),
                            filter: a("$filterProvider", "register"),
                            controller: a("$controllerProvider", "register"),
                            directive: a("$compileProvider", "directive"),
                            config: q,
                            run: function(a) {
                                e.push(a);
                                return this
                            }
                        };
                    h && q(h);
                    return u
                })
            }
        })
    }

    function Pd(b) {
        z(b, {
            bootstrap: sc,
            copy: Ea,
            extend: z,
            equals: fa,
            element: B,
            forEach: s,
            injector: Ob,
            noop: C,
            bind: nc,
            toJson: $a,
            fromJson: oc,
            identity: oa,
            isUndefined: D,
            isDefined: y,
            isString: F,
            isFunction: G,
            isObject: H,
            isNumber: V,
            isElement: mc,
            isArray: x,
            version: Qd,
            isDate: pa,
            lowercase: Q,
            uppercase: ub,
            callbacks: {
                counter: 0
            },
            getTestability: Ld,
            $$minErr: T,
            $$csp: ab,
            reloadWithDebugInfo: Kd
        });
        bb = Od(M);
        try {
            bb("ngLocale")
        } catch (a) {
            bb("ngLocale", []).provider("$locale", Rd)
        }
        bb("ng", ["ngLocale"], ["$provide", function(a) {
            a.provider({
                $$sanitizeUri: Sd
            });
            a.provider("$compile", wc).directive({
                a: Td,
                input: xc,
                textarea: xc,
                form: Ud,
                script: Vd,
                select: Wd,
                style: Xd,
                option: Yd,
                ngBind: Zd,
                ngBindHtml: $d,
                ngBindTemplate: ae,
                ngClass: be,
                ngClassEven: ce,
                ngClassOdd: de,
                ngCloak: ee,
                ngController: fe,
                ngForm: ge,
                ngHide: he,
                ngIf: ie,
                ngInclude: je,
                ngInit: ke,
                ngNonBindable: le,
                ngPluralize: me,
                ngRepeat: ne,
                ngShow: oe,
                ngStyle: pe,
                ngSwitch: qe,
                ngSwitchWhen: re,
                ngSwitchDefault: se,
                ngOptions: te,
                ngTransclude: ue,
                ngModel: ve,
                ngList: we,
                ngChange: xe,
                pattern: yc,
                ngPattern: yc,
                required: zc,
                ngRequired: zc,
                minlength: Ac,
                ngMinlength: Ac,
                maxlength: Bc,
                ngMaxlength: Bc,
                ngValue: ye,
                ngModelOptions: ze
            }).directive({
                ngInclude: Ae
            }).directive(vb).directive(Cc);
            a.provider({
                $anchorScroll: Be,
                $animate: Ce,
                $browser: De,
                $cacheFactory: Ee,
                $controller: Fe,
                $document: Ge,
                $exceptionHandler: He,
                $filter: Dc,
                $interpolate: Ie,
                $interval: Je,
                $http: Ke,
                $httpBackend: Le,
                $location: Me,
                $log: Ne,
                $parse: Oe,
                $rootScope: Pe,
                $q: Qe,
                $$q: Re,
                $sce: Se,
                $sceDelegate: Te,
                $sniffer: Ue,
                $templateCache: Ve,
                $templateRequest: We,
                $$testability: Xe,
                $timeout: Ye,
                $window: Ze,
                $$rAF: $e,
                $$asyncCallback: af,
                $$jqLite: bf
            })
        }])
    }

    function cb(b) {
        return b.replace(cf, function(a, b, d, e) {
            return e ? d.toUpperCase() : d
        }).replace(df, "Moz$1")
    }

    function Ec(b) {
        b = b.nodeType;
        return b === na || !b || 9 === b
    }

    function Fc(b, a) {
        var c, d, e = a.createDocumentFragment(),
            f = [];
        if (Rb.test(b)) {
            c = c || e.appendChild(a.createElement("div"));
            d = (ef.exec(b) || ["", ""])[1].toLowerCase();
            d = ia[d] || ia._default;
            c.innerHTML = d[1] + b.replace(ff, "<$1></$2>") + d[2];
            for (d = d[0]; d--;) c = c.lastChild;
            f = Ya(f, c.childNodes);
            c = e.firstChild;
            c.textContent = ""
        } else f.push(a.createTextNode(b));
        e.textContent = "";
        e.innerHTML = "";
        s(f, function(a) {
            e.appendChild(a)
        });
        return e
    }

    function R(b) {
        if (b instanceof R) return b;
        var a;
        F(b) && (b = U(b), a = !0);
        if (!(this instanceof R)) {
            if (a && "<" != b.charAt(0)) throw Sb("nosel");
            return new R(b)
        }
        if (a) {
            a = Y;
            var c;
            b = (c = gf.exec(b)) ? [a.createElement(c[1])] : (c = Fc(b, a)) ? c.childNodes : []
        }
        Gc(this, b)
    }

    function Tb(b) {
        return b.cloneNode(!0)
    }

    function wb(b, a) {
        a || xb(b);
        if (b.querySelectorAll)
            for (var c = b.querySelectorAll("*"), d = 0, e = c.length; d < e; d++) xb(c[d])
    }

    function Hc(b, a, c, d) {
        if (y(d)) throw Sb("offargs");
        var e = (d = yb(b)) && d.events,
            f = d && d.handle;
        if (f)
            if (a) s(a.split(" "), function(a) {
                if (y(c)) {
                    var d =
                        e[a];
                    Xa(d || [], c);
                    if (d && 0 < d.length) return
                }
                b.removeEventListener(a, f, !1);
                delete e[a]
            });
            else
                for (a in e) "$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a]
    }

    function xb(b, a) {
        var c = b.ng339,
            d = c && zb[c];
        d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Hc(b)), delete zb[c], b.ng339 = t))
    }

    function yb(b, a) {
        var c = b.ng339,
            c = c && zb[c];
        a && !c && (b.ng339 = c = ++hf, c = zb[c] = {
            events: {},
            data: {},
            handle: t
        });
        return c
    }

    function Ub(b, a, c) {
        if (Ec(b)) {
            var d = y(c),
                e = !d && a && !H(a),
                f = !a;
            b = (b = yb(b, !e)) && b.data;
            if (d) b[a] = c;
            else {
                if (f) return b;
                if (e) return b && b[a];
                z(b, a)
            }
        }
    }

    function Ab(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
    }

    function Bb(b, a) {
        a && b.setAttribute && s(a.split(" "), function(a) {
            b.setAttribute("class", U((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + U(a) + " ", " ")))
        })
    }

    function Cb(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            s(a.split(" "), function(a) {
                a =
                    U(a); - 1 === c.indexOf(" " + a + " ") && (c += a + " ")
            });
            b.setAttribute("class", U(c))
        }
    }

    function Gc(b, a) {
        if (a)
            if (a.nodeType) b[b.length++] = a;
            else {
                var c = a.length;
                if ("number" === typeof c && a.window !== a) {
                    if (c)
                        for (var d = 0; d < c; d++) b[b.length++] = a[d]
                } else b[b.length++] = a
            }
    }

    function Ic(b, a) {
        return Db(b, "$" + (a || "ngController") + "Controller")
    }

    function Db(b, a, c) {
        9 == b.nodeType && (b = b.documentElement);
        for (a = x(a) ? a : [a]; b;) {
            for (var d = 0, e = a.length; d < e; d++)
                if ((c = B.data(b, a[d])) !== t) return c;
            b = b.parentNode || 11 === b.nodeType && b.host
        }
    }

    function Jc(b) {
        for (wb(b, !0); b.firstChild;) b.removeChild(b.firstChild)
    }

    function Kc(b, a) {
        a || wb(b);
        var c = b.parentNode;
        c && c.removeChild(b)
    }

    function jf(b, a) {
        a = a || M;
        if ("complete" === a.document.readyState) a.setTimeout(b);
        else B(a).on("load", b)
    }

    function Lc(b, a) {
        var c = Eb[a.toLowerCase()];
        return c && Mc[ua(b)] && c
    }

    function kf(b, a) {
        var c = b.nodeName;
        return ("INPUT" === c || "TEXTAREA" === c) && Nc[a]
    }

    function lf(b, a) {
        var c = function(c, e) {
            c.isDefaultPrevented = function() {
                return c.defaultPrevented
            };
            var f = a[e || c.type],
                g = f ? f.length :
                0;
            if (g) {
                if (D(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function() {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        h && h.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function() {
                    return !0 === c.immediatePropagationStopped
                };
                1 < g && (f = qa(f));
                for (var l = 0; l < g; l++) c.isImmediatePropagationStopped() || f[l].call(b, c)
            }
        };
        c.elem = b;
        return c
    }

    function bf() {
        this.$get = function() {
            return z(R, {
                hasClass: function(b, a) {
                    b.attr && (b = b[0]);
                    return Ab(b, a)
                },
                addClass: function(b,
                    a) {
                    b.attr && (b = b[0]);
                    return Cb(b, a)
                },
                removeClass: function(b, a) {
                    b.attr && (b = b[0]);
                    return Bb(b, a)
                }
            })
        }
    }

    function Na(b, a) {
        var c = b && b.$$hashKey;
        if (c) return "function" === typeof c && (c = b.$$hashKey()), c;
        c = typeof b;
        return c = "function" == c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Fd)() : c + ":" + b
    }

    function db(b, a) {
        if (a) {
            var c = 0;
            this.nextUid = function() {
                return ++c
            }
        }
        s(b, this.put, this)
    }

    function mf(b) {
        return (b = b.toString().replace(Oc, "").match(Pc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Vb(b,
        a, c) {
        var d;
        if ("function" === typeof b) {
            if (!(d = b.$inject)) {
                d = [];
                if (b.length) {
                    if (a) throw F(c) && c || (c = b.name || mf(b)), Ga("strictdi", c);
                    a = b.toString().replace(Oc, "");
                    a = a.match(Pc);
                    s(a[1].split(nf), function(a) {
                        a.replace( of , function(a, b, c) {
                            d.push(c)
                        })
                    })
                }
                b.$inject = d
            }
        } else x(b) ? (a = b.length - 1, sb(b[a], "fn"), d = b.slice(0, a)) : sb(b, "fn", !0);
        return d
    }

    function Ob(b, a) {
        function c(a) {
            return function(b, c) {
                if (H(b)) s(b, kc(a));
                else return a(b, c)
            }
        }

        function d(a, b) {
            Ma(a, "service");
            if (G(b) || x(b)) b = q.instantiate(b);
            if (!b.$get) throw Ga("pget",
                a);
            return p[a + "Provider"] = b
        }

        function e(a, b) {
            return function() {
                var c = r.invoke(b, this);
                if (D(c)) throw Ga("undef", a);
                return c
            }
        }

        function f(a, b, c) {
            return d(a, {
                $get: !1 !== c ? e(a, b) : b
            })
        }

        function g(a) {
            var b = [],
                c;
            s(a, function(a) {
                function d(a) {
                    var b, c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b],
                            f = q.get(e[0]);
                        f[e[1]].apply(f, e[2])
                    }
                }
                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        F(a) ? (c = bb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : G(a) ? b.push(q.invoke(a)) : x(a) ? b.push(q.invoke(a)) : sb(a, "module")
                    } catch (e) {
                        throw x(a) &&
                            (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ga("modulerr", a, e.stack || e.message || e);
                    }
                }
            });
            return b
        }

        function h(b, c) {
            function d(a, e) {
                if (b.hasOwnProperty(a)) {
                    if (b[a] === l) throw Ga("cdep", a + " <- " + k.join(" <- "));
                    return b[a]
                }
                try {
                    return k.unshift(a), b[a] = l, b[a] = c(a, e)
                } catch (f) {
                    throw b[a] === l && delete b[a], f;
                } finally {
                    k.shift()
                }
            }

            function e(b, c, f, g) {
                "string" === typeof f && (g = f, f = null);
                var h = [],
                    k = Vb(b, a, g),
                    l, q, p;
                q = 0;
                for (l = k.length; q < l; q++) {
                    p = k[q];
                    if ("string" !==
                        typeof p) throw Ga("itkn", p);
                    h.push(f && f.hasOwnProperty(p) ? f[p] : d(p, g))
                }
                x(b) && (b = b[l]);
                return b.apply(c, h)
            }
            return {
                invoke: e,
                instantiate: function(a, b, c) {
                    var d = Object.create((x(a) ? a[a.length - 1] : a).prototype);
                    a = e(a, d, b, c);
                    return H(a) || G(a) ? a : d
                },
                get: d,
                annotate: Vb,
                has: function(a) {
                    return p.hasOwnProperty(a + "Provider") || b.hasOwnProperty(a)
                }
            }
        }
        a = !0 === a;
        var l = {},
            k = [],
            m = new db([], !0),
            p = {
                $provide: {
                    provider: c(d),
                    factory: c(f),
                    service: c(function(a, b) {
                        return f(a, ["$injector", function(a) {
                            return a.instantiate(b)
                        }])
                    }),
                    value: c(function(a, b) {
                        return f(a, da(b), !1)
                    }),
                    constant: c(function(a, b) {
                        Ma(a, "constant");
                        p[a] = b;
                        u[a] = b
                    }),
                    decorator: function(a, b) {
                        var c = q.get(a + "Provider"),
                            d = c.$get;
                        c.$get = function() {
                            var a = r.invoke(d, c);
                            return r.invoke(b, null, {
                                $delegate: a
                            })
                        }
                    }
                }
            },
            q = p.$injector = h(p, function(a, b) {
                ga.isString(b) && k.push(b);
                throw Ga("unpr", k.join(" <- "));
            }),
            u = {},
            r = u.$injector = h(u, function(a, b) {
                var c = q.get(a + "Provider", b);
                return r.invoke(c.$get, c, t, a)
            });
        s(g(b), function(a) {
            r.invoke(a || C)
        });
        return r
    }

    function Be() {
        var b = !0;
        this.disableAutoScrolling =
            function() {
                b = !1
            };
        this.$get = ["$window", "$location", "$rootScope", function(a, c, d) {
            function e(a) {
                var b = null;
                Array.prototype.some.call(a, function(a) {
                    if ("a" === ua(a)) return b = a, !0
                });
                return b
            }

            function f(b) {
                if (b) {
                    b.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    G(c) ? c = c() : mc(c) ? (c = c[0], c = "fixed" !== a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : V(c) || (c = 0);
                    c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c))
                } else a.scrollTo(0, 0)
            }

            function g() {
                var a = c.hash(),
                    b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ?
                    f(b) : "top" === a && f(null) : f(null)
            }
            var h = a.document;
            b && d.$watch(function() {
                return c.hash()
            }, function(a, b) {
                a === b && "" === a || jf(function() {
                    d.$evalAsync(g)
                })
            });
            return g
        }]
    }

    function af() {
        this.$get = ["$$rAF", "$timeout", function(b, a) {
            return b.supported ? function(a) {
                return b(a)
            } : function(b) {
                return a(b, 0, !1)
            }
        }]
    }

    function pf(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, Za.call(arguments, 1))
            } finally {
                if (v--, 0 === v)
                    for (; w.length;) try {
                        w.pop()()
                    } catch (b) {
                        c.error(b)
                    }
            }
        }

        function f(a, b) {
            (function N() {
                s(L, function(a) {
                    a()
                });
                J = b(N,
                    a)
            })()
        }

        function g() {
            h();
            l()
        }

        function h() {
            A = b.history.state;
            A = D(A) ? null : A;
            fa(A, I) && (A = I);
            I = A
        }

        function l() {
            if (E !== m.url() || P !== A) E = m.url(), P = A, s(W, function(a) {
                a(m.url(), A)
            })
        }

        function k(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }
        var m = this,
            p = a[0],
            q = b.location,
            u = b.history,
            r = b.setTimeout,
            O = b.clearTimeout,
            n = {};
        m.isMock = !1;
        var v = 0,
            w = [];
        m.$$completeOutstandingRequest = e;
        m.$$incOutstandingRequestCount = function() {
            v++
        };
        m.notifyWhenNoOutstandingRequests = function(a) {
            s(L, function(a) {
                a()
            });
            0 === v ? a() :
                w.push(a)
        };
        var L = [],
            J;
        m.addPollFn = function(a) {
            D(J) && f(100, r);
            L.push(a);
            return a
        };
        var A, P, E = q.href,
            S = a.find("base"),
            X = null;
        h();
        P = A;
        m.url = function(a, c, e) {
            D(e) && (e = null);
            q !== b.location && (q = b.location);
            u !== b.history && (u = b.history);
            if (a) {
                var f = P === e;
                if (E === a && (!d.history || f)) return m;
                var g = E && Ha(E) === Ha(a);
                E = a;
                P = e;
                !d.history || g && f ? (g || (X = a), c ? q.replace(a) : g ? (c = q, e = a.indexOf("#"), a = -1 === e ? "" : a.substr(e + 1), c.hash = a) : q.href = a) : (u[c ? "replaceState" : "pushState"](e, "", a), h(), P = A);
                return m
            }
            return X || q.href.replace(/%27/g,
                "'")
        };
        m.state = function() {
            return A
        };
        var W = [],
            wa = !1,
            I = null;
        m.onUrlChange = function(a) {
            if (!wa) {
                if (d.history) B(b).on("popstate", g);
                B(b).on("hashchange", g);
                wa = !0
            }
            W.push(a);
            return a
        };
        m.$$checkUrlChange = l;
        m.baseHref = function() {
            var a = S.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var ea = {},
            y = "",
            ca = m.baseHref();
        m.cookies = function(a, b) {
            var d, e, f, g;
            if (a) b === t ? p.cookie = encodeURIComponent(a) + "=;path=" + ca + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : F(b) && (d = (p.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) +
                ";path=" + ca).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"));
            else {
                if (p.cookie !== y)
                    for (y = p.cookie, d = y.split("; "), ea = {}, f = 0; f < d.length; f++) e = d[f], g = e.indexOf("="), 0 < g && (a = k(e.substring(0, g)), ea[a] === t && (ea[a] = k(e.substring(g + 1))));
                return ea
            }
        };
        m.defer = function(a, b) {
            var c;
            v++;
            c = r(function() {
                delete n[c];
                e(a)
            }, b || 0);
            n[c] = !0;
            return c
        };
        m.defer.cancel = function(a) {
            return n[a] ? (delete n[a], O(a), e(C), !0) : !1
        }
    }

    function De() {
        this.$get = ["$window",
            "$log", "$sniffer", "$document",
            function(b, a, c, d) {
                return new pf(b, d, a, c)
            }
        ]
    }

    function Ee() {
        this.$get = function() {
            function b(b, d) {
                function e(a) {
                    a != p && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, p), p = a, p.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }
                if (b in a) throw T("$cacheFactory")("iid", b);
                var g = 0,
                    h = z({}, d, {
                        id: b
                    }),
                    l = {},
                    k = d && d.capacity || Number.MAX_VALUE,
                    m = {},
                    p = null,
                    q = null;
                return a[b] = {
                    put: function(a, b) {
                        if (k < Number.MAX_VALUE) {
                            var c = m[a] || (m[a] = {
                                key: a
                            });
                            e(c)
                        }
                        if (!D(b)) return a in l || g++, l[a] = b, g > k && this.remove(q.key),
                            b
                    },
                    get: function(a) {
                        if (k < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            e(b)
                        }
                        return l[a]
                    },
                    remove: function(a) {
                        if (k < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            b == p && (p = b.p);
                            b == q && (q = b.n);
                            f(b.n, b.p);
                            delete m[a]
                        }
                        delete l[a];
                        g--
                    },
                    removeAll: function() {
                        l = {};
                        g = 0;
                        m = {};
                        p = q = null
                    },
                    destroy: function() {
                        m = h = l = null;
                        delete a[b]
                    },
                    info: function() {
                        return z({}, h, {
                            size: g
                        })
                    }
                }
            }
            var a = {};
            b.info = function() {
                var b = {};
                s(a, function(a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function(b) {
                return a[b]
            };
            return b
        }
    }

    function Ve() {
        this.$get = ["$cacheFactory",
            function(b) {
                return b("templates")
            }
        ]
    }

    function wc(b, a) {
        function c(a, b) {
            var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                d = {};
            s(a, function(a, e) {
                var f = a.match(c);
                if (!f) throw ja("iscp", b, e, a);
                d[e] = {
                    mode: f[1][0],
                    collection: "*" === f[2],
                    optional: "?" === f[3],
                    attrName: f[4] || e
                }
            });
            return d
        }
        var d = {},
            e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            f = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            g = Gd("ngSrc,ngSrcset,src,srcset"),
            h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            l = /^(on[a-z]+|formaction)$/;
        this.directive = function p(a, e) {
            Ma(a, "directive");
            F(a) ? (Qb(e,
                "directiveFactory"), d.hasOwnProperty(a) || (d[a] = [], b.factory(a + "Directive", ["$injector", "$exceptionHandler", function(b, e) {
                var f = [];
                s(d[a], function(d, g) {
                    try {
                        var h = b.invoke(d);
                        G(h) ? h = {
                            compile: da(h)
                        } : !h.compile && h.link && (h.compile = da(h.link));
                        h.priority = h.priority || 0;
                        h.index = g;
                        h.name = h.name || a;
                        h.require = h.require || h.controller && h.name;
                        h.restrict = h.restrict || "EA";
                        H(h.scope) && (h.$$isolateBindings = c(h.scope, h.name));
                        f.push(h)
                    } catch (l) {
                        e(l)
                    }
                });
                return f
            }])), d[a].push(e)) : s(a, kc(p));
            return this
        };
        this.aHrefSanitizationWhitelist =
            function(b) {
                return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
            };
        this.imgSrcSanitizationWhitelist = function(b) {
            return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
        };
        var k = !0;
        this.debugInfoEnabled = function(a) {
            return y(a) ? (k = a, this) : k
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, b, c, r, O, n, v, w, L, J, A) {
            function P(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {}
            }

            function E(a, b, c, d, e) {
                a instanceof B || (a = B(a));
                s(a, function(b, c) {
                    b.nodeType == pb && b.nodeValue.match(/\S+/) && (a[c] = B(b).wrap("<span></span>").parent()[0])
                });
                var f = S(a, b, a, c, d, e);
                E.$$addScopeClass(a);
                var g = null;
                return function(b, c, d) {
                    Qb(b, "scope");
                    d = d || {};
                    var e = d.parentBoundTranscludeFn,
                        h = d.transcludeControllers;
                    d = d.futureParentElement;
                    e && e.$$boundTransclude && (e = e.$$boundTransclude);
                    g || (g = (d = d && d[0]) ? "foreignobject" !== ua(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");
                    d = "html" !== g ? B(Wb(g, B("<div>").append(a).html())) :
                        c ? La.clone.call(a) : a;
                    if (h)
                        for (var l in h) d.data("$" + l + "Controller", h[l].instance);
                    E.$$addScopeInfo(d, b);
                    c && c(d, b);
                    f && f(b, d, d, e);
                    return d
                }
            }

            function S(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, l, k, q, p, n, w;
                    if (r)
                        for (w = Array(c.length), q = 0; q < h.length; q += 3) f = h[q], w[f] = c[f];
                    else w = c;
                    q = 0;
                    for (p = h.length; q < p;) l = w[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (k = a.$new(), E.$$addScopeInfo(B(l), k)) : k = a, n = c.transcludeOnThisElement ? X(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? X(a,
                        b) : null, c(f, k, l, d, n)) : f && f(a, l.childNodes, t, e)
                }
                for (var h = [], l, k, q, p, r, n = 0; n < a.length; n++) {
                    l = new Xb;
                    k = W(a[n], [], l, 0 === n ? d : t, e);
                    (f = k.length ? ea(k, a[n], l, b, c, null, [], [], f) : null) && f.scope && E.$$addScopeClass(l.$$element);
                    l = f && f.terminal || !(q = a[n].childNodes) || !q.length ? null : S(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                    if (f || l) h.push(n, f, l), p = !0, r = r || f;
                    f = null
                }
                return p ? g : null
            }

            function X(a, b, c, d) {
                return function(d, e, f, g, h) {
                    d || (d = a.$new(!1, h), d.$$transcluded = !0);
                    return b(d, e, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: f,
                        futureParentElement: g
                    })
                }
            }

            function W(a, b, c, d, g) {
                var h = c.$attr,
                    l;
                switch (a.nodeType) {
                    case na:
                        ca(b, ya(ua(a)), "E", d, g);
                        for (var k, q, p, r = a.attributes, n = 0, w = r && r.length; n < w; n++) {
                            var O = !1,
                                L = !1;
                            k = r[n];
                            l = k.name;
                            q = U(k.value);
                            k = ya(l);
                            if (p = fb.test(k)) l = l.replace(Rc, "").substr(8).replace(/_(.)/g, function(a, b) {
                                return b.toUpperCase()
                            });
                            var u = k.replace(/(Start|End)$/, "");
                            D(u) && k === u + "Start" && (O = l, L = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));
                            k = ya(l.toLowerCase());
                            h[k] = l;
                            if (p || !c.hasOwnProperty(k)) c[k] = q, Lc(a, k) && (c[k] = !0);
                            Pa(a, b, q, k, p);
                            ca(b, k, "A", d, g, O, L)
                        }
                        a = a.className;
                        if (F(a) && "" !== a)
                            for (; l = f.exec(a);) k = ya(l[2]), ca(b, k, "C", d, g) && (c[k] = U(l[3])), a = a.substr(l.index + l[0].length);
                        break;
                    case pb:
                        M(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (l = e.exec(a.nodeValue)) k = ya(l[1]), ca(b, k, "M", d, g) && (c[k] = U(l[2]))
                        } catch (v) {}
                }
                b.sort(N);
                return b
            }

            function wa(a, b, c) {
                var d = [],
                    e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw ja("uterdir", b, c);
                        a.nodeType == na && (a.hasAttribute(b) &&
                            e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling
                    } while (0 < e)
                } else d.push(a);
                return B(d)
            }

            function I(a, b, c) {
                return function(d, e, f, g, h) {
                    e = wa(e[0], b, c);
                    return a(d, e, f, g, h)
                }
            }

            function ea(a, d, e, f, g, l, k, p, r) {
                function w(a, b, c, d) {
                    if (a) {
                        c && (a = I(a, c, d));
                        a.require = K.require;
                        a.directiveName = z;
                        if (S === K || K.$$isolateScope) a = Z(a, {
                            isolateScope: !0
                        });
                        k.push(a)
                    }
                    if (b) {
                        c && (b = I(b, c, d));
                        b.require = K.require;
                        b.directiveName = z;
                        if (S === K || K.$$isolateScope) b = Z(b, {
                            isolateScope: !0
                        });
                        p.push(b)
                    }
                }

                function L(a, b, c, d) {
                    var e, f = "data",
                        g = !1,
                        l = c,
                        k;
                    if (F(b)) {
                        k = b.match(h);
                        b = b.substring(k[0].length);
                        k[3] && (k[1] ? k[3] = null : k[1] = k[3]);
                        "^" === k[1] ? f = "inheritedData" : "^^" === k[1] && (f = "inheritedData", l = c.parent());
                        "?" === k[2] && (g = !0);
                        e = null;
                        d && "data" === f && (e = d[b]) && (e = e.instance);
                        e = e || l[f]("$" + b + "Controller");
                        if (!e && !g) throw ja("ctreq", b, a);
                        return e || null
                    }
                    x(b) && (e = [], s(b, function(b) {
                        e.push(L(a, b, c, d))
                    }));
                    return e
                }

                function v(a, c, f, g, h) {
                    function l(a, b, c) {
                        var d;
                        Va(a) || (c = b, b = a, a = t);
                        C && (d = P);
                        c || (c = C ? W.parent() : W);
                        return h(a, b, d, c, wa)
                    }
                    var r, w, u, A,
                        P, eb, W, I;
                    d === f ? (I = e, W = e.$$element) : (W = B(f), I = new Xb(W, e));
                    S && (A = c.$new(!0));
                    h && (eb = l, eb.$$boundTransclude = h);
                    J && (X = {}, P = {}, s(J, function(a) {
                        var b = {
                            $scope: a === S || a.$$isolateScope ? A : c,
                            $element: W,
                            $attrs: I,
                            $transclude: eb
                        };
                        u = a.controller;
                        "@" == u && (u = I[a.name]);
                        b = n(u, b, !0, a.controllerAs);
                        P[a.name] = b;
                        C || W.data("$" + a.name + "Controller", b.instance);
                        X[a.name] = b
                    }));
                    if (S) {
                        E.$$addScopeInfo(W, A, !0, !(ka && (ka === S || ka === S.$$originalDirective)));
                        E.$$addScopeClass(W, !0);
                        g = X && X[S.name];
                        var xa = A;
                        g && g.identifier && !0 === S.bindToController &&
                            (xa = g.instance);
                        s(A.$$isolateBindings = S.$$isolateBindings, function(a, d) {
                            var e = a.attrName,
                                f = a.optional,
                                g, h, l, k;
                            switch (a.mode) {
                                case "@":
                                    I.$observe(e, function(a) {
                                        xa[d] = a
                                    });
                                    I.$$observers[e].$$scope = c;
                                    I[e] && (xa[d] = b(I[e])(c));
                                    break;
                                case "=":
                                    if (f && !I[e]) break;
                                    h = O(I[e]);
                                    k = h.literal ? fa : function(a, b) {
                                        return a === b || a !== a && b !== b
                                    };
                                    l = h.assign || function() {
                                        g = xa[d] = h(c);
                                        throw ja("nonassign", I[e], S.name);
                                    };
                                    g = xa[d] = h(c);
                                    f = function(a) {
                                        k(a, xa[d]) || (k(a, g) ? l(c, a = xa[d]) : xa[d] = a);
                                        return g = a
                                    };
                                    f.$stateful = !0;
                                    f = a.collection ?
                                        c.$watchCollection(I[e], f) : c.$watch(O(I[e], f), null, h.literal);
                                    A.$on("$destroy", f);
                                    break;
                                case "&":
                                    h = O(I[e]), xa[d] = function(a) {
                                        return h(c, a)
                                    }
                            }
                        })
                    }
                    X && (s(X, function(a) {
                        a()
                    }), X = null);
                    g = 0;
                    for (r = k.length; g < r; g++) w = k[g], $(w, w.isolateScope ? A : c, W, I, w.require && L(w.directiveName, w.require, W, P), eb);
                    var wa = c;
                    S && (S.template || null === S.templateUrl) && (wa = A);
                    a && a(wa, f.childNodes, t, h);
                    for (g = p.length - 1; 0 <= g; g--) w = p[g], $(w, w.isolateScope ? A : c, W, I, w.require && L(w.directiveName, w.require, W, P), eb)
                }
                r = r || {};
                for (var A = -Number.MAX_VALUE,
                        P, J = r.controllerDirectives, X, S = r.newIsolateScopeDirective, ka = r.templateDirective, ea = r.nonTlbTranscludeDirective, ca = !1, D = !1, C = r.hasElementTranscludeDirective, aa = e.$$element = B(d), K, z, N, Aa = f, Q, M = 0, R = a.length; M < R; M++) {
                    K = a[M];
                    var Pa = K.$$start,
                        fb = K.$$end;
                    Pa && (aa = wa(d, Pa, fb));
                    N = t;
                    if (A > K.priority) break;
                    if (N = K.scope) K.templateUrl || (H(N) ? (Oa("new/isolated scope", S || P, K, aa), S = K) : Oa("new/isolated scope", S, K, aa)), P = P || K;
                    z = K.name;
                    !K.templateUrl && K.controller && (N = K.controller, J = J || {}, Oa("'" + z + "' controller", J[z],
                        K, aa), J[z] = K);
                    if (N = K.transclude) ca = !0, K.$$tlb || (Oa("transclusion", ea, K, aa), ea = K), "element" == N ? (C = !0, A = K.priority, N = aa, aa = e.$$element = B(Y.createComment(" " + z + ": " + e[z] + " ")), d = aa[0], V(g, Za.call(N, 0), d), Aa = E(N, f, A, l && l.name, {
                        nonTlbTranscludeDirective: ea
                    })) : (N = B(Tb(d)).contents(), aa.empty(), Aa = E(N, f));
                    if (K.template)
                        if (D = !0, Oa("template", ka, K, aa), ka = K, N = G(K.template) ? K.template(aa, e) : K.template, N = Sc(N), K.replace) {
                            l = K;
                            N = Rb.test(N) ? Tc(Wb(K.templateNamespace, U(N))) : [];
                            d = N[0];
                            if (1 != N.length || d.nodeType !==
                                na) throw ja("tplrt", z, "");
                            V(g, aa, d);
                            R = {
                                $attr: {}
                            };
                            N = W(d, [], R);
                            var ba = a.splice(M + 1, a.length - (M + 1));
                            S && y(N);
                            a = a.concat(N).concat(ba);
                            Qc(e, R);
                            R = a.length
                        } else aa.html(N);
                    if (K.templateUrl) D = !0, Oa("template", ka, K, aa), ka = K, K.replace && (l = K), v = T(a.splice(M, a.length - M), aa, e, g, ca && Aa, k, p, {
                        controllerDirectives: J,
                        newIsolateScopeDirective: S,
                        templateDirective: ka,
                        nonTlbTranscludeDirective: ea
                    }), R = a.length;
                    else if (K.compile) try {
                        Q = K.compile(aa, e, Aa), G(Q) ? w(null, Q, Pa, fb) : Q && w(Q.pre, Q.post, Pa, fb)
                    } catch (qf) {
                        c(qf, va(aa))
                    }
                    K.terminal &&
                        (v.terminal = !0, A = Math.max(A, K.priority))
                }
                v.scope = P && !0 === P.scope;
                v.transcludeOnThisElement = ca;
                v.elementTranscludeOnThisElement = C;
                v.templateOnThisElement = D;
                v.transclude = Aa;
                r.hasElementTranscludeDirective = C;
                return v
            }

            function y(a) {
                for (var b = 0, c = a.length; b < c; b++) {
                    var d = b,
                        e;
                    e = z(Object.create(a[b]), {
                        $$isolateScope: !0
                    });
                    a[d] = e
                }
            }

            function ca(b, e, f, g, h, l, k) {
                if (e === h) return null;
                h = null;
                if (d.hasOwnProperty(e)) {
                    var q;
                    e = a.get(e + "Directive");
                    for (var r = 0, n = e.length; r < n; r++) try {
                        if (q = e[r], (g === t || g > q.priority) && -1 !=
                            q.restrict.indexOf(f)) {
                            if (l) {
                                var w = {
                                    $$start: l,
                                    $$end: k
                                };
                                q = z(Object.create(q), w)
                            }
                            b.push(q);
                            h = q
                        }
                    } catch (O) {
                        c(O)
                    }
                }
                return h
            }

            function D(b) {
                if (d.hasOwnProperty(b))
                    for (var c = a.get(b + "Directive"), e = 0, f = c.length; e < f; e++)
                        if (b = c[e], b.multiElement) return !0;
                return !1
            }

            function Qc(a, b) {
                var c = b.$attr,
                    d = a.$attr,
                    e = a.$$element;
                s(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                s(b, function(b, f) {
                    "class" == f ? (P(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" ==
                        f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function T(a, b, c, d, e, f, g, h) {
                var l = [],
                    k, q, p = b[0],
                    n = a.shift(),
                    w = z({}, n, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: n
                    }),
                    O = G(n.templateUrl) ? n.templateUrl(b, c) : n.templateUrl,
                    u = n.templateNamespace;
                b.empty();
                r(L.getTrustedResourceUrl(O)).then(function(r) {
                    var L, v;
                    r = Sc(r);
                    if (n.replace) {
                        r = Rb.test(r) ? Tc(Wb(u, U(r))) : [];
                        L = r[0];
                        if (1 != r.length || L.nodeType !==
                            na) throw ja("tplrt", n.name, O);
                        r = {
                            $attr: {}
                        };
                        V(d, b, L);
                        var A = W(L, [], r);
                        H(n.scope) && y(A);
                        a = A.concat(a);
                        Qc(c, r)
                    } else L = p, b.html(r);
                    a.unshift(w);
                    k = ea(a, L, c, e, b, n, f, g, h);
                    s(d, function(a, c) {
                        a == L && (d[c] = b[0])
                    });
                    for (q = S(b[0].childNodes, e); l.length;) {
                        r = l.shift();
                        v = l.shift();
                        var J = l.shift(),
                            E = l.shift(),
                            A = b[0];
                        if (!r.$$destroyed) {
                            if (v !== p) {
                                var I = v.className;
                                h.hasElementTranscludeDirective && n.replace || (A = Tb(L));
                                V(J, B(v), A);
                                P(B(A), I)
                            }
                            v = k.transcludeOnThisElement ? X(r, k.transclude, E) : E;
                            k(q, r, A, d, v)
                        }
                    }
                    l = null
                });
                return function(a,
                    b, c, d, e) {
                    a = e;
                    b.$$destroyed || (l ? l.push(b, c, d, a) : (k.transcludeOnThisElement && (a = X(b, k.transclude, e)), k(q, b, c, d, a)))
                }
            }

            function N(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function Oa(a, b, c, d) {
                if (b) throw ja("multidir", b.name, c.name, a, va(d));
            }

            function M(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0,
                    compile: function(a) {
                        a = a.parent();
                        var b = !!a.length;
                        b && E.$$addBindingClass(a);
                        return function(a, c) {
                            var e = c.parent();
                            b || E.$$addBindingClass(e);
                            E.$$addBindingInfo(e,
                                d.expressions);
                            a.$watch(d, function(a) {
                                c[0].nodeValue = a
                            })
                        }
                    }
                })
            }

            function Wb(a, b) {
                a = Q(a || "html");
                switch (a) {
                    case "svg":
                    case "math":
                        var c = Y.createElement("div");
                        c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                        return c.childNodes[0].childNodes;
                    default:
                        return b
                }
            }

            function R(a, b) {
                if ("srcdoc" == b) return L.HTML;
                var c = ua(a);
                if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return L.RESOURCE_URL
            }

            function Pa(a, c, d, e, f) {
                var h = R(a, e);
                f = g[e] || f;
                var k = b(d, !0, h, f);
                if (k) {
                    if ("multiple" === e && "select" === ua(a)) throw ja("selmulti",
                        va(a));
                    c.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(a, c, g) {
                                    c = g.$$observers || (g.$$observers = {});
                                    if (l.test(e)) throw ja("nodomevents");
                                    var p = g[e];
                                    p !== d && (k = p && b(p, !0, h, f), d = p);
                                    k && (g[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || a).$watch(k, function(a, b) {
                                        "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function V(a, b, c) {
                var d = b[0],
                    e = b.length,
                    f = d.parentNode,
                    g, h;
                if (a)
                    for (g = 0, h = a.length; g < h; g++)
                        if (a[g] == d) {
                            a[g++] = c;
                            h = g + e - 1;
                            for (var l = a.length; g < l; g++,
                                h++) h < l ? a[g] = a[h] : delete a[g];
                            a.length -= e - 1;
                            a.context === d && (a.context = c);
                            break
                        }
                f && f.replaceChild(c, d);
                a = Y.createDocumentFragment();
                a.appendChild(d);
                B(c).data(B(d).data());
                ra ? (Pb = !0, ra.cleanData([d])) : delete B.cache[d[B.expando]];
                d = 1;
                for (e = b.length; d < e; d++) f = b[d], B(f).remove(), a.appendChild(f), delete b[d];
                b[0] = c;
                b.length = 1
            }

            function Z(a, b) {
                return z(function() {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function $(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g)
                } catch (h) {
                    c(h, va(d))
                }
            }
            var Xb = function(a, b) {
                if (b) {
                    var c = Object.keys(b),
                        d, e, f;
                    d = 0;
                    for (e = c.length; d < e; d++) f = c[d], this[f] = b[f]
                } else this.$attr = {};
                this.$$element = a
            };
            Xb.prototype = {
                $normalize: ya,
                $addClass: function(a) {
                    a && 0 < a.length && J.addClass(this.$$element, a)
                },
                $removeClass: function(a) {
                    a && 0 < a.length && J.removeClass(this.$$element, a)
                },
                $updateClass: function(a, b) {
                    var c = Uc(a, b);
                    c && c.length && J.addClass(this.$$element, c);
                    (c = Uc(b, a)) && c.length && J.removeClass(this.$$element, c)
                },
                $set: function(a, b, d, e) {
                    var f = this.$$element[0],
                        g = Lc(f, a),
                        h = kf(f, a),
                        f = a;
                    g ? (this.$$element.prop(a, b), e = g) :
                        h && (this[h] = b, f = h);
                    this[a] = b;
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = tc(a, "-"));
                    g = ua(this.$$element);
                    if ("a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = A(b, "src" === a);
                    else if ("img" === g && "srcset" === a) {
                        for (var g = "", h = U(b), l = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, l = /\s/.test(h) ? l : /(,)/, h = h.split(l), l = Math.floor(h.length / 2), k = 0; k < l; k++) var q = 2 * k,
                            g = g + A(U(h[q]), !0),
                            g = g + (" " + U(h[q + 1]));
                        h = U(h[2 * k]).split(/\s/);
                        g += A(U(h[0]), !0);
                        2 === h.length && (g += " " + U(h[1]));
                        this[a] = b = g
                    }!1 !== d && (null === b ||
                        b === t ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
                    (a = this.$$observers) && s(a[f], function(a) {
                        try {
                            a(b)
                        } catch (d) {
                            c(d)
                        }
                    })
                },
                $observe: function(a, b) {
                    var c = this,
                        d = c.$$observers || (c.$$observers = ha()),
                        e = d[a] || (d[a] = []);
                    e.push(b);
                    v.$evalAsync(function() {
                        !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                    });
                    return function() {
                        Xa(e, b)
                    }
                }
            };
            var Aa = b.startSymbol(),
                ka = b.endSymbol(),
                Sc = "{{" == Aa || "}}" == ka ? oa : function(a) {
                    return a.replace(/\{\{/g, Aa).replace(/}}/g, ka)
                },
                fb = /^ngAttr[A-Z]/;
            E.$$addBindingInfo = k ? function(a, b) {
                var c =
                    a.data("$binding") || [];
                x(b) ? c = c.concat(b) : c.push(b);
                a.data("$binding", c)
            } : C;
            E.$$addBindingClass = k ? function(a) {
                P(a, "ng-binding")
            } : C;
            E.$$addScopeInfo = k ? function(a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
            } : C;
            E.$$addScopeClass = k ? function(a, b) {
                P(a, b ? "ng-isolate-scope" : "ng-scope")
            } : C;
            return E
        }]
    }

    function ya(b) {
        return cb(b.replace(Rc, ""))
    }

    function Uc(b, a) {
        var c = "",
            d = b.split(/\s+/),
            e = a.split(/\s+/),
            f = 0;
        a: for (; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)
                if (g == e[h]) continue a;
            c += (0 < c.length ? " " : "") + g
        }
        return c
    }

    function Tc(b) {
        b = B(b);
        var a = b.length;
        if (1 >= a) return b;
        for (; a--;) 8 === b[a].nodeType && rf.call(b, a, 1);
        return b
    }

    function Fe() {
        var b = {},
            a = !1,
            c = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(a, c) {
            Ma(a, "controller");
            H(a) ? z(b, a) : b[a] = c
        };
        this.allowGlobals = function() {
            a = !0
        };
        this.$get = ["$injector", "$window", function(d, e) {
            function f(a, b, c, d) {
                if (!a || !H(a.$scope)) throw T("$controller")("noscp", d, b);
                a.$scope[b] = c
            }
            return function(g, h, l, k) {
                var m, p, q;
                l = !0 === l;
                k && F(k) && (q = k);
                F(g) &&
                    (k = g.match(c), p = k[1], q = q || k[3], g = b.hasOwnProperty(p) ? b[p] : vc(h.$scope, p, !0) || (a ? vc(e, p, !0) : t), sb(g, p, !0));
                if (l) return l = (x(g) ? g[g.length - 1] : g).prototype, m = Object.create(l), q && f(h, q, m, p || g.name), z(function() {
                    d.invoke(g, m, h, p);
                    return m
                }, {
                    instance: m,
                    identifier: q
                });
                m = d.instantiate(g, h, p);
                q && f(h, q, m, p || g.name);
                return m
            }
        }]
    }

    function Ge() {
        this.$get = ["$window", function(b) {
            return B(b.document)
        }]
    }

    function He() {
        this.$get = ["$log", function(b) {
            return function(a, c) {
                b.error.apply(b, arguments)
            }
        }]
    }

    function Yb(b, a) {
        if (F(b)) {
            var c =
                b.replace(sf, "").trim();
            if (c) {
                var d = a("Content-Type");
                (d = d && 0 === d.indexOf(Vc)) || (d = (d = c.match(tf)) && uf[d[0]].test(c));
                d && (b = oc(c))
            }
        }
        return b
    }

    function Wc(b) {
        var a = ha(),
            c, d, e;
        if (!b) return a;
        s(b.split("\n"), function(b) {
            e = b.indexOf(":");
            c = Q(U(b.substr(0, e)));
            d = U(b.substr(e + 1));
            c && (a[c] = a[c] ? a[c] + ", " + d : d)
        });
        return a
    }

    function Xc(b) {
        var a = H(b) ? b : t;
        return function(c) {
            a || (a = Wc(b));
            return c ? (c = a[Q(c)], void 0 === c && (c = null), c) : a
        }
    }

    function Yc(b, a, c, d) {
        if (G(d)) return d(b, a, c);
        s(d, function(d) {
            b = d(b, a, c)
        });
        return b
    }

    function Ke() {
        var b = this.defaults = {
                transformResponse: [Yb],
                transformRequest: [function(a) {
                    return H(a) && "[object File]" !== Da.call(a) && "[object Blob]" !== Da.call(a) && "[object FormData]" !== Da.call(a) ? $a(a) : a
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: qa(Zb),
                    put: qa(Zb),
                    patch: qa(Zb)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            },
            a = !1;
        this.useApplyAsync = function(b) {
            return y(b) ? (a = !!b, this) : a
        };
        var c = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory",
            "$rootScope", "$q", "$injector",
            function(d, e, f, g, h, l) {
                function k(a) {
                    function c(a) {
                        var b = z({}, a);
                        b.data = a.data ? Yc(a.data, a.headers, a.status, e.transformResponse) : a.data;
                        a = a.status;
                        return 200 <= a && 300 > a ? b : h.reject(b)
                    }

                    function d(a) {
                        var b, c = {};
                        s(a, function(a, d) {
                            G(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a
                        });
                        return c
                    }
                    if (!ga.isObject(a)) throw T("$http")("badreq", a);
                    var e = z({
                        method: "get",
                        transformRequest: b.transformRequest,
                        transformResponse: b.transformResponse
                    }, a);
                    e.headers = function(a) {
                        var c = b.headers,
                            e = z({}, a.headers),
                            f, g, c = z({}, c.common, c[Q(a.method)]);
                        a: for (f in c) {
                            a = Q(f);
                            for (g in e)
                                if (Q(g) === a) continue a;
                            e[f] = c[f]
                        }
                        return d(e)
                    }(a);
                    e.method = ub(e.method);
                    var f = [function(a) {
                            var d = a.headers,
                                e = Yc(a.data, Xc(d), t, a.transformRequest);
                            D(e) && s(d, function(a, b) {
                                "content-type" === Q(b) && delete d[b]
                            });
                            D(a.withCredentials) && !D(b.withCredentials) && (a.withCredentials = b.withCredentials);
                            return m(a, e).then(c, c)
                        }, t],
                        g = h.when(e);
                    for (s(u, function(a) {
                            (a.request || a.requestError) && f.unshift(a.request, a.requestError);
                            (a.response || a.responseError) &&
                            f.push(a.response, a.responseError)
                        }); f.length;) {
                        a = f.shift();
                        var l = f.shift(),
                            g = g.then(a, l)
                    }
                    g.success = function(a) {
                        g.then(function(b) {
                            a(b.data, b.status, b.headers, e)
                        });
                        return g
                    };
                    g.error = function(a) {
                        g.then(null, function(b) {
                            a(b.data, b.status, b.headers, e)
                        });
                        return g
                    };
                    return g
                }

                function m(c, f) {
                    function l(b, c, d, e) {
                        function f() {
                            m(c, b, d, e)
                        }
                        P && (200 <= b && 300 > b ? P.put(X, [b, c, Wc(d), e]) : P.remove(X));
                        a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply())
                    }

                    function m(a, b, d, e) {
                        b = Math.max(b, 0);
                        (200 <= b && 300 > b ? J.resolve : J.reject)({
                            data: a,
                            status: b,
                            headers: Xc(d),
                            config: c,
                            statusText: e
                        })
                    }

                    function w(a) {
                        m(a.data, a.status, qa(a.headers()), a.statusText)
                    }

                    function u() {
                        var a = k.pendingRequests.indexOf(c); - 1 !== a && k.pendingRequests.splice(a, 1)
                    }
                    var J = h.defer(),
                        A = J.promise,
                        P, E, s = c.headers,
                        X = p(c.url, c.params);
                    k.pendingRequests.push(c);
                    A.then(u, u);
                    !c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (P = H(c.cache) ? c.cache : H(b.cache) ? b.cache : q);
                    P && (E = P.get(X), y(E) ? E && G(E.then) ? E.then(w, w) : x(E) ? m(E[1], E[0], qa(E[2]), E[3]) : m(E, 200, {},
                        "OK") : P.put(X, A));
                    D(E) && ((E = Zc(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : t) && (s[c.xsrfHeaderName || b.xsrfHeaderName] = E), d(c.method, X, f, l, s, c.timeout, c.withCredentials, c.responseType));
                    return A
                }

                function p(a, b) {
                    if (!b) return a;
                    var c = [];
                    Ed(b, function(a, b) {
                        null === a || D(a) || (x(a) || (a = [a]), s(a, function(a) {
                            H(a) && (a = pa(a) ? a.toISOString() : $a(a));
                            c.push(Fa(b) + "=" + Fa(a))
                        }))
                    });
                    0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
                    return a
                }
                var q = f("$http"),
                    u = [];
                s(c, function(a) {
                    u.unshift(F(a) ? l.get(a) :
                        l.invoke(a))
                });
                k.pendingRequests = [];
                (function(a) {
                    s(arguments, function(a) {
                        k[a] = function(b, c) {
                            return k(z(c || {}, {
                                method: a,
                                url: b
                            }))
                        }
                    })
                })("get", "delete", "head", "jsonp");
                (function(a) {
                    s(arguments, function(a) {
                        k[a] = function(b, c, d) {
                            return k(z(d || {}, {
                                method: a,
                                url: b,
                                data: c
                            }))
                        }
                    })
                })("post", "put", "patch");
                k.defaults = b;
                return k
            }
        ]
    }

    function vf() {
        return new M.XMLHttpRequest
    }

    function Le() {
        this.$get = ["$browser", "$window", "$document", function(b, a, c) {
            return wf(b, vf, b.defer, a.angular.callbacks, c[0])
        }]
    }

    function wf(b, a, c,
        d, e) {
        function f(a, b, c) {
            var f = e.createElement("script"),
                m = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            m = function(a) {
                f.removeEventListener("load", m, !1);
                f.removeEventListener("error", m, !1);
                e.body.removeChild(f);
                f = null;
                var g = -1,
                    u = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {
                    type: "error"
                }), u = a.type, g = "error" === a.type ? 404 : 200);
                c && c(g, u)
            };
            f.addEventListener("load", m, !1);
            f.addEventListener("error", m, !1);
            e.body.appendChild(f);
            return m
        }
        return function(e, h, l, k, m, p, q, u) {
            function r() {
                v && v();
                w && w.abort()
            }

            function O(a, d, e, f, g) {
                J !== t && c.cancel(J);
                v = w = null;
                a(d, e, f, g);
                b.$$completeOutstandingRequest(C)
            }
            b.$$incOutstandingRequestCount();
            h = h || b.url();
            if ("jsonp" == Q(e)) {
                var n = "_" + (d.counter++).toString(36);
                d[n] = function(a) {
                    d[n].data = a;
                    d[n].called = !0
                };
                var v = f(h.replace("JSON_CALLBACK", "angular.callbacks." + n), n, function(a, b) {
                    O(k, a, d[n].data, "", b);
                    d[n] = C
                })
            } else {
                var w = a();
                w.open(e, h, !0);
                s(m, function(a, b) {
                    y(a) && w.setRequestHeader(b, a)
                });
                w.onload = function() {
                    var a = w.statusText || "",
                        b = "response" in w ? w.response : w.responseText,
                        c = 1223 === w.status ? 204 : w.status;
                    0 === c && (c = b ? 200 : "file" == Ba(h).protocol ? 404 : 0);
                    O(k, c, b, w.getAllResponseHeaders(), a)
                };
                e = function() {
                    O(k, -1, null, null, "")
                };
                w.onerror = e;
                w.onabort = e;
                q && (w.withCredentials = !0);
                if (u) try {
                    w.responseType = u
                } catch (L) {
                    if ("json" !== u) throw L;
                }
                w.send(l || null)
            }
            if (0 < p) var J = c(r, p);
            else p && G(p.then) && p.then(r)
        }
    }

    function Ie() {
        var b = "{{",
            a = "}}";
        this.startSymbol = function(a) {
            return a ? (b = a, this) : b
        };
        this.endSymbol = function(b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce",
            function(c, d, e) {
                function f(a) {
                    return "\\\\\\" + a
                }

                function g(f, g, u, r) {
                    function O(c) {
                        return c.replace(k, b).replace(m, a)
                    }

                    function n(a) {
                        try {
                            var b = a;
                            a = u ? e.getTrusted(u, b) : e.valueOf(b);
                            var c;
                            if (r && !y(a)) c = a;
                            else if (null == a) c = "";
                            else {
                                switch (typeof a) {
                                    case "string":
                                        break;
                                    case "number":
                                        a = "" + a;
                                        break;
                                    default:
                                        a = $a(a)
                                }
                                c = a
                            }
                            return c
                        } catch (g) {
                            c = $b("interr", f, g.toString()), d(c)
                        }
                    }
                    r = !!r;
                    for (var v, w, L = 0, J = [], A = [], P = f.length, E = [], s = []; L < P;)
                        if (-1 != (v = f.indexOf(b, L)) && -1 != (w = f.indexOf(a, v + h))) L !== v && E.push(O(f.substring(L,
                            v))), L = f.substring(v + h, w), J.push(L), A.push(c(L, n)), L = w + l, s.push(E.length), E.push("");
                        else {
                            L !== P && E.push(O(f.substring(L)));
                            break
                        }
                    if (u && 1 < E.length) throw $b("noconcat", f);
                    if (!g || J.length) {
                        var X = function(a) {
                            for (var b = 0, c = J.length; b < c; b++) {
                                if (r && D(a[b])) return;
                                E[s[b]] = a[b]
                            }
                            return E.join("")
                        };
                        return z(function(a) {
                            var b = 0,
                                c = J.length,
                                e = Array(c);
                            try {
                                for (; b < c; b++) e[b] = A[b](a);
                                return X(e)
                            } catch (g) {
                                a = $b("interr", f, g.toString()), d(a)
                            }
                        }, {
                            exp: f,
                            expressions: J,
                            $$watchDelegate: function(a, b, c) {
                                var d;
                                return a.$watchGroup(A,
                                    function(c, e) {
                                        var f = X(c);
                                        G(b) && b.call(this, f, c !== e ? d : f, a);
                                        d = f
                                    }, c)
                            }
                        })
                    }
                }
                var h = b.length,
                    l = a.length,
                    k = new RegExp(b.replace(/./g, f), "g"),
                    m = new RegExp(a.replace(/./g, f), "g");
                g.startSymbol = function() {
                    return b
                };
                g.endSymbol = function() {
                    return a
                };
                return g
            }
        ]
    }

    function Je() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function(b, a, c, d) {
            function e(e, h, l, k) {
                var m = a.setInterval,
                    p = a.clearInterval,
                    q = 0,
                    u = y(k) && !k,
                    r = (u ? d : c).defer(),
                    O = r.promise;
                l = y(l) ? l : 0;
                O.then(null, null, e);
                O.$$intervalId = m(function() {
                    r.notify(q++);
                    0 <
                        l && q >= l && (r.resolve(q), p(O.$$intervalId), delete f[O.$$intervalId]);
                    u || b.$apply()
                }, h);
                f[O.$$intervalId] = r;
                return O
            }
            var f = {};
            e.cancel = function(b) {
                return b && b.$$intervalId in f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) : !1
            };
            return e
        }]
    }

    function Rd() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "\u00a4",
                        posSuf: "",
                        negPre: "(\u00a4",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(b) {
                    return 1 === b ? "one" : "other"
                }
            }
        }
    }

    function ac(b) {
        b = b.split("/");
        for (var a = b.length; a--;) b[a] = qb(b[a]);
        return b.join("/")
    }

    function $c(b, a) {
        var c = Ba(b);
        a.$$protocol = c.protocol;
        a.$$host = c.hostname;
        a.$$port = ba(c.port) || xf[c.protocol] || null
    }

    function ad(b, a) {
        var c = "/" !== b.charAt(0);
        c && (b = "/" + b);
        var d = Ba(b);
        a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) :
            d.pathname);
        a.$$search = qc(d.search);
        a.$$hash = decodeURIComponent(d.hash);
        a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
    }

    function za(b, a) {
        if (0 === a.indexOf(b)) return a.substr(b.length)
    }

    function Ha(b) {
        var a = b.indexOf("#");
        return -1 == a ? b : b.substr(0, a)
    }

    function bd(b) {
        return b.replace(/(#.+)|#$/, "$1")
    }

    function bc(b) {
        return b.substr(0, Ha(b).lastIndexOf("/") + 1)
    }

    function cc(b, a) {
        this.$$html5 = !0;
        a = a || "";
        var c = bc(b);
        $c(b, this);
        this.$$parse = function(a) {
            var b = za(c, a);
            if (!F(b)) throw Fb("ipthprfx", a, c);
            ad(b, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function() {
            var a = Nb(this.$$search),
                b = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = ac(this.$$path) + (a ? "?" + a : "") + b;
            this.$$absUrl = c + this.$$url.substr(1)
        };
        this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            (f = za(b, d)) !== t ? (g = f, g = (f = za(a, f)) !== t ? c + (za("/", f) || f) : b + g) : (f = za(c, d)) !== t ? g = c + f : c == d + "/" && (g = c);
            g && this.$$parse(g);
            return !!g
        }
    }

    function dc(b, a) {
        var c = bc(b);
        $c(b, this);
        this.$$parse = function(d) {
            d =
                za(b, d) || za(c, d);
            var e;
            "#" === d.charAt(0) ? (e = za(a, d), D(e) && (e = d)) : e = this.$$html5 ? d : "";
            ad(e, this);
            d = this.$$path;
            var f = /^\/[A-Z]:(\/.*)/;
            0 === e.indexOf(b) && (e = e.replace(b, ""));
            f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
            this.$$path = d;
            this.$$compose()
        };
        this.$$compose = function() {
            var c = Nb(this.$$search),
                e = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = ac(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
        };
        this.$$parseLinkUrl = function(a, c) {
            return Ha(b) == Ha(a) ? (this.$$parse(a), !0) : !1
        }
    }

    function cd(b,
        a) {
        this.$$html5 = !0;
        dc.apply(this, arguments);
        var c = bc(b);
        this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            b == Ha(d) ? f = d : (g = za(c, d)) ? f = b + a + g : c === d + "/" && (f = c);
            f && this.$$parse(f);
            return !!f
        };
        this.$$compose = function() {
            var c = Nb(this.$$search),
                e = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = ac(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + a + this.$$url
        }
    }

    function Gb(b) {
        return function() {
            return this[b]
        }
    }

    function dd(b, a) {
        return function(c) {
            if (D(c)) return this[b];
            this[b] =
                a(c);
            this.$$compose();
            return this
        }
    }

    function Me() {
        var b = "",
            a = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(a) {
            return y(a) ? (b = a, this) : b
        };
        this.html5Mode = function(b) {
            return Wa(b) ? (a.enabled = b, this) : H(b) ? (Wa(b.enabled) && (a.enabled = b.enabled), Wa(b.requireBase) && (a.requireBase = b.requireBase), Wa(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
            function h(a, b, c) {
                var e = k.url(),
                    f = k.$$state;
                try {
                    d.url(a, b, c), k.$$state = d.state()
                } catch (g) {
                    throw k.url(e), k.$$state = f, g;
                }
            }

            function l(a, b) {
                c.$broadcast("$locationChangeSuccess", k.absUrl(), a, k.$$state, b)
            }
            var k, m;
            m = d.baseHref();
            var p = d.url(),
                q;
            if (a.enabled) {
                if (!m && a.requireBase) throw Fb("nobase");
                q = p.substring(0, p.indexOf("/", p.indexOf("//") + 2)) + (m || "/");
                m = e.history ? cc : cd
            } else q = Ha(p), m = dc;
            k = new m(q, "#" + b);
            k.$$parseLinkUrl(p, p);
            k.$$state = d.state();
            var u = /^\s*(javascript|mailto):/i;
            f.on("click", function(b) {
                if (a.rewriteLinks && !b.ctrlKey && !b.metaKey &&
                    2 != b.which) {
                    for (var e = B(b.target);
                        "a" !== ua(e[0]);)
                        if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"),
                        l = e.attr("href") || e.attr("xlink:href");
                    H(h) && "[object SVGAnimatedString]" === h.toString() && (h = Ba(h.animVal).href);
                    u.test(h) || !h || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(h, l) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            });
            k.absUrl() != p && d.url(k.absUrl(), !0);
            var r = !0;
            d.onUrlChange(function(a, b) {
                c.$evalAsync(function() {
                    var d =
                        k.absUrl(),
                        e = k.$$state,
                        f;
                    k.$$parse(a);
                    k.$$state = b;
                    f = c.$broadcast("$locationChangeStart", a, d, b, e).defaultPrevented;
                    k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (r = !1, l(d, e)))
                });
                c.$$phase || c.$digest()
            });
            c.$watch(function() {
                var a = bd(d.url()),
                    b = bd(k.absUrl()),
                    f = d.state(),
                    g = k.$$replace,
                    q = a !== b || k.$$html5 && e.history && f !== k.$$state;
                if (r || q) r = !1, c.$evalAsync(function() {
                    var b = k.absUrl(),
                        d = c.$broadcast("$locationChangeStart", b, a, k.$$state, f).defaultPrevented;
                    k.absUrl() === b && (d ? (k.$$parse(a), k.$$state =
                        f) : (q && h(b, g, f === k.$$state ? null : k.$$state), l(a, f)))
                });
                k.$$replace = !1
            });
            return k
        }]
    }

    function Ne() {
        var b = !0,
            a = this;
        this.debugEnabled = function(a) {
            return y(a) ? (b = a, this) : b
        };
        this.$get = ["$window", function(c) {
            function d(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = c.console || {},
                    e = b[a] || b.log || C;
                a = !1;
                try {
                    a = !!e.apply
                } catch (l) {}
                return a ? function() {
                    var a = [];
                    s(arguments, function(b) {
                        a.push(d(b))
                    });
                    return e.apply(b, a)
                } : function(a, b) {
                    e(a, null == b ? "" : b)
                }
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        b && c.apply(a, arguments)
                    }
                }()
            }
        }]
    }

    function sa(b, a) {
        if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b) throw la("isecfld", a);
        return b
    }

    function ta(b, a) {
        if (b) {
            if (b.constructor === b) throw la("isecfn", a);
            if (b.window === b) throw la("isecwindow",
                a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw la("isecdom", a);
            if (b === Object) throw la("isecobj", a);
        }
        return b
    }

    function ec(b) {
        return b.constant
    }

    function gb(b, a, c, d) {
        ta(b, d);
        a = a.split(".");
        for (var e, f = 0; 1 < a.length; f++) {
            e = sa(a.shift(), d);
            var g = ta(b[e], d);
            g || (g = {}, b[e] = g);
            b = g
        }
        e = sa(a.shift(), d);
        ta(b[e], d);
        return b[e] = c
    }

    function Qa(b) {
        return "constructor" == b
    }

    function ed(b, a, c, d, e, f, g) {
        sa(b, f);
        sa(a, f);
        sa(c, f);
        sa(d, f);
        sa(e, f);
        var h = function(a) {
                return ta(a, f)
            },
            l = g || Qa(b) ? h : oa,
            k = g || Qa(a) ? h : oa,
            m =
            g || Qa(c) ? h : oa,
            p = g || Qa(d) ? h : oa,
            q = g || Qa(e) ? h : oa;
        return function(f, g) {
            var h = g && g.hasOwnProperty(b) ? g : f;
            if (null == h) return h;
            h = l(h[b]);
            if (!a) return h;
            if (null == h) return t;
            h = k(h[a]);
            if (!c) return h;
            if (null == h) return t;
            h = m(h[c]);
            if (!d) return h;
            if (null == h) return t;
            h = p(h[d]);
            return e ? null == h ? t : h = q(h[e]) : h
        }
    }

    function yf(b, a) {
        return function(c, d) {
            return b(c, d, ta, a)
        }
    }

    function zf(b, a, c) {
        var d = a.expensiveChecks,
            e = d ? Af : Bf,
            f = e[b];
        if (f) return f;
        var g = b.split("."),
            h = g.length;
        if (a.csp) f = 6 > h ? ed(g[0], g[1], g[2], g[3], g[4],
            c, d) : function(a, b) {
            var e = 0,
                f;
            do f = ed(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = t, a = f; while (e < h);
            return f
        };
        else {
            var l = "";
            d && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var k = d;
            s(g, function(a, b) {
                sa(a, c);
                var e = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
                if (d || Qa(a)) e = "eso(" + e + ", fe)", k = !0;
                l += "if(s == null) return undefined;\ns=" + e + ";\n"
            });
            l += "return s;";
            a = new Function("s", "l", "eso", "fe", l);
            a.toString = da(l);
            k && (a = yf(a, c));
            f = a
        }
        f.sharedGetter = !0;
        f.assign = function(a, c) {
            return gb(a, b, c, b)
        };
        return e[b] =
            f
    }

    function fc(b) {
        return G(b.valueOf) ? b.valueOf() : Cf.call(b)
    }

    function Oe() {
        var b = ha(),
            a = ha();
        this.$get = ["$filter", "$sniffer", function(c, d) {
            function e(a) {
                var b = a;
                a.sharedGetter && (b = function(b, c) {
                    return a(b, c)
                }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign);
                return b
            }

            function f(a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    e.constant || (e.inputs ? f(e.inputs, b) : -1 === b.indexOf(e) && b.push(e))
                }
                return b
            }

            function g(a, b) {
                return null == a || null == b ? a === b : "object" === typeof a && (a = fc(a), "object" === typeof a) ?
                    !1 : a === b || a !== a && b !== b
            }

            function h(a, b, c, d) {
                var e = d.$$inputs || (d.$$inputs = f(d.inputs, [])),
                    h;
                if (1 === e.length) {
                    var l = g,
                        e = e[0];
                    return a.$watch(function(a) {
                        var b = e(a);
                        g(b, l) || (h = d(a), l = b && fc(b));
                        return h
                    }, b, c)
                }
                for (var k = [], q = 0, p = e.length; q < p; q++) k[q] = g;
                return a.$watch(function(a) {
                    for (var b = !1, c = 0, f = e.length; c < f; c++) {
                        var l = e[c](a);
                        if (b || (b = !g(l, k[c]))) k[c] = l && fc(l)
                    }
                    b && (h = d(a));
                    return h
                }, b, c)
            }

            function l(a, b, c, d) {
                var e, f;
                return e = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    f = a;
                    G(b) && b.apply(this, arguments);
                    y(a) && d.$$postDigest(function() {
                        y(f) && e()
                    })
                }, c)
            }

            function k(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    s(a, function(a) {
                        y(a) || (b = !1)
                    });
                    return b
                }
                var f, g;
                return f = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    g = a;
                    G(b) && b.call(this, a, c, d);
                    e(a) && d.$$postDigest(function() {
                        e(g) && f()
                    })
                }, c)
            }

            function m(a, b, c, d) {
                var e;
                return e = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    G(b) && b.apply(this, arguments);
                    e()
                }, c)
            }

            function p(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate,
                    c = c !== k && c !== l ? function(c, d) {
                        var e = a(c, d);
                        return b(e,
                            c, d)
                    } : function(c, d) {
                        var e = a(c, d),
                            f = b(e, c, d);
                        return y(e) ? f : e
                    };
                a.$$watchDelegate && a.$$watchDelegate !== h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, c.inputs = [a]);
                return c
            }
            var q = {
                    csp: d.csp,
                    expensiveChecks: !1
                },
                u = {
                    csp: d.csp,
                    expensiveChecks: !0
                };
            return function(d, f, g) {
                var v, w, L;
                switch (typeof d) {
                    case "string":
                        L = d = d.trim();
                        var J = g ? a : b;
                        v = J[L];
                        v || (":" === d.charAt(0) && ":" === d.charAt(1) && (w = !0, d = d.substring(2)), g = g ? u : q, v = new gc(g), v = (new hb(v, c, g)).parse(d), v.constant ? v.$$watchDelegate =
                            m : w ? (v = e(v), v.$$watchDelegate = v.literal ? k : l) : v.inputs && (v.$$watchDelegate = h), J[L] = v);
                        return p(v, f);
                    case "function":
                        return p(d, f);
                    default:
                        return p(C, f)
                }
            }
        }]
    }

    function Qe() {
        this.$get = ["$rootScope", "$exceptionHandler", function(b, a) {
            return fd(function(a) {
                b.$evalAsync(a)
            }, a)
        }]
    }

    function Re() {
        this.$get = ["$browser", "$exceptionHandler", function(b, a) {
            return fd(function(a) {
                b.defer(a)
            }, a)
        }]
    }

    function fd(b, a) {
        function c(a, b, c) {
            function d(b) {
                return function(c) {
                    e || (e = !0, b.call(a, c))
                }
            }
            var e = !1;
            return [d(b), d(c)]
        }

        function d() {
            this.$$state = {
                status: 0
            }
        }

        function e(a, b) {
            return function(c) {
                b.call(a, c)
            }
        }

        function f(c) {
            !c.processScheduled && c.pending && (c.processScheduled = !0, b(function() {
                var b, d, e;
                e = c.pending;
                c.processScheduled = !1;
                c.pending = t;
                for (var f = 0, g = e.length; f < g; ++f) {
                    d = e[f][0];
                    b = e[f][c.status];
                    try {
                        G(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
                    } catch (h) {
                        d.reject(h), a(h)
                    }
                }
            }))
        }

        function g() {
            this.promise = new d;
            this.resolve = e(this, this.resolve);
            this.reject = e(this, this.reject);
            this.notify = e(this, this.notify)
        }
        var h =
            T("$q", TypeError);
        d.prototype = {
            then: function(a, b, c) {
                var d = new g;
                this.$$state.pending = this.$$state.pending || [];
                this.$$state.pending.push([d, a, b, c]);
                0 < this.$$state.status && f(this.$$state);
                return d.promise
            },
            "catch": function(a) {
                return this.then(null, a)
            },
            "finally": function(a, b) {
                return this.then(function(b) {
                    return k(b, !0, a)
                }, function(b) {
                    return k(b, !1, a)
                }, b)
            }
        };
        g.prototype = {
            resolve: function(a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a))
            },
            $$resolve: function(b) {
                var d,
                    e;
                e = c(this, this.$$resolve, this.$$reject);
                try {
                    if (H(b) || G(b)) d = b && b.then;
                    G(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state))
                } catch (g) {
                    e[1](g), a(g)
                }
            },
            reject: function(a) {
                this.promise.$$state.status || this.$$reject(a)
            },
            $$reject: function(a) {
                this.promise.$$state.value = a;
                this.promise.$$state.status = 2;
                f(this.promise.$$state)
            },
            notify: function(c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status &&
                    d && d.length && b(function() {
                        for (var b, e, f = 0, g = d.length; f < g; f++) {
                            e = d[f][0];
                            b = d[f][3];
                            try {
                                e.notify(G(b) ? b(c) : c)
                            } catch (h) {
                                a(h)
                            }
                        }
                    })
            }
        };
        var l = function(a, b) {
                var c = new g;
                b ? c.resolve(a) : c.reject(a);
                return c.promise
            },
            k = function(a, b, c) {
                var d = null;
                try {
                    G(c) && (d = c())
                } catch (e) {
                    return l(e, !1)
                }
                return d && G(d.then) ? d.then(function() {
                    return l(a, b)
                }, function(a) {
                    return l(a, !1)
                }) : l(a, b)
            },
            m = function(a, b, c, d) {
                var e = new g;
                e.resolve(a);
                return e.promise.then(b, c, d)
            },
            p = function u(a) {
                if (!G(a)) throw h("norslvr", a);
                if (!(this instanceof u)) return new u(a);
                var b = new g;
                a(function(a) {
                    b.resolve(a)
                }, function(a) {
                    b.reject(a)
                });
                return b.promise
            };
        p.defer = function() {
            return new g
        };
        p.reject = function(a) {
            var b = new g;
            b.reject(a);
            return b.promise
        };
        p.when = m;
        p.all = function(a) {
            var b = new g,
                c = 0,
                d = x(a) ? [] : {};
            s(a, function(a, e) {
                c++;
                m(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            });
            0 === c && b.resolve(d);
            return b.promise
        };
        return p
    }

    function $e() {
        this.$get = ["$window", "$timeout", function(b,
            a) {
            var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame,
                d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame,
                e = !!c,
                f = e ? function(a) {
                    var b = c(a);
                    return function() {
                        d(b)
                    }
                } : function(b) {
                    var c = a(b, 16.66, !1);
                    return function() {
                        a.cancel(c)
                    }
                };
            f.supported = e;
            return f
        }]
    }

    function Pe() {
        var b = 10,
            a = T("$rootScope"),
            c = null,
            d = null;
        this.digestTtl = function(a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(e, f, g, h) {
            function l() {
                this.$id =
                    ++nb;
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this.$root = this;
                this.$$destroyed = !1;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$isolateBindings = null
            }

            function k(b) {
                if (r.$$phase) throw a("inprog", r.$$phase);
                r.$$phase = b
            }

            function m(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function p() {}

            function q() {
                for (; v.length;) try {
                    v.shift()()
                } catch (a) {
                    f(a)
                }
                d = null
            }

            function u() {
                null ===
                    d && (d = h.defer(function() {
                        r.$apply(q)
                    }))
            }
            l.prototype = {
                constructor: l,
                $new: function(a, b) {
                    function c() {
                        d.$$destroyed = !0
                    }
                    var d;
                    b = b || this;
                    a ? (d = new l, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                        this.$$listeners = {};
                        this.$$listenerCount = {};
                        this.$id = ++nb;
                        this.$$ChildScope = null
                    }, this.$$ChildScope.prototype = this), d = new this.$$ChildScope);
                    d.$parent = b;
                    d.$$prevSibling = b.$$childTail;
                    b.$$childHead ? (b.$$childTail.$$nextSibling =
                        d, b.$$childTail = d) : b.$$childHead = b.$$childTail = d;
                    (a || b != this) && d.$on("$destroy", c);
                    return d
                },
                $watch: function(a, b, d) {
                    var e = g(a);
                    if (e.$$watchDelegate) return e.$$watchDelegate(this, b, d, e);
                    var f = this.$$watchers,
                        h = {
                            fn: b,
                            last: p,
                            get: e,
                            exp: a,
                            eq: !!d
                        };
                    c = null;
                    G(b) || (h.fn = C);
                    f || (f = this.$$watchers = []);
                    f.unshift(h);
                    return function() {
                        Xa(f, h);
                        c = null
                    }
                },
                $watchGroup: function(a, b) {
                    function c() {
                        h = !1;
                        l ? (l = !1, b(e, e, g)) : b(e, d, g)
                    }
                    var d = Array(a.length),
                        e = Array(a.length),
                        f = [],
                        g = this,
                        h = !1,
                        l = !0;
                    if (!a.length) {
                        var k = !0;
                        g.$evalAsync(function() {
                            k &&
                                b(e, e, g)
                        });
                        return function() {
                            k = !1
                        }
                    }
                    if (1 === a.length) return this.$watch(a[0], function(a, c, f) {
                        e[0] = a;
                        d[0] = c;
                        b(e, a === c ? e : d, f)
                    });
                    s(a, function(a, b) {
                        var l = g.$watch(a, function(a, f) {
                            e[b] = a;
                            d[b] = f;
                            h || (h = !0, g.$evalAsync(c))
                        });
                        f.push(l)
                    });
                    return function() {
                        for (; f.length;) f.shift()()
                    }
                },
                $watchCollection: function(a, b) {
                    function c(a) {
                        e = a;
                        var b, d, g, h;
                        if (!D(e)) {
                            if (H(e))
                                if (Ta(e))
                                    for (f !== q && (f = q, u = f.length = 0, k++), a = e.length, u !== a && (k++, f.length = u = a), b = 0; b < a; b++) h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (k++, f[b] = g);
                                else {
                                    f !==
                                        m && (f = m = {}, u = 0, k++);
                                    a = 0;
                                    for (b in e) e.hasOwnProperty(b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (k++, f[b] = g)) : (u++, f[b] = g, k++));
                                    if (u > a)
                                        for (b in k++, f) e.hasOwnProperty(b) || (u--, delete f[b])
                                }
                            else f !== e && (f = e, k++);
                            return k
                        }
                    }
                    c.$stateful = !0;
                    var d = this,
                        e, f, h, l = 1 < b.length,
                        k = 0,
                        p = g(a, c),
                        q = [],
                        m = {},
                        n = !0,
                        u = 0;
                    return this.$watch(p, function() {
                        n ? (n = !1, b(e, e, d)) : b(e, h, d);
                        if (l)
                            if (H(e))
                                if (Ta(e)) {
                                    h = Array(e.length);
                                    for (var a = 0; a < e.length; a++) h[a] = e[a]
                                } else
                                    for (a in h = {}, e) rc.call(e, a) && (h[a] = e[a]);
                        else h =
                            e
                    })
                },
                $digest: function() {
                    var e, g, l, m, u, v, s = b,
                        t, W = [],
                        y, I;
                    k("$digest");
                    h.$$checkUrlChange();
                    this === r && null !== d && (h.defer.cancel(d), q());
                    c = null;
                    do {
                        v = !1;
                        for (t = this; O.length;) {
                            try {
                                I = O.shift(), I.scope.$eval(I.expression, I.locals)
                            } catch (B) {
                                f(B)
                            }
                            c = null
                        }
                        a: do {
                            if (m = t.$$watchers)
                                for (u = m.length; u--;) try {
                                    if (e = m[u])
                                        if ((g = e.get(t)) !== (l = e.last) && !(e.eq ? fa(g, l) : "number" === typeof g && "number" === typeof l && isNaN(g) && isNaN(l))) v = !0, c = e, e.last = e.eq ? Ea(g, null) : g, e.fn(g, l === p ? g : l, t), 5 > s && (y = 4 - s, W[y] || (W[y] = []), W[y].push({
                                            msg: G(e.exp) ?
                                                "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                                            newVal: g,
                                            oldVal: l
                                        }));
                                        else if (e === c) {
                                        v = !1;
                                        break a
                                    }
                                } catch (D) {
                                    f(D)
                                }
                            if (!(m = t.$$childHead || t !== this && t.$$nextSibling))
                                for (; t !== this && !(m = t.$$nextSibling);) t = t.$parent
                        } while (t = m);
                        if ((v || O.length) && !s--) throw r.$$phase = null, a("infdig", b, W);
                    } while (v || O.length);
                    for (r.$$phase = null; n.length;) try {
                        n.shift()()
                    } catch (ca) {
                        f(ca)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        if (this !== r) {
                            for (var b in this.$$listenerCount) m(this,
                                this.$$listenerCount[b], b);
                            a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                            a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                            this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                            this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                            this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = C;
                            this.$on = this.$watch = this.$watchGroup = function() {
                                return C
                            };
                            this.$$listeners = {};
                            this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead =
                                this.$$childTail = this.$root = this.$$watchers = null
                        }
                    }
                },
                $eval: function(a, b) {
                    return g(a)(this, b)
                },
                $evalAsync: function(a, b) {
                    r.$$phase || O.length || h.defer(function() {
                        O.length && r.$digest()
                    });
                    O.push({
                        scope: this,
                        expression: a,
                        locals: b
                    })
                },
                $$postDigest: function(a) {
                    n.push(a)
                },
                $apply: function(a) {
                    try {
                        return k("$apply"), this.$eval(a)
                    } catch (b) {
                        f(b)
                    } finally {
                        r.$$phase = null;
                        try {
                            r.$digest()
                        } catch (c) {
                            throw f(c), c;
                        }
                    }
                },
                $applyAsync: function(a) {
                    function b() {
                        c.$eval(a)
                    }
                    var c = this;
                    a && v.push(b);
                    u()
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        var d = c.indexOf(b); - 1 !== d && (c[d] = null, m(e, 1, a))
                    }
                },
                $emit: function(a, b) {
                    var c = [],
                        d, e = this,
                        g = !1,
                        h = {
                            name: a,
                            targetScope: e,
                            stopPropagation: function() {
                                g = !0
                            },
                            preventDefault: function() {
                                h.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        l = Ya([h], arguments, 1),
                        k, p;
                    do {
                        d = e.$$listeners[a] || c;
                        h.currentScope = e;
                        k = 0;
                        for (p = d.length; k < p; k++)
                            if (d[k]) try {
                                d[k].apply(null,
                                    l)
                            } catch (m) {
                                f(m)
                            } else d.splice(k, 1), k--, p--;
                        if (g) return h.currentScope = null, h;
                        e = e.$parent
                    } while (e);
                    h.currentScope = null;
                    return h
                },
                $broadcast: function(a, b) {
                    var c = this,
                        d = this,
                        e = {
                            name: a,
                            targetScope: this,
                            preventDefault: function() {
                                e.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!this.$$listenerCount[a]) return e;
                    for (var g = Ya([e], arguments, 1), h, l; c = d;) {
                        e.currentScope = c;
                        d = c.$$listeners[a] || [];
                        h = 0;
                        for (l = d.length; h < l; h++)
                            if (d[h]) try {
                                d[h].apply(null, g)
                            } catch (k) {
                                f(k)
                            } else d.splice(h, 1), h--, l--;
                        if (!(d = c.$$listenerCount[a] &&
                                c.$$childHead || c !== this && c.$$nextSibling))
                            for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent
                    }
                    e.currentScope = null;
                    return e
                }
            };
            var r = new l,
                O = r.$$asyncQueue = [],
                n = r.$$postDigestQueue = [],
                v = r.$$applyAsyncQueue = [];
            return r
        }]
    }

    function Sd() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/,
            a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(a) {
            return y(a) ? (b = a, this) : b
        };
        this.imgSrcSanitizationWhitelist = function(b) {
            return y(b) ? (a = b, this) : a
        };
        this.$get = function() {
            return function(c, d) {
                var e =
                    d ? a : b,
                    f;
                f = Ba(c).href;
                return "" === f || f.match(e) ? c : "unsafe:" + f
            }
        }
    }

    function Df(b) {
        if ("self" === b) return b;
        if (F(b)) {
            if (-1 < b.indexOf("***")) throw Ca("iwcard", b);
            b = gd(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return new RegExp("^" + b + "$")
        }
        if (ob(b)) return new RegExp("^" + b.source + "$");
        throw Ca("imatcher");
    }

    function hd(b) {
        var a = [];
        y(b) && s(b, function(b) {
            a.push(Df(b))
        });
        return a
    }

    function Te() {
        this.SCE_CONTEXTS = ma;
        var b = ["self"],
            a = [];
        this.resourceUrlWhitelist = function(a) {
            arguments.length && (b = hd(a));
            return b
        };
        this.resourceUrlBlacklist = function(b) {
            arguments.length && (a = hd(b));
            return a
        };
        this.$get = ["$injector", function(c) {
            function d(a, b) {
                return "self" === a ? Zc(b) : !!a.exec(b.href)
            }

            function e(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a
                    }
                };
                a && (b.prototype = new a);
                b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }
            var f = function(a) {
                throw Ca("unsafe");
            };
            c.has("$sanitize") && (f = c.get("$sanitize"));
            var g = e(),
                h = {};
            h[ma.HTML] = e(g);
            h[ma.CSS] = e(g);
            h[ma.URL] = e(g);
            h[ma.JS] = e(g);
            h[ma.RESOURCE_URL] = e(h[ma.URL]);
            return {
                trustAs: function(a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c) throw Ca("icontext", a, b);
                    if (null === b || b === t || "" === b) return b;
                    if ("string" !== typeof b) throw Ca("itype", a);
                    return new c(b)
                },
                getTrusted: function(c, e) {
                    if (null === e || e === t || "" === e) return e;
                    var g = h.hasOwnProperty(c) ? h[c] : null;
                    if (g && e instanceof g) return e.$$unwrapTrustedValue();
                    if (c === ma.RESOURCE_URL) {
                        var g = Ba(e.toString()),
                            p, q, u = !1;
                        p = 0;
                        for (q = b.length; p < q; p++)
                            if (d(b[p], g)) {
                                u = !0;
                                break
                            }
                        if (u)
                            for (p = 0, q = a.length; p < q; p++)
                                if (d(a[p], g)) {
                                    u = !1;
                                    break
                                }
                        if (u) return e;
                        throw Ca("insecurl", e.toString());
                    }
                    if (c === ma.HTML) return f(e);
                    throw Ca("unsafe");
                },
                valueOf: function(a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a
                }
            }
        }]
    }

    function Se() {
        var b = !0;
        this.enabled = function(a) {
            arguments.length && (b = !!a);
            return b
        };
        this.$get = ["$parse", "$sceDelegate", function(a, c) {
            if (b && 8 > Ra) throw Ca("iequirks");
            var d = qa(ma);
            d.isEnabled = function() {
                return b
            };
            d.trustAs =
                c.trustAs;
            d.getTrusted = c.getTrusted;
            d.valueOf = c.valueOf;
            b || (d.trustAs = d.getTrusted = function(a, b) {
                return b
            }, d.valueOf = oa);
            d.parseAs = function(b, c) {
                var e = a(c);
                return e.literal && e.constant ? e : a(c, function(a) {
                    return d.getTrusted(b, a)
                })
            };
            var e = d.parseAs,
                f = d.getTrusted,
                g = d.trustAs;
            s(ma, function(a, b) {
                var c = Q(b);
                d[cb("parse_as_" + c)] = function(b) {
                    return e(a, b)
                };
                d[cb("get_trusted_" + c)] = function(b) {
                    return f(a, b)
                };
                d[cb("trust_as_" + c)] = function(b) {
                    return g(a, b)
                }
            });
            return d
        }]
    }

    function Ue() {
        this.$get = ["$window", "$document",
            function(b, a) {
                var c = {},
                    d = ba((/android (\d+)/.exec(Q((b.navigator || {}).userAgent)) || [])[1]),
                    e = /Boxee/i.test((b.navigator || {}).userAgent),
                    f = a[0] || {},
                    g, h = /^(Moz|webkit|ms)(?=[A-Z])/,
                    l = f.body && f.body.style,
                    k = !1,
                    m = !1;
                if (l) {
                    for (var p in l)
                        if (k = h.exec(p)) {
                            g = k[0];
                            g = g.substr(0, 1).toUpperCase() + g.substr(1);
                            break
                        }
                    g || (g = "WebkitOpacity" in l && "webkit");
                    k = !!("transition" in l || g + "Transition" in l);
                    m = !!("animation" in l || g + "Animation" in l);
                    !d || k && m || (k = F(f.body.style.webkitTransition), m = F(f.body.style.webkitAnimation))
                }
                return {
                    history: !(!b.history ||
                        !b.history.pushState || 4 > d || e),
                    hasEvent: function(a) {
                        if ("input" === a && 11 >= Ra) return !1;
                        if (D(c[a])) {
                            var b = f.createElement("div");
                            c[a] = "on" + a in b
                        }
                        return c[a]
                    },
                    csp: ab(),
                    vendorPrefix: g,
                    transitions: k,
                    animations: m,
                    android: d
                }
            }
        ]
    }

    function We() {
        this.$get = ["$templateCache", "$http", "$q", function(b, a, c) {
            function d(e, f) {
                d.totalPendingRequests++;
                var g = a.defaults && a.defaults.transformResponse;
                x(g) ? g = g.filter(function(a) {
                    return a !== Yb
                }) : g === Yb && (g = null);
                return a.get(e, {
                    cache: b,
                    transformResponse: g
                }).then(function(a) {
                    d.totalPendingRequests--;
                    return a.data
                }, function(a) {
                    d.totalPendingRequests--;
                    if (!f) throw ja("tpload", e);
                    return c.reject(a)
                })
            }
            d.totalPendingRequests = 0;
            return d
        }]
    }

    function Xe() {
        this.$get = ["$rootScope", "$browser", "$location", function(b, a, c) {
            return {
                findBindings: function(a, b, c) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    s(a, function(a) {
                        var d = ga.element(a).data("$binding");
                        d && s(d, function(d) {
                            c ? (new RegExp("(^|\\s)" + gd(b) + "(\\s|\\||$)")).test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a)
                        })
                    });
                    return g
                },
                findModels: function(a, b,
                    c) {
                    for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
                        var l = a.querySelectorAll("[" + g[h] + "model" + (c ? "=" : "*=") + '"' + b + '"]');
                        if (l.length) return l
                    }
                },
                getLocation: function() {
                    return c.url()
                },
                setLocation: function(a) {
                    a !== c.url() && (c.url(a), b.$digest())
                },
                whenStable: function(b) {
                    a.notifyWhenNoOutstandingRequests(b)
                }
            }
        }]
    }

    function Ye() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(b, a, c, d, e) {
            function f(f, l, k) {
                var m = y(k) && !k,
                    p = (m ? d : c).defer(),
                    q = p.promise;
                l = a.defer(function() {
                    try {
                        p.resolve(f())
                    } catch (a) {
                        p.reject(a),
                            e(a)
                    } finally {
                        delete g[q.$$timeoutId]
                    }
                    m || b.$apply()
                }, l);
                q.$$timeoutId = l;
                g[l] = p;
                return q
            }
            var g = {};
            f.cancel = function(b) {
                return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
            };
            return f
        }]
    }

    function Ba(b) {
        Ra && (Z.setAttribute("href", b), b = Z.href);
        Z.setAttribute("href", b);
        return {
            href: Z.href,
            protocol: Z.protocol ? Z.protocol.replace(/:$/, "") : "",
            host: Z.host,
            search: Z.search ? Z.search.replace(/^\?/, "") : "",
            hash: Z.hash ? Z.hash.replace(/^#/, "") : "",
            hostname: Z.hostname,
            port: Z.port,
            pathname: "/" === Z.pathname.charAt(0) ? Z.pathname : "/" + Z.pathname
        }
    }

    function Zc(b) {
        b = F(b) ? Ba(b) : b;
        return b.protocol === id.protocol && b.host === id.host
    }

    function Ze() {
        this.$get = da(M)
    }

    function Dc(b) {
        function a(c, d) {
            if (H(c)) {
                var e = {};
                s(c, function(b, c) {
                    e[c] = a(c, b)
                });
                return e
            }
            return b.factory(c + "Filter", d)
        }
        this.register = a;
        this.$get = ["$injector", function(a) {
            return function(b) {
                return a.get(b + "Filter")
            }
        }];
        a("currency", jd);
        a("date", kd);
        a("filter", Ef);
        a("json", Ff);
        a("limitTo", Gf);
        a("lowercase", Hf);
        a("number",
            ld);
        a("orderBy", md);
        a("uppercase", If)
    }

    function Ef() {
        return function(b, a, c) {
            if (!x(b)) return b;
            var d;
            switch (typeof a) {
                case "function":
                    break;
                case "boolean":
                case "number":
                case "string":
                    d = !0;
                case "object":
                    a = Jf(a, c, d);
                    break;
                default:
                    return b
            }
            return b.filter(a)
        }
    }

    function Jf(b, a, c) {
        var d = H(b) && "$" in b;
        !0 === a ? a = fa : G(a) || (a = function(a, b) {
            if (H(a) || H(b)) return !1;
            a = Q("" + a);
            b = Q("" + b);
            return -1 !== a.indexOf(b)
        });
        return function(e) {
            return d && !H(e) ? Ia(e, b.$, a, !1) : Ia(e, b, a, c)
        }
    }

    function Ia(b, a, c, d, e) {
        var f = typeof b,
            g =
            typeof a;
        if ("string" === g && "!" === a.charAt(0)) return !Ia(b, a.substring(1), c, d);
        if ("array" === f) return b.some(function(b) {
            return Ia(b, a, c, d)
        });
        switch (f) {
            case "object":
                var h;
                if (d) {
                    for (h in b)
                        if ("$" !== h.charAt(0) && Ia(b[h], a, c, !0)) return !0;
                    return e ? !1 : Ia(b, a, c, !1)
                }
                if ("object" === g) {
                    for (h in a)
                        if (e = a[h], !G(e) && (f = "$" === h, !Ia(f ? b : b[h], e, c, f, f))) return !1;
                    return !0
                }
                return c(b, a);
            case "function":
                return !1;
            default:
                return c(b, a)
        }
    }

    function jd(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d, e) {
            D(d) && (d = a.CURRENCY_SYM);
            D(e) && (e = a.PATTERNS[1].maxFrac);
            return null == b ? b : nd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d)
        }
    }

    function ld(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            return null == b ? b : nd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function nd(b, a, c, d, e) {
        if (!isFinite(b) || H(b)) return "";
        var f = 0 > b;
        b = Math.abs(b);
        var g = b + "",
            h = "",
            l = [],
            k = !1;
        if (-1 !== g.indexOf("e")) {
            var m = g.match(/([\d\.]+)e(-?)(\d+)/);
            m && "-" == m[2] && m[3] > e + 1 ? b = 0 : (h = g, k = !0)
        }
        if (k) 0 < e && 1 > b && (h = b.toFixed(e), b = parseFloat(h));
        else {
            g =
                (g.split(od)[1] || "").length;
            D(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
            b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
            var g = ("" + b).split(od),
                k = g[0],
                g = g[1] || "",
                p = 0,
                q = a.lgSize,
                u = a.gSize;
            if (k.length >= q + u)
                for (p = k.length - q, m = 0; m < p; m++) 0 === (p - m) % u && 0 !== m && (h += c), h += k.charAt(m);
            for (m = p; m < k.length; m++) 0 === (k.length - m) % q && 0 !== m && (h += c), h += k.charAt(m);
            for (; g.length < e;) g += "0";
            e && "0" !== e && (h += d + g.substr(0, e))
        }
        0 === b && (f = !1);
        l.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf);
        return l.join("")
    }

    function Hb(b, a, c) {
        var d = "";
        0 > b && (d = "-", b = -b);
        for (b = "" + b; b.length < a;) b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function $(b, a, c, d) {
        c = c || 0;
        return function(e) {
            e = e["get" + b]();
            if (0 < c || e > -c) e += c;
            0 === e && -12 == c && (e = 12);
            return Hb(e, a, d)
        }
    }

    function Ib(b, a) {
        return function(c, d) {
            var e = c["get" + b](),
                f = ub(a ? "SHORT" + b : b);
            return d[f][e]
        }
    }

    function pd(b) {
        var a = (new Date(b, 0, 1)).getDay();
        return new Date(b, 0, (4 >= a ? 5 : 12) - a)
    }

    function qd(b) {
        return function(a) {
            var c = pd(a.getFullYear());
            a = +new Date(a.getFullYear(), a.getMonth(),
                a.getDate() + (4 - a.getDay())) - +c;
            a = 1 + Math.round(a / 6048E5);
            return Hb(a, b)
        }
    }

    function kd(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var f = 0,
                    g = 0,
                    h = b[8] ? a.setUTCFullYear : a.setFullYear,
                    l = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = ba(b[9] + b[10]), g = ba(b[9] + b[11]));
                h.call(a, ba(b[1]), ba(b[2]) - 1, ba(b[3]));
                f = ba(b[4] || 0) - f;
                g = ba(b[5] || 0) - g;
                h = ba(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                l.call(a, f, g, h, b)
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, e, f) {
            var g = "",
                h = [],
                l, k;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            F(c) && (c = Kf.test(c) ? ba(c) : a(c));
            V(c) && (c = new Date(c));
            if (!pa(c)) return c;
            for (; e;)(k = Lf.exec(e)) ? (h = Ya(h, k, 1), e = h.pop()) : (h.push(e), e = null);
            f && "UTC" === f && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset()));
            s(h, function(a) {
                l = Mf[a];
                g += l ? l(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function Ff() {
        return function(b, a) {
            D(a) && (a = 2);
            return $a(b, a)
        }
    }

    function Gf() {
        return function(b,
            a) {
            V(b) && (b = b.toString());
            if (!x(b) && !F(b)) return b;
            a = Infinity === Math.abs(Number(a)) ? Number(a) : ba(a);
            if (F(b)) return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : "";
            var c, d;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            if (0 < a) c = 0, d = a;
            else {
                if (!a) return [];
                c = b.length + a;
                d = b.length
            }
            return b.slice(c, d)
        }
    }

    function md(b) {
        return function(a, c, d) {
            function e(a, b) {
                return b ? function(b, c) {
                    return a(c, b)
                } : a
            }

            function f(a) {
                switch (typeof a) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }

            function g(a) {
                return null ===
                    a ? "null" : "function" === typeof a.valueOf && (a = a.valueOf(), f(a)) || "function" === typeof a.toString && (a = a.toString(), f(a)) ? a : ""
            }

            function h(a, b) {
                var c = typeof a,
                    d = typeof b;
                c === d && "object" === c && (a = g(a), b = g(b));
                return c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
            }
            if (!Ta(a)) return a;
            c = x(c) ? c : [c];
            0 === c.length && (c = ["+"]);
            c = c.map(function(a) {
                var c = !1,
                    d = a || oa;
                if (F(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0)) c = "-" == a.charAt(0), a = a.substring(1);
                    if ("" === a) return e(h, c);
                    d = b(a);
                    if (d.constant) {
                        var f =
                            d();
                        return e(function(a, b) {
                            return h(a[f], b[f])
                        }, c)
                    }
                }
                return e(function(a, b) {
                    return h(d(a), d(b))
                }, c)
            });
            return Za.call(a).sort(e(function(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e
                }
                return 0
            }, d))
        }
    }

    function Ja(b) {
        G(b) && (b = {
            link: b
        });
        b.restrict = b.restrict || "AC";
        return da(b)
    }

    function rd(b, a, c, d, e) {
        var f = this,
            g = [],
            h = f.$$parentForm = b.parent().controller("form") || Jb;
        f.$error = {};
        f.$$success = {};
        f.$pending = t;
        f.$name = e(a.name || a.ngForm || "")(c);
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        f.$submitted = !1;
        h.$addControl(f);
        f.$rollbackViewValue = function() {
            s(g, function(a) {
                a.$rollbackViewValue()
            })
        };
        f.$commitViewValue = function() {
            s(g, function(a) {
                a.$commitViewValue()
            })
        };
        f.$addControl = function(a) {
            Ma(a.$name, "input");
            g.push(a);
            a.$name && (f[a.$name] = a)
        };
        f.$$renameControl = function(a, b) {
            var c = a.$name;
            f[c] === a && delete f[c];
            f[b] = a;
            a.$name = b
        };
        f.$removeControl = function(a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            s(f.$pending, function(b, c) {
                f.$setValidity(c, null, a)
            });
            s(f.$error, function(b, c) {
                f.$setValidity(c,
                    null, a)
            });
            Xa(g, a)
        };
        sd({
            ctrl: this,
            $element: b,
            set: function(a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
            },
            unset: function(a, b, c) {
                var d = a[b];
                d && (Xa(d, c), 0 === d.length && delete a[b])
            },
            parentForm: h,
            $animate: d
        });
        f.$setDirty = function() {
            d.removeClass(b, Sa);
            d.addClass(b, Kb);
            f.$dirty = !0;
            f.$pristine = !1;
            h.$setDirty()
        };
        f.$setPristine = function() {
            d.setClass(b, Sa, Kb + " ng-submitted");
            f.$dirty = !1;
            f.$pristine = !0;
            f.$submitted = !1;
            s(g, function(a) {
                a.$setPristine()
            })
        };
        f.$setUntouched = function() {
            s(g, function(a) {
                a.$setUntouched()
            })
        };
        f.$setSubmitted = function() {
            d.addClass(b, "ng-submitted");
            f.$submitted = !0;
            h.$setSubmitted()
        }
    }

    function hc(b) {
        b.$formatters.push(function(a) {
            return b.$isEmpty(a) ? a : a.toString()
        })
    }

    function ib(b, a, c, d, e, f) {
        var g = Q(a[0].type);
        if (!e.android) {
            var h = !1;
            a.on("compositionstart", function(a) {
                h = !0
            });
            a.on("compositionend", function() {
                h = !1;
                l()
            })
        }
        var l = function(b) {
            k && (f.defer.cancel(k), k = null);
            if (!h) {
                var e = a.val();
                b = b && b.type;
                "password" === g || c.ngTrim && "false" === c.ngTrim || (e = U(e));
                (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) &&
                d.$setViewValue(e, b)
            }
        };
        if (e.hasEvent("input")) a.on("input", l);
        else {
            var k, m = function(a, b, c) {
                k || (k = f.defer(function() {
                    k = null;
                    b && b.value === c || l(a)
                }))
            };
            a.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value)
            });
            if (e.hasEvent("paste")) a.on("paste cut", m)
        }
        a.on("change", l);
        d.$render = function() {
            a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
        }
    }

    function Lb(b, a) {
        return function(c, d) {
            var e, f;
            if (pa(c)) return c;
            if (F(c)) {
                '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1,
                    c.length - 1));
                if (Nf.test(c)) return new Date(c);
                b.lastIndex = 0;
                if (e = b.exec(c)) return e.shift(), f = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1E3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, s(e, function(b, c) {
                    c < a.length && (f[a[c]] = +b)
                }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
            }
            return NaN
        }
    }

    function jb(b, a, c, d) {
        return function(e, f, g, h, l, k, m) {
            function p(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function q(a) {
                return y(a) ? pa(a) ? a : c(a) : t
            }
            td(e, f, g, h);
            ib(e, f, g, h, l, k);
            var u = h && h.$options && h.$options.timezone,
                r;
            h.$$parserName = b;
            h.$parsers.push(function(b) {
                return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, r), "UTC" === u && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b) : t
            });
            h.$formatters.push(function(a) {
                if (a && !pa(a)) throw Mb("datefmt", a);
                if (p(a)) {
                    if ((r = a) && "UTC" === u) {
                        var b = 6E4 * r.getTimezoneOffset();
                        r = new Date(r.getTime() + b)
                    }
                    return m("date")(a, d, u)
                }
                r = null;
                return ""
            });
            if (y(g.min) || g.ngMin) {
                var s;
                h.$validators.min =
                    function(a) {
                        return !p(a) || D(s) || c(a) >= s
                    };
                g.$observe("min", function(a) {
                    s = q(a);
                    h.$validate()
                })
            }
            if (y(g.max) || g.ngMax) {
                var n;
                h.$validators.max = function(a) {
                    return !p(a) || D(n) || c(a) <= n
                };
                g.$observe("max", function(a) {
                    n = q(a);
                    h.$validate()
                })
            }
        }
    }

    function td(b, a, c, d) {
        (d.$$hasNativeValidators = H(a[0].validity)) && d.$parsers.push(function(b) {
            var c = a.prop("validity") || {};
            return c.badInput && !c.typeMismatch ? t : b
        })
    }

    function ud(b, a, c, d, e) {
        if (y(d)) {
            b = b(d);
            if (!b.constant) throw T("ngModel")("constexpr", c, d);
            return b(a)
        }
        return e
    }

    function sd(b) {
        function a(a, b) {
            b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1)
        }

        function c(b, c) {
            b = b ? "-" + tc(b, "-") : "";
            a(kb + b, !0 === c);
            a(vd + b, !1 === c)
        }
        var d = b.ctrl,
            e = b.$element,
            f = {},
            g = b.set,
            h = b.unset,
            l = b.parentForm,
            k = b.$animate;
        f[vd] = !(f[kb] = e.hasClass(kb));
        d.$setValidity = function(b, e, f) {
            e === t ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), wd(d.$pending) && (d.$pending = t));
            Wa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success,
                b, f)) : (h(d.$error, b, f), h(d.$$success, b, f));
            d.$pending ? (a(xd, !0), d.$valid = d.$invalid = t, c("", null)) : (a(xd, !1), d.$valid = wd(d.$error), d.$invalid = !d.$valid, c("", d.$valid));
            e = d.$pending && d.$pending[b] ? t : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;
            c(b, e);
            l.$setValidity(b, e, d)
        }
    }

    function wd(b) {
        if (b)
            for (var a in b) return !1;
        return !0
    }

    function ic(b, a) {
        b = "ngClass" + b;
        return ["$animate", function(c) {
            function d(a, b) {
                var c = [],
                    d = 0;
                a: for (; d < a.length; d++) {
                    for (var e = a[d], m = 0; m < b.length; m++)
                        if (e == b[m]) continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                if (!x(a)) {
                    if (F(a)) return a.split(" ");
                    if (H(a)) {
                        var b = [];
                        s(a, function(a, c) {
                            a && (b = b.concat(c.split(" ")))
                        });
                        return b
                    }
                }
                return a
            }
            return {
                restrict: "AC",
                link: function(f, g, h) {
                    function l(a, b) {
                        var c = g.data("$classCounts") || {},
                            d = [];
                        s(a, function(a) {
                            if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
                        });
                        g.data("$classCounts", c);
                        return d.join(" ")
                    }

                    function k(b) {
                        if (!0 === a || f.$index % 2 === a) {
                            var k = e(b || []);
                            if (!m) {
                                var u = l(k, 1);
                                h.$addClass(u)
                            } else if (!fa(b, m)) {
                                var r = e(m),
                                    u = d(k, r),
                                    k = d(r, k),
                                    u = l(u, 1),
                                    k =
                                    l(k, -1);
                                u && u.length && c.addClass(g, u);
                                k && k.length && c.removeClass(g, k)
                            }
                        }
                        m = qa(b)
                    }
                    var m;
                    f.$watch(h[b], k, !0);
                    h.$observe("class", function(a) {
                        k(f.$eval(h[b]))
                    });
                    "ngClass" !== b && f.$watch("$index", function(c, d) {
                        var g = c & 1;
                        if (g !== (d & 1)) {
                            var k = e(f.$eval(h[b]));
                            g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g))
                        }
                    })
                }
            }
        }]
    }
    var Of = /^\/(.+)\/([a-z]*)$/,
        Q = function(b) {
            return F(b) ? b.toLowerCase() : b
        },
        rc = Object.prototype.hasOwnProperty,
        ub = function(b) {
            return F(b) ? b.toUpperCase() : b
        },
        Ra, B, ra, Za = [].slice,
        rf = [].splice,
        Pf = [].push,
        Da = Object.prototype.toString,
        Ka = T("ng"),
        ga = M.angular || (M.angular = {}),
        bb, nb = 0;
    Ra = Y.documentMode;
    C.$inject = [];
    oa.$inject = [];
    var x = Array.isArray,
        U = function(b) {
            return F(b) ? b.trim() : b
        },
        gd = function(b) {
            return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        ab = function() {
            if (y(ab.isActive_)) return ab.isActive_;
            var b = !(!Y.querySelector("[ng-csp]") && !Y.querySelector("[data-ng-csp]"));
            if (!b) try {
                new Function("")
            } catch (a) {
                b = !0
            }
            return ab.isActive_ = b
        },
        rb = ["ng-", "data-ng-", "ng:",
            "x-ng-"
        ],
        Md = /[A-Z]/g,
        uc = !1,
        Pb, na = 1,
        pb = 3,
        Qd = {
            full: "1.3.8",
            major: 1,
            minor: 3,
            dot: 8,
            codeName: "prophetic-narwhal"
        };
    R.expando = "ng339";
    var zb = R.cache = {},
        hf = 1;
    R._data = function(b) {
        return this.cache[b[this.expando]] || {}
    };
    var cf = /([\:\-\_]+(.))/g,
        df = /^moz([A-Z])/,
        Qf = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        Sb = T("jqLite"),
        gf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Rb = /<|&#?\w+;/,
        ef = /<([\w:]+)/,
        ff = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ia = {
            option: [1, '<select multiple="multiple">',
                "</select>"
            ],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ia.optgroup = ia.option;
    ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead;
    ia.th = ia.td;
    var La = R.prototype = {
            ready: function(b) {
                function a() {
                    c || (c = !0, b())
                }
                var c = !1;
                "complete" === Y.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), R(M).on("load", a))
            },
            toString: function() {
                var b = [];
                s(this, function(a) {
                    b.push("" +
                        a)
                });
                return "[" + b.join(", ") + "]"
            },
            eq: function(b) {
                return 0 <= b ? B(this[b]) : B(this[this.length + b])
            },
            length: 0,
            push: Pf,
            sort: [].sort,
            splice: [].splice
        },
        Eb = {};
    s("multiple selected checked disabled readOnly required open".split(" "), function(b) {
        Eb[Q(b)] = b
    });
    var Mc = {};
    s("input select option textarea button form details".split(" "), function(b) {
        Mc[b] = !0
    });
    var Nc = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    s({
        data: Ub,
        removeData: xb
    }, function(b, a) {
        R[a] = b
    });
    s({
        data: Ub,
        inheritedData: Db,
        scope: function(b) {
            return B.data(b, "$scope") || Db(b.parentNode || b, ["$isolateScope", "$scope"])
        },
        isolateScope: function(b) {
            return B.data(b, "$isolateScope") || B.data(b, "$isolateScopeNoTemplate")
        },
        controller: Ic,
        injector: function(b) {
            return Db(b, "$injector")
        },
        removeAttr: function(b, a) {
            b.removeAttribute(a)
        },
        hasClass: Ab,
        css: function(b, a, c) {
            a = cb(a);
            if (y(c)) b.style[a] = c;
            else return b.style[a]
        },
        attr: function(b, a, c) {
            var d = Q(a);
            if (Eb[d])
                if (y(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
                else return b[a] || (b.attributes.getNamedItem(a) || C).specified ? d : t;
            else if (y(c)) b.setAttribute(a, c);
            else if (b.getAttribute) return b = b.getAttribute(a, 2), null === b ? t : b
        },
        prop: function(b, a, c) {
            if (y(c)) b[a] = c;
            else return b[a]
        },
        text: function() {
            function b(a, b) {
                if (D(b)) {
                    var d = a.nodeType;
                    return d === na || d === pb ? a.textContent : ""
                }
                a.textContent = b
            }
            b.$dv = "";
            return b
        }(),
        val: function(b, a) {
            if (D(a)) {
                if (b.multiple && "select" === ua(b)) {
                    var c = [];
                    s(b.options, function(a) {
                        a.selected && c.push(a.value || a.text)
                    });
                    return 0 === c.length ?
                        null : c
                }
                return b.value
            }
            b.value = a
        },
        html: function(b, a) {
            if (D(a)) return b.innerHTML;
            wb(b, !0);
            b.innerHTML = a
        },
        empty: Jc
    }, function(b, a) {
        R.prototype[a] = function(a, d) {
            var e, f, g = this.length;
            if (b !== Jc && (2 == b.length && b !== Ab && b !== Ic ? a : d) === t) {
                if (H(a)) {
                    for (e = 0; e < g; e++)
                        if (b === Ub) b(this[e], a);
                        else
                            for (f in a) b(this[e], f, a[f]);
                    return this
                }
                e = b.$dv;
                g = e === t ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var h = b(this[f], a, d);
                    e = e ? e + h : h
                }
                return e
            }
            for (e = 0; e < g; e++) b(this[e], a, d);
            return this
        }
    });
    s({
        removeData: xb,
        on: function a(c, d, e, f) {
            if (y(f)) throw Sb("onargs");
            if (Ec(c)) {
                var g = yb(c, !0);
                f = g.events;
                var h = g.handle;
                h || (h = g.handle = lf(c, f));
                for (var g = 0 <= d.indexOf(" ") ? d.split(" ") : [d], l = g.length; l--;) {
                    d = g[l];
                    var k = f[d];
                    k || (f[d] = [], "mouseenter" === d || "mouseleave" === d ? a(c, Qf[d], function(a) {
                        var c = a.relatedTarget;
                        c && (c === this || this.contains(c)) || h(a, d)
                    }) : "$destroy" !== d && c.addEventListener(d, h, !1), k = f[d]);
                    k.push(e)
                }
            }
        },
        off: Hc,
        one: function(a, c, d) {
            a = B(a);
            a.on(c, function f() {
                a.off(c, d);
                a.off(c, f)
            });
            a.on(c, d)
        },
        replaceWith: function(a, c) {
            var d, e = a.parentNode;
            wb(a);
            s(new R(c),
                function(c) {
                    d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                    d = c
                })
        },
        children: function(a) {
            var c = [];
            s(a.childNodes, function(a) {
                a.nodeType === na && c.push(a)
            });
            return c
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || []
        },
        append: function(a, c) {
            var d = a.nodeType;
            if (d === na || 11 === d) {
                c = new R(c);
                for (var d = 0, e = c.length; d < e; d++) a.appendChild(c[d])
            }
        },
        prepend: function(a, c) {
            if (a.nodeType === na) {
                var d = a.firstChild;
                s(new R(c), function(c) {
                    a.insertBefore(c, d)
                })
            }
        },
        wrap: function(a, c) {
            c = B(c).eq(0).clone()[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a)
        },
        remove: Kc,
        detach: function(a) {
            Kc(a, !0)
        },
        after: function(a, c) {
            var d = a,
                e = a.parentNode;
            c = new R(c);
            for (var f = 0, g = c.length; f < g; f++) {
                var h = c[f];
                e.insertBefore(h, d.nextSibling);
                d = h
            }
        },
        addClass: Cb,
        removeClass: Bb,
        toggleClass: function(a, c, d) {
            c && s(c.split(" "), function(c) {
                var f = d;
                D(f) && (f = !Ab(a, c));
                (f ? Cb : Bb)(a, c)
            })
        },
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        next: function(a) {
            return a.nextElementSibling
        },
        find: function(a, c) {
            return a.getElementsByTagName ?
                a.getElementsByTagName(c) : []
        },
        clone: Tb,
        triggerHandler: function(a, c, d) {
            var e, f, g = c.type || c,
                h = yb(a);
            if (h = (h = h && h.events) && h[g]) e = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return !0 === this.immediatePropagationStopped
                },
                stopPropagation: C,
                type: g,
                target: a
            }, c.type && (e = z(e, c)), c = qa(h), f = d ? [e].concat(d) : [e], s(c, function(c) {
                e.isImmediatePropagationStopped() ||
                    c.apply(a, f)
            })
        }
    }, function(a, c) {
        R.prototype[c] = function(c, e, f) {
            for (var g, h = 0, l = this.length; h < l; h++) D(g) ? (g = a(this[h], c, e, f), y(g) && (g = B(g))) : Gc(g, a(this[h], c, e, f));
            return y(g) ? g : this
        };
        R.prototype.bind = R.prototype.on;
        R.prototype.unbind = R.prototype.off
    });
    db.prototype = {
        put: function(a, c) {
            this[Na(a, this.nextUid)] = c
        },
        get: function(a) {
            return this[Na(a, this.nextUid)]
        },
        remove: function(a) {
            var c = this[a = Na(a, this.nextUid)];
            delete this[a];
            return c
        }
    };
    var Pc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        nf = /,/,
        of = /^\s*(_?)(\S+?)\1\s*$/,
        Oc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
        Ga = T("$injector");
    Ob.$$annotate = Vb;
    var Rf = T("$animate"),
        Ce = ["$provide", function(a) {
            this.$$selectors = {};
            this.register = function(c, d) {
                var e = c + "-animation";
                if (c && "." != c.charAt(0)) throw Rf("notcsel", c);
                this.$$selectors[c.substr(1)] = e;
                a.factory(e, d)
            };
            this.classNameFilter = function(a) {
                1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
                return this.$$classNameFilter
            };
            this.$get = ["$$q", "$$asyncCallback", "$rootScope", function(a, d, e) {
                function f(d) {
                    var f,
                        g = a.defer();
                    g.promise.$$cancelFn = function() {
                        f && f()
                    };
                    e.$$postDigest(function() {
                        f = d(function() {
                            g.resolve()
                        })
                    });
                    return g.promise
                }

                function g(a, c) {
                    var d = [],
                        e = [],
                        f = ha();
                    s((a.attr("class") || "").split(/\s+/), function(a) {
                        f[a] = !0
                    });
                    s(c, function(a, c) {
                        var g = f[c];
                        !1 === a && g ? e.push(c) : !0 !== a || g || d.push(c)
                    });
                    return 0 < d.length + e.length && [d.length ? d : null, e.length ? e : null]
                }

                function h(a, c, d) {
                    for (var e = 0, f = c.length; e < f; ++e) a[c[e]] = d
                }

                function l() {
                    m || (m = a.defer(), d(function() {
                        m.resolve();
                        m = null
                    }));
                    return m.promise
                }

                function k(a,
                    c) {
                    if (ga.isObject(c)) {
                        var d = z(c.from || {}, c.to || {});
                        a.css(d)
                    }
                }
                var m;
                return {
                    animate: function(a, c, d) {
                        k(a, {
                            from: c,
                            to: d
                        });
                        return l()
                    },
                    enter: function(a, c, d, e) {
                        k(a, e);
                        d ? d.after(a) : c.prepend(a);
                        return l()
                    },
                    leave: function(a, c) {
                        a.remove();
                        return l()
                    },
                    move: function(a, c, d, e) {
                        return this.enter(a, c, d, e)
                    },
                    addClass: function(a, c, d) {
                        return this.setClass(a, c, [], d)
                    },
                    $$addClassImmediately: function(a, c, d) {
                        a = B(a);
                        c = F(c) ? c : x(c) ? c.join(" ") : "";
                        s(a, function(a) {
                            Cb(a, c)
                        });
                        k(a, d);
                        return l()
                    },
                    removeClass: function(a, c, d) {
                        return this.setClass(a, [], c, d)
                    },
                    $$removeClassImmediately: function(a, c, d) {
                        a = B(a);
                        c = F(c) ? c : x(c) ? c.join(" ") : "";
                        s(a, function(a) {
                            Bb(a, c)
                        });
                        k(a, d);
                        return l()
                    },
                    setClass: function(a, c, d, e) {
                        var k = this,
                            l = !1;
                        a = B(a);
                        var m = a.data("$$animateClasses");
                        m ? e && m.options && (m.options = ga.extend(m.options || {}, e)) : (m = {
                            classes: {},
                            options: e
                        }, l = !0);
                        e = m.classes;
                        c = x(c) ? c : c.split(" ");
                        d = x(d) ? d : d.split(" ");
                        h(e, c, !0);
                        h(e, d, !1);
                        l && (m.promise = f(function(c) {
                            var d = a.data("$$animateClasses");
                            a.removeData("$$animateClasses");
                            if (d) {
                                var e = g(a, d.classes);
                                e &&
                                    k.$$setClassImmediately(a, e[0], e[1], d.options)
                            }
                            c()
                        }), a.data("$$animateClasses", m));
                        return m.promise
                    },
                    $$setClassImmediately: function(a, c, d, e) {
                        c && this.$$addClassImmediately(a, c);
                        d && this.$$removeClassImmediately(a, d);
                        k(a, e);
                        return l()
                    },
                    enabled: C,
                    cancel: C
                }
            }]
        }],
        ja = T("$compile");
    wc.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Rc = /^((?:x|data)[\:\-_])/i,
        Vc = "application/json",
        Zb = {
            "Content-Type": Vc + ";charset=utf-8"
        },
        tf = /^\[|^\{(?!\{)/,
        uf = {
            "[": /]$/,
            "{": /}$/
        },
        sf = /^\)\]\}',?\n/,
        $b = T("$interpolate"),
        Sf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        xf = {
            http: 80,
            https: 443,
            ftp: 21
        },
        Fb = T("$location"),
        Tf = {
            $$html5: !1,
            $$replace: !1,
            absUrl: Gb("$$absUrl"),
            url: function(a) {
                if (D(a)) return this.$$url;
                var c = Sf.exec(a);
                (c[1] || "" === a) && this.path(decodeURIComponent(c[1]));
                (c[2] || c[1] || "" === a) && this.search(c[3] || "");
                this.hash(c[5] || "");
                return this
            },
            protocol: Gb("$$protocol"),
            host: Gb("$$host"),
            port: Gb("$$port"),
            path: dd("$$path", function(a) {
                a = null !== a ? a.toString() : "";
                return "/" == a.charAt(0) ? a : "/" + a
            }),
            search: function(a, c) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (F(a) || V(a)) a = a.toString(), this.$$search = qc(a);
                        else if (H(a)) a = Ea(a, {}), s(a, function(c, e) {
                            null == c && delete a[e]
                        }), this.$$search = a;
                        else throw Fb("isrcharg");
                        break;
                    default:
                        D(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
                }
                this.$$compose();
                return this
            },
            hash: dd("$$hash", function(a) {
                return null !== a ? a.toString() : ""
            }),
            replace: function() {
                this.$$replace = !0;
                return this
            }
        };
    s([cd, dc, cc], function(a) {
        a.prototype = Object.create(Tf);
        a.prototype.state = function(c) {
            if (!arguments.length) return this.$$state;
            if (a !== cc || !this.$$html5) throw Fb("nostate");
            this.$$state = D(c) ? null : c;
            return this
        }
    });
    var la = T("$parse"),
        Uf = Function.prototype.call,
        Vf = Function.prototype.apply,
        Wf = Function.prototype.bind,
        lb = ha();
    s({
        "null": function() {
            return null
        },
        "true": function() {
            return !0
        },
        "false": function() {
            return !1
        },
        undefined: function() {}
    }, function(a, c) {
        a.constant = a.literal = a.sharedGetter = !0;
        lb[c] = a
    });
    lb["this"] = function(a) {
        return a
    };
    lb["this"].sharedGetter = !0;
    var mb = z(ha(), {
            "+": function(a, c, d, e) {
                d = d(a, c);
                e = e(a, c);
                return y(d) ? y(e) ?
                    d + e : d : y(e) ? e : t
            },
            "-": function(a, c, d, e) {
                d = d(a, c);
                e = e(a, c);
                return (y(d) ? d : 0) - (y(e) ? e : 0)
            },
            "*": function(a, c, d, e) {
                return d(a, c) * e(a, c)
            },
            "/": function(a, c, d, e) {
                return d(a, c) / e(a, c)
            },
            "%": function(a, c, d, e) {
                return d(a, c) % e(a, c)
            },
            "===": function(a, c, d, e) {
                return d(a, c) === e(a, c)
            },
            "!==": function(a, c, d, e) {
                return d(a, c) !== e(a, c)
            },
            "==": function(a, c, d, e) {
                return d(a, c) == e(a, c)
            },
            "!=": function(a, c, d, e) {
                return d(a, c) != e(a, c)
            },
            "<": function(a, c, d, e) {
                return d(a, c) < e(a, c)
            },
            ">": function(a, c, d, e) {
                return d(a, c) > e(a, c)
            },
            "<=": function(a,
                c, d, e) {
                return d(a, c) <= e(a, c)
            },
            ">=": function(a, c, d, e) {
                return d(a, c) >= e(a, c)
            },
            "&&": function(a, c, d, e) {
                return d(a, c) && e(a, c)
            },
            "||": function(a, c, d, e) {
                return d(a, c) || e(a, c)
            },
            "!": function(a, c, d) {
                return !d(a, c)
            },
            "=": !0,
            "|": !0
        }),
        Xf = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        },
        gc = function(a) {
            this.options = a
        };
    gc.prototype = {
        constructor: gc,
        lex: function(a) {
            this.text = a;
            this.index = 0;
            for (this.tokens = []; this.index < this.text.length;)
                if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);
                else if (this.isNumber(a) ||
                "." === a && this.isNumber(this.peek())) this.readNumber();
            else if (this.isIdent(a)) this.readIdent();
            else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: a
            }), this.index++;
            else if (this.isWhitespace(a)) this.index++;
            else {
                var c = a + this.peek(),
                    d = c + this.peek(2),
                    e = mb[c],
                    f = mb[d];
                mb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        },
        is: function(a, c) {
            return -1 !==
                c.indexOf(a)
        },
        peek: function(a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        },
        isNumber: function(a) {
            return "0" <= a && "9" >= a && "string" === typeof a
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        },
        isIdent: function(a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a)
        },
        throwError: function(a, c, d) {
            d = d || this.index;
            c = y(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c,
                d) + "]" : " " + d;
            throw la("lexerr", a, c, this.text);
        },
        readNumber: function() {
            for (var a = "", c = this.index; this.index < this.text.length;) {
                var d = Q(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d)) a += d;
                else {
                    var e = this.peek();
                    if ("e" == d && this.isExpOperator(e)) a += d;
                    else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) a += d;
                    else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1)) break;
                    else this.throwError("Invalid exponent")
                }
                this.index++
            }
            this.tokens.push({
                index: c,
                text: a,
                constant: !0,
                value: Number(a)
            })
        },
        readIdent: function() {
            for (var a = this.index; this.index < this.text.length;) {
                var c = this.text.charAt(this.index);
                if (!this.isIdent(c) && !this.isNumber(c)) break;
                this.index++
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            })
        },
        readString: function(a) {
            var c = this.index;
            this.index++;
            for (var d = "", e = a, f = !1; this.index < this.text.length;) {
                var g = this.text.charAt(this.index),
                    e = e + g;
                if (f) "u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) ||
                    this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Xf[g] || g, f = !1;
                else if ("\\" === g) f = !0;
                else {
                    if (g === a) {
                        this.index++;
                        this.tokens.push({
                            index: c,
                            text: e,
                            constant: !0,
                            value: d
                        });
                        return
                    }
                    d += g
                }
                this.index++
            }
            this.throwError("Unterminated quote", c)
        }
    };
    var hb = function(a, c, d) {
        this.lexer = a;
        this.$filter = c;
        this.options = d
    };
    hb.ZERO = z(function() {
        return 0
    }, {
        sharedGetter: !0,
        constant: !0
    });
    hb.prototype = {
        constructor: hb,
        parse: function(a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.statements();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            a.literal = !!a.literal;
            a.constant = !!a.constant;
            return a
        },
        primary: function() {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in lb ? a = lb[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression",
                this.peek());
            for (var c, d; c = this.expect("(", "[", ".");) "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a
        },
        throwError: function(a, c) {
            throw la("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw la("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function(a, c, d, e) {
            return this.peekAhead(0, a, c, d, e)
        },
        peekAhead: function(a,
            c, d, e, f) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var g = a.text;
                if (g === c || g === d || g === e || g === f || !(c || d || e || f)) return a
            }
            return !1
        },
        expect: function(a, c, d, e) {
            return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1
        },
        consume: function(a) {
            if (0 === this.tokens.length) throw la("ueoe", this.text);
            var c = this.expect(a);
            c || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
            return c
        },
        unaryFn: function(a, c) {
            var d = mb[a];
            return z(function(a, f) {
                return d(a, f, c)
            }, {
                constant: c.constant,
                inputs: [c]
            })
        },
        binaryFn: function(a,
            c, d, e) {
            var f = mb[c];
            return z(function(c, e) {
                return f(c, e, a, d)
            }, {
                constant: a.constant && d.constant,
                inputs: !e && [a, d]
            })
        },
        identifier: function() {
            for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");) a += this.consume().text + this.consume().text;
            return zf(a, this.options, this.text)
        },
        constant: function() {
            var a = this.consume().value;
            return z(function() {
                return a
            }, {
                constant: !0,
                literal: !0
            })
        },
        statements: function() {
            for (var a = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")",
                        ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function(c, d) {
                    for (var e, f = 0, g = a.length; f < g; f++) e = a[f](c, d);
                    return e
                }
        },
        filterChain: function() {
            for (var a = this.expression(); this.expect("|");) a = this.filter(a);
            return a
        },
        filter: function(a) {
            var c = this.$filter(this.consume().text),
                d, e;
            if (this.peek(":"))
                for (d = [], e = []; this.expect(":");) d.push(this.expression());
            var f = [a].concat(d || []);
            return z(function(f, h) {
                var l = a(f, h);
                if (e) {
                    e[0] = l;
                    for (l = d.length; l--;) e[l + 1] = d[l](f, h);
                    return c.apply(t,
                        e)
                }
                return c(l)
            }, {
                constant: !c.$stateful && f.every(ec),
                inputs: !c.$stateful && f
            })
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var a = this.ternary(),
                c, d;
            return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), z(function(d, f) {
                return a.assign(d, c(d, f), f)
            }, {
                inputs: [a, c]
            })) : a
        },
        ternary: function() {
            var a = this.logicalOR(),
                c;
            if (this.expect("?") && (c = this.assignment(), this.consume(":"))) {
                var d =
                    this.assignment();
                return z(function(e, f) {
                    return a(e, f) ? c(e, f) : d(e, f)
                }, {
                    constant: a.constant && c.constant && d.constant
                })
            }
            return a
        },
        logicalOR: function() {
            for (var a = this.logicalAND(), c; c = this.expect("||");) a = this.binaryFn(a, c.text, this.logicalAND(), !0);
            return a
        },
        logicalAND: function() {
            for (var a = this.equality(), c; c = this.expect("&&");) a = this.binaryFn(a, c.text, this.equality(), !0);
            return a
        },
        equality: function() {
            for (var a = this.relational(), c; c = this.expect("==", "!=", "===", "!==");) a = this.binaryFn(a, c.text, this.relational());
            return a
        },
        relational: function() {
            for (var a = this.additive(), c; c = this.expect("<", ">", "<=", ">=");) a = this.binaryFn(a, c.text, this.additive());
            return a
        },
        additive: function() {
            for (var a = this.multiplicative(), c; c = this.expect("+", "-");) a = this.binaryFn(a, c.text, this.multiplicative());
            return a
        },
        multiplicative: function() {
            for (var a = this.unary(), c; c = this.expect("*", "/", "%");) a = this.binaryFn(a, c.text, this.unary());
            return a
        },
        unary: function() {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(hb.ZERO,
                a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary()
        },
        fieldAccess: function(a) {
            var c = this.identifier();
            return z(function(d, e, f) {
                d = f || a(d, e);
                return null == d ? t : c(d)
            }, {
                assign: function(d, e, f) {
                    (f = a(d, f)) || a.assign(d, f = {});
                    return c.assign(f, e)
                }
            })
        },
        objectIndex: function(a) {
            var c = this.text,
                d = this.expression();
            this.consume("]");
            return z(function(e, f) {
                var g = a(e, f),
                    h = d(e, f);
                sa(h, c);
                return g ? ta(g[h], c) : t
            }, {
                assign: function(e, f, g) {
                    var h = sa(d(e, g), c);
                    (g = ta(a(e, g), c)) || a.assign(e,
                        g = {});
                    return g[h] = f
                }
            })
        },
        functionCall: function(a, c) {
            var d = [];
            if (")" !== this.peekToken().text) {
                do d.push(this.expression()); while (this.expect(","))
            }
            this.consume(")");
            var e = this.text,
                f = d.length ? [] : null;
            return function(g, h) {
                var l = c ? c(g, h) : y(c) ? t : g,
                    k = a(g, h, l) || C;
                if (f)
                    for (var m = d.length; m--;) f[m] = ta(d[m](g, h), e);
                ta(l, e);
                if (k) {
                    if (k.constructor === k) throw la("isecfn", e);
                    if (k === Uf || k === Vf || k === Wf) throw la("isecff", e);
                }
                l = k.apply ? k.apply(l, f) : k(f[0], f[1], f[2], f[3], f[4]);
                return ta(l, e)
            }
        },
        arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]")) break;
                    a.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("]");
            return z(function(c, d) {
                for (var e = [], f = 0, g = a.length; f < g; f++) e.push(a[f](c, d));
                return e
            }, {
                literal: !0,
                constant: a.every(ec),
                inputs: a
            })
        },
        object: function() {
            var a = [],
                c = [];
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}")) break;
                    var d = this.consume();
                    d.constant ? a.push(d.value) : d.identifier ? a.push(d.text) : this.throwError("invalid key", d);
                    this.consume(":");
                    c.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("}");
            return z(function(d, f) {
                for (var g = {}, h = 0, l = c.length; h < l; h++) g[a[h]] = c[h](d, f);
                return g
            }, {
                literal: !0,
                constant: c.every(ec),
                inputs: c
            })
        }
    };
    var Bf = ha(),
        Af = ha(),
        Cf = Object.prototype.valueOf,
        Ca = T("$sce"),
        ma = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        ja = T("$compile"),
        Z = Y.createElement("a"),
        id = Ba(M.location.href);
    Dc.$inject = ["$provide"];
    jd.$inject = ["$locale"];
    ld.$inject = ["$locale"];
    var od = ".",
        Mf = {
            yyyy: $("FullYear", 4),
            yy: $("FullYear", 2, 0, !0),
            y: $("FullYear", 1),
            MMMM: Ib("Month"),
            MMM: Ib("Month", !0),
            MM: $("Month", 2, 1),
            M: $("Month", 1, 1),
            dd: $("Date", 2),
            d: $("Date", 1),
            HH: $("Hours", 2),
            H: $("Hours", 1),
            hh: $("Hours", 2, -12),
            h: $("Hours", 1, -12),
            mm: $("Minutes", 2),
            m: $("Minutes", 1),
            ss: $("Seconds", 2),
            s: $("Seconds", 1),
            sss: $("Milliseconds", 3),
            EEEE: Ib("Day"),
            EEE: Ib("Day", !0),
            a: function(a, c) {
                return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
            },
            Z: function(a) {
                a = -1 * a.getTimezoneOffset();
                return a = (0 <= a ? "+" : "") + (Hb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Hb(Math.abs(a % 60), 2))
            },
            ww: qd(2),
            w: qd(1)
        },
        Lf = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
        Kf = /^\-?\d+$/;
    kd.$inject = ["$locale"];
    var Hf = da(Q),
        If = da(ub);
    md.$inject = ["$parse"];
    var Td = da({
            restrict: "E",
            compile: function(a, c) {
                if (!c.href && !c.xlinkHref && !c.name) return function(a, c) {
                    var f = "[object SVGAnimatedString]" === Da.call(c.prop("href")) ? "xlink:href" : "href";
                    c.on("click", function(a) {
                        c.attr(f) || a.preventDefault()
                    })
                }
            }
        }),
        vb = {};
    s(Eb, function(a, c) {
        if ("multiple" != a) {
            var d = ya("ng-" + c);
            vb[d] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: function(a, f, g) {
                        a.$watch(g[d], function(a) {
                            g.$set(c, !!a)
                        })
                    }
                }
            }
        }
    });
    s(Nc, function(a, c) {
        vb[c] = function() {
            return {
                priority: 100,
                link: function(a, e, f) {
                    if ("ngPattern" === c && "/" == f.ngPattern.charAt(0) && (e = f.ngPattern.match(Of))) {
                        f.$set("ngPattern", new RegExp(e[1], e[2]));
                        return
                    }
                    a.$watch(f[c], function(a) {
                        f.$set(c, a)
                    })
                }
            }
        }
    });
    s(["src", "srcset", "href"], function(a) {
        var c = ya("ng-" + a);
        vb[c] = function() {
            return {
                priority: 99,
                link: function(d, e, f) {
                    var g = a,
                        h = a;
                    "href" === a && "[object SVGAnimatedString]" === Da.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href", g = null);
                    f.$observe(c, function(c) {
                        c ?
                            (f.$set(h, c), Ra && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null)
                    })
                }
            }
        }
    });
    var Jb = {
        $addControl: C,
        $$renameControl: function(a, c) {
            a.$name = c
        },
        $removeControl: C,
        $setValidity: C,
        $setDirty: C,
        $setPristine: C,
        $setSubmitted: C
    };
    rd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var yd = function(a) {
            return ["$timeout", function(c) {
                return {
                    name: "form",
                    restrict: a ? "EAC" : "E",
                    controller: rd,
                    compile: function(a) {
                        a.addClass(Sa).addClass(kb);
                        return {
                            pre: function(a, d, g, h) {
                                if (!("action" in g)) {
                                    var l = function(c) {
                                        a.$apply(function() {
                                            h.$commitViewValue();
                                            h.$setSubmitted()
                                        });
                                        c.preventDefault()
                                    };
                                    d[0].addEventListener("submit", l, !1);
                                    d.on("$destroy", function() {
                                        c(function() {
                                            d[0].removeEventListener("submit", l, !1)
                                        }, 0, !1)
                                    })
                                }
                                var k = h.$$parentForm,
                                    m = h.$name;
                                m && (gb(a, m, h, m), g.$observe(g.name ? "name" : "ngForm", function(c) {
                                    m !== c && (gb(a, m, t, m), m = c, gb(a, m, h, m), k.$$renameControl(h, m))
                                }));
                                d.on("$destroy", function() {
                                    k.$removeControl(h);
                                    m && gb(a, m, t, m);
                                    z(h, Jb)
                                })
                            }
                        }
                    }
                }
            }]
        },
        Ud = yd(),
        ge = yd(!0),
        Nf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
        Yf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        Zf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        $f = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        zd = /^(\d{4})-(\d{2})-(\d{2})$/,
        Ad = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        jc = /^(\d{4})-W(\d\d)$/,
        Bd = /^(\d{4})-(\d\d)$/,
        Cd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        ag = /(\s+|^)default(\s+|$)/,
        Mb = new T("ngModel"),
        Dd = {
            text: function(a, c, d, e, f, g) {
                ib(a, c, d, e, f, g);
                hc(e)
            },
            date: jb("date", zd, Lb(zd, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": jb("datetimelocal",
                Ad, Lb(Ad, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: jb("time", Cd, Lb(Cd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: jb("week", jc, function(a, c) {
                if (pa(a)) return a;
                if (F(a)) {
                    jc.lastIndex = 0;
                    var d = jc.exec(a);
                    if (d) {
                        var e = +d[1],
                            f = +d[2],
                            g = d = 0,
                            h = 0,
                            l = 0,
                            k = pd(e),
                            f = 7 * (f - 1);
                        c && (d = c.getHours(), g = c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds());
                        return new Date(e, 0, k.getDate() + f, d, g, h, l)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: jb("month", Bd, Lb(Bd, ["yyyy", "MM"]), "yyyy-MM"),
            number: function(a,
                c, d, e, f, g) {
                td(a, c, d, e);
                ib(a, c, d, e, f, g);
                e.$$parserName = "number";
                e.$parsers.push(function(a) {
                    return e.$isEmpty(a) ? null : $f.test(a) ? parseFloat(a) : t
                });
                e.$formatters.push(function(a) {
                    if (!e.$isEmpty(a)) {
                        if (!V(a)) throw Mb("numfmt", a);
                        a = a.toString()
                    }
                    return a
                });
                if (d.min || d.ngMin) {
                    var h;
                    e.$validators.min = function(a) {
                        return e.$isEmpty(a) || D(h) || a >= h
                    };
                    d.$observe("min", function(a) {
                        y(a) && !V(a) && (a = parseFloat(a, 10));
                        h = V(a) && !isNaN(a) ? a : t;
                        e.$validate()
                    })
                }
                if (d.max || d.ngMax) {
                    var l;
                    e.$validators.max = function(a) {
                        return e.$isEmpty(a) ||
                            D(l) || a <= l
                    };
                    d.$observe("max", function(a) {
                        y(a) && !V(a) && (a = parseFloat(a, 10));
                        l = V(a) && !isNaN(a) ? a : t;
                        e.$validate()
                    })
                }
            },
            url: function(a, c, d, e, f, g) {
                ib(a, c, d, e, f, g);
                hc(e);
                e.$$parserName = "url";
                e.$validators.url = function(a, c) {
                    var d = a || c;
                    return e.$isEmpty(d) || Yf.test(d)
                }
            },
            email: function(a, c, d, e, f, g) {
                ib(a, c, d, e, f, g);
                hc(e);
                e.$$parserName = "email";
                e.$validators.email = function(a, c) {
                    var d = a || c;
                    return e.$isEmpty(d) || Zf.test(d)
                }
            },
            radio: function(a, c, d, e) {
                D(d.name) && c.attr("name", ++nb);
                c.on("click", function(a) {
                    c[0].checked &&
                        e.$setViewValue(d.value, a && a.type)
                });
                e.$render = function() {
                    c[0].checked = d.value == e.$viewValue
                };
                d.$observe("value", e.$render)
            },
            checkbox: function(a, c, d, e, f, g, h, l) {
                var k = ud(l, a, "ngTrueValue", d.ngTrueValue, !0),
                    m = ud(l, a, "ngFalseValue", d.ngFalseValue, !1);
                c.on("click", function(a) {
                    e.$setViewValue(c[0].checked, a && a.type)
                });
                e.$render = function() {
                    c[0].checked = e.$viewValue
                };
                e.$isEmpty = function(a) {
                    return !1 === a
                };
                e.$formatters.push(function(a) {
                    return fa(a, k)
                });
                e.$parsers.push(function(a) {
                    return a ? k : m
                })
            },
            hidden: C,
            button: C,
            submit: C,
            reset: C,
            file: C
        },
        xc = ["$browser", "$sniffer", "$filter", "$parse", function(a, c, d, e) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(f, g, h, l) {
                        l[0] && (Dd[Q(h.type)] || Dd.text)(f, g, h, l[0], c, a, d, e)
                    }
                }
            }
        }],
        kb = "ng-valid",
        vd = "ng-invalid",
        Sa = "ng-pristine",
        Kb = "ng-dirty",
        xd = "ng-pending",
        bg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, c, d, e, f, g, h, l, k, m) {
            this.$modelValue = this.$viewValue = Number.NaN;
            this.$$rawModelValue =
                t;
            this.$validators = {};
            this.$asyncValidators = {};
            this.$parsers = [];
            this.$formatters = [];
            this.$viewChangeListeners = [];
            this.$untouched = !0;
            this.$touched = !1;
            this.$pristine = !0;
            this.$dirty = !1;
            this.$valid = !0;
            this.$invalid = !1;
            this.$error = {};
            this.$$success = {};
            this.$pending = t;
            this.$name = m(d.name || "", !1)(a);
            var p = f(d.ngModel),
                q = p.assign,
                u = p,
                r = q,
                O = null,
                n = this;
            this.$$setOptions = function(a) {
                if ((n.$options = a) && a.getterSetter) {
                    var c = f(d.ngModel + "()"),
                        g = f(d.ngModel + "($$$p)");
                    u = function(a) {
                        var d = p(a);
                        G(d) && (d = c(a));
                        return d
                    };
                    r = function(a, c) {
                        G(p(a)) ? g(a, {
                            $$$p: n.$modelValue
                        }) : q(a, n.$modelValue)
                    }
                } else if (!p.assign) throw Mb("nonassign", d.ngModel, va(e));
            };
            this.$render = C;
            this.$isEmpty = function(a) {
                return D(a) || "" === a || null === a || a !== a
            };
            var v = e.inheritedData("$formController") || Jb,
                w = 0;
            sd({
                ctrl: this,
                $element: e,
                set: function(a, c) {
                    a[c] = !0
                },
                unset: function(a, c) {
                    delete a[c]
                },
                parentForm: v,
                $animate: g
            });
            this.$setPristine = function() {
                n.$dirty = !1;
                n.$pristine = !0;
                g.removeClass(e, Kb);
                g.addClass(e, Sa)
            };
            this.$setDirty = function() {
                n.$dirty = !0;
                n.$pristine = !1;
                g.removeClass(e, Sa);
                g.addClass(e, Kb);
                v.$setDirty()
            };
            this.$setUntouched = function() {
                n.$touched = !1;
                n.$untouched = !0;
                g.setClass(e, "ng-untouched", "ng-touched")
            };
            this.$setTouched = function() {
                n.$touched = !0;
                n.$untouched = !1;
                g.setClass(e, "ng-touched", "ng-untouched")
            };
            this.$rollbackViewValue = function() {
                h.cancel(O);
                n.$viewValue = n.$$lastCommittedViewValue;
                n.$render()
            };
            this.$validate = function() {
                if (!V(n.$modelValue) || !isNaN(n.$modelValue)) {
                    var a = n.$$rawModelValue,
                        c = n.$valid,
                        d = n.$modelValue,
                        e = n.$options && n.$options.allowInvalid;
                    n.$$runValidators(n.$error[n.$$parserName || "parse"] ? !1 : t, a, n.$$lastCommittedViewValue, function(f) {
                        e || c === f || (n.$modelValue = f ? a : t, n.$modelValue !== d && n.$$writeModelToScope())
                    })
                }
            };
            this.$$runValidators = function(a, c, d, e) {
                function f() {
                    var a = !0;
                    s(n.$validators, function(e, f) {
                        var g = e(c, d);
                        a = a && g;
                        h(f, g)
                    });
                    return a ? !0 : (s(n.$asyncValidators, function(a, c) {
                        h(c, null)
                    }), !1)
                }

                function g() {
                    var a = [],
                        e = !0;
                    s(n.$asyncValidators, function(f, g) {
                        var l = f(c, d);
                        if (!l || !G(l.then)) throw Mb("$asyncValidators", l);
                        h(g, t);
                        a.push(l.then(function() {
                            h(g, !0)
                        }, function(a) {
                            e = !1;
                            h(g, !1)
                        }))
                    });
                    a.length ? k.all(a).then(function() {
                        l(e)
                    }, C) : l(!0)
                }

                function h(a, c) {
                    m === w && n.$setValidity(a, c)
                }

                function l(a) {
                    m === w && e(a)
                }
                w++;
                var m = w;
                (function(a) {
                    var c = n.$$parserName || "parse";
                    if (a === t) h(c, null);
                    else if (h(c, a), !a) return s(n.$validators, function(a, c) {
                        h(c, null)
                    }), s(n.$asyncValidators, function(a, c) {
                        h(c, null)
                    }), !1;
                    return !0
                })(a) ? f() ? g() : l(!1): l(!1)
            };
            this.$commitViewValue = function() {
                var a = n.$viewValue;
                h.cancel(O);
                if (n.$$lastCommittedViewValue !== a || "" === a && n.$$hasNativeValidators) n.$$lastCommittedViewValue =
                    a, n.$pristine && this.$setDirty(), this.$$parseAndValidate()
            };
            this.$$parseAndValidate = function() {
                var c = n.$$lastCommittedViewValue,
                    d = D(c) ? t : !0;
                if (d)
                    for (var e = 0; e < n.$parsers.length; e++)
                        if (c = n.$parsers[e](c), D(c)) {
                            d = !1;
                            break
                        }
                V(n.$modelValue) && isNaN(n.$modelValue) && (n.$modelValue = u(a));
                var f = n.$modelValue,
                    g = n.$options && n.$options.allowInvalid;
                n.$$rawModelValue = c;
                g && (n.$modelValue = c, n.$modelValue !== f && n.$$writeModelToScope());
                n.$$runValidators(d, c, n.$$lastCommittedViewValue, function(a) {
                    g || (n.$modelValue =
                        a ? c : t, n.$modelValue !== f && n.$$writeModelToScope())
                })
            };
            this.$$writeModelToScope = function() {
                r(a, n.$modelValue);
                s(n.$viewChangeListeners, function(a) {
                    try {
                        a()
                    } catch (d) {
                        c(d)
                    }
                })
            };
            this.$setViewValue = function(a, c) {
                n.$viewValue = a;
                n.$options && !n.$options.updateOnDefault || n.$$debounceViewValueCommit(c)
            };
            this.$$debounceViewValueCommit = function(c) {
                var d = 0,
                    e = n.$options;
                e && y(e.debounce) && (e = e.debounce, V(e) ? d = e : V(e[c]) ? d = e[c] : V(e["default"]) && (d = e["default"]));
                h.cancel(O);
                d ? O = h(function() {
                        n.$commitViewValue()
                    }, d) :
                    l.$$phase ? n.$commitViewValue() : a.$apply(function() {
                        n.$commitViewValue()
                    })
            };
            a.$watch(function() {
                var c = u(a);
                if (c !== n.$modelValue) {
                    n.$modelValue = n.$$rawModelValue = c;
                    for (var d = n.$formatters, e = d.length, f = c; e--;) f = d[e](f);
                    n.$viewValue !== f && (n.$viewValue = n.$$lastCommittedViewValue = f, n.$render(), n.$$runValidators(t, c, f, C))
                }
                return c
            })
        }],
        ve = ["$rootScope", function(a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: bg,
                priority: 1,
                compile: function(c) {
                    c.addClass(Sa).addClass("ng-untouched").addClass(kb);
                    return {
                        pre: function(a, c, f, g) {
                            var h = g[0],
                                l = g[1] || Jb;
                            h.$$setOptions(g[2] && g[2].$options);
                            l.$addControl(h);
                            f.$observe("name", function(a) {
                                h.$name !== a && l.$$renameControl(h, a)
                            });
                            a.$on("$destroy", function() {
                                l.$removeControl(h)
                            })
                        },
                        post: function(c, e, f, g) {
                            var h = g[0];
                            if (h.$options && h.$options.updateOn) e.on(h.$options.updateOn, function(a) {
                                h.$$debounceViewValueCommit(a && a.type)
                            });
                            e.on("blur", function(e) {
                                h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        xe = da({
            restrict: "A",
            require: "ngModel",
            link: function(a, c, d, e) {
                e.$viewChangeListeners.push(function() {
                    a.$eval(d.ngChange)
                })
            }
        }),
        zc = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, c, d, e) {
                    e && (d.required = !0, e.$validators.required = function(a, c) {
                        return !d.required || !e.$isEmpty(c)
                    }, d.$observe("required", function() {
                        e.$validate()
                    }))
                }
            }
        },
        yc = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, c, d, e) {
                    if (e) {
                        var f, g = d.ngPattern || d.pattern;
                        d.$observe("pattern", function(a) {
                            F(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                            if (a &&
                                !a.test) throw T("ngPattern")("noregexp", g, a, va(c));
                            f = a || t;
                            e.$validate()
                        });
                        e.$validators.pattern = function(a) {
                            return e.$isEmpty(a) || D(f) || f.test(a)
                        }
                    }
                }
            }
        },
        Bc = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, c, d, e) {
                    if (e) {
                        var f = -1;
                        d.$observe("maxlength", function(a) {
                            a = ba(a);
                            f = isNaN(a) ? -1 : a;
                            e.$validate()
                        });
                        e.$validators.maxlength = function(a, c) {
                            return 0 > f || e.$isEmpty(a) || c.length <= f
                        }
                    }
                }
            }
        },
        Ac = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, c, d, e) {
                    if (e) {
                        var f = 0;
                        d.$observe("minlength",
                            function(a) {
                                f = ba(a) || 0;
                                e.$validate()
                            });
                        e.$validators.minlength = function(a, c) {
                            return e.$isEmpty(c) || c.length >= f
                        }
                    }
                }
            }
        },
        we = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(a, c, d, e) {
                    var f = c.attr(d.$attr.ngList) || ", ",
                        g = "false" !== d.ngTrim,
                        h = g ? U(f) : f;
                    e.$parsers.push(function(a) {
                        if (!D(a)) {
                            var c = [];
                            a && s(a.split(h), function(a) {
                                a && c.push(g ? U(a) : a)
                            });
                            return c
                        }
                    });
                    e.$formatters.push(function(a) {
                        return x(a) ? a.join(f) : t
                    });
                    e.$isEmpty = function(a) {
                        return !a || !a.length
                    }
                }
            }
        },
        cg = /^(true|false|\d+)$/,
        ye = function() {
            return {
                restrict: "A",
                priority: 100,
                compile: function(a, c) {
                    return cg.test(c.ngValue) ? function(a, c, f) {
                        f.$set("value", a.$eval(f.ngValue))
                    } : function(a, c, f) {
                        a.$watch(f.ngValue, function(a) {
                            f.$set("value", a)
                        })
                    }
                }
            }
        },
        ze = function() {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function(a, c) {
                    var d = this;
                    this.$options = a.$eval(c.ngModelOptions);
                    this.$options.updateOn !== t ? (this.$options.updateOnDefault = !1, this.$options.updateOn = U(this.$options.updateOn.replace(ag, function() {
                        d.$options.updateOnDefault = !0;
                        return " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        Zd = ["$compile", function(a) {
            return {
                restrict: "AC",
                compile: function(c) {
                    a.$$addBindingClass(c);
                    return function(c, e, f) {
                        a.$$addBindingInfo(e, f.ngBind);
                        e = e[0];
                        c.$watch(f.ngBind, function(a) {
                            e.textContent = a === t ? "" : a
                        })
                    }
                }
            }
        }],
        ae = ["$interpolate", "$compile", function(a, c) {
            return {
                compile: function(d) {
                    c.$$addBindingClass(d);
                    return function(d, f, g) {
                        d = a(f.attr(g.$attr.ngBindTemplate));
                        c.$$addBindingInfo(f, d.expressions);
                        f = f[0];
                        g.$observe("ngBindTemplate", function(a) {
                            f.textContent =
                                a === t ? "" : a
                        })
                    }
                }
            }
        }],
        $d = ["$sce", "$parse", "$compile", function(a, c, d) {
            return {
                restrict: "A",
                compile: function(e, f) {
                    var g = c(f.ngBindHtml),
                        h = c(f.ngBindHtml, function(a) {
                            return (a || "").toString()
                        });
                    d.$$addBindingClass(e);
                    return function(c, e, f) {
                        d.$$addBindingInfo(e, f.ngBindHtml);
                        c.$watch(h, function() {
                            e.html(a.getTrustedHtml(g(c)) || "")
                        })
                    }
                }
            }
        }],
        be = ic("", !0),
        de = ic("Odd", 0),
        ce = ic("Even", 1),
        ee = Ja({
            compile: function(a, c) {
                c.$set("ngCloak", t);
                a.removeClass("ng-cloak")
            }
        }),
        fe = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        Cc = {},
        dg = {
            blur: !0,
            focus: !0
        };
    s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var c = ya("ng-" + a);
        Cc[c] = ["$parse", "$rootScope", function(d, e) {
            return {
                restrict: "A",
                compile: function(f, g) {
                    var h = d(g[c], null, !0);
                    return function(c, d) {
                        d.on(a, function(d) {
                            var f = function() {
                                h(c, {
                                    $event: d
                                })
                            };
                            dg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f)
                        })
                    }
                }
            }
        }]
    });
    var ie = ["$animate", function(a) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(c, d, e, f, g) {
                    var h, l, k;
                    c.$watch(e.ngIf, function(c) {
                        c ? l || g(function(c, f) {
                            l = f;
                            c[c.length++] = Y.createComment(" end ngIf: " + e.ngIf + " ");
                            h = {
                                clone: c
                            };
                            a.enter(c, d.parent(), d)
                        }) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k = tb(h.clone), a.leave(k).then(function() {
                            k = null
                        }), h = null))
                    })
                }
            }
        }],
        je = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function(a, c, d, e) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: ga.noop,
                compile: function(f, g) {
                    var h = g.ngInclude || g.src,
                        l = g.onload || "",
                        k = g.autoscroll;
                    return function(f, g, q, s, r) {
                        var t = 0,
                            n, v, w, L = function() {
                                v && (v.remove(), v = null);
                                n && (n.$destroy(), n = null);
                                w && (d.leave(w).then(function() {
                                    v = null
                                }), v = w, w = null)
                            };
                        f.$watch(e.parseAsResourceUrl(h), function(e) {
                            var h = function() {
                                    !y(k) || k && !f.$eval(k) || c()
                                },
                                q = ++t;
                            e ? (a(e, !0).then(function(a) {
                                if (q === t) {
                                    var c = f.$new();
                                    s.template = a;
                                    a = r(c, function(a) {
                                        L();
                                        d.enter(a, null, g).then(h)
                                    });
                                    n = c;
                                    w = a;
                                    n.$emit("$includeContentLoaded",
                                        e);
                                    f.$eval(l)
                                }
                            }, function() {
                                q === t && (L(), f.$emit("$includeContentError", e))
                            }), f.$emit("$includeContentRequested", e)) : (L(), s.template = null)
                        })
                    }
                }
            }
        }],
        Ae = ["$compile", function(a) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(c, d, e, f) {
                    /SVG/.test(d[0].toString()) ? (d.empty(), a(Fc(f.template, Y).childNodes)(c, function(a) {
                        d.append(a)
                    }, {
                        futureParentElement: d
                    })) : (d.html(f.template), a(d.contents())(c))
                }
            }
        }],
        ke = Ja({
            priority: 450,
            compile: function() {
                return {
                    pre: function(a, c, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }),
        le = Ja({
            terminal: !0,
            priority: 1E3
        }),
        me = ["$locale", "$interpolate", function(a, c) {
            var d = /{}/g,
                e = /^when(Minus)?(.+)$/;
            return {
                restrict: "EA",
                link: function(f, g, h) {
                    function l(a) {
                        g.text(a || "")
                    }
                    var k = h.count,
                        m = h.$attr.when && g.attr(h.$attr.when),
                        p = h.offset || 0,
                        q = f.$eval(m) || {},
                        u = {},
                        m = c.startSymbol(),
                        r = c.endSymbol(),
                        t = m + k + "-" + p + r,
                        n = ga.noop,
                        v;
                    s(h, function(a, c) {
                        var d = e.exec(c);
                        d && (d = (d[1] ? "-" : "") + Q(d[2]), q[d] = g.attr(h.$attr[c]))
                    });
                    s(q, function(a, e) {
                        u[e] = c(a.replace(d, t))
                    });
                    f.$watch(k, function(c) {
                        c = parseFloat(c);
                        var d =
                            isNaN(c);
                        d || c in q || (c = a.pluralCat(c - p));
                        c === v || d && isNaN(v) || (n(), n = f.$watch(u[c], l), v = c)
                    })
                }
            }
        }],
        ne = ["$parse", "$animate", function(a, c) {
            var d = T("ngRepeat"),
                e = function(a, c, d, e, k, m, p) {
                    a[d] = e;
                    k && (a[k] = m);
                    a.$index = c;
                    a.$first = 0 === c;
                    a.$last = c === p - 1;
                    a.$middle = !(a.$first || a.$last);
                    a.$odd = !(a.$even = 0 === (c & 1))
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                $$tlb: !0,
                compile: function(f, g) {
                    var h = g.ngRepeat,
                        l = Y.createComment(" end ngRepeat: " + h + " "),
                        k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!k) throw d("iexp", h);
                    var m = k[1],
                        p = k[2],
                        q = k[3],
                        u = k[4],
                        k = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!k) throw d("iidexp", m);
                    var r = k[3] || k[1],
                        y = k[2];
                    if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(q))) throw d("badident", q);
                    var n, v, w, D, z = {
                        $id: Na
                    };
                    u ? n = a(u) : (w = function(a, c) {
                        return Na(c)
                    }, D = function(a) {
                        return a
                    });
                    return function(a, f, g, k, m) {
                        n && (v = function(c, d, e) {
                            y && (z[y] = c);
                            z[r] = d;
                            z.$index = e;
                            return n(a,
                                z)
                        });
                        var u = ha();
                        a.$watchCollection(p, function(g) {
                            var k, p, n = f[0],
                                E, z = ha(),
                                C, S, N, G, J, x, H;
                            q && (a[q] = g);
                            if (Ta(g)) J = g, p = v || w;
                            else {
                                p = v || D;
                                J = [];
                                for (H in g) g.hasOwnProperty(H) && "$" != H.charAt(0) && J.push(H);
                                J.sort()
                            }
                            C = J.length;
                            H = Array(C);
                            for (k = 0; k < C; k++)
                                if (S = g === J ? k : J[k], N = g[S], G = p(S, N, k), u[G]) x = u[G], delete u[G], z[G] = x, H[k] = x;
                                else {
                                    if (z[G]) throw s(H, function(a) {
                                        a && a.scope && (u[a.id] = a)
                                    }), d("dupes", h, G, N);
                                    H[k] = {
                                        id: G,
                                        scope: t,
                                        clone: t
                                    };
                                    z[G] = !0
                                }
                            for (E in u) {
                                x = u[E];
                                G = tb(x.clone);
                                c.leave(G);
                                if (G[0].parentNode)
                                    for (k = 0,
                                        p = G.length; k < p; k++) G[k].$$NG_REMOVED = !0;
                                x.scope.$destroy()
                            }
                            for (k = 0; k < C; k++)
                                if (S = g === J ? k : J[k], N = g[S], x = H[k], x.scope) {
                                    E = n;
                                    do E = E.nextSibling; while (E && E.$$NG_REMOVED);
                                    x.clone[0] != E && c.move(tb(x.clone), null, B(n));
                                    n = x.clone[x.clone.length - 1];
                                    e(x.scope, k, r, N, y, S, C)
                                } else m(function(a, d) {
                                    x.scope = d;
                                    var f = l.cloneNode(!1);
                                    a[a.length++] = f;
                                    c.enter(a, null, B(n));
                                    n = f;
                                    x.clone = a;
                                    z[x.id] = x;
                                    e(x.scope, k, r, N, y, S, C)
                                });
                            u = z
                        })
                    }
                }
            }
        }],
        oe = ["$animate", function(a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(c, d, e) {
                    c.$watch(e.ngShow,
                        function(c) {
                            a[c ? "removeClass" : "addClass"](d, "ng-hide", {
                                tempClasses: "ng-hide-animate"
                            })
                        })
                }
            }
        }],
        he = ["$animate", function(a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(c, d, e) {
                    c.$watch(e.ngHide, function(c) {
                        a[c ? "addClass" : "removeClass"](d, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        pe = Ja(function(a, c, d) {
            a.$watch(d.ngStyle, function(a, d) {
                d && a !== d && s(d, function(a, d) {
                    c.css(d, "")
                });
                a && c.css(a)
            }, !0)
        }),
        qe = ["$animate", function(a) {
            return {
                restrict: "EA",
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(c, d, e, f) {
                    var g = [],
                        h = [],
                        l = [],
                        k = [],
                        m = function(a, c) {
                            return function() {
                                a.splice(c, 1)
                            }
                        };
                    c.$watch(e.ngSwitch || e.on, function(c) {
                        var d, e;
                        d = 0;
                        for (e = l.length; d < e; ++d) a.cancel(l[d]);
                        d = l.length = 0;
                        for (e = k.length; d < e; ++d) {
                            var r = tb(h[d].clone);
                            k[d].$destroy();
                            (l[d] = a.leave(r)).then(m(l, d))
                        }
                        h.length = 0;
                        k.length = 0;
                        (g = f.cases["!" + c] || f.cases["?"]) && s(g, function(c) {
                            c.transclude(function(d, e) {
                                k.push(e);
                                var f = c.element;
                                d[d.length++] = Y.createComment(" end ngSwitchWhen: ");
                                h.push({
                                    clone: d
                                });
                                a.enter(d,
                                    f.parent(), f)
                            })
                        })
                    })
                }
            }
        }],
        re = Ja({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, c, d, e, f) {
                e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
                e.cases["!" + d.ngSwitchWhen].push({
                    transclude: f,
                    element: c
                })
            }
        }),
        se = Ja({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, c, d, e, f) {
                e.cases["?"] = e.cases["?"] || [];
                e.cases["?"].push({
                    transclude: f,
                    element: c
                })
            }
        }),
        ue = Ja({
            restrict: "EAC",
            link: function(a, c, d, e, f) {
                if (!f) throw T("ngTransclude")("orphan",
                    va(c));
                f(function(a) {
                    c.empty();
                    c.append(a)
                })
            }
        }),
        Vd = ["$templateCache", function(a) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(c, d) {
                    "text/ng-template" == d.type && a.put(d.id, c[0].text)
                }
            }
        }],
        eg = T("ngOptions"),
        te = da({
            restrict: "A",
            terminal: !0
        }),
        Wd = ["$compile", "$parse", function(a, c) {
            var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                e = {
                    $setViewValue: C
                };
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function(a, c, d) {
                    var l = this,
                        k = {},
                        m = e,
                        p;
                    l.databound = d.ngModel;
                    l.init = function(a, c, d) {
                        m = a;
                        p = d
                    };
                    l.addOption = function(c, d) {
                        Ma(c, '"option value"');
                        k[c] = !0;
                        m.$viewValue == c && (a.val(c), p.parent() && p.remove());
                        d && d[0].hasAttribute("selected") && (d[0].selected = !0)
                    };
                    l.removeOption = function(a) {
                        this.hasOption(a) && (delete k[a], m.$viewValue === a && this.renderUnknownOption(a))
                    };
                    l.renderUnknownOption = function(c) {
                        c = "? " + Na(c) + " ?";
                        p.val(c);
                        a.prepend(p);
                        a.val(c);
                        p.prop("selected", !0)
                    };
                    l.hasOption = function(a) {
                        return k.hasOwnProperty(a)
                    };
                    c.$on("$destroy", function() {
                        l.renderUnknownOption = C
                    })
                }],
                link: function(e, g, h, l) {
                    function k(a, c, d, e) {
                        d.$render = function() {
                            var a = d.$viewValue;
                            e.hasOption(a) ? (C.parent() && C.remove(), c.val(a), "" === a && n.prop("selected", !0)) : D(a) && n ? c.val("") : e.renderUnknownOption(a)
                        };
                        c.on("change", function() {
                            a.$apply(function() {
                                C.parent() && C.remove();
                                d.$setViewValue(c.val())
                            })
                        })
                    }

                    function m(a, c, d) {
                        var e;
                        d.$render = function() {
                            var a =
                                new db(d.$viewValue);
                            s(c.find("option"), function(c) {
                                c.selected = y(a.get(c.value))
                            })
                        };
                        a.$watch(function() {
                            fa(e, d.$viewValue) || (e = qa(d.$viewValue), d.$render())
                        });
                        c.on("change", function() {
                            a.$apply(function() {
                                var a = [];
                                s(c.find("option"), function(c) {
                                    c.selected && a.push(c.value)
                                });
                                d.$setViewValue(a)
                            })
                        })
                    }

                    function p(e, f, g) {
                        function h(a, c, d) {
                            T[A] = d;
                            H && (T[H] = c);
                            return a(e, T)
                        }

                        function k(a) {
                            var c;
                            if (u)
                                if (M && x(a)) {
                                    c = new db([]);
                                    for (var d = 0; d < a.length; d++) c.put(h(M, null, a[d]), !0)
                                } else c = new db(a);
                            else M && (a = h(M, null,
                                a));
                            return function(d, e) {
                                var f;
                                f = M ? M : B ? B : F;
                                return u ? y(c.remove(h(f, d, e))) : a === h(f, d, e)
                            }
                        }

                        function l() {
                            v || (e.$$postDigest(p), v = !0)
                        }

                        function m(a, c, d) {
                            a[c] = a[c] || 0;
                            a[c] += d ? 1 : -1
                        }

                        function p() {
                            v = !1;
                            var a = {
                                    "": []
                                },
                                c = [""],
                                d, l, n, r, t;
                            n = g.$viewValue;
                            r = P(e) || [];
                            var B = H ? Object.keys(r).sort() : r,
                                x, A, D, F, N = {};
                            t = k(n);
                            var I = !1,
                                U, V;
                            Q = {};
                            for (F = 0; D = B.length, F < D; F++) {
                                x = F;
                                if (H && (x = B[F], "$" === x.charAt(0))) continue;
                                A = r[x];
                                d = h(J, x, A) || "";
                                (l = a[d]) || (l = a[d] = [], c.push(d));
                                d = t(x, A);
                                I = I || d;
                                A = h(C, x, A);
                                A = y(A) ? A : "";
                                V = M ? M(e, T) : H ? B[F] :
                                    F;
                                M && (Q[V] = x);
                                l.push({
                                    id: V,
                                    label: A,
                                    selected: d
                                })
                            }
                            u || (z || null === n ? a[""].unshift({
                                id: "",
                                label: "",
                                selected: !I
                            }) : I || a[""].unshift({
                                id: "?",
                                label: "",
                                selected: !0
                            }));
                            x = 0;
                            for (B = c.length; x < B; x++) {
                                d = c[x];
                                l = a[d];
                                R.length <= x ? (n = {
                                    element: G.clone().attr("label", d),
                                    label: l.label
                                }, r = [n], R.push(r), f.append(n.element)) : (r = R[x], n = r[0], n.label != d && n.element.attr("label", n.label = d));
                                I = null;
                                F = 0;
                                for (D = l.length; F < D; F++) d = l[F], (t = r[F + 1]) ? (I = t.element, t.label !== d.label && (m(N, t.label, !1), m(N, d.label, !0), I.text(t.label = d.label),
                                    I.prop("label", t.label)), t.id !== d.id && I.val(t.id = d.id), I[0].selected !== d.selected && (I.prop("selected", t.selected = d.selected), Ra && I.prop("selected", t.selected))) : ("" === d.id && z ? U = z : (U = w.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), r.push(t = {
                                    element: U,
                                    label: d.label,
                                    id: d.id,
                                    selected: d.selected
                                }), m(N, d.label, !0), I ? I.after(U) : n.element.append(U), I = U);
                                for (F++; r.length > F;) d = r.pop(), m(N, d.label, !1), d.element.remove()
                            }
                            for (; R.length > x;) {
                                l = R.pop();
                                for (F = 1; F < l.length; ++F) m(N, l[F].label, !1);
                                l[0].element.remove()
                            }
                            s(N, function(a, c) {
                                0 < a ? q.addOption(c) : 0 > a && q.removeOption(c)
                            })
                        }
                        var n;
                        if (!(n = r.match(d))) throw eg("iexp", r, va(f));
                        var C = c(n[2] || n[1]),
                            A = n[4] || n[6],
                            D = / as /.test(n[0]) && n[1],
                            B = D ? c(D) : null,
                            H = n[5],
                            J = c(n[3] || ""),
                            F = c(n[2] ? n[1] : A),
                            P = c(n[7]),
                            M = n[8] ? c(n[8]) : null,
                            Q = {},
                            R = [
                                [{
                                    element: f,
                                    label: ""
                                }]
                            ],
                            T = {};
                        z && (a(z)(e), z.removeClass("ng-scope"), z.remove());
                        f.empty();
                        f.on("change", function() {
                            e.$apply(function() {
                                var a = P(e) || [],
                                    c;
                                if (u) c = [], s(f.val(), function(d) {
                                    d =
                                        M ? Q[d] : d;
                                    c.push("?" === d ? t : "" === d ? null : h(B ? B : F, d, a[d]))
                                });
                                else {
                                    var d = M ? Q[f.val()] : f.val();
                                    c = "?" === d ? t : "" === d ? null : h(B ? B : F, d, a[d])
                                }
                                g.$setViewValue(c);
                                p()
                            })
                        });
                        g.$render = p;
                        e.$watchCollection(P, l);
                        e.$watchCollection(function() {
                            var a = P(e),
                                c;
                            if (a && x(a)) {
                                c = Array(a.length);
                                for (var d = 0, f = a.length; d < f; d++) c[d] = h(C, d, a[d])
                            } else if (a)
                                for (d in c = {}, a) a.hasOwnProperty(d) && (c[d] = h(C, d, a[d]));
                            return c
                        }, l);
                        u && e.$watchCollection(function() {
                            return g.$modelValue
                        }, l)
                    }
                    if (l[1]) {
                        var q = l[0];
                        l = l[1];
                        var u = h.multiple,
                            r = h.ngOptions,
                            z = !1,
                            n, v = !1,
                            w = B(Y.createElement("option")),
                            G = B(Y.createElement("optgroup")),
                            C = w.clone();
                        h = 0;
                        for (var A = g.children(), H = A.length; h < H; h++)
                            if ("" === A[h].value) {
                                n = z = A.eq(h);
                                break
                            }
                        q.init(l, z, C);
                        u && (l.$isEmpty = function(a) {
                            return !a || 0 === a.length
                        });
                        r ? p(e, g, l) : u ? m(e, g, l) : k(e, g, l, q)
                    }
                }
            }
        }],
        Yd = ["$interpolate", function(a) {
            var c = {
                addOption: C,
                removeOption: C
            };
            return {
                restrict: "E",
                priority: 100,
                compile: function(d, e) {
                    if (D(e.value)) {
                        var f = a(d.text(), !0);
                        f || e.$set("value", d.text())
                    }
                    return function(a, d, e) {
                        var k = d.parent(),
                            m = k.data("$selectController") || k.parent().data("$selectController");
                        m && m.databound || (m = c);
                        f ? a.$watch(f, function(a, c) {
                            e.$set("value", a);
                            c !== a && m.removeOption(c);
                            m.addOption(a, d)
                        }) : m.addOption(e.value, d);
                        d.on("$destroy", function() {
                            m.removeOption(e.value)
                        })
                    }
                }
            }
        }],
        Xd = da({
            restrict: "E",
            terminal: !1
        });
    M.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Nd(), Pd(ga), B(Y).ready(function() {
        Jd(Y, sc)
    }))
})(window, document);
!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');

(function(p, d, C) {
    'use strict';

    function v(r, h, g) {
        return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            link: function(a, c, b, f, y) {
                function z() {
                    k && (g.cancel(k), k = null);
                    l && (l.$destroy(), l = null);
                    m && (k = g.leave(m), k.then(function() {
                        k = null
                    }), m = null)
                }

                function x() {
                    var b = r.current && r.current.locals;
                    if (d.isDefined(b && b.$template)) {
                        var b = a.$new(),
                            f = r.current;
                        m = y(b, function(b) {
                            g.enter(b, null, m || c).then(function() {
                                !d.isDefined(t) || t && !a.$eval(t) || h()
                            });
                            z()
                        });
                        l = f.scope = b;
                        l.$emit("$viewContentLoaded");
                        l.$eval(w)
                    } else z()
                }
                var l, m, k, t = b.autoscroll,
                    w = b.onload || "";
                a.$on("$routeChangeSuccess", x);
                x()
            }
        }
    }

    function A(d, h, g) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function(a, c) {
                var b = g.current,
                    f = b.locals;
                c.html(f.$template);
                var y = d(c.contents());
                b.controller && (f.$scope = a, f = h(b.controller, f), b.controllerAs && (a[b.controllerAs] = f), c.data("$ngControllerController", f), c.children().data("$ngControllerController", f));
                y(a)
            }
        }
    }
    p = d.module("ngRoute", ["ng"]).provider("$route", function() {
        function r(a, c) {
            return d.extend(Object.create(a),
                c)
        }

        function h(a, d) {
            var b = d.caseInsensitiveMatch,
                f = {
                    originalPath: a,
                    regexp: a
                },
                g = f.keys = [];
            a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, d, b, c) {
                a = "?" === c ? c : null;
                c = "*" === c ? c : null;
                g.push({
                    name: b,
                    optional: !!a
                });
                d = d || "";
                return "" + (a ? "" : d) + "(?:" + (a ? d : "") + (c && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "")
            }).replace(/([\/$\*])/g, "\\$1");
            f.regexp = new RegExp("^" + a + "$", b ? "i" : "");
            return f
        }
        var g = {};
        this.when = function(a, c) {
            var b = d.copy(c);
            d.isUndefined(b.reloadOnSearch) && (b.reloadOnSearch = !0);
            d.isUndefined(b.caseInsensitiveMatch) && (b.caseInsensitiveMatch = this.caseInsensitiveMatch);
            g[a] = d.extend(b, a && h(a, b));
            if (a) {
                var f = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                g[f] = d.extend({
                    redirectTo: a
                }, h(f, b))
            }
            return this
        };
        this.caseInsensitiveMatch = !1;
        this.otherwise = function(a) {
            "string" === typeof a && (a = {
                redirectTo: a
            });
            this.when(null, a);
            return this
        };
        this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function(a, c, b, f, h, p, x) {
            function l(b) {
                var e = s.current;
                (v = (n = k()) && e && n.$$route === e.$$route && d.equals(n.pathParams, e.pathParams) && !n.reloadOnSearch && !w) || !e && !n || a.$broadcast("$routeChangeStart", n, e).defaultPrevented && b && b.preventDefault()
            }

            function m() {
                var u = s.current,
                    e = n;
                if (v) u.params = e.params, d.copy(u.params, b), a.$broadcast("$routeUpdate", u);
                else if (e || u) w = !1, (s.current = e) && e.redirectTo && (d.isString(e.redirectTo) ? c.path(t(e.redirectTo, e.params)).search(e.params).replace() : c.url(e.redirectTo(e.pathParams, c.path(), c.search())).replace()), f.when(e).then(function() {
                    if (e) {
                        var a =
                            d.extend({}, e.resolve),
                            b, c;
                        d.forEach(a, function(b, e) {
                            a[e] = d.isString(b) ? h.get(b) : h.invoke(b, null, null, e)
                        });
                        d.isDefined(b = e.template) ? d.isFunction(b) && (b = b(e.params)) : d.isDefined(c = e.templateUrl) && (d.isFunction(c) && (c = c(e.params)), c = x.getTrustedResourceUrl(c), d.isDefined(c) && (e.loadedTemplateUrl = c, b = p(c)));
                        d.isDefined(b) && (a.$template = b);
                        return f.all(a)
                    }
                }).then(function(c) {
                    e == s.current && (e && (e.locals = c, d.copy(e.params, b)), a.$broadcast("$routeChangeSuccess", e, u))
                }, function(b) {
                    e == s.current && a.$broadcast("$routeChangeError",
                        e, u, b)
                })
            }

            function k() {
                var a, b;
                d.forEach(g, function(f, g) {
                    var q;
                    if (q = !b) {
                        var h = c.path();
                        q = f.keys;
                        var l = {};
                        if (f.regexp)
                            if (h = f.regexp.exec(h)) {
                                for (var k = 1, m = h.length; k < m; ++k) {
                                    var n = q[k - 1],
                                        p = h[k];
                                    n && p && (l[n.name] = p)
                                }
                                q = l
                            } else q = null;
                        else q = null;
                        q = a = q
                    }
                    q && (b = r(f, {
                        params: d.extend({}, c.search(), a),
                        pathParams: a
                    }), b.$$route = f)
                });
                return b || g[null] && r(g[null], {
                    params: {},
                    pathParams: {}
                })
            }

            function t(a, b) {
                var c = [];
                d.forEach((a || "").split(":"), function(a, d) {
                    if (0 === d) c.push(a);
                    else {
                        var f = a.match(/(\w+)(?:[?*])?(.*)/),
                            g = f[1];
                        c.push(b[g]);
                        c.push(f[2] || "");
                        delete b[g]
                    }
                });
                return c.join("")
            }
            var w = !1,
                n, v, s = {
                    routes: g,
                    reload: function() {
                        w = !0;
                        a.$evalAsync(function() {
                            l();
                            m()
                        })
                    },
                    updateParams: function(a) {
                        if (this.current && this.current.$$route) {
                            var b = {},
                                f = this;
                            d.forEach(Object.keys(a), function(c) {
                                f.current.pathParams[c] || (b[c] = a[c])
                            });
                            a = d.extend({}, this.current.params, a);
                            c.path(t(this.current.$$route.originalPath, a));
                            c.search(d.extend({}, c.search(), b))
                        } else throw B("norout");
                    }
                };
            a.$on("$locationChangeStart", l);
            a.$on("$locationChangeSuccess",
                m);
            return s
        }]
    });
    var B = d.$$minErr("ngRoute");
    p.provider("$routeParams", function() {
        this.$get = function() {
            return {}
        }
    });
    p.directive("ngView", v);
    p.directive("ngView", A);
    v.$inject = ["$route", "$anchorScroll", "$animate"];
    A.$inject = ["$compile", "$controller", "$route"]
})(window, window.angular);

angular.module("blockUI", ["templates-angularBlockUI"]), angular.module("blockUI").config(["$provide", "$httpProvider", function(a, b) {
    a.decorator("$exceptionHandler", ["$delegate", "$injector", function(a, b) {
        var c, d;
        return function(e, f) {
            d = d || b.get("blockUIConfig"), d.resetOnException && (c = c || b.get("blockUI"), c.instances.reset()), a(e, f)
        }
    }]), b.interceptors.push("blockUIHttpInterceptor")
}]), angular.module("blockUI").run(["$document", function(a) {
    a.find("body").append('<div block-ui="main"></div>')
}]), angular.module("blockUI").provider("blockUIConfig", function() {
    var a = {
        templateUrl: "angular-block-ui/angular-block-ui.tmpl.html",
        delay: 250,
        message: "Loading ...",
        autoBlock: !0,
        resetOnException: !0,
        requestFilter: angular.noop
    };
    this.templateUrl = function(b) {
        a.templateUrl = b
    }, this.template = function(b) {
        a.template = b
    }, this.delay = function(b) {
        a.delay = b
    }, this.message = function(b) {
        a.message = b
    }, this.autoBlock = function(b) {
        a.autoBlock = b
    }, this.resetOnException = function(b) {
        a.resetOnException = b
    }, this.requestFilter = function(b) {
        a.requestFilter = b
    }, this.$get = function() {
        return a
    }
}), angular.module("blockUI").directive("blockUi", ["blockUI", "blockUIConfig", "blockUiLinkFn", function(a, b, c) {
    return {
        scope: !0,
        restrict: "A",
        templateUrl: b.template ? void 0 : b.templateUrl,
        template: b.template,
        link: c
    }
}]).factory("blockUiLinkFn", ["blockUI", "blockUIUtils", function(a, b) {
    return function(c, d, e) {
        var f = d.parent();
        if (f.length) {
            var g = a;
            if ("BODY" === f[0].tagName) var h = c.$on("$viewContentLoaded", function() {
                h(), c.$on("$locationChangeStart", function(a) {
                    c.state.blockCount > 0 && a.preventDefault()
                })
            });
            else {
                f.css("position", "relative");
                var i = e.blockUi ? e.blockUi : "_" + c.$id;
                g = a.instances.get(i);
                var j = d.inheritedData("block-ui");
                j && (g._parent = j);
                var k = e.blockUiPattern;
                if (k) {
                    var l = b.buildRegExp(k);
                    g.pattern(l)
                }
                c.$on("$destroy", function() {
                    g.release()
                }), g.addRef()
            }
            d.addClass("block-ui"), f.data("block-ui", g), c.state = g.state()
        }
    }
}]), angular.module("blockUI").factory("blockUIHttpInterceptor", ["$q", "$injector", "blockUIConfig", function(a, b, c) {
    function d() {
        g = g || b.get("blockUI")
    }

    function e(a) {
        c.autoBlock && !a.$_noBlock && a.$_blocks && (d(), a.$_blocks.stop())
    }

    function f(b) {
        return e(b.config), a.reject(b)
    }
    var g;
    return {
        request: function(a) {
            return c.autoBlock && (c.requestFilter(a) === !1 ? a.$_noBlock = !0 : (d(), a.$_blocks = g.instances.locate(a), a.$_blocks.start())), a
        },
        requestError: f,
        response: function(a) {
            return e(a.config), a
        },
        responseError: f
    }
}]), angular.module("blockUI").factory("blockUI", ["blockUIConfig", "$timeout", "blockUIUtils", "$document", function(a, b, c, d) {
    function e(e) {
        var g, i = this,
            j = {
                id: e,
                blockCount: 0,
                message: a.message,
                blocking: !1
            },
            k = [];
        this._refs = 0, this.start = function(e) {
            j.message = e || a.message, j.blockCount++;
            var f = angular.element(d[0].activeElement);
            f.length && c.isElementInBlockScope(f, i) && (i._restoreFocus = f[0], i._restoreFocus.blur()), g || (g = b(function() {
                g = null, j.blocking = !0
            }, a.delay))
        }, this._cancelStartTimeout = function() {
            g && (b.cancel(g), g = null)
        }, this.stop = function() {
            j.blockCount = Math.max(0, --j.blockCount), 0 === j.blockCount && this.reset(!0)
        }, this.message = function(a) {
            j.message = a
        }, this.pattern = function(a) {
            return void 0 !== a && (i._pattern = a), i._pattern
        }, this.reset = function(a) {
            i._cancelStartTimeout(), j.blockCount = 0, j.blocking = !1, !i._restoreFocus || d[0].activeElement && d[0].activeElement !== f[0] || (i._restoreFocus.focus(), i._restoreFocus = null);
            try {
                a && angular.forEach(k, function(a) {
                    a()
                })
            } finally {
                k.length = 0
            }
        }, this.done = function(a) {
            k.push(a)
        }, this.state = function() {
            return j
        }, this.addRef = function() {
            i._refs += 1
        }, this.release = function() {
            --i._refs <= 0 && h.instances._destroy(i)
        }
    }
    var f = d.find("body"),
        g = [];
    g.get = function(a) {
        var b = g[a];
        return b || (b = g[a] = new e(a), g.push(b)), b
    }, g._destroy = function(a) {
        if (angular.isString(a) && (a = g[a]), a) {
            a.reset(), delete g[a.state().id];
            for (var b = g.length; --b;)
                if (g[b] === a) {
                    g.splice(b, 1);
                    break
                }
        }
    }, g.locate = function(a) {
        var b = [];
        c.forEachFnHook(b, "start"), c.forEachFnHook(b, "stop");
        for (var d = g.length; d--;) {
            var e = g[d],
                f = e._pattern;
            f && f.test(a.url) && b.push(e)
        }
        return 0 === b.length && b.push(h), b
    }, c.forEachFnHook(g, "reset");
    var h = g.get("main");
    return h.addRef(), h.instances = g, h
}]), angular.module("blockUI").factory("blockUIUtils", function() {
    var a = {
        buildRegExp: function(a) {
            var b, c = a.match(/^\/(.*)\/([gim]*)$/);
            if (!c) throw Error("Incorrect regular expression format: " + a);
            return b = new RegExp(c[1], c[2])
        },
        forEachFn: function(a, b, c) {
            for (var d = a.length; d--;) {
                var e = a[d];
                e[b].apply(e, c)
            }
        },
        forEachFnHook: function(b, c) {
            b[c] = function() {
                a.forEachFn(this, c, arguments)
            }
        },
        isElementInBlockScope: function(a, b) {
            for (var c = a.inheritedData("block-ui"); c;) {
                if (c === b) return !0;
                c = c._parent
            }
            return !1
        }
    };
    return a
}), angular.module("templates-angularBlockUI", ["angular-block-ui/angular-block-ui.tmpl.html"]), angular.module("angular-block-ui/angular-block-ui.tmpl.html", []).run(["$templateCache", function(a) {
    a.put("angular-block-ui/angular-block-ui.tmpl.html", '<div ng-show="state.blockCount > 0" class="block-ui-overlay" ng-class="{ \'block-ui-visible\': state.blocking }"></div>\n<div ng-show="state.blocking" class="block-ui-message-container">\n  <div class="block-ui-message">{{ state.message }}</div>  \n</div>\n')
}]);
angular.module("pascalprecht.translate", ["ng"]).run(["$translate", function(n) {
    var i = n.storageKey(),
        t = n.storage(),
        r = function() {
            var r = n.preferredLanguage();
            angular.isString(r) ? n.use(r) : t.put(i, n.use())
        };
    t ? t.get(i) ? n.use(t.get(i))["catch"](r) : r() : angular.isString(n.preferredLanguage()) && n.use(n.preferredLanguage())
}]);
angular.module("pascalprecht.translate").provider("$translate", ["$STORAGE_KEY", function(n) {
    var r = {},
        u, a = [],
        v, t, p, i, s, h, w = n,
        d, f, st, g = [],
        nt = !1,
        e, tt = "translate-cloak",
        it, b, k, ht = !1,
        rt = ".",
        c, vt = "2.5.2",
        ct = function() {
            var i = window.navigator,
                r = ["language", "browserLanguage", "systemLanguage", "userLanguage"],
                n, t;
            if (angular.isArray(i.languages))
                for (n = 0; n < i.languages.length; n++)
                    if (t = i.languages[n], t && t.length) return t;
            for (n = 0; n < r.length; n++)
                if (t = i[r[n]], t && t.length) return t;
            return null
        },
        ut, y, ft, et, ot;
    ct.displayName = "angular-translate/service: getFirstBrowserLanguage";
    ut = function() {
        return (ct() || "").split("-").join("_")
    };
    ut.displayName = "angular-translate/service: getLocale";
    var o = function(n, t) {
            for (var i = 0, r = n.length; i < r; i++)
                if (n[i] === t) return i;
            return -1
        },
        lt = function() {
            return this.replace(/^\s+|\s+$/g, "")
        },
        at = function(n) {
            for (var i = [], h = angular.lowercase(n), u = 0, c = a.length, f, t, e, s, r; u < c; u++) i.push(angular.lowercase(a[u]));
            if (o(i, h) > -1) return n;
            if (v)
                for (t in v)
                    if (e = !1, s = Object.prototype.hasOwnProperty.call(v, t) && angular.lowercase(t) === angular.lowercase(n), t.slice(-1) === "*" && (e = t.slice(0, -1) === n.slice(0, t.length - 1)), (s || e) && (f = v[t], o(i, angular.lowercase(f)) > -1)) return f;
            return (r = n.split("_"), r.length > 1 && o(i, angular.lowercase(r[0])) > -1) ? r[0] : n
        },
        l = function(n, t) {
            if (!n && !t) return r;
            if (n && !t) {
                if (angular.isString(n)) return r[n]
            } else angular.isObject(r[n]) || (r[n] = {}), angular.extend(r[n], y(t));
            return this
        };
    this.translations = l;
    this.cloakClassName = function(n) {
        return n ? (tt = n, this) : tt
    };
    y = function(n, t, i, r) {
        var u, e, o, f;
        t || (t = []);
        i || (i = {});
        for (u in n) Object.prototype.hasOwnProperty.call(n, u) && (f = n[u], angular.isObject(f) ? y(f, t.concat(u), i, u) : (e = t.length ? "" + t.join(rt) + rt + u : u, t.length && u === r && (o = "" + t.join(rt), i[o] = "@:" + e), i[e] = f));
        return i
    };
    this.addInterpolation = function(n) {
        return g.push(n), this
    };
    this.useMessageFormatInterpolation = function() {
        return this.useInterpolation("$translateMessageFormatInterpolation")
    };
    this.useInterpolation = function(n) {
        return st = n, this
    };
    this.useSanitizeValueStrategy = function(n) {
        return nt = n, this
    };
    this.preferredLanguage = function(n) {
        return ft(n), this
    };
    ft = function(n) {
        return n && (u = n), u
    };
    this.translationNotFoundIndicator = function(n) {
        return this.translationNotFoundIndicatorLeft(n), this.translationNotFoundIndicatorRight(n), this
    };
    this.translationNotFoundIndicatorLeft = function(n) {
        return n ? (b = n, this) : b
    };
    this.translationNotFoundIndicatorRight = function(n) {
        return n ? (k = n, this) : k
    };
    this.fallbackLanguage = function(n) {
        return et(n), this
    };
    et = function(n) {
        return n ? (angular.isString(n) ? (p = !0, t = [n]) : angular.isArray(n) && (p = !1, t = n), angular.isString(u) && o(t, u) < 0 && t.push(u), this) : p ? t[0] : t
    };
    this.use = function(n) {
        if (n) {
            if (!r[n] && !e) throw new Error("$translateProvider couldn't find translationTable for langKey: '" + n + "'");
            return i = n, this
        }
        return i
    };
    ot = function(n) {
        if (!n) return d ? d + w : w;
        w = n
    };
    this.storageKey = ot;
    this.useUrlLoader = function(n, t) {
        return this.useLoader("$translateUrlLoader", angular.extend({
            url: n
        }, t))
    };
    this.useStaticFilesLoader = function(n) {
        return this.useLoader("$translateStaticFilesLoader", n)
    };
    this.useLoader = function(n, t) {
        return e = n, it = t || {}, this
    };
    this.useLocalStorage = function() {
        return this.useStorage("$translateLocalStorage")
    };
    this.useCookieStorage = function() {
        return this.useStorage("$translateCookieStorage")
    };
    this.useStorage = function(n) {
        return h = n, this
    };
    this.storagePrefix = function(n) {
        return n ? (d = n, this) : n
    };
    this.useMissingTranslationHandlerLog = function() {
        return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")
    };
    this.useMissingTranslationHandler = function(n) {
        return f = n, this
    };
    this.usePostCompiling = function(n) {
        return ht = !!n, this
    };
    this.determinePreferredLanguage = function(n) {
        var t = n && angular.isFunction(n) ? n() : ut();
        return u = a.length ? at(t) : t, this
    };
    this.registerAvailableLanguageKeys = function(n, t) {
        return n ? (a = n, t && (v = t), this) : a
    };
    this.useLoaderCache = function(n) {
        return n === !1 ? c = undefined : n === !0 ? c = !0 : typeof n == "undefined" ? c = "$translationCache" : n && (c = n), this
    };
    this.$get = ["$log", "$injector", "$rootScope", "$q", function(n, a, v, d) {
        var yt, pt = a.get(st || "$translateDefaultInterpolation"),
            ct = !1,
            kt = {},
            ut = {},
            dt, wt, rt = function(n, r, f) {
                var c, e, s;
                return angular.isArray(n) ? (c = function(n) {
                    for (var i = {}, u = [], e = function(n) {
                            var t = d.defer(),
                                u = function(r) {
                                    i[n] = r;
                                    t.resolve([n, r])
                                };
                            return rt(n, r, f).then(u, u), t.promise
                        }, t = 0, o = n.length; t < o; t++) u.push(e(n[t]));
                    return d.all(u).then(function() {
                        return i
                    })
                }, c(n)) : (e = d.defer(), n && (n = lt.apply(n)), s = function() {
                    var n = u ? ut[u] : ut[i],
                        r, f;
                    return dt = 0, h && !n && (r = yt.get(w), n = ut[r], t && t.length && (f = o(t, r), dt = f === 0 ? 1 : 0, o(t, u) < 0 && t.push(u))), n
                }(), s ? s.then(function() {
                    fi(n, r, f).then(e.resolve, e.reject)
                }, e.reject) : fi(n, r, f).then(e.resolve, e.reject), e.promise)
            },
            ii = function(n) {
                return b && (n = [b, n].join(" ")), k && (n = [n, k].join(" ")), n
            },
            ni = function(n) {
                i = n;
                v.$emit("$translateChangeSuccess", {
                    language: n
                });
                h && yt.put(rt.storageKey(), i);
                pt.setLocale(i);
                angular.forEach(kt, function(n, t) {
                    kt[t].setLocale(i)
                });
                v.$emit("$translateChangeEnd", {
                    language: n
                })
            },
            bt = function(n) {
                var i, t, r;
                if (!n) throw "No language key specified for loading.";
                return i = d.defer(), v.$emit("$translateLoadingStart", {
                    language: n
                }), ct = !0, t = c, typeof t == "string" && (t = a.get(t)), r = angular.extend({}, it, {
                    key: n,
                    $http: angular.extend({}, {
                        cache: t
                    }, it.$http)
                }), a.get(e)(r).then(function(t) {
                    var r = {};
                    v.$emit("$translateLoadingSuccess", {
                        language: n
                    });
                    angular.isArray(t) ? angular.forEach(t, function(n) {
                        angular.extend(r, y(n))
                    }) : angular.extend(r, y(t));
                    ct = !1;
                    i.resolve({
                        key: n,
                        table: r
                    });
                    v.$emit("$translateLoadingEnd", {
                        language: n
                    })
                }, function(n) {
                    v.$emit("$translateLoadingError", {
                        language: n
                    });
                    i.reject(n);
                    v.$emit("$translateLoadingEnd", {
                        language: n
                    })
                }), i.promise
            },
            oi, gt, si;
        if (h && (yt = a.get(h), !yt.get || !yt.put)) throw new Error("Couldn't use storage '" + h + "', missing get() or put() method!");
        angular.isFunction(pt.useSanitizeValueStrategy) && pt.useSanitizeValueStrategy(nt);
        g.length && angular.forEach(g, function(n) {
            var t = a.get(n);
            t.setLocale(u || i);
            angular.isFunction(t.useSanitizeValueStrategy) && t.useSanitizeValueStrategy(nt);
            kt[t.getInterpolationIdentifier()] = t
        });
        var hi = function(n) {
                var t = d.defer();
                return Object.prototype.hasOwnProperty.call(r, n) ? t.resolve(r[n]) : ut[n] ? ut[n].then(function(n) {
                    l(n.key, n.table);
                    t.resolve(n.table)
                }, t.reject) : t.reject(), t.promise
            },
            ci = function(n, t, r, u) {
                var f = d.defer();
                return hi(n).then(function(e) {
                    Object.prototype.hasOwnProperty.call(e, t) ? (u.setLocale(n), f.resolve(u.interpolate(e[t], r)), u.setLocale(i)) : f.reject()
                }, f.reject), f.promise
            },
            li = function(n, t, u, f) {
                var o, e = r[n];
                return e && Object.prototype.hasOwnProperty.call(e, t) && (f.setLocale(n), o = f.interpolate(e[t], u), f.setLocale(i)), o
            },
            ti = function(n) {
                if (f) {
                    var t = a.get(f)(n, i);
                    return t !== undefined ? t : n
                }
                return n
            },
            ri = function(n, i, r, u) {
                var f = d.defer(),
                    e;
                return n < t.length ? (e = t[n], ci(e, i, r, u).then(f.resolve, function() {
                    ri(n + 1, i, r, u).then(f.resolve)
                })) : f.resolve(ti(i)), f.promise
            },
            ui = function(n, i, r, u) {
                var f, e;
                return n < t.length && (e = t[n], f = li(e, i, r, u), f || (f = ui(n + 1, i, r, u))), f
            },
            ai = function(n, t, i) {
                return ri(wt > 0 ? wt : dt, n, t, i)
            },
            vi = function(n, t, i) {
                return ui(wt > 0 ? wt : dt, n, t, i)
            },
            fi = function(n, u, e) {
                var o = d.defer(),
                    h = i ? r[i] : r,
                    l = e ? kt[e] : pt,
                    s, c;
                return h && Object.prototype.hasOwnProperty.call(h, n) ? (s = h[n], s.substr(0, 2) === "@:" ? rt(s.substr(2), u, e).then(o.resolve, o.reject) : o.resolve(l.interpolate(s, u))) : (f && !ct && (c = ti(n)), i && t && t.length ? ai(n, u, l).then(function(n) {
                    o.resolve(n)
                }, function(n) {
                    o.reject(ii(n))
                }) : f && !ct && c ? o.resolve(c) : o.reject(ii(n))), o.promise
            },
            ei = function(n, u, e) {
                var o, h = i ? r[i] : r,
                    l = e ? kt[e] : pt,
                    s, c;
                return h && Object.prototype.hasOwnProperty.call(h, n) ? (s = h[n], o = s.substr(0, 2) === "@:" ? ei(s.substr(2), u, e) : l.interpolate(s, u)) : (f && !ct && (c = ti(n)), i && t && t.length ? (dt = 0, o = vi(n, u, l)) : o = f && !ct && c ? c : ii(n)), o
            };
        if (rt.preferredLanguage = function(n) {
                return n && ft(n), u
            }, rt.cloakClassName = function() {
                return tt
            }, rt.fallbackLanguage = function(n) {
                if (n !== undefined && n !== null) {
                    if (et(n), e && t && t.length)
                        for (var i = 0, r = t.length; i < r; i++) ut[t[i]] || (ut[t[i]] = bt(t[i]));
                    rt.use(rt.use())
                }
                return p ? t[0] : t
            }, rt.useFallbackLanguage = function(n) {
                if (n !== undefined && n !== null)
                    if (n) {
                        var i = o(t, n);
                        i > -1 && (wt = i)
                    } else wt = 0
            }, rt.proposedLanguage = function() {
                return s
            }, rt.storage = function() {
                return yt
            }, rt.use = function(n) {
                var t, u;
                return n ? (t = d.defer(), v.$emit("$translateChangeStart", {
                    language: n
                }), u = at(n), u && (n = u), r[n] || !e || ut[n] ? (t.resolve(n), ni(n)) : (s = n, ut[n] = bt(n).then(function(i) {
                    return l(i.key, i.table), t.resolve(i.key), ni(i.key), s === n && (s = undefined), i
                }, function(n) {
                    s === n && (s = undefined);
                    v.$emit("$translateChangeError", {
                        language: n
                    });
                    t.reject(n);
                    v.$emit("$translateChangeEnd", {
                        language: n
                    })
                })), t.promise) : i
            }, rt.storageKey = function() {
                return ot()
            }, rt.isPostCompilingEnabled = function() {
                return ht
            }, rt.refresh = function(n) {
                function h() {
                    f.resolve();
                    v.$emit("$translateRefreshEnd", {
                        language: n
                    })
                }

                function c() {
                    f.reject();
                    v.$emit("$translateRefreshEnd", {
                        language: n
                    })
                }
                var f, o, s, u, a;
                if (!e) throw new Error("Couldn't refresh translation table, no loader registered!");
                if (f = d.defer(), v.$emit("$translateRefreshStart", {
                        language: n
                    }), n) r[n] ? bt(n).then(function(t) {
                    l(t.key, t.table);
                    n === i && ni(i);
                    h()
                }, c) : c();
                else {
                    if (o = [], s = {}, t && t.length)
                        for (u = 0, a = t.length; u < a; u++) o.push(bt(t[u])), s[t[u]] = !0;
                    i && !s[i] && o.push(bt(i));
                    d.all(o).then(function(n) {
                        angular.forEach(n, function(n) {
                            r[n.key] && delete r[n.key];
                            l(n.key, n.table)
                        });
                        i && ni(i);
                        h()
                    })
                }
                return f.promise
            }, rt.instant = function(n, e, o) {
                var a, c, y, s, h, l, p, v;
                if (n === null || angular.isUndefined(n)) return n;
                if (angular.isArray(n)) {
                    for (a = {}, c = 0, y = n.length; c < y; c++) a[n[c]] = rt.instant(n[c], e, o);
                    return a
                }
                if (angular.isString(n) && n.length < 1) return n;
                for (n && (n = lt.apply(n)), h = [], u && h.push(u), i && h.push(i), t && t.length && (h = h.concat(t)), l = 0, p = h.length; l < p; l++)
                    if (v = h[l], r[v] && typeof r[v][n] != "undefined" && (s = ei(n, e, o)), typeof s != "undefined") break;
                return s || s === "" || (s = pt.interpolate(n, e), f && !ct && (s = ti(n))), s
            }, rt.versionInfo = function() {
                return vt
            }, rt.loaderCache = function() {
                return c
            }, e && (angular.equals(r, {}) && rt.use(rt.use()), t && t.length))
            for (oi = function(n) {
                    return l(n.key, n.table), v.$emit("$translateChangeEnd", {
                        language: n.key
                    }), n
                }, gt = 0, si = t.length; gt < si; gt++) ut[t[gt]] = bt(t[gt]).then(oi);
        return rt
    }]
}]);
angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation", ["$interpolate", function(n) {
    var t = {},
        u, f = "default",
        i = null,
        r = {
            escaped: function(n) {
                var i = {};
                for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (i[t] = angular.element("<div><\/div>").text(n[t]).html());
                return i
            }
        },
        e = function(n) {
            return angular.isFunction(r[i]) ? r[i](n) : n
        };
    return t.setLocale = function(n) {
        u = n
    }, t.getInterpolationIdentifier = function() {
        return f
    }, t.useSanitizeValueStrategy = function(n) {
        return i = n, this
    }, t.interpolate = function(t, r) {
        return i && (r = e(r)), n(t)(r || {})
    }, t
}]);
angular.module("pascalprecht.translate").constant("$STORAGE_KEY", "NG_TRANSLATE_LANG_KEY");
angular.module("pascalprecht.translate").directive("translate", ["$translate", "$q", "$interpolate", "$compile", "$parse", "$rootScope", function(n, t, i, r, u, f) {
    return {
        restrict: "AE",
        scope: !0,
        compile: function(t, e) {
            var o = e.translateValues ? e.translateValues : undefined,
                s = e.translateInterpolation ? e.translateInterpolation : undefined,
                h = t[0].outerHTML.match(/translate-value-+/i),
                c = "^(.*)(" + i.startSymbol() + ".*" + i.endSymbol() + ")(.*)",
                l = "^(.*)" + i.startSymbol() + "(.*)" + i.endSymbol() + "(.*)";
            return function(t, a, v) {
                var b, d, w, nt;
                t.interpolateParams = {};
                t.preText = "";
                t.postText = "";
                var y = {},
                    k = function(n) {
                        if (angular.equals(n, "") || !angular.isDefined(n)) {
                            var r = a.text().match(c);
                            angular.isArray(r) ? (t.preText = r[1], t.postText = r[3], y.translate = i(r[2])(t.$parent), watcherMatches = a.text().match(l), angular.isArray(watcherMatches) && watcherMatches[2] && watcherMatches[2].length && t.$watch(watcherMatches[2], function(n) {
                                y.translate = n;
                                p()
                            })) : y.translate = a.text().replace(/^\s+|\s+$/g, "")
                        } else y.translate = n;
                        p()
                    },
                    tt = function(n) {
                        v.$observe(n, function(t) {
                            y[n] = t;
                            p()
                        })
                    };
                v.$observe("translate", function(n) {
                    k(n)
                });
                for (b in v) v.hasOwnProperty(b) && b.substr(0, 13) === "translateAttr" && tt(b);
                if (v.$observe("translateDefault", function(n) {
                        t.defaultText = n
                    }), o && v.$observe("translateValues", function(n) {
                        n && t.$parent.$watch(function() {
                            angular.extend(t.interpolateParams, u(n)(t.$parent))
                        })
                    }), h) {
                    d = function(n) {
                        v.$observe(n, function(i) {
                            var r = angular.lowercase(n.substr(14, 1)) + n.substr(15);
                            t.interpolateParams[r] = i
                        })
                    };
                    for (w in v) Object.prototype.hasOwnProperty.call(v, w) && w.substr(0, 14) === "translateValue" && w !== "translateValues" && d(w)
                }
                var p = function() {
                        for (var n in y) y.hasOwnProperty(n) && y[n] && it(n, y[n], t, t.interpolateParams)
                    },
                    it = function(t, i, r, u) {
                        n(i, u, s).then(function(n) {
                            g(n, r, !0, t)
                        }, function(n) {
                            g(n, r, !1, t)
                        })
                    },
                    g = function(t, i, u, f) {
                        var s;
                        if (f === "translate") {
                            u || typeof i.defaultText == "undefined" || (t = i.defaultText);
                            a.html(i.preText + t + i.postText);
                            var h = n.isPostCompilingEnabled(),
                                o = typeof e.translateCompile != "undefined",
                                c = o && e.translateCompile !== "false";
                            (h && !o || c) && r(a.contents())(i)
                        } else u || typeof i.defaultText == "undefined" || (t = i.defaultText), s = v.$attr[f].substr(15), a.attr(s, t)
                    };
                t.$watch("interpolateParams", p, !0);
                nt = f.$on("$translateChangeSuccess", p);
                a.text().length && k("");
                p();
                t.$on("$destroy", nt)
            }
        }
    }
}]);
angular.module("pascalprecht.translate").directive("translateCloak", ["$rootScope", "$translate", function(n, t) {
    return {
        compile: function(i) {
            var r = function() {
                    i.addClass(t.cloakClassName())
                },
                u = function() {
                    i.removeClass(t.cloakClassName())
                },
                f = n.$on("$translateChangeEnd", function() {
                    u();
                    f();
                    f = null
                });
            return r(),
                function(n, i, f) {
                    f.translateCloak && f.translateCloak.length && f.$observe("translateCloak", function(n) {
                        t(n).then(u, r)
                    })
                }
        }
    }
}]);
angular.module("pascalprecht.translate").filter("translate", ["$parse", "$translate", function(n, t) {
    var i = function(i, r, u) {
        return angular.isObject(r) || (r = n(r)(this)), t.instant(i, r, u)
    };
    return i.$stateful = !0, i
}]);

angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader", ["$q", "$http", function(n, t) {
    return function(i) {
        if (!i || !angular.isString(i.prefix) || !angular.isString(i.suffix)) throw new Error("Couldn't load static files, no prefix or suffix specified!");
        var r = n.defer();
        return t(angular.extend({
            url: [i.prefix, i.key, i.suffix].join(""),
            method: "GET",
            params: ""
        }, i.$http)).success(function(n) {
            r.resolve(n)
        }).error(function() {
            r.reject(i.key)
        }), r.promise
    }
}]);

angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function(a, b, c) {
    function d(a) {
        for (var b in a)
            if (void 0 !== f.style[b]) return a[b]
    }
    var e = function(d, f, g) {
            g = g || {};
            var h = a.defer(),
                i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"],
                j = function() {
                    c.$apply(function() {
                        d.unbind(i, j), h.resolve(d)
                    })
                };
            return i && d.bind(i, j), b(function() {
                angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
            }), h.promise.cancel = function() {
                i && d.unbind(i, j), h.reject("Transition cancelled")
            }, h.promise
        },
        f = document.createElement("trans"),
        g = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend"
        },
        h = {
            WebkitTransition: "webkitAnimationEnd",
            MozTransition: "animationend",
            OTransition: "oAnimationEnd",
            transition: "animationend"
        };
    return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
}]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition", function(a) {
    return {
        link: function(b, c, d) {
            function e(b) {
                function d() {
                    j === e && (j = void 0)
                }
                var e = a(c, b);
                return j && j.cancel(), j = e, e.then(d, d), e
            }

            function f() {
                k ? (k = !1, g()) : (c.removeClass("collapse").addClass("collapsing"), e({
                    height: c[0].scrollHeight + "px"
                }).then(g))
            }

            function g() {
                c.removeClass("collapsing"), c.addClass("collapse in"), c.css({
                    height: "auto"
                })
            }

            function h() {
                if (k) k = !1, i(), c.css({
                    height: 0
                });
                else {
                    c.css({
                        height: c[0].scrollHeight + "px"
                    }); {
                        c[0].offsetWidth
                    }
                    c.removeClass("collapse in").addClass("collapsing"), e({
                        height: 0
                    }).then(i)
                }
            }

            function i() {
                c.removeClass("collapsing"), c.addClass("collapse")
            }
            var j, k = !0;
            b.$watch(d.collapse, function(a) {
                a ? h() : f()
            })
        }
    }
}]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
    closeOthers: !0
}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function(a, b, c) {
    this.groups = [], this.closeOthers = function(d) {
        var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
        e && angular.forEach(this.groups, function(a) {
            a !== d && (a.isOpen = !1)
        })
    }, this.addGroup = function(a) {
        var b = this;
        this.groups.push(a), a.$on("$destroy", function() {
            b.removeGroup(a)
        })
    }, this.removeGroup = function(a) {
        var b = this.groups.indexOf(a); - 1 !== b && this.groups.splice(b, 1)
    }
}]).directive("accordion", function() {
    return {
        restrict: "EA",
        controller: "AccordionController",
        transclude: !0,
        replace: !1,
        templateUrl: "template/accordion/accordion.html"
    }
}).directive("accordionGroup", function() {
    return {
        require: "^accordion",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/accordion/accordion-group.html",
        scope: {
            heading: "@",
            isOpen: "=?",
            isDisabled: "=?"
        },
        controller: function() {
            this.setHeading = function(a) {
                this.heading = a
            }
        },
        link: function(a, b, c, d) {
            d.addGroup(a), a.$watch("isOpen", function(b) {
                b && d.closeOthers(a)
            }), a.toggleOpen = function() {
                a.isDisabled || (a.isOpen = !a.isOpen)
            }
        }
    }
}).directive("accordionHeading", function() {
    return {
        restrict: "EA",
        transclude: !0,
        template: "",
        replace: !0,
        require: "^accordionGroup",
        link: function(a, b, c, d, e) {
            d.setHeading(e(a, function() {}))
        }
    }
}).directive("accordionTransclude", function() {
    return {
        require: "^accordionGroup",
        link: function(a, b, c, d) {
            a.$watch(function() {
                return d[c.accordionTransclude]
            }, function(a) {
                a && (b.html(""), b.append(a))
            })
        }
    }
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function(a, b) {
    a.closeable = "close" in b, this.close = a.close
}]).directive("alert", function() {
    return {
        restrict: "EA",
        controller: "AlertController",
        templateUrl: "template/alert/alert.html",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@",
            close: "&"
        }
    }
}).directive("dismissOnTimeout", ["$timeout", function(a) {
    return {
        require: "alert",
        link: function(b, c, d, e) {
            a(function() {
                e.close()
            }, parseInt(d.dismissOnTimeout, 10))
        }
    }
}]), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function() {
    return function(a, b, c) {
        b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function(a) {
            b.html(a || "")
        })
    }
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("ButtonsController", ["buttonConfig", function(a) {
    this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
}]).directive("btnRadio", function() {
    return {
        require: ["btnRadio", "ngModel"],
        controller: "ButtonsController",
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f.$render = function() {
                b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
            }, b.bind(e.toggleEvent, function() {
                var d = b.hasClass(e.activeClass);
                (!d || angular.isDefined(c.uncheckable)) && a.$apply(function() {
                    f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render()
                })
            })
        }
    }
}).directive("btnCheckbox", function() {
    return {
        require: ["btnCheckbox", "ngModel"],
        controller: "ButtonsController",
        link: function(a, b, c, d) {
            function e() {
                return g(c.btnCheckboxTrue, !0)
            }

            function f() {
                return g(c.btnCheckboxFalse, !1)
            }

            function g(b, c) {
                var d = a.$eval(b);
                return angular.isDefined(d) ? d : c
            }
            var h = d[0],
                i = d[1];
            i.$render = function() {
                b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
            }, b.bind(h.toggleEvent, function() {
                a.$apply(function() {
                    i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
                })
            })
        }
    }
}), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$interval", "$transition", function(a, b, c, d) {
    function e() {
        f();
        var b = +a.interval;
        !isNaN(b) && b > 0 && (h = c(g, b))
    }

    function f() {
        h && (c.cancel(h), h = null)
    }

    function g() {
        var b = +a.interval;
        i && !isNaN(b) && b > 0 ? a.next() : a.pause()
    }
    var h, i, j = this,
        k = j.slides = a.slides = [],
        l = -1;
    j.currentSlide = null;
    var m = !1;
    j.select = a.select = function(c, f) {
        function g() {
            if (!m) {
                if (j.currentSlide && angular.isString(f) && !a.noTransition && c.$element) {
                    c.$element.addClass(f); {
                        c.$element[0].offsetWidth
                    }
                    angular.forEach(k, function(a) {
                            angular.extend(a, {
                                direction: "",
                                entering: !1,
                                leaving: !1,
                                active: !1
                            })
                        }), angular.extend(c, {
                            direction: f,
                            active: !0,
                            entering: !0
                        }), angular.extend(j.currentSlide || {}, {
                            direction: f,
                            leaving: !0
                        }), a.$currentTransition = d(c.$element, {}),
                        function(b, c) {
                            a.$currentTransition.then(function() {
                                h(b, c)
                            }, function() {
                                h(b, c)
                            })
                        }(c, j.currentSlide)
                } else h(c, j.currentSlide);
                j.currentSlide = c, l = i, e()
            }
        }

        function h(b, c) {
            angular.extend(b, {
                direction: "",
                active: !0,
                leaving: !1,
                entering: !1
            }), angular.extend(c || {}, {
                direction: "",
                active: !1,
                leaving: !1,
                entering: !1
            }), a.$currentTransition = null
        }
        var i = k.indexOf(c);
        void 0 === f && (f = i > l ? "next" : "prev"), c && c !== j.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g())
    }, a.$on("$destroy", function() {
        m = !0
    }), j.indexOfSlide = function(a) {
        return k.indexOf(a)
    }, a.next = function() {
        var b = (l + 1) % k.length;
        return a.$currentTransition ? void 0 : j.select(k[b], "next")
    }, a.prev = function() {
        var b = 0 > l - 1 ? k.length - 1 : l - 1;
        return a.$currentTransition ? void 0 : j.select(k[b], "prev")
    }, a.isActive = function(a) {
        return j.currentSlide === a
    }, a.$watch("interval", e), a.$on("$destroy", f), a.play = function() {
        i || (i = !0, e())
    }, a.pause = function() {
        a.noPause || (i = !1, f())
    }, j.addSlide = function(b, c) {
        b.$element = c, k.push(b), 1 === k.length || b.active ? (j.select(k[k.length - 1]), 1 == k.length && a.play()) : b.active = !1
    }, j.removeSlide = function(a) {
        var b = k.indexOf(a);
        k.splice(b, 1), k.length > 0 && a.active ? j.select(b >= k.length ? k[b - 1] : k[b]) : l > b && l--
    }
}]).directive("carousel", [function() {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        controller: "CarouselController",
        require: "carousel",
        templateUrl: "template/carousel/carousel.html",
        scope: {
            interval: "=",
            noTransition: "=",
            noPause: "="
        }
    }
}]).directive("slide", function() {
    return {
        require: "^carousel",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/carousel/slide.html",
        scope: {
            active: "=?"
        },
        link: function(a, b, c, d) {
            d.addSlide(a, b), a.$on("$destroy", function() {
                d.removeSlide(a)
            }), a.$watch("active", function(b) {
                b && d.select(a)
            })
        }
    }
}), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter", function(a, b) {
    function c(a) {
        var c = [],
            d = a.split("");
        return angular.forEach(e, function(b, e) {
            var f = a.indexOf(e);
            if (f > -1) {
                a = a.split(""), d[f] = "(" + b.regex + ")", a[f] = "$";
                for (var g = f + 1, h = f + e.length; h > g; g++) d[g] = "", a[g] = "$";
                a = a.join(""), c.push({
                    index: f,
                    apply: b.apply
                })
            }
        }), {
            regex: new RegExp("^" + d.join("") + "$"),
            map: b(c, "index")
        }
    }

    function d(a, b, c) {
        return 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0
    }
    this.parsers = {};
    var e = {
        yyyy: {
            regex: "\\d{4}",
            apply: function(a) {
                this.year = +a
            }
        },
        yy: {
            regex: "\\d{2}",
            apply: function(a) {
                this.year = +a + 2e3
            }
        },
        y: {
            regex: "\\d{1,4}",
            apply: function(a) {
                this.year = +a
            }
        },
        MMMM: {
            regex: a.DATETIME_FORMATS.MONTH.join("|"),
            apply: function(b) {
                this.month = a.DATETIME_FORMATS.MONTH.indexOf(b)
            }
        },
        MMM: {
            regex: a.DATETIME_FORMATS.SHORTMONTH.join("|"),
            apply: function(b) {
                this.month = a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)
            }
        },
        MM: {
            regex: "0[1-9]|1[0-2]",
            apply: function(a) {
                this.month = a - 1
            }
        },
        M: {
            regex: "[1-9]|1[0-2]",
            apply: function(a) {
                this.month = a - 1
            }
        },
        dd: {
            regex: "[0-2][0-9]{1}|3[0-1]{1}",
            apply: function(a) {
                this.date = +a
            }
        },
        d: {
            regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
            apply: function(a) {
                this.date = +a
            }
        },
        EEEE: {
            regex: a.DATETIME_FORMATS.DAY.join("|")
        },
        EEE: {
            regex: a.DATETIME_FORMATS.SHORTDAY.join("|")
        }
    };
    this.parse = function(b, e) {
        if (!angular.isString(b) || !e) return b;
        e = a.DATETIME_FORMATS[e] || e, this.parsers[e] || (this.parsers[e] = c(e));
        var f = this.parsers[e],
            g = f.regex,
            h = f.map,
            i = b.match(g);
        if (i && i.length) {
            for (var j, k = {
                    year: 1900,
                    month: 0,
                    date: 1,
                    hours: 0
                }, l = 1, m = i.length; m > l; l++) {
                var n = h[l - 1];
                n.apply && n.apply.call(k, i[l])
            }
            return d(k.year, k.month, k.date) && (j = new Date(k.year, k.month, k.date, k.hours)), j
        }
    }
}]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function(a, b) {
    function c(a, c) {
        return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
    }

    function d(a) {
        return "static" === (c(a, "position") || "static")
    }
    var e = function(b) {
        for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);) e = e.offsetParent;
        return e || c
    };
    return {
        position: function(b) {
            var c = this.offset(b),
                d = {
                    top: 0,
                    left: 0
                },
                f = e(b[0]);
            f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
            var g = b[0].getBoundingClientRect();
            return {
                width: g.width || b.prop("offsetWidth"),
                height: g.height || b.prop("offsetHeight"),
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offset: function(c) {
            var d = c[0].getBoundingClientRect();
            return {
                width: d.width || c.prop("offsetWidth"),
                height: d.height || c.prop("offsetHeight"),
                top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
                left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
            }
        },
        positionElements: function(a, b, c, d) {
            var e, f, g, h, i = c.split("-"),
                j = i[0],
                k = i[1] || "center";
            e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
            var l = {
                    center: function() {
                        return e.left + e.width / 2 - f / 2
                    },
                    left: function() {
                        return e.left
                    },
                    right: function() {
                        return e.left + e.width
                    }
                },
                m = {
                    center: function() {
                        return e.top + e.height / 2 - g / 2
                    },
                    top: function() {
                        return e.top
                    },
                    bottom: function() {
                        return e.top + e.height
                    }
                };
            switch (j) {
                case "right":
                    h = {
                        top: m[k](),
                        left: l[j]()
                    };
                    break;
                case "left":
                    h = {
                        top: m[k](),
                        left: e.left - f
                    };
                    break;
                case "bottom":
                    h = {
                        top: m[j](),
                        left: l[k]()
                    };
                    break;
                default:
                    h = {
                        top: e.top - g,
                        left: l[k]()
                    }
            }
            return h
        }
    }
}]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {
    formatDay: "dd",
    formatMonth: "MMMM",
    formatYear: "yyyy",
    formatDayHeader: "EEE",
    formatDayTitle: "MMMM yyyy",
    formatMonthTitle: "yyyy",
    datepickerMode: "day",
    minMode: "day",
    maxMode: "year",
    showWeeks: !0,
    startingDay: 0,
    yearRange: 20,
    minDate: null,
    maxDate: null
}).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function(a, b, c, d, e, f, g, h) {
    var i = this,
        j = {
            $setViewValue: angular.noop
        };
    this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange"], function(c, e) {
        i[c] = angular.isDefined(b[c]) ? 8 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : h[c]
    }), angular.forEach(["minDate", "maxDate"], function(d) {
        b[d] ? a.$parent.$watch(c(b[d]), function(a) {
            i[d] = a ? new Date(a) : null, i.refreshView()
        }) : i[d] = h[d] ? new Date(h[d]) : null
    }), a.datepickerMode = a.datepickerMode || h.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), this.activeDate = angular.isDefined(b.initDate) ? a.$parent.$eval(b.initDate) : new Date, a.isActive = function(b) {
        return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1
    }, this.init = function(a) {
        j = a, j.$render = function() {
            i.render()
        }
    }, this.render = function() {
        if (j.$modelValue) {
            var a = new Date(j.$modelValue),
                b = !isNaN(a);
            b ? this.activeDate = a : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), j.$setValidity("date", b)
        }
        this.refreshView()
    }, this.refreshView = function() {
        if (this.element) {
            this._refreshView();
            var a = j.$modelValue ? new Date(j.$modelValue) : null;
            j.$setValidity("date-disabled", !a || this.element && !this.isDisabled(a))
        }
    }, this.createDateObject = function(a, b) {
        var c = j.$modelValue ? new Date(j.$modelValue) : null;
        return {
            date: a,
            label: g(a, b),
            selected: c && 0 === this.compare(a, c),
            disabled: this.isDisabled(a),
            current: 0 === this.compare(a, new Date)
        }
    }, this.isDisabled = function(c) {
        return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
            date: c,
            mode: a.datepickerMode
        })
    }, this.split = function(a, b) {
        for (var c = []; a.length > 0;) c.push(a.splice(0, b));
        return c
    }, a.select = function(b) {
        if (a.datepickerMode === i.minMode) {
            var c = j.$modelValue ? new Date(j.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
            c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render()
        } else i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1]
    }, a.move = function(a) {
        var b = i.activeDate.getFullYear() + a * (i.step.years || 0),
            c = i.activeDate.getMonth() + a * (i.step.months || 0);
        i.activeDate.setFullYear(b, c, 1), i.refreshView()
    }, a.toggleMode = function(b) {
        b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b])
    }, a.keys = {
        13: "enter",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };
    var k = function() {
        e(function() {
            i.element[0].focus()
        }, 0, !1)
    };
    a.$on("datepicker.focus", k), a.keydown = function(b) {
        var c = a.keys[b.which];
        if (c && !b.shiftKey && !b.altKey)
            if (b.preventDefault(), b.stopPropagation(), "enter" === c || "space" === c) {
                if (i.isDisabled(i.activeDate)) return;
                a.select(i.activeDate), k()
            } else !b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode("up" === c ? 1 : -1), k())
    }
}]).directive("datepicker", function() {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/datepicker.html",
        scope: {
            datepickerMode: "=?",
            dateDisabled: "&"
        },
        require: ["datepicker", "?^ngModel"],
        controller: "DatepickerController",
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f)
        }
    }
}).directive("daypicker", ["dateFilter", function(a) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/day.html",
        require: "^datepicker",
        link: function(b, c, d, e) {
            function f(a, b) {
                return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29
            }

            function g(a, b) {
                var c = new Array(b),
                    d = new Date(a),
                    e = 0;
                for (d.setHours(12); b > e;) c[e++] = new Date(d), d.setDate(d.getDate() + 1);
                return c
            }

            function h(a) {
                var b = new Date(a);
                b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                var c = b.getTime();
                return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
            }
            b.showWeeks = e.showWeeks, e.step = {
                months: 1
            }, e.element = c;
            var i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            e._refreshView = function() {
                var c = e.activeDate.getFullYear(),
                    d = e.activeDate.getMonth(),
                    f = new Date(c, d, 1),
                    i = e.startingDay - f.getDay(),
                    j = i > 0 ? 7 - i : -i,
                    k = new Date(f);
                j > 0 && k.setDate(-j + 1);
                for (var l = g(k, 42), m = 0; 42 > m; m++) l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {
                    secondary: l[m].getMonth() !== d,
                    uid: b.uniqueId + "-" + m
                });
                b.labels = new Array(7);
                for (var n = 0; 7 > n; n++) b.labels[n] = {
                    abbr: a(l[n].date, e.formatDayHeader),
                    full: a(l[n].date, "EEEE")
                };
                if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
                    b.weekNumbers = [];
                    for (var o = h(b.rows[0][0].date), p = b.rows.length; b.weekNumbers.push(o++) < p;);
                }
            }, e.compare = function(a, b) {
                return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
            }, e.handleKeyDown = function(a) {
                var b = e.activeDate.getDate();
                if ("left" === a) b -= 1;
                else if ("up" === a) b -= 7;
                else if ("right" === a) b += 1;
                else if ("down" === a) b += 7;
                else if ("pageup" === a || "pagedown" === a) {
                    var c = e.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
                    e.activeDate.setMonth(c, 1), b = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), b)
                } else "home" === a ? b = 1 : "end" === a && (b = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
                e.activeDate.setDate(b)
            }, e.refreshView()
        }
    }
}]).directive("monthpicker", ["dateFilter", function(a) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/month.html",
        require: "^datepicker",
        link: function(b, c, d, e) {
            e.step = {
                years: 1
            }, e.element = c, e._refreshView = function() {
                for (var c = new Array(12), d = e.activeDate.getFullYear(), f = 0; 12 > f; f++) c[f] = angular.extend(e.createDateObject(new Date(d, f, 1), e.formatMonth), {
                    uid: b.uniqueId + "-" + f
                });
                b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(c, 3)
            }, e.compare = function(a, b) {
                return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
            }, e.handleKeyDown = function(a) {
                var b = e.activeDate.getMonth();
                if ("left" === a) b -= 1;
                else if ("up" === a) b -= 3;
                else if ("right" === a) b += 1;
                else if ("down" === a) b += 3;
                else if ("pageup" === a || "pagedown" === a) {
                    var c = e.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
                    e.activeDate.setFullYear(c)
                } else "home" === a ? b = 0 : "end" === a && (b = 11);
                e.activeDate.setMonth(b)
            }, e.refreshView()
        }
    }
}]).directive("yearpicker", ["dateFilter", function() {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/year.html",
        require: "^datepicker",
        link: function(a, b, c, d) {
            function e(a) {
                return parseInt((a - 1) / f, 10) * f + 1
            }
            var f = d.yearRange;
            d.step = {
                years: f
            }, d.element = b, d._refreshView = function() {
                for (var b = new Array(f), c = 0, g = e(d.activeDate.getFullYear()); f > c; c++) b[c] = angular.extend(d.createDateObject(new Date(g + c, 0, 1), d.formatYear), {
                    uid: a.uniqueId + "-" + c
                });
                a.title = [b[0].label, b[f - 1].label].join(" - "), a.rows = d.split(b, 5)
            }, d.compare = function(a, b) {
                return a.getFullYear() - b.getFullYear()
            }, d.handleKeyDown = function(a) {
                var b = d.activeDate.getFullYear();
                "left" === a ? b -= 1 : "up" === a ? b -= 5 : "right" === a ? b += 1 : "down" === a ? b += 5 : "pageup" === a || "pagedown" === a ? b += ("pageup" === a ? -1 : 1) * d.step.years : "home" === a ? b = e(d.activeDate.getFullYear()) : "end" === a && (b = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(b)
            }, d.refreshView()
        }
    }
}]).constant("datepickerPopupConfig", {
    datepickerPopup: "yyyy-MM-dd",
    currentText: "Today",
    clearText: "Clear",
    closeText: "Done",
    closeOnDateSelection: !0,
    appendToBody: !1,
    showButtonBar: !0
}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", function(a, b, c, d, e, f, g) {
    return {
        restrict: "EA",
        require: "ngModel",
        scope: {
            isOpen: "=?",
            currentText: "@",
            clearText: "@",
            closeText: "@",
            dateDisabled: "&"
        },
        link: function(h, i, j, k) {
            function l(a) {
                return a.replace(/([A-Z])/g, function(a) {
                    return "-" + a.toLowerCase()
                })
            }

            function m(a) {
                if (a) {
                    if (angular.isDate(a) && !isNaN(a)) return k.$setValidity("date", !0), a;
                    if (angular.isString(a)) {
                        var b = f.parse(a, n) || new Date(a);
                        return isNaN(b) ? void k.$setValidity("date", !1) : (k.$setValidity("date", !0), b)
                    }
                    return void k.$setValidity("date", !1)
                }
                return k.$setValidity("date", !0), null
            }
            var n, o = angular.isDefined(j.closeOnDateSelection) ? h.$parent.$eval(j.closeOnDateSelection) : g.closeOnDateSelection,
                p = angular.isDefined(j.datepickerAppendToBody) ? h.$parent.$eval(j.datepickerAppendToBody) : g.appendToBody;
            h.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$parent.$eval(j.showButtonBar) : g.showButtonBar, h.getText = function(a) {
                return h[a + "Text"] || g[a + "Text"]
            }, j.$observe("datepickerPopup", function(a) {
                n = a || g.datepickerPopup, k.$render()
            });
            var q = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
            q.attr({
                "ng-model": "date",
                "ng-change": "dateSelection()"
            });
            var r = angular.element(q.children()[0]);
            j.datepickerOptions && angular.forEach(h.$parent.$eval(j.datepickerOptions), function(a, b) {
                r.attr(l(b), a)
            }), h.watchData = {}, angular.forEach(["minDate", "maxDate", "datepickerMode"], function(a) {
                if (j[a]) {
                    var c = b(j[a]);
                    if (h.$parent.$watch(c, function(b) {
                            h.watchData[a] = b
                        }), r.attr(l(a), "watchData." + a), "datepickerMode" === a) {
                        var d = c.assign;
                        h.$watch("watchData." + a, function(a, b) {
                            a !== b && d(h.$parent, a)
                        })
                    }
                }
            }), j.dateDisabled && r.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), k.$parsers.unshift(m), h.dateSelection = function(a) {
                angular.isDefined(a) && (h.date = a), k.$setViewValue(h.date), k.$render(), o && (h.isOpen = !1, i[0].focus())
            }, i.bind("input change keyup", function() {
                h.$apply(function() {
                    h.date = k.$modelValue
                })
            }), k.$render = function() {
                var a = k.$viewValue ? e(k.$viewValue, n) : "";
                i.val(a), h.date = m(k.$modelValue)
            };
            var s = function(a) {
                    h.isOpen && a.target !== i[0] && h.$apply(function() {
                        h.isOpen = !1
                    })
                },
                t = function(a) {
                    h.keydown(a)
                };
            i.bind("keydown", t), h.keydown = function(a) {
                27 === a.which ? (a.preventDefault(), a.stopPropagation(), h.close()) : 40 !== a.which || h.isOpen || (h.isOpen = !0)
            }, h.$watch("isOpen", function(a) {
                a ? (h.$broadcast("datepicker.focus"), h.position = p ? d.offset(i) : d.position(i), h.position.top = h.position.top + i.prop("offsetHeight"), c.bind("click", s)) : c.unbind("click", s)
            }), h.select = function(a) {
                if ("today" === a) {
                    var b = new Date;
                    angular.isDate(k.$modelValue) ? (a = new Date(k.$modelValue), a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0))
                }
                h.dateSelection(a)
            }, h.close = function() {
                h.isOpen = !1, i[0].focus()
            };
            var u = a(q)(h);
            q.remove(), p ? c.find("body").append(u) : i.after(u), h.$on("$destroy", function() {
                u.remove(), i.unbind("keydown", t), c.unbind("click", s)
            })
        }
    }
}]).directive("datepickerPopupWrap", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        templateUrl: "template/datepicker/popup.html",
        link: function(a, b) {
            b.bind("click", function(a) {
                a.preventDefault(), a.stopPropagation()
            })
        }
    }
}), angular.module("ui.bootstrap.dropdown", []).constant("dropdownConfig", {
    openClass: "open"
}).service("dropdownService", ["$document", function(a) {
    var b = null;
    this.open = function(e) {
        b || (a.bind("click", c), a.bind("keydown", d)), b && b !== e && (b.isOpen = !1), b = e
    }, this.close = function(e) {
        b === e && (b = null, a.unbind("click", c), a.unbind("keydown", d))
    };
    var c = function(a) {
            if (b) {
                var c = b.getToggleElement();
                a && c && c[0].contains(a.target) || b.$apply(function() {
                    b.isOpen = !1
                })
            }
        },
        d = function(a) {
            27 === a.which && (b.focusToggleElement(), c())
        }
}]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", function(a, b, c, d, e, f) {
    var g, h = this,
        i = a.$new(),
        j = d.openClass,
        k = angular.noop,
        l = b.onToggle ? c(b.onToggle) : angular.noop;
    this.init = function(d) {
        h.$element = d, b.isOpen && (g = c(b.isOpen), k = g.assign, a.$watch(g, function(a) {
            i.isOpen = !!a
        }))
    }, this.toggle = function(a) {
        return i.isOpen = arguments.length ? !!a : !i.isOpen
    }, this.isOpen = function() {
        return i.isOpen
    }, i.getToggleElement = function() {
        return h.toggleElement
    }, i.focusToggleElement = function() {
        h.toggleElement && h.toggleElement[0].focus()
    }, i.$watch("isOpen", function(b, c) {
        f[b ? "addClass" : "removeClass"](h.$element, j), b ? (i.focusToggleElement(), e.open(i)) : e.close(i), k(a, b), angular.isDefined(b) && b !== c && l(a, {
            open: !!b
        })
    }), a.$on("$locationChangeSuccess", function() {
        i.isOpen = !1
    }), a.$on("$destroy", function() {
        i.$destroy()
    })
}]).directive("dropdown", function() {
    return {
        controller: "DropdownController",
        link: function(a, b, c, d) {
            d.init(b)
        }
    }
}).directive("dropdownToggle", function() {
    return {
        require: "?^dropdown",
        link: function(a, b, c, d) {
            if (d) {
                d.toggleElement = b;
                var e = function(e) {
                    e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function() {
                        d.toggle()
                    })
                };
                b.bind("click", e), b.attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), a.$watch(d.isOpen, function(a) {
                    b.attr("aria-expanded", !!a)
                }), a.$on("$destroy", function() {
                    b.unbind("click", e)
                })
            }
        }
    }
}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function() {
    return {
        createNew: function() {
            var a = [];
            return {
                add: function(b, c) {
                    a.push({
                        key: b,
                        value: c
                    })
                },
                get: function(b) {
                    for (var c = 0; c < a.length; c++)
                        if (b == a[c].key) return a[c]
                },
                keys: function() {
                    for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
                    return b
                },
                top: function() {
                    return a[a.length - 1]
                },
                remove: function(b) {
                    for (var c = -1, d = 0; d < a.length; d++)
                        if (b == a[d].key) {
                            c = d;
                            break
                        }
                    return a.splice(c, 1)[0]
                },
                removeTop: function() {
                    return a.splice(a.length - 1, 1)[0]
                },
                length: function() {
                    return a.length
                }
            }
        }
    }
}).directive("modalBackdrop", ["$timeout", function(a) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/modal/backdrop.html",
        link: function(b, c, d) {
            b.backdropClass = d.backdropClass || "", b.animate = !1, a(function() {
                b.animate = !0
            })
        }
    }
}]).directive("modalWindow", ["$modalStack", "$timeout", function(a, b) {
    return {
        restrict: "EA",
        scope: {
            index: "@",
            animate: "="
        },
        replace: !0,
        transclude: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/modal/window.html"
        },
        link: function(c, d, e) {
            d.addClass(e.windowClass || ""), c.size = e.size, b(function() {
                c.animate = !0, d[0].querySelectorAll("[autofocus]").length || d[0].focus()
            }), c.close = function(b) {
                var c = a.getTop();
                c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
            }
        }
    }
}]).directive("modalTransclude", function() {
    return {
        link: function(a, b, c, d, e) {
            e(a.$parent, function(a) {
                b.empty(), b.append(a)
            })
        }
    }
}).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function(a, b, c, d, e, f) {
    function g() {
        for (var a = -1, b = n.keys(), c = 0; c < b.length; c++) n.get(b[c]).value.backdrop && (a = c);
        return a
    }

    function h(a) {
        var b = c.find("body").eq(0),
            d = n.get(a).value;
        n.remove(a), j(d.modalDomEl, d.modalScope, 300, function() {
            d.modalScope.$destroy(), b.toggleClass(m, n.length() > 0), i()
        })
    }

    function i() {
        if (k && -1 == g()) {
            var a = l;
            j(k, l, 150, function() {
                a.$destroy(), a = null
            }), k = void 0, l = void 0
        }
    }

    function j(c, d, e, f) {
        function g() {
            g.done || (g.done = !0, c.remove(), f && f())
        }
        d.animate = !1;
        var h = a.transitionEndEventName;
        if (h) {
            var i = b(g, e);
            c.bind(h, function() {
                b.cancel(i), g(), d.$apply()
            })
        } else b(g)
    }
    var k, l, m = "modal-open",
        n = f.createNew(),
        o = {};
    return e.$watch(g, function(a) {
        l && (l.index = a)
    }), c.bind("keydown", function(a) {
        var b;
        27 === a.which && (b = n.top(), b && b.value.keyboard && (a.preventDefault(), e.$apply(function() {
            o.dismiss(b.key, "escape key press")
        })))
    }), o.open = function(a, b) {
        n.add(a, {
            deferred: b.deferred,
            modalScope: b.scope,
            backdrop: b.backdrop,
            keyboard: b.keyboard
        });
        var f = c.find("body").eq(0),
            h = g();
        if (h >= 0 && !k) {
            l = e.$new(!0), l.index = h;
            var i = angular.element("<div modal-backdrop></div>");
            i.attr("backdrop-class", b.backdropClass), k = d(i)(l), f.append(k)
        }
        var j = angular.element("<div modal-window></div>");
        j.attr({
            "template-url": b.windowTemplateUrl,
            "window-class": b.windowClass,
            size: b.size,
            index: n.length() - 1,
            animate: "animate"
        }).html(b.content);
        var o = d(j)(b.scope);
        n.top().value.modalDomEl = o, f.append(o), f.addClass(m)
    }, o.close = function(a, b) {
        var c = n.get(a);
        c && (c.value.deferred.resolve(b), h(a))
    }, o.dismiss = function(a, b) {
        var c = n.get(a);
        c && (c.value.deferred.reject(b), h(a))
    }, o.dismissAll = function(a) {
        for (var b = this.getTop(); b;) this.dismiss(b.key, a), b = this.getTop()
    }, o.getTop = function() {
        return n.top()
    }, o
}]).provider("$modal", function() {
    var a = {
        options: {
            backdrop: !0,
            keyboard: !0
        },
        $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function(b, c, d, e, f, g, h) {
            function i(a) {
                return a.template ? d.when(a.template) : e.get(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl, {
                    cache: f
                }).then(function(a) {
                    return a.data
                })
            }

            function j(a) {
                var c = [];
                return angular.forEach(a, function(a) {
                    (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
                }), c
            }
            var k = {};
            return k.open = function(b) {
                var e = d.defer(),
                    f = d.defer(),
                    k = {
                        result: e.promise,
                        opened: f.promise,
                        close: function(a) {
                            h.close(k, a)
                        },
                        dismiss: function(a) {
                            h.dismiss(k, a)
                        }
                    };
                if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl) throw new Error("One of template or templateUrl options is required.");
                var l = d.all([i(b)].concat(j(b.resolve)));
                return l.then(function(a) {
                    var d = (b.scope || c).$new();
                    d.$close = k.close, d.$dismiss = k.dismiss;
                    var f, i = {},
                        j = 1;
                    b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function(b, c) {
                        i[c] = a[j++]
                    }), f = g(b.controller, i), b.controllerAs && (d[b.controllerAs] = f)), h.open(k, {
                        scope: d,
                        deferred: e,
                        content: a[0],
                        backdrop: b.backdrop,
                        keyboard: b.keyboard,
                        backdropClass: b.backdropClass,
                        windowClass: b.windowClass,
                        windowTemplateUrl: b.windowTemplateUrl,
                        size: b.size
                    })
                }, function(a) {
                    e.reject(a)
                }), l.then(function() {
                    f.resolve(!0)
                }, function() {
                    f.reject(!1)
                }), k
            }, k
        }]
    };
    return a
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function(a, b, c) {
    var d = this,
        e = {
            $setViewValue: angular.noop
        },
        f = b.numPages ? c(b.numPages).assign : angular.noop;
    this.init = function(f, g) {
        e = f, this.config = g, e.$render = function() {
            d.render()
        }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
            d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages()
        }) : this.itemsPerPage = g.itemsPerPage
    }, this.calculateTotalPages = function() {
        var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
        return Math.max(b || 0, 1)
    }, this.render = function() {
        a.page = parseInt(e.$viewValue, 10) || 1
    }, a.selectPage = function(b) {
        a.page !== b && b > 0 && b <= a.totalPages && (e.$setViewValue(b), e.$render())
    }, a.getText = function(b) {
        return a[b + "Text"] || d.config[b + "Text"]
    }, a.noPrevious = function() {
        return 1 === a.page
    }, a.noNext = function() {
        return a.page === a.totalPages
    }, a.$watch("totalItems", function() {
        a.totalPages = d.calculateTotalPages()
    }), a.$watch("totalPages", function(b) {
        f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render()
    })
}]).constant("paginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
}).directive("pagination", ["$parse", "paginationConfig", function(a, b) {
    return {
        restrict: "EA",
        scope: {
            totalItems: "=",
            firstText: "@",
            previousText: "@",
            nextText: "@",
            lastText: "@"
        },
        require: ["pagination", "?ngModel"],
        controller: "PaginationController",
        templateUrl: "template/pagination/pagination.html",
        replace: !0,
        link: function(c, d, e, f) {
            function g(a, b, c) {
                return {
                    number: a,
                    text: b,
                    active: c
                }
            }

            function h(a, b) {
                var c = [],
                    d = 1,
                    e = b,
                    f = angular.isDefined(k) && b > k;
                f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
                for (var h = d; e >= h; h++) {
                    var i = g(h, h, h === a);
                    c.push(i)
                }
                if (f && !l) {
                    if (d > 1) {
                        var j = g(d - 1, "...", !1);
                        c.unshift(j)
                    }
                    if (b > e) {
                        var m = g(e + 1, "...", !1);
                        c.push(m)
                    }
                }
                return c
            }
            var i = f[0],
                j = f[1];
            if (j) {
                var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize,
                    l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
                c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function(a) {
                    k = parseInt(a, 10), i.render()
                });
                var m = i.render;
                i.render = function() {
                    m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages))
                }
            }
        }
    }
}]).constant("pagerConfig", {
    itemsPerPage: 10,
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
}).directive("pager", ["pagerConfig", function(a) {
    return {
        restrict: "EA",
        scope: {
            totalItems: "=",
            previousText: "@",
            nextText: "@"
        },
        require: ["pager", "?ngModel"],
        controller: "PaginationController",
        templateUrl: "template/pagination/pager.html",
        replace: !0,
        link: function(b, c, d, e) {
            var f = e[0],
                g = e[1];
            g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a))
        }
    }
}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function() {
    function a(a) {
        var b = /[A-Z]/g,
            c = "-";
        return a.replace(b, function(a, b) {
            return (b ? c : "") + a.toLowerCase()
        })
    }
    var b = {
            placement: "top",
            animation: !0,
            popupDelay: 0
        },
        c = {
            mouseenter: "mouseleave",
            click: "click",
            focus: "blur"
        },
        d = {};
    this.options = function(a) {
        angular.extend(d, a)
    }, this.setTriggers = function(a) {
        angular.extend(c, a)
    }, this.$get = ["$window", "$compile", "$timeout", "$document", "$position", "$interpolate", function(e, f, g, h, i, j) {
        return function(e, k, l) {
            function m(a) {
                var b = a || n.trigger || l,
                    d = c[b] || b;
                return {
                    show: b,
                    hide: d
                }
            }
            var n = angular.extend({}, b, d),
                o = a(e),
                p = j.startSymbol(),
                q = j.endSymbol(),
                r = "<div " + o + '-popup title="' + p + "title" + q + '" content="' + p + "content" + q + '" placement="' + p + "placement" + q + '" animation="animation" is-open="isOpen"></div>';
            return {
                restrict: "EA",
                compile: function() {
                    var a = f(r);
                    return function(b, c, d) {
                        function f() {
                            D.isOpen ? l() : j()
                        }

                        function j() {
                            (!C || b.$eval(d[k + "Enable"])) && (s(), D.popupDelay ? z || (z = g(o, D.popupDelay, !1), z.then(function(a) {
                                a()
                            })) : o()())
                        }

                        function l() {
                            b.$apply(function() {
                                p()
                            })
                        }

                        function o() {
                            return z = null, y && (g.cancel(y), y = null), D.content ? (q(), w.css({
                                top: 0,
                                left: 0,
                                display: "block"
                            }), A ? h.find("body").append(w) : c.after(w), E(), D.isOpen = !0, D.$digest(), E) : angular.noop
                        }

                        function p() {
                            D.isOpen = !1, g.cancel(z), z = null, D.animation ? y || (y = g(r, 500)) : r()
                        }

                        function q() {
                            w && r(), x = D.$new(), w = a(x, angular.noop)
                        }

                        function r() {
                            y = null, w && (w.remove(), w = null), x && (x.$destroy(), x = null)
                        }

                        function s() {
                            t(), u()
                        }

                        function t() {
                            var a = d[k + "Placement"];
                            D.placement = angular.isDefined(a) ? a : n.placement
                        }

                        function u() {
                            var a = d[k + "PopupDelay"],
                                b = parseInt(a, 10);
                            D.popupDelay = isNaN(b) ? n.popupDelay : b
                        }

                        function v() {
                            var a = d[k + "Trigger"];
                            F(), B = m(a), B.show === B.hide ? c.bind(B.show, f) : (c.bind(B.show, j), c.bind(B.hide, l))
                        }
                        var w, x, y, z, A = angular.isDefined(n.appendToBody) ? n.appendToBody : !1,
                            B = m(void 0),
                            C = angular.isDefined(d[k + "Enable"]),
                            D = b.$new(!0),
                            E = function() {
                                var a = i.positionElements(c, w, D.placement, A);
                                a.top += "px", a.left += "px", w.css(a)
                            };
                        D.isOpen = !1, d.$observe(e, function(a) {
                            D.content = a, !a && D.isOpen && p()
                        }), d.$observe(k + "Title", function(a) {
                            D.title = a
                        });
                        var F = function() {
                            c.unbind(B.show, j), c.unbind(B.hide, l)
                        };
                        v();
                        var G = b.$eval(d[k + "Animation"]);
                        D.animation = angular.isDefined(G) ? !!G : n.animation;
                        var H = b.$eval(d[k + "AppendToBody"]);
                        A = angular.isDefined(H) ? H : A, A && b.$on("$locationChangeSuccess", function() {
                            D.isOpen && p()
                        }), b.$on("$destroy", function() {
                            g.cancel(y), g.cancel(z), F(), r(), D = null
                        })
                    }
                }
            }
        }
    }]
}).directive("tooltipPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-popup.html"
    }
}).directive("tooltip", ["$tooltip", function(a) {
    return a("tooltip", "tooltip", "mouseenter")
}]).directive("tooltipHtmlUnsafePopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
    }
}).directive("tooltipHtmlUnsafe", ["$tooltip", function(a) {
    return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover.html"
    }
}).directive("popover", ["$tooltip", function(a) {
    return a("popover", "popover", "click")
}]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
    animate: !0,
    max: 100
}).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function(a, b, c) {
    var d = this,
        e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
    this.bars = [], a.max = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, this.addBar = function(b, c) {
        e || c.css({
            transition: "none"
        }), this.bars.push(b), b.$watch("value", function(c) {
            b.percent = +(100 * c / a.max).toFixed(2)
        }), b.$on("$destroy", function() {
            c = null, d.removeBar(b)
        })
    }, this.removeBar = function(a) {
        this.bars.splice(this.bars.indexOf(a), 1)
    }
}]).directive("progress", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        require: "progress",
        scope: {},
        templateUrl: "template/progressbar/progress.html"
    }
}).directive("bar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        require: "^progress",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/bar.html",
        link: function(a, b, c, d) {
            d.addBar(a, b)
        }
    }
}).directive("progressbar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/progressbar.html",
        link: function(a, b, c, d) {
            d.addBar(a, angular.element(b.children()[0]))
        }
    }
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null
}).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function(a, b, c) {
    var d = {
        $setViewValue: angular.noop
    };
    this.init = function(e) {
        d = e, d.$render = this.render, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
        var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
        a.range = this.buildTemplateObjects(f)
    }, this.buildTemplateObjects = function(a) {
        for (var b = 0, c = a.length; c > b; b++) a[b] = angular.extend({
            index: b
        }, {
            stateOn: this.stateOn,
            stateOff: this.stateOff
        }, a[b]);
        return a
    }, a.rate = function(b) {
        !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render())
    }, a.enter = function(b) {
        a.readonly || (a.value = b), a.onHover({
            value: b
        })
    }, a.reset = function() {
        a.value = d.$viewValue, a.onLeave()
    }, a.onKeydown = function(b) {
        /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
    }, this.render = function() {
        a.value = d.$viewValue
    }
}]).directive("rating", function() {
    return {
        restrict: "EA",
        require: ["rating", "ngModel"],
        scope: {
            readonly: "=?",
            onHover: "&",
            onLeave: "&"
        },
        controller: "RatingController",
        templateUrl: "template/rating/rating.html",
        replace: !0,
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f)
        }
    }
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function(a) {
    var b = this,
        c = b.tabs = a.tabs = [];
    b.select = function(a) {
        angular.forEach(c, function(b) {
            b.active && b !== a && (b.active = !1, b.onDeselect())
        }), a.active = !0, a.onSelect()
    }, b.addTab = function(a) {
        c.push(a), 1 === c.length ? a.active = !0 : a.active && b.select(a)
    }, b.removeTab = function(a) {
        var e = c.indexOf(a);
        if (a.active && c.length > 1 && !d) {
            var f = e == c.length - 1 ? e - 1 : e + 1;
            b.select(c[f])
        }
        c.splice(e, 1)
    };
    var d;
    a.$on("$destroy", function() {
        d = !0
    })
}]).directive("tabset", function() {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@"
        },
        controller: "TabsetController",
        templateUrl: "template/tabs/tabset.html",
        link: function(a, b, c) {
            a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1
        }
    }
}).directive("tab", ["$parse", function(a) {
    return {
        require: "^tabset",
        restrict: "EA",
        replace: !0,
        templateUrl: "template/tabs/tab.html",
        transclude: !0,
        scope: {
            active: "=?",
            heading: "@",
            onSelect: "&select",
            onDeselect: "&deselect"
        },
        controller: function() {},
        compile: function(b, c, d) {
            return function(b, c, e, f) {
                b.$watch("active", function(a) {
                    a && f.select(b)
                }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function(a) {
                    b.disabled = !!a
                }), b.select = function() {
                    b.disabled || (b.active = !0)
                }, f.addTab(b), b.$on("$destroy", function() {
                    f.removeTab(b)
                }), b.$transcludeFn = d
            }
        }
    }
}]).directive("tabHeadingTransclude", [function() {
    return {
        restrict: "A",
        require: "^tab",
        link: function(a, b) {
            a.$watch("headingElement", function(a) {
                a && (b.html(""), b.append(a))
            })
        }
    }
}]).directive("tabContentTransclude", function() {
    function a(a) {
        return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
    }
    return {
        restrict: "A",
        require: "^tabset",
        link: function(b, c, d) {
            var e = b.$eval(d.tabContentTransclude);
            e.$transcludeFn(e.$parent, function(b) {
                angular.forEach(b, function(b) {
                    a(b) ? e.headingElement = b : c.append(b)
                })
            })
        }
    }
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    showMeridian: !0,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0
}).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function(a, b, c, d, e, f) {
    function g() {
        var b = parseInt(a.hours, 10),
            c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
        return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0
    }

    function h() {
        var b = parseInt(a.minutes, 10);
        return b >= 0 && 60 > b ? b : void 0
    }

    function i(a) {
        return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a
    }

    function j(a) {
        k(), o.$setViewValue(new Date(n)), l(a)
    }

    function k() {
        o.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1
    }

    function l(b) {
        var c = n.getHours(),
            d = n.getMinutes();
        a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : i(c), a.minutes = "m" === b ? d : i(d), a.meridian = n.getHours() < 12 ? p[0] : p[1]
    }

    function m(a) {
        var b = new Date(n.getTime() + 6e4 * a);
        n.setHours(b.getHours(), b.getMinutes()), j()
    }
    var n = new Date,
        o = {
            $setViewValue: angular.noop
        },
        p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
    this.init = function(c, d) {
        o = c, o.$render = this.render;
        var e = d.eq(0),
            g = d.eq(1),
            h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
        h && this.setupMousewheelEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g)
    };
    var q = f.hourStep;
    b.hourStep && a.$parent.$watch(c(b.hourStep), function(a) {
        q = parseInt(a, 10)
    });
    var r = f.minuteStep;
    b.minuteStep && a.$parent.$watch(c(b.minuteStep), function(a) {
        r = parseInt(a, 10)
    }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function(b) {
        if (a.showMeridian = !!b, o.$error.time) {
            var c = g(),
                d = h();
            angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j())
        } else l()
    }), this.setupMousewheelEvents = function(b, c) {
        var d = function(a) {
            a.originalEvent && (a = a.originalEvent);
            var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
            return a.detail || b > 0
        };
        b.bind("mousewheel wheel", function(b) {
            a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault()
        }), c.bind("mousewheel wheel", function(b) {
            a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault()
        })
    }, this.setupInputEvents = function(b, c) {
        if (a.readonlyInput) return a.updateHours = angular.noop, void(a.updateMinutes = angular.noop);
        var d = function(b, c) {
            o.$setViewValue(null), o.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c)
        };
        a.updateHours = function() {
            var a = g();
            angular.isDefined(a) ? (n.setHours(a), j("h")) : d(!0)
        }, b.bind("blur", function() {
            !a.invalidHours && a.hours < 10 && a.$apply(function() {
                a.hours = i(a.hours)
            })
        }), a.updateMinutes = function() {
            var a = h();
            angular.isDefined(a) ? (n.setMinutes(a), j("m")) : d(void 0, !0)
        }, c.bind("blur", function() {
            !a.invalidMinutes && a.minutes < 10 && a.$apply(function() {
                a.minutes = i(a.minutes)
            })
        })
    }, this.render = function() {
        var a = o.$modelValue ? new Date(o.$modelValue) : null;
        isNaN(a) ? (o.$setValidity("time", !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l())
    }, a.incrementHours = function() {
        m(60 * q)
    }, a.decrementHours = function() {
        m(60 * -q)
    }, a.incrementMinutes = function() {
        m(r)
    }, a.decrementMinutes = function() {
        m(-r)
    }, a.toggleMeridian = function() {
        m(720 * (n.getHours() < 12 ? 1 : -1))
    }
}]).directive("timepicker", function() {
    return {
        restrict: "EA",
        require: ["timepicker", "?^ngModel"],
        controller: "TimepickerController",
        replace: !0,
        scope: {},
        templateUrl: "template/timepicker/timepicker.html",
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f, b.find("input"))
        }
    }
}), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function(a) {
    var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
        parse: function(c) {
            var d = c.match(b);
            if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
            return {
                itemName: d[3],
                source: a(d[4]),
                viewMapper: a(d[2] || d[1]),
                modelMapper: a(d[1])
            }
        }
    }
}]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function(a, b, c, d, e, f, g) {
    var h = [9, 13, 27, 38, 40];
    return {
        require: "ngModel",
        link: function(i, j, k, l) {
            var m, n = i.$eval(k.typeaheadMinLength) || 1,
                o = i.$eval(k.typeaheadWaitMs) || 0,
                p = i.$eval(k.typeaheadEditable) !== !1,
                q = b(k.typeaheadLoading).assign || angular.noop,
                r = b(k.typeaheadOnSelect),
                s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0,
                t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1,
                u = i.$eval(k.typeaheadFocusFirst) !== !1,
                v = b(k.ngModel).assign,
                w = g.parse(k.typeahead),
                x = i.$new();
            i.$on("$destroy", function() {
                x.$destroy()
            });
            var y = "typeahead-" + x.$id + "-" + Math.floor(1e4 * Math.random());
            j.attr({
                "aria-autocomplete": "list",
                "aria-expanded": !1,
                "aria-owns": y
            });
            var z = angular.element("<div typeahead-popup></div>");
            z.attr({
                id: y,
                matches: "matches",
                active: "activeIdx",
                select: "select(activeIdx)",
                query: "query",
                position: "position"
            }), angular.isDefined(k.typeaheadTemplateUrl) && z.attr("template-url", k.typeaheadTemplateUrl);
            var A = function() {
                    x.matches = [], x.activeIdx = -1, j.attr("aria-expanded", !1)
                },
                B = function(a) {
                    return y + "-option-" + a
                };
            x.$watch("activeIdx", function(a) {
                0 > a ? j.removeAttr("aria-activedescendant") : j.attr("aria-activedescendant", B(a))
            });
            var C = function(a) {
                var b = {
                    $viewValue: a
                };
                q(i, !0), c.when(w.source(i, b)).then(function(c) {
                    var d = a === l.$viewValue;
                    if (d && m)
                        if (c.length > 0) {
                            x.activeIdx = u ? 0 : -1, x.matches.length = 0;
                            for (var e = 0; e < c.length; e++) b[w.itemName] = c[e], x.matches.push({
                                id: B(e),
                                label: w.viewMapper(x, b),
                                model: c[e]
                            });
                            x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop("offsetHeight"), j.attr("aria-expanded", !0)
                        } else A();
                    d && q(i, !1)
                }, function() {
                    A(), q(i, !1)
                })
            };
            A(), x.query = void 0;
            var D, E = function(a) {
                    D = d(function() {
                        C(a)
                    }, o)
                },
                F = function() {
                    D && d.cancel(D)
                };
            l.$parsers.unshift(function(a) {
                return m = !0, a && a.length >= n ? o > 0 ? (F(), E(a)) : C(a) : (q(i, !1), F(), A()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a)
            }), l.$formatters.push(function(a) {
                var b, c, d = {};
                return s ? (d.$model = a, s(i, d)) : (d[w.itemName] = a, b = w.viewMapper(i, d), d[w.itemName] = void 0, c = w.viewMapper(i, d), b !== c ? b : a)
            }), x.select = function(a) {
                var b, c, e = {};
                e[w.itemName] = c = x.matches[a].model, b = w.modelMapper(i, e), v(i, b), l.$setValidity("editable", !0), r(i, {
                    $item: c,
                    $model: b,
                    $label: w.viewMapper(i, e)
                }), A(), d(function() {
                    j[0].focus()
                }, 0, !1)
            }, j.bind("keydown", function(a) {
                0 !== x.matches.length && -1 !== h.indexOf(a.which) && (-1 != x.activeIdx || 13 !== a.which && 9 !== a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx > 0 ? x.activeIdx : x.matches.length) - 1, x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function() {
                    x.select(x.activeIdx)
                }) : 27 === a.which && (a.stopPropagation(), A(), x.$digest()))
            }), j.bind("blur", function() {
                m = !1
            });
            var G = function(a) {
                j[0] !== a.target && (A(), x.$digest())
            };
            e.bind("click", G), i.$on("$destroy", function() {
                e.unbind("click", G), t && H.remove()
            });
            var H = a(z)(x);
            t ? e.find("body").append(H) : j.after(H)
        }
    }
}]).directive("typeaheadPopup", function() {
    return {
        restrict: "EA",
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "=",
            select: "&"
        },
        replace: !0,
        templateUrl: "template/typeahead/typeahead-popup.html",
        link: function(a, b, c) {
            a.templateUrl = c.templateUrl, a.isOpen = function() {
                return a.matches.length > 0
            }, a.isActive = function(b) {
                return a.active == b
            }, a.selectActive = function(b) {
                a.active = b
            }, a.selectMatch = function(b) {
                a.select({
                    activeIdx: b
                })
            }
        }
    }
}).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function(a, b, c, d) {
    return {
        restrict: "EA",
        scope: {
            index: "=",
            match: "=",
            query: "="
        },
        link: function(e, f, g) {
            var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
            a.get(h, {
                cache: b
            }).success(function(a) {
                f.replaceWith(c(a.trim())(e))
            })
        }
    }
}]).filter("typeaheadHighlight", function() {
    function a(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
    return function(b, c) {
        return c ? ("" + b).replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
    }
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function(a) {
    a.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
}]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function(a) {
    a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
}]), angular.module("template/alert/alert.html", []).run(["$templateCache", function(a) {
    a.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
}]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function(a) {
    a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
}]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function(a) {
    a.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")
}]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
}]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
}]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function(a) {
    a.put("template/modal/backdrop.html", '<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
}]), angular.module("template/modal/window.html", []).run(["$templateCache", function(a) {
    a.put("template/modal/window.html", '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')
}]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function(a) {
    a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')
}]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function(a) {
    a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')
}]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
}]), angular.module("template/popover/popover.html", []).run(["$templateCache", function(a) {
    a.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
}]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')
}]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
}]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')
}]), angular.module("template/rating/rating.html", []).run(["$templateCache", function(a) {
    a.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
}]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function(a) {
    a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
}]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function(a) {
    a.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
}]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function(a) {
    a.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
}]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function(a) {
    a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
}]);;
(function() {
    function t(t, n) {
        return t.set(n[0], n[1]), t
    }

    function n(t, n) {
        return t.add(n), t
    }

    function r(t, n, r) {
        switch (r.length) {
            case 0:
                return t.call(n);
            case 1:
                return t.call(n, r[0]);
            case 2:
                return t.call(n, r[0], r[1]);
            case 3:
                return t.call(n, r[0], r[1], r[2])
        }
        return t.apply(n, r)
    }

    function e(t, n, r, e) {
        for (var u = -1, o = t.length; ++u < o;) {
            var i = t[u];
            n(e, i, r(i), t)
        }
        return e
    }

    function u(t, n) {
        for (var r = -1, e = t.length; ++r < e && false !== n(t[r], r, t););
        return t
    }

    function o(t, n) {
        for (var r = -1, e = t.length; ++r < e;)
            if (!n(t[r], r, t)) return false;
        return true
    }

    function i(t, n) {
        for (var r = -1, e = t.length, u = 0, o = []; ++r < e;) {
            var i = t[r];
            n(i, r, t) && (o[u++] = i)
        }
        return o
    }

    function f(t, n) {
        return !!t.length && -1 < d(t, n, 0)
    }

    function c(t, n, r) {
        for (var e = -1, u = t.length; ++e < u;)
            if (r(n, t[e])) return true;
        return false
    }

    function a(t, n) {
        for (var r = -1, e = t.length, u = Array(e); ++r < e;) u[r] = n(t[r], r, t);
        return u
    }

    function l(t, n) {
        for (var r = -1, e = n.length, u = t.length; ++r < e;) t[u + r] = n[r];
        return t
    }

    function s(t, n, r, e) {
        var u = -1,
            o = t.length;
        for (e && o && (r = t[++u]); ++u < o;) r = n(r, t[u], u, t);
        return r
    }

    function h(t, n, r, e) {
        var u = t.length;
        for (e && u && (r = t[--u]); u--;) r = n(r, t[u], u, t);
        return r
    }

    function p(t, n) {
        for (var r = -1, e = t.length; ++r < e;)
            if (n(t[r], r, t)) return true;
        return false
    }

    function _(t, n, r) {
        for (var e = -1, u = t.length; ++e < u;) {
            var o = t[e],
                i = n(o);
            if (null != i && (f === T ? i === i : r(i, f))) var f = i,
                c = o
        }
        return c
    }

    function v(t, n, r, e) {
        var u;
        return r(t, function(t, r, o) {
            return n(t, r, o) ? (u = e ? r : t, false) : void 0
        }), u
    }

    function g(t, n, r) {
        for (var e = t.length, u = r ? e : -1; r ? u-- : ++u < e;)
            if (n(t[u], u, t)) return u;
        return -1
    }

    function d(t, n, r) {
        if (n !== n) return U(t, r);
        --r;
        for (var e = t.length; ++r < e;)
            if (t[r] === n) return r;
        return -1
    }

    function y(t, n, r, e) {
        --r;
        for (var u = t.length; ++r < u;)
            if (e(t[r], n)) return r;
        return -1
    }

    function b(t, n) {
        var r = t ? t.length : 0;
        return r ? m(t, n) / r : K
    }

    function x(t, n, r, e, u) {
        return u(t, function(t, u, o) {
            r = e ? (e = false, t) : n(r, t, u, o)
        }), r
    }

    function j(t, n) {
        var r = t.length;
        for (t.sort(n); r--;) t[r] = t[r].c;
        return t
    }

    function m(t, n) {
        for (var r, e = -1, u = t.length; ++e < u;) {
            var o = n(t[e]);
            o !== T && (r = r === T ? o : r + o)
        }
        return r
    }

    function w(t, n) {
        for (var r = -1, e = Array(t); ++r < t;) e[r] = n(r);
        return e
    }

    function A(t, n) {
        return a(n, function(n) {
            return [n, t[n]];
        })
    }

    function O(t) {
        return function(n) {
            return t(n)
        }
    }

    function k(t, n) {
        return a(n, function(n) {
            return t[n]
        })
    }

    function E(t, n) {
        for (var r = -1, e = t.length; ++r < e && -1 < d(n, t[r], 0););
        return r
    }

    function I(t, n) {
        for (var r = t.length; r-- && -1 < d(n, t[r], 0););
        return r
    }

    function S(t) {
        return t && t.Object === Object ? t : null
    }

    function R(t, n) {
        if (t !== n) {
            var r = null === t,
                e = t === T,
                u = t === t,
                o = null === n,
                i = n === T,
                f = n === n;
            if (t > n && !o || !u || r && !i && f || e && f) return 1;
            if (n > t && !r || !f || o && !e && u || i && u) return -1
        }
        return 0
    }

    function W(t) {
        return function(n, r) {
            var e;
            return n === T && r === T ? 0 : (n !== T && (e = n), r !== T && (e = e === T ? r : t(e, r)), e)
        }
    }

    function B(t) {
        return Mt[t]
    }

    function C(t) {
        return Lt[t]
    }

    function z(t) {
        return "\\" + Ft[t]
    }

    function U(t, n, r) {
        var e = t.length;
        for (n += r ? 0 : -1; r ? n-- : ++n < e;) {
            var u = t[n];
            if (u !== u) return n
        }
        return -1
    }

    function M(t) {
        var n = false;
        if (null != t && typeof t.toString != "function") try {
            n = !!(t + "")
        } catch (r) {}
        return n
    }

    function L(t, n) {
        return t = typeof t == "number" || jt.test(t) ? +t : -1, t > -1 && 0 == t % 1 && (null == n ? 9007199254740991 : n) > t
    }

    function $(t) {
        for (var n, r = []; !(n = t.next()).done;) r.push(n.value);
        return r
    }

    function D(t) {
        var n = -1,
            r = Array(t.size);
        return t.forEach(function(t, e) {
            r[++n] = [e, t]
        }), r
    }

    function F(t, n) {
        for (var r = -1, e = t.length, u = 0, o = []; ++r < e;) {
            var i = t[r];
            i !== n && "__lodash_placeholder__" !== i || (t[r] = "__lodash_placeholder__", o[u++] = r)
        }
        return o
    }

    function N(t) {
        var n = -1,
            r = Array(t.size);
        return t.forEach(function(t) {
            r[++n] = t
        }), r
    }

    function P(t) {
        if (!t || !Wt.test(t)) return t.length;
        for (var n = St.lastIndex = 0; St.test(t);) n++;
        return n
    }

    function Z(t) {
        return $t[t]
    }

    function q(S) {
        function jt(t) {
            if (Be(t) && !ni(t) && !(t instanceof Et)) {
                if (t instanceof kt) return t;
                if (yu.call(t, "__wrapped__")) return Qr(t)
            }
            return new kt(t)
        }

        function Ot() {}

        function kt(t, n) {
            this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = T
        }

        function Et(t) {
            this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
        }

        function Mt() {}

        function Lt(t) {
            var n = -1,
                r = t ? t.length : 0;
            for (this.clear(); ++n < r;) {
                var e = t[n];
                this.set(e[0], e[1])
            }
        }

        function $t(t) {
            var n = -1,
                r = t ? t.length : 0;
            for (this.__data__ = new Lt; ++n < r;) this.push(t[n])
        }

        function Dt(t, n) {
            var r = t.__data__;
            return qr(n) ? (r = r.__data__, "__lodash_hash_undefined__" === (typeof n == "string" ? r.string : r.hash)[n]) : r.has(n)
        }

        function Ft(t) {
            var n = -1,
                r = t ? t.length : 0;
            for (this.clear(); ++n < r;) {
                var e = t[n];
                this.set(e[0], e[1])
            }
        }

        function Zt(t, n) {
            var r = Vt(t, n);
            return 0 > r ? false : (r == t.length - 1 ? t.pop() : Uu.call(t, r, 1), true)
        }

        function qt(t, n) {
            var r = Vt(t, n);
            return 0 > r ? T : t[r][1]
        }

        function Vt(t, n) {
            for (var r = t.length; r--;)
                if (me(t[r][0], n)) return r;
            return -1
        }

        function Kt(t, n, r) {
            var e = Vt(t, n);
            0 > e ? t.push([n, r]) : t[e][1] = r
        }

        function Gt(t, n, r, e) {
            return t === T || me(t, gu[r]) && !yu.call(e, r) ? n : t
        }

        function Ht(t, n, r) {
            (r === T || me(t[n], r)) && (typeof n != "number" || r !== T || n in t) || (t[n] = r)
        }

        function Qt(t, n, r) {
            var e = t[n];
            yu.call(t, n) && me(e, r) && (r !== T || n in t) || (t[n] = r)
        }

        function Xt(t, n, r, e) {
            return lo(t, function(t, u, o) {
                n(e, t, r(t), o)
            }), e
        }

        function tn(t, n) {
            return t && ur(n, Ye(n), t)
        }

        function nn(t, n) {
            for (var r = -1, e = null == t, u = n.length, o = Array(u); ++r < u;) o[r] = e ? T : Ke(t, n[r]);
            return o
        }

        function rn(t, n, r) {
            return t === t && (r !== T && (t = t > r ? r : t),
                n !== T && (t = n > t ? n : t)), t
        }

        function en(t, n, r, e, o, i, f) {
            var c;
            if (e && (c = i ? e(t, o, i, f) : e(t)), c !== T) return c;
            if (!We(t)) return t;
            if (o = ni(t)) {
                if (c = Mr(t), !n) return er(t, c)
            } else {
                var a = zr(t),
                    l = "[object Function]" == a || "[object GeneratorFunction]" == a;
                if (ri(t)) return Xn(t, n);
                if ("[object Object]" == a || "[object Arguments]" == a || l && !i) {
                    if (M(t)) return i ? t : {};
                    if (c = Lr(l ? {} : t), !n) return ir(t, tn(c, t))
                } else {
                    if (!Ut[a]) return i ? t : {};
                    c = $r(t, a, en, n)
                }
            }
            if (f || (f = new Ft), i = f.get(t)) return i;
            if (f.set(t, c), !o) var s = r ? gn(t, Ye, Cr) : Ye(t);
            return u(s || t, function(u, o) {
                s && (o = u, u = t[o]), Qt(c, o, en(u, n, r, e, o, t, f))
            }), c
        }

        function un(t) {
            var n = Ye(t),
                r = n.length;
            return function(e) {
                if (null == e) return !r;
                for (var u = r; u--;) {
                    var o = n[u],
                        i = t[o],
                        f = e[o];
                    if (f === T && !(o in Object(e)) || !i(f)) return false
                }
                return true
            }
        }

        function on(t) {
            return We(t) ? Bu(t) : {}
        }

        function fn(t, n, r) {
            if (typeof t != "function") throw new _u("Expected a function");
            return zu(function() {
                t.apply(T, r)
            }, n)
        }

        function cn(t, n, r, e) {
            var u = -1,
                o = f,
                i = true,
                l = t.length,
                s = [],
                h = n.length;
            if (!l) return s;
            r && (n = a(n, O(r))), e ? (o = c, i = false) : n.length >= 200 && (o = Dt,
                i = false, n = new $t(n));
            t: for (; ++u < l;) {
                var p = t[u],
                    _ = r ? r(p) : p;
                if (i && _ === _) {
                    for (var v = h; v--;)
                        if (n[v] === _) continue t;
                    s.push(p)
                } else o(n, _, e) || s.push(p)
            }
            return s
        }

        function an(t, n) {
            var r = true;
            return lo(t, function(t, e, u) {
                return r = !!n(t, e, u)
            }), r
        }

        function ln(t, n) {
            var r = [];
            return lo(t, function(t, e, u) {
                n(t, e, u) && r.push(t)
            }), r
        }

        function sn(t, n, r, e, u) {
            var o = -1,
                i = t.length;
            for (r || (r = Fr), u || (u = []); ++o < i;) {
                var f = t[o];
                n > 0 && r(f) ? n > 1 ? sn(f, n - 1, r, e, u) : l(u, f) : e || (u[u.length] = f)
            }
            return u
        }

        function hn(t, n) {
            return t && ho(t, n, Ye)
        }

        function pn(t, n) {
            return t && po(t, n, Ye)
        }

        function _n(t, n) {
            return i(n, function(n) {
                return Ie(t[n])
            })
        }

        function vn(t, n) {
            n = Zr(n, t) ? [n] : Hn(n);
            for (var r = 0, e = n.length; null != t && e > r;) t = t[n[r++]];
            return r && r == e ? t : T
        }

        function gn(t, n, r) {
            return n = n(t), ni(t) ? n : l(n, r(t))
        }

        function dn(t, n) {
            return yu.call(t, n) || typeof t == "object" && n in t && null === $u(Object(t))
        }

        function yn(t, n) {
            return n in Object(t)
        }

        function bn(t, n, r) {
            for (var e = r ? c : f, u = t[0].length, o = t.length, i = o, l = Array(o), s = 1 / 0, h = []; i--;) {
                var p = t[i];
                i && n && (p = a(p, O(n))), s = Zu(p.length, s),
                    l[i] = r || !n && (120 > u || 120 > p.length) ? T : new $t(i && p)
            }
            var p = t[0],
                _ = -1,
                v = l[0];
            t: for (; ++_ < u && s > h.length;) {
                var g = p[_],
                    d = n ? n(g) : g;
                if (v ? !Dt(v, d) : !e(h, d, r)) {
                    for (i = o; --i;) {
                        var y = l[i];
                        if (y ? !Dt(y, d) : !e(t[i], d, r)) continue t
                    }
                    v && v.push(d), h.push(g)
                }
            }
            return h
        }

        function xn(t, n, r) {
            var e = {};
            return hn(t, function(t, u, o) {
                n(e, r(t), u, o)
            }), e
        }

        function jn(t, n, e) {
            return Zr(n, t) || (n = Hn(n), t = Jr(t, n), n = re(n)), n = null == t ? t : t[n], null == n ? T : r(n, t, e)
        }

        function mn(t, n, r, e, u) {
            if (t === n) n = true;
            else if (null == t || null == n || !We(t) && !Be(n)) n = t !== t && n !== n;
            else t: {
                var o = ni(t),
                    i = ni(n),
                    f = "[object Array]",
                    c = "[object Array]";o || (f = zr(t), f = "[object Arguments]" == f ? "[object Object]" : f),
                i || (c = zr(n), c = "[object Arguments]" == c ? "[object Object]" : c);
                var a = "[object Object]" == f && !M(t),
                    i = "[object Object]" == c && !M(n);
                if ((c = f == c) && !a) u || (u = new Ft),
                n = o || De(t) ? kr(t, n, mn, r, e, u) : Er(t, n, f, mn, r, e, u);
                else {
                    if (!(2 & e) && (o = a && yu.call(t, "__wrapped__"), f = i && yu.call(n, "__wrapped__"), o || f)) {
                        t = o ? t.value() : t, n = f ? n.value() : n, u || (u = new Ft), n = mn(t, n, r, e, u);
                        break t
                    }
                    if (c) n: if (u || (u = new Ft), o = 2 & e,
                        f = Ye(t), i = f.length, c = Ye(n).length, i == c || o) {
                        for (a = i; a--;) {
                            var l = f[a];
                            if (!(o ? l in n : dn(n, l))) {
                                n = false;
                                break n
                            }
                        }
                        if (c = u.get(t)) n = c == n;
                        else {
                            c = true, u.set(t, n);
                            for (var s = o; ++a < i;) {
                                var l = f[a],
                                    h = t[l],
                                    p = n[l];
                                if (r) var _ = o ? r(p, h, l, n, t, u) : r(h, p, l, t, n, u);
                                if (_ === T ? h !== p && !mn(h, p, r, e, u) : !_) {
                                    c = false;
                                    break
                                }
                                s || (s = "constructor" == l)
                            }
                            c && !s && (r = t.constructor, e = n.constructor, r != e && "constructor" in t && "constructor" in n && !(typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) && (c = false)), u["delete"](t), n = c
                        }
                    } else n = false;
                    else n = false;
                }
            }
            return n
        }

        function wn(t, n, r, e) {
            var u = r.length,
                o = u,
                i = !e;
            if (null == t) return !o;
            for (t = Object(t); u--;) {
                var f = r[u];
                if (i && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return false
            }
            for (; ++u < o;) {
                var f = r[u],
                    c = f[0],
                    a = t[c],
                    l = f[1];
                if (i && f[2]) {
                    if (a === T && !(c in t)) return false
                } else {
                    if (f = new Ft, e) var s = e(a, l, c, t, n, f);
                    if (s === T ? !mn(l, a, e, 3, f) : !s) return false
                }
            }
            return true
        }

        function An(t) {
            return typeof t == "function" ? t : null == t ? ou : typeof t == "object" ? ni(t) ? In(t[0], t[1]) : En(t) : au(t)
        }

        function On(t) {
            t = null == t ? t : Object(t);
            var n, r = [];
            for (n in t) r.push(n);
            return r
        }

        function kn(t, n) {
            var r = -1,
                e = Oe(t) ? Array(t.length) : [];
            return lo(t, function(t, u, o) {
                e[++r] = n(t, u, o)
            }), e
        }

        function En(t) {
            var n = Rr(t);
            return 1 == n.length && n[0][2] ? Kr(n[0][0], n[0][1]) : function(r) {
                return r === t || wn(r, t, n)
            }
        }

        function In(t, n) {
            return Zr(t) && n === n && !We(n) ? Kr(t, n) : function(r) {
                var e = Ke(r, t);
                return e === T && e === n ? Je(r, t) : mn(n, e, T, 3)
            }
        }

        function Sn(t, n, r, e, o) {
            if (t !== n) {
                if (!ni(n) && !De(n)) var i = He(n);
                u(i || n, function(u, f) {
                    if (i && (f = u, u = n[f]), We(u)) {
                        o || (o = new Ft);
                        var c = f,
                            a = o,
                            l = t[c],
                            s = n[c],
                            h = a.get(s);
                        if (h) Ht(t, c, h);
                        else {
                            var h = e ? e(l, s, c + "", t, n, a) : T,
                                p = h === T;
                            p && (h = s, ni(s) || De(s) ? ni(l) ? h = l : ke(l) ? h = er(l) : (p = false, h = en(s, true)) : Ue(s) || Ae(s) ? Ae(l) ? h = Te(l) : !We(l) || r && Ie(l) ? (p = false, h = en(s, true)) : h = l : p = false), a.set(s, h), p && Sn(h, s, r, e, a), a["delete"](s), Ht(t, c, h)
                        }
                    } else c = e ? e(t[f], u, f + "", t, n, o) : T, c === T && (c = u), Ht(t, f, c)
                })
            }
        }

        function Rn(t, n, r) {
            var e = -1;
            return n = a(n.length ? n : [ou], Sr()), t = kn(t, function(t) {
                return {
                    a: a(n, function(n) {
                        return n(t)
                    }),
                    b: ++e,
                    c: t
                }
            }), j(t, function(t, n) {
                var e;
                t: {
                    e = -1;
                    for (var u = t.a, o = n.a, i = u.length, f = r.length; ++e < i;) {
                        var c = R(u[e], o[e]);
                        if (c) {
                            e = f > e ? c * ("desc" == r[e] ? -1 : 1) : c;
                            break t
                        }
                    }
                    e = t.b - n.b
                }
                return e
            })
        }

        function Wn(t, n) {
            return t = Object(t), s(n, function(n, r) {
                return r in t && (n[r] = t[r]), n
            }, {})
        }

        function Bn(t, n) {
            for (var r = -1, e = gn(t, He, bo), u = e.length, o = {}; ++r < u;) {
                var i = e[r],
                    f = t[i];
                n(f, i) && (o[i] = f)
            }
            return o
        }

        function Cn(t) {
            return function(n) {
                return null == n ? T : n[t]
            }
        }

        function zn(t) {
            return function(n) {
                return vn(n, t)
            }
        }

        function Un(t, n, r, e) {
            var u = e ? y : d,
                o = -1,
                i = n.length,
                f = t;
            for (r && (f = a(t, O(r))); ++o < i;)
                for (var c = 0, l = n[o], l = r ? r(l) : l; - 1 < (c = u(f, l, c, e));) f !== t && Uu.call(f, c, 1),
                    Uu.call(t, c, 1);
            return t
        }

        function Mn(t, n) {
            for (var r = t ? n.length : 0, e = r - 1; r--;) {
                var u = n[r];
                if (e == r || u != o) {
                    var o = u;
                    if (L(u)) Uu.call(t, u, 1);
                    else if (Zr(u, t)) delete t[u];
                    else {
                        var u = Hn(u),
                            i = Jr(t, u);
                        null != i && delete i[re(u)]
                    }
                }
            }
        }

        function Ln(t, n) {
            return t + Lu(Tu() * (n - t + 1))
        }

        function $n(t, n) {
            var r = "";
            if (!t || 1 > n || n > 9007199254740991) return r;
            do n % 2 && (r += t), (n = Lu(n / 2)) && (t += t); while (n);
            return r
        }

        function Dn(t, n, r, e) {
            n = Zr(n, t) ? [n] : Hn(n);
            for (var u = -1, o = n.length, i = o - 1, f = t; null != f && ++u < o;) {
                var c = n[u];
                if (We(f)) {
                    var a = r;
                    if (u != i) {
                        var l = f[c],
                            a = e ? e(l, c, f) : T;
                        a === T && (a = null == l ? L(n[u + 1]) ? [] : {} : l)
                    }
                    Qt(f, c, a)
                }
                f = f[c]
            }
            return t
        }

        function Fn(t, n, r) {
            var e = -1,
                u = t.length;
            for (0 > n && (n = -n > u ? 0 : u + n), r = r > u ? u : r, 0 > r && (r += u), u = n > r ? 0 : r - n >>> 0, n >>>= 0, r = Array(u); ++e < u;) r[e] = t[e + n];
            return r
        }

        function Nn(t, n) {
            var r;
            return lo(t, function(t, e, u) {
                return r = n(t, e, u), !r
            }), !!r
        }

        function Pn(t, n, r) {
            var e = 0,
                u = t ? t.length : e;
            if (typeof n == "number" && n === n && 2147483647 >= u) {
                for (; u > e;) {
                    var o = e + u >>> 1,
                        i = t[o];
                    (r ? n >= i : n > i) && null !== i ? e = o + 1 : u = o
                }
                return u
            }
            return Zn(t, n, ou, r)
        }

        function Zn(t, n, r, e) {
            n = r(n);
            for (var u = 0, o = t ? t.length : 0, i = n !== n, f = null === n, c = n === T; o > u;) {
                var a = Lu((u + o) / 2),
                    l = r(t[a]),
                    s = l !== T,
                    h = l === l;
                (i ? h || e : f ? h && s && (e || null != l) : c ? h && (e || s) : null == l ? 0 : e ? n >= l : n > l) ? u = a + 1: o = a
            }
            return Zu(o, 4294967294)
        }

        function qn(t, n) {
            for (var r = 0, e = t.length, u = t[0], o = n ? n(u) : u, i = o, f = 1, c = [u]; ++r < e;) u = t[r], o = n ? n(u) : u, me(o, i) || (i = o, c[f++] = u);
            return c
        }

        function Tn(t, n, r) {
            var e = -1,
                u = f,
                o = t.length,
                i = true,
                a = [],
                l = a;
            if (r) i = false, u = c;
            else if (o < 200) l = n ? [] : a;
            else {
                if (u = n ? null : vo(t)) return N(u);
                i = false, u = Dt, l = new $t
            }
            t: for (; ++e < o;) {
                var s = t[e],
                    h = n ? n(s) : s;
                if (i && h === h) {
                    for (var p = l.length; p--;)
                        if (l[p] === h) continue t;
                    n && l.push(h), a.push(s)
                } else u(l, h, r) || (l !== a && l.push(h), a.push(s))
            }
            return a
        }

        function Vn(t, n, r, e) {
            for (var u = t.length, o = e ? u : -1;
                (e ? o-- : ++o < u) && n(t[o], o, t););
            return r ? Fn(t, e ? 0 : o, e ? o + 1 : u) : Fn(t, e ? o + 1 : 0, e ? u : o)
        }

        function Kn(t, n) {
            var r = t;
            return r instanceof Et && (r = r.value()), s(n, function(t, n) {
                return n.func.apply(n.thisArg, l([t], n.args))
            }, r)
        }

        function Gn(t, n, r) {
            for (var e = -1, u = t.length; ++e < u;) var o = o ? l(cn(o, t[e], n, r), cn(t[e], o, n, r)) : t[e];
            return o && o.length ? Tn(o, n, r) : []
        }

        function Jn(t, n, r) {
            for (var e = -1, u = t.length, o = n.length, i = {}; ++e < u;) r(i, t[e], o > e ? n[e] : T);
            return i
        }

        function Yn(t) {
            return ke(t) ? t : []
        }

        function Hn(t) {
            return ni(t) ? t : jo(t)
        }

        function Qn(t, n, r) {
            var e = t.length;
            return r = r === T ? e : r, n || e > r ? Fn(t, n, r) : t
        }

        function Xn(t, n) {
            if (n) return t.slice();
            var r = new t.constructor(t.length);
            return t.copy(r), r
        }

        function tr(t) {
            var n = new t.constructor(t.byteLength);
            return new Eu(n).set(new Eu(t)), n
        }

        function nr(t, n, r, e) {
            var u = -1,
                o = t.length,
                i = r.length,
                f = -1,
                c = n.length,
                a = Pu(o - i, 0),
                l = Array(c + a);
            for (e = !e; ++f < c;) l[f] = n[f];
            for (; ++u < i;)(e || o > u) && (l[r[u]] = t[u]);
            for (; a--;) l[f++] = t[u++];
            return l
        }

        function rr(t, n, r, e) {
            var u = -1,
                o = t.length,
                i = -1,
                f = r.length,
                c = -1,
                a = n.length,
                l = Pu(o - f, 0),
                s = Array(l + a);
            for (e = !e; ++u < l;) s[u] = t[u];
            for (l = u; ++c < a;) s[l + c] = n[c];
            for (; ++i < f;)(e || o > u) && (s[l + r[i]] = t[u++]);
            return s
        }

        function er(t, n) {
            var r = -1,
                e = t.length;
            for (n || (n = Array(e)); ++r < e;) n[r] = t[r];
            return n
        }

        function ur(t, n, r) {
            return or(t, n, r)
        }

        function or(t, n, r, e) {
            r || (r = {});
            for (var u = -1, o = n.length; ++u < o;) {
                var i = n[u],
                    f = e ? e(r[i], t[i], i, r, t) : t[i];
                Qt(r, i, f)
            }
            return r
        }

        function ir(t, n) {
            return ur(t, Cr(t), n)
        }

        function fr(t, n) {
            return function(r, u) {
                var o = ni(r) ? e : Xt,
                    i = n ? n() : {};
                return o(r, t, Sr(u), i)
            }
        }

        function cr(t) {
            return xe(function(n, r) {
                var e = -1,
                    u = r.length,
                    o = u > 1 ? r[u - 1] : T,
                    i = u > 2 ? r[2] : T,
                    o = typeof o == "function" ? (u--, o) : T;
                for (i && Pr(r[0], r[1], i) && (o = 3 > u ? T : o, u = 1), n = Object(n); ++e < u;)(i = r[e]) && t(n, i, e, o);
                return n
            })
        }

        function ar(t, n) {
            return function(r, e) {
                if (null == r) return r;
                if (!Oe(r)) return t(r, e);
                for (var u = r.length, o = n ? u : -1, i = Object(r);
                    (n ? o-- : ++o < u) && false !== e(i[o], o, i););
                return r
            }
        }

        function lr(t) {
            return function(n, r, e) {
                var u = -1,
                    o = Object(n);
                e = e(n);
                for (var i = e.length; i--;) {
                    var f = e[t ? i : ++u];
                    if (false === r(o[f], f, o)) break
                }
                return n
            }
        }

        function sr(t, n, r) {
            function e() {
                return (this && this !== Jt && this instanceof e ? o : t).apply(u ? r : this, arguments)
            }
            var u = 1 & n,
                o = _r(t);
            return e
        }

        function hr(t) {
            return function(n) {
                n = Ve(n);
                var r = Wt.test(n) ? n.match(St) : T,
                    e = r ? r[0] : n.charAt(0);
                return n = r ? Qn(r, 1).join("") : n.slice(1), e[t]() + n
            }
        }

        function pr(t) {
            return function(n) {
                return s(eu(ru(n)), t, "")
            }
        }

        function _r(t) {
            return function() {
                var n = arguments;
                switch (n.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(n[0]);
                    case 2:
                        return new t(n[0], n[1]);
                    case 3:
                        return new t(n[0], n[1], n[2]);
                    case 4:
                        return new t(n[0], n[1], n[2], n[3]);
                    case 5:
                        return new t(n[0], n[1], n[2], n[3], n[4]);
                    case 6:
                        return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
                    case 7:
                        return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6])
                }
                var r = on(t.prototype),
                    n = t.apply(r, n);
                return We(n) ? n : r
            }
        }

        function vr(t, n, e) {
            function u() {
                for (var i = arguments.length, f = Array(i), c = i, a = Br(u); c--;) f[c] = arguments[c];
                return c = 3 > i && f[0] !== a && f[i - 1] !== a ? [] : F(f, a), i -= c.length, e > i ? wr(t, n, dr, u.placeholder, T, f, c, T, T, e - i) : r(this && this !== Jt && this instanceof u ? o : t, this, f)
            }
            var o = _r(t);
            return u
        }

        function gr(t) {
            return xe(function(n) {
                n = sn(n, 1);
                var r = n.length,
                    e = r,
                    u = kt.prototype.thru;
                for (t && n.reverse(); e--;) {
                    var o = n[e];
                    if (typeof o != "function") throw new _u("Expected a function");
                    if (u && !i && "wrapper" == Ir(o)) var i = new kt([], true)
                }
                for (e = i ? e : r; ++e < r;) var o = n[e],
                    u = Ir(o),
                    f = "wrapper" == u ? go(o) : T,
                    i = f && Tr(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? i[Ir(f[0])].apply(i, f[3]) : 1 == o.length && Tr(o) ? i[u]() : i.thru(o);
                return function() {
                    var t = arguments,
                        e = t[0];
                    if (i && 1 == t.length && ni(e) && e.length >= 200) return i.plant(e).value();
                    for (var u = 0, t = r ? n[u].apply(this, t) : e; ++u < r;) t = n[u].call(this, t);
                    return t
                }
            })
        }

        function dr(t, n, r, e, u, o, i, f, c, a) {
            function l() {
                for (var d = arguments.length, y = d, b = Array(d); y--;) b[y] = arguments[y];
                if (_) {
                    var x, j = Br(l),
                        y = b.length;
                    for (x = 0; y--;) b[y] === j && x++
                }
                if (e && (b = nr(b, e, u, _)), o && (b = rr(b, o, i, _)), d -= x, _ && a > d) return j = F(b, j), wr(t, n, dr, l.placeholder, r, b, j, f, c, a - d);
                if (j = h ? r : this, y = p ? j[t] : t, d = b.length, f) {
                    x = b.length;
                    for (var m = Zu(f.length, x), w = er(b); m--;) {
                        var A = f[m];
                        b[m] = L(A, x) ? w[A] : T
                    }
                } else v && d > 1 && b.reverse();
                return s && d > c && (b.length = c), this && this !== Jt && this instanceof l && (y = g || _r(y)), y.apply(j, b)
            }
            var s = 128 & n,
                h = 1 & n,
                p = 2 & n,
                _ = 24 & n,
                v = 512 & n,
                g = p ? T : _r(t);
            return l
        }

        function yr(t, n) {
            return function(r, e) {
                return xn(r, t, n(e))
            }
        }

        function br(t) {
            return xe(function(n) {
                return n = a(sn(n, 1, Nr), Sr()), xe(function(e) {
                    var u = this;
                    return t(n, function(t) {
                        return r(t, u, e)
                    })
                })
            })
        }

        function xr(t, n) {
            n = n === T ? " " : n + "";
            var r = n.length;
            return 2 > r ? r ? $n(n, t) : n : (r = $n(n, Mu(t / P(n))),
                Wt.test(n) ? Qn(r.match(St), 0, t).join("") : r.slice(0, t))
        }

        function jr(t, n, e, u) {
            function o() {
                for (var n = -1, c = arguments.length, a = -1, l = u.length, s = Array(l + c), h = this && this !== Jt && this instanceof o ? f : t; ++a < l;) s[a] = u[a];
                for (; c--;) s[a++] = arguments[++n];
                return r(h, i ? e : this, s)
            }
            var i = 1 & n,
                f = _r(t);
            return o
        }

        function mr(t) {
            return function(n, r, e) {
                e && typeof e != "number" && Pr(n, r, e) && (r = e = T), n = qe(n), n = n === n ? n : 0, r === T ? (r = n, n = 0) : r = qe(r) || 0, e = e === T ? r > n ? 1 : -1 : qe(e) || 0;
                var u = -1;
                r = Pu(Mu((r - n) / (e || 1)), 0);
                for (var o = Array(r); r--;) o[t ? r : ++u] = n,
                    n += e;
                return o
            }
        }

        function wr(t, n, r, e, u, o, i, f, c, a) {
            var l = 8 & n;
            f = f ? er(f) : T;
            var s = l ? i : T;
            i = l ? T : i;
            var h = l ? o : T;
            return o = l ? T : o, n = (n | (l ? 32 : 64)) & ~(l ? 64 : 32), 4 & n || (n &= -4), n = [t, n, u, h, s, o, i, f, c, a], r = r.apply(T, n), Tr(t) && xo(r, n), r.placeholder = e, r
        }

        function Ar(t) {
            var n = hu[t];
            return function(t, r) {
                if (t = qe(t), r = Pe(r)) {
                    var e = (Ve(t) + "e").split("e"),
                        e = n(e[0] + "e" + (+e[1] + r)),
                        e = (Ve(e) + "e").split("e");
                    return +(e[0] + "e" + (+e[1] - r))
                }
                return n(t)
            }
        }

        function Or(t, n, r, e, u, o, i, f) {
            var c = 2 & n;
            if (!c && typeof t != "function") throw new _u("Expected a function");
            var a = e ? e.length : 0;
            if (a || (n &= -97, e = u = T), i = i === T ? i : Pu(Pe(i), 0), f = f === T ? f : Pe(f), a -= u ? u.length : 0, 64 & n) {
                var l = e,
                    s = u;
                e = u = T
            }
            var h = c ? T : go(t);
            return o = [t, n, r, e, u, l, s, o, i, f], h && (r = o[1], t = h[1], n = r | t, e = 128 == t && 8 == r || 128 == t && 256 == r && h[8] >= o[7].length || 384 == t && h[8] >= h[7].length && 8 == r, 131 > n || e) && (1 & t && (o[2] = h[2], n |= 1 & r ? 0 : 4), (r = h[3]) && (e = o[3], o[3] = e ? nr(e, r, h[4]) : er(r), o[4] = e ? F(o[3], "__lodash_placeholder__") : er(h[4])), (r = h[5]) && (e = o[5], o[5] = e ? rr(e, r, h[6]) : er(r), o[6] = e ? F(o[5], "__lodash_placeholder__") : er(h[6])), (r = h[7]) && (o[7] = er(r)),
                128 & t && (o[8] = null == o[8] ? h[8] : Zu(o[8], h[8])), null == o[9] && (o[9] = h[9]), o[0] = h[0], o[1] = n), t = o[0], n = o[1], r = o[2], e = o[3], u = o[4], f = o[9] = null == o[9] ? c ? 0 : t.length : Pu(o[9] - a, 0), !f && 24 & n && (n &= -25), (h ? _o : xo)(n && 1 != n ? 8 == n || 16 == n ? vr(t, n, f) : 32 != n && 33 != n || u.length ? dr.apply(T, o) : jr(t, n, r, e) : sr(t, n, r), o)
        }

        function kr(t, n, r, e, u, o) {
            var i = -1,
                f = 2 & u,
                c = 1 & u,
                a = t.length,
                l = n.length;
            if (!(a == l || f && l > a)) return false;
            if (l = o.get(t)) return l == n;
            for (l = true, o.set(t, n); ++i < a;) {
                var s = t[i],
                    h = n[i];
                if (e) var _ = f ? e(h, s, i, n, t, o) : e(s, h, i, t, n, o);
                if (_ !== T) {
                    if (_) continue;
                    l = false;
                    break
                }
                if (c) {
                    if (!p(n, function(t) {
                            return s === t || r(s, t, e, u, o)
                        })) {
                        l = false;
                        break
                    }
                } else if (s !== h && !r(s, h, e, u, o)) {
                    l = false;
                    break
                }
            }
            return o["delete"](t), l
        }

        function Er(t, n, r, e, u, o, i) {
            switch (r) {
                case "[object DataView]":
                    if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset) break;
                    t = t.buffer, n = n.buffer;
                case "[object ArrayBuffer]":
                    if (t.byteLength != n.byteLength || !e(new Eu(t), new Eu(n))) break;
                    return true;
                case "[object Boolean]":
                case "[object Date]":
                    return +t == +n;
                case "[object Error]":
                    return t.name == n.name && t.message == n.message;
                case "[object Number]":
                    return t != +t ? n != +n : t == +n;
                case "[object RegExp]":
                case "[object String]":
                    return t == n + "";
                case "[object Map]":
                    var f = D;
                case "[object Set]":
                    if (f || (f = N), t.size != n.size && !(2 & o)) break;
                    return (r = i.get(t)) ? r == n : (o |= 1, i.set(t, n), kr(f(t), f(n), e, u, o, i));
                case "[object Symbol]":
                    if (co) return co.call(t) == co.call(n)
            }
            return false
        }

        function Ir(t) {
            for (var n = t.name + "", r = no[n], e = yu.call(no, n) ? r.length : 0; e--;) {
                var u = r[e],
                    o = u.func;
                if (null == o || o == t) return u.name
            }
            return n
        }

        function Sr() {
            var t = jt.iteratee || iu,
                t = t === iu ? An : t;
            return arguments.length ? t(arguments[0], arguments[1]) : t
        }

        function Rr(t) {
            t = Qe(t);
            for (var n = t.length; n--;) {
                var r = t[n][1];
                t[n][2] = r === r && !We(r)
            }
            return t
        }

        function Wr(t, n) {
            var r = t[n];
            return Ce(r) ? r : T
        }

        function Br(t) {
            return (yu.call(jt, "placeholder") ? jt : t).placeholder
        }

        function Cr(t) {
            return Ru(Object(t))
        }

        function zr(t) {
            return ju.call(t)
        }

        function Ur(t, n, r) {
            n = Zr(n, t) ? [n] : Hn(n);
            for (var e, u = -1, o = n.length; ++u < o;) {
                var i = n[u];
                if (!(e = null != t && r(t, i))) break;
                t = t[i]
            }
            return e ? e : (o = t ? t.length : 0, !!o && Re(o) && L(i, o) && (ni(t) || Le(t) || Ae(t)));
        }

        function Mr(t) {
            var n = t.length,
                r = t.constructor(n);
            return n && "string" == typeof t[0] && yu.call(t, "index") && (r.index = t.index, r.input = t.input), r
        }

        function Lr(t) {
            return typeof t.constructor != "function" || Vr(t) ? {} : on($u(Object(t)))
        }

        function $r(r, e, u, o) {
            var i = r.constructor;
            switch (e) {
                case "[object ArrayBuffer]":
                    return tr(r);
                case "[object Boolean]":
                case "[object Date]":
                    return new i(+r);
                case "[object DataView]":
                    return e = o ? tr(r.buffer) : r.buffer, new r.constructor(e, r.byteOffset, r.byteLength);
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return e = o ? tr(r.buffer) : r.buffer, new r.constructor(e, r.byteOffset, r.length);
                case "[object Map]":
                    return e = o ? u(D(r), true) : D(r), s(e, t, new r.constructor);
                case "[object Number]":
                case "[object String]":
                    return new i(r);
                case "[object RegExp]":
                    return e = new r.constructor(r.source, vt.exec(r)), e.lastIndex = r.lastIndex,
                        e;
                case "[object Set]":
                    return e = o ? u(N(r), true) : N(r), s(e, n, new r.constructor);
                case "[object Symbol]":
                    return co ? Object(co.call(r)) : {}
            }
        }

        function Dr(t) {
            var n = t ? t.length : T;
            return Re(n) && (ni(t) || Le(t) || Ae(t)) ? w(n, String) : null
        }

        function Fr(t) {
            return ke(t) && (ni(t) || Ae(t))
        }

        function Nr(t) {
            return ni(t) && !(2 == t.length && !Ie(t[0]))
        }

        function Pr(t, n, r) {
            if (!We(r)) return false;
            var e = typeof n;
            return ("number" == e ? Oe(r) && L(n, r.length) : "string" == e && n in r) ? me(r[n], t) : false
        }

        function Zr(t, n) {
            var r = typeof t;
            return "number" == r || "symbol" == r ? true : !ni(t) && ($e(t) || ot.test(t) || !ut.test(t) || null != n && t in Object(n));
        }

        function qr(t) {
            var n = typeof t;
            return "number" == n || "boolean" == n || "string" == n && "__proto__" != t || null == t
        }

        function Tr(t) {
            var n = Ir(t),
                r = jt[n];
            return typeof r == "function" && n in Et.prototype ? t === r ? true : (n = go(r), !!n && t === n[0]) : false
        }

        function Vr(t) {
            var n = t && t.constructor;
            return t === (typeof n == "function" && n.prototype || gu)
        }

        function Kr(t, n) {
            return function(r) {
                return null == r ? false : r[t] === n && (n !== T || t in Object(r))
            }
        }

        function Gr(t, n, r, e, u, o) {
            return We(t) && We(n) && Sn(t, n, T, Gr, o.set(n, t)), t
        }

        function Jr(t, n) {
            return 1 == n.length ? t : vn(t, Fn(n, 0, -1));
        }

        function Yr(t) {
            return typeof t == "string" || $e(t) ? t : t + ""
        }

        function Hr(t) {
            if (null != t) {
                try {
                    return du.call(t)
                } catch (n) {}
                return t + ""
            }
            return ""
        }

        function Qr(t) {
            if (t instanceof Et) return t.clone();
            var n = new kt(t.__wrapped__, t.__chain__);
            return n.__actions__ = er(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n
        }

        function Xr(t, n, r) {
            var e = t ? t.length : 0;
            return e ? (n = r || n === T ? 1 : Pe(n), Fn(t, 0 > n ? 0 : n, e)) : []
        }

        function te(t, n, r) {
            var e = t ? t.length : 0;
            return e ? (n = r || n === T ? 1 : Pe(n), n = e - n, Fn(t, 0, 0 > n ? 0 : n)) : []
        }

        function ne(t) {
            return t ? t[0] : T
        }

        function re(t) {
            var n = t ? t.length : 0;
            return n ? t[n - 1] : T
        }

        function ee(t, n) {
            return t && t.length && n && n.length ? Un(t, n) : t
        }

        function ue(t) {
            return t ? Vu.call(t) : t
        }

        function oe(t) {
            if (!t || !t.length) return [];
            var n = 0;
            return t = i(t, function(t) {
                return ke(t) ? (n = Pu(t.length, n), true) : void 0
            }), w(n, function(n) {
                return a(t, Cn(n))
            })
        }

        function ie(t, n) {
            if (!t || !t.length) return [];
            var e = oe(t);
            return null == n ? e : a(e, function(t) {
                return r(n, T, t)
            })
        }

        function fe(t) {
            return t = jt(t), t.__chain__ = true, t
        }

        function ce(t, n) {
            return n(t)
        }

        function ae() {
            return this
        }

        function le(t, n) {
            return typeof n == "function" && ni(t) ? u(t, n) : lo(t, Sr(n))
        }

        function se(t, n) {
            var r;
            if (typeof n == "function" && ni(t)) {
                for (r = t.length; r-- && false !== n(t[r], r, t););
                r = t
            } else r = so(t, Sr(n));
            return r
        }

        function he(t, n) {
            return (ni(t) ? a : kn)(t, Sr(n, 3))
        }

        function pe(t, n, r) {
            var e = -1,
                u = Ne(t),
                o = u.length,
                i = o - 1;
            for (n = (r ? Pr(t, n, r) : n === T) ? 1 : rn(Pe(n), 0, o); ++e < n;) t = Ln(e, i), r = u[t], u[t] = u[e], u[e] = r;
            return u.length = n, u
        }

        function _e(t, n, r) {
            return n = r ? T : n, n = t && null == n ? t.length : n, Or(t, 128, T, T, T, T, n)
        }

        function ve(t, n) {
            var r;
            if (typeof n != "function") throw new _u("Expected a function");
            return t = Pe(t),
                function() {
                    return 0 < --t && (r = n.apply(this, arguments)), 1 >= t && (n = T), r
                }
        }

        function ge(t, n, r) {
            return n = r ? T : n, t = Or(t, 8, T, T, T, T, T, n), t.placeholder = ge.placeholder, t
        }

        function de(t, n, r) {
            return n = r ? T : n, t = Or(t, 16, T, T, T, T, T, n), t.placeholder = de.placeholder, t
        }

        function ye(t, n, r) {
            function e(n) {
                var r = c,
                    e = a;
                return c = a = T, p = n, l = t.apply(e, r)
            }

            function u(t) {
                var r = t - h;
                return t -= p, !h || r >= n || 0 > r || false !== v && t >= v
            }

            function o() {
                var t = Vo();
                if (u(t)) return i(t);
                var r;
                r = t - p, t = n - (t - h), r = false === v ? t : Zu(t, v - r), s = zu(o, r)
            }

            function i(t) {
                return Iu(s), s = T, g && c ? e(t) : (c = a = T, l)
            }

            function f() {
                var t = Vo(),
                    r = u(t);
                return c = arguments, a = this, h = t, r ? s === T ? (p = t = h, s = zu(o, n), _ ? e(t) : l) : (Iu(s), s = zu(o, n), e(h)) : (s === T && (s = zu(o, n)), l)
            }
            var c, a, l, s, h = 0,
                p = 0,
                _ = false,
                v = false,
                g = true;
            if (typeof t != "function") throw new _u("Expected a function");
            return n = qe(n) || 0, We(r) && (_ = !!r.leading, v = "maxWait" in r && Pu(qe(r.maxWait) || 0, n), g = "trailing" in r ? !!r.trailing : g), f.cancel = function() {
                    s !== T && Iu(s), h = p = 0, c = a = s = T
                },
                f.flush = function() {
                    return s === T ? l : i(Vo())
                }, f
        }

        function be(t, n) {
            function r() {
                var e = arguments,
                    u = n ? n.apply(this, e) : e[0],
                    o = r.cache;
                return o.has(u) ? o.get(u) : (e = t.apply(this, e), r.cache = o.set(u, e), e)
            }
            if (typeof t != "function" || n && typeof n != "function") throw new _u("Expected a function");
            return r.cache = new(be.Cache || Lt), r
        }

        function xe(t, n) {
            if (typeof t != "function") throw new _u("Expected a function");
            return n = Pu(n === T ? t.length - 1 : Pe(n), 0),
                function() {
                    for (var e = arguments, u = -1, o = Pu(e.length - n, 0), i = Array(o); ++u < o;) i[u] = e[n + u];
                    switch (n) {
                        case 0:
                            return t.call(this, i);
                        case 1:
                            return t.call(this, e[0], i);
                        case 2:
                            return t.call(this, e[0], e[1], i)
                    }
                    for (o = Array(n + 1), u = -1; ++u < n;) o[u] = e[u];
                    return o[n] = i, r(t, this, o)
                }
        }

        function je() {
            if (!arguments.length) return [];
            var t = arguments[0];
            return ni(t) ? t : [t]
        }

        function me(t, n) {
            return t === n || t !== t && n !== n
        }

        function we(t, n) {
            return t > n
        }

        function Ae(t) {
            return ke(t) && yu.call(t, "callee") && (!Cu.call(t, "callee") || "[object Arguments]" == ju.call(t))
        }

        function Oe(t) {
            return null != t && Re(yo(t)) && !Ie(t)
        }

        function ke(t) {
            return Be(t) && Oe(t)
        }

        function Ee(t) {
            return Be(t) ? "[object Error]" == ju.call(t) || typeof t.message == "string" && typeof t.name == "string" : false
        }

        function Ie(t) {
            return t = We(t) ? ju.call(t) : "", "[object Function]" == t || "[object GeneratorFunction]" == t
        }

        function Se(t) {
            return typeof t == "number" && t == Pe(t)
        }

        function Re(t) {
            return typeof t == "number" && t > -1 && 0 == t % 1 && 9007199254740991 >= t
        }

        function We(t) {
            var n = typeof t;
            return !!t && ("object" == n || "function" == n)
        }

        function Be(t) {
            return !!t && typeof t == "object"
        }

        function Ce(t) {
            return We(t) ? (Ie(t) || M(t) ? wu : bt).test(Hr(t)) : false;
        }

        function ze(t) {
            return typeof t == "number" || Be(t) && "[object Number]" == ju.call(t)
        }

        function Ue(t) {
            return !Be(t) || "[object Object]" != ju.call(t) || M(t) ? false : (t = $u(Object(t)), null === t ? true : (t = yu.call(t, "constructor") && t.constructor, typeof t == "function" && t instanceof t && du.call(t) == xu))
        }

        function Me(t) {
            return We(t) && "[object RegExp]" == ju.call(t)
        }

        function Le(t) {
            return typeof t == "string" || !ni(t) && Be(t) && "[object String]" == ju.call(t)
        }

        function $e(t) {
            return typeof t == "symbol" || Be(t) && "[object Symbol]" == ju.call(t)
        }

        function De(t) {
            return Be(t) && Re(t.length) && !!zt[ju.call(t)]
        }

        function Fe(t, n) {
            return n > t
        }

        function Ne(t) {
            if (!t) return [];
            if (Oe(t)) return Le(t) ? t.match(St) : er(t);
            if (Wu && t[Wu]) return $(t[Wu]());
            var n = zr(t);
            return ("[object Map]" == n ? D : "[object Set]" == n ? N : tu)(t)
        }

        function Pe(t) {
            if (!t) return 0 === t ? t : 0;
            if (t = qe(t), t === V || t === -V) return 1.7976931348623157e308 * (0 > t ? -1 : 1);
            var n = t % 1;
            return t === t ? n ? t - n : t : 0
        }

        function Ze(t) {
            return t ? rn(Pe(t), 0, 4294967295) : 0
        }

        function qe(t) {
            if (typeof t == "number") return t;
            if ($e(t)) return K;
            if (We(t) && (t = Ie(t.valueOf) ? t.valueOf() : t,
                    t = We(t) ? t + "" : t), typeof t != "string") return 0 === t ? t : +t;
            t = t.replace(at, "");
            var n = yt.test(t);
            return n || xt.test(t) ? Pt(t.slice(2), n ? 2 : 8) : dt.test(t) ? K : +t
        }

        function Te(t) {
            return ur(t, He(t))
        }

        function Ve(t) {
            if (typeof t == "string") return t;
            if (null == t) return "";
            if ($e(t)) return ao ? ao.call(t) : "";
            var n = t + "";
            return "0" == n && 1 / t == -V ? "-0" : n
        }

        function Ke(t, n, r) {
            return t = null == t ? T : vn(t, n), t === T ? r : t
        }

        function Ge(t, n) {
            return null != t && Ur(t, n, dn)
        }

        function Je(t, n) {
            return null != t && Ur(t, n, yn)
        }

        function Ye(t) {
            var n = Vr(t);
            if (!n && !Oe(t)) return Nu(Object(t));
            var r, e = Dr(t),
                u = !!e,
                e = e || [],
                o = e.length;
            for (r in t) !dn(t, r) || u && ("length" == r || L(r, o)) || n && "constructor" == r || e.push(r);
            return e
        }

        function He(t) {
            for (var n = -1, r = Vr(t), e = On(t), u = e.length, o = Dr(t), i = !!o, o = o || [], f = o.length; ++n < u;) {
                var c = e[n];
                i && ("length" == c || L(c, f)) || "constructor" == c && (r || !yu.call(t, c)) || o.push(c)
            }
            return o
        }

        function Qe(t) {
            return A(t, Ye(t))
        }

        function Xe(t) {
            return A(t, He(t))
        }

        function tu(t) {
            return t ? k(t, Ye(t)) : []
        }

        function nu(t) {
            return Ai(Ve(t).toLowerCase())
        }

        function ru(t) {
            return (t = Ve(t)) && t.replace(mt, B).replace(It, "");
        }

        function eu(t, n, r) {
            return t = Ve(t), n = r ? T : n, n === T && (n = Bt.test(t) ? Rt : ht), t.match(n) || []
        }

        function uu(t) {
            return function() {
                return t
            }
        }

        function ou(t) {
            return t
        }

        function iu(t) {
            return An(typeof t == "function" ? t : en(t, true))
        }

        function fu(t, n, r) {
            var e = Ye(n),
                o = _n(n, e);
            null != r || We(n) && (o.length || !e.length) || (r = n, n = t, t = this, o = _n(n, Ye(n)));
            var i = We(r) && "chain" in r ? r.chain : true,
                f = Ie(t);
            return u(o, function(r) {
                var e = n[r];
                t[r] = e, f && (t.prototype[r] = function() {
                    var n = this.__chain__;
                    if (i || n) {
                        var r = t(this.__wrapped__);
                        return (r.__actions__ = er(this.__actions__)).push({
                            func: e,
                            args: arguments,
                            thisArg: t
                        }), r.__chain__ = n, r
                    }
                    return e.apply(t, l([this.value()], arguments))
                })
            }), t
        }

        function cu() {}

        function au(t) {
            return Zr(t) ? Cn(t) : zn(t)
        }
        S = S ? Yt.defaults({}, S, Yt.pick(Jt, Ct)) : Jt;
        var lu = S.Date,
            su = S.Error,
            hu = S.Math,
            pu = S.RegExp,
            _u = S.TypeError,
            vu = S.Array.prototype,
            gu = S.Object.prototype,
            du = S.Function.prototype.toString,
            yu = gu.hasOwnProperty,
            bu = 0,
            xu = du.call(Object),
            ju = gu.toString,
            mu = Jt._,
            wu = pu("^" + du.call(yu).replace(ft, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            Au = Tt ? S.Buffer : T,
            Ou = S.Reflect,
            ku = S.Symbol,
            Eu = S.Uint8Array,
            Iu = S.clearTimeout,
            Su = Ou ? Ou.f : T,
            Ru = Object.getOwnPropertySymbols,
            Wu = typeof(Wu = ku && ku.iterator) == "symbol" ? Wu : T,
            Bu = Object.create,
            Cu = gu.propertyIsEnumerable,
            zu = S.setTimeout,
            Uu = vu.splice,
            Mu = hu.ceil,
            Lu = hu.floor,
            $u = Object.getPrototypeOf,
            Du = S.isFinite,
            Fu = vu.join,
            Nu = Object.keys,
            Pu = hu.max,
            Zu = hu.min,
            qu = S.parseInt,
            Tu = hu.random,
            Vu = vu.reverse,
            Ku = Wr(S, "DataView"),
            Gu = Wr(S, "Map"),
            Ju = Wr(S, "Promise"),
            Yu = Wr(S, "Set"),
            Hu = Wr(S, "WeakMap"),
            Qu = Wr(Object, "create"),
            Xu = Hu && new Hu,
            to = !Cu.call({
                valueOf: 1
            }, "valueOf"),
            no = {},
            ro = Hr(Ku),
            eo = Hr(Gu),
            uo = Hr(Ju),
            oo = Hr(Yu),
            io = Hr(Hu),
            fo = ku ? ku.prototype : T,
            co = fo ? fo.valueOf : T,
            ao = fo ? fo.toString : T;
        jt.templateSettings = {
            escape: nt,
            evaluate: rt,
            interpolate: et,
            variable: "",
            imports: {
                _: jt
            }
        }, jt.prototype = Ot.prototype, jt.prototype.constructor = jt, kt.prototype = on(Ot.prototype), kt.prototype.constructor = kt, Et.prototype = on(Ot.prototype), Et.prototype.constructor = Et, Mt.prototype = Qu ? Qu(null) : gu, Lt.prototype.clear = function() {
            this.__data__ = {
                hash: new Mt,
                map: Gu ? new Gu : [],
                string: new Mt
            }
        }, Lt.prototype["delete"] = function(t) {
            var n = this.__data__;
            return qr(t) ? (n = typeof t == "string" ? n.string : n.hash, t = (Qu ? n[t] !== T : yu.call(n, t)) && delete n[t]) : t = Gu ? n.map["delete"](t) : Zt(n.map, t), t
        }, Lt.prototype.get = function(t) {
            var n = this.__data__;
            return qr(t) ? (n = typeof t == "string" ? n.string : n.hash, Qu ? (t = n[t], t = "__lodash_hash_undefined__" === t ? T : t) : t = yu.call(n, t) ? n[t] : T) : t = Gu ? n.map.get(t) : qt(n.map, t), t
        }, Lt.prototype.has = function(t) {
            var n = this.__data__;
            return qr(t) ? (n = typeof t == "string" ? n.string : n.hash, t = Qu ? n[t] !== T : yu.call(n, t)) : t = Gu ? n.map.has(t) : -1 < Vt(n.map, t),
                t
        }, Lt.prototype.set = function(t, n) {
            var r = this.__data__;
            return qr(t) ? (typeof t == "string" ? r.string : r.hash)[t] = Qu && n === T ? "__lodash_hash_undefined__" : n : Gu ? r.map.set(t, n) : Kt(r.map, t, n), this
        }, $t.prototype.push = function(t) {
            var n = this.__data__;
            qr(t) ? (n = n.__data__, (typeof t == "string" ? n.string : n.hash)[t] = "__lodash_hash_undefined__") : n.set(t, "__lodash_hash_undefined__")
        }, Ft.prototype.clear = function() {
            this.__data__ = {
                array: [],
                map: null
            }
        }, Ft.prototype["delete"] = function(t) {
            var n = this.__data__,
                r = n.array;
            return r ? Zt(r, t) : n.map["delete"](t);
        }, Ft.prototype.get = function(t) {
            var n = this.__data__,
                r = n.array;
            return r ? qt(r, t) : n.map.get(t)
        }, Ft.prototype.has = function(t) {
            var n = this.__data__,
                r = n.array;
            return r ? -1 < Vt(r, t) : n.map.has(t)
        }, Ft.prototype.set = function(t, n) {
            var r = this.__data__,
                e = r.array;
            return e && (199 > e.length ? Kt(e, t, n) : (r.array = null, r.map = new Lt(e))), (r = r.map) && r.set(t, n), this
        };
        var lo = ar(hn),
            so = ar(pn, true),
            ho = lr(),
            po = lr(true);
        Su && !Cu.call({
            valueOf: 1
        }, "valueOf") && (On = function(t) {
            return $(Su(t))
        });
        var _o = Xu ? function(t, n) {
                return Xu.set(t, n), t
            } : ou,
            vo = Yu && 2 === new Yu([1, 2]).size ? function(t) {
                return new Yu(t)
            } : cu,
            go = Xu ? function(t) {
                return Xu.get(t)
            } : cu,
            yo = Cn("length");
        Ru || (Cr = function() {
            return []
        });
        var bo = Ru ? function(t) {
            for (var n = []; t;) l(n, Cr(t)), t = $u(Object(t));
            return n
        } : Cr;
        (Ku && "[object DataView]" != zr(new Ku(new ArrayBuffer(1))) || Gu && "[object Map]" != zr(new Gu) || Ju && "[object Promise]" != zr(Ju.resolve()) || Yu && "[object Set]" != zr(new Yu) || Hu && "[object WeakMap]" != zr(new Hu)) && (zr = function(t) {
            var n = ju.call(t);
            if (t = (t = "[object Object]" == n ? t.constructor : T) ? Hr(t) : T) switch (t) {
                case ro:
                    return "[object DataView]";
                case eo:
                    return "[object Map]";
                case uo:
                    return "[object Promise]";
                case oo:
                    return "[object Set]";
                case io:
                    return "[object WeakMap]"
            }
            return n
        });
        var xo = function() {
                var t = 0,
                    n = 0;
                return function(r, e) {
                    var u = Vo(),
                        o = 16 - (u - n);
                    if (n = u, o > 0) {
                        if (150 <= ++t) return r
                    } else t = 0;
                    return _o(r, e)
                }
            }(),
            jo = be(function(t) {
                var n = [];
                return Ve(t).replace(it, function(t, r, e, u) {
                    n.push(e ? u.replace(pt, "$1") : r || t)
                }), n
            }),
            mo = xe(function(t, n) {
                return ke(t) ? cn(t, sn(n, 1, ke, true)) : []
            }),
            wo = xe(function(t, n) {
                var r = re(n);
                return ke(r) && (r = T), ke(t) ? cn(t, sn(n, 1, ke, true), Sr(r)) : [];
            }),
            Ao = xe(function(t, n) {
                var r = re(n);
                return ke(r) && (r = T), ke(t) ? cn(t, sn(n, 1, ke, true), T, r) : []
            }),
            Oo = xe(function(t) {
                var n = a(t, Yn);
                return n.length && n[0] === t[0] ? bn(n) : []
            }),
            ko = xe(function(t) {
                var n = re(t),
                    r = a(t, Yn);
                return n === re(r) ? n = T : r.pop(), r.length && r[0] === t[0] ? bn(r, Sr(n)) : []
            }),
            Eo = xe(function(t) {
                var n = re(t),
                    r = a(t, Yn);
                return n === re(r) ? n = T : r.pop(), r.length && r[0] === t[0] ? bn(r, T, n) : []
            }),
            Io = xe(ee),
            So = xe(function(t, n) {
                n = a(sn(n, 1), String);
                var r = nn(t, n);
                return Mn(t, n.sort(R)), r
            }),
            Ro = xe(function(t) {
                return Tn(sn(t, 1, ke, true));
            }),
            Wo = xe(function(t) {
                var n = re(t);
                return ke(n) && (n = T), Tn(sn(t, 1, ke, true), Sr(n))
            }),
            Bo = xe(function(t) {
                var n = re(t);
                return ke(n) && (n = T), Tn(sn(t, 1, ke, true), T, n)
            }),
            Co = xe(function(t, n) {
                return ke(t) ? cn(t, n) : []
            }),
            zo = xe(function(t) {
                return Gn(i(t, ke))
            }),
            Uo = xe(function(t) {
                var n = re(t);
                return ke(n) && (n = T), Gn(i(t, ke), Sr(n))
            }),
            Mo = xe(function(t) {
                var n = re(t);
                return ke(n) && (n = T), Gn(i(t, ke), T, n)
            }),
            Lo = xe(oe),
            $o = xe(function(t) {
                var n = t.length,
                    n = n > 1 ? t[n - 1] : T,
                    n = typeof n == "function" ? (t.pop(), n) : T;
                return ie(t, n)
            }),
            Do = xe(function(t) {
                function n(n) {
                    return nn(n, t)
                }
                t = sn(t, 1);
                var r = t.length,
                    e = r ? t[0] : 0,
                    u = this.__wrapped__;
                return 1 >= r && !this.__actions__.length && u instanceof Et && L(e) ? (u = u.slice(e, +e + (r ? 1 : 0)), u.__actions__.push({
                    func: ce,
                    args: [n],
                    thisArg: T
                }), new kt(u, this.__chain__).thru(function(t) {
                    return r && !t.length && t.push(T), t
                })) : this.thru(n)
            }),
            Fo = fr(function(t, n, r) {
                yu.call(t, r) ? ++t[r] : t[r] = 1
            }),
            No = fr(function(t, n, r) {
                yu.call(t, r) ? t[r].push(n) : t[r] = [n]
            }),
            Po = xe(function(t, n, e) {
                var u = -1,
                    o = typeof n == "function",
                    i = Zr(n),
                    f = Oe(t) ? Array(t.length) : [];
                return lo(t, function(t) {
                    var c = o ? n : i && null != t ? t[n] : T;
                    f[++u] = c ? r(c, t, e) : jn(t, n, e)
                }), f
            }),
            Zo = fr(function(t, n, r) {
                t[r] = n
            }),
            qo = fr(function(t, n, r) {
                t[r ? 0 : 1].push(n)
            }, function() {
                return [
                    [],
                    []
                ]
            }),
            To = xe(function(t, n) {
                if (null == t) return [];
                var r = n.length;
                return r > 1 && Pr(t, n[0], n[1]) ? n = [] : r > 2 && Pr(n[0], n[1], n[2]) && (n = [n[0]]), Rn(t, sn(n, 1), [])
            }),
            Vo = lu.now,
            Ko = xe(function(t, n, r) {
                var e = 1;
                if (r.length) var u = F(r, Br(Ko)),
                    e = 32 | e;
                return Or(t, e, n, r, u)
            }),
            Go = xe(function(t, n, r) {
                var e = 3;
                if (r.length) var u = F(r, Br(Go)),
                    e = 32 | e;
                return Or(n, e, t, r, u);
            }),
            Jo = xe(function(t, n) {
                return fn(t, 1, n)
            }),
            Yo = xe(function(t, n, r) {
                return fn(t, qe(n) || 0, r)
            });
        be.Cache = Lt;
        var Ho = xe(function(t, n) {
                n = a(sn(n, 1, Nr), Sr());
                var e = n.length;
                return xe(function(u) {
                    for (var o = -1, i = Zu(u.length, e); ++o < i;) u[o] = n[o].call(this, u[o]);
                    return r(t, this, u)
                })
            }),
            Qo = xe(function(t, n) {
                var r = F(n, Br(Qo));
                return Or(t, 32, T, n, r)
            }),
            Xo = xe(function(t, n) {
                var r = F(n, Br(Xo));
                return Or(t, 64, T, n, r)
            }),
            ti = xe(function(t, n) {
                return Or(t, 256, T, T, T, sn(n, 1))
            }),
            ni = Array.isArray,
            ri = Au ? function(t) {
                return t instanceof Au;
            } : uu(false),
            ei = cr(function(t, n) {
                if (to || Vr(n) || Oe(n)) ur(n, Ye(n), t);
                else
                    for (var r in n) yu.call(n, r) && Qt(t, r, n[r])
            }),
            ui = cr(function(t, n) {
                if (to || Vr(n) || Oe(n)) ur(n, He(n), t);
                else
                    for (var r in n) Qt(t, r, n[r])
            }),
            oi = cr(function(t, n, r, e) {
                or(n, He(n), t, e)
            }),
            ii = cr(function(t, n, r, e) {
                or(n, Ye(n), t, e)
            }),
            fi = xe(function(t, n) {
                return nn(t, sn(n, 1))
            }),
            ci = xe(function(t) {
                return t.push(T, Gt), r(oi, T, t)
            }),
            ai = xe(function(t) {
                return t.push(T, Gr), r(_i, T, t)
            }),
            li = yr(function(t, n, r) {
                t[n] = r
            }, uu(ou)),
            si = yr(function(t, n, r) {
                yu.call(t, n) ? t[n].push(r) : t[n] = [r];
            }, Sr),
            hi = xe(jn),
            pi = cr(function(t, n, r) {
                Sn(t, n, r)
            }),
            _i = cr(function(t, n, r, e) {
                Sn(t, n, r, e)
            }),
            vi = xe(function(t, n) {
                return null == t ? {} : (n = a(sn(n, 1), Yr), Wn(t, cn(gn(t, He, bo), n)))
            }),
            gi = xe(function(t, n) {
                return null == t ? {} : Wn(t, sn(n, 1))
            }),
            di = pr(function(t, n, r) {
                return n = n.toLowerCase(), t + (r ? nu(n) : n)
            }),
            yi = pr(function(t, n, r) {
                return t + (r ? "-" : "") + n.toLowerCase()
            }),
            bi = pr(function(t, n, r) {
                return t + (r ? " " : "") + n.toLowerCase()
            }),
            xi = hr("toLowerCase"),
            ji = pr(function(t, n, r) {
                return t + (r ? "_" : "") + n.toLowerCase()
            }),
            mi = pr(function(t, n, r) {
                return t + (r ? " " : "") + Ai(n)
            }),
            wi = pr(function(t, n, r) {
                return t + (r ? " " : "") + n.toUpperCase()
            }),
            Ai = hr("toUpperCase"),
            Oi = xe(function(t, n) {
                try {
                    return r(t, T, n)
                } catch (e) {
                    return Ee(e) ? e : new su(e)
                }
            }),
            ki = xe(function(t, n) {
                return u(sn(n, 1), function(n) {
                    t[n] = Ko(t[n], t)
                }), t
            }),
            Ei = gr(),
            Ii = gr(true),
            Si = xe(function(t, n) {
                return function(r) {
                    return jn(r, t, n)
                }
            }),
            Ri = xe(function(t, n) {
                return function(r) {
                    return jn(t, r, n)
                }
            }),
            Wi = br(a),
            Bi = br(o),
            Ci = br(p),
            zi = mr(),
            Ui = mr(true),
            Mi = W(function(t, n) {
                return t + n
            }),
            Li = Ar("ceil"),
            $i = W(function(t, n) {
                return t / n
            }),
            Di = Ar("floor"),
            Fi = W(function(t, n) {
                return t * n
            }),
            Ni = Ar("round"),
            Pi = W(function(t, n) {
                return t - n
            });
        return jt.after = function(t, n) {
                if (typeof n != "function") throw new _u("Expected a function");
                return t = Pe(t),
                    function() {
                        return 1 > --t ? n.apply(this, arguments) : void 0
                    }
            }, jt.ary = _e, jt.assign = ei, jt.assignIn = ui, jt.assignInWith = oi, jt.assignWith = ii, jt.at = fi, jt.before = ve, jt.bind = Ko, jt.bindAll = ki, jt.bindKey = Go, jt.castArray = je, jt.chain = fe, jt.chunk = function(t, n, r) {
                if (n = (r ? Pr(t, n, r) : n === T) ? 1 : Pu(Pe(n), 0), r = t ? t.length : 0, !r || 1 > n) return [];
                for (var e = 0, u = 0, o = Array(Mu(r / n)); r > e;) o[u++] = Fn(t, e, e += n);
                return o
            }, jt.compact = function(t) {
                for (var n = -1, r = t ? t.length : 0, e = 0, u = []; ++n < r;) {
                    var o = t[n];
                    o && (u[e++] = o)
                }
                return u
            }, jt.concat = function() {
                var t = arguments.length,
                    n = je(arguments[0]);
                if (2 > t) return t ? er(n) : [];
                for (var r = Array(t - 1); t--;) r[t - 1] = arguments[t];
                for (var t = sn(r, 1), r = -1, e = n.length, u = -1, o = t.length, i = Array(e + o); ++r < e;) i[r] = n[r];
                for (; ++u < o;) i[r++] = t[u];
                return i
            }, jt.cond = function(t) {
                var n = t ? t.length : 0,
                    e = Sr();
                return t = n ? a(t, function(t) {
                    if ("function" != typeof t[1]) throw new _u("Expected a function");
                    return [e(t[0]), t[1]]
                }) : [], xe(function(e) {
                    for (var u = -1; ++u < n;) {
                        var o = t[u];
                        if (r(o[0], this, e)) return r(o[1], this, e)
                    }
                })
            }, jt.conforms = function(t) {
                return un(en(t, true))
            }, jt.constant = uu, jt.countBy = Fo, jt.create = function(t, n) {
                var r = on(t);
                return n ? tn(r, n) : r
            }, jt.curry = ge, jt.curryRight = de, jt.debounce = ye, jt.defaults = ci, jt.defaultsDeep = ai, jt.defer = Jo, jt.delay = Yo, jt.difference = mo, jt.differenceBy = wo, jt.differenceWith = Ao, jt.drop = Xr, jt.dropRight = te, jt.dropRightWhile = function(t, n) {
                return t && t.length ? Vn(t, Sr(n, 3), true, true) : []
            }, jt.dropWhile = function(t, n) {
                return t && t.length ? Vn(t, Sr(n, 3), true) : []
            }, jt.fill = function(t, n, r, e) {
                var u = t ? t.length : 0;
                if (!u) return [];
                for (r && typeof r != "number" && Pr(t, n, r) && (r = 0, e = u), u = t.length, r = Pe(r), 0 > r && (r = -r > u ? 0 : u + r), e = e === T || e > u ? u : Pe(e), 0 > e && (e += u), e = r > e ? 0 : Ze(e); e > r;) t[r++] = n;
                return t
            }, jt.filter = function(t, n) {
                return (ni(t) ? i : ln)(t, Sr(n, 3))
            }, jt.flatMap = function(t, n) {
                return sn(he(t, n), 1)
            }, jt.flatMapDeep = function(t, n) {
                return sn(he(t, n), V)
            }, jt.flatMapDepth = function(t, n, r) {
                return r = r === T ? 1 : Pe(r), sn(he(t, n), r)
            }, jt.flatten = function(t) {
                return t && t.length ? sn(t, 1) : []
            }, jt.flattenDeep = function(t) {
                return t && t.length ? sn(t, V) : []
            }, jt.flattenDepth = function(t, n) {
                return t && t.length ? (n = n === T ? 1 : Pe(n), sn(t, n)) : []
            }, jt.flip = function(t) {
                return Or(t, 512)
            }, jt.flow = Ei, jt.flowRight = Ii, jt.fromPairs = function(t) {
                for (var n = -1, r = t ? t.length : 0, e = {}; ++n < r;) {
                    var u = t[n];
                    e[u[0]] = u[1]
                }
                return e
            }, jt.functions = function(t) {
                return null == t ? [] : _n(t, Ye(t))
            }, jt.functionsIn = function(t) {
                return null == t ? [] : _n(t, He(t));
            }, jt.groupBy = No, jt.initial = function(t) {
                return te(t, 1)
            }, jt.intersection = Oo, jt.intersectionBy = ko, jt.intersectionWith = Eo, jt.invert = li, jt.invertBy = si, jt.invokeMap = Po, jt.iteratee = iu, jt.keyBy = Zo, jt.keys = Ye, jt.keysIn = He, jt.map = he, jt.mapKeys = function(t, n) {
                var r = {};
                return n = Sr(n, 3), hn(t, function(t, e, u) {
                    r[n(t, e, u)] = t
                }), r
            }, jt.mapValues = function(t, n) {
                var r = {};
                return n = Sr(n, 3), hn(t, function(t, e, u) {
                    r[e] = n(t, e, u)
                }), r
            }, jt.matches = function(t) {
                return En(en(t, true))
            }, jt.matchesProperty = function(t, n) {
                return In(t, en(n, true));
            }, jt.memoize = be, jt.merge = pi, jt.mergeWith = _i, jt.method = Si, jt.methodOf = Ri, jt.mixin = fu, jt.negate = function(t) {
                if (typeof t != "function") throw new _u("Expected a function");
                return function() {
                    return !t.apply(this, arguments)
                }
            }, jt.nthArg = function(t) {
                return t = Pe(t),
                    function() {
                        return arguments[t]
                    }
            }, jt.omit = vi, jt.omitBy = function(t, n) {
                return n = Sr(n), Bn(t, function(t, r) {
                    return !n(t, r)
                })
            }, jt.once = function(t) {
                return ve(2, t)
            }, jt.orderBy = function(t, n, r, e) {
                return null == t ? [] : (ni(n) || (n = null == n ? [] : [n]), r = e ? T : r, ni(r) || (r = null == r ? [] : [r]),
                    Rn(t, n, r))
            }, jt.over = Wi, jt.overArgs = Ho, jt.overEvery = Bi, jt.overSome = Ci, jt.partial = Qo, jt.partialRight = Xo, jt.partition = qo, jt.pick = gi, jt.pickBy = function(t, n) {
                return null == t ? {} : Bn(t, Sr(n))
            }, jt.property = au, jt.propertyOf = function(t) {
                return function(n) {
                    return null == t ? T : vn(t, n)
                }
            }, jt.pull = Io, jt.pullAll = ee, jt.pullAllBy = function(t, n, r) {
                return t && t.length && n && n.length ? Un(t, n, Sr(r)) : t
            }, jt.pullAllWith = function(t, n, r) {
                return t && t.length && n && n.length ? Un(t, n, T, r) : t
            }, jt.pullAt = So, jt.range = zi, jt.rangeRight = Ui, jt.rearg = ti,
            jt.reject = function(t, n) {
                var r = ni(t) ? i : ln;
                return n = Sr(n, 3), r(t, function(t, r, e) {
                    return !n(t, r, e)
                })
            }, jt.remove = function(t, n) {
                var r = [];
                if (!t || !t.length) return r;
                var e = -1,
                    u = [],
                    o = t.length;
                for (n = Sr(n, 3); ++e < o;) {
                    var i = t[e];
                    n(i, e, t) && (r.push(i), u.push(e))
                }
                return Mn(t, u), r
            }, jt.rest = xe, jt.reverse = ue, jt.sampleSize = pe, jt.set = function(t, n, r) {
                return null == t ? t : Dn(t, n, r)
            }, jt.setWith = function(t, n, r, e) {
                return e = typeof e == "function" ? e : T, null == t ? t : Dn(t, n, r, e)
            }, jt.shuffle = function(t) {
                return pe(t, 4294967295)
            }, jt.slice = function(t, n, r) {
                var e = t ? t.length : 0;
                return e ? (r && typeof r != "number" && Pr(t, n, r) ? (n = 0, r = e) : (n = null == n ? 0 : Pe(n), r = r === T ? e : Pe(r)), Fn(t, n, r)) : []
            }, jt.sortBy = To, jt.sortedUniq = function(t) {
                return t && t.length ? qn(t) : []
            }, jt.sortedUniqBy = function(t, n) {
                return t && t.length ? qn(t, Sr(n)) : []
            }, jt.split = function(t, n, r) {
                return r && typeof r != "number" && Pr(t, n, r) && (n = r = T), r = r === T ? 4294967295 : r >>> 0, r ? (t = Ve(t)) && (typeof n == "string" || null != n && !Me(n)) && (n += "", "" == n && Wt.test(t)) ? Qn(t.match(St), 0, r) : t.split(n, r) : []
            }, jt.spread = function(t, n) {
                if (typeof t != "function") throw new _u("Expected a function");
                return n = n === T ? 0 : Pu(Pe(n), 0), xe(function(e) {
                    var u = e[n];
                    return e = Qn(e, 0, n), u && l(e, u), r(t, this, e)
                })
            }, jt.tail = function(t) {
                return Xr(t, 1)
            }, jt.take = function(t, n, r) {
                return t && t.length ? (n = r || n === T ? 1 : Pe(n), Fn(t, 0, 0 > n ? 0 : n)) : []
            }, jt.takeRight = function(t, n, r) {
                var e = t ? t.length : 0;
                return e ? (n = r || n === T ? 1 : Pe(n), n = e - n, Fn(t, 0 > n ? 0 : n, e)) : []
            }, jt.takeRightWhile = function(t, n) {
                return t && t.length ? Vn(t, Sr(n, 3), false, true) : []
            }, jt.takeWhile = function(t, n) {
                return t && t.length ? Vn(t, Sr(n, 3)) : []
            }, jt.tap = function(t, n) {
                return n(t), t
            }, jt.throttle = function(t, n, r) {
                var e = true,
                    u = true;
                if (typeof t != "function") throw new _u("Expected a function");
                return We(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), ye(t, n, {
                    leading: e,
                    maxWait: n,
                    trailing: u
                })
            }, jt.thru = ce, jt.toArray = Ne, jt.toPairs = Qe, jt.toPairsIn = Xe, jt.toPath = function(t) {
                return ni(t) ? a(t, Yr) : $e(t) ? [t] : er(jo(t))
            }, jt.toPlainObject = Te, jt.transform = function(t, n, r) {
                var e = ni(t) || De(t);
                if (n = Sr(n, 4), null == r)
                    if (e || We(t)) {
                        var o = t.constructor;
                        r = e ? ni(t) ? new o : [] : Ie(o) ? on($u(Object(t))) : {}
                    } else r = {};
                return (e ? u : hn)(t, function(t, e, u) {
                    return n(r, t, e, u)
                }), r
            }, jt.unary = function(t) {
                return _e(t, 1)
            }, jt.union = Ro, jt.unionBy = Wo, jt.unionWith = Bo, jt.uniq = function(t) {
                return t && t.length ? Tn(t) : []
            }, jt.uniqBy = function(t, n) {
                return t && t.length ? Tn(t, Sr(n)) : []
            }, jt.uniqWith = function(t, n) {
                return t && t.length ? Tn(t, T, n) : []
            }, jt.unset = function(t, n) {
                var r;
                if (null == t) r = true;
                else {
                    r = t;
                    var e = n,
                        e = Zr(e, r) ? [e] : Hn(e);
                    r = Jr(r, e), e = re(e), r = null != r && Ge(r, e) ? delete r[e] : true
                }
                return r
            }, jt.unzip = oe, jt.unzipWith = ie, jt.update = function(t, n, r) {
                return null == t ? t : Dn(t, n, (typeof r == "function" ? r : ou)(vn(t, n)), void 0);
            }, jt.updateWith = function(t, n, r, e) {
                return e = typeof e == "function" ? e : T, null != t && (t = Dn(t, n, (typeof r == "function" ? r : ou)(vn(t, n)), e)), t
            }, jt.values = tu, jt.valuesIn = function(t) {
                return null == t ? [] : k(t, He(t))
            }, jt.without = Co, jt.words = eu, jt.wrap = function(t, n) {
                return n = null == n ? ou : n, Qo(n, t)
            }, jt.xor = zo, jt.xorBy = Uo, jt.xorWith = Mo, jt.zip = Lo, jt.zipObject = function(t, n) {
                return Jn(t || [], n || [], Qt)
            }, jt.zipObjectDeep = function(t, n) {
                return Jn(t || [], n || [], Dn)
            }, jt.zipWith = $o, jt.entries = Qe, jt.entriesIn = Xe, jt.extend = ui, jt.extendWith = oi,
            fu(jt, jt), jt.add = Mi, jt.attempt = Oi, jt.camelCase = di, jt.capitalize = nu, jt.ceil = Li, jt.clamp = function(t, n, r) {
                return r === T && (r = n, n = T), r !== T && (r = qe(r), r = r === r ? r : 0), n !== T && (n = qe(n), n = n === n ? n : 0), rn(qe(t), n, r)
            }, jt.clone = function(t) {
                return en(t, false, true)
            }, jt.cloneDeep = function(t) {
                return en(t, true, true)
            }, jt.cloneDeepWith = function(t, n) {
                return en(t, true, true, n)
            }, jt.cloneWith = function(t, n) {
                return en(t, false, true, n)
            }, jt.deburr = ru, jt.divide = $i, jt.endsWith = function(t, n, r) {
                t = Ve(t), n = typeof n == "string" ? n : n + "";
                var e = t.length;
                return r = r === T ? e : rn(Pe(r), 0, e),
                    r -= n.length, r >= 0 && t.indexOf(n, r) == r
            }, jt.eq = me, jt.escape = function(t) {
                return (t = Ve(t)) && tt.test(t) ? t.replace(Q, C) : t
            }, jt.escapeRegExp = function(t) {
                return (t = Ve(t)) && ct.test(t) ? t.replace(ft, "\\$&") : t
            }, jt.every = function(t, n, r) {
                var e = ni(t) ? o : an;
                return r && Pr(t, n, r) && (n = T), e(t, Sr(n, 3))
            }, jt.find = function(t, n) {
                if (n = Sr(n, 3), ni(t)) {
                    var r = g(t, n);
                    return r > -1 ? t[r] : T
                }
                return v(t, n, lo)
            }, jt.findIndex = function(t, n) {
                return t && t.length ? g(t, Sr(n, 3)) : -1
            }, jt.findKey = function(t, n) {
                return v(t, Sr(n, 3), hn, true)
            }, jt.findLast = function(t, n) {
                if (n = Sr(n, 3), ni(t)) {
                    var r = g(t, n, true);
                    return r > -1 ? t[r] : T
                }
                return v(t, n, so)
            }, jt.findLastIndex = function(t, n) {
                return t && t.length ? g(t, Sr(n, 3), true) : -1
            }, jt.findLastKey = function(t, n) {
                return v(t, Sr(n, 3), pn, true)
            }, jt.floor = Di, jt.forEach = le, jt.forEachRight = se, jt.forIn = function(t, n) {
                return null == t ? t : ho(t, Sr(n), He)
            }, jt.forInRight = function(t, n) {
                return null == t ? t : po(t, Sr(n), He)
            }, jt.forOwn = function(t, n) {
                return t && hn(t, Sr(n))
            }, jt.forOwnRight = function(t, n) {
                return t && pn(t, Sr(n))
            }, jt.get = Ke, jt.gt = we, jt.gte = function(t, n) {
                return t >= n;
            }, jt.has = Ge, jt.hasIn = Je, jt.head = ne, jt.identity = ou, jt.includes = function(t, n, r, e) {
                return t = Oe(t) ? t : tu(t), r = r && !e ? Pe(r) : 0, e = t.length, 0 > r && (r = Pu(e + r, 0)), Le(t) ? e >= r && -1 < t.indexOf(n, r) : !!e && -1 < d(t, n, r)
            }, jt.indexOf = function(t, n, r) {
                var e = t ? t.length : 0;
                return e ? (r = Pe(r), 0 > r && (r = Pu(e + r, 0)), d(t, n, r)) : -1
            }, jt.inRange = function(t, n, r) {
                return n = qe(n) || 0, r === T ? (r = n, n = 0) : r = qe(r) || 0, t = qe(t), t >= Zu(n, r) && t < Pu(n, r)
            }, jt.invoke = hi, jt.isArguments = Ae, jt.isArray = ni, jt.isArrayBuffer = function(t) {
                return Be(t) && "[object ArrayBuffer]" == ju.call(t);
            }, jt.isArrayLike = Oe, jt.isArrayLikeObject = ke, jt.isBoolean = function(t) {
                return true === t || false === t || Be(t) && "[object Boolean]" == ju.call(t)
            }, jt.isBuffer = ri, jt.isDate = function(t) {
                return Be(t) && "[object Date]" == ju.call(t)
            }, jt.isElement = function(t) {
                return !!t && 1 === t.nodeType && Be(t) && !Ue(t)
            }, jt.isEmpty = function(t) {
                if (Oe(t) && (ni(t) || Le(t) || Ie(t.splice) || Ae(t) || ri(t))) return !t.length;
                if (Be(t)) {
                    var n = zr(t);
                    if ("[object Map]" == n || "[object Set]" == n) return !t.size
                }
                for (var r in t)
                    if (yu.call(t, r)) return false;
                return !(to && Ye(t).length);
            }, jt.isEqual = function(t, n) {
                return mn(t, n)
            }, jt.isEqualWith = function(t, n, r) {
                var e = (r = typeof r == "function" ? r : T) ? r(t, n) : T;
                return e === T ? mn(t, n, r) : !!e
            }, jt.isError = Ee, jt.isFinite = function(t) {
                return typeof t == "number" && Du(t)
            }, jt.isFunction = Ie, jt.isInteger = Se, jt.isLength = Re, jt.isMap = function(t) {
                return Be(t) && "[object Map]" == zr(t)
            }, jt.isMatch = function(t, n) {
                return t === n || wn(t, n, Rr(n))
            }, jt.isMatchWith = function(t, n, r) {
                return r = typeof r == "function" ? r : T, wn(t, n, Rr(n), r)
            }, jt.isNaN = function(t) {
                return ze(t) && t != +t
            },
            jt.isNative = Ce, jt.isNil = function(t) {
                return null == t
            }, jt.isNull = function(t) {
                return null === t
            }, jt.isNumber = ze, jt.isObject = We, jt.isObjectLike = Be, jt.isPlainObject = Ue, jt.isRegExp = Me, jt.isSafeInteger = function(t) {
                return Se(t) && t >= -9007199254740991 && 9007199254740991 >= t
            }, jt.isSet = function(t) {
                return Be(t) && "[object Set]" == zr(t)
            }, jt.isString = Le, jt.isSymbol = $e, jt.isTypedArray = De, jt.isUndefined = function(t) {
                return t === T
            }, jt.isWeakMap = function(t) {
                return Be(t) && "[object WeakMap]" == zr(t)
            }, jt.isWeakSet = function(t) {
                return Be(t) && "[object WeakSet]" == ju.call(t);
            }, jt.join = function(t, n) {
                return t ? Fu.call(t, n) : ""
            }, jt.kebabCase = yi, jt.last = re, jt.lastIndexOf = function(t, n, r) {
                var e = t ? t.length : 0;
                if (!e) return -1;
                var u = e;
                if (r !== T && (u = Pe(r), u = (0 > u ? Pu(e + u, 0) : Zu(u, e - 1)) + 1), n !== n) return U(t, u, true);
                for (; u--;)
                    if (t[u] === n) return u;
                return -1
            }, jt.lowerCase = bi, jt.lowerFirst = xi, jt.lt = Fe, jt.lte = function(t, n) {
                return n >= t
            }, jt.max = function(t) {
                return t && t.length ? _(t, ou, we) : T
            }, jt.maxBy = function(t, n) {
                return t && t.length ? _(t, Sr(n), we) : T
            }, jt.mean = function(t) {
                return b(t, ou)
            }, jt.meanBy = function(t, n) {
                return b(t, Sr(n))
            }, jt.min = function(t) {
                return t && t.length ? _(t, ou, Fe) : T
            }, jt.minBy = function(t, n) {
                return t && t.length ? _(t, Sr(n), Fe) : T
            }, jt.multiply = Fi, jt.noConflict = function() {
                return Jt._ === this && (Jt._ = mu), this
            }, jt.noop = cu, jt.now = Vo, jt.pad = function(t, n, r) {
                t = Ve(t);
                var e = (n = Pe(n)) ? P(t) : 0;
                return n && n > e ? (n = (n - e) / 2, xr(Lu(n), r) + t + xr(Mu(n), r)) : t
            }, jt.padEnd = function(t, n, r) {
                t = Ve(t);
                var e = (n = Pe(n)) ? P(t) : 0;
                return n && n > e ? t + xr(n - e, r) : t
            }, jt.padStart = function(t, n, r) {
                t = Ve(t);
                var e = (n = Pe(n)) ? P(t) : 0;
                return n && n > e ? xr(n - e, r) + t : t;
            }, jt.parseInt = function(t, n, r) {
                return r || null == n ? n = 0 : n && (n = +n), t = Ve(t).replace(at, ""), qu(t, n || (gt.test(t) ? 16 : 10))
            }, jt.random = function(t, n, r) {
                if (r && typeof r != "boolean" && Pr(t, n, r) && (n = r = T), r === T && (typeof n == "boolean" ? (r = n, n = T) : typeof t == "boolean" && (r = t, t = T)), t === T && n === T ? (t = 0, n = 1) : (t = qe(t) || 0, n === T ? (n = t, t = 0) : n = qe(n) || 0), t > n) {
                    var e = t;
                    t = n, n = e
                }
                return r || t % 1 || n % 1 ? (r = Tu(), Zu(t + r * (n - t + Nt("1e-" + ((r + "").length - 1))), n)) : Ln(t, n)
            }, jt.reduce = function(t, n, r) {
                var e = ni(t) ? s : x,
                    u = 3 > arguments.length;
                return e(t, Sr(n, 4), r, u, lo);
            }, jt.reduceRight = function(t, n, r) {
                var e = ni(t) ? h : x,
                    u = 3 > arguments.length;
                return e(t, Sr(n, 4), r, u, so)
            }, jt.repeat = function(t, n, r) {
                return n = (r ? Pr(t, n, r) : n === T) ? 1 : Pe(n), $n(Ve(t), n)
            }, jt.replace = function() {
                var t = arguments,
                    n = Ve(t[0]);
                return 3 > t.length ? n : n.replace(t[1], t[2])
            }, jt.result = function(t, n, r) {
                n = Zr(n, t) ? [n] : Hn(n);
                var e = -1,
                    u = n.length;
                for (u || (t = T, u = 1); ++e < u;) {
                    var o = null == t ? T : t[n[e]];
                    o === T && (e = u, o = r), t = Ie(o) ? o.call(t) : o
                }
                return t
            }, jt.round = Ni, jt.runInContext = q, jt.sample = function(t) {
                t = Oe(t) ? t : tu(t);
                var n = t.length;
                return n > 0 ? t[Ln(0, n - 1)] : T
            }, jt.size = function(t) {
                if (null == t) return 0;
                if (Oe(t)) {
                    var n = t.length;
                    return n && Le(t) ? P(t) : n
                }
                return Be(t) && (n = zr(t), "[object Map]" == n || "[object Set]" == n) ? t.size : Ye(t).length
            }, jt.snakeCase = ji, jt.some = function(t, n, r) {
                var e = ni(t) ? p : Nn;
                return r && Pr(t, n, r) && (n = T), e(t, Sr(n, 3))
            }, jt.sortedIndex = function(t, n) {
                return Pn(t, n)
            }, jt.sortedIndexBy = function(t, n, r) {
                return Zn(t, n, Sr(r))
            }, jt.sortedIndexOf = function(t, n) {
                var r = t ? t.length : 0;
                if (r) {
                    var e = Pn(t, n);
                    if (r > e && me(t[e], n)) return e
                }
                return -1;
            }, jt.sortedLastIndex = function(t, n) {
                return Pn(t, n, true)
            }, jt.sortedLastIndexBy = function(t, n, r) {
                return Zn(t, n, Sr(r), true)
            }, jt.sortedLastIndexOf = function(t, n) {
                if (t && t.length) {
                    var r = Pn(t, n, true) - 1;
                    if (me(t[r], n)) return r
                }
                return -1
            }, jt.startCase = mi, jt.startsWith = function(t, n, r) {
                return t = Ve(t), r = rn(Pe(r), 0, t.length), t.lastIndexOf(n, r) == r
            }, jt.subtract = Pi, jt.sum = function(t) {
                return t && t.length ? m(t, ou) : 0
            }, jt.sumBy = function(t, n) {
                return t && t.length ? m(t, Sr(n)) : 0
            }, jt.template = function(t, n, r) {
                var e = jt.templateSettings;
                r && Pr(t, n, r) && (n = T),
                    t = Ve(t), n = oi({}, n, e, Gt), r = oi({}, n.imports, e.imports, Gt);
                var u, o, i = Ye(r),
                    f = k(r, i),
                    c = 0;
                r = n.interpolate || wt;
                var a = "__p+='";
                r = pu((n.escape || wt).source + "|" + r.source + "|" + (r === et ? _t : wt).source + "|" + (n.evaluate || wt).source + "|$", "g");
                var l = "sourceURL" in n ? "//# sourceURL=" + n.sourceURL + "\n" : "";
                if (t.replace(r, function(n, r, e, i, f, l) {
                        return e || (e = i), a += t.slice(c, l).replace(At, z), r && (u = true, a += "'+__e(" + r + ")+'"), f && (o = true, a += "';" + f + ";\n__p+='"), e && (a += "'+((__t=(" + e + "))==null?'':__t)+'"), c = l + n.length, n
                    }), a += "';", (n = n.variable) || (a = "with(obj){" + a + "}"),
                    a = (o ? a.replace(G, "") : a).replace(J, "$1").replace(Y, "$1;"), a = "function(" + (n || "obj") + "){" + (n ? "" : "obj||(obj={});") + "var __t,__p=''" + (u ? ",__e=_.escape" : "") + (o ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + a + "return __p}", n = Oi(function() {
                        return Function(i, l + "return " + a).apply(T, f)
                    }), n.source = a, Ee(n)) throw n;
                return n
            }, jt.times = function(t, n) {
                if (t = Pe(t), 1 > t || t > 9007199254740991) return [];
                var r = 4294967295,
                    e = Zu(t, 4294967295);
                for (n = Sr(n), t -= 4294967295, e = w(e, n); ++r < t;) n(r);
                return e;
            }, jt.toInteger = Pe, jt.toLength = Ze, jt.toLower = function(t) {
                return Ve(t).toLowerCase()
            }, jt.toNumber = qe, jt.toSafeInteger = function(t) {
                return rn(Pe(t), -9007199254740991, 9007199254740991)
            }, jt.toString = Ve, jt.toUpper = function(t) {
                return Ve(t).toUpperCase()
            }, jt.trim = function(t, n, r) {
                return (t = Ve(t)) ? r || n === T ? t.replace(at, "") : (n += "") ? (t = t.match(St), n = n.match(St), Qn(t, E(t, n), I(t, n) + 1).join("")) : t : t
            }, jt.trimEnd = function(t, n, r) {
                return (t = Ve(t)) ? r || n === T ? t.replace(st, "") : (n += "") ? (t = t.match(St), n = I(t, n.match(St)) + 1, Qn(t, 0, n).join("")) : t : t;
            }, jt.trimStart = function(t, n, r) {
                return (t = Ve(t)) ? r || n === T ? t.replace(lt, "") : (n += "") ? (t = t.match(St), n = E(t, n.match(St)), Qn(t, n).join("")) : t : t
            }, jt.truncate = function(t, n) {
                var r = 30,
                    e = "...";
                if (We(n)) var u = "separator" in n ? n.separator : u,
                    r = "length" in n ? Pe(n.length) : r,
                    e = "omission" in n ? Ve(n.omission) : e;
                t = Ve(t);
                var o = t.length;
                if (Wt.test(t)) var i = t.match(St),
                    o = i.length;
                if (r >= o) return t;
                if (o = r - P(e), 1 > o) return e;
                if (r = i ? Qn(i, 0, o).join("") : t.slice(0, o), u === T) return r + e;
                if (i && (o += r.length - o), Me(u)) {
                    if (t.slice(o).search(u)) {
                        var f = r;
                        for (u.global || (u = pu(u.source, Ve(vt.exec(u)) + "g")), u.lastIndex = 0; i = u.exec(f);) var c = i.index;
                        r = r.slice(0, c === T ? o : c)
                    }
                } else t.indexOf(u, o) != o && (u = r.lastIndexOf(u), u > -1 && (r = r.slice(0, u)));
                return r + e
            }, jt.unescape = function(t) {
                return (t = Ve(t)) && X.test(t) ? t.replace(H, Z) : t
            }, jt.uniqueId = function(t) {
                var n = ++bu;
                return Ve(t) + n
            }, jt.upperCase = wi, jt.upperFirst = Ai, jt.each = le, jt.eachRight = se, jt.first = ne, fu(jt, function() {
                var t = {};
                return hn(jt, function(n, r) {
                    yu.call(jt.prototype, r) || (t[r] = n)
                }), t
            }(), {
                chain: false
            }),
            jt.VERSION = "4.10.0", u("bind bindKey curry curryRight partial partialRight".split(" "), function(t) {
                jt[t].placeholder = jt
            }), u(["drop", "take"], function(t, n) {
                Et.prototype[t] = function(r) {
                    var e = this.__filtered__;
                    if (e && !n) return new Et(this);
                    r = r === T ? 1 : Pu(Pe(r), 0);
                    var u = this.clone();
                    return e ? u.__takeCount__ = Zu(r, u.__takeCount__) : u.__views__.push({
                        size: Zu(r, 4294967295),
                        type: t + (0 > u.__dir__ ? "Right" : "")
                    }), u
                }, Et.prototype[t + "Right"] = function(n) {
                    return this.reverse()[t](n).reverse()
                }
            }), u(["filter", "map", "takeWhile"], function(t, n) {
                var r = n + 1,
                    e = 1 == r || 3 == r;
                Et.prototype[t] = function(t) {
                    var n = this.clone();
                    return n.__iteratees__.push({
                        iteratee: Sr(t, 3),
                        type: r
                    }), n.__filtered__ = n.__filtered__ || e, n
                }
            }), u(["head", "last"], function(t, n) {
                var r = "take" + (n ? "Right" : "");
                Et.prototype[t] = function() {
                    return this[r](1).value()[0]
                }
            }), u(["initial", "tail"], function(t, n) {
                var r = "drop" + (n ? "" : "Right");
                Et.prototype[t] = function() {
                    return this.__filtered__ ? new Et(this) : this[r](1)
                }
            }), Et.prototype.compact = function() {
                return this.filter(ou)
            }, Et.prototype.find = function(t) {
                return this.filter(t).head()
            }, Et.prototype.findLast = function(t) {
                return this.reverse().find(t)
            }, Et.prototype.invokeMap = xe(function(t, n) {
                return typeof t == "function" ? new Et(this) : this.map(function(r) {
                    return jn(r, t, n)
                })
            }), Et.prototype.reject = function(t) {
                return t = Sr(t, 3), this.filter(function(n) {
                    return !t(n)
                })
            }, Et.prototype.slice = function(t, n) {
                t = Pe(t);
                var r = this;
                return r.__filtered__ && (t > 0 || 0 > n) ? new Et(r) : (0 > t ? r = r.takeRight(-t) : t && (r = r.drop(t)), n !== T && (n = Pe(n), r = 0 > n ? r.dropRight(-n) : r.take(n - t)), r)
            }, Et.prototype.takeRightWhile = function(t) {
                return this.reverse().takeWhile(t).reverse()
            }, Et.prototype.toArray = function() {
                return this.take(4294967295)
            }, hn(Et.prototype, function(t, n) {
                var r = /^(?:filter|find|map|reject)|While$/.test(n),
                    e = /^(?:head|last)$/.test(n),
                    u = jt[e ? "take" + ("last" == n ? "Right" : "") : n],
                    o = e || /^find/.test(n);
                u && (jt.prototype[n] = function() {
                    function n(t) {
                        return t = u.apply(jt, l([t], f)), e && h ? t[0] : t
                    }
                    var i = this.__wrapped__,
                        f = e ? [1] : arguments,
                        c = i instanceof Et,
                        a = f[0],
                        s = c || ni(i);
                    s && r && typeof a == "function" && 1 != a.length && (c = s = false);
                    var h = this.__chain__,
                        p = !!this.__actions__.length,
                        a = o && !h,
                        c = c && !p;
                    return !o && s ? (i = c ? i : new Et(this), i = t.apply(i, f), i.__actions__.push({
                        func: ce,
                        args: [n],
                        thisArg: T
                    }), new kt(i, h)) : a && c ? t.apply(this, f) : (i = this.thru(n), a ? e ? i.value()[0] : i.value() : i)
                })
            }), u("pop push shift sort splice unshift".split(" "), function(t) {
                var n = vu[t],
                    r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                    e = /^(?:pop|shift)$/.test(t);
                jt.prototype[t] = function() {
                    var t = arguments;
                    if (e && !this.__chain__) {
                        var u = this.value();
                        return n.apply(ni(u) ? u : [], t)
                    }
                    return this[r](function(r) {
                        return n.apply(ni(r) ? r : [], t)
                    });
                }
            }), hn(Et.prototype, function(t, n) {
                var r = jt[n];
                if (r) {
                    var e = r.name + "";
                    (no[e] || (no[e] = [])).push({
                        name: n,
                        func: r
                    })
                }
            }), no[dr(T, 2).name] = [{
                name: "wrapper",
                func: T
            }], Et.prototype.clone = function() {
                var t = new Et(this.__wrapped__);
                return t.__actions__ = er(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = er(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = er(this.__views__), t
            }, Et.prototype.reverse = function() {
                if (this.__filtered__) {
                    var t = new Et(this);
                    t.__dir__ = -1,
                        t.__filtered__ = true
                } else t = this.clone(), t.__dir__ *= -1;
                return t
            }, Et.prototype.value = function() {
                var t, n = this.__wrapped__.value(),
                    r = this.__dir__,
                    e = ni(n),
                    u = 0 > r,
                    o = e ? n.length : 0;
                t = o;
                for (var i = this.__views__, f = 0, c = -1, a = i.length; ++c < a;) {
                    var l = i[c],
                        s = l.size;
                    switch (l.type) {
                        case "drop":
                            f += s;
                            break;
                        case "dropRight":
                            t -= s;
                            break;
                        case "take":
                            t = Zu(t, f + s);
                            break;
                        case "takeRight":
                            f = Pu(f, t - s)
                    }
                }
                if (t = {
                        start: f,
                        end: t
                    }, i = t.start, f = t.end, t = f - i, u = u ? f : i - 1, i = this.__iteratees__, f = i.length, c = 0, a = Zu(t, this.__takeCount__), !e || 200 > o || o == t && a == t) return Kn(n, this.__actions__);
                e = [];
                t: for (; t-- && a > c;) {
                    for (u += r, o = -1, l = n[u]; ++o < f;) {
                        var h = i[o],
                            s = h.type,
                            h = (0, h.iteratee)(l);
                        if (2 == s) l = h;
                        else if (!h) {
                            if (1 == s) continue t;
                            break t
                        }
                    }
                    e[c++] = l
                }
                return e
            }, jt.prototype.at = Do, jt.prototype.chain = function() {
                return fe(this)
            }, jt.prototype.commit = function() {
                return new kt(this.value(), this.__chain__)
            }, jt.prototype.next = function() {
                this.__values__ === T && (this.__values__ = Ne(this.value()));
                var t = this.__index__ >= this.__values__.length,
                    n = t ? T : this.__values__[this.__index__++];
                return {
                    done: t,
                    value: n
                }
            }, jt.prototype.plant = function(t) {
                for (var n, r = this; r instanceof Ot;) {
                    var e = Qr(r);
                    e.__index__ = 0, e.__values__ = T, n ? u.__wrapped__ = e : n = e;
                    var u = e,
                        r = r.__wrapped__
                }
                return u.__wrapped__ = t, n
            }, jt.prototype.reverse = function() {
                var t = this.__wrapped__;
                return t instanceof Et ? (this.__actions__.length && (t = new Et(this)), t = t.reverse(), t.__actions__.push({
                    func: ce,
                    args: [ue],
                    thisArg: T
                }), new kt(t, this.__chain__)) : this.thru(ue)
            }, jt.prototype.toJSON = jt.prototype.valueOf = jt.prototype.value = function() {
                return Kn(this.__wrapped__, this.__actions__)
            }, Wu && (jt.prototype[Wu] = ae),
            jt
    }
    var T, V = 1 / 0,
        K = NaN,
        G = /\b__p\+='';/g,
        J = /\b(__p\+=)''\+/g,
        Y = /(__e\(.*?\)|\b__t\))\+'';/g,
        H = /&(?:amp|lt|gt|quot|#39|#96);/g,
        Q = /[&<>"'`]/g,
        X = RegExp(H.source),
        tt = RegExp(Q.source),
        nt = /<%-([\s\S]+?)%>/g,
        rt = /<%([\s\S]+?)%>/g,
        et = /<%=([\s\S]+?)%>/g,
        ut = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        ot = /^\w*$/,
        it = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,
        ft = /[\\^$.*+?()[\]{}|]/g,
        ct = RegExp(ft.source),
        at = /^\s+|\s+$/g,
        lt = /^\s+/,
        st = /\s+$/,
        ht = /[a-zA-Z0-9]+/g,
        pt = /\\(\\)?/g,
        _t = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        vt = /\w*$/,
        gt = /^0x/i,
        dt = /^[-+]0x[0-9a-f]+$/i,
        yt = /^0b[01]+$/i,
        bt = /^\[object .+?Constructor\]$/,
        xt = /^0o[0-7]+$/i,
        jt = /^(?:0|[1-9]\d*)$/,
        mt = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
        wt = /($^)/,
        At = /['\n\r\u2028\u2029\\]/g,
        Ot = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?)*",
        kt = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + Ot,
        Et = "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]?|[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",
        It = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]", "g"),
        St = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + Et + Ot, "g"),
        Rt = RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|\\d+", kt].join("|"), "g"),
        Wt = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),
        Bt = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        Ct = "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise Reflect RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),
        zt = {};
    zt["[object Float32Array]"] = zt["[object Float64Array]"] = zt["[object Int8Array]"] = zt["[object Int16Array]"] = zt["[object Int32Array]"] = zt["[object Uint8Array]"] = zt["[object Uint8ClampedArray]"] = zt["[object Uint16Array]"] = zt["[object Uint32Array]"] = true, zt["[object Arguments]"] = zt["[object Array]"] = zt["[object ArrayBuffer]"] = zt["[object Boolean]"] = zt["[object DataView]"] = zt["[object Date]"] = zt["[object Error]"] = zt["[object Function]"] = zt["[object Map]"] = zt["[object Number]"] = zt["[object Object]"] = zt["[object RegExp]"] = zt["[object Set]"] = zt["[object String]"] = zt["[object WeakMap]"] = false;
    var Ut = {};
    Ut["[object Arguments]"] = Ut["[object Array]"] = Ut["[object ArrayBuffer]"] = Ut["[object DataView]"] = Ut["[object Boolean]"] = Ut["[object Date]"] = Ut["[object Float32Array]"] = Ut["[object Float64Array]"] = Ut["[object Int8Array]"] = Ut["[object Int16Array]"] = Ut["[object Int32Array]"] = Ut["[object Map]"] = Ut["[object Number]"] = Ut["[object Object]"] = Ut["[object RegExp]"] = Ut["[object Set]"] = Ut["[object String]"] = Ut["[object Symbol]"] = Ut["[object Uint8Array]"] = Ut["[object Uint8ClampedArray]"] = Ut["[object Uint16Array]"] = Ut["[object Uint32Array]"] = true,
        Ut["[object Error]"] = Ut["[object Function]"] = Ut["[object WeakMap]"] = false;
    var Mt = {
            "\xc0": "A",
            "\xc1": "A",
            "\xc2": "A",
            "\xc3": "A",
            "\xc4": "A",
            "\xc5": "A",
            "\xe0": "a",
            "\xe1": "a",
            "\xe2": "a",
            "\xe3": "a",
            "\xe4": "a",
            "\xe5": "a",
            "\xc7": "C",
            "\xe7": "c",
            "\xd0": "D",
            "\xf0": "d",
            "\xc8": "E",
            "\xc9": "E",
            "\xca": "E",
            "\xcb": "E",
            "\xe8": "e",
            "\xe9": "e",
            "\xea": "e",
            "\xeb": "e",
            "\xcc": "I",
            "\xcd": "I",
            "\xce": "I",
            "\xcf": "I",
            "\xec": "i",
            "\xed": "i",
            "\xee": "i",
            "\xef": "i",
            "\xd1": "N",
            "\xf1": "n",
            "\xd2": "O",
            "\xd3": "O",
            "\xd4": "O",
            "\xd5": "O",
            "\xd6": "O",
            "\xd8": "O",
            "\xf2": "o",
            "\xf3": "o",
            "\xf4": "o",
            "\xf5": "o",
            "\xf6": "o",
            "\xf8": "o",
            "\xd9": "U",
            "\xda": "U",
            "\xdb": "U",
            "\xdc": "U",
            "\xf9": "u",
            "\xfa": "u",
            "\xfb": "u",
            "\xfc": "u",
            "\xdd": "Y",
            "\xfd": "y",
            "\xff": "y",
            "\xc6": "Ae",
            "\xe6": "ae",
            "\xde": "Th",
            "\xfe": "th",
            "\xdf": "ss"
        },
        Lt = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#96;"
        },
        $t = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#96;": "`"
        },
        Dt = {
            "function": true,
            object: true
        },
        Ft = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        Nt = parseFloat,
        Pt = parseInt,
        Zt = Dt[typeof exports] && exports && !exports.nodeType ? exports : T,
        qt = Dt[typeof module] && module && !module.nodeType ? module : T,
        Tt = qt && qt.exports === Zt ? Zt : T,
        Vt = S(Dt[typeof self] && self),
        Kt = S(Dt[typeof window] && window),
        Gt = S(Dt[typeof this] && this),
        Jt = S(Zt && qt && typeof global == "object" && global) || Kt !== (Gt && Gt.window) && Kt || Vt || Gt || Function("return this")(),
        Yt = q();
    (Kt || Vt || {})._ = Yt, typeof define == "function" && typeof define.amd == "object" && define.amd ? define(function() {
        return Yt
    }) : Zt && qt ? (Tt && ((qt.exports = Yt)._ = Yt),
        Zt._ = Yt) : Jt._ = Yt
}).call(this);
(function(N, f, W) {
    'use strict';
    f.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function() {
        return function(X, C, g) {
            g = g.ngAnimateChildren;
            f.isString(g) && 0 === g.length ? C.data("$$ngAnimateChildren", !0) : X.$watch(g, function(f) {
                C.data("$$ngAnimateChildren", !!f)
            })
        }
    }).factory("$$animateReflow", ["$$rAF", "$document", function(f, C) {
        return function(g) {
            return f(function() {
                g()
            })
        }
    }]).config(["$provide", "$animateProvider", function(X, C) {
        function g(f) {
            for (var n = 0; n < f.length; n++) {
                var g = f[n];
                if (1 == g.nodeType) return g
            }
        }

        function ba(f, n) {
            return g(f) == g(n)
        }
        var t = f.noop,
            n = f.forEach,
            da = C.$$selectors,
            aa = f.isArray,
            ea = f.isString,
            ga = f.isObject,
            r = {
                running: !0
            },
            u;
        X.decorator("$animate", ["$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", "$$jqLite", function(O, N, M, Y, y, H, P, W, Z, Q) {
            function R(a, c) {
                var b = a.data("$$ngAnimateState") || {};
                c && (b.running = !0, b.structural = !0, a.data("$$ngAnimateState", b));
                return b.disabled || b.running && b.structural
            }

            function D(a) {
                var c, b = N.defer();
                b.promise.$$cancelFn = function() {
                    c && c()
                };
                P.$$postDigest(function() {
                    c = a(function() {
                        b.resolve()
                    })
                });
                return b.promise
            }

            function I(a) {
                if (ga(a)) return a.tempClasses && ea(a.tempClasses) && (a.tempClasses = a.tempClasses.split(/\s+/)), a
            }

            function S(a, c, b) {
                b = b || {};
                var d = {};
                n(b, function(e, a) {
                    n(a.split(" "), function(a) {
                        d[a] = e
                    })
                });
                var h = Object.create(null);
                n((a.attr("class") || "").split(/\s+/), function(e) {
                    h[e] = !0
                });
                var f = [],
                    l = [];
                n(c && c.classes || [], function(e, a) {
                    var b = h[a],
                        c = d[a] || {};
                    !1 === e ? (b || "addClass" == c.event) &&
                        l.push(a) : !0 === e && (b && "removeClass" != c.event || f.push(a))
                });
                return 0 < f.length + l.length && [f.join(" "), l.join(" ")]
            }

            function T(a) {
                if (a) {
                    var c = [],
                        b = {};
                    a = a.substr(1).split(".");
                    (Y.transitions || Y.animations) && c.push(M.get(da[""]));
                    for (var d = 0; d < a.length; d++) {
                        var f = a[d],
                            k = da[f];
                        k && !b[f] && (c.push(M.get(k)), b[f] = !0)
                    }
                    return c
                }
            }

            function U(a, c, b, d) {
                function h(e, a) {
                    var b = e[a],
                        c = e["before" + a.charAt(0).toUpperCase() + a.substr(1)];
                    if (b || c) return "leave" == a && (c = b, b = null), u.push({
                        event: a,
                        fn: b
                    }), J.push({
                        event: a,
                        fn: c
                    }), !0
                }

                function k(c, l, w) {
                    var E = [];
                    n(c, function(a) {
                        a.fn && E.push(a)
                    });
                    var m = 0;
                    n(E, function(c, f) {
                        var p = function() {
                            a: {
                                if (l) {
                                    (l[f] || t)();
                                    if (++m < E.length) break a;
                                    l = null
                                }
                                w()
                            }
                        };
                        switch (c.event) {
                            case "setClass":
                                l.push(c.fn(a, e, A, p, d));
                                break;
                            case "animate":
                                l.push(c.fn(a, b, d.from, d.to, p));
                                break;
                            case "addClass":
                                l.push(c.fn(a, e || b, p, d));
                                break;
                            case "removeClass":
                                l.push(c.fn(a, A || b, p, d));
                                break;
                            default:
                                l.push(c.fn(a, p, d))
                        }
                    });
                    l && 0 === l.length && w()
                }
                var l = a[0];
                if (l) {
                    d && (d.to = d.to || {}, d.from = d.from || {});
                    var e, A;
                    aa(b) && (e =
                        b[0], A = b[1], e ? A ? b = e + " " + A : (b = e, c = "addClass") : (b = A, c = "removeClass"));
                    var w = "setClass" == c,
                        E = w || "addClass" == c || "removeClass" == c || "animate" == c,
                        p = a.attr("class") + " " + b;
                    if (x(p)) {
                        var ca = t,
                            m = [],
                            J = [],
                            g = t,
                            s = [],
                            u = [],
                            p = (" " + p).replace(/\s+/g, ".");
                        n(T(p), function(a) {
                            !h(a, c) && w && (h(a, "addClass"), h(a, "removeClass"))
                        });
                        return {
                            node: l,
                            event: c,
                            className: b,
                            isClassBased: E,
                            isSetClassOperation: w,
                            applyStyles: function() {
                                d && a.css(f.extend(d.from || {}, d.to || {}))
                            },
                            before: function(a) {
                                ca = a;
                                k(J, m, function() {
                                    ca = t;
                                    a()
                                })
                            },
                            after: function(a) {
                                g =
                                    a;
                                k(u, s, function() {
                                    g = t;
                                    a()
                                })
                            },
                            cancel: function() {
                                m && (n(m, function(a) {
                                    (a || t)(!0)
                                }), ca(!0));
                                s && (n(s, function(a) {
                                    (a || t)(!0)
                                }), g(!0))
                            }
                        }
                    }
                }
            }

            function G(a, c, b, d, h, k, l, e) {
                function A(e) {
                    var l = "$animate:" + e;
                    J && J[l] && 0 < J[l].length && H(function() {
                        b.triggerHandler(l, {
                            event: a,
                            className: c
                        })
                    })
                }

                function w() {
                    A("before")
                }

                function E() {
                    A("after")
                }

                function p() {
                    p.hasBeenRun || (p.hasBeenRun = !0, k())
                }

                function g() {
                    if (!g.hasBeenRun) {
                        m && m.applyStyles();
                        g.hasBeenRun = !0;
                        l && l.tempClasses && n(l.tempClasses, function(a) {
                            u.removeClass(b,
                                a)
                        });
                        var w = b.data("$$ngAnimateState");
                        w && (m && m.isClassBased ? B(b, c) : (H(function() {
                            var e = b.data("$$ngAnimateState") || {};
                            fa == e.index && B(b, c, a)
                        }), b.data("$$ngAnimateState", w)));
                        A("close");
                        e()
                    }
                }
                var m = U(b, a, c, l);
                if (!m) return p(), w(), E(), g(), t;
                a = m.event;
                c = m.className;
                var J = f.element._data(m.node),
                    J = J && J.events;
                d || (d = h ? h.parent() : b.parent());
                if (z(b, d)) return p(), w(), E(), g(), t;
                d = b.data("$$ngAnimateState") || {};
                var L = d.active || {},
                    s = d.totalActive || 0,
                    q = d.last;
                h = !1;
                if (0 < s) {
                    s = [];
                    if (m.isClassBased) "setClass" == q.event ?
                        (s.push(q), B(b, c)) : L[c] && (v = L[c], v.event == a ? h = !0 : (s.push(v), B(b, c)));
                    else if ("leave" == a && L["ng-leave"]) h = !0;
                    else {
                        for (var v in L) s.push(L[v]);
                        d = {};
                        B(b, !0)
                    }
                    0 < s.length && n(s, function(a) {
                        a.cancel()
                    })
                }!m.isClassBased || m.isSetClassOperation || "animate" == a || h || (h = "addClass" == a == b.hasClass(c));
                if (h) return p(), w(), E(), A("close"), e(), t;
                L = d.active || {};
                s = d.totalActive || 0;
                if ("leave" == a) b.one("$destroy", function(a) {
                    a = f.element(this);
                    var e = a.data("$$ngAnimateState");
                    e && (e = e.active["ng-leave"]) && (e.cancel(), B(a, "ng-leave"))
                });
                u.addClass(b, "ng-animate");
                l && l.tempClasses && n(l.tempClasses, function(a) {
                    u.addClass(b, a)
                });
                var fa = K++;
                s++;
                L[c] = m;
                b.data("$$ngAnimateState", {
                    last: m,
                    active: L,
                    index: fa,
                    totalActive: s
                });
                w();
                m.before(function(e) {
                    var l = b.data("$$ngAnimateState");
                    e = e || !l || !l.active[c] || m.isClassBased && l.active[c].event != a;
                    p();
                    !0 === e ? g() : (E(), m.after(g))
                });
                return m.cancel
            }

            function q(a) {
                if (a = g(a)) a = f.isFunction(a.getElementsByClassName) ? a.getElementsByClassName("ng-animate") : a.querySelectorAll(".ng-animate"), n(a, function(a) {
                    a =
                        f.element(a);
                    (a = a.data("$$ngAnimateState")) && a.active && n(a.active, function(a) {
                        a.cancel()
                    })
                })
            }

            function B(a, c) {
                if (ba(a, y)) r.disabled || (r.running = !1, r.structural = !1);
                else if (c) {
                    var b = a.data("$$ngAnimateState") || {},
                        d = !0 === c;
                    !d && b.active && b.active[c] && (b.totalActive--, delete b.active[c]);
                    if (d || !b.totalActive) u.removeClass(a, "ng-animate"), a.removeData("$$ngAnimateState")
                }
            }

            function z(a, c) {
                if (r.disabled) return !0;
                if (ba(a, y)) return r.running;
                var b, d, g;
                do {
                    if (0 === c.length) break;
                    var k = ba(c, y),
                        l = k ? r : c.data("$$ngAnimateState") || {};
                    if (l.disabled) return !0;
                    k && (g = !0);
                    !1 !== b && (k = c.data("$$ngAnimateChildren"), f.isDefined(k) && (b = k));
                    d = d || l.running || l.last && !l.last.isClassBased
                } while (c = c.parent());
                return !g || !b && d
            }
            u = Q;
            y.data("$$ngAnimateState", r);
            var $ = P.$watch(function() {
                    return Z.totalPendingRequests
                }, function(a, c) {
                    0 === a && ($(), P.$$postDigest(function() {
                        P.$$postDigest(function() {
                            r.running = !1
                        })
                    }))
                }),
                K = 0,
                V = C.classNameFilter(),
                x = V ? function(a) {
                    return V.test(a)
                } : function() {
                    return !0
                };
            return {
                animate: function(a, c, b, d, h) {
                    d = d || "ng-inline-animate";
                    h = I(h) || {};
                    h.from = b ? c : null;
                    h.to = b ? b : c;
                    return D(function(b) {
                        return G("animate", d, f.element(g(a)), null, null, t, h, b)
                    })
                },
                enter: function(a, c, b, d) {
                    d = I(d);
                    a = f.element(a);
                    c = c && f.element(c);
                    b = b && f.element(b);
                    R(a, !0);
                    O.enter(a, c, b);
                    return D(function(h) {
                        return G("enter", "ng-enter", f.element(g(a)), c, b, t, d, h)
                    })
                },
                leave: function(a, c) {
                    c = I(c);
                    a = f.element(a);
                    q(a);
                    R(a, !0);
                    return D(function(b) {
                        return G("leave", "ng-leave", f.element(g(a)), null, null, function() {
                            O.leave(a)
                        }, c, b)
                    })
                },
                move: function(a, c, b, d) {
                    d = I(d);
                    a = f.element(a);
                    c = c && f.element(c);
                    b = b && f.element(b);
                    q(a);
                    R(a, !0);
                    O.move(a, c, b);
                    return D(function(h) {
                        return G("move", "ng-move", f.element(g(a)), c, b, t, d, h)
                    })
                },
                addClass: function(a, c, b) {
                    return this.setClass(a, c, [], b)
                },
                removeClass: function(a, c, b) {
                    return this.setClass(a, [], c, b)
                },
                setClass: function(a, c, b, d) {
                    d = I(d);
                    a = f.element(a);
                    a = f.element(g(a));
                    if (R(a)) return O.$$setClassImmediately(a, c, b, d);
                    var h, k = a.data("$$animateClasses"),
                        l = !!k;
                    k || (k = {
                        classes: {}
                    });
                    h = k.classes;
                    c = aa(c) ? c : c.split(" ");
                    n(c, function(a) {
                        a && a.length && (h[a] = !0)
                    });
                    b = aa(b) ? b : b.split(" ");
                    n(b, function(a) {
                        a && a.length && (h[a] = !1)
                    });
                    if (l) return d && k.options && (k.options = f.extend(k.options || {}, d)), k.promise;
                    a.data("$$animateClasses", k = {
                        classes: h,
                        options: d
                    });
                    return k.promise = D(function(e) {
                        var l = a.parent(),
                            b = g(a),
                            c = b.parentNode;
                        if (!c || c.$$NG_REMOVED || b.$$NG_REMOVED) e();
                        else {
                            b = a.data("$$animateClasses");
                            a.removeData("$$animateClasses");
                            var c = a.data("$$ngAnimateState") || {},
                                d = S(a, b, c.active);
                            return d ? G("setClass", d, a, l, null, function() {
                                d[0] && O.$$addClassImmediately(a,
                                    d[0]);
                                d[1] && O.$$removeClassImmediately(a, d[1])
                            }, b.options, e) : e()
                        }
                    })
                },
                cancel: function(a) {
                    a.$$cancelFn()
                },
                enabled: function(a, c) {
                    switch (arguments.length) {
                        case 2:
                            if (a) B(c);
                            else {
                                var b = c.data("$$ngAnimateState") || {};
                                b.disabled = !0;
                                c.data("$$ngAnimateState", b)
                            }
                            break;
                        case 1:
                            r.disabled = !a;
                            break;
                        default:
                            a = !r.disabled
                    }
                    return !!a
                }
            }
        }]);
        C.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function(r, C, M, Y) {
            function y() {
                b || (b = Y(function() {
                    c = [];
                    b = null;
                    x = {}
                }))
            }

            function H(a, e) {
                b && b();
                c.push(e);
                b = Y(function() {
                    n(c,
                        function(a) {
                            a()
                        });
                    c = [];
                    b = null;
                    x = {}
                })
            }

            function P(a, e) {
                var b = g(a);
                a = f.element(b);
                k.push(a);
                b = Date.now() + e;
                b <= h || (M.cancel(d), h = b, d = M(function() {
                    X(k);
                    k = []
                }, e, !1))
            }

            function X(a) {
                n(a, function(a) {
                    (a = a.data("$$ngAnimateCSS3Data")) && n(a.closeAnimationFns, function(a) {
                        a()
                    })
                })
            }

            function Z(a, e) {
                var b = e ? x[e] : null;
                if (!b) {
                    var c = 0,
                        d = 0,
                        f = 0,
                        g = 0;
                    n(a, function(a) {
                        if (1 == a.nodeType) {
                            a = r.getComputedStyle(a) || {};
                            c = Math.max(Q(a[z + "Duration"]), c);
                            d = Math.max(Q(a[z + "Delay"]), d);
                            g = Math.max(Q(a[K + "Delay"]), g);
                            var e = Q(a[K + "Duration"]);
                            0 < e && (e *= parseInt(a[K + "IterationCount"], 10) || 1);
                            f = Math.max(e, f)
                        }
                    });
                    b = {
                        total: 0,
                        transitionDelay: d,
                        transitionDuration: c,
                        animationDelay: g,
                        animationDuration: f
                    };
                    e && (x[e] = b)
                }
                return b
            }

            function Q(a) {
                var e = 0;
                a = ea(a) ? a.split(/\s*,\s*/) : [];
                n(a, function(a) {
                    e = Math.max(parseFloat(a) || 0, e)
                });
                return e
            }

            function R(b, e, c, d) {
                b = 0 <= ["ng-enter", "ng-leave", "ng-move"].indexOf(c);
                var f, p = e.parent(),
                    h = p.data("$$ngAnimateKey");
                h || (p.data("$$ngAnimateKey", ++a), h = a);
                f = h + "-" + g(e).getAttribute("class");
                var p = f + " " + c,
                    h = x[p] ? ++x[p].total :
                    0,
                    m = {};
                if (0 < h) {
                    var n = c + "-stagger",
                        m = f + " " + n;
                    (f = !x[m]) && u.addClass(e, n);
                    m = Z(e, m);
                    f && u.removeClass(e, n)
                }
                u.addClass(e, c);
                var n = e.data("$$ngAnimateCSS3Data") || {},
                    k = Z(e, p);
                f = k.transitionDuration;
                k = k.animationDuration;
                if (b && 0 === f && 0 === k) return u.removeClass(e, c), !1;
                c = d || b && 0 < f;
                b = 0 < k && 0 < m.animationDelay && 0 === m.animationDuration;
                e.data("$$ngAnimateCSS3Data", {
                    stagger: m,
                    cacheKey: p,
                    running: n.running || 0,
                    itemIndex: h,
                    blockTransition: c,
                    closeAnimationFns: n.closeAnimationFns || []
                });
                p = g(e);
                c && (I(p, !0), d && e.css(d));
                b && (p.style[K + "PlayState"] = "paused");
                return !0
            }

            function D(a, e, b, c, d) {
                function f() {
                    e.off(D, h);
                    u.removeClass(e, k);
                    u.removeClass(e, t);
                    z && M.cancel(z);
                    G(e, b);
                    var a = g(e),
                        c;
                    for (c in s) a.style.removeProperty(s[c])
                }

                function h(a) {
                    a.stopPropagation();
                    var b = a.originalEvent || a;
                    a = b.$manualTimeStamp || b.timeStamp || Date.now();
                    b = parseFloat(b.elapsedTime.toFixed(3));
                    Math.max(a - H, 0) >= C && b >= x && c()
                }
                var m = g(e);
                a = e.data("$$ngAnimateCSS3Data");
                if (-1 != m.getAttribute("class").indexOf(b) && a) {
                    var k = "",
                        t = "";
                    n(b.split(" "), function(a,
                        b) {
                        var e = (0 < b ? " " : "") + a;
                        k += e + "-active";
                        t += e + "-pending"
                    });
                    var s = [],
                        q = a.itemIndex,
                        v = a.stagger,
                        r = 0;
                    if (0 < q) {
                        r = 0;
                        0 < v.transitionDelay && 0 === v.transitionDuration && (r = v.transitionDelay * q);
                        var y = 0;
                        0 < v.animationDelay && 0 === v.animationDuration && (y = v.animationDelay * q, s.push(B + "animation-play-state"));
                        r = Math.round(100 * Math.max(r, y)) / 100
                    }
                    r || (u.addClass(e, k), a.blockTransition && I(m, !1));
                    var F = Z(e, a.cacheKey + " " + k),
                        x = Math.max(F.transitionDuration, F.animationDuration);
                    if (0 === x) u.removeClass(e, k), G(e, b), c();
                    else {
                        !r &&
                            d && (F.transitionDuration || (e.css("transition", F.animationDuration + "s linear all"), s.push("transition")), e.css(d));
                        var q = Math.max(F.transitionDelay, F.animationDelay),
                            C = 1E3 * q;
                        0 < s.length && (v = m.getAttribute("style") || "", ";" !== v.charAt(v.length - 1) && (v += ";"), m.setAttribute("style", v + " "));
                        var H = Date.now(),
                            D = V + " " + $,
                            q = 1E3 * (r + 1.5 * (q + x)),
                            z;
                        0 < r && (u.addClass(e, t), z = M(function() {
                            z = null;
                            0 < F.transitionDuration && I(m, !1);
                            0 < F.animationDuration && (m.style[K + "PlayState"] = "");
                            u.addClass(e, k);
                            u.removeClass(e, t);
                            d && (0 ===
                                F.transitionDuration && e.css("transition", F.animationDuration + "s linear all"), e.css(d), s.push("transition"))
                        }, 1E3 * r, !1));
                        e.on(D, h);
                        a.closeAnimationFns.push(function() {
                            f();
                            c()
                        });
                        a.running++;
                        P(e, q);
                        return f
                    }
                } else c()
            }

            function I(a, b) {
                a.style[z + "Property"] = b ? "none" : ""
            }

            function S(a, b, c, d) {
                if (R(a, b, c, d)) return function(a) {
                    a && G(b, c)
                }
            }

            function T(a, b, c, d, f) {
                if (b.data("$$ngAnimateCSS3Data")) return D(a, b, c, d, f);
                G(b, c);
                d()
            }

            function U(a, b, c, d, f) {
                var g = S(a, b, c, f.from);
                if (g) {
                    var h = g;
                    H(b, function() {
                        h = T(a, b, c, d, f.to)
                    });
                    return function(a) {
                        (h || t)(a)
                    }
                }
                y();
                d()
            }

            function G(a, b) {
                u.removeClass(a, b);
                var c = a.data("$$ngAnimateCSS3Data");
                c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData("$$ngAnimateCSS3Data"))
            }

            function q(a, b) {
                var c = "";
                a = aa(a) ? a : a.split(/\s+/);
                n(a, function(a, d) {
                    a && 0 < a.length && (c += (0 < d ? " " : "") + a + b)
                });
                return c
            }
            var B = "",
                z, $, K, V;
            N.ontransitionend === W && N.onwebkittransitionend !== W ? (B = "-webkit-", z = "WebkitTransition", $ = "webkitTransitionEnd transitionend") : (z = "transition", $ = "transitionend");
            N.onanimationend ===
                W && N.onwebkitanimationend !== W ? (B = "-webkit-", K = "WebkitAnimation", V = "webkitAnimationEnd animationend") : (K = "animation", V = "animationend");
            var x = {},
                a = 0,
                c = [],
                b, d = null,
                h = 0,
                k = [];
            return {
                animate: function(a, b, c, d, f, g) {
                    g = g || {};
                    g.from = c;
                    g.to = d;
                    return U("animate", a, b, f, g)
                },
                enter: function(a, b, c) {
                    c = c || {};
                    return U("enter", a, "ng-enter", b, c)
                },
                leave: function(a, b, c) {
                    c = c || {};
                    return U("leave", a, "ng-leave", b, c)
                },
                move: function(a, b, c) {
                    c = c || {};
                    return U("move", a, "ng-move", b, c)
                },
                beforeSetClass: function(a, b, c, d, f) {
                    f = f || {};
                    b = q(c,
                        "-remove") + " " + q(b, "-add");
                    if (f = S("setClass", a, b, f.from)) return H(a, d), f;
                    y();
                    d()
                },
                beforeAddClass: function(a, b, c, d) {
                    d = d || {};
                    if (b = S("addClass", a, q(b, "-add"), d.from)) return H(a, c), b;
                    y();
                    c()
                },
                beforeRemoveClass: function(a, b, c, d) {
                    d = d || {};
                    if (b = S("removeClass", a, q(b, "-remove"), d.from)) return H(a, c), b;
                    y();
                    c()
                },
                setClass: function(a, b, c, d, f) {
                    f = f || {};
                    c = q(c, "-remove");
                    b = q(b, "-add");
                    return T("setClass", a, c + " " + b, d, f.to)
                },
                addClass: function(a, b, c, d) {
                    d = d || {};
                    return T("addClass", a, q(b, "-add"), c, d.to)
                },
                removeClass: function(a,
                    b, c, d) {
                    d = d || {};
                    return T("removeClass", a, q(b, "-remove"), c, d.to)
                }
            }
        }])
    }])
})(window, window.angular);

var duScrollDefaultEasing = function(n) {
    "use strict";
    return n < .5 ? Math.pow(n * 2, 2) / 2 : 1 - Math.pow((1 - n) * 2, 2) / 2
};
angular.module("duScroll", ["duScroll.scrollspy", "duScroll.smoothScroll", "duScroll.scrollContainer", "duScroll.spyContext", "duScroll.scrollHelpers"]).value("duScrollDuration", 350).value("duScrollSpyWait", 100).value("duScrollGreedy", !1).value("duScrollOffset", 0).value("duScrollEasing", duScrollDefaultEasing);
angular.module("duScroll.scrollHelpers", ["duScroll.requestAnimation"]).run(["$window", "$q", "cancelAnimation", "requestAnimation", "duScrollEasing", "duScrollDuration", "duScrollOffset", function(n, t, i, r, u, f, e) {
    "use strict";
    var o = {},
        l = function(n) {
            return typeof HTMLDocument != "undefined" && n instanceof HTMLDocument || n.nodeType && n.nodeType === n.DOCUMENT_NODE
        },
        a = function(n) {
            return typeof HTMLElement != "undefined" && n instanceof HTMLElement || n.nodeType && n.nodeType === n.ELEMENT_NODE
        },
        c = function(n) {
            return a(n) || l(n) ? n : n[0]
        },
        s, h;
    o.duScrollTo = function(t, i, r) {
        var u, f;
        if (angular.isElement(t) ? u = this.duScrollToElement : r && (u = this.duScrollToAnimated), u) return u.apply(this, arguments);
        if (f = c(this), l(f)) return n.scrollTo(t, i);
        f.scrollLeft = t;
        f.scrollTop = i
    };
    o.duScrollToAnimated = function(n, f, e, o) {
        var w;
        e && !o && (o = u);
        var a = this.duScrollLeft(),
            v = this.duScrollTop(),
            b = Math.round(n - a),
            k = Math.round(f - v),
            y = null,
            c = this,
            p = "scroll mousedown mousewheel touchmove keydown",
            l = function(n) {
                (!n || n.which > 0) && (c.unbind(p, l), i(s), h.reject(), s = null)
            };
        return (s && l(), h = t.defer(), !b && !k) ? (h.resolve(), h.promise) : (w = function(n) {
            y === null && (y = n);
            var i = n - y,
                t = i >= e ? 1 : o(i / e);
            c.scrollTo(a + Math.ceil(b * t), v + Math.ceil(k * t));
            t < 1 ? s = r(w) : (c.unbind(p, l), s = null, h.resolve())
        }, c.duScrollTo(a, v), c.bind(p, l), s = r(w), h.promise)
    };
    o.duScrollToElement = function(n, t, i, r) {
        var f = c(this),
            u;
        return (!angular.isNumber(t) || isNaN(t)) && (t = e), u = this.duScrollTop() + c(n).getBoundingClientRect().top - t, a(f) && (u -= f.getBoundingClientRect().top), this.duScrollTo(0, u, i, r)
    };
    o.duScrollLeft = function(t, i, r) {
        if (angular.isNumber(t)) return this.duScrollTo(t, this.duScrollTop(), i, r);
        var u = c(this);
        return l(u) ? n.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft : u.scrollLeft
    };
    o.duScrollTop = function(t, i, r) {
        if (angular.isNumber(t)) return this.duScrollTo(this.duScrollLeft(), t, i, r);
        var u = c(this);
        return l(u) ? n.scrollY || document.documentElement.scrollTop || document.body.scrollTop : u.scrollTop
    };
    o.duScrollToElementAnimated = function(n, t, i, r) {
        return this.duScrollToElement(n, t, i || f, r)
    };
    o.duScrollTopAnimated = function(n, t, i) {
        return this.duScrollTop(n, t || f, i)
    };
    o.duScrollLeftAnimated = function(n, t, i) {
        return this.duScrollLeft(n, t || f, i)
    };
    angular.forEach(o, function(n, t) {
        angular.element.prototype[t] = n;
        var i = t.replace(/^duScroll/, "scroll");
        angular.isUndefined(angular.element.prototype[i]) && (angular.element.prototype[i] = n)
    })
}]);
angular.module("duScroll.polyfill", []).factory("polyfill", ["$window", function(n) {
    "use strict";
    var t = ["webkit", "moz", "o", "ms"];
    return function(i, r) {
        var e, f, u;
        if (n[i]) return n[i];
        for (e = i.substr(0, 1).toUpperCase() + i.substr(1), u = 0; u < t.length; u++)
            if (f = t[u] + e, n[f]) return n[f];
        return r
    }
}]);
angular.module("duScroll.requestAnimation", ["duScroll.polyfill"]).factory("requestAnimation", ["polyfill", "$timeout", function(n, t) {
    "use strict";
    var i = 0,
        r = function(n) {
            var r = (new Date).getTime(),
                u = Math.max(0, 16 - (r - i)),
                f = t(function() {
                    n(r + u)
                }, u);
            return i = r + u, f
        };
    return n("requestAnimationFrame", r)
}]).factory("cancelAnimation", ["polyfill", "$timeout", function(n, t) {
    "use strict";
    var i = function(n) {
        t.cancel(n)
    };
    return n("cancelAnimationFrame", i)
}]);
angular.module("duScroll.spyAPI", ["duScroll.scrollContainerAPI"]).factory("spyAPI", ["$rootScope", "$timeout", "scrollContainerAPI", "duScrollGreedy", "duScrollSpyWait", function(n, t, i, r, u) {
    "use strict";
    var c = function(i) {
            var f = !1,
                e = !1,
                o = function() {
                    var s, o, t, l, h, u;
                    e = !1;
                    var a = i.container,
                        f = a[0],
                        c = 0;
                    for ((typeof HTMLElement != "undefined" && f instanceof HTMLElement || f.nodeType && f.nodeType === f.ELEMENT_NODE) && (c = f.getBoundingClientRect().top), l = i.spies, o = i.currentlyActive, t = undefined, s = 0; s < l.length; s++)(h = l[s], u = h.getTargetPosition(), u) && u.top + h.offset - c < 20 && u.top * -1 + c < u.height && (!t || t.top < u.top) && (t = {
                        top: u.top,
                        spy: h
                    });
                    (t && (t = t.spy), o !== t && (!r || t)) && (o && (o.$element.removeClass("active"), n.$broadcast("duScrollspy:becameInactive", o.$element)), t && (t.$element.addClass("active"), n.$broadcast("duScrollspy:becameActive", t.$element)), i.currentlyActive = t)
                };
            return u ? function() {
                f ? e = !0 : (o(), f = t(function() {
                    f = !1;
                    e && o()
                }, u, !1))
            } : o
        },
        f = {},
        o = function(n) {
            var i = n.$id,
                t = {
                    spies: []
                };
            return t.handler = c(t), f[i] = t, n.$on("$destroy", function() {
                s(n)
            }), i
        },
        s = function(n) {
            var t = n.$id,
                i = f[t],
                r = i.container;
            r && r.off("scroll", i.handler);
            delete f[t]
        },
        l = o(n),
        e = function(n) {
            return f[n.$id] ? f[n.$id] : n.$parent ? e(n.$parent) : f[l]
        },
        h = function(n) {
            var t, i, r = n.$element.scope();
            if (r) return e(r);
            for (i in f)
                if (t = f[i], t.spies.indexOf(n) !== -1) return t
        },
        a = function(n) {
            while (n.parentNode)
                if (n = n.parentNode, n === document) return !0;
            return !1
        },
        v = function(n) {
            var t = h(n);
            t && (t.spies.push(n), t.container && a(t.container) || (t.container && t.container.off("scroll", t.handler), t.container = i.getContainer(n.$element.scope()), t.container.on("scroll", t.handler).triggerHandler("scroll")))
        },
        y = function(n) {
            var t = h(n),
                i;
            n === t.currentlyActive && (t.currentlyActive = null);
            i = t.spies.indexOf(n);
            i !== -1 && t.spies.splice(i, 1);
            n.$element = null
        };
    return {
        addSpy: v,
        removeSpy: y,
        createContext: o,
        destroyContext: s,
        getContextForScope: e
    }
}]);
angular.module("duScroll.scrollContainerAPI", []).factory("scrollContainerAPI", ["$document", function(n) {
    "use strict";
    var t = {},
        r = function(n, i) {
            var r = n.$id;
            return t[r] = i, r
        },
        i = function(n) {
            return t[n.$id] ? n.$id : n.$parent ? i(n.$parent) : void 0
        },
        u = function(r) {
            var u = i(r);
            return u ? t[u] : n
        },
        f = function(n) {
            var r = i(n);
            r && delete t[r]
        };
    return {
        getContainerId: i,
        getContainer: u,
        setContainer: r,
        removeContainer: f
    }
}]);
angular.module("duScroll.smoothScroll", ["duScroll.scrollHelpers", "duScroll.scrollContainerAPI"]).directive("duSmoothScroll", ["duScrollDuration", "duScrollOffset", "scrollContainerAPI", function(n, t, i) {
    "use strict";
    return {
        link: function(r, u, f) {
            u.on("click", function(u) {
                var e;
                if (f.href && f.href.indexOf("#") !== -1 && (e = document.getElementById(f.href.replace(/.*(?=#[^\s]+$)/, "").substring(1)), e && e.getBoundingClientRect)) {
                    u.stopPropagation && u.stopPropagation();
                    u.preventDefault && u.preventDefault();
                    var o = f.offset ? parseInt(f.offset, 10) : t,
                        s = f.duration ? parseInt(f.duration, 10) : n,
                        h = i.getContainer(r);
                    h.duScrollToElement(angular.element(e), isNaN(o) ? 0 : o, isNaN(s) ? 0 : s)
                }
            })
        }
    }
}]);
angular.module("duScroll.spyContext", ["duScroll.spyAPI"]).directive("duSpyContext", ["spyAPI", function(n) {
    "use strict";
    return {
        restrict: "A",
        scope: !0,
        compile: function() {
            return {
                pre: function(t) {
                    n.createContext(t)
                }
            }
        }
    }
}]);
angular.module("duScroll.scrollContainer", ["duScroll.scrollContainerAPI"]).directive("duScrollContainer", ["scrollContainerAPI", function(n) {
    "use strict";
    return {
        restrict: "A",
        scope: !0,
        compile: function() {
            return {
                pre: function(t, i, r) {
                    r.$observe("duScrollContainer", function(r) {
                        angular.isString(r) && (r = document.getElementById(r));
                        r = angular.isElement(r) ? angular.element(r) : i;
                        n.setContainer(t, r);
                        t.$on("$destroy", function() {
                            n.removeContainer(t)
                        })
                    })
                }
            }
        }
    }
}]);
angular.module("duScroll.scrollspy", ["duScroll.spyAPI"]).directive("duScrollspy", ["spyAPI", "duScrollOffset", "$timeout", "$rootScope", function(n, t, i, r) {
    "use strict";
    var u = function(n, t, i) {
        angular.isElement(n) ? this.target = n : angular.isString(n) && (this.targetId = n);
        this.$element = t;
        this.offset = i
    };
    return u.prototype.getTargetElement = function() {
        return !this.target && this.targetId && (this.target = document.getElementById(this.targetId)), this.target
    }, u.prototype.getTargetPosition = function() {
        var n = this.getTargetElement();
        if (n) return n.getBoundingClientRect()
    }, u.prototype.flushTargetCache = function() {
        this.targetId && (this.target = undefined)
    }, {
        link: function(f, e, o) {
            var h = o.ngHref || o.href,
                s;
            (h && h.indexOf("#") !== -1 ? s = h.replace(/.*(?=#[^\s]+$)/, "").substring(1) : o.duScrollspy && (s = o.duScrollspy), s) && i(function() {
                var i = new u(s, e, -(o.offset ? parseInt(o.offset, 10) : t));
                n.addSpy(i);
                f.$on("$destroy", function() {
                    n.removeSpy(i)
                });
                f.$on("$locationChangeSuccess", i.flushTargetCache.bind(i));
                r.$on("$stateChangeSuccess", i.flushTargetCache.bind(i))
            }, 0, !1)
        }
    }
}]);

(function(n, t) {
    "use strict";
    var i = i || function(i) {
        var f = {
                element: null,
                dragger: null,
                disable: "none",
                addBodyClasses: !0,
                hyperextensible: !0,
                resistance: .5,
                flickThreshold: 50,
                transitionSpeed: .3,
                easing: "ease",
                maxPosition: 266,
                minPosition: -266,
                tapToClose: !0,
                touchToDrag: !0,
                slideIntent: 40,
                minDragDistance: 5
            },
            r = {
                simpleStates: {
                    opening: null,
                    towards: null,
                    hyperExtending: null,
                    halfway: null,
                    flick: null,
                    translation: {
                        absolute: 0,
                        relative: 0,
                        sinceDirectionChange: 0,
                        percentage: 0
                    }
                }
            },
            o = {},
            u = {
                hasTouch: "ontouchstart" in t.documentElement || n.navigator.msPointerEnabled,
                eventType: function(n) {
                    var t = {
                        down: u.hasTouch ? "touchstart" : "mousedown",
                        move: u.hasTouch ? "touchmove" : "mousemove",
                        up: u.hasTouch ? "touchend" : "mouseup",
                        out: u.hasTouch ? "touchcancel" : "mouseout"
                    };
                    return t[n]
                },
                page: function(n, t) {
                    return u.hasTouch && t.touches.length && t.touches[0] ? t.touches[0]["page" + n] : t["page" + n]
                },
                klass: {
                    has: function(n, t) {
                        return n.className.indexOf(t) !== -1
                    },
                    add: function(n, t) {
                        !u.klass.has(n, t) && f.addBodyClasses && (n.className += " " + t)
                    },
                    remove: function(n, t) {
                        f.addBodyClasses && (n.className = n.className.replace(t, "").replace(/^\s+|\s+$/g, ""))
                    }
                },
                dispatchEvent: function(n) {
                    if (typeof o[n] == "function") return o[n].call()
                },
                vendor: function() {
                    var r = t.createElement("div"),
                        n = "webkit Moz O ms".split(" ");
                    for (var i in n)
                        if (typeof r.style[n[i] + "Transition"] != "undefined") return n[i]
                },
                transitionCallback: function() {
                    return r.vendor === "Moz" || r.vendor === "ms" ? "transitionend" : r.vendor + "TransitionEnd"
                },
                canTransform: function() {
                    return typeof f.element.style[r.vendor + "Transform"] != "undefined"
                },
                deepExtend: function(n, t) {
                    for (var i in t) t[i] && t[i].constructor && t[i].constructor === Object ? (n[i] = n[i] || {}, u.deepExtend(n[i], t[i])) : n[i] = t[i];
                    return n
                },
                angleOfDrag: function(n, t) {
                    var i, u;
                    return u = Math.atan2(-(r.startDragY - t), r.startDragX - n), u < 0 && (u += 2 * Math.PI), i = Math.floor(u * (180 / Math.PI) - 180), i < 0 && i > -180 && (i = 360 - Math.abs(i)), Math.abs(i)
                },
                events: {
                    addEvent: function(n, t, i) {
                        return n.addEventListener ? n.addEventListener(t, i, !1) : n.attachEvent ? n.attachEvent("on" + t, i) : void 0
                    },
                    removeEvent: function(n, t, i) {
                        return n.addEventListener ? n.removeEventListener(t, i, !1) : n.attachEvent ? n.detachEvent("on" + t, i) : void 0
                    },
                    prevent: function(n) {
                        n.preventDefault ? n.preventDefault() : n.returnValue = !1
                    }
                },
                parentUntil: function(n, t) {
                    for (var i = typeof t == "string"; n.parentNode;) {
                        if (i && n.getAttribute && n.getAttribute(t) || !i && n === t) return n;
                        n = n.parentNode
                    }
                    return null
                }
            },
            e = {
                translate: {
                    get: {
                        matrix: function(t) {
                            if (u.canTransform()) {
                                var i = n.getComputedStyle(f.element)[r.vendor + "Transform"].match(/\((.*)\)/);
                                return i ? (i = i[1].split(","), i.length === 16 && (t += 8), parseInt(i[t], 10)) : 0
                            }
                            return parseInt(f.element.style.left, 10)
                        }
                    },
                    easeCallback: function() {
                        f.element.style[r.vendor + "Transition"] = "";
                        r.translation = e.translate.get.matrix(4);
                        r.easing = !1;
                        clearInterval(r.animatingInterval);
                        r.easingTo === 0 && (u.klass.remove(t.body, "snapjs-right"), u.klass.remove(t.body, "snapjs-left"));
                        u.dispatchEvent("animated");
                        u.events.removeEvent(f.element, u.transitionCallback(), e.translate.easeCallback)
                    },
                    easeTo: function(n) {
                        u.canTransform() ? (r.easing = !0, r.easingTo = n, f.element.style[r.vendor + "Transition"] = "all " + f.transitionSpeed + "s " + f.easing, r.animatingInterval = setInterval(function() {
                            u.dispatchEvent("animating")
                        }, 1), u.events.addEvent(f.element, u.transitionCallback(), e.translate.easeCallback), e.translate.x(n)) : (r.translation = n, e.translate.x(n));
                        n === 0 && (f.element.style[r.vendor + "Transform"] = "")
                    },
                    x: function(i) {
                        if ((f.disable !== "left" || !(i > 0)) && (f.disable !== "right" || !(i < 0)))
                            if (f.hyperextensible || (i === f.maxPosition || i > f.maxPosition ? i = f.maxPosition : (i === f.minPosition || i < f.minPosition) && (i = f.minPosition)), i = parseInt(i, 10), isNaN(i) && (i = 0), u.canTransform()) {
                                var e = "translate3d(" + i + "px, 0,0)";
                                f.element.style[r.vendor + "Transform"] = e
                            } else f.element.style.width = (n.innerWidth || t.documentElement.clientWidth) + "px", f.element.style.left = i + "px", f.element.style.right = ""
                    }
                },
                drag: {
                    listen: function() {
                        r.translation = 0;
                        r.easing = !1;
                        u.events.addEvent(f.element, u.eventType("down"), e.drag.startDrag);
                        u.events.addEvent(f.element, u.eventType("move"), e.drag.dragging);
                        u.events.addEvent(f.element, u.eventType("up"), e.drag.endDrag)
                    },
                    stopListening: function() {
                        u.events.removeEvent(f.element, u.eventType("down"), e.drag.startDrag);
                        u.events.removeEvent(f.element, u.eventType("move"), e.drag.dragging);
                        u.events.removeEvent(f.element, u.eventType("up"), e.drag.endDrag)
                    },
                    startDrag: function(n) {
                        var t = n.target ? n.target : n.srcElement,
                            e = u.parentUntil(t, "data-snap-ignore"),
                            i;
                        if (e) {
                            u.dispatchEvent("ignore");
                            return
                        }(!f.dragger || (i = u.parentUntil(t, f.dragger), i || r.translation === f.minPosition || r.translation === f.maxPosition)) && (u.dispatchEvent("start"), f.element.style[r.vendor + "Transition"] = "", r.isDragging = !0, r.hasIntent = null, r.intentChecked = !1, r.startDragX = u.page("X", n), r.startDragY = u.page("Y", n), r.dragWatchers = {
                            current: 0,
                            last: 0,
                            hold: 0,
                            state: ""
                        }, r.simpleStates = {
                            opening: null,
                            towards: null,
                            hyperExtending: null,
                            halfway: null,
                            flick: null,
                            translation: {
                                absolute: 0,
                                relative: 0,
                                sinceDirectionChange: 0,
                                percentage: 0
                            }
                        })
                    },
                    dragging: function(n) {
                        if (r.isDragging && f.touchToDrag) {
                            var o = u.page("X", n),
                                a = u.page("Y", n),
                                v = r.translation,
                                i = e.translate.get.matrix(4),
                                h = o - r.startDragX,
                                y = i > 0,
                                l = h,
                                c;
                            if (r.intentChecked && !r.hasIntent) return;
                            if (f.addBodyClasses && (i > 0 ? (u.klass.add(t.body, "snapjs-left"), u.klass.remove(t.body, "snapjs-right")) : i < 0 && (u.klass.add(t.body, "snapjs-right"), u.klass.remove(t.body, "snapjs-left"))), r.hasIntent === !1 || r.hasIntent === null) {
                                var s = u.angleOfDrag(o, a),
                                    p = s >= 0 && s <= f.slideIntent || s <= 360 && s > 360 - f.slideIntent,
                                    w = s >= 180 && s <= 180 + f.slideIntent || s <= 180 && s >= 180 - f.slideIntent;
                                r.hasIntent = w || p ? !0 : !1;
                                r.intentChecked = !0
                            }
                            if (f.minDragDistance >= Math.abs(o - r.startDragX) || r.hasIntent === !1) return;
                            u.events.prevent(n);
                            u.dispatchEvent("drag");
                            r.dragWatchers.current = o;
                            r.dragWatchers.last > o ? (r.dragWatchers.state !== "left" && (r.dragWatchers.state = "left", r.dragWatchers.hold = o), r.dragWatchers.last = o) : r.dragWatchers.last < o && (r.dragWatchers.state !== "right" && (r.dragWatchers.state = "right", r.dragWatchers.hold = o), r.dragWatchers.last = o);
                            y ? (f.maxPosition < i && (c = (i - f.maxPosition) * f.resistance, l = h - c), r.simpleStates = {
                                opening: "left",
                                towards: r.dragWatchers.state,
                                hyperExtending: f.maxPosition < i,
                                halfway: i > f.maxPosition / 2,
                                flick: Math.abs(r.dragWatchers.current - r.dragWatchers.hold) > f.flickThreshold,
                                translation: {
                                    absolute: i,
                                    relative: h,
                                    sinceDirectionChange: r.dragWatchers.current - r.dragWatchers.hold,
                                    percentage: i / f.maxPosition * 100
                                }
                            }) : (f.minPosition > i && (c = (i - f.minPosition) * f.resistance, l = h - c), r.simpleStates = {
                                opening: "right",
                                towards: r.dragWatchers.state,
                                hyperExtending: f.minPosition > i,
                                halfway: i < f.minPosition / 2,
                                flick: Math.abs(r.dragWatchers.current - r.dragWatchers.hold) > f.flickThreshold,
                                translation: {
                                    absolute: i,
                                    relative: h,
                                    sinceDirectionChange: r.dragWatchers.current - r.dragWatchers.hold,
                                    percentage: i / f.minPosition * 100
                                }
                            });
                            e.translate.x(l + v)
                        }
                    },
                    endDrag: function(n) {
                        if (r.isDragging) {
                            u.dispatchEvent("end");
                            var t = e.translate.get.matrix(4);
                            if (r.dragWatchers.current === 0 && t !== 0 && f.tapToClose) {
                                u.dispatchEvent("close");
                                u.events.prevent(n);
                                e.translate.easeTo(0);
                                r.isDragging = !1;
                                r.startDragX = 0;
                                return
                            }
                            r.simpleStates.opening === "left" ? r.simpleStates.halfway || r.simpleStates.hyperExtending || r.simpleStates.flick ? r.simpleStates.flick && r.simpleStates.towards === "left" ? e.translate.easeTo(0) : (r.simpleStates.flick && r.simpleStates.towards === "right" || r.simpleStates.halfway || r.simpleStates.hyperExtending) && e.translate.easeTo(f.maxPosition) : e.translate.easeTo(0) : r.simpleStates.opening === "right" && (r.simpleStates.halfway || r.simpleStates.hyperExtending || r.simpleStates.flick ? r.simpleStates.flick && r.simpleStates.towards === "right" ? e.translate.easeTo(0) : (r.simpleStates.flick && r.simpleStates.towards === "left" || r.simpleStates.halfway || r.simpleStates.hyperExtending) && e.translate.easeTo(f.minPosition) : e.translate.easeTo(0));
                            r.isDragging = !1;
                            r.startDragX = u.page("X", n)
                        }
                    }
                }
            },
            s = function(n) {
                n.element && (u.deepExtend(f, n), r.vendor = u.vendor(), e.drag.listen())
            };
        this.open = function(n) {
            u.dispatchEvent("open");
            u.klass.remove(t.body, "snapjs-expand-left");
            u.klass.remove(t.body, "snapjs-expand-right");
            n === "left" ? (r.simpleStates.opening = "left", r.simpleStates.towards = "right", u.klass.add(t.body, "snapjs-left"), u.klass.remove(t.body, "snapjs-right"), e.translate.easeTo(f.maxPosition)) : n === "right" && (r.simpleStates.opening = "right", r.simpleStates.towards = "left", u.klass.remove(t.body, "snapjs-left"), u.klass.add(t.body, "snapjs-right"), e.translate.easeTo(f.minPosition))
        };
        this.close = function() {
            u.dispatchEvent("close");
            e.translate.easeTo(0)
        };
        this.expand = function(i) {
            var r = n.innerWidth || t.documentElement.clientWidth;
            i === "left" ? (u.dispatchEvent("expandLeft"), u.klass.add(t.body, "snapjs-expand-left"), u.klass.remove(t.body, "snapjs-expand-right")) : (u.dispatchEvent("expandRight"), u.klass.add(t.body, "snapjs-expand-right"), u.klass.remove(t.body, "snapjs-expand-left"), r *= -1);
            e.translate.easeTo(r)
        };
        this.on = function(n, t) {
            return o[n] = t, this
        };
        this.off = function(n) {
            o[n] && (o[n] = !1)
        };
        this.enable = function() {
            u.dispatchEvent("enable");
            e.drag.listen()
        };
        this.disable = function() {
            u.dispatchEvent("disable");
            e.drag.stopListening()
        };
        this.settings = function(n) {
            u.deepExtend(f, n)
        };
        this.state = function() {
            var n, t = e.translate.get.matrix(4);
            return n = t === f.maxPosition ? "left" : t === f.minPosition ? "right" : "closed", {
                state: n,
                info: r.simpleStates
            }
        };
        s(i)
    };
    typeof module != "undefined" && module.exports && (module.exports = i);
    typeof ender == "undefined" && (this.Snap = i);
    typeof define == "function" && define.amd && define("snap", [], function() {
        return i
    })
}).call(this, window, document);

(function() {
    "use strict";
    var n = angular.module("smoothScroll", []),
        t = function(n, t) {
            t = t || {};
            var r = t.duration || 800,
                u = t.offset || 0,
                f = t.easing || "easeInOutQuart",
                e = t.callbackBefore || function() {},
                o = t.callbackAfter || function() {},
                i = function() {
                    return window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop
                };
            setTimeout(function() {
                var c = i(),
                    l = 0,
                    t, s, v = function(n, t) {
                        return n == "easeInQuad" ? t * t : n == "easeOutQuad" ? t * (2 - t) : n == "easeInOutQuad" ? t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t : n == "easeInCubic" ? t * t * t : n == "easeOutCubic" ? --t * t * t + 1 : n == "easeInOutCubic" ? t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 : n == "easeInQuart" ? t * t * t * t : n == "easeOutQuart" ? 1 - --t * t * t * t : n == "easeInOutQuart" ? t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t : n == "easeInQuint" ? t * t * t * t * t : n == "easeOutQuint" ? 1 + --t * t * t * t * t : n == "easeInOutQuint" ? t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t : t
                    },
                    y = function(n) {
                        var t = 0;
                        if (n.offsetParent)
                            do t += n.offsetTop, n = n.offsetParent; while (n);
                        return Math.max(t - u, 0)
                    },
                    h = y(n),
                    p = h - c,
                    w = function() {
                        var t = i();
                        (s == h || t == h || window.innerHeight + t >= document.body.scrollHeight) && (clearInterval(a), o(n))
                    },
                    b = function() {
                        l += 16;
                        t = l / r;
                        t = t > 1 ? 1 : t;
                        s = c + p * v(f, t);
                        window.scrollTo(0, s);
                        w()
                    },
                    a;
                e(n);
                a = setInterval(b, 16)
            }, 0)
        };
    n.factory("smoothScroll", function() {
        return t
    });
    n.directive("smoothScroll", ["smoothScroll", function(n) {
        return {
            restrict: "A",
            scope: {
                callbackBefore: "&",
                callbackAfter: "&"
            },
            link: function(t, i, r) {
                (typeof r.scrollIf == "undefined" || r.scrollIf === "true") && setTimeout(function() {
                    var u = function(n) {
                            if (r.callbackBefore) {
                                var i = t.callbackBefore({
                                    element: n
                                });
                                typeof i == "function" && i(n)
                            }
                        },
                        f = function(n) {
                            if (r.callbackAfter) {
                                var i = t.callbackAfter({
                                    element: n
                                });
                                typeof i == "function" && i(n)
                            }
                        };
                    n(i[0], {
                        duration: r.duration,
                        offset: r.offset,
                        easing: r.easing,
                        callbackBefore: u,
                        callbackAfter: f
                    })
                }, 0)
            }
        }
    }]);
    n.directive("scrollTo", ["smoothScroll", function(n) {
        return {
            restrict: "A",
            scope: {
                callbackBefore: "&",
                callbackAfter: "&"
            },
            link: function(t, i, r) {
                var u;
                i.on("click", function(i) {
                    if (i.preventDefault(), u = document.getElementById(r.scrollTo), u) {
                        var f = function(n) {
                                if (r.callbackBefore) {
                                    var i = t.callbackBefore({
                                        element: n
                                    });
                                    typeof i == "function" && i(n)
                                }
                            },
                            e = function(n) {
                                if (r.callbackAfter) {
                                    var i = t.callbackAfter({
                                        element: n
                                    });
                                    typeof i == "function" && i(n)
                                }
                            };
                        return n(u, {
                            duration: r.duration,
                            offset: r.offset,
                            easing: r.easing,
                            callbackBefore: f,
                            callbackAfter: e
                        }), !1
                    }
                })
            }
        }
    }])
})();

(function(n, t) {
    "use strict";

    function g() {
        this.$get = ["$$sanitizeUri", function(n) {
            return function(t) {
                var i = [];
                return at(t, k(i, function(t, i) {
                    return !/^unsafe/.test(n(t, i))
                })), i.join("")
            }
        }]
    }

    function nt(n) {
        var i = [],
            r = k(i, t.noop);
        return r.chars(n), i.join("")
    }

    function i(n) {
        for (var i = {}, r = n.split(","), t = 0; t < r.length; t++) i[r[t]] = !0;
        return i
    }

    function at(n, i) {
        function g(n, f, e, o) {
            if (f = t.lowercase(f), a[f])
                while (r.last() && v[r.last()]) w("", r.last());
            l[f] && r.last() == f && w("", f);
            o = s[f] || !!o;
            o || r.push(f);
            var h = {};
            e.replace(tt, function(n, t, i, r, f) {
                var e = i || r || f || "";
                h[t] = u(e)
            });
            i.start && i.start(f, h, o)
        }

        function w(n, u) {
            var f = 0,
                e;
            if (u = t.lowercase(u), u)
                for (f = r.length - 1; f >= 0; f--)
                    if (r[f] == u) break;
            if (f >= 0) {
                for (e = r.length - 1; e >= f; e--) i.end && i.end(r[e]);
                r.length = f
            }
        }
        typeof n != "string" && (n = n === null || typeof n == "undefined" ? "" : "" + n);
        var c, p, h, r = [],
            k = n,
            b;
        for (r.last = function() {
                return r[r.length - 1]
            }; n;) {
            if (b = "", p = !0, r.last() && y[r.last()] ? (n = n.replace(new RegExp("(.*)<\\s*\\/\\s*" + r.last() + "[^>]*>", "i"), function(n, t) {
                    return t = t.replace(ut, "$1").replace(ft, "$1"), i.chars && i.chars(u(t)), ""
                }), w("", r.last())) : (n.indexOf("<!--") === 0 ? (c = n.indexOf("--", 4), c >= 0 && n.lastIndexOf("-->", c) === c && (i.comment && i.comment(n.substring(4, c)), n = n.substring(c + 3), p = !1)) : o.test(n) ? (h = n.match(o), h && (n = n.replace(h[0], ""), p = !1)) : rt.test(n) ? (h = n.match(e), h && (n = n.substring(h[0].length), h[0].replace(e, w), p = !1)) : it.test(n) && (h = n.match(f), h ? (h[4] && (n = n.substring(h[0].length), h[0].replace(f, g)), p = !1) : (b += "<", n = n.substring(1))), p && (c = n.indexOf("<"), b += c < 0 ? n : n.substring(0, c), n = c < 0 ? "" : n.substring(c), i.chars && i.chars(u(b)))), n == k) throw d("badparse", "The sanitizer was unable to parse the following block of html: {0}", n);
            k = n
        }
        w()
    }

    function u(n) {
        if (!n) return "";
        var i = vt.exec(n),
            u = i[1],
            f = i[3],
            t = i[2];
        return t && (r.innerHTML = t.replace(/</g, "&lt;"), t = "textContent" in r ? r.textContent : r.innerText), u + t + f
    }

    function b(n) {
        return n.replace(/&/g, "&amp;").replace(et, function(n) {
            var t = n.charCodeAt(0),
                i = n.charCodeAt(1);
            return "&#" + ((t - 55296) * 1024 + (i - 56320) + 65536) + ";"
        }).replace(ot, function(n) {
            return "&#" + n.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function k(n, i) {
        var u = !1,
            r = t.bind(n, n.push);
        return {
            start: function(n, f, e) {
                n = t.lowercase(n);
                !u && y[n] && (u = n);
                u || p[n] !== !0 || (r("<"), r(n), t.forEach(f, function(u, f) {
                    var e = t.lowercase(f),
                        o = n === "img" && e === "src" || e === "background";
                    lt[e] === !0 && (w[e] !== !0 || i(u, o)) && (r(" "), r(f), r('="'), r(b(u)), r('"'))
                }), r(e ? "/>" : ">"))
            },
            end: function(n) {
                n = t.lowercase(n);
                u || p[n] !== !0 || (r("<\/"), r(n), r(">"));
                n == u && (u = !1)
            },
            chars: function(n) {
                u || r(b(n))
            }
        }
    }
    var d = t.$$minErr("$sanitize"),
        f = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
        e = /^<\/\s*([\w:-]+)[^>]*>/,
        tt = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
        it = /^</,
        rt = /^<\//,
        ut = /<!--(.*?)-->/g,
        o = /<!DOCTYPE([^>]*?)>/i,
        ft = /<!\[CDATA\[(.*?)]]>/g,
        et = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        ot = /([^\#-~| |!])/g,
        s = i("area,br,col,hr,img,wbr"),
        h = i("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        c = i("rp,rt"),
        l = t.extend({}, c, h),
        a = t.extend({}, h, i("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
        v = t.extend({}, c, i("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
        st = i("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"),
        y = i("script,style"),
        p = t.extend({}, s, a, v, l, st),
        w = i("background,cite,href,longdesc,src,usemap,xlink:href"),
        ht = i("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),
        ct = i("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"),
        lt = t.extend({}, w, ct, ht),
        r = document.createElement("pre"),
        vt = /^(\s*)([\s\S]*?)(\s*)$/;
    t.module("ngSanitize", []).provider("$sanitize", g);
    t.module("ngSanitize").filter("linky", ["$sanitize", function(n) {
        var i = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/,
            r = /^mailto:/;
        return function(u, f) {
            function l(n) {
                n && o.push(nt(n))
            }

            function a(n, i) {
                o.push("<a ");
                t.isDefined(f) && o.push('target="', f, '" ');
                o.push('href="', n.replace(/"/g, "&quot;"), '">');
                l(i);
                o.push("<\/a>")
            }
            if (!u) return u;
            for (var e, s = u, o = [], h, c; e = s.match(i);) h = e[0], e[2] || e[4] || (h = (e[3] ? "http://" : "mailto:") + h), c = e.index, l(s.substr(0, c)), a(h, e[0].replace(r, "")), s = s.substring(c + e[0].length);
            return l(s), n(o.join(""))
        }
    }])
})(window, window.angular);

"use strict";
angular.module("ui.checkbox", []).directive("checkbox", function() {
    return {
        scope: {},
        require: "ngModel",
        restrict: "E",
        replace: "true",
        template: "<button type=\"button\" ng-style=\"stylebtn\" class=\"btn btn-default\" ng-class=\"{'btn-xs': size==='default', 'btn-sm': size==='large', 'btn-lg': size==='largest'}\">" + '<span ng-style="styleicon" class="glyphicon" ng-class="{\'glyphicon-ok\': checked===true}"></span></button>',
        link: function(l, e, t, n) {
            l.size = "default", l.stylebtn = {}, l.styleicon = {
                width: "10px",
                left: "-1px"
            }, void 0 !== t.large && (l.size = "large", l.stylebtn = {
                "padding-top": "2px",
                "padding-bottom": "2px",
                height: "30px"
            }, l.styleicon = {
                width: "8px",
                left: "-5px",
                "font-size": "17px"
            }), void 0 !== t.larger && (l.size = "larger", l.stylebtn = {
                "padding-top": "2px",
                "padding-bottom": "2px",
                height: "34px"
            }, l.styleicon = {
                width: "8px",
                left: "-8px",
                "font-size": "22px"
            }), void 0 !== t.largest && (l.size = "largest", l.stylebtn = {
                "padding-top": "2px",
                "padding-bottom": "2px",
                height: "45px"
            }, l.styleicon = {
                width: "11px",
                left: "-11px",
                "font-size": "30px"
            });
            var i = !0,
                a = !1;
            void 0 !== t.ngTrueValue && (i = t.ngTrueValue), void 0 !== t.ngFalseValue && (a = t.ngFalseValue), void 0 !== l.name && (e.name = l.name), l.$watch(function() {
                return n.$modelValue === i || !0 === n.$modelValue ? n.$setViewValue(i) : n.$setViewValue(a), n.$modelValue
            }, function(e, t) {
                l.checked = n.$modelValue === i
            }, !0), e.bind("click", function() {
                l.$apply(function() {
                    n.$modelValue === a ? n.$setViewValue(i) : n.$setViewValue(a)
                })
            })
        }
    }
});
var timerModule = angular.module("timer", []).directive("timer", ["$compile", function(n) {
    return {
        restrict: "EA",
        replace: !1,
        scope: {
            interval: "=interval",
            startTimeAttr: "=startTime",
            endTimeAttr: "=endTime",
            countdownattr: "=countdown",
            finishCallback: "&finishCallback",
            autoStart: "&autoStart",
            maxTimeUnit: "="
        },
        controller: ["$scope", "$element", "$attrs", "$timeout", function(t, i, r, u) {
            function f() {
                t.timeoutId && clearTimeout(t.timeoutId)
            }

            function e() {
                r.startTime !== undefined && (t.millis = new Date - new Date(t.startTimeAttr));
                t.maxTimeUnit && t.maxTimeUnit !== "day" ? t.maxTimeUnit === "second" ? (t.seconds = Math.floor(t.millis / 1e3), t.minutes = 0, t.hours = 0, t.days = 0, t.months = 0, t.years = 0) : t.maxTimeUnit === "minute" ? (t.seconds = Math.floor(t.millis / 1e3 % 60), t.minutes = Math.floor(t.millis / 6e4), t.hours = 0, t.days = 0, t.months = 0, t.years = 0) : t.maxTimeUnit === "hour" ? (t.seconds = Math.floor(t.millis / 1e3 % 60), t.minutes = Math.floor(t.millis / 6e4 % 60), t.hours = Math.floor(t.millis / 36e5), t.days = 0, t.months = 0, t.years = 0) : t.maxTimeUnit === "month" ? (t.seconds = Math.floor(t.millis / 1e3 % 60), t.minutes = Math.floor(t.millis / 6e4 % 60), t.hours = Math.floor(t.millis / 36e5 % 24), t.days = Math.floor(t.millis / 864e5 % 30), t.months = Math.floor(t.millis / 2592e6), t.years = 0) : t.maxTimeUnit === "year" && (t.seconds = Math.floor(t.millis / 1e3 % 60), t.minutes = Math.floor(t.millis / 6e4 % 60), t.hours = Math.floor(t.millis / 36e5 % 24), t.days = Math.floor(t.millis / 864e5 % 30), t.months = Math.floor(t.millis / 2592e6 % 12), t.years = Math.floor(t.millis / 31536e6)) : (t.seconds = Math.floor(t.millis / 1e3 % 60), t.minutes = Math.floor(t.millis / 6e4 % 60), t.hours = Math.floor(t.millis / 36e5 % 24), t.days = Math.floor(t.millis / 864e5), t.months = 0, t.years = 0);
                t.secondsS = t.seconds === 1 ? "" : "s";
                t.minutesS = t.minutes === 1 ? "" : "s";
                t.hoursS = t.hours === 1 ? "" : "s";
                t.daysS = t.days === 1 ? "" : "s";
                t.monthsS = t.months === 1 ? "" : "s";
                t.yearsS = t.years === 1 ? "" : "s";
                t.secondUnit = function(n, i) {
                    return t.seconds === 1 ? n ? n : "second" : i ? i : "seconds"
                };
                t.minuteUnit = function(n, i) {
                    return t.minutes === 1 ? n ? n : "minute" : i ? i : "minutes"
                };
                t.hourUnit = function(n, i) {
                    return t.hours === 1 ? n ? n : "hour" : i ? i : "hours"
                };
                t.dayUnit = function(n, i) {
                    return t.days === 1 ? n ? n : "day" : i ? i : "days"
                };
                t.monthUnit = function(n, i) {
                    return t.months === 1 ? n ? n : "month" : i ? i : "months"
                };
                t.yearUnit = function(n, i) {
                    return t.years === 1 ? n ? n : "year" : i ? i : "years"
                };
                t.sseconds = t.seconds < 10 ? "0" + t.seconds : t.seconds;
                t.mminutes = t.minutes < 10 ? "0" + t.minutes : t.minutes;
                t.hhours = t.hours < 10 ? "0" + t.hours : t.hours;
                t.ddays = t.days < 10 ? "0" + t.days : t.days;
                t.mmonths = t.months < 10 ? "0" + t.months : t.months;
                t.yyears = t.years < 10 ? "0" + t.years : t.years
            }
            typeof String.prototype.trim != "function" && (String.prototype.trim = function() {
                return this.replace(/^\s+|\s+$/g, "")
            });
            t.autoStart = r.autoStart || r.autostart;
            i.html().trim().length === 0 ? i.append(n("<span>{{millis}}<\/span>")(t)) : i.append(n(i.contents())(t));
            t.startTime = null;
            t.endTime = null;
            t.timeoutId = null;
            t.countdown = t.countdownattr && parseInt(t.countdownattr, 10) >= 0 ? parseInt(t.countdownattr, 10) : undefined;
            t.isRunning = !1;
            t.$on("timer-start", function() {
                t.start()
            });
            t.$on("timer-resume", function() {
                t.resume()
            });
            t.$on("timer-stop", function() {
                t.stop()
            });
            t.$on("timer-clear", function() {
                t.clear()
            });
            t.$on("timer-reset", function() {
                t.reset()
            });
            t.$on("timer-set-countdown", function(n, i) {
                t.countdown = i
            });
            t.start = i[0].start = function() {
                t.startTime = t.startTimeAttr ? new Date(t.startTimeAttr) : new Date;
                t.endTime = t.endTimeAttr ? new Date(t.endTimeAttr) : null;
                t.countdown || (t.countdown = t.countdownattr && parseInt(t.countdownattr, 10) > 0 ? parseInt(t.countdownattr, 10) : undefined);
                f();
                o();
                t.isRunning = !0
            };
            t.resume = i[0].resume = function() {
                f();
                t.countdownattr && (t.countdown += 1);
                t.startTime = new Date - (t.stoppedTime - t.startTime);
                o();
                t.isRunning = !0
            };
            t.stop = t.pause = i[0].stop = i[0].pause = function() {
                var n = t.timeoutId;
                t.clear();
                t.$emit("timer-stopped", {
                    timeoutId: n,
                    millis: t.millis,
                    seconds: t.seconds,
                    minutes: t.minutes,
                    hours: t.hours,
                    days: t.days
                })
            };
            t.clear = i[0].clear = function() {
                t.stoppedTime = new Date;
                f();
                t.timeoutId = null;
                t.isRunning = !1
            };
            t.reset = i[0].reset = function() {
                t.startTime = t.startTimeAttr ? new Date(t.startTimeAttr) : new Date;
                t.endTime = t.endTimeAttr ? new Date(t.endTimeAttr) : null;
                t.countdown = t.countdownattr && parseInt(t.countdownattr, 10) > 0 ? parseInt(t.countdownattr, 10) : undefined;
                f();
                o();
                t.isRunning = !1;
                t.clear()
            };
            i.bind("$destroy", function() {
                f();
                t.isRunning = !1
            });
            t.countdownattr ? (t.millis = t.countdownattr * 1e3, t.addCDSeconds = i[0].addCDSeconds = function(n) {
                t.countdown += n;
                t.$digest();
                t.isRunning || t.start()
            }, t.$on("timer-add-cd-seconds", function(n, i) {
                u(function() {
                    t.addCDSeconds(i)
                })
            }), t.$on("timer-set-countdown-seconds", function(n, i) {
                t.isRunning || t.clear();
                t.countdown = i;
                t.millis = i * 1e3;
                e()
            })) : t.millis = 0;
            e();
            var o = function() {
                t.millis = new Date - t.startTime;
                var n = t.millis % 1e3;
                if (t.endTimeAttr && (t.millis = t.endTime - new Date, n = t.interval - t.millis % 1e3), t.countdownattr && (t.millis = t.countdown * 1e3), t.millis < 0) {
                    t.stop();
                    t.millis = 0;
                    e();
                    t.finishCallback && t.$eval(t.finishCallback);
                    return
                }
                e();
                t.timeoutId = setTimeout(function() {
                    o();
                    t.$digest()
                }, t.interval - n);
                t.$emit("timer-tick", {
                    timeoutId: t.timeoutId,
                    millis: t.millis
                });
                t.countdown > 0 ? t.countdown-- : t.countdown <= 0 && (t.stop(), t.finishCallback && t.$eval(t.finishCallback))
            };
            (t.autoStart === undefined || t.autoStart === !0) && t.start()
        }]
    }
}]);
typeof module != "undefined" && typeof exports != "undefined" && module.exports === exports && (module.exports = timerModule);

angular.module("ngFacebook", []).provider("$facebook", function() {
    var n = {
        permissions: "email",
        appId: null,
        version: "v1.0",
        customInit: {}
    };
    this.setAppId = function(e) {
        return n.appId = e, this
    }, this.getAppId = function() {
        return n.appId
    }, this.setVersion = function(e) {
        return n.version = e, this
    }, this.getVersion = function() {
        return n.version
    }, this.setPermissions = function(e) {
        return e instanceof Array && e.join(","), n.permissions = e, this
    }, this.getPermissions = function() {
        return n.permissions
    }, this.setCustomInit = function(e) {
        return angular.isDefined(e.appId) && this.setAppId(e.appId), n.customInit = e, this
    }, this.getCustomInit = function() {
        return n.customInit
    }, this.$get = ["$q", "$rootScope", "$window", function(o, i, e) {
        var s = o.defer(),
            r = (s.config = function(e) {
                return n[e]
            }, s.init = function() {
                if (null == s.config("appId")) throw "$facebookProvider: `appId` cannot be null";
                e.FB.init(angular.extend({
                    appId: s.config("appId"),
                    version: s.config("version")
                }, s.config("customInit"))), i.$broadcast("fb.load", e.FB)
            }, i.$on("fb.load", function(e, t) {
                s.resolve(t), angular.forEach(["auth.login", "auth.logout", "auth.prompt", "auth.sessionChange", "auth.statusChange", "auth.authResponseChange", "xfbml.render", "edge.create", "edge.remove", "comment.create", "comment.remove", "message.send"], function(n) {
                    t.Event.subscribe(n, function(e) {
                        i.$broadcast("fb." + n, e, t), i.$$phase || i.$apply()
                    })
                }), s.getLoginStatus()
            }), s._cache = {}, s.setCache = function(e, n) {
                s._cache[e] = n
            }, s.getCache = function(e) {
                return !angular.isUndefined(s._cache[e]) && s._cache[e]
            }, s.clearCache = function() {
                s._cache = {}
            }, o.defer()),
            c = !1;
        return s.setCache("connected", null), s.isConnected = function() {
            return s.getCache("connected")
        }, i.$on("fb.auth.authResponseChange", function(e, n, t) {
            s.clearCache(), "connected" == n.status ? s.setCache("connected", !0) : s.setCache("connected", !1), n = t, c || (c = !0, r.resolve(n))
        }), s.getAuthResponse = function() {
            return FB.getAuthResponse()
        }, s.getLoginStatus = function(e) {
            var t = o.defer();
            return s.promise.then(function(n) {
                return n.getLoginStatus(function(e) {
                    e.error ? t.reject(e.error) : (t.resolve(e), null == s.isConnected() && i.$broadcast("fb.auth.authResponseChange", e, n)), i.$$phase || i.$apply()
                }, e), t.promise
            })
        }, s.login = function(e, n) {
            null == e && (e = s.config("permissions"));
            var t = o.defer(),
                r = {
                    scope: e
                };
            return n && (r.auth_type = "rerequest"), s.promise.then(function(e) {
                return e.login(function(e) {
                    e.error ? t.reject(e.error) : t.resolve(e), i.$$phase || i.$apply()
                }, r), t.promise
            })
        }, s.logout = function() {
            var n = o.defer();
            return s.promise.then(function(e) {
                return e.logout(function(e) {
                    e.error ? n.reject(e.error) : n.resolve(e), i.$$phase || i.$apply()
                }), n.promise
            })
        }, s.ui = function(n) {
            var t = o.defer();
            return s.promise.then(function(e) {
                return e.ui(n, function(e) {
                    e && e.error_code ? t.reject(e.error_message) : t.resolve(e), i.$$phase || i.$apply()
                }), t.promise
            })
        }, s.api = function() {
            var n = o.defer(),
                t = arguments;
            return t[t.length++] = function(e) {
                e.error && n.reject(e.error), e.error_msg ? n.reject(e) : n.resolve(e), i.$$phase || i.$apply()
            }, r.promise.then(function(e) {
                return e.api.apply(e, t), n.promise
            })
        }, s.cachedApi = function() {
            if ("string" != typeof arguments[0]) throw "$facebook.cacheApi can works only with graph requests!";
            var e = s.getCache(arguments[0]);
            return e || (e = s.api.apply(s, arguments), s.setCache(arguments[0], e), e)
        }, s
    }]
}).run(["$rootScope", "$window", "$facebook", function(e, n, t) {
    n.fbAsyncInit = function() {
        t.init(), e.$$phase || e.$apply()
    }
}]);
(function(t, e) {
    "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Spinner = e()
})(this, function() {
    "use strict";

    function t(t, e) {
        var i, n = document.createElement(t || "div");
        for (i in e) n[i] = e[i];
        return n
    }

    function e(t) {
        for (var e = 1, i = arguments.length; i > e; e++) t.appendChild(arguments[e]);
        return t
    }

    function i(t, e, i, n) {
        var r = ["opacity", e, ~~(100 * t), i, n].join("-"),
            o = .01 + 100 * (i / n),
            a = Math.max(1 - (1 - t) / e * (100 - o), t),
            s = u.substring(0, u.indexOf("Animation")).toLowerCase(),
            l = s && "-" + s + "-" || "";
        return c[r] || (p.insertRule("@" + l + "keyframes " + r + "{" + "0%{opacity:" + a + "}" + o + "%{opacity:" + t + "}" + (o + .01) + "%{opacity:1}" + (o + e) % 100 + "%{opacity:" + t + "}" + "100%{opacity:" + a + "}" + "}", p.cssRules.length), c[r] = 1), r
    }

    function n(t, e) {
        var i, n, r = t.style;
        for (e = e.charAt(0).toUpperCase() + e.slice(1), n = 0; d.length > n; n++)
            if (i = d[n] + e, void 0 !== r[i]) return i;
        return void 0 !== r[e] ? e : void 0
    }

    function r(t, e) {
        for (var i in e) t.style[n(t, i) || i] = e[i];
        return t
    }

    function o(t) {
        for (var e = 1; arguments.length > e; e++) {
            var i = arguments[e];
            for (var n in i) void 0 === t[n] && (t[n] = i[n])
        }
        return t
    }

    function a(t, e) {
        return "string" == typeof t ? t : t[e % t.length]
    }

    function s(t) {
        this.opts = o(t || {}, s.defaults, f)
    }

    function l() {
        function i(e, i) {
            return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', i)
        }
        p.addRule(".spin-vml", "behavior:url(#default#VML)"), s.prototype.lines = function(t, n) {
            function o() {
                return r(i("group", {
                    coordsize: d + " " + d,
                    coordorigin: -u + " " + -u
                }), {
                    width: d,
                    height: d
                })
            }

            function s(t, s, l) {
                e(p, e(r(o(), {
                    rotation: 360 / n.lines * t + "deg",
                    left: ~~s
                }), e(r(i("roundrect", {
                    arcsize: n.corners
                }), {
                    width: u,
                    height: n.width,
                    left: n.radius,
                    top: -n.width >> 1,
                    filter: l
                }), i("fill", {
                    color: a(n.color, t),
                    opacity: n.opacity
                }), i("stroke", {
                    opacity: 0
                }))))
            }
            var l, u = n.length + n.width,
                d = 2 * u,
                c = 2 * -(n.width + n.length) + "px",
                p = r(o(), {
                    position: "absolute",
                    top: c,
                    left: c
                });
            if (n.shadow)
                for (l = 1; n.lines >= l; l++) s(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (l = 1; n.lines >= l; l++) s(l);
            return e(t, p)
        }, s.prototype.opacity = function(t, e, i, n) {
            var r = t.firstChild;
            n = n.shadow && n.lines || 0, r && r.childNodes.length > e + n && (r = r.childNodes[e + n], r = r && r.firstChild, r = r && r.firstChild, r && (r.opacity = i))
        }
    }
    var u, d = ["webkit", "Moz", "ms", "O"],
        c = {},
        p = function() {
            var i = t("style", {
                type: "text/css"
            });
            return e(document.getElementsByTagName("head")[0], i), i.sheet || i.styleSheet
        }(),
        f = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
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
    s.defaults = {}, o(s.prototype, {
        spin: function(e) {
            this.stop();
            var i = this,
                n = i.opts,
                o = i.el = r(t(0, {
                    className: n.className
                }), {
                    position: n.position,
                    width: 0,
                    zIndex: n.zIndex
                });
            if (n.radius + n.length + n.width, r(o, {
                    left: n.left,
                    top: n.top
                }), e && e.insertBefore(o, e.firstChild || null), o.setAttribute("role", "progressbar"), i.lines(o, i.opts), !u) {
                var a, s = 0,
                    l = (n.lines - 1) * (1 - n.direction) / 2,
                    d = n.fps,
                    c = d / n.speed,
                    p = (1 - n.opacity) / (c * n.trail / 100),
                    f = c / n.lines;
                (function h() {
                    s++;
                    for (var t = 0; n.lines > t; t++) a = Math.max(1 - (s + (n.lines - t) * f) % c * p, n.opacity), i.opacity(o, t * n.direction + l, a, n);
                    i.timeout = i.el && setTimeout(h, ~~(1e3 / d))
                })()
            }
            return i
        },
        stop: function() {
            var t = this.el;
            return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = void 0), this
        },
        lines: function(n, o) {
            function s(e, i) {
                return r(t(), {
                    position: "absolute",
                    width: o.length + o.width + "px",
                    height: o.width + "px",
                    background: e,
                    boxShadow: i,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / o.lines * d + o.rotate) + "deg) translate(" + o.radius + "px" + ",0)",
                    borderRadius: (o.corners * o.width >> 1) + "px"
                })
            }
            for (var l, d = 0, c = (o.lines - 1) * (1 - o.direction) / 2; o.lines > d; d++) l = r(t(), {
                position: "absolute",
                top: 1 + ~(o.width / 2) + "px",
                transform: o.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: o.opacity,
                animation: u && i(o.opacity, o.trail, c + d * o.direction, o.lines) + " " + 1 / o.speed + "s linear infinite"
            }), o.shadow && e(l, r(s("#000", "0 0 4px #000"), {
                top: "2px"
            })), e(n, e(l, s(a(o.color, d), "0 0 1px rgba(0,0,0,.1)")));
            return n
        },
        opacity: function(t, e, i) {
            t.childNodes.length > e && (t.childNodes[e].style.opacity = i)
        }
    });
    var h = r(t("group"), {
        behavior: "url(#default#VML)"
    });
    return !n(h, "transform") && h.adj ? l() : u = n(h, "animation"), s
});
(function(t, e) {
    "object" == typeof exports ? module.exports = e(require("spin.js")) : "function" == typeof define && define.amd ? define(["spin"], e) : t.Ladda = e(t.Spinner)
})(this, function(t) {
    "use strict";

    function e(t) {
        if (t === void 0) return console.warn("Ladda button target must be defined."), void 0;
        t.querySelector(".ladda-label") || (t.innerHTML = '<span class="ladda-label">' + t.innerHTML + "</span>");
        var e, n = t.querySelector(".ladda-spinner");
        n || (n = document.createElement("span"), n.className = "ladda-spinner"), t.appendChild(n);
        var r, a = {
            start: function() {
                return e || (e = o(t)), t.setAttribute("disabled", ""), t.setAttribute("data-loading", ""), clearTimeout(r), e.spin(n), this.setProgress(0), this
            },
            startAfter: function(t) {
                return clearTimeout(r), r = setTimeout(function() {
                    a.start()
                }, t), this
            },
            stop: function() {
                return t.removeAttribute("disabled"), t.removeAttribute("data-loading"), clearTimeout(r), e && (r = setTimeout(function() {
                    e.stop()
                }, 1e3)), this
            },
            toggle: function() {
                return this.isLoading() ? this.stop() : this.start(), this
            },
            setProgress: function(e) {
                e = Math.max(Math.min(e, 1), 0);
                var n = t.querySelector(".ladda-progress");
                0 === e && n && n.parentNode ? n.parentNode.removeChild(n) : (n || (n = document.createElement("div"), n.className = "ladda-progress", t.appendChild(n)), n.style.width = (e || 0) * t.offsetWidth + "px")
            },
            enable: function() {
                return this.stop(), this
            },
            disable: function() {
                return this.stop(), t.setAttribute("disabled", ""), this
            },
            isLoading: function() {
                return t.hasAttribute("data-loading")
            },
            remove: function() {
                clearTimeout(r), t.removeAttribute("disabled", ""), t.removeAttribute("data-loading", ""), e && (e.stop(), e = null);
                for (var n = 0, i = u.length; i > n; n++)
                    if (a === u[n]) {
                        u.splice(n, 1);
                        break
                    }
            }
        };
        return u.push(a), a
    }

    function n(t, e) {
        for (; t.parentNode && t.tagName !== e;) t = t.parentNode;
        return e === t.tagName ? t : void 0
    }

    function r(t) {
        for (var e = ["input", "textarea", "select"], n = [], r = 0; e.length > r; r++)
            for (var a = t.getElementsByTagName(e[r]), i = 0; a.length > i; i++) a[i].hasAttribute("required") && n.push(a[i]);
        return n
    }

    function a(t, a) {
        a = a || {};
        var i = [];
        "string" == typeof t ? i = s(document.querySelectorAll(t)) : "object" == typeof t && "string" == typeof t.nodeName && (i = [t]);
        for (var o = 0, u = i.length; u > o; o++)(function() {
            var t = i[o];
            if ("function" == typeof t.addEventListener) {
                var s = e(t),
                    u = -1;
                t.addEventListener("click", function() {
                    var e = !0,
                        i = n(t, "FORM");
                    if (i !== void 0)
                        for (var o = r(i), d = 0; o.length > d; d++) "" === o[d].value.replace(/^\s+|\s+$/g, "") && (e = !1), "checkbox" !== o[d].type && "radio" !== o[d].type || o[d].checked || (e = !1), "email" === o[d].type && (e = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(o[d].value));
                    e && (s.startAfter(1), "number" == typeof a.timeout && (clearTimeout(u), u = setTimeout(s.stop, a.timeout)), "function" == typeof a.callback && a.callback.apply(null, [s]))
                }, !1)
            }
        })()
    }

    function i() {
        for (var t = 0, e = u.length; e > t; t++) u[t].stop()
    }

    function o(e) {
        var n, r = e.offsetHeight;
        0 === r && (r = parseFloat(window.getComputedStyle(e).height)), r > 32 && (r *= .8), e.hasAttribute("data-spinner-size") && (r = parseInt(e.getAttribute("data-spinner-size"), 10)), e.hasAttribute("data-spinner-color") && (n = e.getAttribute("data-spinner-color"));
        var a = 12,
            i = .2 * r,
            o = .6 * i,
            s = 7 > i ? 2 : 3;
        return new t({
            color: n || "#fff",
            lines: a,
            radius: i,
            length: o,
            width: s,
            zIndex: "auto",
            top: "auto",
            left: "auto",
            className: ""
        })
    }

    function s(t) {
        for (var e = [], n = 0; t.length > n; n++) e.push(t[n]);
        return e
    }
    var u = [];
    return {
        bind: a,
        create: e,
        stopAll: i
    }
});
! function() {
    "use strict";
    angular.module("angular-ladda", []).directive("ladda", ["$compile", "$timeout", function(a, b) {
        return {
            restrict: "A",
            replace: !1,
            terminal: !0,
            priority: 1e3,
            link: function(c, d, e) {
                d.addClass("ladda-button"), angular.isUndefined(d.attr("data-style")) && d.attr("data-style", "zoom-in");
                var f = Ladda.create(d[0]);
                b(function() {
                    d.removeAttr("ladda"), a(d)(c), c.$watch(e.ladda, function(a) {
                        a || angular.isNumber(a) ? (f.isLoading() || f.start(), angular.isNumber(a) && f.setProgress(a)) : (f.stop(), e.ngDisabled && d.attr("disabled", c.$eval(e.ngDisabled)))
                    })
                }, 0)
            }
        }
    }])
}();
(function(n, t) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
})(typeof window != "undefined" ? window : this, function(n, t) {
    function ui(n) {
        var t = n.length,
            r = i.type(n);
        return r === "function" || i.isWindow(n) ? !1 : n.nodeType === 1 && t ? !0 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in n
    }

    function fi(n, t, r) {
        if (i.isFunction(t)) return i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        });
        if (t.nodeType) return i.grep(n, function(n) {
            return n === t !== r
        });
        if (typeof t == "string") {
            if (ef.test(t)) return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return et.call(t, n) >= 0 !== r
        })
    }

    function ur(n, t) {
        while ((n = n[t]) && n.nodeType !== 1);
        return n
    }

    function of (n) {
        var t = ei[n] = {};
        return i.each(n.match(c) || [], function(n, i) {
            t[i] = !0
        }), t
    }

    function ct() {
        u.removeEventListener("DOMContentLoaded", ct, !1);
        n.removeEventListener("load", ct, !1);
        i.ready()
    }

    function p() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        });
        this.expando = i.expando + Math.random()
    }

    function fr(n, t, r) {
        var u;
        if (r === undefined && n.nodeType === 1)
            if (u = "data-" + t.replace(hf, "-$1").toLowerCase(), r = n.getAttribute(u), typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : sf.test(r) ? i.parseJSON(r) : r
                } catch (f) {}
                e.set(n, t, r)
            } else r = undefined;
        return r
    }

    function at() {
        return !0
    }

    function g() {
        return !1
    }

    function hr() {
        try {
            return u.activeElement
        } catch (n) {}
    }

    function vr(n, t) {
        return i.nodeName(n, "table") && i.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }

    function bf(n) {
        return n.type = (n.getAttribute("type") !== null) + "/" + n.type, n
    }

    function kf(n) {
        var t = pf.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function oi(n, t) {
        for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }

    function yr(n, t) {
        var f, c, o, s, h, l, a, u;
        if (t.nodeType === 1) {
            if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), u = s.events, u)) {
                delete h.handle;
                h.events = {};
                for (o in u)
                    for (f = 0, c = u[o].length; f < c; f++) i.event.add(t, o, u[o][f])
            }
            e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
        }
    }

    function o(n, t) {
        var r = n.getElementsByTagName ? n.getElementsByTagName(t || "*") : n.querySelectorAll ? n.querySelectorAll(t || "*") : [];
        return t === undefined || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }

    function df(n, t) {
        var i = t.nodeName.toLowerCase();
        i === "input" && er.test(n.type) ? t.checked = n.checked : (i === "input" || i === "textarea") && (t.defaultValue = n.defaultValue)
    }

    function pr(t, r) {
        var f, u = i(r.createElement(t)).appendTo(r.body),
            e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(u[0])) ? f.display : i.css(u[0], "display");
        return u.detach(), e
    }

    function hi(n) {
        var r = u,
            t = si[n];
        return t || (t = pr(n, r), t !== "none" && t || (vt = (vt || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = vt[0].contentDocument, r.write(), r.close(), t = pr(n, r), vt.detach()), si[n] = t), t
    }

    function rt(n, t, r) {
        var e, o, s, u, f = n.style;
        return r = r || yt(n), r && (u = r.getPropertyValue(t) || r[t]), r && (u !== "" || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), ci.test(u) && wr.test(t) && (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = e, f.minWidth = o, f.maxWidth = s)), u !== undefined ? u + "" : u
    }

    function br(n, t) {
        return {
            get: function() {
                if (n()) {
                    delete this.get;
                    return
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    }

    function gr(n, t) {
        if (t in n) return t;
        for (var r = t[0].toUpperCase() + t.slice(1), u = t, i = dr.length; i--;)
            if (t = dr[i] + r, t in n) return t;
        return u
    }

    function nu(n, t, i) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function tu(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + w[e], !0, f)), u ? (r === "content" && (o -= i.css(n, "padding" + w[e], !0, f)), r !== "margin" && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), r !== "padding" && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
        return o
    }

    function iu(n, t, r) {
        var o = !0,
            u = t === "width" ? n.offsetWidth : n.offsetHeight,
            e = yt(n),
            s = i.css(n, "boxSizing", !1, e) === "border-box";
        if (u <= 0 || u == null) {
            if (u = rt(n, t, e), (u < 0 || u == null) && (u = n.style[t]), ci.test(u)) return u;
            o = s && (f.boxSizingReliable() || u === n.style[t]);
            u = parseFloat(u) || 0
        }
        return u + tu(n, t, r || (s ? "border" : "content"), o, e) + "px"
    }

    function ru(n, t) {
        for (var e, u, s, o = [], f = 0, h = n.length; f < h; f++)(u = n[f], u.style) && (o[f] = r.get(u, "olddisplay"), e = u.style.display, t ? (o[f] || e !== "none" || (u.style.display = ""), u.style.display === "" && it(u) && (o[f] = r.access(u, "olddisplay", hi(u.nodeName)))) : (s = it(u), e === "none" && s || r.set(u, "olddisplay", s ? e : i.css(u, "display"))));
        for (f = 0; f < h; f++)(u = n[f], u.style) && (t && u.style.display !== "none" && u.style.display !== "" || (u.style.display = t ? o[f] || "" : "none"));
        return n
    }

    function s(n, t, i, r, u) {
        return new s.prototype.init(n, t, i, r, u)
    }

    function fu() {
        return setTimeout(function() {
            nt = undefined
        }), nt = i.now()
    }

    function bt(n, t) {
        var r, u = 0,
            i = {
                height: n
            };
        for (t = t ? 1 : 0; u < 4; u += 2 - t) r = w[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function eu(n, t, i) {
        for (var u, f = (ut[t] || []).concat(ut["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function fe(n, t, u) {
        var f, a, p, v, o, w, h, b, l = this,
            y = {},
            s = n.style,
            c = n.nodeType && it(n),
            e = r.get(n, "fxshow");
        u.queue || (o = i._queueHooks(n, "fx"), o.unqueued == null && (o.unqueued = 0, w = o.empty.fire, o.empty.fire = function() {
            o.unqueued || w()
        }), o.unqueued++, l.always(function() {
            l.always(function() {
                o.unqueued--;
                i.queue(n, "fx").length || o.empty.fire()
            })
        }));
        n.nodeType === 1 && ("height" in t || "width" in t) && (u.overflow = [s.overflow, s.overflowX, s.overflowY], h = i.css(n, "display"), b = h === "none" ? r.get(n, "olddisplay") || hi(n.nodeName) : h, b === "inline" && i.css(n, "float") === "none" && (s.display = "inline-block"));
        u.overflow && (s.overflow = "hidden", l.always(function() {
            s.overflow = u.overflow[0];
            s.overflowX = u.overflow[1];
            s.overflowY = u.overflow[2]
        }));
        for (f in t)
            if (a = t[f], re.exec(a)) {
                if (delete t[f], p = p || a === "toggle", a === (c ? "hide" : "show"))
                    if (a === "show" && e && e[f] !== undefined) c = !0;
                    else continue;
                y[f] = e && e[f] || i.style(n, f)
            } else h = undefined;
        if (i.isEmptyObject(y))(h === "none" ? hi(n.nodeName) : h) === "inline" && (s.display = h);
        else {
            e ? "hidden" in e && (c = e.hidden) : e = r.access(n, "fxshow", {});
            p && (e.hidden = !c);
            c ? i(n).show() : l.done(function() {
                i(n).hide()
            });
            l.done(function() {
                var t;
                r.remove(n, "fxshow");
                for (t in y) i.style(n, t, y[t])
            });
            for (f in y) v = eu(c ? e[f] : 0, f, l), f in e || (e[f] = v.start, c && (v.end = v.start, v.start = f === "width" || f === "height" ? 1 : 0))
        }
    }

    function ee(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function ou(n, t, r) {
        var e, o, s = 0,
            l = wt.length,
            f = i.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (o) return !1;
                for (var s = nt || fu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
                return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: nt || fu(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i < r; i++) u.tweens[i].run(1);
                    return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                }
            }),
            h = u.props;
        for (ee(h, u.opts.specialEasing); s < l; s++)
            if (e = wt[s].call(u, n, h, u.opts), e) return e;
        return i.map(h, eu, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function pu(n) {
        return function(t, r) {
            typeof t != "string" && (r = t, t = "*");
            var u, f = 0,
                e = t.toLowerCase().match(c) || [];
            if (i.isFunction(r))
                while (u = e[f++]) u[0] === "+" ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function wu(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                if (typeof s != "string" || o || f[s]) {
                    if (o) return !(h = s)
                } else return t.dataTypes.unshift(s), e(s), !1
            }), h
        }
        var f = {},
            o = n === li;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function ai(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t) t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }

    function ae(n, t, i) {
        for (var e, u, f, o, s = n.contents, r = n.dataTypes; r[0] === "*";) r.shift(), e === undefined && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) {
                    r.unshift(u);
                    break
                }
        if (r[0] in i) f = r[0];
        else {
            for (u in i) {
                if (!r[0] || n.converters[u + " " + r[0]]) {
                    f = u;
                    break
                }
                o || (o = u)
            }
            f = f || o
        }
        if (f) return f !== r[0] && r.unshift(f), i[f]
    }

    function ve(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift(), u)
                if (u === "*") u = e;
                else if (e !== "*" && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]], f)) {
                        f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                        break
                    }
            if (f !== !0)
                if (f && n.throws) t = f(t);
                else try {
                    t = f(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: f ? l : "No conversion from " + e + " to " + u
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function vi(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function(t, i) {
            r || pe.test(n) ? u(n, i) : vi(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
        });
        else if (r || i.type(t) !== "object") u(n, t);
        else
            for (f in t) vi(n + "[" + f + "]", t[f], r, u)
    }

    function ku(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 && n.defaultView
    }
    var k = [],
        a = k.slice,
        bi = k.concat,
        ii = k.push,
        et = k.indexOf,
        ot = {},
        nf = ot.toString,
        ri = ot.hasOwnProperty,
        f = {},
        u = n.document,
        ki = "2.1.1",
        i = function(n, t) {
            return new i.fn.init(n, t)
        },
        tf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rf = /^-ms-/,
        uf = /-([\da-z])/gi,
        ff = function(n, t) {
            return t.toUpperCase()
        },
        y, st, nr, tr, ir, rr, c, ei, ht, l, d, vt, si, oe, su, tt, hu, kt, cu, dt, gt, yi, ti, pi, wi, du, gu;
    i.fn = i.prototype = {
        jquery: ki,
        constructor: i,
        selector: "",
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(n) {
            return n != null ? n < 0 ? this[n + this.length] : this[n] : a.call(this)
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ii,
        sort: k.sort,
        splice: k.splice
    };
    i.extend = i.fn.extend = function() {
        var e, f, r, t, o, s, n = arguments[0] || {},
            u = 1,
            c = arguments.length,
            h = !1;
        for (typeof n == "boolean" && (h = n, n = arguments[u] || {}, u++), typeof n == "object" || i.isFunction(n) || (n = {}), u === c && (n = this, u--); u < c; u++)
            if ((e = arguments[u]) != null)
                for (f in e)(r = n[f], t = e[f], n !== t) && (h && t && (i.isPlainObject(t) || (o = i.isArray(t))) ? (o ? (o = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : t !== undefined && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (ki + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return i.type(n) === "function"
        },
        isArray: Array.isArray,
        isWindow: function(n) {
            return n != null && n === n.window
        },
        isNumeric: function(n) {
            return !i.isArray(n) && n - parseFloat(n) >= 0
        },
        isPlainObject: function(n) {
            return i.type(n) !== "object" || n.nodeType || i.isWindow(n) ? !1 : n.constructor && !ri.call(n.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(n) {
            for (var t in n) return !1;
            return !0
        },
        type: function(n) {
            return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? ot[nf.call(n)] || "object" : typeof n
        },
        globalEval: function(n) {
            var t, r = eval;
            n = i.trim(n);
            n && (n.indexOf("use strict") === 1 ? (t = u.createElement("script"), t.text = n, u.head.appendChild(t).parentNode.removeChild(t)) : r(n))
        },
        camelCase: function(n) {
            return n.replace(rf, "ms-").replace(uf, ff)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0,
                f = n.length,
                e = ui(n);
            if (i) {
                if (e) {
                    for (; r < f; r++)
                        if (u = t.apply(n[r], i), u === !1) break
                } else
                    for (r in n)
                        if (u = t.apply(n[r], i), u === !1) break
            } else if (e) {
                for (; r < f; r++)
                    if (u = t.call(n[r], r, n[r]), u === !1) break
            } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]), u === !1) break;
            return n
        },
        trim: function(n) {
            return n == null ? "" : (n + "").replace(tf, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return n != null && (ui(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : ii.call(r, n)), r
        },
        inArray: function(n, t, i) {
            return t == null ? -1 : et.call(t, n, i)
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
            return n.length = r, n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var u, r = 0,
                e = n.length,
                o = ui(n),
                f = [];
            if (o)
                for (; r < e; r++) u = t(n[r], r, i), u != null && f.push(u);
            else
                for (r in n) u = t(n[r], r, i), u != null && f.push(u);
            return bi.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, f, r;
            return (typeof t == "string" && (u = n[t], t = n, n = u), !i.isFunction(n)) ? undefined : (f = a.call(arguments, 2), r = function() {
                return n.apply(t || this, f.concat(a.call(arguments)))
            }, r.guid = n.guid = n.guid || i.guid++, r)
        },
        now: Date.now,
        support: f
    });
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
        ot["[object " + t + "]"] = t.toLowerCase()
    });
    y = function(n) {
        function r(n, t, i, r) {
            var w, h, c, v, k, y, d, l, nt, g;
            if ((t ? t.ownerDocument || t : s) !== e && p(t), t = t || e, i = i || [], !n || typeof n != "string") return i;
            if ((v = t.nodeType) !== 1 && v !== 9) return [];
            if (a && !r) {
                if (w = sr.exec(n))
                    if (c = w[1]) {
                        if (v === 9)
                            if (h = t.getElementById(c), h && h.parentNode) {
                                if (h.id === c) return i.push(h), i
                            } else return i;
                        else if (t.ownerDocument && (h = t.ownerDocument.getElementById(c)) && ot(t, h) && h.id === c) return i.push(h), i
                    } else {
                        if (w[2]) return b.apply(i, t.getElementsByTagName(n)), i;
                        if ((c = w[3]) && u.getElementsByClassName && t.getElementsByClassName) return b.apply(i, t.getElementsByClassName(c)), i
                    }
                if (u.qsa && (!o || !o.test(n))) {
                    if (l = d = f, nt = t, g = v === 9 && n, v === 1 && t.nodeName.toLowerCase() !== "object") {
                        for (y = et(n), (d = t.getAttribute("id")) ? l = d.replace(hr, "\\$&") : t.setAttribute("id", l), l = "[id='" + l + "'] ", k = y.length; k--;) y[k] = l + yt(y[k]);
                        nt = gt.test(n) && ii(t.parentNode) || t;
                        g = y.join(",")
                    }
                    if (g) try {
                        return b.apply(i, nt.querySelectorAll(g)), i
                    } catch (tt) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return si(n.replace(at, "$1"), t, i, r)
        }

        function ni() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
            }
            var i = [];
            return n
        }

        function h(n) {
            return n[f] = !0, n
        }

        function c(n) {
            var t = e.createElement("div");
            try {
                return !!n(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ti(n, i) {
            for (var u = n.split("|"), r = n.length; r--;) t.attrHandle[u[r]] = i
        }

        function wi(n, t) {
            var i = t && n,
                r = i && n.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || ai) - (~n.sourceIndex || ai);
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function cr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return i === "input" && t.type === n
            }
        }

        function lr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return (i === "input" || i === "button") && t.type === n
            }
        }

        function tt(n) {
            return h(function(t) {
                return t = +t, h(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ii(n) {
            return n && typeof n.getElementsByTagName !== ut && n
        }

        function bi() {}

        function yt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i
        }

        function ri(n, t, i) {
            var r = t.dir,
                u = i && r === "parentNode",
                e = ki++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (t.nodeType === 1 || u) return n(t, i, f)
            } : function(t, i, o) {
                var s, h, c = [v, e];
                if (o) {
                    while (t = t[r])
                        if ((t.nodeType === 1 || u) && n(t, i, o)) return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || u) {
                            if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === v && s[1] === e) return c[2] = s[2];
                            if (h[r] = c, c[2] = n(t, i, o)) return !0
                        }
            }
        }

        function ui(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function ar(n, t, i) {
            for (var u = 0, f = t.length; u < f; u++) r(n, t[u], i);
            return i
        }

        function pt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
            return o
        }

        function fi(n, t, i, r, u, e) {
            return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), h(function(f, e, o, s) {
                var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    k = f || ar(t || "*", o.nodeType ? [o] : o, []),
                    v = n && (f || !t) ? pt(k, p, n, o, s) : k,
                    h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r)
                    for (l = pt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) && (l = u ? nt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = pt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h)
            })
        }

        function ei(n) {
            for (var s, u, r, o = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ri(function(n) {
                    return n === s
                }, c, !0), a = ri(function(n) {
                    return nt.call(s, n) > -1
                }, c, !0), e = [function(n, t, i) {
                    return !h && (i || t !== ct) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
                }]; i < o; i++)
                if (u = t.relative[n[i].type]) e = [ri(ui(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                        for (r = ++i; r < o; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({
                            value: n[i - 2].type === " " ? "*" : ""
                        })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < o && ei(n = n.slice(r)), r < o && yt(n))
                    }
                    e.push(u)
                }
            return ui(e)
        }

        function vr(n, i) {
            var u = i.length > 0,
                f = n.length > 0,
                o = function(o, s, h, c, l) {
                    var y, d, w, k = 0,
                        a = "0",
                        g = o && [],
                        p = [],
                        nt = ct,
                        tt = o || f && t.find.TAG("*", l),
                        it = v += nt == null ? 1 : Math.random() || .1,
                        rt = tt.length;
                    for (l && (ct = s !== e && s); a !== rt && (y = tt[a]) != null; a++) {
                        if (f && y) {
                            for (d = 0; w = n[d++];)
                                if (w(y, s, h)) {
                                    c.push(y);
                                    break
                                }
                            l && (v = it)
                        }
                        u && ((y = !w && y) && k--, o && g.push(y))
                    }
                    if (k += a, u && a !== k) {
                        for (d = 0; w = i[d++];) w(g, p, s, h);
                        if (o) {
                            if (k > 0)
                                while (a--) g[a] || p[a] || (p[a] = gi.call(c));
                            p = pt(p)
                        }
                        b.apply(c, p);
                        l && !o && p.length > 0 && k + i.length > 1 && r.uniqueSort(c)
                    }
                    return l && (v = it, ct = nt), g
                };
            return u ? h(o) : o
        }
        var it, u, t, ht, oi, et, wt, si, ct, y, rt, p, e, l, a, o, g, lt, ot, f = "sizzle" + -new Date,
            s = n.document,
            v = 0,
            ki = 0,
            hi = ni(),
            ci = ni(),
            li = ni(),
            bt = function(n, t) {
                return n === t && (rt = !0), 0
            },
            ut = typeof undefined,
            ai = -2147483648,
            di = {}.hasOwnProperty,
            w = [],
            gi = w.pop,
            nr = w.push,
            b = w.push,
            vi = w.slice,
            nt = w.indexOf || function(n) {
                for (var t = 0, i = this.length; t < i; t++)
                    if (this[t] === n) return t;
                return -1
            },
            kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            i = "[\\x20\\t\\r\\n\\f]",
            ft = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            yi = ft.replace("w", "w#"),
            pi = "\\[" + i + "*(" + ft + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + yi + "))|)" + i + "*\\]",
            dt = ":(" + ft + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + pi + ")*)|.*)\\)|)",
            at = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
            tr = new RegExp("^" + i + "*," + i + "*"),
            ir = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
            rr = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"),
            ur = new RegExp(dt),
            fr = new RegExp("^" + yi + "$"),
            vt = {
                ID: new RegExp("^#(" + ft + ")"),
                CLASS: new RegExp("^\\.(" + ft + ")"),
                TAG: new RegExp("^(" + ft.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + pi),
                PSEUDO: new RegExp("^" + dt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + kt + ")$", "i"),
                needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
            },
            er = /^(?:input|select|textarea|button)$/i,
            or = /^h\d$/i,
            st = /^[^{]+\{\s*\[native \w/,
            sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            gt = /[+~]/,
            hr = /'|\\/g,
            k = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"),
            d = function(n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            };
        try {
            b.apply(w = vi.call(s.childNodes), s.childNodes);
            w[s.childNodes.length].nodeType
        } catch (yr) {
            b = {
                apply: w.length ? function(n, t) {
                    nr.apply(n, vi.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        u = r.support = {};
        oi = r.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        p = r.setDocument = function(n) {
            var v, r = n ? n.ownerDocument || n : s,
                h = r.defaultView;
            return r === e || r.nodeType !== 9 || !r.documentElement ? e : (e = r, l = r.documentElement, a = !oi(r), h && h !== h.top && (h.addEventListener ? h.addEventListener("unload", function() {
                p()
            }, !1) : h.attachEvent && h.attachEvent("onunload", function() {
                p()
            })), u.attributes = c(function(n) {
                return n.className = "i", !n.getAttribute("className")
            }), u.getElementsByTagName = c(function(n) {
                return n.appendChild(r.createComment("")), !n.getElementsByTagName("*").length
            }), u.getElementsByClassName = st.test(r.getElementsByClassName) && c(function(n) {
                return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>", n.firstChild.className = "i", n.getElementsByClassName("i").length === 2
            }), u.getById = c(function(n) {
                return l.appendChild(n).id = f, !r.getElementsByName || !r.getElementsByName(f).length
            }), u.getById ? (t.find.ID = function(n, t) {
                if (typeof t.getElementById !== ut && a) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [i] : []
                }
            }, t.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }) : (delete t.find.ID, t.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    var i = typeof n.getAttributeNode !== ut && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }), t.find.TAG = u.getElementsByTagName ? function(n, t) {
                if (typeof t.getElementsByTagName !== ut) return t.getElementsByTagName(n)
            } : function(n, t) {
                var i, r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                if (n === "*") {
                    while (i = u[f++]) i.nodeType === 1 && r.push(i);
                    return r
                }
                return u
            }, t.find.CLASS = u.getElementsByClassName && function(n, t) {
                if (typeof t.getElementsByClassName !== ut && a) return t.getElementsByClassName(n)
            }, g = [], o = [], (u.qsa = st.test(r.querySelectorAll)) && (c(function(n) {
                n.innerHTML = "<select msallowclip=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowclip^='']").length && o.push("[*^$]=" + i + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + i + "*(?:value|" + kt + ")");
                n.querySelectorAll(":checked").length || o.push(":checked")
            }), c(function(n) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + i + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })), (u.matchesSelector = st.test(lt = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.oMatchesSelector || l.msMatchesSelector)) && c(function(n) {
                u.disconnectedMatch = lt.call(n, "div");
                lt.call(n, "[s!='']:x");
                g.push("!=", dt)
            }), o = o.length && new RegExp(o.join("|")), g = g.length && new RegExp(g.join("|")), v = st.test(l.compareDocumentPosition), ot = v || st.test(l.contains) ? function(n, t) {
                var r = n.nodeType === 9 ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
            } : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n) return !0;
                return !1
            }, bt = v ? function(n, t) {
                if (n === t) return rt = !0, 0;
                var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, i & 1 || !u.sortDetached && t.compareDocumentPosition(n) === i) ? n === r || n.ownerDocument === s && ot(s, n) ? -1 : t === r || t.ownerDocument === s && ot(s, t) ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0 : i & 4 ? -1 : 1
            } : function(n, t) {
                if (n === t) return rt = !0, 0;
                var i, u = 0,
                    o = n.parentNode,
                    h = t.parentNode,
                    f = [n],
                    e = [t];
                if (o && h) {
                    if (o === h) return wi(n, t)
                } else return n === r ? -1 : t === r ? 1 : o ? -1 : h ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0;
                for (i = n; i = i.parentNode;) f.unshift(i);
                for (i = t; i = i.parentNode;) e.unshift(i);
                while (f[u] === e[u]) u++;
                return u ? wi(f[u], e[u]) : f[u] === s ? -1 : e[u] === s ? 1 : 0
            }, r)
        };
        r.matches = function(n, t) {
            return r(n, null, null, t)
        };
        r.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== e && p(n), t = t.replace(rr, "='$1']"), u.matchesSelector && a && (!g || !g.test(t)) && (!o || !o.test(t))) try {
                var i = lt.call(n, t);
                if (i || u.disconnectedMatch || n.document && n.document.nodeType !== 11) return i
            } catch (f) {}
            return r(t, e, null, [n]).length > 0
        };
        r.contains = function(n, t) {
            return (n.ownerDocument || n) !== e && p(n), ot(n, t)
        };
        r.attr = function(n, i) {
            (n.ownerDocument || n) !== e && p(n);
            var f = t.attrHandle[i.toLowerCase()],
                r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !a) : undefined;
            return r !== undefined ? r : u.attributes || !a ? n.getAttribute(i) : (r = n.getAttributeNode(i)) && r.specified ? r.value : null
        };
        r.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        r.uniqueSort = function(n) {
            var r, f = [],
                t = 0,
                i = 0;
            if (rt = !u.detectDuplicates, y = !u.sortStable && n.slice(0), n.sort(bt), rt) {
                while (r = n[i++]) r === n[i] && (t = f.push(i));
                while (t--) n.splice(f[t], 1)
            }
            return y = null, n
        };
        ht = r.getText = function(n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string") return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += ht(n)
                } else if (t === 3 || t === 4) return n.nodeValue
            } else
                while (r = n[u++]) i += ht(r);
            return i
        };
        t = r.selectors = {
            cacheLength: 50,
            createPseudo: h,
            match: vt,
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
                ATTR: function(n) {
                    return n[1] = n[1].replace(k, d), n[3] = (n[3] || n[4] || n[5] || "").replace(k, d), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(), n[1].slice(0, 3) === "nth" ? (n[3] || r.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")), n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && r.error(n[0]), n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && ur.test(t) && (i = et(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(k, d).toLowerCase();
                    return n === "*" ? function() {
                        return !0
                    } : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = hi[n + " "];
                    return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && hi(n, function(n) {
                        return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute !== ut && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(u) {
                        var f = r.attr(u, n);
                        return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = n.slice(0, 3) !== "nth",
                        o = n.slice(-4) !== "last",
                        e = t === "of-type";
                    return r === 1 && u === 0 ? function(n) {
                        return !!n.parentNode
                    } : function(t, i, h) {
                        var a, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling",
                            p = t.parentNode,
                            g = e && t.nodeName.toLowerCase(),
                            d = !h && !e;
                        if (p) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b];)
                                        if (e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                    w = b = n === "only" && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [o ? p.firstChild : p.lastChild], o && d) {
                                for (k = p[f] || (p[f] = {}), a = k[n] || [], y = a[0] === v && a[1], l = a[0] === v && a[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
                                    if (c.nodeType === 1 && ++l && c === t) {
                                        k[n] = [v, y, l];
                                        break
                                    }
                            } else if (d && (a = (t[f] || (t[f] = {}))[n]) && a[0] === v) l = a[1];
                            else
                                while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                                    if ((e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [v, l]), c === t)) break;
                            return l -= u, l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                    return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? h(function(n, t) {
                        for (var r, f = u(n, i), e = f.length; e--;) r = nt.call(n, f[e]), n[r] = !(t[r] = f[e])
                    }) : function(n) {
                        return u(n, 0, e)
                    }) : u
                }
            },
            pseudos: {
                not: h(function(n) {
                    var i = [],
                        r = [],
                        t = wt(n.replace(at, "$1"));
                    return t[f] ? h(function(n, i, r, u) {
                        for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
                    }) : function(n, u, f) {
                        return i[0] = n, t(i, null, f, r), !r.pop()
                    }
                }),
                has: h(function(n) {
                    return function(t) {
                        return r(n, t).length > 0
                    }
                }),
                contains: h(function(n) {
                    return function(t) {
                        return (t.textContent || t.innerText || ht(t)).indexOf(n) > -1
                    }
                }),
                lang: h(function(n) {
                    return fr.test(n || "") || r.error("unsupported lang: " + n), n = n.replace(k, d).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = a ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || i.indexOf(n + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === l
                },
                focus: function(n) {
                    return n === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && !!n.checked || t === "option" && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return or.test(n.nodeName)
                },
                input: function(n) {
                    return er.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && n.type === "button" || t === "button"
                },
                text: function(n) {
                    var t;
                    return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: tt(function() {
                    return [0]
                }),
                last: tt(function(n, t) {
                    return [t - 1]
                }),
                eq: tt(function(n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: tt(function(n, t) {
                    for (var i = 0; i < t; i += 2) n.push(i);
                    return n
                }),
                odd: tt(function(n, t) {
                    for (var i = 1; i < t; i += 2) n.push(i);
                    return n
                }),
                lt: tt(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                    return n
                }),
                gt: tt(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (it in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[it] = cr(it);
        for (it in {
                submit: !0,
                reset: !0
            }) t.pseudos[it] = lr(it);
        return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi, et = r.tokenize = function(n, i) {
            var e, f, s, o, u, h, c, l = ci[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (u = n, h = [], c = t.preFilter; u;) {
                (!e || (f = tr.exec(u))) && (f && (u = u.slice(f[0].length) || u), h.push(s = []));
                e = !1;
                (f = ir.exec(u)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(at, " ")
                }), u = u.slice(e.length));
                for (o in t.filter)(f = vt[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), u = u.slice(e.length));
                if (!e) break
            }
            return i ? u.length : u ? r.error(n) : ci(n, h).slice(0)
        }, wt = r.compile = function(n, t) {
            var r, u = [],
                e = [],
                i = li[n + " "];
            if (!i) {
                for (t || (t = et(n)), r = t.length; r--;) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                i = li(n, vr(e, u));
                i.selector = n
            }
            return i
        }, si = r.select = function(n, i, r, f) {
            var s, e, o, l, v, c = typeof n == "function" && n,
                h = !f && et(n = c.selector || n);
            if (r = r || [], h.length === 1) {
                if (e = h[0] = h[0].slice(0), e.length > 2 && (o = e[0]).type === "ID" && u.getById && i.nodeType === 9 && a && t.relative[e[1].type]) {
                    if (i = (t.find.ID(o.matches[0].replace(k, d), i) || [])[0], i) c && (i = i.parentNode);
                    else return r;
                    n = n.slice(e.shift().value.length)
                }
                for (s = vt.needsContext.test(n) ? 0 : e.length; s--;) {
                    if (o = e[s], t.relative[l = o.type]) break;
                    if ((v = t.find[l]) && (f = v(o.matches[0].replace(k, d), gt.test(e[0].type) && ii(i.parentNode) || i))) {
                        if (e.splice(s, 1), n = f.length && yt(e), !n) return b.apply(r, f), r;
                        break
                    }
                }
            }
            return (c || wt(n, h))(f, i, !a, r, gt.test(n) && ii(i.parentNode) || i), r
        }, u.sortStable = f.split("").sort(bt).join("") === f, u.detectDuplicates = !!rt, p(), u.sortDetached = c(function(n) {
            return n.compareDocumentPosition(e.createElement("div")) & 1
        }), c(function(n) {
            return n.innerHTML = "<a href='#'><\/a>", n.firstChild.getAttribute("href") === "#"
        }) || ti("type|href|height|width", function(n, t, i) {
            if (!i) return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), u.attributes && c(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), n.firstChild.getAttribute("value") === ""
        }) || ti("value", function(n, t, i) {
            if (!i && n.nodeName.toLowerCase() === "input") return n.defaultValue
        }), c(function(n) {
            return n.getAttribute("disabled") == null
        }) || ti(kt, function(n, t, i) {
            var r;
            if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), r
    }(n);
    i.find = y;
    i.expr = y.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.unique = y.uniqueSort;
    i.text = y.getText;
    i.isXMLDoc = y.isXML;
    i.contains = y.contains;
    var di = i.expr.match.needsContext,
        gi = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ef = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), t.length === 1 && u.nodeType === 1 ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return n.nodeType === 1
        }))
    };
    i.fn.extend({
        find: function(n) {
            var t, u = this.length,
                r = [],
                f = this;
            if (typeof n != "string") return this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (t = 0; t < u; t++) i.find(n, f[t], r);
            return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
        },
        filter: function(n) {
            return this.pushStack(fi(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(fi(this, n || [], !0))
        },
        is: function(n) {
            return !!fi(this, typeof n == "string" && di.test(n) ? i(n) : n || [], !1).length
        }
    });
    nr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    tr = i.fn.init = function(n, t) {
        var r, f;
        if (!n) return this;
        if (typeof n == "string") {
            if (r = n[0] === "<" && n[n.length - 1] === ">" && n.length >= 3 ? [null, n, null] : nr.exec(n), r && (r[1] || !t)) {
                if (r[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), gi.test(r[1]) && i.isPlainObject(t))
                        for (r in t) i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return f = u.getElementById(r[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = u, this.selector = n, this
            }
            return !t || t.jquery ? (t || st).find(n) : this.constructor(t).find(n)
        }
        return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? typeof st.ready != "undefined" ? st.ready(n) : n(i) : (n.selector !== undefined && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
    };
    tr.prototype = i.fn;
    st = i(u);
    ir = /^(?:parents|prev(?:Until|All))/;
    rr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.extend({
        dir: function(n, t, r) {
            for (var u = [], f = r !== undefined;
                (n = n[t]) && n.nodeType !== 9;)
                if (n.nodeType === 1) {
                    if (f && i(n).is(r)) break;
                    u.push(n)
                }
            return u
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    i.fn.extend({
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = di.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) {
                        u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function(n) {
            return n ? typeof n == "string" ? et.call(i(n), this[0]) : et.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return ur(n, "nextSibling")
        },
        prev: function(n) {
            return ur(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return n.contentDocument || i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return n.slice(-5) !== "Until" && (u = r), u && typeof u == "string" && (f = i.filter(u, f)), this.length > 1 && (rr[n] || i.unique(f), ir.test(n) && f.reverse()), this.pushStack(f)
        }
    });
    c = /\S+/g;
    ei = {};
    i.Callbacks = function(n) {
        n = typeof n == "string" ? ei[n] || of (n) : i.extend({}, n);
        var u, h, o, c, f, e, t = [],
            r = !n.once && [],
            l = function(i) {
                for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && e < f; e++)
                    if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                        u = !1;
                        break
                    }
                o = !1;
                t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
            },
            s = {
                add: function() {
                    if (t) {
                        var r = t.length;
                        (function e(r) {
                            i.each(r, function(r, u) {
                                var f = i.type(u);
                                f === "function" ? n.unique && s.has(u) || t.push(u) : u && u.length && f !== "string" && e(u)
                            })
                        })(arguments);
                        o ? f = t.length : u && (c = r, l(u))
                    }
                    return this
                },
                remove: function() {
                    return t && i.each(arguments, function(n, r) {
                        for (var u;
                            (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), o && (u <= f && f--, u <= e && e--)
                    }), this
                },
                has: function(n) {
                    return n ? i.inArray(n, t) > -1 : !!(t && t.length)
                },
                empty: function() {
                    return t = [], f = 0, this
                },
                disable: function() {
                    return t = r = u = undefined, this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return r = undefined, u || s.disable(), this
                },
                locked: function() {
                    return !r
                },
                fireWith: function(n, i) {
                    return t && (!h || r) && (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)), this
                },
                fire: function() {
                    return s.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!h
                }
            };
        return s
    };
    i.extend({
        Deferred: function(n) {
            var u = [
                    ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", i.Callbacks("memory")]
                ],
                f = "pending",
                r = {
                    state: function() {
                        return f
                    },
                    always: function() {
                        return t.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var n = arguments;
                        return i.Deferred(function(f) {
                            i.each(u, function(u, e) {
                                var o = i.isFunction(n[u]) && n[u];
                                t[e[1]](function() {
                                    var n = o && o.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    promise: function(n) {
                        return n != null ? i.extend(n, r) : r
                    }
                },
                t = {};
            return r.pipe = r.then, i.each(u, function(n, i) {
                var e = i[2],
                    o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                }, u[n ^ 1][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments), this
                };
                t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        },
        when: function(n) {
            var t = 0,
                u = a.call(arguments),
                r = u.length,
                e = r !== 1 || n && i.isFunction(n.promise) ? r : 0,
                f = e === 1 ? n : i.Deferred(),
                h = function(n, t, i) {
                    return function(r) {
                        t[n] = this;
                        i[n] = arguments.length > 1 ? a.call(arguments) : r;
                        i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                    }
                },
                o, c, s;
            if (r > 1)
                for (o = new Array(r), c = new Array(r), s = new Array(r); t < r; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u), f.promise()
        }
    });
    i.fn.ready = function(n) {
        return i.ready.promise().done(n), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0) || (ht.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready")))
        }
    });
    i.ready.promise = function(t) {
        return ht || (ht = i.Deferred(), u.readyState === "complete" ? setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", ct, !1), n.addEventListener("load", ct, !1))), ht.promise(t)
    };
    i.ready.promise();
    l = i.access = function(n, t, r, u, f, e, o) {
        var s = 0,
            c = n.length,
            h = r == null;
        if (i.type(r) === "object") {
            f = !0;
            for (s in r) i.access(n, t, s, r[s], !0, e, o)
        } else if (u !== undefined && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                return h.call(i(n), r)
            })), t))
            for (; s < c; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
        return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
    };
    i.acceptData = function(n) {
        return n.nodeType === 1 || n.nodeType === 9 || !+n.nodeType
    };
    p.uid = 1;
    p.accepts = i.acceptData;
    p.prototype = {
        key: function(n) {
            if (!p.accepts(n)) return 0;
            var r = {},
                t = n[this.expando];
            if (!t) {
                t = p.uid++;
                try {
                    r[this.expando] = {
                        value: t
                    };
                    Object.defineProperties(n, r)
                } catch (u) {
                    r[this.expando] = t;
                    i.extend(n, r)
                }
            }
            return this.cache[t] || (this.cache[t] = {}), t
        },
        set: function(n, t, r) {
            var f, e = this.key(n),
                u = this.cache[e];
            if (typeof t == "string") u[t] = r;
            else if (i.isEmptyObject(u)) i.extend(this.cache[e], t);
            else
                for (f in t) u[f] = t[f];
            return u
        },
        get: function(n, t) {
            var i = this.cache[this.key(n)];
            return t === undefined ? i : i[t]
        },
        access: function(n, t, r) {
            var u;
            return t === undefined || t && typeof t == "string" && r === undefined ? (u = this.get(n, t), u !== undefined ? u : this.get(n, i.camelCase(t))) : (this.set(n, t, r), r !== undefined ? r : t)
        },
        remove: function(n, t) {
            var u, r, f, o = this.key(n),
                e = this.cache[o];
            if (t === undefined) this.cache[o] = {};
            else
                for (i.isArray(t) ? r = t.concat(t.map(i.camelCase)) : (f = i.camelCase(t), t in e ? r = [t, f] : (r = f, r = r in e ? [r] : r.match(c) || [])), u = r.length; u--;) delete e[r[u]]
        },
        hasData: function(n) {
            return !i.isEmptyObject(this.cache[n[this.expando]] || {})
        },
        discard: function(n) {
            n[this.expando] && delete this.cache[n[this.expando]]
        }
    };
    var r = new p,
        e = new p,
        sf = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        hf = /([A-Z])/g;
    i.extend({
        hasData: function(n) {
            return e.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return e.access(n, t, i)
        },
        removeData: function(n, t) {
            e.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var o, f, s, u = this[0],
                h = u && u.attributes;
            if (n === undefined) {
                if (this.length && (s = e.get(u), u.nodeType === 1 && !r.get(u, "hasDataAttrs"))) {
                    for (o = h.length; o--;) h[o] && (f = h[o].name, f.indexOf("data-") === 0 && (f = i.camelCase(f.slice(5)), fr(u, f, s[f])));
                    r.set(u, "hasDataAttrs", !0)
                }
                return s
            }
            return typeof n == "object" ? this.each(function() {
                e.set(this, n)
            }) : l(this, function(t) {
                var r, f = i.camelCase(n);
                if (u && t === undefined) return (r = e.get(u, n), r !== undefined) ? r : (r = e.get(u, f), r !== undefined) ? r : (r = fr(u, f, undefined), r !== undefined) ? r : void 0;
                this.each(function() {
                    var i = e.get(this, f);
                    e.set(this, f, t);
                    n.indexOf("-") !== -1 && i !== undefined && e.set(this, n, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                e.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function() {
                    i.dequeue(n, t)
                };
            u === "inprogress" && (u = r.shift(), e--);
            u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return (typeof n != "string" && (t = n, n = "fx", r--), arguments.length < r) ? i.queue(this[0], n) : t === undefined ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {
                    --e || o.resolveWith(f, [f])
                };
            for (typeof n != "string" && (t = n, n = undefined), n = n || "fx"; s--;) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        w = ["Top", "Right", "Bottom", "Left"],
        it = function(n, t) {
            return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
        },
        er = /^(?:checkbox|radio)$/i;
    (function() {
        var i = u.createDocumentFragment(),
            n = i.appendChild(u.createElement("div")),
            t = u.createElement("input");
        t.setAttribute("type", "radio");
        t.setAttribute("checked", "checked");
        t.setAttribute("name", "t");
        n.appendChild(t);
        f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        n.innerHTML = "<textarea>x<\/textarea>";
        f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
    })();
    d = typeof undefined;
    f.focusinBubbles = "onfocusin" in n;
    var cf = /^key/,
        lf = /^(?:mouse|pointer|contextmenu)|click/,
        or = /^(?:focusinfocus|focusoutblur)$/,
        sr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var v, y, w, p, b, h, s, l, o, k, g, a = r.get(n);
            if (a)
                for (u.handler && (v = u, u = v.handler, e = v.selector), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function(t) {
                        return typeof i !== d && i.event.triggered !== t.type ? i.event.dispatch.apply(n, arguments) : undefined
                    }), t = (t || "").match(c) || [""], b = t.length; b--;)(w = sr.exec(t[b]) || [], o = g = w[1], k = (w[2] || "").split(".").sort(), o) && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({
                    type: o,
                    origType: g,
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    needsContext: e && i.expr.match.needsContext.test(e),
                    namespace: k.join(".")
                }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y, !1)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, h) : l.push(h), i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var p, k, h, v, w, s, l, a, o, b, d, y = r.hasData(n) && r.get(n);
            if (y && (v = y.events)) {
                for (t = (t || "").match(c) || [""], w = t.length; w--;) {
                    if (h = sr.exec(t[w]) || [], o = d = h[1], b = (h[2] || "").split(".").sort(), !o) {
                        for (o in v) i.event.remove(n, o + t[w], u, f, !0);
                        continue
                    }
                    for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], h = h[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = p = a.length; p--;) s = a[p], (e || d === s.origType) && (!u || u.guid === s.guid) && (!h || h.test(s.namespace)) && (!f || f === s.selector || f === "**" && s.selector) && (a.splice(p, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                    k && !a.length && (l.teardown && l.teardown.call(n, b, y.handle) !== !1 || i.removeEvent(n, o, y.handle), delete v[o])
                }
                i.isEmptyObject(v) && (delete y.handle, r.remove(n, "events"))
            }
        },
        trigger: function(t, f, e, o) {
            var w, s, c, b, a, v, l, p = [e || u],
                h = ri.call(t, "type") ? t.type : t,
                y = ri.call(t, "namespace") ? t.namespace.split(".") : [];
            if ((s = c = e = e || u, e.nodeType !== 3 && e.nodeType !== 8) && !or.test(h + i.event.triggered) && (h.indexOf(".") >= 0 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, typeof t == "object" && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = e), f = f == null ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                if (!o && !l.noBubble && !i.isWindow(e)) {
                    for (b = l.delegateType || h, or.test(b + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                    c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
                }
                for (w = 0;
                    (s = p[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && i.acceptData(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
                return t.type = h, o || t.isDefaultPrevented() || (!l._default || l._default.apply(p.pop(), f) === !1) && i.acceptData(e) && a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = undefined, c && (e[a] = c)), t.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var o, s, e, u, t, h = [],
                c = a.call(arguments),
                l = (r.get(this, "events") || {})[n.type] || [],
                f = i.event.special[n.type] || {};
            if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
                for (h = i.event.handlers.call(this, n, l), o = 0;
                    (u = h[o++]) && !n.isPropagationStopped();)
                    for (n.currentTarget = u.elem, s = 0;
                        (t = u.handlers[s++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t, n.data = t.data, e = ((i.event.special[t.origType] || {}).handle || t.handler).apply(u.elem, c), e !== undefined && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
                return f.postDispatch && f.postDispatch.call(this, n), n.result
            }
        },
        handlers: function(n, t) {
            var e, u, f, o, h = [],
                s = t.delegateCount,
                r = n.target;
            if (s && r.nodeType && (!n.button || n.type !== "click"))
                for (; r !== this; r = r.parentNode || this)
                    if (r.disabled !== !0 || n.type !== "click") {
                        for (u = [], e = 0; e < s; e++) o = t[e], f = o.selector + " ", u[f] === undefined && (u[f] = o.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length), u[f] && u.push(o);
                        u.length && h.push({
                            elem: r,
                            handlers: u
                        })
                    }
            return s < t.length && h.push({
                elem: this,
                handlers: t.slice(s)
            }), h
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, t) {
                var e, i, r, f = t.button;
                return n.pageX == null && t.clientX != null && (e = n.target.ownerDocument || u, i = e.documentElement, r = e.body, n.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), n.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), n.which || f === undefined || (n.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0), n
            }
        },
        fix: function(n) {
            if (n[i.expando]) return n;
            var f, e, o, r = n.type,
                s = n,
                t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = lf.test(r) ? this.mouseHooks : cf.test(r) ? this.keyHooks : {}), o = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(s), f = o.length; f--;) e = o[f], n[e] = s[e];
            return n.target || (n.target = u), n.target.nodeType === 3 && (n.target = n.target.parentNode), t.filter ? t.filter(n, s) : n
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== hr() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === hr() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && i.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== undefined && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && n.returnValue === !1 ? at : g) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || i.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = at;
            n && n.preventDefault && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = at;
            n && n.stopPropagation && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = at;
            n && n.stopImmediatePropagation && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    f.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            }
        }
    });
    i.fn.extend({
        on: function(n, t, r, u, f) {
            var e, o;
            if (typeof n == "object") {
                typeof t != "string" && (r = r || t, t = undefined);
                for (o in n) this.on(o, t, r, n[o], f);
                return this
            }
            if (r == null && u == null ? (u = t, r = t = undefined) : u == null && (typeof t == "string" ? (u = r, r = undefined) : (u = r, r = t, t = undefined)), u === !1) u = g;
            else if (!u) return this;
            return f === 1 && (e = u, u = function(n) {
                return i().off(n), e.apply(this, arguments)
            }, u.guid = e.guid || (e.guid = i.guid++)), this.each(function() {
                i.event.add(this, n, u, r, t)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if (typeof n == "object") {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || typeof t == "function") && (r = t, t = undefined), r === !1 && (r = g), this.each(function() {
                i.event.remove(this, n, r, t)
            })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    var cr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        lr = /<([\w:]+)/,
        af = /<|&#?\w+;/,
        vf = /<(?:script|style|link)/i,
        yf = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ar = /^$|\/(?:java|ecma)script/i,
        pf = /^true\/(.*)/,
        wf = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        h = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            thead: [1, "<table>", "<\/table>"],
            col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: [0, "", ""]
        };
    h.optgroup = h.option;
    h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
    h.th = h.td;
    i.extend({
        clone: function(n, t, r) {
            var u, c, s, e, h = n.cloneNode(!0),
                l = i.contains(n.ownerDocument, n);
            if (!f.noCloneChecked && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (e = o(h), s = o(n), u = 0, c = s.length; u < c; u++) df(s[u], e[u]);
            if (t)
                if (r)
                    for (s = s || o(n), e = e || o(h), u = 0, c = s.length; u < c; u++) yr(s[u], e[u]);
                else yr(n, h);
            return e = o(h, "script"), e.length > 0 && oi(e, !l && o(n, "script")), h
        },
        buildFragment: function(n, t, r, u) {
            for (var f, e, y, l, p, a, s = t.createDocumentFragment(), v = [], c = 0, w = n.length; c < w; c++)
                if (f = n[c], f || f === 0)
                    if (i.type(f) === "object") i.merge(v, f.nodeType ? [f] : f);
                    else if (af.test(f)) {
                for (e = e || s.appendChild(t.createElement("div")), y = (lr.exec(f) || ["", ""])[1].toLowerCase(), l = h[y] || h._default, e.innerHTML = l[1] + f.replace(cr, "<$1><\/$2>") + l[2], a = l[0]; a--;) e = e.lastChild;
                i.merge(v, e.childNodes);
                e = s.firstChild;
                e.textContent = ""
            } else v.push(t.createTextNode(f));
            for (s.textContent = "", c = 0; f = v[c++];)
                if ((!u || i.inArray(f, u) === -1) && (p = i.contains(f.ownerDocument, f), e = o(s.appendChild(f), "script"), p && oi(e), r))
                    for (a = 0; f = e[a++];) ar.test(f.type || "") && r.push(f);
            return s
        },
        cleanData: function(n) {
            for (var f, t, o, u, h = i.event.special, s = 0;
                (t = n[s]) !== undefined; s++) {
                if (i.acceptData(t) && (u = t[r.expando], u && (f = r.cache[u]))) {
                    if (f.events)
                        for (o in f.events) h[o] ? i.event.remove(t, o) : i.removeEvent(t, o, f.handle);
                    r.cache[u] && delete r.cache[u]
                }
                delete e.cache[t[e.expando]]
            }
        }
    });
    i.fn.extend({
        text: function(n) {
            return l(this, function(n) {
                return n === undefined ? i.text(this) : this.empty().each(function() {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = vr(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = vr(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, f = n ? i.filter(n, this) : this, u = 0;
                (r = f[u]) != null; u++) t || r.nodeType !== 1 || i.cleanData(o(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && oi(o(r, "script")), r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0;
                (n = this[t]) != null; t++) n.nodeType === 1 && (i.cleanData(o(n, !1)), n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return l(this, function(n) {
                var t = this[0] || {},
                    r = 0,
                    u = this.length;
                if (n === undefined && t.nodeType === 1) return t.innerHTML;
                if (typeof n == "string" && !vf.test(n) && !h[(lr.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(cr, "<$1><\/$2>");
                    try {
                        for (; r < u; r++) t = this[r] || {}, t.nodeType === 1 && (i.cleanData(o(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (f) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = arguments[0];
            return this.domManip(arguments, function(t) {
                n = this.parentNode;
                i.cleanData(o(this));
                n && n.replaceChild(t, this)
            }), n && (n.length || n.nodeType) ? this : this.remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t) {
            n = bi.apply([], n);
            var h, v, s, c, u, y, e = 0,
                l = this.length,
                w = this,
                b = l - 1,
                a = n[0],
                p = i.isFunction(a);
            if (p || l > 1 && typeof a == "string" && !f.checkClone && yf.test(a)) return this.each(function(i) {
                var r = w.eq(i);
                p && (n[0] = a.call(this, i, r.html()));
                r.domManip(n, t)
            });
            if (l && (h = i.buildFragment(n, this[0].ownerDocument, !1, this), v = h.firstChild, h.childNodes.length === 1 && (h = v), v)) {
                for (s = i.map(o(h, "script"), bf), c = s.length; e < l; e++) u = h, e !== b && (u = i.clone(u, !0, !0), c && i.merge(s, o(u, "script"))), t.call(this[e], u, e);
                if (c)
                    for (y = s[s.length - 1].ownerDocument, i.map(s, kf), e = 0; e < c; e++) u = s[e], ar.test(u.type || "") && !r.access(u, "globalEval") && i.contains(y, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval(u.textContent.replace(wf, "")))
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ii.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    si = {};
    var wr = /^margin/,
        ci = new RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"),
        yt = function(n) {
            return n.ownerDocument.defaultView.getComputedStyle(n, null)
        };
    (function() {
        function h() {
            t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
            t.innerHTML = "";
            e.appendChild(r);
            var i = n.getComputedStyle(t, null);
            s = i.top !== "1%";
            o = i.width === "4px";
            e.removeChild(r)
        }
        var s, o, e = u.documentElement,
            r = u.createElement("div"),
            t = u.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = t.style.backgroundClip === "content-box", r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(t), n.getComputedStyle && i.extend(f, {
            pixelPosition: function() {
                return h(), s
            },
            boxSizingReliable: function() {
                return o == null && h(), o
            },
            reliableMarginRight: function() {
                var f, i = t.appendChild(u.createElement("div"));
                return i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", e.appendChild(r), f = !parseFloat(n.getComputedStyle(i, null).marginRight), e.removeChild(r), f
            }
        }))
    })();
    i.swap = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t) e[u] = n.style[u], n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t) n.style[u] = e[u];
        return f
    };
    var gf = /^(none|table(?!-c[ea]).+)/,
        ne = new RegExp("^(" + lt + ")(.*)$", "i"),
        te = new RegExp("^([+-])=(" + lt + ")", "i"),
        ie = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        kr = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        dr = ["Webkit", "O", "Moz", "ms"];
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = rt(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
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
        cssProps: {
            float: "cssFloat"
        },
        style: function(n, t, r, u) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var o, h, e, s = i.camelCase(t),
                    c = n.style;
                if (t = i.cssProps[s] || (i.cssProps[s] = gr(c, s)), e = i.cssHooks[t] || i.cssHooks[s], r !== undefined) {
                    if (h = typeof r, h === "string" && (o = te.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), h = "number"), r == null || r !== r) return;
                    h !== "number" || i.cssNumber[s] || (r += "px");
                    f.clearCloneStyle || r !== "" || t.indexOf("background") !== 0 || (c[t] = "inherit");
                    e && "set" in e && (r = e.set(n, r, u)) === undefined || (c[t] = r)
                } else return e && "get" in e && (o = e.get(n, !1, u)) !== undefined ? o : c[t]
            }
        },
        css: function(n, t, r, u) {
            var f, s, e, o = i.camelCase(t);
            return (t = i.cssProps[o] || (i.cssProps[o] = gr(n.style, o)), e = i.cssHooks[t] || i.cssHooks[o], e && "get" in e && (f = e.get(n, !0, r)), f === undefined && (f = rt(n, t, u)), f === "normal" && t in kr && (f = kr[t]), r === "" || r) ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return gf.test(i.css(n, "display")) && n.offsetWidth === 0 ? i.swap(n, ie, function() {
                    return iu(n, t, u)
                }) : iu(n, t, u)
            },
            set: function(n, r, u) {
                var f = u && yt(n);
                return nu(n, r, u ? tu(n, t, u, i.css(n, "boxSizing", !1, f) === "border-box", f) : 0)
            }
        }
    });
    i.cssHooks.marginRight = br(f.reliableMarginRight, function(n, t) {
        if (t) return i.swap(n, {
            display: "inline-block"
        }, rt, [n, "marginRight"])
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        wr.test(n) || (i.cssHooks[n + t].set = nu)
    });
    i.fn.extend({
        css: function(n, t) {
            return l(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (i.isArray(t)) {
                    for (f = yt(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return r !== undefined ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        },
        show: function() {
            return ru(this, !0)
        },
        hide: function() {
            return ru(this)
        },
        toggle: function(n) {
            return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function() {
                it(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.Tween = s;
    s.prototype = {
        constructor: s,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = s.propHooks[this.prop];
            return n && n.get ? n.get(this) : s.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = s.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : s.propHooks._default.set(this), this
        }
    };
    s.prototype.init.prototype = s.prototype;
    s.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return n.elem[n.prop] != null && (!n.elem.style || n.elem.style[n.prop] == null) ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), !t || t === "auto" ? 0 : t)
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    s.propHooks.scrollTop = s.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.fx = s.prototype.init;
    i.fx.step = {};
    var nt, pt, re = /^(?:toggle|show|hide)$/,
        uu = new RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"),
        ue = /queueHooks$/,
        wt = [fe],
        ut = {
            "*": [function(n, t) {
                var f = this.createTween(n, t),
                    s = f.cur(),
                    u = uu.exec(t),
                    e = u && u[3] || (i.cssNumber[n] ? "" : "px"),
                    r = (i.cssNumber[n] || e !== "px" && +s) && uu.exec(i.css(f.elem, n)),
                    o = 1,
                    h = 20;
                if (r && r[3] !== e) {
                    e = e || r[3];
                    u = u || [];
                    r = +s || 1;
                    do o = o || ".5", r = r / o, i.style(f.elem, n, r + e); while (o !== (o = f.cur() / s) && o !== 1 && --h)
                }
                return u && (r = f.start = +r || +s || 0, f.unit = e, f.end = u[1] ? r + (u[1] + 1) * u[2] : +u[2]), f
            }]
        };
    i.Animation = i.extend(ou, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; u < f; u++) r = n[u], ut[r] = ut[r] || [], ut[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? wt.unshift(n) : wt.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }, u
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(it).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = ou(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return typeof n != "string" && (u = t, t = n, n = undefined), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                    t = n != null && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && ue.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem === this && (n == null || o[t].queue === n) && (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                (s || !u) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(bt(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: bt("show"),
        slideUp: bt("hide"),
        slideToggle: bt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0,
            t = i.timers;
        for (nt = i.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        nt = undefined
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        pt || (pt = setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.stop = function() {
        clearInterval(pt);
        pt = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var n = u.createElement("input"),
                t = u.createElement("select"),
                i = t.appendChild(u.createElement("option"));
            n.type = "checkbox";
            f.checkOn = n.value !== "";
            f.optSelected = i.selected;
            t.disabled = !0;
            f.optDisabled = !i.disabled;
            n = u.createElement("input");
            n.value = "t";
            n.type = "radio";
            f.radioValue = n.value === "t"
        }();
    tt = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return l(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (n && e !== 3 && e !== 8 && e !== 2) {
                if (typeof n.getAttribute === d) return i.prop(n, t, r);
                if (e === 1 && i.isXMLDoc(n) || (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? su : oe)), r !== undefined)
                    if (r === null) i.removeAttr(n, t);
                    else return u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : (n.setAttribute(t, r + ""), r);
                else return u && "get" in u && (f = u.get(n, t)) !== null ? f : (f = i.find.attr(n, t), f == null ? undefined : f)
            }
        },
        removeAttr: function(n, t) {
            var r, u, e = 0,
                f = t && t.match(c);
            if (f && n.nodeType === 1)
                while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) && (n[u] = !1), n.removeAttribute(r)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!f.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t
                    }
                }
            }
        }
    });
    su = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = tt[t] || i.find.attr;
        tt[t] = function(n, t, i) {
            var u, f;
            return i || (f = tt[t], tt[t] = u, u = r(n, t, i) != null ? t.toLowerCase() : null, tt[t] = f), u
        }
    });
    hu = /^(?:input|select|textarea|button)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return l(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, t, r) {
            var f, u, o, e = n.nodeType;
            if (n && e !== 3 && e !== 8 && e !== 2) return o = e !== 1 || !i.isXMLDoc(n), o && (t = i.propFix[t] || t, u = i.propHooks[t]), r !== undefined ? u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : n[t] = r : u && "get" in u && (f = u.get(n, t)) !== null ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    return n.hasAttribute("tabindex") || hu.test(n.nodeName) || n.href ? n.tabIndex : -1
                }
            }
        }
    });
    f.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    kt = /[\t\r\n\f]/g;
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, u, s, f, h = typeof n == "string" && n,
                e = 0,
                l = this.length;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (h)
                for (o = (n || "").match(c) || []; e < l; e++)
                    if (t = this[e], r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(kt, " ") : " "), r) {
                        for (s = 0; u = o[s++];) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                        f = i.trim(r);
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        removeClass: function(n) {
            var o, t, r, u, s, f, h = arguments.length === 0 || typeof n == "string" && n,
                e = 0,
                l = this.length;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (h)
                for (o = (n || "").match(c) || []; e < l; e++)
                    if (t = this[e], r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(kt, " ") : ""), r) {
                        for (s = 0; u = o[s++];)
                            while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                        f = n ? i.trim(r) : "";
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var u = typeof n;
            return typeof t == "boolean" && u === "string" ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function() {
                if (u === "string")
                    for (var t, e = 0, f = i(this), o = n.match(c) || []; t = o[e++];) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                else(u === d || u === "boolean") && (this.className && r.set(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : r.get(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(kt, " ").indexOf(i) >= 0) return !0;
            return !1
        }
    });
    cu = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                var u;
                this.nodeType === 1 && (u = f ? n.call(this, r, i(this).val()) : n, u == null ? u = "" : typeof u == "number" ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                    return n == null ? "" : n + ""
                })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, u, "value") !== undefined || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && (r = t.get(u, "value")) !== undefined) ? r : (r = u.value, typeof r == "string" ? r.replace(cu, "") : r == null ? "" : r) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return t != null ? t : i.trim(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var o, t, s = n.options, r = n.selectedIndex, u = n.type === "select-one" || r < 0, h = u ? null : [], c = u ? r + 1 : s.length, e = r < 0 ? c : u ? r : 0; e < c; e++)
                        if (t = s[e], (t.selected || e === r) && (f.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(), u) return o;
                            h.push(o)
                        }
                    return h
                },
                set: function(n, t) {
                    for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(r.value, e) >= 0) && (u = !0);
                    return u || (n.selectedIndex = -1), e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        };
        f.checkOn || (i.valHooks[this].get = function(n) {
            return n.getAttribute("value") === null ? "on" : n.value
        })
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    dt = i.now();
    gt = /\?/;
    i.parseJSON = function(n) {
        return JSON.parse(n + "")
    };
    i.parseXML = function(n) {
        var t, r;
        if (!n || typeof n != "string") return null;
        try {
            r = new DOMParser;
            t = r.parseFromString(n, "text/xml")
        } catch (u) {
            t = undefined
        }
        return (!t || t.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + n), t
    };
    var b, v, se = /#.*$/,
        lu = /([?&])_=[^&]*/,
        he = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        ce = /^(?:GET|HEAD)$/,
        le = /^\/\//,
        au = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        vu = {},
        li = {},
        yu = "*/".concat("*");
    try {
        v = location.href
    } catch (ge) {
        v = u.createElement("a");
        v.href = "";
        v = v.href
    }
    b = au.exec(v.toLowerCase()) || [];
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: v,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(b[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": yu,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ai(ai(n, i.ajaxSettings), t) : ai(i.ajaxSettings, n)
        },
        ajaxPrefilter: pu(vu),
        ajaxTransport: pu(li),
        ajax: function(n, t) {
            function w(n, t, h, c) {
                var v, it, b, y, w, l = t;
                e !== 2 && (e = 2, d && clearTimeout(d), s = undefined, k = c || "", u.readyState = n > 0 ? 4 : 0, v = n >= 200 && n < 300 || n === 304, h && (y = ae(r, u, h)), y = ve(r, y, u, v), v ? (r.ifModified && (w = u.getResponseHeader("Last-Modified"), w && (i.lastModified[f] = w), w = u.getResponseHeader("etag"), w && (i.etag[f] = w)), n === 204 || r.type === "HEAD" ? l = "nocontent" : n === 304 ? l = "notmodified" : (l = y.state, it = y.data, b = y.error, v = !b)) : (b = l, (n || !l) && (l = "error", n < 0 && (n = 0))), u.status = n, u.statusText = (t || l) + "", v ? nt.resolveWith(o, [it, l, u]) : nt.rejectWith(o, [u, l, b]), u.statusCode(p), p = undefined, a && g.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : b]), tt.fireWith(o, [u, l]), a && (g.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop")))
            }
            typeof n == "object" && (t = n, n = undefined);
            t = t || {};
            var s, f, k, y, d, h, a, l, r = i.ajaxSetup({}, t),
                o = r.context || r,
                g = r.context && (o.nodeType || o.jquery) ? i(o) : i.event,
                nt = i.Deferred(),
                tt = i.Callbacks("once memory"),
                p = r.statusCode || {},
                it = {},
                rt = {},
                e = 0,
                ut = "canceled",
                u = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (e === 2) {
                            if (!y)
                                for (y = {}; t = he.exec(k);) y[t[1].toLowerCase()] = t[2];
                            t = y[n.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return e === 2 ? k : null
                    },
                    setRequestHeader: function(n, t) {
                        var i = n.toLowerCase();
                        return e || (n = rt[i] = rt[i] || n, it[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return e || (r.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (e < 2)
                                for (t in n) p[t] = [p[t], n[t]];
                            else u.always(n[u.status]);
                        return this
                    },
                    abort: function(n) {
                        var t = n || ut;
                        return s && s.abort(t), w(0, t), this
                    }
                };
            if (nt.promise(u).complete = tt.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || v) + "").replace(se, "").replace(le, b[1] + "//"), r.type = t.method || t.type || r.method || r.type, r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(c) || [""], r.crossDomain == null && (h = au.exec(r.url.toLowerCase()), r.crossDomain = !!(h && (h[1] !== b[1] || h[2] !== b[2] || (h[3] || (h[1] === "http:" ? "80" : "443")) !== (b[3] || (b[1] === "http:" ? "80" : "443"))))), r.data && r.processData && typeof r.data != "string" && (r.data = i.param(r.data, r.traditional)), wu(vu, r, t, u), e === 2) return u;
            a = r.global;
            a && i.active++ == 0 && i.event.trigger("ajaxStart");
            r.type = r.type.toUpperCase();
            r.hasContent = !ce.test(r.type);
            f = r.url;
            r.hasContent || (r.data && (f = r.url += (gt.test(f) ? "&" : "?") + r.data, delete r.data), r.cache === !1 && (r.url = lu.test(f) ? f.replace(lu, "$1_=" + dt++) : f + (gt.test(f) ? "&" : "?") + "_=" + dt++));
            r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]), i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
            (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
            u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + (r.dataTypes[0] !== "*" ? ", " + yu + "; q=0.01" : "") : r.accepts["*"]);
            for (l in r.headers) u.setRequestHeader(l, r.headers[l]);
            if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || e === 2)) return u.abort();
            ut = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) u[l](r[l]);
            if (s = wu(li, r, t, u), s) {
                u.readyState = 1;
                a && g.trigger("ajaxSend", [u, r]);
                r.async && r.timeout > 0 && (d = setTimeout(function() {
                    u.abort("timeout")
                }, r.timeout));
                try {
                    e = 1;
                    s.send(it, w)
                } catch (ft) {
                    if (e < 2) w(-1, ft);
                    else throw ft;
                }
            } else w(-1, "No Transport");
            return u
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, undefined, t, "script")
        }
    });
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r = undefined), i.ajax({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            })
        }
    });
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    });
    i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    };
    i.fn.extend({
        wrapAll: function(n) {
            var t;
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapAll(n.call(this, t))
            }) : (this[0] && (t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                return n
            }).append(this)), this)
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    i.expr.filters.hidden = function(n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0
    };
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    };
    var ye = /%20/g,
        pe = /\[\]$/,
        bu = /\r?\n/g,
        we = /^(?:submit|button|image|reset|file)$/i,
        be = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [],
            f = function(n, t) {
                t = i.isFunction(t) ? t() : t == null ? "" : t;
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            };
        if (t === undefined && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            f(this.name, this.value)
        });
        else
            for (r in n) vi(r, n[r], t, f);
        return u.join("&").replace(ye, "+")
    };
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && be.test(this.nodeName) && !we.test(n) && (this.checked || !er.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(bu, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(bu, "\r\n")
                }
            }).get()
        }
    });
    i.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (n) {}
    };
    var ke = 0,
        ni = {},
        de = {
            0: 200,
            1223: 204
        },
        ft = i.ajaxSettings.xhr();
    if (n.ActiveXObject) i(n).on("unload", function() {
        for (var n in ni) ni[n]()
    });
    return f.cors = !!ft && "withCredentials" in ft, f.ajax = ft = !!ft, i.ajaxTransport(function(n) {
        var t;
        if (f.cors || ft && !n.crossDomain) return {
            send: function(i, r) {
                var f, u = n.xhr(),
                    e = ++ke;
                if (u.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
                    for (f in n.xhrFields) u[f] = n.xhrFields[f];
                n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType);
                n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (f in i) u.setRequestHeader(f, i[f]);
                t = function(n) {
                    return function() {
                        t && (delete ni[e], t = u.onload = u.onerror = null, n === "abort" ? u.abort() : n === "error" ? r(u.status, u.statusText) : r(de[u.status] || u.status, u.statusText, typeof u.responseText == "string" ? {
                            text: u.responseText
                        } : undefined, u.getAllResponseHeaders()))
                    }
                };
                u.onload = t();
                u.onerror = t("error");
                t = ni[e] = t("abort");
                try {
                    u.send(n.hasContent && n.data || null)
                } catch (o) {
                    if (t) throw o;
                }
            },
            abort: function() {
                t && t()
            }
        }
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function(n) {
        n.cache === undefined && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var r, t;
            return {
                send: function(f, e) {
                    r = i("<script>").prop({
                        async: !0,
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", t = function(n) {
                        r.remove();
                        t = null;
                        n && e(n.type === "error" ? 404 : 200, n.type)
                    });
                    u.head.appendChild(r[0])
                },
                abort: function() {
                    t && t()
                }
            }
        }
    }), yi = [], ti = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = yi.pop() || i.expando + "_" + dt++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, o, e, s = t.jsonp !== !1 && (ti.test(t.url) ? "url" : typeof t.data == "string" && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
        if (s || t.dataTypes[0] === "jsonp") return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ti, "$1" + f) : t.jsonp !== !1 && (t.url += (gt.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
            return e || i.error(f + " was not called"), e[0]
        }, t.dataTypes[0] = "json", o = n[f], n[f] = function() {
            e = arguments
        }, u.always(function() {
            n[f] = o;
            t[f] && (t.jsonpCallback = r.jsonpCallback, yi.push(f));
            e && i.isFunction(o) && o(e[0]);
            e = o = undefined
        }), "script"
    }), i.parseHTML = function(n, t, r) {
        if (!n || typeof n != "string") return null;
        typeof t == "boolean" && (r = t, t = !1);
        t = t || u;
        var f = gi.exec(n),
            e = !r && [];
        return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
    }, pi = i.fn.load, i.fn.load = function(n, t, r) {
        if (typeof n != "string" && pi) return pi.apply(this, arguments);
        var u, o, s, f = this,
            e = n.indexOf(" ");
        return e >= 0 && (u = i.trim(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = undefined) : t && typeof t == "object" && (o = "POST"), f.length > 0 && i.ajax({
            url: n,
            type: o,
            dataType: "html",
            data: t
        }).done(function(n) {
            s = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).complete(r && function(n, t) {
            f.each(r, s || [n.responseText, t, n])
        }), this
    }, i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }, wi = n.document.documentElement, i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"),
                a = i(n),
                f = {};
            l === "static" && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = (l === "absolute" || l === "fixed") && (s + c).indexOf("auto") > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, u));
            t.top != null && (f.top = t.top - u.top + h);
            t.left != null && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    }, i.fn.extend({
        offset: function(n) {
            if (arguments.length) return n === undefined ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var r, f, t = this[0],
                u = {
                    top: 0,
                    left: 0
                },
                e = t && t.ownerDocument;
            if (e) return (r = e.documentElement, !i.contains(r, t)) ? u : (typeof t.getBoundingClientRect !== d && (u = t.getBoundingClientRect()), f = ku(e), {
                top: u.top + f.pageYOffset - r.clientTop,
                left: u.left + f.pageXOffset - r.clientLeft
            })
        },
        position: function() {
            if (this[0]) {
                var n, r, u = this[0],
                    t = {
                        top: 0,
                        left: 0
                    };
                return i.css(u, "position") === "fixed" ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || wi; n && !i.nodeName(n, "html") && i.css(n, "position") === "static";) n = n.offsetParent;
                return n || wi
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var u = "pageYOffset" === r;
        i.fn[t] = function(i) {
            return l(this, function(t, i, f) {
                var e = ku(t);
                if (f === undefined) return e ? e[r] : t[i];
                e ? e.scrollTo(u ? n.pageXOffset : f, u ? f : n.pageYOffset) : t[i] = f
            }, t, i, arguments.length, null)
        }
    }), i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = br(f.pixelPosition, function(n, r) {
            if (r) return r = rt(n, t), ci.test(r) ? i(n).position()[t] + "px" : r
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(u, f) {
                var e = arguments.length && (r || typeof u != "boolean"),
                    o = r || (u === !0 || f === !0 ? "margin" : "border");
                return l(this, function(t, r, u) {
                    var f;
                    return i.isWindow(t) ? t.document.documentElement["client" + n] : t.nodeType === 9 ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : u === undefined ? i.css(t, r, o) : i.style(t, r, u, o)
                }, t, e ? u : undefined, e, null)
            }
        })
    }), i.fn.size = function() {
        return this.length
    }, i.fn.andSelf = i.fn.addBack, typeof define == "function" && define.amd && define("jquery", [], function() {
        return i
    }), du = n.jQuery, gu = n.$, i.noConflict = function(t) {
        return n.$ === i && (n.$ = gu), t && n.jQuery === i && (n.jQuery = du), i
    }, typeof t === d && (n.jQuery = n.$ = i), i
});

(function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
})(function(n) {
    n.extend(n.fn, {
        validate: function(t) {
            if (!this.length) {
                t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
                return
            }
            var i = n.data(this[0], "validator");
            if (i) return i;
            if (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit) {
                this.on("click.validate", ":submit", function(t) {
                    i.settings.submitHandler && (i.submitButton = t.target);
                    n(this).hasClass("cancel") && (i.cancelSubmit = !0);
                    n(this).attr("formnovalidate") !== undefined && (i.cancelSubmit = !0)
                });
                this.on("submit.validate", function(t) {
                    function r() {
                        var u, r;
                        return i.settings.submitHandler ? (i.submitButton && (u = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)), r = i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && u.remove(), r !== undefined) ? r : !1 : !0
                    }
                    return (i.settings.debug && t.preventDefault(), i.cancelSubmit) ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
                })
            }
            return i
        },
        valid: function() {
            var t, i, r;
            return n(this[0]).is("form") ? t = this.validate().form() : (r = [], t = !0, i = n(this[0].form).validate(), this.each(function() {
                t = i.element(this) && t;
                r = r.concat(i.errorList)
            }), i.errorList = r), t
        },
        rules: function(t, i) {
            var r = this[0],
                e, s, f, u, o, h;
            if (t) {
                e = n.data(r.form, "validator").settings;
                s = e.rules;
                f = n.validator.staticRules(r);
                switch (t) {
                    case "add":
                        n.extend(f, n.validator.normalizeRule(i));
                        delete f.messages;
                        s[r.name] = f;
                        i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                        break;
                    case "remove":
                        return i ? (h = {}, n.each(i.split(/\s/), function(t, i) {
                            h[i] = f[i];
                            delete f[i];
                            i === "required" && n(r).removeAttr("aria-required")
                        }), h) : (delete s[r.name], f)
                }
            }
            return u = n.validator.normalizeRules(n.extend({}, n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r), u.required && (o = u.required, delete u.required, u = n.extend({
                required: o
            }, u), n(r).attr("aria-required", "true")), u.remote && (o = u.remote, delete u.remote, u = n.extend(u, {
                remote: o
            })), u
        }
    });
    n.extend(n.expr[":"], {
        blank: function(t) {
            return !n.trim("" + n(t).val())
        },
        filled: function(t) {
            return !!n.trim("" + n(t).val())
        },
        unchecked: function(t) {
            return !n(t).prop("checked")
        }
    });
    n.validator = function(t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t);
        this.currentForm = i;
        this.init()
    };
    n.validator.format = function(t, i) {
        return arguments.length === 1 ? function() {
            var i = n.makeArray(arguments);
            return i.unshift(t), n.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), n.each(i, function(n, i) {
            t = t.replace(new RegExp("\\{" + n + "\\}", "g"), function() {
                return i
            })
        }), t)
    };
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(n) {
                this.lastActive = n;
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(n)))
            },
            onfocusout: function(n) {
                !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function(t, i) {
                (i.which !== 9 || this.elementValue(t) !== "") && n.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) === -1 && (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function(n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function i(t) {
                    var r = n.data(this.form, "validator"),
                        u = "on" + t.type.replace(/^validate/, ""),
                        i = r.settings;
                    i[u] && !n(this).is(i.ignore) && i[u].call(r, this, t)
                }
                this.labelContainer = n(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var r = this.groups = {},
                    t;
                n.each(this.settings.groups, function(t, i) {
                    typeof i == "string" && (i = i.split(/\s/));
                    n.each(i, function(n, i) {
                        r[i] = t
                    })
                });
                t = this.settings.rules;
                n.each(t, function(i, r) {
                    t[i] = n.validator.normalizeRule(r)
                });
                n(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", i).on("click.validate", "select, option, [type='radio'], [type='checkbox']", i);
                if (this.settings.invalidHandler) n(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                n(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
                return this.valid()
            },
            element: function(t) {
                var u = this.clean(t),
                    i = this.validationTargetFor(u),
                    r = !0;
                return this.lastElement = i, i === undefined ? delete this.invalid[u.name] : (this.prepareElement(i), this.currentElements = n(i), r = this.check(i) !== !1, r ? delete this.invalid[i.name] : this.invalid[i.name] = !0), n(t).attr("aria-invalid", !r), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r
            },
            showErrors: function(t) {
                if (t) {
                    n.extend(this.errorMap, t);
                    this.errorList = [];
                    for (var i in t) this.errorList.push({
                        message: t[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = n.grep(this.successList, function(n) {
                        return !(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                n.fn.resetForm && n(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                var t, i = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight)
                    for (t = 0; i[t]; t++) this.settings.unhighlight.call(this, i[t], this.settings.errorClass, "");
                else i.removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(n) {
                var t = 0;
                for (var i in n) t++;
                return t
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(n) {
                n.not(this.containers).text("");
                this.addWrapper(n).hide()
            },
            valid: function() {
                return this.size() === 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && n.grep(this.errorList, function(n) {
                    return n.element.name === t.name
                }).length === 1 && t
            },
            elements: function() {
                var t = this,
                    i = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    return (!this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(n(this).rules())) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function(t) {
                return n(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = n([]);
                this.toHide = n([]);
                this.currentElements = n([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(n) {
                this.reset();
                this.toHide = this.errorsFor(n)
            },
            elementValue: function(t) {
                var i, u = n(t),
                    r = t.type;
                return r === "radio" || r === "checkbox" ? this.findByName(t.name).filter(":checked").val() : r === "number" && typeof t.validity != "undefined" ? t.validity.badInput ? !1 : u.val() : (i = u.val(), typeof i == "string") ? i.replace(/\r/g, "") : i
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var r = n(t).rules(),
                    s = n.map(r, function(n, t) {
                        return t
                    }).length,
                    o = !1,
                    h = this.elementValue(t),
                    u, f, i;
                for (f in r) {
                    i = {
                        method: f,
                        parameters: r[f]
                    };
                    try {
                        if (u = n.validator.methods[f].call(this, h, t, i.parameters), u === "dependency-mismatch" && s === 1) {
                            o = !0;
                            continue
                        }
                        if (o = !1, u === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(t));
                            return
                        }
                        if (!u) return this.formatAndAdd(t, i), !1
                    } catch (e) {
                        this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.", e);
                        e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.");
                        throw e;
                    }
                }
                if (!o) return this.objectLength(r) && this.successList.push(t), !0
            },
            customDataMessage: function(t, i) {
                return n(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || n(t).data("msg")
            },
            customMessage: function(n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function() {
                for (var n = 0; n < arguments.length; n++)
                    if (arguments[n] !== undefined) return arguments[n];
                return undefined
            },
            defaultMessage: function(t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
            },
            formatAndAdd: function(t, i) {
                var r = this.defaultMessage(t, i.method),
                    u = /\$?\{(\d+)\}/g;
                typeof r == "function" ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters));
                this.errorList.push({
                    message: r,
                    element: t,
                    method: i.method
                });
                this.errorMap[t.name] = r;
                this.submitted[t.name] = r
            },
            addWrapper: function(n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
            },
            defaultShowErrors: function() {
                for (var i, t, n = 0; this.errorList[n]; n++) t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0, i = this.validElements(); i[n]; n++) this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return n(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var u, o, e, r = this.errorsFor(t),
                    s = this.idOrName(t),
                    f = n(t).attr("aria-describedby");
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("id", s + "-error").addClass(this.settings.errorClass).html(i || ""), u = r, this.settings.wrapper && (u = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(u) : this.settings.errorPlacement ? this.settings.errorPlacement(u, n(t)) : u.insertAfter(t), r.is("label") ? r.attr("for", s) : r.parents("label[for='" + s + "']").length === 0 && (e = r.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), f ? f.match(new RegExp("\\b" + e + "\\b")) || (f += " " + e) : f = e, n(t).attr("aria-describedby", f), o = this.groups[t.name], o && n.each(this.groups, function(t, i) {
                    i === o && n("[name='" + t + "']", this.currentForm).attr("aria-describedby", r.attr("id"))
                })));
                !i && this.settings.success && (r.text(""), typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r, t));
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var r = this.idOrName(t),
                    u = n(t).attr("aria-describedby"),
                    i = "label[for='" + r + "'], label[for='" + r + "'] *";
                return u && (i = i + ", #" + u.replace(/\s+/g, ", #")), this.errors().filter(i)
            },
            idOrName: function(n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)), n(t).not(this.settings.ignore)[0]
            },
            checkable: function(n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function(t) {
                return n(this.currentForm).find("[name='" + t + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return n("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            },
            dependTypes: {
                boolean: function(n) {
                    return n
                },
                string: function(t, i) {
                    return !!n(t, i.form).length
                },
                "function": function(n, t) {
                    return n(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(n) {
                this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--;
                this.pendingRequest < 0 && (this.pendingRequest = 0);
                delete this.pending[t.name];
                i && this.pendingRequest === 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && this.pendingRequest === 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            },
            destroy: function() {
                this.resetForm();
                n(this.currentForm).off(".validate").removeData("validator")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {},
                r = n(t).attr("class");
            return r && n.each(r.split(" "), function() {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }), i
        },
        normalizeAttributeRule: function(n, t, i, r) {
            /min|max/.test(i) && (t === null || /number|range|text/.test(t)) && (r = Number(r), isNaN(r) && (r = undefined));
            r || r === 0 ? n[i] = r : t === i && t !== "range" && (n[i] = !0)
        },
        attributeRules: function(t) {
            var r = {},
                f = n(t),
                e = t.getAttribute("type"),
                u, i;
            for (u in n.validator.methods) u === "required" ? (i = t.getAttribute(u), i === "" && (i = !0), i = !!i) : i = f.attr(u), this.normalizeAttributeRule(r, e, u, i);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
        },
        dataRules: function(t) {
            var r = {},
                f = n(t),
                e = t.getAttribute("type"),
                i, u;
            for (i in n.validator.methods) u = f.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(r, e, i, u);
            return r
        },
        staticRules: function(t) {
            var i = {},
                r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i
        },
        normalizeRules: function(t, i) {
            return n.each(t, function(r, u) {
                if (u === !1) {
                    delete t[r];
                    return
                }
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                        case "string":
                            f = !!n(u.depends, i.form).length;
                            break;
                        case "function":
                            f = u.depends.call(i, i)
                    }
                    f ? t[r] = u.param !== undefined ? u.param : !0 : delete t[r]
                }
            }), n.each(t, function(r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }), n.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }), n.each(["rangelength", "range"], function() {
                var i;
                t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : typeof t[this] == "string" && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
            }), n.validator.autoCreateRanges && (t.min != null && t.max != null && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength != null && t.maxlength != null && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function(t) {
            if (typeof t == "string") {
                var i = {};
                n.each(t.split(/\s/), function() {
                    i[this] = !0
                });
                t = i
            }
            return t
        },
        addMethod: function(t, i, r) {
            n.validator.methods[t] = i;
            n.validator.messages[t] = r !== undefined ? r : n.validator.messages[t];
            i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, r) {
                if (!this.depend(r, i)) return "dependency-mismatch";
                if (i.nodeName.toLowerCase() === "select") {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0
            },
            email: function(n, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n)
            },
            url: function(n, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(n)
            },
            date: function(n, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(n).toString())
            },
            dateISO: function(n, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(n)
            },
            number: function(n, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            },
            digits: function(n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            creditcard: function(n, t) {
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(n)) return !1;
                var f = 0,
                    i = 0,
                    u = !1,
                    r, e;
                if (n = n.replace(/\D/g, ""), n.length < 13 || n.length > 19) return !1;
                for (r = n.length - 1; r >= 0; r--) e = n.charAt(r), i = parseInt(e, 10), u && (i *= 2) > 9 && (i -= 9), f += i, u = !u;
                return f % 10 == 0
            },
            minlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u >= r
            },
            maxlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u <= r
            },
            rangelength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u >= r[0] && u <= r[1]
            },
            min: function(n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function(n, t, i) {
                return this.optional(t) || n <= i
            },
            range: function(n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            },
            equalTo: function(t, i, r) {
                var u = n(r);
                if (this.settings.onfocusout) u.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                    n(i).valid()
                });
                return t === u.val()
            },
            remote: function(t, i, r) {
                if (this.optional(i)) return "dependency-mismatch";
                var f = this.previousValue(i),
                    u, e;
                return (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = typeof r == "string" && {
                    url: r
                } || r, f.old === t) ? f.valid : (f.old = t, u = this, this.startRequest(i), e = {}, e[i.name] = t, n.ajax(n.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: e,
                    context: u.currentForm,
                    success: function(r) {
                        var o = r === !0 || r === "true",
                            s, e, h;
                        u.settings.messages[i.name].remote = f.originalMessage;
                        o ? (h = u.formSubmitted, u.prepareElement(i), u.formSubmitted = h, u.successList.push(i), delete u.invalid[i.name], u.showErrors()) : (s = {}, e = r || u.defaultMessage(i, "remote"), s[i.name] = f.message = n.isFunction(e) ? e(t) : e, u.invalid[i.name] = !0, u.showErrors(s));
                        f.valid = o;
                        u.stopRequest(i, o)
                    }
                }, r)), "pending")
            }
        }
    });
    var t = {},
        i;
    n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
        var u = n.port;
        n.mode === "abort" && (t[u] && t[u].abort(), t[u] = r)
    }) : (i = n.ajax, n.ajax = function(r) {
        var f = ("mode" in r ? r : n.ajaxSettings).mode,
            u = ("port" in r ? r : n.ajaxSettings).port;
        return f === "abort" ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments), t[u]) : i.apply(this, arguments)
    })
});

! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    var b = function() {
            if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
            var b;
            return function() {
                if (!b || !b.requirejs) {
                    b ? c = b : b = {};
                    var a, c, d;
                    ! function(b) {
                        function e(a, b) {
                            return u.call(a, b)
                        }

                        function f(a, b) {
                            var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"),
                                o = s.map,
                                p = o && o["*"] || {};
                            if (a && "." === a.charAt(0))
                                if (b) {
                                    for (n = n.slice(0, n.length - 1), a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.concat(a), k = 0; k < a.length; k += 1)
                                        if (m = a[k], "." === m) a.splice(k, 1), k -= 1;
                                        else if (".." === m) {
                                        if (1 === k && (".." === a[2] || ".." === a[0])) break;
                                        k > 0 && (a.splice(k - 1, 2), k -= 2)
                                    }
                                    a = a.join("/")
                                } else 0 === a.indexOf("./") && (a = a.substring(2));
                            if ((n || p) && o) {
                                for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                                    if (d = c.slice(0, k).join("/"), n)
                                        for (l = n.length; l > 0; l -= 1)
                                            if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                                                f = e, h = k;
                                                break
                                            }
                                    if (f) break;
                                    !i && p && p[d] && (i = p[d], j = k)
                                }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
                            }
                            return a
                        }

                        function g(a, c) {
                            return function() {
                                return n.apply(b, v.call(arguments, 0).concat([a, c]))
                            }
                        }

                        function h(a) {
                            return function(b) {
                                return f(b, a)
                            }
                        }

                        function i(a) {
                            return function(b) {
                                q[a] = b
                            }
                        }

                        function j(a) {
                            if (e(r, a)) {
                                var c = r[a];
                                delete r[a], t[a] = !0, m.apply(b, c)
                            }
                            if (!e(q, a) && !e(t, a)) throw new Error("No " + a);
                            return q[a]
                        }

                        function k(a) {
                            var b, c = a ? a.indexOf("!") : -1;
                            return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
                        }

                        function l(a) {
                            return function() {
                                return s && s.config && s.config[a] || {}
                            }
                        }
                        var m, n, o, p, q = {},
                            r = {},
                            s = {},
                            t = {},
                            u = Object.prototype.hasOwnProperty,
                            v = [].slice,
                            w = /\.js$/;
                        o = function(a, b) {
                            var c, d = k(a),
                                e = d[0];
                            return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
                                f: e ? e + "!" + a : a,
                                n: a,
                                pr: e,
                                p: c
                            }
                        }, p = {
                            require: function(a) {
                                return g(a)
                            },
                            exports: function(a) {
                                var b = q[a];
                                return "undefined" != typeof b ? b : q[a] = {}
                            },
                            module: function(a) {
                                return {
                                    id: a,
                                    uri: "",
                                    exports: q[a],
                                    config: l(a)
                                }
                            }
                        }, m = function(a, c, d, f) {
                            var h, k, l, m, n, s, u = [],
                                v = typeof d;
                            if (f = f || a, "undefined" === v || "function" === v) {
                                for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1)
                                    if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a);
                                    else if ("exports" === k) u[n] = p.exports(a), s = !0;
                                else if ("module" === k) h = u[n] = p.module(a);
                                else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);
                                else {
                                    if (!m.p) throw new Error(a + " missing " + k);
                                    m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k]
                                }
                                l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l))
                            } else a && (q[a] = d)
                        }, a = c = n = function(a, c, d, e, f) {
                            if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f);
                            if (!a.splice) {
                                if (s = a, s.deps && n(s.deps, s.callback), !c) return;
                                c.splice ? (a = c, c = d, d = null) : a = b
                            }
                            return c = c || function() {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function() {
                                m(b, a, c, d)
                            }, 4), n
                        }, n.config = function(a) {
                            return n(a)
                        }, a._defined = q, d = function(a, b, c) {
                            b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c])
                        }, d.amd = {
                            jQuery: !0
                        }
                    }(), b.requirejs = a, b.require = c, b.define = d
                }
            }(), b.define("almond", function() {}), b.define("jquery", [], function() {
                var b = a || $;
                return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b
            }), b.define("select2/utils", ["jquery"], function(a) {
                function b(a) {
                    var b = a.prototype,
                        c = [];
                    for (var d in b) {
                        var e = b[d];
                        "function" == typeof e && "constructor" !== d && c.push(d)
                    }
                    return c
                }
                var c = {};
                c.Extend = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    var d = {}.hasOwnProperty;
                    for (var e in b) d.call(b, e) && (a[e] = b[e]);
                    return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                }, c.Decorate = function(a, c) {
                    function d() {
                        var b = Array.prototype.unshift,
                            d = c.prototype.constructor.length,
                            e = a.prototype.constructor;
                        d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments)
                    }

                    function e() {
                        this.constructor = d
                    }
                    var f = b(c),
                        g = b(a);
                    c.displayName = a.displayName, d.prototype = new e;
                    for (var h = 0; h < g.length; h++) {
                        var i = g[h];
                        d.prototype[i] = a.prototype[i]
                    }
                    for (var j = (function(a) {
                            var b = function() {};
                            a in d.prototype && (b = d.prototype[a]);
                            var e = c.prototype[a];
                            return function() {
                                var a = Array.prototype.unshift;
                                return a.call(arguments, b), e.apply(this, arguments)
                            }
                        }), k = 0; k < f.length; k++) {
                        var l = f[k];
                        d.prototype[l] = j(l)
                    }
                    return d
                };
                var d = function() {
                    this.listeners = {}
                };
                return d.prototype.on = function(a, b) {
                    this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b]
                }, d.prototype.trigger = function(a) {
                    var b = Array.prototype.slice;
                    this.listeners = this.listeners || {}, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                }, d.prototype.invoke = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++) a[c].apply(this, b)
                }, c.Observable = d, c.generateChars = function(a) {
                    for (var b = "", c = 0; a > c; c++) {
                        var d = Math.floor(36 * Math.random());
                        b += d.toString(36)
                    }
                    return b
                }, c.bind = function(a, b) {
                    return function() {
                        a.apply(b, arguments)
                    }
                }, c._convertData = function(a) {
                    for (var b in a) {
                        var c = b.split("-"),
                            d = a;
                        if (1 !== c.length) {
                            for (var e = 0; e < c.length; e++) {
                                var f = c[e];
                                f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f]
                            }
                            delete a[b]
                        }
                    }
                    return a
                }, c.hasScroll = function(b, c) {
                    var d = a(c),
                        e = c.style.overflowX,
                        f = c.style.overflowY;
                    return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1
                }, c.escapeMarkup = function(a) {
                    var b = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function(a) {
                        return b[a]
                    })
                }, c.appendMany = function(b, c) {
                    if ("1.7" === a.fn.jquery.substr(0, 3)) {
                        var d = a();
                        a.map(c, function(a) {
                            d = d.add(a)
                        }), c = d
                    }
                    b.append(c)
                }, c
            }), b.define("select2/results", ["jquery", "./utils"], function(a, b) {
                function c(a, b, d) {
                    this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this)
                }
                return b.Extend(c, b.Observable), c.prototype.render = function() {
                    var b = a('<ul class="select2-results__options" role="tree"></ul>');
                    return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b
                }, c.prototype.clear = function() {
                    this.$results.empty()
                }, c.prototype.displayMessage = function(b) {
                    var c = this.options.get("escapeMarkup");
                    this.clear(), this.hideLoading();
                    var d = a('<li role="treeitem" class="select2-results__option"></li>'),
                        e = this.options.get("translations").get(b.message);
                    d.append(c(e(b.args))), this.$results.append(d)
                }, c.prototype.append = function(a) {
                    this.hideLoading();
                    var b = [];
                    if (null == a.results || 0 === a.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    }));
                    a.results = this.sort(a.results);
                    for (var c = 0; c < a.results.length; c++) {
                        var d = a.results[c],
                            e = this.option(d);
                        b.push(e)
                    }
                    this.$results.append(b)
                }, c.prototype.position = function(a, b) {
                    var c = b.find(".select2-results");
                    c.append(a)
                }, c.prototype.sort = function(a) {
                    var b = this.options.get("sorter");
                    return b(a)
                }, c.prototype.setClasses = function() {
                    var b = this;
                    this.data.current(function(c) {
                        var d = a.map(c, function(a) {
                                return a.id.toString()
                            }),
                            e = b.$results.find(".select2-results__option[aria-selected]");
                        e.each(function() {
                            var b = a(this),
                                c = a.data(this, "data"),
                                e = "" + c.id;
                            null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
                        });
                        var f = e.filter("[aria-selected=true]");
                        f.length > 0 ? f.first().trigger("mouseenter") : e.first().trigger("mouseenter")
                    })
                }, c.prototype.showLoading = function(a) {
                    this.hideLoading();
                    var b = this.options.get("translations").get("searching"),
                        c = {
                            disabled: !0,
                            loading: !0,
                            text: b(a)
                        },
                        d = this.option(c);
                    d.className += " loading-results", this.$results.prepend(d)
                }, c.prototype.hideLoading = function() {
                    this.$results.find(".loading-results").remove()
                }, c.prototype.option = function(b) {
                    var c = document.createElement("li");
                    c.className = "select2-results__option";
                    var d = {
                        role: "treeitem",
                        "aria-selected": "false"
                    };
                    b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);
                    for (var e in d) {
                        var f = d[e];
                        c.setAttribute(e, f)
                    }
                    if (b.children) {
                        var g = a(c),
                            h = document.createElement("strong");
                        h.className = "select2-results__group"; {
                            a(h)
                        }
                        this.template(b, h);
                        for (var i = [], j = 0; j < b.children.length; j++) {
                            var k = b.children[j],
                                l = this.option(k);
                            i.push(l)
                        }
                        var m = a("<ul></ul>", {
                            "class": "select2-results__options select2-results__options--nested"
                        });
                        m.append(i), g.append(h), g.append(m)
                    } else this.template(b, c);
                    return a.data(c, "data", b), c
                }, c.prototype.bind = function(b) {
                    var c = this,
                        d = b.id + "-results";
                    this.$results.attr("id", d), b.on("results:all", function(a) {
                        c.clear(), c.append(a.data), b.isOpen() && c.setClasses()
                    }), b.on("results:append", function(a) {
                        c.append(a.data), b.isOpen() && c.setClasses()
                    }), b.on("query", function(a) {
                        c.showLoading(a)
                    }), b.on("select", function() {
                        b.isOpen() && c.setClasses()
                    }), b.on("unselect", function() {
                        b.isOpen() && c.setClasses()
                    }), b.on("open", function() {
                        c.$results.attr("aria-expanded", "true"), c.$results.attr("aria-hidden", "false"), c.setClasses(), c.ensureHighlightVisible()
                    }), b.on("close", function() {
                        c.$results.attr("aria-expanded", "false"), c.$results.attr("aria-hidden", "true"), c.$results.removeAttr("aria-activedescendant")
                    }), b.on("results:toggle", function() {
                        var a = c.getHighlightedResults();
                        0 !== a.length && a.trigger("mouseup")
                    }), b.on("results:select", function() {
                        var a = c.getHighlightedResults();
                        if (0 !== a.length) {
                            var b = a.data("data");
                            "true" == a.attr("aria-selected") ? c.trigger("close") : c.trigger("select", {
                                data: b
                            })
                        }
                    }), b.on("results:previous", function() {
                        var a = c.getHighlightedResults(),
                            b = c.$results.find("[aria-selected]"),
                            d = b.index(a);
                        if (0 !== d) {
                            var e = d - 1;
                            0 === a.length && (e = 0);
                            var f = b.eq(e);
                            f.trigger("mouseenter");
                            var g = c.$results.offset().top,
                                h = f.offset().top,
                                i = c.$results.scrollTop() + (h - g);
                            0 === e ? c.$results.scrollTop(0) : 0 > h - g && c.$results.scrollTop(i)
                        }
                    }), b.on("results:next", function() {
                        var a = c.getHighlightedResults(),
                            b = c.$results.find("[aria-selected]"),
                            d = b.index(a),
                            e = d + 1;
                        if (!(e >= b.length)) {
                            var f = b.eq(e);
                            f.trigger("mouseenter");
                            var g = c.$results.offset().top + c.$results.outerHeight(!1),
                                h = f.offset().top + f.outerHeight(!1),
                                i = c.$results.scrollTop() + h - g;
                            0 === e ? c.$results.scrollTop(0) : h > g && c.$results.scrollTop(i)
                        }
                    }), b.on("results:focus", function(a) {
                        a.element.addClass("select2-results__option--highlighted")
                    }), b.on("results:message", function(a) {
                        c.displayMessage(a)
                    }), a.fn.mousewheel && this.$results.on("mousewheel", function(a) {
                        var b = c.$results.scrollTop(),
                            d = c.$results.get(0).scrollHeight - c.$results.scrollTop() + a.deltaY,
                            e = a.deltaY > 0 && b - a.deltaY <= 0,
                            f = a.deltaY < 0 && d <= c.$results.height();
                        e ? (c.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (c.$results.scrollTop(c.$results.get(0).scrollHeight - c.$results.height()), a.preventDefault(), a.stopPropagation())
                    }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(b) {
                        var d = a(this),
                            e = d.data("data");
                        return "true" === d.attr("aria-selected") ? void(c.options.get("multiple") ? c.trigger("unselect", {
                            originalEvent: b,
                            data: e
                        }) : c.trigger("close")) : void c.trigger("select", {
                            originalEvent: b,
                            data: e
                        })
                    }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function() {
                        var b = a(this).data("data");
                        c.getHighlightedResults().removeClass("select2-results__option--highlighted"), c.trigger("results:focus", {
                            data: b,
                            element: a(this)
                        })
                    })
                }, c.prototype.getHighlightedResults = function() {
                    var a = this.$results.find(".select2-results__option--highlighted");
                    return a
                }, c.prototype.destroy = function() {
                    this.$results.remove()
                }, c.prototype.ensureHighlightVisible = function() {
                    var a = this.getHighlightedResults();
                    if (0 !== a.length) {
                        var b = this.$results.find("[aria-selected]"),
                            c = b.index(a),
                            d = this.$results.offset().top,
                            e = a.offset().top,
                            f = this.$results.scrollTop() + (e - d),
                            g = e - d;
                        f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f)
                    }
                }, c.prototype.template = function(b, c) {
                    var d = this.options.get("templateResult"),
                        e = this.options.get("escapeMarkup"),
                        f = d(b);
                    null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f)
                }, c
            }), b.define("select2/keys", [], function() {
                var a = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                };
                return a
            }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(a, b, c) {
                function d(a, b) {
                    this.$element = a, this.options = b, d.__super__.constructor.call(this)
                }
                return b.Extend(d, b.Observable), d.prototype.render = function() {
                    var b = a('<span class="select2-selection" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"></span>');
                    return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b
                }, d.prototype.bind = function(a) {
                    var b = this,
                        d = (a.id + "-container", a.id + "-results");
                    this.container = a, this.$selection.on("focus", function(a) {
                        b.trigger("focus", a)
                    }), this.$selection.on("blur", function(a) {
                        b.trigger("blur", a)
                    }), this.$selection.on("keydown", function(a) {
                        b.trigger("keypress", a), a.which === c.SPACE && a.preventDefault()
                    }), a.on("results:focus", function(a) {
                        b.$selection.attr("aria-activedescendant", a.data._resultId)
                    }), a.on("selection:update", function(a) {
                        b.update(a.data)
                    }), a.on("open", function() {
                        b.$selection.attr("aria-expanded", "true"), b.$selection.attr("aria-owns", d), b._attachCloseHandler(a)
                    }), a.on("close", function() {
                        b.$selection.attr("aria-expanded", "false"), b.$selection.removeAttr("aria-activedescendant"), b.$selection.removeAttr("aria-owns"), b.$selection.focus(), b._detachCloseHandler(a)
                    }), a.on("enable", function() {
                        b.$selection.attr("tabindex", b._tabindex)
                    }), a.on("disable", function() {
                        b.$selection.attr("tabindex", "-1")
                    })
                }, d.prototype._attachCloseHandler = function(b) {
                    a(document.body).on("mousedown.select2." + b.id, function(b) {
                        var c = a(b.target),
                            d = c.closest(".select2"),
                            e = a(".select2.select2-container--open");
                        e.each(function() {
                            var b = a(this);
                            if (this != d[0]) {
                                var c = b.data("element");
                                c.select2("close")
                            }
                        })
                    })
                }, d.prototype._detachCloseHandler = function(b) {
                    a(document.body).off("mousedown.select2." + b.id)
                }, d.prototype.position = function(a, b) {
                    var c = b.find(".selection");
                    c.append(a)
                }, d.prototype.destroy = function() {
                    this._detachCloseHandler(this.container)
                }, d.prototype.update = function() {
                    throw new Error("The `update` method must be defined in child classes.")
                }, d
            }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(a, b, c) {
                function d() {
                    d.__super__.constructor.apply(this, arguments)
                }
                return c.Extend(d, b), d.prototype.render = function() {
                    var a = d.__super__.render.call(this);
                    return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a
                }, d.prototype.bind = function(a) {
                    var b = this;
                    d.__super__.bind.apply(this, arguments);
                    var c = a.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", c), this.$selection.attr("aria-labelledby", c), this.$selection.on("mousedown", function(a) {
                        1 === a.which && b.trigger("toggle", {
                            originalEvent: a
                        })
                    }), this.$selection.on("focus", function() {}), this.$selection.on("blur", function() {}), a.on("selection:update", function(a) {
                        b.update(a.data)
                    })
                }, d.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, d.prototype.display = function(a) {
                    var b = this.options.get("templateSelection"),
                        c = this.options.get("escapeMarkup");
                    return c(b(a))
                }, d.prototype.selectionContainer = function() {
                    return a("<span></span>")
                }, d.prototype.update = function(a) {
                    if (0 === a.length) return void this.clear();
                    var b = a[0],
                        c = this.display(b),
                        d = this.$selection.find(".select2-selection__rendered");
                    d.empty().append(c), d.prop("title", b.title || b.text)
                }, d
            }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(a, b, c) {
                function d() {
                    d.__super__.constructor.apply(this, arguments)
                }
                return c.Extend(d, b), d.prototype.render = function() {
                    var a = d.__super__.render.call(this);
                    return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a
                }, d.prototype.bind = function() {
                    var b = this;
                    d.__super__.bind.apply(this, arguments), this.$selection.on("click", function(a) {
                        b.trigger("toggle", {
                            originalEvent: a
                        })
                    }), this.$selection.on("click", ".select2-selection__choice__remove", function(c) {
                        var d = a(this),
                            e = d.parent(),
                            f = e.data("data");
                        b.trigger("unselect", {
                            originalEvent: c,
                            data: f
                        })
                    })
                }, d.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, d.prototype.display = function(a) {
                    var b = this.options.get("templateSelection"),
                        c = this.options.get("escapeMarkup");
                    return c(b(a))
                }, d.prototype.selectionContainer = function() {
                    var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                    return b
                }, d.prototype.update = function(a) {
                    if (this.clear(), 0 !== a.length) {
                        for (var b = [], d = 0; d < a.length; d++) {
                            var e = a[d],
                                f = this.display(e),
                                g = this.selectionContainer();
                            g.append(f), g.prop("title", e.title || e.text), g.data("data", e), b.push(g)
                        }
                        var h = this.$selection.find(".select2-selection__rendered");
                        c.appendMany(h, b)
                    }
                }, d
            }), b.define("select2/selection/placeholder", ["../utils"], function() {
                function a(a, b, c) {
                    this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c)
                }
                return a.prototype.normalizePlaceholder = function(a, b) {
                    return "string" == typeof b && (b = {
                        id: "",
                        text: b
                    }), b
                }, a.prototype.createPlaceholder = function(a, b) {
                    var c = this.selectionContainer();
                    return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c
                }, a.prototype.update = function(a, b) {
                    var c = 1 == b.length && b[0].id != this.placeholder.id,
                        d = b.length > 1;
                    if (d || c) return a.call(this, b);
                    this.clear();
                    var e = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(e)
                }, a
            }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function(a, b) {
                function c() {}
                return c.prototype.bind = function(a, b, c) {
                    var d = this;
                    a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(a) {
                        d._handleClear(a)
                    }), b.on("keypress", function(a) {
                        d._handleKeyboardClear(a, b)
                    })
                }, c.prototype._handleClear = function(a, b) {
                    if (!this.options.get("disabled")) {
                        var c = this.$selection.find(".select2-selection__clear");
                        if (0 !== c.length) {
                            b.stopPropagation();
                            for (var d = c.data("data"), e = 0; e < d.length; e++) {
                                var f = {
                                    data: d[e]
                                };
                                if (this.trigger("unselect", f), f.prevented) return
                            }
                            this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle")
                        }
                    }
                }, c.prototype._handleKeyboardClear = function(a, c, d) {
                    d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c)
                }, c.prototype.update = function(b, c) {
                    if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
                        var d = a('<span class="select2-selection__clear">&times;</span>');
                        d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d)
                    }
                }, c
            }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(a, b, c) {
                function d(a, b, c) {
                    a.call(this, b, c)
                }
                return d.prototype.render = function(b) {
                    var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></li>');
                    this.$searchContainer = c, this.$search = c.find("input");
                    var d = b.call(this);
                    return d
                }, d.prototype.bind = function(a, b, d) {
                    var e = this;
                    a.call(this, b, d), b.on("open", function() {
                        e.$search.attr("tabindex", 0), e.$search.focus()
                    }), b.on("close", function() {
                        e.$search.attr("tabindex", -1), e.$search.val(""), e.$search.focus()
                    }), b.on("enable", function() {
                        e.$search.prop("disabled", !1)
                    }), b.on("disable", function() {
                        e.$search.prop("disabled", !0)
                    }), this.$selection.on("focusin", ".select2-search--inline", function(a) {
                        e.trigger("focus", a)
                    }), this.$selection.on("focusout", ".select2-search--inline", function(a) {
                        e.trigger("blur", a)
                    }), this.$selection.on("keydown", ".select2-search--inline", function(a) {
                        a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
                        var b = a.which;
                        if (b === c.BACKSPACE && "" === e.$search.val()) {
                            var d = e.$searchContainer.prev(".select2-selection__choice");
                            if (d.length > 0) {
                                var f = d.data("data");
                                e.searchRemoveChoice(f), a.preventDefault()
                            }
                        }
                    }), this.$selection.on("input", ".select2-search--inline", function() {
                        e.$selection.off("keyup.search")
                    }), this.$selection.on("keyup.search input", ".select2-search--inline", function(a) {
                        e.handleSearch(a)
                    })
                }, d.prototype.createPlaceholder = function(a, b) {
                    this.$search.attr("placeholder", b.text)
                }, d.prototype.update = function(a, b) {
                    this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch()
                }, d.prototype.handleSearch = function() {
                    if (this.resizeSearch(), !this._keyUpPrevented) {
                        var a = this.$search.val();
                        this.trigger("query", {
                            term: a
                        })
                    }
                    this._keyUpPrevented = !1
                }, d.prototype.searchRemoveChoice = function(a, b) {
                    this.trigger("unselect", {
                        data: b
                    }), this.trigger("open"), this.$search.val(b.text + " ")
                }, d.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");
                    var a = "";
                    if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();
                    else {
                        var b = this.$search.val().length + 1;
                        a = .75 * b + "em"
                    }
                    this.$search.css("width", a)
                }, d
            }), b.define("select2/selection/eventRelay", ["jquery"], function(a) {
                function b() {}
                return b.prototype.bind = function(b, c, d) {
                    var e = this,
                        f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                        g = ["opening", "closing", "selecting", "unselecting"];
                    b.call(this, c, d), c.on("*", function(b, c) {
                        if (-1 !== a.inArray(b, f)) {
                            c = c || {};
                            var d = a.Event("select2:" + b, {
                                params: c
                            });
                            e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented())
                        }
                    })
                }, b
            }), b.define("select2/translation", ["jquery", "require"], function(a, b) {
                function c(a) {
                    this.dict = a || {}
                }
                return c.prototype.all = function() {
                    return this.dict
                }, c.prototype.get = function(a) {
                    return this.dict[a]
                }, c.prototype.extend = function(b) {
                    this.dict = a.extend({}, b.all(), this.dict)
                }, c._cache = {}, c.loadPath = function(a) {
                    if (!(a in c._cache)) {
                        var d = b(a);
                        c._cache[a] = d
                    }
                    return new c(c._cache[a])
                }, c
            }), b.define("select2/diacritics", [], function() {
                var a = {
                    "Ⓐ": "A",
                    "Ａ": "A",
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ầ": "A",
                    "Ấ": "A",
                    "Ẫ": "A",
                    "Ẩ": "A",
                    "Ã": "A",
                    "Ā": "A",
                    "Ă": "A",
                    "Ằ": "A",
                    "Ắ": "A",
                    "Ẵ": "A",
                    "Ẳ": "A",
                    "Ȧ": "A",
                    "Ǡ": "A",
                    "Ä": "A",
                    "Ǟ": "A",
                    "Ả": "A",
                    "Å": "A",
                    "Ǻ": "A",
                    "Ǎ": "A",
                    "Ȁ": "A",
                    "Ȃ": "A",
                    "Ạ": "A",
                    "Ậ": "A",
                    "Ặ": "A",
                    "Ḁ": "A",
                    "Ą": "A",
                    "Ⱥ": "A",
                    "Ɐ": "A",
                    "Ꜳ": "AA",
                    "Æ": "AE",
                    "Ǽ": "AE",
                    "Ǣ": "AE",
                    "Ꜵ": "AO",
                    "Ꜷ": "AU",
                    "Ꜹ": "AV",
                    "Ꜻ": "AV",
                    "Ꜽ": "AY",
                    "Ⓑ": "B",
                    "Ｂ": "B",
                    "Ḃ": "B",
                    "Ḅ": "B",
                    "Ḇ": "B",
                    "Ƀ": "B",
                    "Ƃ": "B",
                    "Ɓ": "B",
                    "Ⓒ": "C",
                    "Ｃ": "C",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "Ç": "C",
                    "Ḉ": "C",
                    "Ƈ": "C",
                    "Ȼ": "C",
                    "Ꜿ": "C",
                    "Ⓓ": "D",
                    "Ｄ": "D",
                    "Ḋ": "D",
                    "Ď": "D",
                    "Ḍ": "D",
                    "Ḑ": "D",
                    "Ḓ": "D",
                    "Ḏ": "D",
                    "Đ": "D",
                    "Ƌ": "D",
                    "Ɗ": "D",
                    "Ɖ": "D",
                    "Ꝺ": "D",
                    "Ǳ": "DZ",
                    "Ǆ": "DZ",
                    "ǲ": "Dz",
                    "ǅ": "Dz",
                    "Ⓔ": "E",
                    "Ｅ": "E",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ề": "E",
                    "Ế": "E",
                    "Ễ": "E",
                    "Ể": "E",
                    "Ẽ": "E",
                    "Ē": "E",
                    "Ḕ": "E",
                    "Ḗ": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ë": "E",
                    "Ẻ": "E",
                    "Ě": "E",
                    "Ȅ": "E",
                    "Ȇ": "E",
                    "Ẹ": "E",
                    "Ệ": "E",
                    "Ȩ": "E",
                    "Ḝ": "E",
                    "Ę": "E",
                    "Ḙ": "E",
                    "Ḛ": "E",
                    "Ɛ": "E",
                    "Ǝ": "E",
                    "Ⓕ": "F",
                    "Ｆ": "F",
                    "Ḟ": "F",
                    "Ƒ": "F",
                    "Ꝼ": "F",
                    "Ⓖ": "G",
                    "Ｇ": "G",
                    "Ǵ": "G",
                    "Ĝ": "G",
                    "Ḡ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ǧ": "G",
                    "Ģ": "G",
                    "Ǥ": "G",
                    "Ɠ": "G",
                    "Ꞡ": "G",
                    "Ᵹ": "G",
                    "Ꝿ": "G",
                    "Ⓗ": "H",
                    "Ｈ": "H",
                    "Ĥ": "H",
                    "Ḣ": "H",
                    "Ḧ": "H",
                    "Ȟ": "H",
                    "Ḥ": "H",
                    "Ḩ": "H",
                    "Ḫ": "H",
                    "Ħ": "H",
                    "Ⱨ": "H",
                    "Ⱶ": "H",
                    "Ɥ": "H",
                    "Ⓘ": "I",
                    "Ｉ": "I",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "İ": "I",
                    "Ï": "I",
                    "Ḯ": "I",
                    "Ỉ": "I",
                    "Ǐ": "I",
                    "Ȉ": "I",
                    "Ȋ": "I",
                    "Ị": "I",
                    "Į": "I",
                    "Ḭ": "I",
                    "Ɨ": "I",
                    "Ⓙ": "J",
                    "Ｊ": "J",
                    "Ĵ": "J",
                    "Ɉ": "J",
                    "Ⓚ": "K",
                    "Ｋ": "K",
                    "Ḱ": "K",
                    "Ǩ": "K",
                    "Ḳ": "K",
                    "Ķ": "K",
                    "Ḵ": "K",
                    "Ƙ": "K",
                    "Ⱪ": "K",
                    "Ꝁ": "K",
                    "Ꝃ": "K",
                    "Ꝅ": "K",
                    "Ꞣ": "K",
                    "Ⓛ": "L",
                    "Ｌ": "L",
                    "Ŀ": "L",
                    "Ĺ": "L",
                    "Ľ": "L",
                    "Ḷ": "L",
                    "Ḹ": "L",
                    "Ļ": "L",
                    "Ḽ": "L",
                    "Ḻ": "L",
                    "Ł": "L",
                    "Ƚ": "L",
                    "Ɫ": "L",
                    "Ⱡ": "L",
                    "Ꝉ": "L",
                    "Ꝇ": "L",
                    "Ꞁ": "L",
                    "Ǉ": "LJ",
                    "ǈ": "Lj",
                    "Ⓜ": "M",
                    "Ｍ": "M",
                    "Ḿ": "M",
                    "Ṁ": "M",
                    "Ṃ": "M",
                    "Ɱ": "M",
                    "Ɯ": "M",
                    "Ⓝ": "N",
                    "Ｎ": "N",
                    "Ǹ": "N",
                    "Ń": "N",
                    "Ñ": "N",
                    "Ṅ": "N",
                    "Ň": "N",
                    "Ṇ": "N",
                    "Ņ": "N",
                    "Ṋ": "N",
                    "Ṉ": "N",
                    "Ƞ": "N",
                    "Ɲ": "N",
                    "Ꞑ": "N",
                    "Ꞥ": "N",
                    "Ǌ": "NJ",
                    "ǋ": "Nj",
                    "Ⓞ": "O",
                    "Ｏ": "O",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Ồ": "O",
                    "Ố": "O",
                    "Ỗ": "O",
                    "Ổ": "O",
                    "Õ": "O",
                    "Ṍ": "O",
                    "Ȭ": "O",
                    "Ṏ": "O",
                    "Ō": "O",
                    "Ṑ": "O",
                    "Ṓ": "O",
                    "Ŏ": "O",
                    "Ȯ": "O",
                    "Ȱ": "O",
                    "Ö": "O",
                    "Ȫ": "O",
                    "Ỏ": "O",
                    "Ő": "O",
                    "Ǒ": "O",
                    "Ȍ": "O",
                    "Ȏ": "O",
                    "Ơ": "O",
                    "Ờ": "O",
                    "Ớ": "O",
                    "Ỡ": "O",
                    "Ở": "O",
                    "Ợ": "O",
                    "Ọ": "O",
                    "Ộ": "O",
                    "Ǫ": "O",
                    "Ǭ": "O",
                    "Ø": "O",
                    "Ǿ": "O",
                    "Ɔ": "O",
                    "Ɵ": "O",
                    "Ꝋ": "O",
                    "Ꝍ": "O",
                    "Ƣ": "OI",
                    "Ꝏ": "OO",
                    "Ȣ": "OU",
                    "Ⓟ": "P",
                    "Ｐ": "P",
                    "Ṕ": "P",
                    "Ṗ": "P",
                    "Ƥ": "P",
                    "Ᵽ": "P",
                    "Ꝑ": "P",
                    "Ꝓ": "P",
                    "Ꝕ": "P",
                    "Ⓠ": "Q",
                    "Ｑ": "Q",
                    "Ꝗ": "Q",
                    "Ꝙ": "Q",
                    "Ɋ": "Q",
                    "Ⓡ": "R",
                    "Ｒ": "R",
                    "Ŕ": "R",
                    "Ṙ": "R",
                    "Ř": "R",
                    "Ȑ": "R",
                    "Ȓ": "R",
                    "Ṛ": "R",
                    "Ṝ": "R",
                    "Ŗ": "R",
                    "Ṟ": "R",
                    "Ɍ": "R",
                    "Ɽ": "R",
                    "Ꝛ": "R",
                    "Ꞧ": "R",
                    "Ꞃ": "R",
                    "Ⓢ": "S",
                    "Ｓ": "S",
                    "ẞ": "S",
                    "Ś": "S",
                    "Ṥ": "S",
                    "Ŝ": "S",
                    "Ṡ": "S",
                    "Š": "S",
                    "Ṧ": "S",
                    "Ṣ": "S",
                    "Ṩ": "S",
                    "Ș": "S",
                    "Ş": "S",
                    "Ȿ": "S",
                    "Ꞩ": "S",
                    "Ꞅ": "S",
                    "Ⓣ": "T",
                    "Ｔ": "T",
                    "Ṫ": "T",
                    "Ť": "T",
                    "Ṭ": "T",
                    "Ț": "T",
                    "Ţ": "T",
                    "Ṱ": "T",
                    "Ṯ": "T",
                    "Ŧ": "T",
                    "Ƭ": "T",
                    "Ʈ": "T",
                    "Ⱦ": "T",
                    "Ꞇ": "T",
                    "Ꜩ": "TZ",
                    "Ⓤ": "U",
                    "Ｕ": "U",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ũ": "U",
                    "Ṹ": "U",
                    "Ū": "U",
                    "Ṻ": "U",
                    "Ŭ": "U",
                    "Ü": "U",
                    "Ǜ": "U",
                    "Ǘ": "U",
                    "Ǖ": "U",
                    "Ǚ": "U",
                    "Ủ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ǔ": "U",
                    "Ȕ": "U",
                    "Ȗ": "U",
                    "Ư": "U",
                    "Ừ": "U",
                    "Ứ": "U",
                    "Ữ": "U",
                    "Ử": "U",
                    "Ự": "U",
                    "Ụ": "U",
                    "Ṳ": "U",
                    "Ų": "U",
                    "Ṷ": "U",
                    "Ṵ": "U",
                    "Ʉ": "U",
                    "Ⓥ": "V",
                    "Ｖ": "V",
                    "Ṽ": "V",
                    "Ṿ": "V",
                    "Ʋ": "V",
                    "Ꝟ": "V",
                    "Ʌ": "V",
                    "Ꝡ": "VY",
                    "Ⓦ": "W",
                    "Ｗ": "W",
                    "Ẁ": "W",
                    "Ẃ": "W",
                    "Ŵ": "W",
                    "Ẇ": "W",
                    "Ẅ": "W",
                    "Ẉ": "W",
                    "Ⱳ": "W",
                    "Ⓧ": "X",
                    "Ｘ": "X",
                    "Ẋ": "X",
                    "Ẍ": "X",
                    "Ⓨ": "Y",
                    "Ｙ": "Y",
                    "Ỳ": "Y",
                    "Ý": "Y",
                    "Ŷ": "Y",
                    "Ỹ": "Y",
                    "Ȳ": "Y",
                    "Ẏ": "Y",
                    "Ÿ": "Y",
                    "Ỷ": "Y",
                    "Ỵ": "Y",
                    "Ƴ": "Y",
                    "Ɏ": "Y",
                    "Ỿ": "Y",
                    "Ⓩ": "Z",
                    "Ｚ": "Z",
                    "Ź": "Z",
                    "Ẑ": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "Ẓ": "Z",
                    "Ẕ": "Z",
                    "Ƶ": "Z",
                    "Ȥ": "Z",
                    "Ɀ": "Z",
                    "Ⱬ": "Z",
                    "Ꝣ": "Z",
                    "ⓐ": "a",
                    "ａ": "a",
                    "ẚ": "a",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ầ": "a",
                    "ấ": "a",
                    "ẫ": "a",
                    "ẩ": "a",
                    "ã": "a",
                    "ā": "a",
                    "ă": "a",
                    "ằ": "a",
                    "ắ": "a",
                    "ẵ": "a",
                    "ẳ": "a",
                    "ȧ": "a",
                    "ǡ": "a",
                    "ä": "a",
                    "ǟ": "a",
                    "ả": "a",
                    "å": "a",
                    "ǻ": "a",
                    "ǎ": "a",
                    "ȁ": "a",
                    "ȃ": "a",
                    "ạ": "a",
                    "ậ": "a",
                    "ặ": "a",
                    "ḁ": "a",
                    "ą": "a",
                    "ⱥ": "a",
                    "ɐ": "a",
                    "ꜳ": "aa",
                    "æ": "ae",
                    "ǽ": "ae",
                    "ǣ": "ae",
                    "ꜵ": "ao",
                    "ꜷ": "au",
                    "ꜹ": "av",
                    "ꜻ": "av",
                    "ꜽ": "ay",
                    "ⓑ": "b",
                    "ｂ": "b",
                    "ḃ": "b",
                    "ḅ": "b",
                    "ḇ": "b",
                    "ƀ": "b",
                    "ƃ": "b",
                    "ɓ": "b",
                    "ⓒ": "c",
                    "ｃ": "c",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "ç": "c",
                    "ḉ": "c",
                    "ƈ": "c",
                    "ȼ": "c",
                    "ꜿ": "c",
                    "ↄ": "c",
                    "ⓓ": "d",
                    "ｄ": "d",
                    "ḋ": "d",
                    "ď": "d",
                    "ḍ": "d",
                    "ḑ": "d",
                    "ḓ": "d",
                    "ḏ": "d",
                    "đ": "d",
                    "ƌ": "d",
                    "ɖ": "d",
                    "ɗ": "d",
                    "ꝺ": "d",
                    "ǳ": "dz",
                    "ǆ": "dz",
                    "ⓔ": "e",
                    "ｅ": "e",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ề": "e",
                    "ế": "e",
                    "ễ": "e",
                    "ể": "e",
                    "ẽ": "e",
                    "ē": "e",
                    "ḕ": "e",
                    "ḗ": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ë": "e",
                    "ẻ": "e",
                    "ě": "e",
                    "ȅ": "e",
                    "ȇ": "e",
                    "ẹ": "e",
                    "ệ": "e",
                    "ȩ": "e",
                    "ḝ": "e",
                    "ę": "e",
                    "ḙ": "e",
                    "ḛ": "e",
                    "ɇ": "e",
                    "ɛ": "e",
                    "ǝ": "e",
                    "ⓕ": "f",
                    "ｆ": "f",
                    "ḟ": "f",
                    "ƒ": "f",
                    "ꝼ": "f",
                    "ⓖ": "g",
                    "ｇ": "g",
                    "ǵ": "g",
                    "ĝ": "g",
                    "ḡ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ǧ": "g",
                    "ģ": "g",
                    "ǥ": "g",
                    "ɠ": "g",
                    "ꞡ": "g",
                    "ᵹ": "g",
                    "ꝿ": "g",
                    "ⓗ": "h",
                    "ｈ": "h",
                    "ĥ": "h",
                    "ḣ": "h",
                    "ḧ": "h",
                    "ȟ": "h",
                    "ḥ": "h",
                    "ḩ": "h",
                    "ḫ": "h",
                    "ẖ": "h",
                    "ħ": "h",
                    "ⱨ": "h",
                    "ⱶ": "h",
                    "ɥ": "h",
                    "ƕ": "hv",
                    "ⓘ": "i",
                    "ｉ": "i",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "ï": "i",
                    "ḯ": "i",
                    "ỉ": "i",
                    "ǐ": "i",
                    "ȉ": "i",
                    "ȋ": "i",
                    "ị": "i",
                    "į": "i",
                    "ḭ": "i",
                    "ɨ": "i",
                    "ı": "i",
                    "ⓙ": "j",
                    "ｊ": "j",
                    "ĵ": "j",
                    "ǰ": "j",
                    "ɉ": "j",
                    "ⓚ": "k",
                    "ｋ": "k",
                    "ḱ": "k",
                    "ǩ": "k",
                    "ḳ": "k",
                    "ķ": "k",
                    "ḵ": "k",
                    "ƙ": "k",
                    "ⱪ": "k",
                    "ꝁ": "k",
                    "ꝃ": "k",
                    "ꝅ": "k",
                    "ꞣ": "k",
                    "ⓛ": "l",
                    "ｌ": "l",
                    "ŀ": "l",
                    "ĺ": "l",
                    "ľ": "l",
                    "ḷ": "l",
                    "ḹ": "l",
                    "ļ": "l",
                    "ḽ": "l",
                    "ḻ": "l",
                    "ſ": "l",
                    "ł": "l",
                    "ƚ": "l",
                    "ɫ": "l",
                    "ⱡ": "l",
                    "ꝉ": "l",
                    "ꞁ": "l",
                    "ꝇ": "l",
                    "ǉ": "lj",
                    "ⓜ": "m",
                    "ｍ": "m",
                    "ḿ": "m",
                    "ṁ": "m",
                    "ṃ": "m",
                    "ɱ": "m",
                    "ɯ": "m",
                    "ⓝ": "n",
                    "ｎ": "n",
                    "ǹ": "n",
                    "ń": "n",
                    "ñ": "n",
                    "ṅ": "n",
                    "ň": "n",
                    "ṇ": "n",
                    "ņ": "n",
                    "ṋ": "n",
                    "ṉ": "n",
                    "ƞ": "n",
                    "ɲ": "n",
                    "ŉ": "n",
                    "ꞑ": "n",
                    "ꞥ": "n",
                    "ǌ": "nj",
                    "ⓞ": "o",
                    "ｏ": "o",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "ồ": "o",
                    "ố": "o",
                    "ỗ": "o",
                    "ổ": "o",
                    "õ": "o",
                    "ṍ": "o",
                    "ȭ": "o",
                    "ṏ": "o",
                    "ō": "o",
                    "ṑ": "o",
                    "ṓ": "o",
                    "ŏ": "o",
                    "ȯ": "o",
                    "ȱ": "o",
                    "ö": "o",
                    "ȫ": "o",
                    "ỏ": "o",
                    "ő": "o",
                    "ǒ": "o",
                    "ȍ": "o",
                    "ȏ": "o",
                    "ơ": "o",
                    "ờ": "o",
                    "ớ": "o",
                    "ỡ": "o",
                    "ở": "o",
                    "ợ": "o",
                    "ọ": "o",
                    "ộ": "o",
                    "ǫ": "o",
                    "ǭ": "o",
                    "ø": "o",
                    "ǿ": "o",
                    "ɔ": "o",
                    "ꝋ": "o",
                    "ꝍ": "o",
                    "ɵ": "o",
                    "ƣ": "oi",
                    "ȣ": "ou",
                    "ꝏ": "oo",
                    "ⓟ": "p",
                    "ｐ": "p",
                    "ṕ": "p",
                    "ṗ": "p",
                    "ƥ": "p",
                    "ᵽ": "p",
                    "ꝑ": "p",
                    "ꝓ": "p",
                    "ꝕ": "p",
                    "ⓠ": "q",
                    "ｑ": "q",
                    "ɋ": "q",
                    "ꝗ": "q",
                    "ꝙ": "q",
                    "ⓡ": "r",
                    "ｒ": "r",
                    "ŕ": "r",
                    "ṙ": "r",
                    "ř": "r",
                    "ȑ": "r",
                    "ȓ": "r",
                    "ṛ": "r",
                    "ṝ": "r",
                    "ŗ": "r",
                    "ṟ": "r",
                    "ɍ": "r",
                    "ɽ": "r",
                    "ꝛ": "r",
                    "ꞧ": "r",
                    "ꞃ": "r",
                    "ⓢ": "s",
                    "ｓ": "s",
                    "ß": "s",
                    "ś": "s",
                    "ṥ": "s",
                    "ŝ": "s",
                    "ṡ": "s",
                    "š": "s",
                    "ṧ": "s",
                    "ṣ": "s",
                    "ṩ": "s",
                    "ș": "s",
                    "ş": "s",
                    "ȿ": "s",
                    "ꞩ": "s",
                    "ꞅ": "s",
                    "ẛ": "s",
                    "ⓣ": "t",
                    "ｔ": "t",
                    "ṫ": "t",
                    "ẗ": "t",
                    "ť": "t",
                    "ṭ": "t",
                    "ț": "t",
                    "ţ": "t",
                    "ṱ": "t",
                    "ṯ": "t",
                    "ŧ": "t",
                    "ƭ": "t",
                    "ʈ": "t",
                    "ⱦ": "t",
                    "ꞇ": "t",
                    "ꜩ": "tz",
                    "ⓤ": "u",
                    "ｕ": "u",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ũ": "u",
                    "ṹ": "u",
                    "ū": "u",
                    "ṻ": "u",
                    "ŭ": "u",
                    "ü": "u",
                    "ǜ": "u",
                    "ǘ": "u",
                    "ǖ": "u",
                    "ǚ": "u",
                    "ủ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ǔ": "u",
                    "ȕ": "u",
                    "ȗ": "u",
                    "ư": "u",
                    "ừ": "u",
                    "ứ": "u",
                    "ữ": "u",
                    "ử": "u",
                    "ự": "u",
                    "ụ": "u",
                    "ṳ": "u",
                    "ų": "u",
                    "ṷ": "u",
                    "ṵ": "u",
                    "ʉ": "u",
                    "ⓥ": "v",
                    "ｖ": "v",
                    "ṽ": "v",
                    "ṿ": "v",
                    "ʋ": "v",
                    "ꝟ": "v",
                    "ʌ": "v",
                    "ꝡ": "vy",
                    "ⓦ": "w",
                    "ｗ": "w",
                    "ẁ": "w",
                    "ẃ": "w",
                    "ŵ": "w",
                    "ẇ": "w",
                    "ẅ": "w",
                    "ẘ": "w",
                    "ẉ": "w",
                    "ⱳ": "w",
                    "ⓧ": "x",
                    "ｘ": "x",
                    "ẋ": "x",
                    "ẍ": "x",
                    "ⓨ": "y",
                    "ｙ": "y",
                    "ỳ": "y",
                    "ý": "y",
                    "ŷ": "y",
                    "ỹ": "y",
                    "ȳ": "y",
                    "ẏ": "y",
                    "ÿ": "y",
                    "ỷ": "y",
                    "ẙ": "y",
                    "ỵ": "y",
                    "ƴ": "y",
                    "ɏ": "y",
                    "ỿ": "y",
                    "ⓩ": "z",
                    "ｚ": "z",
                    "ź": "z",
                    "ẑ": "z",
                    "ż": "z",
                    "ž": "z",
                    "ẓ": "z",
                    "ẕ": "z",
                    "ƶ": "z",
                    "ȥ": "z",
                    "ɀ": "z",
                    "ⱬ": "z",
                    "ꝣ": "z",
                    "Ά": "Α",
                    "Έ": "Ε",
                    "Ή": "Η",
                    "Ί": "Ι",
                    "Ϊ": "Ι",
                    "Ό": "Ο",
                    "Ύ": "Υ",
                    "Ϋ": "Υ",
                    "Ώ": "Ω",
                    "ά": "α",
                    "έ": "ε",
                    "ή": "η",
                    "ί": "ι",
                    "ϊ": "ι",
                    "ΐ": "ι",
                    "ό": "ο",
                    "ύ": "υ",
                    "ϋ": "υ",
                    "ΰ": "υ",
                    "ω": "ω",
                    "ς": "σ"
                };
                return a
            }), b.define("select2/data/base", ["../utils"], function(a) {
                function b() {
                    b.__super__.constructor.call(this)
                }
                return a.Extend(b, a.Observable), b.prototype.current = function() {
                    throw new Error("The `current` method must be defined in child classes.")
                }, b.prototype.query = function() {
                    throw new Error("The `query` method must be defined in child classes.")
                }, b.prototype.bind = function() {}, b.prototype.destroy = function() {}, b.prototype.generateResultId = function(b, c) {
                    var d = b.id + "-result-";
                    return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4)
                }, b
            }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function(a, b, c) {
                function d(a, b) {
                    this.$element = a, this.options = b, d.__super__.constructor.call(this)
                }
                return b.Extend(d, a), d.prototype.current = function(a) {
                    var b = [],
                        d = this;
                    this.$element.find(":selected").each(function() {
                        var a = c(this),
                            e = d.item(a);
                        b.push(e)
                    }), a(b)
                }, d.prototype.select = function(a) {
                    var b = this;
                    if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
                    if (this.$element.prop("multiple")) this.current(function(d) {
                        var e = [];
                        a = [a], a.push.apply(a, d);
                        for (var f = 0; f < a.length; f++) {
                            var g = a[f].id; - 1 === c.inArray(g, e) && e.push(g)
                        }
                        b.$element.val(e), b.$element.trigger("change")
                    });
                    else {
                        var d = a.id;
                        this.$element.val(d), this.$element.trigger("change")
                    }
                }, d.prototype.unselect = function(a) {
                    var b = this;
                    if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(d) {
                        for (var e = [], f = 0; f < d.length; f++) {
                            var g = d[f].id;
                            g !== a.id && -1 === c.inArray(g, e) && e.push(g)
                        }
                        b.$element.val(e), b.$element.trigger("change")
                    })
                }, d.prototype.bind = function(a) {
                    var b = this;
                    this.container = a, a.on("select", function(a) {
                        b.select(a.data)
                    }), a.on("unselect", function(a) {
                        b.unselect(a.data)
                    })
                }, d.prototype.destroy = function() {
                    this.$element.find("*").each(function() {
                        c.removeData(this, "data")
                    })
                }, d.prototype.query = function(a, b) {
                    var d = [],
                        e = this,
                        f = this.$element.children();
                    f.each(function() {
                        var b = c(this);
                        if (b.is("option") || b.is("optgroup")) {
                            var f = e.item(b),
                                g = e.matches(a, f);
                            null !== g && d.push(g)
                        }
                    }), b({
                        results: d
                    })
                }, d.prototype.addOptions = function(a) {
                    b.appendMany(this.$element, a)
                }, d.prototype.option = function(a) {
                    var b;
                    a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);
                    var d = c(b),
                        e = this._normalizeItem(a);
                    return e.element = b, c.data(b, "data", e), d
                }, d.prototype.item = function(a) {
                    var b = {};
                    if (b = c.data(a[0], "data"), null != b) return b;
                    if (a.is("option")) b = {
                        id: a.val(),
                        text: a.text(),
                        disabled: a.prop("disabled"),
                        selected: a.prop("selected"),
                        title: a.prop("title")
                    };
                    else if (a.is("optgroup")) {
                        b = {
                            text: a.prop("label"),
                            children: [],
                            title: a.prop("title")
                        };
                        for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
                            var g = c(d[f]),
                                h = this.item(g);
                            e.push(h)
                        }
                        b.children = e
                    }
                    return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b
                }, d.prototype._normalizeItem = function(a) {
                    c.isPlainObject(a) || (a = {
                        id: a,
                        text: a
                    }), a = c.extend({}, {
                        text: ""
                    }, a);
                    var b = {
                        selected: !1,
                        disabled: !1
                    };
                    return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a)
                }, d.prototype.matches = function(a, b) {
                    var c = this.options.get("matcher");
                    return c(a, b)
                }, d
            }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function(a, b, c) {
                function d(a, b) {
                    var c = b.get("data") || [];
                    d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c))
                }
                return b.Extend(d, a), d.prototype.select = function(a) {
                    var b = this.$element.find("option").filter(function(b, c) {
                        return c.value == a.id.toString()
                    });
                    0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a)
                }, d.prototype.convertToOptions = function(a) {
                    function d(a) {
                        return function() {
                            return c(this).val() == a.id
                        }
                    }
                    for (var e = this, f = this.$element.find("option"), g = f.map(function() {
                            return e.item(c(this)).id
                        }).get(), h = [], i = 0; i < a.length; i++) {
                        var j = this._normalizeItem(a[i]);
                        if (c.inArray(j.id, g) >= 0) {
                            var k = f.filter(d(j)),
                                l = this.item(k),
                                m = (c.extend(!0, {}, l, j), this.option(l));
                            k.replaceWith(m)
                        } else {
                            var n = this.option(j);
                            if (j.children) {
                                var o = this.convertToOptions(j.children);
                                b.appendMany(n, o)
                            }
                            h.push(n)
                        }
                    }
                    return h
                }, d
            }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(a, b, c) {
                function d(b, c) {
                    this.ajaxOptions = this._applyDefaults(c.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), a.__super__.constructor.call(this, b, c)
                }
                return b.Extend(d, a), d.prototype._applyDefaults = function(a) {
                    var b = {
                        data: function(a) {
                            return {
                                q: a.term
                            }
                        },
                        transport: function(a, b, d) {
                            var e = c.ajax(a);
                            return e.then(b), e.fail(d), e
                        }
                    };
                    return c.extend({}, b, a, !0)
                }, d.prototype.processResults = function(a) {
                    return a
                }, d.prototype.query = function(a, b) {
                    function d() {
                        var d = f.transport(f, function(d) {
                            var f = e.processResults(d, a);
                            e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f)
                        }, function() {});
                        e._request = d
                    }
                    var e = this;
                    null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                    var f = c.extend({
                        type: "GET"
                    }, this.ajaxOptions);
                    "function" == typeof f.url && (f.url = f.url(a)), "function" == typeof f.data && (f.data = f.data(a)), this.ajaxOptions.delay && "" !== a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d()
                }, d
            }), b.define("select2/data/tags", ["jquery"], function(a) {
                function b(b, c, d) {
                    var e = d.get("tags"),
                        f = d.get("createTag");
                    if (void 0 !== f && (this.createTag = f), b.call(this, c, d), a.isArray(e))
                        for (var g = 0; g < e.length; g++) {
                            var h = e[g],
                                i = this._normalizeItem(h),
                                j = this.option(i);
                            this.$element.append(j)
                        }
                }
                return b.prototype.query = function(a, b, c) {
                    function d(a, f) {
                        for (var g = a.results, h = 0; h < g.length; h++) {
                            var i = g[h],
                                j = null != i.children && !d({
                                    results: i.children
                                }, !0),
                                k = i.text === b.term;
                            if (k || j) return f ? !1 : (a.data = g, void c(a))
                        }
                        if (f) return !0;
                        var l = e.createTag(b);
                        if (null != l) {
                            var m = e.option(l);
                            m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l)
                        }
                        a.results = g, c(a)
                    }
                    var e = this;
                    return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d)
                }, b.prototype.createTag = function(b, c) {
                    var d = a.trim(c.term);
                    return "" === d ? null : {
                        id: d,
                        text: d
                    }
                }, b.prototype.insertTag = function(a, b, c) {
                    b.unshift(c)
                }, b.prototype._removeOldTags = function() {
                    var b = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                    b.each(function() {
                        this.selected || a(this).remove()
                    })
                }, b
            }), b.define("select2/data/tokenizer", ["jquery"], function(a) {
                function b(a, b, c) {
                    var d = c.get("tokenizer");
                    void 0 !== d && (this.tokenizer = d), a.call(this, b, c)
                }
                return b.prototype.bind = function(a, b, c) {
                    a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field")
                }, b.prototype.query = function(a, b, c) {
                    function d(a) {
                        e.select(a)
                    }
                    var e = this;
                    b.term = b.term || "";
                    var f = this.tokenizer(b, this.options, d);
                    f.term !== b.term && (this.$search.length && (this.$search.val(f.term), this.$search.focus()), b.term = f.term), a.call(this, b, c)
                }, b.prototype.tokenizer = function(b, c, d, e) {
                    for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function(a) {
                            return {
                                id: a.term,
                                text: a.term
                            }
                        }; h < g.length;) {
                        var j = g[h];
                        if (-1 !== a.inArray(j, f)) {
                            var k = g.substr(0, h),
                                l = a.extend({}, c, {
                                    term: k
                                }),
                                m = i(l);
                            e(m), g = g.substr(h + 1) || "", h = 0
                        } else h++
                    }
                    return {
                        term: g
                    }
                }, b
            }), b.define("select2/data/minimumInputLength", [], function() {
                function a(a, b, c) {
                    this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c)
                }
                return a.prototype.query = function(a, b, c) {
                    return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: b.term,
                            params: b
                        }
                    }) : void a.call(this, b, c)
                }, a
            }), b.define("select2/data/maximumInputLength", [], function() {
                function a(a, b, c) {
                    this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c)
                }
                return a.prototype.query = function(a, b, c) {
                    return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: b.term,
                            params: b
                        }
                    }) : void a.call(this, b, c)
                }, a
            }), b.define("select2/data/maximumSelectionLength", [], function() {
                function a(a, b, c) {
                    this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c)
                }
                return a.prototype.query = function(a, b, c) {
                    var d = this;
                    this.current(function(e) {
                        var f = null != e ? e.length : 0;
                        return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: d.maximumSelectionLength
                            }
                        }) : void a.call(d, b, c)
                    })
                }, a
            }), b.define("select2/dropdown", ["jquery", "./utils"], function(a, b) {
                function c(a, b) {
                    this.$element = a, this.options = b, c.__super__.constructor.call(this)
                }
                return b.Extend(c, b.Observable), c.prototype.render = function() {
                    var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b
                }, c.prototype.position = function() {}, c.prototype.destroy = function() {
                    this.$dropdown.remove()
                }, c
            }), b.define("select2/dropdown/search", ["jquery", "../utils"], function(a) {
                function b() {}
                return b.prototype.render = function(b) {
                    var c = b.call(this),
                        d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                    return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c
                }, b.prototype.bind = function(b, c, d) {
                    var e = this;
                    b.call(this, c, d), this.$search.on("keydown", function(a) {
                        e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented()
                    }), this.$search.on("input", function() {
                        a(this).off("keyup")
                    }), this.$search.on("keyup input", function(a) {
                        e.handleSearch(a)
                    }), c.on("open", function() {
                        e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function() {
                            e.$search.focus()
                        }, 0)
                    }), c.on("close", function() {
                        e.$search.attr("tabindex", -1), e.$search.val("")
                    }), c.on("results:all", function(a) {
                        if (null == a.query.term || "" === a.query.term) {
                            var b = e.showSearch(a);
                            b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide")
                        }
                    })
                }, b.prototype.handleSearch = function() {
                    if (!this._keyUpPrevented) {
                        var a = this.$search.val();
                        this.trigger("query", {
                            term: a
                        })
                    }
                    this._keyUpPrevented = !1
                }, b.prototype.showSearch = function() {
                    return !0
                }, b
            }), b.define("select2/dropdown/hidePlaceholder", [], function() {
                function a(a, b, c, d) {
                    this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d)
                }
                return a.prototype.append = function(a, b) {
                    b.results = this.removePlaceholder(b.results), a.call(this, b)
                }, a.prototype.normalizePlaceholder = function(a, b) {
                    return "string" == typeof b && (b = {
                        id: "",
                        text: b
                    }), b
                }, a.prototype.removePlaceholder = function(a, b) {
                    for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                        var e = b[d];
                        this.placeholder.id === e.id && c.splice(d, 1)
                    }
                    return c
                }, a
            }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function(a) {
                function b(a, b, c, d) {
                    this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                }
                return b.prototype.append = function(a, b) {
                    this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore)
                }, b.prototype.bind = function(b, c, d) {
                    var e = this;
                    b.call(this, c, d), c.on("query", function(a) {
                        e.lastParams = a, e.loading = !0
                    }), c.on("query:append", function(a) {
                        e.lastParams = a, e.loading = !0
                    }), this.$results.on("scroll", function() {
                        var b = a.contains(document.documentElement, e.$loadingMore[0]);
                        if (!e.loading && b) {
                            var c = e.$results.offset().top + e.$results.outerHeight(!1),
                                d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);
                            c + 50 >= d && e.loadMore()
                        }
                    })
                }, b.prototype.loadMore = function() {
                    this.loading = !0;
                    var b = a.extend({}, {
                        page: 1
                    }, this.lastParams);
                    b.page++, this.trigger("query:append", b)
                }, b.prototype.showLoadingMore = function(a, b) {
                    return b.pagination && b.pagination.more
                }, b.prototype.createLoadingMore = function() {
                    var b = a('<li class="option load-more" role="treeitem"></li>'),
                        c = this.options.get("translations").get("loadingMore");
                    return b.html(c(this.lastParams)), b
                }, b
            }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(a, b) {
                function c(a, b, c) {
                    this.$dropdownParent = c.get("dropdownParent") || document.body, a.call(this, b, c)
                }
                return c.prototype.bind = function(a, b, c) {
                    var d = this,
                        e = !1;
                    a.call(this, b, c), b.on("open", function() {
                        d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function() {
                            d._positionDropdown(), d._resizeDropdown()
                        }), b.on("results:append", function() {
                            d._positionDropdown(), d._resizeDropdown()
                        }))
                    }), b.on("close", function() {
                        d._hideDropdown(), d._detachPositioningHandler(b)
                    }), this.$dropdownContainer.on("mousedown", function(a) {
                        a.stopPropagation()
                    })
                }, c.prototype.position = function(a, b, c) {
                    b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({
                        position: "absolute",
                        top: -999999
                    }), this.$container = c
                }, c.prototype.render = function(b) {
                    var c = a("<span></span>"),
                        d = b.call(this);
                    return c.append(d), this.$dropdownContainer = c, c
                }, c.prototype._hideDropdown = function() {
                    this.$dropdownContainer.detach()
                }, c.prototype._attachPositioningHandler = function(c) {
                    var d = this,
                        e = "scroll.select2." + c.id,
                        f = "resize.select2." + c.id,
                        g = "orientationchange.select2." + c.id,
                        h = this.$container.parents().filter(b.hasScroll);
                    h.each(function() {
                        a(this).data("select2-scroll-position", {
                            x: a(this).scrollLeft(),
                            y: a(this).scrollTop()
                        })
                    }), h.on(e, function() {
                        var b = a(this).data("select2-scroll-position");
                        a(this).scrollTop(b.y)
                    }), a(window).on(e + " " + f + " " + g, function() {
                        d._positionDropdown(), d._resizeDropdown()
                    })
                }, c.prototype._detachPositioningHandler = function(c) {
                    var d = "scroll.select2." + c.id,
                        e = "resize.select2." + c.id,
                        f = "orientationchange.select2." + c.id,
                        g = this.$container.parents().filter(b.hasScroll);
                    g.off(d), a(window).off(d + " " + e + " " + f)
                }, c.prototype._positionDropdown = function() {
                    var b = a(window),
                        c = this.$dropdown.hasClass("select2-dropdown--above"),
                        d = this.$dropdown.hasClass("select2-dropdown--below"),
                        e = null,
                        f = (this.$container.position(), this.$container.offset());
                    f.bottom = f.top + this.$container.outerHeight(!1);
                    var g = {
                        height: this.$container.outerHeight(!1)
                    };
                    g.top = f.top, g.bottom = f.top + g.height;
                    var h = {
                            height: this.$dropdown.outerHeight(!1)
                        },
                        i = {
                            top: b.scrollTop(),
                            bottom: b.scrollTop() + b.height()
                        },
                        j = i.top < f.top - h.height,
                        k = i.bottom > f.bottom + h.height,
                        l = {
                            left: f.left,
                            top: g.bottom
                        };
                    c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l)
                }, c.prototype._resizeDropdown = function() {
                    this.$dropdownContainer.width();
                    var a = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.width = "auto"), this.$dropdown.css(a)
                }, c.prototype._showDropdown = function() {
                    this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                }, c
            }), b.define("select2/dropdown/minimumResultsForSearch", [], function() {
                function a(b) {
                    for (var c = 0, d = 0; d < b.length; d++) {
                        var e = b[d];
                        e.children ? c += a(e.children) : c++
                    }
                    return c
                }

                function b(a, b, c, d) {
                    this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d)
                }
                return b.prototype.showSearch = function(b, c) {
                    return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c)
                }, b
            }), b.define("select2/dropdown/selectOnClose", [], function() {
                function a() {}
                return a.prototype.bind = function(a, b, c) {
                    var d = this;
                    a.call(this, b, c), b.on("close", function() {
                        d._handleSelectOnClose()
                    })
                }, a.prototype._handleSelectOnClose = function() {
                    var a = this.getHighlightedResults();
                    a.length < 1 || this.trigger("select", {
                        data: a.data("data")
                    })
                }, a
            }), b.define("select2/dropdown/closeOnSelect", [], function() {
                function a() {}
                return a.prototype.bind = function(a, b, c) {
                    var d = this;
                    a.call(this, b, c), b.on("select", function(a) {
                        d._selectTriggered(a)
                    }), b.on("unselect", function(a) {
                        d._selectTriggered(a)
                    })
                }, a.prototype._selectTriggered = function(a, b) {
                    var c = b.originalEvent;
                    c && c.ctrlKey || this.trigger("close")
                }, a
            }), b.define("select2/i18n/en", [], function() {
                return {
                    errorLoading: function() {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function(a) {
                        var b = a.input.length - a.maximum,
                            c = "Please delete " + b + " character";
                        return 1 != b && (c += "s"), c
                    },
                    inputTooShort: function(a) {
                        var b = a.minimum - a.input.length,
                            c = "Please enter " + b + " or more characters";
                        return c
                    },
                    loadingMore: function() {
                        return "Loading more results…"
                    },
                    maximumSelected: function(a) {
                        var z = " gallery";
                        if (1 != a.maximum) {
                            z = " galleries"
                        };
                        var b = "You can select up to " + a.maximum + z;
                        return b
                    },
                    noResults: function() {
                        return "No results found"
                    },
                    searching: function() {
                        return "Searching…"
                    }
                }
            }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
                function D() {
                    this.reset()
                }
                D.prototype.apply = function(l) {
                    if (l = a.extend({}, this.defaults, l), null == l.dataAdapter) {
                        if (l.dataAdapter = null != l.ajax ? o : null != l.data ? n : m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
                            var C = b(l.amdBase + "compat/query");
                            l.dataAdapter = j.Decorate(l.dataAdapter, C)
                        }
                        if (null != l.initSelection) {
                            var D = b(l.amdBase + "compat/initSelection");
                            l.dataAdapter = j.Decorate(l.dataAdapter, D)
                        }
                    }
                    if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
                        if (l.multiple) l.dropdownAdapter = u;
                        else {
                            var E = j.Decorate(u, v);
                            l.dropdownAdapter = E
                        }
                        if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                            var F = b(l.amdBase + "compat/dropdownCss");
                            l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F)
                        }
                        l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y)
                    }
                    if (null == l.selectionAdapter) {
                        if (l.selectionAdapter = l.multiple ? e : d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                            var G = b(l.amdBase + "compat/containerCss");
                            l.selectionAdapter = j.Decorate(l.selectionAdapter, G)
                        }
                        l.selectionAdapter = j.Decorate(l.selectionAdapter, i)
                    }
                    if ("string" == typeof l.language)
                        if (l.language.indexOf("-") > 0) {
                            var H = l.language.split("-"),
                                I = H[0];
                            l.language = [l.language, I]
                        } else l.language = [l.language];
                    if (a.isArray(l.language)) {
                        var J = new k;
                        l.language.push("en");
                        for (var K = l.language, L = 0; L < K.length; L++) {
                            var M = K[L],
                                N = {};
                            try {
                                N = k.loadPath(M)
                            } catch (O) {
                                try {
                                    M = this.defaults.amdLanguageBase + M, N = k.loadPath(M)
                                } catch (P) {
                                    l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                                    continue
                                }
                            }
                            J.extend(N)
                        }
                        l.translations = J
                    } else {
                        var Q = k.loadPath(this.defaults.amdLanguageBase + "en"),
                            R = new k(l.language);
                        R.extend(Q), l.translations = R
                    }
                    return l
                }, D.prototype.reset = function() {
                    function b(a) {
                        function b(a) {
                            return l[a] || a
                        }
                        return a.replace(/[^\u0000-\u007E]/g, b)
                    }

                    function c(d, e) {
                        if ("" === a.trim(d.term)) return e;
                        if (e.children && e.children.length > 0) {
                            for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                                var h = e.children[g],
                                    i = c(d, h);
                                null == i && f.children.splice(g, 1)
                            }
                            return f.children.length > 0 ? f : c(d, f)
                        }
                        var j = b(e.text).toUpperCase(),
                            k = b(d.term).toUpperCase();
                        return j.indexOf(k) > -1 ? e : null
                    }
                    this.defaults = {
                        amdBase: "./",
                        amdLanguageBase: "./i18n/",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: j.escapeMarkup,
                        language: C,
                        matcher: c,
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: !1,
                        sorter: function(a) {
                            return a
                        },
                        templateResult: function(a) {
                            return a.text
                        },
                        templateSelection: function(a) {
                            return a.text
                        },
                        theme: "default",
                        width: "resolve"
                    }
                }, D.prototype.set = function(b, c) {
                    var d = a.camelCase(b),
                        e = {};
                    e[d] = c;
                    var f = j._convertData(e);
                    a.extend(this.defaults, f)
                };
                var E = new D;
                return E
            }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(a, b, c, d) {
                function e(b, e) {
                    if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
                        var f = a(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f)
                    }
                }
                return e.prototype.fromElement = function(a) {
                    var c = ["select2"];
                    null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (this.options.dir = a.prop("dir") ? a.prop("dir") : a.closest("[dir]").prop("dir") ? a.closest("[dir]").prop("dir") : "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
                    var e = {};
                    e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
                    var f = b.extend(!0, {}, e);
                    f = d._convertData(f);
                    for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
                    return this
                }, e.prototype.get = function(a) {
                    return this.options[a]
                }, e.prototype.set = function(a, b) {
                    this.options[a] = b
                }, e
            }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(a, b, c, d) {
                var e = function(a, c) {
                    null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);
                    var d = a.attr("tabindex") || 0;
                    a.data("old-tabindex", d), a.attr("tabindex", "-1");
                    var f = this.options.get("dataAdapter");
                    this.dataAdapter = new f(a, this.options);
                    var g = this.render();
                    this._placeContainer(g);
                    var h = this.options.get("selectionAdapter");
                    this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);
                    var i = this.options.get("dropdownAdapter");
                    this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);
                    var j = this.options.get("resultsAdapter");
                    this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                    var k = this;
                    this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(a) {
                        k.trigger("selection:update", {
                            data: a
                        })
                    }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this)
                };
                return c.Extend(e, c.Observable), e.prototype._generateId = function(a) {
                    var b = "";
                    return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = "select2-" + b
                }, e.prototype._placeContainer = function(a) {
                    a.insertAfter(this.$element);
                    var b = this._resolveWidth(this.$element, this.options.get("width"));
                    null != b && a.css("width", b)
                }, e.prototype._resolveWidth = function(a, b) {
                    var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == b) {
                        var d = this._resolveWidth(a, "style");
                        return null != d ? d : this._resolveWidth(a, "element")
                    }
                    if ("element" == b) {
                        var e = a.outerWidth(!1);
                        return 0 >= e ? "auto" : e + "px"
                    }
                    if ("style" == b) {
                        var f = a.attr("style");
                        if ("string" != typeof f) return null;
                        for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
                            var j = g[h].replace(/\s/g, ""),
                                k = j.match(c);
                            if (null !== k && k.length >= 1) return k[1]
                        }
                        return null
                    }
                    return b
                }, e.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                }, e.prototype._registerDomEvents = function() {
                    var b = this;
                    this.$element.on("change.select2", function() {
                        b.dataAdapter.current(function(a) {
                            b.trigger("selection:update", {
                                data: a
                            })
                        })
                    }), this._sync = c.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
                    var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != d ? (this._observer = new d(function(c) {
                        a.each(c, b._sync)
                    }), this._observer.observe(this.$element[0], {
                        attributes: !0,
                        subtree: !1
                    })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", b._sync, !1)
                }, e.prototype._registerDataEvents = function() {
                    var a = this;
                    this.dataAdapter.on("*", function(b, c) {
                        a.trigger(b, c)
                    })
                }, e.prototype._registerSelectionEvents = function() {
                    var b = this,
                        c = ["toggle"];
                    this.selection.on("toggle", function() {
                        b.toggleDropdown()
                    }), this.selection.on("*", function(d, e) {
                        -1 === a.inArray(d, c) && b.trigger(d, e)
                    })
                }, e.prototype._registerDropdownEvents = function() {
                    var a = this;
                    this.dropdown.on("*", function(b, c) {
                        a.trigger(b, c)
                    })
                }, e.prototype._registerResultsEvents = function() {
                    var a = this;
                    this.results.on("*", function(b, c) {
                        a.trigger(b, c)
                    })
                }, e.prototype._registerEvents = function() {
                    var a = this;
                    this.on("open", function() {
                        a.$container.addClass("select2-container--open")
                    }), this.on("close", function() {
                        a.$container.removeClass("select2-container--open")
                    }), this.on("enable", function() {
                        a.$container.removeClass("select2-container--disabled")
                    }), this.on("disable", function() {
                        a.$container.addClass("select2-container--disabled")
                    }), this.on("focus", function() {
                        a.$container.addClass("select2-container--focus")
                    }), this.on("blur", function() {
                        a.$container.removeClass("select2-container--focus")
                    }), this.on("query", function(b) {
                        a.isOpen() || a.trigger("open"), this.dataAdapter.query(b, function(c) {
                            a.trigger("results:all", {
                                data: c,
                                query: b
                            })
                        })
                    }), this.on("query:append", function(b) {
                        this.dataAdapter.query(b, function(c) {
                            a.trigger("results:append", {
                                data: c,
                                query: b
                            })
                        })
                    }), this.on("keypress", function(b) {
                        var c = b.which;
                        a.isOpen() ? c === d.ENTER ? (a.trigger("results:select"), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle"), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous"), b.preventDefault()) : c === d.DOWN ? (a.trigger("results:next"), b.preventDefault()) : (c === d.ESC || c === d.TAB) && (a.close(), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || (c === d.DOWN || c === d.UP) && b.altKey) && (a.open(), b.preventDefault())
                    })
                }, e.prototype._syncAttributes = function() {
                    this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable")) : this.trigger("enable")
                }, e.prototype.trigger = function(a, b) {
                    var c = e.__super__.trigger,
                        d = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting"
                        };
                    if (a in d) {
                        var f = d[a],
                            g = {
                                prevented: !1,
                                name: a,
                                args: b
                            };
                        if (c.call(this, f, g), g.prevented) return void(b.prevented = !0)
                    }
                    c.call(this, a, b)
                }, e.prototype.toggleDropdown = function() {
                    this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                }, e.prototype.open = function() {
                    this.isOpen() || (this.trigger("query", {}), this.trigger("open"))
                }, e.prototype.close = function() {
                    this.isOpen() && this.trigger("close")
                }, e.prototype.isOpen = function() {
                    return this.$container.hasClass("select2-container--open")
                }, e.prototype.enable = function(a) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);
                    var b = !a[0];
                    this.$element.prop("disabled", b)
                }, e.prototype.data = function() {
                    this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var a = [];
                    return this.dataAdapter.current(function(b) {
                        a = b
                    }), a
                }, e.prototype.val = function(b) {
                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();
                    var c = b[0];
                    a.isArray(c) && (c = a.map(c, function(a) {
                        return a.toString()
                    })), this.$element.val(c).trigger("change")
                }, e.prototype.destroy = function() {
                    this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                }, e.prototype.render = function() {
                    var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b
                }, e
            }), b.define("jquery.select2", ["jquery", "require", "./select2/core", "./select2/defaults"], function(a, b, c, d) {
                if (b("jquery.mousewheel"), null == a.fn.select2) {
                    var e = ["open", "close", "destroy"];
                    a.fn.select2 = function(b) {
                        if (b = b || {}, "object" == typeof b) return this.each(function() {
                            {
                                var d = a.extend({}, b, !0);
                                new c(a(this), d)
                            }
                        }), this;
                        if ("string" == typeof b) {
                            var d = this.data("select2");
                            null == d && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2.");
                            var f = Array.prototype.slice.call(arguments, 1),
                                g = d[b](f);
                            return a.inArray(b, e) > -1 ? this : g
                        }
                        throw new Error("Invalid arguments for Select2: " + b)
                    }
                }
                return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
            }), b.define("jquery.mousewheel", ["jquery"], function(a) {
                return a
            }), {
                define: b.define,
                require: b.require
            }
        }(),
        c = b.require("jquery.select2");
    return a.fn.select2.amd = b, c
});