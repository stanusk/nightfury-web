var Slider = {

    sliderID: null,
    running: false,

    start: function(){
        this.sliderID = setInterval(function(){
            var visible = covers.filter(":visible"),
                prev = visible.prev();

            if (! prev.length) prev = covers.last();

            visible.fadeOut(500);
            prev.fadeIn(500);
        }, 3500);

        this.running = true;
    },

    stop: function(){
        clearInterval(this.sliderID);
        this.sliderID = null;
        this.running = false;
    },
    toggle: function(){
        if (this.running) this.stop();
        else this.start();
    }
};