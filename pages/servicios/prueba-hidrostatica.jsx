import MainFooter from '../../components/Footer/MainFooter'
import Head from '../../components/Head/Head'
import Banner from '../../components/Sections/Banner'
import Description from '../../components/Sections/Description'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Prueba Hidrostática</title>
		</Head>
		<Banner imgPerson="" fondo="banner-fondo-oscuro.png" icon="servicio2.svg" text="Prueba Hodristática">
			<img className="person" src="/img/banner/person-2.png" alt="" loading="eager" />
			<div className="text-wrapper">
				<p className="texto-1">COLOMBIAGAS VEHICULAR TE HACE LA PRUEBA HIDROSTÁTICA</p>
				<h2 className="texto-2">$ 250.000</h2>
				<h1 className="texto-3">¡Pide tu cita ahora!</h1>
			</div>
		</Banner>

		<br /><br />

		<Description
			title="Prueba Hidrostática"
			textList={[
				'La Prueba Hidrostática es el procedimiento a través del cual podemos determinar si el cilindro posee fugas, defectos o si está en perfectas condiciones para ser recargado. Durante una prueba hidrostática, se examina el cilindro para garantizar que puede contener de forma segura la presión para la que está aprobado.'
			]}

		/>

		<MainFooter />

		<style jsx>{`

			.text-wrapper {
				font-size: 1rem;
				box-sizing: border-box;
				width: 100%;
				align-self: center;
				padding: 1em;
			}

			.texto-1, .texto-2, .texto-3 {
				text-align: center;
			}
		
			.texto-1 {
				color: white;
				font-weight: 600;
				font-size: 1.5em;
			}

			.texto-2 {
				margin: 2rem 0;
				font-weight: 600;
				color: white;
				font-size: 2.5em;
			}

			.texto-3 {
				font-weight: 600;
				font-size: 1.5em;
				color: var(--light-green);
			}

			.person {
				margin-top: 2rem;
				height: 11rem;
				align-self: flex-end;
			}

			@media screen and (max-width: 625px) {

				.text-wrapper {
					font-size: 0.7rem;
				}

				.texto-2 {
					margin: 1rem 0;
				}

				.person {
					height: 8em;
				}

			}

			@media screen and (max-width: 360px) {

				.text-wrapper {
					font-size: 0.5rem;
				}

			}
			
		
		`}</style>

	</MainLayout>
}

export default Index