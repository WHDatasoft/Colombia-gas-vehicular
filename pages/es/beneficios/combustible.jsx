import MainFooter from '../../../components/Footer/MainFooter'
import Head from '../../../components/Head/Head'
import BenefitBanner from '../../../components/Sections/BenefitBanner'
import ServiceImg from '../../../components/Sections/ServiceImg'
import TitleCenter from '../../../components/title/TitleCenter'
import MainLayout from "../../../layout/MainLayout"

const Index = () => {
    return <MainLayout>

        <Head>
            <title>Combustible</title>
        </Head>

        <BenefitBanner
            background="combustible.webp"
            icon="car-fuel.svg"
            title="COMBUSTIBLE"
            titleComplement="Ahorra hasta el 50%"
            subtitle=""
            light
        />

        <TitleCenter
            title="CONTROL DE CONSUMO"
        />

        <ServiceImg
            title="Plataforma para verificar consumos"
            img="combustible/primera.webp"
        />

        <ServiceImg
            title="Chip de control"
            img="combustible/segunda.webp"
        />

        <ServiceImg
            title="Registro de Kilómetraje en el suministro"
            img="combustible/tercera.webp"
        />

        <ServiceImg
            title="El gas no es manipulable por los conductores"
            img="combustible/cuarta.webp"
        />

        <MainFooter />

        <style jsx>{`
		
			
		
		`}</style>

    </MainLayout>
}

export default Index