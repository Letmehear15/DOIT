(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{210:function(e,t,a){e.exports=a(335)},334:function(e,t,a){},335:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),i=a(14),l=a(157),s=a(158),u=a(97),d=a.n(u),m=function(e){var t=e.input,a=e.type,n=e.placeholder,o=e.meta,c=o.touched,i=o.error,l=o.active,s=c&&i&&!l;return r.a.createElement("input",Object.assign({className:"".concat(d.a.input," ").concat(s?d.a.error:""," ").concat(l?d.a.active:"")},t,{type:a,placeholder:n}))},p=function(e){if(!e)return"The field is required"},f=a(16),h=a.n(f),g=a(28),b=a(15),E=a(69),v=a(42),x=a.n(v),O="https://alpha.kts.vspj.cz/~reshetov/DOIT",y=function(e){var t=e.login,a=e.password;return x.a.post("".concat(O,"/logon"),{login:t,password:a}).then((function(e){return e.data}))},j=function(e){var t=e.login,a=e.password,n=e.role;return x.a.post(O+"/signup ",{login:t,password:a,role:n})},w=function(){return x.a.get("".concat(O,"/articles")).then((function(e){return e.data}))},k=function(e){var t=e.authorId,a=e.descr,n=e.title;return x.a.post("".concat(O,"/articles/new"),{autor:t,title:n,descr:a})},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return x.a.get("".concat(O,"/article/").concat(e)).then((function(e){return e.data}))},S=function(e){return x.a.post("".concat(O,"/articles"),{id:e})},N=function(e,t,a){return x.a.post("".concat(O,"/article/").concat(e,"/comment/new"),{id:e,text:a,autor:t}).then((function(e){return e.data}))},T=function(e){var t=e.title,a=e.descr,n=e.id;return x.a.post("".concat(O,"/article/").concat(n,"/update"),{title:t,descr:a}).then((function(e){return e.data}))},I={authorId:null,login:null,password:null,isAuth:!1,role:"",isAuthor:!1,isReader:!1,isEditor:!1},C=function(e){return{type:"SETAUTH",payLoad:e}},B=function(){return localStorage.removeItem("id"),{type:"SETLOGOUT"}},R=function(e){return function(){var t=Object(g.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:(n=t.sent).isAuth?(localStorage.setItem("login","".concat(e.login)),localStorage.setItem("password","".concat(e.password)),r=n.id?n.id:null,a(C({isAuth:!0,login:e.login,password:e.password,role:n.role,isAuthor:n.isAuthor,isReader:n.isReader,isEditor:n.isEditor,authorId:r}))):a(Object(E.a)("login",{_error:"Wrong login or Password"}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=a(34),L=a.n(_),D=a(19),M=a(24),U=a(368),W=Object(U.a)({formBtn:{display:"block",width:"100px",height:"30px",border:"none",backgroundColor:"rgb(117, 151, 182)",boxShadow:"2px 2px 4px #000",color:"#fff",cursor:"pointer",outline:"none",marginTop:"10px"}}),z=Object(s.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error;return r.a.createElement("form",{className:L.a.form,onSubmit:t},r.a.createElement(l.a,{name:"login",component:m,type:"text",placeholder:"Login",validate:[p]}),r.a.createElement(l.a,{name:"password",component:m,type:"password",placeholder:"Password",validate:[p]}),r.a.createElement("button",{className:L.a.formBtn},"Login"),a?r.a.createElement("span",{className:L.a.commonError},"Wrong login or password"):null)})),F=Object(i.b)((function(e){return{isAuth:e.auth.isAuth}}),{getAuth:R})((function(e){var t=W();return e.isAuth?r.a.createElement(D.a,{to:"/reader"}):r.a.createElement("div",{style:{height:"100vh",paddingTop:"100px"}},r.a.createElement("div",{className:L.a.formWrapper},r.a.createElement("h1",{className:L.a.title},"Login"),r.a.createElement(z,{onSubmit:function(t){e.getAuth(t)}}),r.a.createElement(M.b,{to:"/register"},r.a.createElement("button",{className:t.formBtn},"Register"))))})),G=a(33),P=a(173),V=a(389),K=a(6),$=a(372),q=a(373),H=a(375),X={articles:[],fullArticle:{},comments:[],isDark:!1,isLoad:!0},Y=function(e){return{type:"SETARTICLES",payload:e}},J=function(e){return{type:"SETFULLARTICLE",fullArticle:e}},Q=function(e){return{type:"SETCOMMENT",comments:e}},Z=function(e){return{type:"SETLOAD",prop:e}},ee=function(){return{type:"SETDARK"}},te=Z,ae=function(){return function(){var e=Object(g.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:a=e.sent,t(Y(a.articles));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ne=function(e){return function(){var t=Object(g.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:n=t.sent,r=n.articles.filter((function(t){return t.id===+e})),a(Q(r[0].comments));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},re=a(387),oe=a(374),ce=Object(U.a)((function(e){return Object(V.a)({root:{flexGrow:1},login:{fontSize:"20px"},nav:{display:"flex",justifyContent:"space-between"},link:{color:"#fff",textDecoration:"none"}})})),ie=Object(K.a)((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,a=Object(P.a)(e,["classes"]);return r.a.createElement(re.a,Object.assign({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},a))})),le=Object(i.b)((function(e){return{isDark:e.articles.isDark}}),{logOut:B,setDarkMode:ee})((function(e){var t=ce();return r.a.createElement("div",{className:t.root},r.a.createElement($.a,{position:"static"},r.a.createElement(q.a,{className:t.nav},r.a.createElement("div",{className:t.login},e.login," (",e.role,")"),r.a.createElement(oe.a,{control:r.a.createElement(ie,{checked:e.isDark,onChange:e.setDarkMode,name:"checkedB"}),label:"Change color mode"}),r.a.createElement("div",null,r.a.createElement(M.b,{to:"/login",onClick:function(){e.logOut()},className:t.link},r.a.createElement(H.a,{onClick:function(){localStorage.removeItem("login"),localStorage.removeItem("password")},color:"inherit"},"Exit"))))))})),se=a(376),ue=a(377),de=a(379),me=a(378),pe=a(336),fe=a(94),he=a.n(fe),ge=Object(U.a)((function(e){return Object(V.a)({root:{width:"60%",marginTop:"30px",display:"flex",flexDirection:"column",justifyContent:"space-between",paddingBottom:"10px"},media:{height:140},icons:{display:"flex",justifyContent:"space-between",marginLeft:"10px",padding:0,paddingTop:"10px"},descr:{overflow:"hidden",height:"120px"},link:{textDecoration:"none",color:e.palette.primary.light},author:{color:"grey",display:"block",fontSize:"16px",marginBottom:"20px"}})}));function be(e){var t=ge(),a=Object(i.c)();return r.a.createElement(se.a,{className:t.root},r.a.createElement(M.b,{to:"/article/".concat(e.id),className:t.link,onClick:function(){return a(te(!0))}},r.a.createElement(ue.a,null,r.a.createElement(me.a,{className:t.media,image:he.a}),r.a.createElement(de.a,null,r.a.createElement(pe.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),r.a.createElement("span",{className:t.author},"Author: ",e.author.login),r.a.createElement(pe.a,{className:t.descr,variant:"body2",color:"textSecondary",component:"p"},e.descr)))))}var Ee=a(167),ve=a.n(Ee),xe=a(388),Oe=a(381),ye=a(385),je=a(384),we=a(47),ke=Object(U.a)((function(e){return{paper:{position:"absolute",width:"600px",backgroundColor:e.palette.background.paper,border:"none",left:"50%",top:"50%",transform:"translate(-50%, -50%)",padding:"20px",display:"flex",flexDirection:"column",justifyContent:"center"},paperMedia:{width:"240px"},modalTitle:{marginBottom:"20px"},readerInput:{display:"none"},btns:{width:"100%",display:"flex",justifyContent:"space-between",marginTop:20},fileName:{display:"block",marginBottom:"20px"},title:{marginBottom:20}}})),Ae=function(e){var t=ke(),a=Object(we.a)(),o=Object(n.useState)(""),c=Object(G.a)(o,2),i=c[0],l=c[1],s=Object(n.useState)(""),u=Object(G.a)(s,2),d=u[0],m=u[1];return r.a.createElement(ye.a,{open:e.open,onClose:e.handleModal,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.a.createElement("form",{className:"".concat(t.paper)},r.a.createElement("h2",{style:{color:a.palette.primary.light},className:t.modalTitle},"New article"),r.a.createElement(je.a,{label:"Title",className:t.title,value:i,onChange:function(e){return l(e.target.value)}}),r.a.createElement(je.a,{id:"outlined-multiline-flexible",label:"Description",multiline:!0,rows:15,variant:"outlined",value:d,onChange:function(e){return m(e.target.value)}}),r.a.createElement("div",{className:t.btns},r.a.createElement(H.a,{variant:"contained",color:"primary",disabled:!i||!d,onClick:function(){return e.onSave({title:i,descr:d})}},"Save"),r.a.createElement(H.a,{variant:"contained",color:"secondary",onClick:e.handleModal},"Cancel"))))},Se=Object(U.a)({btn:{position:"fixed",bottom:"20px",right:"30px"}}),Ne=function(e){var t=e.login,a=e.role,o=e.articles,c=(e.isEditor,e.isAuthor),i=(e.isReader,e.authorId),l=e.postArticle,s=Se(),u=Object(n.useState)(!1),d=Object(G.a)(u,2),m=d[0],p=d[1],f=function(){p(!m)};return r.a.createElement("div",null,r.a.createElement(le,{login:t,role:a}),r.a.createElement("div",null,o.map((function(e){return r.a.createElement("div",{className:"container",key:e.id},r.a.createElement(be,{descr:e.descr,name:e.title,id:e.id,author:e.autor,login:t}))}))),c&&r.a.createElement(xe.a,{onClick:f,title:"Add","aria-label":"add",className:s.btn},r.a.createElement(Oe.a,{color:"primary"},r.a.createElement(ve.a,null))),m&&r.a.createElement(Ae,{handleModal:f,open:m,onSave:function(e){var t=e.title,a=e.descr;l({title:t,descr:a,authorId:i}),p(!1)}}))},Te=Object(i.b)((function(e){return{role:e.auth.role,login:e.auth.login,articles:e.articles.articles,isAuthor:e.auth.isAuthor,isReader:e.auth.isReader,isEditor:e.auth.isEditor,authorId:e.auth.authorId,isAuth:e.auth.isAuth}}),{getArticles:ae,postArticle:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e);case 2:a(ae());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,a=e.role,o=e.login,c=e.articles,i=e.isEditor,l=e.isAuthor,s=e.isReader,u=e.getArticles,d=e.postArticle,m=e.authorId;return Object(n.useEffect)((function(){u()}),[]),t?r.a.createElement("div",null,r.a.createElement(Ne,{articles:c,role:a,login:o,isEditor:i,isAuthor:l,isReader:s,authorId:m,postArticle:d})):r.a.createElement(D.a,{to:"/login"})})),Ie=a(160),Ce={isOk:!1},Be=function(){return{type:"SETREGISTER"}},Re=Object(U.a)({select:{width:"200px",marginBottom:"20px"},formBtn:{display:"block",width:"100px",height:"30px",border:"none",backgroundColor:"rgb(117, 151, 182)",boxShadow:"2px 2px 4px #000",color:"#fff",cursor:"pointer",outline:"none",marginTop:"10px"}}),_e=Object(s.a)({form:"register"})((function(e){var t=e.handleSubmit,a=Re();return r.a.createElement("form",{className:L.a.form,onSubmit:t},r.a.createElement(l.a,{name:"login",component:m,type:"text",placeholder:"Login",validate:[p]}),r.a.createElement(l.a,{name:"password",component:m,type:"password",placeholder:"Password",validate:[p]}),r.a.createElement(l.a,{name:"role",component:"select",className:a.select},r.a.createElement("option",null),r.a.createElement("option",{value:"author"},"author"),r.a.createElement("option",{value:"reader"},"reader"),r.a.createElement("option",{value:"editor"},"editor")),r.a.createElement("button",{className:L.a.formBtn},"Register"))})),Le=Object(Ie.a)("register"),De=Object(i.b)((function(e){var t=Le(e,"login"),a=Le(e,"password"),n=Le(e,"role");return{isOk:e.register.isOk,login:t,password:a,role:n}}),{toRegister:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:t.sent&&a(Be());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Re(),a=e.login,n=e.password,o=e.role,c=e.isOk;return r.a.createElement("div",{style:{height:"100vh",paddingTop:"100px"}},r.a.createElement("div",{className:L.a.formWrapper},r.a.createElement("h1",{className:L.a.title},"Register"),r.a.createElement(_e,{onSubmit:function(){e.toRegister({login:a,password:n,role:o})}}),r.a.createElement(M.b,{to:"/login"},r.a.createElement("button",{className:t.formBtn},"Back")),c&&r.a.createElement("div",null," YOU REGISTERED ")))})),Me=a(176),Ue=a(169),We=a.n(Ue),ze=a(170),Fe=a.n(ze),Ge=a(382),Pe=a(168),Ve=a.n(Pe),Ke=Object(U.a)({wrapper:{padding:"10px"},comment:{marginBottom:"10px",borderBottom:"1px solid #e3e3e3",padding:"5px"},comments:{marginBottom:"10px",fontWeight:"bold"},inputBlock:{position:"relative",width:"100%",marginTop:"30px"},input:{width:"90%"},icon:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)"},author:{display:"block",color:"grey"}}),$e=function(e){var t=Ke(),a=Object(n.useState)(""),o=Object(G.a)(a,2),c=o[0],l=o[1],s=Object(i.c)(),u=Object(i.d)((function(e){return e.articles.comments}));Object(n.useEffect)((function(){s(ne(e.id))}),[]);var d=function(e,t,a){l(""),s(function(e,t,a){return function(){var n=Object(g.a)(h.a.mark((function n(r){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N(e,t,a);case 2:r(ne(e));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(e,t,a))},m=u.map((function(e){return r.a.createElement("div",{key:e.id,className:t.comment}," ",r.a.createElement("span",{className:t.author},e.autor)," ",e.text)}));return r.a.createElement("div",{className:t.wrapper},r.a.createElement("div",{className:t.comments},"Comments"),m,r.a.createElement("div",{className:t.inputBlock},r.a.createElement(je.a,{id:"standard-basic",label:"Comment",onChange:function(e){return l(e.target.value)},className:t.input,value:c}),r.a.createElement(Ve.a,{className:t.icon,onClick:function(){return d(e.id,e.login,c)}})))},qe=Object(U.a)({paper:{marginTop:"20px",padding:0,paddingBottom:"10px",display:"flex",flexDirection:"column"},media:{height:140},icons:{display:"flex",justifyContent:"space-between"},img:{width:"1200px",height:"200px",backgroundImage:"url(".concat(he.a,")"),backgroundSize:"cover",backgroundPosition:"center"},btn:{display:"block",margin:"20px auto"},link:{textDecoration:"none",color:"#fff"},author:{color:"grey",display:"block",fontSize:"16px",marginBottom:"20px"},descr:{},helpIcon:{display:"flex",width:"100%",justifyContent:"flex-start",paddingLeft:"10px"},deleteIcon:{display:"block",marginRight:"10px"},comments:{overflow:"scroll",height:300},descrInput:{width:"60%"}}),He=Object(i.b)((function(e){return{role:e.auth.role,login:e.auth.login,article:e.articles.fullArticle,isLoad:e.articles.isLoad}}),{getFullArticle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var t=Object(g.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e);case 2:n=t.sent,a(J({title:n.title,descr:n.description,id:n.id,comments:n.comments,author:n.author})),a(Z(!1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteArticle:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:a(ae());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.role,o=e.getFullArticle,c=e.article,l=e.deleteArticle,s=e.isLoad,u=Object(D.f)().id,d=qe(),m=Object(n.useState)(!1),p=Object(G.a)(m,2),f=p[0],b=p[1],E=Object(n.useState)(""),v=Object(G.a)(E,2),x=v[0],O=v[1],y=Object(n.useState)(""),j=Object(G.a)(y,2),w=j[0],k=j[1],A=Object(i.c)();if(Object(n.useEffect)((function(){o(u),O(c.title),k(c.descr)}),[c.title,c.descr]),s)return r.a.createElement(Ge.a,null);var S=t===c.author.login;return r.a.createElement("div",{style:{paddingBottom:10,minHeight:"100vh"}},r.a.createElement(le,{login:t,role:a}),r.a.createElement(Me.a,{elevation:3,className:"container ".concat(d.paper)},r.a.createElement("div",{className:d.img}),r.a.createElement("div",{style:{marginBottom:40}},r.a.createElement(de.a,null,f?r.a.createElement(je.a,{label:"title",value:x,onChange:function(e){return O(e.target.value)}}):r.a.createElement(pe.a,{gutterBottom:!0,variant:"h5",component:"h2"},c.title),r.a.createElement("span",{className:d.author},"Author: ",c.author.login),f?r.a.createElement(je.a,{id:"outlined-multiline-flexible",label:"Description",multiline:!0,rows:15,variant:"outlined",value:w,onChange:function(e){return k(e.target.value)},className:d.descrInput}):r.a.createElement(pe.a,{className:d.descr,variant:"body2",color:"textSecondary",component:"p"},c.descr)),S&&r.a.createElement("div",{className:d.helpIcon},r.a.createElement(We.a,{onClick:function(){l(u)},className:d.deleteIcon,color:"secondary",style:{cursor:"pointer"}}),r.a.createElement(Fe.a,{onClick:function(){var e;b(!f),f&&A((e={id:u,title:x,descr:w},function(){var t=Object(g.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Z(!0)),t.next=3,T(e);case 3:return t.sent,a(Z(!1)),t.abrupt("return");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},color:"primary",style:{cursor:"pointer"}}))),r.a.createElement("div",{className:d.comments},r.a.createElement($e,{id:u,login:t}))),r.a.createElement(M.b,{className:d.link,to:"/reader"},r.a.createElement(H.a,{variant:"contained",color:"primary",className:d.btn},"Back")))})),Xe=a(172),Ye=a(383),Je=Object(i.b)((function(e){return{isAuth:e.auth.isAuth,role:e.auth.role,darkMode:e.articles.isDark}}),{getInit:function(){return function(){var e=Object(g.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=localStorage.getItem("login"),(n=localStorage.getItem("password"))&&a&&t(R({login:a,password:n}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){Object(n.useEffect)((function(){e.getInit()}),[]);var t=Object(Xe.a)({palette:{type:e.darkMode?"dark":"light"}});return r.a.createElement(Ye.a,{theme:t},r.a.createElement(Me.a,null,r.a.createElement(D.b,{path:"/reader",component:function(){return r.a.createElement(Te,null)}}),r.a.createElement(D.b,{exact:!0,path:"/login",component:function(){return r.a.createElement(F,null)}}),r.a.createElement(D.b,{path:"/register",component:function(){return r.a.createElement(De,null)}}),r.a.createElement(D.b,{path:"/article/:id"},r.a.createElement(He,null)),e.isAuth?null:r.a.createElement(D.a,{to:"/login"}),r.a.createElement(D.a,{from:"/",to:"/login"})))})),Qe=a(20),Ze=a(171),et=a(159),tt=Object(Qe.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETAUTH":return Object(b.a)(Object(b.a)(Object(b.a)({},e),t.payLoad),{},{authorId:t.payLoad.authorId,isAuthor:t.payLoad.isAuthor,isReader:t.payLoad.isReader,isEditor:t.payLoad.isEditor});case"SETLOGOUT":return Object(b.a)(Object(b.a)({},e),{},{login:null,password:null,isAuth:!1,role:"",isAuthor:!1,isReader:!1,isEditor:!1});default:return e}},articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETARTICLES":return Object(b.a)(Object(b.a)({},e),{},{articles:t.payload});case"SETFULLARTICLE":return Object(b.a)(Object(b.a)({},e),{},{fullArticle:t.fullArticle});case"SETCOMMENT":return Object(b.a)(Object(b.a)({},e),{},{comments:t.comments});case"EDITARTICLE":return Object(b.a)(Object(b.a)({},e),{},{fullArticle:Object(b.a)(Object(b.a)({},e.fullArticle),t.payload)});case"SETLOAD":return Object(b.a)(Object(b.a)({},e),{},{isLoad:t.prop});case"SETDARK":return Object(b.a)(Object(b.a)({},e),{},{isDark:!e.isDark});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETREGISTER":return Object(b.a)(Object(b.a)({},e),{},{isOk:!0});default:return e}},form:et.a}),at=Object(Qe.d)(tt,Object(Qe.a)(Ze.a));a(334);c.a.render(r.a.createElement(i.a,{store:at},r.a.createElement(M.a,null,r.a.createElement(Je,null))),document.getElementById("root"))},34:function(e,t,a){e.exports={formWrapper:"login_formWrapper__3_nbY",form:"login_form__1XT1R",formBtn:"login_formBtn__3vSS6",logo:"login_logo__2IlKz",commonError:"login_commonError__MnPaM",title:"login_title__-abuw"}},94:function(e,t,a){e.exports=a.p+"static/media/img.47efbeaf.jpg"},97:function(e,t,a){e.exports={error:"validInfo_error__1FTBB",input:"validInfo_input__26rqb",active:"validInfo_active__qbX_D",like:"validInfo_like__3FVMK"}}},[[210,1,2]]]);
//# sourceMappingURL=main.868fbfbc.chunk.js.map