import{C as E,aW as c,aX as I,z as U,aY as A,aZ as C,aT as d}from"./Bo6MmINt.js";import{a as O}from"./jL_qhdSn.js";function R(a,s,i){const[t={},u]=typeof s=="string"?[{},s]:[s,i],e=E(()=>c(a)),n=t.key||I([u,typeof e.value=="string"?e.value:"",...q(t)]);if(!n||typeof n!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+n);if(!a)throw new Error("[nuxt] [useFetch] request is missing.");const r=n===u?"$f"+n:n;if(!t.baseURL&&typeof e.value=="string"&&e.value[0]==="/"&&e.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:p,lazy:b,default:v,transform:g,pick:_,watch:f,immediate:w,getCachedData:T,deep:$,dedupe:F,...k}=t,h=U({...A,...k,cache:typeof t.cache=="boolean"?void 0:t.cache}),D={server:p,lazy:b,default:v,transform:g,pick:_,immediate:w,getCachedData:T,deep:$,dedupe:F,watch:f===!1?[]:[h,e,...f||[]]};let o;return O(r,()=>{var y;(y=o==null?void 0:o.abort)==null||y.call(o),o=typeof AbortController<"u"?new AbortController:{};const m=c(t.timeout);let l;return m&&(l=setTimeout(()=>o.abort(),m),o.signal.onabort=()=>clearTimeout(l)),(t.$fetch||globalThis.$fetch)(e.value,{signal:o.signal,...h}).finally(()=>{clearTimeout(l)})},D)}function q(a){var i;const s=[((i=c(a.method))==null?void 0:i.toUpperCase())||"GET",c(a.baseURL)];for(const t of[a.params||a.query]){const u=c(t);if(!u)continue;const e={};for(const[n,r]of Object.entries(u))e[c(n)]=c(r);s.push(e)}return s}const j=C("finsc",{state:()=>({symbol:"FPT",tutru:{fetched:!1,canslim_style:{},canslim_value:{},data2:{},data3:{}}}),actions:{setSymbol(a){this.symbol=a||"FPT"},async fetchTutru(){if(!this.tutru.fetched){const{data:a,error:s}=await R(`${d().API_URI}/tutru?sb=${this.symbol}`,"$skEi6qIBMg");if(console.log(`${d().API_URI}/tutru?sb=${this.symbol}`),s.value)console.error("Failed to fetch finsc:",s);else{const{canslim_style:i,canslim_value:t,data2:u,data3:e}=a.value;this.tutru={canslim_style:i[0],canslim_value:t[0],data2:u[0],data3:e[0]},this.tutru.fetched=!0}}}}});export{R as a,j as u};