import './App.css'
import { lazy, Suspense } from 'react'
import Page404 from './pages/404'
import Route from './pages/Route'

import { Router } from './pages/Router'
import SearchPage from './pages/Search'


const lazyHomePage = lazy(() => import('./pages/Home'))
const lazyAboutPage = lazy(() => import('./pages/About'))


const appRoutes = [
  {
    path: '/:lang/about',
    Component: lazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router routes={appRoutes} defaultComponent={Page404} >
        <Route path='/' Component={lazyHomePage} />
        <Route path='/about' Component={lazyAboutPage} />
      </Router>
    </Suspense>
  )
}

export default App
