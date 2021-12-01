import Row from '../../components/Decorations/Row'
import MainFooter from '../../components/Footer/MainFooter'
import Head from '../../components/Head/Head'
import BenefitBanner from '../../components/Sections/BenefitBanner'
import Gas from '../../components/Sections/Gas'
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

		<h3>AHORRO POR TANQUEADA DE GASOLINA</h3>

		{/* <Simulador /> */}

		<Gas
			cilindro="40"
			metros="10"
			reemplazo="3.5"
			rango="1000 A 2400"
			cilindroNum="gas36"
			carNum="car36"
		/>

		<Gas
			cilindro="65"
			metros="16"
			reemplazo="5.5"
			rango="1000 A 2400"
			cilindroNum="gas54"
			carNum="car54"
		/>

		<Gas
			cilindro="40"
			metros="10"
			reemplazo="5.5"
			rango="1000 A 2400"
			cilindroNum="gas82"
			carNum="car82"
		/>

		<MainFooter />

		<style jsx>{`
		
			h3 {
				position: relative;
				color: white;
				text-align: center;
				padding: 1rem 0;
				margin-bottom: 2rem;
				font-size: 2rem;
				font-weight: 600;
			}
		
		`}</style>

	</MainLayout>
}

export default Index