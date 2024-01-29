import{g as $,r as S,k as w,a9 as ce,h as te,a5 as ve,aa as me,J as N,ab as fe,_ as ge,ac as be,at as Me,ad as W,v as ae,Z as ne,af as ye,W as Z,au as Ie,S as Y,av as he,ak as ke,al as Se,ah as B,o as I,s as C,w as T,b as L,y as R,A as G,a as K,c as D,U as we,aj as Re,V as E,z as H,F as _,n as z,K as Pe,t as X,d as Te,e as oe}from"./entry.RTXGjyIc.js";import ue from"./Kbd.sQzS9c13.js";import{u as De}from"./usePopper.0Y1MULI5.js";import{o as y,u as Oe,H as U,t as J,N as x,a as b}from"./dom.GQGQtvgG.js";import{p as Ce,u as Ne,x as $e,a as h}from"./use-tracked-pointer.k2-H8xHL.js";import{c as Ae,l as F,p as Be}from"./open-closed.cvjhl3UA.js";import{b as Le}from"./use-resolve-button-type.KK7Tmug1.js";import{w as Ee,h as He,v as Fe,N as ee,_ as le,O as Ue}from"./focus-management.mrAqvuDT.js";import{y as je}from"./use-outside-click.HF00DTN-.js";import{p as Ke}from"./use-text-value.2Pa_t3RP.js";var _e=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(_e||{}),ze=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ze||{});function Je(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let se=Symbol("MenuContext");function j(e){let f=fe(se,null);if(f===null){let g=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(g,j),g}return f}let Ve=$({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:f,attrs:g}){let M=S(1),t=S(null),v=S(null),c=S([]),i=S(""),r=S(null),u=S(1);function a(s=d=>d){let d=r.value!==null?c.value[r.value]:null,p=Ue(s(c.value.slice()),l=>y(l.dataRef.domRef)),n=d?p.indexOf(d):null;return n===-1&&(n=null),{items:p,activeItemIndex:n}}let m={menuState:M,buttonRef:t,itemsRef:v,items:c,searchQuery:i,activeItemIndex:r,activationTrigger:u,closeMenu:()=>{M.value=1,r.value=null},openMenu:()=>M.value=0,goToItem(s,d,p){let n=a(),l=$e(s===h.Specific?{focus:h.Specific,id:d}:{focus:s},{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:o=>o.id,resolveDisabled:o=>o.dataRef.disabled});i.value="",r.value=l,u.value=p??1,c.value=n.items},search(s){let d=i.value!==""?0:1;i.value+=s.toLowerCase();let p=(r.value!==null?c.value.slice(r.value+d).concat(c.value.slice(0,r.value+d)):c.value).find(l=>l.dataRef.textValue.startsWith(i.value)&&!l.dataRef.disabled),n=p?c.value.indexOf(p):-1;n===-1||n===r.value||(r.value=n,u.value=1)},clearSearch(){i.value=""},registerItem(s,d){let p=a(n=>[...n,{id:s,dataRef:d}]);c.value=p.items,r.value=p.activeItemIndex,u.value=1},unregisterItem(s){let d=a(p=>{let n=p.findIndex(l=>l.id===s);return n!==-1&&p.splice(n,1),p});c.value=d.items,r.value=d.activeItemIndex,u.value=1}};return je([t,v],(s,d)=>{var p;m.closeMenu(),Ee(d,He.Loose)||(s.preventDefault(),(p=y(t))==null||p.focus())},w(()=>M.value===0)),ce(se,m),Ae(w(()=>Oe(M.value,{0:F.Open,1:F.Closed}))),()=>{let s={open:M.value===0,close:m.closeMenu};return U({ourProps:{},theirProps:e,slot:s,slots:f,attrs:g,name:"Menu"})}}}),qe=$({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${J()}`}},setup(e,{attrs:f,slots:g,expose:M}){let t=j("MenuButton");M({el:t.buttonRef,$el:t.buttonRef});function v(u){switch(u.key){case b.Space:case b.Enter:case b.ArrowDown:u.preventDefault(),u.stopPropagation(),t.openMenu(),N(()=>{var a;(a=y(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(h.First)});break;case b.ArrowUp:u.preventDefault(),u.stopPropagation(),t.openMenu(),N(()=>{var a;(a=y(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(h.Last)});break}}function c(u){switch(u.key){case b.Space:u.preventDefault();break}}function i(u){e.disabled||(t.menuState.value===0?(t.closeMenu(),N(()=>{var a;return(a=y(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(u.preventDefault(),t.openMenu(),Je(()=>{var a;return(a=y(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let r=Le(w(()=>({as:e.as,type:f.type})),t.buttonRef);return()=>{var u;let a={open:t.menuState.value===0},{id:m,...s}=e,d={ref:t.buttonRef,id:m,type:r.value,"aria-haspopup":"menu","aria-controls":(u=y(t.itemsRef))==null?void 0:u.id,"aria-expanded":t.menuState.value===0,onKeydown:v,onKeyup:c,onClick:i};return U({ourProps:d,theirProps:s,slot:a,attrs:f,slots:g,name:"MenuButton"})}}}),Qe=$({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${J()}`}},setup(e,{attrs:f,slots:g,expose:M}){let t=j("MenuItems"),v=S(null);M({el:t.itemsRef,$el:t.itemsRef}),Ce({container:w(()=>y(t.itemsRef)),enabled:w(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function c(a){var m;switch(v.value&&clearTimeout(v.value),a.key){case b.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case b.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let s=t.items.value[t.activeItemIndex.value];(m=y(s.dataRef.domRef))==null||m.click()}t.closeMenu(),le(y(t.buttonRef));break;case b.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(h.Next);case b.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(h.Previous);case b.Home:case b.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(h.First);case b.End:case b.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(h.Last);case b.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),N(()=>{var s;return(s=y(t.buttonRef))==null?void 0:s.focus({preventScroll:!0})});break;case b.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),N(()=>Fe(y(t.buttonRef),a.shiftKey?ee.Previous:ee.Next));break;default:a.key.length===1&&(t.search(a.key),v.value=setTimeout(()=>t.clearSearch(),350));break}}function i(a){switch(a.key){case b.Space:a.preventDefault();break}}let r=Be(),u=w(()=>r!==null?(r.value&F.Open)===F.Open:t.menuState.value===0);return()=>{var a,m;let s={open:t.menuState.value===0},{id:d,...p}=e,n={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(m=y(t.buttonRef))==null?void 0:m.id,id:d,onKeydown:c,onKeyup:i,role:"menu",tabIndex:0,ref:t.itemsRef};return U({ourProps:n,theirProps:p,slot:s,attrs:f,slots:g,features:x.RenderStrategy|x.Static,visible:u.value,name:"MenuItems"})}}}),We=$({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${J()}`}},setup(e,{slots:f,attrs:g,expose:M}){let t=j("MenuItem"),v=S(null);M({el:v,$el:v});let c=w(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),i=Ke(v),r=w(()=>({disabled:e.disabled,get textValue(){return i()},domRef:v}));te(()=>t.registerItem(e.id,r)),ve(()=>t.unregisterItem(e.id)),me(()=>{t.menuState.value===0&&c.value&&t.activationTrigger.value!==0&&N(()=>{var n,l;return(l=(n=y(v))==null?void 0:n.scrollIntoView)==null?void 0:l.call(n,{block:"nearest"})})});function u(n){if(e.disabled)return n.preventDefault();t.closeMenu(),le(y(t.buttonRef))}function a(){if(e.disabled)return t.goToItem(h.Nothing);t.goToItem(h.Specific,e.id)}let m=Ne();function s(n){m.update(n)}function d(n){m.wasMoved(n)&&(e.disabled||c.value||t.goToItem(h.Specific,e.id,0))}function p(n){m.wasMoved(n)&&(e.disabled||c.value&&t.goToItem(h.Nothing))}return()=>{let{disabled:n}=e,l={active:c.value,disabled:n,close:t.closeMenu},{id:o,...k}=e;return U({ourProps:{id:o,ref:v,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,disabled:void 0,onClick:u,onFocus:a,onPointerenter:s,onMouseenter:s,onPointermove:d,onMousemove:d,onPointerleave:p,onMouseleave:p},theirProps:{...g,...k},slot:l,attrs:g,slots:f,name:"MenuItem"})}}});const Ze=be(W.ui.strategy,W.ui.dropdown,Me),Ye=$({components:{HMenu:Ve,HMenuButton:qe,HMenuItems:Qe,HMenuItem:We,UIcon:ae,UAvatar:ne,UKbd:ue},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:f}){const{ui:g,attrs:M}=ye("dropdown",Z(e,"ui"),Ze,Z(e,"class")),t=w(()=>Ie(e.mode==="hover"?{offsetDistance:0}:{},e.popper,g.value.popper)),[v,c]=De(t.value),i=S(null);let r=null,u=null;te(()=>{var o,k;const n=(o=v.value)==null?void 0:o.$.provides;if(!n)return;const l=Object.getOwnPropertySymbols(n);i.value=l.length&&n[l[0]],e.open&&((k=i.value)==null||k.openMenu())});const a=w(()=>{var k,P,O;if(e.mode!=="hover")return{};const n=((k=e.popper)==null?void 0:k.offsetDistance)||((P=g.value.popper)==null?void 0:P.offsetDistance)||8,l=(O=t.value.placement)==null?void 0:O.split("-")[0],o=`${n}px`;return l==="top"||l==="bottom"?{paddingTop:o,paddingBottom:o}:l==="left"||l==="right"?{paddingLeft:o,paddingRight:o}:{paddingTop:o,paddingBottom:o,paddingLeft:o,paddingRight:o}});function m(){e.mode!=="hover"||!i.value||(u&&(clearTimeout(u),u=null),i.value.menuState!==0&&(r=r||setTimeout(()=>{i.value.openMenu&&i.value.openMenu(),r=null},e.openDelay)))}function s(){e.mode!=="hover"||!i.value||(r&&(clearTimeout(r),r=null),i.value.menuState!==1&&(u=u||setTimeout(()=>{i.value.closeMenu&&i.value.closeMenu(),u=null},e.closeDelay)))}function d(n,l,{href:o,navigate:k,close:P,isExternal:O}){l.click&&l.click(n),o&&!O&&(k(n),P())}return Y(()=>e.open,(n,l)=>{i.value&&(l===void 0||n===l||(n?i.value.openMenu():i.value.closeMenu()))}),Y(()=>{var n;return(n=i.value)==null?void 0:n.menuState},(n,l)=>{l===void 0||n===l||f("update:open",n===0)}),{ui:g,attrs:M,popper:t,trigger:v,container:c,containerStyle:a,onMouseOver:m,onMouseLeave:s,onClick:d,getNuxtLinkProps:he,twMerge:ke,twJoin:Se,NuxtLink:oe}}}),Ge=["disabled"];function Xe(e,f,g,M,t,v){const c=B("HMenuButton"),i=ae,r=ne,u=ue,a=B("HMenuItem"),m=oe,s=B("HMenuItems"),d=B("HMenu");return I(),C(d,E({as:"div",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:T(({open:p})=>[L(c,{ref:"trigger",as:"div",disabled:e.disabled,class:R(e.ui.trigger),role:"button",onMouseover:e.onMouseOver},{default:T(()=>[G(e.$slots,"default",{open:p,disabled:e.disabled},()=>[K("button",{disabled:e.disabled}," Open ",8,Ge)])]),_:2},1032,["disabled","class","onMouseover"]),p&&e.items.length?(I(),D("div",{key:0,ref:"container",class:R([e.ui.container,e.ui.width]),style:we(e.containerStyle),onMouseover:f[0]||(f[0]=(...n)=>e.onMouseOver&&e.onMouseOver(...n))},[L(Re,E({appear:""},e.ui.transition),{default:T(()=>[K("div",null,[e.popper.arrow?(I(),D("div",{key:0,"data-popper-arrow":"",class:R(Object.values(e.ui.arrow))},null,2)):H("",!0),L(s,{class:R([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:T(()=>[(I(!0),D(_,null,z(e.items,(n,l)=>(I(),D("div",{key:l,class:R(e.ui.padding)},[(I(!0),D(_,null,z(n,(o,k)=>(I(),C(m,E({key:k},e.getNuxtLinkProps(o),{custom:""}),{default:T(({href:P,target:O,rel:ie,navigate:re,isExternal:de})=>[L(a,{disabled:o.disabled},{default:T(({active:V,disabled:q,close:pe})=>[(I(),C(Pe(P?"a":"button"),{href:q?void 0:P,rel:ie,target:O,class:R(e.twMerge(e.twJoin(e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,V?e.ui.item.active:e.ui.item.inactive,q&&e.ui.item.disabled),o.class)),onClick:A=>e.onClick(A,o,{href:P,navigate:re,close:pe,isExternal:de})},{default:T(()=>[G(e.$slots,o.slot||"item",{item:o},()=>{var A;return[o.icon?(I(),C(i,{key:0,name:o.icon,class:R(e.twMerge(e.twJoin(e.ui.item.icon.base,V?e.ui.item.icon.active:e.ui.item.icon.inactive),o.iconClass))},null,8,["name","class"])):o.avatar?(I(),C(r,E({key:1},{size:e.ui.item.avatar.size,...o.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):H("",!0),K("span",{class:R(e.twMerge(e.ui.item.label,o.labelClass))},X(o.label),3),(A=o.shortcuts)!=null&&A.length?(I(),D("span",{key:2,class:R(e.ui.item.shortcuts)},[(I(!0),D(_,null,z(o.shortcuts,Q=>(I(),C(u,{key:Q},{default:T(()=>[Te(X(Q),1)]),_:2},1024))),128))],2)):H("",!0)]})]),_:2},1032,["href","rel","target","class","onClick"]))]),_:2},1032,["disabled"])]),_:2},1040))),128))],2))),128))]),_:3},8,["class"])])]),_:3},16)],38)):H("",!0)]),_:3},16,["class","onMouseleave"])}const rt=ge(Ye,[["render",Xe]]);export{rt as default};
