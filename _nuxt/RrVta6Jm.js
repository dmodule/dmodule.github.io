import{ab as x,aG as I,j as p,R as f}from"./DeuvRX2B.js";const b="data-n-ids",g="-";function _(t){var o,r,d,u,a,c;if(typeof t!="string")throw new TypeError("[nuxt] [useId] key must be a string.");t=`n${t.slice(1)}`;const e=p(),n=f();if(!n)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");e._id||(e._id=0),n._nuxtIdIndex||(n._nuxtIdIndex={}),(o=n._nuxtIdIndex)[t]||(o[t]=0);const i=t+g+n._nuxtIdIndex[t]++;if(e.payload.serverRendered&&e.isHydrating&&!x(I,!1)){const s=((r=n.vnode.el)==null?void 0:r.nodeType)===8&&((u=(d=n.vnode.el)==null?void 0:d.nextElementSibling)!=null&&u.getAttribute)?(a=n.vnode.el)==null?void 0:a.nextElementSibling:n.vnode.el,l=JSON.parse(((c=s==null?void 0:s.getAttribute)==null?void 0:c.call(s,b))||"{}");if(l[i])return l[i]}return t+"_"+e._id++}export{_ as u};