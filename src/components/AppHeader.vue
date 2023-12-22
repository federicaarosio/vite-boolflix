<template>
        <section class="search">
            <div class="logo">
                Boolflix
            </div>
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
        background-color: $bg-color;
        height: 70px;
        @include flex(row, space-between, center);
        padding: $main-padding;

        div.logo {
            color: $accent-color;
            font-size: 2rem;
        }

        input.searchbar {
            padding: .4rem;
            border: none;
            border-radius: 5px;

        }

        button.search-button {
            padding: .5rem 1rem;
            background-color: $accent-color;
            color: white;
            border: none;
            margin-left: 1rem;
            border-radius: 5px;

        }

    }

</style>