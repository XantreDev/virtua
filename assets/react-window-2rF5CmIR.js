import{j as R}from"./jsx-runtime-CmfuFKGs.js";import{r as _}from"./index-obz6jkze.js";import{A as re}from"./AutoSizer-DdBmrhoM.js";import{_ as ie}from"./extends-CCbyfPlC.js";import{_ as $}from"./assertThisInitialized-B9jnkVVz.js";import{_ as ne}from"./inheritsLoose-1HkgTRWY.js";import{m as N}from"./memoize-one.esm-CcMeOnPo.js";var ae=typeof performance=="object"&&typeof performance.now=="function",q=ae?function(){return performance.now()}:function(){return Date.now()};function U(a){cancelAnimationFrame(a.id)}function oe(a,t){var r=q();function i(){q()-r>=t?a.call(null):o.id=requestAnimationFrame(i)}var o={id:requestAnimationFrame(i)};return o}var P=-1;function H(a){if(a===void 0&&(a=!1),P===-1||a){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",document.body.appendChild(t),P=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return P}var O=null;function j(a){if(a===void 0&&(a=!1),O===null||a){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var i=document.createElement("div"),o=i.style;return o.width="100px",o.height="100px",t.appendChild(i),document.body.appendChild(t),t.scrollLeft>0?O="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?O="negative":O="positive-ascending"),document.body.removeChild(t),O}return O}var se=150,le=function(t,r){return t};function ce(a){var t,r=a.getItemOffset,i=a.getEstimatedTotalSize,o=a.getItemSize,m=a.getOffsetForIndexAndAlignment,l=a.getStartIndexForOffset,c=a.getStopIndexForStartIndex,p=a.initInstanceProps,g=a.shouldResetStyleCacheOnItemSizeChange,x=a.validateProps;return t=function(T){ne(M,T);function M(S){var e;return e=T.call(this,S)||this,e._instanceProps=p(e.props,$(e)),e._outerRef=void 0,e._resetIsScrollingTimeoutId=null,e.state={instance:$(e),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof e.props.initialScrollOffset=="number"?e.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},e._callOnItemsRendered=void 0,e._callOnItemsRendered=N(function(n,s,u,f){return e.props.onItemsRendered({overscanStartIndex:n,overscanStopIndex:s,visibleStartIndex:u,visibleStopIndex:f})}),e._callOnScroll=void 0,e._callOnScroll=N(function(n,s,u){return e.props.onScroll({scrollDirection:n,scrollOffset:s,scrollUpdateWasRequested:u})}),e._getItemStyle=void 0,e._getItemStyle=function(n){var s=e.props,u=s.direction,f=s.itemSize,v=s.layout,d=e._getItemStyleCache(g&&f,g&&v,g&&u),h;if(d.hasOwnProperty(n))h=d[n];else{var I=r(e.props,n,e._instanceProps),z=o(e.props,n,e._instanceProps),C=u==="horizontal"||v==="horizontal",E=u==="rtl",L=C?I:0;d[n]=h={position:"absolute",left:E?void 0:L,right:E?L:void 0,top:C?0:I,height:C?"100%":z,width:C?z:"100%"}}return h},e._getItemStyleCache=void 0,e._getItemStyleCache=N(function(n,s,u){return{}}),e._onScrollHorizontal=function(n){var s=n.currentTarget,u=s.clientWidth,f=s.scrollLeft,v=s.scrollWidth;e.setState(function(d){if(d.scrollOffset===f)return null;var h=e.props.direction,I=f;if(h==="rtl")switch(j()){case"negative":I=-f;break;case"positive-descending":I=v-u-f;break}return I=Math.max(0,Math.min(I,v-u)),{isScrolling:!0,scrollDirection:d.scrollOffset<I?"forward":"backward",scrollOffset:I,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._onScrollVertical=function(n){var s=n.currentTarget,u=s.clientHeight,f=s.scrollHeight,v=s.scrollTop;e.setState(function(d){if(d.scrollOffset===v)return null;var h=Math.max(0,Math.min(v,f-u));return{isScrolling:!0,scrollDirection:d.scrollOffset<h?"forward":"backward",scrollOffset:h,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._outerRefSetter=function(n){var s=e.props.outerRef;e._outerRef=n,typeof s=="function"?s(n):s!=null&&typeof s=="object"&&s.hasOwnProperty("current")&&(s.current=n)},e._resetIsScrollingDebounced=function(){e._resetIsScrollingTimeoutId!==null&&U(e._resetIsScrollingTimeoutId),e._resetIsScrollingTimeoutId=oe(e._resetIsScrolling,se)},e._resetIsScrolling=function(){e._resetIsScrollingTimeoutId=null,e.setState({isScrolling:!1},function(){e._getItemStyleCache(-1,null)})},e}M.getDerivedStateFromProps=function(e,n){return de(e,n),x(e),null};var y=M.prototype;return y.scrollTo=function(e){e=Math.max(0,e),this.setState(function(n){return n.scrollOffset===e?null:{scrollDirection:n.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},y.scrollToItem=function(e,n){n===void 0&&(n="auto");var s=this.props,u=s.itemCount,f=s.layout,v=this.state.scrollOffset;e=Math.max(0,Math.min(e,u-1));var d=0;if(this._outerRef){var h=this._outerRef;f==="vertical"?d=h.scrollWidth>h.clientWidth?H():0:d=h.scrollHeight>h.clientHeight?H():0}this.scrollTo(m(this.props,e,n,v,this._instanceProps,d))},y.componentDidMount=function(){var e=this.props,n=e.direction,s=e.initialScrollOffset,u=e.layout;if(typeof s=="number"&&this._outerRef!=null){var f=this._outerRef;n==="horizontal"||u==="horizontal"?f.scrollLeft=s:f.scrollTop=s}this._callPropsCallbacks()},y.componentDidUpdate=function(){var e=this.props,n=e.direction,s=e.layout,u=this.state,f=u.scrollOffset,v=u.scrollUpdateWasRequested;if(v&&this._outerRef!=null){var d=this._outerRef;if(n==="horizontal"||s==="horizontal")if(n==="rtl")switch(j()){case"negative":d.scrollLeft=-f;break;case"positive-ascending":d.scrollLeft=f;break;default:var h=d.clientWidth,I=d.scrollWidth;d.scrollLeft=I-h-f;break}else d.scrollLeft=f;else d.scrollTop=f}this._callPropsCallbacks()},y.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&U(this._resetIsScrollingTimeoutId)},y.render=function(){var e=this.props,n=e.children,s=e.className,u=e.direction,f=e.height,v=e.innerRef,d=e.innerElementType,h=e.innerTagName,I=e.itemCount,z=e.itemData,C=e.itemKey,E=C===void 0?le:C,L=e.layout,G=e.outerElementType,Z=e.outerTagName,J=e.style,Q=e.useIsScrolling,X=e.width,k=this.state.isScrolling,W=u==="horizontal"||L==="horizontal",Y=W?this._onScrollHorizontal:this._onScrollVertical,A=this._getRangeToRender(),ee=A[0],te=A[1],D=[];if(I>0)for(var b=ee;b<=te;b++)D.push(_.createElement(n,{data:z,key:E(b,z),index:b,isScrolling:Q?k:void 0,style:this._getItemStyle(b)}));var F=i(this.props,this._instanceProps);return _.createElement(G||Z||"div",{className:s,onScroll:Y,ref:this._outerRefSetter,style:ie({position:"relative",height:f,width:X,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:u},J)},_.createElement(d||h||"div",{children:D,ref:v,style:{height:W?"100%":F,pointerEvents:k?"none":void 0,width:W?F:"100%"}}))},y._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var e=this.props.itemCount;if(e>0){var n=this._getRangeToRender(),s=n[0],u=n[1],f=n[2],v=n[3];this._callOnItemsRendered(s,u,f,v)}}if(typeof this.props.onScroll=="function"){var d=this.state,h=d.scrollDirection,I=d.scrollOffset,z=d.scrollUpdateWasRequested;this._callOnScroll(h,I,z)}},y._getRangeToRender=function(){var e=this.props,n=e.itemCount,s=e.overscanCount,u=this.state,f=u.isScrolling,v=u.scrollDirection,d=u.scrollOffset;if(n===0)return[0,0,0,0];var h=l(this.props,d,this._instanceProps),I=c(this.props,h,d,this._instanceProps),z=!f||v==="backward"?Math.max(1,s):1,C=!f||v==="forward"?Math.max(1,s):1;return[Math.max(0,h-z),Math.max(0,Math.min(n-1,I+C)),h,I]},M}(_.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var de=function(t,r){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,r.instance},ue=50,w=function(t,r,i){var o=t,m=o.itemSize,l=i.itemMetadataMap,c=i.lastMeasuredIndex;if(r>c){var p=0;if(c>=0){var g=l[c];p=g.offset+g.size}for(var x=c+1;x<=r;x++){var T=m(x);l[x]={offset:p,size:T},p+=T}i.lastMeasuredIndex=r}return l[r]},me=function(t,r,i){var o=r.itemMetadataMap,m=r.lastMeasuredIndex,l=m>0?o[m].offset:0;return l>=i?K(t,r,m,0,i):fe(t,r,Math.max(0,m),i)},K=function(t,r,i,o,m){for(;o<=i;){var l=o+Math.floor((i-o)/2),c=w(t,l,r).offset;if(c===m)return l;c<m?o=l+1:c>m&&(i=l-1)}return o>0?o-1:0},fe=function(t,r,i,o){for(var m=t.itemCount,l=1;i<m&&w(t,i,r).offset<o;)i+=l,l*=2;return K(t,r,Math.min(i,m-1),Math.floor(i/2),o)},B=function(t,r){var i=t.itemCount,o=r.itemMetadataMap,m=r.estimatedItemSize,l=r.lastMeasuredIndex,c=0;if(l>=i&&(l=i-1),l>=0){var p=o[l];c=p.offset+p.size}var g=i-l-1,x=g*m;return c+x},he=ce({getItemOffset:function(t,r,i){return w(t,r,i).offset},getItemSize:function(t,r,i){return i.itemMetadataMap[r].size},getEstimatedTotalSize:B,getOffsetForIndexAndAlignment:function(t,r,i,o,m,l){var c=t.direction,p=t.height,g=t.layout,x=t.width,T=c==="horizontal"||g==="horizontal",M=T?x:p,y=w(t,r,m),S=B(t,m),e=Math.max(0,Math.min(S-M,y.offset)),n=Math.max(0,y.offset-M+y.size+l);switch(i==="smart"&&(o>=n-M&&o<=e+M?i="auto":i="center"),i){case"start":return e;case"end":return n;case"center":return Math.round(n+(e-n)/2);case"auto":default:return o>=n&&o<=e?o:o<n?n:e}},getStartIndexForOffset:function(t,r,i){return me(t,i,r)},getStopIndexForStartIndex:function(t,r,i,o){for(var m=t.direction,l=t.height,c=t.itemCount,p=t.layout,g=t.width,x=m==="horizontal"||p==="horizontal",T=x?g:l,M=w(t,r,o),y=i+T,S=M.offset+M.size,e=r;e<c-1&&S<y;)e++,S+=w(t,e,o).size;return e},initInstanceProps:function(t,r){var i=t,o=i.estimatedItemSize,m={itemMetadataMap:{},estimatedItemSize:o||ue,lastMeasuredIndex:-1};return r.resetAfterIndex=function(l,c){c===void 0&&(c=!0),m.lastMeasuredIndex=Math.min(m.lastMeasuredIndex,l-1),r._getItemStyleCache(-1),c&&r.forceUpdate()},m},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}});const pe=({index:a,setHeight:t,Component:r})=>{const i=_.useRef(null);return _.useEffect(()=>{i.current&&t(a,i.current.getBoundingClientRect().height)},[]),R.jsx(r,{ref:i,index:a})},V=_.createContext(null),ve=({index:a,style:t})=>{const{Component:r,setHeight:i}=_.useContext(V);return R.jsx("div",{style:t,children:R.jsx(pe,{index:a,setHeight:i,Component:r})},a)},Ie=_.memo(({count:a,Component:t,handle:r})=>{const i=_.useMemo(()=>Array.from({length:a}).map(()=>50),[]),o=_.useRef(null),m=c=>i[c],l=(c,p)=>{var g;i[c]=p,(g=o.current)==null||g.resetAfterIndex(c)};return _.useImperativeHandle(r,()=>({scrollToIndex:c=>{var p;(p=o.current)==null||p.scrollToItem(c)}})),R.jsx(V.Provider,{value:_.useMemo(()=>({Component:t,setHeight:l}),[t,l]),children:R.jsx(re,{children:({width:c,height:p})=>R.jsx(he,{ref:o,width:c,height:p,itemCount:a,itemSize:m,children:ve})})})});Ie.__docgenInfo={description:"",methods:[{name:"scrollToIndex",docblock:null,modifiers:[],params:[{name:"i",optional:!1,type:null}],returns:null}],displayName:"ReactWindowList",props:{count:{required:!0,tsType:{name:"number"},description:""},Component:{required:!0,tsType:{name:"SimpleItem"},description:""},handle:{required:!1,tsType:{name:"Ref",elements:[{name:"signature",type:"object",raw:"{ scrollToIndex: (index: number) => void }",signature:{properties:[{key:"scrollToIndex",value:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}},required:!0}}]}}],raw:"Ref<ListHandle>"},description:""}}};export{Ie as R};
