"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={id:"useModalForm",title:"useModalForm"},l=void 0,i={unversionedId:"api-reference/mantine/hooks/form/useModalForm",id:"api-reference/mantine/hooks/form/useModalForm",title:"useModalForm",description:"useModalForm hook also allows you to manage a form inside a modal component. It provides some useful methods to handle the form modal.",source:"@site/docs/api-reference/mantine/hooks/form/useModalForm.md",sourceDirName:"api-reference/mantine/hooks/form",slug:"/api-reference/mantine/hooks/form/useModalForm",permalink:"/docs/api-reference/mantine/hooks/form/useModalForm",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-reference/mantine/hooks/form/useModalForm.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1664544490,formattedLastUpdatedAt:"Sep 30, 2022",frontMatter:{id:"useModalForm",title:"useModalForm"},sidebar:"someSidebar",previous:{title:"useForm",permalink:"/docs/api-reference/mantine/hooks/form/useForm"},next:{title:"useStepsForm",permalink:"/docs/api-reference/mantine/hooks/form/useStepsForm"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Create Modal",id:"create-modal",level:3},{value:"Edit Modal",id:"edit-modal",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return values",id:"return-values",level:3},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useModalForm")," hook also allows you to manage a form inside a modal component. It provides some useful methods to handle the form modal."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useModalForm")," hook based on ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mantine/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," hook provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mantine"),".")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"We'll show two examples, one for creating and one for editing a post. Let's see how ",(0,r.kt)("inlineCode",{parentName:"p"},"useModalForm")," is used in both."),(0,r.kt)("h3",{id:"create-modal"},"Create Modal"),(0,r.kt)("p",null,"First, we'll create a list page for posts. We'll use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-table"},(0,r.kt)("inlineCode",{parentName:"a"},"useTable"))," hook to manage the table and the ",(0,r.kt)("inlineCode",{parentName:"p"},"useModalForm")," hook to manage the form."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import React from "react";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\nimport {\n    List,\n    ScrollArea,\n    Table,\n    Pagination,\n    // highlight-next-line\n    useModalForm,\n} from "@pankod/refine-mantine";\n\n// highlight-next-line\nimport { CreatePostModal } from "../../components";\nimport { IPost } from "../../interfaces";\n\nexport const PostList: React.FC = () => {\n    // highlight-start\n    const createModalForm = useModalForm({\n        refineCoreProps: { action: "create" },\n        initialValues: {\n            title: "",\n            status: "",\n            category: {\n                id: "",\n            },\n            content: "",\n        },\n        validate: {\n            title: (value) => (value.length < 2 ? "Too short title" : null),\n            status: (value) =>\n                value.length <= 0 ? "Status is required" : null,\n            category: {\n                id: (value) =>\n                    value.length <= 0 ? "Category is required" : null,\n            },\n            content: (value) =>\n                value.length < 10 ? "Too short content" : null,\n        },\n    });\n    const {\n        modal: { show: showCreateModal },\n    } = createModalForm;\n    // highlight-end\n\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "status",\n                header: "Status",\n                accessorKey: "status",\n            },\n        ],\n        [],\n    );\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        refineCore: { setCurrent, pageCount, current },\n    } = useTable({\n        columns,\n    });\n\n    return (\n        <>\n            // highlight-next-line\n            <CreatePostModal {...createModalForm} />\n            <ScrollArea>\n                // highlight-next-line\n                <List createButtonProps={{ onClick: () => showCreateModal() }}>\n                    <Table highlightOnHover>\n                        <thead>\n                            {getHeaderGroups().map((headerGroup) => (\n                                <tr key={headerGroup.id}>\n                                    {headerGroup.headers.map((header) => {\n                                        return (\n                                            <th key={header.id}>\n                                                {!header.isPlaceholder && (\n                                                    <div>\n                                                        {flexRender(\n                                                            header.column\n                                                                .columnDef\n                                                                .header,\n                                                            header.getContext(),\n                                                        )}\n                                                    </div>\n                                                )}\n                                            </th>\n                                        );\n                                    })}\n                                </tr>\n                            ))}\n                        </thead>\n                        <tbody>\n                            {getRowModel().rows.map((row) => {\n                                return (\n                                    <tr key={row.id}>\n                                        {row.getVisibleCells().map((cell) => {\n                                            return (\n                                                <td key={cell.id}>\n                                                    {flexRender(\n                                                        cell.column.columnDef\n                                                            .cell,\n                                                        cell.getContext(),\n                                                    )}\n                                                </td>\n                                            );\n                                        })}\n                                    </tr>\n                                );\n                            })}\n                        </tbody>\n                    </Table>\n                    <br />\n                    <Pagination\n                        position="right"\n                        total={pageCount}\n                        page={current}\n                        onChange={setCurrent}\n                    />\n                </List>\n            </ScrollArea>\n        </>\n    );\n};\n\nexport interface IPost {\n    id: number;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n    category: { id: number };\n}\n')),(0,r.kt)("p",null,"Now, let's see how the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreatePostModal")," component is implemented."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/createPostModal.tsx"',title:'"src/components/createPostModal.tsx"'},'import { BaseRecord, HttpError } from "@pankod/refine-core";\nimport {\n    UseModalFormReturnType,\n    Modal,\n    TextInput,\n    RichTextEditor,\n    Select,\n    useSelect,\n    Box,\n    SaveButton,\n    Text,\n} from "@pankod/refine-mantine";\n\ninterface FormValues {\n    title: string;\n    content: string;\n    status: string;\n    category: { id: string };\n}\n\nexport const CreatePostModal: React.FC<\n    UseModalFormReturnType<BaseRecord, HttpError, FormValues>\n> = ({\n    getInputProps,\n    errors,\n    modal: { visible, close, title },\n    saveButtonProps,\n}) => {\n    const { selectProps } = useSelect({\n        resource: "categories",\n    });\n\n    return (\n        <Modal opened={visible} onClose={close} title={title}>\n            <TextInput\n                mt={8}\n                label="Title"\n                placeholder="Title"\n                {...getInputProps("title")}\n            />\n            <Select\n                mt={8}\n                label="Status"\n                placeholder="Pick one"\n                {...getInputProps("status")}\n                data={[\n                    { label: "Published", value: "published" },\n                    { label: "Draft", value: "draft" },\n                    { label: "Rejected", value: "rejected" },\n                ]}\n            />\n            <Select\n                mt={8}\n                label="Category"\n                placeholder="Pick one"\n                {...getInputProps("category.id")}\n                {...selectProps}\n            />\n            <Text mt={8} weight={500} size="sm" color="#212529">\n                Content\n            </Text>\n            <RichTextEditor\n                sx={{ minHeight: 300 }}\n                {...getInputProps("content")}\n            />\n            {errors.content && (\n                <Text mt={2} weight={500} size="xs" color="red">\n                    {errors.content}\n                </Text>\n            )}\n            <Box mt={8} sx={{ display: "flex", justifyContent: "flex-end" }}>\n                <SaveButton {...saveButtonProps} />\n            </Box>\n        </Modal>\n    );\n};\n')),(0,r.kt)("h3",{id:"edit-modal"},"Edit Modal"),(0,r.kt)("p",null,"Now, let's add the edit modal to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PostList")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import React from "react";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\nimport {\n    List,\n    ScrollArea,\n    Table,\n    Pagination,\n    // highlight-next-line\n    EditButton,\n    useModalForm,\n} from "@pankod/refine-mantine";\n\n// highlight-next-line\nimport { CreatePostModal, EditPostModal } from "../../components";\nimport { IPost } from "../../interfaces";\n\nexport const PostList: React.FC = () => {\n    const createModalForm = useModalForm({\n        refineCoreProps: { action: "create" },\n        initialValues: {\n            title: "",\n            status: "",\n            category: {\n                id: "",\n            },\n            content: "",\n        },\n        validate: {\n            title: (value) => (value.length < 2 ? "Too short title" : null),\n            status: (value) =>\n                value.length <= 0 ? "Status is required" : null,\n            category: {\n                id: (value) =>\n                    value.length <= 0 ? "Category is required" : null,\n            },\n            content: (value) =>\n                value.length < 10 ? "Too short content" : null,\n        },\n    });\n    const {\n        modal: { show: showCreateModal },\n    } = createModalForm;\n\n    // highlight-start\n    const editModalForm = useModalForm({\n        refineCoreProps: { action: "edit" },\n        initialValues: {\n            title: "",\n            status: "",\n            category: {\n                id: "",\n            },\n            content: "",\n        },\n        validate: {\n            title: (value) => (value.length < 2 ? "Too short title" : null),\n            status: (value) =>\n                value.length <= 0 ? "Status is required" : null,\n            category: {\n                id: (value) =>\n                    value.length <= 0 ? "Category is required" : null,\n            },\n            content: (value) =>\n                value.length < 10 ? "Too short content" : null,\n        },\n    });\n    const {\n        modal: { show: showEditModal },\n    } = editModalForm;\n    // highlight-end\n\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "status",\n                header: "Status",\n                accessorKey: "status",\n            },\n            // highlight-start\n            {\n                id: "actions",\n                header: "Actions",\n                accessorKey: "id",\n                cell: function render({ getValue }) {\n                    return (\n                        <EditButton\n                            hideText\n                            size="xs"\n                            onClick={() => showEditModal(getValue() as number)}\n                        />\n                    );\n                },\n            },\n            // highlight-end\n        ],\n        [],\n    );\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        refineCore: { setCurrent, pageCount, current },\n    } = useTable({\n        columns,\n    });\n\n    return (\n        <>\n            <CreatePostModal {...createModalForm} />\n            // highlight-next-line\n            <EditPostModal {...editModalForm} />\n            <ScrollArea>\n                <List createButtonProps={{ onClick: () => showCreateModal() }}>\n                    <Table highlightOnHover>\n                        <thead>\n                            {getHeaderGroups().map((headerGroup) => (\n                                <tr key={headerGroup.id}>\n                                    {headerGroup.headers.map((header) => {\n                                        return (\n                                            <th key={header.id}>\n                                                {!header.isPlaceholder && (\n                                                    <div>\n                                                        {flexRender(\n                                                            header.column\n                                                                .columnDef\n                                                                .header,\n                                                            header.getContext(),\n                                                        )}\n                                                    </div>\n                                                )}\n                                            </th>\n                                        );\n                                    })}\n                                </tr>\n                            ))}\n                        </thead>\n                        <tbody>\n                            {getRowModel().rows.map((row) => {\n                                return (\n                                    <tr key={row.id}>\n                                        {row.getVisibleCells().map((cell) => {\n                                            return (\n                                                <td key={cell.id}>\n                                                    {flexRender(\n                                                        cell.column.columnDef\n                                                            .cell,\n                                                        cell.getContext(),\n                                                    )}\n                                                </td>\n                                            );\n                                        })}\n                                    </tr>\n                                );\n                            })}\n                        </tbody>\n                    </Table>\n                    <br />\n                    <Pagination\n                        position="right"\n                        total={pageCount}\n                        page={current}\n                        onChange={setCurrent}\n                    />\n                </List>\n            </ScrollArea>\n        </>\n    );\n};\n')),(0,r.kt)("p",null,"Finally, let's see how the ",(0,r.kt)("inlineCode",{parentName:"p"},"EditPostModal")," component is implemented."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/editPostModal.tsx"',title:'"src/components/editPostModal.tsx"'},'import { BaseRecord, HttpError } from "@pankod/refine-core";\nimport {\n    UseModalFormReturnType,\n    Modal,\n    TextInput,\n    RichTextEditor,\n    Select,\n    useSelect,\n    SaveButton,\n    Box,\n    Text,\n} from "@pankod/refine-mantine";\n\ninterface FormValues {\n    title: string;\n    content: string;\n    status: string;\n    category: { id: string };\n}\n\nexport const EditPostModal: React.FC<\n    UseModalFormReturnType<BaseRecord, HttpError, FormValues>\n> = ({\n    getInputProps,\n    errors,\n    modal: { visible, close, title },\n    refineCore: { queryResult },\n    saveButtonProps,\n}) => {\n    const { selectProps } = useSelect({\n        resource: "categories",\n        defaultValue: queryResult?.data?.data.category.id,\n    });\n\n    return (\n        <Modal opened={visible} onClose={close} title={title}>\n            <TextInput\n                mt={8}\n                label="Title"\n                placeholder="Title"\n                {...getInputProps("title")}\n            />\n            <Select\n                mt={8}\n                label="Status"\n                placeholder="Pick one"\n                {...getInputProps("status")}\n                data={[\n                    { label: "Published", value: "published" },\n                    { label: "Draft", value: "draft" },\n                    { label: "Rejected", value: "rejected" },\n                ]}\n            />\n            <Select\n                mt={8}\n                label="Category"\n                placeholder="Pick one"\n                {...getInputProps("category.id")}\n                {...selectProps}\n            />\n            <Text mt={8} weight={500} size="sm" color="#212529">\n                Content\n            </Text>\n            <RichTextEditor {...getInputProps("content")} />\n            {errors.content && (\n                <Text mt={2} weight={500} size="xs" color="red">\n                    {errors.content}\n                </Text>\n            )}\n            <Box mt={8} sx={{ display: "flex", justifyContent: "flex-end" }}>\n                <SaveButton {...saveButtonProps} />\n            </Box>\n        </Modal>\n    );\n};\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modalProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration object for the modal or drawer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#modalpropstype"},(0,r.kt)("inlineCode",{parentName:"a"},"ModalPropsType")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refineCoreProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration object for the core of the ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm#properties"},(0,r.kt)("inlineCode",{parentName:"a"},"UseFormProps")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@mantine/form"),"'s ",(0,r.kt)("inlineCode",{parentName:"td"},"useForm")," properties"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/mantine/hooks/form/useForm"},"useForm")," documentation"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"modalpropstype"},"ModalPropsType"))),(0,r.kt)("table",{parentName:"blockquote"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultVisible"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial visibility state of the modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoSubmitClose"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the form should be submitted when the modal is closed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoResetForm"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the form should be reset when the form is submitted"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")))))),(0,r.kt)("h3",{id:"return-values"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modal"),(0,r.kt)("td",{parentName:"tr",align:null},"Relevant states and methods to control the modal or drawer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#modalreturnvalues"},(0,r.kt)("inlineCode",{parentName:"a"},"ModalReturnValues")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refineCore"),(0,r.kt)("td",{parentName:"tr",align:null},"The return values of the ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," in the core"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm#return-values"},(0,r.kt)("inlineCode",{parentName:"a"},"UseFormReturnValues")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@mantine/form"),"'s ",(0,r.kt)("inlineCode",{parentName:"td"},"useForm")," return values"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/mantine/hooks/form/useForm"},"useForm")," documentation"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"modalreturnvalues"},"ModalReturnValues"))),(0,r.kt)("table",{parentName:"blockquote"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visible"),(0,r.kt)("td",{parentName:"tr",align:null},"State of modal visibility"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the visible state to true"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(id?: BaseKey) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the visible state to false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"submit"),(0,r.kt)("td",{parentName:"tr",align:null},"Submits the form"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(values: TVariables) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Modal title based on resource and action value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"saveButtonProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Props for a submit button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean, onClick: (e: React.FormEvent<HTMLFormElement>) => void; }")))))),(0,r.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,r.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/form/mantine/useModalForm?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"mantine-use-modal-form-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}p.isMDXComponent=!0}}]);