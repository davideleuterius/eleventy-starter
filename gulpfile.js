const gulp = require("gulp");
const less = require('gulp-less');
const prefix = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');


gulp.task('css', function() {
  var srcfile = './src/styles/style.less';
  return gulp.src(srcfile)
    .pipe(less().on('error', function(err) {
      console.log(err);
    }))
    .pipe(prefix())
    /*
    .pipe(cssmin().on('error', function(err) {
      console.log(err);
    }))
    */
    .pipe(gulp.dest('./src/assets/css'));
});


gulp.task('js', function() {
  return gulp.src("./src/scripts/**/*.js")
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./src/assets/js'));
});

gulp.task("watch", function() {
  gulp.watch('./src/styles/**/*.less', gulp.parallel('css'));
  gulp.watch('./src/scripts/**/*.js', gulp.parallel('js'));
});

gulp.task('build', gulp.parallel(
  'css',
  'js'
));