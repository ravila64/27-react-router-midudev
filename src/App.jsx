import { useState } from 'react'
import './App.css'

const NAVIGATION_ ='algo' 
function navigate( href ){
  window.history.pushState({},'',href)
  // crear un evento personlizado para que elñ navegador nos avise el cmabio de la ruta
  const navigateEvent = new Event(NAVIGATION_)

  // despachar el evento
}

function HomePage(){
  return(
    <>
      <h1>Home Page</h1>
      <p>Este es un pagina para crear un react router desde cero </p>
      <a href='/about'>Ir a cerca de</a>
    </>
  )
}

function AboutPage(){
  return(
    <>
      <h1>About</h1>
      <div>
        <img src="https://media.licdn.com/dms/image/D4E03AQFbpgbYNeP4ig/profile-displayphoto-shrink_200_200/0/1684341532395?e=1721260800&v=beta&t=IdOzLUOiZlHuULFFqGpXFY9ShWjTJrhlKjX-dnAg7ug" alt="raa" />
        <p>Estoy creando un clone de react router </p>
      </div>
      <a href='/'>Ir al Home</a>
    </>
  )
}
function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
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
