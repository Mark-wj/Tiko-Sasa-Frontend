import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCrad";

const Movies = () => {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/accounts/movies/')
        .then((res) => {
            if(!res.ok){
                throw new Error("Failed to fetch Movies")
            }
            return res.json()
        })
        .then((data) => {
            setMovies(data)
        })
        .catch((err) => {
            console.error(err.message)
        });
    }, []);
    return ( 
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {movies.map((movie) => (
                 <div key={movie.id}>
                     <MovieCard 
                       title={movie.title}
                       genre={movie.genre}
                       rating={movie.rating}
                       poster={movie.poster}
                       price={movie.price}
                       date={movie.date}
                     />
                 </div>  
                ))}
           </div>
        </div>
     );
}
 
export default Movies;