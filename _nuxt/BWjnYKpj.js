import{bn as d,bD as l}from"./D_WdqbUw.js";import{i as A}from"./BLVB0qGI.js";import{u as t}from"./SICMh7Yq.js";class m{constructor(){this.auth0=new A.WebAuth({domain:t().AUTH_DOMAIN,clientID:t().AUTH_CLIENT_ID,redirectUri:t().AUTH_REDIRECT_URI,responseType:"token id_token",scope:"openid profile email",audience:"https://finsc-dev-auth.jp.auth0.com/api/v2/",grant_type:"client_credentials"})}verify(){return new Promise((o,n)=>{this.auth0.parseHash((r,i)=>{if(r)return n(r);if(!i||!i.idToken)return n({error:"No token found"});const{accessToken:c,idTokenPayload:a}=i;localStorage&&localStorage.setItem("tkgg",c),o({token:c,profile:a})})})}redirectSignIn(){return this.auth0.authorize()}clearAuth(){localStorage&&localStorage.clear(),this.auth0.logout({returnTo:"",clientID:t().AUTH_CLIENT_ID})}}const E="Bearer",k=d("auth",()=>{const u=new m,o=l("goTo"),n=l(t().COOKIE_NAME,{maxAge:t().COOKIE_EXPIRES,sameSite:!0}),r=l(t().COOKIE_NAME+"_info",{maxAge:t().COOKIE_EXPIRES,sameSite:!0,default:()=>{}});async function i(){return u.redirectSignIn()}async function c(){a(null),s(null),u.clearAuth()}function a(e){e?n.value=E+" "+e:n.value=null}function s(e){r.value=e??{}}function f(){return!!n.value}function h(){return r.value}async function I(){const{token:e,profile:p}=await u.verify();if(a(e),s(p),e)return o.value}function g(e){o.value=e}return{login:i,clearAuth:c,loggedIn:f,getProfile:h,verifyAcc:I,token:n,setToken:a,goTo:o,setGoto:g}});export{k as u};
