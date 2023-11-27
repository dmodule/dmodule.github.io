import{_ as S,bN as w,bO as c,g as B,bQ as q,ba as g,U as b,bS as V,bT as A,o as l,c as o,a as d,bA as $,bm as N,y as I,v as O,d as j,t as m,q as s,s as u}from"./entry.dd57515c.js";import{u as U}from"./useFormGroup.9469e0b5.js";import"./uid.12f507af.js";const D={wrapper:"relative flex items-start",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",rounded:"rounded",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}},y=w(c.ui.strategy,c.ui.checkbox,D),F=B({inheritAttrs:!1,props:{id:{type:String,default:()=>null},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>y.default.color,validator(e){return c.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:r}){const{ui:a,attrs:f}=q("checkbox",g(e,"ui"),y,g(e,"class")),{emitFormChange:p,color:n,name:t,inputId:h}=U(e),k=b({get(){return e.modelValue},set(i){r("update:modelValue",i)}}),v=i=>{r("change",i),p()},C=b(()=>V(A(a.value.base,a.value.rounded,a.value.background,a.value.border,a.value.ring.replaceAll("{color}",n.value),a.value.color.replaceAll("{color}",n.value)),e.inputClass));return{ui:a,attrs:f,toggle:k,inputId:h,name:t,inputClass:C,onChange:v}}}),M={class:"flex items-center h-5"},T=["id","name","required","value","disabled","checked","indeterminate"],x={key:0,class:"ms-3 flex flex-col"},z=["for"];function E(e,r,a,f,p,n){return l(),o("div",{class:s(e.ui.wrapper)},[d("div",M,[$(d("input",I({id:e.inputId,"onUpdate:modelValue":r[0]||(r[0]=t=>e.toggle=t),name:e.name,required:e.required,value:e.value,disabled:e.disabled,checked:e.checked,indeterminate:e.indeterminate,type:"checkbox",class:["form-checkbox",e.inputClass]},e.attrs,{onChange:r[1]||(r[1]=(...t)=>e.onChange&&e.onChange(...t))}),null,16,T),[[N,e.toggle]])]),e.label||e.$slots.label?(l(),o("div",x,[d("label",{for:e.inputId,class:s(e.ui.label)},[O(e.$slots,"label",{},()=>[j(m(e.label),1)]),e.required?(l(),o("span",{key:0,class:s(e.ui.required)},"*",2)):u("",!0)],10,z),e.help?(l(),o("p",{key:0,class:s(e.ui.help)},m(e.help),3)):u("",!0)])):u("",!0)],2)}const Q=S(F,[["render",E]]);export{Q as default};
