import{r as V,_ as h}from"./B6o879A9.js";import{a4 as A,a5 as l,_ as $,g as _,a7 as b,a8 as u,a0 as k,C as z,o as r,c as i,a as B,s as y,K as v,d as N,t as U,H as j,I as w,N as G,A as F,w as P,L as I,M as L,n as T,ay as s}from"./EZFDOare.js";import{u as D}from"./D52dOO7E.js";import"./BHsN6KhG.js";const E={wrapper:"relative flex items-start",fieldset:"",legend:"text-sm font-medium text-gray-700 dark:text-gray-200 mb-1",default:{color:"primary"}},d=A(l.ui.strategy,l.ui.radioGroup,E),H=A(l.ui.strategy,l.ui.radio,V),K=_({components:{URadio:h},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},name:{type:String,default:null},legend:{type:String,default:null},options:{type:Array,default:()=>[]},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},disabled:{type:Boolean,default:!1},color:{type:String,default:()=>d.default.color,validator(e){return l.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiRadio:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{ui:m,attrs:c}=b("radioGroup",u(e,"ui"),d,u(e,"class")),{ui:g}=b("radio",u(e,"uiRadio"),H),{emitFormChange:p,color:n,name:t}=D(e,d);k("radio-group",{color:n,name:t});const f=a=>{o("update:modelValue",a),o("change",a),p()},C=a=>s(a,e.valueAttribute,s(a,e.optionAttribute)),O=a=>s(a,e.optionAttribute,s(a,e.valueAttribute)),R=a=>["string","number","boolean"].includes(typeof a)?{value:a,label:a}:{...a,value:C(a),label:O(a)},S=z(()=>e.options.map(a=>R(a)));return{ui:m,uiRadio:g,attrs:c,normalizedOptions:S,onUpdate:f}}});function M(e,o,m,c,g,p){const n=h;return r(),i("div",{class:y(e.ui.wrapper)},[B("fieldset",T(e.attrs,{class:e.ui.fieldset}),[e.legend||e.$slots.legend?(r(),i("legend",{key:0,class:y(e.ui.legend)},[v(e.$slots,"legend",{},()=>[N(U(e.legend),1)])],2)):j("",!0),(r(!0),i(w,null,G(e.normalizedOptions,t=>(r(),F(n,{key:t.value,label:t.label,"model-value":e.modelValue,value:t.value,help:t.help,disabled:t.disabled||e.disabled,ui:e.uiRadio,onChange:f=>e.onUpdate(t.value)},{label:P(()=>[v(e.$slots,"label",I(L({option:t})))]),_:2},1032,["label","model-value","value","help","disabled","ui","onChange"]))),128))],16)],2)}const X=$(K,[["render",M]]);export{X as default};
