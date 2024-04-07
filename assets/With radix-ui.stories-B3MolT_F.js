import{j as w}from"./index-DvWd75dA.js";import{r as t,a as fe}from"./entry-preview-8m_gBI-P.js";import{f as me}from"./index-xJp9Kd2E.js";import{_ as h}from"./extends-B6xKY8K9.js";import{V as ee}from"./Virtualizer-DX5edObc.js";import"./useRerender-CUup1IBo.js";import"./useChildren-BbHk2Kcs.js";function be(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function te(...e){return r=>e.forEach(o=>be(o,r))}function P(...e){return t.useCallback(te(...e),e)}const re=t.forwardRef((e,r)=>{const{children:o,...l}=e,n=t.Children.toArray(o),c=n.find(pe);if(c){const a=c.props.children,s=n.map(i=>i===c?t.Children.count(a)>1?t.Children.only(null):t.isValidElement(a)?a.props.children:null:i);return t.createElement(k,h({},l,{ref:r}),t.isValidElement(a)?t.cloneElement(a,void 0,s):null)}return t.createElement(k,h({},l,{ref:r}),o)});re.displayName="Slot";const k=t.forwardRef((e,r)=>{const{children:o,...l}=e;return t.isValidElement(o)?t.cloneElement(o,{...Se(l,o.props),ref:r?te(r,o.ref):o.ref}):t.Children.count(o)>1?t.Children.only(null):null});k.displayName="SlotClone";const he=({children:e})=>t.createElement(t.Fragment,null,e);function pe(e){return t.isValidElement(e)&&e.type===he}function Se(e,r){const o={...r};for(const l in r){const n=e[l],c=r[l];/^on[A-Z]/.test(l)?n&&c?o[l]=(...s)=>{c(...s),n(...s)}:n&&(o[l]=n):l==="style"?o[l]={...n,...c}:l==="className"&&(o[l]=[n,c].filter(Boolean).join(" "))}return{...e,...o}}const ve=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],_=ve.reduce((e,r)=>{const o=t.forwardRef((l,n)=>{const{asChild:c,...a}=l,s=c?re:r;return t.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),t.createElement(s,h({},a,{ref:n}))});return o.displayName=`Primitive.${r}`,{...e,[r]:o}},{}),B=globalThis!=null&&globalThis.document?t.useLayoutEffect:()=>{};function $e(e,r){return t.useReducer((o,l)=>{const n=r[o][l];return n??o},e)}const D=e=>{const{present:r,children:o}=e,l=we(r),n=typeof o=="function"?o({present:l.isPresent}):t.Children.only(o),c=P(l.ref,n.ref);return typeof o=="function"||l.isPresent?t.cloneElement(n,{ref:c}):null};D.displayName="Presence";function we(e){const[r,o]=t.useState(),l=t.useRef({}),n=t.useRef(e),c=t.useRef("none"),a=e?"mounted":"unmounted",[s,i]=$e(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return t.useEffect(()=>{const d=I(l.current);c.current=s==="mounted"?d:"none"},[s]),B(()=>{const d=l.current,u=n.current;if(u!==e){const f=c.current,b=I(d);e?i("MOUNT"):b==="none"||(d==null?void 0:d.display)==="none"?i("UNMOUNT"):i(u&&f!==b?"ANIMATION_OUT":"UNMOUNT"),n.current=e}},[e,i]),B(()=>{if(r){const d=m=>{const b=I(l.current).includes(m.animationName);m.target===r&&b&&fe.flushSync(()=>i("ANIMATION_END"))},u=m=>{m.target===r&&(c.current=I(l.current))};return r.addEventListener("animationstart",u),r.addEventListener("animationcancel",d),r.addEventListener("animationend",d),()=>{r.removeEventListener("animationstart",u),r.removeEventListener("animationcancel",d),r.removeEventListener("animationend",d)}}else i("ANIMATION_END")},[r,i]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:t.useCallback(d=>{d&&(l.current=getComputedStyle(d)),o(d)},[])}}function I(e){return(e==null?void 0:e.animationName)||"none"}function ge(e,r=[]){let o=[];function l(c,a){const s=t.createContext(a),i=o.length;o=[...o,a];function d(m){const{scope:f,children:b,...p}=m,E=(f==null?void 0:f[e][i])||s,y=t.useMemo(()=>p,Object.values(p));return t.createElement(E.Provider,{value:y},b)}function u(m,f){const b=(f==null?void 0:f[e][i])||s,p=t.useContext(b);if(p)return p;if(a!==void 0)return a;throw new Error(`\`${m}\` must be used within \`${c}\``)}return d.displayName=c+"Provider",[d,u]}const n=()=>{const c=o.map(a=>t.createContext(a));return function(s){const i=(s==null?void 0:s[e])||c;return t.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])}};return n.scopeName=e,[l,Ee(n,...r)]}function Ee(...e){const r=e[0];if(e.length===1)return r;const o=()=>{const l=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(c){const a=l.reduce((s,{useScope:i,scopeName:d})=>{const m=i(c)[`__scope${d}`];return{...s,...m}},{});return t.useMemo(()=>({[`__scope${r.scopeName}`]:a}),[a])}};return o.scopeName=r.scopeName,o}function A(e){const r=t.useRef(e);return t.useEffect(()=>{r.current=e}),t.useMemo(()=>(...o)=>{var l;return(l=r.current)===null||l===void 0?void 0:l.call(r,...o)},[])}const xe=t.createContext(void 0);function Ae(e){const r=t.useContext(xe);return e||r||"ltr"}function Ce(e,[r,o]){return Math.min(o,Math.max(r,e))}function C(e,r,{checkForDefaultPrevented:o=!0}={}){return function(n){if(e==null||e(n),o===!1||!n.defaultPrevented)return r==null?void 0:r(n)}}function Pe(e,r){return t.useReducer((o,l)=>{const n=r[o][l];return n??o},e)}const oe="ScrollArea",[ne,tt]=ge(oe),[Te,v]=ne(oe),Re=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,type:l="hover",dir:n,scrollHideDelay:c=600,...a}=e,[s,i]=t.useState(null),[d,u]=t.useState(null),[m,f]=t.useState(null),[b,p]=t.useState(null),[E,y]=t.useState(null),[x,L]=t.useState(0),[Y,M]=t.useState(0),[O,N]=t.useState(!1),[z,W]=t.useState(!1),S=P(r,T=>i(T)),$=Ae(n);return t.createElement(Te,{scope:o,type:l,dir:$,scrollHideDelay:c,scrollArea:s,viewport:d,onViewportChange:u,content:m,onContentChange:f,scrollbarX:b,onScrollbarXChange:p,scrollbarXEnabled:O,onScrollbarXEnabledChange:N,scrollbarY:E,onScrollbarYChange:y,scrollbarYEnabled:z,onScrollbarYEnabledChange:W,onCornerWidthChange:L,onCornerHeightChange:M},t.createElement(_.div,h({dir:$},a,{ref:S,style:{position:"relative","--radix-scroll-area-corner-width":x+"px","--radix-scroll-area-corner-height":Y+"px",...e.style}})))}),ye="ScrollAreaViewport",Ne=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,children:l,...n}=e,c=v(ye,o),a=t.useRef(null),s=P(r,a,c.onViewportChange);return t.createElement(t.Fragment,null,t.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),t.createElement(_.div,h({"data-radix-scroll-area-viewport":""},n,{ref:s,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}}),t.createElement("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},l)))}),g="ScrollAreaScrollbar",_e=t.forwardRef((e,r)=>{const{forceMount:o,...l}=e,n=v(g,e.__scopeScrollArea),{onScrollbarXEnabledChange:c,onScrollbarYEnabledChange:a}=n,s=e.orientation==="horizontal";return t.useEffect(()=>(s?c(!0):a(!0),()=>{s?c(!1):a(!1)}),[s,c,a]),n.type==="hover"?t.createElement(De,h({},l,{ref:r,forceMount:o})):n.type==="scroll"?t.createElement(Le,h({},l,{ref:r,forceMount:o})):n.type==="auto"?t.createElement(le,h({},l,{ref:r,forceMount:o})):n.type==="always"?t.createElement(F,h({},l,{ref:r})):null}),De=t.forwardRef((e,r)=>{const{forceMount:o,...l}=e,n=v(g,e.__scopeScrollArea),[c,a]=t.useState(!1);return t.useEffect(()=>{const s=n.scrollArea;let i=0;if(s){const d=()=>{window.clearTimeout(i),a(!0)},u=()=>{i=window.setTimeout(()=>a(!1),n.scrollHideDelay)};return s.addEventListener("pointerenter",d),s.addEventListener("pointerleave",u),()=>{window.clearTimeout(i),s.removeEventListener("pointerenter",d),s.removeEventListener("pointerleave",u)}}},[n.scrollArea,n.scrollHideDelay]),t.createElement(D,{present:o||c},t.createElement(le,h({"data-state":c?"visible":"hidden"},l,{ref:r})))}),Le=t.forwardRef((e,r)=>{const{forceMount:o,...l}=e,n=v(g,e.__scopeScrollArea),c=e.orientation==="horizontal",a=X(()=>i("SCROLL_END"),100),[s,i]=Pe("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return t.useEffect(()=>{if(s==="idle"){const d=window.setTimeout(()=>i("HIDE"),n.scrollHideDelay);return()=>window.clearTimeout(d)}},[s,n.scrollHideDelay,i]),t.useEffect(()=>{const d=n.viewport,u=c?"scrollLeft":"scrollTop";if(d){let m=d[u];const f=()=>{const b=d[u];m!==b&&(i("SCROLL"),a()),m=b};return d.addEventListener("scroll",f),()=>d.removeEventListener("scroll",f)}},[n.viewport,c,i,a]),t.createElement(D,{present:o||s!=="hidden"},t.createElement(F,h({"data-state":s==="hidden"?"hidden":"visible"},l,{ref:r,onPointerEnter:C(e.onPointerEnter,()=>i("POINTER_ENTER")),onPointerLeave:C(e.onPointerLeave,()=>i("POINTER_LEAVE"))})))}),le=t.forwardRef((e,r)=>{const o=v(g,e.__scopeScrollArea),{forceMount:l,...n}=e,[c,a]=t.useState(!1),s=e.orientation==="horizontal",i=X(()=>{if(o.viewport){const d=o.viewport.offsetWidth<o.viewport.scrollWidth,u=o.viewport.offsetHeight<o.viewport.scrollHeight;a(s?d:u)}},10);return R(o.viewport,i),R(o.content,i),t.createElement(D,{present:l||c},t.createElement(F,h({"data-state":c?"visible":"hidden"},n,{ref:r})))}),F=t.forwardRef((e,r)=>{const{orientation:o="vertical",...l}=e,n=v(g,e.__scopeScrollArea),c=t.useRef(null),a=t.useRef(0),[s,i]=t.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=ie(s.viewport,s.content),u={...l,sizes:s,onSizesChange:i,hasThumb:d>0&&d<1,onThumbChange:f=>c.current=f,onThumbPointerUp:()=>a.current=0,onThumbPointerDown:f=>a.current=f};function m(f,b){return Ve(f,a.current,s,b)}return o==="horizontal"?t.createElement(Me,h({},u,{ref:r,onThumbPositionChange:()=>{if(n.viewport&&c.current){const f=n.viewport.scrollLeft,b=q(f,s,n.dir);c.current.style.transform=`translate3d(${b}px, 0, 0)`}},onWheelScroll:f=>{n.viewport&&(n.viewport.scrollLeft=f)},onDragScroll:f=>{n.viewport&&(n.viewport.scrollLeft=m(f,n.dir))}})):o==="vertical"?t.createElement(Oe,h({},u,{ref:r,onThumbPositionChange:()=>{if(n.viewport&&c.current){const f=n.viewport.scrollTop,b=q(f,s);c.current.style.transform=`translate3d(0, ${b}px, 0)`}},onWheelScroll:f=>{n.viewport&&(n.viewport.scrollTop=f)},onDragScroll:f=>{n.viewport&&(n.viewport.scrollTop=m(f))}})):null}),Me=t.forwardRef((e,r)=>{const{sizes:o,onSizesChange:l,...n}=e,c=v(g,e.__scopeScrollArea),[a,s]=t.useState(),i=t.useRef(null),d=P(r,i,c.onScrollbarXChange);return t.useEffect(()=>{i.current&&s(getComputedStyle(i.current))},[i]),t.createElement(ae,h({"data-orientation":"horizontal"},n,{ref:d,sizes:o,style:{bottom:0,left:c.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:c.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":V(o)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.x),onDragScroll:u=>e.onDragScroll(u.x),onWheelScroll:(u,m)=>{if(c.viewport){const f=c.viewport.scrollLeft+u.deltaX;e.onWheelScroll(f),ue(f,m)&&u.preventDefault()}},onResize:()=>{i.current&&c.viewport&&a&&l({content:c.viewport.scrollWidth,viewport:c.viewport.offsetWidth,scrollbar:{size:i.current.clientWidth,paddingStart:H(a.paddingLeft),paddingEnd:H(a.paddingRight)}})}}))}),Oe=t.forwardRef((e,r)=>{const{sizes:o,onSizesChange:l,...n}=e,c=v(g,e.__scopeScrollArea),[a,s]=t.useState(),i=t.useRef(null),d=P(r,i,c.onScrollbarYChange);return t.useEffect(()=>{i.current&&s(getComputedStyle(i.current))},[i]),t.createElement(ae,h({"data-orientation":"vertical"},n,{ref:d,sizes:o,style:{top:0,right:c.dir==="ltr"?0:void 0,left:c.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":V(o)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.y),onDragScroll:u=>e.onDragScroll(u.y),onWheelScroll:(u,m)=>{if(c.viewport){const f=c.viewport.scrollTop+u.deltaY;e.onWheelScroll(f),ue(f,m)&&u.preventDefault()}},onResize:()=>{i.current&&c.viewport&&a&&l({content:c.viewport.scrollHeight,viewport:c.viewport.offsetHeight,scrollbar:{size:i.current.clientHeight,paddingStart:H(a.paddingTop),paddingEnd:H(a.paddingBottom)}})}}))}),[ze,ce]=ne(g),ae=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,sizes:l,hasThumb:n,onThumbChange:c,onThumbPointerUp:a,onThumbPointerDown:s,onThumbPositionChange:i,onDragScroll:d,onWheelScroll:u,onResize:m,...f}=e,b=v(g,o),[p,E]=t.useState(null),y=P(r,S=>E(S)),x=t.useRef(null),L=t.useRef(""),Y=b.viewport,M=l.content-l.viewport,O=A(u),N=A(i),z=X(m,10);function W(S){if(x.current){const $=S.clientX-x.current.left,T=S.clientY-x.current.top;d({x:$,y:T})}}return t.useEffect(()=>{const S=$=>{const T=$.target;(p==null?void 0:p.contains(T))&&O($,M)};return document.addEventListener("wheel",S,{passive:!1}),()=>document.removeEventListener("wheel",S,{passive:!1})},[Y,p,M,O]),t.useEffect(N,[l,N]),R(p,z),R(b.content,z),t.createElement(ze,{scope:o,scrollbar:p,hasThumb:n,onThumbChange:A(c),onThumbPointerUp:A(a),onThumbPositionChange:N,onThumbPointerDown:A(s)},t.createElement(_.div,h({},f,{ref:y,style:{position:"absolute",...f.style},onPointerDown:C(e.onPointerDown,S=>{S.button===0&&(S.target.setPointerCapture(S.pointerId),x.current=p.getBoundingClientRect(),L.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",b.viewport&&(b.viewport.style.scrollBehavior="auto"),W(S))}),onPointerMove:C(e.onPointerMove,W),onPointerUp:C(e.onPointerUp,S=>{const $=S.target;$.hasPointerCapture(S.pointerId)&&$.releasePointerCapture(S.pointerId),document.body.style.webkitUserSelect=L.current,b.viewport&&(b.viewport.style.scrollBehavior=""),x.current=null})})))}),j="ScrollAreaThumb",We=t.forwardRef((e,r)=>{const{forceMount:o,...l}=e,n=ce(j,e.__scopeScrollArea);return t.createElement(D,{present:o||n.hasThumb},t.createElement(Ie,h({ref:r},l)))}),Ie=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,style:l,...n}=e,c=v(j,o),a=ce(j,o),{onThumbPositionChange:s}=a,i=P(r,m=>a.onThumbChange(m)),d=t.useRef(),u=X(()=>{d.current&&(d.current(),d.current=void 0)},100);return t.useEffect(()=>{const m=c.viewport;if(m){const f=()=>{if(u(),!d.current){const b=Xe(m,s);d.current=b,s()}};return s(),m.addEventListener("scroll",f),()=>m.removeEventListener("scroll",f)}},[c.viewport,u,s]),t.createElement(_.div,h({"data-state":a.hasThumb?"visible":"hidden"},n,{ref:i,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:C(e.onPointerDownCapture,m=>{const b=m.target.getBoundingClientRect(),p=m.clientX-b.left,E=m.clientY-b.top;a.onThumbPointerDown({x:p,y:E})}),onPointerUp:C(e.onPointerUp,a.onThumbPointerUp)}))}),se="ScrollAreaCorner",Ue=t.forwardRef((e,r)=>{const o=v(se,e.__scopeScrollArea),l=!!(o.scrollbarX&&o.scrollbarY);return o.type!=="scroll"&&l?t.createElement(He,h({},e,{ref:r})):null}),He=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,...l}=e,n=v(se,o),[c,a]=t.useState(0),[s,i]=t.useState(0),d=!!(c&&s);return R(n.scrollbarX,()=>{var u;const m=((u=n.scrollbarX)===null||u===void 0?void 0:u.offsetHeight)||0;n.onCornerHeightChange(m),i(m)}),R(n.scrollbarY,()=>{var u;const m=((u=n.scrollbarY)===null||u===void 0?void 0:u.offsetWidth)||0;n.onCornerWidthChange(m),a(m)}),d?t.createElement(_.div,h({},l,{ref:r,style:{width:c,height:s,position:"absolute",right:n.dir==="ltr"?0:void 0,left:n.dir==="rtl"?0:void 0,bottom:0,...e.style}})):null});function H(e){return e?parseInt(e,10):0}function ie(e,r){const o=e/r;return isNaN(o)?0:o}function V(e){const r=ie(e.viewport,e.content),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,l=(e.scrollbar.size-o)*r;return Math.max(l,18)}function Ve(e,r,o,l="ltr"){const n=V(o),c=n/2,a=r||c,s=n-a,i=o.scrollbar.paddingStart+a,d=o.scrollbar.size-o.scrollbar.paddingEnd-s,u=o.content-o.viewport,m=l==="ltr"?[0,u]:[u*-1,0];return de([i,d],m)(e)}function q(e,r,o="ltr"){const l=V(r),n=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,c=r.scrollbar.size-n,a=r.content-r.viewport,s=c-l,i=o==="ltr"?[0,a]:[a*-1,0],d=Ce(e,i);return de([0,a],[0,s])(d)}function de(e,r){return o=>{if(e[0]===e[1]||r[0]===r[1])return r[0];const l=(r[1]-r[0])/(e[1]-e[0]);return r[0]+l*(o-e[0])}}function ue(e,r){return e>0&&e<r}const Xe=(e,r=()=>{})=>{let o={left:e.scrollLeft,top:e.scrollTop},l=0;return function n(){const c={left:e.scrollLeft,top:e.scrollTop},a=o.left!==c.left,s=o.top!==c.top;(a||s)&&r(),o=c,l=window.requestAnimationFrame(n)}(),()=>window.cancelAnimationFrame(l)};function X(e,r){const o=A(e),l=t.useRef(0);return t.useEffect(()=>()=>window.clearTimeout(l.current),[]),t.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(o,r)},[o,r])}function R(e,r){const o=A(r);B(()=>{let l=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(l),l=window.requestAnimationFrame(o)});return n.observe(e),()=>{window.cancelAnimationFrame(l),n.unobserve(e)}}},[e,o])}const Ye=Re,ke=Ne,G=_e,Z=We,Be=Ue,je=Array.from({length:1e3}).map((e,r)=>({id:r,label:me.person.fullName()})),rt={component:ee},U={name:"With radix-ui",render:()=>{const e=t.useRef(null);return w.jsxs(Ye,{className:"ScrollAreaRoot",children:[w.jsx(ke,{ref:e,style:{padding:"15px 20px",width:"auto"},className:"ScrollAreaViewport",children:w.jsxs(ee,{scrollRef:e,children:[w.jsx("div",{className:"Text",children:"Tags"}),je.map(r=>w.jsx("div",{className:"Tag",children:r.label},r.id))]})}),w.jsx(G,{className:"ScrollAreaScrollbar",orientation:"vertical",children:w.jsx(Z,{className:"ScrollAreaThumb"})}),w.jsx(G,{className:"ScrollAreaScrollbar",orientation:"horizontal",children:w.jsx(Z,{className:"ScrollAreaThumb"})}),w.jsx(Be,{className:"ScrollAreaCorner"})]})}};var J,K,Q;U.parameters={...U.parameters,docs:{...(J=U.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "With radix-ui",
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    return <ScrollArea.Root className="ScrollAreaRoot">
        <ScrollArea.Viewport ref={ref} style={{
        padding: "15px 20px",
        width: "auto"
      }} className="ScrollAreaViewport">
          <Virtualizer scrollRef={ref}>
            <div className="Text">Tags</div>
            {TAGS.map(tag => <div className="Tag" key={tag.id}>
                {tag.label}
              </div>)}
          </Virtualizer>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
          <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
          <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="ScrollAreaCorner" />
      </ScrollArea.Root>;
  }
}`,...(Q=(K=U.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ot=["Default"];export{U as Default,ot as __namedExportsOrder,rt as default};
