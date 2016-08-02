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
    
    $('div#top').css('min-height', winheight * 0.65);
    
    $(window).resize(function(){
        var winheight = $(this).height(),
            navheight = $('header').height();
        
        $('div#top').css('min-height', winheight * 0.65);
    });
    
    // Set fluid scroll
    
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 63
                }, 1000);
                return false;
            }
        }
    });
    
    // Sticky Navigation
    
    $(window).on('scroll', function(e){
        var top = $(this).scrollTop();
        
        if (top > 16) {
            $('header, #mobile-nav').addClass('sticky');
        } else {
            $('header, #mobile-nav').removeClass('sticky');
        }
    });
});

