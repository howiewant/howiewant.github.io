"use strict";(self.webpackChunkhowie_blog=self.webpackChunkhowie_blog||[]).push([[1117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7384:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u5173\u4e8e"},l="Tutorial Intro",s={type:"mdx",permalink:"/about",source:"@site/src/pages/about.md",title:"\u5173\u4e8e",description:"Let's discover Docusaurus in less than 5 minutes.",frontMatter:{title:"\u5173\u4e8e"}},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Generate a new site",id:"generate-a-new-site",level:2},{value:"Start your site",id:"start-your-site",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],i={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tutorial-intro"},"Tutorial Intro"),(0,a.kt)("p",null,"Let's discover ",(0,a.kt)("strong",{parentName:"p"},"Docusaurus in less than 5 minutes"),"."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Get started by ",(0,a.kt)("strong",{parentName:"p"},"creating a new site"),"."),(0,a.kt)("p",null,"Or ",(0,a.kt)("strong",{parentName:"p"},"try Docusaurus immediately")," with ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docusaurus.new"},"docusaurus.new")),"."),(0,a.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 16.14 or above:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies.")))),(0,a.kt)("h2",{id:"generate-a-new-site"},"Generate a new site"),(0,a.kt)("p",null,"Generate a new Docusaurus site using the ",(0,a.kt)("strong",{parentName:"p"},"classic template"),"."),(0,a.kt)("p",null,"The classic template will automatically be added to your project after you run the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init docusaurus@latest my-website classic\n")),(0,a.kt)("p",null,"You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."),(0,a.kt)("p",null,"The command also installs all necessary dependencies you need to run Docusaurus."),(0,a.kt)("h2",{id:"start-your-site"},"Start your site"),(0,a.kt)("p",null,"Run the development server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-website\nnpm run start\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run start")," command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/."),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," (this page) and edit some lines: the site ",(0,a.kt)("strong",{parentName:"p"},"reloads automatically")," and displays your changes."),(0,a.kt)("h1",{id:"congratulations"},"Congratulations!"),(0,a.kt)("p",null,"You have just learned the ",(0,a.kt)("strong",{parentName:"p"},"basics of Docusaurus")," and made some changes to the ",(0,a.kt)("strong",{parentName:"p"},"initial template"),"."),(0,a.kt)("p",null,"Docusaurus has ",(0,a.kt)("strong",{parentName:"p"},"much more to offer"),"!"),(0,a.kt)("h2",{id:"whats-next"},"What's next?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read the ",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"official documentation"),"."),(0,a.kt)("li",{parentName:"ul"},"Add a custom ",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/styling-layout"},"Design and Layout")),(0,a.kt)("li",{parentName:"ul"},"Add a ",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/search"},"search bar")),(0,a.kt)("li",{parentName:"ul"},"Find inspirations in the ",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/showcase"},"Docusaurus showcase")),(0,a.kt)("li",{parentName:"ul"},"Get involved in the ",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/community/support"},"Docusaurus Community"))))}p.isMDXComponent=!0}}]);