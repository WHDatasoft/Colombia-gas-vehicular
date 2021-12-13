import { useEffect, useRef, useState } from "react";

const SliderDoble = ({ slideList, mainImg, secondImg }) => {

	const [img, setImg] = useState(0);
	const [direccion, setDireccion] = useState(true);

	const touchStart = useRef(0);


	useEffect(() => {

		const tiempo = setTimeout(() => {
			setDireccion(dir => {
				if (dir) {
					if (img >= slideList.length) return false
					setImg(img + 1)
					return dir
				} else {
					if (img <= 0) return true
					setImg(img - 1)
					return dir
				}
			})
		}, 7000)

		return () => {
			clearTimeout(tiempo)
		}
	}, [img]);

	//Para evitar que se desfase el slider
	useEffect(() => {
		if (img <= 0) setImg(0)
		if (img > slideList.length) setImg(slideList.length)
	}, [img]);

	const onTouchStart = (e) => {
		touchStart = e.touches[0].pageX
	}

	const onTouchEnd = (e) => {
		const touchEnd = e.changedTouches[0].pageX
		if (touchStart <= touchEnd) {
			setImg(i => i - 1)
		} else {
			setImg(i => i + 1)
		}
	}

	const onClickRight = () => {
		setImg(img => img + 1)
	}

	const onClickLeft = () => {
		setImg(img => img - 1)
	}

	return <div className="content">

		<button className="left" onClick={onClickLeft}>
			<svg viewBox="0 0 89.39 47.12"><polyline points="0.81 1.49 44.62 23.39 88.72 1.34" /><polyline points="0.67 23.53 44.48 45.44 88.58 23.39" /></svg>
		</button>
		<button className="right" onClick={onClickRight}>
			<svg viewBox="0 0 89.39 47.12"><polyline points="0.81 1.49 44.62 23.39 88.72 1.34" /><polyline points="0.67 23.53 44.48 45.44 88.58 23.39" /></svg>
		</button>

		<ul className="main-slide" onTouchEnd={onTouchEnd} onTouchStart={onTouchStart}>
			<li className="main-img">
			</li>
			<li className="second-img">
				<ul className="second-slide">
					{
						slideList.map(slide => (
							<li key={Math.random()} >
								<section className="item">
									{slide}
								</section>
							</li>
						))
					}
				</ul>
			</li>


		</ul>

		<style jsx>{`
			.main-slide {
				margin-left: -${img === 0 ? 0 : 1}00%;
			}

			.second-slide {
				margin-left: -${img === 0 ? 0 : img - 1}00%;
			}
		`}</style>

		<style jsx>{`

			.main-img {
				background: url('${mainImg}') no-repeat;
				background-size: cover;
				background-position: center;

			}

			.second-img {
				background: url('${secondImg}') no-repeat;
				background-size: cover;
				background-position: center;

			}

			.content {
				height: calc(90vh - 10rem);
				position: relative;
			}

			.main-slide {
				display: grid;
				height: 100%;
				width: 200%;
				grid-template-columns: repeat(2, 1fr);
				transition: margin-left 1.5s ease;
			}

			.main-slide > li {
				min-height: 850px;
				list-style: none;
				height: calc(90vh - 10rem);
				position: relative;
				overflow: hidden;
			}

			.second-slide {
				display: grid;
				height: calc(90vh - 10rem);
				width: 200%;
				grid-template-columns: repeat(2, 1fr);
				transition: margin-left 1.5s ease;
			}

			.second-slide > li {
				min-height: 850px;
				list-style: none;
				height: calc(90vh - 10rem);
				position: relative;
				overflow: hidden;
				display: grid;
				place-items: center;
				box-sizing: border-box;
				padding: 5rem;
			}

			.item {
				background: var(--blue-transparent);
				height: 100%;
				width: 100%;
				display: grid;
				place-items: center;
			}

			button {
				position: absolute;
				top: 20%;
				z-index: 3;
				background-color: unset;
			}

			svg {
				height: 2rem;
				fill: none;
				stroke: white;
				stroke-miterlimit: 10;
				stroke-width: 6px;
			}

			.right {
				right: 4rem;
				transform: translateY(-50%) rotate(-90deg);
			}

			.right:hover {
				transform: translateY(-50%) rotate(-90deg) scale(1.1);
			}

			.left {
				left: 4rem;
				transform: translateY(-50%) rotate(90deg);
			}

			.left:hover {
				transform: translateY(-50%) rotate(90deg)  scale(1.1);
			}

			@media screen and (max-width: 1070px) {

				.main-img, .second-img {
					background-size: auto 100%;
					background-position-x: 62%;

				}

				

				.content, .main-slide > li {
					height: 70vh;
				}

			}

			@media screen and (max-width: 730px) {

				button {
					display: none;
				}

				.second-slide > li {
					padding: 3rem;
				}

			}

		`}</style>
	</div>
}

export default SliderDoble