"use strict";(self.webpackChunktrefle_docs=self.webpackChunktrefle_docs||[]).push([[122],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},791:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={id:"distributions",title:"Distributions",image:"/img/distributions-world.png"},l=void 0,c={unversionedId:"advanced/distributions",id:"advanced/distributions",title:"Distributions",description:"Specification",source:"@site/docs/advanced/distributions.md",sourceDirName:"advanced",slug:"/advanced/distributions",permalink:"/docs/advanced/distributions",draft:!1,editUrl:"https://github.com/treflehq/documentation/edit/master/docs/advanced/distributions.md",tags:[],version:"current",lastUpdatedBy:"Andr\xe9 Aubin",lastUpdatedAt:1670748298,formattedLastUpdatedAt:"Dec 11, 2022",frontMatter:{id:"distributions",title:"Distributions",image:"/img/distributions-world.png"},sidebar:"someSidebar",previous:{title:"Complete our data",permalink:"/docs/advanced/complete-data"},next:{title:"Snippets",permalink:"/docs/examples/snippets"}},d={},p=[{value:"Specification",id:"specification",level:3},{value:"List of zones",id:"list-of-zones",level:3},{value:"Mapping zones to a map",id:"mapping-zones-to-a-map",level:3}],u={toc:p};function f(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"specification"},"Specification"),(0,o.kt)("p",null,"In Trefle, the distribution zones for ",(0,o.kt)("em",{parentName:"p"},"plants")," are following the ",(0,o.kt)("a",{parentName:"p",href:"https://www.tdwg.org/standards/wgsrpd/"},"World Geographical Scheme for Recording Plant Distributions (WGSRPD)"),"."),(0,o.kt)("p",null,'WGSRPD provides an agreed system of geographical units at approximately "country" level and upwards for use in recording plant distributions.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The system offered covers the whole world and identifies units at four levels"),', firstly continental, secondly regional (or subcontinental), thirdly at what may be called "Botanical Country" level (which may often ignore purely political considerations), and fourthly at a slightly lower level called "Basic Recording Units" where political integrity is fully recognised.'),(0,o.kt)("p",null,"In many cases, where Botanical Countries have no complicating political factors, the units at Level-3 and Level-4 are identical. Very large countries, however, have been subdivided into more conveniently sized units according to constituent states or provinces. It is a fundamental principle that units at all levels are bounded either by political boundaries which appear on modern maps or by coast lines."),(0,o.kt)("h3",{id:"list-of-zones"},"List of zones"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"List of zones",src:n(3760).Z,width:"2880",height:"1576"})),(0,o.kt)("p",null,"A complete list of zones is ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_codes_used_in_the_World_Geographical_Scheme_for_Recording_Plant_Distributions"},"available on Wikipedia")),(0,o.kt)("h3",{id:"mapping-zones-to-a-map"},"Mapping zones to a map"),(0,o.kt)("p",null,"Trefle does not provides coordinates for the species distribution zones yet. In the meantime, you can find GeoJSON files for each zones ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tdwg/wgsrpd/tree/master/geojson"},"on the TDWG Github repository"),"."))}f.isMDXComponent=!0},3760:function(e,t,n){t.Z=n.p+"assets/images/distributions-world-748df09d279e24fb5275aeb8c114a59b.png"}}]);