import Row from '../../components/Decorations/Row'
import MainFooter from '../../components/Footer/MainFooter'
import Head from '../../components/Head/Head'
import ArticleBussines from '../../components/Sections/ArticleBussines'
import Banner from '../../components/Sections/Banner'
import Description from '../../components/Sections/Description'
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
		<Banner imgPerson="person-5.png" fondo="banner-fondo-claro.png" icon="servicio5.svg" text="Venta de repuestos">
			<p className="texto-1">
				<span>Productos que cumplen los requerimientos de la resolusión</span>
				<br />
				<span>0957 del 2012 del Ministerio de comercio, industria y</span>
				<br />
				<span>turismo,  avalados y certificados por Icontec</span>
			</p>
			<h2 className="texto-3">
				<span>PRECIOS ACCESIBLES A TU BOLSILLO </span>
			</h2>
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

		<img src="/img/servicios/componentes.png" alt="" />

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
				font-weight: 400;
				font-size: calc(1rem * var(--size));
			}

			.texto-3 {
				margin: 1.5rem 0;
				font-weight: 600;
				color: var(--light-green);
				font-size: calc(1.2rem * var(--size));
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

			img {
				display: block;
				width: 100%;
				max-width: 1200px;
				margin: auto;
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