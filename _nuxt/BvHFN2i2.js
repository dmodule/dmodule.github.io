import{a_ as v,b3 as R,r as h,bb as U,bs as V,bq as $,br as t,bx as o,by as n,bC as i,bw as e,bz as k,bE as B,cr as A,bF as T,bG as j}from"./BD89yi6W.js";import{_ as M}from"./esL8_bje.js";import{u as z,f as g}from"./DTastN19.js";import{a as E}from"./DgaNmZUo.js";import"./B39OMRwo.js";import"./DxqHYnwt.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";const N={class:"rounded-finsc overflow-hidden h-full w-full bg-base-300 flex flex-col text-sm"},P={class:"flex justify-between"},q={class:"px-4 pb-4 flex-1 flex items-center justify-center"},D={class:"grid grid-cols-2 gap-4 text-center w-full"},F={class:"text-xl font-bold text-base-primary"},I={class:"text-xl font-bold text-base-primary"},X={class:"border-t border-base-neutral col-span-2 relative"},G={class:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-base-primary px-2 py-0.5 rounded-full"},H={class:"text-sm"},O={class:"text-base-primary caret-up"},W={class:"text-base-secondary caret-down"},Z={class:"flex items-center justify-center"},J={class:"flex items-center justify-between"},K=["src"],at={__name:"BoxTA",setup(L){const r=z(),d=v(()=>r.tutru.data2),u=v(()=>r.symbol);R(()=>u.value,async()=>{await r.fetchTutru()});const m=h(null),l=h(!1);return U(async()=>{const a=await $fetch(`${E().API_URI}/chartimg?sb=${r.symbol}`);a&&(m.value="data:image/png;base64,"+(a==null?void 0:a.imgcode))}),(a,s)=>{var _,b,f,x;const p=B,y=A,w=M,S=T,C=j;return V(),$("div",N,[t("div",P,[s[4]||(s[4]=t("div",{class:"p-4"},[t("div",{class:"relative"},[t("div",{class:"text-2xl text-base-primary"},"Technical"),t("div",{class:"absolute -bottom-2 -right-6 text-base-200 text-xs"},"Analysis")]),t("div",null,"Tứ trụ TA")],-1)),o(w,{scale:.4,pos:"tr"},{default:n(()=>[o(y,{mode:"hover",popper:{placement:"left"}},{panel:n(()=>s[3]||(s[3]=[t("div",{class:"text-left px-4 py-2 max-w-72"}," Xếp hạng sức mạnh giá (RS) là chỉ số đo lường sức mạnh của một cổ phiếu so với tất cả cổ phiếu trên thị trường. RS Rating bằng 80 tương ứng cổ phiếu thuộc top 20% mạnh nhất thị trường. ",-1)])),default:n(()=>[o(p,{icon:"i-ri-bar-chart-fill",size:"md",color:"white",class:"ml-6",square:"",ui:{rounded:"rounded-full"}})]),_:1})]),_:1})]),t("div",q,[t("div",D,[t("div",null,[s[5]||(s[5]=t("p",{class:"text-base-neutral"},"RS",-1)),t("p",F,i((_=e(d))==null?void 0:_.RS),1)]),t("div",null,[s[6]||(s[6]=t("p",{class:"text-base-neutral"},"Xu hướng",-1)),t("p",I,i((b=e(d))==null?void 0:b.SUCMANH),1)]),t("div",X,[t("div",G,i(e(u)),1)]),t("div",null,[s[7]||(s[7]=t("p",{class:"text-base-neutral"},"Dòng tiền",-1)),t("div",H,[t("div",O,i(e(g)((f=e(d))==null?void 0:f.bulVol)),1),t("div",W,i(e(g)((x=e(d))==null?void 0:x.bearVol)),1)])]),t("div",Z,[t("button",{class:"btn btn-sm btn-outline",onClick:s[0]||(s[0]=c=>l.value=!0)},"Mẫu hình"),o(C,{modelValue:e(l),"onUpdate:modelValue":s[2]||(s[2]=c=>k(l)?l.value=c:null),ui:{width:"w-full sm:max-w-6xl"}},{default:n(()=>[o(S,{ui:{ring:"",divide:"divide-y divide-gray-100 dark:divide-gray-800"}},{header:n(()=>[t("div",J,[s[8]||(s[8]=t("div",null,"Phân tích mẫu hình tự động",-1)),o(p,{color:"red",size:"xs",icon:"i-heroicons-x-mark-20-solid",class:"-my-1 outline-none",onClick:s[1]||(s[1]=c=>l.value=!1)})])]),default:n(()=>[t("img",{src:e(m),class:"pic-box h-full"},null,8,K)]),_:1})]),_:1},8,["modelValue"])])])])])}}};export{at as default};
