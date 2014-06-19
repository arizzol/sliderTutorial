$(document).ready(function() {
    $('#carousel ul li:first').before($('#carousel ul li:last'));
    
    $('#nav-right').click(function() {
        var item_width = $('#carousel ul li').outerWidth() + 10;
        var left_indent = parseInt($('#carousel ul').css('left')) - item_width;
        console.log(item_width);
        console.log($('#carousel ul').css('left'));
        console.log(left_indent);
    })
    
    $("#carousel li").click(function() {
        console.log($(this));
        $("#carousel ul").animate({
            marginLeft:-480}, 900);
    });
})