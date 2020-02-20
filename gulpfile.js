const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');


gulp.task('css', function() {
  return gulp.src('./src/assets/styles/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
      })
      .on('error', sass.logError))
    .pipe(gulp.dest('./src/static/css'));
});


gulp.task('js', function() {
  return gulp.src("./src/assets/scripts/**/*.js")
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./src/static/js'));
});

gulp.task("watch", function() {
  gulp.watch('./src/assets/styles/**/*.scss', gulp.parallel('css'));
  gulp.watch('./src/assets/scripts/**/*.js', gulp.parallel('js'));
});

gulp.task('build', gulp.parallel(
  'css',
  'js'
));