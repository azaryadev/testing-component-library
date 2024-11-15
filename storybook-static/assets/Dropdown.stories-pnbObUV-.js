import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as o}from"./index-BwDkhjyp.js";import{c as $}from"./index-Bl6ORisp.js";import{T as Me,a as Ke,b as tt,c as nt,u as Pe}from"./index-DAtgSu4l.js";import{i as Fe}from"./isNil-RdDhTYZ2.js";import{u as _e,D as rt}from"./ConfigProvider-Ca69TdRo.js";import{c as K}from"./classNames-DsmVytTu.js";import{G as st}from"./iconBase-BH6j_gzt.js";import{h as Be,i as it,j as z,k as ot,u as at,l as dt,b as lt,m as mt,n as ct,e as pt,d as ut,p as vt,q as gt,g as yt,r as ft,t as ht,v as wt,F as It,w as xt,f as Dt,s as Tt,a as jt,x as He}from"./floating-ui.react-BT-uHCPb.js";import{T as bt,D as kt,C as Ct,b as Nt,d as qt}from"./index-DNZbnWyw.js";import"./index-0dGa3Vry.js";import{B as St}from"./Button-CzzEZ6EI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C5NKtLi9.js";import"./index-B8XB3FuZ.js";import"./iframe-DMw3RXmm.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./context-Dt9AzXGa.js";const Z=o.createContext({}),Rt=Z.Provider,Et=({placement:n,children:s})=>n&&n.includes("right")?e.jsxs(e.Fragment,{children:[s,e.jsx(Me,{})]}):n&&n.includes("left")?e.jsxs(e.Fragment,{children:[e.jsx(Ke,{}),s]}):n&&n.includes("right")?e.jsxs(e.Fragment,{children:[s,e.jsx(tt,{})]}):e.jsxs(e.Fragment,{children:[s,e.jsx(nt,{})]}),J=o.forwardRef((n,s)=>{const{className:m,renderTitle:a,children:w,placement:p="bottom-start",disabled:g,toggleClassName:x,...d}=n,l=$("dropdown-toggle",m,x,g&&"dropdown-toggle-disabled"),i=$(l,"dropdown-toggle-default");return a?e.jsx("div",{className:l,...d,ref:s,children:a}):e.jsx("div",{ref:s,className:i,...d,children:e.jsx("span",{className:"flex items-center gap-1",children:e.jsx(Et,{placement:p,children:w})})})});J.displayName="DropdownToggle";J.__docgenInfo={description:"",methods:[],displayName:"DropdownToggle",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},renderTitle:{required:!1,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},toggleClassName:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};function Ae(n){const s=o.useRef(null);return n||s}function Mt(n){return st({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z"},child:[]}]})(n)}const G=o.forwardRef((n,s)=>{const{asElement:m="div",children:a,className:w,disabled:p,dotIndent:g,eventKey:x,isActive:d,menuItemHeight:u=42,onSelect:r,style:l,...i}=n,j=$("menu-item",d&&"menu-item-active",p&&"menu-item-disabled",!p&&"menu-item-hoverable",g&&"items-center gap-2",w),N=q=>{r&&r(x,q)};return e.jsx(m,{ref:s,className:j,style:{height:`${u}px`,...l},onClick:N,...i,children:g?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(Mt,{className:$("text-3xl w-[24px]",!d&&"opacity-25")})}),a]}):e.jsx(e.Fragment,{children:a})})});G.displayName="BaseMenuItem";G.__docgenInfo={description:"",methods:[],displayName:"BaseMenuItem",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},asElement:{required:!1,tsType:{name:"ElementType"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},dotIndent:{required:!1,tsType:{name:"boolean"},description:""},eventKey:{required:!1,tsType:{name:"string"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:""},menuItemHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(eventKey: string, e: MouseEvent) => void",signature:{arguments:[{type:{name:"string"},name:"eventKey"},{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""}}};const Q=o.forwardRef((n,s)=>{const{asElement:m="li",children:a,active:w,disabled:p,className:g,style:x,eventKey:d,onSelect:u,...r}=n,{direction:l}=_e(),i=o.useContext(Z),I=Ae(s),y=Pe("menu-item-"),T=w||!Fe(i==null?void 0:i.activeKey)&&(i==null?void 0:i.activeKey)===d;return e.jsx("ul",{style:x,className:"relative",...r,children:e.jsxs(G,{ref:I,disabled:p,asElement:m,id:y,isActive:T,eventKey:d,className:K("dropdown-submenu-item",g),onSelect:u,children:[e.jsx("span",{children:a}),l==="rtl"?e.jsx(Ke,{}):e.jsx(Me,{})]})})});Q.displayName="DropdownSubMenu";Q.__docgenInfo={description:"",methods:[],displayName:"DropdownSubMenu",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"e"}],return:{name:"void"}}},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(eventKey: string, e: MouseEvent) => void",signature:{arguments:[{type:{name:"string"},name:"eventKey"},{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},eventKey:{required:!1,tsType:{name:"string"},description:""},asElement:{required:!1,tsType:{name:"ElementType"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""}}};const W=o.createContext({getItemProps:()=>({}),activeIndex:null,setActiveIndex:()=>{},setHasFocusInside:()=>{},isOpen:!1});W.Provider;const S=o.forwardRef((n,s)=>{const{children:m,title:a,renderTitle:w,disabled:p,toggleClassName:g,menuClass:x,placement:d,trigger:u="click",onOpen:r,...l}=n,[i,I]=o.useState(!1),[y,T]=o.useState(!1),[j,N]=o.useState(null),q=o.useRef([]),D=o.useRef([]),{direction:R}=_e(),E=o.useContext(W),f=Be(),b=it(),c=z(),ne=ot(),k=c!=null,re=v=>{p||(I(v),r==null||r(v))},Le=()=>R==="ltr"?"bottom-start":"bottom-end",Oe=()=>R==="ltr"?"right-start":"left-start",{floatingStyles:Ue,refs:se,context:C}=at({nodeId:b,open:i,onOpenChange:v=>{re(v)},placement:d||(k?Oe():Le()),middleware:[Dt(),Tt()],whileElementsMounted:jt}),{isMounted:Ye,styles:$e}=dt(C,{common:({side:v})=>({transformOrigin:{top:"bottom",bottom:"top",left:"right",right:"left"}[v]}),initial:{transform:"translateY(-5%)",opacity:0},duration:200,open:{opacity:1,transform:"translateY(0%)"},close:{opacity:0,transform:"translateY(-5%)"}}),We=lt(C,{enabled:k||u==="hover",delay:{open:75},handleClose:mt({blockPointerEvents:!0})}),Ge=ct(C,{event:"mousedown",toggle:!k,ignoreMouse:k}),Ve=pt(C,{role:"menu"}),ze=ut(C,{bubbles:!0}),Ze=vt(C,{listRef:q,activeIndex:j,nested:k,onNavigate:N}),Je=gt(C,{listRef:D,onMatch:i?N:void 0,activeIndex:j}),{getReferenceProps:Qe,getFloatingProps:Xe,getItemProps:et}=yt([We,Ve,ze,Ze,Je,...u==="click"?[Ge]:[]]);o.useEffect(()=>{if(!f)return;function v(){I(!1),r==null||r(!1)}function M(ae){ae.nodeId!==b&&ae.parentId===c&&(I(!1),r==null||r(!1))}return f.events.on("click",v),f.events.on("menuopen",M),()=>{f.events.off("click",v),f.events.off("menuopen",M)}},[f,b,c]),o.useEffect(()=>{i&&f&&f.events.emit("menuopen",{parentId:c,nodeId:b})},[f,i,b,c]);const ie=ft([se.setReference,ne.ref,s]);o.useImperativeHandle(s,()=>({handleDropdownOpen:()=>{I(!0),r==null||r(!0)},handleDropdownClose:()=>{I(!1),r==null||r(!1)}}),[r]);const oe={...Qe(E.getItemProps({...l,onFocus(v){var M;(M=l.onFocus)==null||M.call(l,v),T(!1),E.setHasFocusInside(!0)}})),...u==="context"?{onContextMenu:v=>{v.preventDefault(),re(!0)}}:{}};return e.jsxs(ht,{id:b,children:[k?e.jsx("li",{ref:ie,tabIndex:E.activeIndex===ne.index?0:-1,"data-open":i?"":void 0,"data-nested":"","data-focus-inside":y?"":void 0,className:K(g,"outline-none"),...oe,children:e.jsx(Q,{children:w||a})}):e.jsx(J,{ref:ie,role:"menuitem","data-open":i?"":void 0,"data-focus-inside":y?"":void 0,className:K(g),disabled:p,placement:d,renderTitle:w,...oe,children:a}),e.jsx(W.Provider,{value:{activeIndex:j,setActiveIndex:N,getItemProps:et,setHasFocusInside:T,isOpen:i},children:e.jsx(wt,{elementsRef:q,labelsRef:D,children:Ye&&e.jsx(It,{children:e.jsx(xt,{context:C,modal:!1,initialFocus:k?-1:0,returnFocus:!k,children:e.jsx("div",{ref:se.setFloating,style:Ue,...Xe(),className:"outline-none z-30",children:e.jsx("ul",{className:K("dropdown-menu min-w-[160px]",x),style:$e,children:m})})})})})})]})});S.displayName="DropdownMenu";S.__docgenInfo={description:"",methods:[{name:"handleDropdownOpen",docblock:null,modifiers:[],params:[],returns:null},{name:"handleDropdownClose",docblock:null,modifiers:[],params:[],returns:null}],displayName:"DropdownMenu",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},renderTitle:{required:!1,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},toggleClassName:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"e"}],return:{name:"void"}}},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(eventKey: string, e: MouseEvent) => void",signature:{arguments:[{type:{name:"string"},name:"eventKey"},{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},eventKey:{required:!1,tsType:{name:"string"},description:""},activeKey:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},menuClass:{required:!1,tsType:{name:"string"},description:""},trigger:{required:!1,tsType:{name:"union",raw:"'click' | 'hover' | 'context'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'context'"}]},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(bool: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"bool"}],return:{name:"void"}}},description:""}}};const X=o.forwardRef(({activeKey:n,...s},m)=>z()===null?e.jsx(Rt,{value:{activeKey:n},children:e.jsx(He,{children:e.jsx(S,{...s,ref:m})})}):e.jsx(S,{...s,ref:m}));X.displayName="Dropdown";X.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},renderTitle:{required:!1,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},toggleClassName:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"e"}],return:{name:"void"}}},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(eventKey: string, e: MouseEvent) => void",signature:{arguments:[{type:{name:"string"},name:"eventKey"},{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},eventKey:{required:!1,tsType:{name:"string"},description:""},activeKey:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},menuClass:{required:!1,tsType:{name:"string"},description:""},trigger:{required:!1,tsType:{name:"union",raw:"'click' | 'hover' | 'context'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'context'"}]},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(bool: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"bool"}],return:{name:"void"}}},description:""}}};const{DEFAULT:Kt,DIVIDER:Pt,HEADER:de,CUSTOM:V}=rt,ee=o.forwardRef((n,s)=>{const{asElement:m="li",children:a,active:w,disabled:p,className:g,style:x,eventKey:d,onSelect:u,onClick:r,onFocus:l,variant:i=Kt,...I}=n,y=o.useContext(Z),T=o.useContext(W),j=Ae(s),N=Pe("menu-item-"),q=w||!Fe(y==null?void 0:y.activeKey)&&(y==null?void 0:y.activeKey)===d,D=Be(),R=o.useCallback(c=>{u==null||u(d||"",c),r==null||r(c)},[d,r,u]),E=o.useCallback(c=>{p||(R(c),D==null||D.events.emit("click"))},[p,R,D==null?void 0:D.events]),f={...T.getItemProps({onClick(c){E(c)},onFocus(c){l==null||l(c),T.setHasFocusInside(!0)}})};if(i===Pt||i===de||i===V)return e.jsx(m,{ref:j,id:N,style:x,className:K(`menu-item-${i}`,g),...i===V?f:{},...I,children:(i===de||i===V)&&a});function b(){return o.isValidElement(a)?o.cloneElement(a):a}return e.jsx(G,{ref:j,asElement:m,style:x,isActive:q,disabled:p,eventKey:d,className:g,...f,...I,children:b()})});ee.displayName="DropdownItem";ee.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},asElement:{required:!1,tsType:{name:"ElementType"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},submenu:{required:!1,tsType:{name:"ReactElement"},description:""},eventKey:{required:!1,tsType:{name:"string"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(eventKey: string, e: SyntheticEvent) => void",signature:{arguments:[{type:{name:"string"},name:"eventKey"},{type:{name:"SyntheticEvent"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"e"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"e"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "header" | "divider" | "custom"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"header"'},{name:"literal",value:'"divider"'},{name:"literal",value:'"custom"'}]},description:""}}};const te=o.forwardRef((n,s)=>z()===null?e.jsx(He,{children:e.jsx(S,{...n,ref:s})}):e.jsx(S,{...n,ref:s}));te.displayName="DropdownSub";te.__docgenInfo={description:"",methods:[],displayName:"DropdownSub",props:{eventKey:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const t=X;t.Item=ee;t.Menu=te;t.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},renderTitle:{required:!1,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"Placement"},description:""},toggleClassName:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"e"}],return:{name:"void"}}},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(eventKey: string, e: MouseEvent) => void",signature:{arguments:[{type:{name:"string"},name:"eventKey"},{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},eventKey:{required:!1,tsType:{name:"string"},description:""},activeKey:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},menuClass:{required:!1,tsType:{name:"string"},description:""},trigger:{required:!1,tsType:{name:"union",raw:"'click' | 'hover' | 'context'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'context'"}]},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(bool: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"bool"}],return:{name:"void"}}},description:""}}};const rn={title:"Components/Dropdown",component:t,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(bt,{}),e.jsx(kt,{children:"The DropdownItem component is a single item within a dropdown menu, supporting various styles and states like active, disabled, divider, header, and custom."}),e.jsx(Ct,{}),e.jsx(Nt,{}),e.jsx(qt,{})]})}},argTypes:{title:{control:"text"}}},P=[{key:"a",name:"Item A"},{key:"b",name:"Item B"},{key:"c",name:"Item C"},{key:"d",name:"Item D"}],h=()=>e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{eventKey:"a",children:"Item A"}),e.jsx(t.Item,{eventKey:"b",children:"Item B"}),e.jsx(t.Item,{eventKey:"c",children:"Item C"}),e.jsx(t.Item,{eventKey:"d",children:"Item D"})]}),F=(n,s)=>{console.log("Dropdown Item Clicked",n,s)},_={parameters:{docs:{description:{story:"Default usage of Dropdown"}}},args:{title:"click me!",children:e.jsx("div",{children:P.map(n=>e.jsx(t.Item,{className:" !text-black hover:!text-white",variant:"default",eventKey:n.key,onSelect:F,children:n.name},n.key))})}},Ft=e.jsx(St,{children:"Toggle as Button"}),B={parameters:{docs:{description:{story:"We can set custom toggler for Dropdown via renderTitle prop."}}},args:{renderTitle:Ft,children:e.jsx("div",{children:P.map(n=>e.jsx(t.Item,{className:" !text-black hover:!text-white",variant:"default",eventKey:n.key,onSelect:F,children:n.name},n.key))})}},H={parameters:{docs:{description:{story:"Dropdown allow us to settrigger mode to  hover"}}},args:{title:"Hover",trigger:"hover",children:e.jsx("div",{children:P.map(n=>e.jsx(t.Item,{className:" !text-black hover:!text-white",variant:"default",eventKey:n.key,onSelect:F,children:n.name},n.key))})}},A={parameters:{docs:{description:{story:"Dropdown allow us to settrigger mode to context."}}},args:{title:"Right Click",trigger:"context",children:e.jsx("div",{children:P.map(n=>e.jsx(t.Item,{className:" !text-black hover:!text-white",variant:"default",eventKey:n.key,onSelect:F,children:n.name},n.key))})}},L={parameters:{docs:{description:{story:"Dropdown can also have multiple levels."}}},args:{title:"Click Me!",children:e.jsxs("div",{children:[e.jsx(t.Item,{className:" !text-black hover:!text-white",children:"Item 1"}),e.jsxs(t.Menu,{className:" !text-black hover:!text-white",title:"Right Item 2",children:[e.jsxs(t.Menu,{title:"Item 2-1",children:[e.jsx(t.Item,{active:!0,children:"Item 2-1-1"}),e.jsx(t.Item,{children:"Item 2-1-2"}),e.jsx(t.Item,{children:"Item 2-1-3"})]}),e.jsx(t.Item,{children:"Item 2-2"}),e.jsx(t.Item,{children:"Item 2-3"})]}),e.jsxs(t.Menu,{title:"Right Item 3",children:[e.jsxs(t.Menu,{title:"Item 3-1",children:[e.jsx(t.Item,{children:"Item 3-1-1"}),e.jsx(t.Item,{children:"Item 3-1-2"}),e.jsx(t.Item,{children:"Item 3-1-3"})]}),e.jsx(t.Item,{children:"Item 3-2"}),e.jsx(t.Item,{children:"Item 3-3"})]}),e.jsx(t.Item,{className:" !text-black hover:!text-white",children:"Item 4"})]})}},O={parameters:{docs:{description:{story:"Dropdown menu placement can be assign around the trigger element in different positions via placement prop."}}},render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-xl",children:[e.jsx("div",{children:e.jsx(t,{placement:"top-start",title:"Top start",children:e.jsx(h,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"top",title:"Top center",children:e.jsx(h,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"top-end",title:"Top end",children:e.jsx(h,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"bottom-start",title:"Bottom start",children:e.jsx(h,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"bottom",title:"Bottom center",children:e.jsx(h,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"bottom-end",title:"Bottom end",children:e.jsx(h,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"right-start",title:"Right start",children:e.jsx(h,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"right",title:"Right center",children:e.jsx(h,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"right-end",title:"Right end",children:e.jsx(h,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"left-start",title:"Left start",children:e.jsx(h,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"left",title:"Left center",children:e.jsx(h,{})})}),e.jsx("div",{children:e.jsx(t,{placement:"left-end",title:"Left end",children:e.jsx(h,{})})})]})},U={parameters:{docs:{description:{story:"disabled prop can be use in both Dropdown or Dropdown.Item to disable user action."}}},args:{title:"Click Me!",disabled:!0,children:e.jsx("div",{children:P.map(n=>e.jsx(t.Item,{variant:"default",eventKey:n.key,onSelect:F,children:n.name},n.key))})}},Y={parameters:{docs:{description:{story:"Dropdown.Item has several variant type can br apply, Pass the variant prop and use either 'default', 'header', 'divider', 'default'"}}},render:()=>e.jsx("div",{children:e.jsxs(t,{title:"Click Me!",children:[e.jsx(t.Item,{variant:"header",children:e.jsxs("div",{className:"pt-3 pb-1 px-3",children:[e.jsx("span",{children:"Signed in as"}),e.jsx("div",{className:"font-semibold mt-1 text-gray-800 dark:text-white",children:"alex_g@theme_nate.com"})]})}),e.jsx(t.Item,{variant:"divider"}),e.jsx(t.Item,{children:"Item A"}),e.jsx(t.Item,{children:"Item B"}),e.jsx(t.Item,{children:"Item C"}),e.jsx(t.Item,{children:"Item D"}),e.jsx(t.Item,{variant:"custom",children:e.jsx("div",{className:`\r
							cursor-pointer \r
							px-3 \r
							py-2 \r
							text-indigo-600 \r
							font-semibold \r
							hover:bg-gray-100 \r
							dark:hover:bg-black \r
							dark:hover:bg-opacity-20\r
						`,children:"Custom Dropdown Item"})})]})})};var le,me,ce;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default usage of Dropdown"
      }
    }
  },
  args: {
    title: "click me!",
    children: <div>\r
        {dropdownItems.map(item => <Dropdown.Item className=" !text-black hover:!text-white" variant="default" key={item.key} eventKey={item.key} onSelect={onDropdownItemClick}>\r
            {item.name}\r
          </Dropdown.Item>)}\r
      </div>
  }
}`,...(ce=(me=_.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var pe,ue,ve;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "We can set custom toggler for Dropdown via renderTitle prop."
      }
    }
  },
  args: {
    renderTitle: Toggle,
    children: <div>\r
        {dropdownItems.map(item => <Dropdown.Item className=" !text-black hover:!text-white" variant="default" key={item.key} eventKey={item.key} onSelect={onDropdownItemClick}>\r
            {item.name}\r
          </Dropdown.Item>)}\r
      </div>
  }
}`,...(ve=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:ve.source}}};var ge,ye,fe;H.parameters={...H.parameters,docs:{...(ge=H.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Dropdown allow us to settrigger mode to  hover"
      }
    }
  },
  args: {
    title: "Hover",
    trigger: "hover",
    children: <div>\r
        {dropdownItems.map(item => <Dropdown.Item className=" !text-black hover:!text-white" variant="default" key={item.key} eventKey={item.key} onSelect={onDropdownItemClick}>\r
            {item.name}\r
          </Dropdown.Item>)}\r
      </div>
  }
}`,...(fe=(ye=H.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var he,we,Ie;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Dropdown allow us to settrigger mode to context."
      }
    }
  },
  args: {
    title: "Right Click",
    trigger: "context",
    children: <div>\r
        {dropdownItems.map(item => <Dropdown.Item className=" !text-black hover:!text-white" variant="default" key={item.key} eventKey={item.key} onSelect={onDropdownItemClick}>\r
            {item.name}\r
          </Dropdown.Item>)}\r
      </div>
  }
}`,...(Ie=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var xe,De,Te;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Dropdown can also have multiple levels."
      }
    }
  },
  args: {
    title: "Click Me!",
    children: <div>\r
        <Dropdown.Item className=" !text-black hover:!text-white">\r
          Item 1\r
        </Dropdown.Item>\r
        <Dropdown.Menu className=" !text-black hover:!text-white" title="Right Item 2">\r
          <Dropdown.Menu title="Item 2-1">\r
            <Dropdown.Item active>Item 2-1-1</Dropdown.Item>\r
            <Dropdown.Item>Item 2-1-2</Dropdown.Item>\r
            <Dropdown.Item>Item 2-1-3</Dropdown.Item>\r
          </Dropdown.Menu>\r
          <Dropdown.Item>Item 2-2</Dropdown.Item>\r
          <Dropdown.Item>Item 2-3</Dropdown.Item>\r
        </Dropdown.Menu>\r
        <Dropdown.Menu title="Right Item 3">\r
          <Dropdown.Menu title="Item 3-1">\r
            <Dropdown.Item>Item 3-1-1</Dropdown.Item>\r
            <Dropdown.Item>Item 3-1-2</Dropdown.Item>\r
            <Dropdown.Item>Item 3-1-3</Dropdown.Item>\r
          </Dropdown.Menu>\r
          <Dropdown.Item>Item 3-2</Dropdown.Item>\r
          <Dropdown.Item>Item 3-3</Dropdown.Item>\r
        </Dropdown.Menu>\r
        <Dropdown.Item className=" !text-black hover:!text-white">\r
          Item 4\r
        </Dropdown.Item>\r
      </div>
  }
}`,...(Te=(De=L.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var je,be,ke;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Dropdown menu placement can be assign around the trigger element in different positions via placement prop."
      }
    }
  },
  render: () => <div className="grid grid-cols-3 gap-4 max-w-xl">\r
      <div>\r
        <Dropdown placement="top-start" title="Top start">\r
          <DropdownItems />\r
        </Dropdown>\r
      </div>\r
      <div>\r
        <Dropdown placement="top" title="Top center">\r
          <DropdownItems />\r
        </Dropdown>\r
      </div>\r
      <div>\r
        <Dropdown placement="top-end" title="Top end">\r
          <DropdownItems />\r
        </Dropdown>\r
      </div>\r
      <div>\r
        <Dropdown placement="bottom-start" title="Bottom start">\r
          <DropdownItems />\r
        </Dropdown>\r
      </div>\r
      <div>\r
        <Dropdown placement="bottom" title="Bottom center">\r
          <DropdownItems />\r
        </Dropdown>\r
      </div>\r
      <div>\r
        <Dropdown placement="bottom-end" title="Bottom end">\r
          <DropdownItems />\r
        </Dropdown>\r
      </div>\r
      <div>\r
        <Dropdown placement="right-start" title="Right start">\r
          <DropdownItems />\r
        </Dropdown>\r
      </div>\r
      <div>\r
        <Dropdown placement="right" title="Right center">\r
          <DropdownItems />\r
        </Dropdown>\r
      </div>\r
      <div>\r
        <Dropdown placement="right-end" title="Right end">\r
          <DropdownItems />\r
        </Dropdown>\r
      </div>\r
      <div>\r
        <Dropdown placement="left-start" title="Left start">\r
          <DropdownItems />\r
        </Dropdown>\r
      </div>\r
      <div>\r
        <Dropdown placement="left" title="Left center">\r
          <DropdownItems />\r
        </Dropdown>\r
      </div>\r
      <div>\r
        <Dropdown placement="left-end" title="Left end">\r
          <DropdownItems />\r
        </Dropdown>\r
      </div>\r
    </div>
}`,...(ke=(be=O.parameters)==null?void 0:be.docs)==null?void 0:ke.source}}};var Ce,Ne,qe;U.parameters={...U.parameters,docs:{...(Ce=U.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "disabled prop can be use in both Dropdown or Dropdown.Item to disable user action."
      }
    }
  },
  args: {
    title: "Click Me!",
    disabled: true,
    children: <div>\r
        {dropdownItems.map(item => <Dropdown.Item variant="default" key={item.key} eventKey={item.key} onSelect={onDropdownItemClick}>\r
            {item.name}\r
          </Dropdown.Item>)}\r
      </div>
  }
}`,...(qe=(Ne=U.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var Se,Re,Ee;Y.parameters={...Y.parameters,docs:{...(Se=Y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Dropdown.Item has several variant type can br apply, Pass the variant prop and use either 'default', 'header', 'divider', 'default'"
      }
    }
  },
  render: () => <div>\r
      <Dropdown title="Click Me!">\r
        <Dropdown.Item variant="header">\r
          <div className="pt-3 pb-1 px-3">\r
            <span>Signed in as</span>\r
            <div className="font-semibold mt-1 text-gray-800 dark:text-white">\r
              alex_g@theme_nate.com\r
            </div>\r
          </div>\r
        </Dropdown.Item>\r
        <Dropdown.Item variant="divider" />\r
        <Dropdown.Item>Item A</Dropdown.Item>\r
        <Dropdown.Item>Item B</Dropdown.Item>\r
        <Dropdown.Item>Item C</Dropdown.Item>\r
        <Dropdown.Item>Item D</Dropdown.Item>\r
        <Dropdown.Item variant="custom">\r
          <div className="\r
                            cursor-pointer \r
                            px-3 \r
                            py-2 \r
                            text-indigo-600 \r
                            font-semibold \r
                            hover:bg-gray-100 \r
                            dark:hover:bg-black \r
                            dark:hover:bg-opacity-20\r
                        ">\r
            Custom Dropdown Item\r
          </div>\r
        </Dropdown.Item>\r
      </Dropdown>\r
    </div>
}`,...(Ee=(Re=Y.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};const sn=["Default","CustomToggle","TriggerHover","TriggerRightClick","SubMenu","Placement","Disabled","DropdownItemType"];export{B as CustomToggle,_ as Default,U as Disabled,Y as DropdownItemType,O as Placement,L as SubMenu,H as TriggerHover,A as TriggerRightClick,sn as __namedExportsOrder,rn as default};
