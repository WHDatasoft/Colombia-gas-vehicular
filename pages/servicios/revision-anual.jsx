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
		<Banner imgPerson="person-3.png" fondo="banner-fondo-claro.png" icon="servicio4.svg" text="Revisions Anual">

			<p className="texto-1">
				Siempre con cuidado, prevenga cualquier daño mayor con la <span>revisión anual</span> de su vehículo
			</p>

			<h2 className="texto-3">
				COLOLOMBIAGAS VEHICULAR  TE OFRECE EL MEJOR SERVICIO PARA TU REVISIÓN ANUAL
			</h2>
			<h1 className="texto-2">$75.000</h1>
		</Banner>

		<Description
			title="Revisión Anual"
			textList={[
				"Se hacen pruebas de hermeticidad, escapes y funcionamiento, para garantizar el cumplimiento de las condiciones técnicas y de seguridad exigidas."
			]}
		>

			<div className="law">
				<a href="/download/ley0957-2012.pdf" download>CONSULTAR LEY 0957 del 2012</a>
			</div>

		</Description>

		<MainFooter />

		<style jsx>{`

			:global(:root) {
				--size: 1
			}

			.texto-1, .texto-2, .texto-3 {
				text-align: center;
			}
		
			.texto-1 {
				color: var(--blue);
				font-size: calc(1.5rem * var(--size));
				font-weight: 00;
			}

			span {
				font-weight: 600;
			}

			.texto-2 {
				font-weight: 600;
				font-size: calc(3rem * var(--size));
				color: var(--blue);
			}

			.texto-3 {
				margin: 2rem 0;
				font-weight: 600;
				color: var(--light-green);
				font-size: calc(1.5rem * var(--size));
			}

			.law {
				display: grid;
				justify-items: center;
			}

			a {
				display: block;
				margin-top: 2rem;
				padding: .5rem 2rem;
				border-radius: 1rem;
				color: var(--blue);
				font-weight: 600;
				background-color: white;
				text-align: center;
			}

			@media screen and (max-width: 1500px) {

				:global(:root) {
					--size: 0.9
				}

			}

			@media screen and (max-width: 1300px) {

				:global(:root) {
					--size: 0.8
				}

			}

			@media screen and (max-width: 625px) {

				:global(:root) {
					--size: 0.7
				}

				.texto-3 {
					margin: 1rem 0;
				}

			}

			@media screen and (max-width: 500px) {

				:global(:root) {
					--size: 0.6
				}

			}

			@media screen and (max-width: 440px) {

				:global(:root) {
					--size: 0.5
				}

			}

			@media screen and (max-width: 350px) {

				:global(:root) {
					--size: 0.4;
				}

			}

		
		`}</style>
	</MainLayout>
}

export default Index