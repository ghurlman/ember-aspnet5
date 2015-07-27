/// <binding ProjectOpened='watch' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var shell = require('gulp-shell')

gulp.task('build', shell.task('ember build'));

gulp.task('watch', shell.task('ember build -w'));
