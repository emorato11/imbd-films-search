export interface Movie {
  id: string;
  poster: string;
  title: string;
  year: string;
}

export interface MovieResponseAPI {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
