import _ from"./Button.c31564e0.js";import{_ as c}from"./client-only.95813f9a.js";import{u as l}from"./composables.6822f3d6.js";import{x as i,o as u,z as m,w as t,b as p,ba as a,a as d}from"./entry.315daf49.js";const f=d("div",{class:"w-8 h-8"},null,-1),k={__name:"Theme",setup(x){const o=l(),e=i({get(){return o.value==="dark"},set(){o.preference=o.value==="dark"?"light":"dark"}});return(h,n)=>{const r=_,s=c;return u(),m(s,null,{fallback:t(()=>[f]),default:t(()=>[p(r,{icon:a(e)?"i-ri-sun-line":"i-ri-moon-line",color:"gray",variant:"ghost","aria-label":"Theme",onClick:n[0]||(n[0]=v=>e.value=!a(e))},null,8,["icon"])]),_:1})}}},w=k;export{w as _};