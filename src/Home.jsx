
//my name is fathimaa
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import MovieCard from './MovieCard'

function Home() {
     
    const [movie, SetMovie] = useState([])

    const getMovie = async () => {
        let res = await fetch("https://www.omdbapi.com/?apikey=11c090c5&s=movie&y=2026&page=1")

        let data = await res.json()

        SetMovie(data["Search"])

        console.log(data["Search"])
    }

    useEffect(() => {
        getMovie()
    }, [])
    return (
        <>
         
            
            
            <div className='home-container'>
             <Navbar />
                <div className='logo'> Movie Shows
                </div>
               
<Link to="/movies">
                    <button className="search-btn">
                        Search Movies.... </button> </Link>


                <p className='text'> Discover movies you'll love.</p>
                <p className='text'>Search. Explore. Watch. </p>

<div className="movies">
    {
        movie?.map(item => (
            <MovieCard
                key={item.imdbID}
                item={item}
            /> 
        ))
    }
</div>
                
            </div>

        </>
    )
}
export default Home