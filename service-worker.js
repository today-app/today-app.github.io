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
    "url": "404.html",
    "revision": "1d6da46e00f3ec26869329777d9ff0ab"
  },
  {
    "url": "about/index.html",
    "revision": "28ac20ef910a757759f2173cb5ce77ca"
  },
  {
    "url": "assets/css/0.styles.61d47f60.css",
    "revision": "0a8a24d2c0747e4be9a76e7382c02431"
  },
  {
    "url": "assets/favicons/apple-touch-icon.png",
    "revision": "fca69e68e8a829183d8219ed4ccb9131"
  },
  {
    "url": "assets/favicons/logo-144.jpg",
    "revision": "413bbbfb82cacc9325b5814d668d4310"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/instagram.png",
    "revision": "cae732c86ebe748e3c3b4f0b77ce8708"
  },
  {
    "url": "assets/js/10.6a073757.js",
    "revision": "87df45151acffe30d57780dce6d53b42"
  },
  {
    "url": "assets/js/11.1f5aaf21.js",
    "revision": "464b3954e1b5fa6e7dd1d0310eb6e0c2"
  },
  {
    "url": "assets/js/12.c30812f2.js",
    "revision": "656a25eba4b7e847fc7d38a17213261a"
  },
  {
    "url": "assets/js/13.f1ec0d63.js",
    "revision": "f471761cc27f8ee4e6ab98797df2468b"
  },
  {
    "url": "assets/js/14.9d3833c2.js",
    "revision": "5865df3f6b1c1cc801fc561d47764e38"
  },
  {
    "url": "assets/js/2.8e8e7962.js",
    "revision": "27ca455a61e28213f3fc8283c742a819"
  },
  {
    "url": "assets/js/3.cd278c38.js",
    "revision": "6196ce39af41614d89f819e8c0067af9"
  },
  {
    "url": "assets/js/4.361d959a.js",
    "revision": "5e0de47c974e98ec8df2c1142fe3d659"
  },
  {
    "url": "assets/js/5.db2d2719.js",
    "revision": "ab4f82ee40b72ca54a97d033ee64fa30"
  },
  {
    "url": "assets/js/6.fce0d647.js",
    "revision": "8b78a8f9b862bbb9793ed6b80c0a6a9d"
  },
  {
    "url": "assets/js/7.79c9d9b4.js",
    "revision": "f6e877fb3c11ecbeca38c2866865458b"
  },
  {
    "url": "assets/js/8.8467ced0.js",
    "revision": "d9fff8963f893cd1bab34546fa112369"
  },
  {
    "url": "assets/js/9.e257ab1c.js",
    "revision": "cc5a3cfcf446c74c77d696bd1f20a501"
  },
  {
    "url": "assets/js/app.ae000334.js",
    "revision": "b7ed127c91803ed0b287c837b240b1ec"
  },
  {
    "url": "assets/linkedin.png",
    "revision": "d142adfc9e4314d861e00ad212e2554b"
  },
  {
    "url": "assets/twitter.png",
    "revision": "3f2795c3177c22b21e072678ed5f20c5"
  },
  {
    "url": "index.html",
    "revision": "0be0e7727d0094697c19cc8ce035403d"
  },
  {
    "url": "version.html",
    "revision": "a0b9816bbb07ecbcaeb0aa65c54ae547"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
