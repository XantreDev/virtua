import{j as o,F as n,a as e}from"./jsx-runtime-e162df28.js";const r=i=>o(n,{children:[e("div",{style:{height:100,display:i.show?"flex":"none",alignItems:"center",justifyContent:"center",background:"white"},children:e("span",{className:"loader"})}),e("style",{children:`
      .loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite
      }
      .loader::before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #ccc;
        animation: prixClipFix 2s linear infinite ;
      }
  
      @keyframes rotate {
        100%   {transform: rotate(360deg)}
      }
  
      @keyframes prixClipFix {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
          75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
          100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
      }`})]});try{r.displayName="Spinner",r.__docgenInfo={description:"",displayName:"Spinner",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}}}}}catch{}export{r as S};
//# sourceMappingURL=components-10a25408.js.map
