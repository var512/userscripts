// ==UserScript==
// @name         Imgur - Page redirector
// @description  Redirects Imgur pages to images, videos or album download.
// @namespace    var512
// @author       var512
// @version      0.0.2
// @supportURL   https://gitlab.com/var512
// @supportURL   https://github.com/var512
// @include      /^https?:\/\/(www\.)?imgur\.com\/(.+)/
// @exclude      /^https?:\/\/(www\.)?imgur\.com\/(about|privacy|search|upload|t\/)(.*)/
// @icon         https://imgur.com/favicon.ico
// @license      MIT
// @noframes
// @grant        none
// @run-at       document-end
// ==/UserScript==

(() => {
  'use strict';

  const isDebugEnabled = false;
  const imgurUrl = new URL(document.URL);

  if (typeof imgurUrl !== 'object') {
    isDebugEnabled && console.log(`invalid URL: ${imgurUrl}`);
    return;
  }

  const splitPath = imgurUrl.pathname.split('/');
  isDebugEnabled && console.log(`splitPath: ${splitPath} | length: ${splitPath.length}`);

  if (splitPath.length < 2) {
    return;
  }

  // response.status workaround
  const pageTitle = document.querySelector('title');
  const isResponseNotFound = pageTitle && pageTitle.innerText.includes('404 page');
  isDebugEnabled && console.log(`is 404: ${isResponseNotFound}`);

  if (isResponseNotFound) {
    return;
  }

  window.stop();

  if (['a', 'gallery'].indexOf(splitPath[1]) >= 0 && ['zip'].indexOf(splitPath[2]) === -1) {
    window.location.replace(`https://imgur.com/a/${splitPath[2]}/zip`);
    return;
  }

  const imageSrc = document.querySelector('link[rel="image_src"]');
  const isImage = imageSrc !== null;
  isDebugEnabled && console.log(`is image: ${isImage}`);

  let extension = 'gifv';

  if (isImage) {
    extension = imageSrc.attributes.getNamedItem('href').value.split('.').pop();
  }

  const newUrl = `https://i.imgur.com/${splitPath[1]}.${extension}`;

  isDebugEnabled && console.log(`redirect: ${newUrl}`);
  window.location.replace(newUrl);
})();
