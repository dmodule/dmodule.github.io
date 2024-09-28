import{Z as j,a0 as N,H as s,r as U,f as K,B as L,ah as B,F as P,_ as R,a1 as G,a2 as z,q as E,a4 as M,y as q,ac as J,ad as m,a6 as Y,o as w,O as Z,w as Q,a as W,n as c,c as C,b as x,l as S,m as X}from"./Dw7e9vQt.js";import{u as _}from"./Dk21KoIT.js";import{d as ee,p as ae}from"./BrAu9Jma.js";import{i as le,o as te,E as ne,A as oe,T as se,a as A,s as ie}from"./DF3kEfq4.js";import{s as re}from"./BLhWR13V.js";import{f as ue,u as de}from"./BkLV4VMA.js";import{u as ce}from"./34G0kqrt.js";import"./Bt8MpYHu.js";const fe={base:"relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",rounded:"rounded-full",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",active:"bg-{color}-500 dark:bg-{color}-400",inactive:"bg-gray-200 dark:bg-gray-700",size:{"2xs":"h-3 w-5",xs:"h-3.5 w-6",sm:"h-4 w-7",md:"h-5 w-9",lg:"h-6 w-11",xl:"h-7 w-[3.25rem]","2xl":"h-8 w-[3.75rem]"},container:{base:"pointer-events-none relative inline-block rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200",active:{"2xs":"translate-x-2 rtl:-translate-x-2",xs:"translate-x-2.5 rtl:-translate-x-2.5",sm:"translate-x-3 rtl:-translate-x-3",md:"translate-x-4 rtl:-translate-x-4",lg:"translate-x-5 rtl:-translate-x-5",xl:"translate-x-6 rtl:-translate-x-6","2xl":"translate-x-7 rtl:-translate-x-7"},inactive:"translate-x-0 rtl:-translate-x-0",size:{"2xs":"h-2 w-2",xs:"h-2.5 w-2.5",sm:"h-3 w-3",md:"h-4 w-4",lg:"h-5 w-5",xl:"h-6 w-6","2xl":"h-7 w-7"}},icon:{base:"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity",active:"opacity-100 ease-in duration-200",inactive:"opacity-0 ease-out duration-100",size:{"2xs":"h-2 w-2",xs:"h-2 w-2",sm:"h-2 w-2",md:"h-3 w-3",lg:"h-4 w-4",xl:"h-5 w-5","2xl":"h-6 w-6"},on:"text-{color}-500 dark:text-{color}-400",off:"text-gray-400 dark:text-gray-500",loading:"animate-spin text-{color}-500 dark:text-{color}-400"},default:{onIcon:null,offIcon:null,loadingIcon:"i-heroicons-arrow-path-20-solid",color:"primary",size:"md"}};let me=Symbol("GroupContext"),ve=j({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(e,{emit:i,attrs:a,slots:v,expose:p}){var t;let r=(t=e.id)!=null?t:`headlessui-switch-${le()}`,o=N(me,null),[n,g]=ee(s(()=>e.modelValue),l=>i("update:modelValue",l),s(()=>e.defaultChecked));function h(){g(!n.value)}let k=U(null),u=o===null?k:o.switchRef,I=re(s(()=>({as:e.as,type:a.type})),u);p({el:u,$el:u});function y(l){l.preventDefault(),h()}function O(l){l.key===A.Space?(l.preventDefault(),h()):l.key===A.Enter&&ae(l.currentTarget)}function H(l){l.preventDefault()}let b=s(()=>{var l,d;return(d=(l=te(u))==null?void 0:l.closest)==null?void 0:d.call(l,"form")});return K(()=>{L([b],()=>{if(!b.value||e.defaultChecked===void 0)return;function l(){g(e.defaultChecked)}return b.value.addEventListener("reset",l),()=>{var d;(d=b.value)==null||d.removeEventListener("reset",l)}},{immediate:!0})}),()=>{let{name:l,value:d,form:T,tabIndex:V,...$}=e,D={checked:n.value},F={id:r,ref:u,role:"switch",type:I.value,tabIndex:V===-1?0:V,"aria-checked":n.value,"aria-labelledby":o==null?void 0:o.labelledby.value,"aria-describedby":o==null?void 0:o.describedby.value,onClick:y,onKeyup:O,onKeypress:H};return B(P,[l!=null&&n.value!=null?B(ue,ne({features:de.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:n.value,form:T,disabled:$.disabled,name:l,value:d})):null,oe({ourProps:F,theirProps:{...a,...se($,["modelValue","defaultChecked"])},slot:D,attrs:a,slots:v,name:"Switch"})])}}});const f=G(z.ui.strategy,z.ui.toggle,fe),pe=j({components:{HSwitch:ve,UIcon:E},inheritAttrs:!1,props:{id:{type:String,default:null},name:{type:String,default:null},modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},onIcon:{type:String,default:()=>f.default.onIcon},offIcon:{type:String,default:()=>f.default.offIcon},loadingIcon:{type:String,default:()=>f.default.loadingIcon},color:{type:String,default:()=>f.default.color,validator(e){return z.ui.colors.includes(e)}},size:{type:String,default:()=>f.default.size,validator(e){return Object.keys(f.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:i}){const{ui:a,attrs:v}=M("toggle",q(e,"ui"),f),{emitFormChange:p,color:t,inputId:r,name:o}=ce(e),n=s({get(){return e.modelValue},set(y){i("update:modelValue",y),i("change",y),p()}}),g=s(()=>J(m(a.value.base,a.value.size[e.size],a.value.rounded,t.value&&a.value.ring.replaceAll("{color}",t.value),t.value&&(n.value?a.value.active:a.value.inactive).replaceAll("{color}",t.value)),e.class)),h=s(()=>m(a.value.container.base,a.value.container.size[e.size],n.value?a.value.container.active[e.size]:a.value.container.inactive)),k=s(()=>m(a.value.icon.size[e.size],t.value&&a.value.icon.on.replaceAll("{color}",t.value))),u=s(()=>m(a.value.icon.size[e.size],t.value&&a.value.icon.off.replaceAll("{color}",t.value))),I=s(()=>m(a.value.icon.size[e.size],t.value&&a.value.icon.loading.replaceAll("{color}",t.value)));return ie(()=>_("$9TYakcpxCp")),{ui:a,attrs:v,name:o,inputId:r,active:n,switchClass:g,containerClass:h,onIconClass:k,offIconClass:u,loadingIconClass:I}}});function ge(e,i,a,v,p,t){const r=E,o=Y("HSwitch");return w(),Z(o,X({id:e.inputId,modelValue:e.active,"onUpdate:modelValue":i[0]||(i[0]=n=>e.active=n),name:e.name,disabled:e.disabled||e.loading,class:e.switchClass},e.attrs),{default:Q(()=>[W("span",{class:c(e.containerClass)},[e.loading?(w(),C("span",{key:0,class:c([e.ui.icon.active,e.ui.icon.base]),"aria-hidden":"true"},[x(r,{name:e.loadingIcon,class:c(e.loadingIconClass)},null,8,["name","class"])],2)):S("",!0),!e.loading&&e.onIcon?(w(),C("span",{key:1,class:c([e.active?e.ui.icon.active:e.ui.icon.inactive,e.ui.icon.base]),"aria-hidden":"true"},[x(r,{name:e.onIcon,class:c(e.onIconClass)},null,8,["name","class"])],2)):S("",!0),!e.loading&&e.offIcon?(w(),C("span",{key:2,class:c([e.active?e.ui.icon.inactive:e.ui.icon.active,e.ui.icon.base]),"aria-hidden":"true"},[x(r,{name:e.offIcon,class:c(e.offIconClass)},null,8,["name","class"])],2)):S("",!0)],2)]),_:1},16,["id","modelValue","name","disabled","class"])}const Se=R(pe,[["render",ge]]);export{Se as default};
