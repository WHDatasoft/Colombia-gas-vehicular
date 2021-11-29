import Head from '../../components/Head/Head'
import Banner from '../../components/Sections/Banner'
import Description from '../../components/Sections/Description'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>
		<Banner imgPerson="person-4.png" fondo="banner-fondo-oscuro.png" icon="servicio4.svg" text="Revisión anual" personSize={1.2}>
			<br />
			<p className="texto-1">
				<span>Colombiagas vehicular te ofrece respaldo y los equipos</span>
				<br />
				<span>pecializados para realizar el mantenimiento de su</span>
				<br />
				<span>vehículo</span>
			</p>
			<h2 className="texto-3">
				<span className="number">$ 50.000</span>
			</h2>
			<h1 className="texto-2">¡Pide tu cita ahora!</h1>
			<br />
		</Banner>

		<Description
			title="Revisión Anual"
			text="Se hacen pruebas de hermeticidad, escapes y funcionamiento, para garantizar el cumplimiento de las condiciones técnicas y de seguridad exigidas."
		/>
		<style jsx>{`

			:global(:root) {
				--size: 1;
			}

			.texto-1, .texto-2, .texto-3 {
				text-align: center;
			}
		
			.texto-1 {
				color: white;
				font-weight: 600;
				font-size: calc(1rem * var(--size));
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