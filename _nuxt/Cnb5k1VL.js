import{_ as O}from"./CqT7Oe5H.js";import{r as b,b5 as d,bA as R,aG as T,b4 as l,b2 as i,b3 as a,ba as x,bb as K,bd as y,be as w,bw as q,b9 as n,bf as _,bv as U,bx as W,bh as Z}from"./PQ9VTHH8.js";import{u as J,w as M}from"./ET-L6vjt.js";import X from"./IZDk9QCt.js";import{h as ee}from"./AKZmsCIZ.js";import{f as N,i as te,b as se,c as ae}from"./CDm2gSvM.js";import{u as re}from"./BhR5VRpK.js";import{a as oe}from"./CkSJHOtf.js";import"./B0u2p8wj.js";import"./6bUBh_yt.js";import"./BLVB0qGI.js";import"./B7LlgBWf.js";const ne={class:"rounded-finsc overflow-hidden flex flex-col h-full w-full text-base bg-base-300"},le={class:"flex flex-none justify-between"},ie={class:"text-sm h-full flex items-center pr-6 -ml-6 -mt-3 overflow-hidden"},ce={class:"flex gap-2 justify-around whitespace-nowrap overflow-auto"},ue=["onClick"],de={key:0,class:"px-6 pb-6 flex-1 flex flex-col overflow-auto -mt-6"},fe={class:"flex-none -mx-4"},me={class:"flex-none"},ve={class:"flex justify-between items-center"},pe={class:"flex flex-wrap gap-1 min-w-32"},be={class:"relative"},_e={class:"absolute inset-y-0 -left-4 flex items-center"},he={class:"flex gap-2 text-center"},xe={class:"absolute inset-y-0 -right-4 flex items-center"},ye={class:"my-4 font-semibold"},we={class:"flex-1"},ge={class:"flex flex-wrap gap-1 min-w-32"},Ce={class:"relative"},Se={class:"flex gap-2 text-center"},Ve={__name:"BoxFinance",async setup(qe){let h,B;const k={incomestatement:te,balancesheet:se,cashflow:ae},F={incomestatement:["revenue","grossProfit","postTaxProfit"],balancesheet:["asset","capital","equity"],cashflow:["fromSale","fromInvest","freeCashFlow"]},c=b("incomestatement"),j=t=>{c.value=t},f=b(!0),$=t=>{f.value=t},Q=J(),A=d(()=>Q.symbol),V=(t,e)=>e==="yearOperationProfitGrowth"||e==="yearRevenueGrowth"||e==="yearShareHolderIncomeGrowth"||e==="quarterOperationProfitGrowth"||e==="quarterRevenueGrowth"||e==="quarterShareHolderIncomeGrowth"?(t*100).toFixed(1)+"%":t,P=d(()=>{var e;const t=((e=C.value)==null?void 0:e.data)||[];return Object.keys(t[0]).filter(r=>r!=="ticker"&&r!=="quarter"&&r!=="year")}),Y=d(()=>{var r;const t={};return(((r=C.value)==null?void 0:r.data)||[]).forEach(o=>{const s=o.quarter&&o.quarter<=4?`${o.year} Q${o.quarter}`:o.year;t[s]||(t[s]={}),P.value.forEach(u=>{t[s][u]=o[u]||null})}),t}),G=d(()=>{const t=new Set(p.value),e={};for(const r of t)Y.value[r]&&(e[r]=Y.value[r]);return e}),g=d(()=>{var r;const e=(((r=C.value)==null?void 0:r.data)||[]).map(o=>o.quarter&&o.quarter<=4?`${o.year} Q${o.quarter}`:o.year);return[...new Set(e)].sort((o,s)=>s-o)}),m=b(0),v=b(4),p=d(()=>g.value.slice(m.value,v.value).sort((t,e)=>{const[r,o]=String(t).split(" Q").map(Number),[s,u]=String(e).split(" Q").map(Number);return r-s||(o||0)-(u||0)})),z=()=>{m.value>0&&(m.value-=4,v.value-=4)},E=()=>{v.value<g.value.length&&(m.value+=4,v.value+=4)},H={type:"bar",height:"200px",stroke:"smooth",strokeWidth:1,strokeDashes:0,markers:0,dark:!0,fillSolid:!0},I=b([]),D=re({baseURL:oe().API_FINSC}),{data:C,status:L}=([h,B]=M(()=>R("finance",()=>D.get(`/scfa/${A.value}/${c.value}?yearly=${f.value}`),{watch:[A,c,f]})),h=await h,B(),h);return T(()=>p.value,t=>{I.value=F[c.value].map(e=>({name:k[c.value][e],data:t.map(r=>G.value[r][e])}))}),(t,e)=>{const r=O,o=Z;return l(),i("div",ne,[a("div",le,[x(r,{scale:.5,pos:"tl"},{default:K(()=>e[2]||(e[2]=[a("div",{class:"mr-10 mb-8 text-2xl rotate-[-32deg] font-semibold text-base-primary",title:"Báo cáo tài chính"},[a("div",{class:"animate-bounce"},"BCTC")],-1)])),_:1}),a("div",ie,[a("div",ce,[(l(!0),i(y,null,w(n(N),(s,u)=>(l(),i("button",{key:u,onClick:S=>j(s.id),class:q(["rounded-full px-3 py-1 border border-transparent",n(c)===s.id?"bg-base-100":"border-base-neutral"])},_(s.name),11,ue))),128))])])]),n(L)==="success"?(l(),i("div",de,[a("div",fe,[x(n(X),U({categories:n(p),series:n(I)},H),null,16,["categories","series"])]),a("div",me,[a("div",ve,[a("div",pe,[a("button",{class:q(["px-3 py-1 rounded-full",{"bg-base-primary":n(f)}]),onClick:e[0]||(e[0]=s=>$(!0))}," Hàng Năm ",2),a("button",{class:q(["px-3 py-1 rounded-full",{"bg-base-primary":!n(f)}]),onClick:e[1]||(e[1]=s=>$(!1))}," Hàng Quý ",2)]),a("div",be,[a("div",_e,[x(o,{onClick:E,disabled:n(v)>=n(g).length,icon:"i-ri-arrow-left-s-line",size:"2xs",color:"gray",square:"",ui:{rounded:"rounded-full"}},null,8,["disabled"])]),a("div",he,[(l(!0),i(y,null,w(n(p),s=>(l(),i("div",{key:s,class:"font-semibold w-14"},_(s),1))),128))]),a("div",xe,[x(o,{onClick:z,disabled:n(m)===0,icon:"i-ri-arrow-right-s-line",size:"2xs",color:"gray",square:"",ui:{rounded:"rounded-full"}},null,8,["disabled"])])])]),a("div",ye,_(n(N)[n(c)]),1)]),a("div",we,[(l(!0),i(y,null,w(n(P),(s,u)=>(l(),i("div",{class:"flex justify-between items-center",key:u},[a("div",ge,_(k[n(c)][s]),1),a("div",Ce,[a("div",Se,[(l(!0),i(y,null,w(n(p),S=>(l(),i("div",{class:"w-14 my-1",key:S},_(n(ee)(V(n(G)[S][s],s))),1))),128))])])]))),128))])])):W("",!0)])}}};export{Ve as default};
