import MainFooter from '../components/Footer/MainFooter'
import Head from '../components/Head/Head'
import Graphyc from '../components/Sections/Graphyc'
import Law from '../components/Sections/Law'
import Video from '../components/Sections/Video'
import MainLayout from "../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>

		<Video
			videoUrl="presentacion-colombiagas"
			control
		/>
		<img src="/icon/row.svg" alt="icono que indica que el usuario debe bajar" />
		<Graphyc
			title="REDUCCIÓN DE CO2 GNV - GASOLINA"
			subtitle="DÍOXIDO DE CARBONO G/KM"
			video="barra-1"
			mainList={[
				'Gasolina GRAN I10 menor 1500 cc',
				'Gasolina CHEVROLET',
				'Gasolina FAW SIRIUS R7 Mayor',
				'Gasolina UAZ PROFI mayor 2400',
				'GNV CONVERTIDO GRAN I10',
				'GNV CONVERTIDO',
				'Dedicado Solo Gas FAW',
				'Dedicado Solo Gas HIUNDAY',
				'Dedicado Solo Gas) UAZ PROFI'
			]}
			secondList={[
				'Promedio emisión CO2 gasolina: 296 g/Km',
				'Promedio emisión CO2 GNV: 200 g/Km',
				'% reducción del GNV frente a Gasolina: 32%'
			]}
		/>
		<Graphyc
			title="REDUCCIÓN DE CO2 GNV - GASOLINA"
			subtitle="MATERIAL PARTICULADO PM2.5 G/KM"
			video="barra-2"
			mainList={[
				'Gasolina GRAN I10 menor 1500 cc',
				'Gasolina CHEVROLET',
				'Gasolina FAW SIRIUS R7 Mayor',
				'Gasolina UAZ PROFI mayor 2400',
				'GNV CONVERTIDO GRAN I10',
				'GNV CONVERTIDO',
				'Dedicado Solo Gas FAW',
				'Dedicado Solo Gas HIUNDAY',
				'Dedicado Solo Gas) UAZ PROFI'
			]}

			secondList={[
				'Promedio emisión PM 2.5 gasolina: 0,01083 g/Km',
				'Promedio emisión PM 2.5 GNV: 0,000443 g/Km',
				'% reducción del GNV frente a Gasolina: 96%'
			]}
		/>
		<Graphyc
			title="REDUCCIÓN DE CO2 GNV - GASOLINA"
			subtitle="EMISIÓN DE NOX TOTALES GASOLINA - GNV"
			video="barra-3"
			mainList={[
				'Vehículo Motor Mayor a 1500 cc (combustible: Gasolina) CHEVROLET TRACKER',
				'Vehículo Motor Mayor a 1500 cc (combustible: Gasolina) - FAW SIRIUS R7',
				'Vehículo Motor Mayor a 1500 cc (combustible: GNV CONVERTIDO) - CHEVROLET TRACKER',
				'Vehículo Motor Mayor a 1500 cc (combustible: GNV) - FAW SIRIUS R7'
			]}

			secondList={[
				'Promedio emisión PM 2.5 gasolina: 0,968 g/Km',
				'Promedio emisión PM 2.5 GNV: 0,974 g/Km',
				'% reducción del GNV frente a Gasolina: 1%'
			]}
		/>
		<Law />
		<br /><br /><br />

		<MainFooter />

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

			img {
				display: block;
				height: 2rem;
				margin: 1rem auto;
				animation: move 1s infinite alternate-reverse;
			}

			@keyframes move {
				from {
					transform: translateY(-.3rem)
				}

				to {
					transform: translateY(.3rem)
				}
			}
		
		`}</style>
	</MainLayout>
}

export default Index