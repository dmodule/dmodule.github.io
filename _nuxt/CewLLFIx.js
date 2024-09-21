import{u as $e}from"./DGR0v2_f.js";import{aT as ke,a0 as q,r as k,y as C,a1 as ge,$ as x,ak as M,H as ee,f as te,l as be,a2 as oe,_ as Ce,a3 as Ee,a4 as ue,a6 as Te,j as se,at as Fe,m as ie,a8 as Q,o as j,M as pe,w as A,b as W,U as L,D as ve,a as de,aa as ce,Q as X,c as J,ag as z,aq as Be}from"./CMgfjk2B.js";import{q as Ie,N as De,E as Me,n as me,d as I}from"./C5_6IMde.js";import{o as l,u as H,A as ae,i as G,N as fe,a as O,s as Oe}from"./Cb15ghaC.js";import{w as Ne}from"./VLjS7zgI.js";import{s as He}from"./C08AvRvv.js";import{f as Y,u as Z}from"./kHX2Wnqo.js";import{t as je,i as K,l as Ae}from"./DxK7WQ94.js";import{i as le,E as ne,w as Le,h as Ge,P as N,N as D,T as _}from"./CMlBT5zd.js";import{u as Re}from"./BqgA8WkM.js";const Ue={wrapper:"relative",container:"z-50 group",trigger:"inline-flex w-full",width:"",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"overflow-hidden focus:outline-none relative",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},overlay:{base:"fixed inset-0 transition-opacity z-50",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enterActiveClass:"ease-out duration-200",enterFromClass:"opacity-0",enterToClass:"opacity-100",leaveActiveClass:"ease-in duration-150",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"}},popper:{strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:ke};var ze=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ze||{});let ye=Symbol("PopoverContext");function re(e){let P=oe(ye,null);if(P===null){let S=new Error(`<${e} /> is missing a parent <${he.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(S,re),S}return P}let Ke=Symbol("PopoverGroupContext");function Pe(){return oe(Ke,null)}let Se=Symbol("PopoverPanelContext");function qe(){return oe(Se,null)}let he=q({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:P,attrs:S,expose:T}){var h;let w=k(null);T({el:w,$el:w});let a=k(1),o=k(null),u=k(null),c=k(null),v=k(null),g=C(()=>le(w)),$=C(()=>{var t,r;if(!l(o)||!l(v))return!1;for(let U of document.querySelectorAll("body > *"))if(Number(U==null?void 0:U.contains(l(o)))^Number(U==null?void 0:U.contains(l(v))))return!0;let n=ne(),y=n.indexOf(l(o)),E=(y+n.length-1)%n.length,B=(y+1)%n.length,R=n[E],we=n[B];return!((t=l(v))!=null&&t.contains(R))&&!((r=l(v))!=null&&r.contains(we))}),b={popoverState:a,buttonId:k(null),panelId:k(null),panel:v,button:o,isPortalled:$,beforePanelSentinel:u,afterPanelSentinel:c,togglePopover(){a.value=H(a.value,{0:1,1:0})},closePopover(){a.value!==1&&(a.value=1)},close(t){b.closePopover();let r=t?t instanceof HTMLElement?t:t.value instanceof HTMLElement?l(t):l(b.button):l(b.button);r==null||r.focus()}};ge(ye,b),je(C(()=>H(a.value,{0:K.Open,1:K.Closed})));let F={buttonId:b.buttonId,panelId:b.panelId,close(){b.closePopover()}},s=Pe(),f=s==null?void 0:s.registerPopover,[m,p]=Ie(),d=De({mainTreeNodeRef:s==null?void 0:s.mainTreeNodeRef,portals:m,defaultContainers:[o,v]});function i(){var t,r,n,y;return(y=s==null?void 0:s.isFocusWithinPopoverGroup())!=null?y:((t=g.value)==null?void 0:t.activeElement)&&(((r=l(o))==null?void 0:r.contains(g.value.activeElement))||((n=l(v))==null?void 0:n.contains(g.value.activeElement)))}return x(()=>f==null?void 0:f(F)),Me((h=g.value)==null?void 0:h.defaultView,"focus",t=>{var r,n;t.target!==window&&t.target instanceof HTMLElement&&a.value===0&&(i()||o&&v&&(d.contains(t.target)||(r=l(b.beforePanelSentinel))!=null&&r.contains(t.target)||(n=l(b.afterPanelSentinel))!=null&&n.contains(t.target)||b.closePopover()))},!0),Ne(d.resolveContainers,(t,r)=>{var n;b.closePopover(),Le(r,Ge.Loose)||(t.preventDefault(),(n=l(o))==null||n.focus())},C(()=>a.value===0)),()=>{let t={open:a.value===0,close:b.close};return M(ee,[M(p,{},()=>ae({theirProps:{...e,...S},ourProps:{ref:w},slot:t,slots:P,attrs:S,name:"Popover"})),M(d.MainTreeNode)])}}}),Qe=q({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:P,slots:S,expose:T}){var h;let w=(h=e.id)!=null?h:`headlessui-popover-button-${G()}`,a=re("PopoverButton"),o=C(()=>le(a.button));T({el:a.button,$el:a.button}),te(()=>{a.buttonId.value=w}),be(()=>{a.buttonId.value=null});let u=Pe(),c=u==null?void 0:u.closeOthers,v=qe(),g=C(()=>v===null?!1:v.value===a.panelId.value),$=k(null),b=`headlessui-focus-sentinel-${G()}`;g.value||x(()=>{a.button.value=l($)});let F=He(C(()=>({as:e.as,type:P.type})),$);function s(t){var r,n,y,E,B;if(g.value){if(a.popoverState.value===1)return;switch(t.key){case O.Space:case O.Enter:t.preventDefault(),(n=(r=t.target).click)==null||n.call(r),a.closePopover(),(y=l(a.button))==null||y.focus();break}}else switch(t.key){case O.Space:case O.Enter:t.preventDefault(),t.stopPropagation(),a.popoverState.value===1&&(c==null||c(a.buttonId.value)),a.togglePopover();break;case O.Escape:if(a.popoverState.value!==0)return c==null?void 0:c(a.buttonId.value);if(!l(a.button)||(E=o.value)!=null&&E.activeElement&&!((B=l(a.button))!=null&&B.contains(o.value.activeElement)))return;t.preventDefault(),t.stopPropagation(),a.closePopover();break}}function f(t){g.value||t.key===O.Space&&t.preventDefault()}function m(t){var r,n;e.disabled||(g.value?(a.closePopover(),(r=l(a.button))==null||r.focus()):(t.preventDefault(),t.stopPropagation(),a.popoverState.value===1&&(c==null||c(a.buttonId.value)),a.togglePopover(),(n=l(a.button))==null||n.focus()))}function p(t){t.preventDefault(),t.stopPropagation()}let d=me();function i(){let t=l(a.panel);if(!t)return;function r(){H(d.value,{[I.Forwards]:()=>N(t,D.First),[I.Backwards]:()=>N(t,D.Last)})===_.Error&&N(ne().filter(n=>n.dataset.headlessuiFocusGuard!=="true"),H(d.value,{[I.Forwards]:D.Next,[I.Backwards]:D.Previous}),{relativeTo:l(a.button)})}r()}return()=>{let t=a.popoverState.value===0,r={open:t},{...n}=e,y=g.value?{ref:$,type:F.value,onKeydown:s,onClick:m}:{ref:$,id:w,type:F.value,"aria-expanded":a.popoverState.value===0,"aria-controls":l(a.panel)?a.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:s,onKeyup:f,onClick:m,onMousedown:p};return M(ee,[ae({ourProps:y,theirProps:{...P,...n},slot:r,attrs:P,slots:S,name:"PopoverButton"}),t&&!g.value&&a.isPortalled.value&&M(Y,{id:b,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:i})])}}}),We=q({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:P,slots:S,expose:T}){var h;let w=(h=e.id)!=null?h:`headlessui-popover-panel-${G()}`,{focus:a}=e,o=re("PopoverPanel"),u=C(()=>le(o.panel)),c=`headlessui-focus-sentinel-before-${G()}`,v=`headlessui-focus-sentinel-after-${G()}`;T({el:o.panel,$el:o.panel}),te(()=>{o.panelId.value=w}),be(()=>{o.panelId.value=null}),ge(Se,o.panelId),x(()=>{var p,d;if(!a||o.popoverState.value!==0||!o.panel)return;let i=(p=u.value)==null?void 0:p.activeElement;(d=l(o.panel))!=null&&d.contains(i)||N(l(o.panel),D.First)});let g=Ae(),$=C(()=>g!==null?(g.value&K.Open)===K.Open:o.popoverState.value===0);function b(p){var d,i;switch(p.key){case O.Escape:if(o.popoverState.value!==0||!l(o.panel)||u.value&&!((d=l(o.panel))!=null&&d.contains(u.value.activeElement)))return;p.preventDefault(),p.stopPropagation(),o.closePopover(),(i=l(o.button))==null||i.focus();break}}function F(p){var d,i,t,r,n;let y=p.relatedTarget;y&&l(o.panel)&&((d=l(o.panel))!=null&&d.contains(y)||(o.closePopover(),((t=(i=l(o.beforePanelSentinel))==null?void 0:i.contains)!=null&&t.call(i,y)||(n=(r=l(o.afterPanelSentinel))==null?void 0:r.contains)!=null&&n.call(r,y))&&y.focus({preventScroll:!0})))}let s=me();function f(){let p=l(o.panel);if(!p)return;function d(){H(s.value,{[I.Forwards]:()=>{var i;N(p,D.First)===_.Error&&((i=l(o.afterPanelSentinel))==null||i.focus())},[I.Backwards]:()=>{var i;(i=l(o.button))==null||i.focus({preventScroll:!0})}})}d()}function m(){let p=l(o.panel);if(!p)return;function d(){H(s.value,{[I.Forwards]:()=>{let i=l(o.button),t=l(o.panel);if(!i)return;let r=ne(),n=r.indexOf(i),y=r.slice(0,n+1),E=[...r.slice(n+1),...y];for(let B of E.slice())if(B.dataset.headlessuiFocusGuard==="true"||t!=null&&t.contains(B)){let R=E.indexOf(B);R!==-1&&E.splice(R,1)}N(E,D.First,{sorted:!1})},[I.Backwards]:()=>{var i;N(p,D.Previous)===_.Error&&((i=l(o.button))==null||i.focus())}})}d()}return()=>{let p={open:o.popoverState.value===0,close:o.close},{focus:d,...i}=e,t={ref:o.panel,id:w,onKeydown:b,onFocusout:a&&o.popoverState.value===0?F:void 0,tabIndex:-1};return ae({ourProps:t,theirProps:{...P,...i},attrs:P,slot:p,slots:{...S,default:(...r)=>{var n;return[M(ee,[$.value&&o.isPortalled.value&&M(Y,{id:c,ref:o.beforePanelSentinel,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:f}),(n=S.default)==null?void 0:n.call(S,...r),$.value&&o.isPortalled.value&&M(Y,{id:v,ref:o.afterPanelSentinel,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:m})])]}},features:fe.RenderStrategy|fe.Static,visible:$.value,name:"PopoverPanel"})}}});const V=Ee(ue.ui.strategy,ue.ui.popover,Ue),Xe=q({components:{HPopover:he,HPopoverButton:Qe,HPopoverPanel:We},inheritAttrs:!1,props:{mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},openDelay:{type:Number,default:()=>V.default.openDelay},closeDelay:{type:Number,default:()=>V.default.closeDelay},overlay:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:P}){const{ui:S,attrs:T}=Te("popover",se(e,"ui"),V,se(e,"class")),h=C(()=>Fe(e.mode==="hover"?{offsetDistance:0}:{},e.popper,S.value.popper)),[w,a]=Re(h.value),o=k(null),u=k(null);let c=null,v=null;te(()=>{var m,p;const s=(m=o.value)==null?void 0:m.$.provides;if(!s)return;const f=Object.getOwnPropertySymbols(s);u.value=f.length&&s[f[0]],e.open&&((p=u.value)==null||p.togglePopover())});const g=C(()=>{var p,d,i;if(e.mode!=="hover")return{};const s=((p=e.popper)==null?void 0:p.offsetDistance)||((d=S.value.popper)==null?void 0:d.offsetDistance)||8,f=(i=h.value.placement)==null?void 0:i.split("-")[0],m=`${s}px`;return f==="top"||f==="bottom"?{paddingTop:m,paddingBottom:m}:f==="left"||f==="right"?{paddingLeft:m,paddingRight:m}:{paddingTop:m,paddingBottom:m,paddingLeft:m,paddingRight:m}});function $(s){!s.cancelable||!u.value||(u.value.popoverState===0?u.value.closePopover():u.value.togglePopover())}function b(){e.mode!=="hover"||!u.value||(v&&(clearTimeout(v),v=null),u.value.popoverState!==0&&(c=c||setTimeout(()=>{u.value.togglePopover&&u.value.togglePopover(),c=null},e.openDelay)))}function F(){e.mode!=="hover"||!u.value||(c&&(clearTimeout(c),c=null),u.value.popoverState!==1&&(v=v||setTimeout(()=>{u.value.closePopover&&u.value.closePopover(),v=null},e.closeDelay)))}return ie(()=>e.open,(s,f)=>{u.value&&(f===void 0||s===f||(s?u.value.popoverState=0:u.value.closePopover()))}),ie(()=>{var s;return(s=u.value)==null?void 0:s.popoverState},(s,f)=>{f===void 0||s===f||P("update:open",s===0)}),Oe(()=>$e("$sbvxjXUCvM")),{ui:S,attrs:T,popover:o,popper:h,trigger:w,container:a,containerStyle:g,onTouchStart:$,onMouseEnter:b,onMouseLeave:F}}}),Je=["disabled"];function Ve(e,P,S,T,h,w){const a=Q("HPopoverButton"),o=Q("HPopoverPanel"),u=Q("HPopover");return j(),pe(u,X({ref:"popover",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:A(({open:c,close:v})=>[W(a,{ref:"trigger",as:"div",disabled:e.disabled,class:L(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:A(()=>[ve(e.$slots,"default",{open:c,close:v},()=>[de("button",{disabled:e.disabled}," Open ",8,Je)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),e.overlay?(j(),pe(ce,X({key:0,appear:""},e.ui.overlay.transition),{default:A(()=>[c?(j(),J("div",{key:0,class:L([e.ui.overlay.base,e.ui.overlay.background])},null,2)):z("",!0)]),_:2},1040)):z("",!0),c?(j(),J("div",{key:1,ref:"container",class:L([e.ui.container,e.ui.width]),style:Be(e.containerStyle),onMouseenter:P[0]||(P[0]=(...g)=>e.onMouseEnter&&e.onMouseEnter(...g))},[W(ce,X({appear:""},e.ui.transition),{default:A(()=>[de("div",null,[e.popper.arrow?(j(),J("div",{key:0,"data-popper-arrow":"",class:L(Object.values(e.ui.arrow))},null,2)):z("",!0),W(o,{class:L([e.ui.base,e.ui.background,e.ui.ring,e.ui.rounded,e.ui.shadow]),static:""},{default:A(()=>[ve(e.$slots,"panel",{open:c,close:v})]),_:2},1032,["class"])])]),_:2},1040)],38)):z("",!0)]),_:3},16,["class","onMouseleave"])}const rt=Ce(Xe,[["render",Ve]]);export{rt as default};