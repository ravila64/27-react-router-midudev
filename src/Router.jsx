import { EVENTS } from "./constants.js"
import { useState, useEffect } from "react"

// eslint-disable-next-line react/prop-types
export function Router({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
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

    const Page = routes.find(({ path }) => path === currentPath)?.Component
    return Page ? <Page /> : <DefaultComponent />
}
