if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,l,s)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(l.map((r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}}))).then((e=>{const r=s(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-7027d4db"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./10.da326bad35ec87623572.js",revision:null},{url:"./11.5d406ad01c12ae333896.js",revision:null},{url:"./12.3ecd753935222a8ac319.js",revision:null},{url:"./13.a14e3218a19d4577a34d.js",revision:null},{url:"./14.275991c1ef017eb13adc.js",revision:null},{url:"./2.4c31924a37f363070c78.js",revision:null},{url:"./2.4c31924a37f363070c78.js.LICENSE.txt",revision:"ba3e0606f5c91946497fb381da37c321"},{url:"./3.79250c304f2d6fc91b0d.js",revision:null},{url:"./3.79250c304f2d6fc91b0d.js.LICENSE.txt",revision:"5b8abc649cf29de3b5de419a078d8c6c"},{url:"./4.5764bbbd788d62485338.js",revision:null},{url:"./4.5764bbbd788d62485338.js.LICENSE.txt",revision:"89123cce5ef7332db0f52238d5ccde29"},{url:"./5.6adedc6136984d68f468.js",revision:null},{url:"./6.86cac2e11584517b16f4.js",revision:null},{url:"./6.86cac2e11584517b16f4.js.LICENSE.txt",revision:"9007bdb4ca2b62e7ae65828b2d190fc6"},{url:"./7.5dbefb572a59500ca6d7.js",revision:null},{url:"./8.618e39d1182e72fa3fcf.js",revision:null},{url:"./9.27f0884fc501940bf01c.js",revision:null},{url:"./babeljs.93957982db09411054d96cee5af63acc.png",revision:null},{url:"./favicon.ico",revision:"3d60db0d77303b2414ddd50cf2472bf7"},{url:"./index.html",revision:"d8c78d751e07f2b20855971fc9c5b800"},{url:"./javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;.1feff74faaf0efc6a044355c92cd15d9.bin",revision:null},{url:"./main.4e87a007bd8a96495a6b.js",revision:null},{url:"./main.cb75bbbe7b42b35faba2.css",revision:null},{url:"./parcel.164cd91c583b612c6a3314f4dee5152b.jpg",revision:null},{url:"./runtime.55b48ab9d12936bcf393.js",revision:null}],{}),e.registerRoute(/.*\.(?:js|html|\/)$/,new e.NetworkFirst,"GET"),e.registerRoute(/.*\.(?:xml|json|md|css)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET")}));
