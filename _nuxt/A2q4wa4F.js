import q from"./C4qCPQPM.js";import{a4 as ee,a5 as M,_ as te,g as ae,v as z,B as H,a7 as oe,a8 as F,C as m,aU as ne,ap as P,ax as I,o as s,c as l,a as u,K as S,s as n,t as v,H as y,b as U,n as k,I as j,N as D,A as O,af as se,d as re,ar as E}from"./Bo6MmINt.js";import K from"./B0g0IWI8.js";import"./CAeQxgGy.js";import"./DDtdqtpV.js";const le={wrapper:"relative overflow-x-auto",base:"min-w-full table-fixed",divide:"divide-y divide-gray-300 dark:divide-gray-700",thead:"relative",tbody:"divide-y divide-gray-200 dark:divide-gray-800",caption:"sr-only",tr:{base:"",selected:"bg-gray-50 dark:bg-gray-800/50",active:"hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"},th:{base:"text-left rtl:text-right",padding:"px-4 py-3.5",color:"text-gray-900 dark:text-white",font:"font-semibold",size:"text-sm"},td:{base:"whitespace-nowrap",padding:"px-4 py-4",color:"text-gray-500 dark:text-gray-400",font:"",size:"text-sm"},checkbox:{padding:"ps-4"},loadingState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},progress:{wrapper:"absolute inset-x-0 -bottom-[0.5px] p-0"},default:{sortAscIcon:"i-heroicons-bars-arrow-up-20-solid",sortDescIcon:"i-heroicons-bars-arrow-down-20-solid",sortButton:{icon:"i-heroicons-arrows-up-down-20-solid",trailing:!0,square:!0,color:"gray",variant:"ghost",class:"-m-1.5"},checkbox:{color:"primary"},progress:{color:"primary",animation:"carousel"},loadingState:{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},emptyState:{icon:"i-heroicons-circle-stack-20-solid",label:"No items."}}};function ie(e){return e?e[0].toUpperCase()+e.slice(1):""}const g=ee(M.ui.strategy,M.ui.table,le);function ue(e,r){return e===r}function L(e,r,b){return e===r?0:b==="asc"?e<r?-1:1:e>r?-1:1}const de=ae({components:{UIcon:z,UButton:H,UProgress:K,UCheckbox:q},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>ue},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortMode:{type:String,default:"auto"},sortButton:{type:Object,default:()=>g.default.sortButton},sortAscIcon:{type:String,default:()=>g.default.sortAscIcon},sortDescIcon:{type:String,default:()=>g.default.sortDescIcon},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>g.default.loadingState},emptyState:{type:Object,default:()=>g.default.emptyState},caption:{type:String,default:null},progress:{type:Object,default:()=>g.default.progress},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","update:sort"],setup(e,{emit:r,attrs:b}){const{ui:w,attrs:R}=oe("table",F(e,"ui"),g,F(e,"class")),V=m(()=>e.columns??Object.keys(e.rows[0]??{}).map(t=>({key:t,label:ie(t),sortable:!1,class:void 0,sort:L}))),o=ne(e,"sort",r,{passive:!0,defaultValue:P({},e.sort,{column:null,direction:"asc"})}),C={column:o.value.column,direction:null},A=m(()=>{var p;if(!((p=o.value)!=null&&p.column)||e.sortMode==="manual")return e.rows;const{column:t,direction:i}=o.value;return e.rows.slice().sort((X,Y)=>{var N;const Z=I(X,t),x=I(Y,t);return(((N=V.value.find(_=>_.key===t))==null?void 0:N.sort)??L)(Z,x,i)})}),d=m({get(){return e.modelValue},set(t){r("update:modelValue",t)}}),a=m(()=>d.value&&d.value.length>0&&d.value.length<e.rows.length),f=m(()=>e.emptyState===null?null:{...w.value.default.emptyState,...e.emptyState}),c=m(()=>e.loadingState===null?null:{...w.value.default.loadingState,...e.loadingState});function B(t,i){if(typeof e.by=="string"){const p=e.by;return(t==null?void 0:t[p])===(i==null?void 0:i[p])}return e.by(t,i)}function h(t){return e.modelValue?d.value.some(i=>B(E(i),E(t))):!1}function $(t){if(o.value.column===t.key){const i=!t.direction||t.direction==="asc"?"desc":"asc";o.value.direction===i?o.value=P({},C,{column:null,direction:"asc"}):o.value={column:o.value.column,direction:o.value.direction==="asc"?"desc":"asc"}}else o.value={column:t.key,direction:t.direction||"asc"}}function T(t){b.onSelect&&b.onSelect(t)}function G(){e.rows.forEach(t=>{h(t)||d.value.push(t)})}function J(t){t?G():d.value=[]}function Q(t,i,p=""){return I(t,i,p)}function W(t){if(t.sortable){if(o.value.column!==t.key)return"none";if(o.value.direction==="asc")return"ascending";if(o.value.direction==="desc")return"descending"}}return{ui:w,attrs:R,sort:o,columns:V,rows:A,selected:d,indeterminate:a,emptyState:f,loadingState:c,isSelected:h,onSort:$,onSelect:T,onChange:J,getRowData:Q,getAriaSort:W}}}),ce=["aria-sort"],pe={key:1},ge={key:0},fe={key:0},me=["colspan"],ye={key:1},be=["colspan"],he=["onClick"];function Se(e,r,b,w,R,V){const o=q,C=H,A=K,d=z;return s(),l("div",k({class:e.ui.wrapper},e.attrs),[u("table",{class:n([e.ui.base,e.ui.divide])},[e.$slots.caption||e.caption?S(e.$slots,"caption",{key:0},()=>[u("caption",{class:n(e.ui.caption)},v(e.caption),3)]):y("",!0),u("thead",{class:n(e.ui.thead)},[u("tr",{class:n(e.ui.tr.base)},[e.modelValue?(s(),l("th",{key:0,scope:"col",class:n(e.ui.checkbox.padding)},[U(o,k({"model-value":e.indeterminate||e.selected.length===e.rows.length,indeterminate:e.indeterminate},e.ui.default.checkbox,{"aria-label":"Select all",onChange:e.onChange}),null,16,["model-value","indeterminate","onChange"])],2)):y("",!0),(s(!0),l(j,null,D(e.columns,(a,f)=>(s(),l("th",{key:f,scope:"col",class:n([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,a.class]),"aria-sort":e.getAriaSort(a)},[S(e.$slots,`${a.key}-header`,{column:a,sort:e.sort,onSort:e.onSort},()=>[a.sortable?(s(),O(C,k({key:0},{...e.ui.default.sortButton||{},...e.sortButton},{icon:!e.sort.column||e.sort.column!==a.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:a[e.columnAttribute],onClick:c=>e.onSort(a)}),null,16,["icon","label","onClick"])):(s(),l("span",pe,v(a[e.columnAttribute]),1))])],10,ce))),128))],2),e.loading&&e.progress?(s(),l("tr",ge,[u("td",{colspan:0,class:n(e.ui.progress.wrapper)},[U(A,k({...e.ui.default.progress||{},...e.progress},{size:"2xs"}),null,16)],2)])):y("",!0)],2),u("tbody",{class:n(e.ui.tbody)},[e.loadingState&&e.loading&&!e.rows.length?(s(),l("tr",fe,[u("td",{colspan:e.columns.length+(e.modelValue?1:0)},[S(e.$slots,"loading-state",{},()=>[u("div",{class:n(e.ui.loadingState.wrapper)},[e.loadingState.icon?(s(),O(d,{key:0,name:e.loadingState.icon,class:n(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):y("",!0),u("p",{class:n(e.ui.loadingState.label)},v(e.loadingState.label),3)],2)])],8,me)])):e.emptyState&&!e.rows.length?(s(),l("tr",ye,[u("td",{colspan:e.columns.length+(e.modelValue?1:0)},[S(e.$slots,"empty-state",{},()=>[u("div",{class:n(e.ui.emptyState.wrapper)},[e.emptyState.icon?(s(),O(d,{key:0,name:e.emptyState.icon,class:n(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):y("",!0),u("p",{class:n(e.ui.emptyState.label)},v(e.emptyState.label),3)],2)])],8,be)])):(s(!0),l(j,{key:2},D(e.rows,(a,f)=>(s(),l("tr",{key:f,class:n([e.ui.tr.base,e.isSelected(a)&&e.ui.tr.selected,e.$attrs.onSelect&&e.ui.tr.active,a==null?void 0:a.class]),onClick:()=>e.onSelect(a)},[e.modelValue?(s(),l("td",{key:0,class:n(e.ui.checkbox.padding)},[U(o,k({modelValue:e.selected,"onUpdate:modelValue":r[0]||(r[0]=c=>e.selected=c),value:a},e.ui.default.checkbox,{"aria-label":"Select row",onClick:r[1]||(r[1]=se(()=>{},["stop"]))}),null,16,["modelValue","value"])],2)):y("",!0),(s(!0),l(j,null,D(e.columns,(c,B)=>{var h;return s(),l("td",{key:B,class:n([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size,(h=a[c.key])==null?void 0:h.class])},[S(e.$slots,`${c.key}-data`,{column:c,row:a,index:f,getRowData:$=>e.getRowData(a,c.key,$)},()=>[re(v(e.getRowData(a,c.key)),1)])],2)}),128))],10,he))),128))],2)],2)],16)}const Be=te(de,[["render",Se]]);export{Be as default};