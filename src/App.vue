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

      // qui farò la chiamata ad axios
      axios.get('/user?ID=12345')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
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