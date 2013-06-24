/**
 * Load Background Modifying Script
**/

$(window).load(function() {
	$("#background").fullBg();
});

/**
 * Tooltip Hover Effects
**/

$("#github").hover(
  function () {
    $('#tt-github').show();
  },
  function () {
    $('#tt-github').hide();
  }
);

$("#linkedin").hover(
  function () {
    $('#tt-linkedin').show();
  },
  function () {
    $('#tt-linkedin').hide();
  }
);

$("#contact").hover(
  function () {
    $('#tt-contact').show();
  },
  function () {
    $('#tt-contact').hide();
  }
);

/** 
 * Initializes the BXSlider Plugin
**/

$(document).ready(function(){
  $('.bxslider').bxSlider({
    infiniteLoop: true,
    pause: 3000,
    auto: true,
    controls: false
  });
});