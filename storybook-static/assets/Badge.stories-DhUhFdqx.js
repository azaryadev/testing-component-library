import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{B as j}from"./Badge-cRkfNVzS.js";import{T as B,D as N,C as D,b as W,d as w}from"./index-DNZbnWyw.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./classNames-DsmVytTu.js";import"./index-Bl6ORisp.js";import"./iframe-DMw3RXmm.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-D-8MO0q_.js";import"./index-C5NKtLi9.js";import"./index-DrFu-skq.js";const A={title:"Components/Badge",component:j,argTypes:{content:{control:"text"},maxCount:{control:"number",defaultValue:99},badgeStyle:{control:"object"},className:{control:"text"},innerClass:{control:"text"}},parameters:{docs:{page:()=>r.jsxs(r.Fragment,{children:[r.jsx(B,{}),r.jsx(N,{children:"The Badge component is a versatile indicator for displaying small notifications or counts on other UI elements, such as icons or avatars."}),r.jsx(D,{}),r.jsx(W,{}),r.jsx(w,{})]})}}},e={args:{content:"New"}},t={args:{content:12,maxCount:10}},o={args:{content:"99+",badgeStyle:{backgroundColor:"purple",color:"white",padding:"0.25rem 0.5rem"}}},n={args:{content:""}},a={args:{content:5},render:S=>r.jsx(j,{...S,children:r.jsx("button",{style:{padding:"0.5rem 1rem",border:"1px solid gray"},children:"Notifications"})})};var s,c,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    content: "New"
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,d,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    content: 12,
    maxCount: 10
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,g,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    content: "99+",
    badgeStyle: {
      backgroundColor: "purple",
      color: "white",
      padding: "0.25rem 0.5rem"
    }
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,h,C;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    content: "" // Empty content to display as a dot
  }
}`,...(C=(h=n.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var b,y,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    content: 5
  },
  render: args => <Badge {...args}>\r
      <button style={{
      padding: "0.5rem 1rem",
      border: "1px solid gray"
    }}>\r
        Notifications\r
      </button>\r
    </Badge>
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const G=["Default","WithNumberContent","WithCustomStyles","DotBadge","WithChildren"];export{e as Default,n as DotBadge,a as WithChildren,o as WithCustomStyles,t as WithNumberContent,G as __namedExportsOrder,A as default};
