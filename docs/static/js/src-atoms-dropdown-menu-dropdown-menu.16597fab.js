(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/atoms/dropdownMenu/DropdownMenu.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return w});var o=t("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=t("./node_modules/react/index.js"),r=t.n(i),c=t("./node_modules/@mdx-js/react/dist/index.es.js"),d=t("./node_modules/docz/dist/index.esm.js"),p=t("./src/atoms/dropdownMenu/DropdownMenu.tsx"),a=t("./src/ions/dropdown/element/DropdownElement.tsx"),s=t("./src/atoms/button/Button.tsx"),u=t("./src/atoms/icons/PhoneIcon.tsx"),b=t("./src/molecules/quick-actions-menu/QuickActionsMenu.tsx"),m={},f="wrapper";function w(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(c.b)(f,Object.assign({},m,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"dropdown-menu"},"Dropdown Menu"),Object(c.b)("p",null,"The Dropdown Menu can be used to display a menu of options that can be hidden."),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)(d.d,{of:p.a,mdxType:"Props"}),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"The dropdown can be defined alongside a controller. To display it correctly:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"both components must be wrapped in a container with an relative or absolute position")),Object(c.b)("li",{parentName:"ul"},"the controller's ref must be passed to the Dropdown")),Object(c.b)(d.c,{__position:1,__code:'() => {\n  const [dropdownIsOpen, setDropdownIsOpen] = React.useState(false)\n  const controllerRef = React.useRef(null)\n  return (\n    <div style={{ position: \'relative\' }}>\n      <div ref={controllerRef}>\n        <Button\n          nature="primary"\n          onClick={() => setDropdownIsOpen(!dropdownIsOpen)}\n        >\n          Click Me\n        </Button>\n      </div>\n      <DropdownMenu\n        isOpen={dropdownIsOpen}\n        dockingSide="left"\n        placement="bottom"\n        controllerRef={controllerRef}\n      >\n        <DropdownElement icon={<PhoneIcon />} text="Hello" />\n        <DropdownElement text="Hol\xe0" />\n        <DropdownElement text="Salut" />\n        <DropdownElement text="Hallo" />\n      </DropdownMenu>\n    </div>\n  )\n}',__scope:{props:this?this.props:t,Playground:d.c,Props:d.d,DropdownMenu:p.a,DropdownElement:a.a,Button:s.a,PhoneIcon:u.a,QuickActionsMenu:b.a},style:{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-around",height:"200px"},mdxType:"Playground"},function(){var e=r.a.useState(!1),n=Object(o.a)(e,2),t=n[0],l=n[1],i=r.a.useRef(null);return Object(c.b)("div",{style:{position:"relative"}},Object(c.b)("div",{ref:i},Object(c.b)(s.a,{nature:"primary",onClick:function(){return l(!t)},mdxType:"Button"},"Click Me")),Object(c.b)(p.a,{isOpen:t,dockingSide:"left",placement:"bottom",controllerRef:i,mdxType:"DropdownMenu"},Object(c.b)(a.a,{icon:Object(c.b)(u.a,{mdxType:"PhoneIcon"}),text:"Hello",mdxType:"DropdownElement"}),Object(c.b)(a.a,{text:"Hol\xe0",mdxType:"DropdownElement"}),Object(c.b)(a.a,{text:"Salut",mdxType:"DropdownElement"}),Object(c.b)(a.a,{text:"Hallo",mdxType:"DropdownElement"})))}),Object(c.b)("p",null,"Dropdown can be defined as:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"placed below or above their controllerRef,"),Object(c.b)("li",{parentName:"ul"},"aligned on their controller left or right")),Object(c.b)(d.c,{__position:2,__code:'() => {\n  const controller1Ref = React.useRef(null)\n  const controller2Ref = React.useRef(null)\n  return (\n    <div\n      style={{\n        display: \'flex\',\n        justifyContent: \'space-between\',\n        alignItems: \'center\',\n        width: \'100%\',\n        height: \'100%\',\n      }}\n    >\n      <div style={{ position: \'relative\' }}>\n        <div ref={controller1Ref}>\n          <Button nature="primary">TOP</Button>\n        </div>\n        <DropdownMenu\n          isOpen={true}\n          placement="top"\n          controllerRef={controller1Ref}\n        >\n          <DropdownElement text="Hello" />\n          <DropdownElement text="Hol\xe0" />\n        </DropdownMenu>\n      </div>\n      <div style={{ position: \'relative\' }}>\n        <div ref={controller2Ref}>\n          <Button nature="primary">RIGHT</Button>\n        </div>\n        <DropdownMenu\n          isOpen={true}\n          dockingSide="right"\n          controllerRef={controller2Ref}\n        >\n          <DropdownElement text="Good Morning" />\n          <DropdownElement text="Konnichiha" />\n          <DropdownElement text="Guten Tag" />\n        </DropdownMenu>\n      </div>\n    </div>\n  )\n}',__scope:{props:this?this.props:t,Playground:d.c,Props:d.d,DropdownMenu:p.a,DropdownElement:a.a,Button:s.a,PhoneIcon:u.a,QuickActionsMenu:b.a},style:{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-around",height:"200px"},mdxType:"Playground"},function(){var e=r.a.useRef(null),n=r.a.useRef(null);return Object(c.b)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",height:"100%"}},Object(c.b)("div",{style:{position:"relative"}},Object(c.b)("div",{ref:e},Object(c.b)(s.a,{nature:"primary",mdxType:"Button"},"TOP")),Object(c.b)(p.a,{isOpen:!0,placement:"top",controllerRef:e,mdxType:"DropdownMenu"},Object(c.b)(a.a,{text:"Hello",mdxType:"DropdownElement"}),Object(c.b)(a.a,{text:"Hol\xe0",mdxType:"DropdownElement"}))),Object(c.b)("div",{style:{position:"relative"}},Object(c.b)("div",{ref:n},Object(c.b)(s.a,{nature:"primary",mdxType:"Button"},"RIGHT")),Object(c.b)(p.a,{isOpen:!0,dockingSide:"right",controllerRef:n,mdxType:"DropdownMenu"},Object(c.b)(a.a,{text:"Good Morning",mdxType:"DropdownElement"}),Object(c.b)(a.a,{text:"Konnichiha",mdxType:"DropdownElement"}),Object(c.b)(a.a,{text:"Guten Tag",mdxType:"DropdownElement"}))))}),Object(c.b)("h2",{id:"position-within-a-container"},"Position within a container"),Object(c.b)("p",null,"Dropdown computes its ideal position within a container:\nif you pass ",Object(c.b)("inlineCode",{parentName:"p"},"top")," as the placement prop but there is not enough space within the container,\nthe menu position will be overwritten to ",Object(c.b)("inlineCode",{parentName:"p"},"bottom"),"."),Object(c.b)(d.c,{__position:3,__code:"() => {\n  const [dropdown1IsOpen, setDropdown1IsOpen] = React.useState(false)\n  const [dropdown2IsOpen, setDropdown2IsOpen] = React.useState(false)\n  const containerRef = React.useRef(null)\n  const button1Ref = React.useRef(null)\n  const button2Ref = React.useRef(null)\n  return (\n    <div\n      ref={containerRef}\n      style={{\n        height: '250px',\n        display: 'flex',\n        background: 'ghostwhite',\n        justifyContent: 'space-between',\n      }}\n    >\n      <div style={{ position: 'relative', height: 'fit-content' }}>\n        <div ref={button1Ref}>\n          <Button\n            nature=\"primary\"\n            onClick={() => setDropdown1IsOpen(!dropdown1IsOpen)}\n          >\n            Click Me\n          </Button>\n        </div>\n        <DropdownMenu\n          isOpen={dropdown1IsOpen}\n          dockingSide=\"left\"\n          placement=\"top\"\n          containerRef={containerRef}\n          controllerRef={button1Ref}\n        >\n          <DropdownElement text=\"Hello\" />\n          <DropdownElement text=\"Hol\xe0\" />\n          <DropdownElement text=\"Salut\" />\n        </DropdownMenu>\n      </div>\n      <div\n        style={{\n          position: 'relative',\n          height: 'fit-content',\n          alignSelf: 'flex-end',\n        }}\n      >\n        <div ref={button2Ref}>\n          <Button\n            nature=\"secondary\"\n            onClick={() => {\n              setDropdown2IsOpen(!dropdown2IsOpen)\n            }}\n          >\n            Click Me\n          </Button>\n        </div>\n        <DropdownMenu\n          elements={[\n            {\n              title: 'Hello',\n              icon: <PhoneIcon />,\n              onClick: () => {},\n            },\n            {\n              title: 'Hol\xe0',\n              onClick: () => {},\n            },\n            {\n              title: 'Bonjour',\n              onClick: () => {},\n            },\n            {\n              title: 'Gutten Tag',\n              onClick: () => {},\n            },\n          ]}\n          isOpen={dropdown2IsOpen}\n          dockingSide=\"left\"\n          placement=\"bottom\"\n          containerRef={containerRef}\n          controllerRef={button2Ref}\n        >\n          <DropdownElement text=\"Hello\" />\n          <DropdownElement text=\"Hol\xe0\" />\n          <DropdownElement text=\"Salut\" />\n        </DropdownMenu>\n      </div>\n    </div>\n  )\n}",__scope:{props:this?this.props:t,Playground:d.c,Props:d.d,DropdownMenu:p.a,DropdownElement:a.a,Button:s.a,PhoneIcon:u.a,QuickActionsMenu:b.a},mdxType:"Playground"},function(){var e=r.a.useState(!1),n=Object(o.a)(e,2),t=n[0],l=n[1],i=r.a.useState(!1),d=Object(o.a)(i,2),b=d[0],m=d[1],f=r.a.useRef(null),w=r.a.useRef(null),O=r.a.useRef(null);return Object(c.b)("div",{ref:f,style:{height:"250px",display:"flex",background:"ghostwhite",justifyContent:"space-between"}},Object(c.b)("div",{style:{position:"relative",height:"fit-content"}},Object(c.b)("div",{ref:w},Object(c.b)(s.a,{nature:"primary",onClick:function(){return l(!t)},mdxType:"Button"},"Click Me")),Object(c.b)(p.a,{isOpen:t,dockingSide:"left",placement:"top",containerRef:f,controllerRef:w,mdxType:"DropdownMenu"},Object(c.b)(a.a,{text:"Hello",mdxType:"DropdownElement"}),Object(c.b)(a.a,{text:"Hol\xe0",mdxType:"DropdownElement"}),Object(c.b)(a.a,{text:"Salut",mdxType:"DropdownElement"}))),Object(c.b)("div",{style:{position:"relative",height:"fit-content",alignSelf:"flex-end"}},Object(c.b)("div",{ref:O},Object(c.b)(s.a,{nature:"secondary",onClick:function(){m(!b)},mdxType:"Button"},"Click Me")),Object(c.b)(p.a,{elements:[{title:"Hello",icon:Object(c.b)(u.a,{mdxType:"PhoneIcon"}),onClick:function(){}},{title:"Hol\xe0",onClick:function(){}},{title:"Bonjour",onClick:function(){}},{title:"Gutten Tag",onClick:function(){}}],isOpen:b,dockingSide:"left",placement:"bottom",containerRef:f,controllerRef:O,mdxType:"DropdownMenu"},Object(c.b)(a.a,{text:"Hello",mdxType:"DropdownElement"}),Object(c.b)(a.a,{text:"Hol\xe0",mdxType:"DropdownElement"}),Object(c.b)(a.a,{text:"Salut",mdxType:"DropdownElement"}))))}))}w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/atoms/dropdownMenu/DropdownMenu.mdx"}}),w.isMDXComponent=!0}}]);
//# sourceMappingURL=src-atoms-dropdown-menu-dropdown-menu.0f3d2aef7fa2d8cbcdfb.js.map