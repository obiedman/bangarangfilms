var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  minify = require('gulp-minify-css'),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  del = require('del'),
  runSequence = require('run-sequence'),
  autoprefixer = require('gulp-autoprefixer'),
  less = require('gulp-less'),
  path = require('path'),
  uncss = require('gulp-uncss');

gulp.task('less', function () {
  gulp.src('./src/less/styles.less')
    .pipe(less({
      paths: ['src/less']
    })).pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(uncss({
      html: ['*.html']
    }))
    .pipe(minify()).
  pipe(gulp.dest('css'));
});

gulp.task('watch', ['browserSync', 'less'], function () {
  // run sass task on file change
  gulp.watch('src/less/*.less', ['less']);
  gulp.watch("css/*.css", ['minify']);
  gulp.watch('*.html', ['html']);
});

// task for auto-reloading browser on file change
gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: '.'
    },
  })
});

gulp.task('html', function () {
  return gulp.src('*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// add vendor prefixes and minify css
gulp.task('minify', function () {
  return gulp.src('css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minify())
    .pipe(gulp.dest('dist/css'))
});

// optimize images
gulp.task('images', function () {
  return gulp.src('images/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

// clean dist folder before every build excluding images
gulp.task('clean:dist', function (callback) {
  return del(['dist/**/*', '!dist/images', '!dist/images/**/*'], callback)
});

gulp.task('clean', function (callback) {
  del('dist');
  return cache.clearAll(callback);
});

gulp.task('styles', function (callback) {
  runSequence('less', ['minify']), callback
})

gulp.task('build', function (callback) {
  runSequence('clean:dist', ['styles', 'images', 'html'], callback)
});

gulp.task('default', function (callback) {
  runSequence(['less', 'browserSync', 'watch'], callback)
})