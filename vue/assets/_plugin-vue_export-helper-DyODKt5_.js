import{d as ve,b as Ee,m as Re,e as Te}from"./vue.esm-bundler-CbvoPaxB.js";const C=Math.min,L=Math.max,ue=Math.abs,X=setTimeout,Z=(e,t,s)=>C(s,L(t,e)),U=e=>e!=null,we=e=>{const t=[...e].sort((n,o)=>n-o),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},Ce=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},ye=(e,t)=>{let s;const n=()=>{U(s)&&clearTimeout(s)},o=()=>{n(),s=X(()=>{s=null,e()},t)};return o._cancel=n,o},j=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},y=-1,B=(e,t,s)=>{const n=s?"unshift":"push";for(let o=0;o<t;o++)e[n](y);return e},P=(e,t)=>{const s=e._sizes[t];return s===y?e._defaultItemSize:s},Ae=(e,t,s)=>{const n=e._sizes[t]===y;return e._sizes[t]=s,e._computedOffsetIndex=C(t,e._computedOffsetIndex),n},$=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=P(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},Ne=e=>e._length?$(e,e._length-1)+P(e,e._length-1):0,ce=(e,t,s)=>{for(;s>=0&&s<e._length;){const n=$(e,s);if(n<=t){if(n+P(e,s)>t)break;s++}else s--}return Z(s,0,e._length-1)},ke=(e,t,s,n)=>{const o=ce(e,t,C(s,e._length-1));return[o,ce(e,t+n,o)]},Me=(e,t)=>{let s=0;const n=e._sizes.filter((i,c)=>{const u=i!==y;return u&&c<t&&s++,u}),o=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=we(n))-o)*L(t-s,0)},De=(e,t,s)=>({_defaultItemSize:s?s[1]:t,_sizes:s?s[0]:B([],e),_length:e,_computedOffsetIndex:-1,_offsets:B([],e)}),Je=e=>[[...e._sizes],e._defaultItemSize],fe=(e,t,s)=>{const n=t-e._length;return e._computedOffsetIndex=s?-1:C(t-1,e._computedOffsetIndex),e._length=t,n>0?(B(e._offsets,n),B(e._sizes,n,s),e._defaultItemSize*n):(e._offsets.splice(n),(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((o,i)=>o-(i===y?e._defaultItemSize:i),0))},xe=typeof window<"u",de=()=>document.documentElement,Q=e=>e.ownerDocument,H=e=>e.defaultView,ee=j(()=>xe?getComputedStyle(de()).direction==="rtl":!1),ae=j(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Ve=j(()=>"scrollBehavior"in de().style),Be=1.5,N=0,me=1,Se=2,V=0,Ue=1,_e=2,te=1,se=2,Pe=3,pe=4,ge=5,Oe=6,Ie=7,be=8,A=1,G=2,We=4,Ke=8,qe=e=>L(e._getTotalSize(),e._getViewportSize()),Ye=(e,t,s,n,o)=>(n!==me&&(e-=L(0,s)),n!==Se&&(t+=L(0,s)),[L(e,0),C(t,o-1)]),Xe=(e,t=40,s=0,n,o=!1,i=0,c=0)=>{let u=!!s,r=[],l=0,f=0,_=0,d=0,a=0,z=!1,I=0,v=N,g=V,S=u?[0,L(s-1,0)]:null,T=[0,0],W=0;const p=De(e,t,n),K=new Set,ne=m=>ke(p,m,T[0],l),re=()=>Ne(p),oe=()=>re()+i+c,ze=()=>f-i,le=()=>L(0,oe()-l),ie=m=>$(p,m)-a,J=m=>P(p,m),F=m=>{m&&(ae()&&v!==N?a+=m:(d+=m,_++))};return{_getStateVersion(){return r},_getCacheSnapshot(){return Je(p)},_getRange(){return I?T:(T=ne(ze()+a+d),S?[C(T[0],S[0]),L(T[1],S[1])]:T)},_isUnmeasuredItem(m){return p._sizes[m]===y},_hasUnmeasuredItemsInFrozenRange(){return S?p._sizes.slice(L(0,S[0]-1),C(p._length-1,S[1]+1)+1).includes(y):!1},_getItemOffset:ie,_getItemSize:J,_getItemsLength(){return p._length},_getScrollOffset(){return f},_getScrollDirection(){return v},_getViewportSize(){return l},_getStartSpacerSize(){return i},_getTotalSize:re,_getJumpCount(){return _},_flushJump(){const m=d,O=z;return d=0,z=!1,l>oe()?[0,!1]:[I=m,O]},_subscribe(m,O){const k=[m,O];return K.add(k),()=>{K.delete(k)}},_update(m,O){let k,q,E=0;switch(m){case te:{const R=O.filter(([b,h])=>p._sizes[b]!==h);if(!R.length)break;let w=!1,M=!1;g===_e?f>le()-Be&&(M=!0):w=!0,F(R.reduce((b,[h,Y])=>{if(!w||(S?h<S[0]:ie(h)+(v===N&&g===V?J(h):0)<f)){const x=Y-J(h);(!M||x>0)&&(b+=x)}return b},0));for(const[b,h]of R){const Y=J(b),x=Ae(p,b,h);o&&(W+=h,x||(W-=Y))}o&&l&&W>l&&(F(Me(p,T[0])),o=!1),E=A+G,q=!0;break}case se:{l!==O&&(l=O,E=A+G);break}case Pe:{O[1]?(F(fe(p,O[0],!0)),g=_e,z=!0,E=A):fe(p,O[0]);break}case pe:{const R=Z(O,0,le()),w=I;if(I=0,R===f)break;const M=R-f,b=ue(M);!(w&&b<ue(w)+1)&&g===V&&(v=M<0?Se:me),u&&(S=null,u=!1),q=b>l,f=R,E=A+We;break}case ge:{E=Ke,v!==N&&(k=!0,E+=A),v=N,g=V,S=null;break}case Oe:{i=O;break}case Ie:{g=Ue;break}case be:{S=ne(O),E=A;break}}E&&(r=[],k&&a&&(d+=a,a=0,_++),K.forEach(([R,w])=>{E&R&&w(q)}))}}},he=e=>{let t;return{_observe(s){(t||(t=new(H(Q(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},Ge=(e,t)=>{let s;const n=t?"width":"height",o=new WeakMap,i=he(c=>{const u=[];for(const{target:r,contentRect:l}of c)if(r.offsetParent)if(r===s)e._update(se,l[n]);else{const f=o.get(r);U(f)&&u.push([f,l[n]])}u.length&&e._update(te,u)});return{_observeRoot(c){i._observe(s=c)},_observeItem:(c,u)=>(o.set(c,u),i._observe(c),()=>{o.delete(c),i._unobserve(c)}),_dispose:i._dispose}},Ze=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",o=new WeakMap,i=he(u=>{const r=[];for(const{target:l,contentRect:f}of u){if(!l.offsetParent)continue;const _=o.get(l);U(_)&&r.push([_,f[s]])}r.length&&e._update(te,r)});let c;return{_observeRoot(u){const r=H(Q(u)),l=()=>{e._update(se,r[n])};r.addEventListener("resize",l),l(),c=()=>{r.removeEventListener("resize",l)}},_observeItem:(u,r)=>(o.set(u,r),i._observe(u),()=>{o.delete(u),i._unobserve(u)}),_dispose(){c&&c(),i._dispose()}}},D=(e,t)=>t&&ee()?-e:e,Le=(e,t,s,n,o,i)=>{const c=Date.now;let u=0,r=!1,l=!1,f=!1,_=!1;const d=ye(()=>{if(r||l){r=!1,d();return}f=!1,e._update(ge)},150),a=()=>{u=c(),f&&(_=!0),i&&e._update(Oe,i()),e._update(pe,n()),d()},z=g=>{if(r||e._getScrollDirection()===N||g.ctrlKey)return;const S=c()-u;150>S&&50<S&&(s?g.deltaX:g.deltaY)&&(r=!0)},I=()=>{l=!0,f=_=!1},v=()=>{l=!1,ae()&&(f=!0)};return t.addEventListener("scroll",a),t.addEventListener("wheel",z,{passive:!0}),t.addEventListener("touchstart",I,{passive:!0}),t.addEventListener("touchend",v,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",a),t.removeEventListener("wheel",z),t.removeEventListener("touchstart",I),t.removeEventListener("touchend",v),d._cancel()},_fixScrollJump:()=>{const[g,S]=e._flushJump();g&&(o(D(g,s),S,_),_=!1)}}},je=(e,t)=>{let s,n,o;const i=t?"scrollLeft":"scrollTop",c=t?"overflowX":"overflowY",u=async(r,l)=>{if(!s){Ce(()=>u(r,l));return}o&&o();const f=()=>{let _;return[new Promise((d,a)=>{_=d,X(o=a,150)}),e._subscribe(G,()=>{_&&_()})]};if(l&&Ve()){for(;e._update(be,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[_,d]=f();try{await _}catch{return}finally{d()}}s.scrollTo({[t?"left":"top"]:D(r(),t),behavior:"smooth"})}else for(;;){const[_,d]=f();try{s[i]=D(r(),t),e._update(Ie),await _}catch{return}finally{d()}}};return{_observe(r){s=r,n=Le(e,r,t,()=>D(r[i],t),(l,f,_)=>{if(_){const d=r.style,a=d[c];d[c]="hidden",X(()=>{d[c]=a})}f?(r[i]=e._getScrollOffset()+l,o&&o()):r[i]+=l})},_dispose(){n&&n._dispose()},_scrollTo(r){u(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),u(()=>r)},_scrollToIndex(r,{align:l,smooth:f,offset:_=0}={}){if(r=Z(r,0,e._getItemsLength()-1),l==="nearest"){const d=e._getItemOffset(r),a=e._getScrollOffset();if(d<a)l="start";else if(d+e._getItemSize(r)>a+e._getViewportSize())l="end";else return}u(()=>_+e._getStartSpacerSize()+e._getItemOffset(r)+(l==="end"?e._getItemSize(r)-e._getViewportSize():l==="center"?(e._getItemSize(r)-e._getViewportSize())/2:0),f)},_fixScrollJump:()=>{n&&n._fixScrollJump()}}},$e=(e,t)=>{let s;return{_observe(n){const o=t?"scrollX":"scrollY",i=Q(n),c=H(i),u=i.body,r=(l,f,_,d=0)=>{const a=_?"offsetLeft":"offsetTop",z=d+(_&&ee()?c.innerWidth-l[a]-l.offsetWidth:l[a]),I=l.offsetParent;return l===f||!I?z:r(I,f,_,z)};s=Le(e,c,t,()=>D(c[o],t),(l,f)=>{f?c.scroll({[t?"left":"top"]:e._getScrollOffset()+l}):c.scrollBy(t?l:0,t?0:l)},()=>r(n,u,t))},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}},Qe=ve({props:{_children:{type:Object,required:!0},_resizer:{type:Function,required:!0},_index:{type:Number,required:!0},_offset:{type:Number,required:!0},_hide:{type:Boolean},_isHorizontal:{type:Boolean},_isSSR:{type:Boolean}},setup(e){const t=Ee();return Re(()=>t.value&&e._index,(s,n,o)=>{o(e._resizer(t.value,e._index))},{flush:"post"}),()=>{const{_children:s,_offset:n,_hide:o,_isHorizontal:i,_isSSR:c}=e,u={margin:0,padding:0,position:o&&c?void 0:"absolute",[i?"height":"width"]:"100%",[i?"top":"left"]:"0px",[i?ee()?"right":"left":"top"]:n+"px",visibility:!o||c?"visible":"hidden"};return i&&(u.display="flex"),Te("div",{ref:t,style:u},[s],4)}}}),He=(e,t)=>{const s=e.key;return U(s)?s:"_"+t},et=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};export{Pe as A,Qe as L,N as S,A as U,et as _,We as a,Ke as b,Xe as c,Ye as d,He as e,Ge as f,qe as g,je as h,Ze as i,$e as j};
