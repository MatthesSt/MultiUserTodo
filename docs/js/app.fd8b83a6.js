(function(e){function t(t){for(var r,o,i=t[0],l=t[1],u=t[2],s=0,d=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},c=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8bf3844d"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var u=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(s);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",u.name="ChunkLoadError",u.type=r,u.request=c,a[1](u)}n[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/MultiUserTodo/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=u;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},2175:function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,"h3[data-v-2cfc558a]{margin:40px 0 0}ul[data-v-2cfc558a]{list-style-type:none;padding:0}li[data-v-2cfc558a]{display:inline-block;margin:0 10px}a[data-v-2cfc558a]{color:#42b983}",""]),e.exports=t},"54c1":function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}#nav{padding:30px}#nav a{font-weight:700;color:#2c3e50}#nav a.router-link-exact-active{color:#42b983}",""]),e.exports=t},"7e9b":function(e,t,a){var r=a("54c1");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=a("499e").default;n("1011dd4e",r,!0,{sourceMap:!1,shadowMode:!1})},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),n={id:"nav"},c=Object(r["g"])("Home"),o=Object(r["g"])(" | "),i=Object(r["g"])("About");function l(e,t){var a=Object(r["x"])("router-link"),l=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",n,[Object(r["h"])(a,{to:"/"},{default:Object(r["C"])((function(){return[c]})),_:1}),o,Object(r["h"])(a,{to:"/about"},{default:Object(r["C"])((function(){return[i]})),_:1})]),Object(r["h"])(l)],64)}a("f4c1");var u=a("6b0d"),s=a.n(u);const f={},d=s()(f,[["render",l]]);var v=d,p=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),b=a("cf05"),h=a.n(b),g={class:"home"},j=Object(r["e"])("img",{alt:"Vue logo",src:h.a},null,-1);function m(e,t,a,n,c,o){var i=Object(r["x"])("HelloWorld");return Object(r["q"])(),Object(r["d"])("div",g,[j,Object(r["h"])(i,{msg:"Welcome to Your Vue.js + TypeScript App"})])}var O=a("bee2"),k=a("d4ec"),y=a("262e"),w=a("2caf"),_=a("9ab4"),x=a("ce1f"),M={class:"hello"},P=Object(r["f"])('<p data-v-2cfc558a> For a guide and recipes on how to configure / customize this project,<br data-v-2cfc558a> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-2cfc558a>vue-cli documentation</a>. </p><h3 data-v-2cfc558a>Installed CLI Plugins</h3><ul data-v-2cfc558a><li data-v-2cfc558a><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-2cfc558a>babel</a></li><li data-v-2cfc558a><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-2cfc558a>router</a></li><li data-v-2cfc558a><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-2cfc558a>eslint</a></li><li data-v-2cfc558a><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener" data-v-2cfc558a>typescript</a></li></ul><h3 data-v-2cfc558a>Essential Links</h3><ul data-v-2cfc558a><li data-v-2cfc558a><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-2cfc558a>Core Docs</a></li><li data-v-2cfc558a><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-2cfc558a>Forum</a></li><li data-v-2cfc558a><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-2cfc558a>Community Chat</a></li><li data-v-2cfc558a><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-2cfc558a>Twitter</a></li><li data-v-2cfc558a><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-2cfc558a>News</a></li></ul><h3 data-v-2cfc558a>Ecosystem</h3><ul data-v-2cfc558a><li data-v-2cfc558a><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-2cfc558a>vue-router</a></li><li data-v-2cfc558a><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-2cfc558a>vuex</a></li><li data-v-2cfc558a><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-2cfc558a>vue-devtools</a></li><li data-v-2cfc558a><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-2cfc558a>vue-loader</a></li><li data-v-2cfc558a><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-2cfc558a>awesome-vue</a></li></ul>',7);function A(e,t,a,n,c,o){return Object(r["q"])(),Object(r["d"])("div",M,[Object(r["e"])("h1",null,Object(r["z"])(e.msg),1),P])}var C=function(e){Object(y["a"])(a,e);var t=Object(w["a"])(a);function a(){return Object(k["a"])(this,a),t.apply(this,arguments)}return Object(O["a"])(a)}(x["b"]);C=Object(_["a"])([Object(x["a"])({props:{msg:String}})],C);var S=C;a("fa3c");const T=s()(S,[["render",A],["__scopeId","data-v-2cfc558a"]]);var E=T,q=function(e){Object(y["a"])(a,e);var t=Object(w["a"])(a);function a(){return Object(k["a"])(this,a),t.apply(this,arguments)}return Object(O["a"])(a)}(x["b"]);q=Object(_["a"])([Object(x["a"])({components:{HelloWorld:E}})],q);var H=q;const L=s()(H,[["render",m]]);var F=L,N=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],W=Object(p["a"])({history:Object(p["b"])(),routes:N}),z=W,I=a("c7eb"),U=a("1da1"),J=(a("d81d"),a("9483"));Object(J["a"])("".concat("/MultiUserTodo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var V="v0.1";self.addEventListener("activate",(function(e){e.waitUntil(Object(U["a"])(Object(I["a"])().mark((function e(){var t;return Object(I["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,caches.keys();case 2:return t=e.sent,e.abrupt("return",t.map(function(){var e=Object(U["a"])(Object(I["a"])().mark((function e(t){return Object(I["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t===V){e.next=5;break}return console.log("Service Worker: Removing old cache: "+t),e.next=4,caches.delete(t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:case"end":return e.stop()}}),e)})))())})),Object(r["c"])(v).use(z).mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},d218:function(e,t,a){var r=a("2175");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=a("499e").default;n("77ca64e6",r,!0,{sourceMap:!1,shadowMode:!1})},f4c1:function(e,t,a){"use strict";a("7e9b")},fa3c:function(e,t,a){"use strict";a("d218")}});
//# sourceMappingURL=app.fd8b83a6.js.map