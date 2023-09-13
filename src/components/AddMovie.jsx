import { useState } from 'react'

function AddMovie(props) {

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [year, setYear] = useState("");
    const [imgURL, setImgURL] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();       

        const newMovie = {
            title: title,
            rating: rating,
            year: year,
            imgURL: imgURL,
        }

        props.callBaclToAddMovie(newMovie);         

        // clear form
        setTitle("");
        setRating("");
        setYear("");
        setImgURL("");
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label>
                    Title
                    <input
                        type="text"
                        name="title"
                        required
                        placeholder="enter the title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>
                Rating
                <label>
                    <input
                        type="number"
                        min={1}
                        max={10}
                        name="rating"
                        required
                        placeholder="enter the rating"
                        value={rating}
                        onChange={(e) => { setRating(e.target.value) }}
                    />
                </label>
                <input
                    type="text"
                    name="year"
                    required
                    placeholder="enter the year"
                    value={year}
                    onChange={(e) => { setYear(e.target.value) }}
                />
                <label>
                    Image
                    <input className="Movie"
                        type="text"
                        name="imgURL"
                        placeholder="enter the image URL"
                        value={imgURL}
                        onChange={(e) => { setImgURL(e.target.value) }}
                    />
                </label>
                <button>Create</button>
            </form>
        </section>
    )
}

export default AddMovie;