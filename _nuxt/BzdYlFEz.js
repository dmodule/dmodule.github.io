import{C as T,aT as r,aU as D,z as E,aV as U,aW as C,aX as O}from"./EZFDOare.js";import{a as q}from"./le7zsUL0.js";function x(a,o,u){const[t={},c]=[{},o],e=T(()=>r(a)),s=t.key||D([c,typeof e.value=="string"?e.value:"",...A(t)]);if(!s||typeof s!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+s);if(!a)throw new Error("[nuxt] [useFetch] request is missing.");const i=s===c?"$f"+s:s;if(!t.baseURL&&typeof e.value=="string"&&e.value[0]==="/"&&e.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:m,lazy:y,default:p,transform:v,pick:b,watch:f,immediate:g,getCachedData:_,deep:w,dedupe:F,...$}=t,l=E({...U,...$,cache:typeof t.cache=="boolean"?void 0:t.cache}),k={server:m,lazy:y,default:p,transform:v,pick:b,immediate:g,getCachedData:_,deep:w,dedupe:F,watch:f===!1?[]:[l,e,...f||[]]};let n;return q(i,()=>{var d;(d=n==null?void 0:n.abort)==null||d.call(n),n=typeof AbortController<"u"?new AbortController:{};const h=r(t.timeout);return h&&setTimeout(()=>n.abort(),h),(t.$fetch||globalThis.$fetch)(e.value,{signal:n.signal,...l})},k)}function A(a){var u;const o=[((u=r(a.method))==null?void 0:u.toUpperCase())||"GET",r(a.baseURL)];for(const t of[a.params||a.query]){const c=r(t);if(!c)continue;const e={};for(const[s,i]of Object.entries(c))e[r(s)]=r(i);o.push(e)}return o}const S=C("finsc",{state:()=>({symbol:"FPT",tutru:{fetched:!1,canslim_style:{},canslim_value:{},data2:{},data3:{}}}),actions:{async fetchTutru(){if(!this.tutru.fetched){const{data:a,error:o}=await x(`${O().API_URI}/tutru?sb=${this.symbol}`,"$skEi6qIBMg");if(o.value)console.error("Failed to fetch finsc:",o);else{const{canslim_style:u,canslim_value:t,data2:c,data3:e}=a.value;this.tutru={canslim_style:u[0],canslim_value:t[0],data2:c[0],data3:e[0]},this.tutru.fetched=!0}}}}});export{S as u};
