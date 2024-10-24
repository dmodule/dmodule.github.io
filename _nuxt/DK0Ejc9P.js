import{_ as te}from"./BfGWD8rQ.js";import{r as C,bt as q,a$ as H,b8 as se,bs as h,bq as b,br as t,bN as oe,by as y,bz as v,bD as i,bx as n,bY as k,bB as le,bC as ne,bU as w,b$ as F,cj as re}from"./C-QD9eoP.js";import{g as p}from"./Br4V6czL.js";import{u as ae,a as ie}from"./DgP4j9Ly.js";import"./6bUBh_yt.js";import"./CB9MmmUK.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";const ce={class:"rounded-finsc overflow-hidden h-full w-full text-base bg-base-300 flex flex-col justify-between"},ue={key:0,class:"flex-none h-[32px]"},de={class:"w-full relative flex justify-center"},ge={class:"w-[180px] mx-auto relative"},pe={class:"text-base-bg-300 absolute inset-0 origin-top-left",width:"360",height:"48",viewBox:"0 0 360 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:"scale(0.5)"}},xe={class:"flex text-center gap-4 px-4 py-2"},fe={class:"flex justify-between w-full h-7 mx-2"},me={class:"overflow-auto flex-1 px-2 mt-2"},he={class:"overflow-x-auto w-full max-h-screen rounded-lg bg-white/5"},be={class:"table text-sm text-center table-pin-rows table-pin-cols"},ye={colspan:"3"},ve={class:"flex relative text-right"},we={class:"flex-1 text-left px-2"},Fe={class:"text-center px-4 py-2"},_e={class:"w-full p-1"},Se={class:"flex justify-between px-2 font-semibold"},Be={class:"text-green-500"},Ce={class:"text-red-600"},ze={__name:"BoxStrength",props:{symbol:{type:String,default:"symbol"},local:{type:Boolean,default:!1}},setup(N){const $=ae(),I=N,Y=(a={},e={})=>{var U,Z,E,G;const{basicPrice:u=0,matchPrice:x=0,matchQtty:g=0}=a,s=Math.max(g*10,...((U=e==null?void 0:e.bid)==null?void 0:U.map(o=>o.qtty*10))||[],...((Z=e==null?void 0:e.ask)==null?void 0:Z.map(o=>o.qtty*10))||[]),l=(o,d)=>{const B=s?d*10/s*100:0,T=u?((o-u)/u*100).toFixed(1):"0.0",ee=o-u;return{changedRatio:T,percentChange:B.toFixed(1),changed:ee.toFixed(2)}},f=((E=e==null?void 0:e.bid)==null?void 0:E.map(o=>({price:o.price,qtty:(o.qtty*10).toLocaleString(),...l(o.price,o.qtty)})))||[],m=((G=e==null?void 0:e.ask)==null?void 0:G.map(o=>({price:o.price,qtty:(o.qtty*10).toLocaleString(),...l(o.price,o.qtty)})))||[],V={price:x,qtty:(g*10).toLocaleString(),...l(x,g)},z=[...f,...m].sort((o,d)=>(o==null?void 0:o.price)-(d==null?void 0:d.price));z.splice(3,0,V);const D=o=>!o||o.length===0?0:o.reduce((d,B)=>d+B.qtty*10,0),_=D(e==null?void 0:e.ask),S=D(e==null?void 0:e.bid),c=_+S,O=c?(_/c*100).toFixed(6):"0.0",W=c?(S/c*100).toFixed(6):"0.0",M=a.buyForeignQtty||0,R=a.sellForeignQtty||0,X=c?(M/c*100).toFixed(1):"0.0",P=c?(R/c*100).toFixed(1):"0.0";return{bids:f,asks:m,matchData:V,list:z,sumBuy:_,sumSell:S,sumBuyPercentage:O,sumSellPercentage:W,buyForeign:M,sellForeign:R,buyForeignPercentage:X,sellForeignPercentage:P}},A=C(!1),j=ie(I.symbol,"FPT"),L=C({}),Q=C({}),J=q(()=>$.dataSI),K=q(()=>$.dataTP),r=q(()=>Y(L.value,Q.value));return H(()=>J.value,a=>{a.symbol===j.value&&(L.value=a)}),H(()=>K.value,a=>{a.symbol===j.value&&(Q.value=a)}),se(()=>{A.value=!0}),(a,e)=>{var g;const u=te,x=re;return h(),b("div",ce,[N.local?oe("",!0):(h(),b("div",ue,[t("div",de,[t("div",ge,[(h(),b("svg",pe,e[0]||(e[0]=[t("path",{d:"M357.237 2.82376e-05C398.658 2.82376e-05 -39.9387 -3.52971e-05 2.95743 2.82376e-05C45.8536 9.17724e-05 66.301 48 115.04 48H251.002C304.338 48 315.815 2.82376e-05 357.237 2.82376e-05Z",fill:"currentColor"},null,-1)]))),e[1]||(e[1]=t("div",{class:"bg-base-primary text-white rounded-full relative text-sm text-center px-2 w-24 mx-auto"}," 3 Bước Giá ",-1))])])])),y(x,{mode:"hover",popper:{placement:"left"}},{panel:v(()=>{var s,l;return[t("div",xe,[t("div",null,[e[2]||(e[2]=t("div",null,"Tổng mua",-1)),t("div",null,i(n(p)((s=n(r))==null?void 0:s.sumBuy)),1)]),t("div",null,[e[3]||(e[3]=t("div",null,"Tổng bán",-1)),t("div",null,i(n(p)((l=n(r))==null?void 0:l.sumSell)),1)])])]}),default:v(()=>{var s,l;return[t("div",fe,[t("div",{class:"bg-gradient-to-l from-green-400/80 border-green-400 text-center py-1",style:k({width:((s=n(r))==null?void 0:s.sumBuyPercentage)+"%"})},[y(u,{src:"/static/svg/bull.svg",class:"h-5 mx-auto",alt:"Bull"})],4),t("div",{class:"bg-gradient-to-r from-red-400/80 border-red-400 text-center py-1",style:k({width:((l=n(r))==null?void 0:l.sumSellPercentage)+"%"})},[y(u,{src:"/static/svg/bear.svg",class:"h-5 mx-auto",alt:"Bear"})],4)])]}),_:1}),t("div",me,[t("div",he,[t("table",be,[t("tbody",null,[(h(!0),b(le,null,ne((g=n(r))==null?void 0:g.list,(s,l)=>(h(),b("tr",{key:l},[t("td",{class:w({"text-shadow-light":l===3,"text-yellow-500":parseFloat(s.changed)===0,"text-green-500":parseFloat(s.changed)>0,"text-red-600":parseFloat(s.changed)<0})},i(n(p)(s.price)),3),t("td",ye,[t("div",ve,[t("div",{class:w(["absolute bottom-0 left-0 h-full w-full rounded",{"bg-gradient-to-r from-yellow-500/30":parseFloat(s.changed)===0,"bg-gradient-to-r from-green-400/30":parseFloat(s.changed)>0,"bg-gradient-to-r from-red-400/30":parseFloat(s.changed)<0}]),style:k({"max-width":s.percentChange+"%"})},null,6),t("div",we,i(n(p)(s.qtty)),1),t("div",{class:w(["flex-none w-10 pr-2",{"text-yellow-500":parseFloat(s.changed)===0,"text-green-500":parseFloat(s.changed)>0,"text-red-600":parseFloat(s.changed)<0}])},i(s.changed),3),t("div",{class:w(["flex-none w-10 pr-2 font-semibold",{"text-shadow-light":l===3,"text-yellow-500":parseFloat(s.changed)===0,"text-green-500":parseFloat(s.changed)>0,"text-red-600":parseFloat(s.changed)<0}])},i(s.changedRatio)+"% ",3)])])]))),128))])])])]),y(x,{mode:"hover",popper:{placement:"left"}},{panel:v(()=>{var s,l,f,m;return[t("div",Fe,[e[4]||(e[4]=F(" Nước ngoài mua : Nước ngoài bán ")),t("div",null,i(`${n(p)((s=n(r))==null?void 0:s.buyForeign)} (${(l=n(r))==null?void 0:l.buyForeignPercentage}%) : ${n(p)((f=n(r))==null?void 0:f.sellForeign)} (${(m=n(r))==null?void 0:m.sellForeignPercentage}%)`),1),e[5]||(e[5]=t("div",null,"- - - - - -",-1)),e[6]||(e[6]=F(" Phần trăm biểu thị tỷ lệ mua bán của khối ngoại ")),e[7]||(e[7]=t("div",null,"(tính cả thỏa thuận) trên tổng khối lượng khớp.",-1))])]}),default:v(()=>{var s,l;return[t("div",_e,[t("div",Se,[t("div",null,[e[8]||(e[8]=F(" Mua ")),t("span",Be,i((s=n(r))==null?void 0:s.buyForeignPercentage)+"%",1)]),t("div",null,[t("span",Ce,i((l=n(r))==null?void 0:l.sellForeignPercentage)+"%",1),e[9]||(e[9]=F(" Bán "))])])])]}),_:1})])}}};export{ze as default};
