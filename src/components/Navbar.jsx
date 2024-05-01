
import { Link } from 'react-router-dom'
import './Navbar.css'

export function Navbar() {
	return (
		<nav className='navbar-top'>
			<ul>
				<li>
					<Link to='/'>
						Home
					</Link>
				</li>
				<li>
					<Link to="/about">
						About
					</Link>
				</li>
				<li>
					<Link to="/contact">
						Contact (goes to 404)
					</Link>
				</li>
			</ul>
		</nav>
	)
}
