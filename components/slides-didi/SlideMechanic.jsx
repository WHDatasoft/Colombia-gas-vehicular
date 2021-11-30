import ServiceLink from "../link/ServiceLink"
import ClientMain from "../Sections/ClientMain"

const SlideMechanic = () => {
	return <>

		<ClientMain
			urlImg="mecanic"
			backgroundColor="#EF861CAA"
			rowGap="3"
		>
			<h3>Instalación de GNV</h3>
			<h2>10% DE DESCUENTO</h2>
			<ServiceLink
				url="/servicios/instalacion-gnv"
			/>
			<img src="/logo/logo-blanco.png" alt="" className="final" />


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

export default SlideMechanic