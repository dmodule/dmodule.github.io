import{a3 as b,aC as h,ba as g,aL as v,ah as S,bq as y}from"./entry.315daf49.js";function m(e){return b()?(h(e),!0):!1}function f(e){return typeof e=="function"?e():g(e)}const p=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const O=Object.prototype.toString,D=e=>O.call(e)==="[object Object]",P=()=>+Date.now(),d=()=>{},W=j();function j(){var e;return p&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function I(e,n){function o(...t){return new Promise((u,i)=>{Promise.resolve(e(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})).then(u).catch(i)})}return o}function T(e,n={}){let o,t,u=d;const i=r=>{clearTimeout(r),u(),u=d};return r=>{const l=f(e),a=f(n.maxWait);return o&&i(o),l<=0||a!==void 0&&a<=0?(t&&(i(t),t=null),Promise.resolve(r())):new Promise((s,w)=>{u=n.rejectOnCancel?w:s,a&&!t&&(t=setTimeout(()=>{o&&i(o),t=null,s(r())},a)),o=setTimeout(()=>{t&&i(t),t=null,s(r())},l)})}}function x(e,n=200,o={}){return I(T(n,o),e)}function A(e,n=1e3,o={}){const{immediate:t=!0,immediateCallback:u=!1}=o;let i=null;const c=v(!1);function r(){i&&(clearInterval(i),i=null)}function l(){c.value=!1,r()}function a(){const s=f(n);s<=0||(c.value=!0,u&&e(),r(),i=setInterval(e,s))}if(t&&p&&a(),S(n)||typeof n=="function"){const s=y(n,()=>{c.value&&p&&a()});m(s)}return m(l),{isActive:c,pause:l,resume:a}}export{f as a,p as b,D as c,P as d,A as e,W as i,d as n,m as t,x as u};
