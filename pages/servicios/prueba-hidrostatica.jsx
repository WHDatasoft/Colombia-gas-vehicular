import Head from '../../components/Head/Head'
import Banner from '../../components/Sections/Banner'
import Description from '../../components/Sections/Description'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>
		<Banner imgPerson="person-2.png" fondo="banner-fondo-oscuro.png" icon="servicio2.svg" text="Prueba Hodristática">
			<p className="texto-1">
				<span>COLOMBIAGAS VEHICULAR TE HACE</span>
				<br />
				<span>LA PRUEBA HIDROSTÁTICA</span>
			</p>
			<h2 className="texto-3">
				<span className="number">$ 250.000</span>
			</h2>
			<h1 className="texto-2">¡Pide tu cita ahora!</h1>
		</Banner>

		<br /><br />

		<Description
			title="Prueba Hidrostática"
			text="La aplicación de una presión a un equipo o línea de tuberías fuera de operación, con el fin de verificar la hermeticidad de los accesorios bridados y la soldadura, utilizando como elemento principal el agua o en su defecto un fluido no corrosivo."

		/>

		<style jsx>{`

			:global(:root) {
				--size: 1
			}

			.texto-1, .texto-2, .texto-3 {
				text-align: center;
			}
		
			.texto-1 {
				color: white;
				font-weight: 600;
				font-size: calc(1.5rem * var(--size));
			}

			.texto-2 {
				font-weight: 600;
				font-size: calc(1.5rem * var(--size));
				color: var(--light-green);
			}

			.texto-3 {
				margin: 2rem 0;
				font-weight: 600;
				color: white;
			}

			.number {
				font-size: calc(2.5rem * var(--size));
			}

			@media screen and (max-width: 625px) {

				:global(:root) {
					--size: 0.7
				}

				.texto-3 {
					margin: 1rem 0;
				}

			}
		
		`}</style>

	</MainLayout>
}

export default Index