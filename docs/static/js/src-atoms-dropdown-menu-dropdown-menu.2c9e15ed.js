(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/atoms/dropdownMenu/DropdownMenu.mdx":function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return b});var o=t("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=t("./node_modules/react/index.js"),l=t.n(i),c=t("./node_modules/@mdx-js/react/dist/index.es.js"),r=t("./node_modules/docz/dist/index.esm.js"),u=t("./src/atoms/dropdownMenu/DropdownMenu.tsx"),a=t("./src/atoms/button/Button.tsx"),s=t("./src/atoms/icons/PhoneIcon.tsx"),p=t("./src/molecules/quick-actions-menu/QuickActionsMenu.tsx"),d={},m="wrapper";function b(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(c.b)(m,Object.assign({},d,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"dropdown-menu"},"Dropdown Menu"),Object(c.b)(r.c,{__position:0,__code:"<DropdownMenu\n  elements={[\n    {\n      title: 'Hello',\n      icon: <PhoneIcon />,\n      onClick: () => {},\n    },\n    {\n      title: 'Hol\xe0',\n      onClick: () => {},\n    },\n    {\n      title: 'Bonjour',\n      onClick: () => {},\n    },\n    {\n      title: 'Gutten Tag',\n      onClick: () => {},\n    },\n  ]}\n>\n  <Button nature=\"primary\"> Click Me </Button>\n</DropdownMenu>\n<DropdownMenu\n  menuMaxHeight={150}\n  elements={[\n    {\n      title: 'Hello',\n      onClick: () => {},\n    },\n    {\n      title: 'Hol\xe0',\n      onClick: () => {},\n    },\n    {\n      title: 'Bonjour',\n      onClick: () => {},\n    },\n    {\n      title: 'Gutten Tag',\n      onClick: () => {},\n    },\n    {\n      title: 'Ciao',\n      onClick: () => {},\n    },\n    {\n      title: 'Konnichiha',\n      onClick: () => {},\n    },\n    {\n      title: 'Ni Hao',\n      onClick: () => {},\n    },\n    {\n      title: 'Dobry Degn',\n      onClick: () => {},\n    },\n  ]}\n>\n  <Button nature=\"primary\"> With long list </Button>\n</DropdownMenu>\n<DropdownMenu\n  elements={[\n    {\n      title: 'Hello',\n      onClick: () => {},\n    },\n    {\n      title: 'Hol\xe0',\n      onClick: () => {},\n    },\n  ]}\n  dockingSide=\"right\"\n>\n  <Button nature=\"primary\"> On the right </Button>\n</DropdownMenu>\n<div style={{ alignSelf: 'flex-end' }}>\n  <DropdownMenu\n    elements={[\n      {\n        title: 'Hello',\n        onClick: () => {},\n      },\n      {\n        title: 'Hol\xe0',\n        onClick: () => {},\n      },\n    ]}\n    placement=\"top\"\n  >\n    <Button nature=\"primary\"> On the top </Button>\n  </DropdownMenu>\n</div>",__scope:{props:this?this.props:t,Playground:r.c,Props:r.d,DropdownMenu:u.a,Button:a.a,PhoneIcon:s.a,QuickActionsMenu:p.a},style:{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-around",height:"200px"},mdxType:"Playground"},Object(c.b)(u.a,{elements:[{title:"Hello",icon:Object(c.b)(s.a,{mdxType:"PhoneIcon"}),onClick:function(){}},{title:"Hol\xe0",onClick:function(){}},{title:"Bonjour",onClick:function(){}},{title:"Gutten Tag",onClick:function(){}}],mdxType:"DropdownMenu"},Object(c.b)(a.a,{nature:"primary",mdxType:"Button"}," Click Me ")),Object(c.b)(u.a,{menuMaxHeight:150,elements:[{title:"Hello",onClick:function(){}},{title:"Hol\xe0",onClick:function(){}},{title:"Bonjour",onClick:function(){}},{title:"Gutten Tag",onClick:function(){}},{title:"Ciao",onClick:function(){}},{title:"Konnichiha",onClick:function(){}},{title:"Ni Hao",onClick:function(){}},{title:"Dobry Degn",onClick:function(){}}],mdxType:"DropdownMenu"},Object(c.b)(a.a,{nature:"primary",mdxType:"Button"}," With long list ")),Object(c.b)(u.a,{elements:[{title:"Hello",onClick:function(){}},{title:"Hol\xe0",onClick:function(){}}],dockingSide:"right",mdxType:"DropdownMenu"},Object(c.b)(a.a,{nature:"primary",mdxType:"Button"}," On the right ")),Object(c.b)("div",{style:{alignSelf:"flex-end"}},Object(c.b)(u.a,{elements:[{title:"Hello",onClick:function(){}},{title:"Hol\xe0",onClick:function(){}}],placement:"top",mdxType:"DropdownMenu"},Object(c.b)(a.a,{nature:"primary",mdxType:"Button"}," On the top ")))),Object(c.b)("h2",{id:"position-within-a-container"},"Position within a container"),Object(c.b)(r.c,{__position:1,__code:"() => {\n  const containerRef = React.useRef()\n  return (\n    <div\n      ref={containerRef}\n      style={{ height: '250px', display: 'flex', background: 'ghostwhite' }}\n    >\n      <DropdownMenu\n        elements={[\n          {\n            title: 'Hello',\n            onClick: () => {},\n          },\n          {\n            title: 'Hol\xe0',\n            onClick: () => {},\n          },\n        ]}\n        placement=\"top\"\n        containerRef={containerRef}\n      >\n        <Button nature=\"primary\">This is too long!</Button>\n      </DropdownMenu>\n      <div style={{ alignSelf: 'flex-end' }}>\n        <DropdownMenu\n          elements={[\n            {\n              title: 'Hello',\n              onClick: () => {},\n            },\n            {\n              title: 'Hol\xe0',\n              onClick: () => {},\n            },\n          ]}\n          placement=\"bottom\"\n          containerRef={containerRef}\n        >\n          <Button nature=\"primary\">This is too long!</Button>\n        </DropdownMenu>\n      </div>\n    </div>\n  )\n}",__scope:{props:this?this.props:t,Playground:r.c,Props:r.d,DropdownMenu:u.a,Button:a.a,PhoneIcon:s.a,QuickActionsMenu:p.a},mdxType:"Playground"},function(){var n=l.a.useRef();return Object(c.b)("div",{ref:n,style:{height:"250px",display:"flex",background:"ghostwhite"}},Object(c.b)(u.a,{elements:[{title:"Hello",onClick:function(){}},{title:"Hol\xe0",onClick:function(){}}],placement:"top",containerRef:n,mdxType:"DropdownMenu"},Object(c.b)(a.a,{nature:"primary",mdxType:"Button"},"This is too long!")),Object(c.b)("div",{style:{alignSelf:"flex-end"}},Object(c.b)(u.a,{elements:[{title:"Hello",onClick:function(){}},{title:"Hol\xe0",onClick:function(){}}],placement:"bottom",containerRef:n,mdxType:"DropdownMenu"},Object(c.b)(a.a,{nature:"primary",mdxType:"Button"},"This is too long!"))))}))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/atoms/dropdownMenu/DropdownMenu.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=src-atoms-dropdown-menu-dropdown-menu.e6d92191d87a84d8b274.js.map