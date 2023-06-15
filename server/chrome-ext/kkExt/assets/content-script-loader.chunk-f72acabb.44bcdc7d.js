(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-f72acabb.js")
    );
  })().catch(console.error);

})();
