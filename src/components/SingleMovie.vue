<template>
    <section class="media-card">

        <!-- Copertina -->
        <div class="media-container">

            <div class="thecard">

                <div class="front">
                    <img v-if="image != null" :src="`https://image.tmdb.org/t/p/w300${image}`" :alt="`poster of ${title}`" class="poster"/>
                    <img v-else src="https://placehold.co/300x450?text=Image+not+found" :alt="`poster of ${title}`" class="poster">
                </div>

                <div class="back">
                    <div class="media-info-wrapper">
                
                        <p class="title">
                            <span class="bold-text">Titolo:</span> {{title}}
                        </p>
                        <p class="original-title">
                            <span class="bold-text">Titolo originale:</span> {{ originalTitle }}
                        </p>
                        <p class="media-lang">
                            <span class="bold-text">Lingua:</span> {{ originalLanguage }} <country-flag :country='originalLanguage' size='small'/>
                        </p>
                        <div class="vote-wrapper">
                            <span class="bold-text">Voto:</span>
                            <div v-for="star in (voteAverage)" :key="star">
                                <img src="../assets/img/Gold_Star.svg" alt="star svg" class="star">
                            </div>
                        </div>
                        <p class="overview" >
                            <span class="bold-text">Overview:</span> {{ truncate(overview, 250) }}
                        </p>
    
                    </div>
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
        width: calc((100% / 5) - .5rem);
        height: 100%;
        aspect-ratio: 1 / 1.5;

        img.poster {
            width: 100%;
            height: 100%;
            border-radius: 5px;

        }
    }

    div.media-container {
        position: relative;
        width: 100%;
        height: 100%;

        div.thecard:hover{
        transform: rotateY(180deg);
        }  
        div.thecard {
            position: absolute;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: all 1s ease;
            background-color: $bg-color;


            div.front {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
            }

            div.back {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                background-color: rgba(0, 0, 0, 0.396);
                transform: rotateY(180deg);
                padding: $main-padding;
                font-size: .95rem;
                border-radius: 5px;


                p {
                margin-bottom: .25rem;
                    span.bold-text {
                        font-weight: bold;
                    }
                }
                
            }
        }

    }
    
    
    div.vote-wrapper {
        @include flex(row, start, center);
        margin-bottom: .25rem;
    }
    img.star {
        width: 15px;
        margin-left: 7px;
    }

    
</style>