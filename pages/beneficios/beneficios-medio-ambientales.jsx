import MainFooter from '../../components/Footer/MainFooter'
import Head from '../../components/Head/Head'
import BenefitBanner from '../../components/Sections/BenefitBanner'
import ServiceImg from '../../components/Sections/ServiceImg'
import Services from '../../components/Sections/Services'
import TitleCenter from '../../components/title/TitleCenter'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>

		<Head>
			<title>Beneficios Medio Ambientales</title>
		</Head>

		<BenefitBanner
			background="ambiental.jpg"
			icon="hand-flower.svg"
			title="BENEFICIOS"
			titleComplement="MEDIO AMBIENTALES"
			subtitle=""
		/>

		<TitleCenter
			title="CONTRIBUYE AL MEDIO AMBIENTE"
		/>

		<ServiceImg
			img="ambiental/vanti-station.png"
			paragraph="El GNV reduce la emisión de gases contaminantes a la atmosfera (CO2) hasta en un 40%."
		/>

		<ServiceImg
			img="ambiental/car-mecanic.png"
			paragraph="Disminuye el efecto del calentamiento global y mejora la calidad del aire de la ciudad porque se disminuye la emisión de gases contaminantes como: monóxido de carbono, material particulado, óxido de nitrógeno y dióxido de carbono, respecto a los emitidos con gasolina y demás combustibles."
		/>
		<ServiceImg
			img="ambiental/city.png"
			paragraph="Cuidar el aire, hay una reducción de las enfermedades respiratorias."
		/>

		<MainFooter />

	</MainLayout>
}

export default Index