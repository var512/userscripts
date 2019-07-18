// ==UserScript==
// @name         Loop video files
// @description  Sets the loop attribute when viewing video files in their own window/tab.
// @namespace    var512
// @author       var512
// @version      1.0.0
// @supportURL   https://gitlab.com/var512
// @supportURL   https://github.com/var512
// @include      /\.(m4v|mp4|ogv|webm)$/
// @include      /^data:video\//
// @license      MIT
// @noframes
// @grant        none
// @run-at       document-start
// ==/UserScript==

(() => {
  const elements = document.getElementsByTagName('video');

  if (elements.item(0) !== null) {
    elements.item(0).setAttribute('loop', 'true');
  }
})();
