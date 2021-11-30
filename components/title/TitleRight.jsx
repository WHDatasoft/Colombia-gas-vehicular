const TitleRight = ({ title }) => {

	return <div className="title">

		<img src="/icon/row.svg" alt="icono de flechaz" />
		<h2>{title}</h2>

		<style jsx>{`
	
			.title {
				display: grid;
				grid-template-columns: 1fr auto;
				align-items: center;
				margin: 2rem 0;
			}

			.title img {
				height: 1rem;
				transform-origin: center;
				transform: rotate(-90deg);
				justify-self: flex-end;
				align-self: center;
				animation: right 1s infinite alternate;
				margin: 0 1rem;
			}

			h2 {
				position: relative;
				font-size: 1.5rem;
				background-color: var(--blue);
				padding: 1rem 3rem 1rem 1rem;
				color: white;
				font-weight: 600;
			}

			h2:before {
				content: "";
				position: absolute;
				height: 120%;
				top: -18%;
				right: 0;
				border-style: solid;
				border-color: transparent var(--blue) transparent transparent;
				border-width: 5px 2rem 5px 0;
			}

			@keyframes right {
				from {
					transform: rotate(-90deg) translateY(-.5rem);
				}

				to {
					transform: rotate(-90deg) translateY(.5rem);
				}
			}
	
		`}</style>

	</div>
}

export default TitleRight