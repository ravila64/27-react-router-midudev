import { EVENTS } from "../constants.js"

// eslint-disable-next-line react-refresh/only-export-components
export function navigate(href) {
    window.history.pushState({}, '', href)
    // crear un evento personlizado para que elñ navegador nos avise el cmabio de la ruta
    const navigateEvent = new Event(EVENTS.PUSHSTATE)
    // enviar evento
    window.dispatchEvent(navigateEvent)
    // despachar el evento
}

// eslint-disable-next-line react/prop-types
export function Link({target, to, ...props }){
    const handleClick = (event) =>{
        // preventDefault se dejo dentro de la pregunta
        const isMainEvent=event.button === 0 // left click
        const isModifiedEvent = event.metaKey || event.altkey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'
        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault()
            navigate(to) // navegacion con SPA
            window.scrollTo(0,0)
        }
     }
     //console.log(props.children);
    return <a onClick={handleClick} href={to} target={target} {...props}/>
    // return <a onClick={handleClick} href={to} target={target} children={props.children}/>
}
