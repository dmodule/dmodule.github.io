import{g as E,n as O,o as u,d as P,s as B,b as T,c as U}from"./tTl_t_7N.js";import{c as k}from"./BBm5foIw.js";import{a_ as x,bb as H,b3 as N,ba as w,bU as C}from"./B5CNXMPg.js";import"./CbGsoO7p.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";const Q={__name:"OrderCase",props:{dataSI:{type:Object,default:()=>({})},dataTP:{type:Object,default:()=>({})}},setup(b){const v=b,p=x(()=>E()),{emit:s,on:g,off:S}=k();let t=null,m=null,a=null,r=null,l=null;H(()=>{if(t=document.querySelector(".ordercase-cover"),t){o();return}f(),q(),O(t),o(),h()});const f=()=>{t=document.createElement("div"),t.classList.add("ordercase-cover"),t.innerHTML=`
      <div class="ordercase">
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
      </div>
    `,document.body.appendChild(t)},q=()=>{N(()=>p.value,e=>{t.style.display=e!=null&&e.status?"block":"none"})},o=()=>{var e;m=t.querySelector(".order-sym"),l=t.querySelector(".quant-case"),r=t.querySelector(".order-ppse"),a=t.querySelector(".order-quant"),m.innerHTML=u(),a.value=((e=p.value)==null?void 0:e.quantIn)||0},h=()=>{l.addEventListener("focusin",()=>r.style.display="block"),l.addEventListener("focusout",()=>r.style.display="none"),a.addEventListener("click",async()=>{const e=await P(u(),v.dataSI.ceilingPrice*1e3);r.value=e?e.qmax.toLocaleString("en-US"):"..."}),a.addEventListener("blur",()=>{let e=parseFloat(a.value.replace(/,/g,""))||100;e%100!==0&&(a.value=100,s("eNoticeDialog",{title:"Khối lượng không hợp lệ",body:"Nhập lô chẵn (100, 300, 1500, 2000,...) cổ phiếu"})),B({quantIn:e})}),y(".order-buymp","BUY"),y(".order-sellmp","SELL")},y=(e,n)=>{t.querySelector(e).addEventListener("click",()=>{const c=parseFloat(a.value.replace(/,/g,"")),i=u();L(n,c,i)})},L=(e,n,d)=>{const c=n.toLocaleString("en-US"),i={title:"Xác nhận",body:`${e==="BUY"?"Mua":"Bán"} MP ${c} cổ phiếu ${d}?`,callback:async M=>{if(M){const _=await T(d,e,"MP",0,n);s("eNoticeDialog",{title:"Thông báo",body:U(_.message)})}}};s("eNoticeDialog",i)};return w(()=>{g("eSymbol",o)}),C(()=>{S("eSymbol",o)}),(e,n)=>null}};export{Q as default};
