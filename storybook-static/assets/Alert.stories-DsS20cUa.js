import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as n}from"./index-BwDkhjyp.js";import{c as b}from"./index-Bl6ORisp.js";import{f as w,g as Q,h as V,i as Z}from"./index-4AAnzh4D.js";import{C as ae}from"./index-Be5L-PMf.js";import{m as ie}from"./proxy-dGhUDU4K.js";import{T as ce,D as le,C as ue,b as me,d as de}from"./index-DNZbnWyw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iconBase-BH6j_gzt.js";import"./iframe-DMw3RXmm.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-D-8MO0q_.js";import"./index-C5NKtLi9.js";import"./index-DrFu-skq.js";function pe(o,a=0,t=!0){const r=n.useRef(),s=n.useRef(o),l=n.useCallback(()=>{r.current&&clearTimeout(r.current)},[]),u=n.useCallback(()=>{r.current&&clearTimeout(r.current),t&&(r.current=setTimeout(()=>{var m;(m=s.current)==null||m.call(s)},a))},[a,t]);return n.useEffect(()=>{s.current=o},[o]),n.useEffect(()=>(u(),l),[a,t,u,l]),{clear:l,reset:u}}const ge={success:{color:"text-success",icon:e.jsx(w,{})},info:{color:"text-info",icon:e.jsx(Q,{})},warning:{color:"text-warning",icon:e.jsx(V,{})},danger:{color:"text-error",icon:e.jsx(Z,{})}},A=o=>{const{type:a="info",custom:t,iconColor:r}=o,s=ge[a];return e.jsx("span",{className:`text-2xl ${r||s.color}`,children:t||s.icon})};A.__docgenInfo={description:"",methods:[],displayName:"StatusIcon",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},type:{required:!0,tsType:{name:"TypeAttributes.Status"},description:""},custom:{required:!1,tsType:{name:"union",raw:"ReactNode | JSX.Element",elements:[{name:"ReactNode"},{name:"JSX.Element"}]},description:""},iconColor:{required:!1,tsType:{name:"string"},description:""}}};A.__docgenInfo={description:"",methods:[],displayName:"StatusIcon",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},type:{required:!0,tsType:{name:"TypeAttributes.Status"},description:""},custom:{required:!1,tsType:{name:"union",raw:"ReactNode | JSX.Element",elements:[{name:"ReactNode"},{name:"JSX.Element"}]},description:""},iconColor:{required:!1,tsType:{name:"string"},description:""}}};const E="warning",fe={success:{backgroundColor:"bg-success-subtle",titleColor:"text-success",textColor:"text-success",iconColor:"text-success",icon:e.jsx(w,{})},info:{backgroundColor:"bg-info-subtle",titleColor:"text-info",textColor:"text-info",iconColor:"text-info",icon:e.jsx(Q,{})},warning:{backgroundColor:"bg-warning-subtle",titleColor:"text-warning",textColor:"text-warning",iconColor:"text-warning",icon:e.jsx(V,{})},danger:{backgroundColor:"bg-error-subtle",titleColor:"text-error",textColor:"text-error",iconColor:"text-error",icon:e.jsx(Z,{})}},ye=["success","danger","info","warning"],I=n.forwardRef((o,a)=>{const{children:t,className:r,closable:s=!1,customClose:l,customIcon:u,duration:m=3e3,title:i=null,onClose:d,showIcon:ee=!1,triggerByToast:N=!1,...se}=o,S=(()=>{const{type:c=E}=o;return ye.includes(c)?c:E})(),p=fe[S],[q,j]=n.useState("show"),{clear:te}=pe(d,m,m>0),re=c=>{j("hiding"),d==null||d(c),te(),N||setTimeout(()=>{j("hide")},400)},oe=()=>e.jsx("div",{className:"cursor-pointer",role:"presentation",onClick:c=>re(c),children:l||e.jsx(ae,{resetDefaultClass:!0,className:"text-lg outline-none"})}),ne=b("alert",p.backgroundColor,p.textColor,i?"":"font-semibold",s?"justify-between":"",s&&!i?"items-center":"",!N&&"rounded-xl",r);return q==="hide"?null:e.jsxs(ie.div,{ref:a,className:ne,initial:{opacity:1},animate:q==="hiding"?"exit":"animate",transition:{duration:.25,type:"tween"},variants:{animate:{opacity:1},exit:{opacity:0}},...se,children:[e.jsxs("div",{className:b("flex gap-2",!i&&t&&"items-center",i&&t&&"mt-0.5"),children:[ee&&e.jsx(A,{iconColor:p.iconColor,custom:u,type:S}),e.jsxs("div",{children:[i?e.jsx("div",{className:b("font-semibold text-lg mb-1",p.titleColor),children:i}):null,t]})]}),s?oe():null]})});I.displayName="Alert";I.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},closable:{required:!1,tsType:{name:"boolean"},description:""},customClose:{required:!1,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},customIcon:{required:!1,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},title:{required:!1,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(e?: MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLDivElement"}],raw:"MouseEvent<HTMLDivElement>"},name:"e"}],return:{name:"void"}}},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:""},triggerByToast:{required:!1,tsType:{name:"boolean"},description:""},type:{required:!1,tsType:{name:"TypeAttributes.Status"},description:""}}};const De={title:"Components/Alert",component:I,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["success","info","warning","danger"]},closable:{control:"boolean"},showIcon:{control:"boolean"},triggerByToast:{control:"boolean"},duration:{control:"number"},onClose:{action:"closed"}},parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(ce,{}),e.jsx(le,{children:"The Alert component displays brief, important messages to users, with options for success, information, warning, or error styles."}),e.jsx(ue,{}),e.jsx(me,{}),e.jsx(de,{})]})}}},g={args:{type:"success",title:"Success",children:"This is a success alert message.",showIcon:!0,closable:!0},parameters:{docs:{source:{code:'<Alert type="success" title="Success" showIcon closable>This is a success alert message.</Alert>'}}}},f={args:{type:"info",title:"Information",children:"This is an informational alert message.",showIcon:!0,closable:!0}},y={args:{type:"warning",title:"Warning",children:"This is a warning alert message.",showIcon:!0,closable:!0}},h={args:{type:"danger",title:"Error",children:"This is a danger alert message.",showIcon:!0,closable:!0}},T={args:{type:"info",title:"Custom Icon Alert",children:"This alert uses a custom icon.",showIcon:!0,closable:!0,customIcon:e.jsx(w,{className:"text-info"})}},C={args:{type:"success",title:"Auto Close",children:"This alert will close automatically after 3 seconds.",duration:3e3,closable:!0}},x={args:{type:"info",title:"Non-Closable Alert",children:"This alert does not have a close button.",closable:!1}};var R,v,_;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: "success",
    title: "Success",
    children: "This is a success alert message.",
    showIcon: true,
    closable: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<Alert type="success" title="Success" showIcon closable>This is a success alert message.</Alert>\`
      }
    }
  }
}`,...(_=(v=g.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var D,k,H;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: "info",
    title: "Information",
    children: "This is an informational alert message.",
    showIcon: true,
    closable: true
  }
}`,...(H=(k=f.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var M,P,X;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: "warning",
    title: "Warning",
    children: "This is a warning alert message.",
    showIcon: true,
    closable: true
  }
}`,...(X=(P=y.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var B,J,L;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: "danger",
    title: "Error",
    children: "This is a danger alert message.",
    showIcon: true,
    closable: true
  }
}`,...(L=(J=h.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var W,Y,F;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: "info",
    title: "Custom Icon Alert",
    children: "This alert uses a custom icon.",
    showIcon: true,
    closable: true,
    customIcon: <HiCheckCircle className="text-info" />
  }
}`,...(F=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var O,U,$;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: "success",
    title: "Auto Close",
    children: "This alert will close automatically after 3 seconds.",
    duration: 3000,
    closable: true
  }
}`,...($=(U=C.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var z,G,K;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: "info",
    title: "Non-Closable Alert",
    children: "This alert does not have a close button.",
    closable: false
  }
}`,...(K=(G=x.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const ke=["SuccessAlert","InfoAlert","WarningAlert","DangerAlert","CustomIconAlert","AutoCloseAlert","NonClosableAlert"];export{C as AutoCloseAlert,T as CustomIconAlert,h as DangerAlert,f as InfoAlert,x as NonClosableAlert,g as SuccessAlert,y as WarningAlert,ke as __namedExportsOrder,De as default};
