import{aF as s,b4 as u,b3 as c,bl as i,ba as t,b2 as _,b9 as d,b8 as a,bg as m,bq as p}from"./CLbFfPPJ.js";const b=()=>s("color-mode").value,x={__name:"Theme",setup(k){const o=b(),n=u({get(){return o.value==="dark"},set(){o.preference=o.value==="dark"?"light":"dark"}});return(f,e)=>{const r=m,l=p;return c(),i(l,null,{fallback:t(()=>e[1]||(e[1]=[_("div",{class:"w-8 h-8"},null,-1)])),default:t(()=>[d(r,{icon:a(n)?"i-ri-sun-line":"i-ri-moon-line",color:"gray",variant:"ghost","aria-label":"Theme",ui:{rounded:"rounded-full"},onClick:e[0]||(e[0]=v=>n.value=!a(n))},null,8,["icon"])]),_:1})}}};export{x as _};
