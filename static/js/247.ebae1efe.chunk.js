"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{877:function(t,n,e){e.d(n,{Mc:function(){return i},uV:function(){return o},wr:function(){return c}});var r="701545915cb61a19f4461a09eaf19948",c=function(){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(r)).then((function(t){return t.json()})).then((function(t){return t.results}))},i=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(r,"&language=en-US")).then((function(t){return t.json()})).then((function(t){return t}))},o=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(r,"&language=en-US")).then((function(t){return t.json()})).then((function(t){return t.cast}))}},247:function(t,n,e){e.r(n);var r=e(433),c=e(861),i=e(439),o=e(687),u=e.n(o),a=e(877),s=e(791),f=e(689),h=e(184);n.default=function(){var t=(0,f.UO)().movieId,n=(0,s.useState)([]),e=(0,i.Z)(n,2),o=e[0],p=e[1];return(0,s.useEffect)((function(){function n(){return(n=(0,c.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,a.uV)(n);case 3:e=t.sent,p((0,r.Z)(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(t){n.apply(this,arguments)}(t)}),[t]),(0,h.jsx)("ul",{children:o.map((function(t){return(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w500/"+t.profile_path:"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",alt:"",width:"100",height:"150"}),(0,h.jsx)("p",{children:t.name}),(0,h.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})}},861:function(t,n,e){function r(t,n,e,r,c,i,o){try{var u=t[i](o),a=u.value}catch(s){return void e(s)}u.done?n(a):Promise.resolve(a).then(r,c)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(c,i){var o=t.apply(n,e);function u(t){r(o,c,i,u,a,"next",t)}function a(t){r(o,c,i,u,a,"throw",t)}u(void 0)}))}}e.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=247.ebae1efe.chunk.js.map