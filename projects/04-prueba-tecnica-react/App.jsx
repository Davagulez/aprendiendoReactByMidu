import { useState, useEffect } from 'react'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { getRandomFacts } from './services/facts'
import './App.css'

const CAT_ENPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/f?size=50&color=red&json=true`
const SUBIDA_RANDOM = 'me subieron al repo'


export default function App () {
  
  const { fact, refreshRandomFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })
 
  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={handleClick}>get new fact</button>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt={`Image extracted using first three words for ${fact}`} />}
    </main>
  )
}
