'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
".git/config": "3715212c1d9a7e63ba09fa8b876ae942",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "feeb5f7817b372370156657d9dd9fd51",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac76ffc4bf93e2299fe2c0dfe09f0e2d",
".git/logs/refs/heads/master": "ac76ffc4bf93e2299fe2c0dfe09f0e2d",
".git/logs/refs/remotes/origin/master": "50b3bb9380224507d9913cfe766f4b1b",
".git/objects/0f/b896aec8baf0cbb5b6db8727626dc58cd08357": "bb21908ac6058fc410e70db103bb502d",
".git/objects/15/765acf7f1c9d9ecaed392fcd1cea0f8915e1ae": "d02fa6fbe4c88ff11e04d0ee677fa17f",
".git/objects/15/a15817e5b43c76cbea0fc62f17d94adc2dbbf5": "37ae48fd83c7327215f7b3de9350009e",
".git/objects/16/bd1ade49ad61ea3719ee555dc7b291d74de717": "ad5d026e801000baddcfc9239e398196",
".git/objects/17/bc3b607c5e0ab28874a0ece8e90aa72399efc1": "76e245e5e3e7a433590c93a0cb11214e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/25/4ee9800d2528c042632aa2865f343813b3ca88": "435562e4062cd8123f738d45f9fb084c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/4a/9b7db5362171f20c0c44e174a922f5672ec494": "a68aa47e333eb266184d74b3edf47c54",
".git/objects/52/0772ff1701e48f793e244adeb38385f286f6a3": "56d0380564b3f9f8c0db7a87492184c0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/4a633ce2780226c94bce71f3ccc40b8feee02b": "518ae77563e1da2d2cfe75005379516e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/afe6a2bbbfde08ab903787c0c45e2b7af61124": "cba5492e80cab6641f7c576c91380a82",
".git/objects/95/4a2cab8a6d661e5333785771aaf425c76caf83": "da80ddc8e7bcc0bb341b726442172aa9",
".git/objects/9f/8c8b005a4bcfd6254bd612c3a1079b56a58af9": "fc5c5dd7f73ce3e5baa077e54790cac6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/458e6fe936720830277b2be8e6ab80d6a21ea6": "64769158832d01357196dfbfcc6e4fec",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/c2/2611fd3ee1c982ba70e72b0cc1f6336c45d69d": "bf8983aced17fd40c76e753d3ade27ad",
".git/objects/c4/cfa59751d4be3a57796456da8467b99aa97b17": "911a65e24cfb61c134407b893e7d0e35",
".git/objects/c5/a3da8761137d265dd228b0cba47a06909199fa": "494448f1aa90c7f940ecc860c2d7e356",
".git/objects/da/9c3256724b8140a58d8c3ec6de27397ecb6fff": "33b98cc34de16da7dce28d6e5f6590b5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f4/418260d5f8e3d90c026d91e4b64b9663538d99": "797ac256a4af45e2ca9d74b96951a702",
".git/objects/f6/a8769e88bb376f07dbb7051b31c32fa1b4721f": "196febedeee3cf923a42daa189c48d5d",
".git/objects/ff/097e7b368f4943aa52b3b47db2d5137523c890": "1317adb4748ee40364b4d0182f08e864",
".git/refs/heads/master": "58b30f3d228abeb27576a55eb8a5f363",
".git/refs/remotes/origin/master": "58b30f3d228abeb27576a55eb8a5f363",
"assets/AssetManifest.json": "068591556421b69f88a2f4841efe0611",
"assets/FontManifest.json": "0a1824798abdad9b917d58422f7d9684",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "dbec56380e3171387d370c1d64a4c33f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/ml_base_app_foundation/assets/fonts/FiraSans-Bold.ttf": "a1acb00f5bffd4e7b86f0cfb89fa184a",
"assets/packages/ml_base_app_foundation/assets/fonts/FiraSans-Regular.ttf": "895f5b025a6cc4924b263f6beb06c777",
"assets/packages/ml_base_app_foundation/assets/fonts/FiraSans-SemiBold.ttf": "934104ff7f5dde5e3a31ddd7967f1601",
"assets/packages/ml_base_app_foundation/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/packages/ml_base_app_foundation/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/packages/ml_base_app_foundation/assets/icon_fonts/miniicons.ttf": "fffd6fc6b166ee0407281a82c2343026",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "cbe2a9e0fcdd9d280b69f837ca8c5019",
"/": "cbe2a9e0fcdd9d280b69f837ca8c5019",
"main.dart.js": "e23321041ca68791b723ed269c60c77b",
"manifest.json": "79d5681dd1d57ac9b579c54e4519e61b",
"version.json": "f326b44ff7a55e7b76aa8e265e49ad71"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
