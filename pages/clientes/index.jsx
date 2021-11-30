import MainFooter from '../../components/Footer/MainFooter'
import Head from '../../components/Head/Head'
import ClientMain from '../../components/Sections/ClientMain'
import SuccessStories from '../../components/Sections/SuccessStories'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>

		<ClientMain
			urlImg="car"
			backgroundColor="#1c580dAA"
			urlImgFinal="aliance"
			rowGap="3"
		>
			<h2>TRABAJA CON NOSOTROS</h2>
			<h1>GAS NATURAL VEHICULAR</h1>
			<img src="/icon/aliance.svg" alt="" className="final" />
		</ClientMain>

		<br /><br />

		<SuccessStories />
		<br /><br />

		<MainFooter />

		<style jsx>{`

			h1, h2 {
				text-align: center;
			}

			h2 {
				color: white;
				font-size: 5rem;
				font-weight: 600;
				max-width: 540px;
				letter-spacing: 0.2rem;
			}

			h1 {
				color: var(--light-green);
				background-color: white;
				padding: .5rem 1rem;
				font-size: 2rem;
				letter-spacing: 0.1rem;
			}
		
			img {
				height: 4rem;
			}
		
		`}</style>

	</MainLayout>
}

export default Index