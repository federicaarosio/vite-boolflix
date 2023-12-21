import { createApp } from 'vue'
import App from '../App.vue'

createApp(App).mount('#app')


import CountryFlag from 'vue-country-flag-next'

new Vue({
    components: {
        CountryFlag
    }
})