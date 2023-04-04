import{m as a,i as g}from"./vendor.952058dc.js";import{n as o}from"./index.2b0e6085.js";import{L as y}from"./AppLocalization.8c4c27f8.js";const $=(t,n)=>{for(const e of n)if(!t.includes(e))return!1;return!0};var x=function(){var t=this,n=t.$createElement,e=t._self._c||n;return!t.hidden&&t.isPermissions(t.permissions)?e("v-list-item",{attrs:{to:t.path}},[e("v-list-item-icon",[e("v-icon",[t._v(t._s(t.icon))])],1),e("v-list-item-title",[t._v(t._s(t.text))])],1):t._e()},S=[];const w={props:{text:{type:String,value:""},icon:{type:String,value:""},path:{type:String,default:void 0},hidden:{type:Boolean,default:!1},permissions:{type:Array,default:()=>[]}},computed:{roles(){return this.$store.getters.roles}},methods:{isPermissions(t){return!t||t.length===0||this.roles.some(e=>e==="SUPER_ADMIN")?!0:$(this.roles,t)}}},i={};var T=o(w,x,S,!1,L,null,null,null);function L(t){for(let n in i)this[n]=i[n]}var b=function(){return T.exports}(),k=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isPermissions(t.item.hidden,t.item.permissions)?e("v-list-group",{attrs:{"prepend-icon":t.subGroup?null:t.item.icon,"sub-group":t.subGroup},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-title",[t._v(t._s(t.item.text))])]},proxy:!0}],null,!1,751783372)},[t._l(t.item.children,function(r,s){return[t.isGroupItem(r)?e("list-group",{key:s,attrs:{item:r,subGroup:""}}):t.isPermissions(r.hidden,r.permissions)?e("list-item",{key:s,attrs:{text:r.text,icon:r.icon,path:r.path}}):t._e()]})],2):t._e()},C=[];const E={name:"list-group",components:{ListItem:b},props:{item:{type:Object,default:()=>({text:"",icon:"",children:[]})},subGroup:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},permissions:{type:Array,default:()=>[]}},computed:{roles(){return this.$store.getters.roles}},methods:{isGroupItem(t){return t.children&&t.children.length>0},isPermissions(t,n){return t?!1:!n||n.length===0||this.roles.some(r=>r==="SUPER_ADMIN")?!0:$(this.roles,n)}}},l={};var P=o(E,k,C,!1,R,null,null,null);function R(t){for(let n in l)this[n]=l[n]}var M=function(){return P.exports}(),N=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-navigation-drawer",{attrs:{id:"side-nav",app:"",floating:"",clipped:t.navbarClipped,width:t.navbarWidth,value:t.navbarShow},on:{input:t.stateNavbarShow},scopedSlots:t._u([t.navbarClipped?null:{key:"prepend",fn:function(){return[e("img",{staticClass:"mx-auto",attrs:{src:t.assetsUrl("img/icons/logo-short.png"),width:"140px","max-width":"140px"}})]},proxy:!0},{key:"append",fn:function(){return[e("div",{staticClass:"text-center"},[e("v-btn",{staticClass:"rounded-0",attrs:{"x-large":"",block:"",color:"primary"},on:{click:t.logout}},[e("v-icon",{staticClass:"mr-2",attrs:{size:"20"}},[t._v("fal fa-power-off")]),t._v(" "+t._s(t.$t("common.logout"))+" ")],1)],1)]},proxy:!0}],null,!0)},[e("v-list",[t._l(t.navRoutes,function(r,s){return[t.isGroupItem(r)?e("list-group",{key:s,attrs:{item:r,hidden:r.hidden,permissions:r.permissions}}):e("list-item",{key:s,attrs:{text:r.text,icon:r.icon,hidden:r.hidden,permissions:r.permissions,path:r.path}})]})],2)],1)},F=[];const j={components:{ListItem:b,ListGroup:M},computed:{...a(["permissionRoutes","navbarDense","navbarShow","navbarLogo","navbarWidth","navbarClipped","toolbarDense"]),navRoutes(){const t=[];for(const n of this.permissionRoutes)n.hidden||(n.children&&n.children.length===1?t.push(n.children[0]):t.push(n));return t}},methods:{isGroupItem(t){return t.children&&t.children.length>0},stateNavbarShow(t){this.$store.dispatch("NavbarState",{state:t})},logout(){this.$store.dispatch("LogOut"),this.$router.push("/login")}}},c={};var A=o(j,N,F,!1,D,null,null,null);function D(t){for(let n in c)this[n]=c[n]}var B=function(){return A.exports}(),G=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex items-center"},[e("div",[t._t("default")],2),e("v-breadcrumbs",{staticClass:"hidden-sm-and-down",attrs:{items:t.levelList,divider:"/"},scopedSlots:t._u([{key:"item",fn:function(r){return[e("a",{on:{click:function(s){return s.preventDefault(),t.handleLink(r.item)}}},[t._v(" "+t._s(t.generateTitle(r.item.meta.title))+" ")])]}}])})],1)},U=[];const z={name:"AppBreadcrumbs",data:()=>({levelList:null}),watch:{$route(){this.getBreadcrumb()}},created(){this.getBreadcrumb()},methods:{generateTitle(t){return this.$te(`${t}`)?this.$t(`${t}`):t},getBreadcrumb(){let t=this.$route.matched.filter(e=>e.name);const n=t[0];n&&n.name.trim().toLocaleLowerCase()!=="dashboard"&&(t=[{path:"/dashboard",meta:{title:"route.dashboard"}}].concat(t)),this.levelList=t.filter(e=>e.meta&&e.meta.title&&e.meta.breadcrumb!==!1)},pathCompile(t){const{params:n}=this.$route;return this.assetsUrl(t+"/"+n)},handleLink(t){console.groupCollapsed("handleLink");const{redirect:n,path:e}=t;if(console.log(`redirect=${n}, path=${e}`),n){console.log("redirect"),this.$router.push(n),console.groupEnd();return}this.$router.push(this.pathCompile(e)),console.groupEnd()}}},u={};var O=o(z,G,U,!1,W,null,null,null);function W(t){for(let n in u)this[n]=u[n]}var H=function(){return O.exports}(),I=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-menu",{attrs:{"offset-y":"",origin:"center center","nudge-bottom":10,transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(r){var s=r.on;return[e("v-btn",t._g({attrs:{icon:"",large:"",text:""}},s),[e("v-avatar",{attrs:{size:"36px"}},[t.avatar?e("img",{attrs:{src:t.avatar,alt:"name"}}):e("v-icon",{staticClass:"blue--text",attrs:{"x-large":""}},[t._v(" fas fa-user ")])],1)],1)]}}])},[e("v-list",{staticClass:"pa-0"},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[t.avatar?e("img",{attrs:{src:t.avatar,alt:"name"}}):e("v-icon",{staticClass:"blue--text",attrs:{"x-large":""}},[t._v(" fas fa-user ")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(t.name))]),e("v-list-item-subtitle",[t._v(t._s(t.user))])],1)],1)],1),e("v-divider"),t._l(t.menuitems,function(r,s){return e("v-list-item",{key:s,attrs:{to:r.href?null:{name:r.name},href:r.href,ripple:"ripple",disabled:r.disabled,target:r.target,rel:"noopener"},on:{click:r.click}},[r.icon?e("v-list-item-action",[e("v-icon",[t._v(t._s(r.icon))])],1):t._e(),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(t.$t(r.title)))])],1)],1)})],2)],1)},K=[];const q={name:"AppProfile",data(){return{menuitems:[{icon:"fas fa-user",href:"#",title:"common.profile",click:t=>{console.log(t)}},{icon:"fas fa-settings",href:"#",title:"common.settings",click:()=>{console.log("this.toggleSettingsPanel()"),this.toggleSettingsPanel()}},{icon:"fas fa-exit-to-app",href:"#",title:"common.logout",click:()=>{this.logout()}}]}},computed:{...a(["user","name","avatar","status"])},methods:{logout(){this.$store.dispatch("LogOut"),this.$router.push("/landing")},toggleSettingsPanel(){console.log("this.toggleSettingsPanel()111"),this.$vuetify.goTo(0),this.$store.dispatch("SettingsPanelToggle")}}},_={};var Y=o(q,I,K,!1,J,null,null,null);function J(t){for(let n in _)this[n]=_[n]}var Q=function(){return Y.exports}(),V=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app-bar",{attrs:{id:"navbar",app:"",flat:"",fixed:"","clipped-left":"",dense:t.toolbarDense,height:t.logoHeight}},[e("div",{style:{width:(t.navbarShow||t.navbarClipped?t.navbarWidth:0)+"px",height:t.logoHeight+"px",background:"#fff"},attrs:{id:"toolbar-logo"}},[t.navbarClipped?e("div",{staticClass:"d-flex items-center justify-between w-full px-4"},[e("v-img",{attrs:{src:t.assetsUrl("img/icons/logo-short.png"),"max-width":"160","max-height":"70"}}),e("v-btn",{attrs:{icon:""},on:{click:function(r){return r.stopPropagation(),t.toggleNavbar.apply(null,arguments)}}},[e("inline-svg",{attrs:{src:"/svg/menu.svg",width:"24",height:"24",fill:"#fff"}})],1)],1):t._e()]),e("Breadcrumbs",[t.navbarClipped?t._e():e("v-btn",{staticClass:"ml-4",attrs:{icon:""},on:{click:function(r){return r.stopPropagation(),t.toggleNavbar.apply(null,arguments)}}},[e("inline-svg",{staticClass:"text-white",attrs:{src:"/svg/menu.svg",width:"24",height:"24",fill:"#fff"}})],1)],1),e("v-spacer"),e("div",{staticClass:"pr-6"},[e("Localization"),e("AppProfile")],1)],1)},X=[];const Z={name:"TheLayoutToolbar",components:{Breadcrumbs:H,Localization:y,AppProfile:Q},computed:{...a(["toolbarDense","navbarWidth","navbarClipped","navbarShow"]),logoHeight(){return 70}},methods:{toggleNavbar(){this.$store.dispatch("NavbarToggle")}}},v={};var tt=o(Z,V,X,!1,et,null,null,null);function et(t){for(let n in v)this[n]=v[n]}var nt=function(){return tt.exports}(),rt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-main",[e("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[e("router-view")],1)],1)},st=[];const ot={name:"TheLayoutContent"},p={};var at=o(ot,rt,st,!1,it,null,null,null);function it(t){for(let n in p)this[n]=p[n]}var lt=function(){return at.exports}(),ct=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-fab-transition",[e("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toTop}},[e("v-icon",[t._v("far fa-chevron-up")])],1)],1)},ut=[];const _t={name:"TheLayoutToTopFab",data:()=>({fab:!1}),methods:{onScroll(){if(typeof window=="undefined")return;const t=window.pageYOffset||document.documentElement.offsetTop||0;this.fab=t>300},toTop(){this.$vuetify.goTo(0)}}},d={};var vt=o(_t,ct,ut,!1,pt,null,null,null);function pt(t){for(let n in d)this[n]=d[n]}var dt=function(){return vt.exports}(),ht=function(){var t=this,n=t.$createElement;return t._self._c,t._e()},ft=[];const mt={name:"TheLayoutFooter",computed:{...a(["footerShow"])}},h={};var gt=o(mt,ht,ft,!1,$t,null,null,null);function $t(t){for(let n in h)this[n]=h[n]}var bt=function(){return gt.exports}(),yt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-overlay",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticStyle:{"z-index":"999"},attrs:{value:!0,color:"#fff",opacity:"0.5"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:"86"}})],1)},xt=[];const St={name:"TheLoader",data:()=>({dialog:!0}),computed:{...g({loading:t=>t.loading})},methods:{onClick(t){this.$emit("click",t)}}},f={};var wt=o(St,yt,xt,!1,Tt,null,null,null);function Tt(t){for(let n in f)this[n]=f[n]}var Lt=function(){return wt.exports}(),kt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"v-application--wrap"},[e("the-layout-drawer"),e("the-layout-toolbar"),e("the-layout-content"),e("the-layout-to-top-fab"),e("the-layout-footer"),e("TheLoader")],1)},Ct=[];const Et={name:"TheLayout",components:{TheLayoutDrawer:B,TheLayoutToolbar:nt,TheLayoutContent:lt,TheLayoutToTopFab:dt,TheLayoutFooter:bt,TheLoader:Lt},computed:{...g({loading:t=>t.loading.loading})},watch:{"$route.params":{handler(){document.querySelector("html").classList.remove("overflow-y-hidden"),this.$store.commit("SET_TOTAL_NUMBER",0)}}},mounted(){(function(t){var n=t.pushState;t.pushState=function(e){return typeof t.onpushstate=="function"&&t.onpushstate({state:e}),n.apply(t,arguments)}})(window.history)}},m={};var Pt=o(Et,kt,Ct,!1,Rt,null,null,null);function Rt(t){for(let n in m)this[n]=m[n]}var jt=function(){return Pt.exports}();export{jt as default};
