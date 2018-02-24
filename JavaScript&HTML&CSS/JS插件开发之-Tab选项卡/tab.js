;
(function($) {
    var Tab = function(tab) {
        var _this_ = this;
        // 保存单个tab组件
        this.tab = tab;
        this.config = {
            // 用来定义鼠标的促发类型，是 click 还是 mouseover
            triggerType: 'click',
            // 用来定义内容切换效果，是直接切换 default ，还是淡入淡出效果 fade
            effect: 'fade',
            // 默认展示第几个tab
            invoke: '1',
            // 用来定义tab是否自动切换，当指定了时间间隔，就表示自动切换，并且切换时间为指定时间间隔
            auto: '5000'
        };
        if (this.getConfig()) {
            $.extend(this.config, this.getConfig());
        }
        // 保存tab标签列表，和对应内容列表
        this.tabItems = this.tab.find('ul.tab-nav li');
        this.contentItems = this.tab.find('div.content-wrap div.content-item');
        var config = this.config;
        if (config.triggerType == 'click') {
            this.tabItems.on(config.triggerType, function() {
                _this_.invoke($(this));
            });
        } else if (config.triggerType == 'mouseover' || config.triggerType != 'click') {
            this.tabItems.on('mouseover', function() {
                _this_.invoke($(this));
            });
        }
        if (config.auto) {
            // 定义全局定时器
            this.timer = null;
            this.loop = 0;
            this.autoPlay();
            this.tab.hover(function() {
                window.clearInterval(_this_.timer);
            }, function() {
                _this_.autoPlay();
            })
        }
        if (config.invoke > 1) {
            this.invoke(this.tabItems.eq(config.invoke - 1));
        }
    };
    Tab.prototype = {
        getConfig: function() {
            // 获得tab elem节点上的data-config
            var config = this.tab.attr('data-config');
            // 确保有配置参数
            if (config && config != '') {
                return $.parseJSON(config);
            } else {
                return null;
            }
        },
        invoke: function(currentTab) {
            var _this_ = this;
            var index = currentTab.index();
            var effect = this.config.effect;
            var contentItems = this.contentItems;
            // this.tabItems.removeClass('actived');
            // currentTab.addClass('actived');
            currentTab.addClass('actived').siblings().removeClass('actived');
            if (effect == 'fade') {
                contentItems.eq(index).fadeIn().siblings().fadeOut();
            } else if (effect == 'default' || effect == 'fade') {
                contentItems.eq(index).addClass('current').siblings().removeClass('current');
            }
            if (this.config.auto) {
                this.loop = index;
            }
        },
        autoPlay: function() {
            var _this_ = this;
            var tabItems = this.tabItems;
            var tabLength = tabItems.length;
            var config = this.config;
            this.timer = window.setInterval(function() {
                _this_.loop++;
                if (_this_.loop >= tabLength) {
                    _this_.loop = 0;
                }
                tabItems.eq(_this_.loop).trigger(config.triggerType);
            }, config.auto);
        }
    };
    Tab.init = function(tabs) {
        var _this_ = this;
        tabs.each(function() {
            new _this_($(this));
        });
    };
    // 注册成jQuery方法
    $.fn.extend({
        tab: function() {
            this.each(function() {
                new Tab($(this));
            });
            return this;
        }
    });
    // window.Tab = Tab;
})(jQuery);