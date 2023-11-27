import{_ as b,g as w,b_ as p,r as v,aP as h,o as E,c as g,v as _,bD as S}from"./entry.dd57515c.js";import{u as O}from"./uid.12f507af.js";class l extends Error{constructor(s){super(s),this.message=s,Object.setPrototypeOf(this,l.prototype)}}const $=w({props:{schema:{type:Object,default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:s,emit:r}){const n=p(`form-${O()}`);n.on(async t=>{var i;t.type!=="submit"&&((i=e.validateOn)!=null&&i.includes(t.type))&&await m(t.path,{silent:!0})});const a=v([]);h("form-errors",a),h("form-events",n);const f=v({});h("form-inputs",f);async function c(){let t=await e.validate(e.state);if(e.schema)if(Y(e.schema))t=t.concat(await k(e.state,e.schema));else if(j(e.schema))t=t.concat(await A(e.state,e.schema));else if(B(e.schema))t=t.concat(await P(e.state,e.schema));else if(x(e.schema))t=t.concat(await V(e.state,e.schema));else throw new Error("Form validation failed: Unsupported form schema");return t}async function m(t,i={silent:!1}){if(t){const o=a.value.filter(u=>u.path!==t),d=(await c()).filter(u=>u.path===t);a.value=o.concat(d)}else a.value=await c();if(!i.silent&&a.value.length>0)throw new l(`Form validation failed: ${JSON.stringify(a.value,null,2)}`);return e.state}async function y(t){var i;try{(i=e.validateOn)!=null&&i.includes("submit")&&await m();const o={...t,data:e.state};r("submit",o)}catch(o){if(!(o instanceof l))throw o;const d={...t,errors:a.value.map(u=>({...u,id:f.value[u.path]}))};r("error",d)}}return s({validate:m,errors:a,setErrors(t,i){a.value=t,i?a.value=a.value.filter(o=>o.path!==i).concat(t):a.value=t},getErrors(t){return t?a.value.filter(i=>i.path===t):a.value},clear(t){t?a.value=a.value.filter(i=>i.path===t):a.value=[]}}),{onSubmit:y}}});function j(e){return e.validate&&e.__isYupSchema__}function J(e){return e.inner!==void 0}async function A(e,s){try{return await s.validate(e,{abortEarly:!1}),[]}catch(r){if(J(r))return r.inner.map(n=>({path:n.path??"",message:n.message}));throw r}}function Y(e){return e.parse!==void 0}async function k(e,s){const r=await s.safeParseAsync(e);return r.success===!1?r.error.issues.map(n=>({path:n.path.join("."),message:n.message})):[]}function B(e){return e.validateAsync!==void 0&&e.id!==void 0}function F(e){return e.isJoi===!0}async function P(e,s){try{return await s.validateAsync(e,{abortEarly:!1}),[]}catch(r){if(F(r))return r.details.map(n=>({path:n.path.join("."),message:n.message}));throw r}}function x(e){return e._parse!==void 0}async function V(e,s){const r=await s._parse(e);return r.issues?r.issues.map(n=>({path:n.path.map(a=>a.key).join("."),message:n.message})):[]}function Z(e,s,r,n,a,f){return E(),g("form",{onSubmit:s[0]||(s[0]=S((...c)=>e.onSubmit&&e.onSubmit(...c),["prevent"]))},[_(e.$slots,"default")],32)}const D=b($,[["render",Z]]);export{D as default};
