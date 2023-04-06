/*! For license information please see advanced-Zoomable-stories.6bcf909d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkvirtua=self.webpackChunkvirtua||[]).push([[750],{"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var e=__webpack_require__("./node_modules/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"./node_modules/use-sync-external-store/shim/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")},"./stories/advanced/Zoomable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/react/List.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_2__.a},Default={name:"Zoomable",render:()=>{const[zoom,setZoom]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{height:600},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{style:{width:"100%"},children:["zoom x",zoom,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"range",value:zoom,min:.1,max:10,step:.01,style:{width:"85%"},onChange:e=>{setZoom(Number(e.target.value))}})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{overflow:"hidden"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.a,{style:{height:"100vh"},children:Array.from({length:1e3}).map(((_,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:40,background:"#fff",borderBottom:"solid 1px #ccc",zoom,transformOrigin:"center top"},children:i},i)))})})]})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  name: "Zoomable",\n  render: () => {\n    const [zoom, setZoom] = useState(1);\n    return /* @__PURE__ */jsxs("div", {\n      style: {\n        height: 600\n      },\n      children: [/* @__PURE__ */jsx("div", {\n        children: /* @__PURE__ */jsxs("label", {\n          style: {\n            width: "100%"\n          },\n          children: ["zoom x", zoom, /* @__PURE__ */jsx("input", {\n            type: "range",\n            value: zoom,\n            min: 0.1,\n            max: 10,\n            step: 0.01,\n            style: {\n              width: "85%"\n            },\n            onChange: e => {\n              setZoom(Number(e.target.value));\n            }\n          })]\n        })\n      }), /* @__PURE__ */jsx("div", {\n        style: {\n          overflow: "hidden"\n        },\n        children: /* @__PURE__ */jsx(List, {\n          style: {\n            height: "100vh"\n          },\n          children: Array.from({\n            length: 1e3\n          }).map((_, i) => {\n            return /* @__PURE__ */jsx("div", {\n              style: {\n                height: 40,\n                background: "#fff",\n                borderBottom: "solid 1px #ccc",\n                zoom,\n                transformOrigin: "center top"\n              },\n              children: i\n            }, i);\n          })\n        })\n      })]\n    });\n  }\n}',...Default.parameters?.docs?.source}}}}}]);