(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679,98,452],{2808:function(t,e,r){var n={"./categories/index.ts":[4838,838],"./docker/index.ts":[46,46],"./flutter/index.ts":[1098,98],"./javascript/index.ts":[4127,127],"./kubernetes/index.ts":[6298,298],"./mysql/index.ts":[9938,938],"./node_js/index.ts":[9964,964],"./php/index.ts":[1608,608],"./react/index.ts":[4478,478],"./redis/index.ts":[5039,39],"./typescript/index.ts":[4452,452],"./yii/index.ts":[1960,960]};function s(t){if(!r.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],s=e[0];return r.e(e[1]).then((function(){return r(s)}))}s.keys=function(){return Object.keys(n)},s.id=2808,t.exports=s},1945:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return r(4957)}])},9201:function(t,e,r){"use strict";var n=r(5893),s=(r(7294),r(5861)),o=r(2963),i=r(6638),a=r(1163),c=r(1664),u=r.n(c);e.Z=function(){var t=(0,a.useRouter)(),e=t.query.slug;return t.route,(0,n.jsx)("div",{role:"presentation",children:(0,n.jsxs)(o.Z,{"aria-label":"breadcrumb",children:[(0,n.jsx)(u(),{color:"text.primary",href:"/",style:{cursor:"pointer"},children:(0,n.jsxs)("a",{children:[(0,n.jsx)(i.Z,{sx:{mr:.5,ml:2,pb:0},fontSize:"inherit"})," ","\u0413\u043b\u0430\u0432\u043d\u0430\u044f"]})}),(0,n.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},color:"text.primary",children:function(){switch(t.route.substring(1)){case"contacts":return"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b";case"news":return"\u041d\u043e\u0432\u043e\u0441\u0442\u0438";case"posts":return"\u0421\u0442\u0430\u0442\u044c\u0438";case"notes":return"\u0417\u0430\u043c\u0435\u0442\u043a\u0438";case"category":return"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438";default:return""+e}}()})]})})}},863:function(t,e,r){"use strict";r.d(e,{Z:function(){return h}});var n=r(5893),s=(r(7294),r(2734)),o=r(7357),i=r(6242),a=r(4267),c=r(3965),u=r(5861),l=r(1163),d=r(1664),p=r.n(d);function h(t){var e=t.author,r=t.createdDate,d=t.title,h=t.url,f=t.description,x=(t.post,t.image),g=function(){return console.log("router.query:"),console.log(y.query),y.query.slug?y.query.slug:null},y=((0,s.Z)(),(0,l.useRouter)());return(0,n.jsxs)(i.Z,{sx:{display:"flex",width:"100%",height:"200px",mb:"10px"},children:[(0,n.jsx)(p(),{href:g()?"/posts/"+g()+"/"+h:h,children:(0,n.jsx)(c.Z,{component:"img",sx:{width:"200px",height:"200px",cursor:"pointer"},image:g()?"/posts/"+g()+"/logo.png":x,alt:y.query.slug||d})}),(0,n.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",width:"100%"},children:[(0,n.jsxs)(a.Z,{sx:{flex:"1 0 auto",maxHeight:"70%"},children:[(0,n.jsx)(u.Z,{href:"/posts/"+g()+"/"+h,component:p(),variant:"h3",children:d}),(0,n.jsxs)(u.Z,{variant:"subtitle1",color:"text.secondary",component:"div",children:[r," ",e]}),(0,n.jsx)(u.Z,{href:"/posts/"+g()+"/"+h,component:p(),children:f.slice(0,200)+".."})]}),(0,n.jsx)(o.Z,{sx:{display:"flex",justifyContent:"end",pl:1,pb:1,height:"30%"}})]})]})}},3944:function(t,e,r){"use strict";var n=r(5893),s=r(1528),o=r(2359),i=r(2734),a=r(7036);e.Z=function(){return(0,i.Z)(),(0,n.jsx)(s.Z,{sx:{width:"100%",bottom:0,backgroundColor:a.Z[800]},children:(0,n.jsx)(o.Z,{label:"\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b \xa9",showLabel:!0})})}},1098:function(t,e,r){"use strict";r.r(e),r.d(e,{data:function(){return n}});var n=[{title:"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 Flutter 1",description:"\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0433\u043e Flutter: \u043f\u043e\u0447\u0435\u043c\u0443 \u044d\u0442\u043e \u0442\u0430\u043a \u0432\u0430\u0436\u043d\u043e, \u043a\u0430\u043a \u044d\u0442\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u044f\u0437\u044b\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439, \u043a\u0430\u043a, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430.",image:"/posts/flutter/logo.png",created_date:"03.10.2021",author:"shandyrov askar",post:"/posts/flutter/intro-1",url:"intro-1"}]},4452:function(t,e,r){"use strict";r.r(e),r.d(e,{data:function(){return n}});var n=[{title:"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 Typescript1",description:"\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0433\u043e Typescript: \u043f\u043e\u0447\u0435\u043c\u0443 \u044d\u0442\u043e \u0442\u0430\u043a \u0432\u0430\u0436\u043d\u043e, \u043a\u0430\u043a \u044d\u0442\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u044f\u0437\u044b\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439, \u043a\u0430\u043a, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430.",image:"/posts/typescript/logo.png",created_date:"03.09.2000",author:"shandyrov askar",post:"/posts/typescript/intro-1",url:"intro-1"},{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u044b Typescript 2015",description:"\u041e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u0440\u0438\u0440\u043e\u0434\u0430 JavaScript \u0432\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u0430 \u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u0434. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u044b \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0432 \u044d\u0442\u043e\u043c.",image:"/posts/typescript/logo.png",created_date:"01.12.2015",author:"ahandyrov askar",post:"/posts/typescript/intro-2",url:"intro-2"},{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u044b Typescript 3",description:"\u041e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u0440\u0438\u0440\u043e\u0434\u0430 JavaScript \u0432\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u0430 \u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u0434. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u044b \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0432 \u044d\u0442\u043e\u043c.",image:"/posts/typescript/logo.png",created_date:"01.12.2020",author:"ahandyrov askar",post:"/posts/typescript/intro-2",url:"intro-2"},{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u044b Typescript 4",description:"\u041e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u0440\u0438\u0440\u043e\u0434\u0430 JavaScript \u0432\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u0430 \u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u0434. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u044b \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0432 \u044d\u0442\u043e\u043c.",image:"/posts/typescript/logo.png",created_date:"02.10.2000",author:"ahandyrov askar",post:"/posts/typescript/intro-2",url:"intro-2"}]},4957:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return D}});var n=r(5893),s=r(7294),o=r(8815),i=r(9520),a=r(7357),c=r(2734),u=r(8396),l=r(7036),d=r(1163),p=r(9201),h=(r(4051),r(8462)),f=r(1519),x=r(863),g=r(6447),y=r(9400),m=r(9067),j=r(4452),v=r(4127),Z=r(46),b=r(9938),_=r(6298),w=r(1098);function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function S(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,s,o=[],i=!0,a=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(o.push(n.value),!e||o.length!==e);i=!0);}catch(c){a=!0,s=c}finally{try{i||null==r.return||r.return()}finally{if(a)throw s}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(){var t=(0,d.useRouter)(),e=S(s.useState(0),2),r=e[0],o=e[1],i=S(s.useState(5),2),c=i[0],u=i[1],l=S(s.useState(5),2),p=l[0],k=(l[1],S(s.useState([]),2)),E=k[0],q=k[1];console.log("router.query:"),console.log(t);(0,m.Z)({count:5}).items;return s.useEffect((function(){r&&console.log("startInterval:"+r)}),[r]),s.useEffect((function(){var t=v.data.concat(j.data).concat(Z.data).concat(b.data).concat(_.data).concat(w.data).sort((function(t,e){var r=Date.parse(t.created_date);return Date.parse(e.created_date)-r}));q(t)}),[]),s.useEffect((function(){}),[c]),s.useEffect((function(){t.query.slug}),[t.query.slug]),(0,n.jsxs)(a.Z,{sx:{width:"100%",maxWidth:"100%"},children:[(0,n.jsx)(h.Z,{component:"div","aria-label":"main mailbox folders",sx:{p:0,m:0,width:"100%"},children:E.slice(r,c).map((function(t,e){return(0,n.jsx)(x.Z,{title:t.title,createdDate:t.created_date,author:t.author,url:t.url,description:t.description,post:t.post,image:t.image},e)}))}),(0,n.jsx)(f.Z,{}),(0,n.jsx)(g.Z,{spacing:2,sx:{display:"block"},children:(0,n.jsx)(y.Z,{count:Math.ceil(E.length/p),size:"large",onChange:function(t,e){o((e-1)*p),u(e*p)}})})]})}function q(t){var e=t.gist_id;return console.log("POSTS:"+e),(0,n.jsx)(E,{})}var T=function(){return(0,n.jsx)("p",{children:"ok"})};function O(){return(0,n.jsx)(T,{})}var C=r(3944);function D(){var t=(0,c.Z)(),e=((0,d.useRouter)(),(0,u.Z)(t.breakpoints.down("lg")));return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)(o.ZP,{}),(0,n.jsx)(i.Z,{maxWidth:"xl",children:(0,n.jsxs)(a.Z,{sx:{height:"auto"},style:{backgroundColor:"dark"===t.palette.mode?l.Z[900]:l.Z[300]},children:[(0,n.jsx)("img",{src:"/languages/common/header-desktop.png",width:"100%",height:150,alt:"header_image",loading:"lazy",style:{objectFit:"cover"}}),(0,n.jsx)(a.Z,{sx:{p:0},children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.Z,{}),(0,n.jsx)(a.Z,{sx:{p:4,minHeight:"80vh"},children:e?(0,n.jsx)(O,{}):(0,n.jsx)(q,{})}),(0,n.jsx)(C.Z,{})]})})]})})]})}}},function(t){t.O(0,[391,258,917,46,298,127,938,774,888,179],(function(){return e=1945,t(t.s=e);var e}));var e=t.O();_N_E=e}]);