import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.esm.browser.js';

export const newsItem = Vue.component('news-item', {
    props: ['item'],
    template: `
    <article class="news-item">
        <h2>
            <a :href="item.url">
                {{item.title}}
            </a>
            <span class="news-source">({{getSource(item.url)}})</span>
        </h2>
        <p class="news-subtext">
            <span>{{item.up}}</span> 🔺
            and
            <span>{{item.down}}</span> 🔻
             posted by
            <a :href="getUserPage(item.username)">{{item.username}}</a>
            <a href="">{{item.when}}</a>
            <a href="#">discuss</a>
        </p>
    </article>`,
    methods: {
        getSource(url) {
            const u = new URL(url);
            return u.hostname;
        },
        getUserPage(username) {
            const u = new URL(window.origin);
            u.pathname = `/users/${username}`
            return u.toString();
        }
    },
})
