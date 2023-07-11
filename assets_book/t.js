"use strict";
var ajaxService = function(t, r, n) {
    this.ajaxPost = function(e, s) {
        var o = r.defer();
        return n.start(), t.post(e, s).success(function(e, s, t, r) {
            n.stop(), o.resolve({
                response: e,
                status: s,
                headers: t,
                config: r
            })
        }).error(function(e, s, t, r) {
            n.stop(), o.reject({
                response: e,
                status: s,
                headers: t,
                config: r
            })
        }), o.promise
    }, this.ajaxPostWithNoAuthenication = function(e, s) {
        var o = r.defer();
        return n.start(), t.post(e, s).success(function(e, s, t, r) {
            n.stop(), o.resolve({
                response: e,
                status: s,
                headers: t,
                config: r
            })
        }).error(function(e, s, t, r) {
            n.stop(), o.reject({
                response: e,
                status: s,
                headers: t,
                config: r
            })
        }), o.promise
    }, this.ajaxGet = function(e) {
        var o = r.defer();
        return n.start(), t({
            method: "GET",
            url: e
        }).success(function(e, s, t, r) {
            n.stop(), o.resolve({
                response: e,
                status: s,
                headers: t,
                config: r
            })
        }).error(function(e, s, t, r) {
            n.stop(), o.reject({
                response: e,
                status: s,
                headers: t,
                config: r
            })
        }), o.promise
    }, this.ajaxGetWithData = function(e, s) {
        var o = r.defer();
        return n.start(), t({
            method: "GET",
            url: e,
            params: s
        }).success(function(e, s, t, r) {
            n.stop(), o.resolve({
                response: e,
                status: s,
                headers: t,
                config: r
            })
        }).error(function(e, s, t, r) {
            n.stop(), o.reject({
                response: e,
                status: s,
                headers: t,
                config: r
            })
        }), o.promise
    }, this.ajaxGetWithNoBlock = function(e, s) {
        var o = r.defer();
        return t({
            method: "GET",
            url: e,
            params: s
        }).success(function(e, s, t, r) {
            o.resolve({
                response: e,
                status: s,
                headers: t,
                config: r
            })
        }).error(function(e, s, t, r) {
            o.reject({
                response: e,
                status: s,
                headers: t,
                config: r
            })
        }), o.promise
    }
};
ajaxService.$inject = ["$http", "$q", "blockUI"];
"use strict";
var accountService = function(i, s, o, e) {
    this.loginWithFacebook = function() {
        var t = i.defer();
        return e.login().then(function(e) {
            e = e.authResponse.accessToken;
            s.ajaxPostWithNoAuthenication("/api/user/login-with-facebook/" + e).then(function(e) {
                e = e.response;
                e ? (tkb.tracking.trackLoginWithFacebook(e.id), t.resolve(e)) : t.reject()
            }, function(e) {
                t.reject(e)
            })
        }, function() {
            t.reject()
        }), t.promise
    }, this.login = function(e, t) {
        var n = i.defer();
        return s.ajaxPostWithNoAuthenication("/api/user/login", {
            email: e,
            password: t
        }).then(function(e) {
            e = e.response;
            e ? (tkb.tracking.trackLogin(e.id), n.resolve(e)) : n.reject()
        }, function(e) {
            n.reject(e)
        }), n.promise
    }, this.resetPassword = function(e) {
        var t = i.defer();
        return s.ajaxPostWithNoAuthenication("/User/AjaxForgotPassword", {
            email: e
        }).then(function(e) {
            e = e.response;
            e ? t.resolve(e) : t.reject()
        }, function(e) {
            t.reject(e)
        }), t.promise
    }, this.signUp = function(e, t, n, o) {
        var r = i.defer();
        return s.ajaxPostWithNoAuthenication("/api/user/signup", {
            email: n,
            password: o,
            confirmPassword: o,
            firstName: e,
            lastName: t
        }).then(function(e) {
            e = e.response;
            e ? (tkb.tracking.trackLogin(e.id), r.resolve(e)) : r.reject()
        }, function(e) {
            r.reject(e)
        }), r.promise
    }, this.logout = function(t) {
        var n = i.defer();
        return s.ajaxPost("/api/user/logout").then(function(e) {
            t && (o.location.href = t), n.resolve(e)
        }, function(e) {
            n.reject(e)
        }), n.promise
    }, this.getCurrentUserInfo = function(e) {
        var t = "/api/v2/user/current-user",
            n = (e && (t += "?accessToken=" + e), i.defer());
        return n.resolve({
            "id": 3380377,
            "email": "",
            "firstName": "",
            "lastName": "",
            "avatarUrl": "https://static.ticketbox.vn/avatar.png",
            "phoneNumber": null,
            "company": null,
            "jobTitle": null,
            "website": null,
            "isHaveUserPaymentOmise": false,
            "createdDate": "2023-07-07T12:24:38.627+07:00",
            "fullName": ""
        }), n.promise
    }, this.updateCulture = function(e) {
        var t = i.defer();
        // return s.ajaxPost("/api/user/update-culture/" + e, {}).then(function(e) {
        //     t.resolve(e.response)
        // }, function(e) {
        //     t.reject(e)
        // }), t.promise

        return t.resolve(e.response), t.promise
    }
};
accountService.$inject = ["$q", "ajaxService", "$window", "$facebook"];
"use strict";
var BOOKING_STEP = {
        selectTickets: 1,
        questionForm: 2,
        step2: 3,
        thankYou: 4,
        stepCreditCard: 5
    },
    EVENT_STATUS = {
        Published: 2,
        Featured: 3
    },
    EVENT_BOOKABLE_STATUS = {
        Bookable: 1,
        SoldOutAll: 2,
        ClosedAll: 3,
        NotAvailable: 4
    },
    TICKET_TYPE_GROUP_STATUS = {
        Undefined: 0,
        Hidden: 1,
        Show: 2
    },
    PAYMENT_TYPE = {
        NotSelected: 0,
        COD: 2,
        AtCircleK: 3,
        ATM: 4,
        CreditCard: 5,
        Free: 6,
        OfficePickup: 7,
        Payoo: 8,
        Omise: 9,
        BankTransfer: 10,
        Cybersource: 11,
        One23: 12,
        InternetBanking: 13,
        Moca: 15,
        Momo: 16,
        TwoC2P: 17,
        TwoC2PAlipayUnionPay: 18
    },
    TwoC2P_TYPE = {
        Alipay: "ALIPAY",
        UnionPay: "UPOP"
    },
    RECEIVE_METHOD = {
        NotSelected: 0,
        ETicket: 1,
        PhysicalEntrance: 2,
        Delivery: 3
    },
    BANK_LIST = [{
        name: "Vietcombank",
        bankCode: "123PVCB",
        cssClass: "VCB"
    }, {
        name: "DongABank",
        bankCode: "123PDAB",
        cssClass: "DAB"
    }, {
        name: "VietinBank",
        bankCode: "123PVTB",
        cssClass: "VTB"
    }, {
        name: "AgriBank",
        bankCode: "123PAGB",
        cssClass: "AGB"
    }, {
        name: "TechcomBank",
        bankCode: "123PTCB",
        cssClass: "TCB"
    }, {
        name: "EximBank",
        bankCode: "123PEIB",
        cssClass: "EIB"
    }, {
        name: "SacomBank",
        bankCode: "123PSCB",
        cssClass: "SCB"
    }, {
        name: "Á Châu Bank",
        bankCode: "123PACB",
        cssClass: "ACB"
    }, {
        name: "Việt Á Bank",
        bankCode: "123PVAB",
        cssClass: "VAB"
    }, {
        name: "NAVI Bank",
        bankCode: "123PNVB",
        cssClass: "NVB"
    }, {
        name: "VIB Bank",
        bankCode: "123PVIB",
        cssClass: "VIB"
    }, {
        name: "BIDV",
        bankCode: "123PBIDV",
        cssClass: "BIDV"
    }, {
        name: "MBBank",
        bankCode: "123PMB",
        cssClass: "MB"
    }, {
        name: "Phương Đông Bank",
        bankCode: "123POCB",
        cssClass: "OCB"
    }, {
        name: "GPBank",
        bankCode: "123PGPB",
        cssClass: "GPB"
    }, {
        name: "HDBank",
        bankCode: "123PHDB",
        cssClass: "HDB"
    }, {
        name: "VPBank",
        bankCode: "123PVPB",
        cssClass: "VPB"
    }, {
        name: "An Binh Bank",
        bankCode: "123PABB",
        cssClass: "ABB"
    }, {
        name: "PGBank",
        bankCode: "123PPGB",
        cssClass: "PGB"
    }, {
        name: "MariTime Bank",
        bankCode: "123PMRTB",
        cssClass: "MRTB"
    }, {
        name: "SaiGon Bank",
        bankCode: "123PSGB",
        cssClass: "SGB"
    }, {
        name: "OceanBank",
        bankCode: "123POCEB",
        cssClass: "OCEB"
    }, {
        name: "Nam A Bank",
        bankCode: "123PNAB",
        cssClass: "NAB"
    }, {
        name: "Quốc Dân Bank",
        bankCode: "123PNVB",
        cssClass: "NCB"
    }, {
        name: "Sài Gòn - Hà Nội Bank",
        bankCode: "123PSHB",
        cssClass: "SHB"
    }, {
        name: "Đông Nam Á Bank",
        bankCode: "123PSEAB",
        cssClass: "Seabank"
    }, {
        name: "Bưu Điện Liên Việt Bank",
        bankCode: "123PLPB",
        cssClass: "LPB"
    }, {
        name: "Bảo Việt Bank",
        bankCode: "123PBVB",
        cssClass: "BaoVietbank"
    }, {
        name: "Tiên Phong Bank",
        bankCode: "123PTPB",
        cssClass: "TPB"
    }, {
        name: "Bắc Á Bank",
        bankCode: "123PBAB",
        cssClass: "BacA"
    }],
    CARD_TYPE_LIST = [{
        class: "visa-logo",
        code: "001"
    }, {
        class: "mastercard-logo",
        code: "002"
    }],
    COUNTER_LIST_ONE23 = [{
        name: "Tesco Lotus",
        counterCode: "TESCO",
        cssClass: "TESCO",
        fee: "7 Baht"
    }, {
        name: "Thailand Post",
        counterCode: "PAYATPOST",
        cssClass: "PAYATPOST",
        fee: "15/20 Baht"
    }, {
        name: "FamilyMart",
        counterCode: "FAMILYMART",
        cssClass: "FAMILYMART",
        fee: "15 Baht"
    }, {
        name: "True Money Express",
        counterCode: "TRUEMONEY",
        cssClass: "TRUEMONEY",
        fee: "15 Baht"
    }, {
        name: "Just Pay by TOT",
        counterCode: "TOT",
        cssClass: "TOT",
        fee: "15 Baht"
    }, {
        name: "mPay Station by AIS",
        counterCode: "MPAY",
        cssClass: "MPAY",
        fee: "15 Baht"
    }, {
        name: "Big C Super Center",
        counterCode: "BIGC",
        cssClass: "BIGC",
        fee: "5 Baht"
    }],
    QUESTION_TYPE = {
        Text: 1,
        Paragraph: 2,
        MultipleChoiceSingleAnswer: 3,
        MultipleChoiceMultipleAnswer: 4,
        Grid: 5,
        GroupTitle: 6
    },
    ANSWER_DISPLAY_TYPE = {
        FreeText: 0,
        DropDownNormal: 1,
        DropDownDate: 2,
        DropDownPhone: 3,
        InputText: 4
    },
    GRID_DISPLAY_TYPE = {
        Full: 1,
        Hafl: 2
    },
    NOW = new Date,
    DELIVERY_AMOUNT_THRESHOLD = 1e6,
    DELIVERY_AMOUNT_THRESHOLD_REDUCTION = 2e4,
    DELIVERY_FEE_HAS_PHYSICAL_ITEM = 0,
    SEAT_STATUS = {
        Available: 1,
        Disabled: 2,
        Booked: 3
    },
    SEAT_SECTION_STATUS = {
        OPEN: 0,
        CLOSED: 1
    },
    ERROR_SEVERITY = {
        Undefined: 0,
        ValidationError: 1,
        CheatedDataError: 2,
        ServerError: 3,
        InvalidEvent: 4,
        OmiseError: 5,
        InvalidShowing: 6
    },
    SERVICE_ERROR_TYPE = {
        Undefined: 0,
        InvalidEvent: 1,
        InvalidUser: 2,
        InvalidOrder: 3,
        InvalidTicketType: 4,
        InvalidTicketTypeQuantity: 5,
        InvalidDiscountCode: 6,
        InvalidBuyerInfo: 7,
        InvalidPaymentInfo: 8,
        InvalidAnswerSheet: 9,
        InvalidSeatMap: 10,
        InvalidSeat: 11,
        InvalidSeatQuantity: 12,
        ExceptionOccuredWhenBookSeat: 13,
        SeatMapOfEventExist: 14,
        SendingEmail: 15,
        EmptySeat: 16,
        NullParameter: 99,
        SavingData: 100,
        ExpiredDiscountCode: 203,
        OrderConditionCannotApplyThisDiscount: 365,
        InvalidSeatQuantityOnSection: 400,
        LessThanMinQuantityOnSection: 401,
        GreaterThanMaxQuantityOnSection: 402,
        InvalidQuantityDiscountCode: 407,
        InvalidActiveDiscountCode: 408,
        OutOfScopeDiscountCode: 409,
        InvalidDiscountCodeForSeat: 411,
        CustomValidation: 412,
        InvalidSeatQuantityPerOrder: 500,
        EventConfigurationChanged: 700
    },
    COUNTRIES = ["", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"],
    CA_STATES = ["", "AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"],
    US_STATES = ["", "AL", "AK", "AS", "AZ", "AR", "AA", "AE", "AP", "CA", "CO", "CT", "DE", "DC", "FL", "FM", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MP", "MH", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"],
    DELIVERY_METHODS = {
        email: 1,
        pickupAtEntrance: 2,
        cod: 3
    },
    REASON_CODE_CYBERSOURCE = {
        UNDEFINED: 0,
        DMISSINGFIELD: 101,
        DINVALIDDATA: 102,
        DAVSNO: 200,
        DCARDEXPIRED: 202,
        DCARDREFUSED_203: 203,
        DCARDREFUSED_204: 204,
        DCARDREFUSED_205: 205,
        DCARDREFUSED_207: 207,
        DCARDREFUSED_208: 208,
        DCARDREFUSED_210: 210,
        DCARDREFUSED_211: 211,
        DCHECKREFUSED_221: 221,
        DCV: 230,
        DINVALIDCARD_231: 231,
        DINVALIDDATA_232: 232,
        DINVALIDDATA_233: 233,
        DINVALIDDATA_234: 234,
        DINVALIDDATA_236: 236,
        DINVALIDDATA_240: 240,
        DAUTHENTICATE: 475,
        DAUTHENTICATIONFAILED: 476,
        DREVIEW: 480,
        DREJECT: 481
    },
    PHONE_CODE = ["84", "93", "355", "213", "376", "244", "672", "54", "374", "297", "61", "43", "994", "973", "880", "375", "32", "501", "229", "975", "591", "387", "267", "55", "673", "359", "226", "95", "257", "855", "237", "1", "238", "236", "235", "56", "86", "61", "61", "57", "269", "242", "682", "506", "385", "53", "357", "420", "45", "253", "670", "593", "20", "503", "240", "291", "372", "251", "500", "298", "679", "358", "33", "689", "241", "220", "995", "49", "233", "350", "30", "299", "502", "224", "245", "592", "509", "504", "852", "36", "91", "62", "98", "964", "353", "44", "972", "39", "225", "1876", "81", "962", "7", "254", "686", "965", "996", "856", "371", "961", "266", "231", "218", "423", "370", "352", "853", "389", "261", "265", "60", "960", "223", "356", "692", "222", "230", "262", "52", "691", "373", "377", "976", "382", "212", "258", "264", "674", "977", "31", "687", "64", "505", "227", "234", "683", "850", "47", "968", "92", "680", "507", "675", "595", "51", "63", "870", "48", "351", "1", "974", "40", "7", "250", "590", "685", "378", "239", "966", "221", "381", "248", "232", "65", "421", "386", "677", "252", "27", "82", "34", "94", "290", "508", "249", "597", "268", "46", "41", "963", "886", "992", "255", "66", "228", "690", "676", "216", "90", "993", "688", "971", "256", "44", "380", "598", "1", "998", "678", "39", "58", "681", "967", "260", "263"];
! function(e) {
    "use strict";
    var o = e.tkb || {};
    (e.tkb = o).model = o.model || {}, o.model.Order = function(e) {
        this.id = e ? e.id : null, this.orderCode = e ? e.orderCode : null, this.amount = e ? e.amount : 0, this.deliveryCost = e ? e.deliveryCost : 0, this.orderDiscountAmount = e ? e.orderDiscountAmount : 0, this.finalAmount = e ? e.finalAmount : 0, this.officeId = e ? e.officeId : 0, this.remainingBookingTime = e ? e.remainingBookingTime : 0, this.user = e ? new o.model.User(e.user) : new o.model.User, this.discount = e ? new o.model.Discount(e.discount) : new o.model.Discount, this.buyerInfo = e ? new o.model.BuyerInfo(e.buyerInfo) : new o.model.BuyerInfo, this.buyerInfo.hasData() || this.buyerInfo.getFromUser(this.user), this.paymentInfo = e ? new o.model.PaymentInfo(e.paymentInfo) : new o.model.PaymentInfo, this.orderDetails = e ? o.model.helper.mapArrayModel(e.orderDetails, o.model.OrderDetail) : [], this.commonFormAnswerSheet = e && e.commonFormAnswerSheet ? new o.model.FormAnswerSheet(e.commonFormAnswerSheet) : null, this.formAnswerSheets = e ? o.model.helper.mapArrayModel(e.formAnswerSheets, o.model.FormAnswerSheet) : [], this.buyerServiceFee = e ? e.buyerServiceFee : 0, this.buyerPaymentFee = e ? e.buyerPaymentFee : 0, this.receiveMethod = e ? e.receiveMethod : RECEIVE_METHOD.ETicket, this.canByPassLimitAmount = !!e && e.canByPassLimitAmount, this.limitAmount = e ? e.limitAmount : 0, this.receiveMethod || (this.receiveMethod = RECEIVE_METHOD.ETicket)
    }, o.model.User = function(e) {
        this.id = e ? e.id : null, this.email = e ? e.email : null, this.firstName = e ? e.firstName : null, this.lastName = e ? e.lastName : null, this.phoneNumber = e ? e.phoneNumber : null, this.jobTitle = e ? e.jobTitle : null, this.company = e ? e.company : null, this.defaultDeliveryInfo = e ? e.defaultDeliveryInfo : {
            fullAddress: null,
            address: null,
            cityId: null,
            districtId: null
        }, this.isHaveUserPaymentOmise = e ? e.isHaveUserPaymentOmise : null
    }, o.model.OrderDetail = function(e) {
        this.ticketTypeId = e ? e.ticketTypeId : null, this.quantity = e ? e.quantity : 0, this.unitPrice = e ? e.unitPrice : null, this.discountPerTicket = e ? e.discountPerTicket : 0, this.sections = e ? e.sections : []
    }, o.model.Discount = function(e) {
        this.isAutomatedDiscount = e ? e.isAutomatedDiscount : null, this.discountCode = e ? e.discountCode : null, this.ticketTypes = e ? e.ticketTypes : []
    }, o.model.BuyerInfo = function(e) {
        this.email = e ? e.email : null, this.firstName = e ? e.firstName : null, this.lastName = e ? e.lastName : null, this.phoneNumber = e ? e.phoneNumber : null, this.hasData = function() {
            return this.email || this.firstName || this.lastName || this.phoneNumber
        }, this.getFromUser = function(e) {
            this.email = e.email, this.firstName = e.firstName, this.lastName = e.lastName, this.phoneNumber = e.phoneNumber
        }
    }, o.model.PaymentInfo = function(e) {
        this.paymentType = null, this.deliveryInfo = {
            note: null,
            fullAddress: null,
            address: null,
            cityId: 0,
            districtId: 0,
            fee: 0
        }, this.officePickupInfo = {
            note: null
        }, this.internetBankingInfo = {
            bankCode: null
        }, this.payooInfo = {
            billingCode: null,
            expireDate: null
        }, this.one23Info = {
            counter: null,
            encryptedData: null,
            expireDate: null
        }, this.omiseInfo = {
            omiseToken: null
        }, this.bankTransferInfo = {
            billingCode: null,
            expireDate: null
        }, this.cybersourceInfo = {
            billingInfo: null,
            card: null,
            statusPayment: null,
            returnMessage: null,
            returnCode: null
        }, this.smartlinkInfo = {
            isSuccess: null,
            isCancelled: null,
            message: null
        }, this.twoC2PInfo = {
            isSuccess: null,
            statusDescription: null,
            card: {}
        }, this.unipayAlipayInfo = {
            paymentChannel: ""
        }, this.moMoInfo = {
            statusDescription: ""
        }, e && (this.paymentType = e.paymentType, this.deliveryInfo = e.deliveryInfo, this.officePickupInfo = e.officePickupInfo, this.internetBankingInfo = e.internetBankingInfo, this.payooInfo = e.payooInfo, this.one23Info = e.one23Info, this.omiseInfo = e.omiseInfo, this.bankTransferInfo = e.bankTransferInfo, this.cybersourceInfo = e.cybersourceInfo, this.smartlinkInfo = e.smartlinkInfo, this.twoC2PInfo = e.twoC2PInfo, this.unipayAlipayInfo = e.unipayAlipayInfo, this.moMoInfo = e.moMoInfo)
    }, o.model.Form = function(e) {
        this.basicForm = e ? new o.model.BasicForm(e.basicForm) : new o.model.BasicForm, this.orderCommonFormQuestions = e ? o.model.helper.mapArrayModel(e.orderCommonFormQuestions, o.model.FormQuestion) : [], this.ticketFormQuestions = e ? o.model.helper.mapArrayModel(e.ticketFormQuestions, o.model.FormQuestion) : [], this.hasForm = function() {
            return this.basicForm.hasQuestion() || this.orderCommonFormQuestions.length || this.ticketFormQuestions.length
        }
    }, o.model.BasicForm = function(e) {
        this.nameEnabled = !!e && e.nameEnabled, this.emailEnabled = !!e && e.emailEnabled, this.phoneEnabled = !!e && e.phoneEnabled, this.websiteEnabled = !!e && e.websiteEnabled, this.companyEnabled = !!e && e.companyEnabled, this.jobTitleEnabled = !!e && e.jobTitleEnabled, this.nameRequired = !!e && e.nameRequired, this.emailRequired = !!e && e.emailRequired, this.phoneRequired = !!e && e.phoneRequired, this.websiteRequired = !!e && e.websiteRequired, this.companyRequired = !!e && e.companyRequired, this.jobTitleRequired = !!e && e.jobTitleRequired, this.hasQuestion = function() {
            return this.nameEnabled || this.emailEnabled || this.phoneEnabled || this.websiteEnabled || this.companyEnabled || this.jobTitleEnabled
        }
    }, o.model.FormQuestion = function(e) {
        this.id = e ? e.id : null, this.type = e ? e.type : null, this.validationData = e ? e.validationData : null, this.displayType = e ? e.displayType : null, this.gridDisplayStyle = e ? e.gridDisplayStyle : 1, this.question = e ? e.question : "", this.helperText = e ? e.helperText : "", this.answerRequired = !!e && e.answerRequired, this.displayOrder = e ? e.displayOrder : 0, this.isCommonForOrder = !!e && e.isCommonForOrder, this.formQuestionOptions = e ? o.model.helper.mapArrayModel(e.formQuestionOptions, o.model.FormQuestionOption) : []
    }, o.model.FormQuestionOption = function(e) {
        this.id = e ? e.id : null, this.optionText = e ? e.optionText : "", this.displayOrder = e ? e.displayOrder : 0
    }, o.model.FormAnswer = function(e, i) {
        var n = this;
        this.attachToQuestion = function(e) {
            if (n.formQuestionId = e.id, n.question = e, n.displayOrder = e.displayOrder, n.formQuestionOptions = angular.copy(e.formQuestionOptions), n.formAnswerChoices.length && n.formAnswerChoices[0].formAnswerChoiceComponents && n.formAnswerChoices[0].formAnswerChoiceComponents.length) switch (e.type) {
                case QUESTION_TYPE.Text:
                    n.answerText = n.formAnswerChoices[0].formAnswerChoiceComponents[0].answer;
                    break;
                case QUESTION_TYPE.MultipleChoiceSingleAnswer:
                    n.selectedQuestionOptionId = n.formAnswerChoices[0].formAnswerChoiceComponents[0].formQuestionOptionId;
                    break;
                case QUESTION_TYPE.MultipleChoiceMultipleAnswer:
                    n.formAnswerChoices.forEach(function(e) {
                        e = _.find(n.formQuestionOptions, {
                            id: e.formAnswerChoiceComponents[0].formQuestionOptionId
                        });
                        e && (e.selected = !0)
                    })
            }
        }, this.id = 0, this.formAnswerSheetId = 0, this.formQuestionId = 0, this.formAnswerChoices = [], this.formQuestionOptions = [], e && (this.id = e.id, this.formAnswerSheetId = e.formAnswerSheetId, this.formQuestionId = e.formQuestionId, this.formAnswerChoices = o.model.helper.mapArrayModel(e.formAnswerChoices, o.model.FormAnswerChoice)), i && this.attachToQuestion(i)
    }, o.model.FormAnswerChoice = function(e) {
        this.id = e ? e.id : 0, this.formAnswerId = e ? e.formAnswerId : 0, this.formAnswerChoiceComponents = e ? e.formAnswerChoiceComponents : [], this.formAnswerChoiceComponents = e ? o.model.helper.mapArrayModel(e.formAnswerChoiceComponents, o.model.FormAnswerChoiceComponent) : []
    }, o.model.FormAnswerChoiceComponent = function(e) {
        this.id = e ? e.id : 0, this.formAnswerChoiceId = e ? e.formAnswerChoiceId : 0, this.formQuestionOptionId = e ? e.formQuestionOptionId : null, this.answer = e ? e.answer : null
    }, o.model.FormAnswerSheet = function(e, i) {
        this.id = e ? e.id : 0, this.eventId = e ? e.eventId : 0, this.ticketTypeId = e ? e.ticketTypeId : null, this.ticketId = e ? e.ticketId : null, this.firstName = e ? e.firstName : null, this.lastName = e ? e.lastName : null, this.email = e ? e.email : null, this.phoneNumber = e ? e.phoneNumber : null, this.website = e ? e.website : null, this.company = e ? e.company : null, this.jobTitle = e ? e.jobTitle : null, this.isCommonForOrder = e ? e.isCommonForOrder : !!i, this.formAnswers = e ? o.model.helper.mapArrayModel(e.formAnswers, o.model.FormAnswer) : []
    }
}(window);
"use strict";
var modalService = function(o, i) {
        this.openSimpleModal = function(e) {
            return o.open({
                templateUrl: "/assets_book/views/simple-modal.html",
                controller: "ModalInstanceCtrl",
                size: e.size,
                backdrop: "static",
                resolve: {
                    options: function() {
                        return e
                    }
                }
            })
        }, this.openLoginModal = function(e, t) {
            return o.open({
                templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/login-popup.html?" + URL_VERSION,
                controller: "LoginModalCtrl",
                scope: e,
                size: "sm",
                backdrop: "static",
                resolve: {
                    options: function() {
                        return t
                    }
                }
            })
        }, this.openSignupModal = function(e, t) {
            return o.open({
                templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/sign-up-popup.html?" + URL_VERSION,
                controller: "LoginModalCtrl",
                scope: e,
                size: "sm",
                backdrop: "static",
                resolve: {
                    options: function() {
                        return t
                    }
                }
            })
        }, this.openLoginv2Modal = function(e, t) {
            return o.open({
                templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/loginv2-popup.html?" + URL_VERSION,
                controller: "LoginModalCtrl",
                scope: e,
                size: "sm",
                backdrop: "static",
                resolve: {
                    options: function() {
                        return t
                    }
                }
            })
        }, this.openNewPasswordSentModal = function(e, t) {
            return o.open({
                templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/new-password-sent-popup.html?" + URL_VERSION,
                controller: "LoginModalCtrl",
                scope: e,
                size: "sm",
                backdrop: "static",
                resolve: {
                    options: function() {
                        return t
                    }
                }
            })
        }, this.openResetPasswordModal = function(e, t) {
            return o.open({
                templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/reset-password-popup.html?" + URL_VERSION,
                controller: "LoginModalCtrl",
                scope: e,
                size: "sm",
                backdrop: "static",
                resolve: {
                    options: function() {
                        return t
                    }
                }
            })
        }, this.openSpecialModal = function(e, t) {
            return o.open({
                templateUrl: "/assets_book/views/special-popup.html",
                controller: "ModalInstanceCtrl",
                windowClass: "booking-sp",
                scope: e,
                size: "md",
                backdrop: "static",
                resolve: {
                    options: function() {
                        return t
                    }
                }
            })
        }, this.openSeatSectionModal = function(e, t) {
            return o.open({
                templateUrl: "/assets_book/views/section-select-popup.html",
                controller: "ModalSectionSelectionCtrl",
                windowClass: "booking-sp section-select-wr",
                scope: e,
                size: "lg",
                backdrop: "static",
                resolve: {
                    options: function() {
                        return t
                    }
                }
            })
        }, this.openArianaQuestionYesNoModel = function(e, t) {
            return o.open({
                templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/ariana-yesno-popup.html?" + URL_VERSION,
                controller: "ModalInstanceCtrl",
                windowClass: "booking-sp section-select-wr ariana-select-wr",
                scope: e,
                size: "lg",
                backdrop: "static",
                resolve: {
                    options: function() {
                        return t
                    }
                }
            })
        }, this.openArianaQuestionCodeModel = function(e, t) {
            return o.open({
                templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/ariana-code-popup.html?" + URL_VERSION,
                controller: "ModalPromptInstanceCtrl",
                windowClass: "booking-sp section-select-wr ariana-select-wr",
                scope: e,
                size: "lg",
                backdrop: "static",
                resolve: {
                    options: function() {
                        return t
                    }
                }
            })
        }, this.openAccessCodeModel = function(e, t) {
            return o.open({
                templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/access-code-popup.html?" + URL_VERSION,
                controller: "ModalPromptInstanceCtrl",
                windowClass: "booking-sp access-code-pop-wr",
                scope: e,
                size: "md",
                backdrop: "static",
                resolve: {
                    options: function() {
                        return t
                    }
                }
            })
        }, this.openArianaAnswerConfirmModel = function(e, t) {
            return o.open({
                templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/ariana-answer-confirm-popup.html?" + URL_VERSION,
                controller: "ModalPromptInstanceCtrl",
                windowClass: "booking-sp ariana-answer-confirm-wr",
                scope: e,
                size: "lg",
                backdrop: "static",
                resolve: {
                    options: function() {
                        return t
                    }
                }
            })
        }, this.openTermConditionModel = function(e, t) {
            return o.open({
                templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/term-condition-popup.html?" + URL_VERSION,
                controller: "ModalPromptInstanceCtrl",
                windowClass: "booking-sp ariana-answer-confirm-wr",
                scope: e,
                size: "lg",
                backdrop: "static",
                resolve: {
                    options: function() {
                        return t
                    }
                }
            })
        }, this.openFreeOPTermModel = function(e, t) {
            return o.open({
                templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/free-op-term-popup.html?" + URL_VERSION,
                controller: "ModalPromptInstanceCtrl",
                windowClass: "booking-sp ariana-answer-confirm-wr",
                scope: e,
                size: "lg",
                backdrop: "static",
                resolve: {
                    options: function() {
                        return t
                    }
                }
            })
        }, this.termConditionModel = function(e, t) {
            return o.open({
                templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/term-condition-popup.html?" + URL_VERSION,
                controller: "ModalPromptInstanceCtrl",
                windowClass: "booking-sp ariana-answer-confirm-wr in",
                scope: e,
                size: "lg",
                backdrop: "static",
                resolve: {
                    options: function() {
                        return t
                    }
                }
            })
        }, this.openChainsMokerTermModel = function(e, t) {
            var n = tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/chainsmoker-term-popup-en.html?" + URL_VERSION;
            return "vi" == i.use() && (n = tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/chainsmoker-term-popup-vi.html?" + URL_VERSION), o.open({
                templateUrl: n,
                controller: "ModalPromptInstanceCtrl",
                windowClass: "booking-sp ariana-answer-confirm-wr in",
                scope: e,
                size: "lg",
                backdrop: "static",
                resolve: {
                    options: function() {
                        return t
                    }
                }
            })
        }, this.openHyominFmAccessCodeModel = function(e, t) {
            return o.open({
                templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/hyomin-fm-access-code-popup.html?" + URL_VERSION,
                controller: "ModalPromptInstanceCtrl",
                windowClass: "booking-sp access-code-pop-wr",
                scope: e,
                size: "md",
                backdrop: "static",
                resolve: {
                    options: function() {
                        return t
                    }
                }
            })
        }
    },
    ModalSectionSelectionCtrl = (modalService.$inject = ["$modal", "$translate"], function(t, e, n) {
        t.title = n.title, t.okButtonText = n.okButtonText, t.message = n.message, t.icon = n.icon, t.selectedQuantityNumber = 0, n.selectedQuantity && (t.selectedQuantityNumber = n.selectedQuantity), t.increase = function() {
            var e;
            n.quantity < n.maximum && (0 == n.quantity && n.minimum ? (e = n.minimum, n.quantity = e, t.selectedQuantityNumber += e) : (n.quantity++, t.selectedQuantityNumber++))
        }, t.decrease = function() {
            n.quantity > n.minimum ? (n.quantity--, t.selectedQuantityNumber--) : (n.quantity = 0, t.selectedQuantityNumber = 0)
        }, t.ok = function() {
            t.okLoading = !0, n.ok(function() {
                e.close()
            }, {
                selectedQuantity: t.selectedQuantityNumber,
                originalQuantity: n.selectedQuantity
            })
        }, t.cancel = function() {
            t.cancelLoading = !0, n.cancel(function() {
                e.dismiss()
            }, {
                selectedQuantity: t.selectedQuantityNumber,
                originalQuantity: n.selectedQuantity
            })
        }, t.close = function() {
            e.close()
        }
    }),
    ModalPromptInstanceCtrl = (ModalSectionSelectionCtrl.$inject = ["$scope", "$modalInstance", "options"], function(e, t, n) {
        e.title = n.title, e.okButtonText = n.okButtonText, e.message = n.message, e.icon = n.icon, e.customPopupInput1 = n.customPopupInput1, e.customPromoPopupInput = n.customPromoPopupInput, e.customPopupCheckbox1 = n.customPopupCheckbox1, e.freeOPPopupCheckbox = n.freeOPPopupCheckbox, e.termConditionCheckbox = n.termConditionCheckbox, e.chainsMokerTermCheckbox = n.chainsMokerTermCheckbox, e.ok = function() {
            e.okLoading = !0, n.ok({
                close: function() {
                    t.dismiss()
                },
                showValidate: function() {
                    e.customFlag1 = !0
                }
            }, {
                customPromoPopupInput: e.customPromoPopupInput,
                customPopupInput1: e.customPopupInput1,
                termConditionCheckbox: e.termConditionCheckbox,
                customPopupCheckbox1: e.customPopupCheckbox1,
                freeOPPopupCheckbox: e.freeOPPopupCheckbox,
                chainsMokerTermCheckbox: e.chainsMokerTermCheckbox
            })
        }, e.cancel = function() {
            e.cancelLoading = !0, n.cancel({
                close: function() {
                    t.dismiss()
                },
                showValidate: function() {
                    e.customFlag1 = !0
                }
            }, {
                customPopupInput1: e.customPopupInput1
            })
        }, e.close = function() {
            t.close()
        }
    }),
    ModalInstanceCtrl = (ModalPromptInstanceCtrl.$inject = ["$scope", "$modalInstance", "options"], function(e, t, n) {
        e.title = n.title, e.okButtonText = n.okButtonText, e.message = n.message, e.icon = n.icon, e.ok = function() {
            e.okLoading = !0, n.ok(function() {
                t.close()
            })
        }, e.cancel = function() {
            e.cancelLoading = !0, n.cancel(function() {
                t.dismiss()
            })
        }, e.close = function() {
            t.close()
        }
    }),
    LoginModalCtrl = (ModalInstanceCtrl.$inject = ["$scope", "$modalInstance", "options"], function(n, o, e, t, i, r) {
        n.signUp = function() {
            n.okLoading = !0, e.signUp(n.firstName, n.lastName, n.email, n.password).then(function(e) {
                n.$parent.user = e;
                var t = n.$parent.order;
                t.buyerInfo && t.buyerInfo.hasData() || (t.buyerInfo = new tkb.model.BuyerInfo(e)), n.okLoading = !1, o.close(), "function" == typeof i.success && i.success()
            }, function() {
                n.okLoading = !1, "function" == typeof i.fail && i.fail()
            })
        }, n.login = function() {
            n.loginLoading = !0, e.login(n.email, n.password).then(function(e) {
                n.$parent.user = e;
                var t = n.$parent.order;
                t.buyerInfo.hasData() || (t.buyerInfo = new tkb.model.BuyerInfo(e)), o.close(), n.loginLoading = !1, "function" == typeof i.success && i.success(), location.reload()
            }, function() {
                "function" == typeof i.fail && i.fail(), o.close()
            })
        }, n.loginv2 = function() {
            n.okLoading = !0, e.login(n.email, n.password).then(function(e) {
                n.$parent.user = e;
                var t = n.$parent.order;
                t.buyerInfo.hasData() || (t.buyerInfo = new tkb.model.BuyerInfo(e)), o.close(), n.okLoading = !1, "function" == typeof i.success && i.success()
            }, function() {
                n.okLoading = !1, "function" == typeof i.fail && i.fail()
            })
        }, n.resetPassword = function() {
            n.okLoading = !0, e.resetPassword(n.email).then(function(e) {
                o.close(), n.okLoading = !1, "function" == typeof i.success && i.success()
            }, function() {
                n.okLoading = !1, "function" == typeof i.fail && i.fail(), o.close()
            })
        }, n.loginWithFacebook = function() {
            setTimeout(function() {
                window.location = "/user/login-facebook?redirectUrl=" + window.location.href
            }, 200)
        }, n.openSignUp = function() {
            o.close(), n.$parent.openSignUpPopup()
        }, n.openLogin = function() {
            o.close(), n.$parent.openLoginv2Popup()
        }, n.openResetPassword = function() {
            o.close(), n.$parent.openResetPasswordPopup()
        }, n.close = function() {
            o.close(), n.loginLoading = !1
        }
    }),
    ticketBookingService = (LoginModalCtrl.$inject = ["$scope", "$modalInstance", "accountService", "$facebook", "options", "modalService"], function(h, a, u, p, d, f, m) {
        var R = this,
            i = !1,
            v = [];
        this.getPaymentMethods = function() {
            var t = h.defer();
            return t.resolve([
                {
                    "id": 2,
                    "name": "",
                    "paymentFeePercent": 0.00
                },
                {
                    "id": 4,
                    "name": "",
                    "paymentFeePercent": 0.00
                },
                {
                    "id": 6,
                    "name": "",
                    "paymentFeePercent": 0.00
                },
                {
                    "id": 7,
                    "name": "",
                    "paymentFeePercent": 0.00
                },
                {
                    "id": 8,
                    "name": "",
                    "paymentFeePercent": 0.00
                },
                {
                    "id": 11,
                    "name": "",
                    "paymentFeePercent": 0.00
                },
                {
                    "id": 13,
                    "name": "",
                    "paymentFeePercent": 0.00
                },
                {
                    "id": 15,
                    "name": "",
                    "paymentFeePercent": 0.00
                },
                {
                    "id": 16,
                    "name": "",
                    "paymentFeePercent": 0.00
                }
            ]), t.promise
        }, this.getEventInfo = function(t, e, n) {
            var o = h.defer();
            return o.resolve(danhsachTicket), o.promise
        }, this.getEventTermCondition = function(t) {
            var n = h.defer();
            return a.ajaxGetWithNoBlock("/api/event/" + t + "/ticket-booking/termcondition").then(function(e) {
                n.resolve(e.response)
            }, function(e) {
                s(t, e), n.reject(e)
            }), n.promise
        }, this.getSeatmap = function(t, e, n) {
            var o = h.defer();
            return n = null == n || "" === n ? "/api/v2/seatmap/" + e : n + "?v=" + (new Date).getTime(), a.ajaxGetWithNoBlock(n).then(function(e) {
                v = e.response.sections, o.resolve(e.response)
            }, function(e) {
                v = e.response.sections, s(t, e), o.reject(e)
            }), o.promise
        }, this.getCurrentOrderInfo = function(t, n) {
            var o = h.defer();
            return tkb.cookie.getItem("k-" + n) ? a.ajaxGet("/api/event/" + t + "/ticket-booking/" + n + "/current-order").then(function(e) {
                o.resolve(e.response)
            }, function(e) {
                R.clearOrderCookie(n), s(t, e), o.reject(e)
            }) : setTimeout(function() {
                o.reject(null)
            }, 0), o.promise
        }, this.getOmiseCard = function() {
            var t = h.defer();
            return a.ajaxGet("/api/userpayment/getOmiseCard").then(function(e) {
                t.resolve(e.response)
            }, function(e) {
                k(e), t.reject(e)
            }), t.promise
        }, this.getOrderConfirmedInfo = function(e, t, n) {
            var o = h.defer();
            return a.ajaxGet("/api/event/" + e + "/ticket-booking/" + t + "/order-confirmed-info/" + n).then(function(e) {
                o.resolve(e.response)
            }, function(e) {
                o.reject(e)
            }), o.promise
        }, this.checkAutoDiscount = function(e) {
            var t = h.defer();
            return a.ajaxPostWithNoAuthenication("/api/auto-discount", e).then(function(e) {
                t.resolve(e.response)
            }, function(e) {
                t.reject(e)
            }), t.promise
        }, this.applyDiscountCode = function(e, t, n) {
            var o = h.defer();
            return u(function() {
                i ? o.reject() : (i = !0, a.ajaxPostWithNoAuthenication("/api/event/" + e + "/ticket-booking/" + t + "/apply-discount-code", n).then(function(e) {
                    i = !1, o.resolve(e.response)
                }, function(e) {
                    i = !1, o.reject(e)
                }))
            }, 0), o.promise
        }, this.cancelDiscountCode = function(t, e, n, o) {
            var i = h.defer();
            return a.ajaxPostWithNoAuthenication("/api/event/" + t + "/ticket-booking/" + e + "/cancel-discount-code", {
                discountCode: n,
                orderDetailArray: o
            }).then(function(e) {
                i.resolve(e.response)
            }, function(e) {
                s(t, e), i.reject(e)
            }), i.promise
        }, this.submitTicketInfo = function(o, i, e) {
            var r = h.defer(),
                t = "/api/event/" + o + "/ticket-booking/" + i + "/submit-ticket-info";
                
            var t, n;
            console.log("ticketSubmit: ", e);
            mergeOrderDetails(e.orderDetails);

            return e.response = ticketSubmit,
                ((n = new Date).setSeconds(n.getSeconds() + e.response.remainingBookingTime), t = "order-" + i, n = JSON.stringify({
                    secretKey: e.response.secretKey,
                    expireDate: n
                }), localStorage && localStorage.setItem(t, n), r.resolve(e.response.data)), r.promise

            // return e.secretKey = "", 
            // a.ajaxPostWithNoAuthenication(t, e).then(function(e) {
            //     var t, n;
            //     ((n = new Date).setSeconds(n.getSeconds() + e.response.remainingBookingTime), t = "order-" + i, n = JSON.stringify({
            //         secretKey: e.response.secretKey,
            //         expireDate: n
            //     }), localStorage && localStorage.setItem(t, n), r.resolve(e.response.data)) 
                
            // }, function(e) {
            //     s(o, e, i), r.reject(e)
            // }), r.promise
        }, this.submitFormAnswers = function(t, n, e) {
            var o = h.defer();
            return e.secretKey = "", a.ajaxPostWithNoAuthenication("/api/event/" + t + "/ticket-booking/" + n + "/submit-form-answers", e).then(function(e) {
                o.resolve(e.response)
            }, function(e) {
                s(t, e, n), o.reject(e)
            }), o.promise
        }, this.submitOrder = function(t, n, o, i) {
            var r = h.defer(),
                e = "/api/event/" + t + "/ticket-booking/" + n + "/submit-order";
            return r.resolve(qrThanhToan.data), r.promise

            // return o.secretKey = "", 
            // a.ajaxPostWithNoAuthenication(e, o).then(function(e) {
            //     "success" === e.response.status ? r.resolve(e.response.data) 
            //     : o.paymentInfo.paymentType == PAYMENT_TYPE.InternetBanking || o.paymentInfo.paymentType == PAYMENT_TYPE.Momo ? i() : (e = {
            //         response: e.response.data
            //     }, s(t, e, n), r.reject(e))
            // }, function(e) {
            //     o.paymentInfo.paymentType == PAYMENT_TYPE.InternetBanking || o.paymentInfo.paymentType == PAYMENT_TYPE.Momo ? i() : (s(t, e, n), r.reject(e))
            // }), r.promise
        }, this.autoSubmitBuyerInfo = function(t, e, n) {
            var o = h.defer();
            return a.ajaxPostWithNoAuthenication("/api/event/" + t + "/ticket-booking/" + e + "/auto-submit-buyer-info", n).then(function(e) {
                o.resolve(e.response)
            }, function(e) {
                s(t, e), o.reject(e)
            }), o.promise
        }, this.savePersonalInfoToAccount = function(e) {
            var t = h.defer();
            return a.ajaxPost("/api/user/" + e + "/save-personal-info", {}).then(function(e) {
                t.resolve(e.response)
            }, function(e) {
                t.reject(e)
            }), t.promise
        }, this.saveDeliveryInfoToAccount = function(e) {
            var t = h.defer();
            return a.ajaxPost("/api/user/" + e + "/save-delivery-info", {}).then(function(e) {
                t.resolve(e.response)
            }, function(e) {
                t.reject(e)
            }), t.promise
        }, this.markEcommerceTrackingSent = function(e) {
            var t = h.defer();
            return a.ajaxPostWithNoAuthenication("/Order/MarkGAEcommerceTrackingSent?id=" + e, {}).then(function(e) {
                t.resolve(e.response)
            }, function(e) {
                t.reject(e)
            }), t.promise
        }, this.omiseCheckCreateToken = function(e) {
            var n = h.defer();
            return Omise.createToken("card", e, function(e, t) {
                "error" == t.object ? n.reject(t) : n.resolve(t)
            }), n.promise
        }, this.submitOmiseToken = function(e) {
            var n = h.defer();
            return Omise.createToken("card", card, function(e, t) {
                "error" == t.object ? n.reject(t) : n.resolve(t)
            }), n.promise
        }, this.getDropdownsCategories = function(e) {
            var t = h.defer();
            return a.ajaxGetWithNoBlock("/api/categories/" + e).then(function(e) {
                t.resolve(e.response)
            }, function(e) {
                s(eventId, e), t.reject(e)
            }), t.promise
        }, this.getDeliveryCityList = function() {
            var t = h.defer(),
                n = "deliveryCities";
            return window[n] ? t.resolve(window[n]) : a.ajaxGetWithNoBlock("/api/v2/address/delivery-cities/").then(function(e) {
                t.resolve(e.response), window[n] = e.response
            }, function(e) {
                t.reject(e)
            }), t.promise
        }, this.getDeliveryDistrictList = function(e) {
            var t = h.defer(),
                n = "deliveryDistricts" + e;
            return window[n] ? t.resolve(window[n]) : a.ajaxPostWithNoAuthenication("/api/v2/address/delivery-cities/districts", {
                cityId: e
            }).then(function(e) {
                t.resolve(e.response), window[n] = e.response
            }, function(e) {
                t.reject(e)
            }), t.promise
        }, this.getDeliveryWardList = function(e) {
            var t = h.defer(),
                n = "deliveryWard" + e;
            return window[n] ? t.resolve(window[n]) : a.ajaxPostWithNoAuthenication("/api/v2/address/delivery-cities/wards", {
                districtId: e
            }).then(function(e) {
                t.resolve(e.response), window[n] = e.response
            }, function(e) {
                t.reject(e)
            }), t.promise
        }, this.getOffices = function(e) {
            var t = h.defer();
            return a.ajaxGetWithNoBlock("/api/v2/office/get-offices", {
                eventVenueCityId: e
            }).then(function(e) {
                t.resolve(e.response)
            }, function(e) {
                t.reject(e)
            }), t.promise
        }, this.checkArianaCode = function(e) {
            var t = h.defer();
            return a.ajaxGetWithNoBlock("/api/booking/check-ariana-code", {
                code: e
            }).then(function(e) {
                t.resolve(e.response)
            }, function(e) {
                t.reject(e)
            }), t.promise
        }, this.checkPromoCode = function(e, t, n) {
            var o = h.defer();
            return a.ajaxPostWithNoAuthenication("/api/booking/validate-award-code", {
                code: e,
                event_id: t,
                showing_id: n
            }).then(function(e) {
                o.resolve(e.response)
            }, function(e) {
                o.reject(e)
            }), o.promise
        }, this.clearOrderCookie = function(e) {
            tkb.cookie.removeItem("k-" + e)
        }, this.resetOrder = function(e) {
            e && e.eventId && (R.clearOrderCookie(e.eventId), new tkb.model.Order)
        }, this.calculateOrder = function(e, t) {
            var n = h.defer();
            return a.ajaxPostWithNoAuthenication("/api/pricing-calc?paymentFeePercent=" + t, e).then(function(e) {
                n.resolve(e.response)
            }, function(e) {
                n.reject(e)
            }), n.promise
        }, this.checkBindListCreditCard = function(e) {
            var i, r, t, n, o, a = h.defer(),
                s = function(e) {
                    a.resolve(e)
                },
                c = {
                    accept: ["visa", "jcb", "mastercard"]
                },
                l = [].indexOf || function(e) {
                    for (var t = 0, n = this.length; t < n; t++)
                        if (t in this && this[t] === e) return t;
                    return -1
                },
                u = [{
                    name: "jcb",
                    pattern: /^35(2[89]|[3-8][0-9])/,
                    valid_length: [16]
                }, {
                    name: "visa_electron",
                    pattern: /^(4026|417500|4508|4844|491(3|7))/,
                    valid_length: [16]
                }, {
                    name: "visa",
                    pattern: /^4/,
                    valid_length: [16]
                }, {
                    name: "mastercard",
                    pattern: /^5[1-5]/,
                    valid_length: [16]
                }];
            for (s && ("object" == typeof s ? (c = s, s = null) : "function" == typeof s && 0), null == (c = null == c ? {} : c).accept && (c.accept = function() {
                    for (var e = [], t = 0, n = u.length; t < n; t++) i = u[t], e.push(i.name);
                    return e
                }()), t = 0, n = (o = c.accept).length; t < n; t++)
                if (r = o[t], l.call(function() {
                        for (var e = [], t = 0, n = u.length; t < n; t++) i = u[t], e.push(i.name);
                        return e
                    }(), r) < 0) throw "Credit card type '" + r + "' is not supported";
            var p = function(e) {
                    for (var t = function() {
                            for (var e, t = [], n = 0, o = u.length; n < o; n++) e = (i = u[n]).name, 0 <= l.call(c.accept, e) && t.push(i);
                            return t
                        }(), n = 0, o = t.length; n < o; n++)
                        if (r = t[n], e.match(r.pattern)) return r;
                    return null
                },
                d = function(e) {
                    for (var t, n, o = 0, i = e.split("").reverse(), r = n = 0, a = i.length; n < a; r = ++n) t = +(t = i[r]), o += !(r % 2) || (t *= 2) < 10 ? t : t - 9;
                    return o % 10 == 0
                },
                f = function(e, t) {
                    e = e.length;
                    return 0 <= l.call(t.valid_length, e)
                },
                m = function(e) {
                    var t, n = t = !1;
                    return null != (r = p(e)) && (t = d(e), n = f(e, r)), {
                        card_type: r,
                        valid: t && n,
                        luhn_valid: t,
                        length_valid: n
                    }
                },
                R = function(e) {
                    return e.replace(/[ -]/g, "")
                };
            return s(function(e) {
                e = R(e);
                return m(e)
            }(e)), a.promise
        };
        var s = function(e, t, n) {
                if (t.response)
                    if (t.response.severity && t.response.errorType) {
                        var o = "";
                        switch (t.response.errorType) {
                            case SERVICE_ERROR_TYPE.InvalidUser:
                                if (-1 !== location.href.indexOf("#/thank-you")) return void m.path("/event-details");
                                o = "Invalid User";
                                break;
                            case SERVICE_ERROR_TYPE.InvalidOrder:
                                o = d.instant("T.SERVICE_ERROR.InvalidOrder");
                                break;
                            case SERVICE_ERROR_TYPE.InvalidTicketType:
                                o = t.response.message || d.instant("T.SERVICE_ERROR.InvalidTicketType");
                                break;
                            case SERVICE_ERROR_TYPE.InvalidTicketTypeQuantity:
                                return void f.openSimpleModal({
                                    size: "sm",
                                    title: d.instant("T.SERVICE_ERROR.InvalidTicketTypeQuantityTitle"),
                                    message: d.instant("T.SERVICE_ERROR.InvalidTicketTypeQuantityDescription"),
                                    okButtonText: d.instant("T.LAYOUT.REFRESH"),
                                    ok: function(e) {
                                        e(), p.location.reload()
                                    }
                                });
                            case SERVICE_ERROR_TYPE.InvalidDiscountCode:
                                o = "Invalid discount code";
                                break;
                            case SERVICE_ERROR_TYPE.InvalidBuyerInfo:
                                o = "Invalid Buyer infomation";
                                break;
                            case SERVICE_ERROR_TYPE.InvalidPaymentInfo:
                                o = "Invalid Payment infomation";
                                break;
                            case SERVICE_ERROR_TYPE.InvalidSeatMap:
                                o = "Invalid seat map";
                                break;
                            case SERVICE_ERROR_TYPE.InvalidSeat:
                                o = "Invalid seat";
                                break;
                            case SERVICE_ERROR_TYPE.InvalidSeatQuantity:
                                o = "Invalid seat quantity";
                                break;
                            case SERVICE_ERROR_TYPE.SavingData:
                                o = d.instant("T.SERVICE_ERROR.SavingData");
                                break;
                            case SERVICE_ERROR_TYPE.ExpiredDiscountCode:
                                o = "Discount code expired";
                                break;
                            case SERVICE_ERROR_TYPE.InvalidSeatQuantityPerOrder:
                                var o = (o = d.instant("T.SERVICE_ERROR.InvalidSeatQuantityPerOrder")).replace("{0}", t.response.data),
                                    i = d.instant("T.LAYOUT.ERROR_MODAL.ERROR_TITLE_OPPS"),
                                    r = d.instant("T.LAYOUT.ERROR_MODAL.CONTINUE_BOOKING");
                                return void f.openSimpleModal({
                                    size: "sm",
                                    title: i,
                                    message: o,
                                    okButtonText: r,
                                    ok: function(e) {
                                        e()
                                    }
                                });
                            case SERVICE_ERROR_TYPE.InvalidSeatQuantityOnSection:
                                for (var a = 0; a < t.response.data.invalidSectionBookeds.length; a++) {
                                    for (var s, c = "", l = 0; l < v.length; l++) v[l].id == t.response.data.invalidSectionBookeds[a].id && (s = (s = v[l].name).replace(/_/g, " "), c = (c = (c = d.instant("T.SERVICE_ERROR.InvalidSeatQuantityOnSection")).replace("{0}", s)).replace("{1}", t.response.data.invalidSectionBookeds[a].availableQuantity));
                                    a < t.response.data.invalidSectionBookeds.length - 1 && (c += "; "), o += c
                                }
                                break;
                            case SERVICE_ERROR_TYPE.LessThanMinQuantityOnSection:
                            case SERVICE_ERROR_TYPE.GreaterThanMaxQuantityOnSection:
                                o = t.response.data.errorMessage;
                                break;
                            case SERVICE_ERROR_TYPE.CustomValidation:
                                o = t.response.data;
                                break;
                            case SERVICE_ERROR_TYPE.EventConfigurationChanged:
                                o = d.instant("T.SERVICE_ERROR.EventConfigurationChanged");
                                break;
                            case SERVICE_ERROR_TYPE.Undefined:
                            case SERVICE_ERROR_TYPE.ExceptionOccuredWhenBookSeat:
                            case SERVICE_ERROR_TYPE.SeatMapOfEventExist:
                            case SERVICE_ERROR_TYPE.SendingEmail:
                            default:
                                o = t.response.message || "Opps! Some Error occured, Please try to booking again!"
                        }
                        switch (t.response.severity) {
                            case ERROR_SEVERITY.OmiseError:
                                return void f.openSimpleModal({
                                    size: "sm",
                                    title: d.instant("T.LAYOUT.ERROR_MODAL.ERROR_TITLE"),
                                    message: o,
                                    okButtonText: "Ok",
                                    ok: function(e) {
                                        u(function() {
                                            e()
                                        }, 0)
                                    }
                                });
                            case ERROR_SEVERITY.CheatedDataError:
                                return void f.openSimpleModal({
                                    size: "sm",
                                    title: d.instant("T.LAYOUT.ERROR_MODAL.ERROR_TITLE"),
                                    message: o,
                                    okButtonText: "Ok",
                                    ok: function(e) {
                                        u(function() {
                                            e(), R.clearOrderCookie(n), localStorage && localStorage.removeItem("order-" + n), p.location.reload()
                                        }, 0)
                                    }
                                });
                            case ERROR_SEVERITY.InvalidShowing:
                            case ERROR_SEVERITY.InvalidEvent:
                            case SERVICE_ERROR_TYPE.InvalidTicketType:
                                return void f.openSimpleModal({
                                    size: "sm",
                                    title: d.instant("T.LAYOUT.ERROR_MODAL.ERROR_TITLE"),
                                    message: t.response.message,
                                    okButtonText: "Ok",
                                    ok: function(e) {
                                        u(function() {
                                            e(), p.location.href = "/"
                                        }, 0)
                                    }
                                });
                            case ERROR_SEVERITY.ValidationError:
                                return void k(t, o);
                            case ERROR_SEVERITY.Undefined:
                            case ERROR_SEVERITY.ServerError:
                            default:
                                return void f.openSimpleModal({
                                    size: "sm",
                                    title: d.instant("T.LAYOUT.ERROR_MODAL.ERROR_TITLE"),
                                    message: o,
                                    okButtonText: "Ok",
                                    ok: function(e) {
                                        u(function() {
                                            e()
                                        }, 0)
                                    }
                                })
                        }
                    } else f.openSimpleModal({
                        size: "sm",
                        title: d.instant("T.LAYOUT.ERROR_MODAL.ERROR_TITLE_OPPS"),
                        message: d.instant("T.LAYOUT.ERROR_MODAL.ERROR_GENERAL_MESSAGE"),
                        okButtonText: d.instant("T.LAYOUT.REFRESH"),
                        ok: function(e) {
                            u(function() {
                                e()
                            }, 0)
                        }
                    })
            },
            k = function(e, t) {
                t = void 0 !== t ? t : e.response.message;
                e.response.errorType && (e.response.errorType == SERVICE_ERROR_TYPE.InvalidSeat || e.response.errorType == SERVICE_ERROR_TYPE.EmptySeat) || f.openSimpleModal({
                    size: "sm",
                    title: d.instant("T.LAYOUT.ERROR_MODAL.ERROR_TITLE"),
                    message: t,
                    okButtonText: "OK",
                    ok: function(e) {
                        u(function() {
                            e()
                        }, 0)
                    }
                })
            }
    }),
    SeatMapDataService = (ticketBookingService.$inject = ["$q", "ajaxService", "$timeout", "$window", "$translate", "modalService", "$location"], function(a) {
        return {
            findSeatBySectionAndSeat: function(e, t) {
                for (var n = _.filter(a.sections, {
                        id: e
                    }), o = 0; o < n.length; o++)
                    for (var i = 0; i < n[o].rows.length; i++) {
                        var r = _.filter(n[o].rows[i].seats, {
                            id: t
                        });
                        if (0 < r.length) return r[0]
                    }
                return null
            },
            findSeatById: function(e) {
                for (var t = a.sections, n = 0; n < t.length; n++)
                    for (var o = 0; o < t[n].rows.length; o++) {
                        var i = _.filter(t[n].rows[o].seats, {
                            id: e
                        });
                        if (0 < i.length) return i[0]
                    }
                return null
            }
        }
    }),
    OrderDataService = (SeatMapDataService.$inject = ["seatMap"], function(r) {
        return {
            checkIfSeatInOrder: function(e) {
                for (var t = 0; t < r.orderDetails.length; t++)
                    for (var n = r.orderDetails[t], o = 0; o < n.sections.length; o++) {
                        var i = n.sections[o];
                        if (i.seats)
                            if (0 < _.filter(i.seats, {
                                    id: e
                                }).length) return !0
                    }
                return !1
            }
        }
    });
OrderDataService.$inject = ["order"];

"use strict";
var tkbFilterRangeWithZero = function() {
    return function(r, t, n) {
        t = parseInt(t), n = parseInt(n), 0 <= t && r.push(0);
        for (var e = t; e <= n; e++) r.push(e);
        return r
    }
};
"use strict";
var loginBlock = function() {
        return {
            restrict: "E",
            templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/login-block.html?" + URL_VERSION
        }
    },
    tkbBookingBill = function() {
        return {
            restrict: "E",
            templateUrl: "/assets_book/views/bill_4349.html"
        }
    },
    dropDownDateAnswer = function() {
        return {
            restrict: "E",
            scope: {
                answerModel: "="
            },
            controller: ["$scope", function(s) {
                s.answerModel ? (s.selectedVal = s.answerModel.split("/"), s.selectedYear = parseInt(s.selectedVal[2]), s.selectedMonth = s.selectedVal[1], s.selectedDay = s.selectedVal[0]) : (s.selectedYear = null, s.selectedMonth = null, s.selectedDay = null), s.years = [], s.months = [];
                for (var e = (new Date).getFullYear(); 1900 < e; e--) s.years.push(e);
                for (e = 1; e < 13; e++) e = e < 10 ? "0" + e : e.toString(), s.months.push(e);
                s.updateNumberOfDays = function(e, c) {
                    if (s.days = [], null != e && null != c) {
                        var t = l(e, c);
                        s.selectedYear = c, s.selectedMonth = e;
                        for (var n = 1; n < t + 1; n++) n = n < 10 ? "0" + n : n.toString(), s.days.push(n);
                        s.answerModel = s.selectedDay + "/" + s.selectedMonth + "/" + s.selectedYear, null != s.selectedDay && null != s.selectedMonth && null != s.selectedYear || (s.answerModel = null)
                    }
                }, s.submitDay = function(e, c) {
                    s.selectedDay = e, s.answerModel = s.selectedDay + "/" + s.selectedMonth + "/" + s.selectedYear, null != s.selectedDay && null != s.selectedMonth && null != s.selectedYear || (s.answerModel = null)
                };
                var l = function(e, c) {
                    return new Date(c, e, 0).getDate()
                };
                s.updateNumberOfDays(s.selectedMonth, s.selectedYear)
            }],
            templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/drop-down-date-answer.html?" + URL_VERSION
        }
    },
    dropDownNormalAnswer = function() {
        return {
            restrict: "E",
            scope: {
                answerModel: "=",
                dropDownData: "="
            },
            controller: ["$scope", function(e) {
                e.answerModel
            }],
            templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/drop-down-normal-answer.html?" + URL_VERSION
        }
    },
    dropDownPhoneAnswer = function() {
        return {
            restrict: "E",
            scope: {
                answerModel: "="
            },
            controller: ["$scope", function(t) {
                t.dropDownPhoneCodes = [];
                for (var e = PHONE_CODE, c = 0; c < e.length; c++) t.dropDownPhoneCodes.push("(+" + e[c] + ")");
                t.answerModel ? (t.selectedPhone = t.answerModel.split(")"), t.answerPhoneCode = t.selectedPhone[0] + ")", t.answerPhoneNumber = parseInt(t.selectedPhone[1])) : (t.answerPhoneCode = null, t.answerPhoneNumber = null), t.updatePhone = function(e, c) {
                    t.answerPhoneCode = e, t.answerPhoneNumber = c, t.answerModel = t.answerPhoneCode + t.answerPhoneNumber, null != t.answerPhoneCode && null != t.answerPhoneNumber || (t.answerModel = null)
                }, t.updatePhone(t.answerPhoneCode, t.answerPhoneNumber)
            }],
            templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/templates/drop-down-phone-answer.html?" + URL_VERSION
        }
    },
    disableAnimation = function(n) {
        return {
            restrict: "A",
            link: function(e, c, t) {
                t.$observe("disableAnimation", function(e) {
                    n.enabled(!e, c)
                })
            }
        }
    },
    ticketboxLogo = (disableAnimation.$inject = ["$animate"], function() {
        return {
            restrict: "E",
            template: '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="100%" height="100%" id="svg2985" version="1.1" inkscape:version="0.48.0 r9654" sodipodi:docname="http.svg" x="0px" y="0px" viewBox="0 0 595.28 595.28" enable-background="new 0 0 595.28 595.28" xml:space="preserve"> <style type="text/css"> .st0 { fill: #8AAD3E; } .st1 { fill: #B0D35C; } .st2 { fill: #FFFFFF; } .st3 { fill: #545759; } </style> <defs> <filter id="dropshadow" height="130%"> <feGaussianBlur in="SourceAlpha" stdDeviation="10" /> <feOffset dx="2" dy="2" result="offsetblur" /> <feComponentTransfer> <feFuncA type="linear" slope="0.3" /> </feComponentTransfer> <feMerge> <feMergeNode/> <feMergeNode in="SourceGraphic" /> </feMerge> </filter> </defs> <g id="Layer_1"> <g> <rect x="0.004" y="344.046" class="st0" width="595.276" height="251.234" rx="100" ry="100" /> <rect x="0.004" class="st1" width="595.276" height="555.719" rx="100" ry="100" /> </g> </g> <g id="Layer_2"> <g> <g> <g> <g filter="url(#dropshadow)"> <path class="st2" d="M61.541,193.423h3.878v-31.023c0-2.365,0.838-4.386,2.517-6.064c1.677-1.677,3.726-2.517,6.147-2.517c2.364,0,4.386,0.839,6.064,2.517c1.677,1.678,2.517,3.7,2.517,6.064v31.023h10.314c2.364,0,4.373,0.839,6.023,2.517c1.65,1.678,2.475,3.7,2.475,6.064c0,2.421-0.825,4.47-2.475,6.147c-1.65,1.679-3.659,2.517-6.023,2.517H82.663v41.502c0,10.947,5.5,16.42,16.502,16.42c2.364,0,4.373,0.839,6.023,2.516c1.65,1.679,2.476,3.701,2.476,6.065c0,2.421-0.825,4.469-2.476,6.146c-1.65,1.679-3.659,2.517-6.023,2.517c-22.498,0-33.746-11.222-33.746-33.664v-41.502h-3.878c-2.311,0-4.305-0.838-5.982-2.517c-1.679-1.677-2.517-3.726-2.517-6.147c0-2.364,0.838-4.386,2.517-6.064C57.236,194.262,59.23,193.423,61.541,193.423z" /> <path class="st2" d="M142.812,177.003c0,2.805-0.99,5.198-2.971,7.178c-1.98,1.98-4.373,2.97-7.178,2.97c-2.805,0-5.198-0.99-7.178-2.97c-1.98-1.98-2.97-4.373-2.97-7.178c0-2.805,0.99-5.198,2.97-7.178c1.98-1.98,4.373-2.97,7.178-2.97c2.806,0,5.198,0.99,7.178,2.97C141.822,171.805,142.812,174.198,142.812,177.003z M124.082,277.169v-75.083c0-2.419,0.838-4.468,2.517-6.146c1.677-1.677,3.699-2.517,6.064-2.517c2.365,0,4.386,0.839,6.064,2.517c1.677,1.678,2.544,3.727,2.599,6.146v75.083c-0.056,2.421-0.922,4.469-2.599,6.146c-1.678,1.679-3.7,2.517-6.064,2.517c-2.366,0-4.387-0.838-6.064-2.517C124.921,281.639,124.082,279.591,124.082,277.169z" /> <path class="st2" d="M229.364,259.677c2.475,0,4.523,0.812,6.147,2.435c1.622,1.623,2.434,3.671,2.434,6.147c0,2.421-0.908,4.538-2.723,6.353c-8.526,7.482-18.564,11.222-30.116,11.222c-12.762,0-23.653-4.509-32.673-13.532c-9.022-9.021-13.532-19.912-13.532-32.673c0-12.761,4.51-23.652,13.532-32.674c9.02-9.02,19.912-13.531,32.673-13.531c11.605,0,21.645,3.741,30.116,11.221c1.98,1.761,2.971,3.934,2.971,6.518c0,2.475-0.812,4.538-2.434,6.188c-1.623,1.65-3.672,2.476-6.147,2.476c-2.091,0-3.96-0.66-5.611-1.98c-2.805-2.364-5.749-4.152-8.828-5.363c-3.082-1.21-6.436-1.815-10.066-1.815c-4.016,0-7.784,0.757-11.304,2.269c-3.521,1.514-6.601,3.576-9.241,6.188c-2.641,2.614-4.718,5.681-6.23,9.2c-1.514,3.521-2.269,7.289-2.269,11.304c0,4.016,0.755,7.784,2.269,11.304c1.512,3.521,3.589,6.587,6.23,9.2c2.64,2.612,5.72,4.675,9.241,6.187c3.52,1.514,7.288,2.27,11.304,2.27c3.63,0,6.985-0.59,10.066-1.774c3.079-1.182,5.995-2.956,8.746-5.321C225.458,260.337,227.273,259.733,229.364,259.677z" /> <path class="st2" d="M251.311,277.169V162.482c0-2.42,0.838-4.469,2.517-6.147c1.677-1.677,3.726-2.517,6.147-2.517c2.364,0,4.386,0.839,6.064,2.517c1.677,1.678,2.517,3.727,2.517,6.147v64.357l49.34-32.096c1.373-0.879,2.914-1.32,4.621-1.32c1.209,0,2.336,0.221,3.383,0.66c1.043,0.44,1.951,1.06,2.723,1.857c0.77,0.798,1.389,1.72,1.855,2.764c0.467,1.046,0.701,2.146,0.701,3.3c0,3.082-1.102,5.363-3.299,6.849l-34.572,22.442l35.478,39.934c1.596,1.762,2.393,3.769,2.393,6.024c0,1.155-0.234,2.256-0.701,3.3c-0.467,1.046-1.086,1.967-1.855,2.764c-0.771,0.798-1.68,1.418-2.723,1.857c-1.047,0.441-2.174,0.66-3.383,0.66c-2.311,0-4.238-0.743-5.775-2.228l-38.12-42.822l-10.066,6.601v29.786c0,2.366-0.84,4.402-2.517,6.105c-1.679,1.706-3.7,2.558-6.064,2.558c-2.421,0-4.47-0.852-6.147-2.558C252.15,281.571,251.311,279.535,251.311,277.169z" /> <path class="st2" d="M408.904,259.842c2.475,0,4.523,0.812,6.146,2.435c1.621,1.623,2.434,3.671,2.434,6.146c0,2.421-0.824,4.484-2.475,6.188c-8.527,7.482-18.594,11.222-30.199,11.222c-12.762,0-23.652-4.509-32.674-13.532c-9.021-9.021-13.531-19.912-13.531-32.673c0-12.761,4.51-23.652,13.531-32.674c9.022-9.02,19.912-13.531,32.674-13.531c12.652,0,23.543,4.511,32.674,13.531c4.51,4.456,7.893,9.42,10.148,14.893c2.256,5.474,3.383,11.4,3.383,17.781c0,2.475-0.838,4.525-2.516,6.146c-1.68,1.624-3.729,2.434-6.147,2.434h-65.348c0.934,3.026,2.31,5.79,4.125,8.293c1.816,2.503,3.947,4.649,6.395,6.436c2.447,1.788,5.143,3.176,8.086,4.166c2.941,0.99,6.01,1.485,9.199,1.485c3.631,0,6.959-0.549,9.984-1.65c3.023-1.099,5.83-2.749,8.416-4.95C404.861,260.614,406.758,259.898,408.904,259.842z M412.617,231.047c-0.938-3.024-2.324-5.789-4.166-8.292c-1.844-2.503-3.99-4.647-6.436-6.436c-2.449-1.787-5.145-3.176-8.086-4.167c-2.943-0.99-5.982-1.485-9.119-1.485c-3.135,0-6.188,0.495-9.158,1.485c-2.971,0.99-5.693,2.38-8.168,4.167c-2.475,1.789-4.621,3.934-6.436,6.436c-1.814,2.503-3.164,5.268-4.043,8.292H412.617z" /> <path class="st2" d="M452.303,193.423h3.879v-31.023c0-2.365,0.838-4.386,2.516-6.064c1.678-1.677,3.727-2.517,6.148-2.517c2.363,0,4.385,0.839,6.062,2.517c1.678,1.678,2.518,3.7,2.518,6.064v31.023h10.314c2.363,0,4.373,0.839,6.022,2.517c1.65,1.678,2.477,3.7,2.477,6.064c0,2.421-0.826,4.47-2.477,6.147c-1.648,1.679-3.658,2.517-6.022,2.517h-10.314v41.502c0,10.947,5.5,16.42,16.502,16.42c2.363,0,4.373,0.839,6.024,2.516c1.65,1.679,2.475,3.701,2.475,6.065c0,2.421-0.824,4.469-2.475,6.146c-1.65,1.679-3.66,2.517-6.024,2.517c-22.498,0-33.746-11.222-33.746-33.664v-41.502h-3.879c-2.309,0-4.303-0.838-5.982-2.517c-1.678-1.677-2.516-3.726-2.516-6.147c0-2.364,0.838-4.386,2.516-6.064C448,194.262,449.994,193.423,452.303,193.423z" /> </g> </g> </g> <g> <g> <g filter="url(#dropshadow)"> <path class="st3" d="M268.555,359.283c8.195-6.819,17.849-10.231,28.961-10.231c12.65,0,23.543,4.512,32.673,13.532c4.51,4.455,7.893,9.42,10.148,14.893c2.256,5.474,3.383,11.4,3.383,17.78c0,12.872-4.512,23.763-13.531,32.674c-9.131,9.022-20.023,13.531-32.673,13.531c-12.762,0-23.653-4.509-32.674-13.531c-9.021-9.021-13.531-19.911-13.531-32.674v-77.228c0-2.476,0.811-4.523,2.434-6.148c1.622-1.621,3.671-2.433,6.147-2.433c2.419,0,4.468,0.812,6.147,2.433c1.677,1.625,2.516,3.673,2.516,6.148V359.283z M297.516,424.218c4.015,0,7.783-0.77,11.304-2.311c3.518-1.538,6.586-3.63,9.199-6.271c2.611-2.64,4.674-5.706,6.19-9.199c1.51-3.492,2.268-7.22,2.268-11.181c0-3.96-0.758-7.686-2.268-11.179c-1.516-3.493-3.578-6.56-6.19-9.2c-2.613-2.641-5.682-4.73-9.199-6.271c-3.521-1.539-7.289-2.31-11.304-2.31c-4.071,0-7.867,0.771-11.386,2.31c-3.521,1.541-6.574,3.618-9.159,6.23c-2.586,2.612-4.635,5.68-6.147,9.199c-1.513,3.521-2.269,7.261-2.269,11.221c0,3.961,0.756,7.702,2.269,11.222c1.512,3.522,3.561,6.588,6.147,9.199c2.585,2.613,5.638,4.691,9.159,6.229C289.649,423.448,293.445,424.218,297.516,424.218z" /> <path class="st3" d="M449.332,395.257c0,12.872-4.51,23.763-13.531,32.674c-9.131,9.022-20.023,13.531-32.674,13.531c-12.762,0-23.652-4.509-32.674-13.531c-9.02-9.021-13.531-19.911-13.531-32.674c0-12.76,4.512-23.651,13.531-32.673c9.021-9.021,19.912-13.532,32.674-13.532c12.65,0,23.543,4.512,32.674,13.532c4.51,4.511,7.881,9.488,10.107,14.934C448.137,382.963,449.277,388.877,449.332,395.257z M403.127,366.297c-4.07,0-7.865,0.771-11.385,2.31c-3.521,1.541-6.574,3.618-9.16,6.23c-2.586,2.612-4.633,5.68-6.147,9.199c-1.514,3.521-2.27,7.261-2.27,11.221c0,3.961,0.756,7.702,2.27,11.222c1.514,3.522,3.561,6.588,6.147,9.199c2.586,2.613,5.639,4.691,9.16,6.229c3.52,1.541,7.314,2.311,11.385,2.311c4.016,0,7.783-0.77,11.305-2.311c3.52-1.538,6.586-3.63,9.199-6.271c2.611-2.64,4.676-5.706,6.189-9.199c1.51-3.492,2.268-7.22,2.268-11.181c0-3.96-0.758-7.686-2.268-11.179c-1.514-3.493-3.578-6.56-6.189-9.2c-2.613-2.641-5.68-4.73-9.199-6.271C410.91,367.067,407.143,366.297,403.127,366.297z" /> <path class="st3" d="M491.082,395.175l-26.732-31.849c-1.32-1.485-1.98-3.383-1.98-5.693c0-1.155,0.219-2.254,0.66-3.3c0.439-1.044,1.045-1.967,1.814-2.764c0.77-0.798,1.678-1.416,2.723-1.857c1.045-0.439,2.172-0.66,3.383-0.66c2.586,0,4.73,0.937,6.436,2.806l24.918,29.786l24.918-29.786c1.65-1.869,3.768-2.806,6.353-2.806c1.209,0,2.338,0.221,3.383,0.66c1.043,0.441,1.951,1.06,2.723,1.857c0.769,0.797,1.389,1.72,1.855,2.764c0.469,1.046,0.703,2.145,0.703,3.3c0,2.092-0.69,3.988-2.062,5.693l-26.734,31.849l26.98,32.344c1.209,1.376,1.816,3.164,1.816,5.362c0,1.155-0.234,2.257-0.703,3.301c-0.467,1.046-1.086,1.968-1.855,2.764c-0.771,0.798-1.68,1.418-2.723,1.856c-1.045,0.441-2.174,0.66-3.383,0.66c-2.365,0-4.428-0.878-6.188-2.64l-25.084-30.198l-25.246,30.198c-1.65,1.762-3.688,2.64-6.107,2.64c-1.211,0-2.338-0.219-3.383-0.66c-1.045-0.438-1.953-1.059-2.723-1.856c-0.77-0.796-1.375-1.718-1.814-2.764c-0.441-1.044-0.66-2.146-0.66-3.301c0-2.145,0.578-3.932,1.733-5.362L491.082,395.175z" /> </g> </g> </g> </g> </g></svg>'
        }
    }),
    ticketboxText = function() {
        return {
            restrict: "E",
            template: '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="100%" height="100%" id="svg2985" version="1.1" inkscape:version="0.48.0 r9654" sodipodi:docname="http.svg" x="0px" y="0px" viewBox="0 0 179 25" style="enable-background:new 0 0 179 25;" xml:space="preserve"><g xmlns="http://www.w3.org/2000/svg"><path style="fill:#FFFFFF;" d="M4.6,0.7h0.3c1,0.2,1.5,0.7,1.5,1.4V7h1.9L8.9,7c0.8,0,1.4,0.5,1.6,1.6c0,0.8-0.5,1.4-1.4,1.7l-1-0.1H6.4 v8.2c0,1.3,0.4,2.1,1.1,2.3l1.3,0.1h0.6c0.8,0,1.3,0.5,1.5,1.6v0.1c-0.2,1-0.7,1.6-1.6,1.6H8.1c-2.1,0-3.6-1.1-4.7-3.4 c-0.2-0.6-0.3-1.2-0.3-2v-8.6H2.5l-1,0.1C0.5,10,0,9.4,0,8.6C0.2,7.5,0.5,7,1.1,7V6.9L2.2,7h1V2.5C3.3,1.3,3.8,0.7,4.6,0.7z"/><path style="fill:#FFFFFF;" d="M14.6,2.4c1.1,0.3,1.6,0.8,1.6,1.5v0.4c0,0.9-0.6,1.4-1.7,1.5c-0.8,0-1.4-0.6-1.6-1.7 C13.1,3,13.7,2.4,14.6,2.4z M14.6,6.6c1.1,0.3,1.6,0.8,1.6,1.5v14.5c0,0.9-0.5,1.4-1.6,1.6h-0.1c-0.9,0-1.4-0.6-1.6-1.7V8.4 C13,7.2,13.6,6.6,14.6,6.6z"/><path style="fill:#FFFFFF;" d="M27,6.6c2.3,0,4.3,0.9,6.2,2.6c0.2,0.3,0.3,0.6,0.3,0.9v0.1c-0.2,1.1-0.7,1.6-1.6,1.6h-0.1 c-0.4,0-1.1-0.4-2.2-1.2c-0.8-0.4-1.6-0.6-2.4-0.6h-0.4c-2.1,0-3.8,1.1-4.9,3.4c-0.3,0.8-0.4,1.5-0.4,2.1c0,2.2,1.1,3.9,3.4,5 c0.7,0.3,1.4,0.4,2.2,0.4c1.3,0,2.6-0.6,3.9-1.7l0.7-0.1h0.2c0.9,0,1.4,0.5,1.6,1.6v0.1c0,1.1-1.4,2.1-4.2,3.2 c-0.9,0.2-1.6,0.3-2.1,0.3h-0.5c-2.4,0-4.6-1.1-6.6-3.3c-1.3-1.8-1.9-3.6-1.9-5.5c0-2.9,1.3-5.3,3.8-7.2C23.6,7.2,25.2,6.6,27,6.6z "/><path style="fill:#FFFFFF;" d="M41,15.3l-2,1.3v6c0,0.9-0.5,1.4-1.6,1.6h-0.1c-0.8,0-1.4-0.5-1.7-1.5V1.6C35.9,0.5,36.4,0,37.1,0h0.3 c1,0.2,1.6,0.7,1.6,1.5v11.2c5.3-3.5,8.4-5.5,9.5-6.1h0.4c0.9,0,1.5,0.6,1.7,1.7c0,0.7-0.7,1.5-2.2,2.2c-2.4,1.6-3.9,2.6-4.5,3.1 l6.6,8.3l0.1,0.5v0.1c-0.2,1.1-0.7,1.6-1.7,1.6h-0.1c-0.6,0-1.5-0.8-2.5-2.3L41,15.3z"/><path style="fill:#FFFFFF;" d="M60.2,6.6c3.4,0,6,1.6,7.9,4.8c0.6,1.3,1,2.6,1,4.1v0.4c-0.2,1.1-0.7,1.7-1.6,1.7H55.3 c0.3,1.1,1.2,2,2.6,2.8c0.9,0.3,1.7,0.5,2.4,0.5c0.9,0,1.9-0.3,3.1-0.9h0.5c1,0.2,1.5,0.7,1.5,1.6v0.2c0,1.3-1.6,2.1-4.8,2.5h-0.5 c-3.2,0-5.7-1.5-7.6-4.4c-0.8-1.4-1.1-2.8-1.1-4.4c0-3.2,1.5-5.8,4.5-7.7C57.5,7,58.9,6.6,60.2,6.6z M55,14.2h10.6 c0-0.4-0.4-1.2-1.3-2.4c-1.2-1.1-2.4-1.7-3.6-1.7H60c-1.8,0-3.2,0.9-4.4,2.6C55.2,13.4,55,13.9,55,14.2z"/><path style="fill:#FFFFFF;" d="M74.4,0.7h0.3c1,0.2,1.5,0.7,1.5,1.4V7h1.9L78.7,7c0.8,0,1.4,0.5,1.6,1.6c0,0.8-0.5,1.4-1.4,1.7l-1-0.1h-1.7 v8.2c0,1.3,0.4,2.1,1.1,2.3l1.3,0.1h0.6c0.8,0,1.3,0.5,1.5,1.6v0.1c-0.2,1-0.7,1.6-1.6,1.6h-1.2c-2.1,0-3.6-1.1-4.7-3.4 c-0.2-0.6-0.3-1.2-0.3-2v-8.6h-0.7l-1,0.1c-1-0.3-1.4-0.9-1.4-1.7C70,7.5,70.3,7,70.9,7V6.9L72,7h1V2.5C73.1,1.3,73.6,0.7,74.4,0.7 z"/><path style="fill:#FFFFFF;" d="M83.2,0h0.3c1,0.2,1.5,0.7,1.5,1.5v6.8c1.3-1.3,3.2-1.9,5.5-1.9c2.3,0,4.3,0.9,6.2,2.6 c1.8,1.9,2.7,3.9,2.7,6.3c0,3.3-1.6,5.9-4.7,7.8c-1.4,0.7-2.7,1-4,1h-0.5c-2.4,0-4.6-1.1-6.7-3.4c-1.3-1.7-1.9-3.7-1.9-5.9V1.6 C81.7,0.8,82.2,0.3,83.2,0z M85,15.2v0.3c0,2.3,1.2,4,3.6,5.1c0.6,0.2,1.2,0.3,1.7,0.3h0.4c2.2,0,3.9-1.2,5-3.6 c0.2-0.7,0.3-1.3,0.3-1.7v-0.4c0-2.3-1.2-4-3.7-5.1c-0.7-0.2-1.3-0.3-1.7-0.3h-0.2c-2.2,0-3.9,1.2-5.1,3.5C85.2,14,85,14.6,85,15.2 z"/><path style="fill:#FFFFFF;" d="M109.1,6.8c2.3,0,4.3,0.9,6.1,2.6c1.7,1.8,2.6,3.9,2.6,6.2c0,3.3-1.5,5.8-4.6,7.7c-1.3,0.7-2.7,1-3.9,1h-0.5 c-2.4,0-4.5-1.1-6.6-3.3c-1.2-1.7-1.9-3.6-1.9-5.4c0-2.8,1.3-5.2,3.8-7.1C105.8,7.3,107.4,6.8,109.1,6.8z M103.8,15.3v0.3 c0,2,1,3.6,2.9,4.7c0.7,0.4,1.4,0.5,2.2,0.5h0.4c2.1,0,3.7-1.1,4.8-3.3c0.2-0.7,0.4-1.3,0.4-2v-0.3c0-1.7-0.8-3.1-2.3-4.2 c-0.9-0.6-1.9-0.9-3.1-0.9c-2.3,0-4,1.2-5,3.6C103.9,14.3,103.8,14.8,103.8,15.3z"/><path style="fill:#FFFFFF;" d="M125.7,13c0.6-0.7,2.1-2.5,4.5-5.6c0.2-0.2,0.6-0.4,1.1-0.5c1.1,0.3,1.6,0.8,1.6,1.5v0.4 c0,0.4-0.8,1.4-2.2,3.2l-2.9,3.7c3.4,4.1,5.2,6.3,5.2,6.7v0.4c0,0.9-0.5,1.4-1.6,1.6h-0.1c-0.6,0-1.3-0.5-2-1.6l-3.6-4.5 c-2.9,3.7-4.5,5.6-4.7,5.7c-0.3,0.2-0.6,0.3-0.9,0.3h0c-0.9,0-1.5-0.6-1.6-1.7c0-0.5,0.8-1.6,2.4-3.4l2.8-3.6l-5-6.3l-0.2-0.7 c0.2-1.1,0.8-1.7,1.7-1.7c0.7,0,1.4,0.6,2.2,1.9C124.1,11,125.2,12.4,125.7,13z"/><path style="fill:#FFFFFF;" d="M138.3,18.8c1.4,0,2.3,0.8,2.7,2.4v0.5c0,1-0.6,1.8-1.8,2.3c-0.2,0.1-0.5,0.2-0.8,0.2h-0.1 c-1.5,0-2.4-0.9-2.7-2.7c0-1.2,0.6-2,1.9-2.5C137.7,18.8,138,18.8,138.3,18.8z"/><path style="fill:#FFFFFF;" d="M144.1,6.6h0.1c0.9,0,1.6,0.8,2.1,2.3l4.8,9.8c3.5-7.4,5.4-11.3,5.7-11.6c0.4-0.3,0.8-0.4,1.2-0.4 c1.1,0.2,1.7,0.8,1.7,1.6v0.1c0,0.3-0.9,2.3-2.7,6.1l-4.5,9.3c-0.5,0.4-0.9,0.5-1.2,0.5h0c-0.9,0-1.7-0.9-2.3-2.6 c-3.9-8-6-12.3-6.2-13V8.1C142.7,7.1,143.2,6.6,144.1,6.6z"/><path style="fill:#FFFFFF;" d="M163.4,6.7c1,0.3,1.6,0.8,1.6,1.5v0.2c1.3-1.2,3-1.8,5.2-1.8c2.4,0,4.6,1,6.4,3c1.4,1.7,2,3.5,2,5.3v7.7 c0,0.8-0.5,1.3-1.6,1.5h-0.2c-1.1-0.2-1.6-0.7-1.6-1.6v-6.8c0-2.8-1.2-4.6-3.6-5.5c-0.6-0.2-1.1-0.2-1.6-0.2H170 c-2,0-3.5,1-4.6,3.1c-0.3,0.6-0.4,1.7-0.4,3.1v6.3c0,0.9-0.5,1.4-1.6,1.6h-0.1c-0.9,0-1.4-0.6-1.6-1.7v-14 C161.7,7.3,162.3,6.7,163.4,6.7z"/></g></svg>'
        }
    },
    moreIcon = function() {
        return {
            restrict: "E",
            template: '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="100%" height="100%" id="svg2985" version="1.1" inkscape:version="0.48.0 r9654" sodipodi:docname="http.svg" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" preserveAspectRatio="xMidYMid meet" fit="" style="fill: {{color}}; pointer-events: none; display: block;"><g><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g></svg>'
        }
    },
    localbankIcon = function() {
        return {
            restrict: "E",
            template: '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="100%" height="100%" id="svg2985" version="1.1" inkscape:version="0.48.0 r9654" sodipodi:docname="http.svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" preserveAspectRatio="xMidYMid meet" fit="" style="fill: {{color}}; pointer-events: none; display: block;"><g><path d="M20 4h-16c-1.11 0-1.99.89-1.99 2l-.01 12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2v-12c0-1.11-.89-2-2-2zm0 14h-16v-6h16v6zm0-10h-16v-2h16v2z"></path></g></svg>'
        }
    },
    storeIcon = function() {
        return {
            restrict: "E",
            template: '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="100%" height="100%" id="svg2985" version="1.1" inkscape:version="0.48.0 r9654" sodipodi:docname="http.svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" preserveAspectRatio="xMidYMid meet" fit="" style="fill: {{color}}; pointer-events: none; display: block;"><g><path d="M20 4h-16v2h16v-2zm1 10v-2l-1-5h-16l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4h-6v-4h6v4z"></path></g></svg>'
        }
    },
    shippingIcon = function() {
        return {
            restrict: "E",
            template: '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="100%" height="100%" id="svg2985" version="1.1" inkscape:version="0.48.0 r9654" sodipodi:docname="http.svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" preserveAspectRatio="xMidYMid meet" fit="" style="pointer-events: none; display: block; fill: {{color}};"><g><path d="M20 8h-3v-4h-14c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-14 10.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5h-4.46v-2.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g></svg>'
        }
    },
    eatClick = function() {
        return function(e, c, t) {
            angular.element(c).bind("click", function(e) {
                e.preventDefault(), e.stopPropagation()
            })
        }
    },
    openLink = function(e) {
        window.location.href = e
    },
    limitTo = function() {
        return {
            restrict: "A",
            link: function(c, e, t) {
                var n = parseInt(t.limitTo),
                    s = angular.element(e);
                s.on("keydown", function(e) {
                    var c = this.value.replace(/[, ]/g, "").trim();
                    if ((!e.ctrlKey && 47 < e.keyCode && e.keyCode < 112 || 145 < e.keyCode) && c.length + 1 > n) return e.preventDefault(), !1
                }), s.on("paste", function(e) {
                    setTimeout(function() {
                        s.val().replace(/[, ]/g, "").trim().length > n && (s.val(""), c.$apply())
                    }, 5)
                })
            }
        }
    },
    numberOnly = function() {
        return {
            restrict: "A",
            link: function(c, e, t) {
                var n = angular.element(e);
                n.on("keydown", function(e) {
                    var c = e.keyCode;
                    if (!(c < 58 || 95 < c && c < 106 || e.ctrlKey)) return e.preventDefault(), !1
                }), n.on("paste", function(e) {
                    setTimeout(function() {
                        var e = n.val();
                        n.val(e.replace(/[^0-9\.]+/g, "")), c.$apply()
                    }, 5)
                })
            }
        }
    },
    numberOnlyV2 = function() {
        return {
            restrict: "A",
            link: function(c, e, t) {
                var n = angular.element(e);
                n.on("keydown", function(e) {
                    var c = e.keyCode;
                    if (!(c < 58 && 47 < c || 95 < c && c < 106 || e.ctrlKey || 35 <= e.keyCode && e.keyCode <= 40 || 8 == c || 46 == c || 9 == c || 13 == c)) return e.preventDefault(), !1
                }), n.on("paste", function(e) {
                    setTimeout(function() {
                        var e = n.val();
                        n.val(e.replace(/[^0-9 ]+/g, "")), c.$apply()
                    }, 5)
                })
            }
        }
    },
    dateInput = function() {
        return {
            restrict: "A",
            link: function(e, c, t) {
                angular.element(c).on("keydown", function(e) {
                    var c = e.keyCode;
                    if (!(c < 58 || 95 < c && c < 106 || 191 == c)) return e.preventDefault(), !1
                })
            }
        }
    };
"use strict";
var bookingOnTKBApp = "undefined" != typeof isTKBApp || "undefined" != typeof AndroidFunction,
    arrLocationHashCheck = ["#/step-select-tickets", "#/step2", "#/step-question-form", "#/thank-you"],
    arrLocationHashCheckQueue = ["#/step-select-tickets", "#/step2", "#/step-question-form"],
    keyCache = window.tkb.data.eventId + "-" + window.tkb.data.showingId;

function getCookie(e) {
    var n = {};
    return document.cookie.split(";").forEach(function(e) {
        var t = e.split("=")[0],
            e = e.split("=")[1];
        n[t.trim()] = e
    }), n[e]
}
async function getQueueStatus() {
    // try {
    //     var e = await fetch("https://api-movie.ticketbox.vn/v1/queue/status?", {
    //         headers: {
    //             "x-tb-access-token": getCookie("TBoxJWT")
    //         }
    //     });
    //     if (e.ok) return e.json();
    //     throw window.location.href = "/", new Error("Failed to fetch data")
    // } catch (e) {
    //     window.location.href = "/"
    // }
    return {"data":{"position":0,"status":"BOOKING","your_number":0}}
}! function() {
    var e;
    bookingOnTKBApp && !tkb.data.isWidget && (e = location.protocol + "//" + location.host + "/ticket-booking/" + tkb.data.eventId + "/widget/" + tkb.data.showingId, window.location.replace(e)), window.addEventListener && (window.addEventListener("load", function() {
        setTimeout(function() {
            var e;
            tkb.data.isWidget && !tkb.isMobile && tkb.isWindows && void 0 !== (e = document.querySelector(".checkout-section-wg")) && e && (document.getElementById("content").style.height = window.innerHeight - e.offsetHeight + "px", document.querySelector(".booking-body").style.paddingBottom = "0px"), -1 < arrLocationHashCheckQueue.indexOf(window.location.hash) && getQueueStatus().then(function(e) {
                e && "BOOKING" !== e?.data?.status && (window.location.href = "/")
            })
        }, 20);
        window.innerHeight;
        var e = document.querySelector("header"),
            t = document.querySelector("footer"),
            e = e ? e.offsetHeight : 0,
            t = t ? t.offsetHeight : 0;
        document.querySelector("section").style.minHeight = window.innerHeight - (e + t) + "px"
    }), window.addEventListener("beforeunload", function(e) {
        "-1" !== arrLocationHashCheck.indexOf(window.location.hash) && window.sessionStorage.getItem(keyCache) && (console.log("remove cache"), window.localStorage.removeItem(keyCache), window.sessionStorage.removeItem("page_available" + keyCache))
    }, !0), window.addEventListener("hashchange", function(t) {
        -1 < arrLocationHashCheckQueue.indexOf(window.location.hash) && getQueueStatus().then(function(e) {
            e && "BOOKING" !== e?.data?.status && (window.location.href = "/")
        }), arrLocationHashCheck.some(function(e) {
            return !!t.oldURL.includes(e)
        }) && "-1" !== arrLocationHashCheck.indexOf(window.location.hash) && window.localStorage.removeItem(keyCache)
    }, {}), window.onpageshow = function(e) {
        e.persisted && window.location.reload()
    }, localStorage.openpages = Date.now(), window.addEventListener("storage", function(e) {
        (-1 !== location.hash.indexOf("#/thank-you/") || ("openpages" == e.key && (localStorage["page_available" + keyCache] = Date.now()), e.key == "page_available" + keyCache && "true" != sessionStorage.getItem("isLogout") && sessionStorage.setItem("page_available" + keyCache, "true"), "true" == sessionStorage.getItem("isLogout"))) && sessionStorage.setItem("page_available" + keyCache, "false")
    }))
}();
var ticketBookingController = function(l, e, E, c, T, n, d, a, p, t, i) {
    function o() {
        var e = tkb.cookie.getItem("SmartlinkError"),
            t = l.order.paymentInfo.smartlinkInfo;
        0 == t.isSuccess && 0 == t.isCancelled && "true" == e && setTimeout(function() {
            p.openSimpleModal({
                size: "sm",
                title: T.instant("T.LAYOUT.ERROR_MODAL.ERROR_TITLE"),
                message: T.instant("T.STEP2.SMARTLINK.ERROR"),
                okButtonText: T.instant("T.LAYOUT.ERROR_MODAL.CONTINUE_BOOKING"),
                ok: function(e) {
                    c(e, 0)
                }
            })
        }, 800), tkb.cookie.removeItem("SmartlinkError"), l.remainingBookingTime = l.order.remainingBookingTime || 0, I(), l.paymentMessagePopup()
    }

    function r(t) {
        if (l.event.currentShowing.ticketTypeGroups && l.event.currentShowing.ticketTypeGroups.length) {
            var e = _.filter(l.event.currentShowing.ticketTypeGroups, function(e) {
                return e.ticketTypeIds && -1 < e.ticketTypeIds.indexOf(t.id) && e.mustHaveSameQuantity
            });
            if (0 < e.length)
                for (var e = e[0], n = _.without(e.ticketTypeIds, t.id), i = 0; i < l.event.currentShowing.ticketTypes.length; i++) {
                    var o = l.event.currentShowing.ticketTypes[i]; - 1 < n.indexOf(o.id) && (o.selectedQuantity = t.selectedQuantity)
                }
        }
    }
    window.location.search.split("colorscheme=")[1] ? (R = window.location.search.split("colorscheme=")[1], l.themeType = R.replace("colorscheme=", "")) : l.themeType = "default", l.snapperContent = document.getElementById("content"), l.isBinding = {
        value: !0
    }, l.BOOKING_STEP = BOOKING_STEP, l.PAYMENT_TYPE = PAYMENT_TYPE, l.TwoC2P_TYPE = TwoC2P_TYPE, l.DELIVERY_METHODS = DELIVERY_METHODS, l.PHONE_CODE = PHONE_CODE, l.BANK_LIST = BANK_LIST, l.COUNTER_LIST_ONE23 = COUNTER_LIST_ONE23, T.use(tkb.data.currentCultureName), l.currentLangKey = tkb.data.currentCultureName, l.isShowingRightBar = !1, l.deliveryCities = [], l.deliveryDistricts = [], l.remainingBookingTime = 0, l.initialized = !1, l.isSeatpickingEvent = !1, l.isWidget = tkb.data.isWidget, l.isMobileDevice = tkb.isMobile, l.siteSetting = tkb.siteSetting, l.widgetShowSelectionRequired = !!tkb.url.getParamValue("showSelectionRequired") && JSON.parse(tkb.url.getParamValue("showSelectionRequired")), l.validationError = {}, l.reviewingOrder = !1, l.staticDomain = tkb.data.staticDomain, l.hasSeatMap = tkb.data.hasSeatMap, l.EVENT_BOOKABLE_STATUS = EVENT_BOOKABLE_STATUS, l.RECEIVE_METHOD = RECEIVE_METHOD, l.bookableStatus = EVENT_BOOKABLE_STATUS.NotAvailable, l.omiseCardInfo = "", l.userParam = {
        email: tkb.url.getParamValue("email"),
        firstName: tkb.url.getParamValue("firstName"),
        lastName: tkb.url.getParamValue("lastName"),
        phoneNumber: tkb.url.getParamValue("phoneNumber")
    }, l.tkbAccessToken = tkb.url.getParamValue("token"), l.global = {
        selectedTicketTypeGroupId: null,
        currentGroupTicketTypeIds: null,
        discountCodeDisableInput: !1,
        submitting: !1,
        submitStep1Clicked: !1,
        discountMsg: "",
        discountCodeError: !1,
        discountCodeForSeatError: !1,
        limitAmount: 0,
        canByPassLimitAmount: !1
    }, l.paymentMethods = {}, t.getCurrentUserInfo(l.tkbAccessToken).then(function(e) {
        l.user = e || null
    }), l.getProducts = function(e) {
        var e = e || l.order,
            t = [],
            n = window.location.href.split("#");
        return angular.forEach(e.orderDetails, function(e) {
            t.push({
                id: l.event.currentShowing.id + "",
                categoryId: "",
                transactionId: "",
                price: e.unitPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + l.event.currency.isoCode,
                quantity: e.quantity,
                name: e.ticketTypeTitle,
                brandName: l.event.title,
                desc: "",
                imageUrl: l.event.coverImageUrl,
                link: n[0]
            })
        }), t
    }, l.execEmaticProducts = function(e, t) {
        var n;
        l.event && (n = l.getProducts(t), "undefined" != typeof ematics ? ematics("log", "product", e, n) : c(function() {
            "undefined" != typeof ematics && ematics("log", "product", e, n)
        }, 1e3))
    }, l.showArianaPopup = function(e) {
        tkb.cookie.getItem("ariana-secret") || 1 == tkb.data.isShowArianaPopup && p.openArianaQuestionYesNoModel(l, {
            ok: function(e) {
                window.location.href = tkb.data.arianaVIPPackageLink
            },
            cancel: function(e) {
                e(), p.openArianaQuestionCodeModel(l, {
                    ok: function(t, e) {
                        a.checkArianaCode(e.customPopupInput1).then(function(e) {
                            1 == e ? t.close() : t.showValidate()
                        })
                    }
                })
            }
        })
    }, l.showAccessCodePopup = function(e) {
        tkb.cookie.getItem("award-code-" + tkb.data.eventId + "-" + tkb.data.showingId) || -1 !== window.location.hash.indexOf("thank-you") || e(l, {
            ok: function(t, e) {
                a.checkPromoCode(e.customPromoPopupInput, tkb.data.eventId, tkb.data.showingId).then(function(e) {
                    e ? t.close() : t.showValidate()
                })
            }
        })
    }, l.resetReceiveMethod = function() {
        null != l.event && 2 == l.event.siteId && l.event.disableETicket && null != l.order && (l.order.receiveMethod = null), null != l.order && null == l.order.receiveMethod && (l.event.isAlowDelivery ? l.order.receiveMethod = DELIVERY_METHODS.cod : l.event.isAlowPickupEntrance && (l.order.receiveMethod = DELIVERY_METHODS.pickupAtEntrance))
    }, a.getEventInfo(tkb.data.eventId, tkb.data.showingId, tkb.data.isWidget).then(function(e) {
        l.isCaptchaV2 = e.isCaptchaV2, e.isShowSectionInBill = 65579 === e.id, e.isDiasbleCopyAnswer = 66066 === e.id, e.isShowTermConfirm = _.includes(tkb.data.eventIdsHasTermConfirm, e.id), e.ticketTypeNameCus = 66066 === e.id, e.isShowChainsMokerTerm = _.includes(tkb.data.eventIdsHasTermConfirm3, e.id), e.isHideAllGroup = _.includes([66196], e.id), e.hasTermConditionStepQuestion = _.includes(tkb.data.eventIdsHasTermConditionStepQuestion, e.id), e.hasTermConditionAtStepSubmitTicket = _.includes(tkb.data.eventIdsHasTermConditionAtStepSubmitTicket, e.id), e.isUseNewBookingApi && (tkb.data.isNewApiEnabled = !0), l.event = e, l.event.currentShowing.displayTicketTypeGroups = _.filter(l.event.currentShowing.ticketTypeGroups, function(e) {
            return e.status === TICKET_TYPE_GROUP_STATUS.Show
        }), c(function() {
            l.$broadcast("eventLoaded")
        });
        for (var t = l.event.currentShowing.ticketTypes, n = 0; n < t.length; n++) {
            var i = t[n];
            i.description && (i.descriptionHtml = d.trustAsHtml(i.description.replace(/\n/g, "</br>")))
        }
        if (tkb.data.isWidget) {
            var o = new Date;
            if (new Date(l.event.currentShowing.endTime) < o && l.event.showings && l.event.showings.length)
                for (var r = 0, a = l.event.showings.length; r < a;) {
                    var s = l.event.showings[r];
                    if (o < new Date(s.endDate)) {
                        E.openLink("/ticket-booking/" + tkb.data.eventId + "/widget/v1?colorscheme=" + l.themeType + s.id);
                        break
                    }
                    r++
                }
        }
        l.event.form = e.form ? new tkb.model.Form(e.form) : null, I(), l.checkBookableStatus(l.event), l.resetReceiveMethod(), l.event && l.event.isShowAwardPopup && (75983 === l.event.id ? l.showAccessCodePopup(p.openHyominFmAccessCodeModel) : l.showAccessCodePopup(p.openAccessCodeModel))
    }, function() {}), l.hasSeatMap ? (console.log(tkb.data.seatmapUrl), a.getSeatmap(tkb.data.eventId, tkb.data.showingId, tkb.data.seatmapUrl).then(function(e) {
        l.seatMap = e, l.isOnlyCaptchaV2 = !0, l.seatMapDataService = new SeatMapDataService(l.seatMap), null != l.seatMap ? l.isSeatpickingEvent = !0 : l.isBinding.value = !1
    }, function() {})) : (l.seatMap = null, l.isBinding.value = !1), a.getCurrentOrderInfo(tkb.data.eventId, tkb.data.showingId).then(function(e) {
        var t = new tkb.model.Order(e);
        y(t).then(function() {
            l.order = t, l.removeEmptyOrderFromOrderDetails(), l.resetReceiveMethod(), l.calculateOrderDetail(), o()
        })
    }, function() {
        l.order = new tkb.model.Order, l.resetReceiveMethod(), l.showArianaPopup(), o()
    }), a.getPaymentMethods().then(function(e) {
        l.paymentMethods = e
    }), angular.element(document).ready(function() {
        window.snapper ? window.snapper.enable() : (window.snapper = new Snap({
            element: l.snapperContent,
            touchToDrag: !1
        }), snapper.on("close", function() {
            c(function() {
                l.isShowingRightBar && (l.isShowingRightBar = !1)
            })
        }))
    }), l.isMobile = !(l.isWidget || !(tkb.isMobile || window.innerWidth < 768)), angular.element(E).bind("resize", function() {
        var e = !(l.isWidget || !(tkb.isMobile || window.innerWidth < 768));
        c(function() {
            e != l.isMobile && (l.isMobile = e)
        })
    }), l.handleCacheMultipleTabs = function() {
        setTimeout(function() {
            var e, t;
            window.location && "-1" !== arrLocationHashCheck.indexOf(window.location.hash) && (e = window.localStorage.getItem(keyCache), t = window.sessionStorage.getItem("page_available" + keyCache), !e && "true" != t || ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document || -1 < navigator.userAgent.toLowerCase().indexOf("android") ? (window.localStorage.setItem(keyCache, "true"), window.sessionStorage.setItem(keyCache, "true")) : p.openSimpleModal({
                size: "sm",
                title: T.instant("T.LAYOUT.ERROR_MODAL.TITLE_PREVENT_MUL_TABS"),
                message: T.instant("T.LAYOUT.ERROR_MODAL.DESCRIPTION_PREVENT_MUL_TABS"),
                okButtonText: "OK",
                ok: function(e) {
                    e(), location.href = location.origin
                }
            }))
        }, 500)
    }, l.paymentMessagePopup = function() {
        var e, t, n, i;
        l.order.paymentInfo && (i = n = null, l.order.paymentInfo.cybersourceInfo && l.order.paymentInfo.cybersourceInfo.statusPayment && l.order.paymentInfo.cybersourceInfo.returnCode && l.order.paymentInfo.cybersourceInfo.returnMessage ? (e = (e = l.order.paymentInfo.cybersourceInfo.returnMessage).replace(/,/g, ", "), t = parseInt(l.order.paymentInfo.cybersourceInfo.returnCode), n = l.getPaymentErrorMessage(t, e), i = "T.STEP2.CYBERSOURCE.ERROR_TITLE") : l.order.paymentInfo.moMoInfo && l.order.paymentInfo.moMoInfo.statusDescription && (n = l.order.paymentInfo.moMoInfo.statusDescription, i = "T.STEP2.CYBERSOURCE.ERROR_TITLE"), n) && T(i).then(function(e) {
            p.openSimpleModal({
                size: "sm",
                title: e,
                message: n,
                okButtonText: "OK",
                ok: function(e) {
                    c(e, 0)
                }
            })
        })
    }, l.getPaymentErrorMessage = function(e, t) {
        switch (e) {
            case REASON_CODE_CYBERSOURCE.DMISSINGFIELD:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DMISSINGFIELD") + "\n" + l.getErrorFieldsName(t);
            case REASON_CODE_CYBERSOURCE.DINVALIDDATA:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DINVALIDDATA") + "\n" + l.getErrorFieldsName(t);
            case REASON_CODE_CYBERSOURCE.DAVSNO:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DAVSNO");
            case REASON_CODE_CYBERSOURCE.DCARDEXPIRED:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DCARDEXPIRED");
            case REASON_CODE_CYBERSOURCE.DCARDREFUSED_203:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DCARDREFUSED_203");
            case REASON_CODE_CYBERSOURCE.DCARDREFUSED_204:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DCARDREFUSED_204");
            case REASON_CODE_CYBERSOURCE.DCARDREFUSED_205:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DCARDREFUSED_205");
            case REASON_CODE_CYBERSOURCE.DCARDREFUSED_207:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DCARDREFUSED_207");
            case REASON_CODE_CYBERSOURCE.DCARDREFUSED_208:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DCARDREFUSED_208");
            case REASON_CODE_CYBERSOURCE.DCARDREFUSED_210:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DCARDREFUSED_210");
            case REASON_CODE_CYBERSOURCE.DCARDREFUSED_211:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DCARDREFUSED_211");
            case REASON_CODE_CYBERSOURCE.DCHECKREFUSED_221:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DCHECKREFUSED_221");
            case REASON_CODE_CYBERSOURCE.DCV:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DCV");
            case REASON_CODE_CYBERSOURCE.DINVALIDCARD_231:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DINVALIDCARD_231");
            case REASON_CODE_CYBERSOURCE.DINVALIDDATA_232:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DINVALIDDATA_232");
            case REASON_CODE_CYBERSOURCE.DINVALIDDATA_233:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DINVALIDDATA_233");
            case REASON_CODE_CYBERSOURCE.DINVALIDDATA_234:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DINVALIDDATA_234");
            case REASON_CODE_CYBERSOURCE.DINVALIDDATA_236:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DINVALIDDATA_236");
            case REASON_CODE_CYBERSOURCE.DINVALIDDATA_240:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DINVALIDDATA_240");
            case REASON_CODE_CYBERSOURCE.DAUTHENTICATE:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DAUTHENTICATE");
            case REASON_CODE_CYBERSOURCE.DAUTHENTICATIONFAILED:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DAUTHENTICATIONFAILED");
            case REASON_CODE_CYBERSOURCE.DREVIEW:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DREVIEW");
            case REASON_CODE_CYBERSOURCE.DREJECT:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.DREJECT");
            default:
                return T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.UNDEFINED")
        }
    }, l.getErrorFieldsName = function(e) {
        return e = (e = (e = (e = e.replace("bill_to_phone", T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.INVALID_FIELD.BILL_TO_PHONE"))).replace("card_number", T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.INVALID_FIELD.CARD_NUMBER"))).replace("card_expiry_date", T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.INVALID_FIELD.CARD_EXPIRY_DATE"))).replace("bill_to_address_postal_code", T.instant("T.STEP_FILL_CREDIT_CARD_INFO.ERROR_MESSAGE.INVALID_FIELD.BILL_TO_ADDRESS_POSTAL_CODE"))
    }, l.translateCountries = function() {
        var o = [];
        return COUNTRIES.forEach(function(e, t, n) {
            var i = T.instant("T.STEP2.COUNTRY_LIST." + e);
            o.push({
                name: i,
                value: e
            })
        }), o
    }, l.checkBookableStatus = function(e) {
        for (var t = e.currentShowing.ticketTypes.length, n = 0, i = 0, o = t - 1; 0 <= o; o--) {
            var r = e.currentShowing.ticketTypes[o];
            if (r.isAvailable) {
                l.bookableStatus = EVENT_BOOKABLE_STATUS.Bookable;
                break
            }
            r.isSoldOut ? n++ : r.isClosed && i++
        }
        n == t ? l.bookableStatus = EVENT_BOOKABLE_STATUS.SoldOutAll : i + n == t && (l.bookableStatus = EVENT_BOOKABLE_STATUS.ClosedAll)
    }, l.calculateDeliveryFee = function(e) {
        var t, n = 0;
        return e && l.order.paymentInfo.paymentType && (l.order.paymentInfo.paymentType == PAYMENT_TYPE.COD || l.event.hasPhysicalItem && (l.order.paymentInfo.paymentType == PAYMENT_TYPE.ATM || l.order.paymentInfo.paymentType == PAYMENT_TYPE.CreditCard || l.order.paymentInfo.paymentType == PAYMENT_TYPE.Omise || l.order.paymentInfo.paymentType == PAYMENT_TYPE.InternetBanking || l.order.paymentInfo.paymentType == PAYMENT_TYPE.Cybersource || l.order.paymentInfo.paymentType == PAYMENT_TYPE.Moca || l.order.paymentInfo.paymentType == PAYMENT_TYPE.Momo || l.order.paymentInfo.paymentType == PAYMENT_TYPE.TwoC2P)) && (n = e.fee, l.event.hasPhysicalItem) && (t = 1 == l.event.venue.cityId ? 2 : 1, e.fromOfficeId != t) && (n += DELIVERY_FEE_HAS_PHYSICAL_ITEM), n
    }, l.updateDeliveryFee = function() {
        var e, t;
        l.order.paymentInfo.deliveryInfo.districtId && l.deliveryDistricts && l.deliveryDistricts.length && (e = parseInt(l.order.paymentInfo.deliveryInfo.districtId), t = (t = _.find(l.deliveryDistricts, {
            id: e
        })) || _.find(l.$parent.deliveryDistricts, {
            id: e
        }), l.order.paymentInfo.deliveryInfo.fee = l.calculateDeliveryFee(t))
    }, l.recalculate = function() {
        var e, t, n;
        l.event.isUseNewCalcFormular ? (e = {
            id: 1,
            paymentType: l.order.paymentInfo.paymentType,
            receivingMethod: l.order.receiveMethod,
            event: {
                buyerPercentFee: l.event.buyerPercentFee,
                buyerFeePerTicket: l.event.buyerFeePerTicket,
                buyerVATForFeePerTicket: l.event.buyerVATForFeePerTicket,
                buyerVATForPercentFee: l.event.buyerVATForPercentFee,
                ticketPrintingFeePerTicket: l.event.ticketPrintingFeePerTicket,
                disableETicket: l.event.disableETicket,
                vatPercent: l.event.vatPercentPerTicket,
                whtPercent: l.event.withHoldingTaxPercent
            },
            orderDetails: l.order.orderDetails
        }, t = 0, (n = _.findLast(l.paymentMethods, function(e) {
            return e.id == l.order.paymentInfo.paymentType
        })) && (t = n.paymentFeePercent), a.calculateOrder(e, t).then(function(e) {
            l.order.serviceFee = e.outBuyerServiceFeeIncVAT, l.order.ticketPrintingFeeIncVAT = e.outTicketPrintingFeeIncVAT, l.order.deliveryCostIncVAT = e.outDeliveryCostIncVAT, l.order.paymentGatewayFeeIncVAT = e.outPaymentGatewayFeeIncVAT, l.order.finalAmount = e.outFinalAmount, l.order.vatTicket = e.outBuyerVATTicket, l.order.witholdingTaxAmount = Math.round(100 * e.outWitholdingTaxAmount) / 100
        })) : ((n = l.order.paymentInfo.deliveryInfo.fee) < 0 && (n = 0), l.pickupEntrancePrice = l.event.ticketPrintingFeePerTicket, l.order.ticketEntranceFee = 0, l.deliveryfeeTh = 0, l.order.receiveMethod != RECEIVE_METHOD.PhysicalEntrance && l.order.receiveMethod != RECEIVE_METHOD.Delivery || !l.order.receiveMethod || l.order.paymentInfo.paymentType == PAYMENT_TYPE.Free ? l.pickupEntrancePrice = 0 : (l.order.receiveMethod == RECEIVE_METHOD.Delivery && (l.deliveryfeeTh = 60), l.order.ticketEntranceFee = _.sumBy(l.order.orderDetails, "quantity") * l.pickupEntrancePrice, l.order.receiveMethod == RECEIVE_METHOD.PhysicalEntrance && (l.order.ticketEntranceFee = _.sumBy(l.order.orderDetails, "quantity") * l.pickupEntrancePrice)), l.order.serviceFee = l.order.ticketEntranceFee + l.order.buyerServiceFee, l.order.finalAmount = l.order.amount - l.order.orderDiscountAmount + n + l.order.buyerServiceFee + l.order.buyerPaymentFee + l.order.ticketEntranceFee + l.deliveryfeeTh, l.order.paymentInfo.deliveryInfo.fee = n, l.order.finalAmount < 0 && (l.order.finalAmount = 0))
    }, l.generateOrderDetailFromTicketpe = function() {
        var e = l.event.currentShowing.ticketTypes;
        angular.forEach(e, function(t) {
            t.selectedQuantity || (t.selectedQuantity = 0);
            var e = _.find(l.order.orderDetails, function(e) {
                return e.ticketTypeId == t.id
            });
            0 < t.selectedQuantity ? e ? e.quantity = t.selectedQuantity : l.createAnOrderDetail(t) : e && l.order.orderDetails.remove(e)
        })
    }, l.createAnOrderDetail = function(e) {
        e = {
            ticketTypeId: e.id,
            ticketType: e,
            quantity: e.selectedQuantity || 0,
            sections: [],
            unitPrice: e.currentPrice,
            discountPerTicket: e.discountPerTicket || 0,
            displayOrder: e.displayOrder
        };
        l.order.orderDetails.push(e)
    }, l.removeEmptyOrderFromOrderDetails = function() {
        var e = l.order.orderDetails;
        _.remove(e, function(t) {
            return 0 === t.quantity && !(l.event.currentShowing.ticketTypes.find(function(e) {
                return e.id === t.ticketTypeId
            }).selectedQuantity = 0)
        })
    }, l.calculateOrderDetail = function() {
        l.removeEmptyOrderFromOrderDetails();
        var e = l.order.orderDetails,
            t = _.reduce(e, function(e, t) {
                return e + (t.discountPerTicket > t.unitPrice ? 0 : t.unitPrice - t.discountPerTicket) * t.quantity
            }, 0),
            n = _.reduce(e, function(e, t) {
                return e + t.quantity
            }, 0),
            n = l.event.buyerPercentFee / 100 * t + n * l.event.buyerFeePerTicket,
            n = (l.order.buyerServiceFee = Math.round(100 * n) / 100, _.findLast(l.paymentMethods, function(e) {
                return e.id == l.order.paymentInfo.paymentType
            })),
            n = (n && (n = (l.order.amount + l.order.buyerServiceFee) * n.paymentFeePercent / 100, l.order.buyerPaymentFee = Math.round(100 * n) / 100), l.order.amount = t, l.updateDeliveryFee(), l.recalculate(), l.order.paymentInfo.paymentType);
        0 == l.order.amount ? !e.length || 1 == l.event.disableETicket ? PAYMENT_TYPE.NotSelected : PAYMENT_TYPE.Free : n == PAYMENT_TYPE.Free && PAYMENT_TYPE.NotSelected
    }, l.decreaseTicketQuantity = function(e) {
        e.selectedQuantity = e.selectedQuantity || 0, e.selectedQuantity > e.minTixPerOrder ? e.selectedQuantity-- : e.selectedQuantity = 0, r(e), l.updateOrderDetails()
    }, l.increaseTicketQuantity = function(e) {
        e.selectedQuantity = e.selectedQuantity || 0, e.selectedQuantity < e.maxTixPerOrder && (e.selectedQuantity < e.minTixPerOrder ? e.selectedQuantity = e.minTixPerOrder : e.selectedQuantity++), r(e), l.updateOrderDetails()
    }, l.updateOrderDetails = function() {
        l.generateOrderDetailFromTicketpe(), l.calculateOrderDetail()
    }, l.reMapOrderDetails = function() {
        var n, t = l.order.orderDetails,
            i = l.order.discount;
        i && i.ticketTypes && i.ticketTypes.length && (l.event.currentShowing.ticketTypes = i.ticketTypes, l.event.currentShowing.ticketTypes.forEach(function(t) {
            var e = i.ticketTypes.find(function(e) {
                return e.id === t.id
            });
            f(t, e)
        })), n = l.event.currentShowing.ticketTypes, angular.forEach(t, function(e) {
            var t = _.find(n, {
                id: e.ticketTypeId
            });
            t.selectedQuantity = e.quantity, e.ticketType = t, e.displayOrder = t.displayOrder, e.discountPerTicket = t.discountPerTicket
        }), angular.forEach(n, function(e) {
            e.selectedQuantity = e.selectedQuantity || 0
        }), l.event.currentShowing.hasSeatMap && (l.savedOrderDetails && angular.forEach(l.savedOrderDetails, function(n) {
            var e = _.find(t, {
                ticketTypeId: n.ticketTypeId
            });
            e && angular.forEach(e.sections, function(e) {
                var t = _.find(n.sections, {
                    sectionId: e.sectionId
                });
                t && (e.seats = t.seats)
            })
        }), angular.forEach(t, function(e) {
            var t = 0;
            angular.forEach(e.sections, function(e) {
                e.isReserveSeating ? t += e.seats ? e.seats.length : 0 : t += e.quantity
            }), e.quantity = t
        }))
    };

    function s(e) {
        return !!e && !(e.length < 6 || 15 < e.length) && e.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g)
    }

    function u(e) {
        return !(!e || 250 < e.length) && e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    }
    var I = function() {
            l.event && l.order && (l.bookingStep ? (l.offices = null, l.order.officeId = 1, l.reMapOrderDetails(), l.initialized = !0, !l.event.paymentMethods.officePickup && l.user && 1 == l.user.id && (l.event.paymentMethods.officePickup = !0), l.bookingStep == l.BOOKING_STEP.thankYou || l.order && l.order.orderDetails && l.order.orderDetails.length || l.goToSelectTicketsStep()) : c(I, 50))
        },
        R = (l.toggleMenu = function(e) {
            "right" != snapper.state().state ? (snapper.open("right"), l.isShowingRightBar = !0) : (snapper.close(), l.isShowingRightBar = !1), e.preventDefault()
        }, l.stopPropagation = function(e) {
            e.stopPropagation()
        }, l.openLoginPopup = function() {
            setTimeout(function() {
                window.location = i + "/sign-in?lang=en&ref=" + encodeURI(window.location.href)
            }, 300)
        }, l.openLoginv2Popup = function() {
            setTimeout(function() {
                window.location = i + "/sign-in?lang=en&ref=" + encodeURI(window.location.href)
            }, 300)
        }, l.openNewPasswordSentPopup = function() {
            l.loginModal = p.openNewPasswordSentModal(l, null)
        }, l.openResetPasswordPopup = function() {
            l.openResetPasswordModal = p.openResetPasswordModal(l, {
                success: function() {
                    l.openNewPasswordSentPopup()
                },
                fail: function() {
                    l.openNewPasswordSentPopup()
                }
            })
        }, l.openSignUpPopup = function() {
            l.openSignUpModal = p.openSignupModal(l, {
                fail: function(e, t, n) {
                    var i = $('[data-err="booking"]');
                    showDialogAlert(i, n, null)
                }
            })
        }, l.openSpecialPopup = function() {
            l.specialModal = p.openSpecialModal(l, {
                success: function() {}
            })
        }, l.logout = function() {
            t.logout().then(function() {
                l.omiseCardInfo = ""
            }).finally(function() {
                l.user = null, tkb.cookie.removeItem("k-" + tkb.data.showingId), location.assign("/")
            })
        }, l.clearValidationErrors = function() {
            l.validationError = {}
        }, l.goToSelectTicketsStep = function() {
            e.path("/step-select-tickets")
        }, l.changeLanguage = function(e) {
            T.use(e), tkb.cookie.setItem("_culture", e, 31536e3, "/"), l.user && t.updateCulture(e).then(function() {}).finally(function() {
                T.use(e), l.$broadcast("languageChanged", {
                    lang: e
                })
            })
        }, l.$watch(function() {
            return T.use()
        }, function(e) {
            l.currentLangKey = e
        }), l.getBankIconCssClass = function(e) {
            return (e = e && _.find(l.BANK_LIST, {
                bankCode: e
            })) ? e.cssClass : null
        }, l.getFullDeliveryAddress = function() {
            var e, t, n, i, o = l.order.paymentInfo.deliveryInfo;
            return l.deliveryCities && l.deliveryDistricts ? (e = o.address, t = _.find(l.deliveryDistricts, {
                id: o.districtId
            }), n = _.find(l.deliveryCities, {
                id: o.cityId
            }), i = "", "vi" == l.currentLangKey ? (n && (i = n.type + " " + n.name), t && (i = 0 < i.length ? t.type + " " + t.name + ", " + i : t.type + " " + t.name)) : (n && (i = n.name), t && (n = tkb.isNumeric(t.name) ? t.type + " " + t.name : t.name, i = 0 < i.length ? n + ", " + i : n)), e && e.length ? 0 < i.length ? e + ", " + i : e : i) : o.fullAddress
        }, l.checkExistPaymentType = function(e) {
            var t = _.some(l.paymentMethods, {
                id: e
            });
            return 4 == e && (t = !1), t = 5 == e && tkb.data.eventId % 2 == 0 && _.some(l.paymentMethods, {
                id: 11
            }) ? !1 : t
        }, l.checkPayooDisable = function() {
            return !!l.isSeatpickingEvent
        }, l.checkReceiveMethod = function(e) {
            l.order.receiveMethod = e, l.recalculate()
        }, angular.element(E)),
        S = (l.$watch(function() {
            return E.innerWidth
        }, function(e) {
            l.browserWidth = e
        }, !0), R.bind("resize", function() {
            l.$apply()
        }), l.validatePhoneNumber = function() {
            var t = l.order.buyerInfo.phoneNumber;
            return l.$watch("$scope.order.buyerInfo.phoneNumber", function(e) {
                t = l.order.buyerInfo.phoneNumber
            }), l.invalidPhoneNumber = !s(t), !l.invalidPhoneNumber
        }, l.validateBillingInfoPhone = function() {
            var t = l.order.paymentInfo.cybersourceInfo.billingInfo.phone;
            return l.$watch("$scope.order.paymentInfo.cybersourceInfo.billingInfo.phone", function(e) {
                t = l.order.paymentInfo.cybersourceInfo.billingInfo.phone
            }), l.invalidPhoneNumber = !s(t), !l.invalidPhoneNumber
        }, l.updateStatusPhone = function() {
            l.invalidPhoneNumber = !1
        }, l.validateUserEmail = function() {
            var t = l.order.buyerInfo.email;
            return l.$watch("$scope.order.buyerInfo.email", function(e) {
                t = l.order.buyerInfo.email
            }), l.invalidEmail = !u(t), !l.invalidEmail
        }, l.validateBillingInfoEmail = function() {
            var t = l.order.paymentInfo.cybersourceInfo.billingInfo.email;
            return l.$watch("$scope.order.paymentInfo.cybersourceInfo.billingInfo.email", function(e) {
                t = l.order.paymentInfo.cybersourceInfo.billingInfo.email
            }), l.invalidEmail = !u(t), !l.invalidEmail
        }, l.updateStastusEmail = function() {
            l.invalidEmail = !1
        }, l.doApplyDiscountCode = function(i) {
            l.clearValidationErrors(), l.discountCodeSubmitting = !0, l.global.discountMsg = "", l.discountCodeSumitedSuccess = !1;

            function o(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(e[n].sectionName + "-" + e[n].rowName + "-" + e[n].seatName);
                return t.join(", ")
            }

            function r(e, t) {
                for (var n = [], i = 0; i < e.length; i++)
                    for (var o = e[i], r = 0; r < o.rows.length; r++)
                        for (var a = o.rows[r], s = 0; s < a.seats.length; s++) {
                            var c = a.seats[s]; - 1 != t.indexOf(c.id) && n.push({
                                sectionName: o.name,
                                rowName: a.name,
                                seatId: c.id,
                                seatName: c.name
                            })
                        }
                return n
            }
            var n = l.order,
                t = {
                    discountCode: n.discount.discountCode,
                    isWidget: tkb.data.isWidget,
                    orderDetailArray: [],
                    seatIdsValidArr: []
                };
            n.orderDetails.forEach(function(e) {
                t.orderDetailArray.push({
                    ticketTypeId: e.ticketTypeId,
                    quantity: e.quantity,
                    sections: e.sections
                })
            });
            a.applyDiscountCode(l.event.id, tkb.data.showingId, t).then(function(e) {
                var t;
                n.id = e.id, n.discount.isAutomatedDiscount = e.discount.isAutomatedDiscount, n.discount.ticketTypes = e.ticketTypes, S(e.orderDetails, n.orderDetails), n.orderDiscountAmount = e.orderDiscountAmount, l.reMapOrderDetails(), l.$parent && (l.$parent.remainingBookingTime = e.remainingBookingTime || n.remainingBookingTime), l.discountCodeSumitedSuccess = !0, l.global.discountCodeDisableInput = !0, l.global.discountCodeError = !1, l.updateOrderDetails(), e.seatIdsValid && 0 < e.seatIdsValid.length && (l.global.discountCodeForSeatError = !1, l.seatIdsValidArr = e.seatIdsValid, setIdsItem(), e = l.seatMap.sections, e = r(e, l.seatIdsValidArr), t = o(e), T("T.STEP_SELECT_TICKETS.ERROR.INVALID_DISCOUNT_CODE_FOR_SEAT").then(function(e) {
                    e = e.replace("validDiscountSeatsInfo", t), l.global.discountMsg = e
                }))
            }, function(t) {
                var n, e;
                t && (t.response && t.response.errorType == SERVICE_ERROR_TYPE.InvalidSeat && l.showErrorSeat2(t), t.response && t.response.errorType == SERVICE_ERROR_TYPE.CustomValidation ? (l.global.discountMsg = t.response.message, l.discountCodeSumitedSuccess = !1, l.global.discountCodeDisableInput = !1, l.global.discountCodeError = !0) : (t.response.data && t.response.data.seatIdsValid && 0 < t.response.data.seatIdsValid.length && (l.global.discountCodeForSeatError = !0, l.seatIdsValidArr = t.response.data.seatIdsValid, setIdsItem(), e = l.seatMap.sections, e = r(e, l.seatIdsValidArr), n = o(e)), l.global.discountCodeError = !0, e = "T.STEP_SELECT_TICKETS.ERROR.INVALID_DISCOUNT_CODE", t.response.errorType == SERVICE_ERROR_TYPE.OrderConditionCannotApplyThisDiscount ? e = "T.LAYOUT.ERROR.ORDER_CONDITION_CANNOT_APPLY_DISCOUNT" : t.response.errorType == SERVICE_ERROR_TYPE.InvalidDiscountCode ? e = "T.STEP_SELECT_TICKETS.ERROR.INVALID_DISCOUNT_CODE" : t.response.errorType == SERVICE_ERROR_TYPE.ExpiredDiscountCode ? e = "T.STEP_SELECT_TICKETS.ERROR.EXPIRED_DISCOUNT_CODE" : t.response.errorType == SERVICE_ERROR_TYPE.InvalidQuantityDiscountCode ? e = "T.STEP_SELECT_TICKETS.ERROR.INVALID_QUANTITY_DISCOUNT_CODE" : t.response.errorType == SERVICE_ERROR_TYPE.InvalidActiveDiscountCode ? e = "T.STEP_SELECT_TICKETS.ERROR.INVALID_ACTIVE_DISCOUNT_CODE" : t.response.errorType == SERVICE_ERROR_TYPE.InvalidTicketTypeQuantity ? e = "T.STEP_SELECT_TICKETS.ERROR.INVALID_TICKET_TYPE_QUANTITY" : t.response.errorType == SERVICE_ERROR_TYPE.InvalidDiscountCodeForSeat && (e = "T.STEP_SELECT_TICKETS.ERROR.INVALID_DISCOUNT_CODE_FOR_SEAT"), T(e).then(function(e) {
                    n && t.response.errorType == SERVICE_ERROR_TYPE.InvalidDiscountCodeForSeat && (e = e.replace("validDiscountSeatsInfo", n)), l.global.discountMsg = e
                }), l.discountCodeSumitedSuccess = !1, l.global.discountCodeDisableInput = !1)), i && i.errorCallback && i.errorCallback()
            }).finally(function() {
                l.discountCodeSubmitting = !1, l.global.submitting = !1, i && i.doneCallback && i.doneCallback()
            })
        }, l.showBookedSeat2 = function(e) {
            if (e && 0 < e.length)
                for (var t = e.length - 1; 0 <= t; t--) {
                    var n = e[t],
                        i = _.find(l.seatMap.seats, {
                            id: n
                        }),
                        i = (i && (i.status = 3), d3.select("#seat-" + n));
                    i && !i.classed("booked") && i.style("fill", "#F44336").style("stroke", "#D32F2F").classed("booked", !0)
                }
        }, l.removeOverlapSeats2 = function(e) {
            var t = e.data.bookedSeatIds,
                n = e.data.orderDetails,
                i = e.data.invalidSeatBookeds,
                o = l.order.orderDetails,
                r = l.event.currentShowing.ticketTypes;
            if (l.showBookedSeat2(t), i && (a = i.length) && (e = T.instant("T.SERVICE_ERROR.SeatsWasBooked"), p.openSimpleModal({
                    size: "sm",
                    title: "Opps sorry!",
                    message: e,
                    okButtonText: T.instant("T.SERVICE_ERROR.SeatsWasBookedButton"),
                    ok: function(e) {
                        e(), E.location.reload()
                    }
                })), n) {
                for (var a, s = (a = n.length) - 1; 0 <= s; s--) {
                    var c = n[s],
                        d = _.find(r, {
                            id: c.ticketTypeId
                        });
                    c.quantity -= i.length, c.quantity < 0 && (c.quantity = 0), d && (d.selectedQuantity = c.quantity)
                }
                l.updateOrderDetails();
                for (s = a - 1; 0 <= s; s--) {
                    c = n[s];
                    var u = _.find(o, {
                        ticketTypeId: c.ticketTypeId
                    });
                    u && (u.sections = c.sections)
                }
            }
        }, l.showErrorSeat2 = function(e) {
            var t, e = e.response;
            l.isSeatpickingEvent && e.errorType && (e.errorType == SERVICE_ERROR_TYPE.InvalidSeat ? l.removeOverlapSeats2(e) : e.errorType == SERVICE_ERROR_TYPE.EmptySeat && (l.showBookedSeat2(e.data.bookedSeatIds), t = [], e = e.data.detectEmptyRows, angular.forEach(e, function(e) {
                t.push(e.rowName)
            }), T(["T.STEP_SELECT_TICKETS.ERROR.EMPTY_SEAT_ERROR", "T.LAYOUT.ERROR_MODAL.CONTINUE_BOOKING", "T.LAYOUT.ERROR_MODAL.ERROR_TITLE"], {
                rowName: t.join(", ")
            }).then(function(e) {
                p.openSimpleModal({
                    size: "sm",
                    title: e["T.LAYOUT.ERROR_MODAL.ERROR_TITLE"],
                    message: e["T.STEP_SELECT_TICKETS.ERROR.EMPTY_SEAT_ERROR"],
                    okButtonText: e["T.LAYOUT.ERROR_MODAL.CONTINUE_BOOKING"],
                    ok: function(e) {
                        e()
                    }
                })
            })))
        }, l.doCancelDiscountCode = function() {
            l.clearValidationErrors(), l.CancelDiscountCodeSubmitting = !0, l.CancelDiscountCodeSumitedSuccess = !1;
            var t = [];
            l.order.orderDetails.forEach(function(e) {
                t.push({
                    ticketTypeId: e.ticketTypeId,
                    quantity: e.quantity,
                    sections: e.sections
                })
            }), l.$parent.savedOrderDetails = t, a.cancelDiscountCode(l.event.id, tkb.data.showingId, l.order.discount.discountCode, t).then(function(e) {
                l.order.discount.ticketTypes = e.ticketTypes, l.order.orderDetails = e.orderDetails, l.order.orderDiscountAmount = e.orderDiscountAmount, l.reMapOrderDetails(), l.$parent.remainingBookingTime = e.remainingBookingTime || l.order.remainingBookingTime, l.CancelDiscountCodeSumitedSuccess = !0, l.global.discountCodeDisableInput = !1, l.updateOrderDetails(), l.order.discount.discountCode = null, l.seatIdsValidArr = null, l.order.discount.ticketTypes = []
            }, function(e) {
                l.CancelDiscountCodeSumitedSuccess = !1
            }).finally(function() {
                l.CancelDiscountCodeSubmitting = !1
            })
        }, function(e, t) {
            t.discountPerTicket = e.discountPerTicket, t.id = e.id, t.quantity = e.quantity, t.sections = e.sections, t.ticketTypeId = e.ticketTypeId, t.ticketTypeTitle = e.ticketTypeTitle, t.unitPrice = e.unitPrice
        }),
        f = function(e, t) {
            t.color = e.color, t.currentPrice = e.currentPrice, t.description = e.description, t.discountPerTicket = e.discountPerTicket, t.displayOrder = e.displayOrder, t.id = e.id, t.imageUrl = e.imageUrl, t.isAvailable = e.isAvailable, t.isClosed = e.isClosed, t.isHiddenFromListing = e.isHiddenFromListing, t.isSoldOut = e.isSoldOut, t.maxTixPerOrder = e.maxTixPerOrder, t.minTixPerOrder = e.minTixPerOrder, t.originalPrice = e.originalPrice, t.requiredQuestionIds = e.requiredQuestionIds, t.saleEndDate = e.saleEndDate, t.saleStartDate = e.saleStartDate, t.status = e.status, t.ticketTypeGroupId = e.ticketTypeGroupId, t.applyingPrice = e.applyingPrice, t.title = e.title
        },
        m = (angular.element(document.body).bind("click", function(e) {
            if (void 0 !== window._hideTooltipClicker && window._hideTooltipClicker) window._hideTooltipClicker = !1;
            else {
                var t = document.querySelectorAll(".tooltip"),
                    n = e.target;
                if (t.length)
                    for (var i = 0; i < t.length; i++) {
                        var o = t[i],
                            r = o.previousSibling;
                        o.contains(n) || r.contains(n) || !o.offsetHeight || (e.stopPropagation(), window._hideTooltipClicker = !0, r.click())
                    }
            }
        }), function(e) {
            for (var t = 0; t < e.orderDetails.length; t++) {
                for (var n = e.orderDetails[t], i = 0, o = 0; o < n.sections.length; o++) {
                    var r = n.sections[o],
                        a = _.filter(l.seatMap.sections, {
                            id: r.sectionId
                        });
                    if (0 < a.length)
                        if ((u = a[0]).isReserveSeating) {
                            if (null != r.seats)
                                for (var s = 0; s < r.seats.length; s++) {
                                    var c = r.seats[s],
                                        d = l.seatMapDataService.findSeatBySectionAndSeat(r.sectionId, c.id);
                                    d.status != SEAT_STATUS.Disabled && d.status != SEAT_STATUS.Booked || (i += 1, _.remove(r.seats, {
                                        id: c.id
                                    }), s -= 1)
                                }
                        } else u.status != SEAT_SECTION_STATUS.OPEN && (i += r.quantity, _.remove(n.sections, {
                            sectionId: r.sectionId
                        }), o -= 1)
                }
                if (n.quantity = n.quantity - i, n.sections)
                    for (o = 0; o < n.sections.length; o++) {
                        var u, r = n.sections[o];
                        0 < (a = _.filter(l.seatMap.sections, {
                            id: r.sectionId
                        })).length && ((u = a[0]).remainReserve = u.remainReserve + r.quantity)
                    }
            }
        }),
        D = function(e, t) {
            l.event && (l.event.currentShowing.hasSeatMap || t && t(), l.seatMap) ? (m(e), t && t()) : c(function() {
                D(e, t)
            }, 50)
        },
        y = function(e) {
            var t = n.defer();
            return D(e, function() {
                t.resolve()
            }), t.promise
        }
};
ticketBookingController.$inject = ["$scope", "$location", "$window", "$timeout", "$translate", "$q", "$sce", "ticketBookingService", "modalService", "accountService", "urlWebAuth"];
var selectTicketsStepController = function(f, p, m, e, g, h, T, v, y) {
    f.handleCacheMultipleTabs(), f.global.discountCodeDisableInput = !0, f.dataSiteKeyCaptcha = "6LeckpMgAAAAAB1tUcTYxFwwO30FDO8Ssb_VS3-K", f.dataSiteKeyCaptchaV3 = "", -1 < window.location.host.indexOf("ticketbox.vn") ? (f.dataSiteKeyCaptcha = "6LcTsM4gAAAAAFeIkE9FM7fV0vglQo3Qk4NpR6hj", f.dataSiteKeyCaptchaV3 = "6LcL1yAiAAAAADb6lyjzIXG4B1sUSvPJyXStAwjK") : -1 < window.location.host.indexOf("ticketbox.dev") && (f.dataSiteKeyCaptcha = "6Lc-KJMgAAAAAGkNxI-f_G1_6yUuc03vf_mheqBD", f.dataSiteKeyCaptchaV3 = "6Ld-E30iAAAAAJytxHTaXa3rFd_haQ1fq1A5Z2WB");

    function t() {
        f.order && f.event ? (f.discountCodeSumitedSuccess = f.showDiscountCodeBox = f.global.discountCodeDisableInput = !!f.order.discount.ticketTypes.length, !f.event.hasTermCondition || f.event.hasTermConditionStepQuestion || f.event.hasTermConditionAtStepSubmitTicket || m.getEventTermCondition(tkb.data.eventId).then(function(e) {
            void 0 === e && null == e || (f.eventHasTermConditionContent = {
                title: e.title,
                content: T.trustAsHtml(e.content)
            }), f.showTermConditionPopup()
        }, function() {})) : e(t, 200)
    }
    var o = document.createElement("script");
    o.id = "script-captcha-v3", o.type = "text/javascript", o.src = "https://www.google.com/recaptcha/api.js?render=" + f.dataSiteKeyCaptchaV3 + "&hl=vi", document.head.appendChild(o), f.global.submitting = !1, f.$watch("isCaptchaV2", function() {
        setTimeout(function() {
            var e;
            f.isCaptchaV2 ? (document.getElementById("script-captcha-v3") && document.getElementById("script-captcha-v3").remove(), (e = document.createElement("script")).id = "script-captcha-v2", e.type = "text/javascript", e.src = "https://www.google.com/recaptcha/api.js?hl=vi", document.head.appendChild(e), grecaptcha.ready(function() {
                grecaptcha.render(document.getElementById("captcha-robot"), {
                    sitekey: f.dataSiteKeyCaptcha
                })
            })) : grecaptcha.ready(function() {
                grecaptcha.execute(f.dataSiteKeyCaptchaV3, {
                    action: "booking"
                }).then(function(e) {
                    window.tokenV3 = e
                })
            })
        }, 200)
    }), "addEventListener" in document && document.addEventListener("DOMContentLoaded", function() {
        FastClick.attach(document.body)
    }, !1), t(), f.showTermConditionPopup = function() {
        1 == f.event.hasTermCondition && g.openTermConditionModel(f, {
            termConditionCheckbox: !1,
            ok: function(e, t) {
                1 == t.termConditionCheckbox && e.close()
            },
            cancel: function(e) {
                e()
            }
        })
    }, f.$parent.bookingStep = BOOKING_STEP.selectTickets, f.htmlTooltip = function(e, t) {
        return '<div class="moreinfo-tooltip padding-10"><div class="w-100 cover"><img src="' + e + '" /></div><div class="w-100 moreinfo-content">' + (t = t || "") + "</div></div>"
    };

    function E() {
        return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
    }

    function k() {
        return -1 < navigator.userAgent.toLowerCase().indexOf("android")
    }

    function R() {
        return -1 != (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) ? "Opera" : -1 != navigator.userAgent.indexOf("Chrome") ? "Chrome" : -1 != navigator.userAgent.indexOf("Safari") ? "Safari" : -1 != navigator.userAgent.indexOf("Firefox") ? "Firefox" : -1 != navigator.userAgent.indexOf("MSIE") || 1 == !!document.documentMode ? "IE" : -1 < (e = navigator.userAgent || navigator.vendor || window.opera).indexOf("FBAN") || -1 < e.indexOf("FBAV") ? "Facebook" : -1 < (e = navigator.userAgent || navigator.vendor || window.opera).indexOf("Zalo") || -1 < e.indexOf("zalo") || -1 < e.indexOf("ZALO") ? "Zalo" : "Unknown";
        var e
    }
    f.submitTicketInfo = function() {
        var e, t;
        if (null === f.user) !1 === function() {
            var e = !1;
            try {
                webkit.messageHandlers.bookingView.postMessage("login"), e = !0
            } catch (e) {}
            try {
                AndroidFunction.bookingView("login"), e = !0
            } catch (e) {}
            return e
        }() && setTimeout(function() {
            window.location = y + "/sign-in?lang=en&ref=" + encodeURI(window.location.href)
        }, 300);
        else if (f.global.submitting) f.global.discountCodeError && (f.global.submitting = !1);
        else if (f.submitStep1Clicked = !0, f.order.discount.discountCode && !f.global.discountCodeDisableInput) f.global.submitting = !0, f.doApplyDiscountCode({
            doneCallback: function() {
                f.submitStep1Clicked && (f.global.discountCodeError && (f.global.submitting = !0), f.submitTicketInfo())
            }
        });
        else if (S.validateTicketInfo())
            if (!S.validateSeatmapRule() && isEnableSeatMapRule) o = h.instant("T.LAYOUT.ERROR_MODAL.ERROR_TITLE_OPPS"), e = h.instant("T.SERVICE_ERROR.OneEmptySeatButton"), t = h.instant("T.SERVICE_ERROR.OneEmptySeat"), g.openSimpleModal({
                size: "sm",
                title: o,
                message: t,
                okButtonText: e,
                ok: function(e) {
                    e()
                }
            });
            else if (f.isCaptchaV2 && (f.isNotCaptcha = !1, !document.getElementsByName("g-recaptcha-response")[0].value)) f.isNotCaptcha = !0, document.getElementsByClassName("form-captcha")[0].scrollIntoView({
            behavior: "smooth"
        });
        else {
            f.clearValidationErrors(), f.removeEmptyOrderFromOrderDetails();
            var o, n = f.order.orderDetails;
            if (f.seatIdsValidArr || (o = window.localStorage ? localStorage.getItem("seatIdsValidArr") : null) && (f.seatIdsValidArr = o.split(",").map(Number)), f.seatIdsValidArr && f.order.discount.discountCode)
                for (var i = 0; i < n.length; i++)
                    for (var r = n[i].sections, a = 0; a < r.length; a++)
                        for (var s = 0; s < r[a].seats.length; s++) {
                            var d = r[a].seats[s];
                            if (-1 == f.seatIdsValidArr.indexOf(d.id)) return f.global.submitting = !1, void f.applyDiscountCode()
                        }
            for (var c = 0, l = n.length; c < l; c++) {
                r = n[c].sections;
                _.remove(r, function(e) {
                    return 0 == e.quantity
                })
            }
            "undefined" != typeof isTKBApp && 0;
            var u = {
                orderDetails: [],
                discountCode: angular.copy(f.discountCode),
                isWidget: tkb.data.isWidget,
                MobileOS: E() && "Unknown" == R() ? "ios" : k() && "Unknown" == R() ? "android" : (E() || k()) && "Unknown" !== R() ? "mweb" : null,
                capcha: f.isCaptchaV2 ? document.getElementsByName("g-recaptcha-response")[0].value : window.tokenV3,
                securityToken: window.securityToken
            };
            n.forEach(function(e) {
                u.orderDetails.push({
                    ticketTypeId: e.ticketTypeId,
                    quantity: e.quantity,
                    sections: e.sections
                })
            }), f.global.submitting = !0, tkb.tracking.trackCustom({
                eventCategory: "Ticket Booking",
                eventAction: "submit step select tickets"
            }), m.submitTicketInfo(f.event.id, tkb.data.showingId, u).then(function(e) {
                !f.isCaptchaV2 && e.googleCaptchaResult && "true" == e.googleCaptchaResult.success && e.googleCaptchaResult.score <= .4 && !E() && !k() ? (f.isCaptchaV2 = !0, f.isNotCaptcha = !0, document.getElementsByClassName("form-captcha")[0].scrollIntoView({
                    behavior: "smooth"
                }), f.global.submitting = !1) : f.isCaptchaV2 || "false" != e.googleCaptchaResult.success ? (f.order.orderDetails = e.orderDetails, f.order.paymentType = 11 !== e.paymentType ? e.paymentType : PAYMENT_TYPE.Momo, f.order.paymentInfo.paymentType = 11 !== e.paymentType ? e.paymentType : PAYMENT_TYPE.Momo, !f.order.paymentInfo.deliveryInfo.address && e.deliveryAddress && (f.order.paymentInfo.deliveryInfo.address = e.deliveryAddress.address, f.order.paymentInfo.deliveryInfo.cityId = e.deliveryAddress.cityId, f.order.paymentInfo.deliveryInfo.districtId = e.deliveryAddress.districtId, f.order.paymentInfo.deliveryInfo.wardId = e.deliveryAddress.wardId), e.user && (f.order.user = e.user), f.reMapOrderDetails(), !f.order.buyerInfo.hasData() && e.buyerInfo && (f.order.buyerInfo = new tkb.model.BuyerInfo(e.buyerInfo)), f.order.paymentInfo.officePickupInfo.deadline = e.officePickupDeadline, f.order.paymentInfo.payooInfo.expireDate = e.expirePayooOrder, f.order.paymentInfo.one23Info.expireDate = e.expireOne23Order, f.order.paymentInfo.bankTransferInfo.expireDate = e.expireBankTransferOrder, f.order.id = e.id, f.order.canByPassLimitAmount = e.canByPassLimitAmount, f.order.limitAmount = e.limitAmount, f.order.remainingBookingTime = e.remainingBookingTime, f.$parent.remainingBookingTime = f.order.remainingBookingTime || 0, f.order.commonFormAnswerSheet = e.commonFormAnswerSheet ? new tkb.model.FormAnswerSheet(e.commonFormAnswerSheet) : null, f.order.formAnswerSheets = _.map(e.formAnswerSheets, function(e) {
                    return new tkb.model.FormAnswerSheet(e)
                }), f.event.hasTermCondition && !f.event.hasTermConditionStepQuestion && f.event.hasTermConditionAtStepSubmitTicket ? m.getEventTermCondition(tkb.data.eventId).then(function(o) {
                    void 0 === o && null == o || (f.eventHasTermConditionContent = {
                        title: o.title,
                        content: T.trustAsHtml(o.content)
                    }), g.openTermConditionModel(f, {
                        termConditionCheckbox: !1,
                        ok: function(e, t) {
                            1 == t.termConditionCheckbox && (e.close(), f.event.form && f.event.form.hasForm() ? p.path("/step-question-form") : null != o.redirectUrl && null != typeof o.redirectUrl && "" != o.redirectUrl ? window.location.href = o.redirectUrl : p.path("/step2"))
                        },
                        cancel: function(e) {
                            e()
                        }
                    })
                }, function() {}) : f.event.form && f.event.form.hasForm() ? p.path("/step-question-form") : null != e.redirectUrl && null != typeof e.redirectUrl && "" != e.redirectUrl ? window.location.href = e.redirectUrl : p.path("/step2"), f.execEmaticProducts("cart"), f.execEmaticProducts("checkout"), f.pushDataToGTM()) : g.openSimpleModal({
                    size: "sm",
                    title: h.instant("T.LAYOUT.ERROR_MODAL.ERROR_TITLE_OPPS"),
                    message: h.instant("T.LAYOUT.ERROR_MODAL.ERROR_GENERAL_MESSAGE"),
                    okButtonText: h.instant("T.LAYOUT.REFRESH"),
                    ok: function() {
                        location.reload()
                    }
                })
            }, function(e) {
                f.showErrorSeat(e), f.global.submitting = !1, e.response && e.response.errorType == SERVICE_ERROR_TYPE.InvalidOrder && localStorage && localStorage.removeItem("order-" + tkb.data.showingId)
            }).finally(function() {
                grecaptcha.reset()
            })
        }
    }, f.applyDiscountCode = function() {
        f.showDiscountCodeBox && !f.global.discountCodeDisableInput && f.doApplyDiscountCode()
    }, f.pushDataToGTM = function() {
        var e = f.order.orderDetails.map(function(e) {
            return {
                name: f.event.title,
                id: f.event.id,
                price: e.unitPrice,
                brand: f.event.organizerName,
                category: f.event.categoryNameEn,
                variant: e.ticketType.title + "-" + e.ticketType.id,
                quantity: e.quantity
            }
        });
        window.dataLayer && dataLayer.push({
            event: "addToCart",
            ecommerce: {
                currencyCode: "VND",
                add: {
                    products: e
                }
            }
        })
    }, f.showErrorSeat = function(e) {
        var t, e = e.response;
        f.isSeatpickingEvent && e.errorType && (e.errorType == SERVICE_ERROR_TYPE.InvalidSeat ? f.removeOverlapSeats(e) : e.errorType == SERVICE_ERROR_TYPE.EmptySeat && (f.showBookedSeat(e.data.bookedSeatIds), t = [], e = e.data.detectEmptyRows, angular.forEach(e, function(e) {
            t.push(e.rowName)
        }), h(["T.STEP_SELECT_TICKETS.ERROR.EMPTY_SEAT_ERROR", "T.LAYOUT.ERROR_MODAL.CONTINUE_BOOKING", "T.LAYOUT.ERROR_MODAL.ERROR_TITLE"], {
            rowName: t.join(", ")
        }).then(function(e) {
            g.openSimpleModal({
                size: "sm",
                title: e["T.LAYOUT.ERROR_MODAL.ERROR_TITLE"],
                message: e["T.STEP_SELECT_TICKETS.ERROR.EMPTY_SEAT_ERROR"],
                okButtonText: e["T.LAYOUT.ERROR_MODAL.CONTINUE_BOOKING"],
                ok: function(e) {
                    e()
                }
            })
        })))
    }, f.cancelDiscountCode = function() {
        f.doCancelDiscountCode()
    }, f.validateAnOrderdetail = function(e, t, o) {
        var n, i, r = !0,
            a = "Continue";
        return e.isAvailable ? !0 === o && t < e.minTixPerOrder ? (n = h.instant("T.SERVICE_ERROR.MinimumTicketTitle"), i = (i = (i = h.instant("T.SERVICE_ERROR.MinimumTicketDescription")).replace("{0}", e.minTixPerOrder)).replace("{1}", e.title), r = !(a = "OK")) : t > e.maxTixPerOrder && (n = h.instant("T.SERVICE_ERROR.MaximumTicketTitle"), i = (i = (i = h.instant("T.SERVICE_ERROR.MaximumTicketDescription")).replace("{0}", e.maxTixPerOrder)).replace("{1}", e.title), r = !(a = "OK")) : (r = !1, n = h.instant("T.SERVICE_ERROR.TicketNotAvaibleTitle"), i = h.instant("T.SERVICE_ERROR.TicketNotAvaibleDescription"), a = h.instant("T.LAYOUT.REFRESH")), r || g.openSimpleModal({
            size: "sm",
            title: n,
            message: i,
            okButtonText: a,
            ok: function(e) {
                e(), location.reload()
            }
        }), r
    }, f.isSeatInOrder = function(e) {
        for (var t = !1, o = 0; o < f.order.orderDetails.length; o++)
            for (var n = 0; n < f.order.orderDetails[o].sections.length; n++) {
                var i = f.order.orderDetails[o].sections[n].seats;
                if (i && void 0 !== i && null != i)
                    for (var r = 0; r < f.order.orderDetails[o].sections[n].seats.length; r++)
                        if (f.order.orderDetails[o].sections[n].seats[r].id == e.id) return t = !0
            }
        return t
    }, f.isDateExpired = function(e) {
        return null == e || !(new Date(e) > new Date)
    }, f.isSeatValidToBook = function(e) {
        return 1 == e.status && 1 == f.isDateExpired(e.orderExpireDate)
    }, f.isOneEmptySeatRuleError = function(e, t) {
        for (var o = !1, n = !1, i = e - 1, r = e + 1; 0 <= i && f.isSeatInOrder(t[i]);) i -= 1;
        for (; r < t.length && f.isSeatInOrder(t[r]);) r += 1;
        return 0 <= i - 1 && f.isSeatValidToBook(t[i]) && (f.isSeatInOrder(t[i - 1]) || 0 == f.isSeatValidToBook(t[i - 1])) && (o = !0), 0 == i && f.isSeatValidToBook(t[i]) && (o = !0), r + 1 < t.length && f.isSeatValidToBook(t[r]) && (f.isSeatInOrder(t[r + 1]) || 0 == f.isSeatValidToBook(t[r + 1])) && (n = !0), r == t.length - 1 && f.isSeatValidToBook(t[r]) && (n = !0), o || n
    };
    var S = {
        validateTicketInfo: function() {
            var e = !0,
                t = f.order.orderDetails;
            if (t && t.length && !_.every(t, {
                    quantity: 0
                }))
                for (var o = 0, n = t.length; o < n; o++) {
                    var i = t[o];
                    if (!f.validateAnOrderdetail(i.ticketType, i.quantity, !0)) {
                        e = !1;
                        break
                    }
                } else e = !(f.validationError.noTicketSelected = !0);
            return e
        },
        validateSeatmapRule: function() {
            return f.isOneEmptyRule2()
        }
    };

    function u(e, t) {
        return e.position < t.position ? -1 : e.position > t.position ? 1 : 0
    }
    f.isOneEmptyRule2 = function() {
        var e = !0,
            t = f.seatMap,
            o = [],
            n = [],
            o = [],
            i = [],
            r = [];
        if (f.order.orderDetails[0] && f.order.orderDetails[0].sections.length) {
            for (var a = f.order.orderDetails[0].sections, s = 0; s < a.length; s++)
                for (var d = a[s].seats || [], c = t.sections.filter(function(e) {
                        return e.id == a[s].sectionId
                    })[0], l = 0; l < d.length; l++)
                    if (i.push(d[l].id), r.push(d[l].sectionName + "--" + d[l].rowName), o.push(d[l]), c.rows && 0 < c.rows.length)
                        for (var u = 0; u < c.rows.length; u++) c.rows[u].sectionId = c.id, c.rows[u].name != d[l].rowName || -1 != n.map(function(e) {
                            return e.name
                        }).indexOf(c.rows[u].name) && -1 != n.map(function(e) {
                            return e.id
                        }).indexOf(c.rows[u].sectionId) || (c.rows[u].SR = d[l].sectionName + "--" + c.rows[u].name, n.push(c.rows[u]));
            for (var r = r.filter(function(e, t, o) {
                    return o.indexOf(e) === t
                }), p = [], n = n.filter(function(e) {
                    return !p.includes(e.id) && (p.push(e.id), !0)
                }), s = 0; s < n.length; s++) {
                var m = angular.copy(n[s].seats),
                    m = v("orderBy")(m, "position", !1);
                if (!(e = f.isRowValid(m, i))) break
            }
        }
        return e
    }, f.isRowValid = function(e, o) {
        for (var t = !0, n = e, i = n.map(function(e, t) {
                return -1 != o.indexOf(e.id) ? t : null
            }).filter(function(e) {
                return null != e
            }), r = (n.forEach(function(e, t) {
                var o = document.getElementById("seat-" + e.id).classList.value.indexOf("booked");
                (-1 == i.indexOf(t) && 1 != e.status || -1 != o) && (n[t].status = 2), -1 != i.indexOf(t) && (n[t].status = 0)
            }), n = n.sort(u), function(e) {
                var t = 1,
                    o = [];
                if (0 != e.length)
                    for (var n = 1; n <= e.length; n++) n == e.length || e[n] - e[n - 1] != 1 ? (o.push(1 == t ? [e[n - t]] : [e[n - t], e[n - 1]]), t = 1) : t++;
                return o
            }(i)), a = 0; a < r.length; a++) {
            var s = r[a][0],
                d = r[a][1] || r[a][0],
                c = n[s - 1] ? n[s - 1].status : 2,
                s = n[s - 2] ? n[s - 2].status : 2,
                l = n[d + 1] ? n[d + 1].status : 2,
                d = n[d + 2] ? n[d + 2].status : 2;
            if ((2 == s || 0 == s) && 1 == c && 1 == l && 1 == d || 1 == s && 1 == c && 1 == l && (2 == d || 0 == d) || (2 == s || 0 == s) && 1 == c && 1 == l && (2 == d || 0 == d) || 2 == c && 1 == l && 0 == d || 2 == l && 1 == c && 0 == s) {
                t = !1;
                break
            }
        }
        return t
    }, f.toggleDiscountCodeBox = function() {
        null === f.user ? setTimeout(function() {
            window.location = y + "/sign-in?lang=en&ref=" + encodeURI(window.location.href)
        }, 300) : (f.showDiscountCodeBox = !f.showDiscountCodeBox, f.showDiscountCodeBox && (f.global.discountMsg = ""))
    }, f.cancelDiscountCodeBox = function() {
        f.discountCodeSumitedSuccess ? f.cancelDiscountCode() : (f.order.discount.discountCode = "", f.seatIdsValidArr = null), f.showDiscountCodeBox = !f.showDiscountCodeBox
    }, f.showBookedSeat = function(e) {
        if (e && 0 < e.length)
            for (var t = e.length - 1; 0 <= t; t--) {
                var o = e[t],
                    n = f.seatMap;
                if (n && n.sections && n.sections)
                    for (var i = 0; i < n.sections.length; i++)
                        for (var r = 0; r < n.sections[i].rows.length; r++)
                            for (var a = 0; a < n.sections[i].rows[r].seats.length; a++) n.sections[i].rows[r].seats[a].id == o.id && (n.sections[i].rows[r].seats[a].status = 3);
                var s = d3.select("#seat-" + o.id);
                s && !s.classed("booked") && s.style("fill", "#F44336").style("stroke", "#D32F2F").classed("booked", !0)
            }
    }, f.removeOverlapSeats = function(e) {
        e.data.bookedSeatIds;
        var t = e.data.orderDetails,
            o = e.data.invalidSeatBookeds,
            n = f.order.orderDetails,
            i = f.event.currentShowing.ticketTypes;
        if (f.showBookedSeat(o), o && (r = o.length) && (e = h.instant("T.SERVICE_ERROR.SeatsWasBooked"), g.openSimpleModal({
                size: "sm",
                title: "Opps sorry!",
                message: e,
                okButtonText: h.instant("T.SERVICE_ERROR.SeatsWasBookedButton"),
                ok: function(e) {
                    e(), window.location.reload()
                }
            })), t) {
            for (var r, a = (r = t.length) - 1; 0 <= a; a--) {
                var s = t[a],
                    d = _.find(i, {
                        id: s.ticketTypeId
                    }),
                    c = _.filter(o, function(e) {
                        if (e.ticketTypeId === s.ticketTypeId) return e
                    }).length;
                s.quantity -= c, s.quantity < 0 && (s.quantity = 0), d && (d.selectedQuantity = s.quantity)
            }
            f.updateOrderDetails();
            for (a = r - 1; 0 <= a; a--) {
                s = t[a];
                var l = _.find(n, {
                    ticketTypeId: s.ticketTypeId
                });
                if (l && l.sections && 0 < l.sections.length)
                    for (var u = 0; u < l.sections.length; u++) {
                        var p = l.sections[u];
                        _.remove(p.seats, function(e) {
                            for (var t = 0; t < o.length; t++)
                                if (o[t].id == e.id) return !0;
                            return !1
                        })
                    }
            }
            for (a = r - 1; 0 <= a; a--)
                if ((s = n[a]) && s.sections && 0 < s.sections.length)
                    for (u = s.sections.length - 1; 0 <= u; u--) {
                        var m = s.sections[u];
                        m.seats && 0 < m.seats.length && (m.quantity = m.seats.length)
                    }
        }
    }, f.selectTicketTypeGroup = function(e) {
        f.global.selectedTicketTypeGroupId = e;
        for (var t = 0; t < f.event.currentShowing.displayTicketTypeGroups.length; t++) f.global.selectedTicketTypeGroupId == f.event.currentShowing.displayTicketTypeGroups[t].id && (f.global.currentGroupTicketTypeIds = f.event.currentShowing.displayTicketTypeGroups[t].ticketTypeIds)
    }, f.$on("eventLoaded", function(e) {
        f.event && f.event.currentShowing.displayTicketTypeGroups && f.selectTicketTypeGroup(null)
    });
    tkb && tkb.data && tkb.data.eventId && 71054 === tkb.data.eventId && ((o = document.createElement("script")).src = tkb.siteSetting.staticDomain + "/static-page/landingpages/quest-festival/js/fbpixel-event-page.js", document.getElementsByTagName("head")[0].appendChild(o), (o = document.createElement("noscript")).innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=392637677757582&ev=PageView&noscript=1" />', document.getElementsByTagName("head")[0].appendChild(o))
};
selectTicketsStepController.$inject = ["$scope", "$location", "ticketBookingService", "$timeout", "modalService", "$translate", "$sce", "$filter", "urlWebAuth"];
! function() {
    "use strict";

    function c(i, t) {
        var e;
        if (t = t || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = i, this.tapDelay = t.tapDelay || 200, this.tapTimeout = t.tapTimeout || 700, !c.notNeeded(i)) {
            for (var n = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], o = this, r = 0, a = n.length; r < a; r++) o[n[r]] = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }(o[n[r]], o);
            s && (i.addEventListener("mouseover", this.onMouse, !0), i.addEventListener("mousedown", this.onMouse, !0), i.addEventListener("mouseup", this.onMouse, !0)), i.addEventListener("click", this.onClick, !0), i.addEventListener("touchstart", this.onTouchStart, !1), i.addEventListener("touchmove", this.onTouchMove, !1), i.addEventListener("touchend", this.onTouchEnd, !1), i.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (i.removeEventListener = function(t, e, n) {
                var o = Node.prototype.removeEventListener;
                "click" === t ? o.call(i, t, e.hijacked || e, n) : o.call(i, t, e, n)
            }, i.addEventListener = function(t, e, n) {
                var o = Node.prototype.addEventListener;
                "click" === t ? o.call(i, t, e.hijacked || (e.hijacked = function(t) {
                    t.propagationStopped || e(t)
                }), n) : o.call(i, t, e, n)
            }), "function" == typeof i.onclick && (e = i.onclick, i.addEventListener("click", function(t) {
                e(t)
            }, !1), i.onclick = null)
        }
    }
    var t = 0 <= navigator.userAgent.indexOf("Windows Phone"),
        s = 0 < navigator.userAgent.indexOf("Android") && !t,
        r = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
        a = r && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        u = r && /OS [6-7]_\d/.test(navigator.userAgent),
        o = 0 < navigator.userAgent.indexOf("BB10");
    c.prototype.needsClick = function(t) {
        switch (t.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (t.disabled) return !0;
                break;
            case "input":
                if (r && "file" === t.type || t.disabled) return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(t.className)
    }, c.prototype.needsFocus = function(t) {
        switch (t.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !s;
            case "input":
                switch (t.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !t.disabled && !t.readOnly;
            default:
                return /\bneedsfocus\b/.test(t.className)
        }
    }, c.prototype.sendClick = function(t, e) {
        var n;
        document.activeElement && document.activeElement !== t && document.activeElement.blur(), e = e.changedTouches[0], (n = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
    }, c.prototype.determineEventType = function(t) {
        return s && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
    }, c.prototype.focus = function(t) {
        var e;
        r && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type && "email" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
    }, c.prototype.updateScrollParent = function(t) {
        var e, n = t.fastClickScrollParent;
        if (!n || !n.contains(t)) {
            e = t;
            do {
                if (e.scrollHeight > e.offsetHeight) {
                    n = e, t.fastClickScrollParent = e;
                    break
                }
            } while (e = e.parentElement)
        }
        n && (n.fastClickLastScrollTop = n.scrollTop)
    }, c.prototype.getTargetElementFromEventTarget = function(t) {
        return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
    }, c.prototype.onTouchStart = function(t) {
        var e, n, o;
        if (!(1 < t.targetTouches.length)) {
            if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], r) {
                if ((o = window.getSelection()).rangeCount && !o.isCollapsed) return !0;
                if (!a) {
                    if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                    this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e)
                }
            }
            this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault()
        }
        return !0
    }, c.prototype.touchHasMoved = function(t) {
        var t = t.changedTouches[0],
            e = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > e || Math.abs(t.pageY - this.touchStartY) > e
    }, c.prototype.onTouchMove = function(t) {
        return this.trackingClick && (this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0
    }, c.prototype.findControl = function(t) {
        return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, c.prototype.onTouchEnd = function(t) {
        var e, n, o, i = this.targetElement;
        if (!this.trackingClick) return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0;
        if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, e = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, u && (o = t.changedTouches[0], (i = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || i).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (o = i.tagName.toLowerCase())) {
            if (n = this.findControl(i)) {
                if (this.focus(i), s) return !1;
                i = n
            }
        } else if (this.needsFocus(i)) return 100 < t.timeStamp - e || r && window.top !== window && "input" === o ? this.targetElement = null : (this.focus(i), this.sendClick(i, t), r && "select" === o || (this.targetElement = null, t.preventDefault())), !1;
        return !(!r || a || !(n = i.fastClickScrollParent) || n.fastClickLastScrollTop === n.scrollTop) || (this.needsClick(i) || (t.preventDefault(), this.sendClick(i, t)), !1)
    }, c.prototype.onTouchCancel = function() {
        this.trackingClick = !1, this.targetElement = null
    }, c.prototype.onMouse = function(t) {
        return !this.targetElement || !(!t.forwardedTouchEvent && t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) && (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), 1))
    }, c.prototype.onClick = function(t) {
        return this.trackingClick ? (this.targetElement = null, !(this.trackingClick = !1)) : "submit" === t.target.type && 0 === t.detail || ((t = this.onMouse(t)) || (this.targetElement = null), t)
    }, c.prototype.destroy = function() {
        var t = this.layer;
        s && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, c.notNeeded = function(t) {
        var e, n;
        if (void 0 === window.ontouchstart) return !0;
        if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!s) return !0;
            if (e = document.querySelector("meta[name=viewport]")) {
                if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                if (31 < n && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (o && 10 <= (n = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] && 3 <= n[2] && (e = document.querySelector("meta[name=viewport]"))) {
            if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || !!(27 <= +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] && (e = document.querySelector("meta[name=viewport]")) && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || "none" === t.style.touchAction || "manipulation" === t.style.touchAction
    }, c.attach = function(t, e) {
        return new c(t, e)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return c
    }) : "undefined" != typeof module && module.exports ? (module.exports = c.attach, module.exports.FastClick = c) : window.FastClick = c
}();
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.QRious = e()
}(this, function() {
    "use strict";

    function o(t, e, i) {
        for (var s, n, r = 0, o = (i = f.call(arguments, 2)).length; r < o; r++)
            for (s in n = i[r]) t && !h.call(n, s) || (e[s] = n[s])
    }

    function t() {}

    function e(t, e, i, s) {
        var n, r = this;
        return "string" != typeof t && (s = i, i = e, e = t, t = null), "function" != typeof e && (s = i, i = e, e = function() {
            return r.apply(this, arguments)
        }), o(!1, e, r, s), e.prototype = (s = r.prototype, i = i, "function" == typeof Object.create ? n = Object.create(s) : (a.prototype = s, n = new a, a.prototype = null), i && o(!0, n, i), n), (e.prototype.constructor = e).class_ = t || r.class_, e.super_ = r, e
    }
    var a = function() {},
        h = Object.prototype.hasOwnProperty,
        f = Array.prototype.slice,
        i = (t.class_ = "Nevis", t.super_ = Object, t.extend = e, t),
        s = i.extend(function(t, e, i) {
            this.qrious = t, this.element = e, this.element.qrious = t, this.enabled = Boolean(i)
        }, {
            draw: function(t) {},
            getElement: function() {
                return this.enabled || (this.enabled = !0, this.render()), this.element
            },
            getModuleSize: function(t) {
                var e = this.qrious,
                    i = e.padding || 0,
                    e = Math.floor((e.size - 2 * i) / t.width);
                return Math.max(1, e)
            },
            getOffset: function(t) {
                var e = this.qrious,
                    i = e.padding;
                return null != i ? i : (i = this.getModuleSize(t), e = Math.floor((e.size - i * t.width) / 2), Math.max(0, e))
            },
            render: function(t) {
                this.enabled && (this.resize(), this.reset(), this.draw(t))
            },
            reset: function() {},
            resize: function() {}
        }),
        n = s.extend({
            draw: function(t) {
                var e, i, s = this.qrious,
                    n = this.getModuleSize(t),
                    r = this.getOffset(t),
                    o = this.element.getContext("2d");
                for (o.fillStyle = s.foreground, o.globalAlpha = s.foregroundAlpha, e = 0; e < t.width; e++)
                    for (i = 0; i < t.width; i++) t.buffer[i * t.width + e] && o.fillRect(n * e + r, n * i + r, n, n)
            },
            reset: function() {
                var t = this.qrious,
                    e = this.element.getContext("2d"),
                    i = t.size;
                e.lineWidth = 1, e.clearRect(0, 0, i, i), e.fillStyle = t.background, e.globalAlpha = t.backgroundAlpha, e.fillRect(0, 0, i, i)
            },
            resize: function() {
                var t = this.element;
                t.width = t.height = this.qrious.size
            }
        }),
        r = i.extend(null, {
            BLOCK: [0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28]
        }),
        c = i.extend(null, {
            BLOCKS: [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30],
            FINAL_FORMAT: [30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590, 20375, 19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107],
            LEVELS: {
                L: 1,
                M: 2,
                Q: 3,
                H: 4
            }
        }),
        u = i.extend(null, {
            EXPONENT: [1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 0],
            LOG: [255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175]
        }),
        l = i.extend(null, {
            BLOCK: [3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249, 2028, 3780, 481, 4011, 142, 3098, 831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345, 3177]
        }),
        _ = i.extend(function(t) {
            var e, i, s, n, r, o = t.value.length;
            for (this._badness = [], this._level = c.LEVELS[t.level], this._polynomial = [], this._value = t.value, this._version = 0, this._stringBuffer = []; this._version < 40 && (this._version++, s = 4 * (this._level - 1) + 16 * (this._version - 1), n = c.BLOCKS[s++], r = c.BLOCKS[s++], e = c.BLOCKS[s++], i = c.BLOCKS[s], !(o <= e * (n + r) + r - 3 + (this._version <= 9))););
            this._dataBlock = e, this._eccBlock = i, this._neccBlock1 = n, this._neccBlock2 = r;
            t = this.width = 17 + 4 * this._version;
            this.buffer = _._createArray(t * t), this._ecc = _._createArray(e + (e + i) * (n + r) + r), this._mask = _._createArray((t * (1 + t) + 1) / 2), this._insertFinders(), this._insertAlignments(), this.buffer[8 + t * (t - 8)] = 1, this._insertTimingGap(), this._reverseMask(), this._insertTimingRowAndColumn(), this._insertVersion(), this._syncMask(), this._convertBitStream(o), this._calculatePolynomial(), this._appendEccToData(), this._interleaveBlocks(), this._pack(), this._finish()
        }, {
            _addAlignment: function(t, e) {
                var i, s = this.buffer,
                    n = this.width;
                for (s[t + n * e] = 1, i = -2; i < 2; i++) s[t + i + n * (e - 2)] = 1, s[t - 2 + n * (e + i + 1)] = 1, s[t + 2 + n * (e + i)] = 1, s[t + i + 1 + n * (e + 2)] = 1;
                for (i = 0; i < 2; i++) this._setMask(t - 1, e + i), this._setMask(t + 1, e - i), this._setMask(t - i, e - 1), this._setMask(t + i, e + 1)
            },
            _appendData: function(t, e, i, s) {
                for (var n, r, o = this._polynomial, a = this._stringBuffer, h = 0; h < s; h++) a[i + h] = 0;
                for (h = 0; h < e; h++) {
                    if (255 !== (n = u.LOG[a[t + h] ^ a[i]]))
                        for (r = 1; r < s; r++) a[i + r - 1] = a[i + r] ^ u.EXPONENT[_._modN(n + o[s - r])];
                    else
                        for (r = i; r < i + s; r++) a[r] = a[r + 1];
                    a[i + s - 1] = 255 === n ? 0 : u.EXPONENT[_._modN(n + o[0])]
                }
            },
            _appendEccToData: function() {
                for (var t = 0, e = this._dataBlock, i = this._calculateMaxLength(), s = this._eccBlock, n = 0; n < this._neccBlock1; n++) this._appendData(t, e, i, s), t += e, i += s;
                for (n = 0; n < this._neccBlock2; n++) this._appendData(t, e + 1, i, s), t += e + 1, i += s
            },
            _applyMask: function(t) {
                var e, i, s, n, r = this.buffer,
                    o = this.width;
                switch (t) {
                    case 0:
                        for (n = 0; n < o; n++)
                            for (s = 0; s < o; s++) s + n & 1 || this._isMasked(s, n) || (r[s + n * o] ^= 1);
                        break;
                    case 1:
                        for (n = 0; n < o; n++)
                            for (s = 0; s < o; s++) 1 & n || this._isMasked(s, n) || (r[s + n * o] ^= 1);
                        break;
                    case 2:
                        for (n = 0; n < o; n++)
                            for (s = e = 0; s < o; s++, e++)(e = 3 === e ? 0 : e) || this._isMasked(s, n) || (r[s + n * o] ^= 1);
                        break;
                    case 3:
                        for (n = i = 0; n < o; n++, i++)
                            for (e = i = 3 === i ? 0 : i, s = 0; s < o; s++, e++)(e = 3 === e ? 0 : e) || this._isMasked(s, n) || (r[s + n * o] ^= 1);
                        break;
                    case 4:
                        for (n = 0; n < o; n++)
                            for (i = n >> 1 & 1, s = e = 0; s < o; s++, e++) 3 === e && (e = 0, i = !i), i || this._isMasked(s, n) || (r[s + n * o] ^= 1);
                        break;
                    case 5:
                        for (n = i = 0; n < o; n++, i++)
                            for (3 === i && (i = 0), s = e = 0; s < o; s++, e++)(s & n & 1) + !(!(e = 3 === e ? 0 : e) | !i) || this._isMasked(s, n) || (r[s + n * o] ^= 1);
                        break;
                    case 6:
                        for (n = i = 0; n < o; n++, i++)
                            for (3 === i && (i = 0), s = e = 0; s < o; s++, e++)(s & n & 1) + ((e = 3 === e ? 0 : e) && e === i) & 1 || this._isMasked(s, n) || (r[s + n * o] ^= 1);
                        break;
                    case 7:
                        for (n = i = 0; n < o; n++, i++)
                            for (3 === i && (i = 0), s = e = 0; s < o; s++, e++)((e = 3 === e ? 0 : e) && e === i) + (s + n & 1) & 1 || this._isMasked(s, n) || (r[s + n * o] ^= 1)
                }
            },
            _calculateMaxLength: function() {
                return this._dataBlock * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2
            },
            _calculatePolynomial: function() {
                var t, e, i = this._eccBlock,
                    s = this._polynomial;
                for (s[0] = 1, t = 0; t < i; t++) {
                    for (s[t + 1] = 1, e = t; 0 < e; e--) s[e] = s[e] ? s[e - 1] ^ u.EXPONENT[_._modN(u.LOG[s[e]] + t)] : s[e - 1];
                    s[0] = u.EXPONENT[_._modN(u.LOG[s[0]] + t)]
                }
                for (t = 0; t <= i; t++) s[t] = u.LOG[s[t]]
            },
            _checkBadness: function() {
                for (var t, e, i, s, n = 0, r = this._badness, o = this.buffer, a = this.width, h = 0; h < a - 1; h++)
                    for (s = 0; s < a - 1; s++)(o[s + a * h] && o[s + 1 + a * h] && o[s + a * (h + 1)] && o[s + 1 + a * (h + 1)] || !(o[s + a * h] || o[s + 1 + a * h] || o[s + a * (h + 1)] || o[s + 1 + a * (h + 1)])) && (n += _.N2);
                var f = 0;
                for (h = 0; h < a; h++) {
                    for (s = t = r[i = 0] = 0; s < a; s++) t === (e = o[s + a * h]) ? r[i]++ : r[++i] = 1, f += (t = e) ? 1 : -1;
                    n += this._getBadness(i)
                }
                for (var c = 0, u = (u = f = f < 0 ? -f : f) + (u << 2) << 1; a * a < u;) u -= a * a, c++;
                for (n += c * _.N4, s = 0; s < a; s++) {
                    for (h = t = r[i = 0] = 0; h < a; h++) t === (e = o[s + a * h]) ? r[i]++ : r[++i] = 1, t = e;
                    n += this._getBadness(i)
                }
                return n
            },
            _convertBitStream: function(t) {
                for (var e, i = this._ecc, s = this._version, n = 0; n < t; n++) i[n] = this._value.charCodeAt(n);
                var r = this._stringBuffer = i.slice(),
                    o = this._calculateMaxLength(),
                    a = (o - 2 <= t && (t = o - 2, 9 < s) && t--, t);
                if (9 < s) {
                    for (r[a + 2] = 0, r[a + 3] = 0; a--;) e = r[a], r[a + 3] |= 255 & e << 4, r[a + 2] = e >> 4;
                    r[2] |= 255 & t << 4, r[1] = t >> 4, r[0] = 64 | t >> 12
                } else {
                    for (r[a + 1] = 0, r[a + 2] = 0; a--;) e = r[a], r[a + 2] |= 255 & e << 4, r[a + 1] = e >> 4;
                    r[1] |= 255 & t << 4, r[0] = 64 | t >> 4
                }
                for (a = t + 3 - (s < 10); a < o;) r[a++] = 236, r[a++] = 17
            },
            _getBadness: function(t) {
                for (var e = 0, i = this._badness, s = 0; s <= t; s++) 5 <= i[s] && (e += _.N1 + i[s] - 5);
                for (s = 3; s < t - 1; s += 2) i[s - 2] === i[s + 2] && i[s + 2] === i[s - 1] && i[s - 1] === i[s + 1] && 3 * i[s - 1] === i[s] && (0 === i[s - 3] || t < s + 3 || 3 * i[s - 3] >= 4 * i[s] || 3 * i[s + 3] >= 4 * i[s]) && (e += _.N3);
                return e
            },
            _finish: function() {
                this._stringBuffer = this.buffer.slice();
                for (var t, e = 0, i = 3e4, s = 0; s < 8 && (this._applyMask(s), (t = this._checkBadness()) < i && (i = t, e = s), 7 !== e); s++) this.buffer = this._stringBuffer.slice();
                e !== s && this._applyMask(e);
                var i = c.FINAL_FORMAT[e + (this._level - 1 << 3)],
                    n = this.buffer,
                    r = this.width;
                for (s = 0; s < 8; s++, i >>= 1) 1 & i && (n[r - 1 - s + 8 * r] = 1, s < 6 ? n[8 + r * s] = 1 : n[8 + r * (s + 1)] = 1);
                for (s = 0; s < 7; s++, i >>= 1) 1 & i && (n[8 + r * (r - 7 + s)] = 1, s ? n[6 - s + 8 * r] = 1 : n[7 + 8 * r] = 1)
            },
            _interleaveBlocks: function() {
                for (var t, e = this._dataBlock, i = this._ecc, s = this._eccBlock, n = 0, r = this._calculateMaxLength(), o = this._neccBlock1, a = this._neccBlock2, h = this._stringBuffer, f = 0; f < e; f++) {
                    for (t = 0; t < o; t++) i[n++] = h[f + t * e];
                    for (t = 0; t < a; t++) i[n++] = h[o * e + f + t * (e + 1)]
                }
                for (t = 0; t < a; t++) i[n++] = h[o * e + f + t * (e + 1)];
                for (f = 0; f < s; f++)
                    for (t = 0; t < o + a; t++) i[n++] = h[r + f + t * s];
                this._stringBuffer = i
            },
            _insertAlignments: function() {
                var t, e, i, s = this._version,
                    n = this.width;
                if (1 < s)
                    for (t = r.BLOCK[s], i = n - 7;;) {
                        for (e = n - 7; t - 3 < e && (this._addAlignment(e, i), !(e < t));) e -= t;
                        if (i <= t + 9) break;
                        i -= t, this._addAlignment(6, i), this._addAlignment(i, 6)
                    }
            },
            _insertFinders: function() {
                for (var t, e, i, s = this.buffer, n = this.width, r = 0; r < 3; r++) {
                    for (i = t = 0, s[(i = 2 === r ? n - 7 : i) + 3 + n * ((t = 1 === r ? n - 7 : t) + 3)] = 1, e = 0; e < 6; e++) s[i + e + n * t] = 1, s[i + n * (t + e + 1)] = 1, s[i + 6 + n * (t + e)] = 1, s[i + e + 1 + n * (t + 6)] = 1;
                    for (e = 1; e < 5; e++) this._setMask(i + e, t + 1), this._setMask(i + 1, t + e + 1), this._setMask(i + 5, t + e), this._setMask(i + e + 1, t + 5);
                    for (e = 2; e < 4; e++) s[i + e + n * (t + 2)] = 1, s[i + 2 + n * (t + e + 1)] = 1, s[i + 4 + n * (t + e)] = 1, s[i + e + 1 + n * (t + 4)] = 1
                }
            },
            _insertTimingGap: function() {
                for (var t, e = this.width, i = 0; i < 7; i++) this._setMask(7, i), this._setMask(e - 8, i), this._setMask(7, i + e - 7);
                for (t = 0; t < 8; t++) this._setMask(t, 7), this._setMask(t + e - 8, 7), this._setMask(t, e - 8)
            },
            _insertTimingRowAndColumn: function() {
                for (var t = this.buffer, e = this.width, i = 0; i < e - 14; i++) 1 & i ? (this._setMask(8 + i, 6), this._setMask(6, 8 + i)) : (t[8 + i + 6 * e] = 1, t[6 + e * (8 + i)] = 1)
            },
            _insertVersion: function() {
                var t, e, i, s, n = this.buffer,
                    r = this._version,
                    o = this.width;
                if (6 < r)
                    for (t = l.BLOCK[r - 7], e = 17, i = 0; i < 6; i++)
                        for (s = 0; s < 3; s++, e--) 1 & (11 < e ? r >> e - 12 : t >> e) ? (n[5 - i + o * (2 - s + o - 11)] = 1, n[2 - s + o - 11 + o * (5 - i)] = 1) : (this._setMask(5 - i, 2 - s + o - 11), this._setMask(2 - s + o - 11, 5 - i))
            },
            _isMasked: function(t, e) {
                t = _._getMaskBit(t, e);
                return 1 === this._mask[t]
            },
            _pack: function() {
                for (var t, e, i = 1, s = 1, n = this.width, r = n - 1, o = n - 1, a = (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2, h = 0; h < a; h++)
                    for (t = this._stringBuffer[h], e = 0; e < 8; e++, t <<= 1)
                        for (128 & t && (this.buffer[r + n * o] = 1); s ? r-- : (r++, i ? 0 !== o ? o-- : (i = !i, 6 == (r -= 2) && (r--, o = 9)) : o !== n - 1 ? o++ : (i = !i, 6 == (r -= 2) && (r--, o -= 8))), s = !s, this._isMasked(r, o););
            },
            _reverseMask: function() {
                for (var t, e = this.width, i = 0; i < 9; i++) this._setMask(i, 8);
                for (i = 0; i < 8; i++) this._setMask(i + e - 8, 8), this._setMask(8, i);
                for (t = 0; t < 7; t++) this._setMask(8, t + e - 7)
            },
            _setMask: function(t, e) {
                t = _._getMaskBit(t, e);
                this._mask[t] = 1
            },
            _syncMask: function() {
                for (var t, e = this.width, i = 0; i < e; i++)
                    for (t = 0; t <= i; t++) this.buffer[t + e * i] && this._setMask(t, i)
            }
        }, {
            _createArray: function(t) {
                for (var e = [], i = 0; i < t; i++) e[i] = 0;
                return e
            },
            _getMaskBit: function(t, e) {
                var i;
                return e < t && (i = t, t = e, e = i), (i = (i = e) + e * e >> 1) + t
            },
            _modN: function(t) {
                for (; 255 <= t;) t = ((t -= 255) >> 8) + (255 & t);
                return t
            },
            N1: 3,
            N2: 3,
            N3: 40,
            N4: 10
        }),
        d = _,
        v = s.extend({
            draw: function() {
                this.element.src = this.qrious.toDataURL()
            },
            reset: function() {
                this.element.src = ""
            },
            resize: function() {
                var t = this.element;
                t.width = t.height = this.qrious.size
            }
        }),
        s = i.extend(function(t, e, i, s) {
            this.name = t, this.modifiable = Boolean(e), this.defaultValue = i, this._valueTransformer = s
        }, {
            transform: function(t) {
                var e = this._valueTransformer;
                return "function" == typeof e ? e(t, this) : t
            }
        }),
        p = i.extend(null, {
            abs: function(t) {
                return null != t ? Math.abs(t) : null
            },
            hasOwn: function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            },
            noop: function() {},
            toUpperCase: function(t) {
                return null != t ? t.toUpperCase() : null
            }
        }),
        m = i.extend(function(t) {
            this.options = {}, t.forEach(function(t) {
                this.options[t.name] = t
            }, this)
        }, {
            exists: function(t) {
                return null != this.options[t]
            },
            get: function(t, e) {
                return m._get(this.options[t], e)
            },
            getAll: function(t) {
                var e, i = this.options,
                    s = {};
                for (e in i) p.hasOwn(i, e) && (s[e] = m._get(i[e], t));
                return s
            },
            init: function(t, e, i) {
                var s, n;
                for (s in "function" != typeof i && (i = p.noop), this.options) p.hasOwn(this.options, s) && (n = this.options[s], m._set(n, n.defaultValue, e), m._createAccessor(n, e, i));
                this._setAll(t, e, !0)
            },
            set: function(t, e, i) {
                return this._set(t, e, i)
            },
            setAll: function(t, e) {
                return this._setAll(t, e)
            },
            _set: function(t, e, i, s) {
                var n = this.options[t];
                if (!n) throw new Error("Invalid option: " + t);
                if (n.modifiable || s) return m._set(n, e, i);
                throw new Error("Option cannot be modified: " + t)
            },
            _setAll: function(t, e, i) {
                if (!t) return !1;
                var s, n = !1;
                for (s in t) p.hasOwn(t, s) && this._set(s, t[s], e, i) && (n = !0);
                return n
            }
        }, {
            _createAccessor: function(e, i, s) {
                var t = {
                    get: function() {
                        return m._get(e, i)
                    }
                };
                e.modifiable && (t.set = function(t) {
                    m._set(e, t, i) && s(t, e)
                }), Object.defineProperty(i, e.name, t)
            },
            _get: function(t, e) {
                return e["_" + t.name]
            },
            _set: function(t, e, i) {
                var s = "_" + t.name,
                    n = i[s],
                    e = t.transform(null != e ? e : t.defaultValue);
                return (i[s] = e) !== n
            }
        }),
        g = m,
        k = i.extend(function() {
            this._services = {}
        }, {
            getService: function(t) {
                var e = this._services[t];
                if (e) return e;
                throw new Error("Service is not being managed with name: " + t)
            },
            setService: function(t, e) {
                if (this._services[t]) throw new Error("Service is already managed with name: " + t);
                e && (this._services[t] = e)
            }
        }),
        w = new g([new s("background", !0, "white"), new s("backgroundAlpha", !0, 1, p.abs), new s("element"), new s("foreground", !0, "black"), new s("foregroundAlpha", !0, 1, p.abs), new s("level", !0, "L", p.toUpperCase), new s("mime", !0, "image/png"), new s("padding", !0, null, p.abs), new s("size", !0, 100, p.abs), new s("value", !0, "")]),
        M = new k,
        g = i.extend(function(t) {
            w.init(t, this, this.update.bind(this));
            var t = w.get("element", this),
                e = M.getService("element"),
                i = t && e.isCanvas(t) ? t : e.createCanvas(),
                e = t && e.isImage(t) ? t : e.createImage();
            this._canvasRenderer = new n(this, i, !0), this._imageRenderer = new v(this, e, e === t), this.update()
        }, {
            get: function() {
                return w.getAll(this)
            },
            set: function(t) {
                w.setAll(t, this) && this.update()
            },
            toDataURL: function(t) {
                return this.canvas.toDataURL(t || this.mime)
            },
            update: function() {
                var t = new d({
                    level: this.level,
                    value: this.value
                });
                this._canvasRenderer.render(t), this._imageRenderer.render(t)
            }
        }, {
            use: function(t) {
                M.setService(t.getName(), t)
            }
        }),
        s = (Object.defineProperties(g.prototype, {
            canvas: {
                get: function() {
                    return this._canvasRenderer.getElement()
                }
            },
            image: {
                get: function() {
                    return this._imageRenderer.getElement()
                }
            }
        }), g),
        k = i.extend({
            getName: function() {}
        }).extend({
            createCanvas: function() {},
            createImage: function() {},
            getName: function() {
                return "element"
            },
            isCanvas: function(t) {},
            isImage: function(t) {}
        }).extend({
            createCanvas: function() {
                return document.createElement("canvas")
            },
            createImage: function() {
                return document.createElement("img")
            },
            isCanvas: function(t) {
                return t instanceof HTMLCanvasElement
            },
            isImage: function(t) {
                return t instanceof HTMLImageElement
            }
        });
    return s.use(new k), s
});
var questionFormController = function(m, a, h, c, u, f, l, d) {
    m.handleCacheMultipleTabs(), tkb.tracking.trackFacebookEvent && tkb.tracking.trackFacebookEvent({
        eventName: "TrackStepAnswer"
    });

    function w() {
        var o;
        m.$parent.initialized ? (m.reMapFormAnswerSheets(), o = function(i) {
            switch (i.question.type) {
                case QUESTION_TYPE.Text:
                    m.$watch(function() {
                        return i.answerText
                    }, function(e, o) {
                        1 < i.formAnswerChoices.length ? i.formAnswerChoices.length = 1 : i.formAnswerChoices.length || i.formAnswerChoices.push(new tkb.model.FormAnswerChoice);
                        var n = i.formAnswerChoices[0];
                        1 < n.formAnswerChoiceComponents.length ? n.formAnswerChoiceComponents.length = 1 : n.formAnswerChoiceComponents.length || n.formAnswerChoiceComponents.push(new tkb.model.FormAnswerChoiceComponent), n.formAnswerChoiceComponents[0].answer = e
                    });
                    break;
                case QUESTION_TYPE.MultipleChoiceSingleAnswer:
                    m.$watch(function() {
                        return i.selectedQuestionOptionId
                    }, function(e, o) {
                        1 < i.formAnswerChoices.length && (i.formAnswerChoices.length = 1);
                        var n = i.formAnswerChoices[0],
                            e = (n && 1 < n.formAnswerChoiceComponents.length && (n.formAnswerChoiceComponents.length = 1), _.find(i.formQuestionOptions, {
                                id: e
                            }));
                        e && (n || (n = new tkb.model.FormAnswerChoice, i.formAnswerChoices.push(n)), n.formAnswerChoiceComponents.length || n.formAnswerChoiceComponents.push(new tkb.model.FormAnswerChoiceComponent), n.formAnswerChoiceComponents[0].formQuestionOptionId = e.id, n.formAnswerChoiceComponents[0].answer = e.optionText)
                    });
                    break;
                case QUESTION_TYPE.MultipleChoiceMultipleAnswer:
                    m.$watch(function() {
                        return i.formQuestionOptions
                    }, function(e, o) {
                        for (var n = _.filter(i.formQuestionOptions, {
                                selected: !0
                            }), t = [], r = i.formAnswerChoices.length - 1; 0 <= r; r--) {
                            var s = i.formAnswerChoices[r];
                            s.formAnswerChoiceComponents && s.formAnswerChoiceComponents.length && (s = s.formAnswerChoiceComponents[0], s = _.find(n, {
                                id: s.formQuestionOptionId
                            })) ? t.push(s.id) : i.formAnswerChoices.splice(r, 1)
                        }
                        _.filter(n, function(e) {
                            return t.indexOf(e.id) < 0
                        }).forEach(function(e) {
                            var o = new tkb.model.FormAnswerChoice,
                                n = new tkb.model.FormAnswerChoiceComponent;
                            n.formQuestionOptionId = e.id, n.answer = e.optionText, o.formAnswerChoiceComponents.push(n), _.chain(i.formAnswerChoices).map("formAnswerChoiceComponents").flatten().find({
                                formQuestionOptionId: e.id
                            }).value() || i.formAnswerChoices.push(o)
                        })
                    }, !0)
            }
        }, m.order.commonFormAnswerSheet && m.order.commonFormAnswerSheet.formAnswers.forEach(function(e) {
            o(e)
        }), m.order.formAnswerSheets && m.order.formAnswerSheets.length && (m.order.formAnswerSheets[0].open = !0, m.order.formAnswerSheets.forEach(function(e) {
            e.formAnswers.forEach(function(e) {
                o(e)
            })
        }))) : h(w, 50)
    }
    m.$parent.bookingStep = BOOKING_STEP.questionForm, m.QUESTION_TYPE = QUESTION_TYPE, m.GRID_DISPLAY_TYPE = GRID_DISPLAY_TYPE, m.ANSWER_DISPLAY_TYPE = ANSWER_DISPLAY_TYPE, m.reMapFormAnswerSheets = function() {
        if (m.event && m.order && m.event.form) {
            if (m.event.form.orderCommonFormQuestions.forEach(function(e, o) {
                    e.questionHtmlSafe = a.trustAsHtml(e.question), e.helperTextHtmlSafe = a.trustAsHtml(e.helperText)
                }), m.event.form.ticketFormQuestions.forEach(function(e, o) {
                    e.questionHtmlSafe = a.trustAsHtml(e.question), e.helperTextHtmlSafe = a.trustAsHtml(e.helperText)
                }), m.event.form.orderCommonFormQuestions && m.event.form.orderCommonFormQuestions.length && (m.order.commonFormAnswerSheet ? m.event.form.orderCommonFormQuestions.forEach(function(e, o) {
                    e.helperTextHtmlSafe = a.trustAsHtml(e.helperText);
                    var n = _.find(m.order.commonFormAnswerSheet.formAnswers, {
                        formQuestionId: e.id
                    });
                    n ? n.attachToQuestion(e) : (n = new tkb.model.FormAnswer(null, e), m.order.commonFormAnswerSheet.formAnswers.push(n))
                }) : (m.order.commonFormAnswerSheet = new tkb.model.FormAnswerSheet(null, !0), m.order.commonFormAnswerSheet.eventId = m.event.id, m.event.form.orderCommonFormQuestions.forEach(function(e, o) {
                    e = new tkb.model.FormAnswer(null, e);
                    m.order.commonFormAnswerSheet.formAnswers.push(e)
                }))), m.event.form.basicForm.hasQuestion() || m.event.form.ticketFormQuestions && m.event.form.ticketFormQuestions.length) {
                for (var i = {}, e = m.order.orderDetails, o = [], n = [181698, 181727, 181728, 181744, 181761, 181779, 181798, 181818, 181839, 181637, 181682, 181683, 181684, 181685], t = 0; t < e.length; t++) n.indexOf(e[t].ticketTypeId) < 0 && o.push(e[t]);
                0 == o.length && c.path("/step2"), o.forEach(function(e) {
                    for (var t, r, o = _.filter(m.order.formAnswerSheets, {
                            ticketTypeId: e.ticketTypeId
                        }), s = _.find(m.event.currentShowing.ticketTypes, {
                            id: e.ticketTypeId
                        }), n = 0; n < e.quantity; n++) n <= o.length - 1 ? ((t = o[n]).ticketType = s, m.event.form.ticketFormQuestions.forEach(function(e, o) {
                        var n = _.find(t.formAnswers, {
                            formQuestionId: e.id
                        });
                        n ? (n.show = !0, n.attachToQuestion(e)) : ((n = new tkb.model.FormAnswer(null, e)).show = !0, t.formAnswers.push(n))
                    })) : ((r = new tkb.model.FormAnswerSheet).eventId = m.event.id, r.ticketTypeId = e.ticketTypeId, r.ticketType = s, m.event.form.ticketFormQuestions.forEach(function(e, o) {
                        var n = new tkb.model.FormAnswer(null, e);
                        65548 == m.event.id ? (n.show = !0, !s.requiredQuestionIds || -1 < s.requiredQuestionIds.indexOf(e.id) || (n.show = !1)) : n.show = !0, r.formAnswers.push(n)
                    }), 1 == m.event.ticketTypeNameCus && (i[s.id] ? i[s.id] = i[s.id] + 1 : i[s.id] = 1, r.index = i[s.id]), o.push(r), m.order.formAnswerSheets.push(r))
                })
            }
            var r;
            m.order.formAnswerSheets && m.order.formAnswerSheets.length && (m.user || m.userParam) && (r = m.order.formAnswerSheets[0], m.user && (r.firstName = r.firstName || m.user.firstName, r.lastName = r.lastName || m.user.lastName, r.email = r.email || m.user.email, r.phoneNumber = r.phoneNumber || m.user.phoneNumber, r.company = r.company || m.user.company, r.jobTitle = r.jobTitle || m.user.jobTitle, r.website = r.website || m.user.website), m.userParam) && (r.firstName = r.firstName || m.userParam.firstName, r.lastName = r.lastName || m.userParam.lastName, r.email = r.email || m.userParam.email, r.phoneNumber = r.phoneNumber || m.userParam.phoneNumber)
        }
    };
    w(), m.copyAnswersFromFirstAnswerSheet = function(n) {
        var e = m.order.formAnswerSheets[0];
        n.firstName = e.firstName || n.firstName, n.lastName = e.lastName || n.lastName, n.email = e.email || n.email, n.phoneNumber = e.phoneNumber || n.phoneNumber, n.company = e.company || n.company, n.jobTitle = e.jobTitle || n.jobTitle, n.website = e.website || n.website, e.formAnswers.forEach(function(e) {
            var o = _.find(n.formAnswers, {
                formQuestionId: e.formQuestionId
            });
            if (o) switch (e.question.type) {
                case QUESTION_TYPE.Text:
                    o.answerText = e.answerText;
                    break;
                case QUESTION_TYPE.MultipleChoiceSingleAnswer:
                    o.selectedQuestionOptionId = e.selectedQuestionOptionId;
                    break;
                case QUESTION_TYPE.MultipleChoiceMultipleAnswer:
                    o.formQuestionOptions = angular.copy(e.formQuestionOptions)
            }
        })
    };
    var e, p = function(e) {
        delete e.valid, delete e.invalid;
        var o = !1,
            n = [];
        return e.isCommonForOrder || (!m.event.form.basicForm.nameRequired || e.firstName && e.lastName || (n.push("Name"), o = !0), m.event.form.basicForm.emailRequired && !e.email && (n.push("Email"), o = !0), m.event.form.basicForm.phoneRequired && !e.phoneNumber && (n.push("Phone"), o = !0), m.event.form.basicForm.companyRequired && !e.company && (n.push("Company"), o = !0), m.event.form.basicForm.jobTitleRequired && !e.jobTitle && (n.push("Job Title"), o = !0), m.event.form.basicForm.websiteRequired && !e.website && (n.push("Website"), o = !0)), e.formAnswers.forEach(function(e) {
            switch (e.question.type) {
                case QUESTION_TYPE.Text:
                    1 < e.formAnswerChoices.length && (n.push(e.question.question), o = !0), e.question.answerRequired && 1 != e.formAnswerChoices.length && (n.push(e.question.question), o = !0), e.question.answerRequired && 0 < e.formAnswerChoices.length && !e.formAnswerChoices[0].formAnswerChoiceComponents[0].answer && (n.push(e.question.question), o = !0);
                    break;
                case QUESTION_TYPE.MultipleChoiceSingleAnswer:
                    1 < e.formAnswerChoices.length && (n.push(e.question.question), o = !0), e.question.answerRequired && 1 != e.formAnswerChoices.length && (n.push(e.question.question), o = !0);
                    break;
                case QUESTION_TYPE.MultipleChoiceMultipleAnswer:
                    e.question.answerRequired && !e.formAnswerChoices.length && (n.push(e.question.question), o = !0)
            }
        }), o ? {
            isValid: !(e.invalid = !0),
            errQuestions: n
        } : {
            isValid: !(e.valid = !0),
            errQuestions: n
        }
    };
    m.submitFormAnswers = function() {
        if (!m.submitting)
            if (m.submitFormAnswersClicked = !0, m.submitting = !0, m.order.commonFormAnswerSheet && !p(m.order.commonFormAnswerSheet).isValid && 0 == m.order.formAnswerSheets.length) m.submitting = !1, d.openSimpleModal({
                size: "sm",
                title: "Common Error!",
                message: "Please answer all the required questions and submit again.",
                okButtonText: "Ok",
                ok: function(e) {
                    var o = document.getElementById("common-answer-sheet");
                    l(o), h(e, 0)
                }
            });
            else {
                for (var e = "", o = 0, n = m.order.formAnswerSheets.length; o < n; o++) {
                    var t = m.order.formAnswerSheets[o],
                        t = p(t);
                    t.isValid || (e = e + " --- " + (o + 1) + ": " + t.errQuestions.join(", "))
                }
                var r, s = _.find(m.order.formAnswerSheets, {
                    invalid: !0
                });
                s ? (m.submitting = !1, r = m.order.formAnswerSheets.indexOf(s), s = u.instant("T.STEP_QUESTION_FORM.PLEASE_ANSWER_ALL"), d.openSimpleModal({
                    size: "sm",
                    title: "Error!",
                    message: s + e,
                    okButtonText: "Ok",
                    ok: function(e) {
                        m.openSheet(r), h(e, 0)
                    }
                })) : ((s = {
                    commonFormAnswerSheet: angular.copy(m.order.commonFormAnswerSheet),
                    formAnswerSheets: angular.copy(m.order.formAnswerSheets)
                }).commonFormAnswerSheet && i(s.commonFormAnswerSheet), s.formAnswerSheets.forEach(function(e) {
                    i(e)
                }), s = s, tkb.tracking.trackCustom({
                    eventCategory: "Ticket Booking",
                    eventAction: "submit step form questions"
                }), f.submitFormAnswers(m.event.id, tkb.data.showingId, s).then(function(e) {
                    m.order.commonFormAnswerSheet = new tkb.model.FormAnswerSheet(e.commonFormAnswerSheet), m.order.formAnswerSheets = [], e.formAnswerSheets.forEach(function(e) {
                        m.order.formAnswerSheets.push(new tkb.model.FormAnswerSheet(e))
                    }), w(), m.order.buyerInfo = new tkb.model.BuyerInfo(e.buyerInfo), m.event.isShowTermConfirm ? d.openArianaAnswerConfirmModel(m, {
                        customPopupCheckbox1: !1,
                        ok: function(e, o) {
                            1 == o.customPopupCheckbox1 && (e.close(), c.path("/step2"))
                        }
                    }) : m.event.isShowChainsMokerTerm ? d.openChainsMokerTermModel(m, {
                        chainsMokerTermCheckbox: !1,
                        ok: function(e, o) {
                            1 == o.chainsMokerTermCheckbox && (e.close(), c.path("/step2"))
                        }
                    }) : m.event.hasTermCondition && m.event.hasTermConditionStepQuestion && !m.event.hasTermConditionAtStepSubmitTicket ? f.getEventTermCondition(tkb.data.eventId).then(function(e) {
                        void 0 === e && null == e || (m.eventHasTermConditionContent = {
                            title: e.title,
                            content: a.trustAsHtml(e.content)
                        }, d.termConditionModel(m, {
                            termConditionCheckbox: !1,
                            ok: function(e, o) {
                                1 == o.termConditionCheckbox && (e.close(), c.path("/step2"))
                            }
                        }))
                    }, function() {}) : c.path("/step2")
                }, function(e) {}).finally(function() {
                    m.submitting = !1
                }))
            }
        function i(e) {
            e.formAnswers.forEach(function(e) {
                delete e.formQuestionOptions, delete e.answerText, delete e.selectedQuestionOptionId, delete e.question, delete e.displayOrder
            })
        }
    }, m.openSheet = function(o) {
        m.order.formAnswerSheets[o].open || h(function() {
            m.order.formAnswerSheets[o].open = !0;
            var e = document.getElementById("answer-sheet-" + o);
            l(e)
        }, 200)
    }, window.openSheet = m.openSheet;
    tkb && tkb.data && tkb.data.eventId && 71054 === tkb.data.eventId && ((e = document.createElement("script")).src = tkb.siteSetting.staticDomain + "/static-page/landingpages/quest-festival/js/fbpixel-event-page.js", document.getElementsByTagName("head")[0].appendChild(e), (e = document.createElement("noscript")).innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=392637677757582&ev=PageView&noscript=1" />', document.getElementsByTagName("head")[0].appendChild(e))
};
questionFormController.$inject = ["$scope", "$sce", "$timeout", "$location", "$translate", "ticketBookingService", "smoothScroll", "modalService"];
var step2Controller = function(a, n, o, r, t, i, d, s) {
    a.staticDomain = tkb.siteSetting.staticDomain, a.messageLimitCodOp = "", a.messageAlertErrorInternetBanking = r.instant("T.STEP2.PLEASE_CHOOSE_BANK_TO_PAYMENT"), a.isInternetBankingInterrupted = !1, a.isMomoInterrupted = !1;
    var c = window.tkb.data.eventId + "-" + window.tkb.data.showingId;

    function m(e) {
        var n = {};
        return document.cookie.split(";").forEach(function(e) {
            var t = e.split("=")[0],
                e = e.split("=")[1];
            n[t.trim()] = e
        }), n[e]
    }
    a.setMessageLimitCodOp = function() {
        var e, t;
        void 0 !== a.order && void 0 !== a.order.limitAmount && (e = "$1,", "vi" == r.use() && (e = "$1."), t = (t = r.instant("T.STEP2.ATTENTION_INVALID_PAYMENT")).replace("{0}", a.order.limitAmount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, e)), a.messageLimitCodOp = t)
    }, "undefined" != typeof My2c2p && My2c2p.onSubmitForm("step2-form", function(e, t) {
        isValid && 0 != e && d.openSimpleModal({
            size: "sm",
            title: "Invalid card",
            message: t,
            okButtonText: "Ok",
            ok: function(e) {
                i(e, 0)
            }
        })
    }), tkb.tracking.trackFacebookEvent && tkb.tracking.trackFacebookEvent({
        eventName: "TrackStepPayment"
    }), !a.order || a.order.orderDetails && a.order.orderDetails.length ? -1 == document.referrer.indexOf("sbgateway.zalopay") && a.handleCacheMultipleTabs() : (window.localStorage.removeItem(c), window.sessionStorage.setItem("page_available" + c, "false"), a.goToSelectTicketsStep()), a.$parent.bookingStep = BOOKING_STEP.step2, a.snapperContent.scrollTop = 0, a.deliveryMethodSelected = !1, a.subcribeMail = !0, a.isCheckingAutoDiscount = !1, console.log(a.order), a.enableInternerBanking = !1, a.listBank = [], f = "https://api.ticketbox.dev", -1 < window.location.host.indexOf("ticketbox.vn") && (f = "https://api-movie.ticketbox.vn"), 
    // $.ajax({
    //     url: f + "/v2/payment/methods?id=domestic_card",
    //     type: "GET",
    //     headers: {
    //         "x-tb-access-token": m("TBoxJWT")
    //     },
    //     error: function(e) {
    //         console.log({
    //             errorGetListBank: e
    //         })
    //     },
    //     success: function(e) {
    //         e && e.data && e.data.options && e.data.options.length && (a.enableInternerBanking = !0, a.listBank = e.data.options)
    //     }
    // })
    e = theATM;
    e && e.data && e.data.options && e.data.options.length && (a.enableInternerBanking = !0, a.listBank = e.data.options)

    , a.clickItemBank = function(e, t) {
        for (var n = document.getElementsByClassName("item-bank"), o = 0; o < n.length; o++) n[o].classList.remove("bank-selected");
        document.getElementsByClassName("item-bank")[e].classList.add("bank-selected"), a.selectBank(t), a.bankSelected = t, a.notBankSelected = !1, a.isInternetBankingInterrupted = !1
    }, a.openPaymentNote = function(e) {
        var e = "." + e,
            t = $(e).attr("href");
        $(t).collapse("toggle"), $(e).hasClass("rectangle") ? $(e).removeClass("rectangle") : $(e).addClass("rectangle")
    }, a.paymentMethodDisabledTooltip = function(e) {
        if (!e.length) return null;
        r(e).then(function(e) {
            return '<div class="warning-tooltip padding-10 rounded color-6"><table class="w-100"><tbody class="w-100"><tr><td width="20"><i class="ello-attention"></i></td><td>' + e + "</td></tr></tbody></table></div>"
        })
    }, a.selectCity = function() {}, a.selectDistrict = function() {}, a.selectWard = function() {
        a.submitStep2Clicked = !1
    }, a.checkCityFirst = function() {}, a.goToStep3 = function() {
        o.path("/step3")
    }, a.checkAndApplyAutoDiscount = function() {
        var e;
        a.event.hasAutomaticDiscount && a.order.paymentInfo.paymentType && (a.order.discount.discountCode && !a.order.discount.isAutomatedDiscount || (a.isCheckingAutoDiscount = !0, e = {
            showingId: a.event.currentShowing.id,
            paymentType: a.order.paymentInfo.paymentType,
            discountId: 1
        }, t.checkAutoDiscount(e).then(function(e) {
            a.order.discount.discountCode = e, a.doApplyDiscountCode({
                errorCallback: function() {
                    a.order.discount.discountCode = null
                }
            })
        }, function() {
            a.order.discount.discountCode && a.order.discount.isAutomatedDiscount && a.doCancelDiscountCode()
        }).finally(function() {
            a.isCheckingAutoDiscount = !1
        })))
    }, a.selectPaymentType = function(e) {
        console.log('selectPaymentType: ', e)
        switch (e) {
            case PAYMENT_TYPE.COD:
                if (a.event.paymentMethods.cashOnDelivery) break;
                return;
            case PAYMENT_TYPE.OfficePickup:
                if (a.event.paymentMethods.officePickup) break;
                return;
            case PAYMENT_TYPE.ATM:
                if (a.event.paymentMethods.internetBanking) break;
                return;
            case PAYMENT_TYPE.CreditCard:
                if (a.event.paymentMethods.creditCard) break;
                return;
            case PAYMENT_TYPE.Payoo:
                if (a.event.paymentMethods.payoo) break;
                return;
            case PAYMENT_TYPE.One23:
                if (a.event.paymentMethods.one23) break;
                return;
            case PAYMENT_TYPE.Omise:
                if (a.event.paymentMethods.omise) break;
                return;
            case PAYMENT_TYPE.BankTransfer:
                if (a.event.paymentMethods.bankTransfer) break;
                return;
            case PAYMENT_TYPE.Cybersource:
                if (a.event.paymentMethods.cybersource) break;
                return;
            case PAYMENT_TYPE.InternetBanking:
                if (a.event.paymentMethods.internetBanking) break;
                return;
            case PAYMENT_TYPE.Moca:
                if (a.event.paymentMethods.moca) break;
                return;
            case PAYMENT_TYPE.Momo:
                if (a.event.paymentMethods.momo) break;
                return;
            case PAYMENT_TYPE.TwoC2P:
                if (a.event.paymentMethods.twoC2P) break;
                return;
            case PAYMENT_TYPE.TwoC2PAlipayUnionPay:
                break;
            default:
                return
        }
        a.order.paymentInfo.paymentType = e, a.recalculateDistrictDeliveryFee(), a.updateDeliveryFee(), a.calculateOrderDetail(), a.recalculate(), a.checkAndApplyAutoDiscount(), a.setMessageLimitCodOp()
    }, a.fastDeliveryOption = 1, a.selectDeliveryOption = function(e) {
        1 == e ? a.fastDeliveryOption = 1 : (a.fastDeliveryOption = 2, tkb.tracking.trackCustom({
            eventCategory: "Ticket Booking",
            eventAction: "select fast delivery in 12 hours"
        }))
    }, a.recalculateDistrictDeliveryFee = function() {
        a.$parent.deliveryDistricts.forEach(function(e, t) {
            e.calculatedFee = a.calculateDeliveryFee(e)
        })
    }, a.selectBank = function(e) {
        a.order.paymentInfo.internetBankingInfo = a.order.paymentInfo.internetBankingInfo || {}, e.bank_code != a.order.paymentInfo.internetBankingInfo.bankCode && (a.order.paymentInfo.internetBankingInfo.bankCode = e.bank_code, a.order.paymentInfo.internetBankingInfo.bankName = e.name)
    }, a.selectCounterOne23 = function(e) {
        a.order.paymentInfo.one23Info = a.order.paymentInfo.one23Info || {}, a.order.paymentInfo.one23Info.counter = a.order.paymentInfo.one23Info.counter || {}, e != a.order.paymentInfo.one23Info.counter.counterCode && (e = _.find(a.COUNTER_LIST_ONE23, {
            counterCode: e
        })) && (a.order.paymentInfo.one23Info.counter = e)
    }, a.selectUnipayOrAlipay = function(e) {
        e == TwoC2P_TYPE.Alipay ? a.order.paymentInfo.unipayAlipayInfo.paymentChannel = TwoC2P_TYPE.Alipay : e == TwoC2P_TYPE.UnionPay ? a.order.paymentInfo.unipayAlipayInfo.paymentChannel = TwoC2P_TYPE.UnionPay : a.order.paymentInfo.unipayAlipayInfo.paymentChannel = ""
    };
    var e = function() {
            var e = !1,
                t = a.order.buyerInfo;
            return a.confirmEmail = document.getElementById("confirmEmail").value, !(e = t && t.firstName && t.lastName && t.email && t.phoneNumber && a.confirmEmail == t.email ? e : !0)
        },
        u = function() {
            function e() {
                r.deliveryInfo && r.deliveryInfo.address && r.deliveryInfo.cityId && r.deliveryInfo.districtId || (r.deliveryInfo.address || (a.invalidDeliveryAddress = !0), o = !0)
            }
            var t, n, o = !1,
                r = a.order.paymentInfo;
            if (r && r.paymentType) switch (r.paymentType) {
                case a.PAYMENT_TYPE.ATM:
                    r.internetBankingInfo && r.internetBankingInfo.bankCode || (o = !0), a.event.hasPhysicalItem && e();
                    break;
                case a.PAYMENT_TYPE.CreditCard:
                case a.PAYMENT_TYPE.Cybersource:
                    a.event.hasPhysicalItem && e();
                    break;
                case a.PAYMENT_TYPE.COD:
                    e();
                    break;
                case a.PAYMENT_TYPE.OfficePickup:
                    a.order.officeId || (o = !0);
                    break;
                case a.PAYMENT_TYPE.Free:
                case a.PAYMENT_TYPE.Payoo:
                    break;
                case a.PAYMENT_TYPE.One23:
                    r.one23Info || (o = !0), a.event.hasPhysicalItem && e();
                    break;
                case a.PAYMENT_TYPE.BankTransfer:
                    break;
                case a.PAYMENT_TYPE.Omise:
                    a.omiseCardInfo || (n = a.order.paymentInfo.omiseInfo) && n.card && n.card.holder_name && n.card.card_number && n.card.expiration_month && n.card.expiration_year && n.card.security_code || (o = !0, s(document.querySelector(".omise-detail"))), a.event.hasPhysicalItem && e();
                    break;
                case a.PAYMENT_TYPE.InternetBanking:
                case a.PAYMENT_TYPE.Moca:
                case a.PAYMENT_TYPE.Momo:
                    a.event.hasPhysicalItem && e();
                    break;
                case a.PAYMENT_TYPE.TwoC2P:
                    a.event.hasPhysicalItem && e(), a.TwoC2PCardInfo || (n = a.order.paymentInfo.twoC2PInfo) && n.card && n.card.holder_name && n.card.card_number && n.card.expiration_month && n.card.expiration_year && n.card.security_code || (o = !0);
                    break;
                case a.PAYMENT_TYPE.TwoC2PAlipayUnionPay:
                    a.event.hasPhysicalItem && e(), (t = a.order.paymentInfo.unipayAlipayInfo) && t.paymentChannel || (o = !0);
                    break;
                default:
                    o = !0
            } else o = !0;
            return !o
        },
        l = function() {
            var e = !1;
            return a.order.receiveIdCardNumber || a.order.receiveMethod != RECEIVE_METHOD.PhysicalEntrance || (e = !0), a.order.paymentInfo.deliveryInfo.address_deliver || a.order.paymentInfo.deliveryInfo.sub_district || a.order.paymentInfo.deliveryInfo.district || a.order.paymentInfo.deliveryInfo.city || a.order.paymentInfo.deliveryInfo.post_code || a.order.receiveMethod != RECEIVE_METHOD.Delivery || (e = !0), !(e = null == a.order.receiveMethod ? !0 : e)
        };

    function p() {
        return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
    }

    function y() {
        return -1 < navigator.userAgent.toLowerCase().indexOf("android")
    }
    a.LimitPaymentArr = [PAYMENT_TYPE.COD, PAYMENT_TYPE.OfficePickup], a.isPaymentMethodInvalid = function(e) {
        return !!(void 0 !== a.order && 0 == a.order.canByPassLimitAmount && a.LimitPaymentArr.includes(e) && a.order.finalAmount >= a.order.limitAmount)
    }, a.isDisabledSubmitBtn = function() {
        return a.isPaymentMethodInvalid(a.order.paymentInfo.paymentType)
    }, a.isCheckRequiredSubmit = function() {
        return e() && a.validatePhoneNumber() && a.validateUserEmail() ? u() && l() ? !(a.PAYMENT_TYPE.InternetBanking == a.order.paymentInfo.paymentType && !a.bankSelected) || (document.getElementById("payment-info").scrollIntoView({
            behavior: "smooth"
        }), a.messageAlertErrorInternetBanking = r.instant("T.STEP2.PLEASE_CHOOSE_BANK_TO_PAYMENT"), a.notBankSelected = !0, a.submitting = !1) : (a.submitting = !1, a.validatePhoneNumber(), a.validateUserEmail(), !1) : (a.submitting = !1, a.validatePhoneNumber(), a.validateUserEmail(), document.getElementById("informationForm").scrollIntoView({
            behavior: "smooth"
        }), !1)
    }, a.reviewOrder = function() {
        a.submitStep2Clicked = !0, a.submitting || (a.submitting = !0, a.isCheckRequiredSubmit() && (a.submitting = !1, a.toggleReviewOrder()))
    }, a.toggleReviewOrder = function() {
        a.reviewingOrder = !a.reviewingOrder
    }, a.autoSubmitBuyerInfo = function() {}, a.submitOne23Form = function(e) {
        var t, n, o = document.createElement("form");
        for (t in o.method = "POST", o.action = tkb.data.one23SubmitPath, e) e.hasOwnProperty(t) && e[t] && ((n = document.createElement("input")).setAttribute("type", "text"), n.setAttribute("name", t), n.setAttribute("value", e[t]), o.appendChild(n));
        document.body.appendChild(o), o.submit()
    }, a.submitCybersourceForm = function(e) {
        var t, n, o = tkb.data.cyberSourceSubmitPath,
            r = document.createElement("form");
        for (t in r.setAttribute("method", "post"), r.setAttribute("action", o), e) e.hasOwnProperty(t) && ((n = document.createElement("input")).setAttribute("type", "text"), n.setAttribute("name", t), n.setAttribute("value", e[t]), r.appendChild(n));
        document.body.appendChild(r), r.submit()
    }, a.changeOmiseCard = function() {
        a.omiseCardInfo = ""
    }, a.showErrorPaymentPortalFailed = function() {
        a.order.paymentInfo.paymentType == PAYMENT_TYPE.InternetBanking && (a.messageAlertErrorInternetBanking = r.instant("T.STEP2.PAYMENT_METHOD_INTERRUPTED"), a.isInternetBankingInterrupted = !0), a.order.paymentInfo.paymentType == PAYMENT_TYPE.Momo && (a.isMomoInterrupted = !0), document.getElementById("payment-info").scrollIntoView({
            behavior: "smooth"
        }), a.submitting = !1, a.reviewingOrder = !1
    }, a.submitOrderData = function() {
        a.isInternetBankingInterrupted = !1, a.isMomoInterrupted = !1;
        var e = {
            buyerInfo: a.order.buyerInfo,
            subcribeMail: a.subcribeMail,
            paymentInfo: a.order.paymentInfo,
            officeId: a.order.officeId,
            receivingMethod: {
                receivingMethod: a.order.receiveMethod,
                idCardNumber: a.order.receiveIdCardNumber,
                addressDeliver: a.order.paymentInfo.deliveryInfo.address_deliver,
                subDistrictName: a.order.paymentInfo.deliveryInfo.sub_district,
                districtName: a.order.paymentInfo.deliveryInfo.district,
                cityName: a.order.paymentInfo.deliveryInfo.city,
                postCodeDelivery: a.order.paymentInfo.deliveryInfo.post_code,
                noteDeliver: a.order.paymentInfo.deliveryInfo.note
            }
        };
        t.submitOrder(a.event.id, tkb.data.showingId, e, a.showErrorPaymentPortalFailed).then(function(e) {
           
            if (a.submitting = !1, Ladda.stopAll(), a.pushDataToGTM(), a.order.paymentInfo.paymentType == PAYMENT_TYPE.Momo && "tiki" == e.merchant) 
                t = e, a.finalAmountFromApi = t.finalAmount ? new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND"
                }).format(t.finalAmount) : 0, 

                // p() || y() 
                //     ? (window.localStorage.removeItem(c), window.sessionStorage.removeItem("page_available" + c), n.location.href = t.redirectUrl) 
                //     : (Ladda.stopAll(), a.resTransactionIdMomo = t.merchantTransactionID, a.linkRenderQr = t.redirectUrl, a.toggleOpenModalMomo()); // TODO: SUBMIT hear
                    
                    a.toggleOpenModalMomo(); // TODO: SUBMIT hear
            
            // else if (4 === e.submitType) {
            //     Ladda.stopAll();
            //     t = e.data, t = JSON.stringify(t);
            //     try {
            //         webkit.messageHandlers.momoPaymentV2.postMessage(t), 0
            //     } catch (e) {}
            //     try {
            //         AndroidFunction.momoPaymentV2(t), 0
            //     } catch (e) {}
            // } 
            // else 
            
                // e.redirectUrl 
                //     ? (window.localStorage.removeItem(c), window.sessionStorage.removeItem("page_available" + c), n.location.href = e.redirectUrl) 
                //     : 
                    // e.cybersourcePaymentRequest 
                    //     ? a.submitCybersourceForm(e.cybersourcePaymentRequest) : e.one23PaymentRequest ? (a.submitOne23Form(e.one23PaymentRequest), a.execEmaticProducts("convert")) : a.order.paymentInfo.paymentType != a.PAYMENT_TYPE.TwoC2P && a.order.paymentInfo.paymentType != a.PAYMENT_TYPE.TwoC2PAlipayUnionPay || 1 != e.twoC2PResponse ? a.order.paymentInfo.paymentType == a.PAYMENT_TYPE.Free || a.order.paymentInfo.paymentType == a.PAYMENT_TYPE.InternetBanking || a.order.paymentInfo.paymentType == a.PAYMENT_TYPE.Cybersource || a.order.paymentInfo.paymentType == a.PAYMENT_TYPE.BankTransfer || a.order.paymentInfo.paymentType == a.PAYMENT_TYPE.COD || a.order.paymentInfo.paymentType == a.PAYMENT_TYPE.OfficePickup ? o.path("/thank-you/" + e.orderCode) : (a.order = new tkb.model.Order(e), a.order.paymentInfo.paymentType == a.PAYMENT_TYPE.One23 ? autosubmitOne23Form(a.order.paymentInfo.one23Info.encryptedData) : o.path("/thank-you/" + a.order.orderCode)) : 
                        
                    //     ($("input[name='orderPaymentId']").val(e.orderPaymentId), 
                    //         $("input[name='eventId']").val(tkb.data.eventId), 
                    //         $("input[name='showingId']").val(tkb.data.showingId), 
                    //         a.order.paymentInfo.paymentType == a.PAYMENT_TYPE.TwoC2PAlipayUnionPay && $("#step2-form").unbind("submit"), $("#step2-form").submit());
            
            
            var t
        }, function(e) {
            a.submitting = !1
        }).finally(function() {})
    }, a.submitOrder = function() {
        a.submitStep2Clicked = !0, a.submitting || a.isCheckingAutoDiscount || (a.submitting = !0, 2 == a.fastDeliveryOption ? (d.openSimpleModal({
            size: "sm",
            title: r.instant("T.STEP2.DELIVERY_MESS.SORRY"),
            message: r.instant("T.STEP2.DELIVERY_MESS.DETAIL"),
            okButtonText: "Ok",
            ok: function(e) {
                i(e, 0)
            }
        }), a.submitting = !1) : a.isCheckRequiredSubmit() && (a.clearValidationErrors(), tkb.tracking.trackCustom({
            eventCategory: "Ticket Booking",
            eventAction: "submit step buyer info & payment method"
        }), 
        setTimeout(function() {
            var e;
            a.order.paymentInfo.paymentType != a.PAYMENT_TYPE.Omise || a.omiseCardInfo && "" != a.omiseCardInfo ? (a.event.isUsePickupFlowForFreeTickets, a.submitOrderData()) : (Omise.setPublicKey(tkb.data.omisePublicKey), e = {
                name: a.order.paymentInfo.omiseInfo.card.holder_name,
                number: a.order.paymentInfo.omiseInfo.card.card_number,
                expiration_month: a.order.paymentInfo.omiseInfo.card.expiration_month,
                expiration_year: a.order.paymentInfo.omiseInfo.card.expiration_year,
                security_code: a.order.paymentInfo.omiseInfo.card.security_code
            }, t.omiseCheckCreateToken(e).then(function(e) {
                a.order.paymentInfo.omiseInfo.omiseToken = e.id, a.submitOrderData()
            }, function(e) {
                "invalid_card" == e.code ? d.openSimpleModal({
                    size: "sm",
                    title: r.instant("T.STEP2.ERROR.OMISE_ERROR_TITLE"),
                    message: r.instant("T.STEP2.ERROR.OMISE_INVALID_CARD"),
                    okButtonText: r.instant("T.STEP2.ERROR.OMISE_OK_BTN"),
                    ok: function(e) {
                        i(e, 0)
                    }
                }) : d.openSimpleModal({
                    size: "sm",
                    title: "Error!",
                    message: e.message,
                    okButtonText: "Ok",
                    ok: function(e) {
                        i(e, 0)
                    }
                }), a.submitting = !1
            }))
        }, 100)
    ))
    }, a.pushDataToGTM = function() {
        try {
            var e = a.order.orderDetails.map(function(e) {
                return {
                    name: a.event.title,
                    category: a.event.categoryNameEn,
                    id: a.event.id,
                    price: e.unitPrice,
                    brand: a.event.organizerName,
                    variant: e.ticketType.title + "-" + e.ticketType.id,
                    quantity: e.quantity
                }
            });
            window.dataLayer && dataLayer.push({
                event: "checkout",
                ecommerce: {
                    checkout: {
                        actionField: {
                            step: 1,
                            option: Object.entries(PAYMENT_TYPE).filter(function(e) {
                                return e[1] == a.order.paymentInfo.paymentType
                            })[0][0]
                        },
                        products: e
                    }
                }
            })
        } catch (e) {}
    };
    var f;
    tkb && tkb.data && tkb.data.eventId && 71054 === tkb.data.eventId && ((f = document.createElement("script")).src = tkb.siteSetting.staticDomain + "/static-page/landingpages/quest-festival/js/fbpixel-step2.js", document.getElementsByTagName("head")[0].appendChild(f), (f = document.createElement("noscript")).innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=392637677757582&ev=PageView&noscript=1" />', document.getElementsByTagName("head")[0].appendChild(f)), a.isOpenModalMomo = !1, 
    a.toggleOpenModalMomo = function() {
        a.isOpenModalMomo = !a.isOpenModalMomo
    }, a.$watch("isOpenModalMomo", function() {
        if (1 == a.isOpenModalMomo) {
            setTimeout(function() {
                function t(e) {
                    return e <= 9 ? "0" + e : e
                }
                // var imgCK = new Image();
                // imgCK.src = imageCK;
                // imgCK.width = 50;
                // imgCK.height = 50;

                let imgQR = document.getElementById("qrcode");
                imgQR.src = imageCK;
                imgQR.style.width = "200px";
                imgQR.style.height = "auto";


                var e, n, o, r;
                e = 3, n = 0, o = +new Date + 1e3 * (60 * e + n) + 500,
                    function e() {
                        (r = o - +new Date) < 1e3 ? a.toggleOpenModalMomo() : (r = new Date(r), r.getUTCMinutes(), document.getElementById("minutes-value").innerHTML = t(r.getUTCMinutes()), document.getElementById("seconds-value").innerHTML = t(r.getUTCSeconds()), setTimeout(e, r.getUTCMilliseconds() + 500))
                    }()
                    // , 
                    // new QRious({
                    //     element: document.getElementById("qrcode"),
                    //     background: "#ffffff",
                    //     backgroundAlpha: 1,
                    //     foreground: "#000000",
                    //     foregroundAlpha: 1,
                    //     level: "H",
                    //     padding: 10,
                    //     size: 220,
                    //     value: imageCK
                    // })

                    // testing...
                    // imgCK.onload = function() {
                    //     let canvas = document.getElementById("qrcode");
                    //     let context = canvas.getContext('2d');
                    //     // canvas.width = imgCK.width;
                    //     // canvas.height = imgCK.height;
                    //     canvas.width = 220;
                    //     canvas.height = 220;
                    //     context.drawImage(imgCK, 0, 0);
                    // };

                    

            }, 100);
            // var e = "https://api.ticketbox.dev"; - 1 < window.location.host.indexOf("ticketbox.vn") && (e = "https://api-movie.ticketbox.vn");
            // const t = function() {
            //     $.ajax({
            //         url: e + "/v2/payment/status?id=" + a.resTransactionIdMomo + "&method=momo",
            //         type: "GET",
            //         headers: {
            //             "x-tb-access-token": m("TBoxJWT")
            //         },
            //         error: function(e) {
            //             console.log({
            //                 errorCallMomo: e
            //             }), setTimeout(function() {
            //                 t()
            //             }, 2e3)
            //         },
            //         success: function(e) {
            //             e && e.data && e.data.status && e.data.redirect_url ? window.location.href = e.data.redirect_url : setTimeout(function() {
            //                 t()
            //             }, 2e3)
            //         }
            //     })
            // };
            // t()
        } else console.log(1111)
    })
};
step2Controller.$inject = ["$scope", "$window", "$location", "$translate", "ticketBookingService", "$timeout", "modalService", "smoothScroll"];
var thankYouController = function(r, e, t, o, n, i, d) {
    function a(e) {
        switch (e) {
            case PAYMENT_TYPE.Cybersource:
                return "cybersource";
            case PAYMENT_TYPE.InternetBanking:
                return "internet banking";
            case PAYMENT_TYPE.Momo:
                return "momo";
            case PAYMENT_TYPE.Free:
                return "free";
            default:
                return "Undefined"
        }
    }
    tkb.cookie.removeItem("k-" + tkb.data.showingId), r.$parent.bookingStep = BOOKING_STEP.thankYou, r.snapperContent.scrollTop = 0, r.coverUrl = "", r.orderCode = e.orderCode, r.orderCode || n.path("/step-select-tickets"), i.getOrderConfirmedInfo(tkb.data.eventId, tkb.data.showingId, r.orderCode).then(function(o) {
        var e;
        if ("undefined" != typeof bookingOnTKBApp && bookingOnTKBApp) return e = JSON.stringify(o.oldModel), d = JSON.stringify(o.newModel), "undefined" != typeof isTKBApp ? "ios" == isTKBApp.os ? (void 0 !== webkit.messageHandlers.bookingWebViewSuccessful && webkit.messageHandlers.bookingWebViewSuccessful.postMessage(e), void 0 !== webkit.messageHandlers.newBookingWebViewSuccessful && webkit.messageHandlers.newBookingWebViewSuccessful.postMessage(d)) : "android" == isTKBApp.os && (void 0 !== AndroidFunction.bookingWebViewSuccessful && AndroidFunction.bookingWebViewSuccessful(e), void 0 !== AndroidFunction.newBookingWebViewSuccessful) && AndroidFunction.newBookingWebViewSuccessful(d) : "undefined" != typeof AndroidFunction && (void 0 !== AndroidFunction.bookingWebViewSuccessful && AndroidFunction.bookingWebViewSuccessful(e), void 0 !== AndroidFunction.newBookingWebViewSuccessful) && AndroidFunction.newBookingWebViewSuccessful(d), !0;
        void 0 !== r.event && void 0 !== r.event.isShowAwardPopup && 1 == r.event.isShowAwardPopup && tkb.cookie.removeItem("award-code-" + r.event.id + "-" + tkb.data.showingId), r.confirmedOrder = (o.oldModel || o).order, r.confirmedEvent = (o.oldModel || o).event, r.suggestedEvents = (o.oldModel || o).suggestedEvents, r.coverUrl = r.confirmedEvent.coverUrl, r.confirmedOrder && (r.confirmedOrder.officeId && (r.order.officeId = r.confirmedOrder.officeId), e = 1 != r.confirmedOrder.userId && !r.confirmedOrder.gaEcommerceTrackingSent && -1 == r.confirmedOrder.buyerInfo.email.indexOf("ticketbox.vn"), c(r.confirmedEvent, r.confirmedOrder), e && (s(r.confirmedEvent, r.confirmedOrder), window.special_goog_report_conversion) && window.special_goog_report_conversion(), r.confirmedOrder.paymentInfo.paymentType == PAYMENT_TYPE.One23) && (r.counter = _.find(COUNTER_LIST_ONE23, {
            counterCode: r.confirmedOrder.paymentInfo.one23Info.counter.counterCode
        }), console.log(r.counter)), r.suggestedEventGroups = l(r.suggestedEvents), r.execEmaticProducts("convert", r.confirmedOrder), u(o), r.isProcessOrder = 2 === o.newModel.order_status, r.isFailOrder = 31 === o.newModel.order_status;
        for (var n = [{
                id: 0,
                name: "All categories"
            }, {
                id: 2,
                name: "Conference"
            }, {
                id: 3,
                name: "Exhibitions"
            }, {
                id: 4,
                name: "Courses"
            }, {
                id: 5,
                name: "Meetups"
            }, {
                id: 6,
                name: "Sport"
            }, {
                id: 7,
                name: "Community"
            }, {
                id: 8,
                name: "Live music"
            }, {
                id: 9,
                name: "Art Culture"
            }, {
                id: 10,
                name: "Theater & Play"
            }, {
                id: 11,
                name: "Nightlife"
            }, {
                id: 12,
                name: "Outdoor"
            }, {
                id: 13,
                name: "Attractions"
            }, {
                id: 17,
                name: "Online Event"
            }], t = "", i = 0; i < n.length; i++) n[i].id == o.newModel.categoryId && (t = n[i].name);
        var d = o.oldModel.order.orderDetails.map(function(e) {
            return {
                item_name: o.oldModel.event.title,
                item_id: o.oldModel.event.id,
                price: e.unitPrice,
                item_brand: o.oldModel.event.organizerName,
                item_category: o.oldModel.event.categoryNameEn,
                item_variant: e.ticketTypeTitle + "-" + e.ticketTypeId,
                quantity: e.quantity
            }
        });
        sessionStorage.setItem("paramsPurchase", JSON.stringify({
            transaction_id: o.newModel.order_number,
            event_name: o.oldModel.event.title,
            event_id: o.oldModel.event.id,
            category_name: t,
            value: o.newModel.total,
            total_discount: o.newModel.total_discount,
            payment_method: a(o.newModel.payment_type),
            delivery_fee: o.newModel.delivery_fee,
            items: d,
            currency: "VND",
            coupon: ""
        }))
    }, function(e) {
        o.location.href = "/event/" + tkb.data.eventId + "/ticket-booking/" + tkb.data.showingId
    }).finally(function() {}), setTimeout(function() {
        var e = window.tkb.data.eventId + "-" + window.tkb.data.showingId;
        window.localStorage.removeItem(e), window.sessionStorage.removeItem("page_available" + e)
    }, 1e3), r.printBill = function() {
        var o, e = '<html><head><style media="print" type="text/css">body { padding-top: 40px; padding-left: 40px;} body, table {font-size: 18px;} table { border-collapse: collapse;}  td, th { padding: 10px; text-align: left;}</style></head><body onload="window.print()">' + document.getElementById("one23printout").innerHTML + "</html>";
        return -1 < navigator.userAgent.toLowerCase().indexOf("chrome") ? ((o = window.open("", "_blank", "width=600,height=600,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no")).window.focus(), o.document.write(e), o.onbeforeunload = function(e) {
            return o.close(), ".\n"
        }, o.onabort = function(e) {
            o.document.close(), o.close()
        }) : ((o = window.open("", "_blank", "width=800,height=600")).document.open(), o.document.write(e), o.document.close()), o.document.close(), !0
    }, r.addToCalendarPopover = function() {
        var e, o, n;
        return r.event ? (e = tkb.data.eventId, o = t("date")(r.event.currentShowing.startTime, "yyyyMMddTHHmmss", "UTC") + "Z", n = t("date")(r.event.currentShowing.endTime, "yyyyMMddTHHmmss", "UTC") + "Z", '<div class="calendar-popover rounded bg-white box-shadow"><div class="w-100 text-left font-600"><a href="' + ("//www.google.com/calendar/event?action=TEMPLATE&text=" + encodeURIComponent(r.event.title) + "&dates=" + o + "/" + n + "&details=&location=" + encodeURIComponent(r.event.venue.title) + "," + encodeURIComponent(r.event.venue.address)) + '" target="_blank"><i class="ello-google-calendar"></i>Google calendar</a><a href="/event/ical/' + e + '"> <i class="ello-ical"></i>iCal</a><a href="/event/ical/' + e + '"> <i class="ello-outlook"></i>Outlook calendar</a></div></div>') : ""
    }, r.shareToFacebook = function() {
        ga && ga("send", "event", "Facebook", "Post To Facebook Button Clicked", r.confirmedEvent.title), d.login().then(function(e) {
            d.ui({
                method: "feed",
                name: r.confirmedEvent.title,
                link: r.confirmedEvent.fullUrl,
                picture: r.confirmedEvent.fullLogoUrl
            }, function(e) {
                ga && ga("send", "event", "Facebook", "Post To Facebook", r.confirmedEvent.title)
            })
        }, {
            scope: "publish_actions"
        })
    };
    var c = function(o, e) {
            try {
                var n = e.orderDetails.map(function(e) {
                    return {
                        name: o.title,
                        id: o.id,
                        price: e.unitPrice,
                        brand: o.organizerName,
                        category: o.categoryNameEn,
                        variant: e.ticketTypeTitle + "-" + e.ticketTypeId,
                        quantity: e.quantity
                    }
                });
                window.dataLayer && dataLayer.push({
                    event: "productPurchase",
                    ecommerce: {
                        purchase: {
                            actionField: {
                                id: e.id,
                                revenue: e.finalAmount,
                                tax: 0,
                                shipping: e.deliveryFee || 0,
                                affiliation: void 0,
                                coupon: void 0
                            },
                            products: n
                        }
                    }
                })
            } catch (e) {}
        },
        s = function(o) {
            d.api("me/ticketboxvn:buy_tickets_for", "post", {
                event: o.fullUrl
            }, function(e) {
                e && e.id && ga && ga("send", "event", "Facebook", "Publish Action", "Buy tickets for " + o.title)
            })
        },
        l = function(e) {
            for (var o, n = [], t = 0; t < e.length; t++) t % 3 == 0 && ((o = []).push(e[t]), void 0 !== e[t + 1] && o.push(e[t + 1]), void 0 !== e[t + 2] && o.push(e[t + 2]), n.push(o));
            return n
        },
        u = function(e) {
            var o;
            tkb && tkb.data && tkb.data.eventId && 71054 === tkb.data.eventId && ((o = document.createElement("script")).src = tkb.siteSetting.staticDomain + "/static-page/landingpages/quest-festival/js/fbpixel-confirmation.js?amount=" + e.newModel.total, document.getElementsByTagName("head")[0].appendChild(o), (e = document.createElement("noscript")).innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=392637677757582&ev=PageView&noscript=1" />', document.getElementsByTagName("head")[0].appendChild(e))
        }
};
thankYouController.$inject = ["$scope", "$routeParams", "$filter", "$window", "$location", "ticketBookingService", "$facebook"];
var fillInfoController = function(a, e, r, o, n, i, c, t) {
    a.$parent.bookingStep = BOOKING_STEP.stepCreditCard, a.snapperContent.scrollTop = 0, a.submitFillInfoClicked = !1, a.submitting = !1, a.expirationDateUnCorrectFormat = !1, a.isValidateCreditCardNumber = !0;

    function d() {
        var e;
        a.$parent.order && a.$parent.event ? (a.$parent.order.paymentInfo && a.$parent.order.paymentInfo.cybersourceInfo && a.$parent.order.paymentInfo.cybersourceInfo.returnCode ? (a.order = a.$parent.order, a.event = a.$parent.event) : (a.order = a.$parent.order, a.event = a.$parent.event, e = a.order.buyerInfo, a.order.paymentInfo.cybersourceInfo.billingInfo = {
            email: e.email,
            phone: e.phoneNumber
        }), a.checkShowExtendedField(), a.prefillData(), a.order.paymentInfo && (!a.order.paymentInfo || a.order.paymentInfo.paymentType) || a.goToSelectTicketsStep()) : r(d, 50)
    }
    var s, f = !(a.languageIsChanged = !1),
        u = (a.generateCountries = function() {
            1 == a.languageIsChanged && (a.order.paymentInfo.cybersourceInfo.billingInfo.country = ""), a.countries = [], r(function() {
                COUNTRIES.forEach(function(e, r, n) {
                    var t = o.instant("T.STEP2.COUNTRY_LIST." + e);
                    a.countries.push({
                        name: t,
                        value: e
                    })
                })
            }, 200), a.checkShowExtendedField()
        }, a.generateStates = function(e) {
            a.order.paymentInfo.cybersourceInfo.billingInfo.state = "", a.states = [], "US" == e ? r(function() {
                US_STATES.forEach(function(e, r, n) {
                    var t = o.instant("T.STEP2.US_STATES." + e);
                    a.states.push({
                        name: t,
                        value: e
                    })
                })
            }, 200) : "CA" == e && r(function() {
                CA_STATES.forEach(function(e, r, n) {
                    var t = o.instant("T.STEP2.CA_STATES." + e);
                    a.states.push({
                        name: t,
                        value: e
                    })
                })
            }, 100)
        }, a.$on("languageChanged", function(e, r) {
            a.languageIsChanged = !0, a.generateCountries()
        }), a.checkShowExtendedField = function() {
            a.order.paymentInfo.cybersourceInfo.showExtendedField = !1;
            var e = a.order && a.order.paymentInfo && a.order.paymentInfo.cybersourceInfo ? a.order.paymentInfo.cybersourceInfo.billingInfo.country : "";
            a.order.paymentInfo.cybersourceInfo.showExtendedField = "US" == e || "CA" == e, a.notSelectedCountry = !1, e || (a.notSelectedCountry = !0), "US" != e && "CA" != e || (a.generateStates(e), a.order.paymentInfo.cybersourceInfo.billingInfo.state) || (a.order.paymentInfo.cybersourceInfo.billingInfo.state = "", a.notSelectedState = !0)
        }, a.changeCountry = function() {
            a.checkShowExtendedField()
        }, a.changeState = function() {
            a.notSelectedState = !1, a.order.paymentInfo.cybersourceInfo.billingInfo.state || (a.notSelectedState = !0)
        }, a.cancel = function() {
            n.path("/step2")
        }, 0);
    a.payment = function() {
        var e, r, n, t;
        1 == ++u && 1 == a.submitFillInfoClicked && 1 == a.notSelectedState && (a.notSelectedState = !1), a.submitFillInfoClicked = !0, 0 == (e = !1, (r = a.order.paymentInfo.cybersourceInfo) ? (n = r.billingInfo, t = r.card, n && n.address && n.city && n.country && n.email && n.phone && (1 != r.showExtendedField || n.state && n.zipCode) && t && t.expirationDate && t.number && t.securityCode || (e = !0, c(document.querySelector(".cybersource-detail")), a.changeExpirationDate())) : e = !0, !e) || 0 == a.validateBillingInfoPhone() || 0 == a.validateBillingInfoEmail() ? (a.validateBillingInfoPhone(), a.validateBillingInfoEmail(), a.checkShowExtendedField()) : (n = (n = (r = angular.copy(a.order.paymentInfo)).cybersourceInfo.card.number).replace(/[, ]/g, "").trim(), r.cybersourceInfo.card.number = n.substring(0, 6) + "xxxxxx" + n.substring(12), delete r.cybersourceInfo.card.expirationDate, delete r.cybersourceInfo.card.expirationYear, delete r.cybersourceInfo.card.expirationMonth, t = {
            buyerInfo: a.order.buyerInfo,
            subcribeMail: a.subcribeMail,
            paymentInfo: r,
            officeId: a.order.officeId,
            receivingMethod: {
                receivingMethod: a.order.receiveMethod,
                idCardNumber: a.order.receiveIdCardNumber,
                addressDeliver: a.order.paymentInfo.deliveryInfo.address_deliver,
                subDistrictName: a.order.paymentInfo.deliveryInfo.sub_district,
                districtName: a.order.paymentInfo.deliveryInfo.district,
                cityName: a.order.paymentInfo.deliveryInfo.city,
                postCodeDelivery: a.order.paymentInfo.deliveryInfo.post_code,
                noteDeliver: a.order.paymentInfo.deliveryInfo.note
            }
        }, a.submitting = !0, i.submitOrder(a.event.id, tkb.data.showingId, t).then(function(e) {
            var r, n;
            e.cybersourceSOPPaymentRequest && (n = (r = a.order.paymentInfo).cybersourceInfo.card.number, e.cybersourceSOPPaymentRequest.card_number = n.replace(/[, ]/g, "").trim(), e.cybersourceSOPPaymentRequest.card_expiry_date = r.cybersourceInfo.card.expirationMonth + "-" + r.cybersourceInfo.card.expirationYear, e.cybersourceSOPPaymentRequest.card_cvn = r.cybersourceInfo.card.securityCode, a.submitCybersourceForm(e.cybersourceSOPPaymentRequest))
        }, function(e) {
            a.submitting = !1
        }).finally(function() {
            a.submitting = !1
        }))
    }, a.changeExpirationDate = function() {
        var e, r = new Date,
            n = r.getMonth() + 1,
            r = r.getFullYear(),
            t = /(\d{2})\/(\d{2})/,
            o = a.order.paymentInfo.cybersourceInfo.card.expirationDate;
        !o || !o.length || (e = o.trim(), a.expirationDateUnCorrectFormat = !t.test(o), a.expirationDateUnCorrectFormat) ? (a.order.paymentInfo.cybersourceInfo.card.expirationMonth = "", a.order.paymentInfo.cybersourceInfo.card.expirationYear = "") : (o = t.exec(e), a.order.paymentInfo.cybersourceInfo.card.expirationMonth = o[1], t = o[1], 2 == (e = o[2]).length && (e = "20" + e), a.order.paymentInfo.cybersourceInfo.card.expirationYear = e, t = t.replace(/^0+/, ""), t = parseInt(t), ((e = parseInt(e)) < r || 12 < t || t < n && e == r) && (a.expirationDateUnCorrectFormat = !0, a.order.paymentInfo.cybersourceInfo.card.expirationMonth = "", a.order.paymentInfo.cybersourceInfo.card.expirationYear = ""))
    }, a.submitCybersourceForm = function(e) {
        var r, n, t = tkb.data.cyberSourceSOPSubmitPath,
            o = document.createElement("form");
        for (r in o.setAttribute("method", "post"), o.setAttribute("action", t), e) e.hasOwnProperty(r) && ((n = document.createElement("input")).setAttribute("type", "text"), n.setAttribute("name", r), n.setAttribute("value", e[r]), o.appendChild(n));
        document.body.appendChild(o), o.submit()
    }, a.checkCreditCardType = function() {
        var e, r = a.order.paymentInfo.cybersourceInfo.card;
        r && r.number ? (e = r.number.substring(0, 6), i.checkBindListCreditCard(e).then(function(e) {
            e.card_type ? r.brand = e.card_type.name.toUpperCase() : r.brand = ""
        })) : (r = r || {}).brand = ""
    }, a.validateCreditCard = function() {
        var e = a.order.paymentInfo.cybersourceInfo.card;
        e && e.brand ? a.isValidateCreditCardNumber = !0 : a.isValidateCreditCardNumber = !1
    }, a.formatNumberDisplaying = function(e) {
        if (n = a.order.paymentInfo.cybersourceInfo.card.number) {
            for (var r = (n = (n = n.replace(/[, ]/g, "").trim()).split("."))[0], n = 1 < n.length ? "." + n[1] : "", t = /(\d{4})(\d+)/; t.test(r);) r = r.replace(t, "$1 $2");
            a.order.paymentInfo.cybersourceInfo.card.number = r + n
        }
    }, a.formatExiryDate = function() {
        var e = a.order.paymentInfo.cybersourceInfo.card.expirationDate;
        e && 1 == f && (e = (e = e.replace(/[\/ ]/g, "").trim()).replace(/(\d{2})/, "$1/"), a.order.paymentInfo.cybersourceInfo.card.expirationDate = e)
    }, a.allowBackspace = function(e) {
        f = !0, 8 === e.keyCode && (f = !1)
    }, a.preventSpace = function(e) {
        if (32 === e.keyCode) return e.preventDefault(), !1
    }, a.goToStep2 = function() {
        n.path("/step2")
    }, a.prefillData = function() {
        var e = (a.event.hasPhysicalItem ? a.order.paymentInfo.deliveryInfo : a.event.venue).cityId,
            r = a.event.hasPhysicalItem ? a.order.paymentInfo.deliveryInfo.address : "",
            r = (a.order.paymentInfo.cybersourceInfo.billingInfo || (a.order.paymentInfo.cybersourceInfo.billingInfo = {}), r && r.length <= 60 && (a.order.paymentInfo.cybersourceInfo.billingInfo.address = r), _.find(a.$parent.deliveryCities, {
                id: e
            }));
        r && (a.order.paymentInfo.cybersourceInfo.billingInfo.city = r.name), a.generateCountries()
    }, d();
    tkb && tkb.data && tkb.data.eventId && 71054 === tkb.data.eventId && ((s = document.createElement("script")).src = tkb.siteSetting.staticDomain + "/static-page/landingpages/quest-festival/js/fbpixel-checkout.js", document.getElementsByTagName("head")[0].appendChild(s), (s = document.createElement("noscript")).innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=392637677757582&ev=PageView&noscript=1" />', document.getElementsByTagName("head")[0].appendChild(s))
};
fillInfoController.$inject = ["$scope", "$sce", "$timeout", "$translate", "$location", "ticketBookingService", "smoothScroll", "modalService"];
var clockController = function(e, c, i, r, a, l) {
    e.$watch(function() {
        return e.$parent.remainingBookingTime
    }, function(n, o) {
        var t;
        n && ((t = new Date).setSeconds(t.getSeconds() + n), e.orderExpireTime = t), e.countdown = n, 0 < e.countdown && !isNaN(n) && (u(), e.$broadcast("timer-set-countdown", n), s())
    });
    var s = function() {
            n(), e.$broadcast("timer-start"), e.timerRunning = !0
        },
        u = function() {
            e.$broadcast("timer-stop"), e.timerRunning = !1
        },
        n = function() {
            var n = e.countdown % 60,
                o = Math.floor((e.countdown %= 3600) / 60);
            e.clock = {
                s: n,
                m: o,
                min: {
                    ten: {
                        play: !1,
                        prev: "0",
                        now: Math.floor(o / 10)
                    },
                    unit: {
                        play: !1,
                        prev: "0",
                        now: o % 10
                    }
                },
                sec: {
                    ten: {
                        play: !1,
                        prev: "0",
                        now: Math.floor(n / 10)
                    },
                    unit: {
                        play: !1,
                        prev: "0",
                        now: n % 10
                    }
                }
            }
        };
    e.$on("timer-tick", function(n, t) {
        e.$parent.bookingStep == BOOKING_STEP.thankYou ? e.$broadcast("timer-stop") : c(function() {
            var n = Math.floor(t.millis / 1e3),
                o = new Date;
            0 == n && o >= e.orderExpireTime && e.timerRunning && (a.resetOrder(e.$parent.order), r.openSimpleModal({
                size: "sm",
                title: l.instant("T.LAYOUT.BOOKINGTIMEOUT_TITLE"),
                message: l.instant("T.LAYOUT.BOOKINGTIMEOUT_DESCRIPTION"),
                icon: "bell",
                okButtonText: l.instant("T.LAYOUT.BOOKINGTIMEOUT_BTN"),
                ok: function(n) {
                    i.location.reload(), c(n, 0)
                }
            })), e.timerRunning && (e.clock.s = n % 60, e.clock.m = Math.floor(n % 3600 / 60), e.clock.sec.unit.now = e.clock.s % 10, e.clock.sec.ten.now = Math.floor(e.clock.s / 10), e.clock.min.unit.now = e.clock.m % 10, e.clock.min.ten.now = Math.floor(e.clock.m / 10))
        })
    }), c(function() {
        e.countdown = 0, e.timerRunning = !1, e.$broadcast("timer-set-countdown", 0), n()
    })
};
clockController.$inject = ["$scope", "$timeout", "$window", "modalService", "ticketBookingService", "$translate"];
var seatPickerController = function(l, B, t, e) {
    function O(n, r, a, o) {
        function s() {
            f ? e.style("display", "none") : e.style("display", "initial")
        }

        function c(t, e, i) {
            n.attr("transform", "translate(" + t + "," + e + ")scale(" + i + ")"), o.scale(i), o.translate([t, e]), i <= r.scalePointToShowSeatName && !f ? (f = !0, s()) : i > r.scalePointToShowSeatName && f && (f = !1, s())
        }
        var d, l, u, i = 10 * (a.maxScale - 1),
            p = 10 * (a.minScale - 1),
            t = {},
            f = !1,
            e = n.selectAll(".seat-text-name");
        return t.zoomscroll = function() {
            var t, e = o.translate(),
                i = o.scale();
            c(e[0], e[1], i), t = e[0], e = e[1], d = 10 * (i - 1), l = t + a.frameWidth * d / 10 / 2, u = e + a.frameHeight * d / 10 / 2
        }, t.zoomin = function() {
            var t, e;
            i <= ++d || (t = l - a.frameWidth * d / 10 / 2, e = u - a.frameHeight * d / 10 / 2, c(t, e, d / 10 + 1))
        }, t.zoomout = function() {
            var t, e;
            --d <= p || (t = l - a.frameWidth * d / 10 / 2, e = u - a.frameHeight * d / 10 / 2, c(t, e, d / 10 + 1))
        }, t.reset = function() {
            c(a.x, a.y, a.scale), d = 10 * (a.scale - 1), l = a.x + a.frameWidth * d / 10 / 2, u = a.y + a.frameHeight * d / 10 / 2, f = !1, s()
        }, t.reset(), t
    }

    function b(t, e) {
        var i, n, r, a = !0;
        return t && e && ((a = l.validateAnOrderdetail(t, e)) || (i = "maximum-scale", n = 1, r = new RegExp(i, "i"), t = document.querySelector('meta[name="viewport"]').content, t = r.test(t) ? t.split(/,\s*/).map(function(t) {
            return r.test(t) ? i + "=" + n : t
        }).join(", ") : t += ", " + i + "=" + n, document.querySelector('meta[name="viewport"]').content = t)), a
    }

    function E(t, e, i, n) {
        var r = _.find(e.sections, {
            sectionId: i
        });
        r || (e.sections.push({
            sectionId: i,
            quantity: 0,
            isReserveSeating: !0
        }), r = _.find(e.sections, {
            sectionId: i
        })), r.seats = r.seats || [], "add" == t ? (r.quantity++, e.quantity++, e.ticketType.selectedQuantity++, r.seats.push(n)) : "remove" == t && (r.quantity--, e.quantity--, e.ticketType.selectedQuantity--, i = _.find(r.seats, {
            id: n.id
        }), r.seats.remove(i)), l.calculateOrderDetail(), l.$apply()
    }
    var i, n = new SeatMapDataService(l.seatMap),
        r = l.event.currentShowing.id,
        C = ("" !== tkb.data.urlSeatmapSocket && (i = io.connect(tkb.data.urlSeatmapSocket, {
            query: "showingId=" + r
        })).on("connect", function() {
            i.on("seat", function(t) {
                console.log(t);
                var e = OrderDataService(l.order),
                    i = parseInt(t.seatId);
                e.checkIfSeatInOrder(i) || (l.seatpicker.updateStatusSingleSeat(t.action, i), (e = n.findSeatById(i)).id == window.debugSeatId && (console.log("findSeatById"), console.log(e), console.log(t)), "1" == t.action || "3" == t.action ? e.status = SEAT_STATUS.Booked : (e.status = SEAT_STATUS.Available, e.orderExpireDate = null))
            })
        }), l.order.orderDetails),
        F = l.event.currentShowing.ticketTypes,
        a = l.quantityBox = {
            sectionName: "",
            isShowing: !1,
            quantity: 0,
            maximum: 0,
            ticketType: null,
            orderDetail: null,
            orderSection: null,
            increase: function() {
                var t;
                0 == this.quantity && (l.seatpicker.updateBookedSection("select", this.orderSection.sectionId), _.indexOf(C, this.orderDetail) < 0 && C.push(this.orderDetail), _.indexOf(this.orderDetail.sections, this.orderSection) < 0) && this.orderDetail.sections.push(this.orderSection), this.quantity < this.maximum && (0 == this.quantity && this.minimum ? (t = this.minimum, this.quantity = t, this.orderSection.quantity = t, this.orderDetail.quantity += t) : (this.quantity++, this.orderSection.quantity++, this.orderDetail.quantity++)), l.calculateOrderDetail()
            },
            decrease: function() {
                this.quantity > this.minimum ? (this.quantity--, this.orderDetail.quantity--, this.orderSection.quantity--) : (this.orderSection.quantity = 0, this.orderDetail.sections.remove(this.orderSection), this.orderDetail.quantity = this.orderDetail.quantity - this.quantity, this.quantity = 0, l.seatpicker.updateBookedSection("unSelect", this.orderSection.sectionId)), l.calculateOrderDetail()
            },
            setQuantity: function(t) {
                var e = t - this.quantity;
                this.orderDetail.quantity += e, t > this.quantity && (_.indexOf(this.orderDetail.sections, this.orderSection) < 0 && this.orderDetail.sections.push(this.orderSection), 0 == this.quantity) && _.indexOf(C, this.orderDetail) < 0 && C.push(this.orderDetail), 0 == t ? (this.orderDetail.sections.remove(this.orderSection), l.seatpicker.updateBookedSection("unSelect", this.orderSection.sectionId)) : 0 == this.quantity && 0 < t && l.seatpicker.updateBookedSection("select", this.orderSection.sectionId), this.quantity = t, this.orderSection.quantity = t, l.calculateOrderDetail()
            }
        };
    l.prepareDataForSectionSelection = function(t) {
        var e = _.find(F, {
                id: t.ticketTypeId
            }),
            i = _.find(C, {
                ticketTypeId: t.ticketTypeId
            }),
            n = (i || (l.createAnOrderDetail(e), C = l.order.orderDetails, i = _.find(C, {
                ticketTypeId: t.ticketTypeId
            })), _.find(i.sections, {
                sectionId: t.id
            })),
            r = (n || (i.sections.push({
                sectionId: t.id,
                quantity: 0,
                isReserveSeating: !1
            }), n = _.find(i.sections, {
                sectionId: t.id
            })), t.name),
            a = t.description,
            o = t.imageUrl,
            s = null == t.minQuantityPerOrder ? 0 : t.minQuantityPerOrder,
            c = null == t.maxQuantityPerOrder ? Number.MAX_SAFE_INTEGER : t.maxQuantityPerOrder,
            d = (d = _.find(l.event.currentShowing.ticketTypes, {
                id: t.ticketTypeId
            })) || {};
        return {
            name: r,
            description: a,
            imageUrl: o,
            orderDetail: i,
            orderSection: n,
            matchingTicketType: e,
            minimum: Math.max(s, e.minTixPerOrder),
            maximum: Math.min(t.remainReserve, e.maxTixPerOrder, c),
            applyingPrice: d.applyingPrice
        }
    }, l.showQuantityBox = function(t) {
        a.quantity = 0;
        t = l.prepareDataForSectionSelection(t);
        a.minimum = t.minimum, a.maximum = t.maximum, a.ticketType = t.matchingTicketType, a.orderDetail = t.orderDetail, a.orderSection = t.orderSection, a.quantity = t.orderSection.quantity, a.isShowing = !0
    }, l.showCustomizeQuantityBox = function(t) {
        a.quantity = 0;
        t = l.prepareDataForSectionSelection(t);
        a.sectionName = t.name, a.sectionDes = t.description, a.sectionImageUrl = t.imageUrl, a.minimum = t.minimum, a.maximum = t.maximum, a.ticketType = t.matchingTicketType, a.orderDetail = t.orderDetail, a.orderSection = t.orderSection, a.quantity = t.orderSection.quantity, a.unitPrice = t.applyingPrice, e.openSeatSectionModal(l, {
            selectedQuantity: a.quantity,
            quantity: a.quantity,
            maximum: a.maximum,
            minimum: a.minimum,
            orderSection: a.orderSection,
            orderDetail: a.orderDetail,
            ok: function(t, e) {
                l.quantityBox.setQuantity(e.selectedQuantity), t()
            },
            cancel: function(t, e) {
                0 == e.originalQuantity && 0 == e.selectedQuantity && l.quantityBox.setQuantity(e.selectedQuantity), t()
            }
        })
    }, l.hideQuantityBox = function() {
        if (a.orderDetail)
            if (0 == a.orderDetail.quantity) l.removeEmptyOrderFromOrderDetails();
            else if (!b(a.ticketType, a.orderDetail.quantity)) return;
        a.isShowing = !1
    }, l.seatpicker = new function(t, d) {
        var e = d.seatMap,
            c = document.getElementById("seatmap"),
            a = angular.element(document.querySelector("#toolTipWidget")),
            l = angular.element(document.querySelector("#popoverQuantity")),
            i = (a.length <= 0 && (a = angular.element('<div id="toolTipWidget" class="tooltip tooltip-widget top in fade" style="top: -100px; width: auto"><div class="tooltip-arrow"></div><div class="tooltip-inner"><div style="font-style:normal;" class="custome-tooltip padding-5 rounded color-6"><div class="content">loading...</div></div></div></div>'), angular.element(document.querySelector("body")).append(a)), this),
            u = {
                padding: 10,
                radis: 4,
                minScale: .4,
                maxScale: 10,
                scalePointToShowSeatName: 1.4
            },
            p = t.append("g"),
            n = (p.append("g").classed("objects", !0), p.append("g").classed("sections", !0)),
            f = {
                BOOKED: "fill:#F44336;stroke:#D32F2F;",
                AVAILABLE: "fill:#fff;cursor:pointer;",
                NOT_AVAILABLE: "fill:#C2C1C1;stroke:#C2C1C1;"
            },
            r = {
                AVAILABLE: "fill:#fff;cursor:pointer;stroke:#9C9B9B;stroke-width:1;",
                DISABLED: "fill:#C2C1C1;stroke:#C2C1C1;",
                BOOKING: "fill:#8BC34A;stroke:#689F38;",
                BOOKED: "fill:#F44336;stroke:#D32F2F;"
            },
            o = (p = t.append("g")).append("g"),
            n = p.append("g"),
            m = function(o, s, t) {
                var c = _.find(F, {
                        id: o.ticketTypeId
                    }),
                    e = t.selectAll("circle").data(s.seats).enter().append("circle").attr("style", function(t) {
                        t.id == window.debugSeatId && console.log(t);
                        var e = t.status;
                        return e === SEAT_STATUS.Available ? void 0 !== c ? y(t.orderExpireDate) ? r.AVAILABLE : r.BOOKED : r.DISABLED : e !== SEAT_STATUS.Disabled && e === SEAT_STATUS.Booked ? r.BOOKED : r.DISABLED
                    }).attr("cx", function(t) {
                        return t.x
                    }).attr("cy", function(t) {
                        return t.y
                    }).attr("r", u.radis).attr("id", function(t) {
                        return "seat-" + t.id
                    }).classed("booked", function(t) {
                        return t.status === SEAT_STATUS.Booked || !(y(t.orderExpireDate) || d.order && d.order.id == t.orderId)
                    }).classed("seat", !0).on("click", function(t) {
                        var e, i, n, r, a;
                        t.status !== SEAT_STATUS.Available || (e = d3.select(this)).classed("booked") || (i = {
                            id: t.id,
                            name: t.name,
                            rowName: s.name,
                            sectionName: o.name,
                            status: null
                        }, C = d.order.orderDetails, (n = _.find(C, {
                            ticketTypeId: o.ticketTypeId
                        })) || (r = _.find(d.event.currentShowing.ticketTypes, {
                            id: o.ticketTypeId
                        }), d.createAnOrderDetail(r), C = d.order.orderDetails, n = _.find(C, {
                            ticketTypeId: o.ticketTypeId
                        })), "true" == e.attr("selected") ? (a = n.quantity - 1, b(n.ticketType, a) && (x("unSelect", e), E("remove", n, o.id, i))) : (a = n.quantity + 1, b(n.ticketType, a) && (x("select", e), E("add", n, o.id, i), d.isMobileDevice) && void 0 !== c && (h(t, this, c, s.name), setTimeout(S, 1500))))
                    });
                d.isMobileDevice || e.on("mouseover", function(t) {
                    var e = _.find(d.event.currentShowing.ticketTypes, {
                        id: o.ticketTypeId
                    });
                    void 0 !== e && h(t, this, e, s.name)
                }).on("mouseout", S), t.append("g").classed("seat-text-name", !0).selectAll("text").data(s.seats).enter().append("text").attr("style", function(t) {
                    t = t.status;
                    return t === SEAT_STATUS.Disabled ? "fill:#AFAFAF;" : t === SEAT_STATUS.Booked ? "fill:#D32F2F;" : ""
                }).attr("x", function(t) {
                    return t.x
                }).attr("y", function(t) {
                    return t.y + u.radis / 2
                }).attr("id", function(t) {
                    return "seat-text" + t.id
                }).text(function(t) {
                    return t.name
                }).attr("text-anchor", "middle").attr("pointer-events", "none")
            },
            y = function(t) {
                return null == t || !(new Date(t) > new Date)
            },
            h = function(t, e, i, n) {
                var e = e.getScreenCTM().translate(t.x, t.y),
                    e = (a.css("left", window.pageXOffset + e.e - a[0].offsetWidth / 2 + "px"), a.css("top", window.pageYOffset + e.f - a[0].offsetHeight - 5 + "px"), a.find("div").eq(3)),
                    r = [];
                r.push("<div>"), r.push(i.title), r.push(' <span style="padding:1px 5px;color: #000;background-color:#'), r.push(i.color), r.push('">'), r.push(n + "-" + t.name), r.push("</div>"), r.push('</span><div class="clearfix"></div><span style="font-size:12px;" class="font-600">'), r.push(B("number")(i.applyingPrice)), r.push(" " + d.event.currency.isoCode + "</span>"), e.html(r.join("")), a.css("visibility", "visible")
            },
            S = function() {
                a.css("visibility", "hidden")
            },
            g = function(t, e) {
                e && e.length && t.selectAll("text").data(e.filter(function(t) {
                    return t.text && t.text.length
                })).enter().append("text").attr("transform", function(t) {
                    return t.transform
                }).attr("style", function(t) {
                    return t.style
                }).attr("fill", function(t) {
                    return t.fill
                }).attr("x", function(t) {
                    return t.x
                }).attr("y", function(t) {
                    return t.y
                }).text(function(t) {
                    return t.text
                })
            },
            v = function(t, e) {
                e && t.selectAll("path").data(e.filter(function(t) {
                    t = t.d;
                    return t && t.length && "M" == t.charAt(0)
                })).enter().append("path").attr("d", function(t) {
                    return t.d
                }).attr("style", function(t) {
                    return t.style || "fill:#777;"
                })
            },
            x = function(t, e) {
                "select" == t || "" == t && "false" == e.attr("selected") ? e.attr("selected", "true").attr("style", r.BOOKING) : ("unSelect" == t || "" == t && "true" == e.attr("selected")) && e.attr("selected", "false").attr("style", r.AVAILABLE)
            },
            T = function(t, e) {
                e = p.select("#scenter-" + e);
                x(t, e)
            };
        if (I = o, (w = e.objects.rects) && I.selectAll("rect").data(w).enter().append("rect").attr("x", function(t) {
                return t.x
            }).attr("y", function(t) {
                return t.y
            }).attr("width", function(t) {
                return t.width
            }).attr("height", function(t) {
                return t.height
            }).attr("style", function(t) {
                return t.style
            }), v(o, e.objects.paths), g(o, e.objects.texts), n.selectAll("g").data(e.sections).enter().append("g").attr("id", function(t) {
                var r, e, a, o, i = d3.select(this),
                    n = _.find(F, {
                        id: t.ticketTypeId
                    }),
                    s = (t.border && t.border.indexOf("undefined") < 0 && t.border.indexOf("NaN") < 0 && "M" == t.border.charAt(0) && i.append("path").attr("d", t.border).classed("section-border", !0).attr("fill", function() {
                        return n ? "#" + n.color : "#ccc"
                    }).attr("fill-opacity", function() {
                        return n ? "1" : "0.5"
                    }), i.append("g").classed("objects", !0));
                return v(s, t.objects.paths), g(s, t.objects.texts), t.isReserveSeating || (r = t, e = n, a = (s = i).append("circle").attr("style", function() {
                    return void 0 !== r.status && r.status != SEAT_SECTION_STATUS.OPEN ? f.NOT_AVAILABLE : e && e.isAvailable && 0 < r.remainReserve ? f.AVAILABLE : e && e.isAvailable && r.remainReserve <= 0 ? f.NOT_AVAILABLE : f.BOOKED
                }).attr("cx", r.xCenter).attr("cy", r.yCenter).attr("r", 3 * u.radis).attr("id", "scenter-" + r.id).classed("booked", function() {
                    return !1
                }).classed("seat", !0), e && e.isAvailable && !e.isHiddenFromListing && !r.isReserveSeating && (s.style("cursor", "pointer"), s.on("click", function() {
                    void 0 !== r.status && r.status != SEAT_SECTION_STATUS.OPEN || r.remainReserve <= 0 || (1 == r.popupType ? d.showCustomizeQuantityBox(r) : (d.showQuantityBox(r), d.$apply(), setTimeout(function() {
                        var t = a.node().getScreenCTM().translate(r.xCenter, r.yCenter),
                            e = c.getBoundingClientRect(),
                            i = l[0],
                            n = t.f - i.offsetHeight - e.top - 11,
                            t = t.e - i.offsetWidth / 2 - e.left;
                        l.css("top", window.pageYOffset + n + "px"), l.css("left", window.pageXOffset + t + "px")
                    }, 50)))
                }))), o = t, i.selectAll("g").data(o.rows, function(t) {
                    return t.id
                }).enter().append("g").classed("a-row", !0).attr("id", function(t) {
                    var e = d3.select(this),
                        i = t.objects.paths,
                        n = t.objects.texts,
                        r = e.append("g").classed("objects", !0);
                    return i && i.length && v(r, i), n && n.length && g(r, n), m(o, t, e), "row-" + t.id
                }), "section-" + t.id
            }), !e.seats) {
            e.seats = [];
            for (var s = e.sections.length - 1; 0 <= s; s--)
                for (var k = e.sections[s], A = k.rows.length - 1; 0 <= A; A--)
                    for (var D = k.rows[A], q = D.seats.length - 1; 0 <= q; q--) e.seats.push(D.seats[q])
        }
        var I = p.node().getBBox(),
            w = {},
            o = !tkb.data.isWidget && 991 < window.innerWidth ? (document.querySelector(".booking").offsetWidth - 60) / 3 * 2 : c.offsetWidth - 30,
            n = (w.scale = (o - 2 * u.padding) / I.width, w.maxScale = w.scale * u.maxScale, w.minScale = w.scale * u.minScale, w.x = w.scale * (u.padding / 2 - I.x), w.y = w.scale * (u.padding / 2 - I.y), w.frameWidth = o + 0, w.frameHeight = I.height * w.scale + 2 * u.padding, c.style.height = w.frameHeight + "px", t.style("height", w.frameHeight + "px"), d3.behavior.zoom().scaleExtent([w.minScale, w.maxScale]));
        return i.panzoom = O(p, u, w, n), n.on("zoom", function() {
            i.panzoom.zoomscroll()
        }), t.call(n), i.panzoom.reset(), d.isBinding.value = !1, {
            updateBookedSection: T,
            updateBookedReserv: function(t) {
                for (var e = t.length - 1; 0 <= e; e--)
                    for (var i = t[e].sections, n = i.length - 1; 0 <= n; n--) {
                        var r = i[n];
                        if (r.isReserveSeating) {
                            var a = r.seats;
                            if (a && a.length)
                                for (var o = a.length - 1; 0 <= o; o--) {
                                    var s = a[o],
                                        s = p.select("#seat-" + s.id);
                                    x("select", s)
                                }
                        } else T("select", r.sectionId)
                    }
            },
            zoomIn: i.panzoom.zoomin,
            zoomOut: i.panzoom.zoomout,
            resetZoom: i.panzoom.reset,
            updateStatusSingleSeat: function(t, e) {
                var i = d3.select("#seat-" + e),
                    e = d3.select("#seat-" + e);
                "1" == t || "3" == t ? i && !i.classed("booked") && (e.style("fill", "#D32F2F"), i.style("stroke", "#D32F2F").style("fill", "#F44336").classed("booked", !0)) : i.style("fill", "#fff").style("stroke", "#9C9B9B").classed("booked", !1)
            }
        }
    }(d3.select("#svg"), l), l.tooltipTickettInfo = function(t, e) {
        var i;
        return !!(t && t.length || e && e.length) && (i = "<div class='custome-tooltip padding-10 rounded color-6'>", t && t.length && (i += "<img class='w-100' src='" + t + "'/>"), e && e.length && (i += "<div>" + e.replace(/(?:\r\n|\r|\n)/g, "<br/>") + "</div>"), i + "</div>")
    }, C && C.length && l.seatpicker.updateBookedReserv(C)
};
seatPickerController.$inject = ["$scope", "$filter", "ticketBookingService", "modalService"];
"use strict";
var app = angular.module("ticketBookingApp", ["ngRoute", "ngAnimate", "pascalprecht.translate", "blockUI", "ui.bootstrap", "smoothScroll", "ngSanitize", "ui.checkbox", "timer", "angular-ladda", "ngFacebook"]).constant("urlWebAuth", "/");
app.config(["$sceDelegateProvider", function(e) {
    e.resourceUrlWhitelist(["self", tkb.data.staticDomain + "/**"]), e.resourceUrlBlacklist([])
}]), app.config(["$routeProvider", function(e) {
    e.when("/step-select-tickets", {
        templateUrl: "/assets_book/views/step-select-tickets.html?" + tkb.siteSetting.urlVersion,
        controller: "selectTicketsStepController"
    }).when("/step-question-form", {
        templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/step-question-form.html?" + tkb.siteSetting.urlVersion,
        controller: "questionFormController"
    }).when("/step2", {
        templateUrl: "/assets_book/views/step2.html",
        controller: "step2Controller"
    }).when("/step-fill-info", {
        templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/step-fill-info.html?" + tkb.siteSetting.urlVersion,
        controller: "fillInfoController"
    }).when("/thank-you/:orderCode", {
        templateUrl: tkb.data.staticRootPath + "/html/spa/ticket-booking/views/thank-you.html?" + tkb.siteSetting.urlVersion,
        controller: "thankYouController"
    }).when("/event-details", {
        redirectTo: function() {
            window.location = window.location.origin + "/event/booking-" + tkb.data.eventId
        }
    }).otherwise({
        redirectTo: "/step-select-tickets"
    })
}]), app.config(["$httpProvider", function(e) {
    e.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
}]), app.config(["$facebookProvider", function(e) {
    e.setAppId(tkb.data.fbAppId), e.setVersion("v2.3"), e.setPermissions("email,user_friends"), e.setCustomInit({
        channelUrl: "//ticketbox.vn",
        status: !0,
        cookie: !0,
        xfbml: !1
    })
}]), app.config(["blockUIConfigProvider", function(e) {
    e.message("executing..."), e.delay(1), e.autoBlock(!1)
}]), app.config(["$translateProvider", function(e) {
    e.useStaticFilesLoader({
        prefix: "/assets_book/lang/",
        suffix: ".json?v=" + tkb.siteSetting.urlVersion
    }), e.determinePreferredLanguage(function() {
        return tkb.url.getParamValue("lang") || tkb.cookie.getItem("_culture") || tkb.siteSetting.culture.defaultCulture
    })
}]), app.config(["$tooltipProvider", function(e) {
    e.setTriggers({
        mouseenter: "mouseleave",
        click: "click",
        focus: "blur",
        never: "mouseleave"
    }), e.options({
        animation: !0,
        popupDelay: 0
    })
}]), app.run(["$rootScope", function(e) {
    var t, o, r, i;
    t = document, o = "script", r = "facebook-jssdk", i = t.getElementsByTagName(o)[0], t.getElementById(r) || ((t = t.createElement(o)).id = r, t.src = "//connect.facebook.net/en_US/sdk.js", i.parentNode.insertBefore(t, i))
}]), app.filter("tkbRangeWithZero", tkbFilterRangeWithZero), app.directive("loginBlock", loginBlock), app.directive("tkbBookingBill", tkbBookingBill), app.directive("disableAnimation", disableAnimation), app.directive("ticketboxLogo", ticketboxLogo), app.directive("ticketboxText", ticketboxText), app.directive("moreIcon", moreIcon), app.directive("localbankIcon", localbankIcon), app.directive("storeIcon", storeIcon), app.directive("shippingIcon", shippingIcon), app.directive("eatClick", eatClick), app.directive("limitTo", limitTo), app.directive("numberOnly", numberOnly), app.directive("numberOnlyV2", numberOnlyV2), app.directive("dateInput", dateInput), app.directive("dropDownDateAnswer", dropDownDateAnswer), app.directive("dropDownNormalAnswer", dropDownNormalAnswer), app.directive("dropDownPhoneAnswer", dropDownPhoneAnswer), app.service("ajaxService", ajaxService), app.service("accountService", accountService), app.service("modalService", modalService), app.service("ticketBookingService", ticketBookingService), app.controller("ModalInstanceCtrl", ModalInstanceCtrl), app.controller("ModalSectionSelectionCtrl", ModalSectionSelectionCtrl), app.controller("ModalPromptInstanceCtrl", ModalPromptInstanceCtrl), app.controller("LoginModalCtrl", LoginModalCtrl), app.controller("ticketBookingController", ticketBookingController), app.controller("selectTicketsStepController", selectTicketsStepController), app.controller("seatPickerController", seatPickerController), app.controller("step2Controller", step2Controller), app.controller("thankYouController", thankYouController), app.controller("clockController", clockController), app.controller("questionFormController", questionFormController), app.controller("fillInfoController", fillInfoController);
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