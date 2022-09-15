"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905)),r=n(97803),i=n(38498);const s={id:"custom-pages",title:"Custom Pages"},p=void 0,l={unversionedId:"guides-and-concepts/custom-pages",id:"version-2.xx.xx/guides-and-concepts/custom-pages",title:"Custom Pages",description:"This document is related to how to create custom pages for react applications. Since Nextjs has a file system based router built on the page concept, you can create your custom pages under the pages folder.",source:"@site/versioned_docs/version-2.xx.xx/guides-and-concepts/custom-pages.md",sourceDirName:"guides-and-concepts",slug:"/guides-and-concepts/custom-pages",permalink:"/docs/2.xx.xx/guides-and-concepts/custom-pages",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/guides-and-concepts/custom-pages.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"Nov 9, 2021",frontMatter:{id:"custom-pages",title:"Custom Pages"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Custom Layout",permalink:"/docs/2.xx.xx/guides-and-concepts/custom-layout"},next:{title:"Theme",permalink:"/docs/2.xx.xx/guides-and-concepts/theme"}},d={},c=[{value:"Public Custom Pages",id:"public-custom-pages",level:2},{value:"Authenticated Custom Pages",id:"authenticated-custom-pages",level:2},{value:"Example",id:"example",level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This document is related to how to create custom pages for ",(0,o.kt)("strong",{parentName:"p"},"react")," applications. Since ",(0,o.kt)("strong",{parentName:"p"},"Nextjs")," has a file system based router built on the page concept, you can create your custom pages under the ",(0,o.kt)("inlineCode",{parentName:"p"},"pages")," folder."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/guides-and-concepts/ssr-nextjs"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Nextjs Guide")," documentation for detailed information. ","\u2192"))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," allows us to add custom pages to our application. To do this, it is necessary to create an object array with ",(0,o.kt)("a",{parentName:"p",href:"https://reactrouter.com/web/api/Route"},"react-router-dom")," ",(0,o.kt)("inlineCode",{parentName:"p"},"<Route>")," properties. Then, pass this array as ",(0,o.kt)("inlineCode",{parentName:"p"},"routes")," property in ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider")," property."),(0,o.kt)("h2",{id:"public-custom-pages"},"Public Custom Pages"),(0,o.kt)("p",null,"Allows creating custom pages that everyone can access via path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\n\n// highlight-next-line\nimport { CustomPage } from "pages/custom-page";\n\nconst App = () => {\n    return (\n        <Refine\n            ...\n// highlight-start\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                     {\n                        exact: true,\n                        component: CustomPage,\n                        path: "/custom-page",\n                    },\n                ],\n            }}\n// highlight-end\n        />\n    );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,"Everyone can access this page via ",(0,o.kt)("inlineCode",{parentName:"p"},"/custom-page")," path."),(0,o.kt)("h2",{id:"authenticated-custom-pages"},"Authenticated Custom Pages"),(0,o.kt)("p",null,"Allows creating custom pages that only authenticated users can access via path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'// highlight-start\nimport { Refine, Authenticated, AuthProvider } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\n// highlight-end\n\n// highlight-next-line\nimport { CustomPage } from "pages/custom-page";\n\n// highlight-start\nconst authProvider: AuthProvider = {\n    login: (params: any) => {\n        if (params.username === "admin") {\n            localStorage.setItem("username", params.username);\n            return Promise.resolve();\n        }\n\n        return Promise.reject();\n    },\n    logout: () => {\n        localStorage.removeItem("username");\n        return Promise.resolve();\n    },\n    checkError: () => Promise.resolve(),\n    checkAuth: () =>\n        localStorage.getItem("username") ? Promise.resolve() : Promise.reject(),\n    getPermissions: () => Promise.resolve(["admin"]),\n};\n// highlight-end\n\n// highlight-start\nconst AuthenticatedCustomPage = () => {\n    return (\n        <Authenticated>\n            <CustomPage />\n        </Authenticated>\n    );\n};\n// highlight-end\n\nconst App = () => {\n    return (\n        <Refine\n            ...\n// highlight-start\n            authProvider={authProvider}\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                     {\n                        exact: true,\n                        component: AuthenticatedCustomPage,\n                        path: "/custom-page",\n                    },\n                ],\n            }}\n// highlight-end\n        />\n    );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,"Only authenticated users can access this page via ",(0,o.kt)("inlineCode",{parentName:"p"},"/custom-page")," path."),(0,o.kt)("admonition",{title:"attention",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"For authenticated custom page, your application needs an ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/providers/auth-provider"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"authProvider")," for more detailed information. ","\u2192"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"By default, custom pages don't have any layout. If you want to show your custom page in a layout, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"<LayoutWrapper>")," component."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/components/layout-wrapper"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")," for more detailed information. ","\u2192"))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,'Let\'s make a custom page for posts. On this page, the editor can approve or reject the posts with the "draft" status.'),(0,o.kt)("p",null,"Before starting the example, let's assume that our ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/providers/data-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"dataProvider"))," has an endpoint that returns posts as following."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/posts"',title:'"https://api.fake-rest.refine.dev/posts"'},'{\n    [\n        {\n            id: 1,\n            title: "Dolorem suscipit assumenda laborum id facilis maiores.",\n            content:\n                "Non et asperiores dolores. Vero quas natus sed ut iste omnis sequi. Enim veniam soluta vel. Est soluta suscipit velit architecto et. Tenetur ea impedit alias rerum in tenetur. Aut tempore consequatur ipsa neque aspernatur sit. Ut ea aspernatur aut voluptatem. Nulla quos laboriosam molestiae impedit eius. Dicta est maxime fuga debitis. Dicta necessitatibus odit quis qui animi.",\n            category: {\n                id: 32,\n            },\n            status: "draft",\n        },\n        {\n            id: 2,\n            title: "Voluptatibus laboriosam dignissimos non.",\n            content:\n                "Dolor cumque blanditiis aspernatur earum quo autem voluptatem vel consequuntur. Consequatur et sed dolores rerum ipsam aut et sed. Nostrum provident voluptas facere distinctio voluptates in et. Magni asperiores quod unde tempore veritatis beatae qui cum officia. Omnis quia cumque et qui. Quis et explicabo et similique voluptatum. Culpa assumenda autem laborum impedit perspiciatis ducimus perferendis. Quo doloribus magnam perferendis doloremque voluptas libero autem. Nihil enim aliquam molestias aspernatur impedit. Ad eius qui sit et.",\n            category: {\n                id: 22,\n            },\n            status: "draft",\n        },\n        // ...\n    ];\n}\n')),(0,o.kt)("p",null,"First, we will create the post's CRUD pages and bootstrap the app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router";\nimport "@pankod/refine/dist/styles.min.css";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n            ]}\n        />\n    );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,"Now, let's create the custom page with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"<PostReview>"),". We will use the properties of ",(0,o.kt)("inlineCode",{parentName:"p"},"useList"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"filter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pagination"),' to fetch a post with "draft" status.'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/data/useList"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"useList")," documentation for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/post-review.tsx"',title:'"src/pages/post-review.tsx"'},'import { useList } from "@pankod/refine";\n\nconst PostReview = () => {\n    const { data, isLoading } = useList<IPost>({\n        resource: "posts",\n        config: {\n            filters: [\n                {\n                    field: "status",\n                    operator: "eq",\n                    value: "draft",\n                },\n            ],\n            pagination: { pageSize: 1 },\n        },\n    });\n};\n\ninterface ICategory {\n    id: string;\n    title: string;\n}\n\ninterface IPost {\n    id: string;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n    category: ICategory;\n}\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"We set the filtering process with ",(0,o.kt)("inlineCode",{parentName:"p"},"filters")," then page size set with ",(0,o.kt)("inlineCode",{parentName:"p"},"pagination")," to return only one post."),(0,o.kt)("p",null,"Post's category is relational. So we will use the post's category \"id\" to get the category title. Let's use ",(0,o.kt)("inlineCode",{parentName:"p"},"useOne")," to fetch the category we want."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/post-review.tsx"',title:'"src/pages/post-review.tsx"'},'// highlight-next-line\nimport { useList, useOne } from "@pankod/refine";\n\nexport const PostReview = () => {\n    const { data, isLoading } = useList<IPost>({\n        resource: "posts",\n        config: {\n            filters: [\n                {\n                    field: "status",\n                    operator: "eq",\n                    value: "draft",\n                },\n            ],\n            pagination: { pageSize: 1 },\n        },\n    });\n\n// highlight-start\n    const post = data?.data[0];\n\n    const { data: categoryData, isLoading: categoryIsLoading } =\n        useOne<ICategory>({\n            resource: "categories",\n            id: post!.category.id,\n            queryOptions: {\n                enabled: !!post,\n            },\n        });\n};\n// highlight-end\n')),(0,o.kt)("p",null,"Now we have the data to display the post as we want. Let's use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Show>")," component of refine to show this data."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"<Show>")," component is not required, you are free to display the data as you wish.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/post-review.tsx"',title:'"src/pages/post-review.tsx"'},'import {\n// highlight-start\n    Typography,\n    Show,\n    MarkdownField,\n// highlight-end\n    useOne,\n    useList,\n} from "@pankod/refine";\n\n// highlight-next-line\nconst { Title, Text } = Typography;\n\nexport const PostReview = () => {\n    const { data, isLoading } = useList<IPost>({\n        resource: "posts",\n        config: {\n            filters: [\n                {\n                    field: "status",\n                    operator: "eq",\n                    value: "draft",\n                },\n            ],\n            pagination: { pageSize: 1 },\n        },\n    });\n    const record = data?.data[0];\n\n    const { data: categoryData, isLoading: categoryIsLoading } =\n        useOne<ICategory>({\n            resource: "categories",\n            id: record!.category.id,\n            queryOptions: {\n                enabled: !!record,\n            },\n        });\n\n    return (\n// highlight-start\n        <Show\n            title="Review Posts"\n            resource="posts"\n            recordItemId={record?.id}\n            isLoading={isLoading || categoryIsLoading}\n            pageHeaderProps={{\n                backIcon: false,\n            }}\n        >\n            <Title level={5}>Status</Title>\n            <Text>{record?.status}</Text>\n            <Title level={5}>Title</Title>\n            <Text>{record?.title}</Text>\n            <Title level={5}>Category</Title>\n            <Text>{categoryData?.data.title}</Text>\n            <Title level={5}>Content</Title>\n            <MarkdownField value={record?.content} />\n        </Show>\n// highlight-end\n    );\n};\n')),(0,o.kt)("p",null,"Then, pass this ",(0,o.kt)("inlineCode",{parentName:"p"},"<PostReview>")," as the routes property in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport "@pankod/refine/dist/styles.min.css";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\n// highlight-next-line\nimport { PostReview } from "pages/post-review";\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n// highlight-start\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                    {\n                        exact: true,\n                        component: PostReview,\n                        path: "/post-review",\n                    },\n                ],\n            }}\n// highlight-end\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n            ]}\n        />\n    );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,"Now our page looks like this:"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:r.Z,alt:"A custom page"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Now let's put in approve and reject buttons to change the status of the post shown on the page. When these buttons are clicked, we will change the status of the post using ",(0,o.kt)("inlineCode",{parentName:"p"},"useUpdate"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/data/useUpdate"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"useUpdate")," documentation for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/post-review.tsx"',title:'"src/pages/post-review.tsx"'},'import {\n    Typography,\n    Show,\n    MarkdownField,\n// highlight-start\n    Space,\n    Button,\n    useUpdate,\n// highlight-end\n    useOne,\n    useList,\n} from "@pankod/refine";\n\nconst { Title, Text } = Typography;\n\nexport const PostReview = () => {\n    const { data, isLoading } = useList<IPost>({\n        resource: "posts",\n        config: {\n            filters: [\n                {\n                    field: "status",\n                    operator: "eq",\n                    value: "draft",\n                },\n            ],\n            pagination: { pageSize: 1 },\n        },\n    });\n    const record = data?.data[0];\n\n    const { data: categoryData, isLoading: categoryIsLoading } =\n        useOne<ICategory>({\n            resource: "categories",\n            id: record!.category.id,\n            queryOptions: {\n                enabled: !!record,\n            },\n        });\n\n// highlight-next-line\n    const mutationResult = useUpdate<IPost>();\n\n// highlight-next-line\n    const { mutate, isLoading: mutateIsLoading } = mutationResult;\n\n// highlight-start\n    const handleUpdate = (item: IPost, status: string) => {\n        mutate({ resource: "posts", id: item.id, values: { ...item, status } });\n    };\n// highlight-end\n\n    const buttonDisabled = isLoading || categoryIsLoading || mutateIsLoading;\n\n    return (\n        <Show\n            title="Review Posts"\n            resource="posts"\n            recordItemId={record?.id}\n            isLoading={isLoading || categoryIsLoading}\n            pageHeaderProps={{\n                backIcon: false,\n            }}\n// highlight-start\n            actionButtons={\n                <Space\n                    key="action-buttons"\n                    style={{ float: "right", marginRight: 24 }}\n                >\n                    <Button\n                        danger\n                        disabled={buttonDisabled}\n                        onClick={() =>\n                            record && handleUpdate(record, "rejected")\n                        }\n                    >\n                        Reject\n                    </Button>\n                    <Button\n                        type="primary"\n                        disabled={buttonDisabled}\n                        onClick={() =>\n                            record && handleUpdate(record, "published")\n                        }\n                    >\n                        Approve\n                    </Button>\n                </Space>\n            }\n       // highlight-end\n>\n            <Title level={5}>Status</Title>\n            <Text>{record?.status}</Text>\n            <Title level={5}>Title</Title>\n            <Text>{record?.title}</Text>\n            <Title level={5}>Category</Title>\n            <Text>{categoryData?.data.title}</Text>\n            <Title level={5}>Content</Title>\n            <MarkdownField value={record?.content} />\n        </Show>\n    );\n};\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i.Z,alt:"A custom page in action"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/custom-pages-example-1o1by?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"custom-pages-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}m.isMDXComponent=!0},97803:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/basic-d333c01b345dbc03f6ceed048ab0e1c4.png"},38498:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gif-246e0b19adc4e2fbb0503578713a8bc1.gif"}}]);