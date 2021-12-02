import Head from '../components/Head/Head'
import MainLayout from '../layout/MainLayout'
import FormCol from '../components/Forms/FormCol';
import { useEffect, useState } from 'react';
import Video from '../components/Sections/Video';
import MainFooter from '../components/Footer/MainFooter';


const Index = () => {



	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>

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