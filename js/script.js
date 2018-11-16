$(document).ready(function () {
   //set options

   var speed = 500;              //Fade Speed
   var autoswitch =true;        //Auto Slider Option
   var autoswitch_speed=4000     //Auto Slider Speed

    //Add initial active class
    $('.slide').first().addClass('active');

//Hide all slides
    $('.slide').hide();

    //Show first Slide
    $('.active').show();
    //Next Handler
    $('#next').on('click', nextSlide);
    //prev Handler
    $('#prev').on('click',prevSlide);

    //Slider Autoswitch
    if (autoswitch==true){
        setInterval(function () {
            $('.active').removeClass('active').addClass('oldActive');
            if($('.oldActive').is(':last-child')){
                $('.slide').first().addClass('active');
            }else {
                $('.oldActive').next().addClass('active');
            }
            $('.oldActive').removeClass('oldActive');
            $('.slide').fadeOut(speed);
            $('.active').fadeIn(speed);
            },autoswitch_speed);
    }
    //switch to next Slide
    function nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        }else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
    function prevSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        }else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

});

