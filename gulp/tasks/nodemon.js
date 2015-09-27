'use strict';

module.exports = function (gulp, $, paths, u, cb) {
    return function(){
        var started = false;

        return $.nodemon({
                    script: paths.server + 'app.js'
                }).on('start', function () {
                    if (!started) {
                        cb();
                        started = true;
                    }
                });
    }
};