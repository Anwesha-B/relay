"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[671],{3905:(e,r,a)=>{a.r(r),a.d(r,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>s});var n=a(67294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(){return l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function d(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var u=n.createContext({}),s=function(e){return function(r){var a=c(r.components);return n.createElement(e,l({},r,{components:a}))}},c=function(e){var r=n.useContext(u),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},m=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=c(a),m=t,y=s["".concat(i,".").concat(m)]||s[m]||p[m]||l;return a?n.createElement(y,o(o({ref:r},u),{},{components:a})):n.createElement(y,o({ref:r},u))}));function h(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},68629:(e,r,a)=>{a.d(r,{Z:()=>p});var n=a(39960),t=a(86341),l=a(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var r=e.children;return l.createElement("div",{className:"docsRating",id:"docsRating"},l.createElement("hr",null),r)}var d=function(){var e=l.useState(!1),r=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return r?"Thank you for letting us know!":l.createElement(l.Fragment,null,"Is this page useful?",l.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},l.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),l.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},l.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},u=function(){return l.createElement("p",null,"Let us know how these docs can be improved by",l.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},s=function(){return l.createElement("p",null,"Help us make the site even better by"," ",l.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return l.createElement(o,null,l.createElement(u,null),l.createElement(d,null),l.createElement(s,null))},m=function(){return l.createElement(o,null,l.createElement(d,null),l.createElement(s,null))};const p=function(){return(0,t.fbContent)({internal:l.createElement(c,null),external:l.createElement(m,null)})}},50771:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var n=a(83117),t=a(80102),l=(a(67294),a(3905)),i=a(68629),o=["components"],d={id:"use-query-loader",title:"useQueryLoader",slug:"/api-reference/use-query-loader/",description:"API reference for useQueryLoader, a React hook used to imperatively fetch data for a query in response to a user event",keywords:["query","fetch","preload","render-as-you-fetch"]},u=void 0,s={unversionedId:"api-reference/hooks/use-query-loader",id:"version-v14.0.0/api-reference/hooks/use-query-loader",title:"useQueryLoader",description:"API reference for useQueryLoader, a React hook used to imperatively fetch data for a query in response to a user event",source:"@site/versioned_docs/version-v14.0.0/api-reference/hooks/use-query-loader.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-query-loader/",permalink:"/docs/api-reference/use-query-loader/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/api-reference/hooks/use-query-loader.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Evan Yeung",lastUpdatedAt:1679093185,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"use-query-loader",title:"useQueryLoader",slug:"/api-reference/use-query-loader/",description:"API reference for useQueryLoader, a React hook used to imperatively fetch data for a query in response to a user event",keywords:["query","fetch","preload","render-as-you-fetch"]},sidebar:"docs",previous:{title:"usePreloadedQuery",permalink:"/docs/api-reference/use-preloaded-query/"},next:{title:"loadQuery",permalink:"/docs/api-reference/load-query/"}},c={},m=[{value:"<code>useQueryLoader</code>",id:"usequeryloader",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"Behavior",id:"behavior",level:3}],p={toc:m};function y(e){var r=e.components,a=(0,t.Z)(e,o);return(0,l.mdx)("wrapper",(0,n.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,l.mdx)("h2",{id:"usequeryloader"},(0,l.mdx)("inlineCode",{parentName:"h2"},"useQueryLoader")),(0,l.mdx)("p",null,"Hook used to make it easy to safely load and retain queries. It will keep a query reference stored in state, and dispose of it when the component is disposed or it is no longer accessible via state."),(0,l.mdx)("p",null,"This hook is designed to be used with ",(0,l.mdx)("a",{parentName:"p",href:"../use-preloaded-query"},(0,l.mdx)("inlineCode",{parentName:"a"},"usePreloadedQuery")),' to implement the "render-as-you-fetch" pattern. For more information, see the ',(0,l.mdx)("a",{parentName:"p",href:"../../guided-tour/rendering/queries/"},"Fetching Queries for Render")," guide."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"import type {AppQuery as AppQueryType} from 'AppQuery.graphql';\nimport type {PreloadedQuery} from 'react-relay';\n\nconst {useQueryLoader, usePreloadedQuery} = require('react-relay');\n\nconst AppQuery = graphql`\n  query AppQuery($id: ID!) {\n    user(id: $id) {\n      name\n    }\n  }\n`;\n\ntype Props = {\n  initialQueryRef: PreloadedQuery<AppQueryType>,\n};\n\nfunction QueryFetcherExample(props: Props) {\n  const [\n    queryReference,\n    loadQuery,\n    disposeQuery,\n  ] = useQueryLoader(\n    AppQuery,\n    props.initialQueryRef, /* e.g. provided by router */\n  );\n\n  if (queryReference == null) {\n    return (\n      <Button onClick={() => loadQuery({})}> Click to reveal the name </Button>\n    );\n  }\n\n  return (\n    <>\n      <Button onClick={disposeQuery}>\n        Click to hide the name and dispose the query.\n      </Button>\n      <React.Suspense fallback=\"Loading\">\n        <NameDisplay queryReference={queryReference} />\n      </React.Suspense>\n    </>\n  );\n}\n\nfunction NameDisplay({ queryReference }) {\n  const data = usePreloadedQuery<AppQueryType>(AppQuery, queryReference);\n\n  return <h1>{data.user?.name}</h1>;\n}\n")),(0,l.mdx)("h3",{id:"arguments"},"Arguments"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"query"),": GraphQL query specified using a ",(0,l.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"initialQueryRef"),": ",(0,l.mdx)("em",{parentName:"li"},(0,l.mdx)("em",{parentName:"em"},"[Optional]"))," An initial ",(0,l.mdx)("inlineCode",{parentName:"li"},"PreloadedQuery")," to be used as the initial value of the ",(0,l.mdx)("inlineCode",{parentName:"li"},"queryReference")," stored in state and returned by ",(0,l.mdx)("inlineCode",{parentName:"li"},"useQueryLoader"),".")),(0,l.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"TQuery"),": the type of the query")),(0,l.mdx)("h3",{id:"return-value"},"Return value"),(0,l.mdx)("p",null,"A tuple containing the following values:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"queryReference"),": the query reference, or ",(0,l.mdx)("inlineCode",{parentName:"li"},"null"),"."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"loadQuery"),": a callback that, when executed, will load a query, which will be accessible as ",(0,l.mdx)("inlineCode",{parentName:"li"},"queryReference"),". If a previous query was loaded, it will dispose of it. It will throw an error if called during React's render phase.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Parameters",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"variables"),": the variables with which the query is loaded."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"options"),": ",(0,l.mdx)("inlineCode",{parentName:"li"},"LoadQueryOptions"),". An optional options object, containing the following keys:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"fetchPolicy"),": ",(0,l.mdx)("em",{parentName:"li"},(0,l.mdx)("em",{parentName:"em"},"[Optional]"))," Determines if cached data should be used, and when to send a network request based on the cached data that is currently available in the Relay store (for more details, see our ",(0,l.mdx)("a",{parentName:"li",href:"../../guided-tour/reusing-cached-data/fetch-policies"},"Fetch Policies")," and ",(0,l.mdx)("a",{parentName:"li",href:"../../guided-tour/reusing-cached-data/presence-of-data"},"Garbage Collection")," guides):",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},'"store-or-network": ',(0,l.mdx)("em",{parentName:"li"},(0,l.mdx)("em",{parentName:"em"},"(default)"))," ",(0,l.mdx)("em",{parentName:"li"},"will")," reuse locally cached data and will ",(0,l.mdx)("em",{parentName:"li"},"only")," send a network request if any data for the query is missing. If the query is fully cached, a network request will ",(0,l.mdx)("em",{parentName:"li"},"not")," be made."),(0,l.mdx)("li",{parentName:"ul"},'"store-and-network": ',(0,l.mdx)("em",{parentName:"li"},"will")," reuse locally cached data and will ",(0,l.mdx)("em",{parentName:"li"},"always")," send a network request, regardless of whether any data was missing from the local cache or not."),(0,l.mdx)("li",{parentName:"ul"},'"network-only": ',(0,l.mdx)("em",{parentName:"li"},"will")," ",(0,l.mdx)("em",{parentName:"li"},"not")," reuse locally cached data, and will ",(0,l.mdx)("em",{parentName:"li"},"always")," send a network request to fetch the query, ignoring any data that might be locally cached in Relay."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"networkCacheConfig"),": ",(0,l.mdx)("em",{parentName:"li"},(0,l.mdx)("em",{parentName:"em"},"[Optional]"))," Default value: ",(0,l.mdx)("inlineCode",{parentName:"li"},"{force: true}"),". Object containing cache config options for the ",(0,l.mdx)("em",{parentName:"li"},"network layer"),". Note that the network layer may contain an ",(0,l.mdx)("em",{parentName:"li"},"additional")," query response cache which will reuse network responses for identical queries. If you want to bypass this cache completely (which is the default behavior), pass ",(0,l.mdx)("inlineCode",{parentName:"li"},"{force: true}")," as the value for this option."))))))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"disposeQuery"),": a callback that, when executed, will set ",(0,l.mdx)("inlineCode",{parentName:"li"},"queryReference")," to ",(0,l.mdx)("inlineCode",{parentName:"li"},"null")," and call ",(0,l.mdx)("inlineCode",{parentName:"li"},".dispose()")," on it. It has type ",(0,l.mdx)("inlineCode",{parentName:"li"},"() => void"),". It should not be called during React's render phase.")),(0,l.mdx)("h3",{id:"behavior"},"Behavior"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The ",(0,l.mdx)("inlineCode",{parentName:"li"},"loadQuery")," callback will fetch data if passed a query, or data and the query if passed a preloadable concrete request. Once both the query and data are available, the data from the query will be written to the store. This differs from the behavior of ",(0,l.mdx)("inlineCode",{parentName:"li"},"preloadQuery_DEPRECATED"),", which would only write data to the store if the query was passed to ",(0,l.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery"),"."),(0,l.mdx)("li",{parentName:"ul"},"This query reference will be retained by the Relay store, preventing the data from being garbage collected. Once ",(0,l.mdx)("inlineCode",{parentName:"li"},".dispose()")," is called on the query reference, the data is liable to be garbage collected."),(0,l.mdx)("li",{parentName:"ul"},"The ",(0,l.mdx)("inlineCode",{parentName:"li"},"loadQuery")," callback will throw an error if it is called during React's render phase.")),(0,l.mdx)(i.Z,{mdxType:"DocsRating"}))}y.isMDXComponent=!0}}]);