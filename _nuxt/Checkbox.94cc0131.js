import{_ as S,bH as B,bI as p,f as V,b5 as f,x as g,bJ as q,o,c as s,a as i,bw as A,bi as $,ao as w,aP as I,d as N,t as b,aq as n,A as d}from"./entry.315daf49.js";import{t as j}from"./tw-merge.ef7dc0f7.js";import{v as O,u as D}from"./ui.config.ea598d69.js";import{u as F}from"./useFormGroup.77201ece.js";import{u as J}from"./uid.12f507af.js";import"./index.5541bdbc.js";const h=B(p.ui.strategy,p.ui.checkbox,O),M=V({inheritAttrs:!1,props:{id:{type:String,default:()=>J()},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>h.default.color,validator(e){return p.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:l}){const{ui:a,attrs:m}=D("checkbox",f(e,"ui"),h,f(e,"class")),{emitFormChange:c,color:r,name:t,inputId:y}=F(e),v=g({get(){return e.modelValue},set(u){l("update:modelValue",u)}}),k=u=>{l("change",u),c()},C=g(()=>j(q(a.value.base,a.value.rounded,a.value.background,a.value.border,a.value.ring.replaceAll("{color}",r.value),a.value.color.replaceAll("{color}",r.value)),e.inputClass));return{ui:a,attrs:m,toggle:v,inputId:y,name:t,inputClass:C,onChange:k}}}),P={class:"flex items-center h-5"},U=["id","name","required","value","disabled","checked","indeterminate"],z={key:0,class:"ms-3 text-sm"},E=["for"];function G(e,l,a,m,c,r){return o(),s("div",{class:n(e.ui.wrapper)},[i("div",P,[A(i("input",w({id:e.inputId,"onUpdate:modelValue":l[0]||(l[0]=t=>e.toggle=t),name:e.name,required:e.required,value:e.value,disabled:e.disabled,checked:e.checked,indeterminate:e.indeterminate,type:"checkbox",class:["form-checkbox",e.inputClass]},e.attrs,{onChange:l[1]||(l[1]=(...t)=>e.onChange&&e.onChange(...t))}),null,16,U),[[$,e.toggle]])]),e.label||e.$slots.label?(o(),s("div",z,[i("label",{for:e.inputId,class:n(e.ui.label)},[I(e.$slots,"label",{},()=>[N(b(e.label),1)]),e.required?(o(),s("span",{key:0,class:n(e.ui.required)},"*",2)):d("",!0)],10,E),e.help?(o(),s("p",{key:0,class:n(e.ui.help)},b(e.help),3)):d("",!0)])):d("",!0)],2)}const W=S(M,[["render",G]]);export{W as default};
