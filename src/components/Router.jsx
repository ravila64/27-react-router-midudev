import { EVENTS } from "../constants.js"
import { useState, useEffect, Children } from "react"
import { match } from 'path-to-regexp'

// eslint-disable-next-line react/prop-types
export function Router({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    useEffect(() => {
        // se ejecuta solo una vez
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }
        // botones ir hacia delante
        window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
        // boton navega hacia atras, se utiliza opoState
        window.addEventListener(EVENTS.POPSTATE, onLocationChange)
        // eliminar los eventos
        return () => {
            window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
            window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
        }
    }, [])

    let routeParams = {}
    // add routes from children <Route /> components 
    const routesFromChildren = Children.map(children, ({ props, type }) => {
        //const {props, type} = children
        const { name } = type
        //console.log({ props, type })
        const isRoute = name === 'Route'
        return isRoute ? props : null
    })   // .filter(Boolean)

    console.log(routesFromChildren)
    const routesToUse = routes.concat(routesFromChildren)

    // quito routes x routesToUse
    const Page = routesToUse.find(({ path }) => { 
        if (path === currentPath) return true
        // guardar los parametros  de la url que eran dinamicos
        // y que hemos extraido con path-to-regexp, example: /search/:query 
        // y la url es /search/javascript
        // matched.params.query === 'javascript'
        const matcherUrl = match(path, { decode: decodeURIComponent })
        const matched = matcherUrl(currentPath)
        if (!matched) return false
        routeParams = matched.params  // objeto {query:'javascript'}
        return true
    })?.Component

    return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
