(this.webpackJsonpproject4=this.webpackJsonpproject4||[]).push([[0],{121:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(32),c=n.n(l),i=(n(86),n(87),n(72),n(88),n(25)),o=n(66),s=n(24),u=n(23),d=n(35),j=n(21),p=n(18),b={GoalPlanName:!0,DateFrom:!0,DateTo:!0},h=function(e){var t=void 0===e||null===e?"":e,n=""===t.replace(/ /g,"")?"":t;return Object(p.onValidate)(n,{name:"required",message:null})},x=n(71),m=Object(x.a)({row:{alignItems:"flex-start",display:"flex",width:"100%",justifyContent:"center","& .label":{color:"#0095FF",fontSize:"12px"}},colInput:{marginTop:"16.89px",display:"flex",width:"100%",flexDirection:"column",justifyContent:"space-between","& .DGN-UI-Dropdown-Form":{minHeight:"30px"}},rowInput:{alignItems:"center",marginTop:"18.89px",display:"flex",width:"100%",justifyContent:"space-between"},form:{overflow:"auto","&::-webkit-scrollbar":{display:"none"}}}),g=Object(x.a)({main:{"& svg":{cursor:"pointer"},"& .dx-header-row":{backgroundColor:"#F6F6F9",height:"40px"},"& .dx-data-row ":{height:"40px"},"& .dx-page":{visibility:"hidden"},"& .dx-pager":{display:"none"}},Datagrid:{margin:"64px 40px"},modal:{width:"696px",height:"914px"},btnAdd:{marginLeft:"17.83px",height:"70px",width:"89px"},PagingInfo:{marginTop:"28.82px"}}),O=function(e){return{GoalPlanID:e,GoalPlanName:"",DateFrom:"",DateTo:"",Description:"",Priority:1,IsPermissionEditProportion:0,IsPermissionCancel:0,IsReview:0,EvaluationExpireDate:"",NumEvaluationLevel:1,IsCopyResult:0,LabelLevel1:"",LabelLevel2:"",LabelLevel3:"",IsApproved:0,ApprovalBeginDate:""}},v=n(19);var f=function(e){return Object(v.jsx)(d.ModalFooter,{children:Object(v.jsx)(d.Button,{type:"submit",color:"info ",text:"L\u01b0u",viewType:"filled",size:"small",style:{marginLeft:"17.83px",height:"40px",width:"89px"},startIcon:"save",onClick:e.submit})})};var y=function(e){return Object(v.jsx)(d.ModalHeader,{children:"Th\xf4ng tin b\u1ea3ng m\u1ee5c ti\xeau"})},D=n(79),I=n.n(D),T=function(){return"_"+Math.random().toString(36).substr(2,9)};var P=function(e){var t=e.listPlans,n=e.popupForm,r=e.closePopup,l=e.addPlan,c=e.updatePlan,o=e.detail,p=m(),x=Object(a.useState)(O(T())),g=Object(i.a)(x,2),D=g[0],P=g[1];Object(a.useEffect)((function(){var e=Object.keys(o).length;P(e>0?o:O(T()))}),[o]),console.log(D);var w=Object(a.useState)(b),N=Object(i.a)(w,2),L=N[0],C=N[1],E=L,A=function(){M(),l(D)},S=function(e){M(),c(e,D)},M=function(){r(),C(E)},F=function(e,t){var n;switch(P(Object(u.a)(Object(u.a)({},D),{},Object(s.a)({},t,e))),t){case"GoalPlanName":case"DateFrom":case"DateTo":C(Object(u.a)(Object(u.a)({},L),{},(n={},Object(s.a)(n,t,h(e)),Object(s.a)(n,"value",Object(u.a)(Object(u.a)({},L.value),{},Object(s.a)({},t,e))),n)))}};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(d.Modal,{style:{width:"696px",height:"914px"},dragAnyWhere:!0,darkTheme:!1,open:n,onClose:M,children:[Object(v.jsx)(y,{}),Object(v.jsx)(d.ModalBody,{children:Object(v.jsxs)("div",{className:p.row,style:{marginTop:"25.89px",flexDirection:"column "},children:[Object(v.jsxs)("div",{className:p.colInput,children:[Object(v.jsx)(d.Label,{required:!0,children:"T\xean M\u1ee5c Ti\xean"}),Object(v.jsx)(d.TextInput,{value:""===D.GoalPlanName.replace(/ /g,"")?"":D.GoalPlanName,error:!0===L.GoalPlanName?"":L.GoalPlanName,onChange:function(e){return F(e.target.value,"GoalPlanName")},placeholder:"Nh\u1eadp",inputProps:{maxLength:500}})]}),Object(v.jsxs)("div",{className:p.colInput,children:[Object(v.jsx)(d.Label,{children:"M\xf4 t\u1ea3"}),Object(v.jsx)(d.TextInput,{value:D.Description,placeholder:"Nh\u1eadp",onChange:function(e){return F(e.target.value,"Description")},inputProps:{maxLength:1e3}})]}),Object(v.jsxs)("div",{className:p.rowInput,children:[Object(v.jsx)("div",{className:p.colInput,children:Object(v.jsx)(d.DatePicker,{value:D.DateFrom,error:!0===L.DateFrom?"":L.DateFrom,style:{marginBottom:"0px"},clearAble:!0,displayFormat:"DD/MM/YYYY",label:"Ng\xe0y b\u1eaft \u0111\u1ea7u",placeholder:"dd/MM/yyyy",returnFormat:"MM/DD/YYYY",onChange:function(e){return F(e.value,"DateFrom")}})}),Object(v.jsx)("div",{className:p.colInput,style:{marginLeft:"28px"},children:Object(v.jsx)(d.DatePicker,{disabled:""===D.DateFrom,value:D.DateTo,error:!0===L.DateTo?"":L.DateTo,style:{marginBottom:"0px"},actionIconAt:"end",clearAble:!0,min:I()(D.DateFrom).format("YYYY-MM-DD"),displayFormat:"DD/MM/YYYY",label:"Ng\xe0y k\u1ebft th\xfac",placeholder:"dd/MM/yyyy",returnFormat:"MM/DD/YYYY",onChange:function(e){return F(e.value,"DateTo")}})}),Object(v.jsxs)("div",{className:p.colInput,style:{marginLeft:"28px"},children:[Object(v.jsx)(d.Label,{children:"\u0110\u1ed9 \u01afu Ti\xean"}),Object(v.jsx)(d.NumberInput,{value:D.Priority,defaultValue:1,style:{margin:"auto"},placeholder:"Nh\u1eadp",onKeyUp:function(e){return F(e.target.value,"Priority")}})]})]}),Object(v.jsxs)("div",{className:p.rowInput,style:{width:"50%"},children:[Object(v.jsx)(d.Label,{children:"Cho ph\xe9p nh\xe2n vi\xean s\u1eeda tr\u1ecdng s\u1ed1"}),Object(v.jsx)(d.Toggle,{checked:1===D.IsPermissionEditProportion,onChange:function(e){return F(e.target.checked?1:0,"IsPermissionEditProportion")}})]}),Object(v.jsxs)("div",{className:p.rowInput,style:{width:"50%"},children:[Object(v.jsx)(d.Label,{children:"Cho ph\xe9p nh\xe2n vi\xean h\u1ee7y m\u1ee5c ti\xeau"}),Object(v.jsx)(d.Toggle,{checked:1===D.IsPermissionCancel,onChange:function(e){return F(e.target.checked?1:0,"IsPermissionCancel")}})]}),Object(v.jsxs)("div",{className:p.rowInput,style:{width:"auto"},children:[Object(v.jsx)(j.ArrowUp,{}),Object(v.jsx)(d.Label,{className:"label",children:"Th\xf4ng tin review"})]}),Object(v.jsxs)("div",{className:p.rowInput,style:{width:"70%"},children:[Object(v.jsxs)("div",{className:p.rowInput,style:{marginTop:"0px"},children:[Object(v.jsx)(d.Label,{children:"Review m\u1ee5c ti\xeau"}),Object(v.jsx)("div",{style:{marginRight:"28.48px"},children:Object(v.jsx)(d.Toggle,{checked:1===D.IsReview,onChange:function(e){return F(e.target.checked?1:0,"IsReview")}})})]}),Object(v.jsx)("div",{className:p.colInput,style:{marginTop:"0px"},children:Object(v.jsx)(d.DatePicker,{value:D.EvaluationExpireDate,style:{marginBottom:"0px"},clearAble:!0,disabled:1!==D.IsReview,label:"H\u1ea1n review cu\u1ed1i",placeholder:"dd/MM/yyyy",returnFormat:"MM/DD/YYYY",displayFormat:"DD/MM/YYYY",onChange:function(e){return F(e.value,"EvaluationExpireDate")}})})]}),Object(v.jsxs)("div",{className:p.rowInput,style:{width:"85%"},children:[Object(v.jsx)("div",{className:p.colInput,children:Object(v.jsx)(d.Dropdown,{disabled:1!==D.IsReview,dataSource:[{id:"1",name:"Item"},{id:"2",name:"Item"},{id:"3",name:"Item"}],style:{width:"159px"},displayExpr:"{id} - {name}",label:"S\u1ed1 c\u1ea5p review",placeholder:"Text Dang Nhap",viewType:"outlined",itemMultipleSize:"small",valueObjectDefault:{id:"1",name:"Item"},value:D.NumEvaluationLevel.toString(),onChange:function(e){return F(e.value,"NumEvaluationLevel")}})}),Object(v.jsxs)("div",{className:p.rowInput,children:[Object(v.jsx)(d.Label,{children:"Cho ph\xe9p sap ch\xe9p k\u1ebft qu\u1ea3 c\u1ea5p tr\u01b0\u1edbc"}),Object(v.jsx)("div",{children:Object(v.jsx)(d.Toggle,{checked:1===D.IsCopyResult,disabled:1!==D.IsReview,onChange:function(e){return F(e.target.checked?1:0,"IsCopyResult")}})})]})]}),Object(v.jsxs)("div",{className:p.colInput,children:[Object(v.jsx)(d.Label,{children:"Label c\u1ea5p 1"}),Object(v.jsx)(d.TextInput,{value:D.LabelLevel1,disabled:0===D.IsReview||1!==parseInt(D.NumEvaluationLevel),placeholder:"Nh\u1eadp",inputProps:{maxLength:250},onChange:function(e){return F(e.target.value,"LabelLevel1")}})]}),Object(v.jsxs)("div",{className:p.colInput,children:[Object(v.jsx)(d.Label,{children:"Label c\u1ea5p 2"}),Object(v.jsx)(d.TextInput,{value:D.LabelLevel2,disabled:0===D.IsReview||2!==parseInt(D.NumEvaluationLevel),onChange:function(e){return F(e.target.value,"LabelLevel2")},placeholder:"Nh\u1eadp",inputProps:{maxLength:250}})]}),Object(v.jsxs)("div",{className:p.colInput,children:[Object(v.jsx)(d.Label,{children:"Label c\u1ea5p 3"}),Object(v.jsx)(d.TextInput,{value:D.LabelLevel3,disabled:0===D.IsReview||3!==parseInt(D.NumEvaluationLevel),onChange:function(e){return F(e.target.value,"LabelLevel3")},placeholder:"Nh\u1eadp",inputProps:{maxLength:250}})]}),Object(v.jsxs)("div",{className:p.rowInput,style:{width:"auto"},children:[Object(v.jsx)(j.ArrowUp,{}),Object(v.jsx)(d.Label,{className:"label",children:"Th\xf4ng tin x\xe9t duy\u1ec7t"})]}),Object(v.jsxs)("div",{className:p.rowInput,children:[Object(v.jsxs)("div",{className:p.rowInput,style:{marginTop:"0px"},children:[Object(v.jsx)(d.Label,{children:"Xem x\xe9t duy\u1ec7t b\u1ea3ng m\u1ee5c ti\xeau"}),Object(v.jsx)("div",{style:{marginRight:"28.48px"},children:Object(v.jsx)(d.Toggle,{checked:1===D.IsApproved,onChange:function(e){return F(e.target.checked?1:0,"IsApproved")}})})]}),Object(v.jsx)("div",{className:p.colInput,style:{marginTop:"0px"},children:Object(v.jsx)(d.DatePicker,{value:D.ApprovalBeginDate,returnFormat:"MM/DD/YYYY",style:{marginBottom:"0px"},clearAble:!0,label:"Ng\xe0y b\u1eaft \u0111\u1ea7u x\xe9t duy\u1ec7t",placeholder:"DDDD, dd/MMMM/yyyy",displayFormat:"DD/MM/YYYY",onChange:function(e){return F(e.value,"ApprovalBeginDate")}})})]})]})}),Object(v.jsx)(f,{submit:function(e){e.preventDefault();var n={};Object.keys(L).forEach((function(e){n=Object(u.a)(Object(u.a)(Object(u.a)({},L),n),{},Object(s.a)({},e,h(D[e])))})),C(n);var a=Object.values(n);if(!1===a.filter((function(e,t){return t<a.length-1})).some((function(e){return!0!==e}))){var r=t.findIndex((function(e){return e.GoalPlanID===D.GoalPlanID}));-1===r?A():S(r)}}})]})})};function w(e){var t=e.popupDelete,n=e.deleteTarget,a=e.closePopup,r=t.id,l=function(){n(r),a()};return Object(v.jsxs)(v.Fragment,{children:[" ",Object(v.jsx)(d.DangerPopup,{open:t.open,timing:3,fullScreen:!0,warningDescription:"B\u1ea1n C\xf3 Ch\u1eafc X\xf3a Target ".concat(r," N\xe0y"),onClose:a,onCancel:l,onConfirm:l,pressESCToClose:!0})]})}var N=function(e){return Object(v.jsxs)("div",{style:{display:"flex",margin:"0 41.17px",alignItems:"center",justifyContent:"flex-start"},children:[Object(v.jsx)("h4",{style:{color:"#151A30"},children:"DANH S\xc1CH B\u1ea2NG M\u1ee4C TI\xcaU"}),Object(v.jsx)(d.Button,{color:"primary",text:"Th\xeam",viewType:"filled",size:"small",style:{marginLeft:"17.83px",height:"40px",width:"114px"},startIcon:"add",onClick:function(){e.setPopupForm(),e.setTextNotify("Th\xeam")},defaultOpen:!1})]})};function L(e){return Object(v.jsx)("div",{style:{opacity:"0.7",background:"white",position:"fixed",zIndex:"999999",width:"100%",height:"100%"},children:Object(v.jsx)(d.CircularProgress,{color:"#123f5f",style:{position:"fixed",margin:"auto",top:0,right:0,left:0,bottom:0},size:"md"})})}var C=function(e){var t=e.notify;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(d.Alert,{size:"medium",style:{width:"50%",margin:"auto"},color:"success",autoDisappear:!0,horizontal:"center",duration:5,onClose:function(){},text:"".concat(t," th\xe0nh c\xf4ng"),vertical:"bottom"})})},E=n(48);var A={getDatasRequest:function(){return{type:"GET_DATA_REQUEST"}},deleteTarget:function(e){return function(e){return{type:"DELETE_ITEM_TARGET",id:e}}(e)},addPlan:function(e){return function(e){return{type:"ADD_PLAN",newPlan:e}}(e)},updatePlan:function(e,t){return function(e,t){return{type:"UPDATE_PLAN",newPlan:t,index:e}}(e,t)}},S=Object(o.b)((function(e){return{listTarget:e.goalPlan,loading:e.loading,alertActive:e.alert}}),A)((function(e){var t=e.getDatasRequest,n=e.loading,r=e.listTarget,l=e.alertActive;console.log(l),Object(a.useEffect)((function(){t()}),[t]);var c=g(),o=Object(a.useState)(!1),s=Object(i.a)(o,2),u=s[0],p=s[1],b=Object(a.useState)({open:!1,id:""}),h=Object(i.a)(b,2),x=h[0],m=h[1],O=Object(a.useState)(10),f=Object(i.a)(O,2),y=f[0],D=f[1],I=Object(a.useState)(0),T=Object(i.a)(I,2),A=T[0],S=T[1],M=Object(a.useState)({}),F=Object(i.a)(M,2),R=F[0],Y=F[1],G=function(){Y({}),p(!1),m({open:!1,id:""})},k=function(e,t){var n=e.row.data.GoalPlanID;return 1===t?Object(v.jsx)("div",{style:{display:"inline"},onClick:function(){return function(e){H("C\u1eadp Nh\u1eadt ID: ".concat(e));var t=r.filter((function(t){return t.GoalPlanID===e}));p(!0),Y(t[0])}(n)},children:Object(v.jsx)(j.Edit,{})}):Object(v.jsx)("div",{style:{display:"inline"},onClick:function(){return function(e){H("\u0110\xe3 X\xf3a ID : ".concat(e)),m({open:!0,id:e})}(n)},children:Object(v.jsx)(j.Delete,{})})},_=Object(a.useState)(""),B=Object(i.a)(_,2),U=B[0],H=B[1],z=function(e){return Object(v.jsx)("span",{style:{fontSize:13,color:"black",fontWeight:"bold",marginBottom:"40px"},children:e})};return Object(v.jsxs)("div",{className:c.main,children:[n?Object(v.jsx)(L,{}):"",Object(v.jsxs)("div",{style:{margin:"auto",border:"none"},children:[Object(v.jsx)(N,{setPopupForm:function(){p(!0)},setTextNotify:function(e){H(e)}}),Object(v.jsx)(d.Divider,{}),Object(v.jsxs)("div",{className:c.Datagrid,children:[Object(v.jsxs)(E.DataGrid,{height:245,rowAlternationEnabled:!0,dataSource:r,showBorders:!1,showColumnLines:!1,children:[Object(v.jsx)(E.Column,{alignment:"left",calculateCellValue:function(t){return e.listTarget.indexOf(t)},width:50,headerCellRender:function(){return z("STT")}}),Object(v.jsx)(E.Column,{alignment:"left",caption:"Name",width:200,dataField:"GoalPlanName",headerCellRender:function(){return z("T\xcaN H\u1ea0NG M\u1ee4C TI\xcaU BI\u1ec2U")}}),Object(v.jsx)(E.Column,{alignment:"left",width:400,dataField:"Description",headerCellRender:function(){return z("M\xd4 T\u1ea2")}}),Object(v.jsx)(E.Column,{alignment:"left",width:200,calculateCellValue:function(e){return null===e.DateFrom?"":e.DateFrom+" - "+e.DateTo},headerCellRender:function(){return z("KHO\u1ea2NG TH\u1edcI GIAN")}}),Object(v.jsx)(E.Column,{alignment:"left",width:200,dataField:"Priority",headerCellRender:function(){return z("\u0110\u1ed8 \u01afU TI\xcaN")}}),Object(v.jsxs)(E.Column,{alignment:"left",width:600,type:"buttons",children:[Object(v.jsx)(E.Button,{render:function(e){return k(e,1)}}),Object(v.jsx)(d.Divider,{direction:"vertical"}),Object(v.jsx)(E.Button,{render:function(e){return k(e,2)}})]}),Object(v.jsx)(E.Paging,{defaultPageSize:10}),Object(v.jsx)(E.Paging,{pageIndex:A,pageSize:y}),Object(v.jsx)(E.Scrolling,{mode:"virtual"}),Object(v.jsx)(E.Scrolling,{rowRenderingMode:"virtual"})]}),Object(v.jsx)(d.PagingInfo,{className:c.PagingInfo,fullWidth:!0,listItemsPerPage:[10,20,40,50],onChangePage:function(e){return S(e-1)},totalItems:e.listTarget.length,onChangeItemsPerPage:function(e){return D(e)}})]})]}),Object(v.jsx)(P,{popupForm:u,closePopup:G,submitForm:e.submitForm,addPlan:e.addPlan,updatePlan:e.updatePlan,listPlans:r,detail:R}),Object(v.jsx)(w,{closePopup:G,popupDelete:x,deleteTarget:e.deleteTarget}),l?Object(v.jsx)(C,{notify:U}):""]})})),M=n(54),F=n(81),R=function(){var e=[];return Array(50).fill(0).forEach((function(t,n){e.push({GoalPlanID:T(),GoalPlanName:"T\xean m\u1ee5c ti\xeau "+n,DateFrom:"06/15/2021",DateTo:"06/20/2021",Description:"\u0110\xe2y l\xe0 m\xf4 t\u1ea3 b\u1ea3ng m\u1ee5c ti\xeau n\xe0y",Priority:n%2===0?2:1,IsPermissionEditProportion:1,IsPermissionCancel:1,IsReview:1,EvaluationExpireDate:"01/01/2020 ",NumEvaluationLevel:1,IsCopyResult:1,LabelLevel1:"Level1",LabelLevel2:"Level2",LabelLevel3:"Level3",IsApproved:1,ApprovalBeginDate:"01/01/2020"})})),e},Y=[],G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_DATA_TARGET":return localStorage&&localStorage.getItem("plan")||localStorage.setItem("plan",JSON.stringify(R())),JSON.parse(localStorage.getItem("plan"));case"DELETE_ITEM_TARGET":var n=e.filter((function(e){return e.GoalPlanID!==t.id}));return localStorage.setItem("plan",JSON.stringify(n)),n;case"ADD_PLAN":var a=e.push(t.newPlan);return localStorage.setItem("plan",JSON.stringify(e)),a;case"UPDATE_PLAN":var r=e;return r[t.index]=t.newPlan,localStorage.setItem("plan",JSON.stringify(r)),r;default:return e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_LOADING":return!0;case"HIDE_LOADING":return!1;default:return e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ALERT_SUCCESS":return!0;case"HIDE_ALERT":return!1;default:return e}},B=Object(M.b)({goalPlan:G,loading:k,alert:_}),U=n(46),H=n.n(U),z=n(49),J=H.a.mark(V),q=H.a.mark(X),W=H.a.mark(K);function V(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Request Data");case 1:return e.next=4,Object(z.d)("GET_DATA_REQUEST");case 4:return e.next=6,Object(z.a)(X);case 6:return e.next=8,Object(z.e)("ADD_PLAN",K);case 8:return e.next=10,Object(z.e)("DELETE_ITEM_TARGET",K);case 10:return e.next=12,Object(z.e)("UPDATE_PLAN",K);case 12:e.next=1;break;case 14:case"end":return e.stop()}}),J)}function X(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.c)({type:"SHOW_LOADING"});case 2:return e.next=4,Object(z.b)(2e3);case 4:return e.next=6,Object(z.c)({type:"LOAD_DATA_TARGET"});case 6:return e.next=8,Object(z.c)({type:"HIDE_LOADING"});case 8:console.log("\u0111\xe3 c\u1eadp nh\u1eadt d\u1eef li\u1ec7u");case 9:case"end":return e.stop()}}),q)}function K(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)(X);case 2:return console.log("alaoalo"),e.next=5,Object(z.c)({type:"ALERT_SUCCESS"});case 5:return e.next=7,Object(z.b)(1e3);case 7:return e.next=9,Object(z.c)({type:"HIDE_ALERT"});case 9:case"end":return e.stop()}}),W)}var Q=Object(F.a)(),Z=Object(M.d)(B,Object(M.a)(Q));Q.run(V);var $=function(){return Object(v.jsx)(o.a,{store:Z,children:Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(S,{})})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),l(e),c(e)}))};c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)($,{})}),document.getElementById("root")),ee()},86:function(e,t,n){},88:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.74c0c2da.chunk.js.map