<template lang="">
    <AppHeader @mysearch="getMovie"/>
    <AppMain />
</template>



<script>
import axios from "axios"; 
import { store } from './js/store.js';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain
  },

  data() {
    return {
      store
    }
  },

  methods: {
    getMovie(){

      let apiMovies = store.apiListOfMovies;
      
      if (store.searchMovie !== "") {
        console.log(`ho scritto: ${store.searchMovie} nella searchbar`);
        apiMovies += `&query=${store.searchMovie}`;

        // qui farò la chiamata ad axios
        axios.get(apiMovies)

        .then((response) => {
          store.moviesList = response.data.results;
          // popolo l'array movieList in store
          console.warn(response.data.results)
        })

        .catch(function (error) {
          console.log(error);
        });

      }  
    },

  },

  created() {
    this.getMovie();
  },
}
</script>



<style lang="scss">
@use './styles/general.scss' as *;
  
</style>