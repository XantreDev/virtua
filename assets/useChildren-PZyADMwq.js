import{r}from"./index-98wxwTcn.js";import{u as c,r as l,N as R,i as y,t as _}from"./useRerender-ClDaOjt3.js";import{j as f}from"./jsx-runtime-DCrfGL6_.js";const w=e=>{const t=r.useRef(e);return c(()=>{t[l]=e},[e]),t},b=r.memo(({_children:e,_resizer:t,_index:n,_offset:s,_hide:i,_as:a,_isHorizontal:o,_isSSR:m})=>{const u=r.useRef(R);c(()=>t(u[l],n),[n]);const p=r.useMemo(()=>{const d={margin:0,padding:0,position:i&&m?void 0:"absolute",[o?"height":"width"]:"100%",[o?"top":"left"]:0,[o?y()?"right":"left":"top"]:s,visibility:!i||m?"visible":"hidden"};return o&&(d.display="flex"),d},[s,i,m]);return typeof a=="string"?f.jsx(a,{ref:u,style:p,children:e}):f.jsx(a,{ref:u,style:p,index:n,children:e})});b.__docgenInfo={description:"@internal",methods:[],displayName:"ListItem",props:{_children:{required:!0,tsType:{name:"ReactNode"},description:""},_resizer:{required:!0,tsType:{name:"signature",type:"function",raw:"(el: HTMLElement, i: number) => () => void",signature:{arguments:[{type:{name:"HTMLElement"},name:"el"},{type:{name:"number"},name:"i"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}}},description:""},_index:{required:!0,tsType:{name:"number"},description:""},_offset:{required:!0,tsType:{name:"number"},description:""},_hide:{required:!0,tsType:{name:"boolean"},description:""},_as:{required:!0,tsType:{name:"union",raw:'"div" | CustomItemComponent',elements:[{name:"literal",value:'"div"'},{name:"ReactForwardRefExoticComponent",raw:`React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CustomItemComponentProps> & React.RefAttributes<any>
>`,elements:[{name:"intersection",raw:"React.PropsWithoutRef<CustomItemComponentProps> & React.RefAttributes<any>",elements:[{name:"ReactPropsWithoutRef",raw:"React.PropsWithoutRef<CustomItemComponentProps>",elements:[{name:"CustomItemComponentProps"}]},{name:"ReactRefAttributes",raw:"React.RefAttributes<any>",elements:[{name:"any"}]}]}]}]},description:""},_isHorizontal:{required:!0,tsType:{name:"boolean"},description:""},_isSSR:{required:!0,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""}}};const T=(e,t)=>r.useMemo(()=>{if(typeof e=="function")return[e,t||0];const n=_(e);return[s=>n[s],n.length]},[e,t]);export{b as L,w as a,T as u};
