import{r as d,ba as l,u as o,o as c,c as u}from"./Bp7PwLku.js";const p={__name:"Tradingview",setup(f){const t=d(0),r=d(null);function n(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a=new RegExp("[\\?&]"+e+"=([^&#]*)"),s=a.exec(location.search);return s===null?"":decodeURIComponent(s[1].replace(/\+/g," "))}function i(){var e="https://demo-feed-data.tradingview.com",a=n("dataUrl");a!==""&&(e=a.startsWith("https://")?a:`https://${a}`),new window.TradingView.widget({fullscreen:!1,symbol:"AAPL",interval:"1D",container:r.value,datafeed:new window.Datafeeds.UDFCompatibleDatafeed(e,void 0,{maxResponseLength:1e3,expectedOrder:"latestFirst"}),library_path:"https://dmodule.github.io/trandingview/charting_library/",locale:"en",disabled_features:["use_localstorage_for_settings"],enabled_features:["study_templates"],charts_storage_url:"https://saveload.tradingview.com",charts_storage_api_version:"1.1",client_id:"tradingview.com",user_id:"public_user_id",theme:"dark"})}return l(()=>{(t.value===2||window.TradingView&&window.Datafeeds)&&i()}),o({script:[{src:"https://dmodule.github.io/trandingview/datafeeds/udf/dist/bundle.js",onload:()=>{t.value++}},{src:"https://dmodule.github.io/trandingview/charting_library/charting_library.standalone.js",onload:()=>{t.value++}}]}),(e,a)=>(c(),u("div",{ref_key:"trader",ref:r,class:"trader w-full"},null,512))}};export{p as default};
