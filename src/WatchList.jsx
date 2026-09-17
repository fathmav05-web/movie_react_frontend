import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
 function WatchList(){

       let movies = JSON.parse(localStorage.getItem("movie")) || [];



       console.log(movies)


    return <>
    
    
    
    <div className="watchlist-page">
         <Navbar/>
    <p className="font">Your movie journey starts here.🎬</p>
   


<div className="movies ">
        
    {
        movies.map(item=><MovieCard item={item}/>)
    }
</div>
    
    </div>
    
    </>
}
export default WatchList