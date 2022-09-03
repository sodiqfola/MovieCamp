import Hero from "./hero"
import { Link } from "react-router-dom"

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  console.log(posterUrl);
  const posterNull = `https://image.tmdb.org/t/p/w500null`
  const detailUrl = `/movies/${movie.id}`
  if (posterUrl == posterNull) {

    return (

      <div className=" col-md-4  col-lg-3 col-6  my-4">
        <div className="card">

          <img src="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg" class="card-img-top" alt={movie.original_title} />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>

            <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
          </div>
        </div>
      </div>


    )

  } else {
    return(
    <div className=" col-md-4  col-lg-3 col-6  my-4">
      <div className="card">

        <img src={posterUrl} class="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>

          <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
        </div>
      </div>
    </div>
    )
  }


}






// {posterNull && <img src="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg" class="card-img-top" alt={movie.original_title} /> }


const Search = ({ keyword, searchResults }) => {


  const title = ` You're searching for ${keyword}`

  const resultsHtml = searchResults.map((obj, i) => {
  
    return <MovieCard movie={obj} key={i} />
    
  })


  return (
    <>
      <Hero text={title} />
      {resultsHtml &&
        <div className="container">
          <div className="row">
            {resultsHtml}
          </div>
        </div>
      }

    {resultsHtml.length === 0 && keyword ? (
				<div className="container">
					<div className="row">
						<div className="col-10 offset-1">
							<h1 className=" text-center mt-5 ">
								I no get  <strong>{keyword}</strong>.
							</h1>
						
              <p className=" text-center fs-2" > Boss no vex 😞 </p>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
    </>
  )
}

export default Search