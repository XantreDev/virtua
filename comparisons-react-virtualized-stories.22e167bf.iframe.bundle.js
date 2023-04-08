"use strict";(self.webpackChunkvirtua=self.webpackChunkvirtua||[]).push([[592],{"./stories/comparisons/components.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GS:()=>HeavyItem,K_:()=>ItemWithRenderCount,gU:()=>ScrollInput});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ScrollInput=({count})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{style:{width:"100%"}},"scroll position:",react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"range",defaultValue:"0",min:0,max:count,style:{width:"85%"},onChange:e=>{Array.from(document.querySelectorAll('*[style*="overflow"]')).filter((d=>/(auto|scroll)/.test(d.style.overflow)||/(auto|scroll)/.test(d.style.overflowY))).forEach((el=>{el.scrollTop=el.scrollHeight/count*Number(e.target.value)}))}})),heights=[20,40,80,77],ItemWithRenderCount=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({index:i},ref)=>{const count=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{count.current+=1})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref,style:{height:heights[i%heights.length],borderBottom:"solid 1px #ccc",background:"#fff",display:"flex",justifyContent:"stretch",padding:"4px 20px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{flex:1}},i),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"rendered: ",count.current))})),HeavyItem=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({index:i},ref)=>{let count=0;for(;count<=1e7;)count++;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref,style:{height:50,borderBottom:"solid 1px #ccc",background:"#fff"}},i)}));try{ScrollInput.displayName="ScrollInput",ScrollInput.__docgenInfo={description:"",displayName:"ScrollInput",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/comparisons/components.tsx#ScrollInput"]={docgenInfo:ScrollInput.__docgenInfo,name:"ScrollInput",path:"stories/comparisons/components.tsx#ScrollInput"})}catch(__react_docgen_typescript_loader_error){}try{ItemWithRenderCount.displayName="ItemWithRenderCount",ItemWithRenderCount.__docgenInfo={description:"",displayName:"ItemWithRenderCount",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/comparisons/components.tsx#ItemWithRenderCount"]={docgenInfo:ItemWithRenderCount.__docgenInfo,name:"ItemWithRenderCount",path:"stories/comparisons/components.tsx#ItemWithRenderCount"})}catch(__react_docgen_typescript_loader_error){}try{HeavyItem.displayName="HeavyItem",HeavyItem.__docgenInfo={description:"",displayName:"HeavyItem",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/comparisons/components.tsx#HeavyItem"]={docgenInfo:HeavyItem.__docgenInfo,name:"HeavyItem",path:"stories/comparisons/components.tsx#HeavyItem"})}catch(__react_docgen_typescript_loader_error){}},"./stories/comparisons/react-virtualized.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DynamicHeight:()=>DynamicHeight,HeavyComponent:()=>HeavyComponent,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-virtualized/dist/es/AutoSizer/index.js"),react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-virtualized/dist/es/CellMeasurer/index.js"),react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-virtualized/dist/es/List/index.js"),_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/react/List.tsx"),_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./stories/comparisons/components.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_3__.ZP},ReactVirtualizedList=({Component})=>{const virtualizedCache=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>new react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_2__.t1({fixedWidth:!0,defaultHeight:50})),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_1__.Z,null,(({width,height})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_3__.ZP,{deferredMeasurementCache:virtualizedCache,width,height,rowCount:1e4,rowHeight:virtualizedCache.rowHeight,rowRenderer:({index:i,key,style,parent})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_2__.Z8,{key,cache:virtualizedCache,columnIndex:0,rowIndex:i,parent},(({registerChild})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:registerChild,style},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{index:i}))))})))},DynamicHeight={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{height:"100vh",display:"flex",flexDirection:"column"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"row"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{flex:1}},"virtua"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{flex:1}},"react-virtualized")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"row"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_4__.gU,{count:1e4})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__.a,{style:{flex:1}},Array.from({length:1e4}).map(((_,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_4__.K_,{key:i,index:i})))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{flex:1}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReactVirtualizedList,{Component:_components__WEBPACK_IMPORTED_MODULE_4__.K_}))))},HeavyComponent={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{height:"100vh",display:"flex",flexDirection:"column"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"row"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{flex:1}},"virtua"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{flex:1}},"react-virtualized")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"row"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_4__.gU,{count:1e4})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_5__.a,{style:{flex:1}},Array.from({length:1e4}).map(((_,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_4__.GS,{key:i,index:i})))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{flex:1}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReactVirtualizedList,{Component:_components__WEBPACK_IMPORTED_MODULE_4__.GS}))))};DynamicHeight.parameters={...DynamicHeight.parameters,docs:{...DynamicHeight.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return /* @__PURE__ */React.createElement("div", {\n      style: {\n        height: "100vh",\n        display: "flex",\n        flexDirection: "column"\n      }\n    }, /* @__PURE__ */React.createElement("div", {\n      style: {\n        display: "flex",\n        flexDirection: "row"\n      }\n    }, /* @__PURE__ */React.createElement("div", {\n      style: {\n        flex: 1\n      }\n    }, "virtua"), /* @__PURE__ */React.createElement("div", {\n      style: {\n        flex: 1\n      }\n    }, "react-virtualized")), /* @__PURE__ */React.createElement("div", {\n      style: {\n        display: "flex",\n        flexDirection: "row"\n      }\n    }, /* @__PURE__ */React.createElement(ScrollInput, {\n      count: ROW_COUNT\n    })), /* @__PURE__ */React.createElement("div", {\n      style: {\n        display: "flex",\n        flexDirection: "row",\n        flex: 1,\n        gap: 8\n      }\n    }, /* @__PURE__ */React.createElement(List, {\n      style: {\n        flex: 1\n      }\n    }, Array.from({\n      length: ROW_COUNT\n    }).map((_, i) => /* @__PURE__ */React.createElement(ItemWithRenderCount, {\n      key: i,\n      index: i\n    }))), /* @__PURE__ */React.createElement("div", {\n      style: {\n        flex: 1\n      }\n    }, /* @__PURE__ */React.createElement(ReactVirtualizedList, {\n      Component: ItemWithRenderCount\n    }))));\n  }\n}',...DynamicHeight.parameters?.docs?.source}}},HeavyComponent.parameters={...HeavyComponent.parameters,docs:{...HeavyComponent.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return /* @__PURE__ */React.createElement("div", {\n      style: {\n        height: "100vh",\n        display: "flex",\n        flexDirection: "column"\n      }\n    }, /* @__PURE__ */React.createElement("div", {\n      style: {\n        display: "flex",\n        flexDirection: "row"\n      }\n    }, /* @__PURE__ */React.createElement("div", {\n      style: {\n        flex: 1\n      }\n    }, "virtua"), /* @__PURE__ */React.createElement("div", {\n      style: {\n        flex: 1\n      }\n    }, "react-virtualized")), /* @__PURE__ */React.createElement("div", {\n      style: {\n        display: "flex",\n        flexDirection: "row"\n      }\n    }, /* @__PURE__ */React.createElement(ScrollInput, {\n      count: ROW_COUNT\n    })), /* @__PURE__ */React.createElement("div", {\n      style: {\n        display: "flex",\n        flexDirection: "row",\n        flex: 1,\n        gap: 8\n      }\n    }, /* @__PURE__ */React.createElement(List, {\n      style: {\n        flex: 1\n      }\n    }, Array.from({\n      length: ROW_COUNT\n    }).map((_, i) => /* @__PURE__ */React.createElement(HeavyItem, {\n      key: i,\n      index: i\n    }))), /* @__PURE__ */React.createElement("div", {\n      style: {\n        flex: 1\n      }\n    }, /* @__PURE__ */React.createElement(ReactVirtualizedList, {\n      Component: HeavyItem\n    }))));\n  }\n}',...HeavyComponent.parameters?.docs?.source}}}}}]);