import Head from 'next/head'
import SuccessStories from '../components/Sections/SuccessStories'
import MainLayout from "../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>
		<SuccessStories />
		<br /><br /><br /><br />
	</MainLayout>
}

export default Index