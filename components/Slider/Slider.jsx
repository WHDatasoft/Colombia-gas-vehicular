
const Slider = ({ contentSlider }) => {


	const onClickRight = () => {
		const ul = document.getElementById("list")
		const count = 0
		const time = setInterval(() => {
			if (count <= 50) {
				console.log(count)
				ul.scrollBy(10, 0)
				count++
			} else {
				clearInterval(time)
			}
		}, 1);
	}

	const onClickLeft = () => {
		const ul = document.getElementById("list")
		const count = 0
		const time = setInterval(() => {
			if (count <= 50) {
				console.log(count)
				ul.scrollBy(-10, 0)
				count++
			} else {
				clearInterval(time)
			}
		}, 1);
	}


	return <div className="slider">

		<button /* onMouseEnter={mouseEnterleft} onMouseLeave={mouseLeaveleft} */ className="left" onClick={onClickLeft}>
			<svg viewBox="0 0 89.39 47.12"><polyline points="0.81 1.49 44.62 23.39 88.72 1.34" /><polyline points="0.67 23.53 44.48 45.44 88.58 23.39" /></svg>
		</button>
		<button /* onMouseEnter={mouseEnterRight} onMouseLeave={mouseLeaveRight} */ className="right" onClick={onClickRight} >
			<svg viewBox="0 0 89.39 47.12"><polyline points="0.81 1.49 44.62 23.39 88.72 1.34" /><polyline points="0.67 23.53 44.48 45.44 88.58 23.39" /></svg>
		</button>

		<ul id="list">
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
				background-color: unset;
			}

			svg {
				height: 2rem;
				fill: none;
				stroke: var(--light-green);
				stroke-miterlimit: 10;
				stroke-width: 6px;
			}

			.right {
				right: 5rem;
				transform: translateY(-50%) rotate(-90deg);
			}

			.right:hover {
				transform: translateY(-50%) rotate(-90deg) scale(1.1);
			}

			.left {
				left: 5rem;
				transform: translateY(-50%) rotate(90deg);
			}

			.left:hover {
				transform: translateY(-50%) rotate(90deg)  scale(1.1);
			}

			ul {
				display: grid;
				grid-template-columns: repeat(${contentSlider.length}, auto);
				position: relative;
				overflow-x: scroll;
				overflow-y: visible;
				height: 28rem;
			}

			ul::-webkit-scrollbar {
				width: 1px;
				height: 0;
			}

			ul::-webkit-scrollbar-thumb {
				background-color: #3b3b3bcc;
				border-radius: 0px;
			}

			ul::-webkit-scrollbar-track {
				background-color: #3b3b3b22;
				border-radius: 5px;
			}

			@media screen and (max-width: 730px) {
				
				button {
					display: none;
				}

			}


		`}</style>

	</div>
}

export default Slider