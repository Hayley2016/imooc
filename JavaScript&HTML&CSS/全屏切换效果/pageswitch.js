// 闭包
;
(function($) {
    "use strict";
    // 私有方法
    var privateFun = function() {

    };
    var _prefix = (function(temp) {
        var aPrefix = ['webkit', 'Moz', 'o', 'ms'],
            props = '';
        for (var i in aPrefix) {
            props = aPrefix[i] + 'Transition';
            if (temp.style[props] != undefined) {
                return '-' + aPrefix[i].toLowerCase() + '-';
            }
        }
        return false;
    })(document.createElement(PageSwitch1));
    var PageSwitch1 = (function() {
        function PageSwitch(element, options) {
            // jQuery的extend方法：将用户自定义的插件参数与插件的默认参数加以合并
            // 一个好的做法是将一个新的空对象做为$.extend的第一个参数，defaults和用户传递的参数对象紧随其后，
            // 这样做的好处是所有值被合并到这个空对象上，保护了插件里面的默认值。
            this.settings = $.extend(true, $.fn.PageSwitch.defaults, options || {});
            this.element = element;
            this.init();
        }
        PageSwitch.prototype = {
            // 初始化dom结构，布局，分页以及绑定事件
            init: function() {
                var me = this;
                // 初始化参数
                me.selectors = me.settings.selectors;
                me.sections = $(me.selectors.sections);
                me.section = $(me.selectors.section);
                me.direction = me.settings.direction == 'vertical' ? true : false;
                me.pagesCount = me.pagesCounts();
                me.index = (me.settings.index >= 0 && me.settings.index < me.pagesCount) ? me.settings.index : 0;
                me.canScroll = true;
                if (me.settings.pagination) {
                    me._initPaging();
                }
                if (!me.direction) {
                    me._initLayout();
                }
                if (me.index) {
                    me._scrollPage(true);
                }
                // 初始化事件
                me._initEvent();
            },
            // 获取滑动页面数量
            pagesCounts: function() {
                return this.section.length;
            },
            // 获取滑动的宽度（横屏滑动）或高度（竖屏滑动）
            switchLength: function() {
                return this.direction ? this.element.height() : this.element.width();
            },
            // 针对横屏情况进行布局
            _initLayout: function() {
                var me = this;
                if (!me.direction) {
                    var width = (me.pagesCount * 100) + "%",
                        cellWidth = (100 / me.pagesCount).toFixed(2) + "%";
                    me.sections.width(width);
                    me.section.width(cellWidth).css("float", "left");
                }
            },
            // 实现分页的dom结构及css样式
            _initPaging: function() {
                var me = this;
                var pagesClass = me.selectors.page.substring(1);
                me.activeClass = me.selectors.active.substring(1);
                var pageHtml = '<ul class="' + pagesClass + '">';
                for (var i = 0; i < me.pagesCount; i++) {
                    pageHtml += '<li></li>';
                }
                pageHtml + '</ul>';
                me.element.append(pageHtml);
                var pages = me.element.find(me.selectors.page);
                me.pageItem = pages.find('li');
                me.pageItem.eq(me.index).addClass(me.activeClass);
                if (me.direction) {
                    pages.addClass('vertical');
                } else {
                    pages.addClass('herizontal');
                }
            },
            // 初始化插件事件
            _initEvent: function() {
                var me = this;
                // 分页click事件
                me.element.on('click', me.selectors.page + ' li', function() {
                    me.index = $(this).index();
                    me._scrollPage();
                });
                // 鼠标滚轮事件
                me.element.on('mousewheel DOMMouseScroll', function(e) {
                    e.preventDefault();
                    if (me.canScroll) {
                        var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                        if (delta > 0 && (me.index && !me.settings.loop || me.settings.loop)) {
                            me.prev();
                        } else if (delta < 0 && (me.index < (me.pagesCount - 1) && !me.settings.loop || me.settings.loop)) {
                            me.next();
                        }
                    }
                });
                // 键盘事件
                if (me.settings.keyboard) {
                    $(window).keydown(function(e) {
                        var keyCode = e.keyCode;
                        if (keyCode == 37 || keyCode == 38) {
                            me.prev();
                        } else if (keyCode == 39 || keyCode == 40) {
                            me.next();
                        }
                    });
                }
                // 窗口改变
                /*绑定窗口改变事件*/
                /*为了不频繁调用resize的回调方法，做了延迟*/
                var resizeId;
                $(window).resize(function() {
                    clearTimeout(resizeId);
                    resizeId = setTimeout(function() {
                        var currentLength = me.switchLength();
                        var offset = me.settings.direction ? me.section.eq(me.index).offset().top : me.section.eq(me.index).offset().left;
                        if (Math.abs(offset) > currentLength / 2 && me.index < (me.pagesCount - 1)) {
                            me.index++;
                        }
                        if (me.index) {
                            me._scrollPage();
                        }
                    }, 500);
                });
                me.sections.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend', function() {
                    me.canScroll = true;
                    if (me.settings.callback && $.type(me.settings.callback) == 'function') {
                        me.settings.callback();
                    }
                });
            },
            // 滑动事件
            _scrollPage: function() {
                var me = this,
                    dest = me.section.eq(me.index).position();
                if (!dest) return;
                me.canScroll = false;
                if (_prefix) {
                    me.sections.css(_prefix + 'transition', 'all ' + me.settings.duration + 'ms ' + me.settings.easing);
                    var translate = me.direction ? 'translateY(-' + dest.top + 'px)' : 'translateX(-' + dest.left + 'px)';
                    me.sections.css(_prefix + 'transform', translate);
                } else {
                    var animateCss = me.direction ? { top: -dest.top } : { left: -dest.left };
                    me.sections.animate(animateCss, me.settings.duration, function() {
                        me.canScroll = true;
                        if (me.settings.callback && $.type(me.settings.callback) == 'function') {
                            me.settings.callback();
                        }
                    });
                }
                if (me.settings.pagination) {
                    me.pageItem.eq(me.index).addClass(me.activeClass).siblings('li').removeClass(me.activeClass);
                }
            },
            // 向上翻页
            prev: function() {
                var me = this;
                if (me.index > 0) {
                    me.index--;
                } else if (me.settings.loop) {
                    me.index = me.pagesCount - 1;
                }
                me._scrollPage();
            },
            // 向下翻页
            next: function() {
                var me = this;
                if (me.index < me.pagesCount - 1) {
                    me.index++;
                } else if (me.settings.loop) {
                    me.index = 0;
                }
                me._scrollPage();
            }

        }
        return {
            PageSwitch: PageSwitch
        };
        // return PageSwitch;
    })();
    // 动态方式开发插件
    $.fn.PageSwitch = function(options) {

        // 我们都知道jQuery一个时常优雅的特性是支持链式调用，选择好DOM元素后可以不断地调用其他方法。
        // 要让插件不打破这种链式调用，只需return一下即可。
        return this.each(function() {
            var me = $(this);
            var instance = me.data('PageSwitch');
            if (!instance) {
                // 单例模式
                // 如果实例存在则不再重复创建实例
                // 利用data()来存放插件对象的实例
                instance = new PageSwitch1.PageSwitch(me, options); // new PageSwitch1(me, options);
                me.data('PageSwitch', instance);
            }
            // 这样可以在插件外部调用 $('div').PageSwitch('init'); 调用插件的init方法
            if ($.type(options) === 'string') return instance[options]();
        });
    };
    // 插件默认参数
    $.fn.PageSwitch.defaults = {
        selectors: {
            sections: '.sections',
            section: '.section',
            page: '.pages', // 分页元素
            active: '.active' // 分页选中元素
        },
        index: 2,
        easing: 'ease',
        duration: 500,
        loop: true, // 是否循环播放
        pagination: true, // 是否分页
        keyboard: true, // 是否触发键盘事件
        direction: 'vertical', // herizontal vertical
        callback: ''
    };
    // 插件初始化
    $(function() {
        $('[data-PageSwitch]').PageSwitch();
    });

})(jQuery);
// // 插件初始化
// $('div').PageSwitch({
//     direction: 'herizontal'
// });
// // 调用插件的init方法
// $('div').PageSwitch('init');