// ADD FIXED CLASS TO HEADER ON SCROLL
$(document).on("scroll", function (){
    if ($(window).scrollTop() === 0) 
        $("header").removeClass("fixed");
    else
        $("header").attr("class", "fixed");
}); 

// SLOW SCROLL FUNCTIION
function slowScroll(id){
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 670);
}

// CHANGE TOP BLOCK BACKGROUND
demo();
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
async function demo() {
    while (true) {
        for (let i = 0; i < 6; i++) {
            $("#top").addClass("background_" + i);
            await sleep(4000);
            $("#top").removeClass("background_" + i);
        }   
    }
}

$(document).on("scroll", function (){
    if ( $(window).scrollTop() > 800 && $(window).scrollTop() < 1952 ) {
        $("#about_item").addClass("underline");
    }else{
        $("#about_item").removeClass("underline");
    }   

    console.log( $(window).scrollTop() );
}); 