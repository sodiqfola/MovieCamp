//jshint esversion:8
import { useEffect, useState } from "react";
import Hero from "./hero"


const AboutView = () => {

  
  const backdropUrl = `https://image.tmdb.org/t/p/original/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg`;

    return(
      <>
        <Hero text="About Us"  backdrop={backdropUrl} />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe praesentium itaque fugiat nobis adipisci aliquid 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe praesentium itaque fugiat nobis adipisci aliquid 
              sed dignissimos, molestias nostrum obcaecati quidem at laboriosam asperiores 
              blanditiis in odit sint a?
              </p>
            </div>
          </div>
        </div>
        
      </>
    )
  }

  export default AboutView