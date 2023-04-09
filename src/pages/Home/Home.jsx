import { useState,useEffect } from "react"
import { NavLink } from "react-router-dom";
import { getMovies } from "services/getMovies"
import s from './Home.module.css';


 const Home = () => {
   
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        getMovies("/trending/movie/week").then(data=>{setMovies(data)})
    },[])
    // console.log(movies)

    return(
<>
<section className={s.section}>
<h1>Trending today</h1>
    <ul>
    {movies.results&&movies.results.map(el=>{
        const fullPath=`/movies/`+el.id;
        return(
            <>
            <li key={el.id}>
            <NavLink to={fullPath} >{el.title}</NavLink></li>
            </>
            )})}
    </ul>
    </section>
</>
    )
}

export default Home

