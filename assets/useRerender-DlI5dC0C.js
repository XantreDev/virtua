import{r as F}from"./index-D3g0PtM7.js";const M=Math.min,z=Math.max,ie=Math.abs,Re=Array.isArray,$=setTimeout,Q=(e,t,s)=>M(s,z(t,e)),P=e=>e!=null,we=e=>{const t=[...e].sort((n,o)=>n-o),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},Te=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},Ce=(e,t)=>{let s;const n=()=>{P(s)&&clearTimeout(s)},o=()=>{n(),s=$(()=>{s=null,e()},t)};return o._cancel=n,o},H=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},J=-1,Y=(e,t,s)=>{const n=s?"unshift":"push";for(let o=0;o<t;o++)e[n](J);return e},k=(e,t)=>{const s=e._sizes[t];return s===J?e._defaultItemSize:s},ye=(e,t,s)=>{const n=e._sizes[t]===J;return e._sizes[t]=s,e._computedOffsetIndex=M(t,e._computedOffsetIndex),n},ee=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=k(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},Ae=e=>e._length?ee(e,e._length-1)+k(e,e._length-1):0,ue=(e,t,s)=>{let n=ee(e,s);for(;s>=0&&s<e._length;)if(n<=t){const o=k(e,s);if(n+o>t)break;n+=o,s++}else n-=k(e,--s);return Q(s,0,e._length-1)},le=(e,t,s,n)=>{const o=ue(e,t,M(s,e._length-1));return[o,ue(e,t+n,o)]},ke=(e,t)=>{let s=0;const n=e._sizes.filter((_,a)=>{const i=_!==J;return i&&a<t&&s++,i}),o=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=we(n))-o)*z(t-s,0)},Me=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:Y([],e),_offsets:Y([],e)}),fe=(e,t,s)=>{const n=t-e._length;return e._computedOffsetIndex=s?-1:M(t-1,e._computedOffsetIndex),e._length=t,n>0?(Y(e._offsets,n),Y(e._sizes,n,s),e._defaultItemSize*n):(e._offsets.splice(n),(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((o,_)=>o-(_===J?e._defaultItemSize:_),0))},de=typeof window<"u",me=()=>document.documentElement,te=e=>e.ownerDocument,se=e=>e.defaultView,Se=H(()=>de?getComputedStyle(me()).direction==="rtl":!1),pe=H(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Je=H(()=>"scrollBehavior"in me().style),Ne=1.5,x=0,ge=1,Oe=2,Z=0,De=1,_e=2,W=1,K=2,xe=3,be=4,Ie=5,he=6,ze=7,B=1,j=2,Ve=4,We=8,Pe=e=>z(e._getTotalSize(),e._getViewportSize()),Ue=(e,t,s,n,o)=>(n!==ge&&(e-=z(0,s)),n!==Oe&&(t+=z(0,s)),[z(e,0),M(t,o-1)]),Be=(e,t=40,s=0,n,o=!1,_=0,a=0)=>{let i=!!s,r=[],c=0,u=0,l=0,f=0,m=0,g=!1,S=0,d=x,b=Z,O=i?[0,z(s-1,0)]:null,E=[0,0],C=0;const p=n||Me(e,t),w=new Set,y=()=>Ae(p),re=()=>y()+_+a,ve=()=>u-_,oe=()=>z(0,re()-c),ce=I=>ee(p,I)-m,q=I=>{I&&(pe()&&d!==x?m+=I:(f+=I,l++))};return{_getStateVersion(){return r},_getCacheSnapshot(){return JSON.parse(JSON.stringify(p))},_getRange(){return O?[M(E[0],O[0]),z(E[1],O[1])]:S?E:E=le(p,ve()+m+f,E[0],c)},_isUnmeasuredItem(I){return p._sizes[I]===J},_hasUnmeasuredItemsInFrozenRange(){return O?p._sizes.slice(z(0,O[0]-1),M(p._length-1,O[1]+1)+1).includes(J):!1},_getItemOffset:ce,_getItemSize(I){return k(p,I)},_getItemsLength(){return p._length},_getScrollOffset(){return u},_getScrollDirection(){return d},_getViewportSize(){return c},_getStartSpacerSize(){return _},_getTotalSize:y,_getJumpCount(){return l},_flushJump(){const I=f,h=g;return f=0,g=!1,c>re()?[0,!1]:[S=I,h]},_subscribe(I,h){const N=[I,h];return w.add(N),()=>{w.delete(N)}},_update(I,h){let N,X,v=0;switch(I){case W:{const R=h.filter(([L,T])=>p._sizes[L]!==T);if(!R.length)break;let A=!1,D=!1;b===_e?u>oe()-Ne&&(D=!0):A=!0,q(R.reduce((L,[T,G])=>{if(!A||ce(T)<u){const U=G-k(p,T);(!D||U>0)&&(L+=U)}return L},0));for(const[L,T]of R){const G=k(p,L),U=ye(p,L,T);o&&(C+=T,U||(C-=G))}o&&c&&C>c&&(q(ke(p,E[0])),o=!1),v=j,X=!0;break}case K:{c!==h&&(c=h,v=j);break}case xe:{h[1]?(q(fe(p,h[0],!0)),b=_e,g=!0,v=B):fe(p,h[0]);break}case be:{const R=Q(h,0,oe()),A=S;if(S=0,R===u)break;const D=R-u,L=ie(D);!(A&&L<ie(A)+1)&&b===Z&&(d=D<0?Oe:ge),i&&(O=null,i=!1),X=L>c,u=R,v=B+Ve;break}case Ie:{v=We,d!==x&&(N=!0,v+=B),d=x,b=Z,O=null;break}case he:{b=De;break}case ze:{O=le(p,h,E[0],c),v=B;break}}v&&(r=[],N&&m&&(f+=m,m=0,l++),w.forEach(([R,A])=>{v&R&&A(X)}))}}},Fe=de?F.useLayoutEffect:F.useEffect,V=(e,t)=>t&&Se()?-e:e,Ee=(e,t,s,n,o)=>{const _=Date.now;let a=0,i=!1,r=!1,c=!1,u=!1;const l=Ce(()=>{if(i||r){i=!1,l();return}c=!1,e._update(Ie)},150),f=()=>{a=_(),c&&(u=!0),e._update(be,n()),l()},m=d=>{if(i||e._getScrollDirection()===x||d.ctrlKey)return;const b=_()-a;150>b&&50<b&&(s?d.deltaX:d.deltaY)&&(i=!0)},g=()=>{r=!0,c=u=!1},S=()=>{r=!1,pe()&&(c=!0)};return t.addEventListener("scroll",f),t.addEventListener("wheel",m,{passive:!0}),t.addEventListener("touchstart",g,{passive:!0}),t.addEventListener("touchend",S,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",f),t.removeEventListener("wheel",m),t.removeEventListener("touchstart",g),t.removeEventListener("touchend",S),l._cancel()},_fixScrollJump:()=>{const[d,b]=e._flushJump();d&&(o(V(d,s),b,u),u=!1)}}},Ye=(e,t)=>{let s,n,o;const _=t?"scrollLeft":"scrollTop",a=t?"overflowX":"overflowY",i=async(r,c)=>{if(!s){Te(()=>i(r,c));return}o&&o();const u=()=>{let l;return[new Promise((f,m)=>{l=f,$(o=m,150)}),e._subscribe(j,()=>{l&&l()})]};if(c&&Je()){for(;e._update(ze,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[l,f]=u();try{await l}catch{return}finally{f()}}s.scrollTo({[t?"left":"top"]:V(r(),t),behavior:"smooth"})}else for(;;){const[l,f]=u();try{s[_]=V(r(),t),e._update(he),await l}catch{return}finally{f()}}};return{_observe(r){s=r,n=Ee(e,r,t,()=>V(r[_],t),(c,u,l)=>{if(l){const f=r.style,m=f[a];f[a]="hidden",$(()=>{f[a]=m})}u?(r[_]=e._getScrollOffset()+c,o&&o()):r[_]+=c})},_dispose(){n&&n._dispose()},_scrollTo(r){i(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),i(()=>r)},_scrollToIndex(r,{align:c,smooth:u}={}){if(r=Q(r,0,e._getItemsLength()-1),c==="nearest"){const l=e._getItemOffset(r),f=e._getScrollOffset();if(l<f)c="start";else if(l+e._getItemSize(r)>f+e._getViewportSize())c="end";else return}i(()=>e._getStartSpacerSize()+e._getItemOffset(r)+(c==="end"?e._getItemSize(r)-e._getViewportSize():c==="center"?(e._getItemSize(r)-e._getViewportSize())/2:0),u)},_fixScrollJump:()=>{n&&n._fixScrollJump()}}},qe=(e,t)=>{let s;return{_observe(n){let o=0;const _=t?"scrollX":"scrollY",a=te(n),i=se(a),r=a.body,c=(u,l,f,m=0)=>{const g=f?"offsetLeft":"offsetTop",S=m+(f&&Se()?i.innerWidth-u[g]-u.offsetWidth:u[g]),d=u.offsetParent;return u===l||!d?S:c(d,l,f,S)};s=Ee(e,i,t,()=>V(i[_],t)-(o=c(n,r,t)),(u,l)=>{l?i.scroll({[t?"left":"top"]:e._getScrollOffset()+o+u}):i.scrollBy(t?u:0,t?0:u)})},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}},ae="current",Le=(e,t)=>{if(Re(e))for(const s of e)Le(s,t);else!P(e)||typeof e=="boolean"||t.push(e)},Xe=e=>{const t=[];return Le(e,t),t},Ge=(e,t)=>{const s=e.key;return P(s)?s:"_"+t},Ze=e=>{const t=F.useRef();return t[ae]||(t[ae]=e())},ne=e=>{let t;return{_observe(s){(t||(t=new(se(te(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},$e=(e,t)=>{let s;const n=t?"width":"height",o=new WeakMap,_=ne(a=>{const i=[];for(const{target:r,contentRect:c}of a)if(r.offsetParent)if(r===s)e._update(K,c[n]);else{const u=o.get(r);P(u)&&i.push([u,c[n]])}i.length&&e._update(W,i)});return{_observeRoot(a){_._observe(s=a)},_observeItem:(a,i)=>(o.set(a,i),_._observe(a),()=>{o.delete(a),_._unobserve(a)}),_dispose:_._dispose}},je=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",o=new WeakMap,_=ne(i=>{const r=[];for(const{target:c,contentRect:u}of i){if(!c.offsetParent)continue;const l=o.get(c);P(l)&&r.push([l,u[s]])}r.length&&e._update(W,r)});let a;return{_observeRoot(i){const r=se(te(i)),c=()=>{e._update(K,r[n])};r.addEventListener("resize",c),c(),a=()=>{r.removeEventListener("resize",c)}},_observeItem:(i,r)=>(o.set(i,r),_._observe(i),()=>{o.delete(i),_._unobserve(i)}),_dispose(){a&&a(),_._dispose()}}},Qe=(e,t)=>{let s;const n="height",o="width",_=new WeakMap,a=new Set,i=new Set,r=new Map,c=(l,f)=>`${l}-${f}`,u=ne(l=>{const f=new Set,m=new Set;for(const{target:g,contentRect:S}of l)if(g.offsetParent)if(g===s)e._update(K,S[n]),t._update(K,S[o]);else{const d=_.get(g);if(d){const[b,O]=d,E=c(b,O),C=r.get(E),p=[S[n],S[o]];let w,y;C?(C[0]!==p[0]&&(w=!0),C[1]!==p[1]&&(y=!0)):w=y=!0,w&&f.add(b),y&&m.add(O),(w||y)&&r.set(E,p)}}if(f.size){const g=[];f.forEach(S=>{let d=0;i.forEach(b=>{const O=r.get(c(S,b));O&&(d=z(d,O[0]))}),d&&g.push([S,d])}),e._update(W,g)}if(m.size){const g=[];m.forEach(S=>{let d=0;a.forEach(b=>{const O=r.get(c(b,S));O&&(d=z(d,O[1]))}),d&&g.push([S,d])}),t._update(W,g)}});return{_observeRoot(l){u._observe(s=l)},_observeItem(l,f,m){return _.set(l,[f,m]),a.add(f),i.add(m),u._observe(l),()=>{_.delete(l),u._unobserve(l)}},_dispose:u._dispose}},He=e=>F.useReducer(e._getStateVersion,void 0,e._getStateVersion)[1];export{xe as A,x as S,B as U,Ze as a,He as b,j as c,Ue as d,Be as e,Qe as f,Pe as g,Ye as h,Se as i,Ve as j,We as k,Ge as l,Te as m,$e as n,je as o,qe as p,Xe as q,ae as r,Fe as u};
