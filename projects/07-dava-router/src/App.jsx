import './App.css'
import HomePage from './pages/Home.jsx'
import  AboutPage  from './pages/About.jsx'
import Page404 from './pages/404'
import { pathToRegexp } from 'path-to-regexp'

import { Router } from './pages/Router'


const appRoutes = [
  {
    path:'/',
    Component: HomePage
  },
  {
    path:'/about',
    Component: AboutPage
  },
  {
    path:'/search/:query',
    Component: ({routeParams}) => <h1>Has buscado {routeParams.query}</h1>
  }
]



function App() {
  

  return (
    <main>
     <Router routes={appRoutes} defaultComponent={Page404}/>
    </main>
  )
}

export default App
