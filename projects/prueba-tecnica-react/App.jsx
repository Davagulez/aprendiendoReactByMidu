import { useState, useEffect } from 'react'

const CAT_ENPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/f?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export default function App () {
  const [fact, setFact] = useState('lorem')
  const [imageURL, setimageURL] = useState()
  // si no podes usar react query, SWR, axios, apollo = fecth
  useEffect(() => {
    fetch(CAT_ENPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        console.log(fact)
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setimageURL(url)
      })
  }, [])

  return (
    <main>
      <h1>App de Gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={`${CAT_PREFIX_IMAGE_URL}${imageURL}`} alt={`Image extracted using first three words for ${fact}`} />}
    </main>
  )
}
