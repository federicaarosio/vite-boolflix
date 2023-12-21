<template>
        <section class="search">
            <img class="logo" src="" alt="logo"/>
            <form>
                <input type="text" placeholder="cerca un film" v-model.trim="store.searchMovie" class="searchbar">
                <button @click.prevent="$emit('mysearch')" class="search-button">
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
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;


    section.search {
        background-color: black;
        height: 70px;
        @include flex(row, space-between, center);
        padding: $main-padding;

        input.searchbar {
            padding: .2rem
        }

        button.search-button {
            padding: .2rem
        }

    }

</style>