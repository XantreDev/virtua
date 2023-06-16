import{j as e,a as o}from"./jsx-runtime-f8a6c6ea.js";import{r as d}from"./index-5284b0bf.js";import{D as S,I as b,H,S as L}from"./common-094fe0c6.js";import{R as V}from"./react-cool-virtual-3494da7a.js";import{R as z}from"./react-virtual-45d1fea7.js";import{R as F}from"./react-virtuoso-d4bb94be.js";import{R as j}from"./react-virtualized-d02f1d6a.js";import{R as E}from"./react-window-84088797.js";import{V as A}from"./virtua-dd5981ba.js";import"./index-480187bb.js";import"./assertThisInitialized-27d5fa6d.js";import"./possibleConstructorReturn-9a41764d.js";import"./getPrototypeOf-e4242ba0.js";import"./clsx.m-1229b3e0.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./AutoSizer-5485b04d.js";import"./inheritsLoose-76ae461f.js";const se={component:S},M=({count:r})=>e("input",{type:"range",defaultValue:"0",min:0,max:r,style:{width:"85%"},onChange:n=>{Array.from(document.querySelectorAll('*[style*="overflow"]')).filter(t=>/(auto|scroll)/.test(t.style.overflow)||/(auto|scroll)/.test(t.style.overflowY)).forEach(t=>{t.scrollTop=t.scrollHeight/r*Number(n.target.value)})}}),k=r=>{switch(r){case"react-virtualized":return j;case"react-window":return E;case"react-virtuoso":return F;case"react-virtual":return z;case"react-cool-virtual":return V}},c=({count:r,ItemComponent:n})=>{const[m,t]=d.useState("react-virtualized"),p=d.useRef(null),v=d.useRef(null),D=k(m);return o("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[o("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1},children:"virtua"}),e("div",{style:{flex:1},children:o("select",{value:m,onChange:u=>t(u.target.value),children:[e("option",{value:"react-virtualized",children:"react-virtualized"}),e("option",{value:"react-window",children:"react-window"}),e("option",{value:"react-virtuoso",children:"react-virtuoso"}),e("option",{value:"react-virtual",children:"react-virtual"}),e("option",{value:"react-cool-virtual",children:"react-cool-virtual"})]})})]}),e("div",{style:{display:"flex",flexDirection:"row"},children:o("label",{children:["scroll to index:",e("input",{defaultValue:100,type:"number",min:0,max:r-1,step:1}),e("button",{onClick:u=>{var f,C;const h=Number(u.target.previousSibling.value);(f=p.current)==null||f.scrollToIndex(h),(C=v.current)==null||C.scrollToIndex(h)},children:"scroll"})]})}),e("div",{style:{display:"flex",flexDirection:"row"},children:o("label",{style:{width:"100%"},children:["scroll position:",e(M,{count:r})]})}),o("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[e("div",{style:{width:"50%"},children:e(A,{handle:p,count:r,Component:n})}),e("div",{style:{width:"50%"},children:e(D,{handle:v,count:r,Component:n})})]})]})},a={render:()=>e(c,{count:1e4,ItemComponent:b})},i={render:()=>e(c,{count:1e4,ItemComponent:S})},s={render:()=>e(c,{count:1e4,ItemComponent:H})},l={render:()=>e(c,{count:1e6,ItemComponent:L})};var O,R,y;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={ItemWithRenderCount} />;
  }
}`,...(y=(R=a.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var x,w,I;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={DynamicItem} />;
  }
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var N,T,W;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyItem} />;
  }
}`,...(W=(T=s.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var _,g,U;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <Frame count={ROW_COUNT} ItemComponent={SimpleItem} />;
  }
}`,...(U=(g=l.parameters)==null?void 0:g.docs)==null?void 0:U.source}}};const le=["RenderCount","DynamicHeight","HeavyComponent","OneMillion"];export{i as DynamicHeight,s as HeavyComponent,l as OneMillion,a as RenderCount,le as __namedExportsOrder,se as default};
//# sourceMappingURL=comparisons.stories-93bfe9c4.js.map
