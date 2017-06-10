const gulp = require('gulp');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const exec = require('child_process').exec;

/**
 * Minification.
 */
gulp.task('uglify', () => {
  return gulp
    .src('dist/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('dist'));
});

/**
 * Main build task.
 */
gulp.task('build', () => {
  exec('webpack --bail', (err, stdout, stderr) => {
    if (err) {
      console.log(stdout);
      
      gulp
        .src('dist', { read: false })
        .pipe(clean());

      return;
    }

    gulp.start('uglify');
  })
});
