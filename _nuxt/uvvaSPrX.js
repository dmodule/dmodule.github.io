import{b5 as c,bA as C,aG as V,b4 as n,b2 as i,b3 as e,bf as r,b9 as o,ba as f,bb as b,bv as D,bx as I,bd as A,be as L,bw as m,bD as P,b$ as z}from"./PQ9VTHH8.js";import{u as N}from"./DSy3OKgA.js";import{u as j,w as H}from"./Cz38mlSc.js";import K from"./BE5CaFD7.js";import{j as x,h as _}from"./NVEJA4Ar.js";import{u as R}from"./DwEACEKt.js";import{a as U}from"./D96XTank.js";import"./jsxTuE5V.js";import"./B7LlgBWf.js";import"./B0u2p8wj.js";import"./6bUBh_yt.js";import"./BLVB0qGI.js";const E={class:"rounded-finsc overflow-hidden h-full w-full text-base bg-base-300 flex flex-col"},F={class:"flex-none h-[48px]"},G={class:"w-full relative flex justify-center"},M={class:"w-[180px] mx-auto relative"},Q={class:"text-base-bg-300 absolute inset-0 origin-top-left",width:"360",height:"48",viewBox:"0 0 360 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:"scale(0.5)"}},T={class:"flex justify-between text-xs -mt-8 px-4 pb-2"},Z={class:"p-2 -mt-2"},$={class:"overflow-x-auto w-full max-h-screen pb-20 rounded-lg bg-white/5"},W={class:"table text-sm text-center table-pin-rows table-pin-cols"},q={colspan:"3"},J={class:"flex relative"},O={class:"flex-1"},X={key:0,class:"w-full max-w-md h-[600px]"},me={__name:"BoxVolumn",async setup(Y){let d,p;const h=c(()=>j().symbol),v=c(()=>{var s;return(((s=a.value)==null?void 0:s.historyIntra)||[]).toReversed()}),w=c(()=>{var s;return(s=a.value)==null?void 0:s.historyIntra.reduce((l,u)=>l+u.Price*u.Volume,0)}),y=c(()=>{var s,l;return(l=a.value)==null?void 0:l.historyIntra[((s=a.value)==null?void 0:s.historyIntra.length)-1].TotalVolume}),g={type:"bar",height:"100%",horizontal:!0,stacked:!0,stroke:"smooth",strokeWidth:1,strokeDashes:0,markers:0,dark:!0,fillSolid:!0},S=R({baseURL:U().API_URI}),{data:a,status:B}=([d,p]=H(()=>C("intraday",()=>S.get(`IntradayQuotes?symbol=${h.value}`),{watch:[h]})),d=await d,p(),d);return V(()=>a,s=>{console.log(s)}),(s,l)=>{const u=z;return n(),i("div",E,[e("div",F,[e("div",G,[e("div",M,[(n(),i("svg",Q,l[0]||(l[0]=[e("path",{d:"M357.237 2.82376e-05C398.658 2.82376e-05 -39.9387 -3.52971e-05 2.95743 2.82376e-05C45.8536 9.17724e-05 66.301 48 115.04 48H251.002C304.338 48 315.815 2.82376e-05 357.237 2.82376e-05Z",fill:"currentColor"},null,-1)]))),l[1]||(l[1]=e("div",{class:"bg-white/5 rounded-full relative text-sm text-center px-2 w-24 mx-auto"}," Khớp lệnh ",-1))])])]),e("div",T,[e("div",null,[e("div",null,r(o(x)(o(y)))+" cổ",1)]),e("div",null,[e("div",null,r(o(x)(o(w),!0)),1)])]),e("div",Z,[f(u,{mode:"hover",popper:{placement:"left-start"}},{panel:b(()=>[o(B)==="success"?(n(),i("div",X,[f(o(K),D({categories:o(a).accumulatedVolumes.categories,series:o(a).accumulatedVolumes.series},g),null,16,["categories","series"])])):I("",!0)]),default:b(()=>[e("div",$,[e("table",W,[l[2]||(l[2]=e("thead",null,[e("tr",{class:"text-xs"},[e("th",{class:"py-1 w-20"},"Thời gian"),e("th",{class:"py-1 w-20"},"Giá"),e("th",{class:"py-1"},"KL"),e("th",{class:"py-1 w-10"},"Lệnh")])],-1)),e("tbody",null,[(n(!0),i(A,null,L(o(v),(t,k)=>(n(),i("tr",{key:k},[e("td",null,r(("useDate"in s?s.useDate:o(N))(t.Date,"HH:mm:ss")),1),e("td",q,[e("div",J,[e("div",{class:m(["absolute bottom-0 left-0 h-full w-full rounded",{"bg-gradient-to-r from-green-400/20":t.Side==="B","bg-gradient-to-r from-red-400/20":t.Side==="S"}]),style:P({"max-width":t.percentQuantity+"%"})},null,6),e("div",{class:m(["flex-none w-20",{"text-yellow-600":t.Side===null,"text-green-600":t.Side==="B","text-red-600":t.Side==="S"}])},r(o(_)(t.Price)),3),e("div",O,r(o(_)(t.Volume)),1),e("div",{class:m(["flex-none w-10 font-semibold",{"text-yellow-600":t.Side===null,"text-green-600":t.Side==="B","text-red-600":t.Side==="S"}])},r(t.Side==="B"?"M":t.Side==="S"?"B":"K"),3)])])]))),128))])])])]),_:1})])])}}};export{me as default};
