import { useState } from "react";

import { searchMovies } from "../services/movies";
import { Movie } from "../types/movie";

// interface MoviesResponse {
//   Response: string;
//   totalResults: string;
//   Search: MovieResponseAPI[];
// }

// interface MoviesNoResult {
//   Response: string;
//   Error: string;
// }

export const useMovies = ({ search }: { search: string }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const newMovies = await searchMovies({ search });

    setMovies(newMovies || []);
  };

  return { movies, getMovies };
};
