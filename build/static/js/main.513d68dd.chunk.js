(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=t(2),l=(t(19),t(3)),i=t.n(l),m="/api/persons",s=function(){return i.a.get(m)},f=function(e){return i.a.post(m,e)},d=function(e){return i.a.delete("".concat(m,"/").concat(e))},h=function(e,n){return i.a.put("".concat(m,"/").concat(e),n)},p=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"message"},n)},b=function(e){var n=e.errorMessage;return null===n?null:r.a.createElement("div",{className:"error-message"},n)},v=function(e){var n=e.filter,t=e.handleChange;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},E=function(e){var n=e.onSubmit,t=e.name,a=e.number,o=e.handleNameChange,u=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:o})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.persons,t=e.personFilter,a=e.handleRemovePerson;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement(j,{key:e.name,person:e,handleRemovePerson:a})}))},j=function(e){var n=e.person,t=e.handleRemovePerson;return r.a.createElement("p",null," ",n.name," ",n.number," ",r.a.createElement("button",{onClick:function(){return t(n.id)}},"delete")," ")},w=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),l=Object(c.a)(u,2),i=l[0],m=l[1],j=Object(a.useState)(""),w=Object(c.a)(j,2),O=w[0],C=w[1],S=Object(a.useState)(""),k=Object(c.a)(S,2),N=k[0],T=k[1],y=Object(a.useState)(null),P=Object(c.a)(y,2),R=P[0],F=P[1],D=Object(a.useState)(null),I=Object(c.a)(D,2),J=I[0],L=I[1];Object(a.useEffect)((function(){s().then((function(e){o(e.data)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{message:R}),r.a.createElement(b,{errorMessage:J}),r.a.createElement(v,{filter:N,handleChange:function(e){T(e.target.value)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(E,{name:i,number:O,handleNameChange:function(e){m(e.target.value)},handleNumberChange:function(e){C(e.target.value)},onSubmit:function(e){e.preventDefault();var n={name:i,number:O};void 0===t.find((function(e){return e.name===i}))?f(n).then((function(e){o(t.concat(e.data)),F("Added ".concat(i)),setTimeout((function(){F(null)}),3e3)})).catch((function(e){console.log(e.response.data),e.response.data?L("".concat(e.response.data.error)):L("Failed to add ".concat(i," to phonebook.")),setTimeout((function(){L(null)}),5e3)})):window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one ?"))&&h(t.filter((function(e){return e.name===i})).map((function(e){return e.id})),n).then((function(){o(t.map((function(e){return e.name===i?n:e}))),F("Updated ".concat(i,"'s phone number to ").concat(O)),setTimeout((function(){F(null)}),3e3)})).catch((function(e){L("Information of ".concat(i," has already been removed from server.")),setTimeout((function(){L(null)}),3e3),o(t.filter((function(e){return e.name!==i})))})),m(""),C("")}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(g,{persons:t,personFilter:N,handleRemovePerson:function(e){window.confirm("Delete ".concat(t.filter((function(n){return n.id===e})).map((function(e){return e.name})).join()," ?"))&&d(e).then((function(){o(t.filter((function(n){return n.id!==e}))),F("Removed ".concat(t.filter((function(n){return n.id===e})).map((function(e){return e.name})).join())),setTimeout((function(){F(null)}),3e3)})).catch((function(n){L("Failed to remove ".concat(t.filter((function(n){return n.id===e})).map((function(e){return e.name})).join()," from database.")),setTimeout((function(){L(null)}),3e3)}))}}))};u.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.513d68dd.chunk.js.map