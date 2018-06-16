import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.esm.browser.js';
import './news-list.js';

const app = new Vue({
    el: '#app',
    data: {
        message: 'This site is alpha!',
        siteName: 'Loading',
        siteVersion: '0',
        news: [],
        sections: []
    }
})

async function readNews() {
    const response = await fetch('/api/news');
    const json = await response.json();
    app.news = json.items
}

async function readSections() {
    const response = await fetch('/api/sections');
    const json = await response.json();
    app.sections = json.items
}

async function readBasics() {
    const response = await fetch('/api/basics');
    const json = await response.json();
    app.siteName = json.siteName
    window.document.title = json.siteName
    app.siteVersion = json.siteVersion
}

function main() {
    return Promise.all([
        readNews(),
        readSections(),
        readBasics()
    ])
}

// run the app
main()
    .then(() => console.log('loaded the news successfully'))
    .catch((err) => console.error(`Failed to get the news ${err}`))
