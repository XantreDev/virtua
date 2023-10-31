import{j as e,a as g}from"./jsx-runtime-c3d7f245.js";import{r as o}from"./index-c6dae603.js";import{S as le,d as ce}from"./common-4271bb5e.js";import{f as de,u as ue,A as me,a as pe,b as M,r as E,U as he,c as fe,e as ge,v as ye,V as ve,d as Se,g as be,h as _e,i as Ie,S as xe,j as we,k as Ce}from"./useRerender-1374d540.js";import{u as Re,L as ke}from"./ListItem-6312ac63.js";import{r as Ve}from"./index-eb008d06.js";const u=o.forwardRef(({children:r,overscan:s=4,initialItemSize:t,initialItemCount:a,horizontal:i,cache:c,components:{Root:R=ve,Item:S="div"}=Se,onScrollStop:y,onRangeChange:v,...p},h)=>{const k=o.useMemo(()=>de(r),[r]),d=k.length,A=Re(y),[l,H,N,f]=ue(()=>{const n=!!i,m=be(d,t,a,c,!1,!t);return[m,_e(m,n),Ie(m,n),n]});d!==l._getItemsLength()&&l._update(me,[d]);const O=pe(),[V,L]=l._getRange(),T=l._getScrollDirection(),re=l._getJumpCount(),D=l._getCorrectedScrollSize(),q=o.useRef(null),z=T!==xe;M(()=>{const n=q[E],m=H._observeRoot(n),b=N._initRoot(n),ie=l._subscribe(he+fe,ae=>{ae?Ve.flushSync(O):O()});return()=>{m(),b(),ie()}},[]),M(()=>{const n=l._flushJump();n&&N._fixScrollJump(n)},[re]),o.useEffect(()=>{z||A[E]&&A[E]()},[z]),o.useEffect(()=>{v&&v(V,L)},[V,L]),o.useImperativeHandle(h,()=>({get cache(){return l._getCache()}}),[]);const se=Ce(V,s,T),oe=we(L,s,T,d),B=[];for(let n=se;n<=oe;n++){const m=k[n],b=m.key;B.push(e(ke,{_resizer:H,_index:n,_offset:l._getItemOffset(n),_hide:l._isUnmeasuredItem(n),_element:S,_children:m,_isHorizontal:f},ge(b)?b:"_"+n))}return e(R,{ref:q,width:f?D:void 0,height:f?void 0:D,scrolling:z,attrs:o.useMemo(()=>({...p,style:{display:f?"inline-block":"block",width:f?"auto":"100%",height:f?"100%":"auto",...p.style}}),ye(p)),children:B})});try{u.displayName="WVList",u.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps} and {@link WVListHandle}.",displayName:"WVList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WVListHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Item?: CustomItemComponentOrElement; }"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(startIndex: number, endIndex: number) => void"}}}}}catch{}const W=r=>{const s=[20,40,80,77];return Array.from({length:r}).map((t,a)=>e("div",{style:{height:s[a%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:a},a))},Le=r=>Array.from({length:r}).map((s,t)=>g("div",{style:{width:t%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",t]},t)),Oe={component:u},_={render:()=>e("div",{style:{padding:200},children:e(u,{style:{border:"solid 1px gray"},children:W(1e3)})})},I={render:()=>e("div",{style:{padding:200},children:e(u,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:Le(1e3)})})},x={render:()=>g("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600},children:e(u,{style:{margin:10},children:W(1e3)})}),e("div",{style:{flex:3,paddingBottom:600},children:e(u,{style:{margin:10},children:Array.from({length:1e3}).map((r,s)=>e("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:s},s))})}),e("div",{style:{flex:2,padding:20,paddingTop:300},children:e("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]})},w={render:()=>{const r=(v,p=0)=>{const h=[20,40,80,77];return Array.from({length:v}).map((k,d)=>(d+=p,e("div",{style:{height:h[d%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:d},d)))},[s,t]=o.useState(!1),a=async()=>{t(!0),await ce(1e3),t(!1)},i=100,[c,R]=o.useState(()=>r(i)),S=o.useRef(-1),y=c.length;return e("div",{style:{padding:"200px 200px 0px 200px"},children:g(u,{onRangeChange:async(v,p)=>{p+50>y&&S.current<y&&(S.current=y,await a(),R(h=>[...h,...r(i,h.length)]))},children:[c,s&&e(le,{})]})})}},Te=({id:r})=>{const s="window-list-cache-"+r,t=o.useRef(null),[a,i]=o.useMemo(()=>{const c=sessionStorage.getItem(s);return c?JSON.parse(c):[]},[]);return o.useEffect(()=>{if(!t.current)return;const c=t.current;return window.scrollTo(0,a??0),()=>{sessionStorage.setItem(s,JSON.stringify([window.scrollY,c.cache]))}},[]),e(u,{ref:t,cache:i,children:W(1e3)})},C={render:()=>{const[r,s]=o.useState(!0),[t,a]=o.useState("1");return g("div",{style:{position:"relative"},children:[g("div",{style:{position:"fixed",top:0,left:0,zIndex:10},children:[e("button",{onClick:()=>{s(i=>!i)},children:r?"hide":"show"}),["1","2","3"].map(i=>g("label",{children:[e("input",{type:"radio",checked:t===i,onChange:()=>{a(i)}}),i]},i))]}),r&&e(Te,{id:t},t)]})}};var U,j,F;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: 200
    }}>
        <WVList style={{
        border: "solid 1px gray"
      }}>
          {createRows(1000)}
        </WVList>
      </div>;
  }
}`,...(F=(j=_.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var J,P,Y;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: 200
    }}>
        <WVList horizontal style={{
        height: 400,
        border: "solid 1px gray"
      }}>
          {createColumns(1000)}
        </WVList>
      </div>;
  }
}`,...(Y=(P=I.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var G,K,Z;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      flexDirection: "row"
    }}>
        <div style={{
        flex: 1,
        display: "flex",
        paddingTop: 600
      }}>
          <WVList style={{
          margin: 10
        }}>
            {createRows(1000)}
          </WVList>
        </div>
        <div style={{
        flex: 3,
        paddingBottom: 600
      }}>
          <WVList style={{
          margin: 10
        }}>
            {Array.from({
            length: 1000
          }).map((_, i) => {
            return <div key={i} style={{
              height: 200,
              borderRadius: 8,
              margin: 16,
              background: "#fff"
            }}>
                  {i}
                </div>;
          })}
          </WVList>
        </div>
        <div style={{
        flex: 2,
        padding: 20,
        paddingTop: 300
      }}>
          <div style={{
          top: 0,
          height: 400,
          position: "sticky",
          background: "white"
        }}></div>
        </div>
      </div>;
  }
}`,...(Z=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var Q,X,$;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const createRows = (num: number, offset: number = 0) => {
      const heights = [20, 40, 80, 77];
      return Array.from({
        length: num
      }).map((_, i) => {
        i += offset;
        return <div key={i} style={{
          height: heights[i % 4],
          borderBottom: "solid 1px #ccc",
          background: "#fff"
        }}>
            {i}
          </div>;
      });
    };
    const [fetching, setFetching] = useState(false);
    const fetchItems = async () => {
      setFetching(true);
      await delay(1000);
      setFetching(false);
    };
    const ITEM_BATCH_COUNT = 100;
    const [items, setItems] = useState(() => createRows(ITEM_BATCH_COUNT));
    const fetchedCountRef = useRef(-1);
    const count = items.length;
    return <div style={{
      padding: "200px 200px 0px 200px"
    }}>
        <WVList onRangeChange={async (_, end) => {
        if (end + 50 > count && fetchedCountRef.current < count) {
          fetchedCountRef.current = count;
          await fetchItems();
          setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT, prev.length)]);
        }
      }}>
          {items}
          {fetching && <Spinner />}
        </WVList>
      </div>;
  }
}`,...($=(X=w.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var ee,te,ne;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(true);
    const [selectedId, setSelectedId] = useState("1");
    return <div style={{
      position: 'relative'
    }}>
        <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10
      }}>
          <button onClick={() => {
          setShow(prev => !prev);
        }}>
            {show ? "hide" : "show"}
          </button>
          {["1", "2", "3"].map(id => <label key={id}>
              <input type="radio" checked={selectedId === id} onChange={() => {
            setSelectedId(id);
          }} />
              {id}
            </label>)}
        </div>
        {show && <RestorableList key={selectedId} id={selectedId} />}
      </div>;
  }
}`,...(ne=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const De=["Default","Horizontal","Complex","InfiniteScrolling","ScrollRestoration"];export{x as Complex,_ as Default,I as Horizontal,w as InfiniteScrolling,C as ScrollRestoration,De as __namedExportsOrder,Oe as default};
//# sourceMappingURL=WVList.stories-89635106.js.map
