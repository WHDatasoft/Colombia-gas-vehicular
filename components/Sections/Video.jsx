import { useEffect, useState } from "react";

const Video = ({ videoUrl, deleteFinish, handlePlayButton, control }) => {

	const [deleteElement, setDeleteElement] = useState(false)

	const [playButton, setPlayButton] = useState(true)

	const [complete, setComplete] = useState(false);

	const [height, setHeight] = useState(0);

	useEffect(() => {
		const { clientWidth } = document.body
		const video = document.getElementsByTagName('video')[0]
		const completVideo = clientWidth <= video.offsetWidth
		setHeight(video.offsetHeight)
		console.log(completVideo)
		setComplete(completVideo)
	}, []);

	const play = () => {
		const video = document.getElementsByTagName('video')[0]
		video.play()
	}

	const pause = () => {
		const video = document.getElementsByTagName('video')[0]
		video.pause()
	}

	const handlePlay = () => {
		setPlayButton(play => !play)
	}

	const handleDelete = () => {
		setDeleteElement(true)
	}

	return <div className="container">
		{
			playButton && handlePlayButton
				?
				<button onClick={play}>
					<svg viewBox="0 0 512 512">
						<path fill="currentColor" d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z" />
					</svg>
				</button>
				:

				handlePlayButton
					?
					<button className="pause" onClick={pause}>
						pause
					</button>
					:
					''
		}
		<video
			src={`/video/${videoUrl}.mp4`}
			preload="true"
			type="video/mp4"
			autoPlay
			onEnded={deleteFinish ? handleDelete : null}
			onPause={handlePlay}
			onPlay={handlePlay}
			controls={control ? true : false}
		></video>

		<style jsx>{`

			
			.container {
				overflow: hidden;
				position: relative;
			}

			video {
				transition: height 3s;
				width: 100vw;	
				height: ${deleteElement ? '0' : '80vh'};
				display: block;
				margin: auto;
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
			
			.pause {
				transition: opacity .5s;
				opacity: 1;
			}

			video:hover .pause {
				opacity: 0;
			}

			svg {
				width: 5rem;
				color: white;
			}

			@media screen and (max-width: 860px) {

			}

		`}</style>
	</div>
}

export default Video