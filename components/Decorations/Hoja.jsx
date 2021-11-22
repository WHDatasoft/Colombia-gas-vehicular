import { useEffect, useRef } from "react"

const Hoja = ({ left, img }) => {

	const hoja = useRef(null)

	useEffect(() => {

		let pos = 0
		const docHeight = document.body.clientHeight
		const timer = setInterval(() => {
			if (hoja.current) {
				hoja.current.style.top = `${pos}px`
				if (pos < docHeight - 120) {
					pos++
				} else {
					hoja?.current?.remove()
				}
			}
		}, 30);
		return () => {
			clearInterval(timer)
		}
	}, [])

	return <div className="container" ref={hoja}>

		<img src={img} alt="" />

		<style jsx>{`

			.container {
				pointer-events: none;
				position: absolute;
				top: 0;
				left: ${left}px;
				width: 6rem;
				opacity: .5;
			}

			img {
				pointer-events: none;
				animation: valancear 3s alternate-reverse infinite;
				transform-origin: 50% 50%;
			}

			@keyframes valancear {
				from {
					transform: rotate(30deg)
				}

				to {
					transform: rotate(0deg)
				}
			}

		`}</style>
	</div>
}

export default Hoja