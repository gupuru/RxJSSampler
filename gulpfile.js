var gulp = require('gulp');
var gutil = require("gulp-util");
var browserSync = require('browser-sync').create();
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

var PATHS = {
  input: './src',
  output: './dist',
};

var webpackBuild = function (callback) {
  var myConfig = Object.create(webpackConfig);

  webpack(myConfig, function (err, stats) {
    if (err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
};

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: PATHS.output,
            index: "index.html"
        },
        browser: ["google chrome"] 
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task("build", ["webpack:build"]);
gulp.task("webpack:build", webpackBuild);

gulp.task("webpack:build-sync", function () {
  webpackBuild(browserSync.reload);
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch(PATHS.output + "/*.html", ['bs-reload']);
    gulp.watch(PATHS.input + "/*.js", ['webpack:build-sync']);
});