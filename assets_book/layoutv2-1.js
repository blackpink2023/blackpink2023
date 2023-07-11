var addRedirectUrl, triggerMenu, _errorIcon = '<div class="effect-animscale err-icon ello-attention-2"></div>',
    resetDialogStatus = (window.isMobileDevice = function() {
        var e, a = !1;
        return e = navigator.userAgent || navigator.vendor || window.opera, a = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4)) ? !0 : a
    }(), function(e) {
        e = $(e);
        e.validate().resetForm(), e.removeClass("success"), e.find('[data-err="alerter"]').addClass("hide").removeClass("effect-animscale"), e.find($("input")).val(""), Ladda.stopAll()
    }),
    showDialogAlert = function(e, a, t) {
        var n = e.find('[data-err="message"]'),
            o = (e.show(), setTimeout(function() {
                e.fadeOut()
            }, 3e3), e.find(".alert"));
        t && o.addClass(t), a && n.html(a), e.removeClass("hide", function() {
            e.addClass("effect-animscale")
        })
    },
    bindCreateEvent = function() {
        $('[data-action="create-e"]').on("click", function(e) {
            if (tkb.tracking.trackCustom({
                    eventCategory: "Create event",
                    eventAction: "Click Create event button on top nav bar"
                }), !userId) return $('[modal="signin-modal"]').modal("show"), e.preventDefault(), e.stopPropagation(), !1
        })
    };
$(document).ready(function() {
    window.snapper ? window.snapper.enable() : "undefined" != typeof Snap && (window.snapper = new Snap({
        element: document.getElementById("content"),
        touchToDrag: !1
    })), addRedirectUrl = function() {
        $("[data-select-language]").each(function() {
            var e = $(this),
                a = e.attr("href");
            e.attr("href", a + "?redirectUrl=" + document.URL)
        })
    }, triggerMenu = function() {
        var e;
        window.snapper && ((e = $("[data-menu-trigger]")).click(function() {
            "closed" == snapper.state().state ? snapper.open("right") : snapper.close()
        }), snapper.on("close", function() {
            e.removeClass("nav-is-visible")
        }).on("open", function() {
            e.addClass("nav-is-visible")
        }))
    }, window.showNavUnderHeader = function() {
        $("#nav-under-header").slideDown()
    }, window.hideNavUnderHeader = function() {
        $("#nav-under-header").slideUp()
    }, window.addRedirectLocation = function() {
        var a = {
            "ho-chi-minh": "Ho Chi Minh",
            "ha-noi": "Ha Noi",
            "other-locations": "Other locations"
        };
        $("[data-redirect-location-url]").on("click", function() {
            var e = $(this),
                e = (tkb.tracking.trackCustom({
                    eventCategory: "Select location on homepage",
                    eventAction: a[e.data("city")],
                    transport: "beacon"
                }), e.data("redirect-location-url"));
            window.location.origin + e != window.location.href && (window.location.href = e)
        })
    }, addRedirectUrl(), triggerMenu(), addRedirectLocation(), $(document.body).on("click", ".dropdown-menu li", function(e) {
        var e = $(e.currentTarget),
            a = e.closest(".btn-group");
        0 < a.length && a.find('[data-bind="label"]').text(e.text()).end().children(".dropdown-toggle").dropdown("toggle")
    }), bindCreateEvent();
    var n, e = document.querySelector(".btn-submit-subscriber");
    null != e && (n = Ladda.create(e), $('[name="frmSubscribe"]').validate({
        messages: {
            email: _errorIcon
        },
        submitHandler: function(e) {
            n.start(), _alerter = $(e).find('[data-err="alerter"]'), $.ajax({
                url: "/Home/SubscibeNewEmail",
                type: "post",
                data: {
                    email: e.email.value
                },
                cache: !1,
                success: function(e) {
                    n.stop(), showDialogAlert(_alerter, e.mess, "alert-success")
                },
                fail: function(e, a, t) {
                    n.stop(), showDialogAlert(_alerter, t, "alert-warning")
                }
            })
        }
    })), setTimeout(function() {
        var e = document.querySelector("body > #ui-datepicker-div");
        e && document.body.removeChild(e)
    }, 50), Ladda.bind('[data-loading="ladda"]'), Ladda.stopAll(), $(".zalora-link-mb .close-btn-mb").on("click", function() {
        $(".zalora-link-mb").attr("href", "javascript:void(0)"), $(".zalora-mb").hide()
    })
});
var ajaxSignOut = function() {
        $.ajax({
            url: "/User/AjaxSignOut",
            type: "POST"
        }).done(function(a) {
            a.success && (localStorage.removeItem("TBoxRefresh"), location.assign("/"))
        }).fail(function(a, e, t) {
            alert(t)
        })
    },
    bindingSignOut = function() {
        $('[data-action="logout"]').click(function() {
            tkb.tracking.trackLogout(), ajaxSignOut()
        })
    },
    fbLoginBtn = (bindingSignOut(), $('[modal="signin-modal"]').on("hidden.bs.modal", function() {
        resetDialogStatus(this)
    }).validate({
        messages: {
            email: _errorIcon,
            password: _errorIcon
        },
        submitHandler: function(e) {
            var t = $(e),
                n = t.find('[data-err="alerter"]');
            $.ajax({
                url: "/User/AjaxSignIn",
                type: "post",
                data: {
                    Email: e.email.value,
                    Password: e.password.value,
                    RememberMe: e.remember.checked,
                    ReturnUrl: window.location.href
                },
                success: function(a) {
                    window.location.reload(), 1 == a.success ? (tkb.tracking.trackLogin(), $.ajax({
                        url: "/layout/PartialNavbarHeaderRight",
                        type: "get",
                        success: function(a) {
                            var e = tkb.url.getParamValue("ReturnUrl");
                            e ? window.location.href = e : ($("#top-nav-right").html(a), t.modal("toggle"), bindingSignOut(), bindCreateEvent(), triggerMenu())
                        },
                        fail: function(a, e, t) {
                            showDialogAlert(n, t, null)
                        }
                    }), $.ajax({
                        url: "/layout/MobileMenu",
                        type: "get",
                        success: function(a) {
                            $("#snap-drawers").html(a), bindingSignOut()
                        },
                        fail: function(a, e, t) {
                            showDialogAlert(n, t, null)
                        }
                    }), $(document).trigger("loginStateChanged", [e.email.value]), t.find($("input")).val("")) : showDialogAlert(n, a.errorMsg, null), Ladda.stopAll()
                },
                fail: function(a, e, t) {
                    showDialogAlert(n, t, null), Ladda.stopAll()
                }
            })
        }
    }), $('[modal="signup-modal"]').on("hidden.bs.modal", function() {
        resetDialogStatus(this)
    }).validate({
        messages: {
            firstname: _errorIcon,
            lastname: _errorIcon,
            email: _errorIcon,
            password: _errorIcon
        },
        submitHandler: function(a) {
            var t = $(a),
                n = t.find('[data-err="alerter"]');
            $.ajax({
                url: "/User/AjaxRegister",
                type: "post",
                data: {
                    Email: a.email.value,
                    Password: a.password.value,
                    ConfirmPassword: a.password.value,
                    FirstName: a.firstname.value,
                    LastName: a.lastname.value
                },
                success: function(a) {
                    var e;
                    tkb.tracking.trackSignup(), 1 == a.success ? (e = tkb.url.getParamValue("ReturnUrl")) ? window.location.href = e : (t.addClass("success"), t.find($("input")).val("")) : (e = "Sorry, unexpected error happened!", a.errorMsg && (e = a.errorMsg), showDialogAlert(n, e, null)), Ladda.stopAll()
                },
                fail: function(a, e, t) {
                    showDialogAlert(n, t, null), Ladda.stopAll()
                }
            })
        }
    }), $('[modal="resetpwd-modal"]').on("hidden.bs.modal", function() {
        resetDialogStatus(this)
    }).validate({
        messages: {
            email: _errorIcon
        },
        submitHandler: function(a) {
            var e = $(a),
                n = e.find('[data-err="alerter"]');
            $.ajax({
                url: "/User/AjaxForgotPassword",
                type: "post",
                data: {
                    Email: a.email.value
                },
                success: function(a) {
                    1 == a.success ? e.addClass("success") : showDialogAlert(n, "Sorry, unexpected error happened!", null), Ladda.stopAll()
                },
                fail: function(a, e, t) {
                    showDialogAlert(n, t, null), Ladda.stopAll()
                }
            })
        }
    }), $("a.fb-login-btn"));
fbLoginBtn.on("click", function() {
    tkb.tracking.trackLoginWithFacebook(), setTimeout(function() {
        window.location = "/user/login-facebook?redirectUrl=" + window.location.href
    }, 200)
});
var resetDialogStatus = function(e) {
    e = $(e);
    e.validate().resetForm(), e.removeClass("success"), e.find('[data-err="alerter"]').addClass("hide").removeClass("effect-animscale"), e.find($("input")).val(""), Ladda.stopAll()
};
$(document).ready(function() {
    var e = $('[modal="create-e-modal"]'),
        a = $('[data-multiple-select="create-e"]');
    a.select2({
        multiple: !0,
        maximumSelectionLength: 2,
        closeOnSelect: !1,
        placeholder: function() {
            $(this).data("placeholder")
        },
        dropdownParent: a.parent(),
        width: "100%"
    }), a.change(function() {
        null != a.val() && 2 == a.val().length ? (a.select2("close"), $(".select2-selection__rendered").addClass("closeAdd")) : $(".select2-selection__rendered").removeClass("closeAdd")
    }), e.on("hidden.bs.modal", function() {
        resetDialogStatus(this)
    }).validate({
        messages: {
            eventname: _errorIcon,
            venuename: _errorIcon,
            address: _errorIcon,
            kind: _errorIcon
        },
        submitHandler: function(e) {
            tkb.tracking.trackCustom({
                eventCategory: "Create event",
                eventAction: "Submit Create event form",
                transport: "beacon"
            });
            var n = $(e).find('[data-err="alerter"]'),
                a = "",
                t = !1;
            if (null === $(e.kind).val() && (a += "Please choose at least one category <br/>", t = !0), t) return showDialogAlert(n, a, null), Ladda.stopAll(), !1;
            $.ajax({
                type: "post",
                url: "/event/create",
                data: {
                    Title: e.eventname.value,
                    CategoryIds: $(e.kind).val(),
                    VenueName: e.venuename.value,
                    Address: e.address.value
                },
                success: function(e) {
                    e.stt ? window.location.href = "/my-ticketbox/event/" + e.msg + "/edit" : (showDialogAlert(n, e.msg, null), Ladda.stopAll())
                },
                fail: function(e, a, t) {
                    showDialogAlert(n, t, null), Ladda.stopAll()
                }
            })
        }
    }), e.find('[name="address"]').on("keydown", function(e) {
        9 == e.which && a.select2("open")
    })
});
document.addEventListener("DOMContentLoaded", function() {
    var e;
    "" === function(e) {
        for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), i = 0; i < n.length; i++) {
            for (var r = n[i];
                " " == r.charAt(0);) r = r.substring(1);
            if (0 == r.indexOf(t)) return r.substring(t.length, r.length)
        }
        return ""
    }("deviceId") && ((e = document.createElement("script")).type = "text/javascript", e.async = !0, e.src = "https://cdn.jsdelivr.net/npm/fingerprintjs2@2.1.0/dist/fingerprint2.min.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(e), e.onload = function() {
        Fingerprint2.getV18(function(e) {
            var t, n, i;
            t = "deviceId", e = e, n = 365, (i = new Date).setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), n = "expires=" + i.toUTCString(), document.cookie = t + "=" + e + ";" + n + ";path=/"
        })
    })
});