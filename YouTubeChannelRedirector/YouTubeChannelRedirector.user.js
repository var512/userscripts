// ==UserScript==
// @name         YouTube - Channel redirector
// @description  Redirects a channel to the videos tab.
// @namespace    var512
// @author       var512
// @version      0.0.1
// @supportURL   https://gitlab.com/var512
// @supportURL   https://github.com/var512
// @include      /^https?:\/\/(www\.)?youtube\.com\/(channel|user)\/([a-zA-Z0-9_-]+)\/?(featured)?$/
// @icon         https://youtube.com/favicon.ico
// @license      MIT
// @noframes
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    "use strict";

    window.stop();
    window.location.replace(document.URL.replace(/(\/featured)?(\/)?$/, '') + '/videos');
})();
