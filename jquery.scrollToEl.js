/**
 * ScrollToEl - v0.1.1 - 2013-01-09
 * Copyright (c) 2012 Tomislav Capan; Licensed under MIT
 * ------------------------------------------------------
 **/

(function($){
  $.fn.scrollToEl = function(options, callback) {
    var defaults = {
          duration  : ''
        , offset    : 0
      }
    , options = $.extend(defaults, options);

    this.each(function() {  
      var $this     = $(this)
        , offset    = $this.offset().top - options.offset
        , duration  = options.duration
        , easing    = options.easing;
      $(document.body).animate({ scrollTop: offset }, duration, easing, callback);
    });
    return this;
  };
})(jQuery);
