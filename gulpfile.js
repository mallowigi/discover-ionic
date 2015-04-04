'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var babelify = require('babelify');
var envify = require('envify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var templateCache = require('gulp-angular-templatecache');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var wiredep = require('wiredep');
var watch = require('gulp-watch');
var run = require('run-sequence');

var paths = {
  sass: ['./scss/**/*.scss'],
  js: ['./scripts/**/*.js']
};

gulp.task('default', ['sass', 'bundle']);

gulp.task('js', function (done) {
  gulp.src(paths.js)
    .pipe(babel())
    .pipe(gulp.dest('./www/js'))
    .on('end', done);

});

gulp.task('sass', function (done) {
  var onError = function (err) {
    notify.onError({
      title: "Gulp",
      subtitle: "Sass Failure!",
      message: "Error: <%= error.message %>",
      sound: "Beep"
    })(err);
  };

  gulp.src('./src/ionic.app.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(prefix("last 10 versions", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('templates', function () {
  gulp.src('./src/**/*.html')
    .pipe(templateCache({
      standalone: true,
      root: 'www',
      module: 'templates'
    }))
    .pipe(gulp.dest('./www/js'));
});

gulp.task('watch', function () {
  watch('**/*.scss', {cwd: 'src'}, function () {run('sass')});
  watch('**/*.js', {cwd: 'src'}, function () {run('bundle')});
});

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
    .on('log', function (data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('bower', function () {
  gulp.src('index.html', {cwd: 'www'})
    .pipe(wiredep())
    .pipe(gulp.dest('./'));
});

gulp.task('bundle', function () {
  browserify({
    entries: './src/app.js',
    debug: true
  })
    .transform(babelify)
    .transform(envify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./www/js/'));
});
