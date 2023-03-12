const MovieList = ({movies, onMovieClick})=>{
    
    if(movies===null || movies===undefined){
        return(
            <div>
                No Movie to display
            </div>
        )
    }
    
    return(
        <ul>
            {movies.map(movie => (
                <li key={movie.title + movie.episode_id} onClick={onMovieClick}>
                    <span>Episode {movie.episode_id}</span>
                    <span>{movie.title}</span>
                    <span>{movie.release_date}</span>
                </li>
            ))}
        </ul>
    )
}

export default MovieList