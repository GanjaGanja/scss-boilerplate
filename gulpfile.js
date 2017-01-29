// Include Gulp and all required plugins.
var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var browserSync = require("browser-sync");
var reload = browserSync.reload;
var rimraf = require('rimraf'); // erase files and folders

// Path to all project files.
var path = {
  build: {
    html: 'build/',
    css: 'build/css/',
    img: 'build/img/'
  },
  src: {
    html: 'src/html/*.html',
    style: 'src/styles/styles.scss',
    img: 'src/img/**/*.*'
  },
  watch: {
    html: 'src/html/**/*.html',
    style: 'src/styles/**/*.scss',
    img: 'src/img/**/*.*'
  },
  clean: './build'
};

// Local dev server config for 'browser-sync' plugin.
var config = {
  server: {
    baseDir: "./build"
  },
  tunnel: false, // remote testing is off
  host: 'localhost',
  port: 9000,
  logPrefix: "SCSS_Ninja"
};

// Build html.
gulp.task('html:build', function() {
  gulp.src(path.src.html)
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({stream: true}));
});

// Build styles with 'scss'.
gulp.task('style:build', function () {
  gulp.src(path.src.style)
    .pipe(sass().on('error', gutil.log))
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({stream: true}));
});

// Copy images.
gulp.task('image:build', function() {
  gulp.src(path.src.img)
    .pipe(gulp.dest(path.build.img))
    .pipe(reload({stream: true}));
});

// Main build task.
gulp.task('build', [
  'html:build',
  'style:build',
  'image:build'
]);

// Watch for changes.
gulp.task('watch', function(){
  gulp.watch([path.watch.html], function(event, cb) {
    gulp.start('html:build');
  });
  gulp.watch([path.watch.style], function(event, cb) {
    gulp.start('style:build');
  });
  gulp.watch([path.watch.img], function(event, cb) {
    gulp.start('image:build');
  });
});

// Start local web server.
gulp.task('webserver', function () {
  browserSync(config);
});

// Totally erase 'build' folder.
gulp.task('clean', function (cb) {
  rimraf(path.clean, cb);
});

// Build development version and watch for changes.
gulp.task('default', ['build', 'webserver', 'watch']);