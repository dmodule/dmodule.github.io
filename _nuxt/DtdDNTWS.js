import{bj as l,C as c,o as _,A as u,w as t,b as i,q as a,a as m,B as d,S as p}from"./EZFDOare.js";const k=()=>l("color-mode").value,v=m("div",{class:"w-8 h-8"},null,-1),C={__name:"Theme",setup(f){const e=k(),o=c({get(){return e.value==="dark"},set(){e.preference=e.value==="dark"?"light":"dark"}});return(h,n)=>{const r=d,s=p;return _(),u(s,null,{fallback:t(()=>[v]),default:t(()=>[i(r,{icon:a(o)?"i-ri-sun-line":"i-ri-moon-line",color:"gray",variant:"ghost","aria-label":"Theme",onClick:n[0]||(n[0]=x=>o.value=!a(o))},null,8,["icon"])]),_:1})}}};export{C as _};
