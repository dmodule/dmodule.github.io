import{a_ as S,r as x,bb as C,bs as R,bq as U,br as t,bx as n,by as o,bC as r,bw as e,bz as V,bE as $,cw as k,bF as B,bG as A}from"./Nng3t-Yx.js";import{_ as j}from"./nPWjKBdX.js";import{g as v}from"./Bq2qyzQR.js";import{u as M}from"./CbEqo9ud.js";import{a as T}from"./BC962ROv.js";import"./kWqY28R3.js";import"./DxqHYnwt.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";const z={class:"rounded-finsc overflow-hidden h-full w-full bg-base-300 flex flex-col text-sm"},E={class:"flex justify-between"},N={class:"px-4 pb-4 flex-1 flex items-center justify-center"},P={class:"grid grid-cols-2 gap-4 text-center w-full"},q={class:"text-xl font-bold text-base-primary"},D={class:"text-xl font-bold text-base-primary"},F={class:"text-sm"},I={class:"text-base-primary caret-up"},X={class:"text-base-secondary caret-down"},G={class:"flex items-center justify-center"},H={class:"flex items-center justify-between"},O=["src"],nt={__name:"BoxTA",setup(W){const c=M(),a=S(()=>c.tutru.data2),u=x(null),l=x(!1);return C(async()=>{const i=await $fetch(`${T().API_URI}/chartimg?sb=${c.symbol}`);i&&(u.value="data:image/png;base64,"+(i==null?void 0:i.imgcode))}),(i,s)=>{var p,_,b,f;const m=$,g=k,h=j,y=B,w=A;return R(),U("div",z,[t("div",E,[s[4]||(s[4]=t("div",{class:"p-4"},[t("div",{class:"relative"},[t("div",{class:"text-2xl text-base-primary"},"Technical"),t("div",{class:"absolute -bottom-2 -right-6 text-base-200 text-xs"},"Analysis")]),t("div",null,"Tứ trụ TA")],-1)),n(h,{scale:.4,pos:"tr"},{default:o(()=>[n(g,{mode:"hover",popper:{placement:"left"}},{panel:o(()=>s[3]||(s[3]=[t("div",{class:"text-left px-4 py-2 max-w-72"}," Xếp hạng sức mạnh giá (RS) là chỉ số đo lường sức mạnh của một cổ phiếu so với tất cả cổ phiếu trên thị trường. RS Rating bằng 80 tương ứng cổ phiếu thuộc top 20% mạnh nhất thị trường. ",-1)])),default:o(()=>[n(m,{icon:"i-ri-bar-chart-fill",size:"md",color:"white",class:"ml-6",square:"",ui:{rounded:"rounded-full"}})]),_:1})]),_:1})]),t("div",N,[t("div",P,[t("div",null,[s[5]||(s[5]=t("p",{class:"text-base-neutral"},"RS",-1)),t("p",q,r((p=e(a))==null?void 0:p.RS),1)]),t("div",null,[s[6]||(s[6]=t("p",{class:"text-base-neutral"},"Xu hướng",-1)),t("p",D,r((_=e(a))==null?void 0:_.SUCMANH),1)]),s[9]||(s[9]=t("div",{class:"border-t border-base-neutral col-span-2"},null,-1)),t("div",null,[s[7]||(s[7]=t("p",{class:"text-base-neutral"},"Dòng tiền",-1)),t("div",F,[t("div",I,r(e(v)((b=e(a))==null?void 0:b.bulVol)),1),t("div",X,r(e(v)((f=e(a))==null?void 0:f.bearVol)),1)])]),t("div",G,[t("button",{class:"btn btn-sm btn-outline",onClick:s[0]||(s[0]=d=>l.value=!0)},"Mẫu hình"),n(w,{modelValue:e(l),"onUpdate:modelValue":s[2]||(s[2]=d=>V(l)?l.value=d:null),ui:{width:"w-full sm:max-w-6xl"}},{default:o(()=>[n(y,{ui:{ring:"",divide:"divide-y divide-gray-100 dark:divide-gray-800"}},{header:o(()=>[t("div",H,[s[8]||(s[8]=t("div",null,"Phân tích mẫu hình tự động",-1)),n(m,{color:"red",size:"xs",icon:"i-heroicons-x-mark-20-solid",class:"-my-1 outline-none",onClick:s[1]||(s[1]=d=>l.value=!1)})])]),default:o(()=>[t("img",{src:e(u),class:"pic-box h-full"},null,8,O)]),_:1})]),_:1},8,["modelValue"])])])])])}}};export{nt as default};