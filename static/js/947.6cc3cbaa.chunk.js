"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{877:function(e,n,t){t.d(n,{Mc:function(){return c},mv:function(){return a},uV:function(){return o},wr:function(){return i}});var r="701545915cb61a19f4461a09eaf19948",i=function(){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(r)).then((function(e){return e.json()})).then((function(e){return e.results}))},c=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(r,"&language=en-US")).then((function(e){return e.json()})).then((function(e){return e}))},o=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(r,"&language=en-US")).then((function(e){return e.json()})).then((function(e){return e.cast}))},a=function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){return e.results}))}},947:function(e,n,t){t.r(n);var r=t(861),i=t(439),c=t(687),o=t.n(c),a=t(877),s=t(791),u=t(689),h=t(87),l=t(184);n.default=function(){var e,n,t=(0,u.UO)().movieId,c=(0,s.useState)({}),d=(0,i.Z)(c,2),f=d[0],v=d[1],p=null!==(e=null===(n=(0,u.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.Mc)(n);case 3:t=e.sent,v({imgUrl:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),rating:Math.floor(10*t.vote_average),genres:t.genres.map((function(e){return e.name})).join(" "),title:t.title,owerview:t.overview,year:new Date(t.release_date).getUTCFullYear()}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(n){e.apply(this,arguments)}(t)}),[t]),(0,l.jsx)("main",{children:(0,l.jsxs)("div",{children:[(0,l.jsx)(h.OL,{to:p,children:"Go back"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:f.imgUrl,alt:"Movie poster",width:"250",height:"350"}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("h2",{children:[f.title," (",f.year,")"]}),(0,l.jsxs)("p",{children:["User score: ",f.rating,"%"]}),(0,l.jsx)("h3",{children:"Owerview"}),(0,l.jsx)("p",{children:f.owerview}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("p",{children:f.genres})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(h.OL,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(h.OL,{to:"reviews",children:"Reviews"})})]})]}),(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(u.j3,{})})]})})}},861:function(e,n,t){function r(e,n,t,r,i,c,o){try{var a=e[c](o),s=a.value}catch(u){return void t(u)}a.done?n(s):Promise.resolve(s).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,c){var o=e.apply(n,t);function a(e){r(o,i,c,a,s,"next",e)}function s(e){r(o,i,c,a,s,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=947.6cc3cbaa.chunk.js.map