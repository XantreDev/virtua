import{j as H}from"./jsx-runtime-c3d7f245.js";import{r as m}from"./index-c6dae603.js";import{r as oe}from"./index-eb008d06.js";const q=Math.min,A=Math.max,se=Math.abs,U=Date.now,le=Object.values,te=setTimeout,P=(e,t,r)=>q(r,A(t,e)),F=e=>e!=null,ie=(e,t)=>{let r;const n=()=>{F(r)&&clearTimeout(r)},s=()=>{n(),r=te(()=>{r=null,e()},t)};return s.t=n,s},ne=e=>{let t,r;return(...n)=>(t||(t=!0,r=e(...n)),r)},W=-1,N=(e,t)=>{const r=e.o[t];return r===W?e.i:r},Y=(e,t)=>{if(!e.l)return 0;if(e.u>=t)return e.h[t];let r=e.u,n=e.h[r];for(;r<t;)n+=N(e,r),e.h[++r]=n;return e.u=t,n},$=(e,t,r)=>{let n=0;if(r>=0)for(;t<e.l-1;){const s=N(e,t++);if((n+=s)>=r){n-s/2>=r&&t--;break}}else for(;t>0;){const s=N(e,--t);if((n-=s)<=r){n+s/2<r&&t++;break}}return P(t,0,e.l-1)},Q=(e,t,r)=>$(e,r,t-Y(e,r)),Z=(e,t)=>{for(let r=e.l;r<t;r++)e.o.push(W),e.h.push(r===0?0:W);e.l=t},X=(e,t)=>t.reduce((r,[n,s])=>r+(s-N(e,n)),0),ce=(e,t=40,r=0,n=((c,l)=>{const p={i:l,l:0,u:0,o:[],h:[]};return Z(p,c),p})(e,t),s,a)=>{let c=t*A(r-1,0),l=0,p=0,i=0,d=0,v=!1,R=!1,b=[0,r];const S=new Set,L=()=>(o=>o.l?Y(o,o.l-1)+N(o,o.l-1):0)(n),T=()=>L()-c,j=o=>{const u=d;return d=o,d!==u&&(d===0||u===0)};return{_:()=>JSON.parse(JSON.stringify(n)),g(){const[o,u]=b,f=Q(n,l,o),h=$(n,f,c);return o===f&&u===h?b:b=[f,h]},m:o=>n.o[o]===W,p(o){const u=Q(n,o,b[0]);return((f,h,g)=>f.o.slice(h,g+1).includes(W))(n,A(0,u-1),q(n.l-1,$(n,u,c)+1))},v(o){const u=Y(n,o);return s?u+A(0,c-L()):u},S:o=>N(n,o),I:()=>n.l,R:()=>l,k:T,O:()=>d!==0,C:()=>c,T:()=>A(L(),c),M:()=>p,H(){const o=i;return i=0,o},J(o,u){const f=[o,u];return S.add(f),()=>{S.delete(f)}},W(o,u){let f,h=0;switch(o){case 1:{const g=u.filter(([k,E])=>n.o[k]!==E);if(!g.length)break;let x=0;if(d===2)x=X(n,g);else if(v){const[k]=b;l===0||(x=l>T()-1.5?X(n,g):X(n,g.filter(([E])=>E<k)))}x&&(i=x,p++,h+=4);let z=!1;g.forEach(([k,E])=>{((M,w,C)=>{const O=M.o[w]===W;return M.o[w]=C,M.u=q(w,M.u),O})(n,k,E)&&(z=!0)}),a&&z&&!l&&(k=>{const E=k.o.filter(w=>w!==W),M=E[0];k.i=E.every(w=>w===M)?M:(w=>{const C=[...w].sort((K,y)=>K-y),O=w.length/2|0;return C.length%2==0?(C[O-1]+C[O])/2:C[O]})(E)})(n),h+=2,R=f=!0;break}case 2:c!==u&&(c=u,h=2);break;case 3:case 4:if(l===u)break;if(o===3){const g=R;R=!1,d!==0&&g||v||j(l>u?2:1)&&(h+=8),f=se(l-u)>c,h+=16}l=P(u,0,T()),h+=1;break;case 5:j(0)&&(h=8),v=!1;break;case 6:v=!0}h&&S.forEach(([g,x])=>{h&g&&x(f)})},L(o){n.l!==o&&((u,f)=>{const h=f-u.l;if(h>0)Z(u,f);else{for(let g=h;g<0;g++)u.o.pop(),u.h.pop();u.l=f,u.u=q(u.u,f-1)}})(n,o)}}},B=typeof window<"u"?m.useLayoutEffect:m.useEffect,I="current",ue={},re=(e,t)=>{if(Array.isArray(e))for(const r of e)re(r,t);else F(e)&&typeof e!="boolean"&&t.push(e)},ae=e=>{const t=[];return re(e,t),t},G=e=>{const t=m.useRef(e);return B(()=>{t[I]=e},[e]),t},J=(e,t,r,n)=>{const[s,a]=m.useState(t),c=G(t);if(m.useLayoutEffect(()=>{const l=()=>{a(()=>c[I]())};return e.J(r,p=>{p?oe.flushSync(l):l()})},[]),n){const l=t();s!==l&&a(l)}return s},de=ne(e=>{const t="scrollLeft",r=e[t];e[t]=1;const n=e[t]<1;return e[t]=r,n}),fe=(e,t,r)=>(()=>{let n=U()-50;return(...s)=>{const a=U();n+50<a&&(n=a,(c=>{if(e.O()&&!c.ctrlKey&&(t?c.deltaX:c.deltaY)){const l=e.R();l>0&&l<e.k()&&r()}})(...s))}})(),he=(e,t,r)=>{let n,s;const a=t?"scrollLeft":"scrollTop",c=()=>n?t?n.scrollWidth:n.scrollHeight:0,l=(i,d)=>t&&r?de(n)||d?-i:e.k()-i:i,p=async i=>{if(!n)return;const d=()=>P(i(),0,c()-e.C());for(;;){const v=d();if(e.W(4,v),!e.p(v))break;s&&s[1]();const R=e.J(2,()=>{s&&s[0]()});try{await new Promise((b,S)=>{let L=!1;const T=()=>{L||(L=!0,b(),s=void 0)};s=[T,S],te(T,250)})}catch{return}finally{R()}}n[a]=l(d()),e.W(6)};return{$(i){n=i;const d=()=>{e.W(3,l(i[a]))},v=ie(()=>{d(),e.W(5)},150),R=()=>{d(),v()},b=fe(e,t,v);return i.addEventListener("scroll",R),i.addEventListener("wheel",b,{passive:!0}),()=>{i.removeEventListener("scroll",R),i.removeEventListener("wheel",b),v.t()}},B:c,j(i){p(()=>i)},A(i){i+=e.R(),p(()=>i)},N(i,d){i=P(i,0,e.I()-1),p(d==="end"?()=>e.v(i)+e.S(i)-e.C():()=>e.v(i))},U:i=>{n&&(n[a]+=l(i,!0))}}},pe=e=>{const t=m.useRef();return t[I]||(t[I]=e())},me=(e,t)=>{let r;const n=t?"width":"height",s=new WeakMap,a=ne(()=>new ResizeObserver(c=>{const l=[];for(const{target:p,contentRect:i}of c)if(p===r)e.W(2,i[n]);else{const d=s.get(p);F(d)&&l.push([d,i[n]])}l.length&&e.W(1,l)}));return{V(c){r=c;const l=a();return l.observe(c),()=>{l.disconnect()}},D(c,l){const p=a();return s.set(c,l),p.observe(c),()=>{s.delete(c),p.unobserve(c)}}}},ve=m.forwardRef(({children:e,attrs:t,width:r,height:n,scrolling:s},a)=>H("div",{ref:a,...t,children:H("div",{style:m.useMemo(()=>({position:"relative",visibility:"hidden",width:r??"100%",height:n??"100%",pointerEvents:s?"none":"auto"}),[r,n,s]),children:e})})),ge=m.memo(({P:e,X:t,Y:r,q:n,F:s,G:a,K:c})=>{const l=m.useRef(null),p=J(r,()=>r.v(n),2,!0),i=J(r,()=>r.m(n),2,!0);return B(()=>t.D(l[I],n),[n]),H(s,{ref:l,style:m.useMemo(()=>{const d=c?"right":"left",v={margin:0,padding:0,position:"absolute",[a?"height":"width"]:"100%",[a?"top":d]:0,[a?d:"top"]:p,visibility:i?"hidden":"visible"};return a&&(v.display="flex"),v},[p,i]),children:e})}),ye=m.forwardRef(({children:e,overscan:t=4,initialItemSize:r,initialItemCount:n,horizontal:s,mode:a,cache:c,components:{Root:l=ve,Item:p="div"}=ue,onScroll:i,onScrollStop:d,onRangeChange:v,...R},b)=>{const S=m.useMemo(()=>ae(e),[e]),L=S.length,T=G(i),j=G(d),[o,u,f,h,g]=pe(()=>{const y=!!s,_=a==="rtl",V=ce(L,r,n,c,a==="reverse",!r);return[V,me(V,y),he(V,y,_),y,_]});o.L(L);const[x,z]=J(o,o.g,3),k=J(o,o.O,8),E=J(o,o.M,4),M=J(o,o.T,2,!0),w=m.useRef(null);B(()=>{const y=w[I],_=u.V(y),V=f.$(y),D=o.J(16,()=>{T[I]&&T[I](o.R())});return()=>{_(),V(),D()}},[]),B(()=>{const y=o.H();y&&f.U(y)},[E]),m.useEffect(()=>{k||j[I]&&j[I]()},[k]),m.useEffect(()=>{v&&v(x,z)},[x,z]),m.useImperativeHandle(b,()=>({get cache(){return o._()},get scrollOffset(){return o.R()},get scrollSize(){return f.B()},get viewportSize(){return o.C()},scrollToIndex:f.N,scrollTo:f.j,scrollBy:f.A}),[]);const C=A(x-t,0),O=q(z+t,L-1),K=m.useMemo(()=>{const y=[];for(let _=C;_<=O;_++){const V=S[_],D=V.key;y.push(H(ge,{X:u,Y:o,q:_,F:p,P:V,G:h,K:g},F(D)?D:"_"+_))}return y},[S,C,O]);return H(l,{ref:w,width:h?M:void 0,height:h?void 0:M,scrolling:k,attrs:m.useMemo(()=>({...R,style:{overflow:h?"auto hidden":"hidden auto",display:h?"inline-block":"block",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...R.style}}),le(R)),children:K})}),ee=m.memo(({count:e,Component:t,handle:r})=>{const n=m.useRef(null);return m.useImperativeHandle(r,()=>({scrollToIndex:s=>{var a;(a=n.current)==null||a.scrollToIndex(s)}})),H(ye,{ref:n,children:Array.from({length:e}).map((s,a)=>H(t,{index:a},a))})});try{ee.displayName="VirtuaList",ee.__docgenInfo={description:"",displayName:"VirtuaList",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ForwardRefExoticComponent<{ index: number; } & RefAttributes<HTMLDivElement>>"}},handle:{defaultValue:null,description:"",name:"handle",required:!1,type:{name:"Ref<ListHandle>"}}}}}catch{}export{ee as V};
//# sourceMappingURL=virtua-adbb8f31.js.map
