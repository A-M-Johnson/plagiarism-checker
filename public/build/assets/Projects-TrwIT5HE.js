import{j as s}from"./app-C6ZX4e-J.js";import{A as i}from"./AdminLayout-BRroYc-O.js";import"./ApplicationLogo-yUHG46mn.js";import"./ResponsiveNavLink-CahTAfzT.js";import"./transition-kvXenZgM.js";function m({auth:c,className:t="",projects:a,department:e}){return s.jsxs(i,{user:c.user,children:[s.jsx("div",{className:"flex items-center my-6 mb-0 justify-between px-12",children:s.jsxs("h2",{className:"font-bold text-lg",children:[e==null?void 0:e.name," Projects"]})}),s.jsxs("section",{className:"p-12 pt-4 max-[1000px]:grid-box",children:[s.jsxs("div",{className:"tab title my-3 font-black text-gray-500",children:[s.jsx("div",{className:"title-cell col-span-3",children:"Title"}),s.jsx("div",{className:"title-cell col-span-3",children:"Time Submitted"}),s.jsx("div",{className:"title-cell col-span-3",children:"Plagiarism"}),s.jsx("div",{className:"title-cell col-span-3",children:"Feedback"})]}),a&&a.data.map(l=>s.jsxs("div",{className:"tab min-[1000px]:mb-3",children:[s.jsx("div",{className:"cell col-span-3",children:l.title}),s.jsx("div",{className:"cell col-span-3",children:l.created_at}),s.jsxs("div",{className:"cell col-span-3",children:[l.score.toString().padStart(3,"0"),"%"]}),s.jsx("div",{className:"cell col-span-3 text-center ",children:s.jsx("div",{className:`${l.status=="pending"?"primary-badge":l.status=="approved"?"success-badge":"fail-badge"} uppercase`,children:l.status})})]},l.id))]})]})}export{m as default};
