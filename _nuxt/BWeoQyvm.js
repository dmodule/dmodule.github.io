import L from"./BQdokeU3.js";import{_ as ae,a3 as oe,a4 as N,a0 as ne,V as q,J as H,a6 as se,j as P,y as m,aP as re,at as z,r as le,ax as U,o,c as r,a as i,D as b,U as n,t as k,ag as p,b as B,Q as h,H as $,I as O,M as D,ah as ie,d as ue,aB as E}from"./CMgfjk2B.js";import J from"./DjZJXYPx.js";import"./D1IA68YM.js";import"./DGR0v2_f.js";const de={wrapper:"relative overflow-x-auto",base:"min-w-full table-fixed",divide:"divide-y divide-gray-300 dark:divide-gray-700",thead:"relative",tbody:"divide-y divide-gray-200 dark:divide-gray-800",caption:"sr-only",tr:{base:"",selected:"bg-gray-50 dark:bg-gray-800/50",active:"hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"},th:{base:"text-left rtl:text-right",padding:"px-4 py-3.5",color:"text-gray-900 dark:text-white",font:"font-semibold",size:"text-sm"},td:{base:"whitespace-nowrap",padding:"px-4 py-4",color:"text-gray-500 dark:text-gray-400",font:"",size:"text-sm"},checkbox:{padding:"ps-4"},loadingState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},expand:{icon:"transform transition-transform duration-200"},progress:{wrapper:"absolute inset-x-0 -bottom-[0.5px] p-0"},default:{sortAscIcon:"i-heroicons-bars-arrow-up-20-solid",sortDescIcon:"i-heroicons-bars-arrow-down-20-solid",sortButton:{icon:"i-heroicons-arrows-up-down-20-solid",trailing:!0,square:!0,color:"gray",variant:"ghost",class:"-m-1.5"},expandButton:{icon:"i-heroicons-chevron-down",color:"gray",variant:"ghost",size:"xs",class:"-my-1.5 align-middle"},checkbox:{color:"primary"},progress:{color:"primary",animation:"carousel"},loadingState:{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},emptyState:{icon:"i-heroicons-circle-stack-20-solid",label:"No items."}}};function ce(e){return e?e[0].toUpperCase()+e.slice(1):""}const g=oe(N.ui.strategy,N.ui.table,de);function pe(e,l){return e===l}function F(e,l,v){return e===l?0:v==="asc"?e<l?-1:1:e>l?-1:1}const fe=ne({components:{UIcon:q,UButton:H,UProgress:J,UCheckbox:L},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>pe},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortMode:{type:String,default:"auto"},sortButton:{type:Object,default:()=>g.default.sortButton},sortAscIcon:{type:String,default:()=>g.default.sortAscIcon},sortDescIcon:{type:String,default:()=>g.default.sortDescIcon},expandButton:{type:Object,default:()=>g.default.expandButton},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>g.default.loadingState},emptyState:{type:Object,default:()=>g.default.emptyState},caption:{type:String,default:null},progress:{type:Object,default:()=>g.default.progress},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","update:sort"],setup(e,{emit:l,attrs:v}){const{ui:S,attrs:R}=se("table",P(e,"ui"),g,P(e,"class")),A=m(()=>e.columns??Object.keys(e.rows[0]??{}).map(t=>({key:t,label:ce(t),sortable:!1,class:void 0,sort:F}))),s=re(e,"sort",l,{passive:!0,defaultValue:z({},e.sort,{column:null,direction:"asc"})}),f=le([]),j={column:s.value.column,direction:null},w=m(()=>{var y;if(!((y=s.value)!=null&&y.column)||e.sortMode==="manual")return e.rows;const{column:t,direction:d}=s.value;return e.rows.slice().sort((Z,x)=>{var M;const _=U(Z,t),ee=U(x,t);return(((M=A.value.find(te=>te.key===t))==null?void 0:M.sort)??F)(_,ee,d)})}),a=m({get(){return e.modelValue},set(t){l("update:modelValue",t)}}),c=m(()=>a.value&&a.value.length>0&&a.value.length<e.rows.length),u=m(()=>e.emptyState===null?null:{...S.value.default.emptyState,...e.emptyState}),I=m(()=>e.loadingState===null?null:{...S.value.default.loadingState,...e.loadingState});function C(t,d){if(typeof e.by=="string"){const y=e.by;return(t==null?void 0:t[y])===(d==null?void 0:d[y])}return e.by(t,d)}function V(t){return e.modelValue?a.value.some(d=>C(E(d),E(t))):!1}function Q(t){if(s.value.column===t.key){const d=!t.direction||t.direction==="asc"?"desc":"asc";s.value.direction===d?s.value=z({},j,{column:null,direction:"asc"}):s.value={column:s.value.column,direction:s.value.direction==="asc"?"desc":"asc"}}else s.value={column:t.key,direction:t.direction||"asc"}}function T(t){v.onSelect&&v.onSelect(t)}function G(){e.rows.forEach(t=>{V(t)||a.value.push(t)})}function K(t){t?G():a.value=[]}function W(t,d,y=""){return U(t,d,y)}function X(t){f.value.includes(t)?f.value=f.value.filter(d=>d!==t):f.value.push(t)}function Y(t){if(t.sortable){if(s.value.column!==t.key)return"none";if(s.value.direction==="asc")return"ascending";if(s.value.direction==="desc")return"descending"}}return{ui:S,attrs:R,sort:s,columns:A,rows:w,selected:a,indeterminate:c,emptyState:u,loadingState:I,openedRows:f,isSelected:V,onSort:Q,onSelect:T,onChange:K,getRowData:W,toggleOpened:X,getAriaSort:Y}}}),ge=["aria-sort"],ye={key:1},me={key:0},be={key:0},he=["colspan"],ve={key:1},ke=["colspan"],Se=["onClick"],we={key:0},Ce={colspan:"100%"};function Ve(e,l,v,S,R,A){const s=L,f=H,j=J,w=q;return o(),r("div",h({class:e.ui.wrapper},e.attrs),[i("table",{class:n([e.ui.base,e.ui.divide])},[e.$slots.caption||e.caption?b(e.$slots,"caption",{key:0},()=>[i("caption",{class:n(e.ui.caption)},k(e.caption),3)]):p("",!0),i("thead",{class:n(e.ui.thead)},[i("tr",{class:n(e.ui.tr.base)},[e.modelValue?(o(),r("th",{key:0,scope:"col",class:n(e.ui.checkbox.padding)},[B(s,h({"model-value":e.indeterminate||e.selected.length===e.rows.length,indeterminate:e.indeterminate},e.ui.default.checkbox,{"aria-label":"Select all",onChange:e.onChange}),null,16,["model-value","indeterminate","onChange"])],2)):p("",!0),e.$slots.expand?(o(),r("th",{key:1,scope:"col",class:n(e.ui.tr.base)},l[2]||(l[2]=[i("span",{class:"sr-only"},"Expand",-1)]),2)):p("",!0),(o(!0),r($,null,O(e.columns,(a,c)=>(o(),r("th",{key:c,scope:"col",class:n([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,a.class]),"aria-sort":e.getAriaSort(a)},[b(e.$slots,`${a.key}-header`,{column:a,sort:e.sort,onSort:e.onSort},()=>[a.sortable?(o(),D(f,h({key:0,ref_for:!0},{...e.ui.default.sortButton||{},...e.sortButton},{icon:!e.sort.column||e.sort.column!==a.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:a[e.columnAttribute],onClick:u=>e.onSort(a)}),null,16,["icon","label","onClick"])):(o(),r("span",ye,k(a[e.columnAttribute]),1))])],10,ge))),128))],2),e.loading&&e.progress?(o(),r("tr",me,[i("td",{colspan:0,class:n(e.ui.progress.wrapper)},[B(j,h({...e.ui.default.progress||{},...e.progress},{size:"2xs"}),null,16)],2)])):p("",!0)],2),i("tbody",{class:n(e.ui.tbody)},[e.loadingState&&e.loading&&!e.rows.length?(o(),r("tr",be,[i("td",{colspan:e.columns.length+(e.modelValue?1:0)},[b(e.$slots,"loading-state",{},()=>[i("div",{class:n(e.ui.loadingState.wrapper)},[e.loadingState.icon?(o(),D(w,{key:0,name:e.loadingState.icon,class:n(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):p("",!0),i("p",{class:n(e.ui.loadingState.label)},k(e.loadingState.label),3)],2)])],8,he)])):e.emptyState&&!e.rows.length?(o(),r("tr",ve,[i("td",{colspan:e.columns.length+(e.modelValue?1:0)},[b(e.$slots,"empty-state",{},()=>[i("div",{class:n(e.ui.emptyState.wrapper)},[e.emptyState.icon?(o(),D(w,{key:0,name:e.emptyState.icon,class:n(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):p("",!0),i("p",{class:n(e.ui.emptyState.label)},k(e.emptyState.label),3)],2)])],8,ke)])):(o(!0),r($,{key:2},O(e.rows,(a,c)=>(o(),r($,{key:c},[i("tr",{class:n([e.ui.tr.base,e.isSelected(a)&&e.ui.tr.selected,e.$attrs.onSelect&&e.ui.tr.active,a==null?void 0:a.class]),onClick:()=>e.onSelect(a)},[e.modelValue?(o(),r("td",{key:0,class:n(e.ui.checkbox.padding)},[B(s,h({modelValue:e.selected,"onUpdate:modelValue":l[0]||(l[0]=u=>e.selected=u),value:a,ref_for:!0},e.ui.default.checkbox,{"aria-label":"Select row",onClick:l[1]||(l[1]=ie(()=>{},["stop"]))}),null,16,["modelValue","value"])],2)):p("",!0),e.$slots.expand?(o(),r("td",{key:1,class:n([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size])},[B(f,h({ref_for:!0},{...e.ui.default.expandButton||{},...e.expandButton},{ui:{icon:{base:[e.ui.expand.icon,e.openedRows.includes(c)&&"rotate-180"]}},onClick:u=>e.toggleOpened(c)}),null,16,["ui","onClick"])],2)):p("",!0),(o(!0),r($,null,O(e.columns,(u,I)=>{var C;return o(),r("td",{key:I,class:n([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size,u==null?void 0:u.rowClass,(C=a[u.key])==null?void 0:C.class])},[b(e.$slots,`${u.key}-data`,{column:u,row:a,index:c,getRowData:V=>e.getRowData(a,u.key,V)},()=>[ue(k(e.getRowData(a,u.key)),1)])],2)}),128))],10,Se),e.openedRows.includes(c)?(o(),r("tr",we,[i("td",Ce,[b(e.$slots,"expand",{row:a,index:c})])])):p("",!0)],64))),128))],2)],2)],16)}const Oe=ae(fe,[["render",Ve]]);export{Oe as default};