(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),o=n.n(r),i=(n(16),n(5)),s=n(6),u=n(7),d=n(11),b=n(10),j=n(8),l=n.n(j),h=n(0),v=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("div",{children:t.map((function(e){return Object(h.jsx)("button",{type:"button",className:l.a.button,onClick:n,children:e},e)}))})},O=n(2),p=n.n(O),f=(n(20),function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Statistics"}),Object(h.jsxs)("p",{children:["Good: ",t]}),Object(h.jsxs)("p",{children:["Neutral: ",n]}),Object(h.jsxs)("p",{children:["Bad: ",c]}),Object(h.jsxs)("p",{children:["Total: ",a]}),Object(h.jsxs)("p",{children:["Positive feedback: ",r,"%"]})]})});f.prototype={good:p.a.number.isRequired,neutral:p.a.number.isRequired,bad:p.a.number.isRequired,total:p.a.number.isRequired,positivePercentage:p.a.number.isRequired};var k=f,x=n(9),g=n.n(x),m=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("div",{className:g.a.section,children:[Object(h.jsx)("h1",{children:t}),n]})},F=function(e){var t=e.message;return Object(h.jsx)("p",{children:t})},P=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countFeedback=function(t){var n=t.currentTarget.textContent;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback();return 0!==t?Math.round(e.state.good/t*100):0},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=Object.keys(this.state),r=this.countTotalFeedback();return Object(h.jsxs)(m,{title:"Please leave feedback",children:[Object(h.jsx)(v,{options:a,onLeaveFeedback:this.countFeedback}),0===r?Object(h.jsx)(F,{message:"No feedback given"}):Object(h.jsx)(k,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),n}(c.Component);n(21);o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={button:"FeedbackOptions_button__1cNrH"}},9:function(e,t,n){e.exports={section:"Section_section__snUHO"}}},[[22,1,2]]]);
//# sourceMappingURL=main.b74edcbd.chunk.js.map