// back to top arrow
var BackToTop = {

    win: $(window),
    body: $("body"),
    icon: $("<i/>", {class: "fa fa-arrow-circle-o-up"}),
    config: {
        topPos: 200
    },

    appendToBody: function() {
        this.body.append(this.icon);
    },

    toTopOnClick: function() {
        this.icon.click(function(){
            BackToTop.body.animate({scrollTop: 0});
        });
    },

    showIfScrolled: function(settings) {

        $.extend(this.config, settings);

        this.win.on("scroll", function() {
            if(BackToTop.win.scrollTop() > BackToTop.config.topPos) BackToTop.icon.fadeIn();
            else BackToTop.icon.fadeOut();
        });
    },

    full: function(settings) {
        this.appendToBody();
        this.toTopOnClick();
        this.showIfScrolled(settings);
    }
};