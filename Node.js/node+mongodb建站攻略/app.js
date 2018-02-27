var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Movie = require('./models/movie.js');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();
var _ = require('underscore');

mongoose.connect('mongodb://localhost/');

app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded());
app.locals.moment = require('moment');
// 指定页面中的样式和js从哪个文件夹获取
// 设置静态文件目录
// Express细节探究(1)——app.use(express.static) 地址：https://www.cnblogs.com/A-dam/p/5053299.html
app.use(express.static(path.join(__dirname, 'node_modules')));
app.listen(port);
console.log('started on port ' + port);

app.get('/', function(req, res) {
    Movie.fetch(function(err, movies) {
        if (err) {
            console.log(err);
        }
        res.render('index', {
            title: '首页',
            movies: movies
        });
    });
});
app.get('/movie/:id', function(req, res) {
    var id = req.params.id;
    Movie.findById(id, function(err, movie) {
        res.render('detail', {
            title: '详情' + movie.title,
            movie: movie
        });
    });
    // res.render('detail', {
    //     title: '详情',
    //     movie: {
    //         doctor: 'ABC·hahahaa',
    //         country: '中国',
    //         title: '电影电影最新',
    //         year: '2015',
    //         poster: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1614440622,1986785860&fm=58&s=5C9218D6DAE3C35D12F32BAE0300F00E',
    //         language: '中文',
    //         flash: '',
    //         summary: '简介：想了解前后端通力合作的整个作业线流程吗？本课程就带你完整实现一个从前端到后端的项目，包括nodejs、express、mongodb、jade 模板引擎的使用，以及bootstrap/jQuery的实际应用及场景评估，让你更好的窥探前端的职业发展，为进一步快速自学打下基础。'
    //     }
    // });
});
app.get('/admin/update/:id', function(req, res) {
    var id = req.params.id;
    if (id) {
        Movie.findById(id, function(err, movie) {
            res.render('admin', {
                title: '更新',
                movie: movie
            });
        });
    }
});
app.post('/admin/movie/new', function(req, res) {
    var movieObj = req.body.movie;
    var id = movieObj._id;
    var _movie;
    if (id !== 'undefined') {
        Movie.findById(id, function(err, movie) {
            if (err) {
                console.log(err);
            }
            _movie = _.extend(movie, movieObj);
            _movie.save(function(err, movie) {
                if (err) {
                    console.log(err);
                }
                res.redirect('/movie/' + movie._id);
            });
        });
    } else {
        _movie = new Movie({
            doctor: movieObj.doctor,
            title: movieObj.title,
            country: movieObj.country,
            language: movieObj.language,
            year: movieObj.year,
            poster: movieObj.poster,
            summary: movieObj.summary,
            flash: movieObj.flash
        });
        _movie.save(function(err, movie) {
            if (err) {
                console.log(err);
            }
            res.redirect('/movie/' + movie._id);
        });
    }
});
app.get('/admin/list', function(req, res) {
    Movie.fetch(function(err, movies) {
        if (err) {
            console.log(err);
        }
        res.render('list', {
            title: '后台列表',
            movies: movies
        });
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