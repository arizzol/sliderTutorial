$(document).ready(function() {
    $('h2').helloWorld({
        text: 'Salut, le monde!'
    });
});




/*(function($) {
    $.widget("aj.filterable", {
      options: { classname : "" },
      
      _create: function() {
        // This is where the widget is created
      },
      
      filter: function() {
        // Methods without an underscore are "public"
      },
      
      _hover: function() {
        // Methods with an underscore are "private"
      },
      
      _setOption: function( key, value ) {
        // Use the _setOption method to respond to changes to options
        switch(key) {
            case "length":
                break;
        }
        // and call the parent function too
        return this._superApply(arguments);
      }
      _destroy: function() {
        // Use the destroy method to reverse everything the plugin has applied
        return this._super();
      },
    });
})(jQuery);
*/