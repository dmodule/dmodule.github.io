import{c}from"./C_yZU_oY.js";import{b4 as m,b8 as e,b3 as u,b1 as d,bA as b,be as f,b5 as p,bv as l,bu as i}from"./Bsd2YIFp.js";const y=["href","target"],x={__name:"Button",props:{className:{type:String,default:"btn"},modelValue:{type:Object,default:()=>{}},newTab:{type:Boolean,default:!1}},setup(t){const r=t,a=m(()=>{const{opt:s,dat:o,ext:n}=r.modelValue;return{opt:s||{},dat:o,ext:n||{}}});return(s,o)=>t.modelValue&&e(a).dat?(u(),d("a",{key:0,class:i([t.className,...e(c)(e(a).opt)]),href:e(a).ext.src||"#",target:t.newTab?"_blank":"_self"},[b(f(e(a).dat)+" ",1),t.modelValue&&e(a).dat?p(s.$slots,"default",{key:0}):l("",!0)],10,y)):l("",!0)}};export{x as _};