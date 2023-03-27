import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'


// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
export function App() {
  const {fact, refreshFact} = useCatFact()
  const { imageUrl } = useCatImage({fact})


  const handleclick = async () => {
    refreshFact()
  }

  return (
    <main>
          <h1>app de gatitos</h1>
          <button onClick={handleclick}>Get new fact</button>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}

export default App
