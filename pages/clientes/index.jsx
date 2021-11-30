import MainFooter from '../../components/Footer/MainFooter'
import Head from '../../components/Head/Head'
import ClientMain from '../../components/Sections/ClientMain'
import SuccessStories from '../../components/Sections/SuccessStories'
import SlideSecond from '../../components/slides-didi/SlideSecond'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>

		<div className="wrapper">
			<SlideSecond
				backgroundImg="car"
				color="#1c580dAA"
				mainTitle="TRABAJA CON NOSOTROS"
				secondTitle="GAS NATURAL VEHICULAR "
				img="/icon/aliance.svg"
			/>,
		</div>

		<br /><br />

		<SuccessStories />
		<br /><br />

		<MainFooter />

		<style jsx>{`


			.wrapper {
				height: 80vh;
			}
		
		`}</style>

	</MainLayout>
}

export default Index