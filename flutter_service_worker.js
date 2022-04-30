'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f1347c95514d766e1d8065af247dcc96",
"index.html": "81e1bbf0c578d711336e0e838230cf5c",
"/": "81e1bbf0c578d711336e0e838230cf5c",
"main.dart.js": "b66f8eae47b97dbaf690b4500acad5ab",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bd31f8d34e84c68685a685a2ad319b24",
".git/config": "2881e04eaa909d735aad16989e6be3dc",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/66/98139cb50c4a601d27b3724780aaa6fcdb249c": "94663a31973b6121f198dbbd256d532d",
".git/objects/50/13a557991a1c7ac33bd3f8f7a01cfc03025a9d": "bf00cd8d61d7879fccae3331b3521905",
".git/objects/6f/3a2913e199cebe9ace75cf7e5a2818da27fbd3": "45159ad6d14348c955865d0f51914657",
".git/objects/35/34754a1f40fb8b8bba5c6855a07c88fd39fc60": "950954cb198008fa6907748afd73f52e",
".git/objects/51/4122af7b46e48f0b23f00d54fc5a2d88ff700c": "81a2090fb30551e210c0dbff56498921",
".git/objects/67/ccf07b7266fe63a73250719b2632ce2596eceb": "88b46fef3f834cc4b4608fe3a4a42fba",
".git/objects/93/25b7059f5cf61e59bde8073b6a076f123a6caf": "b8929783492bf68b43be58c8ae0c4548",
".git/objects/34/12d04d1f55ae32b4676c7bd452e159b284321b": "ce116b645c6161d945450b8f09f676fe",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/02/8e7c9ec22306f7ec0a0358f4ac513719fe5940": "b8587c2cc338193526e3870c6102bf11",
".git/objects/a4/da6ce9f4d71272ea769297f48ec5ebf2e15231": "498cb6b4ff56ea7a4e84e724f58dfe2a",
".git/objects/b2/a9a3693e0e8fc9fb32d9e7fd6fa4d7c1bc5abe": "f8c1f9317a986a0e8b803d1ce96b6890",
".git/objects/df/8948fb0489f7f313bc73ab80c79c611bf4b60f": "db06db26243f60f7a2aa0f0be13612ce",
".git/objects/da/e85a330c8225414feaceec720c9ba5b6980fbb": "e505535d13404454d8e8cf4054f0a01c",
".git/objects/a5/17f94e9a40e5ed27e453874dc69bd1c878366c": "38f3af956fd4a9b07bf4f24bfd5c81ac",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/10f41f6d4027deee02d950c6631188d304efe1": "1c32dd8f529cc483a87d93cd593246e4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e4/ae44a9c67a8c29b3841f6f53e6a396b9f9f494": "39e6bd949f6de3f112865a1217d3d1a2",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/87/afe8742d78248b09e03c8e9e6d184ef7445cde": "c1b51f227b380bce06f51326b81fc098",
".git/objects/8f/0151f4b7165c9c0099eb503924d390dc8a1165": "d1929ca6061f872e81b9fac571005c2b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/958d0b77aca8da36d479faff83bfe362151961": "7ca0c5588a3daf934b137cf7db362d7f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/465e5ae301b3ddefabfe22b188c4fee52182c0": "eebe5c7c15a8b55c3d09dbb81b38a9a6",
".git/objects/6e/f42b721306d49233e9fb183a182ce8e258eed8": "60cc0f150c8fcfc4939c4a20dbc3623f",
".git/objects/96/95daf9ee3b9560a7bad1559b37f3a626652602": "cd2557d161069a1a7a08ffb2494194fc",
".git/objects/98/214130cd1cc8004cf2c1e9dd602f89bd36971e": "06ccb8704b086379d0c6586a82f7efc2",
".git/objects/53/667add42c78a37e5c34a30befde70ee5e171b3": "edd8a078732387d5150925a16408ef40",
".git/objects/3f/f9baf3c2271e4c1faea54906f2797505602723": "f29e9c11ac340f9dff8aa3ff6aee21ea",
".git/objects/01/be8f50de1787a4b2c2c8d2ea8989faa162ce43": "e92afbd10ebf67075559efa4c5a00f9a",
".git/objects/06/cdd3431d71fdb1c8f31d21fb9f523baf04e3b0": "59bad9dda7bda1c976eb9f964213abe8",
".git/objects/d4/dae60b8912e076a0b5f98fa24e33350e93432d": "cbb67cb305d004eba18c308614bc6977",
".git/objects/b1/56aeef003609630fb5a1e1c29bb0c31fea153e": "8b19fb1da5fece0d6452a59669c335ff",
".git/objects/dd/93c38bdfc5d2fe13dac6f17551bb9f888393f6": "b106934b4b2d6cad801bcd2e4bf0bd18",
".git/objects/b6/b04e2577e5c6f9076b69b697ffe292a15839bc": "638b9e2b035e23cb9d787f0540909231",
".git/objects/d5/d7b028b1bb7cfd299e23c2024661d6ca8ba77d": "ca9595eda57e869bc64634dd9e0c2cc6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a7209cfd79e53b96c8355ed53604364f633816": "88fb91ef29d3b87c6cba883790c4fd78",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/2dca3a81c200100dfcf7cf3006dc6af74522af": "f0d334a99a58d3718b59e9171060c2ba",
".git/objects/ef/91feecb3c0d983ca32717697324267d784781a": "021a5707be8ddb9f093b20157e499716",
".git/objects/ef/aad5d980991e6b238cc1f23efc27fbd7c4937a": "a33531f667c8d80f9efb5b34ae6711fd",
".git/objects/c3/4a6c5210d8fb812528ebde448a920c84f47315": "524a6168828d7c957a0a7b9aacc035e9",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/35e15e68e28afc263978299006f0d0fa347de6": "5f2ca6d58db12090cc28eca74cfeda76",
".git/objects/f7/a0dd6261158e337f088a695377d0425e753f4a": "14f1f9ca714b5dac0d315d6b8cd8d524",
".git/objects/fa/863a3915b78bd3f9393416f4ae57ab253cdebd": "ee1ce83af49726eb78e0998c762a587a",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/a2c9b83a0248b8e91ea7c3901d6f9382dc616f": "4e8a748fc88141a40b9b2fc4cbac4d6c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/84/a11fe463fbb857c1dbbefd9aa29ed1e8fd6e20": "9ad6e6c284a692db7e0a81af2627c216",
".git/objects/4a/b745f734ac187b832c512dd813df6baeffac63": "63d7a94825080c7e82a37bb78ad8bb78",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/c844f38ab873ad8a65dcb93c86fd5481ee6ba2": "c4ebe88b162478865b4f7f6d01540018",
".git/objects/15/c05db5fa6490072caf500260955142eb44b950": "e076a147478d3bd52abbf2a9e7ec4c8a",
".git/objects/1d/d8fbf99a6ac62a131730645baf81ef68b41a7f": "942dd579ba96ee26e24359afdfec6bbd",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/de8e249af1b6d72aa7224e58acae4b670a6e47": "a8b4230cc8702295e0581dc14aa6ea55",
".git/objects/82/830f86763c5c47a695c11dc9130723102edee3": "fb94175237e206037b43b7dfda826088",
".git/objects/2e/a9209568fc5000c402ccd66e2331624b41b870": "62b63419f8e9ff8fbfbeac7e4f240c6b",
".git/objects/2b/4f8cd9bde08862df02158e452c85ef604a8952": "ef9afaef0bd306745f56e7ba517e7a73",
".git/objects/2b/9a1b0a87501aad6491bb9e95d9fafc264244ff": "3f804efd45ca530dbe5c9182637f0033",
".git/objects/7a/8a84327d080b877818d9fb2f528a5e4784c790": "bc05cf91a90ff4222d0b74008422cb40",
".git/objects/25/31a54041dfd2888c6759c26c98f1496d6a7a5a": "93f12d1b816b1efc897933d0b6af8c57",
".git/objects/25/7bfdab18486dbcb1dcdd3817dfa27ab00a4b34": "b2866732fe6f978a763b9b1e282a8405",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ca84eb55fa10e4721dccd3f14d25339",
".git/logs/refs/heads/main": "f92163fae571e93e6330f17d2d666e50",
".git/logs/refs/remotes/origin/main": "52ad3eb156c43da0f62a79c12bb35308",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c110284be9ec0762405ecaa088d92284",
".git/refs/remotes/origin/main": "c110284be9ec0762405ecaa088d92284",
".git/index": "0fa89fee5b84de4889788acfc63f4dbf",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".vscode/settings.json": "8ab8729084acaaa571a2c5e90f13a6ef",
"assets/AssetManifest.json": "139814d6aee2758aef857f5f9aa87f27",
"assets/NOTICES": "7e40819962dca6e1c04935e39f309a43",
"assets/FontManifest.json": "62664e593265938b806ba87f321fa5ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/profile_small.png": "74bd9cb58b5ae3ef6eb400c7363c59e1",
"assets/assets/images/default_profile_pic.png": "a004f8e53ae322f8b4d47e0ed0b44d53",
"assets/assets/images/default_profile_pic.jpg": "a04d849cf591c2f980548b982f461401",
"assets/assets/images/profile_small_filled.png": "861c6a36ee59b6f8da9f3f95b8879296",
"assets/assets/icons/grid.svg": "2ba8d2b0373a73aa091427eb55663b18",
"assets/assets/icons/search.svg": "fa551132f7d5b687b707e4478b83e2ca",
"assets/assets/icons/shop_filled.svg": "933cd8ab5ca189f5697be6c4eb2af87f",
"assets/assets/icons/home.svg": "f9e48f76132b3fc33fde7c1224d72fd8",
"assets/assets/icons/shop.svg": "42d994d3c54f0498983b570601906cb3",
"assets/assets/icons/reels.svg": "b7da5e847ab796737787eef22eb7c9b7",
"assets/assets/icons/search_filled.svg": "450d14d4f1028a7d7724a00d31de4b42",
"assets/assets/icons/reels_filled.svg": "1ed6bd38eb7a9809a8e7d6f6edb2cbd7",
"assets/assets/icons/mentions.svg": "7275b32a1100613a4ccd6e7335e0479c",
"assets/assets/icons/series.svg": "6400d38bd6adfdfe8b2c48bd758630fb",
"assets/assets/icons/seperator_or.svg": "c78dea0321e4c4e269ec0e0e0a0e41c4",
"assets/assets/icons/add.svg": "9618004f421772cbc8139ceee084e504",
"assets/assets/icons/home_filled.svg": "f44adbc60fecf3099120415533472d96",
"assets/assets/icons/heart_filled.svg": "b173b75fcad6c350fdf70efeb3513fb4",
"assets/assets/icons/more.svg": "16519ee0a0aeac6588d3156f0ce5f462",
"assets/assets/icons/share.svg": "66edecc56b4d9303b7b5ff80ad51ad16",
"assets/assets/icons/comment.svg": "b43e3a170c89c53c0fe04e6e7a90a78a",
"assets/assets/icons/notifications.svg": "06d3daaa69e6cb3033b2da64b8f0bc4a",
"assets/assets/icons/messenger.svg": "e189b521997729c10f230b7661ed9566",
"assets/assets/icons/logo.svg": "992efbe7bbcd7893d8858325ac0803a7",
"assets/assets/icons/bookmark.svg": "7ebe78ab787007d89af28dc6098b8c54",
"assets/assets/icons/menu.svg": "e66c4425084c8bbd55ae8a23cf7f2e93",
"assets/assets/icons/heart.svg": "174eb126919184115d93c0e8149d58df",
"assets/assets/fonts/SF-UI-Display-Regular.ttf": "aa6dfc84bd9ca5fa845152272057d271",
"assets/assets/fonts/SF-UI-Display-Ultralight.ttf": "386ff8939e2992c9bd307cc3d6282235",
"assets/assets/fonts/SF-UI-Display-Heavy.ttf": "57bec092aedc39d80f611c63fc4635d1",
"assets/assets/fonts/SF-UI-Display-Semibold.ttf": "74725fca2bb37200a0bbd9970731f354",
"assets/assets/fonts/SF-UI-Display-Light.ttf": "9d35be75a07ddb1edb336c56a89f283c",
"assets/assets/fonts/SF-UI-Display-Thin.ttf": "20bc7db8c9615aacde3c2fc099175751",
"assets/assets/fonts/SF-UI-Display-Black.ttf": "9c0547f9471baf14b11d0707afda9ec9",
"assets/assets/fonts/SF-UI-Display-Medium.ttf": "6ff90569ce9ac69fc1329cf04d2fd64d",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
