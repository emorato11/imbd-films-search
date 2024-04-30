import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import "./App.css";

import { Movies } from "./Components/Movies";
import { useMovies } from "./hooks/useMovies";

// APIKEY = 488cff62
// ENDPOINT = http://img.omdbapi.com/?apikey=

const useSearch = () => {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState<string | null>(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("Required field");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("Only characters accepted");
      return;
    }

    if (search.length < 3) {
      setError("At least 3 characters required");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
};

function App() {
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies } = useMovies({ search });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log({ search });
    getMovies();
  };

  const handleSearch = (event: ChangeEvent) => {
    updateSearch((event.target as HTMLInputElement).value);
  };

  return (
    <div className="page">
      <header>
        <h1>OMDB Film Search</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            type="text"
            placeholder="Matrix, Buscando a Nemo, Rocky..."
            value={search}
            onChange={handleSearch}
          />
          <button type="submit" className="">
            Search
          </button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
