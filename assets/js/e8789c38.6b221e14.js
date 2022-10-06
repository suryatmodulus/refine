"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23092],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),h=o,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||n;return a?r.createElement(d,i(i({ref:t},p),{},{components:a})):r.createElement(d,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},83451:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=a(87462),o=(a(67294),a(3905));const n={title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",slug:"react-router-useparams",authors:"joseph_mawa",tags:["react","react-router","useparams"],image:"/img/blog/2022-09-24-router-use-params/social.jpg",hide_table_of_contents:!1},i=void 0,s={permalink:"/blog/react-router-useparams",source:"@site/blog/2022-09-24-router-use-params.md",title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",date:"2022-09-24T00:00:00.000Z",formattedDate:"September 24, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"react-router",permalink:"/blog/tags/react-router"},{label:"useparams",permalink:"/blog/tags/useparams"}],readingTime:4.385,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"https://media-exp1.licdn.com/dms/image/C4E03AQHSDUpc44g0WA/profile-displayphoto-shrink_800_800/0/1610367557179?e=1667433600&v=beta&t=ZKdvXFLajKeMPl16UvLAEudKGgpLq4cVjqI2iFhDmTI",key:"joseph_mawa"}],frontMatter:{title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",slug:"react-router-useparams",authors:"joseph_mawa",tags:["react","react-router","useparams"],image:"/img/blog/2022-09-24-router-use-params/social.jpg",hide_table_of_contents:!1},prevItem:{title:"When to use dangerouslySetInnerHTML in React?",permalink:"/blog/use-react-dangerouslysetinnerhtml"},nextItem:{title:"A Quick Start Guide to React Suspense",permalink:"/blog/react-suspense-guide"},relatedPosts:[{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.725,date:"2022-03-01T00:00:00.000Z"},{title:"MUI Icons in React",permalink:"/blog/mui-icons-in-react",formattedDate:"August 24, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:10.785,date:"2022-08-24T00:00:00.000Z"},{title:"A Quick Start Guide to React Suspense",permalink:"/blog/react-suspense-guide",formattedDate:"September 23, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:4.55,date:"2022-09-23T00:00:00.000Z"}],authorPosts:[{title:"Using Google Lighthouse to improve app performance",permalink:"/blog/lighthouse-google-chrome",formattedDate:"August 31, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"https://media-exp1.licdn.com/dms/image/C4E03AQHSDUpc44g0WA/profile-displayphoto-shrink_800_800/0/1610367557179?e=1667433600&v=beta&t=ZKdvXFLajKeMPl16UvLAEudKGgpLq4cVjqI2iFhDmTI",key:"joseph_mawa"}],readingTime:15.725,date:"2022-08-31T00:00:00.000Z"},{title:"Redirect in React Router V6 with useNavigate hook",permalink:"/blog/usenavigate-react-router-redirect",formattedDate:"September 19, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"https://media-exp1.licdn.com/dms/image/C4E03AQHSDUpc44g0WA/profile-displayphoto-shrink_800_800/0/1610367557179?e=1667433600&v=beta&t=ZKdvXFLajKeMPl16UvLAEudKGgpLq4cVjqI2iFhDmTI",key:"joseph_mawa"}],readingTime:5.995,date:"2022-09-19T00:00:00.000Z"},{title:"Redirect in React Router V6 with Navigate Component",permalink:"/blog/navigate-react-router-redirect",formattedDate:"September 29, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"https://media-exp1.licdn.com/dms/image/C4E03AQHSDUpc44g0WA/profile-displayphoto-shrink_800_800/0/1610367557179?e=1667433600&v=beta&t=ZKdvXFLajKeMPl16UvLAEudKGgpLq4cVjqI2iFhDmTI",key:"joseph_mawa"}],readingTime:3.805,date:"2022-09-29T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting up React Router",id:"setting-up-react-router",level:2},{value:"Step 1 - Install React Router",id:"step-1---install-react-router",level:3},{value:"Step 2 - How to set up React router",id:"step-2---how-to-set-up-react-router",level:3},{value:"Step 3 - How to set up routes",id:"step-3---how-to-set-up-routes",level:3},{value:"What are URL parameters in React router",id:"what-are-url-parameters-in-react-router",level:2},{value:"How to use the  <code>useParams</code> hook",id:"how-to-use-the--useparams-hook",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useParams")," hook is one of the several hooks in React router. It has been available in React router since version 5. You can use it to retrieve route parameters from the component rendered by the matching route. You will explore the React Router ",(0,o.kt)("inlineCode",{parentName:"p"},"useParams")," hook and how to use it in this article."),(0,o.kt)("p",null,"Steps we'll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#introduction"},"Introduction"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#setting-up-react-router"},"Setting up React Router")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-are-url-parameters-in-react-router"},"What are URL parameters in React Router?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-to-use-the-useparams-hook"},"How to use the  ",(0,o.kt)("inlineCode",{parentName:"a"},"useParams")," hook"))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To try out the examples in this article, you need to have a React project."),(0,o.kt)("p",null,"Quickly create a React project using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},"superplate")," CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx superplate-cli useparams-example-app\n")),(0,o.kt)("h2",{id:"setting-up-react-router"},"Setting up React Router"),(0,o.kt)("p",null,"The steps below explain how to set up React router version 6 in an existing React project."),(0,o.kt)("h3",{id:"step-1---install-react-router"},"Step 1 - Install React Router"),(0,o.kt)("p",null,"Use one of the commands below to install React router version 6."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Using NPM\nnpm install react-router-dom@6\n\n# Using Yarn\nyarn add react-router-dom@6\n\n# Using pnpm\npnpm add react-router-dom@6\n")),(0,o.kt)("h3",{id:"step-2---how-to-set-up-react-router"},"Step 2 - How to set up React router"),(0,o.kt)("p",null,"To use React router in the browser environment, import ",(0,o.kt)("inlineCode",{parentName:"p"},"BrowserRouter")," and wrap your root component as in the example below. ",(0,o.kt)("inlineCode",{parentName:"p"},"BrowserRouter")," is a top-level Component. Other routers, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"NativeRouter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"StaticRouter"),", have their use cases you can look up in the documentation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport { BrowserRouter as Router } from "react-router-dom";\nimport App from "./App";\n\nconst root = ReactDOM.createRoot(document.getElementById("root"));\n\nroot.render(\n  <React.StrictMode>\n    <Router>\n      <App />\n    </Router>\n  </React.StrictMode>\n);\n')),(0,o.kt)("h3",{id:"step-3---how-to-set-up-routes"},"Step 3 - How to set up routes"),(0,o.kt)("p",null,"Unlike in earlier versions of React router, you import the ",(0,o.kt)("inlineCode",{parentName:"p"},"Routes")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Route")," components in React router version 6 and then set them up like in the example below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Route, Routes } from "react-router-dom";\nimport { Home, Blog } from "./components"\n\nfunction App() {\n  return (\n    <div className="App">\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/blog" element={<Blog />} />\n      </Routes>\n    </div>\n  );\n}\n')),(0,o.kt)("h2",{id:"what-are-url-parameters-in-react-router"},"What are URL parameters in React router"),(0,o.kt)("p",null,"When declaring functions in JavaScript, we use placeholders referred to as parameters. You use the parameters to perform some operations in the function declaration and return a value. The code below is a JavaScript function declaration that takes two numbers and returns their sum."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function add(a, b){\n  return a + b;\n};\n")),(0,o.kt)("p",null,"In the function declaration above, ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," are placeholders. They are function parameters. The actual values you pass during function invocation are arguments. In the function invocation below, ",(0,o.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"3")," are arguments. The function can take any pair of numbers as arguments and return their sum."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const sum = add(2, 3);\nconsole.log(sum) // 5\n")),(0,o.kt)("p",null,"The concept of parameters is not limited to function declarations. When working with React router, there are URL parameters similar to the function parameters described above. In React router, URL parameters are placeholders you declare in a route, as in the example below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<Routes>\n  <Route path="/blog/:id" element={<Blog />} /> \n</Routes>\n')),(0,o.kt)("p",null,"In the example above, ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," is a placeholder because of the ",(0,o.kt)("inlineCode",{parentName:"p"},":")," in front. The placeholder is known as the URL parameter. Because of the URL parameter, React router will not literally match the route above with the URL. It will dynamically match if you point the browser to a URL that matches the ",(0,o.kt)("inlineCode",{parentName:"p"},"/blog/:id")," pattern in its path."),(0,o.kt)("p",null,"Assuming you are hosting the site on ",(0,o.kt)("inlineCode",{parentName:"p"},"https://refine.dev/"),", pointing the browser to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://refine.dev/blog/use-params")," will match the route above. As a result, the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," parameter will take the value ",(0,o.kt)("inlineCode",{parentName:"p"},'"use-params"')," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Blog")," component. "),(0,o.kt)("p",null,"The section below will explain how you can access the URL parameter in the rendered Component using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useParams")," hook."),(0,o.kt)("h2",{id:"how-to-use-the--useparams-hook"},"How to use the  ",(0,o.kt)("inlineCode",{parentName:"h2"},"useParams")," hook"),(0,o.kt)("p",null,"As explained in the section above, you can declare a route with URL parameters so that React router dynamically captures the corresponding values in the URL when there is a match. It is useful when dynamically rendering the same component for multiple paths."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<Routes>\n  <Route path="/blog/:id" element={<Blog />} /> \n</Routes>\n')),(0,o.kt)("p",null,"Assuming you have the route above in your React router setup, you can retrieve the route parameters in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Blog")," component using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useParams")," hook. It returns an object. The object keys are the parameter names declared in the path string in the Route definition, and the values are the corresponding URL segment from the matching URL."),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useParams")," hook in the rendered component to retrieve the parameters like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useParams } from "react-router-dom";\n\nconst Blog = () => {\n  const routeParams = useParams();\n};\n')),(0,o.kt)("p",null,"If the matching route is",(0,o.kt)("inlineCode",{parentName:"p"},"/blog/use-params")," for the example above, the ",(0,o.kt)("inlineCode",{parentName:"p"},"useParams")," hook will return the object below. You can then use the returned object in the rendered Component the way you want."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n  id: "use-params"\n}\n')),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useParams")," hook has been part of React router since version 5. It comes in handy if you want to retrieve route parameters from the functional component rendered by the matching route. The React Router ",(0,o.kt)("inlineCode",{parentName:"p"},"useParams")," hook returns an object whose keys are the parameter names declared in the path string in the Route definition, and the values are the corresponding URL segment from the matching URL."))}c.isMDXComponent=!0}}]);