import{r as p,b3 as _,bs as b,bI as f,bz as l,br as s,bx as u,by as d,bA as x,bY as y,b_ as h}from"./B5CNXMPg.js";import{u as v}from"./B3ZFyyn7.js";import{a as g}from"./C75rfUIj.js";import{u as w}from"./-Pa_sf8E.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";const U={class:"relative rounded-full flex items-center p-1"},Y={class:"p-4 text-justify"},I=["innerHTML"],$={__name:"Report",props:["symbol"],setup(m){const r=m,a=p(!1),i=p("");return _(()=>r.symbol,async c=>{if(c){const t=await v({baseURL:g().API_URI}).get(`/cata?symbol=${r.symbol}`),n=t==null?void 0:t.data;if(n){const o=n[0]||{};i.value=`<b>Góc nhìn chuyên gia (${w(o.d,"DD-MM-YYYY")})</b>: ${o.reason}`}}else i.value=""}),(c,e)=>{const t=y,n=h;return b(),f(n,{open:u(a),"onUpdate:open":e[0]||(e[0]=o=>x(a)?a.value=o:null),ui:{width:"max-w-lg"}},{panel:l(()=>[s("div",Y,[s("span",{innerHTML:u(i)},null,8,I)])]),default:l(()=>[s("button",U,[e[1]||(e[1]=s("span",{class:"absolute inset-0 flex items-center justify-center"},[s("div",{class:"h-4 w-4 animate-ping rounded-full bg-green-500 opacity-75"})],-1)),d(t,{name:"i-ri-chat-search-line",size:"16"})])]),_:1},8,["open"])}}};export{$ as default};
