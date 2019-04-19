'use strict';
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('transpile', () => {
    return gulp.src('app/static/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('app/static/build'))
})
    
gulp.task('minify', () => {
    return gulp.src('app/static/build/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/static/build/min'));
  })
  