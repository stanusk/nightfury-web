// Srandicky fungujuce iba na kontakt page (ak je otvorena priamo)


// loading icon
var load = $("<img/>", {src: "img/hourglass.svg", id:"load"}),
// overlay (hidden by default)
    overlay = $("<div/>", {id: "overlay"}),
// birdman's head (same size img as body, mostly transparent)
    birdHead = $("<img/>", {id: "bird-head", src:"img/bird-head.png"}),
// birdman's body (contains also the head var above)
    birdBody = $("<div/>", {id: "bird-body"}).html(birdHead),

    pageTitle = $(".page-title"),
    twitter = $(".fa-twitter");


// append hidden overlay to body
$("body").append(overlay);

// make page title into a moving tile with loading icon on click
pageTitle
    .on("click", function() {
        var left = $(this).position().left;
        var width = $(this).width();
        var parentWidth = $(this).parent().width();
        // display overlay with loading icon
        overlay.show().html(load);
        // move page title to left or right and hide overlay
        $(this).animate({
            "left": parentWidth - width - left
        }, 2000, function(){
            overlay.hide();
        });

        // setTimeout(function(){
            
        // }, 2000); 
});

// make twitter icon change into a birdman image with flying head on click
twitter.parent("a").on("click", function(evt) {
    evt.preventDefault();
    twitter.hide();
    // toggle visibility of overlay/twitter icon on click
    overlay
        .html(birdBody)
        .attr("title", "Click to exit, arrows to decapitate.")
        .show()
        .on("click", function() {
            $(this).hide();
            twitter.show();
    });

    // reset position of head in case it was moved by user
    birdHead.css({'left': 0});
    birdHead.css({'top': 0});
    // show initial animation of birdman nodding
    for (var n = 0; n < 2; n++) {
        birdHead.animate({'top': 10});
        birdHead.animate({'top': 0});
    }
});

// allow movement of the birdman's head by using arrows
$(document).keydown(function(evt) {
    if (birdHead.is(":visible")) {
        evt.preventDefault();
        // get position each time a button is pressed
        var top = birdHead.position().top;
        var left = birdHead.position().left;
        // set speed of movement
        var speed = 5;
        // move head in desired direction
        var which = evt.which || evt.keyCode;
        switch(which){
            case 38:
                birdHead.css({'top': top-speed});
                break;
            case 40:
                birdHead.css({'top': top+speed});
                break;
            case 37:
                birdHead.css({'left': left-speed});
                break;
            case 39:
                birdHead.css({'left': left+speed});
                break;
            // hide overlay with birdman on esc button
            case 27:
                overlay.hide();
                twitter.show();
                break;
        }
    }
});

// progress bar
var progress = $("<div/>", {id: "progress"}),
    bar = $("<div/>", {id: "bar"}).html(progress);

$(".fa-shield").parent().click(function(evt){
    evt.preventDefault();
    overlay
        .html(bar)
        .show();

    progress.animate({width:"100%", left: 0}, 1000, "linear", function(){
        overlay.hide();
        $(this).css({width: 0, left: "50%"});
    });

});

// back to top sipka
BackToTop.full();