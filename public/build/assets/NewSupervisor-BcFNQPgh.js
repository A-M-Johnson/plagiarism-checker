import{r as j,W as f,j as e}from"./app-D7umJZLa.js";import{T as o,I as l}from"./TextInput-Bhyhi-ly.js";import{I as m}from"./InputLabel-DuPjScvB.js";import{P as N}from"./PrimaryButton--vPfRnJe.js";import{A as g}from"./AdminLayout-DhJXl7m8.js";import"./TextAreaInput-7DYyazSK.js";import{S as w}from"./SelectInput-D-ZLh_m8.js";import{X as b}from"./transition-uayuMj-o.js";import"./ApplicationLogo-CLoiHjHC.js";import"./ResponsiveNavLink-DiFLdgwh.js";function R({auth:i,departments:c,className:y=""}){const n=j.useRef(),{data:t,setData:a,errors:r,post:d,reset:u,processing:p,recentlySuccessful:x}=f({name:"",level:""}),h=s=>{s.preventDefault(),d(route("supervisors.store"),{preserveScroll:!0,onSuccess:()=>{u(),window.history.back()},onError:v=>{v.name&&n.current.focus()}})};return e.jsx(g,{user:i.user,children:e.jsx("section",{className:"p-12",children:e.jsxs("div",{className:"max-w-[500px] mx-auto",children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"New Supervisor"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"provide the following details to create a supervisor"})]}),e.jsxs("form",{onSubmit:h,className:"mt-6 space-y-6",children:[e.jsx(b,{show:x,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-white bg-green-500 px-3 py-1.5 rounded font-semibold",children:"Department Created Successfully"})}),e.jsxs("div",{children:[e.jsx(m,{htmlFor:"title",value:"Full Name"}),e.jsx(o,{id:"title",ref:n,value:t.name,onChange:s=>a("name",s.target.value),type:"text",className:"mt-1 block w-full"}),e.jsx(l,{message:r.name,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(m,{htmlFor:"title",value:"Email"}),e.jsx(o,{id:"level",value:t.email,onChange:s=>a("email",s.target.value),type:"email",className:"mt-1 block w-full"}),e.jsx(l,{message:r.email,className:"mt-2"})]}),e.jsxs("div",{children:[e.jsx(m,{htmlFor:"title",value:"Staff Number"}),e.jsx(o,{id:"level",value:t.index,onChange:s=>a("index",s.target.value),type:"number",className:"mt-1 block w-full"}),e.jsx(l,{message:r.index,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"password",value:"Password"}),e.jsx(o,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>a("password",s.target.value)}),e.jsx(l,{message:r.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"department",value:"Department"}),e.jsxs(w,{id:"department",name:"department",value:t.department,className:"mt-1 block w-full",onChange:s=>a("department",s.target.value),required:!0,children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Department"}),c.map(s=>e.jsx("option",{value:s.id,children:s.name}))]}),e.jsx(l,{message:r.department,className:"mt-2"})]}),e.jsx("div",{className:"flex items-center gap-4",children:e.jsx(N,{disabled:p,className:"w-full text-center",children:"Save"})})]})]})})})}export{R as default};
