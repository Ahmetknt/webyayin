'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6bb0370e5486279774838c89b08cd3ed",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/%25C3%25BClker%25C3%25A7ikolata.jpeg": "13a3c9ae35cfa128291825f3ff3fdd62",
"assets/images/%25C3%25BClkergofret.jpeg": "e9ab8ac01eec5360ea3e589ffe27f118",
"assets/images/ace.jpeg": "ed94cc42aa00037442bf9b559758a419",
"assets/images/ananas.jpeg": "824a29d14685ed4e9cf1c5b6b6986c6f",
"assets/images/ankaramakarna.jpeg": "75acce7d3508c263621969ff8857e4f8",
"assets/images/antibakteriyeljel.jpeg": "80d6344ceed38e18f7ed7e20aaf65757",
"assets/images/ariel.jpeg": "8ad96a7d0f90a69f91e6a5c959301128",
"assets/images/atistirmalik.jpeg": "1aa5233eb218b9fe087bfdda584e7798",
"assets/images/balparmak.png": "5fb958666b9b5e9a4d84eb97b1c9c85f",
"assets/images/bibersalcasi.jpeg": "bd3d7b664948978235eda40a8c81e9c9",
"assets/images/billurtuz.jpeg": "0ae071e548a754a16a182a4c0c40fb09",
"assets/images/bulgur.jpeg": "b2dce797bafe2eee8c300145b76f8cab",
"assets/images/cif.jpeg": "36540d559206e2a4b191f50c716e0f17",
"assets/images/cifsprey.jpeg": "f8c1d3f46ebe7d98fbcacd9de41ee8eb",
"assets/images/cizikyesil.jpeg": "b12bfc16316d20d96c8ae39064b3e8f2",
"assets/images/clear.jpeg": "9b53f74e506b6e363aaef31da6f2a93a",
"assets/images/cocopops.jpeg": "269d4f2a516468ea136970422384240d",
"assets/images/colgate.jpeg": "9ae7655c7340b4d5e2b211bae6342812",
"assets/images/colgateferah.jpeg": "b19556dd433a2eb3d5a09e2c37320822",
"assets/images/colgateplax.jpeg": "86944fae91af147286972426d59bdbcb",
"assets/images/cubukmakarna.jpeg": "9f5d74d79830d7b11bdfbafe80529677",
"assets/images/damak.jpeg": "a7ae14b6b29492f72569e6fcf0ff63fa",
"assets/images/dankek.jpeg": "81d18e20f1eed5b5e72e9887dd9dfe68",
"assets/images/dido.jpeg": "6b0780e1260019bda22b82070decf627",
"assets/images/disipi.jpeg": "eaaeeb7c81c75ab9203e06aca9e9f542",
"assets/images/domates.jpeg": "122146ea83fb33a41b90ca7178f51171",
"assets/images/domatessalcasi.jpeg": "877969800d4a0ec77ca87b47652b473c",
"assets/images/domestos.jpeg": "313122732f4144ebfa34232b0eb0549e",
"assets/images/domestoskopuk.jpeg": "0d5941bbefba594647426f0ccab406a8",
"assets/images/dusjeli.jpeg": "3f95a36d72ebe38a82c956d77571a601",
"assets/images/evbakim.jpeg": "9504c2ebc580816e34047d7c85d38486",
"assets/images/fairy.jpeg": "3f82a89d2e6b9d02a7f9d6edc90b7d9a",
"assets/images/fasulye.jpeg": "bc1fa375e67bce1cc578e2ae5dc5de22",
"assets/images/goldenelma.jpeg": "6810e901dfcc69576967ad9e28a68bb4",
"assets/images/headshoulders.jpeg": "f94c5d8e1762c1ee99969b07f237f421",
"assets/images/islakmendil.jpeg": "c2646b62a6b6de16ce2da95aa0a69053",
"assets/images/islaktemizlikmendili.jpeg": "b8a97bb6c60274a54519715eec0055e2",
"assets/images/kahvaltilik.jpeg": "36f0b0b910135d7047335e8f7127ff7c",
"assets/images/kalipsabun.jpeg": "13b4f5a084ca0ed130d588b4e7389041",
"assets/images/kapyabiber.jpeg": "6e7b6bdbd066b1600a18a907c2fc4950",
"assets/images/kavun.jpeg": "d78c3922b24572ed82cac7d9c539ac60",
"assets/images/ketcap.jpeg": "49cd1c5b4aa299e83fafed57ddb95c18",
"assets/images/kirmizielma.jpeg": "6b8c7be46deb7b6da8c458adad435539",
"assets/images/kirmizimercimek.jpeg": "de32c4be5481a84898a8c3585e97ef56",
"assets/images/kisiselbakim.jpeg": "15ec2a5fb0ce84026a660516bb8a671d",
"assets/images/lavaboacici.jpeg": "f4f1cc101cf0ed9f394807cce9f0c757",
"assets/images/laysklasik.jpeg": "d53364c4f9a7636e852be8d4f56946b3",
"assets/images/limon.jpeg": "a9a54b0435bb6b45816620d5d6ad28f3",
"assets/images/listerine.jpeg": "e444ec22da0fc54dc9b7684640cfa06d",
"assets/images/login.png": "53434412a18bfb287fe967ff83cf905e",
"assets/images/m%25C4%25B1s%25C4%25B1ryagi.jpeg": "765c4ea201398059e0a696fcc80a9908",
"assets/images/mandalina.jpeg": "8d1b410bc572c5c781ca855b2f3d8761",
"assets/images/maske.jpeg": "469840665ac0d3e200c73dc0821473ab",
"assets/images/meyvesebze.jpeg": "0af64c949bf9f134314cce6408fb3105",
"assets/images/mrmuscle.jpeg": "03e1d6a663c290ef2db4424ed9887884",
"assets/images/muz.jpeg": "ab5cffbb479af17bc5ad65314f029737",
"assets/images/nohut.jpeg": "54a434eb1448ca8a4a59925dbc72777a",
"assets/images/nutella.jpeg": "18f6ec1f92b1c185c8db1cbe169c1143",
"assets/images/olala.jpeg": "3b6d69487896e8d2708d87f30f63da64",
"assets/images/omo.jpeg": "59d0084f70e4a63e82769686da3dc6b0",
"assets/images/pantane.jpeg": "052fc38aff4913f0e39736e9574994df",
"assets/images/past%25C4%25B1rma.jpeg": "eec417009dcd3bc29256d817e0c460e6",
"assets/images/patlican.jpeg": "d11a0a19844de3168113bcec015e9721",
"assets/images/pembedomestos.jpeg": "4425963ee5e5df726efb762a8aa46d6a",
"assets/images/portakal.jpeg": "be4dc95adcd0a2e8a732b5e35d81f668",
"assets/images/ruffles.jpeg": "e6bbf7df6f68165f97df31114727e736",
"assets/images/sahinsucuk.jpeg": "f06f9f0d1b2a6dc13408e530c0995b94",
"assets/images/salkimdomates.jpeg": "451615628d57840bdfd94c6ebe55e945",
"assets/images/sarimsak.jpeg": "d4690d26c6d9afdf75115725c7525625",
"assets/images/sensodyne.jpeg": "b958475fc84a39b45f7ecf710fe74145",
"assets/images/sivisabun.jpeg": "2db2490ad0bc23a7dee49b7d83e1892b",
"assets/images/sivribiber.png": "794026952909f346ca66f1225599f2a5",
"assets/images/so%25C4%259Fan.jpeg": "c7e009961d675d87f693b474b0206a85",
"assets/images/spordusjeli.jpeg": "c1c3e476c780d1654b9e3cb71824d517",
"assets/images/sunger.jpeg": "984dec9cb10c3ab62e0b3f528b9e1d60",
"assets/images/tad%25C4%25B1m%25C3%25A7ekirdek.jpeg": "8b6f219acefa3fef70aa3626f2478684",
"assets/images/tad%25C4%25B1mantepf%25C4%25B1st%25C4%25B1%25C4%259F%25C4%25B1.jpeg": "d8799569a4e5a65e56dc228a34c19491",
"assets/images/tahinpekmez.jpeg": "baae60c01525fa59c1bf100564d049fc",
"assets/images/temelgida.jpeg": "2fb2cf0b1825a26e08c671cbf0e4ed1e",
"assets/images/temizlikbezi.jpeg": "8c1cf0c6cb3794e3e3973730fb8919ec",
"assets/images/tozseker.jpeg": "d3e380b5cec86cd34d49ea76402ee9ef",
"assets/images/tuvaletkagidi.jpeg": "55950b305a4b1b39209586291401d6a3",
"assets/images/un.jpeg": "29944c9ebaca4dafbae00bc010df5f5c",
"assets/images/unibaby.jpeg": "e568f6dd5f674707dbb78ab9bb0e64e4",
"assets/images/uzum.jpeg": "f1f0e06324932257cefbaf7425d2f21f",
"assets/images/visnereceli.png": "89da81b3dc29d89671fe696abdf71718",
"assets/images/yaylapirinc.jpeg": "67959e6c4006ceb85a07ca27678ff92c",
"assets/images/yesilmercimek.jpeg": "118954458f74872178ccb043e2e71292",
"assets/images/yumurta.jpeg": "c326725495ef72a6edd97b30dee014f4",
"assets/images/zeytin.jpeg": "96b8e31281509440879be2518cd25e41",
"assets/images/zeytinyagi.jpeg": "1c8a85f7cb8e0089f52f0d865c175d55",
"assets/NOTICES": "8b5f0b8e497484f7604f333baa4fbc5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "487c2b0fc590bf1589c08b814a99fe47",
"/": "487c2b0fc590bf1589c08b814a99fe47",
"main.dart.js": "6982b852c149a962f6a0dcb964031305",
"manifest.json": "50afb0a0c1492c7bb65cc40d63586aae",
"version.json": "4835a30e9b4dbef3c1bb4b8c338ed7b4"
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
