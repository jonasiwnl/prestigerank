(function () {
  const desktopAd = {
    key: "2a41dc0b276417ce8baf43a77bbbab59",
    height: 60,
    width: 468,
  };
  const mobileAd = {
    key: "27ef6b090f99c5183fb8998d9f8e132e",
    height: 50,
    width: 320,
  };
  const ad = globalThis.matchMedia("(min-width: 640px)").matches
    ? desktopAd
    : mobileAd;
  const container = document.currentScript &&
    document.currentScript.parentElement;

  if (container) {
    container.style.width = ad.width + "px";
    container.style.height = ad.height + "px";
  }

  globalThis.atOptions = {
    "key": ad.key,
    "format": "iframe",
    "height": ad.height,
    "width": ad.width,
    "params": {},
  };

  document.write(
    '<script src="https://www.highperformanceformat.com/' +
      ad.key +
      '/invoke.js"><\/script>',
  );
})();
