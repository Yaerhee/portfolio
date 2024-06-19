"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34],{365:function(e,t,r){r.d(t,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function s(e){return function(t){return n.createElement(c,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,o=e.attr,i=e.size,s=e.title,c=a(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,function(e){return t(e)}):t(o)}},6948:function(e,t,r){r.d(t,{J:function(){return c}});var n=r(6554),o=r(2772),i=r(965),l=r(5432),a=r(5893),s={path:(0,a.jsxs)("g",{stroke:"currentColor",strokeWidth:"1.5",children:[(0,a.jsx)("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),(0,a.jsx)("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),(0,a.jsx)("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},c=(0,n.G)((e,t)=>{let{as:r,viewBox:n,color:c="currentColor",focusable:u=!1,children:d,className:f,__css:m,...p}=e,y=(0,l.cx)("chakra-icon",f),h=(0,o.mq)("Icon",e),g={ref:t,focusable:u,className:y,__css:{w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:c,...m,...h}},v=null!=n?n:s.viewBox;if(r&&"string"!=typeof r)return(0,a.jsx)(i.m.svg,{as:r,...g,...p});let x=null!=d?d:s.path;return(0,a.jsx)(i.m.svg,{verticalAlign:"middle",viewBox:v,...g,...p,children:x})});c.displayName="Icon"},8859:function(e,t,r){r.d(t,{E:function(){return u}});var n=r(6554),o=r(5893),i=(0,n.G)(function(e,t){let{htmlWidth:r,htmlHeight:n,alt:i,...l}=e;return(0,o.jsx)("img",{width:r,height:n,ref:t,alt:i,...l})});i.displayName="NativeImage";var l=r(7294),a=(null==globalThis?void 0:globalThis.document)?l.useLayoutEffect:l.useEffect,s=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,c=r(965),u=(0,n.G)(function(e,t){let{fallbackSrc:r,fallback:n,src:u,srcSet:d,align:f,fit:m,loading:p,ignoreFallback:y,crossOrigin:h,fallbackStrategy:g="beforeLoadOrError",referrerPolicy:v,...x}=e,j=void 0!==r||void 0!==n,k=null!=p||y||!j,N=s(function(e){let{loading:t,src:r,srcSet:n,onLoad:o,onError:i,crossOrigin:s,sizes:c,ignoreFallback:u}=e,[d,f]=(0,l.useState)("pending");(0,l.useEffect)(()=>{f(r?"loading":"pending")},[r]);let m=(0,l.useRef)(),p=(0,l.useCallback)(()=>{if(!r)return;y();let e=new Image;e.src=r,s&&(e.crossOrigin=s),n&&(e.srcset=n),c&&(e.sizes=c),t&&(e.loading=t),e.onload=e=>{y(),f("loaded"),null==o||o(e)},e.onerror=e=>{y(),f("failed"),null==i||i(e)},m.current=e},[r,s,n,c,o,i,t]),y=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return a(()=>{if(!u)return"loading"===d&&p(),()=>{y()}},[d,p,u]),u?"loaded":d}({...e,crossOrigin:h,ignoreFallback:k}),g),b={ref:t,objectFit:m,objectPosition:f,...k?x:function(e,t=[]){let r=Object.assign({},e);for(let e of t)e in r&&delete r[e];return r}(x,["onError","onLoad"])};return N?n||(0,o.jsx)(c.m.img,{as:i,className:"chakra-image__placeholder",src:r,...b}):(0,o.jsx)(c.m.img,{as:i,src:u,srcSet:d,crossOrigin:h,loading:p,referrerPolicy:v,className:"chakra-image",...b})});u.displayName="Image"},4234:function(e,t,r){r.d(t,{aV:function(){return f},DE:function(){return h},HC:function(){return y},GS:function(){return m},QI:function(){return p}});var n=r(6948),o=r(7294),i=r(6554),l=r(2772),a=r(3179),s=r(965),c=r(5893),[u,d]=function(e={}){let{name:t,strict:r=!0,hookName:n="useContext",providerName:i="Provider",errorMessage:l,defaultValue:a}=e,s=(0,o.createContext)(a);return s.displayName=t,[s.Provider,function e(){var t;let a=(0,o.useContext)(s);if(!a&&r){let r=Error(null!=l?l:`${n} returned \`undefined\`. Seems you forgot to wrap component within ${i}`);throw r.name="ContextError",null==(t=Error.captureStackTrace)||t.call(Error,r,e),r}return a},s]}({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),f=(0,i.G)(function(e,t){let r=(0,l.jC)("List",e),{children:n,styleType:i="none",stylePosition:d,spacing:f,...m}=(0,a.Lr)(e),p=o.Children.toArray(n).filter(e=>(0,o.isValidElement)(e));return(0,c.jsx)(u,{value:r,children:(0,c.jsx)(s.m.ul,{ref:t,listStyleType:i,listStylePosition:d,role:"list",__css:{...r.container,...f?{"& > *:not(style) ~ *:not(style)":{mt:f}}:{}},...m,children:p})})});f.displayName="List";var m=(0,i.G)((e,t)=>{let{as:r,...n}=e;return(0,c.jsx)(f,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...n})});m.displayName="OrderedList";var p=(0,i.G)(function(e,t){let{as:r,...n}=e;return(0,c.jsx)(f,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...n})});p.displayName="UnorderedList";var y=(0,i.G)(function(e,t){let r=d();return(0,c.jsx)(s.m.li,{ref:t,...e,__css:r.item})});y.displayName="ListItem";var h=(0,i.G)(function(e,t){let r=d();return(0,c.jsx)(n.J,{ref:t,role:"presentation",...e,__css:r.icon})});h.displayName="ListIcon"},2883:function(e,t,r){r.d(t,{r:function(){return c}});var n=r(6554),o=r(2772),i=r(3179),l=r(965),a=r(5432),s=r(5893),c=(0,n.G)(function(e,t){let r=(0,o.mq)("Link",e),{className:n,isExternal:c,...u}=(0,i.Lr)(e);return(0,s.jsx)(l.m.a,{target:c?"_blank":void 0,rel:c?"noopener":void 0,ref:t,className:(0,a.cx)("chakra-link",n),...u,__css:r})});c.displayName="Link"}}]);