import Movie from "../components/Movie"

function Main(props) {    

    return (
        <div className="Main">            

            {props.movies.map((movie) => {
                return (
                    <Movie key={props.movies.id} movies ={movie} callbackToDelete={props.callbackToDelete} />
                )
            })}
        </div>
    );
}

export default Main;