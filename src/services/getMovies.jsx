import axios from "axios";
// import clsx from "clsx";

axios.defaults.baseURL="https://api.themoviedb.org/3";
const API_KEY="6dacb83bbdfc4398c50bae5501054b2f";

// export const getMovies = (movieId=null) => {
//     return axios.get((`/movie/${movieId}`),{
export const getMovies = (appendPath) => {
    return axios.get((appendPath),{
        params:{
        api_key:API_KEY,
        
        }
    }).then(resp=>resp.data).catch(error=>console.log(error))
}