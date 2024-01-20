import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p="modulepreload",O=function(o,i){return new URL(o,i).href},l={},t=function(i,a,n){let e=Promise.resolve();if(a&&a.length>0){const r=document.getElementsByTagName("link");e=Promise.all(a.map(s=>{if(s=O(s,n),s in l)return;l[s]=!0;const c=s.endsWith(".css"),E=c?'[rel="stylesheet"]':"";if(!!n)for(let m=r.length-1;m>=0;m--){const d=r[m];if(d.href===s&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${E}`))return;const _=document.createElement("link");if(_.rel=c?"stylesheet":p,c||(_.as="script",_.crossOrigin=""),_.href=s,document.head.appendChild(_),c)return new Promise((m,d)=>{_.addEventListener("load",m),_.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})}))}return e.then(()=>i()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})},{createBrowserChannel:v}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=v({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const P={"./stories/react/advanced/Chat.stories.tsx":async()=>t(()=>import("./Chat.stories-DOZe6aUx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/DatePicker.stories.tsx":async()=>t(()=>import("./DatePicker.stories--tOmK5u_.js"),__vite__mapDeps([9,1,2,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/DynamicColumns.stories.tsx":async()=>t(()=>import("./DynamicColumns.stories-hIQfQn32.js"),__vite__mapDeps([10,1,2,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Feed.stories.tsx":async()=>t(()=>import("./Feed.stories-2IUncSaK.js"),__vite__mapDeps([11,1,2,12,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Lazy.stories.tsx":async()=>t(()=>import("./Lazy.stories-yWYyxKtu.js"),__vite__mapDeps([13,1,2,12,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Loop.stories.tsx":async()=>t(()=>import("./Loop.stories-N2A22OYl.js"),__vite__mapDeps([14,1,2,12,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/SSR.stories.tsx":async()=>t(()=>import("./SSR.stories-6o-Yhr-B.js"),__vite__mapDeps([15,1,2,16,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/Search.stories.tsx":async()=>t(()=>import("./Search.stories-RlYJvejq.js"),__vite__mapDeps([17,1,2,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/With auto-animate.stories.tsx":async()=>t(()=>import("./With auto-animate.stories-Np46yyh5.js"),__vite__mapDeps([18,1,2,3,5,6,7,8]),import.meta.url),"./stories/react/advanced/With cmdk.stories.tsx":async()=>t(()=>import("./With cmdk.stories-yFlpWKGC.js"),__vite__mapDeps([19,1,2,20,8,3,5,6,7]),import.meta.url),"./stories/react/advanced/With dnd-kit.stories.tsx":async()=>t(()=>import("./With dnd-kit.stories-QmLDaWfH.js"),__vite__mapDeps([21,1,2,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/With material-ui.stories.tsx":async()=>t(()=>import("./With material-ui.stories-V7x8VbKA.js"),__vite__mapDeps([22,1,2,20,23,24,25,26,27,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/With radix-ui.stories.tsx":async()=>t(()=>import("./With radix-ui.stories-o8wyIc3b.js"),__vite__mapDeps([28,1,2,3,20,8,5,6,7,29]),import.meta.url),"./stories/react/advanced/With re-resizable.stories.tsx":async()=>t(()=>import("./With re-resizable.stories-oIRV7GtE.js"),__vite__mapDeps([30,1,2,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/With react-beautiful-dnd.stories.tsx":async()=>t(()=>import("./With react-beautiful-dnd.stories-A-XWfecm.js"),__vite__mapDeps([31,1,2,26,27,20,32,24,8,33,23,5,6,7]),import.meta.url),"./stories/react/advanced/Zoomable.stories.tsx":async()=>t(()=>import("./Zoomable.stories-jrbXBOhB.js"),__vite__mapDeps([34,1,2,4,5,6,7,8]),import.meta.url),"./stories/react/basics/VGrid.stories.tsx":async()=>t(()=>import("./VGrid.stories-n2l_UgqQ.js"),__vite__mapDeps([35,1,2,6,8]),import.meta.url),"./stories/react/basics/VList.stories.tsx":async()=>t(()=>import("./VList.stories-vQosBPTH.js"),__vite__mapDeps([36,1,2,12,4,5,6,7,8]),import.meta.url),"./stories/react/basics/Virtualizer.stories.tsx":async()=>t(()=>import("./Virtualizer.stories-OwmjJ4lV.js"),__vite__mapDeps([37,1,2,12,5,6,7,8]),import.meta.url),"./stories/react/basics/WindowVirtualizer.stories.tsx":async()=>t(()=>import("./WindowVirtualizer.stories-4kA5Bxd0.js"),__vite__mapDeps([38,1,2,12,6,7,8]),import.meta.url),"./stories/react/comparisons/comparisons.stories.tsx":async()=>t(()=>import("./comparisons.stories-JysYCDwL.js"),__vite__mapDeps([39,1,2,40,3,41,8,42,43,20,44,32,25,27,23,45,26,33,46]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-virtual.stories.tsx":async()=>t(()=>import("./react-virtual.stories-hkm_QiEV.js"),__vite__mapDeps([47,1,2,40,3,41,8]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-virtualized.stories.tsx":async()=>t(()=>import("./react-virtualized.stories-vTWo7Y0s.js"),__vite__mapDeps([48,1,2,40,3,43,20,44,32,25,27,23,8]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-virtuoso.stories.tsx":async()=>t(()=>import("./react-virtuoso.stories-m7yxwlxj.js"),__vite__mapDeps([49,1,2,40,3,42,8]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-window.stories.tsx":async()=>t(()=>import("./react-window.stories-ncxSw2B-.js"),__vite__mapDeps([50,1,2,40,3,45,44,32,25,27,20,26,33]),import.meta.url),"./stories/react/comparisons/for benchmarks/virtua.stories.tsx":async()=>t(()=>import("./virtua.stories-oZscq8oi.js"),__vite__mapDeps([51,1,2,40,3,46,8]),import.meta.url)};async function f(o){return P[o]()}const{composeConfigs:T,PreviewWeb:y,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const o=await Promise.all([t(()=>import("./entry-preview-LDdj4HgG.js"),__vite__mapDeps([52,2,16,8]),import.meta.url),t(()=>import("./preview-jQ-sKXCL.js"),__vite__mapDeps([]),import.meta.url)]);return T(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new y;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:f,getProjectAnnotations:I});
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Chat.stories-DOZe6aUx.js","./jsx-runtime-sgeEVxPu.js","./index-yp3VsGQP.js","./index-KLTnsmU9.js","./VList-7jSZsN5p.js","./Virtualizer-oTtbrzOC.js","./useRerender-SHJhbknV.js","./useChildren-QjhXTi5B.js","./index-8dy-jdxy.js","./DatePicker.stories--tOmK5u_.js","./DynamicColumns.stories-hIQfQn32.js","./Feed.stories-2IUncSaK.js","./common-4ZgZpLnL.js","./Lazy.stories-yWYyxKtu.js","./Loop.stories-N2A22OYl.js","./SSR.stories-6o-Yhr-B.js","./client-UI_Per3O.js","./Search.stories-RlYJvejq.js","./With auto-animate.stories-Np46yyh5.js","./With cmdk.stories-yFlpWKGC.js","./extends-dGVwEr9R.js","./With dnd-kit.stories-QmLDaWfH.js","./With material-ui.stories-V7x8VbKA.js","./objectWithoutPropertiesLoose-9Q1jwsKS.js","./hoist-non-react-statics.cjs-NCoIDYQh.js","./assertThisInitialized-4q6YPdh3.js","./inheritsLoose-fS6oVJzb.js","./setPrototypeOf-ahVgEFUp.js","./With radix-ui.stories-o8wyIc3b.js","./With radix-ui-dTVqHlzC.css","./With re-resizable.stories-oIRV7GtE.js","./With react-beautiful-dnd.stories-A-XWfecm.js","./defineProperty-rx8R_8T4.js","./memoize-one.esm-hqe5SRxC.js","./Zoomable.stories-jrbXBOhB.js","./VGrid.stories-n2l_UgqQ.js","./VList.stories-vQosBPTH.js","./Virtualizer.stories-OwmjJ4lV.js","./WindowVirtualizer.stories-4kA5Bxd0.js","./comparisons.stories-JysYCDwL.js","./common-QZPaTyzQ.js","./react-virtual-C6IqgWVZ.js","./react-virtuoso-Z058Hisa.js","./react-virtualized-frQGDLMm.js","./AutoSizer-ccQOb4H3.js","./react-window-OatkEmV4.js","./virtua-5GkEhiQ2.js","./react-virtual.stories-hkm_QiEV.js","./react-virtualized.stories-vTWo7Y0s.js","./react-virtuoso.stories-m7yxwlxj.js","./react-window.stories-ncxSw2B-.js","./virtua.stories-oZscq8oi.js","./entry-preview-LDdj4HgG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
