(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-e7a2aaec.js")
    );
  })().catch(console.error);

})();
