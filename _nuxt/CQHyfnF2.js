const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./B-VzDF58.js","./CHOppScM.js","./vue.CuFQQ9oa.css","./BLVB0qGI.js","./B7LlgBWf.js","./XzYYspsI.js","./DINjZ76J.js","./B6Lq9Mqd.js","./6bUBh_yt.js","./gridstack.B4aO9zvc.css","./custom.DyALUoRG.css","./BqBenWlq.js","./DnCSqqR8.js","./DGKFMsHl.js","./iP-yhpA_.js","./CA07Ia20.js","./L-fl01OS.js","./BVOZhhHv.js","./tcJT4APH.js","./DQ01yifs.js","./DiBVGywd.js","./jsxTuE5V.js","./TBmkfsSG.js","./DcsRzXMG.js","./B6M3Iium.js","./Bnw5sLI9.js","./Base.DNx_nQ_v.css","./CgMwXAEj.js","./TRbT3IL_.js","./jYOsWmUK.js","./BXkpJVin.js","./dZ8TIFzk.js","./qvIwQ-qn.js","./DzP7GS1w.js","./3nRASyOE.js","./BRWkjkGK.js","./Lqqn6L9P.js","./test.YaMs3F9T.css"])))=>i.map(i=>d[i]);
import{w as Ee,a as Le,d as Q,b as ke,c as T,e as Pe,f as B,g as oe,s as G,r as K,h as we,i as te,j as Ce,k as ze,l as Me,u as ae,m as Ae,_ as I,n as M,o as Oe,p as Ie,q as ve,t as D,v as _e,x as Ue,y as re,z as He,A as Ne,B as De,S as ne,C as je,D as Be,E as ie,F as $e,G as be,H as ce,I as qe,J as le,K as se,L as Te,M as ue,N as Fe,O as We,P as Ge,Q as Ke,R as Xe,T as Je,U as Ve,V as Ye,W as Ze,X as xe,Y as Qe,Z as eo,$ as oo,a0 as to,a1 as ao,a2 as ro,a3 as so,a4 as no,a5 as io,a6 as co,a7 as lo,a8 as uo,a9 as fo,aa as po,ab as ho,ac as yo,ad as mo,ae as go,af as wo,ag as vo,ah as _o,ai as Uo,aj as bo,ak as To,al as Ro,am as So,an as Eo,ao as Lo,ap as ko,aq as Po,ar as Co,as as zo,at as Mo,au as Ao,av as Oo,aw as Io,ax as Ho,ay as No,az as Do,aA as jo,aB as Bo,aC as $o,aD as qo,aE as F,aF as Fo,aG as z,aH as Wo,aI as Z,aJ as Go,aK as Ko,aL as Xo,aM as Jo,aN as Vo,aO as Yo,aP as Zo,aQ as Re,aR as xo,aS as Qo,aT as et,aU as ot,aV as tt,aW as at,aX as rt,aY as st,aZ as nt,a_ as it,a$ as ct,b0 as de}from"./CHOppScM.js";import{i as lt}from"./BLVB0qGI.js";import{A as fe}from"./B7LlgBWf.js";class ut extends Error{constructor(o,a){super(o,a),this.name="FetchError",a!=null&&a.cause&&!this.cause&&(this.cause=a.cause)}}function dt(e){var u,p,r,y,h;const o=((u=e.error)==null?void 0:u.message)||((p=e.error)==null?void 0:p.toString())||"",a=((r=e.request)==null?void 0:r.method)||((y=e.options)==null?void 0:y.method)||"GET",t=((h=e.request)==null?void 0:h.url)||String(e.request)||"/",i=`[${a}] ${JSON.stringify(t)}`,n=e.response?`${e.response.status} ${e.response.statusText}`:"<no response>",c=`${i}: ${n}${o?` ${o}`:""}`,s=new ut(c,e.error?{cause:e.error}:void 0);for(const w of["request","options","response"])Object.defineProperty(s,w,{get(){return e[w]}});for(const[w,v]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(s,w,{get(){return e.response&&e.response[v]}});return s}const ft=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function pe(e="GET"){return ft.has(e.toUpperCase())}function pt(e){if(e===void 0)return!1;const o=typeof e;return o==="string"||o==="number"||o==="boolean"||o===null?!0:o!=="object"?!1:Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const ht=new Set(["image/svg","application/xml","application/xhtml","application/html"]),yt=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function mt(e=""){if(!e)return"json";const o=e.split(";").shift()||"";return yt.test(o)?"json":ht.has(o)||o.startsWith("text/")?"text":"blob"}function gt(e,o,a,t){const i=wt((o==null?void 0:o.headers)??(e==null?void 0:e.headers),a==null?void 0:a.headers,t);let n;return(a!=null&&a.query||a!=null&&a.params||o!=null&&o.params||o!=null&&o.query)&&(n={...a==null?void 0:a.params,...a==null?void 0:a.query,...o==null?void 0:o.params,...o==null?void 0:o.query}),{...a,...o,query:n,params:n,headers:i}}function wt(e,o,a){if(!o)return new a(e);const t=new a(o);if(e)for(const[i,n]of Symbol.iterator in e||Array.isArray(e)?e:new a(e))t.set(i,n);return t}async function W(e,o){if(o)if(Array.isArray(o))for(const a of o)await a(e);else await o(e)}const vt=new Set([408,409,425,429,500,502,503,504]),_t=new Set([101,204,205,304]);function Se(e={}){const{fetch:o=globalThis.fetch,Headers:a=globalThis.Headers,AbortController:t=globalThis.AbortController}=e;async function i(s){const u=s.error&&s.error.name==="AbortError"&&!s.options.timeout||!1;if(s.options.retry!==!1&&!u){let r;typeof s.options.retry=="number"?r=s.options.retry:r=pe(s.options.method)?0:1;const y=s.response&&s.response.status||500;if(r>0&&(Array.isArray(s.options.retryStatusCodes)?s.options.retryStatusCodes.includes(y):vt.has(y))){const h=typeof s.options.retryDelay=="function"?s.options.retryDelay(s):s.options.retryDelay||0;return h>0&&await new Promise(w=>setTimeout(w,h)),n(s.request,{...s.options,retry:r-1})}}const p=dt(s);throw Error.captureStackTrace&&Error.captureStackTrace(p,n),p}const n=async function(u,p={}){var w;const r={request:u,options:gt(u,p,e.defaults,a),response:void 0,error:void 0};r.options.method=(w=r.options.method)==null?void 0:w.toUpperCase(),r.options.onRequest&&await W(r,r.options.onRequest),typeof r.request=="string"&&(r.options.baseURL&&(r.request=Ee(r.request,r.options.baseURL)),r.options.query&&(r.request=Le(r.request,r.options.query))),r.options.body&&pe(r.options.method)&&(pt(r.options.body)?(r.options.body=typeof r.options.body=="string"?r.options.body:JSON.stringify(r.options.body),r.options.headers=new a(r.options.headers||{}),r.options.headers.has("content-type")||r.options.headers.set("content-type","application/json"),r.options.headers.has("accept")||r.options.headers.set("accept","application/json")):("pipeTo"in r.options.body&&typeof r.options.body.pipeTo=="function"||typeof r.options.body.pipe=="function")&&("duplex"in r.options||(r.options.duplex="half")));let y;if(!r.options.signal&&r.options.timeout){const v=new t;y=setTimeout(()=>{const E=new Error("[TimeoutError]: The operation was aborted due to timeout");E.name="TimeoutError",E.code=23,v.abort(E)},r.options.timeout),r.options.signal=v.signal}try{r.response=await o(r.request,r.options)}catch(v){return r.error=v,r.options.onRequestError&&await W(r,r.options.onRequestError),await i(r)}finally{y&&clearTimeout(y)}if(r.response.body&&!_t.has(r.response.status)&&r.options.method!=="HEAD"){const v=(r.options.parseResponse?"json":r.options.responseType)||mt(r.response.headers.get("content-type")||"");switch(v){case"json":{const E=await r.response.text(),A=r.options.parseResponse||Q;r.response._data=A(E);break}case"stream":{r.response._data=r.response.body;break}default:r.response._data=await r.response[v]()}}return r.options.onResponse&&await W(r,r.options.onResponse),!r.options.ignoreResponseError&&r.response.status>=400&&r.response.status<600?(r.options.onResponseError&&await W(r,r.options.onResponseError),await i(r)):r.response},c=async function(u,p){return(await n(u,p))._data};return c.raw=n,c.native=(...s)=>o(...s),c.create=(s={},u={})=>Se({...e,...u,defaults:{...e.defaults,...u.defaults,...s}}),c}const X=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Ut=X.fetch?(...e)=>X.fetch(...e):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),bt=X.Headers,Tt=X.AbortController,Rt=Se({fetch:Ut,Headers:bt,AbortController:Tt}),St=Rt;globalThis.$fetch||(globalThis.$fetch=St.create({baseURL:ke()}));const he={NuxtError:e=>oe(e),EmptyShallowRef:e=>G(e==="_"?void 0:e==="0n"?BigInt(0):Q(e)),EmptyRef:e=>K(e==="_"?void 0:e==="0n"?BigInt(0):Q(e)),ShallowRef:e=>G(e),ShallowReactive:e=>we(e),Ref:e=>K(e),Reactive:e=>te(e)},Et=T({name:"nuxt:revive-payload:client",order:-30,async setup(e){let o,a;for(const t in he)Pe(t,he[t]);Object.assign(e.payload,([o,a]=B(()=>e.runWithContext(Ce)),o=await o,a(),o)),window.__NUXT__=e.payload}}),Lt=[],kt=T({name:"nuxt:head",enforce:"pre",setup(e){const o=ze({plugins:Lt});Me(()=>ae().vueApp._context.provides.usehead),e.vueApp.use(o);{let a=!0;const t=async()=>{a=!1,await Ae(o)};o.hooks.hook("dom:beforeRender",i=>{i.shouldRender=!a}),e.hooks.hook("page:start",()=>{a=!0}),e.hooks.hook("page:finish",()=>{e.isHydrating||t()}),e.hooks.hook("app:error",t),e.hooks.hook("app:suspense:resolve",t)}}}),Pt={layout:"auth"},ye=[{name:"callback",path:"/callback",component:()=>I(()=>import("./B-VzDF58.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(e=>e.default||e)},{name:"custom",path:"/custom",meta:Pt||{},component:()=>I(()=>import("./XzYYspsI.js").then(e=>e.c),__vite__mapDeps([5,6,1,2,7,8,9,10]),import.meta.url).then(e=>e.default||e)},{name:"example",path:"/example",component:()=>I(()=>import("./BqBenWlq.js"),__vite__mapDeps([11,1,2,12,13,14,7,15,16,17,18,19,20,21,4,22,23,24,25,26,27,28,29,30,31,32,33]),import.meta.url).then(e=>e.default||e)},{name:"index",path:"/",component:()=>I(()=>import("./3nRASyOE.js"),__vite__mapDeps([34,6,1,2]),import.meta.url).then(e=>e.default||e)},{name:"login",path:"/login",component:()=>I(()=>import("./BRWkjkGK.js"),__vite__mapDeps([35,1,2]),import.meta.url).then(e=>e.default||e)},{name:"test",path:"/test",component:()=>I(()=>import("./Lqqn6L9P.js"),__vite__mapDeps([36,1,2,37]),import.meta.url).then(e=>e.default||e)}],Ct={scrollBehavior(e,o,a){var p;const t=ae(),i=((p=M().options)==null?void 0:p.scrollBehaviorType)??"auto";let n=a||void 0;const c=typeof e.meta.scrollToTop=="function"?e.meta.scrollToTop(e,o):e.meta.scrollToTop;if(!n&&o&&e&&c!==!1&&Oe(e,o)&&(n={left:0,top:0}),e.path===o.path)return o.hash&&!e.hash?{left:0,top:0}:e.hash?{el:e.hash,top:me(e.hash),behavior:i}:!1;const s=r=>!!(r.meta.pageTransition??Ie),u=s(o)&&s(e)?"page:transition:finish":"page:finish";return new Promise(r=>{t.hooks.hookOnce(u,async()=>{await new Promise(y=>setTimeout(y,0)),e.hash&&(n={el:e.hash,top:me(e.hash),behavior:i}),r(n)})})}};function me(e){try{const o=document.querySelector(e);if(o)return Number.parseFloat(getComputedStyle(o).scrollMarginTop)+Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)}catch{}return 0}const zt={hashMode:!1,scrollBehaviorType:"auto"},U={...zt,...Ct},Mt=ve(async e=>{var u;let o,a;if(!((u=e.meta)!=null&&u.validate))return;const t=ae(),i=M();if(([o,a]=B(()=>Promise.resolve(e.meta.validate(e))),o=await o,a(),o)===!0)return;const c=oe({statusCode:404,statusMessage:`Page Not Found: ${e.fullPath}`,data:{path:e.fullPath}}),s=i.beforeResolve(p=>{if(s(),p===e){const r=i.afterEach(async()=>{r(),await t.runWithContext(()=>D(c)),window.history.pushState({},"",e.fullPath)});return!1}})}),At=ve(async e=>{let o,a;const t=([o,a]=B(()=>_e(e.path)),o=await o,a(),o);if(t.redirect)return Ue(t.redirect,{acceptRelative:!0})?(window.location.href=t.redirect,!1):t.redirect}),Ot=[Mt,At],j={};function It(e,o,a){const{pathname:t,search:i,hash:n}=o,c=e.indexOf("#");if(c>-1){const p=n.includes(e.slice(c))?e.slice(c).length:1;let r=n.slice(p);return r[0]!=="/"&&(r="/"+r),ce(r,"")}const s=ce(t,e),u=!a||qe(s,a,{trailingSlash:!0})?s:a;return u+(u.includes("?")?"":i)+n}const Ht=T({name:"nuxt:router",enforce:"pre",async setup(e){var A,$;let o,a,t=re().app.baseURL;U.hashMode&&!t.includes("#")&&(t+="#");const i=((A=U.history)==null?void 0:A.call(U,t))??(U.hashMode?He(t):Ne(t)),n=(($=U.routes)==null?void 0:$.call(U,ye))??ye;let c;const s=De({...U,scrollBehavior:(f,L,b)=>{if(L===ne){c=b;return}if(U.scrollBehavior){if(s.options.scrollBehavior=U.scrollBehavior,"scrollRestoration"in window.history){const R=s.beforeEach(()=>{R(),window.history.scrollRestoration="manual"})}return U.scrollBehavior(f,ne,c||b)}},history:i,routes:n});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),e.vueApp.use(s);const u=G(s.currentRoute.value);s.afterEach((f,L)=>{u.value=L}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>u.value});const p=It(t,window.location,e.payload.path),r=G(s.currentRoute.value),y=()=>{r.value=s.currentRoute.value};e.hook("page:finish",y),s.afterEach((f,L)=>{var b,R,g,_;((R=(b=f.matched[0])==null?void 0:b.components)==null?void 0:R.default)===((_=(g=L.matched[0])==null?void 0:g.components)==null?void 0:_.default)&&y()});const h={};for(const f in r.value)Object.defineProperty(h,f,{get:()=>r.value[f]});e._route=we(h),e._middleware=e._middleware||{global:[],named:{}};const w=je();s.afterEach(async(f,L,b)=>{delete e._processingMiddleware,!e.isHydrating&&w.value&&await e.runWithContext(Be),b&&await e.callHook("page:loading:end"),f.matched.length===0&&await e.runWithContext(()=>D(ie({statusCode:404,fatal:!1,statusMessage:`Page not found: ${f.fullPath}`,data:{path:f.fullPath}})))});try{[o,a]=B(()=>s.isReady()),await o,a()}catch(f){[o,a]=B(()=>e.runWithContext(()=>D(f))),await o,a()}const v=p!==s.currentRoute.value.fullPath?s.resolve(p):s.currentRoute.value;y();const E=e.payload.state._layout;return s.beforeEach(async(f,L)=>{var b;await e.callHook("page:loading:start"),f.meta=te(f.meta),e.isHydrating&&E&&!$e(f.meta.layout)&&(f.meta.layout=E),e._processingMiddleware=!0;{const R=new Set([...Ot,...e._middleware.global]);for(const g of f.matched){const _=g.meta.middleware;if(_)for(const S of be(_))R.add(S)}{const g=await e.runWithContext(()=>_e(f.path));if(g.appMiddleware)for(const _ in g.appMiddleware)g.appMiddleware[_]?R.add(_):R.delete(_)}for(const g of R){const _=typeof g=="string"?e._middleware.named[g]||await((b=j[g])==null?void 0:b.call(j).then(O=>O.default||O)):g;if(!_)throw new Error(`Unknown route middleware: '${g}'.`);const S=await e.runWithContext(()=>_(f,L));if(!e.payload.serverRendered&&e.isHydrating&&(S===!1||S instanceof Error)){const O=S||ie({statusCode:404,statusMessage:`Page Not Found: ${p}`});return await e.runWithContext(()=>D(O)),!1}if(S!==!0&&(S||S===!1))return S}}}),s.onError(async()=>{delete e._processingMiddleware,await e.callHook("page:loading:end")}),e.hooks.hookOnce("app:created",async()=>{try{"name"in v&&(v.name=void 0),await s.replace({...v,force:!0}),s.options.scrollBehavior=U.scrollBehavior}catch(f){await e.runWithContext(()=>D(f))}}),{provide:{router:s}}}}),Nt=T({name:"nuxt:payload",setup(e){M().beforeResolve(async(o,a)=>{if(o.path===a.path)return;const t=await le(o.path);t&&Object.assign(e.static.data,t.data)}),se(()=>{var o;e.hooks.hook("link:prefetch",async a=>{const{hostname:t}=new URL(a,window.location.href);t===window.location.hostname&&await le(a)}),((o=navigator.connection)==null?void 0:o.effectiveType)!=="slow-2g"&&setTimeout(Te,1e3)})}}),Dt=T(()=>{const e=M();se(()=>{e.beforeResolve(async()=>{await new Promise(o=>{setTimeout(o,100),requestAnimationFrame(()=>{setTimeout(o,0)})})})})}),jt=T(e=>{let o;async function a(){const t=await Te();o&&clearTimeout(o),o=setTimeout(a,ue);try{const i=await $fetch(Fe("builds/latest.json")+`?${Date.now()}`);i.id!==t.id&&e.hooks.callHook("app:manifest:update",i)}catch{}}se(()=>{o=setTimeout(a,ue)})}),Bt=T({name:"nuxt:chunk-reload",setup(e){const o=M(),a=re(),t=new Set;o.beforeEach(()=>{t.clear()}),e.hook("app:chunkError",({error:n})=>{t.add(n)});function i(n){const s="href"in n&&n.href[0]==="#"?a.app.baseURL+n.href:We(a.app.baseURL,n.fullPath);Ge({path:s,persistState:!0})}e.hook("app:manifest:update",()=>{o.beforeResolve(i)}),o.onError((n,c)=>{t.has(n)&&i(c)})}}),$t=[["UAccordion",Ke],["UAlert",Xe],["UAvatar",Je],["UAvatarGroup",Ve],["UBadge",Ye],["UButton",Ze],["UButtonGroup",xe],["UCarousel",Qe],["UChip",eo],["UDropdown",oo],["UIcon",to],["UKbd",ao],["ULink",ro],["UMeter",so],["UMeterGroup",no],["UProgress",io],["UCheckbox",co],["UForm",lo],["UFormGroup",uo],["UInput",fo],["UInputMenu",po],["URadio",ho],["URadioGroup",yo],["URange",mo],["USelect",go],["USelectMenu",wo],["UTextarea",vo],["UToggle",_o],["UTable",Uo],["UCard",bo],["UContainer",To],["UDivider",Ro],["USkeleton",So],["UBreadcrumb",Eo],["UCommandPalette",Lo],["UCommandPaletteGroup",ko],["UHorizontalNavigation",Po],["UPagination",Co],["UTabs",zo],["UVerticalNavigation",Mo],["UContextMenu",Ao],["UModal",Oo],["UModals",Io],["UNotification",Ho],["UNotifications",No],["UPopover",Do],["USlideover",jo],["USlideovers",Bo],["UTooltip",$o],["Icon",qo]],qt=T({name:"nuxt:global-components",setup(e){for(const[o,a]of $t)e.vueApp.component(o,a),e.vueApp.component("Lazy"+o,a)}}),Ft=T({name:"nuxt:prefetch",setup(e){const o=M();e.hooks.hook("app:mounted",()=>{o.beforeEach(async a=>{var i;const t=(i=a==null?void 0:a.meta)==null?void 0:i.layout;t&&typeof F[t]=="function"&&await F[t]()})}),e.hooks.hook("link:prefetch",a=>{if(Ue(a))return;const t=o.resolve(a);if(!t)return;const i=t.meta.layout;let n=be(t.meta.middleware);n=n.filter(c=>typeof c=="string");for(const c of n)typeof j[c]=="function"&&j[c]();i&&typeof F[i]=="function"&&F[i]()})}}),Wt="__NUXT_COLOR_MODE__",x="nuxt-color-mode",Gt="localStorage",P=window[Wt]||{},Kt=T(e=>{const o=Fo("color-mode",()=>te({preference:P.preference,value:P.value,unknown:!1,forced:!1})).value;M().afterEach(n=>{const c=n.meta.colorMode;c&&c!=="system"?(o.value=c,o.forced=!0):(c==="system"&&console.warn("You cannot force the colorMode to system at the page level."),o.forced=!1,o.value=o.preference==="system"?P.getColorScheme():o.preference)});let a;function t(){a||!window.matchMedia||(a=window.matchMedia("(prefers-color-scheme: dark)"),a.addEventListener("change",()=>{!o.forced&&o.preference==="system"&&(o.value=P.getColorScheme())}))}function i(n,c){var s,u;switch(n){case"cookie":window.document.cookie=x+"="+c;break;case"sessionStorage":(s=window.sessionStorage)==null||s.setItem(x,c);break;case"localStorage":default:(u=window.localStorage)==null||u.setItem(x,c)}}z(()=>o.preference,n=>{o.forced||(n==="system"?(o.value=P.getColorScheme(),t()):o.value=n,i(Gt,n))},{immediate:!0}),z(()=>o.value,(n,c)=>{P.removeColorScheme(c),P.addColorScheme(n)}),o.preference==="system"&&t(),e.hook("app:mounted",()=>{o.unknown&&(o.preference=P.preference,o.value=P.value,o.unknown=!1)}),e.provide("colorMode",o)}),C=()=>(re()??{}).public??{};class Xt{constructor(){this.auth0=new lt.WebAuth({domain:C().AUTH_DOMAIN,clientID:C().AUTH_CLIENT_ID,redirectUri:C().AUTH_REDIRECT_URI,responseType:"token id_token",scope:"openid profile email",audience:"https://finsc-dev-auth.jp.auth0.com/api/v2/",grant_type:"client_credentials"})}verify(){return new Promise((o,a)=>{this.auth0.parseHash((t,i)=>{if(t)return a(t);if(!i||!i.idToken)return a({error:"No token found"});const{accessToken:n,idTokenPayload:c}=i;localStorage&&localStorage.setItem("tkgg",n),o({token:n,profile:c})})})}redirectSignIn(){return this.auth0.authorize()}clearAuth(){localStorage&&localStorage.clear(),this.auth0.logout({returnTo:"",clientID:C().AUTH_CLIENT_ID})}}const Jt="Bearer",Vt=Wo("auth",()=>{const e=new Xt,o=Z("goTo"),a=Z(C().COOKIE_NAME+"_id",{maxAge:C().COOKIE_EXPIRES,sameSite:!0}),t=Z(C().COOKIE_NAME+"_io",{maxAge:C().COOKIE_EXPIRES,sameSite:!0,default:()=>{}});async function i(){return e.redirectSignIn()}async function n(){c(null),s(null),e.clearAuth()}function c(h){h?a.value=Jt+" "+h:a.value=null}function s(h){t.value=h??{}}function u(){return!!a.value}function p(){return t.value}async function r(){const{token:h,profile:w}=await e.verify();if(c(h),s(w),h)return o.value}function y(h){o.value=h}return{login:i,clearAuth:n,loggedIn:u,getProfile:p,verifyAcc:r,token:a,setToken:c,goTo:o,setGoto:y}}),Yt=T(e=>{const o=Vt();return e.hook("app:created",async()=>{if(!o.loggedIn()&&o.token)try{await o.verifyAcc()}catch(a){a.response&&a.response.status===401&&o.setToken(null)}}),{provide:{auth:o}}}),ge=["animationEnd","beforeMount","mounted","updated","click","mouseMove","mouseLeave","legendClick","markerClick","selection","dataPointSelection","dataPointMouseEnter","dataPointMouseLeave","beforeZoom","beforeResetZoom","zoomed","scrolled","brushScrolled"],J=Go({name:"apexchart",props:{options:{type:Object},type:{type:String},series:{type:Array,required:!0},width:{default:"100%"},height:{default:"auto"}},emits:ge,setup(e,{emit:o}){const a=K(null),t=K(null),i=l=>l&&typeof l=="object"&&!Array.isArray(l)&&l!=null,n=(l,d)=>{typeof Object.assign!="function"&&function(){Object.assign=function(m){if(m==null)throw new TypeError("Cannot convert undefined or null to object");let q=Object(m);for(let V=1;V<arguments.length;V++){let N=arguments[V];if(N!=null)for(let Y in N)N.hasOwnProperty(Y)&&(q[Y]=N[Y])}return q}}();let k=Object.assign({},l);return i(l)&&i(d)&&Object.keys(d).forEach(m=>{i(d[m])?m in l?k[m]=n(l[m],d[m]):Object.assign(k,{[m]:d[m]}):Object.assign(k,{[m]:d[m]})}),k},c=async()=>{if(await Re(),t.value)return;const l={chart:{type:e.type||e.options.chart.type||"line",height:e.height,width:e.width,events:{}},series:e.series};ge.forEach(k=>{let m=(...q)=>o(k,...q);l.chart.events[k]=m});const d=n(e.options,l);return t.value=new fe(a.value,d),t.value.render()},s=()=>(u(),c()),u=()=>{t.value.destroy()},p=(l,d)=>t.value.updateSeries(l,d),r=(l,d,k,m)=>t.value.updateOptions(l,d,k,m),y=l=>t.value.toggleSeries(l),h=l=>{t.value.showSeries(l)},w=l=>{t.value.hideSeries(l)},v=(l,d)=>t.value.appendSeries(l,d),E=()=>{t.value.resetSeries()},A=(l,d)=>{t.value.toggleDataPointSelection(l,d)},$=l=>t.value.appendData(l),f=(l,d)=>t.value.zoomX(l,d),L=l=>t.value.dataURI(l),b=l=>t.value.setLocale(l),R=(l,d)=>{t.value.addXaxisAnnotation(l,d)},g=(l,d)=>{t.value.addYaxisAnnotation(l,d)},_=(l,d)=>{t.value.addPointAnnotation(l,d)},S=(l,d)=>{t.value.removeAnnotation(l,d)},O=()=>{t.value.clearAnnotations()};Ko(()=>{window.ApexCharts=fe}),Xo(()=>{a.value=Jo().proxy.$el,c()}),Vo(()=>{t.value&&u()});const H=Yo(e);return z(H.options,()=>{!t.value&&e.options?c():t.value.updateOptions(e.options)}),z(H.series,()=>{!t.value&&e.series?c():t.value.updateSeries(e.series)},{deep:!0}),z(H.type,()=>{s()}),z(H.width,()=>{s()}),z(H.height,()=>{s()}),{chart:t,init:c,refresh:s,destroy:u,updateOptions:r,updateSeries:p,toggleSeries:y,showSeries:h,hideSeries:w,resetSeries:E,zoomX:f,toggleDataPointSelection:A,appendData:$,appendSeries:v,addXaxisAnnotation:R,addYaxisAnnotation:g,addPointAnnotation:_,removeAnnotation:S,clearAnnotations:O,setLocale:b,dataURI:L}},render(){return Zo("div",{class:"vue-apexcharts"})}}),Zt=e=>{e.component(J.name,J)};J.install=Zt;const xt=T(e=>{e.vueApp.use(J)}),Qt=[Et,kt,Ht,Nt,Dt,jt,Bt,xo,qt,Qo,Ft,et,ot,tt,Kt,at,Yt,xt];let ee;{let e;ee=async function(){var c,s;if(e)return e;const t=!!((c=window.__NUXT__)!=null&&c.serverRendered||((s=document.getElementById("__NUXT_DATA__"))==null?void 0:s.dataset.ssr)==="true")?rt(de):st(de),i=nt({vueApp:t});async function n(u){await i.callHook("app:error",u),i.payload.error=i.payload.error||oe(u)}t.config.errorHandler=n;try{await it(i,Qt)}catch(u){n(u)}try{await i.hooks.callHook("app:created",t),await i.hooks.callHook("app:beforeMount",t),t.mount(ct),await i.hooks.callHook("app:mounted",t),await Re()}catch(u){n(u)}return t.config.errorHandler===n&&(t.config.errorHandler=void 0),t},e=ee().catch(o=>{throw console.error("Error while mounting app:",o),o})}const ea=e=>ee(e),ra=Object.freeze(Object.defineProperty({__proto__:null,default:ea},Symbol.toStringTag,{value:"Module"}));export{C as a,ra as e,Vt as u};