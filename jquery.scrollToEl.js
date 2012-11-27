/**
 * ScrollToEl - v0.1.0 - 2012-11-27
 * Copyright (c) 2012 Tomislav Capan; Licensed under MIT
 * ------------------------------------------------------
 **/

(function($){
  $.fn.scrollToEl = function(options) {
    var defaults = {
          duration  : ''
        , offset    : 0
      }
    , options = $.extend(defaults, options);

    this.each(function() {  
      var $this     = $(this)
        , offset    = $this.offset().top - options.offset
        , duration  = options.duration;
      $(document.body).animate({ scrollTop: offset }, duration);
    });
    return this;
  };
})(jQuery);
