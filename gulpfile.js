var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('myTask', function(){
  console.log('hello gulp');
});

gulp.task('jsBrowserify', function(){
  return browserify({ entries: ['./tmp/allConcat.js']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'))
});
gulp.task('concatInterface', function(){
  return gulp.src(['./js/pingpong-interface.js', './js/signup-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'))
});
