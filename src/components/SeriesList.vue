<template lang="">
    <h1>
        Lista Serie TV
    </h1>
    <SingleMovie v-for="(serie, index) in  store.seriesList" :key="index"
    :title= "serie.name"
    :originalTitle= "serie.name"
    :originalLanguage= "serie.original_language"
    :voteAverage= "serie.vote_average"
    />
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



<style lang="">
    
</style>