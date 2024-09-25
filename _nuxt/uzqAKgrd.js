import{_ as F,a1 as I,a2 as b,Z as O,a4 as V,y as h,H as s,ad as t,o,c as u,I as z,n as d,an as J,a as C,t as v,l as m,J as P,m as f,F as D,k as E,d as H}from"./Dw7e9vQt.js";import"./Bt8MpYHu.js";const L={wrapper:"w-full flex flex-col gap-2",indicator:{container:{base:"flex flex-row justify-end",width:"min-w-fit",transition:"transition-all"},align:"text-end",width:"w-fit",color:"text-gray-400 dark:text-gray-500",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},progress:{base:"block appearance-none border-none overflow-hidden",width:"w-full [&::-webkit-progress-bar]:w-full",size:{"2xs":"h-px",xs:"h-0.5",sm:"h-1",md:"h-2",lg:"h-3",xl:"h-4","2xl":"h-5"},rounded:"rounded-full [&::-webkit-progress-bar]:rounded-full",track:"[&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:dark:bg-gray-700 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:dark:bg-gray-700",bar:"[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full",color:"text-{color}-500 dark:text-{color}-400",background:"[&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current",indeterminate:{base:"indeterminate:relative",rounded:"indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"}},steps:{base:"grid grid-cols-1",color:"text-{color}-500 dark:text-{color}-400",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},step:{base:"transition-all opacity-0 truncate row-start-1 col-start-1",align:"text-end",active:"opacity-100",first:"text-gray-500 dark:text-gray-400"},animation:{carousel:"bar-animation-carousel","carousel-inverse":"bar-animation-carousel-inverse",swing:"bar-animation-swing",elastic:"bar-animation-elastic"},default:{color:"primary",size:"md",animation:"carousel"}},l=I(b.ui.strategy,b.ui.progress,L),R=O({inheritAttrs:!1,props:{value:{type:Number,default:null},max:{type:[Number,Array],default:100},indicator:{type:Boolean,default:!1},animation:{type:String,default:()=>l.default.animation,validator(e){return Object.keys(l.animation).includes(e)}},size:{type:String,default:()=>l.default.size,validator(e){return Object.keys(l.progress.size).includes(e)}},color:{type:String,default:()=>l.default.color,validator(e){return b.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:y}=V("progress",h(e,"ui"),l,h(e,"class")),x=s(()=>t(a.value.indicator.container.base,a.value.indicator.container.width,a.value.indicator.container.transition)),w=s(()=>t(a.value.indicator.align,a.value.indicator.width,a.value.indicator.color,a.value.indicator.size[e.size])),k=s(()=>{var n;const r=[a.value.progress.base,a.value.progress.width,a.value.progress.size[e.size],a.value.progress.rounded,a.value.progress.track,a.value.progress.bar,(n=a.value.progress.color)==null?void 0:n.replaceAll("{color}",e.color),a.value.progress.background,a.value.progress.indeterminate.base,a.value.progress.indeterminate.rounded];return g.value&&r.push(a.value.animation[e.animation]),t(...r)}),c=s(()=>{var r;return t(a.value.steps.base,(r=a.value.steps.color)==null?void 0:r.replaceAll("{color}",e.color),a.value.steps.size[e.size])}),i=s(()=>t(a.value.step.base,a.value.step.align)),A=s(()=>t(a.value.step.active)),S=s(()=>t(a.value.step.first));function $(r){return r===Number(e.value)}function N(r){return r===0}function j(r){r=Number(r);const n=[i.value];return N(r)&&n.push(S.value),$(r)&&n.push(A.value),n.join(" ")}const g=s(()=>e.value===void 0||e.value===null),M=s(()=>Array.isArray(e.max)),p=s(()=>g.value?null:Array.isArray(e.max)?e.max.length-1:Number(e.max)),B=s(()=>{if(!g.value)switch(!0){case e.value<0:return 0;case e.value>p.value:return 100;default:return e.value/p.value*100}});return{ui:a,attrs:y,indicatorContainerClass:x,indicatorClass:w,progressClass:k,stepsClass:c,stepClasses:j,isIndeterminate:g,isSteps:M,realMax:p,percent:B}}}),T=["aria-valuemax","aria-valuenow"];function U(e,a,y,x,w,k){return o(),u("div",{class:d(e.ui.wrapper),role:"progressbar"},[e.indicator||e.$slots.indicator?z(e.$slots,"indicator",P(f({key:0},{percent:e.percent})),()=>[e.isSteps?m("",!0):(o(),u("div",{key:0,class:d(e.indicatorContainerClass),style:J({width:`${e.percent}%`})},[C("div",{class:d(e.indicatorClass)},v(Math.round(e.percent))+"% ",3)],6))],!0):m("",!0),C("progress",f({"aria-valuemax":e.realMax,"aria-valuenow":e.value,class:e.progressClass},{value:e.value,max:e.realMax,...e.attrs}),v(e.percent!==void 0?`${Math.round(e.percent)}%`:void 0),17,T),e.isSteps?(o(),u("div",{key:1,class:d(e.stepsClass)},[(o(!0),u(D,null,E(e.max,(c,i)=>(o(),u("div",{key:i,class:d(e.stepClasses(i))},[z(e.$slots,`step-${i}`,f({ref_for:!0},{step:c}),()=>[H(v(c),1)],!0)],2))),128))],2)):m("",!0)],2)}const G=F(R,[["render",U],["__scopeId","data-v-3dc5d78e"]]);export{G as default};
