import Head from '../../components/Head/Head'
import BenefitBanner from '../../components/Sections/BenefitBanner'
import Services from '../../components/Sections/Services'
import MainLayout from "../../layout/MainLayout"

const Index = () => {
	return <MainLayout>

		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>

		<BenefitBanner
			background="salud.jpg"
			icon="car-hand.svg"
			title="SALUD"
			subtitle="GRATIS PARA TI Y 4 BENEFICIARIOS MÁS"
		/>

		<Services
			title="SERVICIO MÉDICO DOMICILIARIO"
			text="A disposición del usuaio el servicio de orientación médica telefónica, atendiendo y haciendo un diagnóstico, orientado sobre las conductas que debe asumir, las recomentaciones y signos de alarma, frente a la sintomatología que presente el usuario."
		/>

		<Services
			title="SERVICIO DE AMBULACIA"
			text="A disposición del usuaio el servicio de orientación médica telefónica, atendiendo y haciendo un diagnóstico, orientado sobre las conductas que debe asumir, las recomentaciones y signos de alarma, frente a la sintomatología que presente el usuario."
		/>

		<Services
			title="SERVICIO DE ASISTENCIA MÉDICA TELEFÓNICA"
			text="Cuando la consecuencia de una enfermedad no preexistente o crónica, los beneficiarios requieran de una consulta médica de urgencia, la compañía pondrá a su disposición un médico para que los visite a domicilio."
		/>

		<style jsx>{`
		
			

		
		`}</style>
	</MainLayout>
}

export default Index