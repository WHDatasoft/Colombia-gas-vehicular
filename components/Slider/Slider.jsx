import { useState, useEffect } from "react"

const Slider = ({ contentSlider, id, infinite }) => {

	const [state, setState] = useState(0)
	const [autoTimerRight, setAutoTimerRight] = useState(0)
	const [autoTimerLeft, setAutoTimerLeft] = useState(0)
	const [selected, setSelected] = useState(false)

	const selectBusiness = () => {
		setSelected(sel => !sel)
	}

	useEffect(() => {
		clearInterval(autoTimerRight)
		clearInterval(autoTimerLeft)
	}, [selected]);

	useEffect(() => {
		if (infinite) {
			const slide = document.getElementById(id)
			const right = true
			setState(setInterval(() => {
				if (right) {
					if (Number(slide.style.left.slice(0, -2)) > -2500) {
						slide.style.left = `${slide.style.left.slice(0, -2) - 4}px`
						if (Number(slide.style.left.slice(0, -2)) <= -1499) right = false
					}
				} else {
					if (Number(slide.style.left.slice(0, -2)) < 0) {
						slide.style.left = `${Number(slide.style.left.slice(0, -2)) + 4}px`
						if (Number(slide.style.left.slice(0, -2)) >= -1) right = true
					}
				}
			}, 50))
		}

		return () => {
			clearInterval(state)
		}
	}, [])

	/* const mouseEnterRight = () => {
		const slide = document.getElementById(id)
		setState(setInterval(() => {
			if (Number(slide.style.left.slice(0, -2)) > - 3500) {
				slide.style.left = `${slide.style.left.slice(0, -2) - 4}px`
			}
		}, 20))
	}

	const mouseLeaveRight = () => {
		clearInterval(state)
	}

	const mouseEnterleft = () => {
		const slide = document.getElementById(id)
		setState(setInterval(() => {
			if (Number(slide.style.left.slice(0, -2)) < 0) {
				slide.style.left = `${Number(slide.style.left.slice(0, -2)) + 4}px`
			}
		}, 20))
	}

	const mouseLeaveleft = () => {
		clearInterval(state)
	} */

	const onClickRight = () => {

		clearInterval(autoTimerRight)
		clearInterval(autoTimerLeft)

		const slide = document.getElementById(id)

		setAutoTimerRight(setInterval(() => {
			if (Number(slide.style.left.slice(0, -2)) > - 3500) {
				slide.style.left = `${slide.style.left.slice(0, -2) - 4}px`
			}
		}, 20))


	}

	const onClickLeft = () => {

		clearInterval(autoTimerRight)
		clearInterval(autoTimerLeft)

		const slide = document.getElementById(id)

		setAutoTimerLeft(setInterval(() => {
			if (Number(slide.style.left.slice(0, -2)) < 0) {
				slide.style.left = `${Number(slide.style.left.slice(0, -2)) + 4}px`
			}
		}, 20))

	}


	return <div className="slider">
		{
			!infinite
				?
				<>
					<button /* onMouseEnter={mouseEnterleft} onMouseLeave={mouseLeaveleft} */ className="left" onClick={onClickLeft}>
						<img src="/icon/row-green.svg" alt="icono de una flecha" />
					</button>
					<button /* onMouseEnter={mouseEnterRight} onMouseLeave={mouseLeaveRight} */ className="right" onClick={onClickRight} >
						<img src="/icon/row-green.svg" alt="icono de una flecha" />
					</button>
				</>
				:
				''

		}

		<ul id={id} onClick={selectBusiness}>
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
				right: 5rem;
			}

			.left {
				left: 5rem;
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