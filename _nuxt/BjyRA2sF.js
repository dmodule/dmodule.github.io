import{a_ as l,y as c,o as u,M as _,w as t,a as i,b as m,q as a,J as p,R as d}from"./CMgfjk2B.js";const k=()=>l("color-mode").value,B={__name:"Theme",setup(v){const o=k(),n=c({get(){return o.value==="dark"},set(){o.preference=o.value==="dark"?"light":"dark"}});return(f,e)=>{const r=p,s=d;return u(),_(s,null,{fallback:t(()=>e[1]||(e[1]=[i("div",{class:"w-8 h-8"},null,-1)])),default:t(()=>[m(r,{icon:a(n)?"i-ri-sun-line":"i-ri-moon-line",color:"gray",variant:"ghost","aria-label":"Theme",onClick:e[0]||(e[0]=x=>n.value=!a(n))},null,8,["icon"])]),_:1})}}};export{B as _};
