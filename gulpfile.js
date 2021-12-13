const gulp=require('gulp');
const sass=require('gulp-sass')(require('sass'));
const {series} =require('gulp');
function buildStlyes2(){
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./css'))
        
}
function copy(){
    return gulp.src('./node_modules/bootstrap/dist/js/*')
        .pipe(gulp.dest('./js'))
        
}
exports.compila2=buildStlyes2
exports.copy=copy
exports.build=series(buildStlyes2,copy);
