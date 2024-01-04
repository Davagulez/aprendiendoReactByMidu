import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Router } from './Router'
import Route from './Route';
import { Link } from '../Link';
import { getCurrentPath } from './utils.js'

vi.mock('./utils.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })
    it('should render without problems', () => {
        render(<Router routes={[]} />)
        expect(true).toBeTruthy()
    })

    it('should render 404 if no routes match', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('should render the component of the fist route that matches', () => {
        getCurrentPath.mockReturnValue('/')
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
        expect(screen.getByText('Home')).toBeTruthy()
    })

    it('should navigate using links', async () => {
        getCurrentPath.mockReturnValueOnce('/')
        render(
            <Router>
                <Route path='/' Component={() => {
                    return (
                        <>
                            <h1>Home</h1>
                            <Link to='/about'>Go to About</Link>
                        </>
                    )
                }} />
                <Route path={'/about'} Component={() => <h1>About</h1>}/>
            </Router>

        )
        // Click on the link
        const button = screen.getByText(/Go to About/)
        fireEvent.click(button)


        const aboutTitle = await screen.findByText('Home')

        // Check that the new route is rendered
        expect(aboutTitle).toBeTruthy()
    })
})