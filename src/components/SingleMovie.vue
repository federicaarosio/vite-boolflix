<template lang="">
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
        {{ originalLanguage }}
    </p>
    <p>
        {{ voteAverage }}
    </p>
</template>

<script>

export default {
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
            type: String,
            required: true
        },
    }
}
</script>

<style lang="">
    
</style>