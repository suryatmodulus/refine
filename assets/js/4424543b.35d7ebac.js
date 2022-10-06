"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o=n.p+"assets/images/create-modal-4d256d9eac12a5c3fbb820c9ccea64ce.gif",l=n.p+"assets/images/edit-modal-042a38d9a3afff292f935a72f5999257.gif",i={id:"useModalForm",title:"useModalForm"},s=void 0,d={unversionedId:"packages/documentation/react-hook-form/useModalForm",id:"packages/documentation/react-hook-form/useModalForm",title:"useModalForm",description:"useModalForm hook allows you to manage a form within a modal. It provides some useful methods to handle the form modal.",source:"@site/docs/packages/documentation/react-hook-form/useModalForm.md",sourceDirName:"packages/documentation/react-hook-form",slug:"/packages/documentation/react-hook-form/useModalForm",permalink:"/docs/packages/documentation/react-hook-form/useModalForm",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/packages/documentation/react-hook-form/useModalForm.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1663689776,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{id:"useModalForm",title:"useModalForm"},sidebar:"someSidebar",previous:{title:"useForm",permalink:"/docs/packages/documentation/react-hook-form/useForm"},next:{title:"useStepsForm",permalink:"/docs/packages/documentation/react-hook-form/useStepsForm"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Create Modal",id:"create-modal",level:3},{value:"Edit Modal",id:"edit-modal",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return values",id:"return-values",level:3},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useModalForm")," hook allows you to manage a form within a modal. It provides some useful methods to handle the form modal."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useModalForm")," hook is extended from ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/react-hook-form"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-react-hook-form"))," package.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"We'll show two examples, one for creating and one for editing a post. Let's see how ",(0,r.kt)("inlineCode",{parentName:"p"},"useModalForm")," is used in both."),(0,r.kt)("p",null,"Before we start, let's create a basic ",(0,r.kt)("inlineCode",{parentName:"p"},"<Modal>")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/modal.tsx"',title:'"src/components/modal.tsx"'},'type ModalPropsType = {\n    isOpen: boolean;\n    onClose: () => void;\n};\n\nexport const Modal: React.FC<ModalPropsType> = ({\n    isOpen,\n    onClose,\n    children,\n}) => {\n    if (!isOpen) return null;\n    return (\n        <>\n            <div className="overlay" onClick={onClose}></div>\n            <div className="modal">\n                <div className="modal-title">\n                    <button className="close-button" onClick={onClose}>\n                        &times;\n                    </button>\n                </div>\n                <div className="modal-content">{children}</div>\n            </div>\n        </>\n    );\n};\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"See styles"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/styles.css"',title:'"src/styles.css"'},"* {\n    box-sizing: border-box;\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.7);\n    z-index: 1000;\n}\n\n.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #fff;\n    z-index: 1000;\n    width: 500px;\n    overflow-y: auto;\n}\n\n.modal .modal-title {\n    display: flex;\n    justify-content: flex-end;\n    padding: 4px;\n}\n\n.modal .modal-content {\n    padding: 0px 16px 16px 16px;\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.form .form-group {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.form input,\nselect,\ntextarea {\n    width: 100%;\n    padding: 8px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n")))),(0,r.kt)("h3",{id:"create-modal"},"Create Modal"),(0,r.kt)("p",null,"We'll create a ",(0,r.kt)("inlineCode",{parentName:"p"},"PostList")," page that will display a list of posts. It will also display a ",(0,r.kt)("inlineCode",{parentName:"p"},"<CreatePost>")," modal that will allow us to create a new post. We'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"useModalForm")," to manage the modal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { useTable } from "@pankod/refine-core";\n//highlight-next-line\nimport { useModalForm } from "@pankod/refine-react-hook-form";\n\n//highlight-next-line\nimport { CreatePost, EditPost } from "components";\n\nexport const PostList: React.FC = () => {\n    const { tableQueryResult } = useTable<IPost>({\n        initialSorter: [\n            {\n                field: "id",\n                order: "desc",\n            },\n        ],\n    });\n\n    //highlight-start\n    const createModalFormReturnValues = useModalForm({\n        refineCoreProps: { action: "create" },\n    });\n    //highlight-end\n\n    //highlight-start\n    const {\n        modal: { show: showCreateModal },\n    } = createModalFormReturnValues;\n    //highlight-end\n\n    return (\n        <div>\n            //highlight-start\n            <CreatePost {...createModalFormReturnValues} />\n            <button onClick={() => showCreateModal()}>Create Post</button>\n            //highlight-end\n            <table>\n                <thead>\n                    <tr>\n                        <th>ID</th>\n                        <th>Title</th>\n                        <th>Status</th>\n                        <th>Actions</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    {tableQueryResult.data?.data.map((post) => (\n                        <tr key={post.id}>\n                            <td>{post.id}</td>\n                            <td>{post.title}</td>\n                            <td>{post.status}</td>\n                        </tr>\n                    ))}\n                </tbody>\n            </table>\n        </div>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n    status: "published" | "draft" | "rejected";\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<CreatePost>")," component will be used to create a new post."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/post/create.tsx"',title:'"src/components/post/create.tsx"'},'import { UseModalFormReturnType } from "@pankod/refine-react-hook-form";\n\nimport { Modal } from "../modal";\n\nexport const CreatePost: React.FC<UseModalFormReturnType> = ({\n    register,\n    formState: { errors },\n    refineCore: { onFinish, formLoading },\n    handleSubmit,\n    modal: { visible, close },\n    saveButtonProps,\n}) => {\n    return (\n        <Modal isOpen={visible} onClose={close}>\n            <form className="form" onSubmit={handleSubmit(onFinish)}>\n                <div className="form-group">\n                    <label>Title: </label>\n                    <input\n                        {...register("title", {\n                            required: "This field is required",\n                        })}\n                    />\n                    {errors.title && <span>{errors.title.message}</span>}\n                </div>\n                <div className="form-group">\n                    <label>Status: </label>\n                    <select {...register("status")}>\n                        <option value="published">published</option>\n                        <option value="draft">draft</option>\n                        <option value="rejected">rejected</option>\n                    </select>\n                </div>\n                <div className="form-group">\n                    <label>Content: </label>\n                    <textarea\n                        {...register("content", {\n                            required: "This field is required",\n                        })}\n                        rows={10}\n                    />\n                    {errors.content && <span>{errors.content.message}</span>}\n                </div>\n                <button type="submit" {...saveButtonProps}>\n                    {formLoading ? "Loading" : "Save"}\n                </button>\n            </form>\n        </Modal>\n    );\n};\n')),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:o,alt:"Create Modal"})),(0,r.kt)("h3",{id:"edit-modal"},"Edit Modal"),(0,r.kt)("p",null,"Now we'll create a ",(0,r.kt)("inlineCode",{parentName:"p"},"<EditPost>")," component that will allow us to edit a post within the modal. Also, we'll add a button to specify that wich post to edit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { useTable } from "@pankod/refine-core";\nimport { useModalForm } from "@pankod/refine-react-hook-form";\n\n//highlight-next-line\nimport { CreatePost, EditPost } from "components";\nimport { IPost } from "interfaces";\n\nexport const PostList: React.FC = () => {\n    const { tableQueryResult } = useTable<IPost>({\n        initialSorter: [\n            {\n                field: "id",\n                order: "desc",\n            },\n        ],\n    });\n\n    const createModalFormReturnValues = useModalForm({\n        refineCoreProps: { action: "create" },\n    });\n    //highlight-start\n    const editModalFormReturnValues = useModalForm({\n        refineCoreProps: { action: "edit" },\n    });\n    //highlight-end\n\n    const {\n        modal: { show: showCreateModal },\n    } = createModalFormReturnValues;\n    //highlight-start\n    const {\n        modal: { show: showEditModal },\n    } = editModalFormReturnValues;\n    //highlight-end\n\n    return (\n        <div>\n            <CreatePost {...createModalFormReturnValues} />\n            //highlight-next-line\n            <EditPost {...editModalFormReturnValues} />\n            <button onClick={() => showCreateModal()}>Create Post</button>\n            <table>\n                <thead>\n                    <tr>\n                        <th>ID</th>\n                        <th>Title</th>\n                        <th>Status</th>\n                        <th>Actions</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    {tableQueryResult.data?.data.map((post) => (\n                        <tr key={post.id}>\n                            <td>{post.id}</td>\n                            <td>{post.title}</td>\n                            <td>{post.status}</td>\n                            <td>\n                                //highlight-start\n                                <button onClick={() => showEditModal(post.id)}>\n                                    Edit\n                                </button>\n                                //highlight-end\n                            </td>\n                        </tr>\n                    ))}\n                </tbody>\n            </table>\n        </div>\n    );\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<EditPost>")," component will be used to edit a post."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/post/edit.tsx"',title:'"src/components/post/edit.tsx"'},'import { UseModalFormReturnType } from "@pankod/refine-react-hook-form";\n\nimport { Modal } from "components/modal";\n\nexport const EditPost: React.FC<UseModalFormReturnType> = ({\n    register,\n    formState: { errors },\n    refineCore: { onFinish, formLoading },\n    handleSubmit,\n    modal: { visible, close },\n    saveButtonProps,\n}) => {\n    return (\n        <Modal isOpen={visible} onClose={close}>\n            <form className="form" onSubmit={handleSubmit(onFinish)}>\n                <div className="form-group">\n                    <label>Title: </label>\n                    <input\n                        {...register("title", {\n                            required: "This field is required",\n                        })}\n                    />\n                    {errors.title && <span>{errors.title.message}</span>}\n                </div>\n                <div className="form-group">\n                    <label>Status: </label>\n                    <select {...register("status")}>\n                        <option value="published">published</option>\n                        <option value="draft">draft</option>\n                        <option value="rejected">rejected</option>\n                    </select>\n                </div>\n                <div className="form-group">\n                    <label>Content: </label>\n                    <textarea\n                        {...register("content", {\n                            required: "This field is required",\n                        })}\n                        rows={10}\n                    />\n                    {errors.content && <span>{errors.content.message}</span>}\n                </div>\n                <button type="submit" {...saveButtonProps}>\n                    {formLoading ? "Loading" : "Save"}\n                </button>\n            </form>\n        </Modal>\n    );\n};\n')),(0,r.kt)("div",{class:"img-container",style:{"max-width":"800px"}},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:l,alt:"Edit Modal"})),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modalProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration object for the modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#modalpropstype"},(0,r.kt)("inlineCode",{parentName:"a"},"ModalPropsType")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refineCoreProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration object for the core of the ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm#properties"},(0,r.kt)("inlineCode",{parentName:"a"},"UseFormProps")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"React Hook Form Properties"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"https://react-hook-form.com/api/useform"},"React Hook Form")," documentation"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"modalpropstype"},"ModalPropsType"))),(0,r.kt)("table",{parentName:"blockquote"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultVisible"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial visibility state of the modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoSubmitClose"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the form should be submitted when the modal is closed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoResetForm"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the form should be reset when the form is submitted"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")))))),(0,r.kt)("h3",{id:"return-values"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modal"),(0,r.kt)("td",{parentName:"tr",align:null},"Relevant states and methods to control the modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#modalreturnvalues"},(0,r.kt)("inlineCode",{parentName:"a"},"ModalReturnValues")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refineCore"),(0,r.kt)("td",{parentName:"tr",align:null},"The return values of the ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," in the core"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm#return-values"},(0,r.kt)("inlineCode",{parentName:"a"},"UseFormReturnValues")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"React Hook Form Return Values"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"https://react-hook-form.com/api/useform"},"React Hook Form")," documentation"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"modalreturnvalues"},"ModalReturnValues"))),(0,r.kt)("table",{parentName:"blockquote"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visible"),(0,r.kt)("td",{parentName:"tr",align:null},"State of modal visibility"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the visible state to true"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(id?: BaseKey) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the visible state to false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"submit"),(0,r.kt)("td",{parentName:"tr",align:null},"Submits the form"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(values: TVariables) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Modal title based on resource and action value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"saveButtonProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Props for a submit button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean, onClick: (e: React.BaseSyntheticEvent) => void;  }")))))),(0,r.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,r.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/form/reactHookForm/useModalForm/?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-react-hook-form-example"}))}c.isMDXComponent=!0}}]);