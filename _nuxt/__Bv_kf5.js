import{r as V,_ as h}from"./E5TdYJ0K.js";import{ac as A,ad as l,_ as $,g as _,af as b,M as u,a9 as k,C as U,o as r,c as i,a as z,s as y,T as v,d as B,t as j,H as w,I as F,W as G,A as N,w as P,U as T,V as I,n as D,aF as s}from"./DeuvRX2B.js";import{u as E}from"./DYom9OWZ.js";import"./RrVta6Jm.js";const H={wrapper:"relative flex items-start",fieldset:"",legend:"text-sm font-medium text-gray-700 dark:text-gray-200 mb-1",default:{color:"primary"}},d=A(l.ui.strategy,l.ui.radioGroup,H),L=A(l.ui.strategy,l.ui.radio,V),M=_({components:{URadio:h},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},name:{type:String,default:null},legend:{type:String,default:null},options:{type:Array,default:()=>[]},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},disabled:{type:Boolean,default:!1},color:{type:String,default:()=>d.default.color,validator(e){return l.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiRadio:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{ui:m,attrs:c}=b("radioGroup",u(e,"ui"),d,u(e,"class")),{ui:g}=b("radio",u(e,"uiRadio"),L),{emitFormChange:p,color:n,name:t}=E(e,d);k("radio-group",{color:n,name:t});const f=a=>{o("update:modelValue",a),o("change",a),p()},C=a=>s(a,e.valueAttribute,s(a,e.optionAttribute)),O=a=>s(a,e.optionAttribute,s(a,e.valueAttribute)),R=a=>["string","number","boolean"].includes(typeof a)?{value:a,label:a}:{...a,value:C(a),label:O(a)},S=U(()=>e.options.map(a=>R(a)));return{ui:m,uiRadio:g,attrs:c,normalizedOptions:S,onUpdate:f}}});function W(e,o,m,c,g,p){const n=h;return r(),i("div",{class:y(e.ui.wrapper)},[z("fieldset",D(e.attrs,{class:e.ui.fieldset}),[e.legend||e.$slots.legend?(r(),i("legend",{key:0,class:y(e.ui.legend)},[v(e.$slots,"legend",{},()=>[B(j(e.legend),1)])],2)):w("",!0),(r(!0),i(F,null,G(e.normalizedOptions,t=>(r(),N(n,{key:t.value,label:t.label,"model-value":e.modelValue,value:t.value,help:t.help,disabled:t.disabled||e.disabled,ui:e.uiRadio,onChange:f=>e.onUpdate(t.value)},{label:P(()=>[v(e.$slots,"label",T(I({option:t})))]),_:2},1032,["label","model-value","value","help","disabled","ui","onChange"]))),128))],16)],2)}const X=$(M,[["render",W]]);export{X as default};