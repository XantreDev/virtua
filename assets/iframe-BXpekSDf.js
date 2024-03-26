import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function _(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=_(e);fetch(e.href,r)}})();const E="modulepreload",O=function(o,i){return new URL(o,i).href},l={},t=function(i,_,n){let e=Promise.resolve();if(_&&_.length>0){const r=document.getElementsByTagName("link");e=Promise.all(_.map(s=>{if(s=O(s,n),s in l)return;l[s]=!0;const c=s.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(!!n)for(let m=r.length-1;m>=0;m--){const d=r[m];if(d.href===s&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${p}`))return;const a=document.createElement("link");if(a.rel=c?"stylesheet":E,c||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),c)return new Promise((m,d)=>{a.addEventListener("load",m),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})}))}return e.then(()=>i()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})},{createBrowserChannel:v}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=v({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const P={"./stories/react/advanced/Chat.stories.tsx":async()=>t(()=>import("./Chat.stories-CzZq6s5e.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Collapse and remove.stories.tsx":async()=>t(()=>import("./Collapse and remove.stories-yby9P3BZ.js"),__vite__mapDeps([9,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Collapse and scroll.stories.tsx":async()=>t(()=>import("./Collapse and scroll.stories-Ca8R23o4.js"),__vite__mapDeps([11,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/DatePicker.stories.tsx":async()=>t(()=>import("./DatePicker.stories-NTIV_RPP.js"),__vite__mapDeps([12,1,2,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/DynamicColumns.stories.tsx":async()=>t(()=>import("./DynamicColumns.stories-BAx1hLlZ.js"),__vite__mapDeps([13,1,2,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Feed.stories.tsx":async()=>t(()=>import("./Feed.stories-PkEaZFAi.js"),__vite__mapDeps([14,1,2,10,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Lazy.stories.tsx":async()=>t(()=>import("./Lazy.stories-BY02FX0g.js"),__vite__mapDeps([15,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Loop.stories.tsx":async()=>t(()=>import("./Loop.stories-D5E6PPQW.js"),__vite__mapDeps([16,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/SSR.stories.tsx":async()=>t(()=>import("./SSR.stories-ButyucUE.js"),__vite__mapDeps([17,1,2,18,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/Search.stories.tsx":async()=>t(()=>import("./Search.stories-CIhwTMjY.js"),__vite__mapDeps([19,1,2,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/With auto-animate.stories.tsx":async()=>t(()=>import("./With auto-animate.stories-Dhj53BfW.js"),__vite__mapDeps([20,1,2,3,5,6,7,8]),import.meta.url),"./stories/react/advanced/With cmdk.stories.tsx":async()=>t(()=>import("./With cmdk.stories-_bZ_vgU1.js"),__vite__mapDeps([21,1,2,22,8,3,5,6,7]),import.meta.url),"./stories/react/advanced/With dnd-kit.stories.tsx":async()=>t(()=>import("./With dnd-kit.stories-CiCMIBMY.js"),__vite__mapDeps([23,1,2,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/With material-ui.stories.tsx":async()=>t(()=>import("./With material-ui.stories-Dz5JHFty.js"),__vite__mapDeps([24,1,2,22,25,26,27,28,29,30,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/With pragmatic-drag-and-drop.stories.tsx":async()=>t(()=>import("./With pragmatic-drag-and-drop.stories-D7iHlGpr.js"),__vite__mapDeps([31,1,2,32,33,26,27,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/With radix-ui.stories.tsx":async()=>t(()=>import("./With radix-ui.stories-BSFJKb-d.js"),__vite__mapDeps([34,1,2,3,22,8,5,6,7,35]),import.meta.url),"./stories/react/advanced/With re-resizable.stories.tsx":async()=>t(()=>import("./With re-resizable.stories-CPYkbu5C.js"),__vite__mapDeps([36,1,2,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/With react-beautiful-dnd.stories.tsx":async()=>t(()=>import("./With react-beautiful-dnd.stories-DoRNx5gX.js"),__vite__mapDeps([37,1,2,29,30,22,32,27,8,38,33,25,5,6,7]),import.meta.url),"./stories/react/advanced/Zoomable.stories.tsx":async()=>t(()=>import("./Zoomable.stories-DbHeqIS3.js"),__vite__mapDeps([39,1,2,4,5,6,7,8]),import.meta.url),"./stories/react/basics/VGrid.stories.tsx":async()=>t(()=>import("./VGrid.stories-Bd3t2ECu.js"),__vite__mapDeps([40,1,2,6,8]),import.meta.url),"./stories/react/basics/VList.stories.tsx":async()=>t(()=>import("./VList.stories-BH8iwOz3.js"),__vite__mapDeps([41,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/basics/Virtualizer.stories.tsx":async()=>t(()=>import("./Virtualizer.stories-CzHl9EYr.js"),__vite__mapDeps([42,1,2,10,5,6,7,8]),import.meta.url),"./stories/react/basics/WindowVirtualizer.stories.tsx":async()=>t(()=>import("./WindowVirtualizer.stories-DAlIoO0f.js"),__vite__mapDeps([43,1,2,10,6,7,8]),import.meta.url),"./stories/react/comparisons/comparisons.stories.tsx":async()=>t(()=>import("./comparisons.stories-C7F75Dga.js"),__vite__mapDeps([44,1,2,45,3,46,8,47,48,22,49,32,28,30,25,50,29,38,51]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-virtual.stories.tsx":async()=>t(()=>import("./react-virtual.stories-xQhuc1hl.js"),__vite__mapDeps([52,1,2,45,3,46,8]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-virtualized.stories.tsx":async()=>t(()=>import("./react-virtualized.stories-9Ljp-tJJ.js"),__vite__mapDeps([53,1,2,45,3,48,22,49,32,28,30,25,8]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-virtuoso.stories.tsx":async()=>t(()=>import("./react-virtuoso.stories-oUu28rsB.js"),__vite__mapDeps([54,1,2,45,3,47,8]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-window.stories.tsx":async()=>t(()=>import("./react-window.stories-CN2CMau3.js"),__vite__mapDeps([55,1,2,45,3,50,49,32,28,30,22,29,38]),import.meta.url),"./stories/react/comparisons/for benchmarks/virtua.stories.tsx":async()=>t(()=>import("./virtua.stories-DFlQj1a1.js"),__vite__mapDeps([56,1,2,45,3,51,8]),import.meta.url)};async function f(o){return P[o]()}const{composeConfigs:y,PreviewWeb:L,ClientApi:A}=__STORYBOOK_MODULE_PREVIEW_API__,T=async()=>{const o=await Promise.all([t(()=>import("./entry-preview-ByCE75FX.js"),__vite__mapDeps([57,2,18,8]),import.meta.url),t(()=>import("./preview-m5ryCSDP.js"),__vite__mapDeps([]),import.meta.url)]);return y(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L(f,T);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Chat.stories-CzZq6s5e.js","./jsx-runtime-DuyR_K1q.js","./index-yUhCOHB4.js","./index-xJp9Kd2E.js","./VList-Bmm-n3Aw.js","./Virtualizer-DxgJZkFH.js","./useRerender-tyWaKUHE.js","./useChildren-CQgZ7MZY.js","./index-CDi3QEc7.js","./Collapse and remove.stories-yby9P3BZ.js","./common-Dh7NYrBt.js","./Collapse and scroll.stories-Ca8R23o4.js","./DatePicker.stories-NTIV_RPP.js","./DynamicColumns.stories-BAx1hLlZ.js","./Feed.stories-PkEaZFAi.js","./Lazy.stories-BY02FX0g.js","./Loop.stories-D5E6PPQW.js","./SSR.stories-ButyucUE.js","./client-L2NyA14C.js","./Search.stories-CIhwTMjY.js","./With auto-animate.stories-Dhj53BfW.js","./With cmdk.stories-_bZ_vgU1.js","./extends-CCbyfPlC.js","./With dnd-kit.stories-CiCMIBMY.js","./With material-ui.stories-Dz5JHFty.js","./objectWithoutPropertiesLoose-1QL-frMM.js","./emotion-react.browser.esm-Dk3Vk4vR.js","./hoist-non-react-statics.cjs-Ck30LghF.js","./assertThisInitialized-B9jnkVVz.js","./inheritsLoose-1HkgTRWY.js","./setPrototypeOf-DgZC2w_0.js","./With pragmatic-drag-and-drop.stories-D7iHlGpr.js","./defineProperty-CGxbSGuy.js","./raf-schd.esm-CmoV45_-.js","./With radix-ui.stories-BSFJKb-d.js","./With radix-ui-B1NWoeXM.css","./With re-resizable.stories-CPYkbu5C.js","./With react-beautiful-dnd.stories-DoRNx5gX.js","./memoize-one.esm-CcMeOnPo.js","./Zoomable.stories-DbHeqIS3.js","./VGrid.stories-Bd3t2ECu.js","./VList.stories-BH8iwOz3.js","./Virtualizer.stories-CzHl9EYr.js","./WindowVirtualizer.stories-DAlIoO0f.js","./comparisons.stories-C7F75Dga.js","./common-DNZPq7jP.js","./react-virtual-D8RKZmY0.js","./react-virtuoso-DBoN6oMh.js","./react-virtualized-DVQgzXfG.js","./AutoSizer-CsEAOvl3.js","./react-window-WVtaLABk.js","./virtua-BHYEkrfj.js","./react-virtual.stories-xQhuc1hl.js","./react-virtualized.stories-9Ljp-tJJ.js","./react-virtuoso.stories-oUu28rsB.js","./react-window.stories-CN2CMau3.js","./virtua.stories-DFlQj1a1.js","./entry-preview-ByCE75FX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
