import{r as p,a$ as x,bs as a,bJ as v,bz as l,br as n,bx as i,bq as c,b$ as y,bD as h,by as u,bA as k,bF as B,cj as g}from"./C-QD9eoP.js";import{a as w}from"./Br4V6czL.js";import{u as A}from"./B0MBWMgN.js";import{a as V}from"./CB9MmmUK.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";const T={class:"p-4 w-96"},U={key:0,class:"text-base-100"},z={key:1},L={__name:"Bot",props:{modelValue:{type:String,default:""}},setup(m){const _=m,e=p(!1),o=p(null);return x(()=>e.value,async r=>{if(r&&!o.value){const s=await A({baseURL:V().API_BOT}).post("/ainews",{link:_.modelValue});o.value=s.finscAiM1}}),(r,t)=>{const s=B,d=w,b=g;return a(),v(b,{open:i(e),"onUpdate:open":t[0]||(t[0]=f=>k(e)?e.value=f:null),popper:{placement:"right"}},{panel:l(()=>[n("div",T,[i(o)?(a(),c("div",U,[t[1]||(t[1]=n("span",{class:"text-base-primary"},"Tui xin tóm tắt như sau :",-1)),y(" "+h(i(o)),1)])):(a(),c("div",z,[t[2]||(t[2]=n("div",{class:"text-center"},"Tui đang đọc tin, đợi tí nha...",-1)),u(d,{height:"96px"})]))])]),default:l(()=>[u(s,{class:"multicolor",icon:"i-ri-robot-2-line",color:"white",variant:"ghost","aria-label":"AI",size:"xs",ui:{rounded:"rounded-full"}})]),_:1},8,["open"])}}};export{L as default};
