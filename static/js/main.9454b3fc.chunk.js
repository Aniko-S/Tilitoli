(this.webpackJsonptilitoli=this.webpackJsonptilitoli||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),i=n.n(r),o=n(4),u=n.n(o),s=(n(17),n(5)),j=(n(18),n(10));var l=function(t){var e=t.onClick,n=t.children;return n?Object(c.jsx)("button",{className:"numberButton",onClick:e,children:n}):""},a=["1","2","3","4","5","6","7","8",""],x=[].concat(a),b=function(){for(var t=0,e=0;e<x.length-2;e++)for(var n=e+1;n<x.length-1;n++)x[e]>x[n]&&t++;return t%2===0},h=function(){var t=x.length-2,e=x[t];x[t]=x[t-1],x[t-1]=e};var d=function(){return function(){for(var t=x.length-2;t>0;t--){var e=Math.floor(Math.random()*(t+1)),n=[x[e],x[t]];x[t]=n[0],x[e]=n[1]}b()||h()}(),{numberList:x,baseValues:a}};var O=function(){for(var t=[["","",""],["","",""],["","",""]],e=d().numberList,n=[{x:0,y:0,text:e[0]},{x:0,y:1,text:e[1]},{x:0,y:2,text:e[2]},{x:1,y:0,text:e[3]},{x:1,y:1,text:e[4]},{x:1,y:2,text:e[5]},{x:2,y:0,text:e[6]},{x:2,y:1,text:e[7]},{x:2,y:2,text:e[8]}],c=0;c<n.length;c++){var r=n[c].x,i=n[c].y;t[r][i]=n[c]}return t},f=d().baseValues,v=[[f[0],f[1],f[2]],[f[3],f[4],f[5]],[f[6],f[7],f[8]]],m=n(7),y=(n(19),n(9)),k=n.n(y);var g=function(t){var e=t.onClick,n=t.number;return Object(c.jsxs)(m.a,{show:!0,children:[Object(c.jsx)(m.a.Header,{children:Object(c.jsx)("h3",{children:"Great, you solved the puzzle"})}),Object(c.jsxs)(m.a.Body,{children:["Time:"," ",k()(n,{colonNotation:!0,keepDecimalsOnWholeSeconds:!0})]}),Object(c.jsx)(m.a.Footer,{children:Object(c.jsx)("button",{onClick:e,children:"OK"})})]})};var C=function(t){var e=t.setRun,n=t.setNumber,i=t.number,o=Object(r.useState)((function(){return O()})),u=Object(s.a)(o,2),a=u[0],x=u[1],b=Object(r.useState)(!1),h=Object(s.a)(b,2),d=h[0],f=h[1],m=function(t){var e=y(a);k(t,e)&&C(t,e),N()},y=function(){for(var t=0;t<a.length;t++)for(var e=0;e<a.length;e++)if(""===a[t][e].text)return a[t][e]},k=function(t,e){return 1===Math.abs(t.x-e.x)&&t.y===e.y||1===Math.abs(t.y-e.y)&&t.x===e.x},C=function(t,e){var n=[Object(j.a)(a[0]),Object(j.a)(a[1]),Object(j.a)(a[2])],c=t.text;n[t.x][t.y].text=e.text,n[e.x][e.y].text=c,x((function(){return n}))},N=function(){for(var t=0;t<a.length;t++)for(var n=0;n<a[t].length;n++)if(a[t][n].text!==v[t][n])return;f(!0),e(!1)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"container",children:[d&&Object(c.jsx)(g,{number:i,onClick:function(){f(!1),x((function(){return O()})),n(0),e(!0)}}),Object(c.jsxs)("table",{children:[Object(c.jsxs)("tr",{className:"col",children:[Object(c.jsx)("td",{children:Object(c.jsx)(l,{onClick:function(){return m(a[0][0])},children:a[0][0].text})}),Object(c.jsx)("td",{children:Object(c.jsx)(l,{onClick:function(){return m(a[0][1])},children:a[0][1].text})}),Object(c.jsx)("td",{children:Object(c.jsx)(l,{onClick:function(){return m(a[0][2])},children:a[0][2].text})})]}),Object(c.jsxs)("tr",{className:"col",children:[Object(c.jsx)("td",{children:Object(c.jsx)(l,{onClick:function(){return m(a[1][0])},children:a[1][0].text})}),Object(c.jsx)("td",{children:Object(c.jsx)(l,{onClick:function(){return m(a[1][1])},children:a[1][1].text})}),Object(c.jsx)("td",{children:Object(c.jsx)(l,{onClick:function(){return m(a[1][2])},children:a[1][2].text})})]}),Object(c.jsxs)("tr",{className:"col",children:[Object(c.jsx)("td",{children:Object(c.jsx)(l,{onClick:function(){return m(a[2][0])},children:a[2][0].text})}),Object(c.jsx)("td",{children:Object(c.jsx)(l,{onClick:function(){return m(a[2][1])},children:a[2][1].text})}),Object(c.jsx)("td",{children:Object(c.jsx)(l,{onClick:function(){return m(a[2][2])},children:a[2][2].text})})]})]})]})})};var N=function(t){var e=t.run,n=t.number,i=t.setNumber;return Object(r.useEffect)((function(){var t=setInterval((function(){e&&i((function(t){return t+10}))}),10);return function(){return clearInterval(t)}}),[e]),Object(c.jsx)("h1",{children:k()(n,{colonNotation:!0,keepDecimalsOnWholeSeconds:!0})})};var p=function(){var t=Object(r.useState)(!0),e=Object(s.a)(t,2),n=e[0],i=e[1],o=Object(r.useState)(0),u=Object(s.a)(o,2),j=u[0],l=u[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(N,{run:n,number:j,setNumber:l}),Object(c.jsx)(C,{setRun:i,setNumber:l,number:j})]})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),i(t),o(t)}))};u.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),S()}},[[24,1,2]]]);
//# sourceMappingURL=main.9454b3fc.chunk.js.map