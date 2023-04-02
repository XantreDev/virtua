/*! For license information please see comparisons-react-virtual-stories.e1a24d57.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkvirtua=self.webpackChunkvirtua||[]).push([[422],{"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var e=__webpack_require__("./node_modules/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"./node_modules/use-sync-external-store/shim/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")},"./stories/comparisons/react-virtual.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DynamicHeight:()=>DynamicHeight,default:()=>react_virtual_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var rafId,props=["bottom","height","left","right","top","width"],observedNodes=new Map,run=function run2(){var changedStates=[];observedNodes.forEach((function(state,node){var newRect=node.getBoundingClientRect();(function rectChanged2(a,b){return void 0===a&&(a={}),void 0===b&&(b={}),props.some((function(prop){return a[prop]!==b[prop]}))})(newRect,state.rect)&&(state.rect=newRect,changedStates.push(state))})),changedStates.forEach((function(state){state.callbacks.forEach((function(cb){return cb(state.rect)}))})),rafId=window.requestAnimationFrame(run2)};var useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;function useRect(nodeRef,initialRect){void 0===initialRect&&(initialRect={width:0,height:0});var _React$useState=react.useState(nodeRef.current),element=_React$useState[0],setElement=_React$useState[1],_React$useReducer=react.useReducer(rectReducer,initialRect),rect=_React$useReducer[0],dispatch=_React$useReducer[1],initialRectSet=react.useRef(!1);return useIsomorphicLayoutEffect((function(){nodeRef.current!==element&&setElement(nodeRef.current)})),useIsomorphicLayoutEffect((function(){if(element&&!initialRectSet.current){initialRectSet.current=!0;var _rect=element.getBoundingClientRect();dispatch({rect:_rect})}}),[element]),react.useEffect((function(){if(element){var observer=function observeRect(node,cb){return{observe:function observe(){var wasEmpty=0===observedNodes.size;observedNodes.has(node)?observedNodes.get(node).callbacks.push(cb):observedNodes.set(node,{rect:void 0,hasRectChanged:!1,callbacks:[cb]}),wasEmpty&&run()},unobserve:function unobserve(){var state=observedNodes.get(node);if(state){var index=state.callbacks.indexOf(cb);index>=0&&state.callbacks.splice(index,1),state.callbacks.length||observedNodes.delete(node),observedNodes.size||cancelAnimationFrame(rafId)}}}}(element,(function(rect2){dispatch({rect:rect2})}));return observer.observe(),function(){observer.unobserve()}}}),[element]),rect}function rectReducer(state,action){var rect=action.rect;return state.height!==rect.height||state.width!==rect.width?rect:state}var defaultEstimateSize=function defaultEstimateSize2(){return 50},defaultKeyExtractor=function defaultKeyExtractor2(index){return index},defaultMeasureSize=function defaultMeasureSize2(el,horizontal){return el[horizontal?"offsetWidth":"offsetHeight"]},defaultRangeExtractor=function defaultRangeExtractor2(range){for(var start=Math.max(range.start-range.overscan,0),end=Math.min(range.end+range.overscan,range.size-1),arr=[],i=start;i<=end;i++)arr.push(i);return arr};function useVirtual(_ref){var _measurements,_ref$size=_ref.size,size=void 0===_ref$size?0:_ref$size,_ref$estimateSize=_ref.estimateSize,estimateSize=void 0===_ref$estimateSize?defaultEstimateSize:_ref$estimateSize,_ref$overscan=_ref.overscan,overscan=void 0===_ref$overscan?1:_ref$overscan,_ref$paddingStart=_ref.paddingStart,paddingStart=void 0===_ref$paddingStart?0:_ref$paddingStart,_ref$paddingEnd=_ref.paddingEnd,paddingEnd=void 0===_ref$paddingEnd?0:_ref$paddingEnd,parentRef=_ref.parentRef,horizontal=_ref.horizontal,scrollToFn=_ref.scrollToFn,useObserver=_ref.useObserver,initialRect=_ref.initialRect,onScrollElement=_ref.onScrollElement,scrollOffsetFn=_ref.scrollOffsetFn,_ref$keyExtractor=_ref.keyExtractor,keyExtractor=void 0===_ref$keyExtractor?defaultKeyExtractor:_ref$keyExtractor,_ref$measureSize=_ref.measureSize,measureSize=void 0===_ref$measureSize?defaultMeasureSize:_ref$measureSize,_ref$rangeExtractor=_ref.rangeExtractor,rangeExtractor=void 0===_ref$rangeExtractor?defaultRangeExtractor:_ref$rangeExtractor,sizeKey=horizontal?"width":"height",scrollKey=horizontal?"scrollLeft":"scrollTop",latestRef=react.useRef({scrollOffset:0,measurements:[]}),_React$useState=react.useState(0),scrollOffset=_React$useState[0],setScrollOffset=_React$useState[1];latestRef.current.scrollOffset=scrollOffset;var outerSize=(useObserver||useRect)(parentRef,initialRect)[sizeKey];latestRef.current.outerSize=outerSize;var defaultScrollToFn=react.useCallback((function(offset){parentRef.current&&(parentRef.current[scrollKey]=offset)}),[parentRef,scrollKey]),resolvedScrollToFn=scrollToFn||defaultScrollToFn;scrollToFn=react.useCallback((function(offset){resolvedScrollToFn(offset,defaultScrollToFn)}),[defaultScrollToFn,resolvedScrollToFn]);var _React$useState2=react.useState({}),measuredCache=_React$useState2[0],setMeasuredCache=_React$useState2[1],measure=react.useCallback((function(){return setMeasuredCache({})}),[]),pendingMeasuredCacheIndexesRef=react.useRef([]),measurements=react.useMemo((function(){var min=pendingMeasuredCacheIndexesRef.current.length>0?Math.min.apply(Math,pendingMeasuredCacheIndexesRef.current):0;pendingMeasuredCacheIndexesRef.current=[];for(var measurements2=latestRef.current.measurements.slice(0,min),i=min;i<size;i++){var key=keyExtractor(i),measuredSize=measuredCache[key],_start=measurements2[i-1]?measurements2[i-1].end:paddingStart,_size="number"==typeof measuredSize?measuredSize:estimateSize(i),_end=_start+_size;measurements2[i]={index:i,start:_start,size:_size,end:_end,key}}return measurements2}),[estimateSize,measuredCache,paddingStart,size,keyExtractor]),totalSize=((null==(_measurements=measurements[size-1])?void 0:_measurements.end)||paddingStart)+paddingEnd;latestRef.current.measurements=measurements,latestRef.current.totalSize=totalSize;var element=onScrollElement?onScrollElement.current:parentRef.current,scrollOffsetFnRef=react.useRef(scrollOffsetFn);scrollOffsetFnRef.current=scrollOffsetFn,useIsomorphicLayoutEffect((function(){if(element){var onScroll=function onScroll2(event){var offset=scrollOffsetFnRef.current?scrollOffsetFnRef.current(event):element[scrollKey];setScrollOffset(offset)};return onScroll(),element.addEventListener("scroll",onScroll,{capture:!1,passive:!0}),function(){element.removeEventListener("scroll",onScroll)}}setScrollOffset(0)}),[element,scrollKey]);var _calculateRange=function calculateRange(_ref4){var measurements=_ref4.measurements,outerSize=_ref4.outerSize,scrollOffset=_ref4.scrollOffset,size=measurements.length-1,getOffset=function getOffset2(index){return measurements[index].start},start=findNearestBinarySearch(0,size,getOffset,scrollOffset),end=start;for(;end<size&&measurements[end].end<scrollOffset+outerSize;)end++;return{start,end}}(latestRef.current),start=_calculateRange.start,end=_calculateRange.end,indexes=react.useMemo((function(){return rangeExtractor({start,end,overscan,size:measurements.length})}),[start,end,overscan,measurements.length,rangeExtractor]),measureSizeRef=react.useRef(measureSize);measureSizeRef.current=measureSize;var virtualItems=react.useMemo((function(){for(var virtualItems2=[],_loop=function _loop2(k2,len2){var i=indexes[k2],item=_extends(_extends({},measurements[i]),{},{measureRef:function measureRef(el){if(el){var measuredSize=measureSizeRef.current(el,horizontal);if(measuredSize!==item.size){var _scrollOffset=latestRef.current.scrollOffset;item.start<_scrollOffset&&defaultScrollToFn(_scrollOffset+(measuredSize-item.size)),pendingMeasuredCacheIndexesRef.current.push(i),setMeasuredCache((function(old){var _extends2;return _extends(_extends({},old),{},((_extends2={})[item.key]=measuredSize,_extends2))}))}}}});virtualItems2.push(item)},k=0,len=indexes.length;k<len;k++)_loop(k);return virtualItems2}),[indexes,defaultScrollToFn,horizontal,measurements]),mountedRef=react.useRef(!1);useIsomorphicLayoutEffect((function(){mountedRef.current&&setMeasuredCache({}),mountedRef.current=!0}),[estimateSize]);var scrollToOffset=react.useCallback((function(toOffset,_temp){var _ref2$align=(void 0===_temp?{}:_temp).align,align=void 0===_ref2$align?"start":_ref2$align,_latestRef$current=latestRef.current,scrollOffset2=_latestRef$current.scrollOffset,outerSize2=_latestRef$current.outerSize;"auto"===align&&(align=toOffset<=scrollOffset2?"start":toOffset>=scrollOffset2+outerSize2?"end":"start"),"start"===align?scrollToFn(toOffset):"end"===align?scrollToFn(toOffset-outerSize2):"center"===align&&scrollToFn(toOffset-outerSize2/2)}),[scrollToFn]),tryScrollToIndex=react.useCallback((function(index,_temp2){var _ref3=void 0===_temp2?{}:_temp2,_ref3$align=_ref3.align,align=void 0===_ref3$align?"auto":_ref3$align,rest=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref3,["align"]),_latestRef$current2=latestRef.current,measurements2=_latestRef$current2.measurements,scrollOffset2=_latestRef$current2.scrollOffset,outerSize2=_latestRef$current2.outerSize,measurement=measurements2[Math.max(0,Math.min(index,size-1))];if(measurement){if("auto"===align)if(measurement.end>=scrollOffset2+outerSize2)align="end";else{if(!(measurement.start<=scrollOffset2))return;align="start"}var toOffset="center"===align?measurement.start+measurement.size/2:"end"===align?measurement.end:measurement.start;scrollToOffset(toOffset,_extends({align},rest))}}),[scrollToOffset,size]),scrollToIndex=react.useCallback((function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];tryScrollToIndex.apply(void 0,args),requestAnimationFrame((function(){tryScrollToIndex.apply(void 0,args)}))}),[tryScrollToIndex]);return{virtualItems,totalSize,scrollToOffset,scrollToIndex,measure}}var findNearestBinarySearch=function findNearestBinarySearch2(low,high,getCurrentValue,value){for(;low<=high;){var middle=(low+high)/2|0,currentValue=getCurrentValue(middle);if(currentValue<value)low=middle+1;else{if(!(currentValue>value))return middle;high=middle-1}}return low>0?low-1:0};var List=__webpack_require__("./src/react/List.tsx"),components=__webpack_require__("./stories/comparisons/components.tsx");const heights=[20,40,80,77],Row=({index:i})=>(0,jsx_runtime.jsx)("div",{style:{height:heights[i%heights.length],borderBottom:"solid 1px #ccc",background:"#fff"},children:i}),react_virtual_stories={component:useVirtual},RVList=()=>{const parentRef=(0,react.useRef)(null),rowVirtualizer=useVirtual({size:1e3,parentRef});return(0,jsx_runtime.jsx)("div",{ref:parentRef,style:{flex:1,overflow:"auto"},children:(0,jsx_runtime.jsx)("div",{style:{height:`${rowVirtualizer.totalSize}px`,width:"100%",position:"relative"},children:rowVirtualizer.virtualItems.map((item=>(0,jsx_runtime.jsx)("div",{ref:item.measureRef,style:{position:"absolute",top:0,left:0,width:"100%",transform:`translateY(${item.start}px)`},children:(0,jsx_runtime.jsx)("div",{style:{height:heights[item.index%heights.length],borderBottom:"solid 1px #ccc",background:"#fff"},children:item.index})},item.key)))})})},DynamicHeight={render:()=>(0,jsx_runtime.jsxs)("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,jsx_runtime.jsx)("div",{style:{flex:1},children:"virtua"}),(0,jsx_runtime.jsx)("div",{style:{flex:1},children:"react-virtual"})]}),(0,jsx_runtime.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:(0,jsx_runtime.jsx)(components.g,{count:1e3})}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[(0,jsx_runtime.jsx)(List.a,{style:{flex:1},children:Array.from({length:1e3}).map(((_,i)=>(0,jsx_runtime.jsx)(Row,{index:i},i)))}),(0,jsx_runtime.jsx)(RVList,{})]})]})};DynamicHeight.parameters={...DynamicHeight.parameters,docs:{...DynamicHeight.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return /* @__PURE__ */jsxs("div", {\n      style: {\n        height: "100vh",\n        display: "flex",\n        flexDirection: "column"\n      },\n      children: [/* @__PURE__ */jsxs("div", {\n        style: {\n          display: "flex",\n          flexDirection: "row"\n        },\n        children: [/* @__PURE__ */jsx("div", {\n          style: {\n            flex: 1\n          },\n          children: "virtua"\n        }), /* @__PURE__ */jsx("div", {\n          style: {\n            flex: 1\n          },\n          children: "react-virtual"\n        })]\n      }), /* @__PURE__ */jsx("div", {\n        style: {\n          display: "flex",\n          flexDirection: "row"\n        },\n        children: /* @__PURE__ */jsx(ScrollInput, {\n          count: ROW_COUNT\n        })\n      }), /* @__PURE__ */jsxs("div", {\n        style: {\n          display: "flex",\n          flexDirection: "row",\n          flex: 1,\n          gap: 8,\n          overflow: "hidden"\n        },\n        children: [/* @__PURE__ */jsx(List, {\n          style: {\n            flex: 1\n          },\n          children: Array.from({\n            length: ROW_COUNT\n          }).map((_, i) => /* @__PURE__ */jsx(Row, {\n            index: i\n          }, i))\n        }), /* @__PURE__ */jsx(RVList, {})]\n      })]\n    });\n  }\n}',...DynamicHeight.parameters?.docs?.source}}}}}]);