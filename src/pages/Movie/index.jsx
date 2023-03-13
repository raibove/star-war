import MovieDetails from '../../components/MovieDetails';
import MovieList from '../../components/MovieList';
import Search from '../../components/Search';
import Sort from '../../components/Sort';
import { useState, useEffect } from 'react';
import { sortMovies, searchMovies } from '../../utils/filterMovies';
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
        
    const handleFilterMovies = ()=>{
            let filterMovies = searchMovies(searchQuery, movies);
            let sortedMovies = sortMovies(sortType, filterMovies);
            setFilteredMovies(sortedMovies);
        }
        handleFilterMovies()
    }, [movies, searchQuery, sortType])

    const handleMovieClick = (movie)=>{
        setSelectedMovie(movie)
    }

    
    const handleSearchChange = (query)=>{
        setSearchQuery(query)
    }

    const handleSortChange = (e)=>{
        if(e && e.value)
            setSortType(e.value)
    }
    
    return(
        <div className='movie'>
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