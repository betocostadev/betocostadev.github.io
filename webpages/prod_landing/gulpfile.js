const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

// Compile SCSS

function style() {
  return gulp.src('./source/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
  gulp.watch('./source/css/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./source/js/*.js').on('change', browserSync.reload);
}

// gulp.task('sass', () => gulp.src('./source/css/*.scss')
//   .pipe(sass().on('error', sass.logError))
//   .pipe(gulp.dest('./dist/css')));

// gulp.task('sass:watch', () => {
//   gulp.watch('./source/css/*.scss', ['sass']);
// });

// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }

// exports.default = defaultTask;
exports.style = style;
exports.watch = watch;
