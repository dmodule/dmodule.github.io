import{_ as re,a3 as K,ar as se,a4 as m,as as de,a0 as ce,V as X,ad as Y,a6 as P,j as Q,y as u,at as ge,au as pe,r as me,ae as be,af as y,av as fe,aw as ve,ax as ye,m as Ie,a8 as I,o as t,M,w as h,a as C,U as i,b as f,Q as D,c as d,D as A,ag as p,aa as Me,H as he,I as Ce,aq as Ae,t as R,d as J}from"./CMgfjk2B.js";import{u as Se}from"./DGR0v2_f.js";import{l as Oe,n as ke,u as qe,r as we,i as ze}from"./CV63zN8U.js";import{s as Be}from"./Cb15ghaC.js";import{u as Ve}from"./BqgA8WkM.js";import{u as He}from"./D1IA68YM.js";import"./Bk2xIUJf.js";import"./B08LnwSc.js";import"./CxIZtCgj.js";import"./VLjS7zgI.js";import"./CMlBT5zd.js";import"./C08AvRvv.js";import"./DmO626QD.js";import"./kHX2Wnqo.js";import"./DxK7WQ94.js";const s=K(m.ui.strategy,m.ui.input,se),T=K(m.ui.strategy,m.ui.inputMenu,de),Ne=ce({components:{HCombobox:Oe,HComboboxButton:ke,HComboboxOptions:qe,HComboboxOption:we,HComboboxInput:ze,UIcon:X,UAvatar:Y},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>s.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>T.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>T.default.selectedIcon},disabled:{type:Boolean,default:!1},nullable:{type:Boolean,default:!1},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(s.size).includes(e)}},color:{type:String,default:()=>s.default.color,validator(e){return[...m.ui.colors,...Object.keys(s.color)].includes(e)}},variant:{type:String,default:()=>s.default.variant,validator(e){return[...Object.keys(s.variant),...Object.values(s.color).flatMap(r=>Object.keys(r))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},search:{type:Function,default:void 0},searchAttributes:{type:Array,default:null},searchLazy:{type:Boolean,default:!1},debounce:{type:Number,default:200},popper:{type:Object,default:()=>({})},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:r,slots:z}){const{ui:a,attrs:W}=P("input",Q(e,"ui"),s,Q(e,"class")),{ui:B}=P("inputMenu",Q(e,"uiMenu"),T),S=u(()=>ge({},e.popper,B.value.popper)),[b,O]=Ve(S.value),{size:V,rounded:H}=pe({ui:a,props:e}),{emitFormBlur:N,emitFormChange:j,inputId:$,color:n,size:U,name:v}=He(e,s),o=u(()=>V.value??U.value),k=me(""),c=u({get(){return e.query??k.value},set(l){k.value=l,r("update:query",l)}}),Z=u(()=>{if(e.modelValue)if(e.valueAttribute){const l=G.value.find(g=>g[e.valueAttribute]===e.modelValue);return l?l[e.optionAttribute]:null}else return["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute]}),_=u(()=>{var g,w;const l=((w=(g=a.value.color)==null?void 0:g[n.value])==null?void 0:w[e.variant])||a.value.variant[e.variant];return be(y(a.value.base,a.value.form,H.value,a.value.placeholder,a.value.size[o.value],e.padded?a.value.padding[o.value]:"p-0",l==null?void 0:l.replaceAll("{color}",n.value),(q.value||z.leading)&&a.value.leading.padding[o.value],(E.value||z.trailing)&&a.value.trailing.padding[o.value]),e.inputClass)}),q=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),E=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),x=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),ee=u(()=>e.loading&&!q.value?e.loadingIcon:e.trailingIcon||e.icon),ae=u(()=>y(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[o.value])),ne=u(()=>y(a.value.icon.base,n.value&&m.ui.colors.includes(n.value)&&a.value.icon.color.replaceAll("{color}",n.value),a.value.icon.size[o.value],e.loading&&a.value.icon.loading)),le=u(()=>y(a.value.icon.trailing.wrapper,a.value.icon.trailing.padding[o.value])),ie=u(()=>y(a.value.icon.base,n.value&&m.ui.colors.includes(n.value)&&a.value.icon.color.replaceAll("{color}",n.value),a.value.icon.size[o.value],e.loading&&!q.value&&a.value.icon.loading)),F=e.search&&typeof e.search=="function"?fe(e.search,e.debounce):void 0,G=ve(async()=>F?await F(c.value):e.options||[],[],{lazy:e.searchLazy}),ue=u(()=>!c.value||F?G.value:G.value.filter(l=>{var g;return((g=e.searchAttributes)!=null&&g.length?e.searchAttributes:[e.optionAttribute]).some(w=>{if(["string","number"].includes(typeof l))return String(l).search(new RegExp(c.value,"i"))!==-1;const L=ye(l,w);return L!=null&&String(L).search(new RegExp(c.value,"i"))!==-1})}));Ie(O,l=>{l?r("open"):(r("close"),N())});function te(l){c.value="",r("update:modelValue",l),r("change",l),j()}function oe(l){c.value=l.target.value}return Be(()=>Se("$PQoDIGKU0V")),{ui:a,uiMenu:B,attrs:W,name:v,inputId:$,popper:S,trigger:b,container:O,label:Z,isLeading:q,isTrailing:E,inputClass:_,leadingIconName:x,leadingIconClass:ne,leadingWrapperIconClass:ae,trailingIconName:ee,trailingIconClass:ie,trailingWrapperIconClass:le,filteredOptions:ue,query:c,onUpdate:te,onQueryChange:oe}}}),je={class:"truncate"};function $e(e,r,z,a,W,B){const S=I("HComboboxInput"),b=X,O=I("HComboboxButton"),V=Y,H=I("HComboboxOption"),N=I("HComboboxOptions"),j=I("HCombobox");return t(),M(j,{by:e.by,name:e.name,"model-value":e.modelValue,disabled:e.disabled,nullable:e.nullable,as:"div",class:i(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:h(({open:$})=>[C("div",{class:i(e.uiMenu.trigger)},[f(S,D({id:e.inputId,name:e.name,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass,autocomplete:"off"},e.attrs,{"display-value":()=>e.query?e.query:e.label,onChange:e.onQueryChange}),null,16,["id","name","required","placeholder","disabled","class","display-value","onChange"]),e.isLeading&&e.leadingIconName||e.$slots.leading?(t(),d("span",{key:0,class:i(e.leadingWrapperIconClass)},[A(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[f(b,{name:e.leadingIconName,class:i(e.leadingIconClass)},null,8,["name","class"])])],2)):p("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(t(),M(O,{key:1,ref:"trigger",class:i(e.trailingWrapperIconClass)},{default:h(()=>[A(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[f(b,{name:e.trailingIconName,class:i(e.trailingIconClass)},null,8,["name","class"])])]),_:3},8,["class"])):p("",!0)],2),$?(t(),d("div",{key:0,ref:"container",class:i([e.uiMenu.container,e.uiMenu.width])},[f(Me,D({appear:""},e.uiMenu.transition),{default:h(()=>[C("div",null,[e.popper.arrow?(t(),d("div",{key:0,"data-popper-arrow":"",class:i(Object.values(e.uiMenu.arrow))},null,2)):p("",!0),f(N,{static:"",class:i([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:h(()=>[(t(!0),d(he,null,Ce(e.filteredOptions,(n,U)=>(t(),M(H,{key:U,as:"template",value:e.valueAttribute?n[e.valueAttribute]:n,disabled:n.disabled},{default:h(({active:v,selected:o,disabled:k})=>[C("li",{class:i([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,v?e.uiMenu.option.active:e.uiMenu.option.inactive,o&&e.uiMenu.option.selected,k&&e.uiMenu.option.disabled])},[C("div",{class:i(e.uiMenu.option.container)},[A(e.$slots,"option",{option:n,active:v,selected:o},()=>[n.icon?(t(),M(b,{key:0,name:n.icon,class:i([e.uiMenu.option.icon.base,v?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,n.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):n.avatar?(t(),M(V,D({key:1,ref_for:!0},{size:e.uiMenu.option.avatar.size,...n.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):n.chip?(t(),d("span",{key:2,class:i(e.uiMenu.option.chip.base),style:Ae({background:`#${n.chip}`})},null,6)):p("",!0),C("span",je,R(["string","number"].includes(typeof n)?n:n[e.optionAttribute]),1)])],2),o?(t(),d("span",{key:0,class:i([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[f(b,{name:e.selectedIcon,class:i(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):p("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.query&&!e.filteredOptions.length?(t(),d("p",{key:0,class:i(e.uiMenu.option.empty)},[A(e.$slots,"option-empty",{query:e.query},()=>[J(' No results for "'+R(e.query)+'". ',1)])],2)):e.filteredOptions.length?p("",!0):(t(),d("p",{key:1,class:i(e.uiMenu.empty)},[A(e.$slots,"empty",{query:e.query},()=>[r[0]||(r[0]=J(" No options. "))])],2))]),_:3},8,["class"])])]),_:3},16)],2)):p("",!0)]),_:3},8,["by","name","model-value","disabled","nullable","class","onUpdate:modelValue"])}const Ze=re(Ne,[["render",$e]]);export{Ze as default};