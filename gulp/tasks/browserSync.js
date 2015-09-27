'use strict';

var browserSync = require('browser-sync'),
    config      = require('../../config/config');

module.exports = function (gulp, $, paths) {
    browserSync({
        proxy: 'http://localhost:' + config.port,
        files: [
            paths.dist + '/**/*.*'
        ],
        port: config.port + 1,
    });
}