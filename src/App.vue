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

        //chiamata ad axios
        axios.get(apiMovies)
          .then((response) => {
            // popolo l'array moviesList in store
            store.moviesList = response.data.results;
            console.warn(response.data.results)
          })

          .catch(function (error) {
            console.log(error);
          });


        // Seconda chiamata per serie tv?? 
        
        let apiSeries = store.apiListOfSeries;
        if (store.searchMovie !== "") {
          apiSeries += `&query=${store.searchMovie}`;

          axios.get(apiSeries)
          .then((response) => {
            // popolo l'array seriesList in store
            store.seriesList = response.data.results;
          })

        }
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