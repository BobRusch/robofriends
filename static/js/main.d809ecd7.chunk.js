(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n(3),o=n.n(s),i=(n(13),n(4)),a=n(5),h=n(7),l=n(6),b=(n(14),function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})}),d=(n(15),function(e){var t=e.name,n=e.email,r=e.id;return Object(c.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(c.jsx)("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"Pic Of Robot"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("p",{children:n})]})]})}),u=function(e){var t=e.robots;return Object(c.jsx)("div",{children:t.map((function(e,n){return Object(c.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=function(e){e.searchfield;var t=e.searchChange;return Object(c.jsx)("div",{className:"pa2",children:Object(c.jsx)("input",{className:"pa3 p b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:" RoboFriends "}),Object(c.jsx)(j,{searchChange:this.onSearchChange}),Object(c.jsx)(b,{children:Object(c.jsx)(u,{robots:r})})]}):Object(c.jsx)("h1",{children:"Loading..."})}}]),n}(r.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};n(16);o.a.render(Object(c.jsx)(f,{}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.d809ecd7.chunk.js.map