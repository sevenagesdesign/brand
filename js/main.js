jQuery(function($) {
    
    // Set Global Variables
    
    var winheight = $(window).height(),
        navheight = $('header').height();
    
    // Toggle Mobile Navigation
    
    $('#mobile-nav-toggle').click(function(){
        $(this).toggleClass('open');
        $('nav#mobile-nav').slideToggle();
    });
    
    // Set Top Div Height
    
    $('div#top').css('height', winheight * 0.65);
    
    $(window).resize(function(){
        var winheight = $(this).height(),
            navheight = $('header').height();
        
        $('div#top').css('min-height', winheight * 0.65);
    });
    
    $(window).on('scroll', function(e){
        var top = $(this).scrollTop();
        
        if (top > 16) {
            $('header, #mobile-nav').addClass('sticky');
        } else {
            $('header, #mobile-nav').removeClass('sticky');
        }
    });
});

