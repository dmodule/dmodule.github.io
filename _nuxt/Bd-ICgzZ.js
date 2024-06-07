import{c as k,i as y}from"./BLrsiNfH.js";import{a2 as x,r as f,aj as M,g as v,a0 as w,a3 as c,C as B,h as F,m as L,a1 as C,aE as N,z as O,aA as $}from"./EZFDOare.js";import{a as A}from"./Cdk1G8wi.js";import{u as I,f as G}from"./BFDz4OWE.js";import{o as h,A as E}from"./CXGMIEZ3.js";function X(e,t,n,r){k.isServer||x(s=>{e=e??window,e.addEventListener(t,n,r),s(()=>e.removeEventListener(t,n,r))})}var U=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(U||{});function Y(){let e=f(0);return A("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Z({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let r=f(null),s=y(r);function a(){var u,o,p;let i=[];for(let l of e)l!==null&&(l instanceof HTMLElement?i.push(l):"value"in l&&l.value instanceof HTMLElement&&i.push(l.value));if(t!=null&&t.value)for(let l of t.value)i.push(l);for(let l of(u=s==null?void 0:s.querySelectorAll("html > *, body > *"))!=null?u:[])l!==document.body&&l!==document.head&&l instanceof HTMLElement&&l.id!=="headlessui-portal-root"&&(l.contains(h(r))||l.contains((p=(o=h(r))==null?void 0:o.getRootNode())==null?void 0:p.host)||i.some(m=>l.contains(m))||i.push(l));return i}return{resolveContainers:a,contains(u){return a().some(o=>o.contains(u))},mainTreeNodeRef:r,MainTreeNode(){return n!=null?null:M(G,{features:I.Hidden,ref:r})}}}let j=Symbol("ForcePortalRootContext");function q(){return c(j,!1)}let _=v({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return w(j,e.force),()=>{let{force:r,...s}=e;return E({theirProps:s,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function z(e){let t=y(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let r=t.createElement("div");return r.setAttribute("id","headlessui-portal-root"),t.body.appendChild(r)}const g=new WeakMap;function W(e){var t;return(t=g.get(e))!=null?t:0}function S(e,t){let n=t(W(e));return n<=0?g.delete(e):g.set(e,n),n}let ee=v({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let r=f(null),s=B(()=>y(r)),a=q(),u=c(H,null),o=f(a===!0||u==null?z(r.value):u.resolveTarget());o.value&&S(o.value,d=>d+1);let p=f(!1);F(()=>{p.value=!0}),x(()=>{a||u!=null&&(o.value=u.resolveTarget())});let i=c(P,null),l=!1,m=$();return L(r,()=>{if(l||!i)return;let d=h(r);d&&(C(i.register(d),m),l=!0)}),C(()=>{var d,b;let T=(d=s.value)==null?void 0:d.getElementById("headlessui-portal-root");!T||o.value!==T||S(o.value,R=>R-1)||o.value.children.length>0||(b=o.value.parentElement)==null||b.removeChild(o.value)}),()=>{if(!p.value||o.value===null)return null;let d={ref:r,"data-headlessui-portal":""};return M(N,{to:o.value},E({ourProps:d,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),P=Symbol("PortalParentContext");function te(){let e=c(P,null),t=f([]);function n(a){return t.value.push(a),e&&e.register(a),()=>r(a)}function r(a){let u=t.value.indexOf(a);u!==-1&&t.value.splice(u,1),e&&e.unregister(a)}let s={register:n,unregister:r,portals:t};return[t,v({name:"PortalWrapper",setup(a,{slots:u}){return w(P,s),()=>{var o;return(o=u.default)==null?void 0:o.call(u)}}})]}let H=Symbol("PortalGroupContext"),re=v({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let r=O({resolveTarget(){return e.target}});return w(H,r),()=>{let{target:s,...a}=e;return E({theirProps:a,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}});export{ee as $,X as E,Z as N,U as d,Y as n,te as q,_ as u,re as z};
