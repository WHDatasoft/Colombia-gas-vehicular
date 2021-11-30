import Link from 'next/link'

const ServiceLink = ({ url }) => {
	return <div className="container">

		<Link href={url}>
			<a>
				<svg viewBox="0 0 89.39 47.12"><polyline points="0.81 1.49 44.62 23.39 88.72 1.34" /><polyline points="0.67 23.53 44.48 45.44 88.58 23.39" /></svg>
				<span>Conoce más</span>
			</a>
		</Link>

		<style jsx>{`


			a {
				display: block;
				color: var(--dark-green);
				background-color: white;
				border-radius: 2rem;
				display: grid;
				place-items: center;
				grid-template-columns: 1fr auto;
				padding: 1rem 2rem;
				grid-column-gap: 1rem;
				transition: transform .5s;
				font-size: 1.5rem;
			}

			a:hover {
				transform: scale(1.1)
			}

			svg {
				height: 1rem;
				fill: none;
				stroke: var(--dark-green);
				stroke-miterlimit: 10;
				stroke-width: 6px;
				transform: rotate(-90deg);
				transition: transform .5s;
				animation: move-right 1s infinite alternate;
			}

			@keyframes move-right {
				from {
					transform: rotate(-90deg) translateY(-.5rem);
				}

				to {
					transform: rotate(-90deg) translateY(.5em);
				}
			}


		`}</style>
	</div>
}

export default ServiceLink