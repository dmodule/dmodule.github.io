import{b as D}from"./Ul5rOUWU.js";import{a as et}from"./CvURW2WX.js";import{bt as nt}from"./CJ_CGJpm.js";const z=et().API_FINSC,g=()=>`${z}/order-service/${h().current_broker}`,h=()=>{const{auth:t}=D();return t},Q=t=>{const{setAuth:e}=D();e(t)},S=()=>{const{tradingHandle:t}=D();return t},J=t=>{const{setTradingHandle:e}=D();e(t)},m=t=>{const e={"Content-Type":"application/json",Authorization:"Bearer "+h().token};return t&&(e["trading-token"]=h().trading_token),e},N=t=>({"Cannot place order on aom halted symbol":"Không thể đặt lệnh trong phiên GD thỏa thuận","Ordered successfully":"Gửi lệnh thành công","Trade quantity not enough":"Không đủ cổ phiếu để đặt lệnh","Quantity is invalid":"Khối lượng không hợp lệ","quantity is required":"Khối lượng không được để trống","Cannot place order with that order type on BEGIN OF DAY session":"Không thể đặt loại lệnh này ngoài phiên GD","deal not found":"Bạn không sở hữu cổ phiếu này","Cannot place order on this session":"Hiện tại chưa cho phép đặt lệnh trước, chờ sau 20h","Price must be greater than or equal to floor price":"Giá đặt phải lớn hơn hoặc bằng giá sàn","Price must be less than or equal to ceiling price":"Giá đặt phải nhỏ hơn hoặc bằng giá trần"})[t]||"Lỗi không xác định",dt=[{id:"Pending",name:"Chờ gửi",color:1},{id:"PendingNew",name:"Chờ gửi",color:1},{id:"New",name:"Chờ khớp",color:1},{id:"PartiallyFilled",name:"Khớp một phần",color:1},{id:"Filled",name:"Khớp toàn bộ",color:2},{id:"Rejected",name:"Bị từ chối",color:0},{id:"Expired",name:"Hết hiệu lực",color:0},{id:"DoneForDay",name:"Bị giải tỏa",color:0}],ot=t=>{const e=new Date;return e.setDate(e.getDate()+t),e.toISOString().split("T")[0]},U=()=>{var t;return((t=localStorage.getItem("symbolLocal"))==null?void 0:t.replace(/"/g,""))||"FPT"},ut=async(t,e)=>{if(!S().status)return{};const o=`${g()}/accounts/${h().account_no}/ppse?symbol=${t}&price=${e}`,s=await C(o,m());if((s==null?void 0:s.status)===!0)return s.data},W=()=>1769,gt=async()=>{if(!S().status)return[];const t=`${g()}/orders?account=${h().account_no}`,e=await C(t,m());return(e==null?void 0:e.status)===!0?e.data:[]},pt=async()=>{if(!S().status)return[];const t=`${g()}/conditional_order/orders`,e=await C(t,m());return(e==null?void 0:e.status)===!0?e.data:[]},ht=async t=>{const e=`${g()}/orders/${t}?account=${h().account_no}`;return await P(e,"DELETE",m(!0),{})},mt=async t=>{const e=`${g()}/conditional_order/orders/${t}`;return await P(e,"PATCH",m(!0),{})},st=async()=>{const t=`${g()}/orders?account=${h().account_no}`,e=await C(t,m());if(e.status===!0)return e.data},M=async(t,e,o,s,n)=>{const i={symbol:t,side:e,orderType:o,price:s,quantity:n,loanPackageId:W(),accountNo:h().account_no};return await I(`${g()}/orders`,m(!0),i)},R=async t=>await P(`${g()}/orders/${t}?account=${h().account_no}`,"DELETE",m(!0),{}),it=t=>["Pending","PendingNew","New","PartiallyFilled"].includes(t)?"show":"hide",T=async(t,e,o)=>{const s=await st();console.log("limitOrderList",s),console.log("limitOrderLines_before",o),Object.keys(o).forEach(n=>{o[n].remove(),delete o[n]}),console.log("limitOrderLines_after",o),J({orderChange:new Date().getTime()}),s.forEach(n=>{if(n.symbol!==U()||it(n.orderStatus)!=="show")return;const i=n.side==="NB"?"BUY":"SELL",r=n.side==="NB"?k().greenSC:k().redSC,c=t.activeChart().createOrderLine().setText(n.orderType+" "+n.price/1e3).setLineLength(1).setQuantity(n.quantity).setPrice(n.price/1e3).setLineColor(r).setBodyBorderColor(r).setBodyTextColor(r).setQuantityBorderColor(r).setQuantityBackgroundColor(r).setCancelButtonBorderColor(r).setCancelButtonIconColor(r).setBodyBackgroundColor(k().bgcls).setCancelButtonBackgroundColor(k().bgcls).setCancelTooltip("Đóng lệnh chờ").setModifyTooltip("Nhấp để chỉnh sửa khối lượng").setTooltip("Kéo thả để chỉnh sửa lệnh");c.onMove(async function(){console.log("LimitOrder move event");const l=this.getPrice().toFixed(1)*1e3;await R(n.id),await M(n.symbol,i,n.orderType,l,n.quantity),T(t,e,o)}),c.onModify(async function(l){console.log("LimitOrder modify event");let u=S().quantIn||0;await R(n.id),await M(n.symbol,i,n.orderType,n.price,u),T(t,e,o)}),c.onCancel(function(l){console.log("LimitOrder cancel event");const u={title:"Xác nhận lệnh",body:"Đóng lệnh [Giới Hạn] này?",callback:async f=>{f&&(await R(n.id),T(t,e,o))}};t.showConfirmDialog(u)}),o[n.id]=c})},F=async(t,e,o,s,n,i)=>{const r={condition:`${e}${n}`,targetOrder:{quantity:i,side:o,loanPackageId:W(),orderType:s},symbol:t,props:{stopPrice:n,marketId:"UNDERLYING"},accountNo:h().account_no,category:"STOP",timeInForce:{expireTime:`${ot(30)}T07:30:00.000Z`,kind:"GTD"}};return await I(`${g()}/conditional_order/orders`,m(!0),r)},rt=async()=>{const t=`${g()}/conditional_order/orders?accountNo=${h().account_no}&status=NEW&symbol=${U()}`,e=await C(t,m());if(e.status===!0)return e.data},j=async t=>await P(`${g()}/conditional_order/orders/${t}`,"PATCH",m(!0),{}),k=()=>({goldSC:"#e6ac00",greenSC:"#1fbb96",redSC:"#f93d4c",blueSC:"#2679c5",bgcls:"#161a2554",dmclsUp:"#02e5a6"}),q=async(t,e,o)=>{const s=await rt();console.log("stopOrderList",s),console.log("stopOrderLines_before",o),Object.keys(o).forEach(n=>{o[n].remove(),delete o[n]}),console.log("stopOrderLines_after",o),J({orderChange:new Date().getTime()}),s.content.forEach(n=>{const i=n.targetOrder.side==="NB"?k().greenSC:k().redSC,r=t.activeChart().createOrderLine().setText(n.targetOrder.orderType+" "+n.props.stopPrice/1e3).setLineLength(1).setQuantity(n.targetOrder.quantity).setPrice(n.props.stopPrice/1e3).setLineColor(i).setBodyBorderColor(i).setBodyTextColor(i).setQuantityBorderColor(i).setQuantityBackgroundColor(i).setCancelButtonBorderColor(i).setCancelButtonIconColor(i).setBodyBackgroundColor(k().bgcls).setCancelButtonBackgroundColor(k().bgcls).setCancelTooltip("Đóng lệnh chờ").setModifyTooltip("Nhấp để chỉnh sửa khối lượng").setTooltip("Kéo thả để chỉnh sửa lệnh");r.onMove(async function(){console.log("StopOrder move event");const c=this.getPrice().toFixed(1)*1e3,l=c>e.dataSI.matchPrice?"price >= ":"price <= ";await j(n.id),await F(n.symbol,l,n.targetOrder.side,n.targetOrder.orderType,c,n.targetOrder.quantity),q(t,e,o)}),r.onModify(async function(c){console.log("StopOrder modify event");let l=S().quantIn||0;await j(n.id),await F(n.symbol,n.condition,n.targetOrder.side,n.targetOrder.orderType,n.targetOrder.price,l),q(t,e,o)}),r.onCancel(function(c){console.log("StopOrder cancel event");const l={title:"Xác nhận lệnh",body:"Đóng lệnh [Điều Kiện] này?",callback:async u=>{u&&(await j(n.id),q(t,e,o))}};t.showConfirmDialog(l)}),o[n.id]=r})};var Y={},V={};const yt=(t,e,o)=>{console.log("data in menuTrade",JSON.parse(JSON.stringify(e))),console.log("crrP",e.dataSI.matchPrice);const s=e.dataSI.matchPrice;let n=o>s?" khi Giá >":" khi Giá <";const i=o>s?"price >= ":"price <= ";o=parseFloat(o.toFixed(1));let r=S().quantIn||0;const c=U();let l=r.toLocaleString("en-US"),u="BuyStop +"+l+" "+c+n+o,f="SellStop -"+l+" "+c+n+o,b="BuyLimit +"+l+" "+c+" Giá "+o,p="SellLimit -"+l+" "+c+" Giá "+o;return[{position:"top",text:b,click:async function(){const a=await M(c,"BUY","LO",o*1e3,r);t.showNoticeDialog({title:"Thông báo",body:`${N(a.message)}!
Chi tiết: ${b}`}),T(t,e,V)}},{position:"top",text:p,click:async function(){const a=await M(c,"SELL","LO",o*1e3,r);t.showNoticeDialog({title:"Thông báo",body:`${N(a.message)}!
Chi tiết: ${p}`}),T(t,e,V)}},{text:"-",position:"top"},{position:"top",text:u,click:async function(){const a=await F(c,i,"NB","MP",o*1e3,r);t.showNoticeDialog({title:"Thông báo",body:`${N(a.message)}!
Chi tiết: ${u}`}),q(t,e,Y)}},{position:"top",text:f,click:async function(){const a=await F(c,i,"NS","MP",o*1e3,r);t.showNoticeDialog({title:"Thông báo",body:`${N(a.message)}!
Chi tiết: ${f}`}),q(t,e,Y)}},{text:"-",position:"top"}]},vt=()=>{var t=document.createElement("div");t.classList.add("dialog-popup"),t.id="TV-popup";var e='<div class="logtrade"><h3>Kết nối tài khoản chứng khoán</h3><div class="broker-list"><label><img src="/static/tv/logo-broker/logo-vnds.svg"></label><input type="radio" name="broker" value="vnds" title="Công ty cổ phần chứng khoán VNDIRECT"><label><img src="/static/tv/logo-broker/logo-ssi.svg"></label><input type="radio" name="broker" value="ssi" title="Công ty cổ phần chứng khoán SSI"><label><img src="/static/tv/logo-broker/logo-dnse.svg"></label><input type="radio" name="broker" value="dnse" title="Công ty cổ phần chứng khoán DNSE"><label><img src="/static/tv/logo-broker/logo-vps.svg"></label><input type="radio" name="broker" value="vps" title="Công ty cổ phần chứng khoán VPS"><label><img src="/static/tv/logo-broker/logo-tcbs.svg"></label><input type="radio" name="broker" value="tcbs" title="Công ty cổ phần chứng khoán Kỹ thương"></div><div class="broker"><img class="minhhoa" src="/static/tv/svg-minhhoa/choose.svg"><div class="tbao">Chọn một trong các đối tác của chúng tôi</div></div></div>';t.innerHTML=e,document.body.appendChild(t);const o=document.querySelectorAll('input[name="broker"]'),s=document.querySelector(".broker");o.forEach(n=>{n.addEventListener("click",function(i){let r='<div class="inputBox"><input id="usertrade" type="text" required="required"><img src="/static/feather/user.svg"><span>Tên đăng nhập</span></div><div class="inputBox"><input id="passtrade" type="password" required="required"><img src="/static/feather/lock.svg"><span>Mật khẩu</span></div><div class="inputBox otp hide_sc"><input id="otptrade" type="otp" required="required"><img src="/static/feather/key.svg"><span>OTP</span></div>';switch(n.value){case"vnds":let c=r+'<div id="noti-lgt"></div><div class="inputBox lg2"><button id="enter-vndirect" type="submit">Gửi OTP SMS</button></div>';s.innerHTML=c,X("#enter-vndirect","VNDS",t);break;case"dnse":let l=r+'<div class="otp-options"><label><input type="radio" name="otp-method" value="email"> Email OTP</label><label><input type="radio" name="otp-method" value="smart" checked> Smart OTP</label></div><div id="noti-lgt"></div><div class="inputBox lg2"><button id="enter-dnse" type="submit">Đăng nhập</button></div>';s.innerHTML=l,X("#enter-dnse","DNSE",t);break;case"ssi":case"vps":case"tcbs":let u='<div class="pyramid"> <span class="soon">SẮP RA MẮT</span> <div class="tv-shadow"></div> <div> <span style="--i:0;"></span> <span style="--i:1;"></span> <span style="--i:2;"></span> <span style="--i:3;"></span> </div></div>';s.innerHTML=u;break}})}),t.addEventListener("click",function(n){n.target===t&&t.remove()}),t.style.display="block"},X=(t,e,o)=>{const s=nt();document.querySelector(t).addEventListener("click",async function(){const i=document.getElementById("usertrade").value,r=document.getElementById("passtrade").value,l=new Date().getTime(),u={username:i,password:r},f={"Content-Type":"application/json"};await I(`${z}/order-service/${e}/login`,f,u,async function(b){const p=document.getElementById("noti-lgt");if(b.message==="Authenticated successfully"){let a=b.data;a.current_broker=e,a.login_time=l,Q(a);let B=e==="DNSE"?'<div class="sc-success">Đăng nhập thành công, tiếp tục xác thực OTP</div>':'<div class="sc-success">Gửi OTP thành công, kiểm tra tin nhắn</div>';p.innerHTML=B;const y=document.querySelector(".inputBox.lg2");y.innerHTML='<button id="enter-otp" type="submit">Kết nối</button>';const H=document.querySelector(".inputBox.otp");H.style.display="block";const $={"Content-Type":"application/json",Authorization:"Bearer "+a.token};await C(`${g()}/accounts`,$,function(v){v.message==="Fetched user information successfully"&&(a.account_no=v.data.default.id,a.name=v.data.default.name,console.log(a),Q(a))});const L=document.querySelector('input[name="otp-method"]:checked').value;L==="email"&&await C(`${g()}/otp`,$,function(v){if(v.message==="Sent email otp successfully"){const _='<div class="sc-success">Gửi OTP thành công, kiểm tra email</div>';p.innerHTML=_}else{const _='<div class="sc-fail">Gửi OTP thất bại</div>';p.innerHTML=_}}),document.getElementById("enter-otp").addEventListener("click",async function(){const v=document.getElementById("otptrade").value,E={"Content-Type":"application/json",Authorization:"Bearer "+h().token,...L==="email"?{otp:v}:{"smart-otp":v}};await I(`${g()}/trading-token`,E,null,function(x){if(x.message==="Fetched trading token successfully"){a.trading_token=x.data.trading_token,console.log(a),Q(a);const w='<div class="sc-success">Kết nối thành công</div>';p.innerHTML=w,o.remove(),console.log({title:"Thông báo",body:"Kết nối thành công"}),s.add({title:"Đăng nhập thành công",description:"",icon:"i-ri-check-double-line"})}else{const w='<div class="sc-fail">Sai OTP, hãy nhập lại</div>';p.innerHTML=w}})})}else{const a='<div class="sc-fail">Sai tên đăng nhập hoặc mật khẩu</div>';p.innerHTML=a}})})};async function I(t,e,o,s=null){try{const n=await fetch(t,{method:"POST",headers:e,body:JSON.stringify(o)});if(!n.ok)throw new Error("Network response was not ok");const i=await n.json();if(s)s(i);else return i}catch(n){if(console.error(n),s)s(null);else return null}}async function C(t,e,o=null){try{const s=await fetch(t,{method:"GET",headers:e});if(!s.ok)throw new Error("Network response was not ok");const n=await s.json();if(o)o(n);else return n}catch(s){if(console.error(s),o)o(null);else return null}}async function P(t,e,o,s,n=null){try{const i=await fetch(t,{method:e,headers:o,body:JSON.stringify(s)});if(!i.ok)throw new Error("Network response was not ok");const r=await i.json();if(n)n(r);else return r}catch(i){if(console.error(i),n)n(null);else return null}}const ft=t=>{t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const o=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(window.location.search);return o===null?"":decodeURIComponent(o[1].replace(/\+/g," "))},bt=(t={},e={})=>{var E,x,w,K;const{basicPrice:o=0,matchPrice:s=0,matchQtty:n=0,tradingSession:i=""}=t,r=Math.max(n,...((E=e==null?void 0:e.bid)==null?void 0:E.map(d=>d.qtty))||[],...((x=e==null?void 0:e.ask)==null?void 0:x.map(d=>d.qtty))||[]),c=(d,A)=>{const O=r?A/r*100:0;if(typeof d=="string"||typeof d>"u")return{changedRatio:"",percentChange:O.toFixed(1),changed:""};const Z=o?((d-o)/o*100).toFixed(1):"0.0",tt=d-o;return{changedRatio:Z,percentChange:O.toFixed(1),changed:tt.toFixed(2)}},l=((w=e==null?void 0:e.bid)==null?void 0:w.map(d=>({price:d.price||i,qtty:d.qtty,...c(d.price,d.qtty)})))||[],u=((K=e==null?void 0:e.ask)==null?void 0:K.map(d=>({price:d.price||i,qtty:d.qtty,...c(d.price,d.qtty)})))||[],f={price:s,qtty:n,...c(s,n)},b=[...u,f,...l];console.log("list",b);const p=d=>!d||d.length===0?0:d.reduce((A,O)=>A+O.qtty,0),a=p(e==null?void 0:e.ask),B=p(e==null?void 0:e.bid),y=a+B,H=y?(a/y*100).toFixed(6):"0.0",$=y?(B/y*100).toFixed(6):"0.0",L=t.buyForeignQtty||0,G=t.sellForeignQtty||0,v=y?(L/y*100).toFixed(1):"0.0",_=y?(G/y*100).toFixed(1):"0.0";return{bids:l,asks:u,matchData:f,list:b,sumBuy:a,sumSell:B,sumBuyPercentage:H,sumSellPercentage:$,buyForeign:L,sellForeign:G,buyForeignPercentage:v,sellForeignPercentage:_}},kt=t=>{let e=!1,o,s;t.addEventListener("mousedown",function(n){e=!0,o=n.clientX-t.getBoundingClientRect().left,s=n.clientY-t.getBoundingClientRect().top;const i=document.createElement("div");i.classList.add("coverResize"),document.body.appendChild(i);function r(l){e&&(t.style.left=`${l.clientX-o}px`,t.style.top=`${l.clientY-s}px`)}function c(){e=!1,document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",c),i.remove()}document.addEventListener("mousemove",r),document.addEventListener("mouseup",c)})};function Ct(t,e=!1){if(e){const o=new Date;console.log(`${o.toLocaleTimeString()}.${o.getMilliseconds()}> ${t}`)}}function _t(t){return t===void 0?"":typeof t=="string"?t:t.message}export{F as a,M as b,pt as c,gt as d,dt as e,mt as f,ht as g,bt as h,S as i,kt as j,U as k,vt as l,N as m,z as n,ft as o,_t as p,Ct as q,h as r,J as s,ut as t,yt as u,q as v,T as w,Y as x,V as y};
