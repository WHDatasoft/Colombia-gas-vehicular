import Slider from "../Slider/Slider"
import ArticleBussines from "./ArticleBussines"

const contentSlider = [
	<ArticleBussines
		img="envia.png"
		bussinesName="Envía"
		characterList={[
			'Sector: Carga liviana y paqueteo',
			'Cantidad: 400 Chevrolet N300',
		]}
	/>,
	<ArticleBussines
		img="servientrega.png"
		bussinesName="Servientrega Sector"
		characterList={[
			'Carga liviana y paqueteo',
			'Cantidad: 100 Fiat Ducato',
			'(Dedicados), 15 RAM 1.000'
		]}
	/>,
	<ArticleBussines
		img="ramo.png"
		bussinesName="Productos Ramo"
		characterList={[
			'Sector: Distribución de',
			'Alimentos en paquete',
			'Cantidad: 50 Nissan NP300 y 70 Changan'
		]}
	/>,
	<ArticleBussines
		img="472.png"
		bussinesName="4-72"
		characterList={[
			'Sector: Carga liviana y paqueteo',
			'Cantidad: 42 RAM 700'
		]}
	/>,
	<ArticleBussines
		img="ultima.png"
		bussinesName="Silec"
		characterList={[
			'Sector: Telecomunicaciones',
			'Cantidad: 130 Nissan',
			'NP300'
		]}
	/>,
]

const contentSlider2 = [
	<img className="aliado" src="/img/aliados/chevrolet.png" alt="" />,
	<img className="aliado" src="/img/aliados/citroel.png" alt="" />,
	<img className="aliado" src="/img/aliados/dfsk.png" alt="" />,
	<img className="aliado" src="/img/aliados/dongfeng.png" alt="" />,
	<img className="aliado" src="/img/aliados/faw.png" alt="" />,
	<img className="aliado" src="/img/aliados/fiat.png" alt="" />,
	<img className="aliado" src="/img/aliados/foton.png" alt="" />,
	<img className="aliado" src="/img/aliados/hyundai.png" alt="" />,
	<img className="aliado" src="/img/aliados/kia.png" alt="" />,
	<img className="aliado" src="/img/aliados/nissan .png" alt="" />,
	<img className="aliado" src="/img/aliados/ram.png" alt="" />,
	<img className="aliado" src="/img/aliados/recurso.png" alt="" />,
	<img className="aliado" src="/img/aliados/renault.png" alt="" />,
	<img className="aliado" src="/img/aliados/toyota.png" alt="" />,
]

const SuccessStories = () => {
	return <section>

		<h1>CASOS DE ÉXITO</h1>

		{<Slider contentSlider={contentSlider} id="empresas" />}

		<h2>MARCAS DISPONIBLES CON GARANTÍA DE FÁBRICA Y DEDICADOS 1,5 A 3,5 TONELADAS</h2>

		<Slider contentSlider={contentSlider2} id="alianzas" />

		<br /><br /><br />


		<style jsx>{`

			section {
				position: relative;
			}

			h1 {
				background-color: var(--blue);
				color: white;
				text-align: center;
				padding: .5rem;
				font-size: 1.5rem;
				margin-bottom: 2rem;
			}

			h2 {
				background-color: var(--orange);
				font-size: 1.2rem;
				padding: .5rem;
				text-align: center;
				color: white;
				margin-top: 10rem;
				margin-bottom: 2rem;
			}

		`}</style>
	</section>
}

export default SuccessStories