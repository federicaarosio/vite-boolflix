<template>
    <section class="main">
        <MoviesList />
        <SeriesList />
    </section>
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

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

    section.main {
        height: calc(100vh - 70px);
        overflow-y: scroll;
        background-image: linear-gradient($bg-color, #232323);
        padding: $main-padding;
    }
</style>