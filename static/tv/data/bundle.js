'use strict';
var mqtt = (() => {
	var ps = Object.defineProperty;
	var Kg = Object.getOwnPropertyDescriptor;
	var Gg = Object.getOwnPropertyNames;
	var Qg = Object.prototype.hasOwnProperty;
	var we = (t, e) => () => (t && (e = t((t = 0))), e);
	var M = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
		Qt = (t, e) => {
			for (var r in e) ps(t, r, { get: e[r], enumerable: !0 });
		},
		Yg = (t, e, r, i) => {
			if ((e && typeof e == 'object') || typeof e == 'function')
				for (let n of Gg(e))
					!Qg.call(t, n) &&
						n !== r &&
						ps(t, n, { get: () => e[n], enumerable: !(i = Kg(e, n)) || i.enumerable });
			return t;
		};
	var X = (t) => Yg(ps({}, '__esModule', { value: !0 }), t);
	var P,
		_ = we(() => {
			P = { deviceMemory: 8, hardwareConcurrency: 8, language: 'en-US' };
		});
	var B = {};
	Qt(B, {
		_debugEnd: () => yu,
		_debugProcess: () => gu,
		_events: () => ku,
		_eventsCount: () => xu,
		_exiting: () => Yl,
		_fatalExceptions: () => cu,
		_getActiveHandles: () => eu,
		_getActiveRequests: () => Zl,
		_kill: () => ru,
		_linkedBinding: () => Gl,
		_maxListeners: () => Ou,
		_preload_modules: () => Cu,
		_rawDebug: () => zl,
		_startProfilerIdleNotifier: () => bu,
		_stopProfilerIdleNotifier: () => wu,
		_tickCallback: () => pu,
		abort: () => Eu,
		addListener: () => Mu,
		allowedNodeEnvironmentFlags: () => lu,
		arch: () => xl,
		argv: () => Ul,
		argv0: () => Ru,
		assert: () => uu,
		binding: () => Fl,
		chdir: () => Hl,
		config: () => Jl,
		cpuUsage: () => Fi,
		cwd: () => $l,
		debugPort: () => Tu,
		default: () => $u,
		dlopen: () => Xl,
		domain: () => Ql,
		emit: () => Du,
		emitWarning: () => jl,
		env: () => Ll,
		execArgv: () => Nl,
		execPath: () => Iu,
		exit: () => ou,
		features: () => fu,
		hasUncaughtExceptionCaptureCallback: () => du,
		hrtime: () => ji,
		kill: () => su,
		listeners: () => Wu,
		memoryUsage: () => nu,
		moduleLoadList: () => Kl,
		nextTick: () => Pl,
		off: () => Uu,
		on: () => wt,
		once: () => Lu,
		openStdin: () => au,
		pid: () => Su,
		platform: () => Ml,
		ppid: () => Au,
		prependListener: () => ju,
		prependOnceListener: () => Fu,
		reallyExit: () => tu,
		release: () => Vl,
		removeAllListeners: () => qu,
		removeListener: () => Nu,
		resourceUsage: () => iu,
		setSourceMapsEnabled: () => Bu,
		setUncaughtExceptionCaptureCallback: () => hu,
		stderr: () => mu,
		stdin: () => vu,
		stdout: () => _u,
		title: () => kl,
		umask: () => Wl,
		uptime: () => Pu,
		version: () => ql,
		versions: () => Dl,
	});
	function bs(t) {
		throw new Error(
			'Node.js process ' + t + ' is not supported by JSPM core outside of Node.js'
		);
	}
	function Jg() {
		!xr || !Yt || ((xr = !1), Yt.length ? (bt = Yt.concat(bt)) : (Di = -1), bt.length && Bl());
	}
	function Bl() {
		if (!xr) {
			var t = setTimeout(Jg, 0);
			xr = !0;
			for (var e = bt.length; e; ) {
				for (Yt = bt, bt = []; ++Di < e; ) Yt && Yt[Di].run();
				(Di = -1), (e = bt.length);
			}
			(Yt = null), (xr = !1), clearTimeout(t);
		}
	}
	function Pl(t) {
		var e = new Array(arguments.length - 1);
		if (arguments.length > 1)
			for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
		bt.push(new Ol(t, e)), bt.length === 1 && !xr && setTimeout(Bl, 0);
	}
	function Ol(t, e) {
		(this.fun = t), (this.array = e);
	}
	function ve() {}
	function Gl(t) {
		bs('_linkedBinding');
	}
	function Xl(t) {
		bs('dlopen');
	}
	function Zl() {
		return [];
	}
	function eu() {
		return [];
	}
	function uu(t, e) {
		if (!t) throw new Error(e || 'assertion error');
	}
	function du() {
		return !1;
	}
	function Pu() {
		return Lt.now() / 1e3;
	}
	function ji(t) {
		var e = Math.floor((Date.now() - Lt.now()) * 0.001),
			r = Lt.now() * 0.001,
			i = Math.floor(r) + e,
			n = Math.floor((r % 1) * 1e9);
		return t && ((i = i - t[0]), (n = n - t[1]), n < 0 && (i--, (n += ys))), [i, n];
	}
	function wt() {
		return $u;
	}
	function Wu(t) {
		return [];
	}
	var bt,
		xr,
		Yt,
		Di,
		kl,
		xl,
		Ml,
		Ll,
		Ul,
		Nl,
		ql,
		Dl,
		jl,
		Fl,
		Wl,
		$l,
		Hl,
		Vl,
		zl,
		Kl,
		Ql,
		Yl,
		Jl,
		tu,
		ru,
		Fi,
		iu,
		nu,
		su,
		ou,
		au,
		lu,
		fu,
		cu,
		hu,
		pu,
		gu,
		yu,
		bu,
		wu,
		_u,
		mu,
		vu,
		Eu,
		Su,
		Au,
		Iu,
		Tu,
		Ru,
		Cu,
		Bu,
		Lt,
		gs,
		ys,
		Ou,
		ku,
		xu,
		Mu,
		Lu,
		Uu,
		Nu,
		qu,
		Du,
		ju,
		Fu,
		$u,
		Hu = we(() => {
			v();
			m();
			_();
			(bt = []), (xr = !1), (Di = -1);
			Ol.prototype.run = function () {
				this.fun.apply(null, this.array);
			};
			(kl = 'browser'),
				(xl = 'x64'),
				(Ml = 'browser'),
				(Ll = {
					PATH: '/usr/bin',
					LANG: P.language + '.UTF-8',
					PWD: '/',
					HOME: '/home',
					TMP: '/tmp',
				}),
				(Ul = ['/usr/bin/node']),
				(Nl = []),
				(ql = 'v16.8.0'),
				(Dl = {}),
				(jl = function (t, e) {
					console.warn((e ? e + ': ' : '') + t);
				}),
				(Fl = function (t) {
					bs('binding');
				}),
				(Wl = function (t) {
					return 0;
				}),
				($l = function () {
					return '/';
				}),
				(Hl = function (t) {}),
				(Vl = { name: 'node', sourceUrl: '', headersUrl: '', libUrl: '' });
			(zl = ve), (Kl = []);
			(Ql = {}), (Yl = !1), (Jl = {});
			(tu = ve),
				(ru = ve),
				(Fi = function () {
					return {};
				}),
				(iu = Fi),
				(nu = Fi),
				(su = ve),
				(ou = ve),
				(au = ve),
				(lu = {});
			(fu = {
				inspector: !1,
				debug: !1,
				uv: !1,
				ipv6: !1,
				tls_alpn: !1,
				tls_sni: !1,
				tls_ocsp: !1,
				tls: !1,
				cached_builtins: !0,
			}),
				(cu = ve),
				(hu = ve);
			(pu = ve),
				(gu = ve),
				(yu = ve),
				(bu = ve),
				(wu = ve),
				(_u = void 0),
				(mu = void 0),
				(vu = void 0),
				(Eu = ve),
				(Su = 2),
				(Au = 1),
				(Iu = '/bin/usr/node'),
				(Tu = 9229),
				(Ru = 'node'),
				(Cu = []),
				(Bu = ve),
				(Lt = {
					now: typeof performance < 'u' ? performance.now.bind(performance) : void 0,
					timing: typeof performance < 'u' ? performance.timing : void 0,
				});
			Lt.now === void 0 &&
				((gs = Date.now()),
				Lt.timing && Lt.timing.navigationStart && (gs = Lt.timing.navigationStart),
				(Lt.now = () => Date.now() - gs));
			ys = 1e9;
			ji.bigint = function (t) {
				var e = ji(t);
				return typeof BigInt > 'u' ? e[0] * ys + e[1] : BigInt(e[0] * ys) + BigInt(e[1]);
			};
			(Ou = 10), (ku = {}), (xu = 0);
			(Mu = wt), (Lu = wt), (Uu = wt), (Nu = wt), (qu = wt), (Du = ve), (ju = wt), (Fu = wt);
			$u = {
				version: ql,
				versions: Dl,
				arch: xl,
				platform: Ml,
				release: Vl,
				_rawDebug: zl,
				moduleLoadList: Kl,
				binding: Fl,
				_linkedBinding: Gl,
				_events: ku,
				_eventsCount: xu,
				_maxListeners: Ou,
				on: wt,
				addListener: Mu,
				once: Lu,
				off: Uu,
				removeListener: Nu,
				removeAllListeners: qu,
				emit: Du,
				prependListener: ju,
				prependOnceListener: Fu,
				listeners: Wu,
				domain: Ql,
				_exiting: Yl,
				config: Jl,
				dlopen: Xl,
				uptime: Pu,
				_getActiveRequests: Zl,
				_getActiveHandles: eu,
				reallyExit: tu,
				_kill: ru,
				cpuUsage: Fi,
				resourceUsage: iu,
				memoryUsage: nu,
				kill: su,
				exit: ou,
				openStdin: au,
				allowedNodeEnvironmentFlags: lu,
				assert: uu,
				features: fu,
				_fatalExceptions: cu,
				setUncaughtExceptionCaptureCallback: hu,
				hasUncaughtExceptionCaptureCallback: du,
				emitWarning: jl,
				nextTick: Pl,
				_tickCallback: pu,
				_debugProcess: gu,
				_debugEnd: yu,
				_startProfilerIdleNotifier: bu,
				_stopProfilerIdleNotifier: wu,
				stdout: _u,
				stdin: vu,
				stderr: mu,
				abort: Eu,
				umask: Wl,
				chdir: Hl,
				cwd: $l,
				env: Ll,
				title: kl,
				argv: Ul,
				execArgv: Nl,
				pid: Su,
				ppid: Au,
				execPath: Iu,
				debugPort: Tu,
				hrtime: ji,
				argv0: Ru,
				_preload_modules: Cu,
				setSourceMapsEnabled: Bu,
			};
		});
	var m = we(() => {
		Hu();
	});
	var _e = {};
	Qt(_e, {
		Buffer: () => x,
		INSPECT_MAX_BYTES: () => ty,
		default: () => Ut,
		kMaxLength: () => ry,
	});
	function Xg() {
		if (Vu) return ui;
		(Vu = !0), (ui.byteLength = a), (ui.toByteArray = c), (ui.fromByteArray = g);
		for (
			var t = [],
				e = [],
				r = typeof Uint8Array < 'u' ? Uint8Array : Array,
				i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
				n = 0,
				o = i.length;
			n < o;
			++n
		)
			(t[n] = i[n]), (e[i.charCodeAt(n)] = n);
		(e['-'.charCodeAt(0)] = 62), (e['_'.charCodeAt(0)] = 63);
		function s(y) {
			var w = y.length;
			if (w % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
			var E = y.indexOf('=');
			E === -1 && (E = w);
			var S = E === w ? 0 : 4 - (E % 4);
			return [E, S];
		}
		function a(y) {
			var w = s(y),
				E = w[0],
				S = w[1];
			return ((E + S) * 3) / 4 - S;
		}
		function u(y, w, E) {
			return ((w + E) * 3) / 4 - E;
		}
		function c(y) {
			var w,
				E = s(y),
				S = E[0],
				I = E[1],
				C = new r(u(y, S, I)),
				R = 0,
				U = I > 0 ? S - 4 : S,
				N;
			for (N = 0; N < U; N += 4)
				(w =
					(e[y.charCodeAt(N)] << 18) |
					(e[y.charCodeAt(N + 1)] << 12) |
					(e[y.charCodeAt(N + 2)] << 6) |
					e[y.charCodeAt(N + 3)]),
					(C[R++] = (w >> 16) & 255),
					(C[R++] = (w >> 8) & 255),
					(C[R++] = w & 255);
			return (
				I === 2 &&
					((w = (e[y.charCodeAt(N)] << 2) | (e[y.charCodeAt(N + 1)] >> 4)),
					(C[R++] = w & 255)),
				I === 1 &&
					((w =
						(e[y.charCodeAt(N)] << 10) |
						(e[y.charCodeAt(N + 1)] << 4) |
						(e[y.charCodeAt(N + 2)] >> 2)),
					(C[R++] = (w >> 8) & 255),
					(C[R++] = w & 255)),
				C
			);
		}
		function h(y) {
			return t[(y >> 18) & 63] + t[(y >> 12) & 63] + t[(y >> 6) & 63] + t[y & 63];
		}
		function d(y, w, E) {
			for (var S, I = [], C = w; C < E; C += 3)
				(S = ((y[C] << 16) & 16711680) + ((y[C + 1] << 8) & 65280) + (y[C + 2] & 255)),
					I.push(h(S));
			return I.join('');
		}
		function g(y) {
			for (var w, E = y.length, S = E % 3, I = [], C = 16383, R = 0, U = E - S; R < U; R += C)
				I.push(d(y, R, R + C > U ? U : R + C));
			return (
				S === 1
					? ((w = y[E - 1]), I.push(t[w >> 2] + t[(w << 4) & 63] + '=='))
					: S === 2 &&
					  ((w = (y[E - 2] << 8) + y[E - 1]),
					  I.push(t[w >> 10] + t[(w >> 4) & 63] + t[(w << 2) & 63] + '=')),
				I.join('')
			);
		}
		return ui;
	}
	function Zg() {
		if (zu) return Wi;
		zu = !0;
		return (
			(Wi.read = function (t, e, r, i, n) {
				var o,
					s,
					a = n * 8 - i - 1,
					u = (1 << a) - 1,
					c = u >> 1,
					h = -7,
					d = r ? n - 1 : 0,
					g = r ? -1 : 1,
					y = t[e + d];
				for (
					d += g, o = y & ((1 << -h) - 1), y >>= -h, h += a;
					h > 0;
					o = o * 256 + t[e + d], d += g, h -= 8
				);
				for (
					s = o & ((1 << -h) - 1), o >>= -h, h += i;
					h > 0;
					s = s * 256 + t[e + d], d += g, h -= 8
				);
				if (o === 0) o = 1 - c;
				else {
					if (o === u) return s ? NaN : (y ? -1 : 1) * (1 / 0);
					(s = s + Math.pow(2, i)), (o = o - c);
				}
				return (y ? -1 : 1) * s * Math.pow(2, o - i);
			}),
			(Wi.write = function (t, e, r, i, n, o) {
				var s,
					a,
					u,
					c = o * 8 - n - 1,
					h = (1 << c) - 1,
					d = h >> 1,
					g = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
					y = i ? 0 : o - 1,
					w = i ? 1 : -1,
					E = e < 0 || (e === 0 && 1 / e < 0) ? 1 : 0;
				for (
					e = Math.abs(e),
						isNaN(e) || e === 1 / 0
							? ((a = isNaN(e) ? 1 : 0), (s = h))
							: ((s = Math.floor(Math.log(e) / Math.LN2)),
							  e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
							  s + d >= 1 ? (e += g / u) : (e += g * Math.pow(2, 1 - d)),
							  e * u >= 2 && (s++, (u /= 2)),
							  s + d >= h
									? ((a = 0), (s = h))
									: s + d >= 1
									? ((a = (e * u - 1) * Math.pow(2, n)), (s = s + d))
									: ((a = e * Math.pow(2, d - 1) * Math.pow(2, n)), (s = 0)));
					n >= 8;
					t[r + y] = a & 255, y += w, a /= 256, n -= 8
				);
				for (s = (s << n) | a, c += n; c > 0; t[r + y] = s & 255, y += w, s /= 256, c -= 8);
				t[r + y - w] |= E * 128;
			}),
			Wi
		);
	}
	function ey() {
		if (Ku) return Jt;
		Ku = !0;
		let t = Xg(),
			e = Zg(),
			r =
				typeof Symbol == 'function' && typeof Symbol.for == 'function'
					? Symbol.for('nodejs.util.inspect.custom')
					: null;
		(Jt.Buffer = s), (Jt.SlowBuffer = I), (Jt.INSPECT_MAX_BYTES = 50);
		let i = 2147483647;
		(Jt.kMaxLength = i),
			(s.TYPED_ARRAY_SUPPORT = n()),
			!s.TYPED_ARRAY_SUPPORT &&
				typeof console < 'u' &&
				typeof console.error == 'function' &&
				console.error(
					'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
				);
		function n() {
			try {
				let p = new Uint8Array(1),
					l = {
						foo: function () {
							return 42;
						},
					};
				return (
					Object.setPrototypeOf(l, Uint8Array.prototype),
					Object.setPrototypeOf(p, l),
					p.foo() === 42
				);
			} catch {
				return !1;
			}
		}
		Object.defineProperty(s.prototype, 'parent', {
			enumerable: !0,
			get: function () {
				if (s.isBuffer(this)) return this.buffer;
			},
		}),
			Object.defineProperty(s.prototype, 'offset', {
				enumerable: !0,
				get: function () {
					if (s.isBuffer(this)) return this.byteOffset;
				},
			});
		function o(p) {
			if (p > i) throw new RangeError('The value "' + p + '" is invalid for option "size"');
			let l = new Uint8Array(p);
			return Object.setPrototypeOf(l, s.prototype), l;
		}
		function s(p, l, f) {
			if (typeof p == 'number') {
				if (typeof l == 'string')
					throw new TypeError(
						'The "string" argument must be of type string. Received type number'
					);
				return h(p);
			}
			return a(p, l, f);
		}
		s.poolSize = 8192;
		function a(p, l, f) {
			if (typeof p == 'string') return d(p, l);
			if (ArrayBuffer.isView(p)) return y(p);
			if (p == null)
				throw new TypeError(
					'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
						typeof p
				);
			if (
				Ye(p, ArrayBuffer) ||
				(p && Ye(p.buffer, ArrayBuffer)) ||
				(typeof SharedArrayBuffer < 'u' &&
					(Ye(p, SharedArrayBuffer) || (p && Ye(p.buffer, SharedArrayBuffer))))
			)
				return w(p, l, f);
			if (typeof p == 'number')
				throw new TypeError(
					'The "value" argument must not be of type number. Received type number'
				);
			let b = p.valueOf && p.valueOf();
			if (b != null && b !== p) return s.from(b, l, f);
			let A = E(p);
			if (A) return A;
			if (
				typeof Symbol < 'u' &&
				Symbol.toPrimitive != null &&
				typeof p[Symbol.toPrimitive] == 'function'
			)
				return s.from(p[Symbol.toPrimitive]('string'), l, f);
			throw new TypeError(
				'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
					typeof p
			);
		}
		(s.from = function (p, l, f) {
			return a(p, l, f);
		}),
			Object.setPrototypeOf(s.prototype, Uint8Array.prototype),
			Object.setPrototypeOf(s, Uint8Array);
		function u(p) {
			if (typeof p != 'number') throw new TypeError('"size" argument must be of type number');
			if (p < 0) throw new RangeError('The value "' + p + '" is invalid for option "size"');
		}
		function c(p, l, f) {
			return (
				u(p),
				p <= 0
					? o(p)
					: l !== void 0
					? typeof f == 'string'
						? o(p).fill(l, f)
						: o(p).fill(l)
					: o(p)
			);
		}
		s.alloc = function (p, l, f) {
			return c(p, l, f);
		};
		function h(p) {
			return u(p), o(p < 0 ? 0 : S(p) | 0);
		}
		(s.allocUnsafe = function (p) {
			return h(p);
		}),
			(s.allocUnsafeSlow = function (p) {
				return h(p);
			});
		function d(p, l) {
			if (((typeof l != 'string' || l === '') && (l = 'utf8'), !s.isEncoding(l)))
				throw new TypeError('Unknown encoding: ' + l);
			let f = C(p, l) | 0,
				b = o(f),
				A = b.write(p, l);
			return A !== f && (b = b.slice(0, A)), b;
		}
		function g(p) {
			let l = p.length < 0 ? 0 : S(p.length) | 0,
				f = o(l);
			for (let b = 0; b < l; b += 1) f[b] = p[b] & 255;
			return f;
		}
		function y(p) {
			if (Ye(p, Uint8Array)) {
				let l = new Uint8Array(p);
				return w(l.buffer, l.byteOffset, l.byteLength);
			}
			return g(p);
		}
		function w(p, l, f) {
			if (l < 0 || p.byteLength < l)
				throw new RangeError('"offset" is outside of buffer bounds');
			if (p.byteLength < l + (f || 0))
				throw new RangeError('"length" is outside of buffer bounds');
			let b;
			return (
				l === void 0 && f === void 0
					? (b = new Uint8Array(p))
					: f === void 0
					? (b = new Uint8Array(p, l))
					: (b = new Uint8Array(p, l, f)),
				Object.setPrototypeOf(b, s.prototype),
				b
			);
		}
		function E(p) {
			if (s.isBuffer(p)) {
				let l = S(p.length) | 0,
					f = o(l);
				return f.length === 0 || p.copy(f, 0, 0, l), f;
			}
			if (p.length !== void 0)
				return typeof p.length != 'number' || ds(p.length) ? o(0) : g(p);
			if (p.type === 'Buffer' && Array.isArray(p.data)) return g(p.data);
		}
		function S(p) {
			if (p >= i)
				throw new RangeError(
					'Attempt to allocate Buffer larger than maximum size: 0x' +
						i.toString(16) +
						' bytes'
				);
			return p | 0;
		}
		function I(p) {
			return +p != p && (p = 0), s.alloc(+p);
		}
		(s.isBuffer = function (l) {
			return l != null && l._isBuffer === !0 && l !== s.prototype;
		}),
			(s.compare = function (l, f) {
				if (
					(Ye(l, Uint8Array) && (l = s.from(l, l.offset, l.byteLength)),
					Ye(f, Uint8Array) && (f = s.from(f, f.offset, f.byteLength)),
					!s.isBuffer(l) || !s.isBuffer(f))
				)
					throw new TypeError(
						'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
					);
				if (l === f) return 0;
				let b = l.length,
					A = f.length;
				for (let T = 0, O = Math.min(b, A); T < O; ++T)
					if (l[T] !== f[T]) {
						(b = l[T]), (A = f[T]);
						break;
					}
				return b < A ? -1 : A < b ? 1 : 0;
			}),
			(s.isEncoding = function (l) {
				switch (String(l).toLowerCase()) {
					case 'hex':
					case 'utf8':
					case 'utf-8':
					case 'ascii':
					case 'latin1':
					case 'binary':
					case 'base64':
					case 'ucs2':
					case 'ucs-2':
					case 'utf16le':
					case 'utf-16le':
						return !0;
					default:
						return !1;
				}
			}),
			(s.concat = function (l, f) {
				if (!Array.isArray(l))
					throw new TypeError('"list" argument must be an Array of Buffers');
				if (l.length === 0) return s.alloc(0);
				let b;
				if (f === void 0) for (f = 0, b = 0; b < l.length; ++b) f += l[b].length;
				let A = s.allocUnsafe(f),
					T = 0;
				for (b = 0; b < l.length; ++b) {
					let O = l[b];
					if (Ye(O, Uint8Array))
						T + O.length > A.length
							? (s.isBuffer(O) || (O = s.from(O)), O.copy(A, T))
							: Uint8Array.prototype.set.call(A, O, T);
					else if (s.isBuffer(O)) O.copy(A, T);
					else throw new TypeError('"list" argument must be an Array of Buffers');
					T += O.length;
				}
				return A;
			});
		function C(p, l) {
			if (s.isBuffer(p)) return p.length;
			if (ArrayBuffer.isView(p) || Ye(p, ArrayBuffer)) return p.byteLength;
			if (typeof p != 'string')
				throw new TypeError(
					'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
						typeof p
				);
			let f = p.length,
				b = arguments.length > 2 && arguments[2] === !0;
			if (!b && f === 0) return 0;
			let A = !1;
			for (;;)
				switch (l) {
					case 'ascii':
					case 'latin1':
					case 'binary':
						return f;
					case 'utf8':
					case 'utf-8':
						return hs(p).length;
					case 'ucs2':
					case 'ucs-2':
					case 'utf16le':
					case 'utf-16le':
						return f * 2;
					case 'hex':
						return f >>> 1;
					case 'base64':
						return Cl(p).length;
					default:
						if (A) return b ? -1 : hs(p).length;
						(l = ('' + l).toLowerCase()), (A = !0);
				}
		}
		s.byteLength = C;
		function R(p, l, f) {
			let b = !1;
			if (
				((l === void 0 || l < 0) && (l = 0),
				l > this.length ||
					((f === void 0 || f > this.length) && (f = this.length), f <= 0) ||
					((f >>>= 0), (l >>>= 0), f <= l))
			)
				return '';
			for (p || (p = 'utf8'); ; )
				switch (p) {
					case 'hex':
						return qg(this, l, f);
					case 'utf8':
					case 'utf-8':
						return Cr(this, l, f);
					case 'ascii':
						return fs(this, l, f);
					case 'latin1':
					case 'binary':
						return Ng(this, l, f);
					case 'base64':
						return pe(this, l, f);
					case 'ucs2':
					case 'ucs-2':
					case 'utf16le':
					case 'utf-16le':
						return Dg(this, l, f);
					default:
						if (b) throw new TypeError('Unknown encoding: ' + p);
						(p = (p + '').toLowerCase()), (b = !0);
				}
		}
		s.prototype._isBuffer = !0;
		function U(p, l, f) {
			let b = p[l];
			(p[l] = p[f]), (p[f] = b);
		}
		(s.prototype.swap16 = function () {
			let l = this.length;
			if (l % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
			for (let f = 0; f < l; f += 2) U(this, f, f + 1);
			return this;
		}),
			(s.prototype.swap32 = function () {
				let l = this.length;
				if (l % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
				for (let f = 0; f < l; f += 4) U(this, f, f + 3), U(this, f + 1, f + 2);
				return this;
			}),
			(s.prototype.swap64 = function () {
				let l = this.length;
				if (l % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
				for (let f = 0; f < l; f += 8)
					U(this, f, f + 7),
						U(this, f + 1, f + 6),
						U(this, f + 2, f + 5),
						U(this, f + 3, f + 4);
				return this;
			}),
			(s.prototype.toString = function () {
				let l = this.length;
				return l === 0
					? ''
					: arguments.length === 0
					? Cr(this, 0, l)
					: R.apply(this, arguments);
			}),
			(s.prototype.toLocaleString = s.prototype.toString),
			(s.prototype.equals = function (l) {
				if (!s.isBuffer(l)) throw new TypeError('Argument must be a Buffer');
				return this === l ? !0 : s.compare(this, l) === 0;
			}),
			(s.prototype.inspect = function () {
				let l = '',
					f = Jt.INSPECT_MAX_BYTES;
				return (
					(l = this.toString('hex', 0, f)
						.replace(/(.{2})/g, '$1 ')
						.trim()),
					this.length > f && (l += ' ... '),
					'<Buffer ' + l + '>'
				);
			}),
			r && (s.prototype[r] = s.prototype.inspect),
			(s.prototype.compare = function (l, f, b, A, T) {
				if ((Ye(l, Uint8Array) && (l = s.from(l, l.offset, l.byteLength)), !s.isBuffer(l)))
					throw new TypeError(
						'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
							typeof l
					);
				if (
					(f === void 0 && (f = 0),
					b === void 0 && (b = l ? l.length : 0),
					A === void 0 && (A = 0),
					T === void 0 && (T = this.length),
					f < 0 || b > l.length || A < 0 || T > this.length)
				)
					throw new RangeError('out of range index');
				if (A >= T && f >= b) return 0;
				if (A >= T) return -1;
				if (f >= b) return 1;
				if (((f >>>= 0), (b >>>= 0), (A >>>= 0), (T >>>= 0), this === l)) return 0;
				let O = T - A,
					$ = b - f,
					se = Math.min(O, $),
					te = this.slice(A, T),
					oe = l.slice(f, b);
				for (let J = 0; J < se; ++J)
					if (te[J] !== oe[J]) {
						(O = te[J]), ($ = oe[J]);
						break;
					}
				return O < $ ? -1 : $ < O ? 1 : 0;
			});
		function N(p, l, f, b, A) {
			if (p.length === 0) return -1;
			if (
				(typeof f == 'string'
					? ((b = f), (f = 0))
					: f > 2147483647
					? (f = 2147483647)
					: f < -2147483648 && (f = -2147483648),
				(f = +f),
				ds(f) && (f = A ? 0 : p.length - 1),
				f < 0 && (f = p.length + f),
				f >= p.length)
			) {
				if (A) return -1;
				f = p.length - 1;
			} else if (f < 0)
				if (A) f = 0;
				else return -1;
			if ((typeof l == 'string' && (l = s.from(l, b)), s.isBuffer(l)))
				return l.length === 0 ? -1 : W(p, l, f, b, A);
			if (typeof l == 'number')
				return (
					(l = l & 255),
					typeof Uint8Array.prototype.indexOf == 'function'
						? A
							? Uint8Array.prototype.indexOf.call(p, l, f)
							: Uint8Array.prototype.lastIndexOf.call(p, l, f)
						: W(p, [l], f, b, A)
				);
			throw new TypeError('val must be string, number or Buffer');
		}
		function W(p, l, f, b, A) {
			let T = 1,
				O = p.length,
				$ = l.length;
			if (
				b !== void 0 &&
				((b = String(b).toLowerCase()),
				b === 'ucs2' || b === 'ucs-2' || b === 'utf16le' || b === 'utf-16le')
			) {
				if (p.length < 2 || l.length < 2) return -1;
				(T = 2), (O /= 2), ($ /= 2), (f /= 2);
			}
			function se(oe, J) {
				return T === 1 ? oe[J] : oe.readUInt16BE(J * T);
			}
			let te;
			if (A) {
				let oe = -1;
				for (te = f; te < O; te++)
					if (se(p, te) === se(l, oe === -1 ? 0 : te - oe)) {
						if ((oe === -1 && (oe = te), te - oe + 1 === $)) return oe * T;
					} else oe !== -1 && (te -= te - oe), (oe = -1);
			} else
				for (f + $ > O && (f = O - $), te = f; te >= 0; te--) {
					let oe = !0;
					for (let J = 0; J < $; J++)
						if (se(p, te + J) !== se(l, J)) {
							oe = !1;
							break;
						}
					if (oe) return te;
				}
			return -1;
		}
		(s.prototype.includes = function (l, f, b) {
			return this.indexOf(l, f, b) !== -1;
		}),
			(s.prototype.indexOf = function (l, f, b) {
				return N(this, l, f, b, !0);
			}),
			(s.prototype.lastIndexOf = function (l, f, b) {
				return N(this, l, f, b, !1);
			});
		function K(p, l, f, b) {
			f = Number(f) || 0;
			let A = p.length - f;
			b ? ((b = Number(b)), b > A && (b = A)) : (b = A);
			let T = l.length;
			b > T / 2 && (b = T / 2);
			let O;
			for (O = 0; O < b; ++O) {
				let $ = parseInt(l.substr(O * 2, 2), 16);
				if (ds($)) return O;
				p[f + O] = $;
			}
			return O;
		}
		function z(p, l, f, b) {
			return qi(hs(l, p.length - f), p, f, b);
		}
		function Q(p, l, f, b) {
			return qi($g(l), p, f, b);
		}
		function de(p, l, f, b) {
			return qi(Cl(l), p, f, b);
		}
		function Gt(p, l, f, b) {
			return qi(Hg(l, p.length - f), p, f, b);
		}
		(s.prototype.write = function (l, f, b, A) {
			if (f === void 0) (A = 'utf8'), (b = this.length), (f = 0);
			else if (b === void 0 && typeof f == 'string') (A = f), (b = this.length), (f = 0);
			else if (isFinite(f))
				(f = f >>> 0),
					isFinite(b)
						? ((b = b >>> 0), A === void 0 && (A = 'utf8'))
						: ((A = b), (b = void 0));
			else
				throw new Error(
					'Buffer.write(string, encoding, offset[, length]) is no longer supported'
				);
			let T = this.length - f;
			if (
				((b === void 0 || b > T) && (b = T),
				(l.length > 0 && (b < 0 || f < 0)) || f > this.length)
			)
				throw new RangeError('Attempt to write outside buffer bounds');
			A || (A = 'utf8');
			let O = !1;
			for (;;)
				switch (A) {
					case 'hex':
						return K(this, l, f, b);
					case 'utf8':
					case 'utf-8':
						return z(this, l, f, b);
					case 'ascii':
					case 'latin1':
					case 'binary':
						return Q(this, l, f, b);
					case 'base64':
						return de(this, l, f, b);
					case 'ucs2':
					case 'ucs-2':
					case 'utf16le':
					case 'utf-16le':
						return Gt(this, l, f, b);
					default:
						if (O) throw new TypeError('Unknown encoding: ' + A);
						(A = ('' + A).toLowerCase()), (O = !0);
				}
		}),
			(s.prototype.toJSON = function () {
				return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
			});
		function pe(p, l, f) {
			return l === 0 && f === p.length ? t.fromByteArray(p) : t.fromByteArray(p.slice(l, f));
		}
		function Cr(p, l, f) {
			f = Math.min(p.length, f);
			let b = [],
				A = l;
			for (; A < f; ) {
				let T = p[A],
					O = null,
					$ = T > 239 ? 4 : T > 223 ? 3 : T > 191 ? 2 : 1;
				if (A + $ <= f) {
					let se, te, oe, J;
					switch ($) {
						case 1:
							T < 128 && (O = T);
							break;
						case 2:
							(se = p[A + 1]),
								(se & 192) === 128 &&
									((J = ((T & 31) << 6) | (se & 63)), J > 127 && (O = J));
							break;
						case 3:
							(se = p[A + 1]),
								(te = p[A + 2]),
								(se & 192) === 128 &&
									(te & 192) === 128 &&
									((J = ((T & 15) << 12) | ((se & 63) << 6) | (te & 63)),
									J > 2047 && (J < 55296 || J > 57343) && (O = J));
							break;
						case 4:
							(se = p[A + 1]),
								(te = p[A + 2]),
								(oe = p[A + 3]),
								(se & 192) === 128 &&
									(te & 192) === 128 &&
									(oe & 192) === 128 &&
									((J =
										((T & 15) << 18) |
										((se & 63) << 12) |
										((te & 63) << 6) |
										(oe & 63)),
									J > 65535 && J < 1114112 && (O = J));
					}
				}
				O === null
					? ((O = 65533), ($ = 1))
					: O > 65535 &&
					  ((O -= 65536), b.push(((O >>> 10) & 1023) | 55296), (O = 56320 | (O & 1023))),
					b.push(O),
					(A += $);
			}
			return Pr(b);
		}
		let Br = 4096;
		function Pr(p) {
			let l = p.length;
			if (l <= Br) return String.fromCharCode.apply(String, p);
			let f = '',
				b = 0;
			for (; b < l; ) f += String.fromCharCode.apply(String, p.slice(b, (b += Br)));
			return f;
		}
		function fs(p, l, f) {
			let b = '';
			f = Math.min(p.length, f);
			for (let A = l; A < f; ++A) b += String.fromCharCode(p[A] & 127);
			return b;
		}
		function Ng(p, l, f) {
			let b = '';
			f = Math.min(p.length, f);
			for (let A = l; A < f; ++A) b += String.fromCharCode(p[A]);
			return b;
		}
		function qg(p, l, f) {
			let b = p.length;
			(!l || l < 0) && (l = 0), (!f || f < 0 || f > b) && (f = b);
			let A = '';
			for (let T = l; T < f; ++T) A += Vg[p[T]];
			return A;
		}
		function Dg(p, l, f) {
			let b = p.slice(l, f),
				A = '';
			for (let T = 0; T < b.length - 1; T += 2)
				A += String.fromCharCode(b[T] + b[T + 1] * 256);
			return A;
		}
		s.prototype.slice = function (l, f) {
			let b = this.length;
			(l = ~~l),
				(f = f === void 0 ? b : ~~f),
				l < 0 ? ((l += b), l < 0 && (l = 0)) : l > b && (l = b),
				f < 0 ? ((f += b), f < 0 && (f = 0)) : f > b && (f = b),
				f < l && (f = l);
			let A = this.subarray(l, f);
			return Object.setPrototypeOf(A, s.prototype), A;
		};
		function ge(p, l, f) {
			if (p % 1 !== 0 || p < 0) throw new RangeError('offset is not uint');
			if (p + l > f) throw new RangeError('Trying to access beyond buffer length');
		}
		(s.prototype.readUintLE = s.prototype.readUIntLE =
			function (l, f, b) {
				(l = l >>> 0), (f = f >>> 0), b || ge(l, f, this.length);
				let A = this[l],
					T = 1,
					O = 0;
				for (; ++O < f && (T *= 256); ) A += this[l + O] * T;
				return A;
			}),
			(s.prototype.readUintBE = s.prototype.readUIntBE =
				function (l, f, b) {
					(l = l >>> 0), (f = f >>> 0), b || ge(l, f, this.length);
					let A = this[l + --f],
						T = 1;
					for (; f > 0 && (T *= 256); ) A += this[l + --f] * T;
					return A;
				}),
			(s.prototype.readUint8 = s.prototype.readUInt8 =
				function (l, f) {
					return (l = l >>> 0), f || ge(l, 1, this.length), this[l];
				}),
			(s.prototype.readUint16LE = s.prototype.readUInt16LE =
				function (l, f) {
					return (l = l >>> 0), f || ge(l, 2, this.length), this[l] | (this[l + 1] << 8);
				}),
			(s.prototype.readUint16BE = s.prototype.readUInt16BE =
				function (l, f) {
					return (l = l >>> 0), f || ge(l, 2, this.length), (this[l] << 8) | this[l + 1];
				}),
			(s.prototype.readUint32LE = s.prototype.readUInt32LE =
				function (l, f) {
					return (
						(l = l >>> 0),
						f || ge(l, 4, this.length),
						(this[l] | (this[l + 1] << 8) | (this[l + 2] << 16)) +
							this[l + 3] * 16777216
					);
				}),
			(s.prototype.readUint32BE = s.prototype.readUInt32BE =
				function (l, f) {
					return (
						(l = l >>> 0),
						f || ge(l, 4, this.length),
						this[l] * 16777216 +
							((this[l + 1] << 16) | (this[l + 2] << 8) | this[l + 3])
					);
				}),
			(s.prototype.readBigUInt64LE = Mt(function (l) {
				(l = l >>> 0), kr(l, 'offset');
				let f = this[l],
					b = this[l + 7];
				(f === void 0 || b === void 0) && li(l, this.length - 8);
				let A = f + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24,
					T = this[++l] + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + b * 2 ** 24;
				return BigInt(A) + (BigInt(T) << BigInt(32));
			})),
			(s.prototype.readBigUInt64BE = Mt(function (l) {
				(l = l >>> 0), kr(l, 'offset');
				let f = this[l],
					b = this[l + 7];
				(f === void 0 || b === void 0) && li(l, this.length - 8);
				let A = f * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l],
					T = this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + b;
				return (BigInt(A) << BigInt(32)) + BigInt(T);
			})),
			(s.prototype.readIntLE = function (l, f, b) {
				(l = l >>> 0), (f = f >>> 0), b || ge(l, f, this.length);
				let A = this[l],
					T = 1,
					O = 0;
				for (; ++O < f && (T *= 256); ) A += this[l + O] * T;
				return (T *= 128), A >= T && (A -= Math.pow(2, 8 * f)), A;
			}),
			(s.prototype.readIntBE = function (l, f, b) {
				(l = l >>> 0), (f = f >>> 0), b || ge(l, f, this.length);
				let A = f,
					T = 1,
					O = this[l + --A];
				for (; A > 0 && (T *= 256); ) O += this[l + --A] * T;
				return (T *= 128), O >= T && (O -= Math.pow(2, 8 * f)), O;
			}),
			(s.prototype.readInt8 = function (l, f) {
				return (
					(l = l >>> 0),
					f || ge(l, 1, this.length),
					this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l]
				);
			}),
			(s.prototype.readInt16LE = function (l, f) {
				(l = l >>> 0), f || ge(l, 2, this.length);
				let b = this[l] | (this[l + 1] << 8);
				return b & 32768 ? b | 4294901760 : b;
			}),
			(s.prototype.readInt16BE = function (l, f) {
				(l = l >>> 0), f || ge(l, 2, this.length);
				let b = this[l + 1] | (this[l] << 8);
				return b & 32768 ? b | 4294901760 : b;
			}),
			(s.prototype.readInt32LE = function (l, f) {
				return (
					(l = l >>> 0),
					f || ge(l, 4, this.length),
					this[l] | (this[l + 1] << 8) | (this[l + 2] << 16) | (this[l + 3] << 24)
				);
			}),
			(s.prototype.readInt32BE = function (l, f) {
				return (
					(l = l >>> 0),
					f || ge(l, 4, this.length),
					(this[l] << 24) | (this[l + 1] << 16) | (this[l + 2] << 8) | this[l + 3]
				);
			}),
			(s.prototype.readBigInt64LE = Mt(function (l) {
				(l = l >>> 0), kr(l, 'offset');
				let f = this[l],
					b = this[l + 7];
				(f === void 0 || b === void 0) && li(l, this.length - 8);
				let A = this[l + 4] + this[l + 5] * 2 ** 8 + this[l + 6] * 2 ** 16 + (b << 24);
				return (
					(BigInt(A) << BigInt(32)) +
					BigInt(f + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24)
				);
			})),
			(s.prototype.readBigInt64BE = Mt(function (l) {
				(l = l >>> 0), kr(l, 'offset');
				let f = this[l],
					b = this[l + 7];
				(f === void 0 || b === void 0) && li(l, this.length - 8);
				let A = (f << 24) + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l];
				return (
					(BigInt(A) << BigInt(32)) +
					BigInt(this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + b)
				);
			})),
			(s.prototype.readFloatLE = function (l, f) {
				return (l = l >>> 0), f || ge(l, 4, this.length), e.read(this, l, !0, 23, 4);
			}),
			(s.prototype.readFloatBE = function (l, f) {
				return (l = l >>> 0), f || ge(l, 4, this.length), e.read(this, l, !1, 23, 4);
			}),
			(s.prototype.readDoubleLE = function (l, f) {
				return (l = l >>> 0), f || ge(l, 8, this.length), e.read(this, l, !0, 52, 8);
			}),
			(s.prototype.readDoubleBE = function (l, f) {
				return (l = l >>> 0), f || ge(l, 8, this.length), e.read(this, l, !1, 52, 8);
			});
		function Ce(p, l, f, b, A, T) {
			if (!s.isBuffer(p)) throw new TypeError('"buffer" argument must be a Buffer instance');
			if (l > A || l < T) throw new RangeError('"value" argument is out of bounds');
			if (f + b > p.length) throw new RangeError('Index out of range');
		}
		(s.prototype.writeUintLE = s.prototype.writeUIntLE =
			function (l, f, b, A) {
				if (((l = +l), (f = f >>> 0), (b = b >>> 0), !A)) {
					let $ = Math.pow(2, 8 * b) - 1;
					Ce(this, l, f, b, $, 0);
				}
				let T = 1,
					O = 0;
				for (this[f] = l & 255; ++O < b && (T *= 256); ) this[f + O] = (l / T) & 255;
				return f + b;
			}),
			(s.prototype.writeUintBE = s.prototype.writeUIntBE =
				function (l, f, b, A) {
					if (((l = +l), (f = f >>> 0), (b = b >>> 0), !A)) {
						let $ = Math.pow(2, 8 * b) - 1;
						Ce(this, l, f, b, $, 0);
					}
					let T = b - 1,
						O = 1;
					for (this[f + T] = l & 255; --T >= 0 && (O *= 256); )
						this[f + T] = (l / O) & 255;
					return f + b;
				}),
			(s.prototype.writeUint8 = s.prototype.writeUInt8 =
				function (l, f, b) {
					return (
						(l = +l),
						(f = f >>> 0),
						b || Ce(this, l, f, 1, 255, 0),
						(this[f] = l & 255),
						f + 1
					);
				}),
			(s.prototype.writeUint16LE = s.prototype.writeUInt16LE =
				function (l, f, b) {
					return (
						(l = +l),
						(f = f >>> 0),
						b || Ce(this, l, f, 2, 65535, 0),
						(this[f] = l & 255),
						(this[f + 1] = l >>> 8),
						f + 2
					);
				}),
			(s.prototype.writeUint16BE = s.prototype.writeUInt16BE =
				function (l, f, b) {
					return (
						(l = +l),
						(f = f >>> 0),
						b || Ce(this, l, f, 2, 65535, 0),
						(this[f] = l >>> 8),
						(this[f + 1] = l & 255),
						f + 2
					);
				}),
			(s.prototype.writeUint32LE = s.prototype.writeUInt32LE =
				function (l, f, b) {
					return (
						(l = +l),
						(f = f >>> 0),
						b || Ce(this, l, f, 4, 4294967295, 0),
						(this[f + 3] = l >>> 24),
						(this[f + 2] = l >>> 16),
						(this[f + 1] = l >>> 8),
						(this[f] = l & 255),
						f + 4
					);
				}),
			(s.prototype.writeUint32BE = s.prototype.writeUInt32BE =
				function (l, f, b) {
					return (
						(l = +l),
						(f = f >>> 0),
						b || Ce(this, l, f, 4, 4294967295, 0),
						(this[f] = l >>> 24),
						(this[f + 1] = l >>> 16),
						(this[f + 2] = l >>> 8),
						(this[f + 3] = l & 255),
						f + 4
					);
				});
		function vl(p, l, f, b, A) {
			Rl(l, b, A, p, f, 7);
			let T = Number(l & BigInt(4294967295));
			(p[f++] = T),
				(T = T >> 8),
				(p[f++] = T),
				(T = T >> 8),
				(p[f++] = T),
				(T = T >> 8),
				(p[f++] = T);
			let O = Number((l >> BigInt(32)) & BigInt(4294967295));
			return (
				(p[f++] = O),
				(O = O >> 8),
				(p[f++] = O),
				(O = O >> 8),
				(p[f++] = O),
				(O = O >> 8),
				(p[f++] = O),
				f
			);
		}
		function El(p, l, f, b, A) {
			Rl(l, b, A, p, f, 7);
			let T = Number(l & BigInt(4294967295));
			(p[f + 7] = T),
				(T = T >> 8),
				(p[f + 6] = T),
				(T = T >> 8),
				(p[f + 5] = T),
				(T = T >> 8),
				(p[f + 4] = T);
			let O = Number((l >> BigInt(32)) & BigInt(4294967295));
			return (
				(p[f + 3] = O),
				(O = O >> 8),
				(p[f + 2] = O),
				(O = O >> 8),
				(p[f + 1] = O),
				(O = O >> 8),
				(p[f] = O),
				f + 8
			);
		}
		(s.prototype.writeBigUInt64LE = Mt(function (l, f = 0) {
			return vl(this, l, f, BigInt(0), BigInt('0xffffffffffffffff'));
		})),
			(s.prototype.writeBigUInt64BE = Mt(function (l, f = 0) {
				return El(this, l, f, BigInt(0), BigInt('0xffffffffffffffff'));
			})),
			(s.prototype.writeIntLE = function (l, f, b, A) {
				if (((l = +l), (f = f >>> 0), !A)) {
					let se = Math.pow(2, 8 * b - 1);
					Ce(this, l, f, b, se - 1, -se);
				}
				let T = 0,
					O = 1,
					$ = 0;
				for (this[f] = l & 255; ++T < b && (O *= 256); )
					l < 0 && $ === 0 && this[f + T - 1] !== 0 && ($ = 1),
						(this[f + T] = (((l / O) >> 0) - $) & 255);
				return f + b;
			}),
			(s.prototype.writeIntBE = function (l, f, b, A) {
				if (((l = +l), (f = f >>> 0), !A)) {
					let se = Math.pow(2, 8 * b - 1);
					Ce(this, l, f, b, se - 1, -se);
				}
				let T = b - 1,
					O = 1,
					$ = 0;
				for (this[f + T] = l & 255; --T >= 0 && (O *= 256); )
					l < 0 && $ === 0 && this[f + T + 1] !== 0 && ($ = 1),
						(this[f + T] = (((l / O) >> 0) - $) & 255);
				return f + b;
			}),
			(s.prototype.writeInt8 = function (l, f, b) {
				return (
					(l = +l),
					(f = f >>> 0),
					b || Ce(this, l, f, 1, 127, -128),
					l < 0 && (l = 255 + l + 1),
					(this[f] = l & 255),
					f + 1
				);
			}),
			(s.prototype.writeInt16LE = function (l, f, b) {
				return (
					(l = +l),
					(f = f >>> 0),
					b || Ce(this, l, f, 2, 32767, -32768),
					(this[f] = l & 255),
					(this[f + 1] = l >>> 8),
					f + 2
				);
			}),
			(s.prototype.writeInt16BE = function (l, f, b) {
				return (
					(l = +l),
					(f = f >>> 0),
					b || Ce(this, l, f, 2, 32767, -32768),
					(this[f] = l >>> 8),
					(this[f + 1] = l & 255),
					f + 2
				);
			}),
			(s.prototype.writeInt32LE = function (l, f, b) {
				return (
					(l = +l),
					(f = f >>> 0),
					b || Ce(this, l, f, 4, 2147483647, -2147483648),
					(this[f] = l & 255),
					(this[f + 1] = l >>> 8),
					(this[f + 2] = l >>> 16),
					(this[f + 3] = l >>> 24),
					f + 4
				);
			}),
			(s.prototype.writeInt32BE = function (l, f, b) {
				return (
					(l = +l),
					(f = f >>> 0),
					b || Ce(this, l, f, 4, 2147483647, -2147483648),
					l < 0 && (l = 4294967295 + l + 1),
					(this[f] = l >>> 24),
					(this[f + 1] = l >>> 16),
					(this[f + 2] = l >>> 8),
					(this[f + 3] = l & 255),
					f + 4
				);
			}),
			(s.prototype.writeBigInt64LE = Mt(function (l, f = 0) {
				return vl(this, l, f, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
			})),
			(s.prototype.writeBigInt64BE = Mt(function (l, f = 0) {
				return El(this, l, f, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
			}));
		function Sl(p, l, f, b, A, T) {
			if (f + b > p.length) throw new RangeError('Index out of range');
			if (f < 0) throw new RangeError('Index out of range');
		}
		function Al(p, l, f, b, A) {
			return (l = +l), (f = f >>> 0), A || Sl(p, l, f, 4), e.write(p, l, f, b, 23, 4), f + 4;
		}
		(s.prototype.writeFloatLE = function (l, f, b) {
			return Al(this, l, f, !0, b);
		}),
			(s.prototype.writeFloatBE = function (l, f, b) {
				return Al(this, l, f, !1, b);
			});
		function Il(p, l, f, b, A) {
			return (l = +l), (f = f >>> 0), A || Sl(p, l, f, 8), e.write(p, l, f, b, 52, 8), f + 8;
		}
		(s.prototype.writeDoubleLE = function (l, f, b) {
			return Il(this, l, f, !0, b);
		}),
			(s.prototype.writeDoubleBE = function (l, f, b) {
				return Il(this, l, f, !1, b);
			}),
			(s.prototype.copy = function (l, f, b, A) {
				if (!s.isBuffer(l)) throw new TypeError('argument should be a Buffer');
				if (
					(b || (b = 0),
					!A && A !== 0 && (A = this.length),
					f >= l.length && (f = l.length),
					f || (f = 0),
					A > 0 && A < b && (A = b),
					A === b || l.length === 0 || this.length === 0)
				)
					return 0;
				if (f < 0) throw new RangeError('targetStart out of bounds');
				if (b < 0 || b >= this.length) throw new RangeError('Index out of range');
				if (A < 0) throw new RangeError('sourceEnd out of bounds');
				A > this.length && (A = this.length),
					l.length - f < A - b && (A = l.length - f + b);
				let T = A - b;
				return (
					this === l && typeof Uint8Array.prototype.copyWithin == 'function'
						? this.copyWithin(f, b, A)
						: Uint8Array.prototype.set.call(l, this.subarray(b, A), f),
					T
				);
			}),
			(s.prototype.fill = function (l, f, b, A) {
				if (typeof l == 'string') {
					if (
						(typeof f == 'string'
							? ((A = f), (f = 0), (b = this.length))
							: typeof b == 'string' && ((A = b), (b = this.length)),
						A !== void 0 && typeof A != 'string')
					)
						throw new TypeError('encoding must be a string');
					if (typeof A == 'string' && !s.isEncoding(A))
						throw new TypeError('Unknown encoding: ' + A);
					if (l.length === 1) {
						let O = l.charCodeAt(0);
						((A === 'utf8' && O < 128) || A === 'latin1') && (l = O);
					}
				} else
					typeof l == 'number' ? (l = l & 255) : typeof l == 'boolean' && (l = Number(l));
				if (f < 0 || this.length < f || this.length < b)
					throw new RangeError('Out of range index');
				if (b <= f) return this;
				(f = f >>> 0), (b = b === void 0 ? this.length : b >>> 0), l || (l = 0);
				let T;
				if (typeof l == 'number') for (T = f; T < b; ++T) this[T] = l;
				else {
					let O = s.isBuffer(l) ? l : s.from(l, A),
						$ = O.length;
					if ($ === 0)
						throw new TypeError(
							'The value "' + l + '" is invalid for argument "value"'
						);
					for (T = 0; T < b - f; ++T) this[T + f] = O[T % $];
				}
				return this;
			});
		let Or = {};
		function cs(p, l, f) {
			Or[p] = class extends f {
				constructor() {
					super(),
						Object.defineProperty(this, 'message', {
							value: l.apply(this, arguments),
							writable: !0,
							configurable: !0,
						}),
						(this.name = `${this.name} [${p}]`),
						this.stack,
						delete this.name;
				}
				get code() {
					return p;
				}
				set code(A) {
					Object.defineProperty(this, 'code', {
						configurable: !0,
						enumerable: !0,
						value: A,
						writable: !0,
					});
				}
				toString() {
					return `${this.name} [${p}]: ${this.message}`;
				}
			};
		}
		cs(
			'ERR_BUFFER_OUT_OF_BOUNDS',
			function (p) {
				return p
					? `${p} is outside of buffer bounds`
					: 'Attempt to access memory outside buffer bounds';
			},
			RangeError
		),
			cs(
				'ERR_INVALID_ARG_TYPE',
				function (p, l) {
					return `The "${p}" argument must be of type number. Received type ${typeof l}`;
				},
				TypeError
			),
			cs(
				'ERR_OUT_OF_RANGE',
				function (p, l, f) {
					let b = `The value of "${p}" is out of range.`,
						A = f;
					return (
						Number.isInteger(f) && Math.abs(f) > 2 ** 32
							? (A = Tl(String(f)))
							: typeof f == 'bigint' &&
							  ((A = String(f)),
							  (f > BigInt(2) ** BigInt(32) || f < -(BigInt(2) ** BigInt(32))) &&
									(A = Tl(A)),
							  (A += 'n')),
						(b += ` It must be ${l}. Received ${A}`),
						b
					);
				},
				RangeError
			);
		function Tl(p) {
			let l = '',
				f = p.length,
				b = p[0] === '-' ? 1 : 0;
			for (; f >= b + 4; f -= 3) l = `_${p.slice(f - 3, f)}${l}`;
			return `${p.slice(0, f)}${l}`;
		}
		function jg(p, l, f) {
			kr(l, 'offset'), (p[l] === void 0 || p[l + f] === void 0) && li(l, p.length - (f + 1));
		}
		function Rl(p, l, f, b, A, T) {
			if (p > f || p < l) {
				let O = typeof l == 'bigint' ? 'n' : '',
					$;
				throw (
					(T > 3
						? l === 0 || l === BigInt(0)
							? ($ = `>= 0${O} and < 2${O} ** ${(T + 1) * 8}${O}`)
							: ($ = `>= -(2${O} ** ${(T + 1) * 8 - 1}${O}) and < 2 ** ${
									(T + 1) * 8 - 1
							  }${O}`)
						: ($ = `>= ${l}${O} and <= ${f}${O}`),
					new Or.ERR_OUT_OF_RANGE('value', $, p))
				);
			}
			jg(b, A, T);
		}
		function kr(p, l) {
			if (typeof p != 'number') throw new Or.ERR_INVALID_ARG_TYPE(l, 'number', p);
		}
		function li(p, l, f) {
			throw Math.floor(p) !== p
				? (kr(p, f), new Or.ERR_OUT_OF_RANGE(f || 'offset', 'an integer', p))
				: l < 0
				? new Or.ERR_BUFFER_OUT_OF_BOUNDS()
				: new Or.ERR_OUT_OF_RANGE(f || 'offset', `>= ${f ? 1 : 0} and <= ${l}`, p);
		}
		let Fg = /[^+/0-9A-Za-z-_]/g;
		function Wg(p) {
			if (((p = p.split('=')[0]), (p = p.trim().replace(Fg, '')), p.length < 2)) return '';
			for (; p.length % 4 !== 0; ) p = p + '=';
			return p;
		}
		function hs(p, l) {
			l = l || 1 / 0;
			let f,
				b = p.length,
				A = null,
				T = [];
			for (let O = 0; O < b; ++O) {
				if (((f = p.charCodeAt(O)), f > 55295 && f < 57344)) {
					if (!A) {
						if (f > 56319) {
							(l -= 3) > -1 && T.push(239, 191, 189);
							continue;
						} else if (O + 1 === b) {
							(l -= 3) > -1 && T.push(239, 191, 189);
							continue;
						}
						A = f;
						continue;
					}
					if (f < 56320) {
						(l -= 3) > -1 && T.push(239, 191, 189), (A = f);
						continue;
					}
					f = (((A - 55296) << 10) | (f - 56320)) + 65536;
				} else A && (l -= 3) > -1 && T.push(239, 191, 189);
				if (((A = null), f < 128)) {
					if ((l -= 1) < 0) break;
					T.push(f);
				} else if (f < 2048) {
					if ((l -= 2) < 0) break;
					T.push((f >> 6) | 192, (f & 63) | 128);
				} else if (f < 65536) {
					if ((l -= 3) < 0) break;
					T.push((f >> 12) | 224, ((f >> 6) & 63) | 128, (f & 63) | 128);
				} else if (f < 1114112) {
					if ((l -= 4) < 0) break;
					T.push(
						(f >> 18) | 240,
						((f >> 12) & 63) | 128,
						((f >> 6) & 63) | 128,
						(f & 63) | 128
					);
				} else throw new Error('Invalid code point');
			}
			return T;
		}
		function $g(p) {
			let l = [];
			for (let f = 0; f < p.length; ++f) l.push(p.charCodeAt(f) & 255);
			return l;
		}
		function Hg(p, l) {
			let f,
				b,
				A,
				T = [];
			for (let O = 0; O < p.length && !((l -= 2) < 0); ++O)
				(f = p.charCodeAt(O)), (b = f >> 8), (A = f % 256), T.push(A), T.push(b);
			return T;
		}
		function Cl(p) {
			return t.toByteArray(Wg(p));
		}
		function qi(p, l, f, b) {
			let A;
			for (A = 0; A < b && !(A + f >= l.length || A >= p.length); ++A) l[A + f] = p[A];
			return A;
		}
		function Ye(p, l) {
			return (
				p instanceof l ||
				(p != null &&
					p.constructor != null &&
					p.constructor.name != null &&
					p.constructor.name === l.name)
			);
		}
		function ds(p) {
			return p !== p;
		}
		let Vg = (function () {
			let p = '0123456789abcdef',
				l = new Array(256);
			for (let f = 0; f < 16; ++f) {
				let b = f * 16;
				for (let A = 0; A < 16; ++A) l[b + A] = p[f] + p[A];
			}
			return l;
		})();
		function Mt(p) {
			return typeof BigInt > 'u' ? zg : p;
		}
		function zg() {
			throw new Error('BigInt not supported');
		}
		return Jt;
	}
	var ui,
		Vu,
		Wi,
		zu,
		Jt,
		Ku,
		Ut,
		x,
		ty,
		ry,
		ye = we(() => {
			v();
			m();
			_();
			(ui = {}), (Vu = !1);
			(Wi = {}), (zu = !1);
			(Jt = {}), (Ku = !1);
			Ut = ey();
			Ut.Buffer;
			Ut.SlowBuffer;
			Ut.INSPECT_MAX_BYTES;
			Ut.kMaxLength;
			(x = Ut.Buffer), (ty = Ut.INSPECT_MAX_BYTES), (ry = Ut.kMaxLength);
		});
	var v = we(() => {
		ye();
	});
	var Gu = M((_s) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(_s, '__esModule', { value: !0 });
		var ws = class {
			constructor(e) {
				(this.aliasToTopic = {}), (this.max = e);
			}
			put(e, r) {
				return r === 0 || r > this.max
					? !1
					: ((this.aliasToTopic[r] = e),
					  (this.length = Object.keys(this.aliasToTopic).length),
					  !0);
			}
			getTopicByAlias(e) {
				return this.aliasToTopic[e];
			}
			clear() {
				this.aliasToTopic = {};
			}
		};
		_s.default = ws;
	});
	var ce = M((SA, Qu) => {
		'use strict';
		v();
		m();
		_();
		Qu.exports = {
			ArrayIsArray(t) {
				return Array.isArray(t);
			},
			ArrayPrototypeIncludes(t, e) {
				return t.includes(e);
			},
			ArrayPrototypeIndexOf(t, e) {
				return t.indexOf(e);
			},
			ArrayPrototypeJoin(t, e) {
				return t.join(e);
			},
			ArrayPrototypeMap(t, e) {
				return t.map(e);
			},
			ArrayPrototypePop(t, e) {
				return t.pop(e);
			},
			ArrayPrototypePush(t, e) {
				return t.push(e);
			},
			ArrayPrototypeSlice(t, e, r) {
				return t.slice(e, r);
			},
			Error,
			FunctionPrototypeCall(t, e, ...r) {
				return t.call(e, ...r);
			},
			FunctionPrototypeSymbolHasInstance(t, e) {
				return Function.prototype[Symbol.hasInstance].call(t, e);
			},
			MathFloor: Math.floor,
			Number,
			NumberIsInteger: Number.isInteger,
			NumberIsNaN: Number.isNaN,
			NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
			NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
			NumberParseInt: Number.parseInt,
			ObjectDefineProperties(t, e) {
				return Object.defineProperties(t, e);
			},
			ObjectDefineProperty(t, e, r) {
				return Object.defineProperty(t, e, r);
			},
			ObjectGetOwnPropertyDescriptor(t, e) {
				return Object.getOwnPropertyDescriptor(t, e);
			},
			ObjectKeys(t) {
				return Object.keys(t);
			},
			ObjectSetPrototypeOf(t, e) {
				return Object.setPrototypeOf(t, e);
			},
			Promise,
			PromisePrototypeCatch(t, e) {
				return t.catch(e);
			},
			PromisePrototypeThen(t, e, r) {
				return t.then(e, r);
			},
			PromiseReject(t) {
				return Promise.reject(t);
			},
			ReflectApply: Reflect.apply,
			RegExpPrototypeTest(t, e) {
				return t.test(e);
			},
			SafeSet: Set,
			String,
			StringPrototypeSlice(t, e, r) {
				return t.slice(e, r);
			},
			StringPrototypeToLowerCase(t) {
				return t.toLowerCase();
			},
			StringPrototypeToUpperCase(t) {
				return t.toUpperCase();
			},
			StringPrototypeTrim(t) {
				return t.trim();
			},
			Symbol,
			SymbolFor: Symbol.for,
			SymbolAsyncIterator: Symbol.asyncIterator,
			SymbolHasInstance: Symbol.hasInstance,
			SymbolIterator: Symbol.iterator,
			TypedArrayPrototypeSet(t, e, r) {
				return t.set(e, r);
			},
			Uint8Array,
		};
	});
	var Je = M((PA, vs) => {
		'use strict';
		v();
		m();
		_();
		var iy = (ye(), X(_e)),
			ny = Object.getPrototypeOf(async function () {}).constructor,
			Yu = globalThis.Blob || iy.Blob,
			sy =
				typeof Yu < 'u'
					? function (e) {
							return e instanceof Yu;
					  }
					: function (e) {
							return !1;
					  },
			ms = class extends Error {
				constructor(e) {
					if (!Array.isArray(e))
						throw new TypeError(`Expected input to be an Array, got ${typeof e}`);
					let r = '';
					for (let i = 0; i < e.length; i++)
						r += `    ${e[i].stack}
`;
					super(r), (this.name = 'AggregateError'), (this.errors = e);
				}
			};
		vs.exports = {
			AggregateError: ms,
			kEmptyObject: Object.freeze({}),
			once(t) {
				let e = !1;
				return function (...r) {
					e || ((e = !0), t.apply(this, r));
				};
			},
			createDeferredPromise: function () {
				let t, e;
				return {
					promise: new Promise((i, n) => {
						(t = i), (e = n);
					}),
					resolve: t,
					reject: e,
				};
			},
			promisify(t) {
				return new Promise((e, r) => {
					t((i, ...n) => (i ? r(i) : e(...n)));
				});
			},
			debuglog() {
				return function () {};
			},
			format(t, ...e) {
				return t.replace(/%([sdifj])/g, function (...[r, i]) {
					let n = e.shift();
					return i === 'f'
						? n.toFixed(6)
						: i === 'j'
						? JSON.stringify(n)
						: i === 's' && typeof n == 'object'
						? `${n.constructor !== Object ? n.constructor.name : ''} {}`.trim()
						: n.toString();
				});
			},
			inspect(t) {
				switch (typeof t) {
					case 'string':
						if (t.includes("'"))
							if (t.includes('"')) {
								if (!t.includes('`') && !t.includes('${')) return `\`${t}\``;
							} else return `"${t}"`;
						return `'${t}'`;
					case 'number':
						return isNaN(t) ? 'NaN' : Object.is(t, -0) ? String(t) : t;
					case 'bigint':
						return `${String(t)}n`;
					case 'boolean':
					case 'undefined':
						return String(t);
					case 'object':
						return '{}';
				}
			},
			types: {
				isAsyncFunction(t) {
					return t instanceof ny;
				},
				isArrayBufferView(t) {
					return ArrayBuffer.isView(t);
				},
			},
			isBlob: sy,
		};
		vs.exports.promisify.custom = Symbol.for('nodejs.util.promisify.custom');
	});
	var Hi = M((NA, $i) => {
		'use strict';
		v();
		m();
		_();
		var { AbortController: Ju, AbortSignal: oy } =
			typeof self < 'u' ? self : typeof window < 'u' ? window : void 0;
		$i.exports = Ju;
		$i.exports.AbortSignal = oy;
		$i.exports.default = Ju;
	});
	var Se = M((HA, ef) => {
		'use strict';
		v();
		m();
		_();
		var { format: ay, inspect: Vi, AggregateError: ly } = Je(),
			uy = globalThis.AggregateError || ly,
			fy = Symbol('kIsNodeError'),
			cy = [
				'string',
				'function',
				'number',
				'object',
				'Function',
				'Object',
				'boolean',
				'bigint',
				'symbol',
			],
			hy = /^([A-Z][a-z0-9]*)+$/,
			dy = '__node_internal_',
			zi = {};
		function Xt(t, e) {
			if (!t) throw new zi.ERR_INTERNAL_ASSERTION(e);
		}
		function Xu(t) {
			let e = '',
				r = t.length,
				i = t[0] === '-' ? 1 : 0;
			for (; r >= i + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
			return `${t.slice(0, r)}${e}`;
		}
		function py(t, e, r) {
			if (typeof e == 'function')
				return (
					Xt(
						e.length <= r.length,
						`Code: ${t}; The provided arguments length (${r.length}) does not match the required ones (${e.length}).`
					),
					e(...r)
				);
			let i = (e.match(/%[dfijoOs]/g) || []).length;
			return (
				Xt(
					i === r.length,
					`Code: ${t}; The provided arguments length (${r.length}) does not match the required ones (${i}).`
				),
				r.length === 0 ? e : ay(e, ...r)
			);
		}
		function me(t, e, r) {
			r || (r = Error);
			class i extends r {
				constructor(...o) {
					super(py(t, e, o));
				}
				toString() {
					return `${this.name} [${t}]: ${this.message}`;
				}
			}
			Object.defineProperties(i.prototype, {
				name: { value: r.name, writable: !0, enumerable: !1, configurable: !0 },
				toString: {
					value() {
						return `${this.name} [${t}]: ${this.message}`;
					},
					writable: !0,
					enumerable: !1,
					configurable: !0,
				},
			}),
				(i.prototype.code = t),
				(i.prototype[fy] = !0),
				(zi[t] = i);
		}
		function Zu(t) {
			let e = dy + t.name;
			return Object.defineProperty(t, 'name', { value: e }), t;
		}
		function gy(t, e) {
			if (t && e && t !== e) {
				if (Array.isArray(e.errors)) return e.errors.push(t), e;
				let r = new uy([e, t], e.message);
				return (r.code = e.code), r;
			}
			return t || e;
		}
		var Es = class extends Error {
			constructor(e = 'The operation was aborted', r = void 0) {
				if (r !== void 0 && typeof r != 'object')
					throw new zi.ERR_INVALID_ARG_TYPE('options', 'Object', r);
				super(e, r), (this.code = 'ABORT_ERR'), (this.name = 'AbortError');
			}
		};
		me('ERR_ASSERTION', '%s', Error);
		me(
			'ERR_INVALID_ARG_TYPE',
			(t, e, r) => {
				Xt(typeof t == 'string', "'name' must be a string"), Array.isArray(e) || (e = [e]);
				let i = 'The ';
				t.endsWith(' argument')
					? (i += `${t} `)
					: (i += `"${t}" ${t.includes('.') ? 'property' : 'argument'} `),
					(i += 'must be ');
				let n = [],
					o = [],
					s = [];
				for (let u of e)
					Xt(typeof u == 'string', 'All expected entries have to be of type string'),
						cy.includes(u)
							? n.push(u.toLowerCase())
							: hy.test(u)
							? o.push(u)
							: (Xt(
									u !== 'object',
									'The value "object" should be written as "Object"'
							  ),
							  s.push(u));
				if (o.length > 0) {
					let u = n.indexOf('object');
					u !== -1 && (n.splice(n, u, 1), o.push('Object'));
				}
				if (n.length > 0) {
					switch (n.length) {
						case 1:
							i += `of type ${n[0]}`;
							break;
						case 2:
							i += `one of type ${n[0]} or ${n[1]}`;
							break;
						default: {
							let u = n.pop();
							i += `one of type ${n.join(', ')}, or ${u}`;
						}
					}
					(o.length > 0 || s.length > 0) && (i += ' or ');
				}
				if (o.length > 0) {
					switch (o.length) {
						case 1:
							i += `an instance of ${o[0]}`;
							break;
						case 2:
							i += `an instance of ${o[0]} or ${o[1]}`;
							break;
						default: {
							let u = o.pop();
							i += `an instance of ${o.join(', ')}, or ${u}`;
						}
					}
					s.length > 0 && (i += ' or ');
				}
				switch (s.length) {
					case 0:
						break;
					case 1:
						s[0].toLowerCase() !== s[0] && (i += 'an '), (i += `${s[0]}`);
						break;
					case 2:
						i += `one of ${s[0]} or ${s[1]}`;
						break;
					default: {
						let u = s.pop();
						i += `one of ${s.join(', ')}, or ${u}`;
					}
				}
				if (r == null) i += `. Received ${r}`;
				else if (typeof r == 'function' && r.name) i += `. Received function ${r.name}`;
				else if (typeof r == 'object') {
					var a;
					if ((a = r.constructor) !== null && a !== void 0 && a.name)
						i += `. Received an instance of ${r.constructor.name}`;
					else {
						let u = Vi(r, { depth: -1 });
						i += `. Received ${u}`;
					}
				} else {
					let u = Vi(r, { colors: !1 });
					u.length > 25 && (u = `${u.slice(0, 25)}...`),
						(i += `. Received type ${typeof r} (${u})`);
				}
				return i;
			},
			TypeError
		);
		me(
			'ERR_INVALID_ARG_VALUE',
			(t, e, r = 'is invalid') => {
				let i = Vi(e);
				return (
					i.length > 128 && (i = i.slice(0, 128) + '...'),
					`The ${t.includes('.') ? 'property' : 'argument'} '${t}' ${r}. Received ${i}`
				);
			},
			TypeError
		);
		me(
			'ERR_INVALID_RETURN_VALUE',
			(t, e, r) => {
				var i;
				let n =
					r != null && (i = r.constructor) !== null && i !== void 0 && i.name
						? `instance of ${r.constructor.name}`
						: `type ${typeof r}`;
				return `Expected ${t} to be returned from the "${e}" function but got ${n}.`;
			},
			TypeError
		);
		me(
			'ERR_MISSING_ARGS',
			(...t) => {
				Xt(t.length > 0, 'At least one arg needs to be specified');
				let e,
					r = t.length;
				switch (((t = (Array.isArray(t) ? t : [t]).map((i) => `"${i}"`).join(' or ')), r)) {
					case 1:
						e += `The ${t[0]} argument`;
						break;
					case 2:
						e += `The ${t[0]} and ${t[1]} arguments`;
						break;
					default:
						{
							let i = t.pop();
							e += `The ${t.join(', ')}, and ${i} arguments`;
						}
						break;
				}
				return `${e} must be specified`;
			},
			TypeError
		);
		me(
			'ERR_OUT_OF_RANGE',
			(t, e, r) => {
				Xt(e, 'Missing "range" argument');
				let i;
				return (
					Number.isInteger(r) && Math.abs(r) > 2 ** 32
						? (i = Xu(String(r)))
						: typeof r == 'bigint'
						? ((i = String(r)),
						  (r > 2n ** 32n || r < -(2n ** 32n)) && (i = Xu(i)),
						  (i += 'n'))
						: (i = Vi(r)),
					`The value of "${t}" is out of range. It must be ${e}. Received ${i}`
				);
			},
			RangeError
		);
		me('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times', Error);
		me('ERR_METHOD_NOT_IMPLEMENTED', 'The %s method is not implemented', Error);
		me('ERR_STREAM_ALREADY_FINISHED', 'Cannot call %s after a stream was finished', Error);
		me('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable', Error);
		me('ERR_STREAM_DESTROYED', 'Cannot call %s after a stream was destroyed', Error);
		me('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
		me('ERR_STREAM_PREMATURE_CLOSE', 'Premature close', Error);
		me('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF', Error);
		me('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event', Error);
		me('ERR_STREAM_WRITE_AFTER_END', 'write after end', Error);
		me('ERR_UNKNOWN_ENCODING', 'Unknown encoding: %s', TypeError);
		ef.exports = { AbortError: Es, aggregateTwoErrors: Zu(gy), hideStackFrames: Zu, codes: zi };
	});
	var fi = M((JA, ff) => {
		'use strict';
		v();
		m();
		_();
		var {
				ArrayIsArray: As,
				ArrayPrototypeIncludes: sf,
				ArrayPrototypeJoin: of,
				ArrayPrototypeMap: yy,
				NumberIsInteger: Is,
				NumberIsNaN: by,
				NumberMAX_SAFE_INTEGER: wy,
				NumberMIN_SAFE_INTEGER: _y,
				NumberParseInt: my,
				ObjectPrototypeHasOwnProperty: vy,
				RegExpPrototypeExec: af,
				String: Ey,
				StringPrototypeToUpperCase: Sy,
				StringPrototypeTrim: Ay,
			} = ce(),
			{
				hideStackFrames: Ue,
				codes: {
					ERR_SOCKET_BAD_PORT: Iy,
					ERR_INVALID_ARG_TYPE: Ae,
					ERR_INVALID_ARG_VALUE: Mr,
					ERR_OUT_OF_RANGE: Zt,
					ERR_UNKNOWN_SIGNAL: tf,
				},
			} = Se(),
			{ normalizeEncoding: Ty } = Je(),
			{ isAsyncFunction: Ry, isArrayBufferView: Cy } = Je().types,
			rf = {};
		function By(t) {
			return t === (t | 0);
		}
		function Py(t) {
			return t === t >>> 0;
		}
		var Oy = /^[0-7]+$/,
			ky = 'must be a 32-bit unsigned integer or an octal string';
		function xy(t, e, r) {
			if ((typeof t > 'u' && (t = r), typeof t == 'string')) {
				if (af(Oy, t) === null) throw new Mr(e, t, ky);
				t = my(t, 8);
			}
			return lf(t, e), t;
		}
		var My = Ue((t, e, r = _y, i = wy) => {
				if (typeof t != 'number') throw new Ae(e, 'number', t);
				if (!Is(t)) throw new Zt(e, 'an integer', t);
				if (t < r || t > i) throw new Zt(e, `>= ${r} && <= ${i}`, t);
			}),
			Ly = Ue((t, e, r = -2147483648, i = 2147483647) => {
				if (typeof t != 'number') throw new Ae(e, 'number', t);
				if (!Is(t)) throw new Zt(e, 'an integer', t);
				if (t < r || t > i) throw new Zt(e, `>= ${r} && <= ${i}`, t);
			}),
			lf = Ue((t, e, r = !1) => {
				if (typeof t != 'number') throw new Ae(e, 'number', t);
				if (!Is(t)) throw new Zt(e, 'an integer', t);
				let i = r ? 1 : 0,
					n = 4294967295;
				if (t < i || t > n) throw new Zt(e, `>= ${i} && <= ${n}`, t);
			});
		function Ts(t, e) {
			if (typeof t != 'string') throw new Ae(e, 'string', t);
		}
		function Uy(t, e, r = void 0, i) {
			if (typeof t != 'number') throw new Ae(e, 'number', t);
			if ((r != null && t < r) || (i != null && t > i) || ((r != null || i != null) && by(t)))
				throw new Zt(
					e,
					`${r != null ? `>= ${r}` : ''}${r != null && i != null ? ' && ' : ''}${
						i != null ? `<= ${i}` : ''
					}`,
					t
				);
		}
		var Ny = Ue((t, e, r) => {
			if (!sf(r, t)) {
				let n =
					'must be one of: ' +
					of(
						yy(r, (o) => (typeof o == 'string' ? `'${o}'` : Ey(o))),
						', '
					);
				throw new Mr(e, t, n);
			}
		});
		function uf(t, e) {
			if (typeof t != 'boolean') throw new Ae(e, 'boolean', t);
		}
		function Ss(t, e, r) {
			return t == null || !vy(t, e) ? r : t[e];
		}
		var qy = Ue((t, e, r = null) => {
				let i = Ss(r, 'allowArray', !1),
					n = Ss(r, 'allowFunction', !1);
				if (
					(!Ss(r, 'nullable', !1) && t === null) ||
					(!i && As(t)) ||
					(typeof t != 'object' && (!n || typeof t != 'function'))
				)
					throw new Ae(e, 'Object', t);
			}),
			Dy = Ue((t, e) => {
				if (t != null && typeof t != 'object' && typeof t != 'function')
					throw new Ae(e, 'a dictionary', t);
			}),
			Rs = Ue((t, e, r = 0) => {
				if (!As(t)) throw new Ae(e, 'Array', t);
				if (t.length < r) {
					let i = `must be longer than ${r}`;
					throw new Mr(e, t, i);
				}
			});
		function jy(t, e) {
			Rs(t, e);
			for (let r = 0; r < t.length; r++) Ts(t[r], `${e}[${r}]`);
		}
		function Fy(t, e) {
			Rs(t, e);
			for (let r = 0; r < t.length; r++) uf(t[r], `${e}[${r}]`);
		}
		function Wy(t, e = 'signal') {
			if ((Ts(t, e), rf[t] === void 0))
				throw rf[Sy(t)] !== void 0
					? new tf(t + ' (signals must use all capital letters)')
					: new tf(t);
		}
		var $y = Ue((t, e = 'buffer') => {
			if (!Cy(t)) throw new Ae(e, ['Buffer', 'TypedArray', 'DataView'], t);
		});
		function Hy(t, e) {
			let r = Ty(e),
				i = t.length;
			if (r === 'hex' && i % 2 !== 0)
				throw new Mr('encoding', e, `is invalid for data of length ${i}`);
		}
		function Vy(t, e = 'Port', r = !0) {
			if (
				(typeof t != 'number' && typeof t != 'string') ||
				(typeof t == 'string' && Ay(t).length === 0) ||
				+t !== +t >>> 0 ||
				t > 65535 ||
				(t === 0 && !r)
			)
				throw new Iy(e, t, r);
			return t | 0;
		}
		var zy = Ue((t, e) => {
				if (t !== void 0 && (t === null || typeof t != 'object' || !('aborted' in t)))
					throw new Ae(e, 'AbortSignal', t);
			}),
			Ky = Ue((t, e) => {
				if (typeof t != 'function') throw new Ae(e, 'Function', t);
			}),
			Gy = Ue((t, e) => {
				if (typeof t != 'function' || Ry(t)) throw new Ae(e, 'Function', t);
			}),
			Qy = Ue((t, e) => {
				if (t !== void 0) throw new Ae(e, 'undefined', t);
			});
		function Yy(t, e, r) {
			if (!sf(r, t)) throw new Ae(e, `('${of(r, '|')}')`, t);
		}
		var Jy = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
		function nf(t, e) {
			if (typeof t > 'u' || !af(Jy, t))
				throw new Mr(
					e,
					t,
					'must be an array or string of format "</styles.css>; rel=preload; as=style"'
				);
		}
		function Xy(t) {
			if (typeof t == 'string') return nf(t, 'hints'), t;
			if (As(t)) {
				let e = t.length,
					r = '';
				if (e === 0) return r;
				for (let i = 0; i < e; i++) {
					let n = t[i];
					nf(n, 'hints'), (r += n), i !== e - 1 && (r += ', ');
				}
				return r;
			}
			throw new Mr(
				'hints',
				t,
				'must be an array or string of format "</styles.css>; rel=preload; as=style"'
			);
		}
		ff.exports = {
			isInt32: By,
			isUint32: Py,
			parseFileMode: xy,
			validateArray: Rs,
			validateStringArray: jy,
			validateBooleanArray: Fy,
			validateBoolean: uf,
			validateBuffer: $y,
			validateDictionary: Dy,
			validateEncoding: Hy,
			validateFunction: Ky,
			validateInt32: Ly,
			validateInteger: My,
			validateNumber: Uy,
			validateObject: qy,
			validateOneOf: Ny,
			validatePlainFunction: Gy,
			validatePort: Vy,
			validateSignalName: Wy,
			validateString: Ts,
			validateUint32: lf,
			validateUndefined: Qy,
			validateUnion: Yy,
			validateAbortSignal: zy,
			validateLinkHeaderValue: Xy,
		};
	});
	var Nt = M((nI, pf) => {
		v();
		m();
		_();
		var ae = (pf.exports = {}),
			Xe,
			Ze;
		function Cs() {
			throw new Error('setTimeout has not been defined');
		}
		function Bs() {
			throw new Error('clearTimeout has not been defined');
		}
		(function () {
			try {
				typeof setTimeout == 'function' ? (Xe = setTimeout) : (Xe = Cs);
			} catch {
				Xe = Cs;
			}
			try {
				typeof clearTimeout == 'function' ? (Ze = clearTimeout) : (Ze = Bs);
			} catch {
				Ze = Bs;
			}
		})();
		function cf(t) {
			if (Xe === setTimeout) return setTimeout(t, 0);
			if ((Xe === Cs || !Xe) && setTimeout) return (Xe = setTimeout), setTimeout(t, 0);
			try {
				return Xe(t, 0);
			} catch {
				try {
					return Xe.call(null, t, 0);
				} catch {
					return Xe.call(this, t, 0);
				}
			}
		}
		function Zy(t) {
			if (Ze === clearTimeout) return clearTimeout(t);
			if ((Ze === Bs || !Ze) && clearTimeout) return (Ze = clearTimeout), clearTimeout(t);
			try {
				return Ze(t);
			} catch {
				try {
					return Ze.call(null, t);
				} catch {
					return Ze.call(this, t);
				}
			}
		}
		var _t = [],
			Lr = !1,
			er,
			Ki = -1;
		function eb() {
			!Lr ||
				!er ||
				((Lr = !1), er.length ? (_t = er.concat(_t)) : (Ki = -1), _t.length && hf());
		}
		function hf() {
			if (!Lr) {
				var t = cf(eb);
				Lr = !0;
				for (var e = _t.length; e; ) {
					for (er = _t, _t = []; ++Ki < e; ) er && er[Ki].run();
					(Ki = -1), (e = _t.length);
				}
				(er = null), (Lr = !1), Zy(t);
			}
		}
		ae.nextTick = function (t) {
			var e = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
			_t.push(new df(t, e)), _t.length === 1 && !Lr && cf(hf);
		};
		function df(t, e) {
			(this.fun = t), (this.array = e);
		}
		df.prototype.run = function () {
			this.fun.apply(null, this.array);
		};
		ae.title = 'browser';
		ae.browser = !0;
		ae.env = {};
		ae.argv = [];
		ae.version = '';
		ae.versions = {};
		function mt() {}
		ae.on = mt;
		ae.addListener = mt;
		ae.once = mt;
		ae.off = mt;
		ae.removeListener = mt;
		ae.removeAllListeners = mt;
		ae.emit = mt;
		ae.prependListener = mt;
		ae.prependOnceListener = mt;
		ae.listeners = function (t) {
			return [];
		};
		ae.binding = function (t) {
			throw new Error('process.binding is not supported');
		};
		ae.cwd = function () {
			return '/';
		};
		ae.chdir = function (t) {
			throw new Error('process.chdir is not supported');
		};
		ae.umask = function () {
			return 0;
		};
	});
	var tt = M((cI, Pf) => {
		'use strict';
		v();
		m();
		_();
		var { Symbol: Gi, SymbolAsyncIterator: gf, SymbolIterator: yf, SymbolFor: bf } = ce(),
			wf = Gi('kDestroyed'),
			_f = Gi('kIsErrored'),
			Ps = Gi('kIsReadable'),
			mf = Gi('kIsDisturbed'),
			tb = bf('nodejs.webstream.isClosedPromise'),
			rb = bf('nodejs.webstream.controllerErrorFunction');
		function Qi(t, e = !1) {
			var r;
			return !!(
				t &&
				typeof t.pipe == 'function' &&
				typeof t.on == 'function' &&
				(!e || (typeof t.pause == 'function' && typeof t.resume == 'function')) &&
				(!t._writableState ||
					((r = t._readableState) === null || r === void 0 ? void 0 : r.readable) !==
						!1) &&
				(!t._writableState || t._readableState)
			);
		}
		function Yi(t) {
			var e;
			return !!(
				t &&
				typeof t.write == 'function' &&
				typeof t.on == 'function' &&
				(!t._readableState ||
					((e = t._writableState) === null || e === void 0 ? void 0 : e.writable) !== !1)
			);
		}
		function ib(t) {
			return !!(
				t &&
				typeof t.pipe == 'function' &&
				t._readableState &&
				typeof t.on == 'function' &&
				typeof t.write == 'function'
			);
		}
		function et(t) {
			return (
				t &&
				(t._readableState ||
					t._writableState ||
					(typeof t.write == 'function' && typeof t.on == 'function') ||
					(typeof t.pipe == 'function' && typeof t.on == 'function'))
			);
		}
		function vf(t) {
			return !!(
				t &&
				!et(t) &&
				typeof t.pipeThrough == 'function' &&
				typeof t.getReader == 'function' &&
				typeof t.cancel == 'function'
			);
		}
		function Ef(t) {
			return !!(
				t &&
				!et(t) &&
				typeof t.getWriter == 'function' &&
				typeof t.abort == 'function'
			);
		}
		function Sf(t) {
			return !!(
				t &&
				!et(t) &&
				typeof t.readable == 'object' &&
				typeof t.writable == 'object'
			);
		}
		function nb(t) {
			return vf(t) || Ef(t) || Sf(t);
		}
		function sb(t, e) {
			return t == null
				? !1
				: e === !0
				? typeof t[gf] == 'function'
				: e === !1
				? typeof t[yf] == 'function'
				: typeof t[gf] == 'function' || typeof t[yf] == 'function';
		}
		function Ji(t) {
			if (!et(t)) return null;
			let e = t._writableState,
				r = t._readableState,
				i = e || r;
			return !!(t.destroyed || t[wf] || (i != null && i.destroyed));
		}
		function Af(t) {
			if (!Yi(t)) return null;
			if (t.writableEnded === !0) return !0;
			let e = t._writableState;
			return e != null && e.errored ? !1 : typeof e?.ended != 'boolean' ? null : e.ended;
		}
		function ob(t, e) {
			if (!Yi(t)) return null;
			if (t.writableFinished === !0) return !0;
			let r = t._writableState;
			return r != null && r.errored
				? !1
				: typeof r?.finished != 'boolean'
				? null
				: !!(r.finished || (e === !1 && r.ended === !0 && r.length === 0));
		}
		function ab(t) {
			if (!Qi(t)) return null;
			if (t.readableEnded === !0) return !0;
			let e = t._readableState;
			return !e || e.errored ? !1 : typeof e?.ended != 'boolean' ? null : e.ended;
		}
		function If(t, e) {
			if (!Qi(t)) return null;
			let r = t._readableState;
			return r != null && r.errored
				? !1
				: typeof r?.endEmitted != 'boolean'
				? null
				: !!(r.endEmitted || (e === !1 && r.ended === !0 && r.length === 0));
		}
		function Tf(t) {
			return t && t[Ps] != null
				? t[Ps]
				: typeof t?.readable != 'boolean'
				? null
				: Ji(t)
				? !1
				: Qi(t) && t.readable && !If(t);
		}
		function Rf(t) {
			return typeof t?.writable != 'boolean'
				? null
				: Ji(t)
				? !1
				: Yi(t) && t.writable && !Af(t);
		}
		function lb(t, e) {
			return et(t)
				? Ji(t)
					? !0
					: !((e?.readable !== !1 && Tf(t)) || (e?.writable !== !1 && Rf(t)))
				: null;
		}
		function ub(t) {
			var e, r;
			return et(t)
				? t.writableErrored
					? t.writableErrored
					: (e = (r = t._writableState) === null || r === void 0 ? void 0 : r.errored) !==
							null && e !== void 0
					? e
					: null
				: null;
		}
		function fb(t) {
			var e, r;
			return et(t)
				? t.readableErrored
					? t.readableErrored
					: (e = (r = t._readableState) === null || r === void 0 ? void 0 : r.errored) !==
							null && e !== void 0
					? e
					: null
				: null;
		}
		function cb(t) {
			if (!et(t)) return null;
			if (typeof t.closed == 'boolean') return t.closed;
			let e = t._writableState,
				r = t._readableState;
			return typeof e?.closed == 'boolean' || typeof r?.closed == 'boolean'
				? e?.closed || r?.closed
				: typeof t._closed == 'boolean' && Cf(t)
				? t._closed
				: null;
		}
		function Cf(t) {
			return (
				typeof t._closed == 'boolean' &&
				typeof t._defaultKeepAlive == 'boolean' &&
				typeof t._removedConnection == 'boolean' &&
				typeof t._removedContLen == 'boolean'
			);
		}
		function Bf(t) {
			return typeof t._sent100 == 'boolean' && Cf(t);
		}
		function hb(t) {
			var e;
			return (
				typeof t._consuming == 'boolean' &&
				typeof t._dumped == 'boolean' &&
				((e = t.req) === null || e === void 0 ? void 0 : e.upgradeOrConnect) === void 0
			);
		}
		function db(t) {
			if (!et(t)) return null;
			let e = t._writableState,
				r = t._readableState,
				i = e || r;
			return (!i && Bf(t)) || !!(i && i.autoDestroy && i.emitClose && i.closed === !1);
		}
		function pb(t) {
			var e;
			return !!(
				t &&
				((e = t[mf]) !== null && e !== void 0 ? e : t.readableDidRead || t.readableAborted)
			);
		}
		function gb(t) {
			var e, r, i, n, o, s, a, u, c, h;
			return !!(
				t &&
				((e =
					(r =
						(i =
							(n =
								(o =
									(s = t[_f]) !== null && s !== void 0
										? s
										: t.readableErrored) !== null && o !== void 0
									? o
									: t.writableErrored) !== null && n !== void 0
								? n
								: (a = t._readableState) === null || a === void 0
								? void 0
								: a.errorEmitted) !== null && i !== void 0
							? i
							: (u = t._writableState) === null || u === void 0
							? void 0
							: u.errorEmitted) !== null && r !== void 0
						? r
						: (c = t._readableState) === null || c === void 0
						? void 0
						: c.errored) !== null && e !== void 0
					? e
					: !((h = t._writableState) === null || h === void 0) && h.errored)
			);
		}
		Pf.exports = {
			kDestroyed: wf,
			isDisturbed: pb,
			kIsDisturbed: mf,
			isErrored: gb,
			kIsErrored: _f,
			isReadable: Tf,
			kIsReadable: Ps,
			kIsClosedPromise: tb,
			kControllerErrorFunction: rb,
			isClosed: cb,
			isDestroyed: Ji,
			isDuplexNodeStream: ib,
			isFinished: lb,
			isIterable: sb,
			isReadableNodeStream: Qi,
			isReadableStream: vf,
			isReadableEnded: ab,
			isReadableFinished: If,
			isReadableErrored: fb,
			isNodeStream: et,
			isWebStream: nb,
			isWritable: Rf,
			isWritableNodeStream: Yi,
			isWritableStream: Ef,
			isWritableEnded: Af,
			isWritableFinished: ob,
			isWritableErrored: ub,
			isServerRequest: hb,
			isServerResponse: Bf,
			willEmitClose: db,
			isTransformStream: Sf,
		};
	});
	var vt = M((wI, Ls) => {
		v();
		m();
		_();
		var qt = Nt(),
			{ AbortError: Df, codes: yb } = Se(),
			{ ERR_INVALID_ARG_TYPE: bb, ERR_STREAM_PREMATURE_CLOSE: Of } = yb,
			{ kEmptyObject: ks, once: xs } = Je(),
			{
				validateAbortSignal: wb,
				validateFunction: _b,
				validateObject: mb,
				validateBoolean: vb,
			} = fi(),
			{ Promise: Eb, PromisePrototypeThen: Sb } = ce(),
			{
				isClosed: Ab,
				isReadable: kf,
				isReadableNodeStream: Os,
				isReadableStream: Ib,
				isReadableFinished: xf,
				isReadableErrored: Mf,
				isWritable: Lf,
				isWritableNodeStream: Uf,
				isWritableStream: Tb,
				isWritableFinished: Nf,
				isWritableErrored: qf,
				isNodeStream: Rb,
				willEmitClose: Cb,
				kIsClosedPromise: Bb,
			} = tt();
		function Pb(t) {
			return t.setHeader && typeof t.abort == 'function';
		}
		var Ms = () => {};
		function jf(t, e, r) {
			var i, n;
			if (
				(arguments.length === 2
					? ((r = e), (e = ks))
					: e == null
					? (e = ks)
					: mb(e, 'options'),
				_b(r, 'callback'),
				wb(e.signal, 'options.signal'),
				(r = xs(r)),
				Ib(t) || Tb(t))
			)
				return Ob(t, e, r);
			if (!Rb(t)) throw new bb('stream', ['ReadableStream', 'WritableStream', 'Stream'], t);
			let o = (i = e.readable) !== null && i !== void 0 ? i : Os(t),
				s = (n = e.writable) !== null && n !== void 0 ? n : Uf(t),
				a = t._writableState,
				u = t._readableState,
				c = () => {
					t.writable || g();
				},
				h = Cb(t) && Os(t) === o && Uf(t) === s,
				d = Nf(t, !1),
				g = () => {
					(d = !0),
						t.destroyed && (h = !1),
						!(h && (!t.readable || o)) && (!o || y) && r.call(t);
				},
				y = xf(t, !1),
				w = () => {
					(y = !0),
						t.destroyed && (h = !1),
						!(h && (!t.writable || s)) && (!s || d) && r.call(t);
				},
				E = (N) => {
					r.call(t, N);
				},
				S = Ab(t),
				I = () => {
					S = !0;
					let N = qf(t) || Mf(t);
					if (N && typeof N != 'boolean') return r.call(t, N);
					if (o && !y && Os(t, !0) && !xf(t, !1)) return r.call(t, new Of());
					if (s && !d && !Nf(t, !1)) return r.call(t, new Of());
					r.call(t);
				},
				C = () => {
					S = !0;
					let N = qf(t) || Mf(t);
					if (N && typeof N != 'boolean') return r.call(t, N);
					r.call(t);
				},
				R = () => {
					t.req.on('finish', g);
				};
			Pb(t)
				? (t.on('complete', g), h || t.on('abort', I), t.req ? R() : t.on('request', R))
				: s && !a && (t.on('end', c), t.on('close', c)),
				!h && typeof t.aborted == 'boolean' && t.on('aborted', I),
				t.on('end', w),
				t.on('finish', g),
				e.error !== !1 && t.on('error', E),
				t.on('close', I),
				S
					? qt.nextTick(I)
					: (a != null && a.errorEmitted) || (u != null && u.errorEmitted)
					? h || qt.nextTick(C)
					: ((!o && (!h || kf(t)) && (d || Lf(t) === !1)) ||
							(!s && (!h || Lf(t)) && (y || kf(t) === !1)) ||
							(u && t.req && t.aborted)) &&
					  qt.nextTick(C);
			let U = () => {
				(r = Ms),
					t.removeListener('aborted', I),
					t.removeListener('complete', g),
					t.removeListener('abort', I),
					t.removeListener('request', R),
					t.req && t.req.removeListener('finish', g),
					t.removeListener('end', c),
					t.removeListener('close', c),
					t.removeListener('finish', g),
					t.removeListener('end', w),
					t.removeListener('error', E),
					t.removeListener('close', I);
			};
			if (e.signal && !S) {
				let N = () => {
					let W = r;
					U(), W.call(t, new Df(void 0, { cause: e.signal.reason }));
				};
				if (e.signal.aborted) qt.nextTick(N);
				else {
					let W = r;
					(r = xs((...K) => {
						e.signal.removeEventListener('abort', N), W.apply(t, K);
					})),
						e.signal.addEventListener('abort', N);
				}
			}
			return U;
		}
		function Ob(t, e, r) {
			let i = !1,
				n = Ms;
			if (e.signal)
				if (
					((n = () => {
						(i = !0), r.call(t, new Df(void 0, { cause: e.signal.reason }));
					}),
					e.signal.aborted)
				)
					qt.nextTick(n);
				else {
					let s = r;
					(r = xs((...a) => {
						e.signal.removeEventListener('abort', n), s.apply(t, a);
					})),
						e.signal.addEventListener('abort', n);
				}
			let o = (...s) => {
				i || qt.nextTick(() => r.apply(t, s));
			};
			return Sb(t[Bb].promise, o, o), Ms;
		}
		function kb(t, e) {
			var r;
			let i = !1;
			return (
				e === null && (e = ks),
				(r = e) !== null &&
					r !== void 0 &&
					r.cleanup &&
					(vb(e.cleanup, 'cleanup'), (i = e.cleanup)),
				new Eb((n, o) => {
					let s = jf(t, e, (a) => {
						i && s(), a ? o(a) : n();
					});
				})
			);
		}
		Ls.exports = jf;
		Ls.exports.finished = kb;
	});
	var tr = M((II, Gf) => {
		'use strict';
		v();
		m();
		_();
		var rt = Nt(),
			{
				aggregateTwoErrors: xb,
				codes: { ERR_MULTIPLE_CALLBACK: Mb },
				AbortError: Lb,
			} = Se(),
			{ Symbol: $f } = ce(),
			{ kDestroyed: Ub, isDestroyed: Nb, isFinished: qb, isServerRequest: Db } = tt(),
			Hf = $f('kDestroy'),
			Us = $f('kConstruct');
		function Vf(t, e, r) {
			t && (t.stack, e && !e.errored && (e.errored = t), r && !r.errored && (r.errored = t));
		}
		function jb(t, e) {
			let r = this._readableState,
				i = this._writableState,
				n = i || r;
			return (i != null && i.destroyed) || (r != null && r.destroyed)
				? (typeof e == 'function' && e(), this)
				: (Vf(t, i, r),
				  i && (i.destroyed = !0),
				  r && (r.destroyed = !0),
				  n.constructed
						? Ff(this, t, e)
						: this.once(Hf, function (o) {
								Ff(this, xb(o, t), e);
						  }),
				  this);
		}
		function Ff(t, e, r) {
			let i = !1;
			function n(o) {
				if (i) return;
				i = !0;
				let s = t._readableState,
					a = t._writableState;
				Vf(o, a, s),
					a && (a.closed = !0),
					s && (s.closed = !0),
					typeof r == 'function' && r(o),
					o ? rt.nextTick(Fb, t, o) : rt.nextTick(zf, t);
			}
			try {
				t._destroy(e || null, n);
			} catch (o) {
				n(o);
			}
		}
		function Fb(t, e) {
			Ns(t, e), zf(t);
		}
		function zf(t) {
			let e = t._readableState,
				r = t._writableState;
			r && (r.closeEmitted = !0),
				e && (e.closeEmitted = !0),
				((r != null && r.emitClose) || (e != null && e.emitClose)) && t.emit('close');
		}
		function Ns(t, e) {
			let r = t._readableState,
				i = t._writableState;
			(i != null && i.errorEmitted) ||
				(r != null && r.errorEmitted) ||
				(i && (i.errorEmitted = !0), r && (r.errorEmitted = !0), t.emit('error', e));
		}
		function Wb() {
			let t = this._readableState,
				e = this._writableState;
			t &&
				((t.constructed = !0),
				(t.closed = !1),
				(t.closeEmitted = !1),
				(t.destroyed = !1),
				(t.errored = null),
				(t.errorEmitted = !1),
				(t.reading = !1),
				(t.ended = t.readable === !1),
				(t.endEmitted = t.readable === !1)),
				e &&
					((e.constructed = !0),
					(e.destroyed = !1),
					(e.closed = !1),
					(e.closeEmitted = !1),
					(e.errored = null),
					(e.errorEmitted = !1),
					(e.finalCalled = !1),
					(e.prefinished = !1),
					(e.ended = e.writable === !1),
					(e.ending = e.writable === !1),
					(e.finished = e.writable === !1));
		}
		function qs(t, e, r) {
			let i = t._readableState,
				n = t._writableState;
			if ((n != null && n.destroyed) || (i != null && i.destroyed)) return this;
			(i != null && i.autoDestroy) || (n != null && n.autoDestroy)
				? t.destroy(e)
				: e &&
				  (e.stack,
				  n && !n.errored && (n.errored = e),
				  i && !i.errored && (i.errored = e),
				  r ? rt.nextTick(Ns, t, e) : Ns(t, e));
		}
		function $b(t, e) {
			if (typeof t._construct != 'function') return;
			let r = t._readableState,
				i = t._writableState;
			r && (r.constructed = !1),
				i && (i.constructed = !1),
				t.once(Us, e),
				!(t.listenerCount(Us) > 1) && rt.nextTick(Hb, t);
		}
		function Hb(t) {
			let e = !1;
			function r(i) {
				if (e) {
					qs(t, i ?? new Mb());
					return;
				}
				e = !0;
				let n = t._readableState,
					o = t._writableState,
					s = o || n;
				n && (n.constructed = !0),
					o && (o.constructed = !0),
					s.destroyed ? t.emit(Hf, i) : i ? qs(t, i, !0) : rt.nextTick(Vb, t);
			}
			try {
				t._construct((i) => {
					rt.nextTick(r, i);
				});
			} catch (i) {
				rt.nextTick(r, i);
			}
		}
		function Vb(t) {
			t.emit(Us);
		}
		function Wf(t) {
			return t?.setHeader && typeof t.abort == 'function';
		}
		function Kf(t) {
			t.emit('close');
		}
		function zb(t, e) {
			t.emit('error', e), rt.nextTick(Kf, t);
		}
		function Kb(t, e) {
			!t ||
				Nb(t) ||
				(!e && !qb(t) && (e = new Lb()),
				Db(t)
					? ((t.socket = null), t.destroy(e))
					: Wf(t)
					? t.abort()
					: Wf(t.req)
					? t.req.abort()
					: typeof t.destroy == 'function'
					? t.destroy(e)
					: typeof t.close == 'function'
					? t.close()
					: e
					? rt.nextTick(zb, t, e)
					: rt.nextTick(Kf, t),
				t.destroyed || (t[Ub] = !0));
		}
		Gf.exports = {
			construct: $b,
			destroyer: Kb,
			destroy: jb,
			undestroy: Wb,
			errorOrDestroy: qs,
		};
	});
	function Y() {
		Y.init.call(this);
	}
	function Xi(t) {
		if (typeof t != 'function')
			throw new TypeError(
				'The "listener" argument must be of type Function. Received type ' + typeof t
			);
	}
	function nc(t) {
		return t._maxListeners === void 0 ? Y.defaultMaxListeners : t._maxListeners;
	}
	function Xf(t, e, r, i) {
		var n, o, s, a;
		if (
			(Xi(r),
			(o = t._events) === void 0
				? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
				: (o.newListener !== void 0 &&
						(t.emit('newListener', e, r.listener ? r.listener : r), (o = t._events)),
				  (s = o[e])),
			s === void 0)
		)
			(s = o[e] = r), ++t._eventsCount;
		else if (
			(typeof s == 'function'
				? (s = o[e] = i ? [r, s] : [s, r])
				: i
				? s.unshift(r)
				: s.push(r),
			(n = nc(t)) > 0 && s.length > n && !s.warned)
		) {
			s.warned = !0;
			var u = new Error(
				'Possible EventEmitter memory leak detected. ' +
					s.length +
					' ' +
					String(e) +
					' listeners added. Use emitter.setMaxListeners() to increase limit'
			);
			(u.name = 'MaxListenersExceededWarning'),
				(u.emitter = t),
				(u.type = e),
				(u.count = s.length),
				(a = u),
				console && console.warn && console.warn(a);
		}
		return t;
	}
	function Gb() {
		if (!this.fired)
			return (
				this.target.removeListener(this.type, this.wrapFn),
				(this.fired = !0),
				arguments.length === 0
					? this.listener.call(this.target)
					: this.listener.apply(this.target, arguments)
			);
	}
	function Zf(t, e, r) {
		var i = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
			n = Gb.bind(i);
		return (n.listener = r), (i.wrapFn = n), n;
	}
	function ec(t, e, r) {
		var i = t._events;
		if (i === void 0) return [];
		var n = i[e];
		return n === void 0
			? []
			: typeof n == 'function'
			? r
				? [n.listener || n]
				: [n]
			: r
			? (function (o) {
					for (var s = new Array(o.length), a = 0; a < s.length; ++a)
						s[a] = o[a].listener || o[a];
					return s;
			  })(n)
			: sc(n, n.length);
	}
	function tc(t) {
		var e = this._events;
		if (e !== void 0) {
			var r = e[t];
			if (typeof r == 'function') return 1;
			if (r !== void 0) return r.length;
		}
		return 0;
	}
	function sc(t, e) {
		for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t[i];
		return r;
	}
	var rc,
		ic,
		Ur,
		Qf,
		Yf,
		Jf,
		Be,
		Ds = we(() => {
			v();
			m();
			_();
			(Ur = typeof Reflect == 'object' ? Reflect : null),
				(Qf =
					Ur && typeof Ur.apply == 'function'
						? Ur.apply
						: function (t, e, r) {
								return Function.prototype.apply.call(t, e, r);
						  });
			ic =
				Ur && typeof Ur.ownKeys == 'function'
					? Ur.ownKeys
					: Object.getOwnPropertySymbols
					? function (t) {
							return Object.getOwnPropertyNames(t).concat(
								Object.getOwnPropertySymbols(t)
							);
					  }
					: function (t) {
							return Object.getOwnPropertyNames(t);
					  };
			Yf =
				Number.isNaN ||
				function (t) {
					return t != t;
				};
			(rc = Y),
				(Y.EventEmitter = Y),
				(Y.prototype._events = void 0),
				(Y.prototype._eventsCount = 0),
				(Y.prototype._maxListeners = void 0);
			Jf = 10;
			Object.defineProperty(Y, 'defaultMaxListeners', {
				enumerable: !0,
				get: function () {
					return Jf;
				},
				set: function (t) {
					if (typeof t != 'number' || t < 0 || Yf(t))
						throw new RangeError(
							'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
								t +
								'.'
						);
					Jf = t;
				},
			}),
				(Y.init = function () {
					(this._events !== void 0 &&
						this._events !== Object.getPrototypeOf(this)._events) ||
						((this._events = Object.create(null)), (this._eventsCount = 0)),
						(this._maxListeners = this._maxListeners || void 0);
				}),
				(Y.prototype.setMaxListeners = function (t) {
					if (typeof t != 'number' || t < 0 || Yf(t))
						throw new RangeError(
							'The value of "n" is out of range. It must be a non-negative number. Received ' +
								t +
								'.'
						);
					return (this._maxListeners = t), this;
				}),
				(Y.prototype.getMaxListeners = function () {
					return nc(this);
				}),
				(Y.prototype.emit = function (t) {
					for (var e = [], r = 1; r < arguments.length; r++) e.push(arguments[r]);
					var i = t === 'error',
						n = this._events;
					if (n !== void 0) i = i && n.error === void 0;
					else if (!i) return !1;
					if (i) {
						var o;
						if ((e.length > 0 && (o = e[0]), o instanceof Error)) throw o;
						var s = new Error('Unhandled error.' + (o ? ' (' + o.message + ')' : ''));
						throw ((s.context = o), s);
					}
					var a = n[t];
					if (a === void 0) return !1;
					if (typeof a == 'function') Qf(a, this, e);
					else {
						var u = a.length,
							c = sc(a, u);
						for (r = 0; r < u; ++r) Qf(c[r], this, e);
					}
					return !0;
				}),
				(Y.prototype.addListener = function (t, e) {
					return Xf(this, t, e, !1);
				}),
				(Y.prototype.on = Y.prototype.addListener),
				(Y.prototype.prependListener = function (t, e) {
					return Xf(this, t, e, !0);
				}),
				(Y.prototype.once = function (t, e) {
					return Xi(e), this.on(t, Zf(this, t, e)), this;
				}),
				(Y.prototype.prependOnceListener = function (t, e) {
					return Xi(e), this.prependListener(t, Zf(this, t, e)), this;
				}),
				(Y.prototype.removeListener = function (t, e) {
					var r, i, n, o, s;
					if ((Xi(e), (i = this._events) === void 0)) return this;
					if ((r = i[t]) === void 0) return this;
					if (r === e || r.listener === e)
						--this._eventsCount == 0
							? (this._events = Object.create(null))
							: (delete i[t],
							  i.removeListener && this.emit('removeListener', t, r.listener || e));
					else if (typeof r != 'function') {
						for (n = -1, o = r.length - 1; o >= 0; o--)
							if (r[o] === e || r[o].listener === e) {
								(s = r[o].listener), (n = o);
								break;
							}
						if (n < 0) return this;
						n === 0
							? r.shift()
							: (function (a, u) {
									for (; u + 1 < a.length; u++) a[u] = a[u + 1];
									a.pop();
							  })(r, n),
							r.length === 1 && (i[t] = r[0]),
							i.removeListener !== void 0 && this.emit('removeListener', t, s || e);
					}
					return this;
				}),
				(Y.prototype.off = Y.prototype.removeListener),
				(Y.prototype.removeAllListeners = function (t) {
					var e, r, i;
					if ((r = this._events) === void 0) return this;
					if (r.removeListener === void 0)
						return (
							arguments.length === 0
								? ((this._events = Object.create(null)), (this._eventsCount = 0))
								: r[t] !== void 0 &&
								  (--this._eventsCount == 0
										? (this._events = Object.create(null))
										: delete r[t]),
							this
						);
					if (arguments.length === 0) {
						var n,
							o = Object.keys(r);
						for (i = 0; i < o.length; ++i)
							(n = o[i]) !== 'removeListener' && this.removeAllListeners(n);
						return (
							this.removeAllListeners('removeListener'),
							(this._events = Object.create(null)),
							(this._eventsCount = 0),
							this
						);
					}
					if (typeof (e = r[t]) == 'function') this.removeListener(t, e);
					else if (e !== void 0)
						for (i = e.length - 1; i >= 0; i--) this.removeListener(t, e[i]);
					return this;
				}),
				(Y.prototype.listeners = function (t) {
					return ec(this, t, !0);
				}),
				(Y.prototype.rawListeners = function (t) {
					return ec(this, t, !1);
				}),
				(Y.listenerCount = function (t, e) {
					return typeof t.listenerCount == 'function'
						? t.listenerCount(e)
						: tc.call(t, e);
				}),
				(Y.prototype.listenerCount = tc),
				(Y.prototype.eventNames = function () {
					return this._eventsCount > 0 ? ic(this._events) : [];
				});
			Be = rc;
			Be.EventEmitter;
			Be.defaultMaxListeners;
			Be.init;
			Be.listenerCount;
			Be.EventEmitter;
			Be.defaultMaxListeners;
			Be.init;
			Be.listenerCount;
		});
	var rr = {};
	Qt(rr, {
		EventEmitter: () => Qb,
		default: () => Be,
		defaultMaxListeners: () => Yb,
		init: () => Jb,
		listenerCount: () => Xb,
		on: () => Zb,
		once: () => ew,
	});
	var Qb,
		Yb,
		Jb,
		Xb,
		Zb,
		ew,
		ir = we(() => {
			v();
			m();
			_();
			Ds();
			Ds();
			Be.once = function (t, e) {
				return new Promise((r, i) => {
					function n(...s) {
						o !== void 0 && t.removeListener('error', o), r(s);
					}
					let o;
					e !== 'error' &&
						((o = (s) => {
							t.removeListener(name, n), i(s);
						}),
						t.once('error', o)),
						t.once(e, n);
				});
			};
			Be.on = function (t, e) {
				let r = [],
					i = [],
					n = null,
					o = !1,
					s = {
						async next() {
							let c = r.shift();
							if (c) return createIterResult(c, !1);
							if (n) {
								let h = Promise.reject(n);
								return (n = null), h;
							}
							return o
								? createIterResult(void 0, !0)
								: new Promise((h, d) => i.push({ resolve: h, reject: d }));
						},
						async return() {
							t.removeListener(e, a), t.removeListener('error', u), (o = !0);
							for (let c of i) c.resolve(createIterResult(void 0, !0));
							return createIterResult(void 0, !0);
						},
						throw(c) {
							(n = c), t.removeListener(e, a), t.removeListener('error', u);
						},
						[Symbol.asyncIterator]() {
							return this;
						},
					};
				return t.on(e, a), t.on('error', u), s;
				function a(...c) {
					let h = i.shift();
					h ? h.resolve(createIterResult(c, !1)) : r.push(c);
				}
				function u(c) {
					o = !0;
					let h = i.shift();
					h ? h.reject(c) : (n = c), s.return();
				}
			};
			({
				EventEmitter: Qb,
				defaultMaxListeners: Yb,
				init: Jb,
				listenerCount: Xb,
				on: Zb,
				once: ew,
			} = Be);
		});
	var tn = M((KI, ac) => {
		'use strict';
		v();
		m();
		_();
		var { ArrayIsArray: tw, ObjectSetPrototypeOf: oc } = ce(),
			{ EventEmitter: Zi } = (ir(), X(rr));
		function en(t) {
			Zi.call(this, t);
		}
		oc(en.prototype, Zi.prototype);
		oc(en, Zi);
		en.prototype.pipe = function (t, e) {
			let r = this;
			function i(h) {
				t.writable && t.write(h) === !1 && r.pause && r.pause();
			}
			r.on('data', i);
			function n() {
				r.readable && r.resume && r.resume();
			}
			t.on('drain', n),
				!t._isStdio && (!e || e.end !== !1) && (r.on('end', s), r.on('close', a));
			let o = !1;
			function s() {
				o || ((o = !0), t.end());
			}
			function a() {
				o || ((o = !0), typeof t.destroy == 'function' && t.destroy());
			}
			function u(h) {
				c(), Zi.listenerCount(this, 'error') === 0 && this.emit('error', h);
			}
			js(r, 'error', u), js(t, 'error', u);
			function c() {
				r.removeListener('data', i),
					t.removeListener('drain', n),
					r.removeListener('end', s),
					r.removeListener('close', a),
					r.removeListener('error', u),
					t.removeListener('error', u),
					r.removeListener('end', c),
					r.removeListener('close', c),
					t.removeListener('close', c);
			}
			return r.on('end', c), r.on('close', c), t.on('close', c), t.emit('pipe', r), t;
		};
		function js(t, e, r) {
			if (typeof t.prependListener == 'function') return t.prependListener(e, r);
			!t._events || !t._events[e]
				? t.on(e, r)
				: tw(t._events[e])
				? t._events[e].unshift(r)
				: (t._events[e] = [r, t._events[e]]);
		}
		ac.exports = { Stream: en, prependListener: js };
	});
	var ci = M((eT, rn) => {
		'use strict';
		v();
		m();
		_();
		var { AbortError: lc, codes: rw } = Se(),
			{ isNodeStream: uc, isWebStream: iw, kControllerErrorFunction: nw } = tt(),
			sw = vt(),
			{ ERR_INVALID_ARG_TYPE: fc } = rw,
			ow = (t, e) => {
				if (typeof t != 'object' || !('aborted' in t)) throw new fc(e, 'AbortSignal', t);
			};
		rn.exports.addAbortSignal = function (e, r) {
			if ((ow(e, 'signal'), !uc(r) && !iw(r)))
				throw new fc('stream', ['ReadableStream', 'WritableStream', 'Stream'], r);
			return rn.exports.addAbortSignalNoValidate(e, r);
		};
		rn.exports.addAbortSignalNoValidate = function (t, e) {
			if (typeof t != 'object' || !('aborted' in t)) return e;
			let r = uc(e)
				? () => {
						e.destroy(new lc(void 0, { cause: t.reason }));
				  }
				: () => {
						e[nw](new lc(void 0, { cause: t.reason }));
				  };
			return (
				t.aborted
					? r()
					: (t.addEventListener('abort', r),
					  sw(e, () => t.removeEventListener('abort', r))),
				e
			);
		};
	});
	var dc = M((lT, hc) => {
		'use strict';
		v();
		m();
		_();
		var {
				StringPrototypeSlice: cc,
				SymbolIterator: aw,
				TypedArrayPrototypeSet: nn,
				Uint8Array: lw,
			} = ce(),
			{ Buffer: Fs } = (ye(), X(_e)),
			{ inspect: uw } = Je();
		hc.exports = class {
			constructor() {
				(this.head = null), (this.tail = null), (this.length = 0);
			}
			push(e) {
				let r = { data: e, next: null };
				this.length > 0 ? (this.tail.next = r) : (this.head = r),
					(this.tail = r),
					++this.length;
			}
			unshift(e) {
				let r = { data: e, next: this.head };
				this.length === 0 && (this.tail = r), (this.head = r), ++this.length;
			}
			shift() {
				if (this.length === 0) return;
				let e = this.head.data;
				return (
					this.length === 1
						? (this.head = this.tail = null)
						: (this.head = this.head.next),
					--this.length,
					e
				);
			}
			clear() {
				(this.head = this.tail = null), (this.length = 0);
			}
			join(e) {
				if (this.length === 0) return '';
				let r = this.head,
					i = '' + r.data;
				for (; (r = r.next) !== null; ) i += e + r.data;
				return i;
			}
			concat(e) {
				if (this.length === 0) return Fs.alloc(0);
				let r = Fs.allocUnsafe(e >>> 0),
					i = this.head,
					n = 0;
				for (; i; ) nn(r, i.data, n), (n += i.data.length), (i = i.next);
				return r;
			}
			consume(e, r) {
				let i = this.head.data;
				if (e < i.length) {
					let n = i.slice(0, e);
					return (this.head.data = i.slice(e)), n;
				}
				return e === i.length ? this.shift() : r ? this._getString(e) : this._getBuffer(e);
			}
			first() {
				return this.head.data;
			}
			*[aw]() {
				for (let e = this.head; e; e = e.next) yield e.data;
			}
			_getString(e) {
				let r = '',
					i = this.head,
					n = 0;
				do {
					let o = i.data;
					if (e > o.length) (r += o), (e -= o.length);
					else {
						e === o.length
							? ((r += o),
							  ++n,
							  i.next ? (this.head = i.next) : (this.head = this.tail = null))
							: ((r += cc(o, 0, e)), (this.head = i), (i.data = cc(o, e)));
						break;
					}
					++n;
				} while ((i = i.next) !== null);
				return (this.length -= n), r;
			}
			_getBuffer(e) {
				let r = Fs.allocUnsafe(e),
					i = e,
					n = this.head,
					o = 0;
				do {
					let s = n.data;
					if (e > s.length) nn(r, s, i - e), (e -= s.length);
					else {
						e === s.length
							? (nn(r, s, i - e),
							  ++o,
							  n.next ? (this.head = n.next) : (this.head = this.tail = null))
							: (nn(r, new lw(s.buffer, s.byteOffset, e), i - e),
							  (this.head = n),
							  (n.data = s.slice(e)));
						break;
					}
					++o;
				} while ((n = n.next) !== null);
				return (this.length -= o), r;
			}
			[Symbol.for('nodejs.util.inspect.custom')](e, r) {
				return uw(this, { ...r, depth: 0, customInspect: !1 });
			}
		};
	});
	var sn = M((gT, gc) => {
		'use strict';
		v();
		m();
		_();
		var { MathFloor: fw, NumberIsInteger: cw } = ce(),
			{ ERR_INVALID_ARG_VALUE: hw } = Se().codes;
		function dw(t, e, r) {
			return t.highWaterMark != null ? t.highWaterMark : e ? t[r] : null;
		}
		function pc(t) {
			return t ? 16 : 16 * 1024;
		}
		function pw(t, e, r, i) {
			let n = dw(e, i, r);
			if (n != null) {
				if (!cw(n) || n < 0) {
					let o = i ? `options.${r}` : 'options.highWaterMark';
					throw new hw(o, n);
				}
				return fw(n);
			}
			return pc(t.objectMode);
		}
		gc.exports = { getHighWaterMark: pw, getDefaultHighWaterMark: pc };
	});
	function wc(t) {
		var e = t.length;
		if (e % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
		var r = t.indexOf('=');
		return r === -1 && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
	}
	function gw(t, e, r) {
		for (var i, n, o = [], s = e; s < r; s += 3)
			(i = ((t[s] << 16) & 16711680) + ((t[s + 1] << 8) & 65280) + (255 & t[s + 2])),
				o.push(
					$e[((n = i) >> 18) & 63] + $e[(n >> 12) & 63] + $e[(n >> 6) & 63] + $e[63 & n]
				);
		return o.join('');
	}
	function Et(t) {
		if (t > 2147483647)
			throw new RangeError('The value "' + t + '" is invalid for option "size"');
		var e = new Uint8Array(t);
		return Object.setPrototypeOf(e, k.prototype), e;
	}
	function k(t, e, r) {
		if (typeof t == 'number') {
			if (typeof e == 'string')
				throw new TypeError(
					'The "string" argument must be of type string. Received type number'
				);
			return Vs(t);
		}
		return Cc(t, e, r);
	}
	function Cc(t, e, r) {
		if (typeof t == 'string')
			return (function (o, s) {
				if (((typeof s == 'string' && s !== '') || (s = 'utf8'), !k.isEncoding(s)))
					throw new TypeError('Unknown encoding: ' + s);
				var a = 0 | Pc(o, s),
					u = Et(a),
					c = u.write(o, s);
				return c !== a && (u = u.slice(0, c)), u;
			})(t, e);
		if (ArrayBuffer.isView(t)) return Ws(t);
		if (t == null)
			throw new TypeError(
				'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
					typeof t
			);
		if (
			St(t, ArrayBuffer) ||
			(t && St(t.buffer, ArrayBuffer)) ||
			(typeof SharedArrayBuffer < 'u' &&
				(St(t, SharedArrayBuffer) || (t && St(t.buffer, SharedArrayBuffer))))
		)
			return mc(t, e, r);
		if (typeof t == 'number')
			throw new TypeError(
				'The "value" argument must not be of type number. Received type number'
			);
		var i = t.valueOf && t.valueOf();
		if (i != null && i !== t) return k.from(i, e, r);
		var n = (function (o) {
			if (k.isBuffer(o)) {
				var s = 0 | Gs(o.length),
					a = Et(s);
				return a.length === 0 || o.copy(a, 0, 0, s), a;
			}
			if (o.length !== void 0)
				return typeof o.length != 'number' || Qs(o.length) ? Et(0) : Ws(o);
			if (o.type === 'Buffer' && Array.isArray(o.data)) return Ws(o.data);
		})(t);
		if (n) return n;
		if (
			typeof Symbol < 'u' &&
			Symbol.toPrimitive != null &&
			typeof t[Symbol.toPrimitive] == 'function'
		)
			return k.from(t[Symbol.toPrimitive]('string'), e, r);
		throw new TypeError(
			'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
				typeof t
		);
	}
	function Bc(t) {
		if (typeof t != 'number') throw new TypeError('"size" argument must be of type number');
		if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
	}
	function Vs(t) {
		return Bc(t), Et(t < 0 ? 0 : 0 | Gs(t));
	}
	function Ws(t) {
		for (var e = t.length < 0 ? 0 : 0 | Gs(t.length), r = Et(e), i = 0; i < e; i += 1)
			r[i] = 255 & t[i];
		return r;
	}
	function mc(t, e, r) {
		if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
		if (t.byteLength < e + (r || 0))
			throw new RangeError('"length" is outside of buffer bounds');
		var i;
		return (
			(i =
				e === void 0 && r === void 0
					? new Uint8Array(t)
					: r === void 0
					? new Uint8Array(t, e)
					: new Uint8Array(t, e, r)),
			Object.setPrototypeOf(i, k.prototype),
			i
		);
	}
	function Gs(t) {
		if (t >= 2147483647)
			throw new RangeError(
				'Attempt to allocate Buffer larger than maximum size: 0x' +
					(2147483647).toString(16) +
					' bytes'
			);
		return 0 | t;
	}
	function Pc(t, e) {
		if (k.isBuffer(t)) return t.length;
		if (ArrayBuffer.isView(t) || St(t, ArrayBuffer)) return t.byteLength;
		if (typeof t != 'string')
			throw new TypeError(
				'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
					typeof t
			);
		var r = t.length,
			i = arguments.length > 2 && arguments[2] === !0;
		if (!i && r === 0) return 0;
		for (var n = !1; ; )
			switch (e) {
				case 'ascii':
				case 'latin1':
				case 'binary':
					return r;
				case 'utf8':
				case 'utf-8':
					return zs(t).length;
				case 'ucs2':
				case 'ucs-2':
				case 'utf16le':
				case 'utf-16le':
					return 2 * r;
				case 'hex':
					return r >>> 1;
				case 'base64':
					return Mc(t).length;
				default:
					if (n) return i ? -1 : zs(t).length;
					(e = ('' + e).toLowerCase()), (n = !0);
			}
	}
	function bw(t, e, r) {
		var i = !1;
		if (
			((e === void 0 || e < 0) && (e = 0),
			e > this.length ||
				((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
				(r >>>= 0) <= (e >>>= 0))
		)
			return '';
		for (t || (t = 'utf8'); ; )
			switch (t) {
				case 'hex':
					return Tw(this, e, r);
				case 'utf8':
				case 'utf-8':
					return kc(this, e, r);
				case 'ascii':
					return Aw(this, e, r);
				case 'latin1':
				case 'binary':
					return Iw(this, e, r);
				case 'base64':
					return Sw(this, e, r);
				case 'ucs2':
				case 'ucs-2':
				case 'utf16le':
				case 'utf-16le':
					return Rw(this, e, r);
				default:
					if (i) throw new TypeError('Unknown encoding: ' + t);
					(t = (t + '').toLowerCase()), (i = !0);
			}
	}
	function sr(t, e, r) {
		var i = t[e];
		(t[e] = t[r]), (t[r] = i);
	}
	function vc(t, e, r, i, n) {
		if (t.length === 0) return -1;
		if (
			(typeof r == 'string'
				? ((i = r), (r = 0))
				: r > 2147483647
				? (r = 2147483647)
				: r < -2147483648 && (r = -2147483648),
			Qs((r = +r)) && (r = n ? 0 : t.length - 1),
			r < 0 && (r = t.length + r),
			r >= t.length)
		) {
			if (n) return -1;
			r = t.length - 1;
		} else if (r < 0) {
			if (!n) return -1;
			r = 0;
		}
		if ((typeof e == 'string' && (e = k.from(e, i)), k.isBuffer(e)))
			return e.length === 0 ? -1 : Ec(t, e, r, i, n);
		if (typeof e == 'number')
			return (
				(e &= 255),
				typeof Uint8Array.prototype.indexOf == 'function'
					? n
						? Uint8Array.prototype.indexOf.call(t, e, r)
						: Uint8Array.prototype.lastIndexOf.call(t, e, r)
					: Ec(t, [e], r, i, n)
			);
		throw new TypeError('val must be string, number or Buffer');
	}
	function Ec(t, e, r, i, n) {
		var o,
			s = 1,
			a = t.length,
			u = e.length;
		if (
			i !== void 0 &&
			((i = String(i).toLowerCase()) === 'ucs2' ||
				i === 'ucs-2' ||
				i === 'utf16le' ||
				i === 'utf-16le')
		) {
			if (t.length < 2 || e.length < 2) return -1;
			(s = 2), (a /= 2), (u /= 2), (r /= 2);
		}
		function c(y, w) {
			return s === 1 ? y[w] : y.readUInt16BE(w * s);
		}
		if (n) {
			var h = -1;
			for (o = r; o < a; o++)
				if (c(t, o) === c(e, h === -1 ? 0 : o - h)) {
					if ((h === -1 && (h = o), o - h + 1 === u)) return h * s;
				} else h !== -1 && (o -= o - h), (h = -1);
		} else
			for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
				for (var d = !0, g = 0; g < u; g++)
					if (c(t, o + g) !== c(e, g)) {
						d = !1;
						break;
					}
				if (d) return o;
			}
		return -1;
	}
	function ww(t, e, r, i) {
		r = Number(r) || 0;
		var n = t.length - r;
		i ? (i = Number(i)) > n && (i = n) : (i = n);
		var o = e.length;
		i > o / 2 && (i = o / 2);
		for (var s = 0; s < i; ++s) {
			var a = parseInt(e.substr(2 * s, 2), 16);
			if (Qs(a)) return s;
			t[r + s] = a;
		}
		return s;
	}
	function _w(t, e, r, i) {
		return un(zs(e, t.length - r), t, r, i);
	}
	function Oc(t, e, r, i) {
		return un(
			(function (n) {
				for (var o = [], s = 0; s < n.length; ++s) o.push(255 & n.charCodeAt(s));
				return o;
			})(e),
			t,
			r,
			i
		);
	}
	function mw(t, e, r, i) {
		return Oc(t, e, r, i);
	}
	function vw(t, e, r, i) {
		return un(Mc(e), t, r, i);
	}
	function Ew(t, e, r, i) {
		return un(
			(function (n, o) {
				for (var s, a, u, c = [], h = 0; h < n.length && !((o -= 2) < 0); ++h)
					(s = n.charCodeAt(h)), (a = s >> 8), (u = s % 256), c.push(u), c.push(a);
				return c;
			})(e, t.length - r),
			t,
			r,
			i
		);
	}
	function Sw(t, e, r) {
		return e === 0 && r === t.length ? Hs.fromByteArray(t) : Hs.fromByteArray(t.slice(e, r));
	}
	function kc(t, e, r) {
		r = Math.min(t.length, r);
		for (var i = [], n = e; n < r; ) {
			var o,
				s,
				a,
				u,
				c = t[n],
				h = null,
				d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
			if (n + d <= r)
				switch (d) {
					case 1:
						c < 128 && (h = c);
						break;
					case 2:
						(192 & (o = t[n + 1])) == 128 &&
							(u = ((31 & c) << 6) | (63 & o)) > 127 &&
							(h = u);
						break;
					case 3:
						(o = t[n + 1]),
							(s = t[n + 2]),
							(192 & o) == 128 &&
								(192 & s) == 128 &&
								(u = ((15 & c) << 12) | ((63 & o) << 6) | (63 & s)) > 2047 &&
								(u < 55296 || u > 57343) &&
								(h = u);
						break;
					case 4:
						(o = t[n + 1]),
							(s = t[n + 2]),
							(a = t[n + 3]),
							(192 & o) == 128 &&
								(192 & s) == 128 &&
								(192 & a) == 128 &&
								(u =
									((15 & c) << 18) |
									((63 & o) << 12) |
									((63 & s) << 6) |
									(63 & a)) > 65535 &&
								u < 1114112 &&
								(h = u);
				}
			h === null
				? ((h = 65533), (d = 1))
				: h > 65535 &&
				  ((h -= 65536), i.push(((h >>> 10) & 1023) | 55296), (h = 56320 | (1023 & h))),
				i.push(h),
				(n += d);
		}
		return (function (g) {
			var y = g.length;
			if (y <= 4096) return String.fromCharCode.apply(String, g);
			for (var w = '', E = 0; E < y; )
				w += String.fromCharCode.apply(String, g.slice(E, (E += 4096)));
			return w;
		})(i);
	}
	function Aw(t, e, r) {
		var i = '';
		r = Math.min(t.length, r);
		for (var n = e; n < r; ++n) i += String.fromCharCode(127 & t[n]);
		return i;
	}
	function Iw(t, e, r) {
		var i = '';
		r = Math.min(t.length, r);
		for (var n = e; n < r; ++n) i += String.fromCharCode(t[n]);
		return i;
	}
	function Tw(t, e, r) {
		var i = t.length;
		(!e || e < 0) && (e = 0), (!r || r < 0 || r > i) && (r = i);
		for (var n = '', o = e; o < r; ++o) n += Bw[t[o]];
		return n;
	}
	function Rw(t, e, r) {
		for (var i = t.slice(e, r), n = '', o = 0; o < i.length; o += 2)
			n += String.fromCharCode(i[o] + 256 * i[o + 1]);
		return n;
	}
	function be(t, e, r) {
		if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
		if (t + e > r) throw new RangeError('Trying to access beyond buffer length');
	}
	function Pe(t, e, r, i, n, o) {
		if (!k.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
		if (e > n || e < o) throw new RangeError('"value" argument is out of bounds');
		if (r + i > t.length) throw new RangeError('Index out of range');
	}
	function xc(t, e, r, i, n, o) {
		if (r + i > t.length) throw new RangeError('Index out of range');
		if (r < 0) throw new RangeError('Index out of range');
	}
	function Sc(t, e, r, i, n) {
		return (e = +e), (r >>>= 0), n || xc(t, 0, r, 4), Nr.write(t, e, r, i, 23, 4), r + 4;
	}
	function Ac(t, e, r, i, n) {
		return (e = +e), (r >>>= 0), n || xc(t, 0, r, 8), Nr.write(t, e, r, i, 52, 8), r + 8;
	}
	function zs(t, e) {
		var r;
		e = e || 1 / 0;
		for (var i = t.length, n = null, o = [], s = 0; s < i; ++s) {
			if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
				if (!n) {
					if (r > 56319) {
						(e -= 3) > -1 && o.push(239, 191, 189);
						continue;
					}
					if (s + 1 === i) {
						(e -= 3) > -1 && o.push(239, 191, 189);
						continue;
					}
					n = r;
					continue;
				}
				if (r < 56320) {
					(e -= 3) > -1 && o.push(239, 191, 189), (n = r);
					continue;
				}
				r = 65536 + (((n - 55296) << 10) | (r - 56320));
			} else n && (e -= 3) > -1 && o.push(239, 191, 189);
			if (((n = null), r < 128)) {
				if ((e -= 1) < 0) break;
				o.push(r);
			} else if (r < 2048) {
				if ((e -= 2) < 0) break;
				o.push((r >> 6) | 192, (63 & r) | 128);
			} else if (r < 65536) {
				if ((e -= 3) < 0) break;
				o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
			} else {
				if (!(r < 1114112)) throw new Error('Invalid code point');
				if ((e -= 4) < 0) break;
				o.push(
					(r >> 18) | 240,
					((r >> 12) & 63) | 128,
					((r >> 6) & 63) | 128,
					(63 & r) | 128
				);
			}
		}
		return o;
	}
	function Mc(t) {
		return Hs.toByteArray(
			(function (e) {
				if ((e = (e = e.split('=')[0]).trim().replace(Cw, '')).length < 2) return '';
				for (; e.length % 4 != 0; ) e += '=';
				return e;
			})(t)
		);
	}
	function un(t, e, r, i) {
		for (var n = 0; n < i && !(n + r >= e.length || n >= t.length); ++n) e[n + r] = t[n];
		return n;
	}
	function St(t, e) {
		return (
			t instanceof e ||
			(t != null &&
				t.constructor != null &&
				t.constructor.name != null &&
				t.constructor.name === e.name)
		);
	}
	function Qs(t) {
		return t != t;
	}
	function Ic(t, e) {
		for (var r in t) e[r] = t[r];
	}
	function or(t, e, r) {
		return it(t, e, r);
	}
	function hi(t) {
		var e;
		switch (
			((this.encoding = (function (r) {
				var i = (function (n) {
					if (!n) return 'utf8';
					for (var o; ; )
						switch (n) {
							case 'utf8':
							case 'utf-8':
								return 'utf8';
							case 'ucs2':
							case 'ucs-2':
							case 'utf16le':
							case 'utf-16le':
								return 'utf16le';
							case 'latin1':
							case 'binary':
								return 'latin1';
							case 'base64':
							case 'ascii':
							case 'hex':
								return n;
							default:
								if (o) return;
								(n = ('' + n).toLowerCase()), (o = !0);
						}
				})(r);
				if (typeof i != 'string' && (Ks.isEncoding === Tc || !Tc(r)))
					throw new Error('Unknown encoding: ' + r);
				return i || r;
			})(t)),
			this.encoding)
		) {
			case 'utf16le':
				(this.text = kw), (this.end = xw), (e = 4);
				break;
			case 'utf8':
				(this.fillLast = Ow), (e = 4);
				break;
			case 'base64':
				(this.text = Mw), (this.end = Lw), (e = 3);
				break;
			default:
				return (this.write = Uw), (this.end = Nw), void 0;
		}
		(this.lastNeed = 0), (this.lastTotal = 0), (this.lastChar = Ks.allocUnsafe(e));
	}
	function $s(t) {
		return t <= 127
			? 0
			: t >> 5 == 6
			? 2
			: t >> 4 == 14
			? 3
			: t >> 3 == 30
			? 4
			: t >> 6 == 2
			? -1
			: -2;
	}
	function Ow(t) {
		var e = this.lastTotal - this.lastNeed,
			r = (function (i, n, o) {
				if ((192 & n[0]) != 128) return (i.lastNeed = 0), '\uFFFD';
				if (i.lastNeed > 1 && n.length > 1) {
					if ((192 & n[1]) != 128) return (i.lastNeed = 1), '\uFFFD';
					if (i.lastNeed > 2 && n.length > 2 && (192 & n[2]) != 128)
						return (i.lastNeed = 2), '\uFFFD';
				}
			})(this, t);
		return r !== void 0
			? r
			: this.lastNeed <= t.length
			? (t.copy(this.lastChar, e, 0, this.lastNeed),
			  this.lastChar.toString(this.encoding, 0, this.lastTotal))
			: (t.copy(this.lastChar, e, 0, t.length), (this.lastNeed -= t.length), void 0);
	}
	function kw(t, e) {
		if ((t.length - e) % 2 == 0) {
			var r = t.toString('utf16le', e);
			if (r) {
				var i = r.charCodeAt(r.length - 1);
				if (i >= 55296 && i <= 56319)
					return (
						(this.lastNeed = 2),
						(this.lastTotal = 4),
						(this.lastChar[0] = t[t.length - 2]),
						(this.lastChar[1] = t[t.length - 1]),
						r.slice(0, -1)
					);
			}
			return r;
		}
		return (
			(this.lastNeed = 1),
			(this.lastTotal = 2),
			(this.lastChar[0] = t[t.length - 1]),
			t.toString('utf16le', e, t.length - 1)
		);
	}
	function xw(t) {
		var e = t && t.length ? this.write(t) : '';
		if (this.lastNeed) {
			var r = this.lastTotal - this.lastNeed;
			return e + this.lastChar.toString('utf16le', 0, r);
		}
		return e;
	}
	function Mw(t, e) {
		var r = (t.length - e) % 3;
		return r === 0
			? t.toString('base64', e)
			: ((this.lastNeed = 3 - r),
			  (this.lastTotal = 3),
			  r === 1
					? (this.lastChar[0] = t[t.length - 1])
					: ((this.lastChar[0] = t[t.length - 2]), (this.lastChar[1] = t[t.length - 1])),
			  t.toString('base64', e, t.length - r));
	}
	function Lw(t) {
		var e = t && t.length ? this.write(t) : '';
		return this.lastNeed ? e + this.lastChar.toString('base64', 0, 3 - this.lastNeed) : e;
	}
	function Uw(t) {
		return t.toString(this.encoding);
	}
	function Nw(t) {
		return t && t.length ? this.write(t) : '';
	}
	var Rc,
		$e,
		ke,
		yc,
		on,
		nr,
		bc,
		yw,
		At,
		Hs,
		Nr,
		_c,
		Cw,
		Bw,
		an,
		ln,
		it,
		Pw,
		ar,
		Ks,
		Tc,
		Ys = we(() => {
			v();
			m();
			_();
			for (
				Rc = {
					byteLength: function (t) {
						var e = wc(t),
							r = e[0],
							i = e[1];
						return (3 * (r + i)) / 4 - i;
					},
					toByteArray: function (t) {
						var e,
							r,
							i = wc(t),
							n = i[0],
							o = i[1],
							s = new yc(
								(function (c, h, d) {
									return (3 * (h + d)) / 4 - d;
								})(0, n, o)
							),
							a = 0,
							u = o > 0 ? n - 4 : n;
						for (r = 0; r < u; r += 4)
							(e =
								(ke[t.charCodeAt(r)] << 18) |
								(ke[t.charCodeAt(r + 1)] << 12) |
								(ke[t.charCodeAt(r + 2)] << 6) |
								ke[t.charCodeAt(r + 3)]),
								(s[a++] = (e >> 16) & 255),
								(s[a++] = (e >> 8) & 255),
								(s[a++] = 255 & e);
						return (
							o === 2 &&
								((e = (ke[t.charCodeAt(r)] << 2) | (ke[t.charCodeAt(r + 1)] >> 4)),
								(s[a++] = 255 & e)),
							o === 1 &&
								((e =
									(ke[t.charCodeAt(r)] << 10) |
									(ke[t.charCodeAt(r + 1)] << 4) |
									(ke[t.charCodeAt(r + 2)] >> 2)),
								(s[a++] = (e >> 8) & 255),
								(s[a++] = 255 & e)),
							s
						);
					},
					fromByteArray: function (t) {
						for (
							var e, r = t.length, i = r % 3, n = [], o = 0, s = r - i;
							o < s;
							o += 16383
						)
							n.push(gw(t, o, o + 16383 > s ? s : o + 16383));
						return (
							i === 1
								? ((e = t[r - 1]), n.push($e[e >> 2] + $e[(e << 4) & 63] + '=='))
								: i === 2 &&
								  ((e = (t[r - 2] << 8) + t[r - 1]),
								  n.push(
										$e[e >> 10] + $e[(e >> 4) & 63] + $e[(e << 2) & 63] + '='
								  )),
							n.join('')
						);
					},
				},
					$e = [],
					ke = [],
					yc = typeof Uint8Array < 'u' ? Uint8Array : Array,
					on = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
					nr = 0,
					bc = on.length;
				nr < bc;
				++nr
			)
				($e[nr] = on[nr]), (ke[on.charCodeAt(nr)] = nr);
			(ke['-'.charCodeAt(0)] = 62), (ke['_'.charCodeAt(0)] = 63);
			(yw = {
				read: function (t, e, r, i, n) {
					var o,
						s,
						a = 8 * n - i - 1,
						u = (1 << a) - 1,
						c = u >> 1,
						h = -7,
						d = r ? n - 1 : 0,
						g = r ? -1 : 1,
						y = t[e + d];
					for (
						d += g, o = y & ((1 << -h) - 1), y >>= -h, h += a;
						h > 0;
						o = 256 * o + t[e + d], d += g, h -= 8
					);
					for (
						s = o & ((1 << -h) - 1), o >>= -h, h += i;
						h > 0;
						s = 256 * s + t[e + d], d += g, h -= 8
					);
					if (o === 0) o = 1 - c;
					else {
						if (o === u) return s ? NaN : (1 / 0) * (y ? -1 : 1);
						(s += Math.pow(2, i)), (o -= c);
					}
					return (y ? -1 : 1) * s * Math.pow(2, o - i);
				},
				write: function (t, e, r, i, n, o) {
					var s,
						a,
						u,
						c = 8 * o - n - 1,
						h = (1 << c) - 1,
						d = h >> 1,
						g = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
						y = i ? 0 : o - 1,
						w = i ? 1 : -1,
						E = e < 0 || (e === 0 && 1 / e < 0) ? 1 : 0;
					for (
						e = Math.abs(e),
							isNaN(e) || e === 1 / 0
								? ((a = isNaN(e) ? 1 : 0), (s = h))
								: ((s = Math.floor(Math.log(e) / Math.LN2)),
								  e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
								  (e += s + d >= 1 ? g / u : g * Math.pow(2, 1 - d)) * u >= 2 &&
										(s++, (u /= 2)),
								  s + d >= h
										? ((a = 0), (s = h))
										: s + d >= 1
										? ((a = (e * u - 1) * Math.pow(2, n)), (s += d))
										: ((a = e * Math.pow(2, d - 1) * Math.pow(2, n)), (s = 0)));
						n >= 8;
						t[r + y] = 255 & a, y += w, a /= 256, n -= 8
					);
					for (
						s = (s << n) | a, c += n;
						c > 0;
						t[r + y] = 255 & s, y += w, s /= 256, c -= 8
					);
					t[r + y - w] |= 128 * E;
				},
			}),
				(At = {}),
				(Hs = Rc),
				(Nr = yw),
				(_c =
					typeof Symbol == 'function' && typeof Symbol.for == 'function'
						? Symbol.for('nodejs.util.inspect.custom')
						: null);
			(At.Buffer = k),
				(At.SlowBuffer = function (t) {
					return +t != t && (t = 0), k.alloc(+t);
				}),
				(At.INSPECT_MAX_BYTES = 50);
			(At.kMaxLength = 2147483647),
				(k.TYPED_ARRAY_SUPPORT = (function () {
					try {
						var t = new Uint8Array(1),
							e = {
								foo: function () {
									return 42;
								},
							};
						return (
							Object.setPrototypeOf(e, Uint8Array.prototype),
							Object.setPrototypeOf(t, e),
							t.foo() === 42
						);
					} catch {
						return !1;
					}
				})()),
				k.TYPED_ARRAY_SUPPORT ||
					typeof console > 'u' ||
					typeof console.error != 'function' ||
					console.error(
						'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
					),
				Object.defineProperty(k.prototype, 'parent', {
					enumerable: !0,
					get: function () {
						if (k.isBuffer(this)) return this.buffer;
					},
				}),
				Object.defineProperty(k.prototype, 'offset', {
					enumerable: !0,
					get: function () {
						if (k.isBuffer(this)) return this.byteOffset;
					},
				}),
				(k.poolSize = 8192),
				(k.from = function (t, e, r) {
					return Cc(t, e, r);
				}),
				Object.setPrototypeOf(k.prototype, Uint8Array.prototype),
				Object.setPrototypeOf(k, Uint8Array),
				(k.alloc = function (t, e, r) {
					return (function (i, n, o) {
						return (
							Bc(i),
							i <= 0
								? Et(i)
								: n !== void 0
								? typeof o == 'string'
									? Et(i).fill(n, o)
									: Et(i).fill(n)
								: Et(i)
						);
					})(t, e, r);
				}),
				(k.allocUnsafe = function (t) {
					return Vs(t);
				}),
				(k.allocUnsafeSlow = function (t) {
					return Vs(t);
				}),
				(k.isBuffer = function (t) {
					return t != null && t._isBuffer === !0 && t !== k.prototype;
				}),
				(k.compare = function (t, e) {
					if (
						(St(t, Uint8Array) && (t = k.from(t, t.offset, t.byteLength)),
						St(e, Uint8Array) && (e = k.from(e, e.offset, e.byteLength)),
						!k.isBuffer(t) || !k.isBuffer(e))
					)
						throw new TypeError(
							'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
						);
					if (t === e) return 0;
					for (var r = t.length, i = e.length, n = 0, o = Math.min(r, i); n < o; ++n)
						if (t[n] !== e[n]) {
							(r = t[n]), (i = e[n]);
							break;
						}
					return r < i ? -1 : i < r ? 1 : 0;
				}),
				(k.isEncoding = function (t) {
					switch (String(t).toLowerCase()) {
						case 'hex':
						case 'utf8':
						case 'utf-8':
						case 'ascii':
						case 'latin1':
						case 'binary':
						case 'base64':
						case 'ucs2':
						case 'ucs-2':
						case 'utf16le':
						case 'utf-16le':
							return !0;
						default:
							return !1;
					}
				}),
				(k.concat = function (t, e) {
					if (!Array.isArray(t))
						throw new TypeError('"list" argument must be an Array of Buffers');
					if (t.length === 0) return k.alloc(0);
					var r;
					if (e === void 0) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
					var i = k.allocUnsafe(e),
						n = 0;
					for (r = 0; r < t.length; ++r) {
						var o = t[r];
						if ((St(o, Uint8Array) && (o = k.from(o)), !k.isBuffer(o)))
							throw new TypeError('"list" argument must be an Array of Buffers');
						o.copy(i, n), (n += o.length);
					}
					return i;
				}),
				(k.byteLength = Pc),
				(k.prototype._isBuffer = !0),
				(k.prototype.swap16 = function () {
					var t = this.length;
					if (t % 2 != 0)
						throw new RangeError('Buffer size must be a multiple of 16-bits');
					for (var e = 0; e < t; e += 2) sr(this, e, e + 1);
					return this;
				}),
				(k.prototype.swap32 = function () {
					var t = this.length;
					if (t % 4 != 0)
						throw new RangeError('Buffer size must be a multiple of 32-bits');
					for (var e = 0; e < t; e += 4) sr(this, e, e + 3), sr(this, e + 1, e + 2);
					return this;
				}),
				(k.prototype.swap64 = function () {
					var t = this.length;
					if (t % 8 != 0)
						throw new RangeError('Buffer size must be a multiple of 64-bits');
					for (var e = 0; e < t; e += 8)
						sr(this, e, e + 7),
							sr(this, e + 1, e + 6),
							sr(this, e + 2, e + 5),
							sr(this, e + 3, e + 4);
					return this;
				}),
				(k.prototype.toString = function () {
					var t = this.length;
					return t === 0
						? ''
						: arguments.length === 0
						? kc(this, 0, t)
						: bw.apply(this, arguments);
				}),
				(k.prototype.toLocaleString = k.prototype.toString),
				(k.prototype.equals = function (t) {
					if (!k.isBuffer(t)) throw new TypeError('Argument must be a Buffer');
					return this === t || k.compare(this, t) === 0;
				}),
				(k.prototype.inspect = function () {
					var t = '',
						e = At.INSPECT_MAX_BYTES;
					return (
						(t = this.toString('hex', 0, e)
							.replace(/(.{2})/g, '$1 ')
							.trim()),
						this.length > e && (t += ' ... '),
						'<Buffer ' + t + '>'
					);
				}),
				_c && (k.prototype[_c] = k.prototype.inspect),
				(k.prototype.compare = function (t, e, r, i, n) {
					if (
						(St(t, Uint8Array) && (t = k.from(t, t.offset, t.byteLength)),
						!k.isBuffer(t))
					)
						throw new TypeError(
							'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
								typeof t
						);
					if (
						(e === void 0 && (e = 0),
						r === void 0 && (r = t ? t.length : 0),
						i === void 0 && (i = 0),
						n === void 0 && (n = this.length),
						e < 0 || r > t.length || i < 0 || n > this.length)
					)
						throw new RangeError('out of range index');
					if (i >= n && e >= r) return 0;
					if (i >= n) return -1;
					if (e >= r) return 1;
					if (this === t) return 0;
					for (
						var o = (n >>>= 0) - (i >>>= 0),
							s = (r >>>= 0) - (e >>>= 0),
							a = Math.min(o, s),
							u = this.slice(i, n),
							c = t.slice(e, r),
							h = 0;
						h < a;
						++h
					)
						if (u[h] !== c[h]) {
							(o = u[h]), (s = c[h]);
							break;
						}
					return o < s ? -1 : s < o ? 1 : 0;
				}),
				(k.prototype.includes = function (t, e, r) {
					return this.indexOf(t, e, r) !== -1;
				}),
				(k.prototype.indexOf = function (t, e, r) {
					return vc(this, t, e, r, !0);
				}),
				(k.prototype.lastIndexOf = function (t, e, r) {
					return vc(this, t, e, r, !1);
				}),
				(k.prototype.write = function (t, e, r, i) {
					if (e === void 0) (i = 'utf8'), (r = this.length), (e = 0);
					else if (r === void 0 && typeof e == 'string')
						(i = e), (r = this.length), (e = 0);
					else {
						if (!isFinite(e))
							throw new Error(
								'Buffer.write(string, encoding, offset[, length]) is no longer supported'
							);
						(e >>>= 0),
							isFinite(r)
								? ((r >>>= 0), i === void 0 && (i = 'utf8'))
								: ((i = r), (r = void 0));
					}
					var n = this.length - e;
					if (
						((r === void 0 || r > n) && (r = n),
						(t.length > 0 && (r < 0 || e < 0)) || e > this.length)
					)
						throw new RangeError('Attempt to write outside buffer bounds');
					i || (i = 'utf8');
					for (var o = !1; ; )
						switch (i) {
							case 'hex':
								return ww(this, t, e, r);
							case 'utf8':
							case 'utf-8':
								return _w(this, t, e, r);
							case 'ascii':
								return Oc(this, t, e, r);
							case 'latin1':
							case 'binary':
								return mw(this, t, e, r);
							case 'base64':
								return vw(this, t, e, r);
							case 'ucs2':
							case 'ucs-2':
							case 'utf16le':
							case 'utf-16le':
								return Ew(this, t, e, r);
							default:
								if (o) throw new TypeError('Unknown encoding: ' + i);
								(i = ('' + i).toLowerCase()), (o = !0);
						}
				}),
				(k.prototype.toJSON = function () {
					return {
						type: 'Buffer',
						data: Array.prototype.slice.call(this._arr || this, 0),
					};
				});
			(k.prototype.slice = function (t, e) {
				var r = this.length;
				(t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
					(e = e === void 0 ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
					e < t && (e = t);
				var i = this.subarray(t, e);
				return Object.setPrototypeOf(i, k.prototype), i;
			}),
				(k.prototype.readUIntLE = function (t, e, r) {
					(t >>>= 0), (e >>>= 0), r || be(t, e, this.length);
					for (var i = this[t], n = 1, o = 0; ++o < e && (n *= 256); )
						i += this[t + o] * n;
					return i;
				}),
				(k.prototype.readUIntBE = function (t, e, r) {
					(t >>>= 0), (e >>>= 0), r || be(t, e, this.length);
					for (var i = this[t + --e], n = 1; e > 0 && (n *= 256); )
						i += this[t + --e] * n;
					return i;
				}),
				(k.prototype.readUInt8 = function (t, e) {
					return (t >>>= 0), e || be(t, 1, this.length), this[t];
				}),
				(k.prototype.readUInt16LE = function (t, e) {
					return (t >>>= 0), e || be(t, 2, this.length), this[t] | (this[t + 1] << 8);
				}),
				(k.prototype.readUInt16BE = function (t, e) {
					return (t >>>= 0), e || be(t, 2, this.length), (this[t] << 8) | this[t + 1];
				}),
				(k.prototype.readUInt32LE = function (t, e) {
					return (
						(t >>>= 0),
						e || be(t, 4, this.length),
						(this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
							16777216 * this[t + 3]
					);
				}),
				(k.prototype.readUInt32BE = function (t, e) {
					return (
						(t >>>= 0),
						e || be(t, 4, this.length),
						16777216 * this[t] +
							((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
					);
				}),
				(k.prototype.readIntLE = function (t, e, r) {
					(t >>>= 0), (e >>>= 0), r || be(t, e, this.length);
					for (var i = this[t], n = 1, o = 0; ++o < e && (n *= 256); )
						i += this[t + o] * n;
					return i >= (n *= 128) && (i -= Math.pow(2, 8 * e)), i;
				}),
				(k.prototype.readIntBE = function (t, e, r) {
					(t >>>= 0), (e >>>= 0), r || be(t, e, this.length);
					for (var i = e, n = 1, o = this[t + --i]; i > 0 && (n *= 256); )
						o += this[t + --i] * n;
					return o >= (n *= 128) && (o -= Math.pow(2, 8 * e)), o;
				}),
				(k.prototype.readInt8 = function (t, e) {
					return (
						(t >>>= 0),
						e || be(t, 1, this.length),
						128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
					);
				}),
				(k.prototype.readInt16LE = function (t, e) {
					(t >>>= 0), e || be(t, 2, this.length);
					var r = this[t] | (this[t + 1] << 8);
					return 32768 & r ? 4294901760 | r : r;
				}),
				(k.prototype.readInt16BE = function (t, e) {
					(t >>>= 0), e || be(t, 2, this.length);
					var r = this[t + 1] | (this[t] << 8);
					return 32768 & r ? 4294901760 | r : r;
				}),
				(k.prototype.readInt32LE = function (t, e) {
					return (
						(t >>>= 0),
						e || be(t, 4, this.length),
						this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
					);
				}),
				(k.prototype.readInt32BE = function (t, e) {
					return (
						(t >>>= 0),
						e || be(t, 4, this.length),
						(this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
					);
				}),
				(k.prototype.readFloatLE = function (t, e) {
					return (t >>>= 0), e || be(t, 4, this.length), Nr.read(this, t, !0, 23, 4);
				}),
				(k.prototype.readFloatBE = function (t, e) {
					return (t >>>= 0), e || be(t, 4, this.length), Nr.read(this, t, !1, 23, 4);
				}),
				(k.prototype.readDoubleLE = function (t, e) {
					return (t >>>= 0), e || be(t, 8, this.length), Nr.read(this, t, !0, 52, 8);
				}),
				(k.prototype.readDoubleBE = function (t, e) {
					return (t >>>= 0), e || be(t, 8, this.length), Nr.read(this, t, !1, 52, 8);
				}),
				(k.prototype.writeUIntLE = function (t, e, r, i) {
					(t = +t),
						(e >>>= 0),
						(r >>>= 0),
						i || Pe(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
					var n = 1,
						o = 0;
					for (this[e] = 255 & t; ++o < r && (n *= 256); ) this[e + o] = (t / n) & 255;
					return e + r;
				}),
				(k.prototype.writeUIntBE = function (t, e, r, i) {
					(t = +t),
						(e >>>= 0),
						(r >>>= 0),
						i || Pe(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
					var n = r - 1,
						o = 1;
					for (this[e + n] = 255 & t; --n >= 0 && (o *= 256); )
						this[e + n] = (t / o) & 255;
					return e + r;
				}),
				(k.prototype.writeUInt8 = function (t, e, r) {
					return (
						(t = +t),
						(e >>>= 0),
						r || Pe(this, t, e, 1, 255, 0),
						(this[e] = 255 & t),
						e + 1
					);
				}),
				(k.prototype.writeUInt16LE = function (t, e, r) {
					return (
						(t = +t),
						(e >>>= 0),
						r || Pe(this, t, e, 2, 65535, 0),
						(this[e] = 255 & t),
						(this[e + 1] = t >>> 8),
						e + 2
					);
				}),
				(k.prototype.writeUInt16BE = function (t, e, r) {
					return (
						(t = +t),
						(e >>>= 0),
						r || Pe(this, t, e, 2, 65535, 0),
						(this[e] = t >>> 8),
						(this[e + 1] = 255 & t),
						e + 2
					);
				}),
				(k.prototype.writeUInt32LE = function (t, e, r) {
					return (
						(t = +t),
						(e >>>= 0),
						r || Pe(this, t, e, 4, 4294967295, 0),
						(this[e + 3] = t >>> 24),
						(this[e + 2] = t >>> 16),
						(this[e + 1] = t >>> 8),
						(this[e] = 255 & t),
						e + 4
					);
				}),
				(k.prototype.writeUInt32BE = function (t, e, r) {
					return (
						(t = +t),
						(e >>>= 0),
						r || Pe(this, t, e, 4, 4294967295, 0),
						(this[e] = t >>> 24),
						(this[e + 1] = t >>> 16),
						(this[e + 2] = t >>> 8),
						(this[e + 3] = 255 & t),
						e + 4
					);
				}),
				(k.prototype.writeIntLE = function (t, e, r, i) {
					if (((t = +t), (e >>>= 0), !i)) {
						var n = Math.pow(2, 8 * r - 1);
						Pe(this, t, e, r, n - 1, -n);
					}
					var o = 0,
						s = 1,
						a = 0;
					for (this[e] = 255 & t; ++o < r && (s *= 256); )
						t < 0 && a === 0 && this[e + o - 1] !== 0 && (a = 1),
							(this[e + o] = (((t / s) >> 0) - a) & 255);
					return e + r;
				}),
				(k.prototype.writeIntBE = function (t, e, r, i) {
					if (((t = +t), (e >>>= 0), !i)) {
						var n = Math.pow(2, 8 * r - 1);
						Pe(this, t, e, r, n - 1, -n);
					}
					var o = r - 1,
						s = 1,
						a = 0;
					for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
						t < 0 && a === 0 && this[e + o + 1] !== 0 && (a = 1),
							(this[e + o] = (((t / s) >> 0) - a) & 255);
					return e + r;
				}),
				(k.prototype.writeInt8 = function (t, e, r) {
					return (
						(t = +t),
						(e >>>= 0),
						r || Pe(this, t, e, 1, 127, -128),
						t < 0 && (t = 255 + t + 1),
						(this[e] = 255 & t),
						e + 1
					);
				}),
				(k.prototype.writeInt16LE = function (t, e, r) {
					return (
						(t = +t),
						(e >>>= 0),
						r || Pe(this, t, e, 2, 32767, -32768),
						(this[e] = 255 & t),
						(this[e + 1] = t >>> 8),
						e + 2
					);
				}),
				(k.prototype.writeInt16BE = function (t, e, r) {
					return (
						(t = +t),
						(e >>>= 0),
						r || Pe(this, t, e, 2, 32767, -32768),
						(this[e] = t >>> 8),
						(this[e + 1] = 255 & t),
						e + 2
					);
				}),
				(k.prototype.writeInt32LE = function (t, e, r) {
					return (
						(t = +t),
						(e >>>= 0),
						r || Pe(this, t, e, 4, 2147483647, -2147483648),
						(this[e] = 255 & t),
						(this[e + 1] = t >>> 8),
						(this[e + 2] = t >>> 16),
						(this[e + 3] = t >>> 24),
						e + 4
					);
				}),
				(k.prototype.writeInt32BE = function (t, e, r) {
					return (
						(t = +t),
						(e >>>= 0),
						r || Pe(this, t, e, 4, 2147483647, -2147483648),
						t < 0 && (t = 4294967295 + t + 1),
						(this[e] = t >>> 24),
						(this[e + 1] = t >>> 16),
						(this[e + 2] = t >>> 8),
						(this[e + 3] = 255 & t),
						e + 4
					);
				}),
				(k.prototype.writeFloatLE = function (t, e, r) {
					return Sc(this, t, e, !0, r);
				}),
				(k.prototype.writeFloatBE = function (t, e, r) {
					return Sc(this, t, e, !1, r);
				}),
				(k.prototype.writeDoubleLE = function (t, e, r) {
					return Ac(this, t, e, !0, r);
				}),
				(k.prototype.writeDoubleBE = function (t, e, r) {
					return Ac(this, t, e, !1, r);
				}),
				(k.prototype.copy = function (t, e, r, i) {
					if (!k.isBuffer(t)) throw new TypeError('argument should be a Buffer');
					if (
						(r || (r = 0),
						i || i === 0 || (i = this.length),
						e >= t.length && (e = t.length),
						e || (e = 0),
						i > 0 && i < r && (i = r),
						i === r || t.length === 0 || this.length === 0)
					)
						return 0;
					if (e < 0) throw new RangeError('targetStart out of bounds');
					if (r < 0 || r >= this.length) throw new RangeError('Index out of range');
					if (i < 0) throw new RangeError('sourceEnd out of bounds');
					i > this.length && (i = this.length),
						t.length - e < i - r && (i = t.length - e + r);
					var n = i - r;
					if (this === t && typeof Uint8Array.prototype.copyWithin == 'function')
						this.copyWithin(e, r, i);
					else if (this === t && r < e && e < i)
						for (var o = n - 1; o >= 0; --o) t[o + e] = this[o + r];
					else Uint8Array.prototype.set.call(t, this.subarray(r, i), e);
					return n;
				}),
				(k.prototype.fill = function (t, e, r, i) {
					if (typeof t == 'string') {
						if (
							(typeof e == 'string'
								? ((i = e), (e = 0), (r = this.length))
								: typeof r == 'string' && ((i = r), (r = this.length)),
							i !== void 0 && typeof i != 'string')
						)
							throw new TypeError('encoding must be a string');
						if (typeof i == 'string' && !k.isEncoding(i))
							throw new TypeError('Unknown encoding: ' + i);
						if (t.length === 1) {
							var n = t.charCodeAt(0);
							((i === 'utf8' && n < 128) || i === 'latin1') && (t = n);
						}
					} else
						typeof t == 'number'
							? (t &= 255)
							: typeof t == 'boolean' && (t = Number(t));
					if (e < 0 || this.length < e || this.length < r)
						throw new RangeError('Out of range index');
					if (r <= e) return this;
					var o;
					if (
						((e >>>= 0),
						(r = r === void 0 ? this.length : r >>> 0),
						t || (t = 0),
						typeof t == 'number')
					)
						for (o = e; o < r; ++o) this[o] = t;
					else {
						var s = k.isBuffer(t) ? t : k.from(t, i),
							a = s.length;
						if (a === 0)
							throw new TypeError(
								'The value "' + t + '" is invalid for argument "value"'
							);
						for (o = 0; o < r - e; ++o) this[o + e] = s[o % a];
					}
					return this;
				});
			Cw = /[^+/0-9A-Za-z-_]/g;
			Bw = (function () {
				for (var t = new Array(256), e = 0; e < 16; ++e)
					for (var r = 16 * e, i = 0; i < 16; ++i)
						t[r + i] = '0123456789abcdef'[e] + '0123456789abcdef'[i];
				return t;
			})();
			At.Buffer;
			At.INSPECT_MAX_BYTES;
			At.kMaxLength;
			(an = {}), (ln = At), (it = ln.Buffer);
			it.from && it.alloc && it.allocUnsafe && it.allocUnsafeSlow
				? (an = ln)
				: (Ic(ln, an), (an.Buffer = or)),
				(or.prototype = Object.create(it.prototype)),
				Ic(it, or),
				(or.from = function (t, e, r) {
					if (typeof t == 'number') throw new TypeError('Argument must not be a number');
					return it(t, e, r);
				}),
				(or.alloc = function (t, e, r) {
					if (typeof t != 'number') throw new TypeError('Argument must be a number');
					var i = it(t);
					return (
						e !== void 0
							? typeof r == 'string'
								? i.fill(e, r)
								: i.fill(e)
							: i.fill(0),
						i
					);
				}),
				(or.allocUnsafe = function (t) {
					if (typeof t != 'number') throw new TypeError('Argument must be a number');
					return it(t);
				}),
				(or.allocUnsafeSlow = function (t) {
					if (typeof t != 'number') throw new TypeError('Argument must be a number');
					return ln.SlowBuffer(t);
				});
			(Pw = an),
				(ar = {}),
				(Ks = Pw.Buffer),
				(Tc =
					Ks.isEncoding ||
					function (t) {
						switch ((t = '' + t) && t.toLowerCase()) {
							case 'hex':
							case 'utf8':
							case 'utf-8':
							case 'ascii':
							case 'binary':
							case 'base64':
							case 'ucs2':
							case 'ucs-2':
							case 'utf16le':
							case 'utf-16le':
							case 'raw':
								return !0;
							default:
								return !1;
						}
					});
			(ar.StringDecoder = hi),
				(hi.prototype.write = function (t) {
					if (t.length === 0) return '';
					var e, r;
					if (this.lastNeed) {
						if ((e = this.fillLast(t)) === void 0) return '';
						(r = this.lastNeed), (this.lastNeed = 0);
					} else r = 0;
					return r < t.length ? (e ? e + this.text(t, r) : this.text(t, r)) : e || '';
				}),
				(hi.prototype.end = function (t) {
					var e = t && t.length ? this.write(t) : '';
					return this.lastNeed ? e + '\uFFFD' : e;
				}),
				(hi.prototype.text = function (t, e) {
					var r = (function (n, o, s) {
						var a = o.length - 1;
						if (a < s) return 0;
						var u = $s(o[a]);
						return u >= 0
							? (u > 0 && (n.lastNeed = u - 1), u)
							: --a < s || u === -2
							? 0
							: (u = $s(o[a])) >= 0
							? (u > 0 && (n.lastNeed = u - 2), u)
							: --a < s || u === -2
							? 0
							: (u = $s(o[a])) >= 0
							? (u > 0 && (u === 2 ? (u = 0) : (n.lastNeed = u - 3)), u)
							: 0;
					})(this, t, e);
					if (!this.lastNeed) return t.toString('utf8', e);
					this.lastTotal = r;
					var i = t.length - (r - this.lastNeed);
					return t.copy(this.lastChar, 0, i), t.toString('utf8', e, i);
				}),
				(hi.prototype.fillLast = function (t) {
					if (this.lastNeed <= t.length)
						return (
							t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
							this.lastChar.toString(this.encoding, 0, this.lastTotal)
						);
					t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
						(this.lastNeed -= t.length);
				});
			ar.StringDecoder;
			ar.StringDecoder;
		});
	var Lc = {};
	Qt(Lc, { StringDecoder: () => qw, default: () => ar });
	var qw,
		Uc = we(() => {
			v();
			m();
			_();
			Ys();
			Ys();
			qw = ar.StringDecoder;
		});
	var Js = M((NT, jc) => {
		'use strict';
		v();
		m();
		_();
		var Nc = Nt(),
			{ PromisePrototypeThen: Dw, SymbolAsyncIterator: qc, SymbolIterator: Dc } = ce(),
			{ Buffer: jw } = (ye(), X(_e)),
			{ ERR_INVALID_ARG_TYPE: Fw, ERR_STREAM_NULL_VALUES: Ww } = Se().codes;
		function $w(t, e, r) {
			let i;
			if (typeof e == 'string' || e instanceof jw)
				return new t({
					objectMode: !0,
					...r,
					read() {
						this.push(e), this.push(null);
					},
				});
			let n;
			if (e && e[qc]) (n = !0), (i = e[qc]());
			else if (e && e[Dc]) (n = !1), (i = e[Dc]());
			else throw new Fw('iterable', ['Iterable'], e);
			let o = new t({ objectMode: !0, highWaterMark: 1, ...r }),
				s = !1;
			(o._read = function () {
				s || ((s = !0), u());
			}),
				(o._destroy = function (c, h) {
					Dw(
						a(c),
						() => Nc.nextTick(h, c),
						(d) => Nc.nextTick(h, d || c)
					);
				});
			async function a(c) {
				let h = c != null,
					d = typeof i.throw == 'function';
				if (h && d) {
					let { value: g, done: y } = await i.throw(c);
					if ((await g, y)) return;
				}
				if (typeof i.return == 'function') {
					let { value: g } = await i.return();
					await g;
				}
			}
			async function u() {
				for (;;) {
					try {
						let { value: c, done: h } = n ? await i.next() : i.next();
						if (h) o.push(null);
						else {
							let d = c && typeof c.then == 'function' ? await c : c;
							if (d === null) throw ((s = !1), new Ww());
							if (o.push(d)) continue;
							s = !1;
						}
					} catch (c) {
						o.destroy(c);
					}
					break;
				}
			}
			return o;
		}
		jc.exports = $w;
	});
	var di = M((HT, Zc) => {
		v();
		m();
		_();
		var He = Nt(),
			{
				ArrayPrototypeIndexOf: Hw,
				NumberIsInteger: Vw,
				NumberIsNaN: zw,
				NumberParseInt: Kw,
				ObjectDefineProperties: $c,
				ObjectKeys: Gw,
				ObjectSetPrototypeOf: Hc,
				Promise: Qw,
				SafeSet: Yw,
				SymbolAsyncIterator: Jw,
				Symbol: Xw,
			} = ce();
		Zc.exports = F;
		F.ReadableState = io;
		var { EventEmitter: Zw } = (ir(), X(rr)),
			{ Stream: Dt, prependListener: e_ } = tn(),
			{ Buffer: Xs } = (ye(), X(_e)),
			{ addAbortSignal: t_ } = ci(),
			r_ = vt(),
			H = Je().debuglog('stream', (t) => {
				H = t;
			}),
			i_ = dc(),
			Dr = tr(),
			{ getHighWaterMark: n_, getDefaultHighWaterMark: s_ } = sn(),
			{
				aggregateTwoErrors: Fc,
				codes: {
					ERR_INVALID_ARG_TYPE: o_,
					ERR_METHOD_NOT_IMPLEMENTED: a_,
					ERR_OUT_OF_RANGE: l_,
					ERR_STREAM_PUSH_AFTER_EOF: u_,
					ERR_STREAM_UNSHIFT_AFTER_END_EVENT: f_,
				},
			} = Se(),
			{ validateObject: c_ } = fi(),
			lr = Xw('kPaused'),
			{ StringDecoder: Vc } = (Uc(), X(Lc)),
			h_ = Js();
		Hc(F.prototype, Dt.prototype);
		Hc(F, Dt);
		var Zs = () => {},
			{ errorOrDestroy: qr } = Dr;
		function io(t, e, r) {
			typeof r != 'boolean' && (r = e instanceof nt()),
				(this.objectMode = !!(t && t.objectMode)),
				r && (this.objectMode = this.objectMode || !!(t && t.readableObjectMode)),
				(this.highWaterMark = t ? n_(this, t, 'readableHighWaterMark', r) : s_(!1)),
				(this.buffer = new i_()),
				(this.length = 0),
				(this.pipes = []),
				(this.flowing = null),
				(this.ended = !1),
				(this.endEmitted = !1),
				(this.reading = !1),
				(this.constructed = !0),
				(this.sync = !0),
				(this.needReadable = !1),
				(this.emittedReadable = !1),
				(this.readableListening = !1),
				(this.resumeScheduled = !1),
				(this[lr] = null),
				(this.errorEmitted = !1),
				(this.emitClose = !t || t.emitClose !== !1),
				(this.autoDestroy = !t || t.autoDestroy !== !1),
				(this.destroyed = !1),
				(this.errored = null),
				(this.closed = !1),
				(this.closeEmitted = !1),
				(this.defaultEncoding = (t && t.defaultEncoding) || 'utf8'),
				(this.awaitDrainWriters = null),
				(this.multiAwaitDrain = !1),
				(this.readingMore = !1),
				(this.dataEmitted = !1),
				(this.decoder = null),
				(this.encoding = null),
				t &&
					t.encoding &&
					((this.decoder = new Vc(t.encoding)), (this.encoding = t.encoding));
		}
		function F(t) {
			if (!(this instanceof F)) return new F(t);
			let e = this instanceof nt();
			(this._readableState = new io(t, this, e)),
				t &&
					(typeof t.read == 'function' && (this._read = t.read),
					typeof t.destroy == 'function' && (this._destroy = t.destroy),
					typeof t.construct == 'function' && (this._construct = t.construct),
					t.signal && !e && t_(t.signal, this)),
				Dt.call(this, t),
				Dr.construct(this, () => {
					this._readableState.needReadable && fn(this, this._readableState);
				});
		}
		F.prototype.destroy = Dr.destroy;
		F.prototype._undestroy = Dr.undestroy;
		F.prototype._destroy = function (t, e) {
			e(t);
		};
		F.prototype[Zw.captureRejectionSymbol] = function (t) {
			this.destroy(t);
		};
		F.prototype.push = function (t, e) {
			return zc(this, t, e, !1);
		};
		F.prototype.unshift = function (t, e) {
			return zc(this, t, e, !0);
		};
		function zc(t, e, r, i) {
			H('readableAddChunk', e);
			let n = t._readableState,
				o;
			if (
				(n.objectMode ||
					(typeof e == 'string'
						? ((r = r || n.defaultEncoding),
						  n.encoding !== r &&
								(i && n.encoding
									? (e = Xs.from(e, r).toString(n.encoding))
									: ((e = Xs.from(e, r)), (r = ''))))
						: e instanceof Xs
						? (r = '')
						: Dt._isUint8Array(e)
						? ((e = Dt._uint8ArrayToBuffer(e)), (r = ''))
						: e != null &&
						  (o = new o_('chunk', ['string', 'Buffer', 'Uint8Array'], e))),
				o)
			)
				qr(t, o);
			else if (e === null) (n.reading = !1), g_(t, n);
			else if (n.objectMode || (e && e.length > 0))
				if (i)
					if (n.endEmitted) qr(t, new f_());
					else {
						if (n.destroyed || n.errored) return !1;
						eo(t, n, e, !0);
					}
				else if (n.ended) qr(t, new u_());
				else {
					if (n.destroyed || n.errored) return !1;
					(n.reading = !1),
						n.decoder && !r
							? ((e = n.decoder.write(e)),
							  n.objectMode || e.length !== 0 ? eo(t, n, e, !1) : fn(t, n))
							: eo(t, n, e, !1);
				}
			else i || ((n.reading = !1), fn(t, n));
			return !n.ended && (n.length < n.highWaterMark || n.length === 0);
		}
		function eo(t, e, r, i) {
			e.flowing && e.length === 0 && !e.sync && t.listenerCount('data') > 0
				? (e.multiAwaitDrain ? e.awaitDrainWriters.clear() : (e.awaitDrainWriters = null),
				  (e.dataEmitted = !0),
				  t.emit('data', r))
				: ((e.length += e.objectMode ? 1 : r.length),
				  i ? e.buffer.unshift(r) : e.buffer.push(r),
				  e.needReadable && cn(t)),
				fn(t, e);
		}
		F.prototype.isPaused = function () {
			let t = this._readableState;
			return t[lr] === !0 || t.flowing === !1;
		};
		F.prototype.setEncoding = function (t) {
			let e = new Vc(t);
			(this._readableState.decoder = e),
				(this._readableState.encoding = this._readableState.decoder.encoding);
			let r = this._readableState.buffer,
				i = '';
			for (let n of r) i += e.write(n);
			return r.clear(), i !== '' && r.push(i), (this._readableState.length = i.length), this;
		};
		var d_ = 1073741824;
		function p_(t) {
			if (t > d_) throw new l_('size', '<= 1GiB', t);
			return (
				t--,
				(t |= t >>> 1),
				(t |= t >>> 2),
				(t |= t >>> 4),
				(t |= t >>> 8),
				(t |= t >>> 16),
				t++,
				t
			);
		}
		function Wc(t, e) {
			return t <= 0 || (e.length === 0 && e.ended)
				? 0
				: e.objectMode
				? 1
				: zw(t)
				? e.flowing && e.length
					? e.buffer.first().length
					: e.length
				: t <= e.length
				? t
				: e.ended
				? e.length
				: 0;
		}
		F.prototype.read = function (t) {
			H('read', t), t === void 0 ? (t = NaN) : Vw(t) || (t = Kw(t, 10));
			let e = this._readableState,
				r = t;
			if (
				(t > e.highWaterMark && (e.highWaterMark = p_(t)),
				t !== 0 && (e.emittedReadable = !1),
				t === 0 &&
					e.needReadable &&
					((e.highWaterMark !== 0 ? e.length >= e.highWaterMark : e.length > 0) ||
						e.ended))
			)
				return (
					H('read: emitReadable', e.length, e.ended),
					e.length === 0 && e.ended ? to(this) : cn(this),
					null
				);
			if (((t = Wc(t, e)), t === 0 && e.ended)) return e.length === 0 && to(this), null;
			let i = e.needReadable;
			if (
				(H('need readable', i),
				(e.length === 0 || e.length - t < e.highWaterMark) &&
					((i = !0), H('length less than watermark', i)),
				e.ended || e.reading || e.destroyed || e.errored || !e.constructed)
			)
				(i = !1), H('reading, ended or constructing', i);
			else if (i) {
				H('do read'),
					(e.reading = !0),
					(e.sync = !0),
					e.length === 0 && (e.needReadable = !0);
				try {
					this._read(e.highWaterMark);
				} catch (o) {
					qr(this, o);
				}
				(e.sync = !1), e.reading || (t = Wc(r, e));
			}
			let n;
			return (
				t > 0 ? (n = Jc(t, e)) : (n = null),
				n === null
					? ((e.needReadable = e.length <= e.highWaterMark), (t = 0))
					: ((e.length -= t),
					  e.multiAwaitDrain
							? e.awaitDrainWriters.clear()
							: (e.awaitDrainWriters = null)),
				e.length === 0 &&
					(e.ended || (e.needReadable = !0), r !== t && e.ended && to(this)),
				n !== null &&
					!e.errorEmitted &&
					!e.closeEmitted &&
					((e.dataEmitted = !0), this.emit('data', n)),
				n
			);
		};
		function g_(t, e) {
			if ((H('onEofChunk'), !e.ended)) {
				if (e.decoder) {
					let r = e.decoder.end();
					r && r.length && (e.buffer.push(r), (e.length += e.objectMode ? 1 : r.length));
				}
				(e.ended = !0),
					e.sync ? cn(t) : ((e.needReadable = !1), (e.emittedReadable = !0), Kc(t));
			}
		}
		function cn(t) {
			let e = t._readableState;
			H('emitReadable', e.needReadable, e.emittedReadable),
				(e.needReadable = !1),
				e.emittedReadable ||
					(H('emitReadable', e.flowing), (e.emittedReadable = !0), He.nextTick(Kc, t));
		}
		function Kc(t) {
			let e = t._readableState;
			H('emitReadable_', e.destroyed, e.length, e.ended),
				!e.destroyed &&
					!e.errored &&
					(e.length || e.ended) &&
					(t.emit('readable'), (e.emittedReadable = !1)),
				(e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark),
				Qc(t);
		}
		function fn(t, e) {
			!e.readingMore && e.constructed && ((e.readingMore = !0), He.nextTick(y_, t, e));
		}
		function y_(t, e) {
			for (
				;
				!e.reading &&
				!e.ended &&
				(e.length < e.highWaterMark || (e.flowing && e.length === 0));

			) {
				let r = e.length;
				if ((H('maybeReadMore read 0'), t.read(0), r === e.length)) break;
			}
			e.readingMore = !1;
		}
		F.prototype._read = function (t) {
			throw new a_('_read()');
		};
		F.prototype.pipe = function (t, e) {
			let r = this,
				i = this._readableState;
			i.pipes.length === 1 &&
				(i.multiAwaitDrain ||
					((i.multiAwaitDrain = !0),
					(i.awaitDrainWriters = new Yw(
						i.awaitDrainWriters ? [i.awaitDrainWriters] : []
					)))),
				i.pipes.push(t),
				H('pipe count=%d opts=%j', i.pipes.length, e);
			let o = (!e || e.end !== !1) && t !== He.stdout && t !== He.stderr ? a : S;
			i.endEmitted ? He.nextTick(o) : r.once('end', o), t.on('unpipe', s);
			function s(I, C) {
				H('onunpipe'), I === r && C && C.hasUnpiped === !1 && ((C.hasUnpiped = !0), h());
			}
			function a() {
				H('onend'), t.end();
			}
			let u,
				c = !1;
			function h() {
				H('cleanup'),
					t.removeListener('close', w),
					t.removeListener('finish', E),
					u && t.removeListener('drain', u),
					t.removeListener('error', y),
					t.removeListener('unpipe', s),
					r.removeListener('end', a),
					r.removeListener('end', S),
					r.removeListener('data', g),
					(c = !0),
					u &&
						i.awaitDrainWriters &&
						(!t._writableState || t._writableState.needDrain) &&
						u();
			}
			function d() {
				c ||
					(i.pipes.length === 1 && i.pipes[0] === t
						? (H('false write response, pause', 0),
						  (i.awaitDrainWriters = t),
						  (i.multiAwaitDrain = !1))
						: i.pipes.length > 1 &&
						  i.pipes.includes(t) &&
						  (H('false write response, pause', i.awaitDrainWriters.size),
						  i.awaitDrainWriters.add(t)),
					r.pause()),
					u || ((u = b_(r, t)), t.on('drain', u));
			}
			r.on('data', g);
			function g(I) {
				H('ondata');
				let C = t.write(I);
				H('dest.write', C), C === !1 && d();
			}
			function y(I) {
				if (
					(H('onerror', I),
					S(),
					t.removeListener('error', y),
					t.listenerCount('error') === 0)
				) {
					let C = t._writableState || t._readableState;
					C && !C.errorEmitted ? qr(t, I) : t.emit('error', I);
				}
			}
			e_(t, 'error', y);
			function w() {
				t.removeListener('finish', E), S();
			}
			t.once('close', w);
			function E() {
				H('onfinish'), t.removeListener('close', w), S();
			}
			t.once('finish', E);
			function S() {
				H('unpipe'), r.unpipe(t);
			}
			return (
				t.emit('pipe', r),
				t.writableNeedDrain === !0
					? i.flowing && d()
					: i.flowing || (H('pipe resume'), r.resume()),
				t
			);
		};
		function b_(t, e) {
			return function () {
				let i = t._readableState;
				i.awaitDrainWriters === e
					? (H('pipeOnDrain', 1), (i.awaitDrainWriters = null))
					: i.multiAwaitDrain &&
					  (H('pipeOnDrain', i.awaitDrainWriters.size), i.awaitDrainWriters.delete(e)),
					(!i.awaitDrainWriters || i.awaitDrainWriters.size === 0) &&
						t.listenerCount('data') &&
						t.resume();
			};
		}
		F.prototype.unpipe = function (t) {
			let e = this._readableState,
				r = { hasUnpiped: !1 };
			if (e.pipes.length === 0) return this;
			if (!t) {
				let n = e.pipes;
				(e.pipes = []), this.pause();
				for (let o = 0; o < n.length; o++) n[o].emit('unpipe', this, { hasUnpiped: !1 });
				return this;
			}
			let i = Hw(e.pipes, t);
			return i === -1
				? this
				: (e.pipes.splice(i, 1),
				  e.pipes.length === 0 && this.pause(),
				  t.emit('unpipe', this, r),
				  this);
		};
		F.prototype.on = function (t, e) {
			let r = Dt.prototype.on.call(this, t, e),
				i = this._readableState;
			return (
				t === 'data'
					? ((i.readableListening = this.listenerCount('readable') > 0),
					  i.flowing !== !1 && this.resume())
					: t === 'readable' &&
					  !i.endEmitted &&
					  !i.readableListening &&
					  ((i.readableListening = i.needReadable = !0),
					  (i.flowing = !1),
					  (i.emittedReadable = !1),
					  H('on readable', i.length, i.reading),
					  i.length ? cn(this) : i.reading || He.nextTick(w_, this)),
				r
			);
		};
		F.prototype.addListener = F.prototype.on;
		F.prototype.removeListener = function (t, e) {
			let r = Dt.prototype.removeListener.call(this, t, e);
			return t === 'readable' && He.nextTick(Gc, this), r;
		};
		F.prototype.off = F.prototype.removeListener;
		F.prototype.removeAllListeners = function (t) {
			let e = Dt.prototype.removeAllListeners.apply(this, arguments);
			return (t === 'readable' || t === void 0) && He.nextTick(Gc, this), e;
		};
		function Gc(t) {
			let e = t._readableState;
			(e.readableListening = t.listenerCount('readable') > 0),
				e.resumeScheduled && e[lr] === !1
					? (e.flowing = !0)
					: t.listenerCount('data') > 0
					? t.resume()
					: e.readableListening || (e.flowing = null);
		}
		function w_(t) {
			H('readable nexttick read 0'), t.read(0);
		}
		F.prototype.resume = function () {
			let t = this._readableState;
			return (
				t.flowing || (H('resume'), (t.flowing = !t.readableListening), __(this, t)),
				(t[lr] = !1),
				this
			);
		};
		function __(t, e) {
			e.resumeScheduled || ((e.resumeScheduled = !0), He.nextTick(m_, t, e));
		}
		function m_(t, e) {
			H('resume', e.reading),
				e.reading || t.read(0),
				(e.resumeScheduled = !1),
				t.emit('resume'),
				Qc(t),
				e.flowing && !e.reading && t.read(0);
		}
		F.prototype.pause = function () {
			return (
				H('call pause flowing=%j', this._readableState.flowing),
				this._readableState.flowing !== !1 &&
					(H('pause'), (this._readableState.flowing = !1), this.emit('pause')),
				(this._readableState[lr] = !0),
				this
			);
		};
		function Qc(t) {
			let e = t._readableState;
			for (H('flow', e.flowing); e.flowing && t.read() !== null; );
		}
		F.prototype.wrap = function (t) {
			let e = !1;
			t.on('data', (i) => {
				!this.push(i) && t.pause && ((e = !0), t.pause());
			}),
				t.on('end', () => {
					this.push(null);
				}),
				t.on('error', (i) => {
					qr(this, i);
				}),
				t.on('close', () => {
					this.destroy();
				}),
				t.on('destroy', () => {
					this.destroy();
				}),
				(this._read = () => {
					e && t.resume && ((e = !1), t.resume());
				});
			let r = Gw(t);
			for (let i = 1; i < r.length; i++) {
				let n = r[i];
				this[n] === void 0 && typeof t[n] == 'function' && (this[n] = t[n].bind(t));
			}
			return this;
		};
		F.prototype[Jw] = function () {
			return Yc(this);
		};
		F.prototype.iterator = function (t) {
			return t !== void 0 && c_(t, 'options'), Yc(this, t);
		};
		function Yc(t, e) {
			typeof t.read != 'function' && (t = F.wrap(t, { objectMode: !0 }));
			let r = v_(t, e);
			return (r.stream = t), r;
		}
		async function* v_(t, e) {
			let r = Zs;
			function i(s) {
				this === t ? (r(), (r = Zs)) : (r = s);
			}
			t.on('readable', i);
			let n,
				o = r_(t, { writable: !1 }, (s) => {
					(n = s ? Fc(n, s) : null), r(), (r = Zs);
				});
			try {
				for (;;) {
					let s = t.destroyed ? null : t.read();
					if (s !== null) yield s;
					else {
						if (n) throw n;
						if (n === null) return;
						await new Qw(i);
					}
				}
			} catch (s) {
				throw ((n = Fc(n, s)), n);
			} finally {
				(n || e?.destroyOnReturn !== !1) && (n === void 0 || t._readableState.autoDestroy)
					? Dr.destroyer(t, null)
					: (t.off('readable', i), o());
			}
		}
		$c(F.prototype, {
			readable: {
				__proto__: null,
				get() {
					let t = this._readableState;
					return (
						!!t && t.readable !== !1 && !t.destroyed && !t.errorEmitted && !t.endEmitted
					);
				},
				set(t) {
					this._readableState && (this._readableState.readable = !!t);
				},
			},
			readableDidRead: {
				__proto__: null,
				enumerable: !1,
				get: function () {
					return this._readableState.dataEmitted;
				},
			},
			readableAborted: {
				__proto__: null,
				enumerable: !1,
				get: function () {
					return !!(
						this._readableState.readable !== !1 &&
						(this._readableState.destroyed || this._readableState.errored) &&
						!this._readableState.endEmitted
					);
				},
			},
			readableHighWaterMark: {
				__proto__: null,
				enumerable: !1,
				get: function () {
					return this._readableState.highWaterMark;
				},
			},
			readableBuffer: {
				__proto__: null,
				enumerable: !1,
				get: function () {
					return this._readableState && this._readableState.buffer;
				},
			},
			readableFlowing: {
				__proto__: null,
				enumerable: !1,
				get: function () {
					return this._readableState.flowing;
				},
				set: function (t) {
					this._readableState && (this._readableState.flowing = t);
				},
			},
			readableLength: {
				__proto__: null,
				enumerable: !1,
				get() {
					return this._readableState.length;
				},
			},
			readableObjectMode: {
				__proto__: null,
				enumerable: !1,
				get() {
					return this._readableState ? this._readableState.objectMode : !1;
				},
			},
			readableEncoding: {
				__proto__: null,
				enumerable: !1,
				get() {
					return this._readableState ? this._readableState.encoding : null;
				},
			},
			errored: {
				__proto__: null,
				enumerable: !1,
				get() {
					return this._readableState ? this._readableState.errored : null;
				},
			},
			closed: {
				__proto__: null,
				get() {
					return this._readableState ? this._readableState.closed : !1;
				},
			},
			destroyed: {
				__proto__: null,
				enumerable: !1,
				get() {
					return this._readableState ? this._readableState.destroyed : !1;
				},
				set(t) {
					this._readableState && (this._readableState.destroyed = t);
				},
			},
			readableEnded: {
				__proto__: null,
				enumerable: !1,
				get() {
					return this._readableState ? this._readableState.endEmitted : !1;
				},
			},
		});
		$c(io.prototype, {
			pipesCount: {
				__proto__: null,
				get() {
					return this.pipes.length;
				},
			},
			paused: {
				__proto__: null,
				get() {
					return this[lr] !== !1;
				},
				set(t) {
					this[lr] = !!t;
				},
			},
		});
		F._fromList = Jc;
		function Jc(t, e) {
			if (e.length === 0) return null;
			let r;
			return (
				e.objectMode
					? (r = e.buffer.shift())
					: !t || t >= e.length
					? (e.decoder
							? (r = e.buffer.join(''))
							: e.buffer.length === 1
							? (r = e.buffer.first())
							: (r = e.buffer.concat(e.length)),
					  e.buffer.clear())
					: (r = e.buffer.consume(t, e.decoder)),
				r
			);
		}
		function to(t) {
			let e = t._readableState;
			H('endReadable', e.endEmitted), e.endEmitted || ((e.ended = !0), He.nextTick(E_, e, t));
		}
		function E_(t, e) {
			if (
				(H('endReadableNT', t.endEmitted, t.length),
				!t.errored && !t.closeEmitted && !t.endEmitted && t.length === 0)
			) {
				if (((t.endEmitted = !0), e.emit('end'), e.writable && e.allowHalfOpen === !1))
					He.nextTick(S_, e);
				else if (t.autoDestroy) {
					let r = e._writableState;
					(!r || (r.autoDestroy && (r.finished || r.writable === !1))) && e.destroy();
				}
			}
		}
		function S_(t) {
			t.writable && !t.writableEnded && !t.destroyed && t.end();
		}
		F.from = function (t, e) {
			return h_(F, t, e);
		};
		var ro;
		function Xc() {
			return ro === void 0 && (ro = {}), ro;
		}
		F.fromWeb = function (t, e) {
			return Xc().newStreamReadableFromReadableStream(t, e);
		};
		F.toWeb = function (t, e) {
			return Xc().newReadableStreamFromStreamReadable(t, e);
		};
		F.wrap = function (t, e) {
			var r, i;
			return new F({
				objectMode:
					(r = (i = t.readableObjectMode) !== null && i !== void 0 ? i : t.objectMode) !==
						null && r !== void 0
						? r
						: !0,
				...e,
				destroy(n, o) {
					Dr.destroyer(t, n), o(n);
				},
			}).wrap(t);
		};
	});
	var fo = M((JT, ch) => {
		v();
		m();
		_();
		var ur = Nt(),
			{
				ArrayPrototypeSlice: rh,
				Error: A_,
				FunctionPrototypeSymbolHasInstance: ih,
				ObjectDefineProperty: nh,
				ObjectDefineProperties: I_,
				ObjectSetPrototypeOf: sh,
				StringPrototypeToLowerCase: T_,
				Symbol: R_,
				SymbolHasInstance: C_,
			} = ce();
		ch.exports = ie;
		ie.WritableState = yi;
		var { EventEmitter: B_ } = (ir(), X(rr)),
			pi = tn().Stream,
			{ Buffer: hn } = (ye(), X(_e)),
			gn = tr(),
			{ addAbortSignal: P_ } = ci(),
			{ getHighWaterMark: O_, getDefaultHighWaterMark: k_ } = sn(),
			{
				ERR_INVALID_ARG_TYPE: x_,
				ERR_METHOD_NOT_IMPLEMENTED: M_,
				ERR_MULTIPLE_CALLBACK: oh,
				ERR_STREAM_CANNOT_PIPE: L_,
				ERR_STREAM_DESTROYED: gi,
				ERR_STREAM_ALREADY_FINISHED: U_,
				ERR_STREAM_NULL_VALUES: N_,
				ERR_STREAM_WRITE_AFTER_END: q_,
				ERR_UNKNOWN_ENCODING: ah,
			} = Se().codes,
			{ errorOrDestroy: jr } = gn;
		sh(ie.prototype, pi.prototype);
		sh(ie, pi);
		function oo() {}
		var Fr = R_('kOnFinished');
		function yi(t, e, r) {
			typeof r != 'boolean' && (r = e instanceof nt()),
				(this.objectMode = !!(t && t.objectMode)),
				r && (this.objectMode = this.objectMode || !!(t && t.writableObjectMode)),
				(this.highWaterMark = t ? O_(this, t, 'writableHighWaterMark', r) : k_(!1)),
				(this.finalCalled = !1),
				(this.needDrain = !1),
				(this.ending = !1),
				(this.ended = !1),
				(this.finished = !1),
				(this.destroyed = !1);
			let i = !!(t && t.decodeStrings === !1);
			(this.decodeStrings = !i),
				(this.defaultEncoding = (t && t.defaultEncoding) || 'utf8'),
				(this.length = 0),
				(this.writing = !1),
				(this.corked = 0),
				(this.sync = !0),
				(this.bufferProcessing = !1),
				(this.onwrite = j_.bind(void 0, e)),
				(this.writecb = null),
				(this.writelen = 0),
				(this.afterWriteTickInfo = null),
				pn(this),
				(this.pendingcb = 0),
				(this.constructed = !0),
				(this.prefinished = !1),
				(this.errorEmitted = !1),
				(this.emitClose = !t || t.emitClose !== !1),
				(this.autoDestroy = !t || t.autoDestroy !== !1),
				(this.errored = null),
				(this.closed = !1),
				(this.closeEmitted = !1),
				(this[Fr] = []);
		}
		function pn(t) {
			(t.buffered = []), (t.bufferedIndex = 0), (t.allBuffers = !0), (t.allNoop = !0);
		}
		yi.prototype.getBuffer = function () {
			return rh(this.buffered, this.bufferedIndex);
		};
		nh(yi.prototype, 'bufferedRequestCount', {
			__proto__: null,
			get() {
				return this.buffered.length - this.bufferedIndex;
			},
		});
		function ie(t) {
			let e = this instanceof nt();
			if (!e && !ih(ie, this)) return new ie(t);
			(this._writableState = new yi(t, this, e)),
				t &&
					(typeof t.write == 'function' && (this._write = t.write),
					typeof t.writev == 'function' && (this._writev = t.writev),
					typeof t.destroy == 'function' && (this._destroy = t.destroy),
					typeof t.final == 'function' && (this._final = t.final),
					typeof t.construct == 'function' && (this._construct = t.construct),
					t.signal && P_(t.signal, this)),
				pi.call(this, t),
				gn.construct(this, () => {
					let r = this._writableState;
					r.writing || lo(this, r), uo(this, r);
				});
		}
		nh(ie, C_, {
			__proto__: null,
			value: function (t) {
				return ih(this, t) ? !0 : this !== ie ? !1 : t && t._writableState instanceof yi;
			},
		});
		ie.prototype.pipe = function () {
			jr(this, new L_());
		};
		function lh(t, e, r, i) {
			let n = t._writableState;
			if (typeof r == 'function') (i = r), (r = n.defaultEncoding);
			else {
				if (!r) r = n.defaultEncoding;
				else if (r !== 'buffer' && !hn.isEncoding(r)) throw new ah(r);
				typeof i != 'function' && (i = oo);
			}
			if (e === null) throw new N_();
			if (!n.objectMode)
				if (typeof e == 'string')
					n.decodeStrings !== !1 && ((e = hn.from(e, r)), (r = 'buffer'));
				else if (e instanceof hn) r = 'buffer';
				else if (pi._isUint8Array(e)) (e = pi._uint8ArrayToBuffer(e)), (r = 'buffer');
				else throw new x_('chunk', ['string', 'Buffer', 'Uint8Array'], e);
			let o;
			return (
				n.ending ? (o = new q_()) : n.destroyed && (o = new gi('write')),
				o ? (ur.nextTick(i, o), jr(t, o, !0), o) : (n.pendingcb++, D_(t, n, e, r, i))
			);
		}
		ie.prototype.write = function (t, e, r) {
			return lh(this, t, e, r) === !0;
		};
		ie.prototype.cork = function () {
			this._writableState.corked++;
		};
		ie.prototype.uncork = function () {
			let t = this._writableState;
			t.corked && (t.corked--, t.writing || lo(this, t));
		};
		ie.prototype.setDefaultEncoding = function (e) {
			if ((typeof e == 'string' && (e = T_(e)), !hn.isEncoding(e))) throw new ah(e);
			return (this._writableState.defaultEncoding = e), this;
		};
		function D_(t, e, r, i, n) {
			let o = e.objectMode ? 1 : r.length;
			e.length += o;
			let s = e.length < e.highWaterMark;
			return (
				s || (e.needDrain = !0),
				e.writing || e.corked || e.errored || !e.constructed
					? (e.buffered.push({ chunk: r, encoding: i, callback: n }),
					  e.allBuffers && i !== 'buffer' && (e.allBuffers = !1),
					  e.allNoop && n !== oo && (e.allNoop = !1))
					: ((e.writelen = o),
					  (e.writecb = n),
					  (e.writing = !0),
					  (e.sync = !0),
					  t._write(r, i, e.onwrite),
					  (e.sync = !1)),
				s && !e.errored && !e.destroyed
			);
		}
		function eh(t, e, r, i, n, o, s) {
			(e.writelen = i),
				(e.writecb = s),
				(e.writing = !0),
				(e.sync = !0),
				e.destroyed
					? e.onwrite(new gi('write'))
					: r
					? t._writev(n, e.onwrite)
					: t._write(n, o, e.onwrite),
				(e.sync = !1);
		}
		function th(t, e, r, i) {
			--e.pendingcb, i(r), ao(e), jr(t, r);
		}
		function j_(t, e) {
			let r = t._writableState,
				i = r.sync,
				n = r.writecb;
			if (typeof n != 'function') {
				jr(t, new oh());
				return;
			}
			(r.writing = !1),
				(r.writecb = null),
				(r.length -= r.writelen),
				(r.writelen = 0),
				e
					? (e.stack,
					  r.errored || (r.errored = e),
					  t._readableState &&
							!t._readableState.errored &&
							(t._readableState.errored = e),
					  i ? ur.nextTick(th, t, r, e, n) : th(t, r, e, n))
					: (r.buffered.length > r.bufferedIndex && lo(t, r),
					  i
							? r.afterWriteTickInfo !== null && r.afterWriteTickInfo.cb === n
								? r.afterWriteTickInfo.count++
								: ((r.afterWriteTickInfo = {
										count: 1,
										cb: n,
										stream: t,
										state: r,
								  }),
								  ur.nextTick(F_, r.afterWriteTickInfo))
							: uh(t, r, 1, n));
		}
		function F_({ stream: t, state: e, count: r, cb: i }) {
			return (e.afterWriteTickInfo = null), uh(t, e, r, i);
		}
		function uh(t, e, r, i) {
			for (
				!e.ending &&
				!t.destroyed &&
				e.length === 0 &&
				e.needDrain &&
				((e.needDrain = !1), t.emit('drain'));
				r-- > 0;

			)
				e.pendingcb--, i();
			e.destroyed && ao(e), uo(t, e);
		}
		function ao(t) {
			if (t.writing) return;
			for (let n = t.bufferedIndex; n < t.buffered.length; ++n) {
				var e;
				let { chunk: o, callback: s } = t.buffered[n],
					a = t.objectMode ? 1 : o.length;
				(t.length -= a), s((e = t.errored) !== null && e !== void 0 ? e : new gi('write'));
			}
			let r = t[Fr].splice(0);
			for (let n = 0; n < r.length; n++) {
				var i;
				r[n]((i = t.errored) !== null && i !== void 0 ? i : new gi('end'));
			}
			pn(t);
		}
		function lo(t, e) {
			if (e.corked || e.bufferProcessing || e.destroyed || !e.constructed) return;
			let { buffered: r, bufferedIndex: i, objectMode: n } = e,
				o = r.length - i;
			if (!o) return;
			let s = i;
			if (((e.bufferProcessing = !0), o > 1 && t._writev)) {
				e.pendingcb -= o - 1;
				let a = e.allNoop
						? oo
						: (c) => {
								for (let h = s; h < r.length; ++h) r[h].callback(c);
						  },
					u = e.allNoop && s === 0 ? r : rh(r, s);
				(u.allBuffers = e.allBuffers), eh(t, e, !0, e.length, u, '', a), pn(e);
			} else {
				do {
					let { chunk: a, encoding: u, callback: c } = r[s];
					r[s++] = null;
					let h = n ? 1 : a.length;
					eh(t, e, !1, h, a, u, c);
				} while (s < r.length && !e.writing);
				s === r.length
					? pn(e)
					: s > 256
					? (r.splice(0, s), (e.bufferedIndex = 0))
					: (e.bufferedIndex = s);
			}
			e.bufferProcessing = !1;
		}
		ie.prototype._write = function (t, e, r) {
			if (this._writev) this._writev([{ chunk: t, encoding: e }], r);
			else throw new M_('_write()');
		};
		ie.prototype._writev = null;
		ie.prototype.end = function (t, e, r) {
			let i = this._writableState;
			typeof t == 'function'
				? ((r = t), (t = null), (e = null))
				: typeof e == 'function' && ((r = e), (e = null));
			let n;
			if (t != null) {
				let o = lh(this, t, e);
				o instanceof A_ && (n = o);
			}
			return (
				i.corked && ((i.corked = 1), this.uncork()),
				n ||
					(!i.errored && !i.ending
						? ((i.ending = !0), uo(this, i, !0), (i.ended = !0))
						: i.finished
						? (n = new U_('end'))
						: i.destroyed && (n = new gi('end'))),
				typeof r == 'function' && (n || i.finished ? ur.nextTick(r, n) : i[Fr].push(r)),
				this
			);
		};
		function dn(t) {
			return (
				t.ending &&
				!t.destroyed &&
				t.constructed &&
				t.length === 0 &&
				!t.errored &&
				t.buffered.length === 0 &&
				!t.finished &&
				!t.writing &&
				!t.errorEmitted &&
				!t.closeEmitted
			);
		}
		function W_(t, e) {
			let r = !1;
			function i(n) {
				if (r) {
					jr(t, n ?? oh());
					return;
				}
				if (((r = !0), e.pendingcb--, n)) {
					let o = e[Fr].splice(0);
					for (let s = 0; s < o.length; s++) o[s](n);
					jr(t, n, e.sync);
				} else
					dn(e) &&
						((e.prefinished = !0),
						t.emit('prefinish'),
						e.pendingcb++,
						ur.nextTick(so, t, e));
			}
			(e.sync = !0), e.pendingcb++;
			try {
				t._final(i);
			} catch (n) {
				i(n);
			}
			e.sync = !1;
		}
		function $_(t, e) {
			!e.prefinished &&
				!e.finalCalled &&
				(typeof t._final == 'function' && !e.destroyed
					? ((e.finalCalled = !0), W_(t, e))
					: ((e.prefinished = !0), t.emit('prefinish')));
		}
		function uo(t, e, r) {
			dn(e) &&
				($_(t, e),
				e.pendingcb === 0 &&
					(r
						? (e.pendingcb++,
						  ur.nextTick(
								(i, n) => {
									dn(n) ? so(i, n) : n.pendingcb--;
								},
								t,
								e
						  ))
						: dn(e) && (e.pendingcb++, so(t, e))));
		}
		function so(t, e) {
			e.pendingcb--, (e.finished = !0);
			let r = e[Fr].splice(0);
			for (let i = 0; i < r.length; i++) r[i]();
			if ((t.emit('finish'), e.autoDestroy)) {
				let i = t._readableState;
				(!i || (i.autoDestroy && (i.endEmitted || i.readable === !1))) && t.destroy();
			}
		}
		I_(ie.prototype, {
			closed: {
				__proto__: null,
				get() {
					return this._writableState ? this._writableState.closed : !1;
				},
			},
			destroyed: {
				__proto__: null,
				get() {
					return this._writableState ? this._writableState.destroyed : !1;
				},
				set(t) {
					this._writableState && (this._writableState.destroyed = t);
				},
			},
			writable: {
				__proto__: null,
				get() {
					let t = this._writableState;
					return (
						!!t &&
						t.writable !== !1 &&
						!t.destroyed &&
						!t.errored &&
						!t.ending &&
						!t.ended
					);
				},
				set(t) {
					this._writableState && (this._writableState.writable = !!t);
				},
			},
			writableFinished: {
				__proto__: null,
				get() {
					return this._writableState ? this._writableState.finished : !1;
				},
			},
			writableObjectMode: {
				__proto__: null,
				get() {
					return this._writableState ? this._writableState.objectMode : !1;
				},
			},
			writableBuffer: {
				__proto__: null,
				get() {
					return this._writableState && this._writableState.getBuffer();
				},
			},
			writableEnded: {
				__proto__: null,
				get() {
					return this._writableState ? this._writableState.ending : !1;
				},
			},
			writableNeedDrain: {
				__proto__: null,
				get() {
					let t = this._writableState;
					return t ? !t.destroyed && !t.ending && t.needDrain : !1;
				},
			},
			writableHighWaterMark: {
				__proto__: null,
				get() {
					return this._writableState && this._writableState.highWaterMark;
				},
			},
			writableCorked: {
				__proto__: null,
				get() {
					return this._writableState ? this._writableState.corked : 0;
				},
			},
			writableLength: {
				__proto__: null,
				get() {
					return this._writableState && this._writableState.length;
				},
			},
			errored: {
				__proto__: null,
				enumerable: !1,
				get() {
					return this._writableState ? this._writableState.errored : null;
				},
			},
			writableAborted: {
				__proto__: null,
				enumerable: !1,
				get: function () {
					return !!(
						this._writableState.writable !== !1 &&
						(this._writableState.destroyed || this._writableState.errored) &&
						!this._writableState.finished
					);
				},
			},
		});
		var H_ = gn.destroy;
		ie.prototype.destroy = function (t, e) {
			let r = this._writableState;
			return (
				!r.destroyed &&
					(r.bufferedIndex < r.buffered.length || r[Fr].length) &&
					ur.nextTick(ao, r),
				H_.call(this, t, e),
				this
			);
		};
		ie.prototype._undestroy = gn.undestroy;
		ie.prototype._destroy = function (t, e) {
			e(t);
		};
		ie.prototype[B_.captureRejectionSymbol] = function (t) {
			this.destroy(t);
		};
		var no;
		function fh() {
			return no === void 0 && (no = {}), no;
		}
		ie.fromWeb = function (t, e) {
			return fh().newStreamWritableFromWritableStream(t, e);
		};
		ie.toWeb = function (t) {
			return fh().newWritableStreamFromStreamWritable(t);
		};
	});
	var Sh = M((n2, Eh) => {
		v();
		m();
		_();
		var co = Nt(),
			V_ = (ye(), X(_e)),
			{
				isReadable: z_,
				isWritable: K_,
				isIterable: hh,
				isNodeStream: G_,
				isReadableNodeStream: dh,
				isWritableNodeStream: ph,
				isDuplexNodeStream: Q_,
			} = tt(),
			gh = vt(),
			{
				AbortError: vh,
				codes: { ERR_INVALID_ARG_TYPE: Y_, ERR_INVALID_RETURN_VALUE: yh },
			} = Se(),
			{ destroyer: Wr } = tr(),
			J_ = nt(),
			X_ = di(),
			{ createDeferredPromise: bh } = Je(),
			wh = Js(),
			_h = globalThis.Blob || V_.Blob,
			Z_ =
				typeof _h < 'u'
					? function (e) {
							return e instanceof _h;
					  }
					: function (e) {
							return !1;
					  },
			e0 = globalThis.AbortController || Hi().AbortController,
			{ FunctionPrototypeCall: mh } = ce(),
			fr = class extends J_ {
				constructor(e) {
					super(e),
						e?.readable === !1 &&
							((this._readableState.readable = !1),
							(this._readableState.ended = !0),
							(this._readableState.endEmitted = !0)),
						e?.writable === !1 &&
							((this._writableState.writable = !1),
							(this._writableState.ending = !0),
							(this._writableState.ended = !0),
							(this._writableState.finished = !0));
				}
			};
		Eh.exports = function t(e, r) {
			if (Q_(e)) return e;
			if (dh(e)) return yn({ readable: e });
			if (ph(e)) return yn({ writable: e });
			if (G_(e)) return yn({ writable: !1, readable: !1 });
			if (typeof e == 'function') {
				let { value: n, write: o, final: s, destroy: a } = t0(e);
				if (hh(n)) return wh(fr, n, { objectMode: !0, write: o, final: s, destroy: a });
				let u = n?.then;
				if (typeof u == 'function') {
					let c,
						h = mh(
							u,
							n,
							(d) => {
								if (d != null) throw new yh('nully', 'body', d);
							},
							(d) => {
								Wr(c, d);
							}
						);
					return (c = new fr({
						objectMode: !0,
						readable: !1,
						write: o,
						final(d) {
							s(async () => {
								try {
									await h, co.nextTick(d, null);
								} catch (g) {
									co.nextTick(d, g);
								}
							});
						},
						destroy: a,
					}));
				}
				throw new yh('Iterable, AsyncIterable or AsyncFunction', r, n);
			}
			if (Z_(e)) return t(e.arrayBuffer());
			if (hh(e)) return wh(fr, e, { objectMode: !0, writable: !1 });
			if (typeof e?.writable == 'object' || typeof e?.readable == 'object') {
				let n =
						e != null && e.readable
							? dh(e?.readable)
								? e?.readable
								: t(e.readable)
							: void 0,
					o =
						e != null && e.writable
							? ph(e?.writable)
								? e?.writable
								: t(e.writable)
							: void 0;
				return yn({ readable: n, writable: o });
			}
			let i = e?.then;
			if (typeof i == 'function') {
				let n;
				return (
					mh(
						i,
						e,
						(o) => {
							o != null && n.push(o), n.push(null);
						},
						(o) => {
							Wr(n, o);
						}
					),
					(n = new fr({ objectMode: !0, writable: !1, read() {} }))
				);
			}
			throw new Y_(
				r,
				[
					'Blob',
					'ReadableStream',
					'WritableStream',
					'Stream',
					'Iterable',
					'AsyncIterable',
					'Function',
					'{ readable, writable } pair',
					'Promise',
				],
				e
			);
		};
		function t0(t) {
			let { promise: e, resolve: r } = bh(),
				i = new e0(),
				n = i.signal;
			return {
				value: t(
					(async function* () {
						for (;;) {
							let s = e;
							e = null;
							let { chunk: a, done: u, cb: c } = await s;
							if ((co.nextTick(c), u)) return;
							if (n.aborted) throw new vh(void 0, { cause: n.reason });
							({ promise: e, resolve: r } = bh()), yield a;
						}
					})(),
					{ signal: n }
				),
				write(s, a, u) {
					let c = r;
					(r = null), c({ chunk: s, done: !1, cb: u });
				},
				final(s) {
					let a = r;
					(r = null), a({ done: !0, cb: s });
				},
				destroy(s, a) {
					i.abort(), a(s);
				},
			};
		}
		function yn(t) {
			let e =
					t.readable && typeof t.readable.read != 'function'
						? X_.wrap(t.readable)
						: t.readable,
				r = t.writable,
				i = !!z_(e),
				n = !!K_(r),
				o,
				s,
				a,
				u,
				c;
			function h(d) {
				let g = u;
				(u = null), g ? g(d) : d && c.destroy(d);
			}
			return (
				(c = new fr({
					readableObjectMode: !!(e != null && e.readableObjectMode),
					writableObjectMode: !!(r != null && r.writableObjectMode),
					readable: i,
					writable: n,
				})),
				n &&
					(gh(r, (d) => {
						(n = !1), d && Wr(e, d), h(d);
					}),
					(c._write = function (d, g, y) {
						r.write(d, g) ? y() : (o = y);
					}),
					(c._final = function (d) {
						r.end(), (s = d);
					}),
					r.on('drain', function () {
						if (o) {
							let d = o;
							(o = null), d();
						}
					}),
					r.on('finish', function () {
						if (s) {
							let d = s;
							(s = null), d();
						}
					})),
				i &&
					(gh(e, (d) => {
						(i = !1), d && Wr(e, d), h(d);
					}),
					e.on('readable', function () {
						if (a) {
							let d = a;
							(a = null), d();
						}
					}),
					e.on('end', function () {
						c.push(null);
					}),
					(c._read = function () {
						for (;;) {
							let d = e.read();
							if (d === null) {
								a = c._read;
								return;
							}
							if (!c.push(d)) return;
						}
					})),
				(c._destroy = function (d, g) {
					!d && u !== null && (d = new vh()),
						(a = null),
						(o = null),
						(s = null),
						u === null ? g(d) : ((u = g), Wr(r, d), Wr(e, d));
				}),
				c
			);
		}
	});
	var nt = M((c2, Th) => {
		'use strict';
		v();
		m();
		_();
		var {
			ObjectDefineProperties: r0,
			ObjectGetOwnPropertyDescriptor: It,
			ObjectKeys: i0,
			ObjectSetPrototypeOf: Ah,
		} = ce();
		Th.exports = Ve;
		var go = di(),
			Ne = fo();
		Ah(Ve.prototype, go.prototype);
		Ah(Ve, go);
		{
			let t = i0(Ne.prototype);
			for (let e = 0; e < t.length; e++) {
				let r = t[e];
				Ve.prototype[r] || (Ve.prototype[r] = Ne.prototype[r]);
			}
		}
		function Ve(t) {
			if (!(this instanceof Ve)) return new Ve(t);
			go.call(this, t),
				Ne.call(this, t),
				t
					? ((this.allowHalfOpen = t.allowHalfOpen !== !1),
					  t.readable === !1 &&
							((this._readableState.readable = !1),
							(this._readableState.ended = !0),
							(this._readableState.endEmitted = !0)),
					  t.writable === !1 &&
							((this._writableState.writable = !1),
							(this._writableState.ending = !0),
							(this._writableState.ended = !0),
							(this._writableState.finished = !0)))
					: (this.allowHalfOpen = !0);
		}
		r0(Ve.prototype, {
			writable: { __proto__: null, ...It(Ne.prototype, 'writable') },
			writableHighWaterMark: {
				__proto__: null,
				...It(Ne.prototype, 'writableHighWaterMark'),
			},
			writableObjectMode: { __proto__: null, ...It(Ne.prototype, 'writableObjectMode') },
			writableBuffer: { __proto__: null, ...It(Ne.prototype, 'writableBuffer') },
			writableLength: { __proto__: null, ...It(Ne.prototype, 'writableLength') },
			writableFinished: { __proto__: null, ...It(Ne.prototype, 'writableFinished') },
			writableCorked: { __proto__: null, ...It(Ne.prototype, 'writableCorked') },
			writableEnded: { __proto__: null, ...It(Ne.prototype, 'writableEnded') },
			writableNeedDrain: { __proto__: null, ...It(Ne.prototype, 'writableNeedDrain') },
			destroyed: {
				__proto__: null,
				get() {
					return this._readableState === void 0 || this._writableState === void 0
						? !1
						: this._readableState.destroyed && this._writableState.destroyed;
				},
				set(t) {
					this._readableState &&
						this._writableState &&
						((this._readableState.destroyed = t), (this._writableState.destroyed = t));
				},
			},
		});
		var ho;
		function Ih() {
			return ho === void 0 && (ho = {}), ho;
		}
		Ve.fromWeb = function (t, e) {
			return Ih().newStreamDuplexFromReadableWritablePair(t, e);
		};
		Ve.toWeb = function (t) {
			return Ih().newReadableWritablePairFromDuplex(t);
		};
		var po;
		Ve.from = function (t) {
			return po || (po = Sh()), po(t, 'body');
		};
	});
	var wo = M((w2, Ch) => {
		'use strict';
		v();
		m();
		_();
		var { ObjectSetPrototypeOf: Rh, Symbol: n0 } = ce();
		Ch.exports = Tt;
		var { ERR_METHOD_NOT_IMPLEMENTED: s0 } = Se().codes,
			bo = nt(),
			{ getHighWaterMark: o0 } = sn();
		Rh(Tt.prototype, bo.prototype);
		Rh(Tt, bo);
		var bi = n0('kCallback');
		function Tt(t) {
			if (!(this instanceof Tt)) return new Tt(t);
			let e = t ? o0(this, t, 'readableHighWaterMark', !0) : null;
			e === 0 &&
				(t = {
					...t,
					highWaterMark: null,
					readableHighWaterMark: e,
					writableHighWaterMark: t.writableHighWaterMark || 0,
				}),
				bo.call(this, t),
				(this._readableState.sync = !1),
				(this[bi] = null),
				t &&
					(typeof t.transform == 'function' && (this._transform = t.transform),
					typeof t.flush == 'function' && (this._flush = t.flush)),
				this.on('prefinish', a0);
		}
		function yo(t) {
			typeof this._flush == 'function' && !this.destroyed
				? this._flush((e, r) => {
						if (e) {
							t ? t(e) : this.destroy(e);
							return;
						}
						r != null && this.push(r), this.push(null), t && t();
				  })
				: (this.push(null), t && t());
		}
		function a0() {
			this._final !== yo && yo.call(this);
		}
		Tt.prototype._final = yo;
		Tt.prototype._transform = function (t, e, r) {
			throw new s0('_transform()');
		};
		Tt.prototype._write = function (t, e, r) {
			let i = this._readableState,
				n = this._writableState,
				o = i.length;
			this._transform(t, e, (s, a) => {
				if (s) {
					r(s);
					return;
				}
				a != null && this.push(a),
					n.ended || o === i.length || i.length < i.highWaterMark ? r() : (this[bi] = r);
			});
		};
		Tt.prototype._read = function () {
			if (this[bi]) {
				let t = this[bi];
				(this[bi] = null), t();
			}
		};
	});
	var mo = M((I2, Ph) => {
		'use strict';
		v();
		m();
		_();
		var { ObjectSetPrototypeOf: Bh } = ce();
		Ph.exports = $r;
		var _o = wo();
		Bh($r.prototype, _o.prototype);
		Bh($r, _o);
		function $r(t) {
			if (!(this instanceof $r)) return new $r(t);
			_o.call(this, t);
		}
		$r.prototype._transform = function (t, e, r) {
			r(null, t);
		};
	});
	var mn = M((k2, Lh) => {
		v();
		m();
		_();
		var wi = Nt(),
			{ ArrayIsArray: l0, Promise: u0, SymbolAsyncIterator: f0 } = ce(),
			_n = vt(),
			{ once: c0 } = Je(),
			h0 = tr(),
			Oh = nt(),
			{
				aggregateTwoErrors: d0,
				codes: {
					ERR_INVALID_ARG_TYPE: Co,
					ERR_INVALID_RETURN_VALUE: vo,
					ERR_MISSING_ARGS: p0,
					ERR_STREAM_DESTROYED: g0,
					ERR_STREAM_PREMATURE_CLOSE: y0,
				},
				AbortError: b0,
			} = Se(),
			{ validateFunction: w0, validateAbortSignal: _0 } = fi(),
			{
				isIterable: cr,
				isReadable: Eo,
				isReadableNodeStream: wn,
				isNodeStream: kh,
				isTransformStream: Hr,
				isWebStream: m0,
				isReadableStream: So,
				isReadableEnded: v0,
			} = tt(),
			E0 = globalThis.AbortController || Hi().AbortController,
			Ao,
			Io;
		function xh(t, e, r) {
			let i = !1;
			t.on('close', () => {
				i = !0;
			});
			let n = _n(t, { readable: e, writable: r }, (o) => {
				i = !o;
			});
			return {
				destroy: (o) => {
					i || ((i = !0), h0.destroyer(t, o || new g0('pipe')));
				},
				cleanup: n,
			};
		}
		function S0(t) {
			return w0(t[t.length - 1], 'streams[stream.length - 1]'), t.pop();
		}
		function To(t) {
			if (cr(t)) return t;
			if (wn(t)) return A0(t);
			throw new Co('val', ['Readable', 'Iterable', 'AsyncIterable'], t);
		}
		async function* A0(t) {
			Io || (Io = di()), yield* Io.prototype[f0].call(t);
		}
		async function bn(t, e, r, { end: i }) {
			let n,
				o = null,
				s = (c) => {
					if ((c && (n = c), o)) {
						let h = o;
						(o = null), h();
					}
				},
				a = () =>
					new u0((c, h) => {
						n
							? h(n)
							: (o = () => {
									n ? h(n) : c();
							  });
					});
			e.on('drain', s);
			let u = _n(e, { readable: !1 }, s);
			try {
				e.writableNeedDrain && (await a());
				for await (let c of t) e.write(c) || (await a());
				i && e.end(), await a(), r();
			} catch (c) {
				r(n !== c ? d0(n, c) : c);
			} finally {
				u(), e.off('drain', s);
			}
		}
		async function Ro(t, e, r, { end: i }) {
			Hr(e) && (e = e.writable);
			let n = e.getWriter();
			try {
				for await (let o of t) await n.ready, n.write(o).catch(() => {});
				await n.ready, i && (await n.close()), r();
			} catch (o) {
				try {
					await n.abort(o), r(o);
				} catch (s) {
					r(s);
				}
			}
		}
		function I0(...t) {
			return Mh(t, c0(S0(t)));
		}
		function Mh(t, e, r) {
			if ((t.length === 1 && l0(t[0]) && (t = t[0]), t.length < 2)) throw new p0('streams');
			let i = new E0(),
				n = i.signal,
				o = r?.signal,
				s = [];
			_0(o, 'options.signal');
			function a() {
				y(new b0());
			}
			o?.addEventListener('abort', a);
			let u,
				c,
				h = [],
				d = 0;
			function g(C) {
				y(C, --d === 0);
			}
			function y(C, R) {
				if (
					(C && (!u || u.code === 'ERR_STREAM_PREMATURE_CLOSE') && (u = C), !(!u && !R))
				) {
					for (; h.length; ) h.shift()(u);
					o?.removeEventListener('abort', a),
						i.abort(),
						R && (u || s.forEach((U) => U()), wi.nextTick(e, u, c));
				}
			}
			let w;
			for (let C = 0; C < t.length; C++) {
				let R = t[C],
					U = C < t.length - 1,
					N = C > 0,
					W = U || r?.end !== !1,
					K = C === t.length - 1;
				if (kh(R)) {
					let z = function (Q) {
						Q &&
							Q.name !== 'AbortError' &&
							Q.code !== 'ERR_STREAM_PREMATURE_CLOSE' &&
							g(Q);
					};
					var I = z;
					if (W) {
						let { destroy: Q, cleanup: de } = xh(R, U, N);
						h.push(Q), Eo(R) && K && s.push(de);
					}
					R.on('error', z),
						Eo(R) &&
							K &&
							s.push(() => {
								R.removeListener('error', z);
							});
				}
				if (C === 0)
					if (typeof R == 'function') {
						if (((w = R({ signal: n })), !cr(w)))
							throw new vo('Iterable, AsyncIterable or Stream', 'source', w);
					} else cr(R) || wn(R) || Hr(R) ? (w = R) : (w = Oh.from(R));
				else if (typeof R == 'function') {
					if (Hr(w)) {
						var E;
						w = To((E = w) === null || E === void 0 ? void 0 : E.readable);
					} else w = To(w);
					if (((w = R(w, { signal: n })), U)) {
						if (!cr(w, !0)) throw new vo('AsyncIterable', `transform[${C - 1}]`, w);
					} else {
						var S;
						Ao || (Ao = mo());
						let z = new Ao({ objectMode: !0 }),
							Q = (S = w) === null || S === void 0 ? void 0 : S.then;
						if (typeof Q == 'function')
							d++,
								Q.call(
									w,
									(pe) => {
										(c = pe),
											pe != null && z.write(pe),
											W && z.end(),
											wi.nextTick(g);
									},
									(pe) => {
										z.destroy(pe), wi.nextTick(g, pe);
									}
								);
						else if (cr(w, !0)) d++, bn(w, z, g, { end: W });
						else if (So(w) || Hr(w)) {
							let pe = w.readable || w;
							d++, bn(pe, z, g, { end: W });
						} else throw new vo('AsyncIterable or Promise', 'destination', w);
						w = z;
						let { destroy: de, cleanup: Gt } = xh(w, !1, !0);
						h.push(de), K && s.push(Gt);
					}
				} else if (kh(R)) {
					if (wn(w)) {
						d += 2;
						let z = T0(w, R, g, { end: W });
						Eo(R) && K && s.push(z);
					} else if (Hr(w) || So(w)) {
						let z = w.readable || w;
						d++, bn(z, R, g, { end: W });
					} else if (cr(w)) d++, bn(w, R, g, { end: W });
					else
						throw new Co(
							'val',
							[
								'Readable',
								'Iterable',
								'AsyncIterable',
								'ReadableStream',
								'TransformStream',
							],
							w
						);
					w = R;
				} else if (m0(R)) {
					if (wn(w)) d++, Ro(To(w), R, g, { end: W });
					else if (So(w) || cr(w)) d++, Ro(w, R, g, { end: W });
					else if (Hr(w)) d++, Ro(w.readable, R, g, { end: W });
					else
						throw new Co(
							'val',
							[
								'Readable',
								'Iterable',
								'AsyncIterable',
								'ReadableStream',
								'TransformStream',
							],
							w
						);
					w = R;
				} else w = Oh.from(R);
			}
			return ((n != null && n.aborted) || (o != null && o.aborted)) && wi.nextTick(a), w;
		}
		function T0(t, e, r, { end: i }) {
			let n = !1;
			if (
				(e.on('close', () => {
					n || r(new y0());
				}),
				t.pipe(e, { end: !1 }),
				i)
			) {
				let s = function () {
					(n = !0), e.end();
				};
				var o = s;
				v0(t) ? wi.nextTick(s) : t.once('end', s);
			} else r();
			return (
				_n(t, { readable: !0, writable: !1 }, (s) => {
					let a = t._readableState;
					s &&
					s.code === 'ERR_STREAM_PREMATURE_CLOSE' &&
					a &&
					a.ended &&
					!a.errored &&
					!a.errorEmitted
						? t.once('end', r).once('error', r)
						: r(s);
				}),
				_n(e, { readable: !1, writable: !0 }, r)
			);
		}
		Lh.exports = { pipelineImpl: Mh, pipeline: I0 };
	});
	var Po = M((D2, Fh) => {
		'use strict';
		v();
		m();
		_();
		var { pipeline: R0 } = mn(),
			vn = nt(),
			{ destroyer: C0 } = tr(),
			{
				isNodeStream: En,
				isReadable: Uh,
				isWritable: Nh,
				isWebStream: Bo,
				isTransformStream: hr,
				isWritableStream: qh,
				isReadableStream: Dh,
			} = tt(),
			{
				AbortError: B0,
				codes: { ERR_INVALID_ARG_VALUE: jh, ERR_MISSING_ARGS: P0 },
			} = Se(),
			O0 = vt();
		Fh.exports = function (...e) {
			if (e.length === 0) throw new P0('streams');
			if (e.length === 1) return vn.from(e[0]);
			let r = [...e];
			if (
				(typeof e[0] == 'function' && (e[0] = vn.from(e[0])),
				typeof e[e.length - 1] == 'function')
			) {
				let y = e.length - 1;
				e[y] = vn.from(e[y]);
			}
			for (let y = 0; y < e.length; ++y)
				if (!(!En(e[y]) && !Bo(e[y]))) {
					if (y < e.length - 1 && !(Uh(e[y]) || Dh(e[y]) || hr(e[y])))
						throw new jh(`streams[${y}]`, r[y], 'must be readable');
					if (y > 0 && !(Nh(e[y]) || qh(e[y]) || hr(e[y])))
						throw new jh(`streams[${y}]`, r[y], 'must be writable');
				}
			let i, n, o, s, a;
			function u(y) {
				let w = s;
				(s = null), w ? w(y) : y ? a.destroy(y) : !g && !d && a.destroy();
			}
			let c = e[0],
				h = R0(e, u),
				d = !!(Nh(c) || qh(c) || hr(c)),
				g = !!(Uh(h) || Dh(h) || hr(h));
			if (
				((a = new vn({
					writableObjectMode: !!(c != null && c.writableObjectMode),
					readableObjectMode: !!(h != null && h.writableObjectMode),
					writable: d,
					readable: g,
				})),
				d)
			) {
				if (En(c))
					(a._write = function (w, E, S) {
						c.write(w, E) ? S() : (i = S);
					}),
						(a._final = function (w) {
							c.end(), (n = w);
						}),
						c.on('drain', function () {
							if (i) {
								let w = i;
								(i = null), w();
							}
						});
				else if (Bo(c)) {
					let E = (hr(c) ? c.writable : c).getWriter();
					(a._write = async function (S, I, C) {
						try {
							await E.ready, E.write(S).catch(() => {}), C();
						} catch (R) {
							C(R);
						}
					}),
						(a._final = async function (S) {
							try {
								await E.ready, E.close().catch(() => {}), (n = S);
							} catch (I) {
								S(I);
							}
						});
				}
				let y = hr(h) ? h.readable : h;
				O0(y, () => {
					if (n) {
						let w = n;
						(n = null), w();
					}
				});
			}
			if (g) {
				if (En(h))
					h.on('readable', function () {
						if (o) {
							let y = o;
							(o = null), y();
						}
					}),
						h.on('end', function () {
							a.push(null);
						}),
						(a._read = function () {
							for (;;) {
								let y = h.read();
								if (y === null) {
									o = a._read;
									return;
								}
								if (!a.push(y)) return;
							}
						});
				else if (Bo(h)) {
					let w = (hr(h) ? h.readable : h).getReader();
					a._read = async function () {
						for (;;)
							try {
								let { value: E, done: S } = await w.read();
								if (!a.push(E)) return;
								if (S) {
									a.push(null);
									return;
								}
							} catch {
								return;
							}
					};
				}
			}
			return (
				(a._destroy = function (y, w) {
					!y && s !== null && (y = new B0()),
						(o = null),
						(i = null),
						(n = null),
						s === null ? w(y) : ((s = w), En(h) && C0(h, y));
				}),
				a
			);
		};
	});
	var Qh = M((z2, xo) => {
		'use strict';
		v();
		m();
		_();
		var Vh = globalThis.AbortController || Hi().AbortController,
			{
				codes: {
					ERR_INVALID_ARG_VALUE: k0,
					ERR_INVALID_ARG_TYPE: _i,
					ERR_MISSING_ARGS: x0,
					ERR_OUT_OF_RANGE: M0,
				},
				AbortError: st,
			} = Se(),
			{ validateAbortSignal: dr, validateInteger: L0, validateObject: pr } = fi(),
			U0 = ce().Symbol('kWeak'),
			{ finished: N0 } = vt(),
			q0 = Po(),
			{ addAbortSignalNoValidate: D0 } = ci(),
			{ isWritable: j0, isNodeStream: F0 } = tt(),
			{
				ArrayPrototypePush: W0,
				MathFloor: $0,
				Number: H0,
				NumberIsNaN: V0,
				Promise: Wh,
				PromiseReject: $h,
				PromisePrototypeThen: z0,
				Symbol: zh,
			} = ce(),
			Sn = zh('kEmpty'),
			Hh = zh('kEof');
		function K0(t, e) {
			if (
				(e != null && pr(e, 'options'),
				e?.signal != null && dr(e.signal, 'options.signal'),
				F0(t) && !j0(t))
			)
				throw new k0('stream', t, 'must be writable');
			let r = q0(this, t);
			return e != null && e.signal && D0(e.signal, r), r;
		}
		function An(t, e) {
			if (typeof t != 'function') throw new _i('fn', ['Function', 'AsyncFunction'], t);
			e != null && pr(e, 'options'), e?.signal != null && dr(e.signal, 'options.signal');
			let r = 1;
			return (
				e?.concurrency != null && (r = $0(e.concurrency)),
				L0(r, 'concurrency', 1),
				async function* () {
					var n, o;
					let s = new Vh(),
						a = this,
						u = [],
						c = s.signal,
						h = { signal: c },
						d = () => s.abort();
					e != null && (n = e.signal) !== null && n !== void 0 && n.aborted && d(),
						e == null ||
							(o = e.signal) === null ||
							o === void 0 ||
							o.addEventListener('abort', d);
					let g,
						y,
						w = !1;
					function E() {
						w = !0;
					}
					async function S() {
						try {
							for await (let R of a) {
								var I;
								if (w) return;
								if (c.aborted) throw new st();
								try {
									R = t(R, h);
								} catch (U) {
									R = $h(U);
								}
								R !== Sn &&
									(typeof ((I = R) === null || I === void 0 ? void 0 : I.catch) ==
										'function' && R.catch(E),
									u.push(R),
									g && (g(), (g = null)),
									!w &&
										u.length &&
										u.length >= r &&
										(await new Wh((U) => {
											y = U;
										})));
							}
							u.push(Hh);
						} catch (R) {
							let U = $h(R);
							z0(U, void 0, E), u.push(U);
						} finally {
							var C;
							(w = !0),
								g && (g(), (g = null)),
								e == null ||
									(C = e.signal) === null ||
									C === void 0 ||
									C.removeEventListener('abort', d);
						}
					}
					S();
					try {
						for (;;) {
							for (; u.length > 0; ) {
								let I = await u[0];
								if (I === Hh) return;
								if (c.aborted) throw new st();
								I !== Sn && (yield I), u.shift(), y && (y(), (y = null));
							}
							await new Wh((I) => {
								g = I;
							});
						}
					} finally {
						s.abort(), (w = !0), y && (y(), (y = null));
					}
				}.call(this)
			);
		}
		function G0(t = void 0) {
			return (
				t != null && pr(t, 'options'),
				t?.signal != null && dr(t.signal, 'options.signal'),
				async function* () {
					let r = 0;
					for await (let n of this) {
						var i;
						if (t != null && (i = t.signal) !== null && i !== void 0 && i.aborted)
							throw new st({ cause: t.signal.reason });
						yield [r++, n];
					}
				}.call(this)
			);
		}
		async function Kh(t, e = void 0) {
			for await (let r of ko.call(this, t, e)) return !0;
			return !1;
		}
		async function Q0(t, e = void 0) {
			if (typeof t != 'function') throw new _i('fn', ['Function', 'AsyncFunction'], t);
			return !(await Kh.call(this, async (...r) => !(await t(...r)), e));
		}
		async function Y0(t, e) {
			for await (let r of ko.call(this, t, e)) return r;
		}
		async function J0(t, e) {
			if (typeof t != 'function') throw new _i('fn', ['Function', 'AsyncFunction'], t);
			async function r(i, n) {
				return await t(i, n), Sn;
			}
			for await (let i of An.call(this, r, e));
		}
		function ko(t, e) {
			if (typeof t != 'function') throw new _i('fn', ['Function', 'AsyncFunction'], t);
			async function r(i, n) {
				return (await t(i, n)) ? i : Sn;
			}
			return An.call(this, r, e);
		}
		var Oo = class extends x0 {
			constructor() {
				super('reduce'),
					(this.message = 'Reduce of an empty stream requires an initial value');
			}
		};
		async function X0(t, e, r) {
			var i;
			if (typeof t != 'function') throw new _i('reducer', ['Function', 'AsyncFunction'], t);
			r != null && pr(r, 'options'), r?.signal != null && dr(r.signal, 'options.signal');
			let n = arguments.length > 1;
			if (r != null && (i = r.signal) !== null && i !== void 0 && i.aborted) {
				let c = new st(void 0, { cause: r.signal.reason });
				throw (this.once('error', () => {}), await N0(this.destroy(c)), c);
			}
			let o = new Vh(),
				s = o.signal;
			if (r != null && r.signal) {
				let c = { once: !0, [U0]: this };
				r.signal.addEventListener('abort', () => o.abort(), c);
			}
			let a = !1;
			try {
				for await (let c of this) {
					var u;
					if (
						((a = !0),
						r != null && (u = r.signal) !== null && u !== void 0 && u.aborted)
					)
						throw new st();
					n ? (e = await t(e, c, { signal: s })) : ((e = c), (n = !0));
				}
				if (!a && !n) throw new Oo();
			} finally {
				o.abort();
			}
			return e;
		}
		async function Z0(t) {
			t != null && pr(t, 'options'), t?.signal != null && dr(t.signal, 'options.signal');
			let e = [];
			for await (let i of this) {
				var r;
				if (t != null && (r = t.signal) !== null && r !== void 0 && r.aborted)
					throw new st(void 0, { cause: t.signal.reason });
				W0(e, i);
			}
			return e;
		}
		function em(t, e) {
			let r = An.call(this, t, e);
			return async function* () {
				for await (let n of r) yield* n;
			}.call(this);
		}
		function Gh(t) {
			if (((t = H0(t)), V0(t))) return 0;
			if (t < 0) throw new M0('number', '>= 0', t);
			return t;
		}
		function tm(t, e = void 0) {
			return (
				e != null && pr(e, 'options'),
				e?.signal != null && dr(e.signal, 'options.signal'),
				(t = Gh(t)),
				async function* () {
					var i;
					if (e != null && (i = e.signal) !== null && i !== void 0 && i.aborted)
						throw new st();
					for await (let o of this) {
						var n;
						if (e != null && (n = e.signal) !== null && n !== void 0 && n.aborted)
							throw new st();
						t-- <= 0 && (yield o);
					}
				}.call(this)
			);
		}
		function rm(t, e = void 0) {
			return (
				e != null && pr(e, 'options'),
				e?.signal != null && dr(e.signal, 'options.signal'),
				(t = Gh(t)),
				async function* () {
					var i;
					if (e != null && (i = e.signal) !== null && i !== void 0 && i.aborted)
						throw new st();
					for await (let o of this) {
						var n;
						if (e != null && (n = e.signal) !== null && n !== void 0 && n.aborted)
							throw new st();
						if (t-- > 0) yield o;
						else return;
					}
				}.call(this)
			);
		}
		xo.exports.streamReturningOperators = {
			asIndexedPairs: G0,
			drop: tm,
			filter: ko,
			flatMap: em,
			map: An,
			take: rm,
			compose: K0,
		};
		xo.exports.promiseReturningOperators = {
			every: Q0,
			forEach: J0,
			reduce: X0,
			toArray: Z0,
			some: Kh,
			find: Y0,
		};
	});
	var Mo = M((Z2, Yh) => {
		'use strict';
		v();
		m();
		_();
		var { ArrayPrototypePop: im, Promise: nm } = ce(),
			{ isIterable: sm, isNodeStream: om, isWebStream: am } = tt(),
			{ pipelineImpl: lm } = mn(),
			{ finished: um } = vt();
		Lo();
		function fm(...t) {
			return new nm((e, r) => {
				let i,
					n,
					o = t[t.length - 1];
				if (o && typeof o == 'object' && !om(o) && !sm(o) && !am(o)) {
					let s = im(t);
					(i = s.signal), (n = s.end);
				}
				lm(
					t,
					(s, a) => {
						s ? r(s) : e(a);
					},
					{ signal: i, end: n }
				);
			});
		}
		Yh.exports = { finished: um, pipeline: fm };
	});
	var Lo = M((oR, sd) => {
		v();
		m();
		_();
		var { Buffer: cm } = (ye(), X(_e)),
			{ ObjectDefineProperty: Rt, ObjectKeys: Zh, ReflectApply: ed } = ce(),
			{
				promisify: { custom: td },
			} = Je(),
			{ streamReturningOperators: Jh, promiseReturningOperators: Xh } = Qh(),
			{
				codes: { ERR_ILLEGAL_CONSTRUCTOR: rd },
			} = Se(),
			hm = Po(),
			{ pipeline: id } = mn(),
			{ destroyer: dm } = tr(),
			nd = vt(),
			Uo = Mo(),
			No = tt(),
			le = (sd.exports = tn().Stream);
		le.isDisturbed = No.isDisturbed;
		le.isErrored = No.isErrored;
		le.isReadable = No.isReadable;
		le.Readable = di();
		for (let t of Zh(Jh)) {
			let r = function (...i) {
				if (new.target) throw rd();
				return le.Readable.from(ed(e, this, i));
			};
			qo = r;
			let e = Jh[t];
			Rt(r, 'name', { __proto__: null, value: e.name }),
				Rt(r, 'length', { __proto__: null, value: e.length }),
				Rt(le.Readable.prototype, t, {
					__proto__: null,
					value: r,
					enumerable: !1,
					configurable: !0,
					writable: !0,
				});
		}
		var qo;
		for (let t of Zh(Xh)) {
			let r = function (...n) {
				if (new.target) throw rd();
				return ed(e, this, n);
			};
			qo = r;
			let e = Xh[t];
			Rt(r, 'name', { __proto__: null, value: e.name }),
				Rt(r, 'length', { __proto__: null, value: e.length }),
				Rt(le.Readable.prototype, t, {
					__proto__: null,
					value: r,
					enumerable: !1,
					configurable: !0,
					writable: !0,
				});
		}
		var qo;
		le.Writable = fo();
		le.Duplex = nt();
		le.Transform = wo();
		le.PassThrough = mo();
		le.pipeline = id;
		var { addAbortSignal: pm } = ci();
		le.addAbortSignal = pm;
		le.finished = nd;
		le.destroy = dm;
		le.compose = hm;
		Rt(le, 'promises', {
			__proto__: null,
			configurable: !0,
			enumerable: !0,
			get() {
				return Uo;
			},
		});
		Rt(id, td, {
			__proto__: null,
			enumerable: !0,
			get() {
				return Uo.pipeline;
			},
		});
		Rt(nd, td, {
			__proto__: null,
			enumerable: !0,
			get() {
				return Uo.finished;
			},
		});
		le.Stream = le;
		le._isUint8Array = function (e) {
			return e instanceof Uint8Array;
		};
		le._uint8ArrayToBuffer = function (e) {
			return cm.from(e.buffer, e.byteOffset, e.byteLength);
		};
	});
	var jt = M((dR, ue) => {
		'use strict';
		v();
		m();
		_();
		var he = Lo(),
			gm = Mo(),
			ym = he.Readable.destroy;
		ue.exports = he.Readable;
		ue.exports._uint8ArrayToBuffer = he._uint8ArrayToBuffer;
		ue.exports._isUint8Array = he._isUint8Array;
		ue.exports.isDisturbed = he.isDisturbed;
		ue.exports.isErrored = he.isErrored;
		ue.exports.isReadable = he.isReadable;
		ue.exports.Readable = he.Readable;
		ue.exports.Writable = he.Writable;
		ue.exports.Duplex = he.Duplex;
		ue.exports.Transform = he.Transform;
		ue.exports.PassThrough = he.PassThrough;
		ue.exports.addAbortSignal = he.addAbortSignal;
		ue.exports.finished = he.finished;
		ue.exports.destroy = he.destroy;
		ue.exports.destroy = ym;
		ue.exports.pipeline = he.pipeline;
		ue.exports.compose = he.compose;
		Object.defineProperty(he, 'promises', {
			configurable: !0,
			enumerable: !0,
			get() {
				return gm;
			},
		});
		ue.exports.Stream = he.Stream;
		ue.exports.default = ue.exports;
	});
	var od = M((mR, Do) => {
		v();
		m();
		_();
		typeof Object.create == 'function'
			? (Do.exports = function (e, r) {
					r &&
						((e.super_ = r),
						(e.prototype = Object.create(r.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0,
							},
						})));
			  })
			: (Do.exports = function (e, r) {
					if (r) {
						e.super_ = r;
						var i = function () {};
						(i.prototype = r.prototype),
							(e.prototype = new i()),
							(e.prototype.constructor = e);
					}
			  });
	});
	var ud = M((RR, ld) => {
		'use strict';
		v();
		m();
		_();
		var { Buffer: ze } = (ye(), X(_e)),
			ad = Symbol.for('BufferList');
		function ee(t) {
			if (!(this instanceof ee)) return new ee(t);
			ee._init.call(this, t);
		}
		ee._init = function (e) {
			Object.defineProperty(this, ad, { value: !0 }),
				(this._bufs = []),
				(this.length = 0),
				e && this.append(e);
		};
		ee.prototype._new = function (e) {
			return new ee(e);
		};
		ee.prototype._offset = function (e) {
			if (e === 0) return [0, 0];
			let r = 0;
			for (let i = 0; i < this._bufs.length; i++) {
				let n = r + this._bufs[i].length;
				if (e < n || i === this._bufs.length - 1) return [i, e - r];
				r = n;
			}
		};
		ee.prototype._reverseOffset = function (t) {
			let e = t[0],
				r = t[1];
			for (let i = 0; i < e; i++) r += this._bufs[i].length;
			return r;
		};
		ee.prototype.get = function (e) {
			if (e > this.length || e < 0) return;
			let r = this._offset(e);
			return this._bufs[r[0]][r[1]];
		};
		ee.prototype.slice = function (e, r) {
			return (
				typeof e == 'number' && e < 0 && (e += this.length),
				typeof r == 'number' && r < 0 && (r += this.length),
				this.copy(null, 0, e, r)
			);
		};
		ee.prototype.copy = function (e, r, i, n) {
			if (
				((typeof i != 'number' || i < 0) && (i = 0),
				(typeof n != 'number' || n > this.length) && (n = this.length),
				i >= this.length || n <= 0)
			)
				return e || ze.alloc(0);
			let o = !!e,
				s = this._offset(i),
				a = n - i,
				u = a,
				c = (o && r) || 0,
				h = s[1];
			if (i === 0 && n === this.length) {
				if (!o)
					return this._bufs.length === 1
						? this._bufs[0]
						: ze.concat(this._bufs, this.length);
				for (let d = 0; d < this._bufs.length; d++)
					this._bufs[d].copy(e, c), (c += this._bufs[d].length);
				return e;
			}
			if (u <= this._bufs[s[0]].length - h)
				return o ? this._bufs[s[0]].copy(e, r, h, h + u) : this._bufs[s[0]].slice(h, h + u);
			o || (e = ze.allocUnsafe(a));
			for (let d = s[0]; d < this._bufs.length; d++) {
				let g = this._bufs[d].length - h;
				if (u > g) this._bufs[d].copy(e, c, h), (c += g);
				else {
					this._bufs[d].copy(e, c, h, h + u), (c += g);
					break;
				}
				(u -= g), h && (h = 0);
			}
			return e.length > c ? e.slice(0, c) : e;
		};
		ee.prototype.shallowSlice = function (e, r) {
			if (
				((e = e || 0),
				(r = typeof r != 'number' ? this.length : r),
				e < 0 && (e += this.length),
				r < 0 && (r += this.length),
				e === r)
			)
				return this._new();
			let i = this._offset(e),
				n = this._offset(r),
				o = this._bufs.slice(i[0], n[0] + 1);
			return (
				n[1] === 0 ? o.pop() : (o[o.length - 1] = o[o.length - 1].slice(0, n[1])),
				i[1] !== 0 && (o[0] = o[0].slice(i[1])),
				this._new(o)
			);
		};
		ee.prototype.toString = function (e, r, i) {
			return this.slice(r, i).toString(e);
		};
		ee.prototype.consume = function (e) {
			if (((e = Math.trunc(e)), Number.isNaN(e) || e <= 0)) return this;
			for (; this._bufs.length; )
				if (e >= this._bufs[0].length)
					(e -= this._bufs[0].length),
						(this.length -= this._bufs[0].length),
						this._bufs.shift();
				else {
					(this._bufs[0] = this._bufs[0].slice(e)), (this.length -= e);
					break;
				}
			return this;
		};
		ee.prototype.duplicate = function () {
			let e = this._new();
			for (let r = 0; r < this._bufs.length; r++) e.append(this._bufs[r]);
			return e;
		};
		ee.prototype.append = function (e) {
			if (e == null) return this;
			if (e.buffer) this._appendBuffer(ze.from(e.buffer, e.byteOffset, e.byteLength));
			else if (Array.isArray(e)) for (let r = 0; r < e.length; r++) this.append(e[r]);
			else if (this._isBufferList(e))
				for (let r = 0; r < e._bufs.length; r++) this.append(e._bufs[r]);
			else typeof e == 'number' && (e = e.toString()), this._appendBuffer(ze.from(e));
			return this;
		};
		ee.prototype._appendBuffer = function (e) {
			this._bufs.push(e), (this.length += e.length);
		};
		ee.prototype.indexOf = function (t, e, r) {
			if (
				(r === void 0 && typeof e == 'string' && ((r = e), (e = void 0)),
				typeof t == 'function' || Array.isArray(t))
			)
				throw new TypeError(
					'The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.'
				);
			if (
				(typeof t == 'number'
					? (t = ze.from([t]))
					: typeof t == 'string'
					? (t = ze.from(t, r))
					: this._isBufferList(t)
					? (t = t.slice())
					: Array.isArray(t.buffer)
					? (t = ze.from(t.buffer, t.byteOffset, t.byteLength))
					: ze.isBuffer(t) || (t = ze.from(t)),
				(e = Number(e || 0)),
				isNaN(e) && (e = 0),
				e < 0 && (e = this.length + e),
				e < 0 && (e = 0),
				t.length === 0)
			)
				return e > this.length ? this.length : e;
			let i = this._offset(e),
				n = i[0],
				o = i[1];
			for (; n < this._bufs.length; n++) {
				let s = this._bufs[n];
				for (; o < s.length; )
					if (s.length - o >= t.length) {
						let u = s.indexOf(t, o);
						if (u !== -1) return this._reverseOffset([n, u]);
						o = s.length - t.length + 1;
					} else {
						let u = this._reverseOffset([n, o]);
						if (this._match(u, t)) return u;
						o++;
					}
				o = 0;
			}
			return -1;
		};
		ee.prototype._match = function (t, e) {
			if (this.length - t < e.length) return !1;
			for (let r = 0; r < e.length; r++) if (this.get(t + r) !== e[r]) return !1;
			return !0;
		};
		(function () {
			let t = {
				readDoubleBE: 8,
				readDoubleLE: 8,
				readFloatBE: 4,
				readFloatLE: 4,
				readBigInt64BE: 8,
				readBigInt64LE: 8,
				readBigUInt64BE: 8,
				readBigUInt64LE: 8,
				readInt32BE: 4,
				readInt32LE: 4,
				readUInt32BE: 4,
				readUInt32LE: 4,
				readInt16BE: 2,
				readInt16LE: 2,
				readUInt16BE: 2,
				readUInt16LE: 2,
				readInt8: 1,
				readUInt8: 1,
				readIntBE: null,
				readIntLE: null,
				readUIntBE: null,
				readUIntLE: null,
			};
			for (let e in t)
				(function (r) {
					t[r] === null
						? (ee.prototype[r] = function (i, n) {
								return this.slice(i, i + n)[r](0, n);
						  })
						: (ee.prototype[r] = function (i = 0) {
								return this.slice(i, i + t[r])[r](0);
						  });
				})(e);
		})();
		ee.prototype._isBufferList = function (e) {
			return e instanceof ee || ee.isBufferList(e);
		};
		ee.isBufferList = function (e) {
			return e != null && e[ad];
		};
		ld.exports = ee;
	});
	var fd = M((MR, In) => {
		'use strict';
		v();
		m();
		_();
		var jo = jt().Duplex,
			bm = od(),
			mi = ud();
		function Ee(t) {
			if (!(this instanceof Ee)) return new Ee(t);
			if (typeof t == 'function') {
				this._callback = t;
				let e = function (i) {
					this._callback && (this._callback(i), (this._callback = null));
				}.bind(this);
				this.on('pipe', function (i) {
					i.on('error', e);
				}),
					this.on('unpipe', function (i) {
						i.removeListener('error', e);
					}),
					(t = null);
			}
			mi._init.call(this, t), jo.call(this);
		}
		bm(Ee, jo);
		Object.assign(Ee.prototype, mi.prototype);
		Ee.prototype._new = function (e) {
			return new Ee(e);
		};
		Ee.prototype._write = function (e, r, i) {
			this._appendBuffer(e), typeof i == 'function' && i();
		};
		Ee.prototype._read = function (e) {
			if (!this.length) return this.push(null);
			(e = Math.min(e, this.length)), this.push(this.slice(0, e)), this.consume(e);
		};
		Ee.prototype.end = function (e) {
			jo.prototype.end.call(this, e),
				this._callback && (this._callback(null, this.slice()), (this._callback = null));
		};
		Ee.prototype._destroy = function (e, r) {
			(this._bufs.length = 0), (this.length = 0), r(e);
		};
		Ee.prototype._isBufferList = function (e) {
			return e instanceof Ee || e instanceof mi || Ee.isBufferList(e);
		};
		Ee.isBufferList = mi.isBufferList;
		In.exports = Ee;
		In.exports.BufferListStream = Ee;
		In.exports.BufferList = mi;
	});
	var hd = M((FR, cd) => {
		v();
		m();
		_();
		var Fo = class {
			constructor() {
				(this.cmd = null),
					(this.retain = !1),
					(this.qos = 0),
					(this.dup = !1),
					(this.length = -1),
					(this.topic = null),
					(this.payload = null);
			}
		};
		cd.exports = Fo;
	});
	var Wo = M((GR, dd) => {
		v();
		m();
		_();
		var L = dd.exports,
			{ Buffer: Oe } = (ye(), X(_e));
		L.types = {
			0: 'reserved',
			1: 'connect',
			2: 'connack',
			3: 'publish',
			4: 'puback',
			5: 'pubrec',
			6: 'pubrel',
			7: 'pubcomp',
			8: 'subscribe',
			9: 'suback',
			10: 'unsubscribe',
			11: 'unsuback',
			12: 'pingreq',
			13: 'pingresp',
			14: 'disconnect',
			15: 'auth',
		};
		L.requiredHeaderFlags = {
			1: 0,
			2: 0,
			4: 0,
			5: 0,
			6: 2,
			7: 0,
			8: 2,
			9: 0,
			10: 2,
			11: 0,
			12: 0,
			13: 0,
			14: 0,
			15: 0,
		};
		L.requiredHeaderFlagsErrors = {};
		for (let t in L.requiredHeaderFlags) {
			let e = L.requiredHeaderFlags[t];
			L.requiredHeaderFlagsErrors[t] =
				'Invalid header flag bits, must be 0x' +
				e.toString(16) +
				' for ' +
				L.types[t] +
				' packet';
		}
		L.codes = {};
		for (let t in L.types) {
			let e = L.types[t];
			L.codes[e] = t;
		}
		L.CMD_SHIFT = 4;
		L.CMD_MASK = 240;
		L.DUP_MASK = 8;
		L.QOS_MASK = 3;
		L.QOS_SHIFT = 1;
		L.RETAIN_MASK = 1;
		L.VARBYTEINT_MASK = 127;
		L.VARBYTEINT_FIN_MASK = 128;
		L.VARBYTEINT_MAX = 268435455;
		L.SESSIONPRESENT_MASK = 1;
		L.SESSIONPRESENT_HEADER = Oe.from([L.SESSIONPRESENT_MASK]);
		L.CONNACK_HEADER = Oe.from([L.codes.connack << L.CMD_SHIFT]);
		L.USERNAME_MASK = 128;
		L.PASSWORD_MASK = 64;
		L.WILL_RETAIN_MASK = 32;
		L.WILL_QOS_MASK = 24;
		L.WILL_QOS_SHIFT = 3;
		L.WILL_FLAG_MASK = 4;
		L.CLEAN_SESSION_MASK = 2;
		L.CONNECT_HEADER = Oe.from([L.codes.connect << L.CMD_SHIFT]);
		L.properties = {
			sessionExpiryInterval: 17,
			willDelayInterval: 24,
			receiveMaximum: 33,
			maximumPacketSize: 39,
			topicAliasMaximum: 34,
			requestResponseInformation: 25,
			requestProblemInformation: 23,
			userProperties: 38,
			authenticationMethod: 21,
			authenticationData: 22,
			payloadFormatIndicator: 1,
			messageExpiryInterval: 2,
			contentType: 3,
			responseTopic: 8,
			correlationData: 9,
			maximumQoS: 36,
			retainAvailable: 37,
			assignedClientIdentifier: 18,
			reasonString: 31,
			wildcardSubscriptionAvailable: 40,
			subscriptionIdentifiersAvailable: 41,
			sharedSubscriptionAvailable: 42,
			serverKeepAlive: 19,
			responseInformation: 26,
			serverReference: 28,
			topicAlias: 35,
			subscriptionIdentifier: 11,
		};
		L.propertiesCodes = {};
		for (let t in L.properties) {
			let e = L.properties[t];
			L.propertiesCodes[e] = t;
		}
		L.propertiesTypes = {
			sessionExpiryInterval: 'int32',
			willDelayInterval: 'int32',
			receiveMaximum: 'int16',
			maximumPacketSize: 'int32',
			topicAliasMaximum: 'int16',
			requestResponseInformation: 'byte',
			requestProblemInformation: 'byte',
			userProperties: 'pair',
			authenticationMethod: 'string',
			authenticationData: 'binary',
			payloadFormatIndicator: 'byte',
			messageExpiryInterval: 'int32',
			contentType: 'string',
			responseTopic: 'string',
			correlationData: 'binary',
			maximumQoS: 'int8',
			retainAvailable: 'byte',
			assignedClientIdentifier: 'string',
			reasonString: 'string',
			wildcardSubscriptionAvailable: 'byte',
			subscriptionIdentifiersAvailable: 'byte',
			sharedSubscriptionAvailable: 'byte',
			serverKeepAlive: 'int16',
			responseInformation: 'string',
			serverReference: 'string',
			topicAlias: 'int16',
			subscriptionIdentifier: 'var',
		};
		function Ft(t) {
			return [0, 1, 2].map((e) =>
				[0, 1].map((r) =>
					[0, 1].map((i) => {
						let n = Oe.alloc(1);
						return (
							n.writeUInt8(
								(L.codes[t] << L.CMD_SHIFT) |
									(r ? L.DUP_MASK : 0) |
									(e << L.QOS_SHIFT) |
									i,
								0,
								!0
							),
							n
						);
					})
				)
			);
		}
		L.PUBLISH_HEADER = Ft('publish');
		L.SUBSCRIBE_HEADER = Ft('subscribe');
		L.SUBSCRIBE_OPTIONS_QOS_MASK = 3;
		L.SUBSCRIBE_OPTIONS_NL_MASK = 1;
		L.SUBSCRIBE_OPTIONS_NL_SHIFT = 2;
		L.SUBSCRIBE_OPTIONS_RAP_MASK = 1;
		L.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3;
		L.SUBSCRIBE_OPTIONS_RH_MASK = 3;
		L.SUBSCRIBE_OPTIONS_RH_SHIFT = 4;
		L.SUBSCRIBE_OPTIONS_RH = [0, 16, 32];
		L.SUBSCRIBE_OPTIONS_NL = 4;
		L.SUBSCRIBE_OPTIONS_RAP = 8;
		L.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2];
		L.UNSUBSCRIBE_HEADER = Ft('unsubscribe');
		L.ACKS = {
			unsuback: Ft('unsuback'),
			puback: Ft('puback'),
			pubcomp: Ft('pubcomp'),
			pubrel: Ft('pubrel'),
			pubrec: Ft('pubrec'),
		};
		L.SUBACK_HEADER = Oe.from([L.codes.suback << L.CMD_SHIFT]);
		L.VERSION3 = Oe.from([3]);
		L.VERSION4 = Oe.from([4]);
		L.VERSION5 = Oe.from([5]);
		L.VERSION131 = Oe.from([131]);
		L.VERSION132 = Oe.from([132]);
		L.QOS = [0, 1, 2].map((t) => Oe.from([t]));
		L.EMPTY = {
			pingreq: Oe.from([L.codes.pingreq << 4, 0]),
			pingresp: Oe.from([L.codes.pingresp << 4, 0]),
			disconnect: Oe.from([L.codes.disconnect << 4, 0]),
		};
		L.MQTT5_PUBACK_PUBREC_CODES = {
			0: 'Success',
			16: 'No matching subscribers',
			128: 'Unspecified error',
			131: 'Implementation specific error',
			135: 'Not authorized',
			144: 'Topic Name invalid',
			145: 'Packet identifier in use',
			151: 'Quota exceeded',
			153: 'Payload format invalid',
		};
		L.MQTT5_PUBREL_PUBCOMP_CODES = { 0: 'Success', 146: 'Packet Identifier not found' };
		L.MQTT5_SUBACK_CODES = {
			0: 'Granted QoS 0',
			1: 'Granted QoS 1',
			2: 'Granted QoS 2',
			128: 'Unspecified error',
			131: 'Implementation specific error',
			135: 'Not authorized',
			143: 'Topic Filter invalid',
			145: 'Packet Identifier in use',
			151: 'Quota exceeded',
			158: 'Shared Subscriptions not supported',
			161: 'Subscription Identifiers not supported',
			162: 'Wildcard Subscriptions not supported',
		};
		L.MQTT5_UNSUBACK_CODES = {
			0: 'Success',
			17: 'No subscription existed',
			128: 'Unspecified error',
			131: 'Implementation specific error',
			135: 'Not authorized',
			143: 'Topic Filter invalid',
			145: 'Packet Identifier in use',
		};
		L.MQTT5_DISCONNECT_CODES = {
			0: 'Normal disconnection',
			4: 'Disconnect with Will Message',
			128: 'Unspecified error',
			129: 'Malformed Packet',
			130: 'Protocol Error',
			131: 'Implementation specific error',
			135: 'Not authorized',
			137: 'Server busy',
			139: 'Server shutting down',
			141: 'Keep Alive timeout',
			142: 'Session taken over',
			143: 'Topic Filter invalid',
			144: 'Topic Name invalid',
			147: 'Receive Maximum exceeded',
			148: 'Topic Alias invalid',
			149: 'Packet too large',
			150: 'Message rate too high',
			151: 'Quota exceeded',
			152: 'Administrative action',
			153: 'Payload format invalid',
			154: 'Retain not supported',
			155: 'QoS not supported',
			156: 'Use another server',
			157: 'Server moved',
			158: 'Shared Subscriptions not supported',
			159: 'Connection rate exceeded',
			160: 'Maximum connect time',
			161: 'Subscription Identifiers not supported',
			162: 'Wildcard Subscriptions not supported',
		};
		L.MQTT5_AUTH_CODES = { 0: 'Success', 24: 'Continue authentication', 25: 'Re-authenticate' };
	});
	var gd = M((tC, pd) => {
		v();
		m();
		_();
		var Vr = 1e3,
			zr = Vr * 60,
			Kr = zr * 60,
			gr = Kr * 24,
			wm = gr * 7,
			_m = gr * 365.25;
		pd.exports = function (t, e) {
			e = e || {};
			var r = typeof t;
			if (r === 'string' && t.length > 0) return mm(t);
			if (r === 'number' && isFinite(t)) return e.long ? Em(t) : vm(t);
			throw new Error(
				'val is not a non-empty string or a valid number. val=' + JSON.stringify(t)
			);
		};
		function mm(t) {
			if (((t = String(t)), !(t.length > 100))) {
				var e =
					/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
						t
					);
				if (e) {
					var r = parseFloat(e[1]),
						i = (e[2] || 'ms').toLowerCase();
					switch (i) {
						case 'years':
						case 'year':
						case 'yrs':
						case 'yr':
						case 'y':
							return r * _m;
						case 'weeks':
						case 'week':
						case 'w':
							return r * wm;
						case 'days':
						case 'day':
						case 'd':
							return r * gr;
						case 'hours':
						case 'hour':
						case 'hrs':
						case 'hr':
						case 'h':
							return r * Kr;
						case 'minutes':
						case 'minute':
						case 'mins':
						case 'min':
						case 'm':
							return r * zr;
						case 'seconds':
						case 'second':
						case 'secs':
						case 'sec':
						case 's':
							return r * Vr;
						case 'milliseconds':
						case 'millisecond':
						case 'msecs':
						case 'msec':
						case 'ms':
							return r;
						default:
							return;
					}
				}
			}
		}
		function vm(t) {
			var e = Math.abs(t);
			return e >= gr
				? Math.round(t / gr) + 'd'
				: e >= Kr
				? Math.round(t / Kr) + 'h'
				: e >= zr
				? Math.round(t / zr) + 'm'
				: e >= Vr
				? Math.round(t / Vr) + 's'
				: t + 'ms';
		}
		function Em(t) {
			var e = Math.abs(t);
			return e >= gr
				? Tn(t, e, gr, 'day')
				: e >= Kr
				? Tn(t, e, Kr, 'hour')
				: e >= zr
				? Tn(t, e, zr, 'minute')
				: e >= Vr
				? Tn(t, e, Vr, 'second')
				: t + ' ms';
		}
		function Tn(t, e, r, i) {
			var n = e >= r * 1.5;
			return Math.round(t / r) + ' ' + i + (n ? 's' : '');
		}
	});
	var bd = M((lC, yd) => {
		v();
		m();
		_();
		function Sm(t) {
			(r.debug = r),
				(r.default = r),
				(r.coerce = u),
				(r.disable = o),
				(r.enable = n),
				(r.enabled = s),
				(r.humanize = gd()),
				(r.destroy = c),
				Object.keys(t).forEach((h) => {
					r[h] = t[h];
				}),
				(r.names = []),
				(r.skips = []),
				(r.formatters = {});
			function e(h) {
				let d = 0;
				for (let g = 0; g < h.length; g++) (d = (d << 5) - d + h.charCodeAt(g)), (d |= 0);
				return r.colors[Math.abs(d) % r.colors.length];
			}
			r.selectColor = e;
			function r(h) {
				let d,
					g = null,
					y,
					w;
				function E(...S) {
					if (!E.enabled) return;
					let I = E,
						C = Number(new Date()),
						R = C - (d || C);
					(I.diff = R),
						(I.prev = d),
						(I.curr = C),
						(d = C),
						(S[0] = r.coerce(S[0])),
						typeof S[0] != 'string' && S.unshift('%O');
					let U = 0;
					(S[0] = S[0].replace(/%([a-zA-Z%])/g, (W, K) => {
						if (W === '%%') return '%';
						U++;
						let z = r.formatters[K];
						if (typeof z == 'function') {
							let Q = S[U];
							(W = z.call(I, Q)), S.splice(U, 1), U--;
						}
						return W;
					})),
						r.formatArgs.call(I, S),
						(I.log || r.log).apply(I, S);
				}
				return (
					(E.namespace = h),
					(E.useColors = r.useColors()),
					(E.color = r.selectColor(h)),
					(E.extend = i),
					(E.destroy = r.destroy),
					Object.defineProperty(E, 'enabled', {
						enumerable: !0,
						configurable: !1,
						get: () =>
							g !== null
								? g
								: (y !== r.namespaces && ((y = r.namespaces), (w = r.enabled(h))),
								  w),
						set: (S) => {
							g = S;
						},
					}),
					typeof r.init == 'function' && r.init(E),
					E
				);
			}
			function i(h, d) {
				let g = r(this.namespace + (typeof d > 'u' ? ':' : d) + h);
				return (g.log = this.log), g;
			}
			function n(h) {
				r.save(h), (r.namespaces = h), (r.names = []), (r.skips = []);
				let d,
					g = (typeof h == 'string' ? h : '').split(/[\s,]+/),
					y = g.length;
				for (d = 0; d < y; d++)
					g[d] &&
						((h = g[d].replace(/\*/g, '.*?')),
						h[0] === '-'
							? r.skips.push(new RegExp('^' + h.slice(1) + '$'))
							: r.names.push(new RegExp('^' + h + '$')));
			}
			function o() {
				let h = [...r.names.map(a), ...r.skips.map(a).map((d) => '-' + d)].join(',');
				return r.enable(''), h;
			}
			function s(h) {
				if (h[h.length - 1] === '*') return !0;
				let d, g;
				for (d = 0, g = r.skips.length; d < g; d++) if (r.skips[d].test(h)) return !1;
				for (d = 0, g = r.names.length; d < g; d++) if (r.names[d].test(h)) return !0;
				return !1;
			}
			function a(h) {
				return h
					.toString()
					.substring(2, h.toString().length - 2)
					.replace(/\.\*\?$/, '*');
			}
			function u(h) {
				return h instanceof Error ? h.stack || h.message : h;
			}
			function c() {
				console.warn(
					'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
				);
			}
			return r.enable(r.load()), r;
		}
		yd.exports = Sm;
	});
	var ot = M((xe, Rn) => {
		v();
		m();
		_();
		xe.formatArgs = Im;
		xe.save = Tm;
		xe.load = Rm;
		xe.useColors = Am;
		xe.storage = Cm();
		xe.destroy = (() => {
			let t = !1;
			return () => {
				t ||
					((t = !0),
					console.warn(
						'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
					));
			};
		})();
		xe.colors = [
			'#0000CC',
			'#0000FF',
			'#0033CC',
			'#0033FF',
			'#0066CC',
			'#0066FF',
			'#0099CC',
			'#0099FF',
			'#00CC00',
			'#00CC33',
			'#00CC66',
			'#00CC99',
			'#00CCCC',
			'#00CCFF',
			'#3300CC',
			'#3300FF',
			'#3333CC',
			'#3333FF',
			'#3366CC',
			'#3366FF',
			'#3399CC',
			'#3399FF',
			'#33CC00',
			'#33CC33',
			'#33CC66',
			'#33CC99',
			'#33CCCC',
			'#33CCFF',
			'#6600CC',
			'#6600FF',
			'#6633CC',
			'#6633FF',
			'#66CC00',
			'#66CC33',
			'#9900CC',
			'#9900FF',
			'#9933CC',
			'#9933FF',
			'#99CC00',
			'#99CC33',
			'#CC0000',
			'#CC0033',
			'#CC0066',
			'#CC0099',
			'#CC00CC',
			'#CC00FF',
			'#CC3300',
			'#CC3333',
			'#CC3366',
			'#CC3399',
			'#CC33CC',
			'#CC33FF',
			'#CC6600',
			'#CC6633',
			'#CC9900',
			'#CC9933',
			'#CCCC00',
			'#CCCC33',
			'#FF0000',
			'#FF0033',
			'#FF0066',
			'#FF0099',
			'#FF00CC',
			'#FF00FF',
			'#FF3300',
			'#FF3333',
			'#FF3366',
			'#FF3399',
			'#FF33CC',
			'#FF33FF',
			'#FF6600',
			'#FF6633',
			'#FF9900',
			'#FF9933',
			'#FFCC00',
			'#FFCC33',
		];
		function Am() {
			return typeof window < 'u' &&
				window.process &&
				(window.process.type === 'renderer' || window.process.__nwjs)
				? !0
				: typeof P < 'u' &&
				  P.userAgent &&
				  P.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
				? !1
				: (typeof document < 'u' &&
						document.documentElement &&
						document.documentElement.style &&
						document.documentElement.style.WebkitAppearance) ||
				  (typeof window < 'u' &&
						window.console &&
						(window.console.firebug ||
							(window.console.exception && window.console.table))) ||
				  (typeof P < 'u' &&
						P.userAgent &&
						P.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
						parseInt(RegExp.$1, 10) >= 31) ||
				  (typeof P < 'u' &&
						P.userAgent &&
						P.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
		}
		function Im(t) {
			if (
				((t[0] =
					(this.useColors ? '%c' : '') +
					this.namespace +
					(this.useColors ? ' %c' : ' ') +
					t[0] +
					(this.useColors ? '%c ' : ' ') +
					'+' +
					Rn.exports.humanize(this.diff)),
				!this.useColors)
			)
				return;
			let e = 'color: ' + this.color;
			t.splice(1, 0, e, 'color: inherit');
			let r = 0,
				i = 0;
			t[0].replace(/%[a-zA-Z%]/g, (n) => {
				n !== '%%' && (r++, n === '%c' && (i = r));
			}),
				t.splice(i, 0, e);
		}
		xe.log = console.debug || console.log || (() => {});
		function Tm(t) {
			try {
				t ? xe.storage.setItem('debug', t) : xe.storage.removeItem('debug');
			} catch {}
		}
		function Rm() {
			let t;
			try {
				t = xe.storage.getItem('debug');
			} catch {}
			return !t && typeof B < 'u' && 'env' in B && (t = B.env.DEBUG), t;
		}
		function Cm() {
			try {
				return localStorage;
			} catch {}
		}
		Rn.exports = bd()(xe);
		var { formatters: Bm } = Rn.exports;
		Bm.j = function (t) {
			try {
				return JSON.stringify(t);
			} catch (e) {
				return '[UnexpectedJSONParseError]: ' + e.message;
			}
		};
	});
	var md = M((vC, _d) => {
		v();
		m();
		_();
		var Pm = fd(),
			{ EventEmitter: Om } = (ir(), X(rr)),
			wd = hd(),
			V = Wo(),
			D = ot()('mqtt-packet:parser'),
			$o = class t extends Om {
				constructor() {
					super(), (this.parser = this.constructor.parser);
				}
				static parser(e) {
					return this instanceof t
						? ((this.settings = e || {}),
						  (this._states = [
								'_parseHeader',
								'_parseLength',
								'_parsePayload',
								'_newPacket',
						  ]),
						  this._resetState(),
						  this)
						: new t().parser(e);
				}
				_resetState() {
					D('_resetState: resetting packet, error, _list, and _stateCounter'),
						(this.packet = new wd()),
						(this.error = null),
						(this._list = Pm()),
						(this._stateCounter = 0);
				}
				parse(e) {
					for (
						this.error && this._resetState(),
							this._list.append(e),
							D('parse: current state: %s', this._states[this._stateCounter]);
						(this.packet.length !== -1 || this._list.length > 0) &&
						this[this._states[this._stateCounter]]() &&
						!this.error;

					)
						this._stateCounter++,
							D(
								'parse: state complete. _stateCounter is now: %d',
								this._stateCounter
							),
							D(
								'parse: packet.length: %d, buffer list length: %d',
								this.packet.length,
								this._list.length
							),
							this._stateCounter >= this._states.length && (this._stateCounter = 0);
					return (
						D(
							'parse: exited while loop. packet: %d, buffer list length: %d',
							this.packet.length,
							this._list.length
						),
						this._list.length
					);
				}
				_parseHeader() {
					let e = this._list.readUInt8(0),
						r = e >> V.CMD_SHIFT;
					this.packet.cmd = V.types[r];
					let i = e & 15,
						n = V.requiredHeaderFlags[r];
					return n != null && i !== n
						? this._emitError(new Error(V.requiredHeaderFlagsErrors[r]))
						: ((this.packet.retain = (e & V.RETAIN_MASK) !== 0),
						  (this.packet.qos = (e >> V.QOS_SHIFT) & V.QOS_MASK),
						  this.packet.qos > 2
								? this._emitError(
										new Error('Packet must not have both QoS bits set to 1')
								  )
								: ((this.packet.dup = (e & V.DUP_MASK) !== 0),
								  D('_parseHeader: packet: %o', this.packet),
								  this._list.consume(1),
								  !0));
				}
				_parseLength() {
					let e = this._parseVarByteNum(!0);
					return (
						e && ((this.packet.length = e.value), this._list.consume(e.bytes)),
						D('_parseLength %d', e.value),
						!!e
					);
				}
				_parsePayload() {
					D('_parsePayload: payload %O', this._list);
					let e = !1;
					if (this.packet.length === 0 || this._list.length >= this.packet.length) {
						switch (((this._pos = 0), this.packet.cmd)) {
							case 'connect':
								this._parseConnect();
								break;
							case 'connack':
								this._parseConnack();
								break;
							case 'publish':
								this._parsePublish();
								break;
							case 'puback':
							case 'pubrec':
							case 'pubrel':
							case 'pubcomp':
								this._parseConfirmation();
								break;
							case 'subscribe':
								this._parseSubscribe();
								break;
							case 'suback':
								this._parseSuback();
								break;
							case 'unsubscribe':
								this._parseUnsubscribe();
								break;
							case 'unsuback':
								this._parseUnsuback();
								break;
							case 'pingreq':
							case 'pingresp':
								break;
							case 'disconnect':
								this._parseDisconnect();
								break;
							case 'auth':
								this._parseAuth();
								break;
							default:
								this._emitError(new Error('Not supported'));
						}
						e = !0;
					}
					return D('_parsePayload complete result: %s', e), e;
				}
				_parseConnect() {
					D('_parseConnect');
					let e,
						r,
						i,
						n,
						o = {},
						s = this.packet,
						a = this._parseString();
					if (a === null) return this._emitError(new Error('Cannot parse protocolId'));
					if (a !== 'MQTT' && a !== 'MQIsdp')
						return this._emitError(new Error('Invalid protocolId'));
					if (((s.protocolId = a), this._pos >= this._list.length))
						return this._emitError(new Error('Packet too short'));
					if (
						((s.protocolVersion = this._list.readUInt8(this._pos)),
						s.protocolVersion >= 128 &&
							((s.bridgeMode = !0), (s.protocolVersion = s.protocolVersion - 128)),
						s.protocolVersion !== 3 &&
							s.protocolVersion !== 4 &&
							s.protocolVersion !== 5)
					)
						return this._emitError(new Error('Invalid protocol version'));
					if ((this._pos++, this._pos >= this._list.length))
						return this._emitError(new Error('Packet too short'));
					if (this._list.readUInt8(this._pos) & 1)
						return this._emitError(
							new Error('Connect flag bit 0 must be 0, but got 1')
						);
					(o.username = this._list.readUInt8(this._pos) & V.USERNAME_MASK),
						(o.password = this._list.readUInt8(this._pos) & V.PASSWORD_MASK),
						(o.will = this._list.readUInt8(this._pos) & V.WILL_FLAG_MASK);
					let u = !!(this._list.readUInt8(this._pos) & V.WILL_RETAIN_MASK),
						c = (this._list.readUInt8(this._pos) & V.WILL_QOS_MASK) >> V.WILL_QOS_SHIFT;
					if (o.will) (s.will = {}), (s.will.retain = u), (s.will.qos = c);
					else {
						if (u)
							return this._emitError(
								new Error(
									'Will Retain Flag must be set to zero when Will Flag is set to 0'
								)
							);
						if (c)
							return this._emitError(
								new Error('Will QoS must be set to zero when Will Flag is set to 0')
							);
					}
					if (
						((s.clean = (this._list.readUInt8(this._pos) & V.CLEAN_SESSION_MASK) !== 0),
						this._pos++,
						(s.keepalive = this._parseNum()),
						s.keepalive === -1)
					)
						return this._emitError(new Error('Packet too short'));
					if (s.protocolVersion === 5) {
						let d = this._parseProperties();
						Object.getOwnPropertyNames(d).length && (s.properties = d);
					}
					let h = this._parseString();
					if (h === null) return this._emitError(new Error('Packet too short'));
					if (
						((s.clientId = h),
						D('_parseConnect: packet.clientId: %s', s.clientId),
						o.will)
					) {
						if (s.protocolVersion === 5) {
							let d = this._parseProperties();
							Object.getOwnPropertyNames(d).length && (s.will.properties = d);
						}
						if (((e = this._parseString()), e === null))
							return this._emitError(new Error('Cannot parse will topic'));
						if (
							((s.will.topic = e),
							D('_parseConnect: packet.will.topic: %s', s.will.topic),
							(r = this._parseBuffer()),
							r === null)
						)
							return this._emitError(new Error('Cannot parse will payload'));
						(s.will.payload = r),
							D('_parseConnect: packet.will.paylaod: %s', s.will.payload);
					}
					if (o.username) {
						if (((n = this._parseString()), n === null))
							return this._emitError(new Error('Cannot parse username'));
						(s.username = n), D('_parseConnect: packet.username: %s', s.username);
					}
					if (o.password) {
						if (((i = this._parseBuffer()), i === null))
							return this._emitError(new Error('Cannot parse password'));
						s.password = i;
					}
					return (this.settings = s), D('_parseConnect: complete'), s;
				}
				_parseConnack() {
					D('_parseConnack');
					let e = this.packet;
					if (this._list.length < 1) return null;
					let r = this._list.readUInt8(this._pos++);
					if (r > 1)
						return this._emitError(
							new Error('Invalid connack flags, bits 7-1 must be set to 0')
						);
					if (
						((e.sessionPresent = !!(r & V.SESSIONPRESENT_MASK)),
						this.settings.protocolVersion === 5)
					)
						this._list.length >= 2
							? (e.reasonCode = this._list.readUInt8(this._pos++))
							: (e.reasonCode = 0);
					else {
						if (this._list.length < 2) return null;
						e.returnCode = this._list.readUInt8(this._pos++);
					}
					if (e.returnCode === -1 || e.reasonCode === -1)
						return this._emitError(new Error('Cannot parse return code'));
					if (this.settings.protocolVersion === 5) {
						let i = this._parseProperties();
						Object.getOwnPropertyNames(i).length && (e.properties = i);
					}
					D('_parseConnack: complete');
				}
				_parsePublish() {
					D('_parsePublish');
					let e = this.packet;
					if (((e.topic = this._parseString()), e.topic === null))
						return this._emitError(new Error('Cannot parse topic'));
					if (!(e.qos > 0 && !this._parseMessageId())) {
						if (this.settings.protocolVersion === 5) {
							let r = this._parseProperties();
							Object.getOwnPropertyNames(r).length && (e.properties = r);
						}
						(e.payload = this._list.slice(this._pos, e.length)),
							D('_parsePublish: payload from buffer list: %o', e.payload);
					}
				}
				_parseSubscribe() {
					D('_parseSubscribe');
					let e = this.packet,
						r,
						i,
						n,
						o,
						s,
						a,
						u;
					if (((e.subscriptions = []), !!this._parseMessageId())) {
						if (this.settings.protocolVersion === 5) {
							let c = this._parseProperties();
							Object.getOwnPropertyNames(c).length && (e.properties = c);
						}
						if (e.length <= 0)
							return this._emitError(
								new Error('Malformed subscribe, no payload specified')
							);
						for (; this._pos < e.length; ) {
							if (((r = this._parseString()), r === null))
								return this._emitError(new Error('Cannot parse topic'));
							if (this._pos >= e.length)
								return this._emitError(new Error('Malformed Subscribe Payload'));
							if (((i = this._parseByte()), this.settings.protocolVersion === 5)) {
								if (i & 192)
									return this._emitError(
										new Error(
											'Invalid subscribe topic flag bits, bits 7-6 must be 0'
										)
									);
							} else if (i & 252)
								return this._emitError(
									new Error(
										'Invalid subscribe topic flag bits, bits 7-2 must be 0'
									)
								);
							if (((n = i & V.SUBSCRIBE_OPTIONS_QOS_MASK), n > 2))
								return this._emitError(
									new Error('Invalid subscribe QoS, must be <= 2')
								);
							if (
								((a =
									((i >> V.SUBSCRIBE_OPTIONS_NL_SHIFT) &
										V.SUBSCRIBE_OPTIONS_NL_MASK) !==
									0),
								(s =
									((i >> V.SUBSCRIBE_OPTIONS_RAP_SHIFT) &
										V.SUBSCRIBE_OPTIONS_RAP_MASK) !==
									0),
								(o =
									(i >> V.SUBSCRIBE_OPTIONS_RH_SHIFT) &
									V.SUBSCRIBE_OPTIONS_RH_MASK),
								o > 2)
							)
								return this._emitError(
									new Error('Invalid retain handling, must be <= 2')
								);
							(u = { topic: r, qos: n }),
								this.settings.protocolVersion === 5
									? ((u.nl = a), (u.rap = s), (u.rh = o))
									: this.settings.bridgeMode &&
									  ((u.rh = 0), (u.rap = !0), (u.nl = !0)),
								D('_parseSubscribe: push subscription `%s` to subscription', u),
								e.subscriptions.push(u);
						}
					}
				}
				_parseSuback() {
					D('_parseSuback');
					let e = this.packet;
					if (((this.packet.granted = []), !!this._parseMessageId())) {
						if (this.settings.protocolVersion === 5) {
							let r = this._parseProperties();
							Object.getOwnPropertyNames(r).length && (e.properties = r);
						}
						if (e.length <= 0)
							return this._emitError(
								new Error('Malformed suback, no payload specified')
							);
						for (; this._pos < this.packet.length; ) {
							let r = this._list.readUInt8(this._pos++);
							if (this.settings.protocolVersion === 5) {
								if (!V.MQTT5_SUBACK_CODES[r])
									return this._emitError(new Error('Invalid suback code'));
							} else if (r > 2 && r !== 128)
								return this._emitError(
									new Error('Invalid suback QoS, must be 0, 1, 2 or 128')
								);
							this.packet.granted.push(r);
						}
					}
				}
				_parseUnsubscribe() {
					D('_parseUnsubscribe');
					let e = this.packet;
					if (((e.unsubscriptions = []), !!this._parseMessageId())) {
						if (this.settings.protocolVersion === 5) {
							let r = this._parseProperties();
							Object.getOwnPropertyNames(r).length && (e.properties = r);
						}
						if (e.length <= 0)
							return this._emitError(
								new Error('Malformed unsubscribe, no payload specified')
							);
						for (; this._pos < e.length; ) {
							let r = this._parseString();
							if (r === null) return this._emitError(new Error('Cannot parse topic'));
							D('_parseUnsubscribe: push topic `%s` to unsubscriptions', r),
								e.unsubscriptions.push(r);
						}
					}
				}
				_parseUnsuback() {
					D('_parseUnsuback');
					let e = this.packet;
					if (!this._parseMessageId())
						return this._emitError(new Error('Cannot parse messageId'));
					if (
						(this.settings.protocolVersion === 3 ||
							this.settings.protocolVersion === 4) &&
						e.length !== 2
					)
						return this._emitError(
							new Error('Malformed unsuback, payload length must be 2')
						);
					if (e.length <= 0)
						return this._emitError(
							new Error('Malformed unsuback, no payload specified')
						);
					if (this.settings.protocolVersion === 5) {
						let r = this._parseProperties();
						for (
							Object.getOwnPropertyNames(r).length && (e.properties = r),
								e.granted = [];
							this._pos < this.packet.length;

						) {
							let i = this._list.readUInt8(this._pos++);
							if (!V.MQTT5_UNSUBACK_CODES[i])
								return this._emitError(new Error('Invalid unsuback code'));
							this.packet.granted.push(i);
						}
					}
				}
				_parseConfirmation() {
					D('_parseConfirmation: packet.cmd: `%s`', this.packet.cmd);
					let e = this.packet;
					if ((this._parseMessageId(), this.settings.protocolVersion === 5)) {
						if (e.length > 2) {
							switch (((e.reasonCode = this._parseByte()), this.packet.cmd)) {
								case 'puback':
								case 'pubrec':
									if (!V.MQTT5_PUBACK_PUBREC_CODES[e.reasonCode])
										return this._emitError(
											new Error('Invalid ' + this.packet.cmd + ' reason code')
										);
									break;
								case 'pubrel':
								case 'pubcomp':
									if (!V.MQTT5_PUBREL_PUBCOMP_CODES[e.reasonCode])
										return this._emitError(
											new Error('Invalid ' + this.packet.cmd + ' reason code')
										);
									break;
							}
							D('_parseConfirmation: packet.reasonCode `%d`', e.reasonCode);
						} else e.reasonCode = 0;
						if (e.length > 3) {
							let r = this._parseProperties();
							Object.getOwnPropertyNames(r).length && (e.properties = r);
						}
					}
					return !0;
				}
				_parseDisconnect() {
					let e = this.packet;
					if ((D('_parseDisconnect'), this.settings.protocolVersion === 5)) {
						this._list.length > 0
							? ((e.reasonCode = this._parseByte()),
							  V.MQTT5_DISCONNECT_CODES[e.reasonCode] ||
									this._emitError(new Error('Invalid disconnect reason code')))
							: (e.reasonCode = 0);
						let r = this._parseProperties();
						Object.getOwnPropertyNames(r).length && (e.properties = r);
					}
					return D('_parseDisconnect result: true'), !0;
				}
				_parseAuth() {
					D('_parseAuth');
					let e = this.packet;
					if (this.settings.protocolVersion !== 5)
						return this._emitError(
							new Error('Not supported auth packet for this version MQTT')
						);
					if (((e.reasonCode = this._parseByte()), !V.MQTT5_AUTH_CODES[e.reasonCode]))
						return this._emitError(new Error('Invalid auth reason code'));
					let r = this._parseProperties();
					return (
						Object.getOwnPropertyNames(r).length && (e.properties = r),
						D('_parseAuth: result: true'),
						!0
					);
				}
				_parseMessageId() {
					let e = this.packet;
					return (
						(e.messageId = this._parseNum()),
						e.messageId === null
							? (this._emitError(new Error('Cannot parse messageId')), !1)
							: (D('_parseMessageId: packet.messageId %d', e.messageId), !0)
					);
				}
				_parseString(e) {
					let r = this._parseNum(),
						i = r + this._pos;
					if (r === -1 || i > this._list.length || i > this.packet.length) return null;
					let n = this._list.toString('utf8', this._pos, i);
					return (this._pos += r), D('_parseString: result: %s', n), n;
				}
				_parseStringPair() {
					return (
						D('_parseStringPair'),
						{ name: this._parseString(), value: this._parseString() }
					);
				}
				_parseBuffer() {
					let e = this._parseNum(),
						r = e + this._pos;
					if (e === -1 || r > this._list.length || r > this.packet.length) return null;
					let i = this._list.slice(this._pos, r);
					return (this._pos += e), D('_parseBuffer: result: %o', i), i;
				}
				_parseNum() {
					if (this._list.length - this._pos < 2) return -1;
					let e = this._list.readUInt16BE(this._pos);
					return (this._pos += 2), D('_parseNum: result: %s', e), e;
				}
				_parse4ByteNum() {
					if (this._list.length - this._pos < 4) return -1;
					let e = this._list.readUInt32BE(this._pos);
					return (this._pos += 4), D('_parse4ByteNum: result: %s', e), e;
				}
				_parseVarByteNum(e) {
					D('_parseVarByteNum');
					let r = 4,
						i = 0,
						n = 1,
						o = 0,
						s = !1,
						a,
						u = this._pos ? this._pos : 0;
					for (; i < r && u + i < this._list.length; ) {
						if (
							((a = this._list.readUInt8(u + i++)),
							(o += n * (a & V.VARBYTEINT_MASK)),
							(n *= 128),
							!(a & V.VARBYTEINT_FIN_MASK))
						) {
							s = !0;
							break;
						}
						if (this._list.length <= i) break;
					}
					return (
						!s &&
							i === r &&
							this._list.length >= i &&
							this._emitError(new Error('Invalid variable byte integer')),
						u && (this._pos += i),
						s ? (e ? (s = { bytes: i, value: o }) : (s = o)) : (s = !1),
						D('_parseVarByteNum: result: %o', s),
						s
					);
				}
				_parseByte() {
					let e;
					return (
						this._pos < this._list.length &&
							((e = this._list.readUInt8(this._pos)), this._pos++),
						D('_parseByte: result: %o', e),
						e
					);
				}
				_parseByType(e) {
					switch ((D('_parseByType: type: %s', e), e)) {
						case 'byte':
							return this._parseByte() !== 0;
						case 'int8':
							return this._parseByte();
						case 'int16':
							return this._parseNum();
						case 'int32':
							return this._parse4ByteNum();
						case 'var':
							return this._parseVarByteNum();
						case 'string':
							return this._parseString();
						case 'pair':
							return this._parseStringPair();
						case 'binary':
							return this._parseBuffer();
					}
				}
				_parseProperties() {
					D('_parseProperties');
					let e = this._parseVarByteNum(),
						i = this._pos + e,
						n = {};
					for (; this._pos < i; ) {
						let o = this._parseByte();
						if (!o)
							return (
								this._emitError(new Error('Cannot parse property code type')), !1
							);
						let s = V.propertiesCodes[o];
						if (!s) return this._emitError(new Error('Unknown property')), !1;
						if (s === 'userProperties') {
							n[s] || (n[s] = Object.create(null));
							let a = this._parseByType(V.propertiesTypes[s]);
							if (n[s][a.name])
								if (Array.isArray(n[s][a.name])) n[s][a.name].push(a.value);
								else {
									let u = n[s][a.name];
									(n[s][a.name] = [u]), n[s][a.name].push(a.value);
								}
							else n[s][a.name] = a.value;
							continue;
						}
						n[s]
							? Array.isArray(n[s])
								? n[s].push(this._parseByType(V.propertiesTypes[s]))
								: ((n[s] = [n[s]]),
								  n[s].push(this._parseByType(V.propertiesTypes[s])))
							: (n[s] = this._parseByType(V.propertiesTypes[s]));
					}
					return n;
				}
				_newPacket() {
					return (
						D('_newPacket'),
						this.packet &&
							(this._list.consume(this.packet.length),
							D(
								'_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d',
								this.packet.cmd,
								this.packet.payload,
								this.packet.length
							),
							this.emit('packet', this.packet)),
						D('_newPacket: new packet'),
						(this.packet = new wd()),
						(this._pos = 0),
						!0
					);
				}
				_emitError(e) {
					D('_emitError', e), (this.error = e), this.emit('error', e);
				}
			};
		_d.exports = $o;
	});
	var Ad = M((CC, Sd) => {
		v();
		m();
		_();
		var { Buffer: vi } = (ye(), X(_e)),
			km = 65536,
			vd = {},
			xm = vi.isBuffer(vi.from([1, 2]).subarray(0, 1));
		function Ed(t) {
			let e = vi.allocUnsafe(2);
			return e.writeUInt8(t >> 8, 0), e.writeUInt8(t & 255, 0 + 1), e;
		}
		function Mm() {
			for (let t = 0; t < km; t++) vd[t] = Ed(t);
		}
		function Lm(t) {
			let r = 0,
				i = 0,
				n = vi.allocUnsafe(4);
			do (r = t % 128 | 0), (t = (t / 128) | 0), t > 0 && (r = r | 128), n.writeUInt8(r, i++);
			while (t > 0 && i < 4);
			return t > 0 && (i = 0), xm ? n.subarray(0, i) : n.slice(0, i);
		}
		function Um(t) {
			let e = vi.allocUnsafe(4);
			return e.writeUInt32BE(t, 0), e;
		}
		Sd.exports = {
			cache: vd,
			generateCache: Mm,
			generateNumber: Ed,
			genBufVariableByteInt: Lm,
			generate4ByteBuffer: Um,
		};
	});
	var Id = M((LC, Ho) => {
		'use strict';
		v();
		m();
		_();
		typeof B > 'u' ||
		!B.version ||
		B.version.indexOf('v0.') === 0 ||
		(B.version.indexOf('v1.') === 0 && B.version.indexOf('v1.8.') !== 0)
			? (Ho.exports = { nextTick: Nm })
			: (Ho.exports = B);
		function Nm(t, e, r, i) {
			if (typeof t != 'function')
				throw new TypeError('"callback" argument must be a function');
			var n = arguments.length,
				o,
				s;
			switch (n) {
				case 0:
				case 1:
					return B.nextTick(t);
				case 2:
					return B.nextTick(function () {
						t.call(null, e);
					});
				case 3:
					return B.nextTick(function () {
						t.call(null, e, r);
					});
				case 4:
					return B.nextTick(function () {
						t.call(null, e, r, i);
					});
				default:
					for (o = new Array(n - 1), s = 0; s < o.length; ) o[s++] = arguments[s];
					return B.nextTick(function () {
						t.apply(null, o);
					});
			}
		}
	});
	var Ko = M((WC, xd) => {
		v();
		m();
		_();
		var j = Wo(),
			{ Buffer: q } = (ye(), X(_e)),
			qm = q.allocUnsafe(0),
			Dm = q.from([0]),
			Ei = Ad(),
			jm = Id().nextTick,
			qe = ot()('mqtt-packet:writeToStream'),
			Cn = Ei.cache,
			Fm = Ei.generateNumber,
			Wm = Ei.generateCache,
			Vo = Ei.genBufVariableByteInt,
			$m = Ei.generate4ByteBuffer,
			Ie = zo,
			Bn = !0;
		function Od(t, e, r) {
			switch (
				(qe('generate called'),
				e.cork && (e.cork(), jm(Hm, e)),
				Bn && ((Bn = !1), Wm()),
				qe('generate: packet.cmd: %s', t.cmd),
				t.cmd)
			) {
				case 'connect':
					return Vm(t, e, r);
				case 'connack':
					return zm(t, e, r);
				case 'publish':
					return Km(t, e, r);
				case 'puback':
				case 'pubrec':
				case 'pubrel':
				case 'pubcomp':
					return Gm(t, e, r);
				case 'subscribe':
					return Qm(t, e, r);
				case 'suback':
					return Ym(t, e, r);
				case 'unsubscribe':
					return Jm(t, e, r);
				case 'unsuback':
					return Xm(t, e, r);
				case 'pingreq':
				case 'pingresp':
					return Zm(t, e, r);
				case 'disconnect':
					return e1(t, e, r);
				case 'auth':
					return t1(t, e, r);
				default:
					return e.destroy(new Error('Unknown command')), !1;
			}
		}
		Object.defineProperty(Od, 'cacheNumbers', {
			get() {
				return Ie === zo;
			},
			set(t) {
				t
					? ((!Cn || Object.keys(Cn).length === 0) && (Bn = !0), (Ie = zo))
					: ((Bn = !1), (Ie = r1));
			},
		});
		function Hm(t) {
			t.uncork();
		}
		function Vm(t, e, r) {
			let i = t || {},
				n = i.protocolId || 'MQTT',
				o = i.protocolVersion || 4,
				s = i.will,
				a = i.clean,
				u = i.keepalive || 0,
				c = i.clientId || '',
				h = i.username,
				d = i.password,
				g = i.properties;
			a === void 0 && (a = !0);
			let y = 0;
			if (!n || (typeof n != 'string' && !q.isBuffer(n)))
				return e.destroy(new Error('Invalid protocolId')), !1;
			if (((y += n.length + 2), o !== 3 && o !== 4 && o !== 5))
				return e.destroy(new Error('Invalid protocol version')), !1;
			if (((y += 1), (typeof c == 'string' || q.isBuffer(c)) && (c || o >= 4) && (c || a)))
				y += q.byteLength(c) + 2;
			else {
				if (o < 4)
					return e.destroy(new Error('clientId must be supplied before 3.1.1')), !1;
				if (a * 1 === 0)
					return (
						e.destroy(new Error('clientId must be given if cleanSession set to 0')), !1
					);
			}
			if (typeof u != 'number' || u < 0 || u > 65535 || u % 1 !== 0)
				return e.destroy(new Error('Invalid keepalive')), !1;
			(y += 2), (y += 1);
			let w, E;
			if (o === 5) {
				if (((w = Wt(e, g)), !w)) return !1;
				y += w.length;
			}
			if (s) {
				if (typeof s != 'object') return e.destroy(new Error('Invalid will')), !1;
				if (!s.topic || typeof s.topic != 'string')
					return e.destroy(new Error('Invalid will topic')), !1;
				if (((y += q.byteLength(s.topic) + 2), (y += 2), s.payload))
					if (s.payload.length >= 0)
						typeof s.payload == 'string'
							? (y += q.byteLength(s.payload))
							: (y += s.payload.length);
					else return e.destroy(new Error('Invalid will payload')), !1;
				if (((E = {}), o === 5)) {
					if (((E = Wt(e, s.properties)), !E)) return !1;
					y += E.length;
				}
			}
			let S = !1;
			if (h != null)
				if (Pd(h)) (S = !0), (y += q.byteLength(h) + 2);
				else return e.destroy(new Error('Invalid username')), !1;
			if (d != null) {
				if (!S) return e.destroy(new Error('Username is required to use password')), !1;
				if (Pd(d)) y += kd(d) + 2;
				else return e.destroy(new Error('Invalid password')), !1;
			}
			e.write(j.CONNECT_HEADER),
				De(e, y),
				Gr(e, n),
				i.bridgeMode && (o += 128),
				e.write(
					o === 131
						? j.VERSION131
						: o === 132
						? j.VERSION132
						: o === 4
						? j.VERSION4
						: o === 5
						? j.VERSION5
						: j.VERSION3
				);
			let I = 0;
			return (
				(I |= h != null ? j.USERNAME_MASK : 0),
				(I |= d != null ? j.PASSWORD_MASK : 0),
				(I |= s && s.retain ? j.WILL_RETAIN_MASK : 0),
				(I |= s && s.qos ? s.qos << j.WILL_QOS_SHIFT : 0),
				(I |= s ? j.WILL_FLAG_MASK : 0),
				(I |= a ? j.CLEAN_SESSION_MASK : 0),
				e.write(q.from([I])),
				Ie(e, u),
				o === 5 && w.write(),
				Gr(e, c),
				s && (o === 5 && E.write(), yr(e, s.topic), Gr(e, s.payload)),
				h != null && Gr(e, h),
				d != null && Gr(e, d),
				!0
			);
		}
		function zm(t, e, r) {
			let i = r ? r.protocolVersion : 4,
				n = t || {},
				o = i === 5 ? n.reasonCode : n.returnCode,
				s = n.properties,
				a = 2;
			if (typeof o != 'number') return e.destroy(new Error('Invalid return code')), !1;
			let u = null;
			if (i === 5) {
				if (((u = Wt(e, s)), !u)) return !1;
				a += u.length;
			}
			return (
				e.write(j.CONNACK_HEADER),
				De(e, a),
				e.write(n.sessionPresent ? j.SESSIONPRESENT_HEADER : Dm),
				e.write(q.from([o])),
				u?.write(),
				!0
			);
		}
		function Km(t, e, r) {
			qe('publish: packet: %o', t);
			let i = r ? r.protocolVersion : 4,
				n = t || {},
				o = n.qos || 0,
				s = n.retain ? j.RETAIN_MASK : 0,
				a = n.topic,
				u = n.payload || qm,
				c = n.messageId,
				h = n.properties,
				d = 0;
			if (typeof a == 'string') d += q.byteLength(a) + 2;
			else if (q.isBuffer(a)) d += a.length + 2;
			else return e.destroy(new Error('Invalid topic')), !1;
			if (
				(q.isBuffer(u) ? (d += u.length) : (d += q.byteLength(u)),
				o && typeof c != 'number')
			)
				return e.destroy(new Error('Invalid messageId')), !1;
			o && (d += 2);
			let g = null;
			if (i === 5) {
				if (((g = Wt(e, h)), !g)) return !1;
				d += g.length;
			}
			return (
				e.write(j.PUBLISH_HEADER[o][n.dup ? 1 : 0][s ? 1 : 0]),
				De(e, d),
				Ie(e, kd(a)),
				e.write(a),
				o > 0 && Ie(e, c),
				g?.write(),
				qe('publish: payload: %o', u),
				e.write(u)
			);
		}
		function Gm(t, e, r) {
			let i = r ? r.protocolVersion : 4,
				n = t || {},
				o = n.cmd || 'puback',
				s = n.messageId,
				a = n.dup && o === 'pubrel' ? j.DUP_MASK : 0,
				u = 0,
				c = n.reasonCode,
				h = n.properties,
				d = i === 5 ? 3 : 2;
			if ((o === 'pubrel' && (u = 1), typeof s != 'number'))
				return e.destroy(new Error('Invalid messageId')), !1;
			let g = null;
			if (i === 5 && typeof h == 'object') {
				if (((g = Si(e, h, r, d)), !g)) return !1;
				d += g.length;
			}
			return (
				e.write(j.ACKS[o][u][a][0]),
				d === 3 && (d += c !== 0 ? 1 : -1),
				De(e, d),
				Ie(e, s),
				i === 5 && d !== 2 && e.write(q.from([c])),
				g !== null ? g.write() : d === 4 && e.write(q.from([0])),
				!0
			);
		}
		function Qm(t, e, r) {
			qe('subscribe: packet: ');
			let i = r ? r.protocolVersion : 4,
				n = t || {},
				o = n.dup ? j.DUP_MASK : 0,
				s = n.messageId,
				a = n.subscriptions,
				u = n.properties,
				c = 0;
			if (typeof s != 'number') return e.destroy(new Error('Invalid messageId')), !1;
			c += 2;
			let h = null;
			if (i === 5) {
				if (((h = Wt(e, u)), !h)) return !1;
				c += h.length;
			}
			if (typeof a == 'object' && a.length)
				for (let g = 0; g < a.length; g += 1) {
					let y = a[g].topic,
						w = a[g].qos;
					if (typeof y != 'string')
						return e.destroy(new Error('Invalid subscriptions - invalid topic')), !1;
					if (typeof w != 'number')
						return e.destroy(new Error('Invalid subscriptions - invalid qos')), !1;
					if (i === 5) {
						if (typeof (a[g].nl || !1) != 'boolean')
							return (
								e.destroy(new Error('Invalid subscriptions - invalid No Local')), !1
							);
						if (typeof (a[g].rap || !1) != 'boolean')
							return (
								e.destroy(
									new Error('Invalid subscriptions - invalid Retain as Published')
								),
								!1
							);
						let I = a[g].rh || 0;
						if (typeof I != 'number' || I > 2)
							return (
								e.destroy(
									new Error('Invalid subscriptions - invalid Retain Handling')
								),
								!1
							);
					}
					c += q.byteLength(y) + 2 + 1;
				}
			else return e.destroy(new Error('Invalid subscriptions')), !1;
			qe('subscribe: writing to stream: %o', j.SUBSCRIBE_HEADER),
				e.write(j.SUBSCRIBE_HEADER[1][o ? 1 : 0][0]),
				De(e, c),
				Ie(e, s),
				h !== null && h.write();
			let d = !0;
			for (let g of a) {
				let y = g.topic,
					w = g.qos,
					E = +g.nl,
					S = +g.rap,
					I = g.rh,
					C;
				yr(e, y),
					(C = j.SUBSCRIBE_OPTIONS_QOS[w]),
					i === 5 &&
						((C |= E ? j.SUBSCRIBE_OPTIONS_NL : 0),
						(C |= S ? j.SUBSCRIBE_OPTIONS_RAP : 0),
						(C |= I ? j.SUBSCRIBE_OPTIONS_RH[I] : 0)),
					(d = e.write(q.from([C])));
			}
			return d;
		}
		function Ym(t, e, r) {
			let i = r ? r.protocolVersion : 4,
				n = t || {},
				o = n.messageId,
				s = n.granted,
				a = n.properties,
				u = 0;
			if (typeof o != 'number') return e.destroy(new Error('Invalid messageId')), !1;
			if (((u += 2), typeof s == 'object' && s.length))
				for (let h = 0; h < s.length; h += 1) {
					if (typeof s[h] != 'number')
						return e.destroy(new Error('Invalid qos vector')), !1;
					u += 1;
				}
			else return e.destroy(new Error('Invalid qos vector')), !1;
			let c = null;
			if (i === 5) {
				if (((c = Si(e, a, r, u)), !c)) return !1;
				u += c.length;
			}
			return (
				e.write(j.SUBACK_HEADER),
				De(e, u),
				Ie(e, o),
				c !== null && c.write(),
				e.write(q.from(s))
			);
		}
		function Jm(t, e, r) {
			let i = r ? r.protocolVersion : 4,
				n = t || {},
				o = n.messageId,
				s = n.dup ? j.DUP_MASK : 0,
				a = n.unsubscriptions,
				u = n.properties,
				c = 0;
			if (typeof o != 'number') return e.destroy(new Error('Invalid messageId')), !1;
			if (((c += 2), typeof a == 'object' && a.length))
				for (let g = 0; g < a.length; g += 1) {
					if (typeof a[g] != 'string')
						return e.destroy(new Error('Invalid unsubscriptions')), !1;
					c += q.byteLength(a[g]) + 2;
				}
			else return e.destroy(new Error('Invalid unsubscriptions')), !1;
			let h = null;
			if (i === 5) {
				if (((h = Wt(e, u)), !h)) return !1;
				c += h.length;
			}
			e.write(j.UNSUBSCRIBE_HEADER[1][s ? 1 : 0][0]),
				De(e, c),
				Ie(e, o),
				h !== null && h.write();
			let d = !0;
			for (let g = 0; g < a.length; g++) d = yr(e, a[g]);
			return d;
		}
		function Xm(t, e, r) {
			let i = r ? r.protocolVersion : 4,
				n = t || {},
				o = n.messageId,
				s = n.dup ? j.DUP_MASK : 0,
				a = n.granted,
				u = n.properties,
				c = n.cmd,
				h = 0,
				d = 2;
			if (typeof o != 'number') return e.destroy(new Error('Invalid messageId')), !1;
			if (i === 5)
				if (typeof a == 'object' && a.length)
					for (let y = 0; y < a.length; y += 1) {
						if (typeof a[y] != 'number')
							return e.destroy(new Error('Invalid qos vector')), !1;
						d += 1;
					}
				else return e.destroy(new Error('Invalid qos vector')), !1;
			let g = null;
			if (i === 5) {
				if (((g = Si(e, u, r, d)), !g)) return !1;
				d += g.length;
			}
			return (
				e.write(j.ACKS[c][h][s][0]),
				De(e, d),
				Ie(e, o),
				g !== null && g.write(),
				i === 5 && e.write(q.from(a)),
				!0
			);
		}
		function Zm(t, e, r) {
			return e.write(j.EMPTY[t.cmd]);
		}
		function e1(t, e, r) {
			let i = r ? r.protocolVersion : 4,
				n = t || {},
				o = n.reasonCode,
				s = n.properties,
				a = i === 5 ? 1 : 0,
				u = null;
			if (i === 5) {
				if (((u = Si(e, s, r, a)), !u)) return !1;
				a += u.length;
			}
			return (
				e.write(q.from([j.codes.disconnect << 4])),
				De(e, a),
				i === 5 && e.write(q.from([o])),
				u !== null && u.write(),
				!0
			);
		}
		function t1(t, e, r) {
			let i = r ? r.protocolVersion : 4,
				n = t || {},
				o = n.reasonCode,
				s = n.properties,
				a = i === 5 ? 1 : 0;
			i !== 5 && e.destroy(new Error('Invalid mqtt version for auth packet'));
			let u = Si(e, s, r, a);
			return u
				? ((a += u.length),
				  e.write(q.from([j.codes.auth << 4])),
				  De(e, a),
				  e.write(q.from([o])),
				  u !== null && u.write(),
				  !0)
				: !1;
		}
		var Td = {};
		function De(t, e) {
			if (e > j.VARBYTEINT_MAX)
				return t.destroy(new Error(`Invalid variable byte integer: ${e}`)), !1;
			let r = Td[e];
			return (
				r || ((r = Vo(e)), e < 16384 && (Td[e] = r)),
				qe('writeVarByteInt: writing to stream: %o', r),
				t.write(r)
			);
		}
		function yr(t, e) {
			let r = q.byteLength(e);
			return Ie(t, r), qe('writeString: %s', e), t.write(e, 'utf8');
		}
		function Rd(t, e, r) {
			yr(t, e), yr(t, r);
		}
		function zo(t, e) {
			return (
				qe('writeNumberCached: number: %d', e),
				qe('writeNumberCached: %o', Cn[e]),
				t.write(Cn[e])
			);
		}
		function r1(t, e) {
			let r = Fm(e);
			return qe('writeNumberGenerated: %o', r), t.write(r);
		}
		function i1(t, e) {
			let r = $m(e);
			return qe('write4ByteNumber: %o', r), t.write(r);
		}
		function Gr(t, e) {
			typeof e == 'string' ? yr(t, e) : e ? (Ie(t, e.length), t.write(e)) : Ie(t, 0);
		}
		function Wt(t, e) {
			if (typeof e != 'object' || e.length != null)
				return {
					length: 1,
					write() {
						Bd(t, {}, 0);
					},
				};
			let r = 0;
			function i(o, s) {
				let a = j.propertiesTypes[o],
					u = 0;
				switch (a) {
					case 'byte': {
						if (typeof s != 'boolean')
							return t.destroy(new Error(`Invalid ${o}: ${s}`)), !1;
						u += 1 + 1;
						break;
					}
					case 'int8': {
						if (typeof s != 'number' || s < 0 || s > 255)
							return t.destroy(new Error(`Invalid ${o}: ${s}`)), !1;
						u += 1 + 1;
						break;
					}
					case 'binary': {
						if (s && s === null) return t.destroy(new Error(`Invalid ${o}: ${s}`)), !1;
						u += 1 + q.byteLength(s) + 2;
						break;
					}
					case 'int16': {
						if (typeof s != 'number' || s < 0 || s > 65535)
							return t.destroy(new Error(`Invalid ${o}: ${s}`)), !1;
						u += 1 + 2;
						break;
					}
					case 'int32': {
						if (typeof s != 'number' || s < 0 || s > 4294967295)
							return t.destroy(new Error(`Invalid ${o}: ${s}`)), !1;
						u += 1 + 4;
						break;
					}
					case 'var': {
						if (typeof s != 'number' || s < 0 || s > 268435455)
							return t.destroy(new Error(`Invalid ${o}: ${s}`)), !1;
						u += 1 + q.byteLength(Vo(s));
						break;
					}
					case 'string': {
						if (typeof s != 'string')
							return t.destroy(new Error(`Invalid ${o}: ${s}`)), !1;
						u += 1 + 2 + q.byteLength(s.toString());
						break;
					}
					case 'pair': {
						if (typeof s != 'object')
							return t.destroy(new Error(`Invalid ${o}: ${s}`)), !1;
						u += Object.getOwnPropertyNames(s).reduce((c, h) => {
							let d = s[h];
							return (
								Array.isArray(d)
									? (c += d.reduce(
											(g, y) => (
												(g +=
													1 +
													2 +
													q.byteLength(h.toString()) +
													2 +
													q.byteLength(y.toString())),
												g
											),
											0
									  ))
									: (c +=
											1 +
											2 +
											q.byteLength(h.toString()) +
											2 +
											q.byteLength(s[h].toString())),
								c
							);
						}, 0);
						break;
					}
					default:
						return t.destroy(new Error(`Invalid property ${o}: ${s}`)), !1;
				}
				return u;
			}
			if (e)
				for (let o in e) {
					let s = 0,
						a = 0,
						u = e[o];
					if (Array.isArray(u))
						for (let c = 0; c < u.length; c++) {
							if (((a = i(o, u[c])), !a)) return !1;
							s += a;
						}
					else {
						if (((a = i(o, u)), !a)) return !1;
						s = a;
					}
					if (!s) return !1;
					r += s;
				}
			return {
				length: q.byteLength(Vo(r)) + r,
				write() {
					Bd(t, e, r);
				},
			};
		}
		function Si(t, e, r, i) {
			let n = ['reasonString', 'userProperties'],
				o =
					r && r.properties && r.properties.maximumPacketSize
						? r.properties.maximumPacketSize
						: 0,
				s = Wt(t, e);
			if (o)
				for (; i + s.length > o; ) {
					let a = n.shift();
					if (a && e[a]) delete e[a], (s = Wt(t, e));
					else return !1;
				}
			return s;
		}
		function Cd(t, e, r) {
			switch (j.propertiesTypes[e]) {
				case 'byte': {
					t.write(q.from([j.properties[e]])), t.write(q.from([+r]));
					break;
				}
				case 'int8': {
					t.write(q.from([j.properties[e]])), t.write(q.from([r]));
					break;
				}
				case 'binary': {
					t.write(q.from([j.properties[e]])), Gr(t, r);
					break;
				}
				case 'int16': {
					t.write(q.from([j.properties[e]])), Ie(t, r);
					break;
				}
				case 'int32': {
					t.write(q.from([j.properties[e]])), i1(t, r);
					break;
				}
				case 'var': {
					t.write(q.from([j.properties[e]])), De(t, r);
					break;
				}
				case 'string': {
					t.write(q.from([j.properties[e]])), yr(t, r);
					break;
				}
				case 'pair': {
					Object.getOwnPropertyNames(r).forEach((n) => {
						let o = r[n];
						Array.isArray(o)
							? o.forEach((s) => {
									t.write(q.from([j.properties[e]])),
										Rd(t, n.toString(), s.toString());
							  })
							: (t.write(q.from([j.properties[e]])),
							  Rd(t, n.toString(), o.toString()));
					});
					break;
				}
				default:
					return t.destroy(new Error(`Invalid property ${e} value: ${r}`)), !1;
			}
		}
		function Bd(t, e, r) {
			De(t, r);
			for (let i in e)
				if (Object.prototype.hasOwnProperty.call(e, i) && e[i] !== null) {
					let n = e[i];
					if (Array.isArray(n)) for (let o = 0; o < n.length; o++) Cd(t, i, n[o]);
					else Cd(t, i, n);
				}
		}
		function kd(t) {
			return t ? (t instanceof q ? t.length : q.byteLength(t)) : 0;
		}
		function Pd(t) {
			return typeof t == 'string' || t instanceof q;
		}
		xd.exports = Od;
	});
	var Ud = M((QC, Ld) => {
		v();
		m();
		_();
		var n1 = Ko(),
			{ EventEmitter: s1 } = (ir(), X(rr)),
			{ Buffer: Md } = (ye(), X(_e));
		function o1(t, e) {
			let r = new Go();
			return n1(t, r, e), r.concat();
		}
		var Go = class extends s1 {
			constructor() {
				super(), (this._array = new Array(20)), (this._i = 0);
			}
			write(e) {
				return (this._array[this._i++] = e), !0;
			}
			concat() {
				let e = 0,
					r = new Array(this._array.length),
					i = this._array,
					n = 0,
					o;
				for (o = 0; o < i.length && i[o] !== void 0; o++)
					typeof i[o] != 'string' ? (r[o] = i[o].length) : (r[o] = Md.byteLength(i[o])),
						(e += r[o]);
				let s = Md.allocUnsafe(e);
				for (o = 0; o < i.length && i[o] !== void 0; o++)
					typeof i[o] != 'string'
						? (i[o].copy(s, n), (n += r[o]))
						: (s.write(i[o], n), (n += r[o]));
				return s;
			}
			destroy(e) {
				e && this.emit('error', e);
			}
		};
		Ld.exports = o1;
	});
	var Nd = M((Pn) => {
		v();
		m();
		_();
		Pn.parser = md().parser;
		Pn.generate = Ud();
		Pn.writeToStream = Ko();
	});
	var Jo = M((Yo) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Yo, '__esModule', { value: !0 });
		var Qo = class {
			constructor() {
				this.nextId = Math.max(1, Math.floor(Math.random() * 65535));
			}
			allocate() {
				let e = this.nextId++;
				return this.nextId === 65536 && (this.nextId = 1), e;
			}
			getLastAllocated() {
				return this.nextId === 1 ? 65535 : this.nextId - 1;
			}
			register(e) {
				return !0;
			}
			deallocate(e) {}
			clear() {}
		};
		Yo.default = Qo;
	});
	var Dd = M((yB, qd) => {
		'use strict';
		v();
		m();
		_();
		qd.exports = a1;
		function Qr(t) {
			return t instanceof x
				? x.from(t)
				: new t.constructor(t.buffer.slice(), t.byteOffset, t.length);
		}
		function a1(t) {
			if (((t = t || {}), t.circles)) return l1(t);
			return t.proto ? i : r;
			function e(n, o) {
				for (var s = Object.keys(n), a = new Array(s.length), u = 0; u < s.length; u++) {
					var c = s[u],
						h = n[c];
					typeof h != 'object' || h === null
						? (a[c] = h)
						: h instanceof Date
						? (a[c] = new Date(h))
						: ArrayBuffer.isView(h)
						? (a[c] = Qr(h))
						: (a[c] = o(h));
				}
				return a;
			}
			function r(n) {
				if (typeof n != 'object' || n === null) return n;
				if (n instanceof Date) return new Date(n);
				if (Array.isArray(n)) return e(n, r);
				if (n instanceof Map) return new Map(e(Array.from(n), r));
				if (n instanceof Set) return new Set(e(Array.from(n), r));
				var o = {};
				for (var s in n)
					if (Object.hasOwnProperty.call(n, s) !== !1) {
						var a = n[s];
						typeof a != 'object' || a === null
							? (o[s] = a)
							: a instanceof Date
							? (o[s] = new Date(a))
							: a instanceof Map
							? (o[s] = new Map(e(Array.from(a), r)))
							: a instanceof Set
							? (o[s] = new Set(e(Array.from(a), r)))
							: ArrayBuffer.isView(a)
							? (o[s] = Qr(a))
							: (o[s] = r(a));
					}
				return o;
			}
			function i(n) {
				if (typeof n != 'object' || n === null) return n;
				if (n instanceof Date) return new Date(n);
				if (Array.isArray(n)) return e(n, i);
				if (n instanceof Map) return new Map(e(Array.from(n), i));
				if (n instanceof Set) return new Set(e(Array.from(n), i));
				var o = {};
				for (var s in n) {
					var a = n[s];
					typeof a != 'object' || a === null
						? (o[s] = a)
						: a instanceof Date
						? (o[s] = new Date(a))
						: a instanceof Map
						? (o[s] = new Map(e(Array.from(a), i)))
						: a instanceof Set
						? (o[s] = new Set(e(Array.from(a), i)))
						: ArrayBuffer.isView(a)
						? (o[s] = Qr(a))
						: (o[s] = i(a));
				}
				return o;
			}
		}
		function l1(t) {
			var e = [],
				r = [];
			return t.proto ? o : n;
			function i(s, a) {
				for (var u = Object.keys(s), c = new Array(u.length), h = 0; h < u.length; h++) {
					var d = u[h],
						g = s[d];
					if (typeof g != 'object' || g === null) c[d] = g;
					else if (g instanceof Date) c[d] = new Date(g);
					else if (ArrayBuffer.isView(g)) c[d] = Qr(g);
					else {
						var y = e.indexOf(g);
						y !== -1 ? (c[d] = r[y]) : (c[d] = a(g));
					}
				}
				return c;
			}
			function n(s) {
				if (typeof s != 'object' || s === null) return s;
				if (s instanceof Date) return new Date(s);
				if (Array.isArray(s)) return i(s, n);
				if (s instanceof Map) return new Map(i(Array.from(s), n));
				if (s instanceof Set) return new Set(i(Array.from(s), n));
				var a = {};
				e.push(s), r.push(a);
				for (var u in s)
					if (Object.hasOwnProperty.call(s, u) !== !1) {
						var c = s[u];
						if (typeof c != 'object' || c === null) a[u] = c;
						else if (c instanceof Date) a[u] = new Date(c);
						else if (c instanceof Map) a[u] = new Map(i(Array.from(c), n));
						else if (c instanceof Set) a[u] = new Set(i(Array.from(c), n));
						else if (ArrayBuffer.isView(c)) a[u] = Qr(c);
						else {
							var h = e.indexOf(c);
							h !== -1 ? (a[u] = r[h]) : (a[u] = n(c));
						}
					}
				return e.pop(), r.pop(), a;
			}
			function o(s) {
				if (typeof s != 'object' || s === null) return s;
				if (s instanceof Date) return new Date(s);
				if (Array.isArray(s)) return i(s, o);
				if (s instanceof Map) return new Map(i(Array.from(s), o));
				if (s instanceof Set) return new Set(i(Array.from(s), o));
				var a = {};
				e.push(s), r.push(a);
				for (var u in s) {
					var c = s[u];
					if (typeof c != 'object' || c === null) a[u] = c;
					else if (c instanceof Date) a[u] = new Date(c);
					else if (c instanceof Map) a[u] = new Map(i(Array.from(c), o));
					else if (c instanceof Set) a[u] = new Set(i(Array.from(c), o));
					else if (ArrayBuffer.isView(c)) a[u] = Qr(c);
					else {
						var h = e.indexOf(c);
						h !== -1 ? (a[u] = r[h]) : (a[u] = o(c));
					}
				}
				return e.pop(), r.pop(), a;
			}
		}
	});
	var Fd = M((SB, jd) => {
		'use strict';
		v();
		m();
		_();
		jd.exports = Dd()();
	});
	var $d = M((Yr) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Yr, '__esModule', { value: !0 });
		Yr.validateTopics = Yr.validateTopic = void 0;
		function Wd(t) {
			let e = t.split('/');
			for (let r = 0; r < e.length; r++)
				if (e[r] !== '+') {
					if (e[r] === '#') return r === e.length - 1;
					if (e[r].indexOf('+') !== -1 || e[r].indexOf('#') !== -1) return !1;
				}
			return !0;
		}
		Yr.validateTopic = Wd;
		function u1(t) {
			if (t.length === 0) return 'empty_topic_list';
			for (let e = 0; e < t.length; e++) if (!Wd(t[e])) return t[e];
			return null;
		}
		Yr.validateTopics = u1;
	});
	var ea = M((Zo) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Zo, '__esModule', { value: !0 });
		var f1 = jt(),
			c1 = { objectMode: !0 },
			h1 = { clean: !0 },
			Xo = class {
				constructor(e) {
					(this.options = e || {}),
						(this.options = Object.assign(Object.assign({}, h1), e)),
						(this._inflights = new Map());
				}
				put(e, r) {
					return this._inflights.set(e.messageId, e), r && r(), this;
				}
				createStream() {
					let e = new f1.Readable(c1),
						r = [],
						i = !1,
						n = 0;
					return (
						this._inflights.forEach((o, s) => {
							r.push(o);
						}),
						(e._read = () => {
							!i && n < r.length ? e.push(r[n++]) : e.push(null);
						}),
						(e.destroy = (o) => {
							if (!i)
								return (
									(i = !0),
									setTimeout(() => {
										e.emit('close');
									}, 0),
									e
								);
						}),
						e
					);
				}
				del(e, r) {
					let i = this._inflights.get(e.messageId);
					return (
						i
							? (this._inflights.delete(e.messageId), r(null, i))
							: r && r(new Error('missing packet')),
						this
					);
				}
				get(e, r) {
					let i = this._inflights.get(e.messageId);
					return i ? r(null, i) : r && r(new Error('missing packet')), this;
				}
				close(e) {
					this.options.clean && (this._inflights = null), e && e();
				}
			};
		Zo.default = Xo;
	});
	var Vd = M((ta) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(ta, '__esModule', { value: !0 });
		var Hd = [0, 16, 128, 131, 135, 144, 145, 151, 153],
			d1 = (t, e, r) => {
				t.log('handlePublish: packet %o', e), (r = typeof r < 'u' ? r : t.noop);
				let i = e.topic.toString(),
					n = e.payload,
					{ qos: o } = e,
					{ messageId: s } = e,
					{ options: a } = t;
				if (t.options.protocolVersion === 5) {
					let u;
					if ((e.properties && (u = e.properties.topicAlias), typeof u < 'u'))
						if (i.length === 0)
							if (u > 0 && u <= 65535) {
								let c = t.topicAliasRecv.getTopicByAlias(u);
								if (c)
									(i = c),
										t.log(
											'handlePublish :: topic complemented by alias. topic: %s - alias: %d',
											i,
											u
										);
								else {
									t.log(
										'handlePublish :: unregistered topic alias. alias: %d',
										u
									),
										t.emit(
											'error',
											new Error('Received unregistered Topic Alias')
										);
									return;
								}
							} else {
								t.log('handlePublish :: topic alias out of range. alias: %d', u),
									t.emit(
										'error',
										new Error('Received Topic Alias is out of range')
									);
								return;
							}
						else if (t.topicAliasRecv.put(i, u))
							t.log('handlePublish :: registered topic: %s - alias: %d', i, u);
						else {
							t.log('handlePublish :: topic alias out of range. alias: %d', u),
								t.emit('error', new Error('Received Topic Alias is out of range'));
							return;
						}
				}
				switch ((t.log('handlePublish: qos %d', o), o)) {
					case 2: {
						a.customHandleAcks(i, n, e, (u, c) => {
							if ((typeof u == 'number' && ((c = u), (u = null)), u))
								return t.emit('error', u);
							if (Hd.indexOf(c) === -1)
								return t.emit('error', new Error('Wrong reason code for pubrec'));
							c
								? t._sendPacket({ cmd: 'pubrec', messageId: s, reasonCode: c }, r)
								: t.incomingStore.put(e, () => {
										t._sendPacket({ cmd: 'pubrec', messageId: s }, r);
								  });
						});
						break;
					}
					case 1: {
						a.customHandleAcks(i, n, e, (u, c) => {
							if ((typeof u == 'number' && ((c = u), (u = null)), u))
								return t.emit('error', u);
							if (Hd.indexOf(c) === -1)
								return t.emit('error', new Error('Wrong reason code for puback'));
							c || t.emit('message', i, n, e),
								t.handleMessage(e, (h) => {
									if (h) return r && r(h);
									t._sendPacket(
										{ cmd: 'puback', messageId: s, reasonCode: c },
										r
									);
								});
						});
						break;
					}
					case 0:
						t.emit('message', i, n, e), t.handleMessage(e, r);
						break;
					default:
						t.log('handlePublish: unknown QoS. Doing nothing.');
						break;
				}
			};
		ta.default = d1;
	});
	var zd = M((JB, p1) => {
		p1.exports = { version: '5.5.5' };
	});
	var Jr = M((at) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(at, '__esModule', { value: !0 });
		at.MQTTJS_VERSION = at.nextTick = at.applyMixin = at.ErrorWithReasonCode = void 0;
		var ra = class t extends Error {
			constructor(e, r) {
				super(e),
					(this.code = r),
					Object.setPrototypeOf(this, t.prototype),
					(Object.getPrototypeOf(this).name = 'ErrorWithReasonCode');
			}
		};
		at.ErrorWithReasonCode = ra;
		function g1(t, e, r = !1) {
			var i;
			let n = [e];
			for (;;) {
				let o = n[0],
					s = Object.getPrototypeOf(o);
				if (s?.prototype) n.unshift(s);
				else break;
			}
			for (let o of n)
				for (let s of Object.getOwnPropertyNames(o.prototype))
					(r || s !== 'constructor') &&
						Object.defineProperty(
							t.prototype,
							s,
							(i = Object.getOwnPropertyDescriptor(o.prototype, s)) !== null &&
								i !== void 0
								? i
								: Object.create(null)
						);
		}
		at.applyMixin = g1;
		at.nextTick =
			typeof (B === null || B === void 0 ? void 0 : B.nextTick) == 'function'
				? B.nextTick
				: (t) => {
						setTimeout(t, 0);
				  };
		at.MQTTJS_VERSION = zd().version;
	});
	var Ai = M((br) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(br, '__esModule', { value: !0 });
		br.ReasonCodes = void 0;
		br.ReasonCodes = {
			0: '',
			1: 'Unacceptable protocol version',
			2: 'Identifier rejected',
			3: 'Server unavailable',
			4: 'Bad username or password',
			5: 'Not authorized',
			16: 'No matching subscribers',
			17: 'No subscription existed',
			128: 'Unspecified error',
			129: 'Malformed Packet',
			130: 'Protocol Error',
			131: 'Implementation specific error',
			132: 'Unsupported Protocol Version',
			133: 'Client Identifier not valid',
			134: 'Bad User Name or Password',
			135: 'Not authorized',
			136: 'Server unavailable',
			137: 'Server busy',
			138: 'Banned',
			139: 'Server shutting down',
			140: 'Bad authentication method',
			141: 'Keep Alive timeout',
			142: 'Session taken over',
			143: 'Topic Filter invalid',
			144: 'Topic Name invalid',
			145: 'Packet identifier in use',
			146: 'Packet Identifier not found',
			147: 'Receive Maximum exceeded',
			148: 'Topic Alias invalid',
			149: 'Packet too large',
			150: 'Message rate too high',
			151: 'Quota exceeded',
			152: 'Administrative action',
			153: 'Payload format invalid',
			154: 'Retain not supported',
			155: 'QoS not supported',
			156: 'Use another server',
			157: 'Server moved',
			158: 'Shared Subscriptions not supported',
			159: 'Connection rate exceeded',
			160: 'Maximum connect time',
			161: 'Subscription Identifiers not supported',
			162: 'Wildcard Subscriptions not supported',
		};
		var y1 = (t, e) => {
			let { messageId: r } = e,
				i = e.cmd,
				n = null,
				o = t.outgoing[r] ? t.outgoing[r].cb : null,
				s;
			if (!o) {
				t.log('_handleAck :: Server sent an ack in error. Ignoring.');
				return;
			}
			switch ((t.log('_handleAck :: packet type', i), i)) {
				case 'pubcomp':
				case 'puback': {
					let a = e.reasonCode;
					a && a > 0 && a !== 16
						? ((s = new Error(`Publish error: ${br.ReasonCodes[a]}`)),
						  (s.code = a),
						  t._removeOutgoingAndStoreMessage(r, () => {
								o(s, e);
						  }))
						: t._removeOutgoingAndStoreMessage(r, o);
					break;
				}
				case 'pubrec': {
					n = { cmd: 'pubrel', qos: 2, messageId: r };
					let a = e.reasonCode;
					a && a > 0 && a !== 16
						? ((s = new Error(`Publish error: ${br.ReasonCodes[a]}`)),
						  (s.code = a),
						  t._removeOutgoingAndStoreMessage(r, () => {
								o(s, e);
						  }))
						: t._sendPacket(n);
					break;
				}
				case 'suback': {
					delete t.outgoing[r], t.messageIdProvider.deallocate(r);
					let a = e.granted;
					for (let u = 0; u < a.length; u++)
						if (a[u] & 128) {
							let c = t.messageIdToTopic[r];
							c &&
								c.forEach((h) => {
									delete t._resubscribeTopics[h];
								});
						}
					delete t.messageIdToTopic[r], t._invokeStoreProcessingQueue(), o(null, e);
					break;
				}
				case 'unsuback': {
					delete t.outgoing[r],
						t.messageIdProvider.deallocate(r),
						t._invokeStoreProcessingQueue(),
						o(null);
					break;
				}
				default:
					t.emit('error', new Error('unrecognized packet type'));
			}
			t.disconnecting && Object.keys(t.outgoing).length === 0 && t.emit('outgoingEmpty');
		};
		br.default = y1;
	});
	var Gd = M((ia) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(ia, '__esModule', { value: !0 });
		var Kd = Jr(),
			b1 = Ai(),
			w1 = (t, e) => {
				let { options: r } = t,
					i = r.protocolVersion,
					n = i === 5 ? e.reasonCode : e.returnCode;
				if (i !== 5) {
					let o = new Kd.ErrorWithReasonCode(
						`Protocol error: Auth packets are only supported in MQTT 5. Your version:${i}`,
						n
					);
					t.emit('error', o);
					return;
				}
				t.handleAuth(e, (o, s) => {
					if (o) {
						t.emit('error', o);
						return;
					}
					if (n === 24) (t.reconnecting = !1), t._sendPacket(s);
					else {
						let a = new Kd.ErrorWithReasonCode(
							`Connection refused: ${b1.ReasonCodes[n]}`,
							n
						);
						t.emit('error', a);
					}
				});
			};
		ia.default = w1;
	});
	var Zd = M((kn) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(kn, '__esModule', { value: !0 });
		kn.LRUCache = void 0;
		var Ii =
				typeof performance == 'object' &&
				performance &&
				typeof performance.now == 'function'
					? performance
					: Date,
			Yd = new Set(),
			na = typeof B == 'object' && B ? B : {},
			Jd = (t, e, r, i) => {
				typeof na.emitWarning == 'function'
					? na.emitWarning(t, e, r, i)
					: console.error(`[${r}] ${e}: ${t}`);
			},
			On = globalThis.AbortController,
			Qd = globalThis.AbortSignal;
		if (typeof On > 'u') {
			(Qd = class {
				onabort;
				_onabort = [];
				reason;
				aborted = !1;
				addEventListener(i, n) {
					this._onabort.push(n);
				}
			}),
				(On = class {
					constructor() {
						e();
					}
					signal = new Qd();
					abort(i) {
						if (!this.signal.aborted) {
							(this.signal.reason = i), (this.signal.aborted = !0);
							for (let n of this.signal._onabort) n(i);
							this.signal.onabort?.(i);
						}
					}
				});
			let t = na.env?.LRU_CACHE_IGNORE_AC_WARNING !== '1',
				e = () => {
					t &&
						((t = !1),
						Jd(
							'AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.',
							'NO_ABORT_CONTROLLER',
							'ENOTSUP',
							e
						));
				};
		}
		var _1 = (t) => !Yd.has(t),
			vP = Symbol('type'),
			$t = (t) => t && t === Math.floor(t) && t > 0 && isFinite(t),
			Xd = (t) =>
				$t(t)
					? t <= Math.pow(2, 8)
						? Uint8Array
						: t <= Math.pow(2, 16)
						? Uint16Array
						: t <= Math.pow(2, 32)
						? Uint32Array
						: t <= Number.MAX_SAFE_INTEGER
						? Xr
						: null
					: null,
			Xr = class extends Array {
				constructor(e) {
					super(e), this.fill(0);
				}
			},
			sa = class t {
				heap;
				length;
				static #l = !1;
				static create(e) {
					let r = Xd(e);
					if (!r) return [];
					t.#l = !0;
					let i = new t(e, r);
					return (t.#l = !1), i;
				}
				constructor(e, r) {
					if (!t.#l) throw new TypeError('instantiate Stack using Stack.create(n)');
					(this.heap = new r(e)), (this.length = 0);
				}
				push(e) {
					this.heap[this.length++] = e;
				}
				pop() {
					return this.heap[--this.length];
				}
			},
			oa = class t {
				#l;
				#c;
				#p;
				#g;
				#B;
				ttl;
				ttlResolution;
				ttlAutopurge;
				updateAgeOnGet;
				updateAgeOnHas;
				allowStale;
				noDisposeOnSet;
				noUpdateTTL;
				maxEntrySize;
				sizeCalculation;
				noDeleteOnFetchRejection;
				noDeleteOnStaleGet;
				allowStaleOnFetchAbort;
				allowStaleOnFetchRejection;
				ignoreFetchAbort;
				#i;
				#y;
				#n;
				#r;
				#e;
				#u;
				#h;
				#a;
				#s;
				#b;
				#o;
				#E;
				#S;
				#w;
				#_;
				#I;
				#f;
				static unsafeExposeInternals(e) {
					return {
						starts: e.#S,
						ttls: e.#w,
						sizes: e.#E,
						keyMap: e.#n,
						keyList: e.#r,
						valList: e.#e,
						next: e.#u,
						prev: e.#h,
						get head() {
							return e.#a;
						},
						get tail() {
							return e.#s;
						},
						free: e.#b,
						isBackgroundFetch: (r) => e.#t(r),
						backgroundFetch: (r, i, n, o) => e.#k(r, i, n, o),
						moveToTail: (r) => e.#C(r),
						indexes: (r) => e.#m(r),
						rindexes: (r) => e.#v(r),
						isStale: (r) => e.#d(r),
					};
				}
				get max() {
					return this.#l;
				}
				get maxSize() {
					return this.#c;
				}
				get calculatedSize() {
					return this.#y;
				}
				get size() {
					return this.#i;
				}
				get fetchMethod() {
					return this.#B;
				}
				get dispose() {
					return this.#p;
				}
				get disposeAfter() {
					return this.#g;
				}
				constructor(e) {
					let {
						max: r = 0,
						ttl: i,
						ttlResolution: n = 1,
						ttlAutopurge: o,
						updateAgeOnGet: s,
						updateAgeOnHas: a,
						allowStale: u,
						dispose: c,
						disposeAfter: h,
						noDisposeOnSet: d,
						noUpdateTTL: g,
						maxSize: y = 0,
						maxEntrySize: w = 0,
						sizeCalculation: E,
						fetchMethod: S,
						noDeleteOnFetchRejection: I,
						noDeleteOnStaleGet: C,
						allowStaleOnFetchRejection: R,
						allowStaleOnFetchAbort: U,
						ignoreFetchAbort: N,
					} = e;
					if (r !== 0 && !$t(r))
						throw new TypeError('max option must be a nonnegative integer');
					let W = r ? Xd(r) : Array;
					if (!W) throw new Error('invalid max value: ' + r);
					if (
						((this.#l = r),
						(this.#c = y),
						(this.maxEntrySize = w || this.#c),
						(this.sizeCalculation = E),
						this.sizeCalculation)
					) {
						if (!this.#c && !this.maxEntrySize)
							throw new TypeError(
								'cannot set sizeCalculation without setting maxSize or maxEntrySize'
							);
						if (typeof this.sizeCalculation != 'function')
							throw new TypeError('sizeCalculation set to non-function');
					}
					if (S !== void 0 && typeof S != 'function')
						throw new TypeError('fetchMethod must be a function if specified');
					if (
						((this.#B = S),
						(this.#I = !!S),
						(this.#n = new Map()),
						(this.#r = new Array(r).fill(void 0)),
						(this.#e = new Array(r).fill(void 0)),
						(this.#u = new W(r)),
						(this.#h = new W(r)),
						(this.#a = 0),
						(this.#s = 0),
						(this.#b = sa.create(r)),
						(this.#i = 0),
						(this.#y = 0),
						typeof c == 'function' && (this.#p = c),
						typeof h == 'function'
							? ((this.#g = h), (this.#o = []))
							: ((this.#g = void 0), (this.#o = void 0)),
						(this.#_ = !!this.#p),
						(this.#f = !!this.#g),
						(this.noDisposeOnSet = !!d),
						(this.noUpdateTTL = !!g),
						(this.noDeleteOnFetchRejection = !!I),
						(this.allowStaleOnFetchRejection = !!R),
						(this.allowStaleOnFetchAbort = !!U),
						(this.ignoreFetchAbort = !!N),
						this.maxEntrySize !== 0)
					) {
						if (this.#c !== 0 && !$t(this.#c))
							throw new TypeError('maxSize must be a positive integer if specified');
						if (!$t(this.maxEntrySize))
							throw new TypeError(
								'maxEntrySize must be a positive integer if specified'
							);
						this.#q();
					}
					if (
						((this.allowStale = !!u),
						(this.noDeleteOnStaleGet = !!C),
						(this.updateAgeOnGet = !!s),
						(this.updateAgeOnHas = !!a),
						(this.ttlResolution = $t(n) || n === 0 ? n : 1),
						(this.ttlAutopurge = !!o),
						(this.ttl = i || 0),
						this.ttl)
					) {
						if (!$t(this.ttl))
							throw new TypeError('ttl must be a positive integer if specified');
						this.#x();
					}
					if (this.#l === 0 && this.ttl === 0 && this.#c === 0)
						throw new TypeError('At least one of max, maxSize, or ttl is required');
					if (!this.ttlAutopurge && !this.#l && !this.#c) {
						let K = 'LRU_CACHE_UNBOUNDED';
						_1(K) &&
							(Yd.add(K),
							Jd(
								'TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.',
								'UnboundedCacheWarning',
								K,
								t
							));
					}
				}
				getRemainingTTL(e) {
					return this.#n.has(e) ? 1 / 0 : 0;
				}
				#x() {
					let e = new Xr(this.#l),
						r = new Xr(this.#l);
					(this.#w = e),
						(this.#S = r),
						(this.#M = (o, s, a = Ii.now()) => {
							if (
								((r[o] = s !== 0 ? a : 0), (e[o] = s), s !== 0 && this.ttlAutopurge)
							) {
								let u = setTimeout(() => {
									this.#d(o) && this.delete(this.#r[o]);
								}, s + 1);
								u.unref && u.unref();
							}
						}),
						(this.#T = (o) => {
							r[o] = e[o] !== 0 ? Ii.now() : 0;
						}),
						(this.#A = (o, s) => {
							if (e[s]) {
								let a = e[s],
									u = r[s];
								(o.ttl = a), (o.start = u), (o.now = i || n());
								let c = o.now - u;
								o.remainingTTL = a - c;
							}
						});
					let i = 0,
						n = () => {
							let o = Ii.now();
							if (this.ttlResolution > 0) {
								i = o;
								let s = setTimeout(() => (i = 0), this.ttlResolution);
								s.unref && s.unref();
							}
							return o;
						};
					(this.getRemainingTTL = (o) => {
						let s = this.#n.get(o);
						if (s === void 0) return 0;
						let a = e[s],
							u = r[s];
						if (a === 0 || u === 0) return 1 / 0;
						let c = (i || n()) - u;
						return a - c;
					}),
						(this.#d = (o) => e[o] !== 0 && r[o] !== 0 && (i || n()) - r[o] > e[o]);
				}
				#T = () => {};
				#A = () => {};
				#M = () => {};
				#d = () => !1;
				#q() {
					let e = new Xr(this.#l);
					(this.#y = 0),
						(this.#E = e),
						(this.#R = (r) => {
							(this.#y -= e[r]), (e[r] = 0);
						}),
						(this.#L = (r, i, n, o) => {
							if (this.#t(i)) return 0;
							if (!$t(n))
								if (o) {
									if (typeof o != 'function')
										throw new TypeError('sizeCalculation must be a function');
									if (((n = o(i, r)), !$t(n)))
										throw new TypeError(
											'sizeCalculation return invalid (expect positive integer)'
										);
								} else
									throw new TypeError(
										'invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.'
									);
							return n;
						}),
						(this.#P = (r, i, n) => {
							if (((e[r] = i), this.#c)) {
								let o = this.#c - e[r];
								for (; this.#y > o; ) this.#O(!0);
							}
							(this.#y += e[r]),
								n && ((n.entrySize = i), (n.totalCalculatedSize = this.#y));
						});
				}
				#R = (e) => {};
				#P = (e, r, i) => {};
				#L = (e, r, i, n) => {
					if (i || n)
						throw new TypeError(
							'cannot set size without setting maxSize or maxEntrySize on cache'
						);
					return 0;
				};
				*#m({ allowStale: e = this.allowStale } = {}) {
					if (this.#i)
						for (
							let r = this.#s;
							!(!this.#U(r) || ((e || !this.#d(r)) && (yield r), r === this.#a));

						)
							r = this.#h[r];
				}
				*#v({ allowStale: e = this.allowStale } = {}) {
					if (this.#i)
						for (
							let r = this.#a;
							!(!this.#U(r) || ((e || !this.#d(r)) && (yield r), r === this.#s));

						)
							r = this.#u[r];
				}
				#U(e) {
					return e !== void 0 && this.#n.get(this.#r[e]) === e;
				}
				*entries() {
					for (let e of this.#m())
						this.#e[e] !== void 0 &&
							this.#r[e] !== void 0 &&
							!this.#t(this.#e[e]) &&
							(yield [this.#r[e], this.#e[e]]);
				}
				*rentries() {
					for (let e of this.#v())
						this.#e[e] !== void 0 &&
							this.#r[e] !== void 0 &&
							!this.#t(this.#e[e]) &&
							(yield [this.#r[e], this.#e[e]]);
				}
				*keys() {
					for (let e of this.#m()) {
						let r = this.#r[e];
						r !== void 0 && !this.#t(this.#e[e]) && (yield r);
					}
				}
				*rkeys() {
					for (let e of this.#v()) {
						let r = this.#r[e];
						r !== void 0 && !this.#t(this.#e[e]) && (yield r);
					}
				}
				*values() {
					for (let e of this.#m())
						this.#e[e] !== void 0 && !this.#t(this.#e[e]) && (yield this.#e[e]);
				}
				*rvalues() {
					for (let e of this.#v())
						this.#e[e] !== void 0 && !this.#t(this.#e[e]) && (yield this.#e[e]);
				}
				[Symbol.iterator]() {
					return this.entries();
				}
				find(e, r = {}) {
					for (let i of this.#m()) {
						let n = this.#e[i],
							o = this.#t(n) ? n.__staleWhileFetching : n;
						if (o !== void 0 && e(o, this.#r[i], this)) return this.get(this.#r[i], r);
					}
				}
				forEach(e, r = this) {
					for (let i of this.#m()) {
						let n = this.#e[i],
							o = this.#t(n) ? n.__staleWhileFetching : n;
						o !== void 0 && e.call(r, o, this.#r[i], this);
					}
				}
				rforEach(e, r = this) {
					for (let i of this.#v()) {
						let n = this.#e[i],
							o = this.#t(n) ? n.__staleWhileFetching : n;
						o !== void 0 && e.call(r, o, this.#r[i], this);
					}
				}
				purgeStale() {
					let e = !1;
					for (let r of this.#v({ allowStale: !0 }))
						this.#d(r) && (this.delete(this.#r[r]), (e = !0));
					return e;
				}
				dump() {
					let e = [];
					for (let r of this.#m({ allowStale: !0 })) {
						let i = this.#r[r],
							n = this.#e[r],
							o = this.#t(n) ? n.__staleWhileFetching : n;
						if (o === void 0 || i === void 0) continue;
						let s = { value: o };
						if (this.#w && this.#S) {
							s.ttl = this.#w[r];
							let a = Ii.now() - this.#S[r];
							s.start = Math.floor(Date.now() - a);
						}
						this.#E && (s.size = this.#E[r]), e.unshift([i, s]);
					}
					return e;
				}
				load(e) {
					this.clear();
					for (let [r, i] of e) {
						if (i.start) {
							let n = Date.now() - i.start;
							i.start = Ii.now() - n;
						}
						this.set(r, i.value, i);
					}
				}
				set(e, r, i = {}) {
					if (r === void 0) return this.delete(e), this;
					let {
							ttl: n = this.ttl,
							start: o,
							noDisposeOnSet: s = this.noDisposeOnSet,
							sizeCalculation: a = this.sizeCalculation,
							status: u,
						} = i,
						{ noUpdateTTL: c = this.noUpdateTTL } = i,
						h = this.#L(e, r, i.size || 0, a);
					if (this.maxEntrySize && h > this.maxEntrySize)
						return (
							u && ((u.set = 'miss'), (u.maxEntrySizeExceeded = !0)),
							this.delete(e),
							this
						);
					let d = this.#i === 0 ? void 0 : this.#n.get(e);
					if (d === void 0)
						(d =
							this.#i === 0
								? this.#s
								: this.#b.length !== 0
								? this.#b.pop()
								: this.#i === this.#l
								? this.#O(!1)
								: this.#i),
							(this.#r[d] = e),
							(this.#e[d] = r),
							this.#n.set(e, d),
							(this.#u[this.#s] = d),
							(this.#h[d] = this.#s),
							(this.#s = d),
							this.#i++,
							this.#P(d, h, u),
							u && (u.set = 'add'),
							(c = !1);
					else {
						this.#C(d);
						let g = this.#e[d];
						if (r !== g) {
							if (this.#I && this.#t(g)) {
								g.__abortController.abort(new Error('replaced'));
								let { __staleWhileFetching: y } = g;
								y !== void 0 &&
									!s &&
									(this.#_ && this.#p?.(y, e, 'set'),
									this.#f && this.#o?.push([y, e, 'set']));
							} else
								s ||
									(this.#_ && this.#p?.(g, e, 'set'),
									this.#f && this.#o?.push([g, e, 'set']));
							if ((this.#R(d), this.#P(d, h, u), (this.#e[d] = r), u)) {
								u.set = 'replace';
								let y = g && this.#t(g) ? g.__staleWhileFetching : g;
								y !== void 0 && (u.oldValue = y);
							}
						} else u && (u.set = 'update');
					}
					if (
						(n !== 0 && !this.#w && this.#x(),
						this.#w && (c || this.#M(d, n, o), u && this.#A(u, d)),
						!s && this.#f && this.#o)
					) {
						let g = this.#o,
							y;
						for (; (y = g?.shift()); ) this.#g?.(...y);
					}
					return this;
				}
				pop() {
					try {
						for (; this.#i; ) {
							let e = this.#e[this.#a];
							if ((this.#O(!0), this.#t(e))) {
								if (e.__staleWhileFetching) return e.__staleWhileFetching;
							} else if (e !== void 0) return e;
						}
					} finally {
						if (this.#f && this.#o) {
							let e = this.#o,
								r;
							for (; (r = e?.shift()); ) this.#g?.(...r);
						}
					}
				}
				#O(e) {
					let r = this.#a,
						i = this.#r[r],
						n = this.#e[r];
					return (
						this.#I && this.#t(n)
							? n.__abortController.abort(new Error('evicted'))
							: (this.#_ || this.#f) &&
							  (this.#_ && this.#p?.(n, i, 'evict'),
							  this.#f && this.#o?.push([n, i, 'evict'])),
						this.#R(r),
						e && ((this.#r[r] = void 0), (this.#e[r] = void 0), this.#b.push(r)),
						this.#i === 1
							? ((this.#a = this.#s = 0), (this.#b.length = 0))
							: (this.#a = this.#u[r]),
						this.#n.delete(i),
						this.#i--,
						r
					);
				}
				has(e, r = {}) {
					let { updateAgeOnHas: i = this.updateAgeOnHas, status: n } = r,
						o = this.#n.get(e);
					if (o !== void 0) {
						let s = this.#e[o];
						if (this.#t(s) && s.__staleWhileFetching === void 0) return !1;
						if (this.#d(o)) n && ((n.has = 'stale'), this.#A(n, o));
						else return i && this.#T(o), n && ((n.has = 'hit'), this.#A(n, o)), !0;
					} else n && (n.has = 'miss');
					return !1;
				}
				peek(e, r = {}) {
					let { allowStale: i = this.allowStale } = r,
						n = this.#n.get(e);
					if (n !== void 0 && (i || !this.#d(n))) {
						let o = this.#e[n];
						return this.#t(o) ? o.__staleWhileFetching : o;
					}
				}
				#k(e, r, i, n) {
					let o = r === void 0 ? void 0 : this.#e[r];
					if (this.#t(o)) return o;
					let s = new On(),
						{ signal: a } = i;
					a?.addEventListener('abort', () => s.abort(a.reason), { signal: s.signal });
					let u = { signal: s.signal, options: i, context: n },
						c = (E, S = !1) => {
							let { aborted: I } = s.signal,
								C = i.ignoreFetchAbort && E !== void 0;
							if (
								(i.status &&
									(I && !S
										? ((i.status.fetchAborted = !0),
										  (i.status.fetchError = s.signal.reason),
										  C && (i.status.fetchAbortIgnored = !0))
										: (i.status.fetchResolved = !0)),
								I && !C && !S)
							)
								return d(s.signal.reason);
							let R = y;
							return (
								this.#e[r] === y &&
									(E === void 0
										? R.__staleWhileFetching
											? (this.#e[r] = R.__staleWhileFetching)
											: this.delete(e)
										: (i.status && (i.status.fetchUpdated = !0),
										  this.set(e, E, u.options))),
								E
							);
						},
						h = (E) => (
							i.status && ((i.status.fetchRejected = !0), (i.status.fetchError = E)),
							d(E)
						),
						d = (E) => {
							let { aborted: S } = s.signal,
								I = S && i.allowStaleOnFetchAbort,
								C = I || i.allowStaleOnFetchRejection,
								R = C || i.noDeleteOnFetchRejection,
								U = y;
							if (
								(this.#e[r] === y &&
									(!R || U.__staleWhileFetching === void 0
										? this.delete(e)
										: I || (this.#e[r] = U.__staleWhileFetching)),
								C)
							)
								return (
									i.status &&
										U.__staleWhileFetching !== void 0 &&
										(i.status.returnedStale = !0),
									U.__staleWhileFetching
								);
							if (U.__returned === U) throw E;
						},
						g = (E, S) => {
							let I = this.#B?.(e, o, u);
							I &&
								I instanceof Promise &&
								I.then((C) => E(C === void 0 ? void 0 : C), S),
								s.signal.addEventListener('abort', () => {
									(!i.ignoreFetchAbort || i.allowStaleOnFetchAbort) &&
										(E(void 0),
										i.allowStaleOnFetchAbort && (E = (C) => c(C, !0)));
								});
						};
					i.status && (i.status.fetchDispatched = !0);
					let y = new Promise(g).then(c, h),
						w = Object.assign(y, {
							__abortController: s,
							__staleWhileFetching: o,
							__returned: void 0,
						});
					return (
						r === void 0
							? (this.set(e, w, { ...u.options, status: void 0 }),
							  (r = this.#n.get(e)))
							: (this.#e[r] = w),
						w
					);
				}
				#t(e) {
					if (!this.#I) return !1;
					let r = e;
					return (
						!!r &&
						r instanceof Promise &&
						r.hasOwnProperty('__staleWhileFetching') &&
						r.__abortController instanceof On
					);
				}
				async fetch(e, r = {}) {
					let {
						allowStale: i = this.allowStale,
						updateAgeOnGet: n = this.updateAgeOnGet,
						noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
						ttl: s = this.ttl,
						noDisposeOnSet: a = this.noDisposeOnSet,
						size: u = 0,
						sizeCalculation: c = this.sizeCalculation,
						noUpdateTTL: h = this.noUpdateTTL,
						noDeleteOnFetchRejection: d = this.noDeleteOnFetchRejection,
						allowStaleOnFetchRejection: g = this.allowStaleOnFetchRejection,
						ignoreFetchAbort: y = this.ignoreFetchAbort,
						allowStaleOnFetchAbort: w = this.allowStaleOnFetchAbort,
						context: E,
						forceRefresh: S = !1,
						status: I,
						signal: C,
					} = r;
					if (!this.#I)
						return (
							I && (I.fetch = 'get'),
							this.get(e, {
								allowStale: i,
								updateAgeOnGet: n,
								noDeleteOnStaleGet: o,
								status: I,
							})
						);
					let R = {
							allowStale: i,
							updateAgeOnGet: n,
							noDeleteOnStaleGet: o,
							ttl: s,
							noDisposeOnSet: a,
							size: u,
							sizeCalculation: c,
							noUpdateTTL: h,
							noDeleteOnFetchRejection: d,
							allowStaleOnFetchRejection: g,
							allowStaleOnFetchAbort: w,
							ignoreFetchAbort: y,
							status: I,
							signal: C,
						},
						U = this.#n.get(e);
					if (U === void 0) {
						I && (I.fetch = 'miss');
						let N = this.#k(e, U, R, E);
						return (N.__returned = N);
					} else {
						let N = this.#e[U];
						if (this.#t(N)) {
							let de = i && N.__staleWhileFetching !== void 0;
							return (
								I && ((I.fetch = 'inflight'), de && (I.returnedStale = !0)),
								de ? N.__staleWhileFetching : (N.__returned = N)
							);
						}
						let W = this.#d(U);
						if (!S && !W)
							return (
								I && (I.fetch = 'hit'),
								this.#C(U),
								n && this.#T(U),
								I && this.#A(I, U),
								N
							);
						let K = this.#k(e, U, R, E),
							Q = K.__staleWhileFetching !== void 0 && i;
						return (
							I &&
								((I.fetch = W ? 'stale' : 'refresh'),
								Q && W && (I.returnedStale = !0)),
							Q ? K.__staleWhileFetching : (K.__returned = K)
						);
					}
				}
				get(e, r = {}) {
					let {
							allowStale: i = this.allowStale,
							updateAgeOnGet: n = this.updateAgeOnGet,
							noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
							status: s,
						} = r,
						a = this.#n.get(e);
					if (a !== void 0) {
						let u = this.#e[a],
							c = this.#t(u);
						return (
							s && this.#A(s, a),
							this.#d(a)
								? (s && (s.get = 'stale'),
								  c
										? (s &&
												i &&
												u.__staleWhileFetching !== void 0 &&
												(s.returnedStale = !0),
										  i ? u.__staleWhileFetching : void 0)
										: (o || this.delete(e),
										  s && i && (s.returnedStale = !0),
										  i ? u : void 0))
								: (s && (s.get = 'hit'),
								  c ? u.__staleWhileFetching : (this.#C(a), n && this.#T(a), u))
						);
					} else s && (s.get = 'miss');
				}
				#N(e, r) {
					(this.#h[r] = e), (this.#u[e] = r);
				}
				#C(e) {
					e !== this.#s &&
						(e === this.#a ? (this.#a = this.#u[e]) : this.#N(this.#h[e], this.#u[e]),
						this.#N(this.#s, e),
						(this.#s = e));
				}
				delete(e) {
					let r = !1;
					if (this.#i !== 0) {
						let i = this.#n.get(e);
						if (i !== void 0)
							if (((r = !0), this.#i === 1)) this.clear();
							else {
								this.#R(i);
								let n = this.#e[i];
								this.#t(n)
									? n.__abortController.abort(new Error('deleted'))
									: (this.#_ || this.#f) &&
									  (this.#_ && this.#p?.(n, e, 'delete'),
									  this.#f && this.#o?.push([n, e, 'delete'])),
									this.#n.delete(e),
									(this.#r[i] = void 0),
									(this.#e[i] = void 0),
									i === this.#s
										? (this.#s = this.#h[i])
										: i === this.#a
										? (this.#a = this.#u[i])
										: ((this.#u[this.#h[i]] = this.#u[i]),
										  (this.#h[this.#u[i]] = this.#h[i])),
									this.#i--,
									this.#b.push(i);
							}
					}
					if (this.#f && this.#o?.length) {
						let i = this.#o,
							n;
						for (; (n = i?.shift()); ) this.#g?.(...n);
					}
					return r;
				}
				clear() {
					for (let e of this.#v({ allowStale: !0 })) {
						let r = this.#e[e];
						if (this.#t(r)) r.__abortController.abort(new Error('deleted'));
						else {
							let i = this.#r[e];
							this.#_ && this.#p?.(r, i, 'delete'),
								this.#f && this.#o?.push([r, i, 'delete']);
						}
					}
					if (
						(this.#n.clear(),
						this.#e.fill(void 0),
						this.#r.fill(void 0),
						this.#w && this.#S && (this.#w.fill(0), this.#S.fill(0)),
						this.#E && this.#E.fill(0),
						(this.#a = 0),
						(this.#s = 0),
						(this.#b.length = 0),
						(this.#y = 0),
						(this.#i = 0),
						this.#f && this.#o)
					) {
						let e = this.#o,
							r;
						for (; (r = e?.shift()); ) this.#g?.(...r);
					}
				}
			};
		kn.LRUCache = oa;
	});
	var lt = M((Ht) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Ht, 't', { value: !0 });
		Ht.ContainerIterator = Ht.Container = Ht.Base = void 0;
		var aa = class {
			constructor(e = 0) {
				this.iteratorType = e;
			}
			equals(e) {
				return this.o === e.o;
			}
		};
		Ht.ContainerIterator = aa;
		var xn = class {
			constructor() {
				this.i = 0;
			}
			get length() {
				return this.i;
			}
			size() {
				return this.i;
			}
			empty() {
				return this.i === 0;
			}
		};
		Ht.Base = xn;
		var la = class extends xn {};
		Ht.Container = la;
	});
	var ep = M((Mn) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Mn, 't', { value: !0 });
		Mn.default = void 0;
		var m1 = lt(),
			ua = class extends m1.Base {
				constructor(e = []) {
					super(), (this.S = []);
					let r = this;
					e.forEach(function (i) {
						r.push(i);
					});
				}
				clear() {
					(this.i = 0), (this.S = []);
				}
				push(e) {
					return this.S.push(e), (this.i += 1), this.i;
				}
				pop() {
					if (this.i !== 0) return (this.i -= 1), this.S.pop();
				}
				top() {
					return this.S[this.i - 1];
				}
			},
			v1 = ua;
		Mn.default = v1;
	});
	var tp = M((Ln) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Ln, 't', { value: !0 });
		Ln.default = void 0;
		var E1 = lt(),
			fa = class extends E1.Base {
				constructor(e = []) {
					super(), (this.j = 0), (this.q = []);
					let r = this;
					e.forEach(function (i) {
						r.push(i);
					});
				}
				clear() {
					(this.q = []), (this.i = this.j = 0);
				}
				push(e) {
					let r = this.q.length;
					if (this.j / r > 0.5 && this.j + this.i >= r && r > 4096) {
						let i = this.i;
						for (let n = 0; n < i; ++n) this.q[n] = this.q[this.j + n];
						(this.j = 0), (this.q[this.i] = e);
					} else this.q[this.j + this.i] = e;
					return ++this.i;
				}
				pop() {
					if (this.i === 0) return;
					let e = this.q[this.j++];
					return (this.i -= 1), e;
				}
				front() {
					if (this.i !== 0) return this.q[this.j];
				}
			},
			S1 = fa;
		Ln.default = S1;
	});
	var rp = M((Un) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Un, 't', { value: !0 });
		Un.default = void 0;
		var A1 = lt(),
			ca = class extends A1.Base {
				constructor(
					e = [],
					r = function (n, o) {
						return n > o ? -1 : n < o ? 1 : 0;
					},
					i = !0
				) {
					if ((super(), (this.v = r), Array.isArray(e))) this.C = i ? [...e] : e;
					else {
						this.C = [];
						let o = this;
						e.forEach(function (s) {
							o.C.push(s);
						});
					}
					this.i = this.C.length;
					let n = this.i >> 1;
					for (let o = (this.i - 1) >> 1; o >= 0; --o) this.k(o, n);
				}
				m(e) {
					let r = this.C[e];
					for (; e > 0; ) {
						let i = (e - 1) >> 1,
							n = this.C[i];
						if (this.v(n, r) <= 0) break;
						(this.C[e] = n), (e = i);
					}
					this.C[e] = r;
				}
				k(e, r) {
					let i = this.C[e];
					for (; e < r; ) {
						let n = (e << 1) | 1,
							o = n + 1,
							s = this.C[n];
						if (
							(o < this.i && this.v(s, this.C[o]) > 0 && ((n = o), (s = this.C[o])),
							this.v(s, i) >= 0)
						)
							break;
						(this.C[e] = s), (e = n);
					}
					this.C[e] = i;
				}
				clear() {
					(this.i = 0), (this.C.length = 0);
				}
				push(e) {
					this.C.push(e), this.m(this.i), (this.i += 1);
				}
				pop() {
					if (this.i === 0) return;
					let e = this.C[0],
						r = this.C.pop();
					return (this.i -= 1), this.i && ((this.C[0] = r), this.k(0, this.i >> 1)), e;
				}
				top() {
					return this.C[0];
				}
				find(e) {
					return this.C.indexOf(e) >= 0;
				}
				remove(e) {
					let r = this.C.indexOf(e);
					return r < 0
						? !1
						: (r === 0
								? this.pop()
								: r === this.i - 1
								? (this.C.pop(), (this.i -= 1))
								: (this.C.splice(r, 1, this.C.pop()),
								  (this.i -= 1),
								  this.m(r),
								  this.k(r, this.i >> 1)),
						  !0);
				}
				updateItem(e) {
					let r = this.C.indexOf(e);
					return r < 0 ? !1 : (this.m(r), this.k(r, this.i >> 1), !0);
				}
				toArray() {
					return [...this.C];
				}
			},
			I1 = ca;
		Un.default = I1;
	});
	var qn = M((Nn) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Nn, 't', { value: !0 });
		Nn.default = void 0;
		var T1 = lt(),
			ha = class extends T1.Container {},
			R1 = ha;
		Nn.default = R1;
	});
	var ut = M((da) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(da, 't', { value: !0 });
		da.throwIteratorAccessError = C1;
		function C1() {
			throw new RangeError('Iterator access denied!');
		}
	});
	var ga = M((jn) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(jn, 't', { value: !0 });
		jn.RandomIterator = void 0;
		var B1 = lt(),
			Dn = ut(),
			pa = class extends B1.ContainerIterator {
				constructor(e, r) {
					super(r),
						(this.o = e),
						this.iteratorType === 0
							? ((this.pre = function () {
									return (
										this.o === 0 && (0, Dn.throwIteratorAccessError)(),
										(this.o -= 1),
										this
									);
							  }),
							  (this.next = function () {
									return (
										this.o === this.container.size() &&
											(0, Dn.throwIteratorAccessError)(),
										(this.o += 1),
										this
									);
							  }))
							: ((this.pre = function () {
									return (
										this.o === this.container.size() - 1 &&
											(0, Dn.throwIteratorAccessError)(),
										(this.o += 1),
										this
									);
							  }),
							  (this.next = function () {
									return (
										this.o === -1 && (0, Dn.throwIteratorAccessError)(),
										(this.o -= 1),
										this
									);
							  }));
				}
				get pointer() {
					return this.container.getElementByPos(this.o);
				}
				set pointer(e) {
					this.container.setElementByPos(this.o, e);
				}
			};
		jn.RandomIterator = pa;
	});
	var ip = M((Fn) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Fn, 't', { value: !0 });
		Fn.default = void 0;
		var P1 = k1(qn()),
			O1 = ga();
		function k1(t) {
			return t && t.t ? t : { default: t };
		}
		var wr = class t extends O1.RandomIterator {
				constructor(e, r, i) {
					super(e, i), (this.container = r);
				}
				copy() {
					return new t(this.o, this.container, this.iteratorType);
				}
			},
			ya = class extends P1.default {
				constructor(e = [], r = !0) {
					if ((super(), Array.isArray(e))) (this.J = r ? [...e] : e), (this.i = e.length);
					else {
						this.J = [];
						let i = this;
						e.forEach(function (n) {
							i.pushBack(n);
						});
					}
				}
				clear() {
					(this.i = 0), (this.J.length = 0);
				}
				begin() {
					return new wr(0, this);
				}
				end() {
					return new wr(this.i, this);
				}
				rBegin() {
					return new wr(this.i - 1, this, 1);
				}
				rEnd() {
					return new wr(-1, this, 1);
				}
				front() {
					return this.J[0];
				}
				back() {
					return this.J[this.i - 1];
				}
				getElementByPos(e) {
					if (e < 0 || e > this.i - 1) throw new RangeError();
					return this.J[e];
				}
				eraseElementByPos(e) {
					if (e < 0 || e > this.i - 1) throw new RangeError();
					return this.J.splice(e, 1), (this.i -= 1), this.i;
				}
				eraseElementByValue(e) {
					let r = 0;
					for (let i = 0; i < this.i; ++i) this.J[i] !== e && (this.J[r++] = this.J[i]);
					return (this.i = this.J.length = r), this.i;
				}
				eraseElementByIterator(e) {
					let r = e.o;
					return (e = e.next()), this.eraseElementByPos(r), e;
				}
				pushBack(e) {
					return this.J.push(e), (this.i += 1), this.i;
				}
				popBack() {
					if (this.i !== 0) return (this.i -= 1), this.J.pop();
				}
				setElementByPos(e, r) {
					if (e < 0 || e > this.i - 1) throw new RangeError();
					this.J[e] = r;
				}
				insert(e, r, i = 1) {
					if (e < 0 || e > this.i) throw new RangeError();
					return this.J.splice(e, 0, ...new Array(i).fill(r)), (this.i += i), this.i;
				}
				find(e) {
					for (let r = 0; r < this.i; ++r) if (this.J[r] === e) return new wr(r, this);
					return this.end();
				}
				reverse() {
					this.J.reverse();
				}
				unique() {
					let e = 1;
					for (let r = 1; r < this.i; ++r)
						this.J[r] !== this.J[r - 1] && (this.J[e++] = this.J[r]);
					return (this.i = this.J.length = e), this.i;
				}
				sort(e) {
					this.J.sort(e);
				}
				forEach(e) {
					for (let r = 0; r < this.i; ++r) e(this.J[r], r, this);
				}
				[Symbol.iterator]() {
					return function* () {
						yield* this.J;
					}.bind(this)();
				}
			},
			x1 = ya;
		Fn.default = x1;
	});
	var np = M((Wn) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Wn, 't', { value: !0 });
		Wn.default = void 0;
		var M1 = U1(qn()),
			L1 = lt(),
			_r = ut();
		function U1(t) {
			return t && t.t ? t : { default: t };
		}
		var mr = class t extends L1.ContainerIterator {
				constructor(e, r, i, n) {
					super(n),
						(this.o = e),
						(this.h = r),
						(this.container = i),
						this.iteratorType === 0
							? ((this.pre = function () {
									return (
										this.o.L === this.h && (0, _r.throwIteratorAccessError)(),
										(this.o = this.o.L),
										this
									);
							  }),
							  (this.next = function () {
									return (
										this.o === this.h && (0, _r.throwIteratorAccessError)(),
										(this.o = this.o.B),
										this
									);
							  }))
							: ((this.pre = function () {
									return (
										this.o.B === this.h && (0, _r.throwIteratorAccessError)(),
										(this.o = this.o.B),
										this
									);
							  }),
							  (this.next = function () {
									return (
										this.o === this.h && (0, _r.throwIteratorAccessError)(),
										(this.o = this.o.L),
										this
									);
							  }));
				}
				get pointer() {
					return this.o === this.h && (0, _r.throwIteratorAccessError)(), this.o.l;
				}
				set pointer(e) {
					this.o === this.h && (0, _r.throwIteratorAccessError)(), (this.o.l = e);
				}
				copy() {
					return new t(this.o, this.h, this.container, this.iteratorType);
				}
			},
			ba = class extends M1.default {
				constructor(e = []) {
					super(), (this.h = {}), (this.p = this._ = this.h.L = this.h.B = this.h);
					let r = this;
					e.forEach(function (i) {
						r.pushBack(i);
					});
				}
				V(e) {
					let { L: r, B: i } = e;
					(r.B = i),
						(i.L = r),
						e === this.p && (this.p = i),
						e === this._ && (this._ = r),
						(this.i -= 1);
				}
				G(e, r) {
					let i = r.B,
						n = { l: e, L: r, B: i };
					(r.B = n),
						(i.L = n),
						r === this.h && (this.p = n),
						i === this.h && (this._ = n),
						(this.i += 1);
				}
				clear() {
					(this.i = 0), (this.p = this._ = this.h.L = this.h.B = this.h);
				}
				begin() {
					return new mr(this.p, this.h, this);
				}
				end() {
					return new mr(this.h, this.h, this);
				}
				rBegin() {
					return new mr(this._, this.h, this, 1);
				}
				rEnd() {
					return new mr(this.h, this.h, this, 1);
				}
				front() {
					return this.p.l;
				}
				back() {
					return this._.l;
				}
				getElementByPos(e) {
					if (e < 0 || e > this.i - 1) throw new RangeError();
					let r = this.p;
					for (; e--; ) r = r.B;
					return r.l;
				}
				eraseElementByPos(e) {
					if (e < 0 || e > this.i - 1) throw new RangeError();
					let r = this.p;
					for (; e--; ) r = r.B;
					return this.V(r), this.i;
				}
				eraseElementByValue(e) {
					let r = this.p;
					for (; r !== this.h; ) r.l === e && this.V(r), (r = r.B);
					return this.i;
				}
				eraseElementByIterator(e) {
					let r = e.o;
					return (
						r === this.h && (0, _r.throwIteratorAccessError)(),
						(e = e.next()),
						this.V(r),
						e
					);
				}
				pushBack(e) {
					return this.G(e, this._), this.i;
				}
				popBack() {
					if (this.i === 0) return;
					let e = this._.l;
					return this.V(this._), e;
				}
				pushFront(e) {
					return this.G(e, this.h), this.i;
				}
				popFront() {
					if (this.i === 0) return;
					let e = this.p.l;
					return this.V(this.p), e;
				}
				setElementByPos(e, r) {
					if (e < 0 || e > this.i - 1) throw new RangeError();
					let i = this.p;
					for (; e--; ) i = i.B;
					i.l = r;
				}
				insert(e, r, i = 1) {
					if (e < 0 || e > this.i) throw new RangeError();
					if (i <= 0) return this.i;
					if (e === 0) for (; i--; ) this.pushFront(r);
					else if (e === this.i) for (; i--; ) this.pushBack(r);
					else {
						let n = this.p;
						for (let s = 1; s < e; ++s) n = n.B;
						let o = n.B;
						for (this.i += i; i--; ) (n.B = { l: r, L: n }), (n.B.L = n), (n = n.B);
						(n.B = o), (o.L = n);
					}
					return this.i;
				}
				find(e) {
					let r = this.p;
					for (; r !== this.h; ) {
						if (r.l === e) return new mr(r, this.h, this);
						r = r.B;
					}
					return this.end();
				}
				reverse() {
					if (this.i <= 1) return;
					let e = this.p,
						r = this._,
						i = 0;
					for (; i << 1 < this.i; ) {
						let n = e.l;
						(e.l = r.l), (r.l = n), (e = e.B), (r = r.L), (i += 1);
					}
				}
				unique() {
					if (this.i <= 1) return this.i;
					let e = this.p;
					for (; e !== this.h; ) {
						let r = e;
						for (; r.B !== this.h && r.l === r.B.l; ) (r = r.B), (this.i -= 1);
						(e.B = r.B), (e.B.L = e), (e = e.B);
					}
					return this.i;
				}
				sort(e) {
					if (this.i <= 1) return;
					let r = [];
					this.forEach(function (n) {
						r.push(n);
					}),
						r.sort(e);
					let i = this.p;
					r.forEach(function (n) {
						(i.l = n), (i = i.B);
					});
				}
				merge(e) {
					let r = this;
					if (this.i === 0)
						e.forEach(function (i) {
							r.pushBack(i);
						});
					else {
						let i = this.p;
						e.forEach(function (n) {
							for (; i !== r.h && i.l <= n; ) i = i.B;
							r.G(n, i.L);
						});
					}
					return this.i;
				}
				forEach(e) {
					let r = this.p,
						i = 0;
					for (; r !== this.h; ) e(r.l, i++, this), (r = r.B);
				}
				[Symbol.iterator]() {
					return function* () {
						if (this.i === 0) return;
						let e = this.p;
						for (; e !== this.h; ) yield e.l, (e = e.B);
					}.bind(this)();
				}
			},
			N1 = ba;
		Wn.default = N1;
	});
	var sp = M(($n) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty($n, 't', { value: !0 });
		$n.default = void 0;
		var q1 = j1(qn()),
			D1 = ga();
		function j1(t) {
			return t && t.t ? t : { default: t };
		}
		var vr = class t extends D1.RandomIterator {
				constructor(e, r, i) {
					super(e, i), (this.container = r);
				}
				copy() {
					return new t(this.o, this.container, this.iteratorType);
				}
			},
			wa = class extends q1.default {
				constructor(e = [], r = 4096) {
					super(),
						(this.j = 0),
						(this.D = 0),
						(this.R = 0),
						(this.N = 0),
						(this.P = 0),
						(this.A = []);
					let i = (() => {
						if (typeof e.length == 'number') return e.length;
						if (typeof e.size == 'number') return e.size;
						if (typeof e.size == 'function') return e.size();
						throw new TypeError('Cannot get the length or size of the container');
					})();
					(this.F = r), (this.P = Math.max(Math.ceil(i / this.F), 1));
					for (let s = 0; s < this.P; ++s) this.A.push(new Array(this.F));
					let n = Math.ceil(i / this.F);
					(this.j = this.R = (this.P >> 1) - (n >> 1)),
						(this.D = this.N = (this.F - (i % this.F)) >> 1);
					let o = this;
					e.forEach(function (s) {
						o.pushBack(s);
					});
				}
				T() {
					let e = [],
						r = Math.max(this.P >> 1, 1);
					for (let i = 0; i < r; ++i) e[i] = new Array(this.F);
					for (let i = this.j; i < this.P; ++i) e[e.length] = this.A[i];
					for (let i = 0; i < this.R; ++i) e[e.length] = this.A[i];
					(e[e.length] = [...this.A[this.R]]), (this.j = r), (this.R = e.length - 1);
					for (let i = 0; i < r; ++i) e[e.length] = new Array(this.F);
					(this.A = e), (this.P = e.length);
				}
				O(e) {
					let r = this.D + e + 1,
						i = r % this.F,
						n = i - 1,
						o = this.j + (r - i) / this.F;
					return (
						i === 0 && (o -= 1),
						(o %= this.P),
						n < 0 && (n += this.F),
						{ curNodeBucketIndex: o, curNodePointerIndex: n }
					);
				}
				clear() {
					(this.A = [new Array(this.F)]),
						(this.P = 1),
						(this.j = this.R = this.i = 0),
						(this.D = this.N = this.F >> 1);
				}
				begin() {
					return new vr(0, this);
				}
				end() {
					return new vr(this.i, this);
				}
				rBegin() {
					return new vr(this.i - 1, this, 1);
				}
				rEnd() {
					return new vr(-1, this, 1);
				}
				front() {
					if (this.i !== 0) return this.A[this.j][this.D];
				}
				back() {
					if (this.i !== 0) return this.A[this.R][this.N];
				}
				pushBack(e) {
					return (
						this.i &&
							(this.N < this.F - 1
								? (this.N += 1)
								: this.R < this.P - 1
								? ((this.R += 1), (this.N = 0))
								: ((this.R = 0), (this.N = 0)),
							this.R === this.j && this.N === this.D && this.T()),
						(this.i += 1),
						(this.A[this.R][this.N] = e),
						this.i
					);
				}
				popBack() {
					if (this.i === 0) return;
					let e = this.A[this.R][this.N];
					return (
						this.i !== 1 &&
							(this.N > 0
								? (this.N -= 1)
								: this.R > 0
								? ((this.R -= 1), (this.N = this.F - 1))
								: ((this.R = this.P - 1), (this.N = this.F - 1))),
						(this.i -= 1),
						e
					);
				}
				pushFront(e) {
					return (
						this.i &&
							(this.D > 0
								? (this.D -= 1)
								: this.j > 0
								? ((this.j -= 1), (this.D = this.F - 1))
								: ((this.j = this.P - 1), (this.D = this.F - 1)),
							this.j === this.R && this.D === this.N && this.T()),
						(this.i += 1),
						(this.A[this.j][this.D] = e),
						this.i
					);
				}
				popFront() {
					if (this.i === 0) return;
					let e = this.A[this.j][this.D];
					return (
						this.i !== 1 &&
							(this.D < this.F - 1
								? (this.D += 1)
								: this.j < this.P - 1
								? ((this.j += 1), (this.D = 0))
								: ((this.j = 0), (this.D = 0))),
						(this.i -= 1),
						e
					);
				}
				getElementByPos(e) {
					if (e < 0 || e > this.i - 1) throw new RangeError();
					let { curNodeBucketIndex: r, curNodePointerIndex: i } = this.O(e);
					return this.A[r][i];
				}
				setElementByPos(e, r) {
					if (e < 0 || e > this.i - 1) throw new RangeError();
					let { curNodeBucketIndex: i, curNodePointerIndex: n } = this.O(e);
					this.A[i][n] = r;
				}
				insert(e, r, i = 1) {
					if (e < 0 || e > this.i) throw new RangeError();
					if (e === 0) for (; i--; ) this.pushFront(r);
					else if (e === this.i) for (; i--; ) this.pushBack(r);
					else {
						let n = [];
						for (let o = e; o < this.i; ++o) n.push(this.getElementByPos(o));
						this.cut(e - 1);
						for (let o = 0; o < i; ++o) this.pushBack(r);
						for (let o = 0; o < n.length; ++o) this.pushBack(n[o]);
					}
					return this.i;
				}
				cut(e) {
					if (e < 0) return this.clear(), 0;
					let { curNodeBucketIndex: r, curNodePointerIndex: i } = this.O(e);
					return (this.R = r), (this.N = i), (this.i = e + 1), this.i;
				}
				eraseElementByPos(e) {
					if (e < 0 || e > this.i - 1) throw new RangeError();
					if (e === 0) this.popFront();
					else if (e === this.i - 1) this.popBack();
					else {
						let r = [];
						for (let n = e + 1; n < this.i; ++n) r.push(this.getElementByPos(n));
						this.cut(e), this.popBack();
						let i = this;
						r.forEach(function (n) {
							i.pushBack(n);
						});
					}
					return this.i;
				}
				eraseElementByValue(e) {
					if (this.i === 0) return 0;
					let r = [];
					for (let n = 0; n < this.i; ++n) {
						let o = this.getElementByPos(n);
						o !== e && r.push(o);
					}
					let i = r.length;
					for (let n = 0; n < i; ++n) this.setElementByPos(n, r[n]);
					return this.cut(i - 1);
				}
				eraseElementByIterator(e) {
					let r = e.o;
					return this.eraseElementByPos(r), (e = e.next()), e;
				}
				find(e) {
					for (let r = 0; r < this.i; ++r)
						if (this.getElementByPos(r) === e) return new vr(r, this);
					return this.end();
				}
				reverse() {
					let e = 0,
						r = this.i - 1;
					for (; e < r; ) {
						let i = this.getElementByPos(e);
						this.setElementByPos(e, this.getElementByPos(r)),
							this.setElementByPos(r, i),
							(e += 1),
							(r -= 1);
					}
				}
				unique() {
					if (this.i <= 1) return this.i;
					let e = 1,
						r = this.getElementByPos(0);
					for (let i = 1; i < this.i; ++i) {
						let n = this.getElementByPos(i);
						n !== r && ((r = n), this.setElementByPos(e++, n));
					}
					for (; this.i > e; ) this.popBack();
					return this.i;
				}
				sort(e) {
					let r = [];
					for (let i = 0; i < this.i; ++i) r.push(this.getElementByPos(i));
					r.sort(e);
					for (let i = 0; i < this.i; ++i) this.setElementByPos(i, r[i]);
				}
				shrinkToFit() {
					if (this.i === 0) return;
					let e = [];
					this.forEach(function (r) {
						e.push(r);
					}),
						(this.P = Math.max(Math.ceil(this.i / this.F), 1)),
						(this.i = this.j = this.R = this.D = this.N = 0),
						(this.A = []);
					for (let r = 0; r < this.P; ++r) this.A.push(new Array(this.F));
					for (let r = 0; r < e.length; ++r) this.pushBack(e[r]);
				}
				forEach(e) {
					for (let r = 0; r < this.i; ++r) e(this.getElementByPos(r), r, this);
				}
				[Symbol.iterator]() {
					return function* () {
						for (let e = 0; e < this.i; ++e) yield this.getElementByPos(e);
					}.bind(this)();
				}
			},
			F1 = wa;
		$n.default = F1;
	});
	var op = M((Zr) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Zr, 't', { value: !0 });
		Zr.TreeNodeEnableIndex = Zr.TreeNode = void 0;
		var Hn = class {
			constructor(e, r) {
				(this.ee = 1),
					(this.u = void 0),
					(this.l = void 0),
					(this.U = void 0),
					(this.W = void 0),
					(this.tt = void 0),
					(this.u = e),
					(this.l = r);
			}
			L() {
				let e = this;
				if (e.ee === 1 && e.tt.tt === e) e = e.W;
				else if (e.U) for (e = e.U; e.W; ) e = e.W;
				else {
					let r = e.tt;
					for (; r.U === e; ) (e = r), (r = e.tt);
					e = r;
				}
				return e;
			}
			B() {
				let e = this;
				if (e.W) {
					for (e = e.W; e.U; ) e = e.U;
					return e;
				} else {
					let r = e.tt;
					for (; r.W === e; ) (e = r), (r = e.tt);
					return e.W !== r ? r : e;
				}
			}
			te() {
				let e = this.tt,
					r = this.W,
					i = r.U;
				return (
					e.tt === this ? (e.tt = r) : e.U === this ? (e.U = r) : (e.W = r),
					(r.tt = e),
					(r.U = this),
					(this.tt = r),
					(this.W = i),
					i && (i.tt = this),
					r
				);
			}
			se() {
				let e = this.tt,
					r = this.U,
					i = r.W;
				return (
					e.tt === this ? (e.tt = r) : e.U === this ? (e.U = r) : (e.W = r),
					(r.tt = e),
					(r.W = this),
					(this.tt = r),
					(this.U = i),
					i && (i.tt = this),
					r
				);
			}
		};
		Zr.TreeNode = Hn;
		var _a = class extends Hn {
			constructor() {
				super(...arguments), (this.rt = 1);
			}
			te() {
				let e = super.te();
				return this.ie(), e.ie(), e;
			}
			se() {
				let e = super.se();
				return this.ie(), e.ie(), e;
			}
			ie() {
				(this.rt = 1), this.U && (this.rt += this.U.rt), this.W && (this.rt += this.W.rt);
			}
		};
		Zr.TreeNodeEnableIndex = _a;
	});
	var va = M((Vn) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Vn, 't', { value: !0 });
		Vn.default = void 0;
		var ap = op(),
			W1 = lt(),
			lp = ut(),
			ma = class extends W1.Container {
				constructor(
					e = function (i, n) {
						return i < n ? -1 : i > n ? 1 : 0;
					},
					r = !1
				) {
					super(),
						(this.Y = void 0),
						(this.v = e),
						r
							? ((this.re = ap.TreeNodeEnableIndex),
							  (this.M = function (i, n, o) {
									let s = this.ne(i, n, o);
									if (s) {
										let a = s.tt;
										for (; a !== this.h; ) (a.rt += 1), (a = a.tt);
										let u = this.he(s);
										if (u) {
											let { parentNode: c, grandParent: h, curNode: d } = u;
											c.ie(), h.ie(), d.ie();
										}
									}
									return this.i;
							  }),
							  (this.V = function (i) {
									let n = this.fe(i);
									for (; n !== this.h; ) (n.rt -= 1), (n = n.tt);
							  }))
							: ((this.re = ap.TreeNode),
							  (this.M = function (i, n, o) {
									let s = this.ne(i, n, o);
									return s && this.he(s), this.i;
							  }),
							  (this.V = this.fe)),
						(this.h = new this.re());
				}
				X(e, r) {
					let i = this.h;
					for (; e; ) {
						let n = this.v(e.u, r);
						if (n < 0) e = e.W;
						else if (n > 0) (i = e), (e = e.U);
						else return e;
					}
					return i;
				}
				Z(e, r) {
					let i = this.h;
					for (; e; ) this.v(e.u, r) <= 0 ? (e = e.W) : ((i = e), (e = e.U));
					return i;
				}
				$(e, r) {
					let i = this.h;
					for (; e; ) {
						let n = this.v(e.u, r);
						if (n < 0) (i = e), (e = e.W);
						else if (n > 0) e = e.U;
						else return e;
					}
					return i;
				}
				rr(e, r) {
					let i = this.h;
					for (; e; ) this.v(e.u, r) < 0 ? ((i = e), (e = e.W)) : (e = e.U);
					return i;
				}
				ue(e) {
					for (;;) {
						let r = e.tt;
						if (r === this.h) return;
						if (e.ee === 1) {
							e.ee = 0;
							return;
						}
						if (e === r.U) {
							let i = r.W;
							if (i.ee === 1)
								(i.ee = 0), (r.ee = 1), r === this.Y ? (this.Y = r.te()) : r.te();
							else if (i.W && i.W.ee === 1) {
								(i.ee = r.ee),
									(r.ee = 0),
									(i.W.ee = 0),
									r === this.Y ? (this.Y = r.te()) : r.te();
								return;
							} else
								i.U && i.U.ee === 1
									? ((i.ee = 1), (i.U.ee = 0), i.se())
									: ((i.ee = 1), (e = r));
						} else {
							let i = r.U;
							if (i.ee === 1)
								(i.ee = 0), (r.ee = 1), r === this.Y ? (this.Y = r.se()) : r.se();
							else if (i.U && i.U.ee === 1) {
								(i.ee = r.ee),
									(r.ee = 0),
									(i.U.ee = 0),
									r === this.Y ? (this.Y = r.se()) : r.se();
								return;
							} else
								i.W && i.W.ee === 1
									? ((i.ee = 1), (i.W.ee = 0), i.te())
									: ((i.ee = 1), (e = r));
						}
					}
				}
				fe(e) {
					if (this.i === 1) return this.clear(), this.h;
					let r = e;
					for (; r.U || r.W; ) {
						if (r.W) for (r = r.W; r.U; ) r = r.U;
						else r = r.U;
						([e.u, r.u] = [r.u, e.u]), ([e.l, r.l] = [r.l, e.l]), (e = r);
					}
					this.h.U === r ? (this.h.U = r.tt) : this.h.W === r && (this.h.W = r.tt),
						this.ue(r);
					let i = r.tt;
					return (
						r === i.U ? (i.U = void 0) : (i.W = void 0),
						(this.i -= 1),
						(this.Y.ee = 0),
						i
					);
				}
				oe(e, r) {
					return e === void 0 ? !1 : this.oe(e.U, r) || r(e) ? !0 : this.oe(e.W, r);
				}
				he(e) {
					for (;;) {
						let r = e.tt;
						if (r.ee === 0) return;
						let i = r.tt;
						if (r === i.U) {
							let n = i.W;
							if (n && n.ee === 1) {
								if (((n.ee = r.ee = 0), i === this.Y)) return;
								(i.ee = 1), (e = i);
								continue;
							} else if (e === r.W) {
								if (
									((e.ee = 0),
									e.U && (e.U.tt = r),
									e.W && (e.W.tt = i),
									(r.W = e.U),
									(i.U = e.W),
									(e.U = r),
									(e.W = i),
									i === this.Y)
								)
									(this.Y = e), (this.h.tt = e);
								else {
									let o = i.tt;
									o.U === i ? (o.U = e) : (o.W = e);
								}
								return (
									(e.tt = i.tt),
									(r.tt = e),
									(i.tt = e),
									(i.ee = 1),
									{ parentNode: r, grandParent: i, curNode: e }
								);
							} else
								(r.ee = 0), i === this.Y ? (this.Y = i.se()) : i.se(), (i.ee = 1);
						} else {
							let n = i.U;
							if (n && n.ee === 1) {
								if (((n.ee = r.ee = 0), i === this.Y)) return;
								(i.ee = 1), (e = i);
								continue;
							} else if (e === r.U) {
								if (
									((e.ee = 0),
									e.U && (e.U.tt = i),
									e.W && (e.W.tt = r),
									(i.W = e.U),
									(r.U = e.W),
									(e.U = i),
									(e.W = r),
									i === this.Y)
								)
									(this.Y = e), (this.h.tt = e);
								else {
									let o = i.tt;
									o.U === i ? (o.U = e) : (o.W = e);
								}
								return (
									(e.tt = i.tt),
									(r.tt = e),
									(i.tt = e),
									(i.ee = 1),
									{ parentNode: r, grandParent: i, curNode: e }
								);
							} else
								(r.ee = 0), i === this.Y ? (this.Y = i.te()) : i.te(), (i.ee = 1);
						}
						return;
					}
				}
				ne(e, r, i) {
					if (this.Y === void 0) {
						(this.i += 1),
							(this.Y = new this.re(e, r)),
							(this.Y.ee = 0),
							(this.Y.tt = this.h),
							(this.h.tt = this.Y),
							(this.h.U = this.Y),
							(this.h.W = this.Y);
						return;
					}
					let n,
						o = this.h.U,
						s = this.v(o.u, e);
					if (s === 0) {
						o.l = r;
						return;
					} else if (s > 0)
						(o.U = new this.re(e, r)), (o.U.tt = o), (n = o.U), (this.h.U = n);
					else {
						let a = this.h.W,
							u = this.v(a.u, e);
						if (u === 0) {
							a.l = r;
							return;
						} else if (u < 0)
							(a.W = new this.re(e, r)), (a.W.tt = a), (n = a.W), (this.h.W = n);
						else {
							if (i !== void 0) {
								let c = i.o;
								if (c !== this.h) {
									let h = this.v(c.u, e);
									if (h === 0) {
										c.l = r;
										return;
									} else if (h > 0) {
										let d = c.L(),
											g = this.v(d.u, e);
										if (g === 0) {
											d.l = r;
											return;
										} else
											g < 0 &&
												((n = new this.re(e, r)),
												d.W === void 0
													? ((d.W = n), (n.tt = d))
													: ((c.U = n), (n.tt = c)));
									}
								}
							}
							if (n === void 0)
								for (n = this.Y; ; ) {
									let c = this.v(n.u, e);
									if (c > 0) {
										if (n.U === void 0) {
											(n.U = new this.re(e, r)), (n.U.tt = n), (n = n.U);
											break;
										}
										n = n.U;
									} else if (c < 0) {
										if (n.W === void 0) {
											(n.W = new this.re(e, r)), (n.W.tt = n), (n = n.W);
											break;
										}
										n = n.W;
									} else {
										n.l = r;
										return;
									}
								}
						}
					}
					return (this.i += 1), n;
				}
				I(e, r) {
					for (; e; ) {
						let i = this.v(e.u, r);
						if (i < 0) e = e.W;
						else if (i > 0) e = e.U;
						else return e;
					}
					return e || this.h;
				}
				clear() {
					(this.i = 0),
						(this.Y = void 0),
						(this.h.tt = void 0),
						(this.h.U = this.h.W = void 0);
				}
				updateKeyByIterator(e, r) {
					let i = e.o;
					if ((i === this.h && (0, lp.throwIteratorAccessError)(), this.i === 1))
						return (i.u = r), !0;
					if (i === this.h.U) return this.v(i.B().u, r) > 0 ? ((i.u = r), !0) : !1;
					if (i === this.h.W) return this.v(i.L().u, r) < 0 ? ((i.u = r), !0) : !1;
					let n = i.L().u;
					if (this.v(n, r) >= 0) return !1;
					let o = i.B().u;
					return this.v(o, r) <= 0 ? !1 : ((i.u = r), !0);
				}
				eraseElementByPos(e) {
					if (e < 0 || e > this.i - 1) throw new RangeError();
					let r = 0,
						i = this;
					return (
						this.oe(this.Y, function (n) {
							return e === r ? (i.V(n), !0) : ((r += 1), !1);
						}),
						this.i
					);
				}
				eraseElementByKey(e) {
					if (this.i === 0) return !1;
					let r = this.I(this.Y, e);
					return r === this.h ? !1 : (this.V(r), !0);
				}
				eraseElementByIterator(e) {
					let r = e.o;
					r === this.h && (0, lp.throwIteratorAccessError)();
					let i = r.W === void 0;
					return (
						e.iteratorType === 0 ? i && e.next() : (!i || r.U === void 0) && e.next(),
						this.V(r),
						e
					);
				}
				forEach(e) {
					let r = 0;
					for (let i of this) e(i, r++, this);
				}
				getElementByPos(e) {
					if (e < 0 || e > this.i - 1) throw new RangeError();
					let r,
						i = 0;
					for (let n of this) {
						if (i === e) {
							r = n;
							break;
						}
						i += 1;
					}
					return r;
				}
				getHeight() {
					if (this.i === 0) return 0;
					let e = function (r) {
						return r ? Math.max(e(r.U), e(r.W)) + 1 : 0;
					};
					return e(this.Y);
				}
			},
			$1 = ma;
		Vn.default = $1;
	});
	var Sa = M((Kn) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Kn, 't', { value: !0 });
		Kn.default = void 0;
		var H1 = lt(),
			zn = ut(),
			Ea = class extends H1.ContainerIterator {
				constructor(e, r, i) {
					super(i),
						(this.o = e),
						(this.h = r),
						this.iteratorType === 0
							? ((this.pre = function () {
									return (
										this.o === this.h.U && (0, zn.throwIteratorAccessError)(),
										(this.o = this.o.L()),
										this
									);
							  }),
							  (this.next = function () {
									return (
										this.o === this.h && (0, zn.throwIteratorAccessError)(),
										(this.o = this.o.B()),
										this
									);
							  }))
							: ((this.pre = function () {
									return (
										this.o === this.h.W && (0, zn.throwIteratorAccessError)(),
										(this.o = this.o.B()),
										this
									);
							  }),
							  (this.next = function () {
									return (
										this.o === this.h && (0, zn.throwIteratorAccessError)(),
										(this.o = this.o.L()),
										this
									);
							  }));
				}
				get index() {
					let e = this.o,
						r = this.h.tt;
					if (e === this.h) return r ? r.rt - 1 : 0;
					let i = 0;
					for (e.U && (i += e.U.rt); e !== r; ) {
						let n = e.tt;
						e === n.W && ((i += 1), n.U && (i += n.U.rt)), (e = n);
					}
					return i;
				}
			},
			V1 = Ea;
		Kn.default = V1;
	});
	var fp = M((Gn) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Gn, 't', { value: !0 });
		Gn.default = void 0;
		var z1 = up(va()),
			K1 = up(Sa()),
			G1 = ut();
		function up(t) {
			return t && t.t ? t : { default: t };
		}
		var Ke = class t extends K1.default {
				constructor(e, r, i, n) {
					super(e, r, n), (this.container = i);
				}
				get pointer() {
					return this.o === this.h && (0, G1.throwIteratorAccessError)(), this.o.u;
				}
				copy() {
					return new t(this.o, this.h, this.container, this.iteratorType);
				}
			},
			Aa = class extends z1.default {
				constructor(e = [], r, i) {
					super(r, i);
					let n = this;
					e.forEach(function (o) {
						n.insert(o);
					});
				}
				*K(e) {
					e !== void 0 && (yield* this.K(e.U), yield e.u, yield* this.K(e.W));
				}
				begin() {
					return new Ke(this.h.U || this.h, this.h, this);
				}
				end() {
					return new Ke(this.h, this.h, this);
				}
				rBegin() {
					return new Ke(this.h.W || this.h, this.h, this, 1);
				}
				rEnd() {
					return new Ke(this.h, this.h, this, 1);
				}
				front() {
					return this.h.U ? this.h.U.u : void 0;
				}
				back() {
					return this.h.W ? this.h.W.u : void 0;
				}
				insert(e, r) {
					return this.M(e, void 0, r);
				}
				find(e) {
					let r = this.I(this.Y, e);
					return new Ke(r, this.h, this);
				}
				lowerBound(e) {
					let r = this.X(this.Y, e);
					return new Ke(r, this.h, this);
				}
				upperBound(e) {
					let r = this.Z(this.Y, e);
					return new Ke(r, this.h, this);
				}
				reverseLowerBound(e) {
					let r = this.$(this.Y, e);
					return new Ke(r, this.h, this);
				}
				reverseUpperBound(e) {
					let r = this.rr(this.Y, e);
					return new Ke(r, this.h, this);
				}
				union(e) {
					let r = this;
					return (
						e.forEach(function (i) {
							r.insert(i);
						}),
						this.i
					);
				}
				[Symbol.iterator]() {
					return this.K(this.Y);
				}
			},
			Q1 = Aa;
		Gn.default = Q1;
	});
	var hp = M((Qn) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Qn, 't', { value: !0 });
		Qn.default = void 0;
		var Y1 = cp(va()),
			J1 = cp(Sa()),
			X1 = ut();
		function cp(t) {
			return t && t.t ? t : { default: t };
		}
		var Ge = class t extends J1.default {
				constructor(e, r, i, n) {
					super(e, r, n), (this.container = i);
				}
				get pointer() {
					this.o === this.h && (0, X1.throwIteratorAccessError)();
					let e = this;
					return new Proxy([], {
						get(r, i) {
							if (i === '0') return e.o.u;
							if (i === '1') return e.o.l;
						},
						set(r, i, n) {
							if (i !== '1') throw new TypeError('props must be 1');
							return (e.o.l = n), !0;
						},
					});
				}
				copy() {
					return new t(this.o, this.h, this.container, this.iteratorType);
				}
			},
			Ia = class extends Y1.default {
				constructor(e = [], r, i) {
					super(r, i);
					let n = this;
					e.forEach(function (o) {
						n.setElement(o[0], o[1]);
					});
				}
				*K(e) {
					e !== void 0 && (yield* this.K(e.U), yield [e.u, e.l], yield* this.K(e.W));
				}
				begin() {
					return new Ge(this.h.U || this.h, this.h, this);
				}
				end() {
					return new Ge(this.h, this.h, this);
				}
				rBegin() {
					return new Ge(this.h.W || this.h, this.h, this, 1);
				}
				rEnd() {
					return new Ge(this.h, this.h, this, 1);
				}
				front() {
					if (this.i === 0) return;
					let e = this.h.U;
					return [e.u, e.l];
				}
				back() {
					if (this.i === 0) return;
					let e = this.h.W;
					return [e.u, e.l];
				}
				lowerBound(e) {
					let r = this.X(this.Y, e);
					return new Ge(r, this.h, this);
				}
				upperBound(e) {
					let r = this.Z(this.Y, e);
					return new Ge(r, this.h, this);
				}
				reverseLowerBound(e) {
					let r = this.$(this.Y, e);
					return new Ge(r, this.h, this);
				}
				reverseUpperBound(e) {
					let r = this.rr(this.Y, e);
					return new Ge(r, this.h, this);
				}
				setElement(e, r, i) {
					return this.M(e, r, i);
				}
				find(e) {
					let r = this.I(this.Y, e);
					return new Ge(r, this.h, this);
				}
				getElementByKey(e) {
					return this.I(this.Y, e).l;
				}
				union(e) {
					let r = this;
					return (
						e.forEach(function (i) {
							r.setElement(i[0], i[1]);
						}),
						this.i
					);
				}
				[Symbol.iterator]() {
					return this.K(this.Y);
				}
			},
			Z1 = Ia;
		Qn.default = Z1;
	});
	var Ra = M((Ta) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Ta, 't', { value: !0 });
		Ta.default = ev;
		function ev(t) {
			let e = typeof t;
			return (e === 'object' && t !== null) || e === 'function';
		}
	});
	var Oa = M((ei) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(ei, 't', { value: !0 });
		ei.HashContainerIterator = ei.HashContainer = void 0;
		var dp = lt(),
			Ca = tv(Ra()),
			Ti = ut();
		function tv(t) {
			return t && t.t ? t : { default: t };
		}
		var Ba = class extends dp.ContainerIterator {
			constructor(e, r, i) {
				super(i),
					(this.o = e),
					(this.h = r),
					this.iteratorType === 0
						? ((this.pre = function () {
								return (
									this.o.L === this.h && (0, Ti.throwIteratorAccessError)(),
									(this.o = this.o.L),
									this
								);
						  }),
						  (this.next = function () {
								return (
									this.o === this.h && (0, Ti.throwIteratorAccessError)(),
									(this.o = this.o.B),
									this
								);
						  }))
						: ((this.pre = function () {
								return (
									this.o.B === this.h && (0, Ti.throwIteratorAccessError)(),
									(this.o = this.o.B),
									this
								);
						  }),
						  (this.next = function () {
								return (
									this.o === this.h && (0, Ti.throwIteratorAccessError)(),
									(this.o = this.o.L),
									this
								);
						  }));
			}
		};
		ei.HashContainerIterator = Ba;
		var Pa = class extends dp.Container {
			constructor() {
				super(),
					(this.H = []),
					(this.g = {}),
					(this.HASH_TAG = Symbol('@@HASH_TAG')),
					Object.setPrototypeOf(this.g, null),
					(this.h = {}),
					(this.h.L = this.h.B = this.p = this._ = this.h);
			}
			V(e) {
				let { L: r, B: i } = e;
				(r.B = i),
					(i.L = r),
					e === this.p && (this.p = i),
					e === this._ && (this._ = r),
					(this.i -= 1);
			}
			M(e, r, i) {
				i === void 0 && (i = (0, Ca.default)(e));
				let n;
				if (i) {
					let o = e[this.HASH_TAG];
					if (o !== void 0) return (this.H[o].l = r), this.i;
					Object.defineProperty(e, this.HASH_TAG, {
						value: this.H.length,
						configurable: !0,
					}),
						(n = { u: e, l: r, L: this._, B: this.h }),
						this.H.push(n);
				} else {
					let o = this.g[e];
					if (o) return (o.l = r), this.i;
					(n = { u: e, l: r, L: this._, B: this.h }), (this.g[e] = n);
				}
				return (
					this.i === 0 ? ((this.p = n), (this.h.B = n)) : (this._.B = n),
					(this._ = n),
					(this.h.L = n),
					++this.i
				);
			}
			I(e, r) {
				if ((r === void 0 && (r = (0, Ca.default)(e)), r)) {
					let i = e[this.HASH_TAG];
					return i === void 0 ? this.h : this.H[i];
				} else return this.g[e] || this.h;
			}
			clear() {
				let e = this.HASH_TAG;
				this.H.forEach(function (r) {
					delete r.u[e];
				}),
					(this.H = []),
					(this.g = {}),
					Object.setPrototypeOf(this.g, null),
					(this.i = 0),
					(this.p = this._ = this.h.L = this.h.B = this.h);
			}
			eraseElementByKey(e, r) {
				let i;
				if ((r === void 0 && (r = (0, Ca.default)(e)), r)) {
					let n = e[this.HASH_TAG];
					if (n === void 0) return !1;
					delete e[this.HASH_TAG], (i = this.H[n]), delete this.H[n];
				} else {
					if (((i = this.g[e]), i === void 0)) return !1;
					delete this.g[e];
				}
				return this.V(i), !0;
			}
			eraseElementByIterator(e) {
				let r = e.o;
				return r === this.h && (0, Ti.throwIteratorAccessError)(), this.V(r), e.next();
			}
			eraseElementByPos(e) {
				if (e < 0 || e > this.i - 1) throw new RangeError();
				let r = this.p;
				for (; e--; ) r = r.B;
				return this.V(r), this.i;
			}
		};
		ei.HashContainer = Pa;
	});
	var gp = M((Yn) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Yn, 't', { value: !0 });
		Yn.default = void 0;
		var pp = Oa(),
			rv = ut(),
			Er = class t extends pp.HashContainerIterator {
				constructor(e, r, i, n) {
					super(e, r, n), (this.container = i);
				}
				get pointer() {
					return this.o === this.h && (0, rv.throwIteratorAccessError)(), this.o.u;
				}
				copy() {
					return new t(this.o, this.h, this.container, this.iteratorType);
				}
			},
			ka = class extends pp.HashContainer {
				constructor(e = []) {
					super();
					let r = this;
					e.forEach(function (i) {
						r.insert(i);
					});
				}
				begin() {
					return new Er(this.p, this.h, this);
				}
				end() {
					return new Er(this.h, this.h, this);
				}
				rBegin() {
					return new Er(this._, this.h, this, 1);
				}
				rEnd() {
					return new Er(this.h, this.h, this, 1);
				}
				front() {
					return this.p.u;
				}
				back() {
					return this._.u;
				}
				insert(e, r) {
					return this.M(e, void 0, r);
				}
				getElementByPos(e) {
					if (e < 0 || e > this.i - 1) throw new RangeError();
					let r = this.p;
					for (; e--; ) r = r.B;
					return r.u;
				}
				find(e, r) {
					let i = this.I(e, r);
					return new Er(i, this.h, this);
				}
				forEach(e) {
					let r = 0,
						i = this.p;
					for (; i !== this.h; ) e(i.u, r++, this), (i = i.B);
				}
				[Symbol.iterator]() {
					return function* () {
						let e = this.p;
						for (; e !== this.h; ) yield e.u, (e = e.B);
					}.bind(this)();
				}
			},
			iv = ka;
		Yn.default = iv;
	});
	var bp = M((Jn) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Jn, 't', { value: !0 });
		Jn.default = void 0;
		var yp = Oa(),
			nv = ov(Ra()),
			sv = ut();
		function ov(t) {
			return t && t.t ? t : { default: t };
		}
		var Sr = class t extends yp.HashContainerIterator {
				constructor(e, r, i, n) {
					super(e, r, n), (this.container = i);
				}
				get pointer() {
					this.o === this.h && (0, sv.throwIteratorAccessError)();
					let e = this;
					return new Proxy([], {
						get(r, i) {
							if (i === '0') return e.o.u;
							if (i === '1') return e.o.l;
						},
						set(r, i, n) {
							if (i !== '1') throw new TypeError('props must be 1');
							return (e.o.l = n), !0;
						},
					});
				}
				copy() {
					return new t(this.o, this.h, this.container, this.iteratorType);
				}
			},
			xa = class extends yp.HashContainer {
				constructor(e = []) {
					super();
					let r = this;
					e.forEach(function (i) {
						r.setElement(i[0], i[1]);
					});
				}
				begin() {
					return new Sr(this.p, this.h, this);
				}
				end() {
					return new Sr(this.h, this.h, this);
				}
				rBegin() {
					return new Sr(this._, this.h, this, 1);
				}
				rEnd() {
					return new Sr(this.h, this.h, this, 1);
				}
				front() {
					if (this.i !== 0) return [this.p.u, this.p.l];
				}
				back() {
					if (this.i !== 0) return [this._.u, this._.l];
				}
				setElement(e, r, i) {
					return this.M(e, r, i);
				}
				getElementByKey(e, r) {
					if ((r === void 0 && (r = (0, nv.default)(e)), r)) {
						let n = e[this.HASH_TAG];
						return n !== void 0 ? this.H[n].l : void 0;
					}
					let i = this.g[e];
					return i ? i.l : void 0;
				}
				getElementByPos(e) {
					if (e < 0 || e > this.i - 1) throw new RangeError();
					let r = this.p;
					for (; e--; ) r = r.B;
					return [r.u, r.l];
				}
				find(e, r) {
					let i = this.I(e, r);
					return new Sr(i, this.h, this);
				}
				forEach(e) {
					let r = 0,
						i = this.p;
					for (; i !== this.h; ) e([i.u, i.l], r++, this), (i = i.B);
				}
				[Symbol.iterator]() {
					return function* () {
						let e = this.p;
						for (; e !== this.h; ) yield [e.u, e.l], (e = e.B);
					}.bind(this)();
				}
			},
			av = xa;
		Jn.default = av;
	});
	var wp = M((je) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(je, 't', { value: !0 });
		Object.defineProperty(je, 'Deque', {
			enumerable: !0,
			get: function () {
				return dv.default;
			},
		});
		Object.defineProperty(je, 'HashMap', {
			enumerable: !0,
			get: function () {
				return bv.default;
			},
		});
		Object.defineProperty(je, 'HashSet', {
			enumerable: !0,
			get: function () {
				return yv.default;
			},
		});
		Object.defineProperty(je, 'LinkList', {
			enumerable: !0,
			get: function () {
				return hv.default;
			},
		});
		Object.defineProperty(je, 'OrderedMap', {
			enumerable: !0,
			get: function () {
				return gv.default;
			},
		});
		Object.defineProperty(je, 'OrderedSet', {
			enumerable: !0,
			get: function () {
				return pv.default;
			},
		});
		Object.defineProperty(je, 'PriorityQueue', {
			enumerable: !0,
			get: function () {
				return fv.default;
			},
		});
		Object.defineProperty(je, 'Queue', {
			enumerable: !0,
			get: function () {
				return uv.default;
			},
		});
		Object.defineProperty(je, 'Stack', {
			enumerable: !0,
			get: function () {
				return lv.default;
			},
		});
		Object.defineProperty(je, 'Vector', {
			enumerable: !0,
			get: function () {
				return cv.default;
			},
		});
		var lv = ft(ep()),
			uv = ft(tp()),
			fv = ft(rp()),
			cv = ft(ip()),
			hv = ft(np()),
			dv = ft(sp()),
			pv = ft(fp()),
			gv = ft(hp()),
			yv = ft(gp()),
			bv = ft(bp());
		function ft(t) {
			return t && t.t ? t : { default: t };
		}
	});
	var mp = M((ax, _p) => {
		'use strict';
		v();
		m();
		_();
		var wv = wp().OrderedSet,
			ct = ot()('number-allocator:trace'),
			_v = ot()('number-allocator:error');
		function Te(t, e) {
			(this.low = t), (this.high = e);
		}
		Te.prototype.equals = function (t) {
			return this.low === t.low && this.high === t.high;
		};
		Te.prototype.compare = function (t) {
			return this.low < t.low && this.high < t.low
				? -1
				: t.low < this.low && t.high < this.low
				? 1
				: 0;
		};
		function ht(t, e) {
			if (!(this instanceof ht)) return new ht(t, e);
			(this.min = t),
				(this.max = e),
				(this.ss = new wv([], (r, i) => r.compare(i))),
				ct('Create'),
				this.clear();
		}
		ht.prototype.firstVacant = function () {
			return this.ss.size() === 0 ? null : this.ss.front().low;
		};
		ht.prototype.alloc = function () {
			if (this.ss.size() === 0) return ct('alloc():empty'), null;
			let t = this.ss.begin(),
				e = t.pointer.low,
				r = t.pointer.high,
				i = e;
			return (
				i + 1 <= r
					? this.ss.updateKeyByIterator(t, new Te(e + 1, r))
					: this.ss.eraseElementByPos(0),
				ct('alloc():' + i),
				i
			);
		};
		ht.prototype.use = function (t) {
			let e = new Te(t, t),
				r = this.ss.lowerBound(e);
			if (!r.equals(this.ss.end())) {
				let i = r.pointer.low,
					n = r.pointer.high;
				return r.pointer.equals(e)
					? (this.ss.eraseElementByIterator(r), ct('use():' + t), !0)
					: i > t
					? !1
					: i === t
					? (this.ss.updateKeyByIterator(r, new Te(i + 1, n)), ct('use():' + t), !0)
					: n === t
					? (this.ss.updateKeyByIterator(r, new Te(i, n - 1)), ct('use():' + t), !0)
					: (this.ss.updateKeyByIterator(r, new Te(t + 1, n)),
					  this.ss.insert(new Te(i, t - 1)),
					  ct('use():' + t),
					  !0);
			}
			return ct('use():failed'), !1;
		};
		ht.prototype.free = function (t) {
			if (t < this.min || t > this.max) {
				_v('free():' + t + ' is out of range');
				return;
			}
			let e = new Te(t, t),
				r = this.ss.upperBound(e);
			if (r.equals(this.ss.end())) {
				if (r.equals(this.ss.begin())) {
					this.ss.insert(e);
					return;
				}
				r.pre();
				let i = r.pointer.high;
				r.pointer.high + 1 === t
					? this.ss.updateKeyByIterator(r, new Te(i, t))
					: this.ss.insert(e);
			} else if (r.equals(this.ss.begin()))
				if (t + 1 === r.pointer.low) {
					let i = r.pointer.high;
					this.ss.updateKeyByIterator(r, new Te(t, i));
				} else this.ss.insert(e);
			else {
				let i = r.pointer.low,
					n = r.pointer.high;
				r.pre();
				let o = r.pointer.low;
				r.pointer.high + 1 === t
					? t + 1 === i
						? (this.ss.eraseElementByIterator(r),
						  this.ss.updateKeyByIterator(r, new Te(o, n)))
						: this.ss.updateKeyByIterator(r, new Te(o, t))
					: t + 1 === i
					? (this.ss.eraseElementByIterator(r.next()), this.ss.insert(new Te(t, n)))
					: this.ss.insert(e);
			}
			ct('free():' + t);
		};
		ht.prototype.clear = function () {
			ct('clear()'), this.ss.clear(), this.ss.insert(new Te(this.min, this.max));
		};
		ht.prototype.intervalCount = function () {
			return this.ss.size();
		};
		ht.prototype.dump = function () {
			console.log('length:' + this.ss.size());
			for (let t of this.ss) console.log(t);
		};
		_p.exports = ht;
	});
	var Ma = M((px, vp) => {
		v();
		m();
		_();
		var mv = mp();
		vp.exports.NumberAllocator = mv;
	});
	var Ep = M((Ua) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Ua, '__esModule', { value: !0 });
		var vv = Zd(),
			Ev = Ma(),
			La = class {
				constructor(e) {
					e > 0 &&
						((this.aliasToTopic = new vv.LRUCache({ max: e })),
						(this.topicToAlias = {}),
						(this.numberAllocator = new Ev.NumberAllocator(1, e)),
						(this.max = e),
						(this.length = 0));
				}
				put(e, r) {
					if (r === 0 || r > this.max) return !1;
					let i = this.aliasToTopic.get(r);
					return (
						i && delete this.topicToAlias[i],
						this.aliasToTopic.set(r, e),
						(this.topicToAlias[e] = r),
						this.numberAllocator.use(r),
						(this.length = this.aliasToTopic.size),
						!0
					);
				}
				getTopicByAlias(e) {
					return this.aliasToTopic.get(e);
				}
				getAliasByTopic(e) {
					let r = this.topicToAlias[e];
					return typeof r < 'u' && this.aliasToTopic.get(r), r;
				}
				clear() {
					this.aliasToTopic.clear(),
						(this.topicToAlias = {}),
						this.numberAllocator.clear(),
						(this.length = 0);
				}
				getLruAlias() {
					let e = this.numberAllocator.firstVacant();
					return e || [...this.aliasToTopic.keys()][this.aliasToTopic.size - 1];
				}
			};
		Ua.default = La;
	});
	var Sp = M((Ri) => {
		'use strict';
		v();
		m();
		_();
		var Sv =
			(Ri && Ri.__importDefault) ||
			function (t) {
				return t && t.__esModule ? t : { default: t };
			};
		Object.defineProperty(Ri, '__esModule', { value: !0 });
		var Av = Ai(),
			Iv = Sv(Ep()),
			Tv = Jr(),
			Rv = (t, e) => {
				t.log('_handleConnack');
				let { options: r } = t,
					n = r.protocolVersion === 5 ? e.reasonCode : e.returnCode;
				if ((clearTimeout(t.connackTimer), delete t.topicAliasSend, e.properties)) {
					if (e.properties.topicAliasMaximum) {
						if (e.properties.topicAliasMaximum > 65535) {
							t.emit(
								'error',
								new Error('topicAliasMaximum from broker is out of range')
							);
							return;
						}
						e.properties.topicAliasMaximum > 0 &&
							(t.topicAliasSend = new Iv.default(e.properties.topicAliasMaximum));
					}
					e.properties.serverKeepAlive &&
						r.keepalive &&
						((r.keepalive = e.properties.serverKeepAlive), t._shiftPingInterval()),
						e.properties.maximumPacketSize &&
							(r.properties || (r.properties = {}),
							(r.properties.maximumPacketSize = e.properties.maximumPacketSize));
				}
				if (n === 0) (t.reconnecting = !1), t._onConnect(e);
				else if (n > 0) {
					let o = new Tv.ErrorWithReasonCode(
						`Connection refused: ${Av.ReasonCodes[n]}`,
						n
					);
					t.emit('error', o);
				}
			};
		Ri.default = Rv;
	});
	var Ap = M((Na) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Na, '__esModule', { value: !0 });
		var Cv = (t, e, r) => {
			t.log('handling pubrel packet');
			let i = typeof r < 'u' ? r : t.noop,
				{ messageId: n } = e,
				o = { cmd: 'pubcomp', messageId: n };
			t.incomingStore.get(e, (s, a) => {
				s
					? t._sendPacket(o, i)
					: (t.emit('message', a.topic, a.payload, a),
					  t.handleMessage(a, (u) => {
							if (u) return i(u);
							t.incomingStore.del(a, t.noop), t._sendPacket(o, i);
					  }));
			});
		};
		Na.default = Cv;
	});
	var Ip = M((Ci) => {
		'use strict';
		v();
		m();
		_();
		var Bi =
			(Ci && Ci.__importDefault) ||
			function (t) {
				return t && t.__esModule ? t : { default: t };
			};
		Object.defineProperty(Ci, '__esModule', { value: !0 });
		var Bv = Bi(Vd()),
			Pv = Bi(Gd()),
			Ov = Bi(Sp()),
			kv = Bi(Ai()),
			xv = Bi(Ap()),
			Mv = (t, e, r) => {
				let { options: i } = t;
				if (
					i.protocolVersion === 5 &&
					i.properties &&
					i.properties.maximumPacketSize &&
					i.properties.maximumPacketSize < e.length
				)
					return (
						t.emit('error', new Error(`exceeding packets size ${e.cmd}`)),
						t.end({
							reasonCode: 149,
							properties: { reasonString: 'Maximum packet size was exceeded' },
						}),
						t
					);
				switch (
					((t.pingResp = Date.now()),
					e.cmd !== 'pingresp' && t._shiftPingInterval(),
					t.log('_handlePacket :: emitting packetreceive'),
					t.emit('packetreceive', e),
					e.cmd)
				) {
					case 'publish':
						(0, Bv.default)(t, e, r);
						break;
					case 'puback':
					case 'pubrec':
					case 'pubcomp':
					case 'suback':
					case 'unsuback':
						(0, kv.default)(t, e), r();
						break;
					case 'pubrel':
						(0, xv.default)(t, e, r);
						break;
					case 'connack':
						(0, Ov.default)(t, e), r();
						break;
					case 'auth':
						(0, Pv.default)(t, e), r();
						break;
					case 'pingresp':
						r();
						break;
					case 'disconnect':
						t.emit('disconnect', e), r();
						break;
					default:
						t.log('_handlePacket :: unknown command'), r();
						break;
				}
			};
		Ci.default = Mv;
	});
	var Tp = M((ti) => {
		'use strict';
		v();
		m();
		_();
		var Lv =
			(ti && ti.__importDefault) ||
			function (t) {
				return t && t.__esModule ? t : { default: t };
			};
		Object.defineProperty(ti, '__esModule', { value: !0 });
		ti.TypedEventEmitter = void 0;
		var Uv = Lv((ir(), X(rr))),
			Nv = Jr(),
			Xn = class {};
		ti.TypedEventEmitter = Xn;
		(0, Nv.applyMixin)(Xn, Uv.default);
	});
	var Pi = M((Ar) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Ar, '__esModule', { value: !0 });
		Ar.isReactNativeBrowser = Ar.isWebWorker = void 0;
		var qv = () => typeof window < 'u' && typeof window.document < 'u',
			Rp = () => {
				var t, e;
				return !!(
					typeof self == 'object' &&
					!(
						(e = (t = self?.constructor) === null || t === void 0 ? void 0 : t.name) ===
							null || e === void 0
					) &&
					e.includes('WorkerGlobalScope')
				);
			},
			Cp = () => typeof P < 'u' && P.product === 'ReactNative',
			Dv = qv() || Rp() || Cp();
		Ar.isWebWorker = Rp();
		Ar.isReactNativeBrowser = Cp();
		Ar.default = Dv;
	});
	var Pp = M((Zn, Bp) => {
		v();
		m();
		_();
		(function (t, e) {
			typeof Zn == 'object' && typeof Bp < 'u'
				? e(Zn)
				: typeof define == 'function' && define.amd
				? define(['exports'], e)
				: ((t = typeof globalThis < 'u' ? globalThis : t || self),
				  e((t.fastUniqueNumbers = {})));
		})(Zn, function (t) {
			'use strict';
			var e = function (g) {
					return function (y) {
						var w = g(y);
						return y.add(w), w;
					};
				},
				r = function (g) {
					return function (y, w) {
						return g.set(y, w), w;
					};
				},
				i = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER,
				n = 536870912,
				o = n * 2,
				s = function (g, y) {
					return function (w) {
						var E = y.get(w),
							S = E === void 0 ? w.size : E < o ? E + 1 : 0;
						if (!w.has(S)) return g(w, S);
						if (w.size < n) {
							for (; w.has(S); ) S = Math.floor(Math.random() * o);
							return g(w, S);
						}
						if (w.size > i)
							throw new Error(
								'Congratulations, you created a collection of unique numbers which uses all available integers!'
							);
						for (; w.has(S); ) S = Math.floor(Math.random() * i);
						return g(w, S);
					};
				},
				a = new WeakMap(),
				u = r(a),
				c = s(u, a),
				h = e(c);
			(t.addUniqueNumber = h), (t.generateUniqueNumber = c);
		});
	});
	var kp = M((es, Op) => {
		v();
		m();
		_();
		(function (t, e) {
			typeof es == 'object' && typeof Op < 'u'
				? e(es, Pp())
				: typeof define == 'function' && define.amd
				? define(['exports', 'fast-unique-numbers'], e)
				: ((t = typeof globalThis < 'u' ? globalThis : t || self),
				  e((t.workerTimersBroker = {}), t.fastUniqueNumbers));
		})(es, function (t, e) {
			'use strict';
			var r = function (s) {
					return s.method !== void 0 && s.method === 'call';
				},
				i = function (s) {
					return s.error === null && typeof s.id == 'number';
				},
				n = function (s) {
					var a = new Map([[0, function () {}]]),
						u = new Map([[0, function () {}]]),
						c = new Map(),
						h = new Worker(s);
					h.addEventListener('message', function (E) {
						var S = E.data;
						if (r(S)) {
							var I = S.params,
								C = I.timerId,
								R = I.timerType;
							if (R === 'interval') {
								var U = a.get(C);
								if (typeof U == 'number') {
									var N = c.get(U);
									if (N === void 0 || N.timerId !== C || N.timerType !== R)
										throw new Error('The timer is in an undefined state.');
								} else if (typeof U < 'u') U();
								else throw new Error('The timer is in an undefined state.');
							} else if (R === 'timeout') {
								var W = u.get(C);
								if (typeof W == 'number') {
									var K = c.get(W);
									if (K === void 0 || K.timerId !== C || K.timerType !== R)
										throw new Error('The timer is in an undefined state.');
								} else if (typeof W < 'u') W(), u.delete(C);
								else throw new Error('The timer is in an undefined state.');
							}
						} else if (i(S)) {
							var z = S.id,
								Q = c.get(z);
							if (Q === void 0)
								throw new Error('The timer is in an undefined state.');
							var de = Q.timerId,
								Gt = Q.timerType;
							c.delete(z), Gt === 'interval' ? a.delete(de) : u.delete(de);
						} else {
							var pe = S.error.message;
							throw new Error(pe);
						}
					});
					var d = function (S) {
							var I = e.generateUniqueNumber(c);
							c.set(I, { timerId: S, timerType: 'interval' }),
								a.set(S, I),
								h.postMessage({
									id: I,
									method: 'clear',
									params: { timerId: S, timerType: 'interval' },
								});
						},
						g = function (S) {
							var I = e.generateUniqueNumber(c);
							c.set(I, { timerId: S, timerType: 'timeout' }),
								u.set(S, I),
								h.postMessage({
									id: I,
									method: 'clear',
									params: { timerId: S, timerType: 'timeout' },
								});
						},
						y = function (S) {
							var I =
									arguments.length > 1 && arguments[1] !== void 0
										? arguments[1]
										: 0,
								C = e.generateUniqueNumber(a);
							return (
								a.set(C, function () {
									S(),
										typeof a.get(C) == 'function' &&
											h.postMessage({
												id: null,
												method: 'set',
												params: {
													delay: I,
													now: performance.now(),
													timerId: C,
													timerType: 'interval',
												},
											});
								}),
								h.postMessage({
									id: null,
									method: 'set',
									params: {
										delay: I,
										now: performance.now(),
										timerId: C,
										timerType: 'interval',
									},
								}),
								C
							);
						},
						w = function (S) {
							var I =
									arguments.length > 1 && arguments[1] !== void 0
										? arguments[1]
										: 0,
								C = e.generateUniqueNumber(u);
							return (
								u.set(C, S),
								h.postMessage({
									id: null,
									method: 'set',
									params: {
										delay: I,
										now: performance.now(),
										timerId: C,
										timerType: 'timeout',
									},
								}),
								C
							);
						};
					return { clearInterval: d, clearTimeout: g, setInterval: y, setTimeout: w };
				};
			t.load = n;
		});
	});
	var Mp = M((ts, xp) => {
		v();
		m();
		_();
		(function (t, e) {
			typeof ts == 'object' && typeof xp < 'u'
				? e(ts, kp())
				: typeof define == 'function' && define.amd
				? define(['exports', 'worker-timers-broker'], e)
				: ((t = typeof globalThis < 'u' ? globalThis : t || self),
				  e((t.workerTimers = {}), t.workerTimersBroker));
		})(ts, function (t, e) {
			'use strict';
			var r = function (h, d) {
					var g = null;
					return function () {
						if (g !== null) return g;
						var y = new Blob([d], { type: 'application/javascript; charset=utf-8' }),
							w = URL.createObjectURL(y);
						return (
							(g = h(w)),
							setTimeout(function () {
								return URL.revokeObjectURL(w);
							}),
							g
						);
					};
				},
				i = `(()=>{var e={472:(e,t,r)=>{var o,i;void 0===(i="function"==typeof(o=function(){"use strict";var e=new Map,t=new Map,r=function(t){var r=e.get(t);if(void 0===r)throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));clearTimeout(r),e.delete(t)},o=function(e){var r=t.get(e);if(void 0===r)throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));clearTimeout(r),t.delete(e)},i=function(e,t){var r,o=performance.now();return{expected:o+(r=e-Math.max(0,o-t)),remainingDelay:r}},n=function e(t,r,o,i){var n=performance.now();n>o?postMessage({id:null,method:"call",params:{timerId:r,timerType:i}}):t.set(r,setTimeout(e,o-n,t,r,o,i))},a=function(t,r,o){var a=i(t,o),s=a.expected,d=a.remainingDelay;e.set(r,setTimeout(n,d,e,r,s,"interval"))},s=function(e,r,o){var a=i(e,o),s=a.expected,d=a.remainingDelay;t.set(r,setTimeout(n,d,t,r,s,"timeout"))};addEventListener("message",(function(e){var t=e.data;try{if("clear"===t.method){var i=t.id,n=t.params,d=n.timerId,c=n.timerType;if("interval"===c)r(d),postMessage({error:null,id:i});else{if("timeout"!==c)throw new Error('The given type "'.concat(c,'" is not supported'));o(d),postMessage({error:null,id:i})}}else{if("set"!==t.method)throw new Error('The given method "'.concat(t.method,'" is not supported'));var u=t.params,l=u.delay,p=u.now,m=u.timerId,v=u.timerType;if("interval"===v)a(l,m,p);else{if("timeout"!==v)throw new Error('The given type "'.concat(v,'" is not supported'));s(l,m,p)}}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}}))})?o.call(t,r,t,e):o)||(e.exports=i)}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(472)})()})();`,
				n = r(e.load, i),
				o = function (h) {
					return n().clearInterval(h);
				},
				s = function (h) {
					return n().clearTimeout(h);
				},
				a = function () {
					var h;
					return (h = n()).setInterval.apply(h, arguments);
				},
				u = function () {
					var h;
					return (h = n()).setTimeout.apply(h, arguments);
				};
			(t.clearInterval = o), (t.clearTimeout = s), (t.setInterval = a), (t.setTimeout = u);
		});
	});
	var qp = M((Ct) => {
		'use strict';
		v();
		m();
		_();
		var jv =
				(Ct && Ct.__createBinding) ||
				(Object.create
					? function (t, e, r, i) {
							i === void 0 && (i = r);
							var n = Object.getOwnPropertyDescriptor(e, r);
							(!n || ('get' in n ? !e.__esModule : n.writable || n.configurable)) &&
								(n = {
									enumerable: !0,
									get: function () {
										return e[r];
									},
								}),
								Object.defineProperty(t, i, n);
					  }
					: function (t, e, r, i) {
							i === void 0 && (i = r), (t[i] = e[r]);
					  }),
			Fv =
				(Ct && Ct.__setModuleDefault) ||
				(Object.create
					? function (t, e) {
							Object.defineProperty(t, 'default', { enumerable: !0, value: e });
					  }
					: function (t, e) {
							t.default = e;
					  }),
			Wv =
				(Ct && Ct.__importStar) ||
				function (t) {
					if (t && t.__esModule) return t;
					var e = {};
					if (t != null)
						for (var r in t)
							r !== 'default' &&
								Object.prototype.hasOwnProperty.call(t, r) &&
								jv(e, t, r);
					return Fv(e, t), e;
				};
		Object.defineProperty(Ct, '__esModule', { value: !0 });
		var qa = Wv(Pi()),
			Lp = Mp(),
			Up = { set: Lp.setTimeout, clear: Lp.clearTimeout },
			Np = { set: (t, e) => setTimeout(t, e), clear: (t) => clearTimeout(t) },
			$v = (t) => {
				switch (t) {
					case 'native':
						return Np;
					case 'worker':
						return Up;
					case 'auto':
					default:
						return qa.default && !qa.isWebWorker && !qa.isReactNativeBrowser ? Up : Np;
				}
			};
		Ct.default = $v;
	});
	var ja = M((Oi) => {
		'use strict';
		v();
		m();
		_();
		var Hv =
			(Oi && Oi.__importDefault) ||
			function (t) {
				return t && t.__esModule ? t : { default: t };
			};
		Object.defineProperty(Oi, '__esModule', { value: !0 });
		var Vv = Hv(qp()),
			Da = class {
				constructor(e, r, i) {
					(this.destroyed = !1),
						(this.keepalive = e * 1e3),
						(this.checkPing = r),
						(this.timer = (0, Vv.default)(i)),
						this.reschedule();
				}
				clear() {
					this.timerId && (this.timer.clear(this.timerId), (this.timerId = null));
				}
				destroy() {
					this.clear(), (this.destroyed = !0);
				}
				reschedule() {
					this.destroyed ||
						(this.clear(),
						(this.timerId = this.timer.set(() => {
							this.destroyed || (this.checkPing(), this.reschedule());
						}, this.keepalive)));
				}
			};
		Oi.default = Da;
	});
	var ss = M((Qe) => {
		'use strict';
		v();
		m();
		_();
		var zv =
				(Qe && Qe.__createBinding) ||
				(Object.create
					? function (t, e, r, i) {
							i === void 0 && (i = r);
							var n = Object.getOwnPropertyDescriptor(e, r);
							(!n || ('get' in n ? !e.__esModule : n.writable || n.configurable)) &&
								(n = {
									enumerable: !0,
									get: function () {
										return e[r];
									},
								}),
								Object.defineProperty(t, i, n);
					  }
					: function (t, e, r, i) {
							i === void 0 && (i = r), (t[i] = e[r]);
					  }),
			Kv =
				(Qe && Qe.__setModuleDefault) ||
				(Object.create
					? function (t, e) {
							Object.defineProperty(t, 'default', { enumerable: !0, value: e });
					  }
					: function (t, e) {
							t.default = e;
					  }),
			$p =
				(Qe && Qe.__importStar) ||
				function (t) {
					if (t && t.__esModule) return t;
					var e = {};
					if (t != null)
						for (var r in t)
							r !== 'default' &&
								Object.prototype.hasOwnProperty.call(t, r) &&
								zv(e, t, r);
					return Kv(e, t), e;
				},
			Vt =
				(Qe && Qe.__importDefault) ||
				function (t) {
					return t && t.__esModule ? t : { default: t };
				};
		Object.defineProperty(Qe, '__esModule', { value: !0 });
		var Gv = Vt(Gu()),
			Fa = Vt(Nd()),
			Qv = Vt(Jo()),
			Yv = jt(),
			Dp = Vt(Fd()),
			jp = $p($d()),
			Jv = Vt(ot()),
			rs = Vt(ea()),
			Xv = Vt(Ip()),
			is = Jr(),
			Zv = Tp(),
			eE = Vt(ja()),
			Fp = $p(Pi()),
			Wa =
				globalThis.setImmediate ||
				((...t) => {
					let e = t.shift();
					(0, is.nextTick)(() => {
						e(...t);
					});
				}),
			Wp = {
				keepalive: 60,
				reschedulePings: !0,
				protocolId: 'MQTT',
				protocolVersion: 4,
				reconnectPeriod: 1e3,
				connectTimeout: 30 * 1e3,
				clean: !0,
				resubscribe: !0,
				writeCache: !0,
				timerVariant: 'auto',
			},
			ns = class t extends Zv.TypedEventEmitter {
				static defaultId() {
					return `mqttjs_${Math.random().toString(16).substr(2, 8)}`;
				}
				constructor(e, r) {
					super(), (this.options = r || {});
					for (let i in Wp)
						typeof this.options[i] > 'u'
							? (this.options[i] = Wp[i])
							: (this.options[i] = r[i]);
					(this.log = this.options.log || (0, Jv.default)('mqttjs:client')),
						(this.noop = this._noop.bind(this)),
						this.log('MqttClient :: version:', t.VERSION),
						Fp.isWebWorker
							? this.log('MqttClient :: environment', 'webworker')
							: this.log(
									'MqttClient :: environment',
									Fp.default ? 'browser' : 'node'
							  ),
						this.log('MqttClient :: options.protocol', r.protocol),
						this.log('MqttClient :: options.protocolVersion', r.protocolVersion),
						this.log('MqttClient :: options.username', r.username),
						this.log('MqttClient :: options.keepalive', r.keepalive),
						this.log('MqttClient :: options.reconnectPeriod', r.reconnectPeriod),
						this.log('MqttClient :: options.rejectUnauthorized', r.rejectUnauthorized),
						this.log(
							'MqttClient :: options.properties.topicAliasMaximum',
							r.properties ? r.properties.topicAliasMaximum : void 0
						),
						(this.options.clientId =
							typeof r.clientId == 'string' ? r.clientId : t.defaultId()),
						this.log('MqttClient :: clientId', this.options.clientId),
						(this.options.customHandleAcks =
							r.protocolVersion === 5 && r.customHandleAcks
								? r.customHandleAcks
								: (...i) => {
										i[3](null, 0);
								  }),
						this.options.writeCache || (Fa.default.writeToStream.cacheNumbers = !1),
						(this.streamBuilder = e),
						(this.messageIdProvider =
							typeof this.options.messageIdProvider > 'u'
								? new Qv.default()
								: this.options.messageIdProvider),
						(this.outgoingStore = r.outgoingStore || new rs.default()),
						(this.incomingStore = r.incomingStore || new rs.default()),
						(this.queueQoSZero = r.queueQoSZero === void 0 ? !0 : r.queueQoSZero),
						(this._resubscribeTopics = {}),
						(this.messageIdToTopic = {}),
						(this.pingTimer = null),
						(this.connected = !1),
						(this.disconnecting = !1),
						(this.reconnecting = !1),
						(this.queue = []),
						(this.connackTimer = null),
						(this.reconnectTimer = null),
						(this._storeProcessing = !1),
						(this._packetIdsDuringStoreProcessing = {}),
						(this._storeProcessingQueue = []),
						(this.outgoing = {}),
						(this._firstConnection = !0),
						r.properties &&
							r.properties.topicAliasMaximum > 0 &&
							(r.properties.topicAliasMaximum > 65535
								? this.log(
										'MqttClient :: options.properties.topicAliasMaximum is out of range'
								  )
								: (this.topicAliasRecv = new Gv.default(
										r.properties.topicAliasMaximum
								  ))),
						this.on('connect', () => {
							let { queue: i } = this,
								n = () => {
									let o = i.shift();
									this.log('deliver :: entry %o', o);
									let s = null;
									if (!o) {
										this._resubscribe();
										return;
									}
									(s = o.packet),
										this.log('deliver :: call _sendPacket for %o', s);
									let a = !0;
									s.messageId &&
										s.messageId !== 0 &&
										(this.messageIdProvider.register(s.messageId) || (a = !1)),
										a
											? this._sendPacket(s, (u) => {
													o.cb && o.cb(u), n();
											  })
											: (this.log(
													'messageId: %d has already used. The message is skipped and removed.',
													s.messageId
											  ),
											  n());
								};
							this.log('connect :: sending queued packets'), n();
						}),
						this.on('close', () => {
							this.log('close :: connected set to `false`'),
								(this.connected = !1),
								this.log('close :: clearing connackTimer'),
								clearTimeout(this.connackTimer),
								this._destroyPingTimer(),
								this.topicAliasRecv && this.topicAliasRecv.clear(),
								this.log('close :: calling _setupReconnect'),
								this._setupReconnect();
						}),
						this.options.manualConnect ||
							(this.log('MqttClient :: setting up stream'), this.connect());
				}
				handleAuth(e, r) {
					r();
				}
				handleMessage(e, r) {
					r();
				}
				_nextId() {
					return this.messageIdProvider.allocate();
				}
				getLastMessageId() {
					return this.messageIdProvider.getLastAllocated();
				}
				connect() {
					var e;
					let r = new Yv.Writable(),
						i = Fa.default.parser(this.options),
						n = null,
						o = [];
					this.log('connect :: calling method to clear reconnect'),
						this._clearReconnect(),
						this.log(
							'connect :: using streamBuilder provided to client to create stream'
						),
						(this.stream = this.streamBuilder(this)),
						i.on('packet', (h) => {
							this.log('parser :: on packet push to packets array.'), o.push(h);
						});
					let s = () => {
							this.log('work :: getting next packet in queue');
							let h = o.shift();
							if (h)
								this.log('work :: packet pulled from queue'),
									(0, Xv.default)(this, h, a);
							else {
								this.log('work :: no packets in queue');
								let d = n;
								(n = null), this.log('work :: done flag is %s', !!d), d && d();
							}
						},
						a = () => {
							if (o.length) (0, is.nextTick)(s);
							else {
								let h = n;
								(n = null), h();
							}
						};
					r._write = (h, d, g) => {
						(n = g), this.log('writable stream :: parsing buffer'), i.parse(h), s();
					};
					let u = (h) => {
						this.log('streamErrorHandler :: error', h.message),
							h.code
								? (this.log('streamErrorHandler :: emitting error'),
								  this.emit('error', h))
								: this.noop(h);
					};
					this.log('connect :: pipe stream to writable stream'),
						this.stream.pipe(r),
						this.stream.on('error', u),
						this.stream.on('close', () => {
							this.log('(%s)stream :: on close', this.options.clientId),
								this._flushVolatile(),
								this.log('stream: emit close to MqttClient'),
								this.emit('close');
						}),
						this.log('connect: sending packet `connect`');
					let c = {
						cmd: 'connect',
						protocolId: this.options.protocolId,
						protocolVersion: this.options.protocolVersion,
						clean: this.options.clean,
						clientId: this.options.clientId,
						keepalive: this.options.keepalive,
						username: this.options.username,
						password: this.options.password,
						properties: this.options.properties,
					};
					if (
						(this.options.will &&
							(c.will = Object.assign(Object.assign({}, this.options.will), {
								payload:
									(e = this.options.will) === null || e === void 0
										? void 0
										: e.payload,
							})),
						this.topicAliasRecv &&
							(c.properties || (c.properties = {}),
							this.topicAliasRecv &&
								(c.properties.topicAliasMaximum = this.topicAliasRecv.max)),
						this._writePacket(c),
						i.on('error', this.emit.bind(this, 'error')),
						this.options.properties)
					) {
						if (
							!this.options.properties.authenticationMethod &&
							this.options.properties.authenticationData
						)
							return (
								this.end(() =>
									this.emit(
										'error',
										new Error('Packet has no Authentication Method')
									)
								),
								this
							);
						if (
							this.options.properties.authenticationMethod &&
							this.options.authPacket &&
							typeof this.options.authPacket == 'object'
						) {
							let h = Object.assign(
								{ cmd: 'auth', reasonCode: 0 },
								this.options.authPacket
							);
							this._writePacket(h);
						}
					}
					return (
						this.stream.setMaxListeners(1e3),
						clearTimeout(this.connackTimer),
						(this.connackTimer = setTimeout(() => {
							this.log('!!connectTimeout hit!! Calling _cleanUp with force `true`'),
								this.emit('error', new Error('connack timeout')),
								this._cleanUp(!0);
						}, this.options.connectTimeout)),
						this
					);
				}
				publish(e, r, i, n) {
					this.log('publish :: message `%s` to topic `%s`', r, e);
					let { options: o } = this;
					typeof i == 'function' && ((n = i), (i = null)),
						(i = i || {}),
						(i = Object.assign(Object.assign({}, { qos: 0, retain: !1, dup: !1 }), i));
					let { qos: a, retain: u, dup: c, properties: h, cbStorePut: d } = i;
					if (this._checkDisconnecting(n)) return this;
					let g = () => {
						let y = 0;
						if ((a === 1 || a === 2) && ((y = this._nextId()), y === null))
							return this.log('No messageId left'), !1;
						let w = {
							cmd: 'publish',
							topic: e,
							payload: r,
							qos: a,
							retain: u,
							messageId: y,
							dup: c,
						};
						switch (
							(o.protocolVersion === 5 && (w.properties = h),
							this.log('publish :: qos', a),
							a)
						) {
							case 1:
							case 2:
								(this.outgoing[w.messageId] = { volatile: !1, cb: n || this.noop }),
									this.log('MqttClient:publish: packet cmd: %s', w.cmd),
									this._sendPacket(w, void 0, d);
								break;
							default:
								this.log('MqttClient:publish: packet cmd: %s', w.cmd),
									this._sendPacket(w, n, d);
								break;
						}
						return !0;
					};
					return (
						(this._storeProcessing || this._storeProcessingQueue.length > 0 || !g()) &&
							this._storeProcessingQueue.push({
								invoke: g,
								cbStorePut: i.cbStorePut,
								callback: n,
							}),
						this
					);
				}
				publishAsync(e, r, i) {
					return new Promise((n, o) => {
						this.publish(e, r, i, (s, a) => {
							s ? o(s) : n(a);
						});
					});
				}
				subscribe(e, r, i) {
					let n = this.options.protocolVersion;
					typeof r == 'function' && (i = r), (i = i || this.noop);
					let o = !1,
						s = [];
					typeof e == 'string'
						? ((e = [e]), (s = e))
						: Array.isArray(e)
						? (s = e)
						: typeof e == 'object' &&
						  ((o = e.resubscribe), delete e.resubscribe, (s = Object.keys(e)));
					let a = jp.validateTopics(s);
					if (a !== null) return Wa(i, new Error(`Invalid topic ${a}`)), this;
					if (this._checkDisconnecting(i))
						return this.log('subscribe: discconecting true'), this;
					let u = { qos: 0 };
					n === 5 && ((u.nl = !1), (u.rap = !1), (u.rh = 0)),
						(r = Object.assign(Object.assign({}, u), r));
					let c = r.properties,
						h = [],
						d = (y, w) => {
							if (
								((w = w || r),
								!Object.prototype.hasOwnProperty.call(this._resubscribeTopics, y) ||
									this._resubscribeTopics[y].qos < w.qos ||
									o)
							) {
								let E = { topic: y, qos: w.qos };
								n === 5 &&
									((E.nl = w.nl),
									(E.rap = w.rap),
									(E.rh = w.rh),
									(E.properties = c)),
									this.log(
										'subscribe: pushing topic `%s` and qos `%s` to subs list',
										E.topic,
										E.qos
									),
									h.push(E);
							}
						};
					if (
						(Array.isArray(e)
							? e.forEach((y) => {
									this.log('subscribe: array topic %s', y), d(y);
							  })
							: Object.keys(e).forEach((y) => {
									this.log('subscribe: object topic %s, %o', y, e[y]), d(y, e[y]);
							  }),
						!h.length)
					)
						return i(null, []), this;
					let g = () => {
						let y = this._nextId();
						if (y === null) return this.log('No messageId left'), !1;
						let w = { cmd: 'subscribe', subscriptions: h, messageId: y };
						if ((c && (w.properties = c), this.options.resubscribe)) {
							this.log('subscribe :: resubscribe true');
							let E = [];
							h.forEach((S) => {
								if (this.options.reconnectPeriod > 0) {
									let I = { qos: S.qos };
									n === 5 &&
										((I.nl = S.nl || !1),
										(I.rap = S.rap || !1),
										(I.rh = S.rh || 0),
										(I.properties = S.properties)),
										(this._resubscribeTopics[S.topic] = I),
										E.push(S.topic);
								}
							}),
								(this.messageIdToTopic[w.messageId] = E);
						}
						return (
							(this.outgoing[w.messageId] = {
								volatile: !0,
								cb(E, S) {
									if (!E) {
										let { granted: I } = S;
										for (let C = 0; C < I.length; C += 1) h[C].qos = I[C];
									}
									i(E, h);
								},
							}),
							this.log('subscribe :: call _sendPacket'),
							this._sendPacket(w),
							!0
						);
					};
					return (
						(this._storeProcessing || this._storeProcessingQueue.length > 0 || !g()) &&
							this._storeProcessingQueue.push({ invoke: g, callback: i }),
						this
					);
				}
				subscribeAsync(e, r) {
					return new Promise((i, n) => {
						this.subscribe(e, r, (o, s) => {
							o ? n(o) : i(s);
						});
					});
				}
				unsubscribe(e, r, i) {
					typeof e == 'string' && (e = [e]),
						typeof r == 'function' && (i = r),
						(i = i || this.noop);
					let n = jp.validateTopics(e);
					if (n !== null) return Wa(i, new Error(`Invalid topic ${n}`)), this;
					if (this._checkDisconnecting(i)) return this;
					let o = () => {
						let s = this._nextId();
						if (s === null) return this.log('No messageId left'), !1;
						let a = { cmd: 'unsubscribe', messageId: s, unsubscriptions: [] };
						return (
							typeof e == 'string'
								? (a.unsubscriptions = [e])
								: Array.isArray(e) && (a.unsubscriptions = e),
							this.options.resubscribe &&
								a.unsubscriptions.forEach((u) => {
									delete this._resubscribeTopics[u];
								}),
							typeof r == 'object' && r.properties && (a.properties = r.properties),
							(this.outgoing[a.messageId] = { volatile: !0, cb: i }),
							this.log('unsubscribe: call _sendPacket'),
							this._sendPacket(a),
							!0
						);
					};
					return (
						(this._storeProcessing || this._storeProcessingQueue.length > 0 || !o()) &&
							this._storeProcessingQueue.push({ invoke: o, callback: i }),
						this
					);
				}
				unsubscribeAsync(e, r) {
					return new Promise((i, n) => {
						this.unsubscribe(e, r, (o, s) => {
							o ? n(o) : i(s);
						});
					});
				}
				end(e, r, i) {
					this.log('end :: (%s)', this.options.clientId),
						(e == null || typeof e != 'boolean') && ((i = i || r), (r = e), (e = !1)),
						typeof r != 'object' && ((i = i || r), (r = null)),
						this.log('end :: cb? %s', !!i),
						(!i || typeof i != 'function') && (i = this.noop);
					let n = () => {
							this.log('end :: closeStores: closing incoming and outgoing stores'),
								(this.disconnected = !0),
								this.incomingStore.close((s) => {
									this.outgoingStore.close((a) => {
										if (
											(this.log('end :: closeStores: emitting end'),
											this.emit('end'),
											i)
										) {
											let u = s || a;
											this.log(
												'end :: closeStores: invoking callback with args'
											),
												i(u);
										}
									});
								}),
								this._deferredReconnect && this._deferredReconnect();
						},
						o = () => {
							this.log(
								'end :: (%s) :: finish :: calling _cleanUp with force %s',
								this.options.clientId,
								e
							),
								this._cleanUp(
									e,
									() => {
										this.log(
											'end :: finish :: calling process.nextTick on closeStores'
										),
											(0, is.nextTick)(n);
									},
									r
								);
						};
					return this.disconnecting
						? (i(), this)
						: (this._clearReconnect(),
						  (this.disconnecting = !0),
						  !e && Object.keys(this.outgoing).length > 0
								? (this.log(
										'end :: (%s) :: calling finish in 10ms once outgoing is empty',
										this.options.clientId
								  ),
								  this.once('outgoingEmpty', setTimeout.bind(null, o, 10)))
								: (this.log(
										'end :: (%s) :: immediately calling finish',
										this.options.clientId
								  ),
								  o()),
						  this);
				}
				endAsync(e, r) {
					return new Promise((i, n) => {
						this.end(e, r, (o) => {
							o ? n(o) : i();
						});
					});
				}
				removeOutgoingMessage(e) {
					if (this.outgoing[e]) {
						let { cb: r } = this.outgoing[e];
						this._removeOutgoingAndStoreMessage(e, () => {
							r(new Error('Message removed'));
						});
					}
					return this;
				}
				reconnect(e) {
					this.log('client reconnect');
					let r = () => {
						e
							? ((this.options.incomingStore = e.incomingStore),
							  (this.options.outgoingStore = e.outgoingStore))
							: ((this.options.incomingStore = null),
							  (this.options.outgoingStore = null)),
							(this.incomingStore = this.options.incomingStore || new rs.default()),
							(this.outgoingStore = this.options.outgoingStore || new rs.default()),
							(this.disconnecting = !1),
							(this.disconnected = !1),
							(this._deferredReconnect = null),
							this._reconnect();
					};
					return (
						this.disconnecting && !this.disconnected
							? (this._deferredReconnect = r)
							: r(),
						this
					);
				}
				_flushVolatile() {
					this.outgoing &&
						(this.log(
							'_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function'
						),
						Object.keys(this.outgoing).forEach((e) => {
							this.outgoing[e].volatile &&
								typeof this.outgoing[e].cb == 'function' &&
								(this.outgoing[e].cb(new Error('Connection closed')),
								delete this.outgoing[e]);
						}));
				}
				_flush() {
					this.outgoing &&
						(this.log('_flush: queue exists? %b', !!this.outgoing),
						Object.keys(this.outgoing).forEach((e) => {
							typeof this.outgoing[e].cb == 'function' &&
								(this.outgoing[e].cb(new Error('Connection closed')),
								delete this.outgoing[e]);
						}));
				}
				_removeTopicAliasAndRecoverTopicName(e) {
					let r;
					e.properties && (r = e.properties.topicAlias);
					let i = e.topic.toString();
					if (
						(this.log(
							'_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o',
							r,
							i
						),
						i.length === 0)
					) {
						if (typeof r > 'u') return new Error('Unregistered Topic Alias');
						if (((i = this.topicAliasSend.getTopicByAlias(r)), typeof i > 'u'))
							return new Error('Unregistered Topic Alias');
						e.topic = i;
					}
					r && delete e.properties.topicAlias;
				}
				_checkDisconnecting(e) {
					return (
						this.disconnecting &&
							(e && e !== this.noop
								? e(new Error('client disconnecting'))
								: this.emit('error', new Error('client disconnecting'))),
						this.disconnecting
					);
				}
				_reconnect() {
					this.log('_reconnect: emitting reconnect to client'),
						this.emit('reconnect'),
						this.connected
							? (this.end(() => {
									this.connect();
							  }),
							  this.log('client already connected. disconnecting first.'))
							: (this.log('_reconnect: calling connect'), this.connect());
				}
				_setupReconnect() {
					!this.disconnecting && !this.reconnectTimer && this.options.reconnectPeriod > 0
						? (this.reconnecting ||
								(this.log('_setupReconnect :: emit `offline` state'),
								this.emit('offline'),
								this.log('_setupReconnect :: set `reconnecting` to `true`'),
								(this.reconnecting = !0)),
						  this.log(
								'_setupReconnect :: setting reconnectTimer for %d ms',
								this.options.reconnectPeriod
						  ),
						  (this.reconnectTimer = setInterval(() => {
								this.log('reconnectTimer :: reconnect triggered!'),
									this._reconnect();
						  }, this.options.reconnectPeriod)))
						: this.log('_setupReconnect :: doing nothing...');
				}
				_clearReconnect() {
					this.log('_clearReconnect : clearing reconnect timer'),
						this.reconnectTimer &&
							(clearInterval(this.reconnectTimer), (this.reconnectTimer = null));
				}
				_cleanUp(e, r, i = {}) {
					if (
						(r &&
							(this.log('_cleanUp :: done callback provided for on stream close'),
							this.stream.on('close', r)),
						this.log('_cleanUp :: forced? %s', e),
						e)
					)
						this.options.reconnectPeriod === 0 && this.options.clean && this._flush(),
							this.log(
								'_cleanUp :: (%s) :: destroying stream',
								this.options.clientId
							),
							this.stream.destroy();
					else {
						let n = Object.assign({ cmd: 'disconnect' }, i);
						this.log(
							'_cleanUp :: (%s) :: call _sendPacket with disconnect packet',
							this.options.clientId
						),
							this._sendPacket(n, () => {
								this.log(
									'_cleanUp :: (%s) :: destroying stream',
									this.options.clientId
								),
									Wa(() => {
										this.stream.end(() => {
											this.log(
												'_cleanUp :: (%s) :: stream destroyed',
												this.options.clientId
											);
										});
									});
							});
					}
					!this.disconnecting &&
						!this.reconnecting &&
						(this.log(
							'_cleanUp :: client not disconnecting/reconnecting. Clearing and resetting reconnect.'
						),
						this._clearReconnect(),
						this._setupReconnect()),
						this._destroyPingTimer(),
						r &&
							!this.connected &&
							(this.log(
								'_cleanUp :: (%s) :: removing stream `done` callback `close` listener',
								this.options.clientId
							),
							this.stream.removeListener('close', r),
							r());
				}
				_storeAndSend(e, r, i) {
					this.log('storeAndSend :: store packet with cmd %s to outgoingStore', e.cmd);
					let n = e,
						o;
					if (
						n.cmd === 'publish' &&
						((n = (0, Dp.default)(e)),
						(o = this._removeTopicAliasAndRecoverTopicName(n)),
						o)
					)
						return r && r(o);
					this.outgoingStore.put(n, (s) => {
						if (s) return r && r(s);
						i(), this._writePacket(e, r);
					});
				}
				_applyTopicAlias(e) {
					if (this.options.protocolVersion === 5 && e.cmd === 'publish') {
						let r;
						e.properties && (r = e.properties.topicAlias);
						let i = e.topic.toString();
						if (this.topicAliasSend)
							if (r) {
								if (
									i.length !== 0 &&
									(this.log(
										'applyTopicAlias :: register topic: %s - alias: %d',
										i,
										r
									),
									!this.topicAliasSend.put(i, r))
								)
									return (
										this.log(
											'applyTopicAlias :: error out of range. topic: %s - alias: %d',
											i,
											r
										),
										new Error('Sending Topic Alias out of range')
									);
							} else
								i.length !== 0 &&
									(this.options.autoAssignTopicAlias
										? ((r = this.topicAliasSend.getAliasByTopic(i)),
										  r
												? ((e.topic = ''),
												  (e.properties = Object.assign(
														Object.assign({}, e.properties),
														{
															topicAlias: r,
														}
												  )),
												  this.log(
														'applyTopicAlias :: auto assign(use) topic: %s - alias: %d',
														i,
														r
												  ))
												: ((r = this.topicAliasSend.getLruAlias()),
												  this.topicAliasSend.put(i, r),
												  (e.properties = Object.assign(
														Object.assign({}, e.properties),
														{
															topicAlias: r,
														}
												  )),
												  this.log(
														'applyTopicAlias :: auto assign topic: %s - alias: %d',
														i,
														r
												  )))
										: this.options.autoUseTopicAlias &&
										  ((r = this.topicAliasSend.getAliasByTopic(i)),
										  r &&
												((e.topic = ''),
												(e.properties = Object.assign(
													Object.assign({}, e.properties),
													{
														topicAlias: r,
													}
												)),
												this.log(
													'applyTopicAlias :: auto use topic: %s - alias: %d',
													i,
													r
												))));
						else if (r)
							return (
								this.log(
									'applyTopicAlias :: error out of range. topic: %s - alias: %d',
									i,
									r
								),
								new Error('Sending Topic Alias out of range')
							);
					}
				}
				_noop(e) {
					this.log('noop ::', e);
				}
				_writePacket(e, r) {
					this.log('_writePacket :: packet: %O', e),
						this.log('_writePacket :: emitting `packetsend`'),
						this.emit('packetsend', e),
						this.log('_writePacket :: writing to stream');
					let i = Fa.default.writeToStream(e, this.stream, this.options);
					this.log('_writePacket :: writeToStream result %s', i),
						!i && r && r !== this.noop
							? (this.log(
									'_writePacket :: handle events on `drain` once through callback.'
							  ),
							  this.stream.once('drain', r))
							: r && (this.log('_writePacket :: invoking cb'), r());
				}
				_sendPacket(e, r, i, n) {
					this.log('_sendPacket :: (%s) ::  start', this.options.clientId),
						(i = i || this.noop),
						(r = r || this.noop);
					let o = this._applyTopicAlias(e);
					if (o) {
						r(o);
						return;
					}
					if (!this.connected) {
						if (e.cmd === 'auth') {
							this._writePacket(e, r);
							return;
						}
						this.log('_sendPacket :: client not connected. Storing packet offline.'),
							this._storePacket(e, r, i);
						return;
					}
					if (n) {
						this._writePacket(e, r);
						return;
					}
					switch (e.cmd) {
						case 'publish':
							break;
						case 'pubrel':
							this._storeAndSend(e, r, i);
							return;
						default:
							this._writePacket(e, r);
							return;
					}
					switch (e.qos) {
						case 2:
						case 1:
							this._storeAndSend(e, r, i);
							break;
						case 0:
						default:
							this._writePacket(e, r);
							break;
					}
					this.log('_sendPacket :: (%s) ::  end', this.options.clientId);
				}
				_storePacket(e, r, i) {
					this.log('_storePacket :: packet: %o', e),
						this.log('_storePacket :: cb? %s', !!r),
						(i = i || this.noop);
					let n = e;
					if (n.cmd === 'publish') {
						n = (0, Dp.default)(e);
						let s = this._removeTopicAliasAndRecoverTopicName(n);
						if (s) return r && r(s);
					}
					let o = n.qos || 0;
					(o === 0 && this.queueQoSZero) || n.cmd !== 'publish'
						? this.queue.push({ packet: n, cb: r })
						: o > 0
						? ((r = this.outgoing[n.messageId] ? this.outgoing[n.messageId].cb : null),
						  this.outgoingStore.put(n, (s) => {
								if (s) return r && r(s);
								i();
						  }))
						: r && r(new Error('No connection to broker'));
				}
				_setupPingTimer() {
					this.log('_setupPingTimer :: keepalive %d (seconds)', this.options.keepalive),
						!this.pingTimer &&
							this.options.keepalive &&
							((this.pingTimer = new eE.default(
								this.options.keepalive,
								() => {
									this._checkPing();
								},
								this.options.timerVariant
							)),
							(this.pingResp = Date.now()));
				}
				_destroyPingTimer() {
					this.pingTimer &&
						(this.log('_destroyPingTimer :: destroying ping timer'),
						this.pingTimer.destroy(),
						(this.pingTimer = null));
				}
				_shiftPingInterval() {
					this.pingTimer &&
						this.options.keepalive &&
						this.options.reschedulePings &&
						this._reschedulePing();
				}
				_reschedulePing() {
					this.log('_reschedulePing :: rescheduling ping'), this.pingTimer.reschedule();
				}
				_checkPing() {
					this.log('_checkPing :: checking ping...'),
						Date.now() - this.pingResp - 100 <= this.options.keepalive * 1e3
							? (this.log('_checkPing :: ping response received in time'),
							  this._sendPing())
							: (this.emit('error', new Error('Keepalive timeout')),
							  this.log('_checkPing :: calling _cleanUp with force true'),
							  this._cleanUp(!0));
				}
				_sendPing() {
					this.log('_sendPing :: sending pingreq'), this._sendPacket({ cmd: 'pingreq' });
				}
				_resubscribe() {
					this.log('_resubscribe');
					let e = Object.keys(this._resubscribeTopics);
					if (
						!this._firstConnection &&
						(this.options.clean ||
							(this.options.protocolVersion >= 4 &&
								!this.connackPacket.sessionPresent)) &&
						e.length > 0
					)
						if (this.options.resubscribe)
							if (this.options.protocolVersion === 5) {
								this.log('_resubscribe: protocolVersion 5');
								for (let r = 0; r < e.length; r++) {
									let i = {};
									(i[e[r]] = this._resubscribeTopics[e[r]]),
										(i.resubscribe = !0),
										this.subscribe(i, { properties: i[e[r]].properties });
								}
							} else
								(this._resubscribeTopics.resubscribe = !0),
									this.subscribe(this._resubscribeTopics);
						else this._resubscribeTopics = {};
					this._firstConnection = !1;
				}
				_onConnect(e) {
					if (this.disconnected) {
						this.emit('connect', e);
						return;
					}
					(this.connackPacket = e),
						this.messageIdProvider.clear(),
						this._setupPingTimer(),
						(this.connected = !0);
					let r = () => {
						let i = this.outgoingStore.createStream(),
							n = () => {
								i.destroy(), (i = null), this._flushStoreProcessingQueue(), o();
							},
							o = () => {
								(this._storeProcessing = !1),
									(this._packetIdsDuringStoreProcessing = {});
							};
						this.once('close', n),
							i.on('error', (a) => {
								o(),
									this._flushStoreProcessingQueue(),
									this.removeListener('close', n),
									this.emit('error', a);
							});
						let s = () => {
							if (!i) return;
							let a = i.read(1),
								u;
							if (!a) {
								i.once('readable', s);
								return;
							}
							if (
								((this._storeProcessing = !0),
								this._packetIdsDuringStoreProcessing[a.messageId])
							) {
								s();
								return;
							}
							!this.disconnecting && !this.reconnectTimer
								? ((u = this.outgoing[a.messageId]
										? this.outgoing[a.messageId].cb
										: null),
								  (this.outgoing[a.messageId] = {
										volatile: !1,
										cb(c, h) {
											u && u(c, h), s();
										},
								  }),
								  (this._packetIdsDuringStoreProcessing[a.messageId] = !0),
								  this.messageIdProvider.register(a.messageId)
										? this._sendPacket(a, void 0, void 0, !0)
										: this.log('messageId: %d has already used.', a.messageId))
								: i.destroy && i.destroy();
						};
						i.on('end', () => {
							let a = !0;
							for (let u in this._packetIdsDuringStoreProcessing)
								if (!this._packetIdsDuringStoreProcessing[u]) {
									a = !1;
									break;
								}
							this.removeListener('close', n),
								a
									? (o(),
									  this._invokeAllStoreProcessingQueue(),
									  this.emit('connect', e))
									: r();
						}),
							s();
					};
					r();
				}
				_invokeStoreProcessingQueue() {
					if (!this._storeProcessing && this._storeProcessingQueue.length > 0) {
						let e = this._storeProcessingQueue[0];
						if (e && e.invoke()) return this._storeProcessingQueue.shift(), !0;
					}
					return !1;
				}
				_invokeAllStoreProcessingQueue() {
					for (; this._invokeStoreProcessingQueue(); );
				}
				_flushStoreProcessingQueue() {
					for (let e of this._storeProcessingQueue)
						e.cbStorePut && e.cbStorePut(new Error('Connection closed')),
							e.callback && e.callback(new Error('Connection closed'));
					this._storeProcessingQueue.splice(0);
				}
				_removeOutgoingAndStoreMessage(e, r) {
					delete this.outgoing[e],
						this.outgoingStore.del({ messageId: e }, (i, n) => {
							r(i, n),
								this.messageIdProvider.deallocate(e),
								this._invokeStoreProcessingQueue();
						});
				}
			};
		ns.VERSION = is.MQTTJS_VERSION;
		Qe.default = ns;
	});
	var Hp = M((Ha) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(Ha, '__esModule', { value: !0 });
		var tE = Ma(),
			$a = class {
				constructor() {
					this.numberAllocator = new tE.NumberAllocator(1, 65535);
				}
				allocate() {
					return (this.lastId = this.numberAllocator.alloc()), this.lastId;
				}
				getLastAllocated() {
					return this.lastId;
				}
				register(e) {
					return this.numberAllocator.use(e);
				}
				deallocate(e) {
					this.numberAllocator.free(e);
				}
				clear() {
					this.numberAllocator.clear();
				}
			};
		Ha.default = $a;
	});
	function Ir(t) {
		throw new RangeError(sE[t]);
	}
	function Vp(t, e) {
		let r = t.split('@'),
			i = '';
		r.length > 1 && ((i = r[0] + '@'), (t = r[1]));
		let n = (function (o, s) {
			let a = [],
				u = o.length;
			for (; u--; ) a[u] = s(o[u]);
			return a;
		})((t = t.replace(nE, '.')).split('.'), e).join('.');
		return i + n;
	}
	function Qp(t) {
		let e = [],
			r = 0,
			i = t.length;
		for (; r < i; ) {
			let n = t.charCodeAt(r++);
			if (n >= 55296 && n <= 56319 && r < i) {
				let o = t.charCodeAt(r++);
				(64512 & o) == 56320
					? e.push(((1023 & n) << 10) + (1023 & o) + 65536)
					: (e.push(n), r--);
			} else e.push(n);
		}
		return e;
	}
	var rE,
		iE,
		nE,
		sE,
		dt,
		Va,
		zp,
		Yp,
		Kp,
		Gp,
		zt,
		Jp = we(() => {
			v();
			m();
			_();
			(rE = /^xn--/),
				(iE = /[^\0-\x7E]/),
				(nE = /[\x2E\u3002\uFF0E\uFF61]/g),
				(sE = {
					overflow: 'Overflow: input needs wider integers to process',
					'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
					'invalid-input': 'Invalid input',
				}),
				(dt = Math.floor),
				(Va = String.fromCharCode);
			(zp = function (t, e) {
				return t + 22 + 75 * (t < 26) - ((e != 0) << 5);
			}),
				(Yp = function (t, e, r) {
					let i = 0;
					for (t = r ? dt(t / 700) : t >> 1, t += dt(t / e); t > 455; i += 36)
						t = dt(t / 35);
					return dt(i + (36 * t) / (t + 38));
				}),
				(Kp = function (t) {
					let e = [],
						r = t.length,
						i = 0,
						n = 128,
						o = 72,
						s = t.lastIndexOf('-');
					s < 0 && (s = 0);
					for (let u = 0; u < s; ++u)
						t.charCodeAt(u) >= 128 && Ir('not-basic'), e.push(t.charCodeAt(u));
					for (let u = s > 0 ? s + 1 : 0; u < r; ) {
						let c = i;
						for (let d = 1, g = 36; ; g += 36) {
							u >= r && Ir('invalid-input');
							let y =
								(a = t.charCodeAt(u++)) - 48 < 10
									? a - 22
									: a - 65 < 26
									? a - 65
									: a - 97 < 26
									? a - 97
									: 36;
							(y >= 36 || y > dt((2147483647 - i) / d)) && Ir('overflow'),
								(i += y * d);
							let w = g <= o ? 1 : g >= o + 26 ? 26 : g - o;
							if (y < w) break;
							let E = 36 - w;
							d > dt(2147483647 / E) && Ir('overflow'), (d *= E);
						}
						let h = e.length + 1;
						(o = Yp(i - c, h, c == 0)),
							dt(i / h) > 2147483647 - n && Ir('overflow'),
							(n += dt(i / h)),
							(i %= h),
							e.splice(i++, 0, n);
					}
					var a;
					return String.fromCodePoint(...e);
				}),
				(Gp = function (t) {
					let e = [],
						r = (t = Qp(t)).length,
						i = 128,
						n = 0,
						o = 72;
					for (let u of t) u < 128 && e.push(Va(u));
					let s = e.length,
						a = s;
					for (s && e.push('-'); a < r; ) {
						let u = 2147483647;
						for (let h of t) h >= i && h < u && (u = h);
						let c = a + 1;
						u - i > dt((2147483647 - n) / c) && Ir('overflow'),
							(n += (u - i) * c),
							(i = u);
						for (let h of t)
							if ((h < i && ++n > 2147483647 && Ir('overflow'), h == i)) {
								let d = n;
								for (let g = 36; ; g += 36) {
									let y = g <= o ? 1 : g >= o + 26 ? 26 : g - o;
									if (d < y) break;
									let w = d - y,
										E = 36 - y;
									e.push(Va(zp(y + (w % E), 0))), (d = dt(w / E));
								}
								e.push(Va(zp(d, 0))), (o = Yp(n, c, a == s)), (n = 0), ++a;
							}
						++n, ++i;
					}
					return e.join('');
				}),
				(zt = {
					version: '2.1.0',
					ucs2: { decode: Qp, encode: (t) => String.fromCodePoint(...t) },
					decode: Kp,
					encode: Gp,
					toASCII: function (t) {
						return Vp(t, function (e) {
							return iE.test(e) ? 'xn--' + Gp(e) : e;
						});
					},
					toUnicode: function (t) {
						return Vp(t, function (e) {
							return rE.test(e) ? Kp(e.slice(4).toLowerCase()) : e;
						});
					},
				});
			zt.decode;
			zt.encode;
			zt.toASCII;
			zt.toUnicode;
			zt.ucs2;
			zt.version;
		});
	function oE(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e);
	}
	var aE,
		ki,
		lE,
		pt,
		Xp = we(() => {
			v();
			m();
			_();
			(aE = function (t, e, r, i) {
				(e = e || '&'), (r = r || '=');
				var n = {};
				if (typeof t != 'string' || t.length === 0) return n;
				var o = /\+/g;
				t = t.split(e);
				var s = 1e3;
				i && typeof i.maxKeys == 'number' && (s = i.maxKeys);
				var a = t.length;
				s > 0 && a > s && (a = s);
				for (var u = 0; u < a; ++u) {
					var c,
						h,
						d,
						g,
						y = t[u].replace(o, '%20'),
						w = y.indexOf(r);
					w >= 0 ? ((c = y.substr(0, w)), (h = y.substr(w + 1))) : ((c = y), (h = '')),
						(d = decodeURIComponent(c)),
						(g = decodeURIComponent(h)),
						oE(n, d)
							? Array.isArray(n[d])
								? n[d].push(g)
								: (n[d] = [n[d], g])
							: (n[d] = g);
				}
				return n;
			}),
				(ki = function (t) {
					switch (typeof t) {
						case 'string':
							return t;
						case 'boolean':
							return t ? 'true' : 'false';
						case 'number':
							return isFinite(t) ? t : '';
						default:
							return '';
					}
				}),
				(lE = function (t, e, r, i) {
					return (
						(e = e || '&'),
						(r = r || '='),
						t === null && (t = void 0),
						typeof t == 'object'
							? Object.keys(t)
									.map(function (n) {
										var o = encodeURIComponent(ki(n)) + r;
										return Array.isArray(t[n])
											? t[n]
													.map(function (s) {
														return o + encodeURIComponent(ki(s));
													})
													.join(e)
											: o + encodeURIComponent(ki(t[n]));
									})
									.join(e)
							: i
							? encodeURIComponent(ki(i)) + r + encodeURIComponent(ki(t))
							: ''
					);
				}),
				(pt = {});
			(pt.decode = pt.parse = aE), (pt.encode = pt.stringify = lE);
			pt.decode;
			pt.encode;
			pt.parse;
			pt.stringify;
		});
	function za() {
		throw new Error('setTimeout has not been defined');
	}
	function Ka() {
		throw new Error('clearTimeout has not been defined');
	}
	function tg(t) {
		if (Pt === setTimeout) return setTimeout(t, 0);
		if ((Pt === za || !Pt) && setTimeout) return (Pt = setTimeout), setTimeout(t, 0);
		try {
			return Pt(t, 0);
		} catch {
			try {
				return Pt.call(null, t, 0);
			} catch {
				return Pt.call(this || ii, t, 0);
			}
		}
	}
	function uE() {
		ri && Tr && ((ri = !1), Tr.length ? (kt = Tr.concat(kt)) : (os = -1), kt.length && rg());
	}
	function rg() {
		if (!ri) {
			var t = tg(uE);
			ri = !0;
			for (var e = kt.length; e; ) {
				for (Tr = kt, kt = []; ++os < e; ) Tr && Tr[os].run();
				(os = -1), (e = kt.length);
			}
			(Tr = null),
				(ri = !1),
				(function (r) {
					if (Ot === clearTimeout) return clearTimeout(r);
					if ((Ot === Ka || !Ot) && clearTimeout)
						return (Ot = clearTimeout), clearTimeout(r);
					try {
						Ot(r);
					} catch {
						try {
							return Ot.call(null, r);
						} catch {
							return Ot.call(this || ii, r);
						}
					}
				})(t);
		}
	}
	function Zp(t, e) {
		((this || ii).fun = t), ((this || ii).array = e);
	}
	function Bt() {}
	var eg,
		Pt,
		Ot,
		ii,
		fe,
		Tr,
		kt,
		ri,
		os,
		ne,
		ig = we(() => {
			v();
			m();
			_();
			(ii = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : global),
				(fe = eg = {});
			(function () {
				try {
					Pt = typeof setTimeout == 'function' ? setTimeout : za;
				} catch {
					Pt = za;
				}
				try {
					Ot = typeof clearTimeout == 'function' ? clearTimeout : Ka;
				} catch {
					Ot = Ka;
				}
			})();
			(kt = []), (ri = !1), (os = -1);
			(fe.nextTick = function (t) {
				var e = new Array(arguments.length - 1);
				if (arguments.length > 1)
					for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
				kt.push(new Zp(t, e)), kt.length !== 1 || ri || tg(rg);
			}),
				(Zp.prototype.run = function () {
					(this || ii).fun.apply(null, (this || ii).array);
				}),
				(fe.title = 'browser'),
				(fe.browser = !0),
				(fe.env = {}),
				(fe.argv = []),
				(fe.version = ''),
				(fe.versions = {}),
				(fe.on = Bt),
				(fe.addListener = Bt),
				(fe.once = Bt),
				(fe.off = Bt),
				(fe.removeListener = Bt),
				(fe.removeAllListeners = Bt),
				(fe.emit = Bt),
				(fe.prependListener = Bt),
				(fe.prependOnceListener = Bt),
				(fe.listeners = function (t) {
					return [];
				}),
				(fe.binding = function (t) {
					throw new Error('process.binding is not supported');
				}),
				(fe.cwd = function () {
					return '/';
				}),
				(fe.chdir = function (t) {
					throw new Error('process.chdir is not supported');
				}),
				(fe.umask = function () {
					return 0;
				});
			ne = eg;
			ne.addListener;
			ne.argv;
			ne.binding;
			ne.browser;
			ne.chdir;
			ne.cwd;
			ne.emit;
			ne.env;
			ne.listeners;
			ne.nextTick;
			ne.off;
			ne.on;
			ne.once;
			ne.prependListener;
			ne.prependOnceListener;
			ne.removeAllListeners;
			ne.removeListener;
			ne.title;
			ne.umask;
			ne.version;
			ne.versions;
		});
	function fE() {
		if (ng) return Ga;
		ng = !0;
		var t = (Ga = {}),
			e,
			r;
		function i() {
			throw new Error('setTimeout has not been defined');
		}
		function n() {
			throw new Error('clearTimeout has not been defined');
		}
		(function () {
			try {
				typeof setTimeout == 'function' ? (e = setTimeout) : (e = i);
			} catch {
				e = i;
			}
			try {
				typeof clearTimeout == 'function' ? (r = clearTimeout) : (r = n);
			} catch {
				r = n;
			}
		})();
		function o(E) {
			if (e === setTimeout) return setTimeout(E, 0);
			if ((e === i || !e) && setTimeout) return (e = setTimeout), setTimeout(E, 0);
			try {
				return e(E, 0);
			} catch {
				try {
					return e.call(null, E, 0);
				} catch {
					return e.call(this || ni, E, 0);
				}
			}
		}
		function s(E) {
			if (r === clearTimeout) return clearTimeout(E);
			if ((r === n || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(E);
			try {
				return r(E);
			} catch {
				try {
					return r.call(null, E);
				} catch {
					return r.call(this || ni, E);
				}
			}
		}
		var a = [],
			u = !1,
			c,
			h = -1;
		function d() {
			!u || !c || ((u = !1), c.length ? (a = c.concat(a)) : (h = -1), a.length && g());
		}
		function g() {
			if (!u) {
				var E = o(d);
				u = !0;
				for (var S = a.length; S; ) {
					for (c = a, a = []; ++h < S; ) c && c[h].run();
					(h = -1), (S = a.length);
				}
				(c = null), (u = !1), s(E);
			}
		}
		t.nextTick = function (E) {
			var S = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var I = 1; I < arguments.length; I++) S[I - 1] = arguments[I];
			a.push(new y(E, S)), a.length === 1 && !u && o(g);
		};
		function y(E, S) {
			((this || ni).fun = E), ((this || ni).array = S);
		}
		(y.prototype.run = function () {
			(this || ni).fun.apply(null, (this || ni).array);
		}),
			(t.title = 'browser'),
			(t.browser = !0),
			(t.env = {}),
			(t.argv = []),
			(t.version = ''),
			(t.versions = {});
		function w() {}
		return (
			(t.on = w),
			(t.addListener = w),
			(t.once = w),
			(t.off = w),
			(t.removeListener = w),
			(t.removeAllListeners = w),
			(t.emit = w),
			(t.prependListener = w),
			(t.prependOnceListener = w),
			(t.listeners = function (E) {
				return [];
			}),
			(t.binding = function (E) {
				throw new Error('process.binding is not supported');
			}),
			(t.cwd = function () {
				return '/';
			}),
			(t.chdir = function (E) {
				throw new Error('process.chdir is not supported');
			}),
			(t.umask = function () {
				return 0;
			}),
			Ga
		);
	}
	var Ga,
		ng,
		ni,
		re,
		Qa = we(() => {
			v();
			m();
			_();
			(Ga = {}),
				(ng = !1),
				(ni = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : global);
			re = fE();
			re.platform = 'browser';
			re.addListener;
			re.argv;
			re.binding;
			re.browser;
			re.chdir;
			re.cwd;
			re.emit;
			re.env;
			re.listeners;
			re.nextTick;
			re.off;
			re.on;
			re.once;
			re.prependListener;
			re.prependOnceListener;
			re.removeAllListeners;
			re.removeListener;
			re.title;
			re.umask;
			re.version;
			re.versions;
		});
	function cE() {
		if (sg) return Ya;
		sg = !0;
		var t = re;
		function e(o) {
			if (typeof o != 'string')
				throw new TypeError('Path must be a string. Received ' + JSON.stringify(o));
		}
		function r(o, s) {
			for (var a = '', u = 0, c = -1, h = 0, d, g = 0; g <= o.length; ++g) {
				if (g < o.length) d = o.charCodeAt(g);
				else {
					if (d === 47) break;
					d = 47;
				}
				if (d === 47) {
					if (!(c === g - 1 || h === 1))
						if (c !== g - 1 && h === 2) {
							if (
								a.length < 2 ||
								u !== 2 ||
								a.charCodeAt(a.length - 1) !== 46 ||
								a.charCodeAt(a.length - 2) !== 46
							) {
								if (a.length > 2) {
									var y = a.lastIndexOf('/');
									if (y !== a.length - 1) {
										y === -1
											? ((a = ''), (u = 0))
											: ((a = a.slice(0, y)),
											  (u = a.length - 1 - a.lastIndexOf('/'))),
											(c = g),
											(h = 0);
										continue;
									}
								} else if (a.length === 2 || a.length === 1) {
									(a = ''), (u = 0), (c = g), (h = 0);
									continue;
								}
							}
							s && (a.length > 0 ? (a += '/..') : (a = '..'), (u = 2));
						} else
							a.length > 0 ? (a += '/' + o.slice(c + 1, g)) : (a = o.slice(c + 1, g)),
								(u = g - c - 1);
					(c = g), (h = 0);
				} else d === 46 && h !== -1 ? ++h : (h = -1);
			}
			return a;
		}
		function i(o, s) {
			var a = s.dir || s.root,
				u = s.base || (s.name || '') + (s.ext || '');
			return a ? (a === s.root ? a + u : a + o + u) : u;
		}
		var n = {
			resolve: function () {
				for (var s = '', a = !1, u, c = arguments.length - 1; c >= -1 && !a; c--) {
					var h;
					c >= 0 ? (h = arguments[c]) : (u === void 0 && (u = t.cwd()), (h = u)),
						e(h),
						h.length !== 0 && ((s = h + '/' + s), (a = h.charCodeAt(0) === 47));
				}
				return (s = r(s, !a)), a ? (s.length > 0 ? '/' + s : '/') : s.length > 0 ? s : '.';
			},
			normalize: function (s) {
				if ((e(s), s.length === 0)) return '.';
				var a = s.charCodeAt(0) === 47,
					u = s.charCodeAt(s.length - 1) === 47;
				return (
					(s = r(s, !a)),
					s.length === 0 && !a && (s = '.'),
					s.length > 0 && u && (s += '/'),
					a ? '/' + s : s
				);
			},
			isAbsolute: function (s) {
				return e(s), s.length > 0 && s.charCodeAt(0) === 47;
			},
			join: function () {
				if (arguments.length === 0) return '.';
				for (var s, a = 0; a < arguments.length; ++a) {
					var u = arguments[a];
					e(u), u.length > 0 && (s === void 0 ? (s = u) : (s += '/' + u));
				}
				return s === void 0 ? '.' : n.normalize(s);
			},
			relative: function (s, a) {
				if ((e(s), e(a), s === a || ((s = n.resolve(s)), (a = n.resolve(a)), s === a)))
					return '';
				for (var u = 1; u < s.length && s.charCodeAt(u) === 47; ++u);
				for (
					var c = s.length, h = c - u, d = 1;
					d < a.length && a.charCodeAt(d) === 47;
					++d
				);
				for (var g = a.length, y = g - d, w = h < y ? h : y, E = -1, S = 0; S <= w; ++S) {
					if (S === w) {
						if (y > w) {
							if (a.charCodeAt(d + S) === 47) return a.slice(d + S + 1);
							if (S === 0) return a.slice(d + S);
						} else h > w && (s.charCodeAt(u + S) === 47 ? (E = S) : S === 0 && (E = 0));
						break;
					}
					var I = s.charCodeAt(u + S),
						C = a.charCodeAt(d + S);
					if (I !== C) break;
					I === 47 && (E = S);
				}
				var R = '';
				for (S = u + E + 1; S <= c; ++S)
					(S === c || s.charCodeAt(S) === 47) &&
						(R.length === 0 ? (R += '..') : (R += '/..'));
				return R.length > 0
					? R + a.slice(d + E)
					: ((d += E), a.charCodeAt(d) === 47 && ++d, a.slice(d));
			},
			_makeLong: function (s) {
				return s;
			},
			dirname: function (s) {
				if ((e(s), s.length === 0)) return '.';
				for (
					var a = s.charCodeAt(0), u = a === 47, c = -1, h = !0, d = s.length - 1;
					d >= 1;
					--d
				)
					if (((a = s.charCodeAt(d)), a === 47)) {
						if (!h) {
							c = d;
							break;
						}
					} else h = !1;
				return c === -1 ? (u ? '/' : '.') : u && c === 1 ? '//' : s.slice(0, c);
			},
			basename: function (s, a) {
				if (a !== void 0 && typeof a != 'string')
					throw new TypeError('"ext" argument must be a string');
				e(s);
				var u = 0,
					c = -1,
					h = !0,
					d;
				if (a !== void 0 && a.length > 0 && a.length <= s.length) {
					if (a.length === s.length && a === s) return '';
					var g = a.length - 1,
						y = -1;
					for (d = s.length - 1; d >= 0; --d) {
						var w = s.charCodeAt(d);
						if (w === 47) {
							if (!h) {
								u = d + 1;
								break;
							}
						} else
							y === -1 && ((h = !1), (y = d + 1)),
								g >= 0 &&
									(w === a.charCodeAt(g)
										? --g === -1 && (c = d)
										: ((g = -1), (c = y)));
					}
					return u === c ? (c = y) : c === -1 && (c = s.length), s.slice(u, c);
				} else {
					for (d = s.length - 1; d >= 0; --d)
						if (s.charCodeAt(d) === 47) {
							if (!h) {
								u = d + 1;
								break;
							}
						} else c === -1 && ((h = !1), (c = d + 1));
					return c === -1 ? '' : s.slice(u, c);
				}
			},
			extname: function (s) {
				e(s);
				for (var a = -1, u = 0, c = -1, h = !0, d = 0, g = s.length - 1; g >= 0; --g) {
					var y = s.charCodeAt(g);
					if (y === 47) {
						if (!h) {
							u = g + 1;
							break;
						}
						continue;
					}
					c === -1 && ((h = !1), (c = g + 1)),
						y === 46 ? (a === -1 ? (a = g) : d !== 1 && (d = 1)) : a !== -1 && (d = -1);
				}
				return a === -1 || c === -1 || d === 0 || (d === 1 && a === c - 1 && a === u + 1)
					? ''
					: s.slice(a, c);
			},
			format: function (s) {
				if (s === null || typeof s != 'object')
					throw new TypeError(
						'The "pathObject" argument must be of type Object. Received type ' +
							typeof s
					);
				return i('/', s);
			},
			parse: function (s) {
				e(s);
				var a = { root: '', dir: '', base: '', ext: '', name: '' };
				if (s.length === 0) return a;
				var u = s.charCodeAt(0),
					c = u === 47,
					h;
				c ? ((a.root = '/'), (h = 1)) : (h = 0);
				for (var d = -1, g = 0, y = -1, w = !0, E = s.length - 1, S = 0; E >= h; --E) {
					if (((u = s.charCodeAt(E)), u === 47)) {
						if (!w) {
							g = E + 1;
							break;
						}
						continue;
					}
					y === -1 && ((w = !1), (y = E + 1)),
						u === 46 ? (d === -1 ? (d = E) : S !== 1 && (S = 1)) : d !== -1 && (S = -1);
				}
				return (
					d === -1 || y === -1 || S === 0 || (S === 1 && d === y - 1 && d === g + 1)
						? y !== -1 &&
						  (g === 0 && c
								? (a.base = a.name = s.slice(1, y))
								: (a.base = a.name = s.slice(g, y)))
						: (g === 0 && c
								? ((a.name = s.slice(1, d)), (a.base = s.slice(1, y)))
								: ((a.name = s.slice(g, d)), (a.base = s.slice(g, y))),
						  (a.ext = s.slice(d, y))),
					g > 0 ? (a.dir = s.slice(0, g - 1)) : c && (a.dir = '/'),
					a
				);
			},
			sep: '/',
			delimiter: ':',
			win32: null,
			posix: null,
		};
		return (n.posix = n), (Ya = n), Ya;
	}
	var Ya,
		sg,
		Ja,
		og = we(() => {
			v();
			m();
			_();
			Qa();
			(Ya = {}), (sg = !1);
			Ja = cE();
		});
	var pg = {};
	Qt(pg, {
		URL: () => FE,
		Url: () => UE,
		default: () => Z,
		fileURLToPath: () => hg,
		format: () => NE,
		parse: () => jE,
		pathToFileURL: () => dg,
		resolve: () => qE,
		resolveObject: () => DE,
	});
	function Fe() {
		(this.protocol = null),
			(this.slashes = null),
			(this.auth = null),
			(this.host = null),
			(this.port = null),
			(this.hostname = null),
			(this.hash = null),
			(this.search = null),
			(this.query = null),
			(this.pathname = null),
			(this.path = null),
			(this.href = null);
	}
	function xi(t, e, r) {
		if (t && gt.isObject(t) && t instanceof Fe) return t;
		var i = new Fe();
		return i.parse(t, e, r), i;
	}
	function _E() {
		if (fg) return el;
		fg = !0;
		var t = ne;
		function e(o) {
			if (typeof o != 'string')
				throw new TypeError('Path must be a string. Received ' + JSON.stringify(o));
		}
		function r(o, s) {
			for (var a = '', u = 0, c = -1, h = 0, d, g = 0; g <= o.length; ++g) {
				if (g < o.length) d = o.charCodeAt(g);
				else {
					if (d === 47) break;
					d = 47;
				}
				if (d === 47) {
					if (!(c === g - 1 || h === 1))
						if (c !== g - 1 && h === 2) {
							if (
								a.length < 2 ||
								u !== 2 ||
								a.charCodeAt(a.length - 1) !== 46 ||
								a.charCodeAt(a.length - 2) !== 46
							) {
								if (a.length > 2) {
									var y = a.lastIndexOf('/');
									if (y !== a.length - 1) {
										y === -1
											? ((a = ''), (u = 0))
											: ((a = a.slice(0, y)),
											  (u = a.length - 1 - a.lastIndexOf('/'))),
											(c = g),
											(h = 0);
										continue;
									}
								} else if (a.length === 2 || a.length === 1) {
									(a = ''), (u = 0), (c = g), (h = 0);
									continue;
								}
							}
							s && (a.length > 0 ? (a += '/..') : (a = '..'), (u = 2));
						} else
							a.length > 0 ? (a += '/' + o.slice(c + 1, g)) : (a = o.slice(c + 1, g)),
								(u = g - c - 1);
					(c = g), (h = 0);
				} else d === 46 && h !== -1 ? ++h : (h = -1);
			}
			return a;
		}
		function i(o, s) {
			var a = s.dir || s.root,
				u = s.base || (s.name || '') + (s.ext || '');
			return a ? (a === s.root ? a + u : a + o + u) : u;
		}
		var n = {
			resolve: function () {
				for (var s = '', a = !1, u, c = arguments.length - 1; c >= -1 && !a; c--) {
					var h;
					c >= 0 ? (h = arguments[c]) : (u === void 0 && (u = t.cwd()), (h = u)),
						e(h),
						h.length !== 0 && ((s = h + '/' + s), (a = h.charCodeAt(0) === 47));
				}
				return (s = r(s, !a)), a ? (s.length > 0 ? '/' + s : '/') : s.length > 0 ? s : '.';
			},
			normalize: function (s) {
				if ((e(s), s.length === 0)) return '.';
				var a = s.charCodeAt(0) === 47,
					u = s.charCodeAt(s.length - 1) === 47;
				return (
					(s = r(s, !a)),
					s.length === 0 && !a && (s = '.'),
					s.length > 0 && u && (s += '/'),
					a ? '/' + s : s
				);
			},
			isAbsolute: function (s) {
				return e(s), s.length > 0 && s.charCodeAt(0) === 47;
			},
			join: function () {
				if (arguments.length === 0) return '.';
				for (var s, a = 0; a < arguments.length; ++a) {
					var u = arguments[a];
					e(u), u.length > 0 && (s === void 0 ? (s = u) : (s += '/' + u));
				}
				return s === void 0 ? '.' : n.normalize(s);
			},
			relative: function (s, a) {
				if ((e(s), e(a), s === a || ((s = n.resolve(s)), (a = n.resolve(a)), s === a)))
					return '';
				for (var u = 1; u < s.length && s.charCodeAt(u) === 47; ++u);
				for (
					var c = s.length, h = c - u, d = 1;
					d < a.length && a.charCodeAt(d) === 47;
					++d
				);
				for (var g = a.length, y = g - d, w = h < y ? h : y, E = -1, S = 0; S <= w; ++S) {
					if (S === w) {
						if (y > w) {
							if (a.charCodeAt(d + S) === 47) return a.slice(d + S + 1);
							if (S === 0) return a.slice(d + S);
						} else h > w && (s.charCodeAt(u + S) === 47 ? (E = S) : S === 0 && (E = 0));
						break;
					}
					var I = s.charCodeAt(u + S),
						C = a.charCodeAt(d + S);
					if (I !== C) break;
					I === 47 && (E = S);
				}
				var R = '';
				for (S = u + E + 1; S <= c; ++S)
					(S === c || s.charCodeAt(S) === 47) &&
						(R.length === 0 ? (R += '..') : (R += '/..'));
				return R.length > 0
					? R + a.slice(d + E)
					: ((d += E), a.charCodeAt(d) === 47 && ++d, a.slice(d));
			},
			_makeLong: function (s) {
				return s;
			},
			dirname: function (s) {
				if ((e(s), s.length === 0)) return '.';
				for (
					var a = s.charCodeAt(0), u = a === 47, c = -1, h = !0, d = s.length - 1;
					d >= 1;
					--d
				)
					if (((a = s.charCodeAt(d)), a === 47)) {
						if (!h) {
							c = d;
							break;
						}
					} else h = !1;
				return c === -1 ? (u ? '/' : '.') : u && c === 1 ? '//' : s.slice(0, c);
			},
			basename: function (s, a) {
				if (a !== void 0 && typeof a != 'string')
					throw new TypeError('"ext" argument must be a string');
				e(s);
				var u = 0,
					c = -1,
					h = !0,
					d;
				if (a !== void 0 && a.length > 0 && a.length <= s.length) {
					if (a.length === s.length && a === s) return '';
					var g = a.length - 1,
						y = -1;
					for (d = s.length - 1; d >= 0; --d) {
						var w = s.charCodeAt(d);
						if (w === 47) {
							if (!h) {
								u = d + 1;
								break;
							}
						} else
							y === -1 && ((h = !1), (y = d + 1)),
								g >= 0 &&
									(w === a.charCodeAt(g)
										? --g === -1 && (c = d)
										: ((g = -1), (c = y)));
					}
					return u === c ? (c = y) : c === -1 && (c = s.length), s.slice(u, c);
				} else {
					for (d = s.length - 1; d >= 0; --d)
						if (s.charCodeAt(d) === 47) {
							if (!h) {
								u = d + 1;
								break;
							}
						} else c === -1 && ((h = !1), (c = d + 1));
					return c === -1 ? '' : s.slice(u, c);
				}
			},
			extname: function (s) {
				e(s);
				for (var a = -1, u = 0, c = -1, h = !0, d = 0, g = s.length - 1; g >= 0; --g) {
					var y = s.charCodeAt(g);
					if (y === 47) {
						if (!h) {
							u = g + 1;
							break;
						}
						continue;
					}
					c === -1 && ((h = !1), (c = g + 1)),
						y === 46 ? (a === -1 ? (a = g) : d !== 1 && (d = 1)) : a !== -1 && (d = -1);
				}
				return a === -1 || c === -1 || d === 0 || (d === 1 && a === c - 1 && a === u + 1)
					? ''
					: s.slice(a, c);
			},
			format: function (s) {
				if (s === null || typeof s != 'object')
					throw new TypeError(
						'The "pathObject" argument must be of type Object. Received type ' +
							typeof s
					);
				return i('/', s);
			},
			parse: function (s) {
				e(s);
				var a = { root: '', dir: '', base: '', ext: '', name: '' };
				if (s.length === 0) return a;
				var u = s.charCodeAt(0),
					c = u === 47,
					h;
				c ? ((a.root = '/'), (h = 1)) : (h = 0);
				for (var d = -1, g = 0, y = -1, w = !0, E = s.length - 1, S = 0; E >= h; --E) {
					if (((u = s.charCodeAt(E)), u === 47)) {
						if (!w) {
							g = E + 1;
							break;
						}
						continue;
					}
					y === -1 && ((w = !1), (y = E + 1)),
						u === 46 ? (d === -1 ? (d = E) : S !== 1 && (S = 1)) : d !== -1 && (S = -1);
				}
				return (
					d === -1 || y === -1 || S === 0 || (S === 1 && d === y - 1 && d === g + 1)
						? y !== -1 &&
						  (g === 0 && c
								? (a.base = a.name = s.slice(1, y))
								: (a.base = a.name = s.slice(g, y)))
						: (g === 0 && c
								? ((a.name = s.slice(1, d)), (a.base = s.slice(1, y)))
								: ((a.name = s.slice(g, d)), (a.base = s.slice(g, y))),
						  (a.ext = s.slice(d, y))),
					g > 0 ? (a.dir = s.slice(0, g - 1)) : c && (a.dir = '/'),
					a
				);
			},
			sep: '/',
			delimiter: ':',
			win32: null,
			posix: null,
		};
		return (n.posix = n), (el = n), el;
	}
	function OE(t) {
		if (typeof t == 'string') t = new URL(t);
		else if (!(t instanceof URL))
			throw new Deno.errors.InvalidData('invalid argument path , must be a string or URL');
		if (t.protocol !== 'file:') throw new Deno.errors.InvalidData('invalid url scheme');
		return rl ? kE(t) : xE(t);
	}
	function kE(t) {
		let e = t.hostname,
			r = t.pathname;
		for (let i = 0; i < r.length; i++)
			if (r[i] === '%') {
				let n = r.codePointAt(i + 2) || 32;
				if ((r[i + 1] === '2' && n === 102) || (r[i + 1] === '5' && n === 99))
					throw new Deno.errors.InvalidData(
						'must not include encoded \\ or / characters'
					);
			}
		if (((r = r.replace(IE, '\\')), (r = decodeURIComponent(r)), e !== ''))
			return `\\\\${e}${r}`;
		{
			let i = r.codePointAt(1) | 32,
				n = r[2];
			if (i < SE || i > AE || n !== ':')
				throw new Deno.errors.InvalidData('file url path must be absolute');
			return r.slice(1);
		}
	}
	function xE(t) {
		if (t.hostname !== '') throw new Deno.errors.InvalidData('invalid file url hostname');
		let e = t.pathname;
		for (let r = 0; r < e.length; r++)
			if (e[r] === '%') {
				let i = e.codePointAt(r + 2) || 32;
				if (e[r + 1] === '2' && i === 102)
					throw new Deno.errors.InvalidData('must not include encoded / characters');
			}
		return decodeURIComponent(e);
	}
	function ME(t) {
		let e = cg.resolve(t),
			r = t.charCodeAt(t.length - 1);
		(r === EE || (rl && r === vE)) && e[e.length - 1] !== cg.sep && (e += '/');
		let i = new URL('file://');
		return (
			e.includes('%') && (e = e.replace(TE, '%25')),
			!rl && e.includes('\\') && (e = e.replace(RE, '%5C')),
			e.includes(`
`) && (e = e.replace(CE, '%0A')),
			e.includes('\r') && (e = e.replace(BE, '%0D')),
			e.includes('	') && (e = e.replace(PE, '%09')),
			(i.pathname = e),
			i
		);
	}
	function hg(t) {
		if (typeof t == 'string') t = new URL(t);
		else if (!(t instanceof URL))
			throw new Deno.errors.InvalidData('invalid argument path , must be a string or URL');
		if (t.protocol !== 'file:') throw new Deno.errors.InvalidData('invalid url scheme');
		return il ? XE(t) : ZE(t);
	}
	function XE(t) {
		let e = t.hostname,
			r = t.pathname;
		for (let i = 0; i < r.length; i++)
			if (r[i] === '%') {
				let n = r.codePointAt(i + 2) || 32;
				if ((r[i + 1] === '2' && n === 102) || (r[i + 1] === '5' && n === 99))
					throw new Deno.errors.InvalidData(
						'must not include encoded \\ or / characters'
					);
			}
		if (((r = r.replace(zE, '\\')), (r = decodeURIComponent(r)), e !== ''))
			return `\\\\${e}${r}`;
		{
			let i = r.codePointAt(1) | 32,
				n = r[2];
			if (i < HE || i > VE || n !== ':')
				throw new Deno.errors.InvalidData('file url path must be absolute');
			return r.slice(1);
		}
	}
	function ZE(t) {
		if (t.hostname !== '') throw new Deno.errors.InvalidData('invalid file url hostname');
		let e = t.pathname;
		for (let r = 0; r < e.length; r++)
			if (e[r] === '%') {
				let i = e.codePointAt(r + 2) || 32;
				if (e[r + 1] === '2' && i === 102)
					throw new Deno.errors.InvalidData('must not include encoded / characters');
			}
		return decodeURIComponent(e);
	}
	function dg(t) {
		let e = Ja.resolve(t),
			r = t.charCodeAt(t.length - 1);
		(r === $E || (il && r === WE)) && e[e.length - 1] !== Ja.sep && (e += '/');
		let i = new URL('file://');
		return (
			e.includes('%') && (e = e.replace(KE, '%25')),
			!il && e.includes('\\') && (e = e.replace(GE, '%5C')),
			e.includes(`
`) && (e = e.replace(QE, '%0A')),
			e.includes('\r') && (e = e.replace(YE, '%0D')),
			e.includes('	') && (e = e.replace(JE, '%09')),
			(i.pathname = e),
			i
		);
	}
	var Z,
		hE,
		gt,
		dE,
		pE,
		gE,
		yE,
		tl,
		ag,
		lg,
		ug,
		bE,
		wE,
		Xa,
		si,
		Za,
		el,
		fg,
		cg,
		mE,
		vE,
		EE,
		SE,
		AE,
		rl,
		IE,
		TE,
		RE,
		CE,
		BE,
		PE,
		LE,
		UE,
		NE,
		qE,
		DE,
		jE,
		FE,
		WE,
		$E,
		HE,
		VE,
		il,
		zE,
		KE,
		GE,
		QE,
		YE,
		JE,
		gg = we(() => {
			v();
			m();
			_();
			Jp();
			Xp();
			ig();
			og();
			Qa();
			(Z = {}),
				(hE = zt),
				(gt = {
					isString: function (t) {
						return typeof t == 'string';
					},
					isObject: function (t) {
						return typeof t == 'object' && t !== null;
					},
					isNull: function (t) {
						return t === null;
					},
					isNullOrUndefined: function (t) {
						return t == null;
					},
				});
			(Z.parse = xi),
				(Z.resolve = function (t, e) {
					return xi(t, !1, !0).resolve(e);
				}),
				(Z.resolveObject = function (t, e) {
					return t ? xi(t, !1, !0).resolveObject(e) : e;
				}),
				(Z.format = function (t) {
					return (
						gt.isString(t) && (t = xi(t)),
						t instanceof Fe ? t.format() : Fe.prototype.format.call(t)
					);
				}),
				(Z.Url = Fe);
			(dE = /^([a-z0-9.+-]+:)/i),
				(pE = /:[0-9]*$/),
				(gE = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/),
				(yE = ['{', '}', '|', '\\', '^', '`'].concat([
					'<',
					'>',
					'"',
					'`',
					' ',
					'\r',
					`
`,
					'	',
				])),
				(tl = ["'"].concat(yE)),
				(ag = ['%', '/', '?', ';', '#'].concat(tl)),
				(lg = ['/', '?', '#']),
				(ug = /^[+a-z0-9A-Z_-]{0,63}$/),
				(bE = /^([+a-z0-9A-Z_-]{0,63})(.*)$/),
				(wE = { javascript: !0, 'javascript:': !0 }),
				(Xa = { javascript: !0, 'javascript:': !0 }),
				(si = {
					http: !0,
					https: !0,
					ftp: !0,
					gopher: !0,
					file: !0,
					'http:': !0,
					'https:': !0,
					'ftp:': !0,
					'gopher:': !0,
					'file:': !0,
				}),
				(Za = pt);
			(Fe.prototype.parse = function (t, e, r) {
				if (!gt.isString(t))
					throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
				var i = t.indexOf('?'),
					n = i !== -1 && i < t.indexOf('#') ? '?' : '#',
					o = t.split(n);
				o[0] = o[0].replace(/\\/g, '/');
				var s = (t = o.join(n));
				if (((s = s.trim()), !r && t.split('#').length === 1)) {
					var a = gE.exec(s);
					if (a)
						return (
							(this.path = s),
							(this.href = s),
							(this.pathname = a[1]),
							a[2]
								? ((this.search = a[2]),
								  (this.query = e
										? Za.parse(this.search.substr(1))
										: this.search.substr(1)))
								: e && ((this.search = ''), (this.query = {})),
							this
						);
				}
				var u = dE.exec(s);
				if (u) {
					var c = (u = u[0]).toLowerCase();
					(this.protocol = c), (s = s.substr(u.length));
				}
				if (r || u || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
					var h = s.substr(0, 2) === '//';
					!h || (u && Xa[u]) || ((s = s.substr(2)), (this.slashes = !0));
				}
				if (!Xa[u] && (h || (u && !si[u]))) {
					for (var d, g, y = -1, w = 0; w < lg.length; w++)
						(E = s.indexOf(lg[w])) !== -1 && (y === -1 || E < y) && (y = E);
					for (
						(g = y === -1 ? s.lastIndexOf('@') : s.lastIndexOf('@', y)) !== -1 &&
							((d = s.slice(0, g)),
							(s = s.slice(g + 1)),
							(this.auth = decodeURIComponent(d))),
							y = -1,
							w = 0;
						w < ag.length;
						w++
					) {
						var E;
						(E = s.indexOf(ag[w])) !== -1 && (y === -1 || E < y) && (y = E);
					}
					y === -1 && (y = s.length),
						(this.host = s.slice(0, y)),
						(s = s.slice(y)),
						this.parseHost(),
						(this.hostname = this.hostname || '');
					var S =
						this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';
					if (!S)
						for (
							var I = this.hostname.split(/\./), C = ((w = 0), I.length);
							w < C;
							w++
						) {
							var R = I[w];
							if (R && !R.match(ug)) {
								for (var U = '', N = 0, W = R.length; N < W; N++)
									R.charCodeAt(N) > 127 ? (U += 'x') : (U += R[N]);
								if (!U.match(ug)) {
									var K = I.slice(0, w),
										z = I.slice(w + 1),
										Q = R.match(bE);
									Q && (K.push(Q[1]), z.unshift(Q[2])),
										z.length && (s = '/' + z.join('.') + s),
										(this.hostname = K.join('.'));
									break;
								}
							}
						}
					this.hostname.length > 255
						? (this.hostname = '')
						: (this.hostname = this.hostname.toLowerCase()),
						S || (this.hostname = hE.toASCII(this.hostname));
					var de = this.port ? ':' + this.port : '',
						Gt = this.hostname || '';
					(this.host = Gt + de),
						(this.href += this.host),
						S &&
							((this.hostname = this.hostname.substr(1, this.hostname.length - 2)),
							s[0] !== '/' && (s = '/' + s));
				}
				if (!wE[c])
					for (w = 0, C = tl.length; w < C; w++) {
						var pe = tl[w];
						if (s.indexOf(pe) !== -1) {
							var Cr = encodeURIComponent(pe);
							Cr === pe && (Cr = escape(pe)), (s = s.split(pe).join(Cr));
						}
					}
				var Br = s.indexOf('#');
				Br !== -1 && ((this.hash = s.substr(Br)), (s = s.slice(0, Br)));
				var Pr = s.indexOf('?');
				if (
					(Pr !== -1
						? ((this.search = s.substr(Pr)),
						  (this.query = s.substr(Pr + 1)),
						  e && (this.query = Za.parse(this.query)),
						  (s = s.slice(0, Pr)))
						: e && ((this.search = ''), (this.query = {})),
					s && (this.pathname = s),
					si[c] && this.hostname && !this.pathname && (this.pathname = '/'),
					this.pathname || this.search)
				) {
					de = this.pathname || '';
					var fs = this.search || '';
					this.path = de + fs;
				}
				return (this.href = this.format()), this;
			}),
				(Fe.prototype.format = function () {
					var t = this.auth || '';
					t && ((t = (t = encodeURIComponent(t)).replace(/%3A/i, ':')), (t += '@'));
					var e = this.protocol || '',
						r = this.pathname || '',
						i = this.hash || '',
						n = !1,
						o = '';
					this.host
						? (n = t + this.host)
						: this.hostname &&
						  ((n =
								t +
								(this.hostname.indexOf(':') === -1
									? this.hostname
									: '[' + this.hostname + ']')),
						  this.port && (n += ':' + this.port)),
						this.query &&
							gt.isObject(this.query) &&
							Object.keys(this.query).length &&
							(o = Za.stringify(this.query));
					var s = this.search || (o && '?' + o) || '';
					return (
						e && e.substr(-1) !== ':' && (e += ':'),
						this.slashes || ((!e || si[e]) && n !== !1)
							? ((n = '//' + (n || '')), r && r.charAt(0) !== '/' && (r = '/' + r))
							: n || (n = ''),
						i && i.charAt(0) !== '#' && (i = '#' + i),
						s && s.charAt(0) !== '?' && (s = '?' + s),
						e +
							n +
							(r = r.replace(/[?#]/g, function (a) {
								return encodeURIComponent(a);
							})) +
							(s = s.replace('#', '%23')) +
							i
					);
				}),
				(Fe.prototype.resolve = function (t) {
					return this.resolveObject(xi(t, !1, !0)).format();
				}),
				(Fe.prototype.resolveObject = function (t) {
					if (gt.isString(t)) {
						var e = new Fe();
						e.parse(t, !1, !0), (t = e);
					}
					for (var r = new Fe(), i = Object.keys(this), n = 0; n < i.length; n++) {
						var o = i[n];
						r[o] = this[o];
					}
					if (((r.hash = t.hash), t.href === '')) return (r.href = r.format()), r;
					if (t.slashes && !t.protocol) {
						for (var s = Object.keys(t), a = 0; a < s.length; a++) {
							var u = s[a];
							u !== 'protocol' && (r[u] = t[u]);
						}
						return (
							si[r.protocol] &&
								r.hostname &&
								!r.pathname &&
								(r.path = r.pathname = '/'),
							(r.href = r.format()),
							r
						);
					}
					if (t.protocol && t.protocol !== r.protocol) {
						if (!si[t.protocol]) {
							for (var c = Object.keys(t), h = 0; h < c.length; h++) {
								var d = c[h];
								r[d] = t[d];
							}
							return (r.href = r.format()), r;
						}
						if (((r.protocol = t.protocol), t.host || Xa[t.protocol]))
							r.pathname = t.pathname;
						else {
							for (
								var g = (t.pathname || '').split('/');
								g.length && !(t.host = g.shift());

							);
							t.host || (t.host = ''),
								t.hostname || (t.hostname = ''),
								g[0] !== '' && g.unshift(''),
								g.length < 2 && g.unshift(''),
								(r.pathname = g.join('/'));
						}
						if (
							((r.search = t.search),
							(r.query = t.query),
							(r.host = t.host || ''),
							(r.auth = t.auth),
							(r.hostname = t.hostname || t.host),
							(r.port = t.port),
							r.pathname || r.search)
						) {
							var y = r.pathname || '',
								w = r.search || '';
							r.path = y + w;
						}
						return (r.slashes = r.slashes || t.slashes), (r.href = r.format()), r;
					}
					var E = r.pathname && r.pathname.charAt(0) === '/',
						S = t.host || (t.pathname && t.pathname.charAt(0) === '/'),
						I = S || E || (r.host && t.pathname),
						C = I,
						R = (r.pathname && r.pathname.split('/')) || [],
						U =
							((g = (t.pathname && t.pathname.split('/')) || []),
							r.protocol && !si[r.protocol]);
					if (
						(U &&
							((r.hostname = ''),
							(r.port = null),
							r.host && (R[0] === '' ? (R[0] = r.host) : R.unshift(r.host)),
							(r.host = ''),
							t.protocol &&
								((t.hostname = null),
								(t.port = null),
								t.host && (g[0] === '' ? (g[0] = t.host) : g.unshift(t.host)),
								(t.host = null)),
							(I = I && (g[0] === '' || R[0] === ''))),
						S)
					)
						(r.host = t.host || t.host === '' ? t.host : r.host),
							(r.hostname =
								t.hostname || t.hostname === '' ? t.hostname : r.hostname),
							(r.search = t.search),
							(r.query = t.query),
							(R = g);
					else if (g.length)
						R || (R = []),
							R.pop(),
							(R = R.concat(g)),
							(r.search = t.search),
							(r.query = t.query);
					else if (!gt.isNullOrUndefined(t.search))
						return (
							U &&
								((r.hostname = r.host = R.shift()),
								(Q = !!(r.host && r.host.indexOf('@') > 0) && r.host.split('@')) &&
									((r.auth = Q.shift()), (r.host = r.hostname = Q.shift()))),
							(r.search = t.search),
							(r.query = t.query),
							(gt.isNull(r.pathname) && gt.isNull(r.search)) ||
								(r.path =
									(r.pathname ? r.pathname : '') + (r.search ? r.search : '')),
							(r.href = r.format()),
							r
						);
					if (!R.length)
						return (
							(r.pathname = null),
							r.search ? (r.path = '/' + r.search) : (r.path = null),
							(r.href = r.format()),
							r
						);
					for (
						var N = R.slice(-1)[0],
							W =
								((r.host || t.host || R.length > 1) && (N === '.' || N === '..')) ||
								N === '',
							K = 0,
							z = R.length;
						z >= 0;
						z--
					)
						(N = R[z]) === '.'
							? R.splice(z, 1)
							: N === '..'
							? (R.splice(z, 1), K++)
							: K && (R.splice(z, 1), K--);
					if (!I && !C) for (; K--; K) R.unshift('..');
					!I || R[0] === '' || (R[0] && R[0].charAt(0) === '/') || R.unshift(''),
						W && R.join('/').substr(-1) !== '/' && R.push('');
					var Q,
						de = R[0] === '' || (R[0] && R[0].charAt(0) === '/');
					return (
						U &&
							((r.hostname = r.host = de ? '' : R.length ? R.shift() : ''),
							(Q = !!(r.host && r.host.indexOf('@') > 0) && r.host.split('@')) &&
								((r.auth = Q.shift()), (r.host = r.hostname = Q.shift()))),
						(I = I || (r.host && R.length)) && !de && R.unshift(''),
						R.length
							? (r.pathname = R.join('/'))
							: ((r.pathname = null), (r.path = null)),
						(gt.isNull(r.pathname) && gt.isNull(r.search)) ||
							(r.path = (r.pathname ? r.pathname : '') + (r.search ? r.search : '')),
						(r.auth = t.auth || r.auth),
						(r.slashes = r.slashes || t.slashes),
						(r.href = r.format()),
						r
					);
				}),
				(Fe.prototype.parseHost = function () {
					var t = this.host,
						e = pE.exec(t);
					e &&
						((e = e[0]) !== ':' && (this.port = e.substr(1)),
						(t = t.substr(0, t.length - e.length))),
						t && (this.hostname = t);
				});
			Z.Url;
			Z.format;
			Z.resolve;
			Z.resolveObject;
			(el = {}), (fg = !1);
			(cg = _E()),
				(mE =
					typeof Deno < 'u'
						? Deno.build.os === 'windows'
							? 'win32'
							: Deno.build.os
						: void 0);
			Z.URL = typeof URL < 'u' ? URL : null;
			Z.pathToFileURL = ME;
			Z.fileURLToPath = OE;
			Z.Url;
			Z.format;
			Z.resolve;
			Z.resolveObject;
			Z.URL;
			(vE = 92),
				(EE = 47),
				(SE = 97),
				(AE = 122),
				(rl = mE === 'win32'),
				(IE = /\//g),
				(TE = /%/g),
				(RE = /\\/g),
				(CE = /\n/g),
				(BE = /\r/g),
				(PE = /\t/g);
			LE =
				typeof Deno < 'u'
					? Deno.build.os === 'windows'
						? 'win32'
						: Deno.build.os
					: void 0;
			Z.URL = typeof URL < 'u' ? URL : null;
			Z.pathToFileURL = dg;
			Z.fileURLToPath = hg;
			(UE = Z.Url),
				(NE = Z.format),
				(qE = Z.resolve),
				(DE = Z.resolveObject),
				(jE = Z.parse),
				(FE = Z.URL),
				(WE = 92),
				($E = 47),
				(HE = 97),
				(VE = 122),
				(il = LE === 'win32'),
				(zE = /\//g),
				(KE = /%/g),
				(GE = /\\/g),
				(QE = /\n/g),
				(YE = /\r/g),
				(JE = /\t/g);
		});
	var nl = {};
	Qt(nl, {
		Server: () => Me,
		Socket: () => Me,
		Stream: () => Me,
		_createServerHandle: () => Me,
		_normalizeArgs: () => Me,
		_setSimultaneousAccepts: () => Me,
		connect: () => Me,
		createConnection: () => Me,
		createServer: () => Me,
		default: () => eS,
		isIP: () => Me,
		isIPv4: () => Me,
		isIPv6: () => Me,
	});
	function Me() {
		throw new Error('Node.js net module is not supported by JSPM core outside of Node.js');
	}
	var eS,
		sl = we(() => {
			v();
			m();
			_();
			eS = {
				_createServerHandle: Me,
				_normalizeArgs: Me,
				_setSimultaneousAccepts: Me,
				connect: Me,
				createConnection: Me,
				createServer: Me,
				isIP: Me,
				isIPv4: Me,
				isIPv6: Me,
				Server: Me,
				Socket: Me,
				Stream: Me,
			};
		});
	var ol = M((Mi) => {
		'use strict';
		v();
		m();
		_();
		var yg =
			(Mi && Mi.__importDefault) ||
			function (t) {
				return t && t.__esModule ? t : { default: t };
			};
		Object.defineProperty(Mi, '__esModule', { value: !0 });
		var tS = yg((sl(), X(nl))),
			rS = yg(ot()),
			iS = (0, rS.default)('mqttjs:tcp'),
			nS = (t, e) => {
				(e.port = e.port || 1883), (e.hostname = e.hostname || e.host || 'localhost');
				let { port: r, path: i } = e,
					n = e.hostname;
				return (
					iS('port %d and host %s', r, n),
					tS.default.createConnection({ port: r, host: n, path: i })
				);
			};
		Mi.default = nS;
	});
	var bg = {};
	Qt(bg, { default: () => sS });
	var sS,
		wg = we(() => {
			v();
			m();
			_();
			sS = {};
		});
	var ll = M((Li) => {
		'use strict';
		v();
		m();
		_();
		var al =
			(Li && Li.__importDefault) ||
			function (t) {
				return t && t.__esModule ? t : { default: t };
			};
		Object.defineProperty(Li, '__esModule', { value: !0 });
		var oS = al((wg(), X(bg))),
			aS = al((sl(), X(nl))),
			lS = al(ot()),
			uS = (0, lS.default)('mqttjs:tls'),
			fS = (t, e) => {
				(e.port = e.port || 8883),
					(e.host = e.hostname || e.host || 'localhost'),
					aS.default.isIP(e.host) === 0 && (e.servername = e.host),
					(e.rejectUnauthorized = e.rejectUnauthorized !== !1),
					delete e.path,
					uS(
						'port %d host %s rejectUnauthorized %b',
						e.port,
						e.host,
						e.rejectUnauthorized
					);
				let r = oS.default.connect(e);
				r.on('secureConnect', () => {
					e.rejectUnauthorized && !r.authorized
						? r.emit('error', new Error('TLS not authorized'))
						: r.removeListener('error', i);
				});
				function i(n) {
					e.rejectUnauthorized && t.emit('error', n), r.end();
				}
				return r.on('error', i), r;
			};
		Li.default = fS;
	});
	var as = M((oi) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(oi, '__esModule', { value: !0 });
		oi.BufferedDuplex = oi.writev = void 0;
		var cS = jt(),
			_g = (ye(), X(_e));
		function mg(t, e) {
			let r = new Array(t.length);
			for (let i = 0; i < t.length; i++)
				typeof t[i].chunk == 'string'
					? (r[i] = _g.Buffer.from(t[i].chunk, 'utf8'))
					: (r[i] = t[i].chunk);
			this._write(_g.Buffer.concat(r), 'binary', e);
		}
		oi.writev = mg;
		var ul = class extends cS.Duplex {
			constructor(e, r, i) {
				super({ objectMode: !0 }),
					(this.proxy = r),
					(this.socket = i),
					(this.writeQueue = []),
					e.objectMode || (this._writev = mg.bind(this)),
					(this.isSocketOpen = !1),
					this.proxy.on('data', (n) => {
						this.push(n);
					});
			}
			_read(e) {
				this.proxy.read(e);
			}
			_write(e, r, i) {
				this.isSocketOpen
					? this.writeToProxy(e, r, i)
					: this.writeQueue.push({ chunk: e, encoding: r, cb: i });
			}
			_final(e) {
				(this.writeQueue = []), this.proxy.end(e);
			}
			_destroy(e, r) {
				(this.writeQueue = []), this.proxy.destroy(), r(e);
			}
			socketReady() {
				this.emit('connect'), (this.isSocketOpen = !0), this.processWriteQueue();
			}
			writeToProxy(e, r, i) {
				this.proxy.write(e, r) === !1 ? this.proxy.once('drain', i) : i();
			}
			processWriteQueue() {
				for (; this.writeQueue.length > 0; ) {
					let { chunk: e, encoding: r, cb: i } = this.writeQueue.shift();
					this.writeToProxy(e, r, i);
				}
			}
		};
		oi.BufferedDuplex = ul;
	});
	var hl = M((cl) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(cl, '__esModule', { value: !0 });
		var vg = (ye(), X(_e)),
			hS = jt(),
			dS = as(),
			yt,
			fl,
			Le;
		function pS() {
			let t = new hS.Transform();
			return (
				(t._write = (e, r, i) => {
					yt.send({
						data: e.buffer,
						success() {
							i();
						},
						fail(n) {
							i(new Error(n));
						},
					});
				}),
				(t._flush = (e) => {
					yt.close({
						success() {
							e();
						},
					});
				}),
				t
			);
		}
		function gS(t) {
			t.hostname || (t.hostname = 'localhost'),
				t.path || (t.path = '/'),
				t.wsOptions || (t.wsOptions = {});
		}
		function yS(t, e) {
			let r = t.protocol === 'wxs' ? 'wss' : 'ws',
				i = `${r}://${t.hostname}${t.path}`;
			return (
				t.port &&
					t.port !== 80 &&
					t.port !== 443 &&
					(i = `${r}://${t.hostname}:${t.port}${t.path}`),
				typeof t.transformWsUrl == 'function' && (i = t.transformWsUrl(i, t, e)),
				i
			);
		}
		function bS() {
			yt.onOpen(() => {
				Le.socketReady();
			}),
				yt.onMessage((t) => {
					let { data: e } = t;
					e instanceof ArrayBuffer
						? (e = vg.Buffer.from(e))
						: (e = vg.Buffer.from(e, 'utf8')),
						fl.push(e);
				}),
				yt.onClose(() => {
					Le.emit('close'), Le.end(), Le.destroy();
				}),
				yt.onError((t) => {
					let e = new Error(t.errMsg);
					Le.destroy(e);
				});
		}
		var wS = (t, e) => {
			if (((e.hostname = e.hostname || e.host), !e.hostname))
				throw new Error('Could not determine host. Specify host manually.');
			let r = e.protocolId === 'MQIsdp' && e.protocolVersion === 3 ? 'mqttv3.1' : 'mqtt';
			gS(e);
			let i = yS(e, t);
			(yt = wx.connectSocket({ url: i, protocols: [r] })),
				(fl = pS()),
				(Le = new dS.BufferedDuplex(e, fl, yt)),
				(Le._destroy = (o, s) => {
					yt.close({
						success() {
							s && s(o);
						},
					});
				});
			let n = Le.destroy;
			return (
				(Le.destroy = (o, s) => (
					(Le.destroy = n),
					setTimeout(() => {
						yt.close({
							fail() {
								Le._destroy(o, s);
							},
						});
					}, 0),
					Le
				)),
				bS(),
				Le
			);
		};
		cl.default = wS;
	});
	var gl = M((pl) => {
		'use strict';
		v();
		m();
		_();
		Object.defineProperty(pl, '__esModule', { value: !0 });
		var dl = (ye(), X(_e)),
			_S = jt(),
			mS = as(),
			xt,
			ls,
			ai,
			Eg = !1;
		function vS() {
			let t = new _S.Transform();
			return (
				(t._write = (e, r, i) => {
					xt.sendSocketMessage({
						data: e.buffer,
						success() {
							i();
						},
						fail() {
							i(new Error());
						},
					});
				}),
				(t._flush = (e) => {
					xt.closeSocket({
						success() {
							e();
						},
					});
				}),
				t
			);
		}
		function ES(t) {
			t.hostname || (t.hostname = 'localhost'),
				t.path || (t.path = '/'),
				t.wsOptions || (t.wsOptions = {});
		}
		function SS(t, e) {
			let r = t.protocol === 'alis' ? 'wss' : 'ws',
				i = `${r}://${t.hostname}${t.path}`;
			return (
				t.port &&
					t.port !== 80 &&
					t.port !== 443 &&
					(i = `${r}://${t.hostname}:${t.port}${t.path}`),
				typeof t.transformWsUrl == 'function' && (i = t.transformWsUrl(i, t, e)),
				i
			);
		}
		function AS() {
			Eg ||
				((Eg = !0),
				xt.onSocketOpen(() => {
					ai.socketReady();
				}),
				xt.onSocketMessage((t) => {
					if (typeof t.data == 'string') {
						let e = dl.Buffer.from(t.data, 'base64');
						ls.push(e);
					} else {
						let e = new FileReader();
						e.addEventListener('load', () => {
							let r = e.result;
							r instanceof ArrayBuffer
								? (r = dl.Buffer.from(r))
								: (r = dl.Buffer.from(r, 'utf8')),
								ls.push(r);
						}),
							e.readAsArrayBuffer(t.data);
					}
				}),
				xt.onSocketClose(() => {
					ai.end(), ai.destroy();
				}),
				xt.onSocketError((t) => {
					ai.destroy(t);
				}));
		}
		var IS = (t, e) => {
			if (((e.hostname = e.hostname || e.host), !e.hostname))
				throw new Error('Could not determine host. Specify host manually.');
			let r = e.protocolId === 'MQIsdp' && e.protocolVersion === 3 ? 'mqttv3.1' : 'mqtt';
			ES(e);
			let i = SS(e, t);
			return (
				(xt = e.my),
				xt.connectSocket({ url: i, protocols: r }),
				(ls = vS()),
				(ai = new mS.BufferedDuplex(e, ls, xt)),
				AS(),
				ai
			);
		};
		pl.default = IS;
	});
	var Ag = M((WU, Sg) => {
		'use strict';
		v();
		m();
		_();
		Sg.exports = function () {
			throw new Error(
				'ws does not work in the browser. Browser clients must use the native WebSocket object'
			);
		};
	});
	var _l = M((Ui) => {
		'use strict';
		v();
		m();
		_();
		var wl =
			(Ui && Ui.__importDefault) ||
			function (t) {
				return t && t.__esModule ? t : { default: t };
			};
		Object.defineProperty(Ui, '__esModule', { value: !0 });
		var yl = (ye(), X(_e)),
			Ig = wl(Ag()),
			TS = wl(ot()),
			RS = jt(),
			Tg = wl(Pi()),
			bl = as(),
			Kt = (0, TS.default)('mqttjs:ws'),
			CS = ['rejectUnauthorized', 'ca', 'cert', 'key', 'pfx', 'passphrase'];
		function Rg(t, e) {
			let r = `${t.protocol}://${t.hostname}:${t.port}${t.path}`;
			return typeof t.transformWsUrl == 'function' && (r = t.transformWsUrl(r, t, e)), r;
		}
		function Cg(t) {
			let e = t;
			return (
				t.hostname || (e.hostname = 'localhost'),
				t.port || (t.protocol === 'wss' ? (e.port = 443) : (e.port = 80)),
				t.path || (e.path = '/'),
				t.wsOptions || (e.wsOptions = {}),
				!Tg.default &&
					t.protocol === 'wss' &&
					CS.forEach((r) => {
						Object.prototype.hasOwnProperty.call(t, r) &&
							!Object.prototype.hasOwnProperty.call(t.wsOptions, r) &&
							(e.wsOptions[r] = t[r]);
					}),
				e
			);
		}
		function BS(t) {
			let e = Cg(t);
			if ((e.hostname || (e.hostname = e.host), !e.hostname)) {
				if (typeof document > 'u')
					throw new Error('Could not determine host. Specify host manually.');
				let r = new URL(document.URL);
				(e.hostname = r.hostname), e.port || (e.port = Number(r.port));
			}
			return (
				e.objectMode === void 0 &&
					(e.objectMode = !(e.binary === !0 || e.binary === void 0)),
				e
			);
		}
		function PS(t, e, r) {
			Kt('createWebSocket'), Kt(`protocol: ${r.protocolId} ${r.protocolVersion}`);
			let i = r.protocolId === 'MQIsdp' && r.protocolVersion === 3 ? 'mqttv3.1' : 'mqtt';
			Kt(`creating new Websocket for url: ${e} and protocol: ${i}`);
			let n;
			return (
				r.createWebsocket
					? (n = r.createWebsocket(e, [i], r))
					: (n = new Ig.default(e, [i], r.wsOptions)),
				n
			);
		}
		function OS(t, e) {
			let r = e.protocolId === 'MQIsdp' && e.protocolVersion === 3 ? 'mqttv3.1' : 'mqtt',
				i = Rg(e, t),
				n;
			return (
				e.createWebsocket
					? (n = e.createWebsocket(i, [r], e))
					: (n = new WebSocket(i, [r])),
				(n.binaryType = 'arraybuffer'),
				n
			);
		}
		var kS = (t, e) => {
				Kt('streamBuilder');
				let r = Cg(e),
					i = Rg(r, t),
					n = PS(t, i, r),
					o = Ig.default.createWebSocketStream(n, r.wsOptions);
				return (
					(o.url = i),
					n.on('close', () => {
						o.destroy();
					}),
					o
				);
			},
			xS = (t, e) => {
				Kt('browserStreamBuilder');
				let r,
					n = BS(e).browserBufferSize || 1024 * 512,
					o = e.browserBufferTimeout || 1e3,
					s = !e.objectMode,
					a = OS(t, e),
					u = h(e, E, S);
				e.objectMode || (u._writev = bl.writev.bind(u)),
					u.on('close', () => {
						a.close();
					});
				let c = typeof a.addEventListener < 'u';
				a.readyState === a.OPEN
					? ((r = u), (r.socket = a))
					: ((r = new bl.BufferedDuplex(e, u, a)),
					  c ? a.addEventListener('open', d) : (a.onopen = d)),
					c
						? (a.addEventListener('close', g),
						  a.addEventListener('error', y),
						  a.addEventListener('message', w))
						: ((a.onclose = g), (a.onerror = y), (a.onmessage = w));
				function h(I, C, R) {
					let U = new RS.Transform({ objectMode: I.objectMode });
					return (U._write = C), (U._flush = R), U;
				}
				function d() {
					Kt('WebSocket onOpen'), r instanceof bl.BufferedDuplex && r.socketReady();
				}
				function g(I) {
					Kt('WebSocket onClose', I), r.end(), r.destroy();
				}
				function y(I) {
					Kt('WebSocket onError', I);
					let C = new Error('WebSocket error');
					(C.event = I), r.destroy(C);
				}
				function w(I) {
					let { data: C } = I;
					C instanceof ArrayBuffer
						? (C = yl.Buffer.from(C))
						: (C = yl.Buffer.from(C, 'utf8')),
						u.push(C);
				}
				function E(I, C, R) {
					if (a.bufferedAmount > n) {
						setTimeout(E, o, I, C, R);
						return;
					}
					s && typeof I == 'string' && (I = yl.Buffer.from(I, 'utf8'));
					try {
						a.send(I);
					} catch (U) {
						return R(U);
					}
					R();
				}
				function S(I) {
					a.close(), I();
				}
				return r;
			};
		Ui.default = Tg.default ? xS : kS;
	});
	var Og = M((Rr) => {
		'use strict';
		v();
		m();
		_();
		var us =
			(Rr && Rr.__importDefault) ||
			function (t) {
				return t && t.__esModule ? t : { default: t };
			};
		Object.defineProperty(Rr, '__esModule', { value: !0 });
		Rr.connectAsync = void 0;
		var MS = us(ot()),
			LS = us((gg(), X(pg))),
			US = us(ss()),
			NS = us(Pi());
		typeof (B === null || B === void 0 ? void 0 : B.nextTick) != 'function' &&
			(B.nextTick = setImmediate);
		var Bg = (0, MS.default)('mqttjs'),
			Re = {};
		NS.default
			? ((Re.wx = hl().default),
			  (Re.wxs = hl().default),
			  (Re.ali = gl().default),
			  (Re.alis = gl().default))
			: ((Re.mqtt = ol().default),
			  (Re.tcp = ol().default),
			  (Re.ssl = ll().default),
			  (Re.tls = Re.ssl),
			  (Re.mqtts = ll().default));
		Re.ws = _l().default;
		Re.wss = _l().default;
		function qS(t) {
			let e;
			t.auth &&
				((e = t.auth.match(/^(.+):(.+)$/)),
				e ? ((t.username = e[1]), (t.password = e[2])) : (t.username = t.auth));
		}
		function Pg(t, e) {
			if (
				(Bg('connecting to an MQTT broker...'),
				typeof t == 'object' && !e && ((e = t), (t = '')),
				(e = e || {}),
				t && typeof t == 'string')
			) {
				let n = LS.default.parse(t, !0);
				if (
					(n.port != null && (n.port = Number(n.port)),
					(e = Object.assign(Object.assign({}, n), e)),
					e.protocol === null)
				)
					throw new Error('Missing protocol');
				e.protocol = e.protocol.replace(/:$/, '');
			}
			if (
				(qS(e),
				e.query && typeof e.query.clientId == 'string' && (e.clientId = e.query.clientId),
				e.cert && e.key)
			)
				if (e.protocol) {
					if (['mqtts', 'wss', 'wxs', 'alis'].indexOf(e.protocol) === -1)
						switch (e.protocol) {
							case 'mqtt':
								e.protocol = 'mqtts';
								break;
							case 'ws':
								e.protocol = 'wss';
								break;
							case 'wx':
								e.protocol = 'wxs';
								break;
							case 'ali':
								e.protocol = 'alis';
								break;
							default:
								throw new Error(
									`Unknown protocol for secure connection: "${e.protocol}"!`
								);
						}
				} else throw new Error('Missing secure protocol key');
			if (!Re[e.protocol]) {
				let n = ['mqtts', 'wss'].indexOf(e.protocol) !== -1;
				e.protocol = ['mqtt', 'mqtts', 'ws', 'wss', 'wx', 'wxs', 'ali', 'alis'].filter(
					(o, s) => (n && s % 2 === 0 ? !1 : typeof Re[o] == 'function')
				)[0];
			}
			if (e.clean === !1 && !e.clientId)
				throw new Error('Missing clientId for unclean clients');
			e.protocol && (e.defaultProtocol = e.protocol);
			function r(n) {
				return (
					e.servers &&
						((!n._reconnectCount || n._reconnectCount === e.servers.length) &&
							(n._reconnectCount = 0),
						(e.host = e.servers[n._reconnectCount].host),
						(e.port = e.servers[n._reconnectCount].port),
						(e.protocol = e.servers[n._reconnectCount].protocol
							? e.servers[n._reconnectCount].protocol
							: e.defaultProtocol),
						(e.hostname = e.host),
						n._reconnectCount++),
					Bg('calling streambuilder for', e.protocol),
					Re[e.protocol](n, e)
				);
			}
			let i = new US.default(r, e);
			return i.on('error', () => {}), i;
		}
		function DS(t, e, r = !0) {
			return new Promise((i, n) => {
				let o = Pg(t, e),
					s = {
						connect: (u) => {
							a(), i(o);
						},
						end: () => {
							a(), i(o);
						},
						error: (u) => {
							a(), o.end(), n(u);
						},
					};
				r === !1 &&
					(s.close = () => {
						s.error(new Error("Couldn't connect to server"));
					});
				function a() {
					Object.keys(s).forEach((u) => {
						o.off(u, s[u]);
					});
				}
				Object.keys(s).forEach((u) => {
					o.on(u, s[u]);
				});
			});
		}
		Rr.connectAsync = DS;
		Rr.default = Pg;
	});
	var ml = M((G) => {
		'use strict';
		v();
		m();
		_();
		var kg =
				(G && G.__createBinding) ||
				(Object.create
					? function (t, e, r, i) {
							i === void 0 && (i = r);
							var n = Object.getOwnPropertyDescriptor(e, r);
							(!n || ('get' in n ? !e.__esModule : n.writable || n.configurable)) &&
								(n = {
									enumerable: !0,
									get: function () {
										return e[r];
									},
								}),
								Object.defineProperty(t, i, n);
					  }
					: function (t, e, r, i) {
							i === void 0 && (i = r), (t[i] = e[r]);
					  }),
			jS =
				(G && G.__setModuleDefault) ||
				(Object.create
					? function (t, e) {
							Object.defineProperty(t, 'default', { enumerable: !0, value: e });
					  }
					: function (t, e) {
							t.default = e;
					  }),
			FS =
				(G && G.__importStar) ||
				function (t) {
					if (t && t.__esModule) return t;
					var e = {};
					if (t != null)
						for (var r in t)
							r !== 'default' &&
								Object.prototype.hasOwnProperty.call(t, r) &&
								kg(e, t, r);
					return jS(e, t), e;
				},
			xg =
				(G && G.__exportStar) ||
				function (t, e) {
					for (var r in t)
						r !== 'default' &&
							!Object.prototype.hasOwnProperty.call(e, r) &&
							kg(e, t, r);
				},
			Ni =
				(G && G.__importDefault) ||
				function (t) {
					return t && t.__esModule ? t : { default: t };
				};
		Object.defineProperty(G, '__esModule', { value: !0 });
		G.ReasonCodes =
			G.PingTimer =
			G.UniqueMessageIdProvider =
			G.DefaultMessageIdProvider =
			G.Store =
			G.MqttClient =
			G.connectAsync =
			G.connect =
			G.Client =
				void 0;
		var Mg = Ni(ss());
		G.MqttClient = Mg.default;
		var WS = Ni(Jo());
		G.DefaultMessageIdProvider = WS.default;
		var $S = Ni(Hp());
		G.UniqueMessageIdProvider = $S.default;
		var HS = Ni(ea());
		G.Store = HS.default;
		var Lg = FS(Og());
		G.connect = Lg.default;
		Object.defineProperty(G, 'connectAsync', {
			enumerable: !0,
			get: function () {
				return Lg.connectAsync;
			},
		});
		var VS = Ni(ja());
		G.PingTimer = VS.default;
		G.Client = Mg.default;
		xg(ss(), G);
		xg(Jr(), G);
		var zS = Ai();
		Object.defineProperty(G, 'ReasonCodes', {
			enumerable: !0,
			get: function () {
				return zS.ReasonCodes;
			},
		});
	});
	var JS = M((We) => {
		v();
		m();
		_();
		var Ug =
				(We && We.__createBinding) ||
				(Object.create
					? function (t, e, r, i) {
							i === void 0 && (i = r);
							var n = Object.getOwnPropertyDescriptor(e, r);
							(!n || ('get' in n ? !e.__esModule : n.writable || n.configurable)) &&
								(n = {
									enumerable: !0,
									get: function () {
										return e[r];
									},
								}),
								Object.defineProperty(t, i, n);
					  }
					: function (t, e, r, i) {
							i === void 0 && (i = r), (t[i] = e[r]);
					  }),
			KS =
				(We && We.__setModuleDefault) ||
				(Object.create
					? function (t, e) {
							Object.defineProperty(t, 'default', { enumerable: !0, value: e });
					  }
					: function (t, e) {
							t.default = e;
					  }),
			GS =
				(We && We.__importStar) ||
				function (t) {
					if (t && t.__esModule) return t;
					var e = {};
					if (t != null)
						for (var r in t)
							r !== 'default' &&
								Object.prototype.hasOwnProperty.call(t, r) &&
								Ug(e, t, r);
					return KS(e, t), e;
				},
			QS =
				(We && We.__exportStar) ||
				function (t, e) {
					for (var r in t)
						r !== 'default' &&
							!Object.prototype.hasOwnProperty.call(e, r) &&
							Ug(e, t, r);
				};
		Object.defineProperty(We, '__esModule', { value: !0 });
		var YS = GS(ml());
		We.default = YS;
		QS(ml(), We);
	});
	return JS();
})();
/*! Bundled license information:
@jspm/core/nodelibs/browser/buffer.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
function gettoken() {
	fetch('https://protrade.finsc.vn/api/sckt')
		.then((response) => response.json())
		.then((data) => {
			const token = data.tt;
			const id = '1000049129';
			const currentTime = new Date().getTime();
			const updateTimestamp = Math.floor(currentTime / 1000);
			localStorage.setItem(
				'skdf',
				JSON.stringify({ tt: token, id: id, time: updateTimestamp })
			);
		})
		.catch((error) => {
			console.log('Error fetching token:', error);
		});
}
const last = JSON.parse(localStorage.getItem('skdf'));
const now = new Date().getTime() / 1000;
const eigthToday = new Date().setHours(8, 0, 0, 0) / 1000;
if (!last || (now > eigthToday && last.time < eigthToday)) {
	gettoken();
}
!(function (t, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? e(exports)
		: 'function' == typeof define && define.amd
		? define(['exports'], e)
		: e(((t = 'undefined' != typeof globalThis ? globalThis : t || self).Datafeeds = {}));
})(this, function (t) {
	'use strict';
	function e(t) {
		return void 0 === t ? '' : 'string' == typeof t ? t : t.message;
	}
	class s {
		constructor(t, e, s) {
			(this.i = t),
				(this.u = 'https://services.entrade.com.vn/chart-api/v2/ohlcs'),
				(this.p = 'https://histdatafeed.vps.com.vn/tradingview'),
				(this.m = 'https://app.finsc.vn/api/v1'),
				(this._ = e),
				(this.N = s),
				(this.$ = 0);
		}
		getBars(t, s, i) {
			const o = { 1: 1, 60: '1H', '1D': '1D', W: '1W' }[s] || s;
			let n = { symbol: t.ticker || '', resolution: o, start: i.from, end: i.to };
			let r = ['VNINDEX', 'VN30', 'HNX', 'HNX30'].includes(n.symbol)
					? 'history'
					: ['VN30F1M', 'VN30F2M', 'VN30F1Q', 'VN30F2Q'].includes(n.symbol)
					? 'derivative'
					: 'stock',
				a = 'history' === r ? this.p : this.m;
			return (
				t.ticker.includes('#') && ((a = this.i), (r = 'history')),
				'history' === r && (n.resolution = s),
				void 0 !== t.currency_code && (n.currencyCode = t.currency_code),
				void 0 !== t.unit_id && (n.unitId = t.unit_id),
				new Promise(async (t, s) => {
					try {
						const e = await this._.sendRequest(a, r, n),
							s = this.S(e, n);
						this.N && (await this.F(s, n)), t(s);
					} catch (t) {
						if (t instanceof Error || 'string' == typeof t) {
							s(e(t));
						}
					}
				})
			);
		}
		async F(t, s) {
			let i = t.bars.length;
			try {
				for (
					;
					this.N &&
					this.N.maxResponseLength > 0 &&
					this.N.maxResponseLength === i &&
					s.start < s.end;

				) {
					s.countback && (s.countback = s.countback - i),
						'earliestFirst' === this.N.expectedOrder
							? (s.start = Math.round(t.bars[t.bars.length - 1].time / 1e3))
							: (s.end = Math.round(t.bars[0].time / 1e3));
					const e = await this._.sendRequest(urlX, type, s),
						o = this.S(e);
					(i = o.bars.length),
						'earliestFirst' === this.N.expectedOrder
							? (o.bars[0].time === t.bars[t.bars.length - 1].time && o.bars.shift(),
							  t.bars.push(...o.bars))
							: (o.bars[o.bars.length - 1].time === t.bars[0].time && o.bars.pop(),
							  t.bars.unshift(...o.bars));
				}
			} catch (t) {
				if (t instanceof Error || 'string' == typeof t) {
					e(t);
				}
			}
		}
		S(t, e) {
			const s = [],
				i = { noData: !1 };
			if ('no_data' === t.s || 0 === t.t.length || null === t.t)
				(i.noData = !0),
					(i.nextTime =
						this.$ <= 4 &&
						(t.nextTime
							? t.nextTime
							: (function (t) {
									const e = new Date(t);
									return e.setDate(e.getDate() + 1), e.getTime();
							  })(e.end))),
					(this.$ += 1);
			else {
				const e = void 0 !== t.v,
					i = void 0 !== t.o;
				for (let o = 0; o < t.t.length; ++o) {
					const n = {
						time: 1e3 * t.t[o],
						close: parseFloat(t.c[o]),
						open: parseFloat(t.c[o]),
						high: parseFloat(t.c[o]),
						low: parseFloat(t.c[o]),
					};
					i &&
						((n.open = parseFloat(t.o[o])),
						(n.high = parseFloat(t.h[o])),
						(n.low = parseFloat(t.l[o]))),
						e && (n.volume = parseFloat(t.v[o])),
						s.push(n);
				}
			}
			return { bars: s, meta: i };
		}
	}
	const i = new Map(),
		o = `finsc-hx${c()}-hi${c()}`,
		n = JSON.parse(localStorage.getItem('skdf')),
		r = {
			keepalive: 120,
			clientId: o,
			protocolId: 'MQTT',
			protocolVersion: 5,
			username: n ? n.id : null,
			password: n ? n.tt : null,
			path: '/wss',
		},
		a = new Map(),
		l = mqtt.connect('wss://datafeed-lts.dnse.com.vn', r);
	function c() {
		return Math.floor(1e3 * Math.random());
	}
	function u(t) {
		return ['VNINDEX', 'VN30', 'HNX', 'HNX30'].includes(t)
			? 'index'
			: ['VN30F1M', 'VN30F2M', 'VN30F1Q', 'VN30F2Q'].includes(t)
			? 'derivative'
			: 'stock';
	}
	function babuocgia_css(price, basicPrice, ceilingPrice, floorPrice) {
		return price === basicPrice
			? ['bbg-tc']
			: price === ceilingPrice
			? ['bbg-ce']
			: price === floorPrice
			? ['bbg-fl']
			: price > basicPrice
			? ['bbg-t']
			: ['bbg-g'];
	}
	l.on('error', function (t) {
		l.end();
		gettoken();
	}),
		l.on('reconnect', function () {}),
		l.on('connect', function () {}),
		l.on('close', function () {}),
		l.on('message', function (t, e) {
			const s = JSON.parse(e);
			const k = t.split('/')[3];

			switch (k) {
				case 'OHLC':
					console.log('message', s, 'topic', k);
					let {
						time: t,
						open: e,
						high: o,
						low: n,
						close: r,
						volume: a,
						symbol: l,
						resolution: c,
					} = s;
					const h = `${u(l)}~${l}~${
							{ undefined: 1, HOUR1: '1H', DAY: '1D', W: '1W' }[c] || c
						}`,
						d = i.get(h);
					if (!d) return;
					let p = { time: 1e3 * t, open: e, high: o, low: n, close: r, volume: a };
					(d.lastDailyBar = p), d.handlers.forEach((t) => t.callback(p));
					break;
				case 'TP':
					console.log('message', s, 'topic', k);
					window._finTP = s;
					const tbcc = document.querySelectorAll('.tb_cungcau.tb_body tr');
					if (0 === tbcc.length) return;
					const prices = [
							...(s.ask || [])
								.slice(0, 3)
								.map((ask) => ask.price)
								.reverse(),
							...(s.bid || []).slice(0, 3).map((bid) => bid.price),
						],
						qtty = [
							...(s.ask || [])
								.slice(0, 3)
								.map((ask) => 10 * ask.qtty)
								.reverse(),
							...(s.bid || []).slice(0, 3).map((bid) => 10 * bid.qtty),
						],
						maxQtty = Math.max(...qtty, 10 * si.matchQtty),
						basicPrice = parseFloat(si.basicPrice),
						tradingsession = si.tradingSession;
					tbcc.forEach((tr, index) => {
						const spans = tr.querySelectorAll('span'),
							volWidth = tr.querySelector('.klbar'),
							stepPrice = tr.querySelector('.x1');
						switch (index) {
							case 3:
								const isContinuous =
										'ATO' !== tradingsession || 'ATC' !== tradingsession,
									prK = parseFloat(
										isContinuous ? si.matchPrice : si.estimatedPrice
									),
									qttyK = isContinuous ? parseFloat(10 * si.matchQtty) : 0,
									changeK = isContinuous
										? parseFloat(si.changed || 0)
										: prK - basicPrice,
									changeRatioK = isContinuous
										? parseFloat(si.changedRatio || 0)
										: (changeK / basicPrice) * 100,
									plusK = changeK >= 0 ? '+' : '';
								(spans[0].textContent = prK.toFixed(2)),
									(spans[1].textContent = isContinuous
										? qttyK.toLocaleString('en-US')
										: ''),
									(spans[2].textContent =
										0 === changeK ? '' : `${plusK}${changeK.toFixed(2)}`),
									(spans[3].textContent = `${plusK}${changeRatioK.toFixed(1)}%`),
									(volWidth.style.width =
										isContinuous && 0 !== maxQtty
											? `${Math.min(100, (qttyK / maxQtty) * 100)}%`
											: '0%');
								const stepPriceCssK = babuocgia_css(
									prK,
									si.basicPrice,
									si.ceilingPrice,
									si.floorPrice
								);
								stepPrice.className = `khop text-bold x1 ${stepPriceCssK.join(
									' '
								)}`;
								break;
							default:
								index = index > 3 ? index - 1 : index;
								const pr = parseFloat(prices[index]),
									qttyX = parseFloat(qtty[index]),
									change = pr - basicPrice;
								(spans[0].textContent = isNaN(pr)
									? 'ATO' === tradingsession || 'ATC' === tradingsession
										? tradingsession
										: ''
									: pr.toFixed(2)),
									(spans[1].textContent = isNaN(qttyX)
										? ''
										: qttyX.toLocaleString('en-US')),
									(spans[2].textContent =
										isNaN(pr) || 0 === change
											? ''
											: `${pr >= basicPrice ? '+' : ''}${change.toFixed(2)}`),
									(spans[3].textContent = isNaN(pr)
										? ''
										: `${pr >= basicPrice ? '+' : ''}${(
												(change / basicPrice) *
												100
										  ).toFixed(1)}%`),
									(volWidth.style.width = isNaN(qttyX)
										? '0%'
										: `${(qttyX / maxQtty) * 100}%`);
								const stepPriceCss = babuocgia_css(
									pr,
									si.basicPrice,
									si.ceilingPrice,
									si.floorPrice
								);
								isNaN(pr) || (stepPrice.className = `x1 ${stepPriceCss.join(' ')}`);
						}
					});
					break;
				case 'SI':
					console.log('message', s, 'topic', k);
					window._finSI = s;
			}
		});
	class h {
		constructor(t) {
			this.k = t;
		}
		subscribeBars(t, e, s, o, n) {
			const [r, c, h] = o.split('_'),
				d = { 60: '1H', DAY: '1D', W: '1W' }[h] || h;
			!(function (t, e, s, o, n, r) {
				const a = u(t.ticker),
					c = `${a}~${t.ticker}~${e}`,
					h = { id: o, callback: s };
				let d = i.get(c);
				if (d) return void d.handlers.push(h);
				(d = { listenerGuid: o, resolution: e, lastDailyBar: r, handlers: [h] }),
					i.set(c, d);
				const p = `plaintext/quotes/${a}/OHLC/${e}/${t.ticker}`;
				l.subscribe(p),
					l.subscribe(`plaintext/quotes/${a}/TP/${t.ticker}`),
					l.subscribe(`plaintext/quotes/${a}/SI/${t.ticker}`);
			})(t, d, s, (o = `${r}_#_${d}`), 0, a.get(t.symbol));
		}
		unsubscribeBars(t) {
			const [e, s, o] = t.split('_');
			!(function (t) {
				i.forEach((e, s) => {
					const o = e.handlers.findIndex((e) => e.id === t);
					if (-1 !== o) {
						e.handlers.splice(o, 1);
						const t = s.split('~');
						if (0 === e.handlers.length) {
							const e = `plaintext/quotes/${t[0]}/OHLC/${t[2]}/${t[1]}`;
							l.unsubscribe(e), i.delete(s);
							const o = `plaintext/quotes/${t[0]}/TP/${t[1]}`;
							l.unsubscribe(o);
							const n = `plaintext/quotes/${t[0]}/SI/${t[1]}`;
							l.unsubscribe(n);
						}
					}
				});
			})((t = `${e}_#_${{ 60: '1H', DAY: '1D', W: '1W' }[o] || o}`));
		}
	}
	class d {
		constructor(t, e) {
			(this.D = {}), (this.H = 0), (this.k = t), setInterval(this.M.bind(this), e);
		}
		subscribeBars(t, e, s, i) {
			this.D.hasOwnProperty(i) ||
				((this.D[i] = { lastBarTime: null, listener: s, resolution: e, symbolInfo: t }),
				t.name);
		}
		unsubscribeBars(t) {
			delete this.D[t];
		}
		M() {
			if (!(this.H > 0)) {
				this.H = 0;
				for (const t in this.D)
					(this.H += 1),
						this.I(t)
							.then(() => {
								(this.H -= 1), this.H;
							})
							.catch((t) => {
								(this.H -= 1), e(t), this.H;
							});
			}
		}
		I(t) {
			const e = this.D[t],
				s = parseInt((Date.now() / 1e3).toString()),
				i =
					s -
					(function (t, e) {
						let s = 0;
						s =
							'D' === t || '1D' === t
								? e
								: 'M' === t || '1M' === t
								? 31 * e
								: 'W' === t || '1W' === t
								? 7 * e
								: (e * parseInt(t)) / 1440;
						return 24 * s * 60 * 60;
					})(e.resolution, 10);
			return this.k
				.getBars(e.symbolInfo, e.resolution, {
					from: i,
					to: s,
					countBack: 2,
					firstDataRequest: !1,
				})
				.then((e) => {
					this.O(t, e);
				});
		}
		O(t, e) {
			if (!this.D.hasOwnProperty(t)) return;
			const s = e.bars;
			if (0 === s.length) return;
			const i = s[s.length - 1],
				o = this.D[t];
			if (null !== o.lastBarTime && i.time < o.lastBarTime) return;
			if (null !== o.lastBarTime && i.time > o.lastBarTime) {
				if (s.length < 2)
					throw new Error(
						'Not enough bars in history for proper pulse update. Need at least 2.'
					);
				const t = s[s.length - 2];
				o.listener(t);
			}
			(o.lastBarTime = i.time), o.listener(i);
		}
	}
	function p(t, e, s) {
		const i = t[e];
		return Array.isArray(i) ? i[s] : i;
	}
	const m = {
		supports_search: !1,
		supports_group_request: !0,
		supports_marks: !1,
		supports_timescale_marks: !1,
		supports_time: !1,
		exchanges: [
			{ value: '', name: 'All Exchanges', desc: '' },
			{ value: 'HNX', name: 'HNX', desc: 'Sàn HNX' },
			{ value: 'HOSE', name: 'HOSE', desc: 'Sàn HOSE' },
			{ value: 'UPCOM', name: 'UPCOM', desc: 'Sàn UPCOM' },
			{ value: 'OTHER', name: 'OTHER', desc: 'Ngành' },
		],
		symbols_types: [
			{ name: 'All types', value: '' },
			{ name: 'Stock', value: 'stock' },
			{ name: 'Index', value: 'index' },
		],
		supported_resolutions: ['1', '3', '5', '15', '30', '60', '120', 'D', 'W', 'M'],
		intraday_multipliers: ['1', '60'],
	};
	class v {
		constructor(t, e, i = 1e4, o) {
			(this.V = m),
				(this.T = null),
				(this.C = t),
				(this._ = e),
				(this.k = new s(t, this._, o)),
				(this.q = new d(this.k, i)),
				(this.B = new h(this.k)),
				(this.R = []),
				this.U();
		}
		onReady(t) {
			setTimeout(() => t(this.V));
		}
		getMarks(t, s, i, o, n) {
			if (!this.V.supports_marks) return;
			const r = { symbol: t.ticker || '', from: s, to: i, resolution: n };
			this.X('marks', r)
				.then((t) => {
					if (!Array.isArray(t)) {
						const e = [];
						for (let s = 0; s < t.id.length; ++s)
							e.push({
								id: p(t, 'id', s),
								time: p(t, 'time', s),
								color: p(t, 'color', s),
								text: p(t, 'text', s),
								label: p(t, 'label', s),
								labelFontColor: p(t, 'labelFontColor', s),
								minSize: p(t, 'minSize', s),
								borderWidth: p(t, 'borderWidth', s),
								hoveredBorderWidth: p(t, 'hoveredBorderWidth', s),
								imageUrl: p(t, 'imageUrl', s),
								showLabelWhenImageLoaded: p(t, 'showLabelWhenImageLoaded', s),
							});
						t = e;
					}
					o(t);
				})
				.catch((t) => {
					e(t), o([]);
				});
		}
		getTimescaleMarks(t, s, i, o, n) {
			if (!this.V.supports_timescale_marks) return;
			const r = { symbol: t.ticker || '', from: s, to: i, resolution: n };
			this.X('timescale_marks', r)
				.then((t) => {
					if (!Array.isArray(t)) {
						const e = [];
						for (let s = 0; s < t.id.length; ++s)
							e.push({
								id: p(t, 'id', s),
								time: p(t, 'time', s),
								color: p(t, 'color', s),
								label: p(t, 'label', s),
								tooltip: p(t, 'tooltip', s),
								imageUrl: p(t, 'imageUrl', s),
								showLabelWhenImageLoaded: p(t, 'showLabelWhenImageLoaded', s),
							});
						t = e;
					}
					o(t);
				})
				.catch((t) => {
					e(t), o([]);
				});
		}
		getServerTime(t) {
			this.V.supports_time &&
				this.X('time')
					.then((e) => {
						const s = parseInt(e);
						isNaN(s) || t(s);
					})
					.catch((t) => {
						e(t);
					});
		}
		async U() {
			const t = await fetch('/static/tv/data/symbol.json'),
				e = await t.json();
			this.R = e;
		}
		async searchSymbols(t, s, i, o) {
			if (this.V.supports_search) {
				const n = { limit: 30, query: t.toUpperCase(), type: i, exchange: s };
				this.X('search', n)
					.then((t) => {
						if (void 0 !== t.s) return t.errmsg, void o([]);
						o(t);
					})
					.catch((t) => {
						e(t), o([]);
					});
			} else {
				const e = this.R.filter(
					(e) => -1 !== e.symbol.toLowerCase().indexOf(t.toLowerCase())
				);
				o(e);
			}
		}
		async resolveSymbol(t, s, i, o) {
			const n = o && o.currencyCode,
				r = o && o.unitId;
			function a(t) {
				setTimeout(() => s(t));
			}
			if (this.V.supports_group_request) {
				const e = t.split('#')[0],
					s = this.R.find(({ symbol: t }) => t === e);
				if (!s) return void i('cannot resolve symbol');
				a({
					name: t,
					base_name: [s.exchange + ':' + t],
					listed_exchange: s.exchange,
					exchange: s.exchange,
					ticker: t,
					symbol: t,
					description: s.description,
					type: s.type,
					session: '0900-1130,1300-1500',
					timezone: 'Asia/Bangkok',
					minmov: 1,
					minmov2: 0,
					pricescale: 100,
					pointvalue: 1,
					has_daily: !0,
					has_intraday: !0,
					has_weekly_and_monthly: !1,
					supported_resolutions: this.V.supported_resolutions,
					intraday_multipliers: this.V.intraday_multipliers,
					volume_precision: 2,
					data_status: 'streaming',
				});
			} else {
				const s = { symbol: t };
				void 0 !== n && (s.currencyCode = n),
					void 0 !== r && (s.unitId = r),
					this.X('symbols', s)
						.then((t) => {
							var e,
								s,
								o,
								n,
								r,
								l,
								c,
								u,
								h,
								d,
								p,
								m,
								v,
								f,
								y,
								_,
								b,
								g,
								N,
								$,
								w,
								S,
								x,
								F,
								k,
								D;
							if (void 0 !== t.s) i('unknown_symbol');
							else {
								const i = t.name,
									H =
										null !== (e = t.listed_exchange) && void 0 !== e
											? e
											: t['exchange-listed'],
									M =
										null !== (s = t.exchange) && void 0 !== s
											? s
											: t['exchange-traded'],
									I = {
										...t,
										name: i,
										base_name: [H + ':' + i],
										listed_exchange: H,
										exchange: M,
										ticker: t.ticker,
										currency_code:
											null !== (o = t.currency_code) && void 0 !== o
												? o
												: t['currency-code'],
										original_currency_code:
											null !== (n = t.original_currency_code) && void 0 !== n
												? n
												: t['original-currency-code'],
										unit_id:
											null !== (r = t.unit_id) && void 0 !== r
												? r
												: t['unit-id'],
										original_unit_id:
											null !== (l = t.original_unit_id) && void 0 !== l
												? l
												: t['original-unit-id'],
										unit_conversion_types:
											null !== (c = t.unit_conversion_types) && void 0 !== c
												? c
												: t['unit-conversion-types'],
										has_intraday:
											null !==
												(h =
													null !== (u = t.has_intraday) && void 0 !== u
														? u
														: t['has-intraday']) &&
											void 0 !== h &&
											h,
										visible_plots_set:
											null !== (d = t.visible_plots_set) && void 0 !== d
												? d
												: t['visible-plots-set'],
										minmov:
											null !==
												(m =
													null !== (p = t.minmovement) && void 0 !== p
														? p
														: t.minmov) && void 0 !== m
												? m
												: 0,
										minmove2:
											null !== (v = t.minmovement2) && void 0 !== v
												? v
												: t.minmove2,
										session:
											null !== (f = t.session) && void 0 !== f
												? f
												: t['session-regular'],
										session_holidays:
											null !== (y = t.session_holidays) && void 0 !== y
												? y
												: t['session-holidays'],
										supported_resolutions:
											null !==
												(g =
													null !==
														(b =
															null !==
																(_ = t.supported_resolutions) &&
															void 0 !== _
																? _
																: t['supported-resolutions']) &&
													void 0 !== b
														? b
														: this.V.supported_resolutions) &&
											void 0 !== g
												? g
												: [],
										has_daily:
											null ===
												($ =
													null !== (N = t.has_daily) && void 0 !== N
														? N
														: t['has-daily']) ||
											void 0 === $ ||
											$,
										intraday_multipliers:
											null !==
												(S =
													null !== (w = t.intraday_multipliers) &&
													void 0 !== w
														? w
														: t['intraday-multipliers']) && void 0 !== S
												? S
												: ['1', '5', '15', '30', '60'],
										has_weekly_and_monthly:
											null !== (x = t.has_weekly_and_monthly) && void 0 !== x
												? x
												: t['has-weekly-and-monthly'],
										has_empty_bars:
											null !== (F = t.has_empty_bars) && void 0 !== F
												? F
												: t['has-empty-bars'],
										volume_precision:
											null !== (k = t.volume_precision) && void 0 !== k
												? k
												: t['volume-precision'],
										format:
											null !== (D = t.format) && void 0 !== D ? D : 'price',
									};
								(I.supported_resolutions = [
									'1',
									'3',
									'5',
									'15',
									'30',
									'45',
									'60',
									'120',
									'240',
									'D',
									'W',
									'M',
								]),
									(I.intraday_multipliers = ['1', '60']),
									a(I);
							}
						})
						.catch((t) => {
							e(t), i('unknown_symbol');
						});
			}
		}
		async getBars(t, e, s, i, o) {
			this.k
				.getBars(t, e, s)
				.then((t) => {
					i(t.bars, t.meta);
				})
				.catch(o);
		}
		subscribeBars(t, e, s, i, o) {
			'index' === this.L(t.ticker)
				? this.q.subscribeBars(t, e, s, i)
				: this.B.subscribeBars(t, e, s, i);
		}
		unsubscribeBars(t) {
			this.q.unsubscribeBars(t), this.B.unsubscribeBars(t);
		}
		A() {
			return this.X('config').catch((t) => (e(t), null));
		}
		L(t) {
			return ['VNINDEX', 'VN30', 'HNX', 'HNX30'].includes(t)
				? 'index'
				: ['VN30F1M', 'VN30F2M', 'VN30F1Q', 'VN30F2Q'].includes(t)
				? 'derivative'
				: 'stock';
		}
		X(t, e) {
			return this._.sendRequest(this.C, t, e);
		}
		P(t, e) {
			return this._.sendRequestPost(this.C, t, e);
		}
		J(t) {
			if (
				((this.V = t),
				void 0 === t.exchanges && (t.exchanges = []),
				!t.supports_search && !t.supports_group_request)
			)
				throw new Error(
					'Unsupported datafeed configuration. Must either support search, or support group request'
				);
			(!t.supports_group_request && t.supports_search) ||
				(this.T = new SymbolsStorage(this.C, t.supported_resolutions || [], this._)),
				JSON.stringify(t);
		}
	}
	class f {
		constructor(t) {
			t && (this.j = t);
		}
		sendRequest(t, e, s) {
			if (void 0 !== s) {
				const t = Object.keys(s);
				0 !== t.length && (e += '?'),
					(e += t
						.map(
							(t) => `${encodeURIComponent(t)}=${encodeURIComponent(s[t].toString())}`
						)
						.join('&'));
			}
			const i = { credentials: 'same-origin' };
			return (
				void 0 !== this.j && (i.headers = this.j),
				fetch(`${t}/${e}`, i)
					.then((t) => t.text())
					.then((t) => JSON.parse(t))
			);
		}
		sendRequestPost(t, e, s) {
			if (void 0 !== s) {
				const t = Object.keys(s);
				0 !== t.length && (e += '?'),
					(e += t
						.map(
							(t) => `${encodeURIComponent(t)}=${encodeURIComponent(s[t].toString())}`
						)
						.join('&'));
			}
			const i = {
				method: 'POST',
				credentials: 'same-origin',
				headers: { 'Content-Type': 'application/json', ...(this.j || {}) },
				body: JSON.stringify(s),
			};
			return fetch(`${t}/${e}`, i)
				.then((t) => t.text())
				.then((t) => JSON.parse(t));
		}
	}
	t.finscAPI = class extends v {
		constructor(t, e = 1e4, s) {
			super(t, new f(), e, s);
		}
	};
});
