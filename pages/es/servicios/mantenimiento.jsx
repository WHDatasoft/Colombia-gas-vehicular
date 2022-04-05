import MainFooter from '../../../components/Footer/MainFooter'
import Head from '../../../components/Head/Head'
import Banner from '../../../components/Sections/Banner'
import Description from '../../../components/Sections/Description'
import MainLayout from "../../../layout/MainLayout"

const Index = () => {
    return <MainLayout>
        <Head>
            <title>Mantenimiento</title>
        </Head>

        <Banner imgPerson="" fondo="banner-fondo-oscuro.webp" icon="servicio3.svg" text="mantenimiento">
            <img className="person" src="/img/banner/person-4.webp" alt="" loading="eager" />
            <div className="text-wrapper">
                <p className="texto-1">Colombiagas vehicular te ofrece respaldo y los equipos especializados para realizar el mantenimiento de su vehículo</p>
                <h2 className="texto-2">$ 50.000</h2>
                <h1 className="texto-3">¡Pide tu cita ahora!</h1>
            </div>
        </Banner>

        <Description
            title="Mantenimiento"
            textList={[
                "El mantenimiento se basa en registros a ejecutarse a los 1,500 Km y en adelante periódicamente cada 20,000 kms. Eso para garantizar siempre un correcto funcionamiento de su vehículo y del equipo de Gas- GNV. Los talleres autorizados como Colombiagas vehicular ejercen el mantenimiento preventivo del sistema GNV."
            ]}
        />


        <MainFooter />

        <style jsx>{`

			.text-wrapper {
				font-size: 1rem;
				box-sizing: border-box;
				width: 100%;
				align-self: center;
				padding: 1em;
			}


			.texto-1, .texto-2, .texto-3 {
				text-align: center;
			}
		
			.texto-1 {
				color: white;
				font-weight: 600;
				font-size: 1em;
			}

			.texto-2 {
				font-weight: 600;
				color: white;
				font-size: 2.5em;
				margin: 2rem 0;
			}

			.texto-3 {
				font-weight: 600;
				font-size: 1.5em;
				color: var(--light-green);
			}

			.person {
				margin-top: 2rem;
				height: 11rem;
				align-self: flex-end;
			}

			@media screen and (max-width: 625px) {

				.text-wrapper {
					font-size: 0.7rem;
				}

				.texto-2 {
					margin: 1rem 0;
				}

				.person {
					height: 8em;
				}

			}

			@media screen and (max-width: 380px) {

				.text-wrapper {
					font-size: 0.6rem;
				}

			}

			@media screen and (max-width: 330px) {

				.text-wrapper {
					font-size: 0.5rem;
				}

			}
					
		`}</style>

    </MainLayout>
}

export default Index