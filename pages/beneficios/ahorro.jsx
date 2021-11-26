import Head from '../../components/Head/Head'
import BenefitBanner from '../../components/Sections/BenefitBanner'
import Simulador from '../../components/Sections/Simulador'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>

		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>

		<BenefitBanner
			background="ahorro.jpg"
			icon="car-electric.svg"
			title="AHORRO"
			subtitle="Ahorra hasta el 50%"
		/>

		<h2>FORMATO DE SIMULACIÓN OFERTA DE SUMINISTRO CON GNV VANTI</h2>

		<Simulador />

		<style jsx>{`
		
			h2 {
				position: relative;
				color: white;
				text-align: center;
				padding: 1rem 0;
				background-color: var(--blue);
				margin-bottom: 2rem;
			}
		
		`}</style>

	</MainLayout>
}

export default Index