import{f as Ct,i as zt,c as Et,_ as It}from"./BBTa3uuf.js";import{_ as St,a as $t}from"./CBC5Ffwu.js";import{_ as Lt}from"./e51F0Mfc.js";import Ot from"./BFHsw8nu.js";import{_ as At}from"./CIrvOaRj.js";import{_ as wt,o as Z,M as nt,w as at,Q as xt,ag as ut,c as W,D as lt,r as mt,m as Dt,f as Nt,l as jt,a as et,U as st,b as X,T as Bt,J as Zt,y as it,q as H,H as vt,I as gt,E as Ht,F as Pt}from"./CMgfjk2B.js";import{s as Ut}from"./B4o5h6Dr.js";import"./D8XLQ2oo.js";import"./BJ7qOPW6.js";import"./BpSgED-2.js";import"./iO3TyptH.js";import"./BqgA8WkM.js";import"./Ba704WhJ.js";import"./DGR0v2_f.js";import"./CV63zN8U.js";import"./Bk2xIUJf.js";import"./B08LnwSc.js";import"./CxIZtCgj.js";import"./Cb15ghaC.js";import"./VLjS7zgI.js";import"./CMlBT5zd.js";import"./C08AvRvv.js";import"./DmO626QD.js";import"./kHX2Wnqo.js";import"./DxK7WQ94.js";import"./CSIpw6TJ.js";import"./D1IA68YM.js";import"./CHZe3MDG.js";import"./B6tWk1ag.js";import"./D7EQl-RA.js";import"./C5_6IMde.js";import"./BnaH1qzr.js";import"./Dg4M981S.js";import"./BcWQmOag.js";import"./DZEwva1J.js";import"./CB_wPJej.js";import"./C2BS08VY.js";import"./qxWO9KXu.js";import"./BQdokeU3.js";import"./JlINvmum.js";import"./DMJkAyE3.js";import"./BqAR3TBA.js";import"./DCYNhRAl.js";import"./CrtgqDV4.js";const Ft={props:{modelValue:{type:Object,default:()=>({className:"",attrs:{},state:{}})}},data:()=>({loaded:!1}),computed:{edit(){return!0},info:{get(){const t=Ct(this.modelValue.attrs);return{...this.modelValue,state:t}},set(t){this.$emit("update:modelValue",t)}}},methods:{async onVisibled(){this.loaded=!0}}};function Rt(t,i,e,l,n,r){const a=Ot,m=At;return Z(),nt(m,{modelValue:r.info,"onUpdate:modelValue":i[0]||(i[0]=u=>r.info=u),edit:r.edit,loaded:t.loaded,onOnVisibled:r.onVisibled},{default:at(({key:u})=>[t.loaded?(Z(),nt(a,xt({key:u},r.info.design,{custom:r.info.custom,"model-value":r.info.attrs}),null,16,["custom","model-value"])):ut("",!0)]),_:1},8,["modelValue","edit","loaded","onOnVisibled"])}const qt=wt(Ft,[["render",Rt]]),Wt={},Xt={class:"keen-slider__slide"};function Yt(t,i){return Z(),W("div",Xt,[lt(t.$slots,"default")])}const Gt=wt(Wt,[["render",Yt]]);var Y=function(){return Y=Object.assign||function(t){for(var i,e=1,l=arguments.length;e<l;e++)for(var n in i=arguments[e])Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);return t},Y.apply(this,arguments)};function kt(t,i,e){for(var l,n=0,r=i.length;n<r;n++)!l&&n in i||(l||(l=Array.prototype.slice.call(i,0,n)),l[n]=i[n]);return t.concat(l||Array.prototype.slice.call(i))}function ht(t){return Array.prototype.slice.call(t)}function _t(t,i){var e=Math.floor(t);return e===i||e+1===i?t:i}function yt(){return Date.now()}function ot(t,i,e){if(i="data-keen-slider-"+i,e===null)return t.removeAttribute(i);t.setAttribute(i,e||"")}function rt(t,i){return i=i||document,typeof t=="function"&&(t=t(i)),Array.isArray(t)?t:typeof t=="string"?ht(i.querySelectorAll(t)):t instanceof HTMLElement?[t]:t instanceof NodeList?ht(t):[]}function J(t){t.raw&&(t=t.raw),t.cancelable&&!t.defaultPrevented&&t.preventDefault()}function Q(t){t.raw&&(t=t.raw),t.stopPropagation&&t.stopPropagation()}function Vt(){var t=[];return{add:function(i,e,l,n){i.addListener?i.addListener(l):i.addEventListener(e,l,n),t.push([i,e,l,n])},input:function(i,e,l,n){this.add(i,e,function(r){return function(a){a.nativeEvent&&(a=a.nativeEvent);var m=a.changedTouches||[],u=a.targetTouches||[],s=a.detail&&a.detail.x?a.detail:null;return r({id:s?s.identifier?s.identifier:"i":u[0]?u[0]?u[0].identifier:"e":"d",idChanged:s?s.identifier?s.identifier:"i":m[0]?m[0]?m[0].identifier:"e":"d",raw:a,x:s&&s.x?s.x:u[0]?u[0].screenX:s?s.x:a.pageX,y:s&&s.y?s.y:u[0]?u[0].screenY:s?s.y:a.pageY})}}(l),n)},purge:function(){t.forEach(function(i){i[0].removeListener?i[0].removeListener(i[2]):i[0].removeEventListener(i[1],i[2],i[3])}),t=[]}}}function dt(t,i,e){return Math.min(Math.max(t,i),e)}function F(t){return(t>0?1:0)-(t<0?1:0)||+t}function bt(t){var i=t.getBoundingClientRect();return{height:_t(i.height,t.offsetHeight),width:_t(i.width,t.offsetWidth)}}function B(t,i,e,l){var n=t&&t[i];return n==null?e:l&&typeof n=="function"?n():n}function U(t){return Math.round(1e6*t)/1e6}function Jt(t){var i,e,l,n,r,a;function m(_){a||(a=_),u(!0);var T=_-a;T>l&&(T=l);var d=n[e];if(d[3]<T)return e++,m(_);var k=d[2],z=d[4],y=d[0],b=d[1]*(0,d[5])(z===0?1:(T-k)/z);if(b&&t.track.to(y+b),T<l)return h();a=null,u(!1),s(null),t.emit("animationEnded")}function u(_){i.active=_}function s(_){i.targetIdx=_}function h(){var _;_=m,r=window.requestAnimationFrame(_)}function C(){var _;_=r,window.cancelAnimationFrame(_),u(!1),s(null),a&&t.emit("animationStopped"),a=null}return i={active:!1,start:function(_){if(C(),t.track.details){var T=0,d=t.track.details.position;e=0,l=0,n=_.map(function(k){var z,y=Number(d),b=(z=k.earlyExit)!==null&&z!==void 0?z:k.duration,g=k.easing,O=k.distance*g(b/k.duration)||0;d+=O;var E=l;return l+=b,T+=O,[y,k.distance,E,l,k.duration,g]}),s(t.track.distToIdx(T)),h(),t.emit("animationStarted")}},stop:C,targetIdx:null}}function Qt(t){var i,e,l,n,r,a,m,u,s,h,C,_,T,d,k=1/0,z=[],y=null,b=0;function g(v){j(b+v)}function O(v){var f=E(b+v).abs;return M(f)?f:null}function E(v){var f=Math.floor(Math.abs(U(v/e))),o=U((v%e+e)%e);o===e&&(o=0);var x=F(v),p=m.indexOf(kt([],m).reduce(function(I,S){return Math.abs(S-o)<Math.abs(I-o)?S:I})),V=p;return x<0&&f++,p===a&&(V=0,f+=x>0?1:-1),{abs:V+f*a*x,origin:p,rel:V}}function $(v,f,o){var x;if(f||!P())return c(v,o);if(!M(v))return null;var p=E(o??b),V=p.abs,I=v-p.rel,S=V+I;x=c(S);var A=c(S-a*F(I));return(A!==null&&Math.abs(A)<Math.abs(x)||x===null)&&(x=A),U(x)}function c(v,f){if(f==null&&(f=U(b)),!M(v)||v===null)return null;v=Math.round(v);var o=E(f),x=o.abs,p=o.rel,V=o.origin,I=N(v),S=(f%e+e)%e,A=m[V],R=Math.floor((v-(x-p))/a)*e;return U(A-S-A+m[I]+R+(V===a?e:0))}function M(v){return L(v)===v}function L(v){return dt(v,s,h)}function P(){return n.loop}function N(v){return(v%a+a)%a}function j(v){var f;f=v-b,z.push({distance:f,timestamp:yt()}),z.length>6&&(z=z.slice(-6)),b=U(v);var o=w().abs;if(o!==y){var x=y!==null;y=o,x&&t.emit("slideChanged")}}function w(v){var f=v?null:function(){if(a){var o=P(),x=o?(b%e+e)%e:b,p=(o?b%e:b)-r[0][2],V=0-(p<0&&o?e-Math.abs(p):p),I=0,S=E(b),A=S.abs,R=S.rel,K=r[R][2],tt=r.map(function(q,Mt){var D=V+I;(D<0-q[0]||D>1)&&(D+=(Math.abs(D)>e-1&&o?e:0)*F(-D));var ct=Mt-R,ft=F(ct),G=ct+A;o&&(ft===-1&&D>K&&(G+=a),ft===1&&D<K&&(G-=a),C!==null&&G<C&&(D+=e),_!==null&&G>_&&(D-=e));var pt=D+q[0]+q[1],Tt=Math.max(D>=0&&pt<=1?1:pt<0||D>1?0:D<0?Math.min(1,(q[0]+D)/q[0]):(1-D)/q[0],0);return I+=q[0]+q[1],{abs:G,distance:n.rtl?-1*D+1-q[0]:D,portion:Tt,size:q[0]}});return A=L(A),R=N(A),{abs:L(A),length:l,max:d,maxIdx:h,min:T,minIdx:s,position:b,progress:o?x/e:b/l,rel:R,slides:tt,slidesLength:e}}}();return i.details=f,t.emit("detailsChanged"),f}return i={absToRel:N,add:g,details:null,distToIdx:O,idxToDist:$,init:function(v){if(function(){if(n=t.options,r=(n.trackConfig||[]).map(function(p){return[B(p,"size",1),B(p,"spacing",0),B(p,"origin",0)]}),a=r.length){e=U(r.reduce(function(p,V){return p+V[0]+V[1]},0));var o,x=a-1;l=U(e+r[0][2]-r[x][0]-r[x][2]-r[x][1]),m=r.reduce(function(p,V){if(!p)return[0];var I=r[p.length-1],S=p[p.length-1]+(I[0]+I[2])+I[1];return S-=V[2],p[p.length-1]>S&&(S=p[p.length-1]),S=U(S),p.push(S),(!o||o<S)&&(u=p.length-1),o=S,p},null),l===0&&(u=0),m.push(U(e))}}(),!a)return w(!0);var f;(function(){var o=t.options.range,x=t.options.loop;C=s=x?B(x,"min",-1/0):0,_=h=x?B(x,"max",k):u;var p=B(o,"min",null),V=B(o,"max",null);p!==null&&(s=p),V!==null&&(h=V),T=s===-1/0?s:t.track.idxToDist(s||0,!0,0),d=h===k?h:$(h,!0,0),V===null&&(_=h),B(o,"align",!1)&&h!==k&&r[N(h)][2]===0&&(d-=1-r[N(h)][0],h=O(d-b)),T=U(T),d=U(d)})(),f=v,Number(f)===f?g(c(L(v))):w()},to:j,velocity:function(){var v=yt(),f=z.reduce(function(o,x){var p=x.distance,V=x.timestamp;return v-V>200||(F(p)!==F(o.distance)&&o.distance&&(o={distance:0,lastTimestamp:0,time:0}),o.time&&(o.distance+=p),o.lastTimestamp&&(o.time+=V-o.lastTimestamp),o.lastTimestamp=V),o},{distance:0,lastTimestamp:0,time:0});return f.distance/f.time||0}}}function Kt(t){var i,e,l,n,r,a,m,u;function s(y){return 2*y}function h(y){return dt(y,m,u)}function C(y){return 1-Math.pow(1-y,3)}function _(){return l?t.track.velocity():0}function T(){z();var y=t.options.mode==="free-snap",b=t.track,g=_();n=F(g);var O=t.track.details,E=[];if(g||!y){var $=d(g),c=$.dist,M=$.dur;if(M=s(M),c*=n,y){var L=b.idxToDist(b.distToIdx(c),!0);L&&(c=L)}E.push({distance:c,duration:M,easing:C});var P=O.position,N=P+c;if(N<r||N>a){var j=N<r?r-P:a-P,w=0,v=g;if(F(j)===n){var f=Math.min(Math.abs(j)/Math.abs(c),1),o=function(V){return 1-Math.pow(1-V,1/3)}(f)*M;E[0].earlyExit=o,v=g*(1-f)}else E[0].earlyExit=0,w+=j;var x=d(v,100),p=x.dist*n;t.options.rubberband&&(E.push({distance:p,duration:s(x.dur),easing:C}),E.push({distance:-p+w,duration:500,easing:C}))}t.animator.start(E)}else t.moveToIdx(h(O.abs),!0,{duration:500,easing:function(V){return 1+--V*V*V*V*V}})}function d(y,b){b===void 0&&(b=1e3);var g=147e-9+(y=Math.abs(y))/b;return{dist:Math.pow(y,2)/g,dur:y/g}}function k(){var y=t.track.details;y&&(r=y.min,a=y.max,m=y.minIdx,u=y.maxIdx)}function z(){t.animator.stop()}t.on("updated",k),t.on("optionsChanged",k),t.on("created",k),t.on("dragStarted",function(){l=!1,z(),i=e=t.track.details.abs}),t.on("dragChecked",function(){l=!0}),t.on("dragEnded",function(){var y=t.options.mode;y==="snap"&&function(){var b=t.track,g=t.track.details,O=g.position,E=F(_());(O>a||O<r)&&(E=0);var $=i+E;g.slides[b.absToRel($)].portion===0&&($-=E),i!==e&&($=e),F(b.idxToDist($,!0))!==E&&($+=E),$=h($);var c=b.idxToDist($,!0);t.animator.start([{distance:c,duration:500,easing:function(M){return 1+--M*M*M*M*M}}])}(),y!=="free"&&y!=="free-snap"||T()}),t.on("dragged",function(){e=t.track.details.abs})}function te(t){var i,e,l,n,r,a,m,u,s,h,C,_,T,d,k,z,y,b,g=Vt();function O(w){if(a&&u===w.id){var v=M(w);if(s){if(!c(w))return $(w);h=v,s=!1,t.emit("dragChecked")}if(z)return h=v;J(w);var f=function(x){if(y===-1/0&&b===1/0)return x;var p=t.track.details,V=p.length,I=p.position,S=dt(x,y-I,b-I);if(V===0)return 0;if(!t.options.rubberband)return S;if(I<=b&&I>=y||I<y&&e>0||I>b&&e<0)return x;var A=(I<y?I-y:I-b)/V,R=n*V,K=Math.abs(A*R),tt=Math.max(0,1-K/r*2);return tt*tt*x}(m(h-v)/n*l);e=F(f);var o=t.track.details.position;(o>y&&o<b||o===y&&e>0||o===b&&e<0)&&Q(w),C+=f,!_&&Math.abs(C*n)>5&&(_=!0),t.track.add(f),h=v,t.emit("dragged")}}function E(w){!a&&t.track.details&&t.track.details.length&&(C=0,a=!0,_=!1,s=!0,u=w.id,c(w),h=M(w),t.emit("dragStarted"))}function $(w){a&&u===w.idChanged&&(a=!1,t.emit("dragEnded"))}function c(w){var v=L(),f=v?w.y:w.x,o=v?w.x:w.y,x=T!==void 0&&d!==void 0&&Math.abs(d-o)<=Math.abs(T-f);return T=f,d=o,x}function M(w){return L()?w.y:w.x}function L(){return t.options.vertical}function P(){n=t.size,r=L()?window.innerHeight:window.innerWidth;var w=t.track.details;w&&(y=w.min,b=w.max)}function N(w){_&&(Q(w),J(w))}function j(){if(g.purge(),t.options.drag&&!t.options.disabled){var w;w=t.options.dragSpeed||1,m=typeof w=="function"?w:function(f){return f*w},l=t.options.rtl?-1:1,P(),i=t.container,function(){var f="data-keen-slider-clickable";rt("[".concat(f,"]:not([").concat(f,"=false])"),i).map(function(o){g.add(o,"dragstart",Q),g.add(o,"mousedown",Q),g.add(o,"touchstart",Q)})}(),g.add(i,"dragstart",function(f){J(f)}),g.add(i,"click",N,{capture:!0}),g.input(i,"ksDragStart",E),g.input(i,"ksDrag",O),g.input(i,"ksDragEnd",$),g.input(i,"mousedown",E),g.input(i,"mousemove",O),g.input(i,"mouseleave",$),g.input(i,"mouseup",$),g.input(i,"touchstart",E,{passive:!0}),g.input(i,"touchmove",O,{passive:!1}),g.input(i,"touchend",$),g.input(i,"touchcancel",$),g.add(window,"wheel",function(f){a&&J(f)});var v="data-keen-slider-scrollable";rt("[".concat(v,"]:not([").concat(v,"=false])"),t.container).map(function(f){return function(o){var x;g.input(o,"touchstart",function(p){x=M(p),z=!0,k=!0},{passive:!0}),g.input(o,"touchmove",function(p){var V=L(),I=V?o.scrollHeight-o.clientHeight:o.scrollWidth-o.clientWidth,S=x-M(p),A=V?o.scrollTop:o.scrollLeft,R=V&&o.style.overflowY==="scroll"||!V&&o.style.overflowX==="scroll";if(x=M(p),(S<0&&A>0||S>0&&A<I)&&k&&R)return z=!0;k=!1,J(p),z=!1}),g.input(o,"touchend",function(){z=!1})}(f)})}}t.on("updated",P),t.on("optionsChanged",j),t.on("created",j),t.on("destroyed",g.purge)}function ee(t){var i,e,l=null;function n(T,d,k){t.animator.active?a(T,d,k):requestAnimationFrame(function(){return a(T,d,k)})}function r(){n(!1,!1,e)}function a(T,d,k){var z=0,y=t.size,b=t.track.details;if(b&&i){var g=b.slides;i.forEach(function(O,E){if(T)!l&&d&&u(O,null,k),s(O,null,k);else{if(!g[E])return;var $=g[E].size*y;!l&&d&&u(O,$,k),s(O,g[E].distance*y-z,k),z+=$}})}}function m(T){return t.options.renderMode==="performance"?Math.round(T):T}function u(T,d,k){var z=k?"height":"width";d!==null&&(d=m(d)+"px"),T.style["min-"+z]=d,T.style["max-"+z]=d}function s(T,d,k){if(d!==null){d=m(d);var z=k?d:0;d="translate3d(".concat(k?0:d,"px, ").concat(z,"px, 0)")}T.style.transform=d,T.style["-webkit-transform"]=d}function h(){i&&(a(!0,!0,e),i=null),t.on("detailsChanged",r,!0)}function C(){n(!1,!0,e)}function _(){h(),e=t.options.vertical,t.options.disabled||t.options.renderMode==="custom"||(l=B(t.options.slides,"perView",null)==="auto",t.on("detailsChanged",r),(i=t.slides).length&&C())}t.on("created",_),t.on("optionsChanged",_),t.on("beforeOptionsChanged",function(){h()}),t.on("updated",C),t.on("destroyed",h)}function ie(t,i){return function(e){var l,n,r,a,m,u=Vt();function s(c){var M;ot(e.container,"reverse",(M=e.container,window.getComputedStyle(M,null).getPropertyValue("direction")!=="rtl"||c?null:"")),ot(e.container,"v",e.options.vertical&&!c?"":null),ot(e.container,"disabled",e.options.disabled&&!c?"":null)}function h(){C()&&z()}function C(){var c=null;if(a.forEach(function(L){L.matches&&(c=L.__media)}),c===l)return!1;l||e.emit("beforeOptionsChanged"),l=c;var M=c?r.breakpoints[c]:r;return e.options=Y(Y({},r),M),s(),E(),$(),b(),!0}function _(c){var M=bt(c);return(e.options.vertical?M.height:M.width)/e.size||1}function T(){return e.options.trackConfig.length}function d(c){for(var M in l=!1,r=Y(Y({},i),c),u.purge(),n=e.size,a=[],r.breakpoints||[]){var L=window.matchMedia(M);L.__media=M,a.push(L),u.add(L,"change",h)}u.add(window,"orientationchange",O),u.add(window,"resize",g),C()}function k(c){e.animator.stop();var M=e.track.details;e.track.init(c??(M?M.abs:0))}function z(c){k(c),e.emit("optionsChanged")}function y(c,M){if(c)return d(c),void z(M);E(),$();var L=T();b(),T()!==L?z(M):k(M),e.emit("updated")}function b(){var c=e.options.slides;if(typeof c=="function")return e.options.trackConfig=c(e.size,e.slides);for(var M=e.slides,L=M.length,P=typeof c=="number"?c:B(c,"number",L,!0),N=[],j=B(c,"perView",1,!0),w=B(c,"spacing",0,!0)/e.size||0,v=j==="auto"?w:w/j,f=B(c,"origin","auto"),o=0,x=0;x<P;x++){var p=j==="auto"?_(M[x]):1/j-w+v,V=f==="center"?.5-p/2:f==="auto"?0:f;N.push({origin:V,size:p,spacing:w}),o+=p}if(o+=w*(P-1),f==="auto"&&!e.options.loop&&j!==1){var I=0;N.map(function(S){var A=o-I;return I+=S.size+w,A>=1||(S.origin=1-A-(o>1?0:1-o)),S})}e.options.trackConfig=N}function g(){E();var c=e.size;e.options.disabled||c===n||(n=c,y())}function O(){g(),setTimeout(g,500),setTimeout(g,2e3)}function E(){var c=bt(e.container);e.size=(e.options.vertical?c.height:c.width)||1}function $(){e.slides=rt(e.options.selector,e.container)}e.container=(m=rt(t,document)).length?m[0]:null,e.destroy=function(){u.purge(),e.emit("destroyed"),s(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=y,d(e.options)}}var ne=function(t,i,e){try{return function(l,n){var r,a={};return r={emit:function(m){a[m]&&a[m].forEach(function(s){s(r)});var u=r.options&&r.options[m];u&&u(r)},moveToIdx:function(m,u,s){var h=r.track.idxToDist(m,u);if(h){var C=r.options.defaultAnimation;r.animator.start([{distance:h,duration:B(s||C,"duration",500),easing:B(s||C,"easing",function(_){return 1+--_*_*_*_*_})}])}},on:function(m,u,s){s===void 0&&(s=!1),a[m]||(a[m]=[]);var h=a[m].indexOf(u);h>-1?s&&delete a[m][h]:s||a[m].push(u)},options:l},function(){if(r.track=Qt(r),r.animator=Jt(r),n)for(var m=0,u=n;m<u.length;m++)(0,u[m])(r);r.track.init(r.options.initial||0),r.emit("created")}(),r}(i,kt([ie(t,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),ee,te,Kt],e||[],!0))}catch(l){console.error(l)}};const re={class:"relative"},oe={__name:"Base",props:{length:{type:Number,default:0},perView:{type:Number,default:3},spacing:{type:Number,default:16},autoplay:{type:Number,default:0},arrowStyle:{type:String,default:"right"},size:{type:String,default:"xl"},fullscreen:{type:Boolean,default:!1}},setup(t){const i=t,e=mt(null),l=mt(!0);let n=null,r=null;const a={loop:!0,mode:"free-snap",slides:{perView:i.perView,spacing:i.spacing},breakpoints:i.fullscreen?{}:{"(max-width: 1024px)":{slides:{perView:2,spacing:16}},"(max-width: 640px)":{slides:{perView:1,spacing:8}}}},m=()=>{n&&n.destroy(),Bt(()=>{n=new ne(e.value,a),i.length>1?(l.value=!0,i.autoplay&&(n.on("created",u),n.on("dragStart",s),n.on("dragEnd",u),e.value.addEventListener("mouseover",s),e.value.addEventListener("mouseout",u))):l.value=!1})},u=()=>{r=Ut(()=>{n&&n.next()},autoplay)},s=()=>{clearInterval(r)},h=()=>{n&&n.prev()},C=()=>{n&&n.next()},_=()=>{n&&n.update()};return Dt(i,()=>{m()}),Nt(()=>{m(),window.addEventListener("resize",_)}),jt(()=>{n&&n.destroy(),s(),window.removeEventListener("resize",_)}),(T,d)=>{const k=Zt;return Z(),W("div",re,[et("div",{ref_key:"slider",ref:e,class:st(["keen-slider mx-auto",{"h-full":t.fullscreen}])},[lt(T.$slots,"default")],2),l.value?(Z(),W("div",{key:0,dir:"ltr",class:st({"flex gap-4 justify-end py-4":t.arrowStyle==="right","keen-arrow":t.arrowStyle==="center"})},[X(k,{class:"keen-arrow-left",icon:"i-ri-arrow-left-s-line",size:t.size,color:"white",square:"",variant:"solid",ui:{rounded:"rounded-full"},onClick:d[0]||(d[0]=z=>h())},null,8,["size"]),X(k,{icon:"i-ri-arrow-right-s-line",class:"keen-arrow-right",size:t.size,color:"white",square:"",variant:"solid",ui:{rounded:"rounded-full"},onClick:d[1]||(d[1]=z=>C())},null,8,["size"])],2)):ut("",!0)])}}},ae={key:0,class:"mt-8 md:mt-12 lg:mt-16"},se={key:0},ue={key:1,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12"},le={__name:"Multi",props:["modelValue","type","perView","spacing","autoplay"],emits:["update:modelValue"],setup(t,{emit:i}){const e=t,l=i,n=it({get:()=>e.modelValue,set:r=>{l("update:modelValue",r)}});return(r,a)=>{const m=qt,u=Gt,s=oe;return H(n)?(Z(),W("div",ae,[e.type==="carousel"?(Z(),W("div",se,[X(s,{"per-view":e.perView,spacing:e.spacing,autoplay:e.autoplay},{default:at(()=>[(Z(!0),W(vt,null,gt(H(n),(h,C)=>(Z(),nt(u,{key:C},{default:at(()=>[X(m,{modelValue:H(n)[C],"onUpdate:modelValue":_=>H(n)[C]=_},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1},8,["per-view","spacing","autoplay"])])):(Z(),W("div",ue,[(Z(!0),W(vt,null,gt(H(n),(h,C)=>(Z(),nt(m,{modelValue:H(n)[C],"onUpdate:modelValue":_=>H(n)[C]=_,key:C},null,8,["modelValue","onUpdate:modelValue"]))),128))]))])):ut("",!0)}}},de={class:"relative px-4 py-32 lg:flex lg:items-center lg:justify-center"},ce={class:"w-full"},fe={class:"mx-auto max-w-6xl text-center"},ni={__name:"Base",props:{custom:{type:Object},modelValue:{type:Object,default(){return{}}},addon:{type:Object,default(){return{}}}},emits:["update:modelValue"],setup(t,{emit:i}){const e=t,l=it(()=>{var h,C;const u=((h=e.custom)==null?void 0:h.hue)??"",s=((C=e.custom)==null?void 0:C.className)??"";return{hue:u,className:s}}),n=it(()=>l.value.hue?{type:"Simple",bg:l.value.hue}:{type:"Radial2Middle",bg:""}),r=i,a=it(()=>zt(e.modelValue)?e.modelValue:{...Et(["subject","title","description"]),series:[]}),m=(u,s)=>{const h={...a};h.series[s]=u,r("update:modelValue",h)};return(u,s)=>{const h=It,C=St,_=$t,T=Lt,d=le;return Z(),W("section",{class:st(["relative",[H(l).className]])},[X(h,Ht(Pt(H(n))),null,16),lt(u.$slots,"default"),et("div",de,[et("div",ce,[et("div",fe,[X(C,{modelValue:H(a).subject},null,8,["modelValue"]),X(_,{modelValue:H(a).title},null,8,["modelValue"]),X(T,{modelValue:H(a).description,className:"mt-4 text-justify"},null,8,["modelValue"])]),X(d,xt({class:"mx-auto max-w-6xl",modelValue:H(a).series,"onUpdate:modelValue":s[0]||(s[0]=k=>m(k,u.key))},e.addon),null,16,["modelValue"])])])],2)}}};export{ni as default};