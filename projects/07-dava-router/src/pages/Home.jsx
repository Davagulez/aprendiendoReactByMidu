import {Link} from '../Link.jsx'
export default function HomePage() {
    return (
      <>
        <h1>Home</h1>        
        <p>esta es una pagina de ejemplo para crear un React Router desde cero</p>
        <Link to='/about'>ir a Sobre Nosotros</Link>
      </>
    )
}