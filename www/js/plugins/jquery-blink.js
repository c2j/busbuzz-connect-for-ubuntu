(function ($) {
    $.fn.blink = function (options, callback) {
        var defaults = {
            delay: 1000
        };
        var options = $.extend(defaults, options);

        return this.each(function () {
            var timerId;
            var obj = $(this);
            timerId = setInterval(function () {
                if ($(obj).css("visibility") == "visible") {
                    $(obj).css('visibility', 'hidden');
                } else {
                    $(obj).css('visibility', 'visible');
                }
                if (typeof (callback) == "function") {
                    callback();
                }
            }, options.delay);

            obj.data("timerId", timerId);
        });
    }

    $.fn.stopBlink = function () {
        return this.each(function () {
            clearInterval($(this).data("timerId"));
        });
    }
}(jQuery))