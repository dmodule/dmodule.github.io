import{_ as R}from"./BQyFrKra.js";import{f as z,i as U,b as Z,c as K,_ as W}from"./ChdyvyTW.js";import{r as _,bt as d,bV as J,a$ as M,bs as i,bq as c,br as a,by as b,bz as G,bB as y,bC as w,bx as r,bU as B,bD as h,bT as X,bN as ee,bF as te}from"./C-QD9eoP.js";import{u as se,w as ae}from"./BoAVyjC7.js";import re from"./D8gmBD8X.js";import{g as oe}from"./Br4V6czL.js";import{u as ne}from"./B3jXvQpQ.js";import{a as le}from"./BM6ACOQI.js";import"./BfGWD8rQ.js";import"./6bUBh_yt.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";const ie={class:"rounded-finsc overflow-hidden flex flex-col h-full w-full bg-base-300 text-sm"},ce={class:"flex flex-none justify-between"},ue={class:"text-sm h-full flex items-center pr-6 -ml-6 -mt-3 overflow-hidden"},de=["onClick"],fe={key:0,class:"px-6 pb-6 flex-1 flex flex-col overflow-auto -mt-6"},me={class:"flex-none -mx-4"},ve={class:"flex-none"},pe={class:"flex justify-between items-center"},_e={class:"flex flex-wrap gap-1 min-w-32"},be={class:"relative"},he={class:"absolute inset-y-0 -left-4 flex items-center"},xe={class:"flex gap-2 text-center"},ye={class:"absolute inset-y-0 -right-4 flex items-center"},we={class:"my-4 font-semibold"},ge={class:"flex-1"},Ce={class:"flex flex-wrap gap-1 min-w-32"},Se={class:"relative"},qe={class:"flex gap-2 text-center"},Qe={__name:"BoxFinance",async setup(Be){let x,$;const k={incomestatement:U,balancesheet:Z,cashflow:K},V={incomestatement:["revenue","grossProfit","postTaxProfit"],balancesheet:["asset","capital","equity"],cashflow:["fromSale","fromInvest","freeCashFlow"]},u=_("incomestatement"),H=t=>{u.value=t},f=_(!0),N=t=>{f.value=t},Q=se(),P=d(()=>Q.symbol),j=(t,e)=>e==="yearOperationProfitGrowth"||e==="yearRevenueGrowth"||e==="yearShareHolderIncomeGrowth"||e==="quarterOperationProfitGrowth"||e==="quarterRevenueGrowth"||e==="quarterShareHolderIncomeGrowth"?(t*100).toFixed(1)+"%":t,Y=d(()=>{var e;const t=((e=C.value)==null?void 0:e.data)||[];return Object.keys(t[0]).filter(s=>s!=="ticker"&&s!=="quarter"&&s!=="year")}),A=d(()=>{var s;const t={};return(((s=C.value)==null?void 0:s.data)||[]).forEach(o=>{const l=o.quarter&&o.quarter<=4?`${o.year} Q${o.quarter}`:o.year;t[l]||(t[l]={}),Y.value.forEach(n=>{t[l][n]=o[n]||null})}),t}),F=d(()=>{const t=new Set(p.value),e={};for(const s of t)A.value[s]&&(e[s]=A.value[s]);return e}),g=d(()=>{var s;const e=(((s=C.value)==null?void 0:s.data)||[]).map(o=>o.quarter&&o.quarter<=4?`${o.year} Q${o.quarter}`:o.year);return[...new Set(e)].sort((o,l)=>l-o)}),m=_(0),v=_(4),p=d(()=>g.value.slice(m.value,v.value).sort((t,e)=>{const[s,o]=String(t).split(" Q").map(Number),[l,n]=String(e).split(" Q").map(Number);return s-l||(o||0)-(n||0)})),D=()=>{m.value>0&&(m.value-=4,v.value-=4)},E=()=>{v.value<g.value.length&&(m.value+=4,v.value+=4)},T={type:"bar",height:"200px",stroke:"smooth",strokeWidth:1,strokeDashes:0,markers:0,dark:!0,fillSolid:!0},I=_([]),L=ne({baseURL:le().API_FINSC}),{data:C,status:O}=([x,$]=ae(()=>J("finance",()=>L.get(`/scfa/${P.value}/${u.value}?yearly=${f.value}`),{watch:[P,u,f]})),x=await x,$(),x);return M(()=>p.value,t=>{I.value=V[u.value].map(e=>({name:k[u.value][e],data:t.map(s=>F.value[s][e])}))}),(t,e)=>{const s=R,o=W,l=te;return i(),c("div",ie,[a("div",ce,[b(s,{scale:.5,pos:"tl"},{default:G(()=>e[2]||(e[2]=[a("div",{class:"mr-10 mb-8 text-2xl rotate-[-32deg] font-semibold text-base-primary",title:"Báo cáo tài chính"},[a("div",{class:"animate-bounce"},"BCTC")],-1)])),_:1}),a("div",ue,[b(o,{class:"max-w-full"},{default:G(()=>[(i(!0),c(y,null,w(r(z),(n,S)=>(i(),c("button",{key:S,onClick:q=>H(n.id),class:B(["rounded-full px-3 py-1 border border-transparent",r(u)===n.id?"bg-base-100":"border-base-neutral"])},h(n.name),11,de))),128))]),_:1})])]),r(O)==="success"?(i(),c("div",fe,[a("div",me,[b(r(re),X({categories:r(p),series:r(I)},T),null,16,["categories","series"])]),a("div",ve,[a("div",pe,[a("div",_e,[a("button",{class:B(["px-3 py-1 rounded-full",{"bg-base-primary":r(f)}]),onClick:e[0]||(e[0]=n=>N(!0))}," Hàng Năm ",2),a("button",{class:B(["px-3 py-1 rounded-full",{"bg-base-primary":!r(f)}]),onClick:e[1]||(e[1]=n=>N(!1))}," Hàng Quý ",2)]),a("div",be,[a("div",he,[b(l,{onClick:E,disabled:r(v)>=r(g).length,icon:"i-ri-arrow-left-s-line",size:"2xs",color:"gray",square:"",ui:{rounded:"rounded-full"}},null,8,["disabled"])]),a("div",xe,[(i(!0),c(y,null,w(r(p),n=>(i(),c("div",{key:n,class:"font-semibold w-14"},h(n),1))),128))]),a("div",ye,[b(l,{onClick:D,disabled:r(m)===0,icon:"i-ri-arrow-right-s-line",size:"2xs",color:"gray",square:"",ui:{rounded:"rounded-full"}},null,8,["disabled"])])])]),a("div",we,h(r(z)[r(u)]),1)]),a("div",ge,[(i(!0),c(y,null,w(r(Y),(n,S)=>(i(),c("div",{class:"flex justify-between items-center",key:S},[a("div",Ce,h(k[r(u)][n]),1),a("div",Se,[a("div",qe,[(i(!0),c(y,null,w(r(p),q=>(i(),c("div",{class:"w-14 my-1",key:q},h(r(oe)(j(r(F)[q][n],n))),1))),128))])])]))),128))])])):ee("",!0)])}}};export{Qe as default};
