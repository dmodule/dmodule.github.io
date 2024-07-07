import{_ as m,j as b,C as g,o as f,c as w,H as x}from"./DlcRhjNe.js";import{r as k}from"./DgQDiXJJ.js";import{u as y}from"./ClRI-nme.js";const{$auth:v}=b(),_={name:"FinscChart",data(){return{loaded:!1,customCSS:`
        #documentation-toolbar-button {
          all: unset;
          position: relative;
          color: #FFF;
          font-size: 14px;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: 0.15408px;
          padding: 5px 12px;
          border-radius: 80px;
          background: #2962FF;
          cursor: pointer;
        }
        #documentation-toolbar-button:hover {
          background: #1E53E5;
        }
        #documentation-toolbar-button:active {
          background: #1948CC;
        }
        #theme-toggle {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
        }
        .switcher {
          display: inline-block;
          position: relative;
          flex: 0 0 auto;
          width: 38px;
          height: 20px;
          vertical-align: middle;
          z-index: 0;
          -webkit-tap-highlight-color: transparent;
        }
        .switcher input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 1;
          cursor: default;
        }
        .switcher .thumb-wrapper {
          display: block;
          border-radius: 20px;
          position: relative;
          z-index: 0;
          width: 100%;
          height: 100%;
        }
        .switcher .track {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background-color: #a3a6af;
        }
        #theme-switch:checked + .thumb-wrapper .track {
          background-color: #2962ff;
        }
        .switcher .thumb {
          display: block;
          width: 14px;
          height: 14px;
          border-radius: 14px;
          transition-duration: 250ms;
          transition-property: transform;
          transition-timing-function: ease-out;
          transform: translate(3px, 3px);
          background: #ffffff;
        }
        [dir=rtl] .switcher .thumb {
          transform: translate(-3px, 3px);
        }
        .switcher input:checked + .thumb-wrapper .thumb {
          transform: translate(21px, 3px);
        }
        [dir=rtl] .switcher input:checked + .thumb-wrapper .thumb {
          transform: translate(-21px, 3px);
        }
        #documentation-toolbar-button:focus-visible:before,
        .switcher:focus-within:before {
          content: '';
          display: block;
          position: absolute;
          top: -2px;
          right: -2px;
          bottom: -2px;
          left: -2px;
          border-radius: 16px;
          outline: #2962FF solid 2px;
        }
      `}},methods:{getParameterByName(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const a=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(window.location.search);return a===null?"":decodeURIComponent(a[1].replace(/\+/g," "))},finscChart(t){const e="https://app.finsc.vn/api/v1",a=new Datafeeds.finscAPI(e,5e3,{maxResponseLength:1e3,expectedOrder:"latestFirst"}),n=new Blob([this.customCSS],{type:"text/css"}),o=URL.createObjectURL(n),c=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,h=this.getParameterByName("theme")||(c?"dark":"light"),r=window.tvWidget=new TradingView.widget({load_last_chart:!0,autosize:!1,width:"100%",height:"100%",symbol:this.symbol,interval:"1D",timezone:"Asia/Bangkok",container:t,datafeed:a,library_path:"/static/tv/charting_library/",locale:this.getParameterByName("lang")||"en",custom_css_url:o,enabled_features:["study_templates"],charts_storage_url:e,client_id:this.userId,user_id:this.userId,auto_save_delay:10,charts_storage_api_version:"1.1",disabled_features:["popup_hints"]});r.headerReady().then(()=>{const s=r.createButton({useTradingViewStyle:!1,align:"right"});s.dataset.internalAllowKeyboardNavigation="true",s.id="theme-toggle",s.innerHTML=`<label for="theme-switch" id="theme-switch-label">Dark Mode</label>
        <div class="switcher">
          <input type="checkbox" id="theme-switch" tabindex="-1">
          <span class="thumb-wrapper">
            <span class="track"></span>
            <span class="thumb"></span>
          </span>
        </div>`,s.title="Toggle theme";const l=s.querySelector("#theme-switch");l.checked=h==="light",l.addEventListener("change",function(){const i=this.checked?"dark":"light";r.changeTheme(i,{disableUndo:!0})});const d=s.querySelector("#theme-switch"),p=i=>{i.target.tabIndex=0},u=i=>{i.target.tabIndex=-1};d.addEventListener("roving-tabindex:main-element",p),d.addEventListener("roving-tabindex:secondary-element",u)}),r.onChartReady(()=>{r.activeChart().onSymbolChanged().subscribe(null,s=>{const l=s.ticker;this.setSymbol(l)})}),window.frames[0].focus()},getToken(){fetch("https://protrade.finsc.vn/api/sckt").then(t=>t.json()).then(t=>{const e=t.tt,a="1000049129",n=new Date().getTime(),o=Math.floor(n/1e3);localStorage.setItem("skdf",JSON.stringify({tt:e,id:a,time:o}))}).catch(t=>{console.log("Error fetching token:",t)})},checkAndFetchToken(){const t=JSON.parse(localStorage.getItem("skdf")),e=new Date().getTime()/1e3,a=new Date().setHours(8,0,0,0)/1e3;(!t||e>a&&t.time<a)&&this.getToken()}},setup(){const{getUser:t}=v,{sub:e}=t(),n=e.split("|")[1],o=y(),c=g(()=>o.symbol);return{userId:n,symbol:c,setSymbol:o.setSymbol}},mounted(){const t=this;t.loaded=!1;const e=7;k(["/static/tv/charting_library/charting_library.standalone.js?v="+e,"/static/tv/dist/bundle.js?v="+e],"text/javascript",()=>{t.loaded=!0,t.$nextTick(()=>{t.checkAndFetchToken(),t.finscChart(t.$el)})})}},S={key:0,ref:"finsc_chart",class:"trader w-full"};function T(t,e,a,n,o,c){return o.loaded?(f(),w("div",S,null,512)):x("",!0)}const B=m(_,[["render",T]]);export{B as default};
