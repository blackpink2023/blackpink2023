// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__cid"
            }],
            "tags": [{
                "function": "__rep",
                "once_per_event": true,
                "vtp_containerId": ["macro", 1],
                "tag_id": 1
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ]
            ]
        },
        "runtime": []









    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ca, ea = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        fa = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: ea(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ia = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ja;
    if ("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
    else {
        var ka;
        a: {
            var la = {
                    a: !0
                },
                ma = {};
            try {
                ma.__proto__ = la;
                ka = ma.a;
                break a
            } catch (a) {}
            ka = !1
        }
        ja = ka ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var na = ja,
        oa = function(a, b) {
            a.prototype = ia(b.prototype);
            a.prototype.constructor = a;
            if (na) na(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.sm = b.prototype
        },
        pa = this || self,
        qa = function(a) {
            return a
        };
    var ra = function() {},
        sa = function(a) {
            return "function" === typeof a
        },
        h = function(a) {
            return "string" === typeof a
        },
        ta = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        ua = Array.isArray,
        va = function(a, b) {
            if (a && ua(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        xa = function(a, b) {
            if (!ta(a) || !ta(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        za = function(a, b) {
            for (var c = new ya, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        k = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Aa = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Ba = function(a) {
            return Math.round(Number(a)) || 0
        },
        Da = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Ea = function(a) {
            var b = [];
            if (ua(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Fa = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ga = function() {
            return new Date(Date.now())
        },
        Ha = function() {
            return Ga().getTime()
        },
        ya = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    ya.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    ya.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ia = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ja = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ka = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        La = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ma = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Na = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Oa = /^\w{1,9}$/,
        Pa = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            k(a, function(d, e) {
                Oa.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Ra = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };

    function Sa() {
        for (var a = Ta, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Ua() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Ta, Va;

    function Wa(a) {
        Ta = Ta || Ua();
        Va = Va || Sa();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | l >> 6,
                q = l & 63;
            e || (q = 64, d || (p = 64));
            b.push(Ta[m], Ta[n], Ta[p], Ta[q])
        }
        return b.join("")
    }

    function Xa(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Va[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Ta = Ta || Ua();
        Va = Va || Sa();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != l && (c += String.fromCharCode(g << 6 & 192 | l)))
        }
    };
    var Za = {},
        $a = function(a, b) {
            Za[a] = Za[a] || [];
            Za[a][b] = !0
        },
        ab = function() {
            delete Za.GA4_EVENT
        },
        bb = function(a) {
            var b = Za[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return Wa(c.join("")).replace(/\.+$/, "")
        };
    var cb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var db, eb = function() {
        if (void 0 === db) {
            var a = null,
                b = pa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: qa,
                        createScript: qa,
                        createScriptURL: qa
                    })
                } catch (c) {
                    pa.console && pa.console.error(c.message)
                }
                db = a
            } else db = a
        }
        return db
    };
    var fb = function(a) {
        this.h = a
    };
    fb.prototype.toString = function() {
        return this.h + ""
    };
    var gb = {};
    var hb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var ib, jb;
    a: {
        for (var kb = ["CLOSURE_FLAGS"], lb = pa, mb = 0; mb < kb.length; mb++)
            if (lb = lb[kb[mb]], null == lb) {
                jb = null;
                break a
            }
        jb = lb
    }
    var nb = jb && jb[610401301];
    ib = null != nb ? nb : !1;

    function ob() {
        var a = pa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var pb, qb = pa.navigator;
    pb = qb ? qb.userAgentData || null : null;

    function rb(a) {
        return ib ? pb ? pb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function sb(a) {
        return -1 != ob().indexOf(a)
    };

    function tb() {
        return ib ? !!pb && 0 < pb.brands.length : !1
    }

    function ub() {
        return tb() ? !1 : sb("Opera")
    }

    function vb() {
        return sb("Firefox") || sb("FxiOS")
    }

    function wb() {
        return tb() ? rb("Chromium") : (sb("Chrome") || sb("CriOS")) && !(tb() ? 0 : sb("Edge")) || sb("Silk")
    };
    var xb = {},
        yb = function(a) {
            this.h = a
        };
    yb.prototype.toString = function() {
        return this.h.toString()
    };
    var zb = function(a) {
        return a instanceof yb && a.constructor === yb ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function Ab(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };
    (function() {
        return ""
    }).toString().indexOf("`");

    function Bb(a) {
        var b = a = Cb(a),
            c = eb(),
            d = c ? c.createHTML(b) : b;
        return new yb(d, xb)
    }

    function Cb(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var z = window,
        C = document,
        Db = navigator,
        Eb = C.currentScript && C.currentScript.src,
        Fb = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        Gb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Hb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Ib = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Jb(a, b, c) {
        b && k(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Kb = function(a, b, c, d, e) {
            var f = C.createElement("script");
            Jb(f, d, Hb);
            f.type = "text/javascript";
            f.async = !0;
            var g, l = Cb(a),
                m = eb(),
                n = m ? m.createScriptURL(l) : l;
            g = new fb(n, gb);
            f.src = g instanceof fb && g.constructor === fb ? g.h : "type_error:TrustedResourceUrl";
            var p, q, r, t = null == (r = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : r.call(q, "script[nonce]");
            (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            Gb(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var u = C.getElementsByTagName("script")[0] || C.body || C.head;
                u.parentNode.insertBefore(f, u)
            }
            return f
        },
        Lb = function() {
            if (Eb) {
                var a = Eb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Nb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                l = !1;
            g || (g = C.createElement("iframe"), l = !0);
            Jb(g, c, Ib);
            d && k(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (l) {
                var m = C.body && C.body.lastChild || C.body ||
                    C.head;
                m.parentNode.insertBefore(g, m)
            }
            Gb(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        Ob = function(a, b, c, d) {
            var e = new Image(1, 1);
            Jb(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        Pb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Qb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        E = function(a) {
            z.setTimeout(a, 0)
        },
        Rb = function(a, b) {
            return a &&
                b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Sb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Tb = function(a) {
            var b = C.createElement("div"),
                c = b,
                d = Bb("A<div>" + a + "</div>");
            1 === c.nodeType && Ab(c);
            c.innerHTML = zb(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Ub = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f =
                    a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Vb = function(a) {
            var b;
            try {
                b = Db.sendBeacon && Db.sendBeacon(a)
            } catch (c) {
                $a("TAGGING", 15)
            }
            b || Ob(a)
        },
        Wb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Xb = function(a) {
            var b = {
                headers: {
                    "Attribution-Reporting-Eligible": "trigger"
                },
                keepalive: !0,
                attributionReporting: {
                    eventSourceEligible: !0,
                    triggerEligible: !0
                }
            };
            try {
                z.fetch(a, b)
            } catch (c) {}
        },
        Yb = function() {
            var a = z.performance;
            if (a && sa(a.now)) return a.now()
        },
        Zb = function() {
            return z.performance || void 0
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var $b = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        ac = function(a) {
            if (null == a) return String(a);
            var b = $b.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        bc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        G = function(a) {
            if (!a || "object" != ac(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !bc(a, "constructor") && !bc(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || bc(a, b)
        },
        J = function(a, b) {
            var c = b || ("array" == ac(a) ? [] : {}),
                d;
            for (d in a)
                if (bc(a, d)) {
                    var e = a[d];
                    "array" == ac(e) ? ("array" != ac(c[d]) && (c[d] = []), c[d] = J(e, c[d])) : G(e) ? (G(c[d]) || (c[d] = {}), c[d] = J(e, c[d])) : c[d] = e
                }
            return c
        };
    var cc = function(a) {
        if (void 0 === a || ua(a) || G(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };

    function dc(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    }

    function ec(a) {
        switch (a) {
            case 1:
                return "G";
            case 3:
                return "g";
            case 2:
                return "D";
            case 4:
                return "d";
            case 0:
                return "g";
            default:
                return "g"
        }
    }

    function fc(a, b) {
        var c = a[1] || 0,
            d = a[2] || 0;
        switch (b) {
            case 0:
                return "G1" + dc(c) + dc(d);
            case 1:
                return "G2" + ec(c) + ec(d);
            default:
                return "g1--"
        }
    };
    var gc = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Mi: a("consent"),
            Hg: a("convert_case_to"),
            Ig: a("convert_false_to"),
            Jg: a("convert_null_to"),
            Kg: a("convert_true_to"),
            Lg: a("convert_undefined_to"),
            Pl: a("debug_mode_metadata"),
            Ab: a("function"),
            Mf: a("instance_name"),
            Oj: a("live_only"),
            Pj: a("malware_disabled"),
            Qj: a("metadata"),
            Tj: a("original_activity_id"),
            Xl: a("original_vendor_template_id"),
            Wl: a("once_on_load"),
            Sj: a("once_per_event"),
            Nh: a("once_per_load"),
            bm: a("priority_override"),
            dm: a("respected_consent_types"),
            Rh: a("setup_tags"),
            xd: a("tag_id"),
            Wh: a("teardown_tags")
        }
    }();
    var Dc;
    var Ec = [],
        Fc = [],
        Gc = [],
        Hc = [],
        Ic = [],
        Jc = {},
        Kc, Lc, Nc = function() {
            var a = Mc;
            Lc = Lc || a
        },
        Pc = function() {
            for (var a = data.resource || {}, b = a.macros || [], c = 0; c < b.length; c++) Ec.push(b[c]);
            for (var d = a.tags || [], e = 0; e < d.length; e++) Hc.push(d[e]);
            for (var f = a.predicates || [], g = 0; g < f.length; g++) Gc.push(f[g]);
            for (var l = a.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], p = {}, q = 0; q < n.length; q++) {
                    var r = n[q][0];
                    p[r] = Array.prototype.slice.call(n[q], 1);
                    "if" !== r && "unless" !== r || Oc(p[r])
                }
                Fc.push(p)
            }
        },
        Oc = function(a) {},
        Qc, Rc = [],
        Sc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Jc[c],
                f = b && 2 === b.type && d.yi && e && -1 !== Rc.indexOf(c),
                g = {},
                l = {},
                m;
            for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.bi && d.bi(a[m]),
                e && (g[m] = a[m]), !e || f) && (l[m.substr(4)] = a[m]);
            e && d && d.ai && (g.vtp_gtmCachedValues = d.ai);
            if (b) {
                if (null == b.name) {
                    var n;
                    a: {
                        var p = b.index;
                        if (null == p) n = "";
                        else {
                            var q;
                            switch (b.type) {
                                case 2:
                                    q = Ec[p];
                                    break;
                                case 1:
                                    q = Hc[p];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var r = q && q[gc.Mf];
                            n = r ? String(r) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var t, u;
            e && (t = e(g));
            if (!e || f) u = Dc(c, l, b);
            f && t !== u && d && d.yi(d.id, c);
            return e ? t : u
        },
        Uc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Tc(a[e],
                b, c));
            return d
        },
        Tc = function(a, b, c) {
            if (ua(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Tc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = Ec[f];
                        if (!g || b.cg(g)) return;
                        c[f] = !0;
                        var l = String(g[gc.Mf]);
                        try {
                            var m = Uc(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Sc(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: l
                            });
                            Qc && (d = Qc.ik(d, m))
                        } catch (y) {
                            b.ni && b.ni(y, Number(f), l), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n =
                                1; n < a.length; n += 2) d[Tc(a[n], b, c)] = Tc(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = Tc(a[q], b, c);
                            Lc && (p = p || r === Lc.Ee);
                            d.push(r)
                        }
                        return Lc && p ? Lc.jk(d) : d.join("");
                    case "escape":
                        d = Tc(a[1], b, c);
                        if (Lc && ua(a[1]) && "macro" === a[1][0] && Lc.Mk(a)) return Lc.ol(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) hc[a[t]] && (d = hc[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Hc[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            hi: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] = a[1];
                        var w = Vc(v, b, c),
                            x = !!a[4];
                        return x || 2 !== w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Vc = function(a, b, c) {
            try {
                return Kc(Uc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Yc = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = Wc(a), f = 0; f < Fc.length; f++) {
                var g = Fc[f],
                    l = Xc(g, e);
                if (l) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === l && b(g.block || []);
            }
            for (var p = [], q = 0; q < Hc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Xc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var l = b(f[g]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        Wc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Vc(Gc[c], a));
                return b[c]
            }
        };
    var Zc = {
        ik: function(a, b) {
            b[gc.Hg] && "string" === typeof a && (a = 1 == b[gc.Hg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(gc.Jg) && null === a && (a = b[gc.Jg]);
            b.hasOwnProperty(gc.Lg) && void 0 === a && (a = b[gc.Lg]);
            b.hasOwnProperty(gc.Kg) && !0 === a && (a = b[gc.Kg]);
            b.hasOwnProperty(gc.Ig) && !1 === a && (a = b[gc.Ig]);
            return a
        }
    };
    var md = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"],
        nd = new ya;
    var ud = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function vd(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var xd = function(a) {
            return wd ? C.querySelectorAll(a) : null
        },
        yd = function(a, b) {
            if (!wd) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!C.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        zd = !1;
    if (C.querySelectorAll) try {
        var Ad = C.querySelectorAll(":root");
        Ad && 1 == Ad.length && Ad[0] == C.documentElement && (zd = !0)
    } catch (a) {}
    var wd = zd;
    var K = function(a) {
        $a("GTM", a)
    };
    var N = {
            g: {
                Yd: "ad_personalization",
                D: "ad_storage",
                Zd: "ad_user_data",
                K: "analytics_storage",
                Wb: "region",
                ae: "consent_updated",
                Dg: "wait_for_update",
                Qi: "ads",
                Ol: "all",
                Ri: "play",
                Si: "search",
                Ti: "youtube",
                Ui: "app_remove",
                Vi: "app_store_refund",
                Wi: "app_store_subscription_cancel",
                Xi: "app_store_subscription_convert",
                Yi: "app_store_subscription_renew",
                Mg: "add_payment_info",
                Ng: "add_shipping_info",
                Xb: "add_to_cart",
                Yb: "remove_from_cart",
                Og: "view_cart",
                Db: "begin_checkout",
                Zb: "select_item",
                Ua: "view_item_list",
                pb: "select_promotion",
                Va: "view_promotion",
                ra: "purchase",
                ac: "refund",
                Da: "view_item",
                Pg: "add_to_wishlist",
                Zi: "exception",
                aj: "first_open",
                bj: "first_visit",
                ia: "gtag.config",
                Ea: "gtag.get",
                cj: "in_app_purchase",
                bc: "page_view",
                dj: "screen_view",
                ej: "session_start",
                fj: "timing_complete",
                gj: "track_social",
                ce: "user_engagement",
                qb: "gclid",
                ja: "ads_data_redaction",
                X: "allow_ad_personalization_signals",
                de: "allow_custom_scripts",
                pf: "allow_display_features",
                ee: "allow_enhanced_conversions",
                rb: "allow_google_signals",
                za: "allow_interest_groups",
                ij: "app_id",
                jj: "app_installer_id",
                kj: "app_name",
                lj: "app_version",
                fc: "auid",
                mj: "auto_detection_enabled",
                Eb: "aw_remarketing",
                qf: "aw_remarketing_only",
                fe: "discount",
                he: "aw_feed_country",
                ie: "aw_feed_language",
                R: "items",
                je: "aw_merchant_id",
                Qg: "aw_basket_type",
                Mc: "campaign_content",
                Nc: "campaign_id",
                Oc: "campaign_medium",
                Pc: "campaign_name",
                Qc: "campaign",
                Rc: "campaign_source",
                Sc: "campaign_term",
                Wa: "client_id",
                nj: "content_group",
                oj: "content_type",
                Fa: "conversion_cookie_prefix",
                Tc: "conversion_id",
                sa: "conversion_linker",
                Fb: "conversion_api",
                Ja: "cookie_domain",
                Aa: "cookie_expires",
                Ka: "cookie_flags",
                hc: "cookie_name",
                Uc: "cookie_path",
                Ga: "cookie_prefix",
                Ya: "cookie_update",
                sb: "country",
                na: "currency",
                ke: "customer_lifetime_value",
                ic: "custom_map",
                Rg: "gcldc",
                pj: "debug_mode",
                T: "developer_id",
                qj: "disable_merchant_reported_purchases",
                jc: "dc_custom_params",
                Sg: "dc_natural_search",
                Tg: "dynamic_event_settings",
                Ug: "affiliation",
                me: "checkout_option",
                rf: "checkout_step",
                Vg: "coupon",
                Vc: "item_list_name",
                tf: "list_name",
                rj: "promotions",
                Wc: "shipping",
                uf: "tax",
                ne: "engagement_time_msec",
                Xc: "enhanced_client_id",
                Yc: "enhanced_conversions",
                Wg: "enhanced_conversions_automatic_settings",
                oe: "estimated_delivery_date",
                vf: "euid_logged_in_state",
                kc: "event_callback",
                sj: "event_category",
                tb: "event_developer_id_string",
                tj: "event_label",
                Xg: "event",
                pe: "event_settings",
                qe: "event_timeout",
                uj: "description",
                vj: "fatal",
                wj: "experiments",
                wf: "firebase_id",
                se: "first_party_collection",
                te: "_x_20",
                Gb: "_x_19",
                Yg: "fledge",
                Zg: "flight_error_code",
                ah: "flight_error_message",
                bh: "fl_activity_category",
                eh: "fl_activity_group",
                xf: "fl_advertiser_id",
                fh: "fl_ar_dedupe",
                gh: "fl_random_number",
                hh: "tran",
                ih: "u",
                ue: "gac_gclid",
                mc: "gac_wbraid",
                jh: "gac_wbraid_multiple_conversions",
                kh: "ga_restrict_domain",
                yf: "ga_temp_client_id",
                ve: "gdpr_applies",
                lh: "geo_granularity",
                Za: "value_callback",
                La: "value_key",
                Rl: "google_ono",
                ab: "google_signals",
                mh: "google_tld",
                we: "groups",
                nh: "gsa_experiment_id",
                oh: "iframe_state",
                xe: "ignore_referrer",
                zf: "internal_traffic_results",
                vb: "is_legacy_converted",
                wb: "is_legacy_loaded",
                ye: "is_passthrough",
                wa: "language",
                Af: "legacy_developer_id_string",
                xa: "linker",
                nc: "accept_incoming",
                xb: "decorate_forms",
                N: "domains",
                Hb: "url_position",
                ph: "method",
                xj: "name",
                Zc: "new_customer",
                qh: "non_interaction",
                yj: "optimize_id",
                zj: "page_hostname",
                ad: "page_path",
                Ba: "page_referrer",
                yb: "page_title",
                rh: "passengers",
                sh: "phone_conversion_callback",
                Aj: "phone_conversion_country_code",
                th: "phone_conversion_css_class",
                Bj: "phone_conversion_ids",
                uh: "phone_conversion_number",
                vh: "phone_conversion_options",
                oc: "quantity",
                bd: "redact_device_info",
                Bf: "redact_enhanced_user_id",
                Cj: "redact_ga_client_id",
                Dj: "redact_user_id",
                ze: "referral_exclusion_definition",
                Ib: "restricted_data_processing",
                Ej: "retoken",
                Fj: "sample_rate",
                Cf: "screen_name",
                zb: "screen_resolution",
                Gj: "search_term",
                Ma: "send_page_view",
                Jb: "send_to",
                Ae: "server_container_url",
                dd: "session_duration",
                Be: "session_engaged",
                Df: "session_engaged_time",
                cb: "session_id",
                Ce: "session_number",
                ed: "delivery_postal_code",
                wh: "temporary_client_id",
                Ef: "topmost_url",
                Hj: "tracking_id",
                Ff: "traffic_type",
                ka: "transaction_id",
                qc: "transport_url",
                xh: "trip_type",
                sc: "update",
                eb: "url_passthrough",
                fd: "_user_agent_architecture",
                gd: "_user_agent_bitness",
                hd: "_user_agent_full_version_list",
                jd: "_user_agent_mobile",
                kd: "_user_agent_model",
                ld: "_user_agent_platform",
                md: "_user_agent_platform_version",
                nd: "_user_agent_wow64",
                la: "user_data",
                yh: "user_data_auto_latency",
                zh: "user_data_auto_meta",
                Ah: "user_data_auto_multi",
                Bh: "user_data_auto_selectors",
                Ch: "user_data_auto_status",
                Gf: "user_data_mode",
                Hf: "user_data_settings",
                ya: "user_id",
                Na: "user_properties",
                Dh: "us_privacy_string",
                Z: "value",
                uc: "wbraid",
                Eh: "wbraid_multiple_conversions",
                Kh: "_host_name",
                Lh: "_in_page_command",
                Mh: "_is_passthrough_cid",
                Ge: "non_personalized_ads",
                wd: "_sst_parameters",
                Xa: "conversion_label",
                oa: "page_location",
                ub: "global_developer_id_string",
                De: "tc_privacy_string"
            }
        },
        Yd = {},
        Zd = Object.freeze((Yd[N.g.X] = 1, Yd[N.g.pf] = 1, Yd[N.g.ee] = 1, Yd[N.g.rb] = 1, Yd[N.g.R] = 1, Yd[N.g.Ja] = 1, Yd[N.g.Aa] = 1, Yd[N.g.Ka] = 1, Yd[N.g.hc] = 1, Yd[N.g.Uc] = 1, Yd[N.g.Ga] = 1, Yd[N.g.Ya] = 1, Yd[N.g.ic] = 1, Yd[N.g.T] = 1, Yd[N.g.Tg] = 1,
            Yd[N.g.kc] = 1, Yd[N.g.pe] = 1, Yd[N.g.qe] = 1, Yd[N.g.se] = 1, Yd[N.g.kh] = 1, Yd[N.g.ab] = 1, Yd[N.g.mh] = 1, Yd[N.g.we] = 1, Yd[N.g.zf] = 1, Yd[N.g.vb] = 1, Yd[N.g.wb] = 1, Yd[N.g.xa] = 1, Yd[N.g.Bf] = 1, Yd[N.g.ze] = 1, Yd[N.g.Ib] = 1, Yd[N.g.Ma] = 1, Yd[N.g.Jb] = 1, Yd[N.g.Ae] = 1, Yd[N.g.dd] = 1, Yd[N.g.Df] = 1, Yd[N.g.ed] = 1, Yd[N.g.qc] = 1, Yd[N.g.sc] = 1, Yd[N.g.Hf] = 1, Yd[N.g.Na] = 1, Yd[N.g.wd] = 1, Yd));
    Object.freeze([N.g.oa, N.g.Ba, N.g.yb, N.g.wa, N.g.Cf, N.g.ya, N.g.wf, N.g.nj]);
    var $d = {},
        ae = Object.freeze(($d[N.g.Ui] = 1, $d[N.g.Vi] = 1, $d[N.g.Wi] = 1, $d[N.g.Xi] = 1, $d[N.g.Yi] = 1, $d[N.g.aj] = 1, $d[N.g.bj] = 1, $d[N.g.cj] = 1, $d[N.g.ej] = 1, $d[N.g.ce] = 1, $d)),
        be = {},
        ce = Object.freeze((be[N.g.Mg] = 1, be[N.g.Ng] = 1, be[N.g.Xb] = 1, be[N.g.Yb] = 1, be[N.g.Og] = 1, be[N.g.Db] = 1, be[N.g.Zb] = 1, be[N.g.Ua] = 1, be[N.g.pb] = 1, be[N.g.Va] = 1, be[N.g.ra] = 1, be[N.g.ac] = 1, be[N.g.Da] = 1, be[N.g.Pg] = 1, be)),
        de = Object.freeze([N.g.X, N.g.rb, N.g.Ya]),
        ee = Object.freeze([].concat(de)),
        fe = Object.freeze([N.g.Aa, N.g.qe, N.g.dd, N.g.Df, N.g.ne]),
        ge = Object.freeze([].concat(fe)),
        he = {},
        ie = (he[N.g.D] = "1", he[N.g.K] = "2", he),
        je = {},
        ke = Object.freeze((je[N.g.X] = 1, je[N.g.ee] = 1, je[N.g.za] = 1, je[N.g.Eb] = 1, je[N.g.qf] = 1, je[N.g.fe] = 1, je[N.g.he] = 1, je[N.g.ie] = 1, je[N.g.R] = 1, je[N.g.je] = 1, je[N.g.Fa] = 1, je[N.g.sa] = 1, je[N.g.Ja] = 1, je[N.g.Aa] = 1, je[N.g.Ka] = 1, je[N.g.Ga] = 1, je[N.g.na] = 1, je[N.g.ke] = 1, je[N.g.T] = 1, je[N.g.qj] = 1, je[N.g.Yc] = 1, je[N.g.oe] = 1, je[N.g.wf] = 1, je[N.g.se] = 1, je[N.g.vb] = 1, je[N.g.wb] = 1, je[N.g.wa] = 1, je[N.g.Zc] = 1, je[N.g.oa] = 1, je[N.g.Ba] = 1, je[N.g.sh] = 1, je[N.g.th] =
            1, je[N.g.uh] = 1, je[N.g.vh] = 1, je[N.g.Ib] = 1, je[N.g.Ma] = 1, je[N.g.Jb] = 1, je[N.g.Ae] = 1, je[N.g.ed] = 1, je[N.g.ka] = 1, je[N.g.qc] = 1, je[N.g.sc] = 1, je[N.g.eb] = 1, je[N.g.la] = 1, je[N.g.ya] = 1, je[N.g.Z] = 1, je));
    Object.freeze(N.g);
    var me = {},
        ne = z.google_tag_manager = z.google_tag_manager || {},
        oe = Math.random();
    me.Nf = "36s0";
    me.vd = Number("0") || 0;
    me.da = "dataLayer";
    me.Oi = "ChEI8MyZpQYQrZ3zwczQoP/0ARInAMxgZnDi0EKlFNqaW0uiaT5GH2T+4K7qAcAnR/ShmwQ+9DZIcVGGGgLezA\x3d\x3d";
    var pe = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        qe = {
            __paused: 1,
            __tg: 1
        },
        re;
    for (re in pe) pe.hasOwnProperty(re) && (qe[re] = 1);
    var se = Da(""),
        te, ue = !1;
    ue = !0;
    te = ue;
    var ve, we = !1;
    ve = we;
    var xe, ye = !1;
    xe = ye;
    var ze, Ae = !1;
    ze = Ae;
    me.be = "www.googletagmanager.com";
    var Be = "" + me.be + (te ? "/gtag/js" : "/gtm.js"),
        Ce = null,
        De = null,
        Ee = {},
        Fe = {},
        Ge = {},
        He = function() {
            var a = ne.sequence || 1;
            ne.sequence = a + 1;
            return a
        };
    me.Ni = "";
    var Ie = "";
    me.Ke = Ie;
    var Je = new ya,
        Ke = {},
        Le = {},
        Oe = {
            name: me.da,
            set: function(a, b) {
                J(Na(a, b), Ke);
                Me()
            },
            get: function(a) {
                return Ne(a, 2)
            },
            reset: function() {
                Je = new ya;
                Ke = {};
                Me()
            }
        },
        Ne = function(a, b) {
            return 2 != b ? Je.get(a) : Pe(a)
        },
        Pe = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Ke, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Qe = function(a, b) {
            Le.hasOwnProperty(a) || (Je.set(a, b), J(Na(a, b), Ke), Me())
        },
        Me = function(a) {
            k(Le, function(b, c) {
                Je.set(b, c);
                J(Na(b), Ke);
                J(Na(b,
                    c), Ke);
                a && delete Le[b]
            })
        },
        Re = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Pe(a) : Je.get(a);
            "array" === ac(d) || "object" === ac(d) ? c = J(d) : c = d;
            return c
        };
    var Se = [],
        Te = function(a) {
            return void 0 == Se[a] ? !1 : Se[a]
        };
    var O = [];
    O[5] = !0;
    O[6] = !0;
    O[13] = !0;
    O[14] = !0;
    O[7] = !0;
    O[8] = !0;
    O[23] = !0;
    O[9] = !0;
    O[10] = !0;
    O[12] = !0;
    O[16] = !0;
    O[17] = !0;
    O[19] = !0;
    O[25] = !0;
    O[26] = !0;
    O[27] = !0;
    O[30] = !0;
    O[31] = !0;
    O[34] = !0;
    O[36] = !0;
    O[35] = !0;
    O[37] = !0;
    O[38] = !0;
    O[40] = !0;
    O[41] = !0;
    O[43] = !0;
    O[45] = !0;
    O[46] = !0;
    O[47] = !0;
    O[48] = !0;


    O[58] = !0;
    O[60] = !0;
    O[61] = !0;
    O[62] = !0;
    O[65] = !0;
    O[68] = !0;
    O[70] = !0;
    O[71] = !0;
    O[73] = !0;
    O[75] = !0;
    O[76] = !0;
    O[78] = !0;


    O[88] = !0;

    function P(a) {
        return !!O[a]
    }
    var Ue = function(a) {
        $a("HEALTH", a)
    };
    var Ve;
    try {
        Ve = JSON.parse(Xa("eyIwIjoiVk4iLCIxIjoiVk4tU0ciLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20udm4iLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiIifQ"))
    } catch (a) {
        K(123), Ue(2), Ve = {}
    }
    var We = function() {
            var a = !1;
            return a
        },
        Xe = function() {
            return !!Ve["6"]
        },
        Ye = function() {
            var a = "";
            return a
        },
        Ze = function() {
            var a = !1;
            return a
        },
        $e = function() {
            var a = "";
            return a
        };
    var af, bf = !1,
        cf = function(a) {
            if (!bf) {
                bf = !0;
                af = af || {}
            }
            return af[a]
        };
    var df = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        ef = function(a) {
            if (C.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
            var c = z.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var l = g.indexOf("opacity(");
                    0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = z.getComputedStyle(d, null))
            }
            return !1
        };
    var of = /:[0-9]+$/, pf = /^\d+\.fls\.doubleclick\.net$/, sf = function(a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                var g = f.slice(1).join("=");
                return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
            }
        }
    }, vf = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b) a.protocol = tf(a.protocol) || tf(z.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" ===
            a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace( of , "").toLowerCase());
        return uf(a, b, c, d, e)
    }, uf = function(a, b, c, d, e) {
        var f, g = tf(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = wf(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace( of , "").toLowerCase();
                if (c) {
                    var l = /^www\d*\./.exec(f);
                    l && l[0] && (f = f.substr(l[0].length))
                }
                break;
            case "port":
                f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                break;
            case "path":
                a.pathname ||
                    a.hostname || $a("TAGGING", 1);
                f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                var m = f.split("/");
                0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                f = m.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = sf(f, e));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = 1 < n.length ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }, tf = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }, wf = function(a) {
        var b = "";
        if (a &&
            a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }, xf = function(a) {
        var b = C.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || $a("TAGGING", 1), c = "/" + c);
        var d = b.hostname.replace( of , "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }, yf = function(a) {
        function b(n) {
            var p = n.split("=")[0];
            return 0 > d.indexOf(p) ? n : p + "=0"
        }

        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return void 0 !== p
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
            e = xf(a),
            f = a.split(/[?#]/)[0],
            g = e.search,
            l = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === l[0] && (l = l.substring(1));
        g = c(g);
        l = c(l);
        "" !== g && (g = "?" + g);
        "" !== l && (l = "#" + l);
        var m = "" + f + g + l;
        "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
        return m
    }, zf = function(a) {
        var b = xf(z.location.href),
            c = vf(b, "host", !1);
        if (c && c.match(pf)) {
            var d = vf(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    };
    var vg = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var wg = function(a) {
        wg[" "](a);
        return a
    };
    wg[" "] = function() {};
    var yg = function() {
        var a = xg,
            b = "Zf";
        if (a.Zf && a.hasOwnProperty(b)) return a.Zf;
        var c = new a;
        return a.Zf = c
    };
    var xg = function() {
        var a = {};
        this.h = function() {
            var b = vg.h,
                c = vg.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.m = function() {
            a[vg.h] = !0
        }
    };
    var zg = !1,
        Ag = !1,
        Bg = [],
        Cg = {},
        Dg = {},
        Eg = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_personalization: !1
        };

    function Fg() {
        var a = Fb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            cps: {},
            default: Gg,
            update: Hg,
            declare: Ig,
            implicit: Jg,
            addListener: Kg,
            notifyListeners: Lg,
            setCps: Mg,
            active: !1,
            usedDeclare: !1,
            usedDefault: !1,
            usedUpdate: !1,
            usedImplicit: !1,
            usedSetCps: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function Ng(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }

    function Ig(a, b, c, d, e) {
        var f = Fg();
        f.active = !0;
        f.usedDeclare = !0;
        var g = f.entries,
            l = g[a] || {},
            m = l.declare_region,
            n = c && h(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Ng(n, m, d, e)) {
            var p = {
                region: l.region,
                declare_region: n,
                declare: "granted" === b,
                implicit: l.implicit,
                default: l.default,
                update: l.update,
                quiet: l.quiet
            };
            if ("" !== d || !1 !== l.declare) g[a] = p
        }
    }

    function Jg(a, b) {
        var c = Fg();
        c.active = !0;
        c.usedImplicit = !0;
        var d = c.entries,
            e = d[a] = d[a] || {};
        !1 !== e.implicit && (e.implicit = "granted" === b)
    }

    function Gg(a, b, c, d, e, f) {
        var g = Fg();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        $a("TAGGING", 19);
        if (void 0 == b) $a("TAGGING", 18);
        else {
            var l = g.entries,
                m = l[a] || {},
                n = m.region,
                p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if (Ng(p, n, d, e)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    r = {
                        region: p,
                        declare_region: m.declare_region,
                        implicit: m.implicit,
                        default: "granted" === b,
                        declare: m.declare,
                        update: m.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== m.default) l[a] =
                    r;
                q && z.setTimeout(function() {
                    if (l[a] === r && r.quiet) {
                        r.quiet = !1;
                        var t = [a];
                        if (Te(4))
                            for (var u in Cg) Cg.hasOwnProperty(u) && Cg[u] === a && t.push(u);
                        for (var v = 0; v < t.length; v++) Og(t[v]);
                        Lg();
                        $a("TAGGING", 2)
                    }
                }, f)
            }
        }
    }

    function Hg(a, b) {
        var c = Fg();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Pg(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Pg(c, a),
                l = [a];
            if (Te(4))
                for (var m in Cg) Cg.hasOwnProperty(m) && Cg[m] === a && l.push(m);
            if (f.quiet) {
                f.quiet = !1;
                for (var n = 0; n < l.length; n++) Og(l[n])
            } else if (g !== d)
                for (var p = 0; p < l.length; p++) Og(l[p])
        }
    }

    function Mg(a, b, c, d, e) {
        var f = Fg(),
            g;
        a: {
            var l = f.cps,
                m, n = l[a] || {},
                p = n.region,
                q = c && h(c) ? c.toUpperCase() : void 0;m = d.toUpperCase();
            if (Ng(q, p, m, e.toUpperCase())) {
                var r = {
                    enabled: "granted" === b,
                    region: q
                };
                if ("" !== m || !1 !== n.enabled) {
                    l[a] = r;
                    g = !0;
                    break a
                }
            }
            g = !1
        }
        g && (f.usedSetCps = !0)
    }

    function Kg(a, b) {
        Bg.push({
            consentTypes: a,
            rk: b
        })
    }

    function Og(a) {
        for (var b = 0; b < Bg.length; ++b) {
            var c = Bg[b];
            ua(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.si = !0)
        }
    }

    function Lg(a, b) {
        for (var c = 0; c < Bg.length; ++c) {
            var d = Bg[c];
            if (d.si) {
                d.si = !1;
                try {
                    d.rk({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function Pg(a, b) {
        var c = a.entries,
            d = c[b] || {},
            e = d.update;
        if (void 0 !== e) return e ? 1 : 2;
        e = d.default;
        if (void 0 !== e) return e ? 1 : 2;
        if (Te(4) && Cg.hasOwnProperty(b)) {
            var f = c[Cg[b]] || {};
            e = f.update;
            if (void 0 !== e) return e ? 1 : 2;
            e = f.default;
            if (void 0 !== e) return e ? 1 : 2
        }
        e = d.declare;
        return void 0 !== e ? e ? 1 : 2 : Te(4) && (e = d.implicit, void 0 !== e) ? e ? 3 : 4 : Te(3) && Eg.hasOwnProperty(b) ? Eg[b] ? 3 : 4 : 0
    }
    var Qg = function(a) {
            var b = Fg();
            b.accessedAny = !0;
            switch (Pg(b, a)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        },
        Rg = function(a) {
            var b = Fg();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Sg = function() {
            if (!yg().h()) return !1;
            var a = Fg();
            a.accessedAny = !0;
            return a.active
        },
        Tg = function() {
            var a = Fg();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Ug = function(a, b) {
            Fg().addListener(a, b)
        },
        Vg = function(a, b) {
            Fg().notifyListeners(a, b)
        },
        Wg = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Rg(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Ug(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Xg = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var l = d[g];
                    Qg(l) && !e[l] && (f.push(l), e[l] = !0)
                }
                return f
            }
            var d = h(b) ? [b] : b,
                e = {};
            c().length !== d.length && Ug(d, function(f) {
                var g = c();
                0 < g.length && (f.consentTypes = g, a(f))
            })
        };

    function Yg() {}

    function Zg() {};
    var $g = [N.g.D, N.g.K, N.g.Zd, N.g.Yd],
        ah = function(a) {
            for (var b = a[N.g.Wb], c = Array.isArray(b) ? b : [b], d = {
                    Gc: 0
                }; d.Gc < c.length; d = {
                    Gc: d.Gc
                }, ++d.Gc) k(a, function(e) {
                return function(f, g) {
                    if (f !== N.g.Wb) {
                        var l = c[e.Gc],
                            m = Ve["0"] || "",
                            n = Ve["1"] || "";
                        Ag = !0;
                        zg && $a("TAGGING", 20);
                        Fg().declare(f, g, l, m, n)
                    }
                }
            }(d))
        },
        bh = function(a) {
            var b = a[N.g.Wb];
            b && K(40);
            var c = a[N.g.Dg];
            c && K(41);
            for (var d = ua(b) ? b : [b], e = {
                    Hc: 0
                }; e.Hc < d.length; e = {
                    Hc: e.Hc
                }, ++e.Hc) k(a, function(f) {
                return function(g, l) {
                    if (g !== N.g.Wb && g !== N.g.Dg) {
                        var m = d[f.Hc],
                            n = Number(c),
                            p = Ve["0"] || "",
                            q = Ve["1"] || "";
                        zg = !0;
                        Ag && $a("TAGGING", 20);
                        Fg().default(g, l, m, p, q, n)
                    }
                }
            }(e))
        },
        ch = function(a, b) {
            k(a, function(c, d) {
                zg = !0;
                Ag && $a("TAGGING", 20);
                Fg().update(c, d)
            });
            Vg(b.eventId, b.priorityId)
        },
        dh = function(a) {
            for (var b = a[N.g.Wb], c = Array.isArray(b) ? b : [b], d = {
                    Ic: 0
                }; d.Ic < c.length; d = {
                    Ic: d.Ic
                }, ++d.Ic) k(a, function(e) {
                return function(f, g) {
                    if (f !== N.g.Wb) {
                        var l = c[e.Ic],
                            m = Ve["0"] || "",
                            n = Ve["1"] || "";
                        Fg().setCps(f, g, l, m, n)
                    }
                }
            }(d))
        },
        eh = function() {
            return Qg(N.g.Zd) ? Xe() || Fg().usedSetCps : !1
        },
        lh = function(a, b) {
            Xg(a,
                b)
        },
        mh = function(a, b) {
            Wg(a, b)
        },
        nh = function() {
            if (P(50)) {
                for (var a = Ve["7"], b = a ? a.split("|") : [], c = {}, d = 0; d < b.length; d++) c[b[d]] = !0;
                for (var e = 0; e < $g.length; e++) {
                    var f = $g[e],
                        g = c[f] ? "granted" : "denied";
                    Fg().implicit(f, g)
                }
            }
        };
    var oh = function(a) {
            var b = String(a[gc.Ab] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        ph = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var rh = function(a) {
            var b = qh();
            b.pending || (b.pending = []);
            va(b.pending, function(c) {
                return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination
            }) || b.pending.push({
                target: a,
                onLoad: void 0
            })
        },
        sh = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {};
            this.pending = [];
            this.siloed = []
        },
        qh = function() {
            var a = Fb("google_tag_data", {}),
                b = a.tidr;
            b || (b = new sh, a.tidr = b);
            return b
        };
    var th = {},
        uh = !1,
        vh = {
            ctid: "UA-44294974-16",
            Oe: "",
            Xe: "UA-44294974-16",
            ri: "UA-44294974-16"
        };
    th.Fe = Da("");
    var wh = function() {
            return P(81) ? uh : !1
        },
        yh = function() {
            var a = vh.Xe ? vh.Xe.split("|") : [vh.ctid];
            return wh() ? a.map(xh) : a
        },
        Ah = function() {
            var a = zh();
            return wh() ? a.map(xh) : a
        },
        Ch = function() {
            return Bh(vh.ctid)
        },
        Dh = function(a) {
            return a ? vh.Oe : Bh(vh.Oe || "_" + vh.ctid)
        },
        zh = function() {
            return vh.ri ? vh.ri.split("|") : []
        },
        Eh = function(a) {
            var b = qh();
            return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
        },
        Bh = function(a) {
            return P(81) ? wh() ? xh(a) : a : a
        },
        xh = function(a) {
            return P(81) ? "siloed_" + a : a
        },
        Fh = function(a) {
            if (!P(81)) return a;
            a = String(a);
            return wh() && 0 === a.indexOf("siloed_") ? a.substring(7) : a
        },
        Gh = function() {
            if (P(81)) {
                var a = !1;
                a = !0;
                if (a) {
                    var b = qh();
                    if (b.siloed) {
                        for (var c = [], d = vh.Xe ? vh.Xe.split("|") : [vh.ctid], e = zh(), f = {}, g = 0; g < b.siloed.length; f = {
                                Ec: f.Ec
                            }, g++) f.Ec = b.siloed[g], !wh() && va(f.Ec.isDestination ? e : d, function(l) {
                            return function(m) {
                                return m === l.Ec.ctid
                            }
                        }(f)) ? uh = !0 : c.push(f.Ec);
                        b.siloed = c
                    }
                }
            }
        };

    function Hh() {
        var a = qh();
        if (a.pending) {
            for (var b, c = [], d = !1, e = yh(), f = Ah(), g = {}, l = 0; l < a.pending.length; g = {
                    Ub: g.Ub
                }, l++) g.Ub = a.pending[l], va(g.Ub.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.Ub.target.ctid
                }
            }(g)) ? d || (b = g.Ub.onLoad, d = !0) : c.push(g.Ub);
            a.pending = c;
            if (b) try {
                b(Dh())
            } catch (m) {}
        }
    }
    var Ih = function() {
            for (var a = qh(), b = yh(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                d ? (d.state = 2, d.containers = yh(), d.destinations = Ah()) : a.container[b[c]] = {
                    state: 2,
                    containers: yh(),
                    destinations: Ah()
                }
            }
            for (var e = Ah(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && K(93);
                g ? (g.state = 2, g.containers = yh(), g.destinations = Ah()) : a.destination[e[f]] = {
                    state: 2,
                    containers: yh(),
                    destinations: Ah()
                }
            }
            P(75) && (a.canonical[Dh()] = {});
            Hh()
        },
        Jh = function() {
            var a = Dh();
            return !!qh().canonical[a]
        },
        Kh = function(a) {
            return !!qh().container[a]
        },
        Lh = function() {
            return {
                ctid: Ch(),
                isDestination: th.Fe
            }
        };

    function Mh(a) {
        if (P(81)) {
            var b = qh();
            (b.siloed = b.siloed || []).push(a)
        }
    }
    var Nh = function() {
            var a = qh().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        Oh = function() {
            var a = {};
            k(qh().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        };
    var Ph = {
            sampleRate: "0.005000",
            Ji: "",
            Ii: Number("5"),
            vm: Number("")
        },
        Qh = [];

    function Rh(a) {
        Qh.push(a)
    }
    var Sh = !1,
        Th;
    if (!(Th = ph)) {
        var Uh = Math.random(),
            Vh = Ph.sampleRate;
        Th = Uh < Number(Vh)
    }
    var Wh = Th,
        Xh = "https://www.googletagmanager.com/a?id=" + vh.ctid,
        Yh = void 0,
        Zh = {},
        $h = void 0,
        ai = new function() {
            var a = 5;
            0 < Ph.Ii && (a = Ph.Ii);
            this.h = 0;
            this.B = [];
            this.m = a
        },
        bi = 1E3;

    function ci(a) {
        var b = Yh;
        if (void 0 === b) return "";
        for (var c = [Xh], d = 0; d < Qh.length; d++) {
            var e = Qh[d]({
                eventId: b,
                kb: !!a,
                Bi: function() {
                    Sh = !0
                }
            });
            "&" === e[0] && c.push(e)
        }
        c.push("&z=0");
        return c.join("")
    }

    function di() {
        $h && (z.clearTimeout($h), $h = void 0);
        if (void 0 !== Yh && ei) {
            var a;
            (a = Zh[Yh]) || (a = ai.h < ai.m ? !1 : 1E3 > Ha() - ai.B[ai.h % ai.m]);
            if (a || 0 >= bi--) K(1), Zh[Yh] = !0;
            else {
                var b = ai.h++ % ai.m;
                ai.B[b] = Ha();
                var c = ci(!0);
                Ob(c);
                if (Sh) {
                    var d = c.replace("/a?", "/td?");
                    Ob(d)
                }
                ei = Sh = !1
            }
        }
    }
    var ei = !1;

    function fi(a) {
        Zh[a] || (a !== Yh && (di(), Yh = a), ei = !0, $h || ($h = z.setTimeout(di, 500)), 2022 <= ci().length && di())
    }
    var gi = xa();

    function hi() {
        gi = xa()
    }

    function ii() {
        return ["&v=3&t=t", "&pid=" + gi].join("")
    };
    var ji = function(a, b, c, d, e, f, g, l, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.I = d;
            this.m = e;
            this.F = f;
            this.U = g;
            this.B = l;
            this.eventMetadata = m;
            this.M = n;
            this.O = p;
            this.isGtmEvent = q
        },
        S = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.I[b]) return a.I[b];
            if (void 0 !== a.m[b]) return a.m[b];
            Wh && ki(a, a.F[b], a.U[b]) && (K(71), K(79));
            return void 0 !== a.F[b] ? a.F[b] : void 0 !== a.B[b] ? a.B[b] : c
        },
        li = function(a) {
            function b(g) {
                for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1
            }
            var c = {};
            b(a.h);
            b(a.I);
            b(a.m);
            b(a.F);
            if (Wh)
                for (var d = Object.keys(a.U), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        K(71);
                        K(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        mi = function(a, b, c) {
            function d(m) {
                G(m) && k(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.B[b]), d(a.F[b]), d(a.m[b]), d(a.I[b]));
            c && 2 !== c || d(a.h[b]);
            if (Wh) {
                var g = f,
                    l = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.B[b]), d(a.U[b]), d(a.m[b]), d(a.I[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || ki(a, e, l)) K(71), K(81);
                f = g;
                e = l
            }
            return f ? e :
                void 0
        },
        ni = function(a) {
            var b = [N.g.Qc, N.g.Mc, N.g.Nc, N.g.Oc, N.g.Pc, N.g.Rc, N.g.Sc],
                c = {},
                d = !1,
                e = function(l) {
                    for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.I) || e(a.m)) return c;
            e(a.F);
            if (Wh) {
                var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.U);
                ki(a, c, f) && (K(71), K(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.B);
            return c
        },
        ki = function(a, b, c) {
            if (!Wh) return !1;
            try {
                if (b === c) return !1;
                var d = ac(b);
                if (d !== ac(c) || !(G(b) && G(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e =
                            0; e < b.length; e++)
                        if (ki(a, b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || ki(a, b[g], c[g])) return !0
                }
            } catch (l) {
                K(72)
            }
            return !1
        },
        oi = function(a, b) {
            this.Kf = a;
            this.Kj = b;
            this.F = {};
            this.qd = {};
            this.h = {};
            this.I = {};
            this.m = {};
            this.pd = {};
            this.B = {};
            this.Lc = function() {};
            this.Cb = function() {};
            this.U = !1
        },
        pi = function(a, b) {
            a.F = b;
            return a
        },
        qi = function(a, b) {
            a.qd = b;
            return a
        },
        ri = function(a, b) {
            a.h = b;
            return a
        },
        si = function(a, b) {
            a.I = b;
            return a
        },
        ti = function(a, b) {
            a.m =
                b;
            return a
        },
        ui = function(a, b) {
            a.pd = b;
            return a
        },
        vi = function(a, b) {
            a.B = b || {};
            return a
        },
        wi = function(a, b) {
            a.Lc = b;
            return a
        },
        xi = function(a, b) {
            a.Cb = b;
            return a
        },
        yi = function(a, b) {
            a.U = b;
            return a
        },
        zi = function(a) {
            return new ji(a.Kf, a.Kj, a.F, a.qd, a.h, a.I, a.m, a.pd, a.B, a.Lc, a.Cb, a.U)
        };
    var Ai = [N.g.D, N.g.K],
        Bi = [N.g.D, N.g.K, N.g.Zd, N.g.Yd],
        Ci = {},
        Di = (Ci[N.g.D] = 1, Ci[N.g.K] = 2, Ci),
        Ei = {},
        Fi = (Ei[N.g.Qi] = "a", Ei[N.g.Si] = "s", Ei[N.g.Ti] = "y", Ei[N.g.Ri] = "p", Ei),
        Gi = function(a) {
            var b = !1 !== S(a, N.g.X);
            P(87) && (b = b && Qg(N.g.Yd));
            return b
        },
        Hi = function() {
            var a = {},
                b;
            for (b in Di)
                if (Di.hasOwnProperty(b)) {
                    var c = Di[b],
                        d, e = Fg();
                    e.accessedAny = !0;
                    d = Pg(e, b);
                    a[c] = d
                }
            var f = P(57) && Ai.every(Qg),
                g = P(52);
            return f || g ? fc(a, 1) : fc(a, 0)
        },
        Ii = {},
        Ji = (Ii[N.g.D] = 0, Ii[N.g.K] = 1, Ii[N.g.Zd] = 2, Ii[N.g.Yd] = 3, Ii);

    function Ki(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var Li = function() {
            if (P(54)) {
                for (var a = "1", b = 0; b < Bi.length; b++) {
                    var c = a,
                        d, e = Bi[b],
                        f = Cg[e];
                    d = void 0 === f ? 0 : Ji.hasOwnProperty(f) ? 12 | Ji[f] : 8;
                    var g = Fg();
                    g.accessedAny = !0;
                    var l = g.entries[e] || {};
                    d = d << 2 | Ki(l.implicit);
                    a = c + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [d] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [Ki(l.declare) << 4 | Ki(l.default) << 2 | Ki(l.update)])
                }
                return a
            }
            for (var m = "G1", n = 0; n < Ai.length; n++) {
                var p;
                a: {
                    var q = Ai[n],
                        r = Fg();r.accessedDefault = !0;
                    switch ((r.entries[q] || {}).default) {
                        case !0:
                            p = 3;
                            break a;
                        case !1:
                            p = 2;
                            break a;
                        default:
                            p = 1
                    }
                }
                switch (p) {
                    case 3:
                        m += "1";
                        break;
                    case 2:
                        m += "0";
                        break;
                    case 1:
                        m += "-"
                }
            }
            return m
        },
        Mi = function() {
            var a = Fg(),
                b = a.cps,
                c = [],
                d;
            for (d in Dg) Dg.hasOwnProperty(d) && Dg[d].enabled && (a.usedSetCps ? b.hasOwnProperty(d) && b[d].enabled && c.push(d) : c.push(d));
            for (var e = "", f = 0; f < c.length; f++) {
                var g = Fi[c[f]];
                g && (e += g)
            }
            return "" === e ? "-" : e
        };
    var Ni = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Oi = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                l = g[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var Pi = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Qi = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function Ri(a) {
        return "null" !== a.origin
    };
    var Ui = function(a, b, c, d) {
            return Si(d) ? Oi(a, String(b || Ti()), c) : []
        },
        Xi = function(a, b, c, d, e) {
            if (Si(e)) {
                var f = Vi(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Wi(f, function(g) {
                        return g.Qe
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Wi(f, function(g) {
                        return g.Kd
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Yi(a, b, c, d) {
        var e = Ti(),
            f = window;
        Ri(f) && (f.document.cookie = a);
        var g = Ti();
        return e != g || void 0 != c && 0 <= Ui(b, g, !1, d).indexOf(c)
    }
    var bj = function(a, b, c) {
            function d(t, u, v) {
                if (null == v) return delete g[u], t;
                g[u] = v;
                return t + "; " + u + "=" + v
            }

            function e(t, u) {
                if (null == u) return delete g[u], t;
                g[u] = !0;
                return t + "; " + u
            }
            if (!Si(c.jb)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Zi(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.lm);
            f = d(f, "samesite",
                c.om);
            c.qm && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = $i(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        r = d(f, "domain", q);
                    r = e(r, c.flags);
                    if (!aj(q, c.path) && Yi(r, a, b, c.jb)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return aj(m, c.path) ? 1 : Yi(f, a, b, c.jb) ? 0 : 1
        },
        cj = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return bj(a, b, c)
        };

    function Wi(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var l = a[g],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function Vi(a, b, c) {
        for (var d = [], e = Ui(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                l = g.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    Qe: 1 * m[0] || 1,
                    Kd: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Zi = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        dj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        ej = /(^|\.)doubleclick\.net$/i,
        aj = function(a, b) {
            return ej.test(window.document.location.hostname) || "/" === b && dj.test(a)
        },
        Ti = function() {
            return Ri(window) ? window.document.cookie : ""
        },
        $i = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            ej.test(e) || dj.test(e) || a.push("none");
            return a
        },
        Si = function(a) {
            return yg().h() && a && Sg() ? Rg(a) ? Qg(a) : !1 : !0
        };
    var fj = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ Ni(a) & 2147483647) : String(b)
        },
        gj = function(a) {
            return [fj(a), Math.round(Ha() / 1E3)].join(".")
        },
        jj = function(a, b, c, d, e) {
            var f = hj(b);
            return Xi(a, f, ij(c), d, e)
        },
        kj = function(a, b, c, d) {
            var e = "" + hj(c),
                f = ij(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        hj = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        ij = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };
    var lj = function() {
        ne.dedupe_gclid || (ne.dedupe_gclid = "" + gj());
        return ne.dedupe_gclid
    };
    var mj = function() {
        var a = !1;
        return a
    };
    var nj = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        oj = function(a) {
            var b = vh.ctid.split("-")[0].toUpperCase(),
                c = {};
            c.ctid = vh.ctid;
            c.yl = me.vd;
            c.Bl = me.Nf;
            c.Vk = th.Fe ? 2 : 1;
            te ? (c.bf = nj[b], c.bf || (c.bf = 0)) : c.bf = ze ? 13 : 10;
            xe ? c.lg = 1 : mj() ? c.lg = 2 : c.lg = 3;
            var d;
            var e = c.bf,
                f = c.lg;
            void 0 === e ? d = "" : (f || (f = 0), d = "" + vd(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e << 2 | f]);
            var g = c.fm,
                l = 4 + d + (g ? "" + vd(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [g] : ""),
                m, n = c.Bl;
            m = n &&
                ud.test(n) ? "" + vd(3, 2) + n : "";
            var p, q = c.yl;
            p = q ? "" + vd(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [q] : "";
            var r;
            var t = c.ctid;
            if (t && a) {
                var u = t.split("-"),
                    v = u[0].toUpperCase();
                if ("GTM" !== v && "OPT" !== v) r = "";
                else {
                    var w = u[1];
                    r = "" + vd(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + w.length] + (c.Vk || 0) + w
                }
            } else r = "";
            return l + m + p + r
        };

    function pj(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var qj = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function rj() {
        return ib ? !!pb && !!pb.platform : !1
    }

    function sj() {
        return sb("iPhone") && !sb("iPod") && !sb("iPad")
    }

    function tj() {
        sj() || sb("iPad") || sb("iPod")
    };
    ub();
    tb() || sb("Trident") || sb("MSIE");
    sb("Edge");
    !sb("Gecko") || -1 != ob().toLowerCase().indexOf("webkit") && !sb("Edge") || sb("Trident") || sb("MSIE") || sb("Edge"); - 1 != ob().toLowerCase().indexOf("webkit") && !sb("Edge") && sb("Mobile");
    rj() || sb("Macintosh");
    rj() || sb("Windows");
    (rj() ? "Linux" === pb.platform : sb("Linux")) || rj() || sb("CrOS");
    var uj = pa.navigator || null;
    uj && (uj.appVersion || "").indexOf("X11");
    rj() || sb("Android");
    sj();
    sb("iPad");
    sb("iPod");
    tj();
    ob().toLowerCase().indexOf("kaios");
    var vj = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var l = a.charCodeAt(e + f);
                    if (!l || 61 == l || 38 == l || 35 == l) return e
                }
                e += f + 1
            }
            return -1
        },
        wj = /#|$/,
        xj = function(a, b) {
            var c = a.search(wj),
                d = vj(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        yj = /[?&]($|#)/,
        zj = function(a, b, c) {
            for (var d, e = a.search(wj), f = 0, g, l = []; 0 <= (g = vj(a, f, b, e));) l.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            l.push(a.slice(f));
            d = l.join("").replace(yj, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var Aj = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        wg(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Bj = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function Cj(a) {
        if (!a || !C.head) return null;
        var b = Dj("META");
        C.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var Ej = function() {
            if (z.top == z) return 0;
            var a = z.location.ancestorOrigins;
            return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : Aj(z.top) ? 1 : 2
        },
        Dj = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Fj(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Dj("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        l = cb(g, e);
                    0 <= l && Array.prototype.splice.call(g, l, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            qj(e, "load", f);
            qj(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Hj = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            Bj(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Gj(c, b)
        },
        Gj = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else Fj(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Ij = function() {};
    var Jj = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Kj = function(a, b) {
            b = void 0 === b ? {} : b;
            this.m = a;
            this.h = null;
            this.I = {};
            this.Cb = 0;
            var c;
            this.U = null != (c = b.Il) ? c : 500;
            var d;
            this.F = null != (d = b.gm) ? d : !1;
            this.B = null
        };
    oa(Kj, Ij);
    Kj.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.F
            },
            d = Qi(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.U && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.U));
        var f = function(g, l) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Jj(c), c.internalBlockOnErrors = b.F, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Lj(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Kj.prototype.removeEventListener = function(a) {
        a && a.listenerId && Lj(this, "removeEventListener", null, a.listenerId)
    };
    var Nj = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === g && (l = 1)) : 3 === c && (l = 1, 1 === g && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = Mj(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Mj(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? Mj(a.purpose.legitimateInterests,
                b) && Mj(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Mj = function(a, b) {
            return !(!a || !a[b])
        },
        Lj = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) {
                var e = a.m.__tcfapi;
                e(b, 2, c, d)
            } else if (Oj(a)) {
                Pj(a);
                var f = ++a.Cb;
                a.I[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Oj = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.m, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Pj = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.I[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, qj(a.m, "message", a.B))
        },
        Qj = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Jj(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Hj({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Rj = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        Sj = pj('', 500);

    function Tj() {
        var a = ne.tcf || {};
        return ne.tcf = a
    }
    var Zj = function() {
        var a = Tj(),
            b = new Kj(z, {
                Il: -1
            });
        Uj(b) && Vj() && K(124);
        if (!Vj() && !a.active && Uj(b)) {
            a.active = !0;
            a.Ye = {};
            Wj();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState) Xj(a), Yj(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {},
                                f;
                            for (f in Rj) Rj.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {},
                                l;
                            for (l in Rj)
                                if (Rj.hasOwnProperty(l))
                                    if ("1" ===
                                        l) {
                                        var m, n = c,
                                            p = !0;
                                        p = void 0 === p ? !1 : p;
                                        m = Qj(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Nj(n, "1", 0) : !1;
                                        g["1"] = m
                                    } else g[l] = Nj(c, l, Rj[l]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty", a.Ye = d, Yj(a))
                    }
                })
            } catch (c) {
                Xj(a), Yj(a)
            }
        }
    };

    function Xj(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function Wj() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Sj, a);
        bh(b)
    }

    function Uj(a) {
        return "function" === typeof z.__tcfapi || "function" === typeof a.m.__tcfapi || null != Oj(a) ? !0 : !1
    }
    var Vj = function() {
        return !0 !== z.gtag_enable_tcf_support
    };

    function Yj(a) {
        var b = {},
            c = (b.ad_storage = a.Ye["1"] ? "granted" : "denied", b);
        ch(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: ak()
        })
    }
    var ak = function() {
            var a = Tj();
            return a.active ? a.tcString || "" : ""
        },
        bk = function() {
            var a = Tj();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        ck = function(a) {
            if (!Rj.hasOwnProperty(String(a))) return !0;
            var b = Tj();
            return b.active && b.Ye ? !!b.Ye[String(a)] : !0
        };
    var dk = void 0;

    function ek(a) {
        var b = "";
        return b
    };
    vb();
    sj() || sb("iPod");
    sb("iPad");
    !sb("Android") || wb() || vb() || ub() || sb("Silk");
    wb();
    !sb("Safari") || wb() || (tb() ? 0 : sb("Coast")) || ub() || (tb() ? 0 : sb("Edge")) || (tb() ? rb("Microsoft Edge") : sb("Edg/")) || (tb() ? rb("Opera") : sb("OPR")) || vb() || sb("Silk") || sb("Android") || tj();
    var fk = {},
        gk = null,
        hk = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!gk) {
                gk = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(l[m].split(""));
                    fk[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === gk[q] && (gk[q] = p)
                    }
                }
            }
            for (var r = fk[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    A = b[v + 2],
                    B = r[x >> 2],
                    D = r[(x & 3) << 4 | y >> 4],
                    H = r[(y & 15) << 2 | A >> 6],
                    I = r[A & 63];
                t[w++] = "" + B + D + H + I
            }
            var F = 0,
                L = u;
            switch (b.length - v) {
                case 2:
                    F = b[v + 1], L = r[(F & 15) << 2] || u;
                case 1:
                    var M = b[v];
                    t[w] = "" + r[M >> 2] + r[(M & 3) << 4 | F >> 4] + L + u
            }
            return t.join("")
        };
    var ik = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function jk() {
        var a;
        return null != (a = z.google_tag_data) ? a : z.google_tag_data = {}
    }

    function kk() {
        var a = z.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function lk() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function mk() {
        var a, b;
        return "function" === typeof(null == (a = z.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function nk() {
        if (!mk()) return null;
        var a = jk();
        if (a.uach_promise) return a.uach_promise;
        var b = z.navigator.userAgentData.getHighEntropyValues(ik).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };

    function Ck(a, b, c, d) {
        var e, f = Number(null != a.hb ? a.hb : void 0);
        0 !== f && (e = new Date((b || Ha()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            jb: d
        }
    };
    var Dk;
    var Hk = function() {
            var a = Ek,
                b = Fk,
                c = Gk(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Pb(C, "mousedown", d);
                Pb(C, "keyup", d);
                Pb(C, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Ik = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Gk().decorators.push(f)
        },
        Jk = function(a, b, c) {
            for (var d = Gk().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    l;
                if (l = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== C.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Ka(e, g.callback())
                }
            }
            return e
        };

    function Gk() {
        var a = Fb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Kk = /(.*?)\*(.*?)\*(.*)/,
        Lk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Mk = /^(?:www\.|m\.|amp\.)+/,
        Nk = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Ok(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Qk = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Wa(String(d))))
            }
        var e = b.join("*");
        return ["1", Pk(e), e].join("*")
    };

    function Pk(a, b) {
        var c = [Db.userAgent, (new Date).getTimezoneOffset(), Db.userLanguage || Db.language, Math.floor(Ha() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Dk)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, l = 0; 8 > l; l++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Dk = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Dk[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Rk() {
        return function(a) {
            var b = xf(z.location.href),
                c = b.search.replace("?", ""),
                d = sf(c, "_gl", !0) || "";
            a.query = Sk(d) || {};
            var e = vf(b, "fragment").match(Ok("_gl"));
            a.fragment = Sk(e && e[3] || "") || {}
        }
    }

    function Tk(a, b) {
        var c = Ok(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var Uk = function(a, b) {
            b || (b = "_gl");
            var c = Nk.exec(a);
            if (!c) return "";
            var d = c[1],
                e = Tk(b, (c[2] || "").slice(1)),
                f = Tk(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        Vk = function(a) {
            var b = Rk(),
                c = Gk();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ka(d, e.query), a && Ka(d, e.fragment));
            return d
        },
        Sk = function(a) {
            try {
                var b = Wk(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = Xa(d[e + 1]);
                        c[f] = g
                    }
                    $a("TAGGING", 6);
                    return c
                }
            } catch (l) {
                $a("TAGGING",
                    8)
            }
        };

    function Wk(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Kk.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var l = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Pk(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return l;
                $a("TAGGING", 7)
            }
        }
    }

    function Xk(a, b, c, d) {
        function e(p) {
            p = Tk(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Nk.exec(c);
        if (!f) return "";
        var g = f[1],
            l = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
        return "" + g + l + m
    }

    function Yk(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Jk(b, 1, c),
            e = Jk(b, 2, c),
            f = Jk(b, 3, c);
        if (La(d)) {
            var g = Qk(d);
            c ? Zk("_gl", g, a) : $k("_gl", g, a, !1)
        }
        if (!c && La(e)) {
            var l = Qk(e);
            $k("_gl", l, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        $k(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        Zk(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && Xk(n, p, q)
            }
    }

    function $k(a, b, c, d) {
        if (c.href) {
            var e = Xk(a, b, c.href, void 0 === d ? !1 : d);
            hb.test(e) && (c.href = e)
        }
    }

    function Zk(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var l = e[g];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = C.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = Xk(a, b, c.action);
                hb.test(n) && (c.action = n)
            }
        }
    }

    function Ek(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Yk(e, e.hostname)
            }
        } catch (g) {}
    }

    function Fk(a) {
        try {
            if (a.action) {
                var b = vf(xf(a.action), "host");
                Yk(a, b)
            }
        } catch (c) {}
    }
    var al = function(a, b, c, d) {
            Hk();
            Ik(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        bl = function(a, b) {
            Hk();
            Ik(a, [uf(z.location, "host", !0)], b, !0, !0)
        },
        cl = function() {
            var a = C.location.hostname,
                b = Lk.exec(C.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(Mk, ""),
                m = e.replace(Mk, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        dl = function(a, b) {
            return !1 === a ? !1 : a || b || cl()
        };
    var el = ["1"],
        fl = {},
        gl = {},
        il = function(a) {
            return fl[hl(a)]
        },
        ml = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = hl(a.prefix);
            if (!fl[c])
                if (jl(c, a.path, a.domain)) {
                    var d = gl[hl(a.prefix)];
                    kl(a, d ? d.id : void 0, d ? d.ig : void 0)
                } else {
                    var e = zf("auiddc");
                    if (e) $a("TAGGING", 17), fl[c] = e;
                    else if (b) {
                        var f = hl(a.prefix),
                            g = gj();
                        if (0 === ll(f, g, a)) {
                            var l = Fb("google_tag_data", {});
                            l._gcl_au || (l._gcl_au = g)
                        }
                        jl(c, a.path, a.domain)
                    }
                }
        };

    function kl(a, b, c) {
        var d = hl(a.prefix),
            e = fl[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var l = e;
                    b && (l = e + "." + b + "." + (c ? c : Math.floor(Ha() / 1E3)));
                    ll(d, l, a, 1E3 * g)
                }
            }
        }
    }

    function ll(a, b, c, d) {
        var e = kj(b, "1", c.domain, c.path),
            f = Ck(c, d);
        f.jb = "ad_storage";
        return cj(a, e, f)
    }

    function jl(a, b, c) {
        var d = jj(a, b, c, el, "ad_storage");
        if (!d) return !1;
        nl(a, d);
        return !0
    }

    function nl(a, b) {
        var c = b.split(".");
        5 === c.length ? (fl[a] = c.slice(0, 2).join("."), gl[a] = {
            id: c.slice(2, 4).join("."),
            ig: Number(c[4]) || 0
        }) : 3 === c.length ? gl[a] = {
            id: c.slice(0, 2).join("."),
            ig: Number(c[2]) || 0
        } : fl[a] = b
    }

    function hl(a) {
        return (a || "_gcl") + "_au"
    }

    function ol(a) {
        Sg() ? Wg(function() {
            Qg("ad_storage") ? a() : Xg(a, "ad_storage")
        }, ["ad_storage"]) : a()
    }

    function pl(a) {
        var b = Vk(!0),
            c = hl(a.prefix);
        ol(function() {
            var d = b[c];
            if (d) {
                nl(c, d);
                var e = 1E3 * Number(fl[c].split(".")[1]);
                if (e) {
                    $a("TAGGING", 16);
                    var f = Ck(a, e);
                    f.jb = "ad_storage";
                    var g = kj(d, "1", a.domain, a.path);
                    cj(c, g, f)
                }
            }
        })
    }

    function ql(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                l = jj(a, e.path, e.domain, el, "ad_storage");
            l && (g[a] = l);
            return g
        };
        ol(function() {
            al(f, b, c, d)
        })
    };
    var rl = function(a) {
        for (var b = [], c = C.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                yg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, l) {
            return l.timestamp - g.timestamp
        });
        return b
    };

    function sl(a, b) {
        var c = rl(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].yg] || (d[c[e].yg] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    aa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].yg].push(g)
            }
        }
        return d
    };
    var tl = /^\w+$/,
        ul = /^[\w-]+$/,
        vl = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        wl = function() {
            return yg().h() && Sg() ? Qg("ad_storage") : !0
        },
        xl = function(a, b) {
            Rg("ad_storage") ? wl() ? a() : Xg(a, "ad_storage") : b ? $a("TAGGING", 3) : Wg(function() {
                xl(a, !0)
            }, ["ad_storage"])
        },
        zl = function(a) {
            return yl(a).map(function(b) {
                return b.aa
            })
        },
        yl = function(a) {
            var b = [];
            if (!Ri(z) || !C.cookie) return b;
            var c = Ui(a, C.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Sd: d.Sd
                }, e++) {
                var f = Al(c[e]);
                if (null != f) {
                    var g = f,
                        l = g.version;
                    d.Sd = g.aa;
                    var m = g.timestamp,
                        n = g.labels,
                        p = va(b, function(q) {
                            return function(r) {
                                return r.aa === q.Sd
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Bl(p.labels, n || [])) : b.push({
                        version: l,
                        aa: d.Sd,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return Cl(b)
        };

    function Bl(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Dl(a) {
        return a && "string" == typeof a && a.match(tl) ? a : "_gcl"
    }
    var Fl = function() {
            var a = xf(z.location.href),
                b = vf(a, "query", !1, void 0, "gclid"),
                c = vf(a, "query", !1, void 0, "gclsrc"),
                d = vf(a, "query", !1, void 0, "wbraid"),
                e = vf(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || sf(f, "gclid");
                c = c || sf(f, "gclsrc");
                d = d || sf(f, "wbraid")
            }
            return El(b, c, e, d)
        },
        El = function(a, b, c, d) {
            var e = {},
                f = function(g, l) {
                    e[l] || (e[l] = []);
                    e[l].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && ul.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(ul)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Hl = function(a) {
            var b = Fl();
            xl(function() {
                Gl(b, !1, a)
            })
        };

    function Gl(a, b, c, d, e) {
        function f(w, x) {
            var y = Il(w, g);
            y && (cj(y, x, l), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = Dl(c.prefix);
        d = d || Ha();
        var l = Ck(c, d, !0);
        l.jb = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var x = ["GCL", n, w];
                0 < e.length && x.push(e.join("."));
                return x.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                r = Il("gb", g),
                t = !1;
            if (!b)
                for (var u = yl(r), v = 0; v < u.length; v++) u[v].aa === q && u[v].labels &&
                    0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var Kl = function(a, b) {
            var c = Vk(!0);
            xl(function() {
                for (var d = Dl(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== vl[f]) {
                        var g = Il(f, d),
                            l = c[g];
                        if (l) {
                            var m = Math.min(Jl(l), Ha()),
                                n;
                            b: {
                                var p = m;
                                if (Ri(z))
                                    for (var q = Ui(g, C.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (Jl(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = Ck(b, m, !0);
                                t.jb = "ad_storage";
                                cj(g, l, t)
                            }
                        }
                    }
                }
                Gl(El(c.gclid, c.gclsrc), !1, b)
            })
        },
        Il = function(a, b) {
            var c = vl[a];
            if (void 0 !== c) return b + c
        },
        Jl = function(a) {
            return 0 !== Ll(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Al(a) {
        var b = Ll(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            aa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Ll(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !ul.test(a[2]) ? [] : a
    }
    var Ml = function(a, b, c, d, e) {
            if (ua(b) && Ri(z)) {
                var f = Dl(e),
                    g = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = Il(a[m], f);
                            if (n) {
                                var p = Ui(n, C.cookie, void 0, "ad_storage");
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                xl(function() {
                    al(g, b, c, d)
                })
            }
        },
        Cl = function(a) {
            return a.filter(function(b) {
                return ul.test(b.aa)
            })
        },
        Nl = function(a, b) {
            if (Ri(z)) {
                for (var c = Dl(b.prefix), d = {}, e = 0; e < a.length; e++) vl[a[e]] && (d[a[e]] = vl[a[e]]);
                xl(function() {
                    k(d, function(f, g) {
                        var l = Ui(c + g, C.cookie, void 0, "ad_storage");
                        l.sort(function(t,
                            u) {
                            return Jl(u) - Jl(t)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = Jl(m),
                                p = 0 !== Ll(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== Ll(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            Gl(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Ol(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Pl = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (Sg()) {
                var c = Fl();
                if (Ol(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    bl(function() {
                        return d
                    }, 3);
                    bl(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        Ql = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!wl()) return e;
            var f = yl(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var l = f[0],
                    m = f[0].timestamp,
                    n = [l.version, Math.round(m /
                        1E3), l.aa].concat(l.labels || [], [b]).join("."),
                    p = Ck(c, m, !0);
                p.jb = "ad_storage";
                cj(a, n, p)
            }
            return e
        };

    function Rl(a, b) {
        var c = Dl(b),
            d = Il(a, c);
        if (!d) return 0;
        for (var e = yl(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Sl(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var Tl = function(a) {
        var b = Math.max(Rl("aw", a), Sl(wl() ? sl() : {}));
        return Math.max(Rl("gb", a), Sl(wl() ? sl("_gac_gb", !0) : {})) > b
    };
    var Yl = /[A-Z]+/,
        Zl = /\s/,
        $l = function(a, b) {
            if (h(a)) {
                a = Fa(a);
                var c = a.indexOf("-");
                if (!(0 > c)) {
                    var d = a.substring(0, c);
                    if (Yl.test(d)) {
                        var e = a.substring(c + 1),
                            f;
                        if (b && P(64)) {
                            var g = function(n) {
                                var p = n.indexOf("/");
                                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                            };
                            f = g(e);
                            if ("DC" === d && 2 === f.length) {
                                var l = g(f[1]);
                                2 === l.length && (f[1] = l[0], f.push(l[1]))
                            }
                        } else {
                            f = e.split("/");
                            for (var m = 0; m < f.length; m++)
                                if (!f[m] || Zl.test(f[m]) && ("AW" !== d || 1 !== m)) return
                        }
                        return {
                            id: a,
                            prefix: d,
                            W: d + "-" + f[0],
                            H: f
                        }
                    }
                }
            }
        },
        bm = function(a, b) {
            for (var c = {}, d = 0; d < a.length; ++d) {
                var e = $l(a[d], b);
                e && (c[e.id] = e)
            }
            am(c);
            var f = [];
            k(c, function(g, l) {
                f.push(l)
            });
            return f
        };

    function am(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.H[1] && b.push(d.W)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var cm = function(a, b, c, d) {
        var e = Lb(),
            f;
        if (1 === e) a: {
            var g = Be;g = g.toLowerCase();
            for (var l = "https://" + g, m = "http://" + g, n = 1, p = C.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (0 === r.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === r.indexOf(l) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var em = function(a, b, c) {
            if (z[a.functionName]) return b.og && E(b.og), z[a.functionName];
            var d = dm();
            z[a.functionName] = d;
            if (a.Me)
                for (var e = 0; e < a.Me.length; e++) z[a.Me[e]] = z[a.Me[e]] || dm();
            a.Ve && void 0 === z[a.Ve] && (z[a.Ve] = c);
            Kb(cm("https://", "http://", a.wg), b.og, b.al);
            return d
        },
        dm = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        fm = {
            functionName: "_googWcmImpl",
            Ve: "_googWcmAk",
            wg: "www.gstatic.com/wcm/loader.js"
        },
        gm = {
            functionName: "_gaPhoneImpl",
            Ve: "ga_wpid",
            wg: "www.gstatic.com/gaphone/loader.js"
        },
        hm = {
            Li: "",
            Vj: "5"
        },
        im = {
            functionName: "_googCallTrackingImpl",
            Me: [gm.functionName, fm.functionName],
            wg: "www.gstatic.com/call-tracking/call-tracking_" + (hm.Li || hm.Vj) + ".js"
        },
        jm = {},
        km = function(a, b, c, d) {
            K(22);
            if (c) {
                d = d || {};
                var e = em(fm, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.ib && (f.autoreplace = c);
                e(2, d.ib, f, c, 0, Ga(), d.options)
            }
        },
        lm = function(a, b, c, d) {
            K(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Ga()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    jm[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.H.length ? (e.adData = {
                            ak: g.H[0],
                            cl: g.H[1]
                        }, jm[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.W
                        }, jm[g.id] = !0))
                }(e.gaData || e.adData) && em(im, d)(d.ib, e, d.options)
            }
        },
        mm = function() {
            var a = !1;
            return a
        },
        nm = function(a, b) {
            if (a)
                if (mj()) {} else {
                    if (h(a)) {
                        var c =
                            $l(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = S(b, N.g.Bj);
                    if (f && ua(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var l = $l(f[g]);
                            l && (d.push(l), (a.id === l.id || a.id === a.W && a.W === l.W) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = S(b, N.g.uh),
                            n;
                        if (m) {
                            ua(m) ? n = m : n = [m];
                            var p = S(b, N.g.sh),
                                q = S(b, N.g.th),
                                r = S(b, N.g.vh),
                                t = S(b, N.g.Aj),
                                u = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) lm(d, n[w], t, {
                                        ib: u,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix && a.H[1]) mm() ? lm([a], n[w], t || "US", {
                                ib: u,
                                options: r
                            }) : km(a.H[0], a.H[1], n[w], {
                                ib: u,
                                options: r
                            });
                            else if ("UA" === a.prefix)
                                if (mm()) lm([a], n[w], t || "US", {
                                    ib: u
                                });
                                else {
                                    var x = a.W,
                                        y = n[w],
                                        A = {
                                            ib: u
                                        };
                                    K(23);
                                    if (y) {
                                        A = A || {};
                                        var B = em(gm, A, x),
                                            D = {};
                                        void 0 !== A.ib ? D.receiver = A.ib : D.replace = y;
                                        D.ga_wpid = x;
                                        D.destination = y;
                                        B(2, Ga(), D)
                                    }
                                }
                        }
                    }
                }
        };
    var om = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.h = c;
        this.m = {};
        this.metadata = J(c.eventMetadata || {});
        this.isAborted = !1
    };
    om.prototype.copyToHitData = function(a, b) {
        var c = S(this.h, a);
        void 0 !== c ? this.m[a] = c : void 0 !== b && (this.m[a] = b)
    };
    var pm = function(a, b, c) {
        var d = cf(a.target.W);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };

    function qm(a) {
        return {
            getDestinationId: function() {
                return a.target.W
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                a.m[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return S(a.h, b)
            },
            km: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.m)
            }
        }
    };

    function Nm(a) {
        var b = S(a.h, N.g.wb),
            c = S(a.h, N.g.vb);
        b && !c ? (a.eventName !== N.g.ia && a.eventName !== N.g.ce && K(131), a.isAborted = !0) : !b && c && (K(132), a.isAborted = !0)
    };

    function Pm() {
        return "attribution-reporting"
    }

    function Qm(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var Rm = !1;

    function Sm() {
        if (Qm("join-ad-interest-group") && sa(Db.joinAdInterestGroup)) return !0;
        Rm || (Cj('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Rm = !0);
        return Qm("join-ad-interest-group") && sa(Db.joinAdInterestGroup)
    }

    function Tm(a, b) {
        var c = void 0;
        try {
            c = C.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ha() - d) {
                $a("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= C.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                $a("TAGGING", 10);
                return
            }
        } catch (e) {}
        Nb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ha()
        }, c)
    }

    function Um() {
        return "https://td.doubleclick.net"
    };
    var Vm = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Wm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        Xm = /^\d+\.fls\.doubleclick\.net$/,
        Ym = /;gac=([^;?]+)/,
        Zm = /;gacgb=([^;?]+)/,
        $m = /;gclaw=([^;?]+)/,
        an = /;gclgb=([^;?]+)/;

    function bn(a, b) {
        if (Xm.test(C.location.host)) {
            var c = C.location.href.match(b);
            return c && 2 == c.length && c[1].match(Vm) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].aa);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var cn = function(a, b, c) {
        var d = wl() ? sl("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var l = Ql("_gac_gb_" + g, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + l.join(","))
        }
        return {
            uk: f ? e.join(";") : "",
            tk: bn(d, Zm)
        }
    };

    function dn(a, b, c) {
        if (Xm.test(C.location.host)) {
            var d = C.location.href.match(c);
            if (d && 2 == d.length && d[1].match(Wm)) return [{
                aa: d[1]
            }]
        } else return yl((a || "_gcl") + b);
        return []
    }
    var en = function(a) {
            return dn(a, "_aw", $m).map(function(b) {
                return b.aa
            }).join(".")
        },
        fn = function(a) {
            return dn(a, "_gb", an).map(function(b) {
                return b.aa
            }).join(".")
        },
        gn = function(a, b) {
            var c = Ql((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var hn = function() {
        if (sa(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var T = {
        C: {
            Cg: "ads_conversion_hit",
            jf: "container_execute_start",
            Fg: "container_setup_end",
            kf: "container_setup_start",
            Eg: "container_execute_end",
            Gg: "container_yield_end",
            lf: "container_yield_start",
            Gh: "event_execute_end",
            Fh: "event_evaluation_end",
            If: "event_evaluation_start",
            Hh: "event_setup_end",
            od: "event_setup_start",
            Ih: "ga4_conversion_hit",
            rd: "page_load",
            Yl: "pageview",
            Bb: "snippet_load",
            Sh: "tag_callback_error",
            Th: "tag_callback_failure",
            Uh: "tag_callback_success",
            Vh: "tag_execute_end",
            wc: "tag_execute_start"
        }
    };
    var Un = !1,
        Vn = "L S Y E EC TC HTC".split(" "),
        Wn = ["S", "V", "E"],
        Xn = ["TS", "TI", "TE"];
    var Ao = function(a) {},
        Bo = function(a) {},
        Co = function() {},
        Do = function() {},
        Eo = function() {},
        Fo = function(a, b) {},
        Go = function(a, b) {},
        Ho = function(a, b) {},
        Io = function(a, b) {},
        Yn = function(a, b, c, d, e, f) {
            var g;
            g = void 0 === g ? !1 : g;
            var l = {};
            return l
        },
        Zn = function(a) {
            var b = !1;
            return b
        },
        $n = function(a, b) {},
        Jo = function() {
            var a = {};
            return a
        },
        to = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        Ko = function() {},
        Lo = function(a,
            b) {},
        Mo = function(a, b, c) {};
    var No = function(a, b) {
        var c, d = z.GooglebQhCsO;
        d || (d = {}, z.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var Oo = function(a, b, c) {
        var d = xj(a, "fmt");
        if (b) {
            var e = xj(a, "random"),
                f = xj(a, "label") || "";
            if (!e) return !1;
            var g = hk(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!No(g, b)) return !1
        }
        d && 4 != d && (a = zj(a, "rfmt", d));
        var l = zj(a, "fmt", 4);
        Kb(l, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, c, C.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var dp = function() {
            this.h = {}
        },
        ep = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        fp = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        hp = function(a, b, c, d) {};

    function jp(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return xf("" + c + b).href
        }
    }

    function kp() {
        return !!me.Ke && "SGTM_TOKEN" !== me.Ke.split("@@").join("")
    }

    function lp(a) {
        for (var b = mp(), c = fa(b), d = c.next(); !d.done; d = c.next()) {
            var e = S(a, d.value);
            if (e) return e
        }
    }

    function mp() {
        var a = [];
        P(58) && a.push(N.g.Ae);
        a.push(N.g.qc);
        return a
    };
    var op = function(a, b, c, d) {
            if (!np() && !Kh(a)) {
                var e = "?id=" + encodeURIComponent(a) + "&l=" + me.da,
                    f = 0 === a.indexOf("GTM-");
                f || (e += "&cx=c");
                P(85) && (e += "&gtm=" + oj());
                var g = kp();
                g && (e += "&sign=" + me.Ke);
                var l = c ? "/gtag/js" : "/gtm.js",
                    m = ve || xe ? jp(b, l + e) : void 0;
                if (!m) {
                    var n = me.be + l;
                    g && Eb && f && (n = Eb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    m = cm("https://", "http://", n + e)
                }
                var p = a;
                d.siloed && (Mh({
                    ctid: p,
                    isDestination: !1
                }), p = xh(p));
                var q = p,
                    r = Lh();
                qh().container[q] = {
                    state: 1,
                    context: d,
                    parent: r
                };
                rh({
                    ctid: q,
                    isDestination: !1
                });
                Kb(m)
            }
        },
        pp = function(a, b, c) {
            var d;
            if (d = !np()) {
                var e = qh().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (Nh()) qh().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: Lh()
                }, rh({
                    ctid: a,
                    isDestination: !0
                }), K(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + me.da + "&cx=c";
                    P(85) && (f += "&gtm=" + oj());
                    kp() && (f += "&sign=" + me.Ke);
                    var g = ve || xe ? jp(b, f) : void 0;
                    g || (g = cm("https://", "http://", me.be + f));
                    var l = a;
                    c.siloed && (Mh({
                        ctid: l,
                        isDestination: !0
                    }), l = xh(l));
                    qh().destination[l] = {
                        state: 1,
                        context: c,
                        parent: Lh()
                    };
                    rh({
                        ctid: l,
                        isDestination: !0
                    });
                    Kb(g)
                }
        };

    function np() {
        if (mj()) {
            return !0
        }
        return !1
    };
    var rp = function(a) {
            var b = Dh();
            qp(b).event && qp(b).event.push(a)
        },
        sp = function() {
            var a = qp(Dh());
            return a.event ? a.event : []
        };

    function qp(a) {
        var b, c = ne.r;
        c || (c = {
            container: {}
        }, ne.r = c);
        b = c;
        var d = b.container[a];
        d || (d = {
            entity: [],
            event: []
        }, b.container[a] = d);
        return d
    };
    var tp = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        up = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        vp = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        wp = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        zp = function(a) {
            var b = Ne("gtm.allowlist") || Ne("gtm.whitelist");
            b && K(9);
            wh() ? b = "e c cid gct rep ogt_cons_disc ccd_ads_first ccd_ads_last ccd_fl_first ccd_fl_last ccd_ga_first ccd_ga_last ccd_mc_first ccd_mc_last".split(" ") :
                te && (b = ["google", "gtagfl", "lcl", "zone"]);
            xp() && (te ? K(116) : K(117), yp && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && Ma(Ea(b), up),
                d = Ne("gtm.blocklist") || Ne("gtm.blacklist");
            d || (d = Ne("tagTypeBlacklist")) && K(3);
            d ? K(8) : d = [];
            xp() && (d = Ea(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ea(d).indexOf("google") && K(2);
            var e = d && Ma(Ea(d), vp),
                f = {};
            return function(g) {
                var l = g && g[gc.Ab];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/,
                    "");
                if (void 0 !== f[l]) return f[l];
                var m = Fe[l] || [],
                    n = a(l, m),
                    p;
                p = qp(Dh()).entity;
                for (var q = 0; q < p.length; q++) try {
                    n = n && p[q](l, m)
                } catch (y) {
                    n = !1
                }
                if (b) {
                    var r;
                    if (r = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var t = 0; t < m.length; t++) {
                                    if (0 > c.indexOf(m[t])) {
                                        K(11);
                                        r = !1;
                                        break a
                                    }
                                } else {
                                    r = !1;
                                    break a
                                }
                        r = !0
                    }
                    n = r
                }
                var u = !1;
                if (d) {
                    var v = 0 <= e.indexOf(l);
                    if (v) u = v;
                    else {
                        var w = za(e, m || []);
                        w && K(10);
                        u = w
                    }
                }
                var x = !n || u;
                x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = za(e, wp));
                return f[l] = x
            }
        },
        yp = !1;
    var xp = function() {
        return tp.test(z.location && z.location.hostname)
    };
    var Ap = "",
        Bp = [];

    function Cp(a) {
        var b = "";
        Ap && (b = "&dl=" + encodeURIComponent(Ap));
        0 < Bp.length && (b += "&tdp=" + Bp.join("."));
        a.kb && (Ap = "", Bp.length = 0, b && a.Bi());
        return b
    };
    var Dp = [];

    function Ep(a) {
        if (!Dp.length) return "";
        var b = "&tdc=" + Dp.join("!");
        a.kb && (a.Bi(), Dp.length = 0);
        return b
    };
    var Fp = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        Gp = {},
        Hp = Object.freeze((Gp[N.g.Ma] = !0, Gp)),
        Ip = 0 <= C.location.search.indexOf("?gtm_diagnostics=") || 0 <= C.location.search.indexOf("&gtm_diagnostics="),
        Kp = function(a, b, c) {
            if (Wh && "config" === a && !(1 < $l(b).H.length)) {
                var d, e = Fb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = J(c.F);
                J(c.h, f);
                var g = [],
                    l;
                for (l in d) {
                    var m = Jp(d[l], f);
                    m.length && (Ip && console.log(m), g.push(l))
                }
                g.length && (g.length && Wh && Dp.push(b + "*" + g.join(".")), $a("TAGGING", Fp[C.readyState] ||
                    14));
                d[b] = f
            }
        };

    function Lp(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Jp(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? Hp[q] : t
            },
            f;
        for (f in Lp(a, b)) {
            var g = (d ? d + "." : "") + f,
                l = e(f, a),
                m = e(f, b),
                n = "object" === ac(l) || "array" === ac(l),
                p = "object" === ac(m) || "array" === ac(m);
            if (n && p) Jp(l, m, c, g);
            else if (n || p || l !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var Mp = !1,
        Np = 0,
        Op = [];

    function Pp(a) {
        if (!Mp) {
            var b = C.createEventObject,
                c = "complete" == C.readyState,
                d = "interactive" == C.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Mp = !0;
                for (var e = 0; e < Op.length; e++) E(Op[e])
            }
            Op.push = function() {
                for (var f = 0; f < arguments.length; f++) E(arguments[f]);
                return 0
            }
        }
    }

    function Qp() {
        if (!Mp && 140 > Np) {
            Np++;
            try {
                C.documentElement.doScroll("left"), Pp()
            } catch (a) {
                z.setTimeout(Qp, 50)
            }
        }
    }
    var Rp = function() {
            Mp = !1;
            Np = 0;
            if ("interactive" == C.readyState && !C.createEventObject || "complete" == C.readyState) Pp();
            else {
                Pb(C, "DOMContentLoaded", Pp);
                Pb(C, "readystatechange", Pp);
                if (C.createEventObject && C.documentElement.doScroll) {
                    var a = !0;
                    try {
                        a = !z.frameElement
                    } catch (b) {}
                    a && Qp()
                }
                Pb(z, "load", Pp)
            }
        },
        Sp = function(a) {
            Mp ? a() : Op.push(a)
        };
    var Tp = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: Ch()
        }
    };

    function Up(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var Wp = function(a, b) {
            this.h = !1;
            this.F = [];
            this.I = {
                tags: []
            };
            this.U = !1;
            this.m = this.B = 0;
            Vp(this, a, b)
        },
        Xp = function(a, b, c, d) {
            if (qe.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            G(d) && (e = J(d, e));
            e.id = c;
            e.status = "timeout";
            return a.I.tags.push(e) - 1
        },
        Yp = function(a, b, c, d) {
            var e = a.I.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Zp = function(a) {
            if (!a.h) {
                for (var b = a.F, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.F.length = 0
            }
        },
        Vp = function(a, b, c) {
            void 0 !== b && $p(a, b);
            c && z.setTimeout(function() {
                return Zp(a)
            }, Number(c))
        },
        $p = function(a,
            b) {
            var c = Ja(function() {
                return E(function() {
                    b(Ch(), a.I)
                })
            });
            a.h ? c() : a.F.push(c)
        },
        aq = function(a) {
            a.B++;
            return Ja(function() {
                a.m++;
                a.U && a.m >= a.B && Zp(a)
            })
        },
        bq = function(a) {
            a.U = !0;
            a.m >= a.B && Zp(a)
        };
    var cq = {},
        eq = function() {
            return z[dq()]
        },
        fq = !1;
    var gq = function(a) {
            z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
            var b = z.GoogleAnalyticsObject;
            if (z[b]) z.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ga());
                z[b] = c
            }
            return z[b]
        },
        hq = function(a) {
            if (Sg()) {
                var b = eq();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function dq() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var iq = function(a) {},
        jq = function(a, b) {
            return function() {
                var c = eq(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Mq = {},
        Nq = {};

    function Oq(a, b) {
        if (Wh) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Mq[a] = "&e=" + c + "&eid=" + a;
            fi(a)
        }
    }

    function Pq(a) {
        var b = a.eventId,
            c = a.kb;
        if (!Mq[b]) return "";
        var d = Nq[b] ? "" : "&es=1";
        d += Mq[b];
        c && (Nq[b] = !0);
        return d
    };
    var Qq = {};

    function Rq(a, b) {
        Wh && (Qq[a] = Qq[a] || {}, Qq[a][b] = (Qq[a][b] || 0) + 1)
    }

    function Sq(a) {
        var b = a.eventId,
            c = a.kb,
            d = Qq[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Qq[b];
        return e.length ? "&md=" + e.join(".") : ""
    };
    var Tq = {},
        Uq = {
            aev: "1",
            c: "2",
            jsm: "3",
            v: "4",
            j: "5",
            smm: "6",
            rmm: "7",
            input: "8"
        };

    function Vq(a, b, c) {
        if (Wh) {
            Tq[a] = Tq[a] || [];
            var d = Uq[b] || "0",
                e;
            e = c instanceof z.Element ? "1" : c instanceof z.Event ? "2" : c instanceof z.RegExp ? "3" : c === z ? "4" : c === C ? "5" : c instanceof z.Promise ? "6" : c instanceof z.Storage ? "7" : c instanceof z.Date ? "8" : c instanceof z.History ? "9" : c instanceof z.Performance ? "a" : c === z.crypto ? "b" : c instanceof z.Location ? "c" : c instanceof z.Navigator ? "d" : "object" !== typeof c || G(c) ? "0" : "e";
            Tq[a].push("" + d + e)
        }
    }

    function Wq(a) {
        var b = a.eventId,
            c = Tq[b] || [];
        if (!c.length) return "";
        a.kb && delete Tq[b];
        return "&pcr=" + c.join(".")
    };
    var Xq = {},
        Yq = {};

    function Zq(a, b, c) {
        if (Wh && b) {
            var d = oh(b);
            Xq[a] = Xq[a] || [];
            Xq[a].push(c + d);
            var e = b["function"];
            if (!e) throw Error("Error: No function name given for function call.");
            var f = (Jc[e] ? "1" : "2") + d;
            Yq[a] = Yq[a] || [];
            Yq[a].push(f);
            fi(a)
        }
    }

    function $q(a) {
        var b = a.eventId,
            c = a.kb,
            d = "",
            e = Xq[b] || [];
        e.length && (d += "&tr=" + e.join("."));
        var f = Yq[b] || [];
        f.length && (d += "&ti=" + f.join("."));
        c && (delete Xq[b], delete Yq[b]);
        return d
    };

    function ar(a, b, c, d) {
        var e = Hc[a],
            f = br(a, b, c, d);
        if (!f) return null;
        var g = Tc(e[gc.Rh], c, []);
        if (g && g.length) {
            var l = g[0];
            f = ar(l.index, {
                M: f,
                O: 1 === l.hi ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function br(a, b, c, d) {
        function e() {
            if (f[gc.Pj]) l();
            else {
                var w = Uc(f, c, []),
                    x = w[gc.Mi];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!Qg(x[y])) {
                            l();
                            return
                        }
                var A = Xp(c.Kb, String(f[gc.Ab]), Number(f[gc.xd]), w[gc.Qj]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var I = Ha() - H;
                        Zq(c.id, Hc[a], "5");
                        Yp(c.Kb, A, "success", I);
                        P(32) && Mo(c, f, T.C.Uh);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var I = Ha() - H;
                        Zq(c.id, Hc[a], "6");
                        Yp(c.Kb, A, "failure", I);
                        P(32) && Mo(c, f, T.C.Th);
                        l()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Zq(c.id, f, "1");
                var D = function() {
                    Ue(3);
                    var I = Ha() - H;
                    Zq(c.id, f, "7");
                    Yp(c.Kb, A, "exception", I);
                    P(32) && Mo(c, f, T.C.Sh);
                    B || (B = !0, l())
                };
                P(32) && Lo(c, f);
                var H = Ha();
                try {
                    Sc(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (I) {
                    D(I)
                }
                P(32) && Mo(c, f, T.C.Vh)
            }
        }
        var f = Hc[a],
            g = b.M,
            l = b.O,
            m = b.terminate;
        if (c.cg(f)) return null;
        var n = Tc(f[gc.Wh], c, []);
        if (n && n.length) {
            var p = n[0],
                q = ar(p.index, {
                    M: g,
                    O: l,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            l = 2 === p.hi ? m : q
        }
        if (f[gc.Nh] || f[gc.Sj]) {
            var r = f[gc.Nh] ?
                Ic : c.Gl,
                t = g,
                u = l;
            if (!r[a]) {
                e = Ja(e);
                var v = cr(a, r, e);
                g = v.M;
                l = v.O
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function cr(a, b, c) {
        var d = [],
            e = [];
        b[a] = dr(d, e, c);
        return {
            M: function() {
                b[a] = er;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            O: function() {
                b[a] = fr;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function dr(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function er(a) {
        a()
    }

    function fr(a, b) {
        b()
    };
    var hr = function(a, b) {
            return 1 === arguments.length ? gr("config", a) : gr("config", a, b)
        },
        ir = function(a, b, c) {
            c = c || {};
            c[N.g.Jb] = a;
            return gr("event", b, c)
        };

    function gr(a) {
        return arguments
    }
    var jr = function() {
        this.h = [];
        this.m = []
    };
    jr.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++) try {
            this.m[f](e)
        } catch (g) {}
    };
    jr.prototype.listen = function(a) {
        this.m.push(a)
    };
    jr.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    jr.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var lr = function(a, b, c) {
            kr().enqueue(a, b, c)
        },
        nr = function() {
            var a = mr;
            kr().listen(a)
        };

    function kr() {
        var a = ne.mb;
        a || (a = new jr, ne.mb = a);
        return a
    }
    var vr = function(a) {
            var b = ne.zones;
            return b ? b.getIsAllowedFn(yh(), a) : function() {
                return !0
            }
        },
        wr = function(a) {
            var b = ne.zones;
            return b ? b.isActive(yh(), a) : !0
        },
        xr = function() {
            var a = ne.zones;
            a && a.unregisterChild(yh())
        },
        yr = function() {
            rp(function(a, b) {
                return wr(b)
            })
        };
    var Br = function(a, b) {
        for (var c = [], d = 0; d < Hc.length; d++)
            if (a[d]) {
                var e = Hc[d];
                var f = aq(b.Kb);
                try {
                    var g = ar(d, {
                        M: f,
                        O: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var l = e["function"];
                        if (!l) throw "Error: No function name given for function call.";
                        var m = Jc[l];
                        c.push({
                            Ei: d,
                            ui: (m ? m.priorityOverride || 0 : 0) || Up(e[gc.Ab], 1) || 0,
                            execute: g
                        })
                    } else zr(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(Ar);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function Ar(a, b) {
        var c, d = b.ui,
            e = a.ui;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Ei,
                l = b.Ei;
            f = g > l ? 1 : g < l ? -1 : 0
        }
        return f
    }

    function zr(a, b) {
        if (Wh) {
            var c = function(d) {
                var e = b.cg(Hc[d]) ? "3" : "4",
                    f = Tc(Hc[d][gc.Rh], b, []);
                f && f.length && c(f[0].index);
                Zq(b.id, Hc[d], e);
                var g = Tc(Hc[d][gc.Wh], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var Er = !1,
        Cr;
    var Jr = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        P(32) && Fo(b, d);
        if ("gtm.js" === d) {
            if (Er) return !1;
            Er = !0
        }
        var e, f = !1,
            g = wr(b);
        if (P(73))
            for (var l = sp(), m = 0; g && m < l.length; m++) g = (0, l[m])(d, b);
        if (g) e = vr(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            f = !0;
            e = vr(Number.MAX_SAFE_INTEGER)
        }
        Oq(b, d);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = {
                id: b,
                priorityId: c,
                name: d,
                cg: zp(e),
                Gl: [],
                ni: function() {
                    K(6);
                    Ue(0)
                },
                ai: Fr(),
                bi: Gr(b),
                Kb: new Wp(function() {
                    if (P(32)) {}
                    n && n.apply(n, [].slice.call(arguments, 0))
                }, p)
            };
        P(63) && (q.yi = Rq);
        P(32) && Ho(q.id, q.name);
        var r = Yc(q);
        P(32) && Io(q.id, q.name);
        f && (r = Hr(r));
        P(32) && Go(b, d);
        var t = Br(r, q),
            u = !1;
        bq(q.Kb);
        "gtm.js" !== d && "gtm.sync" !== d || iq(Ch());
        return Ir(r, t) || u
    };

    function Gr(a) {
        return function(b) {
            cc(b) || Vq(a, "input", b)
        }
    }

    function Fr() {
        var a = {};
        a.event = Re("event", 1);
        a.ecommerce = Re("ecommerce", 1);
        a.gtm = Re("gtm");
        a.eventModel = Re("eventModel");
        return a
    }

    function Hr(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Hc[c][gc.Ab]);
                if (pe[d] || void 0 !== Hc[c][gc.Tj] || Ge[d] || Up(d, 2)) b[c] = !0
            }
        return b
    }

    function Ir(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Hc[c] && !qe[String(Hc[c][gc.Ab])]) return !0;
        return !1
    }
    var Kr = {};

    function Lr(a, b, c) {
        Wh && void 0 !== a && (Kr[a] = Kr[a] || [], Kr[a].push(c + b), fi(a))
    }

    function Mr(a) {
        var b = a.eventId,
            c = a.kb,
            d = "",
            e = Kr[b] || [];
        e.length && (d += "&epr=" + e.join("."));
        c && delete Kr[b];
        return d
    };
    var Or = function(a, b, c, d) {
            var e = $l(c, d.isGtmEvent);
            e && Nr.push("event", [b, a], e, d)
        },
        Pr = function(a, b, c, d) {
            var e = $l(c, d.isGtmEvent);
            e && Nr.push("get", [a, b], e, d)
        },
        Qr = function() {
            this.status = 1;
            this.F = {};
            this.h = {};
            this.I = {};
            this.U = null;
            this.B = {};
            this.m = !1
        },
        Rr = function(a, b, c, d) {
            var e = Ha();
            this.type = a;
            this.B = e;
            this.h = b;
            this.m = c;
            this.messageContext = d
        },
        Sr = function() {
            this.m = {};
            this.B = {};
            this.h = []
        },
        Tr = function(a, b) {
            var c = b.W;
            return a.m[c] = a.m[c] || new Qr
        },
        Ur = function(a, b, c, d) {
            if (d.h) {
                var e = Tr(a, d.h),
                    f = e.U;
                if (f) {
                    var g =
                        J(c),
                        l = J(e.F[d.h.id]),
                        m = J(e.B),
                        n = J(e.h),
                        p = J(a.B),
                        q = {};
                    if (Wh) try {
                        q = J(Ke)
                    } catch (v) {
                        K(72)
                    }
                    var r = d.h.prefix,
                        t = function(v) {
                            Lr(d.messageContext.eventId, r, v);
                            var w = g[N.g.kc];
                            w && E(w)
                        },
                        u = zi(yi(xi(wi(vi(ti(si(ui(ri(qi(pi(new oi(d.messageContext.eventId, d.messageContext.priorityId), g), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("2")
                            }
                        }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3")
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        Lr(d.messageContext.eventId, r, "1"), Kp(d.type, d.h.id, u),
                            f(d.h.id, b, d.B, u)
                    } catch (v) {
                        Lr(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    Sr.prototype.register = function(a, b, c) {
        var d = Tr(this, a);
        3 !== d.status && (d.U = b, d.status = 3, c && (J(d.h, c), d.h = c), this.flush())
    };
    Sr.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === Tr(this, c).status && (Tr(this, c).status = 2, this.push("require", [{}], c, {})), Tr(this, c).m && (d.deferrable = !1));
        this.h.push(new Rr(a, c, b, d));
        d.deferrable || this.flush()
    };
    Sr.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0],
                g = f.h;
            if (f.messageContext.deferrable) !g || Tr(this, g).m ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== Tr(this, g).status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        k(f.m[0], function(r, t) {
                            J(Na(r, t), b.B)
                        });
                        break;
                    case "config":
                        var l = Tr(this, g);
                        e.lb = {};
                        k(f.m[0], function(r) {
                            return function(t, u) {
                                J(Na(t, u), r.lb)
                            }
                        }(e));
                        var m = !!e.lb[N.g.sc];
                        delete e.lb[N.g.sc];
                        var n = g.W === g.id;
                        m || (n ? l.B = {} : l.F[g.id] = {});
                        l.m && m || Ur(this, N.g.ia, e.lb, f);
                        l.m = !0;
                        n ? J(e.lb, l.B) : (J(e.lb, l.F[g.id]), K(70));
                        d = !0;
                        break;
                    case "event":
                        e.Rd = {};
                        k(f.m[0], function(r) {
                            return function(t, u) {
                                J(Na(t, u), r.Rd)
                            }
                        }(e));
                        Ur(this, f.m[1], e.Rd, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[N.g.La] = f.m[0], p[N.g.Za] = f.m[1], p);
                        Ur(this, N.g.Ea, q, f)
                }
                this.h.shift();
                Vr(this, f)
            }
            e = {
                lb: e.lb,
                Rd: e.Rd
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var Vr = function(a, b) {
            if ("require" !== b.type)
                if (b.h)
                    for (var c = Tr(a, b.h).I[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.m)
                        if (a.m.hasOwnProperty(e)) {
                            var f = a.m[e];
                            if (f && f.I)
                                for (var g = f.I[b.type] || [], l = 0; l < g.length; l++) g[l]()
                        }
        },
        Wr = function(a, b) {
            var c = Nr,
                d = J(b);
            J(Tr(c, a).h, d);
            Tr(c, a).h = d
        },
        Nr = new Sr;
    var Xr = {},
        Yr = {},
        Zr = function(a, b) {
            for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                    Wd: e.Wd,
                    Td: e.Td
                }, f++) {
                var g = a[f];
                if (0 <= g.indexOf("-")) {
                    if (e.Wd = $l(g, b), e.Wd) {
                        var l = Ah();
                        va(l, function(r) {
                            return function(t) {
                                return r.Wd.W === t
                            }
                        }(e)) ? c.push(g) : d.push(g)
                    }
                } else {
                    var m = Xr[g] || [];
                    e.Td = {};
                    m.forEach(function(r) {
                        return function(t) {
                            return r.Td[t] = !0
                        }
                    }(e));
                    for (var n = yh(), p = 0; p < n.length; p++)
                        if (e.Td[n[p]]) {
                            c = c.concat(Ah());
                            break
                        }
                    var q = Yr[g] || [];
                    q.length && (c = c.concat(q))
                }
            }
            return {
                Xk: c,
                Zk: d
            }
        },
        $r = function(a) {
            k(Xr, function(b,
                c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        as = function(a) {
            k(Yr, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var bs = "HA GF G UA AW DC MC".split(" "),
        cs = !1,
        ds = !1;

    function es(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: He()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var fs = void 0,
        gs = void 0;

    function hs(a, b, c) {
        var d = J(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && K(136);
        var e = J(b);
        J(c, e);
        lr(hr(yh()[0], e), a.eventId, d)
    }

    function is(a) {
        for (var b = mp(), c = fa(b), d = c.next(); !d.done; d = c.next()) {
            var e = d.value,
                f = a && a[e] || Nr.B[e];
            if (f) return f
        }
    }
    var js = {
            config: function(a, b) {
                var c = P(65),
                    d = es(a, b);
                if (!(2 > a.length) && h(a[1])) {
                    var e = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !G(a[2]) || 3 < a.length) return;
                        e = a[2]
                    }
                    var f = $l(a[1], b.isGtmEvent);
                    if (f) {
                        var g, l, m;
                        a: {
                            if (!th.Fe) {
                                var n = Eh(Lh());
                                if (n && n.parent && n.context && 1 === n.context.source && 0 !== n.parent.ctid.indexOf("GTM-")) {
                                    var p = n.parent,
                                        q = p.isDestination;
                                    m = {
                                        fl: Eh(p),
                                        Wk: q
                                    };
                                    break a
                                }
                            }
                            m = void 0
                        }
                        var r = m;
                        r && (g = r.fl, l = r.Wk);
                        Oq(d.eventId, "gtag.config");
                        var t = f.W,
                            u = f.id !== t;
                        if (u ? -1 === Ah().indexOf(t) : -1 === yh().indexOf(t)) {
                            if (!(c &&
                                    b.inheritParentConfig || P(27) && e[N.g.wb])) {
                                var v = is(e);
                                if (u) pp(t, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                                    var w = e;
                                    fs ? hs(b, w, fs) : gs || (gs = J(w))
                                } else op(t, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (g && (K(128), l && K(130), c && b.inheritParentConfig)) {
                                var x = e;
                                gs ? hs(b, gs, x) : !x[N.g.sc] && se && fs || (fs = J(x));
                                return
                            }
                            if (se && !u && !e[N.g.sc]) {
                                var y = ds;
                                ds = !0;
                                if (y) return
                            }
                            cs || K(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    as(f.id);
                                    var A = f.id,
                                        B = e[N.g.we] || "default";
                                    B = String(B).split(",");
                                    for (var D = 0; D < B.length; D++) {
                                        var H = Yr[B[D]] || [];
                                        Yr[B[D]] = H;
                                        0 > H.indexOf(A) && H.push(A)
                                    }
                                } else {
                                    $r(f.id);
                                    var I = f.id,
                                        F = e[N.g.we] || "default";
                                    F = F.toString().split(",");
                                    for (var L = 0; L < F.length; L++) {
                                        var M = Xr[F[L]] || [];
                                        Xr[F[L]] = M;
                                        0 > M.indexOf(I) && M.push(I)
                                    }
                                }
                            delete e[N.g.we];
                            var X = b.eventMetadata || {};
                            X.hasOwnProperty("is_external_event") || (X.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = X;
                            delete e[N.g.kc];
                            for (var U = u ? [f.id] : Ah(), R = 0; R < U.length; R++) {
                                var Q =
                                    e,
                                    ha = J(b),
                                    ba = $l(U[R], ha.isGtmEvent);
                                ba && Nr.push("config", [Q], ba, ha)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    K(39);
                    var c = es(a, b),
                        d = a[1];
                    "default" === d ? bh(a[2]) : "update" === d ? ch(a[2], c) : "declare" === d ? b.fromContainerExecution && ah(a[2]) : "core_platform_services" === d && dh(a[2])
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && h(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!G(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = J(e), e[N.g.kc] && (g.eventCallback = e[N.g.kc]), e[N.g.qe] &&
                        (g.eventTimeout = e[N.g.qe]));
                    var l = es(a, b),
                        m = l.eventId,
                        n = l.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[N.g.Jb];
                    void 0 === r && (r = Ne(N.g.Jb, 2), void 0 === r && (r = "default"));
                    if (h(r) || ua(r)) {
                        var t;
                        b.isGtmEvent && P(64) ? t = h(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                        var u = Zr(t, b.isGtmEvent),
                            v = u.Xk,
                            w = u.Zk;
                        if (w.length)
                            for (var x = is(q), y = 0; y < w.length; y++) {
                                var A = $l(w[y], b.isGtmEvent);
                                A && pp(A.W, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = bm(v, b.isGtmEvent)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        Oq(m, c);
                        for (var D = [], H = 0; H < B.length; H++) {
                            var I = B[H],
                                F = J(b);
                            if (-1 !== bs.indexOf(Fh(I.prefix))) {
                                var L = J(d),
                                    M = F.eventMetadata || {};
                                M.hasOwnProperty("is_external_event") || (M.is_external_event = !F.fromContainerExecution);
                                F.eventMetadata = M;
                                delete L[N.g.kc];
                                Or(c, L, I.id, F)
                            }
                            D.push(I.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < B.length ? g.eventModel[N.g.Jb] = D.join() : delete g.eventModel[N.g.Jb];
                        cs || K(43);
                        void 0 === b.noGtmEvent &&
                            b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        P(78) && g.eventModel[N.g.vb] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                K(53);
                if (4 === a.length && h(a[1]) && h(a[2]) && sa(a[3])) {
                    var c = $l(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        cs || K(43);
                        var f = is();
                        if (!va(Ah(), function(l) {
                                return c.W === l
                            })) pp(c.W, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== bs.indexOf(Fh(c.prefix))) {
                            es(a, b);
                            var g = {};
                            Yg(J((g[N.g.La] = d, g[N.g.Za] = e, g)));
                            Pr(d, function(l) {
                                    E(function() {
                                        return e(l)
                                    })
                                },
                                c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    cs = !0;
                    var c = es(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && G(a[1]) ? c = J(a[1]) : 3 == a.length && h(a[1]) && (c = {}, G(a[2]) || ua(a[2]) ? c[a[1]] = J(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = es(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    J(c);
                    var g = J(c);
                    Nr.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] =
                        f);
                    P(15) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        ks = {
            policy: !0
        };
    var ls = function(a) {
            var b = z[me.da].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        ms = function(a) {
            var b = z[me.da],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var ns = !1,
        os = [];

    function ps() {
        if (!ns) {
            ns = !0;
            for (var a = 0; a < os.length; a++) E(os[a])
        }
    }
    var qs = function(a) {
        ns ? E(a) : os.push(a)
    };
    var Hs = function(a) {
        if (Gs(a)) return a;
        this.h = a
    };
    Hs.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var Gs = function(a) {
        return !a || "object" !== ac(a) || G(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Hs.prototype.getUntrustedMessageValue = Hs.prototype.getUntrustedMessageValue;
    var Is = 0,
        Js = {},
        Ks = [],
        Ls = [],
        Ms = !1,
        Ns = !1;

    function Os(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Ps = function(a) {
            return z[me.da].push(a)
        },
        Qs = function(a, b) {
            var c = ne[me.da],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = z.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function Rs(a, b) {
        var c = a._clear || b.overwriteModelFields;
        k(a, function(e, f) {
            "_clear" !== e && (c && Qe(e), Qe(e, f))
        });
        Ce || (Ce = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = He(), a["gtm.uniqueEventId"] = d, Qe("gtm.uniqueEventId", d));
        return Jr(a)
    }

    function Ss(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Aa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Ts() {
        var a;
        if (Ls.length) a = Ls.shift();
        else if (Ks.length) a = Ks.shift();
        else return;
        var b;
        var c = a;
        if (Ms || !Ss(c.message)) b = c;
        else {
            Ms = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = He());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                l = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Ks.unshift(l, c);
            if (Wh) {
                var m = vh.ctid;
                if (m) {
                    var n, p = Eh(Lh());
                    n = p && p.context;
                    var q, r = xf(z.location.href);
                    q = r.hostname + r.pathname;
                    var t = n && n.fromContainerExecution,
                        u = n && n.source,
                        v = vh.Oe,
                        w = th.Fe;
                    Wh && (Ap || (Ap = q), Bp.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }

    function Us() {
        for (var a = !1, b; !Ns && (b = Ts());) {
            Ns = !0;
            delete Ke.eventModel;
            Me();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Ns = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < f.length; g++) {
                        var l = f[g],
                            m = Ne(l, 1);
                        if (ua(m) || G(m)) m = J(m);
                        Le[l] = m
                    }
                try {
                    if (sa(d)) try {
                        d.call(Oe)
                    } catch (D) {} else if (ua(d)) {
                        var n = d;
                        if (h(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                r = n.slice(1),
                                t = Ne(p.join("."), 2);
                            if (null != t) try {
                                t[q].apply(t, r)
                            } catch (D) {}
                        }
                    } else {
                        var u =
                            void 0,
                            v = !1;
                        if (Aa(d)) {
                            a: {
                                if (d.length && h(d[0])) {
                                    var w = js[d[0]];
                                    if (w && (!e.fromContainerExecution || !ks[d[0]])) {
                                        u = w(d, e);
                                        break a
                                    }
                                }
                                u = void 0
                            }(v = u && "set" === d[0] && !!u.event) && K(101)
                        }
                        else u = d;
                        if (u) {
                            var x = Rs(u, e);
                            a = x || a;
                            v && x && K(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Me(!0);
                    var y = d["gtm.uniqueEventId"];
                    if ("number" === typeof y) {
                        for (var A = Js[String(y)] || [], B = 0; B < A.length; B++) Ls.push(Vs(A[B]));
                        A.length && Ls.sort(Os);
                        delete Js[String(y)];
                        y > Is && (Is = y)
                    }
                    Ns = !1
                }
            }
        }
        return !a
    }

    function Ws() {
        if (P(32)) {
            var a = Xs();
        }
        var e = Us();
        try {
            ls(Ch())
        } catch (f) {}
        return e
    }

    function mr(a) {
        if (Is < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Js[b] = Js[b] || [];
            Js[b].push(a)
        } else Ls.push(Vs(a)), Ls.sort(Os), E(function() {
            Ns || Us()
        })
    }

    function Vs(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Ys = function() {
            function a(f) {
                var g = {};
                if (Gs(f)) {
                    var l = f;
                    f = Gs(l) ? l.getUntrustedMessageValue() : void 0;
                    g.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: g
                }
            }
            var b = Fb(me.da, []),
                c = ne[me.da] = ne[me.da] || {};
            !0 === c.pruned && K(83);
            Js = kr().get();
            nr();
            Sp(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            qs(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < ne.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var g = 0; g < arguments.length; g++) f[g] = new Hs(arguments[g])
                } else f = [].slice.call(arguments, 0);
                var l = f.map(function(q) {
                    return a(q)
                });
                Ks.push.apply(Ks, l);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (K(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return Us() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            Ks.push.apply(Ks, e);
            Xs() && (P(32) && Eo(), E(Ws))
        },
        Xs = function() {
            var a = !0;
            a = !1;
            return a
        };

    function Zs(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ha();
        return b < c + 3E5 && b > c - 9E5
    }

    function $s(a) {
        return a && 0 === a.indexOf("pending:") ? Zs(a.substr(8)) : !1
    };
    var ut = function() {};
    var Mc = {};
    Mc.Ee = new String("undefined");
    var Xt = z.clearTimeout,
        Yt = z.setTimeout,
        V = function(a, b, c, d) {
            if (mj()) {
                b && E(b)
            } else return Kb(a, b, c, d)
        },
        Zt = function() {
            return new Date
        },
        $t = function() {
            return z.location.href
        },
        au = function(a) {
            return vf(xf(a), "fragment")
        },
        bu = function(a) {
            return wf(xf(a))
        },
        cu = function(a, b) {
            return Ne(a, b || 2)
        },
        du = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Ps(a)) : d = Ps(a);
            return d
        },
        eu = function(a, b) {
            z[a] = b
        },
        W = function(a, b, c) {
            b &&
                (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        fu = function(a, b, c) {
            return Ui(a, b, void 0 === c ? !0 : !!c)
        },
        gu = function(a, b, c) {
            return 0 === cj(a, b, c)
        },
        hu = function(a, b) {
            if (mj()) {
                b && E(b)
            } else Nb(a, b)
        },
        iu = function(a) {
            return !!Dt(a, "init", !1)
        },
        ju = function(a) {
            Bt(a, "init", !0)
        },
        ku = function(a, b, c) {
            cc(a) || Vq(c, b, a)
        };

    function Ju(a, b) {
        function c(g) {
            var l = xf(g),
                m = vf(l, "protocol"),
                n = vf(l, "host", !0),
                p = vf(l, "port"),
                q = vf(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Ku(a) {
        return Lu(a) ? 1 : 0
    }

    function Lu(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = J(a, {});
                J({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Ku(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < md.length; g++) {
                            var l = md[g];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (v) {}
                    f = !1
                }
                return f;
            case "_ew":
                var m, n;
                m = String(b);
                n = String(c);
                var p = m.length - n.length;
                return 0 <= p && m.indexOf(n, p) === p;
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var q;
                var r = a.ignore_case ? "i" : void 0;
                try {
                    var t = String(c) + r,
                        u = nd.get(t);
                    u || (u = new RegExp(c, r), nd.set(t, u));
                    q = u.test(b)
                } catch (v) {
                    q = !1
                }
                return q;
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Ju(b, c)
        }
        return !1
    };
    var Mu;

    function Nu(a) {
        if (void 0 === Mu) return "";
        var b = "&ccy=" + Mu;
        a.kb && (Mu = void 0);
        return b
    };

    function Ou() {
        var a = ["&cv=1", "&rv=" + me.Nf, "&tc=" + Hc.filter(function(b) {
            return b
        }).length];
        me.vd && a.push("&x=" + me.vd);
        return a.join("")
    };

    function Pu() {
        function a(c, d) {
            var e = bb(d);
            e && b.push(c + "=" + e)
        }
        var b = [];
        a("&u", "GTM");
        a("&ut", "TAGGING");
        a("&h", "HEALTH");
        return b.join("")
    };
    var Ev = function() {
            var a = !0;
            ck(7) && ck(9) && ck(10) || (a = !1);
            return a
        },
        Fv = function() {
            var a = !0;
            ck(3) && ck(4) || (a = !1);
            return a
        };
    var Jv = function(a, b) {
            if (!b.isGtmEvent) {
                var c = S(b, N.g.La),
                    d = S(b, N.g.Za),
                    e = S(b, c);
                if (void 0 === e) {
                    var f = void 0;
                    Gv.hasOwnProperty(c) ? f = Gv[c] : Hv.hasOwnProperty(c) && (f = Hv[c]);
                    1 === f && (f = Iv(c));
                    h(f) ? eq()(function() {
                        var g = eq().getByName(a).get(f);
                        d(g)
                    }) : d(void 0)
                } else d(e)
            }
        },
        Kv = function(a, b) {
            var c = a[N.g.Hb],
                d = b + ".",
                e = a[N.g.N] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                g = !!a[N.g.xb];
            e = String(e).replace(/\s+/g, "").split(",");
            var l = eq();
            l(d + "require", "linker");
            l(d + "linker:autoLink", e, f, g)
        },
        Ov = function(a,
            b, c) {
            if (Sg() && (!c.isGtmEvent || !Lv[a])) {
                var d = !Qg(N.g.K),
                    e = function(f) {
                        var g, l, m = eq(),
                            n = Mv(b, "", c),
                            p, q = n.createOnlyFields._useUp;
                        if (c.isGtmEvent || Nv(b, n.createOnlyFields)) {
                            c.isGtmEvent && (g = "gtm" + He(), l = n.createOnlyFields, n.gtmTrackerName && (l.name = g));
                            m(function() {
                                var t = m.getByName(b);
                                t && (p = t.get("clientId"));
                                c.isGtmEvent || m.remove(b)
                            });
                            m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
                            d && Qg(N.g.K) && (d = !1, m(function() {
                                var t = eq().getByName(c.isGtmEvent ? g : b);
                                !t || t.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = ie[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = ie[f]), t.set(n.fieldsToSet), c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend))
                            }));
                            c.isGtmEvent && m(function() {
                                m.remove(g)
                            })
                        }
                    };
                lh(function() {
                    return e(N.g.K)
                }, N.g.K);
                lh(function() {
                        return e(N.g.D)
                    },
                    N.g.D);
                c.isGtmEvent && (Lv[a] = !0)
            }
        },
        Pv = function(a, b) {
            kp() && b && (a[N.g.Gb] = b)
        },
        Yv = function(a, b, c) {
            function d() {
                var F = S(c, N.g.ic);
                l(function() {
                    if (!c.isGtmEvent && G(F)) {
                        var L = u.fieldsToSend,
                            M = m().getByName(n),
                            X;
                        for (X in F)
                            if (F.hasOwnProperty(X) && /^(dimension|metric)\d+$/.test(X) && void 0 != F[X]) {
                                var U = M.get(Iv(F[X]));
                                Qv(L, X, U)
                            }
                    }
                })
            }

            function e() {
                if (u.displayfeatures) {
                    var F = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: F
                    })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                l = c.isGtmEvent ? gq(S(c, "gaFunctionName")) : gq();
            if (sa(l)) {
                var m = eq,
                    n;
                c.isGtmEvent ? n = S(c, "name") || S(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(F) {
                        var L = [].slice.call(arguments, 0);
                        L[0] = n ? n + "." + L[0] : "" + L[0];
                        l.apply(window, L)
                    },
                    q = function(F) {
                        var L = function(ha, ba) {
                                for (var aa = 0; ba && aa < ba.length; aa++) p(ha, ba[aa])
                            },
                            M = c.isGtmEvent,
                            X = M ? Rv(u) : Sv(b, c);
                        if (X) {
                            var U = {};
                            Pv(U, F);
                            p("require", "ec", "ec.js", U);
                            M && X.Uf && p("set", "&cu", X.Uf);
                            var R = X.action;
                            if (M || "impressions" === R)
                                if (L("ec:addImpression",
                                        X.mi), !M) return;
                            if ("promo_click" === R || "promo_view" === R || M && X.Ld) {
                                var Q = X.Ld;
                                L("ec:addPromo", Q);
                                if (Q && 0 < Q.length && "promo_click" === R) {
                                    M ? p("ec:setAction", R, X.Qa) : p("ec:setAction", R);
                                    return
                                }
                                if (!M) return
                            }
                            "promo_view" !== R && "impressions" !== R && (L("ec:addProduct", X.Pb), p("ec:setAction", R, X.Qa))
                        }
                    },
                    r = function(F) {
                        if (F) {
                            var L = {};
                            if (G(F))
                                for (var M in Tv) Tv.hasOwnProperty(M) && Uv(Tv[M], M, F[M], L);
                            Pv(L, x);
                            p("require", "linkid", L)
                        }
                    },
                    t = function() {
                        if (mj()) {} else {
                            var F =
                                S(c, N.g.yj);
                            F && (p("require", F, {
                                dataLayer: me.da
                            }), p("require", "render"))
                        }
                    },
                    u = Mv(n, b, c),
                    v = function(F, L, M) {
                        M && (L = "" + L);
                        u.fieldsToSend[F] = L
                    };
                !c.isGtmEvent && Nv(n, u.createOnlyFields) && (l(function() {
                    m() && m().remove(n)
                }), Vv[n] = !1);
                l("create", f, u.createOnlyFields);
                if (u.createOnlyFields[N.g.Gb] && !c.isGtmEvent) {
                    var w = ve || xe ? jp(u.createOnlyFields[N.g.Gb], "/analytics.js") : void 0;
                    w && (g = w)
                }
                var x = c.isGtmEvent ? u.fieldsToSet[N.g.Gb] : u.createOnlyFields[N.g.Gb];
                if (x) {
                    var y = c.isGtmEvent ? u.fieldsToSet[N.g.te] : u.createOnlyFields[N.g.te];
                    y && !Vv[n] && (Vv[n] = !0, l(jq(n, y)))
                }
                c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(u.linkAttribution));
                var A = u[N.g.xa];
                A && A[N.g.N] && Kv(A, n);
                p("set", u.fieldsToSet);
                if (c.isGtmEvent) {
                    if (u.enableLinkId) {
                        var B = {};
                        Pv(B, x);
                        p("require", "linkid", "linkid.js", B)
                    }
                    Sg() && Ov(f, n, c)
                }
                if (b === N.g.bc)
                    if (c.isGtmEvent) {
                        e();
                        if (u.remarketingLists) {
                            var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", {
                                cookieName: D
                            })
                        }
                        q(x);
                        p("send", "pageview");
                        u.createOnlyFields._useUp && hq(n +
                            ".")
                    } else t(), p("send", "pageview", u.fieldsToSend);
                else b === N.g.ia ? (t(), nm(f, c), S(c, N.g.eb) && (Pl(["aw", "dc"]), hq(n + ".")), 0 != u.sendPageView && p("send", "pageview", u.fieldsToSend), Ov(f, n, c)) : b === N.g.Ea ? Jv(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0), c.isGtmEvent ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0), v("timingValue", Ba(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (u.fieldsToSend.hitType = "social", v("socialNetwork", u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || Wv[b]) && q(x), c.isGtmEvent && e(), u.fieldsToSend.hitType = "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value &&
                    v("eventValue", Ba(u.value))), p("send", u.fieldsToSend));
                if (!Xv && !c.isGtmEvent) {
                    Xv = !0;
                    var H = function() {
                            c.O()
                        },
                        I = function() {
                            m().loaded || H()
                        };
                    mj() ? E(I) : Kb(g, I, H)
                }
            } else E(c.O)
        },
        Zv = function(a, b, c, d) {
            mh(function() {
                Yv(a, b, d)
            }, [N.g.K, N.g.D])
        },
        aw = function(a) {
            function b(e) {
                function f(l, m) {
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (e[p]) {
                            g[l] = e[p];
                            break
                        }
                    }
                }
                var g = J(e);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant",
                    "item_variant"
                ]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) g.category = e.category;
                    else {
                        for (var l = "", m = 0; m < $v.length; m++) void 0 !== e[$v[m]] && (l && (l += "/"), l += e[$v[m]]);
                        l && (g.category = l)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return g
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && G(a[d]) && c.push(b(a[d]));
            return c.length ? c :
                void 0
        },
        bw = function(a) {
            return Qg(a)
        },
        cw = !1;
    var Xv, Vv = {},
        Lv = {},
        dw = {},
        ew = Object.freeze((dw.page_hostname = 1, dw[N.g.X] = 1, dw[N.g.rb] = 1, dw[N.g.Ja] = 1, dw[N.g.Aa] = 1, dw[N.g.Ka] = 1, dw[N.g.hc] = 1, dw[N.g.Uc] = 1, dw[N.g.Ga] = 1, dw[N.g.Ya] = 1, dw[N.g.oa] = 1, dw[N.g.ad] = 1, dw[N.g.Ba] = 1, dw[N.g.yb] = 1, dw)),
        fw = {},
        Gv = Object.freeze((fw.client_storage = "storage", fw.sample_rate = 1, fw.site_speed_sample_rate = 1, fw.store_gac = 1, fw.use_amp_client_id =
            1, fw[N.g.Wa] = 1, fw[N.g.sa] = "storeGac", fw[N.g.Ja] = 1, fw[N.g.Aa] = 1, fw[N.g.Ka] = 1, fw[N.g.hc] = 1, fw[N.g.Uc] = 1, fw[N.g.Ya] = 1, fw)),
        gw = {},
        hw = Object.freeze((gw._cs = 1, gw._useUp = 1, gw.allowAnchor = 1, gw.allowLinker = 1, gw.alwaysSendReferrer = 1, gw.clientId = 1, gw.cookieDomain = 1, gw.cookieExpires = 1, gw.cookieFlags = 1, gw.cookieName = 1, gw.cookiePath = 1, gw.cookieUpdate = 1, gw.legacyCookieDomain = 1, gw.legacyHistoryImport = 1, gw.name = 1, gw.sampleRate = 1, gw.siteSpeedSampleRate = 1, gw.storage = 1, gw.storeGac = 1, gw.useAmpClientId = 1, gw._cd2l = 1, gw)),
        iw = Object.freeze({
            anonymize_ip: 1
        }),
        jw = {},
        Hv = Object.freeze((jw.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, jw.app_id = 1, jw.app_installer_id = 1, jw.app_name = 1, jw.app_version = 1, jw.description = "exDescription", jw.fatal = "exFatal", jw.language = 1, jw.page_hostname = "hostname", jw.transport_type = "transport", jw[N.g.na] = "currencyCode", jw[N.g.qh] = 1, jw[N.g.oa] = "location", jw[N.g.ad] = "page", jw[N.g.Ba] = "referrer", jw[N.g.yb] =
            "title", jw[N.g.Cf] = 1, jw[N.g.ya] = 1, jw)),
        kw = {},
        lw = Object.freeze((kw.content_id = 1, kw.event_action = 1, kw.event_category = 1, kw.event_label = 1, kw.link_attribution = 1, kw.name = 1, kw[N.g.xa] = 1, kw[N.g.ph] = 1, kw[N.g.Ma] = 1, kw[N.g.Z] = 1, kw)),
        mw = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        $v = Object.freeze(["item_category",
            "item_category2", "item_category3", "item_category4", "item_category5"
        ]),
        nw = {},
        Tv = Object.freeze((nw.levels = 1, nw[N.g.Aa] = "duration", nw[N.g.hc] = 1, nw)),
        ow = {},
        pw = Object.freeze((ow.anonymize_ip = 1, ow.fatal = 1, ow.send_page_view = 1, ow.store_gac = 1, ow.use_amp_client_id = 1, ow[N.g.sa] = 1, ow[N.g.qh] = 1, ow)),
        Uv = function(a, b, c, d) {
            if (void 0 !== c)
                if (pw[b] && (c = Da(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[Iv(b)] = c;
                else if (h(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        Iv = function(a) {
            return a &&
                h(a) ? a.replace(/(_[a-z])/g, function(b) {
                    return b[1].toUpperCase()
                }) : a
        },
        qw = {},
        Wv = Object.freeze((qw.checkout_progress = 1, qw.select_content = 1, qw.set_checkout_option = 1, qw[N.g.Xb] = 1, qw[N.g.Yb] = 1, qw[N.g.Db] = 1, qw[N.g.Zb] = 1, qw[N.g.Ua] = 1, qw[N.g.pb] = 1, qw[N.g.Va] = 1, qw[N.g.ra] = 1, qw[N.g.ac] = 1, qw[N.g.Da] = 1, qw)),
        rw = {},
        sw = Object.freeze((rw.checkout_progress = 1, rw.set_checkout_option = 1, rw[N.g.Mg] = 1, rw[N.g.Ng] = 1, rw[N.g.Xb] = 1, rw[N.g.Yb] = 1, rw[N.g.Og] = 1, rw[N.g.Db] = 1, rw[N.g.ra] = 1, rw[N.g.ac] = 1, rw[N.g.Pg] = 1, rw)),
        tw = {},
        uw = Object.freeze((tw.generate_lead =
            1, tw.login = 1, tw.search = 1, tw.select_content = 1, tw.share = 1, tw.sign_up = 1, tw.view_search_results = 1, tw[N.g.Zb] = 1, tw[N.g.Ua] = 1, tw[N.g.pb] = 1, tw[N.g.Va] = 1, tw[N.g.Da] = 1, tw)),
        vw = function(a) {
            var b = "general";
            sw[a] ? b = "ecommerce" : uw[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        ww = {},
        xw = Object.freeze((ww.view_search_results = 1, ww[N.g.Ua] = 1, ww[N.g.Va] = 1, ww[N.g.Da] = 1, ww)),
        Qv = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        yw = function(a) {
            if (ua(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e =
                            d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        Mv = function(a, b, c) {
            var d = function(M) {
                    return S(c, M)
                },
                e = {},
                f = {},
                g = {},
                l = {},
                m = yw(d(N.g.wj));
            !c.isGtmEvent && m && Qv(f, "exp", m);
            g["&gtm"] = oj(!0);
            c.isGtmEvent || (g._no_slc = !0);
            Sg() && (l._cs = bw);
            var n = d(N.g.ic);
            if (!c.isGtmEvent && G(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && Qv(f, p, q)
                    }
            for (var r = !c.isGtmEvent, t = li(c), u = 0; u <
                t.length; ++u) {
                var v = t[u];
                if (c.isGtmEvent) {
                    var w = d(v);
                    mw.hasOwnProperty(v) ? e[v] = w : hw.hasOwnProperty(v) ? l[v] = w : g[v] = w
                } else {
                    var x = void 0;
                    x = v !== N.g.T ? d(v) : mi(c, v);
                    if (lw.hasOwnProperty(v)) Uv(lw[v], v, x, e);
                    else if (iw.hasOwnProperty(v)) Uv(iw[v], v, x, g);
                    else if (Hv.hasOwnProperty(v)) Uv(Hv[v], v, x, f);
                    else if (Gv.hasOwnProperty(v)) Uv(Gv[v], v, x, l);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v)) Uv(1, v, x, f);
                    else if (v === N.g.T) {
                        if (!cw) {
                            var y = Pa(x);
                            y && (f["&did"] = y)
                        }
                        var A = void 0,
                            B = void 0;
                        b === N.g.ia ? A = Pa(mi(c,
                            v), ".") : (A = Pa(mi(c, v, 1), "."), B = Pa(mi(c, v, 2), "."));
                        A && (f["&gdid"] = A);
                        B && (f["&edid"] = B)
                    } else v === N.g.Ga && 0 > t.indexOf(N.g.hc) && (l.cookieName = x + "_ga");
                    P(47) && ew[v] && (c.m.hasOwnProperty(v) || b === N.g.ia && c.h.hasOwnProperty(v)) && (r = !1)
                }
            }
            P(47) && r && (f["&jsscut"] = "1");
            !1 !== d(N.g.pf) && !1 !== d(N.g.rb) && Ev() || (g.allowAdFeatures = !1);
            Gi(c) && Fv() || (g.allowAdPersonalizationSignals = !1);
            !c.isGtmEvent && d(N.g.eb) && (l._useUp = !0);
            if (c.isGtmEvent) {
                l.name = l.name || e.gtmTrackerName;
                var D = g.hitCallback;
                g.hitCallback = function() {
                    sa(D) &&
                        D();
                    c.M()
                }
            } else {
                Qv(l, "cookieDomain", "auto");
                Qv(g, "forceSSL", !0);
                Qv(e, "eventCategory", vw(b));
                xw[b] && Qv(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? Qv(e, "eventLabel", d(N.g.ph)) : "search" === b || "view_search_results" === b ? Qv(e, "eventLabel", d(N.g.Gj)) : "select_content" === b && Qv(e, "eventLabel", d(N.g.oj));
                var H = e[N.g.xa] || {},
                    I = H[N.g.nc];
                I || 0 != I && H[N.g.N] ? l.allowLinker = !0 : !1 === I && Qv(l, "useAmpClientId", !1);
                f.hitCallback = c.M;
                l.name = a
            }
            Sg() && (g["&gcs"] = Hi(), P(54) && (g["&gcd"] = Li()), Qg(N.g.K) || (l.storage =
                "none"), Qg(N.g.D) || (g.allowAdFeatures = !1, l.storeGac = !1));
            P(56) && (eh() && (g["&dma_cps"] = Mi()), Xe() && (g["&dma"] = "1"));
            var F = lp(c) || d(N.g.Gb),
                L = d(N.g.te);
            F && (c.isGtmEvent || (l[N.g.Gb] = F), l._cd2l = !0);
            L && !c.isGtmEvent && (l[N.g.te] = L);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = l;
            return e
        },
        Rv = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.Uf = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.mi = "impressions" === b.translateIfKeyEquals ? aw(d) :
                    d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Ld = "promoView" === b.translateIfKeyEquals ? aw(e) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Ld = "promoClick" === b.translateIfKeyEquals ? aw(f) : f;
                c.Qa = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var l = b[g].products;
                    c.Pb = "products" === b.translateIfKeyEquals ? aw(l) : l;
                    c.Qa =
                        b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        Sv = function(a, b) {
            function c(u) {
                return {
                    id: d(N.g.ka),
                    affiliation: d(N.g.Ug),
                    revenue: d(N.g.Z),
                    tax: d(N.g.uf),
                    shipping: d(N.g.Wc),
                    coupon: d(N.g.Vg),
                    list: d(N.g.tf) || d(N.g.Vc) || u
                }
            }
            for (var d = function(u) {
                    return S(b, u)
                }, e = d(N.g.R), f, g = 0; e && g < e.length && !(f = e[g][N.g.tf] || e[g][N.g.Vc]); g++);
            var l = d(N.g.ic);
            if (G(l))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in l) l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != l[p] && Qv(n, p, n[l[p]])
                }
            var q =
                null,
                r = d(N.g.rj);
            if (a === N.g.ra || a === N.g.ac) q = {
                action: a,
                Qa: c(),
                Pb: aw(e)
            };
            else if (a === N.g.Xb) q = {
                action: "add",
                Qa: c(),
                Pb: aw(e)
            };
            else if (a === N.g.Yb) q = {
                action: "remove",
                Qa: c(),
                Pb: aw(e)
            };
            else if (a === N.g.Da) q = {
                action: "detail",
                Qa: c(f),
                Pb: aw(e)
            };
            else if (a === N.g.Ua) q = {
                action: "impressions",
                mi: aw(e)
            };
            else if (a === N.g.Va) q = {
                action: "promo_view",
                Ld: aw(r) || aw(e)
            };
            else if ("select_content" === a && r && 0 < r.length || a === N.g.pb) q = {
                action: "promo_click",
                Ld: aw(r) || aw(e)
            };
            else if ("select_content" === a || a === N.g.Zb) q = {
                action: "click",
                Qa: {
                    list: d(N.g.tf) || d(N.g.Vc) || f
                },
                Pb: aw(e)
            };
            else if (a === N.g.Db || "checkout_progress" === a) {
                var t = {
                    step: a === N.g.Db ? 1 : d(N.g.rf),
                    option: d(N.g.me)
                };
                q = {
                    action: "checkout",
                    Pb: aw(e),
                    Qa: J(c(), t)
                }
            } else "set_checkout_option" === a && (q = {
                action: "checkout_option",
                Qa: {
                    step: d(N.g.rf),
                    option: d(N.g.me)
                }
            });
            q && (q.Uf = d(N.g.na));
            return q
        },
        zw = {},
        Nv = function(a, b) {
            var c = zw[a];
            zw[a] = J(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    Ze();

    function Kw() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var Lw = function() {
            var a = Kw();
            a.hid = a.hid || xa();
            return a.hid
        },
        Mw = function(a, b) {
            var c = Kw();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var Ix = window,
        Jx = document,
        Kx = function(a) {
            var b = Ix._gaUserPrefs;
            if (b && b.ioo && b.ioo() || Jx.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === Ix["ga-disable-" + a]) return !0;
            try {
                var c = Ix.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Oi("AMP_TOKEN", String(Jx.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Jx.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function Sx(a) {
        k(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[N.g.Na] || {};
        k(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var ay = function(a, b) {};

    function $x(a, b) {
        var c = function() {};
        return c
    }

    function by(a, b, c) {};
    var cy = $x;
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var ey = encodeURI,
        Y = encodeURIComponent,
        fy = function(a, b, c) {
            Ob(a, b, c)
        },
        gy = function(a, b) {
            if (!a) return !1;
            var c = vf(xf(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length -
                        e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        hy = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = {
        o: {}
    };
    Z.o.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.s = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.o.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.s = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0;
                Z.__v.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = cu(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                ku(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();

    Z.o.rep = ["google"],
        function() {
            (function(a) {
                Z.__rep = a;
                Z.__rep.s = "rep";
                Z.__rep.isVendorTemplate = !0;
                Z.__rep.priorityOverride = 0;
                Z.__rep.isInfrastructure = !1
            })(function(a) {
                var b = Fh(a.vtp_containerId),
                    c = $l(b, !0),
                    d;
                switch (c.prefix) {
                    case "AW":
                        d = Tu;
                        break;
                    case "DC":
                        d = pv;
                        break;
                    case "GF":
                        d = vv;
                        break;
                    case "HA":
                        d = Av;
                        break;
                    case "UA":
                        d = Zv;
                        break;
                    case "MC":
                        d = cy(c, a.vtp_gtmEventId);
                        break;
                    default:
                        E(a.vtp_gtmOnFailure);
                        return
                }
                if (d) {
                    E(a.vtp_gtmOnSuccess);
                    var e = d,
                        f = $l(Bh(b), !0);
                    f && Nr.register(f, e);
                    if (a.vtp_remoteConfig) {
                        var g =
                            a.vtp_remoteConfig || {},
                            l = $l(Bh(b), !0);
                        l && Wr(l, g)
                    }
                } else E(a.vtp_gtmOnFailure)
            })
        }();
    Z.o.cid = ["google"],
        function() {
            (function(a) {
                Z.__cid = a;
                Z.__cid.s = "cid";
                Z.__cid.isVendorTemplate = !0;
                Z.__cid.priorityOverride = 0;
                Z.__cid.isInfrastructure = !1
            })(function() {
                return Ch()
            })
        }();












    Z.o.get = ["google"],
        function() {
            (function(a) {
                Z.__get = a;
                Z.__get.s = "get";
                Z.__get.isVendorTemplate = !0;
                Z.__get.priorityOverride = 0;
                Z.__get.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_settings,
                    c = b.eventParameters || {},
                    d = String(a.vtp_eventName),
                    e = {};
                e.eventId = a.vtp_gtmEventId;
                e.priorityId = a.vtp_gtmPriorityId;
                a.vtp_deferrable && (e.deferrable = !0);
                var f = ir(String(b.streamId), d, c);
                lr(f, e.eventId, e);
                a.vtp_gtmOnSuccess()
            })
        }();




    var zz = {};
    zz.dataLayer = Oe;
    zz.callback = function(a) {
        Ee.hasOwnProperty(a) && sa(Ee[a]) && Ee[a]();
        delete Ee[a]
    };
    zz.bootstrap = 0;
    zz._spx = !1;

    function Az() {
        ne[Ch()] = ne[Ch()] || zz;
        P(77) || Dh(!0) && (ne["ctid_" + Dh(!0)] = zz);
        Ih();
        Nh() || k(Oh(), function(a, b) {
            pp(a, b.transportUrl, b.context);
            K(92)
        });
        Ka(Fe, Z.o);
        Qc = Zc
    }
    (function(a) {
        function b() {
            m = C.documentElement.getAttribute("data-tag-assistant-present");
            Zs(m) && (l = g.Ij)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (C.referrer) {
                var d = xf(C.referrer);
                c = "cct.google" === uf(d, "host")
            }
            if (!c) {
                var e = Ui("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, Kb("https://cct.google/taggy/agent.js"))
        }
        if (ze) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    te ? (v = "OGT", w = "GTAG") : ze && (w = v = "OPT");
                    var x = z["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        z["google.tagmanager.debugui2.queue"] = x, Kb("https://" + me.be + "/debug/bootstrap?id=" + vh.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + oj()));
                    var y = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Eb,
                            containerProduct: v,
                            debug: !1,
                            id: vh.ctid,
                            destinations: zh()
                        }
                    };
                    y.data.resume = function() {
                        a()
                    };
                    me.Ni && (y.data.initialPublish = !0);
                    x.push(y)
                },
                g = {
                    Tl: 1,
                    Jj: 2,
                    Uj: 3,
                    Pi: 4,
                    Ij: 5
                },
                l = void 0,
                m = void 0,
                n = vf(z.location, "query", !1, void 0, "gtm_debug");
            Zs(n) && (l = g.Jj);
            if (!l && C.referrer) {
                var p = xf(C.referrer);
                "tagassistant.google.com" === uf(p, "host") && (l = g.Uj)
            }
            if (!l) {
                var q =
                    Ui("__TAG_ASSISTANT");
                q.length && q[0].length && (l = g.Pi)
            }
            l || b();
            if (!l && $s(m)) {
                var r = function() {
                        if (t) return !0;
                        t = !0;
                        b();
                        l && Eb ? f(l) : a()
                    },
                    t = !1;
                Pb(C, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else l && Eb ? f(l) : a()
        }
    })(function() {
        Gh();
        P(32) && Co();
        yg().m();
        Zj();
        if (P(76) ? Jh() : Dh(!0) ? ne["ctid_" + Dh(!0)] : ne[Ch()]) {
            xr();
        } else {
            Pc();
            Jc = Z;
            Kc = Ku;
            Az();
            nh();
            Ys();
            Rp();
            ns = !1;
            "complete" === C.readyState ? ps() : Pb(z, "load", ps);
            Wh && (Rh(ii), z.setInterval(hi, 864E5));
            Rh(Ou);
            Rh(Pq);
            Rh(Pu);
            Rh(Mr);
            Rh($q);
            Rh(Ep);
            Rh(ek);
            Rh(Cp);
            Rh(Wq);
            Rh(Nu);
            P(63) && Rh(Sq);
            ut();
            Ue(1);
            P(74) && yr();
            De = Ha();
            zz.bootstrap = De;
            if ("function" !== typeof z.queueMicrotask) {
                K(137);
                var a = Ha();
                E(function() {
                    Wh && (Mu = Ha() - a)
                })
            }
            zz._spx = !0;
            Ws();
            P(32) && Do()
        }
    });

})()