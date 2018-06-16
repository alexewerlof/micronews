const path = require('path');
const koaStatic = require('koa-static');
const root = path.resolve(__dirname, '../public');

const opts = {
    gzip: false
}
const middleware = koaStatic(root, opts);

module.exports = middleware;
