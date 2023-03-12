import { convertToRoman } from "../../utils/roman"
import "./MovieList.css"

const MovieList = ({movies, onMovieClick})=>{
    
    if(movies===null || movies===undefined){
        return(
            <div>
                No Movie to display
            </div>
        )
    }

    return(
        <ul className="movie-list">
            {movies.map(movie => (
                <li className="movie-item" key={movie.title + movie.episode_id} onClick={()=>onMovieClick(movie)}>
                    <span className="episode-number">EPISODE {movie.episode_id}</span>
                    <span className="movie-title">Episode {convertToRoman(movie.episode_id)} - {movie.title}</span>
                    <span className="release-date">{movie.release_date}</span>
                </li>
            ))}
        </ul>
    )
}

export default MovieList