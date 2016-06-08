var gulp = require('gulp');
var ts = require('gulp-typescript');
var webpack = require('webpack-stream');

var tsProject = ts.createProject('tsconfig.json');

const del = require('del');

gulp.task('clean', function() { 
	return del(['_assets']);
});

gulp.task('copy-static', ['clean'], function() {
	return gulp.src('./**/*.less')
  		.pipe(gulp.dest('_assets/scripts/'));
})

gulp.task('compile', ['clean'], function () {
	var tsResult = tsProject.src() // instead of gulp.src(...) 
        .pipe(ts(tsProject));
 
    return tsResult.js.pipe(gulp.dest('_assets/scripts'));
});

gulp.task('default', ['compile', 'copy-static'], function() {
	return gulp.src('./_assets/scripts/appModule.js')
	  .pipe(webpack( require('./webpack.config.js') ))
	  .pipe(gulp.dest('_assets/'));
})