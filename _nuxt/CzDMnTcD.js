import{u,a as m}from"./CbEqo9ud.js";import{u as b}from"./BC962ROv.js";import{D as g}from"./CZNo8540.js";import{bO as f,bs as x,bq as w}from"./Nng3t-Yx.js";import{c as v}from"./jPDSuWzA.js";import"./kWqY28R3.js";import"./Bq2qyzQR.js";import"./DxqHYnwt.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";import"./CUGPpDk2.js";const k={name:"FinscChart",data(){return{customCSS:`
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
      `,tvWidget:null,datafeed:null}},methods:{getParameterByName(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const i=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(window.location.search);return i===null?"":decodeURIComponent(i[1].replace(/\+/g," "))},finscChart(t){var o;const a="https://app.finsc.vn/api/v1";this.datafeed=new g(a,5e3,{maxResponseLength:1e3,expectedOrder:"latestFirst"}),v.on("message",(e,s)=>{const n=JSON.parse(s);switch(e.split("/")[3]){case"TP":this.setDataTP(n);break;case"SI":this.setDataSI(n);break;default:return}});const i=new Blob([this.customCSS],{type:"text/css"}),c=URL.createObjectURL(i),l=localStorage.getItem("tradingview.current_theme.name")!=="light",r=this.getParameterByName("theme")||(l?"dark":"light");this.tvWidget=window.tvWidget=new TradingView.widget({theme:r,load_last_chart:!0,autosize:!1,width:"100%",height:"100%",symbol:this.symbol,interval:"1D",timezone:"Asia/Bangkok",container:t,datafeed:this.datafeed,library_path:"/static/tv/charting_library/",locale:this.getParameterByName("lang")||"en",custom_css_url:c,enabled_features:["study_templates"],charts_storage_url:a,client_id:this.userId,user_id:this.userId,auto_save_delay:10,charts_storage_api_version:"1.1",disabled_features:["popup_hints"]}),this.tvWidget.headerReady().then(()=>{const e=this.tvWidget.createButton({useTradingViewStyle:!1,align:"right"});e.dataset.internalAllowKeyboardNavigation="true",e.id="theme-toggle",e.innerHTML=`<label for="theme-switch" id="theme-switch-label">Dark Mode</label>
        <div class="switcher">
          <input type="checkbox" id="theme-switch" tabindex="-1">
          <span class="thumb-wrapper">
            <span class="track"></span>
            <span class="thumb"></span>
          </span>
        </div>`,e.title="Toggle theme";const s=e.querySelector("#theme-switch");s.checked=r==="dark",this.tvWidget.changeTheme(s.checked?"dark":"light"),s.addEventListener("change",function(){this.tvWidget.changeTheme(this.checked?"dark":"light")});const n=e.querySelector("#theme-switch"),h=d=>{d.target.tabIndex=0},p=d=>{d.target.tabIndex=-1};n.addEventListener("roving-tabindex:main-element",h),n.addEventListener("roving-tabindex:secondary-element",p)}),this.tvWidget.onChartReady(()=>{this.tvWidget.activeChart().onSymbolChanged().subscribe(null,e=>{const s=e.ticker;this.setSymbol(s)})}),(o=window.frames[0])==null||o.focus()},updateSymbol(t){this.tvWidget.chart().setSymbol(t)}},watch:{symbol(t,a){a&&this.datafeed.unsubscribeBars(a)}},setup(){const{getProfile:t}=b(),{sub:a}=t(),c=a.split("|")[1],{setDataSI:l,setDataTP:r}=u(),o=m("symbolLocal","FPT");return{userId:c,symbol:o,setSymbol:s=>o.value=s,setDataSI:l,setDataTP:r}},mounted(){this.finscChart(this.$el)}},y={ref:"finsc_chart",class:"trader w-full h-full"};function _(t,a,i,c,l,r){return x(),w("div",y,null,512)}const L=f(k,[["render",_]]);export{L as default};
