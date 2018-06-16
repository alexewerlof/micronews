const pkgJson = require('../package.json');

module.exports = function (router) {
    router.get('/basics', (ctx, next) => {
        ctx.response.body = {
            siteName: 'MicroNews',
            siteVersion: pkgJson.version
        }
    })
}
