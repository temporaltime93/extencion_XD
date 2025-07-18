chrome.storage.local.get(["m3u8Links", "m3u8Url"], (data) => {
  const container = document.getElementById("links");
  const allLinks = new Set();

  if (data.m3u8Links) data.m3u8Links.forEach(link => allLinks.add(link));
  if (data.m3u8Url) allLinks.add(data.m3u8Url);

  if (allLinks.size === 0) {
    container.textContent = "No se detectaron enlaces .m3u8.";
    return;
  }

  container.innerHTML = "";
  allLinks.forEach(url => {
    const a = document.createElement("a");
    a.href = "https://1rubiuwu1.github.io/cusco-alpaca/b.html?link=" + encodeURIComponent(url); // ? Redirigir a tu reproductor
    a.textContent = url;
    a.target = "_blank";
    container.appendChild(a);
  });
});
