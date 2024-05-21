import { navigate } from "../components/Link" 
export default function HomePage(){
    return(
      <>
        <h1>Home Page</h1>
        <p>Este es un pagina para crear un react router desde cero </p>
        {/* <a href='/about'>Ir a cerca de</a> */}
        <button onClick={()=>navigate('/about')}>Ir a cerca de</button>
      </>
    )
  }