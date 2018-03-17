/*app.controller("AboutMeCtrl", ["$scope", "$http", "$window",
function(n, t, i) {
    n.loading = !0;
    t.post("/AboutMe/Init").success(function(t) {
        $.extend(n, t);
        n.loading = null
    });
    n.joinAgent = function() {
        confirm("确定要加盟股东?") && t.post("/AboutMe/JoinAgent").success(function(n) {
            if (!n.IsSuccess) {
                i.alert(n.ErrorMessage);
                return
            }
            i.alert("成功加盟股东");
            i.location.reload()
        })
    }
}]);
app.controller("AboutMeUpdateMemberInfoCtrl", ["$scope", "$http", "$window", "$timeout",
function(n, t, i, r) {
    t.post("/AboutMe/UpdateMemberInfoInit").success(function(t) {
        n.params = t.member;
        t.member.birthday && r(function() {
            $("#birthday").datepicker("setValue", t.member.birthday)
        })
    });
    n.updateMemberInfoSubmit = function(r) {
        n.isProcessing = !0;
        t.post("/AboutMe/UpdateMemberInfoSubmit", r).success(function(t) {
            n.isProcessing = null;
            t.IsSuccess ? (i.alert("您的基本资料已变更成功"), i.location.href = "/AboutMe") : i.alert("发生错误：" + t.ErrorMessage)
        })
    };
    n.help = null;
    n.showHelp = function(t) {
        n.help = t
    };
    n.hideHelp = function() {
        n.help = null
    }
}]);
app.controller("AccountChangeMoneyPasswordCtrl", ["$scope", "$http", "$window",
function(n, t, i) {
    n.params = {};
    n.change = function(r) {
        if (n.same = !1, n.notConfirm = !1, n.params.oldPassword == n.params.newPassword) {
            n.same = !0;
            return
        }
        if (n.params.newPassword != n.confirm) {
            n.notConfirm = !0;
            return
        }
        n.isProcessing = !0;
        t.post("/Account/ChangeMoneyPasswordSubmit", r).success(function(t) {
            n.isProcessing = null;
            t.IsSuccess ? (i.alert("您的取款密码已变更成功"), i.location.href = "/") : i.alert("发生错误：" + t.ErrorMessage)
        })
    };
    n.cancel = function() {
        i.location.href = "/"
    }
}]);
app.controller("AccountChangePasswordCtrl", ["$scope", "$window", "$http",
function(n, t, i) {
    n.params = {};
    n.change = function(r) {
        if (n.same = !1, n.notConfirm = !1, n.params.oldPassword == n.params.newPassword) {
            n.same = !0;
            return
        }
        if (n.params.newPassword != n.confirm) {
            n.notConfirm = !0;
            return
        }
        n.isProcessing = !0;
        i.post("/Account/ChangePasswordSubmit", r).success(function(i) {
            n.isProcessing = null;
            i.IsSuccess ? (t.alert("您的密码已变更成功，请立即以新密码重新登入"), location = "/Account/SignOut") : t.alert("发生错误：" + i.ErrorMessage)
        })
    };
    n.cancel = function() {
        t.location.href = "/"
    }
}]);
app.controller("AccountCtrl", ["$scope", "$http", "$rootScope", "DataService", "signalrService",
function(n, t, i, r, u) {
    n.signOut = function() {
        n.isProcessing = !0
    };
    n.updateBalance = function() {
        n.updatingBalance || (n.updatingBalance = !0, t.post("/Account/GetMyBalance").success(function(t) {
            n.updatingBalance = null;
            i.wallets.my = t
        }))
    };
    u.on("updateMyBalance",
    function(n) {
        i.wallets.my = n
    });
    n.callBackAllWallet = function() {
        n.updatingBalance || (n.updatingBalance = !0, t.post("/Account/CallBackAllWallet").success(function(t) {
            n.updatingBalance = null;
            i.wallets.my = t
        }))
    }
}]);
app.controller("AgentApplyCtrl", ["$scope", "$http", "$window", "$modal", "labelService", "$location",
function(n, t, i, r, u) {
    n.params = {};
    n.isShowMore = !1;
    n.isProcessing = !1;
    n.moreOptionClick = function() {
        n.isShowMore = !0
    };
    n.isValid = !0;
    n.chineseIsValid = !0;
    n.numberIsValid = !0;
    n.numberOrEmailIsValid = !0;
    n.emailIsValid = !0;
    t.post("/AgentApply/GetAgentRegisterSetting").success(function(t) {
        n.agentRegisterSetting = t
    });
    t.post("/AgentApply/GetAllBanks").success(function(t) {
        n.banks = t;
        n.params.GroupBank = null
    });
    n.$watch("params.Mobile",
    function(t, i) {
        if (t) {
            var r = new RegExp("^[0-9]+$").test(t);
            r || (n.params.Mobile = i)
        }
    });
    n.$watch("params.QQ",
    function(t, i) {
        if (t) {
            var r = new RegExp("^[0-9]+$").test(t);
            r || (n.params.QQ = i)
        }
    });
    n.updateBankName = function() {
        n.isValid = !0;
        n.chineseIsValid = !0;
        n.numberIsValid = !0;
        n.numberOrEmailIsValid = !0;
        n.emailIsValid = !0;
        this.params.BankAccount = undefined
    };
    n.updateAccount = function() {
        if (this.params.GroupBank != null && this.params.BankAccount != undefined) switch (this.params.GroupBank.AccountFormat) {
        case 1:
            if (n.chineseIsValid = new RegExp(/^[^\u4e00-\u9fa5]+$/).test(this.params.BankAccount), n.chineseIsValid) n.chineseIsValid = !0,
            n.isValid = !0;
            else {
                n.isValid = !1;
                return
            }
            break;
        case 2:
            if (n.numberIsValid = new RegExp(/^[0-9]+$/).test(this.params.BankAccount), n.numberIsValid) n.numberIsValid = !0,
            n.isValid = !0;
            else {
                n.isValid = !1;
                return
            }
            break;
        case 3:
            if (n.numberOrEmailIsValid = new RegExp(/^[0-9]+$/).test(this.params.BankAccount), n.numberOrEmailIsValid) n.numberOrEmailIsValid = !0,
            n.isValid = !0;
            else if (n.numberOrEmailIsValid = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/).test(this.params.BankAccount), n.numberOrEmailIsValid) n.numberOrEmailIsValid = !0,
            n.isValid = !0;
            else {
                n.isValid = !1;
                return
            }
            break;
        case 4:
            if (n.emailIsValid = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/).test(this.params.BankAccount), n.emailIsValid) n.emailIsValid = !0,
            n.isValid = !0;
            else {
                n.isValid = !1;
                return
            }
        } else n.isValid = !0,
        n.chineseIsValid = !0,
        n.numberIsValid = !0,
        n.numberOrEmailIsValid = !0,
        n.emailIsValid = !0
    };
    n.$watchCollection("[params.GroupBank, params.Province, params.City, params.BankAccount]",
    function(t, i) {
        var r = $.grep(t,
        function(i) {
            if (t[0] == null && i == undefined) {
                n.isBankRequired = !0;
                return
            }
            if (i == "") {
                n.isBankRequired = !0;
                return
            }
            return i !== undefined
        });
        switch (r.length) {
        case 0:
            n.isBankRequired = !1;
            break;
        case i.length:
            n.isBankRequired = !0;
            break;
        default:
            n.isBankRequired = !0
        }
    },
    !0);
    n.apply = function() {
        var f = new RegExp("^[A-Za-z][A-Za-z_0-9]{1,14}$").test(n.params.Account);
        if (!f) {
            i.alert(u.get("Agent.Account_Error") || "代理帐号格式错误");
            return
        }
        if (n.params.Confirm_Password != n.params.Password) {
            i.alert(u.get("Agent.Different_Password") || "代理密码与确认密码不同");
            return
        }
        if (!n.checkCode) {
            i.alert(u.get("Agent.Empty_Checkcode") || "验证码为空, 请取得验证码");
            return
        }
        if (!n.isValid) {
            $('input[ng-model="params.BankAccount"]').focus();
            return
        }
        n.params.CheckCodeEncrypt = n.checkCode.encrypt;
        n.isProcessing = !0;
        n.params.BankName = n.params.GroupBank == null ? null: n.params.GroupBank.Name;
        t.post("/AgentApply/ApplySubmit", n.params).success(function(t) {
            if (n.isProcessing = !1, t.isSuccess === !1) {
                i.alert(t.errorMessage);
                n.params.checkCode = null;
                $("#checkcode-input-group input").focus();
                return
            }
            n.params = null;
            r.open({
                templateUrl: "/AgentApply/AgentDialog",
                controller: "AgentApplyDialogCtrl"
            })
        })
    }
}]);
app.controller("AgentApplyDialogCtrl", ["$scope", "$window", "$modalInstance",
function(n, t, i) {
    n.isProcess = !1;
    n.close = function() {
        i.close()
    }
}]);
app.controller("BetRecordCtrl", ["$scope", "$q", "$http", "$timeout", "signalrService", "bodyScrollService",
function(n, t, i, r, u, f) {
    function l() {
        a();
        var u = i.post("/BetRecord/GetSupplierCategories", {}),
        f = i.post("/BetRecord/GetKindCategories", {}),
        o = [u, f];
        t.all(o).then(function(t) {
            var i = t[0].data,
            u = t[1].data;
            n.betRecord.suppliers = i;
            n.betRecord.kinds = u;
            $.each(n.betRecord.suppliers,
            function(n, t) {
                var i = t.Categories;
                t.isSelected = !0;
                $.each(i,
                function(n, t) {
                    t.isSelected = !0
                })
            });
            n.betRecord.status.isReady = !0;
            r(function() {
                $(function() {
                    $("#betDialog").dialog({
                        autoOpen: !1,
                        minWidth: 800
                    });
                    $("#opener").click(function() {
                        $("#betDialog").dialog("open")
                    })
                })
            });
            e();
            s()
        });
        $(document).on("scroll",
        function() {
            r(e)
        });
        n.$on("$destroy", h)
    }
    function a() {
        $(function() {
            var t = $("html").attr("meidon-time");
            n.betRecord.begin = moment(t, "YYYY/MM/DD 00:00:00").format("YYYY/MM/DD 00:00:00");
            n.betRecord.end = moment(t, "YYYY/MM/DD 23:59:59").format("YYYY/MM/DD 23:59:59")
        })
    }
    function e() {
        if (!o && !n.betRecord.status.isDataAllLoaded && !(f.getDistanceOfBottom() > 1e3)) {
            var t = c();
            t.length === 0 && (t = [""]);
            u.donePromise.then(function() {
                var r = {
                    SearchParams: {
                        WagersTimeBegin: n.betRecord.begin,
                        WagersTimeEnd: n.betRecord.end,
                        GameCategories: t,
                        UnpayOnly: n.betRecord.unpayOnly
                    },
                    take: 30,
                    skip: n.betRecord.lists.length,
                    connectionId: u.getConnectionId()
                };
                n.betRecord.status.isLoading = !0;
                o = i.post("/BetRecord/Search", r).success(function(t) {
                    if (n.betRecord.lists = n.betRecord.lists.concat(t), n.betRecord.status.isLoading = !1, n.isSearchCompleted = !0, o = null, t.length < r.take) {
                        n.betRecord.status.isDataAllLoaded = !0;
                        h();
                        return
                    }
                })
            })
        }
    }
    function s() {
        var t = c(),
        r;
        t.length === 0 && (t = [""]);
        r = {
            WagersTimeBegin: n.betRecord.begin,
            WagersTimeEnd: n.betRecord.end,
            GameCategories: t,
            UnpayOnly: n.betRecord.unpayOnly
        };
        i.post("/BetRecord/GetBetrecordTotalInfo", r).success(function(t) {
            angular.extend(n.total, t)
        })
    }
    function h() {
        $(document).off("scroll")
    }
    function c() {
        var t = [];
        return $.each(n.betRecord.suppliers,
        function(n, i) {
            var r = i.Categories;
            $.each(r,
            function(n, i) {
                i.isSelected && t.push(i.PropertyName)
            })
        }),
        t
    }
    n.betRecord = {
        status: {
            isReady: !1,
            isLoading: !1,
            isDataAllLoaded: !1
        },
        lists: [],
        begin: null,
        end: null,
        unpayOnly: !1,
        suppliers: [],
        kinds: [],
        categoriesString: "(全选)"
    };
    n.total = {};
    l();
    var o;
    n.betRecord.submit = function() {
        var t = $(window).scrollTop();
        n.isSearchCompleted = !1;
        n.betRecord.lists = [];
        n.total = {};
        n.betRecord.status.isDataAllLoaded = !1;
        $(document).on("scroll",
        function() {
            r(e)
        });
        r(function() {
            t === $(window).scrollTop() && r(e)
        });
        r(s)
    };
    n.allCategories = function(t) {
        $.each(n.betRecord.suppliers,
        function(n, i) {
            var r = i.Categories;
            i.isSelected = t;
            $.each(r,
            function(n, i) {
                i.isSelected = t
            })
        });
        n.setCategoriesString()
    };
    n.selectSupplier = function(t, i) {
        var r = !0;
        i && n.allCategories(!1);
        $.each(n.betRecord.suppliers,
        function(n, u) {
            var f = u.Categories;
            t === u.Value && (i || (r = u.isSelected), u.isSelected = r, $.each(f,
            function(n, t) {
                t.isSelected = r
            }))
        });
        n.setCategoriesString()
    };
    n.selectKind = function(t) {
        var i = [];
        $.each(t.Categories,
        function(n, t) {
            i.push(t.PropertyName)
        });
        n.allCategories(!1);
        $.each(n.betRecord.suppliers,
        function(n, t) {
            var r = t.Categories;
            $.each(r,
            function(n, t) {
                var r = $.inArray(t.PropertyName, i) !== -1;
                r && (t.isSelected = !0)
            })
        });
        n.setCategoriesString()
    };
    n.checkSupplier = function(t) {
        var i = !0;
        $.each(n.betRecord.suppliers,
        function(r, u) {
            if (t === u.Text) {
                var f = u.Categories;
                $.each(f,
                function(n, t) {
                    t.isSelected === !1 && (i = !1)
                });
                n.betRecord.suppliers[r].isSelected = i
            }
        })
    };
    n.setCategoriesString = function() {
        var t = [],
        i = 0;
        if ($.each(n.betRecord.suppliers,
        function(n, r) {
            var u = r.Categories;
            $.each(u,
            function(n, r) {
                i = i + 1;
                r.isSelected && t.push(r.ShortName)
            })
        }), t.length === i) {
            n.betRecord.categoriesString = "(全选)";
            return
        }
        if (t.length === 0) {
            n.betRecord.categoriesString = "(无选取)";
            return
        }
        if (t.length <= 2) {
            n.betRecord.categoriesString = t.join("、");
            return
        }
        if (t.length > 2) {
            n.betRecord.categoriesString = t.slice(0, 2).join("、") + "...共" + t.length + "个";
            return
        }
    };
    n.betDetail = function(n) {
        i.post("/BetRecord/GetMg2PlaycheckUrl", {
            id: n
        }).success(function(n) {
            if (n.isSuccess === !1) {
                alert(n.errorMessage);
                return
            }
            var i = 820,
            t = (window.screen.width - i) / 2;
            t < 0 && (t = 0);
            window.open(n.url, null, "width=" + i + ",height=760,top=200,left=" + t)
        })
    }
}]);
app.controller("CdnCtrl", ["$scope", "$http", "$sce",
function(n, t, i) {
    n.banners = [];
    n.Contents = [];
    t.post("/Cdn/GetPromotion").success(function(t) {
        n.banners = n.banners.concat(t[0].items)
    });
    n.toHtml = function(n) {
        return i.trustAsHtml(n)
    }
}]);*/
// var tournamentInitial = function() {
//     var n = JSON.parse(sessionStorage.getItem("tournamentData")),
//     t = (new Date).valueOf(),
//     u = "images/close.png",
//     i = {},
//     f = function() {
//         var t = (screen.width - 1100) / 2,
//         i = (screen.height - 950) / 3,
//         n = window.open("/Lobby/MGChallenge", "_lobby", "resizable,scrollbars=yes, width=1100, height=950");
//         n.moveBy(t, i);
//         n.focus()
//     },
//     r = function() {
//         n = JSON.parse(sessionStorage.getItem("tournamentData"));
//         var t = '<aside id="service-tournament" style="position:fixed;right:0;top:0;z-index:9999;">   <div class="mg-tournament" style="display:inline-block;cursor:pointer;">       <img style="max-width:200px;max-height:200px;" src="' + n.ImgUrl + '" />   <\/div>   <div class="closed" style="position:absolute;display:block;top:0;right:0;height:26px;width:26px;cursor:pointer;background:url(\'' + u + "') no-repeat center center;\"><\/div><\/aside>";
//         $("body").append(t).on("click", "#service-tournament .mg-tournament",
//         function() {
//             f()
//         }).on("click", "#service-tournament .closed",
//         function() {
//             $("#service-tournament").hide()
//         })
//     };
//     n ? n.lifeDate + .5 * 36e5 < t ? (sessionStorage.removeItem("tournamentData"), tournamentInitial()) : n.state && r() : (i = $.ajax({
//         url: "/MG2Tournament/GetUsableTournament",
//         method: "GET",
//         dataType: "json"
//     }), i.done(function(i) {
//         i ? (n = {
//             state: !0,
//             ImgUrl: i.ImgUrl,
//             PageUrl: i.PageUrl,
//             lifeDate: t
//         },
//         sessionStorage.setItem("tournamentData", JSON.stringify(n)), r()) : (n = {
//             state: !1,
//             lifeDate: t
//         },
//         sessionStorage.setItem("tournamentData", JSON.stringify(n)))
//     }), i.fail(function() {
//         n = {
//             state: !1,
//             lifeDate: t
//         };
//         sessionStorage.setItem("tournamentData", JSON.stringify(n))
//     }))
// };
// tournamentInitial();
$(document).ready(function() {
    function n() {
        var t = (screen.width - 900) / 2,
        i = (screen.height - 600) / 3,
        n = window.open("/Lobby/SGFlash", "_lobby", "resizable,scrollbars=yes, width=1000, height=950");
        n.moveBy(t, i);
        n.focus()
    }
    function t() {
        var t = (screen.width - 1250) / 2,
        i = (screen.height - 600) / 3,
        n = window.open("/Account/LoginToMw", "_lobby", "resizable,scrollbars=yes, width=1250, height=900");
        n.moveBy(t, i);
        n.focus()
    }
    function i() {
        $("body").append('<aside id="service-float" style="position:fixed;right:0;bottom:0;z-index:9999;">   <div class="closed" style="position:absolute;display:block;top:-14px;left:-14px;height:28px;width:28px;cursor:pointer;background:url(\'images/SG_close.png\');"><\/div>   <div class="mw-game" style="display:inline-block;cursor:pointer;">       <img src="images/mw_slot.png" alt="MW" />   <\/div>   <div class="sg-game" style="display:inline-block;cursor:pointer;">       <img src="images/sg_slot.png" alt="SG" />   <\/div><\/aside>').on("click", "#service-float .sg-game",
        function() {
            n()
        }).on("click", "#service-float .mw-game",
        function() {
            t()
        }).on("click", "#service-float .closed",
        function() {
            $("#service-float").hide()
        })
    }
    i()
});
/*app.controller("CompanyDepositApplicationsCtrl", ["$scope", "$http",
function(n, t) {
    var i = 40;
    n.loadingPromise = null;
    n.records = [];
    n.loadMore = function() {
        if (!n.complete && !n.loadingPromise) {
            var r = n.records.length;
            n.loadingPromise = t.post("/AccountRecord/GetCompanyDepositApplications", {
                count: i,
                skip: r
            }).success(function(t) {
                angular.forEach(t,
                function(t) {
                    n.records.push(t)
                });
                n.loadingPromise = null;
                t && t.length < i && (n.complete = !0)
            })
        }
    };
    n.loadMore()
}]);*/
/*app.controller("CompanyDepositConfirmDialogCtrl", ["$scope", "$http", "$window", "$modalInstance", "params", "depositType",
function(n, t, i, r, u, f) {
    n.params = u;
    n.depositType = f;
    n.apply = function() {
        n.isProcessing = !0;
        t.post("/CompanyDeposit/Apply", u).success(function(t) {
            n.isProcessing = null;
            t.isSuccess ? r.close(t.id) : (i.alert(t.errorMessage), r.dismiss())
        })
    };
    n.cancel = function() {
        r.dismiss("cancel")
    }
}]);
app.controller("CompanyDepositCtrl", ["$scope", "$http", "$modal", "$window",
function(n, t, i, r) {
    var s, h, e, o, f, u;
    for (n.view = "bank", s = new Date, h = $("html").attr("moment-lang"), $(".date").datepicker({
        format: "yyyy/mm/dd",
        language: h,
        autoclose: !0,
        todayHighlight: !0
    }), n.date = $(".date").datepicker("setValue", s).val(), n.hours = [], e = s.getHours().toString(), e.length == 1 && (e = "0" + e), f = 0; f < 24; f++) u = f.toString(),
    u.length == 1 && (u = "0" + u),
    u == e && (n.hour = u),
    n.hours.push(u);
    for (n.minutes = [], o = s.getMinutes().toString(), o.length == 1 && (o = "0" + o), f = 0; f < 60; f++) u = f.toString(),
    u.length == 1 && (u = "0" + u),
    u == o && (n.minute = u),
    n.minutes.push(u);
    n.params = {};
    n.applyInfo = {};
    n.loading = !0;
    t.post("/CompanyDeposit/Init").success(function(t) {
        n.depositTypes = t.DepositTypes;
        var i = n.min = t.Min,
        r = n.max = t.Max;
        n.condition = i != null && r != null ? "between": i != null && r == null ? "more": i == null && r != null ? "less": "unlimited";
        n.loading = null
    });
    n.isAvailableAmount = function(t) {
        switch (n.condition) {
        case "between":
            return t >= n.min && t <= n.max;
        case "more":
            return t >= n.min;
        case "less":
            return t > 0 && t <= n.max;
        default:
            return ! 0
        }
    };
    n.selectBank = function(t, i) {
        n.applyInfo.bank = t;
        n.params.groupAccountType = i
    };
    n.selectAccount = function(t) {
        n.applyInfo.account = t;
        n.params.accountId = t.Id
    };
    n.selectDepositType = function(t) {
        n.applyInfo.depositType = t;
        switch (t) {
        case "ATM自动柜员机":
        case "ATM现金入款":
            n.showBranch = !0;
            n.branchTitle = "ATM所属分行";
            break;
        case "银行柜台":
            n.showBranch = !0;
            n.branchTitle = "银行柜台分行";
            break;
        case "手机银行转帐":
        case "网银转帐":
        default:
            n.showBranch = !1
        }
    };
    n.isBankViewAvailable = function() {
        return ! n.orderId
    };
    n.isAccountViewAvailable = function() {
        return ! n.orderId && n.params.bankId || n.params.groupAccountType != "General"
    };
    n.isEditViewAvailable = function() {
        return ! n.orderId && n.params.bankId && n.params.accountId || n.params.groupAccountType != "General"
    };
    n.isCompleteViewAvailable = function() {
        return n.orderId
    };
    n.openConfirmDialog = function() {
        if (!n.isAvailableAmount(n.params.amount)) {
            r.alert("存入金额不符合限制");
            return
        }
        if (n.params.depositName.length > 50) {
            r.alert("存款人姓名不符合限制");
            return
        }
        if (n.params.groupAccountType == "General" && !n.applyInfo.depositType) {
            r.alert("请选择存款方式");
            return
        }
        if (n.showBranch) {
            if (!n.branchProvince || !n.branchCity || !n.branchOther) {
                r.alert(n.branchTitle + "填写不完整");
                return
            }
            n.params.memo = n.branchProvince + "省" + n.branchCity + n.cityType + n.branchOther
        }
        n.params.time = n.date + " " + n.hour + ":" + n.minute;
        var t = i.open({
            templateUrl: "/CompanyDeposit/ConfirmDialog",
            controller: "CompanyDepositConfirmDialogCtrl",
            resolve: {
                params: function() {
                    return n.params
                },
                depositType: function() {
                    return n.applyInfo.depositType
                }
            }
        });
        t.result.then(function(t) {
            t && (n.orderId = t, n.switchView("complete"))
        })
    };
    n.switchView = function(i) {
        switch (i) {
        case "bank":
            n.view = "bank";
            break;
        case "account":
            n.isAccountViewAvailable() && (n.bankId != n.params.bankId && (n.params.accountId = null, n.loadingAccounts = !0, n.accounts = null, t.post("/CompanyDeposit/GetMemberCanUseAccounts", {
                bankName: n.applyInfo.bank,
                groupAccountType: n.params.groupAccountType
            }).success(function(t) {
                n.accounts = t;
                n.loadingAccounts = null;
                n.bankId = n.params.bankId
            })), n.view = "account");
            n.view = "account";
            break;
        case "edit":
            n.isEditViewAvailable() && (n.view = "edit", setTimeout(function() {
                $("#amount").focus();
                $("#zClip i").zclip({
                    path: "/Scripts/ZeroClipboard.swf",
                    copy: function() {
                        return $(this).prev().text()
                    },
                    beforeCopy: function() {
                        $(this).next().css("display", "inline")
                    },
                    afterCopy: function() {
                        $(this).next().fadeOut(3e3)
                    }
                })
            }));
            break;
        case "complete":
            n.isCompleteViewAvailable() && (n.view = "complete")
        }
    }
}]);
app.controller("ContactCtrl", ["$scope", "$http",
function() {}]);
app.controller("HomeCtrl", ["$scope", "$element", "$window", "$http", "$interval",
function(n, t, i, r, u) {
    function o() {
        f && u.cancel(f);
        f = u(function() {
            n.selectedImg = n.selectedImg == e ? 1 : n.selectedImg + 1
        },
        3e3)
    }
    var f, e;
    n.slideBannerClick = function() {
        i.open("/Promotion", "_self", "resizable,scrollbars=yes")
    };
    r.post("/Cdn/GetSlider").success(function(t) {
        e = t.length;
        n.slideImgs = t;
        o()
    });
    n.changeSelected = function(t) {
        n.selectedImg = t + 1;
        o()
    }
}]);
app.controller("JoinAgentCtrl", ["$scope", "$http", "$window",
function(n, t, i) {
    n.joinAgent = function() {
        confirm("确定要加盟股东?") && t.post("/AboutMe/JoinAgent").success(function(n) {
            if (!n.IsSuccess) {
                i.alert(n.ErrorMessage);
                return
            }
            i.alert("成功加盟股东");
            i.location.reload()
        })
    }
}]);
app.controller("LayoutCtrl", ["$scope", "$element", "$window", "$http", "$interval", "$location", "signalrService", "$timeout",
function(n, t, i, r, u, f, e, o) {
    moment.locale($("html").attr("moment-lang"));
    moment.tz.setDefault("Asia/Taipei");
    n.meiDonNow = moment($("html").attr("meidon-time").replace(/\//g, "-"));
    u(function() {
        n.meiDonNow.add(1, "seconds")
    },
    990);
    e.on("updateMeidonNow",
    function(t) {
        n.meiDonNow = moment(t)
    });
    r.post("/Cdn/GetContactList").success(function(t) {
        n.ContactInfo = t;
        o(function() {
            $(function() {
                if (t.Dialog != undefined && t.DialogPage != undefined) {
                    var r = t.DialogPage.split(","),
                    n = $("#ad-dialog"),
                    i = new Image;
                    i.src = t.Dialog;
                    i.onload = function() {
                        var t = this.width;
                        $.each(r,
                        function(i, r) {
                            window.location.pathname == r && $("#ad-dialog").dialog({
                                width: t + 8,
                                modals: !0,
                                buttons: {
                                    "关闭": function() {
                                        n.dialog("close")
                                    }
                                },
                                open: function() {
                                    setTimeout(function() {
                                        n.dialog("close")
                                    },
                                    15e3)
                                },
                                position: {
                                    my: "center top",
                                    at: "top+220"
                                }
                            })
                        })
                    }
                }
            })
        })
    });
    r.post("/Home/GetLastMarquee").success(function(t) {
        n.newsBags = t
    });
    n.newsClick = function() {
        n.isMarqueeShowClass = !0
    };
    n.closeMarquee = function() {
        n.isMarqueeShowClass = !1
    };
    n.noviceClick = function() {
        var n = i.open("http://pk3755.com/", "_open", "width=1490,height=650");
        n.focus()
    };
    n.lineChatClick = function() {
        var t = i.open(n.ContactInfo.Live800Link, "_open", "width=820,height=480");
        t.focus()
    };
    n.qqClick = function(n) {
        var t = window.open("http://wpa.qq.com/msgrd?v=3&uin=" + n + "&site=qq&menu=yes", "_open", "width=588,height=486");
        t.focus()
    };
    n.FreePlayClick = function() {
        var n = window.open("/Trial/Apply");
        n.focus()
    };
    n.GpkBingoClick = function() {
        var n = window.open("http://gpk-gameinfo.com/GALAXYonline.mp4", "_open", "width=588,height=486");
        n.focus()
    };
    n.liveCasinoClick = function() {
        var n = window.open("http://gpk-gameinfo.com/Live_casino/", "_blank", "width=1000,height=800");
        n.focus()
    };
    n.AgentLoginClick = function() {
        var t = i.open(n.ContactInfo.AgentLogin, "_blank");
        t.focus()
    };
    n.RegisterClick = function() {
        var n = i.open("/Register", "_parent");
        n.focus()
    };
    n.AgentApplyClick = function() {
        var n = i.open("/AgentApply", "_parent");
        n.focus()
    };
    n.addFavoriteClick = function() {
        var n = "http://" + f.host(),
        t = $(document).prop("title");
        try {
            window.external.addFavorite(n, t)
        } catch(i) {
            try {
                window.sidebar.addPanel(t, n, "")
            } catch(i) {
                alert("请按 Ctrl+D 键添加到收藏夹", "notice")
            }
        }
    };
    n.addHomePageClick = function() {
        var n = "http://" + f.host();
        document.all ? (document.body.style.behavior = "url(#default#homepage)", document.body.setHomePage(n)) : alert("您的浏览器目前不支援此功能！")
    }
}]);
app.controller("LobbiesCtrl", ["$scope", "$http", "$window", "$rootScope", "$timeout",
function(n, t, i, r) {
    function e(n) {
        var t = window.open("/Account/LoginToBB?bbpagesite=" + n + "", "_lobby", "resizable,scrollbars=yes, width=900, height=600");
        t.moveBy(f, u);
        t.focus()
    }
    function s() {
        var n = window.open("/Account/LoginToSaba", "_lobby", "resizable,scrollbars=yes, width=900, height=600");
        n.moveBy(f, u);
        n.focus()
    }
    function o(n) {
        var t = window.open("/Account/LoginToAg?lunchGame=" + n + "", "_lobby", "resizable,scrollbars=yes, width=900, height=600");
        t.moveBy(f, u);
        t.focus()
    }
    var f = (screen.width - 900) / 2,
    u = (screen.height - 600) / 3;
    n.isLogin = function() {
        return r.user && r.user.isLogin
    };
    n.maintain = function() {
        n.isLogin() && alert("升级中")
    };
    n.toBbSport = function() {
        e(0)
    };
    n.toBbLottery = function() {
        e(1)
    };
    n.toBbLive = function() {
        e(3)
    };
    n.toBbGame = function() {
        e(4)
    };
    n.toSabaGame = function() {
        s()
    };
    n.toMgDealer = function() {
        var n = i.open("/Account/LoginToMg2?lunchGame=1&startTab=0", "_lobby", "resizable,scrollbars=yes, width=1000, height=900");
        n.moveBy(f, u);
        n.focus()
    };
    n.toMgFlash = function() {
        var n = window.open("/SlotCasino/MgFlash", "_lobby", "resizable,scrollbars=yes, width=1000, height=930");
        n.moveBy((screen.width - 1e3) / 2, (screen.height - 930) / 3);
        n.focus()
    };
    n.toMgHtml = function() {
        var n = window.open("/SlotCasino/MgHtml", "_lobby", "resizable,scrollbars=yes, width=1000, height=930");
        n.moveBy((screen.width - 1e3) / 2, (screen.height - 930) / 3);
        n.focus()
    };
    n.toAgLive = function() {
        o(0)
    };
    n.toAgFish = function() {
        o(6)
    };
    n.toAgGame = function() {
        o(500)
    };
    n.toPt2Live = function() {
        var n = window.open("/LiveCasino/Pt2Live", "_lobby", "resizable,scrollbars=yes, width=1035, height=930");
        n.moveBy((screen.width - 1035) / 2, (screen.height - 930) / 3);
        n.focus()
    };
    n.toPt2Flash = function() {
        var n = window.open("/SlotCasino/Pt2Flash", "_lobby", "resizable,scrollbars=yes, width=1055, height=930");
        n.moveBy((screen.width - 1055) / 2, (screen.height - 930) / 3);
        n.focus()
    };
    n.toPt2Html = function() {
        var n = window.open("/SlotCasino/Pt2Html", "_lobby", "resizable,scrollbars=yes, width=1055, height=930");
        n.moveBy((screen.width - 1055) / 2, (screen.height - 930) / 3);
        n.focus()
    };
    n.toPt2Fish = function() {
        var n = window.open("/Account/LoginToPt2?categoryType=1&gamecode=cashfi", "_lobby", "resizable,scrollbars=yes, width=1024, height=768");
        n.moveBy((screen.width - 1024) / 2, (screen.height - 768) / 3);
        n.focus()
    };
    n.toGpiLive = function() {
        var n = window.open("/LiveCasino/GpiLive", "_lobby", "resizable,scrollbars=yes, width=886, height=970");
        n.moveBy((screen.width - 886) / 2, (screen.height - 970) / 3);
        n.focus()
    };
    n.toGpiFlash = function() {
        var n = window.open("/SlotCasino/GpiFlash", "_lobby", "resizable,scrollbars=yes, width=886, height=970");
        n.moveBy((screen.width - 886) / 2, (screen.height - 970) / 3);
        n.focus()
    };
    n.toGpiHtml = function() {
        var n = window.open("/SlotCasino/GpiHtml", "_lobby", "resizable,scrollbars=yes, width=886, height=970");
        n.moveBy((screen.width - 886) / 2, (screen.height - 970) / 3);
        n.focus()
    };
    n.toSingSport = function() {
        var n = window.open("/Account/LoginToSing?isMobile=false", "_lobby", "resizable,scrollbars=yes, width=1035, height=870");
        n.moveBy((screen.width - 1035) / 2, (screen.height - 870) / 3);
        n.focus()
    };
    n.toEvoLive = function() {
        return ! 1
    };
    n.toGnsHtml = function() {
        var n = window.open("/SlotCasino/GnsHtml", "_lobby", "resizable,scrollbars=yes, width=1000, height=910");
        n.moveBy((screen.width - 1e3) / 2, (screen.height - 910) / 3);
        n.focus()
    };
    n.toEgGame = function() {
        return ! 1
    };
    n.toEgLottery = function() {
        var n = window.open("/Account/LoginToEg?isMobile=false", "_lobby", "resizable,scrollbars=yes, width=1300, height=950");
        n.moveBy((screen.width - 1300) / 2, (screen.height - 950) / 3);
        n.focus()
    };
    n.toPrgFlash = function() {
        var n = window.open("/SlotCasino/PrgFlash", "_lobby", "resizable,scrollbars=yes, width=1000, height=950");
        n.moveBy((screen.width - 1e3) / 2, (screen.height - 950) / 3);
        n.focus()
    };
    n.toPrgHtml = function() {
        var n = window.open("/SlotCasino/PrgHtml", "_lobby", "resizable,scrollbars=yes, width=1000, height=950");
        n.moveBy((screen.width - 1e3) / 2, (screen.height - 950) / 3);
        n.focus()
    };
    n.toSgFlash = function() {
        var n = window.open("/SlotCasino/SgFlash", "_lobby", "resizable,scrollbars=yes, width=1000, height=960");
        n.moveBy((screen.width - 1e3) / 2, (screen.height - 960) / 3);
        n.focus()
    };
    n.toSgHtml = function() {
        var n = window.open("/SlotCasino/SgHtml", "_lobby", "resizable,scrollbars=yes, width=1000, height=960");
        n.moveBy((screen.width - 1e3) / 2, (screen.height - 960) / 3);
        n.focus()
    };
    n.toAbLive = function() {
        var n = i.open("/Account/LoginToAllBet", "_lobby", "resizable,scrollbars=yes, width=1000, height=900");
        n.moveBy((screen.width - 1e3) / 2, (screen.height - 900) / 3);
        n.focus()
    };
    n.toUgGame = function() {
        var n = i.open("/Account/LoginToUg?isMobile=false&gameId=101", "_lobby", "resizable,scrollbars=yes, width=1000, height=900");
        n.moveBy((screen.width - 1e3) / 2, (screen.height - 900) / 3);
        n.focus()
    };
    n.toUgFish = function() {
        var n = i.open("/Account/LoginToUg?isMobile=false&gameId=101", "_lobby", "resizable,scrollbars=yes, width=1000, height=900");
        n.moveBy((screen.width - 1e3) / 2, (screen.height - 900) / 3);
        n.focus()
    };
    n.toRgGame = function() {
        var n = i.open("/Account/LoginToRg", "_lobby", "resizable,scrollbars=yes, width=900, height=600");
        n.moveBy(f, u);
        n.focus()
    };
    n.toMwGame = function() {
        var n = i.open("/Account/LoginToMw", "_lobby", "resizable,scrollbars=yes, width=1250, height=900");
        n.moveBy((screen.width - 1250) / 2, (screen.height - 900) / 3);
        n.focus()
    };
    n.toMwFish = function() {
        var n = i.open("/Account/LoginToMw?gameId=50", "_lobby", "resizable,scrollbars=yes, width=1250, height=900");
        n.moveBy((screen.width - 1250) / 2, (screen.height - 900) / 3);
        n.focus()
    };
    n.toFish = function() {
        var n = i.open("/SlotCasino/Fish", "_lobby", "resizable,scrollbars=yes, width=1180, height=800");
        n.moveBy((screen.width - 1180) / 2, u);
        n.focus()
    };
    n.toBbinRule = function() {
        var n = window.open("http://777.gpk-online.com/", "_lobby", "resizable,scrollbars=yes, width=1000, height=600");
        n.moveBy(f, u);
        n.focus()
    };
    n.toSabaRule = function() {
        var n = window.open("http://gpk-gameinfo.com/world_cup/brasil02.html", "_lobby", "resizable,scrollbars=yes, width=1000, height=600");
        n.moveBy(f, u);
        n.focus()
    };
    n.toAGRule = function() {
        var n = window.open("http://gc.ag-game.net/agingame/rules/BAC_TR.htm", "_lobby", "resizable,scrollbars=yes, width=1000, height=600");
        n.moveBy(f, u);
        n.focus()
    };
    n.toMGRule = function() {
        var n = window.open("https://livegames.gameassists.co.uk/HelpCenter/Diamond/LiveGames/zh-tw/Default.htm#cshid=1", "_lobby", "resizable,scrollbars=yes, width=1000, height=600");
        n.moveBy(f, u);
        n.focus()
    }
}]);
app.controller("LoginCtrl", ["$scope", "$http", "labelService", "$window", "$timeout",
function(n, t, i, r) {
    n.loginParams = {
        account: $("#login_account").val(),
        password: $("#login_password").val()
    };
    n.isProcessing = !1;
    n.login = function(u) {
        var f = document.getElementById("agree");
        if (f.style.display = "block", !n.checkCode) {
            r.alert(i.get("GPK.Lib.Empty_Checkcode") || "验证码为空, 请取得验证码");
            return
        }
        u.checkCodeEncrypt = n.checkCode.encrypt;
        n.isProcessing = !0;
        t.post("/Account/Login", u).success(function(t) {
            if (t.IsSuccess) r.location.reload();
            else {
                var u = i.get("GPK.Lib.Error_Occurred") || "发生错误";
                r.alert(u + ":" + t.ErrorMessage);
                n.loginParams.checkCode = null;
                n.isProcessing = !1;
                $("#check-code-wrapper input").focus()
            }
        })
    };
    n.agreement = function() {
        var t = (screen.width - 850) / 2,
        i = (screen.height - 800) / 3,
        n = r.open("/Home/Agreement", "", "resizable,scrollbars=yes, width=900, height=850");
        n.moveBy(t, i);
        n.focus()
    };
    n.loginOver = !1;
    var u = $("#agree"),
    f = $("#login-box");
    f.hover(function() {
        u.fadeIn(1e3);
        n.loginOver = !n.loginOver
    },
    function() {
        n.loginOver = !n.loginOver
    });
    u.hover(function() {
        n.loginOver = !n.loginOver
    },
    function() {
        u.fadeOut(1e3);
        n.loginOver = !n.loginOver
    })
}]);
app.controller("OnlineDepositCtrl", ["$scope", "$http", "$window",
function(n, t, i) {
    function u(t) {
        switch (n.condition) {
        case "between":
            return t >= n.min && t <= n.max;
        case "more":
            return t >= n.min;
        case "less":
            return t > 0 && t <= n.max;
        default:
            return ! 0
        }
    }
    var r = [1e5, 5e4, 3e4, 2e4, 9950, 9025, 8855, 7952, 7018, 6150, 5252, 4785, 4230, 3975, 3500, 2850, 2322, 1925, 1668, 1205, 1018, 800, 728, 656, 589, 500, 448, 400, 359, 300, 256, 200, 125, 109, 100, 50, 1];
    n.loading = !0;
    t.post("/OnlineDeposit/GetDepositRule").success(function(t) {
        if (!t.IsSuccess) {
            i.alert("发生错误: " + t.ErrorMessage);
            i.location.reload();
            return
        }
        var f = n.min = t.Min,
        e = n.max = t.Max;
        n.condition = f != null && e != null ? "between": f != null && e == null ? "more": f == null && e != null ? "less": "unlimited";
        n.availableAmounts = [];
        angular.forEach(r,
        function(t) {
            u(t) && n.availableAmounts.push(t)
        });
        n.availableAmounts.length && (n.amount = n.availableAmounts[0]);
        n.loading = null
    })
}]);
app.controller("PromotionCtrl", ["$scope", "$http", "$sce", "labelService",
function(n, t, i, r) {
    function s() {
        t.post("/Cdn/GetPromotion").success(f)
    }
    function f(t) {
        if (t === "") {
            $("#loading").html('<span><i class="fa fa-exclamation-circle" aria-hidden="true" style="margin-right:5px"><\/i>伺服器忙碌中，请洽客服人员<\/span>');
            return
        }
        n.categories = JSON.parse(JSON.stringify(t));
        $("#loading").css("display", "none");
        var i = $.grep(n.categories,
        function(n) {
            return n.isSelected
        });
        i.length == 0 && angular.isObject(n.categories[0]) && (n.categories[0].isSelected = !0)
    }
    var u, e, o;
    if ($("#un-lobby").append('<div id="loading" style="width: 800px;margin: 20px auto;line-height: 50px;text-align: center;background-color:rgba(255,255,255,.5); background-color:#7f7f7f \\9;"><i class="fa fa-spinner fa-spin" style="margin-right:5px"><\/i>' + (r.get("Common.Loading") || "载入中") + "<\/div>"), window.location.pathname.toLowerCase().indexOf("preview") > 1) {
        u = _uccm2;
        window.addEventListener("message", h, !1);
        function h(n) {
            n.origin == u ? f(n.data) : console.log("无法对应管端网域")
        }
        e = window.location.search;
        o = $('<iframe src="' + u + "/PromotionManagement/Preview" + e + '" style="display: none;"><\/iframe');
        $("body").append(o)
    } else s();
    n.toHtml = function(n) {
        return i.trustAsHtml(n)
    };
    n.categoryClick = function(t) {
        for (var i in n.categories) n.categories[i].isSelected = n.categories[i] == t;
        n.itemClick(null)
    };
    n.itemClick = function(t) {
        var r, u, i, f;
        for (r in n.categories) for (u in n.categories[r].items) i = n.categories[r].items[u],
        f = i === t,
        i.isSelected = f ? !i.isSelected: !1
    }
}]);
app.controller("RegisterAgreementCtrl", ["$scope", "$modalInstance",
function(n, t) {
    n.close = function() {
        t.close()
    }
}]);
app.controller("RegisterCtrl", ["$scope", "$window", "$http", "$modal", "labelService",
function(n, t, i, r, u) {
    n.params = {};
    n.agree = !0;
    n.isShowMore = !1;
    n.openAgreementClick = function() {
        var n = r.open({
            templateUrl: "/Register/Agreement",
            controller: "RegisterAgreementCtrl"
        })
    };
    n.$watch("params.Mobile",
    function(t, i) {
        if (t) {
            var r = new RegExp("^[0-9]+$").test(t);
            r || (n.params.Mobile = i)
        }
    });
    n.$watch("params.QQAccount",
    function(t, i) {
        if (t) {
            var r = new RegExp("^[0-9]+$").test(t);
            r || (n.params.QQAccount = i)
        }
    });
    n.register = function(r) {
        var f = new RegExp("^[A-Za-z][A-Za-z_0-9]{1,14}$").test(n.params.Account);
        if (!f) {
            t.alert(u.get("Register.Account_Error") || "会员帐号格式错误");
            return
        }
        if (n.Confirm_Password != r.Password) {
            t.alert(u.get("Register.Different_Password") || "会员密码与确认密码不同");
            return
        }
        if (!n.agree) {
            t.alert(u.get("Register.Not_Agree") || "未同意用户注册协议");
            return
        }
        if (!n.checkCode) {
            t.alert(u.get("Register.Empty_Checkcode") || "验证码为空, 请取得验证码");
            return
        }
        r.checkCodeEncrypt = n.checkCode.encrypt;
        n.isProcessing = !0;
        i.post("/Register/Submit", r).success(function(i) {
            if (i.IsSuccess) setTimeout(function() {
                $("#btn-submit").focus()
            }),
            t.alert(u.get("Register.Successful_Registration") || "注册成功"),
            t.location = "/Register/Success";
            else {
                var r = i.ErrorMessage;
                alert(r);
                r && r.indexOf("找不到此代理商") >= 0 && $("#parentAccount").select().focus();
                n.params.checkCode = null;
                $("#checkcode-input-group input").focus()
            }
            n.isProcessing = !1
        })
    };
    n.moreOptionClick = function() {
        n.isShowMore = !0
    };
    n.closeMarquee = function() {
        n.isMarqueeShowClass = !1
    };
    n.scope = n;
    i.post("/Register/GetRegisterSetting").success(function(t) {
        if (t.IsSuccess === !1) {
            alert(t.errorMessage);
            return
        }
        n.registerSetting = t;
        n.state = "ok"
    });
    n.hasOptional = function() {
        var t, i, r, u;
        for (t in n.registerSetting) if ((i = t.indexOf("IsShow_"), !(i < 0)) && (r = n.registerSetting[t], r != !1) && (u = n.registerSetting["IsRequired_" + t.split("_")[1]], u == !1)) return ! 0;
        return ! 1
    }
}]);
app.controller("StationMailCountCtrl", ["$scope", "$http", "signalrService", "DataService",
function(n, t, i, r) {
    n.MailIsReadCount = r.getValue();
    t.post("/StationMail/GetUnreadCount").success(function(n) {
        n.isSuccess !== !1 && n > 0 && r.setValue(n)
    });
    i.on("GetUnRead_Count",
    function(n) {
        r.setValue(n)
    })
}]);
app.controller("StationMailCtrl", ["$scope", "$http", "$window", "$modal", "$timeout", "bodyScrollService", "signalrService", "DataService",
function(n, t, i, r, u, f, e) {
    function h() {
        $(window).off("scroll")
    }
    function o() {
        if (!s && !(f.getDistanceOfBottom() > 1e3)) {
            if (!n.isScroll) {
                n.pageIndex = 0;
                return
            }
            s = t.post("/StationMail/GetMailList", {
                pageIndex: n.pageIndex
            }).success(function(t) {
                if (n.loading = !1, n.pageIndex = n.pageIndex + 1, t.isSuccess === !1) {
                    i.alert(t.errorMessage);
                    return
                }
                if (t.total === 0) {
                    n.showview = "nothing";
                    return
                }
                if (n.pageIndex == t.pageCount && (n.isScroll = !1, h()), n.showview = "getlist", n.mailParams.Total = t.total, n.mailParams.PageCount = t.pageCount, n.pageIndex == 0) n.loading = !1,
                n.getMailList = angular.copy(t.mailData);
                else for (var r in t.mailData) n.getMailList.push(t.mailData[r]);
                s = null;
                u(o)
            })
        }
    }
    n.loading = !0;
    n.getMailList = [];
    n.mailParams = {};
    n.isScroll = !0;
    n.pageIndex = 0;
    var s;
    $(window).scroll(function() {
        f.getDistanceOfBottom() < 90 && o(n.pageIndex)
    });
    $(document).on("scroll", o);
    o();
    n.goDetail = function(n) {
        i.location.href = "/StationMail/Detail/" + n
    };
    n.openNewMail = function() {
        r.open({
            templateUrl: "/StationMail/WriteMailDialog",
            controller: "StationMailWriteDialogCtrl"
        })
    };
    e.on("GetMailList_New",
    function(t) {
        var i = $.grep(n.getMailList,
        function(n) {
            return n.Id == t.Id
        }).length > 0;
        if (!i) {
            if (n.getMailList.length >= 0) {
                n.getMailList.splice(0, 0, t);
                return
            }
            o(n.pageIndex)
        }
    });
    e.on("GetMailListIsRead",
    function(t) {
        var r = $.grep(n.getMailList,
        function(n) {
            return n.Id == t.mailId
        }),
        i;
        r.length != 0 && (i = r[0], i.IsRead = t.isRead, i.UpdateTime = t.UpdateTime)
    })
}]);
*//*app.controller("StationMailDetailCtrl", ["$scope", "$http", "$window", "$timeout", "signalrService", "DataService",
function(n, t, i, r, u, f) {
    n.mailSubjectParams = {};
    n.reply = {
        mailId: $("#mailId").text(),
        IsMember: !0,
        ReplierAccount: "您",
        ReplyTime: null,
        connectionId: null
    };
    n.replyParams = [];
    n.loading = !0;
    n.enterCheck = !0;
    n.error = !0;
    n.replyStatus = !1;
    n.enterChange = function(n) {
        if ($textarea = $("#replyMsg"), $textarea.off("keypress").focus(), n.enterCheck) $textarea.focus().on("keypress",
        function(n) {
            if (n.keyCode == 13 && !n.shiftKey) return $("#submit").click(),
            n.preventDefault(),
            !1
        })
    };
    n.getMailDetail = function() {
        t.post("/StationMail/SetMailIsRead", {
            mailId: $("#mailId").text()
        });
        t.post("/StationMail/GetMailDetial", {
            id: $("#mailId").text()
        }).success(function(t) {
            if (n.loading = !1, t.isSuccess === !1) {
                n.error = !1;
                return
            }
            f.setValue(t.UnreadCount);
            n.mailSubjectParams = t;
            r(function() {
                n.enterChange(n)
            })
        })
    };
    n.getMailDetail();
    n.submit = function() {
        var i = n.replyParams.push(angular.copy(n.reply)) - 1;
        n.replyParams[i].replyStatus = !0;
        u.donePromise.then(function() {
            n.reply.connectionId = u.getConnectionId();
            n.replyParams[i].connectionId = u.getConnectionId();
            t.post("/StationMail/CreateReply", n.reply).success(function(t) {
                if (t.isSuccess == !1) {
                    n.replyParams[i].addReplyErr = !0;
                    n.replyParams[i].errorMsg = t.errorMessage;
                    n.reply.ReplyContent = null;
                    return
                }
                n.replyParams[i].replyStatus = !1;
                n.reply.ReplyTime = t.datetime;
                n.mailSubjectParams.ReplyData.push(angular.copy(n.reply));
                n.reply.ReplyContent = null
            })
        })
    };
    n.isReply = function(i) {
        t.post("/StationMail/CreateReply", n.replyParams[i]).success(function(t) {
            if (t.isSuccess == !1) {
                n.replyParams[i].errorMsg = t.errorMessage;
                return
            }
            n.replyParams[i].replyStatus = !1;
            n.replyParams[i].ReplyTime = t.datetime;
            n.getMailDetail.ReplyData.push(angular.copy(n.replyParams[i]))
        })
    };
    n.isEdit = function(t) {
        n.replyParams[t].isEditStatus = !n.replyParams[t].isEditStatus
    };
    n.isCanel = function(t) {
        n.replyParams[t].replyStatus = !1
    };
    u.on("ReplyContent",
    function(i) {
        $("#mailId").text() == i.mailId && (n.mailSubjectParams.ReplyData.push(i.replyContent), t.post("/StationMail/SetMailIsRead", {
            mailId: i.mailId
        }))
    })
}]);
app.controller("StationMailWriteDialogCtrl", ["$scope", "$http", "$window", "$modalInstance",
function(n, t, i, r) {
    n._focusOn = {};
    n._focusOn.target = "Subject";
    n.isProcess = !1;
    n.close = r.close;
    n.applyMail = function(r) {
        if (!r.Content && i.confirm("信息内容为空白，确定送出吗？") == !1) {
            n.isProcess = !1;
            return
        }
        n.isProcess = !0;
        t.post("/StationMail/CreateMail", r).success(function(t) {
            if (n.isProcess = !1, t.isSuccess == !1) {
                i.alert(t.errorMessage);
                return
            }
            i.alert("您的信件已送出");
            n.close()
        })
    }
}]);
app.controller("TransactionCtrl", ["$scope", "$http", "$modal",
function(n, t, i) {
    function u(t) {
        r.count = 40;
        r.timeBegin = f(t);
        n.records = [];
        n.complete = !1;
        n.isProcessing = !1;
        n.state = "";
        n.loadMore()
    }
    function f(n) {
        var t = moment(new Date($("html").attr("meidon-time")));
        return t.subtract(n, "days").format("YYYY/MM/DD")
    }
    var r = {};
    n.selectedBtn = 0;
    n.openDetailDialog = function(n) {
        var t = i.open({
            templateUrl: "/Transaction/DetailDialog",
            controller: "TransactionDetailDialogCtrl",
            resolve: {
                id: function() {
                    return n
                }
            }
        })
    };
    n.loadMore = function() {
        n.complete || n.isProcessing || (n.isProcessing = !0, r.skip = n.records.length, t.post("/Transaction/Search", r).success(function(t) {
            n.isProcessing = null;
            angular.forEach(t.records,
            function(t) {
                n.records.push(t)
            });
            t.records && t.records.length < r.count && (n.complete = !0);
            n.state = "ok"
        }))
    };
    n.changeTimeBegin = function(n, t) {
        r.timeEnd = angular.isUndefined(t) ? null: f(t);
        u(n)
    };
    u(0)
}]);
app.controller("TransactionDetailDialogCtrl", ["$scope", "$http", "$window", "$modalInstance", "id",
function(n, t, i, r, u) {
    n.loading = !0;
    t.post("/Transaction/GetDetail", {
        id: u
    }).success(function(t) {
        if (!t.IsSuccess) {
            i.alert("发生错误: " + t.ErrorMessage);
            r.close();
            return
        }
        n.tran = t.Transaction;
        n.loading = null
    });
    n.close = function() {
        r.close()
    }
}]);
app.controller("TransferCtrl", ["$scope", "$http", "$filter", "$window",
function(n, t, i, r) {
    t.post("/Transaction/TransferInit").success(function(t) {
        n.balance = t.balance;
        n.complete = !0
    });
    n.submit = function() {
        var u, f, e;
        if (n.balance - n.money < 0) {
            r.alert("余额不足");
            return
        } (u = i("customCurrency"), f = "转出帐号　：" + n.account + "\r金额　　　：" + u(n.money) + "\r转帐後余额：" + u(n.balance - n.money) + "\r\r确定转帐?", confirm(f)) && (e = {
            receiveMemberAccount: n.account,
            money: n.money,
            moneyPassword: n.password
        },
        n.isProcessing = !0, t.post("/Transaction/TransferSubmit", e).success(function(t) {
            n.isProcessing = null;
            t.IsSuccess ? (r.alert("转帐成功"), r.location.href = "/") : alert("发生错误：" + t.ErrorMessage)
        }))
    }
}]);
app.controller("TrialCtrl", ["$scope", "$http", "$window", "$location",
function(n, t, i) {
    function r(n) {
        return /^[0-9]*$/.test(n)
    }
    n.apply = function(u) {
        if (!r(u.params.mobile)) {
            i.alert("手机号请输入数字");
            $("#mobile").focus();
            return
        }
        n.params.checkCodeEncrypt = u.checkCode.encrypt;
        t.post("/Trial/ApplySubmit", n.params).success(function(t) {
            if (t.IsSuccess === !1) {
                i.alert(t.ErrorMessage);
                n.params.checkCode = null;
                n.checkCode = null;
                $('input[name="checkCode"]').focus();
                return
            }
            i.alert("试玩帐号申请成功，请联络在线客服索取");
            i.location.href = "/Trial/Login"
        })
    };
    n.login = function(n) {
        t.post("/Trial/LoginSubmit", n.params).success(function(n) {
            if (n.isSuccess === !1) {
                i.alert(n.errorMessage);
                return
            }
            i.location.href = "/"
        })
    }
}]);
app.controller("WithdrawApplicationAdministrationFeeDialogCtrl", ["$scope", "$http", "$window", "$modalInstance",
function(n, t, i, r) {
    n.showView = "loadData";
    t.post("/WithdrawApplication/AdministrationDetail").success(function(t) {
        n.records = t;
        n.records.length == 0 ? n.showView = "noData": (n.showView = "getData", n.total = 0, angular.forEach(t,
        function(t) {
            t && t.IsAudit === !1 && t.Amount && (n.total += t.Amount)
        }))
    });
    n.close = r.close
}]);
*//*app.controller("WithdrawApplicationCtrl", ["$scope", "$http", "$window", "$modal",
function(n, t, i, r) {
    function u(t, i) {
        t = t == null ? n.min = 1 : n.min = t;
        i = n.max = i;
        n.condition = t != null && i != null ? "between": t != null && i == null ? "more": t == null && i != null ? "less": "unlimited"
    }
    n.isValid = !0;
    n.chineseIsValid = !0;
    n.numberIsValid = !0;
    n.numberOrEmailIsValid = !0;
    n.emailIsValid = !0;
    n.loading = !0;
    t.post("/WithdrawApplication/Init").success(function(t) {
        if (n.loading = null, t.isSuccess === !1) {
            n.isSuccess = t.isSuccess;
            n.errorMsg = t.errorMessage;
            return
        }
        if (t.NoBank) {
            n.updateBankAccountParams = {
                BankName: t.MemberBanks[0]
            };
            n.showBankAccount = !0;
            n.banks = t.MemberBanks;
            setTimeout(function() {
                $("#inputBankName").focus()
            });
            return
        }
        n.bankAccount = t.BankAccount;
        n.balance = t.Balance;
        n.fee = t.Fee;
        n.adFee = t.TotalAdministration;
        n.TotalDiscountCancel = t.TotalDiscountCancel;
        n.IsPassAudit = t.IsPassAudit;
        u(t.WithdrawMin, t.WithdrawMax);
        setTimeout(function() {
            $("#inputAmount").focus()
        })
    });
    n.updateBankName = function() {
        n.isValid = !0;
        n.chineseIsValid = !0;
        n.numberIsValid = !0;
        n.numberOrEmailIsValid = !0;
        n.emailIsValid = !0;
        n.updateBankAccountParams.Account = ""
    };
    n.updateAccount = function() {
        var i = n.updateBankAccountParams.BankName.AccountFormat,
        t = n.updateBankAccountParams.Account;
        if (t != undefined) switch (i) {
        case 1:
            if (n.chineseIsValid = new RegExp(/^[^\u4e00-\u9fa5]+$/).test(t), n.chineseIsValid) n.chineseIsValid = !0,
            n.isValid = !0;
            else {
                n.isValid = !1;
                return
            }
            break;
        case 2:
            if (n.numberIsValid = new RegExp(/^[0-9]+$/).test(t), n.numberIsValid) n.numberIsValid = !0,
            n.isValid = !0;
            else {
                n.isValid = !1;
                return
            }
            break;
        case 3:
            if (n.numberOrEmailIsValid = new RegExp(/^[0-9]+$/).test(t), n.numberOrEmailIsValid) n.numberOrEmailIsValid = !0,
            n.isValid = !0;
            else if (n.numberOrEmailIsValid = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/).test(t), n.numberOrEmailIsValid) n.numberOrEmailIsValid = !0,
            n.isValid = !0;
            else {
                n.isValid = !1;
                return
            }
            break;
        case 4:
            if (n.emailIsValid = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/).test(t), n.emailIsValid) n.emailIsValid = !0,
            n.isValid = !0;
            else {
                n.isValid = !1;
                return
            }
        } else n.isValid = !0,
        n.chineseIsValid = !0,
        n.numberIsValid = !0,
        n.numberOrEmailIsValid = !0,
        n.emailIsValid = !0
    };
    n.updateBankAccount = function(r) {
        if (!r.BankName) {
            i.alert("请填入银行名称");
            return
        }
        if (!r.Province) {
            i.alert("请填入省份");
            return
        }
        if (!r.City) {
            i.alert("请填入城市");
            return
        }
        if (!r.Account) {
            i.alert("请填入银行帐号");
            return
        }
        if (n.bankAccount) {
            i.alert("银行帐号已设定, 若要更改银行帐号请洽客服");
            return
        }
        if (!n.isValid) {
            $("#inputAccount").focus();
            return
        }
        r.GroupBankId = r.BankName.Id;
        t.post("/WithdrawApplication/UpdateBankAccount", r).success(function(t) {
            t.IsSuccess ? (n.bankAccount = r, n.bankAccount.BankName = r.BankName.Name, n.balance = t.Balance, n.fee = t.Fee, n.adFee = t.Administration, n.TotalDiscountCancel = t.DiscountCancel, n.IsPassAudit = t.IsPassAudit, u(t.Min, t.Max), setTimeout(function() {
                $("#inputAmount").focus()
            })) : i.alert(t.ErrorMessage)
        })
    };
    n.applyParams = {};
    n.apply = function(r) {
        if (n.isShowApply = !0, !r.amount) {
            i.alert("请填入取款金额");
            return
        }
        if (n.isOverdraft()) {
            i.alert("帐户额余不足");
            return
        }
        t.post("/WithdrawApplication/Apply", r).success(function(t) {
            n.isShowApply = !1;
            t.IsSuccess ? (i.alert("提款申请成功"), i.location.href = "/") : i.alert(t.ErrorMessage)
        })
    };
    n.showAccount = function() {
        n.showBankAccount = !0
    };
    n.showCalculation = function(t) {
        n.isShowCalculation = t
    };
    n.showMinimalAmount = function() {
        n.isShowMinimalAmount = !0
    };
    n.isOverdraft = function() {
        return n.$eval("balance - applyParams.amount - fee - adFee - TotalDiscountCancel < 0")
    };
    n.isWithdrawal = function() {
        return n.$eval("balance - applyParams.amount - adFee - fee - TotalDiscountCancel < min")
    };
    n.showAdministrationFeeDialog = function() {
        r.open({
            templateUrl: "/WithdrawApplication/AdministrationFeeDialog",
            controller: "WithdrawApplicationAdministrationFeeDialogCtrl",
            windowClass: "ad-fee-dialog"
        })
    }
}])
*/

  $(document).ready(function() {
    $('#closed').click(function(){
		$('#service-left').hide();		
		});
	$('#closed02').click(function(){
		$('#service-right').hide();
		});
	$('#closedlb').click(function(){
		$('#service-lb').hide();
		
		});
	
});