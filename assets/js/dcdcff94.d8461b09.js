"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),i=n(70771);const o={id:"table-search",title:"Table Search"},l=void 0,s={unversionedId:"advanced-tutorials/search/table-search",id:"advanced-tutorials/search/table-search",title:"Table Search",description:"We can make extensive search / filter operations using the useTable hook on the listing pages.",source:"@site/docs/advanced-tutorials/search/table-search.md",sourceDirName:"advanced-tutorials/search",slug:"/advanced-tutorials/search/table-search",permalink:"/docs/advanced-tutorials/search/table-search",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/advanced-tutorials/search/table-search.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1663689776,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{id:"table-search",title:"Table Search"},sidebar:"someSidebar",previous:{title:"Search",permalink:"/docs/advanced-tutorials/search/"},next:{title:"Remix",permalink:"/docs/advanced-tutorials/ssr/remix"}},c={},p=[{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We can make extensive search / filter operations using the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook on the listing pages."),(0,a.kt)("p",null,"First, we create a form by extracting ",(0,a.kt)("inlineCode",{parentName:"p"},"searchFormProps")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable"),". We will use this form for search / filtering."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/list.tsx"',title:'"pages/list.tsx"'},'import {\n// highlight-start\n    Form,\n    Table,\n    useTable,\n// highlight-end\n    Row,\n    Col,\n    Icons,\n    List,\n    Button,\n    DatePicker,\n    Space,\n    Input,\n} from "@pankod/refine-antd";\n\nconst { RangePicker } = DatePicker;\n\nexport const ListPage: React.FC = () => {\n// highlight-next-line\n    const { searchFormProps } = useTable<IPost>();\n\n    return (\n// highlight-start\n        <Row gutter={[16, 16]}>\n            <Col lg={6} xs={24}>\n                <Form layout="vertical" {...searchFormProps}>\n                    <Form.Item label="Search" name="q">\n                        <Input\n                            placeholder="ID, Title, Content, etc."\n                            prefix={<Icons.SearchOutlined />}\n                        />\n                    </Form.Item>\n                    <Form.Item label="Created At" name="createdAt">\n                        <RangePicker />\n                    </Form.Item>\n                    <Form.Item>\n                        <Button htmlType="submit" type="primary">\n                            Filter\n                        </Button>\n                    </Form.Item>\n                </Form>\n            </Col>\n            <Col lg={18} xs={24}>\n                <List>\n                    <Table>...</Table>\n                </List>\n            </Col>\n        </Row>\n// highlight-end\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n    createdAt: string;\n}\n')),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:i.Z})),(0,a.kt)("br",null),(0,a.kt)("p",null,"When the form is submitted, the ",(0,a.kt)("inlineCode",{parentName:"p"},"onSearch")," method runs and we get the search form values. We have to return an object of type ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences#crudfilters"},(0,a.kt)("inlineCode",{parentName:"a"},"CrudFilters"))," for this method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/list.tsx"',title:'"pages/list.tsx"'},'...\nimport { HttpError } from "@pankod/refine-core";\nimport { Dayjs } from "dayjs";\n\nconst { searchFormProps } = useTable<IPost, HttpError, { title: string; createdAt: [Dayjs, Dayjs] }>({\n    onSearch: (params) => {\n        const filters: CrudFilters = [];\n        const { q, createdAt } = params;\n\n            filters.push(\n                {\n                    field: "q",\n                    operator: "eq",\n                    value: q,\n                },\n                {\n                    field: "createdAt",\n                    operator: "gte",\n                    value: createdAt ? createdAt[0].toISOString() : undefined,\n                },\n                {\n                    field: "createdAt",\n                    operator: "lte",\n                    value: createdAt ? createdAt[1].toISOString() : undefined,\n                },\n            );\n\n        return filters;\n    },\n});\n...\n')),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"CrudFilters")," types object has ",(0,a.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"operator")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," properties. These properties help us to filter in which field, with which operator, and with which data.")),(0,a.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,a.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/table/tableFilter?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-table-filter-example"}))}m.isMDXComponent=!0},70771:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/form-3abfa22cf27b801fd3b54c45c55e83a9.png"}}]);