import{u as $e}from"./RrVta6Jm.js";import{aX as ke,g as U,r as k,C,a9 as ge,aa as x,aq as O,I as ee,h as oe,O as be,ab as te,ac as Ce,ad as ue,_ as Ee,af as Te,M as se,aw as Fe,m as ie,ah as W,o as H,A as pe,w as j,b as X,s as L,T as ve,a as de,aj as ce,n as Y,c as J,H as K,aE as Ie}from"./DeuvRX2B.js";import{q as Be,N as De,E as Oe,n as me,d as B}from"./BA5lt-uR.js";import{o as l,u as A,A as ae,I as G,N as fe,a as M,l as Me}from"./CE_J2f_t.js";import{w as Ne}from"./BKK34w6v.js";import{s as Ae}from"./DBU6bFYo.js";import{f as V,u as Z}from"./Bw6wRl9P.js";import{t as He,i as q,l as je}from"./DPjvhxRa.js";import{i as le,E as ne,w as Le,h as Ge,P as N,N as D,T as _}from"./ChJpigYi.js";import{u as Re}from"./ClyZIH_o.js";const ze={wrapper:"relative",container:"z-50 group",trigger:"inline-flex w-full",width:"",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"overflow-hidden focus:outline-none relative",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},overlay:{base:"fixed inset-0 transition-opacity z-50",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enterActiveClass:"ease-out duration-200",enterFromClass:"opacity-0",enterToClass:"opacity-100",leaveActiveClass:"ease-in duration-150",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"}},popper:{strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:ke};var Ke=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ke||{});let ye=Symbol("PopoverContext");function re(e){let P=te(ye,null);if(P===null){let S=new Error(`<${e} /> is missing a parent <${he.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(S,re),S}return P}let qe=Symbol("PopoverGroupContext");function Pe(){return te(qe,null)}let Se=Symbol("PopoverPanelContext");function Ue(){return te(Se,null)}let he=U({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:P,attrs:S,expose:T}){var h;let w=k(null);T({el:w,$el:w});let a=k(1),t=k(null),u=k(null),c=k(null),v=k(null),g=C(()=>le(w)),$=C(()=>{var o,r;if(!l(t)||!l(v))return!1;for(let z of document.querySelectorAll("body > *"))if(Number(z==null?void 0:z.contains(l(t)))^Number(z==null?void 0:z.contains(l(v))))return!0;let n=ne(),y=n.indexOf(l(t)),E=(y+n.length-1)%n.length,I=(y+1)%n.length,R=n[E],we=n[I];return!((o=l(v))!=null&&o.contains(R))&&!((r=l(v))!=null&&r.contains(we))}),b={popoverState:a,buttonId:k(null),panelId:k(null),panel:v,button:t,isPortalled:$,beforePanelSentinel:u,afterPanelSentinel:c,togglePopover(){a.value=A(a.value,{0:1,1:0})},closePopover(){a.value!==1&&(a.value=1)},close(o){b.closePopover();let r=o?o instanceof HTMLElement?o:o.value instanceof HTMLElement?l(o):l(b.button):l(b.button);r==null||r.focus()}};ge(ye,b),He(C(()=>A(a.value,{0:q.Open,1:q.Closed})));let F={buttonId:b.buttonId,panelId:b.panelId,close(){b.closePopover()}},s=Pe(),f=s==null?void 0:s.registerPopover,[m,p]=Be(),d=De({mainTreeNodeRef:s==null?void 0:s.mainTreeNodeRef,portals:m,defaultContainers:[t,v]});function i(){var o,r,n,y;return(y=s==null?void 0:s.isFocusWithinPopoverGroup())!=null?y:((o=g.value)==null?void 0:o.activeElement)&&(((r=l(t))==null?void 0:r.contains(g.value.activeElement))||((n=l(v))==null?void 0:n.contains(g.value.activeElement)))}return x(()=>f==null?void 0:f(F)),Oe((h=g.value)==null?void 0:h.defaultView,"focus",o=>{var r,n;o.target!==window&&o.target instanceof HTMLElement&&a.value===0&&(i()||t&&v&&(d.contains(o.target)||(r=l(b.beforePanelSentinel))!=null&&r.contains(o.target)||(n=l(b.afterPanelSentinel))!=null&&n.contains(o.target)||b.closePopover()))},!0),Ne(d.resolveContainers,(o,r)=>{var n;b.closePopover(),Le(r,Ge.Loose)||(o.preventDefault(),(n=l(t))==null||n.focus())},C(()=>a.value===0)),()=>{let o={open:a.value===0,close:b.close};return O(ee,[O(p,{},()=>ae({theirProps:{...e,...S},ourProps:{ref:w},slot:o,slots:P,attrs:S,name:"Popover"})),O(d.MainTreeNode)])}}}),We=U({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:P,slots:S,expose:T}){var h;let w=(h=e.id)!=null?h:`headlessui-popover-button-${G()}`,a=re("PopoverButton"),t=C(()=>le(a.button));T({el:a.button,$el:a.button}),oe(()=>{a.buttonId.value=w}),be(()=>{a.buttonId.value=null});let u=Pe(),c=u==null?void 0:u.closeOthers,v=Ue(),g=C(()=>v===null?!1:v.value===a.panelId.value),$=k(null),b=`headlessui-focus-sentinel-${G()}`;g.value||x(()=>{a.button.value=l($)});let F=Ae(C(()=>({as:e.as,type:P.type})),$);function s(o){var r,n,y,E,I;if(g.value){if(a.popoverState.value===1)return;switch(o.key){case M.Space:case M.Enter:o.preventDefault(),(n=(r=o.target).click)==null||n.call(r),a.closePopover(),(y=l(a.button))==null||y.focus();break}}else switch(o.key){case M.Space:case M.Enter:o.preventDefault(),o.stopPropagation(),a.popoverState.value===1&&(c==null||c(a.buttonId.value)),a.togglePopover();break;case M.Escape:if(a.popoverState.value!==0)return c==null?void 0:c(a.buttonId.value);if(!l(a.button)||(E=t.value)!=null&&E.activeElement&&!((I=l(a.button))!=null&&I.contains(t.value.activeElement)))return;o.preventDefault(),o.stopPropagation(),a.closePopover();break}}function f(o){g.value||o.key===M.Space&&o.preventDefault()}function m(o){var r,n;e.disabled||(g.value?(a.closePopover(),(r=l(a.button))==null||r.focus()):(o.preventDefault(),o.stopPropagation(),a.popoverState.value===1&&(c==null||c(a.buttonId.value)),a.togglePopover(),(n=l(a.button))==null||n.focus()))}function p(o){o.preventDefault(),o.stopPropagation()}let d=me();function i(){let o=l(a.panel);if(!o)return;function r(){A(d.value,{[B.Forwards]:()=>N(o,D.First),[B.Backwards]:()=>N(o,D.Last)})===_.Error&&N(ne().filter(n=>n.dataset.headlessuiFocusGuard!=="true"),A(d.value,{[B.Forwards]:D.Next,[B.Backwards]:D.Previous}),{relativeTo:l(a.button)})}r()}return()=>{let o=a.popoverState.value===0,r={open:o},{...n}=e,y=g.value?{ref:$,type:F.value,onKeydown:s,onClick:m}:{ref:$,id:w,type:F.value,"aria-expanded":a.popoverState.value===0,"aria-controls":l(a.panel)?a.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:s,onKeyup:f,onClick:m,onMousedown:p};return O(ee,[ae({ourProps:y,theirProps:{...P,...n},slot:r,attrs:P,slots:S,name:"PopoverButton"}),o&&!g.value&&a.isPortalled.value&&O(V,{id:b,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:i})])}}}),Xe=U({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:P,slots:S,expose:T}){var h;let w=(h=e.id)!=null?h:`headlessui-popover-panel-${G()}`,{focus:a}=e,t=re("PopoverPanel"),u=C(()=>le(t.panel)),c=`headlessui-focus-sentinel-before-${G()}`,v=`headlessui-focus-sentinel-after-${G()}`;T({el:t.panel,$el:t.panel}),oe(()=>{t.panelId.value=w}),be(()=>{t.panelId.value=null}),ge(Se,t.panelId),x(()=>{var p,d;if(!a||t.popoverState.value!==0||!t.panel)return;let i=(p=u.value)==null?void 0:p.activeElement;(d=l(t.panel))!=null&&d.contains(i)||N(l(t.panel),D.First)});let g=je(),$=C(()=>g!==null?(g.value&q.Open)===q.Open:t.popoverState.value===0);function b(p){var d,i;switch(p.key){case M.Escape:if(t.popoverState.value!==0||!l(t.panel)||u.value&&!((d=l(t.panel))!=null&&d.contains(u.value.activeElement)))return;p.preventDefault(),p.stopPropagation(),t.closePopover(),(i=l(t.button))==null||i.focus();break}}function F(p){var d,i,o,r,n;let y=p.relatedTarget;y&&l(t.panel)&&((d=l(t.panel))!=null&&d.contains(y)||(t.closePopover(),((o=(i=l(t.beforePanelSentinel))==null?void 0:i.contains)!=null&&o.call(i,y)||(n=(r=l(t.afterPanelSentinel))==null?void 0:r.contains)!=null&&n.call(r,y))&&y.focus({preventScroll:!0})))}let s=me();function f(){let p=l(t.panel);if(!p)return;function d(){A(s.value,{[B.Forwards]:()=>{var i;N(p,D.First)===_.Error&&((i=l(t.afterPanelSentinel))==null||i.focus())},[B.Backwards]:()=>{var i;(i=l(t.button))==null||i.focus({preventScroll:!0})}})}d()}function m(){let p=l(t.panel);if(!p)return;function d(){A(s.value,{[B.Forwards]:()=>{let i=l(t.button),o=l(t.panel);if(!i)return;let r=ne(),n=r.indexOf(i),y=r.slice(0,n+1),E=[...r.slice(n+1),...y];for(let I of E.slice())if(I.dataset.headlessuiFocusGuard==="true"||o!=null&&o.contains(I)){let R=E.indexOf(I);R!==-1&&E.splice(R,1)}N(E,D.First,{sorted:!1})},[B.Backwards]:()=>{var i;N(p,D.Previous)===_.Error&&((i=l(t.button))==null||i.focus())}})}d()}return()=>{let p={open:t.popoverState.value===0,close:t.close},{focus:d,...i}=e,o={ref:t.panel,id:w,onKeydown:b,onFocusout:a&&t.popoverState.value===0?F:void 0,tabIndex:-1};return ae({ourProps:o,theirProps:{...P,...i},attrs:P,slot:p,slots:{...S,default:(...r)=>{var n;return[O(ee,[$.value&&t.isPortalled.value&&O(V,{id:c,ref:t.beforePanelSentinel,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:f}),(n=S.default)==null?void 0:n.call(S,...r),$.value&&t.isPortalled.value&&O(V,{id:v,ref:t.afterPanelSentinel,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:m})])]}},features:fe.RenderStrategy|fe.Static,visible:$.value,name:"PopoverPanel"})}}});const Q=Ce(ue.ui.strategy,ue.ui.popover,ze),Ye=U({components:{HPopover:he,HPopoverButton:We,HPopoverPanel:Xe},inheritAttrs:!1,props:{mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},openDelay:{type:Number,default:()=>Q.default.openDelay},closeDelay:{type:Number,default:()=>Q.default.closeDelay},overlay:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:P}){const{ui:S,attrs:T}=Te("popover",se(e,"ui"),Q,se(e,"class")),h=C(()=>Fe(e.mode==="hover"?{offsetDistance:0}:{},e.popper,S.value.popper)),[w,a]=Re(h.value),t=k(null),u=k(null);let c=null,v=null;oe(()=>{var m,p;const s=(m=t.value)==null?void 0:m.$.provides;if(!s)return;const f=Object.getOwnPropertySymbols(s);u.value=f.length&&s[f[0]],e.open&&((p=u.value)==null||p.togglePopover())});const g=C(()=>{var p,d,i;if(e.mode!=="hover")return{};const s=((p=e.popper)==null?void 0:p.offsetDistance)||((d=S.value.popper)==null?void 0:d.offsetDistance)||8,f=(i=h.value.placement)==null?void 0:i.split("-")[0],m=`${s}px`;return f==="top"||f==="bottom"?{paddingTop:m,paddingBottom:m}:f==="left"||f==="right"?{paddingLeft:m,paddingRight:m}:{paddingTop:m,paddingBottom:m,paddingLeft:m,paddingRight:m}});function $(s){!s.cancelable||!u.value||(u.value.popoverState===0?u.value.closePopover():u.value.togglePopover())}function b(){e.mode!=="hover"||!u.value||(v&&(clearTimeout(v),v=null),u.value.popoverState!==0&&(c=c||setTimeout(()=>{u.value.togglePopover&&u.value.togglePopover(),c=null},e.openDelay)))}function F(){e.mode!=="hover"||!u.value||(c&&(clearTimeout(c),c=null),u.value.popoverState!==1&&(v=v||setTimeout(()=>{u.value.closePopover&&u.value.closePopover(),v=null},e.closeDelay)))}return ie(()=>e.open,(s,f)=>{u.value&&(f===void 0||s===f||(s?u.value.popoverState=0:u.value.closePopover()))}),ie(()=>{var s;return(s=u.value)==null?void 0:s.popoverState},(s,f)=>{f===void 0||s===f||P("update:open",s===0)}),Me(()=>$e("$dcv2Y3vSTA")),{ui:S,attrs:T,popover:t,popper:h,trigger:w,container:a,containerStyle:g,onTouchStart:$,onMouseEnter:b,onMouseLeave:F}}}),Je=["disabled"];function Qe(e,P,S,T,h,w){const a=W("HPopoverButton"),t=W("HPopoverPanel"),u=W("HPopover");return H(),pe(u,Y({ref:"popover",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:j(({open:c,close:v})=>[X(a,{ref:"trigger",as:"div",disabled:e.disabled,class:L(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:j(()=>[ve(e.$slots,"default",{open:c,close:v},()=>[de("button",{disabled:e.disabled}," Open ",8,Je)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),e.overlay?(H(),pe(ce,Y({key:0,appear:""},e.ui.overlay.transition),{default:j(()=>[c?(H(),J("div",{key:0,class:L([e.ui.overlay.base,e.ui.overlay.background])},null,2)):K("",!0)]),_:2},1040)):K("",!0),c?(H(),J("div",{key:1,ref:"container",class:L([e.ui.container,e.ui.width]),style:Ie(e.containerStyle),onMouseenter:P[0]||(P[0]=(...g)=>e.onMouseEnter&&e.onMouseEnter(...g))},[X(ce,Y({appear:""},e.ui.transition),{default:j(()=>[de("div",null,[e.popper.arrow?(H(),J("div",{key:0,"data-popper-arrow":"",class:L(Object.values(e.ui.arrow))},null,2)):K("",!0),X(t,{class:L([e.ui.base,e.ui.background,e.ui.ring,e.ui.rounded,e.ui.shadow]),static:""},{default:j(()=>[ve(e.$slots,"panel",{open:c,close:v})]),_:2},1032,["class"])])]),_:2},1040)],38)):K("",!0)]),_:3},16,["class","onMouseleave"])}const ro=Ee(Ye,[["render",Qe]]);export{ro as default};