const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./56ZFzX5F.js","./C-UWfBKM.js","./vue.BEI8irA5.css","./C8Ipe4Sb.js","./CaArYeoq.js","./CnbxAtif.js","./BHQX9Zn-.js","./DxqHYnwt.js","./C-6mcIHo.js","./BLVB0qGI.js","./DdDBkiWh.js","./entry.DteeDQQ8.css","./BfYHqe0I.js","./Dwwhtk8F.js","./Base.p-W_GOB_.css","./kO3c2T3Z.js","./B4-ux0JU.js","./C9iDCKih.js","./DFjp5i1d.js","./BoxStrength.sBZ0MdUD.css","./CpqzGx5Z.js","./CJXJVNvd.js","./DB1J5eJb.js","./Dv6SRLOG.js","./CrGTrm09.js","./CsUNmt0V.js","./BaGbu_iK.js","./B4_m6W6M.js","./Df9Zl9tb.js","./CWI4SPXy.js","./DSuZ4ZlV.js","./Bot.C8-ZYa6B.css","./CdotE9Ij.js","./B0nqHm-K.js","./DR5SqFcb.js","./hWjPw_GH.js","./CDm2gSvM.js","./BYsNkwch.js","./-Pa_sf8E.js","./fYTAi4NN.js","./CXne62dx.js","./SWvNpLBd.js","./uKBRwvbo.js","./DXxwmWCg.js","./BoxTV.CaA_h6Ii.css","./BkrVmZ_I.js"])))=>i.map(i=>d[i]);
import{_ as le}from"./CnbxAtif.js";import{bt as Ve,r as k,a_ as Z,bs as h,bq as B,br as o,bu as ae,bv as X,bw as Y,bx as l,by as e,bz as g,bA as R,bB as ee,bC as G,bD as re,bE as ce,bF as O,bG as Ae,bH as de,b2 as Pe,bI as S,bJ as q,bK as ue,bb as me,b3 as Le,bL as j,bM as _e,Q as pe,bN as Me,bO as he,_ as f,bg as H,bd as Oe,bP as N,bQ as Ie,bR as ze,bS as De,bc as Ue,b7 as Ne,b8 as ie,bT as Ze,ba as Ge,bU as qe,a$ as je,bV as Ke,bW as D,bX as We,bY as He,bZ as Je,b_ as Qe,b$ as Xe}from"./C-UWfBKM.js";import{t as Ye,d as fe,u as te}from"./BHQX9Zn-.js";import{G as et}from"./DxqHYnwt.js";import{a as U}from"./C-6mcIHo.js";const tt=[{id:1,label:"All Modules",child:[{id:"FinscBoxTV||21x14",img:"StockFull",label:"Biểu đồ tổng quan"},{id:"ChartRoot|Tradingview|21x12",img:"Stock",label:"Biểu đồ chứng khoán việt nam"},{id:"ChartTradingviewMarket||21x12",img:"Market",label:"Biểu đồ chứng khoán thế giới"},{id:"FinscBoxFinance||9x9",label:"Báo cáo tài chính",img:"Finance"},{id:"FinscBoxNews||9x8",label:"News",img:"News"},{id:"FinscBoxStrength||5x5",img:"Strength",label:"Thông tin phiên giao dịch"},{id:"FinscBoxVolumn||5x5",img:"Volumn",label:"Khớp lệnh"},{id:"FinscBoxFA||5x5",img:"FA",label:"Tứ trụ FA"},{id:"FinscBoxTA||5x5",img:"TA",label:"Tứ trụ TA"},{id:"FinscBoxCanslim||5x5",label:"Canslim",img:"Canslim"}]}],ot={class:"flex items-center justify-between"},st={class:"flex items-center gap-3"},nt={class:"flex items-center gap-3"},it={class:"grid-box py-6"},lt={class:"flex items-center justify-between p-2 bg-base-neutral"},at={class:"media-box flex-1"},rt={__name:"Modules",emits:["onAdd"],setup(i,{emit:n}){const t=n,s=Ve(),d=k(!1),b=k(tt),c=k({id:1,label:"All Modules"}),_=k(""),T=Z(()=>{var a,p;if(((a=c.value)==null?void 0:a.id)===1){const r=[];for(const y of b.value)if(y!=null&&y.child)for(const u of y.child)r.push(u);return r}return((p=c.value)==null?void 0:p.child)??[]}),x=m=>{s.add({title:`Đã thêm ${m.label} !`}),t("onAdd",m.id)};return(m,a)=>{const p=ce,r=O,y=le,u=Ae,C=de;return h(),B("div",null,[o("div",{onClick:a[0]||(a[0]=v=>d.value=!0)},[ae(m.$slots,"default",X(Y({isOpen:l(d)})))]),e(C,{modelValue:l(d),"onUpdate:modelValue":a[4]||(a[4]=v=>R(d)?d.value=v:null),fullscreen:""},{default:g(()=>[e(u,{ui:{base:"h-full flex flex-col",rounded:"",divide:"divide-y divide-gray-100 dark:divide-gray-800",body:{base:"grow"}}},{header:g(()=>[o("div",ot,[o("div",st,[a[5]||(a[5]=o("h3",{class:"hidden md:block text-base font-semibold leading-6 text-gray-900 dark:text-white"}," Modules ",-1)),e(p,{query:l(_),"onUpdate:query":a[1]||(a[1]=v=>R(_)?_.value=v:null),modelValue:l(c),"onUpdate:modelValue":a[2]||(a[2]=v=>R(c)?c.value=v:null),options:l(b),placeholder:"Search...",creatable:"",searchable:""},null,8,["query","modelValue","options"])]),o("div",nt,[e(r,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:a[3]||(a[3]=v=>d.value=!1)})])])]),default:g(()=>[o("div",it,[(h(!0),B(ee,null,G(l(T),(v,A)=>(h(),B("div",{key:A,class:"item-box max-w-3xl rounded-sm border border-base-neutral hover:shadow-md"},[o("div",lt,[o("h3",null,re(l(Ye)(v.label)),1),e(r,{icon:"i-ri-add-circle-line",size:"2xs",color:"primary",variant:"solid",label:"Thêm",trailing:!1,onClick:oe=>x(v)},null,8,["onClick"])]),o("div",at,[e(y,{src:`/static/module/${v.img||v.label}.avif`,class:"pic-box h-full"},null,8,["src"])])]))),128))])]),_:1})]),_:1},8,["modelValue"])])}}},ct=()=>Pe("color-mode").value,dt={__name:"Theme",setup(i){const n=ct(),t=Z({get(){return n.value==="dark"},set(){n.preference=n.value==="dark"?"light":"dark"}});return(s,d)=>{const b=O,c=q,_=ue;return h(),S(_,null,{fallback:g(()=>d[1]||(d[1]=[o("div",{class:"w-8 h-8"},null,-1)])),default:g(()=>[e(c,{popper:{placement:"right"},text:"Giao diện "+(l(t)?"sáng":"tối")},{default:g(()=>[e(b,{icon:l(t)?"i-ri-sun-line":"i-ri-moon-line",color:"gray",variant:"ghost","aria-label":"Theme",ui:{rounded:"rounded-full"},onClick:d[0]||(d[0]=T=>t.value=!l(t))},null,8,["icon"])]),_:1},8,["text"])]),_:1})}}};function M(i,n=null){const t=k(n);return me(()=>{const s=localStorage.getItem(i);s&&(t.value=JSON.parse(s)),Le(t,d=>{d==null?localStorage.removeItem(i):localStorage.setItem(i,JSON.stringify(d))},{deep:!0})}),t}const ut={watch:{fSize:fe(function(i){this.setFontSize(i)},600)},methods:{setFontSize(i){i>=10?this.fSize=10:i<=0&&(this.fSize=0);const n=this.fSize-5;document.documentElement.style.fontSize=n+16+"px"}},setup(){return{fSize:M("fSize",5)}},mounted(){this.setFontSize(this.fSize)}},mt={class:"fsRange"},_t={class:"absolute z-10 inset-0 flex flex-col justify-between items-center py-1"},pt=["value"];function ht(i,n,t,s,d,b){const c=O,_=q;return h(),S(_,{popper:{placement:"right"},text:"Phông chữ "+s.fSize},{default:g(()=>[o("div",mt,[o("div",_t,[e(c,{onClick:n[0]||(n[0]=T=>b.setFontSize(++s.fSize)),size:"2xs",icon:"i-ri-add-line",color:"white",variant:"ghost",square:"",ui:{rounded:"rounded-full"}}),e(c,{onClick:n[1]||(n[1]=T=>b.setFontSize(--s.fSize)),size:"2xs",icon:"i-ri-subtract-line",color:"white",variant:"ghost",square:"",ui:{rounded:"rounded-full"}})]),o("input",{class:"bg-base-200",type:"range",min:"0",max:"10",value:s.fSize,step:"1"},null,8,pt)])]),_:1},8,["text"])}const ft=j(ut,[["render",ht],["__scopeId","data-v-190240c2"]]),be=(i,n,t)=>{const s=i[n];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((d,b)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(b.bind(null,new Error("Unknown variable dynamic import: "+n+(n.split("/").length!==t?". Note that variables only represent file names one level deep.":""))))})},bt={__name:"Root",props:{type:{type:String,default:"Top"},items:{type:Array,default(){return[]}},sideRight:{type:Boolean,default:!1}},setup(i){const n=i,t=Z(()=>_e(pe(()=>be(Object.assign({"./Mode/Edge.vue":()=>f(()=>import("./56ZFzX5F.js"),__vite__mapDeps([0,1,2]),import.meta.url),"./Mode/Mobile.vue":()=>f(()=>import("./C8Ipe4Sb.js"),__vite__mapDeps([3,1,2]),import.meta.url),"./Mode/Side.vue":()=>f(()=>import("./CaArYeoq.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11]),import.meta.url),"./Mode/Top.vue":()=>f(()=>import("./BfYHqe0I.js"),__vite__mapDeps([12,1,2,3,5,6,7,8,9,10,11]),import.meta.url)}),`./Mode/${n.type}.vue`,3))));return(s,d)=>(h(),S(he(l(t)),X(Y(n)),Me({_:2},[G(s.$slots,(b,c)=>({name:c,fn:g(_=>[ae(s.$slots,c,X(Y(_||{})))])}))]),1040))}},J=[{id:"Base",label:"Giao diện mặc định"},{id:"Modern",label:"Giao diện nâng cao"},{id:"Simple",label:"Giao diện đơn giản"}],xt={Base:["FinscBoxTV||21x14","FinscBoxFinance||9x9","FinscBoxNews||9x8","FinscBoxCanslim||7x6","FinscBoxTA||7x6","FinscBoxFA||7x6"],Modern:["FinscBoxStrength||5x5","FinscBoxVolumn||5x5","FinscBoxCanslim||6x5","FinscBoxFA||5x5","ChartRoot|Tradingview|21x12","FinscBoxFinance||9x9","FinscBoxNews||9x8"],Simple:["FinscBoxTV||30x14","FinscBoxFinance||10x11","FinscBoxNews||10x11","FinscBoxCanslim||10x5","FinscBoxTA||5x6","FinscBoxFA||5x6"]},vt=(i=[],n=!0)=>{const t=[];return i.forEach((s,d)=>{if(typeof s=="string"){const b=n?te():"w-"+(d+1),c=s.split("|");let _=3,T=2;if(c[2]){const x=c[2].split("x");_=x[0],T=x[1]}t.push({id:b,w:_,h:T,name:c[0],info:c[1]})}}),t},gt={__name:"index",props:{modelValue:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(i,{emit:n}){const t=(x,m=[])=>{for(const a of m){const p=new RegExp(`^(${a})(.*)$`),r=x.match(p);if(r)return r.slice(1)}return null},s=["Chart","Finsc"],d=n,b=i,c=Z({get(){return b.modelValue},set(x){d("update:modelValue",x)}}),_=k({}),T=x=>{const m=x??"CardRoot";if(_.value[m])return _.value[m];{const a=t(m,s);return a?(_.value[m]=_e(pe(()=>be(Object.assign({"./Chart/Base.vue":()=>f(()=>import("./Dwwhtk8F.js"),__vite__mapDeps([13,1,2,6,14]),import.meta.url),"./Chart/BoxExchange.vue":()=>f(()=>import("./kO3c2T3Z.js"),__vite__mapDeps([15,16,1,2,6,17]),import.meta.url),"./Chart/BoxList.vue":()=>f(()=>import("./C9iDCKih.js"),__vite__mapDeps([17,6,1,2]),import.meta.url),"./Chart/BoxStrength.vue":()=>f(()=>import("./DFjp5i1d.js"),__vite__mapDeps([18,5,1,2,17,6,19]),import.meta.url),"./Chart/Root.vue":()=>f(()=>import("./CpqzGx5Z.js"),__vite__mapDeps([20,1,2,21,6,5,7,8,9,10,11]),import.meta.url),"./Chart/Tradingview.vue":()=>f(()=>import("./DB1J5eJb.js"),__vite__mapDeps([22,23,8,1,2,9,10,11,24,25,26,5,6,7]),import.meta.url),"./Chart/TradingviewFinsc.vue":()=>f(()=>import("./B4_m6W6M.js"),__vite__mapDeps([27,8,1,2,9,10,11,24,25,26,5,6,7]),import.meta.url),"./Chart/TradingviewMarket.vue":()=>f(()=>import("./Df9Zl9tb.js"),__vite__mapDeps([28,1,2]),import.meta.url),"./Chart/TradingviewStock.vue":()=>f(()=>import("./Dv6SRLOG.js"),__vite__mapDeps([23,8,1,2,9,10,11,24,25,26,5,6,7]),import.meta.url),"./Finsc/Bot.vue":()=>f(()=>import("./CWI4SPXy.js"),__vite__mapDeps([29,1,2,30,8,9,10,11,5,6,7,31]),import.meta.url),"./Finsc/BoxCanslim.vue":()=>f(()=>import("./CdotE9Ij.js"),__vite__mapDeps([32,1,2,33,5,6,7,8,9,10,11]),import.meta.url),"./Finsc/BoxFA.vue":()=>f(()=>import("./DR5SqFcb.js"),__vite__mapDeps([34,1,2,33,5,6,7,8,9,10,11]),import.meta.url),"./Finsc/BoxFinance.vue":()=>f(()=>import("./hWjPw_GH.js"),__vite__mapDeps([35,33,1,2,13,6,14,36,30,8,9,10,11,5,7]),import.meta.url),"./Finsc/BoxNews.vue":()=>f(()=>import("./BYsNkwch.js"),__vite__mapDeps([37,16,1,2,5,38,10,6,36,39,29,30,8,9,11,7,31]),import.meta.url),"./Finsc/BoxStrength.vue":()=>f(()=>import("./CXne62dx.js"),__vite__mapDeps([40,18,5,1,2,17,6,19,25,8,9,10,11,7]),import.meta.url),"./Finsc/BoxTA.vue":()=>f(()=>import("./SWvNpLBd.js"),__vite__mapDeps([41,1,2,33,6,8,9,10,11,5,7]),import.meta.url),"./Finsc/BoxTV.vue":()=>f(()=>import("./uKBRwvbo.js"),__vite__mapDeps([42,1,2,6,25,8,9,10,11,27,24,26,5,7,15,16,17,18,19,43,38,13,14,30,39,44]),import.meta.url),"./Finsc/BoxVolumn.vue":()=>f(()=>import("./DXxwmWCg.js"),__vite__mapDeps([43,1,2,38,10,13,6,14,30,8,9,11,26,5,7]),import.meta.url),"./Finsc/Root.vue":()=>f(()=>import("./BkrVmZ_I.js"),__vite__mapDeps([45,21,1,2,6,5,7,8,9,10,11]),import.meta.url),"./Finsc/SymbolMenu.vue":()=>f(()=>import("./fYTAi4NN.js"),__vite__mapDeps([39,1,2]),import.meta.url)}),`./${a[0]}/${a[1]}.vue`,3))),_.value[m]):null}};return(x,m)=>{const a=ue;return h(),S(a,null,{default:g(()=>[(h(),S(he(T(l(c).name)),{modelValue:l(c),"onUpdate:modelValue":m[0]||(m[0]=p=>R(c)?c.value=p:null)},null,8,["modelValue"]))]),_:1})}}},yt={class:"px-1"},$t={class:"grid-stack min-h-screen"},wt=["gs-x","gs-y","gs-w","gs-h","gs-id","id"],Tt={class:"grid-stack-item-content w-full flex gList-stretch"},kt={__name:"Grid",props:{basis:{type:String,default:""},design:{type:String,default:"Base"}},emits:["update:modelValue"],setup(i,{expose:n,emit:t}){const s=i;let d=null;const b=k(!1),c=M(s.basis,[]),_=(a,p)=>{p.forEach(r=>{const y=c.value.find(u=>u.id==r.id);if(!y){console.log("Not founded widget");return}Object.assign(y,{x:r.x,y:r.y,w:r.w,h:r.h})})},T=({id:a,w:p=3,h:r=2,name:y="CardRoot",info:u="Simple"})=>{const v={id:a||"w-"+te(),w:p,h:r,name:y,info:u};c.value.push(v),H(()=>{d.makeWidget(`#${v.id}`)})},x=a=>{const p=c.value.findIndex(r=>r.id==a.id);p!==-1&&(c.value.splice(p,1),d.removeWidget(`#${a.id}`,!1))},m=(a=!0)=>{b.value=!1,d&&d.destroy(a)};return me(()=>{var a;try{d=et.init({handle:".grid-stack-item-content",disableResize:!1,float:!1,margin:4,column:30,minRow:1,columnOpts:{columnMax:30,breakpoints:[{w:768,c:1}]}}),d.on("change",_),((a=c.value)==null?void 0:a.length)===0&&(c.value=vt(xt[s.design],!1)),H(()=>{for(const p of c.value)d.makeWidget(`#${p.id}`);b.value=!0})}catch{H(()=>{window.location.reload()})}}),Oe(()=>{m()}),n({add:T,destroy:m}),(a,p)=>{const r=O,y=q;return h(),B("div",yt,[o("div",$t,[(h(!0),B(ee,null,G(l(c),(u,C)=>(h(),B("div",{class:"grid-stack-item","gs-x":u.x,"gs-y":u.y,"gs-w":u.w,"gs-h":u.h,"gs-id":u.id,id:u.id,key:u.id},[o("div",Tt,[l(b)?(h(),S(l(gt),{key:0,modelValue:l(c)[C],"onUpdate:modelValue":v=>l(c)[C]=v},null,8,["modelValue","onUpdate:modelValue"])):N("",!0),e(y,{text:"Remove",class:"grid-stack-item-close z-10 absolute top-1.5 right-1.5 hidden"},{default:g(()=>[e(r,{onClick:v=>x(u),icon:"i-ri-close-line",size:"2xs",color:"red",variant:"soft",square:"",ui:{rounded:"rounded-full"}},null,8,["onClick"])]),_:2},1024)])],8,wt))),128))])])}}},Bt={key:0,class:"flex"},Ft={class:"flex-1 pl-4 space-y-2"},St={class:"space-y-2"},K={__name:"Skeleton",props:{height:{type:String,default:"100%"},avatar:{type:Boolean,default:!1}},setup(i){return(n,t)=>{const s=ze;return h(),B("div",{class:"w-full space-y-4 overflow-hidden",style:Ie({height:i.height})},[i.avatar?(h(),B("div",Bt,[e(s,{class:"h-[5.5rem] w-[5.5rem]"}),o("div",Ft,[e(s,{class:"h-4 max-w-lg"}),e(s,{class:"h-4 max-w-xl"}),e(s,{class:"h-4 max-w-md"}),e(s,{class:"h-4 max-w-sm"})])])):N("",!0),o("div",St,[e(s,{class:"h-4 max-w-3xl"}),e(s,{class:"h-4 max-w-4xl"}),e(s,{class:"h-4 max-w-6xl"}),e(s,{class:"h-4 max-w-2xl"}),e(s,{class:"h-4 max-w-xl"}),e(s,{class:"h-4 max-w-3xl"}),e(s,{class:"h-4 max-w-4xl"}),e(s,{class:"h-4 max-w-6xl"}),e(s,{class:"h-4 max-w-2xl"}),e(s,{class:"h-4 max-w-xl"}),e(s,{class:"h-4 max-w-lg"}),e(s,{class:"h-4 max-w-md"})])],4)}}},Ct={},Et={class:"grid grid-cols-3 gap-4"},Rt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},Vt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},At={class:"flex-1 rounded-finsc border border-base-neutral p-4"},Pt={class:"flex-1 rounded-finsc border border-base-neutral p-4 my-4"},Lt={class:"grid grid-cols-3 gap-4"},Mt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},Ot={class:"flex-1 rounded-finsc border border-base-neutral p-4"},It={class:"flex-1 rounded-finsc border border-base-neutral p-4"};function zt(i,n){const t=K;return h(),B("div",null,[o("div",Et,[o("div",Rt,[e(t,{height:"120px"})]),o("div",Vt,[e(t,{height:"120px"})]),o("div",At,[e(t,{height:"120px"})])]),o("div",Pt,[e(t,{height:"290px",avatar:""})]),o("div",Lt,[o("div",Mt,[e(t,{height:"120px"})]),o("div",Ot,[e(t,{height:"120px"})]),o("div",It,[e(t,{height:"120px"})])])])}const Dt=j(Ct,[["render",zt]]),Ut={},Nt={class:"flex-1 rounded-finsc border border-base-neutral p-4 mb-4"},Zt={class:"grid grid-cols-3 gap-4"},Gt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},qt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},jt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},Kt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},Wt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},Ht={class:"flex-1 rounded-finsc border border-base-neutral p-4"};function Jt(i,n){const t=K;return h(),B("div",null,[o("div",Nt,[e(t,{height:"290px",avatar:""})]),o("div",Zt,[o("div",Gt,[e(t,{height:"120px"})]),o("div",qt,[e(t,{height:"120px"})]),o("div",jt,[e(t,{height:"120px"})]),o("div",Kt,[e(t,{height:"120px"})]),o("div",Wt,[e(t,{height:"120px"})]),o("div",Ht,[e(t,{height:"120px"})])])])}const Qt=j(Ut,[["render",Jt]]),Xt={},Yt={class:"flex gap-4 mb-4"},eo={class:"flex-1 rounded-finsc border border-base-neutral p-4"},to={class:"flex-none w-[170px] rounded-finsc border border-base-neutral p-4"},oo={class:"grid grid-cols-3 gap-4"},so={class:"flex-1 rounded-finsc border border-base-neutral p-4"},no={class:"flex-1 rounded-finsc border border-base-neutral p-4"},io={class:"flex-1 rounded-finsc border border-base-neutral p-4"},lo={class:"flex-1 rounded-finsc border border-base-neutral p-4"},ao={class:"flex-1 rounded-finsc border border-base-neutral p-4"},ro={class:"flex-1 rounded-finsc border border-base-neutral p-4"};function co(i,n){const t=K;return h(),B("div",null,[o("div",Yt,[o("div",eo,[e(t,{height:"290px",avatar:""})]),o("div",to,[e(t)])]),o("div",oo,[o("div",so,[e(t,{height:"120px"})]),o("div",no,[e(t,{height:"120px"})]),o("div",io,[e(t,{height:"120px"})]),o("div",lo,[e(t,{height:"120px"})]),o("div",ao,[e(t,{height:"120px"})]),o("div",ro,[e(t,{height:"120px"})])])])}const uo=j(Xt,[["render",co]]);function mo(i){return De(()=>{var t;const n=(t=Ue())==null?void 0:t.appContext.app.$nuxt;return n?n.runWithContext(i):i()})}const _o={type:"Top"},po={type:"Top",sticky:!0},ho={type:"Side"},fo={type:"Side",sideRight:!0,logout:!0},bo={type:"Edge",logout:!0},xo={menuTop:_o,menuTopSticky:po,sideLeft:ho,sideRight:fo,edgeLeft:bo},vo="menuTop",go="menuTop",yo=["bds online","bds hcm"],$o="trang bds",wo="san giao dich bds hcm",To=[{label:"Component",children:[{label:"Elements",to:"/ui"},{label:"Form",to:"/ui/form"},{label:"Form Group",to:"/ui/form-group"},{label:"Table",to:"/ui/table"},{label:"Charts",to:"https://miniwidget.com/charts.html"}]},{label:"Modules",children:[{label:"Banner",to:"#"}]}],ko=["BannerRoot|Center","BannerRoot|Left","BannerRoot|Right"],Bo={id:vo,layout:go,keywords:yo,title:$o,description:wo,menus:To,modules:ko},Fo="menuTopSticky",So="menuTopSticky",Co="page-main-full",Eo=["bds online","bds hcm"],Ro="trang bds",Vo="san giao dich bds hcm",Ao=[{label:"Component",children:[{label:"Elements",to:"/ui"},{label:"Form",to:"/ui/form"},{label:"Form Group",to:"/ui/form-group"},{label:"Table",to:"/ui/table"},{label:"Charts",to:"https://miniwidget.com/charts.html"}]},{label:"Modules",children:[{label:"Banner",to:"#"}]}],Po=["BannerRoot|Center","BannerRoot|Left","BannerRoot|Right"],Lo={id:Fo,layout:So,className:Co,keywords:Eo,title:Ro,description:Vo,menus:Ao,modules:Po},Mo="sideLeft",Oo="sideLeft",Io=["bds online","bds hcm"],zo="trang bds",Do="san giao dich bds hcm",Uo=[{label:"Component",children:[{label:"Elements",to:"/ui"},{label:"Form",to:"/ui/form"},{label:"Form Group",to:"/ui/form-group"},{label:"Table",to:"/ui/table"},{label:"Charts",to:"https://miniwidget.com/charts.html"}]},{label:"Modules",children:[{label:"Banner",to:"#"}]}],No=["BannerCenter","BannerLeft","BannerRight"],Zo={id:Mo,layout:Oo,keywords:Io,title:zo,description:Do,menus:Uo,modules:No},Go="sideRight",qo="sideRight",jo=["bds online","bds hcm"],Ko="trang bds",Wo="san giao dich bds hcm",Ho=[{label:"Component",children:[{label:"Elements",to:"/ui"},{label:"Form",to:"/ui/form"},{label:"Form Group",to:"/ui/form-group"},{label:"Table",to:"/ui/table"},{label:"Charts",to:"https://miniwidget.com/charts.html"}]},{label:"Modules",children:[{label:"Banner",to:"#"}]}],Jo=["BannerCenter","BannerLeft","BannerRight"],Qo={id:Go,layout:qo,keywords:jo,title:Ko,description:Wo,menus:Ho,modules:Jo},Xo="edgeLeft",Yo="edgeLeft",es=["bds online","bds hcm"],ts="trang bds",os="san giao dich bds hcm",ss=[],ns=["FinscBoxTV||21x11","FinscBoxFinance||3x7","FinscBoxNews||3x7","FinscBoxStrength||3x3","FinscBoxTA||2x3","FinscBoxFA||2x3","FinscBoxVolumn||2x3"],is={id:Xo,layout:Yo,keywords:es,title:ts,description:os,menus:ss,modules:ns},ls="finsc",as="sideRight",rs=["bds online","bds hcm"],cs="trang bds",ds="san giao dich bds hcm",us=[],ms=["ChartRoot|Tradingview|9x6","FinscCardBullbear","FinscCardScore","FinscCardFundamental","FinscCardTechnical"],_s={id:ls,layout:as,keywords:rs,title:cs,description:ds,menus:us,modules:ms},ps=i=>{const t=[Bo,Lo,Zo,Qo,_s,is].find(s=>s.id===i);return t.theme=xo[t.layout],{...t}},hs=Ne("finsc",()=>{const i=M("symbol","FPT"),n=r=>{i.value=r||"FPT"},t=ie(U().COOKIE_NAME+"_symbols",{default:()=>["FPT","HPG","TCB","MSN","VIC","VND"]}),s=r=>{t.value=[...r]},d=ie(U().COOKIE_NAME+"_modules",{maxAge:U().COOKIE_EXPIRES,sameSite:!0,default:()=>[]}),b=r=>{d.value.push(r)},c=r=>{d.value=[...r]},_=k({}),T=r=>{_.value={..._.value,...r}},x=k([]),m=r=>{x.value={...x.value,...r}},a=k({canslim_style:{},canslim_value:{},data2:{},data3:{}});return{syms:t,setSyms:s,symbol:i,setSymbol:n,modules:d,addModules:b,setModules:c,dataSI:_,setDataSI:T,dataTP:x,setDataTP:m,tutru:a,fetchTutru:async r=>{r&&(i.value=r);const y=await $fetch(`${U().API_URI}/tutru?sb=${i.value}`);if(y){const{canslim_style:u,canslim_value:C,data2:v,data3:A}=y;a.value={canslim_style:u[0],canslim_value:C[0],data2:v[0],data3:A[0]}}}}});function fs(i){return{all:i=i||new Map,on:function(n,t){var s=i.get(n);s?s.push(t):i.set(n,[t])},off:function(n,t){var s=i.get(n);s&&(t?s.splice(s.indexOf(t)>>>0,1):i.set(n,[]))},emit:function(n,t){var s=i.get(n);s&&s.slice().map(function(d){d(t)}),(s=i.get("*"))&&s.slice().map(function(d){d(n,t)})}}}const Q=fs();function bs(){return{on:Q.on,off:Q.off,emit:Q.emit}}const xs={href:"/"},vs={class:"relative"},gs=["onClick"],ys={class:"border rounded-full w-7 h-7 flex items-center justify-center uppercase"},$s={class:"relative"},ws={class:"relative mb-1"},Ts={class:"mb-1"},ks={class:"mb-1"},Bs={key:1,class:"p-4"},Fs={class:"rounded-finsc border border-base-neutral p-4 mb-4"},Ss={class:"sm:flex sm:gap-4"},Cs={class:"flex-1 rounded-finsc border border-base-neutral p-4 mb-4"},Es={class:"flex-1 rounded-finsc border border-base-neutral p-4 mb-4"},Rs={class:"p-4 flex gap-4"},Vs={class:"flex w-44 relative"},As={class:"flex-1"},Ps={__name:"custom",async setup(i){let n,t;const s=hs(),{on:d,off:b}=bs(),c=k(1),_=k(!1),T=$=>{_.value=$||!1},x=k(null),m=M("pageList",[]),a=M("pagePick","Base"),p=k(J[0]),r=k(""),y=k("edgeLeft"),{data:u}=([n,t]=mo(()=>We("pages",()=>ps(y.value))),n=await n,t(),n),C=$=>$&&$.trim()[0]||"a",v=$=>{a.value=$},A=()=>{if(r.value){const $=te();a.value=$,m.value.push({id:$,label:r.value}),r.value="",T(!1)}},oe=$=>{m.value=m.value.filter(w=>w.id!==$)},xe=$=>{var E;const w=$.split("|");let I=3,V=2;if(w[2]){const z=w[2].split("x");I=z[0],V=z[1]}(E=x.value)==null||E.add({name:w[0],info:w[1],w:I,h:V})};Ze($=>{m.value.length===0&&m.value.push(J[0]),m.value.length>0&&u.value&&c.value++,$(()=>{x.value&&(x.value.destroy(),c.value=1)})});const se=fe(function({symbol:$}){s.fetchTutru($)},500);return Ge(()=>{d("eSymbol",se)}),qe(()=>{b("eSymbol",se)}),je({script:[{src:"/static/tv/charting_library/charting_library.standalone.js",rel:"preconnect",tagPosition:"bodyClose"}]}),($,w)=>{var ne;const I=le,V=q,E=O,z=He,ve=rt,ge=dt,ye=ft,$e=Je,we=Qe,Te=bt,ke=kt,W=K,Be=ce,Fe=Xe,Se=Dt,Ce=Qt,Ee=uo,Re=de;return l(u)&&l(u).theme?(h(),B("div",{key:0,class:D(["min-h-screen bg-base-100",{"h-screen flex flex-col":l(u).theme.type==="Side"||l(u).theme.type==="Edge"}])},[o("div",{id:"main-wrap",class:D({"flex-1 flex flex-row overflow-y-hidden":l(u).theme.type==="Side"||l(u).theme.type==="Edge","flex-row-reverse":l(u).theme.sideRight})},[e(Te,Ke(l(u).theme,{items:l(u).menus}),{logo:g(()=>[o("a",xs,[e(I,{src:"/static/logo.png",class:"w-10 h-[2.2rem]"})])]),action:g(()=>[o("div",vs,[(h(!0),B(ee,null,G(l(m),(F,P)=>(h(),B("div",{class:D(["sidebar-item relative",{"sidebar-active":l(a)===F.id}]),key:P,onClick:L=>v(F.id)},[e(V,{popper:{placement:"right"},text:F.label},{default:g(()=>[o("div",ys,[o("span",null,re(C(F.label)),1)])]),_:2},1032,["text"]),P!==0?(h(),S(E,{key:0,onClick:L=>oe(F.id),class:"absolute -top-1 -right-1",icon:"i-ri-close-line",size:"2xs",color:"red",variant:"ghost",square:"",ui:{rounded:"rounded-full"}},null,8,["onClick"])):N("",!0)],10,gs))),128))]),o("div",$s,[o("div",{class:"sidebar-item",onClick:w[0]||(w[0]=F=>T(!0))},[e(V,{popper:{placement:"right"},text:"Thêm page tuỳ chọn"},{default:g(()=>[e(z,{name:"i-ri-layout-masonry-line",class:"text-2xl"})]),_:1})])])]),tool:g(()=>[o("div",ws,[e(ve,{onOnAdd:xe},{default:g(()=>[e(V,{class:"text-center",popper:{placement:"right"},text:"Thêm module vào page"},{default:g(()=>[e(E,{icon:"i-ri-pantone-line",color:"gray",size:"sm",variant:"ghost",ui:{rounded:"rounded-full"}})]),_:1})]),_:1}),o("div",Ts,[e(ge)]),o("div",ks,[e(ye)]),o("div",null,[e(we,{mode:"hover",popper:{placement:"right"}},{panel:g(()=>w[4]||(w[4]=[o("div",{class:"p-4"},"Thông báo hệ thống",-1)])),default:g(()=>[e($e,{inset:""},{default:g(()=>[e(E,{class:"mx-0.5",icon:"i-ri-notification-3-line",color:"green",ui:{rounded:"rounded-full"}})]),_:1})]),_:1})])])]),_:1},16,["items"]),o("main",{id:"main",class:D(["bg-base-100",[l(u).theme.type==="Side"||l(u).theme.type==="Edge"?"flex-1 overflow-y-auto":"",l(u).className]])},[l(c)>1?(h(),S(ke,{key:l(a)+l(c),ref_key:"gridRef",ref:x,basis:`wid-${l(a)}`,design:(ne=l(p))==null?void 0:ne.id},null,8,["basis","design"])):(h(),B("div",Bs,[o("div",Fs,[e(W,{height:"390px",avatar:""})]),o("div",Ss,[o("div",Cs,[e(W,{avatar:""})]),o("div",Es,[e(W,{avatar:""})])])]))],2)],2),e(Re,{modelValue:l(_),"onUpdate:modelValue":w[3]||(w[3]=F=>R(_)?_.value=F:null),overlay:!1},{default:g(()=>{var F,P;return[o("div",Rs,[o("div",Vs,[e(Be,{class:"w-full",modelValue:l(p),"onUpdate:modelValue":w[1]||(w[1]=L=>R(p)?p.value=L:null),options:l(J)},null,8,["modelValue","options"])]),o("div",As,[e(Fe,{modelValue:l(r),"onUpdate:modelValue":w[2]||(w[2]=L=>R(r)?r.value=L:null),size:"sm",icon:"i-ri-layout-masonry-line",color:"green",placeholder:"Nhập tên menu"},null,8,["modelValue"])]),e(E,{color:l(r)?"green":"gray",icon:"i-ri-save-3-fill",onClick:A,disabled:!l(r)},null,8,["color","disabled"])]),((F=l(p))==null?void 0:F.id)==="Modern"?(h(),S(Se,{key:0,class:"p-4 -mt-4"})):((P=l(p))==null?void 0:P.id)==="Simple"?(h(),S(Ce,{key:1,class:"p-4 -mt-4"})):(h(),S(Ee,{key:2,class:"p-4 -mt-4"}))]}),_:1},8,["modelValue"])],2)):N("",!0)}}},Ds=Object.freeze(Object.defineProperty({__proto__:null,default:Ps},Symbol.toStringTag,{value:"Module"}));export{dt as _,K as a,bs as b,M as c,Ds as d,hs as u,mo as w};
