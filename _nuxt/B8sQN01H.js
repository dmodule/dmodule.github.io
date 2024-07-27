import{ad as X,az as Y,ae as m,_ as Z,g as _,s as G,ag as x,L as O,aB as ee,B as i,ak as ae,al as v,o,c as d,a as le,H as z,W as N,t as j,m as ne,q as b,T as p,b as W,G as q,aE as w}from"./CK5d3MQh.js";import{u as te}from"./ZeUA9XZD.js";import"./Bri_7zzn.js";const u=X(m.ui.strategy,m.ui.select,Y),ie=_({components:{UIcon:G},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>u.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>u.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},size:{type:String,default:null,validator(e){return Object.keys(u.size).includes(e)}},color:{type:String,default:()=>u.default.color,validator(e){return[...m.ui.colors,...Object.keys(u.color)].includes(e)}},variant:{type:String,default:()=>u.default.variant,validator(e){return[...Object.keys(u.variant),...Object.values(u.color).flatMap(r=>Object.keys(r))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:r,slots:A}){const{ui:a,attrs:h}=x("select",O(e,"ui"),u,O(e,"class")),{size:S,rounded:f}=ee({ui:a,props:e}),{emitFormChange:n,inputId:c,color:t,size:C,name:F}=te(e,u),s=i(()=>S.value??C.value),L=l=>{r("update:modelValue",l.target.value)},T=l=>{r("change",l.target.value),n()},M=l=>w(l,e.valueAttribute,""),P=l=>w(l,e.optionAttribute,""),$=l=>["string","number","boolean"].includes(typeof l)?{[e.valueAttribute]:l,[e.optionAttribute]:l}:{...l,[e.valueAttribute]:M(l),[e.optionAttribute]:P(l)},V=i(()=>e.options.map(l=>$(l))),B=i(()=>e.placeholder?[{[e.valueAttribute]:"",[e.optionAttribute]:e.placeholder,disabled:!0},...V.value]:V.value),U=i(()=>{const l=$(e.modelValue),g=B.value.find(I=>I[e.valueAttribute]===l[e.valueAttribute]);return g?g[e.valueAttribute]:""}),E=i(()=>{var g,I;const l=((I=(g=a.value.color)==null?void 0:g[t.value])==null?void 0:I[e.variant])||a.value.variant[e.variant];return ae(v(a.value.base,a.value.form,f.value,a.value.size[s.value],e.padded?a.value.padding[s.value]:"p-0",l==null?void 0:l.replaceAll("{color}",t.value),(y.value||A.leading)&&a.value.leading.padding[s.value],(k.value||A.trailing)&&a.value.trailing.padding[s.value]),e.placeholder&&!e.modelValue&&a.value.placeholder,e.selectClass)}),y=i(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),k=i(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),D=i(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),H=i(()=>e.loading&&!y.value?e.loadingIcon:e.trailingIcon||e.icon),J=i(()=>v(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[s.value])),R=i(()=>v(a.value.icon.base,t.value&&m.ui.colors.includes(t.value)&&a.value.icon.color.replaceAll("{color}",t.value),a.value.icon.size[s.value],e.loading&&a.value.icon.loading)),K=i(()=>v(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[s.value])),Q=i(()=>v(a.value.icon.base,t.value&&m.ui.colors.includes(t.value)&&a.value.icon.color.replaceAll("{color}",t.value),a.value.icon.size[s.value],e.loading&&!y.value&&a.value.icon.loading));return{ui:a,attrs:h,name:F,inputId:c,normalizedOptionsWithPlaceholder:B,normalizedValue:U,isLeading:y,isTrailing:k,selectClass:E,leadingIconName:D,leadingIconClass:R,leadingWrapperIconClass:J,trailingIconName:H,trailingIconClass:Q,trailingWrapperIconClass:K,onInput:L,onChange:T}}}),ue=["id","name","value","required","disabled"],re=["value","label"],oe=["value","selected","disabled","textContent"],de=["value","selected","disabled","textContent"];function se(e,r,A,a,h,S){const f=G;return o(),d("div",{class:b(e.ui.wrapper)},[le("select",ne({id:e.inputId,name:e.name,value:e.modelValue,required:e.required,disabled:e.disabled,class:e.selectClass},e.attrs,{onInput:r[0]||(r[0]=(...n)=>e.onInput&&e.onInput(...n)),onChange:r[1]||(r[1]=(...n)=>e.onChange&&e.onChange(...n))}),[(o(!0),d(z,null,N(e.normalizedOptionsWithPlaceholder,(n,c)=>(o(),d(z,null,[n.children?(o(),d("optgroup",{key:`${n[e.valueAttribute]}-optgroup-${c}`,value:n[e.valueAttribute],label:n[e.optionAttribute]},[(o(!0),d(z,null,N(n.children,(t,C)=>(o(),d("option",{key:`${t[e.valueAttribute]}-${c}-${C}`,value:t[e.valueAttribute],selected:t[e.valueAttribute]===e.normalizedValue,disabled:t.disabled,textContent:j(t[e.optionAttribute])},null,8,oe))),128))],8,re)):(o(),d("option",{key:`${n[e.valueAttribute]}-${c}`,value:n[e.valueAttribute],selected:n[e.valueAttribute]===e.normalizedValue,disabled:n.disabled,textContent:j(n[e.optionAttribute])},null,8,de))],64))),256))],16,ue),e.isLeading&&e.leadingIconName||e.$slots.leading?(o(),d("span",{key:0,class:b(e.leadingWrapperIconClass)},[p(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[W(f,{name:e.leadingIconName,class:b(e.leadingIconClass)},null,8,["name","class"])],!0)],2)):q("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(o(),d("span",{key:1,class:b(e.trailingWrapperIconClass)},[p(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[W(f,{name:e.trailingIconName,class:b(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])],!0)],2)):q("",!0)],2)}const be=Z(ie,[["render",se],["__scopeId","data-v-9f80dc9e"]]);export{be as default};
