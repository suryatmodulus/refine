"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={id:"custom-layout",title:"Custom Layout"},i=void 0,p={unversionedId:"guides-and-concepts/custom-layout",id:"guides-and-concepts/custom-layout",title:"Custom Layout",description:"You can create custom layouts using ` and ` components.",source:"@site/docs/guides-and-concepts/custom-layout.md",sourceDirName:"guides-and-concepts",slug:"/guides-and-concepts/custom-layout",permalink:"/docs/guides-and-concepts/custom-layout",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/guides-and-concepts/custom-layout.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1657104595,formattedLastUpdatedAt:"Jul 6, 2022",frontMatter:{id:"custom-layout",title:"Custom Layout"},sidebar:"someSidebar",previous:{title:"Auth0 Login",permalink:"/docs/guides-and-concepts/auth/auth0"},next:{title:"Custom Pages",permalink:"/docs/guides-and-concepts/custom-pages"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can create custom layouts using ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,a.kt)("inlineCode",{parentName:"a"},"<Refine>"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/layout-wrapper"},(0,a.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," components."),(0,a.kt)("p",null,"Both of these components can accept the listed props for customization. ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,a.kt)("inlineCode",{parentName:"a"},"<Refine>"))," being for global customization and the ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/layout-wrapper"},(0,a.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," being for local."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#layout"},(0,a.kt)("inlineCode",{parentName:"a"},"Layout"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#sider"},(0,a.kt)("inlineCode",{parentName:"a"},"Sider"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#footer"},(0,a.kt)("inlineCode",{parentName:"a"},"Footer"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#header"},(0,a.kt)("inlineCode",{parentName:"a"},"Header"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#offlayoutarea"},(0,a.kt)("inlineCode",{parentName:"a"},"OffLayoutArea"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/core/components/refine-config#title"},(0,a.kt)("inlineCode",{parentName:"a"},"Title")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/refine-antd"},(0,a.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package. If you are using Refine headless, you need to provide the components, hooks or helpers imported from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/refine-antd"},(0,a.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package.")),(0,a.kt)("p",null,"Let's look at an example of modifying the default layout to have a top menu layout."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/App.tsx"',title:'"/src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport { AntdLayout, ReadyPage, notificationProvider, ErrorComponent } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine-antd/dist/styles.min.css";\n\nimport { PostList } from "pages/posts";\n// highlight-next-line\nimport { CustomSider } from "components";\n\nconst { Link } = routerProvider;\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n// highlight-start\n            Layout={({ children, Footer, OffLayoutArea }) => (\n                <AntdLayout>\n                    <AntdLayout.Header>\n                        <CustomSider />\n                    </AntdLayout.Header>\n                    <AntdLayout.Content>\n                        <AntdLayout.Content>\n                            <div style={{ padding: 24, minHeight: 360 }}>\n                                {children}\n                            </div>\n                        </AntdLayout.Content>\n                        {Footer && <Footer />}\n                    </AntdLayout.Content>\n                    {OffLayoutArea && <OffLayoutArea />}\n                </AntdLayout>\n            )}\n// highlight-end\n            Title={() => (\n                <Link to="/" style={{ float: "left", marginRight: "10px" }}>\n                    <img src="/refine.svg" alt="Refine" />\n                </Link>\n            )}\n            ReadyPage={ReadyPage}\n            notificationProvider={notificationProvider}\n            catchAll={<ErrorComponent />}\n        />\n    );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,"Here, we override the ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config#title"},(0,a.kt)("inlineCode",{parentName:"a"},"<Title>"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config#layout"},(0,a.kt)("inlineCode",{parentName:"a"},"<Layout>"))," components. When we override ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config#layout"},(0,a.kt)("inlineCode",{parentName:"a"},"<Layout>")),", we put the ",(0,a.kt)("inlineCode",{parentName:"p"},"<CustomSider>")," (insted of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config#sider"},(0,a.kt)("inlineCode",{parentName:"a"},"<Sider>"))," that was provided to ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config#layout"},(0,a.kt)("inlineCode",{parentName:"a"},"<Layout>"))," to render it by default) on top of ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/layout/"},(0,a.kt)("inlineCode",{parentName:"a"},"<AntdLayout>")),"."),(0,a.kt)("p",null,"So, we just provided a custom ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config#sider"},(0,a.kt)("inlineCode",{parentName:"a"},"<Sider>")),". Here's our custom sider that looks horizontal, instead of the default vertical one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/components/sider/index.tsx"',title:'"/src/components/sider/index.tsx"'},'import { useTitle, useMenu } from "@pankod/refine-core";\nimport { Menu } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nconst { Link } = routerProvider;\n\nexport const CustomSider: React.FC = () => {\n// highlight-start\n    const Title = useTitle();\n    const { menuItems, selectedKey } = useMenu();\n// highlight-end\n\n    return (\n        <>\n// highlight-start\n            {Title && <Title collapsed={false} />}\n            <Menu selectedKeys={[selectedKey]} mode="horizontal">\n                {menuItems.map(({ icon, route, label }) => (\n                    <Menu.Item key={route} icon={icon}>\n                        <Link to={route ?? ""}>{label}</Link>\n                    </Menu.Item>\n                ))}\n            </Menu>\n// highlight-end\n        </>\n    );\n};\n')),(0,a.kt)("p",null,"Here, we use ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/ui/useMenu"},(0,a.kt)("inlineCode",{parentName:"a"},"useMenu"))," hook to get the list of current resources and print it."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"By default, ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config#sider"},(0,a.kt)("inlineCode",{parentName:"a"},"<Sider>"))," is responsible for rendering ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config#title"},(0,a.kt)("inlineCode",{parentName:"a"},"<Title>")),". It gets this component (configured by ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,a.kt)("inlineCode",{parentName:"a"},"<Refine>"))," and/or ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/layout-wrapper"},(0,a.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")),") by ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/refine/useTitle"},(0,a.kt)("inlineCode",{parentName:"a"},"useTitle"))," hook.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This example demonstrated how to configure a global layout. To learn how to use global layout in custom pages and make local modifications per page, ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/layout-wrapper"},"refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")," docs. ","\u2192"))),(0,a.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,a.kt)("p",null,"Here's how it looks in the end:"),(0,a.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/customization/topMenuLayout?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-top-menu-layout-example"}))}d.isMDXComponent=!0}}]);