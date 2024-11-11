import{i as p,j as q,k as d,t as L,s as _,b as M,m as P}from"./ChsSowZC.js";import{a_ as w,bb as k,b3 as E}from"./CJ_CGJpm.js";import"./Ul5rOUWU.js";import"./CvURW2WX.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";const H={__name:"OrderCase",props:{dataSI:{type:Object,default:()=>{}},dataTP:{type:Object,default:()=>{}}},setup(m){let n=m;const y=w(()=>p());return k(()=>{const t=document.createElement("div");t.classList.add("ordercase-cover"),t.innerHTML=`<div class="ordercase"> 
						<button class="order-sellmp">BÁN MP</button> 
						<div> 
							<div class="order-sym-cover">
								<div class="order-sym"></div>
							</div>
							<div class="quant-case"> 
								<input class="order-quant" type="text" value="">
								<input class="order-ppse" style="display: none" type="text" value="" readonly> 
							</div>
						</div> 
						<button class="order-buymp">MUA MP</button> 
					</div>`,document.body.appendChild(t),E(()=>y.value,e=>{e!=null&&e.status?t.style.display="block":t.style.display="none"}),q(t);const l=t.querySelector(".order-sym"),i=t.querySelector(".quant-case"),s=t.querySelector(".order-ppse"),o=t.querySelector(".order-quant");l.innerHTML=d(),o.value=p().quantIn||0,i.addEventListener("focusin",()=>{s.style.display="block"}),i.addEventListener("focusout",()=>{s.style.display="none"}),console.log("props1",n.dataSI.matchPrice),o.addEventListener("click",async function(){console.log("props2",n.dataSI.matchPrice);const e=await L(d(),n.dataSI.ceilingPrice*1e3);e?s.value=e.qmax.toLocaleString("en-US"):s.value="..."}),o.addEventListener("blur",function(){let e=this.value;if(e=parseFloat(e.replace(/,/g,"")),e%100!==0){this.value=e=100;const a={title:"Khối lượng không hợp lệ",body:"Nhập lô chẵn (100, 300, 1500, 2000,...) cổ phiếu"};widget.showNoticeDialog(a)}_({quantIn:e})});const b=t.querySelector(".order-buymp"),g=t.querySelector(".order-sellmp"),v=(e,a,r)=>{const c=a.toLocaleString("en-US"),h={title:"Xác nhận",body:`${e==="BUY"?"Mua":"Bán"} MP ${c} cổ phiếu ${r}?`,callback:async S=>{if(S){const f=await M(r,e,"MP",0,a);widget.showNoticeDialog({title:"Thông báo",body:P(f.message)})}}};widget.showConfirmDialog(h)},u=(e,a)=>{e.addEventListener("click",()=>{const r=parseFloat(o.value.replace(/,/g,"")),c=d();v(a,r,c)})};u(b,"BUY"),u(g,"SELL")}),(t,l)=>null}};export{H as default};
