import{r as b}from"./index-5284b0bf.js";import{r as j}from"./index-480187bb.js";const N=Math.min,R=Math.max,q=Math.abs,J=Date.now,L=e=>e!=null,F=(e,t)=>Array.from({length:e},(s,r)=>t(r)),B=(e,t)=>{let s;const r=()=>{L(s)&&clearTimeout(s)},c=()=>{r(),s=setTimeout(()=>{s=null,e()},t)};return c._cancel=r,c},H=(e,t)=>{let s=J()-t;return(...r)=>{const c=J();s+t<c&&(s=c,e(...r))}},V=e=>{let t,s;return(...r)=>(t||(t=!0,s=e(...r)),s)},D=-1,E=(e,t)=>{const s=e._sizes[t];return s===D?e._defaultItemSize:s},ee=(e,t,s)=>{e._sizes[t]=s,e._measuredOffsetIndex=N(t,e._measuredOffsetIndex)},Q=(e,t,s)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return s?e._offsets[t]+E(e,t):e._offsets[t];let r=e._measuredOffsetIndex,c=e._offsets[r];for(;r<=t&&(e._offsets[r]=c,!(r===t&&!s));)c+=E(e,r),r++;return e._measuredOffsetIndex=t,c},te=e=>Q(e,e._length-1,!0),P=(e,t)=>Q(e,t),X=(e,t,s)=>{let r=0;if(s>=0)for(;t<e._length-1;){const c=E(e,t++);if((r+=c)>=s){r-c/2>=s&&t--;break}}else for(;t>0;){const c=E(e,--t);if((r-=c)<=s){r+c/2<s&&t++;break}}return N(R(t,0),e._length-1)},Z=(e,t,s,r)=>X(e,s,t-r),$=X,se=(e,t,s)=>{for(let r=t;r<=s;r++)if(e._sizes[r]===D)return!0;return!1},G=(e,t,s)=>({_defaultItemSize:t,_length:e,_measuredOffsetIndex:s?N(s._measuredOffsetIndex,e-1):0,_sizes:F(e,r=>{const c=s&&s._sizes[r];return L(c)?c:D}),_offsets:F(e,r=>{if(r===0)return 0;const c=s&&s._offsets[r];return L(c)?c:D})}),v=0,Y=1,k=2,W=3,T=1,A=2,x=3,K=4,fe=(e,t,s=0,r,c,I)=>{let S=t*R(s-1,0),a=0,p=[],u=G(e,t),z=v,o=[0,s],_;const l=new Set,f=()=>te(u);return{_getRange(){const[n,i]=o,d=P(u,n),m=Z(u,a,n,d),g=$(u,m,S);return n===m&&i===g?o:o=[m,g]},_isUnmeasuredItem(n){return u._sizes[n]===D},_hasUnmeasuredItemsInRange(n){return se(u,n,$(u,n,S))},_getItemOffset(n){const i=P(u,n);return r?i+R(0,S-f()):i},_getItemSize(n){return E(u,n)},_getScrollOffset(){return a},_getViewportSize(){return S},_getScrollSize(){return f()},_getScrollableDomSize(){return R(f(),S)},_getJump(){return p},_getItemIndexForScrollTo(n){return Z(u,n,0,0)},_waitForScrollDestinationItemsMeasured(){return _&&_[1](),new Promise((n,i)=>{_=[()=>{Promise.resolve().then(()=>{n(),_=void 0})},i]})},_subscribe(n){return l.add(n),()=>{l.delete(n)}},_update(n,i){let d;(()=>{switch(n){case T:{const g=i.filter(([w,O])=>u._sizes[w]!==O);if(!g.length)return!1;const h=[];return g.forEach(([w,O])=>{h.push([O-E(u,w),w]),ee(u,w,O)}),p=h,d=!0,!0}case A:return S===i?!1:(S=i,!0);case x:case K:{const g=a,h=(a=i)!==g;return h&&n===x&&(d=q(g-i)>S),h}}})()&&(l.forEach(g=>{g(d)}),n===x?I(a):_&&n===T&&_[0]())},_getScrollDirection(){return z},_setScrollDirection(n){const i=z;z=n,z===v?c(!1):i===v&&(z===Y||z===k)&&c(!0)},_updateCacheLength(n){u._length!==n&&(u=G(n,t,u))}}},re=typeof window<"u"?b.useLayoutEffect:b.useEffect,M="current",le=e=>!L(e)||typeof e=="boolean",ne=e=>{const t=b.useRef(e);return re(()=>{t[M]=e},[e]),t},ue=(e,t,s)=>{const[r,c]=b.useState(t),I=ne(t);if(b.useLayoutEffect(()=>{const S=()=>{c(()=>I[M]())};return e._subscribe(a=>{a?j.flushSync(S):S()})},[]),s){const S=t();r!==S&&c(S)}return r},oe=V(e=>{const t="scrollLeft",s=e[t];e[t]=1;const r=e[t]<1;return e[t]=s,r}),ae=(e,t,s,r)=>{let c;const I=t?"scrollLeft":"scrollTop",S=()=>c?t?c.scrollWidth:c.scrollHeight:0,a=(o,_)=>oe(c)||_?-o:e._getScrollSize()-e._getViewportSize()-o,p=(o,_)=>{c&&(t&&s&&(o=a(o,_)),_?c[I]+=o:(c[I]=o,e._setScrollDirection(W)))},u=async(o,_)=>{const l=()=>{let f=_();const n=S(),i=e._getViewportSize();return n-(f+i)<=0&&(f=n-i),f};if(e._hasUnmeasuredItemsInRange(o)){do{e._update(K,l());try{await e._waitForScrollDestinationItemsMeasured()}catch{return}}while(e._hasUnmeasuredItemsInRange(o));p(l())}else{const f=l();p(f),e._update(K,f)}},z=o=>o.reduce((_,[l])=>_+l,0);return{_initRoot(o){c=o;const _=()=>{let i=o[I];t&&s&&(i=a(i));const d=e._getScrollOffset();if(d===i)return;const m=e._getScrollDirection(),g=r();(m===v||!g)&&m!==W&&e._setScrollDirection(d>i?k:Y),e._update(x,i)},l=B(()=>{_(),e._setScrollDirection(v)},150),f=()=>{_(),l()},n=H(i=>{if(e._getScrollDirection()!==v&&!i.ctrlKey&&(t?i.deltaX:i.deltaY)){const d=e._getScrollOffset();d>0&&d<e._getScrollSize()-e._getViewportSize()&&l()}},50);return o.addEventListener("scroll",f),o.addEventListener("wheel",n,{passive:!0}),()=>{o.removeEventListener("scroll",f),o.removeEventListener("wheel",n),l._cancel()}},_getActualScrollSize:S,_scrollTo(o){o=R(o,0),u(e._getItemIndexForScrollTo(o),()=>o)},_scrollToIndex(o,_){o=R(N(o,_-1),0),u(o,()=>e._getItemOffset(o))},_fixScrollJump:(o,_)=>{const l=e._getScrollDirection();if(l===k){const f=z(o);f&&p(f,!0)}else if(l===W){const f=e._getScrollOffset();if(f!==0){const n=z(o);if(e._getScrollSize()-(f+e._getViewportSize()+n)<=0)n&&p(f+n);else{const i=o.reduce((d,[m,g])=>(g<_&&(d+=m),d),0);i&&p(i,!0)}}}}}},_e=e=>{const t=b.useRef();return t[M]||(t[M]=e())},de=(e,t)=>{let s=!1,r;const c=t?"width":"height",I=new WeakMap,S=V(()=>new ResizeObserver(a=>{const p=[];for(const{target:u,contentRect:z}of a)if(u===r)e._update(A,z[c]);else{const o=I.get(u);L(o)&&p.push([o,z[c]])}p.length&&(e._update(T,p),s=!0)}));return{_observeRoot(a){r=a;const p=S();return p.observe(a),()=>{p.disconnect()}},_observeItem(a,p){const u=S();return I.set(a,p),u.observe(a),()=>{I.delete(a),u.unobserve(a)}},_isJustResized(){const a=s;return s=!1,a}}},Se=(e,t)=>{let s=!1,r=!1,c;const I="height",S="width",a=new WeakMap,p=new Set,u=new Set,z=new Map,o=(l,f)=>`${l}-${f}`,_=V(()=>new ResizeObserver(l=>{const f=new Set,n=new Set;for(const{target:i,contentRect:d}of l)if(i===c)e._update(A,d[I]),t._update(A,d[S]);else{const m=a.get(i);if(m){const[g,h]=m,w=o(g,h),O=z.get(w),U=[d[I],d[S]];let C,y;O?(O[0]!==U[0]&&(C=!0),O[1]!==U[1]&&(y=!0)):C=y=!0,C&&f.add(g),y&&n.add(h),(C||y)&&z.set(w,U)}}if(f.size){const i=[];f.forEach(d=>{let m=0;u.forEach(g=>{const h=z.get(o(d,g));h&&(m=R(m,h[0]))}),m&&i.push([d,m])}),e._update(T,i),s=!0}if(n.size){const i=[];n.forEach(d=>{let m=0;p.forEach(g=>{const h=z.get(o(g,d));h&&(m=R(m,h[1]))}),m&&i.push([d,m])}),t._update(T,i),r=!0}}));return{_observeRoot(l){c=l;const f=_();return f.observe(l),()=>{f.disconnect()}},_observeItem(l,f,n){const i=_();return a.set(l,[f,n]),p.add(f),u.add(n),i.observe(l),()=>{a.delete(l),i.unobserve(l)}},_isJustResized(l){const f=l?r:s;return l?r=!1:s=!1,f}}};export{re as a,ne as b,_e as c,fe as d,L as e,ae as f,N as g,de as h,le as i,Se as j,R as m,M as r,ue as u};
//# sourceMappingURL=resizer-a7c3115e.js.map
