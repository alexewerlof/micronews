import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.esm.browser.js';
import './news-item.js';

export const newsList = Vue.component('news-list', {
    props: ['list'],
    template: `
    <ol class="news-list">
        <li v-for="n in list" :key="n.id">
            <news-item :item="n" />
        </li>
    </ol>`
})
