import{j as E}from"./jsx-runtime-c3d7f245.js";import{r as _}from"./index-c6dae603.js";import{s as ce}from"./index-778f7dbf.js";const M=Math.min,T=Math.max,Z=Date.now,L=e=>e!=null,B=(e,t)=>Array.from({length:e},(n,r)=>t(r)),ae=(e,t)=>{let n;const r=()=>{L(n)&&clearTimeout(n)},l=()=>{r(),n=setTimeout(()=>{n=null,e()},t)};return l._cancel=r,l},fe=(e,t)=>{let n=Z()-t;return(...r)=>{const l=Z();n+t<l&&(n=l,e(...r))}},re=e=>{let t,n;return(...r)=>(t||(t=!0,n=e(...r)),n)},x=-1,D=(e,t)=>{const n=e._sizes[t];return n===x?e._defaultItemSize:n},de=(e,t,n)=>{e._sizes[t]=n,e._measuredOffsetIndex=M(t,e._measuredOffsetIndex)},se=(e,t,n)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return n?e._offsets[t]+D(e,t):e._offsets[t];let r=e._measuredOffsetIndex,l=e._offsets[r];for(;r<=t&&(e._offsets[r]=l,!(r===t&&!n));)l+=D(e,r),r++;return e._measuredOffsetIndex=t,l},me=e=>se(e,e._length-1,!0),Q=(e,t)=>se(e,t),oe=(e,t,n)=>{let r=0;if(n>=0)for(;t<e._length-1;){const l=D(e,t++);if((r+=l)>=n){r-l/2>=n&&t--;break}}else for(;t>0;){const l=D(e,--t);if((r-=l)<=n){r+l/2<n&&t++;break}}return M(T(t,0),e._length-1)},X=(e,t,n,r)=>oe(e,n,t-r),G=oe,_e=(e,t,n)=>{for(let r=t;r<=n;r++)if(e._sizes[r]===x)return!0;return!1},$=(e,t,n)=>({_defaultItemSize:t,_length:e,_measuredOffsetIndex:n?M(n._measuredOffsetIndex,e-1):0,_sizes:B(e,r=>{const l=n&&n._sizes[r];return L(l)?l:x}),_offsets:B(e,r=>{if(r===0)return 0;const l=n&&n._offsets[r];return L(l)?l:x})}),C=0,le=1,U=2,P=3,H=1,ie=2,F=3,J=4,pe=(e,t,n,r,l=0,p,z)=>{let S=t*T(l-1,0),h=0,b=[],c=$(e,t),w=C,O=[0,l],s;const u=new Set;return{_getRange(){const[o,i]=O,d=Q(c,o),a=X(c,h,o,d),m=G(c,a,S);return o===a&&i===m?O:O=[a,m]},_isUnmeasuredItem(o){return c._sizes[o]===x},_hasUnmeasuredItemsInRange(o){return _e(c,o,G(c,o,S))},_getItemOffset(o){return Q(c,o)},_getScrollOffset(){return h},_getViewportSize(){return S},_getScrollSize(){return me(c)},_getJump(){return b},_isHorizontal(){return n},_isRtl(){return r},_getItemIndexForScrollTo(o){return X(c,o,0,0)},_waitForScrollDestinationItemsMeasured(){return s&&s[1](),new Promise((o,i)=>{s=[()=>{Promise.resolve().then(()=>{o(),s=void 0})},i]})},_subscribe(o){return u.add(o),()=>{u.delete(o)}},_update(o,i){(()=>{switch(o){case H:{const a=i.filter(([g,f])=>c._sizes[g]!==f);if(!a.length)return!1;const m=[];return a.forEach(([g,f])=>{m.push([g,f-D(c,g)]),de(c,g,f)}),b=m,!0}case ie:return S===i?!1:(S=i,!0);case F:case J:{const a=h;return(h=i)!==a}}})()&&(u.forEach(a=>{a()}),o===F?z(h):s&&o===H&&s[0]())},_getScrollDirection(){return w},_setScrollDirection(o){const i=w;w=o,w===C?p(!1):i===C&&(w===le||w===U)&&p(!0)},_updateCacheLength(o){c._length!==o&&(c=$(o,t,c))}}},N=typeof window<"u"?_.useLayoutEffect:_.useEffect,k=(e,t)=>ce.useSyncExternalStore(e,t,t),ee=re(e=>{const t="scrollLeft",n=e[t];e[t]=1;const r=e[t]===0;return e[t]=n,r}),Se=e=>{let t=!1,n;const r=e._isHorizontal(),l=e._isRtl(),p=r?"scrollLeft":"scrollTop",z=r?"width":"height",S=new WeakMap,h=re(()=>new ResizeObserver(s=>{const u=[];for(const{target:o,contentRect:i}of s)if(o===n)e._update(ie,i[z]);else{const d=S.get(o);L(d)&&u.push([d,i[z]])}u.length&&(e._update(H,u),t=!0)})),b=()=>n?r?n.scrollWidth:n.scrollHeight:0,c=(s,u)=>{n&&(r&&l&&ee(n)&&(s*=-1),u?n[p]+=s:(n[p]=s,e._setScrollDirection(P)))},w=async(s,u)=>{const o=()=>{let i=u();const d=b(),a=e._getViewportSize();return d-(i+a)<=0&&(i=d-a),i};if(e._hasUnmeasuredItemsInRange(s)){do{e._update(J,o());try{await e._waitForScrollDestinationItemsMeasured()}catch{return}}while(e._hasUnmeasuredItemsInRange(s));c(o())}else{const i=o();c(i),e._update(J,i)}},O=s=>s.reduce((u,[,o])=>u+o,0);return{_initRoot(s){n=s;const u=h(),o=()=>{let m=s[p];r&&l&&ee(s)&&(m*=-1);const g=e._getScrollOffset();if(g===m)return;const f=e._getScrollDirection();(f===C||!t)&&f!==P&&e._setScrollDirection(g>m?U:le),t=!1,e._update(F,m)},i=ae(()=>{o(),e._setScrollDirection(C)},150),d=()=>{o(),i()},a=fe(m=>{if(e._getScrollDirection()!==C&&!m.ctrlKey&&(r?m.deltaX:m.deltaY)){const g=e._getScrollOffset();g>0&&g<e._getScrollSize()-e._getViewportSize()&&i()}},50);return u.observe(s),s.addEventListener("scroll",d),s.addEventListener("wheel",a,{passive:!0}),()=>{u.disconnect(),s.removeEventListener("scroll",d),s.removeEventListener("wheel",a),i._cancel()}},_initItem(s,u){const o=h();return S.set(s,u),o.observe(s),()=>{S.delete(s),o.unobserve(s)}},_getActualScrollSize:b,_scrollTo(s){s=T(s,0),w(e._getItemIndexForScrollTo(s),()=>s)},_scrollToIndex(s,u){s=T(M(s,u-1),0),w(s,()=>e._getItemOffset(s))},_fixScrollJump:(s,u)=>{const o=e._getScrollDirection();if(o===U){const i=O(s);i&&c(i,!0)}else if(o===P){const i=e._getScrollOffset();if(i!==0){const d=O(s);if(e._getScrollSize()-(i+e._getViewportSize()+d)<=0)d&&c(i+d);else{const a=s.reduce((m,[g,f])=>(g<u&&(m+=f),m),0);a&&c(a,!0)}}}}}},y="current",he=e=>{const t=_.useRef();return t[y]||(t[y]=e())},te=e=>{const t=_.useRef(e);return N(()=>{t[y]=e},[e]),t},ge=_.memo(({_children:e,_scroller:t,_store:n,_index:r,_element:l})=>{const p=_.useRef(null),z=k(n._subscribe,()=>n._getItemOffset(r)),S=k(n._subscribe,()=>n._isUnmeasuredItem(r));return N(()=>t._initItem(p[y],r),[r]),E(l,{ref:p,style:_.useMemo(()=>{const h=n._isHorizontal(),b=n._isRtl()?"right":"left",c={margin:0,padding:0,position:"absolute",[h?"height":"width"]:"100%",[h?"top":b]:0,[h?b:"top"]:z,visibility:S?"hidden":"visible"};return h&&(c.display="flex"),c},[z,S]),children:e})}),Ie=e=>!L(e)||typeof e=="boolean",ve=_.forwardRef(({children:e,scrollSize:t,scrolling:n,horizontal:r,attrs:l},p)=>E("div",{ref:p,...l,children:E("div",{style:_.useMemo(()=>({position:"relative",visibility:"hidden",width:r?t:"100%",height:r?"100%":t,pointerEvents:n?"none":"auto"}),[t,n]),children:e})})),ze=({_children:e,_ref:t,_store:n,_element:r,_scrolling:l,_attrs:p})=>{const z=k(n._subscribe,n._getScrollSize),S=n._isHorizontal();return E(r,{ref:t,scrollSize:z,scrolling:l,horizontal:S,attrs:_.useMemo(()=>({...p,style:{overflow:S?"auto hidden":"hidden auto",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...p.style}}),[p]),children:e})},ne=_.forwardRef(({children:e,itemSize:t=40,overscan:n=4,initialItemCount:r,horizontal:l,rtl:p,element:z=ve,itemElement:S="div",onScroll:h,onScrollStop:b,onRangeChange:c,...w},O)=>{const s=_.useMemo(()=>{const v=[];return _.Children.forEach(e,I=>{Ie(I)||v.push(I)}),v},[e]),u=s.length,o=te(h),i=te(b),[d,a]=_.useState(new Set),[m,g]=_.useState(!1),[f,R]=he(()=>{const v=pe(u,t,!!l,!!p,r,I=>{g(I),I||(a(new Set),i[y]&&i[y]())},I=>{o[y]&&o[y](I)});return[v,Se(v)]});f._updateCacheLength(u);const[W,A]=k(f._subscribe,f._getRange),q=k(f._subscribe,f._getJump),K=_.useRef(null);N(()=>R._initRoot(K[y]),[]),N(()=>{q.length&&R._fixScrollJump(q,W)},[q]),_.useEffect(()=>{c&&c({start:W,end:A,count:u})},[W,A]),_.useImperativeHandle(O,()=>({get scrollOffset(){return f._getScrollOffset()},get scrollSize(){return R._getActualScrollSize()},get viewportSize(){return f._getViewportSize()},scrollToIndex(v){R._scrollToIndex(v,u)},scrollTo:R._scrollTo,scrollBy(v){R._scrollTo(f._getScrollOffset()+v)}}),[u]);const j=T(W-n,0),Y=M(A+n,u-1),ue=_.useMemo(()=>{const v=[];for(let I=j;I<=Y;I++)d.add(I);return d.forEach(I=>{const V=s[I];L(V)&&v.push(E(ge,{_scroller:R,_store:f,_index:I,_element:S,_children:V},(V==null?void 0:V.key)||I))}),v},[s,d,j,Y]);return E(ze,{_ref:K,_store:f,_element:z,_scrolling:m,_children:ue,_attrs:w})});try{ne.displayName="VList",ne.__docgenInfo={description:"Virtualized list component. See {@link VListProps} and {@link VListHandle}.",displayName:"VList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},itemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"itemSize",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},rtl:{defaultValue:null,description:"You have to set true if you use this component under `direction: rtl` style.",name:"rtl",required:!1,type:{name:"boolean"}},element:{defaultValue:{value:`forwardRef<any, CustomWindowComponentProps>(
  (
    { children, scrollSize, scrolling, horizontal, attrs },
    ref
  ): ReactElement => {
    return (
      <div ref={ref} {...attrs}>
        <div
          style={useMemo((): CSSProperties => {
            return {
              position: "relative",
              visibility: "hidden",
              width: horizontal ? scrollSize : "100%",
              height: horizontal ? "100%" : scrollSize,
              pointerEvents: scrolling ? "none" : "auto",
            };
          }, [scrollSize, scrolling])}
        >
          {children}
        </div>
      </div>
    );
  }
)`},description:`Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
@defaultValue {@link DefaultWindow }`,name:"element",required:!1,type:{name:"ForwardRefExoticComponent<CustomWindowComponentProps & RefAttributes<any>>"}},itemElement:{defaultValue:{value:"div"},description:`Customized element type for item element. This element will get {@link CustomItemComponentProps} as props.
@defaultValue "div"`,name:"itemElement",required:!1,type:{name:"CustomItemComponentOrElement"}},onScroll:{defaultValue:null,description:`Callback invoked whenever scroll offset changes.
@param offset Current scrollTop or scrollLeft.`,name:"onScroll",required:!1,type:{name:"(offset: number) => void"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(payload: { start: number; end: number; count: number; }) => void"}}}}}catch{}export{ne as V};
//# sourceMappingURL=VList-54791ac2.js.map
