import { useState, useEffect } from "react"
import { getRandomFacts } from "../services/facts"

export function useCatFact () {
    const [fact, setFact] = useState()
  
    const refreshRandomFact = () => {
      getRandomFacts().then(newFact => setFact(newFact))
    }
  
    // para recuperar la cita al cargar la pagina
    useEffect(refreshRandomFact, [])
  
    return {fact, refreshRandomFact}
  }