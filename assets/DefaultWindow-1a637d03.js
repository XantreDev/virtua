import{r as O}from"./index-5284b0bf.js";import{r as ie}from"./index-480187bb.js";import{j as Q}from"./jsx-runtime-f8a6c6ea.js";const J=Math.min,v=Math.max,ue=Math.abs,X=Date.now,D=e=>e!=null,Y=(e,t)=>Array.from({length:e},(s,r)=>t(r)),le=e=>{const t=[...e].sort((r,o)=>r-o),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},ce=(e,t)=>{let s;const r=()=>{D(s)&&clearTimeout(s)},o=()=>{r(),s=setTimeout(()=>{s=null,e()},t)};return o._cancel=r,o},fe=(e,t)=>{let s=X()-t;return(...r)=>{const o=X();s+t<o&&(s=o,e(...r))}},Z=e=>{let t,s;return(...r)=>(t||(t=!0,s=e(...r)),s)},y=-1,N=(e,t)=>{const s=e._sizes[t];return s===y?e._defaultItemSize:s},ae=(e,t,s)=>{const r=e._sizes[t]===y;return e._sizes[t]=s,e._measuredOffsetIndex=J(t,e._measuredOffsetIndex),r},ne=(e,t,s)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return s?e._offsets[t]+N(e,t):e._offsets[t];let r=e._measuredOffsetIndex,o=e._offsets[r];for(;r<=t&&(e._offsets[r]=o,!(r===t&&!s));)o+=N(e,r),r++;return e._measuredOffsetIndex=t,o},de=e=>ne(e,e._length-1,!0),B=(e,t)=>ne(e,t),q=(e,t,s)=>{let r=0;if(s>=0)for(;t<e._length-1;){const o=N(e,t++);if((r+=o)>=s){r-o/2>=s&&t--;break}}else for(;t>0;){const o=N(e,--t);if((r-=o)<=s){r+o/2<s&&t++;break}}return J(v(t,0),e._length-1)},H=(e,t,s,r)=>q(e,s,t-r),me=(e,t,s)=>{for(let r=t;r<=s;r++)if(e._sizes[r]===y)return!0;return!1},_e=e=>{const t=e._sizes.filter(r=>r!==y),s=t[0];e._defaultItemSize=t.every(r=>r===s)?s:le(t)},ee=(e,t,s)=>({_defaultItemSize:s?s._defaultItemSize:t,_length:e,_measuredOffsetIndex:s?J(s._measuredOffsetIndex,e-1):0,_sizes:Y(e,r=>{const o=s&&s._sizes[r];return D(o)?o:y}),_offsets:Y(e,r=>{if(r===0)return 0;const o=s&&s._offsets[r];return D(o)?o:y})}),K=e=>e.reduce((t,[s])=>t+s,0),te=(e,t)=>t.map(([s,r])=>[r-N(e,s),s]),T=0,se=1,j=2,F=3,x=1,V=2,k=3,P=4,G=5,we=(e,t,s=0,r,o,I)=>{const c=!t,_=t||40;let f=_*v(s-1,0),n=0,p=0,a,i=ee(e,_),d=T,l=!1,g=[0,s],S;const h=new Set,z=()=>de(i),W=()=>{const u=l;return l=!1,u},C=u=>{const m=d;if(d=u,d===T)return!1;if(m===T&&(d===se||d===j))return!0};return{_getRange(){const[u,m]=g,w=B(i,u),b=H(i,n,u,w),E=q(i,b,f);return u===b&&m===E?g:g=[b,E]},_isUnmeasuredItem(u){return i._sizes[u]===y},_hasUnmeasuredItemsInRange(u){return me(i,u,q(i,u,f))},_getItemOffset(u){const m=B(i,u);return r?m+v(0,f-z()):m},_getItemSize(u){return N(i,u)},_getScrollOffset(){return n},_getViewportSize(){return f},_getScrollSize(){return z()},_getScrollableDomSize(){return v(z(),f)},_getJumpCount(){return p},_flushJump(){const u=a;return a=void 0,u},_getItemIndexForScrollTo(u){return H(i,u,0,0)},_waitForScrollDestinationItemsMeasured(){return S&&S[1](),new Promise((u,m)=>{S=[()=>{u(),S=void 0},m]})},_subscribe(u){return h.add(u),()=>{h.delete(u)}},_update(u,m){let w,b,E=!1;switch(u){case x:{const R=m.filter(([L,M])=>i._sizes[L]!==M);if(!R.length)break;let A=0;if(d===j)A=K(te(i,R));else if(d===F){const L=te(i,R),[M]=g;n===0||(z()<=n+f?A=K(L):A=K(L.filter(([,oe])=>oe<M)))}A&&(a=A,p++);let $=!1;R.forEach(([L,M])=>{ae(i,L,M)&&($=!0)}),c&&$&&!n&&_e(i),l=w=E=!0;break}case V:{E=f!==m,f=m;break}case k:case P:{if(n===m)break;if(u===k){const R=W();(d===T||!R)&&d!==F&&(b=C(n>m?j:se)),w=ue(n-m)>f}n=m,E=!0;break}case G:{b=C(m);break}}E&&(h.forEach(R=>{R(w)}),u===k&&I(n)),S&&u===x&&S[0](),D(b)&&o(b)},_getScrollDirection(){return d},_updateCacheLength(u){i._length!==u&&(i=ee(u,_,i))}}},pe=typeof window<"u"?O.useLayoutEffect:O.useEffect,U="current",be=e=>!D(e)||typeof e=="boolean",Se=e=>{const t=O.useRef(e);return pe(()=>{t[U]=e},[e]),t},Re=(e,t,s)=>{const[r,o]=O.useState(t),I=Se(t);if(O.useLayoutEffect(()=>{const c=()=>{o(()=>I[U]())};return e._subscribe(_=>{_?ie.flushSync(c):c()})},[]),s){const c=t();r!==c&&o(c)}return r},ge=Z(e=>{const t="scrollLeft",s=e[t];e[t]=1;const r=e[t]<1;return e[t]=s,r}),ve=(e,t,s)=>{let r;const o=t?"scrollLeft":"scrollTop",I=()=>r?t?r.scrollWidth:r.scrollHeight:0,c=(n,p)=>ge(r)||p?-n:e._getScrollSize()-e._getViewportSize()-n,_=(n,p)=>{r&&(t&&s&&(n=c(n,p)),p?r[o]+=n:(r[o]=n,e._update(G,F)))},f=async(n,p)=>{const a=()=>{let i=p();const d=I(),l=e._getViewportSize();return d-(i+l)<=0&&(i=d-l),i};if(e._hasUnmeasuredItemsInRange(n)){do{e._update(P,a());try{await e._waitForScrollDestinationItemsMeasured()}catch{return}}while(e._hasUnmeasuredItemsInRange(n));_(a())}else{const i=a();_(i),e._update(P,i)}};return{_initRoot(n){r=n;const p=()=>{let l=n[o];t&&s&&(l=c(l)),e._update(k,l)},a=ce(()=>{p(),e._update(G,T)},150),i=()=>{p(),a()},d=fe(l=>{if(e._getScrollDirection()!==T&&!l.ctrlKey&&(t?l.deltaX:l.deltaY)){const g=e._getScrollOffset();g>0&&g<e._getScrollSize()-e._getViewportSize()&&a()}},50);return n.addEventListener("scroll",i),n.addEventListener("wheel",d,{passive:!0}),()=>{n.removeEventListener("scroll",i),n.removeEventListener("wheel",d),a._cancel()}},_getActualScrollSize:I,_scrollTo(n){n=v(n,0),f(e._getItemIndexForScrollTo(n),()=>n)},_scrollToIndex(n,p){n=v(J(n,p-1),0),f(n,()=>e._getItemOffset(n))},_fixScrollJump:n=>{_(n,!0)}}},Oe=e=>{const t=O.useRef();return t[U]||(t[U]=e())},Ee=(e,t)=>{let s;const r=t?"width":"height",o=new WeakMap,I=Z(()=>new ResizeObserver(c=>{const _=[];for(const{target:f,contentRect:n}of c)if(f===s)e._update(V,n[r]);else{const p=o.get(f);D(p)&&_.push([p,n[r]])}_.length&&e._update(x,_)}));return{_observeRoot(c){s=c;const _=I();return _.observe(c),()=>{_.disconnect()}},_observeItem(c,_){const f=I();return o.set(c,_),f.observe(c),()=>{o.delete(c),f.unobserve(c)}}}},ye=(e,t)=>{let s;const r="height",o="width",I=new WeakMap,c=new Set,_=new Set,f=new Map,n=(a,i)=>`${a}-${i}`,p=Z(()=>new ResizeObserver(a=>{const i=new Set,d=new Set;for(const{target:l,contentRect:g}of a)if(l===s)e._update(V,g[r]),t._update(V,g[o]);else{const S=I.get(l);if(S){const[h,z]=S,W=n(h,z),C=f.get(W),u=[g[r],g[o]];let m,w;C?(C[0]!==u[0]&&(m=!0),C[1]!==u[1]&&(w=!0)):m=w=!0,m&&i.add(h),w&&d.add(z),(m||w)&&f.set(W,u)}}if(i.size){const l=[];i.forEach(g=>{let S=0;_.forEach(h=>{const z=f.get(n(g,h));z&&(S=v(S,z[0]))}),S&&l.push([g,S])}),e._update(x,l)}if(d.size){const l=[];d.forEach(g=>{let S=0;c.forEach(h=>{const z=f.get(n(h,g));z&&(S=v(S,z[1]))}),S&&l.push([g,S])}),t._update(x,l)}}));return{_observeRoot(a){s=a;const i=p();return i.observe(a),()=>{i.disconnect()}},_observeItem(a,i,d){const l=p();return I.set(a,[i,d]),c.add(i),_.add(d),l.observe(a),()=>{I.delete(a),l.unobserve(a)}}}},re=O.forwardRef(({children:e,attrs:t,width:s,height:r,scrolling:o},I)=>Q("div",{ref:I,...t,children:Q("div",{style:O.useMemo(()=>({position:"relative",visibility:"hidden",width:s??"100%",height:r??"100%",pointerEvents:o?"none":"auto"}),[s,r,o]),children:e})}));try{re.displayName="DefaultWindow",re.__docgenInfo={description:"",displayName:"DefaultWindow",props:{children:{defaultValue:null,description:"Renderable item elements.",name:"children",required:!0,type:{name:"ReactNode"}},attrs:{defaultValue:null,description:"Attributes that should be passed to the scrollable element.",name:"attrs",required:!0,type:{name:"WindowComponentAttributes"}},height:{defaultValue:null,description:"Total height of items. It's undefined if component is not vertically scrollable.",name:"height",required:!0,type:{name:"number | undefined"}},width:{defaultValue:null,description:"Total width of items. It's undefined if component is not horizontally scrollable.",name:"width",required:!0,type:{name:"number | undefined"}},scrolling:{defaultValue:null,description:"Currently component is scrolling or not.",name:"scrolling",required:!0,type:{name:"boolean"}}}}}catch{}export{re as D,pe as a,Se as b,Oe as c,we as d,D as e,Ee as f,ve as g,J as h,be as i,ye as j,v as m,U as r,Re as u};
//# sourceMappingURL=DefaultWindow-1a637d03.js.map
