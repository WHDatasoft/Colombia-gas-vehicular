import MainFooter from '../../components/Footer/MainFooter'
import Head from '../../components/Head/Head'
import Video from '../../components/Sections/Video'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>

		<Video
			videoUrl="beneficios"
			control
		/>

		<MainFooter />

	</MainLayout>
}

export default Index