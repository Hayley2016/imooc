// 图片预加载插件 闭包 局部作用域
(function($) {
    var PreLoad = function(imgs, opts) {
        this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
        this.opts = $.extend({}, this.DEFAULTS, opts);
        if (this.opts.order == 'ordered') {
            this._ordered();
        } else {
            this._unordered();
        }

    };
    PreLoad.DEFAULTS = {
        order: 'unoredered', //默认执行无序预加载
        each: null, // 每一张图片加载完毕后执行
        all: null // 所有图片加载完毕后执行
    }
    PreLoad.prototype._ordered = function() { //有序加载
        var imgSrc = this.imgs;
        var opts = this.opts;
        var count = 0;
        var length = imgSrc.length;
        var load = function() {
            var imgObj = new Image();
            imgObj.onload = function() {
                opts.each && opts.each(count);
                if (count >= length) {
                    opts.all && opts.all();
                } else {
                    load();
                }
                count++;
            };
            imgObj.src = imgSrc[count];
        };
        load();
    };
    PreLoad.prototype._unordered = function() { //无序加载
        var imgSrc = this.imgs;
        var opts = this.opts;
        var count = 0;
        var length = imgSrc.length;
        $.each(imgSrc, function(i, src) {
            if (typeof src != 'string') return;
            var imgObj = new Image();
            imgObj.onload = function() {
                opts.each && opts.each(count, length);
                if (count >= length - 1) {
                    opts.all && opts.all();
                }
                count++;
            };
            imgObj.src = src;
        });
    };
    // $.fn.extend - > $('#img').PreLoad(); 给jQuery对象添加方法。
    // $.extend - > $.PreLoad(); 为扩展jQuery类本身.为类添加新的方法。
    $.extend({
        preload: function(imgs, opts) {
            new PreLoad(imgs, opts);
        }
    })
})(jQuery);
// 传递jQuery对象，用$符号接收，则闭包函数中就能使用jQuery对象啦