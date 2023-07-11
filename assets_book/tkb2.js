"use strict";
Array.prototype.indexOf = Array.prototype.indexOf || function(t, r) {
    r = r || 0;
    for (var e = this.length; r < e;) {
        if (this[r] === t) return r;
        ++r
    }
    return -1
}, Array.prototype.remove = Array.prototype.remove || function(t) {
    t = this.indexOf(t); - 1 < t && this.splice(t, 1)
}, Array.prototype.insert = Array.prototype.insert || function(t, r) {
    this.splice(t, 0, r)
}, Array.prototype.hasElement = Array.prototype.hasElement || function() {
    return !!this.length
}, Array.prototype.includes = Array.prototype.includes || function(t) {
    for (var r = this.length - 1; 0 <= r; r--)
        if (this[r] === t) return !0;
    return !1
}, String.prototype.replaceAll = function(t, r, e) {
    return this.replace(new RegExp(t.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), e ? "gi" : "g"), "string" == typeof r ? r.replace(/\$/g, "$$$$") : r)
}, "function" != typeof String.prototype.startsWith && (String.prototype.startsWith = function(t) {
    return this.substring(0, t.length) === t
}), "function" != typeof String.prototype.endsWith && (String.prototype.endsWith = function(t) {
    return this.substring(this.length - t.length, this.length) === t
});
"use strict";
var tkb = window.tkb || (window.tkb = {});
tkb.data = tkb.data || {}, document.addEventListener("DOMContentLoaded", function(e) {
    var t = ".noscript { display: none; }",
        d = document.head || document.getElementsByTagName("head")[0],
        n = document.createElement("style");
    n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t)), d.appendChild(n)
});
"use strict";
tkb.isMobile = function() {
    var i, a = !1;
    return i = navigator.userAgent || navigator.vendor || window.opera, a = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0, 4)) ? !0 : a
}(), tkb.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent), tkb.isAndroid = /(android)/i.test(navigator.userAgent), tkb.isIOSBrowser = /safari/i.test(navigator.userAgent), tkb.isWebview = !tkb.isIOSBrowser && !window.navigator.standalone, tkb.isIOSFbWebView = -1 < navigator.userAgent.indexOf("FBAN"), tkb.isWindows = -1 < navigator.platform.indexOf("Win"), tkb.isMac = -1 < navigator.platform.indexOf("Mac");
"use strict";
tkb.cookie = {
    getItem: function(e) {
        return e && decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
    },
    setItem: function(e, n, o, t, c, r) {
        if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
        var s = "";
        if (o) switch (o.constructor) {
            case Number:
                s = o === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + o;
                break;
            case String:
                s = "; expires=" + o;
                break;
            case Date:
                s = "; expires=" + o.toUTCString()
        }
        return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(n) + s + (c ? "; domain=" + c : "") + (t ? "; path=" + t : "") + (r ? "; secure" : ""), !0
    },
    removeItem: function(e, n, o) {
        return !!this.hasItem(e) && (n = n || "/", document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (o ? "; domain=" + o : "") + (n ? "; path=" + n : ""), !0)
    },
    hasItem: function(e) {
        return !!e && new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
    },
    keys: function() {
        for (var e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), n = e.length, o = 0; o < n; o++) e[o] = decodeURIComponent(e[o]);
        return e
    }
};
"use strict";
tkb.url = {
    getParamValue: function(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        e = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
        return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
    },
    insertParam: function(e, n, r) {
        r = r || location.href;
        var o, t = document.createElement("a"),
            a = /(?:\?|&amp;|&)+([^=]+)(?:=([^&]*))*/g,
            c = [];
        for (t.href = r, e = encodeURIComponent(e); o = a.exec(t.search);) e != o[1] && c.push(o[1] + (o[2] ? "=" + o[2] : ""));
        return c.push(e + (n ? "=" + encodeURIComponent(n) : "")), t.search = c.join("&"), t.href
    },
    removeParam: function(e, n) {
        var r = (n = n || location.href).split("?");
        if (2 <= r.length) {
            for (var o = encodeURIComponent(e) + "=", t = r[1].split(/[&;]/g), a = t.length; 0 < a--;) - 1 !== t[a].lastIndexOf(o, 0) && t.splice(a, 1);
            return n = r[0] + "?" + t.join("&")
        }
        return n
    }
};
"use strict";
tkb.model = tkb.model || {}, tkb.model.helper = {
    mapArrayModel: function(e, r) {
        var t = [];
        return e instanceof Array && e.forEach(function(e) {
            t.push(new r(e))
        }), t
    }
};
var initTkbClassie = function() {
    "use strict";

    function a(s) {
        return new RegExp("(^|\\s+)" + s + "(\\s+|$)")
    }
    var e, t, c;

    function s(s, n) {
        (e(s, n) ? c : t)(s, n)
    }
    return c = "classList" in document.documentElement ? (e = function(s, n) {
        return s.classList.contains(n)
    }, t = function(s, n) {
        s.classList.add(n)
    }, function(s, n) {
        s.classList.remove(n)
    }) : (e = function(s, n) {
        return a(n).test(s.className)
    }, t = function(s, n) {
        e(s, n) || (s.className = s.className + " " + n)
    }, function(s, n) {
        s.className = s.className.replace(a(n), " ")
    }), {
        hasClass: e,
        addClass: t,
        removeClass: c,
        toggleClass: s,
        has: e,
        add: t,
        remove: c,
        toggle: s
    }
};
tkb.Classie = initTkbClassie();
"use strict";
tkb.loadScript = function(l, e, a) {
    var r = document.getElementsByTagName("head")[0],
        c = document.createElement("script");
    c.type = "text/javascript", c.src = l, e && (c.async = !0), a && "function" == typeof a && (c.onreadystatechange = a, c.onload = a), r.appendChild(c)
}, tkb.isNumeric = function(l) {
    return !isNaN(parseFloat(l)) && isFinite(l)
}, tkb.stripVNSign = function(l) {
    return l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = (l = l.replaceAll("Ă", "A")).replaceAll("ă", "a")).replaceAll("Â", "A")).replaceAll("â", "a")).replaceAll("Ê", "E")).replaceAll("ê", "e")).replaceAll("I", "I")).replaceAll("i", "i")).replaceAll("Ô", "O")).replaceAll("ô", "o")).replaceAll("Ơ", "O")).replaceAll("ơ", "o")).replaceAll("Ư", "U")).replaceAll("ư", "u")).replaceAll("À", "A")).replaceAll("à", "a")).replaceAll("Ằ", "A")).replaceAll("ằ", "a")).replaceAll("Ầ", "A")).replaceAll("ầ", "a")).replaceAll("È", "E")).replaceAll("è", "e")).replaceAll("Ề", "E")).replaceAll("ề", "e")).replaceAll("Ì", "I")).replaceAll("ì", "i")).replaceAll("Ò", "O")).replaceAll("ò", "o")).replaceAll("Ồ", "O")).replaceAll("ồ", "o")).replaceAll("Ờ", "O")).replaceAll("ờ", "o")).replaceAll("Ù", "U")).replaceAll("ù", "u")).replaceAll("Ừ", "U")).replaceAll("ừ", "u")).replaceAll("Ỳ", "Y")).replaceAll("ỳ", "y")).replaceAll("Á", "A")).replaceAll("á", "a")).replaceAll("Ắ", "A")).replaceAll("ắ", "a")).replaceAll("Ấ", "A")).replaceAll("ấ", "a")).replaceAll("É", "E")).replaceAll("é", "e")).replaceAll("Ế", "E")).replaceAll("ế", "e")).replaceAll("Í", "I")).replaceAll("í", "i")).replaceAll("Ó", "O")).replaceAll("ó", "o")).replaceAll("Ố", "O")).replaceAll("ố", "o")).replaceAll("Ớ", "O")).replaceAll("ớ", "o")).replaceAll("Ú", "U")).replaceAll("ú", "u")).replaceAll("Ứ", "U")).replaceAll("ứ", "u")).replaceAll("Ý", "Y")).replaceAll("ý", "y")).replaceAll("Ả", "A")).replaceAll("ả", "a")).replaceAll("Ẳ", "A")).replaceAll("ẳ", "a")).replaceAll("Ẩ", "A")).replaceAll("ẩ", "a")).replaceAll("Ẻ", "E")).replaceAll("ẻ", "e")).replaceAll("Ể", "E")).replaceAll("ể", "e")).replaceAll("Ỉ", "I")).replaceAll("ỉ", "i")).replaceAll("Ỏ", "O")).replaceAll("ỏ", "o")).replaceAll("Ổ", "O")).replaceAll("ổ", "o")).replaceAll("Ở", "O")).replaceAll("ở", "o")).replaceAll("Ủ", "U")).replaceAll("ủ", "u")).replaceAll("Ử", "U")).replaceAll("ử", "u")).replaceAll("Ỷ", "Y")).replaceAll("ỷ", "y")).replaceAll("Ã", "A")).replaceAll("ã", "a")).replaceAll("Ẵ", "A")).replaceAll("ẵ", "a")).replaceAll("Ẫ", "A")).replaceAll("ẫ", "a")).replaceAll("Ẽ", "E")).replaceAll("ẽ", "e")).replaceAll("Ễ", "E")).replaceAll("ễ", "e")).replaceAll("Ĩ", "I")).replaceAll("ĩ", "i")).replaceAll("Õ", "O")).replaceAll("õ", "o")).replaceAll("Ỗ", "O")).replaceAll("ỗ", "o")).replaceAll("Ỡ", "O")).replaceAll("ỡ", "o")).replaceAll("Ũ", "U")).replaceAll("ũ", "u")).replaceAll("Ữ", "U")).replaceAll("ữ", "u")).replaceAll("Ỹ", "Y")).replaceAll("ỹ", "y")).replaceAll("Ạ", "A")).replaceAll("ạ", "a")).replaceAll("Ặ", "A")).replaceAll("ặ", "a")).replaceAll("Ậ", "A")).replaceAll("ậ", "a")).replaceAll("Ẹ", "E")).replaceAll("ẹ", "e")).replaceAll("Ệ", "E")).replaceAll("ệ", "e")).replaceAll("Ị", "I")).replaceAll("ị", "i")).replaceAll("Ọ", "O")).replaceAll("ọ", "o")).replaceAll("Ộ", "O")).replaceAll("ộ", "o")).replaceAll("Ợ", "O")).replaceAll("ợ", "o")).replaceAll("Ụ", "U")).replaceAll("ụ", "u")).replaceAll("Ự", "U")).replaceAll("ự", "u")).replaceAll("Ỵ", "Y")).replaceAll("ỵ", "y")).replaceAll("Đ", "D")).replaceAll("đ", "d")
}, tkb.generateGuid = function() {
    function l() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return l() + l() + "-" + l() + "-" + l() + "-" + l() + "-" + l() + l() + l()
};
"use strict";
var tkb = window.tkb || (window.tkb = {});
tkb.tracking = {
    trackPageView: function() {
        try {
            "undefined" != typeof ga && ga("gtm1.send", "pageview", {
                page: location.pathname + location.search + location.hash
            }), "undefined" != typeof fbq && fbq("track", "PageView")
        } catch (t) {}
    },
    trackSignup: function() {
        try {
            "undefined" != typeof ga && ga("gtm1.send", "event", "Account", "Sign Up", document.URL)
        } catch (t) {}
    },
    trackLogin: function(t) {
        try {
            "undefined" != typeof ga && ga("gtm1.send", "event", "Account", "Log in", document.URL)
        } catch (t) {}
    },
    trackLoginWithFacebook: function(t) {
        try {
            "undefined" != typeof ga && ga("gtm1.send", "event", "Account", "Log in with Facebook", document.URL)
        } catch (t) {}
    },
    trackLogout: function(t) {
        try {
            "undefined" != typeof ga && ga("gtm1.send", "event", "Account", "Log out", document.URL)
        } catch (t) {}
    },
    trackPurchase: function(t) {
        console.warn("trackPurchase")
    },
    trackPurchase2: function(t) {
        console.warn("trackPurchase2")
    },
    trackViewEvent: function(t) {
        try {
            "undefined" != typeof fbq && fbq("track", "ViewContent", {
                content_name: t.eventName,
                content_ids: ["" + t.eventId],
                content_type: "event",
                referrer: document.referrer,
                userAgent: navigator.userAgent,
                language: tkb.siteSetting.culture.currenctCulture
            })
        } catch (t) {}
    },
    trackCustom: function(t) {
        try {
            var e;
            "undefined" != typeof ga && (e = Object.assign({}, {
                hitType: "event"
            }, t), ga("gtm1.send", e))
        } catch (t) {}
    },
    trackFacebookEvent: function(t) {
        "undefined" != typeof fbq && fbq("track", t.eventName)
    }
}, window.onpopstate = function(t) {
    t.state && tkb.tracking.trackPageView()
};