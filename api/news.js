module.exports = function (router) {
    router.get('/news', (ctx, next) => {
        ctx.response.body = {
            items: [
                {
                    id: 10,
                    title: 'React-Starter-Kit - Open Source Universal React Redux GraphQL Boilerplate',
                    url: 'https://github.com/reactjs-starter-kit/React-Starter-Kit',
                    up: 1,
                    down: 0,
                    username: 'Ashley',
                    when: '1 minute ago'
                },
                {
                    id: 11,
                    title: 'Add metadatas to your build files',
                    url: 'http://dev.topheman.com/add-metadatas-to-your-build-files/',
                    up: 1,
                    down: 0,
                    username: 'topheman',
                    when: '35 minutes ago'
                },
                {
                    id: 12,
                    title: 'Pickr: A small, modern color-picker with material design',
                    url: 'https://github.com/Simonwep/pickr',
                    up: 23,
                    down: 1,
                    username: 'Simonwep',
                    when: '6 days ago'
                },
                {
                    id: 13,
                    title: 'Ducky: Digital rubber duck to you for debugging, companionship and laughs',
                    url: 'https://github.com/RameshAditya/ducky',
                    up: 1,
                    down: 0,
                    username: 'Aditya_Ramesh',
                    when: '3 hours ago'
                },
                {
                    id: 14,
                    title: 'Ryan Dahl at JSconf: 10 things I regret about Node.js',
                    url: 'https://www.youtube.com/watch?v=M3BM9TB-8yA',
                    up: 27,
                    down: 1,
                    username: 'hanifbbz@gmail.com',
                    when: '9 days ago'
                },
                {
                    id: 15,
                    title: 'Apollographql 2 release candidate released',
                    url: 'http://www.dzurico.com/apollo-server-2-0-real-time-data-with-subscriptions/',
                    up: 1,
                    down: 0,
                    username: 'daniele.zurico@gmail.com',
                    when: '4 hours ago'
                },
                {
                    id: 16,
                    title: 'Webpack 4: Universal Code Splitting in React… The inventors are back baby!',
                    url: 'https://medium.com/@ScriptedAlchemy/webpack-4-universal-code-splitting-in-react-the-inventors-are-back-baby-453745f9665d',
                    up: 8,
                    down: 0,
                    username: 'zackskeeter',
                    when: '3 days ago'
                },
                {
                    id: 17,
                    title: 'Math.js — An extensive math library for JavaScript',
                    url: 'https://github.com/josdejong/mathjs',
                    up: 4,
                    down: 0,
                    username: 'Marshall',
                    when: '2 days ago'
                },
                {
                    id: 18,
                    title: 'JavaScript engine fundamentals: Shapes and Inline Caches',
                    url: 'https://mathiasbynens.be/notes/shapes-ics',
                    up: 2,
                    down: 0,
                    username: 'jwebe0pe',
                    when: '1 day ago'
                },
                {
                    id: 19,
                    title: 'Node.js is now available on Google App Engine standard environment',
                    url: 'https://cloudplatform.googleblog.com/2018/06/Now-you-can-deploy-your-Node-js-app-to-App-Engine-standard-environment.html',
                    up: 5,
                    down: 0,
                    username: 'davidspiess',
                    when: '3 days ago'
                },

            ]
        }
    })
}
