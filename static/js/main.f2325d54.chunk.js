(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{210:function(e,t,a){e.exports=a(335)},32:function(e,t,a){e.exports={formWrapper:"login_formWrapper__3_nbY",form:"login_form__1XT1R",formBtn:"login_formBtn__3vSS6",logo:"login_logo__2IlKz",commonError:"login_commonError__MnPaM",title:"login_title__-abuw"}},334:function(e,t,a){},335:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(13),c=a.n(o),i=a(18),l=a(157),s=a(158),u=a(97),d=a.n(u),m=function(e){var t=e.input,a=e.type,r=e.placeholder,o=e.meta,c=o.touched,i=o.error,l=o.active,s=c&&i&&!l;return n.a.createElement("input",Object.assign({className:"".concat(d.a.input," ").concat(s?d.a.error:""," ").concat(l?d.a.active:"")},t,{type:a,placeholder:r}))},p=function(e){if(!e)return"The field is required"},f=a(20),h=a.n(f),g=a(37),b=a(23),E=a(68),v=a(55),y=a.n(v),x="https://alpha.kts.vspj.cz/~reshetov/DOIT",O=function(e){var t=e.login,a=e.password;return y.a.post("".concat(x,"/logon"),{login:t,password:a}).then((function(e){return e.data}))},k=function(e){var t=e.login,a=e.password,r=e.role;return y.a.post(x+"/signup ",{login:t,password:a,role:r})},w=function(){return y.a.get("".concat(x,"/articles")).then((function(e){return e.data}))},j=function(e){var t=e.authorId,a=e.descr,r=e.title;return y.a.post("".concat(x,"/articles/new"),{autor:t,title:r,descr:a})},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return y.a.get("".concat(x,"/article/").concat(e)).then((function(e){return e.data}))},S=function(e){return y.a.delete("".concat(x,"/articles"),{headers:{id:e}})},I={authorId:null,login:null,password:null,isAuth:!1,role:"",isAuthor:!1,isReader:!1,isEditor:!1},N=function(e){return{type:"SETAUTH",payLoad:e}},T=function(){return localStorage.removeItem("id"),{type:"SETLOGOUT"}},_=function(e){return function(){var t=Object(g.a)(h.a.mark((function t(a){var r,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:(r=t.sent).isAuth?(localStorage.setItem("login","".concat(e.login)),localStorage.setItem("password","".concat(e.password)),n=r.id?r.id:null,a(N({isAuth:!0,login:e.login,password:e.password,role:r.role,isAuthor:r.isAuthor,isReader:r.isReader,isEditor:r.isEditor,authorId:n}))):a(Object(E.a)("login",{_error:"Wrong login or Password"}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},R=a(32),C=a.n(R),B=a(16),L=a(26),D=a(369),M=Object(D.a)({formBtn:{display:"block",width:"100px",height:"30px",border:"none",backgroundColor:"rgb(117, 151, 182)",boxShadow:"2px 2px 4px #000",color:"#fff",cursor:"pointer",outline:"none",marginTop:"10px"}}),U=Object(s.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error;return n.a.createElement("form",{className:C.a.form,onSubmit:t},n.a.createElement(l.a,{name:"login",component:m,type:"text",placeholder:"Login",validate:[p]}),n.a.createElement(l.a,{name:"password",component:m,type:"password",placeholder:"Password",validate:[p]}),n.a.createElement("button",{className:C.a.formBtn},"Login"),a?n.a.createElement("span",{className:C.a.commonError},"Wrong login or password"):null)})),z=Object(i.b)((function(e){return{isAuth:e.auth.isAuth}}),{getAuth:_})((function(e){var t=M();return e.isAuth?n.a.createElement(B.a,{to:"/reader"}):n.a.createElement("div",{style:{height:"100vh",paddingTop:"100px"}},n.a.createElement("div",{className:C.a.formWrapper},n.a.createElement("h1",{className:C.a.title},"Login"),n.a.createElement(U,{onSubmit:function(t){e.getAuth(t)}}),n.a.createElement(L.b,{to:"/register"},n.a.createElement("button",{className:t.formBtn},"Register"))))})),F=a(54),G=a(173),W=a(391),P=a(6),V=a(373),K=a(374),$=a(376),q={articles:[],fullArticle:{},isDark:!1},X=function(e){return{type:"SETARTICLES",payload:e}},H=function(e){return{type:"SETFULLARTICLE",fullArticle:e}},J=function(){return{type:"SETDARK"}},Y=function(){return function(){var e=Object(g.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:a=e.sent,t(X(a.articles));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Q=a(389),Z=a(375),ee=Object(D.a)((function(e){return Object(W.a)({root:{flexGrow:1},login:{fontSize:"20px"},nav:{display:"flex",justifyContent:"space-between"},link:{color:"#fff",textDecoration:"none"}})})),te=Object(P.a)((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,a=Object(G.a)(e,["classes"]);return n.a.createElement(Q.a,Object.assign({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},a))})),ae=Object(i.b)((function(e){return{isDark:e.articles.isDark}}),{logOut:T,setDarkMode:J})((function(e){var t=ee();return n.a.createElement("div",{className:t.root},n.a.createElement(V.a,{position:"static"},n.a.createElement(K.a,{className:t.nav},n.a.createElement("div",{className:t.login},e.login," (",e.role,")"),n.a.createElement(Z.a,{control:n.a.createElement(te,{checked:e.isDark,onChange:e.setDarkMode,name:"checkedB"}),label:"Change color mode"}),n.a.createElement("div",null,n.a.createElement(L.b,{to:"/login",onClick:function(){e.logOut()},className:t.link},n.a.createElement($.a,{onClick:function(){localStorage.removeItem("login"),localStorage.removeItem("password")},color:"inherit"},"Exit"))))))})),re=a(377),ne=a(378),oe=a(381),ce=a(380),ie=a(379),le=a(336),se=a(94),ue=a.n(se),de=a(166),me=a.n(de),pe=Object(D.a)((function(e){return Object(W.a)({root:{width:"60%",marginTop:"30px",height:"400px",display:"flex",flexDirection:"column",justifyContent:"space-between",paddingBottom:"10px"},media:{height:140},icons:{display:"flex",justifyContent:"space-between",marginLeft:"10px",padding:0},descr:{overflow:"hidden",height:"120px"},link:{textDecoration:"none",color:e.palette.primary.light},author:{color:"grey",display:"block",fontSize:"16px",marginBottom:"20px"}})}));function fe(e){var t=pe(),a=Object(r.useState)(!1),o=Object(F.a)(a,2),c=o[0],i=o[1];return n.a.createElement(re.a,{className:t.root},n.a.createElement(L.b,{to:"/article/".concat(e.id),className:t.link},n.a.createElement(ne.a,null,n.a.createElement(ie.a,{className:t.media,image:ue.a}),n.a.createElement(ce.a,null,n.a.createElement(le.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),n.a.createElement("span",{className:t.author},"Author: ",e.author.login),n.a.createElement(le.a,{className:t.descr,variant:"body2",color:"textSecondary",component:"p"},e.descr)))),n.a.createElement(oe.a,{className:t.icons},n.a.createElement(me.a,{onClick:function(){i(!c)}})))}var he=a(168),ge=a.n(he),be=a(390),Ee=a(383),ve=a(387),ye=a(386),xe=a(44),Oe=Object(D.a)((function(e){return{paper:{position:"absolute",width:"600px",backgroundColor:e.palette.background.paper,border:"none",left:"50%",top:"50%",transform:"translate(-50%, -50%)",padding:"20px",display:"flex",flexDirection:"column",justifyContent:"center"},paperMedia:{width:"240px"},modalTitle:{marginBottom:"20px"},readerInput:{display:"none"},btns:{width:"100%",display:"flex",justifyContent:"space-between",marginTop:20},fileName:{display:"block",marginBottom:"20px"},title:{marginBottom:20}}})),ke=function(e){var t=Oe(),a=Object(xe.a)(),o=Object(r.useState)(""),c=Object(F.a)(o,2),i=c[0],l=c[1],s=Object(r.useState)(""),u=Object(F.a)(s,2),d=u[0],m=u[1];return n.a.createElement(ve.a,{open:e.open,onClose:e.handleModal,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},n.a.createElement("form",{className:"".concat(t.paper)},n.a.createElement("h2",{style:{color:a.palette.primary.light},className:t.modalTitle},"New article"),n.a.createElement(ye.a,{label:"Title",className:t.title,value:i,onChange:function(e){return l(e.target.value)}}),n.a.createElement(ye.a,{id:"outlined-multiline-flexible",label:"Description",multiline:!0,rows:15,variant:"outlined",value:d,onChange:function(e){return m(e.target.value)}}),n.a.createElement("div",{className:t.btns},n.a.createElement($.a,{variant:"contained",color:"primary",disabled:!i||!d,onClick:function(){return e.onSave({title:i,descr:d})}},"Save"),n.a.createElement($.a,{variant:"contained",color:"secondary",onClick:e.handleModal},"Cancel"))))},we=Object(D.a)({btn:{position:"fixed",bottom:"20px",right:"30px"}}),je=function(e){var t=e.login,a=e.role,o=e.articles,c=(e.isEditor,e.isAuthor),i=(e.isReader,e.authorId),l=e.postArticle,s=we(),u=Object(r.useState)(!1),d=Object(F.a)(u,2),m=d[0],p=d[1],f=function(){p(!m)};return n.a.createElement("div",null,n.a.createElement(ae,{login:t,role:a}),n.a.createElement("div",null,o.map((function(e){return n.a.createElement("div",{className:"container",key:e.id},n.a.createElement(fe,{descr:e.descr,comments:e.comments,name:e.title,id:e.id,author:e.autor}))}))),c&&n.a.createElement(be.a,{onClick:f,title:"Add","aria-label":"add",className:s.btn},n.a.createElement(Ee.a,{color:"primary"},n.a.createElement(ge.a,null))),m&&n.a.createElement(ke,{handleModal:f,open:m,onSave:function(e){var t=e.title,a=e.descr;l({title:t,descr:a,authorId:i}),p(!1)}}))},Ae=Object(i.b)((function(e){return{role:e.auth.role,login:e.auth.login,articles:e.articles.articles,isAuthor:e.auth.isAuthor,isReader:e.auth.isReader,isEditor:e.auth.isEditor,authorId:e.auth.authorId}}),{getArticles:Y,postArticle:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:a(Y());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.role,a=e.login,o=e.articles,c=e.isEditor,i=e.isAuthor,l=e.isReader,s=e.getArticles,u=e.postArticle,d=e.authorId;return Object(r.useEffect)((function(){s()}),[]),n.a.createElement("div",null,n.a.createElement(je,{articles:o,role:t,login:a,isEditor:c,isAuthor:i,isReader:l,authorId:d,postArticle:u}))})),Se=a(160),Ie={isOk:!1},Ne=function(){return{type:"SETREGISTER"}},Te=Object(D.a)({select:{width:"200px",marginBottom:"20px"},formBtn:{display:"block",width:"100px",height:"30px",border:"none",backgroundColor:"rgb(117, 151, 182)",boxShadow:"2px 2px 4px #000",color:"#fff",cursor:"pointer",outline:"none",marginTop:"10px"}}),_e=Object(s.a)({form:"register"})((function(e){var t=e.handleSubmit,a=Te();return n.a.createElement("form",{className:C.a.form,onSubmit:t},n.a.createElement(l.a,{name:"login",component:m,type:"text",placeholder:"Login",validate:[p]}),n.a.createElement(l.a,{name:"password",component:m,type:"password",placeholder:"Password",validate:[p]}),n.a.createElement(l.a,{name:"role",component:"select",className:a.select},n.a.createElement("option",null),n.a.createElement("option",{value:"author"},"author"),n.a.createElement("option",{value:"reader"},"reader"),n.a.createElement("option",{value:"editor"},"editor")),n.a.createElement("button",{className:C.a.formBtn},"Register"))})),Re=Object(Se.a)("register"),Ce=Object(i.b)((function(e){var t=Re(e,"login"),a=Re(e,"password"),r=Re(e,"role");return{isOk:e.register.isOk,login:t,password:a,role:r}}),{toRegister:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e);case 2:t.sent&&a(Ne());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Te(),a=e.login,r=e.password,o=e.role,c=e.isOk;return n.a.createElement("div",{style:{height:"100vh",paddingTop:"100px"}},n.a.createElement("div",{className:C.a.formWrapper},n.a.createElement("h1",{className:C.a.title},"Register"),n.a.createElement(_e,{onSubmit:function(){e.toRegister({login:a,password:r,role:o})}}),n.a.createElement(L.b,{to:"/login"},n.a.createElement("button",{className:t.formBtn},"Back")),c&&n.a.createElement("div",null," YOU REGISTERED ")))})),Be=a(176),Le=a(169),De=a.n(Le),Me=a(170),Ue=a.n(Me),ze=a(384),Fe=Object(D.a)({paper:{marginTop:"20px",padding:0,paddingBottom:"10px"},media:{height:140},icons:{display:"flex",justifyContent:"space-between"},img:{width:"1200px",height:"200px",backgroundImage:"url(".concat(ue.a,")"),backgroundSize:"cover",backgroundPosition:"center"},btn:{display:"block",margin:"20px auto"},link:{textDecoration:"none",color:"#fff"},author:{color:"grey",display:"block",fontSize:"16px",marginBottom:"20px"},descr:{},helpIcon:{display:"flex",width:"100%",justifyContent:"flex-start",paddingLeft:"10px"},deleteIcon:{display:"block",marginRight:"10px"}}),Ge=Object(i.b)((function(e){return{role:e.auth.role,login:e.auth.login,article:e.articles.fullArticle}}),{getFullArticle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var t=Object(g.a)(h.a.mark((function t(a){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e);case 2:r=t.sent,a(H({title:r.title,descr:r.description,id:r.id,comments:r.comments,author:r.author}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteArticle:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:a(Y());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.role,o=e.getFullArticle,c=e.article,i=e.deleteArticle,l=Object(B.f)().id,s=Fe();if(Object(r.useEffect)((function(){o(l)}),[]),!c.author)return n.a.createElement(ze.a,null);var u=t===c.author.login;return n.a.createElement("div",{style:{height:"100vh"}},n.a.createElement(ae,{login:t,role:a}),n.a.createElement(Be.a,{elevation:3,className:"container ".concat(s.paper)},n.a.createElement("div",{className:s.img}),n.a.createElement(ce.a,null,n.a.createElement(le.a,{gutterBottom:!0,variant:"h5",component:"h2"},c.title),n.a.createElement("span",{className:s.author},"Author: ",c.author.login),n.a.createElement(le.a,{className:s.descr,variant:"body2",color:"textSecondary",component:"p"},c.descr)),u&&n.a.createElement("div",{className:s.helpIcon},n.a.createElement(De.a,{onClick:function(){return i(l)},className:s.deleteIcon,color:"secondary",style:{cursor:"pointer"}}),n.a.createElement(Ue.a,{color:"primary",style:{cursor:"pointer"}}))),n.a.createElement(L.b,{className:s.link,to:"/reader"},n.a.createElement($.a,{variant:"contained",color:"primary",className:s.btn},"Back")))})),We=a(172),Pe=a(385),Ve=Object(i.b)((function(e){return{isAuth:e.auth.isAuth,role:e.auth.role,darkMode:e.articles.isDark}}),{getInit:function(){return function(){var e=Object(g.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=localStorage.getItem("login"),(r=localStorage.getItem("password"))&&a&&t(_({login:a,password:r}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){Object(r.useEffect)((function(){e.getInit()}),[]);var t=Object(We.a)({palette:{type:e.darkMode?"dark":"light"}});return n.a.createElement(Pe.a,{theme:t},n.a.createElement(Be.a,{style:{height:"100%"}},n.a.createElement(B.b,{path:"/reader",component:function(){return n.a.createElement(Ae,null)}}),n.a.createElement(B.b,{path:"/login",component:function(){return n.a.createElement(z,null)}}),n.a.createElement(B.b,{path:"/register",component:function(){return n.a.createElement(Ce,null)}}),n.a.createElement(B.b,{path:"/article/:id"},n.a.createElement(Ge,null)),e.isAuth?null:n.a.createElement(B.a,{to:"login"}),n.a.createElement(B.a,{from:"/",to:"login"})))})),Ke=a(17),$e=a(171),qe=a(159),Xe=Object(Ke.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETAUTH":return Object(b.a)(Object(b.a)(Object(b.a)({},e),t.payLoad),{},{authorId:t.payLoad.authorId,isAuthor:t.payLoad.isAuthor,isReader:t.payLoad.isReader,isEditor:t.payLoad.isEditor});case"SETLOGOUT":return Object(b.a)(Object(b.a)({},e),{},{login:null,password:null,isAuth:!1,role:"",isAuthor:!1,isReader:!1,isEditor:!1});default:return e}},articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETARTICLES":return Object(b.a)(Object(b.a)({},e),{},{articles:t.payload});case"SETFULLARTICLE":return Object(b.a)(Object(b.a)({},e),{},{fullArticle:t.fullArticle});case"SETDARK":return Object(b.a)(Object(b.a)({},e),{},{isDark:!e.isDark});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETREGISTER":return Object(b.a)(Object(b.a)({},e),{},{isOk:!0});default:return e}},form:qe.a}),He=Object(Ke.d)(Xe,Object(Ke.a)($e.a));a(334);c.a.render(n.a.createElement(i.a,{store:He},n.a.createElement(L.a,null,n.a.createElement(Ve,null))),document.getElementById("root"))},94:function(e,t,a){e.exports=a.p+"static/media/img.47efbeaf.jpg"},97:function(e,t,a){e.exports={error:"validInfo_error__1FTBB",input:"validInfo_input__26rqb",active:"validInfo_active__qbX_D",like:"validInfo_like__3FVMK"}}},[[210,1,2]]]);
//# sourceMappingURL=main.f2325d54.chunk.js.map