"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46103],{65203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});n(67294);var i=n(86010),a=n(10833),s=n(35281),l=n(9460),o=n(61460),r=n(51324),c=n(95999),d=n(32244),u=n(85893);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,l.C)(),{title:n,description:i,date:s,tags:o,authors:r,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(a.d,{title:n,description:i,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:s}),r.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:r.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var h=n(39407),f=n(22212);function v(e){let{sidebar:t,children:n}=e;const{metadata:i,toc:a}=(0,l.C)(),{nextItem:s,prevItem:c,frontMatter:d,unlisted:g}=i,{hide_table_of_contents:v,toc_min_heading_level:x,toc_max_heading_level:p}=d;return(0,u.jsxs)(o.Z,{sidebar:t,toc:!v&&a.length>0?(0,u.jsx)(h.Z,{toc:a,minHeadingLevel:x,maxHeadingLevel:p}):void 0,children:[g&&(0,u.jsx)(f.Z,{}),(0,u.jsx)(r.Z,{children:n}),(s||c)&&(0,u.jsx)(m,{nextItem:s,prevItem:c})]})}function x(e){const t=e.content;return(0,u.jsx)(l.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.FG,{className:(0,i.Z)(s.k.wrapper.blogPages,s.k.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(v,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},39407:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var i=n(86010),a=n(93743);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(85893);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,i.Z)(s.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(a.Z,{...n,linkClassName:o,linkActiveClassName:r})})}},93743:(e,t,n)=>{n.d(t,{Z:()=>f});var i=n(67294),a=n(86668);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):i.push(a)})),i}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>o(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,i.useRef)(void 0),n=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let a=t;a<=n;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(39960),m=n(85893);function g(e){let{toc:t,className:n,linkClassName:i,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const h=i.memo(g);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const f=(0,a.L)(),v=c??f.tableOfContents.minHeadingLevel,x=u??f.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>l({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:v,maxHeadingLevel:x});return d((0,i.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:v,maxHeadingLevel:x}}),[o,r,v,x])),(0,m.jsx)(h,{toc:p,className:n,linkClassName:o,...g})}},22212:(e,t,n)=>{n.d(t,{Z:()=>g});n(67294);var i=n(86010),a=n(95999),s=n(35742),l=n(85893);function o(){return(0,l.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(s.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(35281),u=n(59047);function m(e){let{className:t}=e;return(0,l.jsx)(u.Z,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,i.Z)(t,d.k.common.unlistedBanner),children:(0,l.jsx)(r,{})})}function g(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,{...e})]})}},15552:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var i=n(12046),a=n(9460),s=n(52263),l=n(53944),o=n(85893);function r(e){let{relativeUrl:t,id:n,title:i}=e;const{siteConfig:a}=(0,s.Z)(),{url:r}=a;return(0,o.jsx)("div",{className:"margin-top--lg margin-bottom--lg",children:(0,o.jsx)(l.qw,{shortname:"techwriter-pl",config:{url:`${r}${t}`,identifier:n,title:i,language:"pl"}})})}function c(){const{metadata:e,isBlogPostPage:t}=(0,a.C)(),{title:n,date:s,permalink:l}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{}),t&&(0,o.jsx)(r,{title:n,id:s,relativeUrl:l})]})}}}]);