import { Link } from "../components/Link"
import { useEffect } from "react"

export default function SearchPage({ routeParams }) {
    //let routeParams = 'javascript'
    useEffect(() => {
        document.title = `Has buscado ${routeParams.query}`  // routeParams.query
        // se podria hacer esto
        //fetch(`https://api.pagina.com/search/${routeParams.query}`)
    }, [])

    return (
        <>
            <h3>Has buscado {routeParams.query}</h3>
            <Link to='/'>Ir al Home</Link>
            {/* <button onClick={() => navigate('/')}>Ir al Home</button> */}
        </>

    )
}
