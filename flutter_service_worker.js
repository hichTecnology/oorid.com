'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c577feb60e63219b51354ecfc26d852e",
"favicon.ico": "6eff01bdce5d803c434d886aab9a3906",
"index.html": "e6ea72e2ee39103a75e58de1023c9cd9",
"/": "e6ea72e2ee39103a75e58de1023c9cd9",
"main.dart.js": "293b6123ec4cb75052b40219af7be750",
"icons/Icon-192.png": "ee723f0da75ebc4dbe3122a4fc78cd67",
"icons/Icon-512.png": "f33853785542a0dc2e8612a033911f5d",
"manifest.json": "d07606da7263a7c91868f57d6fea993e",
"assets/AssetManifest.json": "857428eefa1b287d70244ef72ba84593",
"assets/Lingua/en.json": "316e47152511c138c2606637ab5025e4",
"assets/Lingua/it.json": "f6fdd7562db47401036b0427763a602f",
"assets/Lingua/fr.json": "f2c0d3360574a8f8c9f5ce4e0538e8d4",
"assets/Lingua/ar.json": "a7d554ffa2ccd0fa80da2b799dacaf68",
"assets/NOTICES": "1d903d8223e9c7688480c19903756309",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/Icons/happy.png": "269e723bbe754a34c4ad94d306dd8a88",
"assets/Icons/splashscreen.png": "f0a385e26f15a68a3b3feb6ce94047ef",
"assets/Icons/sunbed.png": "8f4d335cbc0ca93d0cee8588bcaf20a3",
"assets/Icons/farming.png": "4d9e38ee36de1c21bd83749f8f3e0aa1",
"assets/Icons/land.png": "eed0b30322e40621d4b7105194e009b4",
"assets/Icons/imageorrid1.png": "e3dae22a79860e65245c66fcde51ad16",
"assets/Icons/desktop.png": "54e8428661102b5c374488115f311498",
"assets/Icons/game.png": "6c3bc8eec4eecf74ca87db2fe94c508d",
"assets/Icons/position.png": "92b8ab931cd5e61be6d9b7dc79d8bc7d",
"assets/Icons/increase.png": "2f5f03985acc52023235bb6d0fa47f44",
"assets/Icons/approved.png": "ae953b0add8215d9da21d7822335ae5b",
"assets/Icons/imagemoto.png": "7ae1fceaa2db7d4ddbe50289e7d20672",
"assets/Icons/panorama.png": "eaf129653bcce4b67ed84b0afedc1885",
"assets/Icons/home.png": "90afa38fabdea76ac7dc31887519d5a5",
"assets/Icons/face.png": "a021185efd358d3599f947e5865d6064",
"assets/Icons/microwave.png": "8f930a00db9f5f84b5aa5a3c1672d2bc",
"assets/Icons/tools.png": "552e7822c25107623a320ed12b0b4a2f",
"assets/Icons/bed.png": "8043881a972ab6cfa11ddfc6fd26e19a",
"assets/Icons/imageinbording.png": "4e448693b7474aa65b15e2d4ead1ba37",
"assets/Icons/united.png": "6f382b2ddfdd4ea349ac9ca989da123a",
"assets/Icons/sofa.png": "05f39b7f46313d0e71839c8b246c4416",
"assets/Icons/monitor.png": "9a4aaba5b64504bf9434b6aec36676a3",
"assets/Icons/logo1.png": "9154f57bcadb96885a3495e66d00fb5d",
"assets/Icons/pram.png": "7012820a776f6915e728fae87de5e313",
"assets/Icons/office.png": "9298793683e2fbc8d1031f217218c22f",
"assets/Icons/attlavoro.png": "40581c100ffbe4a7c6c4539345e76150",
"assets/Icons/car.png": "0c53874936e3bef1402859857e021c68",
"assets/Icons/vespa.png": "d3fbe1de079bc845264374569f44e9c0",
"assets/Icons/phone.png": "c2c0977bbd0aaca957a7d93a256253e3",
"assets/Icons/dumbbell.png": "7bd631b448dab1b4d67b3b51368e61bd",
"assets/Icons/sweater.png": "b996ae780fac8db84ebc5421c104246f",
"assets/Icons/france.png": "78e9f99bc3c993c9c83615d0f3d028c4",
"assets/Icons/helmet.png": "69a9492d1b6694cf089f8458c514308e",
"assets/Icons/italy.png": "cc79b1867397b8aec17dccce31e6fbef",
"assets/Icons/plumber.png": "96584ec6ed4769a844dbed9beb4c38f6",
"assets/Icons/guitar.png": "abb84e213aec79b22ab275601c08c6d5",
"assets/Icons/google.png": "1b943d724cb2d7c49f888f750ce3a479",
"assets/Icons/facebook.png": "9d07141dd9a4b776147d16a109d78dff",
"assets/Icons/camera.png": "ee703367d897656811679e5559657ab0",
"assets/Icons/garage.png": "8da444d5729a614a96ad9a3bd96a343a",
"assets/Icons/morocco.png": "7e5c99cee6be8d1d984b801dc6dc6ee1",
"assets/Icons/pistons.png": "9c58fe82445458d04c9b79e9fbb54c86",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
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
