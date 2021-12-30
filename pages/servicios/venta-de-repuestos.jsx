import Row from '../../components/Decorations/Row'
import MainFooter from '../../components/Footer/MainFooter'
import Head from '../../components/Head/Head'
import ArticleBussines from '../../components/Sections/ArticleBussines'
import Banner from '../../components/Sections/Banner'
import Description from '../../components/Sections/Description'
import GnvComponent from '../../components/Sections/GnvComponent'
import Slider from '../../components/Slider/Slider'
import TitleRight from '../../components/title/TitleRight'
import MainLayout from "../../layout/MainLayout"

const Index = () => {

	const contentSlider = [
		<ArticleBussines
			type
			img="computadora.jpg"
			bussinesName="Computadora a gas 4 cilindros"

		/>,
		<ArticleBussines
			type
			img="capuchon-pico-de-carga-1.jpg"
			bussinesName="Válvula de cilindro"

		/>,
		<ArticleBussines
			type
			img="regulador.jpg"
			bussinesName="Regulador de 3ra generación"

		/>,
		<ArticleBussines
			type
			img="emulador-inyextores-4-cilindros.jpg"
			bussinesName="Emulador inyectores 4 cilindros"

		/>,
		<ArticleBussines
			type
			img="riel-de-inyectores.jpg"
			bussinesName="Riel de inyectores 4 cilindros."

		/>,
		<ArticleBussines
			type
			img="tubería.jpg"
			bussinesName="Tubería"

		/>,
		<ArticleBussines
			type
			img="manometro.jpg"
			bussinesName="Manómetro"

		/>,
		<ArticleBussines
			type
			img="llave.jpg"
			bussinesName="Llave conmutadora"

		/>,
		<ArticleBussines
			type
			img="sensor-y-emulador-de-nivel-de-asolina.jpg"
			bussinesName="Llave conmutadora de 3RA generación"

		/>,
		<ArticleBussines
			type
			img="filtro-de-gas.jpg"
			bussinesName="Filtro de gas"

		/>,

		<ArticleBussines
			type
			img="cableado.jpg"
			bussinesName="Cableado eléctrico 5ta generación"

		/>,
		<ArticleBussines
			type
			img="hace-parte-del-kit.jpg"
			bussinesName="Cableado eléctrico de llave conmutadora"

		/>,
	]
	return <MainLayout>
		<Head>
			<title>Venta De Repuestos</title>
		</Head>
		<Banner imgPerson="" fondo="banner-fondo-claro.png" icon="servicio5.svg" text="Venta de repuestos">
			<img className="person" src="/img/banner/person-5.png" alt="" loading="eager" />
			<div className="text-wrapper">
				<p className="texto-1">Productos que cumplen los requerimientos de la resolusión 0957 del 2012 del Ministerio de comercio, industria y turismo, avalados y certificados por Icontec</p>
				<h2 className="texto-2">PRECIOS ACCESIBLES A TU BOLSILLO</h2>
			</div>
		</Banner>

		<Description
			title="Repuestos"
			textList={[
				'Colombiagas Vehicular cuenta con los repuestos para asegurar el correcto funcionamiento de su vehiculo a gas natural vehicular.',
				'Resolución 0957 del 2012 del Ministro de Comercia, industria y turismo. “Reglamento técnico aplicable a talleres, equipos y procesos de conversión a Gas Natural comprimido para su vehicular'
			]}
		>
		</Description>

		<div className="law">
			<a href="/download/ley0957-2012.pdf" download>CONSULTAR LEY 0957 del 2012</a>
		</div>

		<Row />

		<h1>Lista de Repuestos</h1>
		<Slider contentSlider={contentSlider} />
		<br /><br />

		<TitleRight
			title="Componentes Gas Natural Vehicular"
		/>

		<GnvComponent />


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
				font-weight: 400;
				font-size: 1.2em;
			}

			.texto-2 {
				margin: 1.5rem 0;
				font-weight: 600;
				color: var(--light-green);
				font-size: 1.4em;
			}

			h1 {
				position: relative;
				text-align: center;
				background-color: var(--blue);
				color: white;
				margin-top: 3rem;
				padding: 1rem;
				font-size: 1.5rem;
			}

			.description {
				text-align: justify;
			}

			.law {
				display: grid;
				justify-items: center;
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