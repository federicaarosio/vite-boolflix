<template>
    <MoviesList />
    <SeriesList />
</template>

<script>
import { store } from '../js/store.js';

import MoviesList from './MoviesList.vue';
import SeriesList from './SeriesList.vue';

export default {
    name: "AppMain",
    
    components: {
        MoviesList,
        SeriesList
    },

    data() {
        return {
        store
        }
    },
}
</script>

<style lang="scss">
    
</style>