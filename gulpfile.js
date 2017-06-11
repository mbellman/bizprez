const gulp = require('gulp');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const exec = require('child_process').exec;

const Tasks = {
  /**
   * Cleans build files.
   *
   * @returns {NodeJS.ReadWriteStream}
   */
  clean: () => {
    return gulp
      .src('dist', { read: false })
      .pipe(clean());
  },
  /**
   * Outputs minified compiled code into a new [...].min.js file.
   *
   * @returns {NodeJS.ReadWriteStream}
   */
  uglify: () => {
    return gulp
      .src('dist/app.js')
      .pipe(uglify())
      .pipe(rename('app.min.js'))
      .pipe(gulp.dest('dist'));
  }
}

gulp.task('build', () => {
  const startTime = Date.now();

  console.log('Starting build at ', new Date());

  exec('webpack --bail', (err, stdout, stderr) => {
    if (err) {
      console.log('Build failed:');
      console.log(stdout);
      Tasks.clean();

      return;
    }

    Tasks.uglify()
      .on('end', () => {
        const buildTime = (Date.now() - startTime) / 1000;

        console.log('Build completed in ' + buildTime + 's!');
      })
  })
});

gulp.task('default', ['build']);
