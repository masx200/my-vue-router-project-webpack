(Function("return this")().webpackChunk_masx200_my_vue_router_project=Function("return this")().webpackChunk_masx200_my_vue_router_project||[]).push([[10],{13:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var r=t(5),a=t(9),o=t.n(a),s=function(){function e(e,n){var t=(65535&e)+(65535&n);return(e>>16)+(n>>16)+(t>>16)<<16|65535&t}function n(n,t,r,a,o,s){return e((c=e(e(t,n),e(a,s)))<<(i=o)|c>>>32-i,r);var c,i}function t(e,t,r,a,o,s,c){return n(t&r|~t&a,e,t,o,s,c)}function r(e,t,r,a,o,s,c){return n(t&a|r&~a,e,t,o,s,c)}function a(e,t,r,a,o,s,c){return n(t^r^a,e,t,o,s,c)}function o(e,t,r,a,o,s,c){return n(r^(t|~a),e,t,o,s,c)}function s(n,s){n[s>>5]|=128<<s%32,n[14+(s+64>>>9<<4)]=s;var c,i,u,l,d,v=1732584193,m=-271733879,p=-1732584194,f=271733878;for(c=0;c<n.length;c+=16)i=v,u=m,l=p,d=f,v=t(v,m,p,f,n[c],7,-680876936),f=t(f,v,m,p,n[c+1],12,-389564586),p=t(p,f,v,m,n[c+2],17,606105819),m=t(m,p,f,v,n[c+3],22,-1044525330),v=t(v,m,p,f,n[c+4],7,-176418897),f=t(f,v,m,p,n[c+5],12,1200080426),p=t(p,f,v,m,n[c+6],17,-1473231341),m=t(m,p,f,v,n[c+7],22,-45705983),v=t(v,m,p,f,n[c+8],7,1770035416),f=t(f,v,m,p,n[c+9],12,-1958414417),p=t(p,f,v,m,n[c+10],17,-42063),m=t(m,p,f,v,n[c+11],22,-1990404162),v=t(v,m,p,f,n[c+12],7,1804603682),f=t(f,v,m,p,n[c+13],12,-40341101),p=t(p,f,v,m,n[c+14],17,-1502002290),v=r(v,m=t(m,p,f,v,n[c+15],22,1236535329),p,f,n[c+1],5,-165796510),f=r(f,v,m,p,n[c+6],9,-1069501632),p=r(p,f,v,m,n[c+11],14,643717713),m=r(m,p,f,v,n[c],20,-373897302),v=r(v,m,p,f,n[c+5],5,-701558691),f=r(f,v,m,p,n[c+10],9,38016083),p=r(p,f,v,m,n[c+15],14,-660478335),m=r(m,p,f,v,n[c+4],20,-405537848),v=r(v,m,p,f,n[c+9],5,568446438),f=r(f,v,m,p,n[c+14],9,-1019803690),p=r(p,f,v,m,n[c+3],14,-187363961),m=r(m,p,f,v,n[c+8],20,1163531501),v=r(v,m,p,f,n[c+13],5,-1444681467),f=r(f,v,m,p,n[c+2],9,-51403784),p=r(p,f,v,m,n[c+7],14,1735328473),v=a(v,m=r(m,p,f,v,n[c+12],20,-1926607734),p,f,n[c+5],4,-378558),f=a(f,v,m,p,n[c+8],11,-2022574463),p=a(p,f,v,m,n[c+11],16,1839030562),m=a(m,p,f,v,n[c+14],23,-35309556),v=a(v,m,p,f,n[c+1],4,-1530992060),f=a(f,v,m,p,n[c+4],11,1272893353),p=a(p,f,v,m,n[c+7],16,-155497632),m=a(m,p,f,v,n[c+10],23,-1094730640),v=a(v,m,p,f,n[c+13],4,681279174),f=a(f,v,m,p,n[c],11,-358537222),p=a(p,f,v,m,n[c+3],16,-722521979),m=a(m,p,f,v,n[c+6],23,76029189),v=a(v,m,p,f,n[c+9],4,-640364487),f=a(f,v,m,p,n[c+12],11,-421815835),p=a(p,f,v,m,n[c+15],16,530742520),v=o(v,m=a(m,p,f,v,n[c+2],23,-995338651),p,f,n[c],6,-198630844),f=o(f,v,m,p,n[c+7],10,1126891415),p=o(p,f,v,m,n[c+14],15,-1416354905),m=o(m,p,f,v,n[c+5],21,-57434055),v=o(v,m,p,f,n[c+12],6,1700485571),f=o(f,v,m,p,n[c+3],10,-1894986606),p=o(p,f,v,m,n[c+10],15,-1051523),m=o(m,p,f,v,n[c+1],21,-2054922799),v=o(v,m,p,f,n[c+8],6,1873313359),f=o(f,v,m,p,n[c+15],10,-30611744),p=o(p,f,v,m,n[c+6],15,-1560198380),m=o(m,p,f,v,n[c+13],21,1309151649),v=o(v,m,p,f,n[c+4],6,-145523070),f=o(f,v,m,p,n[c+11],10,-1120210379),p=o(p,f,v,m,n[c+2],15,718787259),m=o(m,p,f,v,n[c+9],21,-343485551),v=e(v,i),m=e(m,u),p=e(p,l),f=e(f,d);return[v,m,p,f]}function c(e){var n,t="";for(n=0;n<32*e.length;n+=8)t+=String.fromCharCode(e[n>>5]>>>n%32&255);return t}function i(e){var n,t=[];for(t[(e.length>>2)-1]=void 0,n=0;n<t.length;n+=1)t[n]=0;for(n=0;n<8*e.length;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<n%32;return t}function u(e){var n,t,r="0123456789abcdef",a="";for(t=0;t<e.length;t+=1)n=e.charCodeAt(t),a+=r.charAt(n>>>4&15)+r.charAt(15&n);return a}function l(e){return unescape(encodeURIComponent(e))}function d(e){return function(e){return c(s(i(e),8*e.length))}(l(e))}function v(e,n){return function(e,n){var t,r,a=i(e),o=[],u=[];for(o[15]=u[15]=void 0,a.length>16&&(a=s(a,8*e.length)),t=0;t<16;t+=1)o[t]=909522486^a[t],u[t]=1549556828^a[t];return r=s(o.concat(i(n)),512+8*n.length),c(s(u.concat(r),640))}(l(e),l(n))}return function(e,n,t){return n?t?v(n,e):u(v(n,e)):t?d(e):u(d(e))}}(),c=r.Z.extend({mounted:function(){document.title="masx200\u7684github\u4e3b\u9875-\u82b1\u5bc6  \u4e0d\u4e00\u6837\u7684\u5bc6\u7801\u7ba1\u7406\u5de5\u5177"},name:"huami",data:function(){return{message1:"",message2:"",message3:""}},methods:{functioncopy:function(){this.message3&&(o()("#copyOK").show(),o()("#copyOK").fadeTo(0,0).css("border-color","#22B614").css("background-color","#22B614").fadeTo("fast",1).fadeTo(2e3,1).fadeTo(3e3,0,(function(){o()("#copyOK").hide()})))},handlechange:function(){var e=this.message1,n=this.message2;if(e&&n){for(var t=s(e,n),r=s(t,"snow"),a=s(t,"kise").split(""),o=r.split(""),c=0;c<=31;c++)if(Number.isNaN(Number(o[c]))){"sunlovesnow1990090127xykab".search(a[c])>-1&&(o[c]=o[c].toUpperCase())}var i,u=o.join(""),l=u.slice(0,1);i=Number.isNaN(Number(l))?u.slice(0,16):"K"+u.slice(1,16),this.message3=i}}}}),i=(0,t(10).Z)(c,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello flowerpassword"},[t("h1",[e._v("\u82b1\u5bc6 \u4e0d\u4e00\u6837\u7684\u5bc6\u7801\u7ba1\u7406\u5de5\u5177")]),e._v(" "),t("div",{staticClass:"container",staticStyle:{"text-align":"center"},attrs:{id:"rong1"}},[t("div",{attrs:{id:"rong2"}},[e._m(0),e._v(" "),t("div",{attrs:{id:"input"}},[t("p"),e._v(" "),t("h3",[e._v("\u8bb0\u5fc6\u5bc6\u7801")]),e._v(" "),t("p"),e._v(" "),t("p",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.message1,expression:"message1"}],staticClass:"\n                            col-lg-12 col-md-12 col-sm-12 col-xs-12\n                            form-control\n                        ",attrs:{id:"password",placeholder:"\u8f93\u5165\u5bc6\u7801",name:"password",type:"password",value:"",tabindex:"1"},domProps:{value:e.message1},on:{change:function(n){return e.handlechange()},input:[function(n){n.target.composing||(e.message1=n.target.value)},function(n){return e.handlechange()}]}})]),e._v(" "),t("p"),e._v(" "),t("span",[e._v("+")]),e._v(" "),t("h3",[e._v("\u533a\u5206\u4ee3\u53f7")]),e._v(" "),t("p"),e._v(" "),t("p",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.message2,expression:"message2"}],staticClass:"\n                            col-lg-12 col-md-12 col-sm-12 col-xs-12\n                            form-control\n                        ",attrs:{id:"key",placeholder:"\u8f93\u5165\u4ee3\u53f7",name:"key",type:"text",value:"",tabindex:"2"},domProps:{value:e.message2},on:{change:function(n){return e.handlechange()},input:[function(n){n.target.composing||(e.message2=n.target.value)},function(n){return e.handlechange()}]}})])]),e._v(" "),t("br"),e._v(" "),t("p"),e._v(" "),e._m(1),e._v(" "),t("p"),e._v(" "),t("div",{attrs:{id:"get"}},[t("p",{attrs:{id:"tuijian"}}),e._v(" "),t("p"),e._v(" "),t("h3",[e._v("\u6700\u7ec8\u5bc6\u7801")]),e._v(" "),t("p"),e._v(" "),t("span",{attrs:{id:"myhezi"}},[t("p",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.message3,expression:"message3"}],staticClass:"\n                                col-lg-12 col-md-12 col-sm-12 col-xs-12\n                                snippet\n                                code16d\n                                form-control\n                            ",attrs:{id:"code16",readonly:""},domProps:{value:e.message3},on:{input:function(n){n.target.composing||(e.message3=n.target.value)}}})]),e._v(" "),t("br"),e._v(" "),t("p",[t("button",{staticClass:"btn-lg btn copycode16d btn-info",staticStyle:{width:"100%"},attrs:{id:"copycode16","data-clipboard-target":"#code16"},on:{click:e.functioncopy}},[e._v("\n                            \u70b9\u51fb\u590d\u5236\n                        ")])])]),e._v(" "),e._m(2),e._v(" "),t("p")])])])])}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h2",[t("span",[e._v("1")]),e._v("\n                \u8f93\u5165\n            ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h2",[t("span",[e._v("2")]),e._v("\n                \u83b7\u53d6\n            ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("span",{staticStyle:{display:"none"},attrs:{id:"copyOK"}},[e._v("\u221a\u590d\u5236\u6210\u529f")])])}],!1,null,null,null).exports}}]);