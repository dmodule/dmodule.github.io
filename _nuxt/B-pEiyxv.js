import{j as ee,K as F,r as f,L as te,M as oe,N as ae,O as ne,m as le,P as H,Q as re,q as l,R as se,S as ie,o as v,A as V,k as ce,C as $,c as A,b as c,w as h,a as s,t as B,D as k,l as K,d as T,H as de,B as me,I as ue,g as pe}from"./B3xU0BQw.js";import M from"./BZEV-MKY.js";import j from"./ljEsph0L.js";import I from"./a91nTHki.js";import _e from"./BXPzoHEp.js";import N from"./oKUhykL3.js";import ye from"./DGu2SV4I.js";import fe from"./DC72IJJ-.js";import be from"./DJxWdkvn.js";import"./BNRfMK7C.js";import"./BFV5OsYW.js";import"./Bc3dpfgo.js";import"./CY5oYlXP.js";import"./CTeAMnZu.js";import"./CQhhFR2k.js";import"./DcHbYUqy.js";import"./DMfBQnFL.js";import"./DpNKy6Tw.js";import"./DdkMutlO.js";import"./evNKUDX4.js";import"./C9tHkoXG.js";import"./CUPr1tmG.js";import"./zq3tSkz9.js";import"./BkTyKA8M.js";import"./Dssjh2eH.js";import"./B08LnwSc.js";import"./CxIZtCgj.js";import"./BaxhA-im.js";import"./DWNbjQcS.js";const ge=n=>n==="defer"||n===!1;function he(...n){var x;const o=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(o);let[e,d,t={}]=n;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof d!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=ee(),m=d,b=()=>F.value,D=()=>a.isHydrating?a.payload.data[e]:a.static.data[e];t.server=t.server??!0,t.default=t.default??b,t.getCachedData=t.getCachedData??D,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??F.deep,t.dedupe=t.dedupe??"cancel";const g=()=>t.getCachedData(e,a)!=null;if(!a._asyncData[e]||!t.immediate){(x=a.payload._errors)[e]??(x[e]=F.errorValue);const i=t.deep?f:te;a._asyncData[e]={data:i(t.getCachedData(e,a)??t.default()),pending:f(!g()),error:oe(a.payload._errors,e),status:f("idle"),_default:t.default}}const r={...a._asyncData[e]};delete r._default,r.refresh=r.execute=(i={})=>{if(a._asyncDataPromises[e]){if(ge(i.dedupe??t.dedupe))return a._asyncDataPromises[e];a._asyncDataPromises[e].cancelled=!0}if((i._initial||a.isHydrating&&i._initial!==!1)&&g())return Promise.resolve(t.getCachedData(e,a));r.pending.value=!0,r.status.value="pending";const w=new Promise((C,u)=>{try{C(m(a))}catch(z){u(z)}}).then(async C=>{if(w.cancelled)return a._asyncDataPromises[e];let u=C;t.transform&&(u=await t.transform(C)),t.pick&&(u=xe(u,t.pick)),a.payload.data[e]=u,r.data.value=u,r.error.value=F.errorValue,r.status.value="success"}).catch(C=>{if(w.cancelled)return a._asyncDataPromises[e];r.error.value=re(C),r.data.value=l(t.default()),r.status.value="error"}).finally(()=>{w.cancelled||(r.pending.value=!1,delete a._asyncDataPromises[e])});return a._asyncDataPromises[e]=w,a._asyncDataPromises[e]},r.clear=()=>ve(a,e);const _=()=>r.refresh({_initial:!0}),S=t.server!==!1&&a.payload.serverRendered;{const i=se();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const u=i._nuxtOnBeforeMountCbs;ae(()=>{u.forEach(z=>{z()}),u.splice(0,u.length)}),ne(()=>u.splice(0,u.length))}S&&a.isHydrating&&(r.error.value||g())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):i&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?i._nuxtOnBeforeMountCbs.push(_):t.immediate&&_();const w=ie();if(t.watch){const u=le(t.watch,()=>r.refresh());w&&H(u)}const C=a.hook("app:data:refresh",async u=>{(!u||u.includes(e))&&await r.refresh()});w&&H(C)}const U=Promise.resolve(a._asyncDataPromises[e]).then(()=>r);return Object.assign(U,r),U}function J(...n){const o=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(o);const[e,d,t={}]=n;return he(e,d,{...t,lazy:!0},null)}function ve(n,o){o in n.payload.data&&(n.payload.data[o]=void 0),o in n.payload._errors&&(n.payload._errors[o]=F.errorValue),n._asyncData[o]&&(n._asyncData[o].data.value=void 0,n._asyncData[o].error.value=F.errorValue,n._asyncData[o].pending.value=!1,n._asyncData[o].status.value="idle"),o in n._asyncDataPromises&&(n._asyncDataPromises[o].cancelled=!0,n._asyncDataPromises[o]=void 0)}function xe(n,o){const e={};for(const d of o)e[d]=n[d];return e}const De={__name:"Base",setup(n){const o=[{id:1,name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"},{id:2,name:"Courtney Henry",title:"Designer",email:"courtney.henry@example.com",role:"Admin"},{id:3,name:"Tom Cook",title:"Director of Product",email:"tom.cook@example.com",role:"Member"},{id:4,name:"Whitney Francis",title:"Copywriter",email:"whitney.francis@example.com",role:"Admin"},{id:5,name:"Leonard Krasner",title:"Senior Designer",email:"leonard.krasner@example.com",role:"Owner"},{id:6,name:"Floyd Miles",title:"Principal Designer",email:"floyd.miles@example.com",role:"Member"}];return(e,d)=>{const t=M;return v(),V(t,{rows:o})}}},we={title:"Actions",class:"text-sky-500"},ke={class:"flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"},Ce=s("div",{class:"p-4"},[s("div",{class:"h-20 w-48"})],-1),E=5,Pe={__name:"Input",setup(n){const o=f(!1),e=ce(),d=g=>f([{label:"Confirm",click:()=>console.log("Remove",g.id)}]),t=g=>[[{label:"Edit",icon:"i-heroicons-pencil-square-20-solid",click:()=>{o.value=!0,console.log(o),console.log("Edit",g.id)}},{label:"Delete",icon:"i-heroicons-trash-20-solid",click:()=>e.add({title:"Delete it !",actions:d(g)})}]],a=[{key:"id",label:"Id"},{key:"name",label:"Name"}],m=[{id:1,name:"Lindsay Walton",title:"Front-end Developer",role:"Member"},{id:2,name:"Courtney Henry",title:"Designer",role:"Admin"},{id:3,name:"Tom Cook",title:"Director of Product",role:"Member"},{id:4,name:"Whitney Francis",title:"Copywriter",role:"Admin"},{id:5,name:"Leonard Krasner",title:"Senior Designer",role:"Owner"},{id:6,name:"Floyd Miles",title:"Principal Designer",role:"Member"},{id:7,name:"Emily Selman",title:"VP, User Experience",role:"Admin"},{id:8,name:"Kristin Watson",title:"VP, Human Resources",role:"Member"},{id:9,name:"Emma Watson",title:"Front-end Developer",role:"Member"},{id:10,name:"John Doe",title:"Designer",role:"Admin"},{id:11,name:"Jane Doe",title:"Director of Product",role:"Member"},{id:12,name:"John Smith",title:"Copywriter",role:"Admin"},{id:13,name:"Jane Smith",title:"Senior Designer",role:"Owner"}],b=f(1),D=$(()=>m.slice((b.value-1)*E,b.value*E));return(g,r)=>{const _=j,S=M,U=I,x=_e;return v(),A("div",null,[c(S,{columns:a,rows:l(D)},{"id-data":h(({row:i})=>[c(_,{items:t(i),popper:{placement:"bottom-start"}},{default:h(()=>[s("span",we,B(i.id),1)]),_:2},1032,["items"])]),_:1},8,["rows"]),s("div",ke,[c(U,{modelValue:l(b),"onUpdate:modelValue":r[0]||(r[0]=i=>k(b)?b.value=i:null),"page-count":E,total:m.length},null,8,["modelValue","total"])]),c(x,{modelValue:l(o),"onUpdate:modelValue":r[1]||(r[1]=i=>k(o)?o.value=i:null)},{default:h(()=>[Ce]),_:1},8,["modelValue"])])}}},Ve={__name:"Sort",setup(n){const o=[{key:"id",label:"ID"},{key:"name",label:"Name",sortable:!0},{key:"title",label:"Title",sortable:!0},{key:"email",label:"Email",sortable:!0,direction:"desc"},{key:"role",label:"Role"}],e=[{id:1,name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"},{id:2,name:"Courtney Henry",title:"Designer",email:"courtney.henry@example.com",role:"Admin"},{id:3,name:"Tom Cook",title:"Director of Product",email:"tom.cook@example.com",role:"Member"},{id:4,name:"Whitney Francis",title:"Copywriter",email:"whitney.francis@example.com",role:"Admin"},{id:5,name:"Leonard Krasner",title:"Senior Designer",email:"leonard.krasner@example.com",role:"Owner"},{id:6,name:"Floyd Miles",title:"Principal Designer",email:"floyd.miles@example.com",role:"Member"}];return(d,t)=>{const a=M;return v(),V(a,{columns:o,rows:e,sort:{column:"title"}})}}},Me={__name:"Selectable",setup(n){const o=[{id:1,name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"},{id:2,name:"Courtney Henry",title:"Designer",email:"courtney.henry@example.com",role:"Admin"},{id:3,name:"Tom Cook",title:"Director of Product",email:"tom.cook@example.com",role:"Member"},{id:4,name:"Whitney Francis",title:"Copywriter",email:"whitney.francis@example.com",role:"Admin"},{id:5,name:"Leonard Krasner",title:"Senior Designer",email:"leonard.krasner@example.com",role:"Owner"},{id:6,name:"Floyd Miles",title:"Principal Designer",email:"floyd.miles@example.com",role:"Member"}],e=f([o[1]]);return(d,t)=>{const a=M;return v(),V(a,{modelValue:l(e),"onUpdate:modelValue":t[0]||(t[0]=m=>k(e)?e.value=m:null),rows:o},null,8,["modelValue"])}}},Te={class:"flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700"},$e={__name:"Search",setup(n){const o=[{key:"id",label:"ID"},{key:"name",label:"Name"},{key:"title",label:"Title"},{key:"email",label:"Email"},{key:"role",label:"Role"}],e=[{id:1,name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"},{id:2,name:"Courtney Henry",title:"Designer",email:"courtney.henry@example.com",role:"Admin"},{id:3,name:"Tom Cook",title:"Director of Product",email:"tom.cook@example.com",role:"Member"},{id:4,name:"Whitney Francis",title:"Copywriter",email:"whitney.francis@example.com",role:"Admin"},{id:5,name:"Leonard Krasner",title:"Senior Designer",email:"leonard.krasner@example.com",role:"Owner"},{id:6,name:"Floyd Miles",title:"Principal Designer",email:"floyd.miles@example.com",role:"Member"}],d=f(""),t=$(()=>d.value?e.filter(a=>Object.values(a).some(m=>String(m).toLowerCase().includes(d.value.toLowerCase()))):e);return(a,m)=>{const b=N,D=M;return v(),A("div",null,[s("div",Te,[c(b,{modelValue:l(d),"onUpdate:modelValue":m[0]||(m[0]=g=>k(d)?d.value=g:null),placeholder:"Filter people..."},null,8,["modelValue"])]),c(D,{rows:l(t),columns:o},null,8,["rows"])])}}},Se={class:"flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"},R=5,Ue={__name:"Paginable",setup(n){const o=[{id:1,name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"},{id:2,name:"Courtney Henry",title:"Designer",email:"courtney.henry@example.com",role:"Admin"},{id:3,name:"Tom Cook",title:"Director of Product",email:"tom.cook@example.com",role:"Member"},{id:4,name:"Whitney Francis",title:"Copywriter",email:"whitney.francis@example.com",role:"Admin"},{id:5,name:"Leonard Krasner",title:"Senior Designer",email:"leonard.krasner@example.com",role:"Owner"},{id:6,name:"Floyd Miles",title:"Principal Designer",email:"floyd.miles@example.com",role:"Member"},{id:7,name:"Emily Selman",title:"VP, User Experience",email:"",role:"Admin"},{id:8,name:"Kristin Watson",title:"VP, Human Resources",email:"",role:"Member"},{id:9,name:"Emma Watson",title:"Front-end Developer",email:"",role:"Member"},{id:10,name:"John Doe",title:"Designer",email:"",role:"Admin"},{id:11,name:"Jane Doe",title:"Director of Product",email:"",role:"Member"},{id:12,name:"John Smith",title:"Copywriter",email:"",role:"Admin"},{id:13,name:"Jane Smith",title:"Senior Designer",email:"",role:"Owner"}],e=f(1),d=$(()=>o.slice((e.value-1)*R,e.value*R));return(t,a)=>{const m=M,b=I;return v(),A("div",null,[c(m,{rows:l(d)},null,8,["rows"]),s("div",Se,[c(b,{modelValue:l(e),"onUpdate:modelValue":a[0]||(a[0]=D=>k(e)?e.value=D:null),"page-count":R,total:o.length},null,8,["modelValue","total"])])])}}},Fe={__name:"Loading",async setup(n){let o,e;const d=[{key:"id",label:"ID"},{key:"brand",label:"Brand"},{key:"title",label:"Title"},{key:"description",label:"Description"},{key:"price",label:"Price"}],{pending:t,data:a}=([o,e]=K(()=>J(()=>$fetch("https://dummyjson.com/products"),"$mP3XKJTYWM")),o=await o,e(),o);return(m,b)=>{const D=M;return v(),V(D,{rows:l(a)?l(a).products:[],columns:d,loading:l(t)},null,8,["rows","loading"])}}},ze=s("h2",{class:"font-semibold text-xl text-gray-900 dark:text-white leading-tight"},"Todos",-1),Le={class:"flex items-center justify-between gap-3 px-4 py-3"},Ae={class:"flex justify-between items-center w-full px-4 py-3"},Be={class:"flex items-center gap-1.5"},Oe=s("span",{class:"text-sm leading-5"},"Rows per page:",-1),We={class:"flex gap-1.5 items-center"},Ee={class:"flex flex-wrap justify-between items-center"},Re={class:"text-sm leading-5"},Ie={class:"font-medium"},He={class:"font-medium"},Ke={class:"font-medium"},je={__name:"Advanced",async setup(n){let o,e;const d=[{key:"id",label:"#",sortable:!0},{key:"title",label:"Title",sortable:!0},{key:"completed",label:"Status",sortable:!0},{key:"actions",label:"Actions",sortable:!1}],t=f(d),a=$(()=>d.filter(P=>t.value.includes(P))),m=f([]);function b(P){const p=m.value.findIndex(O=>O.id===P.id);p===-1?m.value.push(P):m.value.splice(p,1)}const D=[[{key:"completed",label:"Completed",icon:"i-heroicons-check"}],[{key:"uncompleted",label:"In Progress",icon:"i-heroicons-arrow-path"}]],g=[{key:"uncompleted",label:"In Progress",value:!1},{key:"completed",label:"Completed",value:!0}],r=f(""),_=f([]),S=$(()=>{var P,p;return((P=_.value)==null?void 0:P.length)===0?"":((p=_==null?void 0:_.value)==null?void 0:p.length)>1?`?completed=${_.value[0].value}&completed=${_.value[1].value}`:`?completed=${_.value[0].value}`}),U=()=>{r.value="",_.value=[]},x=f(1),i=f(10),w=f(200),C=$(()=>(x.value-1)*i.value+1),u=$(()=>Math.min(x.value*i.value,w.value)),{data:z,pending:q}=([o,e]=K(()=>J("todos",()=>$fetch(`https://jsonplaceholder.typicode.com/todos${S.value}`,{query:{q:r.value,_page:x.value,_limit:i.value}}),{default:()=>[],watch:[x,r,S,i]})),o=await o,e(),o);return(P,p)=>{const O=N,W=ye,L=me,Q=j,X=fe,Y=M,G=I,Z=be;return v(),V(Z,{class:"w-full",ui:{base:"",ring:"",divide:"divide-y divide-gray-200 dark:divide-gray-700",header:{padding:"px-4 py-5",base:"bg-base-200"},body:{padding:"",base:"divide-y divide-gray-200 dark:divide-gray-700 bg-base-200"},footer:{padding:"p-4",base:"bg-base-200"}}},{header:h(()=>[ze]),footer:h(()=>[s("div",Ee,[s("div",null,[s("span",Re,[T(" Showing "),s("span",Ie,B(l(C)),1),T(" to "),s("span",He,B(l(u)),1),T(" of "),s("span",Ke,B(l(w)),1),T(" results ")])]),c(G,{modelValue:l(x),"onUpdate:modelValue":p[5]||(p[5]=y=>k(x)?x.value=y:null),"page-count":l(i),total:l(w),ui:{wrapper:"flex items-center gap-1",rounded:"rounded-full min-w-[32px] px-3 justify-center",default:{activeButton:{variant:"outline"}}}},null,8,["modelValue","page-count","total"])])]),default:h(()=>[s("div",Le,[c(O,{modelValue:l(r),"onUpdate:modelValue":p[0]||(p[0]=y=>k(r)?r.value=y:null),icon:"i-heroicons-magnifying-glass-20-solid",placeholder:"Search..."},null,8,["modelValue"]),c(W,{modelValue:l(_),"onUpdate:modelValue":p[1]||(p[1]=y=>k(_)?_.value=y:null),options:g,multiple:"",placeholder:"Status",class:"w-40 relative"},null,8,["modelValue"])]),s("div",Ae,[s("div",Be,[Oe,c(W,{modelValue:l(i),"onUpdate:modelValue":p[2]||(p[2]=y=>k(i)?i.value=y:null),options:[3,5,10,20,30,40],size:"xs",class:"w-16 relative"},null,8,["modelValue"])]),s("div",We,[l(m).length>1?(v(),V(Q,{key:0,items:D,ui:{width:"w-36"}},{default:h(()=>[c(L,{icon:"i-heroicons-chevron-down",trailing:"",color:"gray",size:"xs"},{default:h(()=>[T("Mark as")]),_:1})]),_:1})):de("",!0),c(W,{modelValue:l(t),"onUpdate:modelValue":p[3]||(p[3]=y=>k(t)?t.value=y:null),options:d,multiple:""},{default:h(()=>[c(L,{icon:"i-heroicons-view-columns",color:"gray",size:"xs"},{default:h(()=>[T("Columns")]),_:1})]),_:1},8,["modelValue"]),c(L,{icon:"i-heroicons-funnel",color:"gray",size:"xs",disabled:l(r)===""&&l(_).length===0,onClick:U},{default:h(()=>[T(" Reset ")]),_:1},8,["disabled"])])]),c(Y,{modelValue:l(m),"onUpdate:modelValue":p[4]||(p[4]=y=>k(m)?m.value=y:null),rows:l(z),columns:l(a),loading:l(q),"sort-asc-icon":"i-heroicons-arrow-up","sort-desc-icon":"i-heroicons-arrow-down",class:"w-full",ui:{td:{base:"max-w-[0] truncate"}},onSelect:b},{"completed-data":h(({row:y})=>[c(X,{size:"xs",label:y.completed?"Completed":"In Progress",color:y.completed?"emerald":"orange",variant:"subtle"},null,8,["label","color"])]),"actions-data":h(({row:y})=>[y.completed?(v(),V(L,{key:1,icon:"i-heroicons-arrow-path",size:"2xs",color:"orange",variant:"outline",ui:{rounded:"rounded-full"},square:""})):(v(),V(L,{key:0,icon:"i-heroicons-check",size:"2xs",color:"emerald",variant:"outline",ui:{rounded:"rounded-full"},square:""}))]),_:1},8,["modelValue","rows","columns","loading"])]),_:1})}}},Ne={class:"relative bg-base-100 px-4 py-6 mb-3"},Je=s("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"TableBase",-1),qe={class:"relative bg-base-100 px-4 py-6 mb-3"},Qe=s("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"TableInput",-1),Xe={class:"relative bg-base-100 px-4 py-6 mb-3"},Ye=s("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"TableSort",-1),Ge={class:"relative bg-base-100 px-4 py-6 mb-3"},Ze=s("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"}," TableSelectable ",-1),et={class:"relative bg-base-100 px-4 py-6 mb-3"},tt=s("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"TableSearch",-1),ot={class:"relative bg-base-100 px-4 py-6 mb-3"},at=s("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"}," TablePaginable ",-1),nt={class:"relative bg-base-100 px-4 py-6 mb-3"},lt=s("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"},"TableLoading",-1),rt={class:"relative bg-base-100 px-4 py-6 mb-3"},st=s("div",{class:"absolute z-10 top-0 right-0 bg-base-200 rounded-sm py-1 px-2"}," TableAdvanced ",-1),it={__name:"Table",setup(n){return(o,e)=>(v(),A(ue,null,[s("div",Ne,[Je,c(l(De))]),s("div",qe,[Qe,c(l(Pe))]),s("div",Xe,[Ye,c(l(Ve))]),s("div",Ge,[Ze,c(l(Me))]),s("div",et,[tt,c(l($e))]),s("div",ot,[at,c(l(Ue))]),s("div",nt,[lt,c(l(Fe))]),s("div",rt,[st,c(l(je))])],64))}},ct=it,Wt=pe({__name:"table",setup(n){return(o,e)=>(v(),A("div",null,[c(ct)]))}});export{Wt as default};
