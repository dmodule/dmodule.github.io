import{_ as le}from"./B5J8M9Gg.js";import{bL as se,ck as ne,cl as oe,bs as y,bq as V,by as i,cm as K,cn as Z,br as t,bP as j,bF as ae,a_ as D,bB as $,bC as ie,bW as z,bx as l,bD as k,bt as de,r as m,b3 as M,bb as ue,bA as x,bQ as re,c1 as I,bE as me}from"./B2zngJ72.js";import{p as C,b as ce,f as N}from"./CEPNV0NR.js";import{h as pe,t as be,l as R,a as ve}from"./tWTntGxj.js";import fe from"./Ck1mNK7n.js";import"./2DHyWFFj.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";const xe={directives:{maska:ne},props:{modelValue:{},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:"VND"},ext:{type:Boolean,default:!1},extInput:{type:Boolean,default:!1},extPlaceholder:{default:""},step:{type:Number,default:100},min:{type:Number,default:0}},data(){return{options:{preProcess:s=>s.replace(/[$,]/g,""),postProcess:s=>s?new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:s.includes(".")?1:0,maximumFractionDigits:2}).format(s):""},percent:null}},computed:{currency:{get(){return this.modelValue},set(s){this.$emit("update:modelValue",s)}}},watch:{percent(s){this.$emit("update:percent",s)}},methods:{parseMoney:C,decrease(){let s=this.parseMoney(this.currency);s-=this.step,s<=this.min&&(s=this.min),this.$emit("update:modelValue",s)},increase(){let s=this.parseMoney(this.currency);s+=this.step,this.$emit("update:modelValue",s)}}},ye={class:"w-full flex items-center justify-between bg-base-200 rounded-full p-1 text-sm"},Ve=["disabled","placeholder"],_e={class:"flex"},ge={key:0,class:"flex w-20 items-center bg-base-100 rounded-full px-2"},he=["disabled","placeholder"],ke={key:0};function we(s,c,d,w,v,o){const u=ae,r=oe("maska");return y(),V("div",ye,[i(u,{onClick:o.decrease,disabled:d.disabled,size:"xs",icon:"i-ri-subtract-line",color:"white",variant:"ghost",square:"",ui:{rounded:"rounded-full"}},null,8,["onClick","disabled"]),K(t("input",{"onUpdate:modelValue":c[0]||(c[0]=p=>o.currency=p),class:"flex-1 w-full bg-transparent text-center outline-none",type:"text",disabled:d.disabled,placeholder:d.placeholder},null,8,Ve),[[Z,o.currency],[r,v.options]]),t("div",_e,[i(u,{onClick:o.increase,disabled:d.disabled,size:"xs",icon:"i-ri-add-line",color:"white",variant:"ghost",square:"",ui:{rounded:"rounded-full"}},null,8,["onClick","disabled"]),d.ext?(y(),V("div",ge,[K(t("input",{"onUpdate:modelValue":c[1]||(c[1]=p=>v.percent=p),disabled:d.disabled||!d.extInput,class:"flex-1 w-full text-center bg-transparent outline-none",type:"text",placeholder:d.extPlaceholder},null,8,he),[[Z,v.percent]]),d.extInput?(y(),V("span",ke,"%")):j("",!0)])):j("",!0)])])}const Se=se(xe,[["render",we]]),Ce={class:"flex flex-wrap gap-2"},Ue=["onClick"],Pe={__name:"Buttons",props:{modelValue:{},items:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(s,{emit:c}){const d=c,w=s,v=D({get:()=>w.modelValue,set:u=>d("update:modelValue",u)}),o=u=>v.value=u;return(u,r)=>(y(),V("div",Ce,[(y(!0),V($,null,ie(s.items,(p,g)=>(y(),V("button",{key:g,class:z(["w-[52px] rounded-full py-0.5 px-1 bg-base-200 hover:bg-base-primary",[l(v)===p.id?"bg-base-primary":"bg-base-200"]]),onClick:_=>o(p.id)},k(p.name),11,Ue))),128))]))}},Te={class:"relative flex flex-col h-full w-full max-w-sm text-sm"},Be={class:"flex justify-center"},ze={class:"p-1 overflow-auto"},Le={class:"p-1 rounded-lg flex-1 overflow-auto space-y-2"},Me={class:"max-w-full relative"},Ie={class:"flex gap-2"},Ne={class:"flex-1"},je={class:"flex-none w-2/5"},De=["disabled"],$e={class:"flex justify-between"},Ae={class:"flex justify-between"},Fe={class:"ml-1 bg-orange-400/40 text-orange-400 px-1 py-0.5 rounded-md"},Oe={class:"text-orange-400"},qe={class:"flex justify-between font-semibold mt-2"},Ee={class:"text-left"},Ge={class:"text-purple-400 font-normal"},Ke={class:"text-center"},Ze={class:"text-orange-400 font-normal"},Re={class:"text-right"},Qe={class:"text-sky-400 font-normal"},We={key:0,class:"absolute inset-0 backdrop-blur-xl bg-black/10 flex items-center justify-center"},nt={__name:"BoxExchange",props:{symbol:{type:String,default:""},textSize:{type:String,default:"1.1rem"},dataSI:{type:Object,default:()=>({})},dataTP:{type:Object,default:()=>({})}},setup(s){const c=s,d=de(),w=m(!1),v=m(1e8),o=m(null),u=m(null),r=m(null),p=m(null),g=m(null),_=m(1),U=m({id:"limit",label:"Giới hạn"}),Q=m([{id:"condition",label:"Điều kiện"},{id:"limit",label:"Giới hạn"}]),P=m("MP"),W=[{id:"MP",name:"MP"},{id:"LO",name:"LO"},{id:"ATO",name:"ATO"},{id:"ATC",name:"ATC"}],T=m(null),X=[{id:.25,name:"25%"},{id:.5,name:"50%"},{id:.75,name:"75%"},{id:1,name:"100%"}],B=m({}),{auth:Y}=ce(),S=D(()=>pe(c.dataSI,c.dataTP)),L=D(()=>{var b;let a=0,e=0,f=0;const h=(b=S.value)==null?void 0:b.list;return h.length===7&&(a=h[0].price,e=h[3].price,f=h[6].price),{tran:a,tc:e,san:f}}),H=async()=>{w.value=!0,(await ve(c.symbol,_.value?"BUY":"SELL",P.value,o.value*1e3,C(r.value))).status?d.add({title:"Đặt lệnh thành công !"}):d.add({title:"Đặt lệnh thất bại !",color:"red"}),w.value=!1},J=a=>{p.value=o.value+1*a},ee=a=>{g.value=o.value-1*a},te=()=>{const a=C(u.value),e=C(o.value)*1e3,f=C(g.value)*1e3;if(!v.value||!e||!a){r.value=null;return}const b=v.value*a/100/(e-f);r.value=Math.round(b/100)*100},A=a=>{_.value=a};return M([o,u,g],()=>{te()}),M(()=>c.symbol,async()=>{var a,e,f;(a=S.value)!=null&&a.list&&((e=S.value)==null?void 0:e.list.length)===7&&(o.value=(f=S.value)==null?void 0:f.list[3].price)},{immediate:!0}),M(()=>T.value,a=>{var e;r.value=((e=B.value)==null?void 0:e.qmax)||0*a}),ue(async()=>{B.value=await be(c.symbol,o.value*1e3)}),(a,e)=>{var O,q,E,G;const f=le,h=me,b=Se,F=Pe;return y(),V("div",Te,[t("div",Be,[i(f,{onClick:e[0]||(e[0]=n=>A(1)),scale:.4,text:"Mua",textSize:s.textSize,class:z(["cursor-pointer",{"text-base-primary":l(_),"text-base-bg-100":!l(_)}])},null,8,["textSize","class"]),i(f,{onClick:e[1]||(e[1]=n=>A(0)),scale:.4,text:"Bán",textSize:s.textSize,class:z(["cursor-pointer",{"text-base-bg-100":l(_),"text-base-secondary":!l(_)}])},null,8,["textSize","class"])]),t("div",ze,[t("div",Le,[t("div",Me,[i(h,{modelValue:l(U),"onUpdate:modelValue":e[2]||(e[2]=n=>x(U)?U.value=n:null),options:l(Q),variant:"none",class:"bg-base-200 rounded-full py-0.5",ui:{base:"mx-auto font-semibold uppercase indent-4"}},null,8,["modelValue","options"])]),((O=l(U))==null?void 0:O.id)==="limit"?(y(),V($,{key:0},[t("div",null,[e[13]||(e[13]=t("div",{class:"ml-2 mb-0.5"},"Giá vào",-1)),i(b,{modelValue:l(o),"onUpdate:modelValue":e[3]||(e[3]=n=>x(o)?o.value=n:null),placeholder:"",step:.1},null,8,["modelValue"]),i(F,{modelValue:l(P),"onUpdate:modelValue":e[4]||(e[4]=n=>x(P)?P.value=n:null),items:W,class:"mt-2"},null,8,["modelValue"])]),t("div",null,[e[14]||(e[14]=t("div",{class:"ml-2 mb-0.5"},"Khối lượng",-1)),i(b,{modelValue:l(r),"onUpdate:modelValue":e[5]||(e[5]=n=>x(r)?r.value=n:null),placeholder:"cổ phiếu"},null,8,["modelValue"]),i(F,{modelValue:l(T),"onUpdate:modelValue":e[6]||(e[6]=n=>x(T)?T.value=n:null),items:X,class:"mt-2"},null,8,["modelValue"])])],64)):(y(),V($,{key:1},[t("div",Ie,[t("div",Ne,[e[15]||(e[15]=t("div",{class:"ml-2 mb-0.5"},"Giá vào",-1)),i(b,{modelValue:l(o),"onUpdate:modelValue":e[7]||(e[7]=n=>x(o)?o.value=n:null),step:.1},null,8,["modelValue"])]),t("div",je,[e[16]||(e[16]=t("div",{class:"ml-2 mb-0.5"},"Rủi ro / Nav",-1)),i(b,{modelValue:l(u),"onUpdate:modelValue":e[8]||(e[8]=n=>x(u)?u.value=n:null),placeholder:"%",step:.1},null,8,["modelValue"])])]),t("div",null,[e[17]||(e[17]=t("div",{class:"ml-2 mb-0.5"},"Khối lượng",-1)),i(b,{modelValue:l(r),"onUpdate:modelValue":e[9]||(e[9]=n=>x(r)?r.value=n:null),placeholder:"cổ phiếu",ext:"",extPlaceholder:(q=l(B))==null?void 0:q.qmax},null,8,["modelValue","extPlaceholder"])]),t("div",null,[e[18]||(e[18]=t("div",{class:"ml-2 mb-0.5"},"Chốt lãi",-1)),i(b,{modelValue:l(p),"onUpdate:modelValue":e[10]||(e[10]=n=>x(p)?p.value=n:null),disabled:!l(o),ext:"",extInput:"",step:.1,"onUpdate:percent":J},null,8,["modelValue","disabled"])]),t("div",null,[e[19]||(e[19]=t("div",{class:"ml-2 mb-0.5"},"Cắt lỗ",-1)),i(b,{modelValue:l(g),"onUpdate:modelValue":e[11]||(e[11]=n=>x(g)?g.value=n:null),disabled:!l(o),ext:"",extInput:"",step:.1,"onUpdate:percent":ee},null,8,["modelValue","disabled"])])],64)),t("div",null,[t("button",{disabled:l(w),onClick:H,class:z(["mt-2 rounded-full w-full p-1.5 font-semibold hover:opacity-90",{"bg-base-primary":l(_),"bg-base-secondary":!l(_)}]),style:re({"font-size":s.textSize})}," Xác nhận ",14,De)]),t("div",null,[t("div",null,[t("div",$e,[e[20]||(e[20]=t("b",null,"Nav:",-1)),t("div",null,k(l(N)(l(v)))+"đ",1)]),t("div",Ae,[t("div",null,[e[21]||(e[21]=t("b",null,"Sức mua:",-1)),t("span",Fe,k(l(N)((E=l(B))==null?void 0:E.qmax)),1)]),t("div",Oe,k(l(N)(2e8))+"đ",1)])]),t("div",qe,[t("div",Ee,[e[22]||(e[22]=I(" Trần ")),t("div",Ge,k(l(L).tran),1)]),t("div",Ke,[e[23]||(e[23]=I(" TC ")),t("div",Ze,k(l(L).tc),1)]),t("div",Re,[e[24]||(e[24]=I(" Sàn ")),t("div",Qe,k(l(L).san),1)])]),t("div",null,[e[25]||(e[25]=t("div",{class:"flex justify-between font-semibold mt-2 mb-0.5"},[t("div",null,"Bước giá"),t("div",null,"Khối lượng")],-1)),i(fe,{mode:"list",list:(G=l(S))==null?void 0:G.list},null,8,["list"])])])])]),l(Y).trading_token?j("",!0):(y(),V("div",We,[t("button",{class:"rounded-full py-1 px-2 min-w-48 bg-base-primary",onClick:e[12]||(e[12]=(...n)=>l(R)&&l(R)(...n))}," Đăng nhập để giao dịch ")]))])}}};export{nt as default};
