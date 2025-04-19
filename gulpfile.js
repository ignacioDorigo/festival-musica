import { src, dest, watch, series } from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);

export function css(done) {
  src("src/scss/**/*.scss").pipe(sass()).pipe(dest("build/css"));
  done();
}

export function watchFiles() {
  watch("src/scss/**/*.scss", css);
}

export default series(css, watchFiles);
