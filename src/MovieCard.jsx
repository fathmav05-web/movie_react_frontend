import React from 'react'

function MovieCard({ item ,showButton}) {

    const addToList = () => {

        let movies = JSON.parse(localStorage.getItem("movie")) || [];

     movies.push(item)

        localStorage.setItem("movie", JSON.stringify(movies));

    }
    

    return (
        <>
            <div className="home-moviecard">
                <img src={item.Poster} alt="Movie poster" />
                <h3>{item.Title}</h3>
                <p>{item.Year}</p>
      { showButton && ( <button onClick={addToList}> Add to list </button> ) } 
      </div> 
      </>
       ) 


    }
export default MovieCard