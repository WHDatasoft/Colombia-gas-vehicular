import Head from '../../components/Head/Head'
import BenefitBanner from '../../components/Sections/BenefitBanner'
import ServiceImg from '../../components/Sections/ServiceImg'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>

		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>

		<BenefitBanner
			background="combustible.jpg"
			icon="car-fuel.svg"
			title="COMBUSTIBLE"
			subtitle="Ahorra hasta el 50%"
		/>

		<h2>CONTROL DE CONSUMO</h2>

		<ServiceImg
			title="Plataforma para verificar consumos"
			img="primera.jpg"
		/>

		<ServiceImg
			title="Chip de control"
			img="segunda.jpg"
		/>

		<ServiceImg
			title="Registro de Kilómetraje en el suministro"
			img="tercera.jpg"
		/>

		<ServiceImg
			title="El gas no es manipulable por los conductores"
			img="cuarta.jpg"
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