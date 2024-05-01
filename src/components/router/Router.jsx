import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Import pages
import HomePage from '../../pages/HomePage'
import AboutPage from '../../pages/AboutPage'
import Error404Page from '../../pages/Error404Page.jsx'
// Import Layout
import Layout from '../../Layout'

export function Router() {

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			errorElement: <Error404Page />,
			children: [
				{
					path: '/',
					element: <HomePage />
				},
				{
					path: '/about',
					element: <AboutPage />
				}
			]
		}
	])

	return (
		<RouterProvider router={router} />
	)
}