"use strict";(self.webpackChunkvirtua=self.webpackChunkvirtua||[]).push([[283],{"./stories/comparisons/react-window.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DynamicHeight:()=>DynamicHeight,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-virtualized/dist/es/AutoSizer/index.js"),react_window__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-window/dist/index.esm.js"),_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/react/List.tsx"),_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./stories/comparisons/components.tsx");const heights=[20,40,80,77],Row=({index:i})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:heights[i%heights.length],borderBottom:"solid 1px #ccc",background:"#fff"},children:i}),RWRow=({index:i,setHeight})=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{ref.current&&setHeight(i,ref.current.getBoundingClientRect().height)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref,style:{height:heights[i%heights.length],borderBottom:"solid 1px #ccc",background:"#fff"},children:i})},__WEBPACK_DEFAULT_EXPORT__={component:react_window__WEBPACK_IMPORTED_MODULE_3__.S_},DynamicHeight={render:()=>{const heightsCache=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>Array.from({length:1e3}).map((()=>50))),[]),rwListRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),getHeight=i=>heightsCache[i],setHeight=(index,height)=>{var _a;heightsCache[index]=height,null==(_a=rwListRef.current)||_a.resetAfterIndex(index)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{flex:1},children:"virtua"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{flex:1},children:"react-window"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.g,{count:1e3})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.a,{style:{flex:1},children:Array.from({length:1e3}).map(((_,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Row,{index:i},i)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{flex:1},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_2__.Z,{children:({width,height})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_window__WEBPACK_IMPORTED_MODULE_3__.S_,{ref:rwListRef,width,height,itemCount:1e3,itemSize:getHeight,children:({index:i,style})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RWRow,{index:i,setHeight})},i)})})})]})]})}};DynamicHeight.parameters={...DynamicHeight.parameters,docs:{...DynamicHeight.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const heightsCache = useMemo(() => Array.from({\n      length: ROW_COUNT\n    }).map(() => 50), []);\n    const rwListRef = useRef(null);\n    const getHeight = i => heightsCache[i];\n    const setHeight = (index, height) => {\n      var _a;\n      heightsCache[index] = height;\n      (_a = rwListRef.current) == null ? void 0 : _a.resetAfterIndex(index);\n    };\n    return /* @__PURE__ */jsxs("div", {\n      style: {\n        height: "100vh",\n        display: "flex",\n        flexDirection: "column"\n      },\n      children: [/* @__PURE__ */jsxs("div", {\n        style: {\n          display: "flex",\n          flexDirection: "row"\n        },\n        children: [/* @__PURE__ */jsx("div", {\n          style: {\n            flex: 1\n          },\n          children: "virtua"\n        }), /* @__PURE__ */jsx("div", {\n          style: {\n            flex: 1\n          },\n          children: "react-window"\n        })]\n      }), /* @__PURE__ */jsx("div", {\n        style: {\n          display: "flex",\n          flexDirection: "row"\n        },\n        children: /* @__PURE__ */jsx(ScrollInput, {\n          count: ROW_COUNT\n        })\n      }), /* @__PURE__ */jsxs("div", {\n        style: {\n          display: "flex",\n          flexDirection: "row",\n          flex: 1,\n          gap: 8\n        },\n        children: [/* @__PURE__ */jsx(List, {\n          style: {\n            flex: 1\n          },\n          children: Array.from({\n            length: ROW_COUNT\n          }).map((_, i) => /* @__PURE__ */jsx(Row, {\n            index: i\n          }, i))\n        }), /* @__PURE__ */jsx("div", {\n          style: {\n            flex: 1\n          },\n          children: /* @__PURE__ */jsx(AutoSizer, {\n            children: ({\n              width,\n              height\n            }) => /* @__PURE__ */jsx(RWList, {\n              ref: rwListRef,\n              width,\n              height,\n              itemCount: ROW_COUNT,\n              itemSize: getHeight,\n              children: ({\n                index: i,\n                style\n              }) => /* @__PURE__ */jsx("div", {\n                style,\n                children: /* @__PURE__ */jsx(RWRow, {\n                  index: i,\n                  setHeight\n                })\n              }, i)\n            })\n          })\n        })]\n      })]\n    });\n  }\n}',...DynamicHeight.parameters?.docs?.source}}}}}]);