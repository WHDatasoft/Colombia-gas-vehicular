import MainFooter from '../../components/Footer/MainFooter'
import Head from '../../components/Head/Head'
import BenefitBanner from '../../components/Sections/BenefitBanner'
import PayTable from '../../components/Sections/payTable'
import RequestDoc from '../../components/Sections/RequestDoc'
import Services from '../../components/Sections/Services'
import TitleCenter from '../../components/title/TitleCenter'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>

		<BenefitBanner
			background="salud.jpg"
			icon="hand-money.svg"
			title="FINANCIACIÓN"
			subtitle=""
		/>

		<TitleCenter
			title="PAGA LAS CUOTAS A TRAVÉS DE LA FACTURA"
		/>

		<Services
			text="Cuando realizas la instalación de gas natural en tu vehículo en alguno de los centros de instalación en convenio con Vanti, tienes la oportunidad de financiar el saldo del valor a cancelar a través de la factura de gas residencial a un plazo de hasta 48 meses a una tasa del 0,87% n.m.v., de forma ágil y sin trámites engorrosos. Con un cupo pre aprobado sin estudio de crédito como puedes ver a continuación."
		/>

		<TitleCenter
			title="Para solicitar la financiación se requieren los siguientes documentos"
		/>

		<RequestDoc />

		<PayTable />


		<MainFooter />

	</MainLayout>
}

export default Index