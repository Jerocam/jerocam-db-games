(this["webpackJsonpdb-react-games"]=this["webpackJsonpdb-react-games"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(0),a=c.n(n),r=c(7),i=c.n(r),l=(c(15),c(16),c(8)),o=c(20),j=c(21),b=c(9);function h(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://rawg.io/api/collections/must-play/games").then((function(e){return e.json()})).then((function(e){var t=e.results;return a(t)}))})),Object(s.jsxs)("div",{className:"fluid-container",children:[Object(s.jsx)("div",{class:"alert alert-primary text-center",role:"alert",children:Object(s.jsxs)("h5",{children:["Click ",Object(s.jsx)("a",{href:"https://github.com/Jerocam/jerocam-db-games",class:"alert-link",children:"the link"})," to get the source code from GitHub"]})}),Object(s.jsxs)(o.a,{className:"bg-img",children:[Object(s.jsxs)("h1",{children:["Hello, Videogamer! ",Object(s.jsx)(b.a,{className:"fsize"})]}),Object(s.jsxs)("h4",{children:["This is a simple videogame unit, using react ",Object(s.jsx)("br",{}),"to call API from RAWG videogames Database ",Object(s.jsx)("br",{}),"and get an information about top games and others."]}),Object(s.jsx)("div",{children:Object(s.jsx)(j.a,{href:"https://rawg.io/",variant:"light",size:"lg",target:"_blank",children:"Learn More"})})]}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h2",{children:"Top 2021 Games"}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("ol",{children:c.map((function(e,t){return Object(s.jsxs)("li",{className:"shadow imgSize",children:[Object(s.jsx)("img",{className:"mr-3 border border-dark",src:e.background_image,alt:"imgame"}),Object(s.jsx)("h3",{children:e.name})]},t)}))})})]})]})}c(17);var d=function(){return Object(s.jsx)(a.a.Fragment,{children:Object(s.jsx)(h,{})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};i.a.render(Object(s.jsx)(d,{}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.2eceda0a.chunk.js.map