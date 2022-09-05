"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47800],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return a?r.createElement(f,o(o({ref:t},l),{},{components:a})):r.createElement(f,o({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},55228:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));a(28728),a(11826),a(70042),a(92159),a(34323),a(93693),a(18923),a(85906),a(88242);const i={title:"Using Material UI DataGrid component with refine app",description:"How to use Material UI DataGrid component with refine apps?",slug:"mui-datagrid-refine",authors:"michael",tags:["material-ui","react","datagrid","mui"],image:"https://refine.dev/img/refine_social.png",hide_table_of_contents:!1},o=void 0,s={permalink:"/blog/mui-datagrid-refine",source:"@site/blog/2022-08-23-mui-usedatagrid.md",title:"Using Material UI DataGrid component with refine app",description:"How to use Material UI DataGrid component with refine apps?",date:"2022-08-23T00:00:00.000Z",formattedDate:"August 23, 2022",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"},{label:"datagrid",permalink:"/blog/tags/datagrid"},{label:"mui",permalink:"/blog/tags/mui"}],readingTime:16.62,hasTruncateMarker:!0,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],frontMatter:{title:"Using Material UI DataGrid component with refine app",description:"How to use Material UI DataGrid component with refine apps?",slug:"mui-datagrid-refine",authors:"michael",tags:["material-ui","react","datagrid","mui"],image:"https://refine.dev/img/refine_social.png",hide_table_of_contents:!1},prevItem:{title:"MUI Icons in React",permalink:"/blog/mui-icons-in-react"},nextItem:{title:"Neumorphism with CSS - A new design trend",permalink:"/blog/neumorphic-css"}},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2}],l={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"In this article, we'll show how to use Material UI ",(0,n.kt)("a",{parentName:"p",href:"https://mui.com/x/react-data-grid/"},(0,n.kt)("inlineCode",{parentName:"a"},"<DataGrid/>"))," component and refine's ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/ui-frameworks/mui/hooks/useDataGrid/"},(0,n.kt)("inlineCode",{parentName:"a"},"useDataGrid"))," hook to render data from a mock API server in tabular form using a ",(0,n.kt)("inlineCode",{parentName:"p"},"refine")," application."))}m.isMDXComponent=!0},28728:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cli-f5d3565b89f68fd09e1ef6a0a26d633e.png"},85906:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/employees_checkbox-9bb0b82eacdcd7a3c5e4345cbe3d14fb.png"},88242:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/employees_filter-46f204d1fc8524ebc8a648d6ae551bf6.png"},18923:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/employees_gif-730ea21119e7af6323039a13a31cafa0.gif"},92159:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/employees_list-1b86955de9a0640a773689f3c278bba5.png"},93693:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/filtering_column-4edb686bb1adb17b695006217f770cc0.png"},11826:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/grid-c99c0bd98275cca37d424f2938df7a2d.png"},34323:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/sorting_employees-dc2fb9a0e186637d92c27509fc37a5ec.png"},70042:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/welcome-81f72cf5d94e33b34b80b574e9c5e77e.png"}}]);