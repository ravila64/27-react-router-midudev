import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './constants.js'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import { navigate } from './components/Link.jsx'

//se paso el navigate a Link.jsx

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(()=>{
    // se ejecuta solo una vez
    const onLocationChange = () =>{
      setCurrentPath(window.location.pathname)
    }
    // botones ir hacia delante
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    // boton navega hacia atras, se utiliza opoState
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    // eliminar los eventos
    return ()=>{
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  },[])

  return (
    <main>
    <h1>Midu react router</h1>
    {/* esto es renderizado condicional, clasico de react */}
    { currentPath==='/' &&  <HomePage/>}
    { currentPath==='/about' &&  <AboutPage/>}
    </main>
  )
}
export default App
