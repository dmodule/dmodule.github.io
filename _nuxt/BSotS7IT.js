import{_ as b}from"./BAr9hIk4.js";import V from"./98lVX-dd.js";import{S as v,W as g,a as y}from"./kdet11BX.js";import{r as u,b5 as x,aG as O,b4 as i,bm as n,bb as S,b9 as t,bv as h,bx as j,bc as k}from"./PQ9VTHH8.js";import"./NVEJA4Ar.js";import"./Wnbtm3Ff.js";import"./DCjMSkS8.js";import"./CrLGZcW8.js";import"./Bwg8ZOy_.js";import"./CA07Ia20.js";import"./C3Hh7GIq.js";import"./cVywoQiR.js";const B=Object.freeze(Object.defineProperty({__proto__:null,Simple:v,WithButton:g,WithMore:y},Symbol.toStringTag,{value:"Module"})),U={__name:"Root",props:{modelValue:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(d,{emit:p}){const c=p,r=d,l=u(!1),f=x(()=>!0),e=u({}),_=async()=>{const{info:o}=r.modelValue;if(typeof o=="string"){const{design:s,custom:m,attrs:a}=B[o];e.value={design:s,custom:m,attrs:a}}else e.value={...o};l.value=!0};return O(()=>e.value,o=>{c("update:modelValue",{...r.modelValue,info:o})},{deep:!0}),(o,s)=>{const m=b;return i(),n(m,{modelValue:t(e),"onUpdate:modelValue":s[0]||(s[0]=a=>k(e)?e.value=a:null),edit:t(f),loaded:t(l),onOnVisibled:_},{default:S(({key:a})=>[t(l)?(i(),n(V,h({key:a},t(e).design,{custom:t(e).custom,"model-value":t(e).attrs}),null,16,["custom","model-value"])):j("",!0)]),_:1},8,["modelValue","edit","loaded"])}}};export{U as default};