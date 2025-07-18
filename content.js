const links = Array.from(document.querySelectorAll("a, source, video"))
  .map(el => el.src || el.href)
  .filter(url => url && url.includes(".m3u8"));

if (links.length > 0) {
  chrome.storage.local.set({ m3u8Links: links });
}
