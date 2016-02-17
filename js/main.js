"use strict";

var pageActive = false;

function clickEvent(name) {
  ga('send', 'event', { eventCategory: name, eventAction: 'Click' });
}

document.addEventListener('scroll', function (event) {
    if (document.body.scrollHeight > 500 && pageActive == false ) {
      pageActive = true;
      ga('send', 'event', { eventCategory: 'Scrolled 500px', eventAction: 'Scroll' });
    }
});

setTimeout(function () {
  ga('send', 'event', { eventCategory: '30 secs on page', eventAction: 'Time' });
}, 30000);

setTimeout(function () {
  ga('send', 'event', { eventCategory: '60 secs on page', eventAction: 'Time' });
}, 60000);
