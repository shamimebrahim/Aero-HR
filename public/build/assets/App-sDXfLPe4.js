import{r,q as S,j as v,a as e,b as $,d as de,S as qe,c as Be,G as Ae,e as Ee,u as Te,f as se,Q as we,H as Ne,g as We,F as Fe}from"./app-zs-SEecS.js";import{p as ve,q as a,K as o,u as me,r as n,ag as j,ah as Ke,g as Ge,c as Qe,Z as ue,$ as M,ai as b,a0 as y,aj as Ue,B as g,Y as Ye,ak as Ze,al as Je}from"./vendor-D-JNEeQ3.js";import{d as Xe}from"./Edit-BfZLgRcJ.js";const et=ve(a.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),tt=ve(a.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");var D={},at=o;Object.defineProperty(D,"__esModule",{value:!0});var he=D.default=void 0,rt=at(r()),ot=a;he=D.default=(0,rt.default)((0,ot.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4z"}),"AddBox");var k={},nt=o;Object.defineProperty(k,"__esModule",{value:!0});var fe=k.default=void 0,st=nt(r()),ut=a;fe=k.default=(0,st.default)((0,ut.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"}),"AccountCircle");const lt=({auth:c,contentRef:x,setBottomNavHeight:f})=>{const s=me(),{url:i}=S(),[m,d]=n.useState(0),u=n.useRef(null),h=()=>{if(u.current){const t=u.current.clientHeight;f(t)}};n.useEffect(()=>(h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)),[]),n.useEffect(()=>{i.includes("/daily-works")?d(1):i.includes("/dashboard")?d(0):i.includes(`/profile/${c.user.id}`)&&d(2)},[i,c.user.id]);const p=(t,l)=>{d(l)};return v(Ke,{ref:u,sx:{position:"fixed",bottom:0,left:0,right:0,zIndex:1200,display:{xs:"flex",md:"none"},backdropFilter:"blur(16px) saturate(200%)",backgroundColor:s.glassCard.backgroundColor},elevation:3,showLabels:!0,value:m,onChange:p,children:[e(j,{component:$,href:"/dashboard",label:"Home",icon:e(de,{})}),e(j,{component:$,href:"/daily-works",label:"Tasks",icon:e(he,{})}),e(j,{component:$,href:route("profile",{user:c.user.id}),label:"Profile",icon:e(fe,{})})]})};var I={},it=o;Object.defineProperty(I,"__esModule",{value:!0});var L=I.default=void 0,ct=it(r()),dt=a;L=I.default=(0,ct.default)((0,dt.jsx)("path",{d:"M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"}),"Dashboard");var P={},vt=o;Object.defineProperty(P,"__esModule",{value:!0});var z=P.default=void 0,mt=vt(r()),ht=a;z=P.default=(0,mt.default)((0,ht.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"}),"People");var O={},ft=o;Object.defineProperty(O,"__esModule",{value:!0});var H=O.default=void 0,pt=ft(r()),_t=a;H=O.default=(0,pt.default)((0,_t.jsx)("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 18H4V8h16z"}),"CalendarToday");var q={},$t=o;Object.defineProperty(q,"__esModule",{value:!0});var R=q.default=void 0,xt=$t(r()),gt=a;R=q.default=(0,xt.default)((0,gt.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"}),"Work");var B={},jt=o;Object.defineProperty(B,"__esModule",{value:!0});var pe=B.default=void 0,Mt=jt(r()),bt=a;pe=B.default=(0,Mt.default)((0,bt.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings");var A={},yt=o;Object.defineProperty(A,"__esModule",{value:!0});var C=A.default=void 0,St=yt(r()),zt=a;C=A.default=(0,St.default)((0,zt.jsx)("path",{d:"M19 5v14H5V5zm1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"}),"ListAlt");var E={},Ht=o;Object.defineProperty(E,"__esModule",{value:!0});var _e=E.default=void 0,Rt=Ht(r()),Ct=a;_e=E.default=(0,Rt.default)((0,Ct.jsx)("path",{d:"M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"}),"List");var T={},Vt=o;Object.defineProperty(T,"__esModule",{value:!0});var $e=T.default=void 0,Dt=Vt(r()),kt=a;$e=T.default=(0,Dt.default)((0,kt.jsx)("path",{d:"M17 10H7v2h10zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V8h14zm-5-5H7v2h7z"}),"EventNote");var w={},It=o;Object.defineProperty(w,"__esModule",{value:!0});var V=w.default=void 0,Lt=It(r()),Pt=a;V=w.default=(0,Lt.default)((0,Pt.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"}),"Logout");const le=c=>[{name:"Dashboard",icon:e(L,{}),route:"dashboard"},{name:"Leaves",icon:e(V,{}),route:"leaves-employee"},{name:"Attendances",icon:e(H,{}),route:"attendance-employee"},...c?[{name:"Employees",icon:e(z,{}),subMenu:[{name:"All Employees",icon:e(z,{}),route:"employees"},{name:"Holidays",icon:e($e,{}),route:"holidays"},{name:"Leaves (Admin)",icon:e(V,{}),route:"leaves",badge:{content:"1",className:"badge rounded-pill bg-primary float-end"}},{name:"Leave Settings",icon:e(pe,{}),route:"leave-settings"},{name:"Attendances (Admin)",icon:e(H,{}),route:"attendances"},{name:"Departments",icon:e(de,{}),route:"departments"},{name:"Designations",icon:e(R,{}),route:"designations"},{name:"Timesheet",icon:e(C,{}),route:"timesheet"}]}]:[],{name:"Projects",icon:e(R,{}),subMenu:[{name:"Daily Works",icon:e(C,{}),route:"dailyWorks"},{name:"Daily Work Summary",icon:e(_e,{}),route:"dailyWorkSummary"}]},...c?[{name:"Settings",icon:e(qe,{}),route:"company-settings"}]:[]];var N={},Ot=o;Object.defineProperty(N,"__esModule",{value:!0});var xe=N.default=void 0,qt=Ot(r()),Bt=a;xe=N.default=(0,qt.default)((0,Bt.jsx)("path",{d:"M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z"}),"Business");var W={},At=o;Object.defineProperty(W,"__esModule",{value:!0});var ge=W.default=void 0,Et=At(r()),ie=a;ge=W.default=(0,Et.default)([(0,ie.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,ie.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");var F={},Tt=o;Object.defineProperty(F,"__esModule",{value:!0});var je=F.default=void 0,wt=Tt(r()),Nt=a;je=F.default=(0,wt.default)((0,Nt.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"Photo");var K={},Wt=o;Object.defineProperty(K,"__esModule",{value:!0});var Me=K.default=void 0,Ft=Wt(r()),Kt=a;Me=K.default=(0,Ft.default)((0,Kt.jsx)("path",{d:"M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"}),"VpnKey");var G={},Gt=o;Object.defineProperty(G,"__esModule",{value:!0});var be=G.default=void 0,Qt=Gt(r()),Ut=a;be=G.default=(0,Qt.default)((0,Ut.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10m0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"}),"AlternateEmail");var Q={},Yt=o;Object.defineProperty(Q,"__esModule",{value:!0});var ye=Q.default=void 0,Zt=Yt(r()),Jt=a;ye=Q.default=(0,Zt.default)((0,Jt.jsx)("path",{d:"M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"}),"BarChart");var U={},Xt=o;Object.defineProperty(U,"__esModule",{value:!0});var Se=U.default=void 0,ea=Xt(r()),ta=a;Se=U.default=(0,ea.default)((0,ta.jsx)("path",{d:"M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97z"}),"ThumbUpAlt");var Y={},aa=o;Object.defineProperty(Y,"__esModule",{value:!0});var ze=Y.default=void 0,ra=aa(r()),oa=a;ze=Y.default=(0,ra.default)((0,oa.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16"}),"MonetizationOn");var Z={},na=o;Object.defineProperty(Z,"__esModule",{value:!0});var He=Z.default=void 0,sa=na(r()),ua=a;He=Z.default=(0,sa.default)((0,ua.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"}),"Notifications");var J={},la=o;Object.defineProperty(J,"__esModule",{value:!0});var Re=J.default=void 0,ia=la(r()),ca=a;Re=J.default=(0,ia.default)((0,ca.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1z"}),"Lock");var X={},da=o;Object.defineProperty(X,"__esModule",{value:!0});var Ce=X.default=void 0,va=da(r()),ma=a;Ce=X.default=(0,va.default)((0,ma.jsx)("path",{d:"m22.7 19-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4"}),"Build");var ee={},ha=o;Object.defineProperty(ee,"__esModule",{value:!0});var Ve=ee.default=void 0,fa=ha(r()),pa=a;Ve=ee.default=(0,fa.default)((0,pa.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"}),"Chat");var te={},_a=o;Object.defineProperty(te,"__esModule",{value:!0});var De=te.default=void 0,$a=_a(r()),xa=a;De=te.default=(0,$a.default)((0,xa.jsx)("path",{d:"M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3m4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2"}),"RocketLaunch");const ce=()=>[{name:"Back to Dashboard",icon:e(L,{}),route:"dashboard"},{name:"Company Settings",icon:e(xe,{}),route:"company-settings",active:!0},{name:"Localization",icon:e(ge,{}),route:"employees"},{name:"Theme Settings",icon:e(je,{}),route:"employees"},{name:"Roles & Permissions",icon:e(Me,{}),route:"employees"},{name:"Email Settings",icon:e(be,{}),route:"employees"},{name:"Performance Settings",icon:e(ye,{}),route:"employees"},{name:"Approval Settings",icon:e(Se,{}),route:"employees"},{name:"Invoice Settings",icon:e(Xe,{}),route:"employees"},{name:"Salary Settings",icon:e(ze,{}),route:"employees"},{name:"Notifications",icon:e(He,{}),route:"employees"},{name:"Change Password",icon:e(Re,{}),route:"employees"},{name:"Leave Type",icon:e(Ce,{}),route:"employees"},{name:"ToxBox Settings",icon:e(Ve,{}),route:"employees"},{name:"Cron Settings",icon:e(De,{}),route:"employees"}],ga=({toggleSideBar:c,pages:x,url:f})=>{const s=me(),[i,m]=n.useState(null),[d,u]=n.useState(f),h=t=>{m(l=>l===t?null:t)},p=t=>{u(t),h(t)};return e(g,{sx:{p:2,height:"100%"},children:v(Ae,{children:[e(Ge,{}),e(Qe,{sx:{position:"absolute",zIndex:1,top:8,right:8,color:s.palette.text.primary},size:"large",onClick:c,children:e(Be,{})}),e(ue,{children:x.map(t=>t.subMenu?v("div",{children:[v(M,{button:!0,onClick:()=>p(t.name),sx:{backgroundColor:d===t.name?s.palette.action.selected:"transparent"},children:[e(b,{children:t.icon}),e(y,{primary:t.name}),t.subMenu?i===t.name?e(et,{}):e(tt,{}):null]}),t.subMenu&&e(Ue,{in:i===t.name,timeout:"auto",unmountOnExit:!0,children:e(ue,{component:"div",disablePadding:!0,children:t.subMenu.map(l=>e($,{as:"a",href:route(l.route),method:l.method||void 0,style:{alignItems:"center",color:s.palette.text.primary,textDecoration:"none"},children:v(M,{onClick:()=>u(l.name),sx:{pl:3,backgroundColor:d===l.name?s.palette.action.selected:"transparent"},button:!0,children:[e(b,{children:l.icon}),e(y,{primary:l.name})]})},l.name))})})]},t.name):e($,{as:"a",href:route(t.route),method:t.method||void 0,style:{alignItems:"center",color:s.palette.text.primary,textDecoration:"none"},children:v(M,{button:!0,onClick:()=>u(t.name),sx:{backgroundColor:d===t.name?s.palette.action.selected:"transparent"},children:[e(b,{children:t.icon}),e(y,{primary:t.name})]})},t.name))})]})})},ja=()=>e("div",{className:"spinner-container",children:e(Ee.Dots,{animation:"fade",background:"rgba(0, 0, 0, 0.5)",color:"#3498db",size:60})});function Sa({children:c}){const[x,f]=n.useState(),{auth:s}=S().props,i=s.roles.includes("admin"),[m,d]=n.useState(!1),[u,h]=n.useState(()=>localStorage.getItem("darkMode")==="true"),p=n.useRef(null),[t,l]=n.useState(0),{url:_}=S(),[ae,ke]=n.useState(_),[re,Ie]=n.useState(()=>/setting/i.test(_)?ce():le(i));n.useEffect(()=>{ke(_)},[_]),n.useEffect(()=>{Ie(/setting/i.test(ae)?ce():le(i))},[ae,i]),n.useEffect(()=>{localStorage.setItem("darkMode",u)},[u]);const Le=()=>{h(!u),console.log(u)},oe=()=>{d(!m)},ne=Te(u),Pe=Ye(ne.breakpoints.down("md"));return se.Inertia.on("start",()=>{f(!0)}),se.Inertia.on("finish",Oe=>{f(!1)}),v(Je,{theme:ne,children:[e(we,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e(Ze,{}),x&&e(ja,{}),v(g,{sx:{display:"flex",flexDirection:"row",height:"100vh"},children:[e(g,{sx:{display:{xs:"none",md:"block"},height:"100vh",width:m?280:0,transition:"width 0.3s ease-in-out",flexDirection:"column",overflow:"hidden"},children:e(ga,{url:_,pages:re,toggleSideBar:oe})}),v(g,{ref:p,sx:{pb:`${t}px`,display:"flex",flex:1,flexDirection:"column",height:"100vh",overflow:"auto"},children:[s.user&&e(Ne,{url:_,pages:re,darkMode:u,toggleDarkMode:Le,sideBarOpen:m,toggleSideBar:oe}),s.user&&e(We,{}),c,s.user&&Pe&&e(lt,{setBottomNavHeight:l,contentRef:p,auth:s})]})]}),e(Fe,{})]})}export{Sa as A};
