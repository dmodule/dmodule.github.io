import{a2 as m,r as g,av as h,y as c}from"./CMgfjk2B.js";const j=(a,n)=>{const z=m("form-events",void 0),e=m("form-group",void 0),i=m("form-inputs",void 0);e&&(a!=null&&a.id&&(e.inputId.value=a==null?void 0:a.id),i&&(i.value[e.name.value]=e.inputId.value));const F=g(!1);function d(l,v){z&&z.emit({type:l,path:v})}function I(){d("blur",e==null?void 0:e.name.value),F.value=!0}function t(){d("change",e==null?void 0:e.name.value)}const b=h(()=>{(F.value||e!=null&&e.eagerValidation.value)&&d("input",e==null?void 0:e.name.value)},300);return{inputId:c(()=>(a==null?void 0:a.id)??(e==null?void 0:e.inputId.value)),name:c(()=>(a==null?void 0:a.name)??(e==null?void 0:e.name.value)),size:c(()=>{var v;const l=n.size[e==null?void 0:e.size.value]?e==null?void 0:e.size.value:null;return(a==null?void 0:a.size)??l??((v=n.default)==null?void 0:v.size)}),color:c(()=>{var l;return(l=e==null?void 0:e.error)!=null&&l.value?"red":a==null?void 0:a.color}),emitFormBlur:I,emitFormInput:b,emitFormChange:t}};export{j as u};
