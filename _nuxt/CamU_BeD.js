import{_ as O,a as U,b as E}from"./DfpLb-CI.js";import{_ as I}from"./DSQc2Vkf.js";import{_ as M}from"./D_dGMmYm.js";import{f as F,i as L,c as P}from"./DUiTNb9Q.js";import{bF as S,bG as R,b1 as r,bj as w,b8 as x,bs as Z,bu as k,a$ as f,b3 as z,r as j,aG as G,aJ as q,bm as H,b0 as y,bt as $,b7 as _,aO as T,be as D,b2 as b,b6 as i,ba as N,bb as B,b4 as J,b5 as A}from"./D0HIuDqn.js";import{s as K}from"./x-MpkMrH.js";import{y as Q}from"./Bnw5sLI9.js";import"./BXs7iR5A.js";import"./BnaH1qzr.js";import"./6ceMz00Z.js";import"./6bUBh_yt.js";const W={props:{modelValue:{type:Object,default:()=>({className:"",attrs:{},state:{}})}},data:()=>({loaded:!1}),computed:{edit(){return!0},info:{get(){const t=F(this.modelValue.attrs);return{...this.modelValue,state:t}},set(t){this.$emit("update:modelValue",t)}}},methods:{async onVisibled(){this.loaded=!0}}};function X(t,l,s,c,e,o){const m=R("ZuCardBase"),p=M;return r(),w(p,{modelValue:o.info,"onUpdate:modelValue":l[0]||(l[0]=a=>o.info=a),edit:o.edit,loaded:t.loaded,onOnVisibled:o.onVisibled},{default:x(({key:a})=>[t.loaded?(r(),w(m,Z({key:a},o.info.design,{custom:o.info.custom,"model-value":o.info.attrs}),null,16,["custom","model-value"])):k("",!0)]),_:1},8,["modelValue","edit","loaded","onOnVisibled"])}const Y=S(W,[["render",X]]),ee={},te={class:"keen-slider__slide"};function se(t,l){return r(),f("div",te,[z(t.$slots,"default")])}const ae=S(ee,[["render",se]]),oe={class:"relative"},le={__name:"Base",props:{length:{type:Number,default:0},perView:{type:Number,default:3},spacing:{type:Number,default:16},autoplay:{type:Number,default:0},arrowStyle:{type:String,default:"right"},size:{type:String,default:"xl"},fullscreen:{type:Boolean,default:!1}},setup(t){const l=t,s=j(null),c=j(!0);let e=null,o=null;const m={loop:!0,mode:"free-snap",slides:{perView:l.perView,spacing:l.spacing},breakpoints:l.fullscreen?{}:{"(max-width: 1024px)":{slides:{perView:2,spacing:16}},"(max-width: 640px)":{slides:{perView:1,spacing:8}}}},p=()=>{e&&e.destroy(),T(()=>{e=new Q(s.value,m),l.length>1?(c.value=!0,l.autoplay&&(e.on("created",a),e.on("dragStart",u),e.on("dragEnd",a),s.value.addEventListener("mouseover",u),s.value.addEventListener("mouseout",a))):c.value=!1})},a=()=>{o=K(()=>{e&&e.next()},autoplay)},u=()=>{clearInterval(o)},d=()=>{e&&e.prev()},n=()=>{e&&e.next()},V=()=>{e&&e.update()};return G(l,()=>{p()}),q(()=>{p(),window.addEventListener("resize",V)}),H(()=>{e&&e.destroy(),u(),window.removeEventListener("resize",V)}),(h,v)=>{const g=D;return r(),f("div",oe,[y("div",{ref_key:"slider",ref:s,class:$(["keen-slider mx-auto",{"h-full":t.fullscreen}])},[z(h.$slots,"default")],2),c.value?(r(),f("div",{key:0,dir:"ltr",class:$({"flex gap-4 justify-end py-4":t.arrowStyle==="right","keen-arrow":t.arrowStyle==="center"})},[_(g,{class:"keen-arrow-left",icon:"i-ri-arrow-left-s-line",size:t.size,color:"white",square:"",variant:"solid",ui:{rounded:"rounded-full"},onClick:v[0]||(v[0]=C=>d())},null,8,["size"]),_(g,{icon:"i-ri-arrow-right-s-line",class:"keen-arrow-right",size:t.size,color:"white",square:"",variant:"solid",ui:{rounded:"rounded-full"},onClick:v[1]||(v[1]=C=>n())},null,8,["size"])],2)):k("",!0)])}}},ne={key:0,class:"mt-8 md:mt-12 lg:mt-16"},re={key:0},ie={key:1,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12"},ue={__name:"Multi",props:["modelValue","type","perView","spacing","autoplay"],emits:["update:modelValue"],setup(t,{emit:l}){const s=t,c=l,e=b({get:()=>s.modelValue,set:o=>{c("update:modelValue",o)}});return(o,m)=>{const p=Y,a=ae,u=le;return i(e)?(r(),f("div",ne,[s.type==="carousel"?(r(),f("div",re,[_(u,{"per-view":s.perView,spacing:s.spacing,autoplay:s.autoplay},{default:x(()=>[(r(!0),f(N,null,B(i(e),(d,n)=>(r(),w(a,{key:n},{default:x(()=>[_(p,{modelValue:i(e)[n],"onUpdate:modelValue":V=>i(e)[n]=V},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1},8,["per-view","spacing","autoplay"])])):(r(),f("div",ie,[(r(!0),f(N,null,B(i(e),(d,n)=>(r(),w(p,{modelValue:i(e)[n],"onUpdate:modelValue":V=>i(e)[n]=V,key:n},null,8,["modelValue","onUpdate:modelValue"]))),128))]))])):k("",!0)}}},de={class:"relative px-4 py-32 lg:flex lg:items-center lg:justify-center"},ce={class:"w-full"},me={class:"mx-auto max-w-6xl text-center"},$e={__name:"Base",props:{custom:{type:Object},modelValue:{type:Object,default(){return{}}},addon:{type:Object,default(){return{}}}},emits:["update:modelValue"],setup(t,{emit:l}){const s=t,c=b(()=>{var d,n;const a=((d=s.custom)==null?void 0:d.hue)??"",u=((n=s.custom)==null?void 0:n.className)??"";return{hue:a,className:u}}),e=b(()=>c.value.hue?{type:"Simple",bg:c.value.hue}:{type:"Radial2Middle",bg:""}),o=l,m=b(()=>L(s.modelValue)?s.modelValue:{...P(["subject","title","description"]),series:[]}),p=(a,u)=>{const d={...m};d.series[u]=a,o("update:modelValue",d)};return(a,u)=>{const d=O,n=U,V=E,h=I,v=ue;return r(),f("section",{class:$(["relative",[i(c).className]])},[_(d,J(A(i(e))),null,16),z(a.$slots,"default"),y("div",de,[y("div",ce,[y("div",me,[_(n,{modelValue:i(m).subject},null,8,["modelValue"]),_(V,{modelValue:i(m).title},null,8,["modelValue"]),_(h,{modelValue:i(m).description,className:"mt-4 text-justify"},null,8,["modelValue"])]),_(v,Z({class:"mx-auto max-w-6xl",modelValue:i(m).series,"onUpdate:modelValue":u[0]||(u[0]=g=>p(g,a.key))},s.addon),null,16,["modelValue"])])])],2)}}};export{$e as default};
