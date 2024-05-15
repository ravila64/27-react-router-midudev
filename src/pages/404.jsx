import { Link } from "../components/Link.jsx"

export default function Page404() {
    return (
        <>
            <div>
                <h1>This is not Fine</h1>
                {/* <img src='https://midu.dev/images/this-is-fine-404.gif' alt='git del perro quemandose vivo' />
                <img src='https://i.gifer.com/1fqC.gif' alt="propiedad de i.gifer"/> */}
                <img src='https://i.gifer.com/7fot.gif' alt="propiedad de gifer.com" width={250}/>
                <br/>
                <Link to='/'>Go to Home</Link>
            </div>
        </>
    )
}