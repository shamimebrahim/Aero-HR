import{r as ie,q as X,a as e,j as s,B as j,F as T}from"./app-zs-SEecS.js";import{K as de,q as ce,r as m,u as H,k as ue,l as V,m as c,n as pe,B as N,a2 as Z,T as ee,F as U,S as z,M as I,c as G,j as he,i as me,o as $,U as re,G as w,h as Y,O as J,b as R,V as ae,W as te,a3 as ge,f as Q}from"./vendor-D-JNEeQ3.js";import{d as be}from"./Edit-BfZLgRcJ.js";import{d as ye}from"./Delete-i0136_TX.js";import{d as xe,G as oe}from"./GlassDialog-ClLTn1pI.js";import{L as fe}from"./LoadingButton-CUwJLjqa.js";var L={},Ce=de;Object.defineProperty(L,"__esModule",{value:!0});var O=L.default=void 0,we=Ce(ie()),Se=ce;O=L.default=(0,we.default)((0,Se.jsx)("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"RadioButtonChecked");const Be=({allLeaves:F,allUsers:g,handleClickOpen:b,setCurrentLeave:f,openModal:p,setLeavesData:o})=>{const{auth:S}=X().props,[x,l]=m.useState(null),a=H(),E=r=>{l(r.currentTarget)},k=()=>{l(null)},W=async(r,n)=>{k(),await _(r,"status",n)},_=async(r,n,B)=>{const q=new Promise(async(D,C)=>{try{const i=await axios.post(route("leave-add"),{route:route().current(),user_id:r.user_id,id:r.id,leaveType:r.leave_type,fromDate:r.from_date,toDate:r.to_date,daysCount:r.no_of_days,leaveReason:r.reason,[n]:B});i.status===200&&(o(i.data.leavesData),D([i.data.message||"Leave status updated successfully"]))}catch(i){i.response?(i.response.status===422?C(i.response.statusText||"Failed to update leave status"):C("An unexpected error occurred. Please try again later."),console.error(i.response)):i.request?(C("No response received from the server. Please check your internet connection."),console.error(i.request)):(C("An error occurred while setting up the request."),console.error("Error",i.message))}});j.promise(q,{pending:{render(){return s("div",{style:{display:"flex",alignItems:"center"},children:[e($,{}),e("span",{style:{marginLeft:"8px"},children:"Updating leave status..."})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},success:{render({data:D}){return e(T,{children:D.map((C,i)=>e("div",{children:C},i))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},error:{render({data:D}){return e(T,{children:D})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}}})},A=r=>{switch(r){case"New":return a.palette.primary.main;case"Pending":return a.palette.warning.main;case"Approved":return a.palette.success.main;case"Declined":return a.palette.error.main;default:return a.palette.text.primary}};return e(me,{style:{maxHeight:"84vh",overflowY:"auto"},children:s(he,{size:"small",children:[e(ue,{children:s(V,{children:[S.roles.includes("admin")&&route().current()==="leaves"&&e(c,{sx:{whiteSpace:"nowrap"},children:"Employee"}),e(c,{sx:{whiteSpace:"nowrap"},children:"Leave Type"}),e(c,{sx:{whiteSpace:"nowrap"},children:"From"}),e(c,{sx:{whiteSpace:"nowrap"},children:"To"}),e(c,{sx:{whiteSpace:"nowrap"},children:"No of Days"}),e(c,{sx:{whiteSpace:"nowrap"},children:"Reason"}),e(c,{sx:{whiteSpace:"nowrap"},children:"Status"}),e(c,{sx:{whiteSpace:"nowrap"},align:"center",children:"Actions"})]})}),e(pe,{children:F.map(r=>s(V,{children:[S.roles.includes("admin")&&route().current()==="leaves"&&e(c,{children:s(N,{sx:{display:"flex",alignItems:"center"},children:[e(Z,{src:g.find(n=>String(n.id)===String(r.user_id)).profile_image,alt:g.find(n=>String(n.id)===String(r.user_id)).name}),e(ee,{sx:{marginLeft:"10px",fontWeight:"bold"},children:g.find(n=>String(n.id)===String(r.user_id)).name})]})}),e(c,{sx:{whiteSpace:"nowrap"},children:r.leave_type}),e(c,{sx:{whiteSpace:"nowrap"},children:new Date(r.from_date).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})}),e(c,{sx:{whiteSpace:"nowrap"},children:new Date(r.to_date).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})}),e(c,{sx:{whiteSpace:"nowrap"},children:r.no_of_days}),e(c,{sx:{whiteSpace:"nowrap"},children:r.reason}),e(c,{sx:{whiteSpace:"nowrap"},children:e(U,{fullWidth:!0,children:e(z,{disabled:!S.roles.includes("admin")&&route().current()!=="leaves",variant:"outlined",color:"primary",size:"small",onClick:E,startIcon:e(O,{}),value:r.status,onChange:n=>W(r,n.target.value),sx:{border:a.glassCard.border,borderRadius:"50px"},MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,borderRadius:2,boxShadow:a.glassCard.boxShadow}}},children:["New","Pending","Approved","Declined"].map(n=>e(I,{value:n,sx:{display:"flex",alignItems:"center","&:hover":{backgroundColor:a.palette.action.hover}},children:s(N,{sx:{display:"flex"},children:[e(O,{sx:{marginRight:1,color:A(n)}}),n]})},n))})})}),s(c,{sx:{whiteSpace:"nowrap"},align:"center",children:[e(G,{sx:{m:1},variant:"outlined",color:"success",size:"small",onClick:()=>{f(r),p("edit_leave")},children:e(be,{})}),e(G,{sx:{m:1},variant:"outlined",color:"error",size:"small",onClick:()=>b(r.id,"delete_leave"),children:e(ye,{})})]})]},r.id))})]})})},Ee=({open:F,closeModal:g,leaveTypes:b,leaveCounts:f,setLeavesData:p,currentLeave:o,allUsers:S})=>{const{auth:x}=X().props,l=H(),[a,E]=m.useState((o==null?void 0:o.user_id)||x.user.id),[k,W]=m.useState((o==null?void 0:o.leave_type)||(b.length>0?b[0].type:"")),[_,A]=m.useState((o==null?void 0:o.from_date)||""),[r,n]=m.useState((o==null?void 0:o.to_date)||""),[B,q]=m.useState((o==null?void 0:o.no_of_days)||""),[D,C]=m.useState(""),[i,se]=m.useState((o==null?void 0:o.reason)||""),[u,le]=m.useState({}),[K,M]=m.useState(!1),[ke,ne]=m.useState("");return m.useEffect(()=>{var y;const t=((y=f==null?void 0:f.find(h=>h.leave_type===k))==null?void 0:y.days_used)||0;ne(t);const v=b==null?void 0:b.find(h=>h.type===k);v&&C(v.days-t)},[k,f,b]),m.useEffect(()=>{q(((v,y)=>{if(!v||!y)return"";const h=new Date(v),d=new Date(y);if(h>d)return"";const P=d.getTime()-h.getTime();return Math.ceil(P/(1e3*3600*24))+1})(_,r))},[_,r]),s(oe,{open:F,onClose:g,fullWidth:!0,maxWidth:"sm",children:[s(re,{sx:{display:"flex",alignItems:"center"},children:[e(ee,{variant:"h6",children:"Add Leave"}),e(G,{onClick:g,sx:{position:"absolute",top:8,right:16},children:e(xe,{})})]}),s("form",{onSubmit:async t=>{t.preventDefault(),M(!0);const v=new Promise(async(y,h)=>{try{const d={route:route().current(),user_id:a,leaveType:k,fromDate:_,toDate:r,daysCount:B,leaveReason:i};o&&(d.id=o.id);const P=await axios.post(route("leave-add"),d);P.status===200&&(p(P.data.leavesData),y([P.data.message||"Leave application submitted successfully"]),g())}catch(d){M(!1),d.response?(d.response.status===422?(le(d.response.data.errors||{}),h(d.response.statusText||"Failed to submit leave application")):h("An unexpected error occurred. Please try again later."),console.error(d.response)):d.request?(h("No response received from the server. Please check your internet connection."),console.error(d.request)):(h("An error occurred while setting up the request."),console.error("Error",d.message))}finally{M(!1)}});j.promise(v,{pending:{render(){return s("div",{style:{display:"flex",alignItems:"center"},children:[e($,{}),e("span",{style:{marginLeft:"8px"},children:"Submitting leave application..."})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:l.glassCard.backgroundColor,border:l.glassCard.border,color:l.palette.text.primary}},success:{render({data:y}){return e(T,{children:y.map((h,d)=>e("div",{children:h},d))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:l.glassCard.backgroundColor,border:l.glassCard.border,color:l.palette.text.primary}},error:{render({data:y}){return e(T,{children:y})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:l.glassCard.backgroundColor,border:l.glassCard.border,color:l.palette.text.primary}}})},children:[e(ae,{children:s(w,{container:!0,spacing:2,children:[e(w,{item:!0,xs:12,md:6,children:s(U,{fullWidth:!0,children:[e(Y,{id:"leave-type-label",children:"Leave Type"}),s(z,{labelId:"leave-type-label",value:k,onChange:t=>W(t.target.value),label:"Leave Type",error:!!u.leaveType,MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:l.glassCard.backgroundColor,border:l.glassCard.border,borderRadius:2,boxShadow:l.glassCard.boxShadow}}},children:[e(I,{value:"",disabled:!0,children:"Select Leave Type"}),b.map(t=>s(I,{value:t.type,children:[t.type," ",t.days," Days"]},t.id))]}),e(J,{children:u.leaveType})]})}),e(w,{item:!0,xs:12,md:6,children:e(R,{label:"From",type:"date",fullWidth:!0,value:_,onChange:t=>A(t.target.value),InputLabelProps:{shrink:!0},error:!!u.fromDate,helperText:u.fromDate})}),e(w,{item:!0,xs:12,md:6,children:e(R,{label:"To",type:"date",fullWidth:!0,value:r,onChange:t=>n(t.target.value),InputLabelProps:{shrink:!0},error:!!u.toDate,helperText:u.toDate})}),e(w,{item:!0,xs:12,md:6,children:e(R,{label:"Number of days",type:"text",fullWidth:!0,value:B,InputProps:{readOnly:!0},error:!!u.daysCount,helperText:u.daysCount})}),e(w,{item:!0,xs:12,md:6,children:e(R,{label:"Remaining Leaves",type:"text",fullWidth:!0,value:D,InputProps:{readOnly:!0},error:!!u.remainingLeaves,helperText:u.remainingLeaves})}),x.roles.includes("admin")&&route().current()==="leaves"&&e(w,{item:!0,xs:12,md:6,children:s(U,{fullWidth:!0,children:[e(Y,{id:"leave-employee-label",children:"Employee"}),s(z,{variant:"outlined",fullWidth:!0,labelId:"leave-employee-label",value:a||"na",error:!!u.user_id,onChange:t=>E(t.target.value),label:"Employee",MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:l.glassCard.backgroundColor,border:l.glassCard.border,borderRadius:2,boxShadow:l.glassCard.boxShadow}}},children:[e(I,{value:"na",disabled:!0,children:"Please select"}),S.map(t=>e(I,{value:t.id,children:s(N,{sx:{display:"flex"},children:[e(Z,{src:t.profile_image,alt:t.name||"Not assigned",sx:{borderRadius:"50%",width:23,height:23,display:"flex",mr:1}}),t.name]})},t.id))]}),e(J,{children:u.user_id})]})}),e(w,{item:!0,xs:12,children:e(R,{label:"Leave Reason",multiline:!0,rows:4,fullWidth:!0,value:i,onChange:t=>se(t.target.value),error:!!u.leaveReason,helperText:u.leaveReason})})]})}),e(te,{sx:{padding:"16px",justifyContent:"center"},children:e(fe,{type:"submit",variant:"outlined",color:"primary",loading:K,disabled:K,sx:{borderRadius:"50px"},children:"Submit"})})]})]})},We=({open:F,handleClose:g,leaveIdToDelete:b,setLeavesData:f})=>{const p=H();return s(oe,{open:F,onClose:g,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e(re,{id:"alert-dialog-title",children:"Confirm Deletion"}),e(ae,{children:e(ge,{id:"alert-dialog-description",children:"Are you sure you want to delete this leave? This action cannot be undone."})}),s(te,{children:[e(Q,{onClick:g,color:"primary",children:"Cancel"}),e(Q,{onClick:()=>{const S=new Promise(async(x,l)=>{try{const a=await axios.delete(route("leave-delete",{id:b,route:route().current()}));a.status===200&&(f(a.data.leavesData),x("Leave application deleted successfully"))}catch(a){console.error("Error deleting task:",a),l(a.response.data.error||"Failed to delete leave application")}finally{g()}});j.promise(S,{pending:{render(){return s("div",{style:{display:"flex",alignItems:"center"},children:[e($,{}),e("span",{style:{marginLeft:"8px"},children:"Deleting leave application..."})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:p.glassCard.backgroundColor,border:p.glassCard.border,color:p.palette.text.primary}},success:{render({data:x}){return e(T,{children:x})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:p.glassCard.backgroundColor,border:p.glassCard.border,color:p.palette.text.primary}},error:{render({data:x}){return e(T,{children:x})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:p.glassCard.backgroundColor,border:p.glassCard.border,color:p.palette.text.primary}}})},color:"error",autoFocus:!0,children:"Delete"})]})]})};export{We as D,Ee as L,Be as a};
