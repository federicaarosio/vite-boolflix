<template>
    <h3>
        Single Movie
    </h3>
    <img v-if="image != null" :src="`https://image.tmdb.org/t/p/w300${image}`" :alt="`poster of ${title}`" />
    <img v-else src="https://placehold.co/300x450?text=Image+not+found" :alt="`poster of ${title}`" >
    
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

    <div v-for="star in (voteAverage)" :key="star">
        
        <img src="../assets/img/Gold_Star.svg" alt="star svg" class="star">
    </div>
    

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

    img.star {
        width: 20px;
    }

    
</style>