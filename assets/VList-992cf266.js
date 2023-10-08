import{j as L}from"./jsx-runtime-c3d7f245.js";import{r as n}from"./index-c6dae603.js";import{f as G,u as R,a as W,A as Y,b as u,c as T,r,s as F,e as K,v as Z,V as Q,d as X,g as $,t as ee,q as te,U as oe,j as x,k as ne,l as se,S as re,m as le,n as ae}from"./Viewport-cc3bc829.js";import{L as ie}from"./ListItem-2642fce6.js";import{r as ce}from"./index-eb008d06.js";const k=n.forwardRef(({children:d,overscan:b=4,initialItemSize:g,initialItemCount:q,shift:O,horizontal:D,reverse:H,cache:N,components:{Root:j=Q,Item:A="div"}=X,onScroll:P,onScrollStop:U,onRangeChange:y,...m},M)=>{const f=n.useMemo(()=>G(d),[d]),l=f.length,I=R(P),v=R(U),[e,C,s,a]=W(()=>{const t=!!D,o=$(ce.flushSync,l,g,q,N,!!H,!g);return[o,ee(o,t),te(o,t),t]});l!==e._getItemsLength()&&e._update(Y,[l,O]);const[p,h]=u(e,e._getRange,oe+x),_=u(e,e._getScrollDirection,ne),J=u(e,e._getJumpCount,se),V=u(e,e._getCorrectedScrollSize,x,!0),z=n.useRef(null),S=_!==re;T(()=>{const t=z[r],o=C._observeRoot(t),i=s._initRoot(t),c=e._subscribe(F,()=>{I[r]&&I[r](e._getScrollOffset())});return()=>{o(),i(),c()}},[]),T(()=>{const t=e._flushJump();t&&s._fixScrollJump(t)},[J]),n.useEffect(()=>{S||v[r]&&v[r]()},[S]),n.useEffect(()=>{y&&y(p,h)},[p,h]),n.useImperativeHandle(M,()=>({get cache(){return e._getCache()},get scrollOffset(){return e._getScrollOffset()},get scrollSize(){return e._getCorrectedScrollSize()},get viewportSize(){return e._getViewportSize()},scrollToIndex:s._scrollToIndex,scrollTo:s._scrollTo,scrollBy:s._scrollBy}),[]);const E=le(p,b,_),w=ae(h,b,_,l),B=n.useMemo(()=>{const t=[];for(let o=E;o<=w;o++){const i=f[o],c=i.key;t.push(L(ie,{_resizer:C,_store:e,_index:o,_element:A,_children:i,_isHorizontal:a},K(c)?c:"_"+o))}return t},[f,E,w]);return L(j,{ref:z,width:a?V:void 0,height:a?void 0:V,scrolling:S,attrs:n.useMemo(()=>({...m,style:{overflow:"auto",display:a?"inline-block":"block",contain:"strict",width:"100%",height:"100%",...m.style}}),Z(m)),children:B})});try{k.displayName="VList",k.__docgenInfo={description:"Virtualized list component. See {@link VListProps} and {@link VListHandle}.",displayName:"VList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},shift:{defaultValue:null,description:"While true is set, scroll position will be maintained from the end not usual start when items are shifted/unshifted. It is useful for reverse infinite scrolling.",name:"shift",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},reverse:{defaultValue:null,description:"If true, some styles will be adjusted to be suitable for bottom-to-top scrolling.",name:"reverse",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VListHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Item?: CustomItemComponentOrElement; }"}},onScroll:{defaultValue:null,description:`Callback invoked whenever scroll offset changes.
@param offset Current scrollTop or scrollLeft.`,name:"onScroll",required:!1,type:{name:"(offset: number) => void"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(startIndex: number, endIndex: number) => void"}}}}}catch{}export{k as V};
//# sourceMappingURL=VList-992cf266.js.map
