import{r as z}from"./index-c6dae603.js";import{r as re}from"./index-eb008d06.js";import{j as q}from"./jsx-runtime-c3d7f245.js";const R=Math.min,E=Math.max,oe=Math.abs,j=Date.now,Ee=Object.values,X=setTimeout,y=e=>e!=null,ie=e=>{const t=[...e].sort((s,r)=>s-r),n=e.length/2|0;return t.length%2===0?(t[n-1]+t[n])/2:t[n]},Q=(e,t)=>{let n;const s=()=>{y(n)&&clearTimeout(n)},r=()=>{s(),n=X(()=>{n=null,e()},t)};return r._cancel=s,r},ue=(e,t)=>{let n=j()-t;return(...s)=>{const r=j();n+t<r&&(n=r,e(...s))}},D=e=>{let t,n;return(...s)=>(t||(t=!0,n=e(...s)),n)},L=-1,T=(e,t)=>{const n=e._sizes[t];return n===L?e._defaultItemSize:n},le=(e,t,n)=>{const s=e._sizes[t]===L;return e._sizes[t]=n,e._measuredOffsetIndex=R(t,e._measuredOffsetIndex),s},Y=(e,t,n)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return n?e._offsets[t]+T(e,t):e._offsets[t];let s=e._measuredOffsetIndex,r=e._offsets[s];for(;s<=t&&(e._offsets[s]=r,!(s===t&&!n));)r+=T(e,s),s++;return e._measuredOffsetIndex=t,r},ce=e=>Y(e,e._length-1,!0),F=(e,t)=>Y(e,t),$=(e,t,n)=>{let s=0;if(n>=0)for(;t<e._length-1;){const r=T(e,t++);if((s+=r)>=n){s-r/2>=n&&t--;break}}else for(;t>0;){const r=T(e,--t);if((s-=r)<=n){s+r/2<n&&t++;break}}return R(E(t,0),e._length-1)},G=(e,t,n,s)=>$(e,n,t-s),fe=(e,t,n)=>{for(let s=t;s<=n;s++)if(e._sizes[s]===L)return!0;return!1},ae=e=>{const t=e._sizes.filter(s=>s!==L),n=t[0];e._defaultItemSize=t.every(s=>s===n)?n:ie(t)},de=(e,t)=>{const n=[],s=[];for(let r=0;r<e;r++)n.push(L),s.push(r===0?0:L);return{_defaultItemSize:t,_length:e,_measuredOffsetIndex:0,_sizes:n,_offsets:s}},_e=(e,t)=>{const n=[],s=[];for(let r=0;r<t;r++){const f=e._sizes[r];if(n.push(y(f)?f:L),r===0)s.push(0);else{const o=e._offsets[r];s.push(y(o)?o:L)}}e._length=t,e._measuredOffsetIndex=R(e._measuredOffsetIndex,t-1),e._sizes=n,e._offsets=s},V=(e,t)=>t.reduce((n,[s,r])=>n+(r-T(e,s)),0),me=1.5,C=0,pe=1,Z=2,A=1,U=2,W=3,H=4,J=5,ee=6,te=1,N=2,se=4,P=8,Se=16,Oe=(e,t=40,n=0,s=de(e,t),r,f)=>{let o=t*E(n-1,0),u=0,c=0,i=0,a=C,d=!1,_=!1,g=[0,n];const p=new Set,m=()=>ce(s),w=()=>m()-o,O=l=>{const S=a;return a=l,a!==S&&(a===C||S===C)};return{_getCache(){return JSON.parse(JSON.stringify(s))},_getRange(){const[l,S]=g,h=F(s,l),I=G(s,u,l,h),b=$(s,I,o);return l===I&&S===b?g:g=[I,b]},_isUnmeasuredItem(l){return s._sizes[l]===L},_hasUnmeasuredItemsInRange(l){return fe(s,E(0,l-2),R(s._length-1,l+2))},_getItemOffset(l){const S=F(s,l);return r?S+E(0,o-m()):S},_getItemSize(l){return T(s,l)},_getItemLength(){return s._length},_getScrollOffset(){return u},_getScrollOffsetMax:w,_getViewportSize(){return o},_getScrollSize:m,_getCorrectedScrollSize(){return E(m(),o)},_getJumpCount(){return c},_flushJump(){const l=i;return i=0,l},_getItemIndexForScrollTo(l){return G(s,l,0,0)},_subscribe(l,S){const h=[l,S];return p.add(h),()=>{p.delete(h)}},_update(l,S){let h,I=0;switch(l){case A:{const b=S.filter(([x,M])=>s._sizes[x]!==M);if(!b.length)break;let v=0;if(a===Z)v=V(s,b);else if(d){const[x]=g;u===0||(u>w()-me?v=V(s,b):v=V(s,b.filter(([M])=>M<x)))}v&&(i=v,c++,I+=se);let K=!1;b.forEach(([x,M])=>{le(s,x,M)&&(K=!0)}),f&&K&&!u&&ae(s),I+=N,_=h=!0;break}case U:{o!==S&&(o=S,I=N);break}case W:case H:{if(u===S)break;if(l===W){const b=_;_=!1,(a===C||!b)&&!d&&O(u>S?Z:pe)&&(I+=P),h=oe(u-S)>o,I+=Se}u=E(0,R(w(),S)),I+=te;break}case J:{O(C)&&(I=P),d=!1;break}case ee:{d=!0;break}}I&&p.forEach(([b,v])=>{I&b&&v(h)})},_getIsScrolling(){return a!==C},_updateCacheLength(l){s._length!==l&&_e(s,l)}}},ge=typeof window<"u"?z.useLayoutEffect:z.useEffect,k="current",ze={},Le=e=>{const t=[];return z.Children.forEach(e,n=>{!y(n)||typeof n=="boolean"||t.push(n)}),t},we=e=>{const t=z.useRef(e);return ge(()=>{t[k]=e},[e]),t},Re=te+N,Ce=N,ye=se,Te=P,Ne=N,xe=(e,t,n,s)=>{const[r,f]=z.useState(t),o=we(t);if(z.useLayoutEffect(()=>{const u=()=>{f(()=>o[k]())};return e._subscribe(n,c=>{c?re.flushSync(u):u()})},[]),s){const u=t();r!==u&&f(u)}return r},Ie=D(e=>{const t="scrollLeft",n=e[t];e[t]=1;const s=e[t]<1;return e[t]=n,s}),ne=(e,t,n)=>ue(s=>{if(e._getIsScrolling()&&!s.ctrlKey&&(t?s.deltaX:s.deltaY)){const r=e._getScrollOffset();r>0&&r<e._getScrollOffsetMax()&&n()}},50),Me=(e,t,n)=>{let s,r;const f=t?"scrollLeft":"scrollTop",o=()=>s?t?s.scrollWidth:s.scrollHeight:0,u=(i,a)=>t&&n?Ie(s)||a?-i:e._getScrollOffsetMax()-i:i,c=async(i,a)=>{if(!s)return;const d=()=>R(a(),o()-e._getViewportSize());for(;e._update(H,d()),!!e._hasUnmeasuredItemsInRange(i);){r&&r[1]();const _=e._subscribe(N,()=>{r&&r[0]()});try{await new Promise((g,p)=>{let m=!1;const w=()=>{m||(m=!0,g(),r=void 0)};r=[w,p],X(w,250)})}catch{return}finally{_()}}s[f]=u(d()),e._update(ee)};return{_initRoot(i){s=i;const a=()=>{e._update(W,u(i[f]))},d=Q(()=>{a(),e._update(J)},150),_=()=>{a(),d()},g=ne(e,t,d);return i.addEventListener("scroll",_),i.addEventListener("wheel",g,{passive:!0}),()=>{i.removeEventListener("scroll",_),i.removeEventListener("wheel",g),d._cancel()}},_getActualScrollSize:o,_scrollTo(i){i=E(i,0),c(e._getItemIndexForScrollTo(i),()=>i)},_scrollToIndex(i){i=E(R(i,e._getItemLength()-1),0),c(i,()=>e._getItemOffset(i))},_fixScrollJump:i=>{s&&(s[f]+=u(i,!0))}}},Ae=(e,t)=>{const n=t?"scrollX":"scrollY",s=t?"offsetLeft":"offsetTop";return{_initRoot(r){let f=!1;const o=(_,g)=>{const p=g+_[s],m=_.offsetParent;return _===document.body||!m?p:o(m,p)},u=()=>{f&&e._update(W,window[n]-o(r,0))},c=Q(()=>{u(),e._update(J)},150),i=()=>{u(),c()},a=ne(e,t,c),d=new IntersectionObserver(([_])=>{f=_.isIntersecting});return d.observe(r),window.addEventListener("scroll",i),window.addEventListener("wheel",a,{passive:!0}),()=>{d.disconnect(),window.removeEventListener("scroll",i),window.removeEventListener("wheel",a),c._cancel()}},_fixScrollJump:r=>{window.scrollBy(t?r:0,t?0:r)}}},Ue=e=>{const t=z.useRef();return t[k]||(t[k]=e())},We=(e,t)=>{let n;const s=t?"width":"height",r=new WeakMap,f=D(()=>new ResizeObserver(o=>{const u=[];for(const{target:c,contentRect:i}of o)if(c===n)e._update(U,i[s]);else{const a=r.get(c);y(a)&&u.push([a,i[s]])}u.length&&e._update(A,u)}));return{_observeRoot(o){n=o;const u=f();return u.observe(o),()=>{u.disconnect()}},_observeItem(o,u){const c=f();return r.set(o,u),c.observe(o),()=>{r.delete(o),c.unobserve(o)}}}},ke=(e,t)=>{const n=t?"width":"height",s=t?"innerWidth":"innerHeight",r=new WeakMap,f=D(()=>new ResizeObserver(o=>{const u=[];for(const{target:c,contentRect:i}of o){const a=r.get(c);y(a)&&u.push([a,i[n]])}u.length&&e._update(A,u)}));return{_observeRoot(){const o=()=>{e._update(U,window[s])};return window.addEventListener("resize",o),o(),()=>{window.removeEventListener("resize",o),f().disconnect()}},_observeItem(o,u){const c=f();return r.set(o,u),c.observe(o),()=>{r.delete(o),c.unobserve(o)}}}},De=(e,t)=>{let n;const s="height",r="width",f=new WeakMap,o=new Set,u=new Set,c=new Map,i=(d,_)=>`${d}-${_}`,a=D(()=>new ResizeObserver(d=>{const _=new Set,g=new Set;for(const{target:p,contentRect:m}of d)if(p===n)e._update(U,m[s]),t._update(U,m[r]);else{const w=f.get(p);if(w){const[O,l]=w,S=i(O,l),h=c.get(S),I=[m[s],m[r]];let b,v;h?(h[0]!==I[0]&&(b=!0),h[1]!==I[1]&&(v=!0)):b=v=!0,b&&_.add(O),v&&g.add(l),(b||v)&&c.set(S,I)}}if(_.size){const p=[];_.forEach(m=>{let w=0;u.forEach(O=>{const l=c.get(i(m,O));l&&(w=E(w,l[0]))}),w&&p.push([m,w])}),e._update(A,p)}if(g.size){const p=[];g.forEach(m=>{let w=0;o.forEach(O=>{const l=c.get(i(O,m));l&&(w=E(w,l[1]))}),w&&p.push([m,w])}),t._update(A,p)}}));return{_observeRoot(d){n=d;const _=a();return _.observe(d),()=>{_.disconnect()}},_observeItem(d,_,g){const p=a();return f.set(d,[_,g]),o.add(_),u.add(g),p.observe(d),()=>{f.delete(d),p.unobserve(d)}}}},B=z.forwardRef(({children:e,attrs:t,width:n,height:s,scrolling:r},f)=>q("div",{ref:f,...t,children:q("div",{style:z.useMemo(()=>({position:"relative",visibility:"hidden",width:n??"100%",height:s??"100%",pointerEvents:r?"none":"auto"}),[n,s,r]),children:e})}));try{B.displayName="Viewport",B.__docgenInfo={description:"",displayName:"Viewport",props:{children:{defaultValue:null,description:"Renderable item elements.",name:"children",required:!0,type:{name:"ReactNode"}},attrs:{defaultValue:null,description:"Attributes that should be passed to the scrollable element.",name:"attrs",required:!0,type:{name:"ViewportComponentAttributes"}},height:{defaultValue:null,description:"Total height of items. It's undefined if component is not vertically scrollable.",name:"height",required:!0,type:{name:"number | undefined"}},width:{defaultValue:null,description:"Total width of items. It's undefined if component is not horizontally scrollable.",name:"width",required:!0,type:{name:"number | undefined"}},scrolling:{defaultValue:null,description:"Currently component is scrolling or not.",name:"scrolling",required:!0,type:{name:"boolean"}}}}}catch{}export{Re as S,Se as U,B as V,Ue as a,xe as b,ge as c,ze as d,y as e,Le as f,Oe as g,ke as h,Ae as i,Te as j,ye as k,Ce as l,E as m,R as n,Ne as o,De as p,Me as q,k as r,We as s,we as u,Ee as v};
//# sourceMappingURL=Viewport-2b852d0c.js.map
