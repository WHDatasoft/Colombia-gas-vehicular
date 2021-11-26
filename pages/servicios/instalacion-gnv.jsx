import Head from '../../components/Head/Head'
import Banner from '../../components/Sections/Banner'
import Description from '../../components/Sections/Description'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>
		<Banner imgPerson="person-1.png" fondo="banner-fondo-claro.png" icon="servicio1.svg" text="Instalación de GNV">
			<p className="texto-1">
				<span>Ya son más de 600.000 vehículos y más de 700 buses de</span>
				<br />
				<span> Transmilenio que se pasaron a Gas Natural</span>
			</p>
			<h1 className="texto-2">PÁSATE A GAS NATURAL VEHICULAR</h1>
			<h2 className="texto-3">
				<span>CONVERSIONES DESDE</span>
				<br />
				<span className="number">$ 500.000</span>
			</h2>
		</Banner>

		<Description
			title="Tercera Generación"
			text="Esta tecnología se aplica para vehículos con motores alimentados por carburador o con control electrónico de combustible sin sensor de Oxigeno. La dosificación del gas se realiza a través de una válvula de potencia que es graduada por el técnico que realiza la instalación para que el paso del gas sea el necesario."
			icon="car-blue.svg"
			right
		/>

		<Description
			title="Quinta Generación"
			text="Esta tecnología se aplica para vehículos con motores alimentados por carburador o con control electrónico de combustible sin sensor de Oxigeno. La dosificación del gas se realiza a través de una válvula de potencia que es graduada por el técnico que realiza la instalación para que el paso del gas sea el necesario."
			icon="car-orange.svg"
			left
		/>

		<br /><br /><br />

		<style jsx>{`

			:global(:root) {
				--size: 1
			}

			.texto-1, .texto-2, .texto-3 {
				text-align: center;
			}
		
			.texto-1 {
				color: var(--blue);
				font-size: calc(1rem * var(--size));
				font-weight: 600;
			}

			.texto-2 {
				font-weight: 600;
				font-size: calc(1.2rem * var(--size));
				color: var(--dark-green);
				margin: 2rem 0;
			}

			.texto-3 {
				font-weight: 600;
				color: var(--blue);
				font-size: calc(1rem * var(--size));
			}

			.number {
				font-size: calc(2.5rem * var(--size));
			}

			@media screen and (max-width: 625px) {

				:global(:root) {
					--size: 0.7
				}

				.texto-2 {
					margin: 1rem 0;
				}

			}

		`}</style>
	</MainLayout>
}

export default Index