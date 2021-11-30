import ServiceLink from "../link/ServiceLink"
import ClientMain from "../Sections/ClientMain"

const SlideSalud = () => {
	return <>

		<ClientMain
			urlImg="person"
			backgroundColor="#1c580dAA"
			rowGap="3"
		>
			<h3>PROGRAMA DE SALUD</h3>
			<h2>GRATIS</h2>
			<img src="/logo/logo-blanco.png" alt="" className="final" />
			<ServiceLink
				url="/beneficios/programa-de-salud"
			/>


		</ClientMain>

		<style jsx>{`

			h2, h3 {
				text-align: center;
			}

			h3 {
				color: white;
				font-size: 5rem;
				font-weight: 600;
				max-width: 540px;
				letter-spacing: 0.2rem;
			}

			h2 {
				box-sizing: border-box;
				color: var(--light-green);
				background-color: white;
				padding: .5rem 1rem;
				font-size: 2rem;
				letter-spacing: 0.1rem;
				width: 80%;
			}

			img {
				height: 5rem;
			}

		`}</style>
	</>
}

export default SlideSalud