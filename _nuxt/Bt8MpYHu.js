const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Dw7e9vQt.js","./entry.BB-jB13P.css"])))=>i.map(i=>d[i]);
const E="modulepreload",w=function(n,s){return new URL(n,s).href},m={},_=function(s,i,u){let d=Promise.resolve();if(i&&i.length>0){const o=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),h=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));d=Promise.allSettled(i.map(t=>{if(t=w(t,u),t in m)return;m[t]=!0;const l=t.endsWith(".css"),v=l?'[rel="stylesheet"]':"";if(!!u)for(let c=o.length-1;c>=0;c--){const a=o[c];if(a.href===t&&(!l||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${v}`))return;const r=document.createElement("link");if(r.rel=l?"stylesheet":E,l||(r.as="script"),r.crossOrigin="",r.href=t,h&&r.setAttribute("nonce",h),document.head.appendChild(r),l)return new Promise((c,a)=>{r.addEventListener("load",c),r.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${t}`)))})}))}function f(o){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=o,window.dispatchEvent(e),!e.defaultPrevented)throw o}return d.then(o=>{for(const e of o||[])e.status==="rejected"&&f(e.reason);return s().catch(f)})},y=(...n)=>_(...n).catch(s=>{const i=new Event("nuxt.preloadError");throw i.payload=s,window.dispatchEvent(i),s}),p=()=>y(()=>import("./Dw7e9vQt.js").then(n=>n.aZ),__vite__mapDeps([0,1]),import.meta.url).then(n=>n.default);p();export{y as _};
