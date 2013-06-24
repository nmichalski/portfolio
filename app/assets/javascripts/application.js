// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

/**
 * jQuery.fullBg
 * Version 1.0
 * Copyright (c) 2010 c.bavota - http://bavotasan.com
 * Dual licensed under MIT and GPL.
 * Date: 02/23/2010
**/
(function($) {
  $.fn.fullBg = function(){
    var bgImg = $(this);    
    
    function resizeImg() {
      var imgwidth = bgImg.width();
      var imgheight = bgImg.height();
      
      var winwidth = $(window).width();
      var winheight = $(window).height();
    
      var widthratio = winwidth / imgwidth;
      var heightratio = winheight / imgheight;
      
      var widthdiff = heightratio * imgwidth;
      var heightdiff = widthratio * imgheight;
    
      if(heightdiff>winheight) {
        bgImg.css({
          width: winwidth+'px',
          height: heightdiff+'px'
        });
      } else {
        bgImg.css({
          width: widthdiff+'px',
          height: winheight+'px'
        });   
      }
    } 
    resizeImg();
    $(window).resize(function() {
      resizeImg();
    }); 
  };
})(jQuery)