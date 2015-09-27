var _root    = __dirname + '/../',
    client   = _root + 'client/',
    server   = _root + 'server/',
    dist     = client + 'public',
    src      = client + 'src',
    views    = client + 'views',
    testDir  = _root + 'test',
    gulpDir  = _root + 'gulp',
    bowerDir = _root,
    npmDir   = _root;

module.exports = {
    dist: dist,
    src: src,
    images: {
        dist: dist + '/images/',
        src: src + '/images/'
    },
    scripts: {
        dist: dist + '/scripts/',
        src: src + '/scripts/'
    },
    styles: {
        dist: dist + '/styles/',
        src: src + '/styles/'
    },
    server: server,
    views: views,
    test: testDir,
    gulp: gulpDir,
    bower: bowerDir,
    npm: npmDir
};
