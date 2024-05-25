import{o as m}from"./n4Xe9ecP.js";import{_ as g,o as b,c as f}from"./CdTp3k8j.js";const w={name:"FinscChart",data(){return{customCSS:`
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
      `}},methods:{getParameterByName(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const e=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(window.location.search);return e===null?"":decodeURIComponent(e[1].replace(/\+/g," "))},finscChart(t){const a="https://protrade.finsc.vn/api/datafeedv2",e=new Datafeeds.finscAPI(a,5e3,{maxResponseLength:1e3,expectedOrder:"latestFirst"}),r=new Blob([this.customCSS],{type:"text/css"}),s=URL.createObjectURL(r),l=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,h=this.getParameterByName("theme")||(l?"dark":"light"),i=window.tvWidget=new TradingView.widget({load_last_chart:!0,fullscreen:!0,autosize:!1,width:"100%",height:"100%",symbol:"FPT",interval:"1D",timezone:"Asia/Bangkok",container:t,datafeed:e,library_path:"/static/tv/charting_library/",locale:this.getParameterByName("lang")||"en",custom_css_url:s,enabled_features:["study_templates"],charts_storage_url:a,client_id:"finsc_client_id",user_id:"finsc_user_id",auto_save_delay:10,charts_storage_api_version:"1.1",disabled_features:["popup_hints"]});i.headerReady().then(()=>{const n=i.createButton({useTradingViewStyle:!1,align:"right"});n.dataset.internalAllowKeyboardNavigation="true",n.id="theme-toggle",n.innerHTML=`<label for="theme-switch" id="theme-switch-label">Dark Mode</label>
        <div class="switcher">
          <input type="checkbox" id="theme-switch" tabindex="-1">
          <span class="thumb-wrapper">
            <span class="track"></span>
            <span class="thumb"></span>
          </span>
        </div>`,n.title="Toggle theme";const c=n.querySelector("#theme-switch");c.checked=h==="light",c.addEventListener("change",function(){const o=this.checked?"dark":"light";i.changeTheme(o,{disableUndo:!0})});const d=n.querySelector("#theme-switch"),p=o=>{o.target.tabIndex=0},u=o=>{o.target.tabIndex=-1};d.addEventListener("roving-tabindex:main-element",p),d.addEventListener("roving-tabindex:secondary-element",u)}),i.onChartReady(()=>{i.activeChart().onSymbolChanged().subscribe(null,n=>{const c=n.ticker;console.log(5555,c)})}),window.frames[0].focus()},getToken(){fetch("https://protrade.finsc.vn/api/sckt").then(t=>t.json()).then(t=>{const a=t.tt,e="1000049129",r=new Date().getTime(),s=Math.floor(r/1e3);localStorage.setItem("skdf",JSON.stringify({tt:a,id:e,time:s}))}).catch(t=>{console.log("Error fetching token:",t)})},checkAndFetchToken(){const t=JSON.parse(localStorage.getItem("skdf")),a=new Date().getTime()/1e3,e=new Date().setHours(8,0,0,0)/1e3;(!t||a>e&&t.time<e)&&this.getToken()}},mounted(){m(["/static/tv/charting_library/charting_library.standalone.js","/static/tv/dist/bundle.js"],"text/javascript",()=>{console.log(2332),this.checkAndFetchToken(),this.finscChart(this.$el)})}},x={ref:"finsc_chart",class:"trader w-full"};function k(t,a,e,r,s,l){return b(),f("div",x,null,512)}const y=g(w,[["render",k]]);export{y as default};
