import{r as k}from"./index-yp3VsGQP.js";import{a as se}from"./jsx-runtime-sgeEVxPu.js";const T=Math.min,E=Math.max,re=Math.abs,oe=Date.now,Je=Object.values,ze=Array.isArray,X=setTimeout,q=(e,t,n)=>T(n,E(t,e)),U=e=>e!=null,ve=e=>{const t=[...e].sort((s,r)=>s-r),n=e.length/2|0;return t.length%2===0?(t[n-1]+t[n])/2:t[n]},ae=(e,t)=>{let n;const s=()=>{U(n)&&clearTimeout(n)},r=()=>{s(),n=X(()=>{n=null,e()},t)};return r._cancel=s,r},Le=(e,t)=>{let n=oe()-t;return(...s)=>{const r=oe();n+t<r&&(n=r,e(...s))}},x=e=>{let t,n;return(...s)=>(t||(t=!0,n=e(...s)),n)},H=e=>getComputedStyle(e),Z=e=>e?parseFloat(e):0,N=-1,F=(e,t,n)=>{const s=n?"unshift":"push";for(let r=0;r<t;r++)e[s](N);return e},D=(e,t)=>{const n=e._sizes[t];return n===N?e._defaultItemSize:n},Re=(e,t,n)=>{const s=e._sizes[t]===N;return e._sizes[t]=n,e._computedOffsetIndex=T(t,e._computedOffsetIndex),s},ee=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let n=e._computedOffsetIndex,s=e._offsets[n];for(;n<t;)s+=D(e,n),e._offsets[++n]=s;return e._computedOffsetIndex=t,s},ye=e=>e._length?ee(e,e._length-1)+D(e,e._length-1):0,ie=(e,t,n)=>{let s=ee(e,n);for(;n>=0&&n<e._length;)if(s<=t){const r=D(e,n);if(s+r>t)break;s+=r,n++}else s-=D(e,--n);return q(n,0,e._length-1)},ue=(e,t,n,s)=>{const r=ie(e,t,T(n,e._length-1));return[r,ie(e,t+s,r)]},Te=e=>{const t=e._sizes.filter(s=>s!==N),n=t[0];e._defaultItemSize=t.every(s=>s===n)?n:ve(t)},Ce=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:F([],e),_offsets:F([],e)}),le=(e,t,n)=>{const s=t-e._length,r=s>0;let m;return r?(m=e._defaultItemSize*s,F(e._sizes,s,n),F(e._offsets,s)):(m=(n?e._sizes.splice(0,-s):e._sizes.splice(s)).reduce((i,l)=>i+(l===N?e._defaultItemSize:l),0),e._offsets.splice(s)),e._computedOffsetIndex=n?-1:T(t-1,e._computedOffsetIndex),e._length=t,[m,r]},_e=typeof window<"u",me=()=>document.documentElement,Ae=x(e=>{const t="scrollLeft",n=e[t];e[t]=1;const s=e[t]<1;return e[t]=n,s}),$=x(()=>_e?H(me()).direction==="rtl":!1),pe=x(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Ne=x(()=>"scrollBehavior"in me().style),xe=1.5,W=0,ge=1,Se=2,j=0,Me=1,ce=2,J=1,K=2,Ve=3,te=4,ne=5,Oe=6,we=7,B=1,Q=2,ke=4,De=8,Ke=(e,t,n)=>E(e-(n===ge?1:E(1,t)),0),Ue=(e,t,n,s)=>T(e+(n===Se?1:E(1,t)),s-1),G=(e,t,n)=>t.reduce((s,[r,m])=>{const i=m-D(e,r);return(!n||i>0)&&(s+=i),s},0),Be=(e,t=40,n=0,s=Ce(e,t),r)=>{let m=!!n,i=[],l=0,_=0,o=0,u=0,c=0,f=0,d=0,a=0,p=W,g=j,S=m?[0,E(n-1,0)]:null,O=[0,0];const M=new Set,L=()=>ye(s),C=()=>l-_-o,z=()=>E(0,L()-C()),A=h=>{pe()&&p!==W?d+=h:(f+=h,c++)};return{_getStateVersion(){return i},_getCache(){return JSON.parse(JSON.stringify(s))},_getRange(){return S?[T(O[0],S[0]),E(O[1],S[1])]:a?O:O=ue(s,u+d+f,O[0],l)},_isUnmeasuredItem(h){return s._sizes[h]===N},_hasUnmeasuredItemsInFrozenRange(){return S?s._sizes.slice(E(0,S[0]-1),T(s._length-1,S[1]+1)+1).includes(N):!1},_getItemOffset(h){return ee(s,h)-d},_getItemSize(h){return D(s,h)},_getItemsLength(){return s._length},_getScrollOffset(){return u},_getMaxScrollOffset:z,_getScrollDirection(){return p},_getViewportSize(){return l},_getStartSpacerSize(){return _},_getScrollSize(){return E(L(),C())},_getTotalSize:L,_getJumpCount(){return c},_flushJump(){return C()>L()?f=0:(a=f,f=0,a)},_subscribe(h,I){const P=[h,I];return M.add(P),()=>{M.delete(P)}},_update(h,I){let P,Y,v=0;switch(h){case J:{const w=I.filter(([y,V])=>s._sizes[y]!==V);if(!w.length)break;let b=0;if(u!==0)if(u>z()-xe)b=G(s,w,!0);else if(g===ce)b=G(s,w);else{const[y]=O;b=G(s,w.filter(([V])=>V<y))}b&&A(b);let R=!1;w.forEach(([y,V])=>{Re(s,y,V)&&(R=!0)}),r&&R&&!u&&Te(s),v=Q,Y=!0;break}case K:{const w=I[0]+I[1]+I[2];l!==w&&(l=w,_=I[1],o=I[2],v=Q);break}case Ve:{if(I[1]){const w=z()-u,[b,R]=le(s,I[0],!0);A(R?b:-T(b,w)),R&&(g=ce),v=B}else le(s,I[0]);break}case te:{const w=q(I,0,z()),b=a;if(a=0,w===u)break;const R=w-u,y=re(R);!(b&&y<re(b)+1)&&g===j&&(p=R<0?Se:ge),m&&(S=null,m=!1),Y=y>l,u=w,v=B+ke;break}case ne:{v=De,p!==W&&(P=!0,v+=B),p=W,g=j,S=null;break}case Oe:{g=Me;break}case we:{S=ue(s,I,O[0],l),v=B;break}}v&&(i=[],P&&d&&(f+=d,d=0,c++),M.forEach(([w,b])=>{v&w&&b(Y)}))}}},qe=_e?k.useLayoutEffect:k.useEffect,Ie=(e,t,n)=>Le(s=>{if(e._getScrollDirection()!==W&&!s.ctrlKey&&(t?s.deltaX:s.deltaY)){const r=e._getScrollOffset();r>0&&r<e._getMaxScrollOffset()&&n()}},50),be=(e,t,n,s)=>Ae(e)||s?-n:t._getMaxScrollOffset()-n,Fe=(e,t)=>{let n,s,r=!1;const m=t?"scrollLeft":"scrollTop",i=t?"overflowX":"overflowY",l=(o,u)=>t&&$()?be(n,e,o,u):o,_=async(o,u)=>{if(!n)return;s&&s();const c=()=>q(o(),0,e._getMaxScrollOffset()),f=()=>{let d;return[new Promise((a,p)=>{d=a,X(s=p,150)}),e._subscribe(Q,()=>{d&&d()})]};if(u&&Ne()){for(;e._update(we,c()),!!e._hasUnmeasuredItemsInFrozenRange();){const[d,a]=f();try{await d}catch{return}finally{a()}}n.scrollTo({[t?"left":"top"]:l(c()),behavior:"smooth"})}else for(;;){const[d,a]=f();try{n[m]=l(c()),e._update(Oe),await d}catch{return}finally{a()}}};return{_observe(o){n=o;let u=!1,c=!1;const f=ae(()=>{if(u){f();return}c=!1,e._update(ne)},150),d=()=>{c&&(r=!0),e._update(te,l(o[m])),f()},a=Ie(e,t,f),p=()=>{u=!0,c=r=!1},g=()=>{u=!1,pe()&&(c=!0)};return o.addEventListener("scroll",d),o.addEventListener("wheel",a,{passive:!0}),o.addEventListener("touchstart",p,{passive:!0}),o.addEventListener("touchend",g,{passive:!0}),()=>{o.removeEventListener("scroll",d),o.removeEventListener("wheel",a),o.removeEventListener("touchstart",p),o.removeEventListener("touchend",g),f._cancel()}},_scrollTo(o){_(()=>o)},_scrollBy(o){o+=e._getScrollOffset(),_(()=>o)},_scrollToIndex(o,{align:u,smooth:c}={}){if(o=q(o,0,e._getItemsLength()-1),u==="nearest"){const f=e._getItemOffset(o),d=e._getScrollOffset();if(f<d)u="start";else if(f+e._getItemSize(o)>d+e._getViewportSize())u="end";else return}_(()=>e._getStartSpacerSize()+(u==="end"?e._getItemOffset(o)+e._getItemSize(o)-e._getViewportSize():u==="center"?e._getItemOffset(o)+(e._getItemSize(o)-e._getViewportSize())/2:e._getItemOffset(o)),c)},_fixScrollJump:o=>{if(n){if(r){r=!1;const u=n.style,c=u[i];u[i]="hidden",X(()=>{u[i]=c})}n[m]+=l(o,!0)}}}},Ye=(e,t)=>{let n;const s=t?"scrollX":"scrollY",r=t?"offsetLeft":"offsetTop",m=(i,l)=>t&&$()?be(n,e,i,l):i;return{_observe(i){n=i;const l=(c,f)=>{const d=f+(t&&$()?window.innerWidth-c[r]-c.offsetWidth:c[r]),a=c.offsetParent;return c===document.body||!a?d:l(a,d)},_=ae(()=>{e._update(ne)},150),o=()=>{e._update(te,m(window[s])-l(i,0)),_()},u=Ie(e,t,_);return window.addEventListener("scroll",o),window.addEventListener("wheel",u,{passive:!0}),()=>{window.removeEventListener("scroll",o),window.removeEventListener("wheel",u),_._cancel()}},_fixScrollJump:i=>{window.scrollBy(t?m(i,!0):0,t?0:i)}}},fe="current",je={},he=(e,t)=>{if(ze(e))for(const n of e)he(n,t);else!U(e)||typeof e=="boolean"||t.push(e)},Ge=e=>{const t=[];return he(e,t),t},Xe=(e,t)=>{const n=e.key;return U(n)?n:"_"+t},Ze=e=>{const t=k.useRef();return t[fe]||(t[fe]=e())},Ee={box:"border-box"},$e=(e,t)=>{let n;const s=t?"width":"height",r=new WeakMap,m=x(()=>new ResizeObserver(i=>{const l=[];for(const{target:_,contentRect:o}of i)if(_.offsetParent)if(_===n)e._update(K,[o[s],o[t?"left":"top"],Z(H(n)[t?"paddingRight":"paddingBottom"])]);else{const u=r.get(_);U(u)&&l.push([u,o[s]])}l.length&&e._update(J,l)}));return{_observeRoot(i){n=i;const l=m();return l.observe(i,Ee),()=>{l.disconnect()}},_observeItem:(i,l)=>{const _=m();return r.set(i,l),_.observe(i),()=>{r.delete(i),_.unobserve(i)}}}},Qe=(e,t)=>{const n=t?"width":"height",s=t?"innerWidth":"innerHeight",r=new WeakMap,m=x(()=>new ResizeObserver(i=>{const l=[];for(const{target:_,contentRect:o}of i){if(!_.offsetParent)continue;const u=r.get(_);U(u)&&l.push([u,o[n]])}l.length&&e._update(J,l)}));return{_observeRoot(){const i=()=>{e._update(K,[window[s],0,0])};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i),m().disconnect()}},_observeItem:(i,l)=>{const _=m();return r.set(i,l),_.observe(i),()=>{r.delete(i),_.unobserve(i)}}}},He=(e,t)=>{let n;const s="height",r="width",m=new WeakMap,i=new Set,l=new Set,_=new Map,o=(c,f)=>`${c}-${f}`,u=x(()=>new ResizeObserver(c=>{const f=new Set,d=new Set;for(const{target:a,contentRect:p}of c)if(a.offsetParent)if(a===n){const g=H(n);e._update(K,[p[s],p.top,Z(g.paddingBottom)]),t._update(K,[p[r],p.left,Z(g.paddingRight)])}else{const g=m.get(a);if(g){const[S,O]=g,M=o(S,O),L=_.get(M),C=[p[s],p[r]];let z,A;L?(L[0]!==C[0]&&(z=!0),L[1]!==C[1]&&(A=!0)):z=A=!0,z&&f.add(S),A&&d.add(O),(z||A)&&_.set(M,C)}}if(f.size){const a=[];f.forEach(p=>{let g=0;l.forEach(S=>{const O=_.get(o(p,S));O&&(g=E(g,O[0]))}),g&&a.push([p,g])}),e._update(J,a)}if(d.size){const a=[];d.forEach(p=>{let g=0;i.forEach(S=>{const O=_.get(o(S,p));O&&(g=E(g,O[1]))}),g&&a.push([p,g])}),t._update(J,a)}}));return{_observeRoot(c){n=c;const f=u();return f.observe(c,Ee),()=>{f.disconnect()}},_observeItem(c,f,d){const a=u();return m.set(c,[f,d]),i.add(f),l.add(d),a.observe(c),()=>{m.delete(c),a.unobserve(c)}}}},de=k.forwardRef(({children:e,attrs:t,width:n,height:s,scrolling:r},m)=>se("div",{ref:m,...t,children:se("div",{style:k.useMemo(()=>({contain:"content",position:"relative",visibility:"hidden",width:n??"100%",height:s??"100%",pointerEvents:r?"none":"auto"}),[n,s,r]),children:e})}));try{de.displayName="Viewport",de.__docgenInfo={description:"",displayName:"Viewport",props:{children:{defaultValue:null,description:"Renderable item elements.",name:"children",required:!0,type:{name:"ReactNode"}},attrs:{defaultValue:null,description:"Attributes that should be passed to the scrollable element.",name:"attrs",required:!0,type:{name:"ViewportComponentAttributes"}},height:{defaultValue:null,description:"Total height of items. It's undefined if component is not vertically scrollable.",name:"height",required:!0,type:{name:"number | undefined"}},width:{defaultValue:null,description:"Total width of items. It's undefined if component is not horizontally scrollable.",name:"width",required:!0,type:{name:"number | undefined"}},scrolling:{defaultValue:null,description:"Currently component is scrolling or not.",name:"scrolling",required:!0,type:{name:"boolean"}}}}}catch{}const et=e=>k.useReducer(e._getStateVersion,void 0,e._getStateVersion)[1];export{Ve as A,W as S,B as U,de as V,Ze as a,et as b,Q as c,Ke as d,Ue as e,je as f,Be as g,He as h,$ as i,Fe as j,ke as k,De as l,E as m,Xe as n,$e as o,Qe as p,Ye as q,fe as r,Ge as s,qe as u,Je as v};
