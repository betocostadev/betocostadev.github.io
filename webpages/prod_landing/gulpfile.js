const gulp = require('gulp');
const { series } = require('gulp'); // To use series functions
const sourceMaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

const browserSync = require('browser-sync').create();
// Gulp image converter for webp images
const webp = require('gulp-webp');

sass.compiler = require('node-sass');


function convertImg() {
  return gulp.src('./source/img/*.jpg')
    .pipe(webp({ quality: 65 }))
    .pipe(gulp.dest('./dist/img'));
}

function optImg() {
  return gulp.src('./source/img/*.*')
  /* Warning: Best to avoid the options below and use it in the simple way.
  Using this way here due to a better quality, since the images were optimized before. */
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 7 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false },
        ],
      }),
    ]))
    .pipe(gulp.dest('./dist/img'));
}


// Compile SCSS
function style() {
  return gulp.src('./source/css/*.scss')
    .pipe(sourceMaps.init())
  /* Output style: compressed = Oneline file with no comments
  expanded = better to read, with comments. */
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  /* Source Map Write, could be to a different folder (sourceMaps.write('./maps')) */
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './',
    },
    // browser: 'firefox',
  });
  gulp.watch('./source/css/*.scss', style);
  gulp.watch('./dist/css/*.css', browserSync.reload);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./source/js/*.js').on('change', browserSync.reload);
}

exports.convertImg = convertImg;
exports.style = style;
exports.default = watch;

// Mixed functions
exports.build = series(convertImg, optImg, style); // Using series
