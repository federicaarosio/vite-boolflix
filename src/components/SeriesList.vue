<template lang="">
    <section class="tv-series-list">
        <h1>
            TV series
        </h1>
        <section class="list-wrapper">
            <SingleMovie v-for="(serie, index) in  store.seriesList" :key="index"
            :image= "serie.poster_path"
            :title= "serie.name"
            :originalTitle= "serie.name"
            :originalLanguage= "serie.original_language"
            :voteAverage= "Math.ceil(serie.vote_average/2)"
            />
        </section>

    </section>
</template>



<script>
import { store } from '../js/store.js';

import SingleMovie from './SingleMovie.vue';

export default {
    name: "SeriesList",

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



<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

    section.tv-series-list {
        margin-bottom: 3rem;
    }
    section.list-wrapper {
            @include flex(row, center, stretch);
            flex-wrap: wrap;
            gap: 1rem;
        }
    
</style>