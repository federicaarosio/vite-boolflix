import { reactive } from 'vue'

export const store = reactive({
    /* API search movies con chiave API*/
    apiListOfMovies: "https://api.themoviedb.org/3/search/movie?api_key=035eedbe7389d3160c097087910908d0",

    /* Array vuoto che si popola dopo che l'utente ha fatto la ricerca*/
    moviesList: [],
    
    // Legato ad input con v-model
    searchMovie: "",
});



// chiave API
// 035eedbe7389d3160c097087910908d0