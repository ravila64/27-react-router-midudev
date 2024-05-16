import { Suspense, lazy } from 'react'
import './App.css'
// import HomePage from './pages/Home.jsx'
// import AboutPage from './pages/About.jsx' // import estatico
import Page404 from './pages/404.jsx'
import { Router } from './components/Router.jsx'
import SearchPage from './pages/Search.jsx'
import { Route } from './components/Route.jsx'

// esto es un import dinamico, solo se carga cuando se ejecuta

const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

//se paso el navigate a Link.jsx
// /search/javascript /search/python, etc
const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  return (
    <main>
      {/* se puede colocar el fallback={null} */}
      <Suspense fallback={<div>Loading...</div>}>
        <h3>react router</h3>
        {/* esto es renderizado condicional, clasico de react */}
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}
export default App
