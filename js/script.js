//add back to top arrow when scrolled down as a link to scroll up
//
BackToTop.full();

// change background images
// 
$("#cover").css({background: "none"});
var covers = $(".cover");

covers.not(":last").hide();

Slider.start();

covers.parents("#cover").click(function(){
    Slider.toggle();
});


// ajax page load
// 
var links = $(".nav li");

links.on("click", "a", function(evt){
    evt.preventDefault();

    var href = $(this).attr("href");

    if (href === "#" || window.location.href.indexOf(href) != -1) return;

    $("main").load(href + " main > *");

    links.removeClass('selected');
    $(this).parent().addClass('selected');
});


// remove dead nav links on click
// 
var dead = links.filter(":nth-child(2), :nth-child(3)");
dead.click(function(){
    dead.slideUp(800);
});
