import{n as M,_ as S}from"./Dtubw4NZ.js";import{_ as $}from"./kWqY28R3.js";import{r as z,a_ as x,bT as A,bs as t,bq as o,br as s,bx as l,by as u,bA as p,bB as _,bw as a,bS as V,bC as d,bM as y,bI as N,cw as P}from"./Nng3t-Yx.js";import{a as Y}from"./Bq2qyzQR.js";import{u as Z}from"./HQA1JVik.js";import{u as I,w as U}from"./CbEqo9ud.js";import E from"./IrJuxl_A.js";import{u as F}from"./Cjk267Zi.js";import{a as R}from"./BC962ROv.js";import"./C83wUoeB.js";import"./DdDBkiWh.js";import"./DxqHYnwt.js";import"./BLVB0qGI.js";const j={class:"rounded-finsc overflow-hidden flex flex-col h-full w-full text-base bg-base-300"},q={class:"flex mb-2"},G={class:"w-[180px] flex-none relative ml-4"},J={class:"text-base-primary absolute inset-0 origin-top-left",style:{transform:"scale(0.75)"},width:"240",height:"48",viewBox:"0 0 240 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},K={class:"w-full overflow-hidden pt-2 pr-4"},O=["onClick"],Q={class:"px-6 pb-6 flex-1 overflow-auto space-y-4"},W={class:"flex items-center justify-between text-base-primary"},X={class:"text-xs"},ee=["onClick"],se=["innerHTML"],te={key:0,class:"p-4 max-w-md"},we={__name:"BoxNews",async setup(oe){let r,f;const c=z("market"),b=x(()=>I().symbol),h=n=>{window.open(n,"_blank")},w=x(()=>c.value==="news"&&b.value?"/news?symbol="+b.value:"/news"),v=n=>{console.log(n),c.value=n},k=F({baseURL:R().API_URI}),{data:g,status:C}=([r,f]=U(()=>A("news",()=>k.get(w.value),{watch:[w]})),r=await r,f(),r);return(n,i)=>{const B=S,D=$,L=P,T=Y;return t(),o("div",j,[s("div",q,[s("div",G,[(t(),o("svg",J,i[0]||(i[0]=[s("path",{d:"M238.158 2.82376e-05C265.772 2.82376e-05 -26.6258 -3.52971e-05 1.97162 2.82376e-05C30.569 9.17724e-05 44.2007 48 76.6936 48H167.334C202.892 48 210.543 2.82376e-05 238.158 2.82376e-05Z",fill:"currentColor"},null,-1)]))),i[1]||(i[1]=s("div",{class:"text-white relative text-[1.45rem] text-center py-1.5 w-24 mx-auto"}," Tin Tức ",-1))]),s("div",K,[l(B,null,{default:u(()=>[(t(!0),o(p,null,_(a(M),(e,m)=>(t(),o("button",{key:m,onClick:H=>v(e.id),class:V(["rounded-full px-3 py-1 border border-transparent",a(c)===e.id?"bg-base-100":"border-base-neutral"])},d(e.name),11,O))),128))]),_:1})])]),s("div",Q,[a(C)==="success"?(t(!0),o(p,{key:0},_(a(g),(e,m)=>(t(),o("div",{class:"text-sm",key:m},[s("div",W,[s("div",X,d(("useDate"in n?n.useDate:a(Z))(e.time,"YYYY-MM-DD HH:mm")),1),s("div",null,[l(E,{modelValue:e.link},null,8,["modelValue"])])]),l(L,{mode:"hover",popper:{placement:"right"}},{panel:u(()=>[e.summ?(t(),o("div",te,d(e.summ),1)):y("",!0)]),default:u(()=>[s("div",{class:"flex",onClick:H=>h(e.link)},[e.linkimg?(t(),N(D,{key:0,src:e.linkimg,class:"pic-box mr-2 aspect-video rounded-lg min-w-24 max-w-24"},null,8,["src"])):y("",!0),s("span",{innerHTML:e.title},null,8,se)],8,ee)]),_:2},1024)]))),128)):(t(),o(p,{key:1},_(6,e=>l(T,{height:"96px",avatar:"",key:e})),64))])])}}};export{we as default};
