import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Movie from './pages/Movie';

function App() {

  const [movies, setMovies] = useState([]);

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

  
  return (
    <div className="App">
      <Movie movies={movies}/>
    </div>
  )
}

export default App
