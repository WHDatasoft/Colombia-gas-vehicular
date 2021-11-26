import Head from '../components/Head/Head'
import MainLayout from '../layout/MainLayout'
import FormEmail from '../components/Forms/FormEmail';
import { useEffect, useState } from 'react';


const Index = () => {

	const [deleteElement, setDeleteElement] = useState(false)

	const [playButton, setPlayButton] = useState(true)

	const play = () => {
		const video = document.getElementsByTagName('video')[0]
		video.play()
	}

	const onPlay = () => {
		setPlayButton(false)
	}

	const handleDelete = () => {
		setDeleteElement(true)
	}

	return <MainLayout>
		<Head>
			<title>Colombia Gas Vehicular</title>
		</Head>

		<div className="video">
			{
				playButton
					?
					<button onClick={play}>
						<svg viewBox="0 0 512 512">
							<path fill="currentColor" d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z" />
						</svg>
					</button>
					:
					''
			}
			<video
				src="/video/introduccion.mp4"
				preload="true"
				type="video/mp4"
				autoPlay
				onEnded={handleDelete}
				onPlay={onPlay}
			></video>
		</div>

		<img src="/icon/row.svg" alt="icono que indica que el usuario debe bajar" />

		<FormEmail />

		<br />
		<br />
		<br />
		<br />

		<style jsx>{`
    
        .video {
			position: relative;
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

		button {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 30;
			background-color: unset;
		}

		button:hover {
			transform: translate(-50%, -50%) scale(1.1);
		}

		svg {
			width: 5rem;
			color: white;
		}



    
    `}</style>
	</MainLayout>
}

export default Index