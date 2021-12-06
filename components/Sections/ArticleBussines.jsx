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

			<div className="title">
				<span>{type ? '' : 'Empresa:'}</span>
				{' '}
				<h2>{bussinesName}</h2>
			</div>

		</article>

		<style jsx>{`

			.background {
				position: ${isBig ? 'fixed' : 'relative'};
				z-index: ${isBig ? '3' : '0'};
				top: 0;
				left: 0;
				width: ${isBig ? '100%' : 'auto'};
				height: ${isBig ? '100vh' : 'auto'};
				display: grid;
				place-items: center;
				background-color: var(--blue-transparent);

			}

				article {
					width: ${isBig ? '70vmin' : '20rem'};
					height: ${isBig ? '70vmin' : '20rem'};
					cursor: pointer;
					border-right: 1px solid var(--dark-green);
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

			`}</style>

	</div>
}

export default ArticleBussines