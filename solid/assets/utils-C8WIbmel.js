import{i as Ee,e as _e,j as ze,k as Re,t as Te,l as ae,u as we,p as Ce,q as ye,v as Me,c as ke}from"./web-DwhiH2Oy.js";const C=Math.min,L=Math.max,le=Math.abs,Y=setTimeout,X=(e,t,s)=>C(s,L(t,e)),$=e=>e!=null,Ae=e=>{const t=[...e].sort((n,o)=>n-o),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},Je=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},De=(e,t)=>{let s;const n=()=>{$(s)&&clearTimeout(s)},o=()=>{n(),s=Y(()=>{s=null,e()},t)};return o._cancel=n,o},Z=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},y=-1,P=(e,t,s)=>{const n=s?"unshift":"push";for(let o=0;o<t;o++)e[n](y);return e},M=(e,t)=>{const s=e._sizes[t];return s===y?e._defaultItemSize:s},Ne=(e,t,s)=>{const n=e._sizes[t]===y;return e._sizes[t]=s,e._computedOffsetIndex=C(t,e._computedOffsetIndex),n},G=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=M(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},xe=e=>e._length?G(e,e._length-1)+M(e,e._length-1):0,ie=(e,t,s)=>{for(;s>=0&&s<e._length;){const n=G(e,s);if(n<=t){if(n+M(e,s)>t)break;s++}else s--}return X(s,0,e._length-1)},ue=(e,t,s,n)=>{const o=ie(e,t,C(s,e._length-1));return[o,ie(e,t+n,o)]},Pe=(e,t)=>{let s=0;const n=e._sizes.filter((c,_)=>{const l=c!==y;return l&&_<t&&s++,l}),o=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=Ae(n))-o)*L(t-s,0)},Ue=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:P([],e),_offsets:P([],e)}),ce=(e,t,s)=>{const n=t-e._length;return e._computedOffsetIndex=s?-1:C(t-1,e._computedOffsetIndex),e._length=t,n>0?(P(e._offsets,n),P(e._sizes,n,s),e._defaultItemSize*n):(e._offsets.splice(n),(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((o,c)=>o-(c===y?e._defaultItemSize:c),0))},Ve=typeof window<"u",de=()=>document.documentElement,j=e=>e.ownerDocument,Q=e=>e.defaultView,H=Z(()=>Ve?getComputedStyle(de()).direction==="rtl":!1),me=Z(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),We=Z(()=>"scrollBehavior"in de().style),Be=1.5,J=0,Se=1,pe=2,F=0,Ke=1,fe=2,ee=1,te=2,Fe=3,ge=4,Oe=5,Ie=6,be=7,x=1,q=2,Ye=4,qe=8,Ze=e=>L(e._getTotalSize(),e._getViewportSize()),Ge=(e,t,s,n,o)=>(n!==Se&&(e-=L(0,s)),n!==pe&&(t+=L(0,s)),[L(e,0),C(t,o-1)]),je=(e,t=40,s=0,n,o=!1,c=0,_=0)=>{let l=!!s,r=[],i=0,u=0,f=0,a=0,d=0,v=!1,I=0,S=J,b=F,O=l?[0,L(s-1,0)]:null,T=[0,0],U=0;const m=n||Ue(e,t),V=new Set,se=()=>xe(m),ne=()=>se()+c+_,ve=()=>u-c,re=()=>L(0,ne()-i),oe=p=>G(m,p)-d,W=p=>{p&&(me()&&S!==J?d+=p:(a+=p,f++))};return{_getStateVersion(){return r},_getCacheSnapshot(){return JSON.parse(JSON.stringify(m))},_getRange(){return I?T:(T=ue(m,ve()+d+a,T[0],i),O?[C(T[0],O[0]),L(T[1],O[1])]:T)},_isUnmeasuredItem(p){return m._sizes[p]===y},_hasUnmeasuredItemsInFrozenRange(){return O?m._sizes.slice(L(0,O[0]-1),C(m._length-1,O[1]+1)+1).includes(y):!1},_getItemOffset:oe,_getItemSize(p){return M(m,p)},_getItemsLength(){return m._length},_getScrollOffset(){return u},_getScrollDirection(){return S},_getViewportSize(){return i},_getStartSpacerSize(){return c},_getTotalSize:se,_getJumpCount(){return f},_flushJump(){const p=a,g=v;return a=0,v=!1,i>ne()?[0,!1]:[I=p,g]},_subscribe(p,g){const k=[p,g];return V.add(k),()=>{V.delete(k)}},_update(p,g){let k,B,E=0;switch(p){case ee:{const z=g.filter(([h,R])=>m._sizes[h]!==R);if(!z.length)break;let w=!1,A=!1;b===fe?u>re()-Be&&(A=!0):w=!0,W(z.reduce((h,[R,K])=>{if(!w||(O?R<O[0]:oe(R)<u)){const N=K-M(m,R);(!A||N>0)&&(h+=N)}return h},0));for(const[h,R]of z){const K=M(m,h),N=Ne(m,h,R);o&&(U+=R,N||(U-=K))}o&&i&&U>i&&(W(Pe(m,T[0])),o=!1),E=q,B=!0;break}case te:{i!==g&&(i=g,E=q);break}case Fe:{g[1]?(W(ce(m,g[0],!0)),b=fe,v=!0,E=x):ce(m,g[0]);break}case ge:{const z=X(g,0,re()),w=I;if(I=0,z===u)break;const A=z-u,h=le(A);!(w&&h<le(w)+1)&&b===F&&(S=A<0?pe:Se),l&&(O=null,l=!1),B=h>i,u=z,E=x+Ye;break}case Oe:{E=qe,S!==J&&(k=!0,E+=x),S=J,b=F,O=null;break}case Ie:{b=Ke;break}case be:{O=ue(m,g,T[0],i),E=x;break}}E&&(r=[],k&&d&&(a+=d,d=0,f++),V.forEach(([z,w])=>{E&z&&w(B)}))}}},he=e=>{let t;return{_observe(s){(t||(t=new(Q(j(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},Qe=(e,t)=>{let s;const n=t?"width":"height",o=new WeakMap,c=he(_=>{const l=[];for(const{target:r,contentRect:i}of _)if(r.offsetParent)if(r===s)e._update(te,i[n]);else{const u=o.get(r);$(u)&&l.push([u,i[n]])}l.length&&e._update(ee,l)});return{_observeRoot(_){c._observe(s=_)},_observeItem:(_,l)=>(o.set(_,l),c._observe(_),()=>{o.delete(_),c._unobserve(_)}),_dispose:c._dispose}},He=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",o=new WeakMap,c=he(l=>{const r=[];for(const{target:i,contentRect:u}of l){if(!i.offsetParent)continue;const f=o.get(i);$(f)&&r.push([f,u[s]])}r.length&&e._update(ee,r)});let _;return{_observeRoot(l){const r=Q(j(l)),i=()=>{e._update(te,r[n])};r.addEventListener("resize",i),i(),_=()=>{r.removeEventListener("resize",i)}},_observeItem:(l,r)=>(o.set(l,r),c._observe(l),()=>{o.delete(l),c._unobserve(l)}),_dispose(){_&&_(),c._dispose()}}},D=(e,t)=>t&&H()?-e:e,Le=(e,t,s,n,o)=>{const c=Date.now;let _=0,l=!1,r=!1,i=!1,u=!1;const f=De(()=>{if(l||r){l=!1,f();return}i=!1,e._update(Oe)},150),a=()=>{_=c(),i&&(u=!0),e._update(ge,n()),f()},d=S=>{if(l||e._getScrollDirection()===J||S.ctrlKey)return;const b=c()-_;150>b&&50<b&&(s?S.deltaX:S.deltaY)&&(l=!0)},v=()=>{r=!0,i=u=!1},I=()=>{r=!1,me()&&(i=!0)};return t.addEventListener("scroll",a),t.addEventListener("wheel",d,{passive:!0}),t.addEventListener("touchstart",v,{passive:!0}),t.addEventListener("touchend",I,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",a),t.removeEventListener("wheel",d),t.removeEventListener("touchstart",v),t.removeEventListener("touchend",I),f._cancel()},_fixScrollJump:()=>{const[S,b]=e._flushJump();S&&(o(D(S,s),b,u),u=!1)}}},et=(e,t)=>{let s,n,o;const c=t?"scrollLeft":"scrollTop",_=t?"overflowX":"overflowY",l=async(r,i)=>{if(!s){Je(()=>l(r,i));return}o&&o();const u=()=>{let f;return[new Promise((a,d)=>{f=a,Y(o=d,150)}),e._subscribe(q,()=>{f&&f()})]};if(i&&We()){for(;e._update(be,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[f,a]=u();try{await f}catch{return}finally{a()}}s.scrollTo({[t?"left":"top"]:D(r(),t),behavior:"smooth"})}else for(;;){const[f,a]=u();try{s[c]=D(r(),t),e._update(Ie),await f}catch{return}finally{a()}}};return{_observe(r){s=r,n=Le(e,r,t,()=>D(r[c],t),(i,u,f)=>{if(f){const a=r.style,d=a[_];a[_]="hidden",Y(()=>{a[_]=d})}u?(r[c]=e._getScrollOffset()+i,o&&o()):r[c]+=i})},_dispose(){n&&n._dispose()},_scrollTo(r){l(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),l(()=>r)},_scrollToIndex(r,{align:i,smooth:u}={}){if(r=X(r,0,e._getItemsLength()-1),i==="nearest"){const f=e._getItemOffset(r),a=e._getScrollOffset();if(f<a)i="start";else if(f+e._getItemSize(r)>a+e._getViewportSize())i="end";else return}l(()=>e._getStartSpacerSize()+e._getItemOffset(r)+(i==="end"?e._getItemSize(r)-e._getViewportSize():i==="center"?(e._getItemSize(r)-e._getViewportSize())/2:0),u)},_fixScrollJump:()=>{n&&n._fixScrollJump()}}},tt=(e,t)=>{let s;return{_observe(n){let o=0;const c=t?"scrollX":"scrollY",_=j(n),l=Q(_),r=_.body,i=(u,f,a,d=0)=>{const v=a?"offsetLeft":"offsetTop",I=d+(a&&H()?l.innerWidth-u[v]-u.offsetWidth:u[v]),S=u.offsetParent;return u===f||!S?I:i(S,f,a,I)};s=Le(e,l,t,()=>D(l[c],t)-(o=i(n,r,t)),(u,f)=>{f?l.scroll({[t?"left":"top"]:e._getScrollOffset()+o+u}):l.scrollBy(t?u:0,t?0:u)})},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}};var Xe=Te("<div>");const st=e=>{let t;Ee(()=>{t&&ae(e._resizer(t,e._index))});const s=_e(()=>{const n=e._isHorizontal,o={margin:0,padding:0,position:"absolute",[n?"height":"width"]:"100%",[n?"top":"left"]:"0px",[n?H()?"right":"left":"top"]:e._offset+"px",visibility:e._hide?"hidden":"visible"};return n&&(o.display="flex"),o});return(()=>{var n=Xe(),o=t;return typeof o=="function"?we(o,n):t=n,ze(n,()=>e._children),Re(c=>Ce(n,s(),c)),n})()},nt=e=>{let t=new Map;return ae(()=>{for(const s of t.values())s._dispose()}),_e(()=>{const s=e._each,[n,o]=e._range,c=new Map,_=[];return ye(()=>{for(let l=n;l<=o;l++){const r=s[l],i=t.get(l);_.push(i?i._element:Me(u=>{const f=ke(r),a=e._render(f[0](),l);return c.set(l,{_data:f,_element:a,_dispose:u}),a})),i&&(r!==i._data&&i._data[1](r),c.set(l,i))}for(const[l,r]of t.entries())c.has(l)||r._dispose();return t=c,_})})},rt=(e,t)=>e[0]===t[0]&&e[1]===t[1];export{Fe as A,st as L,nt as R,J as S,x as U,q as a,Ye as b,je as c,qe as d,$ as e,Qe as f,Ge as g,Ze as h,rt as i,et as j,He as k,tt as l};
