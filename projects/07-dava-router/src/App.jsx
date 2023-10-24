import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/Home.jsx'
import  AboutPage  from './pages/About.jsx'
import { useEffect } from 'react'
import { EVENTS } from './const'


const routes = [
  {
    path:'/',
    Component: HomePage
  },
  {
    path:'/about',
    Component: AboutPage
  }
]

function Router({routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1>}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)  
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  const Page = routes.find(({ path }) => path === currentPath)?.Component
  return Page ? < Page /> : < DefaultComponent />
}

function App() {
  

  return (
    <main>
     <Router routes={routes}/>
    </main>
  )
}

export default App
