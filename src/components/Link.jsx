import { EVENTS } from "../constants.js"

export function navigate(href) {
    window.history.pushState({}, '', href)
    // crear un evento personlizado para que elñ navegador nos avise el cmabio de la ruta
    const navigateEvent = new Event(EVENTS.PUSHSTATE)
    // enviar evento
    window.dispatchEvent(navigateEvent)
    // despachar el evento
}

export function Link({targte, to, ...props }){
    const handleClick = (event) =>{
        event.preventDefault()
        navigate(to)
     }

    return <a onClick={handleClick} href={to} target={target}/>
}