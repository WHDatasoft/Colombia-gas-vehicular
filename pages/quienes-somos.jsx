import MainFooter from '../components/Footer/MainFooter'
import Head from '../components/Head/Head'
import SliderMain from '../components/Slider/SliderMain'
import MainLayout from "../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>
		<SliderMain />

		<MainFooter />

	</MainLayout>
}

export default Index