import r from"./BJYoUx2i.js";import{o as s,c as m,a as o,b as a,w as c,s as d,t as u}from"./DlcRhjNe.js";const y={class:"overflow-auto flex-1"},_={__name:"Volume",setup(v){const i=[{key:"time",label:"Khớp lệnh"},{key:"price",label:"Giá"},{key:"volume",label:"KL"},{key:"type",label:"Lệnh"}],l=[{time:"14:45:00",price:"131.00",volume:"493,900",type:"DK"},{time:"14:30:00",price:"131.30",volume:"100",type:"DK"},{time:"14:29:00",price:"131.40",volume:"1,300",type:"M"},{time:"14:29:00",price:"131.20",volume:"100",type:"M"},{time:"14:29:00",price:"131.20",volume:"5,200",type:"B"},{time:"14:29:00",price:"131.30",volume:"200",type:"B"},{time:"14:29:00",price:"131.30",volume:"1,400",type:"B"},{time:"14:29:00",price:"131.30",volume:"4,000",type:"B"}];return(p,t)=>{const n=r;return s(),m("div",{class:"h-full flex flex-col justify-center mx-auto bg-gradient-to-b from-green-400/10 border-green-400/20 border text-base-100 rounded-2xl cursor-pointer",onClick:t[0]||(t[0]=e=>p.isOpen=!0)},[o("div",y,[a(n,{rows:l,columns:i,ui:{th:{padding:"py-1 px-4"},td:{padding:"py-1 px-4"},divide:"",tbody:"divide-y divide-base-neutral"}},{"type-data":c(({row:e})=>[o("div",{class:d(["font-semibold",{"text-yellow-400":e.type==="DK","text-green-400":e.type==="M","text-red-400":e.type==="B"}])},u(e.type),3)]),_:1})])])}}},f=_;export{f as _};