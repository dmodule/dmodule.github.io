import{_ as wt,o as tt,c as et,T as pt,aU as bt,r as ot,m as xt,h as kt,O as yt,a as Mt,s as ut,q as Q,b as st,H as Tt,B as zt}from"./BBa6so6u.js";const Ct={},_t={class:"keen-slider__slide"};function Et(t,i){return tt(),et("div",_t,[pt(t.$slots,"default")])}const Ht=wt(Ct,[["render",Et]]);var F=function(){return F=Object.assign||function(t){for(var i,e=1,o=arguments.length;e<o;e++)for(var l in i=arguments[e])Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l]);return t},F.apply(this,arguments)};function vt(t,i,e){for(var o,l=0,a=i.length;l<a;l++)!o&&l in i||(o||(o=Array.prototype.slice.call(i,0,l)),o[l]=i[l]);return t.concat(o||Array.prototype.slice.call(i))}function ct(t){return Array.prototype.slice.call(t)}function dt(t,i){var e=Math.floor(t);return e===i||e+1===i?t:i}function lt(){return Date.now()}function Z(t,i,e){if(i="data-keen-slider-"+i,e===null)return t.removeAttribute(i);t.setAttribute(i,e||"")}function K(t,i){return i=i||document,typeof t=="function"&&(t=t(i)),Array.isArray(t)?t:typeof t=="string"?ct(i.querySelectorAll(t)):t instanceof HTMLElement?[t]:t instanceof NodeList?ct(t):[]}function X(t){t.raw&&(t=t.raw),t.cancelable&&!t.defaultPrevented&&t.preventDefault()}function Y(t){t.raw&&(t=t.raw),t.stopPropagation&&t.stopPropagation()}function mt(){var t=[];return{add:function(i,e,o,l){i.addListener?i.addListener(o):i.addEventListener(e,o,l),t.push([i,e,o,l])},input:function(i,e,o,l){this.add(i,e,function(a){return function(r){r.nativeEvent&&(r=r.nativeEvent);var p=r.changedTouches||[],x=r.targetTouches||[],u=r.detail&&r.detail.x?r.detail:null;return a({id:u?u.identifier?u.identifier:"i":x[0]?x[0]?x[0].identifier:"e":"d",idChanged:u?u.identifier?u.identifier:"i":p[0]?p[0]?p[0].identifier:"e":"d",raw:r,x:u&&u.x?u.x:x[0]?x[0].screenX:u?u.x:r.pageX,y:u&&u.y?u.y:x[0]?x[0].screenY:u?u.y:r.pageY})}}(o),l)},purge:function(){t.forEach(function(i){i[0].removeListener?i[0].removeListener(i[2]):i[0].removeEventListener(i[1],i[2],i[3])}),t=[]}}}function it(t,i,e){return Math.min(Math.max(t,i),e)}function P(t){return(t>0?1:0)-(t<0?1:0)||+t}function ft(t){var i=t.getBoundingClientRect();return{height:dt(i.height,t.offsetHeight),width:dt(i.width,t.offsetWidth)}}function q(t,i,e,o){var l=t&&t[i];return l==null?e:o&&typeof l=="function"?l():l}function $(t){return Math.round(1e6*t)/1e6}function St(t){var i,e,o,l,a,r;function p(M){r||(r=M),x(!0);var C=M-r;C>o&&(C=o);var m=l[e];if(m[3]<C)return e++,p(M);var T=m[2],_=m[4],h=m[0],g=m[1]*(0,m[5])(_===0?1:(C-T)/_);if(g&&t.track.to(h+g),C<o)return z();r=null,x(!1),u(null),t.emit("animationEnded")}function x(M){i.active=M}function u(M){i.targetIdx=M}function z(){var M;M=p,a=window.requestAnimationFrame(M)}function L(){var M;M=a,window.cancelAnimationFrame(M),x(!1),u(null),r&&t.emit("animationStopped"),r=null}return i={active:!1,start:function(M){if(L(),t.track.details){var C=0,m=t.track.details.position;e=0,o=0,l=M.map(function(T){var _,h=Number(m),g=(_=T.earlyExit)!==null&&_!==void 0?_:T.duration,v=T.easing,V=T.distance*v(g/T.duration)||0;m+=V;var E=o;return o+=g,C+=V,[h,T.distance,E,o,T.duration,v]}),u(t.track.distToIdx(C)),z(),t.emit("animationStarted")}},stop:L,targetIdx:null}}function At(t){var i,e,o,l,a,r,p,x,u,z,L,M,C,m,T=1/0,_=[],h=null,g=0;function v(f){H(g+f)}function V(f){var c=E(g+f).abs;return y(c)?c:null}function E(f){var c=Math.floor(Math.abs($(f/e))),n=$((f%e+e)%e);n===e&&(n=0);var b=P(f),d=p.indexOf(vt([],p).reduce(function(S,A){return Math.abs(A-n)<Math.abs(S-n)?A:S})),k=d;return b<0&&c++,d===r&&(k=0,c+=b>0?1:-1),{abs:k+c*r*b,origin:d,rel:k}}function I(f,c,n){var b;if(c||!W())return s(f,n);if(!y(f))return null;var d=E(n??g),k=d.abs,S=f-d.rel,A=k+S;b=s(A);var O=s(A-r*P(S));return(O!==null&&Math.abs(O)<Math.abs(b)||b===null)&&(b=O),$(b)}function s(f,c){if(c==null&&(c=$(g)),!y(f)||f===null)return null;f=Math.round(f);var n=E(c),b=n.abs,d=n.rel,k=n.origin,S=B(f),A=(c%e+e)%e,O=p[k],R=Math.floor((f-(b-d))/r)*e;return $(O-A-O+p[S]+R+(k===r?e:0))}function y(f){return D(f)===f}function D(f){return it(f,u,z)}function W(){return l.loop}function B(f){return(f%r+r)%r}function H(f){var c;c=f-g,_.push({distance:c,timestamp:lt()}),_.length>6&&(_=_.slice(-6)),g=$(f);var n=w().abs;if(n!==h){var b=h!==null;h=n,b&&t.emit("slideChanged")}}function w(f){var c=f?null:function(){if(r){var n=W(),b=n?(g%e+e)%e:g,d=(n?g%e:g)-a[0][2],k=0-(d<0&&n?e-Math.abs(d):d),S=0,A=E(g),O=A.abs,R=A.rel,G=a[R][2],J=a.map(function(j,ht){var N=k+S;(N<0-j[0]||N>1)&&(N+=(Math.abs(N)>e-1&&n?e:0)*P(-N));var nt=ht-R,rt=P(nt),U=nt+O;n&&(rt===-1&&N>G&&(U+=r),rt===1&&N<G&&(U-=r),L!==null&&U<L&&(N+=e),M!==null&&U>M&&(N-=e));var at=N+j[0]+j[1],gt=Math.max(N>=0&&at<=1?1:at<0||N>1?0:N<0?Math.min(1,(j[0]+N)/j[0]):(1-N)/j[0],0);return S+=j[0]+j[1],{abs:U,distance:l.rtl?-1*N+1-j[0]:N,portion:gt,size:j[0]}});return O=D(O),R=B(O),{abs:D(O),length:o,max:m,maxIdx:z,min:C,minIdx:u,position:g,progress:n?b/e:g/o,rel:R,slides:J,slidesLength:e}}}();return i.details=c,t.emit("detailsChanged"),c}return i={absToRel:B,add:v,details:null,distToIdx:V,idxToDist:I,init:function(f){if(function(){if(l=t.options,a=(l.trackConfig||[]).map(function(d){return[q(d,"size",1),q(d,"spacing",0),q(d,"origin",0)]}),r=a.length){e=$(a.reduce(function(d,k){return d+k[0]+k[1]},0));var n,b=r-1;o=$(e+a[0][2]-a[b][0]-a[b][2]-a[b][1]),p=a.reduce(function(d,k){if(!d)return[0];var S=a[d.length-1],A=d[d.length-1]+(S[0]+S[2])+S[1];return A-=k[2],d[d.length-1]>A&&(A=d[d.length-1]),A=$(A),d.push(A),(!n||n<A)&&(x=d.length-1),n=A,d},null),o===0&&(x=0),p.push($(e))}}(),!r)return w(!0);var c;(function(){var n=t.options.range,b=t.options.loop;L=u=b?q(b,"min",-1/0):0,M=z=b?q(b,"max",T):x;var d=q(n,"min",null),k=q(n,"max",null);d!==null&&(u=d),k!==null&&(z=k),C=u===-1/0?u:t.track.idxToDist(u||0,!0,0),m=z===T?z:I(z,!0,0),k===null&&(M=z),q(n,"align",!1)&&z!==T&&a[B(z)][2]===0&&(m-=1-a[B(z)][0],z=V(m-g)),C=$(C),m=$(m)})(),c=f,Number(c)===c?v(s(D(f))):w()},to:H,velocity:function(){var f=lt(),c=_.reduce(function(n,b){var d=b.distance,k=b.timestamp;return f-k>200||(P(d)!==P(n.distance)&&n.distance&&(n={distance:0,lastTimestamp:0,time:0}),n.time&&(n.distance+=d),n.lastTimestamp&&(n.time+=k-n.lastTimestamp),n.lastTimestamp=k),n},{distance:0,lastTimestamp:0,time:0});return c.distance/c.time||0}}}function It(t){var i,e,o,l,a,r,p,x;function u(h){return 2*h}function z(h){return it(h,p,x)}function L(h){return 1-Math.pow(1-h,3)}function M(){return o?t.track.velocity():0}function C(){_();var h=t.options.mode==="free-snap",g=t.track,v=M();l=P(v);var V=t.track.details,E=[];if(v||!h){var I=m(v),s=I.dist,y=I.dur;if(y=u(y),s*=l,h){var D=g.idxToDist(g.distToIdx(s),!0);D&&(s=D)}E.push({distance:s,duration:y,easing:L});var W=V.position,B=W+s;if(B<a||B>r){var H=B<a?a-W:r-W,w=0,f=v;if(P(H)===l){var c=Math.min(Math.abs(H)/Math.abs(s),1),n=function(k){return 1-Math.pow(1-k,1/3)}(c)*y;E[0].earlyExit=n,f=v*(1-c)}else E[0].earlyExit=0,w+=H;var b=m(f,100),d=b.dist*l;t.options.rubberband&&(E.push({distance:d,duration:u(b.dur),easing:L}),E.push({distance:-d+w,duration:500,easing:L}))}t.animator.start(E)}else t.moveToIdx(z(V.abs),!0,{duration:500,easing:function(k){return 1+--k*k*k*k*k}})}function m(h,g){g===void 0&&(g=1e3);var v=147e-9+(h=Math.abs(h))/g;return{dist:Math.pow(h,2)/v,dur:h/v}}function T(){var h=t.track.details;h&&(a=h.min,r=h.max,p=h.minIdx,x=h.maxIdx)}function _(){t.animator.stop()}t.on("updated",T),t.on("optionsChanged",T),t.on("created",T),t.on("dragStarted",function(){o=!1,_(),i=e=t.track.details.abs}),t.on("dragChecked",function(){o=!0}),t.on("dragEnded",function(){var h=t.options.mode;h==="snap"&&function(){var g=t.track,v=t.track.details,V=v.position,E=P(M());(V>r||V<a)&&(E=0);var I=i+E;v.slides[g.absToRel(I)].portion===0&&(I-=E),i!==e&&(I=e),P(g.idxToDist(I,!0))!==E&&(I+=E),I=z(I);var s=g.idxToDist(I,!0);t.animator.start([{distance:s,duration:500,easing:function(y){return 1+--y*y*y*y*y}}])}(),h!=="free"&&h!=="free-snap"||C()}),t.on("dragged",function(){e=t.track.details.abs})}function Lt(t){var i,e,o,l,a,r,p,x,u,z,L,M,C,m,T,_,h,g,v=mt();function V(w){if(r&&x===w.id){var f=y(w);if(u){if(!s(w))return I(w);z=f,u=!1,t.emit("dragChecked")}if(_)return z=f;X(w);var c=function(b){if(h===-1/0&&g===1/0)return b;var d=t.track.details,k=d.length,S=d.position,A=it(b,h-S,g-S);if(k===0)return 0;if(!t.options.rubberband)return A;if(S<=g&&S>=h||S<h&&e>0||S>g&&e<0)return b;var O=(S<h?S-h:S-g)/k,R=l*k,G=Math.abs(O*R),J=Math.max(0,1-G/a*2);return J*J*b}(p(z-f)/l*o);e=P(c);var n=t.track.details.position;(n>h&&n<g||n===h&&e>0||n===g&&e<0)&&Y(w),L+=c,!M&&Math.abs(L*l)>5&&(M=!0),t.track.add(c),z=f,t.emit("dragged")}}function E(w){!r&&t.track.details&&t.track.details.length&&(L=0,r=!0,M=!1,u=!0,x=w.id,s(w),z=y(w),t.emit("dragStarted"))}function I(w){r&&x===w.idChanged&&(r=!1,t.emit("dragEnded"))}function s(w){var f=D(),c=f?w.y:w.x,n=f?w.x:w.y,b=C!==void 0&&m!==void 0&&Math.abs(m-n)<=Math.abs(C-c);return C=c,m=n,b}function y(w){return D()?w.y:w.x}function D(){return t.options.vertical}function W(){l=t.size,a=D()?window.innerHeight:window.innerWidth;var w=t.track.details;w&&(h=w.min,g=w.max)}function B(w){M&&(Y(w),X(w))}function H(){if(v.purge(),t.options.drag&&!t.options.disabled){var w;w=t.options.dragSpeed||1,p=typeof w=="function"?w:function(c){return c*w},o=t.options.rtl?-1:1,W(),i=t.container,function(){var c="data-keen-slider-clickable";K("[".concat(c,"]:not([").concat(c,"=false])"),i).map(function(n){v.add(n,"dragstart",Y),v.add(n,"mousedown",Y),v.add(n,"touchstart",Y)})}(),v.add(i,"dragstart",function(c){X(c)}),v.add(i,"click",B,{capture:!0}),v.input(i,"ksDragStart",E),v.input(i,"ksDrag",V),v.input(i,"ksDragEnd",I),v.input(i,"mousedown",E),v.input(i,"mousemove",V),v.input(i,"mouseleave",I),v.input(i,"mouseup",I),v.input(i,"touchstart",E,{passive:!0}),v.input(i,"touchmove",V,{passive:!1}),v.input(i,"touchend",I),v.input(i,"touchcancel",I),v.add(window,"wheel",function(c){r&&X(c)});var f="data-keen-slider-scrollable";K("[".concat(f,"]:not([").concat(f,"=false])"),t.container).map(function(c){return function(n){var b;v.input(n,"touchstart",function(d){b=y(d),_=!0,T=!0},{passive:!0}),v.input(n,"touchmove",function(d){var k=D(),S=k?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,A=b-y(d),O=k?n.scrollTop:n.scrollLeft,R=k&&n.style.overflowY==="scroll"||!k&&n.style.overflowX==="scroll";if(b=y(d),(A<0&&O>0||A>0&&O<S)&&T&&R)return _=!0;T=!1,X(d),_=!1}),v.input(n,"touchend",function(){_=!1})}(c)})}}t.on("updated",W),t.on("optionsChanged",H),t.on("created",H),t.on("destroyed",v.purge)}function Dt(t){var i,e,o=null;function l(C,m,T){t.animator.active?r(C,m,T):requestAnimationFrame(function(){return r(C,m,T)})}function a(){l(!1,!1,e)}function r(C,m,T){var _=0,h=t.size,g=t.track.details;if(g&&i){var v=g.slides;i.forEach(function(V,E){if(C)!o&&m&&x(V,null,T),u(V,null,T);else{if(!v[E])return;var I=v[E].size*h;!o&&m&&x(V,I,T),u(V,v[E].distance*h-_,T),_+=I}})}}function p(C){return t.options.renderMode==="performance"?Math.round(C):C}function x(C,m,T){var _=T?"height":"width";m!==null&&(m=p(m)+"px"),C.style["min-"+_]=m,C.style["max-"+_]=m}function u(C,m,T){if(m!==null){m=p(m);var _=T?m:0;m="translate3d(".concat(T?0:m,"px, ").concat(_,"px, 0)")}C.style.transform=m,C.style["-webkit-transform"]=m}function z(){i&&(r(!0,!0,e),i=null),t.on("detailsChanged",a,!0)}function L(){l(!1,!0,e)}function M(){z(),e=t.options.vertical,t.options.disabled||t.options.renderMode==="custom"||(o=q(t.options.slides,"perView",null)==="auto",t.on("detailsChanged",a),(i=t.slides).length&&L())}t.on("created",M),t.on("optionsChanged",M),t.on("beforeOptionsChanged",function(){z()}),t.on("updated",L),t.on("destroyed",z)}function Vt(t,i){return function(e){var o,l,a,r,p,x=mt();function u(s){var y;Z(e.container,"reverse",(y=e.container,window.getComputedStyle(y,null).getPropertyValue("direction")!=="rtl"||s?null:"")),Z(e.container,"v",e.options.vertical&&!s?"":null),Z(e.container,"disabled",e.options.disabled&&!s?"":null)}function z(){L()&&_()}function L(){var s=null;if(r.forEach(function(D){D.matches&&(s=D.__media)}),s===o)return!1;o||e.emit("beforeOptionsChanged"),o=s;var y=s?a.breakpoints[s]:a;return e.options=F(F({},a),y),u(),E(),I(),g(),!0}function M(s){var y=ft(s);return(e.options.vertical?y.height:y.width)/e.size||1}function C(){return e.options.trackConfig.length}function m(s){for(var y in o=!1,a=F(F({},i),s),x.purge(),l=e.size,r=[],a.breakpoints||[]){var D=window.matchMedia(y);D.__media=y,r.push(D),x.add(D,"change",z)}x.add(window,"orientationchange",V),x.add(window,"resize",v),L()}function T(s){e.animator.stop();var y=e.track.details;e.track.init(s??(y?y.abs:0))}function _(s){T(s),e.emit("optionsChanged")}function h(s,y){if(s)return m(s),void _(y);E(),I();var D=C();g(),C()!==D?_(y):T(y),e.emit("updated")}function g(){var s=e.options.slides;if(typeof s=="function")return e.options.trackConfig=s(e.size,e.slides);for(var y=e.slides,D=y.length,W=typeof s=="number"?s:q(s,"number",D,!0),B=[],H=q(s,"perView",1,!0),w=q(s,"spacing",0,!0)/e.size||0,f=H==="auto"?w:w/H,c=q(s,"origin","auto"),n=0,b=0;b<W;b++){var d=H==="auto"?M(y[b]):1/H-w+f,k=c==="center"?.5-d/2:c==="auto"?0:c;B.push({origin:k,size:d,spacing:w}),n+=d}if(n+=w*(W-1),c==="auto"&&!e.options.loop&&H!==1){var S=0;B.map(function(A){var O=n-S;return S+=A.size+w,O>=1||(A.origin=1-O-(n>1?0:1-n)),A})}e.options.trackConfig=B}function v(){E();var s=e.size;e.options.disabled||s===l||(l=s,h())}function V(){v(),setTimeout(v,500),setTimeout(v,2e3)}function E(){var s=ft(e.container);e.size=(e.options.vertical?s.height:s.width)||1}function I(){e.slides=K(e.options.selector,e.container)}e.container=(p=K(t,document)).length?p[0]:null,e.destroy=function(){x.purge(),e.emit("destroyed"),u(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=h,m(e.options)}}var Ot=function(t,i,e){try{return function(o,l){var a,r={};return a={emit:function(p){r[p]&&r[p].forEach(function(u){u(a)});var x=a.options&&a.options[p];x&&x(a)},moveToIdx:function(p,x,u){var z=a.track.idxToDist(p,x);if(z){var L=a.options.defaultAnimation;a.animator.start([{distance:z,duration:q(u||L,"duration",500),easing:q(u||L,"easing",function(M){return 1+--M*M*M*M*M})}])}},on:function(p,x,u){u===void 0&&(u=!1),r[p]||(r[p]=[]);var z=r[p].indexOf(x);z>-1?u&&delete r[p][z]:u||r[p].push(x)},options:o},function(){if(a.track=At(a),a.animator=St(a),l)for(var p=0,x=l;p<x.length;p++)(0,x[p])(a);a.track.init(a.options.initial||0),a.emit("created")}(),a}(i,vt([Vt(t,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),Dt,Lt,It],e||[],!0))}catch(o){console.error(o)}};const Nt={class:"relative"},qt={__name:"Base",props:{length:{type:Number,default:0},perView:{type:Number,default:3},spacing:{type:Number,default:16},arrowStyle:{type:String,default:"right"},size:{type:String,default:"xl"},fullscreen:{type:Boolean,default:!1}},setup(t){const i=bt(),e=t,o=ot(null),l=ot(!0),a=()=>{var r;if(o.value){const p=(r=o.value.container)==null?void 0:r.style;p&&(window.innerWidth<1024?p.width=window.innerWidth-80+"px":p.width="auto"),e.length===1&&(l.value=!1),e.length>0&&o.value.update()}};return xt(()=>[i.default(),e],()=>{a()},{deep:!0}),kt(()=>{const r={loop:!0,mode:"free-snap",slides:{perView:e.perView,spacing:e.spacing},breakpoints:e.fullscreen?{}:{"(max-width: 1024px)":{slides:{perView:2,spacing:16}},"(max-width: 640px)":{slides:{perView:1,spacing:8}}}};o.value&&(o.value=new Ot(o.value,r),a(),window.addEventListener("resize",()=>a()))}),yt(()=>{window.removeEventListener("resize",()=>a())}),(r,p)=>{const x=zt;return tt(),et("div",Nt,[Mt("div",{ref_key:"slider",ref:o,class:ut(["keen-slider mx-auto",{"h-full":t.fullscreen}])},[pt(r.$slots,"default")],2),Q(l)?(tt(),et("div",{key:0,dir:"ltr",class:ut({"flex gap-4 justify-end py-4":t.arrowStyle==="right","keen-arrow":t.arrowStyle==="center"})},[st(x,{class:"keen-arrow-left",icon:"i-ri-arrow-left-s-line",size:t.size,color:"white",square:"",variant:"solid",ui:{rounded:"rounded-full"},onClick:p[0]||(p[0]=u=>Q(o).prev())},null,8,["size"]),st(x,{icon:"i-ri-arrow-right-s-line",class:"keen-arrow-right",size:t.size,color:"white",square:"",variant:"solid",ui:{rounded:"rounded-full"},onClick:p[1]||(p[1]=u=>Q(o).next())},null,8,["size"])],2)):Tt("",!0)])}}};export{Ht as _,qt as a};
