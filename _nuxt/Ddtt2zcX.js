import{f as c}from"./iP-yhpA_.js";import{b4 as d,b8 as e,b3 as m,b1 as u,bA as b,be as f,b5 as i,bv as l,bu as p}from"./CHOppScM.js";const k=["href","target"],h={__name:"Link",props:{className:{type:String,default:"hover:underline"},modelValue:{type:Object,default:()=>{}},newTab:{type:Boolean,default:!1}},setup(t){const r=t,a=d(()=>{const{opt:s,dat:o,ext:n}=r.modelValue;return{opt:s||{},dat:o,ext:n||{}}});return(s,o)=>t.modelValue&&e(a).dat?(m(),u("a",{key:0,class:p([t.className,...e(c)(e(a).opt)]),href:e(a).ext.src||"#",target:t.newTab?"_blank":"_self"},[b(f(e(a).dat)+" ",1),t.modelValue&&e(a).dat?i(s.$slots,"default",{key:0}):l("",!0)],10,k)):l("",!0)}};export{h as _};
