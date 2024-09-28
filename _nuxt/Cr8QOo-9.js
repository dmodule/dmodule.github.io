import{b4 as c,r as w,b3 as m,b1 as g,b2 as e,bc as N,bd as A,bu as v,b8 as l,be as a,b9 as u,ba as s,bA as d,bb as q,bZ as E,bg as L,b_ as U,bh as V,bi as K}from"./CLbFfPPJ.js";import{u as P}from"./39qi_9--.js";import"./CAtI1fqb.js";import"./BLVB0qGI.js";import"./B7LlgBWf.js";const B={class:"flex justify-center gap-1 sm:gap-2 mb-4 mt-2"},j={class:"text-center mb-4"},D={class:"text-xl font-bold"},F={class:"text-lg"},I={class:"text-sm text-base-neutral"},M={class:"text-center mb-2 w-full"},R={class:"text-xl font-semibold"},z={class:"text-base-primary"},G={class:"flex items-center justify-between"},O={class:"text-base-100 text-center"},Y={__name:"CardScore",setup($){const r=P(),p=["c","a","n","s","l","i","m"],b=c(()=>r.tutru.canslim_style),h=c(()=>r.tutru.data2),i=c(()=>r.tutru.data3),o=w(!1),_=[{key:"letter",label:""},{key:"name",label:"Tiêu chí"},{key:"value",label:"Giá trị"},{key:"evaluation",label:"Đánh giá"}],x=[{letter:{value:"C",class:"bg-yellow-600"},name:"Tăng trưởng doanh thu quý gần nhất so với cùng kỳ năm trước",value:"20.1%",evaluation:"Không đạt"},{letter:{value:"C",class:"bg-yellow-600"},name:"Tăng trưởng EPS cơ bản quý gần nhất so với cùng kỳ năm trước",value:"-0.3%",evaluation:"Không đạt"},{letter:{value:"C",class:"bg-yellow-600"},name:"Tăng trưởng EPS cơ bản quý gần nhất so với cùng kỳ năm trước",value:"6.9%",evaluation:"Không đạt"},{letter:{value:"A",class:"bg-orange-600"},name:"Tăng trưởng EPS cơ bản 4 quý gần nhất so với 4 quý trước đó",value:"1.9%",evaluation:"Không đạt"},{letter:{value:"A",class:"bg-orange-600"},name:"ROE",value:"22.2%",evaluation:"Đạt"},{letter:{value:"A",class:"bg-orange-600"},name:"Tăng trưởng LNST năm gần nhất",value:"22.4%",evaluation:"Đạt"},{letter:{value:"A",class:"bg-orange-600"},name:"Có sự tăng tốc về tăng trưởng LNST",value:"Đạt",evaluation:"Đạt"},{letter:{value:"N",class:"bg-pink-600"},name:"Doanh nghiệp có sự mở rộng biên lợi nhuận",value:"39.5% -> 39.2%",evaluation:"Không đạt"},{letter:{value:"N",class:"bg-pink-600"},name:"Cổ phiếu chỉnh phục những mức giá mới",value:"-2.5%",evaluation:"Đạt"},{letter:{value:"S",class:"bg-sky-600"},name:"Nguồn cung cổ phiếu",value:"460.3 tỷ",evaluation:"Đạt"},{letter:{value:"L",class:"bg-blue-600"},name:"Vốn hóa",value:"86,117 tỷ",evaluation:"Đạt"},{letter:{value:"L",class:"bg-blue-600"},name:"Tầm vóc doanh nghiệp",value:"Đầu ngành",evaluation:"Đạt"},{letter:{value:"I",class:"bg-purple-600"},name:"Tổ chức, nước ngoài sở hữu",value:"49%",evaluation:"Đạt"},{letter:{value:"I",class:"bg-purple-600"},name:"Cổ phiếu trôi nổi (Freefloat)",value:"78.6%",evaluation:"Đạt"},{letter:{value:"M",class:"bg-green-600"},name:"Tỷ lệ cổ phiếu UPTREND ngắn hạn",value:"68%",evaluation:"Đạt"},{letter:{value:"M",class:"bg-green-600"},name:"Tỷ lệ cổ phiếu UPTREND trung hạn",value:"55%",evaluation:"Đạt"}];return(H,t)=>{const f=E,y=L,T=U,k=V,C=K;return m(),g("div",{class:"h-full w-full flex flex-col justify-center bg-gradient-to-b from-green-400/10 border-green-400/20 border text-base-100 p-3 sm:p-4 rounded-finsc cursor-pointer",onClick:t[2]||(t[2]=n=>o.value=!0)},[e("div",B,[(m(),g(N,null,A(p,(n,S)=>e("span",{key:S,class:v(["flex items-center justify-center h-8 w-8 rounded-full text-lg font-semibold uppercase",[l(b)[n]?"bg-base-primary text-white":"bg-base-100 text-base-200"]])},a(n),3)),64))]),e("div",j,[e("h1",D,a(l(i).macp)+" : "+a(l(i).san),1),e("h2",F,a(l(i).tendn),1),e("p",I,a(l(i).nganh),1)]),u(f,{mode:"hover",popper:{placement:"top"}},{panel:s(()=>t[3]||(t[3]=[e("div",{class:"px-4 py-2"},[e("p",null,"Điểm khuyến nghị hành động:"),e("p",null,"Giúp NĐT đưa ra quyết định hiệu quả"),e("p",null,"dựa trên việc đánh giá tổng thể"),e("p",null,"từ trụ FA&TA của cổ phiếu,"),e("p",null,"theo thang điểm từ 1 đến 100:"),d(" ------------------ "),e("p",null,"[0-30] Loại khỏi danh mục"),e("p",null,"[30-60] Xem xét"),e("p",null,"[60-80] Theo dõi thường xuyên"),e("p",null,"[80-100] Đưa vào danh mục")],-1)])),default:s(()=>[e("div",M,[e("p",R,[t[4]||(t[4]=d(" Action Score: ")),e("span",z,a(l(h).diemBinhquan),1)])])]),_:1}),u(C,{modelValue:l(o),"onUpdate:modelValue":t[1]||(t[1]=n=>q(o)?o.value=n:null),ui:{width:"w-full sm:max-w-3xl"}},{default:s(()=>[u(k,{ui:{ring:"",divide:"divide-y divide-gray-100 dark:divide-gray-800"}},{header:s(()=>[e("div",G,[t[5]||(t[5]=e("div",null,"CANSLIM CHECKLIST",-1)),u(y,{color:"red",size:"xs",icon:"i-heroicons-x-mark-20-solid",class:"-my-1 outline-none",onClick:t[0]||(t[0]=n=>o.value=!1)})])]),default:s(()=>[u(T,{rows:x,columns:_},{"letter-data":s(({row:n})=>[e("div",O,a(n.letter.value),1)]),"evaluation-data":s(({row:n})=>[e("div",{class:v(n.evaluation==="Đạt"?"text-base-primary animate-pulse":"text-base-secondary")},a(n.evaluation),3)]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}};export{Y as default};
