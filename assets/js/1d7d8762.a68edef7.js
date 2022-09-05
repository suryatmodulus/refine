"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={id:"usePublish",title:"usePublish"},a=void 0,s={unversionedId:"core/hooks/live/usePublish",id:"core/hooks/live/usePublish",title:"usePublish",description:"If you need to publish a custom events refine provides the usePublish hook for it, It returns the publish method from liveProvider under the hood.",source:"@site/docs/core/hooks/live/usePublish.md",sourceDirName:"core/hooks/live",slug:"/core/hooks/live/usePublish",permalink:"/docs/core/hooks/live/usePublish",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/live/usePublish.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1644408496,formattedLastUpdatedAt:"Feb 9, 2022",frontMatter:{id:"usePublish",title:"usePublish"},sidebar:"someSidebar",previous:{title:"useInvalidate",permalink:"/docs/core/hooks/invalidate/useInvalidate"},next:{title:"useSubscription",permalink:"/docs/core/hooks/live/useSubscription"}},u={},l=[{value:"Usage",id:"usage",level:2}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you need to publish a custom events ",(0,o.kt)("strong",{parentName:"p"},"refine")," provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"usePublish")," hook for it, It returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," method from ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/providers/live-provider#publish"},(0,o.kt)("inlineCode",{parentName:"a"},"liveProvider"))," under the hood."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,o.kt)("inlineCode",{parentName:"p"},"liveProvider"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," method is provided.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { usePublish } from "@pankod/refine-core";\n\nconst publish = usePublish();\n\npublish({\n    channel: "custom-channel-name",\n    type: "custom-event-name",\n    payload: {\n        "custom-property": "custom-property-value",\n    },\n    date: new Date(),\n});\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can subscribe to event with ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/live/useSubscription"},(0,o.kt)("inlineCode",{parentName:"a"},"useSubscription")),".")))}c.isMDXComponent=!0}}]);