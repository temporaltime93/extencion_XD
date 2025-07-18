chrome.webRequest.onCompleted.addListener(
  function (details) {
    if (details.url.includes(".m3u8")) {
      chrome.storage.local.set({ m3u8Url: details.url });
    }
  },
  { urls: ["<all_urls>"] }
);
