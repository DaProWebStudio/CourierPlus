! function(e, t) {
	for (var i in t) e[i] = t[i]
}(window, function(e) {
	var t = {};

	function i(s) {
		if (t[s]) return t[s].exports;
		var n = t[s] = {
			i: s,
			l: !1,
			exports: {}
		};
		return e[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports
	}
	return i.m = e, i.c = t, i.d = function(e, t, s) {
		i.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: s
		})
	}, i.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, i.t = function(e, t) {
		if (1 & t && (e = i(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var s = Object.create(null);
		if (i.r(s), Object.defineProperty(s, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var n in e) i.d(s, n, function(t) {
				return e[t]
			}.bind(null, n));
		return s
	}, i.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return i.d(t, "a", t), t
	}, i.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, i.p = "", i(i.s = 214)
}({
	214: function(e, t, i) {
		"use strict";
		i.r(t);
		var s = i(29),
			n = i.n(s);
		i.d(t, "bootstrapSelect", (function() {
			return n.a
		}))
	},
	29: function(e, t) {
		! function(e) {
			"use strict";
			var t = ["sanitize", "whiteList", "sanitizeFn"],
				i = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
				s = {
					"*": ["class", "dir", "id", "lang", "role", "tabindex", "style", /^aria-[\w-]*$/i],
					a: ["target", "href", "title", "rel"],
					area: [],
					b: [],
					br: [],
					col: [],
					code: [],
					div: [],
					em: [],
					hr: [],
					h1: [],
					h2: [],
					h3: [],
					h4: [],
					h5: [],
					h6: [],
					i: [],
					img: ["src", "alt", "title", "width", "height"],
					li: [],
					ol: [],
					p: [],
					pre: [],
					s: [],
					small: [],
					span: [],
					sub: [],
					sup: [],
					strong: [],
					u: [],
					ul: []
				},
				n = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
				o = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
				r = ["title", "placeholder"];

			function l(t, s) {
				var r = t.nodeName.toLowerCase();
				if (-1 !== e.inArray(r, s)) return -1 === e.inArray(r, i) || Boolean(t.nodeValue.match(n) || t.nodeValue.match(o));
				for (var l = e(s).filter((function(e, t) {
						return t instanceof RegExp
					})), a = 0, c = l.length; a < c; a++)
					if (r.match(l[a])) return !0;
				return !1
			}

			function a(e, t, i) {
				if (i && "function" == typeof i) return i(e);
				for (var s = Object.keys(t), n = 0, o = e.length; n < o; n++)
					for (var r = e[n].querySelectorAll("*"), a = 0, c = r.length; a < c; a++) {
						var d = r[a],
							h = d.nodeName.toLowerCase();
						if (-1 !== s.indexOf(h))
							for (var p = [].slice.call(d.attributes), u = [].concat(t["*"] || [], t[h] || []), f = 0, m = p.length; f < m; f++) {
								var v = p[f];
								l(v, u) || d.removeAttribute(v.nodeName)
							} else d.parentNode.removeChild(d)
					}
			}

			function c(e) {
				var t, i = {};
				return r.forEach((function(s) {
					(t = e.attr(s)) && (i[s] = t)
				})), !i.placeholder && i.title && (i.placeholder = i.title), i
			}
			"classList" in document.createElement("_") || function(t) {
				if ("Element" in t) {
					var i = t.Element.prototype,
						s = Object,
						n = function() {
							var t = e(this);
							return {
								add: function(e) {
									return e = Array.prototype.slice.call(arguments).join(" "), t.addClass(e)
								},
								remove: function(e) {
									return e = Array.prototype.slice.call(arguments).join(" "), t.removeClass(e)
								},
								toggle: function(e, i) {
									return t.toggleClass(e, i)
								},
								contains: function(e) {
									return t.hasClass(e)
								}
							}
						};
					if (s.defineProperty) {
						var o = {
							get: n,
							enumerable: !0,
							configurable: !0
						};
						try {
							s.defineProperty(i, "classList", o)
						} catch (e) {
							void 0 !== e.number && -2146823252 !== e.number || (o.enumerable = !1, s.defineProperty(i, "classList", o))
						}
					} else s.prototype.__defineGetter__ && i.__defineGetter__("classList", n)
				}
			}(window);
			var d, h, p = document.createElement("_");
			if (p.classList.add("c1", "c2"), !p.classList.contains("c2")) {
				var u = DOMTokenList.prototype.add,
					f = DOMTokenList.prototype.remove;
				DOMTokenList.prototype.add = function() {
					Array.prototype.forEach.call(arguments, u.bind(this))
				}, DOMTokenList.prototype.remove = function() {
					Array.prototype.forEach.call(arguments, f.bind(this))
				}
			}
			if (p.classList.toggle("c3", !1), p.classList.contains("c3")) {
				var m = DOMTokenList.prototype.toggle;
				DOMTokenList.prototype.toggle = function(e, t) {
					return 1 in arguments && !this.contains(e) == !t ? t : m.call(this, e)
				}
			}

			function v() {
				var e = this.selectpicker.main.data.filter((function(e) {
					return !!e.selected && (!this.options.hideDisabled || !e.disabled)
				}), this);
				if (this.options.source.data && !this.multiple && e.length > 1) {
					for (var t = 0; t < e.length - 1; t++) e[t].selected = !1;
					e = [e[e.length - 1]]
				}
				return e
			}

			function g(e) {
				for (var t, i = [], s = e || v.call(this), n = 0, o = s.length; n < o; n++)(t = s[n]).disabled || i.push(void 0 === t.value ? t.text : t.value);
				return this.multiple ? i : i.length ? i[0] : null
			}
			p = null, String.prototype.startsWith || (d = {}.toString, h = function(e) {
				if (null == this) throw new TypeError;
				var t = String(this);
				if (e && "[object RegExp]" == d.call(e)) throw new TypeError;
				var i = t.length,
					s = String(e),
					n = s.length,
					o = arguments.length > 1 ? arguments[1] : void 0,
					r = o ? Number(o) : 0;
				r != r && (r = 0);
				var l = Math.min(Math.max(r, 0), i);
				if (n + l > i) return !1;
				for (var a = -1; ++a < n;)
					if (t.charCodeAt(l + a) != s.charCodeAt(a)) return !1;
				return !0
			}, Object.defineProperty ? Object.defineProperty(String.prototype, "startsWith", {
				value: h,
				configurable: !0,
				writable: !0
			}) : String.prototype.startsWith = h);
			var b = {
				useDefault: !1,
				_set: e.valHooks.select.set
			};
			e.valHooks.select.set = function(t, i) {
				return i && !b.useDefault && e(t).data("selected", !0), b._set.apply(this, arguments)
			};
			var w = null,
				I = function() {
					try {
						return new Event("change"), !0
					} catch (e) {
						return !1
					}
				}();

			function x(e, t, i, s) {
				for (var n = ["display", "subtext", "tokens"], o = !1, r = 0; r < n.length; r++) {
					var l = n[r],
						a = e[l];
					if (a && (a = a.toString(), "display" === l && (a = a.replace(/<[^>]+>/g, "")), s && (a = C(a)), a = a.toUpperCase(), o = "function" == typeof i ? i(a, t) : "contains" === i ? a.indexOf(t) >= 0 : a.startsWith(t))) break
				}
				return o
			}

			function k(e) {
				return parseInt(e, 10) || 0
			}
			e.fn.triggerNative = function(e) {
				var t, i = this[0];
				i.dispatchEvent && (I ? t = new Event(e, {
					bubbles: !0
				}) : (t = document.createEvent("Event")).initEvent(e, !0, !1), i.dispatchEvent(t))
			};
			var y = {
					"À": "A",
					"Á": "A",
					"Â": "A",
					"Ã": "A",
					"Ä": "A",
					"Å": "A",
					"à": "a",
					"á": "a",
					"â": "a",
					"ã": "a",
					"ä": "a",
					"å": "a",
					"Ç": "C",
					"ç": "c",
					"Ð": "D",
					"ð": "d",
					"È": "E",
					"É": "E",
					"Ê": "E",
					"Ë": "E",
					"è": "e",
					"é": "e",
					"ê": "e",
					"ë": "e",
					"Ì": "I",
					"Í": "I",
					"Î": "I",
					"Ï": "I",
					"ì": "i",
					"í": "i",
					"î": "i",
					"ï": "i",
					"Ñ": "N",
					"ñ": "n",
					"Ò": "O",
					"Ó": "O",
					"Ô": "O",
					"Õ": "O",
					"Ö": "O",
					"Ø": "O",
					"ò": "o",
					"ó": "o",
					"ô": "o",
					"õ": "o",
					"ö": "o",
					"ø": "o",
					"Ù": "U",
					"Ú": "U",
					"Û": "U",
					"Ü": "U",
					"ù": "u",
					"ú": "u",
					"û": "u",
					"ü": "u",
					"Ý": "Y",
					"ý": "y",
					"ÿ": "y",
					"Æ": "Ae",
					"æ": "ae",
					"Þ": "Th",
					"þ": "th",
					"ß": "ss",
					"Ā": "A",
					"Ă": "A",
					"Ą": "A",
					"ā": "a",
					"ă": "a",
					"ą": "a",
					"Ć": "C",
					"Ĉ": "C",
					"Ċ": "C",
					"Č": "C",
					"ć": "c",
					"ĉ": "c",
					"ċ": "c",
					"č": "c",
					"Ď": "D",
					"Đ": "D",
					"ď": "d",
					"đ": "d",
					"Ē": "E",
					"Ĕ": "E",
					"Ė": "E",
					"Ę": "E",
					"Ě": "E",
					"ē": "e",
					"ĕ": "e",
					"ė": "e",
					"ę": "e",
					"ě": "e",
					"Ĝ": "G",
					"Ğ": "G",
					"Ġ": "G",
					"Ģ": "G",
					"ĝ": "g",
					"ğ": "g",
					"ġ": "g",
					"ģ": "g",
					"Ĥ": "H",
					"Ħ": "H",
					"ĥ": "h",
					"ħ": "h",
					"Ĩ": "I",
					"Ī": "I",
					"Ĭ": "I",
					"Į": "I",
					"İ": "I",
					"ĩ": "i",
					"ī": "i",
					"ĭ": "i",
					"į": "i",
					"ı": "i",
					"Ĵ": "J",
					"ĵ": "j",
					"Ķ": "K",
					"ķ": "k",
					"ĸ": "k",
					"Ĺ": "L",
					"Ļ": "L",
					"Ľ": "L",
					"Ŀ": "L",
					"Ł": "L",
					"ĺ": "l",
					"ļ": "l",
					"ľ": "l",
					"ŀ": "l",
					"ł": "l",
					"Ń": "N",
					"Ņ": "N",
					"Ň": "N",
					"Ŋ": "N",
					"ń": "n",
					"ņ": "n",
					"ň": "n",
					"ŋ": "n",
					"Ō": "O",
					"Ŏ": "O",
					"Ő": "O",
					"ō": "o",
					"ŏ": "o",
					"ő": "o",
					"Ŕ": "R",
					"Ŗ": "R",
					"Ř": "R",
					"ŕ": "r",
					"ŗ": "r",
					"ř": "r",
					"Ś": "S",
					"Ŝ": "S",
					"Ş": "S",
					"Š": "S",
					"ś": "s",
					"ŝ": "s",
					"ş": "s",
					"š": "s",
					"Ţ": "T",
					"Ť": "T",
					"Ŧ": "T",
					"ţ": "t",
					"ť": "t",
					"ŧ": "t",
					"Ũ": "U",
					"Ū": "U",
					"Ŭ": "U",
					"Ů": "U",
					"Ű": "U",
					"Ų": "U",
					"ũ": "u",
					"ū": "u",
					"ŭ": "u",
					"ů": "u",
					"ű": "u",
					"ų": "u",
					"Ŵ": "W",
					"ŵ": "w",
					"Ŷ": "Y",
					"ŷ": "y",
					"Ÿ": "Y",
					"Ź": "Z",
					"Ż": "Z",
					"Ž": "Z",
					"ź": "z",
					"ż": "z",
					"ž": "z",
					"Ĳ": "IJ",
					"ĳ": "ij",
					"Œ": "Oe",
					"œ": "oe",
					"ŉ": "'n",
					"ſ": "s"
				},
				$ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
				S = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g");

			function E(e) {
				return y[e]
			}

			function C(e) {
				return (e = e.toString()) && e.replace($, E).replace(S, "")
			}
			var O, A, T, z, D, L = (O = {
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;",
					"'": "&#x27;",
					"`": "&#x60;"
				}, A = function(e) {
					return O[e]
				}, T = "(?:" + Object.keys(O).join("|") + ")", z = RegExp(T), D = RegExp(T, "g"), function(e) {
					return e = null == e ? "" : "" + e, z.test(e) ? e.replace(D, A) : e
				}),
				N = {
					32: " ",
					48: "0",
					49: "1",
					50: "2",
					51: "3",
					52: "4",
					53: "5",
					54: "6",
					55: "7",
					56: "8",
					57: "9",
					59: ";",
					65: "A",
					66: "B",
					67: "C",
					68: "D",
					69: "E",
					70: "F",
					71: "G",
					72: "H",
					73: "I",
					74: "J",
					75: "K",
					76: "L",
					77: "M",
					78: "N",
					79: "O",
					80: "P",
					81: "Q",
					82: "R",
					83: "S",
					84: "T",
					85: "U",
					86: "V",
					87: "W",
					88: "X",
					89: "Y",
					90: "Z",
					96: "0",
					97: "1",
					98: "2",
					99: "3",
					100: "4",
					101: "5",
					102: "6",
					103: "7",
					104: "8",
					105: "9"
				},
				H = 27,
				P = 13,
				W = 32,
				B = 9,
				M = 38,
				R = 40,
				U = window.Dropdown || bootstrap.Dropdown;

			function j() {
				var t;
				try {
					t = e.fn.dropdown.Constructor.VERSION
				} catch (e) {
					t = U.VERSION
				}
				return t
			}
			var V = {
				success: !1,
				major: "3"
			};
			try {
				V.full = (j() || "").split(" ")[0].split("."), V.major = V.full[0], V.success = !0
			} catch (e) {}
			var _ = 0,
				F = ".bs.select",
				G = {
					DISABLED: "disabled",
					DIVIDER: "divider",
					SHOW: "open",
					DROPUP: "dropup",
					MENU: "dropdown-menu",
					MENURIGHT: "dropdown-menu-right",
					MENULEFT: "dropdown-menu-left",
					BUTTONCLASS: "btn-default",
					POPOVERHEADER: "popover-title",
					ICONBASE: "glyphicon",
					TICKICON: "glyphicon-ok"
				},
				q = {
					MENU: "." + G.MENU,
					DATA_TOGGLE: 'data-toggle="dropdown"'
				},
				K = {
					div: document.createElement("div"),
					span: document.createElement("span"),
					i: document.createElement("i"),
					subtext: document.createElement("small"),
					a: document.createElement("a"),
					li: document.createElement("li"),
					whitespace: document.createTextNode(" "),
					fragment: document.createDocumentFragment(),
					option: document.createElement("option")
				};
			K.selectedOption = K.option.cloneNode(!1), K.selectedOption.setAttribute("selected", !0), K.noResults = K.li.cloneNode(!1), K.noResults.className = "no-results", K.a.setAttribute("role", "option"), K.a.className = "dropdown-item", K.subtext.className = "text-muted", K.text = K.span.cloneNode(!1), K.text.className = "text", K.checkMark = K.span.cloneNode(!1);
			var Q = new RegExp(M + "|" + R),
				Y = new RegExp("^" + B + "$|" + H),
				Z = {
					li: function(e, t, i) {
						var s = K.li.cloneNode(!1);
						return e && (1 === e.nodeType || 11 === e.nodeType ? s.appendChild(e) : s.innerHTML = e), void 0 !== t && "" !== t && (s.className = t), null != i && s.classList.add("optgroup-" + i), s
					},
					a: function(e, t, i) {
						var s = K.a.cloneNode(!0);
						return e && (11 === e.nodeType ? s.appendChild(e) : s.insertAdjacentHTML("beforeend", e)), void 0 !== t && "" !== t && s.classList.add.apply(s.classList, t.split(/\s+/)), i && s.setAttribute("style", i), s
					},
					text: function(e, t) {
						var i, s, n = K.text.cloneNode(!1);
						if (e.content) n.innerHTML = e.content;
						else {
							if (n.textContent = e.text, e.icon) {
								var o = K.whitespace.cloneNode(!1);
								(s = (!0 === t ? K.i : K.span).cloneNode(!1)).className = this.options.iconBase + " " + e.icon, K.fragment.appendChild(s), K.fragment.appendChild(o)
							}
							e.subtext && ((i = K.subtext.cloneNode(!1)).textContent = e.subtext, n.appendChild(i))
						}
						if (!0 === t)
							for (; n.childNodes.length > 0;) K.fragment.appendChild(n.childNodes[0]);
						else K.fragment.appendChild(n);
						return K.fragment
					},
					label: function(e) {
						var t, i, s = K.text.cloneNode(!1);
						if (s.innerHTML = e.display, e.icon) {
							var n = K.whitespace.cloneNode(!1);
							(i = K.span.cloneNode(!1)).className = this.options.iconBase + " " + e.icon, K.fragment.appendChild(i), K.fragment.appendChild(n)
						}
						return e.subtext && ((t = K.subtext.cloneNode(!1)).textContent = e.subtext, s.appendChild(t)), K.fragment.appendChild(s), K.fragment
					}
				},
				J = {
					fromOption: function(e, t) {
						var i;
						switch (t) {
							case "divider":
								i = "true" === e.getAttribute("data-divider");
								break;
							case "text":
								i = e.textContent;
								break;
							case "label":
								i = e.label;
								break;
							case "style":
								i = e.style.cssText;
								break;
							case "content":
							case "tokens":
							case "subtext":
							case "icon":
								i = e.getAttribute("data-" + t)
						}
						return i
					},
					fromDataSource: function(e, t) {
						var i;
						switch (t) {
							case "text":
							case "label":
								i = e.text || e.value || "";
								break;
							case "divider":
							case "style":
							case "content":
							case "tokens":
							case "subtext":
							case "icon":
								i = e[t]
						}
						return i
					}
				};

			function X(e, t) {
				e.length || (K.noResults.innerHTML = this.options.noneResultsText.replace("{0}", '"' + L(t) + '"'), this.$menuInner[0].firstChild.appendChild(K.noResults))
			}

			function ee(e) {
				return !(e.hidden || this.options.hideDisabled && e.disabled)
			}
			var te = function(t, i) {
				var s = this;
				b.useDefault || (e.valHooks.select.set = b._set, b.useDefault = !0), this.$element = e(t), this.$newElement = null, this.$button = null, this.$menu = null, this.options = i, this.selectpicker = {
					main: {
						optionQueue: K.fragment.cloneNode(!1)
					},
					search: {},
					current: {},
					view: {},
					isSearching: !1,
					keydown: {
						keyHistory: "",
						resetKeyHistory: {
							start: function() {
								return setTimeout((function() {
									s.selectpicker.keydown.keyHistory = ""
								}), 800)
							}
						}
					}
				}, this.sizeInfo = {};
				var n = this.options.windowPadding;
				"number" == typeof n && (this.options.windowPadding = [n, n, n, n]), this.val = te.prototype.val, this.render = te.prototype.render, this.refresh = te.prototype.refresh, this.setStyle = te.prototype.setStyle, this.selectAll = te.prototype.selectAll, this.deselectAll = te.prototype.deselectAll, this.destroy = te.prototype.destroy, this.remove = te.prototype.remove, this.show = te.prototype.show, this.hide = te.prototype.hide, this.init()
			};

			function ie(i) {
				var s, n = arguments,
					o = i;
				if ([].shift.apply(n), !V.success) {
					try {
						V.full = (j() || "").split(" ")[0].split(".")
					} catch (e) {
						te.BootstrapVersion ? V.full = te.BootstrapVersion.split(" ")[0].split(".") : (V.full = [V.major, "0", "0"], console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", e))
					}
					V.major = V.full[0], V.success = !0
				}
				if (V.major >= "4") {
					var r = [];
					te.DEFAULTS.style === G.BUTTONCLASS && r.push({
						name: "style",
						className: "BUTTONCLASS"
					}), te.DEFAULTS.iconBase === G.ICONBASE && r.push({
						name: "iconBase",
						className: "ICONBASE"
					}), te.DEFAULTS.tickIcon === G.TICKICON && r.push({
						name: "tickIcon",
						className: "TICKICON"
					}), G.DIVIDER = "dropdown-divider", G.SHOW = "show", G.BUTTONCLASS = "btn-light", G.POPOVERHEADER = "popover-header", G.ICONBASE = "", G.TICKICON = "bs-ok-default";
					for (var l = 0; l < r.length; l++) {
						i = r[l];
						te.DEFAULTS[i.name] = G[i.className]
					}
				}
				V.major > "4" && (q.DATA_TOGGLE = 'data-bs-toggle="dropdown"');
				var a = this.each((function() {
					var i = e(this);
					if (i.is("select")) {
						var r = i.data("selectpicker"),
							l = "object" == typeof o && o;
						if (l.title && (l.placeholder = l.title), r) {
							if (l)
								for (var a in l) Object.prototype.hasOwnProperty.call(l, a) && (r.options[a] = l[a])
						} else {
							var d = i.data();
							for (var h in d) Object.prototype.hasOwnProperty.call(d, h) && -1 !== e.inArray(h, t) && delete d[h];
							var p = e.extend({}, te.DEFAULTS, e.fn.selectpicker.defaults || {}, c(i), d, l);
							p.template = e.extend({}, te.DEFAULTS.template, e.fn.selectpicker.defaults ? e.fn.selectpicker.defaults.template : {}, d.template, l.template), i.data("selectpicker", r = new te(this, p))
						}
						"string" == typeof o && (s = r[o] instanceof Function ? r[o].apply(r, n) : r.options[o])
					}
				}));
				return void 0 !== s ? s : a
			}
			te.VERSION = "1.14.0-beta2", te.DEFAULTS = {
				noneSelectedText: "Ничего не выбрано",
				noneResultsText: "Результаты не совпадают {0}",
				countSelectedText: function(e, t) {
					return 1 == e ? "{0} item selected" : "{0} items selected"
				},
				maxOptionsText: function(e, t) {
					return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
				},
				selectAllText: "Select All",
				deselectAllText: "Deselect All",
				source: {},
				chunkSize: 40,
				doneButton: !1,
				doneButtonText: "Close",
				multipleSeparator: ", ",
				styleBase: "btn",
				style: G.BUTTONCLASS,
				size: "auto",
				title: null,
				placeholder: null,
				allowClear: !1,
				selectedTextFormat: "values",
				width: !1,
				container: !1,
				hideDisabled: !1,
				showSubtext: !1,
				showIcon: !0,
				showContent: !0,
				dropupAuto: !0,
				header: !1,
				liveSearch: !1,
				liveSearchPlaceholder: null,
				liveSearchNormalize: !1,
				liveSearchStyle: "contains",
				actionsBox: !1,
				iconBase: G.ICONBASE,
				tickIcon: G.TICKICON,
				showTick: !1,
				template: {
					caret: '<span class="caret"></span>'
				},
				maxOptions: !1,
				mobile: !1,
				selectOnTab: !1,
				dropdownAlignRight: !1,
				windowPadding: 0,
				virtualScroll: 600,
				display: !1,
				sanitize: !0,
				sanitizeFn: null,
				whiteList: s
			}, te.prototype = {
				constructor: te,
				init: function() {
					var t = this,
						i = this.$element.attr("id"),
						s = this.$element[0],
						n = s.form;
					_++, this.selectId = "bs-select-" + _, s.classList.add("bs-select-hidden"), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), s.classList.contains("show-tick") && (this.options.showTick = !0), this.$newElement = this.createDropdown(), this.$element.after(this.$newElement).prependTo(this.$newElement), n && null === s.form && (n.id || (n.id = "form-" + this.selectId), s.setAttribute("form", n.id)), this.$button = this.$newElement.children("button"), this.options.allowClear && (this.$clearButton = this.$button.children(".bs-select-clear-selected")), this.$menu = this.$newElement.children(q.MENU), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), s.classList.remove("bs-select-hidden"), this.fetchData((function() {
						t.render(!0), t.buildList(), requestAnimationFrame((function() {
							t.$element.trigger("loaded" + F)
						}))
					})), this.fetchData((function() {
						t.render(!0), t.buildList(), requestAnimationFrame((function() {
							t.$element.trigger("loaded" + F)
						}))
					})), !0 === this.options.dropdownAlignRight && this.$menu[0].classList.add(G.MENURIGHT), void 0 !== i && this.$button.attr("data-id", i), this.checkDisabled(), this.clickListener(), V.major > 4 && (this.dropdown = new U(this.$button[0])), this.options.liveSearch ? (this.liveSearchListener(), this.focusedParent = this.$searchbox[0]) : this.focusedParent = this.$menuInner[0], this.setStyle(), this.setWidth(), this.options.container ? this.selectPosition() : this.$element.on("hide" + F, (function() {
						if (t.isVirtual()) {
							var e = t.$menuInner[0],
								i = e.firstChild.cloneNode(!1);
							e.replaceChild(i, e.firstChild), e.scrollTop = 0
						}
					})), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
						"hide.bs.dropdown": function(e) {
							t.$element.trigger("hide" + F, e)
						},
						"hidden.bs.dropdown": function(e) {
							t.$element.trigger("hidden" + F, e)
						},
						"show.bs.dropdown": function(e) {
							t.$element.trigger("show" + F, e)
						},
						"shown.bs.dropdown": function(e) {
							t.$element.trigger("shown" + F, e)
						}
					}), s.hasAttribute("required") && this.$element.on("invalid" + F, (function() {
						t.$button[0].classList.add("bs-invalid"), t.$element.on("shown" + F + ".invalid", (function() {
							t.$element.val(t.$element.val()).off("shown" + F + ".invalid")
						})).on("rendered" + F, (function() {
							this.validity.valid && t.$button[0].classList.remove("bs-invalid"), t.$element.off("rendered" + F)
						})), t.$button.on("blur" + F, (function() {
							t.$element.trigger("focus").trigger("blur"), t.$button.off("blur" + F)
						}))
					})), n && e(n).on("reset" + F, (function() {
						requestAnimationFrame((function() {
							t.render()
						}))
					}))
				},
				createDropdown: function() {
					var t = this.multiple || this.options.showTick ? " show-tick" : "",
						i = this.multiple ? ' aria-multiselectable="true"' : "",
						s = "",
						n = this.autofocus ? " autofocus" : "";
					V.major < 4 && this.$element.parent().hasClass("input-group") && (s = " input-group-btn");
					var o, r = "",
						l = "",
						a = "",
						c = "",
						d = "";
					return this.options.header && (r = '<div class="' + G.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"), this.options.liveSearch && (l = '<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + L(this.options.liveSearchPlaceholder) + '"') + ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list"></div>'), this.multiple && this.options.actionsBox && (a = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm"><button type="button" class="actions-btn bs-select-all btn ' + G.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + G.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>"), this.multiple && this.options.doneButton && (c = '<div class="bs-donebutton"><div class="btn-group"><button type="button" class="btn btn-sm ' + G.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"), this.options.allowClear && (d = '<span class="close bs-select-clear-selected" title="' + this.options.deselectAllText + '"><span>&times;</span>'), o = '<div class="dropdown bootstrap-select' + t + s + '"><button type="button" tabindex="-1" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"' : "") + q.DATA_TOGGLE + n + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">&nbsp;</div></div> </div>' + d + "</span>" + (V.major >= "4" ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + G.MENU + " " + (V.major >= "4" ? "" : G.SHOW) + '">' + r + l + a + '<div class="inner ' + G.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + i + '><ul class="' + G.MENU + " inner " + (V.major >= "4" ? G.SHOW : "") + '" role="presentation"></ul></div>' + c + "</div></div>", e(o)
				},
				setPositionData: function() {
					this.selectpicker.view.canHighlight = [], this.selectpicker.view.size = 0, this.selectpicker.view.firstHighlightIndex = !1;
					for (var e = 0; e < this.selectpicker.current.data.length; e++) {
						var t = this.selectpicker.current.data[e],
							i = !0;
						"divider" === t.type ? (i = !1, t.height = this.sizeInfo.dividerHeight) : "optgroup-label" === t.type ? (i = !1, t.height = this.sizeInfo.dropdownHeaderHeight) : t.height = this.sizeInfo.liHeight, t.disabled && (i = !1), this.selectpicker.view.canHighlight.push(i), i && (this.selectpicker.view.size++, t.posinset = this.selectpicker.view.size, !1 === this.selectpicker.view.firstHighlightIndex && (this.selectpicker.view.firstHighlightIndex = e)), t.position = (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) + t.height
					}
				},
				isVirtual: function() {
					return !1 !== this.options.virtualScroll && this.selectpicker.main.data.length >= this.options.virtualScroll || !0 === this.options.virtualScroll
				},
				createView: function(t, i, s) {
					var n, o, r = this,
						l = 0,
						c = [];
					if (this.selectpicker.isSearching = t, this.selectpicker.current = t ? this.selectpicker.search : this.selectpicker.main, this.setPositionData(), i)
						if (s) l = this.$menuInner[0].scrollTop;
						else if (!r.multiple) {
						var d = r.$element[0],
							h = (d.options[d.selectedIndex] || {}).liIndex;
						if ("number" == typeof h && !1 !== r.options.size) {
							var p = r.selectpicker.main.data[h],
								u = p && p.position;
							u && (l = u - (r.sizeInfo.menuInnerHeight + r.sizeInfo.liHeight) / 2)
						}
					}

					function f(e, i) {
						var s, l, d, h, p, u, m, v, g, b, w = r.selectpicker.current.data.length,
							I = [],
							x = !0,
							k = r.isVirtual();
						r.selectpicker.view.scrollTop = e, s = r.options.chunkSize, l = Math.ceil(w / s) || 1;
						for (var y = 0; y < l; y++) {
							var $ = (y + 1) * s;
							if (y === l - 1 && ($ = w), I[y] = [y * s + (y ? 1 : 0), $], !w) break;
							void 0 === p && e - 1 <= r.selectpicker.current.data[$ - 1].position - r.sizeInfo.menuInnerHeight && (p = y)
						}
						if (void 0 === p && (p = 0), u = [r.selectpicker.view.position0, r.selectpicker.view.position1], d = Math.max(0, p - 1), h = Math.min(l - 1, p + 1), r.selectpicker.view.position0 = !1 === k ? 0 : Math.max(0, I[d][0]) || 0, r.selectpicker.view.position1 = !1 === k ? w : Math.min(w, I[h][1]) || 0, m = u[0] !== r.selectpicker.view.position0 || u[1] !== r.selectpicker.view.position1, void 0 !== r.activeIndex && (o = (r.selectpicker.main.data[r.prevActiveIndex] || {}).element, c = (r.selectpicker.main.data[r.activeIndex] || {}).element, n = (r.selectpicker.main.data[r.selectedIndex] || {}).element, i && (r.activeIndex !== r.selectedIndex && r.defocusItem(c), r.activeIndex = void 0), r.activeIndex && r.activeIndex !== r.selectedIndex && r.defocusItem(n)), void 0 !== r.prevActiveIndex && r.prevActiveIndex !== r.activeIndex && r.prevActiveIndex !== r.selectedIndex && r.defocusItem(o), i || m) {
							if (v = r.selectpicker.view.visibleElements ? r.selectpicker.view.visibleElements.slice() : [], r.selectpicker.view.visibleElements = !1 === k ? r.selectpicker.current.elements : r.selectpicker.current.elements.slice(r.selectpicker.view.position0, r.selectpicker.view.position1), r.setOptionStatus(), (t || !1 === k && i) && (g = v, b = r.selectpicker.view.visibleElements, x = !(g.length === b.length && g.every((function(e, t) {
									return e === b[t]
								})))), (i || !0 === k) && x) {
								var S, E, C = r.$menuInner[0],
									O = document.createDocumentFragment(),
									A = C.firstChild.cloneNode(!1),
									T = r.selectpicker.view.visibleElements,
									z = [];
								C.replaceChild(A, C.firstChild);
								y = 0;
								for (var D = T.length; y < D; y++) {
									var L, N, H = T[y];
									r.options.sanitize && (L = H.lastChild) && (N = r.selectpicker.current.data[y + r.selectpicker.view.position0]) && N.content && !N.sanitized && (z.push(L), N.sanitized = !0), O.appendChild(H)
								}
								if (r.options.sanitize && z.length && a(z, r.options.whiteList, r.options.sanitizeFn), !0 === k ? (S = 0 === r.selectpicker.view.position0 ? 0 : r.selectpicker.current.data[r.selectpicker.view.position0 - 1].position, E = r.selectpicker.view.position1 > w - 1 ? 0 : r.selectpicker.current.data[w - 1].position - r.selectpicker.current.data[r.selectpicker.view.position1 - 1].position, C.firstChild.style.marginTop = S + "px", C.firstChild.style.marginBottom = E + "px") : (C.firstChild.style.marginTop = 0, C.firstChild.style.marginBottom = 0), C.firstChild.appendChild(O), !0 === k && r.sizeInfo.hasScrollBar) {
									var P = C.firstChild.offsetWidth;
									if (i && P < r.sizeInfo.menuInnerInnerWidth && r.sizeInfo.totalMenuWidth > r.sizeInfo.selectWidth) C.firstChild.style.minWidth = r.sizeInfo.menuInnerInnerWidth + "px";
									else if (P > r.sizeInfo.menuInnerInnerWidth) {
										r.$menu[0].style.minWidth = 0;
										var W = C.firstChild.offsetWidth;
										W > r.sizeInfo.menuInnerInnerWidth && (r.sizeInfo.menuInnerInnerWidth = W, C.firstChild.style.minWidth = r.sizeInfo.menuInnerInnerWidth + "px"), r.$menu[0].style.minWidth = ""
									}
								}
							}(!t && r.options.source.load || t && r.options.source.search) && p === l - 1 && r.fetchData((function() {
								r.render(), r.buildList(w, t), r.setPositionData(), f(e)
							}), t ? "search" : "load", p + 1, t ? r.selectpicker.search.previousValue : void 0)
						}
						if (r.prevActiveIndex = r.activeIndex, r.options.liveSearch) {
							if (t && i) {
								var B, M = 0;
								r.selectpicker.view.canHighlight[M] || (M = 1 + r.selectpicker.view.canHighlight.slice(1).indexOf(!0)), B = r.selectpicker.view.visibleElements[M], r.defocusItem(r.selectpicker.view.currentActive), r.activeIndex = (r.selectpicker.current.data[M] || {}).index, r.focusItem(B)
							}
						} else r.$menuInner.trigger("focus")
					}
					f(l, !0), this.$menuInner.off("scroll.createView").on("scroll.createView", (function(e, t) {
						r.noScroll || f(this.scrollTop, t), r.noScroll = !1
					})), e(window).off("resize" + F + "." + this.selectId + ".createView").on("resize" + F + "." + this.selectId + ".createView", (function() {
						r.$newElement.hasClass(G.SHOW) && f(r.$menuInner[0].scrollTop)
					}))
				},
				focusItem: function(e, t, i) {
					if (e) {
						t = t || this.selectpicker.main.data[this.activeIndex];
						var s = e.firstChild;
						s && (s.setAttribute("aria-setsize", this.selectpicker.view.size), s.setAttribute("aria-posinset", t.posinset), !0 !== i && (this.focusedParent.setAttribute("aria-activedescendant", s.id), e.classList.add("active"), s.classList.add("active")))
					}
				},
				defocusItem: function(e) {
					e && (e.classList.remove("active"), e.firstChild && e.firstChild.classList.remove("active"))
				},
				setPlaceholder: function() {
					var e = this,
						t = !1;
					if ((this.options.placeholder || this.options.allowClear) && !this.multiple) {
						this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option")), t = !0;
						var i = this.$element[0],
							s = !1,
							n = !this.selectpicker.view.titleOption.parentNode,
							o = i.selectedIndex,
							r = i.options[o],
							l = i.querySelector("select > *:not(:disabled)"),
							a = l ? l.index : 0,
							c = window.performance && window.performance.getEntriesByType("navigation"),
							d = c && c.length ? "back_forward" !== c[0].type : 2 !== window.performance.navigation.type;
						n && (this.selectpicker.view.titleOption.className = "bs-title-option", this.selectpicker.view.titleOption.value = "", s = !r || o === a && !1 === r.defaultSelected && void 0 === this.$element.data("selected")), (n || 0 !== this.selectpicker.view.titleOption.index) && i.insertBefore(this.selectpicker.view.titleOption, i.firstChild), s && d ? i.selectedIndex = 0 : "complete" !== document.readyState && window.addEventListener("pageshow", (function() {
							e.selectpicker.view.displayedValue !== i.value && e.render()
						}))
					}
					return t
				},
				fetchData: function(e, t, i, s) {
					t = t || "data";
					var n, o = this,
						r = this.options.source[t];
					r ? (this.options.virtualScroll = !0, "function" == typeof r ? r.call(this, (function(i) {
						n = o.buildData(i, t), e.call(o, n)
					}), i, s) : Array.isArray(r) && (n = o.buildData(r, t), e.call(o, n))) : (n = this.buildData(!1, t), e.call(o, n))
				},
				buildData: function(e, t) {
					var i = !1 === e ? J.fromOption : J.fromDataSource,
						s = ':not([hidden]):not([data-hidden="true"])',
						n = [],
						o = 0,
						r = 0,
						l = this.setPlaceholder() && !e ? 1 : 0;
					"load" === t ? o = this.selectpicker.main.data.length : "search" === t && (o = this.selectpicker.search.data.length), this.options.hideDisabled && (s += ":not(:disabled)");
					var a = e ? e.filter(ee, this) : this.$element[0].querySelectorAll("select > *" + s);

					function c(e) {
						var t = n[n.length - 1];
						t && "divider" === t.type && (t.optID || e.optID) || ((e = e || {}).type = "divider", n.push(e))
					}

					function d(e, t) {
						if ((t = t || {}).divider = i(e, "divider"), !0 === t.divider) c({
							optID: t.optID
						});
						else {
							var s = n.length + o,
								r = i(e, "style"),
								l = r ? L(r) : "",
								a = (e.className || "") + (t.optgroupClass || "");
							t.optID && (a = "opt " + a), t.optionClass = a.trim(), t.inlineStyle = l, t.text = i(e, "text"), t.content = i(e, "content"), t.tokens = i(e, "tokens"), t.subtext = i(e, "subtext"), t.icon = i(e, "icon"), t.display = t.content || t.text, t.value = void 0 === e.value ? e.text : e.value, t.type = "option", t.index = s, t.option = e.option ? e.option : e, t.option.liIndex = s, t.selected = !!e.selected, t.disabled = t.disabled || !!e.disabled, n.push(t)
						}
					}

					function h(t, o) {
						var a = o[t],
							h = !(t - 1 < l) && o[t - 1],
							p = o[t + 1],
							u = e ? a.children.filter(ee, this) : a.querySelectorAll("option" + s);
						if (u.length) {
							var m, v, g = {
								display: L(i(f, "label")),
								subtext: i(a, "subtext"),
								icon: i(a, "icon"),
								type: "optgroup-label",
								optgroupClass: " " + (a.className || "")
							};
							r++, h && c({
								optID: r
							}), g.optID = r, n.push(g);
							for (var b = 0, w = u.length; b < w; b++) {
								var I = u[b];
								0 === b && (v = (m = n.length - 1) + w), d(I, {
									headerIndex: m,
									lastIndex: v,
									optID: g.optID,
									optgroupClass: g.optgroupClass,
									disabled: a.disabled
								})
							}
							p && c({
								optID: r
							})
						}
					}
					for (var p = a.length, u = l; u < p; u++) {
						var f = a[u],
							m = f.children;
						m && m.length ? h.call(this, l, a) : d.call(this, f, {})
					}
					switch (t) {
						case "data":
							this.selectpicker.main.data = this.selectpicker.current.data = n;
							break;
						case "load":
							Array.prototype.push.apply(this.selectpicker.main.data, n), this.selectpicker.current.data = this.selectpicker.main.data;
							break;
						case "search":
							Array.prototype.push.apply(this.selectpicker.search.data, n)
					}
					return n
				},
				buildList: function(e, t) {
					var i = this,
						s = t ? this.selectpicker.search.data : this.selectpicker.main.data,
						n = [],
						o = 0;

					function r(e, t) {
						var s, n = 0;
						switch (t.type) {
							case "divider":
								s = Z.li(!1, G.DIVIDER, t.optID ? t.optID + "div" : void 0);
								break;
							case "option":
								(s = Z.li(Z.a(Z.text.call(i, t), t.optionClass, t.inlineStyle), "", t.optID)).firstChild && (s.firstChild.id = i.selectId + "-" + t.index);
								break;
							case "optgroup-label":
								s = Z.li(Z.label.call(i, t), "dropdown-header" + t.optgroupClass, t.optID)
						}
						t.element = s, e.push(s), t.display && (n += t.display.length), t.subtext && (n += t.subtext.length), t.icon && (n += 1), n > o && (o = n, i.selectpicker.view.widestOption = e[e.length - 1])
					}!i.options.showTick && !i.multiple || K.checkMark.parentNode || (K.checkMark.className = this.options.iconBase + " " + i.options.tickIcon + " check-mark", K.a.appendChild(K.checkMark));
					for (var l = e || 0, a = s.length, c = l; c < a; c++) {
						r(n, s[c])
					}
					e ? t ? Array.prototype.push.apply(this.selectpicker.search.elements, n) : (Array.prototype.push.apply(this.selectpicker.main.elements, n), this.selectpicker.current.elements = this.selectpicker.main.elements) : t ? this.selectpicker.search.elements = n : this.selectpicker.main.elements = this.selectpicker.current.elements = n
				},
				findLis: function() {
					return this.$menuInner.find(".inner > li")
				},
				render: function(e) {
					var t, i, s = this,
						n = this.$element[0],
						o = this.setPlaceholder() && 0 === n.selectedIndex,
						r = v.call(this),
						l = r.length,
						c = g.call(this, r),
						d = this.$button[0],
						h = d.querySelector(".filter-option-inner-inner"),
						p = document.createTextNode(this.options.multipleSeparator),
						u = K.fragment.cloneNode(!1),
						f = !1;
					if (this.options.source.data && e && (r.map((function e(t) {
							t.selected ? s.createOption(t, !0) : t.children && t.children.length && t.children.map(e)
						})), n.appendChild(this.selectpicker.main.optionQueue), o && (o = 0 === n.selectedIndex)), d.classList.toggle("bs-placeholder", s.multiple ? !l : !c && 0 !== c), s.multiple || 1 !== r.length || (s.selectpicker.view.displayedValue = c), "static" === this.options.selectedTextFormat) u = Z.text.call(this, {
						text: this.options.placeholder
					}, !0);
					else if ((t = this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count") && l > 1) && (t = (i = this.options.selectedTextFormat.split(">")).length > 1 && l > i[1] || 1 === i.length && l >= 2), !1 === t) {
						if (!o) {
							for (var m = 0; m < l && m < 50; m++) {
								var b = r[m],
									w = {};
								b && (this.multiple && m > 0 && u.appendChild(p.cloneNode(!1)), b.title ? w.text = b.title : b.content && s.options.showContent ? (w.content = b.content.toString(), f = !0) : (s.options.showIcon && (w.icon = b.icon), s.options.showSubtext && !s.multiple && b.subtext && (w.subtext = " " + b.subtext), w.text = b.text.trim()), u.appendChild(Z.text.call(this, w, !0)))
							}
							l > 49 && u.appendChild(document.createTextNode("..."))
						}
					} else {
						var I = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';
						this.options.hideDisabled && (I += ":not(:disabled)");
						var x = this.$element[0].querySelectorAll("select > option" + I + ", optgroup" + I + " option" + I).length,
							k = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(l, x) : this.options.countSelectedText;
						u = Z.text.call(this, {
							text: k.replace("{0}", l.toString()).replace("{1}", x.toString())
						}, !0)
					}
					if (u.childNodes.length || (u = Z.text.call(this, {
							text: this.options.placeholder ? this.options.placeholder : this.options.noneSelectedText
						}, !0)), d.title = u.textContent.replace(/<[^>]*>?/g, "").trim(), this.options.sanitize && f && a([u], s.options.whiteList, s.options.sanitizeFn), h.innerHTML = "", h.appendChild(u), V.major < 4 && this.$newElement[0].classList.contains("bs3-has-addon")) {
						var y = d.querySelector(".filter-expand"),
							$ = h.cloneNode(!0);
						$.className = "filter-expand", y ? d.replaceChild($, y) : d.appendChild($)
					}
					this.$element.trigger("rendered" + F)
				},
				setStyle: function(e, t) {
					var i, s = this.$button[0],
						n = this.$newElement[0],
						o = this.options.style.trim();
					this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")), V.major < 4 && (n.classList.add("bs3"), n.parentNode.classList && n.parentNode.classList.contains("input-group") && (n.previousElementSibling || n.nextElementSibling) && (n.previousElementSibling || n.nextElementSibling).classList.contains("input-group-addon") && n.classList.add("bs3-has-addon")), i = e ? e.trim() : o, "add" == t ? i && s.classList.add.apply(s.classList, i.split(" ")) : "remove" == t ? i && s.classList.remove.apply(s.classList, i.split(" ")) : (o && s.classList.remove.apply(s.classList, o.split(" ")), i && s.classList.add.apply(s.classList, i.split(" ")))
				},
				liHeight: function(t) {
					if (t || !1 !== this.options.size && !Object.keys(this.sizeInfo).length) {
						var i, s = K.div.cloneNode(!1),
							n = K.div.cloneNode(!1),
							o = K.div.cloneNode(!1),
							r = document.createElement("ul"),
							l = K.li.cloneNode(!1),
							a = K.li.cloneNode(!1),
							c = K.a.cloneNode(!1),
							d = K.span.cloneNode(!1),
							h = this.options.header && this.$menu.find("." + G.POPOVERHEADER).length > 0 ? this.$menu.find("." + G.POPOVERHEADER)[0].cloneNode(!0) : null,
							p = this.options.liveSearch ? K.div.cloneNode(!1) : null,
							u = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
							f = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null,
							m = this.$element[0].options[0];
						if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth, d.className = "text", c.className = "dropdown-item " + (m ? m.className : ""), s.className = this.$menu[0].parentNode.className + " " + G.SHOW, s.style.width = 0, "auto" === this.options.width && (n.style.minWidth = 0), n.className = G.MENU + " " + G.SHOW, o.className = "inner " + G.SHOW, r.className = G.MENU + " inner " + (V.major >= "4" ? G.SHOW : ""), l.className = G.DIVIDER, a.className = "dropdown-header", d.appendChild(document.createTextNode("​")), this.selectpicker.current.data.length)
							for (var v = 0; v < this.selectpicker.current.data.length; v++) {
								var g = this.selectpicker.current.data[v];
								if ("option" === g.type) {
									i = g.element;
									break
								}
							} else i = K.li.cloneNode(!1), c.appendChild(d), i.appendChild(c);
						if (a.appendChild(d.cloneNode(!0)), this.selectpicker.view.widestOption && r.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)), r.appendChild(i), r.appendChild(l), r.appendChild(a), h && n.appendChild(h), p) {
							var b = document.createElement("input");
							p.className = "bs-searchbox", b.className = "form-control", p.appendChild(b), n.appendChild(p)
						}
						u && n.appendChild(u), o.appendChild(r), n.appendChild(o), f && n.appendChild(f), s.appendChild(n), document.body.appendChild(s);
						var w, I = i.offsetHeight,
							x = a ? a.offsetHeight : 0,
							y = h ? h.offsetHeight : 0,
							$ = p ? p.offsetHeight : 0,
							S = u ? u.offsetHeight : 0,
							E = f ? f.offsetHeight : 0,
							C = e(l).outerHeight(!0),
							O = window.getComputedStyle(n),
							A = n.offsetWidth,
							T = {
								vert: k(O.paddingTop) + k(O.paddingBottom) + k(O.borderTopWidth) + k(O.borderBottomWidth),
								horiz: k(O.paddingLeft) + k(O.paddingRight) + k(O.borderLeftWidth) + k(O.borderRightWidth)
							},
							z = {
								vert: T.vert + k(O.marginTop) + k(O.marginBottom) + 2,
								horiz: T.horiz + k(O.marginLeft) + k(O.marginRight) + 2
							};
						o.style.overflowY = "scroll", w = n.offsetWidth - A, document.body.removeChild(s), this.sizeInfo.liHeight = I, this.sizeInfo.dropdownHeaderHeight = x, this.sizeInfo.headerHeight = y, this.sizeInfo.searchHeight = $, this.sizeInfo.actionsHeight = S, this.sizeInfo.doneButtonHeight = E, this.sizeInfo.dividerHeight = C, this.sizeInfo.menuPadding = T, this.sizeInfo.menuExtras = z, this.sizeInfo.menuWidth = A, this.sizeInfo.menuInnerInnerWidth = A - T.horiz, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth, this.sizeInfo.scrollBarWidth = w, this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight, this.setPositionData()
					}
				},
				getSelectPosition: function() {
					var t, i = e(window),
						s = this.$newElement.offset(),
						n = e(this.options.container);
					this.options.container && n.length && !n.is("body") ? ((t = n.offset()).top += parseInt(n.css("borderTopWidth")), t.left += parseInt(n.css("borderLeftWidth"))) : t = {
						top: 0,
						left: 0
					};
					var o = this.options.windowPadding;
					this.sizeInfo.selectOffsetTop = s.top - t.top - i.scrollTop(), this.sizeInfo.selectOffsetBot = i.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - t.top - o[2], this.sizeInfo.selectOffsetLeft = s.left - t.left - i.scrollLeft(), this.sizeInfo.selectOffsetRight = i.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - t.left - o[1], this.sizeInfo.selectOffsetTop -= o[0], this.sizeInfo.selectOffsetLeft -= o[3]
				},
				setMenuSize: function(e) {
					this.getSelectPosition();
					var t, i, s, n, o, r, l, a, c = this.sizeInfo.selectWidth,
						d = this.sizeInfo.liHeight,
						h = this.sizeInfo.headerHeight,
						p = this.sizeInfo.searchHeight,
						u = this.sizeInfo.actionsHeight,
						f = this.sizeInfo.doneButtonHeight,
						m = this.sizeInfo.dividerHeight,
						v = this.sizeInfo.menuPadding,
						g = 0;
					if (this.options.dropupAuto && (l = d * this.selectpicker.current.data.length + v.vert, a = this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && l + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot, !0 === this.selectpicker.isSearching && (a = this.selectpicker.dropup), this.$newElement.toggleClass(G.DROPUP, a), this.selectpicker.dropup = a), "auto" === this.options.size) n = this.selectpicker.current.data.length > 3 ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0, i = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert, s = n + h + p + u + f, r = Math.max(n - v.vert, 0), this.$newElement.hasClass(G.DROPUP) && (i = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert), o = i, t = i - h - p - u - f - v.vert;
					else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) {
						for (var b = 0; b < this.options.size; b++) "divider" === this.selectpicker.current.data[b].type && g++;
						t = (i = d * this.options.size + g * m + v.vert) - v.vert, o = i + h + p + u + f, s = r = ""
					}
					this.$menu.css({
						"max-height": o + "px",
						overflow: "hidden",
						"min-height": s + "px"
					}), this.$menuInner.css({
						"max-height": t + "px",
						"overflow-y": "auto",
						"min-height": r + "px"
					}), this.sizeInfo.menuInnerHeight = Math.max(t, 1), this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth), "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(G.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - c), this.dropdown && this.dropdown._popper && this.dropdown._popper.update()
				},
				setSize: function(t) {
					if (this.liHeight(t), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
						var i = this,
							s = e(window);
						this.setMenuSize(), this.options.liveSearch && this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", (function() {
							return i.setMenuSize()
						})), "auto" === this.options.size ? s.off("resize" + F + "." + this.selectId + ".setMenuSize scroll" + F + "." + this.selectId + ".setMenuSize").on("resize" + F + "." + this.selectId + ".setMenuSize scroll" + F + "." + this.selectId + ".setMenuSize", (function() {
							return i.setMenuSize()
						})) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && s.off("resize" + F + "." + this.selectId + ".setMenuSize scroll" + F + "." + this.selectId + ".setMenuSize")
					}
					this.createView(!1, !0, t)
				},
				setWidth: function() {
					var e = this;
					"auto" === this.options.width ? requestAnimationFrame((function() {
						e.$menu.css("min-width", "0"), e.$element.on("loaded" + F, (function() {
							e.liHeight(), e.setMenuSize();
							var t = e.$newElement.clone().appendTo("body"),
								i = t.css("width", "auto").children("button").outerWidth();
							t.remove(), e.sizeInfo.selectWidth = Math.max(e.sizeInfo.totalMenuWidth, i), e.$newElement.css("width", e.sizeInfo.selectWidth + "px")
						}))
					})) : "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", "")), this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement[0].classList.remove("fit-width")
				},
				selectPosition: function() {
					this.$bsContainer = e('<div class="bs-container" />');
					var t, i, s, n = this,
						o = e(this.options.container),
						r = function(r) {
							var l = {},
								a = n.options.display || !!e.fn.dropdown.Constructor.Default && e.fn.dropdown.Constructor.Default.display;
							n.$bsContainer.addClass(r.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(G.DROPUP, r.hasClass(G.DROPUP)), t = r.offset(), o.is("body") ? i = {
								top: 0,
								left: 0
							} : ((i = o.offset()).top += parseInt(o.css("borderTopWidth")) - o.scrollTop(), i.left += parseInt(o.css("borderLeftWidth")) - o.scrollLeft()), s = r.hasClass(G.DROPUP) ? 0 : r[0].offsetHeight, (V.major < 4 || "static" === a) && (l.top = t.top - i.top + s, l.left = t.left - i.left), l.width = r[0].offsetWidth, n.$bsContainer.css(l)
						};
					this.$button.on("click.bs.dropdown.data-api", (function() {
						n.isDisabled() || (r(n.$newElement), n.$bsContainer.appendTo(n.options.container).toggleClass(G.SHOW, !n.$button.hasClass(G.SHOW)).append(n.$menu))
					})), e(window).off("resize" + F + "." + this.selectId + " scroll" + F + "." + this.selectId).on("resize" + F + "." + this.selectId + " scroll" + F + "." + this.selectId, (function() {
						n.$newElement.hasClass(G.SHOW) && r(n.$newElement)
					})), this.$element.on("hide" + F, (function() {
						n.$menu.data("height", n.$menu.height()), n.$bsContainer.detach()
					}))
				},
				createOption: function(e, t) {
					var i = e.option ? e.option : e;
					if (i && 1 !== i.nodeType) {
						var s = (t ? K.selectedOption : K.option).cloneNode(!0);
						void 0 !== i.value && (s.value = i.value), s.textContent = i.text, s.selected = !0, void 0 !== i.liIndex ? s.liIndex = i.liIndex : t || (s.liIndex = e.index), e.option = s, this.selectpicker.main.optionQueue.appendChild(s)
					}
				},
				setOptionStatus: function(e) {
					if (this.noScroll = !1, this.selectpicker.view.visibleElements && this.selectpicker.view.visibleElements.length) {
						for (var t = 0; t < this.selectpicker.view.visibleElements.length; t++) {
							var i = this.selectpicker.current.data[t + this.selectpicker.view.position0];
							i.option && (!0 !== e && this.setDisabled(i), this.setSelected(i))
						}
						this.options.source.data && this.$element[0].appendChild(this.selectpicker.main.optionQueue)
					}
				},
				setSelected: function(e, t) {
					t = void 0 === t ? e.selected : t;
					var i, s, n = e.index,
						o = e.element,
						r = void 0 !== this.activeIndex,
						l = this.activeIndex === n || t && !this.multiple && !r;
					o && (void 0 !== t && (e.selected = t, e.option && (e.option.selected = t)), t && this.options.source.data && this.createOption(e, !1), s = o.firstChild, t && (this.selectedIndex = n), o.classList.toggle("selected", t), l ? (this.focusItem(o, e), this.selectpicker.view.currentActive = o, this.activeIndex = n) : this.defocusItem(o), s && (s.classList.toggle("selected", t), t ? s.setAttribute("aria-selected", !0) : this.multiple ? s.setAttribute("aria-selected", !1) : s.removeAttribute("aria-selected")), l || r || !t || void 0 === this.prevActiveIndex || (i = this.selectpicker.main.elements[this.prevActiveIndex], this.defocusItem(i)))
				},
				setDisabled: function(e) {
					var t, i = e.disabled,
						s = e.element;
					s && (t = s.firstChild, s.classList.toggle(G.DISABLED, i), t && (V.major >= "4" && t.classList.toggle(G.DISABLED, i), i ? (t.setAttribute("aria-disabled", i), t.setAttribute("tabindex", -1)) : (t.removeAttribute("aria-disabled"), t.setAttribute("tabindex", 0))))
				},
				isDisabled: function() {
					return this.$element[0].disabled
				},
				checkDisabled: function() {
					this.isDisabled() ? (this.$newElement[0].classList.add(G.DISABLED), this.$button.addClass(G.DISABLED).attr("aria-disabled", !0)) : this.$button[0].classList.contains(G.DISABLED) && (this.$newElement[0].classList.remove(G.DISABLED), this.$button.removeClass(G.DISABLED).attr("aria-disabled", !1))
				},
				clickListener: function() {
					var t = this,
						i = e(document);

					function s() {
						t.options.liveSearch ? t.$searchbox.trigger("focus") : t.$menuInner.trigger("focus")
					}

					function n() {
						t.dropdown && t.dropdown._popper && t.dropdown._popper.state ? s() : requestAnimationFrame(n)
					}
					i.data("spaceSelect", !1), this.$button.on("keyup", (function(e) {
						/(32)/.test(e.keyCode.toString(10)) && i.data("spaceSelect") && (e.preventDefault(), i.data("spaceSelect", !1))
					})), this.$newElement.on("show.bs.dropdown", (function() {
						t.dropdown || "4" !== V.major || (t.dropdown = t.$button.data("bs.dropdown"), t.dropdown._menu = t.$menu[0])
					})), this.$button.on("click.bs.dropdown.data-api", (function(e) {
						if (t.options.allowClear) {
							var i = e.target,
								s = t.$clearButton[0];
							/MSIE|Trident/.test(window.navigator.userAgent) && (i = document.elementFromPoint(e.clientX, e.clientY)), i !== s && i.parentElement !== s || (e.stopImmediatePropagation(), function(e) {
								if (t.multiple) t.deselectAll();
								else {
									var i = t.$element[0],
										s = i.value,
										n = i.selectedIndex,
										o = i.options[n],
										r = !!o && t.selectpicker.main.data[o.liIndex];
									r && t.setSelected(r, !1), i.selectedIndex = 0, w = [n, !1, s], t.$element.triggerNative("change")
								}
								t.$newElement.hasClass(G.SHOW) && (t.options.liveSearch && t.$searchbox.trigger("focus"), t.createView(!1))
							}())
						}
						t.$newElement.hasClass(G.SHOW) || t.setSize()
					})), this.$element.on("shown" + F, (function() {
						t.$menuInner[0].scrollTop !== t.selectpicker.view.scrollTop && (t.$menuInner[0].scrollTop = t.selectpicker.view.scrollTop), V.major > 3 ? requestAnimationFrame(n) : s()
					})), this.$menuInner.on("mouseenter", "li a", (function(e) {
						var i = this.parentElement,
							s = t.isVirtual() ? t.selectpicker.view.position0 : 0,
							n = Array.prototype.indexOf.call(i.parentElement.children, i),
							o = t.selectpicker.current.data[n + s];
						t.focusItem(i, o, !0)
					})), this.$menuInner.on("click", "li a", (function(i, s) {
						var n = e(this),
							o = t.$element[0],
							r = t.isVirtual() ? t.selectpicker.view.position0 : 0,
							l = t.selectpicker.current.data[n.parent().index() + r],
							a = l.index,
							c = g.call(t),
							d = o.selectedIndex,
							h = o.options[d],
							p = !!h && t.selectpicker.main.data[h.liIndex],
							u = !0;
						if (t.multiple && 1 !== t.options.maxOptions && i.stopPropagation(), i.preventDefault(), !t.isDisabled() && !n.parent().hasClass(G.DISABLED)) {
							var f = l.option,
								m = e(f),
								b = f.selected,
								I = m.parent("optgroup"),
								x = I.find("option"),
								k = t.options.maxOptions,
								y = I.data("maxOptions") || !1;
							if (a === t.activeIndex && (s = !0), s || (t.prevActiveIndex = t.activeIndex, t.activeIndex = void 0), t.multiple) {
								if (t.setSelected(l, !b), t.focusedParent.focus(), !1 !== k || !1 !== y) {
									var $ = k < v.call(t).length,
										S = y < I.find("option:selected").length;
									if (k && $ || y && S)
										if (k && 1 == k) o.selectedIndex = -1, f.selected = !0, t.setOptionStatus(!0);
										else if (y && 1 == y) {
										for (var E = 0; E < x.length; E++) {
											var C = x[E];
											C.selected = !1, t.setSelected(C.liIndex, !1)
										}
										f.selected = !0, t.setSelected(a, !0)
									} else {
										var O = "string" == typeof t.options.maxOptionsText ? [t.options.maxOptionsText, t.options.maxOptionsText] : t.options.maxOptionsText,
											A = "function" == typeof O ? O(k, y) : O,
											T = A[0].replace("{n}", k),
											z = A[1].replace("{n}", y),
											D = e('<div class="notify"></div>');
										A[2] && (T = T.replace("{var}", A[2][k > 1 ? 0 : 1]), z = z.replace("{var}", A[2][y > 1 ? 0 : 1])), f.selected = !1, t.$menu.append(D), k && $ && (D.append(e("<div>" + T + "</div>")), u = !1, t.$element.trigger("maxReached" + F)), y && S && (D.append(e("<div>" + z + "</div>")), u = !1, t.$element.trigger("maxReachedGrp" + F)), setTimeout((function() {
											t.setSelected(a, !1)
										}), 10), D[0].classList.add("fadeOut"), setTimeout((function() {
											D.remove()
										}), 1050)
									}
								}
							} else p && t.setSelected(p, !1), t.setSelected(l, !0);
							t.options.source.data && t.$element[0].appendChild(t.selectpicker.main.optionQueue), !t.multiple || t.multiple && 1 === t.options.maxOptions ? t.$button.trigger("focus") : t.options.liveSearch && t.$searchbox.trigger("focus"), u && (t.multiple || d !== o.selectedIndex) && (w = [f.index, m.prop("selected"), c], t.$element.triggerNative("change"))
						}
					})), this.$menu.on("click", "li." + G.DISABLED + " a, ." + G.POPOVERHEADER + ", ." + G.POPOVERHEADER + " :not(.close)", (function(i) {
						i.currentTarget == this && (i.preventDefault(), i.stopPropagation(), t.options.liveSearch && !e(i.target).hasClass("close") ? t.$searchbox.trigger("focus") : t.$button.trigger("focus"))
					})), this.$menuInner.on("click", ".divider, .dropdown-header", (function(e) {
						e.preventDefault(), e.stopPropagation(), t.options.liveSearch ? t.$searchbox.trigger("focus") : t.$button.trigger("focus")
					})), this.$menu.on("click", "." + G.POPOVERHEADER + " .close", (function() {
						t.$button.trigger("click")
					})), this.$searchbox.on("click", (function(e) {
						e.stopPropagation()
					})), this.$menu.on("click", ".actions-btn", (function(i) {
						t.options.liveSearch ? t.$searchbox.trigger("focus") : t.$button.trigger("focus"), i.preventDefault(), i.stopPropagation(), e(this).hasClass("bs-select-all") ? t.selectAll() : t.deselectAll()
					})), this.$button.on("focus" + F, (function(e) {
						var i = t.$element[0].getAttribute("tabindex");
						void 0 !== i && e.originalEvent && e.originalEvent.isTrusted && (this.setAttribute("tabindex", i), t.$element[0].setAttribute("tabindex", -1), t.selectpicker.view.tabindex = i)
					})).on("blur" + F, (function(e) {
						void 0 !== t.selectpicker.view.tabindex && e.originalEvent && e.originalEvent.isTrusted && (t.$element[0].setAttribute("tabindex", t.selectpicker.view.tabindex), this.setAttribute("tabindex", -1), t.selectpicker.view.tabindex = void 0)
					})), this.$element.on("change" + F, (function() {
						t.render(), t.$element.trigger("changed" + F, w), w = null
					})).on("focus" + F, (function() {
						t.options.mobile || t.$button[0].focus()
					}))
				},
				liveSearchListener: function() {
					var e = this;
					this.$button.on("click.bs.dropdown.data-api", (function() {
						e.$searchbox.val() && (e.$searchbox.val(""), e.selectpicker.search.previousValue = void 0)
					})), this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", (function(e) {
						e.stopPropagation()
					})), this.$searchbox.on("input propertychange", (function() {
						var t = e.$searchbox[0].value;
						if (e.selectpicker.search.elements = [], e.selectpicker.search.data = [], t)
							if (e.options.source.search) e.fetchData((function(i) {
								e.render(), e.buildList(void 0, !0), e.createView(!0), X.call(e, i, t)
							}), "search", 0, t);
							else {
								var i = [],
									s = t.toUpperCase(),
									n = {},
									o = [],
									r = e._searchStyle(),
									l = e.options.liveSearchNormalize;
								l && (s = C(s));
								for (var a = 0; a < e.selectpicker.main.data.length; a++) {
									var c = e.selectpicker.main.data[a];
									n[a] || (n[a] = x(c, s, r, l)), n[a] && void 0 !== c.headerIndex && -1 === o.indexOf(c.headerIndex) && (c.headerIndex > 0 && (n[c.headerIndex - 1] = !0, o.push(c.headerIndex - 1)), n[c.headerIndex] = !0, o.push(c.headerIndex), n[c.lastIndex + 1] = !0), n[a] && "optgroup-label" !== c.type && o.push(a)
								}
								a = 0;
								for (var d = o.length; a < d; a++) {
									var h = o[a],
										p = o[a - 1],
										u = (c = e.selectpicker.main.data[h], e.selectpicker.main.data[p]);
									("divider" !== c.type || "divider" === c.type && u && "divider" !== u.type && d - 1 !== a) && (e.selectpicker.search.data.push(c), i.push(e.selectpicker.main.elements[h]))
								}
								e.activeIndex = void 0, e.noScroll = !0, e.$menuInner.scrollTop(0), e.selectpicker.search.elements = i, e.createView(!0), X.call(e, i, t)
							}
						else e.selectpicker.search.previousValue && (e.$menuInner.scrollTop(0), e.createView(!1));
						e.selectpicker.search.previousValue = t
					}))
				},
				_searchStyle: function() {
					return this.options.liveSearchStyle || "contains"
				},
				val: function(e) {
					var t = this.$element[0];
					if (void 0 !== e) {
						var i = v.call(this),
							s = g.call(this, i);
						w = [null, null, s], Array.isArray(e) || (e = [e]), e.map(String);
						for (var n = 0; n < i.length; n++) {
							var o = i[n];
							o && -1 === e.indexOf(String(o.value)) && this.setSelected(o, !1)
						}
						if (this.selectpicker.main.data.filter((function(t) {
								return -1 !== e.indexOf(String(t.value)) && (this.setSelected(t, !0), !0)
							}), this), this.options.source.data && t.appendChild(this.selectpicker.main.optionQueue), this.$element.trigger("changed" + F, w), this.$newElement.hasClass(G.SHOW))
							if (this.multiple) this.setOptionStatus(!0);
							else {
								var r = (t.options[t.selectedIndex] || {}).liIndex;
								"number" == typeof r && (this.setSelected(this.selectedIndex, !1), this.setSelected(r, !0))
							}
						return this.render(), w = null, this.$element
					}
					return this.$element.val()
				},
				changeAll: function(e) {
					if (this.multiple) {
						void 0 === e && (e = !0);
						var t = this.$element[0],
							i = 0,
							s = 0,
							n = g.call(this);
						t.classList.add("bs-select-hidden");
						for (var o = 0, r = this.selectpicker.current.data, l = r.length; o < l; o++) {
							var a = r[o],
								c = a.option;
							c && !a.disabled && "divider" !== a.type && (a.selected && i++, c.selected = e, a.selected = e, !0 === e && s++)
						}
						t.classList.remove("bs-select-hidden"), i !== s && (this.setOptionStatus(), w = [null, null, n], this.$element.triggerNative("change"))
					}
				},
				selectAll: function() {
					return this.changeAll(!0)
				},
				deselectAll: function() {
					return this.changeAll(!1)
				},
				toggle: function(e, t) {
					var i, s = void 0 === t;
					(e = e || window.event) && e.stopPropagation(), !1 === s && (i = this.$newElement[0].classList.contains(G.SHOW), s = !0 === t && !1 === i || !1 === t && !0 === i), s && this.$button.trigger("click.bs.dropdown.data-api")
				},
				open: function(e) {
					this.toggle(e, !0)
				},
				close: function(e) {
					this.toggle(e, !1)
				},
				keydown: function(t) {
					var i, s, n, o, r, l = e(this),
						a = l.hasClass("dropdown-toggle"),
						c = (a ? l.closest(".dropdown") : l.closest(q.MENU)).data("this"),
						d = c.findLis(),
						h = !1,
						p = t.which === B && !a && !c.options.selectOnTab,
						u = Q.test(t.which) || p,
						f = c.$menuInner[0].scrollTop,
						m = !0 === c.isVirtual() ? c.selectpicker.view.position0 : 0;
					if (!(t.which >= 112 && t.which <= 123))
						if (!(s = c.$menu.hasClass(G.SHOW)) && (u || t.which >= 48 && t.which <= 57 || t.which >= 96 && t.which <= 105 || t.which >= 65 && t.which <= 90) && (c.$button.trigger("click.bs.dropdown.data-api"), c.options.liveSearch)) c.$searchbox.trigger("focus");
						else {
							if (t.which === H && s && (t.preventDefault(), c.$button.trigger("click.bs.dropdown.data-api").trigger("focus")), u) {
								if (!d.length) return; - 1 !== (i = (n = c.selectpicker.main.elements[c.activeIndex]) ? Array.prototype.indexOf.call(n.parentElement.children, n) : -1) && c.defocusItem(n), t.which === M ? (-1 !== i && i--, i + m < 0 && (i += d.length), c.selectpicker.view.canHighlight[i + m] || -1 === (i = c.selectpicker.view.canHighlight.slice(0, i + m).lastIndexOf(!0) - m) && (i = d.length - 1)) : (t.which === R || p) && (++i + m >= c.selectpicker.view.canHighlight.length && (i = c.selectpicker.view.firstHighlightIndex), c.selectpicker.view.canHighlight[i + m] || (i = i + 1 + c.selectpicker.view.canHighlight.slice(i + m + 1).indexOf(!0))), t.preventDefault();
								var v = m + i;
								t.which === M ? 0 === m && i === d.length - 1 ? (c.$menuInner[0].scrollTop = c.$menuInner[0].scrollHeight, v = c.selectpicker.current.elements.length - 1) : h = (r = (o = c.selectpicker.current.data[v]).position - o.height) < f : (t.which === R || p) && (i === c.selectpicker.view.firstHighlightIndex ? (c.$menuInner[0].scrollTop = 0, v = c.selectpicker.view.firstHighlightIndex) : h = (r = (o = c.selectpicker.current.data[v]).position - c.sizeInfo.menuInnerHeight) > f), n = c.selectpicker.current.elements[v], c.activeIndex = c.selectpicker.current.data[v].index, c.focusItem(n), c.selectpicker.view.currentActive = n, h && (c.$menuInner[0].scrollTop = r), c.options.liveSearch ? c.$searchbox.trigger("focus") : l.trigger("focus")
							} else if (!l.is("input") && !Y.test(t.which) || t.which === W && c.selectpicker.keydown.keyHistory) {
								var g, b, w = [];
								t.preventDefault(), c.selectpicker.keydown.keyHistory += N[t.which], c.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(c.selectpicker.keydown.resetKeyHistory.cancel), c.selectpicker.keydown.resetKeyHistory.cancel = c.selectpicker.keydown.resetKeyHistory.start(), b = c.selectpicker.keydown.keyHistory, /^(.)\1+$/.test(b) && (b = b.charAt(0));
								for (var I = 0; I < c.selectpicker.current.data.length; I++) {
									var k = c.selectpicker.current.data[I];
									x(k, b, "startsWith", !0) && c.selectpicker.view.canHighlight[I] && w.push(k.index)
								}
								if (w.length) {
									var y = 0;
									d.removeClass("active").find("a").removeClass("active"), 1 === b.length && (-1 === (y = w.indexOf(c.activeIndex)) || y === w.length - 1 ? y = 0 : y++), g = w[y], f - (o = c.selectpicker.main.data[g]).position > 0 ? (r = o.position - o.height, h = !0) : (r = o.position - c.sizeInfo.menuInnerHeight, h = o.position > f + c.sizeInfo.menuInnerHeight), n = c.selectpicker.main.elements[g], c.activeIndex = w[y], c.focusItem(n), n && n.firstChild.focus(), h && (c.$menuInner[0].scrollTop = r), l.trigger("focus")
								}
							}
							s && (t.which === W && !c.selectpicker.keydown.keyHistory || t.which === P || t.which === B && c.options.selectOnTab) && (t.which !== W && t.preventDefault(), c.options.liveSearch && t.which === W || (c.$menuInner.find(".active a").trigger("click", !0), l.trigger("focus"), c.options.liveSearch || (t.preventDefault(), e(document).data("spaceSelect", !0))))
						}
				},
				mobile: function() {
					this.options.mobile = !0, this.$element[0].classList.add("mobile-device")
				},
				refresh: function() {
					var t = this,
						i = e.extend({}, this.options, c(this.$element), this.$element.data());
					this.options = i, this.options.source.data ? (this.render(), this.buildList()) : this.fetchData((function() {
						t.render(), t.buildList()
					})), this.checkDisabled(), this.setStyle(), this.setWidth(), this.setSize(!0), this.$element.trigger("refreshed" + F)
				},
				hide: function() {
					this.$newElement.hide()
				},
				show: function() {
					this.$newElement.show()
				},
				remove: function() {
					this.$newElement.remove(), this.$element.remove()
				},
				destroy: function() {
					this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.selectpicker.view.titleOption && this.selectpicker.view.titleOption.parentNode && this.selectpicker.view.titleOption.parentNode.removeChild(this.selectpicker.view.titleOption), this.$element.off(F).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"), e(window).off(F + "." + this.selectId)
				}
			};
			var se = e.fn.selectpicker;

			function ne() {
				if (!(V.major < 5)) return U.dataApiKeydownHandler;
				if (e.fn.dropdown) {
					var t = e.fn.dropdown.Constructor._dataApiKeydownHandler || e.fn.dropdown.Constructor.prototype.keydown;
					return t.apply(this, arguments)
				}
			}
			e.fn.selectpicker = ie, e.fn.selectpicker.Constructor = te, e.fn.selectpicker.noConflict = function() {
				return e.fn.selectpicker = se, this
			}, e(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.dropdown.data-api", ":not(.bootstrap-select) > [" + q.DATA_TOGGLE + "]", ne).on("keydown.bs.dropdown.data-api", ":not(.bootstrap-select) > .dropdown-menu", ne).on("keydown" + F, ".bootstrap-select [" + q.DATA_TOGGLE + '], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', te.prototype.keydown).on("focusin.modal", ".bootstrap-select [" + q.DATA_TOGGLE + '], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', (function(e) {
				e.stopPropagation()
			})), document.addEventListener("DOMContentLoaded", (function() {
				e(".selectpicker").each((function() {
					var t = e(this);
					ie.call(t, t.data())
				}))
			}))
		}(jQuery)
	}
}));