import './App.css'
/* import { useRef } from 'react' */
//* useRef sirve para tener un objeto de referencia pero que a diferencia de useState, persiste entre los distintos renderizados */
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useEffect, useRef, useState, useCallback } from 'react'
import  debounce  from 'just-debounce-it'

function App() {
  /* const inputRef = useRef() */
  const [sort, setSort] = useState(false)
  const {search, updateSearch, error} = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  //debounce: el debounce sirve para que no ejecuten tantas llamadas. Hay varias formas de hacerlo. la favorita de midu es just-debounce-it
  const debounceGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({search})
    }, 300)
    ,[]
  )
  
  const handleSort = () => {
    setSort(!sort)
  }

  //formulario de manera no controlada
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies(search)
    /*const value = inputRef.current.value */ /* para acceder al valor del inputRef se usa siempre el current porque inputRef es un objeto que puede mutar */
  }
  
  //formulario de manera controlada
  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }
  
  function useSearch() {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const ifFirstInput = useRef(true)

    useEffect(() => {
      if (ifFirstInput.current) {
        ifFirstInput.current = search === ''
        return
      }

      if(search === '') {
        setError('No se puede buscar una pelicula vacia')
        return
      }
  
      if (search.match(/^\d+$/)) {
        setError('No se puede buscar una película con un número')
        return
      }
  
      if (search.length < 3) {
        setError('La búsqueda debe tener al menos 3 caracteres')
        return
      }
  
      setError(null)
    }, [search])

    return {search, updateSearch, error}
  }

  return (
    <>
      <header>
        <h1 className='page'>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' type="text" placeholder='Avengers, Star Wars, The Matrix...'/>
          <input onChange={handleSort} checked={sort} type="checkbox" name="sort" id="sort" />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      { error && <p style={{color:'red', textAlign:'center'}}>{error}</p>}
      <main>
        {
          loading ? <p>Cargando ... </p> : <Movies movies={movies} />
        }
      </main>
    </>
  )
}

export default App
