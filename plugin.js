(function($) {
    $.fn.helloWorld = function(options) {
        
        // Establish default settings
        var settings = $.extend({
            text      : 'Hello, dog',
            color     : null,
            fontStyle : null
        }, options);
        
        return this.each( function() {
            $(this).text( settings.text);
            
            if (settings.color) {
                $(this).css('color', settings.color);
            }
            
            if (settings.fontStyle) {
                $(this).css('font-style', settings.fontStyle);                
            }
        });
    }
})(jQuery);