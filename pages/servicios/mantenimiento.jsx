import MainFooter from '../../components/Footer/MainFooter'
import Head from '../../components/Head/Head'
import Banner from '../../components/Sections/Banner'
import Description from '../../components/Sections/Description'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>

		<Banner imgPerson="person-4.png" fondo="banner-fondo-oscuro.png" icon="servicio3.svg" text="mantenimiento" personSize={1.2}>
			<br />
			<p className="texto-1">
				Colombiagas vehicular te ofrece respaldo y los equipos especializados para realizar el mantenimiento de su vehículo
			</p>
			<h2 className="texto-3">
				<span className="number">$ 50.000</span>
			</h2>
			<h1 className="texto-2">¡Pide tu cita ahora!</h1>
			<br />
		</Banner>

		<Description
			title="Mantenimiento"
			textList={[
				"El mantenimiento se basa en registros a ejecutarse a los 1,500 Km y en adelante periódicamente cada 20,000 kms. Eso para garantizar siempre un correcto funcionamiento de su vehículo y del equipo de Gas- GNV. Los talleres autorizados como Colombiagas vehicular ejercen el mantenimiento preventivo del sistema GNV."
			]}
		/>


		<MainFooter />

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

			@media screen and (max-width: 380px) {

				:global(:root) {
					--size: 0.6
				}

			}

			@media screen and (max-width: 330px) {

				:global(:root) {
					--size: 0.5
				}

			}
					
		`}</style>

	</MainLayout>
}

export default Index