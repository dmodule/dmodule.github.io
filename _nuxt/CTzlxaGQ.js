import{u,a as m}from"./DgP4j9Ly.js";import{u as b}from"./CB9MmmUK.js";import{D as g,c as f}from"./BnV61cnB.js";import{bP as x,bs as w,bq as v}from"./C-QD9eoP.js";import"./BfGWD8rQ.js";import"./Br4V6czL.js";import"./6bUBh_yt.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";import"./luMtsSGn.js";const k={name:"FinscChart",data(){return{customCSS:`
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
      `,tvWidget:null,datafeed:null}},methods:{getParameterByName(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const s=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(window.location.search);return s===null?"":decodeURIComponent(s[1].replace(/\+/g," "))},finscChart(t){var c;const e="https://app.finsc.vn/api/v1";this.datafeed=new g(e,5e3,{maxResponseLength:1e3,expectedOrder:"latestFirst"});const s=new Blob([this.customCSS],{type:"text/css"}),i=URL.createObjectURL(s),o=localStorage.getItem("tradingview.current_theme.name")!=="light",n=this.getParameterByName("theme")||(o?"dark":"light");this.tvWidget=window.tvWidget=new TradingView.widget({theme:n,load_last_chart:!0,autosize:!1,width:"100%",height:"100%",symbol:this.symbol,interval:"1D",timezone:"Asia/Bangkok",container:t,datafeed:this.datafeed,library_path:"/static/tv/charting_library/",locale:this.getParameterByName("lang")||"en",custom_css_url:i,enabled_features:["study_templates"],charts_storage_url:e,client_id:this.userId,user_id:this.userId,auto_save_delay:10,charts_storage_api_version:"1.1",disabled_features:["popup_hints"]}),this.tvWidget.headerReady().then(()=>{const a=this.tvWidget.createButton({useTradingViewStyle:!1,align:"right"});a.dataset.internalAllowKeyboardNavigation="true",a.id="theme-toggle",a.innerHTML=`<label for="theme-switch" id="theme-switch-label">Dark Mode</label>
        <div class="switcher">
          <input type="checkbox" id="theme-switch" tabindex="-1">
          <span class="thumb-wrapper">
            <span class="track"></span>
            <span class="thumb"></span>
          </span>
        </div>`,a.title="Toggle theme";const r=a.querySelector("#theme-switch");r.checked=n==="dark",this.tvWidget.changeTheme(r.checked?"dark":"light"),r.addEventListener("change",function(){this.tvWidget.changeTheme(this.checked?"dark":"light")});const d=a.querySelector("#theme-switch"),h=l=>{l.target.tabIndex=0},p=l=>{l.target.tabIndex=-1};d.addEventListener("roving-tabindex:main-element",h),d.addEventListener("roving-tabindex:secondary-element",p)}),this.tvWidget.onChartReady(()=>{this.tvWidget.activeChart().onSymbolChanged().subscribe(null,a=>{const r=a.ticker;this.setSymbol(r)})}),(c=window.frames[0])==null||c.focus()},updateSymbol(t){this.tvWidget.chart().setSymbol(t)}},watch:{symbol(t,e){e&&this.datafeed.unsubscribeBars(e)}},setup(){const{getProfile:t}=b(),{sub:e}=t(),i=e.split("|")[1],{setDataSI:o,setDataTP:n}=u(),c=m("symbolLocal","FPT");return{userId:i,symbol:c,setSymbol:r=>c.value=r,setDataSI:o,setDataTP:n}},mounted(){const t=this;f.on("message",(e,s)=>{const i=JSON.parse(s);switch(e.split("/")[3]){case"TP":t.setDataTP(i);break;case"SI":t.setDataSI(i);break;default:return}}),t.finscChart(t.$el)}},y={ref:"finsc_chart",class:"trader w-full h-full"};function _(t,e,s,i,o,n){return w(),v("div",y,null,512)}const R=x(k,[["render",_]]);export{R as default};
