import{u as a}from"./Ch1WCYms.js";import{r as s,bt as r,b4 as i,b2 as l,b3 as n,b9 as o}from"./DtJsQ1E2.js";import"./DeKvNKWT.js";import"./6bUBh_yt.js";const d={class:"tradingview-widget-container w-full h-full flex"},c=["id"],g={__name:"TradingviewBase",setup(u){const e=s(a()),t=()=>{e.value&&new TradingView.widget({container_id:e.value,autosize:!0,symbol:"NASDAQ:AAPL",interval:"D",timezone:"Etc/UTC",theme:"dark",style:"1",locale:"en",toolbar_bg:"#f1f3f6",enable_publishing:!1,withdateranges:!0,hide_side_toolbar:!1,allow_symbol_change:!0,details:!0,hotlist:!0,calendar:!0,news:["headlines"]})};return r({script:[{src:"https://s3.tradingview.com/tv.js",async:!0,defer:!0,onload:()=>{t()}}]}),(_,f)=>(i(),l("div",d,[n("div",{id:o(e),class:"trader flex-1"},null,8,c)]))}};export{g as default};