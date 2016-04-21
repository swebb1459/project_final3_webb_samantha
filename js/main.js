$(document).ready(function() {

    //Code below is for MixItUp jQuery plugin
    //It filters a selection based on the data-filter provided
    //used on menu.html to sort through the menu items
    $(function() {
        $('#menu').mixItUp();
    });

    //this provides a slider to present mutlitple images
    //in a carousel. It is used on the homepage.
    $('.bxslider').bxSlider();

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

//JavaScript code that adds an aside to the body with an image
//when a user mouseenter the #gift_cards element.
//When the mouse leaves the element, the aside is removed.
var element = document.getElementById( 'gift_cards' );

element.addEventListener('mouseenter', function() {

    var aside = document.createElement( 'aside' );

    aside.innerHTML = '<img src="img/alien.png" alt="alien" title="alien" />';
    aside.className = 'alien';

    document.body.appendChild(aside);
});

element.addEventListener('mouseleave', function() {

    var elem = document.getElementsByClassName('alien');
    elem[0].parentNode.removeChild(elem[0]);
});
