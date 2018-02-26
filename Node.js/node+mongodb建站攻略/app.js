var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();
app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'node_modules')));
app.listen(port);
console.log('started on port ' + port);
app.get('/', function(req, res) {
    res.render('index', {
        title: '首页',
        movies: [{
                title: '机械战警',
                _id: 1,
                poster: 'http://img2.niutuku.com/1312/0809/0809-niutuku.com-10096.jpg'
            },
            {
                title: '机械战警',
                _id: 2,
                poster: 'http://img2.niutuku.com/1312/0809/0809-niutuku.com-10096.jpg'
            },
            {
                title: '机械战警',
                _id: 3,
                poster: 'http://img2.niutuku.com/1312/0809/0809-niutuku.com-10096.jpg'
            },
            {
                title: '机械战警',
                _id: 4,
                poster: 'http://img2.niutuku.com/1312/0809/0809-niutuku.com-10096.jpg'
            },
            {
                title: '机械战警',
                _id: 5,
                poster: 'http://img2.niutuku.com/1312/0809/0809-niutuku.com-10096.jpg'
            }
        ]
    });
});
app.get('/movie/:id', function(req, res) {
    res.render('detail', {
        title: '详情',
        movie: {
            doctor: 'ABC·hahahaa',
            country: '中国',
            title: '电影电影最新',
            year: '2015',
            poster: 'http://dl.bizhi.sogou.com/images/2012/05/4/10680.jpg',
            language: '中文',
            flash: '',
            summary: '简介：想了解前后端通力合作的整个作业线流程吗？本课程就带你完整实现一个从前端到后端的项目，包括nodejs、express、mongodb、jade 模板引擎的使用，以及bootstrap/jQuery的实际应用及场景评估，让你更好的窥探前端的职业发展，为进一步快速自学打下基础。'
        }
    });
});
app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: '后台列表',
        movies: [{
            doctor: 'ABC·hahahaa',
            country: '中国',
            title: '电影电影最新',
            year: '2015',
            poster: 'http://dl.bizhi.sogou.com/images/2012/05/4/10680.jpg',
            language: '中文',
            flash: '',
            summary: '简介：想了解前后端通力合作的整个作业线流程吗？本课程就带你完整实现一个从前端到后端的项目，包括nodejs、express、mongodb、jade 模板引擎的使用，以及bootstrap/jQuery的实际应用及场景评估，让你更好的窥探前端的职业发展，为进一步快速自学打下基础。'
        }]
    });
});
app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title: '后台录入',
        movie: {
            doctor: '',
            country: '',
            title: '',
            year: '',
            poster: '',
            language: '',
            flash: '',
            summary: ''
        }
    });
});