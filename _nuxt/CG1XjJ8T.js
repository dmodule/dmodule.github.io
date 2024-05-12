import{r as j,C as T,m as ce,h as G,o as _,A as f,w as S,c as k,s as te,H,a as E,t as q,b as $,q as U,D as C,B as W,_ as ae,k as ye,I as se,W as le,v as _e,n as P,ax as he,d as Q}from"./BBa6so6u.js";import oe from"./zziTgY8e.js";import Ve from"./DY_EmLo9.js";import be from"./BcRtQmJm.js";import fe from"./BD0sgCea.js";import Ue from"./fmVWvZNM.js";import ve from"./CnrNnmK3.js";import Y from"./B0lD32-U.js";import $e from"./EZlWWsSX.js";import xe from"./B4TVotwa.js";import Ee from"./DZm8y7CO.js";import Ie from"./Bec95wpa.js";import{e as we,g as Pe,d as A,h as Se,j as je,k as ke,l as De,p as Ae}from"./DHFOe2EN.js";import Ce from"./DlwJao42.js";const Re={class:"truncate"},Te={__name:"PickStyle",props:{modelValue:{},color:{type:Boolean,default:!1},options:{type:Object,default(){return{}}},icon:{type:String,default:"i-ri-palette-line"}},emits:["update:modelValue"],setup(e,{emit:a}){const t=a,l=e,s=j(null),o=T({get:()=>{const r=[];for(const d in l.options){const p={};p.label=d,p.value=l.options[d],r.push(p)}return r}});return ce(()=>s.value,r=>{t("update:modelValue",r)}),G(()=>{s.value=l.modelValue}),(r,d)=>{const p=W,n=oe;return _(),f(n,{modelValue:U(s),"onUpdate:modelValue":d[0]||(d[0]=c=>C(s)?s.value=c:null),options:U(o),"value-attribute":"label","option-attribute":"label",searchable:"","searchable-placeholder":"Search ..."},{option:S(({option:c})=>[e.color?(_(),k("span",{key:0,class:te(["flex-shrink-0 w-2 h-2 mt-px rounded-full",c.value.replace("text","bg")])},null,2)):H("",!0),E("span",Re,q(c.label),1)]),default:S(()=>[$(p,{size:"2xs",square:"",icon:e.icon,color:"white"},null,8,["icon"])]),_:1},8,["modelValue","options"])}}},Be={};function Me(e,a){const t=W,l=Y;return _(),f(l,{placeholder:"Link Image",ui:{icon:{trailing:{pointer:""}}}},{trailing:S(()=>[$(t,{icon:"i-ri-upload-cloud-2-line",size:"sm",color:"gray",square:"",variant:"solid"})]),_:1})}const Ne=ae(Be,[["render",Me]]);function X(e,a,t,l,s){return{issues:[{context:e,reference:a,input:t,label:l,received:s}]}}function J(e){return{output:e}}function R(e,a){return Array.isArray(e)?[void 0,e]:[e,a]}var N;function Oe(e){return N==null?void 0:N.get(e)}var O;function ze(e){return O==null?void 0:O.get(e)}var z;function Le(e,a){var t;return(t=z==null?void 0:z.get(e))==null?void 0:t.get(a)}function ne(e,a,t,l,s){const o=a.message??Le(t,s.lang)??(e?ze(s.lang):null)??(l==null?void 0:l.message)??Oe(s.lang)??s.message;return typeof o=="function"?o(s):o}function B(e,a,t){return{typed:e,output:a,issues:t}}function re(e){let a=typeof e;return a==="object"&&(a=e?Object.getPrototypeOf(e).constructor.name:"null"),a==="string"?`"${e}"`:a==="number"||a==="bigint"||a==="boolean"?`${e}`:a}function ue(e,a,t){const l=t.received??re(t.input),s={reason:e.type,context:t.context.type,expected:t.context.expects,received:l,message:`Invalid ${t.label}: ${t.context.expects?`Expected ${t.context.expects} but r`:"R"}eceived ${l}`,input:t.input,requirement:t.context.requirement,path:t.path,lang:a==null?void 0:a.lang,abortEarly:a==null?void 0:a.abortEarly,abortPipeEarly:a==null?void 0:a.abortPipeEarly,skipPipe:a==null?void 0:a.skipPipe};return s.message=ne(!1,t.context,t.reference,a,s),s}function de(e,a,t,l){if(e.pipe&&!(t!=null&&t.skipPipe))for(const s of e.pipe){const o=s._parse(a);if(o.issues){for(const r of o.issues){const d=ue(e,t,r);l?l.push(d):l=[d]}if(t!=null&&t.abortEarly||t!=null&&t.abortPipeEarly)break}else a=o.output}return B(!0,a,l)}async function qe(e,a,t,l){if(e.pipe&&!(t!=null&&t.skipPipe))for(const s of e.pipe){const o=await s._parse(a);if(o.issues){for(const r of o.issues){const d=ue(e,t,r);l?l.push(d):l=[d]}if(t!=null&&t.abortEarly||t!=null&&t.abortPipeEarly)break}else a=o.output}return B(!0,a,l)}function Ze(e,a,t){if(!e||typeof e=="object"&&!Array.isArray(e)){const[o,r]=R(a,t);return[e,o,r]}const[l,s]=R(e,a);return[void 0,l,s]}function K(e,a,t,l,s){const o=re(t),r=e.expects,d={reason:"type",context:e.type,expected:r,received:o,message:`Invalid type: Expected ${r} but received ${o}`,input:t,path:s==null?void 0:s.path,issues:s==null?void 0:s.issues,lang:l==null?void 0:l.lang,abortEarly:l==null?void 0:l.abortEarly,abortPipeEarly:l==null?void 0:l.abortPipeEarly,skipPipe:l==null?void 0:l.skipPipe};return d.message=ne(!0,e,a,l,d),{typed:!1,output:t,issues:[d]}}function Fe(e,a,t){const[l,s]=R(a,t);return{type:"array",expects:"Array",async:!1,item:e,message:l,pipe:s,_parse(o,r){if(Array.isArray(o)){let d=!0,p;const n=[];for(let c=0;c<o.length;c++){const y=o[c],v=this.item._parse(y,r);if(v.issues){const b={type:"array",origin:"value",input:o,key:c,value:y};for(const x of v.issues)x.path?x.path.unshift(b):x.path=[b],p==null||p.push(x);if(p||(p=v.issues),r!=null&&r.abortEarly){d=!1;break}}v.typed||(d=!1),n.push(v.output)}return d?de(this,n,r,p):B(!1,n,p)}return K(this,Fe,o,r)}}}function pe(e,a,t,l){const[s,o,r]=Ze(a,t,l);let d;return{type:"object",expects:"Object",async:!0,entries:e,rest:s,message:o,pipe:r,async _parse(p,n){if(p&&typeof p=="object"){d=d??Object.entries(this.entries);let c=!0,y;const v={};return await Promise.all([Promise.all(d.map(async([b,x])=>{if(!(n!=null&&n.abortEarly&&y)){const I=p[b],h=await x._parse(I,n);if(!(n!=null&&n.abortEarly&&y)){if(h.issues){const V={type:"object",origin:"value",input:p,key:b,value:I};for(const w of h.issues)w.path?w.path.unshift(V):w.path=[V],y==null||y.push(w);if(y||(y=h.issues),n!=null&&n.abortEarly)throw c=!1,null}h.typed||(c=!1),(h.output!==void 0||b in p)&&(v[b]=h.output)}}})),this.rest&&Promise.all(Object.entries(p).map(async([b,x])=>{if(!(n!=null&&n.abortEarly&&y)&&!(b in this.entries)){const I=await this.rest._parse(x,n);if(!(n!=null&&n.abortEarly&&y)){if(I.issues){const h={type:"object",origin:"value",input:p,key:b,value:x};for(const V of I.issues)V.path?V.path.unshift(h):V.path=[h],y==null||y.push(V);if(y||(y=I.issues),n!=null&&n.abortEarly)throw c=!1,null}I.typed||(c=!1),v[b]=I.output}}}))]).catch(()=>null),c?qe(this,v,n,y):B(!1,v,y)}return K(this,pe,p,n)}}}function Z(e,a){const[t,l]=R(e,a);return{type:"string",expects:"string",async:!1,message:t,pipe:l,_parse(s,o){return typeof s=="string"?de(this,s,o):K(this,Z,s,o)}}}var Ge=/^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu;function He(e){return{type:"email",expects:null,async:!1,message:e,requirement:Ge,_parse(a){return this.requirement.test(a)?J(a):X(this,He,a,"email")}}}function F(e,a){return{type:"min_length",expects:`>=${e}`,async:!1,message:a,requirement:e,_parse(t){return t.length>=this.requirement?J(t):X(this,F,t,"length",`${t.length}`)}}}function me(e,a){return{type:"regex",expects:`${e}`,async:!1,message:a,requirement:e,_parse(t){return this.requirement.test(t)?J(t):X(this,me,t,"format")}}}const We={__name:"Wrap",props:["modelValue"],emits:["update:modelValue","shut"],setup(e,{emit:a}){const{modelValue:t}=e,l=a,s=j(!1),o=j({}),r=()=>{l("shut")},d=T(()=>{if(t){const n={};for(const c in t)c==="title"?n[c]=Z("Your title must be a string.",[F(1,"The title must have at least 1 characters.")]):c==="phone"&&(n[c]=Z("Your phone must be a number.",[F(10,"The phone number must have at least 10 characters."),me(/[0-9]/,"Your phone must contain a number.")]));return pe(n)}});G(()=>{o.value=we(t),s.value=!0});const p=n=>{l("update:modelValue",n.state)};return(n,c)=>{const y=mt;return U(s)?(_(),f(y,{key:0,ref:"formRef",class:"form-card w-full","model-value":U(o),"onUpdate:modelValue":p,onShut:r,schema:U(d),hiddenReset:"",hiddenStyle:""},null,8,["model-value","schema"])):H("",!0)}}},Ye={class:"relative overflow-x-hidden flex-1"},Xe={class:"min-w-full table-fixed text-sm"},Je={class:"border-b-2 border-base-neutral"},Ke=E("th",{class:"w-6"},null,-1),Qe={class:"capitalize"},ge={class:"py-1 text-sky-500",title:"Edit"},et={class:"py-1"},tt={class:"line-clamp-1 max-w-60"},at={class:"flex justify-end py-3"},L=5,st={__name:"List",props:{modelValue:{},itemId:{type:String,default:"id"},itemTxt:{type:String,default:"title"}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,l=a,s=j([]),o=j(0),r=j(1),d=T(()=>s.value?s.value.slice((r.value-1)*L,r.value*L):0),p=j(null),n=j(!1),c=ye(),y=h=>j([{label:"Confirm",click:()=>x(h)}]),v=h=>[[{label:"Edit",icon:"i-ri-edit-box-line",click:()=>{n.value=!0,console.log("Edit",h[t.itemId]),p.value=h}},{label:"Delete",icon:"i-ri-delete-bin-line",click:()=>c.add({title:"Delete it !",actions:y(h)})}]],b=h=>{const V=s.value.findIndex(w=>w[t.itemId]===h[t.itemId]);s.value[V]=h,l("update:modelValue",s.value),o.value++},x=h=>{s.value=s.value.filter(V=>V[t.itemId]!==h[t.itemId]),l("update:modelValue",s.value),o.value++},I=()=>{n.value=!1};return G(()=>{s.value=[...t.modelValue]}),(h,V)=>{const w=_e,M=$e,i=xe,u=We,m=Ce;return _(),k("div",null,[E("div",Ye,[E("table",Xe,[E("thead",null,[E("tr",Je,[Ke,E("th",Qe,q(e.itemTxt),1)])]),(_(),k("tbody",{class:"divide-y divide-base-neutral",key:U(o)},[(_(!0),k(se,null,le(U(d),(D,ie)=>(_(),k("tr",{key:ie},[E("td",ge,[$(M,{items:v(D),popper:{placement:"bottom-start"},ui:{width:"w-24"}},{default:S(()=>[$(w,{name:"i-ri-pencil-fill"})]),_:2},1032,["items"])]),E("td",et,[E("div",tt,q(D[e.itemTxt]),1)])]))),128))]))])]),E("div",at,[$(i,{modelValue:U(r),"onUpdate:modelValue":V[0]||(V[0]=D=>C(r)?r.value=D:null),"page-count":L,total:U(s).length},null,8,["modelValue","total"])]),$(m,{modelValue:U(n),"onUpdate:modelValue":V[1]||(V[1]=D=>C(n)?n.value=D:null),transition:!1},{default:S(()=>[$(u,{"model-value":U(p),"onUpdate:modelValue":b,onShut:I},null,8,["model-value"])]),_:1},8,["modelValue"])])}}},lt={__name:"Hashtag",props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:a}){const{modelValue:t}=e,l=a,s=T({get(){return t.join()},set(o){l("update:modelValue",o.split(","))}});return(o,r)=>{const d=Y;return _(),f(d,P({modelValue:U(s),"onUpdate:modelValue":r[0]||(r[0]=p=>C(s)?s.value=p:null)},o.$attrs),null,16,["modelValue"])}}},g=300,ee={className:"",attrs:{},state:{}},ot={props:{schema:{},modelValue:{type:Object,default:()=>({...ee})},hiddenReset:{type:Boolean,default:!1},hiddenStyle:{type:Boolean,default:!1}},data:()=>({rkey:0,dura:300,initData:{},entry:{...ee},closed:!1}),watch:{entry:{deep:!0,handler:Pe(function(e){const a=A(e.state||{});if(this.rkey>0){console.log(this.rkey,this.closed);const t=Ae(this.entry,a);this.$emit("update:modelValue",t),this.closed&&(this.closed=!1,this.$emit("shut"))}},g)}},methods:{submit(){this.$emit("shut")},reset(){this.entry.attrs=A(this.initData.attrs),this.entry.state=A(this.initData.state)},close(){this.closed=!0,this.reset()}},mounted(){this.initData=A(this.modelValue),this.entry=A(this.modelValue),setTimeout(()=>{this.rkey++},g+60)}},nt={key:6,class:"space-y-1"},rt={key:8},ut={key:10},dt={class:"flex gap-2 py-4"};function pt(e,a,t,l,s,o){const r=Te,d=Ve,p=oe,n=be,c=fe,y=Ue,v=ve,b=Y,x=Ne,I=st,h=lt,V=Ee,w=W,M=Ie;return _(),f(M,{schema:t.schema,state:e.entry.state,onSubmit:o.submit},{default:S(()=>[E("div",{class:te(["grid gap-4",e.entry.className])},[(_(!0),k(se,null,le(e.entry.attrs,(i,u)=>(_(),f(V,{key:u,name:u,label:i.type?("camelToCap"in e?e.camelToCap:U(Se))(u):"",className:i.className},he({default:S(()=>[i.type==="textarea"?(_(),f(d,P({key:0,modelValue:e.entry.state[u],"onUpdate:modelValue":m=>e.entry.state[u]=m,autoresize:""},i.addon),null,16,["modelValue","onUpdate:modelValue"])):i.type==="select"?(_(),f(p,P({key:1,modelValue:e.entry.state[u],"onUpdate:modelValue":m=>e.entry.state[u]=m,options:i.items},i.addon),null,16,["modelValue","onUpdate:modelValue","options"])):i.type==="toggle"?(_(),f(n,P({key:2,modelValue:e.entry.state[u],"onUpdate:modelValue":m=>e.entry.state[u]=m},i.addon),null,16,["modelValue","onUpdate:modelValue"])):i.type==="checkbox"?(_(),f(c,P({key:3,modelValue:e.entry.state[u],"onUpdate:modelValue":m=>e.entry.state[u]=m},i.addon),null,16,["modelValue","onUpdate:modelValue"])):i.type==="radio"?(_(),f(y,P({key:4,modelValue:e.entry.state[u],"onUpdate:modelValue":m=>e.entry.state[u]=m,options:i.items},i.addon),null,16,["modelValue","onUpdate:modelValue","options"])):i.type==="range"?(_(),f(v,P({key:5,modelValue:e.entry.state[u],"onUpdate:modelValue":m=>e.entry.state[u]=m},i.addon),null,16,["modelValue","onUpdate:modelValue"])):i.type==="objLink"?(_(),k("div",nt,[$(b,P({modelValue:e.entry.state[u].txt,"onUpdate:modelValue":m=>e.entry.state[u].txt=m},i.addon),null,16,["modelValue","onUpdate:modelValue"]),$(b,{modelValue:e.entry.state[u].src,"onUpdate:modelValue":m=>e.entry.state[u].src=m,placeholder:"Link"},null,8,["modelValue","onUpdate:modelValue"])])):i.type==="image"?(_(),f(x,{key:7,modelValue:e.entry.state[u],"onUpdate:modelValue":m=>e.entry.state[u]=m},null,8,["modelValue","onUpdate:modelValue"])):i.type==="list"?(_(),k("div",rt,[$(I,P({modelValue:e.entry.state[u],"onUpdate:modelValue":m=>e.entry.state[u]=m},i.addon),null,16,["modelValue","onUpdate:modelValue"])])):i.type==="hashtag"?(_(),f(h,P({key:9,modelValue:e.entry.state[u],"onUpdate:modelValue":m=>e.entry.state[u]=m},i.addon),null,16,["modelValue","onUpdate:modelValue"])):i.type?(_(),f(b,P({key:11,modelValue:e.entry.state[u],"onUpdate:modelValue":m=>e.entry.state[u]=m},i.addon),null,16,["modelValue","onUpdate:modelValue"])):(_(),k("div",ut))]),_:2},[!t.hiddenStyle&&i.type&&i.type!=="list"&&i.type!=="link"?{name:"hint",fn:S(()=>[$(r,{modelValue:e.entry.attrs[u].opt.text,"onUpdate:modelValue":m=>e.entry.attrs[u].opt.text=m,options:"text"in e?e.text:U(je),icon:"i-ri-font-family"},null,8,["modelValue","onUpdate:modelValue","options"]),$(r,{modelValue:e.entry.attrs[u].opt.color,"onUpdate:modelValue":m=>e.entry.attrs[u].opt.color=m,options:"color"in e?e.color:U(ke),icon:"i-ri-palette-line",color:""},null,8,["modelValue","onUpdate:modelValue","options"]),$(r,{modelValue:e.entry.attrs[u].opt.bg,"onUpdate:modelValue":m=>e.entry.attrs[u].opt.bg=m,options:"bg"in e?e.bg:U(De),icon:"i-ri-paint-fill",color:""},null,8,["modelValue","onUpdate:modelValue","options"])]),key:"0"}:void 0]),1032,["name","label","className"]))),128))],2),E("div",dt,[$(w,{type:"submit"},{default:S(()=>[Q("Submit")]),_:1}),t.hiddenReset?H("",!0):(_(),f(w,{key:0,color:"red",onClick:o.reset},{default:S(()=>[Q("Reset")]),_:1},8,["onClick"]))])]),_:1},8,["schema","state","onSubmit"])}const mt=ae(ot,[["render",pt]]);export{mt as _,Fe as a,We as b,He as e,F as m,pe as o,me as r,Z as s};
