import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{I as r}from"./index-DqJvNoXB.js";import{T as z,D as O,C as P,b as A,d as B}from"./index-DNZbnWyw.js";import{b as H,c as U,d as V,e as F}from"./index-4AAnzh4D.js";import{T as D}from"./Tooltip-CKRAaEkl.js";import{r as R}from"./index-BwDkhjyp.js";import"./index-Bl6ORisp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ConfigProvider-Ca69TdRo.js";import"./context-Dt9AzXGa.js";import"./isNil-RdDhTYZ2.js";import"./iframe-DMw3RXmm.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-D-8MO0q_.js";import"./index-C5NKtLi9.js";import"./index-DrFu-skq.js";import"./iconBase-BH6j_gzt.js";import"./floating-ui.react-BT-uHCPb.js";import"./proxy-dGhUDU4K.js";D.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'top-start'
| 'top-end'
| 'bottom'
| 'bottom-start'
| 'bottom-end'
| 'right'
| 'right-start'
| 'right-end'
| 'left'
| 'left-start'
| 'left-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"}]},description:""},title:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},wrapperClass:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const le={title:"Components/Input",component:r,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(O,{children:"The DropdownItem component is a single item within a dropdown menu, supporting various styles and states like active, disabled, divider, header, and custom."}),e.jsx(P,{}),e.jsx(A,{}),e.jsx(B,{})]})}},argTypes:{placeholder:{control:"text"},size:{control:{type:"select"},options:["sm","md","lg"]},disabled:{control:"boolean"},textArea:{control:"boolean"}}},s={parameters:{docs:{description:{story:"Default usage of Dropdown"}}},args:{placeholder:"Basic Usage"}},t={parameters:{docs:{description:{story:"There's three sizes of option for Input field."}}},render:()=>e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(r,{size:"sm",placeholder:"Input sm"})}),e.jsx("div",{className:"mb-4",children:e.jsx(r,{placeholder:"Input md"})}),e.jsx("div",{className:"mb-4",children:e.jsx(r,{size:"lg",placeholder:"Input lg"})})]})},a={parameters:{docs:{description:{story:"Disabled Input."}}},args:{placeholder:"Disabled Input",disabled:!0}},n={parameters:{docs:{description:{story:"Input can have suffix or prefix content inside."}}},render:()=>e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsx(r,{placeholder:"Enter your name",prefix:e.jsx(H,{className:"text-lg"})})}),e.jsx("div",{className:"mb-4",children:e.jsx(r,{placeholder:"Enter your rate",suffix:e.jsx(D,{title:"Field info",children:e.jsx(U,{className:"text-lg cursor-pointer ml-1"})})})}),e.jsx("div",{className:"mb-4",children:e.jsx(r,{prefix:"$",suffix:".00"})})]})},_=()=>{const[l,E]=R.useState("password"),S=()=>{E(l==="password"?"text":"password")},q=e.jsx("span",{className:"cursor-pointer",onClick:()=>S(),children:l==="password"?e.jsx(V,{}):e.jsx(F,{})});return e.jsx("div",{children:e.jsx(r,{type:l,suffix:q,placeholder:"Password"})})},o={parameters:{docs:{description:{story:"Example of controlling the Input type via prefix icon."}}},render:()=>e.jsx(e.Fragment,{children:e.jsx(_,{})})},i={parameters:{docs:{description:{story:"Turn Input field to textarea by setting textarea prop to true."}}},args:{placeholder:"Basic Usage",textArea:!0}};var p,d,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default usage of Dropdown"
      }
    }
  },
  args: {
    placeholder: "Basic Usage"
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,u,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "There's three sizes of option for Input field."
      }
    }
  },
  render: () => <div>\r
      <div className="mb-4">\r
        <Input size="sm" placeholder="Input sm" />\r
      </div>\r
      <div className="mb-4">\r
        <Input placeholder="Input md" />\r
      </div>\r
      <div className="mb-4">\r
        <Input size="lg" placeholder="Input lg" />\r
      </div>\r
    </div>
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,h,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Disabled Input."
      }
    }
  },
  args: {
    placeholder: "Disabled Input",
    disabled: true
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,b,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Input can have suffix or prefix content inside."
      }
    }
  },
  render: () => <div>\r
      <div className="mb-4">\r
        <Input placeholder="Enter your name" prefix={<HiOutlineUser className="text-lg" />} />\r
      </div>\r
      <div className="mb-4">\r
        <Input placeholder="Enter your rate" suffix={<Tooltip title="Field info">\r
              <HiOutlineExclamationCircle className="text-lg cursor-pointer ml-1" />\r
            </Tooltip>} />\r
      </div>\r
      <div className="mb-4">\r
        <Input prefix="$" suffix=".00" />\r
      </div>\r
    </div>
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var j,I,T;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Example of controlling the Input type via prefix icon."
      }
    }
  },
  render: () => <>\r
      <PasswordVisibleComponent />\r
    </>
}`,...(T=(I=o.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var N,w,C;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Turn Input field to textarea by setting textarea prop to true."
      }
    }
  },
  args: {
    placeholder: "Basic Usage",
    textArea: true
  }
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const pe=["Basic","Sizes","Disabled","Affix","PasswordVisible","TextArea"];export{n as Affix,s as Basic,a as Disabled,o as PasswordVisible,t as Sizes,i as TextArea,pe as __namedExportsOrder,le as default};
