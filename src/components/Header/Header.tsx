import './Header.css'
import Link from "next/link"

const Header = () => {
  return (
    <header >
        <nav>
          <ul className="nav-list">
            <li><Link href='/'>Tareas</Link></li>
            <li><Link href='/'>Agregar tarea</Link></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header