import { Link, NavLink } from 'react-router-dom'
import './navigation.css'



export default function Navigation(props) {

    

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" >Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">A propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}