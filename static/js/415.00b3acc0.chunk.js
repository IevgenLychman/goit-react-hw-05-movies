"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{877:function(n,t,e){e.d(t,{Mc:function(){return o},uV:function(){return u},wr:function(){return c}});var r="701545915cb61a19f4461a09eaf19948",c=function(){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(r)).then((function(n){return n.json()})).then((function(n){return n.results}))},o=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()})).then((function(n){return n}))},u=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()})).then((function(n){return n.cast}))}},415:function(n,t,e){e.r(t);var r=e(433),c=e(861),o=e(439),u=e(687),i=e.n(u),a=e(791),f=e(87),s=e(877),h=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,o.Z)(n,2),e=t[0],u=t[1];return(0,a.useEffect)((function(){function n(){return(n=(0,c.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.wr)();case 3:t=n.sent,u((0,r.Z)(t)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,h.jsx)("div",{children:(0,h.jsx)("ul",{children:e.map((function(n){return(0,h.jsx)("li",{children:(0,h.jsx)(f.OL,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})})}},861:function(n,t,e){function r(n,t,e,r,c,o,u){try{var i=n[o](u),a=i.value}catch(f){return void e(f)}i.done?t(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,o){var u=n.apply(t,e);function i(n){r(u,c,o,i,a,"next",n)}function a(n){r(u,c,o,i,a,"throw",n)}i(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=415.00b3acc0.chunk.js.map