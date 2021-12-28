import MainFooter from '../../components/Footer/MainFooter'
import Head from '../../components/Head/Head'
import ClientMain from '../../components/Sections/ClientMain'
import SuccessStories from '../../components/Sections/SuccessStories'
import DidiContent from '../../components/slides-didi/DidiContent'
import SlideDidi from '../../components/slides-didi/SlideDidi'
import SlideSecond from '../../components/slides-didi/SlideSecond'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Clientes</title>
		</Head>

		<ClientMain
			backgroundImg="/img/clientes/car.jpg"
			sizeScreen
			ContentAside={
				<SlideDidi
					color="#1c580dAA"
					rowGap="3"
					ContentAside={<DidiContent />}
				/>
			}
		>
		</ClientMain>

		<br /><br />

		<SuccessStories />
		<br /><br />

		<MainFooter />

	</MainLayout>
}

export default Index