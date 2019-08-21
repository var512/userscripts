// ==UserScript==
// @name         Twitter - Settings
// @description  My personal settings for browsing Twitter with JavaScript disabled.
// @namespace    var512
// @author       var512
// @version      0.0.1
// @supportURL   https://gitlab.com/var512
// @supportURL   https://github.com/var512
// @include      /^https?:\/\/(mobile\.)?twitter\.com(.*)/
// @icon         https://upload.wikimedia.org/wikipedia/pt/3/3d/Twitter_logo_2012.svg
// @license      MIT
// @noframes
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(() => {
  'use strict';

  const dom = {
    observe(params) {
      new MutationObserver((mutations, observer) => {
        const el = document.querySelector(params.selector);
        if (el) {
          observer.disconnect();
          params.done(el);
        }
      }).observe(params.parent || document, {
        subtree: !!params.recursive,
        childList: true,
      });
    },
    remove(el) {
      const domEl = document.querySelector(el);
      if (domEl) {
        domEl.remove();
      }
    },
  };

  // redirect to mobile twitter
  const twitterUrl = new URL(document.URL);

  if (twitterUrl.host !== 'mobile.twitter.com') {
    window.stop();
    window.location.replace(`https://mobile.twitter.com${twitterUrl.pathname}`);

    return;
  }

  // submit forms while !body.nojs
  const bodyNoJs = document.querySelector('body.nojs');

  if (!bodyNoJs) {
    dom.observe({
      selector: 'form',
      parent: document.querySelector('body'),
      recursive: false,
      done(el) {
        el.submit();
      },
    });

    return;
  }

  // load images with their original size
  const pictures = document.querySelectorAll('img');

  pictures.forEach((item) => {
    const picture = item.hasAttribute('src') ? item : undefined;
    if (picture && picture.src.includes(':small')) {
      picture.src = picture.src.replace(/:small$/i, '');
    }
  });

  // remove annoyances
  dom.remove('#container > .toast');
  dom.remove('table#top');
})();
