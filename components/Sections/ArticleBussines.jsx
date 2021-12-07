import { useState } from "react"

const ArticleBussines = ({ img, type, bussinesName, characterList }) => {

	const [isBig, setIsBig] = useState(false)

	const onClick = () => {
		setIsBig(big => !big)
		console.log('test')
	}

	return <div className="background" onClick={onClick}>

		<article>

			<img src={`/img/${type ? 'repuestos' : 'empresas'}/${img}`} alt="" />

			<div className="description">
				<ul>
					<li>
						<span>{type ? 'Nombre:' : 'Empresa:'}</span>
						{' '}
						<h2><strong>{bussinesName}</strong>.</h2>
					</li>
					{
						characterList
							?
							characterList.map(item => (
								<li key={item}>{item}</li>
							))
							:
							null
					}
				</ul>
			</div>

			<div className="title">
				<span>{type ? '' : 'Empresa:'}</span>
				{' '}
				<h2>{bussinesName}</h2>
			</div>

		</article>

		<style jsx>{`

			.background {
				position: ${isBig ? 'fixed' : 'relative'};
				z-index: ${isBig ? '5' : '0'};
				top: 0;
				left: 0;
				width: ${isBig ? '100%' : 'auto'};
				height: ${isBig ? '100vh' : 'auto'};
				display: grid;
				place-items: center;
				background-color: ${isBig ? 'var(--blue-transparent)' : 'unset'};
			}

			article {
				position: relative;
				width: ${isBig ? '70vmin' : '20rem'};
				height: ${isBig ? '70vmin' : '20rem'};
				cursor: pointer;
				border-right: 1px solid var(--dark-green);
				margin-bottom: 6rem;
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				position: relative;
				z-index: 2;
			}

			h2 {
				display: inline;
			}

			.title {
				display: ${isBig && characterList ? 'none' : 'block'};
				background-color: var(--blue);
				width: 100%;
				text-align: center;
				color: white;
				font-weight: 700;
				padding: .5rem 0;
				border-radius: 0 0 1.5rem 1.5rem;
				transition: bottom .5s;
				pointer-events: none;
			}

			.description {
				font-size: 1rem;
				display: ${isBig && characterList ? 'block' : 'none'};
				position: absolute;
				left: 50%;
				bottom: -6rem;
				box-sizing: border-box;
				background-color: var(--blue);
				width: 70%;
				color: white;
				padding: 1rem;
				border-radius: 0 0 2rem 2rem;
				z-index: 1;
				transform: translateX(-50%);
				transition: bottom .5s .5s;
				height: 6rem;
			}

			article:hover .title {
				bottom: 0rem;
			}

			.description:before, .description:after  {
				content: "";
				position: absolute;
				height: 90%;
				width:2rem;
				background-color: var(--blue);
				top: 0;
				z-index: -1;
			}

			.description:before {
				right: -2rem;
				transform-origin: top right;
				transform: rotate(24.5deg);
			}

			.description:after  {
				left: -2rem;
				transform-origin: top left;
				transform: rotate(-24.5deg);
			}

			strong {
				font-weight: 600;
			}

			@media screen and (max-width: 650px) {
				.description {
					font-size: .8rem;
				}
			}

			@media screen and (max-width: 400px) {
				.description {
					font-size: .7rem;
				}
			}

			

		`}</style>

	</div>
}

export default ArticleBussines