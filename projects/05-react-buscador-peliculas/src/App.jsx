import './App.css'
/* import { useRef } from 'react' */
//* useRef sirve para tener un objeto de referencia pero que a diferencia de useState, persiste entre los distintos renderizados */
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'

function App() {
  const { movies:mappedMovies } = useMovies()
  /* const inputRef = useRef() */

  const handleSubmit = (event) => {
    event.preventDefault()
/*     const value = inputRef.current.value */ /* para acceder al valor del inputRef se usa siempre el current porque inputRef es un objeto que puede mutar */
    const { query } = Object.fromEntries( 
      new window.FormData(event.target)
    )
    console.log(query)
  }

  return (
    <>
      <header>
        <h1 className='page'>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input name='texto' type="text" placeholder='Avengers, Star Wars, The Matrix...'/>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </>
  )
}

export default App
