import{y as v,r as c,f as h,b4 as y,o as w,c as C,a as t,b as i,w as r,d as S,t as a,q as e,C as U,T as V,E as R}from"./B5KGO6qV.js";import k from"./CR4GGe83.js";import $ from"./5rgl6gzn.js";import T from"./RZ6NCv9n.js";import{g as u}from"./DhKP8Bzl.js";import{u as B}from"./D5vt4Bai.js";import"./Dgc4RXB8.js";import"./auiRswdB.js";import"./CNa7_oeY.js";import"./BJyML1aj.js";import"./DSLgKJEY.js";import"./BCmiEcw2.js";import"./gMY9QUdj.js";import"./DPfepL_V.js";import"./DVY25RPC.js";import"./CnxvFA1G.js";import"./CH_TkMvo.js";import"./B08LnwSc.js";import"./CxIZtCgj.js";import"./hqW_7__3.js";import"./D0IGrh07.js";import"./DgBGg0UR.js";import"./tLBkHUmY.js";import"./gE8gLvCU.js";import"./fXiJV2nD.js";import"./CX6gLNfa.js";import"./CJZb7twN.js";import"./oUkU2yfS.js";import"./C5zbgi19.js";const M={class:"h-full w-full flex flex-col justify-center bg-gradient-to-b from-green-400/10 border-green-400/20 border text-base-100 p-3 sm:p-4 rounded-finsc"},N={class:"mb-2"},j={class:"w-full text-center text-lg font-semibold mb-4"},A={class:"grid grid-cols-2 gap-4 text-center"},E={class:"text-xl font-bold text-base-primary"},I={class:"text-xl font-bold text-base-primary"},P={class:"text-sm"},D={class:"text-base-primary caret-up"},X={class:"text-base-secondary caret-down"},q={class:"flex items-center justify-center"},z={class:"flex items-center justify-between"},F=["src"],ht={__name:"CardTechnical",setup(H){const p=B(),l=v(()=>p.tutru.data2),d=c(null),s=c(!1);return h(async()=>{const n=await $fetch(`${y().API_URI}/chartimg?sb=${p.symbol}`);n&&(d.value="data:image/png;base64,"+(n==null?void 0:n.imgcode))}),(n,o)=>{const _=V,f=k,x=R,b=$,g=T;return w(),C("div",M,[t("div",N,[i(f,{mode:"hover",popper:{placement:"top"}},{panel:r(()=>o[3]||(o[3]=[t("div",{class:"text-left px-4 py-2 max-w-72"}," Xếp hạng sức mạnh giá (RS) là chỉ số đo lường sức mạnh của một cổ phiếu so với tất cả cổ phiếu trên thị trường. RS Rating bằng 80 tương ứng cổ phiếu thuộc top 20% mạnh nhất thị trường. ",-1)])),default:r(()=>[t("h1",j,[o[4]||(o[4]=S(" Tứ trụ TA ")),i(_,{name:"i-ri-information-fill"})])]),_:1})]),t("div",A,[t("div",null,[o[5]||(o[5]=t("p",{class:"text-base-neutral"},"RS",-1)),t("p",E,a(e(l).RS),1)]),t("div",null,[o[6]||(o[6]=t("p",{class:"text-base-neutral"},"Xu hướng",-1)),t("p",I,a(e(l).SUCMANH),1)]),o[9]||(o[9]=t("div",{class:"border-t border-base-neutral col-span-2"},null,-1)),t("div",null,[o[7]||(o[7]=t("p",{class:"text-base-neutral"},"Dòng tiền",-1)),t("div",P,[t("div",D,a(e(u)(e(l).bulVol)),1),t("div",X,a(e(u)(e(l).bearVol)),1)])]),t("div",q,[t("button",{class:"btn btn-sm btn-outline",onClick:o[0]||(o[0]=m=>s.value=!0)},"Mẫu hình"),i(g,{modelValue:e(s),"onUpdate:modelValue":o[2]||(o[2]=m=>U(s)?s.value=m:null),ui:{width:"w-full sm:max-w-6xl"}},{default:r(()=>[i(b,{ui:{ring:"",divide:"divide-y divide-gray-100 dark:divide-gray-800"}},{header:r(()=>[t("div",z,[o[8]||(o[8]=t("div",null,"Phân tích mẫu hình tự động",-1)),i(x,{color:"red",size:"xs",icon:"i-heroicons-x-mark-20-solid",class:"-my-1 outline-none",onClick:o[1]||(o[1]=m=>s.value=!1)})])]),default:r(()=>[t("img",{src:e(d),class:"pic-box h-full"},null,8,F)]),_:1})]),_:1},8,["modelValue"])])])])}}};export{ht as default};
