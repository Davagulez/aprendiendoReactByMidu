

export function ListofMovies({movies}) {
    return (
        <ul>
          {
            movies.map(movie => (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie.title} />
              </li>
            ))
          }
        </ul>
    )
}

export function NotMoviesResult() {
    return (
        <p>no se encontraron resultados</p>
    )
}

export function Movies({movies}) {
    const hasMovies = movies?.length > 0
    return (
        hasMovies
            ? <ListofMovies movies={movies} />  
            : <NotMoviesResult />
    )
}