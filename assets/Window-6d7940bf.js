import{r as R}from"./index-c6dae603.js";import{r as ue}from"./index-eb008d06.js";import{j as B}from"./jsx-runtime-c3d7f245.js";const y=Math.min,O=Math.max,fe=Math.abs,X=Date.now,ye=Object.values,H=setTimeout,N=e=>e!=null,ae=e=>{const t=[...e].sort((s,r)=>s-r),n=e.length/2|0;return t.length%2===0?(t[n-1]+t[n])/2:t[n]},ee=(e,t)=>{let n;const s=()=>{N(n)&&clearTimeout(n)},r=()=>{s(),n=H(()=>{n=null,e()},t)};return r._cancel=s,r},de=(e,t)=>{let n=X()-t;return(...s)=>{const r=X();n+t<r&&(n=r,e(...s))}},K=e=>{let t,n;return(...s)=>(t||(t=!0,n=e(...s)),n)},E=-1,A=(e,t)=>{const n=e._sizes[t];return n===E?e._defaultItemSize:n},_e=(e,t,n)=>{const s=e._sizes[t]===E;return e._sizes[t]=n,e._measuredOffsetIndex=y(t,e._measuredOffsetIndex),s},te=(e,t,n)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return n?e._offsets[t]+A(e,t):e._offsets[t];let s=e._measuredOffsetIndex,r=e._offsets[s];for(;s<=t&&(e._offsets[s]=r,!(s===t&&!n));)r+=A(e,s),s++;return e._measuredOffsetIndex=t,r},me=e=>te(e,e._length-1,!0),Z=(e,t)=>te(e,t),se=(e,t,n)=>{let s=0;if(n>=0)for(;t<e._length-1;){const r=A(e,t++);if((s+=r)>=n){s-r/2>=n&&t--;break}}else for(;t>0;){const r=A(e,--t);if((s-=r)<=n){s+r/2<n&&t++;break}}return y(O(t,0),e._length-1)},G=(e,t,n,s)=>se(e,n,t-s),pe=(e,t,n)=>{for(let s=t;s<=n;s++)if(e._sizes[s]===E)return!0;return!1},ge=e=>{const t=e._sizes.filter(s=>s!==E),n=t[0];e._defaultItemSize=t.every(s=>s===n)?n:ae(t)},he=(e,t)=>{const n=[],s=[];for(let r=0;r<e;r++)n.push(E),s.push(r===0?0:E);return{_defaultItemSize:t,_length:e,_measuredOffsetIndex:0,_sizes:n,_offsets:s}},we=(e,t)=>{const n=[],s=[];for(let r=0;r<t;r++){const a=e._sizes[r];if(n.push(N(a)?a:E),r===0)s.push(0);else{const c=e._offsets[r];s.push(N(c)?c:E)}}e._length=t,e._measuredOffsetIndex=y(e._measuredOffsetIndex,t-1),e._sizes=n,e._offsets=s},V=e=>e.reduce((t,[n])=>t+n,0),Q=(e,t)=>t.map(([n,s])=>[s-A(e,n),n]),Ie=1.5,x=0,Se=1,Y=2,k=1,U=2,J=3,ne=4,q=5,re=6,oe=1,W=2,ie=4,j=8,be=16,Ce=(e,t,n=0,s,r)=>{const a=!t,c=t||40,o=r??he(e,c);let l=c*O(n-1,0),i=0,m=0,d=0,f=x,h=!1,g=!1,p=[0,n];const w=new Set,v=()=>me(o),b=()=>v()-l,D=()=>{const u=g;return g=!1,u},C=u=>{const _=f;return f=u,f!==_&&(f===x||_===x)};return{_getCache(){return JSON.parse(JSON.stringify(o))},_getRange(){const[u,_]=p,I=Z(o,u),S=G(o,i,u,I),z=se(o,S,l);return u===S&&_===z?p:p=[S,z]},_isUnmeasuredItem(u){return o._sizes[u]===E},_hasUnmeasuredItemsInRange(u){return pe(o,O(0,u-2),y(o._length-1,u+2))},_getItemOffset(u){const _=Z(o,u);return s?_+O(0,l-v()):_},_getItemSize(u){return A(o,u)},_getItemLength(){return o._length},_getScrollOffset(){return i},_getScrollOffsetMax:b,_getViewportSize(){return l},_getScrollSize:v,_getCorrectedScrollSize(){return O(v(),l)},_getJumpCount(){return m},_flushJump(){const u=d;return d=0,u},_getItemIndexForScrollTo(u){return G(o,u,0,0)},_subscribe(u,_){const I=[u,_];return w.add(I),()=>{w.delete(I)}},_update(u,_){let I,S=0;switch(u){case k:{const z=_.filter(([T,M])=>o._sizes[T]!==M);if(!z.length)break;let L=0;if(f===Y)L=V(Q(o,z));else if(h){const T=Q(o,z),[M]=p;i===0||(i>b()-Ie?L=V(T):L=V(T.filter(([,le])=>le<M)))}L&&(d=L,m++,S+=ie);let F=!1;z.forEach(([T,M])=>{_e(o,T,M)&&(F=!0)}),a&&F&&!i&&ge(o),S+=W,g=I=!0;break}case U:{l!==_&&(l=_,S=W);break}case J:case ne:{if(i===_)break;if(u===J){const z=D();(f===x||!z)&&!h&&C(i>_?Y:Se)&&(S+=j),I=fe(i-_)>l,S+=be}i=O(0,y(b(),_)),S+=oe;break}case q:{C(x)&&(S=j),h=!1;break}case re:{h=!0;break}}S&&w.forEach(([z,L])=>{S&z&&L(I)})},_getIsScrolling(){return f!==x},_updateCacheLength(u){o._length!==u&&we(o,u)}}},ve=typeof window<"u"?R.useLayoutEffect:R.useEffect,P="current",Te=e=>{const t=[];return R.Children.forEach(e,n=>{!N(n)||typeof n=="boolean"||t.push(n)}),t},ze=e=>{const t=R.useRef(e);return ve(()=>{t[P]=e},[e]),t},xe=(e,t,n)=>{const[s,r]=R.useState(t),a=ze(t);if(R.useLayoutEffect(()=>{let c;t===e._getRange?c=oe+W:t===e._getCorrectedScrollSize?c=W:t===e._getJumpCount?c=ie:t===e._getIsScrolling?c=j:c=W;const o=()=>{r(()=>a[P]())};return e._subscribe(c,l=>{l?ue.flushSync(o):o()})},[]),n){const c=t();s!==c&&r(c)}return s},Oe=K(e=>{const t="scrollLeft",n=e[t];e[t]=1;const s=e[t]<1;return e[t]=n,s}),ce=(e,t,n)=>de(s=>{if(e._getIsScrolling()&&!s.ctrlKey&&(t?s.deltaX:s.deltaY)){const r=e._getScrollOffset();r>0&&r<e._getScrollOffsetMax()&&n()}},50),We=(e,t,n)=>{let s,r;const a=t?"scrollLeft":"scrollTop",c=()=>s?t?s.scrollWidth:s.scrollHeight:0,o=(i,m)=>t&&n?Oe(s)||m?-i:e._getScrollOffsetMax()-i:i,l=async(i,m)=>{if(!s)return;const d=()=>y(m(),c()-e._getViewportSize());for(;e._update(ne,d()),!!e._hasUnmeasuredItemsInRange(i);){r&&r[1]();const f=e._subscribe(W,()=>{r&&r[0]()});try{await new Promise((h,g)=>{let p=!1;const w=()=>{p||(p=!0,h(),r=void 0)};r=[w,g],H(w,250)})}catch{return}finally{f()}}s[a]=o(d()),e._update(re)};return{_initRoot(i){s=i;const m=()=>{e._update(J,o(i[a]))},d=ee(()=>{m(),e._update(q)},150),f=()=>{m(),d()},h=ce(e,t,d);return i.addEventListener("scroll",f),i.addEventListener("wheel",h,{passive:!0}),()=>{i.removeEventListener("scroll",f),i.removeEventListener("wheel",h),d._cancel()}},_getActualScrollSize:c,_scrollTo(i){i=O(i,0),l(e._getItemIndexForScrollTo(i),()=>i)},_scrollToIndex(i){i=O(y(i,e._getItemLength()-1),0),l(i,()=>e._getItemOffset(i))},_fixScrollJump:i=>{s&&(s[a]+=o(i,!0))}}},Ne=(e,t)=>{const n=t?"scrollX":"scrollY",s=t?"offsetLeft":"offsetTop";return{_initRoot(r){let a=!1;const c=(f,h)=>{const g=h+f[s],p=f.offsetParent;return f===document.body||!p?g:c(p,g)},o=()=>{a&&e._update(J,window[n]-c(r,0))},l=ee(()=>{o(),e._update(q)},150),i=()=>{o(),l()},m=ce(e,t,l),d=new IntersectionObserver(([f])=>{a=f.isIntersecting});return d.observe(r),window.addEventListener("scroll",i),window.addEventListener("wheel",m,{passive:!0}),()=>{d.disconnect(),window.removeEventListener("scroll",i),window.removeEventListener("wheel",m),l._cancel()}},_fixScrollJump:r=>{window.scrollBy(t?r:0,t?0:r)}}},Ae=e=>{const t=R.useRef();return t[P]||(t[P]=e())},Me=(e,t)=>{let n;const s=t?"width":"height",r=new WeakMap,a=K(()=>new ResizeObserver(c=>{const o=[];for(const{target:l,contentRect:i}of c)if(l===n)e._update(U,i[s]);else{const m=r.get(l);N(m)&&o.push([m,i[s]])}o.length&&e._update(k,o)}));return{_observeRoot(c){n=c;const o=a();return o.observe(c),()=>{o.disconnect()}},_observeItem(c,o){const l=a();return r.set(c,o),l.observe(c),()=>{r.delete(c),l.unobserve(c)}}}},ke=(e,t)=>{const n=t?"width":"height",s=t?"innerWidth":"innerHeight",r=new WeakMap,a=K(()=>new ResizeObserver(c=>{const o=[];for(const{target:l,contentRect:i}of c){const m=r.get(l);N(m)&&o.push([m,i[n]])}o.length&&e._update(k,o)}));return{_observeRoot(){const c=()=>{e._update(U,window[s])};return window.addEventListener("resize",c),c(),()=>{window.removeEventListener("resize",c),a().disconnect()}},_observeItem(c,o){const l=a();return r.set(c,o),l.observe(c),()=>{r.delete(c),l.unobserve(c)}}}},Ue=(e,t)=>{let n;const s="height",r="width",a=new WeakMap,c=new Set,o=new Set,l=new Map,i=(d,f)=>`${d}-${f}`,m=K(()=>new ResizeObserver(d=>{const f=new Set,h=new Set;for(const{target:g,contentRect:p}of d)if(g===n)e._update(U,p[s]),t._update(U,p[r]);else{const w=a.get(g);if(w){const[v,b]=w,D=i(v,b),C=l.get(D),u=[p[s],p[r]];let _,I;C?(C[0]!==u[0]&&(_=!0),C[1]!==u[1]&&(I=!0)):_=I=!0,_&&f.add(v),I&&h.add(b),(_||I)&&l.set(D,u)}}if(f.size){const g=[];f.forEach(p=>{let w=0;o.forEach(v=>{const b=l.get(i(p,v));b&&(w=O(w,b[0]))}),w&&g.push([p,w])}),e._update(k,g)}if(h.size){const g=[];h.forEach(p=>{let w=0;c.forEach(v=>{const b=l.get(i(v,p));b&&(w=O(w,b[1]))}),w&&g.push([p,w])}),t._update(k,g)}}));return{_observeRoot(d){n=d;const f=m();return f.observe(d),()=>{f.disconnect()}},_observeItem(d,f,h){const g=m();return a.set(d,[f,h]),c.add(f),o.add(h),g.observe(d),()=>{a.delete(d),g.unobserve(d)}}}},$=R.forwardRef(({children:e,attrs:t,width:n,height:s,scrolling:r},a)=>B("div",{ref:a,...t,children:B("div",{style:R.useMemo(()=>({position:"relative",visibility:"hidden",width:n??"100%",height:s??"100%",pointerEvents:r?"none":"auto"}),[n,s,r]),children:e})}));try{$.displayName="Window",$.__docgenInfo={description:"",displayName:"Window",props:{children:{defaultValue:null,description:"Renderable item elements.",name:"children",required:!0,type:{name:"ReactNode"}},attrs:{defaultValue:null,description:"Attributes that should be passed to the scrollable element.",name:"attrs",required:!0,type:{name:"WindowComponentAttributes"}},height:{defaultValue:null,description:"Total height of items. It's undefined if component is not vertically scrollable.",name:"height",required:!0,type:{name:"number | undefined"}},width:{defaultValue:null,description:"Total width of items. It's undefined if component is not horizontally scrollable.",name:"width",required:!0,type:{name:"number | undefined"}},scrolling:{defaultValue:null,description:"Currently component is scrolling or not.",name:"scrolling",required:!0,type:{name:"boolean"}}}}}catch{}export{be as U,$ as W,Ae as a,xe as b,ve as c,Ce as d,N as e,Te as f,ke as g,Ne as h,y as i,Ue as j,We as k,Me as l,O as m,P as r,ze as u,ye as v};
//# sourceMappingURL=Window-6d7940bf.js.map
