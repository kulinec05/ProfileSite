(this.webpackJsonpprofile=this.webpackJsonpprofile||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(30),c=a.n(s),o=(a(104),a(9)),r=(a(105),a(106),a.p+"static/media/begin.f74e2696.jpg"),l=a.p+"static/media/mid.2e8cd70b.jpg",d=a.p+"static/media/flor.74643d33.jpg",j=a(132),b=a(128),h=a(130),u=a(134),f=a(93),O=a(136),x=a(135),g=a(127),m=a(129),p=a(80),y=a.p+"static/media/books.3be8226b.svg",v=a.p+"static/media/cafe.70f8e86d.svg",w=a.p+"static/media/hacker.db609236.svg",k=a(133),I=a(94),S=a(14),N=a(3),T=a(81),C=a(131),L=a(1);function H(e){var t=e.state,a=e.setState,i=Object(T.b)(),n=i.control,s=i.handleSubmit,c=i.reset,o=i.watch;return Object(L.jsxs)(C.a,{onSubmit:s((function(i){var n=Object(N.a)(Object(N.a)({},t),{},{todoItems:[Object(N.a)({id:e.generateId(),done:!1},i)].concat(Object(S.a)(t.todoItems))});a(n),c({title:"",details:""})})),children:[Object(L.jsx)(T.a,{name:"title",control:n,defaultValue:"",rules:{required:!0},render:function(e){var t=e.field;return Object(L.jsx)(C.a.Control,Object(N.a)(Object(N.a)({className:"mb-2"},t),{},{type:"text",placeholder:"Title"}))}}),Object(L.jsx)(T.a,{name:"details",control:n,defaultValue:"",render:function(e){var t=e.field;return Object(L.jsx)(C.a.Control,Object(N.a)(Object(N.a)({className:"mb-2"},t),{},{type:"text",placeholder:"Description"}))}}),Object(L.jsx)(I.a,{className:"mb-2",variant:"primary",type:"submit",disabled:!o("title"),children:"Add"})]})}var D=a(96),E=a(126),M={type:"spring",damping:25,stiffness:120,duration:.25},R=function(e){var t=e.state,a=e.setState,i=t.todoItems.slice().sort((function(e,t){return e.done&&!t.done?1:!e.done&&t.done?-1:0}));return Object(L.jsx)("ul",{children:i.map((function(e){return Object(L.jsx)(m.a.li,{transition:M,layout:!0,children:Object(L.jsx)(B,{state:t,setState:a,item:e})},e.id)}))})},B=function(e){var t=e.item,a=e.state,i=e.setState;return Object(L.jsxs)(u.a,{bg:"light",children:[Object(L.jsxs)(u.a.Header,{className:"todo-header",children:[t.title,Object(L.jsx)(D.a,{className:"align-self-end",onClick:function(){var e={todoItems:a.todoItems.filter((function(e){return e.id!==t.id}))};i(e)}})]}),t.details?Object(L.jsx)(u.a.Body,{children:Object(L.jsx)(u.a.Text,{variant:"body2",component:"p",children:t.details})}):null,Object(L.jsx)(E.a,{className:"m-2",id:"toggle-check",type:"checkbox",variant:"outline-primary",value:"1",onClick:function(){var e=a.todoItems.findIndex((function(e){return e.id===t.id})),n=a.todoItems[e],s={todoItems:[].concat(Object(S.a)(a.todoItems.slice(0,e)),[Object(N.a)(Object(N.a)({},t),{},{done:!n.done})],Object(S.a)(a.todoItems.slice(e+1)))};i(s)},checked:t.done,children:t.done?"Not Yet":"Done"})]})},A=function(e){var t=Object(i.useState)({todoItems:[]}),a=Object(o.a)(t,2),n=a[0],s=a[1],c="todoListState";function r(){return"".concat(Date.now().toString(36),"-").concat(Math.floor(1e16*Math.random()).toString(36))}return Object(i.useEffect)((function(){var e=localStorage.getItem(c);if(e)try{s(JSON.parse(e))}catch(t){}}),[]),Object(i.useEffect)((function(){localStorage.setItem(c,JSON.stringify(n))}),[n]),Object(L.jsxs)(k.a,{show:e.show,onHide:e.handleClose,children:[Object(L.jsx)(k.a.Header,{closeButton:!0,children:Object(L.jsx)(k.a.Title,{children:" Todo List"})}),Object(L.jsxs)(k.a.Body,{children:[Object(L.jsx)(H,{state:n,generateId:r,setState:s}),Object(L.jsx)(R,{state:n,generateId:r,setState:s})]}),Object(L.jsx)(k.a.Footer,{children:Object(L.jsx)(I.a,{variant:"secondary",onClick:e.handleClose,children:"Close"})})]})},F=a.p+"static/media/todolist.93785eeb.svg";var P=function(){return function(e){var t=Object(i.useState)(!1),a=Object(o.a)(t,2),n=a[0],s=a[1];return Object(i.useEffect)((function(){var t=window.matchMedia(e);t.matches!==n&&s(t.matches);var a=function(){s(t.matches)};return t.addListener(a),function(){return t.removeListener(a)}}),[n,e]),n}("(min-width: 480px)")},V=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],s=P(),c=Object(i.useState)(!1),k=Object(o.a)(c,2),I=k[0],S=k[1],N=Object(i.useState)(!1),T=Object(o.a)(N,2),C=T[0],H=T[1],D=Object(O.a)().scrollYProgress,E=Object(x.a)(D,[0,.9],[0,1]),M=Object(g.a)(E,{stiffness:400,damping:90});return Object(i.useEffect)((function(){return E.onChange((function(e){return S(e>=1)}))}),[E]),Object(L.jsxs)("div",{children:[Object(L.jsx)(j.a,{bg:"dark",variant:"dark",fixed:"top",children:Object(L.jsxs)(b.a,{className:"justify-content-center",children:[Object(L.jsxs)("svg",{className:"progress-icon",viewBox:"0 0 60 60",children:[Object(L.jsx)(m.a.path,{fill:"none",strokeWidth:"5",stroke:"white",strokeDasharray:"0 1",d:"M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0",style:{pathLength:M,rotate:90,translateX:5,translateY:5,scaleX:-1}}),Object(L.jsx)(m.a.path,{fill:"none",strokeWidth:"5",stroke:"white",d:"M14,26 L 22,33 L 35,16",initial:!1,strokeDasharray:"0 1",animate:{pathLength:I?1:0}})]}),Object(L.jsxs)(h.a,{children:[Object(L.jsx)(m.a.div,{whileHover:{scale:1.2},whileTap:{scale:.9,borderRadius:"100%"},children:Object(L.jsx)(h.a.Link,{href:"#home",children:"Home"})}),Object(L.jsx)(m.a.div,{whileHover:{scale:1.2},whileTap:{scale:.9,borderRadius:"100%"},children:Object(L.jsx)(h.a.Link,{href:"#home",children:"Home"})}),Object(L.jsx)(m.a.div,{whileHover:{scale:1.2},whileTap:{scale:.9,borderRadius:"100%"},children:Object(L.jsx)(h.a.Link,{href:"#home",children:"Home"})})]})]})}),Object(L.jsxs)(f.Fade,{left:!0,children:[Object(L.jsx)("div",{children:Object(L.jsxs)(u.a,{className:"card-a",children:[Object(L.jsx)(m.a.div,{initial:{opacity:.5},animate:{opacity:1},transition:{duration:5},children:Object(L.jsx)(p.Parallax,{bgImage:l,strength:200,style:{overflow:"visible",position:"relative"},children:Object(L.jsx)("div",{style:{height:"100vh"}})})}),Object(L.jsxs)(u.a.ImgOverlay,{className:"first-plan",style:{color:"white"},children:[Object(L.jsx)(u.a.Title,{className:"text-center",children:Object(L.jsxs)(m.a.div,{children:[Object(L.jsx)(m.a.p,{initial:{opacity:1,y:-400},animate:{opacity:0,y:300,scale:2,x:-100},transition:{type:"spring",duration:7},children:"BE READY"}),Object(L.jsx)(m.a.p,{initial:{opacity:1,y:-400},animate:{opacity:0,y:300,scale:2,x:100},transition:{type:"spring",delay:2,duration:7},children:"TO HAVE LITTLE BIT"}),Object(L.jsx)(m.a.h1,{initial:{opacity:1,y:-400},animate:{opacity:0,y:300,scale:2},transition:{type:"spring",delay:4,duration:9},children:"MAGIC"})]})}),Object(L.jsxs)(u.a.Text,{className:"text-center",children:[Object(L.jsx)(m.a.h1,{initial:{opacity:0,scale:4},animate:{opacity:1,scale:1},transition:{type:"spring",duration:2,delay:6},children:"PORTFOLIO"}),Object(L.jsx)(m.a.h2,{initial:{opacity:0,scale:3},animate:{opacity:1,scale:1},transition:{type:"spring",duration:2,delay:7},children:"MAGOMEDOV SHAMIL ARSENOVICH"})]})]})]})}),Object(L.jsx)("div",{children:Object(L.jsxs)(u.a,{className:"card-a",children:[Object(L.jsx)(p.Parallax,{bgImage:r,strength:200,style:{overflow:"visible",position:"relative"},children:Object(L.jsx)("div",{style:{height:"100vh"}})}),Object(L.jsxs)(u.a.ImgOverlay,{className:"second-plan",children:[Object(L.jsx)(u.a.Title,{children:"My last works"}),Object(L.jsxs)("ul",{className:"surface",children:[Object(L.jsx)(m.a.li,{className:"box",drag:s?"y":"x",dragDirectionLock:!0,dragConstraints:s?{top:0,bottom:0}:{left:0,right:0},dragTransition:{bounceStiffness:600,bounceDamping:10},whileHover:{rotate:10,opacity:.5},whileTap:{rotate:-180,borderRadius:"100%"},onDragEnd:function(e,t){(s?t.offset.y>=200:t.offset.x>=90)?window.open("https://kulinec05.github.io/avito/"):(s?t.offset.y<=-200:t.offset.x<=-90)&&console.log("wow")},children:Object(L.jsx)("img",{alt:"img",src:w,draggable:"false"})}),Object(L.jsx)(m.a.li,{className:"box",drag:s?"y":"x",dragConstraints:s?{top:0,bottom:0,right:50,left:50}:{left:0,right:0,top:60,bottom:60},whileHover:{rotate:10,opacity:.5},dragTransition:{bounceStiffness:600,bounceDamping:10},whileTap:{rotate:-180,borderRadius:"100%"},onDragEnd:function(e,t){(s?t.offset.y>=200:t.offset.x>=90)?window.open("https://kulinec05.github.io/Cafe/"):(s?t.offset.y<=-200:t.offset.x<=-90)&&console.log("wow")},children:Object(L.jsx)("img",{alt:"img",src:v,draggable:"false"})}),Object(L.jsx)(m.a.li,{className:"box",drag:s?"y":"x",dragConstraints:s?{top:0,bottom:0}:{left:0,right:0},whileHover:{rotate:10,opacity:.5},whileTap:{rotate:-180,borderRadius:"100%"},dragTransition:{bounceStiffness:600,bounceDamping:10},onDragEnd:function(e,t){(s?t.offset.y>=200:t.offset.x>=90)?window.open("https://kulinec05.github.io/bookSearch/"):(s?t.offset.y<=-200:t.offset.x<=-90)&&console.log("wow")},children:Object(L.jsx)("img",{alt:"img",src:y,draggable:"false"})}),Object(L.jsx)(m.a.li,{className:"box",drag:s?"y":"x",dragConstraints:s?{top:0,bottom:0}:{left:0,right:0},whileHover:{rotate:10,opacity:.5},onClick:function(){return n(!0)},whileTap:{rotate:-180,borderRadius:"100%"},children:Object(L.jsx)("img",{alt:"img",src:F,draggable:"false"})})]}),Object(L.jsx)(u.a.Text,{children:"Last updated "})]})]})}),Object(L.jsx)("div",{children:Object(L.jsxs)(u.a,{className:"card-a",children:[Object(L.jsx)(p.Parallax,{bgImage:d,strength:200,style:{overflow:"visible",position:"relative"},renderLayer:function(e){return C?null:Object(L.jsx)("div",{children:Object(L.jsx)("div",{onClick:function(){return H(!0)},style:{position:"absolute",background:"rgba(255, 125, 0, ".concat(e,")"),left:"50%",top:"50%",borderRadius:"50%",transform:"translate(-50%,-50%)",width:500*e,height:500*e,color:"black"}})})},children:Object(L.jsx)("div",{style:{height:"100vh"}})}),Object(L.jsx)(u.a.ImgOverlay,{className:"second-plan",children:Object(L.jsx)(A,{show:a,handleClose:function(){return n(!1)}})})]})})]})]})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,137)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),s(e),c(e)}))};c.a.render(Object(L.jsx)(n.a.StrictMode,{children:Object(L.jsx)(V,{})}),document.getElementById("root")),J()}},[[123,1,2]]]);
//# sourceMappingURL=main.5ab090e8.chunk.js.map