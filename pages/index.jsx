import Head from '../components/Head/Head'
import MainLayout from '../layout/MainLayout'
import FormCol from '../components/Forms/FormCol'
import Video from '../components/Sections/Video'
import MainFooter from '../components/Footer/MainFooter'
import Banner from '../components/advertising/Banner'
import Hero from '../components/Hero/Hero'
import SliderMain from '../components/SliderMain/SliderMain'


const Index = () => {



    return <MainLayout>
        <Head>
            <title>Colombia Gas Vehicular</title>
            <meta name="description" content="Colombiagas Vehicular te brinda opciones de accesibilidad para ti y tu vehículo con beneficios unicos pensados en tu bienestar, ayúdanos a cuidar el medio ambiente, te esperamos..." />
        </Head>

        <Hero />


        <Banner />

        <Video
            videoUrl="introduccion"
            videoUrlResponsive="introduccion-responsive"
            handlePlayButton
            deleteFinish
        />

        <img src="/icon/row.svg" alt="icono que indica que el usuario debe bajar" />

        <FormCol />

        <br />
        <br />
        <br />

        <MainFooter />

        <style jsx>{`
    
			img {
				display: block;
				height: 2rem;
				margin: 2rem auto;
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