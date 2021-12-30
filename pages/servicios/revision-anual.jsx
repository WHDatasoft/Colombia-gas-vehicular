import MainFooter from '../../components/Footer/MainFooter'
import Head from '../../components/Head/Head'
import Banner from '../../components/Sections/Banner'
import Description from '../../components/Sections/Description'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Revisión Anual</title>
		</Head>
		<Banner imgPerson="" fondo="banner-fondo-claro.png" icon="servicio4.svg" text="Revisions Anual">
			<img className="person" src="/img/banner/person-3.png" alt="" loading="eager" />
			<div className="text-wrapper">
				<p className="texto-1">Siempre con cuidado, prevenga cualquier daño mayor con la revisión anual de su vehículo</p>
				<h2 className="texto-2">COLOLOMBIAGAS VEHICULAR  TE OFRECE EL MEJOR SERVICIO PARA TU REVISIÓN ANUAL</h2>
				<h1 className="texto-3">$75.000</h1>
			</div>
		</Banner>

		<Description
			title="Revisión Anual"
			textList={[
				"Se hacen pruebas de hermeticidad, escapes y funcionamiento, para garantizar el cumplimiento de las condiciones técnicas y de seguridad exigidas."
			]}
		>
		</Description>

		<div className="law">
			<a href="/download/ley0957-2012.pdf" download>CONSULTAR LEY 0957 del 2012</a>
		</div>

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
				color: var(--blue);
				font-size: 1.5em;
				font-weight: 00;
			}

			.texto-2 {
				margin: 2rem 0;
				font-weight: 600;
				color: var(--light-green);
				font-size: 1.5em;
			}

			.texto-3 {
				font-weight: 600;
				font-size: 3em;
				color: var(--blue);
			}

			a {
				display: block;
				margin-bottom: 2rem;
				padding: .5rem 2rem;
				border-radius: 1rem;
				color: var(--blue);
				font-weight: 600;
				background-color: white;
				text-align: center;
			}

			.law {
				display: grid;
				justify-items: center;
			}

			.person {
				margin-top: 2rem;
				height: 11rem;
				align-self: flex-end;
			}

			@media screen and (max-width: 1500px) {

				.text-wrapper {
					font-size: 0.9rem;
				}

			}

			@media screen and (max-width: 1300px) {

				.text-wrapper {
					font-size: 0.8rem;
				}

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

			@media screen and (max-width: 500px) {

				.text-wrapper {
					font-size: 0.6rem;
				}

			}

			@media screen and (max-width: 440px) {

				.text-wrapper {
					font-size: 0.5rem;
				}

			}

			@media screen and (max-width: 350px) {

				.text-wrapper {
					font-size: 0.4rem;
				}

			}

		
		`}</style>
	</MainLayout>
}

export default Index