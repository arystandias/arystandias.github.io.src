(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922,964,452,960],{2808:function(t,e,r){var n={"./categories/index.ts":[4838,838],"./docker/index.ts":[46,46],"./flutter/index.ts":[1098,98],"./javascript/index.ts":[4127,127],"./kubernetes/index.ts":[6298,298],"./mysql/index.ts":[9938,938],"./node_js/index.ts":[9964,964],"./php/index.ts":[1608,608],"./react/index.ts":[4478,478],"./redis/index.ts":[5039,39],"./typescript/index.ts":[4452,452],"./yii/index.ts":[1960,960]};function s(t){if(!r.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],s=e[0];return r.e(e[1]).then((function(){return r(s)}))}s.keys=function(){return Object.keys(n)},s.id=2808,t.exports=s},592:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(7202)}])},9201:function(t,e,r){"use strict";var n=r(5893),s=(r(7294),r(5861)),o=r(2963),i=r(6638),a=r(1163),u=r(1664),c=r.n(u);e.Z=function(){var t=(0,a.useRouter)(),e=t.query.slug;return t.route,console.log("router:"),console.log(t),(0,n.jsx)("div",{role:"presentation",children:(0,n.jsxs)(o.Z,{"aria-label":"breadcrumb",children:[(0,n.jsx)(c(),{color:"text.primary",href:"/",style:{cursor:"pointer"},children:(0,n.jsxs)("a",{children:[(0,n.jsx)(i.Z,{sx:{mr:.5,ml:2,pb:0},fontSize:"inherit"})," ","\u0413\u043b\u0430\u0432\u043d\u0430\u044f"]})}),(0,n.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},color:"text.primary",children:function(){switch(t.route.substring(1)){case"contacts":return"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b";case"news":return"\u041d\u043e\u0432\u043e\u0441\u0442\u0438";case"posts":return"\u0421\u0442\u0430\u0442\u044c\u0438";case"notes":return"\u0417\u0430\u043c\u0435\u0442\u043a\u0438";case"category":return"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438";default:return""+e}}()})]})})}},863:function(t,e,r){"use strict";r.d(e,{Z:function(){return h}});var n=r(5893),s=(r(7294),r(2734)),o=r(7357),i=r(6242),a=r(4267),u=r(3965),c=r(5861),l=r(1163),d=r(1664),p=r.n(d);function h(t){var e=t.author,r=t.createdDate,d=t.title,h=t.url,g=t.description,y=(t.post,t.image),f=function(){return console.log("router.query:"),console.log(x.query),x.query.slug?x.query.slug:null},x=((0,s.Z)(),(0,l.useRouter)());return(0,n.jsxs)(i.Z,{sx:{display:"flex",width:"100%",height:"200px",mb:"10px"},children:[(0,n.jsx)(p(),{href:f()?"/posts/"+f()+"/"+h:h,children:(0,n.jsx)(u.Z,{component:"img",sx:{width:"200px",height:"200px",cursor:"pointer"},image:f()?"/posts/"+f()+"/logo.png":y,alt:x.query.slug||d})}),(0,n.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",width:"100%"},children:[(0,n.jsxs)(a.Z,{sx:{flex:"1 0 auto",maxHeight:"70%"},children:[(0,n.jsx)(c.Z,{href:"/posts/"+f()+"/"+h,component:p(),variant:"h3",children:d}),(0,n.jsxs)(c.Z,{variant:"subtitle1",color:"text.secondary",component:"div",children:[r," ",e]}),(0,n.jsx)(c.Z,{href:"/posts/"+f()+"/"+h,component:p(),children:g.slice(0,200)+".."})]}),(0,n.jsx)(o.Z,{sx:{display:"flex",justifyContent:"end",pl:1,pb:1,height:"30%"}})]})]})}},3944:function(t,e,r){"use strict";var n=r(5893),s=r(1528),o=r(2359),i=r(2734),a=r(7036);e.Z=function(){return(0,i.Z)(),(0,n.jsx)(s.Z,{sx:{width:"100%",bottom:0,backgroundColor:a.Z[800]},children:(0,n.jsx)(o.Z,{label:"\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b \xa9",showLabel:!0})})}},9964:function(t,e,r){"use strict";r.r(e),r.d(e,{data:function(){return n}});var n=[{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 node js",description:"node js \u2014 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u0430\u044f \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445. \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 MySQL \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442 \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0446\u0438\u044f Oracle, \u043f\u043e\u043b\u0443\u0447\u0438\u0432\u0448\u0430\u044f \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0442\u043e\u0440\u0433\u043e\u0432\u0443\u044e \u043c\u0430\u0440\u043a\u0443 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u043f\u043e\u0433\u043b\u043e\u0449\u0451\u043d\u043d\u043e\u0439 Sun Microsystems, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0440\u0430\u043d\u0435\u0435 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u043b\u0430 \u0448\u0432\u0435\u0434\u0441\u043a\u0443\u044e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e php AB.",image:"/posts/node_js/logo.png",created_date:"24.04.2022",author:"shandyrov askar",post:"/posts/redis/intro-1",url:"intro-1"},{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u044b node_js 2",description:"\u041e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u0440\u0438\u0440\u043e\u0434\u0430 react \u0432\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u0430 \u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u0434. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u044b \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0432 \u044d\u0442\u043e\u043c.",image:"/posts/node_js/logo.png",created_date:"02.01.2022",author:"ahandyrov askar",post:"/posts/node_js/intro-2",url:"intro-2"},{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u044b node_js 3",description:"\u041e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u0440\u0438\u0440\u043e\u0434\u0430 react \u0432\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u0430 \u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u0434. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u044b \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0432 \u044d\u0442\u043e\u043c.",image:"/posts/node_js/logo.png",created_date:"02.01.2022",author:"ahandyrov askar",post:"/posts/node_js/intro-2",url:"intro-2"},{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u044b node_js 4",description:"\u041e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u0440\u0438\u0440\u043e\u0434\u0430 react \u0432\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u0430 \u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u0434. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u044b \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0432 \u044d\u0442\u043e\u043c.",image:"/posts/node_js/logo.png",created_date:"02.01.2022",author:"ahandyrov askar",post:"/posts/node_js/intro-2",url:"intro-2"}]},4452:function(t,e,r){"use strict";r.r(e),r.d(e,{data:function(){return n}});var n=[{title:"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 Typescript1",description:"\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0433\u043e Typescript: \u043f\u043e\u0447\u0435\u043c\u0443 \u044d\u0442\u043e \u0442\u0430\u043a \u0432\u0430\u0436\u043d\u043e, \u043a\u0430\u043a \u044d\u0442\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u044f\u0437\u044b\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439, \u043a\u0430\u043a, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430.",image:"/posts/typescript/logo.png",created_date:"03.09.2000",author:"shandyrov askar",post:"/posts/typescript/intro-1",url:"intro-1"},{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u044b Typescript 2015",description:"\u041e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u0440\u0438\u0440\u043e\u0434\u0430 JavaScript \u0432\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u0430 \u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u0434. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u044b \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0432 \u044d\u0442\u043e\u043c.",image:"/posts/typescript/logo.png",created_date:"01.12.2015",author:"ahandyrov askar",post:"/posts/typescript/intro-2",url:"intro-2"},{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u044b Typescript 3",description:"\u041e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u0440\u0438\u0440\u043e\u0434\u0430 JavaScript \u0432\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u0430 \u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u0434. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u044b \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0432 \u044d\u0442\u043e\u043c.",image:"/posts/typescript/logo.png",created_date:"01.12.2020",author:"ahandyrov askar",post:"/posts/typescript/intro-2",url:"intro-2"},{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u044b Typescript 4",description:"\u041e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u0440\u0438\u0440\u043e\u0434\u0430 JavaScript \u0432\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u0430 \u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u0434. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u044b \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0432 \u044d\u0442\u043e\u043c.",image:"/posts/typescript/logo.png",created_date:"02.10.2000",author:"ahandyrov askar",post:"/posts/typescript/intro-2",url:"intro-2"}]},1960:function(t,e,r){"use strict";r.r(e),r.d(e,{data:function(){return n}});var n=[{title:"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 Yii",description:"\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0433\u043e Typescript: \u043f\u043e\u0447\u0435\u043c\u0443 \u044d\u0442\u043e \u0442\u0430\u043a \u0432\u0430\u0436\u043d\u043e, \u043a\u0430\u043a \u044d\u0442\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u044f\u0437\u044b\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439, \u043a\u0430\u043a, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430.",image:"/posts/yii/logo.png",created_date:"03.09.2000",author:"shandyrov askar",post:"/posts/yii/intro-1",url:"intro-1"},{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u044b Yii 2015",description:"\u041e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u0440\u0438\u0440\u043e\u0434\u0430 JavaScript \u0432\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u0430 \u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u0434. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u044b \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0432 \u044d\u0442\u043e\u043c.",image:"/posts/yii/logo.png",created_date:"01.12.2015",author:"ahandyrov askar",post:"/posts/yii/intro-2",url:"intro-2"},{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u044b Yii 3",description:"\u041e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u0440\u0438\u0440\u043e\u0434\u0430 JavaScript \u0432\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u0430 \u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u0434. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u044b \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0432 \u044d\u0442\u043e\u043c.",image:"/posts/yii/logo.png",created_date:"01.12.2020",author:"ahandyrov askar",post:"/posts/yii/intro-2",url:"intro-2"},{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u044b Yii 4",description:"\u041e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u0440\u0438\u0440\u043e\u0434\u0430 JavaScript \u0432\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u0430 \u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u0434. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u044b \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0432 \u044d\u0442\u043e\u043c.",image:"/posts/yii/logo.png",created_date:"02.10.2000",author:"ahandyrov askar",post:"/posts/yii/intro-2",url:"intro-2"}]},7202:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return N}});var n=r(5893),s=r(7294),o=r(8815),i=r(7357),a=r(9520),u=r(7036),c=r(1163),l=r(2734),d=r(8396),p=r(9201),h=(r(4051),r(8462)),g=r(1519),y=r(863),f=r(6447),x=r(9400),m=r(9067),j=r(4452),v=r(4127),_=r(4478),Z=r(46),b=r(9938),k=r(1608),w=r(6298),S=r(1960),q=r(9964);function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function T(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,s,o=[],i=!0,a=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(o.push(n.value),!e||o.length!==e);i=!0);}catch(u){a=!0,s=u}finally{try{i||null==r.return||r.return()}finally{if(a)throw s}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return E(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(){var t=function(){switch(r.query.slug){case"typescript":return j.data;case"javascript":return v.data;case"docker":return Z.data;case"mysql":return b.data;case"php":return k.data;case"kubernetes":return w.data;case"yii":return S.data;case"react":return _.data;case"node_js":return q.data}return v.data},e=T(s.useState(1),2),r=(e[0],e[1],(0,c.useRouter)()),o=T(s.useState(0),2),a=o[0],u=o[1],l=T(s.useState(5),2),d=l[0],p=l[1],E=T(s.useState(5),2),O=E[0];E[1];(0,m.Z)({count:5}).items;return s.useEffect((function(){a&&console.log("startInterval:"+a)}),[a]),s.useEffect((function(){}),[d]),s.useEffect((function(){r.query.slug}),[r.query.slug]),(0,n.jsxs)(i.Z,{sx:{width:"100%",maxWidth:"100%"},children:[(0,n.jsx)(h.Z,{component:"div","aria-label":"main mailbox folders",sx:{p:0,m:0,width:"100%"},children:Array.from(t()).slice(a,d).map((function(t,e){return(0,n.jsx)(y.Z,{title:t.title,createdDate:t.created_date,author:t.author,url:t.url,description:t.description,post:t.post,image:"/"},e)}))}),(0,n.jsx)(g.Z,{}),(0,n.jsx)(f.Z,{spacing:2,sx:{display:t().length>O?"block":"none"},children:(0,n.jsx)(x.Z,{count:Math.ceil(t().length/O),size:"large",onChange:function(t,e){u((e-1)*O),p(e*O)}})})]})}var A=function(){return(0,n.jsx)(n.Fragment,{})},C=r(3944);function N(t){t.slug;var e=(0,l.Z)(),r=(0,c.useRouter)(),h=(0,d.Z)(e.breakpoints.down("lg"));return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)(o.ZP,{}),(0,n.jsx)(a.Z,{maxWidth:"xl",children:(0,n.jsxs)(i.Z,{sx:{height:"auto"},style:{backgroundColor:"dark"===e.palette.mode?u.Z[900]:u.Z[300]},children:[(0,n.jsx)("img",{src:void 0===r.query.slug||h?void 0!==r.query.slug&&h?"/languages/"+r.query.slug+"/mobile_post_header.png":void 0:"/languages/"+r.query.slug+"/desktop.png",width:"100%",height:150,alt:"header_image",loading:"lazy"}),(0,n.jsx)(i.Z,{sx:{p:0},children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.Z,{}),(0,n.jsx)(i.Z,{sx:{p:4,minHeight:"80vh"},children:h?(0,n.jsx)(A,{}):(0,n.jsx)(O,{})}),(0,n.jsx)(C.Z,{})]})})]})})]})}}},function(t){t.O(0,[391,258,917,46,298,127,938,478,608,774,888,179],(function(){return e=592,t(t.s=e);var e}));var e=t.O();_N_E=e}]);