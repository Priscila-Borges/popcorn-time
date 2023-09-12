import { useState } from "react";
import movies from "../data/movies.json";
import "./Main.css";

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
                    <section key={movie.id} className="card">
                        <h2>{movie.title}</h2>

                        {movie.imgURL
                            ? <img src={movie.imgURL} />
                            : <img src="https://dummyimage.com/182x268/ffffff/000000" />
                        }

                        <h3>Rating {movie.rating}</h3>
                        <h3>Year: {movie.year}</h3>
                        <h3>Genres: {[movie.genres[0]]} {[movie.genres[1]]}</h3>

                        {movie.rating > 8 && <p>RECOMMENDED</p>}

                        <button onClick={() => { deleteMovie(movie.id) }}>Delete</button>
                    </section>
                )
            })}
        </div>
    )
}

export default Main;