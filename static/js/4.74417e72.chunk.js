(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{232:function(e,t,n){e.exports={formControl:"FormControls_formControl__nsJxe",error:"FormControls_error__1etId",formSomeError:"FormControls_formSomeError__3FfET"}},233:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=function(e){if(!e)return"Required"},r=function(e){return function(t){if(t&&t.length>e)return"Max simbols is ".concat(e)}},o=function(e){return function(t){if(t&&t.length<e)return"Min simbols is ".concat(e)}}},234:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return m}));var a=n(37),r=n(0),o=n.n(r),s=n(232),l=n.n(s),c=n(115),i=function(e){var t=e.input,n=e.meta,r=n.touched,s=n.error,c=Object(a.a)(e,["input","meta"]),i=r&&s;return o.a.createElement("div",{className:l.a.formControl+" "+(i?l.a.error:"")},o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,c))),o.a.createElement("div",null,i&&o.a.createElement("span",null,s)))},u=function(e){var t=e.input,n=e.meta,r=n.touched,s=n.error,c=Object(a.a)(e,["input","meta"]),i=r&&s;return o.a.createElement("div",{className:l.a.formControl+" "+(i?l.a.error:"")},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,c))),o.a.createElement("div",null,i&&o.a.createElement("span",null,s)))},m=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({component:e,validate:t,name:n,placeholder:a},r)),s)}},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),o=n(5),s=n(17),l=function(e){return{isAuth:e.auth.isAuth}},c=function(e){return Object(s.b)(l)((function(t){return t.isAuth?r.a.createElement(e,t):r.a.createElement(o.a,{to:"/login"})}))}},255:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__2YMTB",posts:"MyPosts_posts__2ed1J"}},256:function(e,t,n){e.exports={item:"Post_item__3cfKW"}},297:function(e,t,n){},298:function(e,t,n){e.exports={profileInfo:"ProfileInfo_profileInfo__rjzof",descriptionBlock:"ProfileInfo_descriptionBlock__28rWm",profilePhoto:"ProfileInfo_profilePhoto__1ZnLt"}},299:function(e,t,n){"use strict";n.r(t);var a=n(26),r=n(27),o=n(31),s=n(30),l=n(0),c=n.n(l),i=n(65),u=n(255),m=n.n(u),p=n(256),f=n.n(p),d=function(e){return c.a.createElement("div",{className:f.a.item},c.a.createElement("img",{src:"https://i.insider.com/5eb47f80fc593d23461aa232?width=1100&format=jpeg&auto=webp"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"like ",e.likesCount)))},E=n(115),v=n(116),h=n(233),b=n(234),g=Object(h.a)(50),P=Object(v.a)({form:"profileAddPost"})((function(e){return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(E.a,{component:b.b,validate:[h.c,g],placeholder:"Enter your post",name:"newPostText"})),c.a.createElement("button",null,"Add post")))})),_=c.a.memo((function(e){var t=e.posts.map((function(e){return c.a.createElement(d,{key:e.message,message:e.message,likesCount:e.likesCount})}));return c.a.createElement("div",{className:m.a.postsBlock},c.a.createElement("h3",null,"My post"),c.a.createElement(P,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:m.a.posts},t))})),O=n(17),j=Object(O.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(i.a)(t))}}}))(_),k=(n(297),n(298)),S=n.n(k),w=n(28),C=n(86),y=function(e){var t=Object(l.useState)(!1),n=Object(C.a)(t,2),a=n[0],r=n[1],o=Object(l.useState)(e.status),s=Object(C.a)(o,2),i=s[0],u=s[1];Object(l.useEffect)((function(){u(e.status)}),[e.status]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,a?c.a.createElement("input",{type:"text",onChange:function(e){u(e.currentTarget.value)},value:i,autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(i)}}):c.a.createElement("span",{onClick:function(){r(!0)}},i)))},I=n(79),x=n.n(I),N=function(e){var t=e.profile,n=e.status,a=e.updateStatus,r=e.isOwner,o=e.savePhoto;if(!t)return c.a.createElement(w.a,null);return c.a.createElement("div",null,c.a.createElement("div",{className:S.a.profileInfo},c.a.createElement("img",{src:"https://theinpaint.com/images/example-1-2.jpg",alt:"cover"})),c.a.createElement("div",{className:S.a.descriptionBlock},c.a.createElement("div",{className:S.a.profilePhoto},c.a.createElement("img",{src:t.photos.large||x.a,alt:"cover"}),r&&c.a.createElement("input",{onChange:function(e){e.target.files.length&&o(e.target.files[0])},type:"file"})),c.a.createElement(y,{status:n,updateStatus:a}),c.a.createElement("div",null,t.aboutMe),c.a.createElement("div",null,t.fullName),c.a.createElement("div",null,c.a.createElement("strong",null,"Contacts: "),c.a.createElement("div",null,t.contacts.facebook),c.a.createElement("div",null,t.contacts.github),c.a.createElement("div",null,t.contacts.instagram),c.a.createElement("div",null,t.contacts.mainLink),c.a.createElement("div",null,t.contacts.twitter),c.a.createElement("div",null,t.contacts.vk),c.a.createElement("div",null,t.contacts.website),c.a.createElement("div",null,t.contacts.youtube))))},B=function(e){return c.a.createElement("div",null,c.a.createElement(N,{isOwner:e.isOwner,savePhoto:e.savePhoto,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),c.a.createElement(j,null))},M=n(5),T=n(241),F=n(15),A=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"updateProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.updateProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.updateProfile()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(B,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})))}}]),n}(c.a.Component),U={getUserProfile:i.c,getStatus:i.b,updateStatus:i.f,savePhoto:i.e};t.default=Object(F.d)(T.a,Object(O.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserId:e.auth.userId}}),U),M.f)(A)}}]);
//# sourceMappingURL=4.74417e72.chunk.js.map