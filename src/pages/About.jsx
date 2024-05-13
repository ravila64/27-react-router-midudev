import { navigate } from "../components/Link" 
export default function AboutPage(){
    return(
      <>
        <h1>About</h1>
        <div>
          <img src="https://media.licdn.com/dms/image/D4E03AQFbpgbYNeP4ig/profile-displayphoto-shrink_200_200/0/1684341532395?e=1721260800&v=beta&t=IdOzLUOiZlHuULFFqGpXFY9ShWjTJrhlKjX-dnAg7ug" alt="raa" />
          <p>Estoy creando un clone de react router </p>
        </div>
        {/* <a href='/'>Ir al Home</a> */}
        <button onClick={()=>navigate('/')}>Ir al Home</button>
      </>
    )
  }