<template>
        <section class="search">
            <form>
                <input type="text" placeholder="cerca un film">
                <button @click="$emit('mysearch')">
                    Search
                </button>
            </form>
        </section>
</template>

<script>
import { store } from '../js/store.js';

export default {
    name: "AppHeader",
}
</script>

<style lang="scss">

</style>