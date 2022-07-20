"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63583],{85162:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(67294),r=t(86010);const a="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var o=t(87462),r=t(67294),a=t(86010),i=t(72389),s=t(67392),d=t(7094),p=t(12466);const l="tabList__CuJ",u="tabItem_LNqP";function c(e){var n,t;const{lazy:i,block:c,defaultValue:m,values:f,groupId:g,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),P=null!=f?f:k.map((e=>{let{props:{value:n,label:t,attributes:o}}=e;return{value:n,label:t,attributes:o}})),v=(0,s.l)(P,((e,n)=>e.value===n.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const C=null===m?m:null!=(n=null!=m?m:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==C&&!P.some((e=>e.value===C)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+C+'" but none of its children has the corresponding value. Available values are: '+P.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:b}=(0,d.U)(),[N,x]=(0,r.useState)(C),I=[],{blockElementScrollPositionUntilNextRender:R}=(0,p.o5)();if(null!=g){const e=y[g];null!=e&&e!==N&&P.some((n=>n.value===e))&&x(e)}const L=e=>{const n=e.currentTarget,t=I.indexOf(n),o=P[t].value;o!==N&&(R(n),x(o),null!=g&&b(g,String(o)))},w=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var o;const n=I.indexOf(e.currentTarget)+1;t=null!=(o=I[n])?o:I[0];break}case"ArrowLeft":{var r;const n=I.indexOf(e.currentTarget)-1;t=null!=(r=I[n])?r:I[I.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",l)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},h)},P.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>I.push(e),onKeyDown:w,onFocus:L,onClick:L},i,{className:(0,a.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,i.Z)();return r.createElement(c,(0,o.Z)({key:String(n)},e))}},78363:(e,n,t)=>{t.r(n),t.d(n,{Packages:()=>m,assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var o=t(87462),r=(t(67294),t(3905)),a=t(65488),i=t(85162),s=t(61698);const d={id:"migration-guide",title:"Migration Guide"},p=void 0,l={unversionedId:"migration-guide",id:"migration-guide",title:"Migration Guide",description:"2.0.XX to 3.0.XX",source:"@site/docs/migration-guide.md",sourceDirName:".",slug:"/migration-guide",permalink:"/docs/migration-guide",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/migration-guide.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1645644026,formattedLastUpdatedAt:"2/23/2022",frontMatter:{id:"migration-guide",title:"Migration Guide"},sidebar:"someSidebar",previous:{title:"Sign-In with Ethereum",permalink:"/docs/examples/web3/web3Login"},next:{title:"Testing",permalink:"/docs/testing"}},u={},c=[{value:"2.0.XX to 3.0.XX",id:"20xx-to-30xx",level:2},{value:"Motivation behind breaking changes",id:"motivation-behind-breaking-changes",level:3},{value:"\ud83e\ude84 Migrating your project automatically with refine-codemod \u2728 (recommended)",id:"-migrating-your-project-automatically-with-refine-codemod--recommended",level:2},{value:"Migrating your project manually",id:"migrating-your-project-manually",level:2},{value:"Updating the packages",id:"updating-the-packages",level:3},{value:"Change Import",id:"change-import",level:3},{value:"<code>notificationProvider</code>",id:"notificationprovider",level:3},{value:"<code>Layout</code> and <code>ErrorComponent</code>",id:"layout-and-errorcomponent",level:3},{value:"Default <code>LoginPage</code>",id:"default-loginpage",level:3},{value:"<code>configProviderProps</code> to <code>ConfigProvider</code>",id:"configproviderprops-to-configprovider",level:3},{value:"<code>setEditId</code> to <code>setId</code> &amp; <code>editId</code> to <code>id</code>",id:"seteditid-to-setid--editid-to-id",level:3}],m=()=>{const e=["@pankod/refine-airtable","@pankod/refine-altogic","@pankod/refine-graphql","@pankod/refine-hasura","@pankod/refine-nestjsx-crud","@pankod/refine-nextjs-router","@pankod/refine-react-router","@pankod/refine-simple-rest","@pankod/refine-strapi","@pankod/refine-strapi-v4","@pankod/refine-strapi-graphql","@pankod/refine-supabase","@pankod/refine-appwrite","@pankod/refine-ably"];return(0,r.kt)(a.Z,{defaultValue:"@pankod/refine-airtable",values:e.map((e=>({label:e,value:e}))),mdxType:"Tabs"},e.map((e=>(0,r.kt)(i.Z,{value:e,mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"npm i "+e+"@latest")))))},f={toc:c,Packages:m};function g(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"20xx-to-30xx"},"2.0.XX to 3.0.XX"),(0,r.kt)("h3",{id:"motivation-behind-breaking-changes"},"Motivation behind breaking changes"),(0,r.kt)("p",null,"One of the big requests we received from the Community after we released the first version of ",(0,r.kt)("strong",{parentName:"p"},"refine")," was that ",(0,r.kt)("strong",{parentName:"p"},"refine")," could be used with different UI frameworks other than Ant Design.\nWe are happy to announce that you can use it as ",(0,r.kt)("strong",{parentName:"p"},"refine")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Headless")," on top of these requests. Now ",(0,r.kt)("strong",{parentName:"p"},"refine")," is a framework  and works in harmony with the any UI framework you choose. At the same time, all projects made with Refine@2 are also Refine@3 compatible."),(0,r.kt)("p",null,"With ",(0,r.kt)("strong",{parentName:"p"},"refine")," 3.x.x ",(0,r.kt)("strong",{parentName:"p"},"headless")," version, we have released two new packages named ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-core")," package includes UI independent hooks and components. The ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-antd")," package includes Ant Design components and there are table, form, select, etc hooks and components compatible with ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core"),"."),(0,r.kt)("h2",{id:"-migrating-your-project-automatically-with-refine-codemod--recommended"},"\ud83e\ude84 Migrating your project automatically with refine-codemod \u2728 (recommended)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/codemod"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-codemod"))," package handles the breaking changes for your project automatically, without any manual steps. It migrates your project from ",(0,r.kt)("inlineCode",{parentName:"p"},"2.x.x")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"3.x.x"),"."),(0,r.kt)("p",null,"Just ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into root folder of your project (where ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," is contained) and run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx @pankod/refine-codemod refine2-to-refine3\n")),(0,r.kt)("p",null,"And it's done. Now your project uses ",(0,r.kt)("inlineCode",{parentName:"p"},"refine@3.x.x"),"."),(0,r.kt)("h2",{id:"migrating-your-project-manually"},"Migrating your project manually"),(0,r.kt)("h3",{id:"updating-the-packages"},"Updating the packages"),(0,r.kt)("p",null,"Packages used by your app must be updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"^3.xx.xx")),(0,r.kt)("p",null,"@pankod/refine has been depracate with ",(0,r.kt)("strong",{parentName:"p"},"refine")," 3.x.x version. You must now use ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall @pankod/refine\n\nnpm i @pankod/refine-core @pankod/refine-antd\n")),(0,r.kt)(m,{mdxType:"Packages"}),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure your using packages are version of 3.x.x otherwise you may get errors."))),(0,r.kt)("h3",{id:"change-import"},"Change Import"),(0,r.kt)("p",null,"UI independent import packages have been migrated to the ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-core")," package with version ",(0,r.kt)("strong",{parentName:"p"},"refine")," 3.x.x."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show All Core Imports"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},' [\n    "Authenticated",\n    "AuthenticatedProps",\n    "CanAccess",\n    "CanAccessProps",\n    "Refine",\n    "RefineProps",\n    "LayoutWrapperProps",\n    "LayoutWrapper",\n    "LayoutProps",\n    "DefaultLayout",\n    "RouteChangeHandler",\n    "UndoableQueue",\n    "defaultAccessControlContext",\n    "AccessControlContext",\n    "AccessControlContextProvider",\n    "CanParams",\n    "CanReturnType",\n    "IAccessControlContext",\n    "TLogoutVariables",\n    "TLogoutData",\n    "IAuthContext",\n    "Pagination",\n    "Search",\n    "CrudOperators",\n    "CrudFilter",\n    "CrudSort",\n    "CrudFilters",\n    "CrudSorting",\n    "CustomResponse",\n    "GetListResponse",\n    "CreateResponse",\n    "CreateManyResponse",\n    "UpdateResponse",\n    "UpdateManyResponse",\n    "GetOneResponse",\n    "GetManyResponse",\n    "DeleteOneResponse",\n    "DeleteManyResponse",\n    "IDataContext",\n    "IDataContextProvider",\n    "defaultDataProvider",\n    "DataContext",\n    "DataContextProvider",\n    "ILiveContext",\n    "ILiveContextProvider",\n    "LiveContext",\n    "LiveContextProvider",\n    "defaultNotificationProvider",\n    "NotificationContext",\n    "NotificationContextProvider",\n    "RefineContext",\n    "RefineContextProvider",\n    "ResourceContext",\n    "ResourceContextProvider",\n    "IResourceContext",\n    "OptionsProps",\n    "ResourceProps",\n    "IResourceComponentsProps",\n    "IResourceComponents",\n    "IResourceItem",\n    "RouterContext",\n    "RouterContextProvider",\n    "IRouterProvider",\n    "IRouterContext",\n    "PromptProps",\n    "TranslationContext",\n    "TranslationContextProvider",\n    "Translate",\n    "I18nProvider",\n    "ITranslationContext",\n    "UnsavedWarnContext",\n    "UnsavedWarnContextProvider",\n    "IUnsavedWarnContext",\n    "importCSVMapper",\n    "userFriendlyResourceName",\n    "userFriendlySecond",\n    "parseTableParams",\n    "parseTableParamsFromQuery",\n    "stringifyTableParams",\n    "compareFilters",\n    "unionFilters",\n    "setInitialFilters",\n    "file2Base64",\n    "UseCanProps",\n    "useCan",\n    "useCanWithoutCache",\n    "useAuthenticated",\n    "useCheckError",\n    "useGetIdentity",\n    "useIsAuthenticated",\n    "UseLoginReturnType",\n    "useLogin",\n    "useLogout",\n    "usePermissions",\n    "useIsExistAuthentication",\n    "unionFilters",\n    "useApiUrl",\n    "UseCreateReturnType",\n    "useCreate",\n    "UseCreateManyReturnType",\n    "useCreateMany",\n    "UseCustomProps",\n    "useCustom",\n    "useDelete",\n    "useDeleteMany",\n    "UseListProps",\n    "useList",\n    "UseManyProps",\n    "useMany",\n    "UseOneProps",\n    "useOne",\n    "UseUpdateReturnType",\n    "useUpdate",\n    "useUpdateMany",\n    "CSVDownloadProps",\n    "LabelKeyObject",\n    "useExport",\n    "Authenticated",\n    "CanAccess",\n    "LayoutWrapper",\n    "Refine",\n    "RouteChangeHandler",\n    "UndoableQueue",\n    "file2Base64",\n    "importCSVMapper",\n    "parseTableParams",\n    "parseTableParamsFromQuery",\n    "setInitialFilters",\n    "stringifyTableParams",\n    "unionFilters",\n    "useApiUrl",\n    "useAuthenticated",\n    "useCacheQueries",\n    "useCan",\n    "useCanWithoutCache",\n    "useCancelNotification",\n    "useCheckError",\n    "useCreate",\n    "useCreateMany",\n    "useCustom",\n    "useDelete",\n    "useDeleteMany",\n    "useExport",\n    "useGetIdentity",\n    "useGetLocale",\n    "useGetManyQueries",\n    "useGetOneQueries",\n    "useHandleNotification",\n    "useIsAuthenticated",\n    "useIsExistAuthentication",\n    "useList",\n    "useListResourceQueries",\n    "useLiveMode",\n    "useLogin",\n    "useLogout",\n    "useMany",\n    "useMutationMode",\n    "useNavigation",\n    "useNotification",\n    "useOne",\n    "usePermissions",\n    "usePublish",\n    "useRedirectionAfterSubmission",\n    "useRefineContext",\n    "useResource",\n    "useResourceSubscription",\n    "useResourceWithRoute",\n    "useRouterContext",\n    "useSetLocale",\n    "useShow",\n    "useSubscription",\n    "useSyncWithLocation",\n    "useTitle",\n    "useTranslate",\n    "useUpdate",\n    "useUpdateMany",\n    "useWarnAboutChange",\n    "userFriendlyResourceName",\n    "AuthenticatedProps",\n    "CanAccessProps",\n    "RefineProps",\n    "LayoutWrapperProps",\n    "LiveModeProps",\n    "UseResourceSubscriptionProps",\n    "PublishType",\n    "UseSubscriptionProps",\n    "LiveEvent",\n    "HistoryType",\n    "UseRedirectionAfterSubmissionType",\n    "UseWarnAboutChangeType",\n    "UseMutationModeType",\n    "useRefineContext",\n    "UseSyncWithLocationType",\n    "TitleProps",\n    "UseResourceType",\n    "useResourceWithRoute",\n    "useShowReturnType",\n    "useShowProps",\n    "UseGetLocaleType",\n    "Fields",\n    "NestedField",\n    "QueryBuilderOptions",\n    "MetaDataQuery",\n    "VariableOptions",\n    "HttpError",\n    "BaseRecord",\n    "Option",\n    "MapDataFn",\n    "MutationMode",\n    "IUndoableQueue",\n    "RedirectionTypes",\n    "ResourceErrorRouterParams",\n    "ResourceRouterParams",\n    "SuccessErrorNotification",\n    "OpenNotificationParams",\n    "AuthProvider",\n];\n')))),(0,r.kt)("p",null,"All of the imports defined above must now be imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core"),". UI related imports and other imports are now in ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="App.tsx"',title:'"App.tsx"'},'- import { Refine } from "@pankod/refine";\n+ import { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-json-server";\n\n- import "@pankod/refine/dist/styles.min.css";\n+ import "@pankod/refine-antd/dist/styles.min.css"\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider(API_URL)}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n            ]}\n        />\n    );\n};\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"List Page Example"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="PostList.tsx"',title:'"PostList.tsx"'},'- import {\n-    IResourceComponentsProps, \n-    useMany,\n-    List,\n-    TextField,\n-    TagField,\n-    DateField,\n-    Table,\n-    useTable,\n-    Space,\n-    EditButton,\n-    ShowButton,\n-    FilterDropdown,\n-    Select,\n-    useSelect,\n-    DeleteButton,\n- } from "@pankod/refine"\n\n+ import { IResourceComponentsProps, useMany } from "@pankod/refine-core";\n\n+ import {\n+    List,\n+    TextField,\n+    TagField,\n+    DateField,\n+    Table,\n+    useTable,\n+    Space,\n+    EditButton,\n+    ShowButton,\n+    FilterDropdown,\n+    Select,\n+    useSelect,\n+    DeleteButton,\n+} from "@pankod/refine-antd";\n\nimport { IPost, ICategory } from "interfaces";\n\nexport const PostList: React.FC<IResourceComponentsProps> = () => {\n    const { tableProps } = useTable<IPost>();\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.category.id) ?? [];\n    const { data: categoriesData, isLoading } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "categories",\n    });\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="title" title="title" />\n                <Table.Column\n                    dataIndex="status"\n                    title="status"\n                    render={(value) => <TagField value={value} />}\n                />\n                <Table.Column\n                    dataIndex="createdAt"\n                    title="createdAt"\n                    render={(value) => <DateField format="LLL" value={value} />}\n                />\n                <Table.Column\n                    dataIndex={["category", "id"]}\n                    title="category"\n                    render={(value) => {\n                        if (isLoading) {\n                            return <TextField value="Loading..." />;\n                        }\n\n                        return (\n                            <TextField\n                                value={\n                                    categoriesData?.data.find(\n                                        (item) => item.id === value,\n                                    )?.title\n                                }\n                            />\n                        );\n                    }}\n                    filterDropdown={(props) => (\n                        <FilterDropdown {...props}>\n                            <Select\n                                style={{ minWidth: 200 }}\n                                mode="multiple"\n                                placeholder="Select Category"\n                                {...categorySelectProps}\n                            />\n                        </FilterDropdown>\n                    )}\n                />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, record) => {\n                        return (\n                            <Space>\n                                <EditButton\n                                    hideText\n                                    size="small"\n                                    recordItemId={record.id}\n                                />\n                                <ShowButton\n                                    hideText\n                                    size="small"\n                                    recordItemId={record.id}\n                                />\n                                <DeleteButton\n                                    hideText\n                                    size="small"\n                                    recordItemId={record.id}\n                                />\n                            </Space>\n                        );\n                    }}\n                />\n            </Table>\n        </List>\n    );\n};\n\n')))),(0,r.kt)("h3",{id:"notificationprovider"},(0,r.kt)("inlineCode",{parentName:"h3"},"notificationProvider")),(0,r.kt)("p",null,"With ",(0,r.kt)("strong",{parentName:"p"},"refine")," 3.x.x, you can include and use different notification libraries in your project. The use of ",(0,r.kt)("inlineCode",{parentName:"p"},"notificationProvider")," with Ant Design should be as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\n//highlight-start\nimport {\n    notificationProvider,\n} from "@pankod/refine-antd";\n//highlight-end\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router";\n\nimport "@pankod/refine-antd/dist/styles.min.css";\n\nimport { PostList, PostEdit, PostCreate, PostShow } from "./pages";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider(API_URL)}\n            routerProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                    canDelete: true,\n                },\n            ]}\n            //highlight-start\n            notificationProvider={notificationProvider}\n            //highlight-end\n        />\n    );\n};\n')),(0,r.kt)("h3",{id:"layout-and-errorcomponent"},(0,r.kt)("inlineCode",{parentName:"h3"},"Layout")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"ErrorComponent")),(0,r.kt)("p",null,"If you are using the default ",(0,r.kt)("inlineCode",{parentName:"p"},"layout")," of ",(0,r.kt)("strong",{parentName:"p"},"refine"),", you need to import and define it from the ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-antd")," package as in the example below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, AuthProvider } from "@pankod/refine-core";\nimport {\n    notificationProvider,\n    //highlight-start\n    Layout,\n    ErrorComponent,\n} from "@pankod/refine-antd";\n    //highlight-end \nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router";\n\nimport "@pankod/refine-antd/dist/styles.min.css";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            authProvider={authProvider}\n            dataProvider={dataProvider(API_URL)}\n            routerProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n            ]}\n            notificationProvider={notificationProvider}\n            //highlight-start\n            Layout={Layout}\n            catchAll={<ErrorComponent />}\n            //highlight-end\n        />\n    );\n};\n\n')),(0,r.kt)("h3",{id:"default-loginpage"},"Default ",(0,r.kt)("inlineCode",{parentName:"h3"},"LoginPage")),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("strong",{parentName:"p"},"refine"),"'s default login page while using AuthProvider, you must now import and define ",(0,r.kt)("inlineCode",{parentName:"p"},"LoginPage")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, AuthProvider } from "@pankod/refine-core";\nimport {\n  notificationProvider,\n  //highlight-next-line\n  LoginPage,\n  Layout,\n  ErrorComponent\n  //highlight-next-line\n} from "@pankod/refine-antd";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router";\n\nimport "@pankod/refine-antd/dist/styles.min.css";\n\nimport { PostList, PostEdit, PostShow } from "pages/posts";\nimport { DashboardPage } from "pages/dashboard";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n\n  return (\n    <Refine\n      authProvider={authProvider}\n      dataProvider={dataProvider(API_URL)}\n      routerProvider={routerProvider}\n      DashboardPage={DashboardPage}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n          edit: PostEdit,\n          show: PostShow\n        }\n      ]}\n      notificationProvider={notificationProvider}\n      //highlight-next-line\n      LoginPage={LoginPage}\n      Layout={Layout}\n      catchAll={<ErrorComponent />}\n    />\n  );\n};\n\nexport default App;\n')),(0,r.kt)("h3",{id:"configproviderprops-to-configprovider"},(0,r.kt)("inlineCode",{parentName:"h3"},"configProviderProps")," to ",(0,r.kt)("inlineCode",{parentName:"h3"},"ConfigProvider")),(0,r.kt)("p",null,"configProviderProps has been deprecated. Instead we use ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigProvider")," which is included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-antd")," package. If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigProvider")," you need to wrap ",(0,r.kt)("inlineCode",{parentName:"p"},"Refine")," component as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'import { Refine } from "@pankod/refine-core";\nimport {\n    notificationProvider,\n+   ConfigProvider,\n    Layout,\n    ErrorComponent,\n} from "@pankod/refine-antd";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router";\n\nimport "@pankod/refine-antd/dist/styles.min.css";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n+       <ConfigProvider direction={"rtl"}>\n            <Refine\n                dataProvider={dataProvider(API_URL)}\n                routerProvider={routerProvider}\n-               configProviderProps={{\n-                   direction: "rtl",\n-               }}\n                resources={[\n                    {\n                        name: "posts",\n                        list: PostList,\n                        create: PostCreate,\n                        edit: PostEdit,\n                        show: PostShow,\n                    },\n                ]}\n                notificationProvider={notificationProvider}\n                Layout={Layout}\n                catchAll={<ErrorComponent />}\n            />\n+       </ConfigProvider>\n    );\n};\n')),(0,r.kt)("h3",{id:"seteditid-to-setid--editid-to-id"},(0,r.kt)("inlineCode",{parentName:"h3"},"setEditId")," to ",(0,r.kt)("inlineCode",{parentName:"h3"},"setId")," & ",(0,r.kt)("inlineCode",{parentName:"h3"},"editId")," to ",(0,r.kt)("inlineCode",{parentName:"h3"},"id")),(0,r.kt)("p",null,"Change the use ",(0,r.kt)("inlineCode",{parentName:"p"},"setEditId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"editId")," used in ",(0,r.kt)("inlineCode",{parentName:"p"},"useEditableTable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useModalForm"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"useDrawerForm"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"setEditId")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"setId"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"editId")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"id")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="PostList"',title:'"PostList"'},'import { IResourceComponentsProps } from "@pankod/refine-core";\n\nimport {\n    List,\n    Table,\n    Form,\n    Space,\n    Button,\n    SaveButton,\n    EditButton,\n    Input,\n    TextField,\n    useEditableTable,\n} from "@pankod/refine-antd";\n\nimport { IPost } from "interfaces";\n\nexport const PostList: React.FC<IResourceComponentsProps> = () => {\n    const {\n        tableProps,\n        formProps,\n        isEditing,\n-       setEditId,\n+       setId,\n-       editId,\n+       id \n        saveButtonProps,\n        cancelButtonProps,\n        editButtonProps,\n    } = useEditableTable<IPost>();\n};\n')))}g.isMDXComponent=!0}}]);