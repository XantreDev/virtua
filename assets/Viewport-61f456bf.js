import{r as L}from"./index-c6dae603.js";import{r as oe}from"./index-eb008d06.js";import{j}from"./jsx-runtime-c3d7f245.js";const R=Math.min,h=Math.max,ie=Math.abs,B=Date.now,he=Object.values,X=setTimeout,k=e=>e!=null,le=e=>{const t=[...e].sort((s,r)=>s-r),n=e.length/2|0;return t.length%2===0?(t[n-1]+t[n])/2:t[n]},Q=(e,t)=>{let n;const s=()=>{k(n)&&clearTimeout(n)},r=()=>{s(),n=X(()=>{n=null,e()},t)};return r._cancel=s,r},ue=(e,t)=>{let n=B()-t;return(...s)=>{const r=B();n+t<r&&(n=r,e(...s))}},D=e=>{let t,n;return(...s)=>(t||(t=!0,n=e(...s)),n)},z=-1,C=(e,t)=>{const n=e._sizes[t];return n===z?e._defaultItemSize:n},ce=(e,t,n)=>{const s=e._sizes[t]===z;return e._sizes[t]=n,e._measuredOffsetIndex=R(t,e._measuredOffsetIndex),s},P=(e,t)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return e._offsets[t];let n=e._measuredOffsetIndex,s=e._offsets[n];for(;n<t;)s+=C(e,n),e._offsets[++n]=s;return e._measuredOffsetIndex=t,s},fe=e=>e._length?P(e,e._length-1)+C(e,e._length-1):0,Y=(e,t,n)=>{let s=0;if(n>=0)for(;t<e._length-1;){const r=C(e,t++);if((s+=r)>=n){s-r/2>=n&&t--;break}}else for(;t>0;){const r=C(e,--t);if((s-=r)<=n){s+r/2<n&&t++;break}}return R(e._length-1,h(0,t))},F=(e,t,n,s)=>Y(e,n,t-s),ae=(e,t,n)=>e._sizes.slice(t,n+1).includes(z),de=e=>{const t=e._sizes.filter(s=>s!==z),n=t[0];e._defaultItemSize=t.every(s=>s===n)?n:le(t)},$=(e,t)=>{for(let n=e._length;n<t;n++)e._sizes.push(z),e._offsets.push(n===0?0:z);e._length=t},_e=(e,t)=>{const n={_defaultItemSize:t,_length:0,_measuredOffsetIndex:0,_sizes:[],_offsets:[]};return $(n,e),n},me=(e,t)=>{const n=t-e._length;if(n>0)$(e,t);else{for(let s=n;s<0;s++)e._sizes.pop(),e._offsets.pop();e._length=t,e._measuredOffsetIndex=R(e._measuredOffsetIndex,t-1)}},V=(e,t)=>t.reduce((n,[s,r])=>n+(r-C(e,s)),0),pe=1.5,y=0,ge=1,G=2,A=1,M=2,U=3,H=4,K=5,ee=6,te=1,T=2,se=4,J=8,Se=16,Le=(e,t=40,n=0,s=_e(e,t),r,_)=>{let i=t*h(n-1,0),l=0,f=0,S=0,o=y,a=!1,c=!1,w=[0,n];const d=new Set,p=()=>fe(s),g=()=>p()-i,v=u=>{const m=o;return o=u,o!==m&&(o===y||m===y)};return{_getCache(){return JSON.parse(JSON.stringify(s))},_getRange(){const[u,m]=w,E=P(s,u),I=F(s,l,u,E),b=Y(s,I,i);return u===I&&m===b?w:w=[I,b]},_isUnmeasuredItem(u){return s._sizes[u]===z},_hasUnmeasuredItemsInRange(u){return ae(s,h(0,u-2),R(s._length-1,u+2))},_getItemOffset(u){const m=P(s,u);return r?m+h(0,i-p()):m},_getItemSize(u){return C(s,u)},_getItemLength(){return s._length},_getScrollOffset(){return l},_getScrollOffsetMax:g,_getIsScrolling(){return o!==y},_getViewportSize(){return i},_getCorrectedScrollSize(){return h(p(),i)},_getJumpCount(){return f},_flushJump(){const u=S;return S=0,u},_getItemIndexForScrollTo(u){return F(s,u,0,0)},_subscribe(u,m){const E=[u,m];return d.add(E),()=>{d.delete(E)}},_update(u,m){let E,I=0;switch(u){case A:{const b=m.filter(([x,N])=>s._sizes[x]!==N);if(!b.length)break;let O=0;if(o===G)O=V(s,b);else if(a){const[x]=w;l===0||(l>g()-pe?O=V(s,b):O=V(s,b.filter(([N])=>N<x)))}O&&(S=O,f++,I+=se);let q=!1;b.forEach(([x,N])=>{ce(s,x,N)&&(q=!0)}),_&&q&&!l&&de(s),I+=T,c=E=!0;break}case M:{i!==m&&(i=m,I=T);break}case U:case H:{if(l===m)break;if(u===U){const b=c;c=!1,(o===y||!b)&&!a&&v(l>m?G:ge)&&(I+=J),E=ie(l-m)>i,I+=Se}l=R(g(),h(0,m)),I+=te;break}case K:{v(y)&&(I=J),a=!1;break}case ee:{a=!0;break}}I&&d.forEach(([b,O])=>{I&b&&O(E)})},_updateCacheLength(u){s._length!==u&&me(s,u)}}},we=typeof window<"u"?L.useLayoutEffect:L.useEffect,W="current",Re={},ne=(e,t)=>{if(Array.isArray(e))for(const n of e)ne(n,t);else!k(e)||typeof e=="boolean"||t.push(e)},ze=e=>{const t=[];return ne(e,t),t},Ie=e=>{const t=L.useRef(e);return we(()=>{t[W]=e},[e]),t},ye=te+T,Ce=T,Te=se,xe=J,Ne=T,Ae=(e,t,n,s)=>{const[r,_]=L.useState(t),i=Ie(t);if(L.useLayoutEffect(()=>{const l=()=>{_(()=>i[W]())};return e._subscribe(n,f=>{f?oe.flushSync(l):l()})},[]),s){const l=t();r!==l&&_(l)}return r},be=D(e=>{const t="scrollLeft",n=e[t];e[t]=1;const s=e[t]<1;return e[t]=n,s}),re=(e,t,n)=>ue(s=>{if(e._getIsScrolling()&&!s.ctrlKey&&(t?s.deltaX:s.deltaY)){const r=e._getScrollOffset();r>0&&r<e._getScrollOffsetMax()&&n()}},50),Me=(e,t,n)=>{let s,r;const _=t?"scrollLeft":"scrollTop",i=()=>s?t?s.scrollWidth:s.scrollHeight:0,l=(o,a)=>t&&n?be(s)||a?-o:e._getScrollOffsetMax()-o:o,f=async(o,a)=>{if(!s)return;const c=()=>R(a(),i()-e._getViewportSize());for(;e._update(H,c()),!!e._hasUnmeasuredItemsInRange(o);){r&&r[1]();const w=e._subscribe(T,()=>{r&&r[0]()});try{await new Promise((d,p)=>{let g=!1;const v=()=>{g||(g=!0,d(),r=void 0)};r=[v,p],X(v,250)})}catch{return}finally{w()}}s[_]=l(c()),e._update(ee)},S=o=>{o=h(o,0),f(e._getItemIndexForScrollTo(o),()=>o)};return{_initRoot(o){s=o;const a=()=>{e._update(U,l(o[_]))},c=Q(()=>{a(),e._update(K)},150),w=()=>{a(),c()},d=re(e,t,c);return o.addEventListener("scroll",w),o.addEventListener("wheel",d,{passive:!0}),()=>{o.removeEventListener("scroll",w),o.removeEventListener("wheel",d),c._cancel()}},_getActualScrollSize:i,_scrollTo:S,_scrollBy(o){S(e._getScrollOffset()+o)},_scrollToIndex(o){o=R(e._getItemLength()-1,h(0,o)),f(o,()=>e._getItemOffset(o))},_fixScrollJump:o=>{s&&(s[_]+=l(o,!0))}}},Ue=(e,t)=>{const n=t?"scrollX":"scrollY",s=t?"offsetLeft":"offsetTop";return{_initRoot(r){let _=!1;const i=(c,w)=>{const d=w+c[s],p=c.offsetParent;return c===document.body||!p?d:i(p,d)},l=()=>{_&&e._update(U,window[n]-i(r,0))},f=Q(()=>{l(),e._update(K)},150),S=()=>{l(),f()},o=re(e,t,f),a=new IntersectionObserver(([c])=>{_=c.isIntersecting});return a.observe(r),window.addEventListener("scroll",S),window.addEventListener("wheel",o,{passive:!0}),()=>{a.disconnect(),window.removeEventListener("scroll",S),window.removeEventListener("wheel",o),f._cancel()}},_fixScrollJump:r=>{window.scrollBy(t?r:0,t?0:r)}}},We=e=>{const t=L.useRef();return t[W]||(t[W]=e())},ke=(e,t)=>{let n;const s=t?"width":"height",r=new WeakMap,_=D(()=>new ResizeObserver(i=>{const l=[];for(const{target:f,contentRect:S}of i)if(f===n)e._update(M,S[s]);else{const o=r.get(f);k(o)&&l.push([o,S[s]])}l.length&&e._update(A,l)}));return{_observeRoot(i){n=i;const l=_();return l.observe(i),()=>{l.disconnect()}},_observeItem(i,l){const f=_();return r.set(i,l),f.observe(i),()=>{r.delete(i),f.unobserve(i)}}}},De=(e,t)=>{const n=t?"width":"height",s=t?"innerWidth":"innerHeight",r=new WeakMap,_=D(()=>new ResizeObserver(i=>{const l=[];for(const{target:f,contentRect:S}of i){const o=r.get(f);k(o)&&l.push([o,S[n]])}l.length&&e._update(A,l)}));return{_observeRoot(){const i=()=>{e._update(M,window[s])};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i),_().disconnect()}},_observeItem(i,l){const f=_();return r.set(i,l),f.observe(i),()=>{r.delete(i),f.unobserve(i)}}}},Ve=(e,t)=>{let n;const s="height",r="width",_=new WeakMap,i=new Set,l=new Set,f=new Map,S=(a,c)=>`${a}-${c}`,o=D(()=>new ResizeObserver(a=>{const c=new Set,w=new Set;for(const{target:d,contentRect:p}of a)if(d===n)e._update(M,p[s]),t._update(M,p[r]);else{const g=_.get(d);if(g){const[v,u]=g,m=S(v,u),E=f.get(m),I=[p[s],p[r]];let b,O;E?(E[0]!==I[0]&&(b=!0),E[1]!==I[1]&&(O=!0)):b=O=!0,b&&c.add(v),O&&w.add(u),(b||O)&&f.set(m,I)}}if(c.size){const d=[];c.forEach(p=>{let g=0;l.forEach(v=>{const u=f.get(S(p,v));u&&(g=h(g,u[0]))}),g&&d.push([p,g])}),e._update(A,d)}if(w.size){const d=[];w.forEach(p=>{let g=0;i.forEach(v=>{const u=f.get(S(v,p));u&&(g=h(g,u[1]))}),g&&d.push([p,g])}),t._update(A,d)}}));return{_observeRoot(a){n=a;const c=o();return c.observe(a),()=>{c.disconnect()}},_observeItem(a,c,w){const d=o();return _.set(a,[c,w]),i.add(c),l.add(w),d.observe(a),()=>{_.delete(a),d.unobserve(a)}}}},Z=L.forwardRef(({children:e,attrs:t,width:n,height:s,scrolling:r},_)=>j("div",{ref:_,...t,children:j("div",{style:L.useMemo(()=>({position:"relative",visibility:"hidden",width:n??"100%",height:s??"100%",pointerEvents:r?"none":"auto"}),[n,s,r]),children:e})}));try{Z.displayName="Viewport",Z.__docgenInfo={description:"",displayName:"Viewport",props:{children:{defaultValue:null,description:"Renderable item elements.",name:"children",required:!0,type:{name:"ReactNode"}},attrs:{defaultValue:null,description:"Attributes that should be passed to the scrollable element.",name:"attrs",required:!0,type:{name:"ViewportComponentAttributes"}},height:{defaultValue:null,description:"Total height of items. It's undefined if component is not vertically scrollable.",name:"height",required:!0,type:{name:"number | undefined"}},width:{defaultValue:null,description:"Total width of items. It's undefined if component is not horizontally scrollable.",name:"width",required:!0,type:{name:"number | undefined"}},scrolling:{defaultValue:null,description:"Currently component is scrolling or not.",name:"scrolling",required:!0,type:{name:"boolean"}}}}}catch{}export{ye as S,Se as U,Z as V,We as a,Ae as b,we as c,Re as d,k as e,ze as f,Le as g,De as h,Ue as i,xe as j,Te as k,Ce as l,h as m,R as n,Ne as o,Ve as p,Me as q,W as r,ke as s,Ie as u,he as v};
//# sourceMappingURL=Viewport-61f456bf.js.map
