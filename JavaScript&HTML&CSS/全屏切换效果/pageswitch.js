// 闭包
;
(function($) {
    // 私有方法
    var privateFun = function() {

    };
    var PageSwitch = (function() {
        function PageSwitch(element, options) {
            // jQuery的extend方法：将用户自定义的插件参数与插件的默认参数加以合并
            // 一个好的做法是将一个新的空对象做为$.extend的第一个参数，defaults和用户传递的参数对象紧随其后，
            // 这样做的好处是所有值被合并到这个空对象上，保护了插件里面的默认值。
            this.settings = $.extend(true, $.fn.PageSwitch.default, options || {});
            this.element = element;
            this.init();
        }
        PageSwitch.prototype = {
            // 初始化dom结构，布局，分页以及绑定事件
            init: function() {
                var me = this;
                me.selectors = me.settings.selectors;
                me.sections = $(me.selectors.sections);
                me.section = $(me.selectors.section);
                me.direction = me.settings.direction == 'vertical' ? true : false;
                me.pagesCount = me.pagesCount();
                me.index = (me.settings.index >= 0 && me.settings.index < pagesCount) ? me.settings.index : 0;
                if (!me.direction) {
                    me._initLayout();
                }
                if (me.settings.pagination) {
                    me._initPaging();
                }
                me._initEvent();
            },
            // 获取滑动页面数量
            pagesCount: function() {
                return this.section.length;
            },
            // 获取滑动的宽度（横屏滑动）或高度（竖屏滑动）
            switchLength: function() {
                return this.direction ? this.element.height() : this.element.width();
            },
            // 针对横屏情况进行布局
            _initLayout: function() {
                var me = this;
                var width = (me.pagesCount * 100) + '%';
                var cellWidth = (100 / me.pagesCount).toFixed(2) + '%';
                me.sections.width(width);
                me.section.width(cellWidth).css('float', 'left');
            },
            // 实现分页的dom结构及css样式
            _initPaging: function() {
                var me = this;
                var pagesClass = me.selectors.page.substring(1);
                var activeClass = me.selectors.active.substring(1);
                var pageHtml = '<ul class="' + pagesClass + '"></ul>';
                for (var i = 0; i < me.pagesCount; i++) {
                    pageHtml += '<li></li>';
                }
                me.element.append(pageHtml);
                var pages = me.element.find(me.selectors.page);
                me.pageItem = pages.find('li');
                me.pageItem.eq(me.index).addClass(activeClass);
                if (me.direction) {
                    pages.addClass('vertical');
                } else {
                    pages.addClass('herizontal');
                }
            },
            // 初始化插件事件
            _initEvent: function() {}
        }
        return PageSwitch;
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
                instance = new PageSwitch(me, options);
                me.data('PageSwitch', instance);
            }
            // 这样可以在插件外部调用 $('div').PageSwitch('init'); 调用插件的init方法
            if ($.type(options) === 'string') return instance[options]();
        });
    };
    // 插件默认参数
    $.fn.PageSwitch.default = {
        selectors: {
            sections: '.sections',
            section: '.section',
            page: '.pages',
            active: '.active'
        },
        index: 0,
        easing: 'ease',
        duration: 500,
        loop: false, // 是否循环播放
        pagination: true, // 是否分页
        keyboard: true, // 是否触发键盘事件
        direction: 'vertical', // herizontal
        callback: ''
    };
    // 插件初始化
    $(function() {
        $('[data-PageSwitch]').PageSwitch();
    });

})(jQuery);
// 插件初始化
$('div').PageSwitch({
    direction: 'herizontal'
});
// 调用插件的init方法
$('div').PageSwitch('init');