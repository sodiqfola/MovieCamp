
const Hero = ({text, backdrop}) => {
    return(
    <header className="bg-dark text-white p-5 hero-container">
       
      <h1 className="text"> {text}</h1>
      { backdrop &&
         <div className="bg-cover" style={{backgroundImage: `url(${backdrop})`}}></div>
      }
     
      
    </header>
    )
}


export default Hero;

// https://api.themoviedb.org/3/trending/all/week?api_key=3ad668d74134084b44274ed54e5ad03c