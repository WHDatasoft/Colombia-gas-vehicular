import Head from '../../components/Head/Head'
import BenefitBanner from '../../components/Sections/BenefitBanner'
import Services from '../../components/Sections/Services'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>

		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>

		<BenefitBanner
			background="garantia.jpg"
			icon="car-hand.svg"
			title="GARANTÍA"
			subtitle="3 años o 100.000km"
		/>

		<Services
			text="Garantía de fabrica por parte del emsamblador y/o distribuidor de la marca."
		/>

		<Services
			text="El GNV reduce la emisión de gases contaminantes a la atmosfera(CO2) hasta en un 40%."
		/>

		<Services
			text="Equipos Homologados por la marca."
		/>

	</MainLayout>
}

export default Index