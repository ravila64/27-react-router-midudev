import './App.css'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import Page404 from './pages/404.jsx'
import { Router } from './components/Router.jsx'
import SearchPage from './pages/Search.jsx'
import { Route } from './components/Route.jsx'

//import { navigate } from './components/Link.jsx'
//se paso el navigate a Link.jsx
const appRoutes = [
{
  path: '/search/:query',   // /search/javascript /search/python, etc
  Component: SearchPage
}
]

function App() {
  return (
    <main>
      <h3>react router</h3>
      {/* esto es renderizado condicional, clasico de react */}
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  )
}
export default App
