import{bf as l,B as c,o as _,z as u,w as t,b as i,n as a,a as m,A as d,a0 as p}from"./CIm_wXk-.js";const k=()=>l("color-mode").value,f=m("div",{class:"w-8 h-8"},null,-1),b={__name:"Theme",setup(v){const e=k(),o=c({get(){return e.value==="dark"},set(){e.preference=e.value==="dark"?"light":"dark"}});return(h,n)=>{const r=d,s=p;return _(),u(s,null,{fallback:t(()=>[f]),default:t(()=>[i(r,{icon:a(o)?"i-ri-sun-line":"i-ri-moon-line",color:"gray",variant:"ghost","aria-label":"Theme",onClick:n[0]||(n[0]=x=>o.value=!a(o))},null,8,["icon"])]),_:1})}}};export{b as _};
