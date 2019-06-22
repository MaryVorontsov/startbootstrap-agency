jQuery(document).ready(function($) {
  "use strict";
  
  $(".toggle-canvas").click(function() {
    $(".offset-canvas").toggleClass("show-canvas");
  });
  $(".offset-canvas ul li a").click(function() {
    $(".offset-canvas").removeClass("show-canvas");
  });
});
