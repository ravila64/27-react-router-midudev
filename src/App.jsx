import './App.css'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import Page404 from './pages/404.jsx'
import { Router } from './Router.jsx'

//import { navigate } from './components/Link.jsx'
//se paso el navigate a Link.jsx
const appRoutes = [{
  path: '/',
  Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/twitch',
    Component: () => <h1>Nuevo Twitch</h1>
  }
]

function App() {
  return (
    <main>
      <h1>Midu react router</h1>
      {/* esto es renderizado condicional, clasico de react */}
      <Router routes={appRoutes} defaultComponent={Page404}/>
    </main>
  )
}
export default App
