"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7321,5680,2210,1294,5615,7511,1069,2230,6078,8365],{74129:function(e,t,E){var n,r,L,S=E(67294),O=S&&"object"==typeof S&&"default"in S?S.default:S,_=function(){return(_=Object.assign||function(e){for(var t,E=1,n=arguments.length;E<n;E++)for(var r in t=arguments[E])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==E.g?E.g:"undefined"!=typeof self?self:{};function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,t){return e(t={exports:{}},t.exports),t.exports}var B=o(function(e,t){var E;Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,(E=t.BLOCKS||(t.BLOCKS={})).DOCUMENT="document",E.PARAGRAPH="paragraph",E.HEADING_1="heading-1",E.HEADING_2="heading-2",E.HEADING_3="heading-3",E.HEADING_4="heading-4",E.HEADING_5="heading-5",E.HEADING_6="heading-6",E.OL_LIST="ordered-list",E.UL_LIST="unordered-list",E.LIST_ITEM="list-item",E.HR="hr",E.QUOTE="blockquote",E.EMBEDDED_ENTRY="embedded-entry-block",E.EMBEDDED_ASSET="embedded-asset-block",E.EMBEDDED_RESOURCE="embedded-resource-block",E.TABLE="table",E.TABLE_ROW="table-row",E.TABLE_CELL="table-cell",E.TABLE_HEADER_CELL="table-header-cell"});l(B),B.BLOCKS;var i=o(function(e,t){var E;Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,(E=t.INLINES||(t.INLINES={})).HYPERLINK="hyperlink",E.ENTRY_HYPERLINK="entry-hyperlink",E.ASSET_HYPERLINK="asset-hyperlink",E.EMBEDDED_ENTRY="embedded-entry-inline"});l(i),i.INLINES;var a=o(function(e,t){var E,n;Object.defineProperty(t,"__esModule",{value:!0}),(n=E||(E={})).BOLD="bold",n.ITALIC="italic",n.UNDERLINE="underline",n.CODE="code",n.SUPERSCRIPT="superscript",n.SUBSCRIPT="subscript",t.default=E});l(a);var C=o(function(e,t){var E,n=u&&u.__spreadArray||function(e,t,E){if(E||2===arguments.length)for(var n,r=0,L=t.length;r<L;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))},r=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var L=r(a);t.TOP_LEVEL_BLOCKS=[B.BLOCKS.PARAGRAPH,B.BLOCKS.HEADING_1,B.BLOCKS.HEADING_2,B.BLOCKS.HEADING_3,B.BLOCKS.HEADING_4,B.BLOCKS.HEADING_5,B.BLOCKS.HEADING_6,B.BLOCKS.OL_LIST,B.BLOCKS.UL_LIST,B.BLOCKS.HR,B.BLOCKS.QUOTE,B.BLOCKS.EMBEDDED_ENTRY,B.BLOCKS.EMBEDDED_ASSET,B.BLOCKS.EMBEDDED_RESOURCE,B.BLOCKS.TABLE,],t.LIST_ITEM_BLOCKS=[B.BLOCKS.PARAGRAPH,B.BLOCKS.HEADING_1,B.BLOCKS.HEADING_2,B.BLOCKS.HEADING_3,B.BLOCKS.HEADING_4,B.BLOCKS.HEADING_5,B.BLOCKS.HEADING_6,B.BLOCKS.OL_LIST,B.BLOCKS.UL_LIST,B.BLOCKS.HR,B.BLOCKS.QUOTE,B.BLOCKS.EMBEDDED_ENTRY,B.BLOCKS.EMBEDDED_ASSET,B.BLOCKS.EMBEDDED_RESOURCE,],t.TABLE_BLOCKS=[B.BLOCKS.TABLE,B.BLOCKS.TABLE_ROW,B.BLOCKS.TABLE_CELL,B.BLOCKS.TABLE_HEADER_CELL,],t.VOID_BLOCKS=[B.BLOCKS.HR,B.BLOCKS.EMBEDDED_ENTRY,B.BLOCKS.EMBEDDED_ASSET,B.BLOCKS.EMBEDDED_RESOURCE,],t.CONTAINERS=((E={})[B.BLOCKS.OL_LIST]=[B.BLOCKS.LIST_ITEM],E[B.BLOCKS.UL_LIST]=[B.BLOCKS.LIST_ITEM],E[B.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,E[B.BLOCKS.QUOTE]=[B.BLOCKS.PARAGRAPH],E[B.BLOCKS.TABLE]=[B.BLOCKS.TABLE_ROW],E[B.BLOCKS.TABLE_ROW]=[B.BLOCKS.TABLE_CELL,B.BLOCKS.TABLE_HEADER_CELL],E[B.BLOCKS.TABLE_CELL]=[B.BLOCKS.PARAGRAPH],E[B.BLOCKS.TABLE_HEADER_CELL]=[B.BLOCKS.PARAGRAPH],E),t.HEADINGS=[B.BLOCKS.HEADING_1,B.BLOCKS.HEADING_2,B.BLOCKS.HEADING_3,B.BLOCKS.HEADING_4,B.BLOCKS.HEADING_5,B.BLOCKS.HEADING_6,],t.TEXT_CONTAINERS=n([B.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[B.BLOCKS.DOCUMENT,B.BLOCKS.PARAGRAPH,B.BLOCKS.HEADING_1,B.BLOCKS.HEADING_2,B.BLOCKS.HEADING_3,B.BLOCKS.HEADING_4,B.BLOCKS.HEADING_5,B.BLOCKS.HEADING_6,B.BLOCKS.OL_LIST,B.BLOCKS.UL_LIST,B.BLOCKS.LIST_ITEM,B.BLOCKS.HR,B.BLOCKS.QUOTE,B.BLOCKS.EMBEDDED_ENTRY,B.BLOCKS.EMBEDDED_ASSET,i.INLINES.HYPERLINK,i.INLINES.ENTRY_HYPERLINK,i.INLINES.ASSET_HYPERLINK,i.INLINES.EMBEDDED_ENTRY,"text",],t.V1_MARKS=[L.default.BOLD,L.default.CODE,L.default.ITALIC,L.default.UNDERLINE]});l(C),C.V1_MARKS,C.V1_NODE_TYPES,C.TEXT_CONTAINERS,C.HEADINGS,C.CONTAINERS,C.VOID_BLOCKS,C.TABLE_BLOCKS,C.LIST_ITEM_BLOCKS,C.TOP_LEVEL_BLOCKS;var I=o(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});l(I);var c=o(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});l(c);var D=o(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var E={nodeType:B.BLOCKS.DOCUMENT,data:{},content:[{nodeType:B.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}},]},]};t.default=E});l(D);var T=o(function(e,t){function E(e,t){for(var E=0,n=Object.keys(e);E<n.length;E++)if(t===e[n[E]])return!0;return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return E(i.INLINES,e.nodeType)},t.isBlock=function(e){return E(B.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}});l(T),T.isText,T.isBlock,T.isInline;var A=o(function(e,t){var E=u&&u.__createBinding||(Object.create?function(e,t,E,n){void 0===n&&(n=E);var r=Object.getOwnPropertyDescriptor(t,E);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[E]}}),Object.defineProperty(e,n,r)}:function(e,t,E,n){void 0===n&&(n=E),e[n]=t[E]}),n=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=u&&u.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||E(t,e,n)},L=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&E(t,e,r);return n(t,e),t},S=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return B.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return i.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return S(a).default}}),r(C,t),r(I,t),r(c,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return S(D).default}});var O=L(T);t.helpers=O});l(A);var d=A.helpers;A.EMPTY_DOCUMENT;var K=A.MARKS,N=A.INLINES,f=A.BLOCKS,R=((n={})[f.DOCUMENT]=function(e,t){return t},n[f.PARAGRAPH]=function(e,t){return O.createElement("p",null,t)},n[f.HEADING_1]=function(e,t){return O.createElement("h1",null,t)},n[f.HEADING_2]=function(e,t){return O.createElement("h2",null,t)},n[f.HEADING_3]=function(e,t){return O.createElement("h3",null,t)},n[f.HEADING_4]=function(e,t){return O.createElement("h4",null,t)},n[f.HEADING_5]=function(e,t){return O.createElement("h5",null,t)},n[f.HEADING_6]=function(e,t){return O.createElement("h6",null,t)},n[f.EMBEDDED_ENTRY]=function(e,t){return O.createElement("div",null,t)},n[f.EMBEDDED_RESOURCE]=function(e,t){return O.createElement("div",null,t)},n[f.UL_LIST]=function(e,t){return O.createElement("ul",null,t)},n[f.OL_LIST]=function(e,t){return O.createElement("ol",null,t)},n[f.LIST_ITEM]=function(e,t){return O.createElement("li",null,t)},n[f.QUOTE]=function(e,t){return O.createElement("blockquote",null,t)},n[f.HR]=function(){return O.createElement("hr",null)},n[f.TABLE]=function(e,t){return O.createElement("table",null,O.createElement("tbody",null,t))},n[f.TABLE_ROW]=function(e,t){return O.createElement("tr",null,t)},n[f.TABLE_HEADER_CELL]=function(e,t){return O.createElement("th",null,t)},n[f.TABLE_CELL]=function(e,t){return O.createElement("td",null,t)},n[N.ASSET_HYPERLINK]=function(e){return H(N.ASSET_HYPERLINK,e)},n[N.ENTRY_HYPERLINK]=function(e){return H(N.ENTRY_HYPERLINK,e)},n[N.EMBEDDED_ENTRY]=function(e){return H(N.EMBEDDED_ENTRY,e)},n[N.HYPERLINK]=function(e,t){return O.createElement("a",{href:e.data.uri},t)},n),s=((r={})[K.BOLD]=function(e){return O.createElement("b",null,e)},r[K.ITALIC]=function(e){return O.createElement("i",null,e)},r[K.UNDERLINE]=function(e){return O.createElement("u",null,e)},r[K.CODE]=function(e){return O.createElement("code",null,e)},r[K.SUPERSCRIPT]=function(e){return O.createElement("sup",null,e)},r[K.SUBSCRIPT]=function(e){return O.createElement("sub",null,e)},r);function H(e,t){return O.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return(void 0===t&&(t={}),e)?function e(t,E){var n=E.renderNode,r=E.renderMark,L=E.renderText;if(d.isText(t))return t.marks.reduce(function(e,t){return r[t.type]?r[t.type](e):e},L?L(t.value):t.value);var _,u,l=(_=t.content).map(function(t,n){var r,L;return r=e(t,E),S.isValidElement(r)&&null===r.key?S.cloneElement(r,{key:n}):r});return t.nodeType&&n[t.nodeType]?n[t.nodeType](t,l):O.createElement(O.Fragment,null,l)}(e,{renderNode:_(_({},R),t.renderNode),renderMark:_(_({},s),t.renderMark),renderText:t.renderText}):null}},20549:function(e,t){var E;Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,(E=t.BLOCKS||(t.BLOCKS={})).DOCUMENT="document",E.PARAGRAPH="paragraph",E.HEADING_1="heading-1",E.HEADING_2="heading-2",E.HEADING_3="heading-3",E.HEADING_4="heading-4",E.HEADING_5="heading-5",E.HEADING_6="heading-6",E.OL_LIST="ordered-list",E.UL_LIST="unordered-list",E.LIST_ITEM="list-item",E.HR="hr",E.QUOTE="blockquote",E.EMBEDDED_ENTRY="embedded-entry-block",E.EMBEDDED_ASSET="embedded-asset-block",E.EMBEDDED_RESOURCE="embedded-resource-block",E.TABLE="table",E.TABLE_ROW="table-row",E.TABLE_CELL="table-cell",E.TABLE_HEADER_CELL="table-header-cell"},51928:function(e,t,E){Object.defineProperty(t,"__esModule",{value:!0});var n=E(20549),r={nodeType:n.BLOCKS.DOCUMENT,data:{},content:[{nodeType:n.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}},]},]};t.default=r},86061:function(e,t,E){Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;var n=E(20549),r=E(7845);function L(e,t){for(var E=0,n=Object.keys(e);E<n.length;E++)if(t===e[n[E]])return!0;return!1}t.isInline=function(e){return L(r.INLINES,e.nodeType)},t.isBlock=function(e){return L(n.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}},86437:function(e,t,E){var n=this&&this.__createBinding||(Object.create?function(e,t,E,n){void 0===n&&(n=E);var r=Object.getOwnPropertyDescriptor(t,E);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[E]}}),Object.defineProperty(e,n,r)}:function(e,t,E,n){void 0===n&&(n=E),e[n]=t[E]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),L=this&&this.__exportStar||function(e,t){for(var E in e)"default"===E||Object.prototype.hasOwnProperty.call(t,E)||n(t,e,E)},S=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var E in e)"default"!==E&&Object.prototype.hasOwnProperty.call(e,E)&&n(t,e,E);return r(t,e),t},O=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0;var _=E(20549);Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return _.BLOCKS}});var u=E(7845);Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return u.INLINES}});var l=E(31376);Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return O(l).default}}),L(E(97951),t),L(E(80167),t),L(E(11911),t);var o=E(51928);Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return O(o).default}});var B=S(E(86061));t.helpers=B},7845:function(e,t){var E;Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,(E=t.INLINES||(t.INLINES={})).HYPERLINK="hyperlink",E.ENTRY_HYPERLINK="entry-hyperlink",E.ASSET_HYPERLINK="asset-hyperlink",E.EMBEDDED_ENTRY="embedded-entry-inline"},31376:function(e,t){var E,n;Object.defineProperty(t,"__esModule",{value:!0}),(n=E||(E={})).BOLD="bold",n.ITALIC="italic",n.UNDERLINE="underline",n.CODE="code",n.SUPERSCRIPT="superscript",n.SUBSCRIPT="subscript",t.default=E},11911:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},97951:function(e,t,E){var n,r=this&&this.__spreadArray||function(e,t,E){if(E||2===arguments.length)for(var n,r=0,L=t.length;r<L;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))},L=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var S=E(20549),O=E(7845),_=L(E(31376));t.TOP_LEVEL_BLOCKS=[S.BLOCKS.PARAGRAPH,S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,S.BLOCKS.OL_LIST,S.BLOCKS.UL_LIST,S.BLOCKS.HR,S.BLOCKS.QUOTE,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,S.BLOCKS.EMBEDDED_RESOURCE,S.BLOCKS.TABLE,],t.LIST_ITEM_BLOCKS=[S.BLOCKS.PARAGRAPH,S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,S.BLOCKS.OL_LIST,S.BLOCKS.UL_LIST,S.BLOCKS.HR,S.BLOCKS.QUOTE,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,S.BLOCKS.EMBEDDED_RESOURCE,],t.TABLE_BLOCKS=[S.BLOCKS.TABLE,S.BLOCKS.TABLE_ROW,S.BLOCKS.TABLE_CELL,S.BLOCKS.TABLE_HEADER_CELL,],t.VOID_BLOCKS=[S.BLOCKS.HR,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,S.BLOCKS.EMBEDDED_RESOURCE,],t.CONTAINERS=((n={})[S.BLOCKS.OL_LIST]=[S.BLOCKS.LIST_ITEM],n[S.BLOCKS.UL_LIST]=[S.BLOCKS.LIST_ITEM],n[S.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[S.BLOCKS.QUOTE]=[S.BLOCKS.PARAGRAPH],n[S.BLOCKS.TABLE]=[S.BLOCKS.TABLE_ROW],n[S.BLOCKS.TABLE_ROW]=[S.BLOCKS.TABLE_CELL,S.BLOCKS.TABLE_HEADER_CELL],n[S.BLOCKS.TABLE_CELL]=[S.BLOCKS.PARAGRAPH],n[S.BLOCKS.TABLE_HEADER_CELL]=[S.BLOCKS.PARAGRAPH],n),t.HEADINGS=[S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,],t.TEXT_CONTAINERS=r([S.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[S.BLOCKS.DOCUMENT,S.BLOCKS.PARAGRAPH,S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,S.BLOCKS.OL_LIST,S.BLOCKS.UL_LIST,S.BLOCKS.LIST_ITEM,S.BLOCKS.HR,S.BLOCKS.QUOTE,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,O.INLINES.HYPERLINK,O.INLINES.ENTRY_HYPERLINK,O.INLINES.ASSET_HYPERLINK,O.INLINES.EMBEDDED_ENTRY,"text",],t.V1_MARKS=[_.default.BOLD,_.default.CODE,_.default.ITALIC,_.default.UNDERLINE]},80167:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}]);
//# sourceMappingURL=7321-e34edf864043969e.js.map