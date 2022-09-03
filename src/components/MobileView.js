import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./hero";

const MovieView = () => {

    const { id } = useParams()
    console.log(id)

    const [movieDetails, setMovieDetails] = useState({})
    const [isloading, setisloading] = useState(true)

    useEffect(() => {


        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3ad668d74134084b44274ed54e5ad03c&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)
                setisloading(false)
            })
    }, [id])

    const ImageUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
    const backdropUrl =  `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
    function fullLoaded() {
        if (isloading) {
            return <Hero text="Loading......" />
        }
        if (movieDetails) {
            return (
                <>

                    <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
                    <div className="container my-4">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={ImageUrl} className="img-fluid shadow rounded" alt="" />
                            </div>
                            <div className="col-md-8 -flex ">
                                <div className="mt-5">
                                   <h2> {movieDetails.original_title} </h2>
                                    <p className="Lead">
                                       {movieDetails.overview}
                                   </p>
                                </div>
                                <div>
                                    <h3> Release date :{movieDetails.release_date} </h3>
                                     <h3> Ratings: {movieDetails.vote_average}/10 </h3> 
                                </div>
                               

                               
                            </div>
                        </div>
                    </div>

                </>
            )
        }
    }

    return fullLoaded()

}

export default MovieView;


