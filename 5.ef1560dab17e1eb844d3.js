(Function("return this")().webpackChunk_masx200_my_vue_router_project=Function("return this")().webpackChunk_masx200_my_vue_router_project||[]).push([[5],{9:function(t,n,a){"use strict";a.r(n),a.d(n,{default:function(){return w},hashchangehandler:function(){return g},router:function(){return f}});var i=a(10),e=a.n(i),s=a(6),r=a(1),o=s.Z.extend({name:"App",data:function(){return{isActive1:"#/"==window.location.hash,isActive2:"#/huami"==window.location.hash,isActive3:"#/about"==window.location.hash}},methods:{togglecollapsenavbar:function(){e()("#example-navbar-collapse").toggle()},myfreshdata:function(){this.isActive1="#/"===window.location.hash,this.isActive2="#/huami"===window.location.hash,this.isActive3="#/about"===window.location.hash}},mounted:function(){var t=document.getElementById(r.I);t&&(t.style.display="none"),this.myfreshdata(),g(),e()("#mynavul").click(g),e()("#my\u4e3b\u4f53").css("padding-top",e()("#my\u5bfc\u822a\u680f").height()),requestAnimationFrame((function(){e()("#my\u4e3b\u4f53").css("padding-top",e()("#my\u5bfc\u822a\u680f").height())}));var n=setInterval((function(){e()("#my\u4e3b\u4f53").css("padding-top",e()("#my\u5bfc\u822a\u680f").height())}),0);setTimeout((function(){e()("#my\u4e3b\u4f53").css("padding-top",e()("#my\u5bfc\u822a\u680f").height()),clearInterval(n)}),1e3)}}),l=a(11),u=(0,l.Z)(o,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",{staticClass:"fixed-top container-fluid",attrs:{id:"my\u5bfc\u822a\u680f"}},[a("nav",{staticClass:"\n                navbar navbar-default navbar navbar-expand-sm\n                bg-light\n                navbar-light\n            ",attrs:{role:"navigation"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"navbar-header"},[a("a",{staticClass:"\n                            navbar-brand\n                            mui-btn mui-btn-primary mui-btn-outlined\n                        ",attrs:{href:"./index.html"}},[t._v("masx200\u7684github\u4e3b\u9875")]),t._v(" "),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#example-navbar-collapse"},on:{click:t.togglecollapsenavbar}},[a("span",{staticClass:"navbar-toggler-icon"})])]),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"example-navbar-collapse"}},[a("ul",{staticClass:"nav navbar-nav",attrs:{id:"mynavul"},on:{click:t.myfreshdata}},[a("li",{class:{active:t.isActive1},attrs:{id:"mynav1"}},[a("router-link",{staticClass:"\n                                    nav-link\n                                    mui-btn mui-btn-primary mui-btn-outlined\n                                ",attrs:{to:"/"}},[t._v("\u57fa\u4e8eVUE\u7684\u9996\u9875")])],1),t._v(" "),a("li",{class:{active:t.isActive2},attrs:{id:"mynav2"}},[a("router-link",{staticClass:"\n                                    nav-link\n                                    mui-btn mui-btn-primary mui-btn-outlined\n                                ",attrs:{to:"/huami"}},[t._v("\u82b1\u5bc6\u7f51\u9875\u7248")])],1),t._v(" "),a("li",{class:{active:t.isActive3},attrs:{id:"mynav3"}},[a("router-link",{staticClass:"\n                                    nav-link\n                                    mui-btn mui-btn-primary mui-btn-outlined\n                                ",attrs:{to:"/about"}},[t._v("\u5173\u4e8eVUE")])],1),t._v(" "),a("li",[a("router-link",{staticClass:"\n                                    nav-link\n                                    mui-btn mui-btn-primary mui-btn-outlined\n                                ",attrs:{to:"/vue-simple-global-state-store-manager"}},[t._v("\u9002\u7528\u4e8eVue\u7684\u6781\u7b80\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u5e93")])],1),t._v(" "),a("li",[a("router-link",{staticClass:"\n                                    nav-link\n                                    mui-btn mui-btn-primary mui-btn-outlined\n                                ",attrs:{to:"/beautify-javascript"}},[t._v("\u7f8e\u5316javascript\u4ee3\u7801")])],1)])])])])]),t._v(" "),a("div",{staticClass:"container",staticStyle:{"min-width":"100%","padding-top":"53px"},attrs:{id:"my\u4e3b\u4f53"}},[a("router-view")],1)])}),[],!1,null,null,null).exports,c=a(4),m=a(7),v=(0,l.Z)({},(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",[a("h1",[t._v("loading")]),t._v(" "),a("span",{staticClass:"mui-spinner mui-spinner-custom"})])])}],!1,null,null,null).exports;function d(t){return function(){return{component:t(),loading:v}}}var h=function(){return a.e(9).then(a.bind(a,13))},p=[["/about",function(){return a.e(8).then(a.bind(a,12))}],["/",h],["/huami",function(){return a.e(10).then(a.bind(a,14))}],["/vue-simple-global-state-store-manager",function(){return a.e(11).then(a.bind(a,15))}],["/beautify-javascript",function(){return Promise.all([a.e(12),a.e(13),a.e(14)]).then(a.bind(a,16))}],["*",h]],b=new m.Z({routes:(0,c.Z)(p.map((function(t){return{path:t[0],component:d(t[1])}})))});b.onError((function(t){throw t}));var f=b,g=y;function y(){scrollTo(0,0),e()("#example-navbar-collapse").hide(),e()("#my\u4e3b\u4f53").css("padding-top",e()("#my\u5bfc\u822a\u680f").height())}e()(window).on("hashchange",y);var _=0;0==_&&(_=1),window.addEventListener("resize",(function(){requestAnimationFrame((function(){e()("#my\u4e3b\u4f53").css("padding-top",e()("#my\u5bfc\u822a\u680f").height())}))}));var w=u}}]);