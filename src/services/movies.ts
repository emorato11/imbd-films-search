import { MovieResponseAPI } from "../types/movie";

export const searchMovies = async ({ search }: { search: string }) => {
  if (search === "") return [];

  try {
    if (search) {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=488cff62&s=${search}`
      );
      const json = await response.json();

      const movies: MovieResponseAPI[] = json.Search;

      return (
        movies.map((movie) => ({
          id: movie.imdbID,
          title: movie.Title,
          poster: movie.Poster,
          year: movie.Year,
        })) || []
      );
    }
  } catch (error) {
    throw new Error("Error searching movies");
  }
};
