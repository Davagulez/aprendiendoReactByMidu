import {Link} from '../Link.jsx'

const i18n = {
    es: {
        title: 'Sobre nosotros',
        button: 'Ir al inicio',
        description: 'Hola! Me llamo David y estoy creando un clon de React Router'
    },
    en: {
        title:'About us',
        button: 'Go to home',
        description: 'Hi! Mi name is David and i am creating a clone of React Router'
    }
}

const useI18n = (lang) => {
    return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
    const i18n = useI18n(routeParams.lang ?? 'es')
    return (
        <>
        <h1>{i18n.title}</h1>
        <p>{i18n.description}</p>
        <Link to='/'>{i18n.button}</Link>
        </>
    )
}