import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getMovies = async ()=>{
    try{
      let response = await axios.get('https://swapi.dev/api/films/?format=json')
      setMovies(response.data.results)
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

  return (
    <div className="App">
      <div>
        <MovieList movies={movies} onMovieClick={handleMovieClick}/>
      </div>
    </div>
  )
}

export default App
