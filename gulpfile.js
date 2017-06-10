const gulp = require('gulp');
const exec = require('child_process').exec;

gulp.task('uglify', () => {

});

gulp.task('build', () => {
  exec('webpack --bail', (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      exec('rd \dist');

      return;
    }

    console.log(stdout);
  })
});
