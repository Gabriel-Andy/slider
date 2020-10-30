"use strict";

var gulp = require('gulp');

var sass = require('gulp-sass');

var autoprefixer = require('gulp-autoprefixer');

var browserSync = require('browser-sync').create();

var cleanCSS = require("gulp-clean-css");

var sourcemaps = require("gulp-sourcemaps"); //compile scss to css


function style() {
  //1.where is my scss file
  return gulp.src('./scss/**/*.scss') //2.pass that file throught the sass compiler
  .pipe(sass().on('error', sass.logError)) //3.whrere do I save the compile css?
  //4.autoprefixer your css
  .pipe(autoprefixer()).pipe(cleanCSS({
    compatibility: "ie8"
  })).pipe(gulp.dest('./css')) //4. stream changes to all browser
  .pipe(browserSync.stream());
}

function minify() {
  return gulp.src("./css/**/*.css").pipe(sourcemaps.init()).pipe(cleanCSS()).pipe(sourcemaps.write()).pipe(gulp.dest("./css"));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
exports.minify = minify;