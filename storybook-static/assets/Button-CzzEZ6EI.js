import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as E}from"./index-BwDkhjyp.js";import{c as p}from"./classNames-DsmVytTu.js";import{u as Q,C as i,S as k}from"./ConfigProvider-Ca69TdRo.js";import{u as U,b as W}from"./context-Dt9AzXGa.js";import{c as Y}from"./index-Bl6ORisp.js";import{G as ee}from"./iconBase-BH6j_gzt.js";function re(l){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{opacity:"0.2",fillRule:"evenodd",clipRule:"evenodd",d:"M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z",fill:"currentColor"},child:[]}]})(l)}const m=E.forwardRef((l,g)=>{const{className:C,customColorClass:s,enableTheme:h=!0,indicator:e=re,isSpining:x=!0,size:u=20,style:d,...T}=l,n=s||h&&"text-primary",o={height:u,width:u,...d},a=Y(x&&"animate-spin",n,C);return t.jsx(e,{ref:g,style:o,className:a,...T})});m.displayName="Spinner";m.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},customColorClass:{required:!1,tsType:{name:"string"},description:""},enableTheme:{required:!1,tsType:{name:"boolean"},description:""},indicator:{required:!1,tsType:{name:"ElementType"},description:""},isSpining:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""}}};m.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},customColorClass:{required:!1,tsType:{name:"string"},description:""},enableTheme:{required:!1,tsType:{name:"boolean"},description:""},indicator:{required:!1,tsType:{name:"ElementType"},description:""},isSpining:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""}}};const f={round:"rounded-xl",circle:"rounded-full",none:"rounded-none"},$=E.forwardRef((l,g)=>{var N,j,z;const{asElement:C="button",active:s=!1,block:h=!1,children:e,className:x,clickFeedback:u=!0,customColorClass:d,disabled:T,icon:n,loading:o=!1,shape:a="round",size:R,variant:B="default",iconAlignment:S="start",...M}=l,{controlSize:I,ui:v}=Q(),_=(N=U())==null?void 0:N.size,F=(j=W())==null?void 0:j.size,G="button",y="inline-flex items-center justify-center",L=R||F||_||I,Z=!((z=v==null?void 0:v.button)!=null&&z.disableClickFeedback)||u,b=T||o,A=()=>{let r="";switch(L){case k.LG:r=p(i.lg.h,f[a],n&&!e?`${i.lg.w} ${y} text-2xl`:"px-8 py-2 text-base");break;case k.SM:r=p(i.sm.h,a==="round"?"rounded-xl":f[a],n&&!e?`${i.sm.w} ${y} text-lg`:"px-3 py-2 text-sm");break;case k.XS:r=p(i.xs.h,a==="round"?"rounded-lg":f[a],n&&!e?`${i.xs.w} ${y} text-base`:"px-3 py-1 text-xs");break;default:r=p(i.md.h,f[a],n&&!e?`${i.md.w} ${y} text-xl`:"px-5 py-2");break}return r},H="opacity-50 cursor-not-allowed",O=()=>q({bgColor:s?"bg-primary-deep":"bg-primary",textColor:"text-neutral",hoverColor:s?"":"hover:bg-primary-mild",activeColor:""}),P=()=>q({bgColor:s?"bg-primary-200 dark:bg-primary-50":"bg-primary-50 dark:primary-mild dark:bg-opacity-20",textColor:"",hoverColor:s?"":"hover:text-primary-mild",activeColor:"active:bg-primary-200 dark:active:primary-mild dark:active:bg-opacity-40"}),w=()=>q({bgColor:s?"bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:border-gray-500":"bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700",textColor:"text-gray-600 dark:text-gray-100",hoverColor:s?"":"ring-primary dark:ring-white hover:border-primary dark:hover:border-white hover:ring-1 hover:text-primary dark:hover:text-white dark:hover:bg-transparent",activeColor:""}),q=({bgColor:r,hoverColor:c,activeColor:J,textColor:K})=>`${r} ${b?H:c+" "+J} ${K}`,D=p(G,(()=>{switch(B){case"solid":return O();case"plain":return P();case"default":return w();default:return w()}})(),A(),x,h?"w-full":"",Z&&!b&&"button-press-feedback",d==null?void 0:d({active:s,unclickable:b})),V=r=>{const{onClick:c}=l;if(b){r.preventDefault();return}c==null||c(r)},X=()=>o&&e?t.jsxs("span",{className:"flex items-center justify-center",children:[t.jsx(m,{enableTheme:!1,className:"mr-1"}),e]}):n&&!e&&o?t.jsx(m,{enableTheme:!1}):n&&!e&&!o?t.jsx(t.Fragment,{children:n}):n&&e&&!o?t.jsxs("span",{className:"flex gap-1 items-center justify-center",children:[S==="start"&&t.jsx("span",{className:"text-lg",children:n}),t.jsx("span",{children:e}),S==="end"&&t.jsx("span",{className:"text-lg",children:n})]}):t.jsx(t.Fragment,{children:e});return t.jsx(C,{ref:g,className:D,...M,onClick:V,children:X()})});$.displayName="Button";$.__docgenInfo={description:"",methods:[],displayName:"Button",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},asElement:{required:!1,tsType:{name:"ElementType"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},block:{required:!1,tsType:{name:"boolean"},description:""},clickFeedback:{required:!1,tsType:{name:"boolean"},description:""},customColorClass:{required:!1,tsType:{name:"signature",type:"function",raw:`(state: {\r
  active: boolean;\r
  unclickable: boolean;\r
}) => string`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
  active: boolean;\r
  unclickable: boolean;\r
}`,signature:{properties:[{key:"active",value:{name:"boolean",required:!0}},{key:"unclickable",value:{name:"boolean",required:!0}}]}},name:"state"}],return:{name:"string"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"e"}],return:{name:"void"}}},description:""},shape:{required:!1,tsType:{name:"TypeAttributes.Shape"},description:""},size:{required:!1,tsType:{name:"TypeAttributes.Size"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "plain" | "default"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"plain"'},{name:"literal",value:'"default"'}]},description:""},iconAlignment:{required:!1,tsType:{name:"union",raw:'"start" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:""}},composes:["Omit"]};export{$ as B};