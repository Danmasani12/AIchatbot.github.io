"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1598],{26277:function(e,r,a){a.d(r,{E:function(){return j},Z:function(){return q}});var m=a(4730),i=a(95627),t=a.n(i),n=a(67294),o=a(57329),l=function(e){var r=Object.keys(e);if(0===r.length)return"";var a=r.map(function(r){var a=e[r];return"".concat(r,"=").concat(a)}).join("&");return"?".concat(a)},s=function(e){["w","h","fit","f","r","q","bg","fm","fl"].forEach(function(r){e[r]||delete e[r]})},c=function(e){var r,a=e.width,m=e.height,i=e.transform,t=e.focus,n=e.borderRadius,o=e.quality,l=e.backgroundRgbColor;return{w:a,h:m,fit:i,f:t,r:n,q:o,bg:l,fm:e.format,fl:e.formatOptimization}},d=function(e){var r=c(e);return s(r),l(r)},g=a(20137),f=a(94184),b=a.n(f),u=a(85893),h=["url"],w=["url"],p=["hasRoundedCorners"],v=n.useLayoutEffect,y=function(e){var r=e.url,a=(0,m.Z)(e,h);"webp"===a.format&&delete a.format;var i=d(a);return"".concat(r).concat(i)},x=function(e){var r=e.url,a=(0,m.Z)(e,w);delete a.formatOptimization,a.format="webp";var i=d(a);return"".concat(r).concat(i)},k=function(e,r){return r?{url:y(e),webmUrl:x(e)}:{url:y(e)}},j=function(e){var r,a,i,l=e.hasRoundedCorners,s=(0,m.Z)(e,p),c=null!=s.width&&null!=s.height,d=(0,n.useState)(!c),f=d[0],h=d[1],w=(0,n.useState)((null===(r=s.mobileImage)||void 0===r?void 0:r.url)||s.url),y=w[0],x=w[1];s.enableWebm="boolean"!=typeof s.enableWebm||s.enableWebm;var j=k(s,s.enableWebm),_=s.mobileImage&&k(s.mobileImage,s.enableWebm);v(function(){var e,r;window.innerWidth<=767&&_?(r=_.webmUrl,e=_.url):(r=j.webmUrl,e=j.url),r=r||e,x(e),(0,o.p)(r).then(function(){return h(!0)})},[]);var O=b()("image",{"image--has-rounded-corners":void 0!==l&&l});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("picture",{"data-testid":s.testId,className:t().dynamic([["491673633",[f?"inherit":"none",g.mq.desktop]]])+" "+(O||""),children:[s.url.endsWith(".svg")&&(0,u.jsx)("source",{type:"image/svg+xml",srcSet:s.url,className:t().dynamic([["491673633",[f?"inherit":"none",g.mq.desktop]]])}),s.mobileImage&&s.enableWebm&&(0,u.jsx)("source",{srcSet:null==_?void 0:_.webmUrl,media:"(max-width: 767px)",className:t().dynamic([["491673633",[f?"inherit":"none",g.mq.desktop]]])}),s.mobileImage&&(0,u.jsx)("source",{srcSet:null==_?void 0:_.url,media:"(max-width: 767px)",className:t().dynamic([["491673633",[f?"inherit":"none",g.mq.desktop]]])}),s.enableWebm&&(0,u.jsx)("source",{type:"image/webp",srcSet:j.webmUrl,className:t().dynamic([["491673633",[f?"inherit":"none",g.mq.desktop]]])}),(0,u.jsx)("img",{alt:s.altText||"",src:y,height:s.height,width:s.width,className:t().dynamic([["491673633",[f?"inherit":"none",g.mq.desktop]]])+" "+(s.classNames||"")})]}),(0,u.jsx)("noscript",{className:t().dynamic([["491673633",[f?"inherit":"none",g.mq.desktop]]])+" "+(O||""),children:(0,u.jsx)("img",{alt:s.altText||"",src:j.url,height:s.height,width:s.width,className:t().dynamic([["491673633",[f?"inherit":"none",g.mq.desktop]]])+" "+(s.classNames||"")})}),!f&&s.width&&s.height?(0,u.jsx)(q,{width:s.width,height:s.height,mobileHeight:null===(a=s.mobileImage)||void 0===a?void 0:a.height,mobileWidth:null===(i=s.mobileImage)||void 0===i?void 0:i.width}):null,(0,u.jsx)(t(),{id:"491673633",dynamic:[f?"inherit":"none",g.mq.desktop],children:[".__jsx-style-dynamic-selector:root{--color-scheme:light;--text-color:var(--slate);--background-color:var(--white);--slate:#081d34;--blue:#0057ff;--gray:#e6e6e6;--sky:#c4e0fd;--stone:#f1f1f1;--coral-light:#ffa19f;--violet-light:#96a4d8;--ice:#bff5f8;--tangerine-light:#fcc692;--sky-extra-light:#e4eefa;--coral:#ff645f;--violet:#4f66c2;--aqua:#47c7f0;--aqua-hover:var(--ice);--white:#ffffff;--tangerine:#fea143;}",".__jsx-style-dynamic-selector:root{--color-scheme:light;--text-color:var(--mvp-slate);--background-color:var(--paper);--mvp-slate:#041527;--neutral-800:#223140;--neutral-700:#3f4c5a;--neutral-600:#5d6773;--neutral-500:#7a838c;--neutral-400:#989fa5;--neutral-300:#b6babe;--neutral-200:#d3d5d8;--neutral-100:#f1f1f1;--mvp-stone:#f1f1f1;--paper:#ffffff;--mvp-blue:#0057ff;--mvp-aqua:#00b4d8;--mvp-sky-100:#e1effe;--mvp-sky:#c4e0fd;--marigold-500:#f3b521;--marigold-200:#ffe3b2;--sand:#ffe3b2;--clay-600:#ce5a21;--clay-400:#ec9069;--clay-200:#f6c8b4;--mvp-coral:#ec9069;--aqua-800:#093e48;--aqua-100:#caf0f8;--aqua-200:#87dced;--deep-teal:#093e48;--light-teal:#caf0f8;--transparent:transparent;--ui-error-light:#fff0f4;--ui-error:#db0629;--ui-error-dark:#841531;--ui-success-light:#d7efdc;--ui-success:#1bb157;--ui-success-dark:#0f7134;--ui-warning-light:#feedaf;--ui-warning:#fbc916;--ui-warning-dark:#423200;--shadow-xs:0 0.125rem 0.5rem rgba(0,0,0,0.25),0 0 0.0625rem rgba(0,0,0,0.16);--shadow-sm:0 0.5rem 1rem rgba(0,0,0,0.25),0 0 0.0625rem rgba(0,0,0,0.16);--shadow-md:0 0.75rem 1.5rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-lg:0 1.125rem 2.25rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-xl:0 1.5rem 3rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-blue-xs:0 0.125rem 0.5rem rgba(0,87,255,0.25),0 0 0.0625rem rgba(0,87,255,0.16);--shadow-blue-sm:0 0.5rem 1rem rgba(0,87,255,0.25),0 0 0.0625rem rgba(0,87,255,0.16);--shadow-blue-md:0 0.75rem 1.5rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-blue-lg:0 1.125rem 2.25rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-blue-xl:0 1.5rem 3rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-aqua-xs:0 0.125rem 0.5rem rgba(2,151,180,0.25),0 0 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-sm:0 0.5rem 1rem rgba(2,151,180,0.25),0 0 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-md:0 0.75rem 1.5rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-lg:0 1.125rem 2.25rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-xl:0 1.5rem 3rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-marigold-xs:0 0.125rem 0.5rem rgba(156,112,6,0.25), 0 0 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-sm:0 0.5rem 1rem rgba(156,112,6,0.25),0 0 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-md:0 0.75rem 1.5rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-lg:0 1.125rem 2.25rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-xl:0 1.5rem 3rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-clay-xs:0 0.125rem 0.5rem rgba(206,90,33,0.25),0 0 0.0625rem rgba(206,90,33,0.16);--shadow-clay-sm:0 0.5rem 1rem rgba(206,90,33,0.25),0 0 0.0625rem rgba(206,90,33,0.16);--shadow-clay-md:0 0.75rem 1.5rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--shadow-clay-lg:0 1.125rem 2.25rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--shadow-clay-xl:0 1.5rem 3rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--fin-black:#000000;--fin-white:#ffffff;--fin-blue:#0057ff;--fin-error:#841531;}","picture.__jsx-style-dynamic-selector{line-height:0;display:".concat(f?"inherit":"none",";max-width:100%;max-height:100%;}"),"picture.image--has-rounded-corners.__jsx-style-dynamic-selector{overflow:hidden;border-radius:1rem;}","img.__jsx-style-dynamic-selector{height:auto;width:auto;max-width:inherit;max-height:inherit;}","@media (".concat(g.mq.desktop,"){picture.image--has-rounded-corners.__jsx-style-dynamic-selector{border-radius:1.5rem;}}")]})]})},q=function(e){var r=e.altText,a=void 0===r?"":r,m=e.height,i=e.width,n=e.mobileHeight,o=e.mobileWidth,l='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(i," ").concat(m,'"%3E%3C/svg%3E'),s='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(o," ").concat(n,'"%3E%3C/svg%3E'),c=n&&o;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("picture",{className:t().dynamic([["1488800494",[i,c?"none":"inline-block",o,c?"inline-block":"none"]]]),children:[c&&(0,u.jsx)("img",{src:s,alt:a,className:t().dynamic([["1488800494",[i,c?"none":"inline-block",o,c?"inline-block":"none"]]])+" image-placeholder image-placeholder--mobile"}),(0,u.jsx)("img",{src:l,alt:a,className:t().dynamic([["1488800494",[i,c?"none":"inline-block",o,c?"inline-block":"none"]]])+" image-placeholder image-placeholder--desktop"})]}),(0,u.jsx)(t(),{id:"1488800494",dynamic:[i,c?"none":"inline-block",o,c?"inline-block":"none"],children:[".__jsx-style-dynamic-selector:root{--color-scheme:light;--text-color:var(--slate);--background-color:var(--white);--slate:#081d34;--blue:#0057ff;--gray:#e6e6e6;--sky:#c4e0fd;--stone:#f1f1f1;--coral-light:#ffa19f;--violet-light:#96a4d8;--ice:#bff5f8;--tangerine-light:#fcc692;--sky-extra-light:#e4eefa;--coral:#ff645f;--violet:#4f66c2;--aqua:#47c7f0;--aqua-hover:var(--ice);--white:#ffffff;--tangerine:#fea143;}",".__jsx-style-dynamic-selector:root{--color-scheme:light;--text-color:var(--mvp-slate);--background-color:var(--paper);--mvp-slate:#041527;--neutral-800:#223140;--neutral-700:#3f4c5a;--neutral-600:#5d6773;--neutral-500:#7a838c;--neutral-400:#989fa5;--neutral-300:#b6babe;--neutral-200:#d3d5d8;--neutral-100:#f1f1f1;--mvp-stone:#f1f1f1;--paper:#ffffff;--mvp-blue:#0057ff;--mvp-aqua:#00b4d8;--mvp-sky-100:#e1effe;--mvp-sky:#c4e0fd;--marigold-500:#f3b521;--marigold-200:#ffe3b2;--sand:#ffe3b2;--clay-600:#ce5a21;--clay-400:#ec9069;--clay-200:#f6c8b4;--mvp-coral:#ec9069;--aqua-800:#093e48;--aqua-100:#caf0f8;--aqua-200:#87dced;--deep-teal:#093e48;--light-teal:#caf0f8;--transparent:transparent;--ui-error-light:#fff0f4;--ui-error:#db0629;--ui-error-dark:#841531;--ui-success-light:#d7efdc;--ui-success:#1bb157;--ui-success-dark:#0f7134;--ui-warning-light:#feedaf;--ui-warning:#fbc916;--ui-warning-dark:#423200;--shadow-xs:0 0.125rem 0.5rem rgba(0,0,0,0.25),0 0 0.0625rem rgba(0,0,0,0.16);--shadow-sm:0 0.5rem 1rem rgba(0,0,0,0.25),0 0 0.0625rem rgba(0,0,0,0.16);--shadow-md:0 0.75rem 1.5rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-lg:0 1.125rem 2.25rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-xl:0 1.5rem 3rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-blue-xs:0 0.125rem 0.5rem rgba(0,87,255,0.25),0 0 0.0625rem rgba(0,87,255,0.16);--shadow-blue-sm:0 0.5rem 1rem rgba(0,87,255,0.25),0 0 0.0625rem rgba(0,87,255,0.16);--shadow-blue-md:0 0.75rem 1.5rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-blue-lg:0 1.125rem 2.25rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-blue-xl:0 1.5rem 3rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-aqua-xs:0 0.125rem 0.5rem rgba(2,151,180,0.25),0 0 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-sm:0 0.5rem 1rem rgba(2,151,180,0.25),0 0 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-md:0 0.75rem 1.5rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-lg:0 1.125rem 2.25rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-xl:0 1.5rem 3rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-marigold-xs:0 0.125rem 0.5rem rgba(156,112,6,0.25), 0 0 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-sm:0 0.5rem 1rem rgba(156,112,6,0.25),0 0 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-md:0 0.75rem 1.5rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-lg:0 1.125rem 2.25rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-xl:0 1.5rem 3rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-clay-xs:0 0.125rem 0.5rem rgba(206,90,33,0.25),0 0 0.0625rem rgba(206,90,33,0.16);--shadow-clay-sm:0 0.5rem 1rem rgba(206,90,33,0.25),0 0 0.0625rem rgba(206,90,33,0.16);--shadow-clay-md:0 0.75rem 1.5rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--shadow-clay-lg:0 1.125rem 2.25rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--shadow-clay-xl:0 1.5rem 3rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--fin-black:#000000;--fin-white:#ffffff;--fin-blue:#0057ff;--fin-error:#841531;}","picture.__jsx-style-dynamic-selector{line-height:0;display:inherit;}",".image-placeholder.__jsx-style-dynamic-selector{max-width:100%;width:".concat(i,"px;}"),".image-placeholder--mobile.__jsx-style-dynamic-selector{display:none;}","@media (max-width:767px){.image-placeholder--desktop.__jsx-style-dynamic-selector{display:".concat(c?"none":"inline-block",";}.image-placeholder--mobile.__jsx-style-dynamic-selector{width:").concat(o,"px;display:").concat(c?"inline-block":"none",";}}")]})]})}},57329:function(e,r,a){a.d(r,{p:function(){return m}});function m(e){return new Promise(function(r){var a=new window.Image;a.crossOrigin="Anonymous",a.addEventListener("load",r,!1),a.addEventListener("error",r,!1),a.src=e})}},21598:function(e,r,a){a.r(r),a.d(r,{ContentfulImage:function(){return c},isImage:function(){return s},transformAssetToImage:function(){return g},transformImage:function(){return d}});var m=a(59499);a(67294);var i=a(26277),t=a(48304),n=a(85893);function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);r&&(m=m.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,m)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach(function(r){(0,m.Z)(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function s(e){var r;return(null===(r=e.sys.contentType)||void 0===r?void 0:r.sys.id)==="image"}var c=function(e){return(0,n.jsx)(t.Z,{entry:e,children:function(){return(0,n.jsx)(i.E,l({},d(e)))}})};function d(e){var r,a,m=e.fields;return l(l({},m),{},{url:m.image.fields.file.url,width:null===(r=m.image.fields.file.details.image)||void 0===r?void 0:r.width,height:null===(a=m.image.fields.file.details.image)||void 0===a?void 0:a.height,hasRoundedCorners:m.hasRoundedCorners&&m.hasRoundedCorners})}function g(e){var r,a,m=e.fields;return{url:m.file.url,width:null===(r=m.file.details.image)||void 0===r?void 0:r.width,height:null===(a=m.file.details.image)||void 0===a?void 0:a.height}}}}]);
//# sourceMappingURL=1598-ef36759f05fe56db.js.map