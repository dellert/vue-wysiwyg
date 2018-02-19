import Vue from 'vue';
import App from './App.vue';

import wysiwyg from "./index.js";

Vue.use(wysiwyg, {
    hideModules: {
        table: true,
    },
    // image: {
        // uploadURL: "/api/myEndpoint"
    // }
});

new Vue({
    el: '#wysiwyg',
    render: h => h(App)
});