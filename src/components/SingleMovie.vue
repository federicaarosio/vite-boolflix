<template>
    <h3>
        Single Movie
    </h3>
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
    }
}
</script>

<style lang="scss">
    
</style>