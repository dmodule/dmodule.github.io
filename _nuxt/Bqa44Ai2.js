import{u as m}from"./Caw4B9yQ.js";import{u as b}from"./B_SvKxMb.js";import{D as g,c as f}from"./CyFVF89h.js";import{bN as x,bq as w,bp as v,bn as k}from"./DJaf_P2z.js";import"./CiXQBoTi.js";import"./BdMQyVqi.js";import"./6bUBh_yt.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";import"./ZS5rF5Ms.js";const y={name:"FinscChart",data(){return{customCSS:`
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
      `,tvWidget:null}},methods:{getParameterByName(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const s=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(window.location.search);return s===null?"":decodeURIComponent(s[1].replace(/\+/g," "))},finscChart(t){var d;const i="https://app.finsc.vn/api/v1",s=new g(i,5e3,{maxResponseLength:1e3,expectedOrder:"latestFirst"});f.on("message",(e,a)=>{const r=JSON.parse(a);switch(e.split("/")[3]){case"TP":this.setDataTP(r);break;case"SI":this.setDataSI(r);break;default:return}});const o=new Blob([this.customCSS],{type:"text/css"}),n=URL.createObjectURL(o),c=localStorage.getItem("tradingview.current_theme.name")!=="light",l=this.getParameterByName("theme")||(c?"dark":"light");this.tvWidget=window.tvWidget=new TradingView.widget({theme:l,load_last_chart:!0,autosize:!1,width:"100%",height:"100%",symbol:this.symbol,interval:"1D",timezone:"Asia/Bangkok",container:t,datafeed:s,library_path:"/static/tv/charting_library/",locale:this.getParameterByName("lang")||"en",custom_css_url:n,enabled_features:["study_templates"],charts_storage_url:i,client_id:this.userId,user_id:this.userId,auto_save_delay:10,charts_storage_api_version:"1.1",disabled_features:["popup_hints"]}),this.tvWidget.headerReady().then(()=>{const e=this.tvWidget.createButton({useTradingViewStyle:!1,align:"right"});e.dataset.internalAllowKeyboardNavigation="true",e.id="theme-toggle",e.innerHTML=`<label for="theme-switch" id="theme-switch-label">Dark Mode</label>
        <div class="switcher">
          <input type="checkbox" id="theme-switch" tabindex="-1">
          <span class="thumb-wrapper">
            <span class="track"></span>
            <span class="thumb"></span>
          </span>
        </div>`,e.title="Toggle theme";const a=e.querySelector("#theme-switch");a.checked=l==="dark",this.tvWidget.changeTheme(a.checked?"dark":"light"),a.addEventListener("change",function(){this.tvWidget.changeTheme(this.checked?"dark":"light")});const r=e.querySelector("#theme-switch"),p=h=>{h.target.tabIndex=0},u=h=>{h.target.tabIndex=-1};r.addEventListener("roving-tabindex:main-element",p),r.addEventListener("roving-tabindex:secondary-element",u)}),this.tvWidget.onChartReady(()=>{this.tvWidget.activeChart().onSymbolChanged().subscribe(null,e=>{const a=e.ticker;this.setSymbol(a)})}),(d=window.frames[0])==null||d.focus()},updateSymbol(t){this.tvWidget.chart().setSymbol(t)}},setup(){const{getProfile:t}=b(),{sub:i}=t(),o=i.split("|")[1],{symbol:n,setSymbol:c,setDataSI:l,setDataTP:d}=m(),e=w(()=>n);return{userId:o,symbol:e,setSymbol:c,setDataSI:l,setDataTP:d}},mounted(){const t=this;t.finscChart(t.$el)}},_={ref:"finsc_chart",class:"trader w-full h-full"};function S(t,i,s,o,n,c){return v(),k("div",_,null,512)}const L=x(y,[["render",S]]);export{L as default};
