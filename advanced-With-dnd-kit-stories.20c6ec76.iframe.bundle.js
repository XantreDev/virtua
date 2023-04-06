"use strict";(self.webpackChunkvirtua=self.webpackChunkvirtua||[]).push([[294],{"./stories/advanced/With dnd-kit.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/react/List.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@dnd-kit/core/dist/core.esm.js"),_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@dnd-kit/sortable/dist/sortable.esm.js"),_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_5__.a},Item=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({id,style,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{...props,style:{height:50,borderBottom:"solid 1px #ccc",background:"#fff",...style},ref,children:id}))),SortableItem=props=>{const{attributes,listeners,setNodeRef,transform,transition,isDragging}=(0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.nB)({id:props.id}),style={transform:_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_4__.ux.Transform.toString(transform),transition,cursor:"grab",visibility:isDragging?"hidden":void 0};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item,{ref:setNodeRef,id:props.id,style,...attributes,...listeners})},Default={name:"With dnd-kit",render:()=>{const[items,setItems]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((()=>Array.from({length:1e3},((_,i)=>i+1)))),[activeId,setActiveId]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),sensors=(0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.Dy)((0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.VT)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.we),(0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.VT)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.Lg,{coordinateGetter:_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.is}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.LB,{sensors,collisionDetection:_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.pE,onDragStart:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event=>{setActiveId(event.active.id)}),[]),onDragEnd:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event=>{const{active,over}=event;active.id!==over.id&&setItems((items2=>{const oldIndex=items2.indexOf(active.id),newIndex=items2.indexOf(over.id);return(0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.Rp)(items2,oldIndex,newIndex)})),setActiveId(null)}),[]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.Fo,{items,strategy:_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.qw,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.a,{style:{width:400,height:600},children:items.map((id=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SortableItem,{id},id)))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.y9,{children:null!=activeId?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item,{id:activeId}):null})]})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  name: "With dnd-kit",\n  render: () => {\n    const [items, setItems] = useState(() => Array.from({\n      length: 1e3\n    }, (_, i) => i + 1));\n    const [activeId, setActiveId] = useState(null);\n    const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, {\n      coordinateGetter: sortableKeyboardCoordinates\n    }));\n    return /* @__PURE__ */jsxs(DndContext, {\n      sensors,\n      collisionDetection: closestCenter,\n      onDragStart: useCallback(event => {\n        setActiveId(event.active.id);\n      }, []),\n      onDragEnd: useCallback(event => {\n        const {\n          active,\n          over\n        } = event;\n        if (active.id !== over.id) {\n          setItems(items2 => {\n            const oldIndex = items2.indexOf(active.id);\n            const newIndex = items2.indexOf(over.id);\n            return arrayMove(items2, oldIndex, newIndex);\n          });\n        }\n        setActiveId(null);\n      }, []),\n      children: [/* @__PURE__ */jsx(SortableContext, {\n        items,\n        strategy: verticalListSortingStrategy,\n        children: /* @__PURE__ */jsx(List, {\n          style: {\n            width: 400,\n            height: 600\n          },\n          children: items.map(id => /* @__PURE__ */jsx(SortableItem, {\n            id\n          }, id))\n        })\n      }), /* @__PURE__ */jsx(DragOverlay, {\n        children: activeId != null ? /* @__PURE__ */jsx(Item, {\n          id: activeId\n        }) : null\n      })]\n    });\n  }\n}',...Default.parameters?.docs?.source}}}}}]);