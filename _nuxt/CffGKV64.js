import{aH as s,b5 as u,b4 as c,bm as i,bb as t,b3 as _,ba as d,b9 as a,bh as m,bq as b}from"./DtJsQ1E2.js";const p=()=>s("color-mode").value,g={__name:"Theme",setup(k){const o=p(),n=u({get(){return o.value==="dark"},set(){o.preference=o.value==="dark"?"light":"dark"}});return(f,e)=>{const r=m,l=b;return c(),i(l,null,{fallback:t(()=>e[1]||(e[1]=[_("div",{class:"w-8 h-8"},null,-1)])),default:t(()=>[d(r,{icon:a(n)?"i-ri-sun-line":"i-ri-moon-line",color:"gray",variant:"ghost","aria-label":"Theme",ui:{rounded:"rounded-full"},onClick:e[0]||(e[0]=v=>n.value=!a(n))},null,8,["icon"])]),_:1})}}};export{g as _};
