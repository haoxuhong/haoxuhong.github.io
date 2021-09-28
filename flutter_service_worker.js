'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4e6e3b656de9f0107e1d5f6d0f833706",
"index.html": "ea579689b63c89957a9000a4f90060c1",
"/": "ea579689b63c89957a9000a4f90060c1",
"main.dart.js": "2c8f9ba5f89650108538adf5ad84447b",
"favicon.png": "dd2673dc4bc2b8f163817abdda4f0877",
"icons/Icon-192.png": "dd2673dc4bc2b8f163817abdda4f0877",
"icons/Icon-512.png": "dd2673dc4bc2b8f163817abdda4f0877",
"manifest.json": "ea150aca7906e06c421c774ca2cd25c1",
"assets/AssetManifest.json": "bbd86733976275e43ef3540a8ff4aa8c",
"assets/NOTICES": "50f6f21e3e784c24944f2e14c094f405",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/ic_mine_order_2.png": "3723bac3f33918ecacaee5a63e0c34ea",
"assets/assets/images/ic_fun_way_detail_fast_entry_item_window.png": "53d8b0d350dac8d0c038834f409bc927",
"assets/assets/images/tabs/ic_goAlong_selected.png": "ce0ee94ce7c11636a68299a5134cc2c2",
"assets/assets/images/tabs/ic_funWay_selected.png": "cac212906db5220476b645472e637a07",
"assets/assets/images/tabs/ic_funWay_unselected.png": "1af68d545011efef65684e60915de28e",
"assets/assets/images/tabs/ic_mine_selected.png": "d6bcbc7c0e0827aa6a8a59ac33e2d6fb",
"assets/assets/images/tabs/ic_tour_unselected.png": "66dc2bf519f5f59cf4cb8deb98c7c055",
"assets/assets/images/tabs/ic_mine_unselected.png": "9e5914d677874bd6bd44f537e177a429",
"assets/assets/images/tabs/ic_goAlong_unselected.png": "f56c9150732fde5ed8d7786f3ec243c1",
"assets/assets/images/tabs/ic_tour_selected.png": "de539cea2eb64214510ec66e086ca710",
"assets/assets/images/bg_goalong_top_nav1.png": "eac3eb62e214107b144571541cc7d0a2",
"assets/assets/images/ic_goalong_ticket_man.png": "e0aed3aa188330d606605f0a1a11ff20",
"assets/assets/images/ic_mine_order_3.png": "9c50ea965df6cf08126cce79585c6ea2",
"assets/assets/images/bg_goalong_top_nav.png": "86b01ba54fdc5665849e80fc703ac212",
"assets/assets/images/ic_goalong_more.png": "00cd0d701a1b08e794cecbac0c6a26f2",
"assets/assets/images/ic_mine_order_1.png": "cab09f47cb525e57bc7981afb2493b62",
"assets/assets/images/ic_login_phone.png": "901c694e1d2bcc674e3daf61347757fd",
"assets/assets/images/ic_location_black.png": "4b4fc7ab6c07cbad3bce56dfc98a43c5",
"assets/assets/images/ic_fun_way_detail_park.png": "90c1c773a9681e44fb88610a90021644",
"assets/assets/images/bg_splash.jpg": "e77b2c38a93780e801eca0772639ed22",
"assets/assets/images/ic_fun_way_detail_travel.png": "2f37dcc115070ceab426ab6fd88831ae",
"assets/assets/images/bg_fun_way_detail_header.png": "c35bb80e45a3f89f5ec0d68d8498aa3b",
"assets/assets/images/ic_tour_news.png": "82870507a91cafb298e99e205249a1bc",
"assets/assets/images/ic_mine_order_4.png": "6ab1c789c8199b9beefdd5ef050992cb",
"assets/assets/images/bg_mine_header2.png": "4ce243bd40aad72084e673224dacbc77",
"assets/assets/images/arrow_right_two.png": "e25f2b76dd4a88f5ed12c5ce74baf0be",
"assets/assets/images/bg_guide_route.png": "b99947fa945a4ad2f99314534e882d48",
"assets/assets/images/ic_fun_way_detail_fast_entry_item_tickets_checked.png": "8e8b38d5e2575d78db6f0fa2a2423deb",
"assets/assets/images/bg_fun_way_item.png": "7a1bb63e74bb3199ebf8db9176d0be26",
"assets/assets/images/ic_goalong_guide_guide_right_arrow.png": "81e16c1bb889fba87132f421944023f4",
"assets/assets/images/ic_like.png": "fc640bf5d93fbc64ec2f49651deadd49",
"assets/assets/images/ic_mine_history.png": "4f2462d9ff85a6e9bf7fcdb9d1893a41",
"assets/assets/images/ic_fun_way_lock.png": "d0ad666520ff9b01f220eb826f4a3f42",
"assets/assets/images/ic_fun_way_unlock.png": "54b9ef26f8d9d71124cede6096aa3ca9",
"assets/assets/images/ic_mine_order_5.png": "26ff297febe2d51af1b45aa10f2cb27b",
"assets/assets/images/ic_mine_contacts.png": "a8cec0cd80c2de85f7c10fd57eb80493",
"assets/assets/images/icon_hint_network.png": "484a32842fb722c486ead7ddcb704257",
"assets/assets/images/arrow_left_white.png": "1cc6f7b09b63da64656dce89c4544d15",
"assets/assets/images/bg_mine_header1.png": "7a0f175928eb06567a979eb240aa8f07",
"assets/assets/images/ic_calories.png": "18717988276fda69ef5fef66b9485e27",
"assets/assets/images/ic_login_pwd.png": "edc1b6e326c3e8a3f54604c6bb55132a",
"assets/assets/images/ic_login_header.png": "448c58d8c291f41c8080760e795c0c69",
"assets/assets/images/ic_input_show.png": "9827404e424d6eb4a9eed4fc793775c1",
"assets/assets/images/ic_avatar.png": "d8d5113cd04e54262331e00489441159",
"assets/assets/images/ic_fun_way_detail_travel_exit.png": "608e3188a3818a6e3958ace811a79583",
"assets/assets/images/ic_fun_way_detail_park_item_wait.png": "b558b164f8360deb51c73c403ef87a46",
"assets/assets/images/ic_delete.png": "5da593d10376362af3a4edce8fad40b5",
"assets/assets/images/ic_back_black.png": "1effe43c51129c0cb4d81d6dae6bec43",
"assets/assets/images/ic_mine_exit.png": "0035634a04a8bcc77e4ac8f75da6cbb6",
"assets/assets/images/icon_hint_request.png": "396b01d25b2d447ed211b594fa2eecaf",
"assets/assets/images/ic_fun_way_detail_location.png": "d906130de1667e6985ee24ba7223d0ea",
"assets/assets/images/ic_favorite.png": "43b3c82a1331d2851d3d9d06d8c4feeb",
"assets/assets/images/ic_mine_personal_data.png": "fe181bab5349526c340f71591a77aa62",
"assets/assets/images/ic_fun_way_detail_park_item_park.png": "39ce59ce8fc291843cb9c8176c25e189",
"assets/assets/images/arrow_down_black.png": "19a939707c1465a260790ecb496f3a4e",
"assets/assets/images/bg_goalong_guide_header.png": "b443031736e0feca0b11f83e3b76a017",
"assets/assets/images/ic_goalong_ticket.png": "b3e1baf0f0e69e1e3ebb38ddf6010313",
"assets/assets/images/map/ic_map_parking.png": "d1d00fbe2d49734aafdeec51ef85f0a2",
"assets/assets/images/map/ic_location.png": "47fee527fd8e8d9d6c18744af89de81d",
"assets/assets/images/map/ic_location_selected.png": "758356db292d904ded6d96248baec835",
"assets/assets/images/map/control.png": "41619f5e7ccafac8ec149ee4147ce015",
"assets/assets/images/map/ic_map_wc.png": "1515902659f12afc21e3bd41cf79c06a",
"assets/assets/images/map/animation_red.png": "479e5277142d072b7691f79690921249",
"assets/assets/images/ic_input_delete.png": "90f2e8c7f5296a7b696411fbf4c04503",
"assets/assets/images/ic_goalong_guide_guide_eat.png": "aa7d259a198b1c7f4d7a9bc5d8f4e3cf",
"assets/assets/images/ic_login_username.png": "3486d9b96381bfcf5d64d5872e2a21c8",
"assets/assets/images/ic_goalong_guide_guide_player.png": "882180acd427645248094f5cf4d6a85c",
"assets/assets/images/ic_fun_way_detial_booking_service_image1.png": "22c949c422284277d0949fa12f7e6de1",
"assets/assets/images/ic_goalong_park_item_navigation.png": "52d9d35486525764da1e577e52110aba",
"assets/assets/images/ic_tour_search.png": "d8b0f348e243cd23d8aa00cd83247ed0",
"assets/assets/images/icon_dialog_close.png": "1dc5650867c6687f0094fda790490a53",
"assets/assets/images/update_head.jpg": "670e412faeda9a6481cdf95a1a3e3ea7",
"assets/assets/images/ic_goalong_tour_video.png": "2cfa4c7275d7b42a02cbc35f53541958",
"assets/assets/images/bg_login.png": "0539b9758d51c8132123137aa192f747",
"assets/assets/images/ticket/ticket_notice_hint.png": "7bc6aa6fa3d6159542e8850f1dc102eb",
"assets/assets/images/ticket/ticket_header_bg.png": "d7dc5a96d09984827eb5940ef607ad38",
"assets/assets/images/ticket/bg_ticket_intend.png": "6dd942ac8b0e7e50791568c0cf24c966",
"assets/assets/images/ticket/bg_ticket.png": "b220973fdec55b22bba35db9b6a0a5e5",
"assets/assets/images/ticket/ic_ticket_intend_business.png": "3080a6531b372902ad0294562570fac6",
"assets/assets/images/ic_fun_way_detial_booking_service_image2.png": "fd55c41e56b101e07dc79f5679b2f2be",
"assets/assets/images/ic_goalong_guide.png": "b0bc97e98637e9f04fb99581e345ddca",
"assets/assets/images/bg_goalong_guide_guide1.png": "fbb56797b704ec2ba614f95c72e9dca1",
"assets/assets/images/ic_mine_order.png": "e1dc3b0873d98416f45e0e2bd188ea31",
"assets/assets/images/ic_goalong_guide_guide_tea.png": "4fe159bd7df0498d2744eda70ebcaa13",
"assets/assets/images/ic_goalong_location.png": "c95a487de7b8ab4cf4752ea1a971f7d1",
"assets/assets/images/bg_goalong_near_scenic2.png": "4ae67c8d7daf8ca1eb3a46be253cca74",
"assets/assets/images/ic_goalong_park_item_no_info.png": "a2df059be41d6e14a0a1b60f733ed4ea",
"assets/assets/images/bg_login_btn.png": "be188332ca8e8701dbb06883e3cdfd77",
"assets/assets/images/ic_goalong_news.png": "092d61727437dde562bc18d8d1105b73",
"assets/assets/images/ic_fun_way_detail_weather.png": "e357768ce183bcc8bdb072bc0ec7df72",
"assets/assets/images/icon_add.png": "5364c26fbcad5f3073aee71551ab4f36",
"assets/assets/images/bg_goalong_near_scenic3.png": "b9565fab2743fb01ef4702e2f70e1a2a",
"assets/assets/images/ic_login_arrow.png": "2a92c882f7cc6ba95c6a461ca2b7a683",
"assets/assets/images/ic_fun_way_detail_people.png": "67852ab058a0643e16c2efad415d4938",
"assets/assets/images/icon_hint_empty.png": "6ab57377faeb98f8ac28659f884bd5b3",
"assets/assets/images/arrow_right_gray.png": "1aa48f57f61235ebf20b03b2195f5ea8",
"assets/assets/images/bg_goalong_guide_guide2.png": "53daca649825cdbf4c6c75894ed11f72",
"assets/assets/images/icon_zj.png": "6e98859f0899df1973d1c62f9c9c2522",
"assets/assets/images/bg_goalong_near_scenic1.png": "e506464ec6fa2465fb32713f2a0a719b",
"assets/assets/images/ic_goalong_guide_guide_wc.png": "60a93a2cb568d8bd10157cee8955c9e1",
"assets/assets/images/ic_goalong_stop.png": "ebb5ab473fd904f9467de62a51b5df76",
"assets/assets/images/bg_goalong_park_header.png": "214c6c7b6344d16d1feb4eed45557a51",
"assets/assets/images/bg_goalong_guide_guide3.png": "93d46e403e195b36ce99b89fc820ae8a",
"assets/assets/images/ic_fun_way_scan.png": "4b1c42b785ecddf5da676868fc1e3e6e",
"assets/assets/images/bg_goalong_tour_header.png": "db9bd2b638e955eec198b92295b32393",
"assets/assets/images/bg_fun_way_item1.png": "81b5320ea8c152cb4a085c5b710a5f96",
"assets/assets/images/ic_mine_service.png": "0e5c04f2649d697300a5ce14f2d3bf48",
"assets/assets/images/ic_goalong_ticket_woman.png": "973d1dd1674966bc58926a57e4287816",
"assets/assets/images/ic_input_hide.png": "e2d114ea088e869f216622b5da51f998",
"assets/assets/images/ic_goalong_tour.png": "34f399b75f34065bfdae3a41c551b7dd",
"assets/assets/images/loading.png": "5612152e211e3872e32206ec14beea84",
"assets/assets/images/ic_goalong_tour_image.png": "586775c96a246e6fffa47e19b7108546",
"assets/assets/images/bg_goalong_guide_guide4.png": "af650d70346663c78d318ac9dba69230",
"assets/assets/images/ic_goalong_ticket_yes.png": "37d1f9752bafe6b15cfeeec657afca59",
"assets/assets/images/ic_mine_fun_way.png": "c87223432692ed65cecc4618c075c877",
"assets/assets/images/ic_fun_way_detail_park_item_enjoin.png": "0963f61a5549b529ec60a197a1ab874c",
"assets/assets/data/province.json": "2bdff2be5809518cb7e046c39f2e0827",
"assets/assets/data/cities.json": "01e314a5aca7f8002bdf7618368a30dd"
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
