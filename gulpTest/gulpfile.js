/**
 *    2018/3/13.
 *  作者： bug
 */
// 处理任务
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var notify = require('gulp-notify');

gulp.task('message',function () {
    return console.log(1);
});


// copy 页面
gulp.task('copyHtml',function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});



// 图片压缩
gulp.task('imageMin',function () {
    gulp.src('src/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});


//Js 压缩

// gulp.task('minify',function () {
//     gulp.src('src/js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'))
// })


//sass
gulp.task('sass',function () {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('styles', function() {
  return gulp.src('src/sass/*.scss')
    .pipe(sass({ style: 'expanded'}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
    // .pipe(notify({ message: 'Styles task complete' }));
});


// 代码合并
gulp.task('scripts',function () {
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

//动态监听
gulp.task('watch',function () {
    gulp.watch('src/js/*.js',['scripts']);
    gulp.watch('src/image/*',['imageMin']);
    gulp.watch('src/sass/*.scss',['sass']);
    gulp.watch('src/*.html',['copyHtml']);
});



gulp.task('default',['message','copyHtml','imageMin','styles','scripts']);