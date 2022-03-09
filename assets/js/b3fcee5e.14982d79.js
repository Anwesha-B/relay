(self.webpackChunk=self.webpackChunk||[]).push([[49323],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>c});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){return function(n){var t=p(n.components);return r.createElement(e,i({},n,{components:t}))}},p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,h=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return t?r.createElement(h,l(l({ref:n},d),{},{components:t})):r.createElement(h,l({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},78367:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>c,default:()=>u});var r=t(74034),a=t(79973),i=(t(67294),t(3905)),o=["components"],l={id:"upgrading-setvariables",title:"Upgrading setVariables",original_id:"upgrading-setvariables"},s=void 0,d={unversionedId:"upgrading-setvariables",id:"version-v9.0.0/upgrading-setvariables",isDocsHomePage:!1,title:"Upgrading setVariables",description:"Examples on how to migrate this.props.setVariables calls from the old API.",source:"@site/versioned_docs/version-v9.0.0/Modern-UpgradingSetVariables.md",sourceDirName:".",slug:"/upgrading-setvariables",permalink:"/docs/v9.0.0/upgrading-setvariables",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v9.0.0/Modern-UpgradingSetVariables.md",tags:[],version:"v9.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1646799494,formattedLastUpdatedAt:"3/9/2022",frontMatter:{id:"upgrading-setvariables",title:"Upgrading setVariables",original_id:"upgrading-setvariables"}},c=[{value:"<code>initialVariables</code>",id:"initialvariables",children:[],level:2},{value:"Pagination",id:"pagination",children:[],level:2},{value:"Changing Arguments",id:"changing-arguments",children:[],level:2},{value:"Show More",id:"show-more",children:[],level:2}],p={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("blockquote",null,"Examples on how to migrate ",(0,i.mdx)("code",null,"this.props.setVariables")," calls from the old API."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"this.props.setVariables")," from the old API does not have a direct equivalent in the new API. A big reason for this change is that the new core no longer tracks how to refetch any specific sub-tree from the query. This makes the new core a lot faster, but requires explicit queries for how to fetch new data. Check out these four different scenarios:"),(0,i.mdx)("h2",{id:"initialvariables"},(0,i.mdx)("inlineCode",{parentName:"h2"},"initialVariables")),(0,i.mdx)("p",null,"If the component doesn't actually use ",(0,i.mdx)("inlineCode",{parentName:"p"},"setVariables()"),", and just uses ",(0,i.mdx)("inlineCode",{parentName:"p"},"initialVariables")," to share values between JS and GraphQL, there are two alternative approaches:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Inline the value in the GraphQL query, potentially annotating with a GraphQL comment (i.e. ",(0,i.mdx)("inlineCode",{parentName:"li"},"# PAGE_SIZE"),")."),(0,i.mdx)("li",{parentName:"ul"},"Add the variable to the queries that use the fragment and pass it in when fetching the query. For this it can be useful to have a module with a collection of variables for your product.")),(0,i.mdx)("h2",{id:"pagination"},"Pagination"),(0,i.mdx)("p",null,"Typical Relay Classic code:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"\n// counterexample\nthis.props.relay.setVariables({\n  count: count + 10,\n});\n\ninitialVariables: {\n  count: 10,\n},\n\nfragment on User {\n  friends(first: $count) {\n    # ...\n  }\n}\n")),(0,i.mdx)("p",null,"This should be upgraded to use a ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v9.0.0/pagination-container"},(0,i.mdx)("inlineCode",{parentName:"a"},"PaginationContainer")),"."),(0,i.mdx)("h2",{id:"changing-arguments"},"Changing Arguments"),(0,i.mdx)("p",null,"Typical old code:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"\n// counterexample\nthis.props.relay.setVariables({\n  search: newSearchTerm,\n});\n\ninitialVariables: {\n  search: '',\n}\n\nfragment on User {\n  friends(named: $search, first: 10) {\n    # ...\n  }\n}\n")),(0,i.mdx)("p",null,"This can be upgraded by using a ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v9.0.0/refetch-container"},(0,i.mdx)("inlineCode",{parentName:"a"},"RefetchContainer"))," which allows you to specify the exact query to use to fetch the new data."),(0,i.mdx)("h2",{id:"show-more"},"Show More"),(0,i.mdx)("p",null,"Typical old code:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"\n// counterexample\nthis.props.relay.setVariables({\n  showComments: true,\n});\n\ninitialVariables: {\n  showComments: false,\n}\n\nfragment on FeedbackTarget {\n  comments(first: 10) @include(if: $showComments) {\n    # ...\n  }\n}\n")),(0,i.mdx)("p",null,"This can be upgraded by conditionally rendering a ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v9.0.0/query-renderer"},(0,i.mdx)("inlineCode",{parentName:"a"},"QueryRenderer"))," which will load the data once it is rendered. The code overhead of doing this is dramatically reduced with the new API."),(0,i.mdx)("p",null,"Alternatively a ",(0,i.mdx)("a",{parentName:"p",href:"/docs/v9.0.0/refetch-container"},(0,i.mdx)("inlineCode",{parentName:"a"},"RefetchContainer"))," can also be used."))}u.isMDXComponent=!0}}]);