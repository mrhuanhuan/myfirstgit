/*1.作为项目的开发依赖安装: npm istall --save-dev gulp */
/*2.*/
'use strict';
var gulp=require('gulp');                    //创建一个gulp对象
var less=require('gulp-less');
gulp.task('copy',function () {               //执行名叫copy的任务
	/*console.log("hello gulp");*/
	/*执行一些合并、压缩之内的操纵*/
	gulp.src('src/index.html')               //获取文件
	.pipe(gulp.dest('dist/'))     //用管道执行dest(把文件送到dist目录下)
});
gulp.task('destination',function () {        //执行destination任务
	gulp.watch('src/index.html',['copy'])    //监视gulp/index.html文件若有变化则执行copy任务
})
gulp.task('less',function () {
	gulp.src('src/*.less')
	.pipe(less())
	.pipe(cssnano())
	.pipe(gulp.dest('dist/'))
})
gulp.task('style',function () {
	gulp.watch('src/*.less',['less'])
})