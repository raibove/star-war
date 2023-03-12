import "./MovieDetails.css";

const MovieDetails = ({selectedMovie})=>{

    return (
        <div className="movie-details">
            {selectedMovie===null ? 
                <h3 className="no-movie">No movie selected</h3> 
                :
                <div>
                    <h1>{selectedMovie.title}</h1>
                    <p>{selectedMovie.opening_crawl}</p>
                    <p>Directed by: {selectedMovie.director}</p>
                </div>
            }
        </div>
    )
}

export default MovieDetails;