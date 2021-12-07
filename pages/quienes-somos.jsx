import MainFooter from '../components/Footer/MainFooter'
import Head from '../components/Head/Head'
import SliderDoble from '../components/Slider/SliderDoble'
import SliderMain from '../components/Slider/SliderMain'
import SlideIcons from '../components/slides-quienes-somos/SlideIcons'
import SlideImg from '../components/slides-quienes-somos/SlideImg'
import SlideText from '../components/slides-quienes-somos/SlideText'
import MainLayout from "../layout/MainLayout"

const Index = () => {

	const slideList = [
		<SlideText />,
		<SlideIcons />
	]

	return <MainLayout>
		<Head>
			<title>Quiénes Somos</title>
		</Head>
		{/* <SliderMain
			slideList={slideList}
		/> */}

		<SliderDoble
			mainImg="/img/colombiagas/primera.jpg"
			secondImg="/img/colombiagas/slide-segunda.png"
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