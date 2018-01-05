var gulp = require('gulp');
var shell = require('gulp-shell');
var gulpSequence = require('gulp-sequence');

gulp.task('mongodb', shell.task(['sudo mongod']));
gulp.task('runServer', shell.task(['npm run back-start']));
gulp.task('runClient', shell.task(['npm run front-dev']));

gulp.task('gulp-sequence', gulpSequence(['mongodb', 'runServer', 'runClient']));

gulp.task('default', function(){
    gulp.run('gulp-sequence');
});