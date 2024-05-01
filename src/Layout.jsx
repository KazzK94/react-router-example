
import './Layout.css'

import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'

export default function Layout({ children }) {
	return (
		<main className='main-container'>
			<Navbar />
			<Outlet />
			{children}
		</main>
	)
}