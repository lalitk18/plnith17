$(".button-collapse").sideNav();
$('.modal-trigger').leanModal();
$('.homex').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$('.aboutx').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$('.schedulex').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -100
    }, 500);
    return false;
});

$('.cfpx').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -100 
    }, 500);
    return false;
});

$('.speakerx').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -100
    }, 500);
    return false;
});

$('.organizerx').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -100
    }, 500);
    return false;
});

$('.comittieesx').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -100
    }, 500);
    return false;
});


$('.boardx').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -100
    }, 500);
    return false;
});

$('.locationx').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -100
    }, 500);
    return false;
});

$('.contactx').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -100
    }, 500);
    return false;
});

$('.registereebx').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -300
    }, 500);
    return false;
});


var l_marginx = (window.innerWidth -1203)/2;
document.getElementById("nav-mobile").style.marginLeft = l_marginx + "px";

$(window).resize(function(){
    var l_margin = (window.innerWidth -1203)/2;
    document.getElementById("nav-mobile").style.marginLeft = l_margin + "px";
});
