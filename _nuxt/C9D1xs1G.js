import{bK as f,cp as u,bs as l,bH as n,by as c,bO as y,bJ as m}from"./sI-xKr0f.js";import{d as h}from"./w-2Z8A5n.js";import"./BGe5Wj0I.js";import"./DxqHYnwt.js";import"./UyBJQOB6.js";import"./BLVB0qGI.js";import"./DdDBkiWh.js";const g={props:{type:{type:String,default:"line"},colors:{type:Array,default:()=>["#84cc16","#22c55e","#10b981","#14b8a6","#06b6d4","#0ea5e9","#3b82f6","#6366f1","#8b5cf6","#a855f7","#c026d3","#db2777","#e11d48","#ef4444","#f97316","#f59e0b","#eab308"]},dark:{type:Boolean,default:!1},categories:{type:Array,default:()=>[]},series:{type:Array,default:()=>[]},height:{default:"400px"},distributed:{type:Boolean,default:!1},xaxis:{type:String,default:"category"},yaxis:{type:Array,default:()=>[]},horizontal:{type:Boolean,default:!1},stacked:{type:Boolean,default:!1},stackType:{type:String,default:"normal"},dataLabels:{type:Boolean,default:!1},fillSolid:{type:Boolean,default:!1},monochrome:{type:Boolean,default:!1},stroke:{type:String,default:"smooth"},strokeWidth:{type:Number,default:0},strokeDashes:{type:Number,default:0},markers:{type:Number,default:0},donutTotal:{type:String,default:""},polarRings:{type:Number,default:0},polarSpokes:{type:Number,default:0},polygon:{type:Boolean,default:!1},radialTotal:{type:String,default:""},gaugeType:{type:String,default:""},strokeRound:{type:Boolean,default:!1},download:{type:Boolean,default:!1},animation:{type:Boolean,default:!0}},data(){return{refresh:!0,options:this.customOptions()}},methods:{customOptions(){const e={theme:{mode:this.$colorMode.value},grid:{borderColor:"rgba(120, 120, 120, 0.3)"},stroke:{curve:this.stroke,width:this.strokeWidth,dashArray:this.strokeDashes},colors:this.colors,fill:{type:this.fillSolid?"solid":"gradient",opacity:.8},markers:{size:this.markers},dataLabels:{enabled:this.dataLabels},legend:{show:!0},tooltip:{shared:!0,intersect:!1,inverseOrder:!0,followCursor:!1},chart:{width:"100%",height:this.height,type:this.type,toolbar:{tools:{download:this.download}}}};if(this.monochrome&&(e.theme.monochrome={enabled:!0,color:this.colors[0],shadeTo:"light",shadeIntensity:.6}),["pie","donut","polarArea"].includes(this.type))e.labels=this.categories,this.type==="polarArea"&&(e.plotOptions={polarArea:{rings:{strokeWidth:this.polarRings},spokes:{strokeWidth:this.polarSpokes}}},e.yaxis={show:this.polarRings}),this.type==="donut"&&(e.plotOptions={pie:{donut:this.donutTotal?{labels:{show:!0,total:{showAlways:!0,show:!0,label:this.donutTotal}}}:{}}});else if(this.type==="radialBar"){const i={startAngle:-135,endAngle:135,dataLabels:{name:{offsetY:120},value:{offsetY:76,fontSize:"24px",color:void 0,formatter:function(t){return t+"%"}}}},s={startAngle:-90,endAngle:90,dataLabels:{name:{show:!1},value:{offsetY:-2,fontSize:"24px"}}},r=this.gaugeType?this.gaugeType==="semi"?s:i:{};e.labels=this.categories,e.chart={sparkline:{enabled:this.gaugeType==="semi"}},e.stroke={lineCap:this.strokeRound?"round":"butt",dashArray:this.strokeDashes},e.plotOptions={radialBar:{hollow:{size:this.series.length===1?"70%":"50%"},dataLabels:{value:{fontSize:"18px"},total:{show:!!this.radialTotal,label:this.radialTotal,fontSize:"18px",formatter:function(t){var o;return(((o=t.globals)==null?void 0:o.series)||[]).reduce((a,p)=>a+p,0)}}},...r}}}else e.xaxis={type:this.xaxis,categories:this.categories},this.yaxis&&this.yaxis.length>0&&(e.yaxis=this.yaxis),this.horizontal&&(e.plotOptions={bar:{horizontal:this.horizontal,distributed:this.distributed,colors:{ranges:[{from:-100,to:-46,color:"#F15B46"},{from:-45,to:0,color:"#FEB019"}]}}}),this.stacked&&(e.chart.type="bar",e.chart.stacked=!0,e.chart.stackType=this.stackType),this.type==="radar"&&(e.plotOptions={radar:this.polygon?{offsetY:20,size:100,polygons:{strokeColors:this.dark?"#555":"#e9e9e9",fill:{colors:this.dark?["#333","#111"]:["#f8f8f8","#fff"]}}}:{}},e.tooltip={followCursor:!0});return this.animation||(e.chart.animations={enabled:!1}),e},handleResize(){this.refresh=!1,setTimeout(()=>{this.refresh=!0,this.options=this.customOptions()},90)}},mounted(){this.options=this.customOptions(),window.addEventListener("resize",h(this.handleResize,180))},beforeDestroy(){window.removeEventListener("resize",h(this.handleResize,180))}};function b(e,i,s,r,t,d){const o=u("apexchart"),a=m;return l(),n(a,null,{default:c(()=>[t.refresh?(l(),n(o,{key:0,ref:"chart",class:"min-w-full",width:"100%",type:s.type,height:s.height,options:t.options,series:s.series},null,8,["type","height","options","series"])):y("",!0)]),_:1})}const T=f(g,[["render",b]]);export{T as default};
