import { useParams } from "react-router-dom";
const Cast = () =>{
    const {movieId} = useParams()

    return (
        <>
cast {movieId}
        </>
    )
}

export default Cast;