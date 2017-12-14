(function() {
    var datepicker = {};
    datepicker.getMonthData = function(year, month) {
        var ret = [];
        if (!year || !month) {
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth() + 1;
        }
        /*本月第一天*/
        var firstDay = new Date(year, month - 1, 1);
        var firstDayWeekDay = firstDay.getDay();
        if (firstDayWeekDay == 0) {
            firstDayWeekDay = 7;
        }
        year = firstDay.getFullYear();
        month = firstDay.getMonth() + 1;
        /*上月最后一天*/
        var lastDayOfLastMonth = new Date(year, month - 1, 0);
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate();
        /*本月会有多少个上月日期*/
        var preMonthDayCount = firstDayWeekDay - 1;
        /*本月最后一天*/
        var lastDay = new Date(year, month, 0);
        var lastDate = lastDay.getDate();

        for (var i = 0; i < 7 * 6; i++) {
            var date = i + 1 - preMonthDayCount;
            var showDate = date;
            var thisMonth = month;
            if (date <= 0) {
                /*上一月*/
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
            } else if (date > lastDate) {
                /*下一月*/
                thisMonth = month + 1;
                showDate = showDate - lastDate;
            }
            if (thisMonth === 0) thisMonth = 12;
            if (thisMonth === 13) thisMonth = 1;
            ret.push({
                month: thisMonth,
                date: date,
                showDate: showDate
            })
        }
        return {
            year: year,
            month: month,
            days: ret
        }
    }
    window.datepicker = datepicker;
})();
(function() {
    var datepicker = window.datepicker;
    var monthData;
    var $wrapper;
    datepicker.buildUi = function(year, month) {
        monthData = datepicker.getMonthData(year, month);
        var html = '<div class="ui-datepicker-header">' +
            '<a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a>' +
            '<a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>' +
            '<span class="ui-datepicker-curr-month">' + monthData.year + '-' + monthData.month + '</span>' +
            '</div>' +
            '<div class="ui-datepicker-body">' +
            '<table>' +
            '<header><tr><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>日</th></tr></header>' +
            '<tbody>';
        for (var i = 0; i < monthData.days.length; i++) {
            var date = monthData.days[i];
            if (i % 7 === 0) {
                html += '<tr>';
            }
            html += '<td data-date="' + date.date + '">' + date.showDate + '</td>'
            if (i % 7 === 6) {
                html += '</tr>';
            }
        }
        html += '</tbody></table></div>';
        return html;
    }
    datepicker.render = function(direction) {
        var year, month;
        if (monthData) {
            year = monthData.year;
            month = monthData.month;
        }
        if (direction === 'prev') {
            month--;
            if (month === 0) {
                month = 12;
                year--;
            }
        }
        if (direction === 'next') month++;
        var html = datepicker.buildUi(year, month);

        $wrapper = document.querySelector('.ui-datepicker-wrapper')
        if (!$wrapper) {
            $wrapper = document.createElement('div');
            $wrapper.className = 'ui-datepicker-wrapper';
            document.body.appendChild($wrapper);
        }
        $wrapper.innerHTML = html;

    }

    function format(date) {
        var ret = '';
        var padding = function(num) {
            if (num <= 9) {
                return '0' + num;
            } else {
                return num;
            }
        }
        ret += date.getFullYear() + '-';
        ret += padding(date.getMonth() + 1) + '-';
        ret += padding(date.getDate());
        return ret;
    }
    datepicker.init = function(input) {

        datepicker.render();

        var $input = document.querySelector(input);
        var isOpen = false;
        $input.addEventListener('click', function() {
            if (isOpen) {
                $wrapper.classList.remove('ui-datepicker-wrapper-show');
                isOpen = false;
            } else {
                $wrapper.classList.add('ui-datepicker-wrapper-show');
                var left = $input.offsetLeft;
                var top = $input.offsetTop;
                var height = $input.offsetHeight;
                $wrapper.style.top = top + height + 2 + 'px';
                $wrapper.style.left = left + 'px';
                isOpen = true;
            }
        }, false)
        $wrapper.addEventListener('click', function(e) {
            var $target = e.target;
            if (!$target.classList.contains('ui-datepicker-btn')) {
                return
            }
            if ($target.classList.contains('ui-datepicker-prev-btn')) {
                datepicker.render('prev');

            } else if ($target.classList.contains('ui-datepicker-next-btn')) {
                datepicker.render('next');
            }
        }, false)
        $wrapper.addEventListener('click', function(e) {
            var $target = e.target;
            if ($target.tagName.toLowerCase() != 'td') {
                return
            }
            var date = new Date(monthData.year, monthData.month - 1, $target.dataset.date);
            $input.value = format(date);
            $wrapper.classList.remove('ui-datepicker-wrapper-show');
            isOpen = false;
        }, false)
    }
})();