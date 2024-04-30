import{_ as p,J as d,o as f,A as u,w as c,b as y,ac as g}from"./Bp7PwLku.js";const m={props:{type:{type:String,default:"line"},colors:{type:Array,default:()=>["#84cc16","#22c55e","#10b981","#14b8a6","#06b6d4","#0ea5e9","#3b82f6","#6366f1","#8b5cf6","#a855f7","#c026d3","#db2777","#e11d48","#ef4444","#f97316","#f59e0b","#eab308"]},dark:{type:Boolean,default:!1},categories:{type:Array,default:()=>[]},series:{type:Array,default:()=>[]},height:{default:"400px"},distributed:{type:Boolean,value:!1},xaxis:{type:String,value:"category"},yaxis:{type:Array,value:[]},horizontal:{type:Boolean,default:!1},stacked:{type:Boolean,default:!1},stackType:{type:String,value:"normal"},dataLabels:{type:Boolean,default:!1},fillSolid:{type:Boolean,default:!1},monochrome:{type:Boolean,default:!1},stroke:{type:String,default:"smooth"},strokeWidth:{type:Number,default:0},strokeDashes:{type:Number,default:0},markers:{type:Number,value:0},donutTotal:{type:String,default:""},polarRings:{type:Number,value:0},polarSpokes:{type:Number,value:0},polygon:{type:Boolean,value:!1},radialTotal:{type:String,default:""},gaugeType:{type:String,value:""},strokeRound:{type:Boolean,value:!1}},computed:{options(){const e={theme:{mode:this.$colorMode.value},stroke:{curve:this.stroke,width:this.strokeWidth,dashArray:this.strokeDashes},colors:this.colors,fill:{type:this.fillSolid?"solid":"gradient",opacity:.8},markers:{size:this.markers},dataLabels:{enabled:this.dataLabels},legend:{show:!0},tooltip:{shared:!0,intersect:!1,inverseOrder:!0,followCursor:!1}},t={width:"100%",height:this.height,type:this.type,toolbar:{tools:{download:!0,selection:!1,zoom:!1,zoomin:!1,zoomout:!1,pan:!1,reset:!1}}};if(this.monochrome&&(e.theme.monochrome={enabled:!0,color:this.colors[0],shadeTo:"light",shadeIntensity:.6}),this.type==="pie"||this.type==="donut"||this.type==="polarArea")e.labels=this.categories,this.type==="polarArea"&&(e.plotOptions={polarArea:{rings:{strokeWidth:this.polarRings},spokes:{strokeWidth:this.polarSpokes}}},e.yaxis={show:this.polarRings}),this.type==="donut"&&(e.plotOptions={pie:{donut:this.donutTotal?{labels:{show:!0,total:{showAlways:!0,show:!0,label:this.donutTotal}}}:{}}});else if(this.type==="radialBar"){const s={startAngle:-135,endAngle:135,dataLabels:{name:{offsetY:120},value:{offsetY:76,fontSize:"24px",color:void 0,formatter:function(o){return o+"%"}}}},l={startAngle:-90,endAngle:90,dataLabels:{name:{show:!1},value:{offsetY:-2,fontSize:"24px"}}},r=this.gaugeType?this.gaugeType==="semi"?l:s:{};e.labels=this.categories,e.chart={sparkline:{enabled:this.gaugeType==="semi"}},e.stroke={lineCap:this.strokeRound?"round":"butt",dashArray:this.strokeDashes},e.plotOptions={radialBar:{hollow:{size:this.series.length===1?"70%":"50%"},dataLabels:{value:{fontSize:"18px"},total:{show:!!this.radialTotal,label:this.radialTotal,fontSize:"18px",formatter:function(o){var a;return(((a=o.globals)==null?void 0:a.series)||[]).reduce((n,h)=>n+h,0)}}},...r}}}else e.xaxis={type:this.xaxis,categories:this.categories},this.yaxis&&this.yaxis.length>0&&(e.yaxis=this.yaxis),this.horizontal&&(e.plotOptions={bar:{horizontal:this.horizontal,distributed:this.distributed,colors:{ranges:[{from:-100,to:-46,color:"#F15B46"},{from:-45,to:0,color:"#FEB019"}]}}}),this.stacked&&(t.type="bar",t.stacked=!0,t.stackType=this.stackType),this.type==="radar"&&(e.plotOptions={radar:this.polygon?{offsetY:20,size:100,polygons:{strokeColors:this.dark?"#555":"#e9e9e9",fill:{colors:this.dark?["#333","#111"]:["#f8f8f8","#fff"]}}}:{}},e.tooltip={followCursor:!0});return e.chart=t,e}}};function b(e,t,s,l,r,o){const i=d("apexchart"),a=g;return f(),u(a,null,{default:c(()=>[y(i,{ref:"chart",class:"min-w-full",width:"100%",type:s.type,height:s.height,options:o.options,series:s.series},null,8,["type","height","options","series"])]),_:1})}const x=p(m,[["render",b]]);export{x as _};
