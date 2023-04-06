"use strict";(self.webpackChunkvirtua=self.webpackChunkvirtua||[]).push([[283],{"./stories/comparisons/components.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>ItemWithRenderCount,g:()=>ScrollInput});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const ScrollInput=({count})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{style:{width:"100%"},children:["scroll position:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"range",defaultValue:"0",min:0,max:count,style:{width:"85%"},onChange:e=>{Array.from(document.querySelectorAll('*[style*="overflow"]')).filter((d=>/(auto|scroll)/.test(d.style.overflow)||/(auto|scroll)/.test(d.style.overflowY))).forEach((el=>{el.scrollTop=el.scrollHeight/count*Number(e.target.value)}))}})]}),heights=[20,40,80,77],ItemWithRenderCount=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({index:i},ref)=>{const count=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{count.current+=1})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{ref,style:{height:heights[i%heights.length],borderBottom:"solid 1px #ccc",background:"#fff",display:"flex",justifyContent:"stretch",padding:"4px 20px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{flex:1},children:i}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:["rendered: ",count.current]})]})}));try{ScrollInput.displayName="ScrollInput",ScrollInput.__docgenInfo={description:"",displayName:"ScrollInput",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/comparisons/components.tsx#ScrollInput"]={docgenInfo:ScrollInput.__docgenInfo,name:"ScrollInput",path:"stories/comparisons/components.tsx#ScrollInput"})}catch(__react_docgen_typescript_loader_error){}try{ItemWithRenderCount.displayName="ItemWithRenderCount",ItemWithRenderCount.__docgenInfo={description:"",displayName:"ItemWithRenderCount",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/comparisons/components.tsx#ItemWithRenderCount"]={docgenInfo:ItemWithRenderCount.__docgenInfo,name:"ItemWithRenderCount",path:"stories/comparisons/components.tsx#ItemWithRenderCount"})}catch(__react_docgen_typescript_loader_error){}},"./stories/comparisons/react-window.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DynamicHeight:()=>DynamicHeight,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-virtualized/dist/es/AutoSizer/index.js"),react_window__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-window/dist/index.esm.js"),_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/react/List.tsx"),_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/comparisons/components.tsx");const RWRow=({index:i,setHeight})=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{ref.current&&setHeight(i,ref.current.getBoundingClientRect().height)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__.K,{ref,index:i})},__WEBPACK_DEFAULT_EXPORT__={component:react_window__WEBPACK_IMPORTED_MODULE_4__.S_},DynamicHeight={render:()=>{const heightsCache=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>Array.from({length:1e4}).map((()=>50))),[]),rwListRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),getHeight=i=>heightsCache[i],setHeight=(index,height)=>{var _a;heightsCache[index]=height,null==(_a=rwListRef.current)||_a.resetAfterIndex(index)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{flex:1},children:"virtua"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{flex:1},children:"react-window"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__.g,{count:1e4})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.a,{style:{flex:1},children:Array.from({length:1e4}).map(((_,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__.K,{index:i},i)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{flex:1},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_2__.Z,{children:({width,height})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_window__WEBPACK_IMPORTED_MODULE_4__.S_,{ref:rwListRef,width,height,itemCount:1e4,itemSize:getHeight,children:({index:i,style})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RWRow,{index:i,setHeight})},i)})})})]})]})}};DynamicHeight.parameters={...DynamicHeight.parameters,docs:{...DynamicHeight.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const heightsCache = useMemo(() => Array.from({\n      length: ROW_COUNT\n    }).map(() => 50), []);\n    const rwListRef = useRef(null);\n    const getHeight = i => heightsCache[i];\n    const setHeight = (index, height) => {\n      var _a;\n      heightsCache[index] = height;\n      (_a = rwListRef.current) == null ? void 0 : _a.resetAfterIndex(index);\n    };\n    return /* @__PURE__ */jsxs("div", {\n      style: {\n        height: "100vh",\n        display: "flex",\n        flexDirection: "column"\n      },\n      children: [/* @__PURE__ */jsxs("div", {\n        style: {\n          display: "flex",\n          flexDirection: "row"\n        },\n        children: [/* @__PURE__ */jsx("div", {\n          style: {\n            flex: 1\n          },\n          children: "virtua"\n        }), /* @__PURE__ */jsx("div", {\n          style: {\n            flex: 1\n          },\n          children: "react-window"\n        })]\n      }), /* @__PURE__ */jsx("div", {\n        style: {\n          display: "flex",\n          flexDirection: "row"\n        },\n        children: /* @__PURE__ */jsx(ScrollInput, {\n          count: ROW_COUNT\n        })\n      }), /* @__PURE__ */jsxs("div", {\n        style: {\n          display: "flex",\n          flexDirection: "row",\n          flex: 1,\n          gap: 8\n        },\n        children: [/* @__PURE__ */jsx(List, {\n          style: {\n            flex: 1\n          },\n          children: Array.from({\n            length: ROW_COUNT\n          }).map((_, i) => /* @__PURE__ */jsx(ItemWithRenderCount, {\n            index: i\n          }, i))\n        }), /* @__PURE__ */jsx("div", {\n          style: {\n            flex: 1\n          },\n          children: /* @__PURE__ */jsx(AutoSizer, {\n            children: ({\n              width,\n              height\n            }) => /* @__PURE__ */jsx(RWList, {\n              ref: rwListRef,\n              width,\n              height,\n              itemCount: ROW_COUNT,\n              itemSize: getHeight,\n              children: ({\n                index: i,\n                style\n              }) => /* @__PURE__ */jsx("div", {\n                style,\n                children: /* @__PURE__ */jsx(RWRow, {\n                  index: i,\n                  setHeight\n                })\n              }, i)\n            })\n          })\n        })]\n      })]\n    });\n  }\n}',...DynamicHeight.parameters?.docs?.source}}}}}]);