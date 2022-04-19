"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77273],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||s[c]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41596:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"useForm",title:"useForm"},d=void 0,p={unversionedId:"core/hooks/useForm",id:"core/hooks/useForm",isDocsHomePage:!1,title:"useForm",description:"useForm is a hook that allows to manage forms. It has some action methods that create, edit and clone the form. The hook return value comes to according to the called action and it can run different logic depending on the action.",source:"@site/docs/core/hooks/useForm.md",sourceDirName:"core/hooks",slug:"/core/hooks/useForm",permalink:"/docs/core/hooks/useForm",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/useForm.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1650357326,formattedLastUpdatedAt:"4/19/2022",frontMatter:{id:"useForm",title:"useForm"},sidebar:"someSidebar",previous:{title:"useSelect",permalink:"/docs/core/hooks/useSelect"},next:{title:"useExport",permalink:"/docs/core/hooks/import-export/useExport"}},m=[{value:"Basic Usage",id:"basic-usage",children:[],level:2},{value:"Actions",id:"actions",children:[{value:"<code>action: &quot;edit&quot;</code>",id:"action-edit",children:[],level:3},{value:"<code>action: &quot;create&quot;</code>",id:"action-create",children:[],level:3},{value:"<code>action: &quot;clone&quot;</code>",id:"action-clone",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Type Parameters",id:"type-parameters",children:[],level:3},{value:"Return values",id:"return-values",children:[],level:3}],level:2}],s={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," is a hook that allows to manage forms. It has some ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," methods that ",(0,i.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"clone")," the form. The hook return value comes to according to the called action and it can run different logic depending on the ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're looking for a complete form library, Refine supports two form libraries out-of-the-box."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://react-hook-form.com/"},"React Hook Form")," (for Headless users) - ",(0,i.kt)("a",{parentName:"li",href:"/docs/packages/react-hook-form"},"Documentation")," - ",(0,i.kt)("a",{parentName:"li",href:"/docs/examples/react-hook-form/react-hook-form"},"Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ant.design/components/form/#header"},"Ant Design Form")," (for Ant Design users) - ",(0,i.kt)("a",{parentName:"li",href:"/docs/ui-frameworks/antd/hooks/form/useForm"},"Documentation")," - ",(0,i.kt)("a",{parentName:"li",href:"/docs/examples/form/useForm"},"Example"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Returns the ",(0,i.kt)("inlineCode",{parentName:"li"},"mutationResult")," after called the ",(0,i.kt)("inlineCode",{parentName:"li"},"onFinish")," callback."),(0,i.kt)("li",{parentName:"ul"},"Accepts generic type parameters. It is used to define response type of the mutation and query.")),(0,i.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("p",null,"We'll show the basic usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," by adding an creating form."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/posts/create.tsx"',title:'"src/posts/create.tsx"'},'import { useState } from "react";\nimport { useForm } from "@pankod/refine-core";\n\nexport const PostCreate = () => {\n    const [title, setTitle] = useState();\n    const { onFinish } = useForm({\n        action: "create",\n    });\n\n    const onSubmit = (e) => {\n        e.preventDefault();\n        onFinish({ title });\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <input onChange={(e) => setTitle(e.target.value)} />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n')),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," can handle edit, create and clone actions."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"By default, it determines the ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," from route. In the above example, the route is ",(0,i.kt)("inlineCode",{parentName:"p"},"/posts/create")," thus the hook will be called with ",(0,i.kt)("inlineCode",{parentName:"p"},'action: "create"'),". If the route is ",(0,i.kt)("inlineCode",{parentName:"p"},"/posts/edit/1"),", the hook will be called with ",(0,i.kt)("inlineCode",{parentName:"p"},'action: "edit"'),"."),(0,i.kt)("p",{parentName:"div"},"It can be overridden by passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," prop where it isn't possible to determine the action from the route (e.g. when using form in a modal or using a custom route)."))),(0,i.kt)("h3",{id:"action-edit"},(0,i.kt)("inlineCode",{parentName:"h3"},'action: "edit"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'action: "edit"')," is used for editing an existing record. It requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," for determining the record to edit. By default, it uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," from the route. It can be changed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"setId")," function."),(0,i.kt)("p",null,"It fetches the record data according to the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"queryResult")," for you to fill the form."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," uses ",(0,i.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useUpdate"},(0,i.kt)("inlineCode",{parentName:"a"},"useUpdate"))," under the hood for mutations on edit mode."),(0,i.kt)("h3",{id:"action-create"},(0,i.kt)("inlineCode",{parentName:"h3"},'action: "create"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'action: "create"'),"is used for creating a new record that didn't exist before."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," uses ",(0,i.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useCreate"},(0,i.kt)("inlineCode",{parentName:"a"},"useCreate"))," under the hood for mutations on create mode."),(0,i.kt)("h3",{id:"action-clone"},(0,i.kt)("inlineCode",{parentName:"h3"},'action: "clone"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'action: "clone"')," is used for cloning an existing record. It requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," for determining the record to clone. By default, it uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," from the route. It can be changed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"setId")," function."),(0,i.kt)("p",null,"It fetches the record data according to the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"queryResult")," for you to fill the form."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," uses ",(0,i.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useUpdate"},(0,i.kt)("inlineCode",{parentName:"a"},"useUpdate"))," under the hood for mutations on clone mode."),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"action"),(0,i.kt)("td",{parentName:"tr",align:null},"Type of the form mode"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"clone"')),(0,i.kt)("td",{parentName:"tr",align:null},'Action that it reads from route otherwise "create" is used')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resource"),(0,i.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,i.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from route ",(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from route")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mutationMode"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/guides-and-concepts/mutation-mode"},"Determines when mutations are executed")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},' "pessimistic')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"optimistic')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"undoable"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"pessimistic"'),"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onMutationSuccess"),(0,i.kt)("td",{parentName:"tr",align:null},"Called when a ",(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},"mutation")," is successful"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(data: UpdateResponse<M>, variables: any, context: any) => void")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onMutationError"),(0,i.kt)("td",{parentName:"tr",align:null},"Called when a ",(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},"mutation")," encounters an error"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(error: any, variables: any, context: any) => void")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redirect"),(0,i.kt)("td",{parentName:"tr",align:null},"Page to redirect after a succesfull mutation"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},' "show"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"list"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"list"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"undoableTimeout"),(0,i.kt)("td",{parentName:"tr",align:null},"Duration to wait before executing mutations when ",(0,i.kt)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5000"),"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,i.kt)("td",{parentName:"tr",align:null},"Successful Mutation notification"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#successerrornotification"},(0,i.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,i.kt)("td",{parentName:"tr",align:null},'"Successfully created ',(0,i.kt)("inlineCode",{parentName:"td"},"resource"),'" or "Successfully updated ',(0,i.kt)("inlineCode",{parentName:"td"},"resource"),'"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,i.kt)("td",{parentName:"tr",align:null},"Unsuccessful Mutation notification"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#successerrornotification"},(0,i.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,i.kt)("td",{parentName:"tr",align:null},'"There was an error creating ',(0,i.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,i.kt)("inlineCode",{parentName:"td"},"statusCode"),')" or "Error when updating ',(0,i.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,i.kt)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metaData"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,i.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#metadataquery"},(0,i.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,i.kt)("td",{parentName:"tr",align:null},"{}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dataProviderName"),(0,i.kt)("td",{parentName:"tr",align:null},"If there is more than one ",(0,i.kt)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,i.kt)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"{}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/providers/live-provider#usage-in-a-hook"},"liveMode")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to update data automatically (",(0,i.kt)("inlineCode",{parentName:"td"},'"auto"'),") or not (",(0,i.kt)("inlineCode",{parentName:"td"},'"manual"'),') if a related live event is received. The "off" value is used to avoid creating a subscription.'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},'"auto"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"a"},'"manual"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"a"},'"off"'))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"off"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"liveParams"),(0,i.kt)("td",{parentName:"tr",align:null},"Params to pass to ",(0,i.kt)("inlineCode",{parentName:"td"},"liveProvider"),"'s ",(0,i.kt)("inlineCode",{parentName:"td"},"subscribe")," method if ",(0,i.kt)("inlineCode",{parentName:"td"},"liveMode")," is enabled."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},"{ ids?: BaseKey[]; [key: string]: any; }"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onLiveEvent"),(0,i.kt)("td",{parentName:"tr",align:null},"Callback to handle all related live events of this hook."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},"(event: LiveEvent) => void"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"invalidates"),(0,i.kt)("td",{parentName:"tr",align:null},"You can use it to manage the invalidations that will occur at the end of the mutation."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"all"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"resourceAll"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"list"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"many"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"detail"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'["list", "many", "detail"]'))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"*"),": These props have default values in ",(0,i.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,i.kt)("strong",{parentName:"p"},"<",(0,i.kt)("a",{parentName:"strong",href:"/docs/core/components/refine-config"},"Refine"),">")," component. ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," will use what is passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine>")," as default but a local value will override it.")),(0,i.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Desription"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TData"),(0,i.kt)("td",{parentName:"tr",align:null},"Result data of the query that extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TError"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,i.kt)("td",{parentName:"tr",align:null},"Values for params."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,i.kt)("h3",{id:"return-values"},"Return values"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onFinish"),(0,i.kt)("td",{parentName:"tr",align:null},"Triggers the mutation"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(values: TVariables) => Promise<void>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,i.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<T>")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mutationResult"),(0,i.kt)("td",{parentName:"tr",align:null},"Result of the mutation triggered by calling ",(0,i.kt)("inlineCode",{parentName:"td"},"onFinish")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,i.kt)("inlineCode",{parentName:"a"},"UseMutationResult<T>")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"formLoading"),(0,i.kt)("td",{parentName:"tr",align:null},"Loading state of form request"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"Record id for ",(0,i.kt)("inlineCode",{parentName:"td"},"clone")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"create")," action"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#basekey"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseKey")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"setId"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")," setter"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<")," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined>>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redirect"),(0,i.kt)("td",{parentName:"tr",align:null},"Redirect function for custom redirections"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'(redirect: "list"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"show"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"false) => void"))))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useModal")," hook allows you to manage a modal. Since it is designed as headless, it only outputs ",(0,i.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"close")," functions and ",(0,i.kt)("inlineCode",{parentName:"p"},"visible")," for state. It expects you to handle the UI."),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"visible")," state to show or hide the modal."))}u.isMDXComponent=!0}}]);