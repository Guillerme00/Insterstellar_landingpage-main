import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

function style() {
  return gulp.src('./src/style/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./build/dist'));
}

export default style;

export function watch() {
  gulp.watch('./src/style/*.scss', style);
}
