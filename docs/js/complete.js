!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){var r,o,c;o=[t,e],void 0===(c="function"==typeof(r=function(e,t){"use strict";var n={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function r(e){try{delete window[e]}catch(t){window[e]=void 0}}function o(e){var t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)}t.exports=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],c=e,a=t.timeout||n.timeout,i=t.jsonpCallback||n.jsonpCallback,s=void 0;return new Promise(function(n,l){var u=t.jsonpCallbackFunction||"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random()),d=i+"_"+u;window[u]=function(e){n({ok:!0,json:function(){return Promise.resolve(e)}}),s&&clearTimeout(s),o(d),r(u)},c+=-1===c.indexOf("?")?"?":"&";var f=document.createElement("script");f.setAttribute("src",""+c+i+"="+u),t.charset&&f.setAttribute("charset",t.charset),f.id=d,document.getElementsByTagName("head")[0].appendChild(f),s=setTimeout(function(){l(new Error("JSONP request to "+e+" timed out")),r(u),o(d),window[u]=function(){r(u)}},a),f.onerror=function(){l(new Error("JSONP request to "+e+" failed")),r(u),o(d),s&&clearTimeout(s)}})}})?r.apply(t,o):r)||(e.exports=c)},,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);function c(e){var t="";e.forEach(function(e){var n=e.fields.map(function(e){return'<span class="mr-1">'+e+"</span>"}).join("");t+='\n      <div class="col-sm-6 col-lg-4 mb-5">\n        <div class="card shadow-sm">\n          <a href="#project-'+e.id+'">\n            <div class="card-image"><img class="card-img-top" src="'+e.covers[404]+'" alt=""></div>\n            <div class="card-body">\n              <p class="card-text">'+e.name+'</p>\n              <div class="d-flex justify-content-between align-items-center">\n                <small class="text-muted field-list">'+n+"</small>\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>"}),document.querySelector("#behance-projects").innerHTML=t}var a=sessionStorage.getItem("behanceProject");a?c(JSON.parse(a)):o()("https://api.behance.net/v2/users/ayumitk/projects?client_id=5AGtA6uAQot7srZlfWYtj1kZUXSuHx0S&per_page=6",{jsonpCallback:"callback"}).then(function(e){return e.json()}).then(function(e){sessionStorage.setItem("behanceProject",JSON.stringify(e.projects)),c(e.projects)}).catch(function(e){document.querySelector("#behance-projects").innerHTML="<small>Parsing failed : "+e+"</small>"});var i=new Date;document.querySelector("#copyright-year").innerHTML=i.getFullYear()}]);