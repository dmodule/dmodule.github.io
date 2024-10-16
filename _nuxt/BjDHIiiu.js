import{r as V,b5 as c,bA as D,b4 as n,b2 as i,b3 as e,bf as r,b9 as s,ba as b,bb as x,bv as I,bx as A,bd as L,be as P,bw as m,bD as z,b$ as N}from"./CsE2J8A2.js";import{u as H}from"./DSy3OKgA.js";import{u as K,w as R}from"./DZVGwmjB.js";import U from"./CGYfYq1i.js";import{s as j,k as v,h as _}from"./Be7hkzXI.js";import{u as E}from"./C4eAUuFZ.js";import{a as F}from"./oo9yaXfP.js";import"./jsxTuE5V.js";import"./B7LlgBWf.js";import"./Cd0KgIS5.js";import"./6bUBh_yt.js";import"./BLVB0qGI.js";const M={class:"rounded-finsc overflow-hidden h-full w-full text-base bg-base-300 flex flex-col"},Q={class:"flex-none h-[48px]"},T={class:"w-full relative flex justify-center"},Z={class:"w-[180px] mx-auto relative"},$={class:"text-base-bg-300 absolute inset-0 origin-top-left",width:"360",height:"48",viewBox:"0 0 360 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:"scale(0.5)"}},G={class:"flex justify-between text-xs -mt-8 px-4 pb-2"},W={class:"p-2 -mt-2"},q={class:"overflow-x-auto w-full max-h-screen pb-20 rounded-lg bg-white/5"},J={class:"table text-sm text-center table-pin-rows table-pin-cols"},O={colspan:"3"},X={class:"flex relative"},Y={class:"flex-1"},ee={key:0,class:"w-full max-w-md h-[600px]"},fe={__name:"BoxVolumn",async setup(te){let d,p;const f=V(1),h=c(()=>K().symbol),w=c(()=>{var o;return(((o=l.value)==null?void 0:o.historyIntra)||[]).toReversed()}),y=c(()=>{var o;return(o=l.value)==null?void 0:o.historyIntra.reduce((a,u)=>a+u.Price*u.Volume,0)}),g=c(()=>{var o,a;return(a=l.value)==null?void 0:a.historyIntra[((o=l.value)==null?void 0:o.historyIntra.length)-1].TotalVolume}),S={colors:["#34c85e","#d73834","#ff7602"],type:"bar",height:"100%",horizontal:!0,stacked:!0,stroke:"smooth",strokeWidth:1,strokeDashes:0,markers:0,dark:!0,fillSolid:!0,animation:!1},k=E({baseURL:F().API_URI}),{data:l,status:B}=([d,p]=R(()=>D("intraday",()=>k.get(`IntradayQuotes?symbol=${h.value}`),{watch:[h,f]})),d=await d,p(),d);return j(()=>{f.value++},5e3),(o,a)=>{const u=N;return n(),i("div",M,[e("div",Q,[e("div",T,[e("div",Z,[(n(),i("svg",$,a[0]||(a[0]=[e("path",{d:"M357.237 2.82376e-05C398.658 2.82376e-05 -39.9387 -3.52971e-05 2.95743 2.82376e-05C45.8536 9.17724e-05 66.301 48 115.04 48H251.002C304.338 48 315.815 2.82376e-05 357.237 2.82376e-05Z",fill:"currentColor"},null,-1)]))),a[1]||(a[1]=e("div",{class:"bg-base-primary text-white rounded-full relative text-sm text-center px-2 w-24 mx-auto"}," Khớp lệnh ",-1))])])]),e("div",G,[e("div",null,[e("div",null,r(s(v)(s(g)))+" cổ",1)]),e("div",null,[e("div",null,r(s(v)(s(y),!0)),1)])]),e("div",W,[b(u,{mode:"hover",popper:{placement:"left-start"}},{panel:x(()=>[s(B)==="success"?(n(),i("div",ee,[b(s(U),I({categories:s(l).accumulatedVolumes.categories,series:s(l).accumulatedVolumes.series},S),null,16,["categories","series"])])):A("",!0)]),default:x(()=>[e("div",q,[e("table",J,[a[2]||(a[2]=e("thead",null,[e("tr",{class:"text-xs"},[e("th",{class:"py-1 w-20"},"Thời gian"),e("th",{class:"py-1 w-20"},"Giá"),e("th",{class:"py-1"},"KL"),e("th",{class:"py-1 w-10"},"Lệnh")])],-1)),e("tbody",null,[(n(!0),i(L,null,P(s(w),(t,C)=>(n(),i("tr",{key:C},[e("td",null,r(("useDate"in o?o.useDate:s(H))(t.Date,"HH:mm:ss")),1),e("td",O,[e("div",X,[e("div",{class:m(["absolute bottom-0 left-0 h-full w-full rounded",{"bg-gradient-to-r from-green-400/20":t.Side==="B","bg-gradient-to-r from-red-400/20":t.Side==="S"}]),style:z({"max-width":t.percentQuantity+"%"})},null,6),e("div",{class:m(["flex-none w-20",{"text-yellow-600":t.Side===null,"text-green-600":t.Side==="B","text-red-600":t.Side==="S"}])},r(s(_)(t.Price)),3),e("div",Y,r(s(_)(t.Volume)),1),e("div",{class:m(["flex-none w-10 font-semibold",{"text-yellow-600":t.Side===null,"text-green-600":t.Side==="B","text-red-600":t.Side==="S"}])},r(t.Side==="B"?"M":t.Side==="S"?"B":"K"),3)])])]))),128))])])])]),_:1})])])}}};export{fe as default};