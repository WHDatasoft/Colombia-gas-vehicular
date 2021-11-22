import Head from 'next/head'
import BenefitBanner from '../../components/Sections/BenefitBanner'
import ServiceImg from '../../components/Sections/ServiceImg'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>

		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>

		<BenefitBanner
			background="combustible.png"
			icon="car-fuel.svg"
			title="COMBUSTIBLE"
			subtitle="Ahorra hasta el 50%"
		/>

		<h2>CONTROL DE CONSUMO</h2>

		<ServiceImg
			title="Plataforma para verificar consumos"
			img="primera.png"
		/>

		<ServiceImg
			title="Chip de control"
			img="segunda.png"
		/>

		<ServiceImg
			title="Registro de Kilómetraje en el suministro"
			img="tercera.png"
		/>

		<ServiceImg
			title="El gas no es manipulable por los conductores"
			img="cuarta.png"
		/>
		<style jsx>{`
		
			h2 {
				position: relative;
				color: white;
				text-align: center;
				padding: 1rem 0;
				background-color: var(--orange);
				margin-bottom: 2rem;
			}
		
		`}</style>

	</MainLayout>
}

export default Index