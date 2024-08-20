import{c as M,r as A,a as e,j as n,b,F as u,Y as B}from"./app-DdshGs2h.js";import{e as z,w as H,x as O,T as J,M as C,I as S,y as U,z as T,c as V,D as W,E as $,B as D,d as q,a as G,A as K}from"./App-CYb_V-lD.js";import{T as X,a as F,b as o,c as Y,d as Q,e as Z}from"./TableRow-Ce5hCumn.js";import{F as I,I as j,S as N}from"./Select-B0Ha6fMy.js";import{C as P}from"./CircularProgress-CIPzFHkO.js";import{A as ee}from"./Add-BRyzWPFw.js";const re=z(M.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),ae=z(M.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),te=({allUsers:y,departments:f,designations:p})=>{const[h,k]=A.useState(y);console.log(h);const a=H();console.log(a);const[oe,L]=A.useState({});async function E(r,s,t){const c=new Promise(async(l,d)=>{try{const i=t.target.value,m=await fetch(route("profile.update"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content},body:JSON.stringify({id:s,[r]:i})}),x=await m.json();m.ok?(k(_=>_.map(g=>{if(g.id===s){const w={...g};return r==="department"&&g.department!==i&&(w.designation=null),w[r]=i,w}return g})),l([...x.messages]),console.log(x.messages)):(d(x.messages),console.error(x.messages))}catch(i){console.log(i),d(["An unexpected error occurred."])}});T.promise(c,{pending:{render(){return n("div",{style:{display:"flex",alignItems:"center"},children:[e(P,{}),n("span",{style:{marginLeft:"8px"},children:["Updating employee ",r,"..."]})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},success:{render({data:l}){return e(u,{children:l.map((d,i)=>e("div",{children:d},i))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},error:{render({data:l}){return e(u,{children:l.map((d,i)=>e("div",{children:d},i))})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}}})}const R=async r=>{const s=new Promise(async(t,c)=>{try{const l=await fetch(route("profile.delete"),{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content},body:JSON.stringify({user_id:r})}),d=await l.json();l.ok?(k(i=>i.filter(m=>m.id!==r)),t([d.message])):c([d.message])}catch(l){console.error("Error deleting user:",l),c(["An error occurred while deleting user. Please try again."])}});T.promise(s,{pending:{render(){return n("div",{style:{display:"flex",alignItems:"center"},children:[e(P,{}),e("span",{style:{marginLeft:"8px"},children:"Deleting user..."})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},success:{render({data:t}){return e(u,{children:t.map((c,l)=>e("div",{children:c},l))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},error:{render({data:t}){return e(u,{children:t.map((c,l)=>e("div",{children:c},l))})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}}})},v=r=>{L(s=>({...s,[r]:null}))};return e(Z,{style:{maxHeight:"70vh",overflowY:"auto"},children:n(Q,{"aria-label":"employee table",children:[e(X,{children:n(F,{children:[e(o,{sx:{whiteSpace:"nowrap"},children:"Employee ID"}),e(o,{sx:{whiteSpace:"nowrap"},children:"Name"}),e(o,{sx:{whiteSpace:"nowrap"},children:"Email"}),e(o,{sx:{whiteSpace:"nowrap"},children:"Mobile"}),e(o,{sx:{whiteSpace:"nowrap"},children:"Join Date"}),e(o,{sx:{whiteSpace:"nowrap"},children:"Department"}),e(o,{sx:{whiteSpace:"nowrap"},children:"Role"}),e(o,{sx:{whiteSpace:"nowrap"},align:"right",children:"Action"})]})}),e(Y,{children:h.map(r=>{var s;return n(F,{children:[e(o,{sx:{whiteSpace:"nowrap"},children:r.employee_id||"N/A"}),n(o,{sx:{display:"flex",alignItems:"center",whiteSpace:"nowrap"},children:[e(O,{src:`assets/images/users/${r.user_name}.jpg`,alt:r.first_name}),n(J,{sx:{marginLeft:"10px"},children:[e(b,{style:{textDecoration:"none",color:a.palette.text.primary,fontWeight:"bold"},href:route("profile",{user:r.id}),children:r.name||"N/A"}),e("br",{}),((s=p.find(t=>t.id===r.designation))==null?void 0:s.title)||"N/A"]})]}),e(o,{sx:{whiteSpace:"nowrap"},children:r.phone||"N/A"}),e(o,{sx:{whiteSpace:"nowrap"},children:r.email||"N/A"}),e(o,{sx:{whiteSpace:"nowrap"},children:r.date_of_joining||"N/A"}),e(o,{sx:{whiteSpace:"nowrap"},children:n(I,{size:"small",fullWidth:!0,children:[e(j,{id:"department",children:"Department"}),n(N,{labelId:"department",id:`department-select-${r.id}`,value:r.department||"na",onChange:t=>E("department",r.id,t),label:"Department",MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,borderRadius:2,boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"}}},children:[e(C,{value:"na",disabled:!0,children:"Select Department"}),f.map(t=>e(C,{value:t.id,children:t.name},t.id))]})]})}),e(o,{sx:{whiteSpace:"nowrap"},children:n(I,{size:"small",fullWidth:!0,children:[e(j,{id:"designation",children:"Designation"}),n(N,{labelId:"designation",id:`designation-select-${r.id}`,value:r.designation||"na",onChange:t=>E("designation",r.id,t),disabled:!r.department,label:"Designation",MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,borderRadius:2,boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"}}},children:[e(C,{value:"na",disabled:!0,children:"Select Designation"}),p.filter(t=>t.department_id===r.department).map(t=>e(C,{value:t.id,children:t.title},t.id))]})]})}),n(o,{sx:{whiteSpace:"nowrap"},align:"right",children:[e(S,{component:b,href:route("profile",{user:r.id}),onClick:()=>{v(r.id)},children:e(U,{})}),e(S,{component:b,href:route("profile",{user:r.id}),onClick:()=>{v(r.id)},children:e(ae,{})}),n(S,{component:b,href:route("profile",{user:r.id}),onClick:()=>{R(r.id)},children:[e(re,{})," "]})]})]},r.id)})})]})})},pe=({title:y,allUsers:f,departments:p,designations:h})=>n(K,{children:[e(B,{title:y}),e(D,{sx:{display:"flex",justifyContent:"center",p:2},children:e(V,{in:!0,children:n(W,{children:[e($,{title:"Employees",sx:{padding:"24px"},action:e(D,{display:"flex",gap:2,children:e(q,{title:"Add Employee",variant:"outlined",color:"success",startIcon:e(ee,{}),children:"Add Employee"})})}),e(G,{children:e(te,{allUsers:f,departments:p,designations:h})})]})})})]});export{pe as default};
