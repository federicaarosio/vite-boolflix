<template>
    <h3>
        Single Movie
    </h3>
    <img :src="`https://image.tmdb.org/t/p/w300${image}`" :alt="`poster of ${title}`" />
    
    <p>
        {{title}}
    </p>
    <p>
        {{ originalTitle }}
    </p>
    <p>
        {{ originalLanguage }} <country-flag :country='originalLanguage' size='small'/>
    </p>
    <p>
        {{ voteAverage }}
    </p>
    

</template>

<script>
import CountryFlag from '../../node_modules/vue-country-flag-next'

export default {
    name: "SingleMovie",

    components: {
        CountryFlag
    },

    data() {
        return {
        }
    },

    props: {
        image: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        originalTitle: {
            type: String,
            required: true
        },
        originalLanguage: {
            type: String,
            required: true
        },
        voteAverage: {
            type: Number,
            required: true
        },
    },

}
</script>

<style lang="scss">
    
</style>