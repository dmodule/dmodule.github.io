import{L as n}from"./AppLocalization.8c4c27f8.js";import{n as r,u as o,a as i}from"./index.2b0e6085.js";import"./vendor.952058dc.js";var m=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"sm:flex h-screen"},[t("div",{staticClass:"hidden sm:flex w-full sm:w-1/2 h-full bg-gray-200 items-center justify-center pa-12"},[t("v-img",{attrs:{src:"/img/icons/logo.png",width:"360","max-width":"400"}})],1),t("div",{staticClass:"flex w-full sm:w-1/2 h-full bg-white items-center justify-center pa-12"},[t("v-form",{staticClass:"w-full max-w-md"},[t("h1",{staticClass:"text-3xl text-center mb-8"},[s._v(" "+s._s(s.$t("common.welcomeToJoin"))+" DGS! ")]),t("v-text-field",{attrs:{"append-icon":"fas fa-user",type:"email",name:"email",label:s.$t("common.email"),required:"",outlined:"",autocomplete:"username"},model:{value:s.model.email,callback:function(a){s.$set(s.model,"email",a)},expression:"model.email"}}),t("v-text-field",{attrs:{"append-icon":s.show?"fas fa-eye":"fas fa-eye-slash",type:s.show?"text":"password",name:"password",label:s.$t("common.password"),required:"",outlined:"",autocomplete:"current-password","hide-details":"auto"},on:{"click:append":function(a){s.show=!s.show}},model:{value:s.model.password,callback:function(a){s.$set(s.model,"password",a)},expression:"model.password"}}),t("div",{staticClass:"flex justify-between"},[t("v-btn",{staticClass:"px-2",attrs:{color:"primary",to:"#",text:"",small:""}},[s._v(" "+s._s(s.$t("common.forgotPassword"))+" ? ")]),t("v-btn",{staticClass:"px-2",attrs:{color:"primary",to:"/signup",text:"",small:""}},[s._v(" "+s._s(s.$t("common.signup"))+" ? ")])],1),t("div",{staticClass:"flex justify-center mt-6"},[t("v-btn",{staticClass:"px-6",attrs:{large:"",color:"primary",loading:s.loading},on:{click:s.login}},[s._v(" "+s._s(s.$t("common.signin"))+" ")])],1),t("div",{staticClass:"flex items-center justify-center mt-6"},[t("span",{staticClass:"mr-4"},[s._v(s._s(s.$t("common.connectWith")))]),t("v-btn",{staticClass:"mr-2",attrs:{icon:""}},[t("v-icon",{attrs:{color:"red"}},[s._v("fa-brands fa-google")])],1),t("v-btn",{attrs:{icon:""}},[t("v-icon",{attrs:{color:"blue",size:"22"}},[s._v("fa-brands fa-facebook-f")])],1)],1)],1)],1)])},c=[];const d={name:"SingIn",components:{Localization:n},data:()=>({loading:!1,show:!1,model:{email:o.email,password:o.password}}),methods:{async login(){await this.$store.dispatch("LoginByEmail",{email:this.model.email,password:this.model.password}),await this.$router.push(this.$route.query.redirect||"/")},setUserToLogin(s){s?(this.model.email=o.email,this.model.password=o.password):(this.model.email=i.email,this.model.password=i.password)}}},l={};var p=r(d,m,c,!1,f,null,null,null);function f(s){for(let e in l)this[e]=l[e]}var h=function(){return p.exports}();export{h as default};
