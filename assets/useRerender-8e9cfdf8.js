import{r as M}from"./index-c6dae603.js";import{j as ee}from"./jsx-runtime-c3d7f245.js";const x=Math.min,h=Math.max,ve=Math.abs,te=Date.now,Ve=Object.values,be=Array.isArray,ce=setTimeout,D=(e,t,n)=>x(n,h(t,e)),K=e=>e!=null,Ie=e=>{const t=[...e].sort((s,i)=>s-i),n=e.length/2|0;return t.length%2===0?(t[n-1]+t[n])/2:t[n]},fe=(e,t)=>{let n;const s=()=>{K(n)&&clearTimeout(n)},i=()=>{s(),n=ce(()=>{n=null,e()},t)};return i._cancel=s,i},he=(e,t)=>{let n=te()-t;return(...s)=>{const i=te();n+t<i&&(n=i,e(...s))}},k=e=>{let t,n;return(...s)=>(t||(t=!0,n=e(...s)),n)},Q=e=>getComputedStyle(e),j=e=>e?parseFloat(e):0,T=-1,V=(e,t)=>{const n=e._sizes[t];return n===T?e._defaultItemSize:n},Oe=(e,t,n)=>{const s=e._sizes[t]===T;return e._sizes[t]=n,e._computedOffsetIndex=x(t,e._computedOffsetIndex),s},Y=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];let n=e._computedOffsetIndex,s=e._offsets[n];for(;n<t;)s+=V(e,n),e._offsets[++n]=s;return e._computedOffsetIndex=t,s},Ee=e=>e._length?Y(e,e._length-1)+V(e,e._length-1):0,ne=(e,t,n)=>{let s=Y(e,n);for(;n>=0&&n<e._length;)if(s<=t){const i=V(e,n);if(s+i>t)break;s+=i,n++}else s-=V(e,--n);return D(n,0,e._length-1)},se=(e,t,n,s)=>{const i=ne(e,t,x(n,e._length-1));return[i,ne(e,t+s,i)]},Re=(e,t,n)=>e._sizes.slice(h(0,t-1),x(e._length-1,n+1)+1).includes(T),ze=e=>{const t=e._sizes.filter(s=>s!==T),n=t[0];e._defaultItemSize=t.every(s=>s===n)?n:Ie(t)},de=(e,t,n)=>{const s=n?"unshift":"push";for(let i=e._length;i<t;i++)e._sizes[s](T),e._offsets.push(i===0?0:T);e._length=t},Le=(e,t)=>{const n={_defaultItemSize:t,_length:0,_computedOffsetIndex:0,_sizes:[],_offsets:[]};return de(n,e),n},re=(e,t,n)=>{const s=t-e._length,i=s<0;let d;return i?(d=(n?e._sizes.splice(0,-s):e._sizes.splice(s)).reduce((o,r)=>o+(r===T?e._defaultItemSize:r),0),e._offsets.splice(s)):(d=e._defaultItemSize*s,de(e,e._length+s,n)),e._computedOffsetIndex=n?0:D(t-1,0,e._computedOffsetIndex),e._length=t,[d,i]},$=typeof window<"u",ye=k(e=>{const t="scrollLeft",n=e[t];e[t]=1;const s=e[t]<1;return e[t]=n,s}),F=k(()=>$?Q(document.body).direction==="rtl":!1),Te=k(()=>$?/iP(hone|od|ad)/.test(navigator.userAgent):!1),oe=(e,t,n)=>t.reduce((s,[i,d])=>{const o=d-V(e,i);return(!n||o>0)&&(s+=o),s},0),Ce=1.5,W=0,G=1,X=2,P=1,J=2,xe=3,U=4,ae=5,H=6,_e=7,q=1,Z=2,Ae=4,ke=(e,t=40,n=0,s=Le(e,t),i,d)=>{let o=t*h(n-1,0),r=0,u=0,m=0,c=0,f=W,_=!1,S=!1,l=!1,w=[0,n];const p=Te(),v=new Set,b=()=>Ee(s),R=()=>b()-o,A=a=>D(a,0,R()),N=a=>{p&&f!==W?c+=a:(m+=a,u++)},C=a=>{const g=f;return f=a,f!==g};return{_getCache(){return JSON.parse(JSON.stringify(s))},_getRange(){return w=se(s,r+c,w[0],o)},_isUnmeasuredItem(a){return s._sizes[a]===T},_hasUnmeasuredItemsInTargetViewport(a){const[g,z]=se(s,a,w[0],o);return Re(s,g,z)},_getItemOffset(a){const g=Y(s,a)-c;return i?g+h(0,o-b()):g},_getItemSize(a){return V(s,a)},_getItemsLength(){return s._length},_getScrollOffset(){return r},_getScrollOffsetMax:R,_getScrollDirection(){return f},_getViewportSize(){return o},_getCorrectedScrollSize(){return h(b(),o)},_getJumpCount(){return u},_flushJump(){const a=m;return m=0,a},_subscribe(a,g){const z=[a,g];return v.add(z),()=>{v.delete(z)}},_update(a,g){let z,B,L=0;switch(a){case P:{const I=g.filter(([O,y])=>s._sizes[O]!==y);if(!I.length)break;if(!_){let O=0;if(r!==0)if(r>R()-Ce)O=oe(s,I,!0);else{const[y]=w;O=oe(s,I.filter(([we])=>we<y))}O&&N(O)}let E=!1;I.forEach(([O,y])=>{Oe(s,O,y)&&(E=!0)}),d&&E&&!r&&ze(s),L+=Z,l=B=!0;break}case J:{o!==g&&(o=g,L=Z);break}case xe:{if(g[1]){const I=R()-r,[E,O]=re(s,g[0],!0),y=O?-x(E,I):E;N(y),p||(r=A(r+y)),L=q}else re(s,g[0]);break}case U:case ae:{if(r===g)break;if(a===U){const I=g-r,E=l;l=!1,(f===W||!E)&&!S&&C(I<0?X:G),c&&(f===X&&g-h(c,0)<=0||f===G&&g-x(c,0)>=R())&&(z=!0),B=ve(I)>o,L+=Ae}else _=!0;r=A(g),L+=q;break}case H:{C(W)&&(z=!0,L=q),S=_=!1;break}case _e:{_=!1,S=!0;break}}L&&(z&&c&&(l=!0,m+=c,r+=c,c=0,u++),v.forEach(([I,E])=>{L&I&&E(B)}))}}},We=$?M.useLayoutEffect:M.useEffect,me=(e,t,n)=>he(s=>{if(e._getScrollDirection()!==W&&!s.ctrlKey&&(t?s.deltaX:s.deltaY)){const i=e._getScrollOffset();i>0&&i<e._getScrollOffsetMax()&&n()}},50),pe=(e,t,n,s)=>ye(e)||s?-n:t._getScrollOffsetMax()-n,De=(e,t)=>{let n,s;const i=t?"scrollLeft":"scrollTop",d=(r,u)=>t&&F()?pe(n,e,r,u):r,o=async r=>{if(!n)return;const u=()=>D(r(),0,e._getScrollOffsetMax());for(;;){const m=u();if(e._update(ae,m),!e._hasUnmeasuredItemsInTargetViewport(m))break;s&&s[1]();const c=e._subscribe(Z,()=>{s&&s[0]()});try{await new Promise((f,_)=>{let S=!1;const l=()=>{S||(S=!0,f(),s=void 0)};s=[l,_],ce(l,250)})}catch{return}finally{c()}}n[i]=d(u()),e._update(_e)};return{_initRoot(r){n=r;let u=!1;const m=()=>{e._update(U,d(r[i]))},c=fe(()=>{if(u){c();return}m(),e._update(H)},150),f=()=>{m(),c()},_=me(e,t,c),S=()=>{u=!0},l=()=>{u=!1};return r.addEventListener("scroll",f),r.addEventListener("wheel",_,{passive:!0}),r.addEventListener("touchstart",S,{passive:!0}),r.addEventListener("touchend",l,{passive:!0}),()=>{r.removeEventListener("scroll",f),r.removeEventListener("wheel",_),r.removeEventListener("touchstart",S),r.removeEventListener("touchend",l),c._cancel()}},_scrollTo(r){o(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),o(()=>r)},_scrollToIndex(r,u){r=D(r,0,e._getItemsLength()-1),o(u==="end"?()=>e._getItemOffset(r)+e._getItemSize(r)-e._getViewportSize():()=>e._getItemOffset(r))},_fixScrollJump:r=>{n&&(n[i]+=d(r,!0))}}},Pe=(e,t)=>{let n;const s=t?"scrollX":"scrollY",i=t?"offsetLeft":"offsetTop",d=(o,r)=>t&&F()?pe(n,e,o,r):o;return{_initRoot(o){n=o;let r=!1;const u=(l,w)=>{const p=w+(t&&F()?window.innerWidth-l[i]-l.offsetWidth:l[i]),v=l.offsetParent;return l===document.body||!v?p:u(v,p)},m=()=>{r&&e._update(U,d(window[s])-u(o,0))},c=fe(()=>{m(),e._update(H)},150),f=()=>{m(),c()},_=me(e,t,c),S=new IntersectionObserver(([l])=>{r=l.isIntersecting});return S.observe(o),window.addEventListener("scroll",f),window.addEventListener("wheel",_,{passive:!0}),()=>{S.disconnect(),window.removeEventListener("scroll",f),window.removeEventListener("wheel",_),c._cancel()}},_fixScrollJump:o=>{window.scrollBy(t?d(o,!0):0,t?0:o)}}},ie="current",Je={},ge=(e,t)=>{if(be(e))for(const n of e)ge(n,t);else!K(e)||typeof e=="boolean"||t.push(e)},Ue=e=>{const t=[];return ge(e,t),t},Ke=(e,t,n)=>h(e-(n===G?1:h(1,t)),0),Be=(e,t,n,s)=>x(e+(n===X?1:h(1,t)),s-1),qe=e=>{const t=M.useRef();return t[ie]||(t[ie]=e())},Se={box:"border-box"},je=(e,t)=>{let n;const s=t?"width":"height",i=new WeakMap,d=k(()=>new ResizeObserver(o=>{const r=[];for(const{target:u,contentRect:m}of o)if(u.offsetParent)if(u===n)e._update(J,m[s]+m[t?"left":"top"]+j(Q(n)[t?"paddingRight":"paddingBottom"]));else{const c=i.get(u);K(c)&&r.push([c,m[s]])}r.length&&e._update(P,r)}));return{_observeRoot(o){n=o;const r=d();return r.observe(o,Se),()=>{r.disconnect()}},_observeItem(o,r){const u=d();return i.set(o,r),u.observe(o),()=>{i.delete(o),u.unobserve(o)}}}},Fe=(e,t)=>{const n=t?"width":"height",s=t?"innerWidth":"innerHeight",i=new WeakMap,d=k(()=>new ResizeObserver(o=>{const r=[];for(const{target:u,contentRect:m}of o){if(!u.offsetParent)continue;const c=i.get(u);K(c)&&r.push([c,m[n]])}r.length&&e._update(P,r)}));return{_observeRoot(){const o=()=>{e._update(J,window[s])};return window.addEventListener("resize",o),o(),()=>{window.removeEventListener("resize",o),d().disconnect()}},_observeItem(o,r){const u=d();return i.set(o,r),u.observe(o),()=>{i.delete(o),u.unobserve(o)}}}},Ge=(e,t)=>{let n;const s="height",i="width",d=new WeakMap,o=new Set,r=new Set,u=new Map,m=(f,_)=>`${f}-${_}`,c=k(()=>new ResizeObserver(f=>{const _=new Set,S=new Set;for(const{target:l,contentRect:w}of f)if(l.offsetParent)if(l===n){const p=Q(n);e._update(J,w[s]+w.top+j(p.paddingBottom)),t._update(J,w[i]+w.left+j(p.paddingRight))}else{const p=d.get(l);if(p){const[v,b]=p,R=m(v,b),A=u.get(R),N=[w[s],w[i]];let C,a;A?(A[0]!==N[0]&&(C=!0),A[1]!==N[1]&&(a=!0)):C=a=!0,C&&_.add(v),a&&S.add(b),(C||a)&&u.set(R,N)}}if(_.size){const l=[];_.forEach(w=>{let p=0;r.forEach(v=>{const b=u.get(m(w,v));b&&(p=h(p,b[0]))}),p&&l.push([w,p])}),e._update(P,l)}if(S.size){const l=[];S.forEach(w=>{let p=0;o.forEach(v=>{const b=u.get(m(v,w));b&&(p=h(p,b[1]))}),p&&l.push([w,p])}),t._update(P,l)}}));return{_observeRoot(f){n=f;const _=c();return _.observe(f,Se),()=>{_.disconnect()}},_observeItem(f,_,S){const l=c();return d.set(f,[_,S]),o.add(_),r.add(S),l.observe(f),()=>{d.delete(f),l.unobserve(f)}}}},ue=M.forwardRef(({children:e,attrs:t,width:n,height:s,scrolling:i},d)=>ee("div",{ref:d,...t,children:ee("div",{style:M.useMemo(()=>({position:"relative",visibility:"hidden",width:n??"100%",height:s??"100%",pointerEvents:i?"none":"auto"}),[n,s,i]),children:e})}));try{ue.displayName="Viewport",ue.__docgenInfo={description:"",displayName:"Viewport",props:{children:{defaultValue:null,description:"Renderable item elements.",name:"children",required:!0,type:{name:"ReactNode"}},attrs:{defaultValue:null,description:"Attributes that should be passed to the scrollable element.",name:"attrs",required:!0,type:{name:"ViewportComponentAttributes"}},height:{defaultValue:null,description:"Total height of items. It's undefined if component is not vertically scrollable.",name:"height",required:!0,type:{name:"number | undefined"}},width:{defaultValue:null,description:"Total width of items. It's undefined if component is not horizontally scrollable.",name:"width",required:!0,type:{name:"number | undefined"}},scrolling:{defaultValue:null,description:"Currently component is scrolling or not.",name:"scrolling",required:!0,type:{name:"boolean"}}}}}catch{}const le=()=>[],Xe=()=>M.useReducer(le,void 0,le)[1];export{xe as A,W as S,q as U,ue as V,Xe as a,We as b,Z as c,Je as d,K as e,Ue as f,ke as g,Fe as h,Pe as i,Be as j,Ke as k,F as l,Ge as m,De as n,Ae as o,je as p,ie as r,qe as u,Ve as v};
//# sourceMappingURL=useRerender-8e9cfdf8.js.map
