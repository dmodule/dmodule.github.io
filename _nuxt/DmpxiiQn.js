import{b4 as g,r as p,aL as h,b3 as y,b1 as w,b2 as t,b9 as o,ba as n,be as r,b8 as e,bb as S,bg as R,bY as U,bh as V,bi as k}from"./DKVFX6Pc.js";import{_ as B}from"./CVNtCNjZ.js";import{a as C}from"./BNlYUmXW.js";import{g as b}from"./BKfMk4DD.js";import{u as $}from"./BSpQb4Y_.js";import"./BLVB0qGI.js";import"./B7LlgBWf.js";import"./DcNSY647.js";import"./6bUBh_yt.js";const A={class:"rounded-finsc overflow-hidden h-full w-full text-base bg-base-300 flex flex-col"},M={class:"flex justify-between"},T={class:"px-6 pb-6"},j={class:"grid grid-cols-2 gap-4 text-center"},N={class:"text-xl font-bold text-base-primary"},P={class:"text-xl font-bold text-base-primary"},z={class:"text-sm"},D={class:"text-base-primary caret-up"},E={class:"text-base-secondary caret-down"},I={class:"flex items-center justify-center"},X={class:"flex items-center justify-between"},q=["src"],Q={__name:"BoxTA",setup(F){const u=$(),a=g(()=>u.tutru.data2),c=p(null),l=p(!1);return h(async()=>{const i=await $fetch(`${C().API_URI}/chartimg?sb=${u.symbol}`);i&&(c.value="data:image/png;base64,"+(i==null?void 0:i.imgcode))}),(i,s)=>{const m=R,_=U,x=B,f=V,v=k;return y(),w("div",A,[t("div",M,[s[4]||(s[4]=t("div",{class:"p-4 text-sm"},[t("div",{class:"relative"},[t("div",{class:"text-2xl text-base-primary"},"Technical"),t("div",{class:"absolute -bottom-2 -right-6 text-base-200 text-xs"},"Analysis")]),t("div",null,"Tứ trụ TA")],-1)),o(x,{scale:.4,pos:"tr"},{default:n(()=>[o(_,{mode:"hover",popper:{placement:"left"}},{panel:n(()=>s[3]||(s[3]=[t("div",{class:"text-left px-4 py-2 max-w-72"}," Xếp hạng sức mạnh giá (RS) là chỉ số đo lường sức mạnh của một cổ phiếu so với tất cả cổ phiếu trên thị trường. RS Rating bằng 80 tương ứng cổ phiếu thuộc top 20% mạnh nhất thị trường. ",-1)])),default:n(()=>[o(m,{icon:"i-ri-bar-chart-fill",size:"md",color:"white",class:"ml-6",square:"",ui:{rounded:"rounded-full"}})]),_:1})]),_:1})]),t("div",T,[t("div",j,[t("div",null,[s[5]||(s[5]=t("p",{class:"text-base-neutral"},"RS",-1)),t("p",N,r(e(a).RS),1)]),t("div",null,[s[6]||(s[6]=t("p",{class:"text-base-neutral"},"Xu hướng",-1)),t("p",P,r(e(a).SUCMANH),1)]),s[9]||(s[9]=t("div",{class:"border-t border-base-neutral col-span-2"},null,-1)),t("div",null,[s[7]||(s[7]=t("p",{class:"text-base-neutral"},"Dòng tiền",-1)),t("div",z,[t("div",D,r(e(b)(e(a).bulVol)),1),t("div",E,r(e(b)(e(a).bearVol)),1)])]),t("div",I,[t("button",{class:"btn btn-sm btn-outline",onClick:s[0]||(s[0]=d=>l.value=!0)},"Mẫu hình"),o(v,{modelValue:e(l),"onUpdate:modelValue":s[2]||(s[2]=d=>S(l)?l.value=d:null),ui:{width:"w-full sm:max-w-6xl"}},{default:n(()=>[o(f,{ui:{ring:"",divide:"divide-y divide-gray-100 dark:divide-gray-800"}},{header:n(()=>[t("div",X,[s[8]||(s[8]=t("div",null,"Phân tích mẫu hình tự động",-1)),o(m,{color:"red",size:"xs",icon:"i-heroicons-x-mark-20-solid",class:"-my-1 outline-none",onClick:s[1]||(s[1]=d=>l.value=!1)})])]),default:n(()=>[t("img",{src:e(c),class:"pic-box h-full"},null,8,q)]),_:1})]),_:1},8,["modelValue"])])])])])}}};export{Q as default};