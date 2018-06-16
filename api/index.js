const Router = require('koa-router');
const basic = require('./basics')
const news = require('./news')
const sections = require('./sections')

const apiRouter = new Router({
    prefix: '/api'
})

basic(apiRouter)
news(apiRouter)
sections(apiRouter)

module.exports = apiRouter;
