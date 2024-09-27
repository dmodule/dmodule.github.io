import{_ as M}from"./6ceMz00Z.js";import{r as v,b2 as c,aJ as L,b1 as b,a$ as x,b6 as l,ba as S,b7 as f,b8 as h,b0 as t,bc as d,bM as Q,bb as Z,bt as q,bz as m,bu as J,bZ as U}from"./D0HIuDqn.js";import{s as A}from"./x-MpkMrH.js";import{g as y}from"./DUiTNb9Q.js";import"./6bUBh_yt.js";const G={class:"h-full w-full flex flex-col justify-center bg-gradient-to-b from-green-400/20 border-green-400/30 border text-base-100 rounded-finsc"},H={class:"flex text-center gap-4 px-4 py-2"},K={class:"flex justify-between w-full h-7"},O={class:"overflow-auto flex-1"},W={class:"w-full table-auto text-sm"},X={class:"divide-y divide-base-neutral"},Y={class:"relative py-1 px-4 text-center"},D={class:"relative py-1 px-4 text-center"},ee={class:"text-center px-4 py-2"},te={class:"border-t border-base-neutral w-full"},ne={class:"flex justify-between px-2 font-semibold"},oe={class:"text-green-600"},se={class:"text-red-600"},ue={__name:"CardBullbear",setup(le){const I=v(!1),_=v([]),w=v([]),u=v({}),P=v([]),B=(a,e)=>{const n=a-e,r=n/e*100;return{changed:n.toFixed(2),changedRatio:r.toFixed(1)}},$=(a,e,n)=>{const r=a.reduce((s,i)=>s+i.qtty,0),o=e.reduce((s,i)=>s+i.qtty,0);return r+o+n.matchQtty},V=(a,e,n)=>{console.log(n);const r=[],o=$(a,e,n);return e.reverse().forEach(s=>{const{changed:i,changedRatio:F}=B(s.price,n.basicPrice);r.push({price:s.price,quantity:s.qtty,changed:i,changedRatio:F,percentQuantity:(s.qtty/o*100).toFixed(2)})}),r.push({price:n.matchPrice,quantity:n.matchQtty,changed:n.changed.toFixed(2),changedRatio:n.changedRatio.toFixed(1),percentQuantity:(n.matchQtty/o*100).toFixed(2)}),a.forEach(s=>{const{changed:i,changedRatio:F}=B(s.price,n.basicPrice);r.push({price:s.price,quantity:s.qtty,changed:i,changedRatio:F,percentQuantity:(s.qtty/o*100).toFixed(2)})}),r},R=a=>a.length===0?0:a.reduce((e,n)=>e+n.qtty,0),g=c(()=>R(_.value)+(u.value.buyForeignQtty||0)),p=c(()=>R(w.value)+(u.value.sellForeignQtty||0)),z=c(()=>(g.value/(g.value+p.value)*100).toFixed(1)),j=c(()=>(p.value/(g.value+p.value)*100).toFixed(1)),T=c(()=>u.value.buyForeignQtty||0),N=c(()=>u.value.sellForeignQtty||0),k=c(()=>(T.value/g.value*100).toFixed(1)),C=c(()=>(N.value/p.value*100).toFixed(1)),E=(a,e,n=1e3,r=10)=>{let o=0;const s=A(()=>{const i=a();i!=null?(e(i),clearInterval(s)):o>=r&&(console.log("No data received, stopping."),clearInterval(s)),o++},n)};return L(()=>{E(()=>window._finSI,()=>{var a,e;_.value=((a=window._finTP)==null?void 0:a.bid)||[],w.value=((e=window._finTP)==null?void 0:e.ask)||[],u.value=window._finSI||{},P.value=V(_.value,w.value,u.value),I.value=!0},900,10)}),(a,e)=>{const n=M,r=U;return b(),x("div",G,[l(I)?(b(),x(S,{key:0},[f(r,{mode:"hover",popper:{placement:"top"}},{panel:h(()=>[t("div",H,[t("div",null,[e[0]||(e[0]=t("div",null,"Tổng mua",-1)),t("div",null,d(l(y)(l(g))),1)]),t("div",null,[e[1]||(e[1]=t("div",null,"Tổng bán",-1)),t("div",null,d(l(y)(l(p))),1)])])]),default:h(()=>[t("div",K,[t("div",{class:"bg-gradient-to-l from-green-400/80 border-green-400 rounded-tl-lg text-center py-1",style:Q({width:l(z)+"%"})},[f(n,{src:"/static/svg/bull.svg",class:"h-5 mx-auto",alt:"Bull"})],4),t("div",{class:"bg-gradient-to-r from-red-400/80 border-red-400 rounded-tr-lg text-center py-1",style:Q({width:l(j)+"%"})},[f(n,{src:"/static/svg/bear.svg",class:"h-5 mx-auto",alt:"Bear"})],4)])]),_:1}),t("div",O,[t("table",W,[t("tbody",X,[(b(!0),x(S,null,Z(l(P),(o,s)=>(b(),x("tr",{key:s,class:"relative"},[t("td",{class:q(["absolute bottom-0 left-0 h-1 w-full",{"bg-gradient-to-r from-green-400/80":parseInt(o.changed)>=0,"bg-gradient-to-r from-red-400/20":parseInt(o.changed)<0}]),style:Q({"max-width":o.percentQuantity+"%"})},null,6),t("td",Y,d(l(y)(o.price)),1),t("td",D,d(o.quantity),1),t("td",{class:q(["relative py-1 px-4 text-center",parseInt(o.changed)>0?"text-green-600":"text-red-600"])},d(o.changed),3),t("td",{class:q(["relative py-1 px-4 text-center",{"text-green-400":parseInt(o.changedRatio)>=0,"text-red-400":parseInt(o.changedRatio)<0}])},d(o.changedRatio)+"% ",3)]))),128))])])]),f(r,{mode:"hover",popper:{placement:"top"}},{panel:h(()=>[t("div",ee,[e[2]||(e[2]=m(" Nước ngoài mua : Nước ngoài bán ")),t("div",null,d(`${l(y)(l(T))} (${l(k)}%) : ${l(y)(l(N))} (${l(C)}%)`),1),e[3]||(e[3]=t("div",null,"- - - - - -",-1)),e[4]||(e[4]=m(" Phần trăm biểu thị tỷ lệ mua bán của khối ngoại ")),e[5]||(e[5]=t("div",null,"(tính cả thỏa thuận) trên tổng khối lượng khớp.",-1))])]),default:h(()=>[t("div",te,[t("div",ne,[t("div",null,[e[6]||(e[6]=m(" Mua ")),t("span",oe,d(l(k))+"%",1)]),t("div",null,[t("span",se,d(l(C))+"%",1),e[7]||(e[7]=m(" Bán "))])])])]),_:1})],64)):J("",!0)])}}};export{ue as default};
