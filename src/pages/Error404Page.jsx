import Layout from '../Layout'

// we treat Error 404 as a page
export default function Error404Page() {
	return (
		<Layout>
			<h1 style={{ color: '#f22' }}>Error 404</h1>
			<p style={{ color: '#f22' }}>Page not found.</p>
		</Layout>
	)
}

// * He puesto los estilos en línea porque patata, para ir rápido, pero lo ideal sería usar clases
