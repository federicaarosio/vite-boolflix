<template lang="">
    <section class="movies-list">
        <h1>
            Movies found: {{store.moviesList.length}}
        </h1>
        <section class="list-wrapper">
            <SingleMovie v-for="(movie, index) in  store.moviesList" :key="index"
            :image= "movie.poster_path"
            :title= "movie.title"
            :originalTitle= "movie.original_title"
            :originalLanguage= "movie.original_language"
            :voteAverage= "Math.ceil(movie.vote_average/2)"
            :overview= "movie.overview"
            />
        </section>
    </section>
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



<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

    section.movies-list {
        margin-bottom: 4rem;
    }
    section.list-wrapper {
        @include flex(row, start, stretch);
        flex-wrap: wrap;
        gap: 1rem;
    }
</style>