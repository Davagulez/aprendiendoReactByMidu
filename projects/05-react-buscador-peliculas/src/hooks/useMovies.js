import withoutResults from '../mocks/no-result.json'
import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from "../services/movies.js";

export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

    // useCallback es useMemo pero para las funciones. Tienen la misma funcionalidad
    // useMemo para cualquier cosa, useCallback para funciones
    const getMovies = useCallback(async (search) => {
        if ( search === previousSearch.current) return

        try {
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            // tanto en el try como en el catch para que se ejecute finally
            setLoading(false)
        }
    },[search])

    // useMemo sirve para memorizar un valor con tal de mejorar el rendimiento. Tiene una aplicacion parecia a useEffect
    const sortedMovies = useMemo(() => {
        return sort
        ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
        : movies
    }, [sort, movies]) 

    return { movies: sortedMovies, getMovies, loading}
}