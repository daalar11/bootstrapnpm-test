const gulp=require('gulp');
const sass=require('gulp-sass')(require('sass'));

function buildStlyes2(){
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./css'))
        
}
exports.compila2=buildStlyes2
