import{j as e,a as d}from"./jsx-runtime-c3d7f245.js";import{r as i}from"./index-c6dae603.js";import{L as f}from"./List-c7f615a6.js";import"./index-778f7dbf.js";const T={component:f},t=[100,200,300,100,200,300,100,300,400,200],u=i.forwardRef(({children:a,style:h,scrollSize:s},n)=>{const[p,g]=i.useState(0),o=i.useRef(null);i.useLayoutEffect(()=>{o.current&&g(o.current.getBoundingClientRect().height)},[]);const r={color:"white",background:"darkgray"};return e("div",{style:h,ref:n,children:d("table",{style:{height:s,tableLayout:"fixed",borderCollapse:"collapse",whiteSpace:"nowrap"},border:1,children:[e("thead",{ref:o,style:{position:"sticky",top:0,zIndex:1,height:20},children:d("tr",{style:{width:"100%"},children:[e("th",{style:{...r,minWidth:t[0]},children:"0"}),e("th",{style:{...r,minWidth:t[1]},children:"1"}),e("th",{style:{...r,minWidth:t[2]},children:"2"}),e("th",{style:{...r,minWidth:t[3]},children:"3"}),e("th",{style:{...r,minWidth:t[4]},children:"4"}),e("th",{style:{...r,minWidth:t[5]},children:"5"}),e("th",{style:{...r,minWidth:t[6]},children:"6"}),e("th",{style:{...r,minWidth:t[7]},children:"7"}),e("th",{style:{...r,minWidth:t[8]},children:"8"}),e("th",{style:{...r,minWidth:t[9]},children:"9"})]})}),e("tbody",{style:{height:s,marginTop:p,position:"absolute",top:0,left:0},children:a})]})})}),l={render:()=>e(f,{style:{width:"100%",height:"75%",background:"#fff",overflow:"auto"},element:u,itemElement:"tr",children:Array.from({length:1e3}).map((a,h)=>e(i.Fragment,{children:Array.from({length:10}).map((s,n)=>d("td",{style:{minWidth:t[n]},children:[h,", ",n]},n))},h))})};var c,m,y;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <List style={{
      width: "100%",
      height: "75%",
      background: "#fff",
      overflow: "auto"
    }} element={TableList} itemElement="tr">
        {Array.from({
        length: 1000
      }).map((_, i) => <Fragment key={i}>
            {Array.from({
          length: 10
        }).map((_, j) => <td key={j} style={{
          minWidth: COLUMN_WIDTHS[j]
        }}>
                {i}, {j}
              </td>)}
          </Fragment>)}
      </List>;
  }
}`,...(y=(m=l.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const _=["Table"];export{l as Table,_ as __namedExportsOrder,T as default};
//# sourceMappingURL=Table.stories-9a0a8b0e.js.map
