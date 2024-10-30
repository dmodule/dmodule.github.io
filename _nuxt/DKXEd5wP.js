import{r as ft,a_ as dt,bb as gt,bs as B,bq as K,bA as pt,bB as mt,br as T,b_ as Mt,bw as xt}from"./BD89yi6W.js";function I(e){return Array.isArray?Array.isArray(e):rt(e)==="[object Array]"}const _t=1/0;function yt(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-_t?"-0":t}function Et(e){return e==null?"":yt(e)}function y(e){return typeof e=="string"}function st(e){return typeof e=="number"}function It(e){return e===!0||e===!1||St(e)&&rt(e)=="[object Boolean]"}function nt(e){return typeof e=="object"}function St(e){return nt(e)&&e!==null}function m(e){return e!=null}function D(e){return!e.trim().length}function rt(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const bt="Incorrect 'index' type",At=e=>`Invalid value for key ${e}`,wt=e=>`Pattern length exceeds max of ${e}.`,Lt=e=>`Missing ${e} property in key`,Rt=e=>`Property 'weight' in key '${e}' must be a positive integer`,J=Object.prototype.hasOwnProperty;class kt{constructor(t){this._keys=[],this._keyMap={};let s=0;t.forEach(n=>{let r=it(n);this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function it(e){let t=null,s=null,n=null,r=1,i=null;if(y(e)||I(e))n=e,t=Z(e),s=H(e);else{if(!J.call(e,"name"))throw new Error(Lt("name"));const c=e.name;if(n=c,J.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(Rt(c));t=Z(c),s=H(c),i=e.getFn}return{path:t,id:s,weight:r,src:n,getFn:i}}function Z(e){return I(e)?e:e.split(".")}function H(e){return I(e)?e.join("."):e}function Nt(e,t){let s=[],n=!1;const r=(i,c,a)=>{if(m(i))if(!c[a])s.push(i);else{let o=c[a];const h=i[o];if(!m(h))return;if(a===c.length-1&&(y(h)||st(h)||It(h)))s.push(Et(h));else if(I(h)){n=!0;for(let l=0,f=h.length;l<f;l+=1)r(h[l],c,a+1)}else c.length&&r(h,c,a+1)}};return r(e,y(t)?t.split("."):t,0),n?s:s[0]}const $t={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ot={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},vt={location:0,threshold:.6,distance:100},Tt={useExtendedSearch:!1,getFn:Nt,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...Ot,...$t,...vt,...Tt};const Ct=/[^ ]+/g;function Ft(e=1,t=3){const s=new Map,n=Math.pow(10,t);return{get(r){const i=r.match(Ct).length;if(s.has(i))return s.get(i);const c=1/Math.pow(i,.5*e),a=parseFloat(Math.round(c*n)/n);return s.set(i,a),a},clear(){s.clear()}}}class U{constructor({getFn:t=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){this.norm=Ft(s,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,y(this.docs[0])?this.docs.forEach((t,s)=>{this._addString(t,s)}):this.docs.forEach((t,s)=>{this._addObject(t,s)}),this.norm.clear())}add(t){const s=this.size();y(t)?this._addString(t,s):this._addObject(t,s)}removeAt(t){this.records.splice(t,1);for(let s=t,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(t,s){return t[this._keysMap[s]]}size(){return this.records.length}_addString(t,s){if(!m(t)||D(t))return;let n={v:t,i:s,n:this.norm.get(t)};this.records.push(n)}_addObject(t,s){let n={i:s,$:{}};this.keys.forEach((r,i)=>{let c=r.getFn?r.getFn(t):this.getFn(t,r.path);if(m(c)){if(I(c)){let a=[];const o=[{nestedArrIndex:-1,value:c}];for(;o.length;){const{nestedArrIndex:h,value:l}=o.pop();if(m(l))if(y(l)&&!D(l)){let f={v:l,i:h,n:this.norm.get(l)};a.push(f)}else I(l)&&l.forEach((f,d)=>{o.push({nestedArrIndex:d,value:f})})}n.$[i]=a}else if(y(c)&&!D(c)){let a={v:c,n:this.norm.get(c)};n.$[i]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function ct(e,t,{getFn:s=u.getFn,fieldNormWeight:n=u.fieldNormWeight}={}){const r=new U({getFn:s,fieldNormWeight:n});return r.setKeys(e.map(it)),r.setSources(t),r.create(),r}function Pt(e,{getFn:t=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){const{keys:n,records:r}=e,i=new U({getFn:t,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(r),i}function C(e,{errors:t=0,currentLocation:s=0,expectedLocation:n=0,distance:r=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const c=t/e.length;if(i)return c;const a=Math.abs(n-s);return r?c+a/r:a?1:c}function jt(e=[],t=u.minMatchCharLength){let s=[],n=-1,r=-1,i=0;for(let c=e.length;i<c;i+=1){let a=e[i];a&&n===-1?n=i:!a&&n!==-1&&(r=i-1,r-n+1>=t&&s.push([n,r]),n=-1)}return e[i-1]&&i-n>=t&&s.push([n,i-1]),s}const R=32;function Bt(e,t,s,{location:n=u.location,distance:r=u.distance,threshold:i=u.threshold,findAllMatches:c=u.findAllMatches,minMatchCharLength:a=u.minMatchCharLength,includeMatches:o=u.includeMatches,ignoreLocation:h=u.ignoreLocation}={}){if(t.length>R)throw new Error(wt(R));const l=t.length,f=e.length,d=Math.max(0,Math.min(n,f));let g=i,p=d;const M=a>1||o,w=M?Array(f):[];let E;for(;(E=e.indexOf(t,p))>-1;){let x=C(t,{currentLocation:E,expectedLocation:d,distance:r,ignoreLocation:h});if(g=Math.min(x,g),p=E+l,M){let S=0;for(;S<l;)w[E+S]=1,S+=1}}p=-1;let k=[],L=1,O=l+f;const ut=1<<l-1;for(let x=0;x<l;x+=1){let S=0,b=O;for(;S<b;)C(t,{errors:x,currentLocation:d+b,expectedLocation:d,distance:r,ignoreLocation:h})<=g?S=b:O=b,b=Math.floor((O-S)/2+S);O=b;let Q=Math.max(1,d-b+1),j=c?f:Math.min(d+b,f)+l,N=Array(j+2);N[j+1]=(1<<x)-1;for(let _=j;_>=Q;_-=1){let v=_-1,X=s[e.charAt(v)];if(M&&(w[v]=+!!X),N[_]=(N[_+1]<<1|1)&X,x&&(N[_]|=(k[_+1]|k[_])<<1|1|k[_+1]),N[_]&ut&&(L=C(t,{errors:x,currentLocation:v,expectedLocation:d,distance:r,ignoreLocation:h}),L<=g)){if(g=L,p=v,p<=d)break;Q=Math.max(1,2*d-p)}}if(C(t,{errors:x+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:h})>g)break;k=N}const P={isMatch:p>=0,score:Math.max(.001,L)};if(M){const x=jt(w,a);x.length?o&&(P.indices=x):P.isMatch=!1}return P}function Kt(e){let t={};for(let s=0,n=e.length;s<n;s+=1){const r=e.charAt(s);t[r]=(t[r]||0)|1<<n-s-1}return t}class ot{constructor(t,{location:s=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:a=u.minMatchCharLength,isCaseSensitive:o=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:c,minMatchCharLength:a,isCaseSensitive:o,ignoreLocation:h},this.pattern=o?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(d,g)=>{this.chunks.push({pattern:d,alphabet:Kt(d),startIndex:g})},f=this.pattern.length;if(f>R){let d=0;const g=f%R,p=f-g;for(;d<p;)l(this.pattern.substr(d,R),d),d+=R;if(g){const M=f-R;l(this.pattern.substr(M),M)}}else l(this.pattern,0)}searchIn(t){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(t=t.toLowerCase()),this.pattern===t){let p={isMatch:!0,score:0};return n&&(p.indices=[[0,t.length-1]]),p}const{location:r,distance:i,threshold:c,findAllMatches:a,minMatchCharLength:o,ignoreLocation:h}=this.options;let l=[],f=0,d=!1;this.chunks.forEach(({pattern:p,alphabet:M,startIndex:w})=>{const{isMatch:E,score:k,indices:L}=Bt(t,p,M,{location:r+w,distance:i,threshold:c,findAllMatches:a,minMatchCharLength:o,includeMatches:n,ignoreLocation:h});E&&(d=!0),f+=k,E&&L&&(l=[...l,...L])});let g={isMatch:d,score:d?f/this.chunks.length:1};return d&&n&&(g.indices=l),g}}class A{constructor(t){this.pattern=t}static isMultiMatch(t){return q(t,this.multiRegex)}static isSingleMatch(t){return q(t,this.singleRegex)}search(){}}function q(e,t){const s=e.match(t);return s?s[1]:null}class Dt extends A{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const s=t===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Ht extends A{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=t.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Wt extends A{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const s=t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class zt extends A{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const s=!t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class Vt extends A{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const s=t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Yt extends A{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const s=!t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class at extends A{constructor(t,{location:s=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:a=u.minMatchCharLength,isCaseSensitive:o=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){super(t),this._bitapSearch=new ot(t,{location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:c,minMatchCharLength:a,isCaseSensitive:o,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class ht extends A{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let s=0,n;const r=[],i=this.pattern.length;for(;(n=t.indexOf(this.pattern,s))>-1;)s=n+i,r.push([n,s-1]);const c=!!r.length;return{isMatch:c,score:c?0:1,indices:r}}}const W=[Dt,ht,Wt,zt,Yt,Vt,Ht,at],tt=W.length,Gt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ut="|";function Qt(e,t={}){return e.split(Ut).map(s=>{let n=s.trim().split(Gt).filter(i=>i&&!!i.trim()),r=[];for(let i=0,c=n.length;i<c;i+=1){const a=n[i];let o=!1,h=-1;for(;!o&&++h<tt;){const l=W[h];let f=l.isMultiMatch(a);f&&(r.push(new l(f,t)),o=!0)}if(!o)for(h=-1;++h<tt;){const l=W[h];let f=l.isSingleMatch(a);if(f){r.push(new l(f,t));break}}}return r})}const Xt=new Set([at.type,ht.type]);class Jt{constructor(t,{isCaseSensitive:s=u.isCaseSensitive,includeMatches:n=u.includeMatches,minMatchCharLength:r=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:c=u.findAllMatches,location:a=u.location,threshold:o=u.threshold,distance:h=u.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:c,ignoreLocation:i,location:a,threshold:o,distance:h},this.pattern=s?t:t.toLowerCase(),this.query=Qt(this.pattern,this.options)}static condition(t,s){return s.useExtendedSearch}searchIn(t){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let i=0,c=[],a=0;for(let o=0,h=s.length;o<h;o+=1){const l=s[o];c.length=0,i=0;for(let f=0,d=l.length;f<d;f+=1){const g=l[f],{isMatch:p,indices:M,score:w}=g.search(t);if(p){if(i+=1,a+=w,n){const E=g.constructor.type;Xt.has(E)?c=[...c,...M]:c.push(M)}}else{a=0,i=0,c.length=0;break}}if(i){let f={isMatch:!0,score:a/i};return n&&(f.indices=c),f}}return{isMatch:!1,score:1}}}const z=[];function Zt(...e){z.push(...e)}function V(e,t){for(let s=0,n=z.length;s<n;s+=1){let r=z[s];if(r.condition(e,t))return new r(e,t)}return new ot(e,t)}const F={AND:"$and",OR:"$or"},Y={PATH:"$path",PATTERN:"$val"},G=e=>!!(e[F.AND]||e[F.OR]),qt=e=>!!e[Y.PATH],te=e=>!I(e)&&nt(e)&&!G(e),et=e=>({[F.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function lt(e,t,{auto:s=!0}={}){const n=r=>{let i=Object.keys(r);const c=qt(r);if(!c&&i.length>1&&!G(r))return n(et(r));if(te(r)){const o=c?r[Y.PATH]:i[0],h=c?r[Y.PATTERN]:r[o];if(!y(h))throw new Error(At(o));const l={keyId:H(o),pattern:h};return s&&(l.searcher=V(h,t)),l}let a={children:[],operator:i[0]};return i.forEach(o=>{const h=r[o];I(h)&&h.forEach(l=>{a.children.push(n(l))})}),a};return G(e)||(e=et(e)),n(e)}function ee(e,{ignoreFieldNorm:t=u.ignoreFieldNorm}){e.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:i,score:c})=>{const a=r?r.weight:null;n*=Math.pow(c===0&&a?Number.EPSILON:c,(a||1)*(t?1:i))}),s.score=n})}function se(e,t){const s=e.matches;t.matches=[],m(s)&&s.forEach(n=>{if(!m(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let c={indices:r,value:i};n.key&&(c.key=n.key.src),n.idx>-1&&(c.refIndex=n.idx),t.matches.push(c)})}function ne(e,t){t.score=e.score}function re(e,t,{includeMatches:s=u.includeMatches,includeScore:n=u.includeScore}={}){const r=[];return s&&r.push(se),n&&r.push(ne),e.map(i=>{const{idx:c}=i,a={item:t[c],refIndex:c};return r.length&&r.forEach(o=>{o(i,a)}),a})}class ${constructor(t,s={},n){this.options={...u,...s},this.options.useExtendedSearch,this._keyStore=new kt(this.options.keys),this.setCollection(t,n)}setCollection(t,s){if(this._docs=t,s&&!(s instanceof U))throw new Error(bt);this._myIndex=s||ct(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){m(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const s=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];t(i,n)&&(this.removeAt(n),n-=1,r-=1,s.push(i))}return s}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:s=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:c,ignoreFieldNorm:a}=this.options;let o=y(t)?y(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return ee(o,{ignoreFieldNorm:a}),i&&o.sort(c),st(s)&&s>-1&&(o=o.slice(0,s)),re(o,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(t){const s=V(t,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:c,n:a})=>{if(!m(i))return;const{isMatch:o,score:h,indices:l}=s.searchIn(i);o&&r.push({item:i,idx:c,matches:[{score:h,value:i,norm:a,indices:l}]})}),r}_searchLogical(t){const s=lt(t,this.options),n=(a,o,h)=>{if(!a.children){const{keyId:f,searcher:d}=a,g=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(o,f),searcher:d});return g&&g.length?[{idx:h,item:o,matches:g}]:[]}const l=[];for(let f=0,d=a.children.length;f<d;f+=1){const g=a.children[f],p=n(g,o,h);if(p.length)l.push(...p);else if(a.operator===F.AND)return[]}return l},r=this._myIndex.records,i={},c=[];return r.forEach(({$:a,i:o})=>{if(m(a)){let h=n(s,a,o);h.length&&(i[o]||(i[o]={idx:o,item:a,matches:[]},c.push(i[o])),h.forEach(({matches:l})=>{i[o].matches.push(...l)}))}}),c}_searchObjectList(t){const s=V(t,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:c,i:a})=>{if(!m(c))return;let o=[];n.forEach((h,l)=>{o.push(...this._findMatches({key:h,value:c[l],searcher:s}))}),o.length&&i.push({idx:a,item:c,matches:o})}),i}_findMatches({key:t,value:s,searcher:n}){if(!m(s))return[];let r=[];if(I(s))s.forEach(({v:i,i:c,n:a})=>{if(!m(i))return;const{isMatch:o,score:h,indices:l}=n.searchIn(i);o&&r.push({score:h,key:t,value:i,idx:c,norm:a,indices:l})});else{const{v:i,n:c}=s,{isMatch:a,score:o,indices:h}=n.searchIn(i);a&&r.push({score:o,key:t,value:i,norm:c,indices:h})}return r}}$.version="7.0.0";$.createIndex=ct;$.parseIndex=Pt;$.config=u;$.parseQuery=lt;Zt(Jt);const ie={class:"max-h-80 overflow-auto"},ce=["onClick"],oe=["innerHTML"],ae={class:"max-w-48 truncate"},he=["innerHTML"],fe={__name:"SymbolMenu",props:{search:{type:String,default:""},items:{type:Array,default:()=>[]}},emits:["changeSymbol"],setup(e,{emit:t}){const s=t,n=e,r=ft(null),i=o=>{s("changeSymbol",o)},c=(o,h)=>{if(!h)return o;const l=new RegExp(`(${h})`,"gi");return o.replace(l,'<b class="text-base-primary">$1</b>')},a=dt(()=>{var o;return n.search?(o=r.value)==null?void 0:o.search(n.search).map(h=>h.item):n.items});return gt(async()=>{r.value=new $(n.items,{keys:["symbol","description"],threshold:.2})}),(o,h)=>(B(),K("ul",ie,[(B(!0),K(pt,null,mt(xt(a),(l,f)=>(B(),K("li",{key:f},[T("div",{class:"cursor-pointer px-3 py-2 hover:bg-base-200 flex",onClick:d=>i(l.symbol)},[T("span",{innerHTML:c(l.symbol,e.search)},null,8,oe),h[0]||(h[0]=Mt(" -  ")),T("div",ae,[T("span",{innerHTML:c(l.description,e.search)},null,8,he)])],8,ce)]))),128))]))}};export{fe as default};
