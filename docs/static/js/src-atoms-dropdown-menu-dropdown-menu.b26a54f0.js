(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/atoms/dropdownMenu/DropdownMenu.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",function(){return f});var t=o("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=o("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=o("./node_modules/react/index.js"),p=o.n(l),i=o("./node_modules/@mdx-js/react/dist/index.es.js"),d=o("./node_modules/docz/dist/index.esm.js"),a=o("./src/atoms/dropdownMenu/DropdownMenu.tsx"),c=o("./src/ions/dropdown/element/DropdownElement.tsx"),s=o("./src/atoms/button/Button.tsx"),u=o("./src/atoms/icons/PhoneIcon.tsx"),b=o("./src/molecules/quick-actions-menu/QuickActionsMenu.tsx"),m={},w="wrapper";function f(e){var n=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)(w,Object.assign({},m,o,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"dropdown-menu"},"Dropdown Menu"),Object(i.b)("p",null,"The Dropdown Menu can be used to display a menu of options that can be hidden."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)(d.d,{of:a.a,mdxType:"Props"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"The dropdown can be defined alongside a controller. To display it correctly:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"both components must be wrapped in a container with an relative or absolute position")),Object(i.b)("li",{parentName:"ul"},"the controller's ref must be passed to the Dropdown")),Object(i.b)(d.c,{__position:1,__code:'() => {\n  const [dropdownIsOpen, setDropdownIsOpen] = React.useState(false)\n  const controllerRef = React.useRef(null)\n  return (\n    <div style={{ position: \'relative\' }}>\n      <div ref={controllerRef}>\n        <Button\n          nature="primary"\n          onClick={() => setDropdownIsOpen(!dropdownIsOpen)}\n        >\n          Click Me\n        </Button>\n      </div>\n      <DropdownMenu\n        isOpen={dropdownIsOpen}\n        dockingSide="left"\n        placement="bottom"\n        controllerRef={controllerRef}\n      >\n        <DropdownElement>Hello</DropdownElement>\n        <DropdownElement>Hol\xe0</DropdownElement>\n        <DropdownElement>Salut</DropdownElement>\n        <DropdownElement>Hallo</DropdownElement>\n      </DropdownMenu>\n    </div>\n  )\n}',__scope:{props:this?this.props:o,Playground:d.c,Props:d.d,DropdownMenu:a.a,DropdownElement:c.a,Button:s.a,PhoneIcon:u.a,QuickActionsMenu:b.a},style:{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-around",height:"200px"},mdxType:"Playground"},function(){var e=p.a.useState(!1),n=Object(t.a)(e,2),o=n[0],r=n[1],l=p.a.useRef(null);return Object(i.b)("div",{style:{position:"relative"}},Object(i.b)("div",{ref:l},Object(i.b)(s.a,{nature:"primary",onClick:function(){return r(!o)},mdxType:"Button"},"Click Me")),Object(i.b)(a.a,{isOpen:o,dockingSide:"left",placement:"bottom",controllerRef:l,mdxType:"DropdownMenu"},Object(i.b)(c.a,{mdxType:"DropdownElement"},"Hello"),Object(i.b)(c.a,{mdxType:"DropdownElement"},"Hol\xe0"),Object(i.b)(c.a,{mdxType:"DropdownElement"},"Salut"),Object(i.b)(c.a,{mdxType:"DropdownElement"},"Hallo")))}),Object(i.b)("p",null,"Dropdown can be defined as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"placed below or above their controllerRef,"),Object(i.b)("li",{parentName:"ul"},"aligned on their controller left or right")),Object(i.b)(d.c,{__position:2,__code:"() => {\n  const [dropdown1IsOpen, setDropdown1IsOpen] = React.useState(false)\n  const [dropdown2IsOpen, setDropdown2IsOpen] = React.useState(false)\n  const controller1Ref = React.useRef(null)\n  const controller2Ref = React.useRef(null)\n  return (\n    <div\n      style={{\n        display: 'flex',\n        justifyContent: 'space-between',\n        alignItems: 'center',\n        width: '100%',\n        height: '100%',\n      }}\n    >\n      <div style={{ position: 'relative' }}>\n        <div ref={controller1Ref}>\n          <Button\n            nature=\"primary\"\n            onClick={() => setDropdown1IsOpen(!dropdown1IsOpen)}\n          >\n            TOP\n          </Button>\n        </div>\n        <DropdownMenu\n          isOpen={dropdown1IsOpen}\n          placement=\"top\"\n          controllerRef={controller1Ref}\n        >\n          <DropdownElement>Hello</DropdownElement>\n          <DropdownElement>Hol\xe0</DropdownElement>\n        </DropdownMenu>\n      </div>\n      <div style={{ position: 'relative' }}>\n        <div ref={controller2Ref}>\n          <Button\n            nature=\"primary\"\n            onClick={() => setDropdown2IsOpen(!dropdown2IsOpen)}\n          >\n            RIGHT\n          </Button>\n        </div>\n        <DropdownMenu\n          isOpen={dropdown2IsOpen}\n          dockingSide=\"right\"\n          controllerRef={controller2Ref}\n        >\n          <DropdownElement>Good Morning</DropdownElement>\n          <DropdownElement>Konnichiha</DropdownElement>\n          <DropdownElement>Guten Tag</DropdownElement>\n        </DropdownMenu>\n      </div>\n    </div>\n  )\n}",__scope:{props:this?this.props:o,Playground:d.c,Props:d.d,DropdownMenu:a.a,DropdownElement:c.a,Button:s.a,PhoneIcon:u.a,QuickActionsMenu:b.a},style:{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-around",height:"200px"},mdxType:"Playground"},function(){var e=p.a.useState(!1),n=Object(t.a)(e,2),o=n[0],r=n[1],l=p.a.useState(!1),d=Object(t.a)(l,2),u=d[0],b=d[1],m=p.a.useRef(null),w=p.a.useRef(null);return Object(i.b)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",height:"100%"}},Object(i.b)("div",{style:{position:"relative"}},Object(i.b)("div",{ref:m},Object(i.b)(s.a,{nature:"primary",onClick:function(){return r(!o)},mdxType:"Button"},"TOP")),Object(i.b)(a.a,{isOpen:o,placement:"top",controllerRef:m,mdxType:"DropdownMenu"},Object(i.b)(c.a,{mdxType:"DropdownElement"},"Hello"),Object(i.b)(c.a,{mdxType:"DropdownElement"},"Hol\xe0"))),Object(i.b)("div",{style:{position:"relative"}},Object(i.b)("div",{ref:w},Object(i.b)(s.a,{nature:"primary",onClick:function(){return b(!u)},mdxType:"Button"},"RIGHT")),Object(i.b)(a.a,{isOpen:u,dockingSide:"right",controllerRef:w,mdxType:"DropdownMenu"},Object(i.b)(c.a,{mdxType:"DropdownElement"},"Good Morning"),Object(i.b)(c.a,{mdxType:"DropdownElement"},"Konnichiha"),Object(i.b)(c.a,{mdxType:"DropdownElement"},"Guten Tag"))))}),Object(i.b)("h2",{id:"position-within-a-container"},"Position within a container"),Object(i.b)("p",null,"Dropdown computes its ideal position within a container:\nif you pass ",Object(i.b)("inlineCode",{parentName:"p"},"top")," as the placement prop but there is not enough space within the container,\nthe menu position will be overwritten to ",Object(i.b)("inlineCode",{parentName:"p"},"bottom"),"."),Object(i.b)(d.c,{__position:3,__code:"() => {\n  const [dropdown1IsOpen, setDropdown1IsOpen] = React.useState(false)\n  const [dropdown2IsOpen, setDropdown2IsOpen] = React.useState(false)\n  const containerRef = React.useRef(null)\n  const button1Ref = React.useRef(null)\n  const button2Ref = React.useRef(null)\n  return (\n    <div\n      ref={containerRef}\n      style={{\n        height: '250px',\n        display: 'flex',\n        background: 'ghostwhite',\n        justifyContent: 'space-between',\n      }}\n    >\n      <div style={{ position: 'relative', height: 'fit-content' }}>\n        <div ref={button1Ref}>\n          <Button\n            nature=\"primary\"\n            onClick={() => setDropdown1IsOpen(!dropdown1IsOpen)}\n          >\n            Click Me\n          </Button>\n        </div>\n        <DropdownMenu\n          isOpen={dropdown1IsOpen}\n          dockingSide=\"left\"\n          placement=\"top\"\n          containerRef={containerRef}\n          controllerRef={button1Ref}\n        >\n          <DropdownElement>Hello</DropdownElement>\n          <DropdownElement>Hol\xe0</DropdownElement>\n          <DropdownElement>Salut</DropdownElement>\n        </DropdownMenu>\n      </div>\n      <div\n        style={{\n          position: 'relative',\n          height: 'fit-content',\n          alignSelf: 'flex-end',\n        }}\n      >\n        <div ref={button2Ref}>\n          <Button\n            nature=\"secondary\"\n            onClick={() => {\n              setDropdown2IsOpen(!dropdown2IsOpen)\n            }}\n          >\n            Click Me\n          </Button>\n        </div>\n        <DropdownMenu\n          isOpen={dropdown2IsOpen}\n          dockingSide=\"left\"\n          placement=\"bottom\"\n          containerRef={containerRef}\n          controllerRef={button2Ref}\n        >\n          <DropdownElement>Hello</DropdownElement>\n          <DropdownElement>Hol\xe0</DropdownElement>\n          <DropdownElement>Salut</DropdownElement>\n        </DropdownMenu>\n      </div>\n    </div>\n  )\n}",__scope:{props:this?this.props:o,Playground:d.c,Props:d.d,DropdownMenu:a.a,DropdownElement:c.a,Button:s.a,PhoneIcon:u.a,QuickActionsMenu:b.a},mdxType:"Playground"},function(){var e=p.a.useState(!1),n=Object(t.a)(e,2),o=n[0],r=n[1],l=p.a.useState(!1),d=Object(t.a)(l,2),u=d[0],b=d[1],m=p.a.useRef(null),w=p.a.useRef(null),f=p.a.useRef(null);return Object(i.b)("div",{ref:m,style:{height:"250px",display:"flex",background:"ghostwhite",justifyContent:"space-between"}},Object(i.b)("div",{style:{position:"relative",height:"fit-content"}},Object(i.b)("div",{ref:w},Object(i.b)(s.a,{nature:"primary",onClick:function(){return r(!o)},mdxType:"Button"},"Click Me")),Object(i.b)(a.a,{isOpen:o,dockingSide:"left",placement:"top",containerRef:m,controllerRef:w,mdxType:"DropdownMenu"},Object(i.b)(c.a,{mdxType:"DropdownElement"},"Hello"),Object(i.b)(c.a,{mdxType:"DropdownElement"},"Hol\xe0"),Object(i.b)(c.a,{mdxType:"DropdownElement"},"Salut"))),Object(i.b)("div",{style:{position:"relative",height:"fit-content",alignSelf:"flex-end"}},Object(i.b)("div",{ref:f},Object(i.b)(s.a,{nature:"secondary",onClick:function(){b(!u)},mdxType:"Button"},"Click Me")),Object(i.b)(a.a,{isOpen:u,dockingSide:"left",placement:"bottom",containerRef:m,controllerRef:f,mdxType:"DropdownMenu"},Object(i.b)(c.a,{mdxType:"DropdownElement"},"Hello"),Object(i.b)(c.a,{mdxType:"DropdownElement"},"Hol\xe0"),Object(i.b)(c.a,{mdxType:"DropdownElement"},"Salut"))))}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/atoms/dropdownMenu/DropdownMenu.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=src-atoms-dropdown-menu-dropdown-menu.4633e1d4d2a3a70a827b.js.map