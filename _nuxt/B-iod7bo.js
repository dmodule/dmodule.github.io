import{a_ as s,bq as u,bp as c,bH as i,bw as t,bo as _,bv as d,bu as a,bC as m,bK as p}from"./DJaf_P2z.js";const b=()=>s("color-mode").value,C={__name:"Theme",setup(k){const o=b(),n=u({get(){return o.value==="dark"},set(){o.preference=o.value==="dark"?"light":"dark"}});return(v,e)=>{const r=m,l=p;return c(),i(l,null,{fallback:t(()=>e[1]||(e[1]=[_("div",{class:"w-8 h-8"},null,-1)])),default:t(()=>[d(r,{icon:a(n)?"i-ri-sun-line":"i-ri-moon-line",color:"gray",variant:"ghost","aria-label":"Theme",ui:{rounded:"rounded-full"},onClick:e[0]||(e[0]=f=>n.value=!a(n))},null,8,["icon"])]),_:1})}}};export{C as _};
