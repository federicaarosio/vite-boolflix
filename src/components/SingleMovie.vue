<template>
    <section class="media-card">

        <!-- Copertina -->
        <div class="cover-wrapper">
            <img v-if="image != null" :src="`https://image.tmdb.org/t/p/w300${image}`" :alt="`poster of ${title}`" class="poster"/>
            <img v-else src="https://placehold.co/300x450?text=Image+not+found" :alt="`poster of ${title}`" class="poster">

            <div class="media-info-wrapper">
                <p>
                    <span class="bold-text">Titolo:</span> {{title}}
                </p>
                <p>
                    <span class="bold-text">Titolo originale:</span> {{ originalTitle }}
                </p>
                <p>
                    {{ originalLanguage }} <country-flag :country='originalLanguage' size='small'/>
                </p>
                
                <div class="vote-wrapper">
                    <span class="bold-text">Voto:</span>
                    <div v-for="star in (voteAverage)" :key="star">
                        <img src="../assets/img/Gold_Star.svg" alt="star svg" class="star">
                    </div>
                </div>

                <p class="overview" >
                    {{ truncate(overview, 400) }}
                </p>
    
            </div>
        </div>
        
        <!-- Media Info -->
        
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

        overview: {
            type: String,
            required: true
        },
    },

    methods: {
        truncate(text, length) {
            if (text.length > length) {
                return text.substring(0, length) + "...";
            } else {
                return text;
            }
        },
    }

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
            height: 100%;
        }
    }

    div.cover-wrapper {
        position: relative;
        z-index: 0;       
    }

    div.media-info-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;

    }

    div.cover-wrapper:hover div.media-info-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        padding: $main-padding;
        background-color: black;
        color: white;
        width: 100%;
        height: 100%;
        span.bold-text {
            font-weight: $bold-text;
        }

    }

    

  


    div.vote-wrapper {
        @include flex(row, start, center);
    }

    img.star {
        width: 15px;
        margin-left: 7px;
    }

    
</style>