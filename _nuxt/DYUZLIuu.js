import{r as B,_ as A}from"./gAV5WVEa.js";import{ad as C,ae as l,_ as k,g as z,ag as h,L as n,ab as G,B as U,o as r,c as d,a as j,q as O,T as i,d as w,t as N,G as F,H as T,W as E,z as L,w as S,m as c,aE as s}from"./CK5d3MQh.js";import{u as q}from"./ZeUA9XZD.js";import"./DoSHHGPH.js";import"./Bri_7zzn.js";const D={wrapper:"relative flex items-start",fieldset:"",legend:"text-sm font-medium text-gray-700 dark:text-gray-200 mb-1",default:{color:"primary"}},m=C(l.ui.strategy,l.ui.radioGroup,D),H=C(l.ui.strategy,l.ui.radio,B),I=z({components:{URadio:A},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Boolean],default:""},name:{type:String,default:null},legend:{type:String,default:null},options:{type:Array,default:()=>[]},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},disabled:{type:Boolean,default:!1},color:{type:String,default:()=>m.default.color,validator(e){return l.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiRadio:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:u}){const{ui:f,attrs:g}=h("radioGroup",n(e,"ui"),m,n(e,"class")),{ui:p}=h("radio",n(e,"uiRadio"),H),{emitFormChange:b,color:o,name:t}=q(e,m);G("radio-group",{color:o,name:t});const y=a=>{u("update:modelValue",a),u("change",a),b()},v=a=>s(a,e.valueAttribute,s(a,e.optionAttribute)),V=a=>s(a,e.optionAttribute,s(a,e.valueAttribute)),$=a=>e.modelValue===v(a),R=a=>["string","number","boolean"].includes(typeof a)?{value:a,label:a}:{...a,value:v(a),label:V(a),selected:$(a)},_=U(()=>e.options.map(a=>R(a)));return{ui:f,uiRadio:p,attrs:g,normalizedOptions:_,onUpdate:y}}});function P(e,u,f,g,p,b){const o=A;return r(),d("div",{class:O(e.ui.wrapper)},[j("fieldset",c(e.attrs,{class:e.ui.fieldset}),[e.legend||e.$slots.legend?(r(),d("legend",{key:0,class:O(e.ui.legend)},[i(e.$slots,"legend",{},()=>[w(N(e.legend),1)])],2)):F("",!0),(r(!0),d(T,null,E(e.normalizedOptions,t=>(r(),L(o,{key:t.value,label:t.label,"model-value":e.modelValue,value:t.value,help:t.help,disabled:t.disabled||e.disabled,ui:e.uiRadio,onChange:y=>e.onUpdate(t.value)},{label:S(()=>[i(e.$slots,"label",c({ref_for:!0},{option:t,selected:t.selected}))]),help:S(()=>[i(e.$slots,"help",c({ref_for:!0},{option:t,selected:t.selected}))]),_:2},1032,["label","model-value","value","help","disabled","ui","onChange"]))),128))],16)],2)}const X=k(I,[["render",P]]);export{X as default};
