/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    var runned = false;
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() >= 500 && runned == false ) {
        ga('send', 'event', { eventCategory: 'Scrolled 500px', eventAction: 'Scroll' });
        runned = true;
      }
    });

    setTimeout("ga('send', 'event', { eventCategory: '30 seconds on page', eventAction: 'Time' })", 30000);
    setTimeout("ga('send', 'event', { eventCategory: '60 seconds on page', eventAction: 'Time' })", 60000);

});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function clickEvent(name) {
  ga('send', 'event', { eventCategory: name, eventAction: 'Click' });
}
