(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[228,6825,7302],{43622:function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.removeEventListener=r.addEventListener=r.getAllFocusableElements=r.KEYS=void 0,r.KEYS={TAB:9};var a=function(e){return Array.from(e.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'))};r.getAllFocusableElements=a;var t=function(e,r,a){e.addEventListener?e.addEventListener(r,a):e.attachEvent("on".concat(r),a)};r.addEventListener=t;var n=function(e,r,a){e.removeEventListener?e.removeEventListener(r,a):e.detachEvent("on".concat(r),a)};r.removeEventListener=n},31213:function(e,r,a){"use strict";r.Z=void 0;var t=a(43622);function n(e,r){for(var a=0;a<r.length;a++){var t=r[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function s(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}var o=function(){return!1},i=function(){return null},l=function(){var e,r,a;function l(e){var r=this,a=e.node,n=e.firstElement,m=e.lastElement,c=e.disableStartingTrap,f=e.disableEndingTrap;!function(e,r){if(!(e instanceof r))throw TypeError("Cannot call a class as a function")}(this,l),s(this,"node",void 0),s(this,"firstElement",void 0),s(this,"lastElement",void 0),s(this,"disableStartingTrap",void 0),s(this,"disableEndingTrap",void 0),s(this,"focusableElements",null),s(this,"handleFocusTrap",function(e){var a=r.focusableElements,n=r.firstElement,s=r.lastElement,o=r.disableEndingTrap,i=r.disableStartingTrap;if(a&&a.length&&e.keyCode===t.KEYS.TAB){var l=a[0],m=a[a.length-1],c=e.shiftKey;if(m===e.srcElement&&!c&&!o())return e.preventDefault(),(n()||l).focus();if(l===e.srcElement&&c&&!i())return e.preventDefault(),(s()||m).focus()}}),this.node=a,this.firstElement=n||i,this.lastElement=m||i,this.disableStartingTrap=c||o,this.disableEndingTrap=f||o,this.focusableElements=(0,t.getAllFocusableElements)(this.node),(0,t.addEventListener)(this.node,"keydown",this.handleFocusTrap)}return r=[{key:"recalculateFocusableElements",value:function(){this.focusableElements=(0,t.getAllFocusableElements)(this.node)}},{key:"restore",value:function(){this.node&&(0,t.removeEventListener)(this.node,"keydown",this.handleFocusTrap)}}],n(l.prototype,r),a&&n(l,a),l}();r.Z=l},13882:function(e,r,a){"use strict";function t(e,r){if(r.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+r.length+" present")}a.d(r,{Z:function(){return t}})},83946:function(e,r,a){"use strict";function t(e){if(null===e||!0===e||!1===e)return NaN;var r=Number(e);return isNaN(r)?r:r<0?Math.ceil(r):Math.floor(r)}a.d(r,{Z:function(){return t}})},51820:function(e,r,a){"use strict";a.d(r,{Z:function(){return o}});var t=a(83946),n=a(19013),s=a(13882);function o(e,r){(0,s.Z)(2,arguments);var a=(0,n.Z)(e).getTime(),o=(0,t.Z)(r);return new Date(a+o)}},79429:function(e,r,a){"use strict";a.d(r,{Z:function(){return o}});var t=a(83946),n=a(19013),s=a(13882);function o(e,r){return(0,s.Z)(2,arguments),function(e,r){(0,s.Z)(2,arguments);var a=(0,n.Z)(e),o=(0,t.Z)(r);if(isNaN(o))return new Date(NaN);if(!o)return a;var i=a.getDate(),l=new Date(a.getTime());return(l.setMonth(a.getMonth()+o+1,0),i>=l.getDate())?l:(a.setFullYear(l.getFullYear(),l.getMonth(),i),a)}(e,12*(0,t.Z)(r))}},42699:function(e,r,a){"use strict";a.d(r,{Z:function(){return s}});var t=a(19013),n=a(13882);function s(e,r){(0,n.Z)(2,arguments);var a=(0,t.Z)(e),s=(0,t.Z)(r);return a.getTime()>s.getTime()}},19013:function(e,r,a){"use strict";a.d(r,{Z:function(){return s}});var t=a(13882);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){(0,t.Z)(1,arguments);var r=Object.prototype.toString.call(e);return e instanceof Date||"object"===n(e)&&"[object Date]"===r?new Date(e.getTime()):"number"==typeof e||"[object Number]"===r?new Date(e):(("string"==typeof e||"[object String]"===r)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}},28896:function(e,r,a){"use strict";a.r(r),a.d(r,{__N_SSP:function(){return l},default:function(){return m}});var t=a(30417),n=a(48304),s=a(95945),o=a(84828);a(67294);var i=a(85893),l=!0;function m(e){var r=e.page,a=e.book,l=a.fields,m=l.seo,c=l.title;return(0,i.jsx)(n.Z,{entry:r,children:(0,i.jsx)(s.Z,{page:r,title:c,seo:m&&(0,o.i)(m),children:(0,i.jsx)(t.Z,{book:a})})})}},30417:function(e,r,a){"use strict";a.d(r,{Z:function(){return C}});var t=a(59499),n=a(95627),s=a.n(n),o=a(67294),i=a(79679),l=a(16835),m=a(92785),c=a(77742),f=a(26277),d=a(93306),u=a(19772),b=a(20413),g=a(20137),h=a(21598),p=a(1647),x=a(91305),w=a(86242),v=a(39588),j=a(24908),y=a(85893),k={form:"test-resources-hero-form",downloadLink:"test-resources-hero-form-download-link"};function _(e){var r=e.downloadUrl,a=e.downloadText,t=e.resourceType,n=(0,o.useState)(!1),i=n[0],l=n[1],m=(0,b.Z)().translate;return(0,y.jsxs)("div",{"data-testid":k.form,className:"jsx-1436439299 book-guide-download-form",children:[i?(0,y.jsxs)("div",{"data-testid":k.downloadLink,className:"jsx-1436439299 book-success-state",children:[(0,y.jsx)("p",{className:"jsx-1436439299 text",children:m("Thanks! Your copy is ready.")}),(0,y.jsx)(v.U,{bgColor:g.CTATheme.BlackFill,url:r,text:a,newWindow:!0,eventContext:t,eventObjectName:"download_button"})]}):(0,y.jsxs)("div",{className:"jsx-1436439299 book-marketo-form mkto-form-wrapper",children:[(0,y.jsxs)("div",{className:"jsx-1436439299 book-marketo-form-header",children:[(0,y.jsx)(j.xv,{brand:"default",size:"heading-3",children:m("Get your copy")}),(0,y.jsx)("p",{className:"jsx-1436439299",children:m("Enter your information below to read the content")})]}),(0,y.jsx)(w.H,{formId:x.Ub.books,submitButtonLabel:"Download now",onSubmit:function(e){return e.success&&l(!0)},forceBusinessEmail:!1})]}),(0,y.jsx)(s(),{id:"1436439299",children:[".jsx-1436439299:root{--color-scheme:light;--text-color:var(--slate);--background-color:var(--white);--slate:#081d34;--blue:#0057ff;--gray:#e6e6e6;--sky:#c4e0fd;--stone:#f1f1f1;--coral-light:#ffa19f;--violet-light:#96a4d8;--ice:#bff5f8;--tangerine-light:#fcc692;--sky-extra-light:#e4eefa;--coral:#ff645f;--violet:#4f66c2;--aqua:#47c7f0;--aqua-hover:var(--ice);--white:#ffffff;--tangerine:#fea143;}",".jsx-1436439299:root{--color-scheme:light;--text-color:var(--mvp-slate);--background-color:var(--paper);--mvp-slate:#041527;--neutral-800:#223140;--neutral-700:#3f4c5a;--neutral-600:#5d6773;--neutral-500:#7a838c;--neutral-400:#989fa5;--neutral-300:#b6babe;--neutral-200:#d3d5d8;--neutral-100:#f1f1f1;--mvp-stone:#f1f1f1;--paper:#ffffff;--mvp-blue:#0057ff;--mvp-aqua:#00b4d8;--mvp-sky-100:#e1effe;--mvp-sky:#c4e0fd;--marigold-500:#f3b521;--marigold-200:#ffe3b2;--sand:#ffe3b2;--clay-600:#ce5a21;--clay-400:#ec9069;--clay-200:#f6c8b4;--mvp-coral:#ec9069;--aqua-800:#093e48;--aqua-100:#caf0f8;--aqua-200:#87dced;--deep-teal:#093e48;--light-teal:#caf0f8;--transparent:transparent;--ui-error-light:#fff0f4;--ui-error:#db0629;--ui-error-dark:#841531;--ui-success-light:#d7efdc;--ui-success:#1bb157;--ui-success-dark:#0f7134;--ui-warning-light:#feedaf;--ui-warning:#fbc916;--ui-warning-dark:#423200;--shadow-xs:0 0.125rem 0.5rem rgba(0,0,0,0.25),0 0 0.0625rem rgba(0,0,0,0.16);--shadow-sm:0 0.5rem 1rem rgba(0,0,0,0.25),0 0 0.0625rem rgba(0,0,0,0.16);--shadow-md:0 0.75rem 1.5rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-lg:0 1.125rem 2.25rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-xl:0 1.5rem 3rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-blue-xs:0 0.125rem 0.5rem rgba(0,87,255,0.25),0 0 0.0625rem rgba(0,87,255,0.16);--shadow-blue-sm:0 0.5rem 1rem rgba(0,87,255,0.25),0 0 0.0625rem rgba(0,87,255,0.16);--shadow-blue-md:0 0.75rem 1.5rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-blue-lg:0 1.125rem 2.25rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-blue-xl:0 1.5rem 3rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-aqua-xs:0 0.125rem 0.5rem rgba(2,151,180,0.25),0 0 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-sm:0 0.5rem 1rem rgba(2,151,180,0.25),0 0 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-md:0 0.75rem 1.5rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-lg:0 1.125rem 2.25rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-xl:0 1.5rem 3rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-marigold-xs:0 0.125rem 0.5rem rgba(156,112,6,0.25), 0 0 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-sm:0 0.5rem 1rem rgba(156,112,6,0.25),0 0 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-md:0 0.75rem 1.5rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-lg:0 1.125rem 2.25rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-xl:0 1.5rem 3rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-clay-xs:0 0.125rem 0.5rem rgba(206,90,33,0.25),0 0 0.0625rem rgba(206,90,33,0.16);--shadow-clay-sm:0 0.5rem 1rem rgba(206,90,33,0.25),0 0 0.0625rem rgba(206,90,33,0.16);--shadow-clay-md:0 0.75rem 1.5rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--shadow-clay-lg:0 1.125rem 2.25rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--shadow-clay-xl:0 1.5rem 3rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--fin-black:#000000;--fin-white:#ffffff;--fin-blue:#0057ff;--fin-error:#841531;}",".book-marketo-form-header.jsx-1436439299{text-align:center;padding:3.75rem 1.875rem 0;}",".book-marketo-form-header.jsx-1436439299 p{margin-top:1.25rem;}",".book-marketo-form.jsx-1436439299 .book-marketo-form-header + .form-element-wrapper{padding:1.875rem;}",".book-success-state.jsx-1436439299{padding:40px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".text.jsx-1436439299{padding-bottom:25px;}"]})]})}var O=[".jsx-3290670242:root{--color-scheme:light;--text-color:var(--slate);--background-color:var(--white);--slate:#081d34;--blue:#0057ff;--gray:#e6e6e6;--sky:#c4e0fd;--stone:#f1f1f1;--coral-light:#ffa19f;--violet-light:#96a4d8;--ice:#bff5f8;--tangerine-light:#fcc692;--sky-extra-light:#e4eefa;--coral:#ff645f;--violet:#4f66c2;--aqua:#47c7f0;--aqua-hover:var(--ice);--white:#ffffff;--tangerine:#fea143;}",".jsx-3290670242:root{--color-scheme:light;--text-color:var(--mvp-slate);--background-color:var(--paper);--mvp-slate:#041527;--neutral-800:#223140;--neutral-700:#3f4c5a;--neutral-600:#5d6773;--neutral-500:#7a838c;--neutral-400:#989fa5;--neutral-300:#b6babe;--neutral-200:#d3d5d8;--neutral-100:#f1f1f1;--mvp-stone:#f1f1f1;--paper:#ffffff;--mvp-blue:#0057ff;--mvp-aqua:#00b4d8;--mvp-sky-100:#e1effe;--mvp-sky:#c4e0fd;--marigold-500:#f3b521;--marigold-200:#ffe3b2;--sand:#ffe3b2;--clay-600:#ce5a21;--clay-400:#ec9069;--clay-200:#f6c8b4;--mvp-coral:#ec9069;--aqua-800:#093e48;--aqua-100:#caf0f8;--aqua-200:#87dced;--deep-teal:#093e48;--light-teal:#caf0f8;--transparent:transparent;--ui-error-light:#fff0f4;--ui-error:#db0629;--ui-error-dark:#841531;--ui-success-light:#d7efdc;--ui-success:#1bb157;--ui-success-dark:#0f7134;--ui-warning-light:#feedaf;--ui-warning:#fbc916;--ui-warning-dark:#423200;--shadow-xs:0 0.125rem 0.5rem rgba(0,0,0,0.25),0 0 0.0625rem rgba(0,0,0,0.16);--shadow-sm:0 0.5rem 1rem rgba(0,0,0,0.25),0 0 0.0625rem rgba(0,0,0,0.16);--shadow-md:0 0.75rem 1.5rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-lg:0 1.125rem 2.25rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-xl:0 1.5rem 3rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-blue-xs:0 0.125rem 0.5rem rgba(0,87,255,0.25),0 0 0.0625rem rgba(0,87,255,0.16);--shadow-blue-sm:0 0.5rem 1rem rgba(0,87,255,0.25),0 0 0.0625rem rgba(0,87,255,0.16);--shadow-blue-md:0 0.75rem 1.5rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-blue-lg:0 1.125rem 2.25rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-blue-xl:0 1.5rem 3rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-aqua-xs:0 0.125rem 0.5rem rgba(2,151,180,0.25),0 0 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-sm:0 0.5rem 1rem rgba(2,151,180,0.25),0 0 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-md:0 0.75rem 1.5rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-lg:0 1.125rem 2.25rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-xl:0 1.5rem 3rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-marigold-xs:0 0.125rem 0.5rem rgba(156,112,6,0.25), 0 0 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-sm:0 0.5rem 1rem rgba(156,112,6,0.25),0 0 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-md:0 0.75rem 1.5rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-lg:0 1.125rem 2.25rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-xl:0 1.5rem 3rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-clay-xs:0 0.125rem 0.5rem rgba(206,90,33,0.25),0 0 0.0625rem rgba(206,90,33,0.16);--shadow-clay-sm:0 0.5rem 1rem rgba(206,90,33,0.25),0 0 0.0625rem rgba(206,90,33,0.16);--shadow-clay-md:0 0.75rem 1.5rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--shadow-clay-lg:0 1.125rem 2.25rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--shadow-clay-xl:0 1.5rem 3rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--fin-black:#000000;--fin-white:#ffffff;--fin-blue:#0057ff;--fin-error:#841531;}",".resources-hero.jsx-3290670242{position:relative;padding:60px 60px 100px 60px;background-color:#f1f1f1;}",'.background.jsx-3290670242{background-image:url("'.concat("/_next/static/images/medium-1-54590d12f0177ef788479f54e4f5349e.svg",'");background-repeat:no-repeat;background-size:contain;background-position:center;right:50%;-webkit-transform:translate(50%,-50%) scale(1.3);-ms-transform:translate(50%,-50%) scale(1.3);transform:translate(50%,-50%) scale(1.3);height:100%;width:100%;top:50%;position:absolute;bottom:0;z-index:-3;}'),".inner.jsx-3290670242{grid-column:inner;position:relative;z-index:1;}",".cover-image.jsx-3290670242{position:relative;box-shadow:0px 0px 10px rgba(75,75,75,0.45);max-width:340px;}",".content-left.jsx-3290670242{text-align:center;margin-bottom:70px;}",".content-right.jsx-3290670242{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;}","@-webkit-keyframes expand1-jsx-3290670242{from{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}to{-webkit-transform:translate(5%,5%);-ms-transform:translate(5%,5%);transform:translate(5%,5%);}}","@keyframes expand1-jsx-3290670242{from{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}to{-webkit-transform:translate(5%,5%);-ms-transform:translate(5%,5%);transform:translate(5%,5%);}}","@-webkit-keyframes expand2-jsx-3290670242{from{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}to{-webkit-transform:translate(10%,10%);-ms-transform:translate(10%,10%);transform:translate(10%,10%);}}","@keyframes expand2-jsx-3290670242{from{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}to{-webkit-transform:translate(10%,10%);-ms-transform:translate(10%,10%);transform:translate(10%,10%);}}",".image-stack.jsx-3290670242{position:absolute;height:100%;width:100%;box-shadow:0px 0px 10px rgba(75,75,75,0.45);background:white;}",".image-stack.jsx-3290670242:nth-of-type(1){left:0;top:0;z-index:-1;-webkit-animation:0.5s ease-out 1s expand1-jsx-3290670242;animation:0.5s ease-out 1s expand1-jsx-3290670242;}",".image-stack.jsx-3290670242:nth-of-type(2){left:0;top:0;z-index:-2;-webkit-animation:0.5s ease-out 1s expand2-jsx-3290670242;animation:0.5s ease-out 1s expand2-jsx-3290670242;}",".image-stack.image-stack--animated.jsx-3290670242:nth-of-type(1){-webkit-animation:0.5s ease-out 1s expand1-jsx-3290670242;animation:0.5s ease-out 1s expand1-jsx-3290670242;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}",".image-stack.image-stack--animated.jsx-3290670242:nth-of-type(2){-webkit-animation:0.5s ease-out 1s expand2-jsx-3290670242;animation:0.5s ease-out 1s expand2-jsx-3290670242;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}",".logos.jsx-3290670242{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:-8px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}",".resources-hero .logos img{max-width:80px;margin:0 8px;}",".title.jsx-3290670242{line-height:1;font-size:40px;margin-bottom:16px;word-break:break-word;}",".description.jsx-3290670242{font-size:16px;margin-bottom:34px;}",".cta.jsx-3290670242{margin-bottom:45px;}",".feature-logos-title.jsx-3290670242{margin-bottom:15px;}","@media (min-width:768px){.resources-hero.jsx-3290670242{margin-bottom:0;padding:90px;}.background.jsx-3290670242{-webkit-transform:translate(50%,-50%) scale(1.2);-ms-transform:translate(50%,-50%) scale(1.2);transform:translate(50%,-50%) scale(1.2);}.inner.jsx-3290670242{display:grid;grid-template-columns:[content-left] 1fr [content-right] minmax(auto,45%);max-width:1290px;grid-gap:50px;margin:0 auto;padding:0;position:relative;z-index:1;}.title.jsx-3290670242{font-size:60px;font-weight:800;}.description.jsx-3290670242{font-size:26px;margin-bottom:48px;}.content-left.jsx-3290670242{text-align:left;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.cover-image.jsx-3290670242{margin:auto;}.logos.jsx-3290670242{-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;}}"];function E(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,t)}return a}function N(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?E(Object(a),!0).forEach(function(r){(0,t.Z)(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}O.__hash="3290670242";var T={downloadButton:"test-resources-hero-download-button"};function q(e){var r=(0,m.Z)(),a=(0,l.Z)(r,3),t=a[0],n=a[1],x=a[2],w=(0,o.useState)(!1),v=w[0],j=w[1],k=(0,b.Z)().translate;(0,o.useEffect)(function(){j(!0)},[]);var E=v?"image-stack--animated":"",q=(0,g.makeHyphensUnbreakable)(e.fields.shortTitle||e.fields.title);return(0,y.jsxs)("div",{className:"jsx-".concat(O.__hash)+" resources-hero",children:[(0,y.jsxs)("div",{className:"jsx-".concat(O.__hash)+" inner",children:[(0,y.jsxs)("div",{className:"jsx-".concat(O.__hash)+" content-left",children:[(0,y.jsx)("h1",{className:"jsx-".concat(O.__hash)+" title",children:(0,y.jsx)(i.H,{html:q})}),(0,y.jsx)("p",{className:"jsx-".concat(O.__hash)+" description",children:e.fields.description}),(0,y.jsxs)("div",{"data-testid":T.downloadButton,className:"jsx-".concat(O.__hash)+" cta",children:[(0,y.jsx)(c.m,{text:"Download now",onClick:n,arrow:!1,bgColor:g.CTATheme.BlackFill}),(0,y.jsx)(u.c,{isOpen:t,onRequestClose:x,children:(0,y.jsx)(_,{downloadUrl:e.fields.bookPdf.fields.file.url,downloadText:"Download your copy",resourceType:e.fields.resourceType})})]}),e.fields.featuredLogos?(0,y.jsxs)("div",{className:"jsx-".concat(O.__hash)+" featured-logos",children:[(0,y.jsx)("p",{className:"jsx-".concat(O.__hash)+" feature-logos-title",children:k("Featuring experts from:")}),(0,y.jsx)("div",{className:"jsx-".concat(O.__hash)+" logos",children:e.fields.featuredLogos.map(p.f).map(function(e,r){return(0,y.jsx)(d.T,N({},e),r)})})]}):null]}),(0,y.jsxs)("div",{className:"jsx-".concat(O.__hash)+" content-right",children:[(0,y.jsx)("div",{className:"jsx-".concat(O.__hash)+" background"}),(0,y.jsxs)("div",{className:"jsx-".concat(O.__hash)+" cover-image",children:[(0,y.jsx)(f.E,N({},(0,h.transformImage)(e.fields.coverPhoto))),e.fields.pageStackImage?(0,y.jsx)("div",{className:"jsx-".concat(O.__hash)+" "+"image-stack image-stack--bg ".concat(E),children:(0,y.jsx)(f.E,N({},(0,h.transformImage)(e.fields.pageStackImage)))}):null,e.fields.pageStackImageTwo?(0,y.jsx)("div",{className:"jsx-".concat(O.__hash)+" "+"image-stack image-stack--bg ".concat(E),children:(0,y.jsx)(f.E,N({},(0,h.transformImage)(e.fields.pageStackImageTwo)))}):null]})]})]}),(0,y.jsx)(s(),{id:O.__hash,children:O})]})}var P=a(73809),S=[":root{--color-scheme:light;--text-color:var(--slate);--background-color:var(--white);--slate:#081d34;--blue:#0057ff;--gray:#e6e6e6;--sky:#c4e0fd;--stone:#f1f1f1;--coral-light:#ffa19f;--violet-light:#96a4d8;--ice:#bff5f8;--tangerine-light:#fcc692;--sky-extra-light:#e4eefa;--coral:#ff645f;--violet:#4f66c2;--aqua:#47c7f0;--aqua-hover:var(--ice);--white:#ffffff;--tangerine:#fea143;}",":root{--color-scheme:light;--text-color:var(--mvp-slate);--background-color:var(--paper);--mvp-slate:#041527;--neutral-800:#223140;--neutral-700:#3f4c5a;--neutral-600:#5d6773;--neutral-500:#7a838c;--neutral-400:#989fa5;--neutral-300:#b6babe;--neutral-200:#d3d5d8;--neutral-100:#f1f1f1;--mvp-stone:#f1f1f1;--paper:#ffffff;--mvp-blue:#0057ff;--mvp-aqua:#00b4d8;--mvp-sky-100:#e1effe;--mvp-sky:#c4e0fd;--marigold-500:#f3b521;--marigold-200:#ffe3b2;--sand:#ffe3b2;--clay-600:#ce5a21;--clay-400:#ec9069;--clay-200:#f6c8b4;--mvp-coral:#ec9069;--aqua-800:#093e48;--aqua-100:#caf0f8;--aqua-200:#87dced;--deep-teal:#093e48;--light-teal:#caf0f8;--transparent:transparent;--ui-error-light:#fff0f4;--ui-error:#db0629;--ui-error-dark:#841531;--ui-success-light:#d7efdc;--ui-success:#1bb157;--ui-success-dark:#0f7134;--ui-warning-light:#feedaf;--ui-warning:#fbc916;--ui-warning-dark:#423200;--shadow-xs:0 0.125rem 0.5rem rgba(0,0,0,0.25),0 0 0.0625rem rgba(0,0,0,0.16);--shadow-sm:0 0.5rem 1rem rgba(0,0,0,0.25),0 0 0.0625rem rgba(0,0,0,0.16);--shadow-md:0 0.75rem 1.5rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-lg:0 1.125rem 2.25rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-xl:0 1.5rem 3rem rgba(0,0,0,0.25),0 0.0625rem 0.0625rem rgba(0,0,0,0.16);--shadow-blue-xs:0 0.125rem 0.5rem rgba(0,87,255,0.25),0 0 0.0625rem rgba(0,87,255,0.16);--shadow-blue-sm:0 0.5rem 1rem rgba(0,87,255,0.25),0 0 0.0625rem rgba(0,87,255,0.16);--shadow-blue-md:0 0.75rem 1.5rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-blue-lg:0 1.125rem 2.25rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-blue-xl:0 1.5rem 3rem rgba(0,87,255,0.25), 0 0.0625rem 0.0625rem rgba(0,87,255,0.16);--shadow-aqua-xs:0 0.125rem 0.5rem rgba(2,151,180,0.25),0 0 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-sm:0 0.5rem 1rem rgba(2,151,180,0.25),0 0 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-md:0 0.75rem 1.5rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-lg:0 1.125rem 2.25rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-aqua-xl:0 1.5rem 3rem rgba(2,151,180,0.25), 0 0.0625rem 0.0625rem rgba(2,151,180,0.16);--shadow-marigold-xs:0 0.125rem 0.5rem rgba(156,112,6,0.25), 0 0 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-sm:0 0.5rem 1rem rgba(156,112,6,0.25),0 0 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-md:0 0.75rem 1.5rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-lg:0 1.125rem 2.25rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-marigold-xl:0 1.5rem 3rem rgba(156,112,6,0.25), 0 0.0625rem 0.0625rem rgba(156,112,6,0.16);--shadow-clay-xs:0 0.125rem 0.5rem rgba(206,90,33,0.25),0 0 0.0625rem rgba(206,90,33,0.16);--shadow-clay-sm:0 0.5rem 1rem rgba(206,90,33,0.25),0 0 0.0625rem rgba(206,90,33,0.16);--shadow-clay-md:0 0.75rem 1.5rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--shadow-clay-lg:0 1.125rem 2.25rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--shadow-clay-xl:0 1.5rem 3rem rgba(206,90,33,0.25), 0 0.0625rem 0.0625rem rgba(206,90,33,0.16);--fin-black:#000000;--fin-white:#ffffff;--fin-blue:#0057ff;--fin-error:#841531;}",".book-guide-page__details{padding:40px 30px;max-width:1290px;display:grid;grid-template-columns:auto;margin:auto;}",".book-guide-page__details h2{font-size:26px;font-weight:normal;line-height:37px;margin-bottom:25px;}",".book-guide-page__details ul{margin-bottom:50px;}","@media (min-width:1024px){.book-guide-page__details{grid-template-columns:1fr 1fr;}}"];function Z(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,t)}return a}function D(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(a),!0).forEach(function(r){(0,t.Z)(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}S.__hash="1620184206";var C=function(e){var r=e.book;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(q,D({},r)),r.fields.details?(0,y.jsx)("div",{className:"jsx-".concat(S.__hash)+" book-guide-page__details",children:(0,y.jsx)("div",{className:"jsx-".concat(S.__hash)+" book-guide-page__details-inner",children:(0,y.jsx)(i.H,{document:r.fields.details})})}):null,r.fields.bodyContent?r.fields.bodyContent.map(function(e){return(0,y.jsx)(y.Fragment,{children:(0,P.M)(e.sys.contentType.sys.id,D({},e))})}):null,(0,y.jsx)(s(),{id:S.__hash,children:S})]})}},1647:function(e,r,a){"use strict";a.d(r,{f:function(){return o}});var t=a(59499);function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach(function(r){(0,t.Z)(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function o(e){var r,a,t=e.fields;return s(s({},t),{},{logoUrl:t.logoUrl.fields.file.url,width:null===(r=t.logoUrl.fields.file.details.image)||void 0===r?void 0:r.width,height:null===(a=t.logoUrl.fields.file.details.image)||void 0===a?void 0:a.height})}},79949:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/guides/[guide]",function(){return a(28896)}])},9008:function(e,r,a){e.exports=a(72717)},34699:function(e,r,a){"use strict";a.d(r,{D:function(){return m}});var t=a(67294),n=function(){var e=1,r=new WeakMap,a=function(t,n){return"number"==typeof t||"string"==typeof t?n?"idx-"+n:"val-"+t:r.has(t)?"uid"+r.get(t):(r.set(t,e++),a(t))};return a};n();var s=function(e){return void 0===e&&(e=""),{value:1,prefix:e,uid:n()}},o=s(),i=t.createContext(s()),l=function(e){var r,a,t,n=e||o,s=n?n.prefix:"",i=s+n.value++,l=function(e){return i+n.uid(e)};return{uid:i,gen:l}},m=function(){return t.useState(l(t.useContext(i)))[0].uid}},14154:function(e,r,a){"use strict";function t(){return(t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}a.d(r,{Z:function(){return t}})}},function(e){e.O(0,[3662,7321,9094,2135,1216,5112,1102,3715,6118,1598,7742,4692,6242,4035,7408,9826,7749,460,910,5823,1911,8869,9170,6952,4719,7621,84,2493,714,5945,9774,2888,179],function(){return e(e.s=79949)}),_N_E=e.O()}]);
//# sourceMappingURL=[guide]-6c9e863789f41045.js.map