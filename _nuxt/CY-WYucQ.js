import{u as J}from"./C75rfUIj.js";import{D as Q}from"./d1xWRzEV.js";import{v as X,g as ee,p as S,q as te,l as C,w as ae,s as b,x as O,y as R,z as M,A,B as E,C as H}from"./DzHBrK_A.js";import{c as se,u as ie}from"./9Ez2jyDG.js";import{u as ne,a_ as m,r as _,bb as oe,ba as le,bU as re,b3 as N,bs as ce,bq as ue}from"./B5CNXMPg.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";import"./DL1K59ob.js";import"./D1XOgQPg.js";const we={__name:"TradingviewFinsc",props:{dataSI:{type:Object,default:()=>{}},dataTP:{type:Object,default:()=>{}}},emits:["update:symbol"],setup(q,{expose:F,emit:I}){const P=I;let s=q;const{on:u,off:f}=se(),{$colorMode:z}=ne(),w=m(()=>z.value),g=m(()=>X()),n=m(()=>ee()),i=_(null),v=_(null),y=_(null);let t=null;const{getProfile:K}=J(),{sub:j}=K(),U=j.split("|"),k=m(()=>U[1]),p=ie("symbolLocal","FPT"),V=e=>p.value=e,G=e=>{i.value.chart().setSymbol(e)},W=e=>{var o;v.value=new Q(S,5e3,{maxResponseLength:1e3,expectedOrder:"latestFirst"}),t=i.value=new TradingView.widget({theme:w.value,load_last_chart:!0,autosize:!1,width:"100%",height:"100%",symbol:p.value,interval:"1D",timezone:"Asia/Bangkok",container:e,datafeed:v.value,library_path:"/static/tv/charting_library/",locale:te("lang")||"en",custom_css_url:"/static/tv/themeTV.css",enabled_features:["study_templates"],charts_storage_url:S,client_id:k.value,user_id:k.value,auto_save_delay:10,charts_storage_api_version:"1.1",disabled_features:["popup_hints"],symbol_search_request_delay:200}),i.value.headerReady().then(()=>{var B;var l=t.createButton({align:"right"});l.setAttribute("title","Tắt/Mở kết nối giao dịch"),l.innerHTML='<div class="item-headbar"><label class="toggle"> <input class="toggle-checkbox" type="checkbox"> <div class="toggle-switch"></div> <span class="toggle-label">Giao dịch</span> </label></div>';const a=l.querySelector(".toggle-checkbox");var r=t.createButton({align:"right"});if(r.setAttribute("title","Kết nối tài khoản chứng khoán"),r.innerHTML='<div class="item-headbar"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M17.31 8.25h-4.5l1.66-5.07a.94.94 0 0 0-.9-1.18H7.93a.94.94 0 0 0-.93.81L5.76 12.2a.94.94 0 0 0 .93 1.06h4.63l-1.8 7.6a.94.94 0 0 0 1.73.68l6.87-11.87a.94.94 0 0 0-.8-1.41Z"></path></svg></div><div>Kết nối</div></div>',r.addEventListener("click",function(){C(a)}),t.onContextMenu(function(c,d){var h;return(h=n.value)!=null&&h.status?ae(t,s,d):[]}),a.addEventListener("change",function(){if(this.checked){const c=g.value&&g.value.login_time?g.value.login_time:0,h=new Date().getTime()-parseInt(c),Y=8*60*60*1e3;if(h<=Y)b({status:!0,updateTime:new Date().getTime()});else{const Z={title:"Luồng kết nối tới CTCK đã hết hạn",body:"Bấm Yes để tiến hành kết nối lại!",callback:$=>{$&&C(a)}};b({status:!1,updateTime:new Date().getTime()}),a.checked=!1,t.showConfirmDialog(Z)}}else{const c={title:"Đóng liên kết giao dịch",body:"Bạn có chắc không?",callback:d=>{d?b({status:!1,updateTime:new Date().getTime()}):a.checked=!0}};t.showConfirmDialog(c)}}),(B=n.value)!=null&&B.status){a.checked=!0;const c=new Event("change");a.dispatchEvent(c)}}),i.value.onChartReady(()=>{i.value.activeChart().onSymbolChanged().subscribe(null,l=>{const a=l.ticker;P("update:symbol",a),V(a);const r=document.querySelector(".order-sym");r&&(r.textContent=a)}),i.value.activeChart().onDataLoaded().subscribe(null,function(l){var a;(a=n.value)!=null&&a.status&&(O(t,s,A,!1),R(t,s,E,!1),M(t,s,H,!1))})}),(o=window.frames[0])==null||o.focus()},T=()=>{var e;(e=n.value)!=null&&e.status&&M(t,s,H)},L=()=>{var e;(e=n.value)!=null&&e.status&&R(t,s,E)},D=()=>{var e;(e=n.value)!=null&&e.status&&O(t,s,A)},x=e=>{t&&t.showNoticeDialog(e)};return oe(()=>{W(y.value)}),le(()=>{u("eRefreshDeal",T),u("eRefreshLimitOrder",L),u("eRefreshStopOrder",D),u("eNoticeDialog",x)}),re(()=>{u("eRefreshDeal",T),f("eRefreshLimitOrder",L),f("eRefreshStopOrder",D),f("eNoticeDialog",x)}),N(p,(e,o)=>{o&&v.value.unsubscribeBars(o)}),N(w,e=>{i.value.changeTheme(e)}),F({updateSymbol:G}),(e,o)=>(ce(),ue("div",{ref_key:"finsc_chart",ref:y,class:"trader w-full h-full"},null,512))}};export{we as default};
