import{bI as m,u as g,b5 as b,b4 as f,b2 as x}from"./DtJsQ1E2.js";import{u as w}from"./DPK0Xhdt.js";import"./IC2AHVb4.js";import"./BLVB0qGI.js";import"./B7LlgBWf.js";const{$auth:k}=g(),y={name:"FinscChart",data(){return{customCSS:`
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
      `}},methods:{getParameterByName(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const e=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(window.location.search);return e===null?"":decodeURIComponent(e[1].replace(/\+/g," "))},finscChart(t){const a="https://app.finsc.vn/api/v1",e=new Datafeeds.finscAPI(a,5e3,{maxResponseLength:1e3,expectedOrder:"latestFirst"}),s=new Blob([this.customCSS],{type:"text/css"}),n=URL.createObjectURL(s),c=localStorage.getItem("tradingview.current_theme.name")!=="light",h=this.getParameterByName("theme")||(c?"dark":"light"),r=window.tvWidget=new TradingView.widget({theme:h,load_last_chart:!0,autosize:!1,width:"100%",height:"100%",symbol:this.symbol,interval:"1D",timezone:"Asia/Bangkok",container:t,datafeed:e,library_path:"/static/tv/charting_library/",locale:this.getParameterByName("lang")||"en",custom_css_url:n,enabled_features:["study_templates"],charts_storage_url:a,client_id:this.userId,user_id:this.userId,auto_save_delay:10,charts_storage_api_version:"1.1",disabled_features:["popup_hints"]});r.headerReady().then(()=>{const o=r.createButton({useTradingViewStyle:!1,align:"right"});o.dataset.internalAllowKeyboardNavigation="true",o.id="theme-toggle",o.innerHTML=`<label for="theme-switch" id="theme-switch-label">Dark Mode</label>
        <div class="switcher">
          <input type="checkbox" id="theme-switch" tabindex="-1">
          <span class="thumb-wrapper">
            <span class="track"></span>
            <span class="thumb"></span>
          </span>
        </div>`,o.title="Toggle theme";const i=o.querySelector("#theme-switch");i.checked=h==="dark",r.changeTheme(i.checked?"dark":"light"),i.addEventListener("change",function(){r.changeTheme(this.checked?"dark":"light")});const d=o.querySelector("#theme-switch"),p=l=>{l.target.tabIndex=0},u=l=>{l.target.tabIndex=-1};d.addEventListener("roving-tabindex:main-element",p),d.addEventListener("roving-tabindex:secondary-element",u)}),r.onChartReady(()=>{r.activeChart().onSymbolChanged().subscribe(null,o=>{const i=o.ticker;this.setSymbol(i)})}),window.frames[0].focus()},getToken(){fetch("https://protrade.finsc.vn/api/sckt").then(t=>t.json()).then(t=>{const a=t.tt,e="1000049129",s=new Date().getTime(),n=Math.floor(s/1e3);localStorage.setItem("skdf",JSON.stringify({tt:a,id:e,time:n}))}).catch(t=>{console.log("Error fetching token:",t)})},checkAndFetchToken(){const t=JSON.parse(localStorage.getItem("skdf")),a=new Date().getTime()/1e3,e=new Date().setHours(8,0,0,0)/1e3;(!t||a>e&&t.time<e)&&this.getToken()}},setup(){const{getProfile:t}=k,{sub:a}=t(),s=a.split("|")[1],n=w(),c=b(()=>n.symbol);return{userId:s,symbol:c,setSymbol:n.setSymbol}},mounted(){const t=this;t.$nextTick(()=>{t.checkAndFetchToken(),t.finscChart(t.$el)})}},_={ref:"finsc_chart",class:"trader w-full h-full"};function v(t,a,e,s,n,c){return f(),x("div",_,null,512)}const I=m(y,[["render",v]]);export{I as default};
