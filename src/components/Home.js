//jshint esversion:8

import Hero from "./hero";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieDetails1, setMovieDetails1] = useState({});
  const [movieDetails2, setMovieDetails2] = useState({});
  const [movieDetails3, setMovieDetails3] = useState({});
  
  const [nowplaying, setNowPlaying] = useState({});
  const [nowplaying1, setNowPlaying1] = useState({});
  const [nowplaying2, setNowPlaying2] = useState({});
  const [nowplaying3, setNowPlaying3] = useState({});

  // const { id } = useParams();
  // const number = Math.ceil(Math.random() * 4);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=3ad668d74134084b44274ed54e5ad03c`
    )
      .then((response) => response.json())
      .then((data) => {
        const movie = data;
        const movie1 = data;
        const movie2 = data;
        const movie3 = data;
        setMovieDetails(movie.results[0]);
        setMovieDetails1(movie1.results[1]);
        setMovieDetails2(movie2.results[2]);
        setMovieDetails3(movie3.results[3]);
      });

   
  });


  useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=3ad668d74134084b44274ed54e5ad03c&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        setNowPlaying(data.results[3]);
        setNowPlaying1(data.results[4]);
        setNowPlaying2(data.results[5]);
        setNowPlaying3(data.results[10]);
      });
  });


  // console.log(detailUrl);
  const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
  const ImageUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
  const ImageUrl1 = `https://image.tmdb.org/t/p/w500${movieDetails1.poster_path}`;
  const ImageUrl2 = `https://image.tmdb.org/t/p/w500${movieDetails2.poster_path}`;
  const ImageUrl3 = `https://image.tmdb.org/t/p/w500${movieDetails3.poster_path}`;
  const detailUrl = `/movies/${movieDetails.id}`;
  const detailUrl1 = `/movies/${movieDetails1.id}`;
  const detailUrl2 = `/movies/${movieDetails2.id}`;
  const detailUrl3 = `/movies/${movieDetails3.id}`;

  const now = `https://image.tmdb.org/t/p/w500${nowplaying.poster_path}`;
  const now1 = `https://image.tmdb.org/t/p/w500${nowplaying1.poster_path}`;
  const now2 = `https://image.tmdb.org/t/p/w500${nowplaying2.poster_path}`;
  const now3 = `https://image.tmdb.org/t/p/w500${nowplaying3.poster_path}`;
  const nowdetails = `/movies/${nowplaying.id}`;
  const nowdetails1 = `/movies/${nowplaying1.id}`;
  const nowdetails2 = `/movies/${nowplaying2.id}`;
  const nowdetails3 = `/movies/${nowplaying3.id}`;



  function fullLoaded() {
    if (movieDetails) {
      return (
        <>
          <Hero text="Welcome to Movie Camp" backdrop={backdropUrl} />

          <div className="container">
            <h2 className="pt-5">TOP TRENDING</h2>
            <hr />
            <div className="row">
              <div className=" col-md-4  col-lg-3 col-6  my-4">
                <div className="card">
                  <img
                    src={ImageUrl}
                    class="card-img-top"
                    alt={movieDetails.original_title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {movieDetails.original_title}
                    </h5>

                    <Link to={detailUrl} className="btn btn-primary">
                      Show Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" col-md-4  col-lg-3 col-6  my-4">
                <div className="card">
                  <img
                    src={ImageUrl1}
                    class="card-img-top"
                    alt={movieDetails1.original_title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {movieDetails1.original_title}
                    </h5>

                    <Link to={detailUrl1} className="btn btn-primary">
                      Show Details
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" col-md-4  col-lg-3 col-6  my-4">
                <div className="card">
                  <img
                    src={ImageUrl2}
                    class="card-img-top"
                    alt={movieDetails2.original_title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {movieDetails2.original_title}
                    </h5>

                    <Link to={detailUrl2} className="btn btn-primary">
                      Show Details
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" col-md-4  col-lg-3 col-6  my-4">
                <div className="card">
                  <img
                    src={ImageUrl3}
                    class="card-img-top"
                    alt={movieDetails3.original_title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {movieDetails3.original_title}
                    </h5>

                    <Link to={detailUrl3} className="btn btn-primary">
                      Show Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* NOW PLAYING */}

          <div className="container">
            <h2 className="pt-5"> NOW PLAYING </h2>
            <hr />
            <div className="row">
              <div className=" col-md-4  col-lg-3 col-6  my-4">
                <div className="card">
                  <img
                    src={now}
                    class="card-img-top"
                    alt={nowplaying.original_title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {nowplaying.original_title}
                    </h5>

                    <Link to={nowdetails} className="btn btn-primary ">
                      Show Details
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" col-md-4  col-lg-3 col-6  my-4">
                <div className="card">
                  <img
                    src={now1}
                    class="card-img-top"
                    alt={nowplaying1.original_title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {nowplaying1.original_title}
                    </h5>

                    <Link to={nowdetails1} className="btn btn-primary ">
                      Show Details
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" col-md-4  col-lg-3 col-6  my-4">
                <div className="card">
                  <img
                    src={now2}
                    class="card-img-top"
                    alt={nowplaying2.original_title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {nowplaying2.original_title}
                    </h5>

                    <Link to={nowdetails2} className="btn btn-primary ">
                      Show Details
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" col-md-4  col-lg-3 col-6  my-4">
                <div className="card">
                  <img
                    src={now3}
                    class="card-img-top"
                    alt={nowplaying3.original_title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {nowplaying3.original_title}
                    </h5>

                    <Link to={nowdetails3} className="btn btn-primary ">
                      Show Details
                    </Link>
                  </div>
                </div>
              </div>
            

            </div>
          </div>

          {/* NEW container(upcoming) */}

          
        </>
      );
    }

    //     return(
    //       <div>
    //         <Hero text="Welcome to Movie Camp" />

    //          <div className="bg-cover" style={{backgroundImage: `url(${backdrop})`}}></div>

    //         <div className="container">
    //           <div className="row">
    //             <div className="col-lg-8 offset-lg-2 my-5">
    //               <p>
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe praesentium itaque fugiat nobis adipisci aliquid
    //               sed dignissimos, molestias nostrum obcaecati quidem at laboriosam asperiores
    //               blanditiis in odit sint a?
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="container">
    //          <div className="row">

    //           </div>
    // </div>

    //       </div>
    //     )
  }
  return fullLoaded();
};

export default Home;

// fetch('')
// .then(response => response.json())
// .then(data => {
//   console.log(data)
//   var backdrop = data.poster_path;

// });
