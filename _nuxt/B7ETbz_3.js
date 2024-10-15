import{u as m}from"./dktUVwjC.js";import{u as g}from"./B3shVmer.js";import{w as b}from"./NVEJA4Ar.js";import{bJ as f,b5 as w,b4 as x,b2 as k}from"./PQ9VTHH8.js";import"./B0u2p8wj.js";import"./6bUBh_yt.js";import"./BLVB0qGI.js";import"./B7LlgBWf.js";const v={name:"FinscChart",data(){return{customCSS:`
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
      `,tvWidget:null}},methods:{getParameterByName(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const e=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(window.location.search);return e===null?"":decodeURIComponent(e[1].replace(/\+/g," "))},finscChart(t){var d;const i="https://app.finsc.vn/api/v1",e=new Datafeeds.finscAPI(i,5e3,{maxResponseLength:1e3,expectedOrder:"latestFirst"}),s=new Blob([this.customCSS],{type:"text/css"}),o=URL.createObjectURL(s),n=localStorage.getItem("tradingview.current_theme.name")!=="light",l=this.getParameterByName("theme")||(n?"dark":"light");this.tvWidget=window.tvWidget=new TradingView.widget({theme:l,load_last_chart:!0,autosize:!1,width:"100%",height:"100%",symbol:this.symbol,interval:"1D",timezone:"Asia/Bangkok",container:t,datafeed:e,library_path:"/static/tv/charting_library/",locale:this.getParameterByName("lang")||"en",custom_css_url:o,enabled_features:["study_templates"],charts_storage_url:i,client_id:this.userId,user_id:this.userId,auto_save_delay:10,charts_storage_api_version:"1.1",disabled_features:["popup_hints"]}),this.tvWidget.headerReady().then(()=>{const a=this.tvWidget.createButton({useTradingViewStyle:!1,align:"right"});a.dataset.internalAllowKeyboardNavigation="true",a.id="theme-toggle",a.innerHTML=`<label for="theme-switch" id="theme-switch-label">Dark Mode</label>
        <div class="switcher">
          <input type="checkbox" id="theme-switch" tabindex="-1">
          <span class="thumb-wrapper">
            <span class="track"></span>
            <span class="thumb"></span>
          </span>
        </div>`,a.title="Toggle theme";const r=a.querySelector("#theme-switch");r.checked=l==="dark",this.tvWidget.changeTheme(r.checked?"dark":"light"),r.addEventListener("change",function(){this.tvWidget.changeTheme(this.checked?"dark":"light")});const h=a.querySelector("#theme-switch"),p=c=>{c.target.tabIndex=0},u=c=>{c.target.tabIndex=-1};h.addEventListener("roving-tabindex:main-element",p),h.addEventListener("roving-tabindex:secondary-element",u)}),this.tvWidget.onChartReady(()=>{this.tvWidget.activeChart().onSymbolChanged().subscribe(null,a=>{const r=a.ticker;this.setSymbol(r)})}),(d=window.frames[0])==null||d.focus()},getToken(){fetch("https://protrade.finsc.vn/api/sckt").then(t=>t.json()).then(t=>{const i=t.tt,e="1000049129",s=new Date().getTime(),o=Math.floor(s/1e3);localStorage.setItem("skdf",JSON.stringify({tt:i,id:e,time:o}))}).catch(t=>{console.log("Error fetching token:",t)})},checkAndFetchToken(){const t=JSON.parse(localStorage.getItem("skdf")),i=new Date().getTime()/1e3,e=new Date().setHours(8,0,0,0)/1e3;(!t||i>e&&t.time<e)&&this.getToken()},updateSymbol(t){this.tvWidget.chart().setSymbol(t)}},setup(){const{getProfile:t}=g(),{sub:i}=t(),s=i.split("|")[1],o=m(),n=w(()=>o.symbol);return{userId:s,symbol:n,setSymbol:o.setSymbol}},mounted(){const t=this;b(window.Datafeeds,()=>{t.checkAndFetchToken(),t.finscChart(t.$el)})}},y={ref:"finsc_chart",class:"trader w-full h-full"};function _(t,i,e,s,o,n){return x(),k("div",y,null,512)}const R=f(v,[["render",_]]);export{R as default};
