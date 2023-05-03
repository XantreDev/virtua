import{j as ve}from"./jsx-runtime-c3d7f245.js";import{r as n}from"./index-c6dae603.js";var _;(function(t){t.auto="auto",t.start="start",t.center="center",t.end="end"})(_||(_={}));var Ne=function(t,u,f,h){for(;t<=u;){var c=(t+u)/2|0,d=h(c);if(f<d)u=c-1;else if(f>d)t=c+1;else return c}return t>0?t-1:0},y=function(t){return typeof t=="number"&&!Number.isNaN(t)},re=function(){return"performance"in window?performance.now():Date.now()},Ye=function(t,u,f){if(t.length!==u.length)return!0;for(var h=function(m){if(Object.keys(t[m]).some(function(b){var H=b;return!f[H]&&t[m][H]!==u[m][H]}))return{v:!0}},c=0;c<t.length;c+=1){var d=h(c);if(typeof d=="object")return d.v}return!1},C=function(t){var u=n.useRef(t);return u.current=t,u},Ze=function(t,u){var f=n.useRef(),h=C(t),c=n.useCallback(function(){f.current&&(cancelAnimationFrame(f.current),f.current=void 0)},[]),d=n.useCallback(function(m){re()-m>=u?h.current():f.current=requestAnimationFrame(function(){return d(m)})},[h,u]),z=n.useCallback(function(){c(),d(re())},[c,d]);return[z,c]},de=typeof window<"u"?n.useLayoutEffect:n.useEffect,er=function(t,u,f){var h=C(u);de(function(){if(!(t!=null&&t.current))return function(){return null};var c=new ResizeObserver(function(d){var z=d[0].contentRect,m=z.width,b=z.height;h.current({width:m,height:b})});return c.observe(t.current),function(){return c.disconnect()}},[h,t].concat(f))},rr=function(u,f){f===void 0&&(f=0);for(var h=y(f)?[0,f-1]:f,c=h[0],d=h[1],z=[],m=c;m<=d;m+=1)z.push({index:m,start:0,width:0,size:y(u)?u:u(m,0),measureRef:function(){return null}});return{items:z}},tr=function(t){var u=t.itemCount,f=t.ssrItemCount,h=t.itemSize,c=h===void 0?50:h,d=t.horizontal,z=t.resetScroll,m=t.overscanCount,b=m===void 0?1:m,H=t.useIsScrolling,je=t.stickyIndices,me=t.scrollDuration,Ke=me===void 0?function(r){return Math.min(Math.max(r*.075,100),500)}:me,Re=t.scrollEasingFunction,Oe=Re===void 0?function(r){return-(Math.cos(Math.PI*r)-1)/2}:Re,he=t.loadMoreCount,j=he===void 0?15:he,Be=t.isItemLoaded,Pe=t.loadMore,Ue=t.onScroll,We=t.onResize,Se=n.useState(function(){return rr(c,f)}),E=Se[0],pe=Se[1],te=n.useRef(!1),ne=n.useRef(!0),ae=n.useRef(!1),$=n.useRef(!1),W=n.useRef(new Map),w=n.useRef(0),ge=n.useRef(-1),Ie=n.useRef(-1),K=n.useRef(null),G=n.useRef(null),F=n.useRef({width:0,height:0}),I=n.useRef([]),J=n.useRef(!0),O=n.useRef(),ue=C(je),ze=C(Ke),Me=C(Oe),B=C(Be),P=C(Pe),xe=C(c),we=C(H),ie=C(Ue),oe=C(We),D=d?"width":"height",Ce=d?"marginLeft":"marginTop",Q=d?"scrollLeft":"scrollTop",be=n.useCallback(function(r){var e=xe.current;return y(e)?e:e(r,F.current.width)},[xe]),X=n.useCallback(function(r,e){var i,a,o=(i=(a=I.current[r-1])==null?void 0:a.end)!=null?i:0;return{idx:r,start:o,end:o+e,size:e}},[]),Y=n.useCallback(function(r){r===void 0&&(r=!0),I.current.length=u;for(var e=0;e<u;e+=1)I.current[e]=X(e,r&&I.current[e]?I.current[e].size:be(e))},[be,X,u]),ye=n.useCallback(function(r){var e=I.current,i=e.length-1,a=0;if($.current)for(;a<i&&e[a].start+e[a].size<r;)a+=1;else a=Ne(0,i,r,function(v){return e[v].start});for(var o=a,S=e[o].start;o<i&&S<r+F.current[D];)S+=e[o].size,o+=1;o=o===i?o:o-1;var l=Math.max(a-b,0),s=Math.min(o+b,i),p=e[l].start,R=Math[s<i?"max":"min"](e[s].end+e[s].size,e[i].end);return{oStart:l,oStop:s,vStart:a,vStop:o,innerMargin:p,innerSize:R-p}},[b,D]),L=n.useCallback(function(r,e){e===void 0&&(e=!0),K.current&&(J.current=!1,ne.current=e,K.current[Q]=r)},[Q]),ce=n.useCallback(function(r,e){var i=y(r)?{offset:r}:r,a=i.offset,o=i.smooth;if(y(a)){if(!o){L(a),e&&e();return}var S=w.current,l=re(),s=function p(){var R=ze.current;R=y(R)?R:R(Math.abs(a-S));var v=Math.min((re()-l)/R,1),x=Me.current(v);L(x*(a-S)+S),v<1?O.current=requestAnimationFrame(p):e&&e()};O.current=requestAnimationFrame(s)}},[ze,Me,L]),V=n.useCallback(function(r,e,i){var a=y(r)?{index:r}:r,o=a.index,S=a.align,l=S===void 0?_.auto:S,s=a.smooth;if(y(o)){ae.current=!0,$.current&&Y();var p=I.current,R=p[Math.max(0,Math.min(o,p.length-1))];if(R){var v=R.start,x=R.end,A=R.size,k=p[p.length-1].end,g=F.current[D],M=w.current;if(k<=g){e&&e();return}if(i||l===_.start||l===_.auto&&M+g>x&&M>v)M=k-v<=g?k-g:v;else if(l===_.end||l===_.auto&&M+g<x&&M<v)M=v+A<=g?0:v-g+A;else if(l===_.center&&v+A/2>g/2){var U=v-g/2+A/2;M=k-U<=g?k-g:U}if($.current&&Math.abs(M-w.current)<=1){e&&e();return}ce({offset:M,smooth:s},function(){$.current?i?requestAnimationFrame(function(){return V(r,e,i)}):setTimeout(function(){return V(r,e)}):e&&e()})}}},[Y,ce,D]),Ge=n.useCallback(function(r,e){return V(r,e)},[V]),Je=n.useCallback(function(r,e){return V(r,e,!0)},[V]),ke=Ze(function(){return q(w.current)},150),De=ke[0],Le=ke[1],q=n.useCallback(function(r,e,i){if(P.current&&!te.current&&!(B.current&&B.current(0))&&P.current({startIndex:0,stopIndex:j-1,loadIndex:0,scrollOffset:r,userScroll:!1}),!u){pe({items:[]});return}for(var a=ye(r),o=a.oStart,S=a.oStop,l=a.vStart,s=a.vStop,p=a.innerMargin,R=a.innerSize,v=[],x=Array.isArray(ue.current)?ue.current:[],A=function(T){var _e=I.current,Ee=_e[T],fe=Ee.start,le=Ee.size;v.push({index:T,start:fe-p,size:le,width:F.current.width,isScrolling:i||void 0,isSticky:x.includes(T)||void 0,measureRef:function($e){$e&&new ResizeObserver(function(Qe,Fe){var Ve,qe,Ae,Z=Qe[0].target,ee=Z.getBoundingClientRect()[D];if(!ee){Fe.disconnect(),W.current.delete(Z);return}var Xe=(Ve=(qe=_e[T-1])==null?void 0:qe.end)!=null?Ve:0;(ee!==le||fe!==Xe)&&(T<ge.current&&fe<r&&L(r+ee-le,!1),I.current[T]=X(T,ee),ae.current||q(w.current,e,i),$.current=!0),ge.current=T,(Ae=W.current.get(Z))==null||Ae.disconnect(),W.current.set(Z,Fe)}).observe($e)}})},k=o;k<=S;k+=1)A(k);if(x.length){var g=x[Ne(0,x.length-1,l,function(N){return x[N]})];if(o>g){var M=I.current[g].size;v.unshift({index:g,start:0,size:M,width:F.current.width,isScrolling:i||void 0,isSticky:!0,measureRef:function(){return null}}),p-=M,R+=M}}if(pe(function(N){return Ye(N.items,v,{measureRef:!0})?{items:v,innerMargin:p,innerSize:R}:N}),!!e){var U=r>w.current;ie.current&&ie.current({overscanStartIndex:o,overscanStopIndex:S,visibleStartIndex:l,visibleStopIndex:s,scrollOffset:r,scrollForward:U,userScroll:J.current});var se=Math.max(Math.floor((s+1)/j)-(U?0:1),0),Te=se*j;P.current&&s!==Ie.current&&!(B.current&&B.current(se))&&P.current({startIndex:Te,stopIndex:Te+j-1,loadIndex:se,scrollOffset:r,userScroll:J.current}),i&&De(),Ie.current=s}},[ue,ye,X,u,j,P,ie,De,L,D,B]);return er(K,function(r){var e,i=F.current,a=i.width,o=i.height,S=a===r.width,l=S&&o===r.height,s=I.current.length,p=(e=I.current[s-1])==null?void 0:e.end;if(F.current=r,Y($.current),q(w.current),z&&u!==s&&setTimeout(function(){return L(0,!1)}),!te.current){te.current=!0;return}if(!$.current&&!S){var R,v=(R=I.current[I.current.length-1])==null?void 0:R.end,x=v/p||1;L(w.current*x,!1)}!l&&oe.current&&oe.current(r)},[u,z,q,Y,oe,L]),de(function(){G.current&&(y(E.innerMargin)&&(G.current.style[Ce]=E.innerMargin+"px"),y(E.innerSize)&&(G.current.style[D]=E.innerSize+"px"))},[Ce,D,E.innerMargin,E.innerSize]),de(function(){var r=K.current;if(!r)return function(){return null};var e=function(o){var S=o.target,l=S[Q];if(l!==w.current){var s=we.current;s=typeof s=="function"?s(Math.abs(l-w.current)):s,q(l,ne.current,s),J.current=!0,ne.current=!0,ae.current=!1,w.current=l}};r.addEventListener("scroll",e,{passive:!0});var i=W.current;return function(){Le(),O.current&&(cancelAnimationFrame(O.current),O.current=void 0),r.removeEventListener("scroll",e),i.forEach(function(a){return a.disconnect()}),i.clear()}},[Le,q,Q,we]),{outerRef:K,innerRef:G,items:E.items,scrollTo:ce,scrollToItem:Ge,startItem:Je}};const He=n.memo(({count:t,Component:u,handle:f})=>{const{outerRef:h,innerRef:c,items:d,scrollToItem:z}=tr({itemCount:t});return n.useImperativeHandle(f,()=>({scrollToIndex:z})),ve("div",{ref:h,style:{flex:1,overflow:"auto"},children:ve("div",{ref:c,children:d.map(({index:m,measureRef:b})=>ve(u,{index:m,ref:b},m))})})});try{He.displayName="ReactCoolVirtualList",He.__docgenInfo={description:"",displayName:"ReactCoolVirtualList",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ForwardRefExoticComponent<{ index: number; } & RefAttributes<HTMLDivElement>>"}},handle:{defaultValue:null,description:"",name:"handle",required:!0,type:{name:"Ref<ListHandle>"}}}}}catch{}export{He as R};
//# sourceMappingURL=react-cool-virtual-e9733c79.js.map
