import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Router } from './components/Router'
import { Route } from './components/Route'
import { getCurrentPath } from './utils/getCurrentPath'
import { Link } from './components/Link.jsx'

vi.mock('./utils/getCurrentPath.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => {
    // beforeEach se ejecuta antes de cada tets
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })
    // it('should work', () => {
    //     expect(1).toBe(1)
    // })
    it('should render without problems', () => {
        render(<Router routes={[]} />)
        expect(true).toBeTruthy()
    })
    it('should render 404 no routes match', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
        //console.log(screen.debug())
        expect(screen.getByText('404')).toBeTruthy() // toBeTruthy=retorna vr booleano
    })
    it('should render the component of the first route that matches', () => {
        getCurrentPath.mockReturnValue('/about')
        const routes = [
            {
                path: '/',
                Component: () => <h1>Home</h1>
            },
            {
                path: '/about',
                Component: () => <h1>About</h1>
            }
        ]
        render(<Router routes={routes} />)
        expect(screen.getByText('About')).toBeTruthy() // toBeTruthy=retorna vr booleano
    })
    it('should navigate using links', async () => {
        getCurrentPath.mockReturnValueOnce('/')
        render(
            <Router>
              <Route
                path='/' Component={() => {
                  return (
                    <>
                      <h1>Home</h1>
                      <Link to='/about'>Go to About</Link>
                    </>
                  )
                }}
              />
              <Route path='/about' Component={() => <h1>About</h1>} />
            </Router>
          )
        // Click on the link
        const button = screen.getByText(/Go to About/)
        fireEvent.click(button)
        const aboutTitle =await (await screen.findByText('About'))
        //console.log(screen.debug())
        // Check that the new route is rendered
        expect(aboutTitle).toBeTruthy()
    })
})
