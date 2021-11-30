import MainFooter from '../components/Footer/MainFooter'
import Head from '../components/Head/Head'
import SliderMain from '../components/Slider/SliderMain'
import SlideIcons from '../components/slides-quienes-somos/SlideIcons'
import SlideImg from '../components/slides-quienes-somos/SlideImg'
import SlideText from '../components/slides-quienes-somos/SlideText'
import MainLayout from "../layout/MainLayout"

const Index = () => {

	const slideList = [
		<SlideImg />,
		<SlideText />,
		<SlideIcons />
	]

	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>
		<SliderMain
			slideList={slideList}
		/>

		<br />
		<br />
		<br />
		<br />
		<br />

		<MainFooter />

	</MainLayout>
}

export default Index