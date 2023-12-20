<template lang="">
    <h1>
        Lista film
    </h1>
    <SingleMovie />
</template>
<script>
import { store } from '../js/store.js';

import SingleMovie from './SingleMovie.vue';

export default {
    name: "MoviesList",

    components: {
        SingleMovie
    },

    data() {
        return {
        store
        }
    },
}
</script>
<style lang="">
    
</style>