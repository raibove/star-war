import MovieDetails from '../../components/MovieDetails';
import MovieList from '../../components/MovieList';
import Search from '../../components/Search';
import Sort from '../../components/Sort';
import { useState, useEffect } from 'react';
import './Movie.css';

const Movie = ({movies})=>{
    const options = [
        {value: 'episode', label: 'episode'},
        {value: 'year', label: 'year'}
    ]
    const [filteredMovies, setFilteredMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortType, setSortType] = useState('release_date');
    
    useEffect(()=>{
        handleFilterMovies()
    }, [movies, searchQuery, sortType])

    const handleMovieClick = (movie)=>{
        setSelectedMovie(movie)
    }

    const handleFilterMovies = ()=>{
        let filterMovies = movies.filter(movie=>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        )

        let sortedMovies = filterMovies;

        if(sortType==='year'){
            sortedMovies = filterMovies.sort((a,b) => {
                const aDate = new Date(a.release_date);
                const bDate = new Date(b.release_date);

                return aDate - bDate;
            })
        }else if(sortType==='episode'){
            sortedMovies = filterMovies.sort((a,b)=> a.episode_id - b.episode_id)
        }

        setFilteredMovies(sortedMovies);
    }
    
    const handleSearchChange = (query)=>{
        setSearchQuery(query)
    }

    const handleSortChange = (e)=>{
        if(e && e.value)
            setSortType(e.value)
    }
    
    return(
        <div>
            <div className='filter-container'>
                <Sort options={options} handleSortChange={handleSortChange}/>
                <Search searchQuery={searchQuery} handleSearchChange={handleSearchChange}/>
            </div>
            <div className="movie-container">
                <MovieList movies={filteredMovies} onMovieClick={handleMovieClick}/>
                <MovieDetails selectedMovie={selectedMovie}/>
            </div>
        </div>
    )
}

export default Movie;