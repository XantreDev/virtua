"use strict";(self.webpackChunkvirtua=self.webpackChunkvirtua||[]).push([[986],{"./stories/advanced/With react-select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/react/List.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_select__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-select/dist/react-select.esm.js"),_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@faker-js/faker/dist/esm/index.mjs"),react_merge_refs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-merge-refs/dist/index.mjs");const options=Array.from({length:1e3},((_,i)=>({value:String(i),label:_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.We.music.songName()}))),__WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_2__.a},MenuListContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),Window=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({children,style,scrollSize},ref)=>{const{maxHeight,innerProps,innerRef}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MenuListContext);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:(0,react_merge_refs__WEBPACK_IMPORTED_MODULE_3__.l)([ref,innerRef]),style:{...style,height:maxHeight,maxHeight},...innerProps},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"relative",height:scrollSize}},children))})),MenuList=({children,...rest})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuListContext.Provider,{value:rest},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,{element:Window},children)),Default={name:"With react-select",render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_4__.ZP,{options,components:{MenuList}})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  name: "With react-select",\n  render: () => {\n    return /* @__PURE__ */React.createElement(Select, {\n      options,\n      components: {\n        MenuList\n      }\n    });\n  }\n}',...Default.parameters?.docs?.source}}}}}]);