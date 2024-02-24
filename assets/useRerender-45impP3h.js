import{r as Y}from"./index-D3g0PtM7.js";const M=Math.min,z=Math.max,fe=Math.abs,ve=Array.isArray,$=setTimeout,Q=(e,t,s)=>M(s,z(t,e)),U=e=>e!=null,we=e=>{const t=[...e].sort((n,c)=>n-c),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},Te=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},ye=(e,t)=>{let s;const n=()=>{U(s)&&clearTimeout(s)},c=()=>{n(),s=$(()=>{s=null,e()},t)};return c._cancel=n,c},H=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},J=-1,X=(e,t,s)=>{const n=s?"unshift":"push";for(let c=0;c<t;c++)e[n](J);return e},k=(e,t)=>{const s=e._sizes[t];return s===J?e._defaultItemSize:s},Ce=(e,t,s)=>{const n=e._sizes[t]===J;return e._sizes[t]=s,e._computedOffsetIndex=M(t,e._computedOffsetIndex),n},ee=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=k(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},Ae=e=>e._length?ee(e,e._length-1)+k(e,e._length-1):0,ie=(e,t,s)=>{for(;s>=0&&s<e._length;){const n=ee(e,s);if(n<=t){if(n+k(e,s)>t)break;s++}else s--}return Q(s,0,e._length-1)},ke=(e,t,s,n)=>{const c=ie(e,t,M(s,e._length-1));return[c,ie(e,t+n,c)]},Me=(e,t)=>{let s=0;const n=e._sizes.filter((_,a)=>{const u=_!==J;return u&&a<t&&s++,u}),c=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=we(n))-c)*z(t-s,0)},Je=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:X([],e),_offsets:X([],e)}),le=(e,t,s)=>{const n=t-e._length;return e._computedOffsetIndex=s?-1:M(t-1,e._computedOffsetIndex),e._length=t,n>0?(X(e._offsets,n),X(e._sizes,n,s),e._defaultItemSize*n):(e._offsets.splice(n),(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((c,_)=>c-(_===J?e._defaultItemSize:_),0))},de=typeof window<"u",me=()=>document.documentElement,te=e=>e.ownerDocument,se=e=>e.defaultView,Se=H(()=>de?getComputedStyle(me()).direction==="rtl":!1),pe=H(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Ne=H(()=>"scrollBehavior"in me().style),De=1.5,D=0,ge=1,Oe=2,F=0,Ve=1,_e=2,K=1,P=2,xe=3,Ie=4,be=5,he=6,ze=7,N=1,j=2,We=4,Ke=8,Ue=e=>z(e._getTotalSize(),e._getViewportSize()),Be=(e,t,s,n,c)=>(n!==ge&&(e-=z(0,s)),n!==Oe&&(t+=z(0,s)),[z(e,0),M(t,c-1)]),Fe=(e,t=40,s=0,n,c=!1,_=0,a=0)=>{let u=!!s,r=[],o=0,f=0,i=0,l=0,m=0,O=!1,S=0,d=D,I=F,g=u?[0,z(s-1,0)]:null,E=[0,0],y=0;const p=n||Je(e,t),T=new Set,C=b=>ke(p,b,E[0],o),re=()=>Ae(p),oe=()=>re()+_+a,Re=()=>f-_,ce=()=>z(0,oe()-o),ue=b=>ee(p,b)-m,q=b=>{b&&(pe()&&d!==D?m+=b:(l+=b,i++))};return{_getStateVersion(){return r},_getCacheSnapshot(){return JSON.parse(JSON.stringify(p))},_getRange(){return S?E:(E=C(Re()+m+l),g?[M(E[0],g[0]),z(E[1],g[1])]:E)},_isUnmeasuredItem(b){return p._sizes[b]===J},_hasUnmeasuredItemsInFrozenRange(){return g?p._sizes.slice(z(0,g[0]-1),M(p._length-1,g[1]+1)+1).includes(J):!1},_getItemOffset:ue,_getItemSize(b){return k(p,b)},_getItemsLength(){return p._length},_getScrollOffset(){return f},_getScrollDirection(){return d},_getViewportSize(){return o},_getStartSpacerSize(){return _},_getTotalSize:re,_getJumpCount(){return i},_flushJump(){const b=l,h=O;return l=0,O=!1,o>oe()?[0,!1]:[S=b,h]},_subscribe(b,h){const V=[b,h];return T.add(V),()=>{T.delete(V)}},_update(b,h){let V,G,v=0;switch(b){case K:{const w=h.filter(([L,R])=>p._sizes[L]!==R);if(!w.length)break;let A=!1,x=!1;I===_e?f>ce()-De&&(x=!0):A=!0,q(w.reduce((L,[R,Z])=>{if(!A||(g?R<g[0]:ue(R)+(d===D&&I===F?k(p,R):0)<f)){const B=Z-k(p,R);(!x||B>0)&&(L+=B)}return L},0));for(const[L,R]of w){const Z=k(p,L),B=Ce(p,L,R);c&&(y+=R,B||(y-=Z))}c&&o&&y>o&&(q(Me(p,E[0])),c=!1),v=N+j,G=!0;break}case P:{o!==h&&(o=h,v=N+j);break}case xe:{h[1]?(q(le(p,h[0],!0)),I=_e,O=!0,v=N):le(p,h[0]);break}case Ie:{const w=Q(h,0,ce()),A=S;if(S=0,w===f)break;const x=w-f,L=fe(x);!(A&&L<fe(A)+1)&&I===F&&(d=x<0?Oe:ge),u&&(g=null,u=!1),G=L>o,f=w,v=N+We;break}case be:{v=Ke,d!==D&&(V=!0,v+=N),d=D,I=F,g=null;break}case he:{I=Ve;break}case ze:{g=C(h),v=N;break}}v&&(r=[],V&&m&&(l+=m,m=0,i++),T.forEach(([w,A])=>{v&w&&A(G)}))}}},Ye=de?Y.useLayoutEffect:Y.useEffect,W=(e,t)=>t&&Se()?-e:e,Ee=(e,t,s,n,c)=>{const _=Date.now;let a=0,u=!1,r=!1,o=!1,f=!1;const i=ye(()=>{if(u||r){u=!1,i();return}o=!1,e._update(be)},150),l=()=>{a=_(),o&&(f=!0),e._update(Ie,n()),i()},m=d=>{if(u||e._getScrollDirection()===D||d.ctrlKey)return;const I=_()-a;150>I&&50<I&&(s?d.deltaX:d.deltaY)&&(u=!0)},O=()=>{r=!0,o=f=!1},S=()=>{r=!1,pe()&&(o=!0)};return t.addEventListener("scroll",l),t.addEventListener("wheel",m,{passive:!0}),t.addEventListener("touchstart",O,{passive:!0}),t.addEventListener("touchend",S,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",l),t.removeEventListener("wheel",m),t.removeEventListener("touchstart",O),t.removeEventListener("touchend",S),i._cancel()},_fixScrollJump:()=>{const[d,I]=e._flushJump();d&&(c(W(d,s),I,f),f=!1)}}},Xe=(e,t)=>{let s,n,c;const _=t?"scrollLeft":"scrollTop",a=t?"overflowX":"overflowY",u=async(r,o)=>{if(!s){Te(()=>u(r,o));return}c&&c();const f=()=>{let i;return[new Promise((l,m)=>{i=l,$(c=m,150)}),e._subscribe(j,()=>{i&&i()})]};if(o&&Ne()){for(;e._update(ze,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[i,l]=f();try{await i}catch{return}finally{l()}}s.scrollTo({[t?"left":"top"]:W(r(),t),behavior:"smooth"})}else for(;;){const[i,l]=f();try{s[_]=W(r(),t),e._update(he),await i}catch{return}finally{l()}}};return{_observe(r){s=r,n=Ee(e,r,t,()=>W(r[_],t),(o,f,i)=>{if(i){const l=r.style,m=l[a];l[a]="hidden",$(()=>{l[a]=m})}f?(r[_]=e._getScrollOffset()+o,c&&c()):r[_]+=o})},_dispose(){n&&n._dispose()},_scrollTo(r){u(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),u(()=>r)},_scrollToIndex(r,{align:o,smooth:f,offset:i=0}={}){if(r=Q(r,0,e._getItemsLength()-1),o==="nearest"){const l=e._getItemOffset(r),m=e._getScrollOffset();if(l<m)o="start";else if(l+e._getItemSize(r)>m+e._getViewportSize())o="end";else return}u(()=>i+e._getStartSpacerSize()+e._getItemOffset(r)+(o==="end"?e._getItemSize(r)-e._getViewportSize():o==="center"?(e._getItemSize(r)-e._getViewportSize())/2:0),f)},_fixScrollJump:()=>{n&&n._fixScrollJump()}}},qe=(e,t)=>{let s;return{_observe(n){let c=0;const _=t?"scrollX":"scrollY",a=te(n),u=se(a),r=a.body,o=(f,i,l,m=0)=>{const O=l?"offsetLeft":"offsetTop",S=m+(l&&Se()?u.innerWidth-f[O]-f.offsetWidth:f[O]),d=f.offsetParent;return f===i||!d?S:o(d,i,l,S)};s=Ee(e,u,t,()=>W(u[_],t)-(c=o(n,r,t)),(f,i)=>{i?u.scroll({[t?"left":"top"]:e._getScrollOffset()+c+f}):u.scrollBy(t?f:0,t?0:f)})},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}},ae="current",Le=(e,t)=>{if(ve(e))for(const s of e)Le(s,t);else!U(e)||typeof e=="boolean"||t.push(e)},Ge=e=>{const t=[];return Le(e,t),t},Ze=(e,t)=>{const s=e.key;return U(s)?s:"_"+t},$e=e=>{const t=Y.useRef();return t[ae]||(t[ae]=e())},ne=e=>{let t;return{_observe(s){(t||(t=new(se(te(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},je=(e,t)=>{let s;const n=t?"width":"height",c=new WeakMap,_=ne(a=>{const u=[];for(const{target:r,contentRect:o}of a)if(r.offsetParent)if(r===s)e._update(P,o[n]);else{const f=c.get(r);U(f)&&u.push([f,o[n]])}u.length&&e._update(K,u)});return{_observeRoot(a){_._observe(s=a)},_observeItem:(a,u)=>(c.set(a,u),_._observe(a),()=>{c.delete(a),_._unobserve(a)}),_dispose:_._dispose}},Qe=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",c=new WeakMap,_=ne(u=>{const r=[];for(const{target:o,contentRect:f}of u){if(!o.offsetParent)continue;const i=c.get(o);U(i)&&r.push([i,f[s]])}r.length&&e._update(K,r)});let a;return{_observeRoot(u){const r=se(te(u)),o=()=>{e._update(P,r[n])};r.addEventListener("resize",o),o(),a=()=>{r.removeEventListener("resize",o)}},_observeItem:(u,r)=>(c.set(u,r),_._observe(u),()=>{c.delete(u),_._unobserve(u)}),_dispose(){a&&a(),_._dispose()}}},He=(e,t)=>{let s;const n="height",c="width",_=new WeakMap,a=new Set,u=new Set,r=new Map,o=(i,l)=>`${i}-${l}`,f=ne(i=>{const l=new Set,m=new Set;for(const{target:O,contentRect:S}of i)if(O.offsetParent)if(O===s)e._update(P,S[n]),t._update(P,S[c]);else{const d=_.get(O);if(d){const[I,g]=d,E=o(I,g),y=r.get(E),p=[S[n],S[c]];let T,C;y?(y[0]!==p[0]&&(T=!0),y[1]!==p[1]&&(C=!0)):T=C=!0,T&&l.add(I),C&&m.add(g),(T||C)&&r.set(E,p)}}if(l.size){const O=[];l.forEach(S=>{let d=0;u.forEach(I=>{const g=r.get(o(S,I));g&&(d=z(d,g[0]))}),d&&O.push([S,d])}),e._update(K,O)}if(m.size){const O=[];m.forEach(S=>{let d=0;a.forEach(I=>{const g=r.get(o(I,S));g&&(d=z(d,g[1]))}),d&&O.push([S,d])}),t._update(K,O)}});return{_observeRoot(i){f._observe(s=i)},_observeItem(i,l,m){return _.set(i,[l,m]),a.add(l),u.add(m),f._observe(i),()=>{_.delete(i),f._unobserve(i)}},_dispose:f._dispose}},et=e=>Y.useReducer(e._getStateVersion,void 0,e._getStateVersion)[1];export{xe as A,D as S,N as U,$e as a,et as b,Be as c,Fe as d,He as e,Xe as f,Ue as g,We as h,Se as i,Ke as j,Ze as k,je as l,Te as m,Qe as n,qe as o,Ge as p,ae as r,Ye as u};
