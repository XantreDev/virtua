import{a as k}from"./jsx-runtime-sgeEVxPu.js";import{r as s}from"./index-yp3VsGQP.js";import{a as Y,A as X,b as Z,j as F,u as L,r as n,U as Q,c as $,k as ee,l as te,g as ne,o as re,d as oe,m as se,S as ae,e as ie,n as le,h as ue,p as ce}from"./useRerender-w40Cc3mi.js";import{u as de,a as q,L as me}from"./useChildren-q2gAaA-7.js";import{r as fe}from"./index-8dy-jdxy.js";const x=s.forwardRef(({children:b,count:O,overscan:_=4,itemSize:g,shift:A,horizontal:H,reverse:N,cache:D,startMargin:P,endMargin:j,ssrCount:y,as:c="div",item:M="div",scrollRef:v,onScroll:U,onScrollEnd:J,onRangeChange:S},B)=>{c=c;const[G,a]=de(b,O),z=s.useRef(null),I=s.useRef(!!y),E=q(U),V=q(J),[e,d,o,i]=Y(()=>{const t=!!H,r=ie(a,g,y,D,!g,P,j);return[r,le(r,t),ue(r,t),t]});a!==e._getItemsLength()&&e._update(X,[a,A]);const C=Z(e),[m,f]=e._getRange(),p=e._getScrollDirection(),K=e._getJumpCount(),h=e._getTotalSize(),w=F(e),W=N?ce(0,w-h):0,T=[];L(()=>{I[n]=!1;const t=e._subscribe(Q+$,u=>{u?fe.flushSync(C):C()}),r=e._subscribe(ee,()=>{E[n]&&E[n](e._getScrollOffset())}),l=e._subscribe(te,()=>{V[n]&&V[n]()}),R=u=>{d._observeRoot(u),o._observe(u)};return v?Promise.resolve().then(()=>R(v[n])):R(z[n].parentElement),()=>{t(),r(),l(),d._dispose(),o._dispose()}},[]),L(()=>{const t=e._flushJump();t&&o._fixScrollJump(t)},[K]),s.useEffect(()=>{S&&S(m,f)},[m,f]),s.useImperativeHandle(B,()=>({get cache(){return e._getCache()},get scrollOffset(){return e._getScrollOffset()},get scrollSize(){return ne(e)},get viewportSize(){return e._getViewportSize()},scrollToIndex:o._scrollToIndex,scrollTo:o._scrollTo,scrollBy:o._scrollBy}),[]);for(let t=re(m,_,p),r=oe(f,_,p,a);t<=r;t++){const l=G(t);T.push(k(me,{_resizer:d._observeItem,_index:t,_offset:e._getItemOffset(t)+W,_hide:e._isUnmeasuredItem(t),_element:M,_children:l,_isHorizontal:i,_isSSR:I[n]},se(l,t)))}return k(c,{ref:z,style:{contain:"content",overflowAnchor:"none",position:"relative",visibility:"hidden",width:i?h:"100%",height:i?"100%":h,[i?"minWidth":"minHeight"]:w,pointerEvents:p!==ae?"none":"auto"},children:T})});try{x.displayName="Virtualizer",x.__docgenInfo={description:"Customizable list virtualizer for advanced usage. See {@link VirtualizerProps} and {@link VirtualizerHandle}.",displayName:"Virtualizer",props:{children:{defaultValue:null,description:`Elements rendered by this component.

You can also pass a function and set {@link VirtualizerProps.count} to create elements lazily.`,name:"children",required:!0,type:{name:"ReactNode | ((index: number) => ReactElement<any, string | JSXElementConstructor<any>>)"}},count:{defaultValue:null,description:"If you set a function to {@link VirtualizerProps.children}, you have to set total number of items to this prop.",name:"count",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},itemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"itemSize",required:!1,type:{name:"number"}},shift:{defaultValue:null,description:"While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.",name:"shift",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},reverse:{defaultValue:null,description:"If true, items are aligned to the end of the list when total size of items are smaller than viewport size. It's useful for chat like app.",name:"reverse",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VirtualizerHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},startMargin:{defaultValue:null,description:"If you put an element before virtualizer, you have to define its height with this prop.",name:"startMargin",required:!1,type:{name:"number"}},endMargin:{defaultValue:null,description:"If you put an element after virtualizer, you have to define its height with this prop.",name:"endMargin",required:!1,type:{name:"number"}},ssrCount:{defaultValue:null,description:"A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.",name:"ssrCount",required:!1,type:{name:"number"}},as:{defaultValue:null,description:`Component or element type for container element.
@defaultValue "div"`,name:"as",required:!1,type:{name:"keyof IntrinsicElements | CustomContainerComponent"}},item:{defaultValue:null,description:`Component or element type for item element. This component will get {@link CustomItemComponentProps } as props.
@defaultValue "div"`,name:"item",required:!1,type:{name:"keyof IntrinsicElements | CustomItemComponent"}},scrollRef:{defaultValue:null,description:"Reference to the scrollable element. The default will get the parent element of virtualizer.",name:"scrollRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onScroll:{defaultValue:null,description:`Callback invoked whenever scroll offset changes.
@param offset Current scrollTop or scrollLeft.`,name:"onScroll",required:!1,type:{name:"((offset: number) => void)"}},onScrollEnd:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollEnd",required:!1,type:{name:"(() => void)"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"((startIndex: number, endIndex: number) => void)"}}}}}catch{}export{x as V};
