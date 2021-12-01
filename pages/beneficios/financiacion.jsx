import MainFooter from '../../components/Footer/MainFooter'
import Head from '../../components/Head/Head'
import BenefitBanner from '../../components/Sections/BenefitBanner'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>

		<BenefitBanner
			background="salud.jpg"
			icon="hand-money.svg"
			title="FINANCIACIÓN"
			subtitle=""
		/>


		<MainFooter />

	</MainLayout>
}

export default Index