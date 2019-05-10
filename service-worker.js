/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "coroinha.html",
    "revision": "aa4ec2af698b23a9ec548bc4a2a53524"
  },
  {
    "url": "favicon.ico",
    "revision": "1378625ad714e74eebcfa67bb2f61d81"
  },
  {
    "url": "humans.txt",
    "revision": "fc86bcfea9e4f1aafa5a8a98b559fe20"
  },
  {
    "url": "images/hamburger.svg",
    "revision": "d2cb0dda3e8313b990e8dcf5e25d2d0f"
  },
  {
    "url": "images/icon.png",
    "revision": "5bdb6b0ae68671486bb6af54b6027b2c"
  },
  {
    "url": "images/totustuus.jpeg",
    "revision": "91dedb70432a62d689588547ec59944d"
  },
  {
    "url": "images/totustuus.png",
    "revision": "d7705ab587c697c80b15f2259e21c07a"
  },
  {
    "url": "images/touch/apple-touch-icon.png",
    "revision": "9a17108e7f2062eb591343153fed5390"
  },
  {
    "url": "images/touch/chrome-touch-icon-192x192.png",
    "revision": "abf2a399dad3ec7ca7dd35101a9952dd"
  },
  {
    "url": "images/touch/icon-128x128.png",
    "revision": "ff54462ec52bf7a1234b302c8f5bf1e4"
  },
  {
    "url": "images/touch/ms-touch-icon-144x144-precomposed.png",
    "revision": "07a3d5b2abdbebf5a4edbf902b5b913c"
  },
  {
    "url": "index.html",
    "revision": "f0da5f9c1a5aad4dffc5478e6db404a2"
  },
  {
    "url": "magnificat.html",
    "revision": "8aeb3f6fc49f4298c0594c2efc840df4"
  },
  {
    "url": "manifest.json",
    "revision": "9727402772c921b3ab7163c0a41e6543"
  },
  {
    "url": "manifest.webapp",
    "revision": "daa5f08ad7c4c3e774d2224157b96a3f"
  },
  {
    "url": "oracaoajesus.html",
    "revision": "14532306602493585c9095d37b384ee1"
  },
  {
    "url": "README.md",
    "revision": "23eee26d296b3432ee24dd9005cbe8ab"
  },
  {
    "url": "robots.txt",
    "revision": "00733c197e59662cf705a2ec6d881d44"
  },
  {
    "url": "scripts/main.js",
    "revision": "1641ee392bf5c2229574195207fedece"
  },
  {
    "url": "scripts/menu.js",
    "revision": "7c18e78257f481c2b18dabca183ad456"
  },
  {
    "url": "scripts/sw/runtime-caching.js",
    "revision": "e3e34dcb62b5d62453b9215961585488"
  },
  {
    "url": "styles/main.css",
    "revision": "d65350af17c567790da76e6035a6d421"
  },
  {
    "url": "subtuum.html",
    "revision": "258763886b4b20d45688bf79df946692"
  },
  {
    "url": "workbox-config.js",
    "revision": "c9eadd1afc8e47424d724f0aa5f9d3f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
