"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["bundle.js","4317810917c93a712004bb5b305d8bf5"],["custom-evilicons.min.js","085e9c4563d617b5239f3aa4609d5e85"],["custom-highlight.min.js","c44f0ef4915a3829d752c20faa41193f"],["icons/android-chrome-192x192.png","e785adc48790b5e89973d867f8e0b76b"],["icons/android-chrome-512x512.png","2ac13ea3111ee2c72203b9f1e231a187"],["icons/apple-touch-icon.png","6f8d7a8609bce09225082d59c16fe67e"],["icons/favicon-16x16.png","36ab91fc9450bffc78e7e12ce241e668"],["icons/favicon-32x32.png","9460a72f25b62bd11efe7ffc73331f3f"],["icons/favicon.ico","75a7ce10416fa018fa8c065c31eb933e"],["icons/mstile-144x144.png","3a99d8dfc1098b0b35c0b70b88d0c3c7"],["icons/mstile-150x150.png","6d5dc5a070c37b476af46f6585b70de2"],["icons/mstile-310x150.png","c85ff8838f3b5520cf7598c05c3b2db9"],["icons/mstile-310x310.png","650f856802ffaacd2bfcb71d961148b2"],["icons/mstile-70x70.png","512e95d73760a54e1d7b99c6ed2e244a"],["jquery.tagcloud.js","6f391330a20e2cf778927048ca2bd6fa"],["styles.min.css","5559b27400d6e01675e7125995fb4576"],["tagcloud.js","9f85badcecad52080063f41dd243bdf9"]],cacheName="sw-precache-v3-codybrunner.rocks-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,n,t,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],r=new URL(n,self.location),c=createCacheKey(r,hashParamName,t,!1);return[r.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),n=urlsToCacheKeys.has(t));var c="https://codybrunner.rocks/index.html";!n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL(c,self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});