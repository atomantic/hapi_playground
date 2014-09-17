/*!
 * gulp
 * $ npm install gulp gulp-jshint gulp-supervisor opn --save-dev
 */
var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    supervisor  = require('gulp-supervisor'),
    lab         = require('gulp-lab'),
    opn         = require('opn');

var server = {
    host: 'localhost',
    port: '3666'
};

var sourcePaths = {
  app: ['index.js'],
  test: ['test/*.js']
};

// Scripts
gulp.task('js', function() {
  return gulp.src(sourcePaths.app)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

gulp.task( 'supervise', function() {
    supervisor( 'index.js', {
        args: [],
        watch: sourcePaths.app,
        pollInterval: 500,
        extensions: [ 'js' ],
        exec: 'node',
        debug: true,
        debugBrk: false,
        harmony: true,
        noRestartOn: false,
        forceWatch: true,
        quiet: false
    } );
} );

gulp.task('test', function (cb) {
  return gulp.src(sourcePaths.test)
         .pipe(lab('-v -C -m 0'))
});

gulp.task('openbrowser', function() {
  // supervise takes a second to start it up
  setTimeout(function(){
    opn( 'http://' + server.host + ':' + server.port );
  }, 1500);
});

// Watch
gulp.task('watch', function() {

  // Watch .js files
  gulp.watch(['./*.js','test/*.js'], ['js']);

});

gulp.task('default', ['supervise', 'watch', 'openbrowser']);
gulp.task('build', ['js', 'test']);
