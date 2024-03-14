import{d as S,b as m,e as z,i as j,o as f,f as R,w as k,u as _,g as v,t as h,n as I,j as u}from"./vue.esm-bundler-CbvoPaxB.js";import{V as $}from"./Virtualizer-pman-Lc-.js";import{_ as w}from"./_plugin-vue_export-helper-BHkSwluB.js";function L(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!j(o)}const q={data:{type:Array,required:!0},overscan:{type:Number,default:4},itemSize:Number,shift:Boolean,horizontal:Boolean,ssrCount:Number},b=S({props:q,emits:["scroll","scrollEnd","rangeChange"],setup(o,{emit:c,expose:i,slots:r}){const e=o.horizontal,a=n=>{c("scroll",n)},t=()=>{c("scrollEnd")},g=(n,s)=>{c("rangeChange",n,s)},l=m();return i({get scrollOffset(){return l.value.scrollOffset},get scrollSize(){return l.value.scrollSize},get viewportSize(){return l.value.viewportSize},getItemOffset:(...n)=>l.value.getItemOffset(...n),scrollToIndex:(...n)=>l.value.scrollToIndex(...n),scrollTo:(...n)=>l.value.scrollTo(...n),scrollBy:(...n)=>l.value.scrollBy(...n)}),()=>z("div",{style:{display:e?"inline-block":"block",[e?"overflowX":"overflowY"]:"auto",contain:"strict",width:"100%",height:"100%"}},[z($,{ref:l,data:o.data,overscan:o.overscan,itemSize:o.itemSize,shift:o.shift,ssrCount:o.ssrCount,horizontal:e,onScroll:a,onScrollEnd:t,onRangeChange:g},L(r)?r:{default:()=>[r],_:2},8,["data","overscan","itemSize","shift","ssrCount","horizontal","onScroll","onScrollEnd","onRangeChange"])],4)}}),X=S({__name:"Default",setup(o){const c=[20,40,180,77],i=e=>({index:e,size:c[e%4]+"px"}),r=Array.from({length:1e3}).map((e,a)=>i(a));return(e,a)=>(f(),R(_(b),{data:_(r),style:{height:"100vh"}},{default:k(t=>[(f(),v("div",{key:t.index,style:I({height:t.size,background:"white",borderBottom:"solid 1px #ccc"})},h(t.index),5))]),_:1},8,["data"]))}}),Y=w(X,[["__scopeId","data-v-eb185981"]]),F={style:{padding:"10px"}},G=S({__name:"Horizontal",setup(o){const c=[40,180,77],i=e=>({index:e,size:c[e%3]+"px"}),r=Array.from({length:1e3}).map((e,a)=>i(a));return(e,a)=>(f(),v("div",F,[z(_(b),{data:_(r),style:{width:"100%",height:"200px"},horizontal:""},{default:k(t=>[(f(),v("div",{key:t.index,style:I({width:t.size,background:"white",borderRight:"solid 1px #ccc"})},h(t.index),5))]),_:1},8,["data"])]))}}),J=w(G,[["__scopeId","data-v-d6d7b16d"]]),K={style:{height:"100%",display:"flex","flex-direction":"column"}},M=["value"],P=S({__name:"Controlls",setup(o){const c=[20,40,180,77],i=s=>({index:s,height:c[s%4]+"px"}),r=m(Array.from({length:1e3}).map((s,p)=>i(p))),e=m(0),a=m(!1),t=m(567),g=m(),l=()=>{var s;(s=g.value)==null||s.scrollToIndex(t.value)},n=()=>{r.value=[...r.value,...Array.from({length:100}).map((s,p)=>i(p+r.value.length))]};return(s,p)=>(f(),v("div",K,[u("div",null,"offset: "+h(e.value),1),u("div",null,"scrolling: "+h(a.value),1),u("div",null,[u("input",{type:"number",value:t.value,onInput:p[0]||(p[0]=d=>{t.value=Number(d.target.value)})},null,40,M),u("button",{onClick:l},"scrollToIndex")]),u("div",null,[u("button",{onClick:n},"append")]),z(_(b),{ref_key:"handle",ref:g,data:r.value,onScroll:d=>{e.value=d,a.value=!0},onScrollEnd:()=>{a.value=!1}},{default:k(d=>[(f(),v("div",{key:d.index,style:I({height:d.height,background:"white",borderBottom:"solid 1px #ccc"})},h(d.index),5))]),_:1},8,["data","onScroll","onScrollEnd"])]))}}),Q=w(P,[["__scopeId","data-v-2f14dedf"]]),ee={component:b},C={render:()=>({components:{Component:Y},template:"<Component />"})},x={render:()=>({components:{Component:J},template:"<Component />"})},y={render:()=>({components:{Component:Q},template:"<Component />"})};var B,E,O;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: DefaultComponent
    },
    template: "<Component />"
  })
}`,...(O=(E=C.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var N,T,V;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: HorizontalComponent
    },
    template: "<Component />"
  })
}`,...(V=(T=x.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var D,A,H;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: ControllsComponent
    },
    template: "<Component />"
  })
}`,...(H=(A=y.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};const oe=["Default","Horizontal","Controlls"];export{y as Controlls,C as Default,x as Horizontal,oe as __namedExportsOrder,ee as default};
