"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o=n.p+"assets/images/cardHeaderPropsTitle-5b796ca313e435d0279b259e60cdd2cb.png",i={id:"list",title:"List",sidebar_label:"List"},s=void 0,p={unversionedId:"ui-frameworks/mui/components/basic-views/list",id:"ui-frameworks/mui/components/basic-views/list",title:"List",description:"`` provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles.",source:"@site/docs/ui-frameworks/mui/components/basic-views/list.md",sourceDirName:"ui-frameworks/mui/components/basic-views",slug:"/ui-frameworks/mui/components/basic-views/list",permalink:"/docs/ui-frameworks/mui/components/basic-views/list",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/mui/components/basic-views/list.md",tags:[],version:"current",lastUpdatedBy:"Melih \xd6zkalay",lastUpdatedAt:1654770493,formattedLastUpdatedAt:"6/9/2022",frontMatter:{id:"list",title:"List",sidebar_label:"List"},sidebar:"someSidebar",previous:{title:"Edit",permalink:"/docs/ui-frameworks/mui/components/basic-views/edit"},next:{title:"Show",permalink:"/docs/ui-frameworks/mui/components/basic-views/show"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>canCreate</code> and <code>createButtonProps</code>",id:"cancreate-and-createbuttonprops",level:3},{value:"<code>cardProps</code>",id:"cardprops",level:3},{value:"<code>cardHeaderProps</code>",id:"cardheaderprops",level:3},{value:"<code>cardContentProps</code>",id:"cardcontentprops",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles."),(0,a.kt)("p",null,"We will show what ",(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," does using properties with examples."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cancreate-and-createbuttonprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"canCreate")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"createButtonProps")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"canCreate")," allows us to add the create button inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," component. If resource is passed a create component, ",(0,a.kt)("strong",{parentName:"p"},"refine")," adds the create button by default. If you want to customize this button you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"createButtonProps")," property like the code below."),(0,a.kt)("p",null,"Create button redirects to the create page of the resource according to the value it reads from the URL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { usePermissions } from "@pankod/refine-core";\n// highlight-next-line\nimport { List } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    const { data } = usePermissions<string>();\n\n    return (\n        <List\n            // highlight-start\n            canCreate={data === "admin"}\n            createButtonProps={{ size: "small" }}\n            // highlight-end\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/auth/usePermissions"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"usePermission")," documentation for detailed usage. ","\u2192")),(0,a.kt)("h3",{id:"cardprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"cardProps")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-card/#main-content"},(0,a.kt)("inlineCode",{parentName:"a"},"<Card>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardProps"),"."),(0,a.kt)("h3",{id:"cardheaderprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"cardHeaderProps")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-header/"},(0,a.kt)("inlineCode",{parentName:"a"},"<CardHeader>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardHeaderProps"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/create.tsx"',title:'"src/pages/posts/create.tsx"'},'// highlight-next-line\nimport { List, Typography } from "@pankod/refine-mui";\n\nexport const CreatePage: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            cardHeaderProps={{\n                title: <Typography variant="h5">Custom Title</Typography>,\n            }}\n            // highlight-end\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:o,alt:"Card Header Props Usage"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"cardcontentprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"cardContentProps")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-content/"},(0,a.kt)("inlineCode",{parentName:"a"},"<CardContent>"))," components so you can customize with the props of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardContentProps"),"."),(0,a.kt)("h3",{id:"resource"},(0,a.kt)("inlineCode",{parentName:"h3"},"resource")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," component reads the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. This default behavior will not work on custom pages. If you want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<List>")," component in a custom page, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," prop."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/guides-and-concepts/custom-pages"},"Refer to the custom pages documentation for detailed usage. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport { List } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-start\nconst CustomPage = () => {\n    return <List resource="posts">...</List>;\n};\n// highlight-end\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        element: <CustomPage />,\n                        path: "/custom",\n                    },\n                ],\n                // highlight-end\n            }}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev/")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"canCreate"),(0,a.kt)("td",{parentName:"tr",align:null},"Adds a ",(0,a.kt)("inlineCode",{parentName:"td"},"<CreateButton>")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<SaveButton>")," and depending on your resource configuration (",(0,a.kt)("inlineCode",{parentName:"td"},"canDelete")," prop)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"createButtonProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Adds props for ",(0,a.kt)("inlineCode",{parentName:"td"},"<CreateButton>")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean; onClick: () => void; loading: boolean; }")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<SaveButton>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cardProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Passes the props for ",(0,a.kt)("inlineCode",{parentName:"td"},"<Card>")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/card/#props"},(0,a.kt)("inlineCode",{parentName:"a"},"CardProps"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<SaveButton>")," and depending on your resource configuration (",(0,a.kt)("inlineCode",{parentName:"td"},"canDelete")," prop)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cardHeaderProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Passes the props for ",(0,a.kt)("inlineCode",{parentName:"td"},"<CardHeader>")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/card-header/#props"},(0,a.kt)("inlineCode",{parentName:"a"},"CardHeaderProps"))),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cardContentProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Passes the props for ",(0,a.kt)("inlineCode",{parentName:"td"},"<CardContent>")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/card-content/#props"},(0,a.kt)("inlineCode",{parentName:"a"},"CardContentProps"))),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resource"),(0,a.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from the URL.")))))}u.isMDXComponent=!0}}]);