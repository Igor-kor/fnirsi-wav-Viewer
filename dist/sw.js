if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let a={};const o=e=>n(e,f),c={module:{uri:f},exports:a,require:o};i[f]=Promise.all(s.map((e=>c[e]||o(e)))).then((e=>(r(...e),a)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"b47e407399f940c002afa188ef4b46e4"},{url:"assets/index-B19Ad94H.css",revision:null},{url:"assets/index-DlT9ErW7.js",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"index.html",revision:"ca75638bcaa3e7f14aa2e6e5d27a91d6"},{url:"manifest.webmanifest",revision:"4156931a9f6ed536c96ed76efaa8b525"},{url:"mask-ikon.svg",revision:"346e12ee28bb0e5f5600d47beb4c7a47"},{url:"pwa-192x192.png",revision:"96e943fb16fe46be7f9fce1351a25c3f"},{url:"pwa-512x512.png",revision:"ed260cb7363a21556f1fd561b492bdde"},{url:"registerSW.js",revision:"07c4258f65ad32d131ddb5bc292c5ef5"},{url:"test.wav",revision:"38d191c9fa1e4b4bcdaa0af81c5d070a"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"apple-touch-icon.png",revision:"b47e407399f940c002afa188ef4b46e4"},{url:"pwa-192x192.png",revision:"96e943fb16fe46be7f9fce1351a25c3f"},{url:"pwa-512x512.png",revision:"ed260cb7363a21556f1fd561b492bdde"},{url:"manifest.webmanifest",revision:"4156931a9f6ed536c96ed76efaa8b525"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
