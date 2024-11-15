import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r}from"./index-BwDkhjyp.js";import{u as j}from"./useMergeRef-B25BlMLJ.js";import{c as q}from"./index-Bl6ORisp.js";import{T as R}from"./Tooltip-CKRAaEkl.js";const T=r.forwardRef((l,d)=>{const{alt:i,className:f,icon:s,shape:o="circle",size:e="md",src:y,srcSet:g,...v}=l;let{children:a}=l;const[h,p]=r.useState(1),n=r.useRef(null),c=r.useRef(null),S=j(d,c),C=()=>{if(!n.current||!c.current)return;const m=n.current.offsetWidth,u=c.current.offsetWidth;m===0||u===0||p(u-8<m?(u-8)/m:1)};r.useEffect(()=>{C()},[h,a]);const b=typeof e=="number"?{width:e,height:e,minWidth:e,lineHeight:`${e}px`,fontSize:s?e/2:12}:{},w=q("avatar",`avatar-${o}`,typeof e=="string"?`avatar-${e}`:"",f);if(y)a=t.jsx("img",{className:`avatar-img avatar-${o}`,src:y,srcSet:g,alt:i,loading:"lazy"});else if(s)a=t.jsx("span",{className:q("avatar-icon",`avatar-icon-${e}`),children:s});else{const m=typeof e=="number"?{lineHeight:`${e}px`}:{},u={transform:`translateX(-50%) scale(${h})`};a=t.jsx("span",{ref:n,className:`avatar-string ${typeof e=="number"?"":`avatar-inner-${e}`}`,style:{...m,...u,...typeof e=="number"?{height:e}:{}},children:a})}return t.jsx("span",{ref:S,className:w,style:{...b,...v.style},...v,children:a})});T.displayName="Avatar";T.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | number",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"number"}]},description:""},shape:{required:!1,tsType:{name:"union",raw:"Exclude<TypeAttributes.Shape, 'none'> | 'square'",elements:[{name:"Exclude",elements:[{name:"TypeAttributes.Shape"},{name:"literal",value:"'none'"}],raw:"Exclude<TypeAttributes.Shape, 'none'>"},{name:"literal",value:"'square'"}]},description:""},src:{required:!1,tsType:{name:"string"},description:""},srcSet:{required:!1,tsType:{name:"string"},description:""}}};const x=({children:l,chained:d,className:i})=>t.jsx("div",{className:q("avatar-group",d&&"avatar-group-chained",i),children:l}),N=l=>{const{chained:d=!1,children:i,className:f,maxCount:s=4,onOmittedAvatarClick:o,omittedAvatarContent:e,omittedAvatarProps:y,omittedAvatarTooltip:g=!1,omittedAvatarTooltipProps:v}=l,a=r.Children.count(i),h=r.Children.toArray(i).map((p,n)=>r.cloneElement(p,{key:`grouped-avatar-${n}`}));if(s&&s<a){const p=h.slice(0,s),n=a-s,c=t.jsx(T,{className:o?"cursor-pointer":"",onClick:()=>o==null?void 0:o(),...y,children:e||`+${n}`});return p.push(g?t.jsx(R,{title:`${n} More`,...v,children:t.jsx(t.Fragment,{children:c})},"avatar-more-tooltip"):t.jsx(r.Fragment,{children:c},"avatar-more-tooltip")),t.jsx(x,{className:f,chained:d,children:p})}return t.jsx(x,{className:f,chained:d,children:i})};N.displayName="AvatarGroup";N.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},chained:{required:!1,tsType:{name:"boolean"},description:""},maxCount:{required:!1,tsType:{name:"number"},description:""},onOmittedAvatarClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},omittedAvatarContent:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},omittedAvatarProps:{required:!1,tsType:{name:"AvatarProps"},description:""},omittedAvatarTooltip:{required:!1,tsType:{name:"boolean"},description:""},omittedAvatarTooltipProps:{required:!1,tsType:{name:"Omit",elements:[{name:"TooltipProps"},{name:"literal",value:"'title'"}],raw:"Omit<TooltipProps, 'title'>"},description:""}}};const A=T;A.Group=N;A.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | number",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"number"}]},description:""},shape:{required:!1,tsType:{name:"union",raw:"Exclude<TypeAttributes.Shape, 'none'> | 'square'",elements:[{name:"Exclude",elements:[{name:"TypeAttributes.Shape"},{name:"literal",value:"'none'"}],raw:"Exclude<TypeAttributes.Shape, 'none'>"},{name:"literal",value:"'square'"}]},description:""},src:{required:!1,tsType:{name:"string"},description:""},srcSet:{required:!1,tsType:{name:"string"},description:""}}};export{A,N as a};