!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).Datafeeds={})}(this,(function(t){"use strict";function e(t){return void 0===t?"":"string"==typeof t?t:t.message}class s{constructor(t,e,s){this.i=t,this.u="https://services.entrade.com.vn/chart-api/v2/ohlcs",this.m="https://histdatafeed.vps.com.vn/tradingview",this.p=e,this._=s,this.N=0}getBars(t,s,i){const o={1:1,60:"1H","1D":"1D",W:"1W"}[s]||s;let n={symbol:t.ticker||"",resolution:o,from:i.from,to:i.to};let r=["VNINDEX","VN30","HNX","HNX30"].includes(n.symbol)?"history":["VN30F1M","VN30F2M","VN30F1Q","VN30F2Q"].includes(n.symbol)?"derivative":"stock",l="history"===r?this.m:this.u;return t.ticker.includes("#")&&(l=this.i,r="history"),"history"===r&&(n.resolution=s),void 0!==i.countBack&&(n.countback=i.countBack),void 0!==t.currency_code&&(n.currencyCode=t.currency_code),void 0!==t.unit_id&&(n.unitId=t.unit_id),new Promise((async(t,s)=>{try{const e=await this.p.sendRequest(l,r,n),s=this.F(e,n);this._&&await this.S(s,n),t(s)}catch(t){if(t instanceof Error||"string"==typeof t){s(e(t))}}}))}async S(t,s){let i=t.bars.length;try{for(;this._&&this._.maxResponseLength>0&&this._.maxResponseLength===i&&s.from<s.to;){s.countback&&(s.countback=s.countback-i),"earliestFirst"===this._.expectedOrder?s.from=Math.round(t.bars[t.bars.length-1].time/1e3):s.to=Math.round(t.bars[0].time/1e3);const e=await this.p.sendRequest(urlX,type,s),o=this.F(e);i=o.bars.length,"earliestFirst"===this._.expectedOrder?(o.bars[0].time===t.bars[t.bars.length-1].time&&o.bars.shift(),t.bars.push(...o.bars)):(o.bars[o.bars.length-1].time===t.bars[0].time&&o.bars.pop(),t.bars.unshift(...o.bars))}}catch(t){if(t instanceof Error||"string"==typeof t){e(t)}}}F(t,e){const s=[],i={noData:!1};if("no_data"===t.s||0===t.t.length||null===t.t.length)i.noData=!0,i.nextTime=this.N<=4&&(t.nextTime?t.nextTime:function(t){const e=new Date(t);return e.setDate(e.getDate()+1),e.getTime()}(e.to)),this.N+=1;else{const e=void 0!==t.v,i=void 0!==t.o;for(let o=0;o<t.t.length;++o){const n={time:1e3*t.t[o],close:parseFloat(t.c[o]),open:parseFloat(t.c[o]),high:parseFloat(t.c[o]),low:parseFloat(t.c[o])};i&&(n.open=parseFloat(t.o[o]),n.high=parseFloat(t.h[o]),n.low=parseFloat(t.l[o])),e&&(n.volume=parseFloat(t.v[o])),s.push(n)}}return{bars:s,meta:i}}}const i=new Map,o=`finsc-${Math.floor(5e3*Math.random())}`,n=JSON.parse(localStorage.getItem("skdf")),r={keepalive:120,clientId:o,protocolId:"MQTT",protocolVersion:5,username:n?n.id:null,password:n?n.tt:null,path:"/wss"},l=new Map,a=mqtt.connect("wss://datafeed-lts.dnse.com.vn",r);function c(t){return["VNINDEX","VN30","HNX","HNX30"].includes(t)?"index":["VN30F1M","VN30F2M","VN30F1Q","VN30F2Q"].includes(t)?"derivative":"stock"}a.on("error",(function(t){a.end()})),a.on("reconnect",(function(){})),a.on("connect",(function(){})),a.on("close",(function(){})),a.on("message",(function(t,e){const s=JSON.parse(e);let{time:o,open:n,high:r,low:l,close:a,volume:u,symbol:h,resolution:d}=s;const m=`${c(h)}~${h}~${{undefined:1,HOUR1:"1H",DAY:"1D",W:"1W"}[d]||d}`,p=i.get(m);if(!p)return;let v={time:1e3*o,open:n,high:r,low:l,close:a,volume:u};p.lastDailyBar=v,p.handlers.forEach((t=>t.callback(v)))}));class u{constructor(t){this.$=t}subscribeBars(t,e,s,o,n){const[r,u,h]=o.split("_"),d={60:"1H",DAY:"1D",W:"1W"}[h]||h;!function(t,e,s,o,n,r){const l=c(t.ticker),u=`${l}~${t.ticker}~${e}`,h={id:o,callback:s};let d=i.get(u);if(d)return void d.handlers.push(h);d={listenerGuid:o,resolution:e,lastDailyBar:r,handlers:[h]},i.set(u,d);const m=`plaintext/quotes/${l}/OHLC/${e}/${t.ticker}`;a.subscribe(m)}(t,d,s,o=`${r}_#_${d}`,0,l.get(t.symbol))}unsubscribeBars(t){const[e,s,o]=t.split("_");!function(t){i.forEach(((e,s)=>{const o=e.handlers.findIndex((e=>e.id===t));if(-1!==o){e.handlers.splice(o,1);const t=s.split("~");if(0===e.handlers.length){const e=`plaintext/quotes/${t[0]}/OHLC/${t[2]}/${t[1]}`;a.unsubscribe(e),i.delete(s)}}}))}(t=`${e}_#_${{60:"1H",DAY:"1D",W:"1W"}[o]||o}`)}}class h{constructor(t,e){this.k={},this.D=0,this.$=t,setInterval(this.M.bind(this),e)}subscribeBars(t,e,s,i){this.k.hasOwnProperty(i)||(this.k[i]={lastBarTime:null,listener:s,resolution:e,symbolInfo:t},t.name)}unsubscribeBars(t){delete this.k[t]}M(){if(!(this.D>0)){this.D=0;for(const t in this.k)this.D+=1,this.H(t).then((()=>{this.D-=1,this.D})).catch((t=>{this.D-=1,e(t),this.D}))}}H(t){const e=this.k[t],s=parseInt((Date.now()/1e3).toString()),i=s-function(t,e){let s=0;s="D"===t||"1D"===t?e:"M"===t||"1M"===t?31*e:"W"===t||"1W"===t?7*e:e*parseInt(t)/1440;return 24*s*60*60}(e.resolution,10);return this.$.getBars(e.symbolInfo,e.resolution,{from:i,to:s,countBack:2,firstDataRequest:!1}).then((e=>{this.O(t,e)}))}O(t,e){if(!this.k.hasOwnProperty(t))return;const s=e.bars;if(0===s.length)return;const i=s[s.length-1],o=this.k[t];if(null!==o.lastBarTime&&i.time<o.lastBarTime)return;if(null!==o.lastBarTime&&i.time>o.lastBarTime){if(s.length<2)throw new Error("Not enough bars in history for proper pulse update. Need at least 2.");const t=s[s.length-2];o.listener(t)}o.lastBarTime=i.time,o.listener(i)}}function d(t,e,s){const i=t[e];return Array.isArray(i)?i[s]:i}const m={supports_search:!1,supports_group_request:!0,supports_marks:!1,supports_timescale_marks:!1,supports_time:!1,exchanges:[{value:"",name:"All Exchanges",desc:""},{value:"HNX",name:"HNX",desc:"Sàn HNX"},{value:"HOSE",name:"HOSE",desc:"Sàn HOSE"},{value:"UPCOM",name:"UPCOM",desc:"Sàn UPCOM"},{value:"OTHER",name:"OTHER",desc:"Ngành"}],symbols_types:[{name:"All types",value:""},{name:"Stock",value:"stock"},{name:"Index",value:"index"}],supported_resolutions:["1","3","5","15","30","60","120","D","W","M"],intraday_multipliers:["1","60"]};class p{constructor(t,e,i=1e4,o){this.I=m,this.V=null,this.T=t,this.p=e,this.$=new s(t,this.p,o),this.B=new h(this.$,i),this.C=new u(this.$),this.R=[],this.U()}onReady(t){setTimeout((()=>t(this.I)))}getMarks(t,s,i,o,n){if(!this.I.supports_marks)return;const r={symbol:t.ticker||"",from:s,to:i,resolution:n};this.X("marks",r).then((t=>{if(!Array.isArray(t)){const e=[];for(let s=0;s<t.id.length;++s)e.push({id:d(t,"id",s),time:d(t,"time",s),color:d(t,"color",s),text:d(t,"text",s),label:d(t,"label",s),labelFontColor:d(t,"labelFontColor",s),minSize:d(t,"minSize",s),borderWidth:d(t,"borderWidth",s),hoveredBorderWidth:d(t,"hoveredBorderWidth",s),imageUrl:d(t,"imageUrl",s),showLabelWhenImageLoaded:d(t,"showLabelWhenImageLoaded",s)});t=e}o(t)})).catch((t=>{e(t),o([])}))}getTimescaleMarks(t,s,i,o,n){if(!this.I.supports_timescale_marks)return;const r={symbol:t.ticker||"",from:s,to:i,resolution:n};this.X("timescale_marks",r).then((t=>{if(!Array.isArray(t)){const e=[];for(let s=0;s<t.id.length;++s)e.push({id:d(t,"id",s),time:d(t,"time",s),color:d(t,"color",s),label:d(t,"label",s),tooltip:d(t,"tooltip",s),imageUrl:d(t,"imageUrl",s),showLabelWhenImageLoaded:d(t,"showLabelWhenImageLoaded",s)});t=e}o(t)})).catch((t=>{e(t),o([])}))}getServerTime(t){this.I.supports_time&&this.X("time").then((e=>{const s=parseInt(e);isNaN(s)||t(s)})).catch((t=>{e(t)}))}async U(){const t=await fetch("./dist/symbol.json"),e=await t.json();this.R=e}async searchSymbols(t,s,i,o){if(this.I.supports_search){const n={limit:30,query:t.toUpperCase(),type:i,exchange:s};this.X("search",n).then((t=>{if(void 0!==t.s)return t.errmsg,void o([]);o(t)})).catch((t=>{e(t),o([])}))}else{const e=this.R.filter((e=>-1!==e.symbol.toLowerCase().indexOf(t.toLowerCase())));o(e)}}async resolveSymbol(t,s,i,o){const n=o&&o.currencyCode,r=o&&o.unitId;function l(t){setTimeout((()=>s(t)))}if(this.I.supports_group_request){const e=t.split("#")[0],s=this.R.find((({symbol:t})=>t===e));if(!s)return void i("cannot resolve symbol");l({name:t,base_name:[s.exchange+":"+t],listed_exchange:s.exchange,exchange:s.exchange,ticker:t,symbol:t,description:s.description,type:s.type,session:"0900-1130,1300-1500",timezone:"Asia/Bangkok",minmov:1,minmov2:0,pricescale:100,pointvalue:1,has_daily:!0,has_intraday:!0,has_weekly_and_monthly:!1,supported_resolutions:this.I.supported_resolutions,intraday_multipliers:this.I.intraday_multipliers,volume_precision:2,data_status:"streaming"})}else{const s={symbol:t};void 0!==n&&(s.currencyCode=n),void 0!==r&&(s.unitId=r),this.X("symbols",s).then((t=>{var e,s,o,n,r,a,c,u,h,d,m,p,v,f,y,_,b,g,N,w,F,S,$,k,D,M;if(void 0!==t.s)i("unknown_symbol");else{const i=t.name,H=null!==(e=t.listed_exchange)&&void 0!==e?e:t["exchange-listed"],W=null!==(s=t.exchange)&&void 0!==s?s:t["exchange-traded"],x={...t,name:i,base_name:[H+":"+i],listed_exchange:H,exchange:W,ticker:t.ticker,currency_code:null!==(o=t.currency_code)&&void 0!==o?o:t["currency-code"],original_currency_code:null!==(n=t.original_currency_code)&&void 0!==n?n:t["original-currency-code"],unit_id:null!==(r=t.unit_id)&&void 0!==r?r:t["unit-id"],original_unit_id:null!==(a=t.original_unit_id)&&void 0!==a?a:t["original-unit-id"],unit_conversion_types:null!==(c=t.unit_conversion_types)&&void 0!==c?c:t["unit-conversion-types"],has_intraday:null!==(h=null!==(u=t.has_intraday)&&void 0!==u?u:t["has-intraday"])&&void 0!==h&&h,visible_plots_set:null!==(d=t.visible_plots_set)&&void 0!==d?d:t["visible-plots-set"],minmov:null!==(p=null!==(m=t.minmovement)&&void 0!==m?m:t.minmov)&&void 0!==p?p:0,minmove2:null!==(v=t.minmovement2)&&void 0!==v?v:t.minmove2,session:null!==(f=t.session)&&void 0!==f?f:t["session-regular"],session_holidays:null!==(y=t.session_holidays)&&void 0!==y?y:t["session-holidays"],supported_resolutions:null!==(g=null!==(b=null!==(_=t.supported_resolutions)&&void 0!==_?_:t["supported-resolutions"])&&void 0!==b?b:this.I.supported_resolutions)&&void 0!==g?g:[],has_daily:null===(w=null!==(N=t.has_daily)&&void 0!==N?N:t["has-daily"])||void 0===w||w,intraday_multipliers:null!==(S=null!==(F=t.intraday_multipliers)&&void 0!==F?F:t["intraday-multipliers"])&&void 0!==S?S:["1","5","15","30","60"],has_weekly_and_monthly:null!==($=t.has_weekly_and_monthly)&&void 0!==$?$:t["has-weekly-and-monthly"],has_empty_bars:null!==(k=t.has_empty_bars)&&void 0!==k?k:t["has-empty-bars"],volume_precision:null!==(D=t.volume_precision)&&void 0!==D?D:t["volume-precision"],format:null!==(M=t.format)&&void 0!==M?M:"price"};x.supported_resolutions=["1","3","5","15","30","45","60","120","240","D","W","M"],x.intraday_multipliers=["1","60"],l(x)}})).catch((t=>{e(t),i("unknown_symbol")}))}}async getBars(t,e,s,i,o){this.$.getBars(t,e,s).then((t=>{i(t.bars,t.meta)})).catch(o)}subscribeBars(t,e,s,i,o){"index"===this.q(t.ticker)?this.B.subscribeBars(t,e,s,i):this.C.subscribeBars(t,e,s,i)}unsubscribeBars(t){this.B.unsubscribeBars(t),this.C.unsubscribeBars(t)}A(){return this.X("config").catch((t=>(e(t),null)))}q(t){return["VNINDEX","VN30","HNX","HNX30"].includes(t)?"index":["VN30F1M","VN30F2M","VN30F1Q","VN30F2Q"].includes(t)?"derivative":"stock"}X(t,e){return this.p.sendRequest(this.T,t,e)}L(t,e){return this.p.sendRequestPost(this.T,t,e)}P(t){if(this.I=t,void 0===t.exchanges&&(t.exchanges=[]),!t.supports_search&&!t.supports_group_request)throw new Error("Unsupported datafeed configuration. Must either support search, or support group request");!t.supports_group_request&&t.supports_search||(this.V=new SymbolsStorage(this.T,t.supported_resolutions||[],this.p)),JSON.stringify(t)}}class v{constructor(t){t&&(this.J=t)}sendRequest(t,e,s){if(void 0!==s){const t=Object.keys(s);0!==t.length&&(e+="?"),e+=t.map((t=>`${encodeURIComponent(t)}=${encodeURIComponent(s[t].toString())}`)).join("&")}const i={credentials:"same-origin"};return void 0!==this.J&&(i.headers=this.J),fetch(`${t}/${e}`,i).then((t=>t.text())).then((t=>JSON.parse(t)))}sendRequestPost(t,e,s){if(void 0!==s){const t=Object.keys(s);0!==t.length&&(e+="?"),e+=t.map((t=>`${encodeURIComponent(t)}=${encodeURIComponent(s[t].toString())}`)).join("&")}const i={method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json",...this.J||{}},body:JSON.stringify(s)};return fetch(`${t}/${e}`,i).then((t=>t.text())).then((t=>JSON.parse(t)))}}t.finscAPI=class extends p{constructor(t,e=1e4,s){super(t,new v,e,s)}}}));