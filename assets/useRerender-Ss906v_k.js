import{r as F}from"./index-yp3VsGQP.js";const T=Math.min,w=Math.max,te=Math.abs,De=Object.values,ze=Array.isArray,q=setTimeout,Y=(e,t,s)=>T(s,w(t,e)),U=e=>e!=null,Ee=e=>{const t=[...e].sort((n,o)=>n-o),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},he=(e,t)=>{let s;const n=()=>{U(s)&&clearTimeout(s)},o=()=>{n(),s=q(()=>{s=null,e()},t)};return o._cancel=n,o},N=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},we=e=>getComputedStyle(e),A=-1,G=(e,t,s)=>{const n=s?"unshift":"push";for(let o=0;o<t;o++)e[n](A);return e},D=(e,t)=>{const s=e._sizes[t];return s===A?e._defaultItemSize:s},be=(e,t,s)=>{const n=e._sizes[t]===A;return e._sizes[t]=s,e._computedOffsetIndex=T(t,e._computedOffsetIndex),n},Q=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=D(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},Le=e=>e._length?Q(e,e._length-1)+D(e,e._length-1):0,se=(e,t,s)=>{let n=Q(e,s);for(;s>=0&&s<e._length;)if(n<=t){const o=D(e,s);if(n+o>t)break;n+=o,s++}else n-=D(e,--s);return Y(s,0,e._length-1)},ne=(e,t,s,n)=>{const o=se(e,t,T(s,e._length-1));return[o,se(e,t+n,o)]},Re=e=>{const t=e._sizes.filter(n=>n!==A),s=t[0];e._defaultItemSize=t.every(n=>n===s)?s:Ee(t)},ve=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:G([],e),_offsets:G([],e)}),re=(e,t,s)=>{const n=t-e._length,o=n>0;let f;return o?(f=e._defaultItemSize*n,G(e._sizes,n,s),G(e._offsets,n)):(f=(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((i,u)=>i+(u===A?e._defaultItemSize:u),0),e._offsets.splice(n)),e._computedOffsetIndex=s?-1:T(t-1,e._computedOffsetIndex),e._length=t,[f,o]},ce=typeof window<"u",ue=()=>document.documentElement,Te=N(e=>{const t="scrollLeft",s=e[t];e[t]=1;const n=e[t]<1;return e[t]=s,n}),H=N(()=>ce?we(ue()).direction==="rtl":!1),fe=N(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),ye=N(()=>"scrollBehavior"in ue().style),Ce=1.5,P=0,le=1,ae=2,j=0,Ae=1,oe=2,V=1,K=2,Ne=3,_e=4,de=5,me=6,Se=7,B=1,$=2,xe=4,Me=8,Je=e=>w(e._getTotalSize(),e._getViewportSize()),Pe=e=>w(e._getTotalSize(),e._getViewportSize()-e._getStartSpacerSize()-e._getEndSpacerSize()),Ve=(e,t,s)=>w(e-(s===le?1:w(1,t)),0),Ke=(e,t,s,n)=>T(e+(s===ae?1:w(1,t)),n-1),Z=(e,t,s)=>t.reduce((n,[o,f])=>{const i=f-D(e,o);return(!s||i>0)&&(n+=i),n},0),Ue=(e,t=40,s=0,n,o,f=0,i=0)=>{let u=!!s,_=[],r=0,c=0,l=0,d=0,a=0,m=0,g=P,S=j,O=u?[0,w(s-1,0)]:null,I=[0,0];const p=n||ve(e,t),y=new Set,x=()=>Le(p),C=()=>x()+f+i,M=()=>c-f,W=()=>w(0,C()-r),ee=h=>{fe()&&g!==P?a+=h:(d+=h,l++)};return{_getStateVersion(){return _},_getCacheSnapshot(){return JSON.parse(JSON.stringify(p))},_getRange(){return O?[T(I[0],O[0]),w(I[1],O[1])]:m?I:I=ne(p,M()+a+d,I[0],r)},_isUnmeasuredItem(h){return p._sizes[h]===A},_hasUnmeasuredItemsInFrozenRange(){return O?p._sizes.slice(w(0,O[0]-1),T(p._length-1,O[1]+1)+1).includes(A):!1},_getItemOffset(h){return Q(p,h)-a},_getItemSize(h){return D(p,h)},_getItemsLength(){return p._length},_getScrollOffset(){return c},_getMaxScrollOffset:W,_getScrollDirection(){return g},_getViewportSize(){return r},_getStartSpacerSize(){return f},_getEndSpacerSize(){return i},_getTotalSize:x,_getJumpCount(){return l},_flushJump(){return r>C()?d=0:(m=d,d=0,m)},_subscribe(h,b){const J=[h,b];return y.add(J),()=>{y.delete(J)}},_update(h,b){let J,X,L=0;switch(h){case V:{const z=b.filter(([v,k])=>p._sizes[v]!==k);if(!z.length)break;let E=0;if(c!==0)if(c>W()-Ce)E=Z(p,z,!0);else if(S===oe)E=Z(p,z);else{const[v]=I;E=Z(p,z.filter(([k])=>k<v))}E&&ee(E);let R=!1;z.forEach(([v,k])=>{be(p,v,k)&&(R=!0)}),o&&R&&!c&&Re(p),L=$,X=!0;break}case K:{r!==b&&(r=b,L=$);break}case Ne:{if(b[1]){const z=W()-c,[E,R]=re(p,b[0],!0);ee(R?E:-T(E,z)),R&&(S=oe),L=B}else re(p,b[0]);break}case _e:{const z=Y(b,0,W()),E=m;if(m=0,z===c)break;const R=z-c,v=te(R);!(E&&v<te(E)+1)&&S===j&&(g=R<0?ae:le),u&&(O=null,u=!1),X=v>r,c=z,L=B+xe;break}case de:{L=Me,g!==P&&(J=!0,L+=B),g=P,S=j,O=null;break}case me:{S=Ae;break}case Se:{O=ne(p,b,I[0],r),L=B;break}}L&&(_=[],J&&a&&(d+=a,a=0,l++),y.forEach(([z,E])=>{L&z&&E(X)}))}}},We=ce?F.useLayoutEffect:F.useEffect,ge=(e,t,s,n)=>Te(e)||n?-s:t._getMaxScrollOffset()-s,pe=(e,t,s,n,o)=>{const f=Date.now;let i=0,u=!1,_=!1,r=!1,c=!1;const l=he(()=>{if(u||_){u=!1,l();return}r=!1,e._update(de)},150),d=()=>{i=f(),r&&(c=!0),e._update(_e,n()),l()},a=S=>{if(u||e._getScrollDirection()===P||S.ctrlKey)return;const O=f()-i;150>O&&50<O&&(s?S.deltaX:S.deltaY)&&(u=!0)},m=()=>{_=!0,r=c=!1},g=()=>{_=!1,fe()&&(r=!0)};return t.addEventListener("scroll",d),t.addEventListener("wheel",a,{passive:!0}),t.addEventListener("touchstart",m,{passive:!0}),t.addEventListener("touchend",g,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",d),t.removeEventListener("wheel",a),t.removeEventListener("touchstart",m),t.removeEventListener("touchend",g),l._cancel()},_fixScrollJump:S=>{o(S,c),c=!1}}},Be=(e,t)=>{let s,n,o;const f=t?"scrollLeft":"scrollTop",i=t?"overflowX":"overflowY",u=(r,c)=>t&&H()?ge(s,e,r,c):r,_=async(r,c)=>{if(!s)return;o&&o();const l=()=>Y(r(),0,e._getMaxScrollOffset()),d=()=>{let a;return[new Promise((m,g)=>{a=m,q(o=g,150)}),e._subscribe($,()=>{a&&a()})]};if(c&&ye()){for(;e._update(Se,l()),!!e._hasUnmeasuredItemsInFrozenRange();){const[a,m]=d();try{await a}catch{return}finally{m()}}s.scrollTo({[t?"left":"top"]:u(l()),behavior:"smooth"})}else for(;;){const[a,m]=d();try{s[f]=u(l()),e._update(me),await a}catch{return}finally{m()}}};return{_observe(r){s=r,n=pe(e,r,t,()=>u(r[f]),(c,l)=>{if(l){const d=r.style,a=d[i];d[i]="hidden",q(()=>{d[i]=a})}r[f]+=u(c,!0)})},_dispose(){n&&n._dispose()},_scrollTo(r){_(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),_(()=>r)},_scrollToIndex(r,{align:c,smooth:l}={}){if(r=Y(r,0,e._getItemsLength()-1),c==="nearest"){const d=e._getItemOffset(r),a=e._getScrollOffset();if(d<a)c="start";else if(d+e._getItemSize(r)>a+e._getViewportSize())c="end";else return}_(()=>e._getStartSpacerSize()+(c==="end"?e._getItemOffset(r)+e._getItemSize(r)-e._getViewportSize():c==="center"?e._getItemOffset(r)+(e._getItemSize(r)-e._getViewportSize())/2:e._getItemOffset(r)),l)},_fixScrollJump:r=>{n&&n._fixScrollJump(r)}}},Oe=(e,t,s,n=0)=>{const o=s?"offsetLeft":"offsetTop",f=n+(s&&H()?window.innerWidth-e[o]-e.offsetWidth:e[o]),i=e.offsetParent;return e===t||!i?f:Oe(i,t,s,f)},Fe=(e,t)=>{let s;return{_observe(n){const o=t?"scrollX":"scrollY",f=(i,u)=>t&&H()?ge(n,e,i,u):i;s=pe(e,window,t,()=>f(window[o])-Oe(n,document.body,t),i=>{window.scrollBy(t?f(i,!0):0,t?0:i)})},_dispose(){s&&s._dispose()},_fixScrollJump:n=>{s&&s._fixScrollJump(n)}}},ie="current",Ie=(e,t)=>{if(ze(e))for(const s of e)Ie(s,t);else!U(e)||typeof e=="boolean"||t.push(e)},Ye=e=>{const t=[];return Ie(e,t),t},Ge=(e,t)=>{const s=e.key;return U(s)?s:"_"+t},Xe=e=>{const t=F.useRef();return t[ie]||(t[ie]=e())},je=(e,t)=>{let s;const n=t?"width":"height",o=new WeakMap,f=N(()=>new ResizeObserver(i=>{const u=[];for(const{target:_,contentRect:r}of i)if(_.offsetParent)if(_===s)e._update(K,r[n]);else{const c=o.get(_);U(c)&&u.push([c,r[n]])}u.length&&e._update(V,u)}));return{_observeRoot(i){f().observe(s=i)},_observeItem:(i,u)=>{const _=f();return o.set(i,u),_.observe(i),()=>{o.delete(i),_.unobserve(i)}},_dispose(){f().disconnect()}}},Ze=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",o=new WeakMap,f=N(()=>new ResizeObserver(u=>{const _=[];for(const{target:r,contentRect:c}of u){if(!r.offsetParent)continue;const l=o.get(r);U(l)&&_.push([l,c[s]])}_.length&&e._update(V,_)})),i=()=>{e._update(K,window[n])};return{_observeRoot(){window.addEventListener("resize",i),i()},_observeItem:(u,_)=>{const r=f();return o.set(u,_),r.observe(u),()=>{o.delete(u),r.unobserve(u)}},_dispose(){window.removeEventListener("resize",i),f().disconnect()}}},qe=(e,t)=>{let s;const n="height",o="width",f=new WeakMap,i=new Set,u=new Set,_=new Map,r=(l,d)=>`${l}-${d}`,c=N(()=>new ResizeObserver(l=>{const d=new Set,a=new Set;for(const{target:m,contentRect:g}of l)if(m.offsetParent)if(m===s)e._update(K,g[n]),t._update(K,g[o]);else{const S=f.get(m);if(S){const[O,I]=S,p=r(O,I),y=_.get(p),x=[g[n],g[o]];let C,M;y?(y[0]!==x[0]&&(C=!0),y[1]!==x[1]&&(M=!0)):C=M=!0,C&&d.add(O),M&&a.add(I),(C||M)&&_.set(p,x)}}if(d.size){const m=[];d.forEach(g=>{let S=0;u.forEach(O=>{const I=_.get(r(g,O));I&&(S=w(S,I[0]))}),S&&m.push([g,S])}),e._update(V,m)}if(a.size){const m=[];a.forEach(g=>{let S=0;i.forEach(O=>{const I=_.get(r(O,g));I&&(S=w(S,I[1]))}),S&&m.push([g,S])}),t._update(V,m)}}));return{_observeRoot(l){c().observe(s=l)},_observeItem(l,d,a){const m=c();return f.set(l,[d,a]),i.add(d),u.add(a),m.observe(l),()=>{f.delete(l),m.unobserve(l)}},_dispose(){c().disconnect()}}},$e=e=>F.useReducer(e._getStateVersion,void 0,e._getStateVersion)[1];export{Ne as A,P as S,B as U,Xe as a,$e as b,$ as c,Ke as d,Ue as e,qe as f,Je as g,Be as h,H as i,Pe as j,xe as k,Me as l,Ge as m,je as n,Ve as o,w as p,Ze as q,ie as r,Fe as s,Ye as t,We as u,De as v};
