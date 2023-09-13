import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import movies from "./data/movies.json";
import AddMovie from './components/AddMovie';
import './App.css'

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieTitle) => {
    const newList = moviesToDisplay.filter((movie) => {
      return movie.title !== movieTitle
    })
    setMoviesToDisplay(newList)
  }

  const addNewMovie = (newMovie) => {
    const newList = [newMovie, ...moviesToDisplay];
    setMoviesToDisplay(newList);
  }

  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />
      <AddMovie callBaclToAddMovie={addNewMovie} />
      <Main movies={moviesToDisplay} callbackToDelete={deleteMovie} />
      <Footer />
    </>
  )
}

export default App
