"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11690],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||n;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},89945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));a(95153),a(15061),a(50004),a(71657),a(6972),a(67075),a(66799),a(77108);const n={title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",slug:"create-full-stack-app-with-refine",authors:"melih",tags:["refine","react","next.js","full-stack","web-app","b2b","admin-panel"],image:"/img/placeholder.png",hide_table_of_contents:!1},l=void 0,o={permalink:"/blog/create-full-stack-app-with-refine",source:"@site/blog/2022-04-29-create-full-stack-app.md",title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",date:"2022-04-29T00:00:00.000Z",formattedDate:"April 29, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"next.js",permalink:"/blog/tags/next-js"},{label:"full-stack",permalink:"/blog/tags/full-stack"},{label:"web-app",permalink:"/blog/tags/web-app"},{label:"b2b",permalink:"/blog/tags/b-2-b"},{label:"admin-panel",permalink:"/blog/tags/admin-panel"}],readingTime:8.49,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",slug:"create-full-stack-app-with-refine",authors:"melih",tags:["refine","react","next.js","full-stack","web-app","b2b","admin-panel"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"10 High-Quality Free Resources That Will Make Every Web Developer's Life Easier",permalink:"/blog/10-high-quality-free-resources"},nextItem:{title:"The Advantages and Disadvantages of Working on Open Source Projects",permalink:"/blog/open-source-advantages-disadvantages"},relatedPosts:[{title:"Top React JS Frameworks Every Developer Should Know",permalink:"/blog/best-react-frameworks",formattedDate:"February 21, 2022",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:4.255,date:"2022-02-21T00:00:00.000Z"},{title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",permalink:"/blog/create-a-feedback-admin-panel-with-refine-and-strapi",formattedDate:"October 4, 2021",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:6.92,date:"2021-10-04T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:6.805,date:"2022-03-29T00:00:00.000Z"}],authorPosts:[{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.205,date:"2022-02-22T00:00:00.000Z"},{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:18.775,date:"2021-11-12T00:00:00.000Z"},{title:"Next.js E-commerce App with Strapi and Chakra UI",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",formattedDate:"February 14, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.035,date:"2022-02-14T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We frequently require quick development and sometimes flexibility while developing a Full Stack application. Aside from speed and flexibility, we must establish the application architecture correctly at the start so that we are not subjected to any more needless work throughout the development process."),(0,i.kt)("p",null,"In this article, we will use the ",(0,i.kt)("strong",{parentName:"p"},"refine")," framework to develop a full stack application. ",(0,i.kt)("strong",{parentName:"p"},"Refine")," will provide us with the speed and flexibility we are looking for, while assisting with the overall project architecture during web application development."))}m.isMDXComponent=!0},6972:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/client_home-7cbd85223fb1536341c04adb91423459.png"},71657:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/client_menu-9c67d0b7f9788d560cdfcf8d04975bf5.png"},15061:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-9c452f8ddf0b8448bed241a1e8130b53.gif"},67075:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dashboard-c545e7b32ddfd19e305adb6e93ba3a15.png"},50004:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/first-a11d25a6866c1aaa5bba44e1b4e75a73.png"},66799:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/products-c52e1d5cca261aa624a6706f47df6a66.png"},77108:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/reviews-064ab8636aae3443b7b4523d4bf88bdc.png"},95153:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/benchmark-86c224f2232bb9d7874bcc071612b6bf.png"}}]);