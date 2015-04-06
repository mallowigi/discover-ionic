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

var libs = [
  './www/lib/ionic/js/ionic.bundle.js',
  './www/lib/lodash/lodash.js',
  './www/lib/angular-animate/angular-animate.js'
];

gulp.task('default', ['sass', 'bundle']);

gulp.task('js', function (done) {
  gulp.src(paths.js)
    .pipe(babel())
    .pipe(gulp.dest('./www/js'))
    .on('end', done);

});

gulp.task('sass', function (done) {
  gulp.src('./src/app.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(prefix("last 10 versions", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest('./www/css/'))
    //.pipe(minifyCss({
    //  keepSpecialComments: 0
    //}))
    //.pipe(rename({extname: '.min.css'}))
    //.pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('templates', function () {
  gulp.src('./src/**/*.html')
    .pipe(templateCache({
      standalone: true,
      root: 'www',
      module: 'templates'
    }))
    .pipe(gulp.dest('./src'));
});

gulp.task('watch', function () {
  watch('**/*.scss', {cwd: 'src'}, function () {run('sass')});
  watch('**/*.js', {cwd: 'src'}, function () {run('bundle')});
  watch('**/*.html', {cwd: 'src'}, function () {run('templates');});
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

gulp.task('vendors', function () {
  gulp.src(libs)
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('./www/lib'));
});

gulp.task('bundle', function () {
  browserify({
    entries: ['./src/templates.js', './src/main.js'],
    debug: true
  })
    .transform(babelify.configure({ignore: /lib/}))
    .transform(envify)
    .bundle()
    .on('error', standardHandler)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./www/js/'));
});

// Standard handler
function standardHandler(err){
  console.error(err);
  notify(err);
  this.end();
}
