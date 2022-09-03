//jshint esversion:8

import './App.css';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import AboutView from './components/About';
import {Route, Routes} from 'react-router-dom';
import Search from './components/Search';
import MovieView from './components/MobileView';

import PageNot from './components/404';
import Coming from './components/Coming';




function App() {

  const [searchResults, setSearchResults] = useState([]);
 
  const [searchText, setSearchText] = useState("");
  useEffect( () => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=3ad668d74134084b44274ed54e5ad03c&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then( response => response.json()) 
      .then( data => {
       
       setSearchResults(data.results);
       console.log(data);
      
       
      });
    }
   
    
   
  } , [searchText]);
  return (
    <div>

      <Navbar searchText={searchText} setSearchText={setSearchText} />
     
       <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/upcoming" element={<Coming />} />
        <Route path="/Search" element={<Search keyword={searchText} searchResults={searchResults  } />} />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<PageNot />} />
         </Routes>
     
    
    
    </div>
  );
}


export default App;
