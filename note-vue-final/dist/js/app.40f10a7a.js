(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0320":function(t,e,n){"use strict";var a=n("1b22"),o=n.n(a);o.a},"080e":function(t,e,n){"use strict";var a=n("8c5f"),o=n.n(a);o.a},"1b22":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav"),n("b-card",{staticClass:"title",attrs:{overlay:"","text-variant":"white",title:"Your Company Name...","img-src":"https://picsum.photos//1000/300?image=1016","img-alt":"Card image","img-top":""}},[n("b-card-text",{attrs:{id:"text"}},[t._v(" Your Company name can be displayed here"),n("br"),t._v(" This app will help you keep your employess notified "),n("br"),t._v(" for any task that is important to you"),n("br"),t._v(" A Login page will be available soon ")])],1),n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",[n("b-card",{staticClass:"text-center",staticStyle:{"max-width":"100rem"},attrs:{"img-src":"https://mopinion.com/wp-content/uploads/2019/09/website-content-cover-image-1800x650.jpeg","img-alt":"Image","img-top":"",tag:"article"}},[n("NewNote",{on:{"note-added":t.newNoteAdded}})],1)],1),n("b-col",[n("b-card",{staticClass:"text-center",staticStyle:{"max-width":"100rem"},attrs:{title:"Work List","img-src":"https://picsum.photos/600/300/?image=1048","img-alt":"Image","img-top":"",tag:"article"}},[n("Notes",{attrs:{notes:t.notes},on:{"delete-note":t.NoteCompleteOrN}})],1)],1)],1)],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.length,expression:"errors.length"}],staticClass:"alert alert-danger"},t._l(t.errors,(function(e){return n("li",{key:e},[t._v(" "+t._s(e))])})),0),n("div",[n("h4",{staticClass:"card-title"},[t._v("Work orders")]),n("div",{staticClass:"form-group"},[n("b-form-input",{staticClass:"form-control",attrs:{placeholder:"Name of the staff...",id:"name"},model:{value:t.newstaffName,callback:function(e){t.newstaffName="string"===typeof e?e.trim():e},expression:"newstaffName"}})],1),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newtitleName,expression:"newtitleName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"Title...",id:"Title"},domProps:{value:t.newtitleName},on:{input:function(e){e.target.composing||(t.newtitleName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"form-group"},[n("b-form-datepicker",{staticClass:"form-control",attrs:{placeholder:"Pick a Date...",id:"Date"},model:{value:t.newDate,callback:function(e){t.newDate="string"===typeof e?e.trim():e},expression:"newDate"}})],1),n("div",{staticClass:"form-group"},[n("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.newbodymessage,expression:"newbodymessage",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:"Message...",id:"Message"},domProps:{value:t.newbodymessage},on:{input:function(e){e.target.composing||(t.newbodymessage=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("b-button",{staticClass:"btn btn-primary",attrs:{variant:"success"},on:{click:function(e){return e.preventDefault(),t.addNote(e)}}},[t._v("Submit")])],1)])},s=[],l={name:"NewNote",data:function(){return{newstaffName:"",newtitleName:"",newDate:"",newbodymessage:"",errors:[]}},methods:{addNote:function(){if(this.errors=[],this.newstaffName&&this.newtitleName&&this.newDate&&this.newbodymessage){var t={name:this.newstaffName,Title:this.newtitleName,Message:this.newbodymessage,Date:this.newDate};this.$emit("note-added",t),this.newstaffName="",this.newtitleName="",this.newbodymessage="",this.newDate=""}else this.newstaffName?this.newtitleName?this.newbodymessage?this.newDate||this.errors.push("Date is required "):this.errors.push("Message is required "):this.errors.push("Title is required "):this.errors.push("Name is required ")}}},c=l,u=n("2877"),d=Object(u["a"])(c,i,s,!1,null,null,null),m=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card note-list m-2 p-2"},[n("div",{attrs:{id:"note-table"}},[n("table",{staticClass:"table"},[t._m(0),t._l(t.notes,(function(e){return n("Note",{key:e.Title,attrs:{note:e},on:{"delete-note":t.notestatus}})}))],2)])])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Name")]),n("th",[t._v("Title")]),n("th",[t._v("Message")]),n("th",[t._v("Date")]),n("th",[t._v("Status")])])}],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v(t._s(t.note.name))]),n("td",[t._v(t._s(t.note.Title))]),n("b-button",{attrs:{pill:"",variant:"light",id:"show-btn"},on:{click:function(e){return t.$bvModal.show("bv-modal-example")}}},[t._v("See Message")]),n("b-modal",{attrs:{id:"bv-modal-example","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" Massege From "+t._s(t.note.name)+" ")]},proxy:!0}])},[n("div",{staticClass:"d-block text-center"},[n("h3",[n("td",[t._v(t._s(t.note.Message))])])]),n("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:function(e){return t.$bvModal.hide("bv-modal-example")}}},[t._v("Close")])],1),n("td",[t._v(t._s(t.note.Date))]),n("td",[n("input",{attrs:{name:"flavour-4a",id:"checkbox1",type:"checkbox"},on:{click:function(e){return t.deleteNote(t.note)}}}),t._v(" Completed?")])],1)},v=[],b={name:"Note",props:{note:Object},methods:{deleteNote:function(t){confirm("If you completed then note will be deleted. Are you sure?")&&this.$emit("delete-note",t)}}},g=b,w=(n("080e"),Object(u["a"])(g,h,v,!1,null,null,null)),N=w.exports,_={name:"Notes",components:{Note:N},props:{notes:Array},methods:{notestatus:function(t){this.$emit("delete-note",t)}}},y=_,x=Object(u["a"])(y,p,f,!1,null,null,null),C=x.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("b-nav",[n("b-nav-item",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"/...",title:"Comming Soon..."}},[t._v("Logout")]),n("b-nav-item",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"https://github.com/Sargazi77/2_Final",title:"Go to Github "}},[t._v("Github")]),n("b-nav-text",{attrs:{id:"text"}},[t._v("Welcome User (admin)")])],1)],1)},O=[],$={},j=$,D=(n("0320"),Object(u["a"])(j,k,O,!1,null,"4b12f835",null)),M=D.exports,S={name:"app",data:function(){return{notes:[]}},components:{NewNote:m,Notes:C,Nav:M},mounted:function(){this.updateNote()},methods:{newNoteAdded:function(t){var e=this;this.$note_api.addNote(t).then((function(t){e.updateNote()}))},NoteCompleteOrN:function(t){var e=this;this.$note_api.deleteNote(t).then((function(){e.updateNote()}))},updateNote:function(){var t=this;this.$note_api.getallNotes().then((function(e){t.notes=e}))}}},T=S,P=Object(u["a"])(T,o,r,!1,null,null,null),E=P.exports,A=n("5f5b"),q=n("bc3a"),G=n.n(q),I="/api/notes",L={getallNotes:function(){return G.a.get(I).then((function(t){return t.data}))},addNote:function(t){return G.a.post(I,t).then((function(t){return t.data}))},updateNote:function(t){return G.a.patch("".concat(I,"/").concat(t.id),t).then((function(t){return t.data}))},deleteNote:function(t){return G.a["delete"]("".concat(I,"/").concat(t.id),t).then((function(t){return t.data}))}};n("f9e3"),n("2dd8");a["default"].use(A["a"]),a["default"].config.productionTip=!1,a["default"].prototype.$note_api=L,new a["default"]({render:function(t){return t(E)}}).$mount("#app")},"8c5f":function(t,e,n){}});
//# sourceMappingURL=app.40f10a7a.js.map