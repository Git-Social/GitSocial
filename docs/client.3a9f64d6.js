webpackJsonp([0,2],[function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e){function n(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=f[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(s(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(s(r.parts[i],e));f[r.id]={id:r.id,refs:1,parts:a}}}}function r(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],a=o[1],s=o[2],u=o[3],c={css:a,media:s,sourceMap:u};n[i]?n[i].parts.push(c):e.push(n[i]={id:i,parts:[c]})}return e}function o(t,e){var n=l(),r=m[m.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function i(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function s(t,e){var n,r,o;if(e.singleton){var s=v++;n=d||(d=a(e)),r=u.bind(null,n,s,!1),o=u.bind(null,n,s,!0)}else n=a(e),r=c.bind(null,n),o=function(){i(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function u(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function c(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},h=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),l=p(function(){return document.head||document.getElementsByTagName("head")[0]}),d=null,v=0,m=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var o=r(t);return n(o,e),function(t){for(var i=[],a=0;a<o.length;a++){var s=o[a],u=f[s.id];u.refs--,i.push(u)}if(t){var c=r(t);n(c,e)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete f[u.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},,function(t,e,n){"use strict";var r=n(2),o=n.n(r),i=n(9);new o.a({el:"#app",router:i.a,render:function(t){return t("router-view")}})},function(t,e,n){"use strict";e["default"]={}},function(t,e,n){"use strict";e["default"]={}},function(t,e,n){"use strict";var r=n(7),o=n(8);e["default"]={components:{Headline:r.a,SignupForm:o.a}}},function(t,e,n){"use strict";var r=n(17),o=n.n(r);n.d(e,"a",function(){return o.a})},function(t,e,n){"use strict";var r=n(18),o=n.n(r);n.d(e,"a",function(){return o.a})},function(t,e,n){"use strict";var r=n(2),o=n.n(r),i=n(23),a=n.n(i),s=n(10);o.a.use(a.a),e.a=new a.a({routes:[{path:"/",component:s.a}]})},function(t,e,n){"use strict";var r=n(19),o=n.n(r);n.d(e,"a",function(){return o.a})},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"body{width:100%;height:100%;margin:0}",""])},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,".Home[data-v-65b0ff47]{text-align:center}.banner[data-v-65b0ff47]{background-color:#fff;margin:40px 0 0;padding:20px}.byline[data-v-65b0ff47]{font:20px Helvetica,Arial,sans-serif}header[data-v-65b0ff47]{margin-bottom:140px}",""])},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,"#mc_embed_signup[data-v-66ff556d]{background:#fff;clear:left;font:14px Helvetica,Arial,sans-serif;width:100%}#mc_embed_signup .email[data-v-66ff556d]{border-radius:0}#mc_embed_signup .button[data-v-66ff556d]{background:#f15a29;border-radius:0}",""])},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,".Headline[data-v-6de377a6]{font-family:Lato,sans-serif;font-size:60px;color:#333;width:623px;margin:0 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}h1[data-v-6de377a6]{display:block;margin:0;padding:0}img[data-v-6de377a6]{height:145px;margin-bottom:35px}",""])},function(t,e,n){t.exports=n.p+"static/media/gitsocial.040fe2c0.svg"},,function(t,e,n){var r,o;n(27),r=n(4);var i=n(22);o=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(o=r=r["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-6de377a6",t.exports=r},function(t,e,n){var r,o;n(26),r=n(5);var i=n(21);o=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(o=r=r["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-66ff556d",t.exports=r},function(t,e,n){var r,o;n(24),n(25),r=n(6);var i=n(20);o=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(o=r=r["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-65b0ff47",t.exports=r},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"Home"},[_h("header",[_h("div",{staticClass:"banner"},[_h("Headline")]),_m(0)]),_h("SignupForm")])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"byline"},["A social meetup for developers"])}]}},function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"SignupForm"},[_h("link",{attrs:{href:"//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css",rel:"stylesheet",type:"text/css"}}),_h("div",{attrs:{id:"mc_embed_signup"}},[_h("form",{staticClass:"validate",attrs:{action:"//social.us14.list-manage.com/subscribe/post?u=df0a22070493c9ccd40e021d7&amp;id=874ebc298a",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:"novalidate"}},[_h("div",{attrs:{id:"mc_embed_signup_scroll"}},[_h("label",{attrs:{"for":"mce-EMAIL"}},["Interested? Want to be a part?"]),_h("input",{staticClass:"email",attrs:{type:"email",value:"",name:"EMAIL",id:"mce-EMAIL",placeholder:"email address",required:"required"}}),_h("div",{attrs:{style:"position: absolute; left: -5000px","aria-hidden":"true"}},[_h("input",{attrs:{type:"text",name:"b_df0a22070493c9ccd40e021d7_874ebc298a",tabindex:"-1",value:""}})]),_h("div",{staticClass:"clear"},[_h("input",{staticClass:"button",attrs:{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe"}})])])])])])}]}},function(module,exports,__webpack_require__){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"Headline"},[_h("h1",["GitSocial",_h("img",{attrs:{src:__webpack_require__(15)}})])])}]}},function(t,e,n){!function(e,n){t.exports=n()}(this,function(){"use strict";function t(t,e,n){if("/"===t.charAt(0))return t;if("?"===t.charAt(0)||"#"===t.charAt(0))return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var o=t.replace(/^\//,"").split("/"),i=0;i<o.length;i++){var a=o[i];"."!==a&&(".."===a?r.pop():r.push(a))}return""!==r[0]&&r.unshift(""),r.join("/")}function e(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function n(t){return t.replace(/\/\//g,"/")}function r(t,e){if(!t)throw new Error("[vue-router] "+e)}function o(t,e){t||"undefined"!=typeof console&&console.warn("[vue-router] "+e)}function i(t,e){if(void 0===e&&(e={}),t){var n;try{n=a(t)}catch(r){o(!1,r.message),n={}}for(var i in e)n[i]=e[i];return n}return e}function a(t){var e=Object.create(null);return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var n=t.replace(/\+/g," ").split("="),r=ut(n.shift()),o=n.length>0?ut(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]}),e):e}function s(t){var e=t?Object.keys(t).sort().map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return st(e);if(Array.isArray(n)){var r=[];return n.slice().forEach(function(t){void 0!==t&&(null===t?r.push(st(e)):r.push(st(e)+"="+st(t)))}),r.join("&")}return st(e)+"="+st(n)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function u(t,e,n){var r={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:e.query||{},params:e.params||{},fullPath:f(e),matched:t?c(t):[]};return n&&(r.redirectedFrom=f(n)),Object.freeze(r)}function c(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function f(t){var e=t.path,n=t.query;void 0===n&&(n={});var r=t.hash;return void 0===r&&(r=""),(e||"/")+s(n)+r}function p(t,e){return e===ct?t===e:!!e&&(t.path&&e.path?t.path.replace(ft,"")===e.path.replace(ft,"")&&t.hash===e.hash&&h(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&h(t.query,e.query)&&h(t.params,e.params)))}function h(t,e){void 0===t&&(t={}),void 0===e&&(e={});var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(function(n){return String(t[n])===String(e[n])})}function l(t,e){return 0===t.path.indexOf(e.path)&&(!e.hash||t.hash===e.hash)&&d(t.query,e.query)}function d(t,e){for(var n in e)if(!(n in t))return!1;return!0}function v(n,r,o){var a="string"==typeof n?{path:n}:n;if(a.name||a._normalized)return a;var s=e(a.path||""),u=r&&r.path||"/",c=s.path?t(s.path,u,o):r&&r.path||"/",f=i(s.query,a.query),p=a.hash||s.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:c,query:f,hash:p}}function m(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=m(e.children)))return e}}function y(t){y.installed||(y.installed=!0,Object.defineProperty(t.prototype,"$router",{get:function(){return this.$root._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this.$root._route}}),t.mixin({beforeCreate:function(){this.$options.router&&(this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current))}}),t.component("router-view",at),t.component("router-link",ht))}function g(t){for(var e,n=[],r=0,o=0,i="";null!=(e=wt.exec(t));){var a=e[0],s=e[1],u=e.index;if(i+=t.slice(o,u),o=u+a.length,s)i+=s[1];else{var c=t[o],f=e[2],p=e[3],h=e[4],l=e[5],d=e[6],v=e[7];i&&(n.push(i),i="");var m=null!=f&&null!=c&&c!==f,y="+"===d||"*"===d,g="?"===d||"*"===d,b=e[2]||"/",w=h||l||(v?".*":"[^"+b+"]+?");n.push({name:p||r++,prefix:f||"",delimiter:b,optional:g,repeat:y,partial:m,asterisk:!!v,pattern:O(w)})}}return o<t.length&&(i+=t.substr(o)),i&&n.push(i),n}function b(t){return _(g(t))}function w(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function x(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function _(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},s=a.pretty?w:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var f,p=i[c.name];if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(dt(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=s(p[h]),!e[u].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(0===h?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?x(p):s(p),!e[u].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');o+=c.prefix+f}}else o+=c}return o}}function k(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function O(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function E(t,e){return t.keys=e,t}function R(t){return t.sensitive?"":"i"}function C(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return E(t,e)}function S(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(T(t[o],e,n).source);var i=new RegExp("(?:"+r.join("|")+")",R(n));return E(i,e)}function A(t,e,n){for(var r=g(t),o=j(r,n),i=0;i<r.length;i++)"string"!=typeof r[i]&&e.push(r[i]);return E(o,e)}function j(t,e){e=e||{};for(var n=e.strict,r=e.end!==!1,o="",i=t[t.length-1],a="string"==typeof i&&/\/$/.test(i),s=0;s<t.length;s++){var u=t[s];if("string"==typeof u)o+=k(u);else{var c=k(u.prefix),f="(?:"+u.pattern+")";u.repeat&&(f+="(?:"+c+f+")*"),f=u.optional?u.partial?c+"("+f+")?":"(?:"+c+"("+f+"))?":c+"("+f+")",o+=f}}return n||(o=(a?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=r?"$":n&&a?"":"(?=\\/|$)",new RegExp("^"+o,R(e))}function T(t,e,n){return e=e||[],dt(e)?n||(n={}):(n=e,e=[]),t instanceof RegExp?C(t,e):dt(t)?S(t,e,n):A(t,e,n)}function $(t){var e=Object.create(null),n=Object.create(null);return t.forEach(function(t){q(e,n,t)}),{pathMap:e,nameMap:n}}function q(t,e,n,o,i){var a=n.path,s=n.name;r(null!=a,'"path" is required in a route configuration.');var u={path:P(a,o),components:n.components||{"default":n.component},instances:{},name:s,parent:o,matchAs:i,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{}};n.children&&n.children.forEach(function(n){q(t,e,n,u)}),n.alias&&(Array.isArray(n.alias)?n.alias.forEach(function(n){q(t,e,{path:n},o,u.path)}):q(t,e,{path:n.alias},o,u.path)),t[u.path]=u,s&&(e[s]=u)}function P(t,e){return t=t.replace(/\/$/,""),"/"===t[0]?t:null==e?t:n(e.path+"/"+t)}function U(t){function e(t,e,n){var r=v(t,e),o=r.name;if(o){var i=f[o];if(i)return r.path=I(i.path,r.params,'named route "'+o+'"'),a(i,r,n)}else if(r.path){r.params={};for(var s in c)if(F(s,r.params,r.path))return a(c[s],r,n)}return a(null,r)}function n(t,n){var i=t.redirect,s="function"==typeof i?i(u(t,n)):i;if("string"==typeof s&&(s={path:s}),!s||"object"!=typeof s)return o(!1,"invalid redirect option: "+JSON.stringify(s)),a(null,n);var c=s,p=c.name,h=c.path,l=n.query,d=n.hash,v=n.params;if(l=c.hasOwnProperty("query")?c.query:l,d=c.hasOwnProperty("hash")?c.hash:d,v=c.hasOwnProperty("params")?c.params:v,p){var m=f[p];return r(m,'redirect failed: named route "'+p+'" not found.'),e({_normalized:!0,name:p,query:l,hash:d,params:v},void 0,n)}if(h){var y=L(h,t),g=I(y,v,'redirect route with path "'+y+'"');return e({_normalized:!0,path:g,query:l,hash:d},void 0,n)}return o(!1,"invalid redirect option: "+JSON.stringify(s)),a(null,n)}function i(t,n,r){var o=I(r,n.params,'aliased route with path "'+r+'"'),i=e({_normalized:!0,path:o});if(i){var s=i.matched,u=s[s.length-1];return n.params=i.params,a(u,n)}return a(null,n)}function a(t,e,r){return t&&t.redirect?n(t,r||e):t&&t.matchAs?i(t,e,t.matchAs):u(t,e,r)}var s=$(t),c=s.pathMap,f=s.nameMap;return e}function F(t,e,n){var r,o,i=xt[t];i?(r=i.keys,o=i.regexp):(r=[],o=vt(t,r),xt[t]={keys:r,regexp:o});var a=n.match(o);if(!a)return!1;if(!e)return!0;for(var s=1,u=a.length;s<u;++s){var c=r[s-1],f="string"==typeof a[s]?decodeURIComponent(a[s]):a[s];c&&(e[c.name]=f)}return!0}function I(t,e,n){try{var o=_t[t]||(_t[t]=vt.compile(t));return o(e||{},{pretty:!0})}catch(i){return r(!1,"missing param for "+n+": "+i.message),""}}function L(e,n){return t(e,n.parent?n.parent.path:"/",!0)}function M(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],function(){r(o+1)}):r(o+1)};r(0)}function H(t){if(!t)if(kt){var e=document.querySelector("base");t=e?e.getAttribute("href"):"/"}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function B(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{activated:e.slice(n),deactivated:t.slice(n)}}function N(t){return D(t,function(t,e){var n=t&&t.beforeRouteLeave;if(n)return function(){return n.apply(e,arguments)}}).reverse()}function V(t,e,n){return D(t,function(t,r,o,i){var a=t&&t.beforeRouteEnter;if(a)return function(t,r,s){return a(t,r,function(t){s(t),"function"==typeof t&&e.push(function(){z(t,o.instances,i,n)})})}})}function z(t,e,n,r){e[n]?t(e[n]):r()&&setTimeout(function(){z(t,e,n,r)},16)}function J(t){return D(t,function(t,e,n,r){if("function"==typeof t&&!t.options)return function(e,i,a){var s=function(t){n.components[r]=t,a()},u=function(t){o(!1,"Failed to resolve async component "+r+": "+t),a(!1)},c=t(s,u);c&&"function"==typeof c.then&&c.then(s,u)}})}function D(t,e){return Array.prototype.concat.apply([],t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function G(t){t&&window.sessionStorage.setItem(t,JSON.stringify({x:window.pageXOffset,y:window.pageYOffset}))}function K(t){if(t)return JSON.parse(window.sessionStorage.getItem(t))}function W(t){var e=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-e.left,y:n.top-e.top}}function X(t){return Q(t.x)||Q(t.y)}function Y(t){return{x:Q(t.x)?t.x:window.pageXOffset,y:Q(t.y)?t.y:window.pageYOffset}}function Q(t){return"number"==typeof t}function Z(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function tt(t,e){var n=window.history;try{e?n.replaceState({key:Ct},"",t):(Ct=Rt(),n.pushState({key:Ct},"",t)),G(Ct)}catch(r){window.location[e?"assign":"replace"](t)}}function et(t){tt(t,!0)}function nt(){var t=rt();return"/"===t.charAt(0)||(it("/"+t),!1)}function rt(){var t=window.location.href,e=t.indexOf("#");return e===-1?"":t.slice(e+1)}function ot(t){window.location.hash=t}function it(t){var e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)}var at={name:"router-view",functional:!0,props:{name:{type:String,"default":"default"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,i=e.data;i.routerView=!0;for(var a=o.$route,s=o._routerViewCache||(o._routerViewCache={}),u=0,c=!1;o;)o.$vnode&&o.$vnode.data.routerView&&u++,o._inactive&&(c=!0),o=o.$parent;i.routerViewDepth=u;var f=a.matched[u];if(!f)return t();var p=n.name,h=c?s[p]:s[p]=f.components[p];if(!c){var l=i.hook||(i.hook={});l.init=function(t){f.instances[p]=t.child},l.destroy=function(t){f.instances[p]===t.child&&(f.instances[p]=void 0)}}return t(h,i,r)}},st=encodeURIComponent,ut=decodeURIComponent,ct=u(null,{path:"/"}),ft=/\/$/,pt=[String,Object],ht={name:"router-link",props:{to:{type:pt,required:!0},tag:{type:String,"default":"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String},render:function(t){var e=this,r=this.$router,o=this.$route,i=v(this.to,o,this.append),a=r.match(i),s=a.redirectedFrom||a.fullPath,c=r.history.base,f=c?n(c+s):s,h={},d=this.activeClass||r.options.linkActiveClass||"router-link-active",y=i.path?u(null,i):a;h[d]=this.exact?p(o,y):l(o,y);var g={click:function(t){t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||0===t.button&&(t.preventDefault(),e.replace?r.replace(i):r.push(i))}},b={"class":h};if("a"===this.tag)b.on=g,b.attrs={href:f};else{var w=m(this.$slots["default"]);if(w){var x=w.data||(w.data={});x.on=g;var _=x.attrs||(x.attrs={});_.href=f}else b.on=g}return t(this.tag,b,this.$slots["default"])}},lt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},dt=lt,vt=T,mt=g,yt=b,gt=_,bt=j,wt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");vt.parse=mt,vt.compile=yt,vt.tokensToFunction=gt,vt.tokensToRegExp=bt;var xt=Object.create(null),_t=Object.create(null),kt="undefined"!=typeof window,Ot=kt&&function(){var t=window.navigator.userAgent;return(t.indexOf("Android 2.")===-1&&t.indexOf("Android 4.0")===-1||t.indexOf("Mobile Safari")===-1||t.indexOf("Chrome")!==-1||t.indexOf("Windows Phone")!==-1)&&(window.history&&"pushState"in window.history)}(),Et=function(t,e){this.router=t,this.base=H(e),this.current=ct,this.pending=null};Et.prototype.listen=function(t){this.cb=t},Et.prototype.transitionTo=function(t,e){var n=this,r=this.router.match(t,this.current);this.confirmTransition(r,function(){n.updateRoute(r),e&&e(r),n.ensureURL()})},Et.prototype.confirmTransition=function(t,e){var n=this,r=this.current;if(p(t,r))return void this.ensureURL();var o=B(this.current.matched,t.matched),i=o.deactivated,a=o.activated,s=[].concat(N(i),this.router.beforeHooks,a.map(function(t){return t.beforeEnter}),J(a));this.pending=t;var u=function(e,o){n.pending===t&&e(t,r,function(t){t===!1?n.ensureURL():"string"==typeof t||"object"==typeof t?n.push(t):o(t)})};M(s,u,function(){var r=[],o=V(a,r,function(){return n.current===t});M(o,u,function(){n.pending===t&&(n.pending=null,e(t),n.router.app.$nextTick(function(){r.forEach(function(t){return t()})}))})})},Et.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(n){n&&n(t,e)})};var Rt=function(){return String(Date.now())},Ct=Rt(),St=function(t){function e(e,n){var r=this;t.call(this,e,n),this.transitionTo(Z(this.base));var o=e.options.scrollBehavior;window.addEventListener("popstate",function(t){Ct=t.state&&t.state.key;var e=r.current;r.transitionTo(Z(r.base),function(t){o&&r.handleScroll(t,e,!0)})}),o&&window.addEventListener("scroll",function(){G(Ct)})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t){var e=this,r=this.current;this.transitionTo(t,function(t){tt(n(e.base+t.fullPath)),e.handleScroll(t,r,!1)})},e.prototype.replace=function(t){var e=this,r=this.current;this.transitionTo(t,function(t){et(n(e.base+t.fullPath)),e.handleScroll(t,r,!1)})},e.prototype.ensureURL=function(){Z(this.base)!==this.current.fullPath&&et(n(this.base+this.current.fullPath))},e.prototype.handleScroll=function(t,e,n){var o=this.router;if(o.app){var i=o.options.scrollBehavior;i&&(r("function"==typeof i,"scrollBehavior must be a function"),o.app.$nextTick(function(){var r=K(Ct),o=i(t,e,n?r:null);if(o){var a="object"==typeof o;if(a&&"string"==typeof o.selector){var s=document.querySelector(o.selector);s?r=W(s):X(o)&&(r=Y(o))}else a&&X(o)&&(r=Y(o));r&&window.scrollTo(r.x,r.y)}}))}},e}(Et),At=function(t){function e(e,n,r){var o=this;t.call(this,e,n),r&&this.checkFallback()||(nt(),this.transitionTo(rt(),function(){window.addEventListener("hashchange",function(){o.onHashChange()})}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.checkFallback=function(){var t=Z(this.base);if(!/^\/#/.test(t))return window.location.replace(n(this.base+"/#"+t)),!0},e.prototype.onHashChange=function(){nt()&&this.transitionTo(rt(),function(t){it(t.fullPath)})},e.prototype.push=function(t){this.transitionTo(t,function(t){ot(t.fullPath)})},e.prototype.replace=function(t){this.transitionTo(t,function(t){it(t.fullPath)})},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(){rt()!==this.current.fullPath&&it(this.current.fullPath)},e}(Et),jt=function(t){function e(e){t.call(this,e),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t){var e=this;this.transitionTo(t,function(t){e.stack=e.stack.slice(0,e.index+1).concat(t),e.index++})},e.prototype.replace=function(t){var e=this;this.transitionTo(t,function(t){e.stack=e.stack.slice(0,e.index).concat(t)})},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){e.index=n,e.updateRoute(r)})}},e.prototype.ensureURL=function(){},e}(Et),Tt=function(t){void 0===t&&(t={}),this.app=null,this.options=t,this.beforeHooks=[],this.afterHooks=[],this.match=U(t.routes||[]);var e=t.mode||"hash";this.fallback="history"===e&&!Ot,this.fallback&&(e="hash"),kt||(e="abstract"),this.mode=e},$t={currentRoute:{}};return $t.currentRoute.get=function(){return this.history&&this.history.current},Tt.prototype.init=function(t){var e=this;r(y.installed,"not installed. Make sure to call `Vue.use(VueRouter)` before creating root instance."),this.app=t;var n=this,o=n.mode,i=n.options,a=n.fallback;switch(o){case"history":this.history=new St(this,i.base);break;case"hash":this.history=new At(this,i.base,a);break;case"abstract":this.history=new jt(this);break;default:r(!1,"invalid mode: "+o)}this.history.listen(function(t){e.app._route=t})},Tt.prototype.beforeEach=function(t){this.beforeHooks.push(t)},Tt.prototype.afterEach=function(t){this.afterHooks.push(t)},Tt.prototype.push=function(t){this.history.push(t)},Tt.prototype.replace=function(t){this.history.replace(t)},Tt.prototype.go=function(t){this.history.go(t)},Tt.prototype.back=function(){this.go(-1)},Tt.prototype.forward=function(){this.go(1)},Tt.prototype.getMatchedComponents=function(){return this.currentRoute?[].concat.apply([],this.currentRoute.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},Object.defineProperties(Tt.prototype,$t),Tt.install=y,kt&&window.Vue&&window.Vue.use(Tt),Tt})},function(t,e,n){var r=n(11);"string"==typeof r&&(r=[[t.i,r,""]]);n(1)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(12);"string"==typeof r&&(r=[[t.i,r,""]]);n(1)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(13);"string"==typeof r&&(r=[[t.i,r,""]]);n(1)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(14);"string"==typeof r&&(r=[[t.i,r,""]]);n(1)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){t.exports=n(3)}],[28]);
//# sourceMappingURL=client.3a9f64d6.js.map