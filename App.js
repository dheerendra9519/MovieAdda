/*

import { useState, useEffect } from 'react';  // hooks 


const Person = (props) => {
  return (

  

    
<>
  <h1> Name: {props.name} </h1>
  <h2>  gander:{props.gender}</h2>
  <h3> age:{props.age} </h3>

  </>
      
  );
}

const App = () => {
  const [counters,setCounters] = useState(0);
  useEffect(() =>{
         //setCounters(100);
       alert('you changed the counter to '+ counters)

  }, [counters]
  );
  return (
    <div className=" App">
    
    <button onClick= {() => setCounters((prevCount) => prevCount - 1) }>-</button>
    <h1>{counters}</h1>
    <button onClick= {() => setCounters((nextCount) => nextCount + 1) }>+</button>

    </div>
    /*
    <div className="App">
    
    <Person name = {'dherendra'} gender = {'male'}/>
    <Person name = {'bob'} gender = {'female'}/>
    <Person name = {'james'} gender = {'male'} age = {455%84}/>
    
  
  
   

    </div>
    
  );
}
*/

import {useEffect, useState} from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';
//  68d5e402

const API_URL = 'https://www.omdbapi.com?apikey=68d5e402';
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() =>
  {
   searchMovies('fast');
  },  []);
  const searchMovies = async(title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data  = await response.json();
  setMovies(data.Search);

  };
 
  
    return (
        <div className=" App">
        <h1>MoviesAdda</h1>
        <div className="search">
        <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder = "search for Movies"
       
        />
        <img 
        src = {searchIcon}
        alt = "search"
        onClick = {() => searchMovies(searchTerm)}
        />
        </div>

        {movies?.length > 0 ? (

          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
       
        </div>
        );
}

export default App;
