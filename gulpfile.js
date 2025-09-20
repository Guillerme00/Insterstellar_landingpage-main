import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import imageMin from 'gulp-imagemin';

const sass = gulpSass(dartSass);

function style() {
  return gulp.src('./src/style/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./build/dist'));
}

function minMage() {
  return gulp.src('./src/images/**/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./build/dist/imagens'));
}

export default gulp.parallel(style, minMage);

export function watch() {
  gulp.watch('./src/style/*.scss', gulp.parallel(style));
}
