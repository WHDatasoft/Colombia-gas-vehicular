import MainFooter from '../../components/Footer/MainFooter'
import Head from '../../components/Head/Head'
import Banner from '../../components/Sections/Banner'
import Description from '../../components/Sections/Description'
import GnvInfo from '../../components/Sections/GnvInfo'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Instalación GNV</title>
		</Head>
		<Banner imgPerson="person-1.png" fondo="banner-fondo-claro.png" icon="servicio1.svg" text="Instalación de GNV">
			<div className="text-wrapper">
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
			</div>
		</Banner>

		<Description
			title="Tercera Generación"
			textList={[
				"Lazo abierto: Se aplica para vehículos con motores alimentados por carburador.",
				"Usada en motores alimentados por carburador o con control electrónico de combustible sin sensor de oxígeno. La dosificación del gas se realiza a través de una válvula de potencia que es graduada por parte del técnico que realiza la instalación."
			]}
			icon="car-blue.svg"
			right
		/>

		<Description
			title="Quinta Generación"
			textList={[
				"Sistema de Inyección GNV: Se aplica para vehículos con motores alimentados por inyección electrónica, donde se instala un equipo que entrega el combustible en cada cilindro por un inyector independiente, simulando la operación que se hace al utilizar gasolina."
			]}
			icon="car-orange.svg"
			left
		/>

		<img src="/icon/row.svg" alt="icono que indica que el usuario debe bajar" className="row" />

		<GnvInfo />

		<MainFooter />

		<style jsx>{`

			.text-wrapper {
				font-size: 1rem;
			}

			.texto-1, .texto-2, .texto-3 {
				text-align: center;
			}
		
			.texto-1 {
				color: var(--blue);
				font-size: 1em;
				font-weight: 600;
			}

			.texto-2 {
				font-weight: 600;
				font-size: 1.2em;
				color: var(--dark-green);
				margin: 2rem 0;
			}

			.texto-3 {
				font-weight: 600;
				color: var(--blue);
				font-size: 1em;
			}

			.number {
				font-size: 2.5em;
			}

			.row {
				display: block;
				height: 2rem;
				margin: 2rem auto;
				animation: move 1s infinite alternate-reverse;
			}
			
			@keyframes move {
				from {
					transform: translateY(-.3rem)
				}

				to {
					transform: translateY(.3rem)
				}
			}

			@media screen and (max-width: 625px) {

				.text-wrapper {
					font-size: .7rem;
				}

				.texto-2 {
					margin: 1rem 0;
				}

			}

			@media screen and (max-width: 440px) {

				.text-wrapper {
					font-size: .6rem;
				}

				.texto-2 {
					margin: 1rem 0;
				}

			}

			@media screen and (max-width: 330px) {

				.text-wrapper {
					font-size: .55rem;
				}

				.texto-2 {
					margin: 1rem 0;
				}

			}

		`}</style>
	</MainLayout>
}

export default Index