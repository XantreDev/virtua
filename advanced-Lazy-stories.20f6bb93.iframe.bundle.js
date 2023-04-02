/*! For license information please see advanced-Lazy-stories.20f6bb93.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkvirtua=self.webpackChunkvirtua||[]).push([[921],{"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var e=__webpack_require__("./node_modules/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"./node_modules/use-sync-external-store/shim/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")},"./src/react/List.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>List});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");const min=Math.min,max=Math.max,abs=Math.abs,range=(length,cb)=>Array.from({length},((_,i)=>cb(i))),getItemSize=(cache,index)=>{const size=cache._sizes[index];return-1===size?cache._defaultItemSize:size},findIndex=(cache,i,distance)=>{let sum=0;if(distance>=0)for(;i<cache._length-1;){const h=getItemSize(cache,i);if(sum+=h,i++,sum>=distance){sum-h/2>=distance&&i--;break}}else for(;i>0;){i--;const h=getItemSize(cache,i);if(sum-=h,sum<=distance){sum+h/2<distance&&i++;break}}return min(max(i,0),cache._length-1)},findEndIndex=findIndex,computeStartOffset=(cache,index)=>{if(!cache._length)return 0;if(cache._measuredOffsetIndex>=index)return cache._offsets[index];let top=cache._offsets[cache._measuredOffsetIndex];for(let i=cache._measuredOffsetIndex;i<=index&&(cache._offsets[i]=top,i!==index);i++)top+=getItemSize(cache,i);return cache._measuredOffsetIndex=index,top},resetCache=(length,itemSize,cache)=>{var _a;return{_defaultItemSize:itemSize,_length:length,_measuredOffsetIndex:null!=(_a=cache&&min(cache._measuredOffsetIndex,length-1))?_a:0,_sizes:range(length,(i=>{var _a2;return null!=(_a2=cache&&cache._sizes[i])?_a2:-1})),_offsets:range(length,(i=>{var _a2;return 0===i?0:null!=(_a2=cache&&cache._offsets[i])?_a2:-1}))}},mutate=(state,action,itemSize)=>{switch(action._type){case 0:return state._cache._length!==action._length&&(state._cache=resetCache(action._length,itemSize,state._cache),!0);case 1:{const updated=action._entries.filter((([index,size])=>state._cache._sizes[index]!==size));if(!updated.length)return!1;const jump=[];return updated.forEach((([index,size])=>{jump.push([index,size-getItemSize(state._cache,index)]),((cache,index,size)=>{cache._sizes[index]=size,cache._measuredOffsetIndex=min(index,cache._measuredOffsetIndex)})(state._cache,index,size)})),state._jump=jump,!0}case 2:return(state._viewportWidth!==action._width||state._viewportHeight!==action._height)&&(state._viewportWidth=action._width,state._viewportHeight=action._height,!0);case 3:{const prevStartIndex=state._startIndex,prevOffset=computeStartOffset(state._cache,prevStartIndex);return prevOffset!==action._offset&&(state._startIndex=((cache,offset,prevStartIndex,prevOffset)=>findIndex(cache,prevStartIndex,offset-prevOffset))(state._cache,action._offset,prevStartIndex,prevOffset))!==prevStartIndex}}},createVirtualStore=(itemCount,itemSize,isHorizontal)=>{const subscribers=new Set,state={_startIndex:0,_viewportWidth:0,_viewportHeight:0,_cache:resetCache(itemCount,itemSize),_jump:[]},getViewportSize=()=>isHorizontal?state._viewportWidth:state._viewportHeight;let scrollToQueue;return{_getStartIndex:()=>state._startIndex,_getEndIndex:()=>findEndIndex(state._cache,state._startIndex,getViewportSize()),_isUnmeasuredItem:index=>-1===state._cache._sizes[index],_hasUnmeasuredItemsInRange:startIndex=>((cache,startIndex,endIndex)=>{for(let i=startIndex;i<=endIndex;i++)if(-1===cache._sizes[i])return!0;return!1})(state._cache,startIndex,findEndIndex(state._cache,startIndex,getViewportSize())),_getItemOffset:index=>computeStartOffset(state._cache,index),_getViewportSize:()=>getViewportSize(),_getScrollSize:()=>(cache=>{if(!cache._length)return 0;const lastIndex=cache._length-1;if(cache._measuredOffsetIndex>=lastIndex)return cache._offsets[lastIndex]+getItemSize(cache,lastIndex);let top=cache._offsets[cache._measuredOffsetIndex];for(let i=cache._measuredOffsetIndex;i<=lastIndex;i++)cache._offsets[i]=top,top+=getItemSize(cache,i);return cache._measuredOffsetIndex=lastIndex,top})(state._cache),_getItemCount:()=>state._cache._length,_getJump:()=>state._jump,_waitForScrollDestinationItemsMeasured:()=>(scrollToQueue&&scrollToQueue[1](),new Promise(((resolve,reject)=>{scrollToQueue=[()=>{Promise.resolve().then((()=>{resolve(),scrollToQueue=void 0}))},reject]}))),_subscribe:cb=>(subscribers.add(cb),()=>{subscribers.delete(cb)}),_update(action){mutate(state,action,itemSize)&&(subscribers.forEach((cb=>{cb()})),scrollToQueue&&1===action._type&&scrollToQueue[0]())}}},useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;var shim=__webpack_require__("./node_modules/use-sync-external-store/shim/index.js");const useSyncExternalStore=(subscibe,getSnapShot)=>(0,shim.useSyncExternalStore)(subscibe,getSnapShot,getSnapShot),Item=(0,react.memo)((({_children:children,_handle:handle,_store:store,_index:index,_element:Element,_isHorizontal:isHorizontal,_isRtl:isRtl})=>{const ref=(0,react.useRef)(null),offset=useSyncExternalStore(store._subscribe,(()=>store._getItemOffset(index))),hide=useSyncExternalStore(store._subscribe,(()=>store._isUnmeasuredItem(index)));return useIsomorphicLayoutEffect((()=>handle._initItem(ref.current,index)),[index]),(0,jsx_runtime.jsx)(Element,{ref,style:(0,react.useMemo)((()=>{const style={margin:"0",padding:"0",position:"absolute",[isHorizontal?"height":"width"]:"100%",[isHorizontal?"top":isRtl?"right":"left"]:0,[isHorizontal?isRtl?"right":"left":"top"]:offset};return isHorizontal&&(style.display="flex"),hide&&(style.visibility="hidden"),style}),[offset,isHorizontal,isRtl,hide]),children})})),isInvalidElement=e=>null==e||"boolean"==typeof e,Window=({_children:children,_ref:ref,_element:Element,_style:style,_isHorizontal:isHorizontal})=>(0,jsx_runtime.jsx)(Element,{ref,style:(0,react.useMemo)((()=>({overflow:isHorizontal?"auto hidden":"hidden auto",position:"relative",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...style})),[isHorizontal,style]),children}),Inner=({_children:children,_store:store,_element:Element,_style:style,_isHorizontal:isHorizontal,_isRtl:isRtl})=>{const scrollSize=useSyncExternalStore(store._subscribe,store._getScrollSize),viewportSize=useSyncExternalStore(store._subscribe,store._getViewportSize);return(0,jsx_runtime.jsx)(Element,{style:(0,react.useMemo)((()=>{const clampedScrollSize=scrollSize>=viewportSize?scrollSize:viewportSize,width=isHorizontal?clampedScrollSize:"100%",height=isHorizontal?"100%":clampedScrollSize;return{position:"absolute",top:0,[isRtl?"right":"left"]:0,width,height,minWidth:width,minHeight:height,...style}}),[scrollSize,viewportSize,style,isHorizontal,isRtl]),children})},List=(0,react.forwardRef)((({children,itemSize=40,overscan=6,horizontal:isHorizontal,rtl:isRtl,endThreshold=0,style:styleProp,innerStyle:innerStyleProp,element="div",innerElement="div",itemElement="div",onEndReached},ref)=>{const rawCount=(0,react.useMemo)((()=>{let i=0;return react.Children.forEach(children,(e=>{isInvalidElement(e)||i++})),i}),[children]),storeRef=(0,react.useRef)(),store=storeRef.current||(storeRef.current=createVirtualStore(rawCount,itemSize,isHorizontal)),startIndex=useSyncExternalStore(store._subscribe,store._getStartIndex),endIndex=useSyncExternalStore(store._subscribe,store._getEndIndex),jump=useSyncExternalStore(store._subscribe,store._getJump),scrollRef=(0,react.useRef)(null),onEndReachedCalledIndex=(0,react.useRef)(-1),handleRef=(0,react.useRef)(),handle=handleRef.current||(handleRef.current=(()=>{if("undefined"==typeof ResizeObserver)return{};let isNegativeOffset,rootElement,prevOffset=-1,scrollDirection=0,resized=!1;const scrollToKey=isHorizontal?"scrollLeft":"scrollTop",mountedIndexes=new WeakMap,ro=new ResizeObserver((entries=>{const resizes=[];for(const entry of entries)if(entry.target===rootElement)store._update({_type:2,_width:entry.contentRect.width,_height:entry.contentRect.height});else{const index=mountedIndexes.get(entry.target);null!=index&&resizes.push([index,entry.contentRect[isHorizontal?"width":"height"]])}resizes.length&&(store._update({_type:1,_entries:resizes}),resized=!0)}));return{_initRoot(root){rootElement=root;const syncViewportToScrollPosition=()=>{let offset=root[scrollToKey];isRtl&&(offset=abs(offset)),prevOffset!==offset&&(0!==scrollDirection&&resized?resized=!1:3!==scrollDirection&&(scrollDirection=prevOffset>offset?2:1),store._update({_type:3,_offset:prevOffset=offset}))},onScrollStopped=((fn,ms)=>{let id=null;const cancel=()=>{null!=id&&clearTimeout(id)},debouncedFn=()=>{cancel(),id=setTimeout((()=>{id=null,fn()}),ms)};return debouncedFn._cancel=cancel,debouncedFn})((()=>{syncViewportToScrollPosition(),scrollDirection=0}),300),onScroll=()=>{syncViewportToScrollPosition(),onScrollStopped()};return ro.observe(root),root.addEventListener("scroll",onScroll),()=>{ro.disconnect(),root.removeEventListener("scroll",onScroll),onScrollStopped._cancel()}},_initItem:(el,i)=>(mountedIndexes.set(el,i),ro.observe(el),()=>{mountedIndexes.delete(el),ro.unobserve(el)}),_getScrollDirection:()=>scrollDirection,_updateScrollPosition(offset,diff){if(rootElement){if(isRtl){if(null==isNegativeOffset){const prev=rootElement[scrollToKey];rootElement[scrollToKey]=1,isNegativeOffset=0===rootElement[scrollToKey],rootElement[scrollToKey]=prev}isNegativeOffset&&(offset*=-1)}diff?rootElement[scrollToKey]+=offset:(rootElement[scrollToKey]=offset,scrollDirection=3)}}}})()),count=min(rawCount,store._getItemCount()),startIndexWithMargin=max(startIndex-overscan,0),endIndexWithMargin=min(endIndex+overscan,count-1);useIsomorphicLayoutEffect((()=>{store._update({_type:0,_length:rawCount})}),[rawCount]),useIsomorphicLayoutEffect((()=>handle._initRoot(scrollRef.current)),[]),useIsomorphicLayoutEffect((()=>{if(!jump.length)return;const scrollDirection=handle._getScrollDirection();if(2===scrollDirection){const diff=jump.reduce(((acc,[,j])=>acc+j),0);diff&&handle._updateScrollPosition(diff,!0)}else if(3===scrollDirection){const isStartInView=0===startIndex,isEndInView=endIndex-(count-1)==0,diff=jump.reduce(((acc,[index,j])=>(index<startIndex?isStartInView||(acc+=j):!isStartInView&&isEndInView&&(acc+=j),acc)),0);diff&&handle._updateScrollPosition(diff,!0)}}),[jump]),(0,react.useEffect)((()=>{if(!onEndReached)return;onEndReachedCalledIndex.current>count&&(onEndReachedCalledIndex.current=-1);count-1-endIndex<=endThreshold&&onEndReachedCalledIndex.current<count&&(onEndReachedCalledIndex.current=count,onEndReached())}),[endIndex]),(0,react.useImperativeHandle)(ref,(()=>({scrollToIndex:async index=>{const el=scrollRef.current;if(!el)return;index=max(min(index,count-1),0);const getOffset=()=>{let offset=store._getItemOffset(index);const scrollSize=isHorizontal?el.scrollWidth:el.scrollHeight,viewportSize=store._getViewportSize();return scrollSize-(offset+viewportSize)<=0&&(offset=scrollSize-viewportSize),offset};if(store._hasUnmeasuredItemsInRange(index)){do{store._update({_type:3,_offset:getOffset()});try{await store._waitForScrollDestinationItemsMeasured()}catch(e){return}}while(store._hasUnmeasuredItemsInRange(index));handle._updateScrollPosition(getOffset())}else{const offset=getOffset();handle._updateScrollPosition(offset),store._update({_type:3,_offset:offset})}}})),[count]);const items=(0,react.useMemo)((()=>{let i=-1;return react.Children.map(children,(e=>isInvalidElement(e)?null:(i++,i<startIndexWithMargin||i>endIndexWithMargin?null:(0,jsx_runtime.jsx)(Item,{_handle:handle,_store:store,_index:i,_element:itemElement,_isHorizontal:isHorizontal,_isRtl:isRtl,_children:e},(null==e?void 0:e.key)||i))))}),[children,startIndexWithMargin,endIndexWithMargin]);return(0,jsx_runtime.jsx)(Window,{_ref:scrollRef,_isHorizontal:isHorizontal,_element:element,_style:styleProp,_children:(0,jsx_runtime.jsx)(Inner,{_store:store,_element:innerElement,_style:innerStyleProp,_isHorizontal:isHorizontal,_isRtl:isRtl,_children:items})})}));try{List.displayName="List",List.__docgenInfo={description:"Virtualized list component. See {@link ListProps} and {@link ListHandle}.",displayName:"List",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},itemSize:{defaultValue:{value:"40"},description:"Item size hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.\n@defaultValue 40",name:"itemSize",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"6"},description:"Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.\n@defaultValue 6",name:"overscan",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},rtl:{defaultValue:null,description:"You have to set true if you use this component under `direction: rtl` style.",name:"rtl",required:!1,type:{name:"boolean"}},endThreshold:{defaultValue:{value:"0"},description:"Number of items to be the margin from the end of the scroll. See also {@link onEndReached}.\n@defaultValue 0",name:"endThreshold",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"Inline style prop to override style of scrollable element.",name:"style",required:!1,type:{name:"CSSProperties"}},innerStyle:{defaultValue:null,description:"Inline style prop to override style of inner element.",name:"innerStyle",required:!1,type:{name:"CSSProperties"}},element:{defaultValue:{value:"div"},description:'Customized element type for scrollable element.\n@defaultValue "div"',name:"element",required:!1,type:{name:"CustomElementType"}},innerElement:{defaultValue:{value:"div"},description:'Customized element type for inner element.\n@defaultValue "div"',name:"innerElement",required:!1,type:{name:"CustomElementType"}},itemElement:{defaultValue:{value:"div"},description:'Customized element type for item element.\n@defaultValue "div"',name:"itemElement",required:!1,type:{name:"CustomElementType"}},onEndReached:{defaultValue:null,description:"Callback invoked when scrolling reached to the end. The margin from the end is specified by {@link endThreshold}.",name:"onEndReached",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react/List.tsx#List"]={docgenInfo:List.__docgenInfo,name:"List",path:"src/react/List.tsx#List"})}catch(__react_docgen_typescript_loader_error){}},"./stories/advanced/Lazy.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>Lazy_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),List=__webpack_require__("./src/react/List.tsx"),__assign=function(){return __assign=Object.assign||function __assign2(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};var SVG=function(_a){var _b=_a.animate,animate=void 0===_b||_b,animateBegin=_a.animateBegin,_c=_a.backgroundColor,backgroundColor=void 0===_c?"#f5f6f7":_c,_d=_a.backgroundOpacity,backgroundOpacity=void 0===_d?1:_d,_e=_a.baseUrl,baseUrl=void 0===_e?"":_e,children=_a.children,_f=_a.foregroundColor,foregroundColor=void 0===_f?"#eee":_f,_g=_a.foregroundOpacity,foregroundOpacity=void 0===_g?1:_g,_h=_a.gradientRatio,gradientRatio=void 0===_h?2:_h,_j=_a.gradientDirection,gradientDirection=void 0===_j?"left-right":_j,uniqueKey=_a.uniqueKey,_k=_a.interval,interval=void 0===_k?.25:_k,_l=_a.rtl,rtl=void 0!==_l&&_l,_m=_a.speed,speed=void 0===_m?1.2:_m,_o=_a.style,style=void 0===_o?{}:_o,_p=_a.title,title=void 0===_p?"Loading...":_p,_q=_a.beforeMask,beforeMask=void 0===_q?null:_q,props=function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}(_a,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),fixedId=uniqueKey||Math.random().toString(36).substring(6),idClip=fixedId+"-diff",idGradient=fixedId+"-animated-diff",idAria=fixedId+"-aria",rtlStyle=rtl?{transform:"scaleX(-1)"}:null,keyTimes="0; "+interval+"; 1",dur=speed+"s",gradientTransform="top-bottom"===gradientDirection?"rotate(90)":void 0;return(0,react.createElement)("svg",__assign({"aria-labelledby":idAria,role:"img",style:__assign(__assign({},style),rtlStyle)},props),title?(0,react.createElement)("title",{id:idAria},title):null,beforeMask&&(0,react.isValidElement)(beforeMask)?beforeMask:null,(0,react.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+baseUrl+"#"+idClip+")",style:{fill:"url("+baseUrl+"#"+idGradient+")"}}),(0,react.createElement)("defs",null,(0,react.createElement)("clipPath",{id:idClip},children),(0,react.createElement)("linearGradient",{id:idGradient,gradientTransform},(0,react.createElement)("stop",{offset:"0%",stopColor:backgroundColor,stopOpacity:backgroundOpacity},animate&&(0,react.createElement)("animate",{attributeName:"offset",values:-gradientRatio+"; "+-gradientRatio+"; 1",keyTimes,dur,repeatCount:"indefinite",begin:animateBegin})),(0,react.createElement)("stop",{offset:"50%",stopColor:foregroundColor,stopOpacity:foregroundOpacity},animate&&(0,react.createElement)("animate",{attributeName:"offset",values:-gradientRatio/2+"; "+-gradientRatio/2+"; "+(1+gradientRatio/2),keyTimes,dur,repeatCount:"indefinite",begin:animateBegin})),(0,react.createElement)("stop",{offset:"100%",stopColor:backgroundColor,stopOpacity:backgroundOpacity},animate&&(0,react.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+gradientRatio),keyTimes,dur,repeatCount:"indefinite",begin:animateBegin})))))},ContentLoader=function(props){return props.children?(0,react.createElement)(SVG,__assign({},props)):(0,react.createElement)(ReactContentLoaderFacebook,__assign({},props))},ReactContentLoaderFacebook=function(props){return(0,react.createElement)(ContentLoader,__assign({viewBox:"0 0 476 124"},props),(0,react.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,react.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,react.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,react.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,react.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,react.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const Lazy_stories={component:List.a},Skeleton=()=>(0,jsx_runtime.jsx)(ReactContentLoaderFacebook,{}),Loaded=()=>(0,jsx_runtime.jsx)("div",{style:{width:"100%",height:"100%"},children:"loaded"}),Item=({children})=>(0,jsx_runtime.jsx)("div",{style:{padding:10,height:300,borderBottom:"solid 1px #ccc",background:"#fff"},children}),Default={name:"Lazy",render:()=>{const heavyComps=(0,react.useState)((()=>Array.from({length:1e3},(()=>(0,react.lazy)((()=>new Promise((async resolve=>{await new Promise((res=>setTimeout(res,1e3))),resolve({default:Loaded})}))))))))[0];return(0,jsx_runtime.jsx)(List.a,{style:{height:"100vh"},children:heavyComps.map(((HeavyComp,i)=>(0,jsx_runtime.jsx)(Item,{children:(0,jsx_runtime.jsx)(react.Suspense,{fallback:(0,jsx_runtime.jsx)(Skeleton,{}),children:(0,jsx_runtime.jsx)(HeavyComp,{})})},i)))})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  name: "Lazy",\n  render: () => {\n    const heavyComps = useState(() => Array.from({\n      length: 1e3\n    }, () => lazy(() => new Promise(async resolve => {\n      await new Promise(res => setTimeout(res, 1e3));\n      resolve({\n        default: Loaded\n      });\n    }))))[0];\n    return /* @__PURE__ */jsx(List, {\n      style: {\n        height: "100vh"\n      },\n      children: heavyComps.map((HeavyComp, i) => /* @__PURE__ */jsx(Item, {\n        children: /* @__PURE__ */jsx(Suspense, {\n          fallback: /* @__PURE__ */jsx(Skeleton, {}),\n          children: /* @__PURE__ */jsx(HeavyComp, {})\n        })\n      }, i))\n    });\n  }\n}',...Default.parameters?.docs?.source}}}}}]);