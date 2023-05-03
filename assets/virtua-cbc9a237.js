import{a as te,j as b}from"./jsx-runtime-c3d7f245.js";import{r as a}from"./index-c6dae603.js";import{s as Ce}from"./index-778f7dbf.js";const se=({count:e})=>te("label",{style:{width:"100%"},children:["scroll position:",b("input",{type:"range",defaultValue:"0",min:0,max:e,style:{width:"85%"},onChange:t=>{Array.from(document.querySelectorAll('*[style*="overflow"]')).filter(n=>/(auto|scroll)/.test(n.style.overflow)||/(auto|scroll)/.test(n.style.overflowY)).forEach(n=>{n.scrollTop=n.scrollHeight/e*Number(t.target.value)})}})]}),ie=[20,40,80,77],ce=a.forwardRef(({index:e},t)=>{const r=a.useRef(1);return a.useEffect(()=>{r.current+=1}),te("div",{ref:t,style:{height:ie[e%ie.length],borderBottom:"solid 1px #ccc",background:"#fff",display:"flex",justifyContent:"stretch",padding:"4px 20px"},children:[b("div",{style:{flex:1},children:e}),te("div",{children:["rendered: ",r.current]})]})}),ae=a.forwardRef(({index:e},t)=>b("div",{ref:t,style:{height:50,borderBottom:"solid 1px #ccc",background:"#fff"},children:e})),ue=a.forwardRef(({index:e},t)=>b("div",{ref:t,style:{height:50,borderBottom:"solid 1px #ccc",background:"#fff"},children:e}));try{se.displayName="ScrollInput",se.__docgenInfo={description:"",displayName:"ScrollInput",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}}}}}catch{}try{ce.displayName="ItemWithRenderCount",ce.__docgenInfo={description:"",displayName:"ItemWithRenderCount",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}}}catch{}try{ae.displayName="HeavyItem",ae.__docgenInfo={description:"",displayName:"HeavyItem",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}}}catch{}try{ue.displayName="SimpleItem",ue.__docgenInfo={description:"",displayName:"SimpleItem",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}}}catch{}const O=Math.min,U=Math.max,Me=Math.abs,de=Date.now,W=e=>e!=null,fe=(e,t)=>Array.from({length:e},(r,n)=>t(n)),P=(e,t)=>{const r=e.t[t];return r===-1?e.o:r},we=(e,t,r)=>{if(!e.l)return 0;if(e.i>=t)return r?e.u[t]+P(e,t):e.u[t];let n=e.i,u=e.u[n];for(;n<=t&&(e.u[n]=u,n!==t||r);)u+=P(e,n),n++;return e.i=t,u},pe=(e,t)=>we(e,t),Se=(e,t,r)=>{let n=0;if(r>=0)for(;t<e.l-1;){const u=P(e,t++);if((n+=u)>=r){n-u/2>=r&&t--;break}}else for(;t>0;){const u=P(e,--t);if((n-=u)<=r){n+u/2<r&&t++;break}}return O(U(t,0),e.l-1)},he=(e,t,r,n)=>Se(e,r,t-n),me=Se,ye=(e,t,r)=>({o:t,l:e,i:r?O(r.i,e-1):0,t:fe(e,n=>{const u=r&&r.t[n];return W(u)?u:-1}),u:fe(e,n=>{if(n===0)return 0;const u=r&&r.u[n];return W(u)?u:-1})}),K=typeof window<"u"?a.useLayoutEffect:a.useEffect,X=(e,t)=>Ce.useSyncExternalStore(e,t,t),I="current",ge=e=>{const t=a.useRef();return t[I]||(t[I]=e())},_e=e=>{const t=a.useRef(e);return K(()=>{t[I]=e},[e]),a.useCallback((...r)=>{t[I]&&t[I](...r)},[])},He=a.memo(({_:e,h:t,m:r,g:n,p:u})=>{const L=a.useRef(null),C=X(r.S,()=>r.I(n)),E=X(r.S,()=>r.v(n));return K(()=>t.T(L[I],n),[n]),b(u,{ref:L,style:a.useMemo(()=>{const N=r.O(),j=r.R()?"right":"left",B={margin:0,padding:0,position:"absolute",[N?"height":"width"]:"100%",[N?"top":j]:0,[N?j:"top"]:C};return N&&(B.display="flex"),E&&(B.visibility="hidden"),B},[C,E]),children:e})}),ke=a.forwardRef(({children:e,style:t,scrollSize:r,scrolling:n,horizontal:u,rtl:L},C)=>b("div",{ref:C,style:t,children:b("div",{style:a.useMemo(()=>{const E=u?r:"100%",N=u?"100%":r;return{position:"absolute",top:0,[L?"right":"left"]:0,width:E,height:N,minWidth:E,minHeight:N,pointerEvents:n?"none":"auto"}},[r,n]),children:e})})),qe=({_:e,M:t,m:r,p:n,k:u,j:L})=>{const C=X(r.S,r.A),E=r.O();return b(n,{ref:t,scrollSize:C,scrolling:u,horizontal:E,rtl:r.R(),style:a.useMemo(()=>({overflow:E?"auto hidden":"hidden auto",position:"relative",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...L}),[L]),children:e})},Te=a.forwardRef(({children:e,itemSize:t=40,overscan:r=4,horizontal:n,rtl:u,endThreshold:L=0,style:C,element:E=ke,itemElement:N="div",onEndReached:j,onScroll:B,onScrollStop:xe},be)=>{const Y=a.useMemo(()=>{const o=[];return a.Children.forEach(e,g=>{(S=>!W(S)||typeof S=="boolean")(g)||o.push(g)}),o},[e]),F=Y.length,w=ge(()=>((o,g,S,D)=>{let p,q=0,V=0,v=0,T=[],f=ye(o,g),A=[0,0];const R=new Set,H=()=>S?q:V;return{D(){const[c,m]=A,y=pe(f,c),l=he(f,v,c,y),i=me(f,l,H());return c===l&&m===i?A:A=[l,i]},v:c=>f.t[c]===-1,F:c=>((m,y,l)=>{for(let i=y;i<=l;i++)if(m.t[i]===-1)return!0;return!1})(f,c,me(f,c,H())),I:c=>pe(f,c),H:()=>v,J:()=>H(),A:()=>(c=>we(c,c.l-1,!0))(f),P:()=>f.l,U:()=>T,O:()=>S,R:()=>D,W:c=>he(f,c,0,0),C:()=>(p&&p[1](),new Promise((c,m)=>{p=[()=>{Promise.resolve().then(()=>{c(),p=void 0})},m]})),S:c=>(R.add(c),()=>{R.delete(c)}),L(c,m){(()=>{switch(c){case 0:return f.l!==m&&(f=ye(m,g,f),!0);case 1:{const y=m.filter(([i,s])=>f.t[i]!==s);if(!y.length)return!1;const l=[];return y.forEach(([i,s])=>{l.push([i,s-P(f,i)]),((d,_,x)=>{d.t[_]=x,d.i=O(_,d.i)})(f,i,s)}),T=l,!0}case 2:return(q!==m.V||V!==m.q)&&(q=m.V,V=m.q,!0);case 3:{const y=v;return(v=m)!==y}}})()&&(R.forEach(y=>{y()}),p&&c===1&&p[0]())}}})(F,t,!!n,!!u)),[re,Q]=X(w.S,w.D),Z=X(w.S,w.U),ne=a.useRef(null),G=a.useRef(-1),Re=_e(B),Ie=_e(xe),[$,Ee]=a.useState(new Set),[Le,Ne]=a.useState(!1),k=ge(()=>((o,g,S)=>{let D,p,q,V=-1,v=0,T=!1;const f=o.O(),A=o.R(),R=f?"scrollLeft":"scrollTop",H=new WeakMap,c=()=>q||(q=new ResizeObserver(l=>{const i=[];for(const s of l)if(s.target===p)o.L(2,{V:s.contentRect.width,q:s.contentRect.height});else{const d=H.get(s.target);W(d)&&i.push([d,s.contentRect[f?"width":"height"]])}i.length&&(o.L(1,i),T=!0)})),m=()=>p?o.O()?p.scrollWidth:p.scrollHeight:0,y=(l,i)=>{if(p){if(A){if(!W(D)){const s=p[R];p[R]=1,D=p[R]===0,p[R]=s}D&&(l*=-1)}i?p[R]+=l:(p[R]=l,v=3)}};return{B(l){p=l;const i=c(),s=()=>{let h=l[R];A&&(h=Me(h)),V!==h&&(v!==0&&T?T=!1:v!==3&&(v=V>h?2:1),o.L(3,V=h),g(h))},d=(()=>{let h;const z=()=>{W(h)&&clearTimeout(h)},J=()=>{z(),h=setTimeout(()=>{h=null,s(),v=0,S(!1)},150)};return J.G=z,J})(),_=()=>{const h=v===0;s(),h&&S(!0),d()},x=(()=>{let h=de()-50;return(...z)=>{const J=de();h+50<J&&(h=J,(ee=>{v!==0&&(ee.ctrlKey||(f?ee.deltaX:ee.deltaY)&&V>0&&V<o.A()-o.J()&&d())})(...z))}})();return i.observe(l),l.addEventListener("scroll",_),l.addEventListener("wheel",x,{passive:!0}),()=>{i.disconnect(),l.removeEventListener("scroll",_),l.removeEventListener("wheel",x),d.G()}},T(l,i){const s=c();return H.set(l,i),s.observe(l),()=>{H.delete(l),s.unobserve(l)}},K:m,N:async(l,i)=>{const s=()=>{let d=i();const _=m(),x=o.J();return _-(d+x)<=0&&(d=_-x),d};if(o.F(l)){do{o.L(3,s());try{await o.C()}catch{return}}while(o.F(l));y(s())}else{const d=s();y(d),o.L(3,d)}},X:(l,i)=>{if(v===2){const s=l.reduce((d,[,_])=>d+_,0);s&&y(s,!0)}else if(v===3){const s=o.H();if(s!==0){const d=l.reduce((_,[,x])=>_+x,0);if(o.A()-(s+o.J()+d)<=0)d&&y(s+d);else{const _=l.reduce((x,[h,z])=>(h<i&&(x+=z),x),0);_&&y(_,!0)}}}}}})(w,Re,o=>{Ne(o),o||(Ee(new Set),Ie())})),M=O(F,w.P());K(()=>{w.L(0,F)},[F]),K(()=>k.B(ne[I]),[]),K(()=>{Z.length&&k.X(Z,re)},[Z]),a.useEffect(()=>{j&&(G[I]>M&&(G[I]=-1),M-1-Q<=L&&G[I]<M&&(G[I]=M,j()))},[Q]),a.useImperativeHandle(be,()=>({get scrollOffset(){return w.H()},get scrollSize(){return k.K()},scrollToIndex(o){o=U(O(o,M-1),0),k.N(o,()=>w.I(o))},scrollToOffset(o){o=U(o,0),k.N(w.W(o),()=>o)}}),[M]);const oe=U(re-r,0),le=O(Q+r,M-1),Ve=a.useMemo(()=>{const o=[];for(let g=oe;g<=le;g++)$.add(g);return $.forEach(g=>{const S=Y[g];o.push(b(He,{h:k,m:w,g,p:N,_:S},(S==null?void 0:S.key)||g))}),o},[Y,$,oe,le]);return b(qe,{M:ne,m:w,p:E,k:Le,j:C,_:Ve})}),Ae={flex:1},ve=({count:e,Component:t})=>b(Te,{style:Ae,children:Array.from({length:e}).map((r,n)=>b(t,{index:n},n))});try{ve.displayName="VirtuaList",ve.__docgenInfo={description:"",displayName:"VirtuaList",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ForwardRefExoticComponent<{ index: number; } & RefAttributes<HTMLDivElement>>"}}}}}catch{}export{ae as H,ce as I,se as S,ve as V,ue as a};
//# sourceMappingURL=virtua-cbc9a237.js.map
