import{r as V}from"./index-yp3VsGQP.js";import{a as ne}from"./jsx-runtime-sgeEVxPu.js";const A=Math.min,I=Math.max,se=Math.abs,re=Date.now,We=Object.values,Ie=Array.isArray,G=setTimeout,K=(e,t,n)=>A(n,I(t,e)),F=e=>e!=null,Ee=e=>{const t=[...e].sort((s,o)=>s-o),n=e.length/2|0;return t.length%2===0?(t[n-1]+t[n])/2:t[n]},fe=(e,t)=>{let n;const s=()=>{F(n)&&clearTimeout(n)},o=()=>{s(),n=G(()=>{n=null,e()},t)};return o._cancel=s,o},ze=(e,t)=>{let n=re()-t;return(...s)=>{const o=re();n+t<o&&(n=o,e(...s))}},N=e=>{let t,n;return(...s)=>(t||(t=!0,n=e(...s)),n)},Q=e=>getComputedStyle(e),Y=e=>e?parseFloat(e):0,y=-1,k=(e,t)=>{const n=e._sizes[t];return n===y?e._defaultItemSize:n},Re=(e,t,n)=>{const s=e._sizes[t]===y;return e._sizes[t]=n,e._computedOffsetIndex=A(t,e._computedOffsetIndex),s},H=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];let n=e._computedOffsetIndex,s=e._offsets[n];for(;n<t;)s+=k(e,n),e._offsets[++n]=s;return e._computedOffsetIndex=t,s},Le=e=>e._length?H(e,e._length-1)+k(e,e._length-1):0,oe=(e,t,n)=>{let s=H(e,n);for(;n>=0&&n<e._length;)if(s<=t){const o=k(e,n);if(s+o>t)break;s+=o,n++}else s-=k(e,--n);return K(n,0,e._length-1)},ie=(e,t,n,s)=>{const o=oe(e,t,A(n,e._length-1));return[o,oe(e,t+s,o)]},ye=e=>{const t=e._sizes.filter(s=>s!==y),n=t[0];e._defaultItemSize=t.every(s=>s===n)?n:Ee(t)},ae=(e,t,n)=>{const s=n?"unshift":"push";for(let o=e._length;o<t;o++)e._sizes[s](y),e._offsets.push(o===0?0:y);e._length=t},Te=(e,t)=>{const n={_defaultItemSize:t,_length:0,_computedOffsetIndex:0,_sizes:[],_offsets:[]};return ae(n,e),n},le=(e,t,n)=>{const s=t-e._length,o=s<0;let m;return o?(m=(n?e._sizes.splice(0,-s):e._sizes.splice(s)).reduce((i,u)=>i+(u===y?e._defaultItemSize:u),0),e._offsets.splice(s)):(m=e._defaultItemSize*s,ae(e,e._length+s,n)),e._computedOffsetIndex=n?0:K(t-1,0,e._computedOffsetIndex),e._length=t,[m,o]},de=typeof window<"u",_e=()=>document.documentElement,Ce=N(e=>{const t="scrollLeft",n=e[t];e[t]=1;const s=e[t]<1;return e[t]=n,s}),Z=N(()=>de?Q(_e()).direction==="rtl":!1),me=N(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Ae=N(()=>"scrollBehavior"in _e().style),De=(e,t,n)=>I(e-(n===pe?1:I(1,t)),0),Pe=(e,t,n,s)=>A(e+(n===ge?1:I(1,t)),s-1),X=(e,t,n)=>t.reduce((s,[o,m])=>{const i=m-k(e,o);return(!n||i>0)&&(s+=i),s},0),Ne=1.5,P=0,pe=1,ge=2,U=1,B=2,xe=3,ee=4,te=5,Se=6,we=7,q=1,$=2,Me=4,Ve=8,Ke=(e,t=40,n=0,s=Te(e,t),o)=>{let m=[],i=t*I(n-1,0),u=0,_=0,r=0,c=0,l=0,f=0,d=0,a=P,p=!1,g=!1,h=null,S=[0,n];const x=new Set,L=()=>Le(s),T=()=>i-u-_,E=()=>L()-T(),C=b=>{me()&&a!==P?f+=b:(l+=b,c++)};return{_getStateVersion(){return m},_getCache(){return JSON.parse(JSON.stringify(s))},_getRange(){return h?[A(S[0],h[0]),I(S[1],h[1])]:d?S:S=ie(s,r+f+l,S[0],i)},_isUnmeasuredItem(b){return s._sizes[b]===y},_hasUnmeasuredItemsInSmoothScrollRange(){return h?s._sizes.slice(I(0,h[0]-1),A(s._length-1,h[1]+1)+1).includes(y):!1},_getItemOffset(b){return H(s,b)-f},_getItemSize(b){return k(s,b)},_getItemsLength(){return s._length},_getScrollOffset(){return r},_getMaxScrollOffset:E,_getScrollDirection(){return a},_getViewportSize(){return i},_getStartSpacerSize(){return u},_getScrollSize(){return I(L(),T())},_getTotalSize:L,_getJumpCount(){return c},_flushJump(){return T()>L()?l=0:(d=l,l=0,d)},_subscribe(b,v){const J=[b,v];return x.add(J),()=>{x.delete(J)}},_update(b,v){let J,j,z=0;switch(b){case U:{const w=v.filter(([M,D])=>s._sizes[M]!==D),R=p;if(p=!1,!w.length)break;let O=0;if(r!==0)if(r>E()-Ne)O=X(s,w,!0);else if(R)O=X(s,w);else{const[M]=S;O=X(s,w.filter(([D])=>D<M))}O&&C(O);let W=!1;w.forEach(([M,D])=>{Re(s,M,D)&&(W=!0)}),o&&W&&!r&&ye(s),z=$,j=!0;break}case B:{const w=v[0]+v[1]+v[2];i!==w&&(i=w,u=v[1],_=v[2],z=$);break}case xe:{if(v[1]){const w=E()-r,[R,O]=le(s,v[0],!0);C(O?-A(R,w):R),p=!O,z=q}else le(s,v[0]);break}case ee:{const w=K(v,0,E()),R=d;if(d=0,w===r)break;const O=w-r,W=se(O);!(R&&W<se(R)+1)&&!g&&(a=O<0?ge:pe),j=W>i,r=w,z=q+Me;break}case te:{z=Ve,a!==P&&(J=!0,z+=q),a=P,g=!1,h=null;break}case Se:{g=!0;break}case we:{h=ie(s,v,S[0],i),z=q;break}}z&&(m=[],J&&f&&(l+=f,f=0,c++),x.forEach(([w,R])=>{z&w&&R(j)}))}}},Ue=de?V.useLayoutEffect:V.useEffect,he=(e,t,n)=>ze(s=>{if(e._getScrollDirection()!==P&&!s.ctrlKey&&(t?s.deltaX:s.deltaY)){const o=e._getScrollOffset();o>0&&o<e._getMaxScrollOffset()&&n()}},50),ve=(e,t,n,s)=>Ce(e)||s?-n:t._getMaxScrollOffset()-n,Be=(e,t)=>{let n,s,o=!1;const m=t?"scrollLeft":"scrollTop",i=t?"overflowX":"overflowY",u=(r,c)=>t&&Z()?ve(n,e,r,c):r,_=async(r,c)=>{if(!n)return;s&&s();const l=()=>K(r(),0,e._getMaxScrollOffset()),f=()=>{let d;return[new Promise((a,p)=>{d=a,G(s=p,150)}),e._subscribe($,()=>{d&&d()})]};if(c&&Ae()){for(;e._update(we,l()),!!e._hasUnmeasuredItemsInSmoothScrollRange();){const[d,a]=f();try{await d}catch{return}finally{a()}}n.scrollTo({[t?"left":"top"]:u(l()),behavior:"smooth"})}else for(;;){const[d,a]=f();try{n[m]=u(l()),e._update(Se),await d}catch{return}finally{a()}}};return{_observe(r){n=r;let c=!1,l=!1;const f=fe(()=>{if(c){f();return}l=!1,e._update(te)},150),d=()=>{l&&(o=!0),e._update(ee,u(r[m])),f()},a=he(e,t,f),p=()=>{c=!0,l=o=!1},g=()=>{c=!1,me()&&(l=!0)};return r.addEventListener("scroll",d),r.addEventListener("wheel",a,{passive:!0}),r.addEventListener("touchstart",p,{passive:!0}),r.addEventListener("touchend",g,{passive:!0}),()=>{r.removeEventListener("scroll",d),r.removeEventListener("wheel",a),r.removeEventListener("touchstart",p),r.removeEventListener("touchend",g),f._cancel()}},_scrollTo(r){_(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),_(()=>r)},_scrollToIndex(r,{align:c,smooth:l}={}){if(r=K(r,0,e._getItemsLength()-1),c==="nearest"){const f=e._getItemOffset(r),d=e._getScrollOffset();if(f<d)c="start";else if(f+e._getItemSize(r)>d+e._getViewportSize())c="end";else return}_(()=>e._getStartSpacerSize()+(c==="end"?e._getItemOffset(r)+e._getItemSize(r)-e._getViewportSize():c==="center"?e._getItemOffset(r)+(e._getItemSize(r)-e._getViewportSize())/2:e._getItemOffset(r)),l)},_fixScrollJump:r=>{if(n){if(o){o=!1;const c=n.style,l=c[i];c[i]="hidden",G(()=>{c[i]=l})}n[m]+=u(r,!0)}}}},qe=(e,t)=>{let n;const s=t?"scrollX":"scrollY",o=t?"offsetLeft":"offsetTop",m=(i,u)=>t&&Z()?ve(n,e,i,u):i;return{_observe(i){n=i;const u=(l,f)=>{const d=f+(t&&Z()?window.innerWidth-l[o]-l.offsetWidth:l[o]),a=l.offsetParent;return l===document.body||!a?d:u(a,d)},_=fe(()=>{e._update(te)},150),r=()=>{e._update(ee,m(window[s])-u(i,0)),_()},c=he(e,t,_);return window.addEventListener("scroll",r),window.addEventListener("wheel",c,{passive:!0}),()=>{window.removeEventListener("scroll",r),window.removeEventListener("wheel",c),_._cancel()}},_fixScrollJump:i=>{window.scrollBy(t?m(i,!0):0,t?0:i)}}},ue="current",Fe={},be=(e,t)=>{if(Ie(e))for(const n of e)be(n,t);else!F(e)||typeof e=="boolean"||t.push(e)},je=e=>{const t=[];return be(e,t),t},Xe=e=>{const t=V.useRef();return t[ue]||(t[ue]=e())},Oe={box:"border-box"},Ge=(e,t)=>{let n;const s=t?"width":"height",o=new WeakMap,m=N(()=>new ResizeObserver(i=>{const u=[];for(const{target:_,contentRect:r}of i)if(_.offsetParent)if(_===n)e._update(B,[r[s],r[t?"left":"top"],Y(Q(n)[t?"paddingRight":"paddingBottom"])]);else{const c=o.get(_);F(c)&&u.push([c,r[s]])}u.length&&e._update(U,u)}));return{_observeRoot(i){n=i;const u=m();return u.observe(i,Oe),()=>{u.disconnect()}},_observeItem(i,u){const _=m();return o.set(i,u),_.observe(i),()=>{o.delete(i),_.unobserve(i)}}}},Ye=(e,t)=>{const n=t?"width":"height",s=t?"innerWidth":"innerHeight",o=new WeakMap,m=N(()=>new ResizeObserver(i=>{const u=[];for(const{target:_,contentRect:r}of i){if(!_.offsetParent)continue;const c=o.get(_);F(c)&&u.push([c,r[n]])}u.length&&e._update(U,u)}));return{_observeRoot(){const i=()=>{e._update(B,[window[s],0,0])};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i),m().disconnect()}},_observeItem(i,u){const _=m();return o.set(i,u),_.observe(i),()=>{o.delete(i),_.unobserve(i)}}}},Ze=(e,t)=>{let n;const s="height",o="width",m=new WeakMap,i=new Set,u=new Set,_=new Map,r=(l,f)=>`${l}-${f}`,c=N(()=>new ResizeObserver(l=>{const f=new Set,d=new Set;for(const{target:a,contentRect:p}of l)if(a.offsetParent)if(a===n){const g=Q(n);e._update(B,[p[s],p.top,Y(g.paddingBottom)]),t._update(B,[p[o],p.left,Y(g.paddingRight)])}else{const g=m.get(a);if(g){const[h,S]=g,x=r(h,S),L=_.get(x),T=[p[s],p[o]];let E,C;L?(L[0]!==T[0]&&(E=!0),L[1]!==T[1]&&(C=!0)):E=C=!0,E&&f.add(h),C&&d.add(S),(E||C)&&_.set(x,T)}}if(f.size){const a=[];f.forEach(p=>{let g=0;u.forEach(h=>{const S=_.get(r(p,h));S&&(g=I(g,S[0]))}),g&&a.push([p,g])}),e._update(U,a)}if(d.size){const a=[];d.forEach(p=>{let g=0;i.forEach(h=>{const S=_.get(r(h,p));S&&(g=I(g,S[1]))}),g&&a.push([p,g])}),t._update(U,a)}}));return{_observeRoot(l){n=l;const f=c();return f.observe(l,Oe),()=>{f.disconnect()}},_observeItem(l,f,d){const a=c();return m.set(l,[f,d]),i.add(f),u.add(d),a.observe(l),()=>{m.delete(l),a.unobserve(l)}}}},ce=V.forwardRef(({children:e,attrs:t,width:n,height:s,scrolling:o},m)=>ne("div",{ref:m,...t,children:ne("div",{style:V.useMemo(()=>({position:"relative",visibility:"hidden",width:n??"100%",height:s??"100%",pointerEvents:o?"none":"auto"}),[n,s,o]),children:e})}));try{ce.displayName="Viewport",ce.__docgenInfo={description:"",displayName:"Viewport",props:{children:{defaultValue:null,description:"Renderable item elements.",name:"children",required:!0,type:{name:"ReactNode"}},attrs:{defaultValue:null,description:"Attributes that should be passed to the scrollable element.",name:"attrs",required:!0,type:{name:"ViewportComponentAttributes"}},height:{defaultValue:null,description:"Total height of items. It's undefined if component is not vertically scrollable.",name:"height",required:!0,type:{name:"number | undefined"}},width:{defaultValue:null,description:"Total width of items. It's undefined if component is not horizontally scrollable.",name:"width",required:!0,type:{name:"number | undefined"}},scrolling:{defaultValue:null,description:"Currently component is scrolling or not.",name:"scrolling",required:!0,type:{name:"boolean"}}}}}catch{}const $e=e=>V.useReducer(e._getStateVersion,void 0,e._getStateVersion)[1];export{xe as A,P as S,q as U,ce as V,Xe as a,$e as b,$ as c,De as d,Pe as e,Fe as f,Ke as g,Ze as h,Z as i,Be as j,Me as k,Ve as l,I as m,F as n,Ge as o,Ye as p,qe as q,ue as r,je as s,Ue as u,We as v};
