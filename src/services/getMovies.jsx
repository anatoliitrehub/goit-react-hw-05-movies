import axios from "axios";
// import clsx from "clsx";
import PropTypes from 'prop-types';


axios.defaults.baseURL="https://api.themoviedb.org/3";
const API_KEY="6dacb83bbdfc4398c50bae5501054b2f";

export const getMovies = async (appendPath,query='') => {
    return await axios.get((appendPath),{
        params:{
        api_key:API_KEY,
        query
        }
    }).then(resp=>resp.data).catch(error=>console.log(error))
};

getMovies.propTypes = {
    appendPath:PropTypes.string.isRequired,
    query:PropTypes.string
}