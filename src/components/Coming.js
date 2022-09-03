//jshint esversion:8

import Hero from "./hero"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const Coming = () => {

    const [upcoming, setUpcoming] = useState({});
  const [upcoming1, setUpcoming1] = useState({});
  const [upcoming2, setUpcoming2] = useState({});
  const [upcoming3, setUpcoming3] = useState({});



  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=3ad668d74134084b44274ed54e5ad03c&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
      const upcoming = data;
      setUpcoming(upcoming.results[0]);
      setUpcoming1(upcoming.results[2]);
      setUpcoming2(upcoming.results[3]);
      setUpcoming3(upcoming.results[1]);
    });
  });

  
  const up = `https://image.tmdb.org/t/p/w500${upcoming.poster_path}`;
  const up1 = `https://image.tmdb.org/t/p/w500${upcoming1.poster_path}`;
  const up2 = `https://image.tmdb.org/t/p/w500${upcoming2.poster_path}`;
  const up3 = `https://image.tmdb.org/t/p/w500${upcoming3.poster_path}`;
  const updetails = `/movies/${upcoming.id}`;
  const updetails1 = `/movies/${upcoming1.id}`;
  const updetails2 = `/movies/${upcoming2.id}`;
  const updetails3 = `/movies/${upcoming3.id}`;
  const backdropUrl = `https://image.tmdb.org/t/p/original${upcoming.backdrop_path}`;


    return(
      <>
        <Hero text="TOP UPCOMING" backdrop={backdropUrl}  />
        <div className="container">
          <div className="row">
          <div className="container">
            
           
            <div className="row">
              <div className=" col-md-4  col-lg-3 col-6  my-4">
                <div className="card">
                  <img
                    src={up}
                    class="card-img-top"
                    alt={upcoming.original_title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {upcoming.original_title}
                    </h5>

                    <Link to={updetails} className="btn btn-primary ">
                      Show Details
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" col-md-4  col-lg-3 col-6  my-4">
                <div className="card">
                  <img
                    src={up1}
                    class="card-img-top"
                    alt={upcoming1.original_title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {upcoming1.original_title}
                    </h5>

                    <Link to={updetails1} className="btn btn-primary ">
                      Show Details
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" col-md-4  col-lg-3 col-6  my-4">
                <div className="card">
                  <img
                    src={up2}
                    class="card-img-top"
                    alt={upcoming2.original_title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {upcoming2.original_title}
                    </h5>

                    <Link to={updetails2} className="btn btn-primary ">
                      Show Details
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" col-md-4  col-lg-3 col-6  my-4">
                <div className="card">
                  <img
                    src={up3}
                    class="card-img-top"
                    alt={upcoming3.original_title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {upcoming3.original_title}
                    </h5>

                    <Link to={updetails3} className="btn btn-primary ">
                      Show Details
                    </Link>
                  </div>
                </div>
              </div>


            </div>
          </div>
          </div>
        </div>
        
      </>
    )
  }

  export default Coming