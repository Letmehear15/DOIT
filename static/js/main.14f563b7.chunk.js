(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{174:function(e,t,a){e.exports={formWrapper:"login_formWrapper__3_nbY",form:"login_form__1XT1R",formBtn:"login_formBtn__3vSS6",logo:"login_logo__2IlKz",commonError:"login_commonError__MnPaM",title:"login_title__-abuw"}},185:function(e,t,a){e.exports=a.p+"static/media/blog-post.1.f3a53693.md"},186:function(e,t,a){e.exports=a.p+"static/media/blog-post.2.99cbba3b.md"},187:function(e,t,a){e.exports=a.p+"static/media/blog-post.3.8d6e276b.md"},238:function(e,t,a){e.exports=a(363)},362:function(e,t,a){},363:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),i=a(15),c=a.n(i),l=a(11),s=a(166),u=a(167),m=a(421),p=function(e){var t=e.input,a=e.type,n=e.placeholder;e.meta,e.name;return o.a.createElement(m.a,Object.assign({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:n,label:n,autoFocus:!0,type:a},t))},d=a(16),g=a.n(d),f=a(27),h=a(14),b=a(76),E=a(45),v=a.n(E),k="http://backend.doit.kamisuel.cyou",y=function(e){var t=e.login,a=e.password;return v.a.post("".concat(k,"/logon"),{login:t,password:a}).then((function(e){return e.data}))},O=function(e){var t=e.login,a=e.password,n=e.role;return v.a.post(k+"/signup ",{login:t,password:a,role:n})},j=function(){return v.a.get("".concat(k,"/articles")).then((function(e){return e.data}))},x=function(e){var t=e.authorId,a=e.descr,n=e.title;return v.a.post("".concat(k,"/articles/new"),{autor:t,title:n,descr:a})},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.a.get("".concat(k,"/article/").concat(e)).then((function(e){return e.data}))},S=function(e){return v.a.delete("".concat(k,"/article/").concat(e))},A=function(e,t,a){return v.a.post("".concat(k,"/article/").concat(e,"/comment/new"),{id:e,text:a,autor:t}).then((function(e){return e.data}))},N=function(e){var t=e.title,a=e.descr,n=e.id;return v.a.post("".concat(k,"/article/").concat(n,"/update"),{title:t,descr:a}).then((function(e){return e.data}))},T=function(e,t){return v.a.put("".concat(k,"/article/").concat(t,"/stage/").concat(e))},I={articles:[],fullArticle:{},comments:[],stage:0,isDark:!1,isLoad:!0,isDelete:!1},C=function(e){return{type:"SETARTICLES",payload:e}},D=function(e){return{type:"SETFULLARTICLE",fullArticle:e}},z=function(e){return{type:"SETCOMMENT",comments:e}},L=function(e){return{type:"SETLOAD",prop:e}},B=function(e){return{type:"SETDELETE",prop:e}},R=function(e){return{type:"SETSTAGE",stage:e}},F=function(e){return{type:"SETDARK"}},_=L,M=function(){return function(){var e=Object(f.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(B(!1)),e.next=3,j();case 3:a=e.sent,t(C(a.articles));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},W=function(e){return function(){var t=Object(f.a)(g.a.mark((function t(a){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:n=t.sent,r=n.articles.filter((function(t){return t.id===+e})),a(z(r[0].comments));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},H={authorId:null,login:null,password:null,isInit:!1,isAuth:!1,role:"",isAuthor:!1,isEditor:!1,isDark:!1},P=function(e){return{type:"SETAUTH",payLoad:e}},G=function(){return{type:"SETINIT"}},J=function(){return localStorage.removeItem("id"),{type:"SETLOGOUT"}},V=function(e){return function(){var t=Object(f.a)(g.a.mark((function t(a){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:(n=t.sent).isAuth?(localStorage.setItem("login","".concat(e.login)),localStorage.setItem("password","".concat(e.password)),r=n.id?n.id:null,a(P({isAuth:!0,login:e.login,password:e.password,role:n.role,isAuthor:n.isAuthor,isEditor:n.isEditor,authorId:r}))):a(Object(b.a)("login",{_error:"Wrong login or Password"}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(){return function(){var e=Object(f.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("login"),!(n=localStorage.getItem("password"))||!a){e.next=4;break}return e.abrupt("return",t(V({login:a,password:n})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Y=a(174),K=a.n(Y),$=a(17),X=a(21),q=a(105),Q=a.n(q),Z=a(399),ee=a(400),te=a(401),ae=a(424),ne=a(197),re=a(402),oe=a(403),ie=Object(Z.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",minHeight:"100%"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},link:{color:"dark"===e.palette.type?"#fff":"#000",textDecoration:"none"}}})),ce=Object(u.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error,n=ie();return o.a.createElement(ee.a,{component:"main",maxWidth:"xs",style:{minHeight:"100vh",paddingTop:"30px"}},o.a.createElement(te.a,null),o.a.createElement("div",{className:n.paper},o.a.createElement(ae.a,{className:n.avatar},o.a.createElement(Q.a,null)),o.a.createElement(ne.a,{component:"h1",variant:"h5"},"Sign in"),o.a.createElement("form",{className:n.form,onSubmit:t},o.a.createElement(s.a,{name:"login",component:p,type:"text",placeholder:"Login"}),o.a.createElement(s.a,{name:"password",component:p,type:"password",placeholder:"Password"}),o.a.createElement(re.a,{fullWidth:!0,variant:"contained",color:"primary",className:n.submit,type:"submit"},"Sign In"),o.a.createElement(oe.a,{container:!0},o.a.createElement(oe.a,{item:!0},o.a.createElement($.b,{to:"/register",className:n.link},'"Don\'t have an account? Sign Up"'))),o.a.createElement(oe.a,{container:!0,style:{marginTop:20}},o.a.createElement(oe.a,{item:!0},o.a.createElement($.b,{to:"/home",className:n.link},"Home page"))),a?o.a.createElement("span",{className:K.a.commonError},"Wrong login or password"):null)))})),le=Object(l.b)((function(e){return{isAuth:e.auth.isAuth,isDark:e.articles.isDark}}),{getAuth:V})((function(e){return e.isAuth?o.a.createElement(X.a,{to:"/home"}):o.a.createElement(ce,{onSubmit:function(t){e.getAuth(t)}})})),se=a(32),ue=a(420),me=a(404),pe=a(405),de=Object(Z.a)((function(e){return Object(ue.a)({root:{flexGrow:1},login:{fontSize:"20px"},nav:{display:"flex",justifyContent:"space-between"},link:{color:"#fff",textDecoration:"none"}})})),ge=Object(l.b)((function(e){return{isDark:e.articles.isDark}}),{logOut:J})((function(e){var t=de();return o.a.createElement("div",{className:t.root},o.a.createElement(me.a,{position:"static"},o.a.createElement(pe.a,{className:t.nav},o.a.createElement("div",{className:t.login},e.login),o.a.createElement("div",null,o.a.createElement($.b,{to:"/home",className:t.link},o.a.createElement(re.a,{color:"inherit"},"Back to home page"))))))})),fe=a(406),he=a(407),be=a(409),Ee=a(408),ve=a(80),ke=a.n(ve);!function(e){e[e.created=0]="created",e[e["waiting reviewer"]=1]="waiting reviewer",e[e.reviewer=2]="reviewer",e[e["waiting editor"]=3]="waiting editor",e[e.editor=4]="editor",e[e.approved=6]="approved"}(n||(n={}));var ye=Object(Z.a)((function(e){return Object(ue.a)({root:{width:"60%",marginTop:"30px",display:"flex",flexDirection:"column",justifyContent:"space-between",paddingBottom:"10px"},media:{height:140},icons:{display:"flex",justifyContent:"space-between",marginLeft:"10px",padding:0,paddingTop:"10px"},descr:{overflow:"hidden",height:"120px"},link:{textDecoration:"none",color:e.palette.primary.light},author:{color:"grey",display:"block",fontSize:"16px",marginBottom:"20px"}})}));function Oe(e){var t=Object(r.useState)(e.stage),a=Object(se.a)(t,2),i=a[0],c=a[1],s=ye(),u=Object(l.c)(),m=Object(l.d)((function(e){return e.auth.isAuthor})),p=Object(l.d)((function(e){return e.auth.isEditor})),d=function(t){u(function(e,t){return function(){var a=Object(f.a)(g.a.mark((function a(n){return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T(t,e);case 2:n(R(t));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(e.id,t)),c(t)};return o.a.createElement(fe.a,{className:s.root},o.a.createElement($.b,{to:"/article/".concat(e.id),className:s.link,onClick:function(){return u(_(!0))}},o.a.createElement(he.a,null,o.a.createElement(Ee.a,{className:s.media,image:ke.a}),o.a.createElement(be.a,null,o.a.createElement(ne.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),o.a.createElement("span",{className:s.author},"Author: ",e.author.login),o.a.createElement(ne.a,{className:s.descr,variant:"body2",color:"textSecondary",component:"p"},e.descr)))),m&&+i!==n["waiting reviewer"]?o.a.createElement(re.a,{onClick:function(){return d(n["waiting reviewer"])},color:"secondary"}," Send to reviewer "):o.a.createElement("div",null,"waiting reviewer"),p&&+i!==n["waiting editor"]?o.a.createElement(re.a,{onClick:function(){return d(n["waiting editor"])},color:"secondary"}," Send to editor "):p&&o.a.createElement("div",null,"waiting editor"))}var je=a(177),xe=a.n(je),we=a(418),Se=a(410),Ae=a(26),Ne=a(416),Te=a(50),Ie=Object(Z.a)((function(e){var t;return{paper:(t={width:"50%"},Object(Ae.a)(t,e.breakpoints.down("xs"),{width:"100%"}),Object(Ae.a)(t,"position","absolute"),Object(Ae.a)(t,"backgroundColor",e.palette.background.paper),Object(Ae.a)(t,"border","none"),Object(Ae.a)(t,"left","50%"),Object(Ae.a)(t,"top","50%"),Object(Ae.a)(t,"transform","translate(-50%, -50%)"),Object(Ae.a)(t,"padding","20px"),Object(Ae.a)(t,"display","flex"),Object(Ae.a)(t,"flexDirection","column"),Object(Ae.a)(t,"justifyContent","center"),t),modalTitle:{marginBottom:"20px"},readerInput:{display:"none"},btns:{width:"100%",display:"flex",justifyContent:"space-between",marginTop:20},fileName:{display:"block",marginBottom:"20px"},title:{marginBottom:20}}})),Ce=function(e){var t=Ie(),a=Object(Te.a)(),n=Object(r.useState)(""),i=Object(se.a)(n,2),c=i[0],l=i[1],s=Object(r.useState)(""),u=Object(se.a)(s,2),p=u[0],d=u[1];return o.a.createElement(Ne.a,{open:e.open,onClose:e.handleModal,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},o.a.createElement(ee.a,{component:"main",maxWidth:"sm"},o.a.createElement("form",{className:"".concat(t.paper)},o.a.createElement("h2",{style:{color:a.palette.primary.light},className:t.modalTitle},"New article"),o.a.createElement(m.a,{label:"Title",className:t.title,value:c,onChange:function(e){return l(e.target.value)}}),o.a.createElement(m.a,{id:"outlined-multiline-flexible",label:"Description",multiline:!0,rows:15,variant:"outlined",value:p,onChange:function(e){return d(e.target.value)}}),o.a.createElement("div",{className:t.btns},o.a.createElement(re.a,{variant:"contained",color:"primary",disabled:!c||!p,onClick:function(){return e.onSave({title:c,descr:p})}},"Save"),o.a.createElement(re.a,{variant:"contained",color:"secondary",onClick:e.handleModal},"Cancel")))))},De=Object(Z.a)({btn:{position:"fixed",bottom:"20px",right:"30px"}}),ze=function(e){var t=e.login,a=e.role,n=e.articles,i=e.isAuthor,c=e.authorId,l=e.postArticle,s=De(),u=Object(r.useState)(!1),m=Object(se.a)(u,2),p=m[0],d=m[1],g=function(){d(!p)},f=n.filter((function(e){return e.author.login===t}));return o.a.createElement("div",null,o.a.createElement(te.a,null),o.a.createElement(ge,{login:t,role:a}),o.a.createElement("div",null,f.map((function(e){return o.a.createElement("div",{className:"container",key:e.id},o.a.createElement(Oe,{descr:e.descr,name:e.title,id:e.id,author:e.author,login:t,stage:e.stage}))}))),i&&o.a.createElement(we.a,{onClick:g,title:"Add","aria-label":"add",className:s.btn},o.a.createElement(Se.a,{color:"primary"},o.a.createElement(xe.a,null))),p&&o.a.createElement(Ce,{handleModal:g,open:p,onSave:function(e){var t=e.title,a=e.descr;l({title:t,descr:a,authorId:c}),d(!1)}}))},Le=Object(l.b)((function(e){return{role:e.auth.role,login:e.auth.login,articles:e.articles.articles,isAuthor:e.auth.isAuthor,authorId:e.auth.authorId,isAuth:e.auth.isAuth}}),{getArticles:M,postArticle:function(e){return function(){var t=Object(f.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:a(M());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,a=e.role,n=e.login,i=e.articles,c=e.isAuthor,l=e.getArticles,s=e.postArticle,u=e.authorId;return Object(r.useEffect)((function(){l()}),[]),t?o.a.createElement("div",null,o.a.createElement(ze,{articles:i,role:a,login:n,isAuthor:c,authorId:u,postArticle:s})):o.a.createElement(X.a,{to:"/login"})})),Be=a(169),Re={isOk:!1},Fe=function(){return{type:"SETREGISTER"}},_e=a(397),Me=a(423),We=a(415),He=a(425),Pe=Object(Z.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",minHeight:"100%"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},link:{color:"dark"===e.palette.type?"#fff":"#000",textDecoration:"none"},formControl:{margin:e.spacing(1),minWidth:120}}})),Ge=function(e){var t=e.input,a=e.label,n=Pe();return o.a.createElement(_e.a,{className:n.formControl},o.a.createElement(Me.a,{id:"demo-simple-select-label"},a),o.a.createElement(We.a,Object.assign({labelId:"demo-simple-select-label",id:"demo-simple-select"},t),o.a.createElement(He.a,{value:""}),o.a.createElement(He.a,{value:"author"},"Author")))},Je=Object(u.a)({form:"register"})((function(e){var t=e.handleSubmit,a=Pe();return o.a.createElement("form",{className:a.form,onSubmit:t},o.a.createElement(s.a,{name:"login",component:p,type:"text",placeholder:"Login"}),o.a.createElement(s.a,{name:"password",component:p,type:"password",placeholder:"Password"}),o.a.createElement(s.a,{name:"role",component:Ge}),o.a.createElement(re.a,{fullWidth:!0,variant:"contained",color:"primary",className:a.submit,type:"submit"},"Sign Up"))})),Ve=Object(Be.a)("register"),Ue=Object(l.b)((function(e){var t=Ve(e,"login"),a=Ve(e,"password"),n=Ve(e,"role");return{isOk:e.register.isOk,login:t,password:a,role:n}}),{toRegister:function(e){return function(){var t=Object(f.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:t.sent&&a(Fe());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.password,n=e.role,r=e.isOk,i=Pe();return o.a.createElement(ee.a,{component:"main",maxWidth:"xs",style:{minHeight:"100vh",paddingTop:"30px"}},o.a.createElement(te.a,null),o.a.createElement("div",{className:i.paper},o.a.createElement(ae.a,{className:i.avatar},o.a.createElement(Q.a,null)),o.a.createElement(ne.a,{component:"h1",variant:"h5"},"Sign up"),o.a.createElement(Je,{onSubmit:function(){e.toRegister({login:t,password:a,role:n})}}),o.a.createElement(oe.a,{container:!0},o.a.createElement(oe.a,{item:!0},o.a.createElement($.b,{to:"/login",className:i.link},"Back to login"))),r&&o.a.createElement("div",{style:{marginTop:"20px"}}," YOU WERE REGISTERED ")))})),Ye=a(196),Ke=a(181),$e=a.n(Ke),Xe=a(182),qe=a.n(Xe),Qe=a(411),Ze=a(178),et=a.n(Ze),tt=Object(Z.a)({wrapper:{padding:"10px"},comment:{marginBottom:"10px",borderBottom:"1px solid #e3e3e3",padding:"5px"},comments:{marginBottom:"10px",fontWeight:"bold"},inputBlock:{position:"relative",width:"100%",marginTop:"30px"},input:{width:"90%"},icon:{position:"absolute",right:"50px",top:"50%",transform:"translateY(-50%)"},author:{display:"block",color:"grey"}}),at=function(e){var t=tt(),a=Object(r.useState)(""),n=Object(se.a)(a,2),i=n[0],c=n[1],s=Object(l.c)(),u=Object(l.d)((function(e){return e.articles.comments}));Object(r.useEffect)((function(){s(W(e.id))}),[]);var p=function(e,t,a){c(""),s(function(e,t,a){return function(){var n=Object(f.a)(g.a.mark((function n(r){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A(e,t,a);case 2:r(W(e));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(e,t,a))},d=u.map((function(e){return o.a.createElement("div",{key:e.id,className:t.comment}," ",o.a.createElement("span",{className:t.author},e.autor)," ",e.text)}));return o.a.createElement("div",{className:t.wrapper},o.a.createElement("div",{className:t.comments},"Comments"),d,o.a.createElement("div",{className:t.inputBlock},o.a.createElement(m.a,{id:"standard-basic",label:"Comment",onChange:function(e){return c(e.target.value)},className:t.input,value:i}),o.a.createElement(et.a,{className:t.icon,onClick:function(){return p(e.id,e.login,i)}})))},nt=a(179),rt=a.n(nt),ot=a(180),it=a.n(ot),ct=Object(Z.a)({paper:{marginTop:"20px",padding:0,paddingBottom:"10px",display:"flex",flexDirection:"column"},media:{height:140},icons:{display:"flex",justifyContent:"space-between"},img:{width:"1200px",height:"200px",backgroundImage:"url(https://source.unsplash.com/random)",backgroundSize:"cover",backgroundPosition:"center"},btn:{display:"block",margin:"20px auto"},link:{textDecoration:"none",color:"#fff"},author:{color:"grey",display:"block",fontSize:"16px",marginBottom:"20px"},descr:{},helpIcon:{display:"flex",width:"100%",justifyContent:"flex-start",paddingLeft:"10px"},deleteIcon:{display:"block",marginRight:"10px"},comments:{overflow:"scroll",height:300},descrInput:{width:"60%"}}),lt=Object(l.b)((function(e){return{role:e.auth.role,login:e.auth.login,article:e.articles.fullArticle,isLoad:e.articles.isLoad,isEditor:e.auth.isEditor,isDelete:e.articles.isDelete}}),{getFullArticle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var t=Object(f.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(L(!0)),t.next=3,w(e);case 3:n=t.sent,a(D({title:n.title,descr:n.descr,id:n.id,comments:n.comments,author:n.author,stage:n.stage})),a(L(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteArticle:function(e){return function(){var t=Object(f.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:a(M()),a(B(!0));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.role,n=e.getFullArticle,i=e.article,c=e.deleteArticle,s=e.isLoad,u=e.isEditor,p=e.isDelete,d=Object(X.g)().id,h=ct(),b=Object(r.useState)(!1),E=Object(se.a)(b,2),v=E[0],k=E[1],y=Object(r.useState)(""),O=Object(se.a)(y,2),j=O[0],x=O[1],w=Object(r.useState)(""),S=Object(se.a)(w,2),A=S[0],T=S[1],I=Object(l.c)();if(Object(r.useEffect)((function(){n(d),x(i.title),T(i.descr)}),[i.title,i.descr]),s)return o.a.createElement("div",{style:{minHeight:"100vh"}},o.a.createElement(Qe.a,null));if(p)return o.a.createElement(X.a,{to:"/home"});var C=t===i.author.login;return o.a.createElement("div",{style:{paddingBottom:10,minHeight:"100vh"}},o.a.createElement(ge,{login:t,role:a}),o.a.createElement(Ye.a,{elevation:3,className:"container ".concat(h.paper)},o.a.createElement("div",{className:h.img}),o.a.createElement("div",{style:{marginBottom:40}},o.a.createElement(be.a,null,v?o.a.createElement(m.a,{label:"title",value:j,onChange:function(e){return x(e.target.value)}}):o.a.createElement(ne.a,{gutterBottom:!0,variant:"h5",component:"h2"},j),o.a.createElement("span",{className:h.author},"Author: ",i.author.login),v?o.a.createElement(m.a,{id:"outlined-multiline-flexible",label:"Description",multiline:!0,rows:15,variant:"outlined",value:A,onChange:function(e){return T(e.target.value)},className:h.descrInput}):o.a.createElement(ne.a,{className:h.descr,variant:"body2",color:"textSecondary",component:"p"},A)),(C||u)&&o.a.createElement("div",{className:h.helpIcon},v?o.a.createElement(o.a.Fragment,null,o.a.createElement(rt.a,{style:{marginRight:"20px",cursor:"pointer"},onClick:function(){var e;k(!1),I((e={id:d,title:j,descr:A},function(){var t=Object(f.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(L(!0)),t.next=3,N(e);case 3:a(L(!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}}),o.a.createElement(it.a,{style:{cursor:"pointer"},onClick:function(){return k(!1)}})):o.a.createElement(o.a.Fragment,null,o.a.createElement($e.a,{onClick:function(){c(d)},className:h.deleteIcon,color:"secondary",style:{cursor:"pointer"}}),o.a.createElement(qe.a,{onClick:function(){return k(!0)},color:"primary",style:{cursor:"pointer",marginRight:"10px"}})))),o.a.createElement("div",{className:h.comments},o.a.createElement(at,{id:d,login:t}))),o.a.createElement($.b,{className:h.link,to:"/home"},o.a.createElement(re.a,{variant:"contained",color:"primary",className:h.btn},"Back")))})),st=a(192),ut=a(414),mt=a(193),pt=a(5),dt=a(188),gt=a.n(dt),ft=a(190),ht=a.n(ft),bt=a(189),Et=a.n(bt),vt=a(183),kt=a.n(vt),yt=a(184),Ot=a.n(yt),jt=Object(Z.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"flex-end",overflowX:"auto"},toolbarLink:{padding:e.spacing(1),flexShrink:0,textDecoration:"none",color:"dark"===e.palette.type?"#fff":"#000"}}}));var xt=function(e){var t=e.title,a=void 0===t?"":t,n=e.path,r=e.classes,i=e.children;return o.a.createElement($.b,{color:"inherit",variant:"body2",to:n,className:r.toolbarLink},a,i)},wt=Object(l.b)((function(e){return{login:e.auth.login,isAuthor:e.auth.isAuthor,isEditor:e.auth.isEditor}}),{logOut:J})((function(e){var t=e.title,a=e.login,n=e.logOut,r=e.isAbout,i=e.isAuthor,c=e.isEditor,l=jt(),s=i||c;return o.a.createElement(o.a.Fragment,null,o.a.createElement(pe.a,{className:l.toolbar},o.a.createElement(ne.a,null," DOIT "),o.a.createElement(ne.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:l.toolbarTitle},t),a?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{marginRight:"10px"}},a),o.a.createElement(kt.a,{style:{cursor:"pointer"},onClick:function(){localStorage.removeItem("login"),localStorage.removeItem("password"),n()},color:"secondary"})):o.a.createElement(o.a.Fragment,null,o.a.createElement($.b,{to:"/login",style:{textDecoration:"none"}},o.a.createElement(re.a,{variant:"outlined",size:"small"},"Sign in")),o.a.createElement($.b,{to:"/register",style:{textDecoration:"none"}},o.a.createElement(re.a,{variant:"outlined",size:"small"},"Sign up")))),r?o.a.createElement(pe.a,{component:"nav",variant:"dense",className:l.toolbarSecondary},o.a.createElement(xt,{title:"About us",path:"/about",classes:l}),s&&o.a.createElement(xt,{title:"Admin panel",path:"/reader",classes:l})):o.a.createElement(pe.a,{component:"nav",variant:"dense",style:{justifyContent:"flex-start"}},o.a.createElement(xt,{path:"/home",classes:l},o.a.createElement(Ot.a,null))))})),St=Object(Z.a)((function(e){return{mainFeaturedPost:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginBottom:e.spacing(4),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",paddingBottom:"30px"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturedPostContent:Object(Ae.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0}),descr:{display:"block",height:"300px",overflow:"hidden"},link:{marginTop:"20px",textDecoration:"none",color:e.palette.primary.main,fontSize:"20px",cursor:"pointer"}}}));function At(){var e=St(),t=Object(l.c)(),a=Object(l.d)((function(e){return e.articles.articles[0]})),n=a?a.id:null;return Object(r.useEffect)((function(){t(M())}),[]),o.a.createElement(Ye.a,{className:e.mainFeaturedPost,style:{backgroundImage:"url(".concat(ke.a,")")}},o.a.createElement("div",{className:e.overlay}),o.a.createElement(oe.a,{container:!0},o.a.createElement(oe.a,{item:!0,md:6},o.a.createElement("div",{className:e.mainFeaturedPostContent},o.a.createElement(ne.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0},null===a||void 0===a?void 0:a.title),o.a.createElement(ne.a,{className:e.descr,variant:"h5",color:"inherit",paragraph:!0},null===a||void 0===a?void 0:a.descr),o.a.createElement($.b,{className:e.link,to:"/article/".concat(n)},"Read more")))))}var Nt=Object(Z.a)((function(e){return{card:{display:"flex",position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginBottom:e.spacing(4),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",paddingBottom:"30px"},cardDetails:{flex:1},cardMedia:{width:160},link:{marginTop:"20px",textDecoration:"none",color:e.palette.primary.main,fontSize:"20px",cursor:"pointer"},descr:{display:"block",height:"200px",overflow:"hidden"}}}));function Tt(e){var t=Nt(),a=e.post;return o.a.createElement(oe.a,{item:!0,xs:12,md:6},o.a.createElement(fe.a,{className:t.card,style:{backgroundImage:"url(https://source.unsplash.com/random)"}},o.a.createElement("div",{className:t.cardDetails},o.a.createElement(be.a,null,o.a.createElement(ne.a,{component:"h2",variant:"h5"},a.title),o.a.createElement(ne.a,{variant:"subtitle1",paragraph:!0,className:t.descr},a.descr),o.a.createElement($.b,{className:t.link,to:"/article/".concat(a.id)},"Read more")))))}var It=a(412);function Ct(){return o.a.createElement(ne.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(It.a,{color:"inherit",href:"https://github.com/Letmehear15/DOIT/"},"AlexLet")," ",(new Date).getFullYear(),".")}var Dt=Object(Z.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6,0)}}}));function zt(e){var t=Dt(),a=e.description,n=e.title;return o.a.createElement("footer",{className:t.footer},o.a.createElement(ee.a,{maxWidth:"lg"},o.a.createElement(ne.a,{variant:"h6",align:"center",gutterBottom:!0},n),o.a.createElement(ne.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},a),o.a.createElement(Ct,null)))}var Lt=a(185),Bt=a.n(Lt),Rt=a(186),Ft=a.n(Rt),_t=a(187),Mt=a.n(_t),Wt=a(419),Ht=a(413),Pt=Object(Z.a)((function(e){return{sidebarAboutBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[200]},sidebarSection:{marginTop:e.spacing(3)}}}));function Gt(e){var t=Pt(),a=e.archives;return o.a.createElement(oe.a,{item:!0,xs:12,md:4},o.a.createElement(ne.a,{variant:"h6",gutterBottom:!0,className:t.sidebarSection},"Archives"),a.map((function(e){return o.a.createElement(It.a,{display:"block",variant:"body1",href:e.url,key:e.title},e.title)})))}var Jt=Object(pt.a)((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,a=Object(mt.a)(e,["classes"]);return o.a.createElement(Wt.a,Object.assign({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},a))})),Vt=Object(Z.a)((function(e){return{mainGrid:{marginTop:e.spacing(3)},mode:{width:"100%",display:"flex",justifyContent:"center"}}})),Ut=(Bt.a,Ft.a,Mt.a,{title:"About",description:"Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",archives:[{title:"March 2020",url:"#"},{title:"February 2020",url:"#"},{title:"January 2020",url:"#"},{title:"November 1999",url:"#"},{title:"October 1999",url:"#"},{title:"September 1999",url:"#"},{title:"August 1999",url:"#"},{title:"July 1999",url:"#"},{title:"June 1999",url:"#"},{title:"May 1999",url:"#"},{title:"April 1999",url:"#"}],social:[{name:"GitHub",icon:gt.a},{name:"Twitter",icon:Et.a},{name:"Facebook",icon:ht.a}]});var Yt=Object(l.b)((function(e){return{isDark:e.articles.isDark}}),{setDarkMode:F})((function(e){var t=e.isDark,a=e.setDarkMode,i=Vt(),c=Object(l.c)(),s=Object(l.d)((function(e){return e.articles.articles}));return Object(r.useEffect)((function(){c(M(n.approved))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(Ht.a,{className:i.mode,control:o.a.createElement(Jt,{checked:t,onChange:function(){a(!0),t?localStorage.removeItem("dark"):localStorage.setItem("dark",!0)},name:"checkedB"}),label:"Change color mode"}),o.a.createElement(te.a,null),o.a.createElement(ee.a,{maxWidth:"lg"},o.a.createElement(wt,{title:"Magazine",isAbout:!0}),o.a.createElement("main",null,o.a.createElement(At,null),o.a.createElement(oe.a,{container:!0,spacing:4},s.map((function(e){return o.a.createElement(Tt,{key:e.id,post:e})}))),o.a.createElement(oe.a,{container:!0,spacing:5,className:i.mainGrid},o.a.createElement(Gt,{title:Ut.title,description:Ut.description,archives:Ut.archives})))),o.a.createElement(zt,{title:"Magazine",description:"Created by DOIT"}))})),Kt=function(){return o.a.createElement(ee.a,{maxWidth:"lg",style:{minHeight:"100vh"}},o.a.createElement(te.a,null),o.a.createElement(wt,{title:"About us",isAbout:!1}),o.a.createElement("section",{style:{padding:"0 24px"}},o.a.createElement(ne.a,{paragraph:!0},"LOGOS POLYTECHNIKOS je vysoko\u0161kolsk\xfd odborn\xfd recenzovan\xfd \u010dasopis, kter\xfd slou\u017e\xed pro publika\u010dn\xed aktivity akademick\xfdch pracovn\xedk\u016f Vysok\xe9 \u0161koly polytechnick\xe9 Jihlava i jin\xfdch vysok\xfdch \u0161kol, univerzit a v\xfdzkumn\xfdch organizac\xed. Je veden na seznamu recenzovan\xfdch odborn\xfdch a v\u011bdeck\xfdch \u010dasopis\u016f ERIH PLUS - European Reference Index for the Humanities and the Social Sciences."),o.a.createElement(ne.a,{paragraph:!0},"Od roku 2010 do roku 2018 byl \u010dasopis vyd\xe1v\xe1n \u010dty\u0159ikr\xe1t ro\u010dn\u011b v elektronick\xe9 a ti\u0161t\u011bn\xe9 podob\u011b. Od roku 2019 vych\xe1z\xed t\u0159ikr\xe1t ro\u010dn\u011b v elektronick\xe9 verzi. Redak\u010dn\xed rada \u010dasopisu sest\xe1v\xe1 z intern\xedch i extern\xedch odborn\xedk\u016f. Funkci \u0161\xe9fredaktora zast\xe1v\xe1 prorektor pro tv\u016fr\u010d\xed a projektovou \u010dinnost Vysok\xe9 \u0161koly polytechnick\xe9 Jihlava. Funkce odpov\u011bdn\xfdch redaktor\u016f jednotliv\xfdch \u010d\xedsel p\u0159\xedslu\u0161\xed vedouc\xedm kateder Vysok\xe9 \u0161koly polytechnick\xe9 Jihlava. Ve\u0161ker\xe9 vyd\xe1van\xe9 p\u0159\xedsp\u011bvky proch\xe1z\xed recenzn\xedm \u0159\xedzen\xedm a jsou pe\u010dliv\u011b redigov\xe1ny."),o.a.createElement(ne.a,{paragraph:!0},"Tematick\xe9 a obsahov\xe9 zam\u011b\u0159en\xed \u010dasopisu reflektuje pot\u0159eby oborov\xfdch kateder Vysok\xe9 \u0161koly polytechnick\xe9 Jihlava. Na z\xe1klad\u011b souhlasu odpov\u011bdn\xe9ho redaktora mohou katedry poskytnout publika\u010dn\xed prostor i odborn\xedk\u016fm bez zam\u011bstnaneck\xe9 vazby k Vysok\xe9 \u0161kole polytechnick\xe9 Jihlava."),o.a.createElement(ne.a,{paragraph:!0},"V \u010dasopise je mo\u017en\xe9 publikovat odborn\xe9 \u010dl\xe1nky, stat\u011b, p\u0159ehledov\xe9 studie, recenze a dal\u0161\xed typy odborn\xfdch p\u0159\xedsp\u011bvk\u016f v \u010desk\xe9m, slovensk\xe9m a anglick\xe9m jazyce. Do recenzn\xedho \u0159\xedzen\xed jsou p\u0159ij\xedm\xe1ny p\u0159\xedsp\u011bvky tematicky odpov\xeddaj\xedc\xed zam\u011b\u0159en\xed \u010dasopisu a form\xe1ln\u011b upraven\xe9 dle redak\u010dn\xed \u0161ablony (viz n\xed\u017ee).")))},$t=Object(l.b)((function(e){return{isAuth:e.auth.isAuth,role:e.auth.role,darkMode:e.articles.isDark,isInit:e.auth.isInit}}),{getInit:U,initialization:function(){return function(){var e=Object(f.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(U()).then((function(){return t(G())})),localStorage.getItem("dark")&&t(F(!0));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){Object(r.useEffect)((function(){e.initialization()}),[]);var t=Object(st.a)({palette:{type:e.darkMode?"dark":"light"}});return e.isInit?o.a.createElement(ut.a,{theme:t},o.a.createElement(Ye.a,null,o.a.createElement(X.d,null,o.a.createElement(X.b,{path:"/home",component:function(){return o.a.createElement(Yt,null)}}),o.a.createElement(X.b,{path:"/about",component:function(){return o.a.createElement(Kt,null)}}),o.a.createElement(X.b,{path:"/reader",component:function(){return o.a.createElement(Le,null)}}),o.a.createElement(X.b,{exact:!0,path:"/login",component:function(){return o.a.createElement(le,null)}}),o.a.createElement(X.b,{path:"/register",component:function(){return o.a.createElement(Ue,null)}}),o.a.createElement(X.b,{path:"/article/:id"},o.a.createElement(lt,null)),o.a.createElement(X.a,{from:"/",to:"/home"})))):o.a.createElement(Qe.a,null)})),Xt=a(22),qt=a(191),Qt=a(168),Zt=Object(Xt.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETAUTH":return Object(h.a)(Object(h.a)(Object(h.a)({},e),t.payLoad),{},{authorId:t.payLoad.authorId,isAuthor:t.payLoad.isAuthor,isEditor:t.payLoad.isEditor});case"SETINIT":return Object(h.a)(Object(h.a)({},e),{},{isInit:!0});case"SETLOGOUT":return Object(h.a)(Object(h.a)({},e),{},{login:null,password:null,isAuth:!1,role:"",isAuthor:!1,isEditor:!1});default:return e}},articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETARTICLES":return Object(h.a)(Object(h.a)({},e),{},{articles:t.payload});case"SETFULLARTICLE":return Object(h.a)(Object(h.a)({},e),{},{fullArticle:t.fullArticle});case"SETCOMMENT":return Object(h.a)(Object(h.a)({},e),{},{comments:t.comments});case"EDITARTICLE":return Object(h.a)(Object(h.a)({},e),{},{fullArticle:Object(h.a)(Object(h.a)({},e.fullArticle),t.payload)});case"SETLOAD":return Object(h.a)(Object(h.a)({},e),{},{isLoad:t.prop});case"SETDARK":return Object(h.a)(Object(h.a)({},e),{},{isDark:!e.isDark});case"SETDELETE":return Object(h.a)(Object(h.a)({},e),{},{isDelete:t.prop});case"SETSTAGE":return Object(h.a)(Object(h.a)({},e),{},{stage:t.stage});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETREGISTER":return Object(h.a)(Object(h.a)({},e),{},{isOk:!0});default:return e}},form:Qt.a}),ea=Object(Xt.d)(Zt,Object(Xt.a)(qt.a));a(362);c.a.render(o.a.createElement(l.a,{store:ea},o.a.createElement($.a,null,o.a.createElement($t,null))),document.getElementById("root"))},80:function(e,t,a){e.exports=a.p+"static/media/img.47efbeaf.jpg"}},[[238,1,2]]]);
//# sourceMappingURL=main.14f563b7.chunk.js.map