import "./Movie.css"

function Movie(props) {

    
    return (
        <section className="Movie">

            <h2>{props.movies.title}</h2>

            {props.movies.imgURL
                ? <img src={props.movies.imgURL} />
                : <img src="https://dummyimage.com/182x268/ffffff/000000" />
            }

            <h3>Rating {props.movies.rating}</h3>
            <h3>Year: {props.movies.year}</h3>
            <h3>Genres: {[props.movies.genres[0]]} {[props.movies.genres[1]]}</h3>

            {props.movies.rating > 8 && <p>RECOMMENDED</p>}

            <button onClick={() => { props.callbackToDelete(props.movies.id) }}>Delete</button>
        </section>
    )
}


export default Movie;