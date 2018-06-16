const Koa = require('koa');
const static = require('./middlewares/static.js');
const compress = require('./middlewares/compress.js');
const api = require('./api/index.js')

const app = new Koa();

app.use(compress);
app.use(static);
app.use(api.routes())
    .use(api.allowedMethods());

module.exports = app;
