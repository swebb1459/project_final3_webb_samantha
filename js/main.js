$(document).ready(function() {

    //Code below is for MixItUp jQuery plugin
    $(function() {
        $('#menu').mixItUp();
    });

    //jQuery code that changes the color of the navigation when
    //when you mouseenter and mouseleave the main image on the homepage.
    $('#main_image').mouseenter(function() {
        console.log('working');
        $('nav').css('background', '#192860');
    });

    $('#main_image').mouseleave(function() {
        console.log('working');
        $('nav').css('background', '#9cca3d');
    });
});

var element = document.getElementById( 'gift_cards' );

element.addEventListener('mouseenter', function() {

    var aside = document.createElement( 'div' );

    aside.innerHTML = '<img src="img/alien.png" alt="alien" title="alien" />';

    document.body.appendChild(aside);

});
