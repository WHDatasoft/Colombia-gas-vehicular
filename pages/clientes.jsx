import MainFooter from '../components/Footer/MainFooter'
import Head from '../components/Head/Head'
import SuccessStories from '../components/Sections/SuccessStories'
import MainLayout from "../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>
		<SuccessStories />
		<br /><br />

		<MainFooter />

	</MainLayout>
}

export default Index