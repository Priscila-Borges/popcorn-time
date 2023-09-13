import Movie from "../components/Movie"

function Main(props) {    

    return (
        <div className="Main">            

            {props.movies.map((movie, index) => {
                return (
                    <Movie key={index} movies ={movie} callbackToDelete={props.callbackToDelete} />
                )
            })}
        </div>
    );
}

export default Main;