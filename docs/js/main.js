!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=document.createElement("script");n.type="text/javascript",n.src="https://api.behance.net/v2/users/ayumitk/projects?callback=?&api_key=5AGtA6uAQot7srZlfWYtj1kZUXSuHx0S&per_page=6&callback=projectCallback",document.querySelector("head").appendChild(n);window.projectCallback=function(e){var t="";e.projects.forEach(function(e){var n="";e.fields.forEach(function(e){n+='<span class="mr-1">'+e+"</span>"}),t+='\n      <div class="col-md-4 mb-5">\n        <div class="card shadow-sm">\n          <a href="work.html?projectID='+e.id+'">\n            <div class="card-image"><img class="card-img-top" src="'+e.covers[404]+'" alt=""></div>\n            <div class="card-body">\n              <p class="card-text">'+e.name+'</p>\n              <div class="d-flex justify-content-between align-items-center">\n                <small class="text-muted field-list">'+n+"</small>\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>"}),document.querySelector("#behance-projects").innerHTML=t};var r=new Date;document.querySelector("#copyright-year").innerHTML=r.getFullYear()}]);