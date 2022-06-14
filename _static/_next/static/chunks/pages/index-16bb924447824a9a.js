(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(5486)}])},5486:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return _}});var a=o(5893),i=o(7294),s=o(3366),n=o(7462),r=o(4780),c=o(6010),l=o(948),m=o(1657),h=o(4867),u=o(1588);function g(t){return(0,h.Z)("MuiImageList",t)}(0,u.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);var p=i.createContext({});const d=["children","className","cols","component","rowHeight","gap","style","variant"],f=(0,l.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant]]}})((({ownerState:t})=>(0,n.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===t.variant&&{display:"block"})));var w=i.forwardRef((function(t,e){const o=(0,m.Z)({props:t,name:"MuiImageList"}),{children:l,className:h,cols:u=2,component:w="ul",rowHeight:v="auto",gap:y=4,style:Z,variant:b="standard"}=o,C=(0,s.Z)(o,d),x=i.useMemo((()=>({rowHeight:v,gap:y,variant:b})),[v,y,b]);i.useEffect((()=>{0}),[]);const j="masonry"===b?(0,n.Z)({columnCount:u,columnGap:y},Z):(0,n.Z)({gridTemplateColumns:`repeat(${u}, 1fr)`,gap:y},Z),E=(0,n.Z)({},o,{component:w,gap:y,rowHeight:v,variant:b}),I=(t=>{const{classes:e,variant:o}=t,a={root:["root",o]};return(0,r.Z)(a,g,e)})(E);return(0,a.jsx)(f,(0,n.Z)({as:w,className:(0,c.Z)(I.root,I[b],h),ref:e,style:j,ownerState:E},C,{children:(0,a.jsx)(p.Provider,{value:x,children:l})}))})),v=(o(6607),o(1579));function y(t){return(0,h.Z)("MuiImageListItem",t)}var Z=(0,u.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]);const b=["children","className","cols","component","rows","style"],C=(0,l.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[{[`& .${Z.img}`]:e.img},e.root,e[o.variant]]}})((({ownerState:t})=>(0,n.Z)({display:"inline-block",position:"relative",lineHeight:0},"standard"===t.variant&&{display:"flex",flexDirection:"column"},"woven"===t.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{[`& .${Z.img}`]:(0,n.Z)({objectFit:"cover",width:"100%",height:"100%"},"standard"===t.variant&&{height:"auto",flexGrow:1})})));var x=i.forwardRef((function(t,e){const o=(0,m.Z)({props:t,name:"MuiImageListItem"}),{children:l,className:h,cols:u=1,component:g="li",rows:d=1,style:f}=o,w=(0,s.Z)(o,b),{rowHeight:Z="auto",gap:x,variant:j}=i.useContext(p);let E="auto";"woven"===j?E=void 0:"auto"!==Z&&(E=Z*d+x*(d-1));const I=(0,n.Z)({},o,{cols:u,component:g,gap:x,rowHeight:Z,rows:d,variant:j}),S=(t=>{const{classes:e,variant:o}=t,a={root:["root",o],img:["img"]};return(0,r.Z)(a,y,e)})(I);return(0,a.jsx)(C,(0,n.Z)({as:g,className:(0,c.Z)(S.root,S[j],h),ref:e,style:(0,n.Z)({height:E,gridColumnEnd:"masonry"!==j?`span ${u}`:void 0,gridRowEnd:"masonry"!==j?`span ${d}`:void 0,marginBottom:"masonry"===j?x:void 0},f),ownerState:I},w,{children:i.Children.map(l,(t=>i.isValidElement(t)?"img"===t.type||(0,v.Z)(t,["Image"])?i.cloneElement(t,{className:(0,c.Z)(S.img,t.props.className)}):t:null))}))})),j=o(8396),E=o(1664),I=o.n(E);function S(){var t=function(){var t=(0,i.useState)({width:void 0,height:void 0}),e=t[0],o=t[1];return(0,i.useEffect)((function(){var t=function(){o({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),e}(),e=(0,j.Z)("(min-width:600px)",{noSsr:!0});return(0,i.useEffect)((function(){e?console.log("isDesktop"):console.log("IS Mobile")}),[e]),(0,a.jsx)(w,{sx:{padding:0,margin:0},cols:4,children:e?N.map((function(e,o){return(0,a.jsx)(I(),{href:e.route,children:(0,a.jsx)(x,{style:{cursor:"pointer"},children:(0,a.jsx)("img",{"data-w":t.width,"data-h":t.height,srcSet:"".concat(e.img),alt:e.title,loading:"lazy",style:{height:t.height?(t.height-24)/3:0,width:t.width?(t.width-128)/4:0}})})},o)})):k.map((function(e,o){return(0,a.jsx)(I(),{href:e.route,children:(0,a.jsx)(x,{cols:2,rows:2,sx:{cursor:"pointer",p:.1},children:(0,a.jsx)("img",{"data-w":t.width,"data-h":t.height,srcSet:"".concat(e.img),alt:e.title,loading:"lazy",style:{padding:0,height:t.height?(t.height-128)/4:0,width:t.width?(t.width-24)/2:0}})})},o)}))})}var N=[{title:"Breakfast",route:"/posts/javascript",img:"/languages/javascript/category.png"},{title:"typescript",route:"/posts/typescript",img:"/languages/typescript/category.png"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera",route:"/"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee",route:"/"},{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast",route:"/"},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger",route:"/"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera",route:"/"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee",route:"/"},{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast",route:"/"},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger",route:"/"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera",route:"/"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee",route:"/"}],k=[{title:"Breakfast",route:"/posts/javascript",img:"/languages/javascript/mobile.png"},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger",route:"/posts/typescript"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera",route:"/"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee",route:"/"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera",route:"/"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee",route:"/"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera",route:"/"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee",route:"/"}],_=function(){return(0,a.jsx)(S,{})}}},function(t){t.O(0,[391,774,888,179],(function(){return e=8312,t(t.s=e);var e}));var e=t.O();_N_E=e}]);