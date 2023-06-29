(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-e21966be.js")
    );
  })().catch(console.error);

})();
