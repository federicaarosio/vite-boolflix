<template>
    <section class="media-card">

        <!-- Copertina -->
        <img v-if="image != null" :src="`https://image.tmdb.org/t/p/w300${image}`" :alt="`poster of ${title}`" class="poster"/>
        <img v-else src="https://placehold.co/300x450?text=Image+not+found" :alt="`poster of ${title}`" class="poster">
        
        <!-- Media Info -->
        <div class="media-info-wrapper">
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
            <div class="vote-wrapper">
                <div v-for="star in (voteAverage)" :key="star">
                    <img src="../assets/img/Gold_Star.svg" alt="star svg" class="star">
                </div>
            </div>

        </div>
        
    </section>

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

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

    section.media-card {
        border: 1px solid black;
        width: calc((100% / 4) - 1rem);
        margin-bottom: 1rem;

        img.poster {
            width: 100%;
        }
    }
    div.vote-wrapper {
        @include flex(row, start, center);
    }

    img.star {
        width: 20px;
    }

    
</style>