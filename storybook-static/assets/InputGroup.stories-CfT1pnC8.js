import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as C}from"./index-BwDkhjyp.js";import{c as T}from"./index-Bl6ORisp.js";import{u as G,C as b}from"./ConfigProvider-Ca69TdRo.js";import{u as S,I as z,c as g,b as q}from"./context-Dt9AzXGa.js";import{T as v,D as _,C as R,b as w,d as E}from"./index-DNZbnWyw.js";import{I as r}from"./index-DqJvNoXB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DMw3RXmm.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-D-8MO0q_.js";import"./index-C5NKtLi9.js";import"./index-DrFu-skq.js";import"./isNil-RdDhTYZ2.js";const I=C.forwardRef((p,a)=>{var n;const{children:d,className:c,size:u}=p,{controlSize:m}=G(),l=(n=S())==null?void 0:n.size,f=u||l||m,t=T("input-group",c),x={size:f};return e.jsx(z,{value:x,children:e.jsx(g,{children:()=>e.jsx("div",{ref:a,className:t,children:d})})})});I.displayName="InputGroup";I.__docgenInfo={description:"",methods:[],displayName:"InputGroup",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},size:{required:!1,tsType:{name:"TypeAttributes.ControlSize"},description:""}}};const h=C.forwardRef((p,a)=>{var n,y;const{size:d,children:c,className:u}=p,{controlSize:m}=G(),l=(n=S())==null?void 0:n.size,f=(y=q())==null?void 0:y.size,t=d||f||l||m,x=T("input-addon",`input-addon-${t} ${b[t].h}`,u);return e.jsx("div",{ref:a,className:x,children:c})});h.displayName="Addon";h.__docgenInfo={description:"",methods:[],displayName:"Addon",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},size:{required:!1,tsType:{name:"TypeAttributes.ControlSize"},description:""}}};const s=I;s.Addon=h;s.__docgenInfo={description:"",methods:[],displayName:"InputGroup",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},size:{required:!1,tsType:{name:"TypeAttributes.ControlSize"},description:""}}};const{Addon:o}=s,U={title:"Components/InputGroup",component:s,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx(_,{children:"Input groups allowed us to chain serveral input related components into a single row."}),e.jsx(R,{}),e.jsx(w,{}),e.jsx(E,{})]})}}},i={parameters:{docs:{description:{story:"Addon can be placed on either side of an input. It also can place in between of both Input."}}},render:()=>e.jsxs("div",{children:[e.jsxs(s,{className:"mb-4",children:[e.jsx(o,{children:"@"}),e.jsx(r,{})]}),e.jsxs(s,{className:"mb-4",children:[e.jsx(r,{}),e.jsx(o,{children:".exmaple.com"})]}),e.jsxs(s,{className:"mb-4",children:[e.jsx(o,{children:"http://"}),e.jsx(r,{}),e.jsx(o,{children:".com"})]}),e.jsxs(s,{className:"mb-4",children:[e.jsx(r,{}),e.jsx(o,{children:"to"}),e.jsx(r,{})]})]})};var j,N,A;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Addon can be placed on either side of an input. It also can place in between of both Input."
      }
    }
  },
  render: () => <div>\r
      <InputGroup className="mb-4">\r
        <Addon>@</Addon>\r
        <Input />\r
      </InputGroup>\r
      <InputGroup className="mb-4">\r
        <Input />\r
        <Addon>.exmaple.com</Addon>\r
      </InputGroup>\r
      <InputGroup className="mb-4">\r
        <Addon>http://</Addon>\r
        <Input />\r
        <Addon>.com</Addon>\r
      </InputGroup>\r
      <InputGroup className="mb-4">\r
        <Input />\r
        <Addon>to</Addon>\r
        <Input />\r
      </InputGroup>\r
    </div>
}`,...(A=(N=i.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const W=["Addons"];export{i as Addons,W as __namedExportsOrder,U as default};
