import{_ as C,a as N,b as O}from"./4V1T2zZU.js";import{_ as k}from"./uGsHS7BS.js";import{_ as U}from"./4894OEYp.js";import{c as S,d as F}from"./Bm3oCz4G.js";import M from"./BzKkS-KP.js";import{bO as P,cs as R,bs as m,bI as g,by as v,bR as Z,bM as $,a_ as b,bw as t,bq as f,bx as c,bA as x,bB as h,bu as z,bv as D,bt as H,br as y,bS as I}from"./Nng3t-Yx.js";import{_ as T,a as q}from"./DHsSxgvJ.js";import{i as A}from"./Bq2qyzQR.js";import"./kWqY28R3.js";import"./C83wUoeB.js";import"./DdDBkiWh.js";import"./BGoHJq6L.js";import"./Bnw5sLI9.js";import"./CUGPpDk2.js";const E={components:{ZuCardBase:M},props:{modelValue:{type:Object,default:()=>({className:"",attrs:{},state:{}})}},data:()=>({loaded:!1}),computed:{edit(){return!0},info:{get(){const l=S(this.modelValue.attrs);return{...this.modelValue,state:l}},set(l){this.$emit("update:modelValue",l)}}},methods:{async onVisibled(){this.loaded=!0}}};function G(l,i,o,p,n,a){const u=R("ZuCardBase"),_=U;return m(),g(_,{modelValue:a.info,"onUpdate:modelValue":i[0]||(i[0]=e=>a.info=e),edit:a.edit,loaded:l.loaded,onOnVisibled:a.onVisibled},{default:v(({key:e})=>[l.loaded?(m(),g(u,Z({key:e},a.info.design,{custom:a.info.custom,"model-value":a.info.attrs}),null,16,["custom","model-value"])):$("",!0)]),_:1},8,["modelValue","edit","loaded","onOnVisibled"])}const L=P(E,[["render",G]]),J={key:0,class:"mt-8 md:mt-12 lg:mt-16"},K={key:0},Q={key:1,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12"},W={__name:"Multi",props:["modelValue","type","perView","spacing","autoplay"],emits:["update:modelValue"],setup(l,{emit:i}){const o=l,p=i,n=b({get:()=>o.modelValue,set:a=>{p("update:modelValue",a)}});return(a,u)=>{const _=L,e=T,d=q;return t(n)?(m(),f("div",J,[o.type==="carousel"?(m(),f("div",K,[c(d,{"per-view":o.perView,spacing:o.spacing,autoplay:o.autoplay},{default:v(()=>[(m(!0),f(x,null,h(t(n),(r,s)=>(m(),g(e,{key:s},{default:v(()=>[c(_,{modelValue:t(n)[s],"onUpdate:modelValue":V=>t(n)[s]=V},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1},8,["per-view","spacing","autoplay"])])):(m(),f("div",Q,[(m(!0),f(x,null,h(t(n),(r,s)=>(m(),g(_,{modelValue:t(n)[s],"onUpdate:modelValue":V=>t(n)[s]=V,key:s},null,8,["modelValue","onUpdate:modelValue"]))),128))]))])):$("",!0)}}},X={class:"relative px-4 py-32 lg:flex lg:items-center lg:justify-center"},Y={class:"w-full"},ee={class:"mx-auto max-w-6xl text-center"},fe={__name:"Base",props:{custom:{type:Object},modelValue:{type:Object,default(){return{}}},addon:{type:Object,default(){return{}}}},emits:["update:modelValue"],setup(l,{emit:i}){const o=l,p=b(()=>{var r,s;const e=((r=o.custom)==null?void 0:r.hue)??"",d=((s=o.custom)==null?void 0:s.className)??"";return{hue:e,className:d}}),n=b(()=>p.value.hue?{type:"Simple",bg:p.value.hue}:{type:"Radial2Middle",bg:""}),a=i,u=b(()=>A(o.modelValue)?o.modelValue:{...F(["subject","title","description"]),series:[]}),_=(e,d)=>{const r={...u};r.series[d]=e,a("update:modelValue",r)};return(e,d)=>{const r=C,s=N,V=O,w=k,B=W;return m(),f("section",{class:I(["relative",[t(p).className]])},[c(r,z(D(t(n))),null,16),H(e.$slots,"default"),y("div",X,[y("div",Y,[y("div",ee,[c(s,{modelValue:t(u).subject},null,8,["modelValue"]),c(V,{modelValue:t(u).title},null,8,["modelValue"]),c(w,{modelValue:t(u).description,className:"mt-4 text-justify"},null,8,["modelValue"])]),c(B,Z({class:"mx-auto max-w-6xl",modelValue:t(u).series,"onUpdate:modelValue":d[0]||(d[0]=j=>_(j,e.key))},o.addon),null,16,["modelValue"])])])],2)}}};export{fe as default};