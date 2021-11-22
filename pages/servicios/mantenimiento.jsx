import Head from 'next/head'
import Banner from '../../components/Sections/Banner'
import Description from '../../components/Sections/Description'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>
		<Banner imgPerson="person-3.png" fondo="banner-fondo-claro.png" icon="servicio3.svg" text="Mantenimiento">
			<p className="texto-1">
				<span>Siempre con cuidado, prevenga cualquier daño mayor</span>
				<br />
				<span>con la revisión anual de su vehículo</span>
			</p>
			<h2 className="texto-3">
				<span>COLOLOMBIAGAS VEHICULAR  TE OFRECE EL MEJOR</span>
				<span className="number">SERVICIO PARA TU REVISIÓN ANUAL</span>
			</h2>
			<h1 className="texto-2">$75.000</h1>
		</Banner>

		<Description
			title="Mantenimiento"
			text="El mantenimiento se basa en registros a ejecutarse a los 1,500 Km y en adelante periódicamente cada 20,000 kms. Eso para garantizar siempre un correcto funcionamiento de su vehículo y del equipo de Gas- GNV. Los talleres autorizados (*) para ejercer el mantenimiento preventivo del sistema GNV."
		/>

		<style jsx>{`

			.texto-1, .texto-2, .texto-3 {
				text-align: center;
			}
		
			.texto-1 {
				color: var(--blue);
				font-weight: 600;
				font-size: 1rem;
			}

			.texto-2 {
				font-weight: 400;
				font-size: 2.5rem;
				color: var(--blue);
			}

			.texto-3 {
				margin: 2rem 0;
				font-weight: 600;
				color: var(--light-green);
				font-size: 1.2rem;
			}

		
		`}</style>
	</MainLayout>
}

export default Index