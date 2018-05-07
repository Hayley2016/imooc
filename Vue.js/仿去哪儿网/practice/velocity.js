/*! velocity-animate v2.0.2 (Saturday 24th March 2018, 12:13:49 PM) */ ! function(e, t) {
	"function" == typeof define && define.amd ? define("velocity-animate", [], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Velocity = t()
}(this, function() {
	var e = this && this.__assign || Object.assign || function(e) {
			for (var t, r = 1, n = arguments.length; r < n; r++)
				for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
			return e
		},
		t = ["version", "RegisterEffect", "style", "patch", "timestamp"],
		r = 400,
		n = {
			fast: 200,
			normal: 400,
			slow: 600
		};

	function a(e) {
		return !0 === e || !1 === e
	}

	function i(e) {
		return "number" == typeof e
	}

	function o(e) {
		return "string" == typeof e
	}

	function s(e) {
		return "[object Function]" === Object.prototype.toString.call(e)
	}

	function l(e) {
		return !(!e || !e.nodeType)
	}

	function u(e) {
		return e && i(e.length) && s(e.velocity)
	}

	function c(e) {
		return e && e !== window && i(e.length) && !o(e) && !s(e) && !l(e) && (0 === e.length || l(e[0]))
	}

	function f(e) {
		if (!e || "object" != typeof e || e.nodeType || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
		var t = Object.getPrototypeOf(e);
		return !t || t.hasOwnProperty("constructor") && t.constructor === Object
	}

	function d() {
		return Object.create(null)
	}

	function p(e, t, r) {
		e && Object.defineProperty(e, t, {
			configurable: !0,
			writable: !0,
			value: r
		})
	}
	var g, m, y, v, h, b, S, I, w, x, U, O, q, E, C, V, k, N, _, A, z, P, M, L, T, R, B, j, F, D, W, H, X, Y, $, Q, G, J, Z, K, ee, te, re, ne, ae, ie, oe, se, le, ue, ce, fe, de, pe, ge, me, ye, ve, he, be, Se, Ie, we, xe, Ue, Oe, qe, Ee, Ce, Ve, ke, Ne, _e, Ae, ze, Pe, Me, Le, Te, Re, Be, je, Fe, De, We, He, Xe, Ye, $e, Qe, Ge, Je, Ze, Ke, et, tt, rt, nt, at, it, ot, st, lt, ut, ct, ft, dt, pt, gt, mt, yt, vt, ht, bt, St, It, wt, xt, Ut, Ot, qt = Date.now ? Date.now : function() {
			return (new Date).getTime()
		},
		Et = Object.assign || function(e) {
			for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
			if (null == e) throw new TypeError("Cannot convert undefined or null to object");
			for (var n = Object(e), a = 0; a < t.length; a++) {
				var i = t[a];
				if (null != i)
					for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o])
			}
			return n
		},
		Ct = String.prototype.startsWith ? function(e, t, r) {
			return e.startsWith(t, r)
		} : function(e, t, r) {
			return e.substr(!r || r < 0 ? 0 : +r, t.length) === t
		};

	function Vt(e, t) {
		for (var r = 0; r < e.length;)
			if (e[r++] === t) return !0;
		return !1
	}

	function kt(e) {
		for (var t = 0, r = arguments; t < r.length; t++) {
			var n = r[t];
			if (void 0 !== n && n == n) return n
		}
	}

	function Nt(e, t) {
		e instanceof Element && (e.classList ? e.classList.remove(t) : e.className = ("" + e.className).replace(RegExp("(^|\\s)" + t + "(\\s|$)", "gi"), " "))
	}

	function _t(e) {
		var t = e.velocityData;
		if (t) return t;
		for (var r = 0, n = 0, a = Ut.constructors; n < a.length; n++) e instanceof a[n] && (r |= 1 << n);
		var i = {
			types: r,
			count: 0,
			computedStyle: null,
			cache: d(),
			queueList: d(),
			lastAnimationList: d(),
			lastFinishList: d()
		};
		return Object.defineProperty(e, "velocityData", {
			value: i
		}), i
	}

	function At(e, t) {
		return i(e) ? e : o(e) ? n[e.toLowerCase()] || parseFloat(e.replace("ms", "").replace("s", "000")) : null == t ? void 0 : At(t)
	}

	function zt(e) {
		if (a(e)) return e
	}

	function Pt(e) {
		if (s(e)) return e
	}

	function Mt(e, t) {
		if (s(e)) return e
	}

	function Lt(e) {
		var t = At(e);
		if (!isNaN(t)) return t
	}

	function Tt(e, t) {
		var r = At(e);
		if (!isNaN(r) && r >= 0) return r
	}

	function Rt(e, t, r) {
		var n = Ut.Easing;
		if (o(e)) return n.Easings[e];
		if (s(e)) return e;
		if (Array.isArray(e)) {
			if (1 === e.length) return n.generateStep(e[0]);
			if (2 === e.length) return n.generateSpringRK4(e[0], e[1], t);
			if (4 === e.length) return n.generateBezier.apply(null, e) || !1
		}
	}

	function Bt(e) {
		if (!1 === e) return 0;
		var t = parseInt(e, 10);
		return !isNaN(t) && t >= 0 ? Math.min(t, 60) : void 0
	}

	function jt(e) {
		if (!1 === e) return 0;
		if (!0 === e) return !0;
		var t = parseInt(e, 10);
		return !isNaN(t) && t >= 0 ? t : void 0
	}

	function Ft(e, t) {
		if (!1 === e || o(e)) return e
	}

	function Dt(e) {
		if (!1 === e) return 0;
		if (!0 === e) return !0;
		var t = parseInt(e, 10);
		return !isNaN(t) && t >= 0 ? t : void 0
	}

	function Wt(e) {
		if (i(e)) return e
	}

	function Ht(e) {
		if (a(e)) return e
	}

	function Xt() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		var r, n, i, g, m, y, v, h = Ut.defaults,
			b = arguments,
			S = b[0],
			I = f(S) && (S.p || f(S.properties) && !S.properties.names || o(S.properties)),
			w = 0;
		l(this) ? r = [this] : c(this) ? (r = Et([], this), u(this) && (g = this.velocity.animations)) : I ? (r = Et([], S.elements || S.e), w++) : l(S) ? (r = Et([], [S]), w++) : c(S) && (r = Et([], S), w++), r && (p(r, "velocity", Xt.bind(r)), g && p(r.velocity, "animations", g));
		var x = "reverse" === (n = I ? kt(S.properties, S.p) : b[w++]),
			U = !x && o(n),
			O = U && Ut.Sequences[n],
			q = I ? kt(S.options, S.o) : b[w];
		f(q) && (i = q), Promise && kt(i && i.promise, h.promise) && (m = new Promise(function(e, t) {
			v = t, y = function(t) {
				if (u(t)) {
					var r = t && t.then;
					r && (t.then = void 0), e(t), r && (t.then = r)
				} else e(t)
			}
		}), r && (p(r, "then", m.then.bind(m)), p(r, "catch", m.catch.bind(m)), m.finally && p(r, "finally", m.finally.bind(m))));
		var E, C = kt(i && i.promiseRejectEmpty, h.promiseRejectEmpty);
		if (m && (r || U ? n || (C ? v("Velocity: No properties supplied, if that is deliberate then pass `promiseRejectEmpty:false` as an option. Aborting.") : y()) : C ? v("Velocity: No elements supplied, if that is deliberate then pass `promiseRejectEmpty:false` as an option. Aborting.") : y()), !r && !U || !n) return m;
		if (U) {
			for (var V = [], k = m && {
					_promise: m,
					_resolver: y,
					_rejecter: v
				}; w < b.length;) V.push(b[w++]);
			var N = n.replace(/\..*$/, ""),
				_ = Ut.Actions[N];
			if (_) {
				var A = _(V, r, k, n);
				return void 0 !== A ? A : r || m
			}
			if (!O) return
		}
		if (f(n) || x || O) {
			var z = {},
				P = h.sync;
			if (m && (p(z, "_promise", m), p(z, "_rejecter", v), p(z, "_resolver", y)), p(z, "_ready", 0), p(z, "_started", 0), p(z, "_completed", 0), p(z, "_total", 0), f(i)) {
				E = void 0 !== (B = Tt(i.duration)), z.duration = kt(B, h.duration), z.delay = kt(Lt(i.delay), h.delay), z.easing = Rt(kt(i.easing, h.easing), z.duration) || Rt(h.easing, z.duration), z.loop = kt(jt(i.loop), h.loop), z.repeat = z.repeatAgain = kt(Dt(i.repeat), h.repeat), null != i.speed && (z.speed = kt(Wt(i.speed), 1)), a(i.promise) && (z.promise = i.promise), z.queue = kt(Ft(i.queue), h.queue), i.mobileHA && !Ut.State.isGingerbread && (z.mobileHA = !0), x || (null != i.display && (n.display = i.display), null != i.visibility && (n.visibility = i.visibility));
				var M = Pt(i.begin),
					L = Mt(i.complete),
					T = function(e) {
						if (s(e)) return e
					}(i.progress),
					R = Ht(i.sync);
				null != M && (z.begin = M), null != L && (z.complete = L), null != T && (z.progress = T), null != R && (P = R)
			} else if (!I) {
				var B, j = 0;
				if (E = void 0 !== (B = Tt(b[w])), void 0 !== B && (j++, z.duration = B), !s(b[w + j])) {
					var F = Rt(b[w + j], kt(z && Tt(z.duration), h.duration));
					void 0 !== F && (j++, z.easing = F)
				}
				var D = Mt(b[w + j]);
				void 0 !== D && (z.complete = D), z.loop = h.loop, z.repeat = z.repeatAgain = h.repeat
			}
			if (x && !1 === z.queue) throw Error("VelocityJS: Cannot reverse a queue:false animation.");
			O && !E && O.duration && (z.duration = O.duration);
			var W = {
				_prev: void 0,
				_next: void 0,
				_flags: P ? 32 : 0,
				options: z,
				percentComplete: 0,
				elements: r,
				ellapsedTime: 0,
				timeStart: 0
			};
			g = [];
			for (var H = 0; H < r.length; H++) {
				var X = r[H],
					Y = 0;
				if (l(X)) {
					if (x) {
						var $ = _t(X).lastAnimationList[z.queue];
						if (!(n = $ && $.tweens)) continue;
						Y |= 64 & ~(64 & $._flags)
					}
					var Q = Et({
						element: X
					}, W);
					z._total++, Q._flags |= Y, g.push(Q), O ? Ut.expandSequence(Q, O) : x ? Q.tweens = n : (Q.tweens = d(), Ut.expandProperties(Q, n)), Ut.queue(X, Q, z.queue)
				}
			}!1 === Ut.State.isTicking && Ut.tick(!1), g && p(r.velocity, "animations", g)
		}
		return r || m
	}
	if (function(e) {
			function t(t, r) {
				var n = t[0],
					a = t[1];
				o(n) && s(a) && (e.Actions[n] && !Object.prototype.propertyIsEnumerable.call(e.Actions, n) || (!0 === r ? p(e.Actions, n, a) : e.Actions[n] = a))
			}
			e.Actions = d(), e.registerAction = t, t(["registerAction", t], !0)
		}(Ut || (Ut = {})), function(e) {
			function t(t, r, n) {
				if (e.validateTweens(t), void 0 === r || r === kt(t.queue, t.options.queue, n)) {
					if (!(4 & t._flags)) {
						var a = t.options;
						0 == a._started++ && (a._first = t, a.begin && (e.callBegin(t), a.begin = void 0)), t._flags |= 4
					}
					for (var i in t.tweens) {
						var o = t.tweens[i],
							s = o.sequence,
							l = s.pattern,
							u = "",
							c = 0;
						if (l)
							for (var f = s[s.length - 1]; c < l.length; c++) {
								var d = f[c];
								u += null == d ? l[c] : d
							}
						e.CSS.setPropertyValue(t.element, i, u, o.fn)
					}
					e.completeCall(t)
				}
			}
			e.registerAction(["finish", function(r, n, a) {
				var i = Ft(r[0], !0),
					o = e.defaults.queue,
					s = !0 === r[void 0 === i ? 0 : 1];
				if (u(n) && n.velocity.animations)
					for (var l = 0, c = n.velocity.animations; l < c.length; l++) t(c[l], i, o);
				else {
					for (var f = e.State.first, d = void 0; f = e.State.firstNew;) e.validateTweens(f);
					for (f = e.State.first; f && (s || f !== e.State.firstNew); f = d || e.State.firstNew) d = f._next, n && !Vt(n, f.element) || t(f, i, o)
				}
				a && (u(n) && n.velocity.animations && n.then ? n.then(a._resolver) : a._resolver(n))
			}], !0)
		}(Ut || (Ut = {})), function(e) {
			var t = {
				isExpanded: 1,
				isReady: 2,
				isStarted: 4,
				isStopped: 8,
				isPaused: 16,
				isSync: 32,
				isReverse: 64
			};
			e.registerAction(["option", function(r, n, a, i) {
				var o, s, l = r[0],
					c = i.indexOf(".") >= 0 ? i.replace(/^.*\./, "") : void 0,
					f = "false" !== c && Ft(c, !0),
					d = r[1];
				if (!l) return null;
				if (u(n) && n.velocity.animations) o = n.velocity.animations;
				else {
					o = [];
					for (var p = e.State.first; p; p = p._next) n.indexOf(p.element) >= 0 && kt(p.queue, p.options.queue) === f && o.push(p);
					if (n.length > 1 && o.length > 1) {
						for (var g = 1, m = o[0].options; g < o.length;)
							if (o[g++].options !== m) {
								m = null;
								break
							}
						m && (o = [o[0]])
					}
				}
				if (void 0 === d) {
					var y = [],
						v = t[l];
					for (g = 0; g < o.length; g++) y.push(void 0 === v ? kt(o[g][l], o[g].options[l]) : 0 == (o[g]._flags & v));
					return 1 === n.length && 1 === o.length ? y[0] : y
				}
				switch (l) {
					case "cache":
						d = zt(d);
						break;
					case "begin":
						d = Pt(d);
						break;
					case "complete":
						d = Mt(d);
						break;
					case "delay":
						d = Lt(d);
						break;
					case "duration":
						d = Tt(d);
						break;
					case "fpsLimit":
						d = Bt(d);
						break;
					case "loop":
						d = jt(d);
						break;
					case "percentComplete":
						s = !0, d = parseFloat(d);
						break;
					case "repeat":
					case "repeatAgain":
						d = Dt(d);
						break;
					default:
						if ("_" !== l[0]) {
							var h = parseFloat(d);
							d == h && (d = h);
							break
						}
					case "queue":
					case "promise":
					case "promiseRejectEmpty":
					case "easing":
					case "started":
						return
				}
				if (void 0 === d || d != d) return null;
				for (g = 0; g < o.length; g++) {
					var b = o[g];
					s ? b.timeStart = e.lastTick - kt(b.duration, b.options.duration, e.defaults.duration) * d : b[l] = d
				}
				a && (u(n) && n.velocity.animations && n.then ? n.then(a._resolver) : a._resolver(n))
			}], !0)
		}(Ut || (Ut = {})), function(e) {
			function t(e, t, r, n) {
				void 0 !== t && t !== kt(e.queue, e.options.queue, r) || (n ? e._flags |= 16 : e._flags &= -17)
			}

			function r(r, n, a, i) {
				var o = 0 === i.indexOf("pause"),
					s = "false" !== (i.indexOf(".") >= 0 ? i.replace(/^.*\./, "") : void 0) && Ft(r[0]),
					l = e.defaults.queue;
				if (u(n) && n.velocity.animations)
					for (var c = 0, f = n.velocity.animations; c < f.length; c++) t(f[c], s, l, o);
				else
					for (var d = e.State.first; d;) n && !Vt(n, d.element) || t(d, s, l, o), d = d._next;
				a && (u(n) && n.velocity.animations && n.then ? n.then(a._resolver) : a._resolver(n))
			}
			e.registerAction(["pause", r], !0), e.registerAction(["resume", r], !0)
		}(Ut || (Ut = {})), (Ut || (Ut = {})).registerAction(["reverse", function(e, t, r, n) {
			throw new SyntaxError("VelocityJS: The 'reverse' action is private.")
		}], !0), function(e) {
			function t(t, r, n) {
				e.validateTweens(t), void 0 !== r && r !== kt(t.queue, t.options.queue, n) || (t._flags |= 8, e.completeCall(t))
			}
			e.registerAction(["stop", function(r, n, a, i) {
				var o = Ft(r[0], !0),
					s = e.defaults.queue,
					l = !0 === r[void 0 === o ? 0 : 1];
				if (u(n) && n.velocity.animations)
					for (var c = 0, f = n.velocity.animations; c < f.length; c++) t(f[c], o, s);
				else {
					for (var d = e.State.first, p = void 0; d = e.State.firstNew;) e.validateTweens(d);
					for (d = e.State.first; d && (l || d !== e.State.firstNew); d = p || e.State.firstNew) p = d._next, n && !Vt(n, d.element) || t(d, o, s)
				}
				a && (u(n) && n.velocity.animations && n.then ? n.then(a._resolver) : a._resolver(n))
			}], !0)
		}(Ut || (Ut = {})), function(e) {
			function t(t, r, n, a) {
				var s, l = t[0],
					c = t[1];
				if (!l) return null;
				if (void 0 === c && !f(l)) {
					if (1 === r.length) return e.CSS.fixColors(e.CSS.getPropertyValue(r[0], l));
					for (var d = [], p = 0; p < r.length; p++) d.push(e.CSS.fixColors(e.CSS.getPropertyValue(r[p], l)));
					return d
				}
				if (f(l))
					for (var g in l)
						for (p = 0; p < r.length; p++) {
							var m = l[g];
							o(m) || i(m) ? e.CSS.setPropertyValue(r[p], g, l[g]) : s = (s ? s + ", " : "") + "Cannot set a property '" + g + "' to an unknown type: " + typeof m
						} else if (o(c) || i(c))
							for (p = 0; p < r.length; p++) e.CSS.setPropertyValue(r[p], l, c + "");
						else s = "Cannot set a property '" + l + "' to an unknown type: " + typeof c;
				n && (s ? n._rejecter(s) : u(r) && r.velocity.animations && r.then ? r.then(n._resolver) : n._resolver(r))
			}
			e.style = function(e, r, n) {
				return t([r, n], e)
			}, e.registerAction(["style", t], !0)
		}(Ut || (Ut = {})), function(e) {
			function t(t, n, a, s) {
				var l;
				if (n) {
					if (1 !== n.length) throw Error("VelocityJS: Cannot tween more than one element!")
				} else {
					if (!t.length) return null;
					n = [document.body], l = !0
				}
				var u, c, d = t[0],
					p = {
						elements: n,
						element: n[0],
						queue: !1,
						options: {
							duration: 1e3
						},
						tweens: null
					},
					g = {},
					m = t[1],
					y = t[2],
					v = 0;
				if (o(t[1]) ? e.Sequences && e.Sequences[t[1]] ? (c = e.Sequences[t[1]], m = {}, y = t[2]) : (u = !0, (b = {})[t[1]] = t[2], m = b, y = t[3]) : Array.isArray(t[1]) && (u = !0, m = {
						tween: t[1]
					}, y = t[2]), !i(d) || d < 0 || d > 1) throw Error("VelocityJS: Must tween a percentage from 0 to 1!");
				if (!f(m)) throw Error("VelocityJS: Cannot tween an invalid property!");
				if (l)
					for (var h in m)
						if (m.hasOwnProperty(h) && (!Array.isArray(m[h]) || m[h].length < 2)) throw Error("VelocityJS: When not supplying an element you must force-feed values: " + h);
				var b, S = Rt(kt(y, e.defaults.easing), r);
				for (var h in c ? e.expandSequence(p, c) : e.expandProperties(p, m), p.tweens) {
					var I = p.tweens[h],
						w = I.sequence,
						x = w.pattern,
						U = "",
						O = 0;
					if (v++, x) {
						for (var q = (I.easing || S)(d, 0, 1, h), E = 0, C = 0; C < w.length - 1; C++) w[C].percent < q && (E = C);
						for (var V = w[E], k = w[E + 1] || V, N = (d - V.percent) / (k.percent - V.percent), _ = k.easing || e.Easing.linearEasing; O < x.length; O++) {
							var A = V[O];
							if (null == A) U += x[O];
							else {
								var z = k[O];
								if (A === z) U += A;
								else {
									var P = _(N, A, z, h);
									U += !0 === x[O] ? Math.round(P) : P
								}
							}
						}
						g[h] = U
					}
				}
				if (u && 1 === v)
					for (var h in g)
						if (g.hasOwnProperty(h)) return g[h];
				return g
			}
			e.tween = function(e, r, n, a, i) {
				return t(arguments, e)
			}, e.registerAction(["tween", t], !0)
		}(Ut || (Ut = {})), g = Ut || (Ut = {}), (m = g.State || (g.State = {})).isClient = window && window === window.window, m.isMobile = m.isClient && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), m.isAndroid = m.isClient && /Android/i.test(navigator.userAgent), m.isGingerbread = m.isClient && /Android 2\.3\.[3-7]/i.test(navigator.userAgent), m.isChrome = m.isClient && window.chrome, m.isFirefox = m.isClient && /Firefox/i.test(navigator.userAgent), m.prefixElement = m.isClient && document.createElement("div"), m.windowScrollAnchor = m.isClient && void 0 !== window.pageYOffset, m.scrollAnchor = m.windowScrollAnchor ? window : !m.isClient || document.documentElement || document.body.parentNode || document.body, m.scrollPropertyLeft = m.windowScrollAnchor ? "pageXOffset" : "scrollLeft", m.scrollPropertyTop = m.windowScrollAnchor ? "pageYOffset" : "scrollTop", m.className = "velocity-animating", m.isTicking = !1, h = Ut || (Ut = {}), y = h.CSS || (h.CSS = {}), v = d(), y.camelCase = function(e) {
			var t = v[e];
			return t || (v[e] = e.replace(/-([a-z])/g, function(e, t) {
				return t.toUpperCase()
			}))
		}, function(e) {
			function t(e, t, r, n) {
				return "rgba(" + parseInt(t, 16) + "," + parseInt(r, 16) + "," + parseInt(n, 16) + ",1)"
			}
			e.ColorNames = d();
			var r = /#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/gi,
				n = /#([a-f\d])([a-f\d])([a-f\d])/gi,
				a = /(rgba?\(\s*)?(\b[a-z]+\b)/g,
				i = /rgb(a?)\(([^\)]+)\)/gi,
				o = /\s+/g;
			e.fixColors = function(s) {
				return s.replace(r, t).replace(n, function(e, r, n, a) {
					return t(0, r + r, n + n, a + a)
				}).replace(a, function(t, r, n) {
					return e.ColorNames[n] ? (r || "rgba(") + e.ColorNames[n] + (r ? "" : ",1)") : t
				}).replace(i, function(e, t, r) {
					return "rgba(" + r.replace(o, "") + (t ? "" : ",1") + ")"
				})
			}
		}((b = Ut || (Ut = {})).CSS || (b.CSS = {})), function(e) {
			var t = {
				aliceblue: 15792383,
				antiquewhite: 16444375,
				aqua: 65535,
				aquamarine: 8388564,
				azure: 15794175,
				beige: 16119260,
				bisque: 16770244,
				black: 0,
				blanchedalmond: 16772045,
				blue: 255,
				blueviolet: 9055202,
				brown: 10824234,
				burlywood: 14596231,
				cadetblue: 6266528,
				chartreuse: 8388352,
				chocolate: 13789470,
				coral: 16744272,
				cornflowerblue: 6591981,
				cornsilk: 16775388,
				crimson: 14423100,
				cyan: 65535,
				darkblue: 139,
				darkcyan: 35723,
				darkgoldenrod: 12092939,
				darkgray: 11119017,
				darkgrey: 11119017,
				darkgreen: 25600,
				darkkhaki: 12433259,
				darkmagenta: 9109643,
				darkolivegreen: 5597999,
				darkorange: 16747520,
				darkorchid: 10040012,
				darkred: 9109504,
				darksalmon: 15308410,
				darkseagreen: 9419919,
				darkslateblue: 4734347,
				darkslategray: 3100495,
				darkslategrey: 3100495,
				darkturquoise: 52945,
				darkviolet: 9699539,
				deeppink: 16716947,
				deepskyblue: 49151,
				dimgray: 6908265,
				dimgrey: 6908265,
				dodgerblue: 2003199,
				firebrick: 11674146,
				floralwhite: 16775920,
				forestgreen: 2263842,
				fuchsia: 16711935,
				gainsboro: 14474460,
				ghostwhite: 16316671,
				gold: 16766720,
				goldenrod: 14329120,
				gray: 8421504,
				grey: 8421504,
				green: 32768,
				greenyellow: 11403055,
				honeydew: 15794160,
				hotpink: 16738740,
				indianred: 13458524,
				indigo: 4915330,
				ivory: 16777200,
				khaki: 15787660,
				lavender: 15132410,
				lavenderblush: 16773365,
				lawngreen: 8190976,
				lemonchiffon: 16775885,
				lightblue: 11393254,
				lightcoral: 15761536,
				lightcyan: 14745599,
				lightgoldenrodyellow: 16448210,
				lightgray: 13882323,
				lightgrey: 13882323,
				lightgreen: 9498256,
				lightpink: 16758465,
				lightsalmon: 16752762,
				lightseagreen: 2142890,
				lightskyblue: 8900346,
				lightslategray: 7833753,
				lightslategrey: 7833753,
				lightsteelblue: 11584734,
				lightyellow: 16777184,
				lime: 65280,
				limegreen: 3329330,
				linen: 16445670,
				magenta: 16711935,
				maroon: 8388608,
				mediumaquamarine: 6737322,
				mediumblue: 205,
				mediumorchid: 12211667,
				mediumpurple: 9662683,
				mediumseagreen: 3978097,
				mediumslateblue: 8087790,
				mediumspringgreen: 64154,
				mediumturquoise: 4772300,
				mediumvioletred: 13047173,
				midnightblue: 1644912,
				mintcream: 16121850,
				mistyrose: 16770273,
				moccasin: 16770229,
				navajowhite: 16768685,
				navy: 128,
				oldlace: 16643558,
				olive: 8421376,
				olivedrab: 7048739,
				orange: 16753920,
				orangered: 16729344,
				orchid: 14315734,
				palegoldenrod: 15657130,
				palegreen: 10025880,
				paleturquoise: 11529966,
				palevioletred: 14381203,
				papayawhip: 16773077,
				peachpuff: 16767673,
				peru: 13468991,
				pink: 16761035,
				plum: 14524637,
				powderblue: 11591910,
				purple: 8388736,
				rebeccapurple: 6697881,
				red: 16711680,
				rosybrown: 12357519,
				royalblue: 4286945,
				saddlebrown: 9127187,
				salmon: 16416882,
				sandybrown: 16032864,
				seagreen: 3050327,
				seashell: 16774638,
				sienna: 10506797,
				silver: 12632256,
				skyblue: 8900331,
				slateblue: 6970061,
				slategray: 7372944,
				slategrey: 7372944,
				snow: 16775930,
				springgreen: 65407,
				steelblue: 4620980,
				tan: 13808780,
				teal: 32896,
				thistle: 14204888,
				tomato: 16737095,
				turquoise: 4251856,
				violet: 15631086,
				wheat: 16113331,
				white: 16777215,
				whitesmoke: 16119285,
				yellow: 16776960,
				yellowgreen: 10145074
			};
			for (var r in t)
				if (t.hasOwnProperty(r)) {
					var n = t[r];
					e.ColorNames[r] = Math.floor(n / 65536) + "," + Math.floor(n / 256 % 256) + "," + n % 256
				}
		}((S = Ut || (Ut = {})).CSS || (S.CSS = {})), function(e) {
			function t(e, t, r, n) {
				var a, i = _t(e);
				return I.NoCacheNormalizations.has(t) && (n = !0), !n && i && null != i.cache[t] ? a = i.cache[t] : (r = r || I.getNormalization(e, t)) && (a = r(e), i && (i.cache[t] = a)), a
			}
			e.computePropertyValue = function(r, n) {
				var a = _t(r),
					i = a && a.computedStyle ? a.computedStyle : window.getComputedStyle(r, null),
					o = 0;
				if (a && !a.computedStyle && (a.computedStyle = i), "width" === n || "height" === n) {
					var s = "none" === t(r, "display");
					return s && e.setPropertyValue(r, "display", "auto"), o = I.augmentDimension(r, n, !0), s && e.setPropertyValue(r, "display", "none"), o + ""
				}
				if ((o = i[n]) || (o = r.style[n]), "auto" === o) switch (n) {
					case "top":
					case "left":
						var l = !0;
					case "right":
					case "bottom":
						var u = t(r, "position");
						if ("fixed" === u || l && "absolute" === u) {
							o = r.getBoundingClientRect[n] + "px";
							break
						}
					default:
						o = "0px"
				}
				return o ? o + "" : ""
			}, e.getPropertyValue = t
		}((I = Ut || (Ut = {})).CSS || (I.CSS = {})), U = Ut || (Ut = {}), w = U.CSS || (U.CSS = {}), x = ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"], w.getUnit = function(e, t) {
			if (e[t = t || 0] && " " !== e[t])
				for (var r = 0, n = x; r < n.length; r++) {
					var a = n[r],
						i = 0;
					do {
						if (i >= a.length) return a;
						if (a[i] !== e[t + i]) break
					} while (++i)
				}
			return ""
		}, ((O = Ut || (Ut = {})).CSS || (O.CSS = {})).setPropertyValue = function(e, t, r, n) {
			var a = _t(e);
			a && a.cache[t] !== r && (a.cache[t] = r || void 0, (n = n || O.getNormalization(e, t)) && n(e, r))
		}, function(e) {
			function t(t) {
				var r = t[0],
					n = t[1];
				o(r) && s(n) && (e.Easings[r] || (e.Easings[r] = n))
			}

			function r(e, t, r, n) {
				return t + e * (r - t)
			}
			e.Easings = d(), e.registerEasing = t, q.registerAction(["registerEasing", t], !0), e.linearEasing = r, t(["linear", r]), t(["swing", function(e, t, r) {
				return t + (.5 - Math.cos(e * Math.PI) / 2) * (r - t)
			}]), t(["spring", function(e, t, r) {
				return t + (1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)) * (r - t)
			}])
		}((q = Ut || (Ut = {})).Easing || (q.Easing = {})), function(e) {
			function t(t, r) {
				e.registerEasing([t, function(e, t, n) {
					return 0 === e ? t : 1 === e ? n : Math.pow(e, 2) * ((r + 1) * e - r) * (n - t)
				}])
			}

			function r(t, r) {
				e.registerEasing([t, function(e, t, n) {
					return 0 === e ? t : 1 === e ? n : (Math.pow(--e, 2) * ((r + 1) * e + r) + 1) * (n - t)
				}])
			}

			function n(t, r) {
				r *= 1.525, e.registerEasing([t, function(e, t, n) {
					return 0 === e ? t : 1 === e ? n : .5 * ((e *= 2) < 1 ? Math.pow(e, 2) * ((r + 1) * e - r) : Math.pow(e -= 2, 2) * ((r + 1) * e + r) + 2) * (n - t)
				}])
			}
			e.registerBackIn = t, e.registerBackOut = r, e.registerBackInOut = n, t("easeInBack", 1.7), r("easeOutBack", 1.7), n("easeInOutBack", 1.7)
		}((E = Ut || (Ut = {})).Easing || (E.Easing = {})), function(e) {
			function t(e) {
				return Math.min(Math.max(e, 0), 1)
			}

			function r(e, t) {
				return 1 - 3 * t + 3 * e
			}

			function n(e, t) {
				return 3 * t - 6 * e
			}

			function a(e) {
				return 3 * e
			}

			function i(e, t, i) {
				return ((r(t, i) * e + n(t, i)) * e + a(t)) * e
			}

			function o(e, t, i) {
				return 3 * r(t, i) * e * e + 2 * n(t, i) * e + a(t)
			}

			function s(e, r, n, a) {
				var s = 4,
					l = .001,
					u = 1e-7,
					c = 10,
					f = 11,
					d = 1 / (f - 1),
					p = "Float32Array" in window;
				if (4 === arguments.length) {
					for (var g = 0; g < 4; ++g)
						if ("number" != typeof arguments[g] || isNaN(arguments[g]) || !isFinite(arguments[g])) return;
					e = t(e), n = t(n);
					var m = p ? new Float32Array(f) : Array(f),
						y = !1,
						v = function(t, o, s, l) {
							return y || S(), 0 === t ? o : 1 === t ? s : e === r && n === a ? o + t * (s - o) : o + i(b(t), r, a) * (s - o)
						};
					v.getControlPoints = function() {
						return [{
							x: e,
							y: r
						}, {
							x: n,
							y: a
						}]
					};
					var h = "generateBezier(" + [e, r, n, a] + ")";
					return v.toString = function() {
						return h
					}, v
				}

				function b(t) {
					for (var r = 0, a = 1, p = f - 1; a !== p && m[a] <= t; ++a) r += d;
					var g = r + (t - m[--a]) / (m[a + 1] - m[a]) * d,
						y = o(g, e, n);
					return y >= l ? function(t, r) {
						for (var a = 0; a < s; ++a) {
							var l = o(r, e, n);
							if (0 === l) return r;
							r -= (i(r, e, n) - t) / l
						}
						return r
					}(t, g) : 0 === y ? g : function(t, r, a) {
						var o, s, l = 0;
						do {
							(o = i(s = r + (a - r) / 2, e, n) - t) > 0 ? a = s : r = s
						} while (Math.abs(o) > u && ++l < c);
						return s
					}(t, r, r + d)
				}

				function S() {
					y = !0, e === r && n === a || function() {
						for (var t = 0; t < f; ++t) m[t] = i(t * d, e, n)
					}()
				}
			}
			e.generateBezier = s;
			var l = s(.42, 0, 1, 1),
				u = s(0, 0, .58, 1),
				c = s(.42, 0, .58, 1);
			e.registerEasing(["ease", s(.25, .1, .25, 1)]), e.registerEasing(["easeIn", l]), e.registerEasing(["ease-in", l]), e.registerEasing(["easeOut", u]), e.registerEasing(["ease-out", u]), e.registerEasing(["easeInOut", c]), e.registerEasing(["ease-in-out", c]), e.registerEasing(["easeInSine", s(.47, 0, .745, .715)]), e.registerEasing(["easeOutSine", s(.39, .575, .565, 1)]), e.registerEasing(["easeInOutSine", s(.445, .05, .55, .95)]), e.registerEasing(["easeInQuad", s(.55, .085, .68, .53)]), e.registerEasing(["easeOutQuad", s(.25, .46, .45, .94)]), e.registerEasing(["easeInOutQuad", s(.455, .03, .515, .955)]), e.registerEasing(["easeInCubic", s(.55, .055, .675, .19)]), e.registerEasing(["easeOutCubic", s(.215, .61, .355, 1)]), e.registerEasing(["easeInOutCubic", s(.645, .045, .355, 1)]), e.registerEasing(["easeInQuart", s(.895, .03, .685, .22)]), e.registerEasing(["easeOutQuart", s(.165, .84, .44, 1)]), e.registerEasing(["easeInOutQuart", s(.77, 0, .175, 1)]), e.registerEasing(["easeInQuint", s(.755, .05, .855, .06)]), e.registerEasing(["easeOutQuint", s(.23, 1, .32, 1)]), e.registerEasing(["easeInOutQuint", s(.86, 0, .07, 1)]), e.registerEasing(["easeInExpo", s(.95, .05, .795, .035)]), e.registerEasing(["easeOutExpo", s(.19, 1, .22, 1)]), e.registerEasing(["easeInOutExpo", s(1, 0, 0, 1)]), e.registerEasing(["easeInCirc", s(.6, .04, .98, .335)]), e.registerEasing(["easeOutCirc", s(.075, .82, .165, 1)]), e.registerEasing(["easeInOutCirc", s(.785, .135, .15, .86)])
		}((C = Ut || (Ut = {})).Easing || (C.Easing = {})), function(e) {
			function t(e) {
				return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
			}

			function r(e) {
				return 1 - t(1 - e)
			}
			e.registerEasing(["easeInBounce", function(e, t, n) {
				return 0 === e ? t : 1 === e ? n : r(e) * (n - t)
			}]), e.registerEasing(["easeOutBounce", function(e, r, n) {
				return 0 === e ? r : 1 === e ? n : t(e) * (n - r)
			}]), e.registerEasing(["easeInOutBounce", function(e, n, a) {
				return 0 === e ? n : 1 === e ? a : (e < .5 ? .5 * r(2 * e) : .5 * t(2 * e - 1) + .5) * (a - n)
			}])
		}((V = Ut || (Ut = {})).Easing || (V.Easing = {})), function(e) {
			var t = 2 * Math.PI;

			function r(r, n, a) {
				e.registerEasing([r, function(e, r, i) {
					return 0 === e ? r : 1 === e ? i : -n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - a / t * Math.asin(1 / n)) * t / a) * (i - r)
				}])
			}

			function n(r, n, a) {
				e.registerEasing([r, function(e, r, i) {
					return 0 === e ? r : 1 === e ? i : (n * Math.pow(2, -10 * e) * Math.sin((e - a / t * Math.asin(1 / n)) * t / a) + 1) * (i - r)
				}])
			}

			function a(r, n, a) {
				e.registerEasing([r, function(e, r, i) {
					if (0 === e) return r;
					if (1 === e) return i;
					var o = a / t * Math.asin(1 / n);
					return ((e = 2 * e - 1) < 0 ? n * Math.pow(2, 10 * e) * Math.sin((e - o) * t / a) * -.5 : n * Math.pow(2, -10 * e) * Math.sin((e - o) * t / a) * .5 + 1) * (i - r)
				}])
			}
			e.registerElasticIn = r, e.registerElasticOut = n, e.registerElasticInOut = a, r("easeInElastic", 1, .3), n("easeOutElastic", 1, .3), a("easeInOutElastic", 1, .3 * 1.5)
		}((k = Ut || (Ut = {})).Easing || (k.Easing = {})), N = Ut || (Ut = {}), function(e) {
			function t(e) {
				return -e.tension * e.x - e.friction * e.v
			}

			function r(e, r, n) {
				var a = {
					x: e.x + n.dx * r,
					v: e.v + n.dv * r,
					tension: e.tension,
					friction: e.friction
				};
				return {
					dx: a.v,
					dv: t(a)
				}
			}(N.Easing || (N.Easing = {})).generateSpringRK4 = function e(n, a, i) {
				var o, s, l, u, c, f, d, p, g, m = {
						x: -1,
						v: 0,
						tension: parseFloat(n) || 500,
						friction: parseFloat(a) || 20
					},
					y = [0],
					v = 0,
					h = null != i;
				for (o = h ? (v = e(m.tension, m.friction)) / i * .016 : .016; u = o, c = {
						dx: (l = s || m).v,
						dv: t(l)
					}, f = r(l, .5 * u, c), d = r(l, .5 * u, f), p = r(l, u, d), g = 1 / 6 * (c.dv + 2 * (f.dv + d.dv) + p.dv), l.x = l.x + 1 / 6 * (c.dx + 2 * (f.dx + d.dx) + p.dx) * u, l.v = l.v + g * u, y.push(1 + (s = l).x), v += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
				return h ? function(e, t, r) {
					return 0 === e ? t : 1 === e ? r : t + y[e * (y.length - 1) | 0] * (r - t)
				} : v
			}
		}(), z = Ut || (Ut = {}), _ = z.Easing || (z.Easing = {}), A = {}, _.generateStep = function(e) {
			var t = A[e];
			return t || (A[e] = function(t, r, n) {
				return 0 === t ? r : 1 === t ? n : r + Math.round(t * e) * (1 / e) * (n - r)
			})
		}, P = Ut || (Ut = {}), (M = P.Easing || (P.Easing = {})).registerEasing(["at-start", function(e, t, r) {
			return 0 === e ? t : r
		}]), M.registerEasing(["during", function(e, t, r) {
			return 0 === e || 1 === e ? t : r
		}]), M.registerEasing(["at-end", function(e, t, r) {
			return 1 === e ? r : t
		}]), function(e) {
			function t(t) {
				var r = t[0],
					n = t[1],
					a = t[2];
				if (!o(r) && r instanceof Object)
					if (o(n))
						if (s(a)) {
							var i = e.constructors.indexOf(r),
								l = 3;
							if (i < 0 && (e.MaxType = i = e.constructors.push(r) - 1, e.Normalizations[i] = d()), e.Normalizations[i][n] = a, o(t[l])) {
								var u = t[l++],
									c = e.NormalizationUnits[u];
								c || (c = e.NormalizationUnits[u] = []), c.push(a)
							}!1 === t[l] && e.NoCacheNormalizations.add(n)
						} else;
				else;
				else;
			}

			function r(t) {
				var r = t[1],
					n = e.constructors.indexOf(t[0]);
				return !!e.Normalizations[n][r]
			}
			e.MaxType = -1, e.Normalizations = [], e.NormalizationUnits = d(), e.NoCacheNormalizations = new Set, e.constructors = [], e.registerNormalization = t, e.hasNormalization = r, e.getNormalizationUnit = function(t) {
				for (var r in e.NormalizationUnits)
					if (Vt(e.NormalizationUnits[r], t)) return r;
				return ""
			}, e.getNormalization = function(t, r) {
				for (var n, a = _t(t), i = e.MaxType, o = a.types; !n && i >= 0; i--) o & 1 << i && (n = e.Normalizations[i][r]);
				return n
			}, e.registerAction(["registerNormalization", t]), e.registerAction(["hasNormalization", r])
		}(Ut || (Ut = {})), function(e) {
			function t(e) {
				return function(t, r) {
					if (void 0 === r) return t.getAttribute(e);
					t.setAttribute(e, r)
				}
			}
			var r = document.createElement("div"),
				n = /^SVG(.*)Element$/,
				a = /Element$/;
			Object.getOwnPropertyNames(window).forEach(function(e) {
				var i = n.exec(e);
				if (i && "SVG" !== i[1]) try {
					var l = i[1] ? document.createElementNS("http://www.w3.org/2000/svg", (i[1] || "svg").toLowerCase()) : document.createElement("svg"),
						u = l.constructor;
					for (var c in l) {
						var f = l[c];
						!o(c) || "o" === c[0] && "n" === c[1] || c === c.toUpperCase() || a.test(c) || c in r || s(f) || L.registerNormalization([u, c, t(c)])
					}
				} catch (e) {}
			})
		}((L = Ut || (Ut = {})).CSS || (L.CSS = {})), function(e) {
			function t(e) {
				return function(t, r) {
					if (void 0 === r) try {
						return t.getBBox()[e] + "px"
					} catch (e) {
						return "0px"
					}
					t.setAttribute(e, r)
				}
			}
			T.registerNormalization([SVGElement, "width", t("width")]), T.registerNormalization([SVGElement, "height", t("height")])
		}((T = Ut || (Ut = {})).CSS || (T.CSS = {})), function(e) {
			function t(t, r, n) {
				if ("border-box" === ("" + e.CSS.getPropertyValue(t, "boxSizing")).toLowerCase() === n) {
					var a = "width" === r ? ["Left", "Right"] : ["Top", "Bottom"],
						i = ["padding" + a[0], "padding" + a[1], "border" + a[0] + "Width", "border" + a[1] + "Width"],
						o = void 0,
						s = void 0,
						l = 0;
					for (o = 0; o < i.length; o++) s = parseFloat(e.CSS.getPropertyValue(t, i[o])), isNaN(s) || (l += s);
					return n ? -l : l
				}
				return 0
			}

			function r(r, n) {
				return function(a, i) {
					if (void 0 === i) return t(a, r, n) + "px";
					e.CSS.setPropertyValue(a, r, parseFloat(i) - t(a, r, n) + "px")
				}
			}
			e.augmentDimension = t, e.registerNormalization([Element, "innerWidth", r("width", !0)]), e.registerNormalization([Element, "innerHeight", r("height", !0)]), e.registerNormalization([Element, "outerWidth", r("width", !1)]), e.registerNormalization([Element, "outerHeight", r("height", !1)])
		}(Ut || (Ut = {})), function(e) {
			e.inlineRx = /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|let|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i, e.listItemRx = /^(li)$/i, e.tableRowRx = /^(tr)$/i, e.tableRx = /^(table)$/i, e.tableRowGroupRx = /^(tbody)$/i, e.registerNormalization([Element, "display", function(t, r) {
				var n = t.style;
				if (void 0 === r) return e.CSS.computePropertyValue(t, "display");
				if ("auto" === r) {
					var a = t && t.nodeName,
						i = _t(t);
					r = e.inlineRx.test(a) ? "inline" : e.listItemRx.test(a) ? "list-item" : e.tableRowRx.test(a) ? "table-row" : e.tableRx.test(a) ? "table" : e.tableRowGroupRx.test(a) ? "table-row-group" : "block", i.cache.display = r
				}
				n.display = r
			}])
		}(Ut || (Ut = {})), function(e) {
			function t(t, r) {
				return function(n, a) {
					if (null == a) return e.CSS.getPropertyValue(n, "client" + t, null, !0), e.CSS.getPropertyValue(n, "scroll" + t, null, !0), e.CSS.getPropertyValue(n, "scroll" + r, null, !0), n["scroll" + r] + "px";
					var i = parseFloat(a);
					switch (a.replace(i + "", "")) {
						case "":
						case "px":
							n["scroll" + r] = i;
							break;
						case "%":
							var o = parseFloat(e.CSS.getPropertyValue(n, "client" + t)),
								s = parseFloat(e.CSS.getPropertyValue(n, "scroll" + t));
							n["scroll" + r] = Math.max(0, s - o) * i / 100
					}
				}
			}
			e.registerNormalization([HTMLElement, "scroll", t("Height", "Top"), !1]), e.registerNormalization([HTMLElement, "scrollTop", t("Height", "Top"), !1]), e.registerNormalization([HTMLElement, "scrollLeft", t("Width", "Left"), !1]), e.registerNormalization([HTMLElement, "scrollWidth", function(e, t) {
				if (null == t) return e.scrollWidth + "px"
			}]), e.registerNormalization([HTMLElement, "clientWidth", function(e, t) {
				if (null == t) return e.clientWidth + "px"
			}]), e.registerNormalization([HTMLElement, "scrollHeight", function(e, t) {
				if (null == t) return e.scrollHeight + "px"
			}]), e.registerNormalization([HTMLElement, "clientHeight", function(e, t) {
				if (null == t) return e.clientHeight + "px"
			}])
		}(Ut || (Ut = {})), function(e) {
			var t = /^(b(lockSize|o(rder(Bottom(LeftRadius|RightRadius|Width)|Image(Outset|Width)|LeftWidth|R(adius|ightWidth)|Spacing|Top(LeftRadius|RightRadius|Width)|Width)|ttom))|column(Gap|RuleWidth|Width)|f(lexBasis|ontSize)|grid(ColumnGap|Gap|RowGap)|height|inlineSize|le(ft|tterSpacing)|m(a(rgin(Bottom|Left|Right|Top)|x(BlockSize|Height|InlineSize|Width))|in(BlockSize|Height|InlineSize|Width))|o(bjectPosition|utline(Offset|Width))|p(adding(Bottom|Left|Right|Top)|erspective)|right|s(hapeMargin|troke(Dashoffset|Width))|t(extIndent|op|ransformOrigin)|w(idth|ordSpacing))$/;

			function r(t, r) {
				return function(n, a) {
					if (void 0 === a) return e.CSS.computePropertyValue(n, t) || e.CSS.computePropertyValue(n, r);
					n.style[t] = n.style[r] = a
				}
			}

			function n(t) {
				return function(r, n) {
					if (void 0 === n) return e.CSS.computePropertyValue(r, t);
					r.style[t] = n
				}
			}
			var a = /^(webkit|moz|ms|o)[A-Z]/,
				i = e.State.prefixElement;
			for (var o in i.style)
				if (a.test(o)) {
					var s = o.replace(/^[a-z]+([A-Z])/, function(e, t) {
							return t.toLowerCase()
						}),
						l = t.test(s) ? "px" : void 0;
					e.registerNormalization([Element, s, r(o, s), l])
				} else if (!e.hasNormalization([Element, o])) {
				l = t.test(o) ? "px" : void 0;
				e.registerNormalization([Element, o, n(o), l])
			}
		}(Ut || (Ut = {})), function(e) {
			(Ut || (Ut = {})).registerNormalization([Element, "tween", function(e, t) {
				if (void 0 === t) return ""
			}])
		}(), function(e) {
			e.completeCall = function(t) {
				var r = t.options,
					n = kt(t.queue, r.queue),
					a = kt(t.loop, r.loop, e.defaults.loop),
					i = kt(t.repeat, r.repeat, e.defaults.repeat),
					o = 8 & t._flags;
				if (o || !a && !i) {
					var s = t.element,
						l = _t(s);
					if (--l.count || o || Nt(s, e.State.className), r && ++r._completed === r._total) {
						!o && r.complete && (function(e) {
							try {
								var t = e.elements;
								e.options.complete.call(t, t, e)
							} catch (e) {
								setTimeout(function() {
									throw e
								}, 1)
							}
						}(t), r.complete = null);
						var u = r._resolver;
						u && (u(t.elements), delete r._resolver)
					}!1 !== n && (o || (l.lastFinishList[n] = t.timeStart + kt(t.duration, r.duration, e.defaults.duration)), e.dequeue(s, n)), e.freeAnimationCall(t)
				} else i && !0 !== i ? t.repeat = i - 1 : a && !0 !== a && (t.loop = a - 1, t.repeat = kt(t.repeatAgain, r.repeatAgain, e.defaults.repeatAgain)), a && (t._flags ^= 64), !1 !== n && (_t(t.element).lastFinishList[n] = t.timeStart + kt(t.duration, r.duration, e.defaults.duration)), t.timeStart = t.ellapsedTime = t.percentComplete = 0, t._flags &= -5
			}
		}(Ut || (Ut = {})), (Ut || (Ut = {})).debug = !1, (R = Ut || (Ut = {})).defaults = {
			mobileHA: !0
		}, Object.defineProperties(R.defaults, {
			reset: {
				enumerable: !0,
				value: function() {
					B = !0, j = void 0, F = void 0, D = 0, W = r, H = Rt("swing", r), X = 60, Y = 0, $ = 980 / 60, Q = !0, G = !0, J = "", Z = 0, K = 1, ee = !0
				}
			},
			cache: {
				enumerable: !0,
				get: function() {
					return B
				},
				set: function(e) {
					void 0 !== (e = zt(e)) && (B = e)
				}
			},
			begin: {
				enumerable: !0,
				get: function() {
					return j
				},
				set: function(e) {
					void 0 !== (e = Pt(e)) && (j = e)
				}
			},
			complete: {
				enumerable: !0,
				get: function() {
					return F
				},
				set: function(e) {
					void 0 !== (e = Mt(e)) && (F = e)
				}
			},
			delay: {
				enumerable: !0,
				get: function() {
					return D
				},
				set: function(e) {
					void 0 !== (e = Lt(e)) && (D = e)
				}
			},
			duration: {
				enumerable: !0,
				get: function() {
					return W
				},
				set: function(e) {
					void 0 !== (e = Tt(e)) && (W = e)
				}
			},
			easing: {
				enumerable: !0,
				get: function() {
					return H
				},
				set: function(e) {
					void 0 !== (e = Rt(e, W)) && (H = e)
				}
			},
			fpsLimit: {
				enumerable: !0,
				get: function() {
					return X
				},
				set: function(e) {
					void 0 !== (e = Bt(e)) && (X = e, $ = 980 / e)
				}
			},
			loop: {
				enumerable: !0,
				get: function() {
					return Y
				},
				set: function(e) {
					void 0 !== (e = jt(e)) && (Y = e)
				}
			},
			minFrameTime: {
				enumerable: !0,
				get: function() {
					return $
				}
			},
			promise: {
				enumerable: !0,
				get: function() {
					return Q
				},
				set: function(e) {
					void 0 !== (e = function(e) {
						if (a(e)) return e
					}(e)) && (Q = e)
				}
			},
			promiseRejectEmpty: {
				enumerable: !0,
				get: function() {
					return G
				},
				set: function(e) {
					void 0 !== (e = function(e) {
						if (a(e)) return e
					}(e)) && (G = e)
				}
			},
			queue: {
				enumerable: !0,
				get: function() {
					return J
				},
				set: function(e) {
					void 0 !== (e = Ft(e)) && (J = e)
				}
			},
			repeat: {
				enumerable: !0,
				get: function() {
					return Z
				},
				set: function(e) {
					void 0 !== (e = Dt(e)) && (Z = e)
				}
			},
			speed: {
				enumerable: !0,
				get: function() {
					return K
				},
				set: function(e) {
					void 0 !== (e = Wt(e)) && (K = e)
				}
			},
			sync: {
				enumerable: !0,
				get: function() {
					return ee
				},
				set: function(e) {
					void 0 !== (e = Ht(e)) && (ee = e)
				}
			}
		}), R.defaults.reset(), (Ut || (Ut = {})).mock = !1, function(e) {
			(Ut || (Ut = {})).patch = function(e, t) {
				try {
					p(e, (t ? "V" : "v") + "elocity", Xt)
				} catch (e) {}
			}
		}(), function(e) {
			function t(t) {
				var r = e.State.last;
				t._prev = r, t._next = void 0, r ? r._next = t : e.State.first = t, e.State.last = t, e.State.firstNew || (e.State.firstNew = t);
				var n, a, i = t.element;
				_t(i).count++ || (a = e.State.className, (n = i) instanceof Element && (n.classList ? n.classList.add(a) : (Nt(n, a), n.className += (n.className.length ? " " : "") + a)))
			}
			e.queue = function(e, r, n) {
				var a = _t(e);
				if (!1 !== n && (a.lastAnimationList[n] = r), !1 === n) t(r);
				else {
					o(n) || (n = "");
					var i = a.queueList[n];
					if (i) {
						for (; i._next;) i = i._next;
						i._next = r, r._prev = i
					} else null === i ? a.queueList[n] = r : (a.queueList[n] = null, t(r))
				}
			}, e.dequeue = function(e, r, n) {
				if (!1 !== r) {
					o(r) || (r = "");
					var a = _t(e),
						i = a.queueList[r];
					return i ? (a.queueList[r] = i._next || null, n || t(i)) : null === i && delete a.queueList[r], i
				}
			}, e.freeAnimationCall = function(t) {
				var r = t._next,
					n = t._prev,
					a = null == t.queue ? t.options.queue : t.queue;
				e.State.firstNew === t && (e.State.firstNew = r), e.State.first === t ? e.State.first = r : n && (n._next = r), e.State.last === t ? e.State.last = n : r && (r._prev = n), a && _t(t.element) && (t._next = t._prev = void 0)
			}
		}(Ut || (Ut = {})), (te = Ut || (Ut = {})).Redirects = {}, ["Down", "Up"].forEach(function(t) {
			te.Redirects["slide" + t] = function(r, n, a, i, o, s) {
				var l = e({}, n),
					u = l.begin,
					c = l.complete,
					f = {},
					d = {
						height: "",
						marginTop: "",
						marginBottom: "",
						paddingTop: "",
						paddingBottom: ""
					};
				if (void 0 === l.display) {
					var p = te.inlineRx.test(r.nodeName.toLowerCase());
					l.display = "Down" === t ? p ? "inline-block" : "block" : "none"
				}
				l.begin = function() {
					for (var e in 0 === a && u && u.call(o, o), d)
						if (d.hasOwnProperty(e)) {
							f[e] = r.style[e];
							var n = te.CSS.getPropertyValue(r, e);
							d[e] = "Down" === t ? [n, 0] : [0, n]
						}
					f.overflow = r.style.overflow, r.style.overflow = "hidden"
				}, l.complete = function() {
					for (var e in f) f.hasOwnProperty(e) && (r.style[e] = f[e]);
					a === i - 1 && (c && c.call(o, o), s && s(o))
				}, Xt(r, d, l)
			}
		}), ["In", "Out"].forEach(function(t) {
			te.Redirects["fade" + t] = function(r, n, a, i, o, s) {
				var l = e({}, n),
					u = l.complete,
					c = {
						opacity: "In" === t ? 1 : 0
					};
				0 !== a && (l.begin = null), l.complete = a !== i - 1 ? null : function() {
					u && u.call(o, o), s && s.resolver(o)
				}, void 0 === l.display && (l.display = "In" === t ? "auto" : "none"), Xt(this, c, l)
			}
		}), function(e) {
			e.RegisterEffect = function(t, r) {
				return e.Redirects[t] = function(n, a, i, o, s, l, u) {
					var c = i === o - 1,
						f = 0;
					u = u || r.loop, r.defaultDuration = "function" == typeof r.defaultDuration ? r.defaultDuration.call(s, s) : parseFloat(r.defaultDuration);
					for (var d = 0; d < r.calls.length; d++) {
						var p = r.calls[d][1];
						"number" == typeof p && (f += p)
					}
					var g = f >= 1 ? 0 : r.calls.length ? (1 - f) / r.calls.length : 1,
						m = function(f) {
							var d = r.calls[f],
								p = d[0],
								m = 1e3,
								y = d[1],
								v = d[2] || {},
								h = {};
							if (void 0 !== a.duration ? m = a.duration : void 0 !== r.defaultDuration && (m = r.defaultDuration), h.duration = m * ("number" == typeof y ? y : g), h.queue = a.queue || "", h.easing = v.easing || "ease", h.delay = parseFloat(v.delay) || 0, h.loop = !r.loop && v.loop, h.cache = v.cache || !0, 0 === f && (h.delay += parseFloat(a.delay) || 0, 0 === i && (h.begin = function() {
									a.begin && a.begin.call(s, s);
									var r, n, i, o, l, u, c = t.match(/(In|Out)$/);
									c && "In" === c[0] && void 0 !== p.opacity && (s.nodeType ? [s] : s).forEach(function(t) {
										e.CSS.setPropertyValue(t, "opacity", 0)
									}), a.animateParentHeight && c && (n = c[0], i = m + h.delay, o = a.stagger, u = 0, ((r = s).nodeType ? [r] : r).forEach(function(t, r) {
										o && (i += r * o), l = t.parentNode;
										var n = ["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"];
										"border-box" === ("" + e.CSS.getPropertyValue(t, "boxSizing")).toLowerCase() && (n = ["height"]), n.forEach(function(r) {
											u += parseFloat(e.CSS.getPropertyValue(t, r))
										})
									}), Xt(l, {
										height: ("In" === n ? "+" : "-") + "=" + u
									}, {
										queue: !1,
										easing: "ease-in-out",
										duration: i * ("In" === n ? .6 : 1)
									}))
								}), a.visibility && "hidden" !== a.visibility && (h.visibility = a.visibility)), f === r.calls.length - 1) {
								var b = function() {
									void 0 !== a.display && "none" !== a.display || !/Out$/.test(t) || (s.nodeType ? [s] : s).forEach(function(t) {
										e.CSS.setPropertyValue(t, "display", "none")
									}), a.complete && a.complete.call(s, s), l && l(s || n)
								};
								h.complete = function() {
									if (u && e.Redirects[t](n, a, i, o, s, l, !0 === u || Math.max(0, u - 1)), r.reset) {
										for (var f in r.reset) r.reset.hasOwnProperty(f);
										var d = {
											duration: 0,
											queue: !1
										};
										c && (d.complete = b), Xt(n, r.reset, d)
									} else c && b()
								}, "hidden" === a.visibility && (h.visibility = a.visibility)
							}
							Xt(n, p, h)
						};
					for (d = 0; d < r.calls.length; d++) m(d)
				}, Xt
			}
		}(Ut || (Ut = {})), function(e) {
			var t = /^#([A-f\d]{3}){1,2}$/i,
				r = new Map;
			r.set("function", function(e, t, r, n, a, i) {
				return e.call(t, n, r.length)
			}), r.set("number", function(t, r, n, a, i, o) {
				return t + e.getNormalizationUnit(o.fn)
			}), r.set("string", function(t, r, n, a, i, o) {
				return e.CSS.fixColors(t)
			}), r.set("undefined", function(t, r, n, a, i, o) {
				return e.CSS.fixColors(e.CSS.getPropertyValue(r, i, o.fn) || "")
			}), e.expandProperties = function(n, a) {
				var l = n.tweens = d(),
					c = n.elements,
					f = n.element,
					p = c.indexOf(f),
					g = _t(f),
					m = kt(n.queue, n.options.queue),
					y = kt(n.options.duration, e.defaults.duration);
				for (var v in a) {
					var h = e.CSS.camelCase(v),
						b = a[v],
						S = e.getNormalization(f, h);
					if ((S || "tween" === h) && null != b) {
						var I = l[h] = d(),
							w = void 0,
							x = void 0;
						if (I.fn = S, s(b) && (b = b.call(f, p, c.length, c)), Array.isArray(b)) {
							var U = b[1],
								O = b[2];
							w = b[0], o(U) && (/^[\d-]/.test(U) || t.test(U)) || s(U) || i(U) ? x = U : o(U) && e.Easing.Easings[U] || Array.isArray(U) ? (I.easing = Rt(U, y), x = O) : x = U || O
						} else w = b;
						I.end = r.get(typeof w)(w, f, c, p, h, I), null == x && !1 !== m && void 0 !== g.queueList[m] || (I.start = r.get(typeof x)(x, f, c, p, h, I), u(h, I, y))
					}
				}
			};
			var n = /((?:[+\-*/]=)?(?:[+-]?\d*\.\d+|[+-]?\d+)[a-z%]*|(?:.(?!$|[+-]?\d|[+\-*/]=[+-]?\d))+.|.)/g,
				a = /^([+\-*/]=)?([+-]?\d*\.\d+|[+-]?\d+)(.*)$/;

			function l(e, t) {
				for (var r, i = e.length, s = [], l = [], u = 0; u < i; u++) {
					if (!o(e[u])) return;
					s[u] = Et([], e[u].match(n)), l[u] = 0, r = r || s[u].length > 1
				}
				var c = [],
					f = c.pattern = [],
					d = function(e) {
						if (o(f[f.length - 1])) f[f.length - 1] += e;
						else if (e) {
							f.push(e);
							for (var t = 0; t < i; t++) c[t].push(null)
						}
					},
					p = function() {
						if (!(r || f.length > 1)) {
							for (var n = "display" === t, a = "visibility" === t, o = 0; o < i; o++) {
								var s = e[o];
								c[o][0] = s, c[o].easing = Rt(n && "none" === s || a && "hidden" === s || !n && !a ? "at-end" : "at-start", 400)
							}
							return f[0] = !1, c
						}
					},
					g = !0;
				for (u = 0; u < i; u++) c[u] = [];
				for (; g;) {
					var m = [],
						y = [],
						v = void 0,
						h = !1,
						b = !1;
					for (u = 0; u < i; u++) {
						var S = l[u]++,
							I = s[u][S];
						if (!I) {
							if (u) return;
							for (; u < i; u++) {
								var w = l[u]++;
								if (s[u][w]) return p()
							}
							g = !1;
							break
						}
						var x = I.match(a);
						if (x) {
							if (v) return p();
							var U = parseFloat(x[2]),
								O = x[3],
								q = x[1] ? x[1][0] + O : void 0,
								E = q || O;
							Vt(y, E) || y.push(E), O || (U ? b = !0 : h = !0), m[u] = q ? [U, E, !0] : [U, E]
						} else {
							if (m.length) return p();
							if (v) {
								if (v !== I) return p()
							} else v = I
						}
					}
					if (v) d(v);
					else if (y.length)
						if (2 === y.length && h && !b && y.splice(y[0] ? 1 : 0, 1), 1 === y.length) {
							if ("+" === (k = (O = y[0])[0]) || "-" === k || "*" === k || "/" === k) return;
							f.push(!1);
							for (u = 0; u < i; u++) c[u].push(m[u][0]);
							d(O)
						} else {
							d("calc(");
							for (var C = f.length - 1, V = 0; V < y.length; V++) {
								var k, N = "*" === (k = (O = y[V])[0]) || "/" === k,
									_ = N || "+" === k || "-" === k;
								N && (f[C] += "(", d(")")), V && d(" " + (_ ? k : "+") + " "), f.push(!1);
								for (u = 0; u < i; u++) {
									var A = m[u];
									c[u].push(A[1] === O ? A[0] : 3 === A.length ? c[u - 1][c[u - 1].length - 1] : N ? 1 : 0)
								}
								d(_ ? O.substring(1) : O)
							}
							d(")")
						}
				}
				V = 0;
				for (var z = 0; V < f.length; V++) {
					o(v = f[V]) ? z && v.indexOf(",") >= 0 ? z++ : v.indexOf("rgb") >= 0 && (z = 1) : z && (z < 4 ? f[V] = !0 : z = 0)
				}
				return c
			}

			function u(t, r, n, a) {
				var i = r.start,
					s = r.end;
				if (o(s) && o(i)) {
					var u = l([i, s], t);
					if (!u && a) {
						var c = i.match(/\d\.?\d*/g) || ["0"],
							f = c.length,
							d = 0;
						u = l([s.replace(/\d+\.?\d*/g, function() {
							return c[d++ % f]
						}), s], t)
					}
					if (u) switch (u[0].percent = 0, u[1].percent = 1, r.sequence = u, r.easing) {
						case e.Easing.Easings["at-start"]:
						case e.Easing.Easings.during:
						case e.Easing.Easings["at-end"]:
							u[0].easing = u[1].easing = r.easing
					}
				}
			}
			e.findPattern = l, e.validateTweens = function(t) {
				if (e.State.firstNew === t && (e.State.firstNew = t._next), !(1 & t._flags)) {
					var r = t.tweens;
					for (var n in kt(t.options.duration, e.defaults.duration), r) {
						var a = r[n];
						if (null == a.start) {
							var i = e.CSS.getPropertyValue(t.element, n);
							o(i) && (a.start = e.CSS.fixColors(i), u(n, a, 0, !0))
						}
					}
					t._flags |= 1
				}
			}
		}(Ut || (Ut = {})), function(e) {
			e.Sequences = d();
			var t = /(\d*\.\d+|\d+\.?|from|to)/g;

			function n(a) {
				if (f(a[0]))
					for (var s in a[0]) n([s, a[0][s]]);
				else if (o(a[0])) {
					var l = a[0],
						u = a[1];
					if (o(l))
						if (f(u)) {
							var c = {},
								p = Array(100),
								g = [],
								m = [],
								y = e.Sequences[l] = d(),
								v = Tt(u.duration);
							for (var h in y.tweens = d(), i(v) && (y.duration = v), u) {
								var b = (h + "").match(t);
								if (b) {
									m.push(h);
									for (var S = 0, I = b; S < I.length; S++) {
										var w = "from" === (T = I[S]) ? 0 : "to" === T ? 100 : parseFloat(T);
										if (w < 0 || w > 100);
										else if (isNaN(w));
										else
											for (var x in c[w + ""] || (c[w + ""] = []), c[w + ""].push(h), u[h]) Vt(g, x) || g.push(x)
									}
								}
							}
							var U = Object.keys(c).sort(function(e, t) {
								var r = parseFloat(e),
									n = parseFloat(t);
								return r > n ? 1 : r < n ? -1 : 0
							});
							U.forEach(function(e) {
								p.push.apply(c[e])
							});
							for (var O = 0, q = g; O < q.length; O++) {
								for (var E = [], C = e.CSS.camelCase(x = q[O]), V = 0, k = U; V < k.length; V++)
									for (var N = 0, _ = c[T = k[V]]; N < _.length; N++) {
										var A = u[_[N]];
										A[C] && E.push(o(A[C]) ? A[C] : A[C][0])
									}
								if (E.length) {
									var z = e.findPattern(E, C),
										P = 0;
									if (z) {
										for (var M = 0, L = U; M < L.length; M++)
											for (var T, R = 0, B = c[T = L[M]]; R < B.length; R++) {
												var j = u[B[R]][C];
												j && (Array.isArray(j) && j.length > 1 && (o(j[1]) || Array.isArray(j[1])) && (z[P].easing = Rt(j[1], y.duration || r)), z[P++].percent = parseFloat(T) / 100)
											}
										y.tweens[C] = z
									}
								}
							}
						} else;
					else;
				}
			}
			e.expandSequence = function(t, r) {
				var n = t.tweens = d(),
					a = t.element;
				for (var i in r.tweens) {
					var o = e.getNormalization(a, i);
					(o || "tween" === i) && (n[i] = {
						fn: o,
						sequence: r.tweens[i]
					})
				}
			}, e.registerSequence = n, e.registerAction(["registerSequence", n], !0)
		}(Ut || (Ut = {})), function(e) {
			function t(e) {
				try {
					var t = e.elements;
					e.options.begin.call(t, t, e)
				} catch (e) {
					setTimeout(function() {
						throw e
					}, 1)
				}
			}

			function r(t, r) {
				try {
					var n = t.elements,
						a = t.percentComplete,
						i = t.options,
						o = t.tween;
					t.options.progress.call(n, n, a, Math.max(0, t.timeStart + (null != t.duration ? t.duration : null != i.duration ? i.duration : e.defaults.duration) - r), void 0 !== o ? o : 100 * a + "", t)
				} catch (e) {
					setTimeout(function() {
						throw e
					}, 1)
				}
			}

			function n() {
				var t, n;
				for (t = o; t; t = n) n = t._nextProgress, r(t, e.lastTick);
				for (t = s; t; t = n) n = t._nextComplete, e.completeCall(t)
			}
			e.callBegin = t;
			var a, i, o, s, l = 1e3 / 60,
				u = function() {
					var e = window.performance || {};
					if ("function" != typeof e.now) {
						var t = e.timing && e.timing.navigationStart ? e.timing.navigationStart : qt();
						e.now = function() {
							return qt() - t
						}
					}
					return e
				}(),
				c = function(t) {
					return setTimeout(t, Math.max(0, l - (u.now() - e.lastTick)))
				},
				f = window.requestAnimationFrame || c;
			e.lastTick = 0;
			try {
				(i = new Worker(URL.createObjectURL(new Blob(["(" + function() {
					var e, t = this;
					this.onmessage = function(r) {
						!0 === r.data ? e || (e = setInterval(function() {
							t.postMessage(!0)
						}, 1e3 / 30)) : !1 === r.data ? e && (clearInterval(e), e = 0) : t.postMessage(r.data)
					}
				} + ")()"])))).onmessage = function(e) {
					!0 === e.data ? d() : n()
				}, e.State.isMobile || void 0 === document.hidden || document.addEventListener("visibilitychange", function() {
					i.postMessage(e.State.isTicking && document.hidden)
				})
			} catch (e) {}

			function d(r) {
				if (!a) {
					if (a = !0, !1 !== r) {
						var p = u.now(),
							g = e.lastTick ? p - e.lastTick : l,
							m = e.defaults.speed,
							y = e.defaults.easing,
							v = e.defaults.duration,
							h = void 0,
							b = void 0,
							S = void 0,
							I = void 0;
						if (o = null, s = null, g >= e.defaults.minFrameTime || !e.lastTick) {
							for (e.lastTick = p; h = e.State.firstNew;) e.validateTweens(h);
							for (h = e.State.first; h && h !== e.State.firstNew; h = h._next) {
								var w = h.element,
									x = void 0;
								if (w.parentNode && (x = _t(w))) {
									var U = h.options,
										O = h._flags;
									if (!(C = h.timeStart)) {
										var q = null != h.queue ? h.queue : U.queue;
										C = p - g, !1 !== q && (C = Math.max(C, x.lastFinishList[q] || 0)), h.timeStart = C
									}
									16 & O ? h.timeStart += g : 2 & O || (h._flags |= 2, U._ready++)
								} else e.freeAnimationCall(h)
							}
							for (h = e.State.first; h && h !== e.State.firstNew; h = b) {
								if (b = h._next, 2 & (O = h._flags) && !(16 & O)) {
									U = h.options;
									if (32 & O && U._ready < U._total) h.timeStart += g;
									else {
										var E = null != h.speed ? h.speed : null != U.speed ? U.speed : m,
											C = h.timeStart;
										if (!(4 & O)) {
											var V = null != h.delay ? h.delay : U.delay;
											if (V) {
												if (C + V / E > p) continue;
												h.timeStart = C += V / (V > 0 ? E : 1)
											}
											h._flags |= 4, 0 == U._started++ && (U._first = h, U.begin && (t(h), U.begin = void 0))
										}
										if (1 !== E) h.timeStart = C += Math.min(g, p - C) * (1 - E);
										U._first === h && U.progress && (h._nextProgress = void 0, S ? S._nextProgress = S = h : o = S = h);
										var k = null != h.easing ? h.easing : null != U.easing ? U.easing : y,
											N = h.ellapsedTime = p - C,
											_ = h.percentComplete = e.mock ? 1 : Math.min(N / (null != h.duration ? h.duration : null != U.duration ? U.duration : v), 1),
											A = h.tweens,
											z = 64 & O;
										for (var P in 1 === _ && (h._nextComplete = void 0, I ? I._nextComplete = I = h : s = I = h), A) {
											var M = A[P],
												L = M.sequence,
												T = L.pattern,
												R = "",
												B = 0;
											if (T) {
												for (var j = (M.easing || k)(_, 0, 1, P), F = 0, D = 0; D < L.length - 1; D++) L[D].percent < j && (F = D);
												for (var W = L[F], H = L[F + 1] || W, X = (_ - W.percent) / (H.percent - W.percent), Y = H.easing || e.Easing.linearEasing; B < T.length; B++) {
													var $ = W[B];
													if (null == $) R += T[B];
													else {
														var Q = H[B];
														if ($ === Q) R += $;
														else {
															var G = Y(z ? 1 - X : X, $, Q, P);
															R += !0 === T[B] ? Math.round(G) : G
														}
													}
												}
												"tween" !== P ? (1 === _ && Ct(R, "calc(0 + ") && (R = R.replace(/^calc\(0[^\d]* \+ ([^\(\)]+)\)$/, "$1")), e.CSS.setPropertyValue(h.element, P, R, M.fn)) : h.tween = R
											} else delete A[P]
										}
									}
								}
							}(o || s) && (document.hidden ? n() : i ? i.postMessage("") : setTimeout(n, 1))
						}
					}
					e.State.first ? (e.State.isTicking = !0, document.hidden ? i ? !1 === r && i.postMessage(!0) : c(d) : f(d)) : (e.State.isTicking = !1, e.lastTick = 0, document.hidden && i && i.postMessage(!1)), a = !1
				}
			}
			e.tick = d
		}(Ut || (Ut = {})), (Ut || (Ut = {})).timestamp = !0, (Ut || (Ut = {})).version = "2.0.2", function() {
			if (document.documentMode) return document.documentMode;
			for (var e = 7; e > 4; e--) {
				var t = document.createElement("div");
				if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
			}
		}() <= 8) throw Error("VelocityJS cannot run on Internet Explorer 8 or earlier");
	if (window === this) {
		var Yt = Ut.patch,
			$t = window.jQuery,
			Qt = window.Zepto;
		Yt(window, !0), Yt(Element && Element.prototype), Yt(NodeList && NodeList.prototype), Yt(HTMLCollection && HTMLCollection.prototype), Yt($t, !0), Yt($t && $t.fn), Yt(Qt, !0), Yt(Qt && Qt.fn)
	}(re = Ut || (Ut = {})).UI || (re.UI = {}), Velocity("registerSequence", "bounce", {
		duration: 1e3,
		"0,100%": {
			transformOrigin: "center bottom"
		},
		"0%,20%,53%,80%,100%": {
			transform: ["translate3d(0,0px,0)", "easeOutCubic"]
		},
		"40%,43%": {
			transform: ["translate3d(0,-30px,0)", "easeInQuint"]
		},
		"70%": {
			transform: ["translate3d(0,-15px,0)", "easeInQuint"]
		},
		"90%": {
			transform: "translate3d(0,-4px,0)"
		}
	}), (ne = Ut || (Ut = {})).UI || (ne.UI = {}), Velocity("registerSequence", "flash", {
		duration: 1e3,
		"0%,50%,100%": {
			opacity: "1"
		},
		"25%,75%": {
			opacity: "0"
		}
	}), (ae = Ut || (Ut = {})).UI || (ae.UI = {}), Velocity("registerSequence", "headShake", {
		duration: 1e3,
		easing: "easeInOut",
		"0%": {
			transform: "translateX(0) rotateY(0)"
		},
		"6.5%": {
			transform: "translateX(-6px) rotateY(-9deg)"
		},
		"18.5%": {
			transform: "translateX(5px) rotateY(7deg)"
		},
		"31.5%": {
			transform: "translateX(-3px) rotateY(-5deg)"
		},
		"43.5%": {
			transform: "translateX(2px) rotateY(3deg)"
		},
		"50%": {
			transform: "translateX(0) rotateY(0)"
		}
	}), (ie = Ut || (Ut = {})).UI || (ie.UI = {}), Velocity("registerSequence", "jello", {
		duration: 1e3,
		"0%,100%": {
			transformOrigin: "center"
		},
		"0%,11.1%,100%": {
			transform: "skewX(0) skewY(0)"
		},
		"22.2%": {
			transform: "skewX(-12.5deg) skewY(-12.5deg)"
		},
		"33.3%": {
			transform: "skewX(6.25deg) skewY(6.25deg)"
		},
		"44.4%": {
			transform: "skewX(-3.125deg) skewY(-3.125deg)"
		},
		"55.5%": {
			transform: "skewX(1.5625deg) skewY(1.5625deg)"
		},
		"66.6%": {
			transform: "skewX(-0.78125deg) skewY(-0.78125deg)"
		},
		"77.7%": {
			transform: "skewX(0.390625deg) skewY(0.390625deg)"
		},
		"88.8%": {
			transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)"
		}
	}), (oe = Ut || (Ut = {})).UI || (oe.UI = {}), Velocity("registerSequence", "pulse", {
		duration: 1e3,
		"0%": {
			transform: "scale3d(1,1,1)"
		},
		"50%": {
			transform: "scale3d(1.05,1.05,1.05)"
		},
		"100%": {
			transform: "scale3d(1,1,1)"
		}
	}), (se = Ut || (Ut = {})).UI || (se.UI = {}), Velocity("registerSequence", "rubberBand", {
		duration: 1e3,
		"0%": {
			transform: "scale3d(1,1,1)"
		},
		"30%": {
			transform: "scale3d(1.25,0.75,1)"
		},
		"40%": {
			transform: "scale3d(0.75,1.25,1)"
		},
		"50%": {
			transform: "scale3d(1.15,0.85,1)"
		},
		"65%": {
			transform: "scale3d(0.95,1.05,1)"
		},
		"75%": {
			transform: "scale3d(1.05,0.95,1)"
		},
		"100%": {
			transform: "scale3d(1,1,1)"
		}
	}), (le = Ut || (Ut = {})).UI || (le.UI = {}), Velocity("registerSequence", "shake", {
		duration: 1e3,
		"0%,100%": {
			transform: "translate3d(0,0,0)"
		},
		"10%,30%,50%,70%,90%": {
			transform: "translate3d(-10px,0,0)"
		},
		"20%,40%,60%,80%": {
			transform: "translate3d(10px,0,0)"
		}
	}), (ue = Ut || (Ut = {})).UI || (ue.UI = {}), Velocity("registerSequence", "swing", {
		duration: 1e3,
		"0%,100%": {
			transform: "rotate3d(0,0,1,0deg)",
			transformOrigin: "center"
		},
		"20%": {
			transform: "rotate3d(0,0,1,15deg)"
		},
		"40%": {
			transform: "rotate3d(0,0,1,-10deg)"
		},
		"60%": {
			transform: "rotate3d(0,0,1,5deg)"
		},
		"80%": {
			transform: "rotate3d(0,0,1,-5deg)"
		}
	}), (ce = Ut || (Ut = {})).UI || (ce.UI = {}), Velocity("registerSequence", "tada", {
		duration: 1e3,
		"0%": {
			transform: "scale3d(1,1,1) rotate3d(0,0,0,0)"
		},
		"10%,20%": {
			transform: "scale3d(0.9,0.9,0.9) rotate3d(0,0,1,-3deg)"
		},
		"30%,50%,70%,90%": {
			transform: "scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)"
		},
		"40%,60%,80%": {
			transform: "scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)"
		},
		"100%": {
			transform: "scale3d(1, 1, 1) rotate3d(0,0,0,0)"
		}
	}), (fe = Ut || (Ut = {})).UI || (fe.UI = {}), Velocity("registerSequence", "wobble", {
		duration: 1e3,
		"0%": {
			transform: "translate3d(0,0,0) rotate3d(0,0,0,0)"
		},
		"15%": {
			transform: "translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)"
		},
		"30%": {
			transform: "translate3d(20%,0,0) rotate3d(0,0,1,3deg)"
		},
		"45%": {
			transform: "translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)"
		},
		"60%": {
			transform: "translate3d(10%,0,0) rotate3d(0,0,1,2deg)"
		},
		"75%": {
			transform: "translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)"
		},
		"100%": {
			transform: "translate3d(0,0,0) rotate3d(0,0,0,0)"
		}
	}), (de = Ut || (Ut = {})).UI || (de.UI = {}), Velocity("registerSequence", "bounceIn", {
		duration: 750,
		easing: "easeOutCubic",
		"0%": {
			opacity: "0",
			transform: "scale3d(0.3,0.3,0.3)"
		},
		"20%": {
			transform: "scale3d(1.1,1.1,1.1)"
		},
		"40%": {
			transform: "scale3d(0.9,0.9,0.9)"
		},
		"60%": {
			opacity: "1",
			transform: "scale3d(1.03,1.03,1.03)"
		},
		"80%": {
			transform: "scale3d(0.97,0.97,0.97)"
		},
		"100%": {
			opacity: "1",
			transform: "scale3d(1,1,1)"
		}
	}), (pe = Ut || (Ut = {})).UI || (pe.UI = {}), Velocity("registerSequence", "bounceInDown", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "translate3d(0,-3000px,0)"
		},
		"60%": {
			opacity: "1",
			transform: ["translate3d(0,25px,0)", "easeOutCubic"]
		},
		"75%": {
			transform: ["translate3d(0,-10px,0)", "easeOutCubic"]
		},
		"90%": {
			transform: ["translate3d(0,5px,0)", "easeOutCubic"]
		},
		"100%": {
			transform: ["translate3d(0,0,0)", "easeOutCubic"]
		}
	}), (ge = Ut || (Ut = {})).UI || (ge.UI = {}), Velocity("registerSequence", "bounceInLeft", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "translate3d(-3000px,0,0)"
		},
		"60%": {
			opacity: "1",
			transform: ["translate3d(25px,0,0)", "easeOutCubic"]
		},
		"75%": {
			transform: ["translate3d(-10px,0,0)", "easeOutCubic"]
		},
		"90%": {
			transform: ["translate3d(5px,0,0)", "easeOutCubic"]
		},
		"100%": {
			transform: ["translate3d(0,0,0)", "easeOutCubic"]
		}
	}), (me = Ut || (Ut = {})).UI || (me.UI = {}), Velocity("registerSequence", "bounceInRight", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "translate3d(3000px,0,0)"
		},
		"60%": {
			opacity: "1",
			transform: ["translate3d(-25px,0,0)", "easeOutCubic"]
		},
		"75%": {
			transform: ["translate3d(10px,0,0)", "easeOutCubic"]
		},
		"90%": {
			transform: ["translate3d(-5px,0,0)", "easeOutCubic"]
		},
		"100%": {
			transform: ["translate3d(0,0,0)", "easeOutCubic"]
		}
	}), (ye = Ut || (Ut = {})).UI || (ye.UI = {}), Velocity("registerSequence", "bounceInUp", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "translate3d(0,3000px,0)"
		},
		"60%": {
			opacity: "1",
			transform: ["translate3d(0,-25px,0)", "easeOutCubic"]
		},
		"75%": {
			transform: ["translate3d(0,10px,0)", "easeOutCubic"]
		},
		"90%": {
			transform: ["translate3d(0,-5px,0)", "easeOutCubic"]
		},
		"100%": {
			transform: ["translate3d(0,0,0)", "easeOutCubic"]
		}
	}), (ve = Ut || (Ut = {})).UI || (ve.UI = {}), Velocity("registerSequence", "bounceOut", {
		duration: 750,
		"0%": {
			opacity: "1",
			transform: "scale3d(1,1,1)"
		},
		"20%": {
			transform: "scale3d(0.9,0.9,0.9)"
		},
		"50%,55%": {
			opacity: "1",
			transform: "scale3d(1.1,1.1,1.1)"
		},
		to: {
			opacity: "0",
			transform: "scale3d(0.3,0.3,0.3)"
		}
	}), (he = Ut || (Ut = {})).UI || (he.UI = {}), Velocity("registerSequence", "bounceOutDown", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		},
		"20%": {
			transform: "translate3d(0,10px,0)"
		},
		"40%,45%": {
			opacity: "1",
			transform: "translate3d(0,-20px,0)"
		},
		"100%": {
			opacity: "0",
			transform: "translate3d(0,2000px,0)"
		}
	}), (be = Ut || (Ut = {})).UI || (be.UI = {}), Velocity("registerSequence", "bounceOutLeft", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		},
		"20%": {
			opacity: "1",
			transform: "translate3d(20px,0,0)"
		},
		"100%": {
			opacity: "0",
			transform: "translate3d(-2000px,0,0)"
		}
	}), (Se = Ut || (Ut = {})).UI || (Se.UI = {}), Velocity("registerSequence", "bounceOutRight", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		},
		"20%": {
			opacity: "1",
			transform: "translate3d(-20px,0,0)"
		},
		"100%": {
			opacity: "0",
			transform: "translate3d(2000px,0,0)"
		}
	}), (Ie = Ut || (Ut = {})).UI || (Ie.UI = {}), Velocity("registerSequence", "bounceOutUp", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		},
		"20%": {
			transform: "translate3d(0,-10px,0)"
		},
		"40%,45%": {
			opacity: "1",
			transform: "translate3d(0,20px,0)"
		},
		"100%": {
			opacity: "0",
			transform: "translate3d(0,-2000px,0)"
		}
	}), (we = Ut || (Ut = {})).UI || (we.UI = {}), Velocity("registerSequence", "fadeIn", {
		duration: 1e3,
		"0%": {
			opacity: "0"
		},
		"100%": {
			opacity: "1"
		}
	}), (xe = Ut || (Ut = {})).UI || (xe.UI = {}), Velocity("registerSequence", "fadeInDown", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "translate3d(0,-100%,0)"
		},
		"100%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		}
	}), (Ue = Ut || (Ut = {})).UI || (Ue.UI = {}), Velocity("registerSequence", "fadeInDownBig", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "translate3d(0,-2000px,0)"
		},
		"100%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		}
	}), (Oe = Ut || (Ut = {})).UI || (Oe.UI = {}), Velocity("registerSequence", "fadeInLeft", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "translate3d(-100%,0,0)"
		},
		"100%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		}
	}), (qe = Ut || (Ut = {})).UI || (qe.UI = {}), Velocity("registerSequence", "fadeInLeftBig", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "translate3d(-2000px,0,0)"
		},
		"100%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		}
	}), (Ee = Ut || (Ut = {})).UI || (Ee.UI = {}), Velocity("registerSequence", "fadeInRight", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "translate3d(100%,0,0)"
		},
		"100%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		}
	}), (Ce = Ut || (Ut = {})).UI || (Ce.UI = {}), Velocity("registerSequence", "fadeInRightBig", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "translate3d(2000px,0,0)"
		},
		"100%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		}
	}), (Ve = Ut || (Ut = {})).UI || (Ve.UI = {}), Velocity("registerSequence", "fadeInUp", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "translate3d(0,100%,0)"
		},
		"100%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		}
	}), (ke = Ut || (Ut = {})).UI || (ke.UI = {}), Velocity("registerSequence", "fadeInUpBig", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "translate3d(0,2000px,0)"
		},
		"100%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		}
	}), (Ne = Ut || (Ut = {})).UI || (Ne.UI = {}), Velocity("registerSequence", "fadeOut", {
		duration: 1e3,
		"0%": {
			opacity: "1"
		},
		"100%": {
			opacity: "0"
		}
	}), (_e = Ut || (Ut = {})).UI || (_e.UI = {}), Velocity("registerSequence", "fadeOutDown", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		},
		"100%": {
			opacity: "0",
			transform: "translate3d(0,100%,0)"
		}
	}), (Ae = Ut || (Ut = {})).UI || (Ae.UI = {}), Velocity("registerSequence", "fadeOutDownBig", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		},
		"100%": {
			opacity: "0",
			transform: "translate3d(0,2000px,0)"
		}
	}), (ze = Ut || (Ut = {})).UI || (ze.UI = {}), Velocity("registerSequence", "fadeOutLeft", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		},
		"100%": {
			opacity: "0",
			transform: "translate3d(-100%,0,0)"
		}
	}), (Pe = Ut || (Ut = {})).UI || (Pe.UI = {}), Velocity("registerSequence", "fadeOutLeftBig", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		},
		"100%": {
			opacity: "0",
			transform: "translate3d(-2000px,0,0)"
		}
	}), (Me = Ut || (Ut = {})).UI || (Me.UI = {}), Velocity("registerSequence", "fadeOutRight", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		},
		"100%": {
			opacity: "0",
			transform: "translate3d(100%,0,0)"
		}
	}), (Le = Ut || (Ut = {})).UI || (Le.UI = {}), Velocity("registerSequence", "fadeOutRightBig", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		},
		"100%": {
			opacity: "0",
			transform: "translate3d(2000px,0,0)"
		}
	}), (Te = Ut || (Ut = {})).UI || (Te.UI = {}), Velocity("registerSequence", "fadeOutUp", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		},
		"100%": {
			opacity: "0",
			transform: "translate3d(0,-100%,0)"
		}
	}), (Re = Ut || (Ut = {})).UI || (Re.UI = {}), Velocity("registerSequence", "fadeOutUpBig", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)"
		},
		"100%": {
			opacity: "0",
			transform: "translate3d(0,-2000px,0)"
		}
	}), (Be = Ut || (Ut = {})).UI || (Be.UI = {}), Velocity("registerSequence", "flip", {
		duration: 1e3,
		"0%,100%": {
			backfaceVisibility: "visible"
		},
		"0%": {
			transform: ["perspective(400px) translate3d(0,0,0) rotate3d(0,1,0,-360deg) scale3d(1,1,1)", "easeOut"]
		},
		"40%": {
			transform: ["perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg) scale3d(1,1,1)", "easeOut"]
		},
		"50%": {
			transform: ["perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg) scale3d(1,1,1)", "easeIn"]
		},
		"80%": {
			transform: ["perspective(400px) translate3d(0,0,0) rotate3d(0,1,0,0) scale3d(0.95,0.95,0.95)", "easeIn"]
		},
		"100%": {
			transform: ["perspective(400px) translate3d(0,0,0) rotate3d(0,0,0,0) scale3d(1,1,1)", "ease-in"]
		}
	}), (je = Ut || (Ut = {})).UI || (je.UI = {}), Velocity("registerSequence", "flipInX", {
		duration: 1e3,
		"0%,100%": {
			backfaceVisibility: "visible"
		},
		"0%": {
			opacity: "0",
			transform: "perspective(400px) rotate3d(1,0,0,90deg)"
		},
		"40%": {
			transform: ["perspective(400px) rotate3d(1,0,0,-20deg)", "easeIn"]
		},
		"60%": {
			opacity: "1",
			transform: "perspective(400px) rotate3d(1,0,0,10deg)"
		},
		"80%": {
			transform: "perspective(400px) rotate3d(1,0,0,-5deg)"
		},
		"100%": {
			transform: "perspective(400px) rotate3d(1,0,0,0)"
		}
	}), (Fe = Ut || (Ut = {})).UI || (Fe.UI = {}), Velocity("registerSequence", "flipInY", {
		duration: 1e3,
		"0%,100%": {
			backfaceVisibility: "visible"
		},
		"0%": {
			opacity: "0",
			transform: "perspective(400px) rotate3d(0,1,0,90deg)"
		},
		"40%": {
			transform: ["perspective(400px) rotate3d(0,1,0,-20deg)", "easeIn"]
		},
		"60%": {
			opacity: "1",
			transform: "perspective(400px) rotate3d(0,1,0,10deg)"
		},
		"80%": {
			transform: "perspective(400px) rotate3d(0,1,0,-5deg)"
		},
		"100%": {
			transform: "perspective(400px) rotate3d(0,1,0,0)"
		}
	}), (De = Ut || (Ut = {})).UI || (De.UI = {}), Velocity("registerSequence", "flipOutX", {
		duration: 750,
		"0%,100%": {
			backfaceVisibility: "visible"
		},
		"0%": {
			transform: "perspective(400px) rotate3d(1,0,0,0)"
		},
		"30%": {
			opacity: "1",
			transform: "perspective(400px) rotate3d(1,0,0,-20deg)"
		},
		"100%": {
			opacity: "0",
			transform: "perspective(400px) rotate3d(1,0,0,90deg)"
		}
	}), (We = Ut || (Ut = {})).UI || (We.UI = {}), Velocity("registerSequence", "flipOutY", {
		duration: 750,
		"0%,100%": {
			backfaceVisibility: "visible"
		},
		"0%": {
			transform: "perspective(400px) rotate3d(0,1,0,0)"
		},
		"30%": {
			opacity: "1",
			transform: "perspective(400px) rotate3d(0,1,0,-20deg)"
		},
		"100%": {
			opacity: "0",
			transform: "perspective(400px) rotate3d(0,1,0,90deg)"
		}
	}), (He = Ut || (Ut = {})).UI || (He.UI = {}), Velocity("registerSequence", "lightSpeedIn", {
		duration: 1e3,
		easing: "easeOut",
		"0%": {
			opacity: "0",
			transform: "translate3d(100%,0,0) skewX(-30deg)"
		},
		"60%": {
			opacity: "1",
			transform: "translate3d(40%,0,0) skewX(20deg)"
		},
		"80%": {
			opacity: "1",
			transform: "translate3d(20%,0,0) skewX(-5deg)"
		},
		"100%": {
			opacity: "1",
			transform: "translate3d(0,0,0) skew(0)"
		}
	}), (Xe = Ut || (Ut = {})).UI || (Xe.UI = {}), Velocity("registerSequence", "lightSpeedOut", {
		duration: 1e3,
		easing: "easeIn",
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0) skewX(0)"
		},
		"100%": {
			opacity: "0",
			transform: "translate3d(100%,0,0) skewX(30deg)"
		}
	}), (Ye = Ut || (Ut = {})).UI || (Ye.UI = {}), Velocity("registerSequence", "rotateIn", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "rotate3d(0,0,1,-200deg)",
			transformOrigin: "center"
		},
		"100%": {
			opacity: "1",
			transform: "translate3d(0,0,0)",
			transformOrigin: "center"
		}
	}), ($e = Ut || (Ut = {})).UI || ($e.UI = {}), Velocity("registerSequence", "rotateInDownLeft", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "rotate3d(0,0,1,-45deg)",
			transformOrigin: "left bottom"
		},
		"100%": {
			opacity: "1",
			transform: "translate3d(0,0,0)",
			transformOrigin: "left bottom"
		}
	}), (Qe = Ut || (Ut = {})).UI || (Qe.UI = {}), Velocity("registerSequence", "rotateInDownRight", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "rotate3d(0,0,1,45deg)",
			transformOrigin: "right bottom"
		},
		"100%": {
			opacity: "1",
			transform: "translate3d(0,0,0)",
			transformOrigin: "right bottom"
		}
	}), (Ge = Ut || (Ut = {})).UI || (Ge.UI = {}), Velocity("registerSequence", "rotateInUpLeft", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "rotate3d(0,0,1,45deg)",
			transformOrigin: "left bottom"
		},
		"100%": {
			opacity: "1",
			transform: "translate3d(0,0,0)",
			transformOrigin: "left bottom"
		}
	}), (Je = Ut || (Ut = {})).UI || (Je.UI = {}), Velocity("registerSequence", "rotateInUpRight", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "rotate3d(0,0,1,-90deg)",
			transformOrigin: "right bottom"
		},
		"100%": {
			opacity: "1",
			transform: "translate3d(0,0,0)",
			transformOrigin: "right bottom"
		}
	}), (Ze = Ut || (Ut = {})).UI || (Ze.UI = {}), Velocity("registerSequence", "rotateOut", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)",
			transformOrigin: "center"
		},
		"100%": {
			opacity: "0",
			transform: "rotate3d(0,0,1,200deg)",
			transformOrigin: "center"
		}
	}), (Ke = Ut || (Ut = {})).UI || (Ke.UI = {}), Velocity("registerSequence", "rotateOutDownLeft", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)",
			transformOrigin: "left bottom"
		},
		"100%": {
			opacity: "0",
			transform: "rotate3d(0,0,1,45deg)",
			transformOrigin: "left bottom"
		}
	}), (et = Ut || (Ut = {})).UI || (et.UI = {}), Velocity("registerSequence", "rotateOutDownRight", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)",
			transformOrigin: "right bottom"
		},
		"100%": {
			opacity: "0",
			transform: "rotate3d(0,0,1,-45deg)",
			transformOrigin: "right bottom"
		}
	}), (tt = Ut || (Ut = {})).UI || (tt.UI = {}), Velocity("registerSequence", "rotateOutUpLeft", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)",
			transformOrigin: "left bottom"
		},
		"100%": {
			opacity: "0",
			transform: "rotate3d(0,0,1,-45deg)",
			transformOrigin: "left bottom"
		}
	}), (rt = Ut || (Ut = {})).UI || (rt.UI = {}), Velocity("registerSequence", "rotateOutUpRight", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0)",
			transformOrigin: "right bottom"
		},
		"100%": {
			opacity: "0",
			transform: "rotate3d(0,0,1,90deg)",
			transformOrigin: "right bottom"
		}
	}), (nt = Ut || (Ut = {})).UI || (nt.UI = {}), Velocity("registerSequence", "slideInDown", {
		duration: 1e3,
		"0%": {
			transform: "translate3d(0,-100%,0)",
			visibility: "hidden",
			opacity: "0"
		},
		"100%": {
			transform: "translate3d(0,0,0)",
			visibility: "visible",
			opacity: "1"
		}
	}), (at = Ut || (Ut = {})).UI || (at.UI = {}), Velocity("registerSequence", "slideInLeft", {
		duration: 1e3,
		"0%": {
			transform: "translate3d(-100%,0,0)",
			visibility: "hidden",
			opacity: "0"
		},
		"100%": {
			transform: "translate3d(0,0,0)",
			visibility: "visible",
			opacity: "1"
		}
	}), (it = Ut || (Ut = {})).UI || (it.UI = {}), Velocity("registerSequence", "slideInRight", {
		duration: 1e3,
		"0%": {
			transform: "translate3d(100%,0,0)",
			visibility: "hidden",
			opacity: "0"
		},
		"100%": {
			transform: "translate3d(0,0,0)",
			visibility: "visible",
			opacity: "1"
		}
	}), (ot = Ut || (Ut = {})).UI || (ot.UI = {}), Velocity("registerSequence", "slideInUp", {
		duration: 1e3,
		"0%": {
			transform: "translate3d(0,100%,0)",
			visibility: "hidden",
			opacity: "0"
		},
		"100%": {
			transform: "translate3d(0,0,0)",
			visibility: "visible",
			opacity: "1"
		}
	}), (st = Ut || (Ut = {})).UI || (st.UI = {}), Velocity("registerSequence", "slideOutDown", {
		duration: 1e3,
		"0%": {
			transform: "translate3d(0,0,0)",
			visibility: "visible",
			opacity: "1"
		},
		"100%": {
			transform: "translate3d(0,-100%,0)",
			visibility: "hidden",
			opacity: "0"
		}
	}), (lt = Ut || (Ut = {})).UI || (lt.UI = {}), Velocity("registerSequence", "slideOutLeft", {
		duration: 1e3,
		"0%": {
			transform: "translate3d(0,0,0)",
			visibility: "visible",
			opacity: "1"
		},
		"100%": {
			transform: "translate3d(-100%,0,0)",
			visibility: "hidden",
			opacity: "0"
		}
	}), (ut = Ut || (Ut = {})).UI || (ut.UI = {}), Velocity("registerSequence", "slideOutRight", {
		duration: 1e3,
		"0%": {
			transform: "translate3d(0,0,0)",
			visibility: "visible",
			opacity: "1"
		},
		"100%": {
			transform: "translate3d(100%,0,0)",
			visibility: "hidden",
			opacity: "0"
		}
	}), (ct = Ut || (Ut = {})).UI || (ct.UI = {}), Velocity("registerSequence", "slideOutUp", {
		duration: 1e3,
		"0%": {
			transform: "translate3d(0,0,0)",
			visibility: "visible",
			opacity: "1"
		},
		"100%": {
			transform: "translate3d(0,100%,0)",
			visibility: "hidden",
			opacity: "0"
		}
	}), (ft = Ut || (Ut = {})).UI || (ft.UI = {}), Velocity("registerSequence", "hinge", {
		duration: 2e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0) rotate3d(0,0,1,0)",
			transformOrigin: "top left"
		},
		"20%,60%": {
			transform: ["translate3d(0,0,0) rotate3d(0,0,1,80deg)", "easeInOut"]
		},
		"40%,80%": {
			opacity: "1",
			transform: ["translate3d(0,0,0) rotate3d(0,0,1,60deg)", "easeInOut"]
		},
		"100%": {
			opacity: "0",
			transform: ["translate3d(0,700px,0) rotate3d(0,0,1,80deg)", "easeInOut"]
		}
	}), (dt = Ut || (Ut = {})).UI || (dt.UI = {}), Velocity("registerSequence", "jackInTheBox", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "scale(0.1) rotate(30deg)",
			transformOrigin: "center bottom"
		},
		"50%": {
			transform: "scale(0.5) rotate(-10deg)"
		},
		"70%": {
			transform: "scale(0.7) rotate(3deg)"
		},
		"100%": {
			opacity: "1",
			transform: "scale(1) rotate(0)"
		}
	}), (pt = Ut || (Ut = {})).UI || (pt.UI = {}), Velocity("registerSequence", "rollIn", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "translate3d(-100%,0,0) rotate3d(0,0,1,-120deg)"
		},
		"100%": {
			opacity: "1",
			transform: "translate3d(0,0,0) rotate3d(0,0,1,0)"
		}
	}), (gt = Ut || (Ut = {})).UI || (gt.UI = {}), Velocity("registerSequence", "rollOut", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "translate3d(0,0,0) rotate3d(0,0,1,0)"
		},
		"100%": {
			opacity: "0",
			transform: "translate3d(100%,0,0) rotate3d(0,0,1,120deg)"
		}
	}), (mt = Ut || (Ut = {})).UI || (mt.UI = {}), Velocity("registerSequence", "zoomIn", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "scale3d(0.3,0.3,0.3)"
		},
		"50%": {
			opacity: "1"
		},
		"100%": {
			transform: "scale3d(1,1,1)"
		}
	}), (yt = Ut || (Ut = {})).UI || (yt.UI = {}), Velocity("registerSequence", "zoomInDown", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "scale3d(0.1,0.1,0.1) translate3d(0,-1000px,0)"
		},
		"60%": {
			opacity: "1",
			transform: ["scale3d(0.475,0.475,0.475) translate3d(0,60px,0)", "easeInCubic"]
		},
		"100%": {
			transform: ["scale3d(1,1,1) translate3d(0,0,0)", [.175, .885, .32, 1]]
		}
	}), (vt = Ut || (Ut = {})).UI || (vt.UI = {}), Velocity("registerSequence", "zoomInLeft", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "scale3d(0.1,0.1,0.1) translate3d(-1000px,0,0)"
		},
		"60%": {
			opacity: "1",
			transform: ["scale3d(0.475,0.475,0.475) translate3d(10px,0,0)", "easeInCubic"]
		},
		"100%": {
			transform: ["scale3d(1,1,1) translate3d(0,0,0)", [.175, .885, .32, 1]]
		}
	}), (ht = Ut || (Ut = {})).UI || (ht.UI = {}), Velocity("registerSequence", "zoomInRight", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "scale3d(0.1,0.1,0.1) translate3d(1000px,0,0)"
		},
		"60%": {
			opacity: "1",
			transform: ["scale3d(0.475,0.475,0.475) translate3d(-10px,0,0)", "easeInCubic"]
		},
		"100%": {
			transform: ["scale3d(1,1,1) translate3d(0,0,0)", [.175, .885, .32, 1]]
		}
	}), (bt = Ut || (Ut = {})).UI || (bt.UI = {}), Velocity("registerSequence", "zoomInUp", {
		duration: 1e3,
		"0%": {
			opacity: "0",
			transform: "scale3d(0.1,0.1,0.1) translate3d(0,1000px,0)"
		},
		"60%": {
			opacity: "1",
			transform: ["scale3d(0.475,0.475,0.475) translate3d(0,-60px,0)", "easeInCubic"]
		},
		"100%": {
			transform: ["scale3d(1,1,1) translate3d(0,0,0)", [.175, .885, .32, 1]]
		}
	}), (St = Ut || (Ut = {})).UI || (St.UI = {}), Velocity("registerSequence", "zoomOut", {
		duration: 1e3,
		"0%": {
			transform: "scale3d(1,1,1)"
		},
		"50%": {
			opacity: "1"
		},
		"100%": {
			opacity: "0",
			transform: "scale3d(0.3,0.3,0.3)"
		}
	}), (It = Ut || (Ut = {})).UI || (It.UI = {}), Velocity("registerSequence", "zoomOutDown", {
		duration: 1e3,
		"0%": {
			transform: "scale3d(1,1,1) translate3d(0,0,0)"
		},
		"40%": {
			opacity: "1",
			transform: ["scale3d(0.475,0.475,0.475) translate3d(0,60px,0)", [.55, .055, .675, .19]]
		},
		"100%": {
			opacity: "0",
			transform: ["scale3d(0.1,0.1,0.1) translate3d(0,-1000px,0)", [.175, .885, .32, 1]]
		}
	}), (wt = Ut || (Ut = {})).UI || (wt.UI = {}), Velocity("registerSequence", "zoomOutLeft", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "scale(1) translate3d(0,0,0)",
			transformOrigin: "left center"
		},
		"40%": {
			opacity: "1",
			transform: "scale(0.475) translate3d(42px,0,0)"
		},
		"100%": {
			opacity: "0",
			transform: "scale(0.1) translate3d(-2000px,0,0)",
			transformOrigin: "left center"
		}
	}), (xt = Ut || (Ut = {})).UI || (xt.UI = {}), Velocity("registerSequence", "zoomOutRight", {
		duration: 1e3,
		"0%": {
			opacity: "1",
			transform: "scale(1) translate3d(0,0,0)",
			transformOrigin: "right center"
		},
		"40%": {
			opacity: "1",
			transform: "scale(0.475) translate3d(-42px, 0, 0)"
		},
		"100%": {
			opacity: "0",
			transform: "scale(0.1) translate3d(2000px, 0, 0)",
			transformOrigin: "right center"
		}
	}), (Ot = Ut || (Ut = {})).UI || (Ot.UI = {}), Velocity("registerSequence", "zoomOutUp", {
		duration: 1e3,
		"0%": {
			transform: "scale3d(1,1,1) translate3d(0,0,0)"
		},
		"40%": {
			opacity: "1",
			transform: ["scale3d(0.475,0.475,0.475) translate3d(0,-60px,0)", [.55, .055, .675, .19]]
		},
		"100%": {
			opacity: "0",
			transform: ["scale3d(0.1,0.1,0.1) translate3d(0,1000px,0)", [.175, .885, .32, 1]]
		}
	});
	var Gt = function(e) {
		var r = Ut[e];
		o(r) || i(r) || a(r) ? Object.defineProperty(Xt, e, {
			enumerable: t.indexOf(e) >= 0,
			get: function() {
				return Ut[e]
			},
			set: function(t) {
				Ut[e] = t
			}
		}) : Object.defineProperty(Xt, e, {
			enumerable: t.indexOf(e) >= 0,
			get: function() {
				return Ut[e]
			}
		})
	};
	for (var Jt in Ut) Gt(Jt);
	return Xt
});