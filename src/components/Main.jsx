import { useState } from "react";
import movies from "../data/movies.json";
import Movie from "../components/Movie"


function Main() {

    // const [variable, setVariable] = useState(initalValue);
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter((movie) => {
            return movieId !== movie.id
        })
        setMoviesToDisplay(newList)
    }

    let message;
    if (moviesToDisplay.length > 0) {
        message = <h1>We current have {moviesToDisplay.length} movies available</h1>
    } else {
        message = <h1>Sorry, no movies to display</h1>
    }

    return (
        <div className="Main">

            {message}

            {moviesToDisplay.map((movie) => {
                return (
                    <Movie movieDetails ={movie} callbackToDelete= {deleteMovie}/>
                )
            })}
        </div>
    );
}

export default Main;