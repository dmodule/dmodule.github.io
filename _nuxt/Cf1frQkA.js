import T from"./rTv3izG0.js";import{ac as _,ad as N,_ as ee,g as te,v as q,B as z,af as ae,M as F,C as y,aY as oe,aw as P,aF as I,o,c as r,a as u,s as n,b as U,n as h,H as S,I as j,W as D,T as v,A as O,t as w,am as ne,d as se,ay as E}from"./qrZET0Yc.js";import H from"./Db_hr2gx.js";import"./CL65k3uv.js";import"./DrQTtqFq.js";const le={wrapper:"relative overflow-x-auto",base:"min-w-full table-fixed",divide:"divide-y divide-gray-300 dark:divide-gray-700",thead:"relative",tbody:"divide-y divide-gray-200 dark:divide-gray-800",tr:{base:"",selected:"bg-gray-50 dark:bg-gray-800/50",active:"hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"},th:{base:"text-left rtl:text-right",padding:"px-4 py-3.5",color:"text-gray-900 dark:text-white",font:"font-semibold",size:"text-sm"},td:{base:"whitespace-nowrap",padding:"px-4 py-4",color:"text-gray-500 dark:text-gray-400",font:"",size:"text-sm"},checkbox:{padding:"ps-4"},loadingState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},progress:{wrapper:"absolute inset-x-0 -bottom-[0.5px] p-0"},default:{sortAscIcon:"i-heroicons-bars-arrow-up-20-solid",sortDescIcon:"i-heroicons-bars-arrow-down-20-solid",sortButton:{icon:"i-heroicons-arrows-up-down-20-solid",trailing:!0,square:!0,color:"gray",variant:"ghost",class:"-m-1.5"},checkbox:{color:"primary"},progress:{color:"primary",animation:"carousel"},loadingState:{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},emptyState:{icon:"i-heroicons-circle-stack-20-solid",label:"No items."}}};function re(e){return e?e[0].toUpperCase()+e.slice(1):""}const m=_(N.ui.strategy,N.ui.table,le);function ie(e,l){return e===l}function L(e,l,g){return e===l?0:g==="asc"?e<l?-1:1:e>l?-1:1}const ue=te({components:{UIcon:q,UButton:z,UProgress:H,UCheckbox:T},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>ie},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortMode:{type:String,default:"auto"},sortButton:{type:Object,default:()=>m.default.sortButton},sortAscIcon:{type:String,default:()=>m.default.sortAscIcon},sortDescIcon:{type:String,default:()=>m.default.sortDescIcon},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>m.default.loadingState},emptyState:{type:Object,default:()=>m.default.emptyState},progress:{type:Object,default:()=>m.default.progress},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","update:sort"],setup(e,{emit:l,attrs:g}){const{ui:k,attrs:R}=ae("table",F(e,"ui"),m,F(e,"class")),V=y(()=>e.columns??Object.keys(e.rows[0]??{}).map(t=>({key:t,label:re(t),sortable:!1,class:void 0,sort:L}))),s=oe(e,"sort",l,{passive:!0,defaultValue:P({},e.sort,{column:null,direction:"asc"})}),C={column:s.value.column,direction:null},B=y(()=>{var p;if(!((p=s.value)!=null&&p.column)||e.sortMode==="manual")return e.rows;const{column:t,direction:i}=s.value;return e.rows.slice().sort((K,Q)=>{var M;const X=I(K,t),Z=I(Q,t);return(((M=V.value.find(x=>x.key===t))==null?void 0:M.sort)??L)(X,Z,i)})}),d=y({get(){return e.modelValue},set(t){l("update:modelValue",t)}}),a=y(()=>d.value&&d.value.length>0&&d.value.length<e.rows.length),f=y(()=>e.emptyState===null?null:{...k.value.default.emptyState,...e.emptyState}),c=y(()=>e.loadingState===null?null:{...k.value.default.loadingState,...e.loadingState});function A(t,i){if(typeof e.by=="string"){const p=e.by;return(t==null?void 0:t[p])===(i==null?void 0:i[p])}return e.by(t,i)}function b(t){return e.modelValue?d.value.some(i=>A(E(i),E(t))):!1}function $(t){if(s.value.column===t.key){const i=!t.direction||t.direction==="asc"?"desc":"asc";s.value.direction===i?s.value=P({},C,{column:null,direction:"asc"}):s.value={column:s.value.column,direction:s.value.direction==="asc"?"desc":"asc"}}else s.value={column:t.key,direction:t.direction||"asc"}}function W(t){g.onSelect&&g.onSelect(t)}function Y(){e.rows.forEach(t=>{b(t)||d.value.push(t)})}function G(t){t?Y():d.value=[]}function J(t,i,p=""){return I(t,i,p)}return{ui:k,attrs:R,sort:s,columns:V,rows:B,selected:d,indeterminate:a,emptyState:f,loadingState:c,isSelected:b,onSort:$,onSelect:W,onChange:G,getRowData:J}}}),de={key:1},ce={key:0},pe={key:0},me=["colspan"],fe={key:1},ye=["colspan"],ge=["onClick"];function be(e,l,g,k,R,V){const s=T,C=z,B=H,d=q;return o(),r("div",h({class:e.ui.wrapper},e.attrs),[u("table",{class:n([e.ui.base,e.ui.divide])},[u("thead",{class:n(e.ui.thead)},[u("tr",{class:n(e.ui.tr.base)},[e.modelValue?(o(),r("th",{key:0,scope:"col",class:n(e.ui.checkbox.padding)},[U(s,h({"model-value":e.indeterminate||e.selected.length===e.rows.length,indeterminate:e.indeterminate},e.ui.default.checkbox,{"aria-label":"Select all",onChange:e.onChange}),null,16,["model-value","indeterminate","onChange"])],2)):S("",!0),(o(!0),r(j,null,D(e.columns,(a,f)=>(o(),r("th",{key:f,scope:"col",class:n([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,a.class])},[v(e.$slots,`${a.key}-header`,{column:a,sort:e.sort,onSort:e.onSort},()=>[a.sortable?(o(),O(C,h({key:0,ref_for:!0},{...e.ui.default.sortButton||{},...e.sortButton},{icon:!e.sort.column||e.sort.column!==a.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:a[e.columnAttribute],onClick:c=>e.onSort(a)}),null,16,["icon","label","onClick"])):(o(),r("span",de,w(a[e.columnAttribute]),1))])],2))),128))],2),e.loading&&e.progress?(o(),r("tr",ce,[u("td",{colspan:0,class:n(e.ui.progress.wrapper)},[U(B,h({...e.ui.default.progress||{},...e.progress},{size:"2xs"}),null,16)],2)])):S("",!0)],2),u("tbody",{class:n(e.ui.tbody)},[e.loadingState&&e.loading&&!e.rows.length?(o(),r("tr",pe,[u("td",{colspan:e.columns.length+(e.modelValue?1:0)},[v(e.$slots,"loading-state",{},()=>[u("div",{class:n(e.ui.loadingState.wrapper)},[e.loadingState.icon?(o(),O(d,{key:0,name:e.loadingState.icon,class:n(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):S("",!0),u("p",{class:n(e.ui.loadingState.label)},w(e.loadingState.label),3)],2)])],8,me)])):e.emptyState&&!e.rows.length?(o(),r("tr",fe,[u("td",{colspan:e.columns.length+(e.modelValue?1:0)},[v(e.$slots,"empty-state",{},()=>[u("div",{class:n(e.ui.emptyState.wrapper)},[e.emptyState.icon?(o(),O(d,{key:0,name:e.emptyState.icon,class:n(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):S("",!0),u("p",{class:n(e.ui.emptyState.label)},w(e.emptyState.label),3)],2)])],8,ye)])):(o(!0),r(j,{key:2},D(e.rows,(a,f)=>(o(),r("tr",{key:f,class:n([e.ui.tr.base,e.isSelected(a)&&e.ui.tr.selected,e.$attrs.onSelect&&e.ui.tr.active,a==null?void 0:a.class]),onClick:()=>e.onSelect(a)},[e.modelValue?(o(),r("td",{key:0,class:n(e.ui.checkbox.padding)},[U(s,h({modelValue:e.selected,"onUpdate:modelValue":l[0]||(l[0]=c=>e.selected=c),value:a,ref_for:!0},e.ui.default.checkbox,{"aria-label":"Select row",onClick:l[1]||(l[1]=ne(()=>{},["stop"]))}),null,16,["modelValue","value"])],2)):S("",!0),(o(!0),r(j,null,D(e.columns,(c,A)=>{var b;return o(),r("td",{key:A,class:n([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size,(b=a[c.key])==null?void 0:b.class])},[v(e.$slots,`${c.key}-data`,{column:c,row:a,index:f,getRowData:$=>e.getRowData(a,c.key,$)},()=>[se(w(e.getRowData(a,c.key)),1)])],2)}),128))],10,ge))),128))],2)],2)],16)}const Ce=ee(ue,[["render",be]]);export{Ce as default};
