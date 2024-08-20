import{W as g,r as d,j as e,Y as h,a as w}from"./app-DeC8LeYc.js";import{G as N}from"./GuestLayout-fzO0SzfA.js";import{T as n,I as m}from"./TextInput-BORCJ5Cw.js";import{I as l}from"./InputLabel-D8aDuc5H.js";import{P as b}from"./PrimaryButton-C8AuHvhe.js";import{S as c}from"./SelectInput-BKSxe4U2.js";import"./ApplicationLogo-D_tPs4zT.js";function E({departments:u}){const{data:s,setData:r,post:p,processing:x,errors:t,reset:j}=g({name:"",email:"",index_number:"",year:"",department:"",password:"",password_confirmation:""}),[o,f]=d.useState(4);d.useEffect(()=>()=>{j("password","password_confirmation")},[]),d.useEffect(()=>{u.map(a=>{a.id==s.department&&f(a.max_year)})},[s.department]);const v=a=>{a.preventDefault(),p(route("register"))};return e.jsxs(N,{children:[e.jsx(h,{title:"Register"}),e.jsxs("form",{onSubmit:v,children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"name",value:"Name"}),e.jsx(n,{id:"name",name:"name",value:s.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:a=>r("name",a.target.value),required:!0}),e.jsx(m,{message:t.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"email",value:"Email"}),e.jsx(n,{id:"email",type:"email",name:"email",value:s.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>r("email",a.target.value),required:!0}),e.jsx(m,{message:t.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"index_number",value:"Index Number"}),e.jsx(n,{id:"index_number",type:"text",name:"index_number",value:s.index_number,className:"mt-1 block w-full",autoComplete:"index_number",onChange:a=>r("index_number",a.target.value),required:!0}),e.jsx(m,{message:t.index_number,className:"mt-2"})]}),e.jsxs("div",{className:"grid grid-cols-2 mt-4 gap-3",children:[e.jsxs("div",{className:"",children:[e.jsx(l,{htmlFor:"department",value:"Department"}),e.jsxs(c,{id:"department",name:"department",value:s.department,className:"mt-1 block w-full",onChange:a=>r("department",a.target.value),required:!0,children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Department"}),u.map(a=>e.jsx("option",{value:a.id,children:a.name}))]}),e.jsx(m,{message:t.department,className:"mt-2"})]}),e.jsxs("div",{className:"",children:[e.jsx(l,{htmlFor:"department",value:"Year/Level"}),e.jsxs(c,{id:"year",name:"year",value:s.year,className:"mt-1 block w-full",onChange:a=>r("year",a.target.value),required:!0,children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Year/Level"}),Array.from({length:o},(a,i)=>e.jsxs("option",{value:o-i,children:["Year ",o-i," / Level ",(o-i)*100]}))]}),e.jsx(m,{message:t.year,className:"mt-2"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"password",value:"Password"}),e.jsx(n,{id:"password",type:"password",name:"password",value:s.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>r("password",a.target.value),required:!0}),e.jsx(m,{message:t.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(n,{id:"password_confirmation",type:"password",name:"password_confirmation",value:s.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>r("password_confirmation",a.target.value),required:!0}),e.jsx(m,{message:t.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(w,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Already registered?"}),e.jsx(b,{className:"ms-4",disabled:x,children:"Register"})]})]})]})}export{E as default};