$(document).ready(function(){
    var animSpeed = 1000;
    var pause = 4000;
    var width = "100%";
    var atSlide = 1;
    //cache DOM
    var $slider = $("#slider");
    var $slideBox = $slider.find(".slides");
    var $slides = $slideBox.find(".slide");
    var $img = $slides.find(".slide-img");
    //
    var interval;
    var clicked = false;
    //
    function imgSize(){
        $img
    }
    function startSlides(){
        interval = setInterval(function(){
            $slideBox.animate({'margin-left': '-='+width},animSpeed, function(){
                atSlide++;
                if(atSlide >= $slides.length){
                    atSlide = 1;
                    $slideBox.css('margin-left',0);
                }
                console.log(atSlide);
            });
        },pause);
    }
    function stopSlides(){
        clearInterval(interval);
    }
    $("#pre").click(function(){
        if(clicked==false){
            clicked=true;
            setTimeout(function(){
                clicked=false;
            },1000);
            if(atSlide!=1){
                atSlide--;
                $slideBox.animate({'margin-left': '+='+width},animSpeed);
                console.log(atSlide);
            }else if(atSlide<=1){
                atSlide = $slides.length;
                $slideBox.css('margin-left','-800%');
                $slideBox.animate({'margin-left': '+='+width},animSpeed);
                atSlide--;
                console.log(atSlide);
            }
        }
    });
    $("#next").click(function(){
        if(clicked==false){
            clicked=true;
            setTimeout(function(){
                clicked=false;
            },1000);
            if(atSlide!=$slides.length){
                atSlide++;
                $slideBox.animate({'margin-left': '-='+width},animSpeed);
                console.log(atSlide);
            }else if(atSlide>=$slides.length){
                atSlide = 1;
                $slideBox.css('margin-left',0);
                $slideBox.animate({'margin-left': '-='+width},animSpeed);
                atSlide++;
                console.log(atSlide);
            }
        }
    });
    imgSize();
    startSlides();
    $slider.on('mouseenter',stopSlides).on('mouseleave',startSlides);
});