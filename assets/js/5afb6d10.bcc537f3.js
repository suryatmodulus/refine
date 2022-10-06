"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=r,d=p["".concat(c,".").concat(g)]||p[g]||u[g]||a;return n?i.createElement(d,o(o({ref:t},m),{},{components:n})):i.createElement(d,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));n(45500),n(89103),n(12131),n(11945),n(85633),n(50065),n(30687);const a={title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",slug:"refine-invoice-generator",authors:"melih",tags:["refine","invoice-generator","react","admin-panel","business-tool","internal-tool","strapi"],image:"/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/refine-invoice-generator",source:"@site/blog/2022-03-01-refine-invoice-genarator-p2.md",title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",date:"2022-03-01T00:00:00.000Z",formattedDate:"March 1, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"invoice-generator",permalink:"/blog/tags/invoice-generator"},{label:"react",permalink:"/blog/tags/react"},{label:"admin-panel",permalink:"/blog/tags/admin-panel"},{label:"business-tool",permalink:"/blog/tags/business-tool"},{label:"internal-tool",permalink:"/blog/tags/internal-tool"},{label:"strapi",permalink:"/blog/tags/strapi"}],readingTime:12.725,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",slug:"refine-invoice-generator",authors:"melih",tags:["refine","invoice-generator","react","admin-panel","business-tool","internal-tool","strapi"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"ReactJS Frameworks You Should Know Before Start Developing B2B/Internal Application",permalink:"/blog/best-internal-tool-react-frameworks"},nextItem:{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",permalink:"/blog/refine-react-admin-invoice-genarator"},relatedPosts:[{title:"When to use dangerouslySetInnerHTML in React?",permalink:"/blog/use-react-dangerouslysetinnerhtml",formattedDate:"September 25, 2022",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:5.27,date:"2022-09-25T00:00:00.000Z"},{title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",permalink:"/blog/how-to-access-control-with-nestjs",formattedDate:"February 21, 2022",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:3.19,date:"2022-02-21T00:00:00.000Z"},{title:"Become a Refine guest technical writer",permalink:"/blog/refine-writer-program",formattedDate:"July 20, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.68,date:"2022-07-20T00:00:00.000Z"}],authorPosts:[{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:18.775,date:"2021-11-12T00:00:00.000Z"},{title:"How to upload files from your HTML form using Base64 encoding",permalink:"/blog/how-to-base64-upload",formattedDate:"December 22, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.27,date:"2021-12-22T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload",formattedDate:"December 27, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:3.63,date:"2021-12-27T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},s=[],m={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Looking for an invoice generator that is easy to use and lets you customize your invoices? With ",(0,r.kt)("strong",{parentName:"p"},"refine")," simple and intuitive interface, you can create your own invoices in few hours. Plus, we offer a wide range of templates and customization options so you can get the exact look you want. Learn more about our invoice generator here!"))}u.isMDXComponent=!0},50065:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/create_invoice-1fea3319376b91c87df02155a41daa61.gif"},89103:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/invoice-8cc31443f1fda1f551fa0fd98e5b7808.png"},85633:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/invoice_list-c6e5dd83da8ecaaf615a26e41430ec71.png"},30687:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/invoice_pdf-0b862164faa1ae4c3340b704e5a09155.gif"},11945:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mission_create-80142ab013515bdef2dca9750f34c38d.gif"},12131:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mission_page-df94d088af1d9b3739d87c6f5a8a006f.png"},45500:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/missions-388352122ef6884947aeca071894bf9e.png"}}]);