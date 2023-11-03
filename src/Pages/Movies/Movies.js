import React, { useEffect, useState } from "react";
import "./Movies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Movies = () => {

  const [movieList, setMovieList] = useState([])

  const getMovie = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=96af1f5471aef8b45143f59f867f2600")
    .then(res => res.json())
    .then(json => setMovieList(json.results))
}

useEffect(()=>{
  getMovie();
}, []);

console.log(movieList);
  
    return (
    <div className="barDiv">
        <input className="search-bar" type="search" placeholder="Seach For The Movies"/>
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
    <div className="movieDiv">
      {movieList.map((movie) => {
        return ( 
          <div className="discription">
              <img className="png" key={movie.index} style={{width:"310px", height:"200px", marginLeft:"13px", marginTop:"10px", border:"5px solid #45474B"}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="png" /> <br/>
              <div className="card">
                 Title : {movie.title} <br/>
                 Language : {movie.original_language} <br/>
                 Release_Date : {movie.release_date} <br/>
                 Vote_Average : {movie.vote_average} <br/>
                 Vote_Count : {movie.vote_count}
             </div>
          </div>
         )
      })}
    </div>
    </div>
  )
};

export default Movies;