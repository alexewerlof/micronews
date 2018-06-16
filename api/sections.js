module.exports = function (router) {
    router.get('/sections', (ctx, next) => {
        ctx.response.body = {
            items: [
                {
                    id: 1,
                    name: 'top'
                },
                {
                    id: 2,
                    name: 'latest'
                },
                {
                    id: 3,
                    name: 'random'
                },
                {
                    id: 4,
                    name: 'submit'
                },
                {
                    id: 5,
                    name: 'replies'
                },
            ]
        }
    })
}
