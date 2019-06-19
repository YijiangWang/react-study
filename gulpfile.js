const gulp = require('gulp');
const imageMin = require('gulp-imagemin');

gulp.task('imagemin', () => {
  console.log('------ 执行 gulp ---------')
  gulp.src(['./src/img/**/**.png'])
      .pipe(imageMin())
      .pipe(gulp.dest('./dist'))
})