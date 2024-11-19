import{_ as K}from"./BM3onWYV.js";import{r as m,bb as M,bd as X,bs as l,bq as c,bx as s,bI as H,bP as Y,br as o,bu as J,bF as Q,a_ as _,bX as ee,b3 as te,by as C,bz as T,bB as S,bC as k,bW as L,bD as B,bV as se}from"./B5CNXMPg.js";import{w as oe}from"./D6Rsi3fI.js";import re from"./BTJ49vVJ.js";import{b as ae,f as ne}from"./9Ez2jyDG.js";import{f as V,i as le,b as ie,c as ce}from"./CDm2gSvM.js";import{u as ue}from"./B3ZFyyn7.js";import{a as de}from"./C75rfUIj.js";import"./D0QZyhSl.js";import"./DxqHYnwt.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";const fe={class:"flex items-center"},me={__name:"ScrollHorizon",setup(R){const i=m(null),b=m(!1),h=m(!1),v=()=>{if(i.value){const{scrollLeft:d,scrollWidth:x,clientWidth:p}=i.value;b.value=d>0,h.value=d+p<x}},u=()=>{i.value&&(i.value.scrollBy({left:-200,behavior:"smooth"}),setTimeout(v,300))},q=()=>{i.value&&(i.value.scrollBy({left:200,behavior:"smooth"}),setTimeout(v,300))};return M(()=>{setTimeout(()=>{v()},1200),window.addEventListener("resize",v)}),X(()=>{window.removeEventListener("resize",v)}),(d,x)=>{const p=Q;return l(),c("div",fe,[s(b)?(l(),H(p,{key:0,icon:"i-ri-arrow-left-s-line",size:"2xs",color:"gray",square:"",variant:"soft",ui:{rounded:"rounded-full"},onClick:u})):Y("",!0),o("div",{class:"flex gap-2 whitespace-nowrap overflow-x-auto scrollbar-hide",ref_key:"scrollContent",ref:i},[J(d.$slots,"default")],512),s(h)?(l(),H(p,{key:1,icon:"i-ri-arrow-right-s-line",size:"2xs",color:"gray",square:"",variant:"soft",ui:{rounded:"rounded-full"},onClick:q})):Y("",!0)])}}},ve={class:"rounded-finsc overflow-hidden flex flex-col h-full w-full bg-base-300 text-sm"},pe={class:"flex flex-none justify-between"},_e={class:"text-sm h-full flex items-center pr-6 -ml-6 -mt-3 overflow-hidden"},be=["onClick"],he={key:0,class:"px-6 pb-6 flex-1 flex flex-col overflow-auto -mt-6"},xe={class:"flex-none -mx-4"},ye={class:"flex-none"},we={class:"flex justify-between items-center"},ge={class:"flex flex-wrap gap-1 min-w-32"},Ce={class:"relative"},Be={class:"absolute inset-y-0 -left-4 flex items-center"},Se={class:"flex gap-2 text-center"},ke={class:"absolute inset-y-0 -right-4 flex items-center"},qe={class:"my-4 font-semibold"},$e={class:"flex-1"},ze={class:"flex flex-wrap gap-1 min-w-32"},Pe={class:"relative"},Ie={class:"flex gap-2 text-center"},We={__name:"BoxFinance",async setup(R){let i,b;const h={incomestatement:le,balancesheet:ie,cashflow:ce},v={incomestatement:["revenue","grossProfit","postTaxProfit"],balancesheet:["asset","capital","equity"],cashflow:["fromSale","fromInvest","freeCashFlow"]},u=m("incomestatement"),q=t=>{u.value=t},d=m(!0),x=t=>{d.value=t},p=ae(),A=_(()=>p.symbol),W=(t,e)=>e==="yearOperationProfitGrowth"||e==="yearRevenueGrowth"||e==="yearShareHolderIncomeGrowth"||e==="quarterOperationProfitGrowth"||e==="quarterRevenueGrowth"||e==="quarterShareHolderIncomeGrowth"?(t*100).toFixed(1)+"%":t,F=_(()=>{var e;const t=((e=z.value)==null?void 0:e.data)||[];return Object.keys(t[0]).filter(r=>r!=="ticker"&&r!=="quarter"&&r!=="year")}),N=_(()=>{var r;const t={};return(((r=z.value)==null?void 0:r.data)||[]).forEach(a=>{const f=a.quarter&&a.quarter<=4?`${a.year} Q${a.quarter}`:a.year;t[f]||(t[f]={}),F.value.forEach(n=>{t[f][n]=a[n]||null})}),t}),E=_(()=>{const t=new Set(g.value),e={};for(const r of t)N.value[r]&&(e[r]=N.value[r]);return e}),$=_(()=>{var r;const e=(((r=z.value)==null?void 0:r.data)||[]).map(a=>a.quarter&&a.quarter<=4?`${a.year} Q${a.quarter}`:a.year);return[...new Set(e)].sort((a,f)=>f-a)}),y=m(0),w=m(4),g=_(()=>$.value.slice(y.value,w.value).sort((t,e)=>{const[r,a]=String(t).split(" Q").map(Number),[f,n]=String(e).split(" Q").map(Number);return r-f||(a||0)-(n||0)})),j=()=>{y.value>0&&(y.value-=4,w.value-=4)},D=()=>{w.value<$.value.length&&(y.value+=4,w.value+=4)},O={type:"bar",height:"200px",stroke:"smooth",strokeWidth:1,strokeDashes:0,markers:0,dark:!0,fillSolid:!0},G=m([]),U=ue({baseURL:de().API_FINSC}),{data:z,status:Z}=([i,b]=oe(()=>ee("finance",()=>U.get(`/scfa/${A.value}/${u.value}?yearly=${d.value}`),{watch:[A,u,d]})),i=await i,b(),i);return te(()=>g.value,t=>{G.value=v[u.value].map(e=>({name:h[u.value][e],data:t.map(r=>E.value[r][e])}))}),(t,e)=>{const r=K,a=me,f=Q;return l(),c("div",ve,[o("div",pe,[C(r,{scale:.5,pos:"tl"},{default:T(()=>e[2]||(e[2]=[o("div",{class:"mr-10 mb-8 text-2xl rotate-[-32deg] font-semibold text-base-primary",title:"Báo cáo tài chính"},[o("div",{class:"animate-bounce"},"BCTC")],-1)])),_:1}),o("div",_e,[C(a,{class:"max-w-full"},{default:T(()=>[(l(!0),c(S,null,k(s(V),(n,P)=>(l(),c("button",{key:P,onClick:I=>q(n.id),class:L(["rounded-full px-3 py-1 border border-transparent",s(u)===n.id?"bg-base-100":"border-base-neutral"])},B(n.name),11,be))),128))]),_:1})])]),s(Z)==="success"?(l(),c("div",he,[o("div",xe,[C(s(re),se({categories:s(g),series:s(G)},O),null,16,["categories","series"])]),o("div",ye,[o("div",we,[o("div",ge,[o("button",{class:L(["px-3 py-1 rounded-full",{"bg-base-primary":s(d)}]),onClick:e[0]||(e[0]=n=>x(!0))}," Hàng Năm ",2),o("button",{class:L(["px-3 py-1 rounded-full",{"bg-base-primary":!s(d)}]),onClick:e[1]||(e[1]=n=>x(!1))}," Hàng Quý ",2)]),o("div",Ce,[o("div",Be,[C(f,{onClick:D,disabled:s(w)>=s($).length,icon:"i-ri-arrow-left-s-line",size:"2xs",color:"gray",square:"",ui:{rounded:"rounded-full"}},null,8,["disabled"])]),o("div",Se,[(l(!0),c(S,null,k(s(g),n=>(l(),c("div",{key:n,class:"font-semibold w-14"},B(n),1))),128))]),o("div",ke,[C(f,{onClick:j,disabled:s(y)===0,icon:"i-ri-arrow-right-s-line",size:"2xs",color:"gray",square:"",ui:{rounded:"rounded-full"}},null,8,["disabled"])])])]),o("div",qe,B(s(V)[s(u)]),1)]),o("div",$e,[(l(!0),c(S,null,k(s(F),(n,P)=>(l(),c("div",{class:"flex justify-between items-center",key:P},[o("div",ze,B(h[s(u)][n]),1),o("div",Pe,[o("div",Ie,[(l(!0),c(S,null,k(s(g),I=>(l(),c("div",{class:"w-14 my-1",key:I},B(s(ne)(W(s(E)[I][n],n))),1))),128))])])]))),128))])])):Y("",!0)])}}};export{We as default};