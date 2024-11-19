import{b as G,e as D}from"./9Ez2jyDG.js";import{a as it}from"./C75rfUIj.js";import{bt as rt}from"./B5CNXMPg.js";const Z=it().API_FINSC,f=()=>`${Z}/order-service/${y().current_broker}`,y=()=>{const{auth:e}=G();return e},z=e=>{const{setAuth:t}=G();t(e)},w=()=>{const{tradingHandle:e}=G();return e},H=e=>{const{setTradingHandle:t}=G();t(e)},v=()=>({goldSC:"#e6ac00",greenSC:"#1fbb96",redSC:"#f93d4c",blueSC:"#2679c5",bgSC:"#161a2554",upSC:"#02e5a6",dwSC:"#f93d4c"}),C=e=>{const t={"Content-Type":"application/json",Authorization:"Bearer "+y().token};return e&&(t["trading-token"]=y().trading_token),t},S=e=>({"Cannot place order on aom halted symbol":"Không thể đặt lệnh trong phiên GD thỏa thuận","Ordered successfully":"Gửi lệnh thành công","Trade quantity not enough":"Không đủ cổ phiếu để đặt lệnh","Quantity is invalid":"Khối lượng không hợp lệ","quantity is required":"Khối lượng không được để trống","Cannot place order with that order type on BEGIN OF DAY session":"Không thể đặt loại lệnh này ngoài phiên GD","deal not found":"Bạn không sở hữu cổ phiếu này","Cannot place order on this session":"Hiện tại chưa cho phép đặt lệnh trước, chờ sau 20h","Price must be greater than or equal to floor price":"Giá đặt phải lớn hơn hoặc bằng giá sàn","Price must be less than or equal to ceiling price":"Giá đặt phải nhỏ hơn hoặc bằng giá trần","Cannot place opposite order in this session":"Không thể đặt cùng lúc 2 lệnh giới hạn ngược chiều","Invalid quantity lot":"Khối lượng không hợp lệ"})[e]||"Lỗi không xác định",yt=[{id:"Pending",name:"Chờ gửi",color:1},{id:"PendingNew",name:"Chờ gửi",color:1},{id:"New",name:"Chờ khớp",color:1},{id:"PartiallyFilled",name:"Khớp một phần",color:2},{id:"Filled",name:"Khớp toàn bộ",color:3},{id:"Rejected",name:"Bị từ chối",color:0},{id:"Expired",name:"Hết hiệu lực",color:0},{id:"DoneForDay",name:"Bị giải tỏa",color:0},{id:"Canceled",name:"Đã hủy",color:0}],ct=e=>{const t=new Date;return t.setDate(t.getDate()+e),t.toISOString().split("T")[0]},K=()=>{var e;return((e=localStorage.getItem("symbolLocal"))==null?void 0:e.replace(/"/g,""))||"FPT"},ft=async(e,t)=>{if(!w().status)return{};const n=`${f()}/accounts/${y().account_no}/ppse?symbol=${e}&price=${t}`,i=await B(n,C());if((i==null?void 0:i.status)===!0)return i.data},vt=async()=>{const e=`https://services.entrade.com.vn/dnse-order-service/account-balances/${y().account_no}`;return await B(e,C())},tt=()=>1769,bt=async()=>{if(!w().status)return[];const e=`${f()}/orders?account=${y().account_no}`,t=await B(e,C());return(t==null?void 0:t.status)===!0?t.data:[]},Ct=async()=>{if(!w().status)return[];const e=`${f()}/deals?account=${y().account_no}`,t=await B(e,C());return(t==null?void 0:t.status)===!0?t.data:[]},at=async()=>{const e=`${f()}/orders?account=${y().account_no}`,t=await B(e,C());if(t.status===!0)return t.data},E=async(e,t,n,i,r)=>{const o={symbol:e,side:t,orderType:n,price:i,quantity:r,loanPackageId:tt(),accountNo:y().account_no};return await I(`${f()}/orders`,C(!0),o)},Y=async e=>await et(`${f()}/orders/${e}?account=${y().account_no}`,"DELETE",C(!0),{}),lt=e=>["Pending","PendingNew","New","PartiallyFilled"].includes(e)?"show":"hide",F=async(e,t,n,i,r,o)=>{const s={condition:`${t}${r}`,targetOrder:{quantity:o,side:n,loanPackageId:tt(),orderType:i},symbol:e,props:{stopPrice:r,marketId:"UNDERLYING"},accountNo:y().account_no,category:"STOP",timeInForce:{expireTime:`${ct(30)}T07:30:00.000Z`,kind:"GTD"}};return await I(`${f()}/conditional_order/orders`,C(!0),s)},ut=async e=>{const t=e==="all"?"":`&symbol=${K()}`,n=`${f()}/conditional_order/orders?accountNo=${y().account_no}&status=NEW${t}`,i=await B(n,C());if(i.status===!0)return i.data},U=async e=>await et(`${f()}/conditional_order/orders/${e}`,"PATCH",C(!0),{}),dt=async()=>{if(!w().status)return[];const e=`${f()}/deals?account=${y().account_no}`,t=await B(e,C());return(t==null?void 0:t.status)===!0?t.data:[]},q=async(e,t,n,i=!0)=>{const r=await at();console.log("limitOrderList",r),console.log("limitOrderLines_before",n),Object.keys(n).forEach(o=>{n[o].remove(),delete n[o]}),console.log("limitOrderLines_after",n),i&&H({orderChange:new Date().getTime()}),r.forEach(o=>{if(o.symbol!==K()||lt(o.orderStatus)!=="show")return;const s=o.side==="NB"?"BUY":"SELL",c=o.side==="NB"?v().greenSC:v().redSC,a=o.side==="NB"?"Mua GH":"Bán GH",u=o.orderType!=="LO"?`${a} ${o.orderType}`:`${a} ${(o.price/1e3).toFixed(2)}`;console.log(u);const d=e.activeChart().createOrderLine().setText(u).setLineLength(1).setQuantity(o.quantity).setPrice(o.price/1e3).setLineColor(c).setBodyBorderColor(c).setBodyTextColor(c).setQuantityBorderColor(c).setQuantityBackgroundColor(c).setCancelButtonBorderColor(c).setCancelButtonIconColor(c).setBodyBackgroundColor(v().bgSC).setCancelButtonBackgroundColor(v().bgSC).setCancelTooltip("Đóng lệnh chờ").setModifyTooltip("Nhấp để chỉnh sửa khối lượng").setTooltip("Kéo thả để chỉnh sửa lệnh");d.onMove(async function(){console.log("LimitOrder move event");let h=this.getPrice();h=(Math.round(h*20)/20).toFixed(2),await Y(o.id);const p=await E(o.symbol,s,o.orderType,h*1e3,o.quantity),g={title:"Thông báo",body:S(p.message)};e.showNoticeDialog(g),q(e,t,n)}),d.onModify(async function(h){console.log("LimitOrder modify event");let p=w().quantIn||0;await Y(o.id),await E(o.symbol,s,o.orderType,o.price,p),q(e,t,n)}),d.onCancel(function(h){console.log("LimitOrder cancel event");const p={title:"Xác nhận lệnh",body:"Đóng lệnh [Giới Hạn] này?",callback:async g=>{g&&(await Y(o.id),q(e,t,n))}};e.showConfirmDialog(p)}),n[o.id]=d})},O=async(e,t,n,i=!0)=>{const r=await ut();console.log("stopOrderList",r),console.log("stopOrderLines_before",n),Object.keys(n).forEach(o=>{n[o].remove(),delete n[o]}),console.log("stopOrderLines_after",n),i&&H({orderChange:new Date().getTime()}),r.content.forEach(o=>{const s=o.targetOrder.side==="NB"?v().greenSC:v().redSC,c=`${o.targetOrder.side==="NB"?"Mua ĐK":"Bán ĐK"} ${o.condition.includes("price <=")?"<":">"} ${(o.props.stopPrice/1e3).toFixed(2)}`;console.log(c);const a=e.activeChart().createOrderLine().setText(c).setLineLength(1).setQuantity(o.targetOrder.quantity).setPrice(o.props.stopPrice/1e3).setLineColor(s).setBodyBorderColor(s).setBodyTextColor(s).setQuantityBorderColor(s).setQuantityBackgroundColor(s).setCancelButtonBorderColor(s).setCancelButtonIconColor(s).setBodyBackgroundColor(v().bgSC).setCancelButtonBackgroundColor(v().bgSC).setCancelTooltip("Đóng lệnh ĐK").setModifyTooltip("Click để sửa KL theo OrderCase").setTooltip("Kéo thả để chỉnh sửa lệnh");a.onMove(async function(){console.log("StopOrder move event");let u=this.getPrice();u=(Math.round(u*20)/20).toFixed(2);const d=u>t.dataSI.matchPrice?"price >= ":"price <= ";await U(o.id);const h=await F(o.symbol,d,o.targetOrder.side,o.targetOrder.orderType,u*1e3,o.targetOrder.quantity),p={title:"Thông báo",body:S(h.message)};e.showNoticeDialog(p),O(e,t,n)}),a.onModify(async function(u){console.log("StopOrder modify event");const d=w().quantIn||0;await U(o.id),await F(o.symbol,o.condition.includes("price <=")?"price <= ":"price >= ",o.targetOrder.side,o.targetOrder.orderType,o.props.stopPrice,d),O(e,t,n)}),a.onCancel(function(u){console.log("StopOrder cancel event");const d={title:"Xác nhận lệnh",body:"Đóng lệnh [Điều Kiện] này?",callback:async h=>{h&&(await U(o.id),O(e,t,n))}};e.showConfirmDialog(d)}),n[o.id]=a})},gt=async(e,t,n,i=!0)=>{const o=(await dt()).filter(s=>s.symbol===K());console.log("dealList",o),console.log("dealLines_before",n),Object.keys(n).forEach(s=>{n[s].remove(),delete n[s]}),console.log("dealLines_after",n),i&&H({orderChange:new Date().getTime()}),o.forEach(s=>{let c={};c.profitCash=s.unrealizedProfit/1e6,c.profitPercent=100*s.unrealizedProfit/(s.costPrice*s.openQuantity),console.log(c);const a=v().blueSC,u=v().bgSC,d=s.unrealizedProfit>=0?v().upSC:v().dwSC,h=e.activeChart().createPositionLine().setText(`${D(c.profitCash,2)} triệu (${c.profitPercent.toFixed(2)}%)`).setQuantity(s.openQuantity).setPrice(s.costPrice/1e3).setLineColor(a).setBodyTextColor(d).setBodyBorderColor(a).setQuantityBorderColor(a).setQuantityBackgroundColor(a).setCloseButtonBorderColor(a).setCloseButtonIconColor(a).setBodyBackgroundColor(u).setCloseButtonBackgroundColor(u).setCloseTooltip("Bán tất cả").setTooltip("Lãi lỗ và tổng khối lượng nắm giữ");h.onClose(function(){const p={title:"Xác nhận",body:`Bán MP ${D(s.tradeQuantity,0,1)} cổ phiếu ${s.symbol} đã về?`,callback:async g=>{if(g){const m=await E(s.symbol,"SELL","MP",0,D(s.tradeQuantity,0,0));e.showNoticeDialog({title:"Thông báo",body:`${S(m.message)}!
Chi tiết: Sell MP ${D(s.tradeQuantity,0,1)} ${s.symbol}`}),gt(e,t,n)}}};e.showConfirmDialog(p)}),n[s.id]=h})};var X={},J={},kt={};const Bt=(e,t,n)=>{console.log("data in menuTrade",JSON.parse(JSON.stringify(t))),console.log("crrP, kiểm tra lỗi tại đây, 11h50 tối ko có data",t.dataSI.matchPrice);const i=t.dataSI.matchPrice;let r=n>i?" khi Giá > ":" khi Giá < ";const o=n>i?"price >= ":"price <= ";n=parseFloat(n.toFixed(1));let s=w().quantIn||0;const c=K();let a=s.toLocaleString("en-US"),u="Mua điều kiện +"+a+" "+c+r+n,d="Bán điều kiện -"+a+" "+c+r+n,h="Mua giới hạn +"+a+" "+c+" với Giá "+n,p="Bán giới hạn -"+a+" "+c+" với Giá "+n;return[{position:"top",text:h,click:async function(){const g=await E(c,"BUY","LO",n*1e3,s);e.showNoticeDialog({title:"Thông báo",body:`${S(g.message)}!
Chi tiết: ${h}`}),q(e,t,J)}},{position:"top",text:p,click:async function(){const g=await E(c,"SELL","LO",n*1e3,s);e.showNoticeDialog({title:"Thông báo",body:`${S(g.message)}!
Chi tiết: ${p}`}),q(e,t,J)}},{text:"-",position:"top"},{position:"top",text:u,click:async function(){const g=await F(c,o,"NB","MP",n*1e3,s);e.showNoticeDialog({title:"Thông báo",body:`${S(g.message)}!
Chi tiết: ${u}`}),O(e,t,X)}},{position:"top",text:d,click:async function(){const g=await F(c,o,"NS","MP",n*1e3,s);e.showNoticeDialog({title:"Thông báo",body:`${S(g.message)}!
Chi tiết: ${d}`}),O(e,t,X)}},{text:"-",position:"top"}]},St=e=>{var t=document.createElement("div");t.classList.add("dialog-popup"),t.id="TV-popup";var n='<div class="logtrade"><h3>Kết nối tài khoản chứng khoán</h3><div class="broker-list"><label><img src="/static/tv/logo-broker/logo-vnds.svg"></label><input type="radio" name="broker" value="vnds" title="Công ty cổ phần chứng khoán VNDIRECT"><label><img src="/static/tv/logo-broker/logo-ssi.svg"></label><input type="radio" name="broker" value="ssi" title="Công ty cổ phần chứng khoán SSI"><label><img src="/static/tv/logo-broker/logo-dnse.svg"></label><input type="radio" name="broker" value="dnse" title="Công ty cổ phần chứng khoán DNSE"><label><img src="/static/tv/logo-broker/logo-vps.svg"></label><input type="radio" name="broker" value="vps" title="Công ty cổ phần chứng khoán VPS"><label><img src="/static/tv/logo-broker/logo-tcbs.svg"></label><input type="radio" name="broker" value="tcbs" title="Công ty cổ phần chứng khoán Kỹ thương"></div><div class="broker"><img class="minhhoa" src="/static/tv/svg-minhhoa/choose.svg"><div class="tbao">Chọn một trong các đối tác của chúng tôi</div></div></div>';t.innerHTML=n,document.body.appendChild(t);const i=document.querySelectorAll('input[name="broker"]'),r=document.querySelector(".broker");i.forEach(o=>{o.addEventListener("click",function(s){let c='<div class="inputBox"><input id="usertrade" type="text" required="required"><img src="/static/feather/user.svg"><span>Tên đăng nhập</span></div><div class="inputBox"><input id="passtrade" type="password" required="required"><img src="/static/feather/lock.svg"><span>Mật khẩu</span></div><div class="inputBox otp hide_sc"><input id="otptrade" type="otp" required="required"><img src="/static/feather/key.svg"><span>OTP</span></div>';switch(o.value){case"vnds":let a=c+'<div id="noti-lgt"></div><div class="inputBox lg2"><button id="enter-vndirect" type="submit">Gửi OTP SMS</button></div>';r.innerHTML=a,W("#enter-vndirect","VNDS",t,e);break;case"dnse":let u=c+'<div class="otp-options"><label><input type="radio" name="otp-method" value="email"> Email OTP</label><label><input type="radio" name="otp-method" value="smart" checked> Smart OTP</label></div><div id="noti-lgt"></div><div class="inputBox lg2"><button id="enter-dnse" type="submit">Đăng nhập</button></div>';r.innerHTML=u,W("#enter-dnse","DNSE",t,e);break;case"ssi":case"vps":case"tcbs":let d='<div class="pyramid"> <span class="soon">SẮP RA MẮT</span> <div class="tv-shadow"></div> <div> <span style="--i:0;"></span> <span style="--i:1;"></span> <span style="--i:2;"></span> <span style="--i:3;"></span> </div></div>';r.innerHTML=d;break}})}),t.addEventListener("click",function(o){o.target===t&&t.remove()}),t.style.display="block"},W=(e,t,n,i)=>{const r=rt();document.querySelector(e).addEventListener("click",async function(){const s=document.getElementById("usertrade").value,c=document.getElementById("passtrade").value,u=new Date().getTime(),d={username:s,password:c},h={"Content-Type":"application/json"};await I(`${Z}/order-service/${t}/login`,h,d,async function(p){const g=document.getElementById("noti-lgt");if(p.message==="Authenticated successfully"){let m=p.data;m.current_broker=t,m.login_time=u,z(m);let $=t==="DNSE"?'<div class="sc-success">Đăng nhập thành công, tiếp tục xác thực OTP</div>':'<div class="sc-success">Gửi OTP thành công, kiểm tra tin nhắn</div>';g.innerHTML=$;const x=document.querySelector(".inputBox.lg2");x.innerHTML='<button id="enter-otp" type="submit">Kết nối</button>';const k=document.querySelector(".inputBox.otp");k.style.display="block";const M={"Content-Type":"application/json",Authorization:"Bearer "+m.token};await B(`${f()}/accounts`,M,function(b){b.message==="Fetched user information successfully"&&(m.account_no=b.data.default.id,m.name=b.data.default.name,console.log(m),z(m))});const N=document.querySelector('input[name="otp-method"]:checked').value;N==="email"&&await B(`${f()}/otp`,M,function(b){if(b.message==="Sent email otp successfully"){const _='<div class="sc-success">Gửi OTP thành công, kiểm tra email</div>';g.innerHTML=_}else{const _='<div class="sc-fail">Gửi OTP thất bại</div>';g.innerHTML=_}}),document.getElementById("enter-otp").addEventListener("click",async function(){const b=document.getElementById("otptrade").value,A={"Content-Type":"application/json",Authorization:"Bearer "+y().token,...N==="email"?{otp:b}:{"smart-otp":b}};await I(`${f()}/trading-token`,A,null,function(T){if(T.message==="Fetched trading token successfully"){m.trading_token=T.data.trading_token,console.log(m),z(m);const L='<div class="sc-success">Kết nối thành công</div>';g.innerHTML=L,n.remove(),H({status:!0,updateTime:new Date().getTime()}),i.checked=!0,console.log({title:"Thông báo",body:"Kết nối thành công"}),r.add({title:"Đăng nhập thành công",description:"",icon:"i-ri-check-double-line"})}else{const L='<div class="sc-fail">Sai OTP, hãy nhập lại</div>';g.innerHTML=L}})})}else{const m='<div class="sc-fail">Sai tên đăng nhập hoặc mật khẩu</div>';g.innerHTML=m}})})};async function I(e,t,n,i=null){try{const r=await fetch(e,{method:"POST",headers:t,body:JSON.stringify(n)});if(!r.ok)throw new Error("Network response was not ok");const o=await r.json();if(i)i(o);else return o}catch(r){if(console.error(r),i)i(null);else return null}}async function B(e,t,n=null){try{const i=await fetch(e,{method:"GET",headers:t});if(!i.ok)throw new Error("Network response was not ok");const r=await i.json();if(n)n(r);else return r}catch(i){if(console.error(i),n)n(null);else return null}}async function et(e,t,n,i,r=null){try{const o=await fetch(e,{method:t,headers:n,body:JSON.stringify(i)});if(!o.ok)throw new Error("Network response was not ok");const s=await o.json();if(r)r(s);else return s}catch(o){if(console.error(o),r)r(null);else return null}}const wt=e=>{e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return n===null?"":decodeURIComponent(n[1].replace(/\+/g," "))},_t=(e={},t={})=>{var T,L,j,V;const{basicPrice:n=0,matchPrice:i=0,matchQtty:r=0,tradingSession:o="",ceilingPrice:s,floorPrice:c}=e,a=Math.max(r,...((T=t==null?void 0:t.bid)==null?void 0:T.map(l=>l.qtty))||[],...((L=t==null?void 0:t.ask)==null?void 0:L.map(l=>l.qtty))||[]),u=(l,R)=>{const P=a?R/a*100:0;if(typeof l=="string"||typeof l>"u")return{changedRatio:"",percentChange:P.toFixed(1),changed:""};const nt=n?((l-n)/n*100).toFixed(1):"0.0",ot=l-n,st=l===n?1:l===s?5:l===c?4:l<n?3:2;return{changedRatio:nt,percentChange:P.toFixed(1),changed:ot.toFixed(2),color:st}},d=((j=t==null?void 0:t.bid)==null?void 0:j.map(l=>({price:l.price||o,qtty:l.qtty,...u(l.price,l.qtty)})))||[],h=((V=t==null?void 0:t.ask)==null?void 0:V.map(l=>({price:l.price||o,qtty:l.qtty,...u(l.price,l.qtty)})))||[],p={price:i,qtty:r,...u(i,r)},g=[...h,p,...d],m=l=>!l||l.length===0?0:l.reduce((R,P)=>R+P.qtty,0),$=m(t==null?void 0:t.ask),x=m(t==null?void 0:t.bid),k=$+x,M=k?($/k*100).toFixed(6):"0.0",N=k?(x/k*100).toFixed(6):"0.0",Q=e.buyForeignQtty||0,b=e.sellForeignQtty||0,_=k?(Q/k*100).toFixed(1):"0.0",A=k?(b/k*100).toFixed(1):"0.0";return{bids:d,asks:h,matchData:p,list:g,sumBuy:$,sumSell:x,sumBuyPercentage:M,sumSellPercentage:N,buyForeign:Q,sellForeign:b,buyForeignPercentage:_,sellForeignPercentage:A}},Lt=e=>{let t=!1,n,i;e.addEventListener("mousedown",function(r){t=!0,n=r.clientX-e.getBoundingClientRect().left,i=r.clientY-e.getBoundingClientRect().top;const o=document.createElement("div");o.classList.add("coverResize"),document.body.appendChild(o);function s(a){t&&(e.style.left=`${a.clientX-n}px`,e.style.top=`${a.clientY-i}px`)}function c(){t=!1,document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",c),o.remove()}document.addEventListener("mousemove",s),document.addEventListener("mouseup",c)})};function $t(e,t=!1){if(t){const n=new Date;console.log(`${n.toLocaleTimeString()}.${n.getMilliseconds()}> ${e}`)}}function xt(e){return e===void 0?"":typeof e=="string"?e:e.message}export{X as A,J as B,kt as C,F as a,E as b,S as c,ft as d,ut as e,Ct as f,w as g,_t as h,bt as i,yt as j,U as k,St as l,Y as m,Lt as n,K as o,Z as p,wt as q,xt as r,H as s,vt as t,$t as u,y as v,Bt as w,O as x,q as y,gt as z};
