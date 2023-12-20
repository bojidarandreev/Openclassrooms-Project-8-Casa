import { Link } from 'react-router-dom'
import './navigation.css'



export default function Navigation() {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}