import{aY as s,y as u,o as c,I as i,w as t,a as _,b as d,q as a,E as m,M as p}from"./B5KGO6qV.js";const k=()=>s("color-mode").value,B={__name:"Theme",setup(f){const o=k(),n=u({get(){return o.value==="dark"},set(){o.preference=o.value==="dark"?"light":"dark"}});return(v,e)=>{const r=m,l=p;return c(),i(l,null,{fallback:t(()=>e[1]||(e[1]=[_("div",{class:"w-8 h-8"},null,-1)])),default:t(()=>[d(r,{icon:a(n)?"i-ri-sun-line":"i-ri-moon-line",color:"gray",variant:"ghost","aria-label":"Theme",ui:{rounded:"rounded-full"},onClick:e[0]||(e[0]=x=>n.value=!a(n))},null,8,["icon"])]),_:1})}}};export{B as _};
