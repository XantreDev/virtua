"use strict";(self.webpackChunkvirtua=self.webpackChunkvirtua||[]).push([[890],{"./stories/advanced/With material-ui.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/List.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/ListItem/ListItem.js"),_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/ListItemButton/ListItemButton.js"),_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/ListItemIcon/ListItemIcon.js"),_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/ListItemText/ListItemText.js"),_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Checkbox/Checkbox.js");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_2__.a},Default={name:"With material-ui",render:()=>{const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__.Z,{sx:{width:"100%",height:500,maxWidth:360,bgcolor:"background.paper"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.a,{style:{width:"100%",height:"100%"},children:Array.from({length:1e3},((_,i)=>{const labelId=`checkbox-list-label-${i}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__.ZP,{component:"div",disablePadding:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__.Z,{dense:!0,onClick:()=>setChecked((prev=>({...prev,[i]:!prev[i]}))),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7__.Z,{edge:"start",checked:!!checked[i],tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":labelId}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__.Z,{id:labelId,primary:`Item ${i+1}`})]})},i)}))})})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  name: "With material-ui",\n  render: () => {\n    const [checked, setChecked] = useState({});\n    return /* @__PURE__ */jsx(Box, {\n      sx: {\n        width: "100%",\n        height: 500,\n        maxWidth: 360,\n        bgcolor: "background.paper"\n      },\n      children: /* @__PURE__ */jsx(List, {\n        style: {\n          width: "100%",\n          height: "100%"\n        },\n        children: Array.from({\n          length: 1e3\n        }, (_, i) => {\n          const labelId = `checkbox-list-label-${i}`;\n          return /* @__PURE__ */jsx(ListItem, {\n            component: "div",\n            disablePadding: true,\n            children: /* @__PURE__ */jsxs(ListItemButton, {\n              dense: true,\n              onClick: () => setChecked(prev => ({\n                ...prev,\n                [i]: !prev[i]\n              })),\n              children: [/* @__PURE__ */jsx(ListItemIcon, {\n                children: /* @__PURE__ */jsx(Checkbox, {\n                  edge: "start",\n                  checked: !!checked[i],\n                  tabIndex: -1,\n                  disableRipple: true,\n                  inputProps: {\n                    "aria-labelledby": labelId\n                  }\n                })\n              }), /* @__PURE__ */jsx(ListItemText, {\n                id: labelId,\n                primary: `Item ${i + 1}`\n              })]\n            })\n          }, i);\n        })\n      })\n    });\n  }\n}',...Default.parameters?.docs?.source}}}}}]);