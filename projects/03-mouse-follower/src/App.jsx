import { useEffect, useState } from "react";

const FollowMouse =() => {
  const [enabled, setEnabled] = useState(false)
const [position, setPosition] = useState({x:0, y:0}) // buena practica es poner unos valores inciales en el useState

useEffect(() => {
  console.log('effect', {enabled})

  const handleMove = (event) => {
    const {clientX, clientY} = event
    console.log('handleMove', {clientX, clientY})
    setPosition({x: clientX, y: clientY})
  }

  if (enabled) { // <--- dentro de un condicional no se puede ejecutar un hook, pero si se puede ejecutar un if dentor de un hook
    window.addEventListener('pointermove', handleMove)   
  }

  return () => {
    window.removeEventListener('pointermove', handleMove)
    setPosition({x:0 , y:0})
  } // useEffect puede devolver una función que sirve para limpiar todas las suscripciones o eventos antes de qeu se renderice el componente. Cuando? cuando se desmonta el componente o cuando se vuelve a ejecutar debido a las dependencias
}, [enabled])

return (
  <>
    <div
    style={{
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0,0.5)',
      border: '1px solid #fff',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -20,
      top:  -20,
      width: 40,
      height: 40,
      transform: `translate(${position.x}px, ${position.y}px)`
    }}
    >

    </div>
    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? 'Desactivar' : 'Activar'} seguir puntero
    </button>
  </>
)
}

function App() {

  return (
    <main>
      {<FollowMouse />}
    </main>
  )
}

export default App
