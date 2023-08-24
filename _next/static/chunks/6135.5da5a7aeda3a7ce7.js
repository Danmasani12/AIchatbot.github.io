"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6135,4730,7],{26277:function(e,r,a){a.d(r,{E:function(){return j},Z:function(){return _}});var t=a(4730),o=a(95627),m=a.n(o),i=a(67294),n=a(57329),l=function(e){var r=Object.keys(e);if(0===r.length)return"";var a=r.map(function(r){var a=e[r];return"".concat(r,"=").concat(a)}).join("&");return"?".concat(a)},s=function(e){["w","h","fit","f","r","q","bg","fm","fl"].forEach(function(r){e[r]||delete e[r]})},c=function(e){var r,a=e.width,t=e.height,o=e.transform,m=e.focus,i=e.borderRadius,n=e.quality,l=e.backgroundRgbColor;return{w:a,h:t,fit:o,f:m,r:i,q:n,bg:l,fm:e.format,fl:e.formatOptimization}},d=function(e){var r=c(e);return s(r),l(r)},g=a(20137),f=a(94184),b=a.n(f),u=a(85893),h=["url"],p=["url"],w=["hasRoundedCorners"],x=i.useLayoutEffect,y=function(e){var r=e.url,a=(0,t.Z)(e,h);"webp"===a.format&&delete a.format;var o=d(a);return"".concat(r).concat(o)},v=function(e){var r=e.url,a=(0,t.Z)(e,p);delete a.formatOptimization,a.format="webp";var o=d(a);return"".concat(r).concat(o)},k=function(e,r){return r?{url:y(e),webmUrl:v(e)}:{url:y(e)}},j=function(e){var r,a,o,l=e.hasRoundedCorners,s=(0,t.Z)(e,w),c=null!=s.width&&null!=s.height,d=(0,i.useState)(!c),f=d[0],h=d[1],p=(0,i.useState)((null===(r=s.mobileImage)||void 0===r?void 0:r.url)||s.url),y=p[0],v=p[1];s.enableWebm="boolean"!=typeof s.enableWebm||s.enableWebm;var j=k(s,s.enableWebm),q=s.mobileImage&&k(s.mobileImage,s.enableWebm);x(function(){var e,r;window.innerWidth<=767&&q?(r=q.webmUrl,e=q.url):(r=j.webmUrl,e=j.url),r=r||e,v(e),(0,n.p)(r).then(function(){return h(!0)})},[]);var I=b()("image",{"image--has-rounded-corners":void 0!==l&&l});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("picture",{"data-testid":s.testId,className:m().dynamic([["491673633",[f?"inherit":"none",g.mq.desktop]]])+" "+(I||""),children:[s.url.endsWith(".svg")&&(0,u.jsx)("source",{type:"image/svg+xml",srcSet:s.url,className:m().dynamic([["491673633",[f?"inherit":"none",g.mq.desktop]]])}),s.mobileImage&&s.enableWebm&&(0,u.jsx)("source",{srcSet:null==q?void 0:q.webmUrl,media:"(max-width: 767px)",className:m().dynamic([["491673633",[f?"inherit":"none",g.mq.desktop]]])}),s.mobileImage&&(0,u.jsx)("source",{srcSet:null==q?void 0:q.url,media:"(max-width: 767px)",className:m().dynamic([["491673633",[f?"inherit":"none",g.mq.desktop]]])}),s.enableWebm&&(0,u.jsx)("source",{type:"image/webp",srcSet:j.webmUrl,className:m().dynamic([["491673633",[f?"inherit":"none",g.mq.desktop]]])}),(0,u.jsx)("img",{alt:s.altText||"",src:y,height:s.height,width:s.width,className:m().dynamic([["491673633",[f?"inherit":"none",g.mq.desktop]]])+" "+(s.classNames||"")})]}),(0,u.jsx)("noscript",{className:m().dynamic([["491673633",[f?"inherit":"none",g.mq.desktop]]])+" "+(I||""),children:(0,u.jsx)("img",{alt:s.altText||"",src:j.url,height:s.height,width:s.width,className:m().dynamic([["491673633",[f?"inherit":"none",g.mq.desktop]]])+" "+(s.classNames||"")})}),!f&&s.width&&s.height?(0,u.jsx)(_,{width:s.width,height:s.height,mobileHeight:null===(a=s.mobileImage)||void 0===a?void 0:a.height,mobileWidth:null===(o=s.mobileImage)||void 0===o?void 0:o.width}):null,(0,u.jsx)(m(),{id:"491673633",dynamic:[f?"inherit":"none",g.mq.desktop],children:[".__jsx-style-dynamic-selector:root{--color-scheme:light;--text-color:var(--slate);--background-color:var(--white);--slate:#081d34;--blue:#0057ff;--gray:#e6e6e6;--sky:#c4e0fd;--stone:#f1f1f1;--coral-light:#ffa19f;--violet-light:#96a4d8;--ice:#bff5f8;--tangerine-light:#fcc692;--sky-extra-light:#e4eefa;--coral:#ff645f;--violet:#4f66c2;--aqua:#47c7f0;--aqua-hover:var(--ice);--white:#ffffff;--tangerine:#fea143;}",".__jsx-style-dynamic-selector:root{--color-scheme:light;--text-color:var(--mvp-slate);--background-color:var(--paper);--mvp-slate:#041527;--neutral-800:#223140;--neutral-700:#3f4c5a;--neutral-600:#5d6773;--neutral-500:#7a838c;--neutral-400:#989fa5;--neutral-300:#b6babe;--neutral-200:#d3d5d8;--neutral-100:#f1f1f1;--mvp-stone:#f1f1f1;--paper:#ffffff;--mvp-blue:#0057ff;--mvp-aqua:#00b4d8;--mvp-sky-100:#e1effe;--mvp-sky:#c4e0fd;--marigold-500:#f3b521;--marigold-200:#ffe3b2;--sand:#ffe3b2;--clay-600:#ce5a21;--clay-400:#ec9069;--clay-200:#f6c8b4;--mvp-coral:#ec9069;--aqua-800:#093e48;--aqua-100:#caf0f8;--aqua-200:#87dced;--deep-teal:#093e48;--light-teal:#caf0f8;--transparent:transparent;--ui-error-light:#fff0f4;--ui-error:#db0629;--ui-error-dark:#841531;--ui-success-light:#d7efdc;--ui-success:#1bb157;--ui-success-dark:#0f7134;--ui-warning-light:#feedaf;--ui-warning:#fbc916;--ui-warning-dark:#423200;--shadow-xs:0 0.125rem 0.5rem rgba(0,0,0,0.25),0 0 0.0625rem rgba(0,0,0,0.16);--shadow-sm:0 0.5rem 1rem rgba(0,0,0,0.25),0 0 0.0625rem rgba(0,0,0,0.16);--shadow-md:0 0.75rem 1.5rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-lg:0 1.125rem 2.25rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-xl:0 1.5rem 3rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-blue-xs:0 0.125rem 0.5rem rgba(0,87,255,0.25),0 0 0.0625rem rgba(0,87,255,0.16);--shadow-blue-sm:0 0.5rem 1rem rgba(0,87,255,0.25),0 0 0.0625rem rgba(0,87,255,0.16);--shadow-blue-md:0 0.75rem 1.5rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-blue-lg:0 1.125rem 2.25rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-blue-xl:0 1.5rem 3rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-aqua-xs:0 0.125rem 0.5rem rgba(2,151,180,0.25),0 0 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-sm:0 0.5rem 1rem rgba(2,151,180,0.25),0 0 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-md:0 0.75rem 1.5rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-lg:0 1.125rem 2.25rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-xl:0 1.5rem 3rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-marigold-xs:0 0.125rem 0.5rem rgba(156,112,6,0.25), 0 0 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-sm:0 0.5rem 1rem rgba(156,112,6,0.25),0 0 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-md:0 0.75rem 1.5rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-lg:0 1.125rem 2.25rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-xl:0 1.5rem 3rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-clay-xs:0 0.125rem 0.5rem rgba(206,90,33,0.25),0 0 0.0625rem rgba(206,90,33,0.16);--shadow-clay-sm:0 0.5rem 1rem rgba(206,90,33,0.25),0 0 0.0625rem rgba(206,90,33,0.16);--shadow-clay-md:0 0.75rem 1.5rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--shadow-clay-lg:0 1.125rem 2.25rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--shadow-clay-xl:0 1.5rem 3rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--fin-black:#000000;--fin-white:#ffffff;--fin-blue:#0057ff;--fin-error:#841531;}","picture.__jsx-style-dynamic-selector{line-height:0;display:".concat(f?"inherit":"none",";max-width:100%;max-height:100%;}"),"picture.image--has-rounded-corners.__jsx-style-dynamic-selector{overflow:hidden;border-radius:1rem;}","img.__jsx-style-dynamic-selector{height:auto;width:auto;max-width:inherit;max-height:inherit;}","@media (".concat(g.mq.desktop,"){picture.image--has-rounded-corners.__jsx-style-dynamic-selector{border-radius:1.5rem;}}")]})]})},_=function(e){var r=e.altText,a=void 0===r?"":r,t=e.height,o=e.width,i=e.mobileHeight,n=e.mobileWidth,l='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(o," ").concat(t,'"%3E%3C/svg%3E'),s='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(n," ").concat(i,'"%3E%3C/svg%3E'),c=i&&n;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("picture",{className:m().dynamic([["1488800494",[o,c?"none":"inline-block",n,c?"inline-block":"none"]]]),children:[c&&(0,u.jsx)("img",{src:s,alt:a,className:m().dynamic([["1488800494",[o,c?"none":"inline-block",n,c?"inline-block":"none"]]])+" image-placeholder image-placeholder--mobile"}),(0,u.jsx)("img",{src:l,alt:a,className:m().dynamic([["1488800494",[o,c?"none":"inline-block",n,c?"inline-block":"none"]]])+" image-placeholder image-placeholder--desktop"})]}),(0,u.jsx)(m(),{id:"1488800494",dynamic:[o,c?"none":"inline-block",n,c?"inline-block":"none"],children:[".__jsx-style-dynamic-selector:root{--color-scheme:light;--text-color:var(--slate);--background-color:var(--white);--slate:#081d34;--blue:#0057ff;--gray:#e6e6e6;--sky:#c4e0fd;--stone:#f1f1f1;--coral-light:#ffa19f;--violet-light:#96a4d8;--ice:#bff5f8;--tangerine-light:#fcc692;--sky-extra-light:#e4eefa;--coral:#ff645f;--violet:#4f66c2;--aqua:#47c7f0;--aqua-hover:var(--ice);--white:#ffffff;--tangerine:#fea143;}",".__jsx-style-dynamic-selector:root{--color-scheme:light;--text-color:var(--mvp-slate);--background-color:var(--paper);--mvp-slate:#041527;--neutral-800:#223140;--neutral-700:#3f4c5a;--neutral-600:#5d6773;--neutral-500:#7a838c;--neutral-400:#989fa5;--neutral-300:#b6babe;--neutral-200:#d3d5d8;--neutral-100:#f1f1f1;--mvp-stone:#f1f1f1;--paper:#ffffff;--mvp-blue:#0057ff;--mvp-aqua:#00b4d8;--mvp-sky-100:#e1effe;--mvp-sky:#c4e0fd;--marigold-500:#f3b521;--marigold-200:#ffe3b2;--sand:#ffe3b2;--clay-600:#ce5a21;--clay-400:#ec9069;--clay-200:#f6c8b4;--mvp-coral:#ec9069;--aqua-800:#093e48;--aqua-100:#caf0f8;--aqua-200:#87dced;--deep-teal:#093e48;--light-teal:#caf0f8;--transparent:transparent;--ui-error-light:#fff0f4;--ui-error:#db0629;--ui-error-dark:#841531;--ui-success-light:#d7efdc;--ui-success:#1bb157;--ui-success-dark:#0f7134;--ui-warning-light:#feedaf;--ui-warning:#fbc916;--ui-warning-dark:#423200;--shadow-xs:0 0.125rem 0.5rem rgba(0,0,0,0.25),0 0 0.0625rem rgba(0,0,0,0.16);--shadow-sm:0 0.5rem 1rem rgba(0,0,0,0.25),0 0 0.0625rem rgba(0,0,0,0.16);--shadow-md:0 0.75rem 1.5rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-lg:0 1.125rem 2.25rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-xl:0 1.5rem 3rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-blue-xs:0 0.125rem 0.5rem rgba(0,87,255,0.25),0 0 0.0625rem rgba(0,87,255,0.16);--shadow-blue-sm:0 0.5rem 1rem rgba(0,87,255,0.25),0 0 0.0625rem rgba(0,87,255,0.16);--shadow-blue-md:0 0.75rem 1.5rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-blue-lg:0 1.125rem 2.25rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-blue-xl:0 1.5rem 3rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-aqua-xs:0 0.125rem 0.5rem rgba(2,151,180,0.25),0 0 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-sm:0 0.5rem 1rem rgba(2,151,180,0.25),0 0 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-md:0 0.75rem 1.5rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-lg:0 1.125rem 2.25rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-xl:0 1.5rem 3rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-marigold-xs:0 0.125rem 0.5rem rgba(156,112,6,0.25), 0 0 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-sm:0 0.5rem 1rem rgba(156,112,6,0.25),0 0 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-md:0 0.75rem 1.5rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-lg:0 1.125rem 2.25rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-xl:0 1.5rem 3rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-clay-xs:0 0.125rem 0.5rem rgba(206,90,33,0.25),0 0 0.0625rem rgba(206,90,33,0.16);--shadow-clay-sm:0 0.5rem 1rem rgba(206,90,33,0.25),0 0 0.0625rem rgba(206,90,33,0.16);--shadow-clay-md:0 0.75rem 1.5rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--shadow-clay-lg:0 1.125rem 2.25rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--shadow-clay-xl:0 1.5rem 3rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--fin-black:#000000;--fin-white:#ffffff;--fin-blue:#0057ff;--fin-error:#841531;}","picture.__jsx-style-dynamic-selector{line-height:0;display:inherit;}",".image-placeholder.__jsx-style-dynamic-selector{max-width:100%;width:".concat(o,"px;}"),".image-placeholder--mobile.__jsx-style-dynamic-selector{display:none;}","@media (max-width:767px){.image-placeholder--desktop.__jsx-style-dynamic-selector{display:".concat(c?"none":"inline-block",";}.image-placeholder--mobile.__jsx-style-dynamic-selector{width:").concat(n,"px;display:").concat(c?"inline-block":"none",";}}")]})]})}},57329:function(e,r,a){a.d(r,{p:function(){return t}});function t(e){return new Promise(function(r){var a=new window.Image;a.crossOrigin="Anonymous",a.addEventListener("load",r,!1),a.addEventListener("error",r,!1),a.src=e})}},16135:function(e,r,a){a.r(r),a.d(r,{ContentfulProductToursDemo:function(){return w},transformProductToursDemo:function(){return x}});var t=a(59499),o=a(67294),m=a(95627),i=a.n(m),n=a(24908),l=a(20137),s=a(17563),c=a(26277),d=a(77742),g={launchProductTourDemo:function(e){return function(r){window.Intercom&&(r.preventDefault(),e(),window.Intercom("startTour",2352))}}},f=a(85893);function b(e){var r=e.heading,a=e.buttonLabel,t=(0,o.useRef)(null);function m(){var e=document.getElementById("site-header");if(e){if(!t.current)return;var r=e.clientHeight,a=t.current.getBoundingClientRect();window.scroll({top:a.top+window.scrollY-r,left:0,behavior:"smooth"})}}return(0,o.useEffect)(function(){var e=s.parse(window.location.search);setTimeout(function(){e.product_tour_id&&t.current&&m()},1e3)}),(0,f.jsxs)("div",{ref:t,"aria-hidden":!0,className:i().dynamic([["2231811150",[l.mq.tablet,l.Color.Sky,l.containerMaxWidth,l.Color.White,l.TIMING.FAST,l.mq.desktop]]])+" product-tours-demo-spotlight",children:[(0,f.jsxs)("div",{className:i().dynamic([["2231811150",[l.mq.tablet,l.Color.Sky,l.containerMaxWidth,l.Color.White,l.TIMING.FAST,l.mq.desktop]]])+" content",children:[(0,f.jsx)("p",{className:i().dynamic([["2231811150",[l.mq.tablet,l.Color.Sky,l.containerMaxWidth,l.Color.White,l.TIMING.FAST,l.mq.desktop]]])+" heading",children:(0,f.jsx)(n.xv,{brand:"default",size:"heading-2",children:r})}),(0,f.jsx)("div",{className:i().dynamic([["2231811150",[l.mq.tablet,l.Color.Sky,l.containerMaxWidth,l.Color.White,l.TIMING.FAST,l.mq.desktop]]])+" cta",children:(0,f.jsx)(d.m,{onClick:g.launchProductTourDemo(m),bgColor:l.CTATheme.BlackFill,text:a})}),(0,f.jsxs)("div",{className:i().dynamic([["2231811150",[l.mq.tablet,l.Color.Sky,l.containerMaxWidth,l.Color.White,l.TIMING.FAST,l.mq.desktop]]])+" demo-image-wrapper",children:[(0,f.jsx)(c.E,{url:"https://images.ctfassets.net/xny2w179f4ki/56MrDVyPi6oii653L9Zpnh/380abe0de332fbe45c950573b65dfba4/0088_ProductTours-FakeProduct-ProactiveSupport-LB_5x3_0521_2x.png"}),(0,f.jsx)("div",{"data-product-tours-demo-spot":"1",className:i().dynamic([["2231811150",[l.mq.tablet,l.Color.Sky,l.containerMaxWidth,l.Color.White,l.TIMING.FAST,l.mq.desktop]]])+" demo-spot demo-spot-1"}),(0,f.jsx)("div",{"data-product-tours-demo-spot":"2",className:i().dynamic([["2231811150",[l.mq.tablet,l.Color.Sky,l.containerMaxWidth,l.Color.White,l.TIMING.FAST,l.mq.desktop]]])+" demo-spot demo-spot-2"}),(0,f.jsx)("div",{"data-product-tours-demo-spot":"3",className:i().dynamic([["2231811150",[l.mq.tablet,l.Color.Sky,l.containerMaxWidth,l.Color.White,l.TIMING.FAST,l.mq.desktop]]])+" demo-spot demo-spot-3"})]})]}),(0,f.jsx)(i(),{id:"2231811150",dynamic:[l.mq.tablet,l.Color.Sky,l.containerMaxWidth,l.Color.White,l.TIMING.FAST,l.mq.desktop],children:[".__jsx-style-dynamic-selector:root{--color-scheme:light;--text-color:var(--slate);--background-color:var(--white);--slate:#081d34;--blue:#0057ff;--gray:#e6e6e6;--sky:#c4e0fd;--stone:#f1f1f1;--coral-light:#ffa19f;--violet-light:#96a4d8;--ice:#bff5f8;--tangerine-light:#fcc692;--sky-extra-light:#e4eefa;--coral:#ff645f;--violet:#4f66c2;--aqua:#47c7f0;--aqua-hover:var(--ice);--white:#ffffff;--tangerine:#fea143;}",".__jsx-style-dynamic-selector:root{--color-scheme:light;--text-color:var(--mvp-slate);--background-color:var(--paper);--mvp-slate:#041527;--neutral-800:#223140;--neutral-700:#3f4c5a;--neutral-600:#5d6773;--neutral-500:#7a838c;--neutral-400:#989fa5;--neutral-300:#b6babe;--neutral-200:#d3d5d8;--neutral-100:#f1f1f1;--mvp-stone:#f1f1f1;--paper:#ffffff;--mvp-blue:#0057ff;--mvp-aqua:#00b4d8;--mvp-sky-100:#e1effe;--mvp-sky:#c4e0fd;--marigold-500:#f3b521;--marigold-200:#ffe3b2;--sand:#ffe3b2;--clay-600:#ce5a21;--clay-400:#ec9069;--clay-200:#f6c8b4;--mvp-coral:#ec9069;--aqua-800:#093e48;--aqua-100:#caf0f8;--aqua-200:#87dced;--deep-teal:#093e48;--light-teal:#caf0f8;--transparent:transparent;--ui-error-light:#fff0f4;--ui-error:#db0629;--ui-error-dark:#841531;--ui-success-light:#d7efdc;--ui-success:#1bb157;--ui-success-dark:#0f7134;--ui-warning-light:#feedaf;--ui-warning:#fbc916;--ui-warning-dark:#423200;--shadow-xs:0 0.125rem 0.5rem rgba(0,0,0,0.25),0 0 0.0625rem rgba(0,0,0,0.16);--shadow-sm:0 0.5rem 1rem rgba(0,0,0,0.25),0 0 0.0625rem rgba(0,0,0,0.16);--shadow-md:0 0.75rem 1.5rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-lg:0 1.125rem 2.25rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-xl:0 1.5rem 3rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-blue-xs:0 0.125rem 0.5rem rgba(0,87,255,0.25),0 0 0.0625rem rgba(0,87,255,0.16);--shadow-blue-sm:0 0.5rem 1rem rgba(0,87,255,0.25),0 0 0.0625rem rgba(0,87,255,0.16);--shadow-blue-md:0 0.75rem 1.5rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-blue-lg:0 1.125rem 2.25rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-blue-xl:0 1.5rem 3rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-aqua-xs:0 0.125rem 0.5rem rgba(2,151,180,0.25),0 0 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-sm:0 0.5rem 1rem rgba(2,151,180,0.25),0 0 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-md:0 0.75rem 1.5rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-lg:0 1.125rem 2.25rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-xl:0 1.5rem 3rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-marigold-xs:0 0.125rem 0.5rem rgba(156,112,6,0.25), 0 0 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-sm:0 0.5rem 1rem rgba(156,112,6,0.25),0 0 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-md:0 0.75rem 1.5rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-lg:0 1.125rem 2.25rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-xl:0 1.5rem 3rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-clay-xs:0 0.125rem 0.5rem rgba(206,90,33,0.25),0 0 0.0625rem rgba(206,90,33,0.16);--shadow-clay-sm:0 0.5rem 1rem rgba(206,90,33,0.25),0 0 0.0625rem rgba(206,90,33,0.16);--shadow-clay-md:0 0.75rem 1.5rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--shadow-clay-lg:0 1.125rem 2.25rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--shadow-clay-xl:0 1.5rem 3rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--fin-black:#000000;--fin-white:#ffffff;--fin-blue:#0057ff;--fin-error:#841531;}",".product-tours-demo-spotlight.__jsx-style-dynamic-selector{display:none;}","@media (".concat(l.mq.tablet,"){.product-tours-demo-spotlight.__jsx-style-dynamic-selector{display:grid;grid-template-columns:1fr [content] 2fr 1fr;background-color:").concat(l.Color.Sky,";position:relative;}.content.__jsx-style-dynamic-selector{grid-column:content;display:grid;grid-template-rows:repeat(3,auto);text-align:center;margin:0 auto 80px;max-width:").concat(l.containerMaxWidth,";}.cta.__jsx-style-dynamic-selector{margin:36px;}.arrow.__jsx-style-dynamic-selector{margin-left:6px;height:10px;fill:").concat(l.Color.White,";-webkit-transition:all ").concat(l.TIMING.FAST,"ms;transition:all ").concat(l.TIMING.FAST,'ms;}.demo-image-wrapper.__jsx-style-dynamic-selector{grid-column:"1 / -1";padding:"0 12vw";max-height:600px;width:768px;margin:0 auto;position:relative;}.demo-image.__jsx-style-dynamic-selector{max-width:100%;}.demo-spot.__jsx-style-dynamic-selector{position:absolute;}.demo-spot-1.__jsx-style-dynamic-selector{top:142px;left:15px;width:46px;height:38px;}.demo-spot-2.__jsx-style-dynamic-selector{top:104px;left:82px;width:70px;height:132px;}.demo-spot-3.__jsx-style-dynamic-selector{top:17px;left:686px;width:55px;height:28px;}}'),"@media (".concat(l.mq.desktop,"){.demo-image-wrapper.__jsx-style-dynamic-selector{width:1016px;}.demo-spot-1.__jsx-style-dynamic-selector{top:190px;left:19px;width:62px;height:46px;}.demo-spot-2.__jsx-style-dynamic-selector{top:140px;left:110px;width:90px;height:172px;}.demo-spot-3.__jsx-style-dynamic-selector{top:24px;left:909px;width:70px;height:34px;}}")]})]})}var u=a(48304);function h(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,t)}return a}function p(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?h(Object(a),!0).forEach(function(r){(0,t.Z)(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}var w=function(e){return(0,f.jsx)(u.Z,{entry:e,children:function(){return(0,f.jsx)(b,p({},x(e)))}})};function x(e){return p({},e.fields)}},4730:function(e,r,a){a.d(r,{Z:function(){return t}});function t(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(t=0;t<m.length;t++)a=m[t],!(r.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}}}]);
//# sourceMappingURL=6135.5da5a7aeda3a7ce7.js.map