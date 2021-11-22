import Head from 'next/head'
import SliderMain from '../components/Slider/SliderMain'
import MainLayout from "../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>
		<SliderMain />
	</MainLayout>
}

export default Index