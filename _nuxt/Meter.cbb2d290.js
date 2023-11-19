import O from"./Icon.78279365.js";import{_ as w,bI as P,bJ as d,f as I,b5 as g,x as r,bK as l,o as k,c as V,aP as $,a as o,aq as i,t as h,as as J,ar as M,ao as c,A as m,z as U,d as q}from"./entry.e729eafb.js";import{m as D,u as E}from"./ui.config.642def0d.js";const s=P(d.ui.strategy,d.ui.meter,D),K=I({inheritAttrs:!1,slots:Object,props:{value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100},indicator:{type:Boolean,default:!1},label:{type:String,default:null},size:{type:String,default:()=>s.default.size,validator(e){return Object.keys(s.meter.size).includes(e)}},color:{type:String,default:()=>s.default.color,validator(e){return[...d.ui.colors,...Object.keys(s.color)].includes(e)}},icon:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:a,attrs:v}=E("meter",g(e,"ui"),s,g(e,"class"));function b(C,t,n){if(t==n)return C<t?0:100;t>n&&(n=[t,t=n][0]);const j=(C-t)/(n-t)*100;return Math.max(0,Math.min(100,j))}const f=r(()=>l(a.value.indicator.container)),p=r(()=>l(a.value.indicator.text,a.value.indicator.size[e.size])),u=r(()=>l(a.value.meter.base,a.value.meter.background,a.value.meter.ring,a.value.meter.rounded,a.value.meter.shadow,a.value.color[e.color]??a.value.meter.color.replaceAll("{color}",e.color),a.value.meter.size[e.size])),S=r(()=>l(a.value.meter.appearance.inner,a.value.meter.appearance.meter,a.value.meter.appearance.bar,a.value.meter.appearance.value)),A=r(()=>l(a.value.meter.bar.transition,a.value.meter.bar.ring,a.value.meter.bar.rounded,a.value.meter.bar.size[e.size])),B=r(()=>l(a.value.label.base,a.value.label.text,a.value.color[e.color]??a.value.label.color.replaceAll("{color}",e.color),a.value.label.size[e.size])),y=r(()=>e.min>e.max?e.max:e.min),z=r(()=>e.max<e.min?e.min:e.max),N=r(()=>b(Number(e.value),y.value,z.value));return{ui:a,attrs:v,indicatorContainerClass:f,indicatorClass:p,meterClass:u,meterAppearanceClass:S,meterBarClass:A,labelClass:B,normalizedMin:y,normalizedMax:z,percent:N}}}),R=["value","min","max"];function T(e,a,v,b,f,p){const u=O;return k(),V("div",c({class:e.ui.wrapper},e.attrs),[e.indicator||e.$slots.indicator?$(e.$slots,"indicator",M(c({key:0},{percent:e.percent,value:e.value})),()=>[o("div",{class:i(e.indicatorContainerClass),style:J({width:`${e.percent}%`})},[o("div",{class:i(e.indicatorClass)},h(Math.round(e.percent))+"% ",3)],6)]):m("",!0),o("meter",{value:e.value,min:e.normalizedMin,max:e.normalizedMax,class:i([e.meterClass,e.meterAppearanceClass,e.meterBarClass])},null,10,R),e.label||e.$slots.label?$(e.$slots,"label",M(c({key:1},{percent:e.percent,value:e.value})),()=>[o("div",{class:i(e.labelClass)},[e.icon?(k(),U(u,{key:0,name:e.icon},null,8,["name"])):m("",!0),q(" "+h(e.label),1)],2)]):m("",!0)],16)}const L=w(K,[["render",T]]);export{L as default};