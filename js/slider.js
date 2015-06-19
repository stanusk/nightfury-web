var Slider = {

    sliderID: null,
    running: false,


    start: function(){
        var covers = $(".cover");

        covers.not(":last").hide();
        $("#cover").css({background: "none"});

        this.sliderID = setInterval(function(){
            var visible = covers.filter(":visible"),
                prev = visible.prev().length ? visible.prev() : covers.last();


            visible.fadeOut(500);
            prev.fadeIn(500);
        }, 2500);

        this.running = true;
    },

    stop: function(){
        clearInterval(this.sliderID);
        this.sliderID = null;
        this.running = false;
    }
};