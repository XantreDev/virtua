import{d as y,b as m,o as Y,e as Z,w as N,f as v,i as Q,g as S,j as W,k,u as x,l as C,t as z,n as A,m as g}from"./vue.esm-bundler-CtIVE62n.js";import{c as ee,U as te,a as oe,b as ne,d as re,g as se,e as ae,f as le,L as ce,S as ie,h as de,i as ue,A as _e,_ as D}from"./_plugin-vue_export-helper-DSmD1W2b.js";const pe={data:{type:Array,required:!0},overscan:{type:Number,default:4},itemSize:Number,shift:Boolean,horizontal:Boolean},me=y({props:pe,emits:["scroll","scrollEnd","rangeChange"],setup(t,{emit:l,expose:d,slots:s}){const o=t.horizontal,a=m(),e=ee(t.data.length,t.itemSize??40,void 0,void 0,!t.itemSize),_=de(e,o),r=ue(e,o),n=m(e._getStateVersion()),c=e._subscribe(te+oe,()=>{n.value=e._getStateVersion()}),p=e._subscribe(ne,()=>{l("scroll",e._getScrollOffset())}),u=e._subscribe(re,()=>{l("scrollEnd")});return Y(()=>{const i=a.value.parentElement;i&&(_._observeRoot(i),r._observe(i))}),Z(()=>{c(),p(),u(),_._dispose(),r._dispose()}),N(()=>t.data.length,i=>{e._update(_e,[i,t.shift])}),N([n,e._getJumpCount],([,i],[,h])=>{i!==h&&r._fixScrollJump()},{flush:"post"}),N([n,e._getRange],([,[i,h]],[,[w,b]])=>{w===i&&b===h||l("rangeChange",i,h)},{flush:"post"}),d({get scrollOffset(){return e._getScrollOffset()},get scrollSize(){return se(e)},get viewportSize(){return e._getViewportSize()},getItemOffset:e._getItemOffset,scrollToIndex:r._scrollToIndex,scrollTo:r._scrollTo,scrollBy:r._scrollBy}),()=>{n.value;const i=t.data.length,[h,w]=e._getRange(),b=e._getScrollDirection(),B=e._getTotalSize(),L=[];for(let[f,X]=ae(h,w,t.overscan,b,i);f<=X;f++){const R=s.default(t.data[f])[0];L.push(v(ce,{key:le(R,f),_resizer:_._observeItem,_index:f,_offset:e._getItemOffset(f),_hide:e._isUnmeasuredItem(f),_children:R,_isHorizontal:o},null,8,["_resizer","_index","_offset","_hide","_children","_isHorizontal"]))}return v("div",{ref:a,style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:o?B+"px":"100%",height:o?"100%":B+"px",pointerEvents:b!==ie?"none":"auto"}},[L],4)}}});function fe(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!Q(t)}const ge={data:{type:Array,required:!0},overscan:{type:Number,default:4},itemSize:Number,shift:Boolean,horizontal:Boolean},O=y({props:ge,emits:["scroll","scrollEnd","rangeChange"],setup(t,{emit:l,expose:d,slots:s}){const o=t.horizontal,a=n=>{l("scroll",n)},e=()=>{l("scrollEnd")},_=(n,c)=>{l("rangeChange",n,c)},r=m();return d({get scrollOffset(){return r.value.scrollOffset},get scrollSize(){return r.value.scrollSize},get viewportSize(){return r.value.viewportSize},getItemOffset:(...n)=>r.value.getItemOffset(...n),scrollToIndex:(...n)=>r.value.scrollToIndex(...n),scrollTo:(...n)=>r.value.scrollTo(...n),scrollBy:(...n)=>r.value.scrollBy(...n)}),()=>v("div",{style:{display:o?"inline-block":"block",[o?"overflowX":"overflowY"]:"auto",contain:"strict",width:"100%",height:"100%"}},[v(me,{ref:r,data:t.data,overscan:t.overscan,itemSize:t.itemSize,shift:t.shift,horizontal:o,onScroll:a,onScrollEnd:e,onRangeChange:_},fe(s)?s:{default:()=>[s],_:2},8,["data","overscan","itemSize","shift","horizontal","onScroll","onScrollEnd","onRangeChange"])],4)}}),J=y({__name:"Default",setup(t){const l=[20,40,180,77],d=o=>({index:o,size:l[o%4]+"px"}),s=Array.from({length:1e3}).map((o,a)=>d(a));return(o,a)=>(S(),W(x(O),{data:x(s),style:{height:"100vh"}},{default:k(e=>[(S(),C("div",{key:e.index,style:A({height:e.size,background:"white",borderBottom:"solid 1px #ccc"})},z(e.index),5))]),_:1},8,["data"]))}}),he=D(J,[["__scopeId","data-v-1a8b09df"]]);J.__docgenInfo={exportName:"default",displayName:"Default",description:"",tags:{},sourceFiles:["/home/runner/work/virtua/virtua/stories/vue/Default.vue"]};const ve={style:{padding:"10px"}},M=y({__name:"Horizontal",setup(t){const l=[40,180,77],d=o=>({index:o,size:l[o%3]+"px"}),s=Array.from({length:1e3}).map((o,a)=>d(a));return(o,a)=>(S(),C("div",ve,[v(x(O),{data:x(s),style:{width:"100%",height:"200px"},horizontal:""},{default:k(e=>[(S(),C("div",{key:e.index,style:A({width:e.size,background:"white",borderRight:"solid 1px #ccc"})},z(e.index),5))]),_:1},8,["data"])]))}}),Se=D(M,[["__scopeId","data-v-51e4ada8"]]);M.__docgenInfo={exportName:"default",displayName:"Horizontal",description:"",tags:{},sourceFiles:["/home/runner/work/virtua/virtua/stories/vue/Horizontal.vue"]};const ze={style:{height:"100%",display:"flex","flex-direction":"column"}},xe=["value"],K=y({__name:"Controlls",setup(t){const l=[20,40,180,77],d=c=>({index:c,height:l[c%4]+"px"}),s=m(Array.from({length:1e3}).map((c,p)=>d(p))),o=m(0),a=m(!1),e=m(567),_=m(),r=()=>{var c;(c=_.value)==null||c.scrollToIndex(e.value)},n=()=>{s.value=[...s.value,...Array.from({length:100}).map((c,p)=>d(p+s.value.length))]};return(c,p)=>(S(),C("div",ze,[g("div",null,"offset: "+z(o.value),1),g("div",null,"scrolling: "+z(a.value),1),g("div",null,[g("input",{type:"number",value:e.value,onInput:p[0]||(p[0]=u=>{e.value=Number(u.target.value)})},null,40,xe),g("button",{onClick:r},"scrollToIndex")]),g("div",null,[g("button",{onClick:n},"append")]),v(x(O),{ref_key:"handle",ref:_,data:s.value,onScroll:u=>{o.value=u,a.value=!0},onScrollEnd:()=>{a.value=!1}},{default:k(u=>[(S(),C("div",{key:u.index,style:A({height:u.height,background:"white",borderBottom:"solid 1px #ccc"})},z(u.index),5))]),_:1},8,["data","onScroll","onScrollEnd"])]))}}),Ce=D(K,[["__scopeId","data-v-0f447ca6"]]);K.__docgenInfo={exportName:"default",displayName:"Controlls",description:"",tags:{},sourceFiles:["/home/runner/work/virtua/virtua/stories/vue/Controlls.vue"]};const Ee={component:O},E={render:()=>({components:{Component:he},template:"<Component />"})},I={render:()=>({components:{Component:Se},template:"<Component />"})},T={render:()=>({components:{Component:Ce},template:"<Component />"})};var H,V,U;E.parameters={...E.parameters,docs:{...(H=E.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: DefaultComponent
    },
    template: "<Component />"
  })
}`,...(U=(V=E.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var j,P,$;I.parameters={...I.parameters,docs:{...(j=I.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: HorizontalComponent
    },
    template: "<Component />"
  })
}`,...($=(P=I.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var F,q,G;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: ControllsComponent
    },
    template: "<Component />"
  })
}`,...(G=(q=T.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Ie=["Default","Horizontal","Controlls"];export{T as Controlls,E as Default,I as Horizontal,Ie as __namedExportsOrder,Ee as default};
