import{bL as U,bs as n,bq as m,bQ as $,br as t,bu as A,r,a_ as _,b3 as z,bb as Q,co as Y,by as o,bz as f,bx as s,bA as I,bW as M,bI as g,bB as P,bC as K,bD as O,c1 as X,bY as ee,bJ as te,b$ as se,b_ as oe,cx as le}from"./C-UWfBKM.js";import{b as ne}from"./BHQX9Zn-.js";import{u as ae,c as ie,b as re}from"./CvAXrM3X.js";import{h as ce}from"./CsUNmt0V.js";import me from"./B4_m6W6M.js";import de from"./kO3c2T3Z.js";import ue from"./DFjp5i1d.js";import pe from"./DXxwmWCg.js";import _e from"./fYTAi4NN.js";import"./CnbxAtif.js";import"./DxqHYnwt.js";import"./C-6mcIHo.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";import"./CrGTrm09.js";import"./BaGbu_iK.js";import"./B4-ux0JU.js";import"./C9iDCKih.js";import"./-Pa_sf8E.js";import"./Dwwhtk8F.js";import"./DSuZ4ZlV.js";const fe={props:{scale:{type:Number,default:1}},computed:{width(){return 360*this.scale}}};function be(y,b,x,w,d,v){return n(),m("div",{class:"flex-none relative flex justify-center",style:$({width:v.width+"px"})},[(n(),m("svg",{class:"text-base-bg-300 absolute inset-0 origin-top-left",style:$({transform:`scale(${x.scale})`}),width:"360",height:"48",viewBox:"0 0 360 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b[0]||(b[0]=[t("path",{d:"M357.237 2.82376e-05C398.658 2.82376e-05 -39.9387 -3.52971e-05 2.95743 2.82376e-05C45.8536 9.17724e-05 66.301 48 115.04 48H251.002C304.338 48 315.815 2.82376e-05 357.237 2.82376e-05Z",fill:"currentColor"},null,-1)]),4)),A(y.$slots,"default")],4)}const xe=U(fe,[["render",be]]),ve={class:"rounded-finsc overflow-hidden h-full w-full text-base bg-base-300 flex flex-col justify-between"},he={class:"flex justify-between items-start relative z-10"},ye={class:"max-w-[calc(50%-155px)] flex-1 flex items-center p-1"},we={class:"text-sm bg-base-300"},ge={class:"p-3"},Se={class:"w-full overflow-hidden -mr-6"},Ce=["onClick"],Ve={class:"bg-white/5 rounded-full relative flex items-center text-center py-1 gap-0 divide-x divide-dashed divide-base-neutral"},ke={class:"px-3 flex items-center"},Be={class:"px-3 flex items-center"},Te={class:"flex-1 sm:flex max-h-[calc(100%-41px)]"},$e={class:"flex-1 h-96 sm:h-auto"},ze={class:"flex-none flex flex-col w-full sm:max-w-64"},Ie={class:"flex-none h-56 mb-2"},Me={class:"flex-1 overflow-hidden max-h-full relative"},Pe={__name:"BoxTV",setup(y){const b=["FPT","HPG","TCB","MSN","VIC","MWG","VNM","VND","DGC","DPM","BSR"],{emit:x}=re(),w=r(1),d=r(""),v=r(null),h=r(!1),u=ae(),c=_(()=>u.syms),N=_(()=>b.filter(e=>!c.value.includes(e))),a=ie("symbolLocal","FPT"),S=r({}),C=r({}),D=_(()=>u.dataSI),L=_(()=>u.dataTP),V=_(()=>ce(S.value,C.value));z(()=>D.value,e=>{e.symbol===a.value&&(S.value=e)}),z(()=>L.value,e=>{e.symbol===a.value&&(C.value=e)});const k=e=>{x("eSymbol",{symbol:e}),a.value=e,v.value.updateSymbol(e)},j=e=>{c.value.includes(e)||c.value.push(e),u.setSyms(c.value)},q=e=>{const l=c.value.filter(p=>p!==e);u.setSyms(l),w.value++},B=r([]);return Q(async()=>{x("eSymbol",{symbol:a.value}),B.value=await ne("/static/tv/data/symbol.json")}),(e,l)=>{var T;const p=ee,F=te,J=se,E=oe,G=Y("Vue3Marquee"),R=le,Z=xe;return n(),m("div",ve,[t("div",he,[t("div",ye,[o(E,{popper:{placement:"bottom-start"}},{panel:f(()=>[t("div",we,[t("div",ge,[o(J,{modelValue:s(d),"onUpdate:modelValue":l[0]||(l[0]=i=>I(d)?d.value=i:null),icon:"i-ri-search-line",size:"sm",color:"white",trailing:!1,placeholder:"Search..."},null,8,["modelValue"])]),o(_e,{search:s(d),items:s(B),onChangeSymbol:j},null,8,["search","items"])])]),default:f(()=>[o(F,{popper:{placement:"right"},text:"Thêm mã quan tâm"},{default:f(()=>[t("button",{class:M(["bg-white/5 hover:bg-base-100 rounded-full p-2 flex items-center",{"bg-base-300":s(N).length===0}])},[o(p,{name:"i-ri-add-line",size:"20"})],2)]),_:1})]),_:1}),t("div",Se,[(n(),g(G,{duration:30,key:s(w)},{default:f(()=>[(n(!0),m(P,null,K(s(c),(i,H)=>(n(),m("div",{key:H,class:M(["rounded-full px-3 py-1 border border-transparent whitespace-nowrap flex items-center mr-3",s(a)===i?"bg-base-100":"border-base-neutral"])},[t("span",{class:"cursor-pointer hover:text-base-primary",onClick:W=>k(i)},O(i),9,Ce),o(p,{name:"i-ri-close-line",size:"16",class:"ml-1 cursor-pointer hover:text-base-secondary",onClick:W=>q(i)},null,8,["onClick"])],2))),128))]),_:1}))])]),o(Z,{scale:.86},{default:f(()=>[t("div",Ve,[t("div",ke,[l[2]||(l[2]=X(" 65 ")),o(p,{name:"i-ri-wallet-3-line",class:"ml-1"})]),t("div",Be,[o(R,{modelValue:s(h),"onUpdate:modelValue":l[1]||(l[1]=i=>I(h)?h.value=i:null),size:"xl","on-icon":"i-ri-exchange-dollar-line","off-icon":"i-ri-funds-line",ui:{inactive:"bg-yellow-500",icon:{off:"text-yellow-500"}}},null,8,["modelValue"])])])]),_:1}),l[3]||(l[3]=t("div",{class:"max-w-[calc(50%-155px)] flex-1 p-2 ml-2"},null,-1))]),t("div",Te,[t("div",$e,[o(me,{ref_key:"tvChart",ref:v,symbol:s(a),"onUpdate:symbol":k},null,8,["symbol"])]),t("div",ze,[s(h)?(n(),g(de,{key:0,list:(T=s(V))==null?void 0:T.list},null,8,["list"])):(n(),m(P,{key:1},[t("div",Ie,[(n(),g(ue,{key:s(a),local:"",symbol:"symbolLocal",data:s(V)},null,8,["data"]))]),t("div",Me,[o(pe,{symbol:s(a),style:{"border-radius":"0 !important"}},null,8,["symbol"])])],64))])])])}}},tt=U(Pe,[["__scopeId","data-v-33f2a160"]]);export{tt as default};
