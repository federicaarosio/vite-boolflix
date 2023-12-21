<template lang="">
    <h1>
        Lista film
    </h1>
    <SingleMovie v-for="(movie, index) in  store.moviesList" :key="index"
    :image= "movie.poster_path"
    :title= "movie.title"
    :originalTitle= "movie.original_title"
    :originalLanguage= "movie.original_language"
    :voteAverage= "movie.vote_average"
    />
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