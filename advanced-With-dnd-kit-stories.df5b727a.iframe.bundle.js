"use strict";(self.webpackChunkvirtua=self.webpackChunkvirtua||[]).push([[294],{"./src/react/List.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>List});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");const min=Math.min,max=Math.max,abs=Math.abs,range=(length,cb)=>Array.from({length},((_,i)=>cb(i))),getItemSize=(cache,index)=>{const size=cache._sizes[index];return-1===size?cache._defaultItemSize:size},findIndex=(cache,i,distance)=>{let sum=0;if(distance>=0)for(;i<cache._length-1;){const h=getItemSize(cache,i);if(sum+=h,i++,sum>=distance){sum-h/2>=distance&&i--;break}}else for(;i>0;){i--;const h=getItemSize(cache,i);if(sum-=h,sum<=distance){sum+h/2<distance&&i++;break}}return min(max(i,0),cache._length-1)},findEndIndex=findIndex,computeStartOffset=(cache,index)=>{if(!cache._length)return 0;if(cache._measuredOffsetIndex>=index)return cache._offsets[index];let top=cache._offsets[cache._measuredOffsetIndex];for(let i=cache._measuredOffsetIndex;i<=index&&(cache._offsets[i]=top,i!==index);i++)top+=getItemSize(cache,i);return cache._measuredOffsetIndex=index,top},resetCache=(length,itemSize,cache)=>{var _a;return{_defaultItemSize:itemSize,_length:length,_measuredOffsetIndex:null!=(_a=cache&&min(cache._measuredOffsetIndex,length-1))?_a:0,_sizes:range(length,(i=>{var _a2;return null!=(_a2=cache&&cache._sizes[i])?_a2:-1})),_offsets:range(length,(i=>{var _a2;return 0===i?0:null!=(_a2=cache&&cache._offsets[i])?_a2:-1}))}},mutate=(state,action,itemSize)=>{switch(action._type){case 0:return state._cache._length!==action._length&&(state._cache=resetCache(action._length,itemSize,state._cache),!0);case 1:{const updated=action._entries.filter((([index,size])=>state._cache._sizes[index]!==size));if(!updated.length)return!1;const jump=[];return updated.forEach((([index,size])=>{jump.push([index,size-getItemSize(state._cache,index)]),((cache,index,size)=>{cache._sizes[index]=size,cache._measuredOffsetIndex=min(index,cache._measuredOffsetIndex)})(state._cache,index,size)})),state._jump=jump,!0}case 2:return(state._viewportWidth!==action._width||state._viewportHeight!==action._height)&&(state._viewportWidth=action._width,state._viewportHeight=action._height,!0);case 3:{const prevStartIndex=state._startIndex,prevOffset=computeStartOffset(state._cache,prevStartIndex);return prevOffset!==action._offset&&(state._startIndex=((cache,offset,prevStartIndex,prevOffset)=>findIndex(cache,prevStartIndex,offset-prevOffset))(state._cache,action._offset,prevStartIndex,prevOffset))!==prevStartIndex}}},createVirtualStore=(itemCount,itemSize,isHorizontal)=>{const subscribers=new Set,state={_startIndex:0,_viewportWidth:0,_viewportHeight:0,_cache:resetCache(itemCount,itemSize),_jump:[]},getViewportSize=()=>isHorizontal?state._viewportWidth:state._viewportHeight;let scrollToQueue;return{_getStartIndex:()=>state._startIndex,_getEndIndex:()=>findEndIndex(state._cache,state._startIndex,getViewportSize()),_isUnmeasuredItem:index=>-1===state._cache._sizes[index],_hasUnmeasuredItemsInRange:startIndex=>((cache,startIndex,endIndex)=>{for(let i=startIndex;i<=endIndex;i++)if(-1===cache._sizes[i])return!0;return!1})(state._cache,startIndex,findEndIndex(state._cache,startIndex,getViewportSize())),_getItemOffset:index=>computeStartOffset(state._cache,index),_getViewportSize:()=>getViewportSize(),_getScrollSize:()=>(cache=>{if(!cache._length)return 0;const lastIndex=cache._length-1;if(cache._measuredOffsetIndex>=lastIndex)return cache._offsets[lastIndex]+getItemSize(cache,lastIndex);let top=cache._offsets[cache._measuredOffsetIndex];for(let i=cache._measuredOffsetIndex;i<=lastIndex;i++)cache._offsets[i]=top,top+=getItemSize(cache,i);return cache._measuredOffsetIndex=lastIndex,top})(state._cache),_getItemCount:()=>state._cache._length,_getJump:()=>state._jump,_waitForScrollDestinationItemsMeasured:()=>(scrollToQueue&&scrollToQueue[1](),new Promise(((resolve,reject)=>{scrollToQueue=[()=>{Promise.resolve().then((()=>{resolve(),scrollToQueue=void 0}))},reject]}))),_subscribe:cb=>(subscribers.add(cb),()=>{subscribers.delete(cb)}),_update(action){mutate(state,action,itemSize)&&(subscribers.forEach((cb=>{cb()})),scrollToQueue&&1===action._type&&scrollToQueue[0]())}}},useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;var shim=__webpack_require__("./node_modules/use-sync-external-store/shim/index.js");const useSyncExternalStore=(subscibe,getSnapShot)=>(0,shim.useSyncExternalStore)(subscibe,getSnapShot,getSnapShot),createScroller=(store,isHorizontal,isRtl)=>{let isNegativeOffset,rootElement,_ro,prevOffset=-1,scrollDirection=0,resized=!1;const scrollToKey=isHorizontal?"scrollLeft":"scrollTop",mountedIndexes=new WeakMap,getResizeObserver=()=>_ro||(_ro=new ResizeObserver((entries=>{const resizes=[];for(const entry of entries)if(entry.target===rootElement)store._update({_type:2,_width:entry.contentRect.width,_height:entry.contentRect.height});else{const index=mountedIndexes.get(entry.target);null!=index&&resizes.push([index,entry.contentRect[isHorizontal?"width":"height"]])}resizes.length&&(store._update({_type:1,_entries:resizes}),resized=!0)})));return{_initRoot(root){rootElement=root;const ro=getResizeObserver(),syncViewportToScrollPosition=()=>{let offset=root[scrollToKey];isRtl&&(offset=abs(offset)),prevOffset!==offset&&(0!==scrollDirection&&resized?resized=!1:3!==scrollDirection&&(scrollDirection=prevOffset>offset?2:1),store._update({_type:3,_offset:prevOffset=offset}))},onScrollStopped=((fn,ms)=>{let id=null;const cancel=()=>{null!=id&&clearTimeout(id)},debouncedFn=()=>{cancel(),id=setTimeout((()=>{id=null,fn()}),ms)};return debouncedFn._cancel=cancel,debouncedFn})((()=>{syncViewportToScrollPosition(),scrollDirection=0}),300),onScroll=()=>{syncViewportToScrollPosition(),onScrollStopped()};return ro.observe(root),root.addEventListener("scroll",onScroll),()=>{ro.disconnect(),root.removeEventListener("scroll",onScroll),onScrollStopped._cancel()}},_initItem(el,i){const ro=getResizeObserver();return mountedIndexes.set(el,i),ro.observe(el),()=>{mountedIndexes.delete(el),ro.unobserve(el)}},_getScrollDirection:()=>scrollDirection,_updateScrollPosition(offset,diff){if(rootElement){if(isRtl){if(null==isNegativeOffset){const prev=rootElement[scrollToKey];rootElement[scrollToKey]=1,isNegativeOffset=0===rootElement[scrollToKey],rootElement[scrollToKey]=prev}isNegativeOffset&&(offset*=-1)}diff?rootElement[scrollToKey]+=offset:(rootElement[scrollToKey]=offset,scrollDirection=3)}}}},Item=(0,react.memo)((({_children:children,_handle:handle,_store:store,_index:index,_element:Element,_isHorizontal:isHorizontal,_isRtl:isRtl})=>{const ref=(0,react.useRef)(null),offset=useSyncExternalStore(store._subscribe,(()=>store._getItemOffset(index))),hide=useSyncExternalStore(store._subscribe,(()=>store._isUnmeasuredItem(index)));return useIsomorphicLayoutEffect((()=>handle._initItem(ref.current,index)),[index]),(0,jsx_runtime.jsx)(Element,{ref,style:(0,react.useMemo)((()=>{const style={margin:"0",padding:"0",position:"absolute",[isHorizontal?"height":"width"]:"100%",[isHorizontal?"top":isRtl?"right":"left"]:0,[isHorizontal?isRtl?"right":"left":"top"]:offset};return isHorizontal&&(style.display="flex"),hide&&(style.visibility="hidden"),style}),[offset,isHorizontal,isRtl,hide]),children})})),isInvalidElement=e=>null==e||"boolean"==typeof e,Window=({_children:children,_ref:ref,_element:Element,_style:style,_isHorizontal:isHorizontal})=>(0,jsx_runtime.jsx)(Element,{ref,style:(0,react.useMemo)((()=>({overflow:isHorizontal?"auto hidden":"hidden auto",position:"relative",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...style})),[isHorizontal,style]),children}),Inner=({_children:children,_store:store,_element:Element,_style:style,_isHorizontal:isHorizontal,_isRtl:isRtl})=>{const scrollSize=useSyncExternalStore(store._subscribe,store._getScrollSize),viewportSize=useSyncExternalStore(store._subscribe,store._getViewportSize);return(0,jsx_runtime.jsx)(Element,{style:(0,react.useMemo)((()=>{const clampedScrollSize=scrollSize>=viewportSize?scrollSize:viewportSize,width=isHorizontal?clampedScrollSize:"100%",height=isHorizontal?"100%":clampedScrollSize;return{position:"absolute",top:0,[isRtl?"right":"left"]:0,width,height,minWidth:width,minHeight:height,...style}}),[scrollSize,viewportSize,style,isHorizontal,isRtl]),children})},List=(0,react.forwardRef)((({children,itemSize=40,overscan=6,horizontal:isHorizontal,rtl:isRtl,endThreshold=0,style:styleProp,innerStyle:innerStyleProp,element="div",innerElement="div",itemElement="div",onEndReached},ref)=>{const rawCount=(0,react.useMemo)((()=>{let i=0;return react.Children.forEach(children,(e=>{isInvalidElement(e)||i++})),i}),[children]),storeRef=(0,react.useRef)(),store=storeRef.current||(storeRef.current=createVirtualStore(rawCount,itemSize,isHorizontal)),startIndex=useSyncExternalStore(store._subscribe,store._getStartIndex),endIndex=useSyncExternalStore(store._subscribe,store._getEndIndex),jump=useSyncExternalStore(store._subscribe,store._getJump),scrollRef=(0,react.useRef)(null),onEndReachedCalledIndex=(0,react.useRef)(-1),handleRef=(0,react.useRef)(),handle=handleRef.current||(handleRef.current=createScroller(store,isHorizontal,isRtl)),count=min(rawCount,store._getItemCount()),startIndexWithMargin=max(startIndex-overscan,0),endIndexWithMargin=min(endIndex+overscan,count-1);useIsomorphicLayoutEffect((()=>{store._update({_type:0,_length:rawCount})}),[rawCount]),useIsomorphicLayoutEffect((()=>handle._initRoot(scrollRef.current)),[]),useIsomorphicLayoutEffect((()=>{if(!jump.length)return;const scrollDirection=handle._getScrollDirection();if(2===scrollDirection){const diff=jump.reduce(((acc,[,j])=>acc+j),0);diff&&handle._updateScrollPosition(diff,!0)}else if(3===scrollDirection){const isStartInView=0===startIndex,isEndInView=endIndex-(count-1)==0,diff=jump.reduce(((acc,[index,j])=>(index<startIndex?isStartInView||(acc+=j):!isStartInView&&isEndInView&&(acc+=j),acc)),0);diff&&handle._updateScrollPosition(diff,!0)}}),[jump]),(0,react.useEffect)((()=>{if(!onEndReached)return;onEndReachedCalledIndex.current>count&&(onEndReachedCalledIndex.current=-1);count-1-endIndex<=endThreshold&&onEndReachedCalledIndex.current<count&&(onEndReachedCalledIndex.current=count,onEndReached())}),[endIndex]),(0,react.useImperativeHandle)(ref,(()=>({scrollToIndex:async index=>{const el=scrollRef.current;if(!el)return;index=max(min(index,count-1),0);const getOffset=()=>{let offset=store._getItemOffset(index);const scrollSize=isHorizontal?el.scrollWidth:el.scrollHeight,viewportSize=store._getViewportSize();return scrollSize-(offset+viewportSize)<=0&&(offset=scrollSize-viewportSize),offset};if(store._hasUnmeasuredItemsInRange(index)){do{store._update({_type:3,_offset:getOffset()});try{await store._waitForScrollDestinationItemsMeasured()}catch(e){return}}while(store._hasUnmeasuredItemsInRange(index));handle._updateScrollPosition(getOffset())}else{const offset=getOffset();handle._updateScrollPosition(offset),store._update({_type:3,_offset:offset})}}})),[count]);const items=(0,react.useMemo)((()=>{let i=-1;const elements=[];return react.Children.forEach(children,(e=>{isInvalidElement(e)||(i++,i<startIndexWithMargin||i>endIndexWithMargin||elements.push((0,jsx_runtime.jsx)(Item,{_handle:handle,_store:store,_index:i,_element:itemElement,_isHorizontal:isHorizontal,_isRtl:isRtl,_children:e},(null==e?void 0:e.key)||i)))})),elements}),[children,startIndexWithMargin,endIndexWithMargin]);return(0,jsx_runtime.jsx)(Window,{_ref:scrollRef,_isHorizontal:isHorizontal,_element:element,_style:styleProp,_children:(0,jsx_runtime.jsx)(Inner,{_store:store,_element:innerElement,_style:innerStyleProp,_isHorizontal:isHorizontal,_isRtl:isRtl,_children:items})})}));try{List.displayName="List",List.__docgenInfo={description:"Virtualized list component. See {@link ListProps} and {@link ListHandle}.",displayName:"List",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},itemSize:{defaultValue:{value:"40"},description:"Item size hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.\n@defaultValue 40",name:"itemSize",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"6"},description:"Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.\n@defaultValue 6",name:"overscan",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},rtl:{defaultValue:null,description:"You have to set true if you use this component under `direction: rtl` style.",name:"rtl",required:!1,type:{name:"boolean"}},endThreshold:{defaultValue:{value:"0"},description:"Number of items to be the margin from the end of the scroll. See also {@link onEndReached}.\n@defaultValue 0",name:"endThreshold",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"Inline style prop to override style of scrollable element.",name:"style",required:!1,type:{name:"CSSProperties"}},innerStyle:{defaultValue:null,description:"Inline style prop to override style of inner element.",name:"innerStyle",required:!1,type:{name:"CSSProperties"}},element:{defaultValue:{value:"div"},description:'Customized element type for scrollable element.\n@defaultValue "div"',name:"element",required:!1,type:{name:"CustomElementType"}},innerElement:{defaultValue:{value:"div"},description:'Customized element type for inner element.\n@defaultValue "div"',name:"innerElement",required:!1,type:{name:"CustomElementType"}},itemElement:{defaultValue:{value:"div"},description:'Customized element type for item element.\n@defaultValue "div"',name:"itemElement",required:!1,type:{name:"CustomElementType"}},onEndReached:{defaultValue:null,description:"Callback invoked when scrolling reached to the end. The margin from the end is specified by {@link endThreshold}.",name:"onEndReached",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react/List.tsx#List"]={docgenInfo:List.__docgenInfo,name:"List",path:"src/react/List.tsx#List"})}catch(__react_docgen_typescript_loader_error){}},"./stories/advanced/With dnd-kit.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/react/List.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@dnd-kit/core/dist/core.esm.js"),_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@dnd-kit/sortable/dist/sortable.esm.js"),_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_5__.a},Item=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({id,style,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{...props,style:{height:50,borderBottom:"solid 1px #ccc",background:"#fff",...style},ref,children:id}))),SortableItem=props=>{const{attributes,listeners,setNodeRef,transform,transition,isDragging}=(0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.nB)({id:props.id}),style={transform:_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_4__.ux.Transform.toString(transform),transition,cursor:"grab",visibility:isDragging?"hidden":void 0};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item,{ref:setNodeRef,id:props.id,style,...attributes,...listeners})},Default={name:"With dnd-kit",render:()=>{const[items,setItems]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((()=>Array.from({length:1e3},((_,i)=>i+1)))),[activeId,setActiveId]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),sensors=(0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.Dy)((0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.VT)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.we),(0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.VT)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.Lg,{coordinateGetter:_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.is}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.LB,{sensors,collisionDetection:_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.pE,onDragStart:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event=>{setActiveId(event.active.id)}),[]),onDragEnd:(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event=>{const{active,over}=event;active.id!==over.id&&setItems((items2=>{const oldIndex=items2.indexOf(active.id),newIndex=items2.indexOf(over.id);return(0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.Rp)(items2,oldIndex,newIndex)})),setActiveId(null)}),[]),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.Fo,{items,strategy:_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.qw,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.a,{style:{width:400,height:600},children:items.map((id=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SortableItem,{id},id)))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.y9,{children:null!=activeId?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Item,{id:activeId}):null})]})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  name: "With dnd-kit",\n  render: () => {\n    const [items, setItems] = useState(() => Array.from({\n      length: 1e3\n    }, (_, i) => i + 1));\n    const [activeId, setActiveId] = useState(null);\n    const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor, {\n      coordinateGetter: sortableKeyboardCoordinates\n    }));\n    return /* @__PURE__ */jsxs(DndContext, {\n      sensors,\n      collisionDetection: closestCenter,\n      onDragStart: useCallback(event => {\n        setActiveId(event.active.id);\n      }, []),\n      onDragEnd: useCallback(event => {\n        const {\n          active,\n          over\n        } = event;\n        if (active.id !== over.id) {\n          setItems(items2 => {\n            const oldIndex = items2.indexOf(active.id);\n            const newIndex = items2.indexOf(over.id);\n            return arrayMove(items2, oldIndex, newIndex);\n          });\n        }\n        setActiveId(null);\n      }, []),\n      children: [/* @__PURE__ */jsx(SortableContext, {\n        items,\n        strategy: verticalListSortingStrategy,\n        children: /* @__PURE__ */jsx(List, {\n          style: {\n            width: 400,\n            height: 600\n          },\n          children: items.map(id => /* @__PURE__ */jsx(SortableItem, {\n            id\n          }, id))\n        })\n      }), /* @__PURE__ */jsx(DragOverlay, {\n        children: activeId != null ? /* @__PURE__ */jsx(Item, {\n          id: activeId\n        }) : null\n      })]\n    });\n  }\n}',...Default.parameters?.docs?.source}}}}}]);