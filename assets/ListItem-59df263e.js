import{j as y}from"./jsx-runtime-c3d7f245.js";import{r as i}from"./index-c6dae603.js";import{b as d,n as m,c as h,r as I}from"./Window-53c6905e.js";const _=i.memo(({_children:n,_resizer:p,_store:e,_index:t,_element:c,_isHorizontal:r,_isRtl:f})=>{const l=i.useRef(null),s=d(e,()=>e._getItemOffset(t),m,!0),a=d(e,()=>e._isUnmeasuredItem(t),m,!0);return h(()=>p._observeItem(l[I],t),[t]),y(c,{ref:l,style:i.useMemo(()=>{const u=f?"right":"left",o={margin:0,padding:0,position:"absolute",[r?"height":"width"]:"100%",[r?"top":u]:0,[r?u:"top"]:s,visibility:a?"hidden":"visible"};return r&&(o.display="flex"),o},[s,a]),children:n})});try{_.displayName="ListItem",_.__docgenInfo={description:"",displayName:"ListItem",props:{_children:{defaultValue:null,description:"",name:"_children",required:!0,type:{name:"ReactNode"}},_resizer:{defaultValue:null,description:"",name:"_resizer",required:!0,type:{name:"ListResizer"}},_store:{defaultValue:null,description:"",name:"_store",required:!0,type:{name:"VirtualStore"}},_index:{defaultValue:null,description:"",name:"_index",required:!0,type:{name:"number"}},_element:{defaultValue:null,description:"",name:"_element",required:!0,type:{name:'"div"'}},_isHorizontal:{defaultValue:null,description:"",name:"_isHorizontal",required:!0,type:{name:"boolean"}},_isRtl:{defaultValue:null,description:"",name:"_isRtl",required:!0,type:{name:"boolean"}}}}}catch{}export{_ as L};
//# sourceMappingURL=ListItem-59df263e.js.map
