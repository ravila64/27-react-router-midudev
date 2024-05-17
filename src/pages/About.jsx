import { Link } from "../components/Link"

const i18n = {
  es: {
    title: 'Sobre nosotros',
    buttom: 'Ir a la home',
    description: 'Hola me llamo Rene, creando un clone de react router'
  },
  en: {
    title: 'About is',
    buttom: 'Go to home page',
    description: 'Hi!, my name is Rene, I am creating a clone of react router'
  }
}

const useI18n = (lang) =>{
  return i18n[lang] || i18n.en
}

// eslint-disable-next-line react/prop-types
export default function AboutPage({ routeParams }) {
  // eslint-disable-next-line react/prop-types
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src="https://media.licdn.com/dms/image/D4E03AQFbpgbYNeP4ig/profile-displayphoto-shrink_200_200/0/1684341532395?e=1721260800&v=beta&t=IdOzLUOiZlHuULFFqGpXFY9ShWjTJrhlKjX-dnAg7ug" alt="raa" />
        <p>{i18n.description}</p>
      </div>
      {/* <a href='/'>Ir al Home</a> */}
      <Link to='/'>{i18n.buttom}</Link>
      {/* <button onClick={() => navigate('/')}>Ir al Home</button> */}
    </>
  )
}