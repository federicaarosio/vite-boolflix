<template>
        <section class="search">
            <form>
                <input type="text" placeholder="cerca un film" v-model.trim="store.searchMovie" >
                    <!-- in input devo mettere un v model che si agganci ai dati nello store (searchMovie)-->
                <button @click.prevent="$emit('mysearch')">
                    Search
                </button>
            </form>
        </section>
</template>

<script>
import { store } from '../js/store.js';

export default {
    name: "AppHeader",

    data() {
        return {
        store
        }
    },
}
</script>

<style lang="scss">

</style>