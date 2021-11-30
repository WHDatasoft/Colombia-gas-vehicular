import Slider from "../Slider/Slider"
import ArticleBussines from "./ArticleBussines"

const contentSlider = [
	<ArticleBussines
		img="envia.jpg"
		bussinesName="Envía"
		characterList={[
			'Sector: Carga liviana y paqueteo',
			'Cantidad: 400 Chevrolet N300',
		]}
	/>,
	<ArticleBussines
		img="servientrega.jpg"
		bussinesName="Servientrega Sector"
		characterList={[
			'Carga liviana y paqueteo',
			'Cantidad: 100 Fiat Ducato',
			'(Dedicados), 15 RAM 1.000'
		]}
	/>,
	<ArticleBussines
		img="ramo.jpg"
		bussinesName="Productos Ramo"
		characterList={[
			'Sector: Distribución de',
			'Alimentos en paquete',
			'Cantidad: 50 Nissan NP300 y 70 Changan'
		]}
	/>,
	<ArticleBussines
		img="472.jpg"
		bussinesName="4-72"
		characterList={[
			'Sector: Carga liviana y paqueteo',
			'Cantidad: 42 RAM 700'
		]}
	/>,
	<ArticleBussines
		img="ultima.jpg"
		bussinesName="Silec"
		characterList={[
			'Sector: Telecomunicaciones',
			'Cantidad: 130 Nissan',
			'NP300'
		]}
	/>,
	<ArticleBussines
		img="envia.jpg"
		bussinesName="Envía"
		characterList={[
			'Sector: Carga liviana y paqueteo',
			'Cantidad: 400 Chevrolet N300',
		]}
	/>,
	<ArticleBussines
		img="servientrega.jpg"
		bussinesName="Servientrega Sector"
		characterList={[
			'Carga liviana y paqueteo',
			'Cantidad: 100 Fiat Ducato',
			'(Dedicados), 15 RAM 1.000'
		]}
	/>,
	<ArticleBussines
		img="ramo.jpg"
		bussinesName="Productos Ramo"
		characterList={[
			'Sector: Distribución de',
			'Alimentos en paquete',
			'Cantidad: 50 Nissan NP300 y 70 Changan'
		]}
	/>,
	<ArticleBussines
		img="472.jpg"
		bussinesName="4-72"
		characterList={[
			'Sector: Carga liviana y paqueteo',
			'Cantidad: 42 RAM 700'
		]}
	/>,
	<ArticleBussines
		img="ultima.jpg"
		bussinesName="Silec"
		characterList={[
			'Sector: Telecomunicaciones',
			'Cantidad: 130 Nissan',
			'NP300'
		]}
	/>,
	<ArticleBussines
		img="envia.jpg"
		bussinesName="Envía"
		characterList={[
			'Sector: Carga liviana y paqueteo',
			'Cantidad: 400 Chevrolet N300',
		]}
	/>,
	<ArticleBussines
		img="servientrega.jpg"
		bussinesName="Servientrega Sector"
		characterList={[
			'Carga liviana y paqueteo',
			'Cantidad: 100 Fiat Ducato',
			'(Dedicados), 15 RAM 1.000'
		]}
	/>,
	<ArticleBussines
		img="ramo.jpg"
		bussinesName="Productos Ramo"
		characterList={[
			'Sector: Distribución de',
			'Alimentos en paquete',
			'Cantidad: 50 Nissan NP300 y 70 Changan'
		]}
	/>,
	<ArticleBussines
		img="472.jpg"
		bussinesName="4-72"
		characterList={[
			'Sector: Carga liviana y paqueteo',
			'Cantidad: 42 RAM 700'
		]}
	/>,
	<ArticleBussines
		img="ultima.jpg"
		bussinesName="Silec"
		characterList={[
			'Sector: Telecomunicaciones',
			'Cantidad: 130 Nissan',
			'NP300'
		]}
	/>,
	<ArticleBussines
		img="envia.jpg"
		bussinesName="Envía"
		characterList={[
			'Sector: Carga liviana y paqueteo',
			'Cantidad: 400 Chevrolet N300',
		]}
	/>,
	<ArticleBussines
		img="servientrega.jpg"
		bussinesName="Servientrega Sector"
		characterList={[
			'Carga liviana y paqueteo',
			'Cantidad: 100 Fiat Ducato',
			'(Dedicados), 15 RAM 1.000'
		]}
	/>,
	<ArticleBussines
		img="ramo.jpg"
		bussinesName="Productos Ramo"
		characterList={[
			'Sector: Distribución de',
			'Alimentos en paquete',
			'Cantidad: 50 Nissan NP300 y 70 Changan'
		]}
	/>,
	<ArticleBussines
		img="472.jpg"
		bussinesName="4-72"
		characterList={[
			'Sector: Carga liviana y paqueteo',
			'Cantidad: 42 RAM 700'
		]}
	/>,
	<ArticleBussines
		img="ultima.jpg"
		bussinesName="Silec"
		characterList={[
			'Sector: Telecomunicaciones',
			'Cantidad: 130 Nissan',
			'NP300'
		]}
	/>,

]


const SuccessStories = () => {


	return <section>

		<h1>CASOS DE ÉXITO</h1>

		<Slider contentSlider={contentSlider} id="empresas" />


		<style jsx>{`

			section {
				position: relative;
			}

			h1 {
				background-color: var(--blue);
				color: white;
				text-align: center;
				padding: 2rem .5rem;
				font-size: 2rem;
				margin-bottom: 2rem;
				font-weight: 600;
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