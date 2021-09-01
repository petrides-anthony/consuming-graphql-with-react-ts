(this["webpackJsonpconsuming-graphql-with-react-ts"]=this["webpackJsonpconsuming-graphql-with-react-ts"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),a=n(6),i=n.n(a),r=(n(13),n(14),n(35)),h=n(4),o=(n(15),n(1)),d=function(t){var e=t.width,n=t.height,c=t.children,a=s.a.useState(-e),i=Object(h.a)(a,2),r=i[0],d=i[1];return s.a.useEffect((function(){d(0)}),[]),Object(o.jsx)(s.a.Fragment,{children:Object(o.jsxs)("div",{className:"side-bar",style:{transform:"translatex(".concat(r,"px)"),width:e,minHeight:n},children:[Object(o.jsx)("button",{onClick:function(){d(r<0?0:-e)},className:"toggle-menu",style:{transform:"translate(".concat(e,"px, 20vh)")}}),Object(o.jsx)("div",{className:"content",children:c})]})})},l=function(){var t=function(){var t=s.a.useState([]),e=Object(h.a)(t,2),n=e[0],c=e[1];return s.a.useEffect((function(){fetch("https://api.spacex.land/graphql/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n{\n  launchesPast(limit: 10) {\n    id\n    mission_name\n    launch_date_local\n    launch_success\n  }\n}\n"})}).then((function(t){return t.json()})).then((function(t){return c(t.data.launchesPast)}))}),[]),n}();return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Space X: Last 10 Missions"}),Object(o.jsx)("ul",{className:"ul",children:t.map((function(t){return Object(o.jsxs)("li",{children:[t.mission_name," ",t.launch_success?"\u2705":"\u274c"]},t.id)}))})]})};var j=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"App-header",children:Object(o.jsxs)(r.a,{container:!0,spacing:2,children:[Object(o.jsx)(r.a,{item:!0,md:3,sm:6,children:Object(o.jsxs)(d,{width:300,height:"100vh",children:[Object(o.jsx)("h2",{children:"Exercises"}),Object(o.jsxs)("p",{children:["Start adding types/ interfaces to GQL project",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Think about what if you want to display this data in a card component. Where you click it and it displays further details. Think about error handling if the fetch goes wrong."]})]})}),Object(o.jsx)(r.a,{item:!0,xs:3,md:6,children:Object(o.jsx)(l,{})})]})}),Object(o.jsx)("body",{})]})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.df28d3d1.chunk.js.map