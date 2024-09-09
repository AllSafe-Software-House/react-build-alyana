import{u as i,j as e,r as o}from"./index-TAQXgxdN.js";const d=({className:t})=>{const s=localStorage.getItem("lang"),{changeLanguage:a}=i();return e.jsx("button",{onClick:a,className:`${t} p-2 rounded-full m-10 border hover:bg-[#a7595c] hover:border-[#a7595c] hover:text-[white]`,children:`${s=="en"?"AR":"EN"}`})},x=({targetDate:t})=>{const s=localStorage.getItem("lang"),a=()=>{const n=+new Date(t)-+new Date;let l={};return n>0&&(l={days:Math.floor(n/(1e3*60*60*24)),hours:Math.floor(n/(1e3*60*60)%24),minutes:Math.floor(n/1e3/60%60),seconds:Math.floor(n/1e3%60)}),l},[r,c]=o.useState(a());return o.useEffect(()=>{const n=setTimeout(()=>{c(a())},1e3);return()=>clearTimeout(n)}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:`${s=="ar"&&"font-[cairo]"} grid md:grid-cols-8 grid-cols-2 gap-4 my-4 w-full`,children:[e.jsxs("div",{className:"md:col-start-3 border rounded-md text-center py-3 text-white font-bold flex flex-col lg:text-[20px]",children:[e.jsx("span",{children:`${s=="en"?"Days":"الأيام"}`}),e.jsx("span",{children:r.days||"00"})]}),e.jsxs("div",{className:"border rounded-md text-center py-3 font-[cairo] text-white font-bold flex flex-col lg:text-[20px]",children:[e.jsx("span",{children:`${s=="en"?"Hours":"الساعات"}`}),e.jsx("span",{children:r.hours||"00"})]}),e.jsxs("div",{className:"border rounded-md text-center py-3 text-white font-bold flex flex-col lg:text-[20px]",children:[e.jsx("span",{children:`${s=="en"?"Minuts":"الدقائق"}`}),e.jsx("span",{children:r.minutes||"00"})]}),e.jsxs("div",{className:"border rounded-md text-center py-3 text-white font-bold flex flex-col lg:text-[20px]",children:[e.jsx("span",{children:`${s=="en"?"Seconds":"الثواني"}`}),e.jsx("span",{children:r.seconds||"00"})]})]})})},m=()=>{const t=localStorage.getItem("lang");return e.jsxs("div",{className:`${t=="ar"&&"font-[cairo]"} d-flex flex-column`,children:[e.jsx("header",{className:"relative z-50 hidden",children:e.jsx("div",{className:"container",children:e.jsxs("nav",{className:"navbar navbar-dark bg-transparent md:flex items-center justify-between",children:[e.jsx("div",{className:"navbar-brand my-auto",href:"#"}),e.jsxs("div",{className:"info flex flex-col md:flex-row",children:[e.jsx("span",{className:"navbar-text border-0 md:border-r-[1px]",children:"978-130-5444"}),e.jsx("span",{className:"navbar-text d-none d-sm-inline-block",children:"jerald_glover@glennie.tv"})]})]})})}),e.jsx("div",{className:"overlay bg-[#0000006b] absolute top-0 left-0 w-full h-full"}),e.jsxs("main",{className:"my-auto relative z-50 text-white text-center pt-20",children:[e.jsx("img",{src:"/src/assets/logo.png",className:`w-52 !h-52 mx-auto mb-2\r
          `,alt:"logo"}),e.jsxs("div",{className:`${t=="ar"&&"font-[cairo]"} container`,children:[e.jsx("h2",{className:"mb-5 text-4xl md:text-7xl font-[200] uppercase",children:`${t=="en"?"We're launching our":"نحن علي وشك إطلاق"}`}),e.jsx("h2",{className:"mb-5 text-3xl md:text-4xl font-bold uppercase",children:`${t=="en"?"new website":"الموقع الإلكتروني الخاص بنا"}`}),e.jsx("p",{className:"page-description mx-auto !mb-6 text-center",children:`${t=="en"?"Exciting things are on the way! Stay tuned for something amazing soon!":"نحن بصدد إطلاق موقعنا الجديد! أشياء مثيرة في الطريق، ترقبوا شيئاً رائعاً قريباً!"}`})]}),e.jsx(x,{targetDate:"2024-10-10T00:00:00"})]})]})},h=m;function u(){return e.jsxs("main",{className:"main",children:[e.jsx(d,{className:"relative z-50"}),e.jsx(h,{})]})}export{u as default};
