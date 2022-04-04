import { useState } from 'react'
import MainFooter from '../../../components/Footer/MainFooter'
import Head from '../../../components/Head/Head'
import Banner from '../../../components/Sections/Banner'
import Description from '../../../components/Sections/Description'
import GnvInfo from '../../../components/Sections/GnvInfo'
import MainLayout from "../../../layout/MainLayout"

import AWS from 'aws-sdk'
const dynamoDB = new AWS.DynamoDB({ /* endpoint, */ apiVersion: '2012-08-10', region: 'us-east-1' });

const Index = ({ text, url }) => {


    return <MainLayout>
        <Head>
            <title>Instalación GNV</title>
        </Head>
        <Banner fondo="banner-fondo-claro.png" icon="servicio1.svg" text="Instalación de GNV">
            <img className="person" src={url} alt="" loading="eager" />
            <div className="text-wrapper">
                <p className="texto-1">{text.text1}</p>
                <h1 className="texto-2">{text.text2}</h1>
                <h2 className="texto-3">{text.text3}</h2>
                <h3 className="texto-4">{text.text4}</h3>
            </div>
        </Banner>

        <Description
            title="Tercera Generación"
            textList={[
                "Lazo abierto: Se aplica para vehículos con motores alimentados por carburador.",
                "Usada en motores alimentados por carburador o con control electrónico de combustible sin sensor de oxígeno. La dosificación del gas se realiza a través de una válvula de potencia que es graduada por parte del técnico que realiza la instalación."
            ]}
            icon="car-blue.svg"
            right
        />

        <Description
            title="Quinta Generación"
            textList={[
                "Sistema de Inyección GNV: Se aplica para vehículos con motores alimentados por inyección electrónica, donde se instala un equipo que entrega el combustible en cada cilindro por un inyector independiente, simulando la operación que se hace al utilizar gasolina."
            ]}
            icon="car-orange.svg"
            left
        />

        <img src="/icon/row.svg" alt="icono que indica que el usuario debe bajar" className="row" />

        <GnvInfo />

        <MainFooter />

        <style jsx>{`

			.text-wrapper {
				box-sizing: border-box;
				font-size: 1rem;
				width: 100%;
				align-self: center;
				padding: 1em;
			}

			.texto-1, .texto-2, .texto-3, .texto-4 {
				text-align: center;
			}
		
			.texto-1 {
				color: var(--blue);
				font-size: 1em;
				font-weight: 600;
			}

			.texto-2 {
				font-weight: 600;
				font-size: 1.2em;
				color: var(--dark-green);
				margin: 2rem 0;
			}

			.texto-3 {
				font-weight: 600;
				color: var(--blue);
				font-size: 1em;
			}

			.texto-4 {
				font-weight: 600;
				color: var(--blue);
				font-size: 1em;
				font-size: 2.5em;
			}

			.person {
				margin-top: 2rem;
				height: 11rem;
				align-self: flex-end;
			}

			.row {
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

			@media screen and (max-width: 625px) {

				.text-wrapper {
					font-size: .7rem;
				}

				.texto-2 {
					margin: 1rem 0;
				}

				.person {
					height: 8rem;
				}

			}

			@media screen and (max-width: 440px) {

				.text-wrapper {
					font-size: .6rem;
				}

			}

			@media screen and (max-width: 330px) {

				.text-wrapper {
					font-size: .55rem;
				}

			}

		`}</style>
    </MainLayout>
}

export async function getStaticProps(context) {

    try {


        /* const API_URL = `${httpProtocol}://${context.req.headers.host}/api/banner?service=instalacion`
        const response = await axios.get(API_URL) */

        const data = await dynamoDB.scan({
            TableName: 'banner',
            FilterExpression: "servicio = :servicio",
            ExpressionAttributeValues: {
                ":servicio": { S: 'instalacion' }
            },
        }).promise();

        const text = {}
        for (const key in data.Items[0]) {
            if (key !== 'servicio' && key !== 'urlImg') {
                console.log(key)
                text[key] = data.Items[0][key].S
            }
        }
        const url = data.Items[0].urlImg.S

        return {
            props: { text, url }, // will be passed to the page component as props
        }
    } catch (error) {

        console.log(error)

        return {
            props: {}, // will be passed to the page component as props
        }
    }
}

export default Index