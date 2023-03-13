import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import axios from 'axios';
import MovieDetails from './components/MovieDetails';
import Search from './components/Search';
import Sort from './components/Sort';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);

  const getMovies = async ()=>{
    try{
      let response = await axios.get('https://swapi.dev/api/films/?format=json')
      setMovies(response.data.results)
      setFilteredMovies(response.data.results)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getMovies()
  }, []);

  const handleMovieClick = (movie)=>{
    setSelectedMovie(movie)
  }

  const handleFilterMovies = (query)=>{
    let filterMovies = movies.filter(movie=>
      movie.title.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredMovies(filterMovies);
  }

  const handleSearchChange = (query)=>{
    setSearchQuery(query)
    handleFilterMovies(query)
  }

  const updateFilteredMovies = (updatedMovies)=>{
    setFilteredMovies([...updatedMovies])
  }

  return (
    <div className="App">
      <div className='filter-container'>
        <Sort filteredMovies={filteredMovies} updateFilteredMovies={updateFilteredMovies}/>
        <Search searchQuery={searchQuery} handleSearchChange={handleSearchChange}/>
      </div>
      <div className="movie-container">
        <MovieList movies={filteredMovies} onMovieClick={handleMovieClick}/>
        <MovieDetails selectedMovie={selectedMovie}/>
      </div>
    </div>
  )
}

export default App
