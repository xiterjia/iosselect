var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('default', function () {
    gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
    console.log('uglify-success');
})