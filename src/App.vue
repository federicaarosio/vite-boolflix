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