import{r as L}from"./index-c6dae603.js";import{r as re}from"./index-eb008d06.js";import{j}from"./jsx-runtime-c3d7f245.js";const R=Math.min,E=Math.max,oe=Math.abs,F=Date.now,Ee=Object.values,X=setTimeout,k=e=>e!=null,ie=e=>{const t=[...e].sort((s,r)=>s-r),n=e.length/2|0;return t.length%2===0?(t[n-1]+t[n])/2:t[n]},Q=(e,t)=>{let n;const s=()=>{k(n)&&clearTimeout(n)},r=()=>{s(),n=X(()=>{n=null,e()},t)};return r._cancel=s,r},le=(e,t)=>{let n=F()-t;return(...s)=>{const r=F();n+t<r&&(n=r,e(...s))}},D=e=>{let t,n;return(...s)=>(t||(t=!0,n=e(...s)),n)},z=-1,y=(e,t)=>{const n=e._sizes[t];return n===z?e._defaultItemSize:n},ue=(e,t,n)=>{const s=e._sizes[t]===z;return e._sizes[t]=n,e._measuredOffsetIndex=R(t,e._measuredOffsetIndex),s},P=(e,t)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return e._offsets[t];let n=e._measuredOffsetIndex,s=e._offsets[n];for(;n<t;)s+=y(e,n),e._offsets[++n]=s;return e._measuredOffsetIndex=t,s},ce=e=>e._length?P(e,e._length-1)+y(e,e._length-1):0,Y=(e,t,n)=>{let s=0;if(n>=0)for(;t<e._length-1;){const r=y(e,t++);if((s+=r)>=n){s-r/2>=n&&t--;break}}else for(;t>0;){const r=y(e,--t);if((s-=r)<=n){s+r/2<n&&t++;break}}return R(e._length-1,E(0,t))},G=(e,t,n,s)=>Y(e,n,t-s),fe=(e,t,n)=>{for(let s=t;s<=n;s++)if(e._sizes[s]===z)return!0;return!1},ae=e=>{const t=e._sizes.filter(s=>s!==z),n=t[0];e._defaultItemSize=t.every(s=>s===n)?n:ie(t)},$=(e,t)=>{for(let n=e._length;n<t;n++)e._sizes.push(z),e._offsets.push(n===0?0:z);e._length=t},de=(e,t)=>{const n={_defaultItemSize:t,_length:0,_measuredOffsetIndex:0,_sizes:[],_offsets:[]};return $(n,e),n},_e=(e,t)=>{const n=t-e._length;if(n>0)$(e,t);else{for(let s=n;s<0;s++)e._sizes.pop(),e._offsets.pop();e._length=t,e._measuredOffsetIndex=R(e._measuredOffsetIndex,t-1)}},V=(e,t)=>t.reduce((n,[s,r])=>n+(r-y(e,s)),0),me=1.5,C=0,pe=1,Z=2,M=1,A=2,U=3,H=4,K=5,ee=6,te=1,T=2,se=4,J=8,ge=16,Oe=(e,t=40,n=0,s=de(e,t),r,_)=>{let i=t*E(n-1,0),l=0,c=0,o=0,f=C,a=!1,d=!1,S=[0,n];const m=new Set,p=()=>ce(s),w=()=>p()-i,O=u=>{const g=f;return f=u,f!==g&&(f===C||g===C)};return{_getCache(){return JSON.parse(JSON.stringify(s))},_getRange(){const[u,g]=S,h=P(s,u),I=G(s,l,u,h),b=Y(s,I,i);return u===I&&g===b?S:S=[I,b]},_isUnmeasuredItem(u){return s._sizes[u]===z},_hasUnmeasuredItemsInRange(u){return fe(s,E(0,u-2),R(s._length-1,u+2))},_getItemOffset(u){const g=P(s,u);return r?g+E(0,i-p()):g},_getItemSize(u){return y(s,u)},_getItemLength(){return s._length},_getScrollOffset(){return l},_getScrollOffsetMax:w,_getViewportSize(){return i},_getCorrectedScrollSize(){return E(p(),i)},_getJumpCount(){return c},_flushJump(){const u=o;return o=0,u},_getItemIndexForScrollTo(u){return G(s,u,0,0)},_subscribe(u,g){const h=[u,g];return m.add(h),()=>{m.delete(h)}},_update(u,g){let h,I=0;switch(u){case M:{const b=g.filter(([x,N])=>s._sizes[x]!==N);if(!b.length)break;let v=0;if(f===Z)v=V(s,b);else if(a){const[x]=S;l===0||(l>w()-me?v=V(s,b):v=V(s,b.filter(([N])=>N<x)))}v&&(o=v,c++,I+=se);let q=!1;b.forEach(([x,N])=>{ue(s,x,N)&&(q=!0)}),_&&q&&!l&&ae(s),I+=T,d=h=!0;break}case A:{i!==g&&(i=g,I=T);break}case U:case H:{if(l===g)break;if(u===U){const b=d;d=!1,(f===C||!b)&&!a&&O(l>g?Z:pe)&&(I+=J),h=oe(l-g)>i,I+=ge}l=R(w(),E(0,g)),I+=te;break}case K:{O(C)&&(I=J),a=!1;break}case ee:{a=!0;break}}I&&m.forEach(([b,v])=>{I&b&&v(h)})},_getIsScrolling(){return f!==C},_updateCacheLength(u){s._length!==u&&_e(s,u)}}},Se=typeof window<"u"?L.useLayoutEffect:L.useEffect,W="current",Le={},Re=e=>{const t=[];return L.Children.forEach(e,n=>{!k(n)||typeof n=="boolean"||t.push(n)}),t},we=e=>{const t=L.useRef(e);return Se(()=>{t[W]=e},[e]),t},ze=te+T,Ce=T,ye=se,Te=J,xe=T,Ne=(e,t,n,s)=>{const[r,_]=L.useState(t),i=we(t);if(L.useLayoutEffect(()=>{const l=()=>{_(()=>i[W]())};return e._subscribe(n,c=>{c?re.flushSync(l):l()})},[]),s){const l=t();r!==l&&_(l)}return r},Ie=D(e=>{const t="scrollLeft",n=e[t];e[t]=1;const s=e[t]<1;return e[t]=n,s}),ne=(e,t,n)=>le(s=>{if(e._getIsScrolling()&&!s.ctrlKey&&(t?s.deltaX:s.deltaY)){const r=e._getScrollOffset();r>0&&r<e._getScrollOffsetMax()&&n()}},50),Me=(e,t,n)=>{let s,r;const _=t?"scrollLeft":"scrollTop",i=()=>s?t?s.scrollWidth:s.scrollHeight:0,l=(o,f)=>t&&n?Ie(s)||f?-o:e._getScrollOffsetMax()-o:o,c=async(o,f)=>{if(!s)return;const a=()=>R(f(),i()-e._getViewportSize());for(;e._update(H,a()),!!e._hasUnmeasuredItemsInRange(o);){r&&r[1]();const d=e._subscribe(T,()=>{r&&r[0]()});try{await new Promise((S,m)=>{let p=!1;const w=()=>{p||(p=!0,S(),r=void 0)};r=[w,m],X(w,250)})}catch{return}finally{d()}}s[_]=l(a()),e._update(ee)};return{_initRoot(o){s=o;const f=()=>{e._update(U,l(o[_]))},a=Q(()=>{f(),e._update(K)},150),d=()=>{f(),a()},S=ne(e,t,a);return o.addEventListener("scroll",d),o.addEventListener("wheel",S,{passive:!0}),()=>{o.removeEventListener("scroll",d),o.removeEventListener("wheel",S),a._cancel()}},_getActualScrollSize:i,_scrollTo(o){o=E(o,0),c(e._getItemIndexForScrollTo(o),()=>o)},_scrollToIndex(o){o=R(e._getItemLength()-1,E(0,o)),c(o,()=>e._getItemOffset(o))},_fixScrollJump:o=>{s&&(s[_]+=l(o,!0))}}},Ae=(e,t)=>{const n=t?"scrollX":"scrollY",s=t?"offsetLeft":"offsetTop";return{_initRoot(r){let _=!1;const i=(d,S)=>{const m=S+d[s],p=d.offsetParent;return d===document.body||!p?m:i(p,m)},l=()=>{_&&e._update(U,window[n]-i(r,0))},c=Q(()=>{l(),e._update(K)},150),o=()=>{l(),c()},f=ne(e,t,c),a=new IntersectionObserver(([d])=>{_=d.isIntersecting});return a.observe(r),window.addEventListener("scroll",o),window.addEventListener("wheel",f,{passive:!0}),()=>{a.disconnect(),window.removeEventListener("scroll",o),window.removeEventListener("wheel",f),c._cancel()}},_fixScrollJump:r=>{window.scrollBy(t?r:0,t?0:r)}}},Ue=e=>{const t=L.useRef();return t[W]||(t[W]=e())},We=(e,t)=>{let n;const s=t?"width":"height",r=new WeakMap,_=D(()=>new ResizeObserver(i=>{const l=[];for(const{target:c,contentRect:o}of i)if(c===n)e._update(A,o[s]);else{const f=r.get(c);k(f)&&l.push([f,o[s]])}l.length&&e._update(M,l)}));return{_observeRoot(i){n=i;const l=_();return l.observe(i),()=>{l.disconnect()}},_observeItem(i,l){const c=_();return r.set(i,l),c.observe(i),()=>{r.delete(i),c.unobserve(i)}}}},ke=(e,t)=>{const n=t?"width":"height",s=t?"innerWidth":"innerHeight",r=new WeakMap,_=D(()=>new ResizeObserver(i=>{const l=[];for(const{target:c,contentRect:o}of i){const f=r.get(c);k(f)&&l.push([f,o[n]])}l.length&&e._update(M,l)}));return{_observeRoot(){const i=()=>{e._update(A,window[s])};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i),_().disconnect()}},_observeItem(i,l){const c=_();return r.set(i,l),c.observe(i),()=>{r.delete(i),c.unobserve(i)}}}},De=(e,t)=>{let n;const s="height",r="width",_=new WeakMap,i=new Set,l=new Set,c=new Map,o=(a,d)=>`${a}-${d}`,f=D(()=>new ResizeObserver(a=>{const d=new Set,S=new Set;for(const{target:m,contentRect:p}of a)if(m===n)e._update(A,p[s]),t._update(A,p[r]);else{const w=_.get(m);if(w){const[O,u]=w,g=o(O,u),h=c.get(g),I=[p[s],p[r]];let b,v;h?(h[0]!==I[0]&&(b=!0),h[1]!==I[1]&&(v=!0)):b=v=!0,b&&d.add(O),v&&S.add(u),(b||v)&&c.set(g,I)}}if(d.size){const m=[];d.forEach(p=>{let w=0;l.forEach(O=>{const u=c.get(o(p,O));u&&(w=E(w,u[0]))}),w&&m.push([p,w])}),e._update(M,m)}if(S.size){const m=[];S.forEach(p=>{let w=0;i.forEach(O=>{const u=c.get(o(O,p));u&&(w=E(w,u[1]))}),w&&m.push([p,w])}),t._update(M,m)}}));return{_observeRoot(a){n=a;const d=f();return d.observe(a),()=>{d.disconnect()}},_observeItem(a,d,S){const m=f();return _.set(a,[d,S]),i.add(d),l.add(S),m.observe(a),()=>{_.delete(a),m.unobserve(a)}}}},B=L.forwardRef(({children:e,attrs:t,width:n,height:s,scrolling:r},_)=>j("div",{ref:_,...t,children:j("div",{style:L.useMemo(()=>({position:"relative",visibility:"hidden",width:n??"100%",height:s??"100%",pointerEvents:r?"none":"auto"}),[n,s,r]),children:e})}));try{B.displayName="Viewport",B.__docgenInfo={description:"",displayName:"Viewport",props:{children:{defaultValue:null,description:"Renderable item elements.",name:"children",required:!0,type:{name:"ReactNode"}},attrs:{defaultValue:null,description:"Attributes that should be passed to the scrollable element.",name:"attrs",required:!0,type:{name:"ViewportComponentAttributes"}},height:{defaultValue:null,description:"Total height of items. It's undefined if component is not vertically scrollable.",name:"height",required:!0,type:{name:"number | undefined"}},width:{defaultValue:null,description:"Total width of items. It's undefined if component is not horizontally scrollable.",name:"width",required:!0,type:{name:"number | undefined"}},scrolling:{defaultValue:null,description:"Currently component is scrolling or not.",name:"scrolling",required:!0,type:{name:"boolean"}}}}}catch{}export{ze as S,ge as U,B as V,Ue as a,Ne as b,Se as c,Le as d,k as e,Re as f,Oe as g,ke as h,Ae as i,Te as j,ye as k,Ce as l,E as m,R as n,xe as o,De as p,Me as q,W as r,We as s,we as u,Ee as v};
//# sourceMappingURL=Viewport-4f03ba55.js.map
