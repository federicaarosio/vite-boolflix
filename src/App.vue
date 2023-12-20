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
      console.log("ho premuto search")

      // let apiMovies = store.apiListOfMovies;

      // if (quello che cerco nell'input della searchbar è !== da "") {
      //   allora compongo quello che passo nella chiamata ad axios:
      //   apiMovies += `&query=${store.searchMovie}`
      // }
      

        



      // qui farò la chiamata ad axios
      // axios.get(apiMovies)

      // .then((response) => {
      //   console.log(response.data);
      //   this.store.movieList = response.data;
      //   // popolo l'array movieList in store
      // })

      // .catch(function (error) {
      //   console.log(error);
      // });
    }
  },

  created() {
    this.getMovie();
  },
}
</script>



<style lang="scss">
@use './styles/general.scss' as *;
  
</style>