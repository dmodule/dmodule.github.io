import{u as ue}from"./Cz_2ATJ8.js";import{o as g,A as B,T as ie,I as te,N as K,u as D,a as k,l as oe}from"./Dn9DhFEK.js";import{s as de}from"./BsFmeoVB.js";import{u as ve,f as le}from"./BPTtqCEe.js";import{g as O,r as y,aq as G,C as h,a9 as Q,h as z,m as ne,aa as ce,I as M,O as re,ab as W,ac as pe,ad as X,_ as fe,af as be,M as J,au as me,ah as C,o as E,A as q,w as F,b as Y,s as A,aE as ge,a as L,c as Z,W as _,T as ee,t as ae,d as he,n as ye}from"./BBa6so6u.js";import{O as R,T as j,i as Ie,P as H,N as P}from"./CBnPG_Jp.js";import{t as Te}from"./CxIZtCgj.js";const xe={wrapper:"relative space-y-2",container:"relative w-full",base:"focus:outline-none",list:{base:"relative",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-lg",shadow:"",padding:"p-1",height:"h-10",width:"w-full",marker:{wrapper:"absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",base:"w-full h-full",background:"bg-white dark:bg-gray-900",rounded:"rounded-md",shadow:"shadow-sm"},tab:{base:"relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",background:"",active:"text-gray-900 dark:text-white",inactive:"text-gray-500 dark:text-gray-400",height:"h-8",padding:"px-3",size:"text-sm",font:"font-medium",rounded:"rounded-md",shadow:""}}};let we=O({props:{onFocus:{type:Function,required:!0}},setup(e){let o=y(!0);return()=>o.value?G(le,{as:"button",type:"button",features:ve.Focusable,onFocus(f){f.preventDefault();let d,b=50;function s(){var a;if(b--<=0){d&&cancelAnimationFrame(d);return}if((a=e.onFocus)!=null&&a.call(e)){o.value=!1,cancelAnimationFrame(d);return}d=requestAnimationFrame(s)}d=requestAnimationFrame(s)}}):null}});var ke=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ke||{}),Pe=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Pe||{});let se=Symbol("TabsContext");function N(e){let o=W(se,null);if(o===null){let f=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,N),f}return o}let U=Symbol("TabsSSRContext"),Se=O({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:o,attrs:f,emit:d}){var b;let s=y((b=e.selectedIndex)!=null?b:e.defaultIndex),a=y([]),n=y([]),v=h(()=>e.selectedIndex!==null),x=h(()=>v.value?e.selectedIndex:s.value);function c(r){var u;let p=R(t.tabs.value,g),l=R(t.panels.value,g),m=p.filter(I=>{var T;return!((T=g(I))!=null&&T.hasAttribute("disabled"))});if(r<0||r>p.length-1){let I=D(s.value===null?0:Math.sign(r-s.value),{[-1]:()=>1,0:()=>D(Math.sign(r),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),T=D(I,{0:()=>p.indexOf(m[0]),1:()=>p.indexOf(m[m.length-1])});T!==-1&&(s.value=T),t.tabs.value=p,t.panels.value=l}else{let I=p.slice(0,r),T=[...p.slice(r),...I].find(V=>m.includes(V));if(!T)return;let $=(u=p.indexOf(T))!=null?u:t.selectedIndex.value;$===-1&&($=t.selectedIndex.value),s.value=$,t.tabs.value=p,t.panels.value=l}}let t={selectedIndex:h(()=>{var r,u;return(u=(r=s.value)!=null?r:e.defaultIndex)!=null?u:null}),orientation:h(()=>e.vertical?"vertical":"horizontal"),activation:h(()=>e.manual?"manual":"auto"),tabs:a,panels:n,setSelectedIndex(r){x.value!==r&&d("change",r),v.value||c(r)},registerTab(r){var u;if(a.value.includes(r))return;let p=a.value[s.value];if(a.value.push(r),a.value=R(a.value,g),!v.value){let l=(u=a.value.indexOf(p))!=null?u:s.value;l!==-1&&(s.value=l)}},unregisterTab(r){let u=a.value.indexOf(r);u!==-1&&a.value.splice(u,1)},registerPanel(r){n.value.includes(r)||(n.value.push(r),n.value=R(n.value,g))},unregisterPanel(r){let u=n.value.indexOf(r);u!==-1&&n.value.splice(u,1)}};Q(se,t);let i=y({tabs:[],panels:[]}),w=y(!1);z(()=>{w.value=!0}),Q(U,h(()=>w.value?null:i.value));let S=h(()=>e.selectedIndex);return z(()=>{ne([S],()=>{var r;return c((r=e.selectedIndex)!=null?r:e.defaultIndex)},{immediate:!0})}),ce(()=>{if(!v.value||x.value==null||t.tabs.value.length<=0)return;let r=R(t.tabs.value,g);r.some((u,p)=>g(t.tabs.value[p])!==g(u))&&t.setSelectedIndex(r.findIndex(u=>g(u)===g(t.tabs.value[x.value])))}),()=>{let r={selectedIndex:s.value};return G(M,[a.value.length<=0&&G(we,{onFocus:()=>{for(let u of a.value){let p=g(u);if((p==null?void 0:p.tabIndex)===0)return p.focus(),!0}return!1}}),B({theirProps:{...f,...ie(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:r,slots:o,attrs:f,name:"TabGroup"})])}}}),$e=O({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:o,slots:f}){let d=N("TabList");return()=>{let b={selectedIndex:d.selectedIndex.value},s={role:"tablist","aria-orientation":d.orientation.value};return B({ourProps:s,theirProps:e,slot:b,attrs:o,slots:f,name:"TabList"})}}}),Oe=O({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:o,slots:f,expose:d}){var b;let s=(b=e.id)!=null?b:`headlessui-tabs-tab-${te()}`,a=N("Tab"),n=y(null);d({el:n,$el:n}),z(()=>a.registerTab(n)),re(()=>a.unregisterTab(n));let v=W(U),x=h(()=>{if(v.value){let l=v.value.tabs.indexOf(s);return l===-1?v.value.tabs.push(s)-1:l}return-1}),c=h(()=>{let l=a.tabs.value.indexOf(n);return l===-1?x.value:l}),t=h(()=>c.value===a.selectedIndex.value);function i(l){var m;let I=l();if(I===j.Success&&a.activation.value==="auto"){let T=(m=Ie(n))==null?void 0:m.activeElement,$=a.tabs.value.findIndex(V=>g(V)===T);$!==-1&&a.setSelectedIndex($)}return I}function w(l){let m=a.tabs.value.map(I=>g(I)).filter(Boolean);if(l.key===k.Space||l.key===k.Enter){l.preventDefault(),l.stopPropagation(),a.setSelectedIndex(c.value);return}switch(l.key){case k.Home:case k.PageUp:return l.preventDefault(),l.stopPropagation(),i(()=>H(m,P.First));case k.End:case k.PageDown:return l.preventDefault(),l.stopPropagation(),i(()=>H(m,P.Last))}if(i(()=>D(a.orientation.value,{vertical(){return l.key===k.ArrowUp?H(m,P.Previous|P.WrapAround):l.key===k.ArrowDown?H(m,P.Next|P.WrapAround):j.Error},horizontal(){return l.key===k.ArrowLeft?H(m,P.Previous|P.WrapAround):l.key===k.ArrowRight?H(m,P.Next|P.WrapAround):j.Error}}))===j.Success)return l.preventDefault()}let S=y(!1);function r(){var l;S.value||(S.value=!0,!e.disabled&&((l=g(n))==null||l.focus({preventScroll:!0}),a.setSelectedIndex(c.value),Te(()=>{S.value=!1})))}function u(l){l.preventDefault()}let p=de(h(()=>({as:e.as,type:o.type})),n);return()=>{var l,m;let I={selected:t.value,disabled:(l=e.disabled)!=null?l:!1},{...T}=e,$={ref:n,onKeydown:w,onMousedown:u,onClick:r,id:s,role:"tab",type:p.value,"aria-controls":(m=g(a.panels.value[c.value]))==null?void 0:m.id,"aria-selected":t.value,tabIndex:t.value?0:-1,disabled:e.disabled?!0:void 0};return B({ourProps:$,theirProps:T,slot:I,attrs:o,slots:f,name:"Tab"})}}}),Ae=O({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:o,attrs:f}){let d=N("TabPanels");return()=>{let b={selectedIndex:d.selectedIndex.value};return B({theirProps:e,ourProps:{},slot:b,attrs:f,slots:o,name:"TabPanels"})}}}),He=O({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null},tabIndex:{type:Number,default:0}},setup(e,{attrs:o,slots:f,expose:d}){var b;let s=(b=e.id)!=null?b:`headlessui-tabs-panel-${te()}`,a=N("TabPanel"),n=y(null);d({el:n,$el:n}),z(()=>a.registerPanel(n)),re(()=>a.unregisterPanel(n));let v=W(U),x=h(()=>{if(v.value){let i=v.value.panels.indexOf(s);return i===-1?v.value.panels.push(s)-1:i}return-1}),c=h(()=>{let i=a.panels.value.indexOf(n);return i===-1?x.value:i}),t=h(()=>c.value===a.selectedIndex.value);return()=>{var i;let w={selected:t.value},{tabIndex:S,...r}=e,u={ref:n,id:s,role:"tabpanel","aria-labelledby":(i=g(a.tabs.value[c.value]))==null?void 0:i.id,tabIndex:t.value?S:-1};return!t.value&&e.unmount&&!e.static?G(le,{as:"span","aria-hidden":!0,...u}):B({ourProps:u,theirProps:r,slot:w,attrs:o,slots:f,features:K.Static|K.RenderStrategy,visible:t.value,name:"TabPanel"})}}});const Ce=pe(X.ui.strategy,X.ui.tabs,xe),Ee=O({components:{HTabGroup:Se,HTabList:$e,HTab:Oe,HTabPanels:Ae,HTabPanel:He},inheritAttrs:!1,props:{modelValue:{type:Number,default:void 0},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},defaultIndex:{type:Number,default:0},items:{type:Array,default:()=>[]},unmount:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{ui:f,attrs:d}=be("tabs",J(e,"ui"),Ce,J(e,"class")),b=y(),s=y([]),a=y(),n=y(e.modelValue||e.defaultIndex);function v(c){var i;const t=(i=s.value[c])==null?void 0:i.$el;t&&a.value&&(a.value.style.top=`${t.offsetTop}px`,a.value.style.left=`${t.offsetLeft}px`,a.value.style.width=`${t.offsetWidth}px`,a.value.style.height=`${t.offsetHeight}px`)}function x(c){n.value=c,o("change",c),e.modelValue!==void 0&&o("update:modelValue",n.value),v(n.value)}return me(b,()=>{v(n.value)}),ne(()=>e.modelValue,c=>{n.value=c,v(n.value)}),z(()=>v(n.value)),oe(()=>ue("$39Q85lIXra")),{ui:f,attrs:d,listRef:b,itemRefs:s,markerRef:a,selectedIndex:n,onChange:x}}}),Fe={class:"truncate"};function Re(e,o,f,d,b,s){const a=C("HTab"),n=C("HTabList"),v=C("HTabPanel"),x=C("HTabPanels"),c=C("HTabGroup");return E(),q(c,ye({vertical:e.orientation==="vertical","selected-index":e.selectedIndex,as:"div",class:e.ui.wrapper},e.attrs,{onChange:e.onChange}),{default:F(()=>[Y(n,{ref:"listRef",class:A([e.ui.list.base,e.ui.list.background,e.ui.list.rounded,e.ui.list.shadow,e.ui.list.padding,e.ui.list.width,e.orientation==="horizontal"&&e.ui.list.height,e.orientation==="horizontal"&&"inline-grid items-center"]),style:ge([e.orientation==="horizontal"&&`grid-template-columns: repeat(${e.items.length}, minmax(0, 1fr))`])},{default:F(()=>[L("div",{ref:"markerRef",class:A(e.ui.list.marker.wrapper)},[L("div",{class:A([e.ui.list.marker.base,e.ui.list.marker.background,e.ui.list.marker.rounded,e.ui.list.marker.shadow])},null,2)],2),(E(!0),Z(M,null,_(e.items,(t,i)=>(E(),q(a,{key:i,ref_for:!0,ref:"itemRefs",disabled:t.disabled,as:"template"},{default:F(({selected:w,disabled:S})=>[L("button",{class:A([e.ui.list.tab.base,e.ui.list.tab.background,e.ui.list.tab.height,e.ui.list.tab.padding,e.ui.list.tab.size,e.ui.list.tab.font,e.ui.list.tab.rounded,e.ui.list.tab.shadow,w?e.ui.list.tab.active:e.ui.list.tab.inactive])},[ee(e.$slots,"default",{item:t,index:i,selected:w,disabled:S},()=>[L("span",Fe,ae(t.label),1)])],2)]),_:2},1032,["disabled"]))),128))]),_:3},8,["class","style"]),Y(x,{class:A(e.ui.container)},{default:F(()=>[(E(!0),Z(M,null,_(e.items,(t,i)=>(E(),q(v,{key:i,class:A(e.ui.base),unmount:e.unmount},{default:F(({selected:w})=>[ee(e.$slots,t.slot||"item",{item:t,index:i,selected:w},()=>[he(ae(t.content),1)])]),_:2},1032,["class","unmount"]))),128))]),_:3},8,["class"])]),_:3},16,["vertical","selected-index","class","onChange"])}const Ve=fe(Ee,[["render",Re]]);export{Ve as default};