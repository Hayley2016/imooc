;
(function($) {
    var LightBox = function() {
        var self = this;
        // 创建遮罩和弹出层
        this.popupMask = $('<div id="G-lightbox-mask">');
        this.popupWin = $('<div id="G-lightbox-popup">');
        // 保存BODY
        this.bodyNode = $(document.body);
        // 渲染剩余的DOM，并且插入到BODY
        this.renderDOM();
        this.picViewArea = this.popupWin.find('div.lightbox-pic-view'); // 图片区域
        this.popupPic = this.popupWin.find('img.lightbox-image'); // 图片
        this.picCaptionArea = this.popupWin.find('div.lightbox-pic-caption'); // 标题区域
        this.nextBtn = this.popupWin.find('span.lightbox-next-btn'); // 上一页
        this.prevBtn = this.popupWin.find('span.lightbox-prev-btn'); // 下一页
        this.captionText = this.popupWin.find('p.lightbox-pic-desc'); // 标题
        this.currentIndex = this.popupWin.find('span.lightbox-of-index'); // 索引
        this.closeBtn = this.popupWin.find('span.lightbox-close-btn'); // 关闭按钮
        // 准备开发委托事件，获取组元素
        this.groupName = null;
        this.groupData = [];
        this.bodyNode.on('click', 'js-lightbox,*[data-role=lightbox]', function(e) {
            // 阻止事件冒泡
            e.stopPropagation();
            var currentGroupName = $(this).attr('data-group');
            if (currentGroupName != self.groupName) {
                self.groupName = currentGroupName;
                // 根据当前组名获得同一组数据
                self.getGroup();
            }
            // 初始化弹出
            self.initPopup($(this));
        });
        // 关闭
        this.popupMask.click(function() {
            self.popupMask.fadeOut();
            self.popupWin.fadeOut();
        });
        this.closeBtn.click(function() {
            self.popupMask.fadeOut();
            self.popupWin.fadeOut();
        });

    };
    LightBox.prototype = {
        initPopup: function(currentObj) {
            var self = this;
            var src = currentObj.attr('data-source');
            var id = currentObj.attr('data-id');
            this.showMaskAndPopup(src, id);
        },
        getINdexOf: function(id) {
            var index = 0;
            $(this.groupData).each(function(i) {
                index = i;
                if (this.id === id) {
                    return false;
                }
            });
            return index;
        },
        loadPicSize: function(src) {
            var self = this;
            self.popupPic.css({
                width: 'auto',
                height: 'auto'
            }).hide();
            this.preLoadImg(src, function() {
                self.popupPic.attr('src', src);
                var picWidth = self.popupPic.width();
                var picHeight = self.popupPic.height();
                self.changePic(picWidth, picHeight);
            });
        },
        changePic: function(width, height) {
            var self = this;
            var winWidth = $(window).width(),
                winHeight = $(window).height();
            var scale = Math.min(winWidth / (width + 10), winHeight / (height + 10), 1);
            width = width * scale;
            height = height * scale;
            this.picViewArea.animate({
                width: width - 10,
                height: height - 10
            });
            this.popupWin.animate({
                width: width - 10,
                height: height - 10,
                marginLeft: -width / 2,
                top: (winHeight - height) / 2
            }, function() {
                self.popupPic.css({
                    width: width,
                    height: height
                }).fadeIn();
                self.picCaptionArea.fadeIn();
            });
            this.captionText.text(this.groupData[this.index].caption);
            this.currentIndex.text('当前索引：' + (this.index + 1) + ' / ' + this.groupData.length);
        },
        preLoadImg: function(src, cb) {
            var self = this;
            var img = new Image();
            if (!!window.ActiveXObject) {
                img.onreadystatechange = function() {
                    if (this.readyState === 'complete') {
                        cb && cb();
                    }
                }
            } else {
                img.onload = function() {
                    cb && cb();
                }
            }
            img.src = src;
        },
        showMaskAndPopup: function(src, id) {
            var self = this;
            this.popupPic.hide();
            this.picCaptionArea.hide();
            this.popupMask.fadeIn();
            var winWidth = $(window).width(),
                winHeight = $(window).height();
            this.picViewArea.css({
                width: winWidth / 2,
                height: winHeight / 2
            });
            this.popupWin.fadeIn();
            var viewHeight = winHeight / 2 + 10
            this.popupWin.css({
                width: winWidth / 2 + 10,
                height: viewHeight,
                marginLeft: -(winWidth / 2 + 10) / 2,
                top: -viewHeight
            }).animate({
                top: (winHeight - viewHeight) / 2
            }, function() {
                // 加载图片
                self.loadPicSize(src);
            });
            // 获取索引
            this.index = this.getINdexOf(id);
            // 判断是否显示上下切换按钮
            var groupDataLength = this.groupData.length;
            if (groupDataLength > 1) {
                if (this.index === 0) {
                    this.nextBtn.removeClass('disabled');
                    this.prevBtn.addClass('disabled');
                } else if (this.index === groupDataLength - 1) {
                    this.prevBtn.removeClass('disabled');
                    this.nextBtn.addClass('disabled');
                } else {
                    this.prevBtn.removeClass('disabled');
                    this.nextBtn.removeClass('disabled');
                }
            }
            // console.log(this.index);
        },
        getGroup: function() {
            var self = this;
            self.groupData = [];
            var groupList = this.bodyNode.find('*[data-group=' + this.groupName + ']');
            groupList.each(function() {
                self.groupData.push({
                    src: $(this).attr('data-source'),
                    id: $(this).attr('data-id'),
                    caption: $(this).attr('data-caption')
                })
            });
        },
        renderDOM: function() {
            var strDom = `<div class="lightbox-pic-view">
				            <span class="lightbox-btn lightbox-prev-btn"></span>
				            <img src="http://file.mumayi.com/forum/201602/28/164722sy84snndg8a0pnsm.jpg" class="lightbox-image">
				            <span class="lightbox-btn lightbox-next-btn"></span>
				        </div>
				        <div class="lightbox-pic-caption">
				            <div class="lightbox-caption-area">
				                <p class="lightbox-pic-desc">图片标题</p>
				                <span class="lightbox-of-index">当前索引：0 of 0</span>
				            </div>
				            <span class="lightbox-close-btn"></span>
				        </div>`;
            this.popupWin.html(strDom);
            this.bodyNode.prepend(this.popupMask, this.popupWin);
        }
    };
    window['LightBox'] = LightBox;
})(jQuery);