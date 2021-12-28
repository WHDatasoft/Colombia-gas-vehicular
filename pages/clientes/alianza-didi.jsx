import MainLayout from "../../layout/MainLayout"
import Head from '../../components/Head/Head'
import SliderMain from "../../components/Slider/SliderMain"
import SlideDidi from "../../components/slides-didi/SlideDidi"
import Icons from "../../components/Sections/Icons"
import ClientMain from "../../components/Sections/ClientMain"

import FormDidi from "../../components/Forms/FormDidi"
import TitleDidi from "../../components/title/TitleDidi"
import MainServices from "../../components/Sections/MainServices"
import Row from "../../components/Decorations/Row"
import DidiAside from "../../components/slides-didi/DidiAside"
import DidiContent from "../../components/slides-didi/DidiContent"

const AlianzaDidi = () => {

	const slideServiteck = [

		<ClientMain
			backgroundImg="/img/clientes/phone.jpg"
			ContentAside={
				<SlideDidi
					color="#1c580dAA"
					rowGap="3"
					ContentAside={<DidiContent />}
				/>
			}
		>
		</ClientMain>,


		<ClientMain
			backgroundImg="/img/clientes/oil.jpg"
			ContentAside={
				<SlideDidi
					color="#1c580dAA"
					rowGap="3"
					ContentAside={
						<DidiAside
							mainTitle="Lubricantes y aditivos"
							secondTitle="15% DE DESCUENTO"
							img="/icon/servitek.svg"
						/>
					}
				/>

			}
		/>,
		<ClientMain
			backgroundImg="/img/clientes/disk.jpg"
			ContentAside={
				<SlideDidi
					color="#EF861CAA"
					rowGap="3"
					ContentAside={
						<DidiAside
							mainTitle="Mécanica general y frenos"
							secondTitle="12% DE DESCUENTO"
							img="/icon/servitek.svg"
						/>
					}
				/>
			}
		/>,
		<ClientMain
			backgroundImg="/img/clientes/car-aside.jpg"
			ContentAside={
				<SlideDidi
					color="#1c580dAA"
					rowGap="3"
					ContentAside={
						<DidiAside
							mainTitle="Compra del SOAT"
							secondTitle="5% DE DESCUENTO"
							img="/logo/logo-blanco.png"
						/>
					}
				/>
			}
		/>
	]

	const slideColombiagas = [

		<ClientMain
			backgroundImg="/img/clientes/mecanic.jpg"
			ContentAside={
				<SlideDidi
					color="#EF861CAA"
					rowGap="3"
					ContentAside={
						<DidiAside
							mainTitle="Instalación de GNV"
							secondTitle="10% DE DESCUENTO"
							img="/logo/logo-blanco.png"
							link="/servicios/instalacion-gnv"
						/>
					}
				/>
			}
		/>,
		<ClientMain
			backgroundImg="/img/clientes/person.jpg"
			ContentAside={
				<SlideDidi
					color="#1c580dAA"
					rowGap="3"
					ContentAside={
						<DidiAside
							mainTitle="PROGRAMA DE SALUD"
							secondTitle="GRATIS"
							img="/logo/logo-blanco.png"
							link="/beneficios/programa-de-salud"
						/>
					}
				/>
			}
		/>,
		<ClientMain
			backgroundImg="/img/clientes/car-panel.jpg"
			ContentAside={
				<SlideDidi
					color="#EF861CAA"
					rowGap="3"
					ContentAside={
						<DidiAside
							mainTitle="Prueba hidrostática"
							secondTitle="20% DE DESCUENTO"
							img="/logo/logo-blanco.png"
						/>
					}
				/>
			}
		/>,
		<ClientMain
			backgroundImg="/img/clientes/car-back.jpg"
			ContentAside={
				<SlideDidi
					color="#1c580dAA"
					rowGap="3"
					ContentAside={
						<DidiAside
							mainTitle="Análisis de gases"
							secondTitle="20% DE DESCUENTO"
							img="/logo/logo-blanco.png"
						/>
					}
				/>
			}
		/>,

	]

	return <MainLayout>
		<Head>
			<title>Aliza DIDI</title>
		</Head>


		<TitleDidi />

		<MainServices />
		<br />
		<Row />
		<br />

		<SliderMain
			slideList={slideServiteck}
			id="serviteck"
			top
		/>

		<br /><br /><br />

		<SliderMain
			slideList={slideColombiagas}
			id="colombiagas"
			top
		/>

		<br />
		<Row />
		<br />

		<div className="text">
			<p>
				Por estar registrado en DiDi Conductor podrás acceder a muy buenos beneficios los cuales podrás hacer efectivos en:
			</p>
			<p>
				La oficina privada DiDi Avenida Caracas #23-33 Sur (Servitek)
			</p>
		</div>

		<FormDidi />

		<br /><br /><br /><br />

		<Icons />

		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7954.147574776101!2d-74.1038668!3d4.5807723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd0ec797bfca78393!2sSERVITEK!5e0!3m2!1ses!2sco!4v1638223294712!5m2!1ses!2sco" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>

		<style jsx>{`
		
			iframe {
				border: none;
				position: relative;
				z-index: 1;
			}

			.text {
				font-size: 1rem;
				margin-bottom: 4rem;
				padding: 0 4em;
			}

			p {
				color: white;
				font-size: 2.5em;
				text-align: center;
				position: relative;
				margin-bottom: 1em;
				font-weight: 100;
			}

			@media screen and (max-width: 1120px) {
				
				.text {
					font-size: .8rem;
				}

			}

			@media screen and (max-width: 925px) {
				
				.text {
					font-size: .7rem;
				}

			}

			@media screen and (max-width: 810px) {
				
				.text {
					font-size: .6rem;
				}

			}

			@media screen and (max-width: 700px) {
				
				.text {
					font-size: .5rem;
					font-weight: 600;
				}

			}

			@media screen and (max-width: 450px) {
				
				.text {
					font-size: .4rem;
					padding: 0 2em;
				}

			}
		
		`}</style>

	</MainLayout>
}

export default AlianzaDidi