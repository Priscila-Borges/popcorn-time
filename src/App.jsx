import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import movies from "./data/movies.json";
import './App.css'

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((movie) => {
        return movieId !== movie.id
    })
    setMoviesToDisplay(newList)
} 

  return (
    <>
      <Header numberOfMovies = {moviesToDisplay.length}/>
      <Main movies = {moviesToDisplay} callbackToDelete={deleteMovie} />
      <Footer />
    </>
  )
}

export default App
