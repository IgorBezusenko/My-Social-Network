(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[1],{142:function(e,t,n){e.exports=n(231)},147:function(e,t,n){},148:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(45),i=n.n(o),u=(n(147),n(26)),c=n(27),s=n(31),l=n(30),f=n(5),p=n(9),d=(n(148),n(17)),m=n(56),g=n.n(m),b=function(e){return r.a.createElement("div",{className:g.a.friend},r.a.createElement("img",{src:"https://i.insider.com/5eb47f80fc593d23461aa232?width=1100&format=jpeg&auto=webp"}),r.a.createElement("div",null,e.name))},h=function(e){return e.sidebar.friends.map((function(e){return r.a.createElement(b,{key:e.id,name:e.name})}))},E=Object(d.b)((function(e){return{sidebar:e.sidebar}}),null)(h),v=n(7),O=n.n(v),_=function(){return r.a.createElement("nav",{className:O.a.nav},r.a.createElement("div",{className:O.a.item},r.a.createElement(p.b,{to:"/profile",activeClassName:O.a.activeLink},"Profile")),r.a.createElement("div",{className:"".concat(O.a.item," ").concat(O.a.active)},r.a.createElement(p.b,{to:"/dialog",activeClassName:O.a.activeLink},"Masseges")),r.a.createElement("div",{className:"".concat(O.a.item," ").concat(O.a.active)},r.a.createElement(p.b,{to:"/users",activeClassName:O.a.activeLink},"Users")),r.a.createElement("div",{className:O.a.item},r.a.createElement(p.b,{to:"/news"},"News")),r.a.createElement("div",{className:O.a.item},r.a.createElement(p.b,{to:"/music"},"Music")),r.a.createElement("div",{className:O.a.item},r.a.createElement(p.b,{to:"/setting"},"Setting")),r.a.createElement("div",{className:O.a.item+" "+O.a.itemFriends},r.a.createElement(p.b,{to:"/setting"},"Friends"),r.a.createElement("div",{className:O.a.friends},r.a.createElement(E,null))))},w=n(4),S=n.n(w),j=n(10),P=n(23),C=n(2),y=n(8),T=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(C.a)(Object(C.a)({},e),a):e}))},I={users:[],pageSize:10,totalUsersCount:100,currentPage:1,isFetching:!1,followingInProgress:[]},U=function(e){return{type:"FOLLOW",userId:e}},k=function(e){return{type:"UNFOLLOW",userId:e}},N=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},x=function(e){return{type:"TOGGLE_IS_FETCHING",toggleIsFetching:e}},L=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFollowing:e,userId:t}},A=function(){var e=Object(j.a)(S.a.mark((function e(t,n,a,r){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(L(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(L(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),F=n(37),z=n(57),G=n.n(z),R=n(47),D=n(86),M=n(90),H=n.n(M),W=n(48),J=n.n(W),V=r.a.memo((function(e){for(var t=e.totalUsersCount,n=e.pageSize,o=e.onPageChange,i=e.currentPage,u=e.portionSize,c=void 0===u?10:u,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/c),d=Object(a.useState)(1),m=Object(D.a)(d,2),g=m[0],b=m[1],h=(g-1)*c+1,E=g*c;return r.a.createElement("div",{className:J.a.paginator},g>1&&r.a.createElement("button",{onClick:function(){return b(g-1)}},"prev"),l.filter((function(e){return e>=h&&e<=E})).map((function(e){return r.a.createElement("span",{key:e,onClick:function(t){return o(e)},className:H()(Object(R.a)({},J.a.selectedPage,i===e),J.a.page)},e)})),p>g&&r.a.createElement("button",{onClick:function(){return b(g+1)}},"next"))})),Z=n(79),X=n.n(Z),Y=function(e){var t=e.user,n=Object(F.a)(e,["user"]);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:G.a.userPhoto},r.a.createElement(p.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:X.a}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.unfollow(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.follow(t.id)}},"Follow"))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("div",null,r.a.createElement("div",null,"user.location.country",t.id),r.a.createElement("div",null,"user.location.city"))))},B=function(e){var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,o=e.onPageChange,i=e.users,u=Object(F.a)(e,["totalUsersCount","pageSize","currentPage","onPageChange","users"]);return r.a.createElement("div",null,r.a.createElement(V,{currentPage:a,onPageChange:o,totalUsersCount:t,pageSize:n}),i.map((function(e){return r.a.createElement(Y,{user:e,key:e.id,followingInProgress:u.followingInProgress,follow:u.follow,unfollow:u.unfollow})})))},K=n(28),q=n(15),Q=function(e){return e.usersPage.users},$=function(e){return e.usersPage.pageSize},ee=function(e){return e.usersPage.totalUsersCount},te=function(e){return e.usersPage.currentPage},ne=function(e){return e.usersPage.isFetching},ae=function(e){return e.usersPage.followingInProgress},re=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChange=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(K.a,null):null,r.a.createElement(B,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChange:this.onPageChange,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),oe={follow:function(e){return function(){var t=Object(j.a)(S.a.mark((function t(n){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=y.c.follow.bind(y.c),A(n,e,a,U);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(j.a)(S.a.mark((function t(n){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=y.c.unfollow.bind(y.c),A(n,e,a,k);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUsers:function(e,t){return function(){var n=Object(j.a)(S.a.mark((function n(a){var r;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(x(!0)),a(N(e)),n.next=4,y.c.getUsers(e,t);case 4:r=n.sent,a(x(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:r.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},ie=Object(q.d)(Object(d.b)((function(e){return{users:Q(e),pageSize:$(e),totalUsersCount:ee(e),currentPage:te(e),isFetching:ne(e),followingInProgress:ae(e)}}),oe))(re),ue=n(62),ce=n.n(ue),se=function(e){return r.a.createElement("header",{className:ce.a.header},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"}),r.a.createElement("div",{className:ce.a.login},e.isAuth?r.a.createElement("div",null,e.login," ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(p.b,{to:"/login"},"Login")))},le=n(29),fe=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(se,this.props)}}]),n}(r.a.Component),pe=Object(d.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:le.d})(fe),de={initialized:!1},me=n(65),ge={friends:[{id:3,name:"\u0410\u043d\u0442\u043e\u043d\u0438\u043e"},{id:4,name:"\u0416\u0443\u043b\u0438\u043a"},{id:5,name:"\u0412\u0438\u043a\u0442\u043e\u0440"}]},be=n(92),he=n(87),Ee=n(80),ve=Object(q.c)({profilePage:me.d,dialogsPage:Ee.a,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(C.a)(Object(C.a)({},e),{},{users:T(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(C.a)(Object(C.a)({},e),{},{users:T(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(C.a)(Object(C.a)({},e),{},{users:Object(P.a)(t.users)});case"SET_CURRENT_PAGE":return Object(C.a)(Object(C.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(C.a)(Object(C.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.toggleIsFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(C.a)(Object(C.a)({},e),{},{followingInProgress:t.isFollowing?[].concat(Object(P.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:le.a,form:he.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{initialized:!0});default:return e}}}),Oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.d,_e=Object(q.e)(ve,Oe(Object(q.a)(be.a))),we=function(e){return function(t){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(K.a,null)},r.a.createElement(e,t))}},Se=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,299))})),je=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,300))})),Pe=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,301))})),Ce=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(pe,null),r.a.createElement(_,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(f.b,{path:"/profile/:userId?",render:we(Se)}),r.a.createElement(f.b,{path:"/dialog",render:we(je)}),r.a.createElement(f.b,{path:"/users",render:function(){return r.a.createElement(ie,null)}}),r.a.createElement(f.b,{path:"/login",render:we(Pe)}))):r.a.createElement(K.a,null)}}]),n}(r.a.Component),ye=Object(q.d)(f.f,Object(d.b)((function(e){return{initialized:e.app.initialized}}),{initializedApp:function(){return function(e){var t=e(Object(le.b)());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Ce),Te=function(){return r.a.createElement(p.a,null,r.a.createElement(d.a,{store:_e},r.a.createElement(ye,null)))};i.a.render(r.a.createElement(Te,null),document.getElementById("root"))},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),r=n.n(a),o=n(91),i=n.n(o),u=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:i.a,alt:"loading...",style:{width:"50px"}}))}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return m}));var a=n(4),r=n.n(a),o=n(10),i=n(2),u=n(8),c=n(49),s={userId:null,email:null,login:null,isAuth:!1},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_USER_DATA":return Object(i.a)(Object(i.a)({},e),t.payload);default:return e}},f=function(e,t,n,a){return{type:"SET_AUTH_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},p=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,o=a.id,i=a.email,c=a.login,t(f(o,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n){return function(){var a=Object(o.a)(r.a.mark((function a(o){var i,s,l;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.login(e,t,n);case 2:0===(i=a.sent).data.resultCode?o(p()):(s=i.data.messages.length>0?i.data.messages[0]:"Some error",l=Object(c.a)("login",{_error:s}),o(l));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},m=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logout();case 2:0===e.sent.data.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},48:function(e,t,n){e.exports={paginator:"Paginator_paginator__Cmc_9",page:"Paginator_page__3PGGw",selectedPage:"Paginator_selectedPage__1OGJp"}},56:function(e,t,n){e.exports={friend:"Friends_friend__1BfG3"}},57:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__3Od5y"}},62:function(e,t,n){e.exports={header:"Header_header__2I5AD",login:"Header_login__3ZYg_"}},65:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return b}));var a=n(4),r=n.n(a),o=n(10),i=n(23),u=n(2),c=n(8),s={posts:[{id:1,message:"Hi, how are you?",likesCount:52},{id:2,message:"Its my first post.",likesCount:25},{id:3,message:"Hi, man",likesCount:45},{id:4,message:"The post.",likesCount:21}],profile:null,status:""},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n])});case"DELETE_POST":return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SET_USERS_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"SAVE_PHOTOS_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});default:return e}},f=function(e){return{type:"ADD_POST",newPostText:e}},p=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getProfile(e);case 2:a=t.sent,n({type:"SET_USERS_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:a=t.sent,n(p(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTOS_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},7:function(e,t,n){e.exports={nav:"Navbar_nav__1bmPc",item:"Navbar_item__JbCJu",activeLink:"Navbar_activeLink__2Yp_X",itemFriends:"Navbar_itemFriends__15RZ0",friends:"Navbar_friends__3zh4O"}},79:function(e,t,n){e.exports=n.p+"static/media/user.a4096e53.png"},8:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var a=n(89),r=a.create({withCredentials:!0,headers:{"API-KEY":"b8c04e43-1d5b-48ed-bbd5-829734d4889b"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),o={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))}},i={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("/profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})}},u={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var a=n(23),r=n(2),o={dialogs:[{id:1,name:"\u0418\u0433\u043e\u0440\u044c"},{id:2,name:"\u042e\u043b\u044f"},{id:3,name:"\u0410\u043d\u0442\u043e\u043d\u0438\u043e"},{id:4,name:"\u0416\u0443\u043b\u0438\u043a"},{id:5,name:"\u0412\u0438\u043a\u0442\u043e\u0440"}],messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442!"},{id:2,message:"\u041a\u0430\u043a \u0442\u0432\u043e\u0435 \u043d\u0438\u0447\u0435\u0433\u043e?"},{id:3,message:"\u041c\u044d\u044d\u044d\u044d\u043d!"},{id:4,message:"\u041c\u044d\u044d\u044d\u044d\u043d!"},{id:5,message:"\u041c\u044d\u044d\u044d\u044d\u043d!"}]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n={id:6,message:t.newMessageText};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}},u=function(e){return{type:"SEND_MESSAGE",newMessageText:e}}},91:function(e,t,n){e.exports=n.p+"static/media/spinner.d6074ab8.gif"}},[[142,2,3]]]);
//# sourceMappingURL=main.4db9ca03.chunk.js.map