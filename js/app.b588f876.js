(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],f=0,d=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={1:0},a={1:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{2:"69efd77f",3:"a9aec188",4:"b47db8ed",5:"57cad25f",6:"ef0754d4",7:"9428e805",8:"13a6e2d9",9:"def244fa",10:"6bfb49fc",11:"3f854809",12:"1d2b4dc6",13:"35f31e0f",14:"affc4881"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={2:1,3:1,4:1,5:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"e7de44fd",3:"ed78e612",4:"47f9d274",5:"b9c94c9b",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0",14:"31d6cfe0"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],l.parentNode.removeChild(l),n(u)},l.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=i(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=f;u.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"login",(function(){return $})),n.d(r,"user",(function(){return V})),n.d(r,"apps",(function(){return z})),n.d(r,"getColunas",(function(){return J})),n.d(r,"newUser",(function(){return Q})),n.d(r,"redirect",(function(){return F}));var o={};n.r(o),n.d(o,"login",(function(){return H})),n.d(o,"user",(function(){return K})),n.d(o,"apps",(function(){return G})),n.d(o,"setColunas",(function(){return W})),n.d(o,"newUser",(function(){return X})),n.d(o,"redirect",(function(){return Y}));var a={};n.r(a),n.d(a,"login",(function(){return te})),n.d(a,"alwaysOn",(function(){return ne}));var u={};n.r(u),n.d(u,"getLoadingLayout",(function(){return ae})),n.d(u,"getDrawer",(function(){return ue}));var i={};n.r(i),n.d(i,"setLoadingLayout",(function(){return ie})),n.d(i,"setDrawer",(function(){return ce}));var c={};n.r(c),n.d(c,"getSaving",(function(){return le})),n.d(c,"getStep",(function(){return pe}));var s={};n.r(s),n.d(s,"setSaving",(function(){return he})),n.d(s,"setStep",(function(){return ge}));var f={};n.r(f),n.d(f,"sendRegister",(function(){return me}));var d={};n.r(d),n.d(d,"getOpenModalShowUser",(function(){return we})),n.d(d,"getSelectedUserId",(function(){return ye}));var l={};n.r(l),n.d(l,"setOpenModalShowUser",(function(){return xe})),n.d(l,"setSelectedUserId",(function(){return ke}));var p={};n.r(p),n.d(p,"someAction",(function(){return Se}));var h={};n.r(h),n.d(h,"getSelectedUserId",(function(){return je}));var g={};n.r(g),n.d(g,"setSelectedUserId",(function(){return Ae}));var m={};n.r(m),n.d(m,"someAction",(function(){return Le}));var v=n("c973"),b=n.n(v),w=(n("96cf"),n("ac1f"),n("5319"),n("5c7d"),n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),y=n("1f91"),x=n("42d2"),k=n("b05d"),S=n("7cbe"),P=n("7f67"),U=n("2a19"),j=n("515f"),A=n("f508"),L=n("436b"),O=n("9c64"),C=n("18d6");w["a"].use(k["a"],{config:{},lang:y["a"],iconSet:x["a"],components:{QPopupProxy:S["a"]},directives:{ClosePopup:P["a"]},plugins:{Notify:U["a"],Cookies:j["a"],Loading:A["a"],Dialog:L["a"],Meta:O["a"],LocalStorage:C["a"]}});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},q=[],E={name:"App"},I=E,_=n("2877"),M=Object(_["a"])(I,R,q,!1,null,null,null),T=M.exports,N=n("2f62"),B=n("0e44"),D=function(){return{login:{message:"",isLogged:!1},user:{},apps:[],colunas:[],newUser:!1,redirect:""}};function $(e){return e.login}function V(e){return e.user}function z(e){return e.apps}function J(e){return e.colunas}function Q(e){return e.newUser}function F(e){return e.redirect}function H(e,t){e.login.message=t.message,e.login.isLogged=t.isLogged}function K(e,t){e.user=t}function G(e,t){e.apps=t}function W(e,t){e.colunas=t}function X(e,t){e.newUser=t}function Y(e,t){e.redirect=t}n("d3b7"),n("e6cf");var Z=n("bc3a"),ee=n.n(Z);function te(e,t){e.commit;return new Promise((function(e,n){ee.a.post("/auth/login",t,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){e(t)})).catch((function(e){n(e)}))}))}function ne(e){var t=this;e.commit,e.state;return new Promise((function(e,n){t.$axios.post("/auth/token").then((function(t){e(t)})).catch((function(e){n(e)}))}))}ee.a.defaults.baseURL="https://api.cadastrare.com.br/api/v1";var re={namespaced:!0,state:D,getters:r,mutations:o,actions:a},oe=function(){return{loadingLayout:!1,drawer:!1}};function ae(e){return e.loadingLayout}function ue(e){return e.drawer}function ie(e,t){e.loadingLayout=t}function ce(e,t){e.drawer=t}var se=n("ffea"),fe={namespaced:!0,state:oe,getters:u,mutations:i,actions:se},de=function(){return{saving:!1,step:1}};function le(e){return e.saving}function pe(e){return e.step}function he(e,t){e.saving=t}function ge(e,t){e.step=t}function me(e,t){var n=e.commit;n("setSaving",!0),ee.a.post("/users/register",t,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){e.data.success?(U["a"].create({message:e.data.message,color:"green",position:"top-right"}),n("setStep",3)):U["a"].create({message:e.data.message,color:"orange",position:"top-right"}),n("setSaving",!1)})).catch((function(){n("setSaving",!1),U["a"].create({message:"Algo inesperado aconteceu, e não foi possível finalizar o Registro.",color:"red",position:"top-right"})}))}ee.a.defaults.baseURL="https://api.cadastrare.com.br/api/v1";var ve={namespaced:!0,state:de,getters:c,mutations:s,actions:f},be=function(){return{openModalUser:!1,selectedUserId:null}};function we(e){return e.openModalUser}function ye(e){return e.selectedUserId}function xe(e,t){e.openModalShowUser=t}function ke(e,t){e.selectedUserId=t}function Se(){}var Pe={namespaced:!0,getters:d,mutations:l,actions:p,state:be},Ue=function(){return{selectedUserId:null}};function je(e){return e.selectedUserId}function Ae(e,t){e.selectedUserId=t}function Le(){}var Oe={namespaced:!0,getters:h,mutations:g,actions:m,state:Ue};w["a"].use(N["a"]);var Ce=function(){var e=new N["a"].Store({modules:{login:re,utils:fe,register:ve,users:Pe,forms:Oe},plugins:[Object(B["a"])()],strict:!1});return e},Re=n("8c4f"),qe=(n("e260"),n("3ca3"),n("ddb0"),function(){var e=[{path:"/",component:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"713b"))},meta:{requiresAuth:!0},children:[{path:"",redirect:"/fichas"},{path:"fichas",component:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"f981"))}},{path:"usuarios",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"051b"))}},{path:"perfil",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"2ff9"))}}]},{path:"/login",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"013f"))},meta:{requiresAuth:!1}},{path:"/criar-conta",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"3851"))},meta:{requiresAuth:!1}},{path:"*",component:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"e51e"))},meta:{requiresAuth:!1}}];return e});w["a"].use(Re["a"]);var Ee=function(e){return e.router=new Re["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:qe(e),mode:"history",base:"/"}),e.router.beforeEach((function(e,t,n){var r=j["a"];e.matched.some((function(e){return e.meta.requiresAuth}))&&!r.get("token")?n("/login"):!e.matched.some((function(e){return e.meta.requiresAuth}))&&"/login"===e.matched.path&&r.get("token")?n("/"):e.matched.some((function(e){return e.meta.requiresAuth}))||"/login"===e.matched.path||r.remove("token"),n()})),e.router},Ie=function(){return _e.apply(this,arguments)};function _e(){return _e=b()(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof Ce){e.next=6;break}return e.next=3,Ce({Vue:w["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=Ce;case 7:if(t=e.t0,"function"!==typeof Ee){e.next=14;break}return e.next=11,Ee({Vue:w["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=Ee;case 15:return n=e.t1,t.$router=n,r={router:n,store:t,render:function(e){return e(T)}},r.el="#q-app",e.abrupt("return",{app:r,store:t,router:n});case 20:case"end":return e.stop()}}),e)}))),_e.apply(this,arguments)}var Me=[],Te=function(e){return function(){var t=b()(regeneratorRuntime.mark((function t(n){var r,o,a,u,i,c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=n.app,o=n.router,a=n.store,"function"!==typeof e){t.next=13;break}if(i=e(n),!i.then){t.next=9;break}return t.next=6,i;case 6:t.t0=t.sent,t.next=10;break;case 9:t.t0=i;case 10:u=t.t0,t.next=14;break;case 13:u=e;case 14:for(s in c=function(e){var t="$".concat(e);-1===Me.indexOf(e)&&(Me.push(e),w["a"].mixin({beforeCreate:function(){var n=this.$options;n[e]?this[t]=n[e]:n.parent&&(this[t]=n.parent[t])}})),r[e]=u[e],a[t]=u[e],o[t]=u[e]},u)c(s);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Ne=Te,Be=Ne(function(){var e=b()(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.ssrContext,t.store,t.router,n=ee.a.create({baseURL:"https://api.cadastrare.com.br/api/v1",headers:{"Content-Type":"application/json",Accept:"application/json"}}),r=j["a"],n.interceptors.request.use((function(e){var t=r.get("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)})),e.abrupt("return",{axios:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),De="/";function $e(){return Ve.apply(this,arguments)}function Ve(){return Ve=b()(regeneratorRuntime.mark((function e(){var t,n,r,o,a,u,i,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ie();case 2:t=e.sent,n=t.app,r=t.store,o=t.router,a=!1,u=function(e){a=!0;var t=Object(e)===e?o.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),c=[Be],s=0;case 11:if(!(!1===a&&s<c.length)){e.next=29;break}if("function"===typeof c[s]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,c[s]({app:n,router:o,store:r,Vue:w["a"],ssrContext:null,redirect:u,urlPath:i,publicPath:De});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:s++,e.next=11;break;case 29:if(!0!==a){e.next=31;break}return e.abrupt("return");case 31:new w["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),Ve.apply(this,arguments)}$e()},"31cd":function(e,t,n){},ffea:function(e,t){}});