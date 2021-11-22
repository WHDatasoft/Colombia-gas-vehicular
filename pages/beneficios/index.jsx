import Head from 'next/head'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>

		<video src="/video/beneficios.mp4" autoPlay controls></video>


		<style jsx>{`
		
			video {
				position: relative;
				z-index: 1;
				display: block;
				margin: auto;
				box-sizing: border-box;
				padding: 0 3rem;
				height: 75vh;
			}

			
		
		`}</style>
	</MainLayout>
}

export default Index