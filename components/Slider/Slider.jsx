import { useState } from "react"

const Slider = ({ contentSlider, id }) => {

	const [state, setState] = useState(0)

	const mouseEnterRight = () => {
		const slide = document.getElementById(id)
		setState(setInterval(() => {
			slide.style.left = `${slide.style.left.slice(0, -2) - 4}px`
		}, 10))
	}

	const mouseLeaveRight = () => {
		clearInterval(state)
	}

	const mouseEnterleft = () => {
		const slide = document.getElementById(id)
		setState(setInterval(() => {
			slide.style.left = `${Number(slide.style.left.slice(0, -2)) + 4}px`
		}, 10))
	}

	const mouseLeaveleft = () => {
		clearInterval(state)
	}

	return <div className="slider">

		<button onMouseEnter={mouseEnterleft} onMouseLeave={mouseLeaveleft} className="left">
			<img src="/icon/row-green.svg" alt="icono de una flecha" />
		</button>
		<button onMouseEnter={mouseEnterRight} onMouseLeave={mouseLeaveRight} className="right">
			<img src="/icon/row-green.svg" alt="icono de una flecha" />
		</button>
		<ul id={id}>
			{
				contentSlider.map((slide, index) => (
					<li key={index}>{slide}</li>
				))
			}

		</ul>

		<style jsx>{`

			.slider {
				position: relative;
			}

			button {
				position: absolute;
				top: 50%;
				z-index: 3;
				transform: translateY(-50%);
				background-color: unset;
				
			}

			.right {
				right: 3rem;
			}

			.left {
				left: 3rem;
				transform: translateY(-50%) rotate(180deg);
			}


			img {
				height: 5rem;
			}

			ul {
				display: grid;
				grid-template-columns: repeat(${contentSlider.length}, auto);
				position: relative;
			}


		`}</style>

	</div>
}

export default Slider