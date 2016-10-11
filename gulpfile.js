var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var webpack = require('webpack');

var webpackConfig = require('./webpack.config.js');

gulp.task('default', ['clean'], function() {
    gulp.start('webpack','css', 'js', 'img', 'start', 'watch');
})

gulp.task('clean', function() {
    return gulp
        .src(['./public/dist/css', './public/dist/js', './public/dist/img'])
        .pipe(clean());
});

gulp.task('css', function() {
    return gulp
        .src('./public/src/less/*.less')
        .pipe(less())
        .pipe(concat('eux.wechat.css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./public/dist/css/'))
});

gulp.task('js', function() {
    return gulp
        .src('./public/src/js/build/*.js')
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist/js/'))
});

gulp.task('img', function() {
    return gulp
        .src('./public/src/img/*')
        .pipe(gulp.dest('./public/dist/img/'))
});

gulp.task('start', function() {
    nodemon({
        script: 'app.js',
        ignore: [
            "./public/"
        ],
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    })
});

gulp.task('watch', function() {
    gulp.watch('./public/src/less/*.less', function() {
        gulp.run('css');
    });
    gulp.watch('./public/src/img/**/*', function() {
        gulp.run('img');
    });
    gulp.watch('./public/src/js/**/*', function() {
        gulp.run('js');
    });
});

gulp.task('webpack', function(callback) {
    webpack(webpackConfig, function(err, stats) {
        if (err) throw err;
        callback();
    });
});
