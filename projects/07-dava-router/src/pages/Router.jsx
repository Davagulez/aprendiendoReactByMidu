import { useState, useEffect, Children } from "react"
import { EVENTS } from "../const"
import { match } from "path-to-regexp"


export function Router({ children ,routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
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

  let routeParams = {}

  //add routes from children <Route /> components
  const routesFromChildrens = Children.map(children, ({ props, type }) => {
    const {name} = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  }).filter(Boolean)

  console.log(routesFromChildrens)

  const rootsToUse = routes.concat(routesFromChildrens)

  //hemos usado path-to-regex
  //para poder detectar rutas dinamicas, como por ejemplo
  // /search/:query <--- :query que es una ruta dinamica
  const Page = rootsToUse.find(({ path }) => {
    if (path === currentPath) return true
    const matchedUrl = match(path, { decode: decodeURIComponent })
    const matched = matchedUrl(currentPath)
    if (!matched) return false;

    // Guardar los parametros de la url que eran dinamicos
    // y que hermos extraido con path-to-regex
    // por ejemplo, si la ruta es /search/:query
    // y la url es /search/javascript
    //matched.params.query === 'javascript'
    routeParams = matched.params
    return true
  })?.Component

  return Page 
  ? < Page routeParams={routeParams}/> 
  : < DefaultComponent routeParams={routeParams}/>
}