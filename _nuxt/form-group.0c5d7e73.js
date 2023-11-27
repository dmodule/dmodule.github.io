import S from"./Input.362e72cd.js";import $ from"./FormGroup.3e7ae263.js";import{aS as C,o as n,l as i,w as d,b as a,h as l,d as N,j as T,r as I,a as b,q as R,c as B,F as E,k as P,y as V,i as j,g as q}from"./entry.dd57515c.js";import M from"./Form.65bee717.js";import{o as O,s as f,e as z,m as w,a as L}from"./index.1dd620dc.js";import A from"./Textarea.00d89d9e.js";import D from"./SelectMenu.31775046.js";import Y from"./Toggle.6878a9b3.js";import H from"./Checkbox.f383ff64.js";import J from"./RadioGroup.9f0ee6cd.js";import K from"./Range.92c61054.js";import"./useFormGroup.9469e0b5.js";import"./uid.12f507af.js";import"./usePopper.131299e2.js";import"./combobox.040890dc.js";import"./dom.4fbabe05.js";import"./use-tracked-pointer.4fea9068.js";import"./focus-management.d1b67802.js";import"./open-closed.43a4452f.js";import"./use-resolve-button-type.77b84eb6.js";import"./use-outside-click.5f24c618.js";import"./hidden.324ae6c0.js";import"./use-controllable.04c719e4.js";import"./disposables.57da4964.js";import"./micro-task.89dcd6af.js";import"./use-text-value.f39937f1.js";import"./Radio.e123df4c.js";const Q={__name:"Base",setup(o){const u=O({email:f([z("Invalid email")]),password:f([w(8,"Must be at least 8 characters")])}),t=C({email:void 0,password:void 0});async function g(m){console.log(m.data)}return(m,c)=>{const _=S,r=$,x=T,y=M;return n(),i(y,{class:"space-y-4 w-60",schema:l(u),state:l(t),onSubmit:g},{default:d(()=>[a(r,{label:"Email",name:"email"},{default:d(()=>[a(_,{modelValue:l(t).email,"onUpdate:modelValue":c[0]||(c[0]=p=>l(t).email=p)},null,8,["modelValue"])]),_:1}),a(r,{label:"Password",name:"password"},{default:d(()=>[a(_,{modelValue:l(t).password,"onUpdate:modelValue":c[1]||(c[1]=p=>l(t).password=p),type:"password"},null,8,["modelValue"])]),_:1}),a(x,{type:"submit"},{default:d(()=>[N("Submit")]),_:1})]),_:1},8,["schema","state"])}}},W={__name:"Custom",setup(o){const u=I(!1),t=()=>{u.value=!u.value},g=O({email:f([z("Invalid email")]),password:f([w(8,"Must be at least 8 characters")])}),m=C({email:void 0,password:void 0});async function c(_){console.log(_.data)}return(_,r)=>{const x=S,y=$,p=T,k=M;return n(),i(k,{class:"space-y-4 w-60",schema:l(g),state:l(m),onSubmit:c},{default:d(()=>[a(y,{label:"Email",name:"email"},{default:d(({error:U})=>[a(x,{modelValue:l(m).email,"onUpdate:modelValue":r[0]||(r[0]=h=>l(m).email=h),type:"email",placeholder:"Enter email","trailing-icon":U?"i-heroicons-exclamation-triangle-20-solid":void 0},null,8,["modelValue","trailing-icon"])]),_:1}),a(y,{label:"Password",name:"password"},{default:d(({error:U})=>[a(x,{modelValue:l(m).password,"onUpdate:modelValue":r[1]||(r[1]=h=>l(m).password=h),type:u.value?"text":"password",ui:{icon:{trailing:{pointer:""}}}},{trailing:d(()=>[a(p,{onClick:t,icon:u.value?"i-heroicons-eye-slash":"i-heroicons-eye",size:"2xs",color:"gray",square:"",variant:"ghost",ui:{rounded:"rounded-full"}},null,8,["icon"])]),_:1},8,["modelValue","type"])]),_:1}),a(p,{type:"submit"},{default:d(()=>[N("Submit")]),_:1})]),_:1},8,["schema","state"])}}},X=W,Z={__name:"Mix",props:["modelValue"],emits:["update:modelValue"],setup(o){async function u(t){console.log(t.data),this.$emit("update:modelValue",t.data)}return(t,g)=>{const m=A,c=D,_=Y,r=H,x=J,y=K,p=S,k=$,U=T,h=M;return n(),i(h,{schema:o.modelValue.schema,state:o.modelValue.state,onSubmit:u},{default:d(()=>[b("div",{class:R(["grid gap-4",o.modelValue.className])},[(n(!0),B(E,null,P(o.modelValue.fields,(e,G)=>(n(),i(k,{key:G,label:e.label,name:e.id,className:e.className},{default:d(()=>[e.type==="textarea"?(n(),i(m,V({key:0,modelValue:o.modelValue.state[e.id],"onUpdate:modelValue":s=>o.modelValue.state[e.id]=s},e.option),null,16,["modelValue","onUpdate:modelValue"])):e.type==="select"?(n(),i(c,V({key:1,modelValue:o.modelValue.state[e.id],"onUpdate:modelValue":s=>o.modelValue.state[e.id]=s,options:e.items},e.option),null,16,["modelValue","onUpdate:modelValue","options"])):e.type==="toggle"?(n(),i(_,V({key:2,modelValue:o.modelValue.state[e.id],"onUpdate:modelValue":s=>o.modelValue.state[e.id]=s},e.option),null,16,["modelValue","onUpdate:modelValue"])):e.type==="checkbox"?(n(),i(r,V({key:3,modelValue:o.modelValue.state[e.id],"onUpdate:modelValue":s=>o.modelValue.state[e.id]=s},e.option),null,16,["modelValue","onUpdate:modelValue"])):e.type==="radio"?(n(),i(x,V({key:4,modelValue:o.modelValue.state[e.id],"onUpdate:modelValue":s=>o.modelValue.state[e.id]=s,options:e.items},e.option),null,16,["modelValue","onUpdate:modelValue","options"])):e.type==="range"?(n(),i(y,V({key:5,modelValue:o.modelValue.state[e.id],"onUpdate:modelValue":s=>o.modelValue.state[e.id]=s},e.option),null,16,["modelValue","onUpdate:modelValue"])):(n(),i(p,V({key:6,modelValue:o.modelValue.state[e.id],"onUpdate:modelValue":s=>o.modelValue.state[e.id]=s},e.option),null,16,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["label","name","className"]))),128))],2),a(U,{type:"submit",class:"mt-4"},{default:d(()=>[N("Submit")]),_:1})]),_:1},8,["schema","state"])}}},v=Z,F={className:"max-w-60 grid-cols-2",fields:[{type:"select",option:{},id:"tags",label:"Tags",items:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}]},{type:"text",option:{},id:"title",label:"Title",className:"col-span-2"},{type:"textarea",option:{placeholder:"Search..."},id:"content",label:"Content"},{type:"toggle",option:{},id:"toggle",label:"Toggle"},{type:"checkbox",option:{},id:"checkbox",label:"Checkbox"},{type:"radio",option:{},id:"radio",label:"RadioGroup",items:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}]},{type:"range",option:{},id:"range",label:"Range"}],state:C({tags:void 0,title:void 0,content:void 0,toggle:void 0,checkbox:void 0,radio:void 0,range:void 0}),schema:O({tags:L(f()),title:f([w(1,"Your field must be a string.")]),content:f([w(8,"Must be at least 8 characters")])})},ee={__name:"Test",setup(o){return(u,t)=>{const g=v;return n(),i(g,{modelValue:l(F),"onUpdate:modelValue":t[0]||(t[0]=m=>j(F)?F.value=m:null)},null,8,["modelValue"])}}},oe=ee,te={class:"relative flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"},ae=b("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"Form",-1),ne={class:"relative flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"},le=b("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"}," Form Custom ",-1),se={class:"relative flex flex-wrap items-center gap-3 bg-base-100 px-4 py-6 mb-3"},me=b("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"}," Form Test ",-1),ie={__name:"Form",setup(o){return(u,t)=>(n(),B("div",null,[b("div",te,[ae,a(l(Q))]),b("div",ne,[le,a(X)]),b("div",se,[me,a(oe)])]))}},de=ie,Re=q({__name:"form-group",setup(o){return(u,t)=>(n(),B("div",null,[a(de)]))}});export{Re as default};
