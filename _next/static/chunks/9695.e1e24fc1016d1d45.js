"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9695,4730,5680,7,7321,2210,1294,5615,7511,4279,1069,2230,6078,8365],{74129:function(e,t,n){var E,r,L,S=n(67294),O=S&&"object"==typeof S&&"default"in S?S.default:S,u=function(){return(u=Object.assign||function(e){for(var t,n=1,E=arguments.length;n<E;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},_="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,t){return e(t={exports:{}},t.exports),t.exports}var B=o(function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,(n=t.BLOCKS||(t.BLOCKS={})).DOCUMENT="document",n.PARAGRAPH="paragraph",n.HEADING_1="heading-1",n.HEADING_2="heading-2",n.HEADING_3="heading-3",n.HEADING_4="heading-4",n.HEADING_5="heading-5",n.HEADING_6="heading-6",n.OL_LIST="ordered-list",n.UL_LIST="unordered-list",n.LIST_ITEM="list-item",n.HR="hr",n.QUOTE="blockquote",n.EMBEDDED_ENTRY="embedded-entry-block",n.EMBEDDED_ASSET="embedded-asset-block",n.EMBEDDED_RESOURCE="embedded-resource-block",n.TABLE="table",n.TABLE_ROW="table-row",n.TABLE_CELL="table-cell",n.TABLE_HEADER_CELL="table-header-cell"});l(B),B.BLOCKS;var i=o(function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,(n=t.INLINES||(t.INLINES={})).HYPERLINK="hyperlink",n.ENTRY_HYPERLINK="entry-hyperlink",n.ASSET_HYPERLINK="asset-hyperlink",n.EMBEDDED_ENTRY="embedded-entry-inline"});l(i),i.INLINES;var a=o(function(e,t){var n,E;Object.defineProperty(t,"__esModule",{value:!0}),(E=n||(n={})).BOLD="bold",E.ITALIC="italic",E.UNDERLINE="underline",E.CODE="code",E.SUPERSCRIPT="superscript",E.SUBSCRIPT="subscript",t.default=n});l(a);var C=o(function(e,t){var n,E=_&&_.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var E,r=0,L=t.length;r<L;r++)!E&&r in t||(E||(E=Array.prototype.slice.call(t,0,r)),E[r]=t[r]);return e.concat(E||Array.prototype.slice.call(t))},r=_&&_.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var L=r(a);t.TOP_LEVEL_BLOCKS=[B.BLOCKS.PARAGRAPH,B.BLOCKS.HEADING_1,B.BLOCKS.HEADING_2,B.BLOCKS.HEADING_3,B.BLOCKS.HEADING_4,B.BLOCKS.HEADING_5,B.BLOCKS.HEADING_6,B.BLOCKS.OL_LIST,B.BLOCKS.UL_LIST,B.BLOCKS.HR,B.BLOCKS.QUOTE,B.BLOCKS.EMBEDDED_ENTRY,B.BLOCKS.EMBEDDED_ASSET,B.BLOCKS.EMBEDDED_RESOURCE,B.BLOCKS.TABLE,],t.LIST_ITEM_BLOCKS=[B.BLOCKS.PARAGRAPH,B.BLOCKS.HEADING_1,B.BLOCKS.HEADING_2,B.BLOCKS.HEADING_3,B.BLOCKS.HEADING_4,B.BLOCKS.HEADING_5,B.BLOCKS.HEADING_6,B.BLOCKS.OL_LIST,B.BLOCKS.UL_LIST,B.BLOCKS.HR,B.BLOCKS.QUOTE,B.BLOCKS.EMBEDDED_ENTRY,B.BLOCKS.EMBEDDED_ASSET,B.BLOCKS.EMBEDDED_RESOURCE,],t.TABLE_BLOCKS=[B.BLOCKS.TABLE,B.BLOCKS.TABLE_ROW,B.BLOCKS.TABLE_CELL,B.BLOCKS.TABLE_HEADER_CELL,],t.VOID_BLOCKS=[B.BLOCKS.HR,B.BLOCKS.EMBEDDED_ENTRY,B.BLOCKS.EMBEDDED_ASSET,B.BLOCKS.EMBEDDED_RESOURCE,],t.CONTAINERS=((n={})[B.BLOCKS.OL_LIST]=[B.BLOCKS.LIST_ITEM],n[B.BLOCKS.UL_LIST]=[B.BLOCKS.LIST_ITEM],n[B.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[B.BLOCKS.QUOTE]=[B.BLOCKS.PARAGRAPH],n[B.BLOCKS.TABLE]=[B.BLOCKS.TABLE_ROW],n[B.BLOCKS.TABLE_ROW]=[B.BLOCKS.TABLE_CELL,B.BLOCKS.TABLE_HEADER_CELL],n[B.BLOCKS.TABLE_CELL]=[B.BLOCKS.PARAGRAPH],n[B.BLOCKS.TABLE_HEADER_CELL]=[B.BLOCKS.PARAGRAPH],n),t.HEADINGS=[B.BLOCKS.HEADING_1,B.BLOCKS.HEADING_2,B.BLOCKS.HEADING_3,B.BLOCKS.HEADING_4,B.BLOCKS.HEADING_5,B.BLOCKS.HEADING_6,],t.TEXT_CONTAINERS=E([B.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[B.BLOCKS.DOCUMENT,B.BLOCKS.PARAGRAPH,B.BLOCKS.HEADING_1,B.BLOCKS.HEADING_2,B.BLOCKS.HEADING_3,B.BLOCKS.HEADING_4,B.BLOCKS.HEADING_5,B.BLOCKS.HEADING_6,B.BLOCKS.OL_LIST,B.BLOCKS.UL_LIST,B.BLOCKS.LIST_ITEM,B.BLOCKS.HR,B.BLOCKS.QUOTE,B.BLOCKS.EMBEDDED_ENTRY,B.BLOCKS.EMBEDDED_ASSET,i.INLINES.HYPERLINK,i.INLINES.ENTRY_HYPERLINK,i.INLINES.ASSET_HYPERLINK,i.INLINES.EMBEDDED_ENTRY,"text",],t.V1_MARKS=[L.default.BOLD,L.default.CODE,L.default.ITALIC,L.default.UNDERLINE]});l(C),C.V1_MARKS,C.V1_NODE_TYPES,C.TEXT_CONTAINERS,C.HEADINGS,C.CONTAINERS,C.VOID_BLOCKS,C.TABLE_BLOCKS,C.LIST_ITEM_BLOCKS,C.TOP_LEVEL_BLOCKS;var c=o(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});l(c);var I=o(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});l(I);var D=o(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:B.BLOCKS.DOCUMENT,data:{},content:[{nodeType:B.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}},]},]};t.default=n});l(D);var T=o(function(e,t){function n(e,t){for(var n=0,E=Object.keys(e);n<E.length;n++)if(t===e[E[n]])return!0;return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(i.INLINES,e.nodeType)},t.isBlock=function(e){return n(B.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}});l(T),T.isText,T.isBlock,T.isInline;var A=o(function(e,t){var n=_&&_.__createBinding||(Object.create?function(e,t,n,E){void 0===E&&(E=n);var r=Object.getOwnPropertyDescriptor(t,n);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,E,r)}:function(e,t,n,E){void 0===E&&(E=n),e[E]=t[n]}),E=_&&_.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=_&&_.__exportStar||function(e,t){for(var E in e)"default"===E||Object.prototype.hasOwnProperty.call(t,E)||n(t,e,E)},L=_&&_.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return E(t,e),t},S=_&&_.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return B.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return i.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return S(a).default}}),r(C,t),r(c,t),r(I,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return S(D).default}});var O=L(T);t.helpers=O});l(A);var d=A.helpers;A.EMPTY_DOCUMENT;var K=A.MARKS,N=A.INLINES,f=A.BLOCKS,R=((E={})[f.DOCUMENT]=function(e,t){return t},E[f.PARAGRAPH]=function(e,t){return O.createElement("p",null,t)},E[f.HEADING_1]=function(e,t){return O.createElement("h1",null,t)},E[f.HEADING_2]=function(e,t){return O.createElement("h2",null,t)},E[f.HEADING_3]=function(e,t){return O.createElement("h3",null,t)},E[f.HEADING_4]=function(e,t){return O.createElement("h4",null,t)},E[f.HEADING_5]=function(e,t){return O.createElement("h5",null,t)},E[f.HEADING_6]=function(e,t){return O.createElement("h6",null,t)},E[f.EMBEDDED_ENTRY]=function(e,t){return O.createElement("div",null,t)},E[f.EMBEDDED_RESOURCE]=function(e,t){return O.createElement("div",null,t)},E[f.UL_LIST]=function(e,t){return O.createElement("ul",null,t)},E[f.OL_LIST]=function(e,t){return O.createElement("ol",null,t)},E[f.LIST_ITEM]=function(e,t){return O.createElement("li",null,t)},E[f.QUOTE]=function(e,t){return O.createElement("blockquote",null,t)},E[f.HR]=function(){return O.createElement("hr",null)},E[f.TABLE]=function(e,t){return O.createElement("table",null,O.createElement("tbody",null,t))},E[f.TABLE_ROW]=function(e,t){return O.createElement("tr",null,t)},E[f.TABLE_HEADER_CELL]=function(e,t){return O.createElement("th",null,t)},E[f.TABLE_CELL]=function(e,t){return O.createElement("td",null,t)},E[N.ASSET_HYPERLINK]=function(e){return p(N.ASSET_HYPERLINK,e)},E[N.ENTRY_HYPERLINK]=function(e){return p(N.ENTRY_HYPERLINK,e)},E[N.EMBEDDED_ENTRY]=function(e){return p(N.EMBEDDED_ENTRY,e)},E[N.HYPERLINK]=function(e,t){return O.createElement("a",{href:e.data.uri},t)},E),s=((r={})[K.BOLD]=function(e){return O.createElement("b",null,e)},r[K.ITALIC]=function(e){return O.createElement("i",null,e)},r[K.UNDERLINE]=function(e){return O.createElement("u",null,e)},r[K.CODE]=function(e){return O.createElement("code",null,e)},r[K.SUPERSCRIPT]=function(e){return O.createElement("sup",null,e)},r[K.SUBSCRIPT]=function(e){return O.createElement("sub",null,e)},r);function p(e,t){return O.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return(void 0===t&&(t={}),e)?function e(t,n){var E=n.renderNode,r=n.renderMark,L=n.renderText;if(d.isText(t))return t.marks.reduce(function(e,t){return r[t.type]?r[t.type](e):e},L?L(t.value):t.value);var u,_,l=(u=t.content).map(function(t,E){var r,L;return r=e(t,n),S.isValidElement(r)&&null===r.key?S.cloneElement(r,{key:E}):r});return t.nodeType&&E[t.nodeType]?E[t.nodeType](t,l):O.createElement(O.Fragment,null,l)}(e,{renderNode:u(u({},R),t.renderNode),renderMark:u(u({},s),t.renderMark),renderText:t.renderText}):null}},20549:function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,(n=t.BLOCKS||(t.BLOCKS={})).DOCUMENT="document",n.PARAGRAPH="paragraph",n.HEADING_1="heading-1",n.HEADING_2="heading-2",n.HEADING_3="heading-3",n.HEADING_4="heading-4",n.HEADING_5="heading-5",n.HEADING_6="heading-6",n.OL_LIST="ordered-list",n.UL_LIST="unordered-list",n.LIST_ITEM="list-item",n.HR="hr",n.QUOTE="blockquote",n.EMBEDDED_ENTRY="embedded-entry-block",n.EMBEDDED_ASSET="embedded-asset-block",n.EMBEDDED_RESOURCE="embedded-resource-block",n.TABLE="table",n.TABLE_ROW="table-row",n.TABLE_CELL="table-cell",n.TABLE_HEADER_CELL="table-header-cell"},51928:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var E=n(20549),r={nodeType:E.BLOCKS.DOCUMENT,data:{},content:[{nodeType:E.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}},]},]};t.default=r},86061:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;var E=n(20549),r=n(7845);function L(e,t){for(var n=0,E=Object.keys(e);n<E.length;n++)if(t===e[E[n]])return!0;return!1}t.isInline=function(e){return L(r.INLINES,e.nodeType)},t.isBlock=function(e){return L(E.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}},86437:function(e,t,n){var E=this&&this.__createBinding||(Object.create?function(e,t,n,E){void 0===E&&(E=n);var r=Object.getOwnPropertyDescriptor(t,n);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,E,r)}:function(e,t,n,E){void 0===E&&(E=n),e[E]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),L=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||E(t,e,n)},S=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&E(t,e,n);return r(t,e),t},O=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0;var u=n(20549);Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return u.BLOCKS}});var _=n(7845);Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return _.INLINES}});var l=n(31376);Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return O(l).default}}),L(n(97951),t),L(n(80167),t),L(n(11911),t);var o=n(51928);Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return O(o).default}});var B=S(n(86061));t.helpers=B},7845:function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,(n=t.INLINES||(t.INLINES={})).HYPERLINK="hyperlink",n.ENTRY_HYPERLINK="entry-hyperlink",n.ASSET_HYPERLINK="asset-hyperlink",n.EMBEDDED_ENTRY="embedded-entry-inline"},31376:function(e,t){var n,E;Object.defineProperty(t,"__esModule",{value:!0}),(E=n||(n={})).BOLD="bold",E.ITALIC="italic",E.UNDERLINE="underline",E.CODE="code",E.SUPERSCRIPT="superscript",E.SUBSCRIPT="subscript",t.default=n},11911:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},97951:function(e,t,n){var E,r=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var E,r=0,L=t.length;r<L;r++)!E&&r in t||(E||(E=Array.prototype.slice.call(t,0,r)),E[r]=t[r]);return e.concat(E||Array.prototype.slice.call(t))},L=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var S=n(20549),O=n(7845),u=L(n(31376));t.TOP_LEVEL_BLOCKS=[S.BLOCKS.PARAGRAPH,S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,S.BLOCKS.OL_LIST,S.BLOCKS.UL_LIST,S.BLOCKS.HR,S.BLOCKS.QUOTE,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,S.BLOCKS.EMBEDDED_RESOURCE,S.BLOCKS.TABLE,],t.LIST_ITEM_BLOCKS=[S.BLOCKS.PARAGRAPH,S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,S.BLOCKS.OL_LIST,S.BLOCKS.UL_LIST,S.BLOCKS.HR,S.BLOCKS.QUOTE,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,S.BLOCKS.EMBEDDED_RESOURCE,],t.TABLE_BLOCKS=[S.BLOCKS.TABLE,S.BLOCKS.TABLE_ROW,S.BLOCKS.TABLE_CELL,S.BLOCKS.TABLE_HEADER_CELL,],t.VOID_BLOCKS=[S.BLOCKS.HR,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,S.BLOCKS.EMBEDDED_RESOURCE,],t.CONTAINERS=((E={})[S.BLOCKS.OL_LIST]=[S.BLOCKS.LIST_ITEM],E[S.BLOCKS.UL_LIST]=[S.BLOCKS.LIST_ITEM],E[S.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,E[S.BLOCKS.QUOTE]=[S.BLOCKS.PARAGRAPH],E[S.BLOCKS.TABLE]=[S.BLOCKS.TABLE_ROW],E[S.BLOCKS.TABLE_ROW]=[S.BLOCKS.TABLE_CELL,S.BLOCKS.TABLE_HEADER_CELL],E[S.BLOCKS.TABLE_CELL]=[S.BLOCKS.PARAGRAPH],E[S.BLOCKS.TABLE_HEADER_CELL]=[S.BLOCKS.PARAGRAPH],E),t.HEADINGS=[S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,],t.TEXT_CONTAINERS=r([S.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[S.BLOCKS.DOCUMENT,S.BLOCKS.PARAGRAPH,S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,S.BLOCKS.OL_LIST,S.BLOCKS.UL_LIST,S.BLOCKS.LIST_ITEM,S.BLOCKS.HR,S.BLOCKS.QUOTE,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,O.INLINES.HYPERLINK,O.INLINES.ENTRY_HYPERLINK,O.INLINES.ASSET_HYPERLINK,O.INLINES.EMBEDDED_ENTRY,"text",],t.V1_MARKS=[u.default.BOLD,u.default.CODE,u.default.ITALIC,u.default.UNDERLINE]},80167:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},4730:function(e,t,n){n.d(t,{Z:function(){return E}});function E(e,t){if(null==e)return{};var n,E,r=function(e,t){if(null==e)return{};var n,E,r={},L=Object.keys(e);for(E=0;E<L.length;E++)n=L[E],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(e);for(E=0;E<L.length;E++)n=L[E],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}}}]);
//# sourceMappingURL=9695.e1e24fc1016d1d45.js.map