const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./6ZYT-8NR.js","./D-GaXO5H.js","./vue.BEI8irA5.css","./GH0qXRtX.js","./BpW4IY02.js","./BJHzdlzf.js","./BHKXCVly.js","./FontSize.CQpBPa19.css","./DxqHYnwt.js","./DilLFIVp.js","./BLVB0qGI.js","./DdDBkiWh.js","./entry.8mB8wsXd.css","./pUScFgu5.js","./DSmxpdco.js","./Base.p-W_GOB_.css","./5r7l2S7u.js","./-6sX1Uob.js","./BG0isKG0.js","./BoxStrength.sBZ0MdUD.css","./Cfz3peiG.js","./Bc1SsasB.js","./D9dhhyr1.js","./MXBXVnX9.js","./Dy6pl1Dk.js","./DsTOTUGq.js","./DYVVOBS8.js","./DJ0k80ms.js","./BfyBktTo.js","./Bot.C8-ZYa6B.css","./Cg6CQrbg.js","./C8vjbyPO.js","./CedvSjS3.js","./DVfe28nP.js","./CDm2gSvM.js","./COMqEZW7.js","./-Pa_sf8E.js","./ByOqWZk4.js","./DbQkgR0O.js","./AHBMPfws.js","./j9lUUls5.js","./BoxTV.CSBDuRHw.css","./DyCCj7gc.js"])))=>i.map(i=>d[i]);
import{_ as te}from"./BJHzdlzf.js";import{r as $,a_ as U,bs as b,bq as w,br as t,bt as oe,bu as H,bv as K,bw as n,bx as e,by as y,bz as E,bA as Q,bB as N,bC as se,bD as ne,bE as z,bF as Te,bG as ie,b2 as Be,bH as T,bI as le,bJ as ae,Q as re,bK as Ce,bL as de,_ as f,bM as I,bN as Ee,bO as Ve,bb as ce,bg as q,bP as ue,bQ as X,bR as Re,bc as Se,b7 as Ae,b8 as ee,bS as Le,b3 as Pe,a$ as Me,bT as Oe,bU as M,bV as Ie,bW as De,bX as Ue}from"./D-GaXO5H.js";import{t as Ne,u as J,a as D,_ as ze}from"./BHKXCVly.js";import{G as Ze}from"./DxqHYnwt.js";import{a as O}from"./DilLFIVp.js";const Ge=[{id:1,label:"All Modules",child:[{id:"FinscBoxTV||21x11",label:"Stock Full",img:"StockFull"},{id:"ChartRoot|Tradingview|9x7",label:"Stock",img:"Stock"},{id:"ChartTradingviewMarket||9x7",label:"Market",img:"Market"},{id:"FinscBoxFinance||3x7",label:"Finance"},{id:"FinscBoxStrength||3x4",label:"Strength"},{id:"FinscBoxFA||3x4",label:"Fundamental Analysis",img:"FA"},{id:"FinscBoxTA||3x4",label:"Technical Analysis",img:"TA"},{id:"FinscBoxCanslim||3x4",label:"Canslim",img:"Canslim"},{id:"FinscBoxNews||3x6",label:"News",img:"News"},{id:"FinscBoxVolumn||3x4",label:"Volumn",img:"Volumn"}]}],je={class:"flex items-center justify-between"},qe={class:"flex items-center gap-3"},We={class:"flex items-center gap-3"},He={class:"grid-box py-6"},Ke={class:"flex items-center justify-between p-2 bg-base-neutral"},Qe={class:"media-box flex-1"},Xe={__name:"Modules",setup(_){const l=$(!1),o=$(Ge),s=$({id:1,label:"All Modules"}),h=$(""),x=U(()=>{var r,v;if(((r=s.value)==null?void 0:r.id)===1){const m=[];for(const d of o.value)if(d!=null&&d.child)for(const c of d.child)m.push(c);return m}return((v=s.value)==null?void 0:v.child)??[]});return(a,r)=>{const v=ne,m=z,d=te,c=Te,p=ie;return b(),w("div",null,[t("div",{onClick:r[0]||(r[0]=i=>l.value=!0)},[oe(a.$slots,"default",H(K({isOpen:n(l)})))]),e(p,{modelValue:n(l),"onUpdate:modelValue":r[4]||(r[4]=i=>E(l)?l.value=i:null),fullscreen:""},{default:y(()=>[e(c,{ui:{base:"h-full flex flex-col",rounded:"",divide:"divide-y divide-gray-100 dark:divide-gray-800",body:{base:"grow"}}},{header:y(()=>[t("div",je,[t("div",qe,[r[5]||(r[5]=t("h3",{class:"hidden md:block text-base font-semibold leading-6 text-gray-900 dark:text-white"}," Modules ",-1)),e(v,{query:n(h),"onUpdate:query":r[1]||(r[1]=i=>E(h)?h.value=i:null),modelValue:n(s),"onUpdate:modelValue":r[2]||(r[2]=i=>E(s)?s.value=i:null),options:n(o),placeholder:"Search...",creatable:"",searchable:""},null,8,["query","modelValue","options"])]),t("div",We,[e(m,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:r[3]||(r[3]=i=>l.value=!1)})])])]),default:y(()=>[t("div",He,[(b(!0),w(Q,null,N(n(x),(i,u)=>(b(),w("div",{key:u,class:"item-box max-w-3xl rounded-sm border border-base-neutral hover:shadow-md"},[t("div",Ke,[t("h3",null,se(n(Ne)(i.label)),1),e(m,{icon:"i-ri-add-circle-line",size:"2xs",color:"primary",variant:"solid",label:"Add",trailing:!1,onClick:C=>a.$emit("onAdd",i.id)},null,8,["onClick"])]),t("div",Qe,[e(d,{src:`/static/module/${i.img||i.label}.avif`,class:"pic-box h-full"},null,8,["src"])])]))),128))])]),_:1})]),_:1},8,["modelValue"])])}}},Je=()=>Be("color-mode").value,Ye={__name:"Theme",setup(_){const l=Je(),o=U({get(){return l.value==="dark"},set(){l.preference=l.value==="dark"?"light":"dark"}});return(s,h)=>{const x=z,a=le;return b(),T(a,null,{fallback:y(()=>h[1]||(h[1]=[t("div",{class:"w-8 h-8"},null,-1)])),default:y(()=>[e(x,{icon:n(o)?"i-ri-sun-line":"i-ri-moon-line",color:"gray",variant:"ghost","aria-label":"Theme",ui:{rounded:"rounded-full"},onClick:h[0]||(h[0]=r=>o.value=!n(o))},null,8,["icon"])]),_:1})}}},me=(_,l,o)=>{const s=_[l];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((h,x)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(x.bind(null,new Error("Unknown variable dynamic import: "+l+(l.split("/").length!==o?". Note that variables only represent file names one level deep.":""))))})},et={__name:"Root",props:{type:{type:String,default:"Top"},items:{type:Array,default(){return[]}},sideRight:{type:Boolean,default:!1}},setup(_){const l=_,o=U(()=>ae(re(()=>me(Object.assign({"./Mode/Edge.vue":()=>f(()=>import("./6ZYT-8NR.js"),__vite__mapDeps([0,1,2]),import.meta.url),"./Mode/Mobile.vue":()=>f(()=>import("./GH0qXRtX.js"),__vite__mapDeps([3,1,2]),import.meta.url),"./Mode/Side.vue":()=>f(()=>import("./BpW4IY02.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11,12]),import.meta.url),"./Mode/Top.vue":()=>f(()=>import("./pUScFgu5.js"),__vite__mapDeps([13,1,2,3,5,6,7,8,9,10,11,12]),import.meta.url)}),`./Mode/${l.type}.vue`,3))));return(s,h)=>(b(),T(de(n(o)),H(K(l)),Ce({_:2},[N(s.$slots,(x,a)=>({name:a,fn:y(r=>[oe(s.$slots,a,H(K(r||{})))])}))]),1040))}},tt={key:0,class:"flex"},ot={class:"flex-1 pl-4 space-y-2"},st={class:"space-y-2"},Z={__name:"Skeleton",props:{height:{type:String,default:"100%"},avatar:{type:Boolean,default:!1}},setup(_){return(l,o)=>{const s=Ve;return b(),w("div",{class:"w-full space-y-4 overflow-hidden",style:Ee({height:_.height})},[_.avatar?(b(),w("div",tt,[e(s,{class:"h-[5.5rem] w-[5.5rem]"}),t("div",ot,[e(s,{class:"h-4 max-w-lg"}),e(s,{class:"h-4 max-w-xl"}),e(s,{class:"h-4 max-w-md"}),e(s,{class:"h-4 max-w-sm"})])])):I("",!0),t("div",st,[e(s,{class:"h-4 max-w-3xl"}),e(s,{class:"h-4 max-w-4xl"}),e(s,{class:"h-4 max-w-6xl"}),e(s,{class:"h-4 max-w-2xl"}),e(s,{class:"h-4 max-w-xl"}),e(s,{class:"h-4 max-w-3xl"}),e(s,{class:"h-4 max-w-4xl"}),e(s,{class:"h-4 max-w-6xl"}),e(s,{class:"h-4 max-w-2xl"}),e(s,{class:"h-4 max-w-xl"}),e(s,{class:"h-4 max-w-lg"}),e(s,{class:"h-4 max-w-md"})])],4)}}},W=[{id:"Base",label:"Giao diện mặc định"},{id:"Modern",label:"Giao diện nâng cao"},{id:"Simple",label:"Giao diện đơn giản"}],nt={Base:["FinscBoxTV||21x11","FinscBoxFinance||9x9","FinscBoxNews||9x8","FinscBoxCanslim||7x6","FinscBoxTA||7x6","FinscBoxFA||7x6"],Modern:["FinscBoxStrength||5x5","FinscBoxVolumn||5x5","FinscBoxCanslim||6x5","FinscBoxFA||5x5","ChartRoot|Tradingview|21x12","FinscBoxFinance||9x9","FinscBoxNews||9x8"],Simple:["FinscBoxTV||30x13","FinscBoxFinance||10x11","FinscBoxNews||10x11","FinscBoxCanslim||10x5","FinscBoxTA||5x6","FinscBoxFA||5x6"]},it=(_=[],l=!0)=>{const o=[];return _.forEach((s,h)=>{if(typeof s=="string"){const x=l?J():"w-"+(h+1),a=s.split("|");let r=3,v=2;if(a[2]){const m=a[2].split("x");r=m[0],v=m[1]}o.push({id:x,w:r,h:v,name:a[0],info:a[1]})}}),o},lt={__name:"index",props:{modelValue:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(_,{emit:l}){const o=(m,d=[])=>{for(const c of d){const p=new RegExp(`^(${c})(.*)$`),i=m.match(p);if(i)return i.slice(1)}return null},s=["Chart","Finsc"],h=l,x=_,a=U({get(){return x.modelValue},set(m){h("update:modelValue",m)}}),r=$({}),v=m=>{const d=m??"CardRoot";if(r.value[d])return r.value[d];{const c=o(d,s);return c?(r.value[d]=ae(re(()=>me(Object.assign({"./Chart/Base.vue":()=>f(()=>import("./DSmxpdco.js"),__vite__mapDeps([14,1,2,6,7,15]),import.meta.url),"./Chart/BoxStrength.vue":()=>f(()=>import("./5r7l2S7u.js"),__vite__mapDeps([16,5,1,2,6,7,17,18,8,9,10,11,12,19]),import.meta.url),"./Chart/Root.vue":()=>f(()=>import("./Cfz3peiG.js"),__vite__mapDeps([20,21,1,2,6,7,14,15,22,23,9,10,11,12,24,17,18,5,8]),import.meta.url),"./Chart/Tradingview.vue":()=>f(()=>import("./D9dhhyr1.js"),__vite__mapDeps([22,23,9,1,2,10,11,12,24,17,18,5,6,7,8]),import.meta.url),"./Chart/TradingviewFinsc.vue":()=>f(()=>import("./DsTOTUGq.js"),__vite__mapDeps([25,9,1,2,10,11,12,24,17,18,6,7,5,8]),import.meta.url),"./Chart/TradingviewMarket.vue":()=>f(()=>import("./DYVVOBS8.js"),__vite__mapDeps([26,1,2]),import.meta.url),"./Chart/TradingviewStock.vue":()=>f(()=>import("./MXBXVnX9.js"),__vite__mapDeps([23,9,1,2,10,11,12,24,17,18,5,6,7,8]),import.meta.url),"./Finsc/Bot.vue":()=>f(()=>import("./DJ0k80ms.js"),__vite__mapDeps([27,1,2,28,9,10,11,12,5,6,7,8,29]),import.meta.url),"./Finsc/BoxCanslim.vue":()=>f(()=>import("./Cg6CQrbg.js"),__vite__mapDeps([30,1,2,31,5,6,7,8,9,10,11,12]),import.meta.url),"./Finsc/BoxFA.vue":()=>f(()=>import("./CedvSjS3.js"),__vite__mapDeps([32,1,2,31,5,6,7,8,9,10,11,12]),import.meta.url),"./Finsc/BoxFinance.vue":()=>f(()=>import("./DVfe28nP.js"),__vite__mapDeps([33,31,1,2,14,6,7,15,34,28,9,10,11,12,5,8]),import.meta.url),"./Finsc/BoxNews.vue":()=>f(()=>import("./COMqEZW7.js"),__vite__mapDeps([35,1,2,5,36,11,34,27,28,9,10,12,6,7,8,29]),import.meta.url),"./Finsc/BoxStrength.vue":()=>f(()=>import("./ByOqWZk4.js"),__vite__mapDeps([37,16,5,1,2,6,7,17,18,8,9,10,11,12,19]),import.meta.url),"./Finsc/BoxTA.vue":()=>f(()=>import("./DbQkgR0O.js"),__vite__mapDeps([38,1,2,31,6,7,9,10,11,12,5,8]),import.meta.url),"./Finsc/BoxTV.vue":()=>f(()=>import("./AHBMPfws.js"),__vite__mapDeps([39,1,2,6,7,25,9,10,11,12,24,17,18,5,8,16,19,40,36,14,15,28,41]),import.meta.url),"./Finsc/BoxVolumn.vue":()=>f(()=>import("./j9lUUls5.js"),__vite__mapDeps([40,1,2,36,11,14,6,7,15,28,9,10,12,18,5,8]),import.meta.url),"./Finsc/Root.vue":()=>f(()=>import("./DyCCj7gc.js"),__vite__mapDeps([42,21,1,2,6,7,5,8,9,10,11,12]),import.meta.url)}),`./${c[0]}/${c[1]}.vue`,3))),r.value[d]):null}};return(m,d)=>{const c=le;return b(),T(c,null,{default:y(()=>[(b(),T(de(v(n(a).name)),{modelValue:n(a),"onUpdate:modelValue":d[0]||(d[0]=p=>E(a)?a.value=p:null)},null,8,["modelValue"]))]),_:1})}}},at={class:"px-1"},rt={class:"grid-stack min-h-screen"},dt=["gs-x","gs-y","gs-w","gs-h","gs-id","id"],ct={class:"grid-stack-item-content w-full flex gList-stretch"},ut={__name:"Grid",props:{basis:{type:String,default:""},design:{type:String,default:"Base"}},emits:["update:modelValue"],setup(_,{expose:l,emit:o}){const s=_;let h=null;const x=$(!1),a=D(s.basis,[]),r=(d,c)=>{c.forEach(p=>{const i=a.value.find(u=>u.id==p.id);if(!i){console.log("Not founded widget");return}Object.assign(i,{x:p.x,y:p.y,w:p.w,h:p.h})})},v=({id:d,w:c=3,h:p=2,name:i="CardRoot",info:u="Simple"})=>{const B={id:d||"w-"+J(),w:c,h:p,name:i,info:u};a.value.push(B),q(()=>{h.makeWidget(`#${B.id}`)})},m=d=>{const c=a.value.findIndex(p=>p.id==d.id);c!==-1&&(a.value.splice(c,1),h.removeWidget(`#${d.id}`,!1))};return ce(()=>{var d;try{h=Ze.init({handle:".grid-stack-item-content",disableResize:!1,float:!1,margin:4,column:30,minRow:1,columnOpts:{columnMax:30,breakpoints:[{w:768,c:1}]}}),h.on("change",r),((d=a.value)==null?void 0:d.length)===0&&(a.value=it(nt[s.design],!1)),q(()=>{for(const c of a.value)h.makeWidget(`#${c.id}`);x.value=!0})}catch{q(()=>{window.location.reload()})}}),l({add:v}),(d,c)=>{const p=z,i=ue;return b(),w("div",at,[t("div",rt,[(b(!0),w(Q,null,N(n(a),(u,C)=>(b(),w("div",{class:"grid-stack-item","gs-x":u.x,"gs-y":u.y,"gs-w":u.w,"gs-h":u.h,"gs-id":u.id,id:u.id,key:u.id},[t("div",ct,[n(x)?(b(),T(n(lt),{key:0,modelValue:n(a)[C],"onUpdate:modelValue":B=>n(a)[C]=B},null,8,["modelValue","onUpdate:modelValue"])):I("",!0),e(i,{text:"Remove",class:"grid-stack-item-close z-10 absolute top-1.5 right-1.5 hidden"},{default:y(()=>[e(p,{onClick:B=>m(u),icon:"i-ri-close-line",size:"2xs",color:"red",variant:"soft",square:"",ui:{rounded:"rounded-full"}},null,8,["onClick"])]),_:2},1024)])],8,dt))),128))])])}}},mt={},_t={class:"grid grid-cols-3 gap-4"},pt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},ht={class:"flex-1 rounded-finsc border border-base-neutral p-4"},bt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},ft={class:"flex-1 rounded-finsc border border-base-neutral p-4 my-4"},xt={class:"grid grid-cols-3 gap-4"},vt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},gt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},yt={class:"flex-1 rounded-finsc border border-base-neutral p-4"};function $t(_,l){const o=Z;return b(),w("div",null,[t("div",_t,[t("div",pt,[e(o,{height:"120px"})]),t("div",ht,[e(o,{height:"120px"})]),t("div",bt,[e(o,{height:"120px"})])]),t("div",ft,[e(o,{height:"290px",avatar:""})]),t("div",xt,[t("div",vt,[e(o,{height:"120px"})]),t("div",gt,[e(o,{height:"120px"})]),t("div",yt,[e(o,{height:"120px"})])])])}const wt=X(mt,[["render",$t]]),kt={},Ft={class:"flex-1 rounded-finsc border border-base-neutral p-4 mb-4"},Tt={class:"grid grid-cols-3 gap-4"},Bt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},Ct={class:"flex-1 rounded-finsc border border-base-neutral p-4"},Et={class:"flex-1 rounded-finsc border border-base-neutral p-4"},Vt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},Rt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},St={class:"flex-1 rounded-finsc border border-base-neutral p-4"};function At(_,l){const o=Z;return b(),w("div",null,[t("div",Ft,[e(o,{height:"290px",avatar:""})]),t("div",Tt,[t("div",Bt,[e(o,{height:"120px"})]),t("div",Ct,[e(o,{height:"120px"})]),t("div",Et,[e(o,{height:"120px"})]),t("div",Vt,[e(o,{height:"120px"})]),t("div",Rt,[e(o,{height:"120px"})]),t("div",St,[e(o,{height:"120px"})])])])}const Lt=X(kt,[["render",At]]),Pt={},Mt={class:"flex gap-4 mb-4"},Ot={class:"flex-1 rounded-finsc border border-base-neutral p-4"},It={class:"flex-none w-[170px] rounded-finsc border border-base-neutral p-4"},Dt={class:"grid grid-cols-3 gap-4"},Ut={class:"flex-1 rounded-finsc border border-base-neutral p-4"},Nt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},zt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},Zt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},Gt={class:"flex-1 rounded-finsc border border-base-neutral p-4"},jt={class:"flex-1 rounded-finsc border border-base-neutral p-4"};function qt(_,l){const o=Z;return b(),w("div",null,[t("div",Mt,[t("div",Ot,[e(o,{height:"290px",avatar:""})]),t("div",It,[e(o)])]),t("div",Dt,[t("div",Ut,[e(o,{height:"120px"})]),t("div",Nt,[e(o,{height:"120px"})]),t("div",zt,[e(o,{height:"120px"})]),t("div",Zt,[e(o,{height:"120px"})]),t("div",Gt,[e(o,{height:"120px"})]),t("div",jt,[e(o,{height:"120px"})])])])}const Wt=X(Pt,[["render",qt]]);function Ht(_){return Re(()=>{var o;const l=(o=Se())==null?void 0:o.appContext.app.$nuxt;return l?l.runWithContext(_):_()})}const Kt={type:"Top"},Qt={type:"Top",sticky:!0},Xt={type:"Side"},Jt={type:"Side",sideRight:!0,logout:!0},Yt={type:"Edge",logout:!0},eo={menuTop:Kt,menuTopSticky:Qt,sideLeft:Xt,sideRight:Jt,edgeLeft:Yt},to="menuTop",oo="menuTop",so=["bds online","bds hcm"],no="trang bds",io="san giao dich bds hcm",lo=[{label:"Component",children:[{label:"Elements",to:"/ui"},{label:"Form",to:"/ui/form"},{label:"Form Group",to:"/ui/form-group"},{label:"Table",to:"/ui/table"},{label:"Charts",to:"https://miniwidget.com/charts.html"}]},{label:"Modules",children:[{label:"Banner",to:"#"}]}],ao=["BannerRoot|Center","BannerRoot|Left","BannerRoot|Right"],ro={id:to,layout:oo,keywords:so,title:no,description:io,menus:lo,modules:ao},co="menuTopSticky",uo="menuTopSticky",mo="page-main-full",_o=["bds online","bds hcm"],po="trang bds",ho="san giao dich bds hcm",bo=[{label:"Component",children:[{label:"Elements",to:"/ui"},{label:"Form",to:"/ui/form"},{label:"Form Group",to:"/ui/form-group"},{label:"Table",to:"/ui/table"},{label:"Charts",to:"https://miniwidget.com/charts.html"}]},{label:"Modules",children:[{label:"Banner",to:"#"}]}],fo=["BannerRoot|Center","BannerRoot|Left","BannerRoot|Right"],xo={id:co,layout:uo,className:mo,keywords:_o,title:po,description:ho,menus:bo,modules:fo},vo="sideLeft",go="sideLeft",yo=["bds online","bds hcm"],$o="trang bds",wo="san giao dich bds hcm",ko=[{label:"Component",children:[{label:"Elements",to:"/ui"},{label:"Form",to:"/ui/form"},{label:"Form Group",to:"/ui/form-group"},{label:"Table",to:"/ui/table"},{label:"Charts",to:"https://miniwidget.com/charts.html"}]},{label:"Modules",children:[{label:"Banner",to:"#"}]}],Fo=["BannerCenter","BannerLeft","BannerRight"],To={id:vo,layout:go,keywords:yo,title:$o,description:wo,menus:ko,modules:Fo},Bo="sideRight",Co="sideRight",Eo=["bds online","bds hcm"],Vo="trang bds",Ro="san giao dich bds hcm",So=[{label:"Component",children:[{label:"Elements",to:"/ui"},{label:"Form",to:"/ui/form"},{label:"Form Group",to:"/ui/form-group"},{label:"Table",to:"/ui/table"},{label:"Charts",to:"https://miniwidget.com/charts.html"}]},{label:"Modules",children:[{label:"Banner",to:"#"}]}],Ao=["BannerCenter","BannerLeft","BannerRight"],Lo={id:Bo,layout:Co,keywords:Eo,title:Vo,description:Ro,menus:So,modules:Ao},Po="edgeLeft",Mo="edgeLeft",Oo=["bds online","bds hcm"],Io="trang bds",Do="san giao dich bds hcm",Uo=[],No=["FinscBoxTV||21x11","FinscBoxFinance||3x7","FinscBoxNews||3x7","FinscBoxStrength||3x3","FinscBoxTA||2x3","FinscBoxFA||2x3","FinscBoxVolumn||2x3"],zo={id:Po,layout:Mo,keywords:Oo,title:Io,description:Do,menus:Uo,modules:No},Zo="finsc",Go="sideRight",jo=["bds online","bds hcm"],qo="trang bds",Wo="san giao dich bds hcm",Ho=[],Ko=["ChartRoot|Tradingview|9x6","FinscCardBullbear","FinscCardScore","FinscCardFundamental","FinscCardTechnical"],Qo={id:Zo,layout:Go,keywords:jo,title:qo,description:Wo,menus:Ho,modules:Ko},Xo=_=>{const o=[ro,xo,To,Lo,Qo,zo].find(s=>s.id===_);return o.theme=eo[o.layout],{...o}},Jo=Ae("finsc",()=>{const _=D("symbol","FPT"),l=i=>{_.value=i||"FPT"},o=ee(O().COOKIE_NAME+"_symbols",{default:()=>["FPT","HPG","TCB","MSN","VIC","VND"]}),s=i=>{o.value=[...i]},h=ee(O().COOKIE_NAME+"_modules",{maxAge:O().COOKIE_EXPIRES,sameSite:!0,default:()=>[]}),x=i=>{h.value.push(i)},a=i=>{h.value=[...i]},r=$({}),v=i=>{r.value={...r.value,...i}},m=$([]),d=i=>{m.value={...m.value,...i}},c=$({fetched:!1,canslim_style:{},canslim_value:{},data2:{},data3:{}});return{syms:o,setSyms:s,symbol:_,setSymbol:l,modules:h,addModules:x,setModules:a,dataSI:r,setDataSI:v,dataTP:m,setDataTP:d,tutru:c,fetchTutru:async()=>{if(!c.value.fetched){const i=await $fetch(`${O().API_URI}/tutru?sb=${_.value}`);if(i){const{canslim_style:u,canslim_value:C,data2:B,data3:G}=i;c.value={canslim_style:u[0],canslim_value:C[0],data2:B[0],data3:G[0]},c.value.fetched=!0}else console.error("Failed to fetch finsc:",error)}}}}),Yo={href:"/"},es={class:"relative"},ts=["onClick"],os={class:"border rounded-full w-7 h-7 flex items-center justify-center uppercase"},ss={class:"relative"},ns={class:"relative mb-1"},is={class:"mb-2"},ls={key:0,class:"p-4"},as={class:"rounded-finsc border border-base-neutral p-4 mb-4"},rs={class:"sm:flex sm:gap-4"},ds={class:"flex-1 rounded-finsc border border-base-neutral p-4 mb-4"},cs={class:"flex-1 rounded-finsc border border-base-neutral p-4 mb-4"},us={class:"p-4 flex gap-4"},ms={class:"flex w-44 relative"},_s={class:"flex-1"},ps={__name:"custom",async setup(_){let l,o;const s=Le(),{fetchTutru:h}=Jo(),x=$(0),a=$(!1),r=k=>{a.value=k||!1},v=$(null),m=D("pageList",[]),d=D("pagePick","Base"),c=$(W[0]),p=$(""),i=$("edgeLeft"),{data:u}=([l,o]=Ht(()=>Ie("pages",()=>Xo(i.value))),l=await l,o(),l),C=k=>k&&k.trim()[0]||"a",B=k=>{d.value=k},G=()=>{if(p.value){const k=J();d.value=k,m.value.push({id:k,label:p.value}),p.value="",r(!1)}},_e=k=>{m.value=m.value.filter(g=>g.id!==k)},pe=k=>{var R;const g=k.split("|");let L=3,V=2;if(g[2]){const P=g[2].split("x");L=P[0],V=P[1]}(R=v.value)==null||R.add({name:g[0],info:g[1],w:L,h:V}),s.add({title:`${g[0].replace("Finsc","")} added!`})};return Pe(()=>u.value,async()=>{await h(),x.value++}),ce(()=>{m.value.length===0&&m.value.push(W[0])}),Me({script:[{src:"/static/tv/charting_library/charting_library.standalone.js",rel:"preconnect",tagPosition:"bodyClose"}]}),(k,g)=>{var Y;const L=te,V=ue,R=z,P=De,he=Xe,be=Ye,fe=ze,xe=et,j=Z,ve=ut,ge=ne,ye=Ue,$e=wt,we=Lt,ke=Wt,Fe=ie;return n(u)&&n(u).theme?(b(),w("div",{key:0,class:M(["min-h-screen bg-base-100",{"h-screen flex flex-col":n(u).theme.type==="Side"||n(u).theme.type==="Edge"}])},[t("div",{id:"main-wrap",class:M({"flex-1 flex flex-row overflow-y-hidden":n(u).theme.type==="Side"||n(u).theme.type==="Edge","flex-row-reverse":n(u).theme.sideRight})},[e(xe,Oe(n(u).theme,{items:n(u).menus}),{logo:y(()=>[t("a",Yo,[e(L,{src:"/static/logo.png",class:"w-10 h-[2.2rem]"})])]),action:y(()=>[t("div",es,[(b(!0),w(Q,null,N(n(m),(F,S)=>(b(),w("div",{class:M(["sidebar-item relative",{"sidebar-active":n(d)===F.id}]),key:S,onClick:A=>B(F.id)},[e(V,{popper:{placement:"right"},text:F.label},{default:y(()=>[t("div",os,[t("span",null,se(C(F.label)),1)])]),_:2},1032,["text"]),S!==0?(b(),T(R,{key:0,onClick:A=>_e(F.id),class:"absolute -top-1 -right-1",icon:"i-ri-close-line",size:"2xs",color:"red",variant:"ghost",square:"",ui:{rounded:"rounded-full"}},null,8,["onClick"])):I("",!0)],10,ts))),128))]),t("div",ss,[t("div",{class:"sidebar-item",onClick:g[0]||(g[0]=F=>r(!0))},[e(V,{popper:{placement:"right"},text:"Thêm page tuỳ chọn"},{default:y(()=>[e(P,{name:"i-ri-layout-masonry-line",class:"text-2xl"})]),_:1})])])]),tool:y(()=>[t("div",ns,[e(he,{onOnAdd:pe},{default:y(()=>[e(V,{class:"text-center",popper:{placement:"right"},text:"Thêm module vào page"},{default:y(()=>[e(R,{icon:"i-ri-pantone-line",color:"gray",size:"sm",variant:"ghost",ui:{rounded:"rounded-full"}})]),_:1})]),_:1}),t("div",is,[e(be)]),t("div",null,[e(fe)])])]),_:1},16,["items"]),t("main",{id:"main",class:M(["bg-base-100",[n(u).theme.type==="Side"||n(u).theme.type==="Edge"?"flex-1 overflow-y-auto":"",n(u).className]])},[n(x)<1?(b(),w("div",ls,[t("div",as,[e(j,{height:"390px",avatar:""})]),t("div",rs,[t("div",ds,[e(j,{avatar:""})]),t("div",cs,[e(j,{avatar:""})])])])):(b(),T(ve,{ref_key:"gridRef",ref:v,basis:`wid-${n(d)}`,design:(Y=n(c))==null?void 0:Y.id,key:n(d)},null,8,["basis","design"]))],2)],2),e(Fe,{modelValue:n(a),"onUpdate:modelValue":g[3]||(g[3]=F=>E(a)?a.value=F:null),overlay:!1},{default:y(()=>{var F,S;return[t("div",us,[t("div",ms,[e(ge,{class:"w-full",modelValue:n(c),"onUpdate:modelValue":g[1]||(g[1]=A=>E(c)?c.value=A:null),options:n(W)},null,8,["modelValue","options"])]),t("div",_s,[e(ye,{modelValue:n(p),"onUpdate:modelValue":g[2]||(g[2]=A=>E(p)?p.value=A:null),size:"sm",icon:"i-ri-layout-masonry-line",color:"green",placeholder:"Nhập tên menu"},null,8,["modelValue"])]),e(R,{color:n(p)?"green":"gray",icon:"i-ri-save-3-fill",onClick:G,disabled:!n(p)},null,8,["color","disabled"])]),((F=n(c))==null?void 0:F.id)==="Modern"?(b(),T($e,{key:0,class:"p-4 -mt-4"})):((S=n(c))==null?void 0:S.id)==="Simple"?(b(),T(we,{key:1,class:"p-4 -mt-4"})):(b(),T(ke,{key:2,class:"p-4 -mt-4"}))]}),_:1},8,["modelValue"])],2)):I("",!0)}}},gs=Object.freeze(Object.defineProperty({__proto__:null,default:ps},Symbol.toStringTag,{value:"Module"}));export{Ye as _,Z as a,gs as c,Jo as u,Ht as w};
