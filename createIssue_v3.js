define(["qlik", "jquery", "qlik", "text!./createIssue_v3-templatate.html", 'text!./createIssue_v3-style.css'],
    function(e, t, qs, template, css) {
        var flURL;
        var fieldList;
        $('<style>').html(css).appendTo('head');
        return function(e) {
            var t = {};

            function n(o) {
                if (t[o]) return t[o].exports;
                var r = t[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
            }
            return n.m = e, n.c = t, n.d = function(e, t, o) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: o
                })
            }, n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, n.t = function(e, t) {
                if (1 & t && (e = n(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var o = Object.create(null);
                if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                    for (var r in e) n.d(o, r, function(t) {
                        return e[t]
                    }.bind(null, r));
                return o
            }, n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "", n(n.s = 2)
        }([function(t, n) {
            t.exports = e
        }, function(e, n) {
            e.exports = t
        }, function(e, t, n) {
            e.exports = n(8)
        }, function(e, t, n) {
            var o = n(4);
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n(6)(o, r);
            o.locals && (e.exports = o.locals)
        }, function(e, t, n) {
            (e.exports = n(5)(!1)).push([e.i, ".dashboardLinkGenerator {\n  display: inline-block;\n  padding: 0px 0px;\n  margin-bottom: 0;\n  font-size: 10px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: normal;\n  vertical-align: middle;\n  width: calc(100%);\n  height: calc(100%);\n  color: #fff;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n", ""])
        }, function(e, t) {
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map(function(t) {
                        var n = function(e, t) {
                            var n = e[1] || "",
                                o = e[3];
                            if (!o) return n;
                            if (t && "function" == typeof btoa) {
                                var r = function(e) {
                                        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                                    }(o),
                                    i = o.sources.map(function(e) {
                                        return "/*# sourceURL=" + o.sourceRoot + e + " */"
                                    });
                                return [n].concat(i).concat([r]).join("\n")
                            }
                            return [n].join("\n")
                        }(t, e);
                        return t[2] ? "@media " + t[2] + "{" + n + "}" : n
                    }).join("")
                }, t.i = function(e, n) {
                    "string" == typeof e && (e = [
                        [null, e, ""]
                    ]);
                    for (var o = {}, r = 0; r < this.length; r++) {
                        var i = this[r][0];
                        "number" == typeof i && (o[i] = !0)
                    }
                    for (r = 0; r < e.length; r++) {
                        var a = e[r];
                        "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
                    }
                }, t
            }
        }, function(e, t, n) {
            var o = {},
                r = function(e) {
                    var t;
                    return function() {
                        return void 0 === t && (t = e.apply(this, arguments)), t
                    }
                }(function() {
                    return window && document && document.all && !window.atob
                }),
                i = function(e) {
                    var t = {};
                    return function(e, n) {
                        if ("function" == typeof e) return e();
                        if (void 0 === t[e]) {
                            var o = function(e, t) {
                                return t ? t.querySelector(e) : document.querySelector(e)
                            }.call(this, e, n);
                            if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try {
                                o = o.contentDocument.head
                            } catch (e) {
                                o = null
                            }
                            t[e] = o
                        }
                        return t[e]
                    }
                }(),
                a = null,
                s = 0,
                c = [],
                l = n(7);

            function u(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        i = o[r.id];
                    if (i) {
                        i.refs++;
                        for (var a = 0; a < i.parts.length; a++) i.parts[a](r.parts[a]);
                        for (; a < r.parts.length; a++) i.parts.push(v(r.parts[a], t))
                    } else {
                        var s = [];
                        for (a = 0; a < r.parts.length; a++) s.push(v(r.parts[a], t));
                        o[r.id] = {
                            id: r.id,
                            refs: 1,
                            parts: s
                        }
                    }
                }
            }

            function d(e, t) {
                for (var n = [], o = {}, r = 0; r < e.length; r++) {
                    var i = e[r],
                        a = t.base ? i[0] + t.base : i[0],
                        s = {
                            css: i[1],
                            media: i[2],
                            sourceMap: i[3]
                        };
                    o[a] ? o[a].parts.push(s) : n.push(o[a] = {
                        id: a,
                        parts: [s]
                    })
                }
                return n
            }

            function f(e, t) {
                var n = i(e.insertInto);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var o = c[c.length - 1];
                if ("top" === e.insertAt) o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), c.push(t);
                else if ("bottom" === e.insertAt) n.appendChild(t);
                else {
                    if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    var r = i(e.insertAt.before, n);
                    n.insertBefore(t, r)
                }
            }

            function p(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
                var t = c.indexOf(e);
                t >= 0 && c.splice(t, 1)
            }

            function h(e) {
                var t = document.createElement("style");
                if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
                    var o = function() {
                        0;
                        return n.nc
                    }();
                    o && (e.attrs.nonce = o)
                }
                return b(t, e.attrs), f(e, t), t
            }

            function b(e, t) {
                Object.keys(t).forEach(function(n) {
                    e.setAttribute(n, t[n])
                })
            }

            function v(e, t) {
                var n, o, r, i;
                if (t.transform && e.css) {
                    if (!(i = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function() {};
                    e.css = i
                }
                if (t.singleton) {
                    var c = s++;
                    n = a || (a = h(t)), o = m.bind(null, n, c, !1), r = m.bind(null, n, c, !0)
                } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
                    var t = document.createElement("link");
                    return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", b(t, e.attrs), f(e, t), t
                }(t), o = function(e, t, n) {
                    var o = n.css,
                        r = n.sourceMap,
                        i = void 0 === t.convertToAbsoluteUrls && r;
                    (t.convertToAbsoluteUrls || i) && (o = l(o));
                    r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                    var a = new Blob([o], {
                            type: "text/css"
                        }),
                        s = e.href;
                    e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
                }.bind(null, n, t), r = function() {
                    p(n), n.href && URL.revokeObjectURL(n.href)
                }) : (n = h(t), o = function(e, t) {
                    var n = t.css,
                        o = t.media;
                    o && e.setAttribute("media", o);
                    if (e.styleSheet) e.styleSheet.cssText = n;
                    else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(n))
                    }
                }.bind(null, n), r = function() {
                    p(n)
                });
                return o(e),
                    function(t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                            o(e = t)
                        } else r()
                    }
            }
            e.exports = function(e, t) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = r()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
                var n = d(e, t);
                return u(n, t),
                    function(e) {
                        for (var r = [], i = 0; i < n.length; i++) {
                            var a = n[i];
                            (s = o[a.id]).refs--, r.push(s)
                        }
                        e && u(d(e, t), t);
                        for (i = 0; i < r.length; i++) {
                            var s;
                            if (0 === (s = r[i]).refs) {
                                for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                                delete o[s.id]
                            }
                        }
                    }
            };
            var y = function() {
                var e = [];
                return function(t, n) {
                    return e[t] = n, e.filter(Boolean).join("\n")
                }
            }();

            function m(e, t, n, o) {
                var r = n ? "" : o.css;
                if (e.styleSheet) e.styleSheet.cssText = y(t, r);
                else {
                    var i = document.createTextNode(r),
                        a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
                }
            }
        }, function(e, t) {
            e.exports = function(e) {
                var t = "undefined" != typeof window && window.location;
                if (!t) throw new Error("fixUrls requires window.location");
                if (!e || "string" != typeof e) return e;
                var n = t.protocol + "//" + t.host,
                    o = n + t.pathname.replace(/\/[^\/]*$/, "/");
                return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                    var r, i = t.trim().replace(/^"(.*)"$/, function(e, t) {
                        return t
                    }).replace(/^'(.*)'$/, function(e, t) {
                        return t
                    });
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
                })
            }
        }, function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(0),
                r = n.n(o),
                i = n(1),
                a = n.n(i);

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var c = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.id = n, this.selectionCountCubeId = null, this.maxValuesSelectedInField = 0, this.suspectedCountCubeId = null, this.suspectedFieldCount = 0, this.selectionUrl = "", this.isInEdit = !1, this.isProcessing = !1, this.isTooManySelections = !1, this.isTextBoxMode = !1, this.isSuccessMessageActive = !1;
                    var o = this;
                    this.selState = t.selectionState();
                    this.selState.OnData.bind(function() {
                        o.onSelectionChanged(t)
                    });
                    var i = t.model.layout.qFileName;
                    ".qvf" == i.substring(i.length - 4) && (i = i.slice(0, -4));
                    var a = encodeURIComponent(i),
                        s = r.a.navigation.getCurrentSheetId().sheetId,
                        c = window.location.href.substr(0, window.location.href.indexOf("/sense/app"));
                    this.baseURL = c + "/sense/app/" + a + "/sheet/" + s + "/state/analysis/options/clearselections"
                }
                return function(e, t, n) {
                    t && s(e.prototype, t), n && s(e, n)
                }(e, [{
                        key: "updateButtonState",
                        value: function() {
                            var e = "#".concat(this.id, "-generateDashboardLink"),
                                t = a()("".concat(e));
                            //  $('.navigateToClipboard').html('Copied To Clipboard!');
                            if (t.parent().off("click.".concat("navigateToClipboard"), "".concat(e, ":enabled")), this.isProcessing) t.text("Processing...");
                            else if (this.isTooManySelections) $('navigateToClipboard').html("Too Many Selections");
                            else if (this.isSuccessMessageActive) t.text(this.isTextBoxMode ? "Link Generated!" : "Copied To Clipboard!");
                            else if (t.text(this.isTextBoxMode ? "Generate Link" : "Copy Dashboard Link"), !this.isInEdit) {
                                var n = this;
                                t.parent().on("click.".concat("dashboard-link-generator"), "".concat(e, ":enabled"), function() {
                                    return n.setAndCopyUrl(n.selectionUrl), n.showSuccess(), window.onbeforeunload = null, !1
                                })
                            }
                            $(".navigateToClipboard").unbind().click(function() {
                                navigateToClipboard(n.selectionUrl), window.onbeforeunload = null, !1
                            });
                            $(".navigateToMail").unbind().click(function() {
                                navigateToMail(n.selectionUrl);
                            });
                            var cubeData = qs.currApp(this);
                            var qDimensions = [];
                            qDimensions.push({ qDef: { qFieldDefs: ['zStudyId'] } });
                            cubeData.createCube({
                                    qDimensions: qDimensions,
                                    qMeasures: [{
                                        qDef: {
                                            qDef: "=GetCurrentSelections('&@#$^()','::::',';;;;'," + ")"
                                        }
                                    }],
                                    qInitialDataFetch: [{
                                        qTop: 0,
                                        qLeft: 0,
                                        qHeight: 1,
                                        qWidth: 2
                                    }]
                                })
                                .then(function(t) {
                                    fieldList = t.layout;
                                    flURL = n.selectionUrl;
                                })
                            $(".createIssue").unbind().click(function() {
                                callingCreateissue(qs, n.selectionUrl, fieldList);
                            });
                        }
                    },
                    {
                        key: "setProcessing",
                        value: function(e) {
                            this.isProcessing = e, this.updateButtonState()
                        }
                    },
                    {
                        key: "setTooManySelections",
                        value: function(e) {
                            this.isTooManySelections = e, this.updateButtonState()
                        }
                    },
                    {
                        key: "showSuccess",
                        value: function() {
                            var e = this;
                            e.isSuccessMessageActive = !0, e.updateButtonState(), setTimeout(function() {
                                e.isSuccessMessageActive = !1, e.updateButtonState()
                            }, 1500)
                        }
                    },
                    {
                        key: "getSelectionsForFieldAsync",
                        value: function(e, t) {
                            var n = this;
                            n.setProcessing(!0);
                            var o = a.a.Deferred(),
                                r = !1;
                            return function n(o) {
                                return o.length >= t.selectedCount ? o : e.createCube({
                                    qDimensions: [{
                                        qDef: {
                                            qFieldDefs: [t.fieldName]
                                        }
                                    }],
                                    qInitialDataFetch: [{
                                        qTop: o.length,
                                        qLeft: 0,
                                        qHeight: 1e4,
                                        qWidth: 1
                                    }]
                                }).then(function(t) {
                                    var i = t.layout.qHyperCube.qDataPages[0].qMatrix;
                                    e.destroySessionObject(t.layout.qInfo.qId);
                                    for (var a = 0; a < i.length; a++) {
                                        var s = i[a].map(function(e) {
                                            return r ? e.qNum : isNaN(e.qNum) ? e.qText : (r = !0, e.qNum)
                                        });
                                        o = o.concat(s)
                                    }
                                    return n(o)
                                })
                            }([]).then(function(e) {
                                n.setProcessing(!1), o.resolve({
                                    fieldName: t.fieldName,
                                    values: e
                                })
                            }), o
                        }
                    },
                    {
                        key: "onSelectionChanged",
                        value: function(e) {
                            var t = this;
                            for (var n in t.selState.selections)
                                if (t.selState.selections[n].selectedCount > t.maxSelected) return void t.setTooManySelections(!0);
                            t.setTooManySelections(!1);
                            var o = t.selState.selections.map(function(n) {
                                return t.getSelectionsForFieldAsync(e, n).then(function(e) {
                                    return "/select/".concat(encodeURIComponent(e.fieldName), "/") + "".concat(encodeURIComponent(e.values.join(";"))).replace(/\*/g, "%2A")
                                })
                            });
                            return Promise.all(o).then(function(e) {
                                t.selectionUrl = t.baseURL + (e.length > 0 ? e.reduce(function(e, t) {
                                    return e + t
                                }) : "")
                            })
                        }
                    },
                    {
                        key: "setAndCopyUrl",
                        value: function(e) {
                            var t = null;
                            this.isTextBoxMode ? t = document.querySelector("#".concat(this.id, "-textbox")) : ((t = document.createElement("textarea")).style.position = "fixed", t.style.top = 0, t.style.left = 0, t.style.width = "2em", t.style.height = "2em", t.style.padding = 0, t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", document.body.appendChild(t)), t.value = e, t.select();
                            try {
                                document.execCommand("copy")
                            } catch (e) {
                                s
                                console.log(e)
                            }
                            this.isTextBoxMode || document.body.removeChild(t)
                        }
                    },
                    {
                        key: "paint",
                        value: function(e, t, n, o) {
                            if (this.maxSelected !== n.maxSelected) {
                                var r = !!this.maxSelected;
                                this.maxSelected = n.maxSelected, r && this.onSelectionChanged(e)
                            }
                            var i = a()(); //('<button\n      id="'.concat(this.id, '-generateDashboardLink"\n      class="dashboardLinkGenerator"\n      style="background-color: ').concat(o.properties.dataColors.primaryColor, ';"/>'));

                            if ("clipboard" == n.outputMethod) t.html(i);
                            else if ("textbox" == n.outputMethod) {
                                var s = '<textarea id="'.concat(n.qInfo.qId, '-textbox" class="linkTextboxArea" type="text"\n      readOnly="true" style="height: 90%;width: 90%;font-size: 10px;" value="0"/>');
                                t.html('<table style="height:100%;text-align: center;"><tr><td style="width:20%;">\n      '.concat(i[0].outerHTML, '</td><td style="width:80%;">').concat(s, "</td></tr></table>"))
                            }
                            this.isInEdit = 2 === t.parent().scope().object.getInteractionState(), this.isTextBoxMode = "textbox" === n.outputMethod, this.updateButtonState();
                            this.onSelectionChanged(e);
                            this.updateButtonState();
                        }
                    }
                ]), e
            }();
            n(3), t.default = {
                template: template,
                definition: {
                    type: "items",
                    component: "accordion",
                    items: {
                        appearance: {
                            uses: "settings",
                            items: {
                                MyList: {
                                    type: "array",
                                    ref: "menuItems",
                                    label: "Menu Items",
                                    itemTitleRef: "label",
                                    allowAdd: true,
                                    allowRemove: true,
                                    addTranslation: "Add Menu Item",
                                    items: {
                                        target: {
                                            type: "string",
                                            ref: "target",
                                            label: "Target",
                                            expression: "optional"
                                        },
                                        label: {
                                            type: "string",
                                            ref: "label",
                                            label: "Label",
                                            expression: "optional"
                                        },
										 color: {
                                            type: "string",
                                            ref: "color",
                                            label: "color",
                                            expression: "optional",
                                            default: "item"
                                        },
                                        issheetid: {
                                            type: "boolean",
                                            label: "Target is a sheet id in this app",
                                            ref: "issheetid",
                                            defaultValue: false
                                        },
                                        isnavigation: {
                                            type: "boolean",
                                            label: "No Navigation",
                                            ref: "isnavigation",
                                            defaultValue: false
                                        }
                                    }
                                },
                                selections: {
                                    show: !1
                                },
                                general: {
                                    items: {
                                        showTitles: {
                                            defaultValue: !1
                                        },
                                        details: {
                                            show: !1
                                        }
                                    }
                                }
                            }
                        },
                        about: {
                            label: "About",
                            component: "items",
                            items: {
                                header: {
                                    label: "Share Button",
                                    style: "header",
                                    component: "text"
                                },
                                paragraph1: {
                                    label: "A button that creates links so that the current sheet and selections can be shared with others.",
                                    component: "text"
                                },
                                paragraph2: {
                                    label: "Advanced Share Button is based upon an extension created by Shiva...",
                                    component: "text"
                                }
                            }
                        }
                    }
                },
                support: {
                    snapshot: true,
                    export: true,
                    exportData: !1
                },
                paint: function(e, t) {

                    let app = qs.currApp();
                    var Appname1 = app.model.layout.qTitle;
                    var url1 = app.model.layout.stream.name; //app.model.rpcOptions.prefix.replace('/', '')
                    url1 = url1.replace(/_/g, '-'); // url1.replace('/', '');
                    var CurrentSheet = qs.navigation.getCurrentSheetId();
                    var SheetID = CurrentSheet.sheetId;


                    var qsheetname = '';
                    for (var sid = 0; sid <= qs.navigation.sheets.length; sid++) {
                        if (qs.navigation.sheets[sid].qInfo.qId === SheetID) {
                            qsheetname = qs.navigation.sheets[sid].qMeta.title;
                            break;
                        }
                    }
                    var QlikappInfo = qsheetname;
                    var studyid = t.menuItems[2].target;
                    if (studyid == '') {
                        var api_url = "https://" + url1 + ".eclinicalsol.com/api/issues/issuecounts?relateditemjson.appname=" + Appname1 + "&relateditemjson.sheetname=" + QlikappInfo;
                    } else {
                        var api_url =
                            "https://" + url1 + ".eclinicalsol.com/api/issues/issuecounts?studyid=" + studyid + "&relateditemjson.appname=" + Appname1 + "&relateditemjson.sheetname=" + QlikappInfo;
                    }
                    // Defining async function 
                    async function getapi(url) {
                        //$scope.layout.menuItems[2].label='4444';
                        // if($scope.layout.menuItems[2].label=='Open issues'){
                        // Storing response 
                        const response = await fetch(url, { mode: 'cors', credentials: 'include' });
                        // Storing data in form of JSON 
                        var data = await response.json();
                        //var ni=data.substring(data.indexOf('open'),data.indexOf('open')+4);
                        var ni = data.Open.Count;
                        t.menuItems[2].label = ni;
                    }
                    getapi(api_url)


                    if (qs.navigation.getMode() == "edit") {
                        $(this.$element).closest(".cell").css("display", "block");
                    } else {
                        $(this.$element).closest(".cell").css("display", "none");
                    }
                    var n = this,
                        o = r.a.currApp(this);
                    this.view || (this.view = new c(o, t.qInfo.qId)), o.theme.getApplied().then(function(r) {
                        n.view.paint(o, e, t, r);
                    }).catch(function(e) {
                        console.error(e)
                    })
                    return qs.Promise.resolve();
                },
                controller: ['$scope', '$element', '$http', function($scope, $element, $http) {

                    let app = qs.currApp();
                    var Appname1 = app.model.layout.qTitle;
					
					var url1 = app.model.layout.stream == null ? "":app.model.layout.stream.name;
                    //var url1 = "";// app.model.layout.stream.name; //app.model.rpcOptions.prefix.replace('/', '')
                    url1 = url1.replace(/_/g, '-'); // url1.replace('/', '');
                    var CurrentSheet = qs.navigation.getCurrentSheetId();
                    var SheetID = CurrentSheet.sheetId;
                    var qsheetname = '';
                    for (var sid = 0; sid <= qs.navigation.sheets.length; sid++) {
                        if (qs.navigation.sheets[sid].qInfo.qId === SheetID) {
                            qsheetname = qs.navigation.sheets[sid].qMeta.title;
                            break;
                        }
                    }
                    var QlikappInfo = qsheetname;
                    $(document).ready(function() {
                        var studyid = $scope.menuItems[2].target
                        if (studyid == '') {
                            var api_url = "https://" + url1 + ".eclinicalsol.com/api/issues/issuecounts?relateditemjson.appname=" + Appname1 + "&relateditemjson.sheetname=" + QlikappInfo;
                        } else {
                            var api_url =
                                "https://" + url1 + ".eclinicalsol.com/api/issues/issuecounts?studyid=" + studyid + "&relateditemjson.appname=" + Appname1 + "&relateditemjson.sheetname=" + QlikappInfo;
                        }


                        async function getapi(url) {
                            //$scope.layout.menuItems[2].label='4444';
                            // if($scope.layout.menuItems[2].label=='Open issues'){
                            // Storing response 
                            const response = await fetch(url, { mode: 'cors', credentials: 'include' });

                            // Storing data in form of JSON 
                            var data = await response.json();
                            //var ni=data.substring(data.indexOf('open'),data.indexOf('open')+4);
                            var ni = data.Open.Count;
                            $scope.layout.menuItems[2].label = data.Open.Count;
                            $('#sheet-title').children('#myTopnav_large').remove()
                            $('#myTopnav_large').appendTo($('#sheet-title'))
                            $('#sheet-title').children('#myTopnav_small').remove()
                            $('#myTopnav_small').appendTo($('#sheet-title'))
                        }



                        getapi(api_url) //}

                    });
$scope.component.model.Validated.bind( function () {

				let app = qs.currApp();
				///console.log(app,e,t,'LLLLL',qs,qs.navigation.getCurrentSheetId());
                    var Appname1 = app.model.layout.qTitle;
		    
			 var url1 = app.model.layout.stream == null ? "":app.model.layout.stream.name;
            // var url1 = "";//app.model.layout.stream.name;//app.model.rpcOptions.prefix.replace('/', '')
                    url1 =url1.replace(/_/g, '-');// url1.replace('/', '');
                    var CurrentSheet = qs.navigation.getCurrentSheetId();
				
                   // var SheetID =se111;// app.model.rpcOptions.reloadURI.split('sheet/').pop().split('/')[0].split('?')[0];
                  var SheetID1 = CurrentSheet.sheetId;
                      
					   if(SheetID1='undefined'){
                
                    var qsheetname = '';
                    for (var sid = 0; sid <= qs.navigation.sheets.length; sid++) {
                        if (qs.navigation.sheets[sid].qInfo.qId === SheetID) {
                            qsheetname = qs.navigation.sheets[sid].qMeta.title;
                            break;
                        }
                    }
						
                    var QlikappInfo = qsheetname;
					var studyid=$scope.menuItems[2].target
               
                if(studyid==''){
				 var api_url ="https://" + url1 + ".eclinicalsol.com/api/issues/issuecounts?relateditemjson.appname=" + Appname1 + "&relateditemjson.sheetname=" + QlikappInfo;
				}
                   else {
				   var api_url =
                      "https://" + url1 + ".eclinicalsol.com/api/issues/issuecounts?studyid="+studyid+"&relateditemjson.appname=" + Appname1 + "&relateditemjson.sheetname=" + QlikappInfo;
                        }


                    async function getapi(url) {
                                                  
                                                    const response = await fetch(url, { mode: 'cors', credentials: 'include' });

                                                    // Storing data in form of JSON 
                                                    var data = await response.json();
                                               
                                                    var ni = data.Open.Count;
                                                  
                                                    $scope.layout.menuItems[2].label = data.Open.Count;
												}
               


       getapi(api_url) 
					}
					});
                    $scope.menuNav = function() {
                        var x = document.getElementById("myTopnav");
                        if (x.className === "cw_topnav") {
                            x.className += " responsive";
                        } else {
                            x.className = "cw_topnav";
                        }
                    }
                    $scope.navigate = function(link) {
                        if (link.isnavigation) {} else if (link.issheetid) {
                            qlik.navigation.gotoSheet(link.target)
                        } else {
                            window.open(link.target, '_blank')
                        }
                    }
                    $scope.menuItems = $scope.layout.menuItems;
                }]
            }
        }])
    });
//# sourceMappingURL=qlik-share-button.js.map
//# selected url into the clipboard.....
function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    document.body.removeChild(textArea);
}
//# Clipboard logic.....
function navigateToClipboard(urlPart) {
    copyTextToClipboard(urlPart);
    //Changing the button's text temporarily to mark success
    $('.navigateToClipboard').html('Copied To Clipboard!');
    //Waiting for 1.5 seconds and resetting the button's text so that users are not discouraged to make new selections and generate new links
    setTimeout(function() {
            $('.navigateToClipboard').html('Copy Link');
        }, 1500)
        //return window.onbeforeunload = null, !1;
}

function navigateToMail(urlPart) {
    if (window.confirm("Do you want to email a link to this sheet using your default email account?", 'Title')) {
        var recipient = "",
            body = "I’d like you to review this visualization. Please login to analytics first, then click this link:",
            topic = "Link to elluminate Analytics.";
        //Opening a new email with the user settings' input subject, the dashboard generated link, and the user settings' input body
        window.open('mailto:' + recipient + '?subject=' + topic + '&body=' + body + " " + "%0D%0A" + "%0D%0A" +  encodeURIComponent(urlPart) + "%0D%0A" + "%0D%0A" + "%0D%0A" + "https://www.eclinicalsol.com");
    }
}
//# Creating issue.....  
function callingCreateissue(qs, urlPart, t) {
    var app = qs.currApp(this);
    var applicationId = app.model.layout.qFileName;
    //App Info Starts here
    //var streamName = "";
    var streamName = app.model.layout.stream.name;
    if (applicationId.substring(applicationId.length - 4) == '.qvf') {
        applicationId = applicationId.slice(0, -4);
    }
    //Getting the current sheet
    var qsheetname = '';
    // var SheetID = cur_sid.sheetId;
    var SheetID = urlPart.split('sheet/').pop().split('/')[0].split('?')[0];
    qs.currApp(this).getObjectProperties(SheetID).then(function(model) {
        qsheetname = model.properties.qMetaDef.title;
        var versionName = app.model.layout.description.match(/(\(.*\))/);
        let fieldData;
        if (typeof t !== 'undefined') {
            if (t.qHyperCube.qDataPages.length != 0) {
                var QlikappInfo = {
                        qtitle: app.model.layout.qTitle,
                        qdescription: app.model.layout.description,
                        qreloadTime: app.model.layout.qLastReloadTime,
                        qsheetname: qsheetname,
                        qversionName: versionName[0].substring(1, versionName[0].length - 1),
                        studyID: t.qHyperCube.qDataPages[0].qMatrix[0][0].qText,
                        qfieldData: t.qHyperCube.qDataPages[0].qMatrix[0][1].qText,
                        streamName: streamName.replace(/_/g, '-'),
                        SheetID: SheetID,
                        urlPart: urlPart
                    }
                    // end of appInfo
                subjectEvalution(QlikappInfo);
            }
        } else if (typeof t === 'undefined') {
            var QlikappInfo = {
                    qtitle: app.model.layout.qTitle,
                    qdescription: app.model.layout.description,
                    qreloadTime: app.model.layout.qLastReloadTime,
                    qsheetname: qsheetname,
                    qversionName: versionName[0].substring(1, versionName[0].length - 1),
                    studyID: "-",
                    qfieldData: "-",
                    streamName: streamName.replace(/_/g, '-'),
                    SheetID: SheetID,
                    urlPart: urlPart
                }
                // end of appInfo
            subjectEvalution(QlikappInfo);
        }
    });
}

function subjectEvalution(QlikappInfo) {
    var config = {
        host: window.location.hostname,
        prefix: window.location.pathname.substr(0, window.location.pathname.toLowerCase().lastIndexOf("/sense/app")),
        port: window.location.port,
        isSecure: window.location.protocol === "https:"
    };
    if (QlikappInfo.qfieldData !== "-") {
        var fieldsData = QlikappInfo.qfieldData,
            fields = fieldsData.split("&@#$^()"),
            subject = [],
            subjectVal = [],
            study = [],
            studyVal = [];
        for (var i = 0; i < fields.length; i++) {
            // (text, substr) => fields[i].endsWith('Subject');
            if (fields[i].match('Subject')) {
                //if (fields[i].endsWith('Subject') || fields[i].match('Subject Identifier for the Study')) {
                subject = fields[i].split("::::");
                if (subject[0].endsWith('Subject') || subject[0].match('Subject Identifier for the Study')) {
                    if (undefined !== subject[1])
                        subjectVal = subject[1].split(";;;;")
                }
            }
            if (fields[i].match('zStudies') || fields[i].match('Studies')) {
                study = fields[i].split("::::");
                if (undefined !== study[1])
                    studyVal = study[1].split(";;;;")
            }
        }
        let subStr = ' of ';
        if (subjectVal.length !== 0 && studyVal.length !== 0) {
            if (subjectVal[0].includes(subStr) && studyVal[0].includes(subStr)) {
                alert("Please select only One Subject or One Study");
            } else if (subjectVal[0].includes(subStr)) {
                alert('Please select only One Subject');
            } else if (studyVal[0].includes(subStr)) {
                alert("Please select only One Study");
            } else if (subjectVal.length > 1 && studyVal.length > 1) {
                alert("Please select only One Subject or One Study");
            } else if (subjectVal.length > 1)
                alert('Please select only One Subject');
            else if (studyVal.length > 1)
                alert("Please select only One Study");
            else if (subjectVal.length == 1 || studyVal.length == 1) {
                var finalURL = (config.isSecure ? "https://" : "http://") + QlikappInfo.streamName + '.eclinicalsol.com/issues/create?studyId=' + QlikappInfo.studyID + '&type=subject&sourceModule=Analytics&subjectId=' + subjectVal[0] + '&appName=' + QlikappInfo.qtitle + '&sheetName=' + QlikappInfo.qsheetname + '&issueLink=' + encodeURI(QlikappInfo.urlPart) + '&version=' + QlikappInfo.qversionName;
                window.open(finalURL, '_CreateIssue', 'width=1000px,height=500px');
            }
        } else if (subjectVal.length !== 0) {
            if (subjectVal.length > 1 || subjectVal[0].includes(subStr))
                alert('Please select only One Subject');
            else if (subjectVal.length == 1) {
                var finalURL = (config.isSecure ? "https://" : "http://") + QlikappInfo.streamName + '.eclinicalsol.com/issues/create?studyId=' + QlikappInfo.studyID + '&type=subject&sourceModule=Analytics&subjectId=' + subjectVal[0] + '&appName=' + QlikappInfo.qtitle + '&sheetName=' + QlikappInfo.qsheetname + '&issueLink=' + encodeURI(QlikappInfo.urlPart) + '&version=' + QlikappInfo.qversionName;
                window.open(finalURL, '_CreateIssue', 'width=1000px,height=500px');
            }
        } else if (studyVal.length !== 0) {
            if (studyVal.length > 1 || studyVal[0].includes(subStr))
                alert("Please select only One Study");
            else if (studyVal.length == 1) {
                var finalURL = (config.isSecure ? "https://" : "http://") + QlikappInfo.streamName + '.eclinicalsol.com/issues/create?studyId=' + QlikappInfo.studyID + '&type=subject&sourceModule=Analytics&subjectId=' + "-" + '&appName=' + QlikappInfo.qtitle + '&sheetName=' + QlikappInfo.qsheetname + '&issueLink=' + encodeURI(QlikappInfo.urlPart) + '&version=' + QlikappInfo.qversionName;
                window.open(finalURL, '_CreateIssue', 'width=1000px,height=500px');
            }
        } else if (subjectVal.length == 0 && studyVal.length == 0) {
            alert("Please select only One Subject or One Study");
        }
    } else if (QlikappInfo.qfieldData == "-") {
        alert("Please select only One Subject or One Study");
    }
}