import Head from '../components/Head/Head'
import MainLayout from '../layout/MainLayout'
import FormEmail from '../components/Forms/FormEmail';
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
			handlePlayButton
			deleteFinish
		/>

		<img src="/icon/row.svg" alt="icono que indica que el usuario debe bajar" />

		<FormEmail />

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
			
			
		
		`}</style>
	</MainLayout>
}

export default Index