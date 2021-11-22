import Head from 'next/head'
import ArticleBussines from '../../components/Sections/ArticleBussines'
import Banner from '../../components/Sections/Banner'
import Description from '../../components/Sections/Description'
import Slider from '../../components/Slider/Slider'
import MainLayout from "../../layout/MainLayout"

const Index = () => {

	const contentSlider = [
		<ArticleBussines
			type
			img="filtro-de-gas.png"
			bussinesName="Filtro de gas"
			characterList={[
				'Precio: $80.000'
			]}
		/>,
		<ArticleBussines
			type
			img="computadora.png"
			bussinesName="Computadora a gas 4 cilindros"
			characterList={[
				'Precio: $800.000'
			]}
		/>,
		<ArticleBussines
			type
			img="manometro.png"
			bussinesName="Manometro"
			characterList={[
				'Precio: $150.000'
			]}
		/>,
		<ArticleBussines
			type
			img="capuchon-pico-de-carga-1.png"
			bussinesName="Capuchon pico de carga"
			characterList={[
				'Precio: $25.000'
			]}
		/>,
		<ArticleBussines
			type
			img="cableado.png"
			bussinesName="Cableado electrico 5ta generación"
			characterList={[
				'Precio: $300.000'
			]}
		/>,
		<ArticleBussines
			type
			img="emulador-inyextores-4-cilindros.png"
			bussinesName="Emulador inyectores 4 cilindros"
			characterList={[
				'Precio: $160.000'
			]}
		/>,
		<ArticleBussines
			type
			img="tubería.png"
			bussinesName="Tubería"
			characterList={[
				'Precio: $150.000'
			]}
		/>,
		<ArticleBussines
			type
			img="regulador.png"
			bussinesName="Regulador de 3ra generación"
			characterList={[
				'Precio: $60.000'
			]}
		/>,
		<ArticleBussines
			type
			img="riel-de-inyectores.png"
			bussinesName="Riel de inyectores 4 cilindros."
			characterList={[
				'Precio: $480.000'
			]}
		/>,
		<ArticleBussines
			type
			img="sensor-y-emulador-de-nivel-de-asolina.png"
			bussinesName="Sensor y emulador de gasolina"
			characterList={[
				'Precio: $180.000'
			]}
		/>,
		<ArticleBussines
			type
			img="llave.png"
			bussinesName="Llave conmutadora"
			characterList={[
				'Precio: $150.000'
			]}
		/>,
		<ArticleBussines
			type
			img="hace-parte-del-kit.png"
			bussinesName="Cableado electrico de llave conmutadora"
			characterList={[
				'Precio: $60.000'
			]}
		/>,
	]
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
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
			text="Resolución 0957 del 2012 del Ministro de Comercia, industria y turismo. “Reglamento técnico aplicable a talleres, equipos y procesos de conversión a Gas Natural comprimido para su vehicular"
		/>

		<img src="/icon/row.svg" alt="icono que indica que el usuario debe bajar" />

		<h1>Repuestos</h1>
		<Slider contentSlider={contentSlider} id="empresas" />
		<br /><br /><br /><br /><br /><br /><br /><br /><br />

		<style jsx>{`

			.texto-1, .texto-2, .texto-3 {
				text-align: center;
			}
		
			.texto-1 {
				color: var(--blue);
				font-weight: 400;
				font-size: 1rem;
			}

			.texto-3 {
				margin: 2rem 0;
				font-weight: 600;
				color: var(--light-green);
				font-size: 1.2rem;
			}

			img {
				display: block;
				height: 2rem;
				margin: 1rem auto;
				animation: move 1s infinite alternate-reverse;
			}

			h1 {
				position: relative;
				text-align: center;
				background-color: var(--blue);
				color: white;
				margin-top: 3rem;
				padding: 1rem;
			}

			@keyframes move {
				from {
					transform: translateY(-.3rem)
				}

				to {
					transform: translateY(.3rem)
				}
			}
		

		
		`}</style>
	</MainLayout>
}

export default Index