'use strict';

var browserSync = require('browser-sync');

module.exports = function (gulp, $, paths, u, cb) {
    var started = false;

    $.nodemon({
            script: paths.server + 'app.js'
        })
        .on('start', function onStart() {
            if (!started) {
                cb();
                started = true;
            }
        })
        .on('restart', function onRestart() {
            // reload connected browsers after a slight delay
            setTimeout(function reload() {
                browserSync.reload({
                  stream: false
                });
            }, 500);
        });
};