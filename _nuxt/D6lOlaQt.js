import{_ as V}from"./DYPwQHam.js";import{_ as B,a as v}from"./M8o1WVAl.js";import{i as b}from"./DHFOe2EN.js";import{C as i,o as a,c as n,A as u,w as k,I as h,Q as g,q as r,b as C,n as x,s as N}from"./Bp7PwLku.js";const P={class:"mx-auto max-w-screen-xl mt-8 md:mt-12 lg:mt-16"},M={__name:"Media",props:{items:{},itemTxt:{type:String,default:"title"},tiktok:{type:Boolean,default:!1},shorts:{type:Boolean,default:!1},carousel:{type:Boolean,default:!1},spacing:{type:Number,default:0},perView:{type:Number,default:1},maxPerView:{type:Number,default:0}},setup(s){const e=s,_=i(()=>{if(e.perView>1)return 16}),l=i(()=>{var o;const t=((o=e.items)==null?void 0:o.val)||[];return e.maxPerView?e.maxPerView:t.length===2?2:t.length>2?3:e.perView}),d=i(()=>{var o;const t=(o=e.items)==null?void 0:o.val;return t&&Array.isArray(t)?t:b(t)?[t]:[]}),f=i(()=>e.tiktok?{maxWidth:325,width:325,height:723}:e.shorts?{maxWidth:325,width:325,height:580}:{});return(t,o)=>{const p=V,w=B,y=v;return a(),n("div",P,[e.carousel?(a(),u(y,{key:0,"per-view":r(l),spacing:r(_)},{default:k(()=>[(a(!0),n(h,null,g(r(d),(c,m)=>(a(),u(w,{key:m},{default:k(()=>[C(p,x({src:c[s.itemTxt],tiktok:s.tiktok,shorts:s.shorts},r(f)),null,16,["src","tiktok","shorts"])]),_:2},1024))),128))]),_:1},8,["per-view","spacing"])):(a(),n("div",{key:1,class:N(["grid grid-cols-1 gap-4 md:gap-8",r(l)===2?"md:grid-cols-2":r(l)>2?"md:grid-cols-3":""])},[(a(!0),n(h,null,g(r(d),(c,m)=>(a(),u(p,x({key:m,src:c[s.itemTxt],tiktok:s.tiktok,shorts:s.shorts},r(f)),null,16,["src","tiktok","shorts"]))),128))],2))])}}};export{M as _};
