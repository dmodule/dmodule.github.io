const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DC_KSR4w.js","./B8Uc90hl.js","./vue.Dm7ZVaVg.css","./BLVB0qGI.js","./DdDBkiWh.js","./DC3_xp_J.js","./DyzE3n9j.js","./CsBS7RdU.js","./BUHp3l8K.js","./FontSize.CHNZKfF7.css","./B7LLxn3i.js","./DxqHYnwt.js","./custom.aDz8E-yz.css","./B6IQCZPe.js","./Co1ocXrx.js","./Dm37pqTl.js","./CKUsvDPu.js","./CA07Ia20.js","./EnIdWGl6.js","./CPRaKYaQ.js","./DCPCwmsg.js","./MAn_kaWA.js","./CxoM_Jaq.js","./C83wUoeB.js","./BxgosszV.js","./scD3fHB9.js","./C7MJjHxu.js","./Bnw5sLI9.js","./J4vOeAnM.js","./Base.DOCVZMqC.css","./D4dQPSCO.js","./CL-RoSnU.js","./BkH8Cvkj.js","./CV3Tw2Bi.js","./CXnmngx2.js","./LHqS3iFO.js","./CvtwTA0E.js","./C1LgBZlH.js","./DFol4zxI.js","./intro.DngOYblC.css","./BC12UY5T.js","./D6Y2VP14.js","./test.B3p5lTkE.css","./j9g2HVSV.js","./CjhEEpMd.js","./CU4mKOJY.js"])))=>i.map(i=>d[i]);
import{w as Pe,a as Ae,d as te,b as Me,c as b,e as Oe,f as V,g as ne,s as H,r as G,h as we,i as se,j as Ve,k as He,l as Ie,u as X,m as De,_ as L,n as A,o as je,p as Ne,q as Te,t as j,v as Ue,x as ke,y as J,z as $e,A as Be,B as qe,S as ce,C as Fe,D as xe,E as le,F as Ge,G as Ee,H as ue,I as We,J as fe,K as ie,L as Le,M as de,N as Ke,O as Xe,P as Je,Q as Y,R as Ye,T as Qe,U as Ze,V as ea,W as aa,X as oa,Y as ta,Z as ra,$ as na,a0 as sa,a1 as ia,a2 as ca,a3 as la,a4 as ua,a5 as fa,a6 as da,a7 as pa,a8 as ha,a9 as ya,aa as ma,ab as ba,ac as va,ad as ga,ae as _a,af as wa,ag as Ta,ah as Ua,ai as ka,aj as Ea,ak as La,al as Sa,am as Ra,an as Ca,ao as za,ap as Pa,aq as Aa,ar as Ma,as as Oa,at as Va,au as Ha,av as Ia,aw as Da,ax as ja,ay as Na,az as $a,aA as Ba,aB as qa,aC as Fa,aD as xa,aE as Ga,aF as Wa,aG as Ka,aH as Xa,aI as Ja,aJ as Ya,aK as Qa,aL as Za,aM as eo,aN as ao,aO as oo,aP as to,aQ as ro,aR as no,aS as so,aT as io,aU as co,aV as lo,aW as q,aX as uo,aY as fo,aZ as Se,a_ as po,a$ as ho,b0 as pe,b1 as he,b2 as yo,b3 as P,b4 as mo,b5 as bo,b6 as vo,b7 as go,b8 as ee,b9 as _o,ba as wo,bb as To,bc as Uo,bd as ko,be as Eo,bf as Lo,bg as Re,bh as So,bi as Ro,bj as Co,bk as zo,bl as Po,bm as Ao,bn as Mo,bo as Oo,bp as ye}from"./B8Uc90hl.js";import{i as Vo}from"./BLVB0qGI.js";import{A as me}from"./DdDBkiWh.js";class Ho extends Error{constructor(a,o){super(a,o),this.name="FetchError",o!=null&&o.cause&&!this.cause&&(this.cause=o.cause)}}function Io(e){var u,p,r,m,h;const a=((u=e.error)==null?void 0:u.message)||((p=e.error)==null?void 0:p.toString())||"",o=((r=e.request)==null?void 0:r.method)||((m=e.options)==null?void 0:m.method)||"GET",t=((h=e.request)==null?void 0:h.url)||String(e.request)||"/",i=`[${o}] ${JSON.stringify(t)}`,s=e.response?`${e.response.status} ${e.response.statusText}`:"<no response>",c=`${i}: ${s}${a?` ${a}`:""}`,n=new Ho(c,e.error?{cause:e.error}:void 0);for(const y of["request","options","response"])Object.defineProperty(n,y,{get(){return e[y]}});for(const[y,w]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(n,y,{get(){return e.response&&e.response[w]}});return n}const Do=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function be(e="GET"){return Do.has(e.toUpperCase())}function jo(e){if(e===void 0)return!1;const a=typeof e;return a==="string"||a==="number"||a==="boolean"||a===null?!0:a!=="object"?!1:Array.isArray(e)?!0:e.buffer?!1:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const No=new Set(["image/svg","application/xml","application/xhtml","application/html"]),$o=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Bo(e=""){if(!e)return"json";const a=e.split(";").shift()||"";return $o.test(a)?"json":No.has(a)||a.startsWith("text/")?"text":"blob"}function qo(e,a,o,t){const i=Fo((a==null?void 0:a.headers)??(e==null?void 0:e.headers),o==null?void 0:o.headers,t);let s;return(o!=null&&o.query||o!=null&&o.params||a!=null&&a.params||a!=null&&a.query)&&(s={...o==null?void 0:o.params,...o==null?void 0:o.query,...a==null?void 0:a.params,...a==null?void 0:a.query}),{...o,...a,query:s,params:s,headers:i}}function Fo(e,a,o){if(!a)return new o(e);const t=new o(a);if(e)for(const[i,s]of Symbol.iterator in e||Array.isArray(e)?e:new o(e))t.set(i,s);return t}async function F(e,a){if(a)if(Array.isArray(a))for(const o of a)await o(e);else await a(e)}const xo=new Set([408,409,425,429,500,502,503,504]),Go=new Set([101,204,205,304]);function Ce(e={}){const{fetch:a=globalThis.fetch,Headers:o=globalThis.Headers,AbortController:t=globalThis.AbortController}=e;async function i(n){const u=n.error&&n.error.name==="AbortError"&&!n.options.timeout||!1;if(n.options.retry!==!1&&!u){let r;typeof n.options.retry=="number"?r=n.options.retry:r=be(n.options.method)?0:1;const m=n.response&&n.response.status||500;if(r>0&&(Array.isArray(n.options.retryStatusCodes)?n.options.retryStatusCodes.includes(m):xo.has(m))){const h=typeof n.options.retryDelay=="function"?n.options.retryDelay(n):n.options.retryDelay||0;return h>0&&await new Promise(y=>setTimeout(y,h)),s(n.request,{...n.options,retry:r-1})}}const p=Io(n);throw Error.captureStackTrace&&Error.captureStackTrace(p,s),p}const s=async function(u,p={}){const r={request:u,options:qo(u,p,e.defaults,o),response:void 0,error:void 0};r.options.method&&(r.options.method=r.options.method.toUpperCase()),r.options.onRequest&&await F(r,r.options.onRequest),typeof r.request=="string"&&(r.options.baseURL&&(r.request=Pe(r.request,r.options.baseURL)),r.options.query&&(r.request=Ae(r.request,r.options.query),delete r.options.query),"query"in r.options&&delete r.options.query,"params"in r.options&&delete r.options.params),r.options.body&&be(r.options.method)&&(jo(r.options.body)?(r.options.body=typeof r.options.body=="string"?r.options.body:JSON.stringify(r.options.body),r.options.headers=new o(r.options.headers||{}),r.options.headers.has("content-type")||r.options.headers.set("content-type","application/json"),r.options.headers.has("accept")||r.options.headers.set("accept","application/json")):("pipeTo"in r.options.body&&typeof r.options.body.pipeTo=="function"||typeof r.options.body.pipe=="function")&&("duplex"in r.options||(r.options.duplex="half")));let m;if(!r.options.signal&&r.options.timeout){const y=new t;m=setTimeout(()=>{const w=new Error("[TimeoutError]: The operation was aborted due to timeout");w.name="TimeoutError",w.code=23,y.abort(w)},r.options.timeout),r.options.signal=y.signal}try{r.response=await a(r.request,r.options)}catch(y){return r.error=y,r.options.onRequestError&&await F(r,r.options.onRequestError),await i(r)}finally{m&&clearTimeout(m)}if((r.response.body||r.response._bodyInit)&&!Go.has(r.response.status)&&r.options.method!=="HEAD"){const y=(r.options.parseResponse?"json":r.options.responseType)||Bo(r.response.headers.get("content-type")||"");switch(y){case"json":{const w=await r.response.text(),M=r.options.parseResponse||te;r.response._data=M(w);break}case"stream":{r.response._data=r.response.body||r.response._bodyInit;break}default:r.response._data=await r.response[y]()}}return r.options.onResponse&&await F(r,r.options.onResponse),!r.options.ignoreResponseError&&r.response.status>=400&&r.response.status<600?(r.options.onResponseError&&await F(r,r.options.onResponseError),await i(r)):r.response},c=async function(u,p){return(await s(u,p))._data};return c.raw=s,c.native=(...n)=>a(...n),c.create=(n={},u={})=>Ce({...e,...u,defaults:{...e.defaults,...u.defaults,...n}}),c}const W=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Wo=W.fetch?(...e)=>W.fetch(...e):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),Ko=W.Headers,Xo=W.AbortController,Jo=Ce({fetch:Wo,Headers:Ko,AbortController:Xo}),Yo=Jo;globalThis.$fetch||(globalThis.$fetch=Yo.create({baseURL:Me()}));const ve={NuxtError:e=>ne(e),EmptyShallowRef:e=>H(e==="_"?void 0:e==="0n"?BigInt(0):te(e)),EmptyRef:e=>G(e==="_"?void 0:e==="0n"?BigInt(0):te(e)),ShallowRef:e=>H(e),ShallowReactive:e=>we(e),Ref:e=>G(e),Reactive:e=>se(e)},Qo=b({name:"nuxt:revive-payload:client",order:-30,async setup(e){let a,o;for(const t in ve)Oe(t,ve[t]);Object.assign(e.payload,([a,o]=V(()=>e.runWithContext(Ve)),a=await a,o(),a)),window.__NUXT__=e.payload}}),Zo=[],et=b({name:"nuxt:head",enforce:"pre",setup(e){const a=He({plugins:Zo});Ie(()=>X().vueApp._context.provides.usehead),e.vueApp.use(a);{let o=!0;const t=async()=>{o=!1,await De(a)};a.hooks.hook("dom:beforeRender",i=>{i.shouldRender=!o}),e.hooks.hook("page:start",()=>{o=!0}),e.hooks.hook("page:finish",()=>{e.isHydrating||t()}),e.hooks.hook("app:error",t),e.hooks.hook("app:suspense:resolve",t)}}}),at={layout:"auth"},ae=[{name:"callback",path:"/callback",component:()=>L(()=>import("./DC_KSR4w.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)},{name:"custom",path:"/custom",meta:at||{},component:()=>L(()=>import("./DC3_xp_J.js").then(e=>e.c),__vite__mapDeps([5,6,1,2,7,8,9,10,11,12]),import.meta.url)},{name:"example",path:"/example",component:()=>L(()=>import("./B6IQCZPe.js"),__vite__mapDeps([13,1,2,14,15,16,7,17,18,19,20,21,22,23,4,24,25,26,27,28,29,30,31,32,33,10,34,35,36]),import.meta.url)},{name:"index",path:"/",component:()=>L(()=>import("./C1LgBZlH.js"),__vite__mapDeps([37,6,1,2]),import.meta.url)},{name:"intro",path:"/intro",component:()=>L(()=>import("./DFol4zxI.js"),__vite__mapDeps([38,6,1,2,39]),import.meta.url)},{name:"login",path:"/login",component:()=>L(()=>import("./BC12UY5T.js"),__vite__mapDeps([40,1,2]),import.meta.url)},{name:"test",path:"/test",component:()=>L(()=>import("./D6Y2VP14.js"),__vite__mapDeps([41,8,1,2,7,9,42]),import.meta.url)}],ot={scrollBehavior(e,a,o){var p;const t=X(),i=((p=A().options)==null?void 0:p.scrollBehaviorType)??"auto";let s=o||void 0;const c=typeof e.meta.scrollToTop=="function"?e.meta.scrollToTop(e,a):e.meta.scrollToTop;if(!s&&a&&e&&c!==!1&&je(e,a)&&(s={left:0,top:0}),e.path===a.path)return a.hash&&!e.hash?{left:0,top:0}:e.hash?{el:e.hash,top:ge(e.hash),behavior:i}:!1;const n=r=>!!(r.meta.pageTransition??Ne),u=n(a)&&n(e)?"page:transition:finish":"page:finish";return new Promise(r=>{t.hooks.hookOnce(u,async()=>{await new Promise(m=>setTimeout(m,0)),e.hash&&(s={el:e.hash,top:ge(e.hash),behavior:i}),r(s)})})}};function ge(e){try{const a=document.querySelector(e);if(a)return(Number.parseFloat(getComputedStyle(a).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const tt={hashMode:!1,scrollBehaviorType:"auto"},U={...tt,...ot},rt=Te(async e=>{var u;let a,o;if(!((u=e.meta)!=null&&u.validate))return;const t=X(),i=A(),s=([a,o]=V(()=>Promise.resolve(e.meta.validate(e))),a=await a,o(),a);if(s===!0)return;const c=ne({statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${e.fullPath}`,data:{path:e.fullPath}}),n=i.beforeResolve(p=>{if(n(),p===e){const r=i.afterEach(async()=>{r(),await t.runWithContext(()=>j(c)),window==null||window.history.pushState({},"",e.fullPath)});return!1}})}),nt=Te(async e=>{let a,o;const t=([a,o]=V(()=>Ue(e.path)),a=await a,o(),a);if(t.redirect)return ke(t.redirect,{acceptRelative:!0})?(window.location.href=t.redirect,!1):t.redirect}),st=[rt,nt],N={};function it(e,a,o){const{pathname:t,search:i,hash:s}=a,c=e.indexOf("#");if(c>-1){const p=s.includes(e.slice(c))?e.slice(c).length:1;let r=s.slice(p);return r[0]!=="/"&&(r="/"+r),ue(r,"")}const n=ue(t,e),u=!o||We(n,o,{trailingSlash:!0})?n:o;return u+(u.includes("?")?"":i)+s}const ct=b({name:"nuxt:router",enforce:"pre",async setup(e){var $;let a,o,t=J().app.baseURL;U.hashMode&&!t.includes("#")&&(t+="#");const i=(($=U.history)==null?void 0:$.call(U,t))??(U.hashMode?$e(t):Be(t)),s=U.routes?([a,o]=V(()=>U.routes(ae)),a=await a,o(),a??ae):ae;let c;const n=qe({...U,scrollBehavior:(d,S,T)=>{if(S===ce){c=T;return}if(U.scrollBehavior){if(n.options.scrollBehavior=U.scrollBehavior,"scrollRestoration"in window.history){const k=n.beforeEach(()=>{k(),window.history.scrollRestoration="manual"})}return U.scrollBehavior(d,ce,c||T)}},history:i,routes:s});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),e.vueApp.use(n);const u=H(n.currentRoute.value);n.afterEach((d,S)=>{u.value=S}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>u.value});const p=it(t,window.location,e.payload.path),r=H(n.currentRoute.value),m=()=>{r.value=n.currentRoute.value};e.hook("page:finish",m),n.afterEach((d,S)=>{var T,k,g,_;((k=(T=d.matched[0])==null?void 0:T.components)==null?void 0:k.default)===((_=(g=S.matched[0])==null?void 0:g.components)==null?void 0:_.default)&&m()});const h={};for(const d in r.value)Object.defineProperty(h,d,{get:()=>r.value[d],enumerable:!0});e._route=we(h),e._middleware=e._middleware||{global:[],named:{}};const y=Fe();n.afterEach(async(d,S,T)=>{delete e._processingMiddleware,!e.isHydrating&&y.value&&await e.runWithContext(xe),T&&await e.callHook("page:loading:end"),d.matched.length===0&&await e.runWithContext(()=>j(le({statusCode:404,fatal:!1,statusMessage:`Page not found: ${d.fullPath}`,data:{path:d.fullPath}})))});try{[a,o]=V(()=>n.isReady()),await a,o()}catch(d){[a,o]=V(()=>e.runWithContext(()=>j(d))),await a,o()}const w=p!==n.currentRoute.value.fullPath?n.resolve(p):n.currentRoute.value;m();const M=e.payload.state._layout;return n.beforeEach(async(d,S)=>{var T;await e.callHook("page:loading:start"),d.meta=se(d.meta),e.isHydrating&&M&&!Ge(d.meta.layout)&&(d.meta.layout=M),e._processingMiddleware=!0;{const k=new Set([...st,...e._middleware.global]);for(const g of d.matched){const _=g.meta.middleware;if(_)for(const E of Ee(_))k.add(E)}{const g=await e.runWithContext(()=>Ue(d.path));if(g.appMiddleware)for(const _ in g.appMiddleware)g.appMiddleware[_]?k.add(_):k.delete(_)}for(const g of k){const _=typeof g=="string"?e._middleware.named[g]||await((T=N[g])==null?void 0:T.call(N).then(O=>O.default||O)):g;if(!_)throw new Error(`Unknown route middleware: '${g}'.`);const E=await e.runWithContext(()=>_(d,S));if(!e.payload.serverRendered&&e.isHydrating&&(E===!1||E instanceof Error)){const O=E||le({statusCode:404,statusMessage:`Page Not Found: ${p}`});return await e.runWithContext(()=>j(O)),!1}if(E!==!0&&(E||E===!1))return E}}}),n.onError(async()=>{delete e._processingMiddleware,await e.callHook("page:loading:end")}),e.hooks.hookOnce("app:created",async()=>{try{"name"in w&&(w.name=void 0),await n.replace({...w,force:!0}),n.options.scrollBehavior=U.scrollBehavior}catch(d){await e.runWithContext(()=>j(d))}}),{provide:{router:n}}}}),lt=b({name:"nuxt:payload",setup(e){A().beforeResolve(async(a,o)=>{if(a.path===o.path)return;const t=await fe(a.path);t&&Object.assign(e.static.data,t.data)}),ie(()=>{var a;e.hooks.hook("link:prefetch",async o=>{const{hostname:t}=new URL(o,window.location.href);t===window.location.hostname&&await fe(o)}),((a=navigator.connection)==null?void 0:a.effectiveType)!=="slow-2g"&&setTimeout(Le,1e3)})}}),ut=b(()=>{const e=A();ie(()=>{e.beforeResolve(async()=>{await new Promise(a=>{setTimeout(a,100),requestAnimationFrame(()=>{setTimeout(a,0)})})})})}),ft=b(e=>{let a;async function o(){const t=await Le();a&&clearTimeout(a),a=setTimeout(o,de);try{const i=await $fetch(Ke("builds/latest.json")+`?${Date.now()}`);i.id!==t.id&&e.hooks.callHook("app:manifest:update",i)}catch{}}ie(()=>{a=setTimeout(o,de)})}),dt=b({name:"nuxt:chunk-reload",setup(e){const a=A(),o=J(),t=new Set;a.beforeEach(()=>{t.clear()}),e.hook("app:chunkError",({error:s})=>{t.add(s)});function i(s){const n="href"in s&&s.href[0]==="#"?o.app.baseURL+s.href:Xe(o.app.baseURL,s.fullPath);Je({path:n,persistState:!0})}e.hook("app:manifest:update",()=>{a.beforeResolve(i)}),a.onError((s,c)=>{t.has(s)&&i(c)})}}),pt=Y(()=>L(()=>import("./j9g2HVSV.js"),__vite__mapDeps([43,1,2]),import.meta.url).then(e=>e.default||e.default||e)),ht=Y(()=>L(()=>import("./CjhEEpMd.js"),__vite__mapDeps([44,1,2]),import.meta.url).then(e=>e.default||e.default||e)),yt=Y(()=>L(()=>import("./CU4mKOJY.js"),__vite__mapDeps([45,1,2]),import.meta.url).then(e=>e.default||e.default||e)),mt=Y(()=>L(()=>import("./B8Uc90hl.js").then(e=>e.cB),__vite__mapDeps([1,2]),import.meta.url).then(e=>e.default||e.default||e)),bt=[["UAccordion",Ye],["UAlert",Qe],["UAvatar",Ze],["UAvatarGroup",pt],["UBadge",ea],["UButton",aa],["UButtonGroup",ht],["UCarousel",oa],["UChip",ta],["UDropdown",ra],["UIcon",na],["UKbd",sa],["ULink",ia],["UMeter",ca],["UMeterGroup",yt],["UProgress",la],["UCheckbox",ua],["UForm",fa],["UFormGroup",da],["UInput",pa],["UInputMenu",ha],["URadio",ya],["URadioGroup",ma],["URange",ba],["USelect",va],["USelectMenu",ga],["UTextarea",_a],["UToggle",wa],["UTable",Ta],["UCard",Ua],["UContainer",ka],["UDivider",Ea],["USkeleton",La],["UBreadcrumb",Sa],["UCommandPalette",Ra],["UCommandPaletteGroup",Ca],["UHorizontalNavigation",za],["UPagination",Pa],["UTabs",Aa],["UVerticalNavigation",Ma],["UContextMenu",Oa],["UModal",Va],["UModals",Ha],["UNotification",Ia],["UNotifications",Da],["UPopover",ja],["USlideover",Na],["USlideovers",$a],["UTooltip",Ba],["Icon",mt],["TVSingleTicker",qa],["TVTicker",Fa],["TVSymbolInfo",xa],["TVStockMarket",Ga],["TVStockHeatMap",Wa],["TVScreener",Ka],["TVMiniChart",Xa],["TVMarketOverview",Ja],["TVMarketData",Ya],["TVTickerTape",Qa],["TVFundamentalData",Za],["TVForexHeatMap",eo],["TVForexCrossRates",ao],["TVEconomicCalendar",oo],["TVTechnicalAnalysis",to],["TVCryptoMarket",ro],["TVCryptoHeatMap",no],["TVCompanyProfile",so],["TVChart",io],["TVSymbolOverview",co],["TVTopStories",lo]],vt=b({name:"nuxt:global-components",setup(e){for(const[a,o]of bt)e.vueApp.component(a,o),e.vueApp.component("Lazy"+a,o)}}),gt=b({name:"nuxt:prefetch",setup(e){const a=A();e.hooks.hook("app:mounted",()=>{a.beforeEach(async o=>{var i;const t=(i=o==null?void 0:o.meta)==null?void 0:i.layout;t&&typeof q[t]=="function"&&await q[t]()})}),e.hooks.hook("link:prefetch",o=>{if(ke(o))return;const t=a.resolve(o);if(!t)return;const i=t.meta.layout;let s=Ee(t.meta.middleware);s=s.filter(c=>typeof c=="string");for(const c of s)typeof N[c]=="function"&&N[c]();i&&typeof q[i]=="function"&&q[i]()})}}),_t=b(e=>{const a=H({component:"div",props:{}});e.vueApp.provide(uo,a)}),wt=b(e=>{const a=H({component:"div",props:{}});e.vueApp.provide(fo,a)}),Tt="inherit",Ut="currentColor",kt="transparent",Et="#000",Lt="#fff",St={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},Rt={50:"rgb(var(--color-gray-50) / <alpha-value>)",100:"rgb(var(--color-gray-100) / <alpha-value>)",200:"rgb(var(--color-gray-200) / <alpha-value>)",300:"rgb(var(--color-gray-300) / <alpha-value>)",400:"rgb(var(--color-gray-400) / <alpha-value>)",500:"rgb(var(--color-gray-500) / <alpha-value>)",600:"rgb(var(--color-gray-600) / <alpha-value>)",700:"rgb(var(--color-gray-700) / <alpha-value>)",800:"rgb(var(--color-gray-800) / <alpha-value>)",900:"rgb(var(--color-gray-900) / <alpha-value>)",950:"rgb(var(--color-gray-950) / <alpha-value>)"},Ct={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},zt={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},Pt={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"},At={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},Mt={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},Ot={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},Vt={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},Ht={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},It={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},Dt={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},jt={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},Nt={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},$t={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},Bt={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},qt={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},Ft={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},xt={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},Gt={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},Wt={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},Kt={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},Xt={50:"rgb(var(--color-primary-50) / <alpha-value>)",100:"rgb(var(--color-primary-100) / <alpha-value>)",200:"rgb(var(--color-primary-200) / <alpha-value>)",300:"rgb(var(--color-primary-300) / <alpha-value>)",400:"rgb(var(--color-primary-400) / <alpha-value>)",500:"rgb(var(--color-primary-500) / <alpha-value>)",600:"rgb(var(--color-primary-600) / <alpha-value>)",700:"rgb(var(--color-primary-700) / <alpha-value>)",800:"rgb(var(--color-primary-800) / <alpha-value>)",900:"rgb(var(--color-primary-900) / <alpha-value>)",950:"rgb(var(--color-primary-950) / <alpha-value>)",DEFAULT:"rgb(var(--color-primary-DEFAULT) / <alpha-value>)"},Jt={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},x={inherit:Tt,current:Ut,transparent:kt,black:Et,white:Lt,slate:St,gray:Rt,zinc:Ct,neutral:zt,stone:Pt,red:At,orange:Mt,amber:Ot,yellow:Vt,lime:Ht,green:It,emerald:Dt,teal:jt,cyan:Nt,sky:$t,blue:Bt,indigo:qt,violet:Ft,purple:xt,fuchsia:Gt,pink:Wt,rose:Kt,primary:Xt,cool:Jt},Yt=b(()=>{const e=Se(),a=X(),o=po(()=>{const i=pe(x,e.ui.primary),s=pe(x,e.ui.gray);return i||console.warn(`[@nuxt/ui] Primary color '${e.ui.primary}' not found in Tailwind config`),s||console.warn(`[@nuxt/ui] Gray color '${e.ui.gray}' not found in Tailwind config`),`:root {
${Object.entries(i||x.green).map(([c,n])=>`--color-primary-${c}: ${he(n)};`).join(`
`)}
--color-primary-DEFAULT: var(--color-primary-500);

${Object.entries(s||x.cool).map(([c,n])=>`--color-gray-${c}: ${he(n)};`).join(`
`)}
}

.dark {
  --color-primary-DEFAULT: var(--color-primary-400);
}
`}),t={style:[{innerHTML:()=>o.value,tagPriority:-2,id:"nuxt-ui-colors"}]};if(a.isHydrating&&!a.payload.serverRendered){const i=document.createElement("style");i.innerHTML=o.value,i.setAttribute("data-nuxt-ui-colors",""),document.head.appendChild(i),t.script=[{innerHTML:"document.head.removeChild(document.querySelector('[data-nuxt-ui-colors]'))"}]}ho(t)}),Qt="__NUXT_COLOR_MODE__",oe="nuxt-color-mode",Zt="localStorage",C=window[Qt]||{},er=b(e=>{const a=yo("color-mode",()=>se({preference:C.preference,value:C.value,unknown:!1,forced:!1})).value;A().afterEach(s=>{const c=s.meta.colorMode;c&&c!=="system"?(a.value=c,a.forced=!0):(c==="system"&&console.warn("You cannot force the colorMode to system at the page level."),a.forced=!1,a.value=a.preference==="system"?C.getColorScheme():a.preference)});let o;function t(){o||!window.matchMedia||(o=window.matchMedia("(prefers-color-scheme: dark)"),o.addEventListener("change",()=>{!a.forced&&a.preference==="system"&&(a.value=C.getColorScheme())}))}function i(s,c){var n,u;switch(s){case"cookie":window.document.cookie=oe+"="+c;break;case"sessionStorage":(n=window.sessionStorage)==null||n.setItem(oe,c);break;case"localStorage":default:(u=window.localStorage)==null||u.setItem(oe,c)}}P(()=>a.preference,s=>{a.forced||(s==="system"?(a.value=C.getColorScheme(),t()):a.value=s,i(Zt,s))},{immediate:!0}),P(()=>a.value,(s,c)=>{C.removeColorScheme(c),C.addColorScheme(s)}),a.preference==="system"&&t(),e.hook("app:mounted",()=>{a.unknown&&(a.preference=C.preference,a.value=C.value,a.unknown=!1)}),e.provide("colorMode",a)}),ar=b({name:"@nuxt/icon",setup(){var t,i;const e=J(),a=Se().icon;mo.setFetch($fetch.native),bo("all");const o=[];if(a.provider==="server"){const s=((i=(t=e.app)==null?void 0:t.baseURL)==null?void 0:i.replace(/\/$/,""))??"";o.push(s+(a.localApiEndpoint||"/api/_nuxt_icon")),(a.fallbackToApi===!0||a.fallbackToApi==="client-only")&&o.push(a.iconifyApiEndpoint)}else o.push(a.iconifyApiEndpoint);vo("",{resources:o})}}),z=()=>(J()??{}).public??{};class or{constructor(){this.auth0=new Vo.WebAuth({domain:z().AUTH_DOMAIN,clientID:z().AUTH_CLIENT_ID,redirectUri:z().AUTH_REDIRECT_URI,responseType:"token id_token",scope:"openid profile email",audience:"https://finsc-dev-auth.jp.auth0.com/api/v2/",grant_type:"client_credentials"})}verify(){return new Promise((a,o)=>{this.auth0.parseHash((t,i)=>{if(t)return o(t);if(!i||!i.idToken)return o({error:"No token found"});const{accessToken:s,idTokenPayload:c}=i;localStorage&&localStorage.setItem("tkgg",s),a({token:s,profile:c})})})}redirectSignIn(){return this.auth0.authorize()}clearAuth(){localStorage&&localStorage.clear(),this.auth0.logout({returnTo:"",clientID:z().AUTH_CLIENT_ID})}}const tr="Bearer",rr=go("auth",()=>{const e=new or,a=ee("goTo"),o=ee(z().COOKIE_NAME+"_id",{maxAge:z().COOKIE_EXPIRES,sameSite:!0}),t=ee(z().COOKIE_NAME+"_io",{maxAge:z().COOKIE_EXPIRES,sameSite:!0,default:()=>{}});async function i(){return e.redirectSignIn()}async function s(){c(null),n(null),e.clearAuth()}function c(h){h?o.value=tr+" "+h:o.value=null}function n(h){t.value=h??{}}function u(){return!!o.value}function p(){return t.value}async function r(){const{token:h,profile:y}=await e.verify();if(c(h),n(y),h)return a.value}function m(h){a.value=h}return{login:i,clearAuth:s,loggedIn:u,getProfile:p,verifyAcc:r,token:o,setToken:c,goTo:a,setGoto:m}}),nr=b(e=>{const a=rr();return e.hook("app:created",async()=>{if(!a.loggedIn()&&a.token)try{await a.verifyAcc()}catch(o){o.response&&o.response.status===401&&a.setToken(null)}}),{provide:{auth:a}}}),_e=["animationEnd","beforeMount","mounted","updated","click","mouseMove","mouseLeave","legendClick","markerClick","selection","dataPointSelection","dataPointMouseEnter","dataPointMouseLeave","beforeZoom","beforeResetZoom","zoomed","scrolled","brushScrolled"],K=_o({name:"apexchart",props:{options:{type:Object},type:{type:String},series:{type:Array,required:!0},width:{default:"100%"},height:{default:"auto"}},emits:_e,setup(e,{emit:a}){const o=G(null),t=G(null),i=l=>l&&typeof l=="object"&&!Array.isArray(l)&&l!=null,s=(l,f)=>{typeof Object.assign!="function"&&function(){Object.assign=function(v){if(v==null)throw new TypeError("Cannot convert undefined or null to object");let B=Object(v);for(let Q=1;Q<arguments.length;Q++){let D=arguments[Q];if(D!=null)for(let Z in D)D.hasOwnProperty(Z)&&(B[Z]=D[Z])}return B}}();let R=Object.assign({},l);return i(l)&&i(f)&&Object.keys(f).forEach(v=>{i(f[v])?v in l?R[v]=s(l[v],f[v]):Object.assign(R,{[v]:f[v]}):Object.assign(R,{[v]:f[v]})}),R},c=async()=>{if(await Re(),t.value)return;const l={chart:{type:e.type||e.options.chart.type||"line",height:e.height,width:e.width,events:{}},series:e.series};_e.forEach(R=>{let v=(...B)=>a(R,...B);l.chart.events[R]=v});const f=s(e.options,l);return t.value=new me(o.value,f),t.value.render()},n=()=>(u(),c()),u=()=>{t.value.destroy()},p=(l,f)=>t.value.updateSeries(l,f),r=(l,f,R,v)=>t.value.updateOptions(l,f,R,v),m=l=>t.value.toggleSeries(l),h=l=>{t.value.showSeries(l)},y=l=>{t.value.hideSeries(l)},w=(l,f)=>t.value.appendSeries(l,f),M=()=>{t.value.resetSeries()},$=(l,f)=>{t.value.toggleDataPointSelection(l,f)},d=l=>t.value.appendData(l),S=(l,f)=>t.value.zoomX(l,f),T=l=>t.value.dataURI(l),k=l=>t.value.setLocale(l),g=(l,f)=>{t.value.addXaxisAnnotation(l,f)},_=(l,f)=>{t.value.addYaxisAnnotation(l,f)},E=(l,f)=>{t.value.addPointAnnotation(l,f)},O=(l,f)=>{t.value.removeAnnotation(l,f)},ze=()=>{t.value.clearAnnotations()};wo(()=>{window.ApexCharts=me}),To(()=>{o.value=Uo().proxy.$el,c()}),ko(()=>{t.value&&u()});const I=Eo(e);return P(I.options,()=>{!t.value&&e.options?c():t.value.updateOptions(e.options)}),P(I.series,()=>{!t.value&&e.series?c():t.value.updateSeries(e.series)},{deep:!0}),P(I.type,()=>{n()}),P(I.width,()=>{n()}),P(I.height,()=>{n()}),{chart:t,init:c,refresh:n,destroy:u,updateOptions:r,updateSeries:p,toggleSeries:m,showSeries:h,hideSeries:y,resetSeries:M,zoomX:S,toggleDataPointSelection:$,appendData:d,appendSeries:w,addXaxisAnnotation:g,addYaxisAnnotation:_,addPointAnnotation:E,removeAnnotation:O,clearAnnotations:ze,setLocale:k,dataURI:T}},render(){return Lo("div",{class:"vue-apexcharts"})}}),sr=e=>{e.component(K.name,K)};K.install=sr;const ir=b(e=>{e.vueApp.use(K)}),cr=b(e=>{if(typeof window<"u"&&(navigator==null?void 0:navigator.platform)==="Win32"){const o=document.createElement("style");o.textContent=`
      ::-webkit-scrollbar {
        display: block;
        width: 8px;  /* Vertical scrollbar width */
        height: 8px; /* Horizontal scrollbar height */
      }
      
      /* Vertical scrollbar thumb */
      ::-webkit-scrollbar-thumb {
          background-color: #aaa;
          border-radius: 8px;
      }
      
      /* Horizontal scrollbar track */
      ::-webkit-scrollbar-track {
          background: transparent; /* Optional: background for the scrollbar track */
      }
      
      /* Horizontal scrollbar thumb */
      ::-webkit-scrollbar-thumb:horizontal {
          background-color: #aaa; /* Same or different color for horizontal scrollbar */
          border-radius: 8px;
      }
      ::-webkit-scrollbar-corner {
        display: none
      }
      `,document.head.appendChild(o)}}),lr=b(e=>{e.vueApp.use(So,{name:"Vue3Marquee"})}),ur=[Qo,et,ct,lt,ut,ft,dt,Ro,vt,Co,gt,_t,wt,Yt,er,ar,nr,ir,cr,lr];let re;{let e;re=async function(){var c,n;if(e)return e;const t=!!(((c=window.__NUXT__)==null?void 0:c.serverRendered)??((n=document.getElementById("__NUXT_DATA__"))==null?void 0:n.dataset.ssr)==="true")?zo(ye):Po(ye),i=Ao({vueApp:t});async function s(u){await i.callHook("app:error",u),i.payload.error=i.payload.error||ne(u)}t.config.errorHandler=s;try{await Mo(i,ur)}catch(u){s(u)}try{await i.hooks.callHook("app:created",t),await i.hooks.callHook("app:beforeMount",t),t.mount(Oo),await i.hooks.callHook("app:mounted",t),await Re()}catch(u){s(u)}return t.config.errorHandler===s&&(t.config.errorHandler=void 0),t},e=re().catch(a=>{throw console.error("Error while mounting app:",a),a})}const fr=e=>re(e),yr=Object.freeze(Object.defineProperty({__proto__:null,default:fr},Symbol.toStringTag,{value:"Module"}));export{z as a,yr as e,rr as u};
