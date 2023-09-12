import { useState } from "react";
import movies from "../data/movies.json";
import "./Main.css";

function Main() {

     // const [variable, setVariable] = useState(initalValue);
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
          

    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter((movie) =>{
            return movieId !== movie.id
        })
        setMoviesToDisplay(newList)
    }
     //alternative code
    //const newList = moviesToDisplay.filter( (element) => {
    //    return element.id !== movieId;
   // });

    
    return (
        <div className="Main">
            <h1>We current have {moviesToDisplay.length} movies available</h1>

            {moviesToDisplay.map((movie) => {
                return (
                    <section key={movie.id} className="card">
                        <h2>{movie.title}</h2>
                        <img src={movie.imgURL} alt="profile" />
                        <h3>Rating {movie.rating}</h3>
                        <h3>Year: {movie.year}</h3>
                        <h3>Genres: {[movie.genres[0]]} {[movie.genres[1]]}</h3>

                        <button onClick={() => {deleteMovie(movie.id)}}>Delete</button>
                    </section>
                )
            })}
        </div>
    )
}

export default Main;