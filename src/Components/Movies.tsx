import { Movie } from "../types/movie";

export const MoviesList = ({ movies }: { movies: Movie[] }) => {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id} className="movie">
          <div className="description">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </div>
          <img src={movie.poster} alt={movie.title} loading="lazy" />
        </li>
      ))}
    </ul>
  );
};

export const NoMoviesResults = () => {
  return <p>No films found!</p>;
};

export const Movies = ({ movies }: { movies: Movie[] }) => {
  const hasMovies = movies.length > 0;
  return hasMovies ? <MoviesList movies={movies} /> : <NoMoviesResults />;
};
