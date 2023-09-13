import "./Header.css"

function Header(props) {

  let message;
    if (props.numberOfMovies > 0) {
        message = <h1>We current have {props.numberOfMovies} movies available</h1>
    } else {
        message = <h1>Sorry, no movies to display</h1>
    }
  
    return (   

    <header className="Header">
      <h1>🍿Popcorn Time!🍿</h1>
      {message}
    </header>
  )
}

export default Header;