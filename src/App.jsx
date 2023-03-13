import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Movie from "./pages/Movie";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await axios.get(
        "https://swapi.dev/api/films/?format=json"
      );
      setMovies(response.data.results);
      setLoading(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Movie movies={movies} loading={loading} />
    </div>
  );
}

export default App;
