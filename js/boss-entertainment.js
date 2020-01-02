// HOME
$('.btn-home').click(function(){


});

// ABOUT US
$('.btn-about-us').click(function(){
    $(this).toggleClass('btn-selected');
    $('#about-us-container').slideToggle('slow');

    $('#main-header-container').toggleClass('about-us-adjustment');
});

// CONTACT US
$('.btn-contact-us').click(function(){
    $('#contact-us').modal();

    $('.btn-about-us').removeClass('btn-selected');
    $('#about-us-container').slideUp('slow');

    $('#main-header-container').removeClass('about-us-adjustment');
});

// CAROUSEL
$('.carousel').carousel({
    interval: 2500
});

