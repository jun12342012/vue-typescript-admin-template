(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["draggable-list"],{"9d25":function(t,e,i){"use strict";i.d(e,"b",function(){return s}),i.d(e,"d",function(){return r}),i.d(e,"c",function(){return n}),i.d(e,"a",function(){return l}),i.d(e,"f",function(){return c}),i.d(e,"e",function(){return o});var a=i("b32d"),s={id:0,status:"draft",title:"",fullContent:"",abstractContent:"",sourceURL:"",imageURL:"",timestamp:"",platforms:["a-platform"],disableComment:!1,importance:0,author:"",reviewer:"",type:"",pageviews:0},r=function(t){return Object(a["a"])({url:"/articles",method:"get",params:t})},n=function(t,e){return Object(a["a"])({url:"/articles/".concat(t),method:"get",params:e})},l=function(t){return Object(a["a"])({url:"/articles",method:"post",data:t})},c=function(t,e){return Object(a["a"])({url:"/articles/".concat(t),method:"put",data:e})},o=function(t){return Object(a["a"])({url:"/pageviews",method:"get",params:t})}},c9da:function(t,e,i){},e699:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"components-container"},[t._m(0),i("div",{staticClass:"editor-container"},[i("draggable-list",{attrs:{list1:t.list1,list2:t.list2,"list1-title":"List","list2-title":"Article pool"}})],1)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside",[t._v("\n    draggable-list base on\n    "),i("a",{attrs:{href:"https://github.com/SortableJS/Vue.Draggable",target:"_blank"}},[t._v("Vue.Draggable")])])}],r=(i("96cf"),i("3b8d")),n=i("d225"),l=i("b0b4"),c=i("308d"),o=i("6bb5"),u=i("4e2b"),d=i("9ab4"),f=i("60a3"),b=i("9d25"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"draggableList"},[i("div",{staticClass:"draggableList-list",style:{width:t.list1width}},[i("h3",[t._v(t._s(t.list1Title))]),i("draggable",{staticClass:"dragArea",attrs:{list:t.list1,group:"article"}},t._l(t.list1,function(e){return i("div",{key:e.id,staticClass:"list-complete-item"},[i("div",{staticClass:"list-complete-item-handle"},[t._v("\n          "+t._s(e.id)+"["+t._s(e.author)+"] "+t._s(e.title)+"\n        ")]),i("div",{staticStyle:{position:"absolute",right:"0px"}},[i("span",{staticStyle:{float:"right","margin-top":"-20px","margin-right":"5px"},on:{click:function(i){return t.deleteEle(e)}}},[i("i",{staticClass:"el-icon-delete",staticStyle:{color:"#ff4949"}})])])])}),0)],1),i("div",{staticClass:"draggableList-list",style:{width:t.list2width}},[i("h3",[t._v(t._s(t.list2Title))]),i("draggable",{staticClass:"dragArea",attrs:{list:t.list2,group:"article"}},t._l(t.list2,function(e){return i("div",{key:e.id,staticClass:"list-complete-item"},[i("div",{staticClass:"list-complete-item-handle2",on:{click:function(i){return t.pushEle(e)}}},[t._v("\n          "+t._s(e.id)+" ["+t._s(e.author)+"] "+t._s(e.title)+"\n        ")])])}),0)],1)])},p=[],v=(i("ac4d"),i("8a81"),i("ac6a"),i("310e")),g=i.n(v),m=function(t){function e(){return Object(n["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(l["a"])(e,[{key:"isNotInList1",value:function(t){return this.list1.every(function(e){return t.id!==e.id})}},{key:"isNotInList2",value:function(t){return this.list2.every(function(e){return t.id!==e.id})}},{key:"deleteEle",value:function(t){var e=!0,i=!1,a=void 0;try{for(var s,r=this.list1[Symbol.iterator]();!(e=(s=r.next()).done);e=!0){var n=s.value;if(n.id===t.id){var l=this.list1.indexOf(n);this.list1.splice(l,1);break}}}catch(c){i=!0,a=c}finally{try{e||null==r.return||r.return()}finally{if(i)throw a}}this.isNotInList2(t)&&this.list2.unshift(t)}},{key:"pushEle",value:function(t){var e=!0,i=!1,a=void 0;try{for(var s,r=this.list2[Symbol.iterator]();!(e=(s=r.next()).done);e=!0){var n=s.value;if(n.id===t.id){var l=this.list2.indexOf(n);this.list2.splice(l,1);break}}}catch(c){i=!0,a=c}finally{try{e||null==r.return||r.return()}finally{if(i)throw a}}this.isNotInList1(t)&&this.list1.push(t)}}]),e}(f["c"]);d["a"]([Object(f["b"])({default:function(){return[]}})],m.prototype,"list1",void 0),d["a"]([Object(f["b"])({default:function(){return[]}})],m.prototype,"list2",void 0),d["a"]([Object(f["b"])({default:"list1"})],m.prototype,"list1Title",void 0),d["a"]([Object(f["b"])({default:"list2"})],m.prototype,"list2Title",void 0),d["a"]([Object(f["b"])({default:"48%"})],m.prototype,"list1width",void 0),d["a"]([Object(f["b"])({default:"48%"})],m.prototype,"list2width",void 0),m=d["a"]([Object(f["a"])({name:"DraggableList",components:{Draggable:g.a}})],m);var y=m,O=y,j=(i("f9e8"),i("0c7c")),_=Object(j["a"])(O,h,p,!1,null,"ac130cd8",null),w=_.exports,k=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.list1=[],t.list2=[],t}return Object(u["a"])(e,t),Object(l["a"])(e,[{key:"created",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(b["d"])({});case 2:e=t.sent,i=e.data,this.list1=i.items.splice(0,5),this.list2=i.items;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}]),e}(f["c"]);k=d["a"]([Object(f["a"])({name:"DraggableListDemo",components:{DraggableList:w}})],k);var C=k,L=C,x=Object(j["a"])(L,a,s,!1,null,null,null);e["default"]=x.exports},f9e8:function(t,e,i){"use strict";var a=i("c9da"),s=i.n(a);s.a}}]);