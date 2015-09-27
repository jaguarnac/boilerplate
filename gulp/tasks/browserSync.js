'use strict';

var browserSync = require('browser-sync'),
    config      = require('../../config/config');

module.exports = function (gulp, $, paths) {
    return function () {
        browserSync.init(null, {
            proxy: 'http://localhost:' + config.port,
            files: [
                paths.dist + '/**/*.*'
            ],
            port: config.port + 1,
        });
    }
}