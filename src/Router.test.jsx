import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Router } from './components/Router'

describe('Router',()=>{
    // it('should work',()=>{
    //     expect(1).toBe(1)
    // })
    it('should render without problems',()=>{
        render ( <Router routes={[]} />)
        expect(true).toBeTruthy()
    })
    it('should render 404 no routes match',()=>{
        render ( <Router routes={[]} defaultComponent={()=><h1>404</h1>}/>)
        screen.debug()
    })

})

