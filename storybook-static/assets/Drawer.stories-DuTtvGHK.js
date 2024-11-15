import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{c as t}from"./index-Bl6ORisp.js";import{M as fe}from"./index-BJDEPOTl.js";import{C as we}from"./index-Be5L-PMf.js";import{m as ye}from"./proxy-dGhUDU4K.js";import{r as Ne}from"./index-BwDkhjyp.js";import{T as ve,D as je,C as Ce,b as De,d as Se}from"./index-DNZbnWyw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";import"./index-Dk74W0Oi.js";import"./index-4AAnzh4D.js";import"./iconBase-BH6j_gzt.js";import"./iframe-DMw3RXmm.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-C5NKtLi9.js";import"./index-DrFu-skq.js";const b=r=>{const{bodyOpenClassName:f,bodyClass:o,children:se,className:ae,closable:v=!0,closeTimeoutMS:te=300,footer:j,footerClass:oe,headerClass:ne,height:w=400,isOpen:C,lockScroll:le=!0,onClose:y,overlayClassName:ie,placement:a="right",portalClassName:ce,showBackdrop:de=!0,title:n,width:N=400,...me}=r,pe=be=>{y==null||y(be)},ue=e.jsx(we,{className:" text-black",onClick:pe}),he=()=>a==="left"||a==="right"?{dimensionClass:"vertical",contentStyle:{width:N},motionStyle:{[a]:`-${N}${typeof N=="number"&&"px"}`}}:a==="top"||a==="bottom"?{dimensionClass:"horizontal",contentStyle:{height:w},motionStyle:{[a]:`-${w}${typeof w=="number"&&"px"}`}}:{motionStyle:{}},{dimensionClass:xe,contentStyle:ge,motionStyle:D}=he();return e.jsx(fe,{className:{base:t("drawer",ae),afterOpen:"drawer-after-open",beforeClose:"drawer-before-close"},overlayClassName:{base:t("drawer-overlay",ie,!de&&"bg-transparent"),afterOpen:"drawer-overlay-after-open",beforeClose:"drawer-overlay-before-close"},portalClassName:t("drawer-portal",ce),bodyOpenClassName:t("drawer-open",le&&"drawer-lock-scroll",f),ariaHideApp:!1,isOpen:C,closeTimeoutMS:te,...me,children:e.jsxs(ye.div,{className:t("drawer-content",xe),style:ge,initial:D,animate:{[a]:C?0:D[a]},children:[n||v?e.jsxs("div",{className:t("drawer-header",ne),children:[typeof n=="string"?e.jsx("h4",{className:"text-white",children:n}):e.jsx("span",{children:n}),v&&ue]}):null,e.jsx("div",{className:t("drawer-body",o),children:se}),j&&e.jsx("div",{className:t("drawer-footer",oe),children:j})]})})};b.displayName="Drawer";b.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{bodyClass:{required:!1,tsType:{name:"string"},description:""},closable:{required:!1,tsType:{name:"boolean"},description:""},footer:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},footerClass:{required:!1,tsType:{name:"string"},description:""},headerClass:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},lockScroll:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLSpanElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLSpanElement"}],raw:"MouseEvent<HTMLSpanElement>"},name:"e"}],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:""},showBackdrop:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""}}};const Je={title:"Components/Drawer",component:b,parameters:{layout:"centered",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(ve,{}),e.jsx(je,{children:"The Drawer component is a panel that slides in from the edge of the screen. It's commonly used for navigation menus, filters, or displaying additional content without leaving the current context."}),e.jsx(Ce,{}),e.jsx(De,{}),e.jsx(Se,{})]})}},tags:["autodocs"]},s=r=>{const[f,o]=Ne.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>o(!0),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Open Drawer"}),e.jsx(b,{className:"text-white",...r,isOpen:f,onClose:()=>o(!1),children:e.jsxs("div",{className:"p-4",children:[e.jsx("p",{children:"This is the drawer content. You can put any content here."}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{children:"Some example content:"}),e.jsxs("ul",{className:"list-disc ml-4 mt-2",children:[e.jsx("li",{children:"First item"}),e.jsx("li",{children:"Second item"}),e.jsx("li",{children:"Third item"})]})]})]})})]})},l={render:r=>e.jsx(s,{...r})},i={render:r=>e.jsx(s,{...r,placement:"left",title:"Left Drawer"})},c={render:r=>e.jsx(s,{...r,placement:"top",title:"Top Drawer",height:300})},d={render:r=>e.jsx(s,{...r,placement:"bottom",title:"Bottom Drawer",height:300})},m={render:r=>e.jsx(s,{...r,width:600,title:"Wide Drawer"})},p={render:r=>e.jsx(s,{...r,title:"Drawer with Footer",footer:e.jsxs("div",{className:"flex justify-end space-x-2 p-4 bg-gray-50",children:[e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded hover:bg-gray-300",onClick:()=>{},children:"Cancel"}),e.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",onClick:()=>{},children:"Submit"})]})})},u={render:r=>e.jsx(s,{...r,showBackdrop:!1,title:"Drawer without Backdrop"})},h={render:r=>e.jsx(s,{...r,closable:!1,title:"Non-closable Drawer"})},x={render:r=>e.jsx(s,{...r,title:"Custom Styled Drawer",headerClass:"bg-purple-600 text-white",bodyClass:"bg-purple-50",footerClass:"bg-purple-100",footer:e.jsx("div",{className:"flex justify-end p-4",children:e.jsx("button",{className:"px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700",onClick:()=>{},children:"Close"})})})},g={render:r=>e.jsx(s,{...r,title:"Complex Content",width:500,children:e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"User Details"}),e.jsx("div",{className:"space-y-2",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-10 h-10 bg-gray-200 rounded-full"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"John Doe"}),e.jsx("p",{className:"text-sm text-gray-500",children:"john@example.com"})]})]})})]}),e.jsxs("div",{className:"border-t pt-4",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Recent Activity"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"bg-gray-50 p-2 rounded",children:[e.jsx("p",{className:"text-sm",children:"Updated profile picture"}),e.jsx("p",{className:"text-xs text-gray-500",children:"2 hours ago"})]}),e.jsxs("div",{className:"bg-gray-50 p-2 rounded",children:[e.jsx("p",{className:"text-sm",children:"Changed account settings"}),e.jsx("p",{className:"text-xs text-gray-500",children:"1 day ago"})]})]})]})]})})};var S,T,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <DrawerDemo {...args} />
}`,...(k=(T=l.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var B,q,E;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <DrawerDemo {...args} placement="left" title="Left Drawer" />
}`,...(E=(q=i.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var M,O,L;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <DrawerDemo {...args} placement="top" title="Top Drawer" height={300} />
}`,...(L=(O=c.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var R,F,W;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <DrawerDemo {...args} placement="bottom" title="Bottom Drawer" height={300} />
}`,...(W=(F=d.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var H,U,_;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <DrawerDemo {...args} width={600} title="Wide Drawer" />
}`,...(_=(U=m.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var $,A,I;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <DrawerDemo {...args} title="Drawer with Footer" footer={<div className="flex justify-end space-x-2 p-4 bg-gray-50">\r
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300" onClick={() => {}}>\r
            Cancel\r
          </button>\r
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => {}}>\r
            Submit\r
          </button>\r
        </div>} />
}`,...(I=(A=p.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var J,z,Y;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <DrawerDemo {...args} showBackdrop={false} title="Drawer without Backdrop" />
}`,...(Y=(z=u.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var G,K,P;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <DrawerDemo {...args} closable={false} title="Non-closable Drawer" />
}`,...(P=(K=h.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,V,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <DrawerDemo {...args} title="Custom Styled Drawer" headerClass="bg-purple-600 text-white" bodyClass="bg-purple-50" footerClass="bg-purple-100" footer={<div className="flex justify-end p-4">\r
          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700" onClick={() => {}}>\r
            Close\r
          </button>\r
        </div>} />
}`,...(X=(V=x.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Z,ee,re;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <DrawerDemo {...args} title="Complex Content" width={500}>\r
      <div className="p-4">\r
        <div className="mb-4">\r
          <h3 className="text-lg font-semibold mb-2">User Details</h3>\r
          <div className="space-y-2">\r
            <div className="flex items-center space-x-2">\r
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>\r
              <div>\r
                <p className="font-medium">John Doe</p>\r
                <p className="text-sm text-gray-500">john@example.com</p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div className="border-t pt-4">\r
          <h4 className="font-medium mb-2">Recent Activity</h4>\r
          <div className="space-y-2">\r
            <div className="bg-gray-50 p-2 rounded">\r
              <p className="text-sm">Updated profile picture</p>\r
              <p className="text-xs text-gray-500">2 hours ago</p>\r
            </div>\r
            <div className="bg-gray-50 p-2 rounded">\r
              <p className="text-sm">Changed account settings</p>\r
              <p className="text-xs text-gray-500">1 day ago</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </DrawerDemo>
}`,...(re=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const ze=["Default","LeftDrawer","TopDrawer","BottomDrawer","CustomWidth","WithFooter","NoBackdrop","NonClosable","CustomStyled","ComplexContent"];export{d as BottomDrawer,g as ComplexContent,x as CustomStyled,m as CustomWidth,l as Default,i as LeftDrawer,u as NoBackdrop,h as NonClosable,c as TopDrawer,p as WithFooter,ze as __namedExportsOrder,Je as default};
