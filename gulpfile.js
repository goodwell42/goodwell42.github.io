var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');

// 增加变量定义gutil
var gutil = require('gulp-util');

gulp.task('uglify', function() {
    return gulp.src(["www/dist_js/*.js"])
      .pipe(concat('all.min.js'))
      .pipe(uglify({outSourceMap: false, cache: true}))
      .on('error', function (err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
        throw err;
      })
      .pipe(gulp.dest("asserts/js"));
});

gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
});

gulp.task('minify-html', function() {
  return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
         removeComments: true,
         minifyJS: true,
         minifyCSS: true,
         minifyURLs: true,
    }))
    .pipe(gulp.dest('./public'))
});

// 压缩public目录下的所有js
gulp.task('minify-js', function() {
    return gulp.src('./public/**/*.js')
      .pipe(uglify())
	  .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); }) //增加这一行
      .pipe(gulp.dest('./public'));
		
});

gulp.task('minify-js', function() {
    return gulp.src('./public/dist/music.js')
      .pipe(uglify())
	  .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); }) //增加这一行
      .pipe(gulp.dest('./public/dist'));
		
});


gulp.task('default', [
    'minify-html','minify-css','minify-js'
]);