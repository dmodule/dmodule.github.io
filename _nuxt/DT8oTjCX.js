import{u}from"./CvsHt8qF.js";import{u as m}from"./BdTHawna.js";import{D as b}from"./CZNo8540.js";import{bO as g,a_ as f,bs as x,bq as w}from"./Nng3t-Yx.js";import{c as v}from"./jPDSuWzA.js";import"./kWqY28R3.js";import"./Bq2qyzQR.js";import"./DxqHYnwt.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";import"./CUGPpDk2.js";const k={name:"FinscChart",data(){return{customCSS:`
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
      `,tvWidget:null,datafeed:null}},methods:{getParameterByName(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const s=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return s===null?"":decodeURIComponent(s[1].replace(/\+/g," "))},finscChart(e){var l;const a="https://app.finsc.vn/api/v1";this.datafeed=new b(a,5e3,{maxResponseLength:1e3,expectedOrder:"latestFirst"}),v.on("message",(t,i)=>{const o=JSON.parse(i);switch(t.split("/")[3]){case"TP":this.setDataTP(o);break;case"SI":this.setDataSI(o);break;default:return}});const s=new Blob([this.customCSS],{type:"text/css"}),n=URL.createObjectURL(s),c=localStorage.getItem("tradingview.current_theme.name")!=="light",r=this.getParameterByName("theme")||(c?"dark":"light");this.tvWidget=window.tvWidget=new TradingView.widget({theme:r,load_last_chart:!0,autosize:!1,width:"100%",height:"100%",symbol:this.symbol,interval:"1D",timezone:"Asia/Bangkok",container:e,datafeed:this.datafeed,library_path:"/static/tv/charting_library/",locale:this.getParameterByName("lang")||"en",custom_css_url:n,enabled_features:["study_templates"],charts_storage_url:a,client_id:this.userId,user_id:this.userId,auto_save_delay:10,charts_storage_api_version:"1.1",disabled_features:["popup_hints"]}),this.tvWidget.headerReady().then(()=>{const t=this.tvWidget.createButton({useTradingViewStyle:!1,align:"right"});t.dataset.internalAllowKeyboardNavigation="true",t.id="theme-toggle",t.innerHTML=`<label for="theme-switch" id="theme-switch-label">Dark Mode</label>
        <div class="switcher">
          <input type="checkbox" id="theme-switch" tabindex="-1">
          <span class="thumb-wrapper">
            <span class="track"></span>
            <span class="thumb"></span>
          </span>
        </div>`,t.title="Toggle theme";const i=t.querySelector("#theme-switch");i.checked=r==="dark",this.tvWidget.changeTheme(i.checked?"dark":"light"),i.addEventListener("change",function(){this.tvWidget.changeTheme(this.checked?"dark":"light")});const o=t.querySelector("#theme-switch"),h=d=>{d.target.tabIndex=0},p=d=>{d.target.tabIndex=-1};o.addEventListener("roving-tabindex:main-element",h),o.addEventListener("roving-tabindex:secondary-element",p)}),this.tvWidget.onChartReady(()=>{this.tvWidget.activeChart().onSymbolChanged().subscribe(null,t=>{const i=t.ticker;this.setSymbol(i)})}),(l=window.frames[0])==null||l.focus()},updateSymbol(e){this.tvWidget.chart().setSymbol(e)}},watch:{symbol(e,a){a&&this.datafeed.unsubscribeBars(a)}},setup(){const{getProfile:e}=m(),{sub:a}=e(),n=a.split("|")[1],{symbol:c,setSymbol:r,setDataSI:l,setDataTP:t}=u(),i=f(()=>c);return{userId:n,symbol:i,setSymbol:r,setDataSI:l,setDataTP:t}},mounted(){this.finscChart(this.$el)}},y={ref:"finsc_chart",class:"trader w-full h-full"};function _(e,a,s,n,c,r){return x(),w("div",y,null,512)}const L=g(k,[["render",_]]);export{L as default};
