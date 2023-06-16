(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-a3ed4557.js")
    );
  })().catch(console.error);

})();
