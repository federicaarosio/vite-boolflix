<template lang="">
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>
<script>
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
}
</script>
<style lang="scss">
@use './styles/general.scss' as *;
  
</style>