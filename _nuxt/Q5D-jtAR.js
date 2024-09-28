import{u as b}from"./Dk21KoIT.js";import{_ as E,Z as g,f as _,A as S,r as p,$ as h,o as $,c as O,I as A,ae as j,ao as F}from"./Dw7e9vQt.js";import"./Bt8MpYHu.js";class m extends Error{constructor(r){super(r),this.message=r,Object.setPrototypeOf(this,m.prototype)}}const J=g({props:{schema:{type:[Object,Function],default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:r,emit:n}){const s=b("$qBnYcedrDi"),u=F(`form-${s}`);_(()=>{u.on(async t=>{var i;t.type!=="submit"&&((i=e.validateOn)!=null&&i.includes(t.type))&&await d(t.path,{silent:!0})})}),S(()=>{u.reset()});const a=p([]);h("form-errors",a),h("form-events",u);const c=p({});h("form-inputs",c);async function y(){let t=await e.validate(e.state);if(e.schema)if(I(e.schema))t=t.concat(await Z(e.state,e.schema));else if(Y(e.schema))t=t.concat(await k(e.state,e.schema));else if(q(e.schema))t=t.concat(await P(e.state,e.schema));else if(U(e.schema))t=t.concat(await V(e.state,e.schema));else throw new Error("Form validation failed: Unsupported form schema");return t}async function d(t,i={silent:!1}){let o=t;if(t&&!Array.isArray(t)&&(o=[t]),o){const f=a.value.filter(l=>!o.includes(l.path)),v=(await y()).filter(l=>o.includes(l.path));a.value=f.concat(v)}else a.value=await y();if(a.value.length>0){if(i.silent)return!1;throw new m(`Form validation failed: ${JSON.stringify(a.value,null,2)}`)}return e.state}async function w(t){var o;const i=t;try{(o=e.validateOn)!=null&&o.includes("submit")&&await d(),i.data=e.state,n("submit",i)}catch(f){if(!(f instanceof m))throw f;const v={...i,errors:a.value.map(l=>({...l,id:c.value[l.path]}))};n("error",v)}}return r({validate:d,errors:a,setErrors(t,i){i?a.value=a.value.filter(o=>o.path!==i).concat(t):a.value=t},async submit(){await w(new Event("submit"))},getErrors(t){return t?a.value.filter(i=>i.path===t):a.value},clear(t){t?a.value=a.value.filter(i=>i.path!==t):a.value=[]}}),{onSubmit:w}}});function Y(e){return e.validate&&e.__isYupSchema__}function B(e){return e.inner!==void 0}async function k(e,r){try{return await r.validate(e,{abortEarly:!1}),[]}catch(n){if(B(n))return n.inner.map(s=>({path:s.path??"",message:s.message}));throw n}}function I(e){return e.parse!==void 0}async function Z(e,r){const n=await r.safeParseAsync(e);return n.success===!1?n.error.issues.map(s=>({path:s.path.join("."),message:s.message})):[]}function q(e){return e.validateAsync!==void 0&&e.id!==void 0}function M(e){return e.isJoi===!0}async function P(e,r){try{return await r.validateAsync(e,{abortEarly:!1}),[]}catch(n){if(M(n))return n.details.map(s=>({path:s.path.join("."),message:s.message}));throw n}}function U(e){return"_parse"in e||"_run"in e||typeof e=="function"&&"schema"in e}async function V(e,r){var s;return((s=(await("_parse"in r?r._parse(e):"_run"in r?r._run({typed:!1,value:e},{}):r(e))).issues)==null?void 0:s.map(u=>{var a;return{path:((a=u.path)==null?void 0:a.map(c=>c.key).join("."))||"",message:u.message}}))||[]}function x(e,r,n,s,u,a){return $(),O("form",{onSubmit:r[0]||(r[0]=j((...c)=>e.onSubmit&&e.onSubmit(...c),["prevent"]))},[A(e.$slots,"default")],32)}const z=E(J,[["render",x]]);export{z as default};
