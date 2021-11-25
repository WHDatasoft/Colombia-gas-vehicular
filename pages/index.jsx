import Head from 'next/head'
import MainLayout from '../layout/MainLayout'
import FormEmail from '../components/Forms/FormEmail';
import { useEffect, useState } from 'react';


const Index = () => {

	const [deleteElement, setDeleteElement] = useState(false)

	useEffect(() => {
		/* const video = document.getElementsByTagName('video')[0]

		video.play() */

	}, [])

	const handleDelete = () => {
		setDeleteElement(true)
	}

	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>

		<div className="video">
			<video src="/video/introduccion.mp4" preload="true" type="video/mp4" autoPlay muted onEnded={handleDelete}></video>
		</div>

		<img src="/icon/row.svg" alt="icono que indica que el usuario debe bajar" />

		<FormEmail />

		<br />
		<br />
		<br />
		<br />

		<style jsx>{`
    
        .video {
			overflow: hidden;
			position: relative;
			transition: height 3s;
			height: ${deleteElement ? '0' : '80vh'};
			z-index: 1;
        }

        video {
          height: 100%;
          display: block;
          margin: auto;
        }

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