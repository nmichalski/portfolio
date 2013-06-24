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